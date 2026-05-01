#!/usr/bin/env python
"""Comment out SpokePage entries that are being redirect-merged."""
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

# (slug, file, destination)
REDIRECTS = [
    ("child-support-direct-payment-order-procedure",
     "web/src/data/spoke/spokes-batch42-nonlabor3.ts",
     "child-support-direct-payment-order-process"),
    ("fraud-prosecution-procedure-overview",
     "web/src/data/spoke/spokes-batch12-part1.ts",
     "fraud-complaint-procedure-comprehensive"),
    ("fraud-charge-rebuttal",
     "web/src/data/spoke/fraud.ts",
     "fraud-accused-defense-strategy-guide"),
    ("retirement-statute-expired-revival",
     "web/src/data/spoke/spokes-batch31-retirement-wage.ts",
     "retirement-statute-of-limitations"),
    ("rehabilitation-vs-bankruptcy-choice",
     "web/src/data/spoke/spokes-batch24-29to35.ts",
     "rehabilitation-vs-bankruptcy"),
    ("traffic-accident-pedestrian-jaywalking-fault",
     "web/src/data/spoke/spokes-batch32-misc.ts",
     "traffic-accident-pedestrian-cross-jaywalk"),
]


def find_entry_bounds(text, slug):
    """Return (start, end) of the SpokePage object containing slug. start = '{' position, end = position right after matching '}'."""
    pattern = rf"slug:\s*['\"]{re.escape(slug)}['\"]"
    m = re.search(pattern, text)
    if not m:
        return None
    # Walk backward to find the opening `{` of this object
    pos = m.start()
    while pos > 0 and text[pos] != "{":
        pos -= 1
    if text[pos] != "{":
        return None
    open_pos = pos
    # Walk forward to find matching `}`
    depth = 0
    i = open_pos
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                # Include trailing comma if present
                end = i + 1
                while end < len(text) and text[end] in ",":
                    end += 1
                return open_pos, end
        i += 1
    return None


for slug, fpath, dest in REDIRECTS:
    p = Path(fpath)
    text = p.read_text(encoding="utf-8")
    bounds = find_entry_bounds(text, slug)
    if not bounds:
        print(f"ERROR: {slug} entry not found in {fpath}")
        continue
    start, end = bounds
    entry = text[start:end]
    # Wrap in block comment with note
    note = f"  // ─── {slug} — REMOVED 2026-05-01 (canonical = {dest}, redirect added in next.config.js) ───\n  /*\n"
    new_entry = note + entry + "\n  */"
    new_text = text[:start] + new_entry + text[end:]
    p.write_text(new_text, encoding="utf-8")
    print(f"OK {slug} ({end-start} chars commented out) -> {fpath}")
