import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [사기 혐의로 기소된 피고인]의 [합의 여부에 따른 형량 차이가 궁금한 상황]에서 [합의 유무별 실제 형량 비교]를 돕는 페이지다.
// 2. 이 페이지는 [사기 초범으로 선처를 구하는 피고인]의 [반성문만 쓰면 된다고 생각하는 상황]에서 [반성문 전에 준비할 실질적 감형 자료]를 돕는 페이지다.
// 3. 이 페이지는 [피해자가 합의를 거부하는 사기 피고인]의 [합의 없이 감형받아야 하는 상황]에서 [공탁·반성문·사회봉사 등 대체 감형 자료 준비]를 돕는 페이지다.
// 4. 이 페이지는 [사기 혐의자]의 [공탁과 합의 중 어느 것이 유리한지 판단해야 하는 상황]에서 [법적 효과·비용·절차 비교]를 돕는 페이지다.

export const spokesBatch17GscFraud: SpokePage[] = [
  {
    domain: 'fraud',
    slug: 'fraud-settlement-sentencing-impact',
    keyword: '사기 합의하면 형량 얼마나 줄어드나',
    questionKeyword: '사기죄 합의하면 형량이 실제로 얼마나 달라지나요?',
    ctaKeyword: '사기 합의 형량 차이',
    type: '수치기한형',
    perspective: 'accused',
    meta: {
      title: '사기 합의 시 형량 차이 3가지 수치 비교 | 로앤가이드',
      description: '사기 혐의를 받고 있는데 합의하면 형량이 얼마나 줄어들지 궁금하시다면, 합의 유무별 실형·집행유예·벌금 비교 수치를 지금 확인하세요.',
    },
    intro: '검찰 조사가 끝나고 기소를 앞두고 있습니다. 변호사는 "합의하면 형량이 크게 달라진다"고 하는데, 구체적으로 얼마나 달라지는지 감이 오지 않습니다. 피해자에게 연락해야 할지, 합의금은 얼마나 준비해야 할지 판단이 서지 않습니다. 합의 여부에 따른 실제 형량 차이를 수치로 정리해보세요.',
    sections: [
      {
        title: '첫째, 사기죄 기본 양형 기준부터 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제347조 사기죄는 10년 이하의 징역 또는 2천만원 이하의 벌금에 처합니다</strong></p>\n<p>사기죄의 양형은 <strong>편취 금액</strong>에 따라 크게 달라집니다. 대법원 양형위원회 기준으로 일반사기 1억원 미만은 징역 6월~1년6월이 기본 양형 범위입니다. 1억원 이상 5억원 미만은 1년~3년, 5억원 이상은 3년~7년이 기본 범위입니다.</p>\n<p>여기서 <strong>합의 여부</strong>가 가장 큰 감경 요소로 작용합니다. 양형위원회는 "피해 회복"을 특별감경인자로 분류하고 있어, 합의 성사 시 양형 범위 자체가 한 단계 낮아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 편취 금액별 기본 양형 범위 확인 → 합의는 특별감경인자</blockquote>',
      },
      {
        title: '둘째, 합의 유무에 따른 형량 차이를 수치로 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의 시 실형이 집행유예로, 집행유예가 벌금형으로 바뀌는 경우가 많습니다</strong></p>\n<p>편취 금액 <strong>5천만원 기준</strong>으로 비교하면, 합의 없이 기소되면 징역 8월~1년6월 실형 가능성이 높습니다. 전액 합의 + 피해자 처벌불원 시 징역 6월~10월에 집행유예 2년이 일반적입니다. 초범이고 전액 변제하면 <strong>벌금형</strong>으로 끝나는 경우도 있습니다.</p>\n<p>편취 금액 <strong>1억원 이상</strong>이면 합의 없이는 징역 1년6월~3년 실형이 기본입니다. 전액 합의 시 징역 10월~1년6월에 집행유예가 가능해지고, 부분 합의(50% 이상)라도 실형 기간이 <strong>30~50% 감경</strong>되는 것이 실무 경향입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비교: 합의 없음(실형) vs 전액 합의(집행유예) vs 부분 합의(감경)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 편취 금액 기준 예상 형량이 궁금하다면</strong><br/>\n<a href="/diagnosis/fraud" style="color:#1565c0;font-weight:600">AI로 내 상황에 맞는 형량 범위 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 합의 시점에 따라 감경 폭이 달라집니다',
        content:
          '<p><strong style="color:#1e3a5f">수사 단계 합의 > 기소 후 합의 > 선고 직전 합의 순으로 효과가 큽니다</strong></p>\n<p><strong>수사 단계</strong>(경찰·검찰 조사 중)에 합의하면 불기소 처분(기소유예)까지 가능합니다. 특히 편취 금액이 1천만원 이하이고 초범이면 합의 즉시 사건이 종결되는 경우가 많습니다.</p>\n<p><strong>기소 후 재판 중</strong>에 합의하면 집행유예나 벌금형으로의 감경이 가능합니다. <strong>선고 직전</strong>에야 합의하면 감경은 반영되지만 폭이 줄어듭니다. 합의를 결심했다면 <strong>빠를수록 유리</strong>합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시점별 효과: 수사 중(불기소 가능) > 기소 후(집행유예) > 선고 전(감경 폭 축소)</blockquote>',
      },
      {
        title: '넷째, 합의금 산정 기준과 합의서 작성 시 주의점을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의금은 편취 금액 + 위자료(10~30%) + 지연이자가 기본 구조입니다</strong></p>\n<p>합의금은 단순히 편취 금액만 돌려주는 것이 아닙니다. <strong>편취 금액 전액 반환</strong>에 더해 정신적 피해에 대한 위자료(통상 편취 금액의 10~30%), 변제 지연에 따른 이자를 포함하는 것이 실무 관행입니다.</p>\n<p>합의서에는 가능한 한 <strong>"처벌을 원하지 않는다"</strong>는 문구(처벌불원서)가 포함되어야 감형 효과가 극대화됩니다. 단순히 돈만 돌려주는 "변제"와 처벌불원이 포함된 "합의"는 법적 효과가 <strong>완전히 다릅니다</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 변제(돈만 반환) ≠ 합의(처벌불원 포함) — 감경 효과 차이 큼</blockquote>',
      },
      {
        title: '다섯째, 합의가 어려울 때 차선책도 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">피해자가 합의를 거부하더라도 공탁·반성문 등으로 감경받을 수 있습니다</strong></p>\n<p>피해자가 합의에 응하지 않으면 <strong>공탁</strong>(법원에 합의금 상당액을 맡기는 것)을 활용하세요. 공탁은 합의만큼의 감경 효과는 없지만, "피해 회복 노력"으로 인정받아 <strong>양형에 긍정적</strong>으로 반영됩니다.</p>\n<p>그 외에도 반성문, 사회봉사활동 증빙, 재범방지 서약서 등을 종합적으로 제출하면 감경 가능성이 높아집니다. 다만 이런 자료들은 합의의 <strong>보조 수단</strong>이지 대체 수단은 아닙니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">차선책: 공탁 + 반성문 + 사회봉사 → 합의보다 효과 작지만 감경 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024도13139 — 허위 진술로 유리한 판결을 받은 사기죄 성립 사례',
        summary:
          '대법원 2024도13139(대법원, 2025.06.12) 사건에서 법원은 회생절차 채무자가 재산·수입 상황을 허위로 진술하여 유리한 회생계획인가결정을 받은 행위가 사기죄를 구성할 수 있다고 판시했습니다. 이 사건은 기망행위의 범위가 넓게 인정되어 양형이 가중된 사례입니다.',
        takeaway:
          '사기 혐의에서 합의 여부는 양형에 결정적 영향을 미칩니다. 기망의 범위가 넓게 인정될수록 양형이 무거워지므로, 합의를 통한 피해 회복이 더욱 중요해집니다.',
      },
    ],
    faq: [
      {
        question: '편취 금액이 3천만원인데 합의하면 실형을 피할 수 있나요?',
        answer: '초범이고 전액 합의 + 처벌불원이 있으면 <strong>집행유예 또는 벌금형</strong>이 나오는 경우가 많습니다. 다만 피해자가 여러 명이거나 계획적 범행이면 합의해도 실형이 선고될 수 있습니다.',
      },
      {
        question: '피해 금액의 절반만 변제해도 감경이 되나요?',
        answer: '부분 변제도 양형에 반영됩니다. 다만 <strong>전액 변제</strong>와 비교하면 감경 폭이 크게 줄어듭니다. 50% 변제 시 실형 기간이 20~30% 줄어드는 정도로 기대하세요.',
      },
      {
        question: '합의서와 처벌불원서는 같은 건가요?',
        answer: '다릅니다. <strong>합의서</strong>는 금전 합의 내용을 담은 문서이고, <strong>처벌불원서</strong>는 피해자가 처벌을 원하지 않는다는 별도 의사표시입니다. 감형 효과를 극대화하려면 둘 다 필요합니다.',
      },
      {
        question: '합의 후에도 전과 기록이 남나요?',
        answer: '기소 전 합의로 <strong>기소유예</strong> 처분을 받으면 전과가 남지 않습니다. 기소 후 합의하여 벌금형 이상을 선고받으면 전과 기록이 남습니다.',
      },
      {
        question: '피해자가 합의금을 과도하게 요구하면 어떻게 하나요?',
        answer: '편취 금액의 <strong>130~150%</strong>가 합의금의 합리적 범위입니다. 피해자가 과도한 금액을 요구하면 공탁 후 법원에 피해 회복 노력을 소명하는 방법도 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 혐의를 받고 있다면 처음 해야 할 일', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 합의·선처에서 형량 줄이는 법', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 합의 과정과 주의사항', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기 재범 시 양형 기준', href: '/guide/fraud/fraud-repeat-offense-sentencing' },
      { label: '사기 고소장 준비 체크리스트', href: '/guide/fraud/fraud-complaint-required-documents' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-first-offense-before-apology-letter',
    keyword: '사기 초범 반성문 전에 준비할 것',
    questionKeyword: '사기 초범인데 반성문만 쓰면 선처받을 수 있나요?',
    ctaKeyword: '사기 초범 선처 준비',
    type: '실수함정형',
    perspective: 'accused',
    meta: {
      title: '사기 초범 선처, 반성문 전 3가지 먼저 챙기세요 | 로앤가이드',
      description: '사기 초범이라 반성문만 쓰면 된다고 생각하셨나요? 반성문보다 먼저 준비해야 할 감형 자료 3가지를 놓치면 선처가 어려워집니다. 지금 확인하세요.',
    },
    intro: '사기 혐의로 처음 경찰서에 출석했습니다. 주변에서 "초범이니까 반성문 쓰면 괜찮다"고 하는데, 정말 그게 전부인지 불안합니다. 실제로 반성문만 내고 실형을 선고받는 사례가 적지 않습니다. 반성문을 쓰기 전에 먼저 챙겨야 할 것들을 정리해보세요.',
    sections: [
      {
        title: '첫째, 반성문의 실제 감형 효과는 생각보다 제한적입니다',
        content:
          '<p><strong style="color:#1e3a5f">반성문은 양형 참고자료일 뿐 감경인자가 아닙니다</strong></p>\n<p>많은 분들이 <strong>반성문 = 감형</strong>으로 오해합니다. 하지만 대법원 양형위원회 기준에서 반성문은 독립적인 감경인자가 아닙니다. "진지한 반성"이 양형에 반영되려면 반성문 외에 <strong>구체적인 행동</strong>이 뒷받침되어야 합니다.</p>\n<p>반성문만 제출하고 피해 변제나 공탁은 하지 않은 경우, 법원은 "진정한 반성이 부족하다"고 판단하는 경우가 많습니다. 반성문은 <strong>다른 감형 자료를 보완하는 역할</strong>이지, 그 자체로 형량을 바꾸는 힘은 약합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">흔한 실수: 반성문만 제출 → 구체적 행동 없음 → 감경 효과 미미</blockquote>',
      },
      {
        title: '둘째, 반성문보다 먼저 피해 변제 또는 공탁을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">"피해 회복"이 양형위원회가 인정하는 실질적 감경인자입니다</strong></p>\n<p>양형위원회는 <strong>피해 회복(변제, 합의, 공탁)</strong>을 특별감경인자로 분류합니다. 반성문은 일반참작사유에 불과합니다. 감형 효과의 차이가 큽니다.</p>\n<p>피해자에게 직접 변제하는 것이 가장 좋지만, 연락이 안 되거나 합의를 거부하면 <strong>법원 공탁</strong>을 활용하세요. 편취 금액 전액을 공탁하면 "피해 회복 노력"으로 인정받습니다. 공탁은 수사 단계에서도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">우선순위: 전액 합의 > 전액 공탁 > 부분 변제 > 반성문만</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">초범이라도 준비 없이 가면 불리해집니다</strong><br/>\n<a href="/diagnosis/fraud" style="color:#1565c0;font-weight:600">AI로 내 상황에 맞는 감형 전략 받아보기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 피의자 신문 전에 진술 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">초범의 첫 진술이 이후 재판 전체를 좌우합니다</strong></p>\n<p>경찰 조사에서의 <strong>첫 진술</strong>은 검찰 수사와 재판까지 계속 따라다닙니다. "잘 모르겠다"고 얼버무리거나 사실과 다른 진술을 하면 나중에 번복하기 극히 어렵습니다.</p>\n<p>초범이라면 조사 전에 <strong>변호인 조력</strong>을 받는 것이 가장 중요합니다. 혐의 사실 중 인정할 부분과 다투어야 할 부분을 미리 정리하세요. "기망의 고의"가 있었는지 여부가 사기죄의 핵심 쟁점이므로, 이 부분에 대한 진술을 신중하게 준비해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 조사 전 변호인 상담 → 인정/다툼 범위 정리 → 일관된 진술</blockquote>',
      },
      {
        title: '넷째, 초범 감경에 도움되는 추가 자료를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">재직증명서, 부양가족 증빙, 사회봉사 확인서가 양형에 영향을 줍니다</strong></p>\n<p>법원은 양형 시 피고인의 <strong>사회적 유대관계</strong>를 참작합니다. 재직증명서(안정적 직업), 가족관계증명서(부양가족 존재), 건강보험 납부 내역 등을 제출하면 "재범 위험이 낮다"는 판단에 도움이 됩니다.</p>\n<p><strong>사회봉사활동 확인서</strong>도 의미 있는 자료입니다. 기소 전이라면 주 1~2회 봉사활동을 시작하세요. 3개월 이상 꾸준히 한 기록은 법원이 "진지한 반성"의 증거로 인정하는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 목록: 재직증명서, 가족관계증명서, 사회봉사확인서, 건강보험 납부내역</blockquote>',
      },
      {
        title: '다섯째, 반성문은 이 모든 준비가 끝난 후에 쓰세요',
        content:
          '<p><strong style="color:#1e3a5f">반성문에 "구체적으로 무엇을 했는지"를 담아야 효과가 있습니다</strong></p>\n<p>반성문의 효과를 높이려면 <strong>실제 행동 내역</strong>을 포함해야 합니다. "피해자에게 전액 변제했습니다", "공탁금을 납부했습니다", "사회봉사 00시간을 이수했습니다"와 같은 구체적인 내용이 있어야 법원이 진정성을 인정합니다.</p>\n<p>"다시는 안 하겠습니다"와 같은 <strong>추상적 반성만</strong> 담긴 반성문은 양형에 거의 영향을 주지 못합니다. 반성문은 감형 자료의 <strong>마무리 정리</strong> 역할로 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 피해 변제/공탁 → 사회봉사 → 추가 자료 수집 → 마지막에 반성문</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024도1932 — 사기죄와 별도 업무방해죄 성립 사례',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11) 사건에서 법원은 피고인이 위탁기관을 기망하여 임상시험 대금을 편취한 사기죄와 위계에 의한 업무방해죄가 별개로 성립한다고 판시했습니다. 사기 혐의에 추가 혐의가 결합되면 양형이 가중됩니다.',
        takeaway:
          '초범이라도 혐의가 복합적이면 형량이 크게 올라갑니다. 반성문만으로 대응하기보다, 피해 변제와 진술 전략을 먼저 세워야 합니다.',
      },
    ],
    faq: [
      {
        question: '사기 초범이면 벌금형으로 끝날 수 있나요?',
        answer: '편취 금액이 <strong>1천만원 이하</strong>이고 전액 변제 + 처벌불원이 있으면 벌금형 가능성이 높습니다. 다만 피해자가 여러 명이거나 계획적이면 초범이어도 실형이 나올 수 있습니다.',
      },
      {
        question: '변호사 없이 경찰 조사를 받아도 되나요?',
        answer: '법적으로는 가능하지만, <strong>첫 진술이 재판까지 영향</strong>을 미치므로 변호인 조력을 받는 것을 강력히 권장합니다. 국선변호인 신청도 가능합니다.',
      },
      {
        question: '공탁은 어디서 어떻게 하나요?',
        answer: '관할 <strong>법원 공탁소</strong>에서 할 수 있습니다. 피해자 인적사항과 편취 금액을 확인한 후 공탁서를 작성하여 제출하면 됩니다. 변호사를 통하면 더 원활합니다.',
      },
      {
        question: '반성문은 몇 장이 적당한가요?',
        answer: '분량보다 <strong>내용의 구체성</strong>이 중요합니다. A4 1~2장이면 충분하며, 피해 변제 사실, 반성의 구체적 내용, 재범 방지 계획을 담으세요.',
      },
      {
        question: '사회봉사는 어디서 하면 인정되나요?',
        answer: '지역 <strong>자원봉사센터</strong>(1365 자원봉사포털)에서 신청한 활동이 공식 기록으로 남습니다. 봉사 확인서를 발급받아 변호인을 통해 법원에 제출하세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 혐의자 첫 대응 가이드', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 피의자 신문 시 흔한 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '사기 합의 시 형량 차이 비교', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '사기 합의·선처에서 형량 줄이기', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 혐의 반박 전략', href: '/guide/fraud/fraud-charge-rebuttal' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-victim-refuses-settlement-alternatives',
    keyword: '사기 피해자 합의 거부 시 감형 방법',
    questionKeyword: '피해자가 합의를 거부하는데 감형받을 방법이 있나요?',
    ctaKeyword: '사기 합의 거부 대체 감형',
    type: '준비서류형',
    perspective: 'accused',
    meta: {
      title: '사기 피해자 합의 거부 시 감형 자료 5가지 | 로앤가이드',
      description: '사기 혐의를 받고 있는데 피해자가 합의를 거부해서 막막하신가요? 합의 없이도 감형받을 수 있는 5가지 대체 자료 준비법을 지금 확인하세요.',
    },
    intro: '피해자에게 합의를 요청했지만 "절대 합의 안 한다"는 답만 돌아왔습니다. 변호사는 합의가 가장 큰 감경 요소라고 했는데, 합의 없이 재판을 받으면 실형을 피할 수 없는 건지 불안합니다. 합의가 불가능할 때 준비할 수 있는 대체 감형 자료를 정리해보세요.',
    sections: [
      {
        title: '첫째, 피해 금액 전액을 법원에 공탁하세요',
        content:
          '<p><strong style="color:#1e3a5f">공탁은 합의 다음으로 효과가 큰 감경 수단입니다</strong></p>\n<p>피해자가 합의를 거부해도 <strong>법원 공탁</strong>으로 피해 회복 의지를 증명할 수 있습니다. 공탁이란 편취 금액 상당액을 법원 공탁소에 맡겨두는 것으로, 피해자가 원할 때 수령할 수 있습니다.</p>\n<p>공탁은 <strong>특별감경인자</strong>인 "피해 회복"에는 미치지 못하지만, "상당 부분 피해 회복" 또는 "피해 회복을 위한 진지한 노력"으로 인정되어 양형에 긍정적으로 반영됩니다. 편취 금액의 <strong>전액을 공탁</strong>하는 것이 원칙입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 공탁서, 피해자 인적사항, 편취 금액 전액, 관할 법원 공탁소 방문</blockquote>',
      },
      {
        title: '둘째, 사회봉사·봉사활동 증빙을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">3개월 이상 꾸준한 봉사활동은 "진지한 반성"의 증거로 활용됩니다</strong></p>\n<p>법원은 피고인이 <strong>사회 환원 활동</strong>을 했는지를 양형에 참작합니다. 1365 자원봉사포털이나 지역 자원봉사센터에서 공식 봉사활동을 신청하고, 활동 확인서를 발급받으세요.</p>\n<p><strong>주 1~2회, 3개월 이상</strong> 꾸준히 활동한 기록이 있으면 법원이 "진정한 반성과 재사회화 의지"로 판단할 가능성이 높아집니다. 단 1~2회 참여로는 효과가 미미합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 1365 자원봉사포털 활동 확인서, 봉사활동 사진 기록, 기관장 확인서</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">합의가 안 되면 다른 준비가 더 중요합니다</strong><br/>\n<a href="/diagnosis/fraud" style="color:#1565c0;font-weight:600">AI로 합의 없이 감형받는 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 반성문과 재범방지 서약서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">반성문은 공탁·봉사와 결합해야 실질적 효과가 있습니다</strong></p>\n<p>반성문은 단독으로는 감경 효과가 미약하지만, <strong>공탁 + 봉사활동과 함께</strong> 제출하면 시너지 효과가 있습니다. "편취 금액 전액을 공탁했고, 00시간 봉사활동을 이수했으며, 깊이 반성하고 있다"는 구체적 서술이 필요합니다.</p>\n<p><strong>재범방지 서약서</strong>도 함께 제출하세요. 향후 동종 범죄를 저지르지 않겠다는 구체적 계획(직업 전환, 금융 교육 이수 등)을 담으면 법원의 신뢰를 얻을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 반성문(구체적 행동 내역 포함), 재범방지 서약서, 가족 탄원서</blockquote>',
      },
      {
        title: '넷째, 가족·지인의 탄원서를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">가족 탄원서는 피고인의 사회적 유대관계를 증명합니다</strong></p>\n<p>배우자, 부모, 자녀, 직장 상사 등의 <strong>탄원서</strong>는 "피고인에게 안정적인 사회적 유대관계가 있다"는 증거입니다. 법원은 이를 "재범 위험성이 낮다"는 판단의 근거로 활용합니다.</p>\n<p>탄원서에는 탄원인과 피고인의 관계, 피고인의 평소 성품, <strong>선처를 구하는 구체적 사유</strong>(부양해야 할 가족, 직장 복귀 필요성 등)를 담으세요. 탄원인의 신분증 사본과 인감을 첨부하면 신뢰도가 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 가족 탄원서 2~3통, 직장 상사 탄원서, 탄원인 신분증 사본</blockquote>',
      },
      {
        title: '다섯째, 전문 상담·치료 이수 기록도 도움이 됩니다',
        content:
          '<p><strong style="color:#1e3a5f">도박·투자 중독 상담 이수는 재범 방지 의지를 보여줍니다</strong></p>\n<p>사기 범행의 원인이 <strong>도박 중독, 투자 실패, 알코올 문제</strong> 등이라면 관련 상담이나 치료 프로그램을 이수하세요. 한국도박문제예방치유원, 중독관리통합지원센터 등에서 상담을 받고 이수증을 발급받을 수 있습니다.</p>\n<p>이 자료는 법원에 <strong>"범행의 원인을 인식하고 스스로 교정하려 노력하고 있다"</strong>는 증거로 제출됩니다. 특히 도박으로 인한 사기 사건에서는 상당한 양형 참작 사유가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 상담 이수증, 치료 확인서, 정기 상담 기록</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022도1862 — 사기죄 기망행위의 성립 요건',
        summary:
          '대법원 2022도1862(대법원, 2026.01.29) 사건에서 법원은 사기죄의 기망행위는 사람으로 하여금 착오를 일으키게 하는 것이며, 컴퓨터 등을 통한 정보 입력이라도 그 결과를 통해 사람을 착오에 빠뜨렸다면 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '사기 혐의의 성립 여부 자체를 다투는 것도 전략 중 하나입니다. 피해자가 합의를 거부할 때, 감형 자료 준비와 함께 혐의 자체에 대한 법리적 다툼도 병행하면 더 유리합니다.',
      },
    ],
    faq: [
      {
        question: '피해자가 공탁금도 수령하지 않으면 어떻게 되나요?',
        answer: '공탁금은 피해자가 수령하지 않아도 <strong>법원에 맡겨진 사실 자체</strong>가 양형에 반영됩니다. 피해자는 나중에 원할 때 공탁소에서 수령할 수 있습니다.',
      },
      {
        question: '공탁만으로 집행유예를 받을 수 있나요?',
        answer: '편취 금액이 <strong>5천만원 이하</strong>이고 초범이면 전액 공탁 + 봉사활동 + 반성문으로 집행유예가 가능한 경우가 있습니다. 다만 합의(처벌불원)보다는 감경 폭이 작습니다.',
      },
      {
        question: '탄원서는 몇 통 정도 제출해야 하나요?',
        answer: '<strong>3~5통</strong>이 적당합니다. 너무 많으면 오히려 형식적으로 보일 수 있습니다. 가족, 직장, 지인 등 다양한 관계에서 받는 것이 효과적입니다.',
      },
      {
        question: '피해자에게 합의를 재요청해도 되나요?',
        answer: '1~2회까지는 가능하지만, 반복적으로 연락하면 <strong>2차 가해</strong>로 인식될 수 있습니다. 변호인을 통해 정중하게 요청하되, 거부하면 공탁 등 대안을 선택하세요.',
      },
      {
        question: '감형 자료는 언제까지 제출해야 하나요?',
        answer: '<strong>변론 종결 전</strong>까지 제출하면 양형에 반영됩니다. 다만 1심 선고 전에 제출하는 것이 가장 효과적이고, 항소심에서도 추가 제출이 가능합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 합의 시 형량 차이 비교', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '사기 합의 과정과 주의사항', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기 공탁 vs 합의 차이 정리', href: '/guide/fraud/fraud-deposit-vs-settlement-difference' },
      { label: '사기 초범 반성문 전 준비사항', href: '/guide/fraud/fraud-first-offense-before-apology-letter' },
      { label: '사기 혐의자 첫 대응 가이드', href: '/guide/fraud/fraud-accused-response' },
    ],
  },
  {
    domain: 'fraud',
    slug: 'fraud-deposit-vs-settlement-difference',
    keyword: '사기 공탁 합의 차이',
    questionKeyword: '사기 사건에서 공탁과 합의 중 어느 게 유리한가요?',
    ctaKeyword: '사기 공탁 합의 비교',
    type: '비교형',
    perspective: 'accused',
    meta: {
      title: '사기 공탁 vs 합의, 7가지 차이 비교표 | 로앤가이드',
      description: '사기 혐의를 받고 있는데 공탁이 나은지 합의가 나은지 헷갈리시나요? 법적 효과·비용·절차·감형 폭까지 7가지 비교표로 지금 확인하세요.',
    },
    intro: '변호사가 "합의가 안 되면 공탁이라도 하라"고 합니다. 공탁과 합의가 정확히 뭐가 다른 건지, 비용은 얼마나 차이 나는지, 감형 효과는 어떻게 다른지 잘 모르겠습니다. 공탁과 합의의 핵심 차이를 비교해서 내 상황에 맞는 선택을 해보세요.',
    comparison: {
      title: '공탁 vs 합의, 핵심 7가지 비교',
      headers: ['비교 항목', '공탁', '합의'],
      rows: [
        { label: '개념', values: ['법원에 금액을 맡김', '피해자와 직접 합의'] },
        { label: '피해자 동의', values: ['불필요', '필수'] },
        { label: '처벌불원 효과', values: ['없음', '있음 (감형 극대화)'] },
        { label: '감형 폭', values: ['중간 (피해 회복 노력)', '최대 (특별감경인자)'] },
        { label: '비용', values: ['편취 금액 상당액', '편취 금액 + 위자료(10~30%)'] },
        { label: '절차', values: ['법원 공탁소 방문', '피해자와 직접 협상'] },
        { label: '불기소 가능성', values: ['낮음', '높음 (수사 단계 합의 시)'] },
      ],
    },
    sections: [
      {
        title: '첫째, 공탁과 합의의 법적 의미부터 구분하세요',
        content:
          '<p><strong style="color:#1e3a5f">공탁은 "일방적 변제", 합의는 "쌍방 합의"입니다</strong></p>\n<p><strong>공탁</strong>은 피해자의 동의 없이 법원 공탁소에 편취 금액 상당액을 맡기는 것입니다. 피해자가 합의를 거부하거나 연락이 안 될 때 활용하는 <strong>차선책</strong>입니다.</p>\n<p><strong>합의</strong>는 피해자와 직접 만나 금전 보상에 대한 합의서를 작성하고, 피해자로부터 <strong>처벌불원서</strong>를 받는 것입니다. 합의에는 가능한 한 피해자의 자발적 동의가 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 차이: 공탁(피해자 동의 불필요) vs 합의(피해자 동의 필수)</blockquote>',
      },
      {
        title: '둘째, 감형 효과의 차이가 가장 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">합의(처벌불원)는 특별감경인자, 공탁은 일반감경사유입니다</strong></p>\n<p>양형위원회 기준에서 <strong>합의 + 처벌불원</strong>은 "피해 회복"이라는 특별감경인자에 해당할 소지가 있습니다. 양형 범위 자체가 한 단계 내려가는 효과가 있습니다.</p>\n<p>반면 <strong>공탁</strong>은 "상당 부분 피해 회복" 또는 "피해 회복을 위한 진지한 노력"으로 분류됩니다. 양형에 긍정적으로 반영되지만, 합의만큼 양형 범위를 움직이는 힘은 없습니다. 실무적으로 <strong>합의 대비 50~70%</strong> 정도의 감경 효과로 봅니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 효과: 합의(100%) > 공탁(50~70%) > 부분 변제(30~40%)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">공탁과 합의 중 내 상황에 유리한 쪽을 확인하세요</strong><br/>\n<a href="/diagnosis/fraud" style="color:#1565c0;font-weight:600">AI로 최적의 감형 전략 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 비용 구조가 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">공탁은 편취 금액만, 합의는 편취 금액 + 추가 비용이 듭니다</strong></p>\n<p><strong>공탁</strong>은 편취 금액 상당액만 법원에 납부하면 됩니다. 별도의 위자료나 합의금 프리미엄이 없습니다. 공탁 수수료도 소액(수천원 수준)입니다.</p>\n<p><strong>합의</strong>는 편취 금액 전액 반환에 더해 정신적 피해에 대한 <strong>위자료(편취 금액의 10~30%)</strong>를 요구받는 경우가 많습니다. 피해자의 합의 의향에 따라 금액이 크게 달라질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비용 예시(편취 3천만원): 공탁 = 3천만원, 합의 = 3,300~3,900만원</blockquote>',
      },
      {
        title: '넷째, 절차와 소요 시간이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">공탁은 1~2일, 합의는 수주~수개월이 걸릴 수 있습니다</strong></p>\n<p><strong>공탁</strong>은 관할 법원 공탁소를 방문하여 공탁서를 작성하고 금액을 납부하면 <strong>당일 완료</strong>됩니다. 피해자의 동의나 일정 조율이 필요 없으므로 시간이 촉박할 때 유리합니다.</p>\n<p><strong>합의</strong>는 피해자와의 연락, 합의금 협상, 합의서 작성, 처벌불원서 수령까지 <strong>수주에서 수개월</strong>이 걸릴 수 있습니다. 피해자가 감정적으로 합의를 거부하는 경우 더 오래 걸립니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시간: 공탁(1~2일) vs 합의(수주~수개월) — 재판 기일이 임박하면 공탁이 현실적</blockquote>',
      },
      {
        title: '다섯째, 상황별 최적 전략을 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의가 가능하면 합의를, 불가능하면 공탁 + 보조 자료를 준비하세요</strong></p>\n<p><strong>합의가 가능한 경우</strong>: 합의를 최우선으로 추진하세요. 합의서 + 처벌불원서가 감형 효과를 극대화합니다. 합의금은 변호인을 통해 적정 수준으로 협상하세요.</p>\n<p><strong>합의가 불가능한 경우</strong>: 전액 공탁 후 사회봉사, 반성문, 탄원서, 상담 이수증 등을 <strong>종합적으로 제출</strong>하세요. 공탁 단독보다 여러 자료를 조합하면 합의에 가까운 감경 효과를 기대할 수 있습니다.</p>\n<p><strong>시간이 촉박한 경우</strong>: 일단 공탁으로 피해 회복 의지를 증명하고, 합의 협상은 병행하세요. 공탁 후에도 합의가 되면 <strong>공탁금을 합의금으로 전환</strong>할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 합의 시도 → 거부 시 즉시 공탁 → 보조 자료 보강 → 합의 재시도 병행</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024도18441 — 사기죄 기망행위 성립 요건과 양형',
        summary:
          '대법원 2024도18441(대법원, 2025.03.27) 사건에서 법원은 카드론 대출 과정에서 사람에 대한 기망행위가 수반되지 않으면 사기죄가 성립하지 않는다고 판시했습니다. 이 판결은 사기죄의 성립 요건을 엄격하게 본 사례입니다.',
        takeaway:
          '공탁이나 합의를 준비하면서도, 혐의 자체를 다툴 수 있는 여지가 있는지 가능한 한 검토하세요. 기망행위의 고의가 없었다면 무죄 주장이 더 유리할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '공탁 후에 합의가 되면 공탁금은 어떻게 되나요?',
        answer: '피해자가 <strong>공탁금을 수령</strong>하면 자연스럽게 정리됩니다. 합의서에 공탁금을 합의금의 일부로 포함시킬 수도 있습니다.',
      },
      {
        question: '부분 공탁도 의미가 있나요?',
        answer: '전액 공탁보다 효과는 떨어지지만, <strong>아무것도 하지 않는 것보다</strong>는 훨씬 낫습니다. 현재 가능한 금액이라도 먼저 공탁하고, 나머지는 분할 공탁하세요.',
      },
      {
        question: '피해자가 여러 명이면 공탁도 각각 해야 하나요?',
        answer: '네, <strong>피해자별로 각각 공탁</strong>해야 합니다. 각 피해자의 편취 금액에 맞춰 별도로 공탁서를 작성하세요.',
      },
      {
        question: '합의서를 쓸 때 꼭 들어가야 하는 내용은 뭔가요?',
        answer: '합의 금액, 지급 방법, <strong>"향후 일체의 민·형사상 이의를 제기하지 않는다"</strong>는 문구, 처벌불원 의사가 가능한 한 포함되어야 합니다.',
      },
      {
        question: '공탁과 합의를 동시에 진행해도 되나요?',
        answer: '가능합니다. 먼저 <strong>공탁으로 피해 회복 의지를 보이면서</strong> 합의 협상을 병행하는 것이 실무에서 흔한 전략입니다.',
      },
      {
        question: '합의를 변호사가 대신 진행해도 되나요?',
        answer: '네, 오히려 <strong>변호인을 통해 진행</strong>하는 것이 좋습니다. 직접 연락하면 피해자가 부담을 느끼거나 2차 가해로 오해할 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/fraud',
    },
    internalLinks: [
      { label: '사기 합의 시 형량 차이 비교', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '피해자 합의 거부 시 감형 자료', href: '/guide/fraud/fraud-victim-refuses-settlement-alternatives' },
      { label: '사기 합의·선처에서 형량 줄이기', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 혐의자 첫 대응 가이드', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 초범 반성문 전 준비사항', href: '/guide/fraud/fraud-first-offense-before-apology-letter' },
    ],
  },
];
