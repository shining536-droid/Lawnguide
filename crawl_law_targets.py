#!/usr/bin/env python3
"""
법제처 OpenAPI 다중 target 통합 크롤러
- 지원: iaciac, nhrck, acr, ppc, ftc, ecc, moelCgmExpc, mojCgmExpc, npaCgmExpc, moeCgmExpc 등
- 저장: kb/_raw/{target}.json (전량) + kb/{domain}/{target}_cases.json (도메인 분배)

사용법:
  python crawl_law_targets.py iaciac           # 산재 재심사
  python crawl_law_targets.py nhrck            # 인권위
  python crawl_law_targets.py iaciac nhrck     # 여러 개 순차
  python crawl_law_targets.py iaciac --max 100 # 100건만 (테스트)
"""

from __future__ import annotations
import argparse
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
    except Exception:
        pass

API_LIST = "http://www.law.go.kr/DRF/lawSearch.do"
API_DETAIL = "http://www.law.go.kr/DRF/lawService.do"
OC = "lawnguide2026"
DELAY = 0.4
SAVE_EVERY = 100

# ── target별 메타: 리스트 항목 태그, ID 필드, 본문 필드 매핑 ──
TARGET_CONFIG = {
    "iaciac": {
        "list_item": "iaciac",
        "id_field": "결정문일련번호",
        "title_field": "사건명",
        "case_no_field": "사건번호",
        "date_field": "의결일자",
        "detail_root": "IaciacService",
        "detail_fields": ["사건대분류", "사건중분류", "쟁점", "주문", "이유"],
        "agency": "산업재해보상보험재심사위원회",
        "default_domain": "industrial-accident",
    },
    "nhrck": {
        "list_item": "nhrck",
        "id_field": "결정문일련번호",
        "title_field": "사건명",
        "case_no_field": "사건번호",
        "date_field": "의결일자",
        "detail_root": "NhrckService",
        "detail_fields": ["기관명", "위원회명", "주문", "이유"],
        "agency": "국가인권위원회",
        "default_domain": None,
    },
    "acr": {
        "list_item": "acr",
        "id_field": "결정문일련번호",
        "title_field": "제목",
        "case_no_field": "의안번호",
        "date_field": "의결일",
        "detail_root": "AcrService",
        "detail_fields": ["회의종류", "결정구분", "민원표시", "신청인", "피신청인", "주문", "이유"],
        "agency": "국민권익위원회 중앙행정심판위원회",
        "default_domain": None,
    },
    "ppc": {
        "list_item": "ppc",
        "id_field": "결정문일련번호",
        "title_field": "안건명",
        "case_no_field": "안건번호",
        "date_field": "의결일자",
        "detail_root": "PpcService",
        "detail_fields": ["기관명", "결정", "주문", "이유"],
        "agency": "개인정보보호위원회",
        "default_domain": None,
    },
    "ftc": {
        "list_item": "ftc",
        "id_field": "결정문일련번호",
        "title_field": "사건명",
        "case_no_field": "사건번호",
        "date_field": "의결일자",
        "detail_root": "FtcService",
        "detail_fields": ["문서유형", "피심정보"],
        "agency": "공정거래위원회",
        "default_domain": None,
    },
    "ecc": {
        "list_item": "ecc",
        "id_field": "결정문일련번호",
        "title_field": "사건명",
        "case_no_field": "의결번호",
        "date_field": "의결일자",
        "detail_root": "EccService",
        "detail_fields": ["사건의개요", "신청인", "피신청인", "분쟁의경과"],
        "agency": "중앙환경분쟁조정위원회",
        "default_domain": "neighbor-dispute",
    },
}

# CgmExpc 계열 (부처 법령해석) — 모두 동일 스키마
CGMEXPC_TARGETS = ["moelCgmExpc", "mojCgmExpc", "npaCgmExpc", "moeCgmExpc"]
for t in CGMEXPC_TARGETS:
    TARGET_CONFIG[t] = {
        "list_item": "cgmExpc",
        "id_field": "법령해석일련번호",
        "title_field": "안건명",
        "case_no_field": "안건번호",
        "date_field": "회신일자",
        "detail_root": "CgmExpcService",
        "detail_fields": ["질의기관명", "해석기관명", "질의요지", "회답", "이유"],
        "agency": {"moelCgmExpc": "고용노동부", "mojCgmExpc": "법무부",
                   "npaCgmExpc": "경찰청", "moeCgmExpc": "교육부"}[t],
        "default_domain": None,
    }

# ── 도메인 키워드 매핑 (확장) ──
DOMAIN_KEYWORDS = [
    (["자동차", "차량", "렌터카", "교통사고", "운전중", "도로교통"], "traffic-accident"),
    (["보이스피싱", "피싱", "사기죄", "기망", "허위", "변제의사"], "fraud"),
    (["투자", "펀드", "코인", "가상자산", "주식", "증권", "리딩방"], "fraud"),
    (["대출", "대부", "사채", "여신"], "fraud"),
    (["전세보증금", "임대차", "임차", "월세", "주택임대"], "jeonse"),
    (["전세사기", "깡통전세"], "jeonse-fraud"),
    (["상가임대차", "권리금", "상가건물"], "sangga"),
    (["부동산매매", "공인중개사", "토지거래", "분양"], "real-estate-sale"),
    (["경매", "배당", "강제집행"], "real-estate-auction"),
    (["퇴직금", "퇴직연금", "퇴직급여", "평균임금", "계속근로"], "retirement"),
    (["실업급여", "고용보험", "구직급여", "이직사유", "수급자격"], "unemployment"),
    (["부당해고", "해고무효", "해고예고", "정리해고"], "dismissal"),
    (["임금체불", "체불임금", "최저임금", "야간수당", "통상임금", "포괄임금"], "wage"),
    (["이혼", "재산분할", "위자료", "혼인"], "divorce"),
    (["양육비", "친권", "면접교섭", "양육권"], "child-support"),
    (["상속", "유류분", "상속포기", "한정승인", "유언", "유증"], "inheritance"),
    (["명예훼손", "모욕", "허위사실", "명예감"], "defamation"),
    (["음주운전", "음주측정", "도로교통법 제44조"], "dui"),
    (["스토킹", "접근금지"], "stalking"),
    (["성폭력", "강제추행", "성추행", "강간", "준강간"], "sex-crime"),
    (["성희롱", "직장내성희롱"], "sexual-harassment"),
    (["아동성", "미성년자", "청소년의성보호"], "child-sex-crime"),
    (["불법촬영", "성착취물", "디지털성범죄", "통신매체이용음란"], "digital-sex-crime"),
    (["산재", "산업재해", "업무상재해", "요양급여", "휴업급여", "장해급여"], "industrial-accident"),
    (["학교폭력", "학폭", "따돌림", "학교폭력대책"], "school-violence"),
    (["층간소음", "이웃분쟁", "환경분쟁", "공사소음"], "neighbor-dispute"),
    (["회생", "변제계획", "면책", "회생절차"], "rehabilitation"),
    (["파산", "파산선고", "비면책채권"], "bankruptcy"),
    (["폭행", "상해", "협박"], "assault"),
    (["마약", "필로폰", "대마", "향정신성"], "drug-crime"),
    (["성매매", "성매매알선"], "prostitution"),
    (["소액", "지급명령", "민사소액"], "small-claims"),
    (["개인정보", "주민등록", "유출"], "defamation"),  # 명예훼손 도메인 활용
]


def fetch_url(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def clean(text: str | None) -> str:
    if not text:
        return ""
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def search_list(target: str, page: int, display: int = 100) -> tuple[int, list[dict]]:
    cfg = TARGET_CONFIG[target]
    params = urllib.parse.urlencode({
        "OC": OC, "target": target, "type": "XML",
        "query": "*", "display": display, "sort": "ddes", "page": page,
    })
    text = fetch_url(f"{API_LIST}?{params}")
    root = ET.fromstring(text)
    total = int(root.findtext("totalCnt", "0"))
    items = []
    for e in root.findall(f".//{cfg['list_item']}"):
        items.append({
            "id": e.findtext(cfg["id_field"], "").strip(),
            "사건명": clean(e.findtext(cfg["title_field"], "")),
            "사건번호": e.findtext(cfg["case_no_field"], "").strip(),
            "선고일자": e.findtext(cfg["date_field"], "").strip(),
        })
    return total, items


def fetch_detail(target: str, case_id: str) -> dict | None:
    cfg = TARGET_CONFIG[target]
    params = urllib.parse.urlencode({
        "OC": OC, "target": target, "type": "XML", "ID": case_id,
    })
    text = fetch_url(f"{API_DETAIL}?{params}")
    if "일치하는" in text and "없습니다" in text:
        return None
    try:
        root = ET.fromstring(text)
    except ET.ParseError:
        return None
    out = {}
    for f in cfg["detail_fields"]:
        out[f] = clean(root.findtext(f, ""))
    return out


def map_domain(target: str, item: dict, detail: dict) -> list[str]:
    cfg = TARGET_CONFIG[target]
    # default_domain 이 있으면 (단일 카테고리 전용 소스: iaciac=산재, ecc=환경분쟁)
    # 키워드 매칭을 건너뛰고 default 만 사용 (다른 도메인 오염 방지)
    if cfg.get("default_domain"):
        return [cfg["default_domain"]]
    text = " ".join([
        item.get("사건명", ""),
        item.get("사건번호", ""),
        " ".join(detail.values()),
    ])[:2000]
    out = []
    for keywords, domain in DOMAIN_KEYWORDS:
        if any(k in text for k in keywords):
            out.append(domain)
    return list(set(out))


def crawl_target(target: str, max_records: int = 0) -> int:
    cfg = TARGET_CONFIG[target]
    print(f"\n=== {target} ({cfg['agency']}) ===", flush=True)

    # 목록 수집
    all_items = []
    last_ids: frozenset = frozenset()
    page = 1
    while True:
        try:
            total, items = search_list(target, page=page, display=100)
        except Exception as e:
            print(f"[{target}] list p{page} ERR: {e}", flush=True)
            break
        if not items:
            print(f"[{target}] list p{page} 빈 페이지", flush=True)
            break
        current_ids = frozenset(it["id"] for it in items)
        if current_ids == last_ids:
            print(f"[{target}] list p{page} 동일 ID 반복 → 종료", flush=True)
            break
        last_ids = current_ids
        if page == 1:
            print(f"[{target}] totalCnt={total}", flush=True)
        all_items.extend(items)
        if max_records > 0 and len(all_items) >= max_records:
            all_items = all_items[:max_records]
            break
        page += 1
        time.sleep(DELAY)

    # 중복 제거
    seen = set()
    deduped = []
    for it in all_items:
        if it["id"] in seen or not it["id"]:
            continue
        seen.add(it["id"])
        deduped.append(it)
    print(f"[{target}] 목록 {len(deduped)}건 (중복제거)", flush=True)

    # 상세 수집
    cases = []
    raw_path = Path(f"kb/_raw/{target}.json")
    raw_path.parent.mkdir(parents=True, exist_ok=True)
    for idx, it in enumerate(deduped, 1):
        try:
            detail = fetch_detail(target, it["id"])
        except Exception as e:
            print(f"[{target}] detail {it['id']} ERR: {e}", flush=True)
            continue
        time.sleep(DELAY)
        if not detail:
            continue
        domains = map_domain(target, it, detail)
        cases.append({
            "사례ID": f"{target.upper()}-{it['id']}",
            "id": it["id"],
            "agency": cfg["agency"],
            "사건명": it["사건명"],
            "사건번호": it["사건번호"],
            "선고일자": it["선고일자"],
            "법원명": cfg["agency"],
            "domains": domains,
            **{f: detail.get(f, "") for f in cfg["detail_fields"]},
        })
        if idx % SAVE_EVERY == 0:
            print(f"[{target}] detail {idx}/{len(deduped)}", flush=True)
            raw_path.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")

    raw_path.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[{target}] raw → {raw_path} ({len(cases)}건)", flush=True)

    # 도메인 분배
    by_domain: dict[str, list[dict]] = {}
    for c in cases:
        for d in c["domains"]:
            by_domain.setdefault(d, []).append(c)
    summary = []
    for domain, items in by_domain.items():
        out_dir = Path(f"kb/{domain}")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / f"{target}_cases.json"
        existing = []
        if out_path.is_file():
            try:
                existing = json.loads(out_path.read_text(encoding="utf-8"))
            except Exception:
                existing = []
        existing_ids = {e.get("사례ID") for e in existing}
        new_only = [c for c in items if c["사례ID"] not in existing_ids]
        merged = existing + new_only
        out_path.write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")
        summary.append((domain, len(new_only), len(merged)))
        print(f"[{target}/{domain}] +{len(new_only)} = {len(merged)}", flush=True)
    return len(cases)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("targets", nargs="+", help="대상 target 코드들")
    parser.add_argument("--max", type=int, default=0, help="최대 건수 (테스트용)")
    args = parser.parse_args()

    for t in args.targets:
        if t not in TARGET_CONFIG:
            print(f"❌ 알 수 없는 target: {t}", flush=True)
            continue
        crawl_target(t, max_records=args.max)


if __name__ == "__main__":
    main()
