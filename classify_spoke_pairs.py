"""60~85% 유사 스포크 쌍 분류 — 리디렉션 / 유지 / 보류.

각 쌍의 spoke 메타(perspective, type, 본문 길이)를 추출해 판단.

판단 규칙:
- 관점(perspective) 다름 (victim vs accused, victim vs neutral 등) → 유지
- type 다름 (절차형 vs 상황형, 판단형 vs 비교형 등) → 유지
- 그 외 같으면 본문 길이 긴 쪽을 canon, 짧은 쪽 redirect 후보
- 두 쪽 다 길이 차 20% 이내 → 보류

본문 길이 = sections.content 합계 (HTML 태그 제외 개략)

출력: 3 분류 리스트 + classify_result.json 저장
"""

from __future__ import annotations

import argparse
import glob
import json
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SPOKE_DIR = Path("web/src/data/spoke")

# 스포크 객체 블록에서 필드 추출 정규식
SLUG_RE = re.compile(r"slug:\s*'([^']+)'")
PERSPECTIVE_RE = re.compile(r"perspective:\s*'([^']+)'")
TYPE_RE = re.compile(r"type:\s*'([^']+)'")
KEYWORD_RE = re.compile(r"keyword:\s*'([^']+)'")
CONTENT_RE = re.compile(r"content:\s*\n?\s*'(.+?)',\s*\n", re.DOTALL)


def load_all_spokes() -> dict[tuple[str, str], dict]:
    """Return {(domain, slug): spoke_meta}."""
    out: dict[tuple[str, str], dict] = {}
    for f in glob.glob(str(SPOKE_DIR / "*.ts")):
        text = Path(f).read_text(encoding="utf-8")
        # 객체 블록 분할
        lines = text.split("\n")
        starts = []
        ends = []
        in_obj = False
        depth = 0
        for i, line in enumerate(lines):
            if not in_obj and re.match(r"^  \{\s*$", line):
                starts.append(i)
                in_obj = True
                depth = 1
            elif in_obj:
                depth += line.count("{") - line.count("}")
                if depth == 0 and re.match(r"^  \},?\s*$", line):
                    ends.append(i)
                    in_obj = False
        for s, e in zip(starts, ends):
            block = "\n".join(lines[s:e + 1])
            dm = re.search(r"domain:\s*'([^']+)'", block)
            sm = SLUG_RE.search(block)
            if not dm or not sm:
                continue
            slug = sm.group(1)
            domain = dm.group(1)
            pm = PERSPECTIVE_RE.search(block)
            tm = TYPE_RE.search(block)
            km = KEYWORD_RE.search(block)

            # 본문 길이 근사: content 필드 내부 문자열 합산 (HTML 태그 제거)
            contents = re.findall(r"content:\s*'([^']*(?:\\'[^']*)*)'", block, re.DOTALL)
            total_chars = 0
            for c in contents:
                plain = re.sub(r"<[^>]+>", "", c)
                plain = re.sub(r"\\n|\\'", "", plain)
                total_chars += len(plain)

            # 섹션 개수
            sections_count = block.count("title:") - (1 if block.count("meta:") else 0)  # rough

            out[(domain, slug)] = {
                "domain": domain,
                "slug": slug,
                "perspective": pm.group(1) if pm else None,
                "type": tm.group(1) if tm else None,
                "keyword": km.group(1) if km else "",
                "content_len": total_chars,
                "source_file": Path(f).name,
            }
    return out


def classify_pair(a: dict, b: dict) -> tuple[str, str]:
    """Return (category, reason). category in 'redirect', 'keep', 'defer'."""
    # 관점 다름 → 유지
    if a["perspective"] and b["perspective"] and a["perspective"] != b["perspective"]:
        return "keep", f"관점 다름 ({a['perspective']} vs {b['perspective']})"
    # 유형 다름 → 유지
    if a["type"] and b["type"] and a["type"] != b["type"]:
        return "keep", f"유형 다름 ({a['type']} vs {b['type']})"
    # 길이 차이 기반
    a_len = a["content_len"]
    b_len = b["content_len"]
    if a_len == 0 and b_len == 0:
        return "defer", "본문 길이 정보 없음"
    longer_len = max(a_len, b_len)
    shorter_len = min(a_len, b_len)
    if longer_len == 0:
        return "defer", "본문 길이 0"
    ratio = shorter_len / longer_len if longer_len else 0
    if ratio > 0.8:
        return "defer", f"길이 차 20% 이내 (A:{a_len} B:{b_len})"
    # 확실히 한쪽이 더 길면 리디렉션
    canon = a if a_len >= b_len else b
    other = b if canon is a else a
    return "redirect", f"canon={canon['slug']} ({canon['content_len']}자), 삭제={other['slug']} ({other['content_len']}자)"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", default="tmp_spoke_similarity.json")
    parser.add_argument("--output", default="tmp_spoke_classify.json")
    parser.add_argument("--min-sim", type=float, default=0.6)
    parser.add_argument("--max-sim", type=float, default=0.85)
    args = parser.parse_args()

    pairs = json.loads(Path(args.input).read_text(encoding="utf-8"))
    pairs = [p for p in pairs if args.min_sim <= p["similarity"] < args.max_sim]
    print(f"📂 {len(pairs)}쌍 (유사도 {args.min_sim}~{args.max_sim})")

    all_spokes = load_all_spokes()
    print(f"📂 {len(all_spokes)}개 스포크 메타 로드")

    results: list[dict] = []
    for p in pairs:
        domain = p["domain"]
        a_slug = p["a_slug"]
        b_slug = p["b_slug"]
        a = all_spokes.get((domain, a_slug))
        b = all_spokes.get((domain, b_slug))
        if not a or not b:
            results.append({**p, "category": "defer", "reason": "메타 누락"})
            continue
        cat, reason = classify_pair(a, b)
        # Determine canon/delete for redirect
        canon_slug = None
        delete_slug = None
        if cat == "redirect":
            if a["content_len"] >= b["content_len"]:
                canon_slug = a_slug
                delete_slug = b_slug
            else:
                canon_slug = b_slug
                delete_slug = a_slug
        results.append({
            **p,
            "category": cat,
            "reason": reason,
            "a_meta": a,
            "b_meta": b,
            "canon_slug": canon_slug,
            "delete_slug": delete_slug,
        })

    # 분류 집계
    by_cat: dict[str, list[dict]] = {"redirect": [], "keep": [], "defer": []}
    for r in results:
        by_cat[r["category"]].append(r)

    print()
    print("=" * 80)
    print(f"【리디렉션 대상 — {len(by_cat['redirect'])}쌍】 검색의도 동일, 긴 쪽 canon")
    print("=" * 80)
    for r in by_cat["redirect"]:
        print(f"\n{r['domain']} [{r['similarity']:.0%}]")
        print(f"  canon   {r['canon_slug']}")
        print(f"  삭제     {r['delete_slug']}")
        print(f"  근거    {r['reason']}")

    print()
    print("=" * 80)
    print(f"【유지 — {len(by_cat['keep'])}쌍】 각도/관점/유형 다름")
    print("=" * 80)
    for r in by_cat["keep"]:
        print(f"\n{r['domain']} [{r['similarity']:.0%}]")
        print(f"  A  {r['a_slug']} ({r['a_meta']['perspective']}/{r['a_meta']['type']})")
        print(f"  B  {r['b_slug']} ({r['b_meta']['perspective']}/{r['b_meta']['type']})")
        print(f"  근거  {r['reason']}")

    print()
    print("=" * 80)
    print(f"【보류 — {len(by_cat['defer'])}쌍】 길이 비슷, 수동 검토 필요")
    print("=" * 80)
    for r in by_cat["defer"]:
        print(f"\n{r['domain']} [{r['similarity']:.0%}]")
        print(f"  A  {r['a_slug']}")
        print(f"  B  {r['b_slug']}")
        print(f"  근거  {r['reason']}")

    Path(args.output).write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n💾 {args.output} 저장 ({len(results)}쌍)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
