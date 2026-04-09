import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [최저임금이 제대로 지급됐는지 의심하는 근로자]의 [주휴수당이 최저임금 계산에 포함되는지 모르는 상황]에서 [주휴수당·최저임금 포함 여부 쟁점 파악과 대응 방법]을 돕는 페이지다.
// 16. 이 페이지는 [프리랜서 계약으로 일했지만 임금을 못 받은 사람]의 [자신이 근로자인지 몰라 신고를 못 하는 상황]에서 [프리랜서 근로자성 인정 요건과 임금체불 청구 절차]를 돕는 페이지다.
// 17. 이 페이지는 [회사가 취업규칙을 바꿔 임금이 줄어든 근로자]의 [불이익 변경이 합법인지 아닌지 판단이 어려운 상황]에서 [취업규칙 불리변경 시 개별 계약 우선 원칙과 구제 방법]을 돕는 페이지다.
// 18. 이 페이지는 [사업주가 폐업하거나 파산한 상황에서 밀린 임금을 받으려는 근로자]의 [폐업 후에도 임금을 받을 수 있는 방법을 모르는 상황]에서 [재단채권 청구 절차와 체당금 제도 안내]를 돕는 페이지다.
// 19. 이 페이지는 [포괄임금제 계약서에 서명했지만 초과근무수당을 못 받은 근로자]의 [포괄임금 약정이 유효한지 무효인지 판단 못 하는 상황]에서 [포괄임금제 무효 요건과 미지급 수당 청구 방법]을 돕는 페이지다.

export const spokesBatch26_15to19: SpokePage[] = [
  // ───────────────────────────────────────────
  // 15. wage / wage-minimum-weekly-holiday-included
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-minimum-weekly-holiday-included',
    keyword: '주휴수당 최저임금 포함 여부',
    questionKeyword: '주휴수당이 최저임금에 포함되나요, 별도로 받아야 하나요?',
    ctaKeyword: '주휴수당 최저임금 위반 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '주휴수당 최저임금 포함 여부 3가지 핵심 쟁점 | 로앤가이드',
      description:
        '월급에 주휴수당이 포함됐다는 회사 말이 맞는 건지, 최저임금 계산에서 어떻게 따져야 하는지 헷갈린다면 지금 확인하세요.',
    },
    intro:
      '<p>월급을 받고 나서 최저임금을 따져보니 뭔가 이상합니다. 회사는 "주휴수당이 월급에 포함돼 있다"고 하는데, 주휴수당이 최저임금 계산에서 어떤 역할을 하는지 도무지 모르겠습니다. 최저임금과 주휴수당은 법적으로 별개이며, 회사가 잘못 계산하면 실질적인 임금체불이 됩니다. 대법원 2021다246545 판결(2024.07.25 선고)이 이 쟁점을 정면으로 다뤘습니다. 지금 바로 핵심 쟁점 3가지를 정리해보세요.</p>',
    sections: [
      {
        title: '주휴수당은 최저임금 지급 대상인가 — 핵심 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 주휴수당도 사용자가 최저임금액 이상으로 지급해야 할 임금에 해당한다고 판시했습니다.</strong></p>\n<p>최저임금법 제6조 제1항은 "사용자는 최저임금의 적용을 받는 근로자에게 최저임금액 이상의 임금을 지급하여야 한다"고 정합니다. 대법원 2021다246545 사건(대법원, 2024.07.25 선고)에서 법원은 구 근로기준법 제55조에 따라 부여되는 유급휴일에 대한 임금(주휴수당)이 사용자가 최저임금액 이상으로 지급하여야 할 임금에 해당한다고 판시했습니다. 즉, 주휴수당 자체도 최저임금법의 보호 대상이므로, 주휴수당을 아예 지급하지 않거나 최저임금 미만으로 지급하면 위반이 됩니다.</p>\n<ul>\n<li><strong>핵심 1</strong> — 주휴수당은 소정근로시간에 대한 임금이 아니라 유급휴일에 대한 임금이지만, 최저임금 보호 대상에서 제외되지 않습니다</li>\n<li><strong>핵심 2</strong> — 일반택시 등 특례 업종에서 최저임금 산입 임금 범위를 정하는 시행령 규정도, 주휴수당이 최저임금 지급 의무 자체를 면제하지는 않습니다</li>\n<li><strong>핵심 3</strong> — 회사가 "주휴수당 포함"이라고 주장하더라도 실제 지급액이 법정 최저임금에 미달하면 체불이 성립합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주휴수당 지급 여부와 금액이 최저임금 이상인지 반드시 확인하세요.</blockquote>',
      },
      {
        title: '내 임금이 최저임금 이상인지 직접 계산하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">주휴수당 포함 여부를 따질 때는 비교대상 임금과 소정근로시간 기준을 정확히 알아야 합니다.</strong></p>\n<p>2026년 최저임금은 시간급 10,030원입니다. 주 40시간 근무 기준 월 소정근로시간은 209시간(주 소정 40시간 + 주휴 8시간 × 4.345주)입니다. 최저임금법상 비교대상 임금에서 제외되는 항목은 연장·야간·휴일 가산수당, 1개월 초과 주기로 지급되는 상여금, 통화 이외 현물 지급분 등입니다.</p>\n<ol>\n<li>급여명세서에서 기본급과 주휴수당 항목을 확인합니다</li>\n<li>월 수령액에서 제외 항목(식대, 연장수당 등)을 뺀 비교대상 임금을 계산합니다</li>\n<li>비교대상 임금 ÷ 209시간으로 시간급을 산출합니다</li>\n<li>산출한 시간급이 10,030원 이상인지 비교합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 주휴수당·최저임금 위반 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '최저임금 위반 또는 주휴수당 미지급 시 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">최저임금 위반과 주휴수당 미지급은 임금체불과 동일하게 처리됩니다.</strong></p>\n<p>근로기준법 제109조에 따라 임금체불은 3년 이하 징역 또는 3,000만 원 이하 벌금입니다. 최저임금법 제28조는 최저임금 위반 시 3년 이하 징역 또는 2,000만 원 이하 벌금을 규정합니다.</p>\n<ul>\n<li><strong>1단계</strong> — 급여명세서·통장 내역으로 주휴수당 지급 여부와 금액을 확인하고, 체불 금액을 계산합니다</li>\n<li><strong>2단계</strong> — 사업주에게 서면(내용증명·이메일)으로 미지급 임금 지급을 요청합니다</li>\n<li><strong>3단계</strong> — 사업장 관할 고용노동청에 임금체불 진정을 접수합니다(온라인: 고용노동부 민원마당)</li>\n<li><strong>4단계</strong> — 사업주가 지급하지 않으면 형사처벌과 함께 지급명령·민사소송으로 청구합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임금채권 소멸시효는 3년입니다. 퇴직일로부터 3년 이내에 청구해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주휴수당도 최저임금 지급 대상 임금에 해당',
        summary:
          '대법원 2021다246545 사건(대법원, 2024.07.25 선고)에서 법원은 구 근로기준법 제55조에 따라 부여되는 유급휴일에 대한 임금인 주휴수당이 사용자가 최저임금액 이상으로 지급하여야 할 임금에 해당한다고 판시했습니다. 택시 운전 근로자에 대한 최저임금 산입 임금 범위를 정한 시행령 규정이 있더라도, 주휴수당 자체가 최저임금 보호 대상에서 벗어나지 않는다는 점을 명확히 했습니다.',
        takeaway:
          '비슷한 상황이라면 회사가 "주휴수당이 월급에 포함됐다"고 주장해도 실제 지급액이 최저임금에 미달하는지 직접 계산해보고, 미달이면 체불 신고를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '주휴수당이 급여명세서에 따로 표시되지 않으면 체불인가요?',
        answer:
          '<strong>반드시 항목이 분리 표시될 필요는 없지만, 전체 지급액에 주휴수당이 포함되어 최저임금 이상으로 지급되고 있어야 합니다.</strong> 주휴수당이 따로 표시되지 않고 기본급에 합산됐다면 실제 지급 시간급을 계산해서 최저임금 이상인지 확인하세요.',
      },
      {
        question: '단시간 근로자(파트타임)도 주휴수당을 받을 수 있나요?',
        answer:
          '<strong>주 15시간 이상 근무하는 단시간 근로자도 주휴수당 지급 대상입니다.</strong> 주 15시간 미만이면 주휴수당 적용이 제외됩니다. 근무 시간이 정확히 주 15시간인 경우에도 포함 여부를 꼼꼼히 확인하세요.',
      },
      {
        question: '최저임금 위반으로 신고하면 사업주가 바로 처벌받나요?',
        answer:
          '<strong>노동청 진정 접수 후 근로감독관 조사가 이뤄지고, 체불 사실이 확인되면 지급 지시가 먼저 이루어집니다.</strong> 사업주가 이행하지 않으면 형사처벌 절차로 이어집니다.',
      },
      {
        question: '이미 퇴직했는데 주휴수당 미지급을 소급해서 청구할 수 있나요?',
        answer:
          '<strong>퇴직 후에도 3년 이내면 미지급 주휴수당을 청구할 수 있습니다.</strong> 퇴직 후 고용노동청에 진정하거나, 금액이 크다면 소액사건심판 또는 민사소송으로 청구하세요.',
      },
      {
        question: '급여명세서를 받지 못했는데 체불 금액을 어떻게 계산하나요?',
        answer:
          '<strong>통장 입금 내역, 근로계약서, 4대보험 취득·상실 확인서 등으로 근무 기간과 임금을 역산할 수 있습니다.</strong> 근로계약서가 없어도 카카오톡 대화, 업무 지시 문자, 사진 등이 보조 증거가 됩니다.',
      },
    ],
    cta: {
      text: '주휴수당·최저임금 위반 여부, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 절차 총정리', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '퇴직금 청구 방법', href: '/guide/retirement/retirement-pay-claim-procedure' },
      { label: '부당해고 구제 신청', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '로앤가이드 홈', href: '/' },
    ],
  },

  // ───────────────────────────────────────────
  // 16. wage / wage-freelancer-worker-status-claim
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-freelancer-worker-status-claim',
    keyword: '프리랜서 임금체불 근로자성 인정',
    questionKeyword: '프리랜서로 계약했는데 임금체불 신고를 할 수 있나요?',
    ctaKeyword: '프리랜서 근로자성 인정 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '프리랜서 임금체불 근로자성 인정 기준 4가지 | 로앤가이드',
      description:
        '프리랜서 계약서에 서명했지만 사실상 직원처럼 일하다 임금을 못 받았다면 근로자성 인정 기준 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>계약서에는 "프리랜서 위임 계약"이라고 써 있는데 실제로는 매일 출퇴근하고, 업무 지시를 받으며, 4대보험도 없이 일했습니다. 그러다 수개월치 대금을 못 받자 신고하려 해도 "프리랜서는 근로자가 아니라서 노동청 관할이 아니다"는 말을 들었습니다. 하지만 법원은 계약 형식이 아닌 실질 관계를 보고 근로자성을 판단합니다. 지금 내 상황이 근로자에 해당하는지 먼저 확인해보세요.</p>',
    sections: [
      {
        title: '프리랜서도 근로자로 인정받는 기준 4가지',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 계약 형식보다 근로 제공 관계의 실질로 근로자성을 판단합니다.</strong></p>\n<p>대법원 2021다210829 사건(대법원, 2022.12.01 선고)에서 법원은 채권추심원들이 위임 계약을 체결했음에도 불구하고 근로기준법상 근로자에 해당한다고 판시했습니다. 법원은 계약 형식보다 근로 제공 관계의 실질이 사업장에서 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공했는지에 따라 판단해야 한다고 밝혔습니다.</p>\n<ol>\n<li><strong>업무 지시·감독</strong> — 업무 내용, 방법, 시간을 사용자가 구체적으로 지시하고 감독하는지</li>\n<li><strong>근무 장소·시간 구속</strong> — 정해진 장소에 출퇴근하고, 근무 시간을 사용자가 결정하는지</li>\n<li><strong>전속성</strong> — 다른 사업장에서 일하는 것이 사실상 금지되거나 제한되는지</li>\n<li><strong>보수의 성격</strong> — 지급받는 돈이 노무 자체에 대한 대가인지, 작업 결과에 대한 사례금인지</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약서에 "프리랜서"라고 써 있어도 위 4가지 중 해당 항목이 많으면 근로자로 인정받을 수 있습니다.</blockquote>',
      },
      {
        title: '근로자성 인정을 위한 증거 수집 방법',
        content:
          '<p><strong style="color:#1e3a5f">근로자성을 입증하는 증거는 일상적인 업무 기록에서 나옵니다.</strong></p>\n<ul>\n<li><strong>업무 지시 기록</strong> — 사장이나 팀장으로부터 카카오톡, 이메일, 문자로 받은 업무 지시 내역을 확보하세요. "오늘 몇 시까지 출근", "이 업무를 이렇게 처리해라"는 메시지가 지시·감독의 증거입니다</li>\n<li><strong>출퇴근 기록</strong> — 사무실 출입 기록, 사내 시스템 로그인·로그아웃 기록, 셔틀버스 탑승 기록 등이 유효합니다</li>\n<li><strong>보수 지급 내역</strong> — 고정적으로 매달 같은 금액이 입금됐다면 임금 성격의 증거가 됩니다. 프리랜서 수수료와 달리 지급 시기와 금액이 규칙적인 경우 임금 성격이 강합니다</li>\n<li><strong>4대보험 가입 여부</strong> — 본인이 직접 납부하거나 사업주가 절반 부담했는지 국민건강보험공단에서 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 프리랜서 근로자성 인정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '근로자성 인정 후 임금체불 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">근로자성이 인정되면 미지급 대금 전부를 임금체불로 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>노동청 진정 접수</strong> — 사업장 관할 고용노동청에 임금체불 진정서를 제출합니다. 온라인은 고용노동부 민원마당(minwon.moel.go.kr)에서 접수할 수 있습니다</li>\n<li><strong>근로자성 주장</strong> — 진정서에 실질적 근로관계를 입증하는 자료를 첨부하고, 근로자성 인정을 먼저 요청하세요</li>\n<li><strong>근로감독관 조사</strong> — 근로감독관이 사업주와 근로자를 각각 조사합니다. 증거 자료를 충분히 준비하세요</li>\n<li><strong>지급 명령 또는 형사처벌</strong> — 근로자성이 인정되고 체불 사실이 확인되면 지급 지시가 내려지며, 불이행 시 형사처벌이 진행됩니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 근로자성 여부가 다투어지는 경우 법원에서 다시 판단받을 수 있어 시간이 걸릴 수 있습니다. 증거를 최대한 많이 확보하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약 형식 불문 실질 근로관계 인정',
        summary:
          '대법원 2021다210829 사건(대법원, 2022.12.01 선고)에서 법원은 위임 계약을 체결한 채권추심원들의 근로자성이 다투어진 사안에서, 계약 형식보다 근로 제공 관계의 실질이 사업장에서 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공하였는지에 따라 판단하여야 한다고 판시하며 근로자성을 인정했습니다.',
        takeaway:
          '비슷한 상황이라면 "프리랜서 계약서를 썼다"는 사실만으로 포기하지 말고, 실제 근무 형태가 종속적이었음을 보여주는 증거를 최대한 모아 노동청에 제출하세요.',
      },
    ],
    faq: [
      {
        question: '프리랜서로 2년 일했는데 퇴직금도 청구할 수 있나요?',
        answer:
          '<strong>근로자성이 인정되면 계속 근로기간이 1년 이상인 경우 퇴직금도 청구할 수 있습니다.</strong> 근로자성 입증이 선행되어야 하며, 프리랜서 계약 기간 전부가 근속 기간으로 인정될 수 있습니다.',
      },
      {
        question: '사업주가 "계약서에 프리랜서라고 써 있다"고 버티면 어떻게 하나요?',
        answer:
          '<strong>계약서 표제가 아닌 실질 관계로 판단하는 것이 법원의 확립된 입장입니다.</strong> 업무 지시 문자, 출퇴근 기록, 고정 급여 입금 내역 등 실질적 지배·종속 관계를 보여주는 증거를 제출하세요.',
      },
      {
        question: '4대보험에 가입하지 않았는데도 근로자로 인정받나요?',
        answer:
          '<strong>4대보험 미가입이 근로자성을 부정하는 결정적 사유는 아닙니다.</strong> 오히려 사업주가 고의로 가입을 피한 것으로 볼 수 있습니다. 다른 실질 근로관계 증거가 있으면 근로자로 인정받을 수 있습니다.',
      },
      {
        question: '프리랜서 계약이라 세금을 3.3% 원천징수했는데 어떻게 되나요?',
        answer:
          '<strong>3.3% 원천징수는 사업소득에 적용되는 세율이므로 근로자성이 인정되면 사업주가 근로소득세를 정산해야 합니다.</strong> 고용노동부 진정과 별도로 세무서에 내용을 신고할 수 있습니다.',
      },
      {
        question: '노동청 조사에서 근로자성이 인정되지 않으면 어떻게 하나요?',
        answer:
          '<strong>노동청 조사 결과에 불복할 수 있으며, 민사소송으로 근로자 지위 확인과 임금 청구를 함께 진행할 수 있습니다.</strong> 증거가 충분하다면 법원에서 다른 결론이 나올 수 있습니다.',
      },
    ],
    cta: {
      text: '프리랜서 근로자성 인정 가능성, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 절차 총정리', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '퇴직금 청구 방법', href: '/guide/retirement/retirement-pay-claim-procedure' },
      { label: '부당해고 구제 신청', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '로앤가이드 홈', href: '/' },
    ],
  },

  // ───────────────────────────────────────────
  // 17. wage / wage-employment-rule-change-unfavorable
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-employment-rule-change-unfavorable',
    keyword: '취업규칙 불리변경 임금 보호',
    questionKeyword: '회사가 취업규칙을 바꿔서 제 임금이 줄었는데 그냥 따라야 하나요?',
    ctaKeyword: '취업규칙 불리변경 임금 보호 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '취업규칙 불리변경 임금 보호 3단계 대응법 | 로앤가이드',
      description:
        '회사가 취업규칙을 바꿔 임금이 삭감됐다면 기존 근로계약의 유리한 조건이 우선 적용될 수 있습니다. 지금 확인하세요.',
    },
    intro:
      '<p>올해부터 회사가 임금피크제를 도입하면서 제 연봉이 30% 넘게 줄었습니다. 과반수 노동조합이 동의했다고 하는데, 저는 그 조합에도 안 들어가 있고 개별 동의도 한 적이 없습니다. 이게 합법인지 억울합니다. 대법원 2018다200709 판결(2019.11.14 선고)은 이 쟁점을 직접 다뤄, 취업규칙 불리변경이 있어도 기존의 유리한 개별 근로계약이 우선 적용된다는 원칙을 확인했습니다.</p>',
    sections: [
      {
        title: '취업규칙 불리변경 시 개별 근로계약 우선 원칙',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제97조를 반대 해석하면, 취업규칙보다 유리한 근로조건을 정한 기존 근로계약은 취업규칙 불리변경 후에도 유효합니다.</strong></p>\n<p>대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은, 근로기준법 제94조에서 정한 집단적 동의를 받아 근로자에게 불리한 내용으로 취업규칙이 변경된 경우에도, 변경된 취업규칙보다 유리한 근로조건을 정한 기존의 개별 근로계약의 내용은 변경되지 않으며, 근로자의 개별적 동의가 없는 한 취업규칙보다 유리한 근로계약의 내용이 우선하여 적용된다고 판시했습니다.</p>\n<ul>\n<li><strong>집단 동의 ≠ 개별 동의</strong> — 노동조합이나 과반수 근로자가 취업규칙 변경에 동의했더라도, 개별 근로자가 동의하지 않았다면 기존 연봉계약이 유지됩니다</li>\n<li><strong>유리 조건 우선 원칙</strong> — 근로기준법 제97조에 따라 취업규칙이 근로계약보다 불리하게 변경되면, 근로계약의 유리한 조건이 계속 적용됩니다</li>\n<li><strong>임금피크제 등 적용</strong> — 회사가 임금피크제 운용세칙을 새로 만들어 기존보다 낮은 임금을 지급하려 해도, 개별 연봉계약에 기본 연봉이 명시돼 있으면 그 계약이 우선합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취업규칙 변경 시 개별적으로 서명 동의를 요청받은 적이 없다면, 기존 근로계약 조건이 여전히 유효합니다.</blockquote>',
      },
      {
        title: '불리한 취업규칙 변경에 대응하는 3단계',
        content:
          '<p><strong style="color:#1e3a5f">불리변경으로 줄어든 임금은 단계적으로 청구·회복할 수 있습니다.</strong></p>\n<ol>\n<li><strong>근로계약서 확인</strong> — 기존 연봉계약서(또는 임금 계약서)에 기재된 연봉·임금 항목을 확인합니다. 변경 전후 급여명세서를 비교해 차액을 계산하세요</li>\n<li><strong>개별 동의 여부 확인</strong> — 회사로부터 취업규칙 변경에 개별 동의서를 받은 사실이 있는지 확인합니다. 사인한 적이 없다면 기존 계약이 우선 적용됩니다</li>\n<li><strong>서면 이의 제기 및 청구</strong> — 회사에 내용증명이나 이메일로 "기존 근로계약에 따른 임금 지급을 요청한다"는 내용을 보내고, 14일 이내 응답이 없으면 고용노동청에 체불 진정을 접수하세요</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 취업규칙 불리변경의 위법 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '노동청 진정 또는 민사소송으로 차액 청구하기',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙 불리변경으로 삭감된 임금 차액은 임금체불로 청구할 수 있습니다.</strong></p>\n<p>기존 연봉계약에 비해 적게 받은 금액 전부가 미지급 임금에 해당합니다. 고용노동청 진정 또는 법원에 소액사건심판(3,000만 원 이하) 또는 민사소송으로 청구할 수 있습니다.</p>\n<ul>\n<li><strong>노동청 진정</strong> — 차액을 구체적으로 정리한 표와 기존 연봉계약서, 변경 후 급여명세서를 첨부합니다</li>\n<li><strong>소액사건심판</strong> — 청구 금액이 3,000만 원 이하라면 법원에 간편하게 신청할 수 있습니다</li>\n<li><strong>임금채권 소멸시효</strong> — 임금 청구권은 3년이므로, 삭감 시작일로부터 3년 이내에 청구해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 개별 동의서에 이미 서명한 경우라면 상황이 달라질 수 있으므로, 서명 당시 상황을 먼저 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 불리변경 시 기존 연봉계약 우선',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 과반수 노동조합의 동의를 받아 임금피크제 운용세칙을 제정한 사안에서, 취업규칙보다 유리한 기존 개별 연봉계약의 내용이 그대로 유효하며 근로자의 개별 동의 없이는 취업규칙 변경으로 근로계약의 유리한 내용이 변경되지 않는다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 개별 동의서에 서명하지 않은 한 기존 연봉계약이 우선 적용되므로, 삭감된 금액을 계산해 노동청에 체불 진정하세요.',
      },
    ],
    faq: [
      {
        question: '취업규칙 변경 공고만 받았고 서명한 적이 없으면 동의한 걸로 보나요?',
        answer:
          '<strong>공고나 안내만으로는 개별 동의가 성립하지 않습니다.</strong> 근로자가 서명한 동의서가 있어야 개별 동의로 인정되며, 단순 통지나 게시로는 기존 근로계약 조건이 변경되지 않습니다.',
      },
      {
        question: '임금피크제에 동의하라는 압박을 받고 있는데 거부해도 되나요?',
        answer:
          '<strong>불이익한 취업규칙 변경에 동의를 거부해도 부당해고나 징계 사유가 되지 않습니다.</strong> 단, 압박이나 강요로 서명하게 되면 후에 취소하기 어려울 수 있으므로 서명 전에 전문가 상담을 받으세요.',
      },
      {
        question: '불리한 취업규칙 변경이 이미 수년 전에 일어났는데 지금도 청구할 수 있나요?',
        answer:
          '<strong>임금채권의 소멸시효는 3년이므로, 삭감 시작일로부터 3년 내의 차액만 청구할 수 있습니다.</strong> 지금이라도 빨리 진정이나 소송을 제기하는 것이 유리합니다.',
      },
      {
        question: '노동조합이 취업규칙 변경에 동의했으면 조합원은 무조건 따라야 하나요?',
        answer:
          '<strong>조합원이라도 기존 개별 근로계약이 취업규칙보다 유리하면 그 유리한 조건이 유지됩니다.</strong> 다만 기존 근로계약에 아무런 임금 조건이 없었다면 단체협약의 효력이 우선 적용될 수 있으므로 계약서를 먼저 확인하세요.',
      },
    ],
    cta: {
      text: '취업규칙 불리변경 위법 여부, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 절차 총정리', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '퇴직금 청구 방법', href: '/guide/retirement/retirement-pay-claim-procedure' },
      { label: '부당해고 구제 신청', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '로앤가이드 홈', href: '/' },
    ],
  },

  // ───────────────────────────────────────────
  // 18. wage / wage-bankrupt-employer-how-to-claim
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-bankrupt-employer-how-to-claim',
    keyword: '폐업 사업주 임금체불 재단채권 청구',
    questionKeyword: '사업주가 파산·폐업했는데 밀린 임금을 받을 수 있나요?',
    ctaKeyword: '폐업·파산 사업주 임금체불 청구 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '폐업 사업주 임금체불 재단채권·체당금 청구 4단계 | 로앤가이드',
      description:
        '사업주가 파산하거나 폐업해서 임금을 못 받고 있다면 재단채권 청구와 체당금 제도를 지금 확인하세요.',
    },
    intro:
      '<p>월급이 석 달째 밀리고 있는데 사장님이 "법원에 파산 신청했다"고 합니다. 이미 파산을 했으니 돈을 받을 방법이 없는 건지, 아니면 다른 방법이 있는 건지 막막합니다. 파산 절차가 시작됐다고 해서 밀린 임금이 사라지는 것이 아닙니다. 근로자의 임금·퇴직금은 파산 절차에서 재단채권으로 보호되며, 체당금 제도를 통해 국가가 대신 지급하는 방법도 있습니다.</p>',
    sections: [
      {
        title: '파산 후 임금·퇴직금은 재단채권으로 최우선 보호된다',
        content:
          '<p><strong style="color:#1e3a5f">근로자의 임금·퇴직금은 채무자 회생 및 파산에 관한 법률(채무자회생법)에 따라 재단채권으로 인정됩니다.</strong></p>\n<p>대법원 2013다64908 사건(대법원, 2014.11.20 선고)에서 법원은 파산선고 전에 생긴 근로자의 임금·퇴직금 및 재해보상금에 대해 파산관재인이 파산선고 후 변제할 의무의 이행을 지체함으로써 생긴 지연손해금 채권도 채무자회생법 제473조 제4호 소정의 재단채권에 해당한다고 판시했습니다. 즉, 파산 이후에 발생한 지연이자도 재단채권으로 최우선 변제를 받을 수 있습니다.</p>\n<ul>\n<li><strong>재단채권</strong> — 파산 재단에서 다른 채권자보다 먼저 변제받는 채권입니다. 파산채권(일반 채권)보다 우선합니다</li>\n<li><strong>임금·퇴직금</strong> — 파산 전 3개월분 임금, 3년분 퇴직금, 재해보상금이 재단채권에 해당합니다</li>\n<li><strong>지연이자도 포함</strong> — 파산 후 파산관재인이 지급을 지체해서 발생한 지연손해금도 재단채권으로 보호됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업주가 파산해도 근로자 임금은 다른 채권보다 먼저 받습니다. 포기하지 마세요.</blockquote>',
      },
      {
        title: '재단채권 청구와 체당금 제도 활용 4단계',
        content:
          '<p><strong style="color:#1e3a5f">파산·폐업 사업주로부터 밀린 임금을 받는 방법은 두 가지가 있습니다: 파산 재단에서 받거나, 국가(체당금)가 대신 지급받는 방법입니다.</strong></p>\n<ol>\n<li><strong>체불 임금 확인</strong> — 고용노동청에 임금체불 확인서를 발급받습니다. 체당금 신청과 재단채권 신고 모두 이 확인서가 필요합니다</li>\n<li><strong>파산 법원에 재단채권 신고</strong> — 사업주 파산 절차가 진행 중이라면 파산관재인에게 재단채권 신고를 합니다. 법원 공고를 통해 신고 기간을 확인하세요</li>\n<li><strong>체당금 신청</strong> — 파산선고 또는 폐업 확인 후 근로복지공단에 체당금을 신청합니다. 퇴직일로부터 2년 이내에 신청해야 합니다</li>\n<li><strong>체당금 수령</strong> — 일반 체당금은 최종 3개월 임금 + 3년분 퇴직금을 기준으로 지급되며, 상한액이 있습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 파산·폐업 사업주 임금 청구 방법을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체당금 신청 요건과 지급 금액',
        content:
          '<p><strong style="color:#1e3a5f">체당금 제도는 사업주의 도산으로 임금을 받지 못한 근로자를 국가가 보호하는 제도입니다.</strong></p>\n<p>근로자퇴직급여보장법 및 임금채권보장법에 따라 근로복지공단이 체당금을 지급합니다.</p>\n<ul>\n<li><strong>신청 요건</strong> — 사업주가 파산 선고, 회생 절차 개시, 또는 도산 사실 인정(소규모 사업장 폐업)이 있어야 합니다</li>\n<li><strong>지급 범위</strong> — 최종 3개월 임금, 최종 3년간 퇴직금, 최종 3개월 휴업수당</li>\n<li><strong>지급 상한</strong> — 월 최대 700만 원(2026년 기준) 내에서 지급합니다</li>\n<li><strong>신청 기한</strong> — 퇴직일로부터 2년, 도산 등 사실 인정일로부터 1년 이내에 신청해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 체당금은 전액 지급이 아닌 상한액 이내의 지급이므로, 초과분은 파산 재단 채권 배당으로 별도 청구해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산 후 임금 지연이자도 재단채권 인정',
        summary:
          '대법원 2013다64908 사건(대법원, 2014.11.20 선고)에서 법원은 파산선고 전에 생긴 근로자의 임금·퇴직금에 대해 파산관재인이 파산선고 후 변제 의무 이행을 지체해서 생긴 지연손해금 채권도 채무자회생법 제473조 제4호 소정의 재단채권에 해당한다고 판시했습니다. 파산관재인은 직무상 재단채권인 임금을 수시로 변제할 의무가 있고, 이를 지체하면 그 지연이자도 재단채권이 된다는 점을 명확히 한 판결입니다.',
        takeaway:
          '비슷한 상황이라면 파산 절차가 시작된 후에도 지연이자를 포함한 임금 전액이 재단채권으로 인정될 수 있으니, 파산관재인에게 적극적으로 채권 신고를 하세요.',
      },
    ],
    faq: [
      {
        question: '사업주가 파산이 아닌 단순 폐업을 한 경우에도 체당금을 받을 수 있나요?',
        answer:
          '<strong>사업주가 법원의 파산 선고 없이 폐업한 경우에도 "도산 사실 인정" 절차를 통해 체당금을 받을 수 있습니다.</strong> 근로복지공단이 소규모 사업장(상시 근로자 300명 이하)의 도산 사실을 인정하면 체당금 지급이 가능합니다.',
      },
      {
        question: '체당금 신청 기한을 놓쳤는데 다른 방법이 있나요?',
        answer:
          '<strong>체당금 신청 기한(퇴직일로부터 2년)이 지났다면 민사소송으로 청구해야 합니다.</strong> 임금채권 소멸시효(3년) 이내라면 파산 재단 채권 배당 절차나 민사 소액소송을 활용하세요.',
      },
      {
        question: '파산관재인에게 재단채권 신고를 하지 않으면 어떻게 되나요?',
        answer:
          '<strong>파산 채권과 달리 재단채권은 별도 신고 없이도 변제 우선권이 있지만, 실제 배당에서 누락될 수 있습니다.</strong> 파산관재인에게 서면으로 채권액과 근거를 통보하고, 체불 임금 확인서를 첨부하는 것이 안전합니다.',
      },
      {
        question: '파산 절차 중인데 재직하고 있어도 체당금을 받을 수 있나요?',
        answer:
          '<strong>체당금은 퇴직(또는 이직) 후에 신청할 수 있습니다.</strong> 재직 중이라면 파산 법원에 재단채권을 신고하고, 퇴직 후 체당금 절차를 별도로 진행하세요.',
      },
      {
        question: '대표이사가 재산을 빼돌린 것 같은데 어떻게 하나요?',
        answer:
          '<strong>파산관재인이 대표이사의 재산 도피 행위를 발견하면 부인권을 행사해 파산 재단으로 회수할 수 있습니다.</strong> 의심되는 정황이 있으면 파산관재인 또는 검찰에 횡령·사기 혐의로 고발하는 방법도 검토하세요.',
      },
    ],
    cta: {
      text: '파산·폐업 사업주 임금 청구 방법, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 절차 총정리', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '퇴직금 청구 방법', href: '/guide/retirement/retirement-pay-claim-procedure' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '부당해고 구제 신청', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '로앤가이드 홈', href: '/' },
    ],
  },

  // ───────────────────────────────────────────
  // 19. wage / wage-pogualkeum-overtime-void-claim
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogualkeum-overtime-void-claim',
    keyword: '포괄임금제 무효 초과근무수당 청구',
    questionKeyword: '포괄임금제 계약을 했으면 초과근무수당을 못 받나요?',
    ctaKeyword: '포괄임금제 무효 초과근무수당 청구 상담',
    type: '쟁점형',
    perspective: 'victim',
    meta: {
      title: '포괄임금제 무효 요건과 초과근무수당 청구 4단계 | 로앤가이드',
      description:
        '포괄임금제 계약서에 서명했지만 실제 초과근무수당이 지급되지 않았다면 무효 요건과 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>입사할 때 "포괄임금제"라는 말에 사인했는데, 매달 야근을 수십 시간 해도 추가 수당이 전혀 없습니다. 계약서에 "연장·야간·휴일 수당 포함"이라고 써 있으니 어쩔 수 없는 건지, 아니면 받을 수 있는 건지 헷갈립니다. 대법원 2021다304779 판결(2024.10.08 선고)은 소정근로일을 초과한 근무에도 최저임금이 적용된다는 점을 다시 확인했습니다. 포괄임금 약정이 무효가 되는 요건을 확인해보세요.</p>',
    sections: [
      {
        title: '포괄임금제가 무효가 되는 3가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">법원은 포괄임금 약정이 있더라도 근로자에게 불리한 경우 무효로 봅니다.</strong></p>\n<p>대법원 2021다304779 사건(대법원, 2024.10.08 선고)에서 법원은 소정근로일에 해당하지 않는 날에 근로한 경우라도 그 근로시간이 최저임금액 이상의 임금을 지급해야 하는 시간에 포함될 수 있다는 점을 확인했습니다. 포괄임금 약정은 아래 3가지 요건 중 하나라도 해당하면 무효가 됩니다.</p>\n<ol>\n<li><strong>실제 수당이 법정 금액에 미달</strong> — 포괄임금으로 지급받은 금액이 근로기준법상 계산한 연장·야간·휴일 수당 합산액보다 적은 경우 차액 청구 가능</li>\n<li><strong>근로 형태상 포괄임금이 불가능한 직종</strong> — 사무직 등 근무시간 산정이 가능한 직종에서 포괄임금 약정을 맺은 경우 무효 가능성이 높음</li>\n<li><strong>근로자가 실질적으로 불이익한 경우</strong> — 초과 근무가 상습적이고 규모가 크지만 포괄임금만 지급한 경우, 법원은 약정 무효로 판단하는 경향</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금 약정이 있더라도 실제 지급 금액이 법정 수당에 미달하면 차액을 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '실제 받아야 할 초과근무수당 계산 방법',
        content:
          '<p><strong style="color:#1e3a5f">초과근무수당을 청구하려면 실제 초과 근무시간과 법정 수당 금액을 먼저 계산해야 합니다.</strong></p>\n<ul>\n<li><strong>통상임금 시급 산출</strong> — 기본급 + 고정수당(직급·직무·기술수당 등)을 합산해 209시간으로 나눕니다</li>\n<li><strong>연장근로수당</strong> — 통상임금 시급 × 1.5 × 연장 시간 (1일 8시간, 1주 40시간 초과분)</li>\n<li><strong>야간근로수당</strong> — 통상임금 시급 × 0.5 × 야간 시간 (22:00~06:00)</li>\n<li><strong>휴일근로수당</strong> — 통상임금 시급 × 1.5 × 휴일 시간 (8시간 이하), 초과분 × 2.0</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 포괄임금제 무효 여부와 청구 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '포괄임금제 무효 주장 및 수당 청구 절차 4단계',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정 무효 주장과 수당 청구는 증거 확보부터 시작합니다.</strong></p>\n<ol>\n<li><strong>근무시간 증거 확보</strong> — 출퇴근 기록(출입카드·PC 로그), 업무 메신저 로그, 야근 식대 영수증, 셔틀버스 탑승 기록 등을 수집합니다</li>\n<li><strong>수당 차액 계산</strong> — 포괄임금으로 지급받은 금액과 법정 계산 수당을 비교해 차액을 산출합니다</li>\n<li><strong>서면 청구</strong> — 사업주에게 계산 내역을 첨부한 미지급 수당 청구 내용증명 또는 이메일을 발송합니다</li>\n<li><strong>노동청 진정</strong> — 14일 이내 응답이 없거나 거부하면 고용노동청에 임금체불 진정을 접수합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 포괄임금제 무효 다툼은 법적으로 복잡할 수 있어 청구 금액이 크다면 전문가 상담을 병행하는 것이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소정근로일 초과 근무시간에도 최저임금 적용',
        summary:
          '대법원 2021다304779 사건(대법원, 2024.10.08 선고)에서 법원은 택시 근로자가 만근일을 초과하여 근무한 날의 근로시간에 대해서도 최저임금이 지급되어야 하는지 여부가 문제된 사건에서, 소정근로일에 해당하지 않는 날에 근로한 경우라도 해당 근로시간에 최저임금 이상을 지급해야 함을 확인했습니다. 포괄임금 약정이 있더라도 실제 근로에 대한 최저임금 기준이 충족돼야 한다는 원칙이 적용된 사례입니다.',
        takeaway:
          '비슷한 상황이라면 포괄임금 계약서를 썼더라도 실제 근무 시간에 대한 최저임금 이상이 지급됐는지 먼저 계산하고, 미달이면 차액 청구를 진행하세요.',
      },
    ],
    faq: [
      {
        question: '포괄임금제 계약서에 사인했으면 무조건 수당을 못 받나요?',
        answer:
          '<strong>사인 자체가 모든 초과수당을 포기한다는 의미는 아닙니다.</strong> 실제 지급된 금액이 법정 계산 수당보다 적으면 차액을 청구할 수 있으며, 법원은 근로자에게 불리한 포괄임금 약정을 무효로 보는 경향이 있습니다.',
      },
      {
        question: '포괄임금제 계약이 위법인지 어떻게 판단하나요?',
        answer:
          '<strong>근무시간 산정이 가능한 일반 사무직에서 포괄임금제를 적용하고, 지급 금액이 법정 수당에 미달하면 위법 가능성이 높습니다.</strong> 근무시간 기록이 있다면 직접 계산해서 비교해보세요.',
      },
      {
        question: '야근을 많이 했는데 포괄임금 계약으로 추가 수당을 한 번도 못 받았어요. 얼마까지 소급 청구 가능한가요?',
        answer:
          '<strong>임금채권의 소멸시효는 3년으로, 청구일로부터 3년 이내의 미지급 수당 전액을 청구할 수 있습니다.</strong> 3년간 초과근무 기록을 정리해서 수당을 계산하면 상당한 금액이 될 수 있습니다.',
      },
      {
        question: 'IT·스타트업에서 포괄임금제라고 하는데 법적으로 가능한 건가요?',
        answer:
          '<strong>IT·스타트업 사무직도 일반적으로 근무시간 산정이 가능하므로 포괄임금 약정이 무효가 될 가능성이 높습니다.</strong> 단, 재량근무제나 탄력근무제 등 별도 합의가 있다면 상황이 다를 수 있으므로 근로계약서를 확인하세요.',
      },
      {
        question: '재직 중에도 포괄임금 무효 주장을 할 수 있나요?',
        answer:
          '<strong>재직 중에도 미지급 수당 청구가 가능하며, 노동청 진정을 이유로 불이익을 주는 것은 근로기준법 위반입니다.</strong> 다만 재직 중 분쟁이 부담스럽다면 퇴직 후 소급 청구도 가능합니다.',
      },
    ],
    cta: {
      text: '포괄임금 무효 여부와 청구 금액, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 신고 절차 총정리', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '퇴직금 청구 방법', href: '/guide/retirement/retirement-pay-claim-procedure' },
      { label: '부당해고 구제 신청', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '로앤가이드 홈', href: '/' },
    ],
  },
];
