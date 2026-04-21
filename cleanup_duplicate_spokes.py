"""중복 슬러그 스포크 정리 — 같은 slug가 여러 배치 파일에 등장할 때 중복 제거.

로직:
- 각 슬러그에 대해 "유지(keep)" 파일과 "삭제(remove)" 파일 목록 정의
- 삭제 대상 파일에서 해당 slug의 SpokePage 객체만 제거
- 앞·뒤 ` // ─── N. ... ───` 형식 주석도 함께 제거

안전장치:
- 빈 배열이 되는 배치 파일은 경고만 출력 (import/export 처리는 수동)
- 다른 SpokePage 객체는 건드리지 않음
- 실행 전 dry-run 모드 지원
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

# 정리 계획: (slug, remove_from_files[]) — keep 파일은 나열하지 않음
REMOVAL_PLAN: dict[str, list[str]] = {
    # 100% 동일 slug 9쌍 — 뒤 배치 삭제
    "academy-teacher-molestation-response": ["spokes-batch19-1to7.ts"],
    "workers-comp-medical-claim-process": ["spokes-batch19-8to14.ts", "spokes-batch23-15to21.ts"],
    "commute-accident-recognition": ["spokes-batch19-8to14.ts", "spokes-batch23-15to21.ts"],
    "online-chat-arrest-response": ["spokes-batch19-8to14.ts"],
    "contract-cancellation-deposit-return": ["spokes-batch19-22to28.ts", "spokes-batch23-1to7.ts"],
    "sale-contract-essential-clauses": ["spokes-batch19-29to35.ts", "spokes-batch23-1to7.ts"],
    "commercial-lease-termination-procedure": ["spokes-batch21-15to21.ts"],
    "employer-report-obligation-process": ["spokes-batch19-15to21.ts", "spokes-batch23-15to21.ts"],
    # 85%+ 같은 slug 재수록
    "complaint-to-judgment-full-procedure": ["spokes-batch23-22to28.ts"],
    "child-support-calculation-table": ["spokes-batch19-15to21.ts", "spokes-batch23-29to35.ts"],
    "dui-criminal-procedure-overview": ["spokes-batch21-29to35.ts"],
    "interim-retirement-pay-requirements": ["spokes-batch21-8to14.ts"],
    "application-to-payment-full-procedure": ["spokes-batch23-29to35.ts"],
    "serious-accident-employer-response": ["spokes-batch19-15to21.ts", "spokes-batch23-15to21.ts"],
    "unpaid-wage-report-procedure-timeline": ["spokes-batch21-1to7.ts"],
    "rehabilitation-application-procedure-atoz": ["spokes-batch21-15to21.ts"],
}

SPOKE_DIR = Path("web/src/data/spoke")


def remove_spoke_object(text: str, slug: str) -> tuple[str, bool]:
    """Remove SpokePage object containing `slug: 'slug'`. Returns (new_text, removed)."""
    lines = text.split("\n")
    # 객체 경계 스캔: `  {` 시작, `  },?\s*` 또는 `  }\s*` 종료
    starts: list[int] = []
    ends: list[int] = []
    in_object = False
    brace_depth = 0
    for i, line in enumerate(lines):
        stripped = line
        if not in_object:
            if re.match(r"^  \{\s*$", stripped):
                starts.append(i)
                in_object = True
                brace_depth = 1
        else:
            # 괄호 depth 추적 (간단히 `{` `}` 카운트)
            brace_depth += stripped.count("{") - stripped.count("}")
            if brace_depth == 0 and re.match(r"^  \},?\s*$", stripped):
                ends.append(i)
                in_object = False

    if len(starts) != len(ends):
        return text, False

    for start, end in zip(starts, ends):
        block = "\n".join(lines[start:end + 1])
        if f"slug: '{slug}'" in block:
            # 앞 주석 `  // ─── N. ... ───` 포함 여부
            remove_start = start
            # 빈 줄 건너뛰고 주석 체크
            j = start - 1
            while j >= 0 and lines[j].strip() == "":
                j -= 1
            if j >= 0 and re.match(r"^\s*//", lines[j]):
                remove_start = j
            # 뒤 빈 줄도 포함 제거 (있다면)
            remove_end = end
            if remove_end + 1 < len(lines) and lines[remove_end + 1].strip() == "":
                remove_end += 1
            new_lines = lines[:remove_start] + lines[remove_end + 1:]
            return "\n".join(new_lines), True
    return text, False


def count_objects(text: str) -> int:
    return len(re.findall(r"^  \{\s*$", text, re.MULTILINE))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    total_removals = 0
    empty_files: list[str] = []

    for slug, files in REMOVAL_PLAN.items():
        for fname in files:
            path = SPOKE_DIR / fname
            if not path.is_file():
                print(f"⚠️ 파일 없음: {path}")
                continue
            text = path.read_text(encoding="utf-8")
            before_count = count_objects(text)
            new_text, removed = remove_spoke_object(text, slug)
            if not removed:
                print(f"⚠️ {slug} 를 {fname} 에서 찾지 못함")
                continue
            after_count = count_objects(new_text)
            print(f"✂️ {fname}: {slug} 제거 ({before_count} → {after_count})")
            total_removals += 1
            if after_count == 0:
                empty_files.append(str(path))
            if not args.dry_run:
                path.write_text(new_text, encoding="utf-8")

    print()
    print(f"총 제거: {total_removals}건")
    if empty_files:
        print(f"⚠️ 빈 파일 된 배치 ({len(empty_files)}개, 수동 import 정리 필요):")
        for f in empty_files:
            print(f"  {f}")
    if args.dry_run:
        print("(dry-run — 실제 수정 안 됨)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
