import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [파트타임 근로자]의 [퇴직금 수령 가능 여부를 모르는 상황]에서 [주당 근로시간별 퇴직금 계산법 안내]를 돕는 페이지다.
// 2. 이 페이지는 [출산·육아휴직을 사용한 근로자]의 [휴직 기간 퇴직금 포함 여부가 불확실한 상황]에서 [평균임금 산정과 근속기간 포함 여부 확인]을 돕는 페이지다.
// 3. 이 페이지는 [5인 미만 사업장 근로자]의 [퇴직금 지급 의무 존재 여부를 모르는 상황]에서 [5인 미만도 퇴직금 의무가 있음을 확인하고 청구 절차 안내]를 돕는 페이지다.
// 4. 이 페이지는 [성과급·상여금을 받는 근로자]의 [퇴직금 산정 시 성과급 포함 여부를 모르는 상황]에서 [평균임금 포함 기준과 판례 안내]를 돕는 페이지다.
// 5. 이 페이지는 [외국인 근로자]의 [퇴직금 수령 자격과 절차를 모르는 상황]에서 [체류자격 무관 퇴직금 청구 방법 안내]를 돕는 페이지다.
// 6. 이 페이지는 [폐업 사업장 퇴직 근로자]의 [사업장이 없어져 퇴직금 청구가 막힌 상황]에서 [체당금 제도와 사업주 개인 청구 방법 안내]를 돕는 페이지다.
// 7. 이 페이지는 [5인 미만 사업장에서 임금을 체불당한 근로자]의 [구제 방법을 모르는 상황]에서 [소규모 사업장에서도 가능한 임금체불 구제 절차 안내]를 돕는 페이지다.
// 8. 이 페이지는 [사업주 파산으로 임금을 못 받는 근로자]의 [체당금 신청 절차를 모르는 상황]에서 [체당금 신청 요건과 절차 안내]를 돕는 페이지다.
// 9. 이 페이지는 [외국인 근로자로서 임금체불을 당한 상황]의 [신고 가능 여부와 절차를 모르는 상황]에서 [체류자격 무관 노동청 진정 절차 안내]를 돕는 페이지다.
// 10. 이 페이지는 [인턴·수습으로 임금체불을 당한 근로자]의 [인턴도 임금 보호를 받는지 모르는 상황]에서 [수습 근로자 임금체불 대응 방법 안내]를 돕는 페이지다.
// 11. 이 페이지는 [영업직 커미션을 미지급받은 근로자]의 [커미션이 임금인지 확인하고 청구하려는 상황]에서 [커미션의 임금 해당 여부 판단과 청구 절차 안내]를 돕는 페이지다.

export const spokesBatch28RetirementWageUnpaid: SpokePage[] = [
  // ══════════ 퇴직금 6개 ══════════

  // ── 1. 파트타임 근로자 퇴직금 계산 ──
  {
    domain: 'retirement',
    slug: 'retirement-part-time-eligibility',
    keyword: '파트타임 근로자 퇴직금 계산',
    questionKeyword: '파트타임으로 일해도 퇴직금을 받을 수 있나요?',
    ctaKeyword: '파트타임 퇴직금 자격 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '파트타임 근로자 퇴직금 계산법 3단계 | 로앤가이드',
      description:
        '파트타임으로 일하면 퇴직금을 못 받는다고 생각하셨다면 주 15시간 기준과 계산 방법을 지금 확인하세요',
    },
    intro:
      '<p>하루 4시간씩 주 5일 파트타임으로 2년째 근무하고 있습니다. 곧 퇴사하려는데 "파트타임은 퇴직금 없다"는 말을 듣고 걱정됩니다. 근로자퇴직급여 보장법에 따르면 주 15시간 이상, 1년 이상 계속 근무한 근로자는 고용 형태와 무관하게 퇴직금 수급 자격이 있습니다. 본인의 주당 근로시간과 평균임금을 기준으로 퇴직금을 계산해보세요.</p>',
    sections: [
      {
        title: '파트타임도 퇴직금 대상: 핵심 요건 2가지',
        content:
          '<p><strong style="color:#1e3a5f">주 15시간 이상 근무하며 1년 이상 계속 근로한 파트타임 근로자는 퇴직금을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>주 15시간 기준</strong> — 4주를 평균하여 소정근로시간이 주 15시간 이상이면 퇴직금 대상입니다. 주마다 근무시간이 다르더라도 4주 평균으로 판단합니다</li>\n<li><strong>1년 이상 계속근로</strong> — 입사일부터 퇴사일까지 1년 이상이면 충족합니다. 중간에 계약 갱신이 있어도 실질적으로 계속 근무했다면 합산됩니다</li>\n<li><strong>고용형태 무관</strong> — 시급제, 일급제, 아르바이트 명목이어도 근로계약관계가 인정되면 퇴직금 대상입니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "알바라서 퇴직금이 없다"는 것은 법적 근거가 없습니다. 주 15시간 이상 + 1년 이상이면 반드시 퇴직금을 받을 수 있습니다</blockquote>',
      },
      {
        title: '파트타임 퇴직금 계산법: 평균임금 × 근속연수',
        content:
          '<p><strong style="color:#1e3a5f">파트타임 퇴직금은 퇴직 전 3개월 평균임금을 기준으로 계산합니다.</strong></p>\n<ul>\n<li><strong>평균임금 산정</strong> — 퇴직일 이전 3개월간 지급받은 총 임금 ÷ 그 기간의 총 일수(달력일 기준)로 산출합니다</li>\n<li><strong>계산 공식</strong> — 퇴직금 = 1일 평균임금 × 30일 × (근속일수 ÷ 365)</li>\n<li><strong>예시</strong> — 월 80만원(주 20시간)으로 2년 근무한 경우: 3개월 총 임금 240만원 ÷ 90일 ≈ 26,667원(1일 평균임금). 퇴직금 = 26,667원 × 30 × (730÷365) ≈ 약 160만원</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 파트타임 퇴직금, AI가 바로 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무시간과 급여 정보를 입력하면 예상 퇴직금을 즉시 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파트타임 퇴직금 거부 시 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 "파트타임이라 퇴직금이 없다"며 거부하면 노동청에 진정할 수 있습니다.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 퇴직금 지급 요구서를 내용증명으로 보내고 14일의 지급 기한을 명시합니다</li>\n<li><strong>노동청 진정</strong> — 14일이 지나도 미지급 시 관할 고용노동지청에 임금체불 진정을 접수합니다. 진정비용은 무료입니다</li>\n<li><strong>지연이자 청구</strong> — 퇴직 후 14일 초과 미지급 시 연 20% 지연이자가 발생하며, 진정 시 함께 청구할 수 있습니다</li>\n<li><strong>필요 서류</strong> — 근로계약서(또는 근로사실 증빙), 급여명세서, 출퇴근 기록, 통장 입금 내역을 미리 준비하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금 청구권 소멸시효는 3년입니다. 퇴직 후 3년이 지나면 청구가 어려우므로 빠르게 대응하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금의 실질적 판단 기준',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 금품으로서, 근로자에게 계속적·정기적으로 지급되고 단체협약, 취업규칙, 급여규정, 근로계약 등에 의해 사용자에게 그 지급의무가 지워져 있는 것을 말한다고 판시했습니다.',
        takeaway:
          '파트타임 근로자도 정기적으로 지급받은 금품은 평균임금에 포함되므로, 시급 외 교통비·식대 등 고정 수당이 있었다면 퇴직금 산정 시 빠뜨리지 마세요.',
      },
    ],
    faq: [
      {
        question: '주 15시간 미만인 주가 가끔 있어도 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>4주를 평균하여 주 15시간 이상이면 퇴직금 대상입니다.</strong> 특정 주에 15시간 미만이더라도 4주 평균이 15시간을 넘으면 요건을 충족합니다. 다만 4주 평균 자체가 15시간 미만이면 퇴직금 대상에서 제외됩니다.',
      },
      {
        question: '시급으로 받는데 평균임금을 어떻게 계산하나요?',
        answer:
          '<strong>퇴직 전 3개월간 실제 지급받은 총 금액을 그 기간의 총 달력일수로 나누면 됩니다.</strong> 시급 × 근무시간으로 받은 금액뿐 아니라 주휴수당, 연장수당 등 실제 지급된 모든 금액을 합산합니다.',
      },
      {
        question: '아르바이트 계약서에 "퇴직금 없음"이라 적혀 있으면 어떻게 되나요?',
        answer:
          '<strong>근로기준법과 퇴직급여법은 강행규정이므로 이에 반하는 계약 조항은 무효입니다.</strong> 계약서에 퇴직금을 지급하지 않겠다고 써 있어도 법적으로 효력이 없으며, 요건을 충족하면 퇴직금을 청구할 수 있습니다.',
      },
      {
        question: '두 군데에서 파트타임으로 일하면 각각 퇴직금이 나오나요?',
        answer:
          '<strong>각 사업장별로 별도 판단합니다.</strong> A회사에서 주 20시간, B회사에서 주 10시간 근무하면 A회사에서만 퇴직금이 발생합니다. 각 사업장 기준으로 주 15시간 이상, 1년 이상 근무 여부를 확인하세요.',
      },
      {
        question: '파트타임 퇴직금도 세금을 내야 하나요?',
        answer:
          '<strong>퇴직금에는 퇴직소득세가 부과됩니다.</strong> 다만 근속연수와 퇴직금 규모에 따라 세율이 달라지며, 소액인 경우 공제 후 실질 세부담은 거의 없는 경우가 많습니다. 회사가 원천징수하여 지급합니다.',
      },
    ],
    cta: {
      text: '파트타임 퇴직금 수령 자격, AI가 확인해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '중간정산 요건 안내', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 2. 출산·육아휴직 퇴직금 포함 ──
  {
    domain: 'retirement',
    slug: 'retirement-maternity-leave-included',
    keyword: '출산·육아휴직 퇴직금 포함',
    questionKeyword: '출산휴가나 육아휴직 기간도 퇴직금에 포함되나요?',
    ctaKeyword: '출산휴직 퇴직금 포함 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '출산·육아휴직 퇴직금 포함 여부 3가지 핵심 | 로앤가이드',
      description:
        '출산휴가나 육아휴직 기간이 퇴직금에 포함되는지 궁금하다면 근속기간·평균임금 산정 기준을 지금 확인하세요',
    },
    intro:
      '<p>출산휴가 90일과 육아휴직 1년을 쓰고 복직했는데, 퇴직금 계산 시 휴직 기간이 빠지는 건 아닌지 걱정됩니다. 회사 인사팀에서도 명확한 답을 주지 않습니다. 근로기준법과 남녀고용평등법에 따르면 출산휴가와 육아휴직 기간은 근속기간에 포함되지만, 평균임금 산정 시에는 별도 규정이 적용됩니다. 정확한 기준을 확인해보세요.</p>',
    sections: [
      {
        title: '근속기간: 출산·육아휴직 기간 전부 포함',
        content:
          '<p><strong style="color:#1e3a5f">출산전후휴가, 유산·사산휴가, 육아휴직 기간은 모두 계속근로기간에 포함됩니다.</strong></p>\n<ul>\n<li><strong>출산전후휴가(90일)</strong> — 근로기준법 제74조에 따른 법정 휴가로 근속기간에 당연 포함됩니다</li>\n<li><strong>육아휴직(최대 1년)</strong> — 남녀고용평등법 제19조에 따라 육아휴직 기간도 근속기간에 포함됩니다</li>\n<li><strong>배우자 출산휴가(10일)</strong> — 근로기준법 제18조의2에 따른 법정 휴가로 마찬가지로 근속기간에 산입됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 휴직 기간이 근속연수에서 빠진다면 이는 위법입니다. 퇴직금 산정 시 반드시 포함되어야 합니다</blockquote>',
      },
      {
        title: '평균임금 산정: 휴직 기간은 제외하고 계산',
        content:
          '<p><strong style="color:#1e3a5f">평균임금 산정 시 출산·육아휴직 기간과 그 기간 중 받은 급여는 계산에서 제외합니다.</strong></p>\n<ul>\n<li><strong>근로기준법 시행령 제2조</strong> — 산전후휴가, 육아휴직 기간은 평균임금 산정 기간에서 공제합니다</li>\n<li><strong>실질적 효과</strong> — 휴직 직전 3개월의 정상 급여를 기준으로 평균임금을 산출하므로 오히려 유리할 수 있습니다</li>\n<li><strong>주의사항</strong> — 복직 후 급여가 인상된 경우, 퇴직 시점의 급여로 산정되므로 인상분이 반영됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 출산·육아휴직 포함 퇴직금, AI가 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">휴직 기간과 급여 정보를 입력하면 정확한 퇴직금을 산출해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 휴직 기간을 퇴직금에서 빼면 어떻게 대응할까',
        content:
          '<p><strong style="color:#1e3a5f">출산·육아휴직 기간을 근속기간에서 제외한 퇴직금 산정은 위법이며, 차액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>차액 계산</strong> — 회사가 산정한 퇴직금과 휴직 기간을 포함한 정확한 퇴직금의 차이를 산출합니다</li>\n<li><strong>내용증명 발송</strong> — 차액 지급을 요구하는 내용증명을 회사에 보냅니다</li>\n<li><strong>노동청 진정</strong> — 14일 내 미지급 시 임금체불로 고용노동지청에 진정합니다</li>\n<li><strong>노동위원회 구제신청</strong> — 부당해고 등과 연계된 경우 노동위원회에도 구제신청이 가능합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금 영수증에 서명하기 전 반드시 근속기간에 휴직 기간이 포함되어 있는지 확인하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 시 관행적 급여 포함 여부',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 사업장에 특정 금품을 근로자에게 지급하는 관행이 형성되어 있다면 이를 평균임금의 기초가 되는 임금으로 볼 수 있다고 판시하며, 관행의 성립 요건으로 기간의 반복성, 지급의 규칙성 등을 심리했습니다.',
        takeaway:
          '출산·육아휴직 전 정기적으로 받던 수당이 있다면 평균임금 산정 시 포함 여부를 꼼꼼히 확인하세요. 관행적으로 지급된 금품도 임금에 해당할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '육아기 근로시간 단축을 사용한 기간도 근속기간에 포함되나요?',
        answer:
          '<strong>네, 육아기 근로시간 단축 기간도 근속기간에 포함됩니다.</strong> 다만 평균임금은 단축된 근로시간에 따른 급여를 기준으로 산정될 수 있으므로, 단축 전 급여와 비교하여 불리하지 않은지 확인하세요.',
      },
      {
        question: '육아휴직 중 다른 곳에서 일하면 퇴직금에 영향이 있나요?',
        answer:
          '<strong>육아휴직 중 다른 근무를 했더라도 원래 직장의 근속기간에는 영향이 없습니다.</strong> 다만 육아휴직 급여 수급 요건에 위반될 수 있으므로 고용보험법상 제한을 확인하세요.',
      },
      {
        question: '출산휴가 90일 중 60일은 유급인데 나머지 30일은 어떻게 되나요?',
        answer:
          '<strong>유급·무급 여부와 관계없이 출산전후휴가 90일 전체가 근속기간에 포함됩니다.</strong> 평균임금 산정 시에는 해당 기간이 제외되고 휴가 직전 정상 근무 기간의 급여를 기준으로 계산합니다.',
      },
      {
        question: '둘째 출산으로 연속 휴직을 했는데 근속기간이 끊기나요?',
        answer:
          '<strong>연속 휴직이라도 근속기간은 끊기지 않습니다.</strong> 첫째 육아휴직 종료 직후 둘째 출산휴가를 연이어 사용해도 전체 기간이 계속근로기간으로 인정됩니다.',
      },
      {
        question: '퇴직금 정산서를 이미 받았는데 휴직 기간이 빠져 있으면 어떻게 하나요?',
        answer:
          '<strong>퇴직금 차액 청구권은 퇴직일로부터 3년간 유효합니다.</strong> 퇴직금 정산서를 받았더라도 산정이 잘못된 경우 차액을 청구할 수 있으므로 내용증명을 보내고, 미지급 시 노동청에 진정하세요.',
      },
    ],
    cta: {
      text: '출산·육아휴직 포함 퇴직금 계산, AI가 도와드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '중간정산 요건 안내', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 3. 5인 미만 사업장 퇴직금 의무 ──
  {
    domain: 'retirement',
    slug: 'retirement-small-business-5',
    keyword: '5인 미만 사업장 퇴직금 의무',
    questionKeyword: '직원이 5명도 안 되는 가게에서도 퇴직금을 줘야 하나요?',
    ctaKeyword: '5인 미만 퇴직금 의무 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 퇴직금 의무 여부 핵심 3가지 | 로앤가이드',
      description:
        '5인 미만 소규모 사업장도 퇴직금을 지급해야 하는지 궁금하다면 법적 의무와 청구 방법을 지금 확인하세요',
    },
    intro:
      '<p>직원 3명뿐인 작은 식당에서 2년간 일하고 그만뒀습니다. 사장님은 "우리 같은 작은 가게는 퇴직금 안 줘도 된다"고 합니다. 2010년 12월 1일부터 근로자퇴직급여 보장법이 5인 미만 사업장에도 적용되어 퇴직금 지급 의무가 있습니다. 사업장 규모와 관계없이 요건만 갖추면 퇴직금을 받을 수 있습니다.</p>',
    sections: [
      {
        title: '5인 미만도 퇴직금 의무: 법 적용 확대 경과',
        content:
          '<p><strong style="color:#1e3a5f">2010년 12월 1일부터 근로자퇴직급여 보장법이 모든 사업장에 적용되어 5인 미만 사업장도 퇴직금 지급 의무가 있습니다.</strong></p>\n<ul>\n<li><strong>적용 시기</strong> — 2010.12.1 이후 입사자에게는 전액 퇴직금 의무 발생. 이전 입사자는 2012.12.31까지 50%, 2013.1.1부터 100% 적용</li>\n<li><strong>적용 요건</strong> — 주 15시간 이상, 1년 이상 계속근로한 근로자가 대상입니다</li>\n<li><strong>가족 종사자 예외</strong> — 다만 동거 친족만으로 구성된 사업장은 근로기준법 적용이 제외될 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직원 수가 적다는 이유로 퇴직금을 거부하는 것은 2012년 이후로는 명백한 법 위반입니다</blockquote>',
      },
      {
        title: '5인 미만 사업장 퇴직금 계산과 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">5인 미만 사업장의 퇴직금 계산 방식은 대기업과 동일합니다.</strong></p>\n<ul>\n<li><strong>계산 공식</strong> — 퇴직 전 3개월 평균임금 × 30일 × (근속일수 ÷ 365)</li>\n<li><strong>주의할 점</strong> — 5인 미만 사업장은 근로기준법 일부 조항이 적용 제외되지만, 퇴직급여법은 전면 적용됩니다</li>\n<li><strong>적용 제외 조항</strong> — 해고예고수당, 연차유급휴가 등은 5인 미만 사업장에 적용되지 않을 수 있지만 퇴직금은 별개입니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 5인 미만 사업장 퇴직금, AI가 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">급여 정보와 근무기간을 입력하면 정확한 퇴직금을 즉시 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사업주 거부 시 실전 대응법',
        content:
          '<p><strong style="color:#1e3a5f">소규모 사업장이라도 퇴직금 미지급은 형사처벌 대상이며 적극 대응이 가능합니다.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 근로계약서가 없더라도 급여 입금 내역, 출근 사진, 카카오톡 업무 지시 내역 등으로 근로관계를 증명할 수 있습니다</li>\n<li><strong>노동청 진정</strong> — 관할 고용노동지청에 무료로 진정서를 제출합니다. 근로감독관이 사업장을 조사합니다</li>\n<li><strong>형사처벌</strong> — 퇴직금 미지급은 3년 이하 징역 또는 3,000만원 이하 벌금에 해당합니다</li>\n<li><strong>소액사건심판</strong> — 체불금이 3,000만원 이하면 소액사건심판으로 빠르게 판결을 받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소규모 사업장일수록 근로계약서 없이 구두 계약하는 경우가 많으므로 근무 증빙 자료를 평소에 보관하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구권과 이사의 책임',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 주식회사의 대표이사가 근로자의 급여 및 퇴직금 지급을 지연하여 상법 제388조에 따른 이사의 책임이 문제된 사안을 심리하며, 이사의 보수에 관한 정관·주주총회 결의의 범위를 판단했습니다.',
        takeaway:
          '소규모 법인이라도 대표이사의 퇴직금 미지급에 대해 개인 책임을 물을 수 있으므로, 사업장 폐업이나 법인 재산 부족 시에도 대표자 개인에게 청구하는 것을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '4대보험에 가입되어 있지 않아도 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>4대보험 가입 여부와 퇴직금은 별개입니다.</strong> 4대보험 미가입 자체가 사업주의 법 위반이며, 실제 근로관계가 인정되면 퇴직금을 받을 수 있습니다. 급여 이체 내역 등으로 근로사실을 증명하세요.',
      },
      {
        question: '사장님이 "경영이 어려워서 줄 수 없다"고 하면 어떻게 하나요?',
        answer:
          '<strong>경영 사정은 퇴직금 미지급의 정당한 사유가 되지 않습니다.</strong> 노동청 진정을 통해 시정 명령을 받을 수 있고, 사업주가 도산 상태라면 체당금 제도를 활용하세요.',
      },
      {
        question: '일용직으로 일했는데 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>일용직이라도 1년 이상 계속 근무하고 주 15시간 이상 일했다면 퇴직금 대상입니다.</strong> 명칭이 일용직이더라도 실질적으로 매일 출근하여 계속 근무했다면 상용근로자와 같은 보호를 받습니다.',
      },
      {
        question: '퇴직금을 현금으로 매달 나눠 받았는데 이게 퇴직금 지급으로 인정되나요?',
        answer:
          '<strong>매월 분할 지급은 원칙적으로 적법한 퇴직금 지급으로 인정되지 않습니다.</strong> 퇴직금은 퇴직 시 일시금으로 지급해야 하며, 매월 나눠 받은 금액은 퇴직금의 일부 선급으로 인정될 수도 있지만, 법적으로는 퇴직 시 재정산이 필요합니다.',
      },
    ],
    cta: {
      text: '5인 미만 사업장 퇴직금 자격, AI가 확인합니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '중간정산 요건 안내', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 4. 성과급 상여금 퇴직금 포함 ──
  {
    domain: 'retirement',
    slug: 'retirement-bonus-performance-included',
    keyword: '성과급 상여금 퇴직금 포함',
    questionKeyword: '성과급이나 상여금도 퇴직금에 포함되나요?',
    ctaKeyword: '성과급 퇴직금 포함 여부 상담',
    type: '쟁점분석형',
    perspective: 'victim',
    meta: {
      title: '성과급·상여금 퇴직금 포함 기준 4가지 | 로앤가이드',
      description:
        '매년 받던 성과급이 퇴직금에 포함되는지 궁금하다면 평균임금 포함 판단 기준 4가지를 지금 확인하세요',
    },
    intro:
      '<p>매년 연봉의 200%에 해당하는 성과급을 받아왔습니다. 퇴직을 앞두고 퇴직금을 계산하는데 회사는 성과급을 빼고 산정하겠다고 합니다. 대법원 판례에 따르면 성과급·상여금이 정기적·일률적·고정적으로 지급되었다면 평균임금에 포함되어 퇴직금이 크게 달라질 수 있습니다. 본인의 성과급이 퇴직금에 포함되는지 판단 기준을 확인해보세요.</p>',
    sections: [
      {
        title: '성과급이 퇴직금에 포함되는 4가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">성과급·상여금이 평균임금(퇴직금 산정 기초)에 포함되려면 아래 요건을 종합적으로 판단합니다.</strong></p>\n<ol>\n<li><strong>계속성</strong> — 일시적이 아니라 매년 또는 매 분기 등 일정 주기로 반복 지급되었는가</li>\n<li><strong>정기성</strong> — 지급 시기가 정해져 있거나 관행적으로 특정 시기에 지급되었는가</li>\n<li><strong>일률성</strong> — 전 직원 또는 일정 그룹에게 일률적으로 지급되었는가 (개인별 재량 지급이 아닌지)</li>\n<li><strong>고정성</strong> — 근무 성적과 무관하게 일정 금액 이상이 보장되었는가</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4가지 모두 충족하면 거의 확실히 포함되며, 3가지만 충족해도 판례는 포함으로 판단하는 경향이 있습니다</blockquote>',
      },
      {
        title: '포함·제외 사례 비교와 퇴직금 차이',
        content:
          '<p><strong style="color:#1e3a5f">같은 금액의 성과급이라도 지급 방식에 따라 퇴직금에 수백만원 차이가 생길 수 있습니다.</strong></p>\n<ul>\n<li><strong>포함되는 경우</strong> — 매년 설·추석 상여금 각 100%, 전 직원 일률 지급 → 평균임금에 포함</li>\n<li><strong>제외되는 경우</strong> — CEO 재량에 따라 불특정 시기에 지급되는 특별 보너스 → 평균임금 불포함</li>\n<li><strong>퇴직금 차이 예시</strong> — 월급 400만원, 연 상여금 800만원인 경우: 상여금 포함 시 연 퇴직금 약 667만원, 미포함 시 약 400만원으로 약 267만원 차이</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성과급 포함 퇴직금, AI가 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">성과급 지급 내역을 입력하면 포함 여부 판단과 예상 퇴직금을 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '성과급 누락 시 퇴직금 차액 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">회사가 성과급을 제외하고 퇴직금을 산정했다면 차액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>증거 수집</strong> — 최근 3~5년간의 성과급 지급 내역, 급여명세서, 취업규칙·단체협약에서 상여금 관련 조항을 확보합니다</li>\n<li><strong>차액 산출</strong> — 성과급을 포함한 평균임금과 제외한 평균임금의 차이를 계산합니다</li>\n<li><strong>내용증명 → 진정</strong> — 차액 지급을 서면 요구한 뒤, 14일 이내 미지급 시 노동청에 진정합니다</li>\n<li><strong>민사소송</strong> — 성과급의 임금 해당 여부가 쟁점이 되면 최종적으로 민사소송에서 판단을 받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금 차액 청구 소멸시효는 3년입니다. 퇴직 후 빠르게 대응하는 것이 중요합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과급의 평균임금 포함 판단',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 사용자가 근로자에게 지급하는 금품이 임금에 해당하려면 근로의 대가로 지급되는 것이어야 하고, 계속적·정기적으로 지급되며 단체협약·취업규칙 등에 의해 사용자에게 지급의무가 있어야 한다고 판시했습니다.',
        takeaway:
          '성과급이 매년 관행적으로 전 직원에게 지급되어 왔다면 "근로의 대가"에 해당하여 퇴직금 산정 시 반드시 포함시켜야 합니다.',
      },
    ],
    faq: [
      {
        question: '성과급을 매년 받았지만 금액이 다른데도 포함되나요?',
        answer:
          '<strong>금액이 해마다 달라도 지급 자체가 정기적·계속적이었다면 포함될 수 있습니다.</strong> 최저 보장액이 있거나 평가 기준이 정해져 있어서 사실상 지급이 확정적이었다면 평균임금에 산입됩니다.',
      },
      {
        question: 'PS(이익분배)와 상여금은 다른가요?',
        answer:
          '<strong>이익분배금(PS)은 회사 경영성과에 따라 지급되므로 일반 상여금보다 임금성 인정이 어렵습니다.</strong> 다만 매년 일정 금액 이상을 보장하거나 전 직원에게 일률적으로 지급했다면 임금으로 인정될 가능성이 있습니다.',
      },
      {
        question: '인센티브를 연봉에 포함해서 계약했는데도 퇴직금 산정에서 빠질 수 있나요?',
        answer:
          '<strong>연봉 계약서에 인센티브가 명시되어 있다면 평균임금에 포함될 가능성이 높습니다.</strong> 다만 "성과에 따라 차등 지급"이라고 되어 있고 실제로 0원을 받은 적이 있다면 고정성 요건이 문제될 수 있습니다.',
      },
      {
        question: '퇴직금 중간정산을 받았을 때 성과급은 어떻게 반영되나요?',
        answer:
          '<strong>중간정산 시점까지의 평균임금에 성과급이 포함됩니다.</strong> 중간정산 전 12개월 내 지급된 상여금을 12개월로 나누어 월 평균임금에 가산합니다. 이후 퇴직 시에는 중간정산 이후 기간의 성과급만 반영됩니다.',
      },
    ],
    cta: {
      text: '성과급 포함 퇴직금 금액, AI가 산출해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '중간정산 요건 안내', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 5. 외국인 근로자 퇴직금 수령 ──
  {
    domain: 'retirement',
    slug: 'retirement-foreign-worker-claim',
    keyword: '외국인 근로자 퇴직금 수령',
    questionKeyword: '외국인 근로자도 퇴직금을 받을 수 있나요?',
    ctaKeyword: '외국인 퇴직금 수령 방법 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 퇴직금 수령 절차 4단계 | 로앤가이드',
      description:
        '외국인 근로자라서 퇴직금을 못 받는다고 생각했다면 체류자격 무관 수령 절차 4단계를 지금 확인하세요',
    },
    intro:
      '<p>E-9 비자로 공장에서 3년간 일하고 계약이 끝났습니다. 사장님은 "외국인은 퇴직금이 없다"며 주지 않습니다. 근로기준법은 국적을 이유로 차별하는 것을 금지하고 있으며, 외국인 근로자도 내국인과 동일하게 퇴직금을 받을 수 있습니다. 미등록(불법체류) 상태라도 근로관계가 인정되면 퇴직금 청구가 가능합니다.</p>',
    sections: [
      {
        title: '외국인 근로자의 퇴직금 수급 자격',
        content:
          '<p><strong style="color:#1e3a5f">외국인 근로자도 주 15시간 이상, 1년 이상 계속 근무하면 퇴직금 수급 자격이 있습니다.</strong></p>\n<ul>\n<li><strong>비자 유형 무관</strong> — E-9(비전문취업), H-2(방문취업), E-7(특정활동) 등 체류자격과 관계없이 퇴직금은 지급되어야 합니다</li>\n<li><strong>미등록 외국인도 가능</strong> — 대법원은 미등록 외국인 근로자의 근로관계도 유효하게 인정하여 퇴직금 청구권이 있다고 판시했습니다</li>\n<li><strong>출국만기보험과의 관계</strong> — E-9, H-2 비자 근로자는 출국만기보험에 가입되며, 퇴직금과 별도로 출국 시 수령합니다. 출국만기보험금이 퇴직금보다 적으면 차액을 청구할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국적이나 체류자격을 이유로 퇴직금을 거부하는 것은 근로기준법 제6조(균등처우) 위반입니다</blockquote>',
      },
      {
        title: '외국인 퇴직금 청구 4단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금을 지급하지 않으면 내국인과 동일한 절차로 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>사업주에게 서면 요구</strong> — 퇴직금 지급 요구서를 한국어와 모국어로 작성하여 사장에게 전달합니다. 외국인근로자지원센터(1644-0644)에서 번역 도움을 받을 수 있습니다</li>\n<li><strong>노동청 진정</strong> — 14일 내 미지급 시 관할 고용노동지청에 진정합니다. 통역 서비스가 제공됩니다</li>\n<li><strong>출국만기보험 차액 확인</strong> — 출국만기보험금과 법정 퇴직금 금액을 비교하여 차액이 있다면 추가 청구합니다</li>\n<li><strong>출국 후 수령</strong> — 출국 전 청구가 완료되지 않았더라도 대리인을 지정하여 퇴직금을 수령할 수 있습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 외국인 근로자 퇴직금, AI가 자격을 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">비자 유형과 근무 기간을 입력하면 수령 가능 여부와 예상 금액을 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '외국인 퇴직금 실전 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">출국 전 퇴직금 관련 서류를 반드시 확보하고 대리인을 지정해두세요.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 근로계약서, 급여명세서, 통장 입금 내역, 출퇴근 기록을 사본으로 보관합니다</li>\n<li><strong>대리인 위임장</strong> — 출국 후에도 퇴직금을 청구할 수 있도록 한국에 있는 지인이나 외국인근로자지원센터에 위임장을 작성해둡니다</li>\n<li><strong>세금 처리</strong> — 비거주자인 외국인 근로자의 퇴직소득세는 원천징수되며, 한국과 모국 간 조세협약에 따라 이중과세가 방지됩니다</li>\n<li><strong>지원 기관</strong> — 외국인근로자지원센터(1644-0644), 대한법률구조공단(132), 외국인력상담센터(1350)에서 무료 상담이 가능합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 출국 후에는 증거 수집과 소송 진행이 매우 어려우므로 출국 전에 가능한 모든 조치를 완료하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직수당 부지급과 소멸시효 판단',
        summary:
          '서울행정법원 2025구합54475 사건(서울행법, 2025.11.13 선고)에서 법원은 23년간 재직 후 퇴직한 근로자가 잘못된 정보 전달로 퇴직수당을 수령하지 못한 사안에서 소멸시효와 신의칙을 검토하며, 퇴직금 관련 권리 행사는 시효 내에 이루어져야 한다고 판시했습니다.',
        takeaway:
          '외국인 근로자도 퇴직금 청구권의 소멸시효(3년)가 적용되므로 출국 전 또는 출국 직후 빠르게 청구 절차를 밟으세요.',
      },
    ],
    faq: [
      {
        question: '미등록(불법체류) 상태에서 노동청에 진정하면 강제 출국되나요?',
        answer:
          '<strong>고용노동부는 임금체불 진정 처리 시 출입국관리사무소에 통보하지 않습니다.</strong> 2015년부터 임금체불 사건 처리 중 체류자격 문제로 불이익을 주지 않도록 하는 협약이 운영되고 있습니다.',
      },
      {
        question: '출국만기보험금을 받으면 퇴직금을 따로 받을 수 없나요?',
        answer:
          '<strong>출국만기보험금이 법정 퇴직금보다 적으면 차액을 사업주에게 청구할 수 있습니다.</strong> 출국만기보험금은 사업주가 별도로 납부한 보험이지 퇴직금 자체가 아닙니다. 보험금이 퇴직금 이상이면 추가 청구가 불필요합니다.',
      },
      {
        question: '한국어를 못하는데 노동청 진정을 어떻게 하나요?',
        answer:
          '<strong>고용노동부는 16개 언어 통역 서비스를 제공하며, 외국인근로자지원센터(1644-0644)에서 진정서 작성을 무료로 도와줍니다.</strong> 전화 상담도 모국어로 가능합니다.',
      },
      {
        question: '출국 후 본국에서도 퇴직금을 청구할 수 있나요?',
        answer:
          '<strong>출국 전 대리인을 지정해두면 본국에서도 대리인을 통해 청구가 가능합니다.</strong> 위임장은 공증을 받아두는 것이 좋으며, 외국인근로자지원센터에서 위임장 양식을 제공합니다.',
      },
    ],
    cta: {
      text: '외국인 근로자 퇴직금 수령 자격, AI가 확인합니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '중간정산 요건 안내', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 6. 폐업 사업장 퇴직금 체당금 ──
  {
    domain: 'retirement',
    slug: 'retirement-company-closure-claim',
    keyword: '폐업 사업장 퇴직금 체당금',
    questionKeyword: '사업장이 폐업했는데 퇴직금을 받을 수 있나요?',
    ctaKeyword: '폐업 사업장 퇴직금 체당금 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '폐업 사업장 퇴직금 체당금 청구 방법 5단계 | 로앤가이드',
      description:
        '사업장이 폐업해서 퇴직금을 받을 곳이 없다면 체당금 청구 절차와 필요 서류를 지금 확인하세요',
    },
    intro:
      '<p>어느 날 출근했더니 가게 문이 닫혀 있었습니다. 사장님은 전화도 안 받고, 사업자등록도 폐업 처리된 상태입니다. 밀린 월급과 퇴직금을 받을 길이 막혔다고 생각할 수 있지만, 근로복지공단의 체당금 제도를 활용하면 국가가 대신 지급합니다. 폐업 사업장에서 퇴직금을 받는 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '체당금 제도: 국가가 대신 지급하는 퇴직금',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 폐업·도산하여 지급 능력이 없으면 근로복지공단이 체당금으로 퇴직금을 대신 지급합니다.</strong></p>\n<ul>\n<li><strong>일반체당금</strong> — 법원의 파산선고·회생개시 결정이 있는 경우: 최종 3개월분 임금 + 최종 3년분 퇴직금 + 휴업수당</li>\n<li><strong>간이대지급금</strong> — 사실상 도산(폐업)인 경우: 관할 지방고용노동관서의 도산등사실인정을 받아 최대 1,000만원 한도로 지급</li>\n<li><strong>지급 상한</strong> — 연령별 상한이 있습니다(40세 이상 월 350만원, 30~39세 월 310만원, 30세 미만 월 220만원)</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사장이 연락두절이거나 사업장이 없어져도 포기하지 마세요. 체당금으로 퇴직금을 받을 수 있습니다</blockquote>',
      },
      {
        title: '체당금 청구 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">폐업 확인 → 도산인정 신청 → 체당금 청구 → 심사 → 수령 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>폐업 확인</strong> — 국세청 홈택스에서 사업자 상태를 조회하여 폐업 여부를 확인합니다</li>\n<li><strong>도산등사실인정 신청</strong> — 관할 지방고용노동관서에 도산등사실인정 신청서를 제출합니다</li>\n<li><strong>체당금 지급 청구</strong> — 인정서를 받으면 근로복지공단(1588-0075)에 체당금을 청구합니다</li>\n<li><strong>공단 심사</strong> — 근로관계, 체불 금액, 체불 기간을 심사합니다(약 14~30일 소요)</li>\n<li><strong>체당금 수령</strong> — 심사 완료 후 신청 계좌로 입금됩니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폐업 사업장 체당금 자격, AI가 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">폐업일과 체불 내역을 입력하면 청구 가능 금액을 즉시 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필요 서류와 사업주 개인 청구',
        content:
          '<p><strong style="color:#1e3a5f">체당금 외에 사업주 개인에게도 별도로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>체당금 필요 서류</strong> — 근로계약서(또는 근로사실 증빙), 급여명세서, 통장 거래내역, 퇴직 사실 확인 자료</li>\n<li><strong>사업주 개인 청구</strong> — 개인사업자라면 사업주 개인 재산에 대해 민사소송으로 청구할 수 있습니다. 법인이라도 대표이사에게 임금체불 책임을 물을 수 있는 경우가 있습니다</li>\n<li><strong>근로계약서 없는 경우</strong> — 동료 진술서, 업무 카카오톡, CCTV, 고용보험 가입 이력 등으로 근로관계를 증명합니다</li>\n<li><strong>청구 기한</strong> — 도산등사실인정일로부터 2년 이내에 체당금을 청구해야 하며, 퇴직금 소멸시효는 3년입니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 폐업 직후 증거가 사라지기 쉬우므로 근로 관련 서류를 평소에 사본으로 보관해두세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구권과 대표이사 책임',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 주식회사의 대표이사가 근로자의 급여 및 퇴직금을 체불한 사안에서 상법 제388조에 따른 이사의 보수 제한 규정을 적용하며, 대표이사의 개인 책임 범위를 판단했습니다.',
        takeaway:
          '사업장이 폐업해도 대표이사 개인에게 퇴직금 체불 책임을 물을 수 있으며, 체당금과 별도로 민사청구를 병행하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '사장님이 야반도주한 경우에도 체당금을 받을 수 있나요?',
        answer:
          '<strong>사업주 소재 불명이라도 도산등사실인정을 받으면 체당금 청구가 가능합니다.</strong> 관할 지방고용노동관서에 사업주 연락두절 사실을 소명하고 도산등사실인정을 신청하세요.',
      },
      {
        question: '체당금으로 퇴직금 전액을 받을 수 있나요?',
        answer:
          '<strong>간이대지급금(사실상 도산)은 최대 1,000만원 한도이며, 연령별 월 상한액이 있습니다.</strong> 퇴직금이 이를 초과하면 차액은 사업주 개인에게 민사소송으로 청구해야 합니다.',
      },
      {
        question: '폐업 후 사업주가 다른 사업을 시작했다면 어떻게 하나요?',
        answer:
          '<strong>새 사업을 시작한 사업주에게 기존 체불 퇴직금을 청구할 수 있습니다.</strong> 새 사업장의 사업자등록 정보를 확인하여 노동청 진정이나 민사소송을 진행하세요.',
      },
      {
        question: '체당금 신청 중에 사업주가 일부 지급하면 어떻게 되나요?',
        answer:
          '<strong>사업주가 지급한 금액을 제외한 잔액에 대해서만 체당금이 지급됩니다.</strong> 사업주로부터 받은 금액을 공단에 반드시 알려야 하며, 미신고 시 부정수급으로 환수될 수 있습니다.',
      },
      {
        question: '대한법률구조공단에서 무료 소송 지원을 받을 수 있나요?',
        answer:
          '<strong>임금·퇴직금 체불 사건은 대한법률구조공단(132)에서 무료 법률 구조가 가능합니다.</strong> 월 소득 기준이 있지만, 임금체불 근로자는 소득 요건을 완화 적용받으므로 대부분 지원 대상이 됩니다.',
      },
    ],
    cta: {
      text: '폐업 사업장 체당금 청구 방법, AI가 안내합니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '중간정산 요건 안내', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ══════════ 임금체불 5개 ══════════

  // ── 7. 5인 미만 사업장 임금체불 구제 ──
  {
    domain: 'wage',
    slug: 'wage-unpaid-small-under5',
    keyword: '5인 미만 사업장 임금체불 구제',
    questionKeyword: '직원 5명도 안 되는 곳에서 임금체불 당하면 어떻게 하나요?',
    ctaKeyword: '5인 미만 임금체불 구제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 임금체불 구제 방법 4단계 | 로앤가이드',
      description:
        '5인 미만 소규모 사업장에서 임금을 못 받았다면 노동청 진정부터 소액소송까지 구제 방법을 지금 확인하세요',
    },
    intro:
      '<p>직원 3명뿐인 가게에서 6개월째 일했는데 두 달치 월급을 못 받았습니다. "작은 가게라 법이 다르다"며 사장님은 미루기만 합니다. 5인 미만 사업장은 근로기준법 일부 조항이 제외되지만 임금 지급 의무는 예외 없이 적용됩니다. 소규모 사업장에서도 쓸 수 있는 구제 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '5인 미만 사업장에서도 적용되는 임금 보호 규정',
        content:
          '<p><strong style="color:#1e3a5f">사업장 규모와 관계없이 임금 지급 의무, 최저임금, 퇴직금은 전면 적용됩니다.</strong></p>\n<ul>\n<li><strong>임금 지급 4원칙</strong> — 통화불·직접불·전액불·정기불 원칙은 모든 사업장에 적용됩니다(근로기준법 제43조)</li>\n<li><strong>최저임금</strong> — 2026년 최저임금(시급 10,360원)은 5인 미만 사업장도 동일하게 적용됩니다</li>\n<li><strong>퇴직금</strong> — 1년 이상 근무 시 퇴직금 지급 의무도 사업장 규모 불문 적용됩니다</li>\n<li><strong>적용 제외 항목</strong> — 해고예고수당, 연장·야간·휴일근로 가산수당(50%), 연차유급휴가 등은 5인 미만 사업장에서 제외될 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기본급 미지급은 사업장 규모와 상관없이 임금체불이며, 형사처벌 대상입니다</blockquote>',
      },
      {
        title: '구제 절차 4단계: 내용증명부터 소액소송까지',
        content:
          '<p><strong style="color:#1e3a5f">소규모 사업장이라도 노동청 진정과 소액소송으로 체불임금을 받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>내용증명 발송</strong> — 체불 금액과 지급 기한(14일)을 명시한 내용증명을 사업주에게 보냅니다</li>\n<li><strong>노동청 진정</strong> — 관할 고용노동지청에 진정서를 제출합니다. 비용 무료, 처리 기간 약 25일</li>\n<li><strong>체불 사업주 명단 공개</strong> — 고용노동부는 임금을 체불한 사업주의 명단을 공개하며, 이는 사업주에게 강력한 압박 수단이 됩니다</li>\n<li><strong>소액사건심판</strong> — 체불금 3,000만원 이하 시 소액사건심판으로 빠르게(1~2회 기일) 판결을 받을 수 있습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 5인 미만 사업장 체불임금, AI가 구제 방법을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 금액과 상황을 입력하면 가장 효과적인 대응 방법을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보와 실전 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">소규모 사업장일수록 서면 계약이 없는 경우가 많으므로 증거 확보가 핵심입니다.</strong></p>\n<ul>\n<li><strong>급여 증빙</strong> — 통장 입금 내역, 현금 수령 시 수기 영수증이나 문자 기록을 남기세요</li>\n<li><strong>근로 사실 증명</strong> — 출퇴근 교통카드 내역, 업무 카카오톡, 가게 CCTV 출력 등을 요청합니다</li>\n<li><strong>녹음 확보</strong> — 사장님이 "다음 달에 준다"고 말한 녹음은 체불 인정 증거로 매우 유용합니다</li>\n<li><strong>동료 증언</strong> — 같이 일하는 동료의 진술서를 확보하면 진정 처리가 수월해집니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사업주가 "사업자 명의가 가족이라 책임 없다"고 주장해도 실질적 사업주가 누구인지가 기준이 됩니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 최저임금 지급 의무와 소정근로시간 산정',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무 형태에서 최저임금액 이상의 임금 지급 여부를 판단할 때 소정근로시간을 1일 8시간, 1주 40시간 기준으로 산정해야 한다고 판시하며, 특수 근무 형태에서도 최저임금 보호가 적용된다고 확인했습니다.',
        takeaway:
          '5인 미만 사업장이라도 최저임금 위반은 사업장 규모와 관계없이 처벌되므로, 시급 계산 시 소정근로시간 기준을 정확히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '5인 미만 사업장에서는 연장근로수당을 받을 수 없나요?',
        answer:
          '<strong>5인 미만 사업장은 연장·야간·휴일근로 가산수당(50%) 지급 의무가 없습니다.</strong> 다만 약정 근로시간을 초과한 시간에 대한 기본 시급은 지급해야 하며, 근로계약서에 가산수당 지급을 약정했다면 이행해야 합니다.',
      },
      {
        question: '사장님이 현금으로 줬다고 주장하는데 증거가 없으면 어떻게 하나요?',
        answer:
          '<strong>임금 지급 입증 책임은 사업주에게 있습니다.</strong> 사장님이 현금 지급을 주장하면 영수증이나 서명을 증명해야 합니다. 통장 입금 내역이 없고 영수증도 없다면 사업주의 주장이 인정되기 어렵습니다.',
      },
      {
        question: '노동청 진정하면 사장님이 보복해고할까 걱정됩니다',
        answer:
          '<strong>진정을 이유로 한 불이익처분은 부당해고에 해당하여 별도 구제가 가능합니다.</strong> 다만 5인 미만 사업장은 부당해고 구제신청 대상에서 제외될 수 있으므로, 진정 전 증거를 확보하고 필요시 대한법률구조공단(132)에 상담하세요.',
      },
      {
        question: '가게가 문을 닫으면 밀린 월급을 못 받나요?',
        answer:
          '<strong>사업장이 폐업해도 체당금 제도를 통해 밀린 임금을 받을 수 있습니다.</strong> 관할 고용노동지청에 도산등사실인정을 신청한 뒤 근로복지공단에 체당금을 청구하세요. 최대 1,000만원까지 지급됩니다.',
      },
    ],
    cta: {
      text: '5인 미만 사업장 체불임금 구제 방법, AI가 안내합니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '사업주 파산 시 청구법', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },

  // ── 8. 사업주 파산 체불임금 체당금 ──
  {
    domain: 'wage',
    slug: 'wage-unpaid-bankrupt-deposit',
    keyword: '사업주 파산 체불임금 체당금',
    questionKeyword: '사업주가 파산하면 밀린 월급은 어떻게 받나요?',
    ctaKeyword: '파산 사업장 체당금 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업주 파산 시 체불임금 체당금 청구 절차 5단계 | 로앤가이드',
      description:
        '사업주가 파산해서 밀린 월급을 못 받고 있다면 체당금 신청 절차와 상한액을 지금 확인하세요',
    },
    intro:
      '<p>회사가 법원에 파산 신청을 했다는 소식을 들었습니다. 아직 두 달치 월급도 못 받았고 퇴직금도 있는데 어디에 청구해야 할지 막막합니다. 임금채권보장법에 따라 사업주가 파산하면 근로복지공단이 체당금으로 밀린 임금과 퇴직금을 대신 지급합니다. 신청 절차를 정리해보세요.</p>',
    sections: [
      {
        title: '체당금 제도: 파산·도산 근로자를 위한 임금 보호',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 파산·회생·도산 시 근로복지공단이 근로자에게 체불임금을 대신 지급합니다.</strong></p>\n<ul>\n<li><strong>일반체당금(재판상 도산)</strong> — 법원의 파산선고·회생절차 개시결정이 있는 경우 적용. 최종 3개월분 임금 + 최종 3년분 퇴직금 + 최종 3개월분 휴업수당</li>\n<li><strong>간이대지급금(사실상 도산)</strong> — 법원 결정 없이 사실상 도산한 경우 지방고용노동관서의 인정을 받아 신청. 최대 1,000만원 한도</li>\n<li><strong>지급 상한</strong> — 30세 미만: 월 220만원 / 30~39세: 월 310만원 / 40세 이상: 월 350만원</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업주가 파산해도 근로자의 임금채권은 최우선변제권이 있으며, 체당금으로 먼저 지급받을 수 있습니다</blockquote>',
      },
      {
        title: '체당금 청구 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">파산 확인부터 수령까지 5단계를 순서대로 진행합니다.</strong></p>\n<ol>\n<li><strong>파산·도산 확인</strong> — 법원 파산선고 여부(대법원 나의사건검색) 또는 사업자등록 폐업 여부(홈택스)를 확인합니다</li>\n<li><strong>파산관재인에게 채권 신고</strong> — 재판상 도산의 경우 파산관재인에게 임금채권을 신고합니다</li>\n<li><strong>체당금 청구서 제출</strong> — 근로복지공단(1588-0075)에 체당금 지급 청구서와 증빙서류를 제출합니다</li>\n<li><strong>심사·확인</strong> — 공단이 근로관계, 체불 금액, 체불 기간을 심사합니다</li>\n<li><strong>체당금 수령</strong> — 심사 완료 후 신청 계좌로 입금됩니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 파산 사업장 체당금 신청 자격, AI가 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 금액과 파산 상황을 입력하면 청구 가능 금액을 즉시 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체당금 신청 시 필요 서류와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">체당금 신청 전 서류를 완비해야 심사가 지연되지 않습니다.</strong></p>\n<ul>\n<li><strong>필수 서류</strong> — 체당금 지급 청구서, 근로계약서, 급여명세서, 통장 거래내역, 파산선고 결정문 사본(또는 도산등사실인정서)</li>\n<li><strong>근로관계 증빙</strong> — 근로계약서가 없으면 고용보험 가입확인서, 급여 입금 내역, 업무 지시 문자 등으로 대체 가능합니다</li>\n<li><strong>청구 기한</strong> — 재판상 도산: 파산선고일 등으로부터 2년 / 사실상 도산: 도산등사실인정일로부터 2년</li>\n<li><strong>초과 금액 청구</strong> — 체당금 상한을 초과하는 체불금은 파산재단에 대한 배당이나 사업주 개인에게 민사소송으로 청구합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 체당금은 실제 체불 금액 범위 내에서만 지급되므로 체불 내역을 월별로 정확하게 산출해야 합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금채권의 최우선변제와 보호 범위',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 임금 지급 의무에 관하여 소정근로시간과 최저임금 산정 기준을 명확히 하며, 근로자의 임금채권이 사업주의 경영 상황과 무관하게 보호되어야 한다는 원칙을 확인했습니다.',
        takeaway:
          '사업주가 파산하더라도 근로자의 임금채권은 다른 채권자보다 우선하여 변제받을 수 있으므로, 파산 절차에서 채권 신고를 빠뜨리지 마세요.',
      },
    ],
    faq: [
      {
        question: '회사가 회생절차를 진행 중인데 체당금을 받을 수 있나요?',
        answer:
          '<strong>회생절차 개시결정이 있으면 일반체당금 신청이 가능합니다.</strong> 회생 중에는 체불임금이 회생채권으로 분류되어 바로 받기 어려울 수 있으므로, 체당금으로 먼저 수령하는 것이 유리합니다.',
      },
      {
        question: '체당금과 파산배당을 이중으로 받을 수 있나요?',
        answer:
          '<strong>근로복지공단이 체당금을 지급한 후 사업주에게 구상권을 행사합니다.</strong> 체당금을 받은 금액만큼은 근로자의 파산채권이 공단으로 이전되므로 이중 수령은 되지 않습니다.',
      },
      {
        question: '회사 동료들과 공동으로 체당금을 신청할 수 있나요?',
        answer:
          '<strong>각자 개별적으로 신청해야 합니다.</strong> 다만 같은 사업장 근로자가 여러 명 신청하면 공단의 사실관계 확인이 빨라져 전체 처리 속도가 높아질 수 있습니다.',
      },
      {
        question: '체당금 심사 기간은 얼마나 걸리나요?',
        answer:
          '<strong>통상 14~30일 정도 소요됩니다.</strong> 서류가 완비되어 있으면 빠르게 처리되지만, 근로관계 확인이 필요한 경우 추가 조사로 기간이 늘어날 수 있습니다.',
      },
    ],
    cta: {
      text: '파산 사업장 체당금 청구 자격, AI가 확인합니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '사업주 파산 시 청구법', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },

  // ── 9. 외국인 근로자 임금체불 신고 ──
  {
    domain: 'wage',
    slug: 'wage-unpaid-foreign-worker',
    keyword: '외국인 근로자 임금체불 신고',
    questionKeyword: '외국인 근로자인데 임금체불을 신고할 수 있나요?',
    ctaKeyword: '외국인 임금체불 신고 방법 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 임금체불 신고 절차 4단계 | 로앤가이드',
      description:
        '외국인 근로자로서 월급을 못 받았다면 체류자격 무관 임금체불 신고 방법과 지원 기관을 지금 확인하세요',
    },
    intro:
      '<p>비자가 만료된 상태로 공장에서 일하고 있는데 석 달째 월급을 못 받았습니다. 사장님은 "불법체류자가 신고하면 추방된다"고 협박합니다. 근로기준법은 국적과 체류자격을 구분하지 않으며, 미등록 외국인이라도 임금체불을 신고하고 밀린 임금을 받을 수 있습니다. 안전하게 신고하는 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '외국인도 동일 보호: 체류자격 무관 임금 보호',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제6조(균등처우)에 따라 외국인 근로자도 내국인과 동일한 임금 보호를 받습니다.</strong></p>\n<ul>\n<li><strong>국적 무관</strong> — 한국인, 외국인 모두 근로기준법의 임금 보호를 동일하게 적용받습니다</li>\n<li><strong>체류자격 무관</strong> — 대법원은 미등록(불법체류) 외국인의 근로관계도 유효하게 인정하여 임금청구권이 있다고 확인했습니다</li>\n<li><strong>사업주 협박 시</strong> — "신고하면 추방한다"는 협박은 강요죄에 해당할 수 있으며, 임금체불 진정 처리 중에는 출입국관리사무소에 통보되지 않습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 체류자격을 이유로 임금 지급을 거부하는 것은 근로기준법 위반이며 형사처벌 대상입니다</blockquote>',
      },
      {
        title: '외국인 임금체불 신고 4단계',
        content:
          '<p><strong style="color:#1e3a5f">증거 확보 → 지원 기관 상담 → 노동청 진정 → 체불임금 수령 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>증거 확보</strong> — 급여 입금 내역, 근로계약서, 출퇴근 기록, 업무 지시 문자·카카오톡을 사본으로 보관합니다</li>\n<li><strong>지원 기관 상담</strong> — 외국인근로자지원센터(1644-0644)에서 16개 언어 무료 상담과 진정서 작성을 도와줍니다</li>\n<li><strong>노동청 진정 접수</strong> — 관할 고용노동지청에 진정서를 제출합니다. 통역 서비스가 제공됩니다</li>\n<li><strong>체불임금 수령</strong> — 근로감독관 조사 후 시정 명령이 내려지면 사업주가 임금을 지급합니다. 미이행 시 사법처리됩니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 외국인 임금체불, AI가 신고 절차를 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 상황을 입력하면 필요한 서류와 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '외국인 전용 지원 기관과 무료 법률 구조',
        content:
          '<p><strong style="color:#1e3a5f">외국인 근로자를 위한 전문 지원 기관에서 무료 도움을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>외국인근로자지원센터(1644-0644)</strong> — 16개 언어 상담, 진정서 작성 지원, 노동청 동행 서비스</li>\n<li><strong>대한법률구조공단(132)</strong> — 외국인 근로자 임금체불 사건 무료 법률 구조(소송 대리 포함)</li>\n<li><strong>고용노동부 외국인력상담센터(1350)</strong> — 노동 관련 종합 상담, 통역 연결</li>\n<li><strong>이주노동자 단체</strong> — 이주노동자노동조합, 외국인노동자전문상담기관 등에서 동행 지원 가능</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 출국 예정일이 가까우면 출국 전에 진정 접수를 완료하고, 대리인 위임장을 작성해두세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 최저임금 미달 임금 지급의 위법성',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 최저임금액 이상의 임금 지급 여부를 판단할 때 소정근로시간을 기준으로 산정해야 하며, 근로 형태의 특수성과 무관하게 최저임금 보호가 적용된다고 판시했습니다.',
        takeaway:
          '외국인 근로자도 최저임금 보호를 받으며, 시급이 최저임금에 미달하면 체불 신고와 함께 차액을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '미등록 상태에서 노동청에 진정하면 출입국에 통보되나요?',
        answer:
          '<strong>임금체불 진정 처리 중에는 출입국관리사무소에 통보하지 않습니다.</strong> 2015년부터 고용노동부와 법무부 간 협약에 따라 체불임금 해결 전까지 체류자격 문제로 불이익을 주지 않도록 하고 있습니다.',
      },
      {
        question: '한국어를 전혀 못하는데 진정서를 어떻게 쓰나요?',
        answer:
          '<strong>외국인근로자지원센터(1644-0644)에서 16개 언어로 진정서 작성을 무료 도와줍니다.</strong> 노동청 방문 시에도 통역 서비스가 제공되므로 한국어 능력과 관계없이 신고가 가능합니다.',
      },
      {
        question: '임금을 현금으로 받았는데 증거가 없으면 어떻게 하나요?',
        answer:
          '<strong>임금 지급 입증 책임은 사업주에게 있습니다.</strong> 현금 지급을 주장하는 사업주가 영수증이나 서명을 증명해야 합니다. 동료 진술, 급여 관련 대화 기록, 근무표 등도 보조 증거로 활용할 수 있습니다.',
      },
      {
        question: '출국 후에도 밀린 월급을 받을 수 있나요?',
        answer:
          '<strong>출국 전 대리인을 지정해두면 본국에서도 대리인을 통해 체불임금을 수령할 수 있습니다.</strong> 외국인근로자지원센터에서 위임장 양식을 제공하며, 공증을 받아두면 더 확실합니다.',
      },
    ],
    cta: {
      text: '외국인 근로자 임금체불 신고 방법, AI가 안내합니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '사업주 파산 시 청구법', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },

  // ── 10. 인턴 수습 임금체불 대응 ──
  {
    domain: 'wage',
    slug: 'wage-unpaid-intern-trainee',
    keyword: '인턴 수습 임금체불 대응',
    questionKeyword: '인턴이나 수습 기간에도 임금체불로 신고할 수 있나요?',
    ctaKeyword: '인턴 수습 임금체불 대응 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '인턴·수습 임금체불 대응법 핵심 3단계 | 로앤가이드',
      description:
        '인턴이나 수습이라 임금을 못 받아도 된다고 들었다면 수습 근로자의 임금 보호 기준을 지금 확인하세요',
    },
    intro:
      '<p>3개월 수습 기간이 끝나면 정직원으로 전환된다는 말을 듣고 입사했습니다. 그런데 수습 기간 동안 월급이 100만원뿐이고, 마지막 달은 아예 지급되지 않았습니다. 회사는 "수습이니까 원래 적다"고 합니다. 수습·인턴이라도 근로계약이 체결되었다면 최저임금 보호를 받으며, 체불 시 동일하게 신고할 수 있습니다.</p>',
    sections: [
      {
        title: '수습·인턴도 근로자: 임금 보호 범위',
        content:
          '<p><strong style="color:#1e3a5f">수습·인턴이라는 명칭과 관계없이 근로계약이 있으면 근로기준법상 근로자로서 임금 보호를 받습니다.</strong></p>\n<ul>\n<li><strong>최저임금 적용</strong> — 수습 시작 후 3개월 이내에는 최저임금의 90%까지 감액이 가능하지만(단, 1년 이상 계약인 경우에 한함), 그 미만으로는 지급할 수 없습니다</li>\n<li><strong>단기 계약 수습</strong> — 1년 미만 계약의 수습은 최저임금 감액이 허용되지 않아 정상 최저임금이 전액 적용됩니다</li>\n<li><strong>무급 인턴</strong> — 실질적으로 업무를 수행하고 사용자의 지휘·감독을 받는다면 "무급 인턴"이라 하더라도 근로자로 인정되어 임금 지급 의무가 발생합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "수습이니까 월급을 적게 줘도 된다"는 것은 사실이 아닙니다. 최저임금의 90% 미만은 위법입니다</blockquote>',
      },
      {
        title: '인턴·수습 임금체불 대응 3단계',
        content:
          '<p><strong style="color:#1e3a5f">수습 기간이라도 임금체불은 동일한 절차로 구제받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>체불 금액 확인</strong> — 근로계약서의 약정 임금(또는 최저임금)을 기준으로 미지급액을 계산합니다. 수습 3개월 이내 감액이 적용되었다면 최저임금의 90% 기준으로 산정합니다</li>\n<li><strong>내용증명 발송</strong> — 체불 금액과 지급 기한(14일)을 명시한 내용증명을 회사에 보냅니다</li>\n<li><strong>노동청 진정</strong> — 14일 내 미지급 시 관할 고용노동지청에 진정서를 제출합니다. 수습 근로자도 동일한 보호를 받습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 수습·인턴 임금체불, AI가 대응 방법을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약 조건과 체불 상황을 입력하면 청구 가능 금액을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수습 해지와 임금체불: 주의할 점',
        content:
          '<p><strong style="color:#1e3a5f">수습 기간 종료 후 전환 거부(해고)가 되더라도 이미 근무한 기간의 임금은 전액 지급되어야 합니다.</strong></p>\n<ul>\n<li><strong>근무한 만큼 지급</strong> — 수습 기간 중 해지되더라도 실제 근무일수에 해당하는 임금은 반드시 받아야 합니다</li>\n<li><strong>수습 해지 통보</strong> — 수습 3개월 이내 해지는 해고예고(30일 전)가 면제되지만, 임금 지급 의무는 면제되지 않습니다</li>\n<li><strong>교육 비용 공제 금지</strong> — "교육비를 빼겠다"는 주장은 근로기준법 위반입니다. 회사 업무를 위한 교육 비용은 사업주 부담이며 임금에서 공제할 수 없습니다</li>\n<li><strong>퇴직금</strong> — 수습 기간을 포함해 1년 이상 근무했다면 퇴직금도 받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "수습 기간이라 임금을 줄 의무가 없다"는 회사의 주장은 법적 근거가 없습니다. 근로를 제공했다면 반드시 임금을 받아야 합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 최저임금 기준 임금 지급 의무',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 최저임금액 이상의 임금 지급 여부를 판단할 때 소정근로시간을 기준으로 산정하며, 근무 형태나 명칭에 관계없이 최저임금 보호가 적용된다고 판시했습니다.',
        takeaway:
          '수습·인턴 명칭이라도 근로계약이 있다면 최저임금(또는 감액 최저임금) 이상의 임금을 받아야 하며, 미달 시 차액을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '무급 인턴이라 계약했는데 임금을 받을 수 있나요?',
        answer:
          '<strong>실질적으로 업무를 수행하고 사용자의 지휘·감독을 받았다면 근로자로 인정되어 임금을 받을 수 있습니다.</strong> 단순 견학이나 교육 목적의 체험은 근로자로 보지 않을 수 있지만, 실제 업무에 투입되었다면 무급 합의는 무효입니다.',
      },
      {
        question: '수습 급여가 최저임금의 90%보다 적으면 어떻게 하나요?',
        answer:
          '<strong>최저임금의 90% 미만으로 지급하는 것은 위법입니다.</strong> 차액을 사업주에게 청구할 수 있으며, 노동청에 최저임금 위반으로 신고할 수 있습니다. 2026년 기준 수습 감액 최저임금은 시급 9,324원입니다.',
      },
      {
        question: '수습 기간에 야근을 많이 했는데 수당을 안 줍니다',
        answer:
          '<strong>5인 이상 사업장이라면 연장근로수당(기본 시급의 50% 가산)을 받아야 합니다.</strong> 수습이라는 이유로 연장근로수당을 면제받는 규정은 없습니다. 5인 미만 사업장은 가산수당 적용이 제외되지만 기본 시급은 받아야 합니다.',
      },
      {
        question: '인턴 계약서에 "체불 시 이의를 제기하지 않는다"고 써 있으면?',
        answer:
          '<strong>임금 지급은 강행규정이므로 이에 반하는 계약 조항은 무효입니다.</strong> 어떤 형태의 합의서나 계약서에도 근로기준법상 임금 보호를 포기하는 내용은 법적 효력이 없습니다.',
      },
    ],
    cta: {
      text: '인턴·수습 임금체불 대응 방법, AI가 안내합니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '사업주 파산 시 청구법', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },

  // ── 11. 영업직 커미션 미지급 청구 ──
  {
    domain: 'wage',
    slug: 'wage-unpaid-commission-sales',
    keyword: '영업직 커미션 미지급 청구',
    questionKeyword: '영업 실적에 따른 커미션을 안 줄 때 어떻게 청구하나요?',
    ctaKeyword: '영업직 커미션 미지급 청구 상담',
    type: '쟁점분석형',
    perspective: 'victim',
    meta: {
      title: '영업직 커미션 미지급 시 청구 방법 4단계 | 로앤가이드',
      description:
        '영업 실적 커미션을 약속대로 받지 못했다면 커미션이 임금인지 판단 기준과 청구 방법을 지금 확인하세요',
    },
    intro:
      '<p>보험 영업을 하면서 매달 실적 커미션을 받기로 했는데, 올해 들어 회사가 "실적 기준을 바꿨다"며 3개월째 커미션을 지급하지 않습니다. 커미션이 근로의 대가로 지급되는 임금이라면 체불로 신고할 수 있지만, 성과에 따른 보상금인 경우 다른 접근이 필요합니다. 본인의 커미션이 임금에 해당하는지 판단 기준을 확인해보세요.</p>',
    sections: [
      {
        title: '커미션이 임금인지 판단하는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">커미션이 근로기준법상 "임금"에 해당하려면 근로의 대가로서 계속적·정기적으로 지급되어야 합니다.</strong></p>\n<ol>\n<li><strong>근로의 대가인가</strong> — 근로자가 제공한 영업 활동의 대가로 지급되는 것인지, 사용자의 은혜적 급부인지 판단합니다. 고정급 없이 커미션만 받는 경우에도 근로의 대가로 인정됩니다</li>\n<li><strong>계속적·정기적 지급인가</strong> — 매월 또는 매 분기 정기적으로 지급되는 구조라면 임금성이 인정됩니다. 일회성 보너스와는 구별됩니다</li>\n<li><strong>지급 의무가 있는가</strong> — 취업규칙, 급여규정, 근로계약서에 커미션 지급 기준이 명시되어 있다면 사용자에게 지급의무가 있는 임금입니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 커미션 지급 기준이 계약서나 규정에 명시되어 있다면 "임금"으로 인정될 가능성이 높습니다</blockquote>',
      },
      {
        title: '커미션 미지급 시 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">커미션이 임금으로 인정되면 일반 임금체불과 동일한 절차로 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>미지급 금액 산출</strong> — 계약서·규정에 명시된 커미션 산정 기준과 실제 영업 실적을 비교하여 미지급 금액을 정확히 계산합니다</li>\n<li><strong>증거 확보</strong> — 근로계약서, 커미션 규정, 영업 실적 자료, 과거 지급 내역(급여명세서, 통장 내역)을 모두 확보합니다</li>\n<li><strong>내용증명 발송</strong> — 미지급 커미션 금액과 산정 근거를 명시한 내용증명을 회사에 보냅니다</li>\n<li><strong>노동청 진정</strong> — 14일 내 미지급 시 관할 고용노동지청에 임금체불로 진정합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 커미션 미지급, AI가 임금 해당 여부를 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약 조건과 지급 내역을 입력하면 청구 가능 여부를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '커미션 분쟁의 실전 쟁점과 대응',
        content:
          '<p><strong style="color:#1e3a5f">회사가 일방적으로 커미션 기준을 변경하거나 퇴직 시 커미션을 삭감하는 경우 대응 방법을 확인하세요.</strong></p>\n<ul>\n<li><strong>일방적 기준 변경</strong> — 취업규칙·급여규정에 명시된 커미션 기준을 근로자에게 불리하게 변경하려면 근로자 과반수 동의가 필요합니다(근로기준법 제94조). 동의 없는 변경은 무효입니다</li>\n<li><strong>퇴직 시 커미션 미지급</strong> — "퇴직하면 커미션을 안 준다"는 조항은 강행규정 위반으로 무효입니다. 이미 확정된 실적에 대한 커미션은 퇴직 후에도 지급해야 합니다</li>\n<li><strong>프리랜서 위장</strong> — 근로자임에도 "프리랜서 계약"으로 위장하여 임금 보호를 회피하는 경우, 실질적 근로관계가 인정되면 임금으로 청구할 수 있습니다</li>\n<li><strong>퇴직금 산정</strong> — 커미션이 임금으로 인정되면 퇴직금 산정 시 평균임금에도 포함됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 커미션 산정 기준이 불명확하면 민사소송으로 갈 수 있으므로, 입사 시 커미션 규정을 서면으로 확인해두세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로의 대가로 지급되는 금품의 임금 해당 여부',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 사용자가 근로자에게 지급하는 금품이 임금에 해당하려면 근로의 대가로 지급되어야 하며, 계속적·정기적으로 지급되고 단체협약·취업규칙 등에 의해 지급의무가 있어야 한다고 판시했습니다.',
        takeaway:
          '커미션이 매월 정기적으로 지급되고 급여규정에 산정 기준이 명시되어 있다면 "근로의 대가"인 임금으로 인정될 가능성이 높으므로, 체불 시 노동청 진정이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '커미션만 받고 고정급이 없는 경우에도 임금으로 인정되나요?',
        answer:
          '<strong>고정급 없이 커미션만 받더라도 근로계약에 따른 근로의 대가라면 임금으로 인정됩니다.</strong> 다만 완전한 도급 계약(프리랜서)으로 판단될 수도 있으므로 실질적 근로관계(출퇴근 관리, 업무 지시 등)를 증명하는 것이 중요합니다.',
      },
      {
        question: '회사가 "실적 미달이라 커미션이 0원"이라고 하면?',
        answer:
          '<strong>커미션 산정 기준에 최소 보장액이 있다면 0원 지급은 위법입니다.</strong> 기준이 명확하지 않다면 과거 동일 실적 시 지급된 금액을 비교하여 부당성을 주장할 수 있습니다.',
      },
      {
        question: '영업 실적 자료를 회사가 안 보여주는데 어떻게 하나요?',
        answer:
          '<strong>근로기준법 제48조에 따라 근로자는 자신의 급여 관련 기록 열람을 요구할 수 있습니다.</strong> 회사가 거부하면 노동청 진정 시 근로감독관이 자료 제출을 요구할 수 있습니다.',
      },
      {
        question: '퇴직 후 확정된 실적의 커미션을 안 주면 어떻게 하나요?',
        answer:
          '<strong>근무 기간 중 확정된 실적에 대한 커미션은 퇴직 후에도 지급 의무가 있습니다.</strong> 퇴직일로부터 14일 이내에 지급되지 않으면 지연이자(연 20%)와 함께 청구할 수 있습니다.',
      },
      {
        question: '프리랜서 계약을 했는데 사실은 출퇴근 관리를 받습니다',
        answer:
          '<strong>계약 명칭이 프리랜서라도 실질적으로 사용자의 지휘·감독을 받으면 근로자로 인정됩니다.</strong> 출퇴근 시간 지정, 업무 방법 지시, 전속성 등이 인정되면 근로기준법의 보호를 받으며 커미션도 임금으로 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '영업직 커미션 미지급 청구 방법, AI가 안내합니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '사업주 파산 시 청구법', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },
];
