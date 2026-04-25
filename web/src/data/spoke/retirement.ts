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
      title: '퇴직금 안 줄 때 노동청 진정 접수 3단계 | 로앤가이드',
      description: '퇴직금을 안 주는 사장에게 법적으로 대응하려면? 진정서 작성법, 첨부 서류, 내용증명 양식까지 신고 준비 3단계를 지금 확인하세요.',
    },
    intro: '퇴직한 지 한 달이 넘었는데 사장이 "다음 달에 준다"는 말만 반복합니다. 전화를 걸 때마다 변명이 달라지고, 이제는 아예 전화도 안 받습니다. 말로는 퇴직금을 받을 수 없습니다. 노동청에 진정을 넣겠다고 마음을 먹었는데, 진정서를 어떻게 쓰고 무엇을 첨부해야 하는지 막막합니다. 진정 접수를 위한 준비부터 단계별로 정리했습니다.',
    timelineSteps: ['퇴직금 계산', '내용증명 발송', '진정서 작성', '노동청 접수'],
    sections: [
      {
        title: '내 퇴직금이 정확히 얼마인지 먼저 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">진정서에 청구 금액을 정확히 기재해야 조사가 빨라집니다</strong></p>\n<p><strong>근로자퇴직급여보장법 제4조</strong>에 따라 계속근로기간 1년 이상, 주 평균 근로시간 15시간 이상이면 퇴직금 대상입니다. 퇴직금 계산 공식은 <strong>퇴직 전 3개월간 임금 총액 ÷ 총 일수 × 30 × 근속연수</strong>입니다.</p>\n<p>"임금 총액"에는 기본급뿐 아니라 정기 상여금, 연차수당, 고정 수당도 포함됩니다. 통상임금이 평균임금보다 높으면 통상임금을 적용합니다. 고용노동부 퇴직금 계산기(www.moel.go.kr)를 활용하면 간편합니다. 계산한 금액이 곧 진정서의 <strong>"미지급 퇴직금"</strong> 항목에 기재하는 금액이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공식: (3개월 임금 ÷ 총일수) × 30 × 근속연수 | 계산기: 고용노동부 홈페이지</blockquote>',
      },
      {
        title: '내용증명으로 공식 지급 요청을 먼저 보내세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명은 진정서에 첨부할 핵심 증거이자 사업주에 대한 최후 통보입니다</strong></p>\n<p>우체국에서 <strong>내용증명 3통</strong>을 작성합니다(본인 보관용 1통, 우체국 보관용 1통, 사업주 발송용 1통). 비용은 3,000~5,000원입니다. 기재 항목: 본인 인적사항, 재직기간, 퇴직일, 미지급 퇴직금 금액, 지급 요청 기한(수령일로부터 7~10일), "미지급 시 법적 조치"라는 문구.</p>\n<p>내용증명은 민법 제174조에 따른 <strong>최고</strong>로서 소멸시효 중단 효과(6개월)가 있습니다. 진정서 접수 시 "사전에 지급을 요청했다"는 증거로 활용되므로 가능한 한 발송하세요. 사업주가 내용증명 수령 후에도 지급하지 않으면 진정 접수의 정당성이 더 강해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명 3통 작성 → 우체국 발송 → 사본 보관(진정서 첨부용)</blockquote>',
      },
      {
        title: '진정서를 작성하고 증거 서류를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">진정서 양식은 고용노동부 홈페이지에서 다운로드하고, 증거는 많을수록 유리합니다</strong></p>\n<p>진정서에 기재할 핵심 항목: ① <strong>사업장 정보</strong>(상호, 사업자등록번호, 주소, 대표자명), ② 본인 인적사항, ③ 재직기간과 퇴직일, ④ 미지급 퇴직금 금액, ⑤ 지급 요청 경위(내용증명 발송일 등). 고용노동부 민원마당(minwon.moel.go.kr)에서 양식을 다운로드하거나 관할 지청에서 받을 수 있습니다.</p>\n<p>첨부 서류: <strong>근로계약서</strong>(없으면 근무 사실 증명 대체 가능), <strong>급여명세서</strong>(없으면 통장 입금 내역), <strong>내용증명 발송 증빙</strong>, 4대보험 가입 이력, 출퇴근 기록. 4대보험 미가입이라도 통장 입금 내역과 출퇴근 기록으로 근로관계를 증명할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 첨부: 근로계약서(또는 대체 증빙) + 급여 내역 + 내용증명 사본</blockquote>',
      },
      {
        title: '관할 고용노동지청에 접수하세요 — 3가지 방법',
        content:
          '<p><strong style="color:#1e3a5f">방문·우편·온라인 3가지 방법으로 접수할 수 있으며 비용은 무료입니다</strong></p>\n<p>접수 방법: ① <strong>방문 접수</strong> — 사업장 소재지 관할 고용노동지청에 직접 방문. ② <strong>우편 접수</strong> — 진정서와 첨부 서류를 등기우편으로 발송. ③ <strong>온라인 접수</strong> — 고용노동부 민원마당(minwon.moel.go.kr)에서 전자 접수. 별도의 수수료나 인지대 없이 <strong>완전 무료</strong>입니다.</p>\n<p>접수 후 담당 근로감독관이 배정되며, 사업주에게 출석 요구가 발송됩니다. 퇴직금 미지급은 근로기준법 제109조에 따라 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당하는 범죄이므로, 근로감독관이 사업주에게 시정지시를 내립니다. 접수 전에 고용노동부 고객상담센터(1350)에 전화하면 관할 지청과 절차를 안내받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 방문·우편·온라인 모두 가능 | 비용 무료 | 1350 전화 상담</blockquote>',
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
        title: '내용증명 없이 바로 진정하여 처리가 지연된 사례',
        summary:
          '관련 사례에서 내용증명 없이 바로 노동청에 진정한 경우, 사업주가 "요청받은 적 없다"고 다투어 조사 기간이 3개월 이상 소요된 경우가 있습니다. 내용증명이 있었다면 사업주의 변명 여지가 줄어 더 빠른 시정이 가능했습니다.',
        takeaway:
          '비슷한 상황이라면 진정 접수 전에 내용증명을 먼저 발송하여 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '근로계약서가 없어도 진정할 수 있나요?',
        answer: '네, 근로계약서가 없어도 <strong>통장 입금 내역, 카카오톡 업무 지시, 출퇴근 사진</strong> 등으로 근로관계를 증명하면 진정이 가능합니다.',
      },
      {
        question: '사장이 "프리랜서"라고 주장하면 어떻게 되나요?',
        answer: '노동청 근로감독관이 <strong>실질적 근로관계</strong> 여부를 판단합니다. 출퇴근 시간 지정, 업무 지시, 보수의 정기성 등이 있으면 근로자로 인정될 수 있습니다.',
      },
      {
        question: '진정서에 금액을 잘못 적으면 어떻게 되나요?',
        answer: '조사 과정에서 <strong>정정이 가능</strong>합니다. 다만 처음부터 정확한 금액을 기재하면 조사가 빨라지므로 계산을 꼼꼼히 하세요.',
      },
      {
        question: '퇴직금과 밀린 월급을 함께 신고할 수 있나요?',
        answer: '네, <strong>임금체불과 퇴직금 미지급을 하나의 진정서로 함께 접수</strong>할 수 있습니다.',
      },
      {
        question: '진정 접수 후 사장이 보복할 수 있나요?',
        answer: '근로기준법 제104조 제2항에 따라 진정을 이유로 <strong>불이익을 주면 2년 이하 징역 또는 2,000만원 이하 벌금</strong>에 처해집니다.',
      },
      {
        question: '아르바이트도 퇴직금 진정이 가능한가요?',
        answer: '1년 이상 근무, 주 15시간 이상이면 <strong>고용형태와 관계없이</strong> 퇴직금 대상이므로 진정이 가능합니다.',
      },
    ],
    cta: {
      text: '퇴직금 미지급으로 노동청 신고를 준비 중이라면 지금 확인해보세요',
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
          '비슷한 상황이라면 정기 상여금이 퇴직금 산정에 포함되었는지 가능한 한 확인하세요.',
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
