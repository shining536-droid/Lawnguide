# -*- coding: utf-8 -*-
"""batch137 assemble — _b137/out/*.json → 4 TS files + spoke-pages.ts imports."""
import json, os, re, glob, collections

REPO = r"C:\Users\shini\easylaw-scraper"
BASE = os.path.join(REPO, "_b137")
SPOKE = os.path.join(REPO, "web", "src", "data", "spoke")
args = {a["idx"]: a for a in json.load(open(os.path.join(BASE, "args.json"), encoding="utf-8"))}

slug2kw = {}
for f in glob.glob(os.path.join(SPOKE, "*.ts")):
    src = open(f, encoding="utf-8").read()
    for m in re.finditer(r"slug:\s*'([^']+)',\s*\n\s*keyword:\s*'([^']+)'", src):
        slug2kw[m.group(1)] = m.group(2)

FILES = {
    "fraud-sexcrime": ("spokes-batch137-fraud-sexcrime.ts", "spokesBatch137FraudSexCrime"),
    "assault-dui-jeonsefraud": ("spokes-batch137-assault-dui-jeonsefraud.ts", "spokesBatch137AssaultDuiJeonseFraud"),
    "defame-divorce-inherit-traffic": ("spokes-batch137-defame-divorce-inherit-traffic.ts", "spokesBatch137DefameDivorceInheritTraffic"),
    "labor": ("spokes-batch137-labor.ts", "spokesBatch137Labor"),
}


def q(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n") + "'"


def label_for(href):
    if href.count("/") == 2:
        return f"{href.split('/')[-1]} 도메인 허브"
    slug = href.split("/")[-1]
    kw = slug2kw.get(slug, slug)
    return kw[:40]


groups = collections.defaultdict(list)
for i in range(40):
    d = json.load(open(os.path.join(BASE, "out", f"out_{i:02d}.json"), encoding="utf-8"))
    groups[args[i]["file"]].append((i, d))

for fkey, (fname, varname) in FILES.items():
    items = sorted(groups[fkey])
    doms = collections.Counter(args[i]["domain"] for i, _ in items)
    hdr = [f"import {{ SpokePage }} from '../spoke-pages';", ""]
    hdr.append("// batch136 " + "+".join(f"{k}({v})" for k, v in doms.items()) + f" — {len(items)}개 (2026-08-07)")
    hdr.append("// 고유 존재 이유:")
    for n, (i, d) in enumerate(items, 1):
        hdr.append(f"// {n}. {d['slug']} — {d['keyword']}")
    hdr.append("")
    hdr.append(f"export const {varname}: SpokePage[] = [")
    out = ["\n".join(hdr)]
    for n, (i, d) in enumerate(items, 1):
        a = args[i]
        L = []
        L.append(f"\n  // ─── {n}. {d['slug']} ───")
        L.append("  {")
        L.append(f"    domain: {q(a['domain'])},")
        L.append(f"    slug: {q(d['slug'])},")
        L.append(f"    keyword: {q(d['keyword'])},")
        L.append(f"    questionKeyword:\n      {q(d['questionKeyword'])},")
        L.append(f"    ctaKeyword: {q(d['ctaKeyword'])},")
        L.append(f"    type: {q(d['type'])},")
        L.append(f"    perspective: {q(d['perspective'])},")
        L.append("    meta: {")
        L.append(f"      title: {q(d['metaTitle'])},")
        L.append(f"      description:\n        {q(d['metaDescription'])},")
        L.append("    },")
        L.append(f"    intro:\n      {q(d['intro'])},")
        L.append("    sections: [")
        for s in d["sections"]:
            L.append("      {")
            L.append(f"        title: {q(s['title'])},")
            L.append(f"        content:\n          {q(s['content'])},")
            L.append("      },")
        L.append("    ],")
        L.append("    cases: [")
        L.append("      {")
        L.append(f"        title: {q(d['caseTitle'])},")
        L.append(f"        summary:\n          {q(d['caseSummary'])},")
        L.append(f"        takeaway:\n          {q(d['caseTakeaway'])},")
        L.append("      },")
        L.append("    ],")
        L.append("    faq: [")
        for f_ in d["faq"]:
            L.append("      {")
            L.append(f"        question: {q(f_['question'])},")
            L.append(f"        answer:\n          {q(f_['answer'])},")
            L.append("      },")
        L.append("    ],")
        L.append(f"    cta: {{ text: {q(a['ctaText'])}, link: {q(a['ctaLink'])} }},")
        L.append("    internalLinks: [")
        for h in a["linkHrefs"]:
            L.append(f"      {{ label: {q(label_for(h))}, href: {q(h)} }},")
        L.append("    ],")
        L.append("  },")
        out.append("\n".join(L))
    out.append("\n];\n")
    path = os.path.join(SPOKE, fname)
    open(path, "w", encoding="utf-8").write("\n".join(out))
    print("wrote", fname, len(items), "items")

sp = os.path.join(REPO, "web", "src", "data", "spoke-pages.ts")
src = open(sp, encoding="utf-8").read()
imports = "\n".join(f"import {{ {v} }} from './spoke/{f[:-3]}';" for f, v in FILES.values())
prev_anchor = "import { spokesBatch136Labor } from './spoke/spokes-batch136-labor';"
assert prev_anchor in src, "batch136 import anchor 없음"
if "spokesBatch137Labor" not in src:
    src = src.replace(prev_anchor, prev_anchor + "\n" + imports, 1)
    m = re.search(r"^(\s*)\.\.\.spokesBatch136Labor,\s*$", src, re.M)
    assert m, "batch136 spread anchor 없음"
    ind = m.group(1)
    spreads = "\n".join(f"{ind}...{v}," for _, v in FILES.values())
    src = src.replace(m.group(0), m.group(0) + "\n" + spreads, 1)
    open(sp, "w", encoding="utf-8").write(src)
    print("spoke-pages.ts updated")
else:
    print("spoke-pages.ts already has batch136")
