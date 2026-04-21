"""Validate Naver blog and Tistory body length.

CLAUDE.md rule: 본문 1,500~1,800자. 1,500자 미만 발행 금지.

Usage:
    python check_blog_length.py              # 오늘 날짜 기준 모든 블로그 검사
    python check_blog_length.py 2026-04-21   # 특정 날짜 검사
    python check_blog_length.py --all        # content/blog + content/tistory 전체 검사
    python check_blog_length.py --strict     # < 1500 발견 시 exit 1

프론트매터·마크다운 기호·공백 제외한 순수 본문 글자수를 계산합니다.
"""

from __future__ import annotations

import glob
import re
import sys
from datetime import date, datetime
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

MIN_CHARS = 1500
MAX_CHARS = 1800
INTRO_MIN_CHARS = 100  # 150~200 목표, 하한 100 (공감도입 유무 검증)

FRONTMATTER_RE = re.compile(r"^---\n.*?\n---\n", re.DOTALL)
MARKDOWN_SYMBOLS_RE = re.compile(r"[#*`\[\]()\-=>|_!]")
WHITESPACE_RE = re.compile(r"\s+")
DATE_RE = re.compile(r'^date:\s*"([^"]+)"', re.MULTILINE)
FIRST_TIP_RE = re.compile(r"💡\s*\*?\*?\s*Tip", re.IGNORECASE)
EMPATHY_HOOK_RE = re.compile(r"(죠\b|이시죠|하실지|답답|막막|걱정|고민|속상|힘드시|어렵죠|있나요\?|없을까요\?|있을까요\?)")


def _strip_to_body(text: str) -> str:
    m = FRONTMATTER_RE.match(text)
    return text[m.end():] if m else text


def count_body_chars(text: str) -> int:
    body = _strip_to_body(text)
    body = MARKDOWN_SYMBOLS_RE.sub("", body)
    body = WHITESPACE_RE.sub("", body)
    return len(body)


def check_empathy_intro(text: str) -> tuple[bool, int, bool]:
    """Return (has_intro, intro_chars, has_hook).

    공감 도입 = 본문 시작부터 첫 💡 Tip 직전까지 영역.
    조건: 정제된 글자수 ≥ INTRO_MIN_CHARS  AND  공감 어미·감정어 1개 이상 포함.
    """
    body = _strip_to_body(text)
    m = FIRST_TIP_RE.search(body)
    intro_raw = body[:m.start()] if m else body[:500]
    intro_for_hook = intro_raw
    intro_clean = MARKDOWN_SYMBOLS_RE.sub("", intro_raw)
    intro_clean = WHITESPACE_RE.sub("", intro_clean)
    chars = len(intro_clean)
    has_hook = bool(EMPATHY_HOOK_RE.search(intro_for_hook))
    has_intro = chars >= INTRO_MIN_CHARS and has_hook
    return has_intro, chars, has_hook


def extract_date(text: str) -> str | None:
    m = DATE_RE.search(text)
    return m.group(1) if m else None


def collect_files(target_date: str | None, scan_all: bool) -> list[Path]:
    dirs = ["content/blog", "content/tistory"]
    paths: list[Path] = []
    for d in dirs:
        for p in glob.glob(f"{d}/*.md"):
            paths.append(Path(p))
    if scan_all:
        return paths
    out: list[Path] = []
    for p in paths:
        text = p.read_text(encoding="utf-8")
        d = extract_date(text)
        if d == target_date:
            out.append(p)
    return out


def main() -> int:
    args = sys.argv[1:]
    strict = "--strict" in args
    scan_all = "--all" in args
    date_args = [a for a in args if not a.startswith("--")]
    target_date = date_args[0] if date_args else date.today().isoformat()

    if scan_all:
        files = collect_files(None, True)
        header = f"전체 스캔 — {len(files)}개 파일"
    else:
        files = collect_files(target_date, False)
        header = f"날짜 {target_date} — {len(files)}개 파일"

    if not files:
        print(f"[check_blog_length] {header} (없음)")
        return 0

    short: list[tuple[Path, int]] = []
    over: list[tuple[Path, int]] = []
    ok: list[tuple[Path, int]] = []
    no_intro: list[tuple[Path, int, bool]] = []  # (path, intro_chars, has_hook)

    for p in sorted(files):
        text = p.read_text(encoding="utf-8")
        chars = count_body_chars(text)
        has_intro, intro_chars, has_hook = check_empathy_intro(text)
        if chars < MIN_CHARS:
            short.append((p, chars))
        elif chars > MAX_CHARS:
            over.append((p, chars))
        else:
            ok.append((p, chars))
        if not has_intro:
            no_intro.append((p, intro_chars, has_hook))

    print(f"[check_blog_length] {header}")
    print(f"  목표: {MIN_CHARS}~{MAX_CHARS}자 본문, 공감도입 {INTRO_MIN_CHARS}자 이상 + 공감어미 필수")
    print(f"  OK              {len(ok):>3}개")
    print(f"  부족(<{MIN_CHARS}):    {len(short):>3}개")
    print(f"  초과(>{MAX_CHARS}):    {len(over):>3}개")
    print(f"  공감도입 누락:   {len(no_intro):>3}개")

    if short:
        print(f"\n⚠️ 본문 부족 (재생성 필요) — {len(short)}개:")
        for p, c in short:
            deficit = MIN_CHARS - c
            print(f"  {c:>5}자 (부족 {deficit:>3})  {p}")

    if over:
        print(f"\n⚠️ 본문 초과 ({MAX_CHARS}자 초과) — {len(over)}개:")
        for p, c in over:
            print(f"  {c:>5}자  {p}")

    if no_intro:
        print(f"\n⚠️ 공감도입 누락·부족 — {len(no_intro)}개:")
        print(f"   (본문 맨 앞 ~ 첫 💡 Tip 사이 영역이 {INTRO_MIN_CHARS}자 미만이거나 공감 어미 없음)")
        for p, ic, hh in no_intro:
            reason = []
            if ic < INTRO_MIN_CHARS:
                reason.append(f"도입 {ic}자")
            if not hh:
                reason.append("공감어미 없음")
            print(f"  [{', '.join(reason)}]  {p}")

    if strict and (short or no_intro):
        issues = []
        if short:
            issues.append(f"본문 부족 {len(short)}개")
        if no_intro:
            issues.append(f"공감도입 누락 {len(no_intro)}개")
        print(f"\n❌ 발행 금지 — {' / '.join(issues)}. 재생성 후 재실행하세요.")
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
