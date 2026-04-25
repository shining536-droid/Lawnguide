"""B 단계: spoke TS 본문 단정형 일괄 치환.

치환 규칙:
- 반드시\\s+ → 가능한 한  (단, title:/keyword:/questionKeyword:/ctaKeyword:/name: 필드는 제외)
- 인정됩니다 → 인정될 수 있습니다
- 에 해당합니다 → 에 해당할 소지가 있습니다
- 성립합니다 → 성립할 수 있습니다 (사용자 보정 B)
- 성립됩니다 → 성립할 수 있습니다
- 위법합니다 → 위법 소지가 있습니다 (사용자 보정 C, 간결화)
- 처벌됩니다 → 처벌 대상으로 검토될 수 있습니다
- 처벌받습니다 → 처벌 대상으로 검토될 수 있습니다
- 부당해고입니다 → 부당해고로 검토될 수 있습니다
- 사기입니다 → 사기로 검토될 수 있습니다
- 무조건\\s+ → 원칙적으로 (단, title 등 메타 필드 제외)
- 형사범죄입니다 → 형사처벌 대상으로 검토될 수 있습니다
- 100%\\s*환급 → 환급 검토

법조문 인용 컨텍스트(EXCLUDE_PATTERNS)는 자동 스킵.
title:/keyword:/questionKeyword:/ctaKeyword:/name: 등 메타 필드 라인은 "반드시"/"무조건" 만 스킵.

Usage:
  python scripts/fix-spoke-tone.py --dry-run   # 미리보기 (변경 파일 수 + 치환 건수만)
  python scripts/fix-spoke-tone.py --apply     # 실제 파일 수정
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from collections import Counter

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent.parent
SPOKE_DIR = ROOT / "web" / "src" / "data" / "spoke"

# (regex pattern, replacement, label, skip_in_meta_lines)
SUBS = [
    (r"형사범죄입니다", "형사처벌 대상으로 검토될 수 있습니다", "형사범죄입니다", False),
    (r"부당해고입니다", "부당해고로 검토될 수 있습니다", "부당해고입니다", False),
    (r"사기입니다", "사기로 검토될 수 있습니다", "사기입니다", False),
    (r"위법합니다", "위법 소지가 있습니다", "위법합니다", False),
    (r"처벌됩니다", "처벌 대상으로 검토될 수 있습니다", "처벌됩니다", False),
    (r"처벌받습니다", "처벌 대상으로 검토될 수 있습니다", "처벌받습니다", False),
    (r"성립합니다", "성립할 수 있습니다", "성립합니다", False),
    (r"성립됩니다", "성립할 수 있습니다", "성립됩니다", False),
    (r"인정됩니다", "인정될 수 있습니다", "인정됩니다", False),
    (r"에\s*해당합니다", "에 해당할 소지가 있습니다", "에 해당합니다", False),
    (r"100%\s*환급", "환급 검토", "100% 환급", False),
    # 메타 필드 스킵 대상
    (r"반드시\s+", "가능한 한 ", "반드시", True),
    (r"무조건\s+", "원칙적으로 ", "무조건", True),
]

EXCLUDE_PATTERNS = [
    r"법조문\s",
    r"민법\s제\d+조",
    r"형법\s제\d+조",
    r"근로기준법\s제\d+조",
    r"가사소송법\s제\d+조",
    r"기준\s중위소득",
]

# 메타 필드 라인 (title 등) — 사용자 보정 A
META_LINE_RE = re.compile(
    r"^\s*(title|keyword|questionKeyword|ctaKeyword|name|description|meta)\s*:\s*['\"`]"
)


def is_excluded_window(text: str, start: int, end: int) -> bool:
    window_start = max(0, start - 30)
    window_end = min(len(text), end + 30)
    window = text[window_start:window_end]
    return any(re.search(ex, window) for ex in EXCLUDE_PATTERNS)


def is_in_meta_line(text: str, pos: int) -> bool:
    """Check if pos in text is inside a title:/name:/etc line."""
    # find start of current line
    line_start = text.rfind("\n", 0, pos) + 1
    line_end = text.find("\n", pos)
    if line_end < 0:
        line_end = len(text)
    line = text[line_start:line_end]
    return bool(META_LINE_RE.match(line))


def process_file(path: Path) -> tuple[str, Counter, int]:
    """Return (new_text, counter, total_subs)."""
    text = path.read_text(encoding="utf-8")
    counter: Counter = Counter()
    total = 0

    for pattern, replacement, label, skip_meta in SUBS:
        # find all matches first, then replace from end to start to keep indices stable
        regex = re.compile(pattern)
        matches = list(regex.finditer(text))
        # filter out excluded
        kept: list[re.Match] = []
        for m in matches:
            if is_excluded_window(text, m.start(), m.end()):
                continue
            if skip_meta and is_in_meta_line(text, m.start()):
                continue
            kept.append(m)
        # apply in reverse
        for m in reversed(kept):
            text = text[: m.start()] + replacement + text[m.end():]
            counter[label] += 1
            total += 1

    return text, counter, total


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    files = sorted(SPOKE_DIR.glob("*.ts"))
    total_files = len(files)
    files_changed = 0
    grand_counter: Counter = Counter()
    grand_total = 0

    for path in files:
        new_text, counter, total = process_file(path)
        if total == 0:
            continue
        files_changed += 1
        grand_counter.update(counter)
        grand_total += total
        if args.apply:
            path.write_text(new_text, encoding="utf-8")

    label = "APPLIED" if args.apply else "DRY-RUN"
    print(f"=== spoke TS 단정형 일괄 치환 [{label}] ===")
    print(f"  Files scanned: {total_files}")
    print(f"  Files changed: {files_changed}")
    print(f"  Total substitutions: {grand_total}")
    print(f"  By pattern:")
    for label_, c in grand_counter.most_common():
        print(f"    {c:5d}  {label_}")


if __name__ == "__main__":
    main()
