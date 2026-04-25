import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 퇴직금 5개 + 임금체불 4개 (batch29)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch29RetirementWage: SpokePage[] = [
  // ── 퇴직금 1. 미사용 연차수당 퇴직금 산입 여부 ──
  {
    domain: 'retirement',
    slug: 'retirement-annual-leave-payout-included',
    keyword: '미사용 연차수당 퇴직금 포함',
    questionKeyword: '미사용 연차수당이 퇴직금에 포함되나요?',
    ctaKeyword: '연차수당 퇴직금 포함 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '미사용 연차수당 퇴직금 산입 여부 핵심 정리 | 로앤가이드',
      description:
        '퇴직금 계산 시 미사용 연차수당이 포함되는지 헷갈린다면, 산입 기준과 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>퇴직을 앞두고 연차가 10일이나 남아 있습니다. 이 미사용 연차수당이 퇴직금 계산에 포함되는지 궁금합니다. 결론부터 말하면, 퇴직으로 인해 비로소 지급사유가 발생하는 미사용 연차수당은 퇴직금 산정 기초임금인 평균임금에 포함됩니다. 다만 포함 여부는 연차수당의 발생 시점에 따라 달라집니다.</p>',
    sections: [
      {
        title: '미사용 연차수당이 퇴직금에 포함되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">퇴직으로 인해 발생하는 미사용 연차수당은 평균임금에 포함됩니다.</strong></p>\n<p>대법원 판례에 따르면 근로관계 종료로 비로소 지급사유가 확정되는 미사용 연차유급휴가수당은 퇴직금 산정의 기초가 되는 평균임금에 포함됩니다.</p>\n<ul>\n<li><strong>당해 연도 미사용 연차</strong> — 퇴직 시점까지 사용하지 못한 당해 연도 연차는 퇴직금에 포함됩니다.</li>\n<li><strong>전년도 미사용 연차</strong> — 전년도에 이미 발생하여 그 해 급여로 지급받았어야 할 연차수당은 별도의 임금으로 포함 여부가 달라집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "퇴직으로 인해 비로소 발생한" 연차수당만 퇴직금 평균임금에 포함됩니다. 이미 지급시기가 도래한 전년도 연차수당은 체불임금으로 별도 청구해야 합니다.</blockquote>',
      },
      {
        title: '퇴직금 계산에 연차수당이 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">연차수당이 포함되면 퇴직금이 상당히 늘어날 수 있습니다.</strong></p>\n<p>퇴직금은 퇴직 전 3개월 평균임금 × 근속연수로 계산됩니다. 미사용 연차수당이 평균임금에 포함되면 3개월 평균이 높아져 퇴직금이 증가합니다.</p>\n<ul>\n<li><strong>계산 예시</strong> — 월급 300만원, 미사용 연차 15일(수당 약 210만원)이면 퇴직 전 3개월 평균임금이 약 70만원 상승합니다.</li>\n<li><strong>근속연수 곱하기</strong> — 10년 근속이면 70만원 × 10년 = 약 700만원의 퇴직금 차이가 생깁니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>연차수당 포함한 정확한 퇴직금, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 연차 잔여일수, 근속연수를 입력하면 퇴직금을 무료로 계산합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '미사용 연차수당 관련 분쟁 시 대처법',
        content:
          '<p><strong style="color:#1e3a5f">회사가 연차수당을 퇴직금에 포함하지 않으면 노동부 진정을 제기하세요.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 연차 사용 현황, 급여명세서, 근로계약서를 보관하세요.</li>\n<li><strong>노동부 진정</strong> — 고용노동부에 퇴직금 미지급 진정을 제기합니다.</li>\n<li><strong>민사소송</strong> — 진정으로 해결이 안 되면 소액사건심판(3,000만원 이하)을 통해 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직연금과 퇴직금일시금 산정 기준',
        summary:
          '대법원 2021다255853 사건(대법원, 2024.11.21 선고)에서 법원은 퇴직연금 또는 퇴직연금일시금 상당의 손해배상채권 산정 시 평균임금을 기초로 해야 한다고 판시하면서, 퇴직금 산정의 기초가 되는 평균임금의 범위를 명확히 했습니다.',
        takeaway:
          '퇴직금 산정 시 평균임금에 포함되는 항목을 정확히 확인하세요. 미사용 연차수당뿐 아니라 정기적으로 지급받은 각종 수당도 포함될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '연차를 하루도 안 쓰고 퇴직하면 전부 퇴직금에 포함되나요?',
        answer:
          '<p>퇴직으로 인해 비로소 지급사유가 발생하는 당해 연도 미사용 연차수당은 전부 포함됩니다. 다만 전년도 미사용분은 별도로 판단해야 합니다.</p>',
      },
      {
        question: '회사가 "연차수당은 퇴직금과 별개"라고 하는데 맞나요?',
        answer:
          '<p>틀립니다. 대법원 판례에 따라 퇴직으로 발생하는 미사용 연차수당은 퇴직금 평균임금에 포함됩니다.</p>',
      },
      {
        question: '연차촉진제도를 시행하면 미사용 연차수당이 발생하지 않나요?',
        answer:
          '<p>회사가 연차촉진 절차(사용 시기 지정 통보 → 근로자 미지정 → 재촉구)를 적법하게 이행하면 미사용 연차수당 지급 의무가 면제됩니다. 절차에 하자가 있으면 수당을 청구할 수 있습니다.</p>',
      },
      {
        question: '퇴직금 중간정산을 받았는데 연차수당 포함 여부는?',
        answer:
          '<p>중간정산 시점에서 퇴직 전 3개월 평균임금으로 산정하므로, 중간정산 시점의 미사용 연차수당이 포함될 수 있습니다.</p>',
      },
    ],
    cta: { text: '연차수당 포함 퇴직금 계산 AI로 즉시 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 14일 규칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '퇴직금 미지급 청구', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ── 퇴직금 2. 1년 미만 근무 퇴직금 지급 ──
  {
    domain: 'retirement',
    slug: 'retirement-less-than-1year-eligibility',
    keyword: '1년 미만 근무 퇴직금',
    questionKeyword: '1년 미만 근무해도 퇴직금을 받을 수 있나요?',
    ctaKeyword: '1년 미만 퇴직금 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '1년 미만 근무 퇴직금 — 받을 수 있는 경우 3가지 | 로앤가이드',
      description:
        '1년을 못 채우고 퇴직했는데 퇴직금을 받을 수 있을지 궁금하다면, 예외 사항을 지금 확인하세요.',
    },
    intro:
      '<p>11개월 근무하다 퇴직했습니다. 퇴직금은 1년 이상 근무해야 받는다고 알고 있는데, 정말 한 달 차이로 퇴직금을 못 받는 건지 억울합니다. 근로기준법상 퇴직금은 계속근로기간 1년 이상이 원칙이지만, 예외적으로 받을 수 있는 경우가 있습니다.</p>',
    sections: [
      {
        title: '퇴직금 지급 기준: 계속근로기간 1년',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 제4조에 따라 계속근로기간이 1년 이상이면 퇴직금을 받습니다.</strong></p>\n<p>1년 미만 근무자는 원칙적으로 퇴직금을 받을 수 없습니다. 다만 "1년"의 계산 방법에서 유리한 경우가 있습니다.</p>\n<ul>\n<li><strong>수습기간 포함</strong> — 수습기간도 계속근로기간에 포함됩니다. 수습 3개월 + 정규직 9개월 = 12개월로 1년을 충족합니다.</li>\n<li><strong>시용기간 포함</strong> — 시용(試用)기간도 근로를 제공한 기간이므로 포함됩니다.</li>\n<li><strong>휴직기간</strong> — 산전후휴가, 육아휴직 기간도 계속근로기간에 포함됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수습기간, 시용기간, 휴직기간 모두 포함하여 정확히 1년(365일)인지 다시 계산해보세요.</blockquote>',
      },
      {
        title: '1년 미만이지만 퇴직금을 받을 수 있는 예외',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙이나 근로계약서에 1년 미만에도 퇴직금을 지급한다고 되어 있으면 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>취업규칙·단체협약</strong> — "6개월 이상 근무 시 퇴직금 지급" 등 법 기준보다 유리한 조항이 있으면 적용됩니다.</li>\n<li><strong>근로계약서 특약</strong> — 계약서에 퇴직금 지급 기준이 별도로 명시된 경우입니다.</li>\n<li><strong>갱신 반복 계약</strong> — 계약 갱신이 반복되어 실질적으로 1년 이상 근무한 것으로 인정되는 경우도 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>1년 미만 근무 퇴직금 수령 가능 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무 시작일, 퇴직일, 수습기간을 입력하면 퇴직금 자격을 무료로 확인하세요.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '1년을 고의로 못 채우게 하는 경우 대응법',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 퇴직금을 피하기 위해 11개월에 해고하면 부당해고일 수 있습니다.</strong></p>\n<ul>\n<li><strong>부당해고 의심</strong> — 퇴직금 회피 목적으로 1년 미만에 해고하는 것은 부당해고에 해당할 수 있습니다.</li>\n<li><strong>계약 갱신 거절</strong> — 기간제 계약을 반복 갱신하다가 11개월 시점에 갱신 거절하는 패턴도 마찬가지입니다.</li>\n<li><strong>대응</strong> — 노동위원회에 부당해고 구제신청과 함께 퇴직금 미지급 진정을 제기하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자 퇴직금 공제 범위',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 파견근로자가 직접고용간주의 효과가 발생한 경우, 사용사업주가 퇴직금에서 공제할 수 있는 범위를 판단했습니다.',
        takeaway:
          '파견·용역 근로자도 동일한 사업장에서 계속 근무한 기간이 1년 이상이면 퇴직금을 받을 수 있습니다. 파견 형태라도 실질적 계속근로기간을 따져보세요.',
      },
    ],
    faq: [
      {
        question: '입사일이 1월 2일이고 퇴직일이 12월 31일이면 1년인가요?',
        answer:
          '<p>12월 31일까지 근무하면 계속근로기간이 364일로 1년에 1일 부족합니다. 1월 1일까지 근무해야 정확히 365일(1년)입니다.</p>',
      },
      {
        question: '주 15시간 미만 단시간 근로자도 퇴직금을 받나요?',
        answer:
          '<p>4주 평균 주 15시간 미만 근로자는 퇴직금 적용 대상에서 제외됩니다. 15시간 이상이면 1년 근무 시 퇴직금을 받을 수 있습니다.</p>',
      },
      {
        question: '무급휴직 기간도 계속근로기간에 포함되나요?',
        answer:
          '<p>무급휴직도 근로관계가 유지되는 한 계속근로기간에 포함됩니다. 다만 평균임금 산정에서는 제외될 수 있습니다.</p>',
      },
      {
        question: '11개월 28일 근무했는데 회사가 퇴직금을 안 줍니다.',
        answer:
          '<p>수습·시용·휴직기간을 모두 포함하여 정확한 계속근로기간을 계산해보세요. 1년 미달이 맞다면 법적으로 퇴직금 의무는 없지만, 취업규칙에 유리한 조항이 있는지 확인하세요.</p>',
      },
    ],
    cta: { text: '1년 미만 퇴직금 자격 AI로 즉시 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '수습기간 퇴직금', href: '/guide/retirement/retirement-probation-period-calculation' },
      { label: '계약직 1년 미만', href: '/guide/retirement/retirement-contract-worker-under-1year' },
      { label: '퇴직금 미지급 청구', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
    ],
  },

  // ── 퇴직금 3. 퇴직금 세금 계산 ──
  {
    domain: 'retirement',
    slug: 'retirement-severance-tax-calculation',
    keyword: '퇴직금 세금 계산',
    questionKeyword: '퇴직금에서 세금이 얼마나 빠지나요?',
    ctaKeyword: '퇴직금 세금 계산 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 세금 계산법 — 퇴직소득세 절세 방법 3가지 | 로앤가이드',
      description:
        '퇴직금을 받으면 세금이 얼마나 빠지는지 걱정된다면, 퇴직소득세 계산법과 절세 방법을 지금 확인하세요.',
    },
    intro:
      '<p>20년 근무하고 퇴직금 5,000만원을 받게 되었습니다. 여기서 세금이 얼마나 빠지는지 걱정됩니다. 퇴직소득세는 근속연수에 따라 공제가 커지므로 장기근속자일수록 유리합니다. 계산법과 절세 방법을 정리합니다.</p>',
    sections: [
      {
        title: '퇴직소득세 계산 구조',
        content:
          '<p><strong style="color:#1e3a5f">퇴직소득세는 일반 소득세보다 훨씬 유리한 구조입니다.</strong></p>\n<p>퇴직소득은 분류과세되므로 다른 소득과 합산되지 않습니다. 또한 근속연수에 따른 공제가 적용되어 세부담이 크게 줄어듭니다.</p>\n<ol>\n<li><strong>퇴직소득 산정</strong> — 퇴직금 총액에서 비과세 항목을 차감합니다.</li>\n<li><strong>근속연수 공제</strong> — 근속연수에 따라 일정 금액을 공제합니다(5년 이하: 30만원×근속연수, 10년 이하: 150만원+50만원×(근속연수-5년) 등).</li>\n<li><strong>환산급여 산출</strong> — (퇴직소득 - 근속연수 공제) × 12 ÷ 근속연수로 환산합니다.</li>\n<li><strong>환산급여 공제</strong> — 환산급여에서 추가 공제를 적용합니다.</li>\n<li><strong>세율 적용</strong> — 환산급여 과세표준에 소득세율을 적용한 후 근속연수로 나눕니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근속연수가 길수록 공제가 커져 세금이 적어집니다. 20년 근무 시 퇴직금 5,000만원의 세금은 약 50~100만원 수준입니다.</blockquote>',
      },
      {
        title: '퇴직금 세금 절세 방법 3가지',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 수령 방법에 따라 세금을 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>IRP(개인형 퇴직연금) 이체</strong> — 퇴직금을 IRP 계좌로 이체하면 퇴직소득세가 이연됩니다. 연금으로 수령 시 퇴직소득세의 60~70%만 납부합니다.</li>\n<li><strong>연금 수령</strong> — IRP에서 연금으로 분할 수령하면 연금소득세(3.3~5.5%)가 적용되어 일시금보다 세금이 적습니다.</li>\n<li><strong>퇴직 시기 조정</strong> — 연말보다 연초에 퇴직하면 당해 연도 근속기간이 짧아져 불리할 수 있으니 퇴직 시점도 고려하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>퇴직금 세금과 실수령액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 총액과 근속연수를 입력하면 퇴직소득세와 실수령액을 무료로 계산합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직금 세금 관련 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">퇴직소득세 신고는 회사가 원천징수합니다.</strong></p>\n<ul>\n<li><strong>원천징수</strong> — 회사가 퇴직소득세를 원천징수하여 세금을 뺀 후 지급합니다.</li>\n<li><strong>퇴직소득 원천징수영수증</strong> — 회사에서 발급받아 보관하세요. 종합소득세 신고나 연말정산에 필요할 수 있습니다.</li>\n<li><strong>IRP 미이체 시</strong> — IRP로 이체하지 않으면 퇴직소득세가 즉시 원천징수됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직연금 산정과 근로자 보호',
        summary:
          '대법원 2022다285097 사건(대법원, 2024.01.04 선고)에서 법원은 퇴직연금의 산정 기준을 실체법적으로 해석하면서 근로자에게 유리한 방향으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '퇴직금 산정 시 포함되는 임금 항목이 많을수록 퇴직금이 늘어나고, 근속연수 공제로 세금 부담도 줄어듭니다. 정확한 계산을 위해 급여 항목을 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: 'IRP로 퇴직금을 이체하면 세금을 아예 안 내나요?',
        answer:
          '<p>세금을 안 내는 것이 아니라 이연(연기)되는 것입니다. IRP에서 인출할 때 퇴직소득세가 부과되며, 연금으로 수령하면 30~40% 할인됩니다.</p>',
      },
      {
        question: '퇴직금이 소액이면 세금이 없나요?',
        answer:
          '<p>근속연수 공제와 환산급여 공제를 적용한 후 과세표준이 0 이하이면 세금이 없습니다. 근속연수가 길고 퇴직금이 적으면 세금이 0원일 수 있습니다.</p>',
      },
      {
        question: '퇴직소득세를 잘못 계산해서 더 냈으면 돌려받나요?',
        answer:
          '<p>다음 해 5월 종합소득세 신고 시 퇴직소득세 정산이 가능합니다. 또는 원천징수의무자인 회사에 경정청구를 요청할 수 있습니다.</p>',
      },
      {
        question: '퇴직금과 퇴직연금은 세금이 다른가요?',
        answer:
          '<p>퇴직금과 퇴직연금(DB형) 모두 퇴직소득세가 동일하게 적용됩니다. DC형 퇴직연금의 운용수익분은 별도의 과세 체계가 적용됩니다.</p>',
      },
    ],
    cta: { text: '퇴직금 세금 계산 AI로 즉시 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: 'DC·DB형 차이', href: '/guide/retirement/retirement-dc-db-type-difference' },
      { label: '퇴직금 14일 규칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 미지급 청구', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ── 퇴직금 4. 건설 일용직 퇴직공제금 ──
  {
    domain: 'retirement',
    slug: 'retirement-construction-daily-claim',
    keyword: '건설 일용직 퇴직공제금',
    questionKeyword: '건설 일용직도 퇴직금을 받을 수 있나요?',
    ctaKeyword: '건설 일용직 퇴직금 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '건설 일용직 퇴직공제금 신청 방법 3단계 | 로앤가이드',
      description:
        '건설 현장에서 일용직으로 일했다면, 퇴직공제금을 받을 수 있는 조건과 신청 방법을 지금 확인하세요.',
    },
    intro:
      '<p>10년 넘게 건설 현장에서 일용직으로 일했습니다. 월급제가 아니라 퇴직금이 없다고 생각했는데, "퇴직공제금"이라는 것이 있다고 합니다. 건설근로자 퇴직공제제도는 건설 현장을 옮겨 다니는 일용직 근로자를 위한 퇴직금 제도입니다.</p>',
    timelineSteps: [
      '1단계: 건설근로자공제회 가입 확인',
      '2단계: 적립일수 252일 이상 확인',
      '3단계: 퇴직공제금 신청',
    ],
    sections: [
      {
        title: '건설근로자 퇴직공제제도란',
        content:
          '<p><strong style="color:#1e3a5f">건설 현장을 옮겨 다니는 일용직을 위한 퇴직금 대체 제도입니다.</strong></p>\n<p>건설산업기본법에 따라 일정 규모 이상의 건설공사에서는 사업주가 건설근로자공제회에 퇴직공제 부금을 납부해야 합니다.</p>\n<ul>\n<li><strong>적립 방식</strong> — 사업주가 근로자의 근로일수에 따라 1일당 일정 금액(2024년 기준 5,100원)을 적립합니다.</li>\n<li><strong>여러 현장 합산</strong> — 다른 현장으로 옮겨도 적립금이 합산됩니다.</li>\n<li><strong>수급 요건</strong> — 적립일수가 252일 이상이면 퇴직공제금을 신청할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 건설근로자공제회 홈페이지(cwma.or.kr)에서 적립일수와 예상 퇴직공제금을 확인할 수 있습니다.</blockquote>',
      },
      {
        title: '퇴직공제금 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">건설 현장 퇴직 후 건설근로자공제회에 신청합니다.</strong></p>\n<ul>\n<li><strong>온라인 신청</strong> — 건설근로자공제회 홈페이지(cwma.or.kr)에서 신청할 수 있습니다.</li>\n<li><strong>방문 신청</strong> — 공제회 지사에 신분증, 통장 사본을 지참하고 방문합니다.</li>\n<li><strong>필요 서류</strong> — 신분증, 본인 명의 통장 사본, 건설업 퇴직 사실 증빙(해당 시)입니다.</li>\n<li><strong>지급 기간</strong> — 신청 후 통상 14일 이내에 지급됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>건설 일용직 퇴직공제금 예상액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">적립일수와 근무 기간을 입력하면 퇴직공제금 예상액을 무료로 확인하세요.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '적립일수가 부족하거나 누락된 경우',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 공제 부금을 납부하지 않아 적립일수가 누락될 수 있습니다.</strong></p>\n<ul>\n<li><strong>적립일수 확인</strong> — 공제회 홈페이지에서 현장별 적립 내역을 확인하세요.</li>\n<li><strong>누락 신고</strong> — 사업주가 미납한 경우 공제회에 신고하면 사업주에게 납부 독촉이 됩니다.</li>\n<li><strong>252일 미달</strong> — 적립일수가 252일 미만이면 퇴직공제금을 받을 수 없습니다. 다만 추가 근무로 적립일수를 채울 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권추심원의 근로자성 인정과 퇴직금',
        summary:
          '대법원 2020다296819 사건(대법원, 2022.08.19 선고)에서 법원은 근로기준법상 근로자 해당 여부는 실질적 사용종속관계를 기준으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '건설 일용직도 실질적 근로관계가 인정되면 퇴직공제금뿐 아니라 퇴직금도 청구할 수 있습니다. 특정 사업장에서 1년 이상 계속 근무한 경우 퇴직금 청구를 검토하세요.',
      },
    ],
    faq: [
      {
        question: '건설 현장을 여러 곳 다녔는데 적립일수가 합산되나요?',
        answer:
          '<p>네, 건설근로자공제회에 가입된 모든 현장의 적립일수가 자동으로 합산됩니다. 공제회 홈페이지에서 전체 적립 내역을 확인하세요.</p>',
      },
      {
        question: '퇴직공제금과 퇴직금을 둘 다 받을 수 있나요?',
        answer:
          '<p>같은 현장에서 1년 이상 근무하여 퇴직금 요건도 충족하면 퇴직금도 별도로 청구할 수 있습니다. 다만 대부분의 일용직은 현장 이동이 잦아 퇴직금보다 퇴직공제금이 현실적입니다.</p>',
      },
      {
        question: '건설근로자공제회에 가입된 적이 없는데 어떡하나요?',
        answer:
          '<p>사업주가 가입 의무를 이행하지 않은 것이므로, 공제회에 미가입 사실을 신고하세요. 소급 적립이 가능할 수 있습니다.</p>',
      },
      {
        question: '퇴직공제금에도 세금이 붙나요?',
        answer:
          '<p>퇴직공제금은 퇴직소득으로 분류되어 퇴직소득세가 적용됩니다. 다만 금액이 적은 경우 세금이 거의 없을 수 있습니다.</p>',
      },
    ],
    cta: { text: '건설 일용직 퇴직공제금 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '일용직 퇴직금', href: '/guide/retirement/retirement-contract-worker-under-1year' },
      { label: '퇴직금 미지급 청구', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 지연이자', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '건설 일용직 실업급여', href: '/guide/unemployment/unemployment-construction-daily-apply' },
    ],
  },

  // ── 퇴직금 5. 여러 사업장 퇴직금 합산 ──
  {
    domain: 'retirement',
    slug: 'retirement-multiple-employer-calculation',
    keyword: '여러 사업장 퇴직금 합산',
    questionKeyword: '여러 회사를 다녔는데 퇴직금이 합산되나요?',
    ctaKeyword: '여러 사업장 퇴직금 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '여러 사업장 퇴직금 합산 가능 여부 총정리 | 로앤가이드',
      description:
        '이직을 여러 번 했는데 퇴직금이 합산되는지 궁금하다면, 사업장별 퇴직금 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>A회사에서 3년, B회사에서 2년, C회사에서 현재 근무 중입니다. 이직할 때마다 퇴직금을 각각 받아야 하는지, 합산해서 한꺼번에 받을 수 있는지 궁금합니다. 원칙적으로 퇴직금은 사업장별로 각각 산정·지급됩니다. 합산되는 예외 사례를 정리합니다.</p>',
    sections: [
      {
        title: '퇴직금은 사업장별로 각각 산정됩니다',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 해당 사업장에서의 계속근로기간만을 기준으로 산정합니다.</strong></p>\n<p>A회사에서 B회사로 이직하면 A회사의 퇴직금은 A회사에서, B회사의 퇴직금은 B회사에서 각각 지급받습니다.</p>\n<ul>\n<li><strong>이직 시 정산 원칙</strong> — 퇴직할 때마다 해당 사업장에서 퇴직금을 정산받는 것이 원칙입니다.</li>\n<li><strong>퇴직연금(DC형)</strong> — DC형 퇴직연금의 경우 IRP 계좌로 이체되어 자동으로 통합 관리됩니다.</li>\n<li><strong>퇴직연금(DB형)</strong> — DB형은 회사가 퇴직 시 지급하므로 사업장별로 정산됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직금은 합산되지 않습니다. 각 사업장 퇴직 시 개별 정산받으세요. IRP 계좌를 활용하면 퇴직금을 통합 관리할 수 있습니다.</blockquote>',
      },
      {
        title: '퇴직금이 합산되는 예외 사례',
        content:
          '<p><strong style="color:#1e3a5f">영업양도·합병 등으로 사업주가 변경된 경우 계속근로기간이 승계됩니다.</strong></p>\n<ul>\n<li><strong>영업양도</strong> — 사업이 양도되어 근로자가 새 사업주에게 포괄 승계된 경우, 이전 사업주 기간까지 계속근로기간에 포함됩니다.</li>\n<li><strong>합병·분할</strong> — 법인 합병이나 분할 시 근로관계가 승계되면 퇴직금도 합산됩니다.</li>\n<li><strong>파견→직접고용</strong> — 파견 근로자가 직접 고용으로 전환된 경우 파견 기간을 계속근로기간에 포함할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>여러 사업장 퇴직금 총액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">각 사업장별 근무기간과 급여를 입력하면 퇴직금을 각각 계산합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이전 사업장 퇴직금 미수령 시 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 청구 소멸시효는 3년입니다.</strong></p>\n<ul>\n<li><strong>3년 시효</strong> — 퇴직일로부터 3년이 지나면 퇴직금 청구권이 소멸합니다.</li>\n<li><strong>시효 중단</strong> — 고용노동부 진정, 내용증명 발송, 소송 제기 등으로 시효를 중단할 수 있습니다.</li>\n<li><strong>폐업 사업장</strong> — 사업주가 폐업한 경우 근로복지공단에 체당금을 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 퇴직금 승계',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 파견근로자가 직접고용간주 효과 발생 시, 사용사업주가 퇴직금에서 공제할 수 있는 범위를 판단하면서 계속근로기간의 승계 여부를 다루었습니다.',
        takeaway:
          '사업장이 양도되거나 합병된 경우, 이전 사업장에서의 근무기간도 퇴직금 산정에 포함될 수 있습니다. 고용 승계 여부를 확인하세요.',
      },
    ],
    faq: [
      {
        question: '전 직장에서 퇴직금을 안 받고 이직했으면 어떡하나요?',
        answer:
          '<p>퇴직일로부터 3년 이내라면 전 직장에 퇴직금을 청구하세요. 사업주가 거부하면 고용노동부에 진정을 제기할 수 있습니다.</p>',
      },
      {
        question: 'IRP 계좌로 받은 퇴직금은 합산되나요?',
        answer:
          '<p>IRP 계좌 내에서 여러 사업장의 퇴직금이 합산 관리되지만, 이는 세금 계산 목적의 통합이지 퇴직금 합산은 아닙니다. 각 사업장별 퇴직소득세가 별도 계산됩니다.</p>',
      },
      {
        question: '회사가 바뀌었는데 동일한 사무실에서 같은 일을 합니다.',
        answer:
          '<p>실질적으로 영업양도에 해당하면 계속근로기간이 승계됩니다. 사업자등록증 변경, 대표이사 변경 등만으로 근로관계의 단절을 주장할 수 없습니다.</p>',
      },
      {
        question: '파견직에서 정규직 전환되면 파견 기간도 퇴직금에 포함되나요?',
        answer:
          '<p>파견법에 따른 직접고용간주의 효과가 발생하면 파견 기간도 계속근로기간에 포함됩니다. 다만 파견사업주로부터 이미 받은 퇴직금은 공제될 수 있습니다.</p>',
      },
    ],
    cta: { text: '여러 사업장 퇴직금 총액 AI로 즉시 계산하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '영업양도 퇴직금', href: '/guide/retirement/retirement-business-transfer-responsibility' },
      { label: '체당금 청구', href: '/guide/retirement/retirement-company-bankrupt-deposit' },
      { label: '퇴직금 미지급 청구', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ── 임금체불 1. 최저임금 위반 임금체불 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-minimum-wage-violation',
    keyword: '최저임금 위반 임금체불 신고',
    questionKeyword: '최저임금보다 적게 받고 있는데 어떻게 하나요?',
    ctaKeyword: '최저임금 위반 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '최저임금 위반 임금체불 신고 방법 4단계 | 로앤가이드',
      description:
        '시급이 최저임금보다 낮다면, 차액 청구 방법과 신고 절차를 지금 확인하세요.',
    },
    intro:
      '<p>편의점에서 아르바이트를 하고 있는데 시급이 최저임금보다 낮습니다. 사장님에게 말하면 "수습이라 괜찮다"고 하는데, 3개월이 넘었습니다. 최저임금법 위반은 형사처벌 대상이며, 차액을 소급하여 청구할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 최저임금 위반 여부 확인',
      '2단계: 차액 계산',
      '3단계: 고용노동부 신고',
      '4단계: 차액 지급 또는 소송',
    ],
    sections: [
      {
        title: '2026년 최저임금과 위반 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">2026년 최저임금은 시급 10,030원입니다.</strong></p>\n<p>이보다 낮은 시급으로 근로계약을 체결하면 최저임금법 위반입니다. 최저임금에 미달하는 근로계약은 해당 부분이 무효이며, 최저임금이 적용됩니다.</p>\n<ul>\n<li><strong>수습 감액</strong> — 1년 이상 근로계약의 수습 3개월에 한해 최저임금의 90%까지 감액 가능합니다. 1년 미만 계약은 수습 감액이 불가합니다.</li>\n<li><strong>월급제 환산</strong> — 월급제의 경우 월급÷209시간(주 40시간 기준)으로 시급을 환산하여 최저임금 이상인지 확인합니다.</li>\n<li><strong>포함 항목</strong> — 기본급과 정기적으로 지급되는 수당이 포함되며, 식대·교통비 등 복리후생적 수당은 제외됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 최저임금 위반은 3년 이하 징역 또는 2,000만원 이하 벌금의 형사처벌 대상입니다.</blockquote>',
      },
      {
        title: '차액 계산과 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">최저임금과 실제 지급액의 차액을 소급하여 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>차액 계산</strong> — (최저임금 시급 - 실제 시급) × 근로시간으로 계산합니다.</li>\n<li><strong>소급 기간</strong> — 임금 청구 소멸시효 3년 이내의 차액을 모두 청구할 수 있습니다.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일이 지나면 연 20%의 지연이자도 청구 가능합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>최저임금 차액과 청구 가능 금액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">시급, 근무시간, 근무기간을 입력하면 차액을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고용노동부 신고 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부에 진정을 제기하면 근로감독관이 조사합니다.</strong></p>\n<ul>\n<li><strong>온라인 신고</strong> — 고용노동부 민원마당(minwon.moel.go.kr)에서 임금체불 진정서를 작성합니다.</li>\n<li><strong>방문 신고</strong> — 관할 지방고용노동청에 방문하여 진정서를 제출합니다.</li>\n<li><strong>익명 신고</strong> — 신분 노출이 걱정되면 익명으로 법 위반 사실을 신고할 수 있습니다.</li>\n<li><strong>처리 절차</strong> — 근로감독관이 사업장을 조사하고, 위반이 확인되면 시정 지시 → 미이행 시 사법 처리합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 택시운전자 최저임금 미달액 청구',
        summary:
          '대법원 2023다223744 사건(대법원, 2024.07.25 선고)에서 법원은 택시운전근로자의 최저임금 미달액 산정 시 소정근로일 기준으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '최저임금 미달 여부는 실제 근로시간과 소정근로시간을 정확히 구분하여 판단해야 합니다. 연장·야간근무 수당이 최저임금 산입 항목에 포함되는지도 확인하세요.',
      },
    ],
    faq: [
      {
        question: '수습 기간이면 최저임금을 안 줘도 되나요?',
        answer:
          '<p>1년 이상 근로계약의 수습 3개월에 한해 최저임금의 90%까지만 감액 가능합니다. 1년 미만 계약이거나 수습 3개월을 초과하면 감액할 수 없습니다.</p>',
      },
      {
        question: '재직 중에도 최저임금 차액을 청구할 수 있나요?',
        answer:
          '<p>네, 퇴직하지 않아도 차액 청구가 가능합니다. 다만 사업주와의 관계가 걱정되면 익명 신고를 활용하세요.</p>',
      },
      {
        question: '외국인 근로자도 최저임금이 적용되나요?',
        answer:
          '<p>네, 최저임금법은 국적에 관계없이 모든 근로자에게 적용됩니다. 외국인 근로자도 최저임금 미달 시 차액을 청구할 수 있습니다.</p>',
      },
      {
        question: '식대와 교통비를 포함하면 최저임금 이상인데 기본급만으로는 미달입니다.',
        answer:
          '<p>최저임금 산입 범위에 포함되지 않는 복리후생적 수당(식대, 교통비 등)은 제외하고 판단해야 합니다. 기본급+정기수당만으로 최저임금 이상이어야 합니다.</p>',
      },
    ],
    cta: { text: '최저임금 위반 차액 계산 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 수집', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '포괄임금 최저임금 검증', href: '/guide/wage/wage-pogual-minimum-wage-test' },
      { label: '임금 소멸시효 3년', href: '/guide/wage/unpaid-wage-3year-limitation' },
      { label: '체불임금 진정서 작성', href: '/guide/wage/unpaid-wage-petition-writing' },
    ],
  },

  // ── 임금체불 2. 연장·야간·휴일수당 미지급 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-overtime-claim',
    keyword: '연장근로수당 야간수당 미지급 청구',
    questionKeyword: '야근수당을 안 받고 있는데 청구할 수 있나요?',
    ctaKeyword: '연장근로수당 미지급 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '연장·야간·휴일수당 미지급 청구 방법 정리 | 로앤가이드',
      description:
        '야근, 주말 출근을 해도 수당을 못 받고 있다면, 미지급 초과근무수당 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>매일 2시간씩 야근을 하는데 연장근로수당이 급여에 없습니다. 회사는 "월급에 포함되어 있다"고 하지만 근로계약서에는 그런 내용이 없습니다. 근로기준법 제56조에 따라 연장·야간·휴일근로에 대해서는 통상임금의 50% 이상을 가산하여 지급해야 합니다.</p>',
    timelineSteps: [
      '1단계: 초과근로 시간 확인',
      '2단계: 미지급 수당 계산',
      '3단계: 사업주에게 지급 요청',
      '4단계: 미지급 시 노동부 진정',
    ],
    sections: [
      {
        title: '초과근무수당 계산 기준',
        content:
          '<p><strong style="color:#1e3a5f">연장·야간·휴일근로 시 통상임금의 50% 이상을 가산해야 합니다.</strong></p>\n<ul>\n<li><strong>연장근로</strong> — 1일 8시간, 1주 40시간을 초과한 근로입니다. 통상임금의 50% 가산 지급합니다.</li>\n<li><strong>야간근로</strong> — 오후 10시~오전 6시 사이의 근로입니다. 통상임금의 50% 가산 지급합니다.</li>\n<li><strong>휴일근로</strong> — 근로기준법상 유급휴일(주휴일, 공휴일)에 근로한 경우입니다. 8시간 이내는 50%, 초과분은 100% 가산합니다.</li>\n<li><strong>중복 가산</strong> — 야간 + 연장이 겹치면 각각 50%씩 총 100%를 가산합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 5인 이상 사업장에서 연장·야간·휴일수당을 지급하지 않으면 임금체불에 해당할 소지가 있습니다.</blockquote>',
      },
      {
        title: '미지급 수당 증거 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">실제 근로시간을 증명할 수 있는 기록이 핵심입니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록</strong> — 전자출퇴근 시스템, 지문인식 기록, CCTV 기록 등입니다.</li>\n<li><strong>업무 기록</strong> — 야근 시 보낸 이메일, 메신저 대화, 업무 시스템 로그입니다.</li>\n<li><strong>개인 기록</strong> — 본인이 작성한 근무일지, 캘린더 메모도 증거가 됩니다.</li>\n<li><strong>동료 진술</strong> — 같이 야근한 동료의 진술서도 증거로 활용할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미지급 초과근무수당 총액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 초과근로 시간을 입력하면 미지급 수당을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '5인 미만 사업장의 경우',
        content:
          '<p><strong style="color:#1e3a5f">상시 5인 미만 사업장은 연장·야간·휴일 가산수당 지급 의무가 면제됩니다.</strong></p>\n<ul>\n<li><strong>가산수당 미적용</strong> — 5인 미만 사업장은 초과근로 가산수당(50%) 지급 의무가 없습니다.</li>\n<li><strong>기본 시급은 지급</strong> — 가산수당은 면제되지만, 초과근로 시간에 대한 기본 시급은 지급해야 합니다.</li>\n<li><strong>최저임금은 적용</strong> — 사업장 규모에 관계없이 최저임금법은 적용됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 택시운전자 임금 산정과 소정근로시간',
        summary:
          '대법원 2023다223744 사건(대법원, 2024.07.25 선고)에서 법원은 소정근로일에 해당하지 않아 근로하지 않은 휴일의 임금 산정 방법을 판시하면서, 연장·야간근로수당의 산정 기준을 명확히 했습니다.',
        takeaway:
          '초과근무수당 산정 시 통상임금의 범위가 중요합니다. 정기적으로 지급되는 수당이 통상임금에 포함되는지 확인하면 청구 금액이 달라질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '"월급에 야근수당이 포함되어 있다"는 회사 주장은 유효한가요?',
        answer:
          '<p>근로계약서에 포괄임금 약정이 명시되어 있고, 실제 초과근무시간에 상응하는 금액이 포함된 경우에만 유효합니다. 그렇지 않으면 별도로 청구할 수 있습니다.</p>',
      },
      {
        question: '출퇴근 기록이 없으면 수당을 청구할 수 없나요?',
        answer:
          '<p>출퇴근 기록 외에도 이메일 발송 시간, 메신저 기록, CCTV 등 다양한 간접 증거로 근로시간을 증명할 수 있습니다.</p>',
      },
      {
        question: '재직 중에 미지급 수당을 청구하면 불이익을 받나요?',
        answer:
          '<p>법적으로 임금 청구를 이유로 불이익을 주는 것은 위법 소지가 있습니다. 다만 관계가 걱정되면 퇴직 후 청구하거나 익명 신고를 활용할 수 있습니다.</p>',
      },
      {
        question: '3년 전 야근수당도 소급 청구 가능한가요?',
        answer:
          '<p>임금 청구 소멸시효는 3년입니다. 3년 이내의 미지급 수당은 모두 청구 가능합니다.</p>',
      },
    ],
    cta: { text: '미지급 초과근무수당 계산 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 초과수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금 소멸시효', href: '/guide/wage/unpaid-wage-3year-limitation' },
      { label: '5인 미만 권리', href: '/guide/wage/wage-under5-employees-rights' },
      { label: '증거 수집 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
    ],
  },

  // ── 임금체불 3. 퇴사 후 임금 미지급 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-after-resignation',
    keyword: '퇴사 후 임금 미지급 대처',
    questionKeyword: '퇴사했는데 마지막 월급을 안 줍니다. 어떻게 하나요?',
    ctaKeyword: '퇴사 후 임금 미지급 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '퇴사 후 임금 미지급 시 대처법 4단계 | 로앤가이드',
      description:
        '퇴사했는데 마지막 월급과 퇴직금을 안 준다면, 14일 이내 지급 의무와 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>한 달 전에 퇴사했는데 마지막 달 급여와 퇴직금을 아직 받지 못했습니다. 회사에 전화하면 "곧 준다"고만 합니다. 근로기준법 제36조에 따라 임금과 퇴직금은 퇴직일로부터 14일 이내에 지급해야 하며, 이를 어기면 지연이자 연 20%가 발생합니다.</p>',
    timelineSteps: [
      '퇴직일 — 근로관계 종료',
      '14일 이내 — 임금·퇴직금 지급 의무',
      '14일 초과 — 지연이자 연 20% 발생',
      '미지급 시 — 노동부 진정 제기',
    ],
    sections: [
      {
        title: '14일 규칙과 지연이자',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일로부터 14일 이내에 임금·퇴직금을 모두 지급해야 합니다.</strong></p>\n<p>근로기준법 제36조에 따라 사업주는 근로자가 퇴직한 경우 14일 이내에 임금·보상금 기타 금품을 지급해야 합니다.</p>\n<ul>\n<li><strong>14일 경과 시</strong> — 근로기준법 제37조에 따라 미지급 금액에 대해 연 20%의 지연이자가 발생합니다.</li>\n<li><strong>합의 연장</strong> — 당사자 간 합의가 있으면 14일을 연장할 수 있지만, 이는 근로자가 자발적으로 동의한 경우에만 유효합니다.</li>\n<li><strong>형사처벌</strong> — 임금 미지급은 3년 이하 징역 또는 3,000만원 이하 벌금의 형사처벌 대상입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 14일이 지나면 미지급 금액에 자동으로 연 20% 이자가 붙습니다. 이를 포함하여 청구하세요.</blockquote>',
      },
      {
        title: '퇴사 후 임금 미지급 대처 절차',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 → 노동부 진정 → 소송 순서로 대응하세요.</strong></p>\n<ol>\n<li><strong>내용증명 발송</strong> — 사업주에게 미지급 임금과 퇴직금의 지급을 요구하는 내용증명을 보냅니다. 법적 효력보다는 심리적 압박과 증거 확보 목적입니다.</li>\n<li><strong>고용노동부 진정</strong> — 내용증명 후에도 미지급이면 관할 고용노동부에 진정을 제기합니다.</li>\n<li><strong>체당금 청구</strong> — 사업주가 파산하거나 지급 능력이 없으면 근로복지공단에 소액체당금(최대 1,000만원)을 청구합니다.</li>\n<li><strong>민사소송</strong> — 3,000만원 이하는 소액사건심판으로 빠르게 처리할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미지급 임금+지연이자 총액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">미지급 금액과 퇴직일을 입력하면 지연이자 포함 총 청구액을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 미리 증거를 확보하세요.</strong></p>\n<ul>\n<li><strong>근로계약서 사본</strong></li>\n<li><strong>급여명세서(최근 3개월)</strong></li>\n<li><strong>계좌이체 내역</strong></li>\n<li><strong>퇴직 관련 대화 기록(문자, 이메일)</strong></li>\n<li><strong>출퇴근 기록</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자 지위와 임금 청구권',
        summary:
          '대법원 2020다237117 사건(대법원, 2022.06.30 선고)에서 법원은 실질적 사용종속관계가 있으면 근로기준법상 근로자로 인정되며, 임금·퇴직금 청구권이 인정된다고 판시했습니다.',
        takeaway:
          '프리랜서나 위탁계약으로 일했더라도 실질적으로 근로자에 해당하면 임금과 퇴직금을 청구할 수 있습니다. 근로자성 판단이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '사직서를 안 내면 마지막 급여를 안 줘도 되나요?',
        answer:
          '<p>아닙니다. 사직서 제출과 임금 지급은 별개 문제입니다. 근로를 제공한 대가인 임금은 가능한 한 지급해야 합니다.</p>',
      },
      {
        question: '퇴직금과 급여를 동시에 미지급하면 둘 다 청구하나요?',
        answer:
          '<p>네, 미지급 급여와 퇴직금을 합산하여 한꺼번에 청구할 수 있습니다. 지연이자도 각각 적용됩니다.</p>',
      },
      {
        question: '내용증명을 보내면 법적 효력이 있나요?',
        answer:
          '<p>내용증명 자체에 법적 강제력은 없지만, 지급을 요청한 사실과 날짜를 공식적으로 증명하는 효과가 있습니다. 이후 진정이나 소송에서 유리한 증거가 됩니다.</p>',
      },
      {
        question: '소액체당금은 누구나 받을 수 있나요?',
        answer:
          '<p>사업주가 파산하거나 지급 능력이 없는 경우에 한해 근로복지공단에서 최대 1,000만원까지 대신 지급합니다. 일반적인 미지급과는 다릅니다.</p>',
      },
    ],
    cta: { text: '퇴사 후 미지급 임금 청구 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '체당금 청구', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금 소멸시효', href: '/guide/wage/unpaid-wage-3year-limitation' },
    ],
  },

  // ── 임금체불 4. 사업주 파산 체당금 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-employer-bankruptcy-deposit',
    keyword: '사업주 파산 체당금 청구',
    questionKeyword: '회사가 부도나서 임금을 못 받는데 어떻게 하나요?',
    ctaKeyword: '사업주 파산 체당금 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '사업주 파산 시 체당금 청구 방법 총정리 | 로앤가이드',
      description:
        '회사가 부도나서 임금과 퇴직금을 못 받았다면, 정부가 대신 지급하는 체당금 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>회사가 갑자기 부도가 났습니다. 3개월치 급여와 퇴직금을 받지 못했는데, 사장님은 연락이 되지 않습니다. 이런 경우 근로복지공단에 체당금(대지급금)을 청구하면 정부가 사업주 대신 임금을 지급합니다.</p>',
    timelineSteps: [
      '1단계: 사실관계 확인(도산·도산등 사실인정)',
      '2단계: 체당금 신청서 작성',
      '3단계: 근로복지공단에 제출',
      '4단계: 심사 후 지급(최대 1,000만원)',
    ],
    sections: [
      {
        title: '체당금 제도란',
        content:
          '<p><strong style="color:#1e3a5f">임금채권보장법에 따라 사업주가 지급하지 못하는 임금을 정부가 대신 지급하는 제도입니다.</strong></p>\n<p>체당금은 일반체당금과 소액체당금으로 나뉩니다.</p>\n<ul>\n<li><strong>일반체당금</strong> — 사업주의 파산·회생·도산 등이 확정된 경우 최종 3개월 임금 + 최종 3년 퇴직금 + 최종 3개월 휴업수당(각 한도 적용)을 지급합니다.</li>\n<li><strong>소액체당금</strong> — 재판·근로감독관 확인을 받은 경우 최대 1,000만원까지 지급합니다. 도산 절차 없이도 청구 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업주가 파산해도 체당금으로 미지급 임금을 받을 수 있습니다. 신청 기한은 도산등사실인정일로부터 2년입니다.</blockquote>',
      },
      {
        title: '체당금 신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단에 체당금 신청서를 제출합니다.</strong></p>\n<ul>\n<li><strong>사실인정 신청</strong> — 사업주 도산이 확인되면 고용노동부에 "도산등사실인정" 신청을 먼저 합니다.</li>\n<li><strong>체당금 신청</strong> — 사실인정을 받은 후 근로복지공단에 체당금 신청서, 근로계약서, 급여 증빙 등을 제출합니다.</li>\n<li><strong>소액체당금</strong> — 판결문, 확정된 지급명령, 근로감독관의 체불임금 확인서 중 하나가 있으면 바로 신청 가능합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>체당금 청구 가능 금액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">미지급 기간과 급여를 입력하면 체당금 예상액을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체당금 한도와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">체당금에는 나이별 한도가 있습니다.</strong></p>\n<ul>\n<li><strong>30세 미만</strong> — 월 220만원 한도(임금), 220만원 한도(퇴직금)</li>\n<li><strong>30세~40세 미만</strong> — 월 310만원 한도(임금), 310만원 한도(퇴직금)</li>\n<li><strong>40세 이상</strong> — 월 350만원 한도(임금), 350만원 한도(퇴직금)</li>\n<li><strong>소액체당금</strong> — 임금·퇴직금·휴업수당 합산 최대 1,000만원</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산채권자에 대한 부당이득 반환',
        summary:
          '대법원 2023다316387 사건(대법원, 2026.01.29 선고)에서 법원은 파산관재인이 파산채권자를 상대로 부당이득의 반환을 청구한 사건에서, "파산채권자에게 대항할 수 없다"의 의미를 판시했습니다.',
        takeaway:
          '사업주 파산 시 근로자의 임금채권은 다른 채권보다 우선 변제됩니다. 체당금을 통해 먼저 지급받은 후 나머지는 파산 절차에서 배당받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 야반도주해도 체당금을 받을 수 있나요?',
        answer:
          '<p>사업주가 소재불명이면 고용노동부에 도산등사실인정을 신청할 수 있습니다. 인정되면 일반체당금을 청구할 수 있습니다.</p>',
      },
      {
        question: '체당금을 받으면 사업주에게 다시 청구할 수 있나요?',
        answer:
          '<p>체당금을 지급한 근로복지공단이 사업주에게 구상권을 행사합니다. 근로자 본인이 추가 청구할 필요는 없습니다.</p>',
      },
      {
        question: '체당금 신청에서 지급까지 얼마나 걸리나요?',
        answer:
          '<p>소액체당금은 신청 후 통상 14일 이내에 지급됩니다. 일반체당금은 도산등사실인정 절차가 선행되므로 1~2개월 정도 소요될 수 있습니다.</p>',
      },
      {
        question: '실업급여와 체당금을 동시에 받을 수 있나요?',
        answer:
          '<p>네, 실업급여는 고용보험에서, 체당금은 임금채권보장기금에서 각각 지급되므로 동시에 받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '사업주 파산 체당금 청구 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '파산 사업주 체당금', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '실업급여+체당금 동시', href: '/guide/unemployment/unemployment-company-bankrupt-double-claim' },
      { label: '임금 소멸시효', href: '/guide/wage/unpaid-wage-3year-limitation' },
      { label: '퇴직금 미지급', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },
];
