"""Preview B: spoke TS 본문 단정형 일괄 치환 샘플.

각 빈번 패턴(반드시/인정됩니다/에 해당합니다/성립합니다/위법합니다) 마다 1개씩
실제 spoke 파일에서 발견된 컨텍스트와 치환 결과를 출력.

Usage: python scripts/preview-spoke-tone-fix.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent.parent
SPOKE_DIR = ROOT / "web" / "src" / "data" / "spoke"

# 사용자 요청: 5개 패턴 각각 1개 샘플
SAMPLE_PATTERNS = [
    (r"반드시\s+", "가능한 한 ", "반드시 ~하세요"),
    (r"인정됩니다", "인정될 수 있습니다", "인정됩니다"),
    (r"에\s*해당합니다", "에 해당할 소지가 있습니다", "에 해당합니다"),
    (r"성립합니다", "성립 여지가 있습니다", "성립합니다"),
    (r"위법합니다", "위법 소지가 있는 상황입니다", "위법합니다"),
]

EXCLUDE_PATTERNS = [
    r"법조문\s",
    r"민법\s제\d+조",
    r"형법\s제\d+조",
    r"근로기준법\s제\d+조",
    r"가사소송법\s제\d+조",
    r"기준\s중위소득",
    r"국선변호인은\s반드시",  # context 보존
]


def find_first_match(pattern: str) -> tuple[Path, str, str, str] | None:
    """Find first occurrence in any spoke file. Return (file, before_context, full_sentence, after_context)."""
    for path in sorted(SPOKE_DIR.glob("*.ts")):
        try:
            text = path.read_text(encoding="utf-8")
        except Exception:
            continue
        for m in re.finditer(pattern, text):
            window_start = max(0, m.start() - 50)
            window_end = min(len(text), m.end() + 50)
            window = text[window_start:window_end]
            if any(re.search(ex, window) for ex in EXCLUDE_PATTERNS):
                continue
            # extract sentence by walking back/forward to '.', '!', '?', '。', or end of HTML tag
            # simpler: take ±80 chars trimmed to nearest sentence boundary
            s_start = m.start()
            s_end = m.end()
            # walk back to start of sentence (max 100 chars)
            for i in range(s_start, max(s_start - 200, 0), -1):
                ch = text[i]
                if ch in (".", "!", "?", "。", "\n", ">"):
                    s_start = i + 1
                    break
            else:
                s_start = max(s_start - 100, 0)
            # walk forward to end of sentence
            for i in range(s_end, min(s_end + 200, len(text))):
                ch = text[i]
                if ch in (".", "!", "?", "。", "\n", "<"):
                    s_end = i + 1
                    break
            else:
                s_end = min(s_end + 100, len(text))
            sentence = text[s_start:s_end].strip()
            return path, sentence, m.group(0)
    return None


def main():
    print("=== spoke TS 본문 단정형 치환 미리보기 (5 패턴 × 1 샘플) ===\n")
    for pattern, replacement, label in SAMPLE_PATTERNS:
        result = find_first_match(pattern)
        print(f"[{label}]  →  치환 후: \"{replacement}\"")
        if not result:
            print("  (사용 가능한 샘플 없음)\n")
            continue
        path, sentence, matched = result
        # apply substitution to full sentence for after-preview
        after_sentence = re.sub(pattern, replacement, sentence)
        print(f"  파일: {path.relative_to(ROOT)}")
        print(f"  Before: {sentence}")
        print(f"  After:  {after_sentence}")
        print()


if __name__ == "__main__":
    main()
