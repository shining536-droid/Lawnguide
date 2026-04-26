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
BLOG_DIR = ROOT / "content" / "blog"
TISTORY_DIR = ROOT / "content" / "tistory"

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
    # 2026-04-26 추가 (사용자 보고 패턴)
    (r"확립했습니다", "확립되어 있습니다", "확립했습니다", False),
    (r"처합니다", "처할 수 있습니다", "처합니다", False),
    (r"배척되어", "배척될 수 있어", "배척되어", False),
    (r"정착됐고", "정착되고 있고", "정착됐고", False),
    (r"산정돼요", "산정되는 사례가 많아요", "산정돼요", False),
    (r"30분\s*무료\s*상담", "변호사 상담을 검토", "30분 무료 상담", False),
    (r"무료로\s*상담받으실?\s*수\s*있습니다", "법률구조공단(132)에서 상담을 받아보실 수 있습니다", "변호사 무료 상담", False),
    # 메타 필드 스킵 대상
    (r"반드시\s+", "가능한 한 ", "반드시", True),
    (r"무조건\s+", "원칙적으로 ", "무조건", True),
]

# ⚠️⚠️ (warning emoji 중복) → ⚠️ 단일화 — 안전망
EMOJI_DEDUPE = [
    (r"⚠️\s*⚠️", "⚠️"),
    (r"⚠⚠️", "⚠️"),
    (r"⚠️⚠", "⚠️"),
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

    # 0) ⚠️⚠️ → ⚠️ 안전망 (Naver 발행 시 중복 발생 보고에 대한 source-side 방어)
    for pattern, replacement in EMOJI_DEDUPE:
        regex = re.compile(pattern)
        before_count = len(regex.findall(text))
        if before_count > 0:
            text = regex.sub(replacement, text)
            counter["⚠️ 중복 정리"] += before_count
            total += before_count

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
    ap.add_argument("--blog", action="store_true", help="also process content/blog + content/tistory")
    args = ap.parse_args()

    targets: list[tuple[str, list[Path]]] = [("spoke TS", sorted(SPOKE_DIR.glob("*.ts")))]
    if args.blog:
        targets.append(("blog MD", sorted(BLOG_DIR.glob("*.md"))))
        targets.append(("tistory MD", sorted(TISTORY_DIR.glob("*.md"))))

    grand_counter: Counter = Counter()
    grand_total = 0
    grand_files = 0
    for label_target, files in targets:
        total_files = len(files)
        files_changed = 0
        section_counter: Counter = Counter()
        section_total = 0
        for path in files:
            new_text, counter, total = process_file(path)
            if total == 0:
                continue
            files_changed += 1
            section_counter.update(counter)
            section_total += total
            if args.apply:
                path.write_text(new_text, encoding="utf-8")
        grand_counter.update(section_counter)
        grand_total += section_total
        grand_files += files_changed

        label = "APPLIED" if args.apply else "DRY-RUN"
        print(f"=== {label_target} 단정형 치환 [{label}] ===")
        print(f"  Files scanned: {total_files}")
        print(f"  Files changed: {files_changed}")
        print(f"  Total substitutions: {section_total}")
        print(f"  By pattern:")
        for label_, c in section_counter.most_common():
            print(f"    {c:5d}  {label_}")
        print()

    print(f"=== TOTAL: {grand_total} subs across {grand_files} files ===")


if __name__ == "__main__":
    main()
