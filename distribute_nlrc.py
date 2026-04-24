#!/usr/bin/env python3
"""
nlrc decisions.json (42,535건) 도메인별 분배 스크립트
- kb/{domain}/nlrc_cases.json 에 매핑된 사례 저장
- 자료구분 + 사건명/사건요지 키워드로 다중 태깅 가능
"""

from __future__ import annotations
import json
import os
import re
import sys
from collections import Counter
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
    except Exception:
        pass

INPUT = "kb/nlrc/decisions.json"

# 자료구분(category) → 1차 도메인
PRIMARY_CATEGORY_MAP = {
    "부당해고": "dismissal",
    "부당노동": "dismissal",
    "부당노동행위": "dismissal",
    "차별": "sexual-harassment",   # 차별 결정의 다수가 성차별·성희롱·괴롭힘
    "차별시정": "sexual-harassment",
}

# 사건명/사건요지 키워드 → 추가 도메인 (다중 태깅)
KEYWORD_DOMAINS = [
    (["임금", "최저임금", "통상임금", "체불", "수당", "포괄임금"], "wage"),
    (["퇴직금", "퇴직연금", "평균임금", "퇴직급여"], "retirement"),
    (["실업급여", "이직사유", "고용보험"], "unemployment"),
    (["산업재해", "산재", "업무상", "요양", "휴업급여"], "industrial-accident"),
    (["성희롱", "성차별", "직장내성희롱"], "sexual-harassment"),
    (["괴롭힘", "직장내괴롭힘", "갑질"], "dismissal"),
    (["사직", "권고사직", "해고", "정리해고", "징계해고"], "dismissal"),
]


def load_decisions() -> list[dict]:
    with open(INPUT, "r", encoding="utf-8") as f:
        return json.load(f)


def get_field(item: dict, key_index: int):
    """nlrc decisions.json 의 키가 인코딩 이슈로 다룰 수 있어 인덱스로 접근"""
    keys = list(item.keys())
    if key_index < len(keys):
        return item.get(keys[key_index], "")
    return ""


def map_domains(item: dict) -> list[str]:
    """결정 1건을 도메인 리스트로 매핑"""
    cat = get_field(item, 5)  # 자료구분
    case_name = get_field(item, 1)  # 사건
    summary = get_field(item, 7)  # 사건요지
    decision = get_field(item, 8)  # 결정요지

    text = " ".join([str(case_name), str(summary)[:500], str(decision)[:300]])

    domains = set()
    # 1차: 자료구분 매핑
    if cat in PRIMARY_CATEGORY_MAP:
        domains.add(PRIMARY_CATEGORY_MAP[cat])
    # 2차: 키워드 매칭 (다중 태깅)
    for keywords, domain in KEYWORD_DOMAINS:
        if any(k in text for k in keywords):
            domains.add(domain)
    return list(domains)


def normalize_record(item: dict) -> dict:
    """nlrc record 를 표준 형태로 정규화"""
    keys = list(item.keys())
    return {
        "사례ID": f"NLRC-{get_field(item, 0)}",
        "결정문일련번호": str(get_field(item, 0)),
        "사건명": str(get_field(item, 1)),
        "사건번호": str(get_field(item, 2)),
        "결정일": str(get_field(item, 3)),
        "결정기관": str(get_field(item, 4)),
        "자료구분": str(get_field(item, 5)),
        "처분청": str(get_field(item, 6)),
        "사건요지": str(get_field(item, 7)),
        "결정요지": str(get_field(item, 8)),
        "결정구분": str(get_field(item, 9)) if len(keys) > 9 else "",
    }


def main():
    decisions = load_decisions()
    print(f"[nlrc] 입력 {len(decisions)}건", flush=True)

    by_domain: dict[str, list[dict]] = {}
    cat_counter: Counter = Counter()
    domain_counter: Counter = Counter()
    unmapped = 0

    for item in decisions:
        cat_counter[get_field(item, 5)] += 1
        domains = map_domains(item)
        if not domains:
            unmapped += 1
            continue
        rec = normalize_record(item)
        rec["domains"] = domains
        for d in domains:
            by_domain.setdefault(d, []).append(rec)
            domain_counter[d] += 1

    print(f"[nlrc] 매핑 안된 건: {unmapped}", flush=True)
    print(f"[nlrc] 도메인 매핑 결과:", flush=True)
    for d, n in domain_counter.most_common():
        print(f"  {d}: {n}", flush=True)

    # 도메인별 저장 (기존 nlrc_cases.json 와 dedup 병합)
    for domain, items in by_domain.items():
        out_dir = Path(f"kb/{domain}")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / "nlrc_cases.json"
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
        print(f"[save] {domain}/nlrc_cases.json: 기존 {len(existing)} + 신규 {len(new_only)} = {len(merged)}", flush=True)


if __name__ == "__main__":
    main()
