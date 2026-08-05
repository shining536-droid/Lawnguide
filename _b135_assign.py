# -*- coding: utf-8 -*-
"""batch127 assign — 40 슬롯 도메인/관점/tier/판례/CTA/내부링크 배정 → _b128/args.json.

분배: 노동 10(dismissal4+wage3+unemployment2+retirement1; 구형식 회수로 wage 슬롯 부활, 산재 0 유지)
      대박7 28(fraud6/sex-crime4/assault4/dui3/divorce4/defamation4/jeonse-fraud3)
      비대박 비노동 2(inheritance1/traffic-accident1)
관점: victim24 / accused10 / neutral6
"""
import json, os

REPO = r"C:\Users\shini\easylaw-scraper"
BASE = os.path.join(REPO, "_b135")
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
    "jeonse-fraud": "supreme", "inheritance": "supreme",
    "traffic-accident": "supreme", "dismissal": "supreme", "retirement": "supreme",
    # ⚠️ b135 prep 실측: divorce supreme=12 / defamation supreme=9 / wage supreme=12 / unemployment supreme=0(lower=12).
    # 구형식 정규식 확장 효과 유지 → divorce·wage supreme 정상. unemployment 만 lower(재결·구합) 고정.
    "divorce": "supreme", "unemployment": "lower", "defamation": "supreme",
    "wage": "supreme",
}

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
# ⚠️ b135 추가: 배치 내부 중복 차단. wage↔retirement, fraud↔assault 처럼
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

# ── b135 수동 판례 라우팅 (자동 선정 우회) ──────────────────────────
# traffic 형사책임 슬롯: 도주차량 판례(richness 하위라 자동 미선정).
# ⚠️ 원 시퀀스 3번이던 2010도759 는 실물 확인 결과 '상고이유서·상고기각(형사소송법 제380조)' 절차 판례이고
#    죄명도 도로교통법위반(무면허운전) 이라 도주차량/교통 형사책임 각도와 무관 → 시퀀스에서 제외.
#    b134 는 2002도3190(도주차량·아파트 단지 통행로 도로 해당성) 사용.
#    b135 는 2000도1731(귀책사유 없어도 구호조치·신고의무) 사용. 잔여 1건: 2001도5369.
TRAFFIC_MANUAL = ("dui", "2000도1731")   # kb/dui/cases.json 에 실존, 미사용
NOTES = {
    "2000도1731": "형사책임(특가법 도주차량 + 도로교통법 사고발생 시 조치의무) 각도. "
                  "쟁점 ①사고에 귀책사유(고의·과실)가 없는 운전자에게도 구호조치의무·신고의무가 있는지(적극) "
                  "②타인에게 신고를 부탁하고 현장을 이탈하면 의무를 다한 것인지(소극). "
                  "‘내 잘못 아니니 그냥 가도 된다’ / ‘일행이 신고했으니 됐다’ 는 오해 교정이 핵심. "
                  "⚠️ 구법 가드: 판례가 인용한 도로교통법 제50조 제1항·제2항은 현행 **도로교통법 제54조 제1항·제2항**"
                  "(사고발생 시 조치·신고)으로 이동했다. 본문 조문은 반드시 현행 제54조로 쓰고, 미조치 처벌은 현행 "
                  "제148조(사고 후 미조치) 기준으로 서술한다. 사건번호는 원형 2000도1731 유지. "
                  "형사처벌 단정 금지(‘처벌됩니다’·‘처벌받습니다’ 금지), 가해 운전자 서술 시 ‘혐의를 받고 있다면’ 사용. "
                  "보험금 민사 합의 각도 아님 — 형사 구호조치의무 성립범위 중심.",
}
HOLDING_NOTE = "요지 없음·판시사항(holding) 기반 건. 판시 원문 복붙 금지, 반드시 rewrite. caseSummary 는 판시 법리를 풀어 서술."


def load_case(domain_file, num):
    rows = json.load(open(os.path.join(REPO, "kb", domain_file, "cases.json"), encoding="utf-8"))
    for r in rows:
        if (r.get("사건번호") or "").strip() == num:
            return dict(num=num, court=(r.get("법원명") or "").strip(), date=(r.get("선고일자") or "").strip(),
                        caseName=(r.get("사건명") or "").strip(), holding=(r.get("판시사항") or "").strip()[:1200],
                        summary=(r.get("판결요지") or "").strip()[:2600], holding_based=False)
    raise SystemExit(f"수동판례 {num} 없음: {domain_file}")


args = []
for i, (fg, dom, persp, typ) in enumerate(PLAN):
    tier = TIER[dom]
    if dom == "traffic-accident":
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
