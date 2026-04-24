#!/usr/bin/env python3
"""
고용보험심사위원회 재결례 수집 스크립트 (eiac)
- 법제처 Open API (target=eiac) - 실업급여·수급자격·피보험자격 등 심사결정례
- 저장: kb/unemployment/cases.json (기존 cases.json 에 병합)

사용법:
  python crawl_eiac.py          # 전체 수집
  python crawl_eiac.py --dry    # API 확인만 (1 페이지)
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
import argparse

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", line_buffering=True)

API_LIST = "http://www.law.go.kr/DRF/lawSearch.do"
API_DETAIL = "http://www.law.go.kr/DRF/lawService.do"
OC = "lawnguide2026"
API_DELAY = 0.5
BODY_MAX_CHARS = 600  # 이유(본문) 저장 시 앞 600자만 — 판결요지 위치에 사용
SAVE_EVERY = 50


def clean_html(text: str) -> str:
    if not text:
        return ""
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def fetch_url(url: str) -> str:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8")


def search_eiac(page=1, display=100, query="*"):
    params = urllib.parse.urlencode({
        "OC": OC, "target": "eiac", "type": "XML",
        "query": query, "display": display, "sort": "ddes", "page": page,
    })
    text = fetch_url(f"{API_LIST}?{params}")
    root = ET.fromstring(text)
    total = int(root.findtext("totalCnt", "0"))
    items = []
    # eiac 목록 API 필드: 결정문일련번호 / 사건명 / 사건번호 / 의결일자
    for e in root.findall(".//eiac"):
        items.append({
            "판례일련번호": e.findtext("결정문일련번호", "").strip(),
            "사건명": clean_html(e.findtext("사건명", "")),
            "사건번호": e.findtext("사건번호", "").strip(),
            "의결일자": e.findtext("의결일자", "").strip(),
        })
    return total, items


def fetch_detail(case_id: str):
    """결정문 상세 호출 - 개요/주문/이유 등 추출
    eiac 상세 API 필드: 결정문일련번호, 사건의분류, 의결서종류, 개요, 사건번호, 사건명,
                       청구인, 피청구인, 주문, 청구취지, 이유, 의결일자, 기관명
    """
    params = urllib.parse.urlencode({
        "OC": OC, "target": "eiac", "type": "XML", "ID": case_id,
    })
    text = fetch_url(f"{API_DETAIL}?{params}")
    if "일치하는" in text and "없습니다" in text:
        return None
    root = ET.fromstring(text)

    overview = clean_html(root.findtext("개요", ""))
    order = clean_html(root.findtext("주문", ""))
    reason_body = clean_html(root.findtext("이유", ""))
    institution = root.findtext("기관명", "").strip() or "고용보험심사위원회"

    # 판시사항 = 개요(대표 요약) — 비어있으면 주문 앞부분
    pan_si = overview or order[:200]
    # 판결요지 = 주문 + 이유 앞 BODY_MAX_CHARS자
    pan_yoji = order
    if reason_body:
        if pan_yoji:
            pan_yoji = f"{pan_yoji} / {reason_body[:BODY_MAX_CHARS]}"
        else:
            pan_yoji = reason_body[:BODY_MAX_CHARS]

    return {
        "법원명": institution,
        "판시사항": pan_si,
        "판결요지": pan_yoji,
    }


def load_existing(out_path):
    if not os.path.exists(out_path):
        return [], set()
    with open(out_path, "r", encoding="utf-8") as f:
        existing = json.load(f)
    ids = {c.get("판례일련번호", "") for c in existing if c.get("판례일련번호")}
    return existing, ids


def save_merged(out_path, cases):
    # 최신순 정렬 (선고일자 YYYY.MM.DD 또는 YYYY-MM-DD)
    cases.sort(key=lambda c: c.get("선고일자", ""), reverse=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(cases, f, ensure_ascii=False, indent=2)


def main():
    parser = argparse.ArgumentParser(description="고용보험심사위원회 재결례 수집 (eiac)")
    parser.add_argument("--dry", action="store_true", help="API 확인만 (1페이지)")
    parser.add_argument("--query", default="*", help="검색어 (기본: * = 전체)")
    parser.add_argument("--out", default="kb/unemployment/cases.json",
                        help="저장 경로 (기본: kb/unemployment/cases.json)")
    args = parser.parse_args()

    # 1) 총 건수 확인
    total, first_items = search_eiac(page=1, display=100, query=args.query)
    print(f"[eiac] target=eiac query={args.query} 총 {total}건")

    if args.dry:
        print("dry-run: 첫 페이지 샘플 3건")
        for it in first_items[:3]:
            print(" ", it)
        return

    # 2) 기존 로드
    out_path = args.out
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    existing, existing_ids = load_existing(out_path)
    print(f"[eiac] 기존 {len(existing)}건 (병합 대상)")

    # 3) 페이지네이션 전체 수집
    all_list = list(first_items)
    total_pages = (total + 99) // 100
    for page in range(2, total_pages + 1):
        try:
            _, items = search_eiac(page=page, display=100, query=args.query)
        except Exception as e:
            print(f"[eiac] 목록 페이지 {page} 실패: {e}")
            continue
        all_list.extend(items)
        time.sleep(API_DELAY)
    print(f"[eiac] 목록 {len(all_list)}건 수집")

    # 4) 상세 수집 (신규만)
    new_cases = []
    skipped = 0
    fetched = 0
    for idx, item in enumerate(all_list, 1):
        cid = item["판례일련번호"]
        if not cid:
            continue
        if cid in existing_ids:
            skipped += 1
            continue
        try:
            detail = fetch_detail(cid)
        except Exception as e:
            print(f"[eiac] 상세 {cid} 실패: {e}")
            continue
        time.sleep(API_DELAY)
        if not detail:
            continue
        new_cases.append({
            "판례일련번호": cid,
            "사건번호": item["사건번호"],
            "사건명": item["사건명"],
            "선고일자": item["의결일자"],
            "법원명": detail["법원명"],
            "판시사항": detail["판시사항"],
            "판결요지": detail["판결요지"],
        })
        existing_ids.add(cid)
        fetched += 1
        if fetched % SAVE_EVERY == 0:
            save_merged(out_path, existing + new_cases)
            print(f"[eiac] 진행 {fetched}/{len(all_list) - skipped}건 저장")

    save_merged(out_path, existing + new_cases)
    print(f"\n[eiac] 완료: 기존 {len(existing)} + 신규 {len(new_cases)} = {len(existing) + len(new_cases)}건")
    print(f"       스킵(기존 ID) {skipped}건 / 파일 {out_path}")


if __name__ == "__main__":
    main()
