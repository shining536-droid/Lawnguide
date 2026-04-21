import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 6~10 (batch27)
//
// 6. unemployment-part-time-income-limit — 수급 중 알바 소득 한도와 감액 기준
// 7. unemployment-rehire-second-claim — 재취직 후 재실직 시 실업급여 재신청
// 8. unemployment-workplace-closure — 사업장 폐업·도산 시 실업급여 절차
// 9. unemployment-extended-illness — 질병·부상 중 수급기간 연장
// 10. unemployment-self-employed-closure — 자영업자 폐업 실업급여 특례
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch27Unemployment_6to10: SpokePage[] = [
  // ── 7. 재취직 후 재실직 실업급여 재신청 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-rehire-second-claim',
    keyword: '재취직 후 재실직 실업급여 재신청',
    questionKeyword: '재취업했다가 다시 실직하면 실업급여를 또 받을 수 있나요?',
    ctaKeyword: '재실직 실업급여 재신청 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '재취직 후 재실직 시 실업급여 재신청 방법 4단계 | 로앤가이드',
      description:
        '재취업했다가 다시 실직했다면 남은 수급일수가 있으면 재신청이 가능합니다. 잔여일수 확인부터 재신청까지 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받다가 재취업했는데 3개월 만에 다시 실직했습니다. 이전 실업급여 수급일수가 남아있는데, 다시 받을 수 있을까요? 일정 조건을 충족하면 잔여 수급일수를 이어서 받거나, 새로운 수급자격으로 다시 신청할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 이전 수급 잔여일수 확인',
      '2단계: 새 수급자격 해당 여부 판단',
      '3단계: 이직확인서 발급 요청',
      '4단계: 관할 고용센터 재신청',
    ],
    sections: [
      {
        title: '잔여일수가 있을 때 — 이어서 받기',
        content:
          '<p><strong style="color:#1e3a5f">이전 수급기간(이직일로부터 12개월) 내에 잔여일수가 남아있으면 이어서 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>수급기간 확인</strong> — 최초 이직일로부터 12개월이 수급기간입니다. 이 기간 내에 잔여일수가 있으면 재신청이 가능합니다.</li>\n<li><strong>비자발적 이직 필요</strong> — 두 번째 직장에서도 비자발적으로 이직해야 합니다.</li>\n<li><strong>대기기간 없음</strong> — 잔여일수를 이어서 받는 경우 7일 대기기간이 적용되지 않습니다.</li>\n</ul>',
      },
      {
        title: '잔여일수가 없을 때 — 새 수급자격',
        content:
          '<p><strong style="color:#1e3a5f">이전 수급기간이 만료되었거나 잔여일수를 모두 소진한 경우, 새로운 수급자격으로 신청할 수 있습니다.</strong></p>\n<ol>\n<li><strong>새 피보험기간 충족</strong> — 재취업 후 이직일 이전 18개월 중 180일 이상 피보험기간이 필요합니다.</li>\n<li><strong>비자발적 이직</strong> — 두 번째 직장에서도 비자발적으로 이직해야 합니다.</li>\n<li><strong>새 수급일수 산정</strong> — 나이와 새 피보험기간에 따라 수급일수가 새로 산정됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>재실직 후 실업급여 가능 여부, AI가 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">이전 수급 이력과 재취업 기간을 입력하면 재신청 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '조기재취업수당을 받았다면',
        content:
          '<p><strong style="color:#1e3a5f">조기재취업수당을 받은 후 다시 실직하면 잔여일수가 없으므로 새 수급자격이 필요합니다.</strong></p>\n<p>조기재취업수당은 남은 수급일수의 1/2을 일시 지급받는 것이므로, 지급 후에는 잔여일수가 0이 됩니다. 재취업 기간이 짧아 새 피보험기간 180일을 충족하지 못하면 실업급여를 받을 수 없습니다.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 원직복직 후 구직급여 회수',
        summary:
          '대구지법 2014구합1590 사건(대구지법, 2014.12.24 선고)에서 법원은 부당해고 구제신청으로 원직복직된 근로자에 대해, 복직으로 인해 당초부터 구직급여 요건을 갖추지 못한 것이 되므로 이미 지급된 구직급여는 회수 대상이 된다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 부당해고 구제로 원직복직된 경우 이미 받은 실업급여를 반환해야 할 수 있습니다. 복직 결정 시 실업급여 반환 이슈를 미리 확인하세요.',
      },
    ],
    faq: [
      {
        question: '재취업 기간이 1개월로 짧았는데 다시 실업급여를 받을 수 있나요?',
        answer: '<p>이전 수급기간(12개월) 내에 잔여일수가 남아있고, 비자발적 이직이면 이어서 받을 수 있습니다. 새 수급자격으로는 피보험기간 180일 미충족으로 어려울 수 있습니다.</p>',
      },
      {
        question: '수급기간 12개월이 지났으면 어떻게 되나요?',
        answer: '<p>이전 잔여일수는 소멸합니다. 새 직장에서의 피보험기간이 180일 이상이고 비자발적 이직이면 새 수급자격으로 신청할 수 있습니다.</p>',
      },
      {
        question: '이전 직장과 새 직장의 피보험기간을 합산할 수 있나요?',
        answer: '<p>이전에 실업급여를 수급한 기간의 피보험기간은 합산되지 않습니다. 실업급여를 받지 않은 기간의 피보험기간만 합산 가능합니다.</p>',
      },
      {
        question: '자발적으로 퇴사했으면 재신청이 불가능한가요?',
        answer: '<p>근로조건 저하, 임금체불 등 정당한 이직 사유에 해당하면 자발적 퇴직이어도 수급자격이 인정될 수 있습니다. 이직 사유를 증빙할 자료를 확보하세요.</p>',
      },
    ],
    cta: { text: '재실직 후 실업급여 재신청 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴직 수급 유형', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
    ],
  },

  // ── 8. 사업장 폐업·도산 시 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-closure',
    keyword: '회사 폐업 도산 실업급여 절차',
    questionKeyword: '회사가 폐업했는데 실업급여 어떻게 신청하나요?',
    ctaKeyword: '회사 폐업 실업급여 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 폐업·도산 시 실업급여 신청 절차 5단계 | 로앤가이드',
      description:
        '회사가 폐업하거나 도산했다면 이직확인서 없이도 실업급여를 신청할 수 있습니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 갑자기 회사가 문을 닫았습니다. 사장님과 연락도 안 되고, 이직확인서도 받을 수 없습니다. 실업급여를 신청하려면 어떻게 해야 할까요? 사업장 폐업·도산의 경우 이직확인서 없이도 실업급여를 신청하는 방법이 있습니다.</p>',
    timelineSteps: [
      '1단계: 고용보험 피보험자격 확인',
      '2단계: 이직확인서 대체 방법 확인',
      '3단계: 관할 고용센터 방문 신청',
      '4단계: 실업인정 및 급여 수령',
      '5단계: 체당금(밀린 임금·퇴직금) 별도 신청',
    ],
    sections: [
      {
        title: '이직확인서 없이 신청하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">사업주와 연락이 안 되면 고용센터에서 직권으로 이직확인서를 대체할 수 있습니다.</strong></p>\n<ul>\n<li><strong>고용센터 직권 확인</strong> — 사업주가 이직확인서를 발급하지 않거나 연락이 안 되면, 고용센터가 건강보험 자격상실 기록, 4대보험 기록 등으로 직권 확인합니다.</li>\n<li><strong>이직확인서 청구</strong> — 사업주에게 이직확인서 발급을 서면으로 요청하고, 14일 이내 미발급 시 고용센터에 신고하면 과태료가 부과됩니다.</li>\n<li><strong>필요 서류</strong> — 신분증, 근로계약서, 급여명세서, 4대보험 가입 확인서 등을 가지고 고용센터에 방문하세요.</li>\n</ul>',
      },
      {
        title: '폐업 사업장 체당금 신청',
        content:
          '<p><strong style="color:#1e3a5f">밀린 임금과 퇴직금은 근로복지공단에서 체당금으로 지급받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>일반체당금</strong> — 사업주의 파산·회생이 확인된 경우, 최종 3개월분 임금 + 최종 3년분 퇴직금 + 최종 3개월분 휴업수당 중 미지급액을 지급받습니다.</li>\n<li><strong>간이대지급금</strong> — 소규모 사업장(상시 근로자 수에 따라) 사업주의 도산등사실인정을 받으면 신청 가능합니다.</li>\n<li><strong>신청처</strong> — 근로복지공단 관할 지사에 신청합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>폐업 사업장 실업급여+체당금, AI가 절차를 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사업장 상황을 입력하면 받을 수 있는 급여와 절차를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '폐업 확인이 안 될 때',
        content:
          '<p><strong style="color:#1e3a5f">사업자등록 폐업 여부는 국세청 홈택스에서 확인할 수 있습니다.</strong></p>\n<p>사업주가 폐업 신고를 하지 않은 경우라도, 실질적으로 사업이 중단된 것이 확인되면 고용센터에서 직권으로 이직 처리할 수 있습니다. 동료 근로자의 진술, 사업장 방문 확인 등이 증거가 됩니다.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 법인 전출 후 수급자격 판단',
        summary:
          '울산지법 2013구합2840 사건(울산지법, 2014.04.24 선고)에서 법원은 국내 회사에서 해외 현지법인으로 전출된 후 퇴직한 근로자가 국내 회사 퇴직일로부터 12개월이 지나 수급자격 인정을 신청한 경우, 국내 고용관계는 전출 시 종료된 것이므로 수급기간이 만료되어 수급자격이 인정되지 않는다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 회사 폐업·도산 시 되도록 빨리 실업급여를 신청하세요. 이직일(마지막 근무일)로부터 12개월이 수급기간이므로, 늦으면 수급 가능 일수가 줄어듭니다.',
      },
    ],
    faq: [
      {
        question: '사장님이 이직확인서를 안 줘도 실업급여를 받을 수 있나요?',
        answer: '<p>네, 고용센터에 이직확인서 미발급을 신고하면 고용센터가 직권으로 확인하여 수급자격을 인정할 수 있습니다.</p>',
      },
      {
        question: '4대보험 미가입 상태였으면 어떻게 하나요?',
        answer: '<p>고용보험 미가입 상태였다면 근로복지공단에 피보험자격 확인 청구를 하여 소급 가입 처리를 받을 수 있습니다. 근로계약서, 급여 입금내역 등이 증거가 됩니다.</p>',
      },
      {
        question: '체당금과 실업급여를 동시에 받을 수 있나요?',
        answer: '<p>네, 체당금(밀린 임금·퇴직금)과 실업급여는 별개 제도이므로 동시 수급이 가능합니다.</p>',
      },
      {
        question: '폐업한 회사의 밀린 월급은 어떻게 받나요?',
        answer: '<p>관할 고용노동청에 임금체불 진정을 접수하고, 근로복지공단에 체당금을 신청하세요. 두 절차를 동시에 진행할 수 있습니다.</p>',
      },
    ],
    cta: { text: '회사 폐업 시 실업급여·체당금 절차 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '고용보험 미가입 사업장 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '임금체불 사업주 도산 시 청구', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' },
    ],
  },

  // ── 9. 질병·부상 중 수급기간 연장 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-extended-illness-caring',
    keyword: '실업급여 질병 부상 수급기간 연장',
    questionKeyword: '아파서 구직활동을 못 하면 실업급여 기간이 연장되나요?',
    ctaKeyword: '질병 중 실업급여 연장 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '질병·부상 중 실업급여 수급기간 연장 방법 | 로앤가이드',
      description:
        '질병이나 부상으로 구직활동이 어렵다면 수급기간을 최대 4년까지 연장할 수 있습니다. 상병급여 신청 방법을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받고 있는데 갑자기 큰 수술을 받게 됐습니다. 2~3개월간 구직활동이 불가능한데 실업급여가 끊기면 어떡하나요? 질병·부상으로 구직활동이 어려운 경우 수급기간을 연장받고, 상병급여를 받을 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 의사 진단서 발급',
      '2단계: 고용센터에 상병 신고',
      '3단계: 상병급여 신청',
      '4단계: 치료 종료 후 구직활동 재개',
    ],
    sections: [
      {
        title: '상병급여란?',
        content:
          '<p><strong style="color:#1e3a5f">질병·부상·출산으로 7일 이상 취업할 수 없는 경우, 구직급여 대신 상병급여를 지급받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>지급액</strong> — 구직급여 일액과 동일합니다.</li>\n<li><strong>지급기간</strong> — 질병 등으로 취업할 수 없는 기간 동안 지급되며, 총 수급일수 내에서 차감됩니다.</li>\n<li><strong>수급기간 연장</strong> — 질병 등으로 인한 기간만큼 수급기간(12개월)이 최대 4년까지 연장됩니다.</li>\n</ul>',
      },
      {
        title: '신청 방법과 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">상병급여를 받으려면 의사 진단서와 함께 고용센터에 신청합니다.</strong></p>\n<ol>\n<li><strong>의사 진단서 발급</strong> — "7일 이상 취업이 불가능하다"는 내용이 포함된 진단서를 발급받습니다.</li>\n<li><strong>고용센터 신고</strong> — 질병·부상 발생 사실과 예상 기간을 고용센터에 신고합니다.</li>\n<li><strong>상병급여 신청서 제출</strong> — 진단서를 첨부하여 상병급여 지급 신청서를 제출합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>상병급여 신청 자격 여부, AI가 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">질병 내용과 치료 기간을 입력하면 상병급여 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수급기간 연장 vs 수급일수 연장의 차이',
        content:
          '<p><strong style="color:#1e3a5f">상병으로 인한 연장은 "수급기간"(12개월)의 연장이지, "수급일수"의 연장이 아닙니다.</strong></p>\n<p>예를 들어 수급일수가 150일인데 질병으로 2개월간 상병급여를 받으면, 수급기간이 14개월로 연장되지만 총 수급일수 150일은 변하지 않습니다. 상병급여 기간에 소진된 일수는 총 수급일수에서 차감됩니다.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 수급자격 신청기간의 법적 성격',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 육아휴직급여 신청기간을 강행규정인 제척기간으로 판시했습니다. 실업급여 관련 각종 신청기간도 법적 기한이 엄격하게 적용되므로, 질병 중에도 기한 내 신청이 중요합니다.',
        takeaway:
          '비슷한 상황이라면 질병이 발생하면 가능한 빨리 고용센터에 신고하고 상병급여를 신청하세요. 신고가 늦으면 해당 기간의 급여를 받지 못할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '7일 미만의 질병이면 상병급여를 못 받나요?',
        answer: '<p>상병급여는 7일 이상 취업이 불가능한 경우에 지급됩니다. 7일 미만이면 해당 기간의 실업인정일에 질병 사유를 신고하고 사후 실업인정을 받으세요.</p>',
      },
      {
        question: '상병급여와 건강보험 상병수당을 동시에 받을 수 있나요?',
        answer: '<p>고용보험 상병급여와 건강보험 상병수당은 별개 제도이지만, 중복 수급에 제한이 있을 수 있습니다. 관할 고용센터에 확인하세요.</p>',
      },
      {
        question: '입원 중에는 어떻게 실업인정을 받나요?',
        answer: '<p>상병급여를 신청하면 실업인정 출석의무가 면제됩니다. 진단서를 제출하면 되며, 가족이 대리 제출할 수도 있습니다.</p>',
      },
      {
        question: '정신건강 질환(우울증 등)도 상병급여 대상인가요?',
        answer: '<p>네, 정신건강 질환으로 7일 이상 취업이 불가능하다는 의사 진단서가 있으면 상병급여 대상입니다.</p>',
      },
    ],
    cta: { text: '질병 중 실업급여 연장 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '실업급여 수급기간 연장', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '실업인정일 미출석 대처', href: '/guide/unemployment/unemployment-missed-attendance' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },

  // ── 10. 자영업자 폐업 실업급여 특례 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-self-employed-closure',
    keyword: '자영업자 폐업 실업급여 특례',
    questionKeyword: '자영업자가 폐업하면 실업급여를 받을 수 있나요?',
    ctaKeyword: '자영업 폐업 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '자영업자 폐업 시 실업급여 수급 조건 5가지 | 로앤가이드',
      description:
        '자영업자도 고용보험에 가입했다면 폐업 시 실업급여를 받을 수 있습니다. 5가지 수급 조건을 지금 확인하세요.',
    },
    intro:
      '<p>5년 동안 운영하던 가게를 폐업해야 할 상황입니다. 고용보험에 가입해 두었는데 실업급여를 받을 수 있을까요? 자영업자도 고용보험에 가입하고 일정 조건을 충족하면 폐업 시 실업급여를 수급할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 고용보험 가입 기간 확인',
      '2단계: 비자발적 폐업 사유 해당 여부',
      '3단계: 적극적 재취업 노력',
      '4단계: 관할 고용센터에 수급자격 신청',
      '5단계: 실업인정 및 급여 수령',
    ],
    sections: [
      {
        title: '자영업자 실업급여 수급 조건 5가지',
        content:
          '<p><strong style="color:#1e3a5f">자영업자가 실업급여를 받으려면 다음 5가지를 모두 충족해야 합니다.</strong></p>\n<ol>\n<li><strong>고용보험 임의가입</strong> — 자영업자는 고용보험에 임의로 가입해야 합니다. 가입하지 않은 경우 수급 불가입니다.</li>\n<li><strong>가입기간 1년 이상</strong> — 폐업일 이전 24개월 중 1년 이상 보험료를 납부해야 합니다.</li>\n<li><strong>비자발적 폐업</strong> — 매출액 감소, 적자 지속, 건강 악화 등 불가피한 사유로 폐업해야 합니다.</li>\n<li><strong>적극적 재취업 노력</strong> — 구직활동이나 창업 준비를 적극적으로 해야 합니다.</li>\n<li><strong>폐업 신고 완료</strong> — 관할 세무서에 사업자등록 폐업 신고를 완료해야 합니다.</li>\n</ol>',
      },
      {
        title: '비자발적 폐업으로 인정되는 사유',
        content:
          '<p><strong style="color:#1e3a5f">아래 사유 중 하나에 해당하면 비자발적 폐업으로 인정됩니다.</strong></p>\n<ul>\n<li>매출액이 직전 연도 대비 20% 이상 감소</li>\n<li>연속 6개월 이상 적자 발생</li>\n<li>자연재해, 화재 등으로 영업 불가</li>\n<li>건강 악화로 사업 운영이 어려운 경우</li>\n<li>도시 재개발, 건물 철거 등 외부 요인</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 폐업 사유가 수급 조건에 해당하는지 AI가 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">폐업 사유와 고용보험 가입 기간을 입력하면 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수급 금액과 기간',
        content:
          '<p><strong style="color:#1e3a5f">자영업자 실업급여는 선택한 기준보수에 따라 산정됩니다.</strong></p>\n<ul>\n<li><strong>1일 수급액</strong> — 선택 기준보수의 60%이며, 상한액(66,000원)과 하한액이 적용됩니다.</li>\n<li><strong>수급일수</strong> — 가입기간에 따라 120~210일입니다.</li>\n<li><strong>대기기간</strong> — 7일의 대기기간이 적용됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입의무와 수급자격',
        summary:
          '대법원 2011두6745 사건(대법원, 2014.02.13 선고)에서 법원은 고용보험 관계는 사업 개시로 당연히 성립하며, 사업주가 보험관계 성립을 인식하지 못하여 보험급여를 청구하지 않았더라도 보험료 납부 의무를 면할 수 없다고 판시했습니다. 보험자도 보험료를 징수하지 않았다고 하여 보험급여 지급을 거절할 수 없습니다.',
        takeaway:
          '비슷한 상황이라면 고용보험에 미가입 상태에서 폐업한 자영업자는 실업급여를 받을 수 없습니다. 향후를 위해 사업 초기부터 고용보험에 가입해두는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '고용보험에 가입하지 않았으면 폐업 후 실업급여를 못 받나요?',
        answer: '<p>자영업자 고용보험은 임의가입이므로, 가입하지 않은 상태에서는 실업급여를 받을 수 없습니다. 가입은 근로복지공단에 신청합니다.</p>',
      },
      {
        question: '가입한 지 6개월인데 수급이 가능한가요?',
        answer: '<p>자영업자 실업급여는 폐업일 이전 24개월 중 1년(12개월) 이상 보험료를 납부해야 합니다. 6개월 가입으로는 부족합니다.</p>',
      },
      {
        question: '폐업 후 다시 창업하면 실업급여가 중단되나요?',
        answer: '<p>새로 사업자등록을 하면 취업(창업)으로 간주되어 실업급여가 중단됩니다. 다만 창업 준비 활동 자체는 구직활동으로 인정받을 수 있습니다.</p>',
      },
      {
        question: '부부 공동사업인데 한 명만 폐업하면?',
        answer: '<p>공동사업자의 경우 본인 명의로 고용보험에 가입하고 보험료를 납부한 사업자만 수급 대상이 됩니다. 공동사업자 전원이 폐업해야 하는 것은 아닙니다.</p>',
      },
    ],
    cta: { text: '자영업자 폐업 실업급여 수급 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '50세 이상 수급기간 연장', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '실업급여 불승인 이의신청', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },
];
