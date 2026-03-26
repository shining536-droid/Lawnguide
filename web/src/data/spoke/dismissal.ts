import { SpokePage } from '../spoke-pages';

export const dismissalPages: SpokePage[] = [
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-first-steps',
    keyword: '부당해고 당했을 때 먼저 할 3가지',
    questionKeyword: '부당해고를 당했는데 먼저 무엇을 해야 하나요?',
    ctaKeyword: '부당해고 대응',
    type: '체크리스트형',
    meta: {
      title: '부당해고 즉시 대응 3가지 — 3개월 내 구제신청 필수 | 로앤가이드',
      description: '부당해고를 당했다면 해고 통지서 서면 확보, 증거 수집, 노동위원회 구제신청 3가지를 즉시 실행하세요. 해고일로부터 3개월 기한을 놓치면 구제 불가합니다. 지금 확인하세요.',
    },
    intro: '갑자기 해고 통보를 받았습니다. 정당한 사유도 없이, 사전 예고도 없이 "내일부터 안 나와도 된다"는 말을 들었습니다. 당황스럽지만 지금 바로 해야 할 3가지를 먼저 확인하세요.',
    timelineSteps: ['해고 통지서 확보', '증거 수집', '노동위원회 구제신청'],
    sections: [
      {
        title: '첫째, 해고 사유와 시기를 서면으로 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">해고는 서면으로 통지해야 효력이 있습니다</strong></p>\n<p><strong>근로기준법 제27조</strong>에 따라 사용자는 해고 사유와 시기를 <strong>서면으로</strong> 통지해야 합니다. 구두 해고는 그 자체로 부당해고입니다.</p>\n<p>사업주가 서면 통지를 거부하면, 해고 통보를 받은 <strong>일시, 장소, 말한 내용</strong>을 메모하세요. 녹음이 가능하다면 대화를 녹음해두세요(본인이 당사자인 대화 녹음은 합법입니다).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 해고 통지서 서면 요청, 구두 해고 시 일시·장소·내용 기록, 녹음</blockquote>',
      },
      {
        title: '둘째, 부당해고의 증거를 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">근무 성과와 해고 경위를 증명할 자료를 모으세요</strong></p>\n<p>인사평가 기록, 업무 실적 자료, 동료와의 대화 내역 등 <strong>정상적으로 근무했음을 증명</strong>할 자료를 확보하세요. 사업주가 주장하는 해고 사유가 사실과 다르다는 것을 입증하는 것이 중요합니다.</p>\n<p>취업규칙, 단체협약도 확인하세요. 해고 절차(징계위원회 개최 등)를 지키지 않았다면 <strong>절차적 부당해고</strong>에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 인사평가, 업무 실적, 해고 경위 기록, 취업규칙·징계 절차 확인</blockquote>',
      },
      {
        title: '셋째, 노동위원회에 구제신청을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">해고일로부터 3개월 이내에 구제신청을 해야 합니다</strong></p>\n<p><strong>근로기준법 제28조</strong>에 따라 부당해고를 당한 근로자는 <strong>지방노동위원회</strong>에 구제신청을 할 수 있습니다. 해고일로부터 <strong>3개월 이내</strong>에 신청해야 합니다. 이 기한을 놓치면 구제신청이 불가합니다.</p>\n<p>구제신청이 인용되면 <strong>원직 복직</strong>과 해고 기간 중 임금 상당액을 받을 수 있습니다. 복직 대신 <strong>금전보상명령</strong>을 선택할 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 해고일로부터 3개월 이내 구제신청 | 결과: 복직 + 임금 보상</blockquote>',
      },
      {
        title: '해고예고수당도 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">30일 전에 예고하지 않은 해고는 수당을 지급해야 합니다</strong></p>\n<p><strong>근로기준법 제26조</strong>에 따라 사용자가 근로자를 해고하려면 적어도 <strong>30일 전에 예고</strong>해야 합니다. 예고 없이 즉시 해고하면 <strong>30일분 이상의 통상임금</strong>(해고예고수당)을 지급해야 합니다.</p>\n<p>다만, 근무 기간이 3개월 미만이거나 일용근로자는 해고예고 대상이 아닐 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">해고예고: 30일 전 예고 미이행 → 30일분 통상임금 지급 의무</blockquote>',
      },
    ],
    cases: [
      {
        title: '서면 통지 없는 구두 해고가 부당해고로 인정된 사례',
        summary:
          '관련 사례에서도 사업주가 구두로만 해고를 통보하고 서면 통지를 하지 않아, 절차적 위반으로 부당해고가 인정되어 근로자가 복직된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 해고 통지가 서면으로 이루어졌는지 반드시 확인하세요.',
      },
      {
        title: '구제신청 기한(3개월)을 놓쳐 각하된 사례',
        summary:
          '관련 사례에서도 부당해고임에도 불구하고 구제신청 기한 3개월을 넘겨 각하된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 해고 직후 즉시 구제신청 절차를 진행하세요. 3개월 기한이 매우 중요합니다.',
      },
    ],
    faq: [
      {
        question: '부당해고 구제신청은 어디서 하나요?',
        answer: '사업장 소재지 관할 <strong>지방노동위원회</strong>에 신청합니다.',
      },
      {
        question: '구제신청 비용은 얼마인가요?',
        answer: '<strong>무료</strong>입니다. 변호사 없이도 신청할 수 있습니다.',
      },
      {
        question: '구제신청 결과에 불복하면?',
        answer: '<strong>중앙노동위원회</strong>에 재심을 청구할 수 있습니다(10일 이내).',
      },
      {
        question: '해고 기간 중 다른 곳에서 일했으면?',
        answer: '다른 곳에서 벌어들인 소득을 <strong>중간수입으로 공제</strong>할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장도 부당해고 구제가 되나요?',
        answer: '근로기준법상 해고 제한은 <strong>5인 이상 사업장</strong>에 적용됩니다. 5인 미만은 민사소송으로 다툴 수 있습니다.',
      },
      {
        question: '수습 기간 중 해고도 부당해고인가요?',
        answer: '수습 기간이라도 <strong>정당한 사유</strong> 없이 해고할 수 없습니다. 다만 해고예고 적용이 달라질 수 있습니다.',
      },
      {
        question: '권고사직과 해고의 차이는?',
        answer: '권고사직은 합의 퇴직이고, 해고는 일방적 퇴직입니다. 사실상 <strong>강제된 권고사직</strong>은 해고로 볼 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 해고 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부당해고 진단', href: '/diagnosis/dismissal' },
      { label: '해고예고수당 못 받았을 때 대처법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '퇴직금 안 줄 때 신고하는 방법', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },
  {
    domain: 'dismissal',
    slug: 'dismissal-notice-pay',
    keyword: '해고예고수당 못 받았을 때 대처법',
    questionKeyword: '해고예고수당을 못 받았는데 어떻게 하나요?',
    ctaKeyword: '해고예고수당 청구',
    type: '상황형',
    meta: {
      title: '해고예고수당 30일분 — 청구 조건·계산법·신고 절차 | 로앤가이드',
      description: '30일 전 예고 없이 해고되었다면 30일분 통상임금을 해고예고수당으로 받을 수 있습니다. 지급 조건, 금액 계산법, 노동청 진정 절차를 단계별로 정리했습니다. 바로 정리해보세요.',
    },
    intro: '어제 갑자기 해고 통보를 받았습니다. 30일 전에 미리 알려주지도 않았고, 해고예고수당도 주지 않았습니다. 해고예고수당을 받을 수 있는 조건과 청구 방법을 정리했습니다.',
    timelineSteps: ['요건 확인', '수당 계산', '청구 요청', '노동청 신고'],
    sections: [
      {
        title: '해고예고수당 지급 조건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">30일 전 예고 없는 해고 시 수당을 지급해야 합니다</strong></p>\n<p><strong>근로기준법 제26조</strong>에 따라 사용자가 30일 전에 해고를 예고하지 않으면 <strong>30일분 이상의 통상임금</strong>을 해고예고수당으로 지급해야 합니다.</p>\n<p>다만 ①근로 기간이 <strong>3개월 미만</strong>인 경우, ②일용근로자(1개월 미만 근무), ③수습 기간 3개월 이내인 경우 등은 적용되지 않을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조건: 30일 전 미예고 → 30일분 통상임금 지급 | 예외: 3개월 미만 근무 등</blockquote>',
      },
      {
        title: '해고예고수당 금액을 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">통상임금을 기준으로 30일분을 계산합니다</strong></p>\n<p><strong>통상임금</strong>은 기본급 + 정기적·일률적으로 지급되는 수당을 말합니다. 시급제라면 1일 소정근로시간 × 시급 × 30일로 계산합니다.</p>\n<p>예를 들어 월 통상임금이 250만원이면 해고예고수당은 약 <strong>250만원</strong>입니다. 15일 전에 예고했다면 나머지 15일분만 지급하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">계산: 30일분 통상임금 | 부분 예고 시 → 미예고 일수분만 지급</blockquote>',
      },
      {
        title: '사업주에게 먼저 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명으로 해고예고수당 지급을 요청하세요</strong></p>\n<p>먼저 사업주에게 <strong>내용증명</strong>으로 해고예고수당 지급을 요청합니다. "30일 전 해고 예고 없이 즉시 해고하였으므로, 근로기준법 제26조에 따라 30일분 통상임금을 지급해 주시기 바랍니다"라고 명시하세요.</p>\n<p>밀린 임금이나 퇴직금이 있다면 <strong>함께 청구</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명 발송, 해고예고수당 + 미지급 임금 함께 청구</blockquote>',
      },
      {
        title: '지급하지 않으면 노동청에 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">해고예고수당 미지급도 노동청에 진정할 수 있습니다</strong></p>\n<p>사업주가 지급하지 않으면 관할 <strong>고용노동청</strong>에 진정을 접수하세요. 해고 통보 경위, 해고일, 통상임금 등을 기재합니다.</p>\n<p>해고예고수당 미지급은 <strong>2년 이하 징역 또는 2,000만원 이하 벌금</strong>(근로기준법 제110조)에 해당합니다. 부당해고 구제신청도 함께 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 노동청 진정 → 시정 지시 → 불이행 시 형사처벌</blockquote>',
      },
    ],
    cases: [
      {
        title: '즉시 해고 후 해고예고수당을 받은 사례',
        summary:
          '관련 사례에서도 사전 예고 없이 즉시 해고된 근로자가 노동청 진정을 통해 30일분 통상임금을 해고예고수당으로 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 해고 통보 일시와 내용을 기록해두고 노동청에 바로 진정하세요.',
      },
      {
        title: '해고예고 기간을 일부만 준 경우 차액을 받은 사례',
        summary:
          '관련 사례에서도 10일 전에만 해고를 예고한 경우, 나머지 20일분의 해고예고수당을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 예고 기간이 30일에 미달하는 일수만큼의 수당을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '해고예고수당 청구 시효는?',
        answer: '<strong>3년</strong>입니다. 해고일로부터 3년 이내에 청구하세요.',
      },
      {
        question: '수습 기간 중에도 해고예고수당을 받나요?',
        answer: '수습 시작 후 <strong>3개월이 지났으면</strong> 해고예고수당 대상입니다.',
      },
      {
        question: '해고예고수당과 부당해고 구제는 동시에 할 수 있나요?',
        answer: '네, <strong>별개 절차</strong>이므로 동시에 진행할 수 있습니다.',
      },
      {
        question: '권고사직도 해고예고수당 대상인가요?',
        answer: '합의에 의한 퇴직이면 대상이 아니지만, <strong>사실상 강제 퇴직</strong>이면 해고로 볼 수 있습니다.',
      },
      {
        question: '해고예고수당에 세금이 붙나요?',
        answer: '해고예고수당은 <strong>근로소득</strong>으로 원천징수 대상입니다.',
      },
      {
        question: '해고 통보를 카톡으로 받았으면?',
        answer: '카카오톡 메시지도 <strong>해고 통지의 증거</strong>가 됩니다. 캡처해두세요.',
      },
      {
        question: '계약직 만료도 해고예고 대상인가요?',
        answer: '계약 기간 만료에 의한 퇴직은 해고가 아니므로 <strong>대상이 아닙니다</strong>.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 해고 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부당해고 진단', href: '/diagnosis/dismissal' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '퇴직금 안 줄 때 신고하는 방법', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },
];
