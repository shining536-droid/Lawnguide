import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch31: 퇴직금 6개 + 임금체불 5개
// ───────────────────────────────────────────────────────────────────────────────
// 1. retirement-average-wage-dispute — 평균임금 산정 분쟁 대응 (수치기한형)
//    "이 페이지는 평균임금 산정에 불만이 있는 퇴직 근로자의 퇴직금 계산에 포함되어야 할 금품이 빠졌는지 확인하는 상황에서 평균임금 산정 기준과 분쟁 대응 방법을 돕는 페이지다."
// 2. retirement-executive-severance-limit — 임원 퇴직금 한도와 세금 (비교형)
//    "이 페이지는 임원에서 퇴임한 후 퇴직금을 청구하려는 사람의 임원 퇴직금 한도와 세금 문제를 모르는 상황에서 임원 퇴직금 지급 기준과 과다퇴직금 세무 리스크를 돕는 페이지다."
// 3. retirement-teachers-honorary-retirement — 명예퇴직금 계산과 연금 관계 (수치기한형)
//    "이 페이지는 명예퇴직을 고려하는 교원·공무원의 명예퇴직금 산정과 연금 수령 관계를 모르는 상황에서 명예퇴직금 계산법과 연금과의 관계를 돕는 페이지다."
// 4. retirement-dispatch-worker-employer — 파견근로자 퇴직금 청구 상대방 (비교형)
//    "이 페이지는 파견근로자로 근무하다 퇴직한 사람의 파견업체와 사용업체 중 누가 퇴직금을 지급해야 하는지 모르는 상황에서 파견근로자 퇴직금 청구 상대방과 직접고용간주 시 퇴직금 산정을 돕는 페이지다."
// 5. retirement-death-survivors-claim — 사망 퇴직금 유족 청구 (절차형)
//    "이 페이지는 근로자 사망 후 유족이 퇴직금을 청구하려는 상황에서 사망퇴직금 수령 자격과 유족 순위를 모르는 상황에서 사망 퇴직금 청구 절차와 유족 범위를 돕는 페이지다."
// 6. retirement-statute-expired-revival — 소멸시효 도과 후 퇴직금 청구 (상황형)
//    "이 페이지는 퇴직금 소멸시효 3년이 지난 근로자의 이미 시효가 지났는데 받을 방법이 있는지 모르는 상황에서 소멸시효 도과 후에도 퇴직금을 받을 수 있는 예외 사유를 돕는 페이지다."
// 7. unpaid-wage-performance-bonus-claim — 성과급 임금성 미지급 청구 (비교형)
//    "이 페이지는 성과급이 임금인지 아닌지 분쟁 중인 근로자의 회사가 성과급은 임금이 아니라며 지급을 거부하는 상황에서 성과급의 임금성 판단 기준과 청구 방법을 돕는 페이지다."
// 8. unpaid-wage-minimum-wage-comprehensive — 포괄임금 최저임금 미달 차액 청구 (수치기한형)
//    "이 페이지는 포괄임금계약 근로자의 포괄임금이 최저임금에 미달하는지 확인하려는 상황에서 포괄임금 최저임금 미달 판단 방법과 차액 청구를 돕는 페이지다."
// 9. unpaid-wage-practice-as-contract — 회사 관행 수당 중단 시 청구 (상황형)
//    "이 페이지는 회사 관행으로 지급되던 수당이 갑자기 중단된 근로자의 관행이 근로계약의 일부인지 모르는 상황에서 기업 관행의 근로계약 인정 요건과 수당 청구 방법을 돕는 페이지다."
// 10. unpaid-wage-small-amount-lawsuit — 소액 임금체불 소송 전략 (절차형)
//     "이 페이지는 소액 임금체불 피해 근로자의 소액이라 소송이 부담되지만 받아야 하는 상황에서 소액사건 특례와 비용 대비 실효적인 임금 회수 전략을 돕는 페이지다."
// 11. unpaid-wage-employer-statute-bad-faith — 사업주 소멸시효 신의칙 위반 (상황형)
//     "이 페이지는 사업주가 소멸시효를 주장하며 임금 지급을 거부하는 상황의 근로자의 시효 항변이 부당한지 모르는 상황에서 사업주의 소멸시효 항변이 신의칙 위반인 경우를 돕는 페이지다."
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch31RetirementWage: SpokePage[] = [
  // ── 퇴직금 1. 평균임금 산정 분쟁 대응 ──
  {
    domain: 'retirement',
    slug: 'retirement-average-wage-dispute',
    keyword: '퇴직금 평균임금 산정 분쟁',
    questionKeyword: '퇴직금 계산에 빠진 항목이 있는 것 같은데 어떻게 확인하나요?',
    ctaKeyword: '퇴직금 평균임금 산정 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 평균임금 산정 분쟁 — 빠진 항목 5가지 | 로앤가이드',
      description:
        '퇴직금이 생각보다 적게 나왔는데 평균임금에 빠진 항목이 있는지 궁금하다면, 산정 기준과 대응법을 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금을 받았는데 예상보다 수백만원이 적습니다. 인사팀에 확인하니 "성과급과 식대는 평균임금에 포함되지 않는다"는 답변뿐입니다. 정말 그럴까요. 근로기준법 제2조에 따르면 평균임금은 퇴직 전 3개월간 지급된 "임금 총액"을 기준으로 산정하며, 근로의 대상으로 지급된 금품은 명칭에 관계없이 포함되어야 합니다.</p>',
    sections: [
      {
        title: '평균임금에 포함되어야 할 항목',
        content:
          '<p><strong style="color:#1e3a5f">명칭이 아니라 지급의 실질로 판단합니다. 정기적·일률적·고정적으로 지급된 금품은 평균임금에 포함됩니다.</strong></p>\n<ul>\n<li><strong>정기 상여금</strong> — 매 분기 또는 매년 지급되는 상여금이 취업규칙이나 단체협약에 규정되어 있다면 임금에 해당할 소지가 있습니다.</li>\n<li><strong>식대·교통비·직책수당</strong> — 전 직원에게 일률적으로 지급되는 경우 근로의 대상으로 인정될 수 있습니다.</li>\n<li><strong>연장·야간·휴일근로수당</strong> — 실제 발생한 초과근로에 대한 수당은 당연히 포함됩니다.</li>\n<li><strong>성과급(인센티브)</strong> — 지급 조건이 사전에 정해져 있고 계속·반복적으로 지급되었다면 평균임금 산정 기초에 포함됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 회사가 "이건 상여금이니 임금이 아니다"라고 주장해도, 지급의 정기성·일률성·고정성이 인정되면 평균임금에 넣어야 합니다.</blockquote>',
      },
      {
        title: '평균임금에서 제외되는 항목',
        content:
          '<p><strong style="color:#1e3a5f">은혜적·일시적으로 지급된 금품은 평균임금 산정에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>경조사비</strong> — 결혼·출산·사망 등 특정 사유에 따라 1회적으로 지급된 금품은 임금이 아닙니다.</li>\n<li><strong>실비 변상</strong> — 출장비, 주차비 등 실제 비용을 보전하는 금품은 근로의 대상이 아닙니다.</li>\n<li><strong>회사 재량 보너스</strong> — 지급 여부와 금액이 전적으로 사용자 재량에 달린 일시적 보상금은 제외됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 퇴직금에서 빠진 항목이 있는지, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">급여 항목과 지급 내역을 입력하면 평균임금 포함 여부를 무료로 분석합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '평균임금 산정에 이의가 있을 때 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">회사와 협의 → 노동부 진정 → 민사소송 순서로 대응합니다.</strong></p>\n<ol>\n<li><strong>1단계: 급여명세서 확인</strong> — 퇴직 전 3개월 급여명세서에서 누락 항목을 특정합니다. 통장 입금 내역과 대조하세요.</li>\n<li><strong>2단계: 회사에 이의 제기</strong> — 서면으로 구체적 항목과 금액을 명시하여 재산정을 요청합니다.</li>\n<li><strong>3단계: 고용노동부 진정</strong> — 회사가 거부하면 관할 노동지청에 퇴직금 미지급 진정을 제기합니다. 근로감독관이 평균임금 산정의 적정성을 조사합니다.</li>\n<li><strong>4단계: 민사소송</strong> — 진정으로 해결되지 않으면 퇴직금 차액 지급 청구 소송을 제기합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 급여명세서, 근로계약서, 취업규칙, 통장 거래내역이 핵심 증거입니다. 퇴직 전에 가능한 한 확보하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 관행과 평균임금 산정 기준',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업의 내부 관행이 근로계약 내용으로 인정되려면 일정 기간 반복·계속되어야 하며, 평균임금 산정의 기초가 되는 임금은 근로의 대상으로 지급된 것인지를 명칭이 아닌 실질로 판단해야 한다고 판시했습니다.',
        takeaway:
          '회사가 "관행적으로 지급한 것일 뿐 임금이 아니다"라고 주장해도, 반복·계속 지급 사실이 입증되면 평균임금에 포함됩니다. 지급 이력 자료를 최대한 확보하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직금 평균임금 산정에 연차수당도 포함되나요?',
        answer:
          '<p>미사용 연차수당은 퇴직 전 3개월 이내에 지급이 확정된 경우 평균임금에 포함됩니다. 다만 퇴직으로 인해 발생한 연차수당은 포함 여부가 달라질 수 있으므로 구체적 확인이 필요합니다.</p>',
      },
      {
        question: '퇴직 전 3개월에 무급휴직 기간이 있으면 어떻게 계산하나요?',
        answer:
          '<p>무급휴직 기간은 평균임금 산정 기간에서 제외하고, 그 직전 기간으로 대체하여 계산합니다. 이는 근로기준법 시행령 제2조에 규정되어 있습니다.</p>',
      },
      {
        question: '성과급을 한 번만 받았는데도 평균임금에 포함되나요?',
        answer:
          '<p>1회 지급만으로는 "정기적·일률적·고정적"이라고 보기 어렵습니다. 다만 취업규칙이나 단체협약에 지급 근거가 있고 매년 지급이 예정되어 있었다면, 1회 수령만으로도 임금으로 인정될 수 있습니다.</p>',
      },
      {
        question: '평균임금 산정에 불만이 있으면 퇴직금을 거부해도 되나요?',
        answer:
          '<p>일단 지급된 퇴직금은 수령하고, 차액을 별도로 청구하는 것이 유리합니다. 퇴직금 수령을 거부하면 14일 지급 기한이 지나 지연이자가 발생하지 않을 수 있어 불리해집니다.</p>',
      },
      {
        question: '퇴직금 차액 청구의 소멸시효는 얼마인가요?',
        answer:
          '<p>퇴직금 청구권의 소멸시효는 퇴직일로부터 3년입니다. 차액 청구도 동일하므로 퇴직 후 3년 이내에 청구해야 합니다.</p>',
      },
    ],
    cta: { text: '퇴직금 평균임금 빠진 항목 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 퇴직금 2. 임원 퇴직금 한도와 세금 ──
  {
    domain: 'retirement',
    slug: 'retirement-executive-severance-limit',
    keyword: '임원 퇴직금 한도 세금',
    questionKeyword: '임원 퇴직금은 한도가 있나요? 세금은 얼마나 내나요?',
    ctaKeyword: '임원 퇴직금 한도 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '임원 퇴직금 한도와 세금 — 과다퇴직금 리스크 3가지 | 로앤가이드',
      description:
        '임원 퇴직 후 퇴직금을 받으려는데 한도와 세금이 걱정된다면, 지급 기준과 세무 리스크를 지금 확인하세요.',
    },
    intro:
      '<p>20년간 회사를 이끌어왔고 이제 퇴임을 앞두고 있습니다. 정관에 임원 퇴직금 규정이 있지만, "과다퇴직금은 손금 불산입된다"는 이야기를 들었습니다. 상법 제388조에 따르면 이사의 보수는 정관이나 주주총회 결의로 정해야 하며, 이를 위반하면 퇴직금 지급 자체가 무효가 될 수 있습니다.</p>',
    sections: [
      {
        title: '임원 퇴직금 지급의 법적 요건',
        content:
          '<p><strong style="color:#1e3a5f">상법 제388조는 강행규정으로, 이사 보수는 가능한 한 정관 또는 주주총회 결의로 정해야 합니다.</strong></p>\n<ul>\n<li><strong>정관 규정</strong> — 정관에 임원 퇴직금 지급 기준이 명시되어 있으면 그에 따라 지급합니다.</li>\n<li><strong>주주총회 결의</strong> — 정관에 "주주총회에서 정한다"라고 되어 있으면 가능한 한 주주총회 결의를 거쳐야 합니다. 결의 없이 지급하면 무효입니다.</li>\n<li><strong>이사회 결의만으로는 부족</strong> — 이사회가 자체적으로 퇴직금을 정하는 것은 상법 위반입니다. 주주가 알지 못한 채 과다한 퇴직금을 결정하는 것을 방지하기 위한 규정입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 주주총회 결의가 없으면 아무리 오래 근무했어도 임원 퇴직금 청구권 자체가 인정되지 않을 수 있습니다.</blockquote>',
      },
      {
        title: '과다퇴직금의 세무 리스크',
        content:
          '<p><strong style="color:#1e3a5f">법인세법상 임원 퇴직금이 한도를 초과하면 손금 불산입되어 회사에 추가 세금이 부과됩니다.</strong></p>\n<ul>\n<li><strong>손금 산입 한도</strong> — 퇴직 전 3년간 평균 급여 × 1/10 × 근속연수 × 3배가 한도입니다(2025년 기준). 초과분은 법인세 과세 대상입니다.</li>\n<li><strong>퇴직소득세 부담</strong> — 임원 퇴직금은 근속연수 공제가 적용되지만, 금액이 클수록 실효세율이 높아집니다.</li>\n<li><strong>증여세 리스크</strong> — 특수관계인(가족 임원 등)에게 과다한 퇴직금을 지급하면 부당행위계산부인 또는 증여세 문제가 발생할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>임원 퇴직금 한도와 세금, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근속연수, 평균급여, 정관 규정을 입력하면 적정 퇴직금과 세금을 무료로 분석합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임원 퇴직금 분쟁 시 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">임원이라도 근로자성이 인정되면 근로기준법상 퇴직금을 별도로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>근로자성 판단</strong> — 등기이사라도 실질적으로 사용자의 지휘·감독을 받으며 근로를 제공한 경우 근로자로 인정될 수 있습니다.</li>\n<li><strong>이중 지위</strong> — 이사이면서 근로자인 경우, 이사로서의 퇴직금과 근로자로서의 퇴직금을 각각 청구할 수 있습니다.</li>\n<li><strong>정관 규정 확인</strong> — 퇴임 전에 정관의 퇴직금 규정과 주주총회 의사록을 가능한 한 확인하세요. 결의가 없으면 퇴임 전에 주주총회를 개최하여 결의를 받아야 합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이사 보수와 주주총회 결의 필요성',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 상법 제388조는 강행규정이며, 정관에서 이사의 보수를 주주총회 결의로 정한다고 규정한 경우 주주총회 결의 없이는 이사가 보수청구권을 행사할 수 없다고 판시했습니다.',
        takeaway:
          '임원 퇴직금을 확실하게 받으려면 퇴임 전에 정관 규정과 주주총회 결의를 가능한 한 확인해야 합니다. 결의 없이 지급받은 퇴직금은 반환 청구 대상이 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '비등기임원도 주주총회 결의가 필요한가요?',
        answer:
          '<p>비등기임원(상무, 전무 등 직책)은 상법상 이사가 아니므로 제388조가 직접 적용되지 않습니다. 다만 실질적으로 경영에 참여했다면 과다퇴직금 세무 리스크는 동일하게 적용됩니다.</p>',
      },
      {
        question: '임원 퇴직금도 지연이자 20%가 적용되나요?',
        answer:
          '<p>근로자성이 인정되는 임원이라면 퇴직금 지연이자 연 20%가 적용됩니다. 순수 임원(근로자 아님)이라면 근로기준법이 아닌 상법과 정관에 따라 처리됩니다.</p>',
      },
      {
        question: '임원 퇴직금을 분할 지급받을 수 있나요?',
        answer:
          '<p>정관이나 주주총회 결의로 분할 지급 조건을 정할 수 있습니다. 분할 지급 시 퇴직소득세는 퇴직일에 한꺼번에 산정하고, 각 지급 시점에 원천징수합니다.</p>',
      },
      {
        question: '1인 법인 대표도 퇴직금을 받을 수 있나요?',
        answer:
          '<p>1인 법인 대표도 정관에 퇴직금 지급 규정이 있고 주주총회(1인 주주총회) 결의를 거치면 퇴직금을 수령할 수 있습니다. 다만 과다퇴직금 한도에 주의하세요.</p>',
      },
    ],
    cta: { text: '임원 퇴직금 적정 한도 AI로 계산하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 퇴직금 3. 명예퇴직금 계산과 연금 관계 ──
  {
    domain: 'retirement',
    slug: 'retirement-teachers-honorary-retirement',
    keyword: '명예퇴직금 계산 공무원 교원',
    questionKeyword: '명예퇴직금은 얼마나 받고, 연금에 영향이 있나요?',
    ctaKeyword: '명예퇴직금 계산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '명예퇴직금 계산법과 연금 관계 — 교원·공무원 필수 | 로앤가이드',
      description:
        '명예퇴직을 고려하는데 퇴직금 산정과 연금 영향이 걱정된다면, 계산법과 수령 전략을 지금 확인하세요.',
    },
    intro:
      '<p>23년차 교사입니다. 명예퇴직 신청을 고민하고 있지만, 명예퇴직수당이 얼마인지, 연금 수령에 불이익은 없는지 알 수가 없습니다. 공무원 명예퇴직수당은 잔여 재직기간에 따라 산정되며, 공무원연금과는 별도로 지급되기 때문에 연금 수령에 직접적인 감액은 없습니다.</p>',
    sections: [
      {
        title: '명예퇴직수당 산정 공식',
        content:
          '<p><strong style="color:#1e3a5f">공무원·교원 명예퇴직수당은 "월봉급액 × 잔여 재직월수의 절반"으로 계산합니다.</strong></p>\n<ul>\n<li><strong>산정 기준</strong> — 퇴직 당시의 월봉급액에 정년까지 남은 개월 수의 50%를 곱합니다. 정년이 10년 이상 남아 있으면 최대 지급률이 적용됩니다.</li>\n<li><strong>지급 한도</strong> — 20년 이상 근무한 공무원이 정년 전 자진 퇴직할 때 신청할 수 있습니다. 명예퇴직수당에는 별도 상한이 있으며, 기관별로 다를 수 있습니다.</li>\n<li><strong>신청 시기</strong> — 대부분 연 1~2회 명예퇴직 신청 기간이 정해져 있습니다. 기간을 놓치면 다음 해까지 기다려야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 잔여 재직기간이 길수록 명예퇴직수당이 커집니다. 정년이 5년 미만 남았다면 수당 대비 연금 손실을 비교해보세요.</blockquote>',
      },
      {
        title: '명예퇴직과 공무원연금의 관계',
        content:
          '<p><strong style="color:#1e3a5f">명예퇴직수당은 연금과 별개로 지급되지만, 조기 퇴직에 따른 연금 수령 시기와 금액에는 간접 영향이 있습니다.</strong></p>\n<ul>\n<li><strong>연금 수령 시기</strong> — 20년 이상 재직자는 퇴직 후 60세(2033년 이후 65세로 단계적 상향)부터 퇴직연금을 받습니다. 명예퇴직해도 수령 시기는 동일합니다.</li>\n<li><strong>연금액 차이</strong> — 재직기간이 짧아지면 연금 산정 기초인 "재직연수"가 줄어 월 연금액이 감소합니다.</li>\n<li><strong>연금 공백 기간</strong> — 50대 초반에 명예퇴직하면 연금 수령까지 10년 이상 공백이 생길 수 있습니다. 이 기간의 생활비를 명예퇴직수당으로 충당할 수 있는지 계산해보세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>명예퇴직수당과 연금 비교, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">재직연수, 월봉급, 잔여 기간을 입력하면 명예퇴직수당과 연금 변화를 무료로 계산합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '명예퇴직 신청 시 확인할 사항',
        content:
          '<p><strong style="color:#1e3a5f">명예퇴직 신청은 철회가 어렵기 때문에 사전 검토가 중요합니다.</strong></p>\n<ul>\n<li><strong>승인 여부</strong> — 명예퇴직은 신청한다고 가능한 한 승인되는 것이 아닙니다. 기관의 인력 사정에 따라 거부될 수 있습니다.</li>\n<li><strong>건강보험 전환</strong> — 퇴직 후 직장건강보험에서 지역건강보험으로 전환됩니다. 보험료가 크게 올라갈 수 있습니다.</li>\n<li><strong>퇴직 후 취업 제한</strong> — 공무원은 퇴직 후 일정 기간 관련 기관 취업이 제한됩니다(공직자윤리법). 명예퇴직해도 동일하게 적용됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교원 명예퇴직 관련 행정 분쟁',
        summary:
          '서울행정법원 2025구합54475 사건(서울행법, 2025.11.13 선고)에서 23년 재직 초등교사의 명예퇴직 관련 사안을 다루었으며, 명예퇴직 승인 여부와 수당 산정에 관한 기관의 재량 범위가 쟁점이 되었습니다.',
        takeaway:
          '명예퇴직 승인은 기관의 재량이 크지만, 승인 기준이 합리적이지 않으면 행정소송으로 다툴 수 있습니다. 신청 전에 기관의 명예퇴직 운영 지침을 확인하세요.',
      },
    ],
    faq: [
      {
        question: '명예퇴직수당은 퇴직소득세가 부과되나요?',
        answer:
          '<p>명예퇴직수당은 퇴직소득으로 분류되어 퇴직소득세가 부과됩니다. 근속연수 공제가 적용되므로 재직기간이 길수록 세율이 낮아집니다.</p>',
      },
      {
        question: '명예퇴직 후 재취업하면 수당을 반환해야 하나요?',
        answer:
          '<p>민간 기업 취업은 반환 대상이 아닙니다. 다만 같은 기관이나 유관 공공기관에 재임용되면 수당 환수 규정이 적용될 수 있습니다. 기관별 규정을 확인하세요.</p>',
      },
      {
        question: '명예퇴직과 조기퇴직은 다른 건가요?',
        answer:
          '<p>명예퇴직은 일정 재직기간 이상인 공무원·교원이 정년 전에 자발적으로 퇴직하는 것으로, 별도의 명예퇴직수당이 지급됩니다. 조기퇴직은 일반적인 중도퇴직으로, 별도 수당 없이 퇴직급여만 지급됩니다.</p>',
      },
      {
        question: '명예퇴직 신청 후 취소할 수 있나요?',
        answer:
          '<p>기관이 승인하기 전에는 취소가 가능하지만, 승인 통보 후에는 철회가 제한됩니다. 신청 전에 충분히 검토하고, 가족과 상의한 후 결정하세요.</p>',
      },
      {
        question: '교원이 아닌 일반 공무원도 명예퇴직수당이 동일한가요?',
        answer:
          '<p>산정 공식은 유사하지만, 직종별로 적용되는 봉급표와 한도가 다릅니다. 교원, 경찰, 소방, 일반직 공무원 각각의 명예퇴직 운영 규정을 확인해야 합니다.</p>',
      },
    ],
    cta: { text: '명예퇴직수당 예상 금액 AI로 계산하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 IRP 이전', href: '/guide/retirement/retirement-irp-transfer-requirement' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-guide' },
    ],
  },

  // ── 퇴직금 4. 파견근로자 퇴직금 청구 상대방과 직접고용간주 ──
  {
    domain: 'retirement',
    slug: 'retirement-dispatch-worker-employer',
    keyword: '파견근로자 퇴직금 직접고용',
    questionKeyword: '파견근로자인데 퇴직금을 누구에게 청구해야 하나요?',
    ctaKeyword: '파견근로자 퇴직금 청구 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '파견근로자 퇴직금 — 직접고용간주 시 청구 대상 | 로앤가이드',
      description:
        '파견직으로 2년 넘게 일했는데 퇴직금을 어디에 청구해야 할지 모르겠다면, 직접고용간주 기준을 지금 확인하세요.',
    },
    intro:
      '<p>3년간 파견직으로 같은 공장에서 일했습니다. 계약이 종료되자 파견업체는 "이미 퇴직금이 월급에 포함되어 있다"고 합니다. 사용업체는 "우리 직원이 아니다"라며 책임을 회피합니다. 파견근로자보호법 제6조의2에 따르면 2년을 초과하여 파견된 근로자는 사용업체의 직접고용으로 간주되며, 이 경우 퇴직금 의무도 사용업체에 있습니다.</p>',
    sections: [
      {
        title: '직접고용간주의 요건과 효과',
        content:
          '<p><strong style="color:#1e3a5f">파견기간이 2년을 초과하면 사용업체가 직접 고용한 것으로 간주됩니다.</strong></p>\n<ul>\n<li><strong>기간 산정</strong> — 계약 갱신을 반복하더라도 실질적 파견기간을 합산합니다. 중간에 1~2주 공백을 둔 경우에도 계속 파견으로 인정될 수 있습니다.</li>\n<li><strong>직접고용간주 시점</strong> — 2년이 초과한 시점부터 사용업체의 근로자로 간주됩니다. 그 이전 기간은 파견업체의 근로자입니다.</li>\n<li><strong>퇴직금 분리 산정</strong> — 직접고용 간주 전 기간의 퇴직금은 파견업체에, 간주 후 기간의 퇴직금은 사용업체에 각각 청구합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 2년 초과 파견이면 사용업체가 퇴직금 의무자입니다. 파견업체에서 이미 받은 퇴직금은 사용업체 청구 시 공제됩니다.</blockquote>',
      },
      {
        title: '불법파견과 퇴직금 청구',
        content:
          '<p><strong style="color:#1e3a5f">허용되지 않는 업무에 파견된 경우(불법파견), 처음부터 사용업체의 근로자로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>불법파견 업종</strong> — 제조업 직접생산공정, 건설현장, 항만하역 등 파견이 금지된 업종에서 일했다면 불법파견에 해당할 소지가 있습니다.</li>\n<li><strong>위장도급</strong> — 도급계약 형식이지만 실질적으로 사용업체의 지휘·감독을 받았다면 파견으로 인정될 수 있습니다.</li>\n<li><strong>퇴직금 전액 사용업체 청구</strong> — 불법파견이 인정되면 근무 시작 시점부터 사용업체의 근로자이므로 전체 기간의 퇴직금을 사용업체에 청구할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>파견직 퇴직금 청구 대상, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">파견기간, 업종, 근무형태를 입력하면 직접고용간주 해당 여부를 무료로 확인합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보와 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">직접고용간주를 입증하려면 파견 기간과 실질적 근로관계를 증명해야 합니다.</strong></p>\n<ul>\n<li><strong>필요 서류</strong> — 파견계약서, 근무 일지, 출퇴근 기록, 사용업체 직원의 업무지시 메일·메시지, 사원증, 교육 수료증 등을 확보하세요.</li>\n<li><strong>노동위원회 구제신청</strong> — 직접고용간주 확인 및 부당해고 구제를 노동위원회에 신청할 수 있습니다.</li>\n<li><strong>민사소송</strong> — 퇴직금 차액 지급을 사용업체에 대해 민사소송으로 청구합니다. 직접고용간주가 인정되면 퇴직금뿐 아니라 임금 차액도 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자 직접고용간주와 퇴직금 책임',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 파견근로자 직접고용간주 효과가 발생하면 사용사업주가 퇴직금 지급 의무를 부담하며, 파견업체로부터 이미 수령한 퇴직금은 공제 대상이라고 판시했습니다.',
        takeaway:
          '직접고용간주가 인정되면 사용업체가 퇴직금을 지급해야 합니다. 다만 파견업체에서 이미 받은 퇴직금은 중복 수령이 불가하므로 차액만 청구하세요.',
      },
    ],
    faq: [
      {
        question: '파견업체가 폐업하면 퇴직금을 못 받나요?',
        answer:
          '<p>파견업체가 폐업하더라도 체당금(임금채권보장기금)을 통해 미지급 퇴직금을 받을 수 있습니다. 또한 불법파견이나 2년 초과 파견이면 사용업체에 직접 청구할 수 있습니다.</p>',
      },
      {
        question: '파견기간 중간에 1개월 공백이 있으면 기간이 끊기나요?',
        answer:
          '<p>형식적 공백을 두고 재파견한 경우, 실질적으로 계속 근로가 유지되었다면 기간이 합산됩니다. 공백 기간에도 사용업체에서 일한 사실이 있다면 더욱 유리합니다.</p>',
      },
      {
        question: '위장도급인지 적법파견인지 어떻게 구분하나요?',
        answer:
          '<p>도급은 수급인이 독립적으로 업무를 수행하고, 파견은 사용업체가 직접 업무를 지시합니다. 사용업체 직원과 같은 공간에서 같은 업무 지시를 받았다면 위장도급(실질 파견)으로 볼 수 있습니다.</p>',
      },
      {
        question: '직접고용간주가 되면 정규직으로 전환되나요?',
        answer:
          '<p>직접고용간주 시 고용 조건은 파견업체에서의 조건과 같거나 그 이상이어야 합니다. 기간제로 간주되는 경우가 많지만, 2년 이상 사용되면 무기계약 전환 사유가 될 수 있습니다.</p>',
      },
    ],
    cta: { text: '파견직 직접고용간주 해당 여부 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 IRP 이전', href: '/guide/retirement/retirement-irp-transfer-requirement' },
    ],
  },

  // ── 퇴직금 5. 사망 퇴직금 유족 청구 ──
  {
    domain: 'retirement',
    slug: 'retirement-death-survivors-claim',
    keyword: '사망 퇴직금 유족 청구',
    questionKeyword: '가족이 사망했는데 퇴직금은 누가 받나요?',
    ctaKeyword: '사망 퇴직금 유족 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사망 퇴직금 유족 청구 — 수령 자격과 순위 4단계 | 로앤가이드',
      description:
        '가족이 재직 중 사망해서 퇴직금을 받아야 하는데 누가 청구하는지 모르겠다면, 유족 순위와 절차를 지금 확인하세요.',
    },
    intro:
      '<p>남편이 회사에 다니다 갑작스럽게 세상을 떠났습니다. 15년간 근무한 퇴직금이 있을 텐데, 제가 받을 수 있는 건지, 시부모님과 나누어야 하는 건지 모르겠습니다. 근로자퇴직급여보장법 제9조에 따르면 사망한 근로자의 퇴직금은 상속 재산이 아닌 별도의 유족급여로서, 법이 정한 유족 순위에 따라 지급됩니다.</p>',
    sections: [
      {
        title: '사망 퇴직금 수령 자격과 유족 순위',
        content:
          '<p><strong style="color:#1e3a5f">사망 퇴직금은 일반 상속 순위가 아니라 근로자퇴직급여보장법이 정한 유족 순위에 따라 지급됩니다.</strong></p>\n<ul>\n<li><strong>1순위</strong> — 배우자(사실혼 포함)</li>\n<li><strong>2순위</strong> — 자녀</li>\n<li><strong>3순위</strong> — 부모</li>\n<li><strong>4순위</strong> — 조부모, 손자녀</li>\n</ul>\n<p>같은 순위가 여러 명이면 균등 분배합니다. 상위 순위가 있으면 하위 순위는 수령 자격이 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 배우자가 있으면 부모보다 우선하여 퇴직금 전액을 수령합니다. 이는 일반 상속(배우자와 직계비속이 공동 1순위)과 다른 점입니다.</blockquote>',
      },
      {
        title: '사망 퇴직금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">사망 진단서 → 가족관계증명서 → 회사에 청구 → 수령 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계: 서류 준비</strong> — 사망진단서(또는 사체검안서), 가족관계증명서, 유족의 신분증, 통장 사본을 준비합니다.</li>\n<li><strong>2단계: 회사에 퇴직금 청구</strong> — 사망일이 퇴직일이 됩니다. 회사 인사팀에 사망 퇴직금 지급을 요청합니다.</li>\n<li><strong>3단계: 14일 이내 지급</strong> — 회사는 퇴직일(사망일)로부터 14일 이내에 퇴직금을 지급해야 합니다. 미지급 시 지연이자 연 20%가 적용됩니다.</li>\n<li><strong>4단계: 퇴직연금(DC/IRP)</strong> — DC형 퇴직연금이나 IRP에 적립된 퇴직금은 금융기관에 유족이 직접 청구합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사망 퇴직금 수령 자격과 절차, AI가 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">가족관계와 근무 이력을 입력하면 수령 순위와 예상 금액을 무료로 확인합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사망 원인에 따른 추가 보상',
        content:
          '<p><strong style="color:#1e3a5f">업무상 사망이면 퇴직금 외에 산재 유족급여와 손해배상을 추가로 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>산재 유족급여</strong> — 업무상 재해로 사망한 경우, 근로복지공단에 유족급여(연금 또는 일시금)를 청구합니다. 퇴직금과 별도로 수령 가능합니다.</li>\n<li><strong>사용자 과실 손해배상</strong> — 안전조치 미비 등 사용자의 과실로 사망한 경우, 일실수입·위자료 등을 민사소송으로 청구합니다.</li>\n<li><strong>일실퇴직연금 손해배상</strong> — 사망하지 않았더라면 정년까지 근무하여 받았을 퇴직연금 상당액을 손해배상으로 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사망 교직원의 일실퇴직연금 손해배상',
        summary:
          '대법원 2021다255853 사건(대법원, 2024.11.21 선고)에서 법원은 불법행위로 사망한 교직원의 상속인이 일실퇴직연금 상당의 손해배상을 청구할 수 있으며, 직무상유족연금 공제는 "상속 후 공제" 방식으로 해야 한다고 판시했습니다.',
        takeaway:
          '업무상 또는 불법행위로 사망한 경우, 퇴직금뿐 아니라 일실퇴직연금까지 손해배상으로 청구할 수 있습니다. 산재 유족급여와의 공제 관계도 함께 검토하세요.',
      },
    ],
    faq: [
      {
        question: '사실혼 배우자도 사망 퇴직금을 받을 수 있나요?',
        answer:
          '<p>근로자퇴직급여보장법은 사실혼 배우자도 유족 1순위로 인정합니다. 주민등록, 공동 생활 증빙 등으로 사실혼 관계를 입증하면 법률혼 배우자와 동일하게 퇴직금을 수령할 수 있습니다.</p>',
      },
      {
        question: '유족이 여러 명이면 대표 1명이 청구하나요?',
        answer:
          '<p>같은 순위의 유족이 여러 명이면 각자 청구할 수 있고, 대표 1명이 수령 후 분배할 수도 있습니다. 회사에 따라 유족 대표자 선임 동의서를 요구할 수 있습니다.</p>',
      },
      {
        question: '사망 퇴직금에도 상속세가 부과되나요?',
        answer:
          '<p>사망 퇴직금은 상속재산에 포함되어 상속세 과세 대상이 됩니다. 다만 퇴직급여 비과세 한도가 적용되며, 상속공제를 통해 실제 세부담은 크지 않을 수 있습니다.</p>',
      },
      {
        question: '회사가 퇴직금 지급을 거부하면 어떻게 하나요?',
        answer:
          '<p>고용노동부에 퇴직금 미지급 진정을 제기하세요. 근로감독관이 조사하여 사업주에게 시정명령을 내립니다. 시정하지 않으면 형사처벌(3년 이하 징역 또는 3천만원 이하 벌금) 대상입니다.</p>',
      },
    ],
    cta: { text: '사망 퇴직금 유족 수령 자격 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 IRP 이전', href: '/guide/retirement/retirement-irp-transfer-requirement' },
    ],
  },

  // ── 퇴직금 6. 소멸시효 도과 후 퇴직금 청구 ──
  {
    domain: 'retirement',
    slug: 'retirement-statute-expired-revival',
    keyword: '퇴직금 소멸시효 지난 후 청구',
    questionKeyword: '퇴직금 소멸시효 3년이 지났는데 받을 방법이 있나요?',
    ctaKeyword: '퇴직금 소멸시효 도과 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 소멸시효 지난 후 받는 법 — 예외 3가지 | 로앤가이드',
      description:
        '퇴직금 소멸시효 3년이 지났는데 아직 받을 수 있는 방법이 있는지 궁금하다면, 예외 사유를 지금 확인하세요.',
    },
    intro:
      '<p>5년 전에 퇴직했는데 당시 받지 못한 퇴직금이 있습니다. 소멸시효가 3년이라는 것을 이제 알았습니다. 정말 한 푼도 못 받는 걸까요. 원칙적으로 퇴직금 청구권은 퇴직일로부터 3년이 지나면 소멸하지만, 사용자의 행위가 신의성실 원칙에 반하는 경우에는 시효 항변이 받아들여지지 않을 수 있습니다.</p>',
    sections: [
      {
        title: '소멸시효 도과 후에도 청구 가능한 예외 사유',
        content:
          '<p><strong style="color:#1e3a5f">사용자의 소멸시효 주장이 신의칙에 반하면 시효 완성을 인정하지 않습니다.</strong></p>\n<ul>\n<li><strong>사용자의 기망</strong> — 회사가 "나중에 주겠다", "따로 정산하겠다"며 의도적으로 청구를 지연시킨 경우, 시효 항변이 권리남용에 해당할 소지가 있습니다.</li>\n<li><strong>근로자성 분쟁</strong> — 프리랜서로 계약했지만 실질적으로 근로자였던 경우, 근로자성이 확인된 시점부터 시효가 기산될 수 있습니다.</li>\n<li><strong>객관적 장애사유</strong> — 소멸시효 기간 내에 권리를 행사할 수 없는 객관적 사정이 있었다면 그 기간은 시효 진행에서 제외됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 시효가 지났더라도 "왜 시효 내에 청구하지 못했는지"를 구체적으로 입증하면 받을 수 있는 가능성이 있습니다.</blockquote>',
      },
      {
        title: '신의칙 위반이 인정되는 구체적 상황',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 아래 요소를 종합적으로 고려하여 신의칙 위반 여부를 판단합니다.</strong></p>\n<ul>\n<li><strong>채무자의 행위</strong> — 사용자가 퇴직금 지급을 약속하면서 이행을 미루거나, 근로자의 청구를 방해한 경우</li>\n<li><strong>권리자의 신뢰</strong> — 근로자가 사용자의 약속을 믿고 법적 조치를 취하지 않은 데 정당한 이유가 있는 경우</li>\n<li><strong>채무자의 태도 변화</strong> — 시효 완성 전에는 지급 의사를 보이다가 시효 완성 후 갑자기 시효를 주장하는 경우</li>\n<li><strong>형평의 원칙</strong> — 시효 완성을 인정하면 정의와 형평에 크게 어긋나는 경우</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>소멸시효 도과 후에도 청구 가능한지, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직일, 미지급 경위, 회사의 태도를 입력하면 신의칙 적용 가능성을 무료로 확인합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '시효 도과 상황에서의 대응 전략',
        content:
          '<p><strong style="color:#1e3a5f">시효 도과가 의심되면 먼저 증거를 확보하고, 전문가 상담을 받으세요.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 회사와의 대화 기록(카톡, 이메일), 퇴직금 지급 약속 서면, 내용증명 발송 이력 등을 정리합니다.</li>\n<li><strong>내용증명 발송</strong> — 시효 중단 사유가 될 수 있으므로, 우선 내용증명으로 퇴직금 지급을 요구하세요.</li>\n<li><strong>소송 제기</strong> — 신의칙 주장은 소송에서 다투어야 합니다. 노동부 진정만으로는 시효 도과 문제를 해결하기 어렵습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 시효가 지났다고 포기하지 마세요. 회사가 시효 완성을 유도한 정황이 있다면 신의칙으로 돌파할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 주장과 신의성실 원칙',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자가 소멸시효 완성을 주장하는 것이 신의성실의 원칙에 반하여 권리남용에 해당하는 경우 이를 허용할 수 없다고 판시하면서, 사용자가 근로자의 권리행사를 방해하거나 신뢰를 유발한 사정 등을 종합적으로 고려해야 한다고 했습니다.',
        takeaway:
          '시효가 완성되었더라도 사용자의 기망, 약속 불이행, 청구 방해 등이 있었다면 신의칙을 근거로 퇴직금을 받을 수 있습니다. 증거 확보가 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '소멸시효 3년은 정확히 언제부터 시작되나요?',
        answer:
          '<p>퇴직금 청구권의 소멸시효는 퇴직일(근로관계 종료일)의 다음 날부터 기산됩니다. 퇴직일이 2023년 4월 14일이면 2026년 4월 14일까지 청구해야 합니다.</p>',
      },
      {
        question: '내용증명을 보내면 소멸시효가 중단되나요?',
        answer:
          '<p>내용증명 자체는 소멸시효 중단 사유인 "최고"에 해당할 소지가 있습니다. 다만 최고 후 6개월 이내에 소송을 제기해야 시효가 중단됩니다. 내용증명만으로는 영구적 중단이 되지 않습니다.</p>',
      },
      {
        question: '회사가 "나중에 주겠다"고 한 메시지가 있으면 효과가 있나요?',
        answer:
          '<p>회사의 지급 약속은 채무 승인으로 소멸시효 중단 사유가 됩니다. 또한 약속 후 이행하지 않은 것은 신의칙 위반 주장의 핵심 증거가 됩니다. 카톡, 이메일, 녹음 등을 보관하세요.</p>',
      },
      {
        question: '신의칙 주장이 받아들여질 확률은 어느 정도인가요?',
        answer:
          '<p>신의칙 위반은 예외적으로 인정되므로 쉽지는 않습니다. 다만 사용자의 적극적 기망, 지급 약속, 청구 방해 등이 구체적으로 입증되면 가능성이 높아집니다. 증거의 질이 결정적입니다.</p>',
      },
    ],
    cta: { text: '소멸시효 도과 퇴직금 청구 가능성 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-guide' },
    ],
  },

  // ── 임금체불 7. 성과급 임금성 미지급 청구 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-performance-bonus-claim',
    keyword: '성과급 임금성 미지급 청구',
    questionKeyword: '회사가 성과급은 임금이 아니라며 안 주는데 받을 수 있나요?',
    ctaKeyword: '성과급 임금성 판단 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '성과급 임금성 판단 기준과 미지급 청구 방법 | 로앤가이드',
      description:
        '회사가 성과급은 임금이 아니라며 지급을 거부하고 있다면, 임금성 판단 기준과 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>매년 받던 성과급을 올해 회사가 지급하지 않겠다고 통보했습니다. "성과급은 회사 재량이지 임금이 아니다"라는 설명뿐입니다. 하지만 입사 이래 10년간 한 번도 빠짐없이 지급되었습니다. 대법원 판례에 따르면 지급 조건이 사전에 정해져 있고 정기적·계속적으로 지급된 성과급은 근로의 대상인 "임금"으로 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '성과급이 임금으로 인정되는 기준',
        content:
          '<p><strong style="color:#1e3a5f">명칭이 "성과급"이라도 실질이 임금이면 근로기준법의 보호를 받습니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매년 또는 매 분기 등 일정 주기로 반복 지급되었는지를 봅니다.</li>\n<li><strong>일률성</strong> — 전 직원 또는 일정 자격 요건을 갖춘 직원 전체에게 지급되었는지를 확인합니다.</li>\n<li><strong>고정성</strong> — 지급 조건이 취업규칙, 단체협약, 급여규정 등에 미리 정해져 있는지가 중요합니다.</li>\n<li><strong>사전 확정성</strong> — 실적에 연동되더라도 산정 공식이 미리 정해져 있으면 임금으로 볼 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "이건 보너스니까 안 줘도 된다"는 회사 주장은 지급 실태와 규정을 확인해야 합니다. 10년간 빠짐없이 지급되었다면 임금일 가능성이 높습니다.</blockquote>',
      },
      {
        title: '성과급이 임금이 아닌 경우',
        content:
          '<p><strong style="color:#1e3a5f">지급 여부와 금액이 전적으로 사용자의 재량에 달린 일시적 보상금은 임금이 아닙니다.</strong></p>\n<ul>\n<li><strong>순수 재량 보상</strong> — 지급 기준 없이 대표이사가 그때그때 결정하는 "특별 보너스"는 은혜적 금품입니다.</li>\n<li><strong>1회성 격려금</strong> — 프로젝트 성공 등 특정 사유에 1회만 지급된 금품은 정기성이 없어 임금으로 보기 어렵습니다.</li>\n<li><strong>복리후생적 성격</strong> — 경조사비, 동호회 지원금 등은 근로의 대상이 아닌 복리후생에 해당할 소지가 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 성과급이 임금인지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">지급 이력, 규정, 산정 방식을 입력하면 임금성 여부를 무료로 분석합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '성과급 미지급 시 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">증거 확보 → 내용증명 → 노동부 진정 → 소송 순서로 대응합니다.</strong></p>\n<ol>\n<li><strong>증거 확보</strong> — 과거 급여명세서(성과급 지급 이력), 취업규칙·급여규정, 인사공지, 성과급 산정 기준 문서를 확보합니다.</li>\n<li><strong>내용증명 발송</strong> — 회사에 성과급 미지급에 대한 지급 요청서를 내용증명으로 발송합니다.</li>\n<li><strong>노동부 진정</strong> — 임금 체불로 고용노동부에 진정을 제기합니다. 근로감독관이 임금성을 판단하여 시정명령을 내릴 수 있습니다.</li>\n<li><strong>민사소송</strong> — 노동부에서 해결되지 않으면 임금 청구 소송을 제기합니다.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과급의 평균임금 산입 기준',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금이란 근로의 대상으로 지급된 것으로, 명칭에 관계없이 실질적으로 정기적·일률적·고정적으로 지급된 금품이면 임금에 해당한다고 판시했습니다.',
        takeaway:
          '성과급의 명칭보다 지급의 실질이 중요합니다. 산정 기준이 사전에 정해져 있고 매년 지급되었다면 임금으로 인정받아 미지급분을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '성과급이 임금으로 인정되면 퇴직금에도 포함되나요?',
        answer:
          '<p>네. 임금으로 인정된 성과급은 평균임금 산정에 포함되어 퇴직금 계산에 반영됩니다. 과거에 받은 성과급이 퇴직금에서 빠져 있다면 차액을 추가로 청구할 수 있습니다.</p>',
      },
      {
        question: '올해만 성과급을 못 받았는데 임금체불인가요?',
        answer:
          '<p>매년 지급되던 성과급을 올해 갑자기 지급하지 않은 것이라면 임금체불에 해당할 수 있습니다. 다만 지급 조건(예: 당기순이익 실현)이 충족되지 않았다면 회사의 주장이 정당할 수도 있으므로 조건 충족 여부를 확인하세요.</p>',
      },
      {
        question: '성과급 산정 기준이 불합리하면 다툴 수 있나요?',
        answer:
          '<p>산정 기준 자체가 취업규칙에 있다면 근로자의 동의 없이 불이익하게 변경할 수 없습니다. 일방적으로 기준을 바꿔 성과급을 줄이는 것은 취업규칙 불이익 변경에 해당하여 무효일 수 있습니다.</p>',
      },
      {
        question: '퇴직 후에도 성과급을 청구할 수 있나요?',
        answer:
          '<p>재직 기간에 발생한 성과급 청구권은 퇴직 후에도 유효합니다. 소멸시효는 지급일로부터 3년이므로, 기간 내에 청구하세요.</p>',
      },
    ],
    cta: { text: '성과급 임금성 여부 AI로 즉시 판단받기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '임금체불 지연이자', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

  // ── 임금체불 8. 포괄임금 최저임금 미달 차액 청구 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-minimum-wage-comprehensive',
    keyword: '포괄임금 최저임금 미달 차액',
    questionKeyword: '포괄임금이 최저임금에 미달하는 것 같은데 어떻게 확인하나요?',
    ctaKeyword: '포괄임금 최저임금 미달 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 최저임금 미달 판단법과 차액 청구 3단계 | 로앤가이드',
      description:
        '포괄임금으로 받는 급여가 최저임금에 미달하는 것 같아 걱정된다면, 판단 방법과 차액 청구법을 지금 확인하세요.',
    },
    intro:
      '<p>"월 250만원에 초과근무수당 포함"이라는 포괄임금계약을 체결했습니다. 그런데 계산해보니 시급으로 환산하면 최저임금에도 못 미치는 것 같습니다. 대법원 판례에 따르면 포괄임금계약이라도 최저임금에 미달하면 그 부분은 무효이며, 미달 차액을 청구할 수 있습니다.</p>',
    sections: [
      {
        title: '포괄임금의 최저임금 미달 판단 방법',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금을 소정근로시간으로 나눈 "비교대상 시급"이 최저임금 미만이면 위반입니다.</strong></p>\n<ul>\n<li><strong>비교대상 시급 산정</strong> — (포괄임금 월액 - 최저임금 산입 제외 항목) ÷ 소정근로시간(월 209시간 기준)으로 계산합니다.</li>\n<li><strong>산입 제외 항목</strong> — 매월 지급하지 않는 상여금(2025년 기준: 월 환산액의 5% 초과분 제외), 복리후생비(월 환산액의 1% 초과분 제외)는 비교 대상에서 빠집니다.</li>\n<li><strong>초과근로수당 제외</strong> — 포괄임금에 포함된 연장·야간·휴일근로수당은 최저임금 비교 시 제외합니다. 기본급만으로 최저임금 이상이어야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 2026년 최저임금은 시급 10,030원(월 209시간 기준 약 2,096,270원)입니다. 기본급이 이에 미치지 않으면 차액을 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '최저임금 미달 시 포괄임금계약의 효력',
        content:
          '<p><strong style="color:#1e3a5f">최저임금에 미달하는 포괄임금계약은 그 부분에 한하여 무효이며, 최저임금법이 적용됩니다.</strong></p>\n<ul>\n<li><strong>부분 무효</strong> — 포괄임금 전체가 무효가 아니라, 최저임금에 미달하는 부분만 무효입니다. 미달 차액이 발생합니다.</li>\n<li><strong>소급 청구 가능</strong> — 과거 3년간의 미달 차액을 소급하여 청구할 수 있습니다(소멸시효 3년).</li>\n<li><strong>지연이자 14.6%</strong> — 퇴직 후 14일이 지나도 차액을 지급하지 않으면 연 20%의 지연이자가 추가됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>포괄임금 최저임금 미달 여부, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 근로시간, 계약 조건을 입력하면 최저임금 미달 금액을 무료로 산정합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차액 청구 절차와 증거',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서, 급여명세서, 근무시간 기록이 핵심 증거입니다.</strong></p>\n<ol>\n<li><strong>시급 환산</strong> — 실제 근로시간과 수령액을 기준으로 시급을 계산합니다.</li>\n<li><strong>차액 산정</strong> — 최저임금과의 차이에 근로 개월 수를 곱하여 총 미지급 차액을 산출합니다.</li>\n<li><strong>노동부 진정</strong> — 최저임금법 위반으로 고용노동부에 진정합니다. 최저임금 위반은 2년 이하 징역 또는 2천만원 이하 벌금 대상입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 포괄임금계약서에 "초과근무수당 포함"이라고 적혀 있어도, 기본급 자체가 최저임금 미만이면 위법입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약 최저임금 미달 시 무효',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하면 그 포괄임금계약은 유효하다고 볼 수 없으며, 비교대상 시급은 소정근로시간을 기준으로 산정해야 한다고 판시했습니다.',
        takeaway:
          '포괄임금이 최저임금에 미달하면 해당 계약 조항은 무효입니다. 실제 소정근로시간 기준으로 시급을 환산하여 차액을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '격일제 근무자의 소정근로시간은 어떻게 계산하나요?',
        answer:
          '<p>격일제 근무(24시간 근무 후 24시간 휴무)는 1일 근로시간이 8시간을 초과하므로, 근로기준법에 따라 소정근로시간과 초과근로시간을 분리하여 최저임금 비교 대상을 산정해야 합니다.</p>',
      },
      {
        question: '포괄임금에 연차수당까지 포함되어 있으면 어떻게 되나요?',
        answer:
          '<p>연차수당을 포괄임금에 포함하는 것은 원칙적으로 무효입니다. 연차수당은 별도로 지급해야 하며, 이를 포함한 금액으로 최저임금 충족을 주장할 수 없습니다.</p>',
      },
      {
        question: '재직 중에도 차액을 청구할 수 있나요?',
        answer:
          '<p>네. 최저임금 미달 차액은 재직 중에도 청구 가능합니다. 불이익이 걱정되면 익명으로 노동부에 신고할 수도 있습니다. 최저임금 위반 신고를 이유로 한 불이익 처분은 부당해고에 해당할 소지가 있습니다.</p>',
      },
      {
        question: '사업주가 모르고 최저임금을 위반한 경우에도 처벌되나요?',
        answer:
          '<p>최저임금법은 고의·과실을 구분하지 않는 무과실 책임이 아니지만, 사업주에게 최저임금 준수 의무가 있으므로 "몰랐다"는 것이 면책 사유가 되기 어렵습니다.</p>',
      },
    ],
    cta: { text: '포괄임금 최저임금 미달 차액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '임금체불 지연이자', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ── 임금체불 9. 회사 관행 수당 중단 시 청구 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-practice-as-contract',
    keyword: '회사 관행 수당 중단 청구',
    questionKeyword: '회사가 항상 주던 수당을 갑자기 안 주는데 받을 수 있나요?',
    ctaKeyword: '회사 관행 수당 청구 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '회사 관행 수당 중단 — 근로계약 인정 요건 4가지 | 로앤가이드',
      description:
        '회사가 항상 지급하던 수당을 갑자기 중단했다면, 관행의 근로계약 인정 요건과 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>입사 이래 8년간 매달 받던 체력단련비 20만원이 이번 달부터 지급되지 않았습니다. 회사는 "원래 의무가 아니었다"고 합니다. 하지만 전 직원이 예외 없이 받아왔습니다. 대법원 판례에 따르면 기업 내부에 일정 기간 반복·계속된 관행이 근로계약의 내용으로 인정되면, 사용자가 일방적으로 중단할 수 없습니다.</p>',
    sections: [
      {
        title: '관행이 근로계약으로 인정되는 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">기업 관행이 근로계약 내용이 되려면 아래 요건을 모두 갖추어야 합니다.</strong></p>\n<ul>\n<li><strong>반복·계속성</strong> — 상당 기간(통상 수년) 동안 반복·계속하여 행해졌어야 합니다.</li>\n<li><strong>전 직원 적용</strong> — 특정 개인이 아니라 해당 직종 또는 전 직원에게 일률적으로 적용되었어야 합니다.</li>\n<li><strong>사용자 인식</strong> — 사용자(경영진)가 이러한 관행을 인식하고 묵인하거나 승인한 것이어야 합니다.</li>\n<li><strong>규범 의식</strong> — 노사 양측이 이를 당연한 것으로 여기고, "이 관행은 지켜져야 한다"는 인식이 형성되었어야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 4가지 요건이 모두 충족되면 해당 관행은 근로계약의 일부이며, 근로자 동의 없이 일방적으로 변경할 수 없습니다.</blockquote>',
      },
      {
        title: '관행 수당 중단이 유효한 경우',
        content:
          '<p><strong style="color:#1e3a5f">아래 경우에는 회사가 수당을 중단하더라도 위법이 아닐 수 있습니다.</strong></p>\n<ul>\n<li><strong>취업규칙 변경 절차</strong> — 근로자 과반수의 동의를 받아 취업규칙을 변경하여 수당을 폐지한 경우</li>\n<li><strong>노사합의</strong> — 단체협약 개정을 통해 수당 항목을 삭제한 경우</li>\n<li><strong>규범 의식 부재</strong> — 관행이 있었더라도 "가능한 한 지급해야 한다"는 규범 의식이 형성되지 않았다면 근로계약 내용으로 인정되지 않습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>중단된 수당이 임금인지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">지급 이력, 대상 범위, 중단 경위를 입력하면 근로계약 인정 여부를 무료로 분석합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수당 중단 시 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">증거 확보가 핵심입니다. 지급 이력과 회사의 인식을 보여주는 자료를 모으세요.</strong></p>\n<ul>\n<li><strong>급여명세서</strong> — 수년간의 급여명세서에서 해당 수당이 지급된 이력을 확인합니다.</li>\n<li><strong>사내 공지·규정</strong> — 급여규정, 복리후생 규정, 사내 게시판 공지 등에서 해당 수당의 근거를 찾습니다.</li>\n<li><strong>동료 진술</strong> — 같은 수당을 받았던 동료들의 진술서를 확보하면 "전 직원 적용" 요건을 입증할 수 있습니다.</li>\n<li><strong>노동부 진정</strong> — 임금 미지급으로 진정을 제기하면 근로감독관이 관행의 임금성을 조사합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 관행의 근로계약 인정 요건',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업의 내부에 존재하는 특정의 관행이 근로계약의 내용을 이루고 있다고 인정하려면, 일정 기간 반복·계속되고 사용자가 이를 인식하며 노사 양측에 규범 의식이 형성되어야 한다고 판시했습니다.',
        takeaway:
          '관행이 근로계약으로 인정되려면 4가지 요건이 모두 충족되어야 합니다. 특히 "규범 의식"을 입증하기 위해 동료 진술과 사내 규정을 확보하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '관행으로 지급된 수당도 퇴직금 계산에 포함되나요?',
        answer:
          '<p>근로계약의 내용으로 인정된 관행 수당은 임금에 해당하므로 평균임금 산정에 포함됩니다. 퇴직금 계산 시 누락되었다면 차액을 청구할 수 있습니다.</p>',
      },
      {
        question: '3년간만 지급된 수당도 관행으로 인정될 수 있나요?',
        answer:
          '<p>"상당 기간"의 정확한 기준은 없지만, 3년 정도면 반복·계속성이 인정될 가능성이 있습니다. 다만 직원 전체에게 일률적으로 적용되었는지, 사용자의 인식 여부 등 다른 요건도 함께 충족되어야 합니다.</p>',
      },
      {
        question: '회사가 경영난을 이유로 수당을 중단하면 합법인가요?',
        answer:
          '<p>관행이 근로계약 내용으로 인정되면 경영난만으로 일방 중단할 수 없습니다. 근로자 과반수 동의를 받은 취업규칙 변경 절차를 거쳐야 합니다.</p>',
      },
      {
        question: '신입사원에게는 해당 수당이 지급되지 않았어도 관행인가요?',
        answer:
          '<p>신입사원 제외가 처음부터 일관된 관행이었다면 전 직원 적용 요건을 충족하지 못할 수 있습니다. 반대로 기존 직원 전체에게 적용되었다면 해당 범위 내에서 관행이 인정될 수 있습니다.</p>',
      },
    ],
    cta: { text: '관행 수당 임금성 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '사업주 대응 방법', href: '/guide/wage/unpaid-wage-employer-response' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '임금체불 지연이자', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

  // ── 임금체불 10. 소액 임금체불 소송 전략 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-small-amount-lawsuit',
    keyword: '소액 임금체불 소송 회수',
    questionKeyword: '소액 임금체불인데 소송할 가치가 있나요?',
    ctaKeyword: '소액 임금체불 회수 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '소액 임금체불 회수 전략 — 비용 없이 받는 4가지 방법 | 로앤가이드',
      description:
        '밀린 임금이 소액이라 소송이 부담되지만 꼭 받고 싶다면, 비용 대비 실효적인 회수 방법을 지금 확인하세요.',
    },
    intro:
      '<p>아르바이트 2개월치 급여 180만원이 밀려 있습니다. 사장님은 "곧 준다"며 반년째 미루고 있습니다. 변호사를 선임하자니 비용이 더 들 것 같고, 포기하자니 억울합니다. 소액 임금체불도 노동부 진정, 소액사건 심판, 지급명령 등 비용이 거의 들지 않는 방법으로 회수할 수 있습니다.</p>',
    sections: [
      {
        title: '소액 임금체불 회수를 위한 4가지 방법',
        content:
          '<p><strong style="color:#1e3a5f">금액이 작을수록 비용이 적게 드는 방법을 선택하세요.</strong></p>\n<ul>\n<li><strong>1. 고용노동부 진정</strong> — 무료입니다. 관할 노동지청에 진정을 제기하면 근로감독관이 사업주를 출석시켜 조사합니다. 대부분의 소액 체불은 이 단계에서 해결됩니다.</li>\n<li><strong>2. 지급명령 신청</strong> — 인지대 수천원만 드는 간편한 법원 절차입니다. 사업주가 이의를 제기하지 않으면 확정판결과 같은 효력이 생깁니다.</li>\n<li><strong>3. 소액사건 심판</strong> — 청구금액 3,000만원 이하의 소액사건은 1회 변론으로 즉시 판결할 수 있습니다. 변호사 없이 본인이 직접 진행 가능합니다.</li>\n<li><strong>4. 간이 체당금</strong> — 사업주가 폐업하거나 지급능력이 없으면 최대 1,000만원까지 국가가 대신 지급합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소액이라고 포기하지 마세요. 노동부 진정은 무료이고, 지급명령은 인지대 수천원이면 됩니다.</blockquote>',
      },
      {
        title: '지급명령과 소액사건의 비교',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 체불 사실 자체를 부인하지 않으면 지급명령이 가장 빠르고 저렴합니다.</strong></p>\n<ul>\n<li><strong>지급명령</strong> — 법원에 서면으로만 신청하며, 기각되지 않는 한 법관이 바로 지급명령을 발부합니다. 사업주가 2주 내 이의를 제기하면 소액사건으로 전환됩니다.</li>\n<li><strong>소액사건</strong> — 법정에 출석하여 1회 변론 후 바로 판결받습니다. 증거가 명확하면 당일 선고도 가능합니다.</li>\n<li><strong>비용 비교</strong> — 지급명령: 인지대 약 5,000~10,000원 / 소액사건: 인지대 약 10,000~50,000원(청구 금액에 따라 다름)</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>소액 임금체불 최적 회수 방법, AI가 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 금액, 사업주 상황, 증거를 입력하면 가장 효과적인 방법을 무료로 추천합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '강제집행으로 실제 회수하기',
        content:
          '<p><strong style="color:#1e3a5f">판결이나 지급명령을 받아도 사업주가 안 주면 강제집행으로 받아야 합니다.</strong></p>\n<ul>\n<li><strong>채권 압류</strong> — 사업주의 은행 예금, 매출채권 등을 압류하여 직접 추심합니다. 사업자등록번호를 알면 거래 은행을 조회할 수 있습니다.</li>\n<li><strong>재산 조회</strong> — 법원에 재산명시·재산조회를 신청하면 사업주의 부동산, 차량, 예금 등을 확인할 수 있습니다.</li>\n<li><strong>형사처벌 압박</strong> — 임금체불은 3년 이하 징역 또는 3천만원 이하 벌금의 형사처벌 대상으로 검토될 수 있습니다. 형사고소를 통해 실질적인 압박을 가할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소액사건 상고이유 제한과 근로자 보호',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 소액사건에 관하여 상고이유가 제한되더라도 실체법 해석·적용의 잘못이 있는 경우에는 대법원이 판단할 수 있다고 하면서, 격일제 근무의 소정근로시간 산정 방법에 관하여 판시했습니다.',
        takeaway:
          '소액사건이라도 중요한 법률 쟁점이 있으면 대법원까지 다툴 수 있습니다. 소액이라고 법적 보호가 약해지는 것이 아닙니다.',
      },
    ],
    faq: [
      {
        question: '노동부 진정을 하면 사업주가 보복하지 않을까요?',
        answer:
          '<p>임금체불 진정을 이유로 한 불이익 처분(해고, 감봉 등)은 부당해고에 해당하며, 별도의 구제신청 사유가 됩니다. 근로기준법 제104조에 따라 진정 근로자에 대한 불이익 처분은 금지됩니다.</p>',
      },
      {
        question: '사업주에게 재산이 없으면 어떻게 하나요?',
        answer:
          '<p>사업주에게 재산이 없으면 체당금(간이 체당금)을 신청하세요. 노동부 체불 확인 후 근로복지공단에서 최대 1,000만원까지 대신 지급합니다.</p>',
      },
      {
        question: '아르바이트생도 지급명령을 신청할 수 있나요?',
        answer:
          '<p>네. 근로기준법상 근로자이면 고용 형태에 관계없이 지급명령을 신청할 수 있습니다. 근로계약서, 급여 입금 내역, 근무 일지 등을 증거로 첨부하세요.</p>',
      },
      {
        question: '소액사건에서 지면 비용을 물어야 하나요?',
        answer:
          '<p>패소하면 상대방의 소송비용(인지대, 송달료 등)을 부담할 수 있지만, 소액사건의 비용은 매우 적습니다. 변호사 선임 비용은 각자 부담이 원칙이므로 추가 부담은 크지 않습니다.</p>',
      },
    ],
    cta: { text: '소액 임금체불 최적 회수 방법 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '3년 소멸시효', href: '/guide/wage/unpaid-wage-3year-limitation' },
    ],
  },

  // ── 임금체불 11. 사업주 소멸시효 신의칙 위반 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-employer-statute-bad-faith',
    keyword: '임금체불 소멸시효 신의칙',
    questionKeyword: '사업주가 소멸시효를 주장하는데 부당한 건 아닌가요?',
    ctaKeyword: '임금 소멸시효 신의칙 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '임금체불 소멸시효 신의칙 위반 — 시효 넘겨도 받는 법 | 로앤가이드',
      description:
        '사업주가 소멸시효를 주장하며 밀린 임금 지급을 거부하고 있다면, 신의칙 위반 여부를 지금 확인하세요.',
    },
    intro:
      '<p>"곧 정산해주겠다"는 사장님 말만 믿고 4년이 지났습니다. 이제 와서 "소멸시효가 지났으니 줄 의무가 없다"고 합니다. 정말 이렇게 넘어가야 하는 걸까요. 대법원 판례에 따르면 사용자가 근로자의 권리행사를 방해하거나 신뢰를 유발한 후 시효를 주장하는 것은 신의성실 원칙에 반하는 권리남용에 해당하여 허용되지 않습니다.</p>',
    sections: [
      {
        title: '사업주의 시효 항변이 신의칙에 반하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">아래 유형에 해당하면 시효 완성을 주장할 수 없습니다.</strong></p>\n<ul>\n<li><strong>지급 약속 후 불이행</strong> — "곧 주겠다", "다음 달에 정산하겠다"는 약속으로 근로자의 법적 조치를 지연시킨 경우</li>\n<li><strong>청구 방해</strong> — 근로자가 임금을 요구할 때마다 불이익을 시사하거나, 자료 제공을 거부하여 청구를 어렵게 만든 경우</li>\n<li><strong>근로자성 분쟁 유발</strong> — 사용자가 근로자를 프리랜서·위탁계약으로 위장한 후, 나중에 "근로자가 아니었다"며 시효를 주장하는 경우</li>\n<li><strong>채무 일부 승인</strong> — 일부 금액만 먼저 지급하며 나머지도 주겠다고 하다가, 시효 완성 후 태도를 바꾸는 경우</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업주가 시효 기간 중 "줄 뜻이 있다"는 태도를 보였다면, 시효 완성 후 태도를 바꾸는 것은 신의칙 위반입니다.</blockquote>',
      },
      {
        title: '신의칙 주장을 위한 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">"사업주가 왜 시효 기간 내에 내가 청구하지 못하게 했는가"를 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>대화 기록</strong> — 카카오톡, 문자, 이메일에서 사업주의 지급 약속, 지연 이유 설명 등을 캡처합니다.</li>\n<li><strong>녹음 파일</strong> — 대면 또는 전화 통화에서 "주겠다"는 발언을 녹음한 자료가 있으면 결정적입니다.</li>\n<li><strong>증인 진술</strong> — 동료 근로자가 사업주의 지급 약속을 들은 경우 진술서를 확보합니다.</li>\n<li><strong>일부 지급 내역</strong> — 사업주가 일부 금액이라도 지급한 기록이 있으면 채무 승인의 증거가 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>시효 항변 돌파 가능성, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사업주의 태도, 약속 이력, 보유 증거를 입력하면 신의칙 적용 가능성을 무료로 확인합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '소송 절차와 전략',
        content:
          '<p><strong style="color:#1e3a5f">신의칙 주장은 가능한 한 소송에서 다투어야 합니다.</strong></p>\n<ul>\n<li><strong>소 제기</strong> — 임금 지급 청구 소송을 제기하면서 "피고의 소멸시효 항변은 신의칙에 반하여 허용될 수 없다"고 주장합니다.</li>\n<li><strong>입증 전략</strong> — 시효 기간 중 사업주의 행위(약속, 기망, 방해)를 시간순으로 정리하여 제출합니다.</li>\n<li><strong>예비적 청구</strong> — 신의칙 주장이 받아들여지지 않을 경우를 대비하여, 불법행위 손해배상(10년 시효)을 예비적으로 청구하는 전략도 고려합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신의칙은 예외적 법리이므로 증거가 핵심입니다. "사업주가 시효를 유도했다"는 정황이 명확할수록 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 주장과 신의성실 원칙 위반',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자가 소멸시효 완성을 주장하는 것이 신의성실의 원칙에 반하여 권리남용으로서 허용될 수 없는 경우가 있으며, 사용자가 근로자의 권리 행사를 방해하거나 지급을 약속한 사정 등을 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '사업주가 시효 기간 동안 지급 의사를 표시하며 근로자의 청구를 미루게 한 후 시효를 주장하는 것은 권리남용입니다. 약속과 태도 변화를 증명하는 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '임금채권 소멸시효와 퇴직금 소멸시효는 같은 3년인가요?',
        answer:
          '<p>네. 임금채권과 퇴직금 청구권 모두 소멸시효는 3년입니다. 임금은 지급일로부터, 퇴직금은 퇴직일로부터 각각 기산됩니다.</p>',
      },
      {
        question: '사업주가 구두로만 "주겠다"고 했는데 증거가 될까요?',
        answer:
          '<p>구두 약속만으로는 입증이 어렵습니다. 가능하다면 약속 직후에 문자나 카톡으로 "아까 말씀하신 대로 다음 달에 정산해주시는 거죠?"라고 확인하여 기록을 남기세요.</p>',
      },
      {
        question: '노동부 진정만으로 신의칙을 주장할 수 있나요?',
        answer:
          '<p>노동부 근로감독관은 소멸시효와 신의칙 같은 민사법적 쟁점을 판단하지 않습니다. 시효 관련 다툼은 민사소송에서 해결해야 합니다.</p>',
      },
      {
        question: '불법행위 손해배상으로 청구하면 시효가 10년인가요?',
        answer:
          '<p>사업주의 임금 미지급이 불법행위에 해당하면 손해배상 청구권의 시효는 "안 날로부터 3년, 불법행위일로부터 10년"입니다. 다만 임금채권이 아닌 손해배상으로 인정되려면 별도의 요건이 필요합니다.</p>',
      },
      {
        question: '시효가 얼마 남지 않았는데 소송 준비 시간이 부족하면?',
        answer:
          '<p>소멸시효 중단을 위해 "최고"(내용증명)를 먼저 보내세요. 최고 후 6개월 이내에 소송을 제기하면 시효가 중단됩니다. 시간이 급할 때 활용하는 방법입니다.</p>',
      },
    ],
    cta: { text: '시효 항변 돌파 가능성 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '3년 소멸시효', href: '/guide/wage/unpaid-wage-3year-limitation' },
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },
];
