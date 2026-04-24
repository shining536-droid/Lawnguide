#!/usr/bin/env python3
"""
소비자24 (consumer.go.kr) 피해구제·상담사례 수집
- 피해구제 (한국소비자원 + 콘텐츠분쟁조정위): 1,497건
- 상담사례 (1372 소비자상담센터): 11,342건
- 저장: kb/_raw/kca_dmgerlif.json, kb/_raw/kca_consulting.json
        + 도메인 자동 분류 후 kb/{domain}/kca_cases.json 에 병합

사용법:
  python crawl_kca.py --target dmgerlif --dry     # 피해구제 1페이지만
  python crawl_kca.py --target dmgerlif           # 피해구제 전체
  python crawl_kca.py --target consulting         # 상담사례 전체
  python crawl_kca.py --target all                # 둘 다
"""

from __future__ import annotations
import argparse
import json
import os
import re
import ssl
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

BASE = "https://www.consumer.go.kr"
UA = "Mozilla/5.0 (compatible; lawnguide-research/1.0)"
DELAY = 1.2
ROW = 25

DMGERLIF_LIST = f"{BASE}/user/ftc/consumer/dmgerlifcase/115/selectDmgeRlifCaseList.do"
DMGERLIF_VIEW = f"{BASE}/user/ftc/consumer/dmgerlifcase/115/selectDmgeRlifCaseView.do"
CONSULTING_LIST = f"{BASE}/user/ftc/consumer/cnsltcase/114/selectCnsltCaseList.do"
CONSULTING_VIEW = f"{BASE}/user/ftc/consumer/cnsltcase/114/selectCnsltCaseView.do"

_ctx = ssl.create_default_context()
_ctx.check_hostname = False
_ctx.verify_mode = ssl.CERT_NONE


def fetch(url: str, params: dict | None = None, referer: str | None = None) -> str:
    if params:
        url = f"{url}?{urllib.parse.urlencode(params)}"
    headers = {"User-Agent": UA}
    if referer:
        headers["Referer"] = referer
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=30, context=_ctx) as r:
        return r.read().decode("utf-8", errors="replace")


def clean_text(html: str) -> str:
    text = re.sub(r"<script[^>]*>.*?</script>", " ", html, flags=re.DOTALL)
    text = re.sub(r"<style[^>]*>.*?</style>", " ", text, flags=re.DOTALL)
    text = re.sub(r"<[^>]+>", "\n", text)
    text = re.sub(r"&nbsp;", " ", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"&lt;", "<", text)
    text = re.sub(r"&gt;", ">", text)
    text = re.sub(r"&quot;", '"', text)
    text = re.sub(r"[\t ]+", " ", text)
    text = re.sub(r"\n\s*\n+", "\n", text)
    return text.strip()


# ── 피해구제 (dmgerlif) ───────────────────────────
def parse_dmgerlif_list(html: str) -> list[dict]:
    items = []
    m = re.search(r"<tbody[^>]*>(.*?)</tbody>", html, re.DOTALL)
    if not m:
        return items
    rows = re.split(r"<tr[^>]*>", m.group(1))[1:]
    for row in rows:
        sn_m = re.search(r"dmgeRlifCaseSn=(\d+)", row)
        if not sn_m:
            continue
        # Cells: 번호, 제목, 출처, 조회수, [결정일자]
        cells = re.findall(r"<td[^>]*>(.*?)</td>", row, re.DOTALL)
        cells = [re.sub(r"<[^>]+>", "", c).replace("&nbsp;", " ").strip() for c in cells]
        title_m = re.search(r">\s*([^<>]{5,})\s*</a>", row)
        title = title_m.group(1).strip() if title_m else (cells[1] if len(cells) > 1 else "")
        items.append({
            "sn": sn_m.group(1),
            "no": cells[0] if cells else "",
            "사건명": title,
            "출처": cells[2] if len(cells) > 2 else "",
            "조회수": cells[3] if len(cells) > 3 else "",
            "결정일자": cells[4] if len(cells) > 4 else "",
        })
    return items


def parse_dmgerlif_detail(html: str) -> dict:
    """bbs_view_content 내 질문/답변 또는 사건개요/판단 추출"""
    idx = html.find("bbs_view_content")
    if idx < 0:
        return {"질문": "", "답변": "", "본문": ""}
    block = html[idx:idx + 20000]
    text = clean_text(block)
    # 잘라내기: "해당 페이지에서 제공하는 정보에 대해" 이후는 UI 요소
    cut = re.search(r"해당\s*페이지에서\s*제공하는\s*정보", text)
    if cut:
        text = text[:cut.start()].strip()
    # 질문/답변 분리
    q, a = "", ""
    parts = re.split(r"\n답변\n", text, maxsplit=1)
    if len(parts) == 2:
        q = parts[0].strip()
        a = parts[1].strip()
        # Remove leading "bbs_view_content">" prefix
        q = re.sub(r'^bbs_view_content"?>?\s*', "", q)
    else:
        q = text
    return {
        "질문": q[:2500],
        "답변": a[:2500],
        "본문": text[:4500],
    }


# ── 상담사례 (consulting) ─────────────────────────
def parse_consulting_list(html: str) -> list[dict]:
    items = []
    m = re.search(r"<tbody[^>]*>(.*?)</tbody>", html, re.DOTALL)
    if not m:
        return items
    rows = re.split(r"<tr[^>]*>", m.group(1))[1:]
    for row in rows:
        sn_m = re.search(r"prgnCnsltCaseSn=(\d+)", row)
        if not sn_m:
            continue
        cells = re.findall(r"<td[^>]*>(.*?)</td>", row, re.DOTALL)
        cells = [re.sub(r"<[^>]+>", "", c).replace("&nbsp;", " ").strip() for c in cells]
        title_m = re.search(r">\s*([^<>]{5,})\s*</a>", row)
        title = title_m.group(1).strip() if title_m else (cells[1] if len(cells) > 1 else "")
        items.append({
            "sn": sn_m.group(1),
            "no": cells[0] if cells else "",
            "사건명": title,
            "출처": cells[2] if len(cells) > 2 else "",
            "게시일": cells[3] if len(cells) > 3 else "",
        })
    return items


def parse_consulting_detail(html: str) -> dict:
    return parse_dmgerlif_detail(html)  # 동일 구조


# ── 도메인 매핑 ────────────────────────────────────
DOMAIN_KEYWORDS = [
    (["자동차", "차량", "렌터카", "정비", "교통"], "traffic-accident"),
    (["보이스피싱", "피싱", "사기", "허위", "기만"], "fraud"),
    (["투자", "펀드", "코인", "가상자산", "주식", "증권"], "fraud"),
    (["대출", "대부", "사채"], "fraud"),
    (["보험", "실손", "자동차보험", "건강보험"], "traffic-accident"),
    (["부동산", "매매", "중개", "공인중개사"], "real-estate-sale"),
    (["전세", "임대차", "보증금", "임차", "월세"], "jeonse"),
    (["상가", "임대차", "권리금"], "sangga"),
    (["퇴직", "퇴직금", "퇴직연금"], "retirement"),
    (["실업급여", "고용보험", "구직급여"], "unemployment"),
    (["이혼", "양육", "위자료", "재산분할"], "divorce"),
    (["양육비", "친권"], "child-support"),
    (["상속", "유류분", "상속포기", "유언"], "inheritance"),
    (["명예훼손", "모욕", "허위사실"], "defamation"),
    (["음주운전", "음주측정"], "dui"),
    (["스토킹", "접근금지"], "stalking"),
    (["성폭력", "강제추행", "성추행"], "sex-crime"),
    (["성희롱"], "sexual-harassment"),
    (["산재", "산업재해", "업무상재해"], "industrial-accident"),
    (["학교폭력", "학폭", "따돌림"], "school-violence"),
    (["층간소음", "이웃"], "neighbor-dispute"),
    (["회생", "변제", "면책"], "rehabilitation"),
    (["파산"], "bankruptcy"),
    (["경매", "배당"], "real-estate-auction"),
    (["부당해고", "해고"], "dismissal"),
    (["임금체불", "최저임금", "야간수당"], "wage"),
]


def map_domain(title: str, content: str) -> list[str]:
    text = f"{title} {content[:500]}"
    out = []
    for keywords, domain in DOMAIN_KEYWORDS:
        if any(k in text for k in keywords):
            out.append(domain)
    return list(set(out))


# ── 메인 크롤 ──────────────────────────────────────
def crawl_dmgerlif(max_pages: int, out_raw: Path) -> list[dict]:
    all_items = []
    for page in range(1, max_pages + 1):
        try:
            html = fetch(DMGERLIF_LIST, {"page": page, "row": ROW})
        except Exception as e:
            print(f"[dmg list p{page}] ERR: {e}")
            break
        items = parse_dmgerlif_list(html)
        if not items:
            print(f"[dmg list p{page}] 빈 페이지 → 종료")
            break
        print(f"[dmg list p{page}] {len(items)}건")
        all_items.extend(items)
        time.sleep(DELAY)

    seen = set()
    deduped = []
    for it in all_items:
        if it["sn"] in seen:
            continue
        seen.add(it["sn"])
        deduped.append(it)
    print(f"[dmg] 목록 {len(deduped)}건")

    cases = []
    for idx, it in enumerate(deduped, 1):
        try:
            html = fetch(DMGERLIF_VIEW, {"dmgeRlifCaseSn": it["sn"]}, referer=DMGERLIF_LIST)
        except Exception as e:
            print(f"[dmg detail {it['sn']}] ERR: {e}")
            continue
        detail = parse_dmgerlif_detail(html)
        content_for_map = f"{it['사건명']} {detail['질문']}"
        domains = map_domain(it["사건명"], content_for_map)
        cases.append({
            "사례ID": f"KCA-DMG-{it['sn']}",
            "sn": it["sn"],
            "source": it["출처"],
            "사건명": it["사건명"],
            "결정일자": it["결정일자"],
            "결정기관": it["출처"] or "한국소비자원",
            "domains": domains,
            **detail,
        })
        if idx % 50 == 0:
            print(f"[dmg detail] {idx}/{len(deduped)}")
            out_raw.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")
        time.sleep(DELAY)

    out_raw.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[dmg] raw → {out_raw} ({len(cases)}건)")
    return cases


def crawl_consulting(max_pages: int, out_raw: Path) -> list[dict]:
    all_items = []
    for page in range(1, max_pages + 1):
        try:
            html = fetch(CONSULTING_LIST, {"page": page, "row": ROW})
        except Exception as e:
            print(f"[cns list p{page}] ERR: {e}")
            break
        items = parse_consulting_list(html)
        if not items:
            break
        print(f"[cns list p{page}] {len(items)}건")
        all_items.extend(items)
        time.sleep(DELAY)

    seen = set()
    deduped = []
    for it in all_items:
        if it["sn"] in seen:
            continue
        seen.add(it["sn"])
        deduped.append(it)
    print(f"[cns] 목록 {len(deduped)}건")

    cases = []
    for idx, it in enumerate(deduped, 1):
        try:
            html = fetch(CONSULTING_VIEW, {"prgnCnsltCaseSn": it["sn"]}, referer=CONSULTING_LIST)
        except Exception as e:
            print(f"[cns detail {it['sn']}] ERR: {e}")
            continue
        detail = parse_consulting_detail(html)
        content_for_map = f"{it['사건명']} {detail['질문']}"
        domains = map_domain(it["사건명"], content_for_map)
        cases.append({
            "사례ID": f"KCA-CNS-{it['sn']}",
            "sn": it["sn"],
            "source": it["출처"],
            "사건명": it["사건명"],
            "게시일": it["게시일"],
            "결정기관": it["출처"] or "1372 소비자상담센터",
            "domains": domains,
            **detail,
        })
        if idx % 100 == 0:
            print(f"[cns detail] {idx}/{len(deduped)}")
            out_raw.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")
        time.sleep(DELAY)

    out_raw.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[cns] raw → {out_raw} ({len(cases)}건)")
    return cases


def distribute_to_domains(cases: list[dict], outfile_name: str):
    by_domain: dict[str, list[dict]] = {}
    for c in cases:
        for d in c["domains"]:
            by_domain.setdefault(d, []).append(c)
    for domain, items in by_domain.items():
        out_dir = Path(f"kb/{domain}")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / outfile_name
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
        print(f"[save {outfile_name}] {domain}: 기존 {len(existing)} + 신규 {len(new_only)} = {len(merged)}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--target", choices=["dmgerlif", "consulting", "all"], default="dmgerlif")
    parser.add_argument("--dry", action="store_true")
    parser.add_argument("--max-pages", type=int, default=0, help="0=무제한")
    args = parser.parse_args()

    os.makedirs("kb/_raw", exist_ok=True)

    if args.dry:
        max_pages = 1
    elif args.max_pages > 0:
        max_pages = args.max_pages
    else:
        max_pages = 9999

    if args.target in ("dmgerlif", "all"):
        cases = crawl_dmgerlif(max_pages, Path("kb/_raw/kca_dmgerlif.json"))
        if not args.dry:
            distribute_to_domains(cases, "kca_cases.json")

    if args.target in ("consulting", "all"):
        cases = crawl_consulting(max_pages, Path("kb/_raw/kca_consulting.json"))
        if not args.dry:
            distribute_to_domains(cases, "kca_consulting.json")


if __name__ == "__main__":
    main()
