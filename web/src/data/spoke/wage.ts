import { SpokePage } from '../spoke-pages';

export const wagePages: SpokePage[] = [
  {
    domain: 'wage',
    slug: 'unpaid-wage-complaint-docs',
    keyword: '임금체불 신고 전에 준비할 서류',
    questionKeyword: '임금체불 신고하려면 어떤 서류가 필요한가요?',
    ctaKeyword: '임금체불 신고 준비',
    type: '준비서류형',
    meta: {
      title: '임금체불 신고 전에 준비할 서류 | 로앤가이드',
      description: '임금체불 신고에 필요한 서류, 증거 수집 방법, 노동청 진정 절차를 정리했습니다.',
    },
    intro: '회사가 월급을 두 달째 밀리고 있습니다. 노동청에 신고하려 하는데 어떤 서류를 준비해야 하는지 모르겠습니다. 신고 전에 미리 챙겨야 할 증거와 서류, 신고 절차를 정리했습니다.',
    timelineSteps: ['증거 수집', '서류 준비', '노동청 진정', '체불 확인·지급명령'],
    sections: [
      {
        title: '근로관계를 증명할 수 있는 서류를 먼저 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서와 급여 관련 서류가 핵심입니다</strong></p>\n<p><strong>근로계약서</strong>가 가장 중요합니다. 없으면 채용 문자, 카카오톡 대화, 이메일 등 <strong>근로관계를 증명할 자료</strong>가 필요합니다. 급여명세서, 통장 입금 내역(급여 이체 기록)도 반드시 확보하세요.</p>\n<p>4대보험 가입 확인서도 근로관계 증명에 도움이 됩니다. 국민연금공단이나 건강보험공단에서 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 서류: 근로계약서, 급여명세서, 통장 입금 내역, 4대보험 가입 확인서</blockquote>',
      },
      {
        title: '체불 금액을 구체적으로 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">어떤 급여가 얼마나 밀렸는지 날짜별로 정리하세요</strong></p>\n<p>체불 임금을 <strong>월별, 항목별</strong>로 정리합니다. 기본급, 연장근로수당, 야간근로수당, 휴일근로수당 등을 구분하세요. 출퇴근 기록(근태 기록)이 있으면 정확한 금액 산정에 도움이 됩니다.</p>\n<p>근무시간을 증명할 자료가 없으면 <strong>본인이 작성한 근무 일지</strong>라도 확보해두세요. 동료의 진술서도 보조 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정리: 월별 체불 금액, 항목별 구분, 출퇴근 기록, 근무 일지</blockquote>',
      },
      {
        title: '노동청에 진정(신고)을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">관할 고용노동청에 진정서를 제출하세요</strong></p>\n<p>사업장 소재지 관할 <strong>고용노동청</strong>에 진정서를 제출합니다. 방문, 우편, 온라인(고용노동부 민원마당) 모두 가능합니다. 진정서에는 사업장 정보, 체불 내역, 근로관계 증빙을 첨부하세요.</p>\n<p>접수 후 노동부 근로감독관이 <strong>출석 조사</strong>를 진행합니다. 사업주가 체불 사실을 인정하면 지급 지시가 나옵니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 고용노동청 방문/우편/온라인 → 근로감독관 조사</blockquote>',
      },
      {
        title: '지급 불이행 시 형사처벌과 추가 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">임금체불은 형사범죄입니다</strong></p>\n<p>근로기준법 제109조에 따라 임금체불은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당합니다. 사업주가 지급 지시에도 불구하고 지급하지 않으면 형사처벌이 진행됩니다.</p>\n<p>사업주가 지급 능력이 없는 경우 <strong>체당금 제도</strong>(근로복지공단)를 통해 최대 1,000만원까지 국가가 대신 지급하는 것도 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제: 형사처벌(3년/3,000만원) | 체당금(최대 1,000만원) 제도 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '근로계약서 없이도 임금체불이 인정된 사례',
        summary:
          '관련 사례에서도 근로계약서가 없었지만 카카오톡 대화 내역, 출퇴근 사진, 동료 진술 등으로 근로관계가 인정되어 체불 임금을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 근로계약서가 없더라도 포기하지 말고, 근로 사실을 증명할 다른 자료를 최대한 모으세요.',
      },
      {
        title: '체당금 제도로 밀린 급여를 받은 사례',
        summary:
          '관련 사례에서도 사업주가 폐업하여 지급 능력이 없었으나, 근로복지공단 체당금 제도를 통해 밀린 임금을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 사업주의 지급 능력이 없더라도 체당금 제도를 반드시 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '임금체불 신고는 재직 중에도 할 수 있나요?',
        answer: '네, <strong>재직 중에도 신고</strong>할 수 있습니다. 신고를 이유로 한 불이익은 법으로 금지됩니다.',
      },
      {
        question: '퇴직금도 같이 신고할 수 있나요?',
        answer: '네, 체불 <strong>퇴직금도 함께</strong> 진정할 수 있습니다.',
      },
      {
        question: '임금체불 소멸시효는?',
        answer: '임금채권의 소멸시효는 <strong>3년</strong>입니다. 3년이 지나면 청구가 어려워집니다.',
      },
      {
        question: '사장이 돈이 없다고 하면 어떻게 하나요?',
        answer: '<strong>체당금 제도</strong>(근로복지공단)를 통해 국가가 대신 지급할 수 있습니다.',
      },
      {
        question: '아르바이트도 임금체불 신고가 되나요?',
        answer: '네, 아르바이트도 <strong>근로기준법 적용</strong> 대상입니다.',
      },
      {
        question: '온라인으로 신고하려면 어디서 하나요?',
        answer: '<strong>고용노동부 민원마당</strong>(minwon.moel.go.kr)에서 접수할 수 있습니다.',
      },
      {
        question: '신고 후 얼마나 걸리나요?',
        answer: '통상 <strong>1~3개월</strong> 정도 소요됩니다. 사안에 따라 달라질 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 임금체불 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
      { label: '퇴사 후 밀린 월급 받는 방법', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '퇴직금 안 줄 때 신고하는 방법', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },
  {
    domain: 'wage',
    slug: 'unpaid-salary-after-resignation',
    keyword: '퇴사 후 밀린 월급 받는 방법',
    questionKeyword: '퇴사했는데 밀린 월급을 어떻게 받나요?',
    ctaKeyword: '밀린 월급 받기',
    type: '상황형',
    meta: {
      title: '퇴사 후 밀린 월급 받는 방법 | 로앤가이드',
      description: '퇴사 후 밀린 월급을 받기 위한 청구 절차, 노동청 신고, 소송 방법을 정리했습니다.',
    },
    intro: '퇴사한 지 한 달이 넘었는데 밀린 월급을 주지 않습니다. 전화하면 "곧 주겠다"고만 하고, 실제로는 입금이 없습니다. 퇴사 후 밀린 임금을 확실하게 받아내는 절차를 정리했습니다.',
    timelineSteps: ['청구 준비', '내용증명 발송', '노동청 진정', '민사소송/강제집행'],
    sections: [
      {
        title: '퇴직 후 14일 이내에 지급해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법은 퇴직 후 14일 이내 지급을 의무화합니다</strong></p>\n<p><strong>근로기준법 제36조</strong>에 따라 사용자는 근로자가 퇴직한 날부터 <strong>14일 이내</strong>에 임금, 보상금, 그 밖의 금품을 지급해야 합니다. 당사자 간 합의가 있으면 기한을 연장할 수 있지만, 합의 없는 지연은 위법입니다.</p>\n<p>14일을 넘기면 <strong>지연이자</strong>도 청구할 수 있습니다. 연 20%의 지연이자가 적용됩니다(근로기준법 시행령 제17조).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직 후 14일 이내 지급 의무 | 지연 시 연 20% 지연이자</blockquote>',
      },
      {
        title: '내용증명으로 공식 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">서면으로 지급 요청 기록을 남기세요</strong></p>\n<p>전화나 문자 독촉만으로는 부족합니다. <strong>내용증명</strong>으로 "퇴직일 ○월 ○일, 미지급 임금 ○○만원을 ○일까지 지급 바랍니다"라고 공식 청구하세요.</p>\n<p>내용증명에는 <strong>근로기준법 제109조</strong>(임금체불 시 형사처벌)를 언급하면 사업주의 자발적 지급을 유도할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명 발송, 미지급 금액·기간 명시, 형사처벌 조항 언급</blockquote>',
      },
      {
        title: '노동청에 진정을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용노동청 진정이 가장 효과적인 방법입니다</strong></p>\n<p>내용증명 후에도 지급하지 않으면 사업장 소재지 관할 <strong>고용노동청</strong>에 진정을 접수하세요. 근로감독관이 사업주를 출석시켜 조사합니다.</p>\n<p>사업주가 체불 사실을 인정하면 <strong>시정 지시</strong>가 나옵니다. 불이행 시 형사입건(3년 이하 징역/3,000만원 이하 벌금)됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 노동청 진정 → 조사 → 시정 지시 → 불이행 시 형사입건</blockquote>',
      },
      {
        title: '그래도 안 주면 민사소송과 강제집행을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">소액소송이나 지급명령으로 빠르게 판결을 받을 수 있습니다</strong></p>\n<p>밀린 급여가 <strong>3,000만원 이하</strong>면 소액소송이 가능합니다. 지급명령을 신청하면 비용이 소송의 1/10입니다. 확정 후 <strong>예금 압류</strong> 등 강제집행으로 받아낼 수 있습니다.</p>\n<p>사업주에게 지급 능력이 없으면 <strong>체당금 제도</strong>(근로복지공단)를 활용하세요. 퇴직 전 3개월분 임금과 퇴직금을 최대 1,000만원까지 지급받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제: 소액소송/지급명령 → 강제집행 | 체당금(최대 1,000만원)</blockquote>',
      },
    ],
    cases: [
      {
        title: '노동청 진정으로 밀린 급여를 전액 받은 사례',
        summary:
          '관련 사례에서도 퇴사 후 3개월간 급여를 받지 못한 근로자가 노동청에 진정하여, 근로감독관의 시정 지시 후 사업주가 밀린 급여와 지연이자를 전액 지급한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 노동청 진정을 주저하지 말고 바로 접수하세요.',
      },
      {
        title: '지연이자까지 포함하여 받은 사례',
        summary:
          '관련 사례에서도 퇴직 후 14일이 지나 밀린 급여에 대해 연 20% 지연이자까지 포함하여 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 지연이자(연 20%)도 반드시 함께 청구하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사 후 임금 청구 시효는?',
        answer: '임금채권의 소멸시효는 <strong>3년</strong>입니다.',
      },
      {
        question: '지연이자는 얼마인가요?',
        answer: '퇴직 후 14일 경과 시 <strong>연 20%</strong>의 지연이자가 적용됩니다.',
      },
      {
        question: '사장이 "네가 손해를 끼쳐서 공제한다"고 하면?',
        answer: '손해배상과 임금은 <strong>별개</strong>입니다. 임금에서 일방적으로 공제할 수 없습니다.',
      },
      {
        question: '계약직이나 일용직도 청구할 수 있나요?',
        answer: '네, 근로를 제공한 이상 <strong>고용형태와 관계없이</strong> 임금을 청구할 수 있습니다.',
      },
      {
        question: '4대보험 미가입인데도 신고가 되나요?',
        answer: '4대보험 가입 여부와 <strong>관계없이</strong> 근로관계가 존재하면 신고할 수 있습니다.',
      },
      {
        question: '사업주가 회사를 폐업하면?',
        answer: '<strong>체당금 제도</strong>를 통해 국가가 대신 지급합니다.',
      },
      {
        question: '회사가 밀린 급여에 세금을 떼겠다고 하면?',
        answer: '원천징수는 <strong>지급 시</strong>에 하는 것이므로, 밀린 급여 지급 시 공제하는 것은 정당합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 임금체불 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '퇴직금 안 줄 때 신고하는 방법', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },
];
