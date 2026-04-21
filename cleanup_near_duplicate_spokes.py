"""85%+ 유사 스포크 병합 — 다른 slug 쌍 정리 + next.config.js 리디렉션.

각 쌍에 대해 "유지(keep)"를 정하고, "삭제(delete)" 쪽을 배치/도메인 파일에서 제거.
그리고 /guide/{domain}/{old_slug} → /guide/{domain}/{new_slug} 리디렉션을
next.config.js 의 redirects() 함수에 추가.

SEO 보호용 301 리디렉션.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SPOKE_DIR = Path("web/src/data/spoke")
NEXT_CONFIG = Path("web/next.config.js")

# (domain, delete_slug, delete_from_files, keep_slug)
# keep 쪽은 캐논(도메인 파일)이나 더 나은 이름을 선택.
NEAR_DUP_PAIRS: list[tuple[str, str, list[str], str]] = [
    # 캐논 도메인 파일 선호
    (
        "child-support",
        "child-support-lawsuit-procedure",
        ["spokes-batch11-21to25.ts", "spokes-batch19-15to21.ts", "spokes-batch23-29to35.ts"],
        "child-support-lawsuit-process",
    ),
    (
        "school-violence",
        "report-to-committee-procedure",
        ["spokes-batch11-11to15.ts"],
        "school-violence-committee-procedure",
    ),
    (
        "industrial-accident1",
        "workers-comp-medical-claim-process",
        ["spokes-batch11-21to25.ts"],
        "workers-comp-claim-process",
    ),
    # 배치 파일간 — 더 나은 slug 선택
    (
        "unemployment",
        "unemployment-recognized-job-search-activity-guide",
        ["spokes-batch33-unemployment.ts"],
        "unemployment-job-search-recognized-types",
    ),
    (
        "retirement",
        "retirement-contract-worker-under-1year",
        ["spokes-batch27-retirement-wage.ts"],
        "retirement-less-than-1year-eligibility",
    ),
    (
        "traffic-accident",
        "insurance-claim-process-summary",
        ["spokes-batch11-11to15.ts", "spokes-batch21-29to35.ts"],
        "traffic-accident-insurance-claim-comprehensive",
    ),
]


def remove_spoke_object(text: str, slug: str) -> tuple[str, bool]:
    lines = text.split("\n")
    starts: list[int] = []
    ends: list[int] = []
    in_object = False
    brace_depth = 0
    for i, line in enumerate(lines):
        if not in_object:
            if re.match(r"^  \{\s*$", line):
                starts.append(i)
                in_object = True
                brace_depth = 1
        else:
            brace_depth += line.count("{") - line.count("}")
            if brace_depth == 0 and re.match(r"^  \},?\s*$", line):
                ends.append(i)
                in_object = False

    if len(starts) != len(ends):
        return text, False

    for start, end in zip(starts, ends):
        block = "\n".join(lines[start:end + 1])
        if f"slug: '{slug}'" in block:
            remove_start = start
            j = start - 1
            while j >= 0 and lines[j].strip() == "":
                j -= 1
            if j >= 0 and re.match(r"^\s*//", lines[j]):
                remove_start = j
            remove_end = end
            if remove_end + 1 < len(lines) and lines[remove_end + 1].strip() == "":
                remove_end += 1
            new_lines = lines[:remove_start] + lines[remove_end + 1:]
            return "\n".join(new_lines), True
    return text, False


def add_redirects_to_next_config(pairs: list[tuple[str, str, str]]) -> bool:
    """Add 301 redirects to next.config.js redirects() function.

    pairs: list of (domain, old_slug, new_slug)
    Returns True if config was modified.
    """
    text = NEXT_CONFIG.read_text(encoding="utf-8")

    # redirects() 이미 존재 여부 확인
    if "async redirects()" in text or "redirects:" in text:
        print("⚠️ next.config.js 에 이미 redirects() 존재 — 수동 병합 필요")
        return False

    # 리디렉션 블록 생성
    entries = []
    for domain, old_slug, new_slug in pairs:
        entries.append(
            f"""      {{
        source: '/guide/{domain}/{old_slug}',
        destination: '/guide/{domain}/{new_slug}',
        permanent: true,
      }}"""
        )
    redirects_block = (
        "\n  async redirects() {\n    return [\n"
        + ",\n".join(entries)
        + ",\n    ];\n  },\n"
    )

    # headers() 함수 직전에 삽입
    # 패턴: `  async headers() {`
    marker = re.search(r"(\n)(  async headers\(\))", text)
    if not marker:
        print("⚠️ next.config.js 구조를 해석할 수 없음 — 수동 삽입 필요")
        return False

    new_text = text[:marker.start(2)] + redirects_block + "\n  " + marker.group(2) + text[marker.end(2):]

    NEXT_CONFIG.write_text(new_text, encoding="utf-8")
    return True


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    total_removals = 0
    redirect_pairs: list[tuple[str, str, str]] = []

    for domain, delete_slug, files, keep_slug in NEAR_DUP_PAIRS:
        any_removed = False
        for fname in files:
            path = SPOKE_DIR / fname
            if not path.is_file():
                print(f"⚠️ 파일 없음: {path}")
                continue
            text = path.read_text(encoding="utf-8")
            new_text, removed = remove_spoke_object(text, delete_slug)
            if removed:
                print(f"✂️ {fname}: {delete_slug} 제거")
                total_removals += 1
                any_removed = True
                if not args.dry_run:
                    path.write_text(new_text, encoding="utf-8")
            else:
                print(f"⚠️ {delete_slug} 를 {fname} 에서 찾지 못함")
        if any_removed:
            redirect_pairs.append((domain, delete_slug, keep_slug))

    print()
    print(f"총 제거: {total_removals}건")
    print(f"리디렉션 추가 대기: {len(redirect_pairs)}개")
    for d, o, n in redirect_pairs:
        print(f"  /guide/{d}/{o} → /guide/{d}/{n}")

    if args.dry_run:
        print("\n(dry-run — 실제 수정 안 됨)")
        return 0

    if redirect_pairs:
        added = add_redirects_to_next_config(redirect_pairs)
        if added:
            print(f"\n✅ next.config.js 에 redirects() 추가 ({len(redirect_pairs)}개)")

    return 0


if __name__ == "__main__":
    sys.exit(main())
