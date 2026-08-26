# -*- coding: utf-8 -*-
"""batch143 verify — 8 방어선 + 중복/정합성. BASE=_b143/."""
import json, os, re, sys, collections, itertools

REPO = r"C:\Users\shini\easylaw-scraper"
BASE = os.path.join(REPO, "_b143")
args = {a["idx"]: a for a in json.load(open(os.path.join(BASE, "args.json"), encoding="utf-8"))}
existing = set(x for x in open(os.path.join(BASE, "avoid_slugs.txt"), encoding="utf-8").read().split("\n") if x)
redirects = set(x for x in open(os.path.join(BASE, "redirect_slugs.txt"), encoding="utf-8").read().split("\n") if x)
prev_kw = [x for x in open(os.path.join(BASE, "prev_keywords.txt"), encoding="utf-8").read().split("\n") if x]

BAN = ["범인", "범죄자", "유죄입니다", "처벌받습니다", "처벌된다", "100%", "무조건 돌려받"]
BAN_RE_SOFT = re.compile(r"반드시\s*[^.]{0,20}됩니다")
CASE_ANY = re.compile(r"\b\d{2,4}(?:다|도|두|스|므|모|르|나|가합|가단|가소|드단|드합|느합|노|고합|고단|고정|구합)\d+\b|20\d{2}재결\s*제?\s*\d+\s*호")
STOP = set("이 그 저 및 등 를 을 은 는 의 에 로 와 과 도 만".split())


def strip(h):
    return re.sub(r"<[^>]+>", "", h).strip()


def body_of(d):
    return d["intro"] + " ".join(s["content"] + s["title"] for s in d["sections"]) + \
           " ".join(f["question"] + f["answer"] for f in d["faq"])


fails, warns = [], []
outs = {}
for i in range(40):
    p = os.path.join(BASE, "out", f"out_{i:02d}.json")
    if not os.path.exists(p):
        fails.append(f"[{i:02d}] MISSING out file"); continue
    try:
        outs[i] = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        fails.append(f"[{i:02d}] JSON parse: {e}")

for i, d in outs.items():
    a = args[i]
    tag = f"[{i:02d}/{a['domain']}]"
    s = d["slug"]
    if s in existing: fails.append(f"{tag} slug 기존중복: {s}")
    if s in redirects: fails.append(f"{tag} slug redirect충돌: {s}")
    if not s.startswith(a["domain"]): warns.append(f"{tag} slug prefix: {s}")
    nums = set(m[0] if isinstance(m, tuple) else m for m in CASE_ANY.findall(d["caseSummary"]))
    if a["case"]["num"] not in d["caseSummary"]:
        fails.append(f"{tag} spec 사건번호 caseSummary 누락: {a['case']['num']}")
    # stray in caseSummary: any full match != assigned
    allnums = set(re.findall(CASE_ANY, d["caseSummary"]))
    full = set(re.findall(r"\b\d{2,4}(?:다|도|두|스|므|모|르|나|가합|가단|가소|드단|드합|느합|노|고합|고단|고정|구합)\d+\b", d["caseSummary"])) | set(re.findall(r"20\d{2}재결\s*제?\s*\d+\s*호", d["caseSummary"]))
    # 배정 num 이 복합 재결ID('2019재결 제29호, 제30호')면 개별 재결번호도 assigned 로 인정
    jae_assigned = set(re.findall(r"20\d{2}재결\s*제?\s*\d+\s*호", a["case"]["num"]))
    stray = full - ({a["case"]["num"]} | jae_assigned)
    if stray: fails.append(f"{tag} caseSummary 창작 사건번호: {stray}")
    bodynums = set(re.findall(r"\b\d{2,4}(?:다|도|두|스|므|모|르|나|가합|가단|가소|드단|드합|느합|노|고합|고단|고정|구합)\d+\b", body_of(d))) | set(re.findall(r"20\d{2}재결\s*제?\s*\d+\s*호", body_of(d)))
    if bodynums: fails.append(f"{tag} 본문 사건번호 혼입: {bodynums}")
    blob = body_of(d) + d["caseSummary"] + d["caseTakeaway"] + d["metaTitle"] + d["metaDescription"]
    for w in BAN:
        if w in blob and not (w == "범죄자" and "범죄자의" in blob):
            fails.append(f"{tag} 금지어 '{w}'")
    if BAN_RE_SOFT.search(blob): fails.append(f"{tag} 금지어 '반드시~됩니다'")
    if "⚠️⚠️" in blob or "⚠⚠️" in blob or "⚠️⚠" in blob:
        fails.append(f"{tag} ⚠️ 중복")
    if d["perspective"] != a["perspective"]:
        fails.append(f"{tag} perspective 불일치 {d['perspective']}!={a['perspective']}")
    if a["perspective"] == "accused" and ("혐의를 받고 있다면" not in d["intro"] and "사실과 다르게 신고" not in d["intro"]):
        fails.append(f"{tag} accused 안전구문 누락")
    if a["tier"] == "lower":
        if not any(x in d["caseSummary"] for x in ("사례가 있습니다", "본 예가 있", "판단한 예가 있", "달라질 수 있")):
            fails.append(f"{tag} tier=lower 약톤 누락")
        if "대법원" in d["caseSummary"][:40]:
            fails.append(f"{tag} tier=lower 인데 대법원 단정")
    mt, md = d["metaTitle"], d["metaDescription"]
    if not (30 <= len(mt) <= 45): fails.append(f"{tag} metaTitle {len(mt)}자")
    if not mt.endswith("로앤가이드"): fails.append(f"{tag} metaTitle 접미 누락")
    if not re.search(r"\d", mt): fails.append(f"{tag} metaTitle 숫자 없음")
    if not (80 <= len(md) <= 120): fails.append(f"{tag} metaDescription {len(md)}자")
    if not md.endswith("지금 확인하세요."): fails.append(f"{tag} metaDescription 종결 누락")
    if len(d["sections"]) != 4: fails.append(f"{tag} sections {len(d['sections'])}")
    if not (5 <= len(d["faq"]) <= 6): fails.append(f"{tag} faq {len(d['faq'])}")
    n = len(strip(d["intro"]))
    if n < 1000: fails.append(f"{tag} intro {n}자")
    elif n < 1200: warns.append(f"{tag} intro {n}자 (밴드 하단)")
    # 구형식 확장(b136~) 대응 재설계: 2~4자리 연도부는 이제 정상 사건번호라 위 bodynums 가 FAIL 로 잡는다.
    # 여기서는 연도부가 비정상(1자리 또는 5자리 이상)인 '사건번호 유사' 오타만 경고한다. 정상 구형식 오탐 0.
    if re.search(r"(?<!\d)(?:\d|\d{5,})(?:도|다|두)\d+", body_of(d)):
        warns.append(f"{tag} 본문 사건번호 유사패턴(연도부 비정상)")

slugs = [d["slug"] for d in outs.values()]
dup = [s for s, c in collections.Counter(slugs).items() if c > 1]
if dup: fails.append(f"batch 내부 슬러그 중복: {dup}")
cn = [args[i]["case"]["num"] for i in outs]
dupc = [s for s, c in collections.Counter(cn).items() if c > 1]
if dupc: fails.append(f"batch 내부 사건번호 중복: {dupc}")


def toks(k): return set(t for t in re.split(r"[\s·]+", k) if len(t) > 1 and t not in STOP)


for i, d in outs.items():
    for k in prev_kw:
        ov = toks(d["keyword"]) & toks(k)
        if len(ov) >= 4:
            warns.append(f"[{i:02d}] b142 키워드 교차 {sorted(ov)} vs '{k[:30]}'")
for (i, a1), (j, a2) in itertools.combinations(outs.items(), 2):
    ov = toks(a1["keyword"]) & toks(a2["keyword"])
    if len(ov) >= 4:
        fails.append(f"batch 내부 근접중복 [{i:02d}]x[{j:02d}] {sorted(ov)}")
    elif len(ov) == 3 and args[i]["domain"] == args[j]["domain"]:
        warns.append(f"batch 내부 주제근접 [{i:02d}]x[{j:02d}] {sorted(ov)}")

print("=" * 60)
print(f"outs: {len(outs)}/40")
print(f"FAIL {len(fails)}")
for f in fails: print("  X", f)
print(f"WARN {len(warns)}")
for w in warns: print("  !", w)
sys.exit(1 if fails else 0)
