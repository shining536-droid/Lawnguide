#!/usr/bin/env python3
"""
법제처 판례 수집 스크립트
- 31개 도메인별 검색어로 판례 목록 + 본문 수집
- 저장: kb/{domain}/cases.json
"""

import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import os
import re
import time
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", line_buffering=True)

# ── 설정 ──────────────────────────────────────────────
API_LIST = "http://www.law.go.kr/DRF/lawSearch.do"
API_DETAIL = "http://www.law.go.kr/DRF/lawService.do"
OC = "lawnguide2026"
MAX_PER_DOMAIN = 0  # 0 = 제한 없음 (전부 수집)
API_DELAY = 0.5

# ── 도메인별 검색어 ──────────────────────────────────
DOMAIN_QUERIES = {
    "fraud": ["사기", "횡령", "배임", "보이스피싱"],
    "sex-crime": ["성폭력", "강제추행", "성추행", "강간"],
    "assault": ["폭행", "상해", "협박", "폭력"],
    "defamation": ["명예훼손", "모욕", "허위사실"],
    "dui": ["음주운전", "도로교통법", "음주측정"],
    "stalking": ["스토킹", "접근금지"],
    "drug-crime": ["마약", "필로폰", "대마", "향정신성"],
    "child-sex-crime": ["아동성폭력", "아동학대", "미성년"],
    "digital-sex-crime": ["불법촬영", "성착취물", "디지털성범죄", "통신매체이용음란", "성적촬영물", "리벤지포르노"],
    "school-violence": ["학교폭력", "학폭", "따돌림", "학교폭력위원회", "학폭위", "왕따", "집단따돌림", "학생폭력"],
    "prostitution": ["성매매", "성매매알선"],
    "divorce": ["이혼", "양육권", "재산분할", "위자료"],
    "child-support": ["양육비", "양육비이행"],
    "jeonse": ["전세보증금", "임대차", "보증금반환"],
    "jeonse-fraud": ["전세사기", "깡통전세", "전세보증금사기", "임차인사기", "보증금횡령", "전세피해"],
    "sangga": ["상가임대차", "권리금", "상가보증금", "상가건물임대차", "상가권리금분쟁", "상가퇴거"],
    "inheritance": ["상속", "유류분", "한정승인", "상속포기"],
    "rehabilitation": ["개인회생", "면책", "변제"],
    "bankruptcy": ["파산", "면책", "채무"],
    "small-claims": ["소액소송", "지급명령", "소액재판", "소액사건", "민사소액", "지급명령이의"],
    "real-estate-sale": ["부동산매매", "계약해제", "하자"],
    "real-estate-auction": ["경매", "부동산경매", "배당"],
    "wage": ["임금체불", "체불임금", "퇴직금", "최저임금"],
    "dismissal": ["부당해고", "해고무효", "부당노동"],
    "retirement": ["퇴직금", "퇴직연금"],
    "industrial-accident": ["산업재해", "산재", "업무상재해"],
    "unemployment": ["실업급여", "고용보험"],
    "sexual-harassment": ["직장내성희롱", "성희롱"],
    "traffic-accident": ["교통사고", "과실치상", "보험금"],
    "neighbor-dispute": ["층간소음", "이웃분쟁", "소음", "소음피해", "층간소음분쟁", "생활소음", "공사소음"],
}


def clean_html(text):
    """HTML 태그 제거"""
    if not text:
        return ""
    return re.sub(r"<[^>]+>", "", text).strip()


def fetch_url(url):
    """URL 호출 후 UTF-8 디코딩된 텍스트 반환"""
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8")


def search_cases(query, max_results=0):
    """목록 API 페이지네이션 호출 → (판례일련번호, 사건명, 사건번호, 선고일자) 리스트
    max_results=0 이면 제한 없이 전부 수집"""
    results = []
    page = 1
    display = 100

    while max_results == 0 or len(results) < max_results:
        params = urllib.parse.urlencode({
            "OC": OC, "target": "prec", "type": "XML",
            "query": query, "display": display, "sort": "ddes", "page": page,
        })
        url = f"{API_LIST}?{params}"
        text = fetch_url(url)
        root = ET.fromstring(text)

        precs = root.findall(".//prec")
        if not precs:
            break

        for prec in precs:
            children = {c.tag: (c.text or "").strip() for c in prec}
            source = children.get("데이터출처명", "")
            if "국세" in source:
                continue
            results.append({
                "id": children.get("판례일련번호", ""),
                "사건명": clean_html(children.get("사건명", "")),
                "사건번호": children.get("사건번호", ""),
                "선고일자": children.get("선고일자", ""),
            })

        if len(precs) < display:
            break
        page += 1
        time.sleep(API_DELAY)

    return results


def fetch_detail(case_id):
    """본문 API 호출 → 판시사항, 판결요지 추출"""
    params = urllib.parse.urlencode({
        "OC": OC, "target": "prec", "type": "XML", "ID": case_id,
    })
    url = f"{API_DETAIL}?{params}"
    text = fetch_url(url)

    # "일치하는 판례가 없습니다" 체크
    if "일치하는" in text and "없습니다" in text:
        return None

    root = ET.fromstring(text)
    return {
        "법원명": root.findtext("법원명", "").strip(),
        "판시사항": clean_html(root.findtext("판시사항", "")),
        "판결요지": clean_html(root.findtext("판결요지", "")),
    }


def collect_domain(domain, queries, existing_ids=None, max_collect=0):
    """도메인 하나에 대해 판례 수집. max_collect=0 이면 제한 없음"""
    seen_ids = set(existing_ids or [])
    limit = max_collect  # 0 = 무제한
    cases = []

    for query in queries:
        if limit > 0 and len(cases) >= limit:
            break
        try:
            results = search_cases(query, max_results=0)
            time.sleep(API_DELAY)
        except Exception as e:
            print(f"  ⚠️ 목록 조회 실패 ({query}): {e}")
            continue

        for item in results:
            if limit > 0 and len(cases) >= limit:
                break
            cid = item["id"]
            if not cid or cid in seen_ids:
                continue
            seen_ids.add(cid)

            try:
                detail = fetch_detail(cid)
                time.sleep(API_DELAY)
            except Exception as e:
                print(f"  ⚠️ 본문 조회 실패 (ID={cid}): {e}")
                continue

            if detail is None:
                continue

            cases.append({
                "판례일련번호": cid,
                "사건번호": item["사건번호"],
                "사건명": item["사건명"],
                "선고일자": item["선고일자"],
                "법원명": detail["법원명"],
                "판시사항": detail["판시사항"],
                "판결요지": detail["판결요지"],
            })

    return cases


def main():
    total = 0
    domain_summary = []
    domains = list(DOMAIN_QUERIES.keys())
    print(f"📋 {len(domains)}개 도메인 판례 수집 시작 (제한 없음 - 전부 수집)\n")

    for i, domain in enumerate(domains, 1):
        queries = DOMAIN_QUERIES[domain]
        print(f"[{i}/{len(domains)}] {domain} (검색어: {', '.join(queries)})")

        # 기존 파일 로드
        out_dir = os.path.join("kb", domain)
        os.makedirs(out_dir, exist_ok=True)
        out_path = os.path.join(out_dir, "cases.json")

        existing = []
        existing_ids = set()
        if os.path.exists(out_path):
            with open(out_path, "r", encoding="utf-8") as f:
                existing = json.load(f)
            existing_ids = {c["판례일련번호"] for c in existing}

        print(f"  기존 {len(existing)}개, 추가 수집 중 (제한 없음)...")
        cases = collect_domain(domain, queries, existing_ids, max_collect=0)
        all_cases = existing + cases

        # 중복 제거 (판례일련번호 기준)
        seen = set()
        deduped = []
        for c in all_cases:
            cid = c["판례일련번호"]
            if cid not in seen:
                seen.add(cid)
                deduped.append(c)
        all_cases = deduped

        # 최신순 정렬
        all_cases.sort(key=lambda c: c.get("선고일자", ""), reverse=True)

        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(all_cases, f, ensure_ascii=False, indent=2)

        count = len(all_cases)
        new_count = len(cases)
        total += count
        domain_summary.append((domain, len(existing), count, new_count))
        print(f"  📄 {domain}: {count}개 (기존 {len(existing)} + 신규 {new_count}) → {out_path}\n")

    # 도메인별 건수 요약 출력
    print(f"\n{'='*60}")
    print(f"📊 도메인별 수집 결과 요약")
    print(f"{'='*60}")
    print(f"{'도메인':<25} {'기존':>8} {'신규':>8} {'합계':>8}")
    print(f"{'-'*60}")
    for domain, old, total_d, new in domain_summary:
        print(f"{domain:<25} {old:>8} {new:>8} {total_d:>8}")
    print(f"{'-'*60}")
    print(f"{'합계':<25} {sum(s[1] for s in domain_summary):>8} {sum(s[3] for s in domain_summary):>8} {total:>8}")
    print(f"\n✅ 전체 완료: {len(domains)}개 도메인, 총 {total}건")


if __name__ == "__main__":
    main()
