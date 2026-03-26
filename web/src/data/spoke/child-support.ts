import { SpokePage } from '../spoke-pages';

export const childSupportPages: SpokePage[] = [
  {
    domain: 'child-support',
    slug: 'child-support-lawsuit-process',
    keyword: '양육비 청구 소송 절차와 기간',
    questionKeyword: '양육비 청구 소송은 어떻게 진행되나요?',
    ctaKeyword: '양육비 청구 소송',
    type: '절차타임라인형',
    meta: {
      title: '양육비 청구 소송 4단계 — 심판부터 강제집행까지 | 로앤가이드',
      description: '양육비를 받지 못하고 있다면 심판 청구 → 조정 → 이행명령 → 감치·강제집행 4단계로 대응하세요. 소요 기간 3~6개월, 급여 압류·출국금지까지 가능합니다. 지금 확인하세요.',
    },
    intro: '이혼 후 아이를 혼자 키우고 있는데, 전 배우자가 양육비를 보내지 않습니다. 몇 번 연락했지만 "형편이 안 된다"는 말만 반복합니다. 아이 학원비에 생활비까지 혼자 감당하기 힘들어졌습니다. 양육비를 법적으로 받을 수 있는 절차를 정리했습니다.',
    timelineSteps: ['양육비 심판 청구', '조정·심판 진행', '이행명령 신청', '강제집행·감치'],
    sections: [
      {
        title: '가정법원에 양육비 심판 청구를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법에 따라 가정법원에 양육비 심판을 청구할 수 있습니다</strong></p>\n<p>양육비를 지급하지 않는 상대방에게 <strong>가정법원에 양육비 심판 청구</strong>를 할 수 있습니다. 이혼 시 양육비를 정하지 않았거나, 정했지만 지급하지 않는 경우 모두 해당됩니다.</p>\n<p>청구서에는 자녀의 나이, 교육비, 생활비 등 <strong>양육에 필요한 비용</strong>을 구체적으로 기재합니다. 과거 미지급 양육비도 함께 청구할 수 있습니다. 인지대와 송달료 외에 큰 비용은 들지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 가정법원 양육비 심판 청구 → 과거 미지급분 포함 가능 → 인지대·송달료만 필요</blockquote>',
      },
      {
        title: '조정을 거쳐 심판이 확정되기까지 3~6개월 소요됩니다',
        content:
          '<p><strong style="color:#1e3a5f">가정법원은 먼저 조정을 시도하고, 불성립 시 심판으로 넘어갑니다</strong></p>\n<p>양육비 사건은 <strong>조정 전치주의</strong>에 따라 먼저 조정을 시도합니다. 당사자 간 합의가 이루어지면 조정이 성립하고, 합의가 안 되면 심판 절차로 넘어갑니다.</p>\n<p>심판에서는 양쪽의 소득, 재산, 자녀의 필요 비용 등을 고려하여 법원이 <strong>양육비 금액을 결정</strong>합니다. 통상 3~6개월 소요되며, 서울가정법원 양육비 산정 기준표가 참고 자료로 활용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기간: 조정 시도(1~2개월) → 불성립 시 심판(2~4개월) → 총 3~6개월</blockquote>',
      },
      {
        title: '양육비이행관리원의 도움을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원이 추심과 한시적 양육비를 지원합니다</strong></p>\n<p><strong>양육비이행관리원</strong>(www.childsupport.or.kr)은 양육비 이행확보를 위한 공공기관입니다. 양육비를 받지 못하고 있다면 이행관리원에 지원을 신청하세요.</p>\n<p>이행관리원은 상대방에게 <strong>이행 촉구</strong>를 하고, 불이행 시 추심 지원을 합니다. 긴급한 경우 한시적 양육비(월 최대 20만원)를 선지급받을 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원: 양육비이행관리원 → 이행 촉구, 추심 지원, 한시적 양육비 선지급</blockquote>',
      },
      {
        title: '이행명령과 감치로 강제 이행을 요구할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">이행명령 불이행 시 감치(30일 이내 유치)가 가능합니다</strong></p>\n<p>심판이 확정되었는데도 양육비를 지급하지 않으면 가정법원에 <strong>이행명령</strong>을 신청하세요. 이행명령을 받고도 불이행하면 <strong>감치</strong>(30일 이내 유치장 감치)를 신청할 수 있습니다.</p>\n<p>재산이 있는데도 지급하지 않는 경우 <strong>강제집행</strong>(급여 압류, 예금 압류)도 가능합니다. 운전면허 정지, 출국금지 등 <strong>제재 조치</strong>도 양육비이행관리원을 통해 요청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">강제: 이행명령 → 감치(30일) → 강제집행(급여·예금 압류) → 면허정지·출국금지</blockquote>',
      },
    ],
    cases: [
      {
        title: '감치 신청 후 양육비가 일괄 지급된 사례',
        summary:
          '관련 사례에서도 양육비 미지급이 2년 이상 지속되어 감치를 신청한 결과, 상대방이 유치장에 수감되기 직전 밀린 양육비 전액을 일괄 지급한 경우가 있습니다. 감치 결정이 내려지면 심리적 압박이 커져 자발적으로 이행하는 경우가 많습니다.',
        takeaway:
          '비슷한 상황이라면 이행명령 후에도 불이행이 계속되면 감치 신청을 적극적으로 검토하세요.',
      },
      {
        title: '양육비이행관리원을 통해 급여 압류에 성공한 사례',
        summary:
          '관련 사례에서도 양육비이행관리원의 지원으로 상대방의 직장을 확인하고 급여 채권 압류를 진행하여, 매월 급여에서 양육비가 자동 공제된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 양육비이행관리원에 지원 신청을 하고, 상대방의 직장 정보를 확보해두세요.',
      },
    ],
    faq: [
      {
        question: '이혼 시 양육비를 정하지 않았는데 지금이라도 청구할 수 있나요?',
        answer: '네, 이혼 후에도 <strong>가정법원에 양육비 심판 청구</strong>가 가능합니다. 양육비 청구에는 별도의 시효 제한이 없으므로 언제든 신청할 수 있습니다.',
      },
      {
        question: '과거 미지급 양육비도 받을 수 있나요?',
        answer: '청구 시점 이전의 양육비도 <strong>소급 청구</strong>가 가능합니다. 다만 인정 범위는 법원 판단에 따릅니다.',
      },
      {
        question: '양육비는 얼마가 적정한가요?',
        answer: '서울가정법원 <strong>양육비 산정 기준표</strong>가 참고됩니다. 양쪽 소득과 자녀 나이에 따라 달라집니다.',
      },
      {
        question: '양육비 심판 비용은 얼마인가요?',
        answer: '인지대와 송달료를 합쳐 <strong>수만원 수준</strong>입니다. 변호사 없이 본인이 직접 청구할 수도 있으며, 경제적으로 어려운 경우 대한법률구조공단의 무료 소송대리 지원을 받을 수 있습니다.',
      },
      {
        question: '상대방이 소득이 없다고 주장하면?',
        answer: '법원이 재산·소득 조회를 통해 <strong>실제 지급 능력</strong>을 확인합니다. 근로능력이 있으면 추정 소득으로 산정합니다.',
      },
      {
        question: '양육비 지급 기간은 언제까지인가요?',
        answer: '원칙적으로 자녀가 <strong>성년(만 19세)</strong>이 될 때까지이며, 대학 진학 등 특별한 사정이 있으면 연장이 인정될 수 있습니다.',
      },
      {
        question: '혼인 외 자녀도 양육비를 청구할 수 있나요?',
        answer: '인지 청구를 통해 부자관계가 확인되면 <strong>양육비 청구가 가능</strong>합니다. DNA 검사를 통해 친자관계를 입증할 수 있으며, 법원에 인지 심판을 청구하면 됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 양육비이행관리원(1644-6621)에서 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 양육비 상황에 맞는 청구 방법을 확인해보세요',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 진단', href: '/diagnosis/child-support' },
    ],
  },
];
