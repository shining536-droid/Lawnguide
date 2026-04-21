"""유사 스포크 목록 추출 — 같은 도메인 내 제목/키워드가 유사한 스포크를 찾음.

기준:
- 같은 domain 내 전체 스포크 쌍 비교
- 제목(keyword) + meta.title을 정규화 후 어간 추출 (2자 이상 한글)
- 두 스포크의 어간 교집합 / 합집합 (Jaccard) 계산
- 임계값 이상이면 후보 쌍으로 리포트

Usage:
  python analyze_spoke_similarity.py                    # 전체 도메인, 기본 임계값
  python analyze_spoke_similarity.py --threshold 0.5    # 낮은 기준
  python analyze_spoke_similarity.py --domain fraud     # 특정 도메인만
"""

from __future__ import annotations

import argparse
import glob
import re
import sys
from collections import defaultdict
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SPOKE_DIR = Path("web/src/data/spoke")

KEYWORD_RE = re.compile(r"[가-힣]{2,}")
DOMAIN_RE = re.compile(r"domain:\s*'([^']+)'")
SLUG_RE = re.compile(r"slug:\s*'([^']+)'")
KEYWORD_FIELD_RE = re.compile(r"keyword:\s*'([^']+)'")
META_TITLE_RE = re.compile(r"title:\s*'([^']+)'")

# 일반 동사 어미·조사
KOREAN_ENDINGS = (
    "했는데요", "했는데", "했어요", "합니다", "습니다", "인가요", "은가요",
    "한가요", "하는", "하면", "해야", "했을", "인지", "인데", "없나요",
    "있나요", "받나요", "되나요", "하나요", "나요", "까요", "어요", "예요",
    "이에요", "이죠", "된다", "한다", "있다", "없다", "이다", "이고", "하고",
    "부터", "까지", "보다", "처럼", "에서", "에게", "으로", "로서", "으로",
    "이나", "이든", "인가", "한", "할", "은", "는", "이", "가", "을", "를",
    "과", "와", "에", "도", "만", "의",
)


def title_stems(text: str) -> set[str]:
    tokens = KEYWORD_RE.findall(text)
    out: set[str] = set()
    for t in tokens:
        stem = t
        for end in KOREAN_ENDINGS:
            if len(stem) > len(end) + 1 and stem.endswith(end):
                stem = stem[: -len(end)]
                break
        if len(stem) >= 2:
            out.add(stem)
    return out


def extract_spokes(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    # block-based split on "domain:"
    blocks = re.split(r"\n\s*\{\s*\n", text)
    items: list[dict] = []
    for b in blocks:
        d = DOMAIN_RE.search(b)
        s = SLUG_RE.search(b)
        if not d or not s:
            continue
        kw = KEYWORD_FIELD_RE.search(b)
        mt = META_TITLE_RE.search(b)
        items.append({
            "domain": d.group(1),
            "slug": s.group(1),
            "keyword": kw.group(1) if kw else "",
            "meta_title": mt.group(1) if mt else "",
            "source": path.name,
        })
    return items


def jaccard(a: set[str], b: set[str]) -> float:
    if not a or not b:
        return 0.0
    inter = len(a & b)
    union = len(a | b)
    return inter / union if union else 0.0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--threshold", type=float, default=0.5)
    parser.add_argument("--domain", default=None, help="특정 도메인만")
    parser.add_argument("--min-overlap", type=int, default=3, help="최소 어간 교집합")
    parser.add_argument("--output", default=None, help="결과 JSON 저장 경로")
    args = parser.parse_args()

    all_spokes: list[dict] = []
    for p in sorted(SPOKE_DIR.glob("*.ts")):
        try:
            all_spokes.extend(extract_spokes(p))
        except Exception as e:
            print(f"⚠️ {p}: {e}")

    # Also scan domain-named files (e.g. fraud.ts, assault.ts)
    seen = {(s["domain"], s["slug"]) for s in all_spokes}
    total = len(all_spokes)
    print(f"📂 총 {total}개 스포크 로드 ({len(set(s['domain'] for s in all_spokes))}개 도메인)")

    # Compute stems per spoke
    for s in all_spokes:
        text = f"{s['keyword']} {s['meta_title']}"
        s["_stems"] = title_stems(text)

    # Group by domain
    by_domain: dict[str, list[dict]] = defaultdict(list)
    for s in all_spokes:
        by_domain[s["domain"]].append(s)

    # Compare pairs within each domain
    candidates: list[tuple[float, int, dict, dict]] = []  # (sim, overlap_count, a, b)
    for d, spokes in by_domain.items():
        if args.domain and d != args.domain:
            continue
        for i in range(len(spokes)):
            for j in range(i + 1, len(spokes)):
                a = spokes[i]
                b = spokes[j]
                shared = a["_stems"] & b["_stems"]
                if len(shared) < args.min_overlap:
                    continue
                sim = jaccard(a["_stems"], b["_stems"])
                if sim >= args.threshold:
                    candidates.append((sim, len(shared), a, b))

    candidates.sort(key=lambda c: -c[0])

    print(f"\n⚠️ 유사도 ≥ {args.threshold} AND 공유 어간 ≥ {args.min_overlap} — {len(candidates)}쌍")
    print("=" * 90)

    # Group by domain for report
    by_d: dict[str, list] = defaultdict(list)
    for sim, n, a, b in candidates:
        by_d[a["domain"]].append((sim, n, a, b))

    for d in sorted(by_d.keys(), key=lambda x: -len(by_d[x])):
        rows = by_d[d]
        print(f"\n■ {d} ({len(rows)}쌍)")
        for sim, n, a, b in rows:
            print(f"  {sim:.0%} / 공유 {n}개")
            print(f"    A  {a['slug']}")
            print(f"       {a['keyword']}")
            print(f"    B  {b['slug']}")
            print(f"       {b['keyword']}")
            shared = sorted(a["_stems"] & b["_stems"])
            print(f"    어간: {', '.join(shared[:8])}")

    if args.output:
        import json
        data = [
            {
                "domain": a["domain"],
                "similarity": round(sim, 3),
                "overlap": n,
                "a_slug": a["slug"],
                "a_keyword": a["keyword"],
                "b_slug": b["slug"],
                "b_keyword": b["keyword"],
                "shared_stems": sorted(a["_stems"] & b["_stems"]),
            }
            for sim, n, a, b in candidates
        ]
        Path(args.output).write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"\n💾 {args.output} 저장")

    return 0


if __name__ == "__main__":
    sys.exit(main())
