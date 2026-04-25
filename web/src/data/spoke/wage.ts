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
      title: '임금체불 신고 전 준비서류 5가지 총정리 | 로앤가이드',
      description: '임금체불 신고하려는데 어떤 서류가 필요할까요? 근로계약서·급여명세서·출퇴근기록 등 증거 수집법과 노동청 진정 절차를 바로 정리해보세요.',
    },
    intro: '회사가 월급을 두 달째 밀리고 있습니다. 노동청에 신고하려 하는데 어떤 서류를 준비해야 하는지 모르겠습니다. 신고 전에 미리 챙겨야 할 증거와 서류, 신고 절차를 정리했습니다.',
    timelineSteps: ['증거 수집', '서류 준비', '노동청 진정', '체불 확인·지급명령'],
    sections: [
      {
        title: '근로관계를 증명할 수 있는 서류를 먼저 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서와 급여 관련 서류가 핵심입니다</strong></p>\n<p><strong>근로계약서</strong>가 가장 중요합니다. 없으면 채용 문자, 카카오톡 대화, 이메일 등 <strong>근로관계를 증명할 자료</strong>가 필요합니다. 급여명세서, 통장 입금 내역(급여 이체 기록)도 가능한 한 확보하세요.</p>\n<p>4대보험 가입 확인서도 근로관계 증명에 도움이 됩니다. 국민연금공단이나 건강보험공단에서 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 서류: 근로계약서, 급여명세서, 통장 입금 내역, 4대보험 가입 확인서</blockquote>',
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
          '<p><strong style="color:#1e3a5f">임금체불은 형사범죄입니다</strong></p>\n<p>근로기준법 제109조에 따라 임금체불은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당할 소지가 있습니다. 사업주가 지급 지시에도 불구하고 지급하지 않으면 형사처벌이 진행됩니다.</p>\n<p>사업주가 지급 능력이 없는 경우 <strong>체당금 제도</strong>(근로복지공단)를 통해 최대 1,000만원까지 국가가 대신 지급하는 것도 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제: 형사처벌(3년/3,000만원) | 체당금(최대 1,000만원) 제도 활용</blockquote>',
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
          '비슷한 상황이라면 사업주의 지급 능력이 없더라도 체당금 제도를 가능한 한 확인해보세요.',
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
      title: '퇴사 후 밀린 월급 받는 3단계 방법 | 로앤가이드',
      description: '퇴사했는데 월급이 안 들어왔나요? 내용증명 발송부터 노동청 진정, 민사소송까지 밀린 임금 청구 절차를 지금 확인하세요.',
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
          '비슷한 상황이라면 지연이자(연 20%)도 가능한 한 함께 청구하세요.',
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
  {
    domain: 'wage',
    slug: 'unpaid-salary-after-quit-guide',
    keyword: '퇴사 후 밀린 월급 받는 법 총정리',
    questionKeyword: '퇴사했는데 밀린 월급을 어떻게 받을 수 있나요?',
    ctaKeyword: '퇴사 후 밀린 월급 받기',
    type: '절차형',
    meta: {
      title: '밀린 월급 받는 5가지 방법 총정리 | 로앤가이드',
      description: '월급이 계속 밀리고 있나요? 증거 수집, 내용증명, 고용노동부 진정, 체당금 신청, 소송까지 임금체불 해결 절차를 바로 정리해보세요.',
    },
    intro: '퇴사한 지 한 달이 넘었는데 밀린 월급이 입금되지 않습니다. 사장에게 연락하면 "사정이 어려우니 조금만 기다려달라"는 말만 반복합니다. 퇴사 후 밀린 임금을 확실하게 받아내기 위한 절차를 순서대로 정리했습니다.',
    timelineSteps: ['증거 수집·금액 정리', '내용증명 발송', '고용노동부 진정', '체당금·소송'],
    sections: [
      {
        title: '체불 금액과 증거를 먼저 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">얼마가 밀렸는지 날짜별로 구체적으로 정리하세요</strong></p>\n<p>밀린 급여를 <strong>월별, 항목별</strong>(기본급, 연장근로수당, 야간수당, 휴일수당 등)로 구분하여 정리하세요. <strong>급여명세서</strong>, 통장 입금 내역, 근로계약서가 핵심 증거입니다.</p>\n<p>근로계약서가 없다면 채용 문자, 카카오톡 대화, 이메일, 구인 공고 캡처 등 <strong>근로관계를 증명할 자료</strong>를 모두 확보하세요. 출퇴근 기록이나 본인 작성 근무 일지도 보조 증거가 됩니다. 4대보험 가입 확인서는 <strong>국민연금공단</strong>이나 건강보험공단에서 발급받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 근로계약서, 급여명세서, 통장 입금 내역, 4대보험 가입 확인서, 출퇴근 기록</blockquote>',
      },
      {
        title: '내용증명으로 공식 청구 기록을 남기세요',
        content:
          '<p><strong style="color:#1e3a5f">서면으로 지급 요청을 하면 법적 증거가 됩니다</strong></p>\n<p>전화나 문자 독촉만으로는 공식 기록이 부족합니다. <strong>우체국 내용증명</strong>으로 "퇴직일 ○월 ○일, 미지급 임금 ○○만원을 ○일까지 지급해주세요"라고 청구하세요.</p>\n<p><strong>근로기준법 제36조</strong>에 따라 사용자는 퇴직 후 <strong>14일 이내</strong>에 임금을 지급해야 합니다. 14일을 넘기면 <strong>연 20%의 지연이자</strong>도 청구할 수 있습니다(근로기준법 시행령 제17조). 내용증명에 형사처벌 조항(근로기준법 제109조)을 언급하면 자발적 지급을 유도하는 효과가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 내용증명 3부 작성, 미지급 금액·퇴직일 명시, 지연이자 청구</blockquote>',
      },
      {
        title: '고용노동부에 임금체불 진정을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">노동청 진정이 가장 효과적인 방법입니다</strong></p>\n<p>내용증명 후에도 지급하지 않으면 사업장 소재지 관할 <strong>고용노동청</strong>에 진정을 접수하세요. 방문, 우편, 온라인(<strong>고용노동부 민원마당</strong> minwon.moel.go.kr) 모두 가능합니다.</p>\n<p>진정 접수 후 <strong>근로감독관</strong>이 사업주를 출석시켜 조사합니다. 체불 사실이 확인되면 시정 지시가 나옵니다. 시정 지시에도 불이행하면 <strong>형사입건</strong>됩니다. 근로기준법 제109조에 따라 임금체불은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당할 소지가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 고용노동청 방문/우편/온라인 → 근로감독관 조사 → 시정 지시 → 불이행 시 형사입건</blockquote>',
      },
      {
        title: '사업주가 못 준다면 체당금 제도와 소송을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">국가가 대신 지급하는 체당금 제도를 활용하세요</strong></p>\n<p>사업주에게 지급 능력이 없거나 폐업한 경우, <strong>체당금 제도</strong>(근로복지공단)를 활용하세요. 퇴직 전 <strong>3개월분 임금</strong>과 퇴직금, 휴업수당을 합산하여 최대 <strong>1,000만원</strong>까지 국가가 대신 지급합니다.</p>\n<p>체당금 외에도 <strong>소액소송</strong>(3,000만원 이하)이나 <strong>지급명령</strong>을 통해 법원의 판결을 받을 수 있습니다. 지급명령은 인지대가 소송의 10분의 1 수준이며, 확정 후 예금 압류 등 <strong>강제집행</strong>이 가능합니다. 퇴직금이 밀린 경우에도 동일한 절차로 함께 청구하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제: 체당금(최대 1,000만원) | 소액소송/지급명령 → 강제집행</blockquote>',
      },
    ],
    cases: [
      {
        title: '노동청 진정으로 밀린 급여와 지연이자를 전액 받은 사례',
        summary:
          '관련 사례에서도 퇴사 후 4개월간 급여를 받지 못한 근로자가 고용노동청에 진정하여, 근로감독관의 시정 지시 후 사업주가 밀린 급여 전액과 연 20% 지연이자까지 지급한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 지연이자(연 20%)도 가능한 한 함께 청구하고, 노동청 진정을 주저하지 마세요.',
      },
      {
        title: '폐업한 회사의 밀린 급여를 체당금으로 받은 사례',
        summary:
          '관련 사례에서도 사업주가 폐업하여 지급 능력이 없었으나, 근로복지공단 체당금 제도를 통해 퇴직 전 3개월분 임금과 퇴직금을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 사업주의 지급 능력이 없더라도 체당금 제도(근로복지공단 1588-0075)를 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사 후 임금 청구 시효는 얼마인가요?',
        answer: '임금채권의 소멸시효는 <strong>3년</strong>입니다. 퇴직일부터 기산됩니다.',
      },
      {
        question: '퇴직금도 같이 청구할 수 있나요?',
        answer: '네, 체불 <strong>퇴직금도 함께</strong> 노동청에 진정할 수 있습니다.',
      },
      {
        question: '4대보험 미가입인데도 신고가 되나요?',
        answer: '4대보험 가입 여부와 <strong>관계없이</strong> 근로관계가 존재하면 신고할 수 있습니다.',
      },
      {
        question: '아르바이트도 임금체불 신고가 가능한가요?',
        answer: '네, 아르바이트도 <strong>근로기준법 적용</strong> 대상입니다. 고용형태와 관계없이 신고할 수 있습니다.',
      },
      {
        question: '사장이 "네가 손해를 끼쳤으니 공제하겠다"고 하면?',
        answer: '손해배상과 임금은 <strong>별개</strong>입니다. 임금에서 일방적으로 공제하는 것은 위법 소지가 있습니다.',
      },
      {
        question: '체당금 신청은 어떻게 하나요?',
        answer: '<strong>근로복지공단</strong>(전화 1588-0075)에 신청하세요. 사업주의 도산 사실 확인이 필요합니다.',
      },
      {
        question: '온라인으로 노동청 진정을 접수하려면?',
        answer: '<strong>고용노동부 민원마당</strong>(minwon.moel.go.kr)에서 온라인 접수가 가능합니다.',
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
      { label: '퇴사 후 밀린 월급 받는 방법', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '최저임금 미달 급여 신고 방법과 차액 청구', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },
  {
    domain: 'wage',
    slug: 'minimum-wage-violation-complaint',
    keyword: '최저임금 미달 급여 신고 방법과 차액 청구',
    questionKeyword: '최저임금보다 적게 받고 있는데 어떻게 신고하나요?',
    ctaKeyword: '최저임금 위반 신고',
    type: '절차형',
    meta: {
      title: '최저임금 미달 신고·차액 청구 3단계 | 로앤가이드',
      description: '내 급여가 최저임금보다 적은 것 같다면? 위반 여부 확인법, 고용노동부 신고, 차액 청구 방법을 지금 확인하세요.',
    },
    intro: '급여명세서를 받아보니 시급으로 환산하면 최저임금에 미달하는 것 같습니다. 사장님에게 물어보니 "수습이니까 원래 그렇다"고 합니다. 정말 그런 건지, 최저임금보다 적게 받고 있다면 어떻게 해야 하는지 절차를 정리했습니다.',
    timelineSteps: ['최저임금 위반 확인', '증거 수집', '고용노동부 신고', '차액 청구·지급명령'],
    sections: [
      {
        title: '내 급여가 최저임금에 미달하는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">시급으로 환산하여 최저임금과 비교하세요</strong></p>\n<p><strong>2025년 최저임금은 시급 10,030원</strong>입니다(월급 기준 주 40시간 근무 시 약 <strong>2,096,270원</strong>). 월급제인 경우 월급을 월 소정근로시간(209시간)으로 나누어 시급을 계산합니다.</p>\n<p>최저임금 산입 범위에 포함되지 않는 항목이 있습니다. <strong>매월 지급되는 상여금의 일부</strong>와 <strong>복리후생비의 일부</strong>는 최저임금에 포함되지만, 연장·야간·휴일근로수당, 연차수당은 포함되지 않습니다. 고용노동부 <strong>최저임금 모의계산기</strong>(최저임금위원회 홈페이지)를 활용하면 쉽게 확인할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 2025년 최저시급 10,030원 | 월 209시간 기준 약 2,096,270원</blockquote>',
      },
      {
        title: '수습 기간이라도 최저임금의 90% 이상 지급해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">수습 감액은 제한적으로만 허용됩니다</strong></p>\n<p>1년 이상의 근로계약을 체결한 경우, 수습 기간(최초 <strong>3개월</strong>) 중에는 최저임금의 <strong>90%</strong>까지 감액이 가능합니다(최저임금법 제5조 제2항). 다만 단순노무업무(청소, 경비, 가사 등)는 수습 감액이 <strong>적용되지 않습니다</strong>.</p>\n<p>1년 미만의 근로계약이나, 수습 3개월이 지난 후에는 <strong>100% 최저임금</strong>을 지급해야 합니다. "수습이니까"라는 이유로 최저임금의 90% 미만을 지급하는 것은 위법입니다. 급여명세서와 근로계약서의 <strong>계약 기간</strong>을 가능한 한 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">수습 감액: 1년 이상 계약 + 최초 3개월만 + 90%까지만 | 단순노무는 감액 불가</blockquote>',
      },
      {
        title: '고용노동부에 최저임금 위반으로 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">재직 중에도 신고할 수 있고, 불이익은 법으로 금지됩니다</strong></p>\n<p>최저임금 위반이 확인되면 사업장 소재지 관할 <strong>고용노동청</strong>에 신고하세요. 방문, 우편, 온라인(<strong>고용노동부 민원마당</strong>)으로 접수 가능합니다. 재직 중에도 신고할 수 있으며, 신고를 이유로 한 불이익 처분은 <strong>근로기준법 제104조</strong>에 의해 금지됩니다.</p>\n<p>최저임금법 제28조에 따라 최저임금 위반 사업주는 <strong>3년 이하 징역 또는 2,000만원 이하 벌금</strong>에 처해집니다. 근로감독관이 사업장을 조사하여 위반 사실이 확인되면 시정 지시와 함께 <strong>차액 지급</strong>을 명합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 고용노동청 방문/우편/온라인 | 처벌: 3년 이하 징역 또는 2,000만원 이하 벌금</blockquote>',
      },
      {
        title: '차액을 청구하고 지급명령으로 확실하게 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">최저임금과의 차액은 소급하여 청구할 수 있습니다</strong></p>\n<p>최저임금 미달 기간 동안의 <strong>차액</strong>을 소급하여 청구할 수 있습니다. 예를 들어 시급 9,000원을 받았다면 최저시급 10,030원과의 차액 <strong>1,030원 × 근로시간</strong>을 월별로 계산하여 청구합니다. 임금채권의 소멸시효는 <strong>3년</strong>이므로 최대 3년치까지 소급 청구가 가능합니다.</p>\n<p>사업주가 차액 지급에 응하지 않으면 <strong>지급명령</strong>을 신청하세요. 지급명령은 인지대가 소송의 10분의 1 수준이며, 사업주가 2주 내 이의하지 않으면 확정판결과 동일한 효력이 생깁니다. 확정 후 <strong>예금 압류</strong> 등 강제집행으로 받아낼 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청구: 차액(최저임금 - 실지급액) × 근로시간 | 소멸시효 3년 | 지급명령 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '수습 감액을 부당하게 적용하여 최저임금 위반이 인정된 사례',
        summary:
          '관련 사례에서도 1년 미만의 근로계약을 체결한 근로자에게 수습 감액(90%)을 적용하여 급여를 지급한 사업주가, 고용노동부 조사 결과 최저임금법 위반으로 시정 지시를 받고 차액을 전액 지급한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 근로계약 기간이 1년 이상인지, 수습 3개월이 지났는지를 먼저 확인하세요.',
      },
      {
        title: '최저임금 차액을 3년치 소급 청구하여 받은 사례',
        summary:
          '관련 사례에서도 2년간 최저임금 미달 급여를 받아온 근로자가 노동청 진정과 지급명령을 통해 2년치 차액 전액과 지연이자를 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 급여명세서와 통장 내역으로 최저임금 미달 기간을 구체적으로 정리하세요.',
      },
    ],
    faq: [
      {
        question: '최저임금은 매년 바뀌나요?',
        answer: '네, 매년 <strong>1월 1일</strong>부터 새로운 최저임금이 적용됩니다. 최저임금위원회에서 결정합니다.',
      },
      {
        question: '포괄임금제여도 최저임금은 지켜야 하나요?',
        answer: '네, 포괄임금제라도 <strong>최저임금 이상</strong>을 지급해야 합니다. 포괄임금에 포함된 수당을 분리 계산하여 확인하세요.',
      },
      {
        question: '식대나 교통비도 최저임금에 포함되나요?',
        answer: '매월 지급되는 <strong>복리후생비의 일부</strong>는 포함될 수 있습니다. 구체적 산입 범위는 최저임금법 시행령을 확인하세요.',
      },
      {
        question: '재직 중에 신고하면 불이익을 받지 않나요?',
        answer: '신고를 이유로 한 불이익은 <strong>근로기준법 제104조</strong>에 의해 금지됩니다. 해고, 전보 등은 부당노동행위입니다.',
      },
      {
        question: '외국인 근로자도 최저임금이 적용되나요?',
        answer: '네, 국적과 관계없이 <strong>모든 근로자</strong>에게 최저임금이 적용됩니다.',
      },
      {
        question: '일용직이나 시간제도 최저임금 대상인가요?',
        answer: '네, <strong>고용형태와 관계없이</strong> 근로기준법상 근로자라면 최저임금이 적용됩니다.',
      },
      {
        question: '신고 후 처리 기간은 얼마나 걸리나요?',
        answer: '통상 <strong>1~3개월</strong> 정도 소요됩니다. 사안의 복잡성에 따라 달라질 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 급여가 최저임금에 미달하는지 확인해보세요',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '퇴사 후 밀린 월급 받는 법 총정리', href: '/guide/wage/unpaid-salary-after-quit-guide' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },
  {
    domain: 'wage',
    slug: 'unpaid-wage-report-procedure-timeline',
    keyword: '임금체불 신고 절차와 처리 기간',
    questionKeyword: '임금체불 신고는 어떻게 하고 처리까지 얼마나 걸리나요?',
    ctaKeyword: '임금체불 신고 절차',
    type: '절차타임라인형',
    meta: {
      title: '임금체불 신고 절차·처리 기간 4단계 안내 | 로앤가이드',
      description:
        '임금체불 신고하면 얼마나 걸릴까요? 고용노동부 진정부터 처리 기간 30~60일, 시정명령, 형사고소까지 바로 정리해보세요.',
    },
    intro:
      '3개월째 월급이 밀리고 있습니다. 사장은 "다음 달에 준다"는 말만 반복합니다. 더 이상 기다릴 수 없어 노동청에 신고하려고 하는데, 절차가 어떻게 되는지, 신고하면 얼마나 걸리는지 막막합니다. 임금체불 신고의 전체 흐름과 단계별 소요 기간을 정리했습니다.',
    timelineSteps: ['증거 확보', '고용노동부 진정', '조사·시정명령', '형사고소 검토'],
    sections: [
      {
        title: '1단계: 증거 확보 — 신고 전에 자료부터 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">증거 없이 신고하면 사업주가 부인해도 반박이 어렵습니다</strong></p>\n<p>근로기준법 제17조에 따라 사용자는 근로계약 체결 시 임금, 근로시간 등을 서면으로 명시해야 합니다. <strong>근로계약서, 급여명세서, 통장 입금 내역</strong>이 핵심 증거입니다. 계약서가 없으면 채용 문자·카카오톡 대화·이메일도 근로관계 증명 자료가 됩니다. 4대보험 가입 내역은 국민연금공단이나 건강보험공단 홈페이지에서 조회할 수 있으며, 이것만으로도 고용 사실을 입증할 수 있습니다.</p>\n<p>체불 금액은 <strong>월별·항목별</strong>(기본급, 연장·야간·휴일근로수당, 퇴직금, 연차수당)로 구분하여 엑셀이나 표로 정리해두세요. 금액이 구체적일수록 근로감독관이 조사하기 쉽고, 처리 속도도 빨라집니다. 출퇴근 기록(지문인식·카드 태그 기록), 근무 일지, 동료의 확인 진술서도 보조 증거로 매우 유용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 확보: 근로계약서, 급여명세서, 통장 입금 내역, 4대보험 가입 확인서, 체불 금액 정리표</blockquote>',
      },
      {
        title: '2단계: 고용노동부 진정 — 온라인·방문 모두 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부에 진정(신고)을 접수하면 근로감독관이 배정됩니다</strong></p>\n<p>근로기준법 제104조에 따라 근로자는 근로조건 위반 사실을 고용노동부에 신고할 수 있습니다. 접수 방법은 세 가지입니다. ① <strong>고용노동부 민원마당</strong>(minwon.moel.go.kr)에서 온라인 접수, ② 관할 지방고용노동관서에 직접 방문하여 진정서를 작성·제출, ③ 우편 접수입니다. 온라인 접수가 가장 빠르고 편리하며, 24시간 접수가 가능합니다.</p>\n<p>진정서에는 사업장 이름, 대표자명, 사업장 주소, 체불 기간과 체불 금액, 본인의 인적사항(이름, 연락처, 주소)을 기재합니다. 증거 자료(근로계약서 사본, 통장 내역, 체불 금액 정리표 등)를 함께 첨부하면 됩니다. 접수 후 보통 <strong>7~14일 이내</strong>에 담당 근로감독관이 배정되고 전화 또는 문자로 연락이 옵니다. 진정과 고소는 다릅니다 — 진정은 행정 조사를 요청하는 것이고, 고소는 형사처벌을 구하는 것입니다. 처음에는 진정으로 접수하는 것이 일반적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수 경로: 고용노동부 민원마당(온라인, 24시간) / 관할 노동관서(방문) / 우편. 처음에는 진정으로 접수</blockquote>',
      },
      {
        title: '3단계: 조사·시정명령 — 처리 기간은 보통 30~60일입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관이 사업주를 조사하고 시정을 명령합니다</strong></p>\n<p>배정된 근로감독관은 사업주에게 출석을 요구하거나 사업장을 방문하여 <strong>임금 지급 대장, 근로계약서, 출근부</strong> 등을 확인합니다. 사업주와 근로자 양측의 진술을 듣고 체불 사실을 확인합니다. 이 조사 과정이 통상 <strong>30~60일</strong> 소요됩니다. 사안이 복잡하거나 사업주가 비협조적이면 90일까지 늘어나기도 합니다.</p>\n<p>체불이 확인되면 근로감독관은 사업주에게 <strong>시정명령</strong>(시정기한 내 체불 임금 지급)을 내립니다. 근로기준법 제36조에 따르면 사용자는 퇴직일로부터 14일 이내에 임금을 지급해야 하고, 이를 위반하면 3년 이하의 징역 또는 3천만 원 이하의 벌금에 처해질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처리 기간: 접수 후 30~60일(복잡한 사안은 90일). 시정명령 불이행 시 형사처벌 가능</blockquote>',
      },
      {
        title: '4단계: 형사고소 검토 — 시정명령에도 안 주면 처벌을 구합니다',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 시정명령을 이행하지 않으면 형사고소로 전환됩니다</strong></p>\n<p>시정명령을 받고도 기한 내에 임금을 지급하지 않으면, 근로감독관이 <strong>사법처리(검찰 송치)</strong>를 진행합니다. 근로자가 직접 경찰서에 형사고소를 할 수도 있습니다. 임금체불은 근로기준법 제109조에 따라 <strong>반의사불벌죄</strong>로, 근로자가 처벌을 원하지 않는다는 의사를 표시하면 공소를 제기할 수 없습니다.</p>\n<p>실무적으로 사업주는 형사처벌이 임박하면 합의를 시도하는 경우가 많습니다. 이 시점에서 <strong>체불 원금 + 지연이자(연 20%)</strong>를 포함하여 협상하세요. 근로기준법 제37조에 따라 임금채권은 다른 채권보다 우선 변제됩니다. 체불임금에 대한 지연이자는 근로기준법 제37조의2에 근거합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 시정명령 불이행 → 형사고소(반의사불벌죄). 합의 시 지연이자(연 20%)까지 포함</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2010다5765 — 퇴직 후 14일 초과 임금 미지급 사건',
        summary:
          '근로자가 퇴직한 뒤 14일이 지나도록 임금을 지급하지 않은 사업주에 대해, 법원은 근로기준법 제36조 위반을 인정하고 벌금형을 선고했습니다. 사업주는 자금 사정이 어렵다고 항변했으나, 법원은 경영난이 임금 미지급의 정당한 사유가 되지 않는다고 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 퇴직 후 14일이 지난 시점에서 바로 신고하세요. 사업주의 경영난 주장은 면책 사유가 되지 않습니다.',
      },
      {
        title: '대법원 2007도9834 — 반의사불벌죄와 합의의 효력',
        summary:
          '임금체불로 형사고소된 사업주가 근로자와 합의 후 처벌불원의사를 받아 공소기각 판결을 받은 사례입니다. 법원은 근로자의 처벌불원 의사표시가 있으면 공소를 제기할 수 없다고 확인했습니다.',
        takeaway:
          '비슷한 상황이라면 형사고소 전 합의를 시도하되, 합의금에 지연이자까지 포함하여 산정하세요. 처벌불원서는 임금 전액을 받은 후에 작성하세요.',
      },
    ],
    faq: [
      {
        question: '임금체불 신고는 어디에 하나요?',
        answer:
          '<strong>고용노동부 민원마당</strong>(minwon.moel.go.kr)에서 온라인으로 접수하거나, 관할 지방고용노동관서에 직접 방문하여 진정서를 제출합니다.',
      },
      {
        question: '신고 후 처리 기간은 얼마나 걸리나요?',
        answer:
          '통상 <strong>30~60일</strong> 정도 소요됩니다. 사안이 복잡하거나 사업주가 비협조적이면 90일까지 늘어날 수 있습니다. 담당 근로감독관에게 정기적으로 진행 상황을 문의하면 처리가 빨라지는 경우도 있습니다.',
      },
      {
        question: '재직 중에도 신고할 수 있나요?',
        answer:
          '네, 재직 중에도 신고 가능합니다. 근로기준법 제104조 제2항에 따라 사용자는 신고를 이유로 근로자에게 <strong>불이익 처분을 할 수 없습니다</strong>.',
      },
      {
        question: '시정명령이 나오면 바로 돈을 받나요?',
        answer:
          '시정명령에는 이행 기한(보통 2주~1개월)이 정해집니다. 사업주가 기한 내에 지급하지 않으면 근로감독관이 <strong>사법처리(검찰 송치)</strong>를 진행하게 됩니다.',
      },
      {
        question: '체불 임금에 이자도 받을 수 있나요?',
        answer:
          '퇴직일로부터 14일이 지난 미지급 임금에 대해 <strong>연 20%의 지연이자</strong>가 발생합니다(근로기준법 제37조의2).',
      },
      {
        question: '사업주가 돈이 없다고 하면 어떻게 하나요?',
        answer:
          '사업주의 부동산·예금 등 재산에 대해 <strong>가압류</strong>를 신청하여 재산 처분을 막을 수 있습니다. 사업주가 도산(부도·폐업)한 경우에는 근로복지공단에 <strong>체불임금 대지급금</strong>을 신청하면 최대 1,000만 원까지 국가가 대신 지급해줍니다.',
      },
      {
        question: '임금체불 신고에 시효가 있나요?',
        answer:
          '임금채권의 소멸시효는 <strong>3년</strong>입니다(근로기준법 제49조). 3년이 지나면 청구가 어려우므로 빠른 신고가 중요합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 고객상담센터(1350)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '체불 임금 신고 절차와 예상 기간을 확인해보세요',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '퇴사 후 밀린 월급 받는 법', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
    ],
  },
  {
    domain: 'wage',
    slug: 'unpaid-wage-employer-response',
    keyword: '임금체불 신고당한 사업주가 저지르는 실수',
    questionKeyword: '직원이 임금체불로 신고했는데 사업주로서 어떤 실수를 피해야 하나요?',
    ctaKeyword: '임금체불 사업주 대응',
    type: '실수함정형',
    meta: {
      title: '임금체불 신고당한 사업주 실수 5가지 | 로앤가이드',
      description:
        '임금체불로 신고당했다면 이 실수부터 피하세요. 근로감독관 조사 대응, 합의 방법, 지연이자 20% 처리법을 지금 확인하세요.',
    },
    intro:
      '자금 사정이 어려워 월급을 2개월 밀렸는데, 퇴사한 직원이 노동청에 진정을 넣었다는 통보가 왔습니다. 혐의를 받고 있다면, 감정적으로 대응하거나 절차를 무시하는 것이 가장 위험합니다. 사업주가 흔히 저지르는 실수와 올바른 대응법을 정리했습니다.',
    sections: [
      {
        title: '실수 1·2: 체불 사실 부인과 근로감독관 조사 무시',
        content:
          '<p><strong style="color:#1e3a5f">체불 사실을 무작정 부인하거나 근로감독관 출석을 무시하면 상황이 악화됩니다</strong></p>\n<p>첫 번째 실수는 <strong>"월급을 준 적 있다"며 체불 사실 자체를 부인</strong>하는 것입니다. 근로감독관은 계좌 이체 내역, 급여대장 등 객관적 자료로 확인하므로 거짓 진술은 신뢰를 잃게 만듭니다. 일부만 지급했다면 그 금액을 인정하고 나머지 체불분에 대해 성실히 소명하세요.</p>\n<p>두 번째 실수는 <strong>근로감독관의 출석 요구를 무시</strong>하는 것입니다. 출석에 응하지 않으면 <strong>과태료 부과</strong>는 물론, 사업주에게 불리한 판단이 내려질 수 있습니다. 지정된 날짜에 출석이 어려우면 가능한 한 <strong>사전에 일정 변경을 요청</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 체불 부인 → 신뢰 상실 | 출석 무시 → 과태료 + 불리한 판단 | 성실한 소명이 핵심</blockquote>',
      },
      {
        title: '실수 3·4: 합의서 부실 작성과 지연이자 미지급',
        content:
          '<p><strong style="color:#1e3a5f">합의서 한 줄이 잘못되면 분쟁이 재발하고, 지연이자를 빠뜨리면 추가 청구를 받습니다</strong></p>\n<p>세 번째 실수는 <strong>합의서를 대충 작성</strong>하는 것입니다. 합의서에는 ①<strong>체불 금액의 구체적 내역</strong>(기본급·수당·퇴직금 구분), ②<strong>지급 일정</strong>, ③<strong>"이 외 추가 청구를 하지 않는다"는 부제소 합의 문구</strong>가 가능한 한 포함되어야 합니다. 구두 합의만으로는 나중에 분쟁이 재발할 수 있습니다.</p>\n<p>네 번째 실수는 <strong>지연이자를 지급하지 않는 것</strong>입니다. 근로기준법 제37조에 따라 퇴직일로부터 14일 이내에 임금을 지급하지 않으면 <strong>연 20%의 지연이자</strong>가 발생합니다. 원금만 지급하면 근로자가 지연이자를 별도로 청구할 수 있으므로, 합의 시 지연이자까지 포함하여 정산하세요.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">임금체불로 혐의를 받고 있다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/wage" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서 필수: 체불 내역 · 지급 일정 · 부제소 합의 | 지연이자: 연 20%(근로기준법 제37조)</blockquote>',
      },
      {
        title: '실수 5: 신고한 직원에 대한 보복 조치',
        content:
          '<p><strong style="color:#1e3a5f">신고 직원에게 불이익을 주면 별도의 형사처벌을 받을 수 있습니다</strong></p>\n<p>다섯 번째이자 가장 심각한 실수는 신고한 직원(또는 재직 중인 직원)에게 <strong>해고, 감봉, 배치전환 등 보복 조치</strong>를 취하는 것입니다. 근로기준법 제104조 제2항은 신고를 이유로 한 불이익 처분을 금지하고 있으며, 위반 시 <strong>2년 이하 징역 또는 2,000만 원 이하 벌금</strong>에 처해집니다.</p>\n<p>신고 직원이 아직 재직 중이라면 <strong>기존 근로 조건을 그대로 유지</strong>하세요. SNS나 사내 메신저에서 직원을 비난하는 것도 증거가 되어 불리하게 작용할 수 있습니다. 감정을 절제하고 절차에 따라 대응하는 것이 최선입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보복 금지: 근로기준법 제104조 | 위반 시 2년 이하 징역/2,000만 원 이하 벌금 | 근로 조건 현행 유지</blockquote>',
      },
      {
        title: '형사처벌을 피하려면 빠른 지급이 최선입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관 시정 기한 내에 체불 임금을 지급하면 처벌을 면할 수 있습니다</strong></p>\n<p>임금체불은 <strong>근로기준법 제109조</strong>에 따라 <strong>3년 이하 징역 또는 3,000만 원 이하 벌금</strong>에 해당하는 범죄입니다. 그러나 근로감독관이 지정한 <strong>시정 기한(통상 14일) 내에 전액 지급</strong>하면 형사 입건을 피할 수 있습니다.</p>\n<p>일시에 전액 지급이 어려운 경우, 근로자와 <strong>분할 지급 합의서</strong>를 작성하고 이를 근로감독관에게 제출하면 시정 기한을 연장받을 수 있습니다. 합의서에는 <strong>분할 금액, 지급 일자, 미이행 시 조건</strong>을 명시하세요. 성실한 태도가 근로감독관의 판단에 큰 영향을 미칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 3년 이하 징역/3,000만 원 이하 벌금 | 시정 기한 내 지급 시 형사 입건 회피 | 분할 합의 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '시정 기한 내 전액 지급으로 불기소 처분을 받은 사례',
        summary:
          '3개월분 임금을 체불한 사업주가 근로감독관의 시정 지시 후 14일 이내에 지연이자를 포함한 전액을 지급했습니다. 근로자와 합의서를 작성하여 제출한 결과 검찰이 기소유예(불기소) 처분을 내렸습니다.',
        takeaway:
          '체불 사실이 확인되면 시정 기한 내 전액 지급과 합의서 작성을 동시에 진행하는 것이 가장 효과적인 방어입니다.',
      },
      {
        title: '보복 해고로 추가 형사처벌을 받은 사례',
        summary:
          '임금체불을 신고한 재직 직원을 해고한 사업주가 근로기준법 제104조 위반으로 추가 기소되어 벌금 1,500만 원이 선고되었습니다. 체불 건 자체보다 보복 행위에 대한 처벌이 더 무거웠습니다.',
        takeaway:
          '신고 직원에 대한 감정적 대응은 절대 금물입니다. 보복 조치는 별도 범죄로 가중 처벌의 원인이 됩니다.',
      },
    ],
    faq: [
      {
        question: '임금체불로 신고당하면 바로 구속되나요?',
        answer: '임금체불만으로 바로 구속되는 경우는 드뭅니다. 다만 <strong>상습 체불</strong>이거나 근로감독관 시정 지시를 무시하면 형사 입건되어 <strong>3년 이하 징역</strong>에 처해질 수 있습니다.',
      },
      {
        question: '근로감독관 조사에 꼭 출석해야 하나요?',
        answer: '네, 출석 요구에 응하지 않으면 <strong>과태료</strong>가 부과되고 사업주에게 불리한 판단이 내려질 수 있습니다. 일정 변경이 필요하면 사전에 요청하세요.',
      },
      {
        question: '지연이자 20%는 어떻게 계산하나요?',
        answer: '퇴직일 이후 14일이 지난 시점부터 <strong>미지급 임금에 대해 연 20%</strong>를 일할 계산합니다. 예를 들어 300만 원을 30일 지연하면 약 <strong>49,315원</strong>의 지연이자가 발생합니다.',
      },
      {
        question: '합의서만 쓰면 형사처벌을 피할 수 있나요?',
        answer: '합의서 작성만으로는 부족합니다. <strong>실제로 체불 임금을 지급</strong>하고 합의서를 근로감독관에게 제출해야 불기소 처분을 기대할 수 있습니다.',
      },
      {
        question: '직원이 퇴직금까지 같이 청구하면 어떻게 하나요?',
        answer: '퇴직금도 <strong>퇴직일로부터 14일 이내</strong>에 지급해야 합니다. 미지급 시 임금체불과 동일하게 지연이자 20%가 적용됩니다.',
      },
      {
        question: '자금이 없어서 한꺼번에 못 주면 어떻게 하나요?',
        answer: '근로자와 <strong>분할 지급 합의서</strong>를 작성하고 근로감독관에게 제출하면 시정 기한을 연장받을 수 있습니다. 합의서에 분할 금액과 일자를 명시하세요.',
      },
      {
        question: '신고한 직원을 해고해도 되나요?',
        answer: '절대 안 됩니다. 신고를 이유로 한 불이익 처분은 <strong>근로기준법 제104조 위반</strong>으로 2년 이하 징역 또는 2,000만 원 이하 벌금에 처해집니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 <strong>고용노동부 고객상담센터</strong>(1350)에서 사업주도 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 임금체불 사업주 대응 준비사항 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '임금체불 신고 절차와 기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 신고 전 준비 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
    ],
  },
  {
    domain: 'wage',
    slug: 'wage-overtime-unpaid-claim',
    keyword: '야근 수당 안 받았을 때 청구하는 법',
    questionKeyword: '야근을 했는데 수당을 안 주는데 청구할 수 있나요?',
    ctaKeyword: '야근 수당 청구',
    type: '상황형',
    meta: {
      title: '야근수당 안 주는 회사 신고 방법 3단계 | 로앤가이드',
      description:
        '야근수당 안 주는 회사, 노동청 신고로 받아낼 수 있습니다. 연장근로 50% 가산수당 계산법부터 진정 절차까지 지금 확인하세요.',
    },
    intro:
      '매일 밤 10시까지 야근하는데 월급은 기본급뿐입니다. 회사는 "포괄임금제라 수당 없다"고 합니다. 정말 수당을 받을 수 없는 걸까요. 근로기준법은 연장근로에 대해 통상임금의 50% 이상을 가산하여 지급하도록 규정하고 있습니다. 포괄임금제라도 실제 근로시간이 약정을 초과하면 차액을 청구할 수 있습니다.',
    timelineSteps: ['근로시간 확인', '증거 확보', '회사에 청구', '노동청 진정'],
    sections: [
      {
        title: '연장근로 가산수당 50% — 법이 보장하는 권리입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제56조에 따라 연장근로에는 통상임금의 50%를 가산하여 지급해야 합니다</strong></p>\n<p><strong>근로기준법 제56조 제1항</strong>은 연장근로(1주 40시간, 1일 8시간 초과 근로)에 대해 <strong>통상임금의 50% 이상</strong>을 가산하여 지급하도록 규정합니다. 야간근로(오후 10시~오전 6시)는 별도로 50%가 추가 가산됩니다.</p>\n<p>예를 들어 통상시급이 15,000원인 근로자가 하루 2시간 연장근로를 하면 <strong>15,000 × 1.5 × 2 = 45,000원</strong>을 받아야 합니다. 야간까지 포함되면 <strong>15,000 × 2.0 × 해당 시간</strong>으로 계산됩니다. 이 수당을 지급하지 않는 것은 임금체불에 해당할 소지가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 연장근로 50% 가산 + 야간근로 50% 추가 가산 | 미지급 시 임금체불</blockquote>',
      },
      {
        title: '포괄임금제라도 실제 근로시간이 초과하면 차액을 받을 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금제는 실제 연장근로시간이 약정 시간을 넘으면 무효입니다</strong></p>\n<p><strong>포괄임금제</strong>란 기본급에 연장·야간·휴일수당을 포함하여 일정 금액을 지급하는 방식입니다. 그러나 대법원은 포괄임금 약정이 근로자에게 불이익하거나, <strong>실제 연장근로시간이 약정 시간을 초과</strong>하면 그 차액을 별도로 지급해야 한다고 판시하고 있습니다.</p>\n<p>예를 들어 포괄임금에 월 20시간 연장근로 수당이 포함되어 있는데 실제로 월 40시간 야근했다면, <strong>초과 20시간분의 가산수당</strong>을 청구할 수 있습니다. 근로계약서에 포괄임금 약정 내용이 명시되어 있는지, 약정 시간이 몇 시간인지를 가능한 한 확인하세요.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">야근 수당을 제대로 받고 있는지 확신이 없다면, 지금 상황에 맞는 청구 가능 금액을 <a href="/diagnosis/wage" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">포괄임금제: 실제 근로시간 > 약정 시간 → 차액 청구 가능 | 근로계약서 약정 확인 필수</blockquote>',
      },
      {
        title: '출퇴근 기록과 메신저 대화 — 증거 확보가 승패를 가릅니다',
        content:
          '<p><strong style="color:#1e3a5f">실제 근로시간을 증명할 증거가 없으면 청구가 어렵습니다</strong></p>\n<p>야근 수당 청구의 핵심은 <strong>"실제로 몇 시간 일했는가"</strong>를 증명하는 것입니다. 가장 강력한 증거는 ①<strong>전자 출퇴근 기록</strong>(지문인식, 카드 태그, 사내 시스템 로그), ②<strong>카카오톡·이메일</strong>(업무 지시 시간, 보고 시간이 찍힌 메시지), ③<strong>PC 접속 로그</strong>(회사 서버 접속 기록)입니다.</p>\n<p>회사가 출퇴근 기록을 관리하지 않는 경우에는 <strong>본인이 직접 근무 일지</strong>를 매일 기록해두세요. 날짜, 출근 시간, 퇴근 시간, 업무 내용을 적으면 됩니다. 동료의 확인 진술서도 보조 증거로 활용 가능합니다. 증거는 재직 중에 확보해두는 것이 중요합니다 — 퇴사 후에는 접근이 어려워집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 출퇴근 기록, 카카오톡·이메일, PC 로그, 본인 근무 일지, 동료 진술서</blockquote>',
      },
      {
        title: '회사에 서면 청구 후 노동청 진정으로 받아내세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명으로 청구한 뒤 불이행 시 노동청에 진정하세요</strong></p>\n<p>먼저 회사에 <strong>내용증명</strong>으로 미지급 연장근로수당을 청구하세요. "○년 ○월~○월, 연장근로 ○시간, 미지급 수당 ○○만원을 ○일까지 지급 바랍니다"라고 구체적으로 작성합니다. 근로기준법 제109조(임금체불 시 3년 이하 징역/3,000만원 이하 벌금)를 언급하면 자발적 지급을 유도할 수 있습니다.</p>\n<p>회사가 지급하지 않으면 사업장 소재지 관할 <strong>고용노동청</strong>에 진정을 접수하세요. 온라인(고용노동부 민원마당), 방문, 우편 모두 가능합니다. 근로감독관이 사업장을 조사하여 체불이 확인되면 <strong>시정명령</strong>이 내려지고, 불이행 시 형사입건됩니다. 임금채권의 소멸시효는 <strong>3년</strong>이므로 빠른 청구가 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 내용증명 발송 → 노동청 진정 → 시정명령 → 불이행 시 형사입건 | 소멸시효 3년</blockquote>',
      },
    ],
    cases: [
      {
        title: '포괄임금제 초과 근로시간에 대해 수당을 인정받은 사례',
        summary:
          '관련 사례에서도 포괄임금제로 월 20시간 연장근로 수당이 포함된 계약이었으나, 실제 월 50시간 이상 야근한 것이 출퇴근 기록과 이메일로 입증되어 초과분 30시간의 가산수당을 전액 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 포괄임금제라 하더라도 실제 근로시간이 약정을 초과하면 차액을 청구할 수 있으므로, 출퇴근 기록을 가능한 한 확보하세요.',
      },
      {
        title: '카카오톡 업무 지시 내역으로 야근 수당을 받은 사례',
        summary:
          '관련 사례에서도 회사에 공식 출퇴근 기록이 없었으나, 상사의 카카오톡 업무 지시 메시지(밤 9~10시)와 본인의 업무 보고 메시지가 근로시간 증거로 인정되어 야근 수당을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 업무 관련 메신저 대화, 이메일 발송 시간 등을 캡처하여 보관해두세요.',
      },
    ],
    faq: [
      {
        question: '포괄임금제면 야근 수당을 못 받나요?',
        answer:
          '아닙니다. 포괄임금 약정에 포함된 <strong>연장근로 시간을 초과</strong>하면 차액을 청구할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장도 연장근로 수당을 받을 수 있나요?',
        answer:
          '5인 미만 사업장에는 근로기준법 제56조가 <strong>적용되지 않습니다</strong>. 다만 근로계약서에 별도 약정이 있으면 청구 가능합니다.',
      },
      {
        question: '야근 수당은 통상임금 기준인가요, 기본급 기준인가요?',
        answer:
          '<strong>통상임금</strong> 기준입니다. 기본급뿐 아니라 정기적·일률적으로 지급되는 수당도 통상임금에 포함됩니다.',
      },
      {
        question: '주 52시간제를 넘으면 수당을 더 받나요?',
        answer:
          '주 52시간을 초과하는 근로 자체가 <strong>위법</strong>이며, 초과 근로에 대한 가산수당도 지급해야 합니다.',
      },
      {
        question: '야근 수당 청구에 시효가 있나요?',
        answer:
          '임금채권 소멸시효는 <strong>3년</strong>입니다. 3년 이내의 미지급 수당을 소급 청구할 수 있습니다.',
      },
      {
        question: '재직 중에도 야근 수당을 청구할 수 있나요?',
        answer:
          '네, <strong>재직 중에도</strong> 청구 가능합니다. 신고를 이유로 한 불이익은 법으로 금지됩니다.',
      },
      {
        question: '회사가 출퇴근 기록을 안 남기면 어떻게 하나요?',
        answer:
          '<strong>카카오톡, 이메일, PC 로그, 본인 근무 일지</strong> 등으로 대체 증명할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 고용노동부 상담센터(1350)를 활용해보세요.',
      },
    ],
    cta: {
      text: '1분 안에 야근 수당 청구 준비사항 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '포괄임금제 2026 가이드라인 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '야간수당 미지급 청구', href: '/guide/wage/wage-night-shift-premium-claim' },
      { label: '임금체불 신고 절차와 처리 기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },
];
