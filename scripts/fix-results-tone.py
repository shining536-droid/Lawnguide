"""Apply tone fixes to 10 형사·민감 domain results.json.

- 9 specific findings from audit (반드시/사기입니다/etc.)
- Conservative: only touches actions/key_checkpoints/status_summary fields, not 법조문 lists
- Outputs diff preview

Usage:
  python scripts/fix-results-tone.py --dry-run    # preview only
  python scripts/fix-results-tone.py --apply      # write changes
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent.parent
SENSITIVE_DOMAINS = [
    "fraud", "assault", "sex-crime", "digital-sex-crime", "child-sex-crime",
    "prostitution", "drug-crime", "dui", "defamation", "school-violence",
]

# Fields to scan inside each result entry
TARGETED_FIELDS = ["status_summary", "type_name", "risk_level", "safety_warning"]
TARGETED_ACTION_KEYS = ["today", "this_week", "caution", "do_not", "important"]

# Substitution patterns (regex → replacement)
SUBS = [
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
    (r"반드시\s+", "가능한 한 "),
    (r"무조건\s+", "원칙적으로 "),
]

EXCLUDE_PATTERNS = [
    r"법조문\s",
    r"민법\s제\d+조",
    r"형법\s제\d+조",
    r"근로기준법\s제\d+조",
    r"가사소송법\s제\d+조",
    r"기준\s중위소득",
]


def transform_text(text: str) -> tuple[str, list[tuple[str, str]]]:
    """Return (transformed_text, list of (before, after) pairs applied)."""
    if not isinstance(text, str):
        return text, []
    changes: list[tuple[str, str]] = []
    out = text
    for pattern, replacement in SUBS:
        for m in list(re.finditer(pattern, out)):
            window = out[max(0, m.start() - 30) : m.end() + 30]
            skip = any(re.search(ex, window) for ex in EXCLUDE_PATTERNS)
            if skip:
                continue
            phrase = m.group(0)
            changes.append((phrase, replacement))
        out = re.sub(pattern, replacement, out)
    return out, changes


def transform_result_entry(entry: dict) -> tuple[dict, list[dict]]:
    """Transform a single result entry. Returns (new_entry, list of change records)."""
    new_entry = json.loads(json.dumps(entry))  # deep copy
    changes: list[dict] = []

    for field in TARGETED_FIELDS:
        v = new_entry.get(field, "")
        if isinstance(v, str):
            new_v, ch = transform_text(v)
            if ch:
                new_entry[field] = new_v
                changes.append({"field": field, "before": v, "after": new_v})

    actions = new_entry.get("actions", {}) or {}
    for ak in TARGETED_ACTION_KEYS:
        items = actions.get(ak, []) or []
        for i, item in enumerate(items):
            if isinstance(item, str):
                new_v, ch = transform_text(item)
                if ch:
                    actions[ak][i] = new_v
                    changes.append({"field": f"actions.{ak}[{i}]", "before": item, "after": new_v})

    for i, cp in enumerate(new_entry.get("key_checkpoints", []) or []):
        if isinstance(cp, dict):
            desc = cp.get("desc", "")
            new_v, ch = transform_text(desc)
            if ch:
                new_entry["key_checkpoints"][i]["desc"] = new_v
                changes.append({"field": f"key_checkpoints[{i}].desc", "before": desc, "after": new_v})

    return new_entry, changes


def process_domain(domain: str, apply: bool) -> dict:
    path = ROOT / "domains" / domain / "results.json"
    if not path.is_file():
        return {"status": "MISSING"}
    data = json.loads(path.read_text(encoding="utf-8"))
    results = data.get("results", [])
    all_changes: list[dict] = []
    for i, r in enumerate(results):
        if not isinstance(r, dict):
            continue
        new_r, ch = transform_result_entry(r)
        if ch:
            results[i] = new_r
            for c in ch:
                all_changes.append({"type_id": new_r.get("type_id", f"#{i}"), **c})
    if apply and all_changes:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return {"status": "OK", "changes": all_changes, "count": len(all_changes)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="actually write changes")
    args = ap.parse_args()

    apply = args.apply
    label = "APPLY" if apply else "DRY-RUN"
    print(f"=== results.json tone fix [{label}] ===\n")
    total = 0
    for domain in SENSITIVE_DOMAINS:
        info = process_domain(domain, apply)
        if info.get("status") != "OK":
            print(f"[{domain}] {info.get('status')}")
            continue
        cnt = info["count"]
        total += cnt
        print(f"[{domain}] {cnt} change(s)")
        for ch in info["changes"]:
            print(f"  type_id={ch['type_id']} field={ch['field']}")
            print(f"    before: {ch['before'][:120]}")
            print(f"    after:  {ch['after'][:120]}")

    print(f"\n=== {total} total change(s) {'APPLIED' if apply else '(dry-run, not written)'} ===")


if __name__ == "__main__":
    main()
