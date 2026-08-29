# -*- coding: utf-8 -*-
"""batch144 사후검증 — internalLink 실존 / 판례-주제 정합성(오도메인) / 재결 크로스배치 / 슬러그 총량."""
import json, os, re, glob, collections, io, sys

REPO = r"C:\Users\shini\easylaw-scraper"
SPOKE = os.path.join(REPO, "web", "src", "data", "spoke")
args = {a["idx"]: a for a in json.load(io.open(os.path.join(REPO, "_b144", "args.json"), encoding="utf-8"))}

# ── 전체 슬러그 (batch144 포함 최종 상태) ─────────────────────────────
all_slugs = collections.Counter()
by_dom = collections.defaultdict(set)
for f in glob.glob(os.path.join(SPOKE, "*.ts")):
    s = io.open(f, encoding="utf-8").read()
    for m in re.finditer(r"domain:\s*'([^']+)',\s*\n\s*slug:\s*'([^']+)'", s):
        by_dom[m.group(1)].add(m.group(2))
    all_slugs.update(re.findall(r"^\s*slug: '([^']+)'", s, re.M))

fails, warns = [], []

# ── 1. internalLink 실존 (하드 404 방지) ────────────────────────────
HUBS = set(by_dom.keys())
b144_files = glob.glob(os.path.join(SPOKE, "spokes-batch144-*.ts"))
assert b144_files, "batch144 TS 글롭 0 — gen_ts 선행 필요"
hrefs = []
for f in b144_files:
    hrefs += re.findall(r"href:\s*'(/guide/[^']+)'", io.open(f, encoding="utf-8").read())
broken = []
for h in set(hrefs):
    parts = h.strip("/").split("/")
    if len(parts) == 2:            # /guide/{domain} 허브
        if parts[1] not in HUBS:
            broken.append(h)
    elif len(parts) == 3:          # /guide/{domain}/{slug}
        if parts[2] not in all_slugs:
            broken.append(h)
    else:
        broken.append(h)
if broken:
    fails.append(f"internalLink 미존재 슬러그 {len(broken)}건: {broken[:8]}")

# ── 2. 판례-주제 정합성: 배정 사건번호가 해당 도메인 cases.json 실존 ────
DOMAIN_FILES = {"fraud": "fraud", "sex-crime": "sex-crime", "assault": "assault", "dui": "dui",
                "jeonse-fraud": "jeonse-fraud", "defamation": "defamation", "divorce": "divorce",
                "inheritance": "inheritance", "traffic-accident": "traffic-accident",
                "dismissal": "dismissal", "wage": "wage", "unemployment": "unemployment",
                "retirement": "retirement"}
MANUAL_XDOM = {}   # b143: traffic 형사 시퀀스 6/6 종료 → 수동 크로스도메인 없음. richness 자동픽 복귀.
cache = {}


def nums_of(dfile):
    if dfile not in cache:
        p = os.path.join(REPO, "kb", dfile, "cases.json")
        rows = json.load(io.open(p, encoding="utf-8")) if os.path.exists(p) else []
        if not rows and dfile == "jeonse-fraud":   # prep.load() 와 동일한 폴백
            rows = json.load(io.open(os.path.join(REPO, "kb", "jeonse", "cases.json"), encoding="utf-8"))
        cache[dfile] = set((r.get("사건번호") or "").strip() for r in rows)
    return cache[dfile]


xdom = []
for i, a in args.items():
    n, d = a["case"]["num"], a["domain"]
    if n in MANUAL_XDOM:
        continue
    if n not in nums_of(DOMAIN_FILES[d]):
        xdom.append(f"[{i:02d}/{d}] {n}")
if xdom:
    fails.append(f"오도메인 판례 {len(xdom)}건: {xdom}")

# ── 3. 재결 복합 ID 크로스배치 재사용 0 ─────────────────────────────
JAE = re.compile(r"20\d{2}재결\s*제?\s*\d+\s*호")
b144_jae = set()
for a in args.values():
    b144_jae |= set(JAE.findall(a["case"]["num"]))
prev_jae = set()
for f in glob.glob(os.path.join(SPOKE, "*.ts")):
    if "batch144" in os.path.basename(f):
        continue
    prev_jae |= set(JAE.findall(io.open(f, encoding="utf-8").read()))
reuse = b144_jae & prev_jae
if reuse:
    fails.append(f"재결 크로스배치 재사용: {sorted(reuse)}")

# ── 4. 슬러그 총량 / 전역 중복 ──────────────────────────────────────
dups = [s for s, c in all_slugs.items() if c > 1]
raw = sum(all_slugs.values())

print("=" * 60)
print(f"internalLink 검사: href {len(set(hrefs))}종 | 깨진 링크 {len(broken)}")
print(f"판례 오도메인: {len(xdom)} (수동 크로스도메인 0)")
print(f"재결 b144 사용 {sorted(b144_jae)} | 크로스배치 재사용 {sorted(reuse)}")
print(f"슬러그 RAW={raw} UNIQUE={len(all_slugs)} 전역중복={len(dups)} {dups[:5]}")
print(f"FAIL {len(fails)}")
for f_ in fails:
    print("  X", f_)
sys.exit(1 if fails else 0)
