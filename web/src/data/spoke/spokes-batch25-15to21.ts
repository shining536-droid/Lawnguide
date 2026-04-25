import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [4대보험 미가입 상태에서 임금까지 체불당한 근로자]의 [두 가지 위반을 동시에 신고할 수 있는지 모르는 상황]에서 [4대보험 미가입 + 임금체불 동시 신고 절차 안내]를 돕는 페이지다.
// 16. 이 페이지는 [퇴직금을 받지 못한 근로자]의 [노동청 신고와 민사청구 중 어떤 것을 먼저 해야 할지 모르는 상황]에서 [두 구제수단의 차이와 순서 전략 안내]를 돕는 페이지다.
// 17. 이 페이지는 [퇴직금 계산이 맞는지 확인하려는 근로자]의 [어떤 돈이 퇴직금 산정에 포함되고 제외되는지 모르는 상황]에서 [포함·제외 항목 구분과 산정 기준 안내]를 돕는 페이지다.
// 18. 이 페이지는 [부당해고 구제신청이 기각된 근로자]의 [재심 신청 방법과 기한을 모르는 상황]에서 [재심 절차와 전략 안내]를 돕는 페이지다.
// 19. 이 페이지는 [권고사직 합의서에 서명하기 전인 근로자]의 [어떤 조항이 불리한지 구별하지 못하는 상황]에서 [불리한 조항 5가지 식별과 대응 방법 안내]를 돕는 페이지다.
// 20. 이 페이지는 [수습기간 중 해고 통보를 받은 근로자]의 [부당해고로 인정받을 수 있는 조건을 모르는 상황]에서 [수습기간 해고의 정당성 판단 기준과 대응 방법 안내]를 돕는 페이지다.
// 21. 이 페이지는 [교통사고 후 보험사로부터 합의금을 제시받은 피해자]의 [바로 합의하면 손해를 보는 이유를 모르는 상황]에서 [합의금 적정성 판단 기준과 주의사항 안내]를 돕는 페이지다.

export const spokesBatch25_15to21: SpokePage[] = [
  // ───────────────────────────────────────────
  // 15. wage / no-social-insurance-wage-complaint-together
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'no-social-insurance-wage-complaint-together',
    keyword: '4대보험 미가입 임금체불 동시 신고',
    questionKeyword: '4대보험 안 들어준 회사에 임금체불 신고도 같이 할 수 있나요?',
    ctaKeyword: '4대보험 미가입 임금체불 신고',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '4대보험 미가입 + 임금체불 동시 신고 3단계 | 로앤가이드',
      description:
        '4대보험도 안 들어주고 월급까지 밀리는 회사, 한 번에 신고할 수 있는지 궁금하다면 절차와 준비서류를 지금 확인하세요.',
    },
    intro:
      '<p>매달 월급이 밀리는데, 알고 보니 4대보험도 가입이 안 되어 있었습니다. 회사에 항의하면 "곧 해줄게"라는 말만 반복됩니다. 두 가지 문제를 따로 신고해야 하는지, 한꺼번에 처리할 수 있는지 막막합니다. 4대보험 미가입과 임금체불을 동시에 신고하는 방법을 정리해드립니다.</p>',
    sections: [
      {
        title: '4대보험 미가입과 임금체불, 신고 기관이 다르다',
        content:
          '<p><strong style="color:#1e3a5f">4대보험 미가입과 임금체불은 관할 기관이 다르지만, 동시 진행이 가능합니다. 각각의 신고처와 처리 절차를 구분해서 이해해야 합니다</strong></p>\n<ul>\n<li><strong>임금체불 → 고용노동부(노동청) 진정</strong> — 「근로기준법」 제36조에 따라 사용자는 퇴직 후 14일 이내, 재직 중이라면 약정 지급일에 임금을 지급할 의무가 있습니다. 미지급 시 관할 노동청에 임금체불 진정을 접수합니다. 온라인(고용노동부 민원마당)으로도 신청 가능합니다</li>\n<li><strong>4대보험 미가입 → 국민건강보험공단 + 국민연금공단 신고</strong> — 「국민건강보험법」 제7조, 「국민연금법」 제8조에 따라 상시 1인 이상 사업장은 4대보험 가입 의무가 있습니다. 미가입 확인 시 각 공단에 직권 가입을 요청할 수 있고, 사용자에게는 과태료가 부과됩니다</li>\n<li><strong>동시 진행 전략</strong> — 노동청에 임금체불 진정을 접수하면서, 진정서에 "4대보험 미가입 사실도 확인 바랍니다"라고 기재하면 근로감독관이 사업장 조사 시 함께 확인합니다. 별도로 건강보험공단에도 신고하면 이중으로 압박이 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임금체불은 노동청 / 4대보험은 공단, 동시 진행 가능</blockquote>',
      },
      {
        title: '동시 신고 전 반드시 확보해야 할 증거 5가지',
        content:
          '<p><strong style="color:#1e3a5f">신고 전에 증거를 확보해야 근로감독관 조사가 원활하게 진행됩니다. 회사를 나간 뒤에는 자료 확보가 어려우므로 재직 중에 미리 준비하세요</strong></p>\n<ul>\n<li><strong>근로계약서 사본</strong> — 근로조건과 임금 약정을 증명합니다. 서면 계약서가 없다면 구두 합의 내용이 담긴 카카오톡, 문자 메시지도 증거가 됩니다</li>\n<li><strong>급여명세서 또는 통장 입금 내역</strong> — 실제 지급받은 금액과 지급일을 증명합니다. 최소 6개월치를 확보하세요. 통장 거래내역은 은행 앱에서 PDF로 출력할 수 있습니다</li>\n<li><strong>근무 기록(출퇴근 기록, 근무표)</strong> — 실제 근로를 제공했다는 사실을 증명합니다. 회사 출입 기록, 업무 메신저 로그, CCTV 기록 요청도 가능합니다</li>\n<li><strong>4대보험 가입 이력 확인서</strong> — 국민건강보험공단 홈페이지에서 "자격득실 확인서"를 발급받아 미가입 상태를 확인합니다. 이 서류가 미가입 사실의 직접 증거입니다</li>\n<li><strong>회사 측 대화 기록</strong> — "곧 가입해줄게", "다음 달에 밀린 급여 줄게" 등의 약속이 담긴 대화 내용은 사용자의 의무 인정 증거로 활용됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 신고 가능 여부와 예상 절차를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고 후 진행 절차와 회사의 불이익',
        content:
          '<p><strong style="color:#1e3a5f">동시 신고가 접수되면 회사는 임금체불에 대한 형사처벌과 4대보험 미가입에 대한 과태료를 동시에 부담하게 됩니다</strong></p>\n<ul>\n<li><strong>임금체불 처리 절차</strong> — 진정 접수 후 약 3~4주 내에 근로감독관이 출석 요구서를 발송합니다. 사용자가 체불 사실을 인정하면 시정 지시(14일 이내 지급), 불이행 시 사법 처리(「근로기준법」 제109조, 3년 이하 징역 또는 3천만원 이하 벌금)로 진행됩니다</li>\n<li><strong>4대보험 미가입 제재</strong> — 건강보험 미가입 시 500만원 이하 과태료(「국민건강보험법」 제119조), 국민연금 미가입 시 신고 불이행에 대한 과태료가 부과됩니다. 공단이 직권으로 가입 처리하며, 사용자가 밀린 보험료를 소급 납부해야 합니다</li>\n<li><strong>추가 구제 방법</strong> — 체불 금액이 크거나 회사가 시정 지시를 이행하지 않으면, 노동청 조사 결과를 기초로 민사소송(체불임금 청구소송)을 제기할 수 있습니다. 이때 노동청 진정 기록은 유력한 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 증거 확보 → 노동청 진정 + 공단 신고 → 감독관 조사 → 시정 지시/사법 처리</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2023다206138 (2024.10.25)',
        summary:
          '대법원 2023다206138 사건(2024.10.25 선고)에서 법원은 정액사납금제 택시운전기사의 소정근로시간을 산정할 때 최저임금법 특례 조항에 따라 노사가 합의한 소정근로시간의 효력을 판단해야 한다고 판시했습니다.',
        takeaway:
          '근로계약서에 기재된 근로시간과 실제 근로시간이 다르면 임금 산정에 직접 영향을 미칩니다. 4대보험 미가입 사업장에서는 실제 근로시간을 입증할 수 있는 자료가 더욱 중요하므로, 출퇴근 기록과 업무 기록을 가능한 한 확보하세요.',
      },
    ],
    faq: [
      {
        question: '4대보험 미가입인데 재직 중에 신고하면 불이익을 받나요?',
        answer:
          '<strong>법적으로 신고를 이유로 한 불이익 조치는 금지됩니다.</strong> 「근로기준법」 제104조 제2항에 따라 사용자가 신고를 이유로 해고나 불이익을 주면 2년 이하의 징역 또는 2천만원 이하의 벌금에 처해집니다. 불이익 조치를 받았다면 부당해고 구제신청도 가능합니다.',
      },
      {
        question: '4대보험에 소급 가입되면 제가 내야 할 보험료도 있나요?',
        answer:
          '<strong>근로자 부담분은 납부해야 합니다.</strong> 4대보험료는 사용자와 근로자가 각각 절반씩 부담합니다. 소급 가입 시 근로자 부담분이 발생하지만, 사용자가 그동안 공제하지 않은 금액이므로 일시 공제가 아닌 분할 납부를 요청할 수 있습니다.',
      },
      {
        question: '알바도 4대보험 가입 대상인가요?',
        answer:
          '<strong>주 15시간 이상, 1개월 이상 근무하면 가입 대상입니다.</strong> 「국민건강보험법 시행령」에 따라 월 60시간(주 15시간) 이상 근로하는 근로자는 4대보험 의무 가입 대상입니다. 일용직이라도 1개월 이상 계속 근무하면 해당됩니다.',
      },
      {
        question: '임금체불과 4대보험 미가입을 한 번에 신고할 수 있는 서식이 있나요?',
        answer:
          '<strong>별도 서식은 없지만, 노동청 진정서 한 장에 두 가지를 함께 기재할 수 있습니다.</strong> 고용노동부 민원마당에서 "임금체불 진정서"를 작성할 때 "기타 사항"란에 4대보험 미가입 사실을 기재하면, 근로감독관이 사업장 조사 시 함께 확인합니다.',
      },
      {
        question: '퇴사 후에도 4대보험 미가입 신고가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 퇴사 후에도 국민건강보험공단이나 국민연금공단에 소급 가입을 요청할 수 있습니다. 다만 자격득실 확인서와 근무 사실을 증명할 자료(근로계약서, 급여 이체 내역 등)를 함께 제출해야 처리가 빠릅니다.',
      },
    ],
    cta: {
      text: '4대보험 미가입·임금체불 동시 신고 무료 AI 상담',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 어디부터 시작해야 하나요', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '부당해고 대응 첫걸음', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 16. retirement / retirement-pay-labor-report-vs-civil-claim
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-pay-labor-report-vs-civil-claim',
    keyword: '퇴직금 노동청 신고 민사청구 차이',
    questionKeyword: '퇴직금 못 받았을 때 노동청 신고와 민사소송 중 뭐가 먼저인가요?',
    ctaKeyword: '퇴직금 노동청 신고 vs 민사청구',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 미지급 노동청 신고 vs 민사청구 3가지 차이 | 로앤가이드',
      description:
        '퇴직금을 받지 못해 노동청 신고와 민사소송 중 뭘 먼저 해야 할지 고민이라면, 두 방법의 차이와 순서 전략을 지금 확인하세요.',
    },
    intro:
      '<p>퇴사한 지 한 달이 넘었는데 퇴직금이 입금되지 않습니다. 회사에 연락하면 "좀 더 기다려라"는 말만 반복합니다. 인터넷 검색을 해보니 노동청 신고, 민사소송, 지급명령 등 방법이 여러 가지인데, 어떤 것을 먼저 해야 할지 혼란스럽습니다. 상황별 최적의 순서를 정리해드립니다.</p>',
    sections: [
      {
        title: '노동청 진정과 민사청구, 핵심 차이 3가지',
        content:
          '<p><strong style="color:#1e3a5f">같은 퇴직금 미지급 문제라도 노동청 진정과 민사소송은 성격이 완전히 다릅니다. 각각의 장단점을 이해하고 전략을 세워야 합니다</strong></p>\n<ul>\n<li><strong>노동청 진정(행정 구제)</strong> — 비용이 무료이고, 접수 후 약 3~4주 내에 근로감독관이 조사를 시작합니다. 사용자에게 시정 지시를 하고, 불이행 시 형사고발(3년 이하 징역 또는 3천만원 이하 벌금)로 압박합니다. 단, 강제로 돈을 받아주는 절차가 아닙니다</li>\n<li><strong>민사소송(사법 구제)</strong> — 법원에 소장을 제출하여 판결로 강제 집행까지 가능합니다. 소액사건(3천만원 이하)은 1회 변론으로 끝나는 경우도 있습니다. 다만 인지대·송달료 등 비용이 발생하고 판결까지 2~6개월 소요됩니다</li>\n<li><strong>지급명령(간이 절차)</strong> — 상대방이 다투지 않을 것으로 예상되면 지급명령 신청이 가장 빠릅니다. 비용이 소송의 1/10 수준이고, 상대방이 2주 이내에 이의하지 않으면 확정 판결과 같은 효력이 발생합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 노동청 = 무료 + 형사 압박 / 민사 = 강제집행 가능 / 지급명령 = 빠르고 저렴</blockquote>',
      },
      {
        title: '상황별 최적 순서 전략',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 미지급의 원인에 따라 최적의 대응 순서가 달라집니다. 아래 3가지 유형 중 본인 상황에 맞는 전략을 선택하세요</strong></p>\n<ul>\n<li><strong>유형 1: 회사가 돈이 있는데 안 주는 경우</strong> — 노동청 진정을 먼저 접수하세요. 근로감독관의 시정 지시만으로도 80% 이상이 해결됩니다. 형사처벌 압박이 가장 효과적인 유형입니다</li>\n<li><strong>유형 2: 퇴직금 금액에 다툼이 있는 경우</strong> — 노동청은 금액 산정 분쟁을 해결해주지 않습니다. 이 경우 민사소송이나 노동위원회 체불임금 확인 절차를 먼저 진행하세요. 평균임금 산정 기준에 대해 법원의 판단을 받아야 합니다</li>\n<li><strong>유형 3: 회사가 폐업했거나 재산이 없는 경우</strong> — 노동청 진정과 동시에 「임금채권보장법」에 따른 체불 사업주 확인원을 발급받아 대한민국 정부에 대지급금을 신청하세요. 최대 1천만원까지 정부가 대신 지급합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 상황에 맞는 최적 대응 순서를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '노동청 진정과 민사소송 병행 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">두 절차를 동시에 진행할 수도 있습니다. 다만 병행 시 알아두어야 할 점이 있습니다</strong></p>\n<ul>\n<li><strong>병행 가능 여부</strong> — 노동청 진정과 민사소송은 성격이 다른 절차이므로 동시에 진행할 수 있습니다. 노동청은 형사적 제재, 민사소송은 금전 회수를 목적으로 하므로 서로 영향을 주지 않습니다</li>\n<li><strong>지연이자 청구</strong> — 「근로기준법」 제37조에 따라 퇴직일로부터 14일이 지나면 미지급 퇴직금에 대해 연 20%의 지연이자가 발생합니다. 민사소송에서 이 지연이자를 함께 청구하세요. 원금 500만원이면 1년 지연이자만 100만원입니다</li>\n<li><strong>소멸시효 주의</strong> — 퇴직금 청구권의 소멸시효는 3년입니다(「근로자퇴직급여보장법」 제10조). 노동청 진정으로 시간을 끌다가 소멸시효가 지나면 민사소송에서도 패소할 수 있습니다. 2년 이내에 민사 절차를 시작하는 것이 안전합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 노동청 진정 먼저 + 1개월 내 미해결 시 민사 병행 → 3년 시효 주의</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2022다255454 (2026.01.29)',
        summary:
          '대법원 2022다255454 사건(2026.01.29 선고)에서 법원은 매년 당기순이익 실현을 지급조건으로 하여 지급된 특별성과급은 경영성과의 사후적 분배에 해당하므로 평균임금 산정의 기초가 되는 임금으로 볼 수 없다고 판시했습니다.',
        takeaway:
          '퇴직금 산정 시 어떤 금품이 평균임금에 포함되는지는 법원의 판단이 필요할 수 있습니다. 금액 다툼이 있는 경우 노동청 진정만으로는 해결이 어려우므로, 민사소송을 통해 정확한 퇴직금 금액을 확정받는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '노동청 진정 후 회사가 시정 지시를 무시하면 어떻게 되나요?',
        answer:
          '<strong>사법 처리(형사고발)로 전환됩니다.</strong> 근로감독관의 시정 지시를 이행하지 않으면 검찰에 송치되어 「근로기준법」 제109조에 따라 3년 이하의 징역 또는 3천만원 이하의 벌금에 처해질 수 있습니다. 다만 형사 처벌이 있더라도 퇴직금 자체를 받으려면 별도의 민사 절차가 필요합니다.',
      },
      {
        question: '노동청 진정에 비용이 드나요?',
        answer:
          '<strong>완전히 무료입니다.</strong> 고용노동부 민원마당에서 온라인 접수가 가능하고, 관할 노동청에 직접 방문하여 접수할 수도 있습니다. 변호사 없이도 본인이 직접 진정서를 작성하여 접수할 수 있습니다.',
      },
      {
        question: '소액사건 소송을 직접 할 수 있나요?',
        answer:
          '<strong>3천만원 이하의 퇴직금 청구는 소액사건으로 변호사 없이도 가능합니다.</strong> 대한법률구조공단(132)에서 무료 법률 상담과 소장 작성 도움을 받을 수 있고, 소송 비용도 인지대와 송달료 합산 약 3~5만원 수준입니다.',
      },
      {
        question: '체불 사업주 확인원은 어디서 발급받나요?',
        answer:
          '<strong>노동청 진정 후 근로감독관에게 발급을 요청합니다.</strong> 체불 사실이 확인되면 근로감독관이 "체불 사업주 확인원"을 발급해주고, 이를 근로복지공단에 제출하면 대지급금(최대 1천만원)을 신청할 수 있습니다.',
      },
      {
        question: '퇴직금 소멸시효 3년은 언제부터 계산되나요?',
        answer:
          '<strong>퇴직일 다음 날부터 3년입니다.</strong> 「근로자퇴직급여보장법」 제10조에 따라 퇴직금 청구권은 퇴직일로부터 3년간 행사하지 않으면 시효로 소멸합니다. 노동청 진정을 해도 소멸시효는 중단되지 않으므로, 시효가 임박하면 가능한 한 민사소송을 제기하세요.',
      },
    ],
    cta: {
      text: '퇴직금 미지급 대응 전략 무료 AI 상담',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 14일 규정 상세 안내', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 계산 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
    ],
  },

  // ───────────────────────────────────────────
  // 17. retirement / retirement-pay-included-excluded-items
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-pay-included-excluded-items',
    keyword: '퇴직금 계산 포함 제외 항목',
    questionKeyword: '퇴직금 계산할 때 어떤 돈이 포함되고 제외되나요?',
    ctaKeyword: '퇴직금 포함 제외 항목',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 포함되는 돈 vs 제외되는 돈 7가지 구분법 | 로앤가이드',
      description:
        '퇴직금 계산 시 상여금, 식대, 교통비가 포함되는지 헷갈린다면, 포함·제외 항목 7가지 구분 기준을 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금 정산서를 받았는데 금액이 예상보다 적습니다. 매달 받던 식대와 교통비가 빠져 있고, 분기마다 받던 상여금도 반영되지 않았습니다. 회사에 물어보니 "그건 퇴직금 계산에 안 들어가요"라고 합니다. 정말 그런 걸까요? 퇴직금 산정 시 포함·제외 항목을 명확히 정리해드립니다.</p>',
    sections: [
      {
        title: '퇴직금 계산의 기본 원리: 평균임금이란',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 "1일 평균임금 × 30일 × (재직일수 ÷ 365)"로 계산됩니다. 핵심은 "평균임금에 무엇이 포함되느냐"입니다</strong></p>\n<ul>\n<li><strong>평균임금의 정의</strong> — 「근로기준법」 제2조 제1항 제6호에 따라 평균임금이란 "이를 산정하여야 할 사유가 발생한 날 이전 3개월간에 그 근로자에게 지급된 임금의 총액을 그 기간의 총일수로 나눈 금액"입니다</li>\n<li><strong>임금의 범위</strong> — 임금이란 사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품을 말합니다. 명칭에 관계없이 ①근로의 대가성 ②정기성 ③일률성 ④고정성 요건을 모두 충족하면 임금에 해당할 소지가 있습니다</li>\n<li><strong>판단 기준</strong> — 해당 금품의 명칭이 아니라 실질적 성격으로 판단합니다. 회사가 "복리후생비"라고 이름 붙였더라도 실질이 근로의 대가라면 평균임금에 포함됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직금 = 평균임금 기반 / 평균임금 = 퇴직 전 3개월 임금총액 ÷ 총일수</blockquote>',
      },
      {
        title: '포함되는 항목 vs 제외되는 항목',
        content:
          '<p><strong style="color:#1e3a5f">같은 이름이라도 지급 방식에 따라 포함 여부가 달라집니다. 대표적인 항목별로 정리합니다</strong></p>\n<ul>\n<li><strong>포함 ✅ 기본급</strong> — 근로의 대가로 매월 고정 지급되는 금액으로, 가능한 한 포함됩니다</li>\n<li><strong>포함 ✅ 고정 수당(식대·교통비·직책수당)</strong> — 전 직원에게 일률적·정기적으로 지급되면 평균임금에 포함됩니다. 월 20만원 고정 식대, 월 10만원 교통비가 대표적입니다</li>\n<li><strong>포함 ✅ 정기 상여금</strong> — 취업규칙이나 단체협약에 따라 매 분기 또는 매년 정기적으로 지급되는 상여금은 포함됩니다. 지급 조건이 사전에 확정된 경우입니다</li>\n<li><strong>포함 ✅ 연장·야간·휴일 근로수당</strong> — 실제 근로의 대가로 지급되므로 포함됩니다</li>\n<li><strong>제외 ❌ 경영성과급(인센티브)</strong> — 경영 실적에 따라 지급 여부와 금액이 결정되는 성과급은 근로의 대가가 아닌 성과 분배이므로 제외될 수 있습니다</li>\n<li><strong>제외 ❌ 실비 변상 성격의 금품</strong> — 출장비, 접대비 등 실비를 보전하는 금품은 근로의 대가가 아니므로 제외됩니다</li>\n<li><strong>제외 ❌ 일시적·우발적 금품</strong> — 경조사비, 포상금 등 일시적으로 지급된 금품은 정기성·고정성이 없으므로 제외됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 급여 항목별 포함 여부를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 퇴직금을 적게 계산했을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 정산서를 받으면 가능한 한 급여명세서와 대조해보세요. 포함 항목이 누락되었다면 차액을 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>급여명세서 대조</strong> — 퇴직 전 3개월간의 급여명세서를 꺼내 항목별로 합산하세요. 기본급 + 고정수당 + 정기상여금(3개월 환산분)이 정산서에 반영되어 있는지 확인합니다</li>\n<li><strong>차액 산출 후 내용증명 발송</strong> — 포함되어야 할 항목이 빠져 있다면, 정확한 차액을 계산하여 회사에 내용증명을 보내세요. "평균임금 산정 시 누락된 항목이 있으므로 14일 이내에 차액을 지급해주십시오"라는 내용입니다</li>\n<li><strong>미해결 시 노동청 진정 또는 소송</strong> — 회사가 차액 지급을 거부하면 관할 노동청에 임금체불 진정을 접수하거나, 퇴직금 차액 청구소송을 제기할 수 있습니다. 급여명세서, 근로계약서, 취업규칙이 핵심 증거입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 급여명세서 대조 → 차액 산출 → 내용증명 → 노동청 진정/소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2021다248299 (2026.01.29)',
        summary:
          '대법원 2021다248299 사건(2026.01.29 선고)에서 법원은 목표 인센티브는 계속적·정기적으로 지급되고 사용자에게 지급의무가 있어 평균임금에 포함되는 임금에 해당하지만, 성과 인센티브(EVA 기반)는 경영성과의 분배에 해당하여 임금으로 볼 수 없다고 판시했습니다.',
        takeaway:
          '같은 "인센티브"라는 이름이라도 지급 기준에 따라 퇴직금 포함 여부가 달라집니다. 고정적·정기적으로 지급되면 포함, 경영 실적에 따라 유동적이면 제외될 가능성이 높습니다. 본인의 급여 항목을 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '식대가 카드로 지급되면 퇴직금에 포함되나요?',
        answer:
          '<strong>현금이든 카드든 지급 형태와 관계없이 포함될 수 있습니다.</strong> 전 직원에게 매월 정기적·일률적으로 지급되는 식대라면 명칭이나 지급 형태와 무관하게 평균임금에 포함됩니다. 다만 실비 정산 방식(영수증 기반)이면 제외됩니다.',
      },
      {
        question: '연차수당은 퇴직금 계산에 포함되나요?',
        answer:
          '<strong>퇴직 전 3개월 이내에 지급된 미사용 연차수당은 포함됩니다.</strong> 다만 퇴직으로 인해 발생하는 연차수당(퇴직 정산분)은 "퇴직으로 인해 비로소 발생한 금품"이므로 평균임금 산정에서 제외하는 것이 원칙입니다.',
      },
      {
        question: '상여금이 매년 1회만 지급되는데 퇴직금에 포함되나요?',
        answer:
          '<strong>연 1회라도 정기적으로 지급되면 포함됩니다.</strong> 취업규칙이나 단체협약에 지급 근거가 있고, 매년 정기적으로 지급된 상여금이면 평균임금에 포함됩니다. 다만 3개월 환산(연간 상여금 ÷ 12 × 3)으로 계산합니다.',
      },
      {
        question: '회사가 퇴직금 계산에 넣지 않은 항목을 몇 년 전까지 소급해서 받을 수 있나요?',
        answer:
          '<strong>퇴직금 청구권의 소멸시효는 퇴직일로부터 3년입니다.</strong> 3년 이내라면 차액 전체를 청구할 수 있습니다. 다만 소멸시효가 지나면 회수가 불가능하므로, 퇴직 후 빠른 시일 내에 정산서를 확인하는 것이 중요합니다.',
      },
    ],
    cta: {
      text: '퇴직금 포함 항목 분석 무료 AI 상담',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 산정 기준과 체불 대응', href: '/guide/retirement/retirement-pay-standard-and-nonpayment' },
      { label: '퇴직금 14일 규정 상세 안내', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '임금체불 지연이자 청구 방법', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

  // ───────────────────────────────────────────
  // 18. dismissal / unfair-dismissal-retrial-after-rejection
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-retrial-after-rejection',
    keyword: '부당해고 구제신청 기각 재심 신청',
    questionKeyword: '부당해고 구제신청 기각됐을 때 재심 신청은 어떻게 하나요?',
    ctaKeyword: '부당해고 재심 신청',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부당해고 구제신청 기각 후 재심 신청 4단계 절차 | 로앤가이드',
      description:
        '부당해고 구제신청이 기각되어 막막하다면, 재심 신청 기한과 4단계 절차 및 전략을 지금 확인하세요.',
    },
    intro:
      '<p>지방노동위원회에 부당해고 구제신청을 했는데 기각 결정이 나왔습니다. "정당한 해고"라는 판정문을 받으니 억울하고 막막합니다. 포기해야 할까요? 아닙니다. 중앙노동위원회에 재심을 신청할 수 있고, 그래도 안 되면 행정소송까지 가능합니다. 재심 절차와 전략을 정리해드립니다.</p>',
    sections: [
      {
        title: '재심 신청 기한과 요건 확인',
        content:
          '<p><strong style="color:#1e3a5f">재심 신청은 기한이 매우 짧습니다. 판정서를 받은 후 바로 행동해야 합니다</strong></p>\n<ul>\n<li><strong>재심 신청 기한: 10일</strong> — 「노동위원회법」 제26조에 따라 지방노동위원회의 초심 판정서를 송달받은 날로부터 10일 이내에 중앙노동위원회에 재심을 신청해야 합니다. 이 기한은 엄격하게 적용되며, 1일이라도 넘기면 각하됩니다</li>\n<li><strong>재심 신청 방법</strong> — 중앙노동위원회 홈페이지(www.nlrc.go.kr)에서 온라인 접수하거나, 서면으로 직접 제출합니다. 재심신청서에는 초심 판정의 문제점과 재심을 구하는 이유를 구체적으로 기재해야 합니다</li>\n<li><strong>비용</strong> — 노동위원회 구제신청과 재심 신청은 모두 무료입니다. 변호사 없이도 본인이 직접 신청할 수 있지만, 재심 단계에서는 전문가 도움을 받는 것이 유리합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 판정서 송달 후 10일 이내 재심 신청 → 기한 엄수 필수</blockquote>',
      },
      {
        title: '재심에서 뒤집기 위한 4가지 전략',
        content:
          '<p><strong style="color:#1e3a5f">재심은 단순히 같은 주장을 반복하는 것이 아닙니다. 초심에서 부족했던 부분을 보완하는 전략이 필요합니다</strong></p>\n<ul>\n<li><strong>초심 판정문 분석</strong> — 판정문의 "판단" 부분을 꼼꼼히 읽으세요. 어떤 사실관계에서 어떤 법리로 기각되었는지를 파악해야 반박 논리를 세울 수 있습니다</li>\n<li><strong>새로운 증거 제출</strong> — 초심에서 제출하지 못한 증거가 있다면 재심에서 보충할 수 있습니다. 동료의 진술서, 추가 녹음 파일, CCTV 자료 등 해고 사유의 부당성을 입증할 증거를 확보하세요</li>\n<li><strong>법리 보충</strong> — 초심에서 간과된 판례나 법리가 있다면 재심신청서에 구체적으로 인용하세요. 대법원 판례를 근거로 "초심 판정이 잘못된 법리를 적용했다"고 주장하는 것이 효과적입니다</li>\n<li><strong>금전보상명령 신청 병행</strong> — 원직복직이 현실적으로 어려운 경우, 재심에서 금전보상명령을 함께 신청할 수 있습니다. 해고기간 동안의 임금 상당액 이상을 받을 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 재심 가능성과 전략을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재심도 기각되면: 행정소송으로의 전환',
        content:
          '<p><strong style="color:#1e3a5f">재심에서도 기각되면 포기할 필요 없습니다. 행정법원에 소송을 제기할 수 있습니다</strong></p>\n<ul>\n<li><strong>행정소송 제기 기한</strong> — 중앙노동위원회 재심 판정서를 송달받은 날로부터 15일 이내에 행정소송을 제기해야 합니다(「근로기준법」 제31조). 관할 법원은 서울행정법원 또는 사업장 소재지 관할 행정법원입니다</li>\n<li><strong>행정소송의 장점</strong> — 노동위원회와 달리 법원은 증인 신문, 감정 등 엄격한 증거 조사를 합니다. 노동위원회에서 인정받지 못한 사실관계도 법원에서 뒤집힐 수 있습니다</li>\n<li><strong>법률 구조 활용</strong> — 행정소송은 전문적이므로 대한법률구조공단(132)이나 대한변호사협회 법률구조재단의 무료 법률 대리를 활용하세요. 소득 기준을 충족하면 변호사 비용 없이 소송을 진행할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전체 흐름: 초심(지노위) → 재심(중노위, 10일) → 행정소송(15일) → 항소·상고</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2024두54683 (2025.03.13)',
        summary:
          '대법원 2024두54683 사건(2025.03.13 선고)에서 법원은 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급하더라도 근로자가 금전보상명령을 받을 구제이익은 소멸하지 않는다고 판시했습니다.',
        takeaway:
          '재심 단계에서 회사가 원직복직을 제안하더라도 금전보상명령을 포기할 필요가 없습니다. 원직복직 후에도 추가적인 금전보상을 받을 수 있으므로, 재심신청서에 금전보상명령도 함께 기재하세요.',
      },
    ],
    faq: [
      {
        question: '재심에서 뒤집히는 확률이 어느 정도인가요?',
        answer:
          '<strong>통계적으로 재심에서 초심 결과가 변경되는 비율은 약 15~20%입니다.</strong> 낮아 보이지만, 새로운 증거를 보충하거나 법리를 보완한 경우에는 변경 가능성이 높아집니다. 특히 초심에서 절차적 하자(충분한 심리 미진행 등)가 있었다면 재심에서 유리합니다.',
      },
      {
        question: '재심 신청 중에도 실업급여를 받을 수 있나요?',
        answer:
          '<strong>해고된 상태이므로 실업급여 수급 요건을 충족하면 받을 수 있습니다.</strong> 구제신청이나 재심 진행 중이라도 실업급여 수급에는 영향이 없습니다. 다만 원직복직 명령이 확정되면 실업급여를 반환해야 할 수 있으므로, 고용센터에 상황을 설명하세요.',
      },
      {
        question: '재심 기한 10일에 주말·공휴일도 포함되나요?',
        answer:
          '<strong>10일은 역일 기준이므로 주말과 공휴일도 포함됩니다.</strong> 다만 마지막 날이 공휴일이면 그 다음 날까지 연장됩니다. 판정서를 받은 날 바로 준비를 시작하는 것이 안전합니다.',
      },
      {
        question: '초심에서 변호사 없이 했는데 재심에서는 변호사가 필요한가요?',
        answer:
          '<strong>재심은 법리 다툼이 중요하므로 전문가 도움을 받는 것을 권합니다.</strong> 대한법률구조공단에서 무료 법률 대리를 지원받을 수 있고, 공인노무사의 도움도 효과적입니다. 재심은 기록 중심으로 심리하므로 서면 준비가 핵심입니다.',
      },
      {
        question: '재심에서 새로운 해고 사유를 회사가 추가할 수 있나요?',
        answer:
          '<strong>원칙적으로 초심에서 주장하지 않은 새로운 해고 사유를 재심에서 추가하는 것은 제한됩니다.</strong> 다만 초심에서 이미 제출된 증거에서 도출되는 사유라면 심리 범위에 포함될 수 있으므로, 재심신청서에서 "회사의 해고 사유는 초심에서 주장된 것에 한정되어야 한다"고 명시하는 것이 좋습니다.',
      },
    ],
    cta: {
      text: '부당해고 재심 전략 무료 AI 상담',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 구제신청서 작성법', href: '/guide/dismissal/unfair-dismissal-relief-application-form' },
      { label: '부당해고 대응 첫걸음', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고 사유 확인 요청 템플릿', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '해고예고수당 계산법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 19. dismissal / resignation-agreement-5-unfavorable-clauses
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'resignation-agreement-5-unfavorable-clauses',
    keyword: '권고사직 합의서 불리한 조항',
    questionKeyword: '권고사직 합의서에서 어떤 조항이 불리한가요?',
    ctaKeyword: '권고사직 합의서 불리한 조항 확인',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '권고사직 합의서 불리한 조항 5가지 체크리스트 | 로앤가이드',
      description:
        '권고사직 합의서에 사인하라는 압박을 받고 있다면, 절대 서명하면 안 되는 불리한 조항 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>인사팀에서 "합의서에 서명만 하면 원만하게 처리해줄게"라며 A4 두 장짜리 합의서를 내밀었습니다. 빨리 서명하라는 분위기에 눌려 읽지도 않고 사인하려 했지만, 잠깐 멈추고 내용을 봤습니다. 그 안에 당신의 퇴직금, 실업급여, 미래 소송권까지 포기시키는 조항이 숨어 있을 수 있습니다.</p>',
    sections: [
      {
        title: '절대 서명하면 안 되는 불리한 조항 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 조항이 합의서에 포함되어 있다면 서명을 보류하고 전문가 검토를 받으세요. 서명 후에는 번복이 매우 어렵습니다</strong></p>\n<ul>\n<li><strong>1. 포괄적 권리포기 조항</strong> — "향후 일체의 민·형사상 청구를 포기한다"는 문구입니다. 이 조항에 서명하면 퇴직금 차액, 미지급 수당, 부당해고 구제신청까지 모두 포기하게 됩니다. 가능한 한 삭제하거나 "본 합의에서 정한 사항에 한한다"로 범위를 제한하세요</li>\n<li><strong>2. 자발적 사직 기재</strong> — 이직 사유가 "자발적 사직"으로 기재되면 실업급여 수급이 불가능합니다. 가능한 한 "회사 권고에 의한 퇴직" 또는 "경영상 사유에 의한 이직"으로 명시되어야 합니다</li>\n<li><strong>3. 비밀유지 + 위약금 조항</strong> — "퇴직 경위를 제3자에게 공개할 경우 위약금 ○○만원을 지급한다"는 조항입니다. 과도한 비밀유지 의무는 향후 소송에서 증거 제출을 방해하고, 동료와의 정보 공유도 차단합니다</li>\n<li><strong>4. 퇴직금 정산 포기 또는 모호한 정산 조항</strong> — "퇴직금을 포함한 일체의 정산을 완료했음을 확인한다"는 문구입니다. 실제 퇴직금이 입금되지 않았는데도 서명하면 나중에 청구하기 어려워집니다. 구체적인 금액과 지급일이 명시되어야 합니다</li>\n<li><strong>5. 경업금지 조항</strong> — "퇴직 후 ○년간 동종업계에 취업하지 않는다"는 조항입니다. 보상 없는 경업금지는 무효일 가능성이 높지만, 서명 자체가 향후 취업에 심리적 압박이 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 5가지: 포괄 포기 / 자발적 사직 / 비밀유지+위약금 / 정산 모호 / 경업금지</blockquote>',
      },
      {
        title: '합의서에 반드시 포함되어야 할 유리한 조항',
        content:
          '<p><strong style="color:#1e3a5f">합의서는 일방적으로 불리한 내용만 담길 필요가 없습니다. 아래 항목을 추가 요청하세요</strong></p>\n<ul>\n<li><strong>퇴직금·미지급 수당 구체적 명시</strong> — 퇴직금 금액, 미사용 연차수당, 미지급 연장근로수당 등 정산 항목과 금액을 구체적으로 기재하세요. "추후 정산"이라는 모호한 표현 대신 "○년 ○월 ○일까지 ○○원을 계좌로 지급한다"고 명확히 해야 합니다</li>\n<li><strong>이직확인서 기재 사유 명시</strong> — "회사는 고용보험 이직확인서에 \'권고사직(회사 사정에 의한 이직)\'으로 기재한다"는 조항을 넣으세요. 이직확인서 기재 내용은 실업급여 수급을 결정짓습니다</li>\n<li><strong>위로금(퇴직위로금) 협상</strong> — 회사가 해고의 부담을 피하기 위해 권고사직을 제안한 것이므로, 근속 연수에 비례한 위로금(통상 1~3개월분 급여)을 요청할 수 있습니다. 합의서에 위로금 금액과 지급일을 명시하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 합의서 조항별 위험도를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '서명 전에 반드시 확보해야 할 것들',
        content:
          '<p><strong style="color:#1e3a5f">합의서 서명은 되돌리기 매우 어렵습니다. 서명 전에 아래 3가지를 가능한 한 확보하세요</strong></p>\n<ul>\n<li><strong>검토 시간 확보(최소 3일)</strong> — "지금 당장 서명해라"는 압박에 응하지 마세요. 「민법」 제110조에 따라 강박에 의한 의사표시는 취소할 수 있지만, 입증이 어렵습니다. 최소 3일의 검토 기간을 요청하고, 그 사이에 노무사나 변호사의 검토를 받으세요</li>\n<li><strong>합의 과정 기록</strong> — 합의서 교부 과정, 회사의 요구 내용, 압박 상황 등을 녹음하거나 문자로 남기세요. 나중에 합의서 무효를 다툴 때 핵심 증거가 됩니다</li>\n<li><strong>합의서 사본 확보</strong> — 서명 전 합의서 전문을 사진 촬영하거나 사본을 요구하세요. 서명 후에도 서명본 1부를 가능한 한 보관해야 합니다. 회사가 사본 제공을 거부하면, 이 자체가 불리한 조항이 있다는 간접 증거입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절대 원칙: 읽지 않은 합의서에 서명하지 않는다 → 3일 검토 → 전문가 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2025두33276 (2025.10.16)',
        summary:
          '대법원 2025두33276 사건(2025.10.16 선고)에서 법원은 근로자가 구제신청을 할 당시 이미 정년에 이르거나 근로계약이 종료된 경우에는 구제명령을 받을 이익이 소멸한다고 판시했습니다.',
        takeaway:
          '합의서에 서명하여 근로관계가 종료되면, 이후에 부당해고 구제신청을 하더라도 구제이익이 소멸할 수 있습니다. 서명 전에 부당해고 여부를 가능한 한 검토하고, 구제신청을 먼저 해둔 뒤 합의 여부를 결정하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '이미 합의서에 서명했는데 취소할 수 있나요?',
        answer:
          '<strong>강박이나 착오가 있었다면 취소 가능합니다.</strong> 「민법」 제110조에 따라 "서명 안 하면 해고 처리한다", "오늘 안에 서명해라"는 압박 하에 서명했다면 의사표시를 취소할 수 있습니다. 압박 상황의 녹음, 문자, 동료 진술이 증거가 됩니다.',
      },
      {
        question: '합의서에 퇴직금 포기 조항이 있으면 정말 못 받나요?',
        answer:
          '<strong>퇴직금 사전포기 약정은 무효입니다.</strong> 대법원 판례에 따르면 퇴직금은 「근로자퇴직급여보장법」에 의한 법정 청구권이므로, 합의서에 포기 조항이 있더라도 별도로 청구할 수 있습니다.',
      },
      {
        question: '합의서에 서명하면 실업급여를 못 받나요?',
        answer:
          '<strong>합의서에 "권고사직"으로 기재되어 있다면 실업급여를 받을 수 있습니다.</strong> 핵심은 이직확인서의 이직 사유입니다. 합의서에 "자발적 사직"으로 되어 있어도 실제 이직 사유가 권고사직이었다면, 고용센터에서 이의를 제기할 수 있습니다.',
      },
      {
        question: '경업금지 조항에 서명했는데 경쟁사에 취업해도 되나요?',
        answer:
          '<strong>적절한 보상 없는 경업금지 약정은 무효일 가능성이 높습니다.</strong> 대법원 판례에 따르면 경업금지 약정이 유효하려면 ①보호할 가치 있는 영업비밀이 존재하고 ②기간·지역·직종의 범위가 합리적이며 ③적절한 대가가 지급되어야 합니다.',
      },
    ],
    cta: {
      text: '권고사직 합의서 검토 무료 AI 상담',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 대응 첫걸음', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '자발적 사직 vs 해고 구분', href: '/guide/dismissal/voluntary-resignation-vs-dismissal' },
      { label: '해고예고수당 청구', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ───────────────────────────────────────────
  // 20. dismissal / probation-dismissal-unfair-recognition-cases
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'probation-dismissal-unfair-recognition-cases',
    keyword: '수습기간 해고 부당해고 인정',
    questionKeyword: '수습기간에 해고 통보받으면 부당해고로 인정되나요?',
    ctaKeyword: '수습기간 해고 부당해고 인정',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '수습기간 해고, 부당해고 인정되는 4가지 경우 | 로앤가이드',
      description:
        '수습기간 중 해고 통보를 받아 억울하다면, 부당해고로 인정받을 수 있는 4가지 조건을 지금 확인하세요.',
    },
    intro:
      '<p>입사한 지 두 달, 갑자기 "수습 평가 결과가 좋지 않아 계약을 종료한다"는 통보를 받았습니다. 구체적인 평가 기준도 없었고, 피드백 한 번 받은 적 없는데 느닷없는 해고입니다. "수습기간이니까 어쩔 수 없다"고 생각하지 마세요. 수습기간이라도 부당해고가 인정되는 경우가 있습니다.</p>',
    sections: [
      {
        title: '수습기간 해고, 법적으로 허용되는 범위',
        content:
          '<p><strong style="color:#1e3a5f">수습기간이라고 해서 자유롭게 해고할 수 있는 것이 아닙니다. 「근로기준법」에 따른 정당한 사유가 필요합니다</strong></p>\n<ul>\n<li><strong>수습기간의 법적 성격</strong> — 수습기간은 근로자의 업무 적합성을 평가하는 기간입니다. 다만 수습 중이라 해도 근로계약은 이미 성립한 상태이므로, 해고 시 정당한 사유가 필요합니다(「근로기준법」 제23조)</li>\n<li><strong>해고예고 의무 완화</strong> — 3개월 이내의 수습기간에는 30일 전 해고예고 의무가 면제됩니다(「근로기준법」 제35조 제3호). 그러나 이는 예고 의무만 면제하는 것이지, 정당한 사유 없이 해고할 수 있다는 뜻이 아닙니다</li>\n<li><strong>정당성 판단 기준 완화</strong> — 대법원 판례에 따르면 수습기간 중 해고의 정당성은 본채용 근로자보다 다소 넓게 인정될 수 있습니다. 하지만 "다소 넓게"이지 "자유롭게"가 아닙니다. 객관적이고 합리적인 이유가 있어야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수습기간 = 해고예고 면제 ≠ 자유로운 해고 / 정당한 사유 필요</blockquote>',
      },
      {
        title: '부당해고로 인정되는 4가지 경우',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 중 하나라도 해당되면 부당해고를 주장할 수 있습니다. 본인의 상황과 대조해보세요</strong></p>\n<ul>\n<li><strong>1. 평가 기준이 없거나 통보하지 않은 경우</strong> — 수습 평가 기준, 평가 시기, 본채용 전환 조건 등을 미리 고지하지 않았다면 해고의 정당성이 크게 약해집니다. "무엇을 기준으로 부적격 판정을 했는지"를 회사가 입증해야 합니다</li>\n<li><strong>2. 교육·지도 없이 바로 해고한 경우</strong> — 업무 미숙을 이유로 해고하려면, 그 전에 충분한 교육과 개선 기회를 제공했어야 합니다. 교육 없이 "실력이 부족하다"는 이유만으로 해고하면 부당해고로 인정될 가능성이 높습니다</li>\n<li><strong>3. 차별적 해고인 경우</strong> — 같은 수습기간에 있는 다른 직원은 본채용 전환되었는데, 본인만 해고되었다면 합리적 근거가 있어야 합니다. 성별, 나이, 출신 등 차별적 사유에 해당하면 부당해고로 검토될 수 있습니다</li>\n<li><strong>4. 수습기간 경과 후 해고인 경우</strong> — 수습기간이 만료되어 본채용으로 전환된 뒤에 해고한 것이라면, 일반 해고와 동일한 엄격한 기준이 적용됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 수습 해고의 부당성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수습 해고 후 대응 절차 3단계',
        content:
          '<p><strong style="color:#1e3a5f">부당해고라고 판단되면 즉시 행동해야 합니다. 구제신청 기한은 해고일로부터 3개월입니다</strong></p>\n<ul>\n<li><strong>1단계: 해고 사유 서면 요구</strong> — 「근로기준법」 제27조에 따라 해고 시 서면으로 해고 사유와 시기를 통지해야 합니다. 서면 통지가 없으면 그 자체로 부당해고에 해당할 소지가 있습니다. 회사에 서면 해고 통지서를 요구하세요</li>\n<li><strong>2단계: 증거 확보</strong> — 근로계약서(수습 조건 명시 여부), 수습 평가서, 업무 관련 대화 기록, 교육 이수 내역을 확보하세요. 해고 통보 시 대화를 녹음해두면 핵심 증거가 됩니다</li>\n<li><strong>3단계: 부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 관할 지방노동위원회에 구제신청을 접수합니다. 비용은 무료이며, 노동위원회가 해고의 정당성을 판단합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 해고 사유 서면 요구 → 증거 확보 → 3개월 내 구제신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2023두54914 (2026.01.29)',
        summary:
          '대법원 2023두54914 사건(2026.01.29 선고)에서 법원은 근로기준법상 근로자에 해당하는지는 계약의 형식이 아닌 실질에 따라 판단해야 하며, 임금을 목적으로 종속적인 관계에서 근로를 제공했다면 근로자에 해당한다고 판시했습니다.',
        takeaway:
          '수습기간이라 해도, 위촉계약 형식이라 해도, 실질적으로 회사의 지휘·감독을 받으며 근로를 제공했다면 근로기준법상 근로자로 보호받습니다. 계약서 명칭에 관계없이 부당해고 구제신청이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '수습기간이 3개월인데 2개월 만에 해고됐습니다. 해고예고수당을 받을 수 있나요?',
        answer:
          '<strong>3개월 이내 수습 중이므로 해고예고수당은 받을 수 없습니다.</strong> 「근로기준법」 제35조 제3호에 따라 3개월 이내의 수습기간에는 해고예고 의무가 면제됩니다. 다만 해고 자체의 정당성은 별개의 문제이므로, 부당해고 구제신청은 가능합니다.',
      },
      {
        question: '수습기간 중 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>1년 미만 근무 시 퇴직금은 발생하지 않습니다.</strong> 「근로자퇴직급여보장법」 제4조에 따라 퇴직금은 계속근로기간 1년 이상인 근로자에게 지급됩니다. 수습 2~3개월 만에 해고된 경우 퇴직금 대상은 아닙니다.',
      },
      {
        question: '수습기간이 6개월인데 해고예고 없이 해고됐습니다. 예고수당을 받을 수 있나요?',
        answer:
          '<strong>수습기간이 3개월을 초과했으므로 해고예고수당을 받을 수 있습니다.</strong> 수습기간이 3개월을 넘으면 해고예고 의무 면제가 적용되지 않습니다. 30일 전 예고 없이 해고했다면 30일분 통상임금에 해당하는 해고예고수당을 청구하세요.',
      },
      {
        question: '수습 평가서에 서명하라고 하는데 서명해야 하나요?',
        answer:
          '<strong>내용을 확인하고 동의할 수 없는 부분은 의견을 기재하세요.</strong> 수습 평가서에 "이의 없음"으로 서명하면 나중에 부당해고를 다투기 어려워집니다. "위 평가에 동의하지 않음"이라고 기재하거나, 서명을 보류하고 사본을 요청하세요.',
      },
      {
        question: '수습 해고 후에도 실업급여를 받을 수 있나요?',
        answer:
          '<strong>고용보험 가입 기간이 180일 이상이고 비자발적 이직이면 가능합니다.</strong> 수습 2~3개월이면 현 직장만으로는 180일을 채우기 어렵지만, 이전 직장의 피보험 기간을 합산할 수 있습니다. 이전 직장 퇴사일로부터 3년 이내에 현 직장에 입사했다면 합산 가능합니다.',
      },
    ],
    cta: {
      text: '수습 해고 부당해고 여부 무료 AI 상담',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 대응 첫걸음', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 무효 사유 정리', href: '/guide/dismissal/unfair-dismissal-void-cases' },
      { label: '해고 사유 확인 요청 템플릿', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '수습기간 해고 적법성 기준', href: '/guide/dismissal/probation-dismissal-legality' },
      { label: '해고예고수당 계산법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 21. traffic-accident / settlement-offer-dont-accept-immediately-reasons
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'settlement-offer-dont-accept-immediately-reasons',
    keyword: '교통사고 합의금 바로 합의 주의',
    questionKeyword: '교통사고 합의금 제시받았는데 바로 합의하면 안 되나요?',
    ctaKeyword: '교통사고 합의금 바로 합의 주의사항',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '교통사고 합의금, 바로 합의하면 안 되는 이유 5가지 | 로앤가이드',
      description:
        '교통사고 후 보험사에서 합의금을 제시했는데 바로 사인하려는 분이라면, 합의 전 가능한 한 확인할 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>교통사고 후 일주일, 보험회사 담당자가 전화를 합니다. "빨리 합의하시면 ○○만원 드릴게요. 더 미루면 금액이 줄어들 수도 있어요." 아직 허리가 아프고 병원 치료 중인데, 금액이 적정한 건지 판단이 안 됩니다. 보험사의 첫 합의금 제안을 바로 수락하면 절대 안 되는 이유를 정리해드립니다.</p>',
    sections: [
      {
        title: '보험사 합의금을 바로 수락하면 안 되는 5가지 이유',
        content:
          '<p><strong style="color:#1e3a5f">보험사의 첫 제안은 대부분 최저 금액입니다. 아래 5가지를 확인하기 전에는 절대 합의서에 서명하지 마세요</strong></p>\n<ul>\n<li><strong>1. 치료가 끝나지 않았다</strong> — 합의는 치료가 완전히 종결된 후에 해야 합니다. 치료 중에 합의하면 향후 발생하는 추가 치료비, 후유장해 보상을 받을 수 없습니다. 특히 교통사고 후유증은 3~6개월 후에 나타나는 경우가 많습니다</li>\n<li><strong>2. 후유장해 가능성을 확인하지 않았다</strong> — 목·허리 디스크, 관절 손상 등은 후유장해로 인정되면 수백만~수천만원의 추가 보상이 가능합니다. 후유장해 진단은 사고 후 최소 6개월 이후에 받는 것이 일반적입니다</li>\n<li><strong>3. 위자료와 휴업손해가 빠져 있다</strong> — 보험사가 제시하는 합의금에는 종종 위자료(정신적 피해 보상)와 휴업손해(일 못한 기간 소득 보상)가 누락되거나 과소 산정되어 있습니다</li>\n<li><strong>4. 과실비율이 확정되지 않았다</strong> — 과실비율에 따라 보상 금액이 크게 달라집니다. 보험사가 일방적으로 높은 과실비율을 적용한 경우가 많으므로, 교통사고 과실비율 인정 기준표를 확인하세요</li>\n<li><strong>5. 합의 후에는 추가 청구가 불가능하다</strong> — 합의서에 서명하면 "향후 일체의 청구를 포기한다"는 효력이 발생합니다. 합의 후 발견된 부상이나 후유증에 대해 추가 보상을 받을 수 없습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 치료 미완 + 후유장해 미확인 + 항목 누락 + 과실비율 미확정 = 합의 보류</blockquote>',
      },
      {
        title: '적정 합의금을 산정하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">합의금은 여러 항목의 합산입니다. 각 항목을 개별적으로 계산한 뒤 보험사 제안과 비교하세요</strong></p>\n<ul>\n<li><strong>치료비</strong> — 입원비, 통원 치료비, 약제비, 물리치료비 등 실제 발생한 모든 치료비입니다. 향후 예상 치료비도 포함하여 산정해야 합니다</li>\n<li><strong>휴업손해(일실수익)</strong> — 사고로 인해 일하지 못한 기간의 소득 손실입니다. 월 소득 × 치료 기간으로 계산하며, 자영업자는 최근 3개월 매출 기준으로 산정합니다</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 보상입니다. 부상 정도, 입원 기간, 과실비율 등에 따라 산정됩니다. 대한변호사협회 기준표를 참고하면 적정 금액을 가늠할 수 있습니다</li>\n<li><strong>향후 치료비·후유장해 보상</strong> — 후유장해가 인정되면 노동능력상실률에 따라 일실수익을 추가 산정합니다. 장해등급에 따라 수천만원 이상의 차이가 발생합니다</li>\n<li><strong>기타 손해</strong> — 차량 수리비, 렌터카 비용, 교통비, 간병비 등도 합의금에 포함되어야 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 합의금 적정성과 누락 항목을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합의 전에 반드시 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">합의를 서두르라는 보험사의 연락에 흔들리지 마세요. 아래 3가지를 완료한 후에 합의 여부를 결정하세요</strong></p>\n<ul>\n<li><strong>1. 치료 완료 후 종결 소견 받기</strong> — 담당 의사로부터 "치료 종결" 소견을 받은 뒤에 합의를 시작하세요. 특히 MRI, CT 등 정밀 검사를 통해 숨은 부상이 없는지 확인하는 것이 중요합니다</li>\n<li><strong>2. 손해배상금 자동 산정 확인</strong> — 자동차손해배상보장법에 따른 대인배상 기준을 확인하세요. 보험개발원 홈페이지의 "자동차보험 진료수가" 기준으로 본인의 보상 가능 금액을 대략 산출할 수 있습니다</li>\n<li><strong>3. 소멸시효 확인</strong> — 교통사고 손해배상 청구권의 소멸시효는 피해 사실을 안 날로부터 3년, 사고일로부터 5년입니다(「민법」 제766조). 시효가 충분하므로 서두를 필요 없습니다. 다만 3년이 지나면 청구 자체가 불가능하므로 방치해서는 안 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 치료 완료 → 정밀 검사 → 보상 금액 산출 → 비교 후 합의 결정</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2022다287284 (2026.01.29)',
        summary:
          '대법원 2022다287284 사건(2026.01.29 선고)에서 법원은 쌍방과실 교통사고에서 자기차량손해보험에 따라 차량수리비를 보상받은 피보험자가 자기부담금 상당의 손해배상을 상대차량 측에 청구할 수 있는지에 대해, 보험자대위권의 범위와 피보험자의 잔존 손해배상청구권의 관계를 판단했습니다.',
        takeaway:
          '보험사가 처리한 금액 외에도 피해자가 직접 청구할 수 있는 손해가 남아 있을 수 있습니다. 자차보험으로 처리하더라도 자기부담금, 위자료, 휴업손해 등 보험에서 보상받지 못한 부분은 별도로 상대방에게 청구할 수 있으므로, 합의 전에 모든 항목을 확인하세요.',
      },
    ],
    faq: [
      {
        question: '보험사가 "이 금액이 최대"라고 하는데 정말인가요?',
        answer:
          '<strong>보험사의 첫 제안은 최대 금액이 아닌 경우가 대부분입니다.</strong> 보험사 담당자는 회사의 지급 기준 내에서 가능한 적은 금액으로 합의하려 합니다. 항목별로 산정 근거를 요청하고, 누락된 항목이 없는지 확인하세요.',
      },
      {
        question: '합의 없이 소송하면 더 받을 수 있나요?',
        answer:
          '<strong>소송 금액이 합의 제안보다 높은 경우가 많습니다.</strong> 법원은 대한변호사협회 기준표와 실제 손해를 바탕으로 정확히 산정합니다. 다만 소송에는 시간(6개월~1년 이상)과 비용(변호사 비용)이 소요되므로, 합의 금액과 소송 예상 금액을 비교하여 결정하세요.',
      },
      {
        question: '합의서에 서명한 뒤에 후유증이 나타나면 추가 보상을 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 어렵지만, 예측 불가능한 후유장해가 발생한 경우 예외적으로 추가 청구가 가능합니다.</strong> 대법원 판례에 따르면, 합의 당시 예상할 수 없었던 후유증이 발생한 경우 합의의 효력이 미치지 않는다고 보고 있습니다. 다만 입증이 쉽지 않으므로 합의 전에 충분히 치료하는 것이 가장 중요합니다.',
      },
      {
        question: '보험사 담당자와의 통화를 녹음해도 되나요?',
        answer:
          '<strong>당사자 간 통화는 녹음 가능합니다.</strong> 본인이 참여한 통화를 녹음하는 것은 합법입니다. 보험사 담당자의 부당한 합의 압박, 사실과 다른 설명 등을 녹음해두면 향후 분쟁 시 증거가 됩니다.',
      },
      {
        question: '교통사고 합의를 도와주는 무료 기관이 있나요?',
        answer:
          '<strong>한국소비자원, 교통사고 분쟁조정위원회를 활용할 수 있습니다.</strong> 보험 금액에 이의가 있으면 금융감독원 분쟁조정위원회에 조정을 신청할 수 있고, 대한법률구조공단(132)에서 무료 법률 상담도 가능합니다.',
      },
    ],
    cta: {
      text: '교통사고 합의금 적정성 무료 AI 상담',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 실수 방지 가이드', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 보상 절차 안내', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '교통사고 과실비율 분쟁 대응', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '보험사 저가 합의 대응법', href: '/guide/traffic-accident/insurance-lowball-settlement-response' },
      { label: '교통사고 후유증 치료비 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
    ],
  },
];
