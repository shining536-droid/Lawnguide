"""Stage C 스포크 정리 — 60~85% 유사 쌍 전부 처리.

(1) 13 리디렉션 — 검색의도 동일 쌍, 긴 쪽 canon 선정
(2) 34 동일-slug 중복 제거 — 같은 slug 2~3 파일 수록
(3) 3 근접중복 병합 — 다른 slug 이지만 사실상 같은 주제

모든 리디렉션은 /web/next.config.js 의 redirects() 에 추가.
"""

from __future__ import annotations

import argparse
import glob
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

# (1) 13 리디렉션 쌍 — (domain, delete_slug, canon_slug)
REDIRECT_PAIRS: list[tuple[str, str, str]] = [
    ("traffic-accident", "post-settlement-aftereffect-additional-claim", "traffic-accident-post-settlement-additional-claim"),
    ("assault", "injury-vs-assault-penalty", "assault-vs-injury-penalties"),
    ("unemployment", "unemployment-part-time-income-limit", "unemployment-side-income-during-benefit"),
    ("prostitution", "sting-operation-response", "prostitution-entrapment-response"),
    ("sangga", "sangga-premium-recovery-blocked", "commercial-lease-premium-landlord-liability"),
    ("real-estate-auction", "pre-bidding-checklist", "auction-rights-analysis-checklist"),
    ("assault", "assault-immediate-evidence-steps", "assault-evidence-collection-procedure"),
    ("sex-crime", "common-mistakes-when-accused", "sex-crime-common-mistakes"),
    ("child-sex-crime", "victim-report-required-documents", "child-victim-report-required-documents"),
    ("jeonse", "deposit-lawsuit-preparation", "deposit-lawsuit-docs"),
    ("jeonse", "jeonse-partial-deposit-return-remaining-claim", "jeonse-deposit-return-comprehensive-guide"),
    ("traffic-accident", "accident-settlement-fair-amount", "settlement-amount-calculation"),
    ("unemployment", "unemployment-harassment-quit", "unemployment-sexual-harassment-quit-benefit"),
]

# (3) 3 병합 쌍 — (domain, delete_slug, canon_slug)
MERGE_PAIRS: list[tuple[str, str, str]] = [
    ("real-estate-sale", "defect-damage-claim", "sale-defect-discovery-damage-claim"),
    ("inheritance", "limited-acceptance-vs-renunciation", "inheritance-limited-vs-renounce"),
    ("child-sex-crime", "mandatory-reporting-and-procedure", "mandatory-reporting-procedure"),
]

# (2) 동일-slug 중복 — 여러 파일 중 캐논 유지, 나머지 삭제
# 캐논 선정 규칙: 도메인 파일(.ts) > 가장 오래된 배치
DUP_CLEANUPS: list[tuple[str, str, list[str]]] = [
    # (domain, slug, files_to_delete_from)
    # domain 파일에 있으면 도메인 파일 유지 우선
    ("real-estate-auction", "auction-bidding-procedure", ["spokes-batch19-22to28.ts", "spokes-batch23-1to7.ts"]),
    ("dismissal", "unfair-dismissal-relief-procedure", ["spokes-batch21-1to7.ts", "spokes-batch23-15to21.ts"]),
    ("neighbor-dispute", "floor-noise-report-to-mediation-procedure", ["spokes-batch19-22to28.ts", "spokes-batch23-8to14.ts"]),
    ("real-estate-auction", "eviction-after-winning-bid", ["spokes-batch19-22to28.ts", "spokes-batch23-1to7.ts"]),
    ("neighbor-dispute", "unbearable-upstairs-noise-response", ["spokes-batch19-22to28.ts", "spokes-batch23-8to14.ts"]),
    ("child-support", "child-support-enforcement-method", ["spokes-batch19-22to28.ts"]),
    ("digital-sex-crime", "hidden-camera-report-and-deletion-procedure", ["spokes-batch21-29to35.ts"]),
    ("real-estate-sale", "buyer-vs-seller-penalty-comparison", ["spokes-batch19-8to14.ts"]),
    ("rehabilitation", "rehabilitation-vs-workout-comparison", ["spokes-batch21-22to28.ts"]),
    ("jeonse-fraud", "jeonse-fraud-report-procedure", ["spokes-batch19-29to35.ts"]),
    ("rehabilitation", "rehabilitation-eligibility-requirements-faq", ["spokes-batch21-22to28.ts"]),
    ("sangga", "commercial-lease-law-applicable-comparison", ["spokes-batch21-15to21.ts"]),
    ("wage", "unpaid-wage-evidence-checklist", ["spokes-batch21-1to7.ts"]),
    ("child-sex-crime", "online-grooming-warning-signs", ["spokes-batch19-1to7.ts"]),
    ("drug-crime", "use-vs-possession-vs-dealing-penalty", ["spokes-batch19-29to35.ts"]),
    ("assault", "injured-where-to-start", ["spokes-batch23-15to21.ts"]),
    ("neighbor-dispute", "floor-noise-victim-where-to-start", ["spokes-batch23-8to14.ts"]),
    ("prostitution", "prostitution-arrest-criminal-process", ["spokes-batch19-1to7.ts"]),
    ("sexual-harassment", "workplace-harassment-report-procedure", ["spokes-batch23-22to28.ts"]),
    ("jeonse-fraud", "empty-jeonse-verification-method", ["spokes-batch19-29to35.ts"]),
    ("rehabilitation", "business-owner-rehabilitation-eligibility", ["spokes-batch21-22to28.ts"]),
    ("sangga", "key-money-recovery-timeline", ["spokes-batch21-15to21.ts"]),
    ("traffic-accident", "accident-settlement-process", ["spokes-batch21-22to28.ts"]),
    ("child-sex-crime", "peer-sexual-violence-parent-response", ["spokes-batch19-1to7.ts"]),
    ("child-sex-crime", "child-crime-accusation-investigation-response", ["spokes-batch19-1to7.ts"]),
    ("sex-crime", "sexual-violence-complaint-process", ["spokes-batch21-29to35.ts"]),
    ("stalking", "stalking-report-and-restraining-order", ["spokes-batch21-29to35.ts"]),
    ("dismissal", "dismissal-reason-request-template", ["spokes-batch21-8to14.ts"]),
    ("retirement", "retirement-pay-claim-where-to-start", ["spokes-batch21-8to14.ts"]),
    ("retirement", "retirement-pay-complaint-writing", ["spokes-batch21-8to14.ts"]),
    ("sex-crime", "sexual-assault-investigation-to-trial", ["spokes-batch21-29to35.ts"]),
    ("wage", "unpaid-wage-where-to-start", ["spokes-batch21-1to7.ts"]),
    # defect-damage-claim dup + merge target → 둘 다 delete (merge가 처리)
    # mandatory-reporting-and-procedure dup + merge target → merge가 처리
]


def remove_spoke_object(text: str, slug: str) -> tuple[str, bool]:
    lines = text.split("\n")
    starts: list[int] = []
    ends: list[int] = []
    in_obj = False
    depth = 0
    for i, line in enumerate(lines):
        if not in_obj:
            if re.match(r"^  \{\s*$", line):
                starts.append(i)
                in_obj = True
                depth = 1
        else:
            depth += line.count("{") - line.count("}")
            if depth == 0 and re.match(r"^  \},?\s*$", line):
                ends.append(i)
                in_obj = False

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


def append_redirects(pairs: list[tuple[str, str, str]]) -> bool:
    """Append 301 redirects to existing redirects() in next.config.js."""
    text = NEXT_CONFIG.read_text(encoding="utf-8")
    if "async redirects()" not in text:
        print("⚠️ redirects() 없음 — 수동 삽입 필요")
        return False

    # 기존 redirects 안에 삽입: `    ];` 직전에 entries 추가
    entries = []
    for domain, old_slug, new_slug in pairs:
        entries.append(
            f"""      {{
        source: '/guide/{domain}/{old_slug}',
        destination: '/guide/{domain}/{new_slug}',
        permanent: true,
      }}"""
        )

    # 정규식으로 return [ ... ]; 블록 찾기
    match = re.search(r"(async redirects\(\)\s*\{\s*return\s*\[)(.*?)(\s*\];\s*\})", text, re.DOTALL)
    if not match:
        print("⚠️ redirects() 구조 파싱 실패")
        return False

    head, body, tail = match.group(1), match.group(2), match.group(3)
    # body 끝에 쉼표 보장
    body = body.rstrip()
    if not body.endswith(","):
        body = body + ","
    new_entries = ",\n".join(entries) + ","
    new_body = body + "\n" + new_entries

    new_text = text[:match.start()] + head + new_body + tail + text[match.end():]
    NEXT_CONFIG.write_text(new_text, encoding="utf-8")
    return True


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    total_removals = 0
    redirects_to_add: list[tuple[str, str, str]] = []

    # (1) 리디렉션 쌍 삭제
    print("\n=== (1) 13 리디렉션 쌍 삭제 ===")
    for domain, delete_slug, canon_slug in REDIRECT_PAIRS:
        any_removed = False
        for f in glob.glob(str(SPOKE_DIR / "*.ts")):
            path = Path(f)
            t = path.read_text(encoding="utf-8")
            if f"slug: '{delete_slug}'" not in t:
                continue
            new_t, removed = remove_spoke_object(t, delete_slug)
            if removed:
                print(f"✂️ {path.name}: {delete_slug}")
                total_removals += 1
                any_removed = True
                if not args.dry_run:
                    path.write_text(new_t, encoding="utf-8")
        if any_removed:
            redirects_to_add.append((domain, delete_slug, canon_slug))

    # (2) 동일-slug 중복 제거 (리디렉션 불필요)
    print(f"\n=== (2) {len(DUP_CLEANUPS)} 동일-slug 중복 제거 ===")
    for domain, slug, files in DUP_CLEANUPS:
        for fname in files:
            path = SPOKE_DIR / fname
            if not path.is_file():
                print(f"⚠️ 없음: {path}")
                continue
            t = path.read_text(encoding="utf-8")
            new_t, removed = remove_spoke_object(t, slug)
            if removed:
                print(f"✂️ {fname}: {slug}")
                total_removals += 1
                if not args.dry_run:
                    path.write_text(new_t, encoding="utf-8")

    # (3) 병합 쌍 (삭제 + 리디렉션)
    print(f"\n=== (3) {len(MERGE_PAIRS)} 근접중복 병합 ===")
    for domain, delete_slug, canon_slug in MERGE_PAIRS:
        any_removed = False
        for f in glob.glob(str(SPOKE_DIR / "*.ts")):
            path = Path(f)
            t = path.read_text(encoding="utf-8")
            if f"slug: '{delete_slug}'" not in t:
                continue
            new_t, removed = remove_spoke_object(t, delete_slug)
            if removed:
                print(f"✂️ {path.name}: {delete_slug}")
                total_removals += 1
                any_removed = True
                if not args.dry_run:
                    path.write_text(new_t, encoding="utf-8")
        if any_removed:
            redirects_to_add.append((domain, delete_slug, canon_slug))

    print(f"\n총 제거: {total_removals}건")
    print(f"리디렉션 추가: {len(redirects_to_add)}개")

    if args.dry_run:
        print("\n(dry-run — 실제 수정 안 됨)")
        return 0

    if redirects_to_add:
        ok = append_redirects(redirects_to_add)
        if ok:
            print(f"\n✅ next.config.js 에 {len(redirects_to_add)}개 redirect 추가")
        else:
            print("\n❌ redirect 추가 실패 — 수동 추가 필요")
    return 0


if __name__ == "__main__":
    sys.exit(main())
