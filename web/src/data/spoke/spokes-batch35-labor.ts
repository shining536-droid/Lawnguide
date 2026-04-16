import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 퇴직금 2개 + 임금체불 2개 + 해고 2개 (batch35)
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 이 페이지는 [인센티브·성과급을 받던 근로자]의 [퇴직금에 포함되는지 모르는 상황]에서 [목표 vs 성과 인센티브 구분 기준 안내]를 돕는 페이지다.
// 2. 이 페이지는 [퇴사 후 재입사한 근로자]의 [근속기간 합산 여부를 모르는 상황]에서 [퇴직금 정산 여부별 합산 기준 안내]를 돕는 페이지다.
// 3. 이 페이지는 [임금체불 신고 후 보복을 당한 근로자]의 [보호 제도를 모르는 상황]에서 [불이익처분 금지와 대응 절차 안내]를 돕는 페이지다.
// 4. 이 페이지는 [단기 아르바이트·일용직 근로자]의 [소액 임금 미지급 구제를 모르는 상황]에서 [청구 절차와 증거 확보법 안내]를 돕는 페이지다.
// 5. 이 페이지는 [카톡·이메일로 해고 통보받은 근로자]의 [서면 요건 충족 여부를 모르는 상황]에서 [비대면 통보 효력과 대응법 안내]를 돕는 페이지다.
// 6. 이 페이지는 [회사 합병·분할로 직위가 소멸된 근로자]의 [해고 정당성 판단을 모르는 상황]에서 [합병 시 근로관계 승계 법리 안내]를 돕는 페이지다.

export const spokesBatch35Labor: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. retirement / retirement-incentive-bonus-average-wage-inclusion
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-incentive-bonus-average-wage-inclusion',
    keyword: '인센티브 성과급 퇴직금 포함 여부 평균임금',
    questionKeyword: '인센티브와 성과급이 퇴직금 평균임금에 포함되나요?',
    ctaKeyword: '인센티브 퇴직금 포함 여부 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '인센티브·성과급 퇴직금 포함 기준 대법원 판례 | 로앤가이드',
      description:
        '매년 받던 인센티브가 퇴직금에 포함되는지 모르겠다면 목표 인센티브와 성과 인센티브의 구분 기준을 지금 확인하세요',
    },
    intro:
      '<p>10년간 매년 목표 달성 인센티브를 수백만 원씩 받아왔는데, 퇴직금을 정산하니 기본급만으로 계산되어 있습니다. 회사는 인센티브는 임금이 아니라 경영성과 배분이라고 합니다. 그런데 매달 고정으로 들어오던 금액과, 실적에 따라 달라지던 금액은 법적으로 다르게 취급된다는 이야기를 들었습니다. 인센티브와 성과급이 퇴직금 평균임금에 포함되는 기준을 확인해보세요.</p>',
    sections: [
      {
        title: '평균임금의 기초가 되는 임금이란',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법상 평균임금에 포함되려면 해당 금품이 근로의 대가로 지급된 "임금"에 해당해야 합니다.</strong></p>\n<ul>\n<li><strong>임금의 정의</strong> — 근로기준법 제2조에 따라 사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품을 말합니다. 명칭이 인센티브든 상여금이든 관계없이 실질이 중요합니다</li>\n<li><strong>3가지 판단 기준</strong> — 대법원은 (1) 정기성: 일정한 간격으로 지급되는지, (2) 일률성: 모든 근로자 또는 일정 조건 충족자에게 지급되는지, (3) 고정성: 사전에 지급 조건이 확정되어 있는지를 종합적으로 판단합니다</li>\n<li><strong>평균임금 산정 방식</strong> — 퇴직 전 3개월간 지급된 임금 총액을 그 기간의 총 일수로 나눕니다. 다만 인센티브처럼 연 1~2회 지급되는 금품은 12분의 3을 곱해 3개월치로 환산하여 산입합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: "인센티브"라는 이름만으로 임금 여부가 결정되지 않습니다. 지급 조건과 실태를 기준으로 판단합니다</blockquote>',
      },
      {
        title: '목표 인센티브 vs 성과 인센티브 구분',
        content:
          '<p><strong style="color:#1e3a5f">개인별 목표 달성에 따른 인센티브는 임금으로, 회사 전체 경영성과에 따른 인센티브는 임금이 아닐 수 있습니다.</strong></p>\n<ol>\n<li><strong>목표 인센티브(PI)</strong> — 개인이나 팀의 업무 목표 달성률에 따라 지급되는 금품입니다. 근로 제공과 직접 연결되고, 지급 기준이 사전에 정해져 있으면 근로의 대가인 임금에 해당합니다</li>\n<li><strong>성과 인센티브(PS/EVA)</strong> — 회사의 영업이익, 경제적 부가가치(EVA) 등 경영성과에 연동되어 지급되는 금품입니다. 개인 근로와 직접 관련 없이 회사 실적에 따라 결정되면 경영성과 분배금으로 임금에 해당하지 않을 수 있습니다</li>\n<li><strong>혼합형 인센티브</strong> — 개인 성과와 회사 실적이 혼합된 기준으로 지급되는 경우, 개인 근로 기여 비율이 높으면 임금으로 판단될 가능성이 큽니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 인센티브 유형별 퇴직금 포함 여부를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특별성과급과 정기상여금 판단',
        content:
          '<p><strong style="color:#1e3a5f">매년 관행적으로 지급된 특별성과급은 임금으로 인정될 가능성이 높고, 재량적 일시금은 제외될 수 있습니다.</strong></p>\n<ul>\n<li><strong>정기상여금</strong> — 설·추석 상여금처럼 정기적으로 지급되고, 취업규칙이나 근로계약에 지급 근거가 있으면 임금에 해당합니다. 금액이 매번 달라지더라도 지급 자체가 확정되어 있으면 임금입니다</li>\n<li><strong>관행적 특별성과급</strong> — 취업규칙에 명시되지 않았더라도 3년 이상 매년 전 직원에게 지급된 실적이 있으면 노사 관행으로 임금성이 인정될 수 있습니다</li>\n<li><strong>사용자 재량 일시금</strong> — 대표이사가 그때그때 결정하여 일부 직원에게만 지급하는 포상금, 격려금은 임금으로 보기 어렵습니다</li>\n<li><strong>계약서 문구의 한계</strong> — 근로계약서에 "인센티브는 임금이 아니다"라고 기재되어 있어도, 실질적으로 근로의 대가라면 법적으로는 임금으로 판단됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 임금 여부를 다투려면 지급 내역, 사내 규정, 지급 기준표 등을 반드시 확보해야 합니다</blockquote>',
      },
      {
        title: '퇴직금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">인센티브가 평균임금에서 빠진 경우, 퇴직 후 3년 내에 차액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 퇴직금 차액을 산정하여 회사에 내용증명으로 지급을 요청합니다. 인센티브가 임금에 해당하는 근거(지급 내역, 규정 등)를 첨부합니다</li>\n<li><strong>고용노동부 진정</strong> — 회사가 거부하면 관할 고용노동부에 퇴직금 미지급 진정을 제기합니다. 근로감독관이 사실관계를 조사하고 시정 명령을 내릴 수 있습니다</li>\n<li><strong>민사소송 제기</strong> — 행정 구제로 해결되지 않으면 민사법원에 퇴직금 차액 청구 소송을 제기합니다. 인센티브의 임금성 여부가 핵심 쟁점이 됩니다</li>\n<li><strong>소멸시효 주의</strong> — 퇴직금 청구권의 소멸시효는 퇴직일로부터 3년입니다. 기한이 지나면 청구 자체가 불가능해지므로 조기 대응이 중요합니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 목표 인센티브와 EVA 인센티브의 임금성 판단',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 목표 인센티브(PI)는 개인의 업무목표 달성도에 따라 지급되므로 근로의 대가인 임금에 해당하나, EVA 기반 성과 인센티브(PS)는 회사의 경영성과를 분배하는 것으로 평균임금에 포함되지 않는다고 판시했습니다.',
        takeaway:
          '같은 "인센티브"라는 이름이라도 개인 목표 연동형은 임금, 회사 경영성과 연동형은 비임금으로 판단됩니다. 자신이 받던 인센티브의 지급 기준을 확인하여 퇴직금 재산정을 요청하세요.',
      },
    ],
    faq: [
      {
        question: '매년 받았으면 무조건 임금인가요?',
        answer:
          '<strong>매년 받았다는 사실만으로 임금이 되는 것은 아닙니다.</strong> 정기성은 임금 판단의 한 요소일 뿐이고, 지급 조건이 개인의 근로 제공과 연결되는지가 핵심입니다. 다만 3년 이상 관행적으로 전 직원에게 지급되었다면 노사 관행으로 임금성이 인정될 가능성이 높아집니다.',
      },
      {
        question: '회사가 "인센티브는 임금 아니다"라고 하면 어떻게 하나요?',
        answer:
          '<strong>회사의 주장과 관계없이 실질적인 지급 조건으로 판단합니다.</strong> 근로계약서나 취업규칙에 "임금이 아니다"라고 적혀 있어도 실제로 근로의 대가로 정기적·일률적으로 지급되었다면 법적으로 임금에 해당합니다. 지급 내역서, 급여명세서, 사내 규정을 증거로 확보하세요.',
      },
      {
        question: '퇴직금 차액 청구 시효는 얼마인가요?',
        answer:
          '<strong>퇴직일로부터 3년입니다.</strong> 근로기준법 제49조에 따라 퇴직금 청구권은 3년간 행사하지 않으면 시효로 소멸합니다. 인센티브의 임금성을 다투려면 퇴직 후 가능한 빨리 내용증명을 발송하여 시효 중단 조치를 취하는 것이 안전합니다.',
      },
      {
        question: '퇴직 시 인센티브 정산을 회사가 거부하면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 진정 또는 민사소송으로 대응할 수 있습니다.</strong> 먼저 내용증명으로 차액 지급을 요청하고, 거부 시 관할 고용노동부에 퇴직금 미지급 진정을 제기합니다. 근로감독관의 시정 명령에도 불응하면 민사법원에 퇴직금 차액 청구 소송을 제기할 수 있습니다.',
      },
    ],
    cta: {
      text: '인센티브 퇴직금 포함 여부, AI가 분석해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '상여금 퇴직금 포함 기준', href: '/guide/retirement/retirement-bonus-included-calculation' },
      { label: '평균임금 분쟁 대응법', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '퇴직금 미지급 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '야간·연장수당 평균임금 포함', href: '/guide/retirement/retirement-night-overtime-included-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. retirement / retirement-rehire-continuous-service-calculation
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-rehire-continuous-service-calculation',
    keyword: '퇴사 재입사 퇴직금 근속기간 합산 여부',
    questionKeyword: '퇴사 후 같은 회사에 재입사하면 근속기간이 합산되나요?',
    ctaKeyword: '재입사 퇴직금 근속기간 합산 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '퇴사 후 재입사 퇴직금 근속기간 합산 판단 기준 | 로앤가이드',
      description:
        '퇴사 후 같은 회사에 재입사했는데 퇴직금 근속기간이 합산되는지 모르겠다면 정산 여부별 합산 기준을 지금 확인하세요',
    },
    intro:
      '<p>3년 전에 퇴사했다가 같은 회사에 다시 입사해서 2년째 근무하고 있습니다. 이번에 퇴직금을 정산받으려는데, 회사는 재입사 후 2년만 인정하겠다고 합니다. 그런데 이전에 퇴직금을 정산받지 못한 채 나왔고, 퇴사 기간도 한 달밖에 안 됩니다. 이런 경우 이전 근속기간이 합산될 수 있는지 판단 기준을 확인해보세요.</p>',
    sections: [
      {
        title: '퇴직금 근속기간 합산의 원칙',
        content:
          '<p><strong style="color:#1e3a5f">근로관계가 단절 없이 계속되었다면 전체 근무기간이 퇴직금 산정의 기초가 되는 계속근로기간에 포함됩니다.</strong></p>\n<ul>\n<li><strong>계속근로기간의 의미</strong> — 근로자퇴직급여보장법 제8조에 따라 퇴직금은 계속근로기간 1년에 대하여 30일분 이상의 평균임금으로 산정합니다. 여기서 계속근로기간은 근로계약을 체결하여 해지될 때까지의 기간을 말합니다</li>\n<li><strong>단절 여부 판단</strong> — 퇴사와 재입사 사이에 근로관계의 실질적 단절이 있었는지가 핵심입니다. 형식적으로 퇴사 처리되었더라도 실질적으로 근로관계가 계속되었다면 합산됩니다</li>\n<li><strong>퇴직금 중간정산과의 관계</strong> — 퇴사 시 퇴직금을 이미 정산받았다면 그 시점까지의 근속기간은 리셋되고, 재입사 이후만 새로운 계속근로기간으로 산정됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 형식적 퇴사→재입사라도 실질적으로 근로관계가 계속되었으면 합산 대상입니다</blockquote>',
      },
      {
        title: '합산 되는 경우 3가지',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 미정산, 단기간 공백, 회사 지시에 의한 형식적 퇴사 등의 경우 근속기간이 합산됩니다.</strong></p>\n<ol>\n<li><strong>퇴직금을 정산받지 않은 경우</strong> — 퇴사 시 퇴직금을 지급받지 않았다면, 이전 근로관계가 정산되지 않은 것이므로 재입사 후 근속기간과 합산하여 전체 기간에 대한 퇴직금을 청구할 수 있습니다</li>\n<li><strong>공백 기간이 극히 짧은 경우</strong> — 퇴사 후 며칠~수주 내에 같은 회사에 재입사한 경우, 근로관계의 실질적 단절이 없었다고 판단될 수 있습니다. 특히 같은 업무를 계속 수행했다면 합산 가능성이 높습니다</li>\n<li><strong>회사 편의에 의한 형식적 퇴사</strong> — 계약직 전환, 조직 개편, 법인 변경 등 회사의 필요에 의해 형식적으로 퇴사 처리된 경우, 실질적 근로관계가 계속되었다면 합산됩니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 퇴사·재입사 상황에서 합산 여부를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합산 안 되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금을 완전히 정산받고 상당 기간 후 재입사한 경우에는 근속기간이 합산되지 않습니다.</strong></p>\n<ul>\n<li><strong>퇴직금 완전 정산</strong> — 퇴사 시 퇴직금을 전액 지급받았다면 이전 근로관계는 청산된 것으로 봅니다. 재입사 후에는 새로운 계속근로기간이 시작됩니다</li>\n<li><strong>상당한 공백 기간</strong> — 수개월 이상의 공백 기간이 있고, 그 사이에 다른 직장에 근무하거나 구직활동을 했다면 근로관계의 단절이 인정됩니다</li>\n<li><strong>완전히 다른 업무</strong> — 재입사 후 이전과 전혀 다른 부서에서 다른 업무를 수행하고, 근로조건도 새로 정한 경우에는 별개의 근로관계로 볼 수 있습니다</li>\n<li><strong>자발적 퇴사 후 재입사</strong> — 근로자가 자발적으로 퇴직한 뒤 퇴직금을 수령하고, 일정 기간 후 재입사한 경우에는 합산이 어렵습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 퇴직금을 받았더라도 그 금액이 실제 퇴직금에 미달하는 경우, 미정산 부분에 대해서는 합산 주장이 가능할 수 있습니다</blockquote>',
      },
      {
        title: '합산 여부 확인 방법과 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 이력, 퇴직금 지급 기록, 근로계약서 변경 이력을 통해 합산 여부를 판단할 수 있습니다.</strong></p>\n<ul>\n<li><strong>고용보험 피보험자격 이력 확인</strong> — 고용보험 피보험자격 취득·상실 이력을 조회하면 퇴사와 재입사 시점, 공백 기간을 정확히 파악할 수 있습니다</li>\n<li><strong>퇴직금 수령 여부 확인</strong> — 급여 계좌 입출금 내역에서 퇴직금 수령 기록을 확인합니다. 퇴직금 정산 내역서가 있다면 함께 보관합니다</li>\n<li><strong>내용증명 발송</strong> — 합산 근속기간에 기반한 퇴직금 차액을 산정하여 회사에 내용증명으로 청구합니다</li>\n<li><strong>노동위원회·법원 구제</strong> — 회사가 거부하면 고용노동부 진정 또는 민사소송을 통해 합산 여부와 퇴직금 차액을 다툴 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위촉계약자의 근로자성과 퇴직금 청구',
        summary:
          '대법원 2023다219752 사건(대법원, 2025.07.03 선고)에서 법원은 형식적으로 위촉계약을 체결하였더라도 실질적인 근로관계가 인정되면 근로자에 해당하며, 해당 기간에 대한 퇴직금을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '퇴사 후 재입사 과정에서 계약 형태가 변경되었더라도(정규직→위촉직→정규직 등) 실질적 근로관계가 계속되었다면 전체 기간에 대한 퇴직금을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '중간에 퇴직금을 받았으면 무조건 근속기간이 리셋되나요?',
        answer:
          '<strong>퇴직금을 완전히 정산받았다면 원칙적으로 리셋됩니다.</strong> 다만 퇴직금 지급이 회사 편의에 의한 형식적 정산이었거나, 실질적 근로관계 단절 없이 계속 근무했다면 합산을 주장할 수 있습니다. 퇴직금 정산 경위와 공백 기간의 실태가 중요합니다.',
      },
      {
        question: '같은 그룹사의 다른 법인으로 이동한 경우에도 합산되나요?',
        answer:
          '<strong>사업양도에 해당하거나 사용자의 지시에 의한 전출이면 합산 가능합니다.</strong> 그룹사 내 법인 이동이 사실상 인사이동에 해당하고, 근로관계가 실질적으로 계속되었다면 근속기간을 합산할 수 있습니다. 다만 별개 법인 간 자발적 이직이라면 합산이 어렵습니다.',
      },
      {
        question: '사업양도 시 근속기간은 어떻게 되나요?',
        answer:
          '<strong>사업양도 시 근로관계는 양수인에게 포괄 승계됩니다.</strong> 대법원 판례에 따르면 사업양도가 이루어지면 근로자의 근로관계는 별도 동의 없이도 양수 회사로 승계되며, 양도 전 근속기간도 합산됩니다. 다만 양도인과 양수인이 근로관계 배제 합의를 한 경우에는 다툼이 생길 수 있습니다.',
      },
      {
        question: '합산 분쟁 시 어떤 증거를 준비해야 하나요?',
        answer:
          '<strong>고용보험 이력, 근로계약서, 퇴직금 수령 내역, 업무 연속성 자료가 핵심입니다.</strong> 퇴사 전후 같은 업무를 수행했다는 증거(이메일, 업무일지, 조직도), 공백 기간의 짧음을 보여주는 자료, 퇴직금 미수령 또는 형식적 정산이었음을 보여주는 자료를 확보하세요.',
      },
    ],
    cta: {
      text: '재입사 퇴직금 합산 여부, AI가 분석해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 중간정산 안내', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '사업양도 퇴직금 승계', href: '/guide/retirement/retirement-business-transfer-responsibility' },
      { label: '합병·분할 시 퇴직금 승계', href: '/guide/retirement/retirement-company-merger-split-succession' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. wage / wage-complaint-retaliation-protection
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-complaint-retaliation-protection',
    keyword: '임금체불 신고 후 보복 불이익처분 금지 보호',
    questionKeyword: '임금체불 신고 후 회사가 보복하면 어떻게 대응하나요?',
    ctaKeyword: '임금체불 신고 보복 보호 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금체불 신고 후 보복 시 근로자 보호 제도 | 로앤가이드',
      description:
        '임금체불 신고 후 해고나 불이익을 당했다면 근로기준법 보복 금지 규정과 대응 절차를 지금 확인하세요',
    },
    intro:
      '<p>밀린 월급 3개월치를 고용노동부에 신고했더니, 다음 주에 갑자기 부서 이동 통보를 받았습니다. 동료들에게는 "저 사람이 신고해서 회사가 어렵다"는 이야기까지 퍼지고 있습니다. 업무에서 배제되고 야근 배정도 빠지면서 수입이 줄어들고 있는데, 이것이 보복인지, 보복이라면 어디에 어떻게 신고해야 하는지 모릅니다. 임금체불 신고 후 보복으로부터 보호받는 방법을 확인해보세요.</p>',
    sections: [
      {
        title: '불이익처분 금지 규정(근기법 제104조)',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제104조는 사업장 위반 사실을 신고한 근로자에 대한 불이익 처분을 명시적으로 금지하고 있습니다.</strong></p>\n<ul>\n<li><strong>보호 대상</strong> — 근로기준법 또는 이 법에 따른 대통령령을 위반한 사실을 관계 기관에 통보·신고한 근로자가 보호 대상입니다. 임금체불 신고, 근로감독 요청, 진정·고소 모두 포함됩니다</li>\n<li><strong>금지되는 행위</strong> — 해고, 전보, 징계, 그 밖의 불이익한 처분을 할 수 없습니다. "그 밖의 불이익"에는 업무 배제, 성과평가 불이익, 승진 누락, 따돌림 조장 등도 포함됩니다</li>\n<li><strong>위반 시 제재</strong> — 제104조 제2항 위반 시 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다(근기법 제110조). 형사처벌 대상인 만큼 강력한 보호 규정입니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 신고한 사실과 불이익 처분 사이에 시간적 근접성이 있으면 보복으로 추정됩니다</blockquote>',
      },
      {
        title: '보복 유형과 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">명시적 해고뿐 아니라 은근한 업무 배제, 평가 불이익, 분위기 조성도 보복에 해당할 수 있습니다.</strong></p>\n<ol>\n<li><strong>명시적 보복</strong> — 신고 직후 해고, 권고사직 요구, 징계처분 등 직접적인 불이익입니다. 신고와 시간적 근접성이 분명하면 보복 추정이 강합니다</li>\n<li><strong>간접적 보복</strong> — 핵심 업무 배제, 한직 발령, 근무 장소 변경, 야근·특근 배정 제외 등으로 실질적 근로조건을 악화시키는 경우입니다</li>\n<li><strong>분위기 보복</strong> — 동료에게 신고 사실을 유포하여 따돌림을 유도하거나, 회의에서 공개적으로 망신을 주는 행위도 불이익 처분에 해당합니다</li>\n<li><strong>판단 기준</strong> — 법원은 (1) 신고와 불이익 사이의 시간적 근접성, (2) 신고 전후 처우 변화, (3) 사용자의 보복 의사 표현, (4) 동종 사안에서의 통상적 처우와의 비교를 종합하여 판단합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 상황이 보복에 해당하는지 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보복 발생 시 대응 3단계',
        content:
          '<p><strong style="color:#1e3a5f">증거를 확보하고, 추가 신고를 하고, 원상회복과 손해배상을 청구하는 3단계로 대응합니다.</strong></p>\n<ul>\n<li><strong>1단계: 증거 확보</strong> — 보복 행위의 증거를 즉시 수집합니다. 인사 발령 통보서, 업무 변경 메일, 사내 메신저 대화, 동료 진술서, 성과평가 기록 등을 확보하세요. 신고 전후의 처우 변화를 비교할 수 있는 자료가 핵심입니다</li>\n<li><strong>2단계: 추가 신고</strong> — 고용노동부에 근기법 제104조 위반으로 추가 진정을 제기합니다. 기존 임금체불 사건 담당 근로감독관에게 보복 사실을 함께 통보하면 더 효과적입니다</li>\n<li><strong>3단계: 구제 청구</strong> — 부당해고·부당전보에 해당하면 노동위원회에 구제 신청을 하고, 정신적 피해에 대해서는 민사상 손해배상도 청구할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 보복이 두려워 사직서를 쓰면 안 됩니다. 사직서 제출 시 부당해고 구제 신청이 어려워집니다</blockquote>',
      },
      {
        title: '형사처벌과 민사구제',
        content:
          '<p><strong style="color:#1e3a5f">보복 행위자는 형사처벌 대상이며, 근로자는 민사상 손해배상과 원직복직을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>형사 고소</strong> — 근기법 제104조 제2항 위반으로 사용자를 형사 고소할 수 있습니다. 2년 이하 징역 또는 2천만 원 이하 벌금이 법정형입니다</li>\n<li><strong>부당해고 구제</strong> — 보복 해고의 경우 노동위원회에 부당해고 구제 신청이 가능합니다. 해고일로부터 3개월 이내에 신청해야 합니다</li>\n<li><strong>민사 손해배상</strong> — 보복으로 인한 임금 손실, 정신적 피해(위자료)에 대해 민사소송을 제기할 수 있습니다</li>\n<li><strong>공익신고자 보호</strong> — 임금체불은 공익침해행위에도 해당하므로, 공익신고자 보호법에 따른 보호(신변 보호, 보호조치 신청 등)도 병행 가능합니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무자 최저임금과 근로자 권리 보호',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무자의 최저임금 적용 방법을 판시하면서, 근로자가 법적으로 보장된 최저임금 권리를 주장하는 것은 정당한 권리행사라는 점을 확인했습니다.',
        takeaway:
          '임금 관련 권리를 주장하는 것은 정당한 행위이며, 이를 이유로 불이익을 가하는 것은 위법합니다. 신고 전에 자신의 청구가 정당한 근거에 기반하는지 확인하면 보복 대응에서도 유리합니다.',
      },
    ],
    faq: [
      {
        question: '해고가 아닌 은근한 업무 배제나 압박도 보복에 해당하나요?',
        answer:
          '<strong>명시적 해고가 아니더라도 실질적으로 불이익한 처분이면 보복에 해당합니다.</strong> 핵심 업무 배제, 한직 발령, 승진 누락, 성과평가 불이익 등도 근기법 제104조가 금지하는 "그 밖의 불이익한 처분"에 포함됩니다. 신고 전후의 처우 변화를 비교할 수 있는 자료를 반드시 확보하세요.',
      },
      {
        question: '신고한 당사자가 아닌 동료에게 불이익을 주는 것도 위반인가요?',
        answer:
          '<strong>신고자에 대한 간접적 보복으로 볼 수 있습니다.</strong> 다만 근기법 제104조는 직접 신고한 근로자를 보호하는 규정이므로, 동료에 대한 불이익은 별도로 직장 내 괴롭힘 금지(근기법 제76조의2) 위반 여부를 검토해야 합니다.',
      },
      {
        question: '신고 철회를 요구하는 것도 불법인가요?',
        answer:
          '<strong>신고 철회를 강요하거나 철회 조건으로 불이익을 암시하는 것은 위법합니다.</strong> 특히 "신고를 취하하지 않으면 해고하겠다"는 식의 발언은 근기법 제104조 위반에 해당할 수 있으며, 강요죄(형법 제324조)로도 문제될 수 있습니다.',
      },
      {
        question: '보복이 있었다는 입증 책임은 누구에게 있나요?',
        answer:
          '<strong>원칙적으로 보복을 주장하는 근로자에게 입증 책임이 있습니다.</strong> 다만 신고와 불이익 사이의 시간적 근접성, 신고 전후 처우 변화가 입증되면 사용자 측에서 정당한 사유를 소명해야 하는 부담이 전환됩니다. 평소 인사기록, 성과평가 자료를 확보해두는 것이 유리합니다.',
      },
      {
        question: '보복이 두려워서 신고를 못 하고 있는데 어떻게 하나요?',
        answer:
          '<strong>익명 신고 제도를 활용하거나 퇴직 후 신고하는 방법이 있습니다.</strong> 고용노동부 온라인 신고 시 익명 접수가 가능하고, 공익신고자 보호법에 따른 신변 보호 신청도 할 수 있습니다. 또한 임금채권의 소멸시효는 3년이므로 퇴직 후에도 신고가 가능합니다.',
      },
    ],
    cta: {
      text: '신고 후 보복 대응법, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 전체 절차', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '임금체불 신고 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '사용자 형사처벌 안내', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 증거 확보법', href: '/guide/wage/wage-complaint-kakao-bank-evidence-enough' },
      { label: '신고 후 처리 절차', href: '/guide/wage/wage-complaint-after-filing-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. wage / wage-short-term-daily-unpaid-claim
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-short-term-daily-unpaid-claim',
    keyword: '단기 알바 일용직 임금 미지급 청구 절차',
    questionKeyword: '단기 알바나 일용직도 밀린 임금을 청구할 수 있나요?',
    ctaKeyword: '단기 알바 임금 미지급 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단기 알바·일용직 임금 미지급 청구 4단계 | 로앤가이드',
      description:
        '단기 알바나 일용직으로 일했는데 임금을 못 받았다면 계약서 없이도 가능한 청구 절차를 지금 확인하세요',
    },
    intro:
      '<p>이사 도우미로 3일간 일했는데 사장님이 "다음에 주겠다"고 한 뒤 연락이 안 됩니다. 근로계약서도 작성하지 않았고, 일한 기록이라고는 카카오톡 대화뿐입니다. 금액이 30만 원밖에 안 되는데 신고해봤자 의미가 있을지, 어디에 어떻게 청구해야 하는지 모릅니다. 단기 근로자도 임금을 받을 수 있는 청구 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '단기 근로자도 임금 청구가 가능한 이유',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법은 근로 기간이나 근로계약서 작성 여부와 관계없이 실제로 근로를 제공한 모든 근로자의 임금 청구권을 보장합니다.</strong></p>\n<ul>\n<li><strong>근로자의 범위</strong> — 근로기준법 제2조에 따라 직업의 종류와 관계없이 임금을 목적으로 사업이나 사업장에서 근로를 제공하는 자는 모두 근로자입니다. 하루만 일했어도 해당됩니다</li>\n<li><strong>계약서 불요</strong> — 근로계약은 구두로도 성립합니다. 근로계약서 미작성은 사용자의 의무 위반(근기법 제17조, 500만 원 이하 과태료)이지 근로자의 권리를 제한하는 사유가 아닙니다</li>\n<li><strong>임금 지급 원칙</strong> — 임금은 직접, 통화로, 전액을, 매월 1회 이상 일정 기일에 지급해야 합니다(근기법 제43조). 이를 위반하면 3년 이하 징역 또는 3천만 원 이하 벌금에 처합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: "금액이 적으니까 신고해도 소용없다"는 잘못된 생각입니다. 고용노동부는 금액과 관계없이 모든 임금체불 진정을 접수합니다</blockquote>',
      },
      {
        title: '증거 확보 방법 (근로계약서 없어도)',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서가 없어도 카카오톡 대화, 계좌이체 기록, 사진, 동료 진술 등으로 근로 사실을 입증할 수 있습니다.</strong></p>\n<ol>\n<li><strong>카카오톡·문자 대화</strong> — 출근 시간 약속, 업무 지시, 급여 약속 관련 대화 내용을 캡처합니다. 상대방이 채팅방을 나가기 전에 반드시 저장하세요</li>\n<li><strong>계좌이체·현금 기록</strong> — 이전에 받은 적이 있다면 급여 입금 내역을 확보합니다. 교통비, 식비 등 관련 지출 기록도 근무 사실을 뒷받침합니다</li>\n<li><strong>사진·영상</strong> — 근무 현장 사진, 작업 결과물 사진, 출퇴근 시 촬영한 사진이 유용합니다. 위치 정보와 시간이 포함된 사진이 증거력이 높습니다</li>\n<li><strong>동료·목격자 진술</strong> — 함께 일한 동료나 현장을 목격한 사람의 진술서를 확보합니다. 연락처와 함께 "○○ 날 ○○에서 함께 일했다"는 내용을 기재합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 증거 상태로 청구 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고용노동부 진정·고소 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부에 임금체불 진정을 제기하면 근로감독관이 조사하여 사업주에게 시정 명령을 내립니다.</strong></p>\n<ul>\n<li><strong>진정 접수</strong> — 고용노동부 홈페이지(온라인) 또는 관할 고용노동청 방문으로 접수합니다. 사업주 정보, 근무 기간, 미지급 금액, 증거 자료를 첨부합니다</li>\n<li><strong>조사 진행</strong> — 근로감독관이 사업주에게 출석 요구 또는 현장 조사를 합니다. 보통 접수 후 2~4주 내에 조사가 시작됩니다</li>\n<li><strong>시정 명령</strong> — 체불이 확인되면 14일 이내 시정을 명령합니다. 사업주가 불응하면 검찰에 송치됩니다</li>\n<li><strong>형사 고소 병행</strong> — 시정 명령에도 지급하지 않으면 근기법 제109조 위반으로 형사처벌(3년 이하 징역 또는 3천만 원 이하 벌금)이 가능합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 임금 청구권의 소멸시효는 3년입니다. 시효가 지나면 신고를 해도 법적 강제가 어렵습니다</blockquote>',
      },
      {
        title: '소액재판과 체당금제도',
        content:
          '<p><strong style="color:#1e3a5f">3,000만 원 이하 임금체불은 소액재판으로 빠르게 해결할 수 있고, 사업주 무자력 시 체당금으로 보전받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>소액재판(이행권고)</strong> — 청구금액 3,000만 원 이하는 소액사건심판법에 따라 간이절차로 진행됩니다. 1회 변론으로 판결이 나오는 경우가 많아 2~3개월 내에 결과를 받을 수 있습니다</li>\n<li><strong>지급명령 신청</strong> — 금액이 명확하고 증거가 충분하면 지급명령 신청이 더 빠릅니다. 상대방이 이의하지 않으면 확정판결과 같은 효력이 생깁니다</li>\n<li><strong>간이대지급금(소액체당금)</strong> — 사업주가 도산하지 않았더라도 재판 확정 후 지급 불능인 경우, 고용노동부에 간이대지급금을 신청할 수 있습니다. 최대 1,000만 원까지 정부가 대신 지급합니다</li>\n<li><strong>체당금제도</strong> — 사업주가 도산(파산, 회생 등)한 경우 최종 3개월분 임금과 최종 3년분 퇴직금을 근로복지공단에서 대신 지급받을 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 최저임금법 위반',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금으로 약정하더라도 실제 근로시간을 기준으로 최저임금 이상을 지급해야 하며, 최저임금에 미달하는 부분은 무효라고 판시했습니다.',
        takeaway:
          '구두로 "하루 ○○만 원"으로 약정했더라도 실제 근로시간 대비 최저임금에 미달하면 차액을 청구할 수 있습니다. 일한 시간을 기록해두면 최저임금 위반 여부 판단에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서 없이 일해도 임금 청구가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 근로계약은 구두 합의만으로도 성립하며, 계약서 미작성은 사용자의 의무 위반입니다. 카카오톡 대화, 계좌이체 기록, 사진, 동료 진술 등으로 근로 사실을 입증하면 됩니다.',
      },
      {
        question: '하루만 일해도 임금을 청구할 수 있나요?',
        answer:
          '<strong>물론 가능합니다.</strong> 근로기준법은 근로 기간에 제한을 두고 있지 않습니다. 1시간을 일했든 1일을 일했든 합의한 임금(또는 최저임금 이상)을 지급받을 권리가 있습니다.',
      },
      {
        question: '금액이 소액이면 고용노동부에서 신고를 안 받아주나요?',
        answer:
          '<strong>금액과 관계없이 모든 임금체불 진정을 접수합니다.</strong> 고용노동부는 체불 금액의 다소를 기준으로 진정 접수를 거부할 수 없습니다. 10만 원이든 1억 원이든 동일한 절차가 적용됩니다.',
      },
      {
        question: '체당금은 최대 얼마까지 받을 수 있나요?',
        answer:
          '<strong>간이대지급금(소액체당금)은 최대 1,000만 원, 일반 체당금은 최종 3개월분 임금과 최종 3년분 퇴직금입니다.</strong> 다만 연령별 상한액이 있으며, 체당금은 사업주 도산 또는 지급 불능이 확인되어야 신청 가능합니다. 근로복지공단에 직접 신청합니다.',
      },
    ],
    cta: {
      text: '단기 알바 임금 청구 방법, AI가 안내해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 전체 절차', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '5인 미만 사업장 임금 권리', href: '/guide/wage/wage-under5-employees-rights' },
      { label: '외국인 근로자 임금체불', href: '/guide/wage/wage-unpaid-foreign-worker' },
      { label: '인턴·수습 임금 미지급', href: '/guide/wage/wage-unpaid-intern-trainee' },
      { label: '임금체불 증거 확보법', href: '/guide/wage/wage-complaint-kakao-bank-evidence-enough' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. dismissal / dismissal-nonface-notification-validity
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-nonface-notification-validity',
    keyword: '카톡 이메일 해고 통보 서면 요건 효력',
    questionKeyword: '카카오톡이나 이메일로 해고 통보를 받았는데 유효한가요?',
    ctaKeyword: '카톡 해고 통보 효력 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '카톡·이메일 해고 통보 법적 효력 판단 기준 | 로앤가이드',
      description:
        '카톡이나 이메일로 해고를 통보받았다면 서면통지 요건 충족 여부와 대응 방법을 지금 확인하세요',
    },
    intro:
      '<p>어느 날 갑자기 팀장에게서 카카오톡으로 "내일부터 안 나와도 됩니다"라는 메시지를 받았습니다. 해고 사유도, 해고 시기도 구체적으로 적혀 있지 않고, 종이 문서는 받은 적이 없습니다. 이것이 법적으로 유효한 해고인지, 서면통지 요건을 충족하지 못한 부당해고인지 판단이 안 됩니다. 카톡·이메일 해고 통보의 법적 효력을 확인해보세요.</p>',
    sections: [
      {
        title: '근기법 제27조 서면통지 요건',
        content:
          '<p><strong style="color:#1e3a5f">사용자가 근로자를 해고하려면 해고 사유와 해고 시기를 서면으로 통지해야 하며, 이를 위반한 해고는 무효입니다.</strong></p>\n<ul>\n<li><strong>서면통지의 필수 기재사항</strong> — 근로기준법 제27조에 따라 (1) 해고 사유와 (2) 해고 시기가 반드시 기재되어야 합니다. 두 가지 중 하나라도 빠지면 서면통지 요건을 충족하지 못합니다</li>\n<li><strong>서면의 의미</strong> — 대법원은 "서면"을 근로자가 해고 사유를 명확하게 인식하고 이에 적절히 대응할 수 있도록 하는 문서로 해석합니다. 형식보다 내용의 특정성이 중요합니다</li>\n<li><strong>위반 효과</strong> — 서면통지 요건을 갖추지 못한 해고는 해고 사유의 정당성 여부와 관계없이 그 자체로 무효입니다. 즉 정당한 사유가 있더라도 서면통지를 하지 않았으면 부당해고입니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 서면통지는 절차적 요건이므로, 서면 없는 해고는 실질적 사유가 있어도 무효입니다</blockquote>',
      },
      {
        title: '카톡·이메일이 서면에 해당하는지',
        content:
          '<p><strong style="color:#1e3a5f">카카오톡이나 이메일이 "서면"에 해당하는지는 해고 사유와 시기가 구체적으로 특정되어 있는지에 따라 판단됩니다.</strong></p>\n<ol>\n<li><strong>전자문서의 서면 인정</strong> — 전자문서법에 따라 전자문서도 서면으로 인정될 수 있습니다. 다만 근기법 제27조의 서면통지는 근로자 보호 목적이 강하므로, 단순 메시지만으로는 불충분하다는 것이 다수 견해입니다</li>\n<li><strong>인정될 수 있는 경우</strong> — 이메일에 해고 사유(구체적 징계 사유, 경영상 이유 등)와 해고 시기(최종 근무일)가 명확하게 기재되어 있고, 인사권자가 공식적으로 발송한 경우에는 서면으로 인정될 여지가 있습니다</li>\n<li><strong>인정되기 어려운 경우</strong> — "내일부터 안 나와도 됩니다", "그만두세요"처럼 해고 사유와 시기가 특정되지 않은 단순 메시지는 서면통지로 보기 어렵습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 받으신 통보가 서면통지 요건을 충족하는지 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해고 사유와 시기 미기재 시 효과',
        content:
          '<p><strong style="color:#1e3a5f">해고 사유나 시기가 구체적으로 기재되지 않은 통보는 서면통지 요건 미충족으로 해고 자체가 무효입니다.</strong></p>\n<ul>\n<li><strong>해고 사유 미기재</strong> — "근무 태도 불량"처럼 추상적인 기재는 불충분합니다. 구체적으로 어떤 행위가 어느 규정을 위반했는지 특정되어야 합니다</li>\n<li><strong>해고 시기 미기재</strong> — "조만간 나가라"처럼 시기가 불분명한 통보는 서면통지로 인정되지 않습니다. 최종 근무일이 명확하게 적혀 있어야 합니다</li>\n<li><strong>사후 보완 불가</strong> — 대법원 판례에 따르면 해고 통보 후에 사유서를 추가로 교부하는 것은 서면통지의 사후 보완으로 허용되지 않습니다. 해고 통보 시점에 요건을 갖추어야 합니다</li>\n<li><strong>근로자의 인식 가능성</strong> — 다만 해고 전에 근로자가 해고 사유를 충분히 인식하고 있었고, 이에 대한 소명 기회를 가졌다면 통지서의 기재가 다소 간략하더라도 유효하다고 본 판례도 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 카톡 해고 통보를 받았다면 절대 "알겠습니다"라고 답하거나 사직서를 쓰지 마세요. 해고에 동의한 것으로 해석될 수 있습니다</blockquote>',
      },
      {
        title: '부당해고 구제 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">서면통지 요건을 갖추지 못한 해고는 부당해고이며, 해고일로부터 3개월 내에 노동위원회에 구제 신청을 해야 합니다.</strong></p>\n<ul>\n<li><strong>증거 보전</strong> — 카톡 메시지, 이메일 전문을 캡처·저장합니다. 대화 맥락을 보여주기 위해 전후 메시지도 함께 보관합니다. 메시지 삭제에 대비하여 복수의 매체에 저장하세요</li>\n<li><strong>노동위원회 구제 신청</strong> — 해고일로부터 3개월 내에 관할 지방노동위원회에 부당해고 구제 신청서를 제출합니다. 서면통지 미비를 주된 주장으로 내세우면 해고 사유의 정당성과 무관하게 구제될 수 있습니다</li>\n<li><strong>금전보상 선택</strong> — 원직복직 대신 금전보상을 선택할 수 있습니다. 노동위원회가 해고 기간 동안의 임금 상당액 이상을 금전보상으로 결정합니다</li>\n<li><strong>민사소송 병행</strong> — 해고 무효 확인 소송과 밀린 임금(해고 기간 임금) 청구를 민사법원에 별도로 제기할 수도 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 제출 후 부당해고 구제이익 소멸',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 부당해고를 주장하는 근로자가 사직서를 제출한 경우, 이미 근로관계가 종료되어 부당해고 구제 신청의 이익이 소멸한다고 판시했습니다.',
        takeaway:
          '카톡이나 이메일로 해고 통보를 받았더라도 절대 사직서를 쓰면 안 됩니다. 사직서를 제출하면 부당해고 구제 신청 자체가 불가능해질 수 있습니다. 해고 효력을 먼저 다투어야 합니다.',
      },
    ],
    faq: [
      {
        question: '구두로만 해고 통보를 받았는데 유효한가요?',
        answer:
          '<strong>구두 해고는 서면통지 요건을 갖추지 못했으므로 무효입니다.</strong> 근기법 제27조는 해고 사유와 시기를 반드시 서면으로 통지하도록 규정하고 있으며, 이를 위반한 해고는 정당한 사유가 있더라도 효력이 없습니다.',
      },
      {
        question: '카톡에 "내일부터 안 나와도 된다"고 했다면 해고인가요?',
        answer:
          '<strong>맥락에 따라 해고로 볼 수 있습니다.</strong> 사용자가 근로관계를 일방적으로 종료하려는 의사 표시라면 해고에 해당합니다. 다만 서면통지 요건(해고 사유·시기 기재)을 갖추지 못했으므로 부당해고로 다툴 수 있습니다.',
      },
      {
        question: '회사가 사직서를 쓰라고 하는데 어떻게 해야 하나요?',
        answer:
          '<strong>절대 사직서를 쓰지 마세요.</strong> 사직서를 제출하면 자발적 퇴직으로 처리되어 부당해고 구제 신청이 불가능해질 수 있습니다. "해고라면 서면 해고 통지서를 달라"고 요청하고, 해당 대화를 녹음하거나 문자로 남기세요.',
      },
      {
        question: '해고 무효 확인 소송은 어떻게 진행되나요?',
        answer:
          '<strong>민사법원에 해고 무효 확인 소송을 제기하여 해고의 효력을 다툴 수 있습니다.</strong> 노동위원회 구제 신청(3개월 기한)과 별도로 민사소송(해고 무효 확인 + 임금 청구)을 제기할 수 있으며, 병행도 가능합니다. 소송 기간 동안의 임금도 함께 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '카톡 해고 통보 효력, AI가 분석해드립니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차 총정리', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 사유 서면 요청 템플릿', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '구두 해고 대응법', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '해고예고수당 안내', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 증거 수집법', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. dismissal / dismissal-company-merger-position-loss
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-company-merger-position-loss',
    keyword: '회사 합병 분할 직위 소멸 해고 정당성 근로관계 승계',
    questionKeyword: '회사 합병으로 직위가 없어졌는데 해고가 정당한가요?',
    ctaKeyword: '합병 후 해고 정당성 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '회사 합병·분할 후 해고 정당성 판단 기준 | 로앤가이드',
      description:
        '회사 합병이나 분할로 직위가 사라져 해고됐다면 근로관계 승계 원칙과 구제 방법을 지금 확인하세요',
    },
    intro:
      '<p>근무하던 회사가 대기업에 합병되면서 기존 팀이 해체되었습니다. 회사 측은 "해당 직위가 더 이상 존재하지 않으므로 정리해고 절차를 진행한다"고 통보했습니다. 합병 과정에서 근로관계가 당연히 승계된다고 들었는데, 직위 소멸을 이유로 해고하는 것이 정당한 것인지 판단이 안 됩니다. 합병·분할 시 근로관계 승계와 해고 정당성 기준을 확인해보세요.</p>',
    sections: [
      {
        title: '합병·분할 시 근로관계 자동 승계 원칙',
        content:
          '<p><strong style="color:#1e3a5f">상법상 합병·분할 시 소멸회사의 근로관계는 존속회사(또는 신설회사)에 포괄적으로 승계됩니다.</strong></p>\n<ul>\n<li><strong>포괄승계 원칙</strong> — 상법 제235조(합병의 효과)에 따라 합병 시 소멸회사의 권리·의무가 존속회사에 포괄적으로 승계됩니다. 근로관계도 당연히 포함되어, 근로자의 동의 없이 자동 승계됩니다</li>\n<li><strong>분할 시 승계</strong> — 회사 분할의 경우에도 분할계획서에 의해 특정된 사업 부문의 근로관계는 신설회사 또는 존속회사에 승계됩니다</li>\n<li><strong>영업양도 시 승계</strong> — 법률상 합병이 아닌 영업양도의 경우에도 대법원 판례에 따라 양도 부문의 근로관계는 별도 특약이 없는 한 양수인에게 승계됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 합병·분할은 근로관계 종료 사유가 아닙니다. 근로관계는 유지된 채 사용자만 변경됩니다</blockquote>',
      },
      {
        title: '직위 소멸을 이유로 한 해고의 정당성',
        content:
          '<p><strong style="color:#1e3a5f">합병 후 직위가 소멸되었더라도 바로 해고할 수 있는 것이 아니라, 정리해고의 4대 요건을 갖추어야 합니다.</strong></p>\n<ol>\n<li><strong>긴박한 경영상 필요</strong> — 인력 감축이 불가피할 정도로 긴박한 경영상의 이유가 있어야 합니다. 단순히 조직 개편으로 직위가 없어졌다는 것만으로는 부족합니다</li>\n<li><strong>해고 회피 노력</strong> — 전환 배치, 재교육, 근로시간 단축, 일시 휴직 등 해고를 피하기 위한 상당한 노력을 다해야 합니다. 합병 후 유사 직무가 있는데 배치하지 않았다면 요건 미충족입니다</li>\n<li><strong>합리적 해고 기준</strong> — 해고 대상자를 선정하는 기준이 합리적이고 공정해야 합니다. 합병 전 소멸회사 출신만을 대상으로 하면 합리성이 의심됩니다</li>\n<li><strong>근로자대표와 성실 협의</strong> — 해고 계획을 50일 전까지 근로자대표에게 통보하고 성실하게 협의해야 합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 합병·해고 상황에서 정당성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합병 전후 근로조건 변경 제한',
        content:
          '<p><strong style="color:#1e3a5f">합병 후에도 기존 근로조건은 원칙적으로 유지되며, 불이익한 변경은 근로자 동의가 필요합니다.</strong></p>\n<ul>\n<li><strong>근로조건 유지 원칙</strong> — 승계된 근로관계의 내용(임금, 근로시간, 직급 등)은 원칙적으로 합병 전과 동일하게 유지되어야 합니다</li>\n<li><strong>취업규칙 변경</strong> — 합병 후 통합 취업규칙을 적용하면서 기존 근로자에게 불이익한 내용이 포함된 경우, 근로자 과반수의 동의가 필요합니다(근기법 제94조)</li>\n<li><strong>임금 체계 통합</strong> — 합병 후 임금 체계를 통합하면서 기존 근로자의 임금이 감소하는 경우, 경과 조치(보전 수당 등) 없는 즉시 변경은 불이익 변경에 해당합니다</li>\n<li><strong>직급·직위 변경</strong> — 합병 후 직급 체계를 통합하면서 기존 직위보다 낮은 직급을 부여하는 것은 인사권 남용으로 부당전보에 해당할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 합병 계약서에 "근로조건을 존속회사 기준으로 통일한다"는 조항이 있어도 근로자 개별 동의 없이는 불이익 변경이 불가합니다</blockquote>',
      },
      {
        title: '부당해고 구제와 원직복직',
        content:
          '<p><strong style="color:#1e3a5f">합병 후 부당해고를 당했다면 존속회사(합병 후 회사)를 상대로 노동위원회 구제 신청 또는 법원 소송을 제기합니다.</strong></p>\n<ul>\n<li><strong>구제 신청 대상</strong> — 소멸회사가 아닌 존속회사(합병 후 회사)를 상대방으로 하여 구제 신청을 합니다. 근로관계가 승계되었으므로 존속회사가 사용자입니다</li>\n<li><strong>구제 신청 기한</strong> — 해고일로부터 3개월 이내에 관할 지방노동위원회에 부당해고 구제 신청을 제출합니다</li>\n<li><strong>원직복직</strong> — 구제 명령이 인정되면 원직복직과 해고 기간 동안의 임금을 지급받습니다. 기존 직위가 소멸된 경우 동등한 수준의 직위에 복직됩니다</li>\n<li><strong>금전보상</strong> — 원직복직이 어려운 경우 금전보상을 선택할 수 있습니다. 해고 기간 임금 상당액 이상의 금전보상이 결정됩니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 근로관계 승계와 근로자성',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 협동조합 조합원이라 하더라도 실질적 근로관계가 인정되면 근로자에 해당하며, 영업양도 시 근로관계는 양수인에게 승계된다고 판시했습니다.',
        takeaway:
          '합병·영업양도 시 형식적인 고용 형태(조합원, 위촉직 등)와 관계없이 실질적 근로관계가 있으면 승계 대상입니다. 합병을 이유로 한 해고 시 승계 원칙 위반 여부를 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '합병 후 급여가 줄어들면 어떻게 하나요?',
        answer:
          '<strong>근로자 동의 없는 임금 감소는 불이익 변경에 해당합니다.</strong> 합병 후 임금 체계 통합 과정에서 기존 임금이 줄어든다면 근로자 과반수의 동의가 필요합니다. 동의 없이 일방적으로 감액되었다면 임금 차액을 청구할 수 있습니다.',
      },
      {
        question: '분할 시 어느 회사로 소속되나요?',
        answer:
          '<strong>분할계획서에 따라 해당 사업 부문이 이전되는 회사로 소속됩니다.</strong> 근로자가 소속된 사업 부문이 신설회사로 분할되면 해당 신설회사의 근로자가 됩니다. 분할계획서에 근로관계 배제 조항이 있어도 해당 근로자의 동의가 없으면 효력이 없습니다.',
      },
      {
        question: '합병을 거부할 수 있나요?',
        answer:
          '<strong>합병 자체를 근로자가 거부할 수는 없습니다.</strong> 합병은 주주총회 결의로 결정되는 사항이며, 근로자에게 거부권은 없습니다. 다만 합병 후 근로조건의 불이익 변경에 대해서는 동의를 거부할 수 있고, 부당한 처우에 대해서는 구제를 신청할 수 있습니다.',
      },
      {
        question: '합병 후 정리해고를 할 수 있나요?',
        answer:
          '<strong>정리해고 4대 요건을 충족하면 가능합니다.</strong> 다만 합병 직후 인력 감축은 "긴박한 경영상 필요" 요건을 충족하기 어렵습니다. 특히 합병으로 규모가 커진 상황에서 인력 감축의 긴박성을 인정받기가 쉽지 않으며, 소멸회사 출신만을 해고 대상으로 삼는 것은 합리성이 부정될 수 있습니다.',
      },
    ],
    cta: {
      text: '합병 후 해고 정당성, AI가 분석해드립니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차 총정리', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '정리해고 부당 기준 안내', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '부당해고 증거 수집법', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '부당해고 금전보상 안내', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
      { label: '전보·좌천 대응법', href: '/guide/dismissal/dismissal-transfer-demotion-constructive' },
    ],
  },
];
