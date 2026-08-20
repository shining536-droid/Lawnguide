# -*- coding: utf-8 -*-
"""batch127 assign — 40 슬롯 도메인/관점/tier/판례/CTA/내부링크 배정 → _b128/args.json.

분배: 노동 10(dismissal4+wage3+unemployment2+retirement1; 구형식 회수로 wage 슬롯 부활, 산재 0 유지)
      대박7 28(fraud6/sex-crime4/assault4/dui3/divorce4/defamation4/jeonse-fraud3)
      ⚠️ b142: defamation 4→2 축소(lower 잔여 2), 축소분은 fraud+1·sex-crime+1 재배분. 크롤 성공 시 4 복귀.
      비대박 비노동 2(inheritance1/traffic-accident1)
관점: victim24 / accused10 / neutral6
"""
import json, os, re, glob

REPO = r"C:\Users\shini\easylaw-scraper"
BASE = os.path.join(REPO, "_b142")
pools = json.load(open(os.path.join(BASE, "case_pools.json"), encoding="utf-8"))
by_dom = json.load(open(os.path.join(BASE, "existing_slugs_by_domain.json"), encoding="utf-8"))
redirects = set(x for x in open(os.path.join(BASE, "redirect_slugs.txt"), encoding="utf-8").read().split("\n") if x)

CTA = {
    "fraud": ("사기 고소 전 준비자료, AI로 체크하기", "/chat?domain=fraud"),
    "sex-crime": ("성범죄 피해 대응 순서, AI로 정리하기", "/chat?domain=sex-crime"),
    "assault": ("폭행 증거 수집 순서, AI로 정리하기", "/chat?domain=assault"),
    "dui": ("음주운전 행정심판 준비서류, AI로 체크하기", "/chat?domain=dui"),
    "jeonse-fraud": ("전세사기 피해 대응 순서, AI로 정리하기", "/chat?domain=jeonse-fraud"),
    "defamation": ("명예훼손 고소당했을 때 대응, AI로 정리하기", "/chat?domain=defamation"),
    "divorce": ("협의이혼 준비서류, AI로 정리하기", "/chat?domain=divorce"),
    "inheritance": ("한정승인 필요서류, AI로 정리하기", "/chat?domain=inheritance"),
    "traffic-accident": ("교통사고 합의 전 체크리스트, AI로 정리하기", "/chat?domain=traffic-accident"),
    "dismissal": ("부당해고 구제신청 순서, AI로 정리하기", "/chat?domain=dismissal"),
    "unemployment": ("실업급여 받을 수 있는지 AI로 점검하기", "/chat?domain=unemployment"),
    "retirement": ("퇴직금 계산과 청구 절차, AI로 정리하기", "/chat?domain=retirement"),
    "wage": ("임금체불 대응 순서, AI로 바로 정리하기", "/chat?domain=wage"),
}
TIER = {  # 도메인별 사용할 판례 tier (pool 가용성 기준)
    "fraud": "supreme", "sex-crime": "supreme", "assault": "supreme", "dui": "supreme",
    "inheritance": "supreme",
    "traffic-accident": "supreme", "dismissal": "supreme", "retirement": "supreme",
    # ⚠️ b136 prep 실측: divorce supreme=12 / defamation supreme=9 / wage supreme=12 / unemployment supreme=0(lower=12).
    # 구형식 정규식 확장 효과 유지 → divorce·wage supreme 정상. unemployment 만 lower(재결·구합) 고정.
    # ⚠️ b142: defamation supreme 완전 소진(b137 97도133 이 마지막) → lower 고정.
    # ⚠️ b142: 명예 민사 크롤 75건 반영으로 defamation supreme 38건 확보 → lower 고정 해제, supreme 복귀.
    #   (b138~b140 은 supreme 0 이라 lower 고정이었음. lower 30건은 예비로 남는다.)
    # ⚠️ b142: jeonse-fraud supreme 0 소진(b140 이 마지막 2건 사용) → lower 고정. TIER_SEQ 는 비운다.
    "divorce": "supreme", "unemployment": "lower", "defamation": "supreme",
    "jeonse-fraud": "lower",
    "wage": "supreme",
}

# ⚠️ b137: defamation supreme 실측 잔여 1건(97도133). 8/3 구형식 확장 "+27" 은 요지게이트·순도필터
#   미반영 낙관치였고, 실제로는 구형식 supreme 135건 → used15/dedup9 → 요지<400 컷 91 → 통과 20 중
#   순도필터(DEF_IMPURE 5 + 주죄명 불일치 14)가 19건 컷 → 생존 1. 판시폴백 8건은 별개이며 이미 소진.
#   따라서 슬롯별 tier 분기: 첫 슬롯만 supreme(마지막 1건 소진), 나머지는 lower(12건 보유).
#   다음 배치(b142)부터 defamation 은 TIER 를 "lower" 로 고정하면 된다.
# b142 적용 완료: defamation supreme 0 → TIER 에서 "lower" 고정. TIER_SEQ 는 비움(분기 불필요).
# ⚠️ b142 신규 마름 — jeonse-fraud supreme 잔여 2건인데 슬롯은 3개(prep 실측 supreme=2 / lower=12).
#   그대로 두면 pick_case 가 3번째에서 "판례 부족: jeonse-fraud/supreme 2>=2" 로 중단된다.
#   b137 이 defamation 에 썼던 슬롯별 tier 분기 패턴을 그대로 적용 — 남은 supreme 2건을 먼저 소진하고
#   3번째 슬롯만 lower(민사 하급심 12건 보유)로 넘긴다. 슬롯 수·도메인 분배는 건드리지 않는다.
#   ⚠️ b142 부터는 jeonse-fraud supreme 0 이 되므로 TIER 에서 "lower" 고정으로 바꿔야 한다.
# ⚠️ b142: divorce supreme 잔여 3 인데 슬롯 4 → 4번째만 lower(8건 보유)로 분기.
#   dui 는 supreme 1 + lower 신설 27 → [supreme, lower, lower] 로 마지막 supreme 을 먼저 소진한다.
#   ⚠️ b143 부터 divorce supreme 0 → TIER 에서 lower 고정 전환 필요.
TIER_SEQ = {"divorce": ["supreme", "supreme", "supreme", "lower"],
            "dui": ["supreme", "lower", "lower"]}   # jeonse-fraud 는 TIER 에서 lower 고정
_tier_cur = {}


def tier_for(dom):
    seq = TIER_SEQ.get(dom)
    if not seq:
        return TIER[dom]
    i = _tier_cur.get(dom, 0)
    _tier_cur[dom] = i + 1
    return seq[i] if i < len(seq) else seq[-1]

# (file그룹, 도메인, 관점, type) 40 슬롯
PLAN = [
    # ── labor (10): dismissal4 + wage3 + unemployment2 + retirement1 ──
    ("labor", "dismissal", "victim", "판단형"),
    ("labor", "dismissal", "victim", "판단형"),
    ("labor", "dismissal", "victim", "판단형"),
    ("labor", "dismissal", "accused", "판단형"),
    ("labor", "wage", "victim", "판단형"),
    ("labor", "wage", "victim", "판단형"),
    ("labor", "wage", "victim", "절차형"),
    ("labor", "unemployment", "neutral", "판단형"),
    ("labor", "unemployment", "victim", "절차형"),
    ("labor", "retirement", "victim", "판단형"),
    # ── fraud-sexcrime (10): fraud6 + sex-crime4 ──
    ("fraud-sexcrime", "fraud", "victim", "판단형"),
    ("fraud-sexcrime", "fraud", "victim", "판단형"),
    ("fraud-sexcrime", "fraud", "victim", "절차형"),
    ("fraud-sexcrime", "fraud", "accused", "판단형"),
    ("fraud-sexcrime", "fraud", "accused", "판단형"),
    ("fraud-sexcrime", "fraud", "neutral", "판단형"),
    ("fraud-sexcrime", "sex-crime", "victim", "판단형"),
    ("fraud-sexcrime", "sex-crime", "victim", "절차형"),
    ("fraud-sexcrime", "sex-crime", "accused", "판단형"),
    ("fraud-sexcrime", "sex-crime", "accused", "판단형"),
    # ── assault-dui-jeonsefraud (10): assault4 + dui3 + jeonse-fraud3 ──
    ("assault-dui-jeonsefraud", "assault", "victim", "판단형"),
    ("assault-dui-jeonsefraud", "assault", "victim", "절차형"),
    ("assault-dui-jeonsefraud", "assault", "accused", "판단형"),
    ("assault-dui-jeonsefraud", "assault", "accused", "판단형"),
    ("assault-dui-jeonsefraud", "dui", "accused", "판단형"),
    ("assault-dui-jeonsefraud", "dui", "accused", "판단형"),
    ("assault-dui-jeonsefraud", "dui", "neutral", "판단형"),
    ("assault-dui-jeonsefraud", "jeonse-fraud", "victim", "판단형"),
    ("assault-dui-jeonsefraud", "jeonse-fraud", "victim", "판단형"),
    ("assault-dui-jeonsefraud", "jeonse-fraud", "victim", "절차형"),
    # ── defame-divorce-inherit-traffic (10): defamation4 + divorce4 + inheritance1 + traffic1 ──
    # ⚠️ b142 임시 조치 — defamation 4 → 2슬롯 축소.
    #   사유: defamation supreme 0 / lower 잔여 2건(2007가합2569·2009노1249)뿐. 3슬롯 시도 시 pick_case 판례부족 SystemExit 실측 확인.
    #   축소분 2슬롯은 대박7 비중(70%) 유지를 위해 fraud+1 · sex-crime+1 로 재배분한다.
    #   ⚠️ 법제처 OC IP 인증 후 명예 민사 크롤이 성공하면 defamation 4슬롯으로 복귀시킬 것.
    #   (파일그룹은 defame-divorce-inherit-traffic 유지 — 에이전트 idx 범위 10개씩 고정. 실제 구성은 TS 헤더에 자동 기재됨)
    ("defame-divorce-inherit-traffic", "defamation", "accused", "판단형"),
    ("defame-divorce-inherit-traffic", "defamation", "accused", "판단형"),
    ("defame-divorce-inherit-traffic", "defamation", "victim", "판단형"),
    ("defame-divorce-inherit-traffic", "defamation", "victim", "판단형"),
    ("defame-divorce-inherit-traffic", "divorce", "neutral", "판단형"),
    ("defame-divorce-inherit-traffic", "divorce", "neutral", "절차형"),
    ("defame-divorce-inherit-traffic", "divorce", "victim", "판단형"),
    ("defame-divorce-inherit-traffic", "divorce", "victim", "판단형"),
    ("defame-divorce-inherit-traffic", "inheritance", "neutral", "판단형"),
    ("defame-divorce-inherit-traffic", "traffic-accident", "victim", "판단형"),
]
assert len(PLAN) == 40

# 판례 배정용 도메인별 커서
# ⚠️ b136 추가: 배치 내부 중복 차단. wage↔retirement, fraud↔assault 처럼
#    소스 cases.json 이 겹치는 도메인 쌍에서 같은 사건번호가 두 슬롯에 배정되는 사고 방지.
cursor = {}
batch_used = set()
def pick_case(domain, tier):
    key = (domain, tier)
    idx = cursor.get(key, 0)
    pool = pools[domain][tier]
    while idx < len(pool) and pool[idx]["num"] in batch_used:
        idx += 1
    if idx >= len(pool):
        raise SystemExit(f"판례 부족: {domain}/{tier} {idx}>={len(pool)}")
    cursor[key] = idx + 1
    batch_used.add(pool[idx]["num"])
    return pool[idx]

# 내부링크: 허브 + 같은 도메인 기존 슬러그 4 (redirect 제외, 회전)
def links(domain, off):
    hub = f"/guide/{domain}"
    cand = [s for s in by_dom.get(domain, []) if s not in redirects]
    # dedup 유지 순서
    seen = set(); uniq = []
    for s in cand:
        if s not in seen:
            seen.add(s); uniq.append(s)
    picks = []
    n = len(uniq)
    for k in range(4):
        picks.append(uniq[(off * 4 + k) % n])
    # 4개 distinct 보장
    picks = list(dict.fromkeys(picks))
    j = 0
    while len(picks) < 4 and n > len(picks):
        c = uniq[j % n]
        if c not in picks:
            picks.append(c)
        j += 1
    return [hub] + [f"/guide/{domain}/{s}" for s in picks[:4]]

# ── b136 수동 판례 라우팅 (자동 선정 우회) ──────────────────────────
# traffic 형사책임 슬롯: 도주차량 판례(richness 하위라 자동 미선정).
# ⚠️ 원 시퀀스 3번이던 2010도759 는 실물 확인 결과 '상고이유서·상고기각(형사소송법 제380조)' 절차 판례이고
#    죄명도 도로교통법위반(무면허운전) 이라 도주차량/교통 형사책임 각도와 무관 → 시퀀스에서 제외.
#    b134 는 2002도3190(도주차량·아파트 단지 통행로 도로 해당성) 사용.
#    b136 는 2000도1731(귀책사유 없어도 구호조치·신고의무) 사용.
#    b136 이 2001도5369(신원자료 제공해도 도주 성립) 사용 — 시퀀스 6/6 완료.
# ⚠️ b137 부터 traffic 슬롯 richness 자동픽 복귀. TRAFFIC_MANUAL = None 이면 pick_case 경로를 탄다.
#    다시 수동 라우팅이 필요하면 ("dui", "사건번호") 로 되살리면 되고, 재사용 가드는 그대로 동작한다.
TRAFFIC_MANUAL = None   # 시퀀스 종료(b132~b136 6건 소진) → richness 자동픽
NOTES = {}
HOLDING_NOTE = "요지 없음·판시사항(holding) 기반 건. 판시 원문 복붙 금지, 반드시 rewrite. caseSummary 는 판시 법리를 풀어 서술."


def load_case(domain_file, num):
    # 수동 라우팅 재사용 가드 — load_case 는 pool 을 우회하므로 used_nums 필터를 못 받는다.
    # TRAFFIC_MANUAL bump 를 놓치면 직전 배치가 쓴 판례를 무음으로 재인용하게 되어 여기서 차단.
    _pat = re.compile(r"(?<!\d)" + re.escape(num) + r"(?!\d)")
    for _f in glob.glob(os.path.join(REPO, "web", "src", "data", "spoke", "*.ts")):
        if _pat.search(open(_f, encoding="utf-8").read()):
            raise SystemExit(f"수동판례 {num} 이미 사용됨({os.path.basename(_f)}) — TRAFFIC_MANUAL bump 필요")
    rows = json.load(open(os.path.join(REPO, "kb", domain_file, "cases.json"), encoding="utf-8"))
    for r in rows:
        if (r.get("사건번호") or "").strip() == num:
            return dict(num=num, court=(r.get("법원명") or "").strip(), date=(r.get("선고일자") or "").strip(),
                        caseName=(r.get("사건명") or "").strip(), holding=(r.get("판시사항") or "").strip()[:1200],
                        summary=(r.get("판결요지") or "").strip()[:2600], holding_based=False)
    raise SystemExit(f"수동판례 {num} 없음: {domain_file}")


args = []
for i, (fg, dom, persp, typ) in enumerate(PLAN):
    tier = tier_for(dom)
    if dom == "traffic-accident" and TRAFFIC_MANUAL:
        c = load_case(*TRAFFIC_MANUAL)   # 수동 라우팅
        batch_used.add(c["num"])
    else:
        c = pick_case(dom, tier)
    cta_text, cta_link = CTA[dom]
    note = NOTES.get(c["num"], "")
    if c.get("holding_based"):
        note = (note + " " + HOLDING_NOTE).strip()
    args.append({
        "idx": i,
        "file": fg,
        "domain": dom,
        "perspective": persp,
        "type": typ,
        "tier": tier,
        "case": {"num": c["num"], "court": c["court"], "date": c["date"],
                 "caseName": c["caseName"], "holding": c["holding"], "summary": c["summary"],
                 "holdingBased": c.get("holding_based", False)},
        "note": note,
        "ctaText": cta_text,
        "ctaLink": cta_link,
        "linkHrefs": links(dom, i),
    })

json.dump(args, open(os.path.join(BASE, "args.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# 검증 출력
import collections
doms = collections.Counter(a["domain"] for a in args)
persp = collections.Counter(a["perspective"] for a in args)
nums = [a["case"]["num"] for a in args]
print("도메인:", dict(doms))
print("관점:", dict(persp))
print("사건번호 unique:", len(set(nums)) == len(nums), f"({len(nums)}개)")
labor = sum(v for k, v in doms.items() if k in ("dismissal", "wage", "unemployment", "retirement", "industrial-accident"))
daebak = sum(v for k, v in doms.items() if k in ("fraud", "sex-crime", "assault", "dui", "divorce", "defamation", "jeonse-fraud"))
print(f"노동={labor} 대박7={daebak}({daebak*100//40}%) 비대박비노동={40-labor-daebak}")
print("WROTE args.json")
