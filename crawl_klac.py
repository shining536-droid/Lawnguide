#!/usr/bin/env python3
"""
대한법률구조공단 법률상담사례 크롤러
- 안전 크롤링: 2~4초 랜덤 간격
- 중단/재개 지원 (이미 수집된 건 스킵)
- 카테고리별 저장: kb/klac/{folderId}/counsel.json

사용법:
  python crawl_klac.py                    # 1순위 전체
  python crawl_klac.py --category 019     # 특정 카테고리만
  python crawl_klac.py --dry-run          # 건수만 확인
"""

import argparse
import json
import os
import random
import re
import time
from datetime import datetime

import requests

# ── 설정 ──────────────────────────────────────────────
BASE_URL = "https://www.klac.or.kr/legalinfo"
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0",
]

DELAY_MIN = 2.0
DELAY_MAX = 4.0

# 1순위 + 2순위 카테고리
CATEGORIES = {
    "018": {"name": "형법", "domains": ["fraud", "assault", "sex-crime", "drug-crime", "dui", "stalking", "defamation", "prostitution"]},
    "019": {"name": "형사소송", "domains": ["fraud", "assault", "sex-crime", "drug-crime", "dui", "stalking", "defamation"]},
    "001": {"name": "노동", "domains": ["dismissal", "wage", "retirement", "unemployment"]},
    "004": {"name": "손해배상", "domains": ["traffic-accident", "neighbor-dispute"]},
    "012": {"name": "상속", "domains": ["inheritance"]},
    "002": {"name": "주택임대차", "domains": ["jeonse", "jeonse-fraud"]},
    "003": {"name": "상가임대차", "domains": ["sangga"]},
    "017": {"name": "개인회생/파산/면책", "domains": ["rehabilitation", "bankruptcy"]},
    "005": {"name": "민사일반", "domains": ["small-claims"]},
    "010": {"name": "민사소송", "domains": ["small-claims"]},
    "011": {"name": "친척", "domains": ["child-support", "divorce"]},
    "008": {"name": "계약", "domains": ["fraud", "jeonse", "sangga", "real-estate-sale"]},
    "007": {"name": "채권", "domains": ["fraud", "small-claims"]},
    "013": {"name": "가사소송", "domains": ["divorce", "child-support"]},
    "015": {"name": "민사집행", "domains": ["small-claims", "fraud"]},
}

PRIORITY_1 = ["018", "019", "001"]
PRIORITY_2 = ["004", "012", "002", "003", "017"]
PRIORITY_3 = ["005", "010", "011"]


def get_session():
    s = requests.Session()
    s.headers.update({
        "User-Agent": random.choice(USER_AGENTS),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Referer": "https://www.klac.or.kr/legalinfo/counsel.do",
    })
    return s


def safe_delay():
    delay = random.uniform(DELAY_MIN, DELAY_MAX)
    time.sleep(delay)


def get_case_ids_from_page(session, folder_id, page_no):
    """목록 페이지에서 case ID 추출"""
    r = session.post(
        f"{BASE_URL}/counsel.do",
        data={"pageIndex": str(page_no), "folderId": folder_id, "listNm": "null"},
        timeout=15,
    )
    r.raise_for_status()
    pattern = rf"case-{folder_id}-\d+"
    case_ids = list(dict.fromkeys(re.findall(pattern, r.text)))  # 순서 유지 중복 제거
    return case_ids


def get_max_page(session, folder_id):
    """카테고리의 최대 페이지 번호 확인"""
    r = session.post(
        f"{BASE_URL}/counsel.do",
        data={"pageIndex": "1", "folderId": folder_id, "listNm": "null"},
        timeout=15,
    )
    r.raise_for_status()
    pages = re.findall(r"fn_select_linkPage\((\d+)\)", r.text)
    return max(int(p) for p in pages) if pages else 1


def get_case_detail(session, case_id, folder_id):
    """상세 페이지에서 제목/질문/답변 추출"""
    r = session.get(
        f"{BASE_URL}/counselView.do",
        params={"caseId": case_id, "folderId": folder_id},
        timeout=15,
    )
    r.raise_for_status()

    # dt/dd 쌍 추출
    pairs = re.findall(r"<dt[^>]*>(.*?)</dt>\s*<dd[^>]*>(.*?)</dd>", r.text, re.DOTALL)

    result = {"caseId": case_id, "folderId": folder_id}
    for dt_raw, dd_raw in pairs:
        dt = re.sub(r"<[^>]+>", "", dt_raw).strip()
        dd = re.sub(r"<[^>]+>", "", dd_raw).strip()
        dd = re.sub(r"\s+", " ", dd).strip()

        if dt == "제목":
            result["title"] = dd
        elif dt == "질문":
            result["question"] = dd
        elif dt == "답변":
            result["answer"] = dd
        elif dt == "분류":
            result["category"] = dd

    return result


def load_existing(output_path):
    """이미 수집된 데이터 로드"""
    if os.path.exists(output_path):
        with open(output_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return {item["caseId"]: item for item in data}
    return {}


def save_data(output_path, data_dict):
    """데이터 저장"""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    items = list(data_dict.values())
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)


def crawl_category(folder_id, cat_info, dry_run=False):
    """카테고리 하나 크롤링"""
    cat_name = cat_info["name"]
    output_path = f"kb/klac/{folder_id}/counsel.json"

    print(f"\n{'='*50}")
    print(f"카테고리: {folder_id} ({cat_name})")
    print(f"관련 도메인: {', '.join(cat_info['domains'])}")
    print(f"저장 경로: {output_path}")

    session = get_session()

    # 최대 페이지 확인
    max_page = get_max_page(session, folder_id)
    print(f"총 페이지: {max_page} (약 {max_page * 10}건)")

    if dry_run:
        return 0

    # 기존 데이터 로드
    existing = load_existing(output_path)
    print(f"기존 수집: {len(existing)}건")

    # 전체 case ID 수집
    print("목록 페이지 스캔 중...")
    all_case_ids = []
    for page in range(1, max_page + 1):
        try:
            ids = get_case_ids_from_page(session, folder_id, page)
            all_case_ids.extend(ids)
            if page % 10 == 0:
                print(f"  페이지 {page}/{max_page} 스캔 완료 ({len(all_case_ids)}건)")
            safe_delay()
        except Exception as e:
            print(f"  페이지 {page} 에러: {e}")
            safe_delay()
            continue

    # 중복 제거
    all_case_ids = list(dict.fromkeys(all_case_ids))
    new_ids = [cid for cid in all_case_ids if cid not in existing]
    print(f"전체 case: {len(all_case_ids)}건, 신규: {len(new_ids)}건")

    if not new_ids:
        print("수집할 신규 건이 없습니다.")
        return 0

    # 상세 페이지 크롤링
    collected = 0
    errors = 0
    for i, case_id in enumerate(new_ids):
        try:
            # User-Agent 로테이션
            if i % 20 == 0:
                session.headers["User-Agent"] = random.choice(USER_AGENTS)

            detail = get_case_detail(session, case_id, folder_id)

            if detail.get("title") or detail.get("question"):
                existing[case_id] = detail
                collected += 1
            else:
                errors += 1

            # 진행 상황 출력
            if (i + 1) % 10 == 0:
                print(f"  [{i+1}/{len(new_ids)}] 수집: {collected}건, 에러: {errors}건")
                # 중간 저장
                save_data(output_path, existing)

            safe_delay()

        except KeyboardInterrupt:
            print(f"\n중단됨. {collected}건 저장 중...")
            save_data(output_path, existing)
            return collected

        except Exception as e:
            errors += 1
            print(f"  {case_id} 에러: {e}")
            safe_delay()
            continue

    # 최종 저장
    save_data(output_path, existing)
    print(f"완료: {collected}건 수집, 총 {len(existing)}건 저장")
    return collected


def main():
    parser = argparse.ArgumentParser(description="대한법률구조공단 법률상담사례 크롤러")
    parser.add_argument("--category", nargs="+", help="특정 카테고리만 (예: 018 019)")
    parser.add_argument("--all", action="store_true", help="1+2순위 전체")
    parser.add_argument("--dry-run", action="store_true", help="건수만 확인")
    args = parser.parse_args()

    if args.category:
        targets = args.category
    elif args.all:
        targets = list(CATEGORIES.keys())
    else:
        targets = PRIORITY_1

    print(f"대한법률구조공단 법률상담사례 크롤러")
    print(f"시작: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"대상 카테고리: {', '.join(targets)}")
    print(f"요청 간격: {DELAY_MIN}~{DELAY_MAX}초")

    total = 0
    for cat_id in targets:
        if cat_id not in CATEGORIES:
            print(f"알 수 없는 카테고리: {cat_id}")
            continue
        count = crawl_category(cat_id, CATEGORIES[cat_id], dry_run=args.dry_run)
        total += count

    print(f"\n{'='*50}")
    print(f"전체 완료: {total}건 수집")
    print(f"종료: {datetime.now().strftime('%Y-%m-%d %H:%M')}")


if __name__ == "__main__":
    main()
