"""병목 도메인 보강 크롤러 — unemployment / child-support / rehabilitation.

법제처 Open API(prec, expc) 확장 쿼리로 기존 cases.json에 없는 신규 판례·해석례만 추출.
기존 judge ID 집합에 없는 것만 append → 기존 데이터 건들지 않음.

사용법:
  python crawl_bottleneck_augment.py                 # 3개 도메인 전부
  python crawl_bottleneck_augment.py unemployment    # 특정 도메인만
"""

from __future__ import annotations

import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

API_LIST = "http://www.law.go.kr/DRF/lawSearch.do"
API_DETAIL = "http://www.law.go.kr/DRF/lawService.do"
OC = "lawnguide2026"
API_DELAY = 0.5

# 병목 도메인별 확장 쿼리 (target별)
DOMAIN_CONFIG: dict[str, dict[str, list[str]]] = {
    "unemployment": {
        "prec": [
            "실업급여", "구직급여", "고용보험", "이직사유", "부정수급", "수급자격제한",
            "수급자격", "피보험자격", "실업인정", "재취업활동", "조기재취업수당",
            "실업급여 환수", "실업급여 반환", "취업촉진수당",
        ],
        "expc": ["고용보험", "실업급여", "이직사유", "구직급여"],
    },
    "child-support": {
        "prec": [
            "양육비", "양육비이행", "친권자지정", "양육권", "면접교섭",
            "양육비감액", "양육비증액", "양육비 직접지급", "양육비 이행명령",
            "감치", "이행확보", "양육비 채권", "양육비 집행",
            "양육비 미지급", "양육비 강제집행", "양육비 채무자", "비양육친",
            "친권 양육권", "면접교섭 거부", "면접교섭권", "양육비 산정",
            "한부모가족", "양육비이행관리원", "친자관계", "유전자검사 친자",
            "양육비 청구", "양육비 채무불이행", "양육비 가집행",
        ],
        "expc": [
            "양육비", "친권", "면접교섭", "양육비이행", "한부모가족",
            "양육비이행관리원", "양육비 선지급",
        ],
    },
    "rehabilitation": {
        "prec": [
            "개인회생", "회생절차", "변제계획", "채무자 회생", "개인회생절차",
            "회생 인가", "회생채권", "회생계획안", "회생절차 개시",
            "변제 불능", "회생 면책", "회생 폐지", "회생 인가결정",
            "개인회생 신청", "회생 변제",
        ],
        "expc": ["개인회생", "회생절차", "변제계획"],
    },
    "bankruptcy": {
        "prec": [
            "파산", "면책", "파산선고", "파산관재인", "면책불허가", "파산면책",
            "개인파산", "파산채권", "동시폐지", "면책 결정", "파산 신청",
            "비면책채권", "재산 은닉", "파산 절차", "면책 취소",
        ],
        "expc": ["파산", "면책"],
    },
    "retirement": {
        "prec": [
            "퇴직금", "퇴직연금", "퇴직급여", "평균임금", "계속근로",
            "퇴직금 중간정산", "퇴직급여법", "근로자퇴직급여보장법",
            "계속근로기간", "퇴직금 차액",
        ],
        "expc": ["퇴직금", "퇴직급여", "평균임금"],
    },
    "jeonse-fraud": {
        "prec": [
            "전세사기", "깡통전세", "보증금 사기", "임대인 잠적",
            "보증금 횡령", "전세 피해", "보증금 반환 사기", "이중계약 전세",
            "갱신거절 보증금", "전세 보증금 미반환",
        ],
        "expc": ["전세사기", "보증금 반환"],
    },
    "school-violence": {
        "prec": [
            "학교폭력예방법", "학교폭력대책심의위원회", "학교폭력 가해",
            "학교폭력 피해", "학교폭력 처분", "학교폭력 조치",
            "학생 폭행", "학교 따돌림", "사이버 학교폭력", "학교폭력 행정심판",
        ],
        "expc": ["학교폭력예방법", "학교폭력"],
    },
    "stalking": {
        "prec": [
            "스토킹처벌법", "스토킹범죄", "잠정조치", "접근금지 명령",
            "스토킹 신고", "지속 반복 접근", "위치추적 전자장치",
            "스토킹 합의", "스토킹 양형",
            "사이버스토킹", "온라인 스토킹", "SNS 스토킹", "메신저 스토킹",
            "스토킹 응급조치", "스토킹 잠정조치", "전자장치 부착",
            "스토킹 가중처벌", "스토킹 보호명령", "스토킹 피해자",
        ],
        "expc": ["스토킹", "스토킹처벌법", "스토킹 잠정조치"],
    },
    "fraud": {
        "prec": [
            "사기죄", "보이스피싱", "스미싱", "큐싱", "사이버사기",
            "인터넷사기", "메신저피싱", "가상자산 사기", "중고거래 사기",
            "투자사기", "로맨스스캠", "딥페이크 사기", "명의도용",
            "명의대여 사기", "부동산 사기", "분양 사기",
            "컴퓨터등사용사기", "신용카드 부정사용", "보험사기",
            "자동차 사기", "사기 환수", "사기 합의", "사기죄 양형",
            "재물 편취", "기망행위", "사기 미수", "사기 공범",
            "전기통신금융사기", "지급정지", "피싱 사이트",
        ],
        "expc": [
            "사기죄", "보이스피싱", "전기통신금융사기", "사이버사기",
            "통신사기피해환급법",
        ],
    },
    "digital-sex-crime": {
        "prec": [
            "불법촬영", "성착취물", "디지털성범죄", "통신매체이용음란",
            "리벤지포르노", "딥페이크", "n번방", "성적 촬영물",
            "아동청소년의성보호 카메라", "허위영상물",
            "딥페이크 성착취", "AI 성착취물", "음란 영상물 유포",
            "성적 촬영물 협박", "카메라이용 촬영", "불법 합성물",
            "텔레그램 성착취", "디지털 성착취", "성착취 영상물",
            "n번방 방지법", "성착취물 소지", "허위영상물 유포",
        ],
        "expc": [
            "디지털성범죄", "불법촬영", "성착취물", "허위영상물",
            "딥페이크",
        ],
    },
    "sexual-harassment": {
        "prec": [
            "직장내성희롱", "성희롱 시정", "성희롱 손해배상",
            "남녀고용평등법", "성희롱 예방교육 미실시", "성희롱 가해",
        ],
        "expc": ["성희롱", "직장내성희롱"],
    },
    "sangga": {
        "prec": [
            "상가임대차", "상가건물임대차보호법", "권리금",
            "상가권리금", "상가 보증금", "상가 갱신요구권",
            "상가 차임증감", "상가 명도", "상가 환산보증금",
        ],
        "expc": ["상가임대차", "권리금"],
    },
    "small-claims": {
        "prec": [
            "지급명령", "소액재판", "소액사건심판법", "소액심판",
            "공시송달 지급명령", "지급명령 이의신청", "독촉절차",
        ],
        "expc": ["지급명령", "소액사건"],
    },
}


def clean_html(text: str | None) -> str:
    if not text:
        return ""
    return re.sub(r"<[^>]+>", "", text).strip()


def fetch_url(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8")


def search_prec(query: str) -> list[dict]:
    """Return list of prec items (id/사건명/사건번호/선고일자)."""
    out: list[dict] = []
    page = 1
    display = 100
    while True:
        params = urllib.parse.urlencode({
            "OC": OC, "target": "prec", "type": "XML",
            "query": query, "display": display, "sort": "ddes", "page": page,
        })
        try:
            text = fetch_url(f"{API_LIST}?{params}")
            root = ET.fromstring(text)
        except Exception as e:
            print(f"  ⚠️ prec '{query}' p{page}: {e}")
            break
        precs = root.findall(".//prec")
        if not precs:
            break
        for e in precs:
            d = {c.tag: (c.text or "").strip() for c in e}
            if "국세" in d.get("데이터출처명", ""):
                continue
            out.append({
                "id": d.get("판례일련번호", ""),
                "사건명": clean_html(d.get("사건명", "")),
                "사건번호": d.get("사건번호", ""),
                "선고일자": d.get("선고일자", ""),
            })
        if len(precs) < display:
            break
        page += 1
        time.sleep(API_DELAY)
    return out


def fetch_prec_detail(case_id: str) -> dict | None:
    params = urllib.parse.urlencode({"OC": OC, "target": "prec", "type": "XML", "ID": case_id})
    try:
        text = fetch_url(f"{API_DETAIL}?{params}")
    except Exception as e:
        print(f"  ⚠️ detail {case_id}: {e}")
        return None
    if "일치하는" in text and "없습니다" in text:
        return None
    try:
        root = ET.fromstring(text)
    except Exception:
        return None
    return {
        "법원명": root.findtext("법원명", "").strip(),
        "판시사항": clean_html(root.findtext("판시사항", "")),
        "판결요지": clean_html(root.findtext("판결요지", "")),
    }


def search_expc(query: str) -> list[dict]:
    out: list[dict] = []
    page = 1
    display = 100
    while True:
        params = urllib.parse.urlencode({
            "OC": OC, "target": "expc", "type": "XML",
            "query": query, "display": display, "sort": "ddes", "page": page,
        })
        try:
            text = fetch_url(f"{API_LIST}?{params}")
            root = ET.fromstring(text)
        except Exception as e:
            print(f"  ⚠️ expc '{query}' p{page}: {e}")
            break
        items = root.findall(".//expc")
        if not items:
            break
        for e in items:
            out.append({
                "id": (e.findtext("법령해석례일련번호") or "").strip(),
                "안건명": clean_html(e.findtext("안건명")),
                "안건번호": (e.findtext("안건번호") or "").strip(),
                "회신기관명": (e.findtext("회신기관명") or "").strip(),
                "회신일자": (e.findtext("회신일자") or "").strip(),
            })
        if len(items) < display:
            break
        page += 1
        time.sleep(API_DELAY)
    return out


def fetch_expc_detail(doc_id: str) -> dict | None:
    params = urllib.parse.urlencode({"OC": OC, "target": "expc", "type": "XML", "ID": doc_id})
    try:
        text = fetch_url(f"{API_DETAIL}?{params}")
    except Exception as e:
        print(f"  ⚠️ expc detail {doc_id}: {e}")
        return None
    if "일치하는" in text and "없습니다" in text:
        return None
    try:
        root = ET.fromstring(text)
    except Exception:
        return None
    return {
        "회신기관명": (root.findtext("회신기관명") or "").strip(),
        "질의기관명": (root.findtext("질의기관명") or "").strip(),
        "안건명": clean_html(root.findtext("안건명")),
        "질의요지": clean_html(root.findtext("질의요지")),
        "회답": clean_html(root.findtext("회답")),
        "이유": clean_html(root.findtext("이유")),
    }


def load_existing_case_ids(domain: str) -> set[str]:
    path = Path(f"kb/{domain}/cases.json")
    if not path.is_file():
        return set()
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return set()
    ids: set[str] = set()
    for c in data or []:
        if not isinstance(c, dict):
            continue
        for k in ("판례일련번호", "판례ID", "caseId", "case_id", "사건번호"):
            v = c.get(k)
            if isinstance(v, str) and v.strip():
                ids.add(v.strip())
    return ids


def crawl_domain(domain: str) -> tuple[int, int]:
    """Return (new_prec_count, new_expc_count)."""
    cfg = DOMAIN_CONFIG[domain]
    existing_ids = load_existing_case_ids(domain)
    print(f"\n📂 [{domain}] 기존 ID {len(existing_ids)}개 확보 — 크롤 시작")

    # 1) prec
    prec_new: list[dict] = []
    seen = set(existing_ids)
    for q in cfg.get("prec", []):
        print(f"  🔍 prec '{q}'")
        try:
            items = search_prec(q)
        except Exception as e:
            print(f"     ERR: {e}")
            continue
        for it in items:
            cid = it["id"]
            sagun = it.get("사건번호", "")
            if not cid or cid in seen or (sagun and sagun in seen):
                continue
            seen.add(cid)
            if sagun:
                seen.add(sagun)
            detail = fetch_prec_detail(cid)
            time.sleep(API_DELAY)
            if detail is None:
                continue
            prec_new.append({
                "판례일련번호": cid,
                "사건번호": sagun,
                "사건명": it["사건명"],
                "선고일자": it.get("선고일자", ""),
                "법원명": detail["법원명"],
                "판시사항": detail["판시사항"],
                "판결요지": detail["판결요지"],
            })
        print(f"     누적 신규 {len(prec_new)}건")

    # 2) expc
    expc_new: list[dict] = []
    expc_seen: set[str] = set()
    # Load existing expc if we've saved before
    expc_path = Path(f"kb/{domain}/expc_augment.json")
    if expc_path.is_file():
        try:
            prev = json.loads(expc_path.read_text(encoding="utf-8"))
            for e in prev or []:
                if e.get("법령해석례일련번호"):
                    expc_seen.add(e["법령해석례일련번호"])
        except Exception:
            pass
    for q in cfg.get("expc", []):
        print(f"  🔍 expc '{q}'")
        try:
            items = search_expc(q)
        except Exception as e:
            print(f"     ERR: {e}")
            continue
        for it in items:
            did = it["id"]
            if not did or did in expc_seen:
                continue
            expc_seen.add(did)
            detail = fetch_expc_detail(did)
            time.sleep(API_DELAY)
            if detail is None:
                continue
            expc_new.append({
                "법령해석례일련번호": did,
                "안건번호": it["안건번호"],
                "안건명": it["안건명"],
                "회신기관명": detail["회신기관명"] or it.get("회신기관명", ""),
                "질의기관명": detail["질의기관명"],
                "회신일자": it.get("회신일자", ""),
                "질의요지": detail["질의요지"],
                "회답": detail["회답"],
                "이유": detail["이유"],
            })
        print(f"     누적 신규 {len(expc_new)}건")

    # 저장
    if prec_new:
        cases_path = Path(f"kb/{domain}/cases.json")
        cases_path.parent.mkdir(parents=True, exist_ok=True)
        existing = []
        if cases_path.is_file():
            try:
                existing = json.loads(cases_path.read_text(encoding="utf-8"))
            except Exception:
                existing = []
        merged = existing + prec_new
        cases_path.write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"  💾 {cases_path} 병합: 기존 {len(existing)} + 신규 {len(prec_new)} = 총 {len(merged)}")

    if expc_new:
        expc_path.write_text(json.dumps(expc_new, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"  💾 {expc_path} 신규 {len(expc_new)}건")

    return len(prec_new), len(expc_new)


def main() -> int:
    domains = sys.argv[1:] or list(DOMAIN_CONFIG.keys())
    for d in domains:
        if d not in DOMAIN_CONFIG:
            print(f"❌ 알 수 없는 도메인: {d}")
            return 1

    total_prec = 0
    total_expc = 0
    for d in domains:
        p, e = crawl_domain(d)
        total_prec += p
        total_expc += e

    print()
    print(f"=== 완료 ===")
    print(f"신규 판례 총 {total_prec:,}건, 법령해석례 총 {total_expc:,}건")
    return 0


if __name__ == "__main__":
    sys.exit(main())
