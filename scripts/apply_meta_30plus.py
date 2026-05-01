#!/usr/bin/env python
"""Apply 6 meta updates for 30위+ pages organic search push."""
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

UPDATES = [
    ("divorce-property-division-scope-faq",
     "web/src/data/spoke/spokes-batch11-16to20.ts",
     "이혼 시 재산분할 어디까지 받을 수 있나요? 5가지 기준 | 로앤가이드",
     "이혼하면서 부동산·퇴직금·연금까지 어디까지 나눠야 할지 헷갈리시죠. 재산분할 대상 5가지 기준과 채무 분담까지 판례와 함께 정리해드립니다."),
    ("prostitution-arrest-response",
     "web/src/data/spoke/prostitution.ts",
     "성매매 혐의 받고 있다면 — 현장 대응 5가지 핵심 | 로앤가이드",
     "성매매 단속 현장에서 적발됐다면 진술·휴대폰 제출·귀가 후 행동 3가지가 형량을 좌우합니다. 혐의를 받고 있다면 대응 핵심을 정리해보세요."),
    ("stalking-emergency-measure-violation-response",
     "web/src/data/spoke/spokes-batch41-nonlabor2.ts",
     "잠정조치 받은 가해자가 또 연락해요. 신고하면 어떻게? | 로앤가이드",
     "접근금지 잠정조치를 받은 가해자가 다시 접촉해오면 신고·증거 수집·가중처벌 청구 4단계로 대응 가능합니다. 즉시 행동 절차를 정리해보세요."),
    ("drug-types-punishment-comparison",
     "web/src/data/spoke/spokes-batch10-11to15.ts",
     "마약 종류별 처벌 얼마나 다른가요? 대마·필로폰·코카인 비교 | 로앤가이드",
     "대마·필로폰·코카인 등 마약 종류와 행위 유형별 처벌이 어떻게 다른지 정리했습니다. 혐의를 받고 있다면 마약류관리법 분류별 법정형 차이를 확인해보세요."),
    ("jeonse-implicit-renewal-termination",
     "web/src/data/spoke/spokes-batch41-nonlabor1.ts",
     "묵시적 갱신된 전세, 언제든 해지 가능한가요? | 로앤가이드",
     "묵시적 갱신된 전세는 임차인이 언제든 해지할 수 있고, 통지 후 3개월 뒤 효력이 발생합니다. 해지 통지부터 보증금 반환까지 4단계를 정리해보세요."),
    ("stalking-victim-restraining-petition",
     "web/src/data/spoke/spokes-batch39-nonlabor2.ts",
     "스토킹 피해 — 접근금지 어떻게 신청하나요? 5단계 | 로앤가이드",
     "스토킹 피해를 입었다면 잠정조치·긴급응급조치로 가해자 접근금지를 받을 수 있습니다. 신청 5단계와 증거 확보법을 정리해보세요."),
]


def find_meta_block(text, slug):
    pattern = rf"slug:\s*['\"]{re.escape(slug)}['\"]"
    m = re.search(pattern, text)
    if not m:
        return None
    meta_start = text.find("meta:", m.end())
    if meta_start == -1:
        return None
    brace_open = text.find("{", meta_start)
    if brace_open == -1:
        return None
    depth = 0
    i = brace_open
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return brace_open, i + 1
        i += 1
    return None


def replace_meta(text, slug, new_title, new_desc):
    res = find_meta_block(text, slug)
    if not res:
        return None, "slug or meta block not found"
    bo, bc = res
    esc_t = new_title.replace("'", "\\'")
    esc_d = new_desc.replace("'", "\\'")
    new_meta = (
        "{\n"
        f"      title: '{esc_t}',\n"
        f"      description:\n"
        f"        '{esc_d}',\n"
        "    }"
    )
    return text[:bo] + new_meta + text[bc:], None


changed, errors = [], []
for slug, fpath, title, desc in UPDATES:
    p = Path(fpath)
    if not p.exists():
        errors.append((slug, fpath, "file not found"))
        continue
    text = p.read_text(encoding="utf-8")
    new_text, err = replace_meta(text, slug, title, desc)
    if err:
        errors.append((slug, fpath, err))
        continue
    if new_text == text:
        errors.append((slug, fpath, "no change"))
        continue
    p.write_text(new_text, encoding="utf-8")
    changed.append((slug, fpath))
    print(f"OK {slug} -> {fpath}")

print()
print(f"=== Done: {len(changed)} updated, {len(errors)} errors ===")
for s, f, e in errors:
    print(f"  ERROR {s} ({f}): {e}")
