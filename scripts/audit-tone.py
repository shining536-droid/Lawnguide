"""Audit 단정형 표현 in results.json + spoke TS files.

Outputs:
1) results.json 단정형 인스턴스 목록 (10개 형사·민감 도메인)
2) spoke TS 본문 단정형 패턴 빈도 통계 + 치환 미리보기

Usage:
  python scripts/audit-tone.py                # full audit
  python scripts/audit-tone.py --results-only # results.json only
  python scripts/audit-tone.py --spokes-only  # spoke TS only
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from collections import Counter, defaultdict

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent.parent

# B순위: 형사·민감 도메인 10개
SENSITIVE_DOMAINS = [
    "fraud",
    "assault",
    "sex-crime",
    "digital-sex-crime",
    "child-sex-crime",
    "prostitution",
    "drug-crime",
    "dui",
    "defamation",
    "school-violence",
]

# 단정형 패턴 → 권장 치환
# (핵심: legal-judgment statements 만 대상. 절차 안내·기한·연락처는 제외)
ASSERTIVE_PATTERNS = [
    # 명백한 판단형 (1순위)
    (r"범죄에\s*해당합니다", "범죄로 검토될 수 있습니다"),
    (r"형사범죄입니다", "형사처벌 대상으로 검토될 수 있습니다"),
    (r"위법합니다", "위법 소지가 있는 상황입니다"),
    (r"처벌됩니다", "처벌 대상으로 검토될 수 있습니다"),
    (r"처벌받습니다", "처벌 대상으로 검토될 수 있습니다"),
    (r"성립합니다", "성립 여지가 있습니다"),
    (r"성립됩니다", "성립 여지가 있습니다"),
    (r"인정됩니다", "인정될 수 있습니다"),
    (r"부당해고입니다", "부당해고로 검토될 수 있습니다"),
    (r"사기입니다", "사기로 검토될 수 있습니다"),
    (r"100%\s*환급", "환급 검토"),
    (r"반드시\s*", "가능한 한 "),
    (r"무조건\s*", "원칙적으로 "),
    # 약한 판단형 (2순위, context 필요)
    (r"에\s*해당합니다", "에 해당할 소지가 있습니다"),
]

# 절대 치환하지 말아야 할 안전 텍스트 (제외 패턴)
EXCLUDE_PATTERNS = [
    r"법조문\s",
    r"민법\s제\d+조",
    r"형법\s제\d+조",
    r"근로기준법\s제\d+조",
    r"가사소송법\s제\d+조",
    r"기준\s중위소득",
]

# 결과 화면·블로그 첫 문장에서 절대 금지
FIRST_SENTENCE_FORBIDDEN = [
    "범죄에 해당합니다",
    "위법입니다",
    "처벌됩니다",
    "사기죄에 해당할 소지가 있습니다",  # 사용자가 명시적으로 금지
    "당연히 ",
    "100%",
]


def scan_text_for_assertive(text: str) -> list[tuple[str, str]]:
    """Return list of (matched_phrase, suggested_replacement) found in text."""
    if not isinstance(text, str):
        return []
    out: list[tuple[str, str]] = []
    for pattern, replacement in ASSERTIVE_PATTERNS:
        for m in re.finditer(pattern, text):
            phrase = m.group(0)
            # exclude
            window = text[max(0, m.start() - 20) : m.end() + 20]
            skip = False
            for ex in EXCLUDE_PATTERNS:
                if re.search(ex, window):
                    skip = True
                    break
            if skip:
                continue
            out.append((phrase, replacement))
    return out


def audit_results_json() -> dict:
    """Audit all 10 sensitive domain results.json files."""
    report: dict = {}
    for domain in SENSITIVE_DOMAINS:
        path = ROOT / "domains" / domain / "results.json"
        if not path.is_file():
            report[domain] = {"status": "MISSING", "path": str(path.relative_to(ROOT))}
            continue

        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except Exception as e:
            report[domain] = {"status": "PARSE_ERROR", "error": str(e)}
            continue

        results = data.get("results", [])
        review_status = data.get("_REVIEW_STATUS", "UNKNOWN")
        findings = []

        for i, r in enumerate(results):
            if not isinstance(r, dict):
                continue
            type_id = r.get("type_id", f"#{i}")
            for field in [
                "status_summary",
                "type_name",
                "risk_level",
                "safety_warning",
            ]:
                v = r.get(field, "")
                hits = scan_text_for_assertive(v)
                if hits:
                    findings.append({
                        "type_id": type_id,
                        "field": field,
                        "value": v,
                        "issues": [{"phrase": p, "suggest": s} for p, s in hits],
                    })

            # actions arrays
            actions = r.get("actions", {}) or {}
            for ak in ["today", "this_week", "caution", "do_not", "important"]:
                items = actions.get(ak, []) or []
                for j, item in enumerate(items):
                    hits = scan_text_for_assertive(item)
                    if hits:
                        findings.append({
                            "type_id": type_id,
                            "field": f"actions.{ak}[{j}]",
                            "value": item,
                            "issues": [{"phrase": p, "suggest": s} for p, s in hits],
                        })

            # key_checkpoints
            for j, cp in enumerate(r.get("key_checkpoints", []) or []):
                if isinstance(cp, dict):
                    desc = cp.get("desc", "")
                    hits = scan_text_for_assertive(desc)
                    if hits:
                        findings.append({
                            "type_id": type_id,
                            "field": f"key_checkpoints[{j}].desc",
                            "value": desc,
                            "issues": [{"phrase": p, "suggest": s} for p, s in hits],
                        })

        report[domain] = {
            "status": "OK",
            "review_status": review_status,
            "results_count": len(results),
            "findings_count": len(findings),
            "findings": findings,
        }
    return report


def audit_spoke_ts() -> dict:
    """Audit web/src/data/spoke/*.ts for 단정형 patterns."""
    spoke_dir = ROOT / "web" / "src" / "data" / "spoke"
    pattern_counts: Counter = Counter()
    sample_per_pattern: dict[str, list[dict]] = defaultdict(list)
    total_files = 0
    files_with_issues = 0

    for path in sorted(spoke_dir.glob("*.ts")):
        total_files += 1
        try:
            text = path.read_text(encoding="utf-8")
        except Exception:
            continue

        had_issue = False
        for pattern, replacement in ASSERTIVE_PATTERNS:
            for m in re.finditer(pattern, text):
                # skip if matched text is inside excluded context
                start = max(0, m.start() - 30)
                end = min(len(text), m.end() + 30)
                window = text[start:end]
                skip = False
                for ex in EXCLUDE_PATTERNS:
                    if re.search(ex, window):
                        skip = True
                        break
                if skip:
                    continue
                pattern_counts[pattern] += 1
                had_issue = True
                if len(sample_per_pattern[pattern]) < 3:
                    sample_per_pattern[pattern].append({
                        "file": str(path.relative_to(ROOT)),
                        "context": window.replace("\n", " "),
                    })

        if had_issue:
            files_with_issues += 1

    return {
        "total_spoke_files": total_files,
        "files_with_issues": files_with_issues,
        "pattern_counts": dict(pattern_counts.most_common()),
        "samples_per_pattern": {k: v for k, v in sample_per_pattern.items()},
        "replacement_map": {p: r for p, r in ASSERTIVE_PATTERNS},
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--results-only", action="store_true")
    ap.add_argument("--spokes-only", action="store_true")
    ap.add_argument("--out", default="kb/_meta/tone_audit.json")
    args = ap.parse_args()

    out: dict = {"generated_at": __import__("datetime").datetime.now().isoformat()}
    if not args.spokes_only:
        out["results_audit"] = audit_results_json()
    if not args.results_only:
        out["spoke_audit"] = audit_spoke_ts()

    out_path = ROOT / args.out
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")

    # Console summary
    print(f"✅ Wrote {out_path.relative_to(ROOT)}")
    if "results_audit" in out:
        print("\n[results.json audit — 형사·민감 10개 도메인]")
        for domain, info in out["results_audit"].items():
            if info.get("status") != "OK":
                print(f"  {domain}: {info.get('status')}")
                continue
            cnt = info["findings_count"]
            rs = info.get("review_status", "?")
            print(f"  {domain}: findings={cnt} review={rs}")
    if "spoke_audit" in out:
        sa = out["spoke_audit"]
        print(f"\n[spoke TS audit] {sa['files_with_issues']}/{sa['total_spoke_files']} files have 단정형 patterns")
        print("  Pattern frequency:")
        for p, c in list(sa["pattern_counts"].items())[:10]:
            print(f"    {c:5d}  {p}")


if __name__ == "__main__":
    main()
