import { SpokePage } from '../spoke-pages';

export const retirementPages: SpokePage[] = [
  {
    domain: 'retirement',
    slug: 'retirement-pay-complaint',
    keyword: '퇴직금 안 줄 때 신고하는 방법',
    questionKeyword: '퇴직금을 안 주면 어디에 신고하나요?',
    ctaKeyword: '퇴직금 미지급 신고',
    type: '절차형',
    meta: {
      title: '퇴직금 안 줄 때 신고하는 3단계 방법 | 로앤가이드',
      description: '퇴직금을 안 주면 어디에 신고해야 할까요? 노동청 진정 절차, 필요 서류, 최대 1,000만원 체당금 제도까지 지금 확인하세요.',
    },
    intro: '1년 넘게 일하고 퇴사했는데 퇴직금을 주지 않습니다. 사장은 "회사 사정이 어렵다"며 차일피일 미루고 있습니다. 퇴직금을 확실하게 받기 위한 신고 절차와 준비 사항을 정리했습니다.',
    timelineSteps: ['퇴직금 산정', '내용증명 발송', '노동청 진정', '민사소송/체당금'],
    sections: [
      {
        title: '퇴직금 지급 조건을 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">1년 이상 근무하고, 주 15시간 이상 일했으면 퇴직금 대상입니다</strong></p>\n<p><strong>근로자퇴직급여보장법 제4조</strong>에 따라 계속근로기간이 <strong>1년 이상</strong>이고, 주 평균 근로시간이 <strong>15시간 이상</strong>인 근로자는 퇴직금을 받을 수 있습니다.</p>\n<p>퇴직금은 퇴직일로부터 <strong>14일 이내</strong>에 지급해야 합니다. 4대보험 미가입이나 계약서 미작성도 관계없이 퇴직금 청구가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조건: 1년 이상 근무 + 주 15시간 이상 → 퇴직금 대상 | 14일 이내 지급</blockquote>',
      },
      {
        title: '퇴직금을 계산하고 내용증명을 보내세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 = 1일 평균임금 × 30일 × (근속연수)</strong></p>\n<p>퇴직금은 <strong>퇴직 전 3개월간 임금 총액 ÷ 그 기간의 총 일수</strong>로 1일 평균임금을 구한 뒤, 30일분을 근속연수만큼 곱합니다. 기본급뿐 아니라 정기 상여금, 연차수당도 포함됩니다.</p>\n<p>계산이 끝나면 <strong>내용증명</strong>으로 "퇴직금 ○○만원을 ○일까지 지급 바랍니다"라고 공식 청구하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">계산: (퇴직 전 3개월 임금 ÷ 총일수) × 30 × 근속연수</blockquote>',
      },
      {
        title: '고용노동청에 진정을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 미지급도 임금체불과 동일하게 처리됩니다</strong></p>\n<p>사업장 소재지 관할 <strong>고용노동청</strong>에 진정서를 제출합니다. 방문, 우편, 온라인(고용노동부 민원마당) 모두 가능합니다. 근로계약서, 급여명세서, 통장 내역 등을 첨부하세요.</p>\n<p>퇴직금 미지급은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당합니다. 근로감독관이 사업주를 조사하고 시정 지시를 내립니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 노동청 진정 → 조사 → 시정 지시 → 불이행 시 형사처벌</blockquote>',
      },
      {
        title: '사업주가 못 주면 체당금 제도를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">체당금 제도로 국가가 대신 지급합니다</strong></p>\n<p>사업주가 도산하거나 지급 능력이 없는 경우 <strong>근로복지공단 체당금 제도</strong>를 이용할 수 있습니다. 퇴직금과 미지급 임금을 합쳐 최대 <strong>1,000만원</strong>까지 지급됩니다.</p>\n<p>간이대지급금(소액체당금)은 노동부 확인서만으로도 신청이 가능하여 더 빠르게 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체당금: 퇴직금 + 미지급 임금 합쳐 최대 1,000만원 | 근로복지공단 신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '4대보험 미가입이었으나 퇴직금을 받은 사례',
        summary:
          '관련 사례에서도 사업주가 4대보험에 가입하지 않았으나, 실제 근로관계가 인정되어 퇴직금을 지급받은 경우가 있습니다. 통장 입금 내역과 출퇴근 기록이 핵심 증거가 되었습니다.',
        takeaway:
          '비슷한 상황이라면 4대보험 미가입이라도 포기하지 말고, 근로 사실을 증명할 자료를 최대한 모으세요.',
      },
      {
        title: '체당금으로 퇴직금을 받은 사례',
        summary:
          '관련 사례에서도 사업주가 폐업한 상태에서 근로복지공단 체당금 제도를 통해 퇴직금을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 사업주의 지급 능력이 없더라도 체당금 제도를 반드시 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '퇴직금 청구 소멸시효는?',
        answer: '퇴직일로부터 <strong>3년</strong>입니다.',
      },
      {
        question: '1년 미만 근무하면 퇴직금이 없나요?',
        answer: '네, 계속근로기간 <strong>1년 미만</strong>이면 퇴직금 대상이 아닙니다.',
      },
      {
        question: '퇴직금에 세금이 붙나요?',
        answer: '<strong>퇴직소득세</strong>가 부과됩니다. 근속연수가 길수록 세금이 줄어듭니다.',
      },
      {
        question: '중간정산한 기간도 포함되나요?',
        answer: '중간정산 이후 기간부터 <strong>새로 계산</strong>합니다.',
      },
      {
        question: '퇴직금과 밀린 급여를 같이 신고할 수 있나요?',
        answer: '네, <strong>함께 진정</strong>할 수 있습니다.',
      },
      {
        question: '아르바이트도 퇴직금을 받나요?',
        answer: '1년 이상 근무하고 주 15시간 이상이면 <strong>고용형태와 관계없이</strong> 받을 수 있습니다.',
      },
      {
        question: '사장이 "퇴직금 포함 월급"이라고 하면?',
        answer: '퇴직금을 월급에 포함하여 지급하는 약정은 <strong>무효</strong>입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 퇴직금 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
      { label: '퇴직금 계산 기준과 확인 방법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },
  {
    domain: 'retirement',
    slug: 'retirement-pay-calculation',
    keyword: '퇴직금 계산 기준과 확인 방법',
    questionKeyword: '퇴직금은 어떻게 계산하나요?',
    ctaKeyword: '퇴직금 계산',
    type: '수치기한형',
    meta: {
      title: '퇴직금 계산 기준과 확인 방법 총정리 | 로앤가이드',
      description: '내 퇴직금이 정확히 얼마인지 궁금하신가요? 평균임금 계산법, 포함 항목, 상여금 누락 여부, 직접 확인하는 방법까지 바로 정리해보세요.',
    },
    intro: '퇴사를 앞두고 퇴직금이 얼마나 나올지 궁금합니다. 회사가 제대로 계산해서 줄지도 걱정됩니다. 퇴직금 산정 기준과 직접 확인하는 방법을 정리했습니다.',
    timelineSteps: ['평균임금 산정', '근속연수 확인', '퇴직금 계산', '금액 검증'],
    sections: [
      {
        title: '퇴직금의 기본 공식을 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 = 1일 평균임금 × 30일 × (총 근속연수)</strong></p>\n<p>퇴직금은 <strong>1일 평균임금</strong>에 30을 곱하고, 근속연수를 곱하여 산정합니다. 1년에 30일분 평균임금, 즉 약 1개월분 급여가 퇴직금입니다.</p>\n<p>예를 들어 3년 근무하고 1일 평균임금이 10만원이면, 퇴직금은 10만원 × 30 × 3 = <strong>900만원</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공식: 1일 평균임금 × 30 × 근속연수 | 1년 근무 → 약 1개월분 급여</blockquote>',
      },
      {
        title: '평균임금에 포함되는 항목을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">기본급 외에 정기 상여금, 연차수당 등도 포함됩니다</strong></p>\n<p><strong>평균임금</strong>은 퇴직 전 3개월간 지급된 임금 총액을 그 기간의 총 일수(달력 일수)로 나눈 금액입니다. 기본급뿐만 아니라 <strong>정기 상여금, 연차수당, 정기적 수당</strong>도 포함됩니다.</p>\n<p>다만 실비변상(교통비, 식비 등)이나 임시로 지급된 금품은 포함되지 않습니다. 통상임금이 평균임금보다 높으면 <strong>통상임금</strong>을 기준으로 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">포함: 기본급, 정기 상여금, 연차수당, 정기 수당 | 미포함: 실비변상, 임시 금품</blockquote>',
      },
      {
        title: '근속기간 산정 시 주의할 점',
        content:
          '<p><strong style="color:#1e3a5f">입사일부터 퇴직일까지의 전체 기간이 근속기간입니다</strong></p>\n<p>근속기간은 <strong>입사일부터 퇴직일</strong>까지입니다. 수습 기간, 휴직 기간도 원칙적으로 포함됩니다. 계약 갱신을 반복한 경우에도 실질적으로 근로관계가 계속되었으면 <strong>전체 기간</strong>을 합산합니다.</p>\n<p>중간정산을 한 경우에는 정산 시점 이후부터 새로 계산합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">산정: 입사일~퇴직일 | 수습·휴직 포함 | 중간정산 후 기간부터 재계산</blockquote>',
      },
      {
        title: '퇴직금을 직접 확인하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 퇴직금 계산기로 간편하게 확인하세요</strong></p>\n<p><strong>고용노동부 퇴직금 계산기</strong>(moel.go.kr)에서 입사일, 퇴직일, 3개월 급여를 입력하면 예상 퇴직금을 자동 산정해줍니다.</p>\n<p>회사가 제시한 금액이 적다고 느끼면 <strong>급여명세서</strong>를 기준으로 직접 계산해보세요. 정기 상여금이나 연차수당 누락이 가장 흔한 오류입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 고용노동부 퇴직금 계산기 활용 | 주의: 상여금·연차수당 누락 여부 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '정기 상여금이 평균임금에 포함되어 퇴직금이 증가한 사례',
        summary:
          '관련 사례에서도 회사가 기본급만으로 퇴직금을 산정했으나, 정기 상여금이 평균임금에 포함되어야 한다고 인정되어 퇴직금 차액을 추가로 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 정기 상여금이 퇴직금 산정에 포함되었는지 반드시 확인하세요.',
      },
      {
        title: '계약직 반복 갱신이 계속근로로 인정된 사례',
        summary:
          '관련 사례에서도 1년 단위 계약을 3회 갱신한 근로자가 전체 3년간의 근속기간을 합산하여 퇴직금을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 계약 갱신을 반복한 경우 전체 기간에 대한 퇴직금을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직금에 세금은 얼마나 붙나요?',
        answer: '<strong>퇴직소득세</strong>가 부과되며, 근속연수가 길수록 공제가 커집니다.',
      },
      {
        question: '퇴직연금(DC/DB)과 퇴직금의 차이는?',
        answer: 'DB형은 회사가 운용하고 <strong>퇴직금과 같은 방식</strong>으로 산정합니다. DC형은 회사가 매년 적립하고 운용은 근로자가 합니다.',
      },
      {
        question: '중간정산은 어떤 경우에 가능한가요?',
        answer: '주택 구입, 전세금 마련, 질병 등 <strong>법정 사유</strong>가 있어야 합니다.',
      },
      {
        question: '월급에 퇴직금이 포함되어 있다고 하면?',
        answer: '퇴직금을 월급에 포함하여 지급하는 약정은 <strong>무효</strong>입니다.',
      },
      {
        question: '파트타임도 퇴직금을 받나요?',
        answer: '주 15시간 이상, 1년 이상 근무하면 <strong>근로시간에 비례</strong>하여 받을 수 있습니다.',
      },
      {
        question: '퇴직금은 언제까지 줘야 하나요?',
        answer: '퇴직일로부터 <strong>14일 이내</strong>입니다.',
      },
      {
        question: '퇴직금 계산기는 어디에 있나요?',
        answer: '<strong>고용노동부 홈페이지</strong>(moel.go.kr)에서 이용할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 퇴직금 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
      { label: '퇴직금 안 줄 때 신고하는 방법', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴사 후 밀린 월급 받는 방법', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },
];
