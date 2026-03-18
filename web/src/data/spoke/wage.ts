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
  {
    domain: 'wage',
    slug: 'unpaid-salary-after-quit-guide',
    keyword: '퇴사 후 밀린 월급 받는 법 총정리',
    questionKeyword: '퇴사했는데 밀린 월급을 어떻게 받을 수 있나요?',
    ctaKeyword: '퇴사 후 밀린 월급 받기',
    type: '절차형',
    meta: {
      title: '퇴사 후 밀린 월급 받는 법 총정리 | 로앤가이드',
      description: '퇴사 후 밀린 월급을 받기 위한 증거 수집, 내용증명, 고용노동부 진정, 체당금 제도까지 총정리했습니다.',
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
          '<p><strong style="color:#1e3a5f">노동청 진정이 가장 효과적인 방법입니다</strong></p>\n<p>내용증명 후에도 지급하지 않으면 사업장 소재지 관할 <strong>고용노동청</strong>에 진정을 접수하세요. 방문, 우편, 온라인(<strong>고용노동부 민원마당</strong> minwon.moel.go.kr) 모두 가능합니다.</p>\n<p>진정 접수 후 <strong>근로감독관</strong>이 사업주를 출석시켜 조사합니다. 체불 사실이 확인되면 시정 지시가 나옵니다. 시정 지시에도 불이행하면 <strong>형사입건</strong>됩니다. 근로기준법 제109조에 따라 임금체불은 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 고용노동청 방문/우편/온라인 → 근로감독관 조사 → 시정 지시 → 불이행 시 형사입건</blockquote>',
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
          '비슷한 상황이라면 지연이자(연 20%)도 반드시 함께 청구하고, 노동청 진정을 주저하지 마세요.',
      },
      {
        title: '폐업한 회사의 밀린 급여를 체당금으로 받은 사례',
        summary:
          '관련 사례에서도 사업주가 폐업하여 지급 능력이 없었으나, 근로복지공단 체당금 제도를 통해 퇴직 전 3개월분 임금과 퇴직금을 지급받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 사업주의 지급 능력이 없더라도 체당금 제도(근로복지공단 1588-0075)를 반드시 확인하세요.',
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
        answer: '손해배상과 임금은 <strong>별개</strong>입니다. 임금에서 일방적으로 공제하는 것은 위법합니다.',
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
      title: '최저임금 미달 급여 신고 방법과 차액 청구 | 로앤가이드',
      description: '최저임금 위반 여부 확인법, 고용노동부 신고 절차, 차액 청구 방법을 단계별로 정리했습니다.',
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
          '<p><strong style="color:#1e3a5f">수습 감액은 제한적으로만 허용됩니다</strong></p>\n<p>1년 이상의 근로계약을 체결한 경우, 수습 기간(최초 <strong>3개월</strong>) 중에는 최저임금의 <strong>90%</strong>까지 감액이 가능합니다(최저임금법 제5조 제2항). 다만 단순노무업무(청소, 경비, 가사 등)는 수습 감액이 <strong>적용되지 않습니다</strong>.</p>\n<p>1년 미만의 근로계약이나, 수습 3개월이 지난 후에는 <strong>100% 최저임금</strong>을 지급해야 합니다. "수습이니까"라는 이유로 최저임금의 90% 미만을 지급하는 것은 위법입니다. 급여명세서와 근로계약서의 <strong>계약 기간</strong>을 반드시 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">수습 감액: 1년 이상 계약 + 최초 3개월만 + 90%까지만 | 단순노무는 감액 불가</blockquote>',
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
];
