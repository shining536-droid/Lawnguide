import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch30: 퇴직금 5개 + 임금체불 5개
// ───────────────────────────────────────────────────────────────────────────────
// 1. retirement-irp-transfer-requirement — IRP 의무이전 절차와 예외 (자격확인형)
//    "이 페이지는 퇴직금을 수령하는 근로자의 IRP 의무이전 조건과 예외 상황에서 즉시 수령 방법을 돕는 페이지다."
// 2. retirement-temp-agency-worker-claim — 파견근로자 퇴직금 청구 (비교형)
//    "이 페이지는 파견근로자가 파견업체와 사용업체 중 누구에게 퇴직금을 청구할지 판단을 돕는 페이지다."
// 3. retirement-resignation-timing-impact — 퇴직시기 선택에 따른 퇴직금 차이 (수치기한형)
//    "이 페이지는 퇴직 시기를 고민하는 근로자가 시기별 퇴직금 차이를 이해하고 유리한 퇴직일을 선택하도록 돕는 페이지다."
// 4. retirement-no-contract-proof-method — 근로계약서 없을 때 퇴직금 증명 방법 (체크리스트형)
//    "이 페이지는 근로계약서 없이 일한 근로자가 퇴직금을 증명할 수 있는 증거를 확보하도록 돕는 페이지다."
// 5. retirement-stock-option-included — 스톡옵션·RSU 퇴직금 포함 여부 (비교형)
//    "이 페이지는 스타트업·IT기업 근로자가 스톡옵션과 RSU의 퇴직금 산입 여부를 확인하도록 돕는 페이지다."
// 6. unpaid-wage-labor-inspector-timeline — 고용노동부 진정 처리 기간과 촉진 방법 (절차타임라인형)
//    "이 페이지는 노동부에 진정을 제기한 근로자가 처리 지연 시 대응 방법을 파악하도록 돕는 페이지다."
// 7. unpaid-wage-collective-complaint — 집단 임금체불 공동진정 절차 (절차타임라인형)
//    "이 페이지는 동일 사업장의 여러 근로자가 함께 임금체불 진정을 제기하는 절차를 돕는 페이지다."
// 8. unpaid-wage-delay-interest-calculation — 지연이자 14.6% 산정법과 청구 (수치기한형)
//    "이 페이지는 임금을 제때 못 받은 근로자가 지연이자를 정확히 계산하고 청구하도록 돕는 페이지다."
// 9. unpaid-wage-criminal-complaint-procedure — 임금체불 형사고소 절차와 실효성 (절차타임라인형)
//    "이 페이지는 임금체불 피해 근로자가 형사고소를 통해 실질적 압박을 가하는 방법을 돕는 페이지다."
// 10. unpaid-wage-guarantee-fund-application — 체당금(임금채권보장기금) 신청 자격과 한도 (자격확인형)
//     "이 페이지는 사업주 파산·폐업으로 임금을 못 받은 근로자가 체당금을 신청하는 방법을 돕는 페이지다."
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch30RetirementWage: SpokePage[] = [
  // ── 퇴직금 1. IRP 의무이전 절차와 예외 ──
  {
    domain: 'retirement',
    slug: 'retirement-irp-transfer-requirement',
    keyword: '퇴직금 IRP 의무이전',
    questionKeyword: '퇴직금을 IRP로 반드시 이전해야 하나요?',
    ctaKeyword: '퇴직금 IRP 이전 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 IRP 의무이전 조건과 예외 4가지 | 로앤가이드',
      description:
        '퇴직금이 IRP로 강제 이전된다는데 바로 받을 수 없는지 걱정된다면, 예외 조건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직을 앞두고 인사팀에서 "퇴직금은 IRP 계좌로만 이전됩니다"라고 안내받았습니다. 당장 생활비가 필요한데 연금 계좌에 묶여야 하는지 막막합니다. 근로자퇴직급여보장법에 따르면 55세 미만 퇴직자는 원칙적으로 IRP로 이전해야 하지만, 일정 조건에서는 즉시 수령이 가능합니다.</p>',
    sections: [
      {
        title: 'IRP 의무이전이 필요한 경우',
        content:
          '<p><strong style="color:#1e3a5f">55세 미만 퇴직자는 퇴직금을 IRP 계좌로 의무 이전해야 합니다.</strong></p>\n<p>2022년 4월 14일부터 퇴직급여를 받는 55세 미만 근로자는 퇴직금을 IRP(개인형 퇴직연금) 계좌로 이전해야 합니다. 이는 노후소득 보장을 위한 제도입니다.</p>\n<ul>\n<li><strong>DB형(확정급여형) 퇴직연금</strong> — 퇴직 시 회사가 IRP 계좌로 이전합니다.</li>\n<li><strong>DC형(확정기여형) 퇴직연금</strong> — 기존 DC 계좌의 적립금을 IRP로 이전합니다.</li>\n<li><strong>퇴직금 제도(퇴직일시금)</strong> — 회사가 IRP 계좌로 입금합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: IRP로 이전된 퇴직금은 바로 인출할 수 있습니다. 다만 퇴직소득세가 즉시 부과되므로, 연금 수령 시보다 세금이 많아질 수 있습니다.</blockquote>',
      },
      {
        title: 'IRP 이전 없이 즉시 수령 가능한 예외 4가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 경우에는 IRP 이전 없이 퇴직금을 바로 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>55세 이상 퇴직자</strong> — 만 55세 이상이면 IRP 이전 의무가 없습니다. 일시금으로 바로 수령 가능합니다.</li>\n<li><strong>퇴직금 300만원 이하</strong> — 퇴직급여 총액이 300만원 이하이면 즉시 수령할 수 있습니다.</li>\n<li><strong>사망 퇴직</strong> — 근로자 사망으로 퇴직하면 유족이 일시금으로 받습니다.</li>\n<li><strong>해외 이주</strong> — 국외로 영구 이주하는 경우 IRP 이전 없이 수령 가능합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>IRP 이전 의무 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">나이, 퇴직금 액수, 퇴직 사유를 입력하면 IRP 이전 필요 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'IRP 이전 후 인출 절차',
        content:
          '<p><strong style="color:#1e3a5f">IRP에 입금된 퇴직금은 일시금 인출이 가능하지만, 퇴직소득세가 부과됩니다.</strong></p>\n<ul>\n<li><strong>즉시 인출</strong> — IRP 계좌에서 퇴직금 전액을 인출할 수 있습니다. 이 경우 퇴직소득세가 원천징수됩니다.</li>\n<li><strong>연금 수령</strong> — 만 55세 이후 연금으로 수령하면 퇴직소득세의 60~70%만 부과됩니다. 10년 이상 수령 시 추가 절세 효과가 있습니다.</li>\n<li><strong>중도인출 사유</strong> — 무주택자 주택 구입, 6개월 이상 요양, 파산·개인회생 등의 사유가 있으면 중간에도 인출할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: IRP 이전은 "묶이는 것"이 아닙니다. 세금 부담만 감수하면 언제든 인출 가능합니다. 다만 연금 수령이 세금상 가장 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직연금 산정 기준과 근로자 보호',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 퇴직연금 산정 시 근로자에게 유리한 방향으로 평균임금을 해석해야 한다고 판시하면서, 퇴직급여 이전과 수령에 관한 근로자의 선택권을 강조했습니다.',
        takeaway:
          'IRP 이전 의무가 있더라도 인출 자체는 자유입니다. 세금 차이를 확인한 후 일시금과 연금 중 유리한 방법을 선택하세요.',
      },
    ],
    faq: [
      {
        question: 'IRP 계좌가 없으면 퇴직금을 못 받나요?',
        answer:
          '<p>회사가 퇴직금 지급 전에 IRP 계좌 개설을 안내합니다. 은행·증권사 앱에서 10분 내로 개설할 수 있습니다. 계좌를 안 만들면 퇴직금 지급이 지연될 수 있으니 퇴직 전에 미리 개설하세요.</p>',
      },
      {
        question: 'IRP로 이전한 퇴직금을 바로 인출하면 불이익이 있나요?',
        answer:
          '<p>불이익은 없지만, 퇴직소득세가 전액 부과됩니다. 연금으로 수령하면 퇴직소득세가 30~40% 절감되므로, 당장 자금이 필요하지 않다면 유지하는 것이 유리합니다.</p>',
      },
      {
        question: '퇴직금이 300만원 이하인지는 어떻게 확인하나요?',
        answer:
          '<p>퇴직금 총액(세전)이 300만원 이하이면 IRP 이전 없이 바로 수령 가능합니다. 퇴직금 계산은 "퇴직 전 3개월 평균임금 × 근속연수 ÷ 365 × 30"으로 직접 산정하거나 회사에 확인하세요.</p>',
      },
      {
        question: '기존 직장의 DC형 퇴직연금도 IRP로 옮겨야 하나요?',
        answer:
          '<p>네. 55세 미만이면 DC형 적립금도 IRP로 이전해야 합니다. 새 직장에 DC형이 있으면 새 직장 DC 계좌로 이전하는 것도 가능합니다.</p>',
      },
    ],
    cta: { text: 'IRP 이전 의무 여부 AI로 즉시 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-guide' },
    ],
  },

  // ── 퇴직금 2. 파견근로자 퇴직금 청구 ──
  {
    domain: 'retirement',
    slug: 'retirement-temp-agency-worker-claim',
    keyword: '파견근로자 퇴직금 청구',
    questionKeyword: '파견근로자인데 퇴직금을 누구에게 청구하나요?',
    ctaKeyword: '파견 퇴직금 청구 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '파견근로자 퇴직금 — 파견업체 vs 사용업체 청구법 | 로앤가이드',
      description:
        '파견직으로 일했는데 퇴직금을 어디에 청구해야 하는지 모르겠다면, 청구 대상과 방법을 지금 확인하세요.',
    },
    intro:
      '<p>2년 넘게 파견직으로 같은 사무실에서 일했습니다. 계약 종료를 앞두고 퇴직금을 받고 싶은데, 파견업체에 요청해야 하는지 실제로 일한 사용업체에 요청해야 하는지 모르겠습니다. 파견근로자보호법에 따르면 원칙적으로 파견업체가 사용자이지만, 일정 조건에서는 사용업체에도 청구할 수 있습니다.</p>',
    sections: [
      {
        title: '원칙: 퇴직금은 파견업체에 청구',
        content:
          '<p><strong style="color:#1e3a5f">파견근로자의 사용자는 법적으로 파견업체(파견사업주)입니다.</strong></p>\n<p>파견근로자보호법 제2조에 따라 파견업체가 근로계약을 체결한 사용자이므로, 퇴직금 지급 의무도 파견업체에 있습니다.</p>\n<ul>\n<li><strong>근로계약 확인</strong> — 근로계약서에 적힌 사업주가 파견업체라면, 퇴직금 청구 대상도 파견업체입니다.</li>\n<li><strong>계속근로기간</strong> — 파견업체에서의 계속근로기간이 1년 이상이면 퇴직금을 받을 수 있습니다. 여러 사용업체에 파견되었더라도 파견업체와의 근로관계가 유지되면 기간이 합산됩니다.</li>\n<li><strong>평균임금 산정</strong> — 퇴직 전 3개월간 파견업체에서 받은 임금(기본급+수당)을 기준으로 계산합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파견업체가 폐업하거나 연락이 안 되는 경우가 아니라면, 우선 파견업체에 퇴직금을 청구하세요.</blockquote>',
      },
      {
        title: '사용업체에 청구할 수 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">2년 초과 파견 시 직접고용간주가 되면 사용업체가 퇴직금을 지급해야 합니다.</strong></p>\n<p>파견근로자보호법 제6조의2에 따라 2년을 초과하여 파견근로자를 사용하면 사용업체가 직접 고용한 것으로 간주됩니다. 이때부터 사용업체가 사용자가 되므로 퇴직금 의무도 사용업체에 있습니다.</p>\n<ul>\n<li><strong>직접고용간주 시점</strong> — 파견기간이 2년을 초과한 시점부터 직접고용이 간주됩니다.</li>\n<li><strong>불법파견의 경우</strong> — 파견법에서 허용하지 않는 업종이나 방식으로 파견된 경우, 처음부터 사용업체의 근로자로 인정될 수 있습니다.</li>\n<li><strong>퇴직금 이중청구 불가</strong> — 파견업체와 사용업체 양쪽에서 중복 수령은 불가합니다. 직접고용 간주 전후로 기간을 나누어 청구합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>파견직 퇴직금 청구 대상, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">파견기간, 업종, 계약 형태를 입력하면 청구 대상을 무료로 확인하세요.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파견업체 폐업 시 퇴직금 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">파견업체가 폐업하면 체당금 제도나 사용업체 상대 소송을 검토하세요.</strong></p>\n<ul>\n<li><strong>체당금(임금채권보장기금)</strong> — 파견업체가 도산한 경우, 근로복지공단에 체당금을 신청할 수 있습니다. 퇴직금도 체당금 지급 대상에 포함됩니다.</li>\n<li><strong>사용업체 상대 소송</strong> — 불법파견이 인정되면 사용업체에 직접 퇴직금을 청구하는 소송을 제기할 수 있습니다.</li>\n<li><strong>노동부 진정</strong> — 고용노동부에 퇴직금 미지급 진정을 제기하면, 근로감독관이 사실관계를 조사합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자 직접고용 시 퇴직금 공제 범위',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 파견근로자가 직접고용간주의 효과로 사용사업주에게 퇴직금을 청구한 사건에서, 파견업체로부터 이미 지급받은 퇴직금은 공제해야 한다고 판시했습니다.',
        takeaway:
          '직접고용간주가 인정되더라도 파견업체에서 받은 퇴직금은 중복 수령이 불가합니다. 파견업체에서 받은 금액을 확인한 후 사용업체에 차액을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '파견 계약이 1년 → 1년으로 두 번 체결되면 2년 초과인가요?',
        answer:
          '<p>파견기간의 합계가 2년을 초과하면 직접고용간주가 적용됩니다. 계약을 나누어 체결하더라도 실질적으로 계속 파견된 기간을 합산합니다.</p>',
      },
      {
        question: '파견업체에서 "퇴직금이 월급에 포함되어 있다"고 하는데 맞나요?',
        answer:
          '<p>월급에 퇴직금을 포함하여 지급하는 것은 원칙적으로 무효입니다. 대법원 판례에 따르면 퇴직금 분리 약정이 명확하지 않으면 별도로 퇴직금을 청구할 수 있습니다.</p>',
      },
      {
        question: '파견업체가 영세해서 퇴직금을 줄 돈이 없다고 하면 어떡하나요?',
        answer:
          '<p>파견업체의 지급 능력과 관계없이 퇴직금 지급 의무는 존재합니다. 노동부 진정 → 체불사업주 명단 공개 → 체당금 신청 순서로 대응하세요.</p>',
      },
      {
        question: '불법파견과 적법파견은 어떻게 구분하나요?',
        answer:
          '<p>제조업 직접생산공정, 건설현장 기간제한 초과, 파견허가 없는 업체 등은 불법파견입니다. 불법파견이면 처음부터 사용업체가 사용자이므로 사용업체에 퇴직금을 청구할 수 있습니다.</p>',
      },
      {
        question: '파견직인데 사용업체에서 직접 월급을 받았으면 청구 대상이 달라지나요?',
        answer:
          '<p>실질적 임금 지급 주체가 사용업체이면 근로관계의 실질을 따져 사용업체가 사용자로 인정될 수 있습니다. 급여명세서, 4대보험 가입 내역 등을 확인하세요.</p>',
      },
    ],
    cta: { text: '파견근로자 퇴직금 청구 대상 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '프리랜서 퇴직금', href: '/guide/retirement/retirement-freelancer-eligibility' },
      { label: '외국인 근로자 퇴직금', href: '/guide/retirement/retirement-foreign-worker-claim' },
    ],
  },

  // ── 퇴직금 3. 퇴직시기 선택에 따른 퇴직금 차이 ──
  {
    domain: 'retirement',
    slug: 'retirement-resignation-timing-impact',
    keyword: '퇴직시기 퇴직금 차이',
    questionKeyword: '퇴직 시기에 따라 퇴직금이 달라지나요?',
    ctaKeyword: '퇴직시기별 퇴직금 비교 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '퇴직 시기별 퇴직금 차이 — 최대 수백만원 3가지 변수 | 로앤가이드',
      description:
        '퇴직일을 며칠 바꾸면 퇴직금이 크게 달라질 수 있는지 걱정된다면, 시기별 차이와 유리한 퇴직일을 지금 확인하세요.',
    },
    intro:
      '<p>이직을 결심했지만 퇴직일을 언제로 하느냐에 따라 퇴직금이 달라진다는 말을 들었습니다. 연말에 나가면 상여금이 포함되고, 연초에 나가면 손해라는데 정말일까요. 퇴직금은 "퇴직 전 3개월 평균임금"으로 계산되기 때문에 퇴직 시기에 따라 수십만원에서 수백만원까지 차이가 날 수 있습니다.</p>',
    sections: [
      {
        title: '퇴직금 계산의 핵심: 퇴직 전 3개월 평균임금',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 "퇴직일 이전 3개월 임금 총액 ÷ 3개월 총 일수 × 30 × 근속연수"로 계산됩니다.</strong></p>\n<p>평균임금 산정 기간인 "퇴직 전 3개월"에 어떤 임금이 포함되느냐가 퇴직금의 크기를 결정합니다.</p>\n<ul>\n<li><strong>상여금 포함 시기</strong> — 설·추석 상여금, 성과급이 지급된 달이 3개월 안에 들어오면 평균임금이 크게 올라갑니다.</li>\n<li><strong>연장근로 여부</strong> — 야근이 많았던 달이 포함되면 평균임금이 높아집니다.</li>\n<li><strong>월 일수 차이</strong> — 2월(28일)이 포함되면 같은 월급이라도 평균임금(일급)이 높아집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상여금이 지급되는 달 직후, 또는 연장근로가 많았던 기간 직후에 퇴직하면 퇴직금이 가장 높습니다.</blockquote>',
      },
      {
        title: '퇴직 시기별 퇴직금 차이 시뮬레이션',
        content:
          '<p><strong style="color:#1e3a5f">같은 직장, 같은 근속연수라도 퇴직일에 따라 퇴직금이 수백만원 차이 납니다.</strong></p>\n<p>월급 300만원, 근속 10년, 설 상여금 100만원(1월 지급), 성과급 200만원(3월 지급)인 경우를 비교합니다.</p>\n<ul>\n<li><strong>4월 1일 퇴직</strong> — 1월(400만) + 2월(300만) + 3월(500만) = 1,200만원 ÷ 90일 × 30 × 10년 = 약 4,000만원</li>\n<li><strong>7월 1일 퇴직</strong> — 4월(300만) + 5월(300만) + 6월(300만) = 900만원 ÷ 91일 × 30 × 10년 = 약 2,967만원</li>\n<li><strong>차이</strong> — 동일한 조건에서 약 1,033만원 차이가 발생합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>퇴직 시기별 퇴직금 차이, AI가 즉시 비교합니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 상여금, 희망 퇴직일을 입력하면 시기별 퇴직금을 무료로 비교하세요.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '유리한 퇴직일 선택 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일을 결정하기 전에 아래 3가지를 가능한 한 확인하세요.</strong></p>\n<ul>\n<li><strong>상여금·성과급 지급월 확인</strong> — 상여금이 지급된 달이 퇴직 전 3개월에 포함되도록 퇴직일을 조정하세요.</li>\n<li><strong>연차수당 발생 시점</strong> — 미사용 연차수당은 퇴직으로 발생하므로 연차가 많이 남았을 때 퇴직하면 유리합니다.</li>\n<li><strong>근속연수 기준일</strong> — 근속연수가 정확히 N년이 되는 날 이후에 퇴직해야 1년이 온전히 반영됩니다. 하루 차이로 1년치 퇴직금이 줄어들 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직일을 한 달만 조정해도 퇴직금이 크게 달라집니다. 급하지 않다면 상여금 지급 직후를 퇴직일로 정하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정과 상여금 포함',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 퇴직금 산정 시 정기적·일률적으로 지급된 상여금은 평균임금에 포함해야 한다고 판시하면서, 평균임금 산정 기간에 지급된 상여금 전액이 포함된다고 확인했습니다.',
        takeaway:
          '정기 상여금이 퇴직 전 3개월 안에 지급되었다면 가능한 한 평균임금에 포함시켜야 합니다. 회사가 상여금을 제외하고 퇴직금을 계산하면 차액을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직일을 12월 31일로 하면 1월 1일보다 유리한가요?',
        answer:
          '<p>상여금이 12월에 지급되었다면 12월 31일 퇴직 시 해당 상여금이 3개월 산정 기간에 포함되어 유리합니다. 반면 1월 1일 퇴직이면 상여금이 3개월 밖으로 밀릴 수 있습니다.</p>',
      },
      {
        question: '성과급이 퇴직 직전에 지급되면 퇴직금에 반영되나요?',
        answer:
          '<p>정기적·일률적으로 지급되는 성과급은 평균임금에 포함됩니다. 다만 재직자에 한해 지급하는 특별 인센티브는 포함되지 않을 수 있으니 지급 기준을 확인하세요.</p>',
      },
      {
        question: '월급날 직전에 퇴직하면 해당 월 급여는 포함되나요?',
        answer:
          '<p>퇴직일까지 근무한 일수에 대한 임금(일할 계산)은 평균임금 산정에 포함됩니다. 월급 전액이 아니라 실제 근무일수분만 포함되므로 주의하세요.</p>',
      },
      {
        question: '회사에서 권고사직을 하면 퇴직일을 선택할 수 없나요?',
        answer:
          '<p>권고사직이라도 퇴직일은 협의 가능합니다. "한 달 뒤 퇴직"을 요청하여 상여금 지급 시기를 포함시키는 것이 유리합니다. 합의서에 퇴직일을 명시하세요.</p>',
      },
    ],
    cta: { text: '유리한 퇴직일 AI로 즉시 비교하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 중간정산', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },

  // ── 퇴직금 4. 근로계약서 없을 때 퇴직금 증명 방법 ──
  {
    domain: 'retirement',
    slug: 'retirement-no-contract-proof-method',
    keyword: '근로계약서 없이 퇴직금 증명',
    questionKeyword: '근로계약서가 없는데 퇴직금을 받을 수 있나요?',
    ctaKeyword: '근로계약서 없는 퇴직금 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '근로계약서 없이 퇴직금 증명하는 방법 5가지 | 로앤가이드',
      description:
        '근로계약서 없이 일했는데 퇴직금을 받을 수 있을지 걱정된다면, 증거 확보 방법과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>3년간 일한 식당에서 퇴직했습니다. 그런데 입사할 때 근로계약서를 쓴 적이 없습니다. 사장님은 "계약서도 없는데 무슨 퇴직금이냐"며 거부합니다. 근로기준법상 근로계약서 작성은 사업주의 의무이고, 계약서 미작성이 근로자의 권리를 소멸시키지 않습니다. 다른 증거로 충분히 퇴직금을 받을 수 있습니다.</p>',
    sections: [
      {
        title: '근로계약서 없어도 퇴직금을 받을 수 있는 이유',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서는 근로관계를 증명하는 여러 증거 중 하나일 뿐, 유일한 증거가 아닙니다.</strong></p>\n<p>근로기준법 제17조에 따라 서면 근로계약서 미교부 자체가 사업주의 위반입니다(500만원 이하 벌금). 계약서가 없더라도 실질적 근로관계가 인정되면 퇴직금을 받을 수 있습니다.</p>\n<ul>\n<li><strong>4대보험 가입 내역</strong> — 국민연금·건강보험·고용보험·산재보험 가입 이력이 가장 강력한 증거입니다.</li>\n<li><strong>급여 입금 내역</strong> — 통장에 정기적으로 입금된 급여 기록이 근로관계를 증명합니다.</li>\n<li><strong>출퇴근 기록</strong> — CCTV, 카드 출입 기록, 교통카드 이용 내역 등이 출퇴근을 증명합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업주가 "계약서가 없으니 퇴직금도 없다"고 주장하면, 오히려 계약서 미교부로 사업주가 추가 처벌을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '퇴직금 증명에 사용할 수 있는 증거 5가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 증거를 퇴직 전에 최대한 확보하세요.</strong></p>\n<ul>\n<li><strong>급여 통장 거래내역</strong> — 은행에서 최근 3년 거래내역을 발급받으세요. 정기적 입금 패턴이 핵심 증거입니다.</li>\n<li><strong>4대보험 가입 확인서</strong> — 국민건강보험공단 또는 국민연금공단에서 가입 이력 확인서를 발급받으세요.</li>\n<li><strong>카카오톡·문자 대화</strong> — 사장님과 업무 지시, 출근 확인 등을 주고받은 메시지를 캡처하세요.</li>\n<li><strong>동료 진술서</strong> — 함께 일한 동료에게 "OO씨가 OO년부터 OO년까지 함께 근무했다"는 진술서를 받으세요.</li>\n<li><strong>사진·영상</strong> — 근무 중 촬영한 사진, 직원 단체사진, 명함 등도 근로관계를 증명합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>보유 증거만으로 퇴직금 청구 가능한지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">가지고 있는 증거를 입력하면 퇴직금 청구 가능성과 다음 단계를 무료로 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 후 퇴직금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">증거를 모았다면 고용노동부 진정부터 시작하세요.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 사업주에게 퇴직금 지급을 요청하는 내용증명을 보냅니다. 14일 이내 미지급 시 법적 조치를 예고하세요.</li>\n<li><strong>고용노동부 진정</strong> — 관할 고용노동지청에 퇴직금 미지급 진정을 제기합니다. 근로감독관이 사실 조사 후 시정명령을 내립니다.</li>\n<li><strong>민사소송</strong> — 진정으로 해결이 안 되면 소액사건심판(3,000만원 이하) 또는 민사소송으로 퇴직금을 청구합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약서 미교부 진정(500만원 이하 벌금)과 퇴직금 미지급 진정을 동시에 제기하면 사업주에게 더 큰 압박이 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로계약서 없는 상태에서 근로자성 인정',
        summary:
          '서울행법 2025구합54475 사건(서울행정법원, 2025.11.13 선고)에서 법원은 근로계약서가 없더라도 실질적으로 사용자의 지휘·감독 아래 근로를 제공한 사실이 인정되면 근로자로 봐야 한다고 판시했습니다.',
        takeaway:
          '근로계약서 유무가 아니라 실질적 근로관계가 핵심입니다. 출퇴근 시간 준수, 업무 지시 이행, 정기 급여 수령 등이 확인되면 근로자로 인정받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '4대보험도 안 들어있으면 퇴직금을 받을 수 없나요?',
        answer:
          '<p>4대보험 미가입도 사업주의 위반입니다. 급여 입금 내역, 동료 진술, 카톡 대화 등 다른 증거로 근로관계를 증명할 수 있습니다.</p>',
      },
      {
        question: '현금으로 급여를 받았으면 어떻게 증명하나요?',
        answer:
          '<p>급여를 받을 때마다 서명한 수령 대장, 동료 진술, 사장님과 급여 관련 대화 기록 등을 모으세요. 세무서에 사업장 소득자 신고 내역이 있는지도 확인하세요.</p>',
      },
      {
        question: '사장님이 "프리랜서였다"고 주장하면 어떡하나요?',
        answer:
          '<p>프리랜서인지 근로자인지는 계약 명칭이 아니라 실질로 판단합니다. 출퇴근 시간이 정해져 있고, 사장님의 지시를 받았고, 다른 일을 할 수 없었다면 근로자로 인정될 수 있습니다.</p>',
      },
      {
        question: '퇴직한 지 2년이 넘었는데 지금이라도 청구할 수 있나요?',
        answer:
          '<p>퇴직금 청구 소멸시효는 퇴직일로부터 3년입니다. 3년 이내라면 지금이라도 청구 가능합니다. 시효가 임박했다면 서둘러 노동부 진정을 제기하세요.</p>',
      },
      {
        question: '근로계약서 미교부에 대해 따로 벌금을 물릴 수 있나요?',
        answer:
          '<p>네. 근로기준법 제17조 위반으로 500만원 이하의 벌금이 부과됩니다. 퇴직금 미지급 진정과 함께 계약서 미교부도 신고하세요.</p>',
      },
    ],
    cta: { text: '근로계약서 없는 퇴직금 청구 방법 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '프리랜서 퇴직금', href: '/guide/retirement/retirement-freelancer-eligibility' },
      { label: '단시간 근로자 퇴직금', href: '/guide/retirement/retirement-part-time-eligibility' },
      { label: '퇴직금 회사 도산', href: '/guide/retirement/retirement-company-bankrupt-deposit' },
    ],
  },

  // ── 퇴직금 5. 스톡옵션·RSU 퇴직금 포함 여부 ──
  {
    domain: 'retirement',
    slug: 'retirement-stock-option-included',
    keyword: '스톡옵션 RSU 퇴직금 포함',
    questionKeyword: '스톡옵션이나 RSU가 퇴직금에 포함되나요?',
    ctaKeyword: '스톡옵션 퇴직금 포함 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '스톡옵션·RSU 퇴직금 포함 여부 — 핵심 판단 기준 3가지 | 로앤가이드',
      description:
        '스타트업에서 받은 스톡옵션이나 RSU가 퇴직금에 포함되는지 궁금하다면, 판단 기준과 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>IT 스타트업에서 5년간 일하면서 스톡옵션과 RSU를 받았습니다. 퇴직을 준비하면서 이 주식 보상이 퇴직금 계산에 포함되는지 궁금합니다. 스톡옵션과 RSU의 퇴직금 포함 여부는 "임금성"이 인정되느냐에 따라 결론이 달라집니다. 대부분의 경우 퇴직금 평균임금에 포함되지 않지만, 예외가 있습니다.</p>',
    sections: [
      {
        title: '스톡옵션과 퇴직금: 원칙적으로 불포함',
        content:
          '<p><strong style="color:#1e3a5f">스톡옵션(주식매수선택권)은 원칙적으로 퇴직금 산정 기초인 평균임금에 포함되지 않습니다.</strong></p>\n<p>스톡옵션은 근로의 대가로 정기적·일률적·고정적으로 지급되는 것이 아니라, 행사 여부와 시기가 근로자의 선택에 달려 있으므로 임금으로 보기 어렵습니다.</p>\n<ul>\n<li><strong>행사 차익</strong> — 스톡옵션 행사로 발생한 차익(시가 - 행사가)은 근로소득으로 과세되지만, 퇴직금 평균임금에는 포함되지 않습니다.</li>\n<li><strong>미행사 옵션</strong> — 아직 행사하지 않은 스톡옵션은 퇴직 시 소멸하는 것이 일반적이므로 퇴직금과 무관합니다.</li>\n<li><strong>예외적 포함</strong> — 스톡옵션이 급여의 일부로 확정적·정기적으로 지급되는 구조라면 임금성이 인정될 여지가 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 스톡옵션 자체는 퇴직금에 포함되지 않지만, 옵션 행사 차익이 "확정적 보수"로 설계되었다면 포함 가능성이 있습니다.</blockquote>',
      },
      {
        title: 'RSU와 퇴직금: 임금성 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">RSU(양도제한조건부주식)는 스톡옵션보다 임금성이 인정될 가능성이 상대적으로 높습니다.</strong></p>\n<p>RSU는 일정 기간 근무(베스팅)를 조건으로 주식을 확정적으로 지급하는 구조입니다. 근로의 대가로 정기적으로 지급되는 성격이 강할수록 임금으로 인정될 가능성이 높아집니다.</p>\n<ul>\n<li><strong>베스팅 완료분</strong> — 이미 베스팅이 완료되어 소유권이 이전된 RSU의 가치는 해당 시점의 급여로 볼 여지가 있습니다.</li>\n<li><strong>미베스팅분</strong> — 퇴직으로 소멸하는 미베스팅 RSU는 퇴직금 산정에 포함되지 않습니다.</li>\n<li><strong>현금 결제형</strong> — RSU를 주식 대신 현금으로 지급하는 경우 임금성이 더 강하게 인정될 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>스톡옵션·RSU 퇴직금 포함 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">보상 구조, 지급 조건, 베스팅 스케줄을 입력하면 퇴직금 포함 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직 시 스톡옵션·RSU 관련 체크 포인트',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 전에 주식보상 계약서의 퇴직 관련 조항을 가능한 한 확인하세요.</strong></p>\n<ul>\n<li><strong>퇴직 시 미행사 옵션 처리</strong> — 대부분의 스톡옵션은 퇴직 후 90일 이내에 행사해야 합니다. 기간 내 행사하지 않으면 소멸됩니다.</li>\n<li><strong>베스팅 가속 조항</strong> — 퇴직 사유에 따라 미베스팅 RSU가 즉시 베스팅되는 "가속 베스팅" 조항이 있는지 확인하세요.</li>\n<li><strong>퇴직금 별도 협상</strong> — 스톡옵션·RSU가 퇴직금에 포함되지 않더라도, 퇴직 위로금이나 특별 보상으로 협상할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 스톡옵션·RSU 계약서의 퇴직 조항(행사 기한, 베스팅 가속, 매수청구권)을 퇴직 전에 꼼꼼히 읽으세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주식매수선택권의 임금성 판단',
        summary:
          '부산고법 2024나11385 사건(부산고등법원, 2025.06.26 선고)에서 법원은 주식매수선택권의 행사 차익이 근로의 대가인지를 판단하면서, 정기적·일률적·고정적으로 지급되는 것이 아니라면 평균임금에 포함되지 않는다고 판시했습니다.',
        takeaway:
          '스톡옵션 행사 차익이 퇴직금에 포함되려면 "정기성·일률성·고정성"이 인정되어야 합니다. 일반적인 스톡옵션은 이 요건을 충족하기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '스톡옵션 행사 차익이 원천징수되면 퇴직금에도 포함되는 건 아닌가요?',
        answer:
          '<p>세법상 근로소득으로 과세되는 것과 노동법상 평균임금에 포함되는 것은 별개입니다. 과세 대상이라고 해서 퇴직금 산정에 자동으로 포함되지 않습니다.</p>',
      },
      {
        question: 'RSU를 매달 베스팅 받으면 월급처럼 퇴직금에 포함되나요?',
        answer:
          '<p>월별 베스팅 구조라면 정기성이 인정될 수 있어 임금성 논란이 있습니다. 다만 아직 대법원 차원의 확립된 판례가 없으므로, 개별 사건에서 지급 구조를 따져봐야 합니다.</p>',
      },
      {
        question: '퇴직 후 스톡옵션 행사 기간이 90일인데 연장할 수 있나요?',
        answer:
          '<p>스톡옵션 약정에서 정한 행사 기간은 계약 조건입니다. 회사와 협의하여 연장을 요청할 수 있지만, 법적으로 연장 의무는 없습니다. 퇴직 협상 시 함께 논의하세요.</p>',
      },
      {
        question: '비상장 스타트업의 스톡옵션은 행사해도 매도할 수 없는데 어떡하나요?',
        answer:
          '<p>비상장 주식은 유동성이 없어 행사해도 현금화가 어렵습니다. 상장 전 퇴직이라면 행사 여부를 신중히 판단하고, 회사에 매수청구권(풋옵션)이 있는지 확인하세요.</p>',
      },
    ],
    cta: { text: '스톡옵션·RSU 퇴직금 포함 여부 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 IRP 의무이전', href: '/guide/retirement/retirement-irp-transfer-requirement' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },

  // ── 임금체불 6. 고용노동부 진정 처리 기간과 촉진 방법 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-labor-inspector-timeline',
    keyword: '임금체불 노동부 진정 처리 기간',
    questionKeyword: '노동부에 임금체불 진정하면 얼마나 걸리나요?',
    ctaKeyword: '노동부 진정 처리 기간 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '임금체불 노동부 진정 처리 기간 — 촉진 방법 3가지 | 로앤가이드',
      description:
        '노동부에 임금체불 진정을 넣었는데 처리가 너무 느려서 답답하다면, 처리 기간과 촉진 방법을 지금 확인하세요.',
    },
    intro:
      '<p>3개월 전에 고용노동부에 임금체불 진정을 제기했지만, 아직 아무런 연락이 없습니다. 담당자에게 전화해도 "조사 중"이라는 답변만 반복됩니다. 생활비가 급한데 언제까지 기다려야 하는지 막막합니다. 노동부 진정의 평균 처리 기간과 이를 앞당기는 방법을 정리합니다.</p>',
    sections: [
      {
        title: '노동부 진정 처리 절차와 평균 소요 기간',
        content:
          '<p><strong style="color:#1e3a5f">임금체불 진정은 접수부터 종결까지 평균 1~3개월이 소요됩니다.</strong></p>\n<p>고용노동부 근로감독관이 사건을 배당받아 사실 조사를 진행합니다. 사업주 출석, 자료 제출 등 단계별로 시간이 소요됩니다.</p>\n<ol>\n<li><strong>접수 (1~2일)</strong> — 온라인(고용노동부 민원마당) 또는 관할 노동지청 방문으로 접수합니다.</li>\n<li><strong>담당자 배당 (3~7일)</strong> — 근로감독관이 배당되어 사건 검토를 시작합니다.</li>\n<li><strong>사업주 출석 요구 (2~4주)</strong> — 사업주에게 출석 통지서가 발송되고, 출석하여 진술합니다.</li>\n<li><strong>시정 지시 또는 수사 전환 (4~8주)</strong> — 체불이 확인되면 시정 지시를 내리고, 불이행 시 수사로 전환됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 단순 체불 사건은 1~2개월, 사업주가 출석을 거부하거나 다투는 경우 3개월 이상 걸릴 수 있습니다.</blockquote>',
      },
      {
        title: '진정 처리를 앞당기는 방법 3가지',
        content:
          '<p><strong style="color:#1e3a5f">처리 속도를 높이려면 증거를 완벽하게 준비하고 적극적으로 대응하세요.</strong></p>\n<ul>\n<li><strong>증거 일체 제출</strong> — 급여명세서, 근로계약서, 통장 거래내역, 근무시간 기록을 진정서와 함께 제출하면 조사 기간이 단축됩니다. 근로감독관이 추가 자료를 요청할 필요가 없어집니다.</li>\n<li><strong>체불 금액 정확 산정</strong> — "대략 얼마"가 아니라, 월별 미지급 금액을 표로 정리하세요. 감독관이 바로 확인할 수 있어 처리가 빨라집니다.</li>\n<li><strong>진정 후 2주 내 담당자 확인</strong> — 접수 후 2주 이내에 관할 노동지청에 전화하여 담당 근로감독관 이름과 연락처를 확인하세요. 정기적으로 진행 상황을 문의하면 우선순위가 올라갑니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>노동부 진정서 작성, AI가 즉시 도와드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 내역과 증거를 입력하면 진정서 핵심 내용을 무료로 정리합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '진정 처리가 지연될 때 추가 대응',
        content:
          '<p><strong style="color:#1e3a5f">3개월 이상 지연되면 국민신문고 민원 또는 고용노동부 감사 담당에 이의를 제기하세요.</strong></p>\n<ul>\n<li><strong>국민신문고 민원</strong> — "진정 접수 후 3개월이 지났으나 처리되지 않고 있다"는 민원을 제기하면 상급 기관이 처리를 독촉합니다.</li>\n<li><strong>국회의원 사무실 민원</strong> — 지역구 국회의원 사무실에 민원을 넣으면 노동지청에 확인 공문이 발송됩니다.</li>\n<li><strong>병행 민사소송</strong> — 진정과 별도로 민사소송(소액사건심판)을 제기하면 법원 판결로 강제집행이 가능합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금채권의 신속한 확보와 사용자 의무',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 사용자의 임금 지급 의무는 확정적이며, 지급 지연에 대한 지연이자도 당연히 발생한다고 판시하면서, 임금채권의 신속한 확보가 근로자 보호의 핵심이라고 강조했습니다.',
        takeaway:
          '노동부 진정이 지연되더라도 지연이자는 계속 발생합니다. 처리를 기다리는 동안 민사소송을 병행하여 임금채권을 조기에 확보하는 것도 방법입니다.',
      },
    ],
    faq: [
      {
        question: '진정을 넣으면 사업주에게 바로 통보되나요?',
        answer:
          '<p>진정이 접수되면 근로감독관이 사업주에게 출석 통지서를 발송합니다. 통상 접수 후 1~2주 내에 사업주에게 통보됩니다.</p>',
      },
      {
        question: '근로감독관이 사업주 편을 드는 것 같으면 어떻게 하나요?',
        answer:
          '<p>근로감독관의 처분에 불만이 있으면 해당 노동지청 지청장에게 이의를 제기하거나, 고용노동부 본부 감사관실에 민원을 제출할 수 있습니다.</p>',
      },
      {
        question: '진정 중에 사업주가 일부만 지급하겠다고 하면?',
        answer:
          '<p>일부 지급 합의는 근로감독관 입회 하에 진행하세요. 잔액에 대해서는 진정을 유지하거나, 합의서에 잔액 지급 기한을 명시해야 합니다.</p>',
      },
      {
        question: '온라인으로 진정 접수하는 방법이 있나요?',
        answer:
          '<p>고용노동부 민원마당(minwon.moel.go.kr) 또는 정부24에서 "임금체불 진정"으로 온라인 접수가 가능합니다. 증거 파일도 함께 첨부하세요.</p>',
      },
      {
        question: '진정과 고소를 동시에 할 수 있나요?',
        answer:
          '<p>가능합니다. 진정은 행정적 시정명령을, 고소는 형사처벌을 목적으로 하므로 동시에 진행하면 사업주에게 더 큰 압박이 됩니다.</p>',
      },
    ],
    cta: { text: '노동부 진정 절차 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 지연이자', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

  // ── 임금체불 7. 집단 임금체불 공동진정 절차 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-collective-complaint',
    keyword: '집단 임금체불 공동진정',
    questionKeyword: '직원들이 함께 임금체불 진정을 낼 수 있나요?',
    ctaKeyword: '집단 임금체불 공동진정 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '집단 임금체불 공동진정 — 절차와 효과 핵심 정리 | 로앤가이드',
      description:
        '회사가 직원 여러 명의 임금을 체불했다면, 공동진정으로 빠르게 해결하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>회사가 3개월째 직원 20명의 급여를 밀리고 있습니다. 혼자 진정을 넣자니 불이익이 걱정되고, 다 함께 하면 효과가 있을지 모르겠습니다. 집단 임금체불의 경우 공동진정을 하면 개별 진정보다 처리가 빠르고, 사업주에 대한 압박도 훨씬 강합니다.</p>',
    sections: [
      {
        title: '공동진정이란: 개별 진정과의 차이',
        content:
          '<p><strong style="color:#1e3a5f">공동진정은 같은 사업장의 근로자 여러 명이 하나의 진정서로 일괄 신고하는 것입니다.</strong></p>\n<p>개별 진정은 1인 1건으로 처리되지만, 공동진정은 1건으로 묶여 담당 감독관이 일괄 조사합니다.</p>\n<ul>\n<li><strong>처리 속도</strong> — 다수 근로자가 같은 내용으로 진정하면 "집단 체불"로 분류되어 우선 처리 대상이 됩니다.</li>\n<li><strong>증거력 강화</strong> — 20명이 동일한 사실을 진술하면 사업주가 반박하기 어렵습니다.</li>\n<li><strong>보복 방지</strong> — 혼자 진정하면 불이익을 받을 수 있지만, 집단으로 하면 특정인을 대상으로 보복하기 어렵습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 집단 체불 사건은 노동지청 내에서도 중요 사건으로 분류되어, 과장급 이상이 관리하는 경우가 많습니다.</blockquote>',
      },
      {
        title: '공동진정 절차 3단계',
        content:
          '<p><strong style="color:#1e3a5f">동료들과 합의 → 진정서 작성 → 일괄 접수 순으로 진행하세요.</strong></p>\n<ol>\n<li><strong>1단계: 참여자 확인 및 위임</strong> — 체불 피해 직원 명단을 작성하고, 대표 진정인을 선정합니다. 각 참여자로부터 위임장을 받으세요.</li>\n<li><strong>2단계: 공동진정서 작성</strong> — 참여자별 체불 금액, 체불 기간, 증거를 정리한 공동진정서를 작성합니다. 개인별 급여명세서와 통장 거래내역을 첨부하세요.</li>\n<li><strong>3단계: 관할 노동지청 접수</strong> — 사업장 소재지 관할 고용노동지청에 방문 또는 온라인으로 접수합니다. 대표 진정인이 일괄 접수 가능합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>공동진정서 작성, AI가 즉시 도와드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">참여 인원, 체불 기간, 금액을 입력하면 진정서 핵심 내용을 무료로 정리합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공동진정 후 사업주 대응과 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 일부 직원에게만 지급하거나 개별 합의를 시도할 수 있으니 주의하세요.</strong></p>\n<ul>\n<li><strong>개별 회유 주의</strong> — 사업주가 몇 명에게만 먼저 지급하며 진정 취하를 요구할 수 있습니다. 전원 지급이 확인될 때까지 취하하지 마세요.</li>\n<li><strong>합의서 작성</strong> — 합의할 경우 전원 동시에 합의하고, 잔액과 지급 기한을 명시한 합의서를 작성하세요.</li>\n<li><strong>형사 고소 병행</strong> — 시정명령 후에도 지급하지 않으면, 공동으로 형사 고소를 진행하면 효과적입니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 집단 임금체불과 사용자 처벌',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 다수 근로자에 대한 임금 체불은 각 근로자별로 별개의 범죄가 성립하므로, 체불 규모가 클수록 사업주의 형사책임이 가중된다고 판시했습니다.',
        takeaway:
          '집단 체불은 사업주에게 더 무거운 형사처벌이 가능합니다. 공동진정으로 체불 규모를 한꺼번에 드러내면 검찰 기소 가능성도 높아집니다.',
      },
    ],
    faq: [
      {
        question: '공동진정에 참여하면 회사에서 해고할 수 있나요?',
        answer:
          '<p>임금체불 진정은 정당한 권리 행사이므로, 이를 이유로 한 해고는 부당해고에 해당합니다. 근로기준법 제104조에 따라 감독기관에 통보한 것을 이유로 한 불이익 처분은 금지됩니다.</p>',
      },
      {
        question: '일부 직원이 참여를 꺼리면 나머지만 해도 되나요?',
        answer:
          '<p>네. 2~3명이라도 공동진정이 가능합니다. 다만 참여자가 많을수록 집단 체불로 분류되어 처리 우선순위가 올라갑니다.</p>',
      },
      {
        question: '퇴직한 직원과 재직 중인 직원이 함께 진정할 수 있나요?',
        answer:
          '<p>가능합니다. 퇴직자와 재직자 모두 임금 미지급 피해자이므로 공동진정의 대상이 됩니다.</p>',
      },
      {
        question: '공동진정 시 체불 금액은 합산해서 계산하나요?',
        answer:
          '<p>진정서에는 참여자별 개인 체불 금액을 명시하되, 총액도 함께 기재합니다. 총 체불액이 클수록 사건의 심각성이 부각됩니다.</p>',
      },
    ],
    cta: { text: '공동진정 절차 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '체당금 신청', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
    ],
  },

  // ── 임금체불 8. 지연이자 14.6% 산정법과 청구 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-delay-interest-calculation',
    keyword: '임금체불 지연이자 14.6%',
    questionKeyword: '밀린 임금에 지연이자를 받을 수 있나요?',
    ctaKeyword: '임금체불 지연이자 계산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '임금체불 지연이자 14.6% — 계산법과 청구 방법 | 로앤가이드',
      description:
        '밀린 임금에 지연이자까지 받을 수 있는지 궁금하다면, 14.6% 산정법과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>6개월 전에 퇴직했는데 아직 밀린 임금 500만원을 받지 못했습니다. 원금만 받으면 억울한데, 이자까지 청구할 수 있다고 합니다. 근로기준법 제37조에 따라 퇴직 후 14일이 지나도 임금을 지급하지 않으면 연 14.6%의 지연이자가 발생합니다.</p>',
    sections: [
      {
        title: '지연이자 14.6%가 적용되는 조건',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일로부터 14일 이내에 임금·퇴직금을 지급하지 않으면 연 14.6%의 지연이자가 붙습니다.</strong></p>\n<p>근로기준법 시행령 제17조에 따라, 사용자가 퇴직 근로자에게 14일 이내에 임금을 지급하지 않으면 미지급 임금에 대해 연 14.6%의 지연손해금이 발생합니다.</p>\n<ul>\n<li><strong>적용 대상</strong> — 임금, 퇴직금, 보상금 등 일체의 금품이 포함됩니다.</li>\n<li><strong>기산일</strong> — 퇴직일 다음 날부터 14일이 지난 날(15일째)부터 지연이자가 발생합니다.</li>\n<li><strong>적용 제외</strong> — 5인 미만 사업장은 지연이자 규정이 적용되지 않습니다(2021.11.19 이후 퇴직자부터 적용).</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 연 14.6%는 은행 대출 이자보다 훨씬 높습니다. 500만원이 6개월 밀리면 약 36.5만원의 지연이자가 추가됩니다.</blockquote>',
      },
      {
        title: '지연이자 계산 방법',
        content:
          '<p><strong style="color:#1e3a5f">미지급 임금 × 14.6% ÷ 365 × 지연 일수로 계산합니다.</strong></p>\n<p>구체적인 계산 예시를 보겠습니다.</p>\n<ul>\n<li><strong>사례 1</strong> — 미지급 임금 500만원, 퇴직 후 180일 경과: 5,000,000 × 0.146 ÷ 365 × (180-14) = 약 332,164원</li>\n<li><strong>사례 2</strong> — 미지급 임금 1,000만원, 퇴직 후 365일 경과: 10,000,000 × 0.146 ÷ 365 × (365-14) = 약 1,404,055원</li>\n<li><strong>주의</strong> — 14일간의 유예기간은 이자가 붙지 않습니다. 15일째부터 계산합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>지연이자 포함 총 청구액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">미지급 금액과 퇴직일을 입력하면 지연이자를 자동 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지연이자 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">노동부 진정, 민사소송, 지급명령 신청 시 지연이자를 함께 청구하세요.</strong></p>\n<ul>\n<li><strong>노동부 진정 시</strong> — 진정서에 "미지급 임금 OOO원 및 지연이자"를 명시하세요. 근로감독관이 지연이자 포함 지급을 시정명령합니다.</li>\n<li><strong>민사소송 시</strong> — 소장에 "미지급 임금 OOO원 및 이에 대한 퇴직일 이후 14일이 경과한 날부터 다 갚는 날까지 연 14.6%의 비율에 의한 금원"으로 기재합니다.</li>\n<li><strong>지급명령 신청</strong> — 소액사건(3,000만원 이하)은 법원에 지급명령을 신청하면 간편하게 집행권원을 확보할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 많은 근로자가 원금만 청구하고 지연이자를 빠뜨립니다. 가능한 한 함께 청구하세요. 금액이 클수록 이자도 상당합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 지연이자의 당연 발생',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 사용자가 퇴직 근로자에게 14일 이내에 임금을 지급하지 않으면 지연이자가 당연히 발생하며, 사용자의 귀책사유 유무와 관계없다고 판시했습니다.',
        takeaway:
          '사업주가 "돈이 없어서 못 줬다"고 해도 지연이자는 면제되지 않습니다. 자금 사정과 관계없이 14일 이후부터 연 14.6%가 자동 발생합니다.',
      },
    ],
    faq: [
      {
        question: '재직 중 밀린 임금에도 14.6% 지연이자가 붙나요?',
        answer:
          '<p>근로기준법 제37조의 지연이자(연 14.6%)는 퇴직 후 미지급에 적용됩니다. 재직 중 체불에는 민법상 법정이율(연 5%)이 적용될 수 있습니다.</p>',
      },
      {
        question: '5인 미만 사업장이면 지연이자를 아예 못 받나요?',
        answer:
          '<p>2021년 11월 19일 이전 퇴직자는 적용되지 않았으나, 이후 퇴직자부터는 5인 미만 사업장에도 적용됩니다. 퇴직일을 기준으로 확인하세요.</p>',
      },
      {
        question: '사업주와 합의할 때 지연이자를 포기해야 하나요?',
        answer:
          '<p>합의 내용은 자유이지만, 지연이자까지 포함한 금액으로 합의하는 것이 원칙입니다. 지연이자를 포기하는 대신 즉시 지급받는 것도 전략입니다.</p>',
      },
      {
        question: '퇴직금 지연이자 20%와 임금 지연이자 14.6%는 다른 건가요?',
        answer:
          '<p>네. 퇴직금에 대한 지연이자는 근로자퇴직급여보장법에 따라 연 20%이고, 임금(급여)에 대한 지연이자는 근로기준법에 따라 연 14.6%입니다. 둘 다 해당되면 각각 적용됩니다.</p>',
      },
    ],
    cta: { text: '지연이자 포함 청구액 AI로 즉시 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 지연이자 상세', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
    ],
  },

  // ── 임금체불 9. 임금체불 형사고소 절차와 실효성 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-criminal-complaint-procedure',
    keyword: '임금체불 형사고소 절차',
    questionKeyword: '임금체불로 사장님을 형사고소할 수 있나요?',
    ctaKeyword: '임금체불 형사고소 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '임금체불 형사고소 절차 — 실효성과 주의점 4가지 | 로앤가이드',
      description:
        '밀린 임금을 도무지 안 주는 사업주를 형사고소하고 싶다면, 절차와 실효성을 지금 확인하세요.',
    },
    intro:
      '<p>노동부 진정을 넣었는데도 사장님이 "돈이 없다"며 6개월째 임금을 안 줍니다. 시정명령도 무시하고 있습니다. 이제는 형사고소를 해서라도 압박하고 싶습니다. 근로기준법 제109조에 따라 임금체불은 3년 이하의 징역 또는 3,000만원 이하의 벌금에 해당하는 범죄입니다.</p>',
    sections: [
      {
        title: '임금체불 형사고소의 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">임금체불은 근로기준법 제109조에 따라 형사처벌 대상입니다.</strong></p>\n<p>사용자가 정당한 이유 없이 임금을 지급하지 않으면 "3년 이하의 징역 또는 3,000만원 이하의 벌금"에 처할 수 있습니다.</p>\n<ul>\n<li><strong>반의사불벌죄</strong> — 임금체불은 피해 근로자의 명시적 처벌 불원 의사가 있으면 처벌할 수 없는 반의사불벌죄입니다. 즉, 사업주가 밀린 임금을 지급하고 근로자가 "처벌을 원하지 않는다"고 하면 형사절차가 종결됩니다.</li>\n<li><strong>이것이 핵심</strong> — 형사고소의 실질적 효과는 "처벌 위협을 통한 지급 압박"입니다. 많은 사업주가 형사고소 후 임금을 지급합니다.</li>\n<li><strong>공소시효</strong> — 임금체불의 공소시효는 5년입니다. 체불일로부터 5년 이내에 고소해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형사고소는 "사업주를 처벌하려는 것"이 아니라 "임금을 받기 위한 압박 수단"으로 활용하는 것이 현실적입니다.</blockquote>',
      },
      {
        title: '형사고소 절차 4단계',
        content:
          '<p><strong style="color:#1e3a5f">노동부 진정 → 시정명령 불이행 → 수사 전환 → 검찰 송치 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계: 노동부 진정 선행</strong> — 먼저 고용노동부에 진정을 제기합니다. 근로감독관이 체불 사실을 확인하고 시정명령을 내립니다.</li>\n<li><strong>2단계: 시정명령 불이행</strong> — 사업주가 시정기한(보통 14일) 내에 지급하지 않으면, 근로감독관이 사건을 수사로 전환합니다.</li>\n<li><strong>3단계: 수사 및 검찰 송치</strong> — 근로감독관이 사업주를 피의자로 수사하고, 검찰에 사건을 송치합니다.</li>\n<li><strong>4단계: 기소 또는 약식명령</strong> — 검찰이 기소(정식재판) 또는 약식명령(벌금)을 청구합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>형사고소 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 내역, 진정 경과, 사업주 대응을 입력하면 다음 단계를 무료로 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사고소의 실효성과 한계',
        content:
          '<p><strong style="color:#1e3a5f">형사고소는 강력한 압박 수단이지만, 실제 징역형까지 이어지는 경우는 드뭅니다.</strong></p>\n<ul>\n<li><strong>지급 압박 효과</strong> — 수사 개시 후 많은 사업주가 임금을 지급하고 합의를 요청합니다. 형사고소의 가장 큰 효과입니다.</li>\n<li><strong>벌금형 중심</strong> — 초범이고 체불 규모가 작으면 벌금형(약식명령)으로 처리되는 경우가 많습니다.</li>\n<li><strong>한계</strong> — 사업주가 정말 무자력(재산이 없는 상태)이면 형사처벌을 해도 임금을 받지 못할 수 있습니다. 이 경우 체당금 제도를 활용하세요.</li>\n<li><strong>합의 시점</strong> — 사업주가 지급하고 합의를 요청하면, 지연이자까지 포함한 전액을 지급받은 후 처벌불원서를 작성하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금체불의 형사책임과 반의사불벌',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 임금체불이 반의사불벌죄이므로 근로자가 처벌 불원 의사를 표시하면 공소를 제기할 수 없다고 확인하면서도, 지급 완료 전 처벌불원서 작성은 신중해야 한다고 덧붙였습니다.',
        takeaway:
          '임금을 전액 수령하기 전에 처벌불원서를 작성하면 안 됩니다. 가능한 한 전액 입금 확인 후에 처벌불원서를 제출하세요.',
      },
    ],
    faq: [
      {
        question: '노동부 진정 없이 바로 형사고소할 수 있나요?',
        answer:
          '<p>가능합니다. 경찰서에 직접 고소장을 제출할 수 있습니다. 다만 노동부 진정을 먼저 하면 근로감독관의 조사 결과가 수사에 활용되어 더 효율적입니다.</p>',
      },
      {
        question: '형사고소하면 사업주가 보복할 수 있나요?',
        answer:
          '<p>형사고소를 이유로 한 불이익 처분은 부당노동행위입니다. 재직 중이라면 부당노동행위 구제신청을 할 수 있고, 퇴직자라면 보복의 대상이 되기 어렵습니다.</p>',
      },
      {
        question: '사업주가 일부만 지급하고 합의를 요청하면?',
        answer:
          '<p>전액(원금 + 지연이자) 지급이 확인될 때까지 합의하지 마세요. 일부 지급 후 합의하면 나머지를 받기 어려워집니다.</p>',
      },
      {
        question: '법인 사업주도 형사고소 대상인가요?',
        answer:
          '<p>근로기준법 위반의 형사책임은 법인 자체가 아니라 대표이사(실질적 사용자)에게 부과됩니다. 대표이사를 피고소인으로 지정하세요.</p>',
      },
      {
        question: '형사고소 후 검찰이 불기소하면 어떡하나요?',
        answer:
          '<p>검찰의 불기소 처분에 대해 항고(고등검찰청) → 재항고(대검찰청) → 재정신청(법원)으로 불복할 수 있습니다.</p>',
      },
    ],
    cta: { text: '임금체불 형사고소 가능 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 지연이자', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
      { label: '체당금 신청', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
    ],
  },

  // ── 임금체불 10. 체당금(임금채권보장기금) 신청 자격과 한도 ──
  {
    domain: 'wage',
    slug: 'unpaid-wage-guarantee-fund-application',
    keyword: '체당금 임금채권보장기금 신청',
    questionKeyword: '회사가 망했는데 밀린 임금을 받을 수 있나요?',
    ctaKeyword: '체당금 신청 자격 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '체당금 신청 자격과 한도 — 최대 1,000만원 받는 법 | 로앤가이드',
      description:
        '사업주가 파산하거나 폐업해서 밀린 임금을 못 받고 있다면, 체당금 신청 자격과 한도를 지금 확인하세요.',
    },
    intro:
      '<p>일하던 회사가 갑자기 폐업했습니다. 3개월치 급여 600만원과 퇴직금이 밀려 있는데, 사장님은 연락이 되지 않습니다. 회사에 돈이 없으면 임금을 영영 못 받는 걸까요. 임금채권보장법에 따라 근로복지공단에서 체당금을 먼저 지급받을 수 있습니다.</p>',
    sections: [
      {
        title: '체당금이란: 나라가 대신 지급하는 밀린 임금',
        content:
          '<p><strong style="color:#1e3a5f">체당금은 사업주가 파산·폐업 등으로 임금을 지급할 수 없을 때, 근로복지공단이 사업주를 대신하여 근로자에게 미지급 임금을 지급하는 제도입니다.</strong></p>\n<p>임금채권보장법에 근거하며, 사업주가 고용보험에 가입한 사업장의 근로자라면 신청할 수 있습니다.</p>\n<ul>\n<li><strong>일반 체당금</strong> — 법원의 파산선고·회생절차 개시결정이 있는 경우에 신청합니다.</li>\n<li><strong>간이 체당금(소액 체당금)</strong> — 법원 절차 없이도 노동부의 체불 확인만으로 신청할 수 있습니다. 소규모 사업장 폐업 시 주로 활용됩니다.</li>\n<li><strong>지급 항목</strong> — 미지급 임금, 퇴직금, 휴업수당이 지급 대상입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 체당금은 "근로자가 받아야 할 돈을 국가가 먼저 준다"는 것입니다. 사업주에 대한 구상권은 공단이 행사합니다.</blockquote>',
      },
      {
        title: '체당금 신청 자격과 한도',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일 기준 최종 3개월분 임금과 최종 3년분 퇴직금, 최종 3개월분 휴업수당이 한도입니다.</strong></p>\n<ul>\n<li><strong>일반 체당금 한도</strong> — 나이에 따라 월 상한액이 달라집니다. 30세 미만: 월 220만원, 30~39세: 월 310만원, 40세 이상: 월 350만원(2025년 기준, 매년 변동).</li>\n<li><strong>간이 체당금 한도</strong> — 임금·퇴직금·휴업수당 합산 최대 1,000만원입니다.</li>\n<li><strong>신청 기한</strong> — 일반 체당금은 파산선고 등이 있은 날부터 2년 이내, 간이 체당금은 체불 확인 후 1년 이내에 신청해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>체당금 신청 자격과 예상 수령액, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 내역, 퇴직일, 나이를 입력하면 체당금 수령 가능 금액을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체당금 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">노동부 체불 확인 → 근로복지공단 신청 → 지급 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계: 고용노동부 체불 확인</strong> — 관할 노동지청에 임금체불 진정을 제기하고, 체불 사실 확인서를 발급받습니다.</li>\n<li><strong>2단계: 근로복지공단 신청</strong> — 체불 확인서, 근로계약서(또는 재직 증빙), 급여 통장 사본을 첨부하여 근로복지공단에 체당금을 신청합니다.</li>\n<li><strong>3단계: 심사 및 지급</strong> — 공단이 체당금 지급 여부를 심사하고, 승인 시 근로자 계좌로 지급합니다. 심사 기간은 약 2~4주입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 체당금은 신청 후 비교적 빠르게(2~4주) 지급됩니다. 사업주를 상대로 소송하는 것보다 훨씬 빠른 구제 수단입니다.</blockquote>',
      },
      {
        title: '체당금 신청 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">체당금을 받아도 사업주에 대한 잔여 청구권은 유지됩니다.</strong></p>\n<ul>\n<li><strong>한도 초과분</strong> — 체당금 한도를 초과하는 미지급 임금은 사업주에게 직접 청구해야 합니다.</li>\n<li><strong>4대보험 미가입</strong> — 사업주가 고용보험에 가입하지 않은 경우에도 체당금 신청이 가능합니다. 근로자의 피해가 사업주의 미가입으로 인해 발생한 것이기 때문입니다.</li>\n<li><strong>사업주 허위폐업</strong> — 사업주가 체당금을 악용하기 위해 허위 폐업하는 경우가 있습니다. 이는 사기죄에 해당하며, 의심 시 근로감독관에게 알리세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 체당금 지급과 임금채권 보장',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 임금채권보장기금의 체당금 제도 취지는 사업주의 지급 불능 상태에서 근로자의 생존권을 보호하는 것이며, 사업주의 도산 여부는 실질적으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '사업주가 공식 파산 선고를 받지 않더라도 실질적으로 사업을 계속할 수 없는 상태라면 간이 체당금을 신청할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 폐업하지 않았는데도 체당금을 받을 수 있나요?',
        answer:
          '<p>간이 체당금은 폐업뿐 아니라 사업주가 임금을 지급할 능력이 없다고 인정되는 경우에도 신청 가능합니다. 노동부의 체불 확인이 핵심 요건입니다.</p>',
      },
      {
        question: '체당금을 받으면 사업주에게 더 이상 청구할 수 없나요?',
        answer:
          '<p>체당금 한도 내에서 받은 금액에 대해서는 공단이 사업주에게 구상권을 행사합니다. 한도를 초과하는 금액은 근로자가 직접 사업주에게 청구할 수 있습니다.</p>',
      },
      {
        question: '일용직이나 아르바이트생도 체당금을 받을 수 있나요?',
        answer:
          '<p>근로기준법상 근로자이면 고용 형태와 관계없이 체당금 신청이 가능합니다. 일용직, 아르바이트, 계약직 모두 대상입니다.</p>',
      },
      {
        question: '체당금 신청에 변호사가 필요한가요?',
        answer:
          '<p>변호사 없이 본인이 직접 신청할 수 있습니다. 근로복지공단 지사에 방문하면 담당자가 작성을 도와줍니다. 고용노동부 1350 상담 전화도 활용하세요.</p>',
      },
      {
        question: '체당금을 받기까지 보통 얼마나 걸리나요?',
        answer:
          '<p>노동부 체불 확인서 발급에 2~4주, 공단 심사에 2~4주로 총 1~2개월 정도 소요됩니다. 체불 확인서를 빨리 발급받을수록 전체 기간이 단축됩니다.</p>',
      },
    ],
    cta: { text: '체당금 신청 자격 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '체당금 상세 안내', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '프리랜서 근로자성', href: '/guide/wage/wage-freelancer-worker-status-claim' },
    ],
  },
];
