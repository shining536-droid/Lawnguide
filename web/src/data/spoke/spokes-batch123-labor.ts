import { SpokePage } from '../spoke-pages';

// batch123 dismissal(3)+wage(2)+unemployment(2)+retirement(2)+industrial-accident(1) — 10개 (2026-07-13)
// 고유 존재 이유:
// 1. dismissal-disciplinary-notice-explanation-opportunity-sufficiency-track — 취업규칙에 징계혐의 통지 규정이 없거나 소명기회만 준 상태에서 징계해고된 사람이 절차하자를 다툴 수 있는지 통지·소명 요건을 점검하는 페이지
// 2. dismissal-permanent-conversion-evasion-resign-rehire-form-track — 무기계약직으로 간주될 지위였는데 회사가 규정 회피를 위해 사직서 제출·재입사 형식을 거치게 한 뒤 해고한 사람이 의원면직의 해고 해당성을 점검하는 페이지
// 3. dismissal-retirement-reached-backpay-standing-monetary-order-track — 부당해고를 다투던 중 정년에 이르러 원직복직이 불가능해졌지만 해고기간 임금상당액을 받기 위해 구제신청·금품지급명령의 소의 이익을 점검하는 페이지
// 4. wage-public-corp-pay-raise-agreement-approval-void-track — 공공성 있는 특수법인에서 노사합의로 보수를 인상하기로 했으나 주무관청 승인이 없어 회사가 인상분 지급을 거부할 때 승인 없는 보수인상 약정의 효력을 점검하는 페이지
// 5. wage-labor-supply-union-true-employer-status-track — 근로자공급사업체나 노동조합을 통해 배치돼 일한 근로자가 임금·퇴직금을 누구에게 청구해야 하는지 실질 사용자(지급의무자)를 점검하는 페이지
// 6. unemployment-over65-employment-succession-continuous-insured-track — 다니던 회사가 영업양도되며 65세 이후에도 근로 단절 없이 계속 근무했는데 피보험자격을 인정받지 못한 사람이 고용승계·계속고용을 근거로 실업급여 자격을 점검하는 페이지
// 7. unemployment-employment-insurance-premium-overreport-refund-track — 특별성과급 등을 총임금에 잘못 산입해 고용보험료를 과다 신고·납부한 납부자가 신고행위 하자로 환급받을 수 있는지 당연무효 요건을 점검하는 페이지
// 8. retirement-business-transfer-payout-resign-rehire-continuity-track — 영업양도 과정에서 퇴직금을 받고 퇴직·재입사 형식을 거친 근로자가 그것이 자의가 아닌 회사 일방결정이었다면 계속근로로 통산해 퇴직금을 재산정할 수 있는지 점검하는 페이지
// 9. retirement-rehabilitation-unavoidable-nonpayment-criminal-exemption-track — 회사가 회생절차·자금악화를 이유로 퇴직금을 못 준다고 할 때 어떤 경우 사용자 형사책임이 조각되는지, 근로자는 어떤 대응이 가능한지 점검하는 페이지
// 10. industrial-accident-same-employer-separate-worksite-coverage-unit-track — 동일 사업주가 본사와 여러 현장을 장소적으로 분리해 운영할 때 다친 사업장이 독립된 '사업 또는 사업장'으로 산재보험 적용단위인지에 따른 요양급여 대응을 점검하는 페이지

export const spokesBatch123Labor: SpokePage[] = [

  // ─── 1. dismissal-disciplinary-notice-explanation-opportunity-sufficiency-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-notice-explanation-opportunity-sufficiency-track',
    keyword: '징계혐의 통지규정 없음 소명기회 제공 절차 정당성 판단',
    questionKeyword:
      '저는 회사에서 징계위원회에 회부되어 징계해고를 당했어요. 회사는 징계위 하루 전에 대략적인 사유만 알려줬고, 정작 징계위 자리에서는 제가 준비한 소명을 제대로 듣지도 않고 형식적으로 진행한 뒤 해고를 의결했어요. 저는 이렇게 혐의사실을 구체적으로 통지하지 않고 소명 기회도 형식적으로만 준 것은 절차상 하자라 해고가 무효라고 생각하는데, 회사는 취업규칙에 통지 규정도 없고 진술 기회는 줬으니 문제없다고 해요. 소명 기회를 형식적으로 준 것도 절차하자로 다툴 수 있나요?',
    ctaKeyword: '징계혐의 통지·소명기회 제공·절차하자 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '징계 소명기회 절차하자 5단계 점검 | 로앤가이드',
      description:
        '혐의 통지 없이 형식적 소명만 받고 징계해고돼 막막하다면 통지 규정·소명기회 제공·절차하자까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 회사의 징계위원회에 회부되어 징계해고를 당한 근로자입니다. 회사는 징계위원회 개최 하루 전에 \'품위 유지 위반\'이라는 대략적인 사유만 통지했고, 구체적으로 어떤 행위가 문제인지, 언제 무엇을 했다는 것인지는 알려주지 않았습니다. 그리고 정작 징계위원회 자리에서는 제가 준비해 간 소명 자료를 제대로 검토하지 않고, 몇 마디 형식적인 질문만 한 뒤 곧바로 징계해고를 의결했습니다. 저는 이런 진행이 절차상 하자라고 생각합니다. 혐의사실을 구체적으로 알려주지 않으면 제가 무엇을 방어해야 할지 알 수 없고, 소명 기회를 형식적으로만 준 것은 사실상 방어권을 박탈한 것이나 마찬가지이기 때문입니다. 그런데 회사는 \'우리 취업규칙에는 징계혐의 사실을 통지해야 한다는 규정이 없고, 소명 규정이 있더라도 진술할 기회를 준 것으로 충분하다\'며 절차상 아무 문제가 없다고 주장합니다. 제가 알아본 바로는, 단체협약이나 취업규칙에 징계대상자에게 징계혐의 사실을 통지하여야 한다는 규정이 있으면 그 절차를 거치지 않은 징계처분은 유효하다고 보기 어렵지만, 그러한 규정이 없는 경우까지 반드시 혐의사실을 통지해 줄 의무가 있는 것은 아니라고 합니다. 또한 소명기회를 주도록 규정하고 있는 경우에도 대상자에게 그 기회를 제공하면 되고, 소명 자체가 반드시 이루어져야 하는 것은 아니라고 합니다. 그렇다면 징계 절차의 정당성은 결국 우리 취업규칙에 어떤 규정이 있는지, 그리고 회사가 최소한 혐의사실을 고지하고 진술할 기회를 제공했는지에 따라 달라질 수 있어 보입니다. 다만 저는 소명 기회가 지나치게 형식적이었다는 점, 그리고 징계 양정 자체가 과중했다는 점도 함께 따져 보고 싶습니다. 절차가 형식적으로 지켜졌더라도 징계사유가 실제로 존재하는지, 그 정도가 해고에 이를 만한지는 별개의 문제이기 때문입니다. 그렇다면 제 사건에서도 첫째 취업규칙에 통지·소명 규정이 있는지, 둘째 회사가 혐의사실을 고지하고 진술 기회를 제공했는지, 셋째 소명 기회가 실질적으로 보장됐는지, 넷째 징계사유가 실제로 인정되는지, 다섯째 해고 양정이 과중하지 않은지를 차례로 따져 보아야 할 것 같습니다. 절차와 양정을 함께 점검해보고 싶습니다." 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하고, 제27조는 서면통지를 정하는 영역입니다. 판례는 취업규칙에 통지 규정이 없으면 혐의사실 통지 의무가 반드시 있는 것은 아니고, 소명기회를 주도록 규정돼 있어도 기회를 제공하면 되며 소명 자체가 반드시 이루어져야 하는 것은 아니라고 본 사례 흐름이 있는 영역입니다. 절차 요건 + 징계사유 + 양정 결합은 다툴 여지가 있는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 징계 소명기회 절차하자 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지·소명 규정·혐의 고지·소명기회 보장·징계사유·양정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 통지·소명 규정</strong> — 취업규칙·단체협약에 혐의사실 통지·소명기회 부여 규정이 있는지.</li>\n<li><strong>② 혐의 고지</strong> — 회사가 최소한 징계혐의 사실을 고지하고 진술할 기회를 부여했는지.</li>\n<li><strong>③ 소명기회 보장</strong> — 진술 기회가 형식에 그치지 않고 실질적으로 보장됐는지.</li>\n<li><strong>④ 징계사유</strong> — 절차와 별개로 징계사유가 실제로 인정되는지(근로기준법 제23조 제1항).</li>\n<li><strong>⑤ 양정</strong> — 인정되는 사유에 비해 해고 양정이 과중하지 않은지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취업규칙에 통지 규정이 없으면 혐의사실 통지 의무가 반드시 있는 것은 아니고, 소명 규정이 있어도 기회를 제공하면 되는 영역. 절차만이 아니라 징계사유의 존부와 양정까지 함께 다툴 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 절차 자료 보존 (즉시)</strong> — 징계 통보서, 징계위원회 회의록·통지문, 취업규칙 징계 조항을 보존.</li>\n<li><strong>2단계 — 규정 대조 (1주)</strong> — 취업규칙·단체협약의 통지·소명 규정과 실제 진행 절차를 대조.</li>\n<li><strong>3단계 — 징계사유·양정 정리 (2주)</strong> — 회사가 삼은 징계사유의 실제 존부와 유사 사례 대비 양정을 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 재심·행정소송 정리 (병행)</strong> — 초심 판정 불복 시 중앙노동위 재심·행정소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계혐의 통지·소명기회·징계사유·양정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 절차 규정·혐의 고지·징계사유·양정 갈래입니다.</strong></p>\n<ul>\n<li><strong>취업규칙·단체협약 징계 조항 (통지·소명 규정 확인)</strong></li>\n<li><strong>징계위원회 개최 통지문 (혐의 고지 정도 확인)</strong></li>\n<li><strong>징계위원회 회의록·진술 기록 (소명기회 보장 여부)</strong></li>\n<li><strong>징계 통보서 (사유·시기 특정)</strong></li>\n<li><strong>징계사유 관련 사실 자료 (사유 존부 대조)</strong></li>\n<li><strong>유사 비위 처분 사례 (양정 형평 비교)</strong></li>\n<li><strong>본인 소명 자료 (제출·검토 여부 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'통지·소명이 없었다\'만이 아니라 \'규정이 무엇을 요구했고, 사유와 양정이 정당한지\'입니다. 취업규칙 조항과 회의록을 대조하면 절차와 실체를 함께 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통지·소명 규정</strong> — 취업규칙에 관련 규정이 있는지.</li>\n<li><strong>혐의 고지</strong> — 방어할 수 있을 정도로 혐의사실이 특정됐는지.</li>\n<li><strong>소명기회</strong> — 진술 기회가 실질적으로 보장됐는지.</li>\n<li><strong>징계사유·양정</strong> — 사유가 실제로 있는지, 해고가 과중한지.</li>\n<li><strong>구제 기한</strong> — 해고일로부터 구제신청 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계혐의 통지 규정이 없는 경우 통지·소명 의무의 범위',
        summary:
          '대법원 2016두56042(대법원, 2020.06.25 선고) 영역에서 법원은 단체협약이나 취업규칙에 징계대상자에게 징계혐의 사실을 통지하여야 한다는 규정이 있는 경우 그 절차를 거치지 않은 징계처분은 유효하다고 할 수 없지만, 그러한 규정이 없는 경우까지 반드시 그 사실을 통지하여 줄 의무가 있는 것은 아니라고 판시했습니다. 또한 소명기회를 주도록 규정하고 있는 경우에도 대상자에게 그 기회를 제공하면 되며 소명 자체가 반드시 이루어져야 하는 것은 아니고, 징계위원회에서 징계혐의 사실을 고지하고 진술할 기회를 부여하면 충분하며 혐의사실 개개 사항을 구체적으로 발문해 빠짐없이 진술하도록 조치해야 하는 것은 아니라고 보았습니다. 아울러 어떤 비위행위가 징계사유인지는 징계위원회가 그것을 사유로 삼았는지에 따라, 정당한 징계사유에 해당하는지는 규정의 객관적 의미를 합리적으로 해석해 판단해야 한다고 밝혔습니다. 절차가 형식적으로 지켜졌더라도 징계사유의 존부와 양정은 별개로 다툴 수 있다는 취지입니다. 통지·소명 절차가 미흡하다고 느껴진다면, 취업규칙 규정과 함께 사유·양정까지 검토해볼 수 있습니다.',
        takeaway: '징계혐의 통지 규정 없음 + 소명기회 제공 결합 시 통지·소명 규정·혐의 고지·소명기회 보장·징계사유·양정 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '혐의사실을 자세히 안 알려줬는데 그것만으로 무효인가요?',
        answer:
          '<strong>취업규칙에 통지 규정이 있는지에 따라 달라지는 영역입니다.</strong> 취업규칙 징계 조항을 확인.',
      },
      {
        question: '소명 기회를 형식적으로 준 것도 절차하자인가요?',
        answer:
          '<strong>기회 제공 여부와 실질적 보장 여부를 함께 보는 영역입니다.</strong> 징계위 회의록을 확보.',
      },
      {
        question: '절차가 문제없으면 해고는 그냥 유효한가요?',
        answer:
          '<strong>징계사유의 존부와 양정은 절차와 별개로 다투는 영역입니다.</strong> 유사 처분 사례를 정리.',
      },
      {
        question: '징계가 과중하다는 것만으로도 다툴 수 있나요?',
        answer:
          '<strong>사유에 비해 해고가 과중하면 양정 부당으로 다툴 여지가 있는 영역입니다.</strong> 사유별 비위 정도를 정리.',
      },
      {
        question: '다툴 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: 'dismissal 도메인 허브', href: '/guide/dismissal' },
      { label: '3일 무단결근 자동면직 조항', href: '/guide/dismissal/dismissal-3days-absence-auto-termination-clause' },
      { label: '결근 처벌규정 과중 해고', href: '/guide/dismissal/dismissal-absence-rule-excessive-punishment' },
      { label: '해고 후 동종업계 블랙리스트', href: '/guide/dismissal/dismissal-blacklist-industry-block' },
      { label: '괴롭힘 신고 보복 해고', href: '/guide/dismissal/dismissal-bullying-report-retaliation-track' },
    ],
  },

  // ─── 2. dismissal-permanent-conversion-evasion-resign-rehire-form-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-permanent-conversion-evasion-resign-rehire-form-track',
    keyword: '무기계약 전환 회피 사직서 재입사 형식 해고 판단',
    questionKeyword:
      '저는 2년 넘게 기간제로 반복 근무해서 사실상 무기계약직으로 간주될 상황이었는데, 회사가 갑자기 사직서를 쓰게 하고 퇴직금을 정산해 준 뒤 다시 새 기간제 근로계약을 체결하게 했어요. 저는 계속 일하고 싶어서 회사가 시키는 대로 사직서를 냈을 뿐인데, 얼마 뒤 회사는 새 계약기간이 끝났다며 저를 내보냈어요. 이렇게 무기계약 전환을 피하려고 회사가 퇴직·재입사 형식을 거치게 한 경우, 저에게 한 조치가 사실상 해고에 해당하는 건 아닌가요?',
    ctaKeyword: '무기계약 전환 회피·의원면직 해고 해당성·구제 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '무기전환 회피 사직 재입사 해고 5단계 | 로앤가이드',
      description:
        '무기계약 전환을 피하려 회사가 사직·재입사를 시킨 뒤 내보내 막막하다면 의원면직의 해고 해당성까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 한 회사에서 기간제 근로자로 2년을 넘겨 반복 근무해 온 사람입니다. 기간제 및 단시간근로자 보호 등에 관한 법률(기간제법) 제4조에 따르면 총 사용기간이 2년을 초과하면 기간의 정함이 없는 근로자로 간주되므로, 저는 사실상 무기계약직으로 전환될 지위에 있었습니다. 그런데 그 무렵 회사는 갑자기 저에게 사직서를 제출하게 하고 퇴직금을 정산해 지급한 뒤, 곧바로 다시 새로운 기간제 근로계약을 체결하게 했습니다. 저는 계속 그 회사에서 일하고 싶었기 때문에, 회사가 요구하는 대로 사직서를 쓰고 새 계약서에 서명했을 뿐 다른 선택지가 없었습니다. 그런데 얼마 지나지 않아 회사는 \'새로 체결한 계약의 기간이 만료되었다\'며 저를 내보냈습니다. 저로서는 이 조치가 정당한 것인지 의문이 큽니다. 형식만 보면 제가 자발적으로 사직하고 새 계약을 맺었다가 그 기간이 끝난 것처럼 보이지만, 실제로는 회사가 무기계약 전환을 회피하기 위해 저에게 퇴직과 재입사의 형식을 거치게 한 것이라고 생각하기 때문입니다. 제가 알아본 바로는, 사직서 제출이 근로자의 진정한 의사에 따른 것이라면 계속근로의 단절에 동의한 것으로 볼 여지가 있지만, 근로자의 의사에 반하여 사용자의 일방적 결정으로 규정 적용을 회피하기 위해 퇴직과 재입사의 형식만 거친 것에 불과하다면, 그 뒤에 이루어진 근로계약 종료는 실질적으로 해고에 해당할 수 있다고 합니다. 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하고 있으므로, 이번 조치가 해고에 해당한다면 정당한 이유가 있었는지를 따져 볼 수 있습니다. 저는 사직서를 제출하게 된 경위, 퇴직금 정산과 재입사가 사실상 같은 날 연속으로 이루어졌는지, 업무 내용과 근무 장소가 그대로였는지 등을 확인해 보아야 할 것 같습니다. 그렇다면 제 사건에서도 첫째 사직서 제출이 저의 진정한 의사였는지, 둘째 퇴직·재입사가 회사의 일방적 결정이었는지, 셋째 그것이 규정 회피 목적이었는지, 넷째 그렇다면 이번 조치가 해고에 해당하는지, 다섯째 해고라면 정당한 이유가 있는지를 차례로 따져 보아야 할 것 같습니다. 형식적 사직·재입사에 가려진 실질을 점검해보고 싶습니다." 기간제법 제4조는 무기계약 전환을, 근로기준법 제23조 제1항은 정당한 이유 없는 해고 금지를 정하는 영역입니다. 판례는 무기계약직으로 간주되는 근로자가 사직서를 제출하고 퇴직금을 지급받은 후 다시 기간제 계약을 체결했더라도, 사용자의 일방적 결정으로 규정 적용을 회피하기 위해 퇴직·재입사 형식을 거친 것에 불과하다면 해고에 해당한다고 본 사례 흐름이 있는 영역입니다. 무기전환 회피 + 형식적 사직·재입사 결합은 다툴 여지가 있는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 무기전환 회피 사직 재입사 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사직 의사·일방적 결정·회피 목적·해고 해당성·해고 정당성 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사직 의사</strong> — 사직서 제출이 근로자의 진정한 의사였는지, 사용자의 요구에 따른 형식이었는지.</li>\n<li><strong>② 일방적 결정</strong> — 퇴직·재입사가 사용자의 일방적 경영방침 결정으로 이루어졌는지.</li>\n<li><strong>③ 회피 목적</strong> — 그 형식이 기간제법상 무기계약 전환 적용을 회피하기 위한 것이었는지.</li>\n<li><strong>④ 해고 해당성</strong> — 이후의 근로계약 종료가 실질적으로 근로기준법 제27조가 말하는 해고에 해당하는지.</li>\n<li><strong>⑤ 해고 정당성</strong> — 해고에 해당한다면 근로기준법 제23조 제1항의 정당한 이유가 있는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사직서와 재입사라는 형식이 있어도 사용자의 일방적 결정으로 규정 회피를 위해 퇴직·재입사 형식만 거친 것이면 실질은 해고로 볼 여지가 있는 영역. 사직 경위의 진정성이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위 자료 보존 (즉시)</strong> — 사직서, 퇴직금 정산 내역, 재입사 계약서, 종료 통보서를 보존.</li>\n<li><strong>2단계 — 연속성 정리 (1주)</strong> — 퇴직·재입사가 같은 날 또는 짧은 간격으로 연속되었는지, 업무·장소가 그대로였는지 정리.</li>\n<li><strong>3단계 — 사직 경위 정리 (1주)</strong> — 사직서를 쓰게 된 경위와 회사의 요구 정황을 시간순으로 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (종료일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 근속기간 통산 정리 (병행)</strong> — 계속근로로 통산될 경우 퇴직금·연차 등 재산정 여지 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무기전환 회피·형식적 사직·해고 해당성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사직 경위·연속성·회피 목적 갈래입니다.</strong></p>\n<ul>\n<li><strong>사직서 사본 (작성 경위·일자 확인)</strong></li>\n<li><strong>반복 기간제 계약서 (2년 초과 근무 입증)</strong></li>\n<li><strong>퇴직금 정산·지급 내역 (정산 시점 확인)</strong></li>\n<li><strong>재입사 근로계약서 (연속성 입증)</strong></li>\n<li><strong>종료 통보서 (사유·시기 특정)</strong></li>\n<li><strong>업무·근무장소 동일성 자료 (실질 연속 입증)</strong></li>\n<li><strong>사직 요구 정황 자료 (문자·메일·녹취)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'사직서에 서명했으니 자발적 퇴사\'가 아니라 \'그 사직·재입사가 회사의 일방적 결정으로 규정을 회피한 형식인지\'입니다. 정산·재입사 시점과 사직 요구 정황을 정리하면 해고 해당성을 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사직 의사</strong> — 사직서 제출이 진정한 의사였는지.</li>\n<li><strong>일방적 결정</strong> — 퇴직·재입사가 회사 일방 결정이었는지.</li>\n<li><strong>회피 목적</strong> — 무기전환 회피 목적이 인정되는지.</li>\n<li><strong>해고 해당성</strong> — 실질이 해고에 해당하는지.</li>\n<li><strong>구제 기한</strong> — 종료일로부터 구제신청 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 규정 회피를 위한 퇴직·재입사 형식과 해고 해당성',
        summary:
          '대법원 2016다255910(대법원, 2017.02.03 선고) 영역에서 법원은 사용자의 의원면직처분이 해고에 해당하는지의 판단 기준을 밝히면서, 기간제법 제4조 제2항에 따라 기간의 정함이 없는 근로계약을 체결한 것으로 간주되는 근로자가 사직서를 제출하고 퇴직금을 지급받은 후 다시 기간제 근로계약을 체결하였더라도, 그것이 사용자의 일방적인 결정에 따라 위 규정의 적용을 회피하기 위하여 퇴직과 재입사의 형식을 거친 것에 불과한 경우에는 해고에 해당한다고 판시했습니다. 형식상 자발적 사직과 새로운 계약이 있었더라도, 그 실질이 규정 회피를 위한 사용자의 일방적 조치라면 근로계약 종료를 해고로 평가할 수 있다는 취지입니다. 또한 기간제법 제4조 제1항 단서의 사용기간 제한 예외에 해당하는지도 각 근로계약이 반복 갱신된 동기·경위, 계속성 등을 종합해 판단해야 한다고 보았습니다. 무기계약 전환을 앞두고 회사가 사직·재입사 형식을 거치게 한 뒤 계약만료를 이유로 내보낸 경우, 그 실질이 해고인지 검토해볼 수 있습니다.',
        takeaway: '무기전환 회피 + 형식적 사직·재입사 결합 시 사직 의사·일방적 결정·회피 목적·해고 해당성 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '제 손으로 사직서를 냈는데도 해고가 되나요?',
        answer:
          '<strong>사직이 진정한 의사가 아니라 회사 요구에 따른 형식이면 다툴 여지가 있는 영역입니다.</strong> 사직 경위를 정리.',
      },
      {
        question: '퇴직금을 이미 받았는데 계속근로가 인정되나요?',
        answer:
          '<strong>일방적 결정으로 형식만 거친 것이면 통산될 여지가 있는 영역입니다.</strong> 정산·재입사 시점을 확인.',
      },
      {
        question: '새 계약기간이 끝난 것도 해고인가요?',
        answer:
          '<strong>퇴직·재입사가 규정 회피용이었다면 종료가 해고로 평가될 수 있는 영역입니다.</strong> 업무 연속성을 정리.',
      },
      {
        question: '회피 목적을 어떻게 증명하나요?',
        answer:
          '<strong>2년 초과 시점, 사직 요구 정황, 연속성 등을 종합하는 영역입니다.</strong> 계약서와 문자 기록을 확보.',
      },
      {
        question: '다툴 기한이 있나요?',
        answer:
          '<strong>종료일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: 'dismissal 도메인 허브', href: '/guide/dismissal' },
      { label: '3일 무단결근 자동면직 조항', href: '/guide/dismissal/dismissal-3days-absence-auto-termination-clause' },
      { label: '결근 처벌규정 과중 해고', href: '/guide/dismissal/dismissal-absence-rule-excessive-punishment' },
      { label: '해고 후 동종업계 블랙리스트', href: '/guide/dismissal/dismissal-blacklist-industry-block' },
      { label: '괴롭힘 신고 보복 해고', href: '/guide/dismissal/dismissal-bullying-report-retaliation-track' },
    ],
  },

  // ─── 3. dismissal-retirement-reached-backpay-standing-monetary-order-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-retirement-reached-backpay-standing-monetary-order-track',
    keyword: '정년 도달 원직복직 불가 임금상당액 구제이익 금품지급명령 판단',
    questionKeyword:
      '저는 부당해고를 당해 노동위원회에 구제신청을 하고 지방노동위·중앙노동위를 거쳐 행정소송까지 다투고 있었어요. 그런데 소송 도중에 제가 정년에 이르게 됐어요. 이제 원직에 복직하는 것은 사실상 불가능한데, 회사는 원직복직이 안 되니 이 사건은 다툴 실익이 없어졌다며 소가 각하되어야 한다고 주장해요. 저는 해고당한 기간 동안 받지 못한 임금이라도 받고 싶은데, 정년에 이르렀다는 이유만으로 부당해고를 다툴 소의 이익이 사라지는 건가요?',
    ctaKeyword: '정년 도달 후 구제이익·임금상당액·금품지급명령 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '정년 도달 부당해고 구제이익 5단계 점검 | 로앤가이드',
      description:
        '다투던 중 정년에 이르러 복직이 불가능해 막막하다면 임금상당액 구제이익·금품지급명령까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 부당해고를 당해 노동위원회에 구제신청을 하고, 지방노동위원회와 중앙노동위원회의 판정을 거쳐 행정소송으로 재심판정의 취소를 다투어 온 근로자입니다. 그런데 사건이 진행되는 도중에 제가 정년에 이르게 되었습니다. 이제 설령 부당해고가 인정되더라도 원직에 복직하는 것은 사실상 불가능한 상황이 되었습니다. 회사는 이 점을 근거로 \'원직복직이 불가능해졌으니 이 사건을 다툴 소의 이익이 없어졌고, 따라서 소는 각하되어야 한다\'고 주장합니다. 저로서는 억울합니다. 저는 부당하게 해고를 당해 해고 시점부터 지금까지 상당한 기간 동안 임금을 받지 못했고, 그 기간의 임금 상당액이라도 받아야 한다고 생각하기 때문입니다. 원직에 돌아갈 수 없게 되었다고 해서, 부당하게 해고당한 사실 자체와 그로 인한 임금 손실까지 없던 일이 되는 것은 아니라고 봅니다. 제가 알아본 바로는, 부당해고 구제명령 제도는 근로자 지위의 회복만을 목적으로 하는 것이 아니라, 부당해고가 없었다면 근로자가 누렸을 법적 지위와 이익의 회복을 위한 것이고, 부당한 해고라는 사실을 확인해 해고기간 중의 임금 상당액을 지급받도록 하는 것도 그 제도의 목적에 포함된다고 합니다. 그렇다면 근로자가 부당해고를 다투던 중 정년에 이르거나 근로계약기간이 만료되어 원직복직이 불가능하게 되었더라도, 해고기간 중의 임금 상당액을 지급받을 필요가 있다면 구제신청을 기각한 재심판정을 다툴 소의 이익이 유지된다고 볼 여지가 있어 보입니다. 나아가 근로기준법 제30조 제3항에 따른 금품지급명령을 신청한 경우에도 같은 법리가 적용될 수 있다고 들었습니다. 저는 이 점을 근거로 소의 이익을 다투고, 해고기간 임금 상당액을 확보하는 방향으로 대응하고 싶습니다. 그렇다면 제 사건에서도 첫째 원직복직이 불가능해진 것이 맞는지, 둘째 해고기간 임금 상당액을 받을 필요가 있는지, 셋째 그렇다면 소의 이익이 유지되는지, 넷째 금품지급명령 신청이 함께 활용될 수 있는지, 다섯째 미지급 임금은 어떻게 산정할지를 차례로 따져 보아야 할 것 같습니다. 정년 도달 이후에도 구제를 이어갈 수 있는지 점검해보고 싶습니다." 근로기준법 제23조 제1항은 정당한 이유 없는 해고 금지를, 제30조 제3항은 금품지급명령을 정하는 영역입니다. 판례는 근로자가 부당해고를 다투던 중 정년에 이르거나 근로계약기간이 만료되어 원직복직이 불가능하게 되었더라도 해고기간 중 임금 상당액을 지급받을 필요가 있다면 재심판정을 다툴 소의 이익이 있고, 이 법리는 금품지급명령을 신청한 경우에도 마찬가지라고 본 사례 흐름이 있는 영역입니다. 정년 도달 + 임금상당액 구제이익 결합은 다툴 여지가 있는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정년 도달 부당해고 구제이익 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 복직 가능성·임금상당액 필요·소의 이익·금품지급명령·미지급 임금 산정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 복직 가능성</strong> — 정년 도달·계약만료 등으로 원직복직이 실제로 불가능해졌는지.</li>\n<li><strong>② 임금상당액 필요</strong> — 해고기간 중 지급받지 못한 임금 상당액을 받을 필요가 있는지.</li>\n<li><strong>③ 소의 이익</strong> — 임금 상당액을 받을 필요가 있다면 재심판정을 다툴 소의 이익이 유지되는지.</li>\n<li><strong>④ 금품지급명령</strong> — 근로기준법 제30조 제3항의 금품지급명령을 함께 활용할 수 있는지.</li>\n<li><strong>⑤ 미지급 임금 산정</strong> — 해고일부터의 임금 상당액을 어떻게 산정할지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 원직복직이 불가능해졌더라도 해고기간 임금 상당액을 받을 필요가 있으면 재심판정을 다툴 소의 이익이 유지되는 영역. 금품지급명령을 신청한 경우에도 같은 법리가 적용될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 노동위원회·법원 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건 자료 보존 (즉시)</strong> — 해고 통보서, 노동위 판정서, 소송 서류, 정년 도달 관련 자료를 보존.</li>\n<li><strong>2단계 — 복직 불가·임금 필요 정리 (1주)</strong> — 원직복직 불가 사유와 해고기간 임금 상당액 필요성을 정리.</li>\n<li><strong>3단계 — 소의 이익 소명 (진행 중)</strong> — 임금 상당액 구제이익을 근거로 소의 이익 유지를 소명.</li>\n<li><strong>4단계 — 금품지급명령 검토 (병행)</strong> — 필요 시 금품지급명령 신청·활용 여부 검토.</li>\n<li><strong>5단계 — 미지급 임금 확정 (병행)</strong> — 해고일부터의 임금 상당액을 산정해 청구 범위를 확정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정년 도달·임금상당액 구제이익·금품지급명령 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 복직 불가·임금상당액·소의 이익 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (해고 시점 특정)</strong></li>\n<li><strong>노동위 판정서·행정소송 서류 (사건 경과)</strong></li>\n<li><strong>정년·계약만료 관련 자료 (복직 불가 입증)</strong></li>\n<li><strong>해고 전 임금 자료 (임금 상당액 산정 기초)</strong></li>\n<li><strong>해고기간 무수입·중간수입 자료</strong></li>\n<li><strong>취업규칙·근로계약서 (정년 규정 확인)</strong></li>\n<li><strong>미지급 임금 산정표 (해고일 기준)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'복직이 안 되니 끝\'이 아니라 \'해고기간 임금 상당액을 받을 필요가 있으면 소의 이익이 남는지\'입니다. 임금 자료와 사건 경과를 정리하면 구제를 이어갈 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>복직 가능성</strong> — 원직복직이 실제로 불가능해졌는지.</li>\n<li><strong>임금상당액 필요</strong> — 해고기간 임금을 받을 필요가 있는지.</li>\n<li><strong>소의 이익</strong> — 재심판정을 다툴 소의 이익이 유지되는지.</li>\n<li><strong>금품지급명령</strong> — 금품지급명령 신청이 함께 활용되는지.</li>\n<li><strong>중간수입 공제</strong> — 해고기간 중 다른 수입의 공제 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달로 복직이 불가능해진 경우의 소의 이익',
        summary:
          '대법원 2019두52386(대법원, 2020.02.20 선고) 영역에서 법원은 근로자가 부당해고 구제신청을 하여 해고의 효력을 다투던 중 정년에 이르거나 근로계약기간이 만료하는 등의 사유로 원직에 복직하는 것이 불가능하게 되었더라도, 해고기간 중의 임금 상당액을 지급받을 필요가 있다면 임금 상당액 지급의 구제명령을 받을 이익이 유지되므로 구제신청을 기각한 중앙노동위원회의 재심판정을 다툴 소의 이익이 있다고 판시했습니다. 부당해고 구제명령 제도는 근로자 지위의 회복만을 목적으로 하는 것이 아니라, 부당한 해고라는 사실을 확인하여 해고기간 중의 임금 상당액을 지급받도록 하는 것도 그 목적에 포함된다는 점, 원직복직과 임금 상당액 지급은 어느 하나가 더 우월한 구제방법이라고 할 수 없다는 점을 근거로 들었습니다. 아울러 이러한 법리는 근로자가 근로기준법 제30조 제3항에 따라 금품지급명령을 신청한 경우에도 마찬가지로 적용된다고 밝혔습니다. 다투던 중 정년에 이르렀더라도 해고기간 임금 상당액을 위해 구제를 이어갈 수 있는지 검토해볼 수 있습니다.',
        takeaway: '정년 도달 + 임금상당액 구제이익 결합 시 복직 가능성·임금상당액 필요·소의 이익·금품지급명령 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '정년에 이르면 부당해고를 못 다투나요?',
        answer:
          '<strong>임금 상당액을 받을 필요가 있으면 소의 이익이 유지되는 영역입니다.</strong> 해고기간 임금 자료를 확보.',
      },
      {
        question: '복직이 안 되는데 다퉈서 뭘 얻나요?',
        answer:
          '<strong>해고기간 임금 상당액 지급 구제명령을 받을 이익이 있는 영역입니다.</strong> 미지급 임금을 산정.',
      },
      {
        question: '금품지급명령도 같이 신청할 수 있나요?',
        answer:
          '<strong>금품지급명령 신청에도 같은 법리가 적용될 여지가 있는 영역입니다.</strong> 판정서·신청 경위를 확인.',
      },
      {
        question: '해고기간에 다른 일을 했으면 어떻게 되나요?',
        answer:
          '<strong>중간수입은 일정 범위에서 공제될 수 있는 영역입니다.</strong> 그 기간 소득 자료를 정리.',
      },
      {
        question: '소송 중인데 지금 무엇을 준비하나요?',
        answer:
          '<strong>복직 불가 사유와 임금 상당액 필요성을 소명하는 영역입니다.</strong> 사건 경과 자료를 정리.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: 'dismissal 도메인 허브', href: '/guide/dismissal' },
      { label: '3일 무단결근 자동면직 조항', href: '/guide/dismissal/dismissal-3days-absence-auto-termination-clause' },
      { label: '결근 처벌규정 과중 해고', href: '/guide/dismissal/dismissal-absence-rule-excessive-punishment' },
      { label: '해고 후 동종업계 블랙리스트', href: '/guide/dismissal/dismissal-blacklist-industry-block' },
      { label: '괴롭힘 신고 보복 해고', href: '/guide/dismissal/dismissal-bullying-report-retaliation-track' },
    ],
  },

  // ─── 4. wage-public-corp-pay-raise-agreement-approval-void-track ───
  {
    domain: 'wage',
    slug: 'wage-public-corp-pay-raise-agreement-approval-void-track',
    keyword: '주무관청 승인 없는 보수인상 약정 효력 미지급 임금 판단',
    questionKeyword:
      '저는 관련 법령에 따라 임직원 보수를 주무장관이 정한 기준에 맞춰 정하도록 되어 있는 공공성 있는 특수법인에서 일하고 있어요. 그런데 몇 년 전 노동조합과 사측이 단체협약으로 보수를 종전보다 인상하기로 합의했고, 저는 그때부터 인상된 급여를 기대했어요. 그런데 회사는 이 인상 합의가 주무장관 승인을 받지 않아 효력이 없다며 인상분을 지급하지 않고 있어요. 승인을 받지 않은 보수인상 약정은 정말 무효인가요? 그렇다면 저는 인상분을 아예 받을 수 없는 건가요?',
    ctaKeyword: '주무관청 승인 없는 보수인상 약정·효력·미지급 임금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '승인 없는 보수인상 약정 효력 5단계 점검 | 로앤가이드',
      description:
        '노사 합의로 정한 보수인상이 승인 없이 무효라고 해 막막하다면 약정 효력과 미지급 임금 청구까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 관련 법령에 따라 임직원의 보수를 주무장관이 정하는 기준에 맞추어 정하도록 되어 있고, 사업계획과 수지예산을 총회 의결과 주무장관 승인을 거쳐 확정하도록 되어 있는 공공성 있는 특수법인에서 일해 온 사람입니다. 몇 년 전 우리 법인의 노동조합과 사측은 단체교섭을 거쳐 임직원의 보수를 종전보다 인상하기로 하는 내용의 단체협약을 체결했습니다. 저는 그 합의를 신뢰해 그때부터 인상된 급여가 지급될 것으로 기대했고, 실제로 다른 조합원들과 함께 그 인상분을 요구해 왔습니다. 그런데 회사는 \'이 보수 인상 약정은 주무장관의 승인을 받지 않아 효력이 없다\'며 인상분 지급을 계속 거부하고 있습니다. 저로서는 혼란스럽습니다. 노사가 정식 교섭을 거쳐 단체협약으로 합의한 내용인데도, 주무장관의 승인이 없다는 이유만으로 그 약정 전체가 무효가 되는 것인지 이해가 잘 되지 않기 때문입니다. 제가 알아본 바로는, 우리 법인처럼 임직원 보수를 주무장관이 정하는 기준에 따라 정하고 수지예산을 주무장관 승인을 얻어 확정하도록 법령에 정해져 있는 경우에는, 그 법령이 정한 절차를 벗어난 보수 인상 약정은 효력이 인정되지 않는다고 보는 사례가 있다고 합니다. 즉 노사 합의가 있었더라도 주무장관 승인이라는 법정 절차를 갖추지 못하면 인상 약정이 무효로 평가될 수 있다는 것입니다. 다만 저는 이 결론을 그대로 받아들이기 전에, 우리 법인이 정말로 그러한 승인 절차의 적용을 받는 기관인지, 승인 절차가 실제로 어떻게 진행되었는지, 그리고 이미 인상분이 일부라도 지급된 관행이 있었는지 등을 확인해 보아야 할 것 같습니다. 법령이 정한 승인 대상 기관인지, 승인 절차가 완결되지 않은 것인지에 따라 결론이 달라질 수 있기 때문입니다. 그렇다면 제 상황에서도 첫째 우리 법인이 보수 결정에 주무장관 승인을 요하는 기관인지, 둘째 이 인상 약정이 그 승인을 받았는지, 셋째 승인이 없다면 약정이 무효로 평가되는지, 넷째 그럼에도 이미 지급된 부분이나 관행이 있는지, 다섯째 미지급 임금을 어떤 범위에서 청구할 수 있는지를 차례로 따져 보아야 할 것 같습니다. 승인 없는 보수인상 약정의 효력을 점검해보고 싶습니다." 근로기준법 제43조는 임금 전액·정기지급 원칙을 정하는 영역입니다. 판례는 임직원 보수를 주무장관이 정하는 기준에 따라 정하고 수지예산을 주무장관 승인을 얻어 확정하도록 되어 있는 법인이 주무장관 승인 없이 노동조합과 체결한 보수 인상 약정은 효력이 없다고 본 사례가 있는 영역입니다. 승인 요건 + 보수인상 약정 효력 결합은 다툴 여지가 있는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 승인 없는 보수인상 약정 효력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 승인 대상 기관·승인 여부·약정 효력·기지급·관행·미지급 청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 승인 대상 기관</strong> — 법인이 보수 결정에 주무장관 승인을 요하는 기관에 해당하는지.</li>\n<li><strong>② 승인 여부</strong> — 이 보수 인상 약정이 주무장관 승인을 실제로 받았는지.</li>\n<li><strong>③ 약정 효력</strong> — 승인을 받지 못했다면 인상 약정이 무효로 평가되는지.</li>\n<li><strong>④ 기지급·관행</strong> — 그럼에도 이미 지급된 인상분이나 확립된 지급 관행이 있는지.</li>\n<li><strong>⑤ 미지급 청구</strong> — 유효하게 남는 부분에 대해 미지급 임금을 어떤 범위에서 청구할지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보수 결정에 주무장관 승인을 요하는 법인에서는 승인 없이 노사가 합의한 보수 인상 약정이 무효로 평가될 수 있는 영역. 다만 승인 대상 기관인지, 이미 지급된 관행이 있는지가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부·법원 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근거 규정·합의 자료 보존 (즉시)</strong> — 법인 설립 근거 법령, 단체협약, 보수 규정을 보존.</li>\n<li><strong>2단계 — 승인 대상 여부 확인 (1주)</strong> — 보수 결정에 주무장관 승인이 필요한 기관인지 확인.</li>\n<li><strong>3단계 — 승인 경과 확인 (2주)</strong> — 인상 약정에 대한 승인 신청·처리 경과를 확인.</li>\n<li><strong>4단계 — 지급 관행 정리 (병행)</strong> — 이미 지급된 인상분이나 관행이 있는지 급여 내역으로 정리.</li>\n<li><strong>5단계 — 노동청 진정·민사청구 (선택)</strong> — 유효하게 남는 부분에 대해 미지급 임금 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주무관청 승인 요건·보수인상 약정 효력·미지급 임금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 승인 대상 여부·약정 효력·지급 관행 갈래입니다.</strong></p>\n<ul>\n<li><strong>법인 설립 근거 법령·정관 (승인 대상 확인)</strong></li>\n<li><strong>보수 인상 단체협약 (합의 내용 확인)</strong></li>\n<li><strong>주무장관 승인 신청·처리 자료</strong></li>\n<li><strong>수지예산·총회 의결 자료</strong></li>\n<li><strong>월별 급여명세서 (인상분 반영·미반영 확인)</strong></li>\n<li><strong>과거 지급 관행 자료 (일부 지급 여부)</strong></li>\n<li><strong>근무기간·임금 자료 (청구 범위 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'노사가 합의했으니 무조건 받는다\'가 아니라 \'우리 기관이 승인 대상인지, 승인 절차가 어떻게 되었는지\'입니다. 근거 법령과 급여 내역을 대조하면 청구 가능 범위를 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>승인 대상 기관</strong> — 보수 결정에 승인을 요하는 기관인지.</li>\n<li><strong>승인 여부</strong> — 인상 약정이 승인을 받았는지.</li>\n<li><strong>약정 효력</strong> — 승인이 없으면 무효로 평가되는지.</li>\n<li><strong>지급 관행</strong> — 이미 지급된 부분이나 관행이 있는지.</li>\n<li><strong>소멸시효</strong> — 임금채권 3년 소멸시효 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n<li><strong>사업장 관할 고용노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주무장관 승인 없는 보수 인상 약정의 효력',
        summary:
          '대법원 2002다24935(대법원, 2002.11.13 선고) 영역에서 법원은 관련 법령에 따라 임직원의 보수를 주무장관이 정하는 기준에 따라 정하고, 회계연도마다 사업계획과 수지예산을 작성해 총회의 의결을 거쳐 주무장관의 승인을 얻어야 하며 그 수지예산을 변경할 때에도 같은 절차를 거쳐야 하는 법인이, 주무장관의 승인 없이 노동조합과 사이에 임직원의 보수를 종전보다 인상하기로 하는 내용의 단체협약을 체결한 경우 그 보수 인상 약정은 효력이 없다고 판시했습니다. 법령이 보수 결정과 예산 확정에 주무장관 승인이라는 절차를 요구하고 있는 이상, 노사 합의가 있었더라도 그 절차를 갖추지 못한 보수 인상 약정은 유효하다고 보기 어렵다는 취지입니다. 이는 보수 결정에 승인 절차가 요구되는 기관에 한정되는 판단이므로, 자기 법인이 그러한 승인 대상인지, 승인 절차가 어떻게 진행되었는지를 먼저 확인할 필요가 있습니다. 노사가 합의한 보수 인상이 승인이 없다는 이유로 지급되지 않고 있다면, 근거 법령과 승인 경과를 함께 검토해볼 수 있습니다.',
        takeaway: '주무장관 승인 요건 + 보수인상 약정 결합 시 승인 대상 기관·승인 여부·약정 효력·지급 관행 종합 검토 영역 — 변호인 상담·근거 법령 확인 권장.',
      },
    ],
    faq: [
      {
        question: '노사가 합의한 인상인데 승인이 없다고 무효인가요?',
        answer:
          '<strong>보수 결정에 승인을 요하는 기관이면 무효로 평가될 수 있는 영역입니다.</strong> 설립 근거 법령을 확인.',
      },
      {
        question: '우리 회사가 승인 대상 기관인지 어떻게 아나요?',
        answer:
          '<strong>설립 근거 법령과 정관으로 확인하는 영역입니다.</strong> 보수·예산 관련 조항을 정리.',
      },
      {
        question: '이미 인상분을 일부 받은 적이 있으면요?',
        answer:
          '<strong>지급 관행이 있었는지에 따라 달라질 수 있는 영역입니다.</strong> 급여명세서를 대조.',
      },
      {
        question: '그래도 받을 수 있는 부분이 있나요?',
        answer:
          '<strong>유효하게 남는 부분은 청구를 검토할 수 있는 영역입니다.</strong> 청구 범위를 산정.',
      },
      {
        question: '청구 기한이 있나요?',
        answer:
          '<strong>임금채권은 3년 소멸시효가 적용되는 영역입니다.</strong> 미지급 기간과 시효를 대조.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: 'wage 도메인 허브', href: '/guide/wage' },
      { label: '퇴사 후 임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '연차수당 계산 방법', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '연장근로수당 계산 청구', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ─── 5. wage-labor-supply-union-true-employer-status-track ───
  {
    domain: 'wage',
    slug: 'wage-labor-supply-union-true-employer-status-track',
    keyword: '근로자공급사업 노동조합 실질 사용자 임금 퇴직금 지급의무 판단',
    questionKeyword:
      '저는 노동조합이 운영하는 근로자공급사업을 통해 항만 등 현장에 배치되어 일해 왔어요. 조합을 통해 일을 배정받고 보수도 조합을 거쳐 받았는데, 오래 일한 뒤 밀린 수당과 퇴직금을 청구하려고 하니 누구를 상대로 청구해야 할지 모르겠어요. 조합은 자기들은 사용자가 아니라 공급만 했을 뿐이라고 하고, 실제 작업 현장 사업주는 자기들은 조합에서 인력을 받았을 뿐이라고 서로 미뤄요. 임금과 퇴직금은 결국 누구에게 청구해야 하나요?',
    ctaKeyword: '근로자공급사업 실질 사용자·임금 퇴직금 지급의무자 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '근로자공급 실질 사용자 임금 5단계 점검 | 로앤가이드',
      description:
        '조합을 통해 일했는데 임금·퇴직금을 누구에게 청구할지 막막하다면 실질 사용자 판단 기준까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 노동조합이 운영하는 근로자공급사업을 통해 항만 하역 등 작업 현장에 배치되어 일해 온 사람입니다. 저는 조합을 통해 그날그날 일을 배정받았고, 보수도 조합을 거쳐 지급받는 방식으로 오랜 기간 근무해 왔습니다. 그러다 밀린 수당과 퇴직금을 청구하려고 하니, 정작 누구를 상대로 청구해야 하는지가 문제가 되었습니다. 조합은 \'우리는 근로자를 공급했을 뿐 사용자가 아니다\'라고 하고, 실제 작업 현장의 사업주들은 \'우리는 조합으로부터 인력을 받아 썼을 뿐 직접 고용한 것이 아니다\'라며 서로 책임을 미룹니다. 저로서는 임금과 퇴직금을 실제로 지급할 의무가 있는 사람이 누구인지부터 가려야 대응을 시작할 수 있는데, 그 부분이 명확하지 않아 막막합니다. 제가 알아본 바로는, 근로기준법상 퇴직금 지급 의무를 지는 사용자란 실질적으로 근로자가 제공하는 노무에 대하여 보수를 지급할 의무를 지는 자를 말하고, 다른 법률 등에 의하여 사용자로 취급되는 경우가 있다고 해서 곧바로 근로기준법상 퇴직금 지급 의무까지 지는 것은 아니라고 합니다. 또한 퇴직금은 본질적으로 근로 제공에 대한 후불적 임금의 성질을 가지므로, 결국 누가 저의 노무에 대해 보수를 지급할 실질적 의무를 지는지에 따라 임금·퇴직금 지급 의무자가 정해질 수 있다고 합니다. 그렇다면 저는 조합과 현장 사업주 중 누가 저의 근로 제공에 대해 실질적으로 보수를 지급해 왔는지, 일의 배정과 지휘·감독을 누가 했는지, 보수 지급의 실제 흐름은 어땠는지를 확인해 보아야 할 것 같습니다. 도급제 일용 근로였는지, 공급사업의 운영 형태가 어땠는지, 보수를 누가 최종적으로 부담했는지 등을 따져 보아야 실질 사용자를 가릴 수 있을 것입니다. 그렇다면 제 상황에서도 첫째 저의 노무에 실질적으로 보수를 지급한 자가 누구인지, 둘째 조합이 근로기준법상 사용자에 해당하는지, 셋째 현장 사업주가 사용자에 해당하는지, 넷째 임금·퇴직금을 누구에게 청구할지, 다섯째 소멸시효는 어떻게 되는지를 차례로 따져 보아야 할 것 같습니다. 실질 사용자를 가려 대응을 준비해보고 싶습니다." 근로기준법 제2조는 근로자·사용자의 정의를, 근로자퇴직급여 보장법은 퇴직금 지급 의무를 정하는 영역입니다. 판례는 퇴직금은 후불적 임금의 성질을 가지고, 퇴직금 지급 의무를 지는 사용자는 실질적으로 근로자의 노무에 보수를 지급할 의무를 지는 자를 말하며, 다른 법률에 의해 사용자로 취급된다고 해서 곧바로 퇴직금 지급 의무를 지는 것은 아니라고 본 사례가 있는 영역입니다. 근로자공급사업 + 실질 사용자 판단 결합은 다툴 여지가 있는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 근로자공급 실질 사용자 임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보수 지급 실질·조합의 사용자성·현장 사업주 사용자성·청구 상대방·소멸시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보수 지급 실질</strong> — 근로 제공에 대해 실질적으로 보수를 지급한 자가 누구인지.</li>\n<li><strong>② 조합의 사용자성</strong> — 조합이 근로기준법상 임금·퇴직금 지급 의무를 지는 사용자에 해당하는지.</li>\n<li><strong>③ 현장 사업주 사용자성</strong> — 실제 작업 현장 사업주가 실질 사용자에 해당하는지.</li>\n<li><strong>④ 청구 상대방</strong> — 실질 사용자를 상대로 임금·퇴직금을 청구할지.</li>\n<li><strong>⑤ 소멸시효</strong> — 임금·퇴직금 채권의 소멸시효 3년 이내 청구가 가능한지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직금 지급 의무를 지는 사용자는 실질적으로 노무에 보수를 지급할 의무를 지는 자인 영역. 다른 법률상 사용자로 취급된다고 해서 곧바로 퇴직금 의무를 지는 것은 아니므로, 실질 사용자를 가리는 것이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부·법원 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로·보수 자료 보존 (즉시)</strong> — 배정 내역, 보수 지급 내역, 공급사업 계약 관계 자료를 보존.</li>\n<li><strong>2단계 — 보수 흐름 정리 (1주)</strong> — 보수를 실제로 부담·지급한 주체와 지급 경로를 정리.</li>\n<li><strong>3단계 — 지휘감독 주체 정리 (1주)</strong> — 일의 배정과 작업 지휘·감독을 누가 했는지 정리.</li>\n<li><strong>4단계 — 청구 상대방 특정 (2주)</strong> — 실질 사용자를 특정해 임금·퇴직금 청구 상대를 정함.</li>\n<li><strong>5단계 — 노동청 진정·민사청구 (선택)</strong> — 특정된 상대를 대상으로 진정 또는 민사청구 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">근로자공급사업 실질 사용자·임금·퇴직금 지급의무자 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 보수 지급 실질·지휘감독 주체·청구 상대 갈래입니다.</strong></p>\n<ul>\n<li><strong>일 배정 내역·근무 기록 (배정 주체 확인)</strong></li>\n<li><strong>보수 지급 내역 (지급 주체·경로 확인)</strong></li>\n<li><strong>근로자공급사업 관련 계약·규약</strong></li>\n<li><strong>현장 작업지시·관리 자료 (지휘감독 주체)</strong></li>\n<li><strong>미지급 수당·퇴직금 산정표</strong></li>\n<li><strong>근무기간 전체 자료 (소멸시효 대조)</strong></li>\n<li><strong>4대보험·소득 신고 자료 (사용자 취급 여부)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'조합을 통해 일했으니 조합이 사용자\'가 아니라 \'실질적으로 내 노무에 보수를 지급할 의무를 진 자가 누구인지\'입니다. 보수 흐름과 지휘감독 주체를 정리하면 청구 상대를 특정할 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보수 지급 실질</strong> — 누가 실질적으로 보수를 지급했는지.</li>\n<li><strong>조합의 사용자성</strong> — 조합이 근로기준법상 사용자인지.</li>\n<li><strong>현장 사업주 책임</strong> — 현장 사업주가 실질 사용자인지.</li>\n<li><strong>청구 상대</strong> — 임금·퇴직금 청구 상대를 어떻게 특정할지.</li>\n<li><strong>소멸시효</strong> — 3년 소멸시효 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n<li><strong>사업장 관할 고용노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 지급 의무를 지는 실질 사용자의 판단',
        summary:
          '대법원 2004다8333(대법원, 2007.03.30 선고) 영역에서 법원은 근로기준법상 퇴직금 제도는 근로자가 1년 이상 계속 근로를 제공하고 퇴직할 때 사용자가 임금 일부를 축적했다가 일시금으로 지급하는 것으로서 퇴직금은 본질적으로 후불적 임금의 성질을 지닌다고 밝혔습니다. 그러면서 근로기준법상 퇴직금 지급 의무를 지는 사용자란 실질적으로 근로자가 제공하는 노무에 대하여 보수를 지급할 의무를 지는 자를 말하는 것이고, 그러한 관계에 있지 않다면 다른 법률 등에 의하여 사용자로 취급되는 경우가 있다고 하여 근로기준법상 퇴직금 지급 의무까지 진다고 할 수 없다고 판시했습니다. 도급제 일용 근로, 근로자공급사업의 운영 형태, 임금 수령관계 등을 종합해 항운노동조합이 소속 조합원에 대하여 퇴직금 지급 의무를 지는 사용자라고 보기 어렵다고 본 사례입니다. 조합을 통해 일했더라도 임금·퇴직금 지급 의무자는 실질적으로 보수를 지급할 의무를 진 자를 기준으로 가려야 한다는 취지입니다. 공급사업을 통해 일한 뒤 임금·퇴직금 청구 상대가 불분명하다면, 보수 흐름과 지휘감독 주체를 기준으로 실질 사용자를 검토해볼 수 있습니다.',
        takeaway: '근로자공급사업 + 실질 사용자 판단 결합 시 보수 지급 실질·조합 사용자성·현장 사업주 책임·청구 상대 종합 검토 영역 — 변호인 상담·노동청 진정 권장.',
      },
    ],
    faq: [
      {
        question: '조합을 통해 일했으니 조합이 사용자 아닌가요?',
        answer:
          '<strong>실질적으로 보수를 지급할 의무를 진 자가 사용자인 영역입니다.</strong> 보수 지급 경로를 확인.',
      },
      {
        question: '현장 사업주에게 청구할 수 있나요?',
        answer:
          '<strong>현장 사업주가 실질 사용자인지에 따라 달라지는 영역입니다.</strong> 지휘감독 주체를 정리.',
      },
      {
        question: '서로 자기는 사용자가 아니라고 미루면요?',
        answer:
          '<strong>보수 흐름과 근로 실태로 실질 사용자를 가리는 영역입니다.</strong> 배정·지급 자료를 확보.',
      },
      {
        question: '퇴직금도 청구할 수 있나요?',
        answer:
          '<strong>1년 이상 계속 근로가 인정되면 후불 임금인 퇴직금을 청구할 여지가 있는 영역입니다.</strong> 근무기간을 정리.',
      },
      {
        question: '청구 기한이 있나요?',
        answer:
          '<strong>임금·퇴직금 채권은 3년 소멸시효가 적용되는 영역입니다.</strong> 근무기간과 시효를 대조.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: 'wage 도메인 허브', href: '/guide/wage' },
      { label: '퇴사 후 임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 소멸시효', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '연차수당 계산 방법', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '연장근로수당 계산 청구', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ─── 6. unemployment-over65-employment-succession-continuous-insured-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-over65-employment-succession-continuous-insured-track',
    keyword: '65세 이후 고용승계 계속고용 피보험자격 실업급여 인정 판단',
    questionKeyword:
      '저는 한 회사에서 오래 일해 왔는데, 그 회사가 다른 회사에 사업을 넘기면서 저도 근로 단절 없이 새 회사로 옮겨 계속 같은 일을 해 왔어요. 그런데 옮길 무렵 제 나이가 이미 65세를 넘긴 상태였어요. 이제 그만두고 실업급여를 알아보니, 65세 이후에 새로 고용되면 실업급여가 안 된다며 피보험자격이 인정되지 않는다고 해요. 저는 새로 취직한 게 아니라 고용승계로 계속 근무한 건데도 실업급여를 못 받는 건가요?',
    ctaKeyword: '65세 이후 고용승계·계속고용·피보험자격 실업급여 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '65세 이후 고용승계 실업급여 5단계 점검 | 로앤가이드',
      description:
        '고용승계로 계속 일했는데 65세라 실업급여가 안 된다고 해 막막하다면 계속고용 인정 기준까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 한 회사에서 오랜 기간 근무해 온 사람입니다. 그러던 중 다니던 회사가 다른 회사와 계약을 맺어 사업을 넘겼고, 저도 근로가 끊기지 않고 새 회사로 옮겨 예전과 같은 업무를 계속 수행해 왔습니다. 문제는 그 무렵 제 나이가 이미 65세를 넘긴 상태였다는 점입니다. 최근 일을 그만두고 실업급여를 알아보니, 65세 이후에 새로 고용된 사람은 고용보험 실업급여 사업의 적용에서 제외된다며 저의 피보험자격이 인정되지 않는다는 답변을 받았습니다. 저로서는 당혹스럽습니다. 저는 65세가 넘은 뒤에 어느 회사에 처음 취직한 것이 아니라, 그 전부터 계속 근무하던 사업이 다른 회사로 넘어가면서 고용이 승계되어 근로 단절 없이 이어서 일한 것이기 때문입니다. 실질적으로 보면 저는 계속 같은 자리에서 같은 일을 해 왔을 뿐인데, 사업주가 바뀌었다는 형식적 사정 때문에 \'65세 이후 신규 고용\'으로 취급되어 실업급여에서 배제된다는 것은 납득하기 어렵습니다. 제가 알아본 바로는, 고용보험법은 65세 이후에 새로 고용된 사람에 대해서는 실업급여 적용을 제외하지만, 65세 전부터 피보험자격을 유지하며 근무하던 사람이 65세 이후에도 계속 고용된 경우에는 실업급여 적용이 유지된다고 합니다. 그리고 고용승계가 이루어져 근로가 단절 없이 이어진 경우라면, 사업주가 바뀌었더라도 \'65세 이후에도 계속하여 고용된 경우\'로 볼 여지가 있다고 합니다. 그렇다면 저의 경우 종전 회사와 새 회사 사이에 고용승계가 실제로 있었는지, 근로 제공이 실제로 단절 없이 이어졌는지, 인수 형태가 포괄적 양수·양도에 해당하는지 등을 확인해 보아야 할 것 같습니다. 승계 계약의 내용과 근무 연속성이 인정된다면, 저는 65세 이후 신규 고용이 아니라 계속 고용된 사람으로 평가되어 실업급여 자격을 인정받을 여지가 있어 보입니다. 그렇다면 제 상황에서도 첫째 고용승계가 있었는지, 둘째 근로가 단절 없이 이어졌는지, 셋째 그것이 계속 고용에 해당하는지, 넷째 피보험자격 확인청구를 어떻게 할지, 다섯째 실업급여 신청은 어떻게 진행할지를 차례로 따져 보아야 할 것 같습니다. 고용승계로 계속 근무한 경우의 실업급여 자격을 점검해보고 싶습니다." 고용보험법 제10조는 적용 제외를, 제40조는 수급자격 요건을 정하는 영역입니다. 고용보험심사위원회 재결례는 고용승계 사실이 확인되고 근로 단절 없이 계속 근무한 경우 65세 이후에도 계속하여 고용된 경우로 보아 실업급여 수급자격을 인정한 사례 흐름이 있는 영역입니다. 고용승계 + 계속고용 결합은 다툴 여지가 있는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 65세 이후 고용승계 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용승계 여부·근로 연속성·계속고용 해당성·피보험자격 확인청구·수급 신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 고용승계 여부</strong> — 종전 회사와 새 회사 사이에 고용승계가 실제로 이루어졌는지.</li>\n<li><strong>② 근로 연속성</strong> — 근로 제공이 단절 없이 이어졌는지.</li>\n<li><strong>③ 계속고용 해당성</strong> — 65세 이후에도 계속하여 고용된 경우로 볼 수 있는지.</li>\n<li><strong>④ 피보험자격 확인청구</strong> — 인정되지 않은 기간에 대해 피보험자격 확인청구를 할 수 있는지.</li>\n<li><strong>⑤ 수급 신청</strong> — 자격이 인정되면 실업급여 수급자격 인정신청을 어떻게 진행할지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 65세 이후 신규 고용은 실업급여에서 제외되지만, 고용승계로 근로 단절 없이 계속 고용된 경우에는 계속 고용으로 보아 자격이 인정될 여지가 있는 영역. 승계와 근로 연속성 입증이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 확인청구 5단계',
        content:
          '<p><strong>A. 근로복지공단·고용센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 승계·근무 자료 보존 (즉시)</strong> — 영업양도·인수 계약, 근로계약서, 급여 내역, 4대보험 이력을 보존.</li>\n<li><strong>2단계 — 연속성 정리 (1주)</strong> — 사업주 변경 전후로 근로가 단절 없이 이어졌는지 정리.</li>\n<li><strong>3단계 — 승계 형태 확인 (2주)</strong> — 인수가 포괄적 양수·양도에 해당하는지 계약 내용으로 확인.</li>\n<li><strong>4단계 — 피보험자격 확인청구 (근로복지공단)</strong> — 인정되지 않은 기간에 대해 확인청구서 제출.</li>\n<li><strong>5단계 — 수급자격 인정신청 (고용센터)</strong> — 자격 인정 시 실업급여 수급자격 인정신청 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">65세 이후 고용승계·계속고용·피보험자격 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 고용승계·근로 연속성·계속고용 갈래입니다.</strong></p>\n<ul>\n<li><strong>영업양도·인수 계약서 (승계 여부 확인)</strong></li>\n<li><strong>종전·현 회사 근로계약서 (연속성 입증)</strong></li>\n<li><strong>급여 지급 내역 (단절 여부 확인)</strong></li>\n<li><strong>4대보험 가입·상실 이력 (피보험 기간 확인)</strong></li>\n<li><strong>업무·근무장소 동일성 자료</strong></li>\n<li><strong>피보험자격 불인정 통지 (처분 근거 확인)</strong></li>\n<li><strong>이직확인서·재직증명 (근무기간 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'65세 넘어 옮겼으니 신규 고용\'이 아니라 \'승계로 근로가 단절 없이 이어진 계속 고용인지\'입니다. 승계 계약과 근무 연속성 자료를 정리하면 자격을 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고용승계 여부</strong> — 승계가 실제로 이루어졌는지.</li>\n<li><strong>근로 연속성</strong> — 근로가 단절 없이 이어졌는지.</li>\n<li><strong>승계 형태</strong> — 포괄적 양수·양도에 해당하는지.</li>\n<li><strong>계속고용 인정</strong> — 65세 이후 계속 고용으로 볼 수 있는지.</li>\n<li><strong>신청 기한</strong> — 이직 후 수급자격 인정신청 기한.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 (피보험자격 확인청구)</strong></li>\n<li><strong>관할 고용센터 (수급자격 인정신청)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 고용승계로 65세 이후 계속 고용된 경우의 수급자격 인정',
        summary:
          '고용보험심사위원회 재결(2023재결 제51호, 2023.06.21) 영역에서 위원회는 청구인이 종전 사업장에서 근무한 후 새로운 사업장으로 옮겨 근무하면서 새로이 고용된 것이 아니라 고용승계되었다고 주장하며 고용보험 피보험자격 확인청구를 한 사안에서, 고용승계 사실이 확인되고 근로의 단절 없이 계속 근무한 사실을 볼 때 65세 이후에도 계속하여 고용된 경우로 보아 실업급여 수급자격이 인정되어야 한다고 판단해 피보험자격 확인청구 불인정 처분을 취소했습니다. 65세 이후 신규 고용은 실업급여 적용에서 제외되지만, 65세 전부터 이어진 고용이 승계되어 근로가 단절 없이 계속된 경우에는 계속 고용으로 보아 자격을 인정할 여지가 있다는 취지입니다. 다만 승계의 실제 여부와 근로 연속성은 계약 형태·근무 이력으로 구체적으로 확인해야 합니다. 고용승계로 옮겨 계속 근무했는데 65세 이후 신규 고용으로 취급되어 실업급여가 거부됐다면, 승계와 연속성 자료를 근거로 확인청구를 검토해볼 수 있습니다.',
        takeaway: '고용승계 + 65세 이후 계속고용 결합 시 고용승계 여부·근로 연속성·계속고용 해당성·피보험자격 확인청구 종합 검토 영역 — 근로복지공단 확인청구·고용센터 상담 권장.',
      },
    ],
    faq: [
      {
        question: '65세 넘어 옮겼으면 실업급여가 아예 안 되나요?',
        answer:
          '<strong>고용승계로 계속 고용된 경우라면 인정될 여지가 있는 영역입니다.</strong> 승계 계약을 확인.',
      },
      {
        question: '고용승계가 있었는지 어떻게 확인하나요?',
        answer:
          '<strong>영업양도·인수 계약과 근무 연속성으로 확인하는 영역입니다.</strong> 계약서와 급여 내역을 정리.',
      },
      {
        question: '사업주가 바뀌었는데도 계속 고용인가요?',
        answer:
          '<strong>근로가 단절 없이 이어졌다면 계속 고용으로 볼 여지가 있는 영역입니다.</strong> 근무 이력을 대조.',
      },
      {
        question: '피보험자격이 인정 안 됐는데 다시 다툴 수 있나요?',
        answer:
          '<strong>피보험자격 확인청구로 다시 다툴 수 있는 영역입니다.</strong> 불인정 통지의 근거를 확인.',
      },
      {
        question: '실업급여 신청 기한이 있나요?',
        answer:
          '<strong>이직 후 지체 없이 신청하는 것이 안전한 영역입니다.</strong> 관할 고용센터 일정을 확인.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: 'unemployment 도메인 허브', href: '/guide/unemployment' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment/unemployment-benefit-guide' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 불인정 이의신청', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '퇴사 후 신청 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
    ],
  },

  // ─── 7. unemployment-employment-insurance-premium-overreport-refund-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-employment-insurance-premium-overreport-refund-track',
    keyword: '고용보험료 과다신고 납부 환급 신고행위 당연무효 판단',
    questionKeyword:
      '저희는 직원 급여에서 고용보험료 등을 신고·납부해 온 사업장인데, 특별격려금과 특별성과급까지 총임금에 합산해 보험료를 산정하고 신고·납부해 왔다는 걸 뒤늦게 알았어요. 이런 일회성 금품은 보험료 산정 기초에서 빼야 하는 게 아닌가 싶어 그동안 더 낸 보험료를 돌려받으려고 하는데, 공단은 신고한 대로 확정된 것이라 환급이 어렵다고 해요. 잘못 신고해서 더 낸 고용보험료도 돌려받을 수 있나요? 어떤 경우에 환급이 되는 건가요?',
    ctaKeyword: '고용보험료 과다신고·환급·신고행위 당연무효 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '고용보험료 과다납부 환급 5단계 점검 | 로앤가이드',
      description:
        '특별성과급까지 합산해 고용보험료를 과다 납부해 막막하다면 신고행위 하자·환급 가능 여부까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저희는 직원 급여를 기준으로 고용보험료 등을 신고하고 납부해 온 사업장입니다. 그런데 과거 보험료 신고 내역을 다시 살펴보니, 매년 지급한 특별격려금과 특별성과급까지 보험료 산정의 기초가 되는 총임금에 합산하여 보험료를 산정한 다음 그대로 신고·납부해 온 사실을 뒤늦게 확인했습니다. 저희 생각으로는 이런 일회성 격려금·성과급은 보험료 산정 기초에서 제외되어야 하는 것 아닌가 싶었고, 그렇다면 그동안 실제보다 많은 보험료를 납부해 온 셈이라 더 낸 부분을 돌려받고 싶습니다. 그런데 근로복지공단에 문의하니, 고용보험료 등은 신고한 대로 납부의무가 확정되는 것이라 이미 확정·납부된 보험료를 곧바로 부당이득으로 보아 환급하기는 어렵다는 답변을 받았습니다. 저희로서는 혼란스럽습니다. 산정 기초를 잘못 잡아 더 많이 납부한 것이 분명해 보이는데도, 신고를 저희가 했다는 이유만으로 환급이 어렵다는 것이 이해가 잘 되지 않기 때문입니다. 제가 알아본 바로는, 산재보험료·고용보험료 등은 신고(보고)납부 방식으로 징수되어 원칙적으로 납부의무자의 신고행위에 의하여 납부의무가 구체적으로 확정되고, 공단은 그 확정된 채권에 따라 납부된 보험료를 보유하는 것이라고 합니다. 따라서 납부의무자의 신고행위에 하자가 있더라도 그 하자가 중대하고 명백하여 신고행위가 당연무효로 되지 않는 한, 납부된 보험료가 곧바로 부당이득에 해당한다고 보기는 어렵다고 합니다. 그리고 신고행위의 하자가 중대하고 명백해 당연무효인지는, 신고행위의 근거 법령, 하자 있는 신고에 대한 구제수단, 신고에 이르게 된 구체적 사정 등을 종합해 합리적으로 판단해야 한다고 합니다. 실제로 특별격려금·특별성과급을 총임금에 합산해 신고·납부한 행위에 대해, 그 하자가 중대하기는 하지만 객관적으로 명백하지는 않아 당연무효는 아니라고 본 사례도 있다고 들었습니다. 그렇다면 저희로서는 이 신고 하자가 당연무효로 평가될 수 있는지, 아니면 별도의 정정·경정 등 구제수단을 통해 조정해야 하는지를 확인해 보아야 할 것 같습니다. 그렇다면 저희 상황에서도 첫째 합산이 잘못된 것이 맞는지, 둘째 신고행위의 하자가 중대·명백해 당연무효인지, 셋째 당연무효가 아니라면 어떤 구제수단이 있는지, 넷째 환급·조정 절차를 어떻게 진행할지, 다섯째 기한은 어떻게 되는지를 차례로 따져 보아야 할 것 같습니다. 잘못 신고해 더 낸 고용보험료의 환급 가능성을 점검해보고 싶습니다." 고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률은 신고납부 방식을 정하는 영역입니다. 판례는 특별격려금·특별성과급을 총임금에 합산해 신고·납부한 행위는 하자가 중대하기는 하지만 객관적으로 명백하지는 않아 당연무효가 아니라고 본 사례가 있는 영역입니다. 신고 하자 + 당연무효 판단 결합은 환급 가능성을 따지는 트랙입니다. 납부자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 고용보험료 과다납부 환급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 합산 오류·신고행위 하자·당연무효 여부·구제수단·환급 절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합산 오류</strong> — 특별격려금·특별성과급 등이 보험료 산정 기초에서 제외되어야 하는지.</li>\n<li><strong>② 신고행위 하자</strong> — 신고행위에 하자가 있는지, 그 정도가 어떤지.</li>\n<li><strong>③ 당연무효 여부</strong> — 하자가 중대하고 명백해 신고행위가 당연무효에 해당하는지.</li>\n<li><strong>④ 구제수단</strong> — 당연무효가 아니라면 정정·경정 등 별도 구제수단이 있는지.</li>\n<li><strong>⑤ 환급 절차</strong> — 환급·조정을 어떤 절차로 신청할지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 고용보험료는 신고로 납부의무가 확정되어, 신고 하자가 중대·명백해 당연무효가 아니면 납부액을 곧바로 부당이득으로 보기 어려운 영역. 하자가 당연무효인지, 아니면 정정 절차로 조정할지가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 확인 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·납부 자료 보존 (즉시)</strong> — 보험료 신고서, 산정 내역, 급여·금품 지급 내역을 보존.</li>\n<li><strong>2단계 — 합산 항목 정리 (1주)</strong> — 특별격려금·특별성과급 등 산정 기초 포함 여부를 항목별로 정리.</li>\n<li><strong>3단계 — 하자 정도 검토 (2주)</strong> — 신고행위 하자가 중대·명백해 당연무효로 볼 수 있는지 검토.</li>\n<li><strong>4단계 — 정정·경정 신청 (근로복지공단)</strong> — 당연무효가 아니라면 정정·경정 등 구제수단으로 조정 신청.</li>\n<li><strong>5단계 — 불복 절차 검토 (필요 시)</strong> — 처분에 불복 시 심사청구·행정소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">고용보험료 과다신고·환급·당연무효 판단 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 합산 오류·신고 하자·구제수단 갈래입니다.</strong></p>\n<ul>\n<li><strong>연도별 보험료 신고서 (신고 내용 확인)</strong></li>\n<li><strong>보험료 산정 내역 (총임금 구성 확인)</strong></li>\n<li><strong>특별격려금·특별성과급 지급 내역</strong></li>\n<li><strong>급여대장·임금 자료 (기초 임금 대조)</strong></li>\n<li><strong>납부 확인서 (실제 납부액)</strong></li>\n<li><strong>공단 안내·처분 문서 (처리 경과)</strong></li>\n<li><strong>과다납부 산정표 (환급 청구 범위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'더 냈으니 당연히 환급된다\'가 아니라 \'신고 하자가 당연무효인지, 아니면 정정 절차로 조정할지\'입니다. 신고서와 산정 내역을 대조하면 구제수단을 검토할 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>합산 오류</strong> — 산정 기초에서 제외될 항목이 포함됐는지.</li>\n<li><strong>하자의 정도</strong> — 하자가 중대·명백한지.</li>\n<li><strong>당연무효 여부</strong> — 신고행위가 당연무효로 평가되는지.</li>\n<li><strong>구제수단</strong> — 정정·경정 등 조정 경로가 있는지.</li>\n<li><strong>기한</strong> — 정정·환급 신청 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 (보험료 정정·경정)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 총임금 과다 산입 신고·납부의 당연무효 여부',
        summary:
          '대법원 2002다54615(대법원, 2002.12.10 선고) 영역에서 법원은 신고(보고)납부 방식으로 징수되는 산재보험료·고용보험료 및 임금채권보장 부담금은 원칙적으로 납부의무자의 신고행위에 의하여 납부의무가 구체적으로 확정되고, 그 납부행위는 신고로 확정된 구체적 납부채무의 이행으로 이루어지므로, 납부의무자의 신고행위에 하자가 있더라도 그것이 중대하고 명백하여 신고행위가 당연무효로 되지 않는 한 납부된 부담금이 바로 부당이득에 해당한다고 할 수 없다고 판시했습니다. 신고행위의 하자가 중대·명백하여 당연무효인지는 근거 법령, 하자 있는 신고에 대한 구제수단, 신고에 이르게 된 구체적 사정 등을 종합해 합리적으로 판단해야 한다고 보았습니다. 그러면서 보험료 등을 산정하는 기초가 되는 총임금의 범위에 특별격려금·특별성과급을 합산해 산정한 다음 신고·납부한 행위는 그 하자가 중대하기는 하지만 객관적으로 명백하지는 않아 당연무효가 아니라고 한 사례입니다. 잘못 산입해 과다 납부한 보험료라도 곧바로 부당이득으로 환급되지는 않을 수 있으므로, 당연무효 여부와 정정·경정 등 구제수단을 함께 검토해볼 수 있습니다.',
        takeaway: '보험료 과다 신고·납부 + 당연무효 판단 결합 시 합산 오류·신고 하자·당연무효 여부·구제수단 종합 검토 영역 — 근로복지공단 상담·전문가 상담 권장.',
      },
    ],
    faq: [
      {
        question: '잘못 신고해서 더 낸 보험료도 돌려받나요?',
        answer:
          '<strong>신고행위가 당연무효인지에 따라 달라지는 영역입니다.</strong> 신고서와 산정 내역을 확인.',
      },
      {
        question: '신고를 우리가 했으면 환급이 어려운가요?',
        answer:
          '<strong>신고로 납부의무가 확정되어 곧바로 부당이득으로 보기는 어려운 영역입니다.</strong> 하자 정도를 검토.',
      },
      {
        question: '특별성과급을 넣은 게 명백한 잘못 아닌가요?',
        answer:
          '<strong>하자가 중대해도 명백하지 않으면 당연무효가 아닐 수 있는 영역입니다.</strong> 산정 근거를 정리.',
      },
      {
        question: '당연무효가 아니면 방법이 없나요?',
        answer:
          '<strong>정정·경정 등 별도 구제수단을 검토하는 영역입니다.</strong> 공단에 처리 경로를 확인.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>정정·환급에는 기한이 있으므로 신속히 확인해야 하는 영역입니다.</strong> 관련 규정을 확인.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: 'unemployment 도메인 허브', href: '/guide/unemployment' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment/unemployment-benefit-guide' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 불인정 이의신청', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '퇴사 후 신청 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
    ],
  },

  // ─── 8. retirement-business-transfer-payout-resign-rehire-continuity-track ───
  {
    domain: 'retirement',
    slug: 'retirement-business-transfer-payout-resign-rehire-continuity-track',
    keyword: '영업양도 퇴직금 수령 후 퇴직 재입사 형식 계속근로 단절 판단',
    questionKeyword:
      '저는 회사가 다른 회사에 영업을 넘길 때, 회사 방침에 따라 일단 퇴직 처리되어 퇴직금을 받은 뒤 곧바로 새 회사에 재입사하는 형식으로 계속 같은 일을 해 왔어요. 당시엔 회사가 시키는 대로 서류에 서명했을 뿐이고, 저는 그만둘 생각이 전혀 없었어요. 나중에 진짜로 퇴직하면서 퇴직금을 정산하려는데, 회사는 예전 영업양도 때 이미 퇴직금을 줬으니 그 이전 근무기간은 빼고 재입사 이후만 계산한다고 해요. 영업양도 때 퇴직금을 받았으면 그 전 근무기간은 정말 통산이 안 되나요?',
    ctaKeyword: '영업양도 퇴직금 수령·퇴직 재입사·계속근로 통산 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '영업양도 퇴직금 수령 계속근로 5단계 점검 | 로앤가이드',
      description:
        '영업양도 때 퇴직금을 받았다고 이전 근무기간을 빼려 해 막막하다면 계속근로 통산 여부까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 다니던 회사가 다른 회사에 영업을 양도할 때, 회사의 경영방침에 따라 일단 종전 회사에서 퇴직 처리되어 퇴직금을 지급받은 뒤 곧바로 양수 회사에 재입사하는 형식을 거쳐 계속 같은 업무를 수행해 온 근로자입니다. 당시 저는 회사를 그만둘 생각이 전혀 없었고, 그저 회사가 정리해 준 서류에 시키는 대로 서명했을 뿐입니다. 실제로 저는 퇴직·재입사 전후로 하는 일도, 근무 장소도, 함께 일하는 동료도 그대로였고, 단지 소속 회사의 이름만 바뀌었을 뿐입니다. 그런데 이번에 진짜로 회사를 그만두면서 퇴직금을 정산하려 하니, 회사는 \'예전 영업양도 때 이미 퇴직금을 지급했으니 그 이전 근무기간은 제외하고, 재입사 이후 기간만으로 퇴직금을 계산하겠다\'고 합니다. 저로서는 납득하기 어렵습니다. 제가 자의로 사직한 것이 아니라 회사 방침에 따라 형식적으로 퇴직·재입사 절차를 밟은 것뿐인데, 그 이전의 오랜 근무기간이 통째로 사라지는 것은 부당하다고 느껴지기 때문입니다. 제가 알아본 바로는, 영업양도의 경우 특별한 사정이 없는 한 근로자의 근로관계는 양수인에게 계속 승계되는 것이고, 영업양도 시 퇴직금을 수령했다는 사실만으로 전 회사와의 근로관계가 종료되고 새로운 근로관계가 시작되었다고 볼 것은 아니라고 합니다. 다만 근로자가 자의에 의하여 사직서를 제출하고 퇴직금을 지급받았다면 계속근로의 단절에 동의한 것으로 볼 여지가 있지만, 반대로 회사의 경영방침에 따른 일방적 결정으로 퇴직 및 재입사의 형식을 거친 것이라면 퇴직금을 지급받았더라도 계속근로관계는 단절되지 않는다고 합니다. 그렇다면 저의 경우 퇴직·재입사가 저의 자발적 의사에 따른 것이었는지, 아니면 회사의 일방적 방침에 따른 형식적 절차였는지를 가려야 할 것 같습니다. 만약 후자라면, 이전 근무기간까지 통산해 퇴직금을 재산정할 여지가 있어 보입니다. 그렇다면 제 상황에서도 첫째 영업양도로 근로관계가 승계되었는지, 둘째 퇴직·재입사가 자의였는지 회사 방침이었는지, 셋째 그렇다면 계속근로가 단절되지 않는지, 넷째 이전 근무기간을 통산해 퇴직금을 재산정할 수 있는지, 다섯째 이미 받은 퇴직금은 어떻게 정산할지를 차례로 따져 보아야 할 것 같습니다. 계속근로 통산 여부를 점검해보고 싶습니다." 근로자퇴직급여 보장법은 계속근로기간을 기준으로 한 퇴직금을 정하는 영역입니다. 판례는 영업양도 시 퇴직금을 수령했더라도 그것이 자의가 아니라 회사의 경영방침에 따른 일방적 결정으로 퇴직·재입사 형식을 거친 것이라면 계속근로관계는 단절되지 않는다고 본 사례가 있는 영역입니다. 영업양도 + 형식적 퇴직·재입사 결합은 계속근로 통산을 다투는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 영업양도 퇴직금 수령 계속근로 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로관계 승계·퇴직 자의성·계속근로 단절 여부·퇴직금 재산정·기지급 정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로관계 승계</strong> — 영업양도로 근로관계가 양수인에게 승계되었는지.</li>\n<li><strong>② 퇴직 자의성</strong> — 퇴직·재입사가 자의였는지, 회사의 일방적 방침이었는지.</li>\n<li><strong>③ 계속근로 단절 여부</strong> — 회사 방침에 따른 형식이라면 계속근로가 단절되지 않는지.</li>\n<li><strong>④ 퇴직금 재산정</strong> — 이전 근무기간을 통산해 퇴직금을 재산정할 수 있는지.</li>\n<li><strong>⑤ 기지급 정산</strong> — 영업양도 때 받은 퇴직금을 어떻게 정산·공제할지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영업양도 때 퇴직금을 받았어도 그것이 회사의 일방적 방침에 따른 형식적 퇴직·재입사였다면 계속근로가 단절되지 않는 영역. 퇴직·재입사의 자의성이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부·법원 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 승계·근무 자료 보존 (즉시)</strong> — 영업양도 계약, 사직·재입사 서류, 근무 기록을 보존.</li>\n<li><strong>2단계 — 자의성 정리 (1주)</strong> — 퇴직·재입사가 회사 방침에 따른 것이었는지 경위를 정리.</li>\n<li><strong>3단계 — 연속성 확인 (1주)</strong> — 업무·근무장소·동료가 그대로였는지 연속성을 확인.</li>\n<li><strong>4단계 — 퇴직금 재산정 (2주)</strong> — 통산 근무기간과 평균임금으로 퇴직금을 재산정하고 기지급분을 정산.</li>\n<li><strong>5단계 — 노동청 진정·민사청구 (선택)</strong> — 차액에 대해 진정 또는 민사청구 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영업양도 퇴직금 수령·계속근로 통산·재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 승계·자의성·계속근로 통산 갈래입니다.</strong></p>\n<ul>\n<li><strong>영업양도·양수 계약서 (승계 여부 확인)</strong></li>\n<li><strong>사직서·재입사 계약서 (형식·시점 확인)</strong></li>\n<li><strong>영업양도 당시 퇴직금 지급 내역</strong></li>\n<li><strong>업무·근무장소 동일성 자료 (연속성 입증)</strong></li>\n<li><strong>재직 전체 기간 근무 기록 (통산 기초)</strong></li>\n<li><strong>퇴직 요구·방침 정황 자료 (자의성 판단)</strong></li>\n<li><strong>평균임금 산정 자료 (재산정 기초)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'그때 퇴직금 받았으니 끝\'이 아니라 \'그 퇴직·재입사가 자의였는지, 회사 방침에 따른 형식이었는지\'입니다. 승계 계약과 근무 연속성 자료를 정리하면 통산을 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로관계 승계</strong> — 영업양도로 근로관계가 승계됐는지.</li>\n<li><strong>퇴직 자의성</strong> — 퇴직·재입사가 자의였는지.</li>\n<li><strong>계속근로 통산</strong> — 이전 기간이 통산되는지.</li>\n<li><strong>기지급 정산</strong> — 이미 받은 퇴직금의 공제 방법.</li>\n<li><strong>소멸시효</strong> — 퇴직금 채권 3년 소멸시효 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n<li><strong>사업장 관할 고용노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 퇴직금 수령과 계속근로 단절 여부',
        summary:
          '대법원 2000다18608(대법원, 2001.11.13 선고) 영역에서 법원은 영업양도의 경우에는 특별한 사정이 없는 한 근로자들의 근로관계 역시 양수인에 의하여 계속적으로 승계되는 것으로, 영업양도 시 퇴직금을 수령하였다는 사실만으로 전 회사와의 근로관계가 종료되고 인수한 회사와 새로운 근로관계가 시작되었다고 볼 것은 아니라고 판시했습니다. 다만 근로자가 자의에 의하여 사직서를 제출하고 퇴직금을 지급받았다면 계속근로의 단절에 동의한 것으로 볼 여지가 있지만, 이와 달리 회사의 경영방침에 따른 일방적 결정으로 퇴직 및 재입사의 형식을 거친 것이라면 퇴직금을 지급받았더라도 계속근로관계는 단절되지 않는다고 보았습니다. 결국 퇴직·재입사가 근로자의 자의였는지, 아니면 회사의 일방적 방침에 따른 형식이었는지가 계속근로 통산 여부를 가르는 기준이라는 취지입니다. 영업양도 때 퇴직금을 받았다는 이유로 이전 근무기간이 제외됐다면, 그 퇴직·재입사의 자의성과 근무 연속성을 근거로 통산 재산정을 검토해볼 수 있습니다.',
        takeaway: '영업양도 + 형식적 퇴직·재입사 결합 시 근로관계 승계·퇴직 자의성·계속근로 단절·퇴직금 재산정 종합 검토 영역 — 변호인 상담·노동청 진정 권장.',
      },
    ],
    faq: [
      {
        question: '영업양도 때 퇴직금을 받았으면 이전 기간은 못 받나요?',
        answer:
          '<strong>수령만으로 곧바로 단절되는 것은 아닌 영역입니다.</strong> 퇴직·재입사 경위를 확인.',
      },
      {
        question: '자의로 사직한 것과 회사 방침은 어떻게 다른가요?',
        answer:
          '<strong>자의면 단절 동의로, 방침이면 통산될 여지가 있는 영역입니다.</strong> 사직 요구 정황을 정리.',
      },
      {
        question: '업무가 그대로였다는 게 도움이 되나요?',
        answer:
          '<strong>근무 연속성은 계속근로 판단의 근거가 되는 영역입니다.</strong> 업무·장소 동일성 자료를 확보.',
      },
      {
        question: '이미 받은 퇴직금은 어떻게 되나요?',
        answer:
          '<strong>통산 재산정 시 기지급분을 정산·공제하는 영역입니다.</strong> 지급 내역을 정리.',
      },
      {
        question: '청구 기한이 있나요?',
        answer:
          '<strong>퇴직금 채권은 3년 소멸시효가 적용되는 영역입니다.</strong> 퇴직일 기준 시효를 확인.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: 'retirement 도메인 허브', href: '/guide/retirement' },
      { label: '퇴직금 계산 공식 총정리', href: '/guide/retirement/retirement-comprehensive-calculation-formula' },
      { label: '퇴직금 청구 방법 비교', href: '/guide/retirement/retirement-claim-channel-comparison' },
      { label: '중간정산 요건', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '내용증명 전 준비', href: '/guide/retirement/before-demand-letter-retirement-pay' },
    ],
  },

  // ─── 9. retirement-rehabilitation-unavoidable-nonpayment-criminal-exemption-track ───
  {
    domain: 'retirement',
    slug: 'retirement-rehabilitation-unavoidable-nonpayment-criminal-exemption-track',
    keyword: '회생절차 불가피한 사정 퇴직금 미지급 형사책임 조각 판단',
    questionKeyword:
      '저는 회사가 어려워져 회생절차에 들어간 뒤 퇴직했는데, 퇴직금을 14일이 지나도록 못 받고 있어요. 회사는 회생절차 중이라 법원 허가 없이는 돈을 못 쓰고 자금 사정도 나빠서 어쩔 수 없다고 해요. 저는 퇴직금 미지급으로 회사를 처벌받게 하고 싶은데, 회생절차 중이면 사업주나 관리인이 형사책임을 안 지는 경우도 있다고 들었어요. 이런 경우 저는 퇴직금을 어떻게 받아야 하나요? 회생절차라면 정말 아무 책임도 못 묻나요?',
    ctaKeyword: '회생절차 퇴직금 미지급·형사책임 조각·대지급금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '회생절차 퇴직금 미지급 대응 5단계 점검 | 로앤가이드',
      description:
        '회생절차 중이라 퇴직금을 못 받아 막막하다면 형사책임 조각 기준과 대지급금 청구까지 5단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 다니던 회사가 경영난으로 회생절차에 들어간 뒤 퇴직한 근로자입니다. 근로자퇴직급여 보장법상 퇴직금은 퇴직일부터 14일 이내에 지급해야 하는데, 저는 그 기간이 한참 지나도록 퇴직금을 받지 못하고 있습니다. 회사 측은 \'현재 회생절차가 진행 중이라 법원의 허가 없이는 함부로 금전을 지출할 수 없고, 자금 사정도 매우 나빠 지금 당장 퇴직금을 지급하기 어렵다\'고 설명합니다. 저로서는 답답합니다. 당장 생활이 어려운데 퇴직금을 언제 받을 수 있을지 기약이 없기 때문입니다. 그래서 퇴직금을 지급하지 않은 데 대해 회사를 형사적으로 처벌받게 하고 싶은데, 알아보니 회생절차 중이라 자금 악화나 법률상 제한으로 불가피하게 지급하지 못한 경우에는 사용자나 관리인의 형사책임이 조각될 수 있다는 이야기를 들었습니다. 제가 알아본 바로는, 기업이 불황이라는 사유만으로 사용자가 임금이나 퇴직금을 체불하는 것이 허용되는 것은 아니지만, 모든 성의와 노력을 다했어도 체불을 방지할 수 없었다는 것이 사회통념상 긍정할 정도가 되어 더 이상의 적법행위를 기대할 수 없거나 불가피한 사정이었음이 인정되는 경우에는, 임금·퇴직금 지급의무 위반죄의 책임조각사유가 될 수 있다고 합니다. 특히 회생절차에서 관리인은 법원의 허가를 받아야 하거나 법원의 감독을 받는 등 여러 제한 아래에서 업무를 수행하므로, 자금 사정 악화나 법률상 제한에 따라 불가피하게 퇴직금을 기일 안에 지급하지 못한 경우에는 그 사정을 종합해 책임조각 여부를 판단한다고 합니다. 다만 이것은 어디까지나 형사책임의 조각에 관한 문제일 뿐, 제 퇴직금 채권 자체가 사라지는 것은 아니라고 이해하고 있습니다. 저는 형사처벌을 통한 압박이 어렵다면, 회생절차 안에서 제 퇴직금을 어떤 지위의 채권으로 변제받을 수 있는지, 그리고 도산 상태에서 활용할 수 있는 대지급금 제도가 있는지를 확인해 보아야 할 것 같습니다. 그렇다면 제 상황에서도 첫째 미지급이 불가피한 사정에 해당하는지, 둘째 그렇다면 형사책임이 조각되는지, 셋째 그럼에도 퇴직금 채권 자체는 유지되는지, 넷째 회생절차 내에서 어떻게 변제받는지, 다섯째 대지급금 등 다른 경로가 있는지를 차례로 따져 보아야 할 것 같습니다. 회생절차 중 퇴직금 대응을 점검해보고 싶습니다." 근로자퇴직급여 보장법 제9조는 퇴직금 14일 지급을, 채무자 회생 및 파산에 관한 법률은 관리인의 권한과 제한을 정하는 영역입니다. 판례는 회생절차에서 관리인이 자금 악화나 법률상 제한에 따라 불가피하게 퇴직금을 기일 안에 지급하지 못한 경우 지급의무 위반죄의 책임조각사유가 있는지 판단해야 한다고 본 사례가 있는 영역입니다. 불가피한 사정 + 형사책임 조각 결합은 대응 경로를 정리하는 트랙입니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회생절차 퇴직금 미지급 대응 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 불가피성 판단·형사책임 조각·채권 유지·회생절차 변제·대지급금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 불가피성 판단</strong> — 자금 악화·법률상 제한으로 지급이 불가피했다고 볼 수 있는지.</li>\n<li><strong>② 형사책임 조각</strong> — 모든 성의·노력을 다했어도 불가피했다면 지급의무 위반죄가 조각되는지.</li>\n<li><strong>③ 채권 유지</strong> — 형사책임이 조각되더라도 퇴직금 채권 자체는 그대로 유지되는지.</li>\n<li><strong>④ 회생절차 변제</strong> — 회생절차 안에서 퇴직금을 어떤 지위의 채권으로 변제받는지.</li>\n<li><strong>⑤ 대지급금</strong> — 도산 상태에서 대지급금 등 다른 경로를 활용할 수 있는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 불황만으로는 체불이 허용되지 않지만, 모든 성의·노력을 다했어도 불가피했다면 형사책임이 조각될 수 있는 영역. 다만 형사책임 조각과 별개로 퇴직금 채권 자체는 유지되므로 변제·대지급금 경로가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 고용노동부·법원 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미지급·회생 자료 보존 (즉시)</strong> — 퇴직금 산정 내역, 회생절차 개시 결정, 미지급 통지를 보존.</li>\n<li><strong>2단계 — 불가피성 정리 (1주)</strong> — 자금 악화·법원 허가 제한 등 미지급 사정을 정리.</li>\n<li><strong>3단계 — 채권 지위 확인 (2주)</strong> — 회생절차에서 퇴직금이 어떤 지위의 채권으로 취급되는지 확인.</li>\n<li><strong>4단계 — 변제·신고 절차 (회생절차)</strong> — 절차 내에서 퇴직금 채권을 신고·변제받는 절차 진행.</li>\n<li><strong>5단계 — 대지급금 검토 (병행)</strong> — 요건 충족 시 대지급금 청구 등 다른 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회생절차 퇴직금 미지급·형사책임 조각·대지급금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 불가피성·채권 지위·대지급금 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직금 산정 내역 (미지급액 확인)</strong></li>\n<li><strong>회생절차 개시 결정문 (절차 진행 확인)</strong></li>\n<li><strong>미지급 통지·안내 자료</strong></li>\n<li><strong>근로계약서·재직증명 (근속기간 입증)</strong></li>\n<li><strong>임금대장·평균임금 자료</strong></li>\n<li><strong>회생채권 신고 관련 자료</strong></li>\n<li><strong>대지급금 신청 요건 확인 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'회생절차라 아무것도 못 받는다\'가 아니라 \'형사책임 조각과 별개로 퇴직금 채권 자체는 유지된다\'는 점입니다. 채권 지위와 대지급금 요건을 확인하면 변제 경로를 검토할 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>불가피성</strong> — 미지급이 불가피한 사정이었는지.</li>\n<li><strong>형사책임 조각</strong> — 지급의무 위반죄가 조각되는지.</li>\n<li><strong>채권 유지</strong> — 퇴직금 채권 자체가 유지되는지.</li>\n<li><strong>변제 순위</strong> — 회생절차에서 퇴직금의 변제 지위.</li>\n<li><strong>대지급금 요건</strong> — 대지급금 청구 요건을 갖췄는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 (대지급금 안내)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 회생절차 중 불가피한 퇴직금 미지급의 책임조각',
        summary:
          '대법원 2014도12753(대법원, 2015.02.12 선고) 영역에서 법원은 기업이 불황이라는 사유만으로 사용자가 임금이나 퇴직금을 체불하는 것은 허용되지 않지만, 모든 성의와 노력을 다했어도 체불이나 미불을 방지할 수 없었다는 것이 사회통념상 긍정할 정도가 되어 사용자에게 더 이상의 적법행위를 기대할 수 없거나 불가피한 사정이었음이 인정되는 경우에는 그러한 사유가 임금 및 퇴직금 등의 기일 내 지급의무 위반죄의 책임조각사유로 된다고 판시했습니다. 나아가 회생절차에서 관리인은 채무자나 그 기관·대표자가 아니라 이해관계인 단체의 관리자로서 공적 수탁자에 해당하고, 재산 처분이나 금전 지출에 미리 법원의 허가를 받아야 하거나 법원의 감독을 받는 등 여러 제한을 받으므로, 관리인이 자금 사정 악화나 업무수행에 대한 법률상 제한 등에 따라 불가피하게 퇴직금을 기일 안에 지급하지 못한 것이라면 책임조각사유가 있는지 그 기준에 따라 판단해야 한다고 밝혔습니다. 이는 형사책임의 조각에 관한 것으로, 퇴직금 채권 자체가 소멸하는 것은 아닙니다. 회생절차 중이라 퇴직금을 못 받고 있다면, 형사 대응과 별개로 회생절차 내 변제·대지급금 경로를 함께 검토해볼 수 있습니다.',
        takeaway: '회생절차 + 불가피한 미지급 결합 시 불가피성 판단·형사책임 조각·채권 유지·회생 변제·대지급금 종합 검토 영역 — 변호인 상담·근로복지공단 안내 권장.',
      },
    ],
    faq: [
      {
        question: '회생절차 중이면 회사를 처벌 못 하나요?',
        answer:
          '<strong>불가피한 사정이 인정되면 형사책임이 조각될 수 있는 영역입니다.</strong> 미지급 사정을 정리.',
      },
      {
        question: '처벌이 안 되면 퇴직금도 못 받는 건가요?',
        answer:
          '<strong>형사책임 조각과 별개로 퇴직금 채권은 유지되는 영역입니다.</strong> 채권 지위를 확인.',
      },
      {
        question: '회생절차 안에서는 어떻게 받나요?',
        answer:
          '<strong>퇴직금 채권을 신고·변제받는 절차를 확인하는 영역입니다.</strong> 개시 결정과 신고 절차를 확인.',
      },
      {
        question: '대지급금으로 받을 수도 있나요?',
        answer:
          '<strong>도산 상태에서 요건을 갖추면 대지급금을 검토할 수 있는 영역입니다.</strong> 신청 요건을 확인.',
      },
      {
        question: '청구 기한이 있나요?',
        answer:
          '<strong>퇴직금 채권은 3년 소멸시효가 적용되는 영역입니다.</strong> 퇴직일 기준 시효를 확인.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: 'retirement 도메인 허브', href: '/guide/retirement' },
      { label: '퇴직금 계산 공식 총정리', href: '/guide/retirement/retirement-comprehensive-calculation-formula' },
      { label: '퇴직금 청구 방법 비교', href: '/guide/retirement/retirement-claim-channel-comparison' },
      { label: '중간정산 요건', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '내용증명 전 준비', href: '/guide/retirement/before-demand-letter-retirement-pay' },
    ],
  },

  // ─── 10. industrial-accident-same-employer-separate-worksite-coverage-unit-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-same-employer-separate-worksite-coverage-unit-track',
    keyword: '동일 사업주 장소적 분리 복수 사업장 산재보험 적용단위 요양급여 판단',
    questionKeyword:
      '저는 한 사업주가 본사와 여러 곳의 작업 현장을 운영하는 회사에서 일하다가 한 현장에서 다쳤어요. 그런데 제가 다친 현장이 본사나 다른 현장과 산재보험 적용단위가 하나로 묶이는지, 아니면 별개의 사업장으로 취급되는지에 따라 보험관계와 요양급여 처리가 달라진다는 이야기를 들었어요. 같은 사장이 운영하는데 장소만 떨어져 있으면 산재보험은 하나로 보나요, 따로 보나요? 제 요양급여 신청에는 어떤 영향이 있나요?',
    ctaKeyword: '동일 사업주 복수 사업장 산재보험 적용단위·요양급여 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '복수 사업장 산재보험 적용단위 6단계 점검 | 로앤가이드',
      description:
        '같은 사업주의 여러 현장 중 어디서 다쳤는지로 산재 처리가 갈릴까 막막하다면 적용단위 판단과 요양급여까지 6단계 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"저는 한 사업주가 본사와 여러 곳의 작업 현장을 함께 운영하는 회사에서 일하다가, 그중 한 현장에서 작업 중 다친 근로자입니다. 산재 요양급여를 신청하려고 알아보던 중, 제가 다친 현장이 본사나 다른 현장과 산업재해보상보험의 적용단위, 즉 하나의 \'사업 또는 사업장\'으로 묶이는지, 아니면 장소가 떨어져 있으니 별개의 사업장으로 취급되는지에 따라 보험관계와 처리 방식이 달라질 수 있다는 이야기를 들었습니다. 저로서는 걱정이 앞섭니다. 같은 사장이 운영하는 회사인데도 현장이 장소적으로 분리되어 있다는 이유로 산재보험 적용이 복잡해지거나, 제가 다친 현장의 보험관계가 별도로 정리되어 있지 않으면 요양급여 신청에 불이익이 생기지 않을까 싶기 때문입니다. 제가 알아본 바로는, 산업재해보상보험 관계의 적용단위가 되는 \'사업 또는 사업장\'이란 일정한 장소를 바탕으로 유기적으로 단일하게 조직되어 계속적으로 행하는 경제적 활동단위를 가리키고, 장소적 분리 여부가 독립한 사업 또는 사업장에 해당하는지 판단하는 우선적인 기준이 된다고 합니다. 다만 장소적으로 분리된 복수의 경제적 활동단위가 있더라도 이를 동일한 사업주가 운영하는 경우에는, 각 조직의 규모와 업무 내용·처리 방식 등을 종합하여 각 단위별 경제활동이 최종적 사업목적을 위하여 유기적으로 결합되어 있는지, 장소적 분리가 독립된 사업을 두어야 할 업무상 필요성에서 기인한 것인지, 각 활동단위가 전체적으로 재해발생 위험도를 공유한다고 볼 수 있는지 등을 추가로 고려해 독립한 사업인지 판단한다고 합니다. 그렇다면 저의 경우 제가 다친 현장이 본사·다른 현장과 하나의 적용단위로 묶이는지, 아니면 독립된 사업장으로 취급되는지를 먼저 확인해 보아야 할 것 같습니다. 다만 저는 이 적용단위 문제가 결국 보험료 부담이나 보험관계 정리의 문제일 뿐, 재해를 당한 근로자가 요양급여를 신청하는 것 자체를 가로막는 것은 아니라는 점도 확인하고 싶습니다. 산재보험은 근로자를 보호하는 것이 원칙이기 때문입니다. 그렇다면 제 상황에서도 첫째 다친 현장이 어떤 적용단위에 속하는지, 둘째 동일 사업주의 장소적 분리가 독립 사업으로 평가되는지, 셋째 그 판단이 요양급여 신청에 영향을 주는지, 넷째 요양급여 신청 절차는 어떻게 진행하는지, 다섯째 보험관계가 불명확할 때 무엇을 확인해야 하는지, 여섯째 향후 유사 상황을 어떻게 대비할지를 차례로 따져 보아야 할 것 같습니다. 복수 사업장에서의 산재 대응을 미리 점검해보고 싶습니다." 산업재해보상보험법 제6조는 사업 또는 사업장의 적용단위를 정하는 영역입니다. 판례는 산재보험 적용단위인 \'사업 또는 사업장\'은 장소적 분리 여부를 우선 기준으로 하되, 동일 사업주가 운영하는 장소적으로 분리된 복수 단위는 조직 규모·업무 내용·위험도 공유 등을 종합해 독립 사업인지 판단한다고 본 사례가 있는 영역입니다. 적용단위 판단 + 근로자 보호 원칙 결합은 요양급여 신청을 준비하는 트랙입니다. 근로자라면 관련 절차를 미리 확인해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 복수 사업장 산재보험 적용단위 6단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용단위 확인·장소적 분리·독립성 종합판단·요양급여 영향·신청 절차·대비책 6단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용단위 확인</strong> — 다친 현장이 어느 \'사업 또는 사업장\' 적용단위에 속하는지.</li>\n<li><strong>② 장소적 분리</strong> — 장소적 분리가 독립 사업 판단의 우선 기준이 되는지.</li>\n<li><strong>③ 독립성 종합판단</strong> — 동일 사업주 운영이라면 조직 규모·업무 내용·위험도 공유 등을 종합해 독립 사업인지.</li>\n<li><strong>④ 요양급여 영향</strong> — 적용단위 판단이 재해 근로자의 요양급여 신청에 영향을 주는지.</li>\n<li><strong>⑤ 신청 절차</strong> — 근로복지공단에 요양급여를 신청하는 절차.</li>\n<li><strong>⑥ 대비책</strong> — 보험관계가 불명확할 때 확인해 둘 사항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적용단위는 장소적 분리를 우선 기준으로 하되 동일 사업주 운영이면 위험도 공유 등을 종합해 판단하는 영역. 다만 적용단위 문제가 곧바로 근로자의 요양급여 신청을 막는 것은 아닌 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양급여 신청 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·소속 자료 보존 (즉시)</strong> — 사고 경위서, 근로계약서, 소속 현장 확인 자료를 보존.</li>\n<li><strong>2단계 — 요양급여 신청 (사고 후 즉시)</strong> — 근로복지공단에 산재 요양급여 신청서 제출.</li>\n<li><strong>3단계 — 보험관계·적용단위 확인 (공단 조사)</strong> — 공단이 다친 현장의 적용단위·보험관계를 조사.</li>\n<li><strong>4단계 — 미승인 시 심사청구 (통지 90일 이내)</strong> — 산업재해보상보험 심사청구.</li>\n<li><strong>5단계 — 재심사청구 (필요 시)</strong> — 산업재해보상보험재심사위원회에 재심사청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동일 사업주 복수 사업장 적용단위·요양급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적용단위 확인·소속 관계·요양급여 신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·재직증명 (소속 현장 확인)</strong></li>\n<li><strong>사고 경위서·목격자 진술</strong></li>\n<li><strong>병원 진단서·치료 기록</strong></li>\n<li><strong>본사·현장 조직 구성 자료 (적용단위 판단)</strong></li>\n<li><strong>보험관계 성립·적용 확인 자료</strong></li>\n<li><strong>급여·근무 기록 (평균임금 산정 기초)</strong></li>\n<li><strong>현장 간 업무 연계 자료 (위험도 공유 여부)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'현장이 떨어져 있으니 산재가 복잡해진다\'가 아니라 \'적용단위는 보험관계의 문제일 뿐, 요양급여 신청 자체는 진행할 수 있다\'는 점입니다. 소속과 사고 자료를 정리하면 신청을 준비할 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용단위</strong> — 다친 현장이 어느 적용단위에 속하는지.</li>\n<li><strong>장소적 분리</strong> — 분리가 독립 사업으로 평가되는지.</li>\n<li><strong>위험도 공유</strong> — 현장 간 재해위험을 공유하는지.</li>\n<li><strong>요양급여 영향</strong> — 적용단위 판단이 신청에 영향을 주는지.</li>\n<li><strong>신청 기한</strong> — 요양급여 청구권 소멸시효 3년.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 (요양급여 신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험 적용단위인 사업 또는 사업장의 판단 기준',
        summary:
          '대법원 2012두5176(대법원, 2015.03.12 선고) 영역에서 법원은 산업재해보상보험 관계의 적용단위가 되는 산업재해보상보험법 제6조의 \'사업 또는 사업장\'이란 일정한 장소를 바탕으로 유기적으로 단일하게 조직되어 계속적으로 행하는 경제적 활동단위를 가리키고, 장소적 분리 여부는 독립한 \'사업 또는 사업장\'에 해당하는지 판단하는 우선적인 기준이라고 판시했습니다. 다만 사업에 수반되는 업무상 재해의 위험 정도에 따라 사업주 간 보험료 부담이 공평해야 하는 산재보험 제도의 특수성을 고려하면, 장소적으로 분리된 복수의 경제적 활동단위가 있더라도 이를 동일한 사업주가 운영하는 경우에는 각 조직의 규모·업무 내용·처리 방식 등을 종합해 각 단위별 경제활동이 최종적 사업목적을 위하여 유기적으로 결합되어 있는지, 장소적 분리가 독립된 사업을 두어야 할 업무상 필요성에서 기인한 것인지, 각 활동단위가 전체적으로 재해발생 위험도를 공유하는지 등을 추가로 고려해 독립한 사업인지 판단해야 한다고 보았습니다. 적용단위 판단은 보험관계·보험료 부담의 문제로, 재해 근로자의 요양급여 신청을 가로막는 것은 아닙니다. 동일 사업주의 여러 현장 중 한 곳에서 다쳤다면, 적용단위를 확인하면서도 요양급여 신청을 함께 준비해볼 수 있습니다.',
        takeaway: '동일 사업주 복수 사업장 + 적용단위 판단 결합 시 적용단위·장소적 분리·위험도 공유·요양급여 신청 종합 검토 영역 — 근로복지공단 상담·전문가 상담 권장.',
      },
    ],
    faq: [
      {
        question: '같은 사장인데 현장이 떨어져 있으면 산재는 따로인가요?',
        answer:
          '<strong>장소적 분리를 우선 기준으로 하되 종합해 판단하는 영역입니다.</strong> 조직 구성 자료를 확인.',
      },
      {
        question: '적용단위가 어떻게 되든 제 요양급여에 영향이 있나요?',
        answer:
          '<strong>적용단위는 보험관계 문제일 뿐 신청 자체를 막지 않는 영역입니다.</strong> 사고 자료를 확보.',
      },
      {
        question: '제가 다친 현장이 독립 사업장인지 어떻게 아나요?',
        answer:
          '<strong>업무 내용·위험도 공유 등을 종합해 판단하는 영역입니다.</strong> 현장 간 업무 연계를 정리.',
      },
      {
        question: '요양급여는 어디에 신청하나요?',
        answer:
          '<strong>근로복지공단에 신청하는 영역입니다.</strong> 사고 경위서와 진단서를 준비.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>요양급여 청구권은 3년의 소멸시효가 있는 영역입니다.</strong> 사고일부터 기한을 확인.',
      },
    ],
    cta: { text: '산재 요양급여 신청 순서, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: 'industrial-accident 도메인 허브', href: '/guide/industrial-accident' },
      { label: '출퇴근 재해 인정 요건', href: '/guide/industrial-accident/industrial-accident-commute-accident-eligibility' },
      { label: '산재 불승인 불복 절차', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '과로 심혈관 질환 산재', href: '/guide/industrial-accident/industrial-accident-overwork-cardiac-track' },
      { label: '산재 후 복직 대응', href: '/guide/industrial-accident/return-to-work-after-injury' },
    ],
  },
];
