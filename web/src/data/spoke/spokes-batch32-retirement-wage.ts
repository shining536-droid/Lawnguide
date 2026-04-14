import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 퇴직금 5개 + 임금체불 3개 + 포괄임금 2개 (batch32)
// 1. retirement-wage-peak-severance — 임금피크제 적용 시 퇴직금 산정 기준 (수치기한형)
//    "이 페이지는 [임금피크제 적용으로 급여가 줄어든 근로자]의 [감소된 임금 기준으로 퇴직금이 산정되는지 걱정되는 상황]에서 [임금피크제 적용 시 퇴직금 산정 기준과 유리한 계산 방법]을 돕는 페이지다."
// 2. retirement-merger-successor-liability — 회사 합병·양도 시 퇴직금 승계 책임 (상황형)
//    "이 페이지는 [회사가 합병되거나 양도된 근로자]의 [새 회사가 퇴직금 지급 의무를 부담하는지 모르는 상황]에서 [합병·양도 시 퇴직금 승계 책임과 청구 방법]을 돕는 페이지다."
// 3. retirement-installment-payment-invalid — 퇴직금 분할지급 약정 무효 판단 (절차형)
//    "이 페이지는 [월급에 퇴직금을 포함해 분할 지급받은 근로자]의 [이미 받은 금액이 퇴직금으로 인정되는지 모르는 상황]에서 [퇴직금 분할지급 약정의 무효 판단과 추가 청구 방법]을 돕는 페이지다."
// 4. retirement-overseas-dispatch-claim — 해외파견 근로자 퇴직금 청구 (절차형)
//    "이 페이지는 [해외 법인에 파견되어 근무한 근로자]의 [국내 본사와 해외법인 중 어디에 퇴직금을 청구해야 하는지 모르는 상황]에서 [해외파견 근로자의 퇴직금 청구 대상과 산정 방법]을 돕는 페이지다."
// 5. retirement-disciplinary-fired-pay — 징계해고 퇴직금 지급 의무 (자격확인형)
//    "이 페이지는 [징계해고를 당한 근로자]의 [징계해고 시에도 퇴직금을 받을 수 있는지 모르는 상황]에서 [징계해고와 퇴직금 수급권의 관계와 청구 방법]을 돕는 페이지다."
// 6. wage-unused-annual-leave-claim — 미사용 연차수당 청구 방법 (절차형)
//    "이 페이지는 [퇴직 시 사용하지 못한 연차가 남은 근로자]의 [미사용 연차를 수당으로 청구할 수 있는지 모르는 상황]에서 [미사용 연차수당 청구 절차와 계산법]을 돕는 페이지다."
// 7. wage-subcontract-original-liability — 하도급 원청 임금 연대책임 (상황형)
//    "이 페이지는 [하도급 업체에서 근무하다 임금을 못 받은 근로자]의 [하도급 업체가 돈이 없어 원청에 청구할 수 있는지 모르는 상황]에서 [건설업 등 원청의 임금 연대 지급 의무와 청구 절차]를 돕는 페이지다."
// 8. wage-final-pay-delay-penalty — 퇴직 후 최종급여 14일 지연 벌금 (수치기한형)
//    "이 페이지는 [퇴직 후 14일이 지나도 최종 급여를 받지 못한 근로자]의 [지연 시 사업주에게 어떤 제재가 가능한지 모르는 상황]에서 [근로기준법 제36조 14일 규정과 지연이자·형사처벌 방법]을 돕는 페이지다."
// 9. wage-pogual-delivery-courier — 택배·배달기사 포괄임금제 (상황형)
//    "이 페이지는 [택배·배달 기사로 포괄임금제 계약을 한 근로자]의 [실제 근로시간 대비 수당을 제대로 받고 있는지 모르는 상황]에서 [배달·택배 기사의 포괄임금제 유효성 판단과 미지급 수당 청구법]을 돕는 페이지다."
// 10. wage-pogual-factory-shift — 공장 교대근무 포괄임금제 (수치기한형)
//     "이 페이지는 [공장에서 교대근무를 하며 포괄임금제를 적용받는 근로자]의 [야간·연장근로수당이 제대로 계산되고 있는지 모르는 상황]에서 [교대근무 포괄임금제의 적법 요건과 차액 청구 방법]을 돕는 페이지다."
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch32RetirementWage: SpokePage[] = [
  // ── 퇴직금 1. 임금피크제 퇴직금 산정 기준 ──
  {
    domain: 'retirement',
    slug: 'retirement-wage-peak-severance',
    keyword: '임금피크제 퇴직금 산정 기준',
    questionKeyword: '임금피크제로 급여가 줄었는데 퇴직금도 줄어드나요?',
    ctaKeyword: '임금피크제 퇴직금 산정 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '임금피크제 퇴직금 산정 기준 3가지 핵심 | 로앤가이드',
      description:
        '임금피크제로 급여가 줄었는데 퇴직금까지 줄어들까 걱정된다면, 퇴직금 산정 기준과 유리한 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>정년을 3년 앞두고 임금피크제가 적용되었습니다. 연봉이 30% 줄었는데, 퇴직금도 줄어든 급여를 기준으로 계산되는 건 아닌지 걱정됩니다. 30년 가까이 다닌 회사에서 마지막에 손해를 보는 건 아닌지 불안합니다. 근로기준법상 퇴직금은 퇴직 전 3개월 평균임금을 기준으로 산정하므로, 임금피크제 적용 후 줄어든 급여가 그대로 기준이 될 수 있습니다.</p>',
    sections: [
      {
        title: '임금피크제와 퇴직금 산정의 관계',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 퇴직 직전 3개월 평균임금으로 계산되므로, 임금피크제 적용 후 줄어든 급여가 기준이 됩니다.</strong></p>\n<ul>\n<li><strong>평균임금 원칙</strong> — 근로기준법 제2조에 따라 퇴직 전 3개월간 지급된 임금 총액을 기준으로 산정합니다. 임금피크제로 감소한 급여가 그대로 반영됩니다.</li>\n<li><strong>중간정산 활용</strong> — 임금피크제 적용 직전에 퇴직금 중간정산을 하면, 감소 전 급여를 기준으로 그때까지의 퇴직금을 확보할 수 있습니다.</li>\n<li><strong>확정급여형(DB) 퇴직연금</strong> — DB형에 가입되어 있다면 퇴직 시점 평균임금이 기준이므로 임금피크제의 영향을 직접 받습니다. 사전에 중간정산 또는 제도 변경을 검토하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임금피크제 적용 전에 중간정산을 하지 않으면, 줄어든 급여가 전체 퇴직금의 산정 기준이 됩니다.</blockquote>',
      },
      {
        title: '임금피크제 적용 전 퇴직금을 지키는 방법',
        content:
          '<p><strong style="color:#1e3a5f">임금피크제 적용은 근로자퇴직급여보장법 제8조에 따른 중간정산 사유에 해당합니다.</strong></p>\n<ol>\n<li><strong>중간정산 신청</strong> — 임금피크제 적용 직전에 사용자에게 퇴직금 중간정산을 요청합니다. 임금이 줄어드는 경우는 법정 중간정산 사유에 해당하므로 사용자가 거부할 수 없습니다.</li>\n<li><strong>확정기여형(DC) 전환</strong> — DC형으로 전환하면 매년 연봉의 1/12 이상을 적립하므로, 감소 전 기간의 적립금은 보존됩니다.</li>\n<li><strong>임금피크제 합의서 확인</strong> — 임금피크제 도입 시 퇴직금 산정 방식에 대한 별도 합의가 있는지 확인하세요. 일부 사업장은 감소 전 급여를 기준으로 퇴직금을 산정하기로 합의하기도 합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>임금피크제 적용 후 퇴직금이 얼마나 줄어드는지, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">감소 전후 급여와 근속연수를 입력하면 퇴직금 차이를 무료로 분석합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임금피크제 자체의 유효성 확인',
        content:
          '<p><strong style="color:#1e3a5f">임금피크제가 적법하게 도입되지 않았다면, 감소 전 임금을 기준으로 퇴직금을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>취업규칙 불이익 변경</strong> — 임금피크제 도입은 취업규칙의 불이익 변경에 해당하므로, 근로자 과반수의 동의가 필요합니다. 동의 절차 없이 도입되었다면 무효를 주장할 수 있습니다.</li>\n<li><strong>합리적 보상 조치</strong> — 대법원은 임금피크제의 유효성을 판단할 때 임금 감소에 대한 합리적 대상 조치(고용 보장, 퇴직금 중간정산 등)가 있었는지를 고려합니다.</li>\n<li><strong>연령차별 문제</strong> — 고령자고용법상 합리적 이유 없는 연령 차별은 금지됩니다. 임금피크제가 단순히 나이를 이유로 임금을 삭감한 것이라면 무효 가능성이 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임금피크제가 적법하게 도입되지 않았다면, 감소 전 임금으로 퇴직금을 재산정할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 불이익 변경과 퇴직금 산정',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 근로기준법 제94조에 따른 집단적 동의를 받아 근로자에게 불리한 내용으로 취업규칙이 변경된 경우, 변경된 취업규칙의 기준에 따라 그보다 유리한 근로조건을 정한 기존의 개별 근로계약의 내용도 변경된다고 판시했습니다.',
        takeaway:
          '임금피크제가 적법한 절차(근로자 과반수 동의)를 거쳐 도입되었다면, 변경된 임금을 기준으로 퇴직금이 산정됩니다. 도입 절차의 적법성을 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '임금피크제 적용 전에 중간정산을 하면 퇴직금이 보장되나요?',
        answer:
          '<p>중간정산 시점까지의 퇴직금은 감소 전 급여를 기준으로 계산됩니다. 이후 기간은 줄어든 급여가 기준이 되므로, 중간정산으로 기존 퇴직금을 확보하는 것이 유리합니다.</p>',
      },
      {
        question: '임금피크제에 동의하지 않았는데 급여가 줄었으면 어떻게 하나요?',
        answer:
          '<p>취업규칙 불이익 변경에 근로자 과반수 동의가 없었다면, 변경 전 임금을 기준으로 차액을 청구할 수 있습니다. 노동부 진정이나 민사소송으로 대응하세요.</p>',
      },
      {
        question: 'DB형 퇴직연금인데 임금피크제 적용 후 어떻게 해야 하나요?',
        answer:
          '<p>DB형은 퇴직 시점 평균임금이 기준이므로 임금피크제의 영향을 받습니다. DC형으로 전환하거나 중간정산을 통해 감소 전 급여 기준 퇴직금을 확보하는 방법을 검토하세요.</p>',
      },
      {
        question: '임금피크제로 연봉이 50% 줄었는데 퇴직금도 반으로 줄어드나요?',
        answer:
          '<p>퇴직금은 퇴직 전 3개월 평균임금 × 근속연수로 계산됩니다. 평균임금이 50% 줄면 전체 근속연수에 대한 퇴직금이 줄어든 급여 기준으로 산정되므로, 중간정산 없이는 큰 손해가 발생합니다.</p>',
      },
      {
        question: '임금피크제 적용 후 퇴직금 중간정산을 회사가 거부할 수 있나요?',
        answer:
          '<p>근로자퇴직급여보장법 시행령 제3조에 따라 임금이 줄어드는 경우는 중간정산 사유에 해당합니다. 법정 사유이므로 사용자가 정당한 이유 없이 거부할 수 없습니다.</p>',
      },
    ],
    cta: { text: '임금피크제 퇴직금 영향 AI로 계산하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 중간정산 가이드', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },

  // ── 퇴직금 2. 회사 합병·양도 시 퇴직금 승계 ──
  {
    domain: 'retirement',
    slug: 'retirement-merger-successor-liability',
    keyword: '회사 합병 양도 퇴직금 승계',
    questionKeyword: '회사가 합병되었는데 퇴직금은 누가 지급하나요?',
    ctaKeyword: '회사 합병 퇴직금 승계 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '회사 합병·양도 퇴직금 승계 4단계 확인법 | 로앤가이드',
      description:
        '회사가 합병되거나 양도되었는데 퇴직금을 누가 지급해야 하는지 모르겠다면, 승계 책임과 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>10년 넘게 다니던 회사가 다른 기업에 인수합병되었습니다. 새 회사에서 기존 근속연수를 인정해주겠다고 했지만, 정작 퇴직할 때 "이전 회사 기간은 우리 책임이 아니다"라고 할까봐 걱정됩니다. 영업양도가 이루어지면 근로관계가 양수 기업에 포괄적으로 승계되는 것이 원칙이지만, 실무에서는 분쟁이 자주 발생합니다.</p>',
    sections: [
      {
        title: '합병·양도 시 퇴직금 승계의 기본 원칙',
        content:
          '<p><strong style="color:#1e3a5f">영업양도가 이루어지면 근로관계는 양수기업에 포괄적으로 승계됩니다. 퇴직금 지급 의무도 함께 이전됩니다.</strong></p>\n<ul>\n<li><strong>포괄 승계 원칙</strong> — 합병의 경우 상법상 합병 후 존속회사(또는 신설회사)가 소멸회사의 모든 권리·의무를 승계합니다. 퇴직금 지급 의무도 당연히 포함됩니다.</li>\n<li><strong>영업양도의 경우</strong> — 사업의 동일성이 유지되면서 일체로 이전되면 영업양도로 인정되어, 근로자의 근로관계가 양수기업에 승계됩니다.</li>\n<li><strong>계속근로 인정</strong> — 양도 전후의 근무기간이 통산되어 퇴직금 산정의 기초가 됩니다. 양수기업이 "이전 기간은 모른다"고 주장할 수 없습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 합병·양도 시 퇴직금 의무는 새 회사가 전부 부담합니다. 근속연수도 처음 입사일부터 계산합니다.</blockquote>',
      },
      {
        title: '퇴직·재입사 형식을 거친 경우',
        content:
          '<p><strong style="color:#1e3a5f">양도·양수 기업의 결정에 따라 퇴직·재입사 형식을 거쳤더라도, 실질적으로 근로관계가 계속되었다면 근속연수는 통산됩니다.</strong></p>\n<ul>\n<li><strong>형식적 퇴직의 무효</strong> — 대법원은 근로자의 자유로운 의사가 아닌, 기업의 경영방침에 의한 일방적 결정으로 퇴직·재입사가 이루어진 경우 근로관계의 단절을 인정하지 않습니다.</li>\n<li><strong>퇴직금 정산의 효력</strong> — 양도 시 퇴직금을 정산받았더라도, 자유의사에 의한 것이 아니라면 이미 받은 금액은 공제하되 전체 근속기간을 기준으로 퇴직금을 재산정할 수 있습니다.</li>\n<li><strong>자유의사 입증</strong> — 근로자가 자유의사로 퇴직·재입사를 선택했다는 점은 사용자가 입증해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>합병·양도 후 퇴직금 청구 대상, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">양도 형태와 근무 기간을 입력하면 퇴직금 청구 상대방과 산정 방법을 무료로 분석합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합병·양도 시 근로자가 지금 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">합병·양도 과정에서 퇴직금을 지키려면 다음 3가지를 반드시 확인하세요.</strong></p>\n<ol>\n<li><strong>근로관계 승계 여부 확인</strong> — 새 회사에서 기존 근로조건(근속연수, 임금, 직급 등)을 그대로 인정하는지 서면으로 확인받으세요.</li>\n<li><strong>퇴직금 정산 제안 거부</strong> — 양도 시 퇴직금을 먼저 정산하자는 제안은 신중하게 판단하세요. 정산 후 재입사하면 근속연수가 초기화될 수 있습니다.</li>\n<li><strong>근로계약서 재작성 시 주의</strong> — 새 회사와 근로계약서를 다시 쓸 때, 기존 입사일을 기준으로 근속연수를 인정하는 조항이 포함되었는지 확인하세요.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 양도 전 근로계약서, 급여명세서, 사내 공지문 등을 반드시 보관하세요. 나중에 근속연수를 다툴 때 핵심 증거가 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 근로관계 포괄 승계',
        summary:
          '대법원 2004다34790 사건(대법원, 2005.02.25 선고)에서 법원은 기업이 사업부문의 일부를 양도하면서 근로자들의 소속도 변경시킨 경우, 해당 근로자들의 근로관계가 양수기업에 포괄적으로 승계되어 근로의 계속성이 유지된다고 판시했습니다.',
        takeaway:
          '회사가 양도되면서 퇴직·재입사 형식을 거쳤더라도 근로자의 자유의사가 아닌 기업의 경영방침에 의한 것이라면 근속연수는 통산됩니다. 양도 과정의 문서를 꼼꼼히 보관하세요.',
      },
    ],
    faq: [
      {
        question: '회사가 합병되면 퇴직금을 다시 계산해야 하나요?',
        answer:
          '<p>합병 시에는 근로관계가 그대로 승계되므로 퇴직금을 새로 계산할 필요가 없습니다. 퇴직할 때 처음 입사일부터 전체 근속연수를 기준으로 산정합니다.</p>',
      },
      {
        question: '양도 시 퇴직금을 한 번 정산받았는데 다시 청구할 수 있나요?',
        answer:
          '<p>자유의사가 아닌 회사의 일방적 결정으로 퇴직금을 정산받았다면, 기존 근속기간을 포함한 전체 퇴직금에서 이미 받은 금액을 공제한 차액을 청구할 수 있습니다.</p>',
      },
      {
        question: '영업양도인지 단순 자산양도인지 어떻게 구분하나요?',
        answer:
          '<p>인적·물적 조직을 동일성 유지하면서 일체로 이전하면 영업양도입니다. 건물이나 기계만 넘기고 인력은 유지하지 않으면 자산양도로, 이 경우 근로관계는 승계되지 않습니다.</p>',
      },
      {
        question: '합병 후 새 회사에서 해고당하면 이전 회사 기간도 퇴직금에 포함되나요?',
        answer:
          '<p>합병으로 근로관계가 승계된 이상, 해고 사유에 관계없이 이전 회사 근무기간도 퇴직금 산정에 포함됩니다.</p>',
      },
    ],
    cta: { text: '회사 합병·양도 퇴직금 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },

  // ── 퇴직금 3. 퇴직금 분할지급 약정 무효 ──
  {
    domain: 'retirement',
    slug: 'retirement-installment-payment-invalid',
    keyword: '퇴직금 분할지급 약정 무효',
    questionKeyword: '월급에 퇴직금이 포함되어 있다고 했는데 퇴직금을 더 받을 수 있나요?',
    ctaKeyword: '퇴직금 분할지급 무효 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 분할지급 약정 무효 — 추가 청구 3단계 | 로앤가이드',
      description:
        '월급에 퇴직금이 포함되어 있다고 들었는데 퇴직 시 퇴직금을 더 받을 수 있는지 궁금하다면, 분할지급 무효 여부를 지금 확인하세요.',
    },
    intro:
      '<p>입사할 때 "월급에 퇴직금이 포함되어 있다"는 설명을 들었습니다. 매달 급여명세서에 \'퇴직금 분할분\'이라는 항목이 있었습니다. 그런데 퇴직하니 "이미 매달 지급했으니 별도 퇴직금은 없다"고 합니다. 근로자퇴직급여보장법은 퇴직금을 퇴직 시 일시금으로 지급하도록 규정하고 있어, 재직 중 분할지급하기로 한 약정은 원칙적으로 무효입니다.</p>',
    sections: [
      {
        title: '퇴직금 분할지급 약정이 무효인 이유',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 제8조 제2항은 퇴직금을 퇴직 시 일시금으로 지급하도록 강제합니다. 이를 위반한 분할지급 약정은 무효입니다.</strong></p>\n<ul>\n<li><strong>강행규정 위반</strong> — 퇴직금은 퇴직이라는 사실이 발생해야 청구권이 생기는 후불적 임금입니다. 재직 중 매달 나누어 지급하는 약정은 법률에 위반되어 무효입니다.</li>\n<li><strong>이미 받은 금액의 효력</strong> — 무효인 분할지급으로 받은 금액은 퇴직금이 아니라 \'임금\'으로 봅니다. 따라서 퇴직 시 퇴직금 전액을 별도로 청구할 수 있습니다.</li>\n<li><strong>부당이득 반환 문제</strong> — 사용자가 이미 지급한 금액의 반환을 주장할 수 있으나, 근로자의 퇴직금 청구권과 상계할 수 없으므로 실질적으로 근로자에게 유리합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "이미 매달 줬으니 퇴직금은 없다"는 주장은 법적으로 통하지 않습니다. 퇴직금 전액을 별도로 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '예외 — 실질적 분할 약정으로 인정되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">단, 실질적으로 퇴직금의 중간정산에 해당하는 경우에는 유효하게 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>중간정산 요건 충족</strong> — 법정 중간정산 사유에 해당하고 근로자가 서면으로 요청한 경우에는 유효한 퇴직금 정산으로 인정됩니다.</li>\n<li><strong>확정기여형(DC) 퇴직연금</strong> — DC형 퇴직연금의 부담금 납입은 적법한 퇴직금 제도이므로 분할지급과 다릅니다.</li>\n<li><strong>명칭이 아닌 실질 판단</strong> — 급여에 \'퇴직금\'이라는 명칭이 붙어 있어도 실질적으로 임금의 일부에 불과하다면 분할지급 약정 자체가 성립하지 않습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>월급에 포함된 퇴직금 분할분, 별도 청구가 가능한지 AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">급여 구조와 근로계약 내용을 입력하면 추가 청구 가능 금액을 무료로 확인합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직금 분할지급 무효 주장 절차',
        content:
          '<p><strong style="color:#1e3a5f">분할지급 약정이 무효임을 주장하고 퇴직금 전액을 받는 절차입니다.</strong></p>\n<ol>\n<li><strong>1단계: 증거 확보</strong> — 근로계약서, 급여명세서(퇴직금 분할 항목 표시), 취업규칙을 확보합니다.</li>\n<li><strong>2단계: 사용자에게 서면 청구</strong> — 퇴직금 분할지급 약정이 무효임을 근거로 퇴직금 전액 지급을 서면으로 요청합니다.</li>\n<li><strong>3단계: 고용노동부 진정</strong> — 사용자가 거부하면 관할 노동지청에 퇴직금 미지급 진정을 제기합니다.</li>\n<li><strong>4단계: 민사소송</strong> — 진정으로 해결되지 않으면 퇴직금 지급 청구 소송을 제기합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소멸시효는 퇴직일로부터 3년입니다. 퇴직 후 빠르게 대응하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 분할 약정의 유효성 판단',
        summary:
          '대법원 2018다244877 사건(대법원, 2022.03.17 선고)에서 법원은 사용자와 근로자가 체결한 약정이 실질적으로 임금을 정한 것에 불과함에도 퇴직금 분할 약정의 형식만을 취한 경우, 실질적 퇴직금 분할 약정이 존재한다고 보기 어렵다고 판시했습니다.',
        takeaway:
          '급여에 \'퇴직금 분할분\'이라는 항목이 있어도, 실질적으로 임금에 불과하다면 퇴직금 분할지급으로 인정되지 않습니다. 퇴직 시 퇴직금 전액을 별도로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '매달 받은 \'퇴직금 분할분\'은 돌려줘야 하나요?',
        answer:
          '<p>사용자가 부당이득 반환을 청구할 수는 있지만, 퇴직금 채권과 상계할 수 없고, 별도 소송을 통해야 합니다. 실무상 사용자가 반환 소송을 제기하는 경우는 드뭅니다.</p>',
      },
      {
        question: '1년 미만 근무자도 분할지급 무효를 주장할 수 있나요?',
        answer:
          '<p>퇴직금 수급 요건은 1년 이상 계속근로입니다. 1년 미만이면 퇴직금 청구권 자체가 발생하지 않으므로 분할지급 무효를 주장하더라도 퇴직금을 받을 수 없습니다.</p>',
      },
      {
        question: '근로계약서에 "퇴직금 포함 연봉"이라고 적혀 있으면 유효한가요?',
        answer:
          '<p>근로계약서에 기재되어 있어도 재직 중 퇴직금을 분할 지급하기로 한 약정은 강행규정 위반으로 무효입니다. 퇴직 시 별도로 퇴직금을 청구할 수 있습니다.</p>',
      },
      {
        question: '퇴직금 분할지급 무효 주장의 소멸시효는 언제부터인가요?',
        answer:
          '<p>퇴직금 청구권의 소멸시효는 퇴직일로부터 3년입니다. 매달 받은 분할분과 관계없이 퇴직일을 기준으로 산정합니다.</p>',
      },
      {
        question: 'DC형 퇴직연금 부담금을 매달 납입하는 것도 분할지급인가요?',
        answer:
          '<p>DC형 퇴직연금 부담금 납입은 적법한 퇴직연금 제도의 운영이므로 분할지급과 다릅니다. 다만 부담금을 근로자 임금에서 공제하면서 납입한 경우에는 별도의 문제가 됩니다.</p>',
      },
    ],
    cta: { text: '퇴직금 분할지급 무효 여부 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 중간정산 가이드', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
    ],
  },

  // ── 퇴직금 4. 해외파견 근로자 퇴직금 청구 ──
  {
    domain: 'retirement',
    slug: 'retirement-overseas-dispatch-claim',
    keyword: '해외파견 근로자 퇴직금 청구',
    questionKeyword: '해외 법인에 파견 근무했는데 퇴직금은 어디에 청구하나요?',
    ctaKeyword: '해외파견 퇴직금 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외파견 근로자 퇴직금 청구 — 대상 판단 4단계 | 로앤가이드',
      description:
        '해외법인에 파견되어 근무했는데 퇴직금을 국내 본사에 청구할 수 있는지 궁금하다면, 청구 대상과 산정 방법을 지금 확인하세요.',
    },
    intro:
      '<p>국내 본사에서 5년간 근무한 뒤, 해외 현지법인에 3년간 파견되어 일했습니다. 이제 퇴직하려는데 본사는 "해외 근무기간은 현지법인 소속이었다"고 하고, 해외법인은 "한국 본사에서 파견된 것"이라고 합니다. 양쪽 모두 퇴직금 지급 책임을 회피하는 상황에서, 어디에 퇴직금을 청구해야 하는지 혼란스럽습니다.</p>',
    sections: [
      {
        title: '해외파견 근로자의 퇴직금 청구 대상',
        content:
          '<p><strong style="color:#1e3a5f">해외파견 근로자의 퇴직금 청구 대상은 실질적 근로관계가 누구와 유지되었느냐에 따라 결정됩니다.</strong></p>\n<ul>\n<li><strong>국내 본사가 사용자인 경우</strong> — 파견 기간 중 국내 본사의 지휘·감독을 받고, 본사가 급여를 지급하며, 인사권을 행사했다면 본사가 퇴직금 지급 의무를 부담합니다.</li>\n<li><strong>해외법인이 사용자인 경우</strong> — 현지법인과 별도 근로계약을 체결하고, 현지법인의 지휘·감독을 받으며, 현지 급여 체계를 따랐다면 해외법인에 청구해야 합니다.</li>\n<li><strong>이중 사용자 관계</strong> — 본사와 현지법인 모두에 대해 근로자성이 인정되면, 각각에 퇴직금을 청구할 수 있는 경우도 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파견계약서, 급여 지급 주체, 인사명령권 행사 주체가 퇴직금 청구 대상을 결정하는 핵심 요소입니다.</blockquote>',
      },
      {
        title: '해외파견 기간의 근속연수 산정',
        content:
          '<p><strong style="color:#1e3a5f">국내 본사와의 근로관계가 유지된 해외파견 기간은 퇴직금 산정의 기초가 되는 계속근로기간에 포함됩니다.</strong></p>\n<ul>\n<li><strong>파견 전 퇴직금 정산 여부</strong> — 파견 전에 퇴직금을 정산받았다면, 자유의사에 의한 것인지가 중요합니다. 회사의 일방적 결정이었다면 전체 근속기간을 통산할 수 있습니다.</li>\n<li><strong>평균임금 산정 기준</strong> — 해외 근무 시 국내 급여와 해외 수당이 병행 지급된 경우, 근로의 대상으로 지급된 모든 금품이 평균임금에 포함됩니다.</li>\n<li><strong>환율 적용</strong> — 해외에서 외화로 급여를 받은 경우 퇴직 시점의 환율을 기준으로 원화 환산하여 평균임금을 산정합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>해외파견 기간 포함 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">파견 형태와 급여 구조를 입력하면 퇴직금 청구 대상과 예상 금액을 무료로 분석합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해외파견 퇴직금 청구 시 준비 서류',
        content:
          '<p><strong style="color:#1e3a5f">해외파견 퇴직금 분쟁은 증거 확보가 핵심입니다. 다음 서류를 파견 기간 중에 미리 확보하세요.</strong></p>\n<ol>\n<li><strong>파견명령서·발령문서</strong> — 국내 본사가 발행한 해외파견 명령서로, 본사와의 근로관계 유지를 증명합니다.</li>\n<li><strong>급여 지급 내역</strong> — 국내·해외 양쪽에서 받은 급여의 통장 거래내역과 급여명세서를 확보합니다.</li>\n<li><strong>해외법인 근로계약서</strong> — 현지법인과 별도 계약을 체결했는지, 그 내용이 무엇인지 확인합니다.</li>\n<li><strong>업무 보고 체계</strong> — 실질적으로 누구에게 업무를 보고했는지를 보여주는 이메일, 메신저 기록 등을 보관합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파견 종료 후에는 증거 확보가 어려워집니다. 파견 기간 중에 모든 문서를 복사·저장해 두세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외파견과 근로관계 단절 판단',
        summary:
          '대법원 97다2306 사건(대법원, 1997.09.09 선고)에서 법원은 근로자가 해외파견을 위해 자유의사로 퇴직하고 퇴직금까지 수령하였다면 근로관계는 유효하게 단절된 것이며, 재입사하여 계속 근무하더라도 퇴직금 산정의 기초가 되는 계속근로연수는 재입사 시점부터 기산해야 한다고 판시했습니다.',
        takeaway:
          '해외파견 전 자유의사로 퇴직금을 정산받았다면 근속연수가 단절됩니다. 반대로 회사의 일방적 지시에 따른 파견이라면 근속연수가 통산될 수 있으므로, 파견 경위를 명확히 기록해 두세요.',
      },
    ],
    faq: [
      {
        question: '해외법인에서 급여를 받았으면 국내 본사에 퇴직금을 청구할 수 없나요?',
        answer:
          '<p>급여 지급 주체만으로 판단하지 않습니다. 인사권, 업무지시권, 근로관계의 실질을 종합적으로 고려합니다. 본사가 파견 명령을 내리고 복귀 후 인사를 관리했다면 본사에 청구할 수 있습니다.</p>',
      },
      {
        question: '해외파견 중 받은 해외수당도 퇴직금 산정에 포함되나요?',
        answer:
          '<p>해외수당이 근로의 대상으로 정기적·일률적·고정적으로 지급되었다면 평균임금에 포함됩니다. 실비 변상 성격의 수당은 제외됩니다.</p>',
      },
      {
        question: '해외법인이 폐업했으면 퇴직금은 어디에 청구하나요?',
        answer:
          '<p>해외법인이 폐업했더라도 국내 본사와의 근로관계가 유지되었다면 본사에 퇴직금을 청구할 수 있습니다. 본사가 해외법인의 설립·운영에 관여했다면 사용자 책임이 인정될 가능성이 높습니다.</p>',
      },
      {
        question: '파견 기간 중 국내·해외 양쪽에서 급여를 받았으면 어떻게 계산하나요?',
        answer:
          '<p>국내 급여와 해외 급여를 합산하여 퇴직 전 3개월 평균임금을 산정합니다. 외화 급여는 퇴직 시점 환율로 환산합니다.</p>',
      },
    ],
    cta: { text: '해외파견 퇴직금 청구 대상 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 퇴직금 5. 징계해고 퇴직금 지급 의무 ──
  {
    domain: 'retirement',
    slug: 'retirement-disciplinary-fired-pay',
    keyword: '징계해고 퇴직금 지급 의무',
    questionKeyword: '징계해고를 당했는데도 퇴직금을 받을 수 있나요?',
    ctaKeyword: '징계해고 퇴직금 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '징계해고 퇴직금 지급 의무 — 수급권 확인 3가지 | 로앤가이드',
      description:
        '징계해고를 당했는데 퇴직금을 받을 수 있는지 걱정된다면, 수급권 여부와 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>회사에서 징계해고 통보를 받았습니다. 5년 넘게 근무했는데, "징계해고는 퇴직금이 없다"고 인사팀이 말합니다. 잘못을 했더라도 그동안 일한 대가까지 없어지는 건 부당하게 느껴집니다. 근로기준법상 퇴직금은 근로의 대가로 지급되는 후불적 임금이므로, 해고 사유와 관계없이 1년 이상 계속근로한 근로자에게는 퇴직금이 지급되어야 합니다.</p>',
    sections: [
      {
        title: '징계해고와 퇴직금 수급권의 관계',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 수급권은 해고 사유에 영향을 받지 않습니다. 징계해고든 권고사직이든 1년 이상 근무했다면 퇴직금을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>퇴직금의 법적 성격</strong> — 퇴직금은 계속근로에 대한 후불적 임금입니다. 해고 사유가 징계이든 경영상 이유이든 관계없이, 1년 이상 계속근로 후 퇴직하면 퇴직금 청구권이 발생합니다.</li>\n<li><strong>퇴직금 포기 약정 무효</strong> — "징계해고 시 퇴직금을 지급하지 않는다"는 취업규칙이나 근로계약 조항은 근로기준법에 위반되어 무효입니다.</li>\n<li><strong>공무원과의 차이</strong> — 공무원은 파면 시 퇴직금(퇴직급여)이 감액되는 규정이 있지만, 민간 근로자는 이러한 규정이 적용되지 않습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "징계해고라서 퇴직금이 없다"는 말은 법적 근거가 없습니다. 퇴직금은 반드시 지급되어야 합니다.</blockquote>',
      },
      {
        title: '징계해고 시 퇴직금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">징계해고를 당했더라도 퇴직금 청구 절차는 일반 퇴직과 동일합니다.</strong></p>\n<ol>\n<li><strong>퇴직금 지급 요청</strong> — 해고일로부터 14일 이내에 퇴직금이 지급되어야 합니다. 서면으로 지급을 요청하세요.</li>\n<li><strong>미지급 시 노동부 진정</strong> — 14일이 지나도 지급하지 않으면 관할 노동지청에 퇴직금 미지급 진정을 제기합니다.</li>\n<li><strong>지연이자 청구</strong> — 퇴직일로부터 14일이 지나면 연 20%의 지연이자가 발생합니다.</li>\n<li><strong>형사고소 병행</strong> — 퇴직금 미지급은 근로기준법 위반으로 3년 이하의 징역 또는 3천만원 이하의 벌금에 해당합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>징계해고 후 퇴직금 청구 방법, AI가 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 경위와 근무 기간을 입력하면 퇴직금 청구 절차와 예상 금액을 무료로 확인합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부당 징계해고 시 추가 대응',
        content:
          '<p><strong style="color:#1e3a5f">징계해고 자체가 부당하다면, 퇴직금 청구와 별도로 부당해고 구제신청을 할 수 있습니다.</strong></p>\n<ul>\n<li><strong>부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 노동위원회에 구제신청을 합니다. 해고가 무효로 판정되면 복직 및 임금 상당액을 받을 수 있습니다.</li>\n<li><strong>해고 서면통지 확인</strong> — 근로기준법 제27조에 따라 해고는 서면으로 통지되어야 합니다. 구두 통지만으로는 해고의 효력이 없습니다.</li>\n<li><strong>퇴직금과 구제신청의 관계</strong> — 부당해고 구제신청과 퇴직금 청구는 별개의 절차입니다. 구제신청 중에도 퇴직금 지급을 요구할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 징계해고가 부당하다고 느끼면 퇴직금 청구와 함께 부당해고 구제신청을 병행하는 것이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구권 사전 포기의 무효',
        summary:
          '대법원 2018다21821 사건(대법원, 2018.07.12 선고)에서 법원은 퇴직금은 계속근로에 대한 후불적 임금 성질을 가지며, 최종 퇴직 시 발생하는 퇴직금청구권을 미리 포기하기로 하는 약정은 무효라고 판시했습니다.',
        takeaway:
          '취업규칙이나 근로계약서에 "징계해고 시 퇴직금을 지급하지 않는다"는 조항이 있더라도 무효입니다. 퇴직금은 어떤 사유로 퇴직하든 반드시 지급되어야 합니다.',
      },
    ],
    faq: [
      {
        question: '횡령이나 배임으로 징계해고되어도 퇴직금을 받을 수 있나요?',
        answer:
          '<p>횡령이나 배임 등 중대한 비위로 징계해고되더라도 퇴직금 수급권은 유지됩니다. 다만 회사가 손해배상 청구를 별도로 할 수는 있습니다.</p>',
      },
      {
        question: '징계해고 시 퇴직금에서 손해배상액을 공제할 수 있나요?',
        answer:
          '<p>퇴직금은 근로기준법에 의해 보호되는 채권이므로 사용자가 일방적으로 손해배상액을 공제할 수 없습니다. 공제하려면 근로자의 동의가 필요합니다.</p>',
      },
      {
        question: '즉시해고 통보를 받았는데 해고예고수당도 받을 수 있나요?',
        answer:
          '<p>근로자의 귀책사유로 인한 해고 중 고용노동부 인정을 받은 경우에는 해고예고수당이 면제됩니다. 그 외의 경우 30일분 이상의 통상임금을 해고예고수당으로 청구할 수 있습니다.</p>',
      },
      {
        question: '징계해고 후 퇴직금 청구 기한은 언제까지인가요?',
        answer:
          '<p>퇴직금 청구권의 소멸시효는 퇴직(해고)일로부터 3년입니다. 지연이자는 14일 경과 후부터 발생하므로 빠르게 청구하는 것이 유리합니다.</p>',
      },
    ],
    cta: { text: '징계해고 퇴직금 수급권 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 시작', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ── 임금체불 6. 미사용 연차수당 청구 방법 ──
  {
    domain: 'wage',
    slug: 'wage-unused-annual-leave-claim',
    keyword: '미사용 연차수당 청구 방법',
    questionKeyword: '퇴직할 때 남은 연차를 수당으로 받을 수 있나요?',
    ctaKeyword: '미사용 연차수당 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '미사용 연차수당 청구 방법 — 계산법과 절차 5단계 | 로앤가이드',
      description:
        '퇴직 시 남은 연차를 수당으로 청구할 수 있는지 궁금하다면, 연차수당 계산법과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>5년간 근무하며 매년 연차를 다 쓰지 못했습니다. 퇴직하면서 남은 연차 15일분을 수당으로 달라고 했더니, 회사는 "연차 사용촉진을 했으니 보상 의무가 없다"고 합니다. 정말 받을 수 없는 걸까요. 근로기준법 제60조에 따라 미사용 연차에 대한 수당 청구권은 원칙적으로 인정되지만, 사용촉진 제도의 적용 여부에 따라 결과가 달라집니다.</p>',
    sections: [
      {
        title: '미사용 연차수당의 발생 요건',
        content:
          '<p><strong style="color:#1e3a5f">1년간 80% 이상 출근한 근로자에게 15일의 유급휴가가 주어지며, 사용하지 못한 연차는 수당으로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>연차 발생 기준</strong> — 1년간 80% 이상 출근 시 15일, 이후 2년마다 1일씩 가산되어 최대 25일까지 부여됩니다.</li>\n<li><strong>수당 산정</strong> — 미사용 연차 1일분 = 통상임금 1일분입니다. 통상임금에는 기본급, 직책수당, 고정 상여금 등이 포함됩니다.</li>\n<li><strong>퇴직 시 발생</strong> — 퇴직하면 남은 연차 전부에 대한 수당 청구권이 발생합니다. 이는 퇴직금과 별개입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 미사용 연차수당은 퇴직금과 별도로 청구할 수 있으며, 미지급 시 근로기준법 위반입니다.</blockquote>',
      },
      {
        title: '연차 사용촉진 제도와 수당 청구의 관계',
        content:
          '<p><strong style="color:#1e3a5f">사용자가 적법하게 연차 사용촉진 절차를 이행했다면, 미사용 연차에 대한 수당 보상 의무가 면제됩니다.</strong></p>\n<ul>\n<li><strong>사용촉진 절차</strong> — ①연차 사용 기간 만료 6개월 전 미사용 일수 통보 + 사용 시기 지정 촉구, ②근로자가 10일 이내 미지정 시 사용자가 지정 — 이 두 단계를 모두 이행해야 합니다.</li>\n<li><strong>절차 미비 시</strong> — 촉구를 서면으로 하지 않았거나, 기한을 지키지 않았거나, 일부 절차를 누락했다면 사용촉진이 무효가 되어 수당을 지급해야 합니다.</li>\n<li><strong>퇴직 시 특례</strong> — 퇴직으로 인해 발생한 연차(당해년도분)는 사용촉진 대상이 아니므로, 퇴직 시 반드시 수당으로 지급되어야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미사용 연차수당이 얼마인지, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">남은 연차 일수와 통상임금을 입력하면 청구 가능 금액을 무료로 확인합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '미사용 연차수당 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">연차수당 미지급 시 노동부 진정부터 민사소송까지 단계별로 대응합니다.</strong></p>\n<ol>\n<li><strong>사용촉진 적법성 확인</strong> — 회사가 사용촉진을 했다고 주장하면, 서면 촉구 시기·방법·내용이 법정 요건을 충족하는지 확인합니다.</li>\n<li><strong>서면 청구</strong> — 미사용 연차 일수, 통상임금, 산정 근거를 명시하여 서면으로 지급을 요청합니다.</li>\n<li><strong>노동부 진정</strong> — 14일 이내 미지급 시 관할 노동지청에 임금 미지급 진정을 제기합니다.</li>\n<li><strong>민사소송</strong> — 진정으로 해결되지 않으면 임금 청구 소송을 제기합니다. 소액사건(3,000만원 이하)은 1회 변론으로 판결이 가능합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 연차수당 청구권의 소멸시효는 3년입니다. 퇴직 후 빠르게 청구해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 연차 사용촉진과 미사용 연차수당',
        summary:
          '대법원 2019다279283 사건(대법원, 2020.02.27 선고)에서 법원은 사용자가 연차휴가 사용촉진 제도를 도입했더라도 근로자가 지정된 휴가일에 출근하여 근로를 제공한 경우, 사용자가 노무 수령을 거부하지 않았다면 미사용 휴가에 대한 보상 의무를 부담한다고 판시했습니다.',
        takeaway:
          '사용촉진을 했더라도 근로자가 출근해서 일했고 회사가 이를 묵인했다면, 연차수당을 지급해야 합니다. 출근 기록과 업무 수행 증거를 보관하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직 당해년도에 발생한 연차도 수당으로 받을 수 있나요?',
        answer:
          '<p>퇴직 당해년도에 비례적으로 발생한 연차는 사용촉진 대상이 아니므로, 미사용분에 대해 수당을 청구할 수 있습니다.</p>',
      },
      {
        question: '연차수당은 평균임금에 포함되어 퇴직금에 영향을 주나요?',
        answer:
          '<p>연차수당이 퇴직 전 3개월 이내에 지급이 확정된 경우 평균임금에 포함될 수 있습니다. 다만 퇴직으로 인해 비로소 발생한 연차수당은 포함 여부가 달라질 수 있습니다.</p>',
      },
      {
        question: '1년 미만 근무자도 연차수당을 받을 수 있나요?',
        answer:
          '<p>1년 미만 근무자도 월 1일씩 연차가 발생합니다(입사일 기준 최대 11일). 이 연차를 사용하지 못했다면 수당으로 청구할 수 있습니다.</p>',
      },
      {
        question: '연차 사용촉진을 이메일로 받았는데 서면으로 인정되나요?',
        answer:
          '<p>이메일도 서면에 해당할 수 있지만, 법정 요건(미사용 일수 통보, 사용 시기 지정 촉구)을 모두 갖추어야 합니다. 단순 안내 이메일만으로는 적법한 사용촉진으로 인정되지 않습니다.</p>',
      },
      {
        question: '연차수당 미지급 시 지연이자도 받을 수 있나요?',
        answer:
          '<p>연차수당도 임금에 해당하므로 퇴직 후 14일이 지나면 연 20%의 지연이자를 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '미사용 연차수당 금액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '지연이자 계산', href: '/guide/wage/unpaid-wage-delay-interest-calculation' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
    ],
  },

  // ── 임금체불 7. 하도급 원청 임금 연대책임 ──
  {
    domain: 'wage',
    slug: 'wage-subcontract-original-liability',
    keyword: '하도급 원청 임금 연대책임',
    questionKeyword: '하청업체가 임금을 안 주는데 원청에 청구할 수 있나요?',
    ctaKeyword: '원청 임금 연대책임 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '하도급 원청 임금 연대책임 — 청구 요건 4가지 | 로앤가이드',
      description:
        '하도급 업체에서 임금을 못 받았는데 원청에 연대 책임을 물을 수 있는지 궁금하다면, 청구 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>건설현장에서 하도급 업체 소속으로 3개월간 일했습니다. 그런데 하도급 업체가 폐업해버리면서 밀린 임금 600만원을 받지 못했습니다. 원청에 연락했더니 "당신과 계약한 적 없다"며 거절합니다. 근로기준법 제44조의2는 건설업 등에서 하수급인이 임금을 지급하지 못한 경우 직상 수급인과 발주자에게 연대 지급 의무를 부과하고 있습니다.</p>',
    sections: [
      {
        title: '원청의 임금 연대 지급 의무',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제44조의2에 따라 건설업 등에서는 직상 수급인이 하수급인의 근로자에게 임금을 연대하여 지급할 의무가 있습니다.</strong></p>\n<ul>\n<li><strong>적용 대상</strong> — 건설업에서 2차 이하 하도급의 경우, 직상 수급인(1차 하도급 업체)이 하수급인(2차 하도급 업체)의 근로자에게 임금 연대 지급 의무를 부담합니다.</li>\n<li><strong>발주자 책임</strong> — 건설산업기본법 제2조에 따른 건설공사에서는 발주자(원청)도 하수급인 근로자에게 임금 연대 지급 의무를 부담할 수 있습니다.</li>\n<li><strong>귀책사유 불문</strong> — 직상 수급인의 귀책사유가 없더라도 하수급인이 임금을 지급하지 못하면 연대 책임이 발생합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 하도급 업체가 폐업하거나 돈이 없어도, 원청(직상 수급인)에 임금을 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '원청에 임금을 청구하는 절차',
        content:
          '<p><strong style="color:#1e3a5f">원청에 연대 책임을 물으려면 다음 절차를 따르세요.</strong></p>\n<ol>\n<li><strong>근로 사실 증명</strong> — 해당 건설현장에서 실제로 근로를 제공했다는 증거를 확보합니다. 출근부, 작업일지, 사진, 동료 근로자의 확인서 등이 필요합니다.</li>\n<li><strong>하수급인의 미지급 확인</strong> — 하도급 업체가 임금을 지급하지 못한 사실을 입증합니다. 급여 미지급 통보, 폐업 사실확인서 등을 준비합니다.</li>\n<li><strong>직상 수급인에게 서면 청구</strong> — 미지급 임금 내역과 연대 지급 의무 근거를 명시하여 서면으로 청구합니다.</li>\n<li><strong>노동부 진정</strong> — 직상 수급인이 거부하면 관할 노동지청에 진정을 제기합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>원청에 임금 연대 청구가 가능한지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">하도급 구조와 미지급 내역을 입력하면 청구 대상과 절차를 무료로 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '건설업 외 업종에서의 원청 책임',
        content:
          '<p><strong style="color:#1e3a5f">건설업 외 업종에서는 근로기준법 제44조에 따라 직상 수급인이 하수급인과 연대하여 임금 지급 의무를 부담합니다.</strong></p>\n<ul>\n<li><strong>일반 업종 적용</strong> — 제조업, 서비스업 등에서도 도급 관계에서 하수급인 근로자에 대한 직상 수급인의 연대 책임이 인정됩니다.</li>\n<li><strong>직상 수급인의 범위</strong> — 원도급인(발주자)이 아닌, 하수급인에게 직접 하도급을 준 직상 수급인이 책임을 부담합니다.</li>\n<li><strong>증거 확보 핵심</strong> — 도급 계약서, 하도급 계약서, 작업 지시 기록이 핵심 증거입니다. 근로를 제공한 현장과 기간을 증명할 수 있는 자료를 꼼꼼히 보관하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 건설업이 아니어도 하도급 구조에서 원청 연대 책임이 인정될 수 있습니다. 도급 관계를 증명하는 서류가 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자 사용사업주의 임금 지급 의무',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 파견근로자 보호법에 따라 직접고용간주의 효과가 발생했음에도 사용사업주가 직접고용을 하지 않은 경우, 파견사업주가 근로자에게 지급한 임금은 사용사업주가 지급해야 할 금액에서 공제되어야 한다고 판시했습니다.',
        takeaway:
          '하도급·파견 구조에서 원청(사용사업주)은 임금 지급 의무를 회피할 수 없습니다. 실질적 근로관계를 기준으로 책임 소재를 판단합니다.',
      },
    ],
    faq: [
      {
        question: '건설업 일용직도 원청에 임금을 청구할 수 있나요?',
        answer:
          '<p>일용직이라도 하도급 업체 소속으로 해당 건설현장에서 근로를 제공했다면 직상 수급인에게 임금 연대 청구가 가능합니다. 출역부나 일지로 근로 사실을 증명하세요.</p>',
      },
      {
        question: '원청이 하도급 업체에 대금을 이미 지급했어도 책임이 있나요?',
        answer:
          '<p>원청이 하수급인에게 도급 대금을 지급했는지 여부와 관계없이 연대 지급 의무가 있습니다. 대금 지급 여부는 원청과 하수급인 사이의 구상권 문제일 뿐입니다.</p>',
      },
      {
        question: '3차, 4차 하도급 근로자도 원청에 청구할 수 있나요?',
        answer:
          '<p>직상 수급인에게만 연대 책임이 인정되므로, 3차 하도급 근로자는 2차 하도급 업체(직상 수급인)에 청구할 수 있습니다. 건설공사의 경우 발주자에게도 책임을 물을 수 있습니다.</p>',
      },
      {
        question: '도급 계약서가 없어도 원청 연대 책임을 주장할 수 있나요?',
        answer:
          '<p>도급 관계는 계약서 외에도 실질적인 도급 형태(작업 지시, 자재 제공, 현장 관리 등)로 증명할 수 있습니다. 현장 사진, 지시 기록, 동료 진술 등을 활용하세요.</p>',
      },
    ],
    cta: { text: '원청 연대 임금 청구 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 형사고소', href: '/guide/wage/unpaid-wage-criminal-complaint-procedure' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
    ],
  },

  // ── 임금체불 8. 퇴직 후 최종급여 14일 지연 벌금 ──
  {
    domain: 'wage',
    slug: 'wage-final-pay-delay-penalty',
    keyword: '퇴직 후 최종급여 14일 지연 벌금',
    questionKeyword: '퇴직 후 14일이 지났는데 최종 급여를 안 주면 어떻게 하나요?',
    ctaKeyword: '최종급여 14일 지연 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '퇴직 후 최종급여 14일 지연 — 벌금·이자 3가지 | 로앤가이드',
      description:
        '퇴직 후 14일이 지나도 최종 급여를 받지 못하고 있다면, 지연이자와 형사처벌 방법을 지금 확인하세요.',
    },
    intro:
      '<p>한 달 전에 퇴직했는데, 아직 마지막 달 급여와 퇴직금을 받지 못했습니다. 회사에 연락하면 "처리 중"이라는 답변만 반복합니다. 근로기준법 제36조는 퇴직일로부터 14일 이내에 임금, 보상금, 그 밖의 금품을 지급하도록 규정하고 있으며, 이를 위반하면 형사처벌과 지연이자가 발생합니다.</p>',
    sections: [
      {
        title: '14일 규정의 구체적 내용',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제36조에 따라 사용자는 퇴직일로부터 14일 이내에 모든 금품을 청산해야 합니다.</strong></p>\n<ul>\n<li><strong>지급 대상 금품</strong> — 최종 월 급여, 퇴직금, 미사용 연차수당, 성과급 등 근로 관계에서 발생한 모든 금품이 포함됩니다.</li>\n<li><strong>14일 기산점</strong> — 퇴직일(마지막 근무일 다음 날)로부터 14일입니다. 권고사직이든 자진퇴사든 동일하게 적용됩니다.</li>\n<li><strong>기한 연장 합의</strong> — 당사자 간 합의로 지급 기일을 연장할 수 있지만, 이 경우에도 합리적 기간이어야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 14일은 달력 기준이며, 토요일·일요일·공휴일도 포함됩니다. 지급 기한 연장 합의가 없다면 15일째부터 위반입니다.</blockquote>',
      },
      {
        title: '14일 경과 시 사용자에게 가해지는 제재',
        content:
          '<p><strong style="color:#1e3a5f">14일이 지나면 연 20% 지연이자와 형사처벌이 동시에 가능합니다.</strong></p>\n<ul>\n<li><strong>지연이자</strong> — 근로기준법 제37조에 따라 미지급 금액에 대해 퇴직일로부터 14일이 지난 날부터 연 20%의 지연이자가 발생합니다. 100만원이 1개월 지연되면 약 16,667원의 이자가 추가됩니다.</li>\n<li><strong>형사처벌</strong> — 임금 미지급은 근로기준법 제109조 위반으로 3년 이하의 징역 또는 3,000만원 이하의 벌금에 해당합니다.</li>\n<li><strong>사업주 명단 공개</strong> — 고용노동부는 임금체불 사업주 명단을 공개할 수 있으며, 이는 사업 운영에 큰 불이익이 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>14일 초과 미지급 금액과 지연이자, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직일과 미지급 금액을 입력하면 지연이자와 대응 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '최종급여 미지급 시 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">단계별로 대응 강도를 높여가면 효과적입니다.</strong></p>\n<ol>\n<li><strong>서면 독촉</strong> — 내용증명으로 미지급 금품 목록, 금액, 지급 기한을 명시하여 발송합니다. 이는 나중에 소송 시 증거가 됩니다.</li>\n<li><strong>노동부 진정</strong> — 서면 독촉에도 미지급이면 관할 노동지청에 진정합니다. 근로감독관이 사업주를 조사하고 시정을 명합니다.</li>\n<li><strong>형사고소</strong> — 진정과 병행하여 형사고소를 하면 사업주에게 강한 압박이 됩니다.</li>\n<li><strong>민사소송 + 가압류</strong> — 사업주가 재산을 은닉할 우려가 있으면 가압류를 신청하고 임금 청구 소송을 제기합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 노동부 진정은 무료이며, 소송보다 빠르게 처리됩니다. 먼저 진정부터 시작하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 항변과 신의성실 원칙',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자가 소멸시효 완성을 주장하는 것이 신의성실의 원칙에 반하여 권리남용으로서 허용될 수 없는 경우가 있으며, 채권자의 권리행사를 방해하거나 시효완성 후 채무를 승인하였다면 시효 항변이 배척될 수 있다고 판시했습니다.',
        takeaway:
          '사업주가 "3년 소멸시효가 지났다"고 주장하더라도, 지급을 약속하며 시간을 끌었거나 채권 행사를 방해한 경우에는 시효 항변이 인정되지 않을 수 있습니다. 사업주와의 통화·문자 기록을 반드시 보관하세요.',
      },
    ],
    faq: [
      {
        question: '14일 이내에 일부만 지급하고 나머지를 안 주면 어떻게 되나요?',
        answer:
          '<p>미지급 잔액에 대해 연 20% 지연이자가 발생하고, 미지급분에 대해 형사처벌도 가능합니다. 일부 지급 사실은 지연이자 산정 시 공제됩니다.</p>',
      },
      {
        question: '회사가 경영 악화로 돈이 없다고 하면 지연이자가 면제되나요?',
        answer:
          '<p>경영 악화는 지연이자 면제 사유가 아닙니다. 다만 법원은 사용자에게 귀책사유가 없는 "상당한 이유"가 있으면 지연이자를 면제할 수 있는데, 단순한 자금난은 이에 해당하지 않습니다.</p>',
      },
      {
        question: '퇴직 후 14일 규정은 아르바이트생에게도 적용되나요?',
        answer:
          '<p>아르바이트, 단기 계약직, 일용직 등 모든 근로자에게 적용됩니다. 근로 형태나 고용 기간에 관계없이 퇴직일로부터 14일 이내에 금품을 청산해야 합니다.</p>',
      },
      {
        question: '지연이자 연 20%는 복리인가요?',
        answer:
          '<p>단리입니다. 미지급 금액 × 20% × (경과일수/365)로 계산합니다. 예를 들어 500만원이 30일 지연되면 약 82,192원의 지연이자가 발생합니다.</p>',
      },
      {
        question: '소멸시효 3년이 지나면 최종급여를 받을 수 없나요?',
        answer:
          '<p>원칙적으로 3년 소멸시효가 지나면 청구가 어렵습니다. 다만 사업주가 지급을 약속하며 시간을 끌었다면 신의칙 위반으로 시효 항변이 배척될 수 있습니다.</p>',
      },
    ],
    cta: { text: '최종급여 지연이자 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '지연이자 계산', href: '/guide/wage/unpaid-wage-delay-interest-calculation' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 형사고소', href: '/guide/wage/unpaid-wage-criminal-complaint-procedure' },
    ],
  },

  // ── 포괄임금 9. 택배·배달기사 포괄임금제 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-delivery-courier',
    keyword: '택배 배달기사 포괄임금제',
    questionKeyword: '택배 배달기사인데 포괄임금제가 적용되면 수당을 더 받을 수 있나요?',
    ctaKeyword: '택배 배달기사 포괄임금 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '택배·배달기사 포괄임금제 — 유효성 판단 3기준 | 로앤가이드',
      description:
        '택배·배달기사로 포괄임금제 계약을 했는데 수당이 제대로 계산되는지 궁금하다면, 유효성 판단과 청구법을 지금 확인하세요.',
    },
    intro:
      '<p>택배회사에 입사할 때 "월 고정급에 연장·야간근로수당이 모두 포함되어 있다"는 계약을 했습니다. 매일 12시간 이상 일하는데 급여는 동일합니다. 추가 수당을 요구하면 "포괄임금제라 이미 포함되어 있다"고 합니다. 하지만 대법원은 근로시간 산정이 가능한 경우에는 포괄임금 약정이 무효라고 보고 있습니다.</p>',
    sections: [
      {
        title: '택배·배달기사의 포괄임금제가 무효인 이유',
        content:
          '<p><strong style="color:#1e3a5f">택배·배달기사는 근로시간 산정이 어려운 업무가 아니므로, 포괄임금 약정이 무효가 될 가능성이 높습니다.</strong></p>\n<ul>\n<li><strong>근로시간 산정 가능성</strong> — 택배·배달기사는 배송 앱, GPS 기록, 출퇴근 시간 등으로 실제 근로시간을 정확하게 산정할 수 있습니다. 이 경우 포괄임금제의 전제가 무너집니다.</li>\n<li><strong>대법원 판례 기준</strong> — 근로시간 산정이 어려운 경우에만 포괄임금 약정이 유효합니다. 택배·배달업은 배송 건수와 시간이 기록되므로 근로시간 산정이 가능합니다.</li>\n<li><strong>최저임금 미달 위험</strong> — 실제 근로시간을 기준으로 시급을 환산하면 최저임금에 미달하는 경우가 많습니다. 이 경우 포괄임금 약정 자체가 무효입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 배송 앱이나 GPS로 근로시간이 기록되는 택배·배달업에서 포괄임금제는 대부분 무효입니다.</blockquote>',
      },
      {
        title: '택배·배달기사의 미지급 수당 계산법',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정이 무효이면, 실제 근로시간을 기준으로 연장·야간·휴일근로수당을 재계산하여 차액을 청구합니다.</strong></p>\n<ul>\n<li><strong>연장근로수당</strong> — 1일 8시간, 1주 40시간을 초과하는 근로에 대해 통상임금의 50%를 가산하여 지급해야 합니다.</li>\n<li><strong>야간근로수당</strong> — 밤 10시~아침 6시 사이의 근로에 대해 통상임금의 50%를 가산합니다. 새벽 배송이 잦은 택배기사에게 특히 중요합니다.</li>\n<li><strong>휴일근로수당</strong> — 주휴일이나 관공서 공휴일에 근로한 경우 통상임금의 50%(8시간 이내)~100%(8시간 초과)를 가산합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>포괄임금 차액이 얼마인지, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">월 급여와 실제 근로시간을 입력하면 미지급 수당 금액을 무료로 분석합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '택배·배달기사의 근로자성 확인',
        content:
          '<p><strong style="color:#1e3a5f">수당을 청구하려면 먼저 근로기준법상 근로자에 해당하는지 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>근로자성 판단 기준</strong> — 사용자의 지휘·감독을 받으며, 출퇴근 시간이 정해져 있고, 업무 내용이 사용자에 의해 결정되며, 보수가 근로의 대상이라면 근로자로 인정됩니다.</li>\n<li><strong>특수고용 여부</strong> — 택배·배달기사가 개인사업자로 계약되어 있더라도, 실질적으로 회사의 지휘·감독을 받는다면 근로자로 인정될 수 있습니다.</li>\n<li><strong>산재보험 적용</strong> — 택배기사, 배달대행기사 등은 산업재해보상보험법에 따라 특수형태근로종사자로 산재보험이 적용됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "위탁계약"이라고 되어 있어도 실질적으로 근로자라면 포괄임금 무효를 주장하고 수당을 청구할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금 약정과 최저임금 미달',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없으며, 최저임금 미달 여부는 소정근로시간 기준 비교대상 시급으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '포괄임금으로 받는 급여를 실제 근로시간으로 나누었을 때 최저임금에 미달하면, 포괄임금 약정 자체가 무효입니다. 배송 기록으로 실제 근로시간을 증명하세요.',
      },
    ],
    faq: [
      {
        question: '배달 앱 기록으로 근로시간을 증명할 수 있나요?',
        answer:
          '<p>배달 앱의 접속 기록, 배송 완료 시간, GPS 이동 경로는 유력한 근로시간 증거가 됩니다. 스크린샷을 주기적으로 보관하세요.</p>',
      },
      {
        question: '택배기사 포괄임금이 무효이면 기존에 받은 돈은 돌려줘야 하나요?',
        answer:
          '<p>이미 받은 급여는 기본급(통상임금)으로 인정되고, 여기에 추가로 연장·야간·휴일근로수당 차액을 청구합니다. 기존에 받은 돈을 돌려줄 필요는 없습니다.</p>',
      },
      {
        question: '위탁계약서를 작성했는데도 수당을 청구할 수 있나요?',
        answer:
          '<p>계약 형식이 위탁이어도 실질적으로 사용자의 지휘·감독을 받으며 근로를 제공했다면 근로자로 인정되어 수당을 청구할 수 있습니다.</p>',
      },
      {
        question: '포괄임금 차액 청구의 소멸시효는 몇 년인가요?',
        answer:
          '<p>임금 채권의 소멸시효는 3년입니다. 재직 중이어도 3년 전까지의 미지급 수당만 청구 가능하므로, 빠르게 대응하는 것이 유리합니다.</p>',
      },
    ],
    cta: { text: '택배·배달기사 포괄임금 차액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 초과근무 계산', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '포괄임금 최저임금 판단', href: '/guide/wage/wage-pogual-minimum-wage-test' },
      { label: '포괄임금 소송 절차', href: '/guide/wage/wage-pogual-lawsuit-procedure' },
      { label: '고정급 vs 초과수당 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
    ],
  },

  // ── 포괄임금 10. 공장 교대근무 포괄임금제 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-factory-shift',
    keyword: '공장 교대근무 포괄임금제',
    questionKeyword: '공장 교대근무인데 야간수당이 제대로 나오고 있는 건가요?',
    ctaKeyword: '공장 교대근무 포괄임금 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '공장 교대근무 포괄임금제 — 야간수당 계산법 4가지 | 로앤가이드',
      description:
        '공장에서 교대근무를 하며 포괄임금제를 적용받는데 야간수당이 제대로 계산되는지 궁금하다면, 적법 요건과 차액 청구법을 지금 확인하세요.',
    },
    intro:
      '<p>공장에서 2조 2교대로 근무하고 있습니다. 야간 조는 밤 8시부터 아침 8시까지인데, 급여명세서에 야간근로수당이 별도로 표시되지 않습니다. 회사는 "포괄임금에 다 포함되어 있다"고 합니다. 매달 일정한 교대 패턴이 반복되는 공장 근무는 근로시간 산정이 충분히 가능하므로, 포괄임금 약정의 유효성이 문제될 수 있습니다.</p>',
    sections: [
      {
        title: '교대근무와 포괄임금제의 적법성',
        content:
          '<p><strong style="color:#1e3a5f">교대근무는 근무 패턴이 정해져 있어 근로시간 산정이 가능하므로, 포괄임금 약정이 무효가 될 가능성이 높습니다.</strong></p>\n<ul>\n<li><strong>근로시간 산정 가능</strong> — 2조 2교대, 3조 3교대 등 교대 패턴이 고정되어 있으면 연장·야간 근로시간을 정확히 산정할 수 있습니다.</li>\n<li><strong>포괄임금 유효 요건</strong> — 대법원은 포괄임금 약정이 유효하려면 ①근로시간 산정이 어렵고 ②근로자에게 불이익이 없어야 한다고 봅니다. 교대근무는 첫 번째 요건을 충족하기 어렵습니다.</li>\n<li><strong>급여명세서 확인</strong> — 포괄임금이라 하더라도 급여명세서에 기본급, 연장수당, 야간수당, 휴일수당이 구분되어야 합니다. 일괄 금액만 표시되어 있다면 문제의 소지가 큽니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 교대 패턴이 정해진 공장 근무에서 포괄임금제는 대부분 무효입니다. 실제 수당과 정산 수당의 차액을 확인하세요.</blockquote>',
      },
      {
        title: '교대근무 야간·연장수당 계산법',
        content:
          '<p><strong style="color:#1e3a5f">교대근무에서 발생하는 각종 수당을 정확히 계산하는 방법입니다.</strong></p>\n<ul>\n<li><strong>야간근로수당</strong> — 밤 10시~아침 6시 사이 근로에 대해 통상임금의 50%를 가산합니다. 야간 조(예: 20시~08시) 근무 시 10시간 중 8시간이 야간근로에 해당합니다.</li>\n<li><strong>연장근로수당</strong> — 1일 8시간, 1주 40시간을 초과하는 근로에 통상임금의 50%를 가산합니다. 12시간 근무 시 4시간이 연장근로입니다.</li>\n<li><strong>야간+연장 중복</strong> — 야간 시간대에 연장근로를 한 경우, 야간 가산(50%) + 연장 가산(50%) = 통상임금의 100%를 추가로 지급해야 합니다.</li>\n<li><strong>휴일근로수당</strong> — 교대 스케줄상 주휴일에 근무한 경우, 8시간 이내는 50%, 8시간 초과는 100%를 가산합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>교대근무 수당이 제대로 나오고 있는지, AI가 즉시 검증합니다</strong></p>\n<p style="margin:0;font-size:0.95em">교대 패턴과 급여를 입력하면 정상 수당과 차액을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차액 수당 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금이 무효인 경우, 최대 3년치 미지급 수당 차액을 소급하여 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>실제 근로시간 기록</strong> — 출퇴근 카드, 교대 스케줄표, 작업일지 등으로 실제 근로시간을 확인합니다.</li>\n<li><strong>정상 수당 계산</strong> — 실제 연장·야간·휴일근로시간을 기준으로 지급되었어야 할 수당을 계산합니다.</li>\n<li><strong>차액 산정</strong> — 계산된 정상 수당에서 포괄임금으로 이미 지급된 금액을 공제하여 차액을 산정합니다.</li>\n<li><strong>노동부 진정 또는 소송</strong> — 차액 지급을 요청하고, 거부 시 노동부 진정이나 민사소송으로 대응합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 교대 스케줄표를 매달 사진으로 보관하세요. 3년 이상 된 수당은 소멸시효로 청구할 수 없습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정액사납금제 포괄임금과 최저임금 판단',
        summary:
          '대법원 2023다206138 사건(대법원, 2024.10.25 선고)에서 법원은 정액사납금제하에서 최저임금 미달을 회피할 의도로 실제 근무형태 변경 없이 소정근로시간만 단축한 합의는 탈법행위로서 무효이며, 실제 근무형태를 기준으로 최저임금 미달 여부를 판단해야 한다고 판시했습니다.',
        takeaway:
          '서류상 근로시간을 조작해도 실제 근무형태가 변하지 않았다면 무효입니다. 공장 교대근무 스케줄의 실제 패턴을 기준으로 수당이 계산되어야 합니다.',
      },
    ],
    faq: [
      {
        question: '2조 2교대 12시간 근무에서 야간수당은 얼마나 나와야 하나요?',
        answer:
          '<p>야간 조(예: 20시~08시) 기준으로 22시~06시까지 8시간이 야간근로입니다. 통상임금의 50%를 8시간분 가산해야 합니다. 월 15일 야간근무 시 상당한 금액이 됩니다.</p>',
      },
      {
        question: '포괄임금 무효 주장은 재직 중에도 할 수 있나요?',
        answer:
          '<p>재직 중에도 가능합니다. 다만 현실적으로 재직 중 사용자와 분쟁하기 어렵다면, 퇴직 후 3년 이내에 청구할 수도 있습니다.</p>',
      },
      {
        question: '교대근무 중 대기시간도 근로시간에 포함되나요?',
        answer:
          '<p>사용자의 지휘·감독 아래에서 대기하는 시간은 근로시간에 포함됩니다. 자유로운 이용이 보장되지 않는 대기시간은 수당 산정에 포함해야 합니다.</p>',
      },
      {
        question: '동료들과 함께 집단적으로 수당을 청구할 수 있나요?',
        answer:
          '<p>같은 교대 패턴으로 일한 동료들과 함께 진정이나 소송을 할 수 있습니다. 집단 청구 시 증거력이 높아지고 소송 비용도 분담할 수 있어 유리합니다.</p>',
      },
      {
        question: '포괄임금으로 받은 금액이 정상 수당보다 많으면 차액을 돌려줘야 하나요?',
        answer:
          '<p>포괄임금이 실제 수당보다 많은 경우에는 근로자에게 유리하므로 반환할 의무가 없습니다. 문제가 되는 것은 포괄임금이 실제 수당보다 적은 경우입니다.</p>',
      },
    ],
    cta: { text: '공장 교대근무 수당 차액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 초과근무 계산', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '고정급 vs 초과수당 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '포괄임금 최저임금 판단', href: '/guide/wage/wage-pogual-minimum-wage-test' },
      { label: '포괄임금 소송 절차', href: '/guide/wage/wage-pogual-lawsuit-procedure' },
    ],
  },
];
