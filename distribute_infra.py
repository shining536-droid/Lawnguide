#!/usr/bin/env python3
"""
대형 인프라 (detc/expc/klac) 도메인별 분배 스크립트
- detc (헌재결정례) 37K → 도메인별 nlrc-style 다중 태깅
- expc (법령해석례) 8.6K → 도메인별 다중 태깅
- klac (법률구조공단 상담) 7K → 폴더(카테고리) + 키워드 매핑

저장: kb/{domain}/detc_cases.json / expc_cases.json / klac_cases.json
"""

from __future__ import annotations
import json
import os
import sys
from collections import Counter
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
    except Exception:
        pass

# 도메인 키워드 사전 (공통)
DOMAIN_KEYWORDS = [
    (["부당해고", "해고무효", "정리해고", "권고사직", "징계해고"], "dismissal"),
    (["임금체불", "통상임금", "최저임금", "야간수당", "포괄임금", "수당 미지급"], "wage"),
    (["퇴직금", "퇴직연금", "평균임금", "퇴직급여", "계속근로"], "retirement"),
    (["실업급여", "고용보험", "구직급여", "이직사유", "수급자격"], "unemployment"),
    (["산업재해", "산재", "업무상재해", "요양급여", "휴업급여"], "industrial-accident"),
    (["성희롱", "직장내성희롱", "성차별"], "sexual-harassment"),
    (["성폭력", "강제추행", "성추행", "강간", "준강간"], "sex-crime"),
    (["아동성", "미성년 성", "청소년의성보호"], "child-sex-crime"),
    (["불법촬영", "성착취물", "디지털성범죄", "통신매체이용음란"], "digital-sex-crime"),
    (["스토킹"], "stalking"),
    (["사기", "기망", "변제의사", "보이스피싱", "투자사기"], "fraud"),
    (["폭행", "상해", "협박"], "assault"),
    (["마약", "필로폰", "대마", "향정신성"], "drug-crime"),
    (["성매매"], "prostitution"),
    (["명예훼손", "모욕", "허위사실"], "defamation"),
    (["음주운전", "음주측정"], "dui"),
    (["교통사고", "자동차보험", "도로교통", "운전중"], "traffic-accident"),
    (["이혼", "재산분할", "위자료", "혼인 파탄"], "divorce"),
    (["양육비", "친권", "면접교섭"], "child-support"),
    (["상속", "유류분", "상속포기", "한정승인", "유언", "유증"], "inheritance"),
    (["전세사기", "깡통전세"], "jeonse-fraud"),
    (["전세보증금", "주택임대차", "임차", "월세"], "jeonse"),
    (["상가임대차", "권리금"], "sangga"),
    (["부동산매매", "공인중개사", "분양"], "real-estate-sale"),
    (["부동산경매", "배당"], "real-estate-auction"),
    (["회생", "변제계획", "면책"], "rehabilitation"),
    (["파산"], "bankruptcy"),
    (["학교폭력", "학폭"], "school-violence"),
    (["층간소음", "이웃분쟁", "환경분쟁"], "neighbor-dispute"),
    (["지급명령", "소액사건"], "small-claims"),
]


def get_field(item: dict, idx: int):
    keys = list(item.keys())
    return item.get(keys[idx], "") if idx < len(keys) else ""


def map_text_to_domains(text: str) -> list[str]:
    domains = set()
    for keywords, domain in DOMAIN_KEYWORDS:
        if any(k in text for k in keywords):
            domains.add(domain)
    return list(domains)


def save_distributed(by_domain: dict, file_name: str, source: str):
    for domain, items in by_domain.items():
        out_dir = Path(f"kb/{domain}")
        out_dir.mkdir(parents=True, exist_ok=True)
        out_path = out_dir / file_name
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
        print(f"  [{source}/{domain}] +{len(new_only)} = {len(merged)}", flush=True)


# ── detc 분배 ────────────────────────────────────
def distribute_detc():
    print("\n=== detc (헌재결정례) 분배 ===", flush=True)
    decisions = json.load(open("kb/detc/decisions.json", encoding="utf-8"))
    print(f"입력 {len(decisions)}건", flush=True)
    by_domain: dict[str, list[dict]] = {}
    domain_counter: Counter = Counter()
    unmapped = 0
    for item in decisions:
        # detc 필드: 0=헌법재판소일련번호, 1=사건명, 2=사건번호, 3=선고일자, 4=의결일자, 5=결정구분, 6=주제어, 7=주문, 8=이유
        keys = list(item.keys())
        case_name = str(get_field(item, 1))[:300]
        subject = str(get_field(item, 6))[:300]
        ruling = str(get_field(item, 7))[:200]
        text = " ".join([case_name, subject, ruling])
        domains = map_text_to_domains(text)
        if not domains:
            unmapped += 1
            continue
        rec = {
            "사례ID": f"DETC-{get_field(item, 0)}",
            "헌법재판소일련번호": str(get_field(item, 0)),
            "사건명": case_name,
            "사건번호": str(get_field(item, 2)),
            "선고일자": str(get_field(item, 3)),
            "결정구분": str(get_field(item, 5)),
            "주제어": subject,
            "주문": ruling,
            "이유": str(get_field(item, 8))[:1000],
            "결정기관": "헌법재판소",
            "domains": domains,
        }
        for d in domains:
            by_domain.setdefault(d, []).append(rec)
            domain_counter[d] += 1
    print(f"매핑 안됨: {unmapped}", flush=True)
    print(f"도메인 분포 (top 10):", flush=True)
    for d, n in domain_counter.most_common(10):
        print(f"  {d}: {n}", flush=True)
    save_distributed(by_domain, "detc_cases.json", "detc")


# ── expc 분배 ────────────────────────────────────
def distribute_expc():
    print("\n=== expc (법령해석례) 분배 ===", flush=True)
    items = json.load(open("kb/expc/interpretations.json", encoding="utf-8"))
    print(f"입력 {len(items)}건", flush=True)
    by_domain: dict[str, list[dict]] = {}
    domain_counter: Counter = Counter()
    unmapped = 0
    for item in items:
        # 0=법령해석일련번호, 1=안건명, 2=안건번호, 3=회신기관, 4=회신일자, 5=질의기관, 6=질의요지, 7=회답, 8=이유
        case_name = str(get_field(item, 1))[:300]
        query = str(get_field(item, 6))[:500]
        answer = str(get_field(item, 7))[:300]
        text = " ".join([case_name, query, answer])
        domains = map_text_to_domains(text)
        if not domains:
            unmapped += 1
            continue
        rec = {
            "사례ID": f"EXPC-{get_field(item, 0)}",
            "법령해석일련번호": str(get_field(item, 0)),
            "안건명": case_name,
            "안건번호": str(get_field(item, 2)),
            "회신기관": str(get_field(item, 3)),
            "회신일자": str(get_field(item, 4)),
            "질의기관": str(get_field(item, 5)),
            "질의요지": query,
            "회답": answer,
            "이유": str(get_field(item, 8))[:600],
            "결정기관": "법제처",
            "domains": domains,
        }
        for d in domains:
            by_domain.setdefault(d, []).append(rec)
            domain_counter[d] += 1
    print(f"매핑 안됨: {unmapped}", flush=True)
    print(f"도메인 분포 (top 10):", flush=True)
    for d, n in domain_counter.most_common(10):
        print(f"  {d}: {n}", flush=True)
    save_distributed(by_domain, "expc_cases.json", "expc")


# ── klac 분배 ────────────────────────────────────
def distribute_klac():
    print("\n=== klac (법률구조공단 상담) 분배 ===", flush=True)
    by_domain: dict[str, list[dict]] = {}
    domain_counter: Counter = Counter()
    unmapped = 0
    klac_root = Path("kb/klac")
    folders = sorted([d for d in klac_root.iterdir() if d.is_dir()])
    total = 0
    for folder in folders:
        counsel_path = folder / "counsel.json"
        if not counsel_path.is_file():
            continue
        try:
            data = json.loads(counsel_path.read_text(encoding="utf-8"))
        except Exception:
            continue
        for item in data:
            total += 1
            title = str(item.get("title", ""))[:200]
            question = str(item.get("question", ""))[:600]
            answer = str(item.get("answer", ""))[:400]
            text = " ".join([title, question, answer])
            domains = map_text_to_domains(text)
            if not domains:
                unmapped += 1
                continue
            rec = {
                "사례ID": f"KLAC-{item.get('caseId','')}",
                "caseId": str(item.get("caseId", "")),
                "folderId": str(item.get("folderId", "")),
                "사건명": title,
                "질문": question[:1000],
                "답변": answer[:1000],
                "결정기관": "대한법률구조공단",
                "domains": domains,
            }
            for d in domains:
                by_domain.setdefault(d, []).append(rec)
                domain_counter[d] += 1
    print(f"입력 {total}건 / 매핑 안됨: {unmapped}", flush=True)
    print(f"도메인 분포 (top 10):", flush=True)
    for d, n in domain_counter.most_common(10):
        print(f"  {d}: {n}", flush=True)
    save_distributed(by_domain, "klac_cases.json", "klac")


def main():
    targets = sys.argv[1:] or ["detc", "expc", "klac"]
    for t in targets:
        if t == "detc":
            distribute_detc()
        elif t == "expc":
            distribute_expc()
        elif t == "klac":
            distribute_klac()
        else:
            print(f"unknown: {t}")


if __name__ == "__main__":
    main()
