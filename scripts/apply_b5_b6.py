#!/usr/bin/env python
"""B-5 entry 주석처리 + B-6 D title 수정 + D/F internalLink 추가."""
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")


# ─── 1. B-5: wage-night-overtime-exact-calculation entry 주석 처리 ───
def find_entry_bounds(text, slug):
    pattern = rf"slug:\s*['\"]{re.escape(slug)}['\"]"
    m = re.search(pattern, text)
    if not m:
        return None
    pos = m.start()
    while pos > 0 and text[pos] != "{":
        pos -= 1
    open_pos = pos
    depth = 0
    i = open_pos
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                while end < len(text) and text[end] in ",":
                    end += 1
                return open_pos, end
        i += 1
    return None


b5_file = Path("web/src/data/spoke/spokes-batch32-misc.ts")
text = b5_file.read_text(encoding="utf-8")
bounds = find_entry_bounds(text, "wage-night-overtime-exact-calculation")
if bounds:
    start, end = bounds
    entry = text[start:end]
    note = "  // ─── wage-night-overtime-exact-calculation — REMOVED 2026-05-01 (canonical = overtime-pay-calculation-claim, redirect added in next.config.js) ───\n  /*\n"
    new_text = text[:start] + note + entry + "\n  */" + text[end:]
    b5_file.write_text(new_text, encoding="utf-8")
    print(f"B-5: wage-night-overtime-exact-calculation commented out ({end-start} chars)")
else:
    print("B-5: ERROR — entry not found")


# ─── 2. B-6 D: title 수정 + internalLink F 추가 ───
d_file = Path("web/src/data/spoke/spokes-batch31-retirement-wage.ts")
d_text = d_file.read_text(encoding="utf-8")

# 2a. title 수정
old_d_title = "title: '포괄임금 최저임금 미달 판단법과 차액 청구 3단계 | 로앤가이드'"
new_d_title = "title: '내 포괄임금이 최저임금 미달인가요? 판단·청구 정리 | 로앤가이드'"
if old_d_title in d_text:
    d_text = d_text.replace(old_d_title, new_d_title, 1)
    print("B-6 D: title updated")
else:
    print("B-6 D: WARNING — old title pattern not found, looking for variants")
    # try regex match
    pat = r"title:\s*['\"]포괄임금 최저임금 미달[^'\"]+['\"]"
    m = re.search(pat, d_text)
    if m:
        d_text = d_text[:m.start()] + new_d_title + d_text[m.end():]
        print("B-6 D: title updated via regex")
    else:
        print("B-6 D: ERROR — title not found")

# 2b. D의 internalLinks 배열에 F 항목 추가
# slug 'unpaid-wage-minimum-wage-comprehensive' entry의 internalLinks 찾기
d_bounds = find_entry_bounds(d_text, "unpaid-wage-minimum-wage-comprehensive")
if d_bounds:
    start, end = d_bounds
    entry = d_text[start:end]
    # internalLinks: [ ... ] 찾기
    il_match = re.search(r"internalLinks:\s*\[", entry)
    if il_match:
        # 마지막 } 위치 찾기 (entry 안에서)
        bracket_open = entry.find("[", il_match.start())
        # 매칭 ]
        depth = 0
        j = bracket_open
        while j < len(entry):
            if entry[j] == "[":
                depth += 1
            elif entry[j] == "]":
                depth -= 1
                if depth == 0:
                    bracket_close = j
                    break
            j += 1
        # bracket_close 직전에 새 항목 삽입
        new_link = "      { label: '포괄임금 최저임금 자가진단 4단계', href: '/guide/wage/wage-pogual-minimum-wage-test' },\n    "
        # entry 안에서 bracket_close 위치
        new_entry = entry[:bracket_close] + new_link + entry[bracket_close:]
        d_text = d_text[:start] + new_entry + d_text[end:]
        print("B-6 D: internalLink → F added")
    else:
        print("B-6 D: WARNING — internalLinks not found")

d_file.write_text(d_text, encoding="utf-8")


# ─── 3. B-6 F: internalLinks 에 D 항목 추가 (title은 그대로) ───
f_file = Path("web/src/data/spoke/spokes-batch27-pogual-1to5.ts")
f_text = f_file.read_text(encoding="utf-8")
f_bounds = find_entry_bounds(f_text, "wage-pogual-minimum-wage-test")
if f_bounds:
    start, end = f_bounds
    entry = f_text[start:end]
    il_match = re.search(r"internalLinks:\s*\[", entry)
    if il_match:
        bracket_open = entry.find("[", il_match.start())
        depth = 0
        j = bracket_open
        while j < len(entry):
            if entry[j] == "[":
                depth += 1
            elif entry[j] == "]":
                depth -= 1
                if depth == 0:
                    bracket_close = j
                    break
            j += 1
        new_link = "      { label: '포괄임금 최저임금 미달 판단·청구 종합', href: '/guide/wage/unpaid-wage-minimum-wage-comprehensive' },\n    "
        new_entry = entry[:bracket_close] + new_link + entry[bracket_close:]
        f_text = f_text[:start] + new_entry + f_text[end:]
        print("B-6 F: internalLink → D added")
    else:
        print("B-6 F: WARNING — internalLinks not found")
f_file.write_text(f_text, encoding="utf-8")

print()
print("Done.")
