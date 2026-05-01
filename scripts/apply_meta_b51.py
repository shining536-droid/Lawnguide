#!/usr/bin/env python
"""Apply 22 meta updates for batch51 organic search acceleration."""
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

# (slug, file, new_title, new_desc, new_keyword(=H1, optional, None=keep))
UPDATES = [
    ("retirement-irp-transfer-requirement",
     "web/src/data/spoke/spokes-batch30-retirement-wage.ts",
     "퇴직금 IRP로 이전해야 하나요? 의무·예외 4가지 | 로앤가이드",
     "퇴직금을 IRP로 이전해야 하는지, 안 옮기면 어떻게 되는지 막막하시죠. 의무이전 4가지 요건과 일시금 수령 시 세금 차이를 지금 확인하세요.",
     None),
    ("unemployment-over65-exclusion-exception",
     "web/src/data/spoke/spokes-batch30-unemployment.ts",
     "65세 넘었는데 실업급여 받을 수 있나요? 예외 3가지 | 로앤가이드",
     "65세를 넘어 일하다 그만뒀는데 실업급여를 못 받는다고 들으셨나요? 예외로 받을 수 있는 3가지 조건과 신청 절차를 지금 확인하세요.",
     None),
    ("child-support-calculation-standard",
     "web/src/data/spoke/divorce.ts",
     "양육비 얼마나 받을 수 있나요? 소득별 산정기준표 | 로앤가이드",
     "이혼 후 자녀 양육비를 얼마나 받거나 지급해야 할지 모르겠다면, 부모 합산 소득별 표준 양육비 산정기준표와 가산·감산 4가지 항목을 지금 확인하세요.",
     None),
    ("unemployment-pension-simultaneous",
     "web/src/data/spoke/spokes-batch29-unemployment-2.ts",
     "국민연금 받으면서 실업급여 가능한가요? 동시 수급 5가지 | 로앤가이드",
     "국민연금을 받고 있는데 실업급여까지 받을 수 있을지 헷갈리시죠. 동시 수급 가능 조건 5가지와 감액 여부, 신청 시 주의사항을 지금 확인하세요.",
     None),
    ("wage-overtime-unpaid-claim",
     "web/src/data/spoke/wage.ts",
     "야근수당 안 줘요. 어떻게 받죠? 청구 4단계 | 로앤가이드",
     "야근하고 수당을 못 받으셨다면 가만 있지 마세요. 노동부 진정·민사소송·체불사업주 명단 공개까지 4가지 청구 절차를 지금 확인하세요.",
     None),
    ("child-support-lawsuit-process",
     "web/src/data/spoke/child-support.ts",
     "양육비 안 줘요. 소송하면 얼마 걸리나요? 절차 5단계 | 로앤가이드",
     "양육비를 안 주는 전 배우자에게 소송하려면 얼마나 걸리고 비용이 얼마나 드는지 막막하시죠. 청구 5단계와 평균 4~6개월 기간, 인지대까지 지금 확인하세요.",
     None),
    ("child-support-enforcement-method",
     "web/src/data/spoke/spokes-batch14-11to15.ts",
     "양육비 안 주는 전 배우자 압류 가능한가요? 5가지 방법 | 로앤가이드",
     "양육비 강제집행은 급여 압류·예금 압류·재산명시·이행명령·감치 5단계로 진행됩니다. 신청 자격·필요 서류·평균 처리 기간을 지금 확인하세요.",
     None),
    ("floor-noise-report-to-mediation-procedure",
     "web/src/data/spoke/neighbor-dispute.ts",
     "층간소음 신고 어디로 해야 하나요? 단계별 정리 | 로앤가이드",
     "윗층 층간소음을 어디에 신고해야 할지 막막하시죠. 관리사무소 → 층간소음이웃사이센터 → 환경분쟁조정 → 민사소송 4단계를 지금 확인하세요.",
     None),
    ("limited-inheritance-acceptance-process",
     "web/src/data/spoke/inheritance.ts",
     "상속 빚이 더 많아요. 한정승인 어떻게 하나요? 3개월 기한 | 로앤가이드",
     "돌아가신 부모님 빚이 재산보다 많을까 걱정되시죠. 상속 개시일로부터 3개월 안에 한정승인 신청, 5단계 절차와 필요 서류를 지금 확인하세요.",
     None),
    ("dismissal-tardiness-repeated-discipline",
     "web/src/data/spoke/spokes-batch37-labor.ts",
     "지각 자주 했다고 해고됐어요. 다툴 수 있나요? | 로앤가이드",
     "지각·결근이 반복됐다고 갑자기 해고되셨나요? 지각 누적 해고가 정당한지 다투는 4가지 요건과 노동위 구제신청 절차를 지금 확인하세요.",
     None),
    ("fraud-penalty-settlement-reduction",
     "web/src/data/spoke/fraud.ts",
     "사기죄 처벌 얼마인가요? 합의하면 감형되나요? | 로앤가이드",
     "사기죄로 고소당하셨다면 가장 궁금한 게 처벌 수위와 합의 효과겠죠. 형법 제347조 형량과 합의 시 감형 폭, 양형요소 5가지를 지금 확인하세요.",
     None),
    ("stalking-report-and-restraining-order",
     "web/src/data/spoke/stalking.ts",
     "스토킹 신고하면 어떻게 되나요? 접근금지 4단계 | 로앤가이드",
     "스토킹 피해를 입었는데 어디서부터 시작해야 할지 막막하시죠. 112 신고 → 응급조치 → 잠정조치 → 처벌 4단계와 증거 수집법을 지금 확인하세요.",
     None),
    ("sex-crime-statute-of-limitations",
     "web/src/data/spoke/sex-crime.ts",
     "성범죄 신고 시기 지났는데 처벌되나요? 공소시효 정리 | 로앤가이드",
     "오래 전 성범죄 피해를 이제야 알리려는데 처벌이 가능할지 두려우시죠. 죄종별 공소시효·미성년자 정지·DNA 증거 등 5가지 핵심을 지금 확인하세요.",
     None),
    ("small-claims-vs-payment-order",
     "web/src/data/spoke/spokes-batch10-11to15.ts",
     "돈 떼였어요. 소액소송과 지급명령 중 뭐가 빠를까? | 로앤가이드",
     "돈을 빌려줬는데 안 갚아주는 상대에게 어떤 절차가 빠를지 헷갈리시죠. 지급명령(2주)·소액소송(3개월) 비용·기간·강제집행 차이를 지금 확인하세요.",
     None),
    ("traffic-accident-injury-compensation",
     "web/src/data/spoke/traffic-accident.ts",
     "교통사고로 다쳤어요. 보상금 얼마 받나요? 5가지 청구 | 로앤가이드",
     "교통사고로 다쳤는데 보상금을 얼마나 받을 수 있는지 막막하시죠. 위자료·치료비·일실수익·후유장해 5가지 청구 항목과 합의 전 체크리스트를 지금 확인하세요.",
     None),
    ("unemployment-voluntary-quit-benefits",
     "web/src/data/spoke/spokes-batch10-26to30.ts",
     "자진퇴사도 실업급여 받을 수 있나요? 정당사유 5가지 | 로앤가이드",
     "자진퇴사하면 실업급여를 못 받는다고 들으셨죠? 임금 체불·괴롭힘·통근불가 등 정당사유 5가지로 자발적 퇴사도 수급 가능한 조건을 지금 확인하세요.",
     None),
    ("unemployment-workplace-bullying-evidence-quit",
     "web/src/data/spoke/spokes-batch32-unemployment.ts",
     "직장 괴롭힘으로 퇴사했어요. 실업급여 받을 수 있나요? | 로앤가이드",
     "직장 내 괴롭힘 때문에 사직했는데 실업급여 안 된다고 하시나요? 정당사유 인정 5가지 증거(녹음·문자·진단서)와 신청 절차를 지금 확인하세요.",
     None),
    ("unemployment-late-application-rescue",
     "web/src/data/spoke/spokes-batch32-unemployment.ts",
     "실업급여 신청 12개월 지났어요. 구제 가능한가요? | 로앤가이드",
     "실업급여 신청 기한 12개월을 놓쳤다고 포기하지 마세요. 천재지변·질병·임신 등 예외 5가지와 이의신청·재심청구 절차를 지금 확인하세요.",
     None),
    ("unemployment-military-discharge-eligibility",
     "web/src/data/spoke/spokes-batch32-unemployment.ts",
     "전역 후 실업급여 받을 수 있나요? 군 복무·자격 정리 | 로앤가이드",
     "전역 후 취업 준비 중인데 실업급여를 받을 수 있는지 헷갈리시죠. 군 복무 기간 인정·고용보험 가입·자격 4가지 핵심을 지금 확인하세요.",
     None),
    ("traffic-accident-bus-sudden-stop-passenger-claim",
     "web/src/data/spoke/spokes-batch34-nonlabor.ts",
     "버스 급정거로 다쳤어요. 누가 보상해주나요? | 로앤가이드",
     "버스나 택시 급정거로 넘어져 다쳤는데 누가 보상하는지 막막하시죠. 운수회사 책임·승객 과실비율·보험금 청구 5단계를 지금 확인하세요.",
     None),
    ("school-violence-false-report-evidence",
     "web/src/data/spoke/spokes-batch10-21to25.ts",
     "학교폭력 허위신고 당했어요. 어떻게 반박하나요? | 로앤가이드",
     "자녀가 학폭 허위신고로 가해자로 몰렸다면 막막하시죠. CCTV·통화녹음·증인진술 5가지 반박 증거와 학폭위 대응 절차를 지금 확인하세요.",
     None),
    ("lease-expiry-deposit-return-steps",
     "web/src/data/spoke/jeonse.ts",
     "계약 끝났는데 보증금 안 돌려줘요. 어떻게 받죠? | 로앤가이드",
     "전세 계약이 끝났는데 집주인이 보증금을 안 돌려준다면 막막하시죠. 내용증명 → 임차권등기 → 지급명령 → 보증금반환소송 5단계를 지금 확인하세요.",
     None),
]


def find_block_for_slug(text, slug):
    """Find the SpokePage object block (slug-aligned) and return (start, end) of the meta {} block within."""
    # locate the slug line
    pattern = rf"slug:\s*['\"]{re.escape(slug)}['\"]"
    m = re.search(pattern, text)
    if not m:
        return None
    # search forward for `meta: {` then balanced braces
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
                return brace_open, i + 1, m.start(), m.end()
        i += 1
    return None


def replace_meta(text, slug, new_title, new_desc):
    res = find_block_for_slug(text, slug)
    if not res:
        return None, "slug or meta block not found"
    brace_open, brace_close, slug_pos, _ = res
    new_meta = (
        "{\n"
        f"      title: '{new_title.replace(chr(39), chr(92)+chr(39))}',\n"
        f"      description:\n"
        f"        '{new_desc.replace(chr(39), chr(92)+chr(39))}',\n"
        "    }"
    )
    new_text = text[:brace_open] + new_meta + text[brace_close:]
    return new_text, None


changed = []
errors = []
for slug, fpath, title, desc, keyword in UPDATES:
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
