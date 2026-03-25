#!/usr/bin/env python3
"""
판례내용에서 핵심 요지 추출 스크립트
- 판결요지/판시사항이 둘 다 없는 판례 대상
- API에서 판례내용(전문)을 가져와 핵심 3줄 추출
- cases.json의 판결요지 필드에 저장
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

API_DETAIL = "http://www.law.go.kr/DRF/lawService.do"
OC = "lawnguide2026"
API_DELAY = 0.5


def fetch_case_content(case_id):
    """본문 API에서 판례내용 가져오기"""
    params = urllib.parse.urlencode({
        "OC": OC, "target": "prec", "type": "XML", "ID": case_id,
    })
    url = f"{API_DETAIL}?{params}"
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read().decode("utf-8")

    if "일치하는" in raw and "없습니다" in raw:
        return None

    root = ET.fromstring(raw)
    content = root.findtext("판례내용", "")
    if content:
        content = re.sub(r"<[^>]+>", "", content).strip()
    return content


def extract_summary(content, case_name):
    """판례내용에서 핵심 요지 3줄 추출"""
    if not content:
        return ""

    lines = []

    # 1. 주문 추출 (형량/결론)
    jumun_match = re.search(r"【\s*주\s*문\s*】\s*(.+?)(?=【|$)", content, re.DOTALL)
    if jumun_match:
        jumun = jumun_match.group(1).strip()
        # 첫 문장만 (마침표 또는 줄바꿈까지)
        jumun_first = re.split(r"[.\n]", jumun)[0].strip()
        if jumun_first and len(jumun_first) > 5:
            lines.append(f"[주문] {jumun_first}")

    # 2. 이유 섹션에서 핵심 판단 추출
    reason_match = re.search(r"【\s*(?:이\s*유|판결이유|항소이유의 요지)\s*】\s*(.+?)(?=【|$)", content, re.DOTALL)
    if not reason_match:
        # 이유 섹션이 없으면 전체에서 찾기
        reason_text = content
    else:
        reason_text = reason_match.group(1)

    # 결론 문장 패턴
    conclusion_patterns = [
        r"[^.]*(?:판단하였다|인정된다|타당하다|이유 있다|이유 없다|정당하다|위법하다|무죄|유죄)[^.]*\.",
        r"[^.]*(?:파기환송|파기자판|원심판결을? 파기|항소를? 기각|상고를? 기각|상고를? 받아들)[^.]*\.",
        r"[^.]*(?:징역|벌금|집행유예|선고유예|무죄를? 선고)[^.]*\.",
        r"[^.]*(?:성립한다|해당한다|해당하지 않는다|인정할 수 있다|인정할 수 없다)[^.]*\.",
    ]

    for pattern in conclusion_patterns:
        matches = re.findall(pattern, reason_text)
        for m in matches:
            m = m.strip()
            if 10 < len(m) < 300 and m not in lines:
                lines.append(m)
                if len(lines) >= 3:
                    break
        if len(lines) >= 3:
            break

    # 3. 부족하면 사건명에서 보충
    if len(lines) < 2 and case_name:
        # 사건명에 [] 안의 요약이 있는 경우
        bracket_match = re.search(r"\[(.+?)\]", case_name)
        if bracket_match:
            lines.insert(0, bracket_match.group(1).strip())

    result = " ".join(lines[:3])
    return result if result else ""


def main():
    domains = sorted([d for d in os.listdir("kb") if os.path.isdir(os.path.join("kb", d))])
    total_processed = 0
    total_extracted = 0
    total_failed = 0

    print(f"📋 {len(domains)}개 도메인 판례 핵심 추출 시작\n")

    for i, domain in enumerate(domains, 1):
        path = os.path.join("kb", domain, "cases.json")
        if not os.path.exists(path):
            continue

        with open(path, "r", encoding="utf-8") as f:
            cases = json.load(f)

        # 판결요지/판시사항 둘 다 없는 판례만 대상
        targets = [
            (idx, c) for idx, c in enumerate(cases)
            if not c.get("판결요지", "").strip() and not c.get("판시사항", "").strip()
        ]

        if not targets:
            continue

        print(f"[{i}/{len(domains)}] {domain}: {len(targets)}개 추출 대상")
        domain_extracted = 0

        for idx, case in targets:
            cid = case["판례일련번호"]
            try:
                content = fetch_case_content(cid)
                time.sleep(API_DELAY)

                if content:
                    summary = extract_summary(content, case.get("사건명", ""))
                    if summary:
                        cases[idx]["판결요지"] = summary
                        domain_extracted += 1
                    else:
                        total_failed += 1
                else:
                    total_failed += 1

                total_processed += 1
            except Exception as e:
                print(f"  ⚠️ ID={cid}: {str(e)[:50]}")
                total_failed += 1
                total_processed += 1
                continue

        # 저장
        with open(path, "w", encoding="utf-8") as f:
            json.dump(cases, f, ensure_ascii=False, indent=2)

        total_extracted += domain_extracted
        print(f"  📄 {domain_extracted}/{len(targets)}개 추출 완료\n")

    print(f"\n✅ 전체 완료: {total_processed}개 처리, {total_extracted}개 추출 성공, {total_failed}개 실패")


if __name__ == "__main__":
    main()
