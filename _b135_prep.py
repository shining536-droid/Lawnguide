# -*- coding: utf-8 -*-
"""batch127 prep — avoid sets + case pools (b126 대비). 산출물 → _b128/.

Picker rules (b126 상속):
  - supreme: court=='대법원' AND suffix in 도/두/다/므/스
  - lower(도메인게이트): divorce 르|드단|드합|느합(+가사순도) / wage 나|가합|가단 /
    jeonse-fraud 나|가합|가단|가소 / defamation 노|고합|고단|고정(+T3순도) / unemployment 구합·재결
  - EXCLUDE anchors: dismissal / assault / divorce
"""
import json, os, re, glob, collections

REPO = r"C:\Users\shini\easylaw-scraper"
BASE = os.path.join(REPO, "_b135")
os.makedirs(os.path.join(BASE, "out"), exist_ok=True)

# ── 1. avoid: 기존 스포크 슬러그 전량 + 도메인별 ─────────────────────
slug_re = re.compile(r"^\s*slug:\s*'([^']+)'", re.M)
existing_slugs = set()
by_domain = collections.defaultdict(list)
for f in glob.glob(os.path.join(REPO, "web", "src", "data", "spoke", "*.ts")):
    src = open(f, encoding="utf-8").read()
    for m in re.finditer(r"domain:\s*'([^']+)',\s*\n\s*slug:\s*'([^']+)'", src):
        by_domain[m.group(1)].append(m.group(2))
    existing_slugs |= set(slug_re.findall(src))

# ── 2. avoid: redirect 슬러그 ────────────────────────────────────
nc = open(os.path.join(REPO, "web", "next.config.js"), encoding="utf-8").read()
redirect_slugs = set()
for m in re.finditer(r"source:\s*'/guide/[^/]+/([^']+)'", nc):
    redirect_slugs.add(m.group(1))

# ── 3. avoid: b126 키워드 (직전 batch 교차 차단) ─────────────────────
prev_kw = []
for f in glob.glob(os.path.join(REPO, "web", "src", "data", "spoke", "spokes-batch134-*.ts")):
    src = open(f, encoding="utf-8").read()
    prev_kw += re.findall(r"^\s*keyword:\s*'([^']+)'", src, re.M)
assert prev_kw, "직전배치 glob 매칭 0 — 버전 bump 확인"

# ── 4. 사용된 사건번호 (전 스포크 + used-cases.json) ────────────────
used_nums = set()
for f in glob.glob(os.path.join(REPO, "web", "src", "data", "spoke", "*.ts")):
    src = open(f, encoding="utf-8").read()
    # ②안 구형식 확장: 한국 구판례는 '96므1397' 처럼 2자리 연도. \d{2,4} 로 신·구형식 동시 수집.
    # ⚠️ picker 확장과 반드시 세트 — 여기가 빠지면 기존 스포크에 이미 인용된 구형식이 used 미기록으로 재출현함.
    used_nums |= set(re.findall(r"\b\d{2,4}(?:도|두|다|므|스|르|나|가합|가단|가소|드단|드합|느합|노|고합|고단|고정|구합)\d+\b", src))
    used_nums |= set(re.findall(r"20\d{2}재결\s*제?\s*\d+\s*호", src))
uc = json.load(open(os.path.join(REPO, "kb", "used-cases.json"), encoding="utf-8"))
for r in uc:
    if r.get("판례ID"):
        used_nums.add(r["판례ID"])

# ── 4b. 도메인별 blacklist (오도메인 재출현 squatter 영구 제외) ──────────
BLACKLIST = json.load(open(os.path.join(REPO, "kb", "case_blacklist.json"), encoding="utf-8"))

# ── 5. 판례 풀 ───────────────────────────────────────────────────
SUPREME_SUF = r"(?:도|두|다|므|스)"
LOWER_SUF = {
    "divorce": r"(?:르|드단|드합|느합)",
    "wage": r"(?:나|가합|가단)",
    "jeonse-fraud": r"(?:나|가합|가단|가소)",
    "defamation": r"(?:노|고합|고단|고정)",
    "unemployment": r"(?:구합)",
}
EXCLUDE = {
    "dismissal": ["산업재해", "요양급여", "장해급여", "유족급여", "보험료", "국민연금", "건강보험"],
    "assault": ["교통사고", "음주운전", "성폭력", "강제추행", "명예훼손"],
    "divorce": ["상속재산", "입양", "친양자", "국적", "성본변경"],
}
DEF_IMPURE = ["사기", "횡령", "배임", "절도", "강도", "성폭력", "강제추행", "마약", "음주운전", "교통사고", "폭행치사"]
# (A)+(B) b135: defamation 전용 판시사항 폴백. 요지<400 이어도 판시>=400 & 명예훼손류 signal 있으면 회수.
#   타 도메인은 기존 요지>=400 gate 불변 (Δ0). signal 가드로 혼합사건(2016도19464 등) 판시 오용 차단.
DEF_HOLD_SIGNAL = ["명예훼손", "모욕", "사실적시", "사실의 적시", "비방", "공연성", "허위사실"]
DIVORCE_FAMILY_SUF = re.compile(r"^\d{2,4}(?:므|르|드단|드합|느합)\d+$")
# dui 순도필터: 음주 신호(포함) 있고 강력범죄 dominant(제외) 아닌 것만. 혼합(강간·폭력+도로교통 부수혐의) squatter 제거.
DUI_INCLUDE = ["음주운전", "음주측정", "혈중알코올", "위드마크", "주취", "알코올농도", "채혈"]
DUI_EXCLUDE = ["강간", "특수강간", "강제추행", "성폭력", "살인", "폭력행위", "횡령", "강도", "마약"]

# ⚠️ b135 추가 — 도메인 순도필터(사건명 기준). 구형식(2자리 연도) 회수로 옛 판례가 대량 유입되면서
#   richness 상위에 오도메인 squatter(뇌물·국가보안법·국유재산 등)가 올라오는 문제 차단.
#   NAME_INCLUDE: 사건명에 최소 1개 필수 / NAME_EXCLUDE: 하나라도 있으면 배제.
NAME_INCLUDE = {
    "fraud": ["사기", "공갈", "부당이득"],
    "assault": ["폭행", "상해", "치상", "치사", "폭력행위"],
    "defamation": ["명예훼손", "모욕", "비방", "출판물"],
    "sex-crime": ["강간", "강제추행", "성폭력", "간음", "성매매", "카메라", "음란"],
    "divorce": ["이혼", "위자료", "재산분할", "친권", "양육"],
}
NAME_EXCLUDE = {
    "fraud": ["뇌물", "국가보안법", "국유재산", "긴급조치", "노동쟁의", "집회및시위", "선거"],
    "assault": ["국가보안법", "긴급조치", "노동쟁의", "집회및시위", "살인", "강도상해", "내란"],
    "defamation": ["국가보안법", "긴급조치", "안전기획부", "통신비밀", "선거부정", "내란"],
    "sex-crime": ["국가보안법", "긴급조치"],
    # b135 추가: jeonse-fraud 풀에 섞인 비임대차 보증금 사건(사업보증금·공사계약보증금 등) 차단.
    #   '보증금반환' 이라는 사건명만 보고 전세 판례로 오인되던 squatter 제거.
    "jeonse-fraud": ["사업보증금", "공사계약", "계약보증금", "입찰", "하도급", "이행보증"],
}

DOMAIN_FILES = {
    "fraud": "fraud", "sex-crime": "sex-crime", "assault": "assault", "dui": "dui",
    "jeonse-fraud": "jeonse-fraud", "defamation": "defamation", "divorce": "divorce",
    "inheritance": "inheritance", "traffic-accident": "traffic-accident",
    "dismissal": "dismissal", "wage": "wage", "unemployment": "unemployment",
    "retirement": "retirement",
}
KEYS = dict(num="사건번호", court="법원명", date="선고일자", name="사건명", holding="판시사항", summary="판결요지")


# traffic-accident 폴백: dui 순도필터로 빠진 교통사고 형사책임 판례(도주차량·교통사고처리)만 명시 편입.
# cases.json 무수정 — dui 소스 훼손 0. 각도 다양화(보험금 civil 편중 완화)용. 2000도5540은 traffic에 이미 존재해 제외.
TRAFFIC_DUI_FALLBACK = {"2006도3441", "2005도9743", "2002도3190", "2000도1731", "2001도5369", "2010도759"}


def load(domain):
    p = os.path.join(REPO, "kb", DOMAIN_FILES[domain], "cases.json")
    rows = json.load(open(p, encoding="utf-8")) if os.path.exists(p) else []
    if not rows and domain == "jeonse-fraud":
        rows = json.load(open(os.path.join(REPO, "kb", "jeonse", "cases.json"), encoding="utf-8"))
    if domain == "traffic-accident":
        dui_rows = json.load(open(os.path.join(REPO, "kb", "dui", "cases.json"), encoding="utf-8"))
        rows = rows + [r for r in dui_rows if (r.get(KEYS["num"]) or "").strip() in TRAFFIC_DUI_FALLBACK]
    return rows


DEDUP_LOG = {}  # domain -> [중복 제거된 사건번호]


def build_pool(domain, want=12):
    rows = load(domain)
    sup, low = [], []
    seen_nums = set()
    dedup_dropped = []
    # 구형식(2자리 연도) 포함 스캔. (19|20)\d{2} 로는 '96므1397' 이 안 잡히므로 \d{2,4}.
    sup_re = re.compile(rf"^\d{{2,4}}{SUPREME_SUF}\d+$")
    low_re = re.compile(rf"^\d{{2,4}}{LOWER_SUF[domain]}\d+$") if domain in LOWER_SUF else None
    jae_re = re.compile(r"20\d{2}재결\s*제?\s*\d+\s*호")
    for r in rows:
        num = (r.get(KEYS["num"]) or "").strip()
        court = (r.get(KEYS["court"]) or "").strip()
        summ = (r.get(KEYS["summary"]) or "").strip()
        hold = (r.get(KEYS["holding"]) or "").strip()
        name = (r.get(KEYS["name"]) or "").strip()
        if not num or num in used_nums:
            continue
        # 재결 복합 ID('2019재결 제29호, 제30호') 컴포넌트 단위 used 체크 —
        # 개별 재결번호(제29호)가 이미 쓰였으면 복합 전체를 배제 (b135 사고: 복합 문자열이 used_nums 와 안 맞아 재사용됨)
        _jae = re.findall(r"20\d{2}재결\s*제?\s*\d+\s*호", num)
        if _jae and any(c in used_nums for c in _jae):
            continue
        if num in BLACKLIST.get(domain, []):  # 도메인별 영구 제외 (cross-domain 보존)
            continue
        if num in seen_nums:  # ②안 dedup 안전망: 소스(cases.json) 중복 시 첫 건만 (전 도메인 공통)
            dedup_dropped.append(num)
            continue
        seen_nums.add(num)
        # (A) gate: defamation 만 max(요지,판시), 나머지는 요지 그대로
        holding_based = False
        if domain == "defamation":
            if len(summ) < 400:
                # (B) signal 가드: 판시에 명예훼손류 키워드 있어야 폴백 인정
                if len(hold) >= 400 and any(k in hold for k in DEF_HOLD_SIGNAL):
                    holding_based = True
                else:
                    continue
        else:
            if len(summ) < 400:
                continue
        blob = name + " " + hold + " " + summ
        if any(w in blob for w in EXCLUDE.get(domain, [])):
            continue
        if domain == "defamation" and any(w in name for w in DEF_IMPURE):
            continue
        inc = NAME_INCLUDE.get(domain)
        if inc:
            # 주된 죄명(사건명 첫 구분자 앞) 기준 — 혼합사건에서 부수 죄명만 걸려 통과하는 squatter 차단
            primary = re.split(r"[·ㆍ,]", name)[0]
            if not any(w in primary for w in inc):
                continue
        if any(w in name for w in NAME_EXCLUDE.get(domain, [])):
            continue
        if domain == "divorce" and not DIVORCE_FAMILY_SUF.match(num):
            continue
        if domain == "dui":  # 순도필터: 음주 신호 필수 + 강력범죄 dominant 제외
            if not any(k in blob for k in DUI_INCLUDE):
                continue
            if any(k in name for k in DUI_EXCLUDE):
                continue
        rec = dict(num=num, court=court, date=(r.get(KEYS["date"]) or "").strip(),
                   caseName=name, holding=hold[:1200], summary=summ[:2600],
                   rich=(max(len(summ), len(hold)) if holding_based else len(summ)),
                   holding_based=holding_based)
        if sup_re.match(num) and court == "대법원":
            rec["tier"] = "supreme"; sup.append(rec)
        elif low_re and low_re.match(num) and court != "대법원":
            rec["tier"] = "lower"; low.append(rec)
        elif domain == "unemployment" and jae_re.match(num):
            rec["tier"] = "lower"; low.append(rec)
    sup.sort(key=lambda x: -x["rich"]); low.sort(key=lambda x: -x["rich"])
    if dedup_dropped:
        DEDUP_LOG[domain] = dedup_dropped
    return sup[:want], low[:want]


if __name__ == "__main__":
    print("existing slugs:", len(existing_slugs), "| redirect:", len(redirect_slugs),
          "| b126 keywords:", len(prev_kw), "| used case nums:", len(used_nums))
    open(os.path.join(BASE, "avoid_slugs.txt"), "w", encoding="utf-8").write("\n".join(sorted(existing_slugs)))
    open(os.path.join(BASE, "redirect_slugs.txt"), "w", encoding="utf-8").write("\n".join(sorted(redirect_slugs)))
    open(os.path.join(BASE, "prev_keywords.txt"), "w", encoding="utf-8").write("\n".join(sorted(prev_kw)))
    json.dump({k: v for k, v in by_domain.items()}, open(os.path.join(BASE, "existing_slugs_by_domain.json"), "w", encoding="utf-8"), ensure_ascii=False)
    pools = {}
    for d in DOMAIN_FILES:
        s, l = build_pool(d)
        pools[d] = {"supreme": s, "lower": l}
        print(f"{d:18s} supreme={len(s):2d} lower={len(l):2d}")
    json.dump(pools, open(os.path.join(BASE, "case_pools.json"), "w", encoding="utf-8"), ensure_ascii=False)
    if DEDUP_LOG:
        print("── dedup(소스 중복 제거, cases.json 무수정) ──")
        for d, ns in DEDUP_LOG.items():
            print(f"  {d:18s} -{len(ns)}건: {ns}")
    else:
        print("── dedup: 제거 없음 ──")
    print("WROTE pools ->", BASE)
