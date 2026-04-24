#!/usr/bin/env python3
"""
금융감독원 분쟁조정사례 수집 스크립트
- https://www.fss.or.kr/fss/job/fncCnflCase/list.do?menuNo=201195 (총 ~201건)
- 저장: kb/_raw/fss_cases.json (원본 덤프)
       + 자동 분류해 kb/{domain}/fss_cases.json 에 병합

사용법:
  python crawl_fss.py --dry      # 1페이지만
  python crawl_fss.py            # 전체 수집
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

BASE = "https://www.fss.or.kr"
LIST_URL = f"{BASE}/fss/job/fncCnflCase/list.do"
VIEW_URL = f"{BASE}/fss/job/fncCnflCase/view.do"
MENU_NO = "201195"
UA = "Mozilla/5.0 (compatible; lawnguide-research/1.0)"
DELAY = 1.0

_ctx = ssl.create_default_context()
_ctx.check_hostname = False
_ctx.verify_mode = ssl.CERT_NONE


def fetch(url: str, params: dict | None = None) -> str:
    if params:
        url = f"{url}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": LIST_URL})
    with urllib.request.urlopen(req, timeout=30, context=_ctx) as r:
        return r.read().decode("utf-8", errors="replace")


def strip_tags(html: str) -> str:
    text = re.sub(r"<[^>]+>", " ", html)
    text = re.sub(r"&nbsp;", " ", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"&lt;", "<", text)
    text = re.sub(r"&gt;", ">", text)
    text = re.sub(r"&quot;", '"', text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def parse_list(html: str) -> list[dict]:
    """목록 HTML → [{caseSlno, 권역, 유형, 사건명, 등록일}, ...]"""
    items = []
    # 테이블 행 추출
    for row in re.finditer(r"<tr>\s*<td>(\d+)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(\d{4}-\d{2}-\d{2})</td>", html, re.DOTALL):
        no = row.group(1)
        region = strip_tags(row.group(2))
        case_type = strip_tags(row.group(3))
        subject_cell = row.group(4)
        date = row.group(5)
        slno_m = re.search(r"caseSlno=(\d+)", subject_cell)
        title_m = re.search(r">([^<]+)</a>", subject_cell)
        if not slno_m or not title_m:
            continue
        items.append({
            "no": no,
            "caseSlno": slno_m.group(1),
            "권역": region,
            "유형": case_type,
            "사건명": title_m.group(1).strip(),
            "등록일": date,
        })
    return items


def parse_detail(html: str) -> dict:
    """상세 HTML → {분쟁요지, 결정요지, 유의사항, 처리결과}"""
    # dbdata 영역
    m = re.search(r'<div[^>]*class="dbdata"[^>]*>(.*?)</div>\s*</div>', html, re.DOTALL)
    body_html = m.group(1) if m else html
    body = strip_tags(body_html)

    # 섹션 마커로 분할: ▣ 민원내용 / 쟁점 / 처리결과 / 소비자 유의사항
    # 한자·특수기호 다양성 고려
    sections = {}
    parts = re.split(r"(▣|■)\s*", body)
    # parts = ['', '▣', ' 민원내용 ...', '▣', ' 쟁점 ...', ...]
    i = 1
    current_key = None
    while i < len(parts):
        marker = parts[i]
        content = parts[i + 1] if i + 1 < len(parts) else ""
        # content 첫 단어를 섹션 키로
        key_match = re.match(r"\s*([가-힣\s]+?)(?=\s|$)", content[:30])
        if key_match:
            key = re.sub(r"\s+", "", key_match.group(1))
            # 섹션 본문 = key 이후
            body_rest = content[key_match.end():].strip()
            sections[key] = body_rest
        i += 2

    return {
        "민원내용": sections.get("민원내용", "")[:1000],
        "쟁점": sections.get("쟁점", "")[:800],
        "처리결과": sections.get("처리결과", "")[:1000],
        "소비자유의사항": sections.get("소비자유의사항", "")[:500],
        "본문원문": body[:2500],
    }


# ── 권역·유형 → kb 도메인 매핑 ─────────────────────
DOMAIN_MAP = [
    # (키워드 리스트, 대상 도메인)
    (["자동차", "자배", "대인", "대물"], "traffic-accident"),
    (["보이스피싱", "피싱", "전자금융"], "fraud"),
    (["대출", "여신", "가계대출"], "fraud"),
    (["사모펀드", "투자", "증권", "펀드", "옵티머스", "라임"], "fraud"),
    (["퇴직연금", "DC", "DB형"], "retirement"),
    (["실손", "건강보험", "질병", "암보험"], "industrial-accident"),
]


def map_domain(region: str, case_type: str, subject: str) -> list[str]:
    """매핑 결과 도메인 리스트 (중복 가능)"""
    text = f"{region} {case_type} {subject}"
    out = []
    for keywords, domain in DOMAIN_MAP:
        if any(k in text for k in keywords):
            out.append(domain)
    return list(set(out)) or []


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry", action="store_true", help="1페이지만")
    parser.add_argument("--max-pages", type=int, default=25, help="최대 페이지 수")
    args = parser.parse_args()

    all_items = []
    for page in range(1, args.max_pages + 1):
        html = fetch(LIST_URL, {"menuNo": MENU_NO, "pageIndex": page})
        items = parse_list(html)
        if not items:
            print(f"[list] page {page}: 0건 → 종료")
            break
        print(f"[list] page {page}: {len(items)}건")
        all_items.extend(items)
        if args.dry:
            break
        time.sleep(DELAY)

    # 중복 제거 (caseSlno)
    seen = set()
    deduped = []
    for it in all_items:
        if it["caseSlno"] in seen:
            continue
        seen.add(it["caseSlno"])
        deduped.append(it)
    print(f"[list] 총 {len(deduped)}건 (중복 제거 후)")

    # 상세 수집
    cases = []
    for idx, it in enumerate(deduped, 1):
        try:
            html = fetch(VIEW_URL, {"caseSlno": it["caseSlno"], "menuNo": MENU_NO})
        except Exception as e:
            print(f"[detail] {it['caseSlno']}: {e}")
            continue
        detail = parse_detail(html)
        domains = map_domain(it["권역"], it["유형"], it["사건명"])
        cases.append({
            "사례ID": f"FSS-{it['caseSlno']}",
            "caseSlno": it["caseSlno"],
            "사건명": it["사건명"],
            "권역": it["권역"],
            "유형": it["유형"],
            "결정일자": it["등록일"],
            "결정기관": "금융감독원 분쟁조정위원회",
            "domains": domains,
            **detail,
        })
        if idx % 20 == 0:
            print(f"[detail] {idx}/{len(deduped)}")
        time.sleep(DELAY)

    # Raw dump
    os.makedirs("kb/_raw", exist_ok=True)
    raw_path = Path("kb/_raw/fss_cases.json")
    raw_path.write_text(json.dumps(cases, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n[save] raw → {raw_path} ({len(cases)}건)")

    # 도메인별 분배
    by_domain: dict[str, list[dict]] = {}
    for c in cases:
        for d in c["domains"]:
            by_domain.setdefault(d, []).append(c)
    for domain, items in by_domain.items():
        out_dir = Path(f"kb/{domain}")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / "fss_cases.json"
        # 기존 로드 → 중복 제거 병합
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
        print(f"[save] {domain}: 기존 {len(existing)} + 신규 {len(new_only)} = {len(merged)}")


if __name__ == "__main__":
    main()
