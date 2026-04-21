"""NLRC 42,535건에서 퇴직금 관련 결정문 추출.

NLRC 데이터는 자료구분이 대부분 "부당해고"(38,405)로 분류되어 있지만,
본문·판정사항에는 퇴직금 쟁점이 광범위하게 포함되어 있음.
본문 텍스트 기반 키워드 필터링으로 재마이닝.

출력: kb/retirement/nlrc_extracted.json
"""

from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SRC = Path("kb/nlrc/decisions.json")
DST = Path("kb/retirement/nlrc_extracted.json")

# 퇴직금 관련 키워드 (본문 검색용)
RETIRE_KEYWORDS = [
    "퇴직금", "퇴직급여", "퇴직연금", "퇴직공제",
    "DC형", "DB형", "IRP",
    "근속연수", "계속근로연수", "평균임금", "퇴직일시금",
    "퇴직위로금", "명예퇴직금", "중간정산",
    "퇴직적립금", "퇴직수당",
]

# 퇴직금만의 특수 키워드 (관련성 높음)
STRONG_SIGNALS = ["퇴직금", "퇴직급여", "퇴직연금", "퇴직공제", "중간정산", "명예퇴직금", "퇴직위로금"]


def score(text: str) -> tuple[int, list[str]]:
    """Return (score, matched_keywords). Strong signals weighted x3."""
    matched: list[str] = []
    s = 0
    for kw in RETIRE_KEYWORDS:
        if kw in text:
            matched.append(kw)
            s += 3 if kw in STRONG_SIGNALS else 1
    return s, matched


def main() -> int:
    if not SRC.is_file():
        print(f"❌ NLRC 데이터 없음: {SRC}")
        return 1
    data = json.loads(SRC.read_text(encoding="utf-8"))
    print(f"📂 NLRC 총 {len(data):,}건 로드")

    extracted: list[dict] = []
    keyword_counter = Counter()
    jg_counter = Counter()

    for d in data:
        # 검색 대상 필드: 제목 + 판정사항 + 판정요지 (419자 평균, 핵심 콘텐츠)
        text_parts = [
            str(d.get("제목", "")),
            str(d.get("판정사항", "")),
            str(d.get("판정요지", "")),
        ]
        text = " ".join(text_parts)
        s, matched = score(text)
        if s >= 3:  # Strong 신호 1개 또는 일반 신호 3개 이상
            enriched = {
                **d,
                "_retirement_score": s,
                "_matched_keywords": matched,
            }
            extracted.append(enriched)
            for kw in matched:
                keyword_counter[kw] += 1
            jg_counter[d.get("자료구분", "?")] += 1

    print(f"✅ 퇴직금 관련 {len(extracted):,}건 추출 (점수≥3)")
    print()
    print("【키워드별 매칭 수】")
    for kw, n in keyword_counter.most_common():
        print(f"  {kw:<12} {n:,}")
    print()
    print("【자료구분별 분포】")
    for jg, n in jg_counter.most_common():
        print(f"  {jg:<20} {n:,}")

    # 저장
    DST.parent.mkdir(parents=True, exist_ok=True)
    DST.write_text(
        json.dumps(extracted, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"\n💾 저장: {DST} ({DST.stat().st_size / 1024 / 1024:.1f} MB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
