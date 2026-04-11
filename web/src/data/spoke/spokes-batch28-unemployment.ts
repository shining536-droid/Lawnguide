import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 8개 (batch28)
//
// 1. unemployment-construction-daily-apply
//    이 페이지는 [건설 일용직 근로자]의 [고용보험 가입·피보험기간 산정이 복잡한 상황]에서
//    [일용직 전용 실업급여 신청 절차와 필요서류 준비]를 돕는 페이지다.
//
// 2. unemployment-60-retirement-benefit
//    이 페이지는 [60세 정년퇴직을 앞둔 근로자]의 [정년퇴직도 실업급여를 받을 수 있는지 모르는 상황]에서
//    [정년퇴직자 수급 요건 확인과 신청 절차]를 돕는 페이지다.
//
// 3. unemployment-dual-job-one-lost
//    이 페이지는 [투잡 중 한 곳을 잃은 근로자]의 [나머지 일을 하면서 실업급여를 받을 수 있는지 모르는 상황]에서
//    [겸업 중 일부 실직 시 수급 요건과 소득신고 방법]을 돕는 페이지다.
//
// 4. unemployment-foreign-worker-eligibility
//    이 페이지는 [외국인 근로자]의 [고용보험 가입 여부와 실업급여 자격을 모르는 상황]에서
//    [체류자격별 수급 가능 여부와 신청 절차]를 돕는 페이지다.
//
// 5. unemployment-company-bankrupt-double-claim
//    이 페이지는 [회사 부도로 임금과 퇴직금을 못 받은 근로자]의 [실업급여와 체당금을 동시에 받을 수 있는지 모르는 상황]에서
//    [실업급여·체당금 동시 청구 가능 여부와 절차]를 돕는 페이지다.
//
// 6. unemployment-repeat-claim-limit
//    이 페이지는 [실업급여를 여러 번 받은 근로자]의 [반복수급 제한에 걸릴까 걱정되는 상황]에서
//    [반복수급 제한 기준과 수급기간 감소 규정 확인]을 돕는 페이지다.
//
// 7. unemployment-online-class-job-search
//    이 페이지는 [실업급여 수급 중인 구직자]의 [온라인 강의 수강이 구직활동으로 인정되는지 모르는 상황]에서
//    [온라인 교육 구직활동 인정 기준과 신고 방법]을 돕는 페이지다.
//
// 8. unemployment-commute-hardship-quit
//    이 페이지는 [통근이 너무 힘들어 퇴사한 근로자]의 [자발적 퇴사인데 실업급여를 받을 수 있는지 모르는 상황]에서
//    [통근곤란 사유 인정 기준과 증빙서류 준비]를 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch28Unemployment: SpokePage[] = [
  // ── 1. 건설 일용직 실업급여 신청 방법 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-construction-daily-apply',
    keyword: '건설 일용직 실업급여 신청 방법',
    questionKeyword: '건설 일용직도 실업급여를 받을 수 있나요?',
    ctaKeyword: '건설 일용직 실업급여 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '건설 일용직 실업급여 신청 4단계 절차 정리 | 로앤가이드',
      description:
        '건설 현장에서 일용직으로 일했는데 공사가 끝나 일이 없어졌다면 실업급여를 받을 수 있습니다. 일용직 전용 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>6개월 넘게 건설 현장에서 일했는데 공사가 끝나면서 더 이상 일거리가 없습니다. 월급제가 아니라 일당제로 일했기 때문에 실업급여를 받을 수 있는지 막막합니다. 건설 일용직 근로자도 고용보험에 가입되어 있다면 실업급여를 신청할 수 있고, 오히려 일반 근로자보다 피보험기간 요건이 완화되어 있습니다. 내가 받을 수 있는지 아래에서 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 고용보험 피보험기간 확인(근로내역확인서)',
      '2단계: 수급자격 인정신청서 작성',
      '3단계: 관할 고용센터 방문·실업인정',
      '4단계: 구직급여 수령 및 구직활동 보고',
    ],
    sections: [
      {
        title: '건설 일용직 실업급여 수급 요건 3가지',
        content:
          '<p><strong style="color:#1e3a5f">건설 일용직 근로자의 실업급여 수급 요건은 일반 근로자와 약간 다릅니다.</strong></p>\n<ol>\n<li><strong>피보험기간 요건</strong> — 이직일 이전 18개월 중 피보험 단위기간이 합산하여 180일 이상이어야 합니다. 일용직은 실제 근로한 날만 피보험기간으로 산정되므로 근로내역확인서로 정확히 확인하세요.</li>\n<li><strong>비자발적 이직</strong> — 공사 종료, 계약 만료, 원청 사정으로 인한 해고 등 본인 의사에 반한 이직이어야 합니다. 단, 일용직은 1개월 미만 단기 계약 종료 시 대부분 비자발적 이직으로 인정됩니다.</li>\n<li><strong>수급자격 제한 기간</strong> — 마지막 근로일로부터 다음 날 기준으로, 최종 이직일 이전 1개월 동안 근로일수가 10일 미만이어야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 일용직 180일 요건은 달력 기준이 아니라 실제 근로일 기준입니다. 고용보험 홈페이지에서 근로내역확인서를 출력하면 정확한 일수를 확인할 수 있습니다.</blockquote>',
      },
      {
        title: '신청 전 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">건설 일용직은 이직확인서 대신 근로내역확인서가 핵심 서류입니다.</strong></p>\n<ul>\n<li><strong>근로내역확인서</strong> — 고용보험 홈페이지 또는 1350 전화로 발급받으세요. 각 현장별 근로일수와 보수가 기록되어 있습니다.</li>\n<li><strong>신분증</strong> — 본인 확인용으로 주민등록증 또는 운전면허증을 지참하세요.</li>\n<li><strong>통장 사본</strong> — 구직급여가 입금될 본인 명의 계좌입니다.</li>\n<li><strong>건설근로자 퇴직공제 가입내역(선택)</strong> — 건설근로자공제회에서 발급하면 근로 사실 증빙에 도움이 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 피보험기간과 수급 가능 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근로일수와 마지막 근로일을 입력하면 수급 자격 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '일용직 구직급여 수급기간과 금액',
        content:
          '<p><strong style="color:#1e3a5f">일용직 구직급여는 나이와 피보험기간에 따라 수급일수가 달라집니다.</strong></p>\n<p>일용근로자의 1일 구직급여액은 이직 전 1년간 일한 날의 평균 일급의 60%입니다. 다만 상한액(1일 66,000원)과 하한액이 적용됩니다. 수급기간은 최소 120일에서 최대 270일까지이며, 50세 이상이거나 피보험기간이 길수록 더 많이 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 건설 일용직도 일반 근로자와 동일한 수급일수 테이블이 적용됩니다. 다만 1일 급여액 산정 방식이 다르니 평균 일급을 미리 계산해두세요.</blockquote>',
      },
      {
        title: '건설 일용직이 자주 놓치는 실수 3가지',
        content:
          '<p><strong style="color:#1e3a5f">수급자격을 갖추고도 실업급여를 못 받는 경우가 있습니다.</strong></p>\n<ul>\n<li><strong>신청 시기를 놓치는 경우</strong> — 마지막 근로일 다음 날부터 12개월 이내에 신청해야 합니다. 다른 현장에서 일하면서 미루다가 기한을 넘기는 경우가 많습니다.</li>\n<li><strong>고용보험 미가입 현장에서 일한 경우</strong> — 사업주가 신고하지 않아 고용보험에 가입되지 않은 경우, 근로복지공단에 피보험자격 확인청구를 하면 소급 가입이 가능합니다.</li>\n<li><strong>수급 중 일용근로 미신고</strong> — 구직급여 수급 중 일용직으로 일한 날은 반드시 실업인정 시 신고해야 합니다. 미신고는 부정수급으로 처벌받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 부정수급 반환 처분의 적법성',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 수급자격자가 해외 체류 중 제3자가 대리로 재취업 노력신고를 한 것은 고용보험법 제61조의 "거짓이나 그 밖의 부정한 방법"에 해당한다고 판시했습니다. 본인이 직접 구직활동을 신고해야 하며, 대리 신청은 부정수급으로 반환 대상이 됩니다.',
        takeaway:
          '건설 일용직도 실업인정 출석일과 구직활동 신고를 반드시 본인이 직접 해야 합니다. 타인에게 대리 신고를 맡기면 부정수급으로 처벌받을 수 있으니 주의하세요.',
      },
    ],
    faq: [
      {
        question: '건설 현장을 여러 군데 돌아다녔는데 피보험기간을 합산할 수 있나요?',
        answer:
          '<p>네, 여러 현장의 근로일수가 모두 고용보험에 신고되어 있다면 합산됩니다. 고용보험 홈페이지에서 근로내역확인서를 출력하면 모든 현장의 근로일수를 한눈에 확인할 수 있습니다.</p>',
      },
      {
        question: '일용직인데 사업주가 고용보험을 안 들어줬으면 어떻게 하나요?',
        answer:
          '<p>근로복지공단에 피보험자격 확인청구를 하세요. 일한 사실을 증명할 수 있는 자료(일용근로소득지급명세서, 계좌이체 내역, 문자 등)가 있으면 소급 가입 처리가 가능합니다.</p>',
      },
      {
        question: '실업급여를 받으면서 다른 건설 현장에서 일용직으로 일해도 되나요?',
        answer:
          '<p>월 60시간 미만 또는 주 15시간 미만이면 수급하면서 일할 수 있습니다. 다만 일한 날은 실업인정 시 반드시 신고해야 하고, 해당일의 구직급여는 지급되지 않습니다.</p>',
      },
      {
        question: '건설 일용직 구직급여 1일 수급액은 어떻게 계산하나요?',
        answer:
          '<p>이직 전 1년간 실제 일한 날의 총 보수를 총 근로일수로 나눈 평균 일급의 60%입니다. 상한액은 1일 66,000원이고, 하한액은 최저임금의 80% × 8시간 기준으로 적용됩니다.</p>',
      },
      {
        question: '공사가 끝나서 일이 없어진 것도 비자발적 이직인가요?',
        answer:
          '<p>네, 공사 종료로 인한 계약 만료는 비자발적 이직으로 인정됩니다. 이직확인서에 "계약 만료" 또는 "공사 종료"로 기재되므로 별도의 증빙이 필요하지 않습니다.</p>',
      },
    ],
    cta: { text: '건설 일용직 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '일용근로자 수급자격', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '고용센터 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
      { label: '부정수급 유형 5가지', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
      { label: '구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
    ],
  },

  // ── 2. 60세 정년퇴직 실업급여 수급 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-60-retirement-benefit',
    keyword: '60세 정년퇴직 실업급여 수급',
    questionKeyword: '60세 정년퇴직해도 실업급여를 받을 수 있나요?',
    ctaKeyword: '정년퇴직 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '60세 정년퇴직 실업급여 최대 270일 받는 3가지 조건 | 로앤가이드',
      description:
        '정년퇴직인데 실업급여를 받을 수 있을지 걱정되신다면, 비자발적 이직으로 인정되는 조건과 수급기간을 지금 확인하세요.',
    },
    intro:
      '<p>30년 넘게 다니던 회사에서 60세 정년을 맞아 퇴직했습니다. 재취업을 하고 싶지만 나이 때문에 쉽지 않습니다. 정년퇴직은 자발적 퇴사가 아닌데도 실업급여를 받을 수 있는지 헷갈립니다. 결론부터 말하면, 정년퇴직은 비자발적 이직에 해당하므로 요건을 갖추면 실업급여를 받을 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 정년퇴직 사실 및 이직확인서 확인',
      '2단계: 고용보험 피보험기간·나이 확인',
      '3단계: 고용센터 수급자격 인정신청',
      '4단계: 실업인정 및 구직급여 수령',
    ],
    sections: [
      {
        title: '정년퇴직이 실업급여 대상인 이유',
        content:
          '<p><strong style="color:#1e3a5f">정년퇴직은 고용보험법상 비자발적 이직으로 분류됩니다.</strong></p>\n<p>고용보험법 시행규칙 별표2에 따르면 "정년에 의한 퇴직"은 수급자격이 제한되지 않는 정당한 이직 사유입니다. 따라서 정년퇴직자는 자발적 퇴사와 달리 별도의 사유 소명 없이도 실업급여를 신청할 수 있습니다.</p>\n<p>다만 65세 이후에 새로 고용된 근로자는 고용보험 적용 대상에서 제외되므로, 65세 이전에 가입한 기존 피보험자격을 유지한 상태에서 퇴직해야 합니다. 60세 정년퇴직은 이 조건을 충족합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정년퇴직은 비자발적 이직입니다. 회사 이직확인서에 "정년퇴직"으로 기재되면 실업급여 신청에 문제가 없습니다.</blockquote>',
      },
      {
        title: '정년퇴직자 수급기간과 금액 계산',
        content:
          '<p><strong style="color:#1e3a5f">60세 정년퇴직자는 50세 이상 수급일수 테이블이 적용되어 최대 270일까지 받을 수 있습니다.</strong></p>\n<p>50세 이상 근로자는 동일 피보험기간 대비 일반 근로자보다 30일 더 많은 수급기간이 적용됩니다. 30년 이상 근무했다면 피보험기간 10년 이상에 해당하므로 최대 270일 수급이 가능합니다.</p>\n<ul>\n<li><strong>1일 수급액</strong> — 퇴직 전 3개월 평균임금의 60%, 상한 66,000원</li>\n<li><strong>총 수급액 예시</strong> — 1일 66,000원 × 270일 = 최대 약 17,820,000원</li>\n<li><strong>대기기간</strong> — 신청 후 7일은 대기기간으로 급여가 지급되지 않습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>정년퇴직 후 실업급여 총액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">나이, 근속연수, 퇴직 전 급여를 입력하면 수급기간과 총액을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '정년퇴직 후 재취업하면 조기재취업수당도 가능',
        content:
          '<p><strong style="color:#1e3a5f">수급기간의 절반 이상을 남기고 재취업하면 조기재취업수당을 받을 수 있습니다.</strong></p>\n<p>예를 들어 270일 수급자가 100일째에 재취업하면, 남은 170일의 1/2인 85일분의 구직급여를 일시에 받을 수 있습니다. 정년퇴직 후 파트타임이나 재취업 지원 프로그램을 통해 빠르게 취업하면 추가 혜택이 있습니다.</p>\n<ul>\n<li><strong>12개월 이상 근무 조건</strong> — 재취업 후 12개월 이상 계속 근무해야 조기재취업수당이 지급됩니다</li>\n<li><strong>신청 시기</strong> — 재취업 후 12개월이 지난 다음 날부터 신청 가능합니다</li>\n</ul>',
      },
      {
        title: '정년퇴직자가 주의할 점 3가지',
        content:
          '<p><strong style="color:#1e3a5f">정년퇴직이라도 신청 시기와 절차를 놓치면 실업급여를 못 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>퇴직일로부터 12개월 이내 신청</strong> — 이 기한을 넘기면 수급자격 자체가 소멸합니다. 퇴직 후 여행이나 휴식을 취하다 기한을 놓치는 경우가 많으니 퇴직 후 한 달 이내에 신청하세요.</li>\n<li><strong>이직확인서 확인</strong> — 이직 사유가 "정년퇴직"으로 기재되었는지 확인하세요. "권고사직" 등 다른 사유로 기재되어도 실업급여 수급에는 문제없지만, 정확한 기재가 분쟁을 예방합니다.</li>\n<li><strong>구직활동 의무</strong> — 정년퇴직자도 실업급여 수급 중 적극적 구직활동을 해야 합니다. 실업인정일마다 구직활동 실적을 보고해야 합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 피보험자격의 실질적 보호',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 소속기관장이 고용보험 가입의사 확인의무를 해태한 경우, 가입대상 공무원이 그 사유를 안 날부터 3개월 내에 가입신청을 할 수 있다고 판시했습니다. 피보험자격이 실질적으로 보호되어야 한다는 취지입니다.',
        takeaway:
          '정년퇴직 전 고용보험 가입기간이 누락되거나 짧게 산정된 경우, 이의를 제기하여 올바른 피보험기간을 인정받으세요. 수급일수와 총액에 직접 영향을 미칩니다.',
      },
    ],
    faq: [
      {
        question: '정년퇴직인데 회사에서 퇴직금도 받았습니다. 실업급여도 받을 수 있나요?',
        answer:
          '<p>네, 퇴직금과 실업급여는 별개의 제도입니다. 퇴직금은 근로기준법상의 권리이고, 실업급여는 고용보험법상의 급여이므로 둘 다 받을 수 있습니다.</p>',
      },
      {
        question: '정년퇴직 후 촉탁직으로 재고용되었다가 그만두면 실업급여를 받을 수 있나요?',
        answer:
          '<p>촉탁직 재고용 후 계약 만료로 그만두는 것도 비자발적 이직입니다. 촉탁 기간 동안의 고용보험 가입기간도 합산되므로 수급 요건을 충족하면 실업급여를 받을 수 있습니다.</p>',
      },
      {
        question: '65세까지 연장근무하다 퇴직해도 실업급여가 나오나요?',
        answer:
          '<p>65세 이전에 고용보험에 가입된 상태에서 계속 근무하다 퇴직하면 수급 가능합니다. 다만 65세 이후에 새로 고용된 경우는 고용보험 적용이 제외되어 실업급여를 받을 수 없습니다.</p>',
      },
      {
        question: '정년퇴직자 국민연금과 실업급여를 동시에 받을 수 있나요?',
        answer:
          '<p>네, 국민연금 수령과 실업급여 수급은 별개이므로 동시에 받을 수 있습니다. 국민연금 수령 사실을 신고할 의무도 없습니다.</p>',
      },
    ],
    cta: { text: '정년퇴직 실업급여 총액 AI로 즉시 계산하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '50세 이상 수급기간 연장', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '실업급여 수급기간과 일수', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
      { label: '고용센터 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 3. 투잡 한 곳 실직 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-dual-job-one-lost',
    keyword: '투잡 한 곳 실직 실업급여',
    questionKeyword: '투잡 중 한 곳을 실직하면 실업급여를 받을 수 있나요?',
    ctaKeyword: '투잡 실직 실업급여 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '투잡 한 곳 실직 시 실업급여 받는 2가지 조건 | 로앤가이드',
      description:
        '두 곳에서 일하다 한 곳이 폐업해서 실직했는데 나머지 직장 소득이 있어도 실업급여를 받을 수 있는지 지금 확인하세요.',
    },
    intro:
      '<p>낮에는 사무직으로, 저녁에는 편의점 아르바이트로 투잡을 뛰고 있었습니다. 그런데 낮 직장에서 권고사직을 당했습니다. 저녁 아르바이트는 계속하고 있으니 실업급여를 못 받는 건 아닌지 걱정됩니다. 겸업 중 한 곳을 잃었을 때 실업급여 수급 조건과 소득신고 방법을 정리해보세요.</p>',
    sections: [
      {
        title: '투잡 중 실직 시 실업급여 수급 가능 여부',
        content:
          '<p><strong style="color:#1e3a5f">겸업 중 한 곳을 잃었을 때 실업급여 수급 가능 여부는 나머지 직장의 근로시간에 달려 있습니다.</strong></p>\n<p>고용보험법상 실업급여는 "이직 후 근로의 의사와 능력이 있음에도 취업하지 못한 상태"에서 지급됩니다. 따라서 나머지 직장에서의 근로시간이 주 15시간 이상이거나 월 60시간 이상이면 "취업 상태"로 보아 실업급여 수급이 제한될 수 있습니다.</p>\n<ul>\n<li><strong>나머지 직장 주 15시간 미만</strong> → 실업급여 수급 가능 (해당일 급여 차감)</li>\n<li><strong>나머지 직장 주 15시간 이상</strong> → 취업 상태로 간주, 실업급여 수급 제한</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 나머지 직장의 주당 근로시간이 15시간 미만이면 실업급여를 받을 수 있지만, 일한 날의 급여는 차감됩니다.</blockquote>',
      },
      {
        title: '소득신고와 실업인정 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">나머지 직장에서의 근로 사실을 반드시 실업인정 시 신고해야 합니다.</strong></p>\n<p>실업급여를 수급하면서 다른 곳에서 근로하는 경우, 실업인정일마다 해당 기간 중 일한 날과 소득을 신고해야 합니다. 신고하지 않으면 부정수급으로 처벌받을 수 있습니다.</p>\n<ol>\n<li><strong>근로일 신고</strong> — 나머지 직장에서 일한 날짜를 모두 기재합니다.</li>\n<li><strong>소득 신고</strong> — 해당 기간 중 받은 급여 금액을 기재합니다.</li>\n<li><strong>취업 상태 변경 신고</strong> — 나머지 직장의 근로시간이 늘어나 주 15시간 이상이 되면 즉시 신고해야 합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>투잡 실직 후 수급 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">각 직장의 근로시간과 이직 사유를 입력하면 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '투잡 실업급여에서 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">겸업 상태의 실업급여 신청에서 자주 발생하는 실수 3가지를 확인하세요.</strong></p>\n<ul>\n<li><strong>나머지 직장을 신고하지 않는 경우</strong> — 고용보험 시스템에서 취업 사실이 확인되면 부정수급으로 처벌받습니다. 반드시 솔직하게 신고하세요.</li>\n<li><strong>주된 직장이 아닌 부업 쪽을 기준으로 신청하는 경우</strong> — 피보험기간이 더 긴 직장, 즉 주된 직장을 기준으로 신청해야 수급액이 유리합니다.</li>\n<li><strong>두 직장 모두 고용보험에 가입되어 있는지 확인하지 않는 경우</strong> — 고용보험 이중가입이 되어 있으면 주된 직장 기준으로 수급자격을 신청할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 부정수급 처벌',
        summary:
          '대법원 2018도2429 사건(대법원, 2018.06.28 선고)에서 법원은 고용보험법 제116조 제2항의 처벌 대상은 실업급여·육아휴직급여·출산전후휴가급여를 부정하게 수급한 경우에 한정된다고 판시했습니다. 취업 사실을 숨기고 구직급여를 수령하면 부정수급으로 처벌 대상이 됩니다.',
        takeaway:
          '투잡 중 한 곳을 잃고 실업급여를 신청할 때는 나머지 직장의 근로 사실을 반드시 신고하세요. 미신고 시 부정수급으로 형사처벌과 반환·추가징수 대상이 됩니다.',
      },
    ],
    faq: [
      {
        question: '두 직장 모두 고용보험에 가입되어 있었는데 어느 쪽으로 신청하나요?',
        answer:
          '<p>실직한 직장을 기준으로 신청합니다. 피보험기간이 더 긴 직장을 기준으로 하면 수급액과 수급기간이 유리해질 수 있으므로, 주된 직장 기준으로 산정해달라고 요청하세요.</p>',
      },
      {
        question: '나머지 직장 소득이 있으면 구직급여가 줄어드나요?',
        answer:
          '<p>나머지 직장에서 일한 날의 구직급여는 지급되지 않습니다. 다만 일하지 않은 날의 구직급여는 전액 지급됩니다. 총 수급일수 자체가 줄어드는 것은 아닙니다.</p>',
      },
      {
        question: '프리랜서로 부업하면서 실업급여를 받을 수 있나요?',
        answer:
          '<p>프리랜서 소득이 있더라도 월 소득이 구직급여 일액 미만이고 주 15시간 미만으로 활동한다면 수급 가능합니다. 다만 소득과 활동 내역을 반드시 실업인정 시 신고해야 합니다.</p>',
      },
      {
        question: '나머지 직장도 곧 그만둘 예정인데 어떻게 신청하나요?',
        answer:
          '<p>먼저 실직한 직장 기준으로 실업급여를 신청하고, 나머지 직장을 그만둘 때 소득 변동을 신고하면 됩니다. 두 번째 직장도 비자발적 이직이면 피보험기간이 합산될 수 있습니다.</p>',
      },
    ],
    cta: { text: '투잡 실직 후 수급 가능 여부 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '수급 중 파트타임 근로', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '부정수급 유형 5가지', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
      { label: '구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '자발적 퇴직 실업급여', href: '/guide/unemployment/voluntary-quit-approved-case-types' },
    ],
  },

  // ── 4. 외국인 근로자 실업급여 자격 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-foreign-worker-eligibility',
    keyword: '외국인 근로자 실업급여 자격',
    questionKeyword: '외국인 근로자도 실업급여를 받을 수 있나요?',
    ctaKeyword: '외국인 근로자 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 실업급여 자격 5가지 체류자격별 정리 | 로앤가이드',
      description:
        '외국인 근로자인데 회사를 그만두게 되었다면, 체류자격별로 실업급여 수급 가능 여부가 다릅니다. 내 자격을 지금 확인하세요.',
    },
    intro:
      '<p>E-9 비자로 제조업 공장에서 3년간 일했는데 계약이 만료되었습니다. 한국에서 다른 일자리를 찾고 싶지만 실업급여를 받을 수 있는지 모르겠습니다. 외국인 근로자도 고용보험에 가입되어 있다면 실업급여를 받을 수 있지만, 체류자격에 따라 가입 의무와 수급 조건이 달라집니다. 내 비자 유형에 맞는 자격을 확인해보세요.</p>',
    sections: [
      {
        title: '체류자격별 고용보험 가입 여부',
        content:
          '<p><strong style="color:#1e3a5f">외국인 근로자의 고용보험 가입은 체류자격에 따라 의무·임의·불가로 나뉩니다.</strong></p>\n<ul>\n<li><strong>의무가입 대상</strong> — 거주(F-2), 재외동포(F-4), 영주(F-5), 결혼이민(F-6) 비자 소지자는 내국인과 동일하게 고용보험에 의무가입됩니다.</li>\n<li><strong>임의가입 대상</strong> — 비전문취업(E-9), 선원취업(E-10), 방문취업(H-2) 비자 소지자는 외국인 근로자 본인이 원하면 가입할 수 있습니다(상호주의 적용).</li>\n<li><strong>가입 불가</strong> — 단기방문(C-3), 관광취업(H-1) 등 취업 목적이 아닌 체류자격은 고용보험 가입 대상이 아닙니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 고용보험에 가입되어 있어야 실업급여를 받을 수 있습니다. 급여명세서에서 고용보험료 공제 여부를 확인하세요.</blockquote>',
      },
      {
        title: '외국인 근로자 실업급여 수급 요건',
        content:
          '<p><strong style="color:#1e3a5f">고용보험에 가입된 외국인 근로자는 내국인과 동일한 수급 요건을 충족해야 합니다.</strong></p>\n<ol>\n<li><strong>피보험기간 180일 이상</strong> — 이직일 이전 18개월 중 180일 이상 근무해야 합니다.</li>\n<li><strong>비자발적 이직</strong> — 계약 만료, 해고, 사업장 폐업 등 비자발적 사유여야 합니다.</li>\n<li><strong>체류기간 잔여 확인</strong> — 구직급여는 체류기간 만료일까지만 지급됩니다. 체류기간이 짧으면 수급기간도 짧아질 수 있습니다.</li>\n<li><strong>재취업 의사</strong> — 한국 내에서 재취업할 의사와 능력이 있어야 합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>외국인 근로자 실업급여 자격, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">비자 유형, 근무기간, 이직 사유를 입력하면 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '출국 시 반환일시금 제도',
        content:
          '<p><strong style="color:#1e3a5f">실업급여를 받지 못하고 출국하는 외국인 근로자는 반환일시금을 청구할 수 있습니다.</strong></p>\n<p>임의가입 대상인 E-9, H-2 비자 근로자가 실업급여를 받지 않고 출국하는 경우, 납부한 고용보험료의 일부를 반환받을 수 있습니다. 출국 전 또는 출국 후 근로복지공단에 신청하면 됩니다.</p>\n<ul>\n<li><strong>신청 시기</strong> — 출국 전 14일 이내 또는 출국 후에도 신청 가능</li>\n<li><strong>필요 서류</strong> — 여권 사본, 출국 증빙, 본인 명의 계좌(해외 계좌 가능)</li>\n<li><strong>반환 금액</strong> — 근로자 부담분 보험료 전액</li>\n</ul>',
      },
      {
        title: '외국인 근로자가 자주 놓치는 3가지',
        content:
          '<p><strong style="color:#1e3a5f">외국인 근로자의 실업급여 신청에서 자주 발생하는 문제를 미리 확인하세요.</strong></p>\n<ul>\n<li><strong>사업주가 고용보험을 가입하지 않은 경우</strong> — 근로복지공단에 피보험자격 확인청구를 하면 소급 가입이 가능합니다. 근로계약서, 급여통장 등을 증거로 제출하세요.</li>\n<li><strong>체류기간 만료가 임박한 경우</strong> — 구직급여는 체류 만료일까지만 지급되므로, 구직비자(D-10)로 변경하면 체류기간을 연장할 수 있습니다.</li>\n<li><strong>상호주의 미적용 국가</strong> — E-9 근로자의 경우 본국과 한국 간 상호주의가 적용되지 않으면 임의가입이 불가능합니다. 근로복지공단에 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입기간 보호',
        summary:
          '광주고법 2018누1338 사건(광주고법, 2018.10.24 선고)에서 법원은 임기제 공무원의 고용보험 가입신청기간이 소속기관장의 의무 해태로 지났더라도, 가입대상자가 그 사유를 안 날부터 3개월 내에 가입신청을 할 수 있다고 판시했습니다. 가입기간 보호의 실질적 해석을 적용한 사례입니다.',
        takeaway:
          '외국인 근로자도 사업주의 미신고로 고용보험 가입이 누락된 경우, 피보험자격 확인청구를 통해 소급 가입을 받을 수 있습니다. 가입기간은 수급자격의 핵심이므로 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: 'E-9 비자로 실업급여를 받으려면 어떤 조건이 필요한가요?',
        answer:
          '<p>E-9 비자 소지자는 임의가입 대상이므로 먼저 고용보험에 가입되어 있어야 합니다. 가입되어 있다면 피보험기간 180일 이상, 비자발적 이직, 체류기간 잔여 등 일반 요건을 충족하면 수급할 수 있습니다.</p>',
      },
      {
        question: '불법체류 상태에서도 실업급여를 받을 수 있나요?',
        answer:
          '<p>아닙니다. 합법적 체류자격을 유지하고 있어야 실업급여를 받을 수 있습니다. 체류기간이 만료된 상태에서는 수급이 불가능합니다.</p>',
      },
      {
        question: '실업급여를 받으면서 구직비자(D-10)로 변경할 수 있나요?',
        answer:
          '<p>네, 전문인력(E-1~E-7) 비자 소지자는 구직비자(D-10)로 변경하여 체류기간을 연장하면서 실업급여를 계속 수급할 수 있습니다. 출입국관리사무소에 변경 신청하세요.</p>',
      },
      {
        question: '외국인 근로자 실업급여 수급기간은 내국인과 같나요?',
        answer:
          '<p>수급일수 테이블은 내국인과 동일합니다. 다만 체류기간 만료일이 수급기간 종료일보다 먼저 도래하면, 체류 만료일까지만 지급됩니다.</p>',
      },
      {
        question: '귀국 후에도 실업급여를 받을 수 있나요?',
        answer:
          '<p>아닙니다. 실업급여는 한국 내에서 구직활동을 하는 동안에만 지급됩니다. 귀국하면 수급이 중단되며, 이 경우 반환일시금을 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '외국인 근로자 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '고용보험 미가입 대처법', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '고용센터 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
      { label: '수급자격 불인정 이의신청', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 5. 회사 부도 실업급여 체당금 동시 청구 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-company-bankrupt-double-claim',
    keyword: '회사 부도 실업급여 체당금 동시 청구',
    questionKeyword: '회사가 부도나면 실업급여와 체당금을 동시에 받을 수 있나요?',
    ctaKeyword: '회사 부도 실업급여 체당금 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '회사 부도 시 실업급여·체당금 동시 청구 3단계 | 로앤가이드',
      description:
        '회사가 부도났는데 밀린 임금도 못 받고 실업급여도 신청해야 한다면, 실업급여와 체당금 동시 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>다니던 회사가 갑자기 부도가 났습니다. 3개월 치 임금과 퇴직금을 받지 못했는데, 당장 생활비도 막막합니다. 실업급여도 신청해야 하고 밀린 임금도 받아야 하는데 어디서부터 시작해야 할지 모르겠습니다. 다행히 실업급여와 체당금(체불 임금 대지급금)은 별도의 제도이므로 동시에 청구할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 사업장 도산 확인(법원 또는 노동청)',
      '2단계: 고용센터에 실업급여 신청',
      '3단계: 근로복지공단에 체당금 신청',
      '4단계: 동시 수령 및 이후 재취업 활동',
    ],
    sections: [
      {
        title: '실업급여와 체당금은 별개의 제도',
        content:
          '<p><strong style="color:#1e3a5f">실업급여는 고용보험기금에서, 체당금은 임금채권보장기금에서 지급되므로 동시 수급이 가능합니다.</strong></p>\n<p>실업급여는 실직 후 구직활동 기간 동안의 생활 안정을 위한 급여이고, 체당금은 사업주가 지급하지 못한 임금·퇴직금을 국가가 대신 지급하는 제도입니다. 두 제도는 법적 근거와 재원이 다르므로 중복 수급에 해당하지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 실업급여와 체당금은 동시에 받을 수 있습니다. 두 개를 따로 신청해야 하니 각각의 절차를 확인하세요.</blockquote>',
      },
      {
        title: '체당금 신청 절차와 조건',
        content:
          '<p><strong style="color:#1e3a5f">체당금은 일반 체당금과 소액 체당금 두 종류가 있습니다.</strong></p>\n<ul>\n<li><strong>일반 체당금</strong> — 사업주의 도산(파산·회생·폐업 인정) 시 최종 3개월 임금, 최종 3년 퇴직금, 최종 3개월 휴업수당을 대지급합니다. 근로복지공단에 도산등사실인정을 신청한 후 체당금을 청구합니다.</li>\n<li><strong>소액 체당금</strong> — 도산 여부와 관계없이 임금 등을 지급받지 못한 근로자가 법원의 확정판결 등을 받아 신청합니다. 다만 지급 상한액이 일반 체당금보다 낮습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>회사 부도 후 받을 수 있는 금액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">밀린 임금, 퇴직금, 근무기간을 입력하면 실업급여와 체당금 총액을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '동시 청구 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">실업급여와 체당금을 동시에 청구할 때 알아야 할 3가지를 확인하세요.</strong></p>\n<ul>\n<li><strong>이직확인서 발급 문제</strong> — 회사가 부도나면 이직확인서를 발급받기 어려울 수 있습니다. 이 경우 고용센터에 사정을 설명하고 직권으로 수급자격 인정을 요청하세요.</li>\n<li><strong>부당해고 구제신청과의 관계</strong> — 부도가 아닌 해고의 경우, 부당해고 구제신청 후 원직복직되면 이미 받은 구직급여를 반환해야 할 수 있습니다.</li>\n<li><strong>체당금 상한액</strong> — 체당금에는 나이별 상한액이 있습니다. 30세 미만은 월 220만원, 30~40세는 월 310만원, 40세 이상은 월 350만원이 상한입니다(2026년 기준).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 복직 후 구직급여 회수 제한',
        summary:
          '대구지법 2014구합1590 사건(대구지법, 2014.12.24 선고)에서 법원은 징계해고 후 부당해고 구제신청으로 원직복직된 근로자에게 이미 지급한 구직급여를 회수하는 처분이 적법하다고 판시했습니다. 소급 복직으로 퇴직 사실 자체가 없어졌기 때문입니다.',
        takeaway:
          '회사 부도의 경우에는 원직복직 가능성이 낮으므로 구직급여 회수 위험이 적습니다. 다만 부도가 아닌 해고 사안에서는 부당해고 구제와 실업급여의 관계를 신중히 판단하세요.',
      },
    ],
    faq: [
      {
        question: '회사가 폐업했는데 이직확인서를 어떻게 받나요?',
        answer:
          '<p>고용센터에 방문하여 사업주가 이직확인서를 발급할 수 없는 사정을 설명하면, 고용센터 직권으로 수급자격을 인정받을 수 있습니다. 근로계약서, 급여통장 등 근로 사실을 증빙할 서류를 준비하세요.</p>',
      },
      {
        question: '체당금 신청 기한이 있나요?',
        answer:
          '<p>일반 체당금은 도산등사실인정일로부터 2년 이내에 청구해야 합니다. 소액 체당금은 판결 확정일부터 1년 이내입니다. 기한을 넘기면 청구할 수 없으므로 빨리 신청하세요.</p>',
      },
      {
        question: '실업급여를 먼저 받고 체당금을 나중에 신청해도 되나요?',
        answer:
          '<p>네, 순서에 관계없이 각각 신청할 수 있습니다. 다만 체당금 신청에도 기한이 있으므로 가능하면 동시에 진행하는 것이 좋습니다.</p>',
      },
      {
        question: '회사 부도로 고용보험료가 체납된 상태인데 실업급여를 받을 수 있나요?',
        answer:
          '<p>사업주의 보험료 체납은 근로자의 수급자격에 영향을 미치지 않습니다. 근로자가 실제로 근무한 사실이 확인되면 실업급여를 받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '회사 부도 시 받을 수 있는 금액 AI로 즉시 계산하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '사업장 폐업 실업급여', href: '/guide/unemployment/unemployment-workplace-closure' },
      { label: '고용보험 미가입 대처법', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '이직확인서 분쟁 해결', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '고용센터 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 6. 실업급여 반복수급 제한 기준 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-repeat-claim-limit',
    keyword: '실업급여 반복수급 제한 기준',
    questionKeyword: '실업급여를 여러 번 받으면 제한이 있나요?',
    ctaKeyword: '실업급여 반복수급 제한 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 반복수급 제한 기준 3가지 핵심 정리 | 로앤가이드',
      description:
        '실업급여를 여러 번 받았는데 이번에도 받을 수 있을지 걱정되신다면, 반복수급 제한 기준과 수급기간 감소 규정을 지금 확인하세요.',
    },
    intro:
      '<p>5년 사이에 세 번째 실업급여를 신청하려고 합니다. 이번에는 회사가 폐업해서 어쩔 수 없는 상황인데, 반복수급이라 제한이 걸리는 건 아닌지 걱정됩니다. 2019년 10월부터 시행된 반복수급 제한 규정은 일정 기간 내 여러 번 수급하면 수급기간을 줄이는 제도입니다. 내 상황에 해당하는지 확인해보세요.</p>',
    sections: [
      {
        title: '반복수급 제한 제도란',
        content:
          '<p><strong style="color:#1e3a5f">2019년 10월부터 5년 이내 3회 이상 실업급여를 받으면 수급기간이 줄어듭니다.</strong></p>\n<p>고용보험법 제50조의2에 따라, 이직일 이전 5년 동안 구직급여를 3회 이상 받은 경우 소정급여일수의 50%만 지급됩니다. 예를 들어 원래 수급일수가 210일이라면 105일로 줄어듭니다.</p>\n<ul>\n<li><strong>기산점</strong> — 이직일 기준으로 과거 5년간 수급 횟수를 계산합니다</li>\n<li><strong>감소 비율</strong> — 3회째부터 소정급여일수의 1/2로 감소합니다</li>\n<li><strong>적용 시점</strong> — 2019.10.1 이후 이직한 경우부터 적용됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 5년 내 3회 이상이면 수급기간이 절반으로 줄어듭니다. 다만 비자발적 이직 사유에 따라 예외가 적용될 수 있습니다.</blockquote>',
      },
      {
        title: '반복수급 제한 예외 사유',
        content:
          '<p><strong style="color:#1e3a5f">모든 반복수급이 제한되는 것은 아닙니다. 다음의 경우 예외가 적용됩니다.</strong></p>\n<ol>\n<li><strong>사업장 도산·폐업</strong> — 사업주의 도산이나 폐업으로 실직한 경우는 반복수급 횟수에서 제외됩니다.</li>\n<li><strong>고용보험법상 수급자격 제한 사유에 해당하지 않는 이직</strong> — 근로조건 저하, 체불임금 등 정당한 이직 사유가 있는 경우입니다.</li>\n<li><strong>천재지변·재해</strong> — 불가항력적 사유로 인한 실직입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 반복수급 제한 해당 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">과거 수급 이력과 이직 사유를 입력하면 제한 여부와 수급기간을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '반복수급 횟수를 줄이는 방법',
        content:
          '<p><strong style="color:#1e3a5f">반복수급 제한에 걸리지 않으려면 다음 사항을 확인하세요.</strong></p>\n<ul>\n<li><strong>5년 경과 확인</strong> — 과거 수급 시점부터 5년이 지났다면 해당 수급 횟수는 제외됩니다. 이전 수급 종료일을 정확히 확인하세요.</li>\n<li><strong>조기재취업수당 활용</strong> — 빠르게 재취업하면 조기재취업수당을 받을 수 있고, 다음 실직 시 반복수급 제한에 걸릴 확률도 줄어듭니다.</li>\n<li><strong>예외 사유 소명</strong> — 이직 사유가 사업장 도산이나 체불 등 예외에 해당하면 반드시 증빙 서류를 제출하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정수급 처벌 범위',
        summary:
          '대법원 2018도2429 사건(대법원, 2018.06.28 선고)에서 법원은 고용보험법 제116조 제2항의 부정수급 처벌은 실업급여·육아휴직급여·출산전후휴가급여에 한정되며, 고용유지지원금에는 적용할 수 없다고 판시했습니다.',
        takeaway:
          '반복수급 자체는 형사처벌 대상이 아니지만, 수급 과정에서 거짓이나 부정한 방법을 사용하면 부정수급으로 형사처벌과 반환·추가징수 대상이 됩니다. 정직하게 신고하세요.',
      },
    ],
    faq: [
      {
        question: '5년 내 2회 수급했는데 이번이 3회째입니다. 아예 못 받는 건가요?',
        answer:
          '<p>아닙니다. 아예 못 받는 것이 아니라 소정급여일수가 50%로 줄어드는 것입니다. 예를 들어 원래 210일이면 105일로 줄어들지만, 실업급여 자체는 받을 수 있습니다.</p>',
      },
      {
        question: '반복수급 제한 횟수에 일용근로자 구직급여도 포함되나요?',
        answer:
          '<p>네, 일용근로자 구직급여도 수급 횟수에 포함됩니다. 일반 근로자와 일용근로자의 구직급여를 합산하여 5년 내 3회 이상인지를 판단합니다.</p>',
      },
      {
        question: '회사 폐업으로 실직했는데도 반복수급 제한이 적용되나요?',
        answer:
          '<p>사업장 도산·폐업은 예외 사유에 해당합니다. 도산 사실을 증빙할 수 있으면 해당 수급 횟수에서 제외되므로 반복수급 제한이 적용되지 않을 수 있습니다.</p>',
      },
      {
        question: '반복수급 제한은 언제부터 적용되나요?',
        answer:
          '<p>2019년 10월 1일 이후 이직한 경우부터 적용됩니다. 그 이전에 수급한 횟수도 5년 이내라면 횟수에 포함됩니다.</p>',
      },
      {
        question: '수급기간이 줄어들면 1일 수급액도 줄어드나요?',
        answer:
          '<p>아닙니다. 반복수급 제한은 소정급여일수만 줄어들 뿐, 1일 구직급여액은 변동 없습니다. 퇴직 전 3개월 평균임금의 60%로 동일하게 산정됩니다.</p>',
      },
    ],
    cta: { text: '반복수급 제한 해당 여부 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 수급기간과 일수', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
      { label: '2회째 실업급여 신청', href: '/guide/unemployment/unemployment-rehire-second-claim' },
      { label: '부정수급 유형 5가지', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
    ],
  },

  // ── 7. 온라인 강의 구직활동 인정 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-online-class-job-search',
    keyword: '온라인 강의 구직활동 인정',
    questionKeyword: '온라인 강의 수강도 구직활동으로 인정되나요?',
    ctaKeyword: '온라인 강의 구직활동 인정 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 구직활동 인정받는 4가지 조건 | 로앤가이드',
      description:
        '실업급여 받으면서 온라인 강의를 구직활동으로 인정받고 싶다면, 인정 기준과 신고 방법을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받으면서 재취업을 준비하고 있는데, 온라인으로 직무 관련 강의를 듣고 있습니다. 고용센터에 실업인정 받을 때 이 온라인 강의가 구직활동으로 인정되는지 궁금합니다. 모든 온라인 강의가 인정되는 것은 아니고, 인정 기준이 있습니다. 어떤 강의가 인정되고 어떻게 신고해야 하는지 정리해보세요.</p>',
    sections: [
      {
        title: '구직활동으로 인정되는 온라인 강의 기준',
        content:
          '<p><strong style="color:#1e3a5f">모든 온라인 강의가 구직활동으로 인정되는 것은 아닙니다. 아래 조건을 충족해야 합니다.</strong></p>\n<ol>\n<li><strong>직업능력개발 관련 강의</strong> — 구직 분야와 관련된 직무교육, 자격증 준비, 직업훈련이어야 합니다. 취미·교양 강의는 인정되지 않습니다.</li>\n<li><strong>공인된 교육기관의 강의</strong> — HRD-Net(직업훈련포털), K-MOOC, 한국고용정보원 등 공인된 기관의 강의가 인정됩니다. 일반 유튜브 강의는 인정되지 않습니다.</li>\n<li><strong>수강 완료 증빙</strong> — 수강완료증, 수료증, 학습 이력 등 수강 사실을 증명할 수 있어야 합니다.</li>\n<li><strong>실업인정 기간 중 수강</strong> — 해당 실업인정 기간(보통 1~4주) 내에 수강한 강의여야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: HRD-Net이나 K-MOOC에서 직무 관련 강의를 수강하면 구직활동으로 인정받기 가장 확실합니다.</blockquote>',
      },
      {
        title: '온라인 강의 구직활동 신고 방법',
        content:
          '<p><strong style="color:#1e3a5f">실업인정일에 온라인 강의 수강을 구직활동으로 신고하는 방법을 확인하세요.</strong></p>\n<ol>\n<li><strong>수강 내역 기록</strong> — 강의명, 교육기관명, 수강 기간, 총 수강시간을 기록해두세요.</li>\n<li><strong>수강완료증 출력</strong> — 해당 교육기관에서 수강완료증 또는 수료증을 발급받으세요.</li>\n<li><strong>재취업활동계획서에 기재</strong> — 실업인정 시 제출하는 재취업활동계획서의 구직활동 내역란에 온라인 강의 수강 내용을 기재합니다.</li>\n<li><strong>증빙서류 첨부</strong> — 수강완료증을 스캔하거나 캡처하여 온라인 신고 시 첨부하세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 온라인 강의가 구직활동으로 인정되는지 AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">강의명과 교육기관을 입력하면 인정 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '온라인 강의만으로 구직활동이 충분한가',
        content:
          '<p><strong style="color:#1e3a5f">온라인 강의 수강은 구직활동 1회로 인정되지만, 매번 같은 방식만 사용하면 주의를 받을 수 있습니다.</strong></p>\n<p>고용센터는 다양한 구직활동을 권장합니다. 온라인 강의 외에도 입사지원, 채용박람회 참석, 직업상담 등을 병행하는 것이 좋습니다.</p>\n<ul>\n<li><strong>1~2차 실업인정</strong> — 온라인 강의 수강만으로도 충분히 인정됩니다.</li>\n<li><strong>3차 이후</strong> — 입사지원, 면접 참석 등 적극적 구직활동을 병행하세요.</li>\n<li><strong>직업훈련 수강</strong> — 고용센터 지정 직업훈련 과정에 참여하면 훈련연장급여도 받을 수 있습니다.</li>\n</ul>',
      },
      {
        title: '인정되지 않는 구직활동 사례',
        content:
          '<p><strong style="color:#1e3a5f">다음과 같은 활동은 구직활동으로 인정되지 않으니 주의하세요.</strong></p>\n<ul>\n<li><strong>취미·교양 강의</strong> — 요리, 미술, 음악 등 직무와 무관한 강의는 인정되지 않습니다.</li>\n<li><strong>단순 영상 시청</strong> — 유튜브 강의, 무료 영상 콘텐츠 시청은 수료증이 발급되지 않으므로 인정이 어렵습니다.</li>\n<li><strong>수강 증빙이 불가능한 강의</strong> — 수강완료증이나 수료증이 발급되지 않는 강의는 증빙이 어려워 인정받기 힘듭니다.</li>\n<li><strong>동일 강의 반복 수강</strong> — 같은 강의를 여러 번 수강하는 것은 1회만 인정됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직활동 진정성과 부정수급',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 해외 체류 중 제3자가 대리로 재취업 노력신고를 한 것은 구직활동의 진정성이 없는 부정수급에 해당한다고 판시했습니다. 구직활동은 반드시 본인이 직접 수행하고 신고해야 합니다.',
        takeaway:
          '온라인 강의도 본인이 직접 수강해야 합니다. 타인이 대신 수강하거나 허위 수료증을 제출하면 부정수급으로 처벌받을 수 있습니다. 수강 기록과 수료증을 정확히 보관하세요.',
      },
    ],
    faq: [
      {
        question: 'HRD-Net 외에 어떤 사이트의 강의가 인정되나요?',
        answer:
          '<p>K-MOOC, 한국산업인력공단 온라인교육, 대한상공회의소 온라인교육, 공공기관 운영 직무교육 등이 인정됩니다. 관할 고용센터에 미리 문의하면 정확한 인정 여부를 확인할 수 있습니다.</p>',
      },
      {
        question: '한 번의 실업인정 기간에 온라인 강의 몇 개까지 인정되나요?',
        answer:
          '<p>구직활동 인정 횟수는 실업인정 기간별로 1~2회 이상이면 됩니다. 온라인 강의 여러 개를 수강했어도 같은 기간이면 1~2회로 인정됩니다. 다른 유형의 구직활동과 병행하면 더 좋습니다.</p>',
      },
      {
        question: '자격증 시험 공부를 위한 인강도 인정되나요?',
        answer:
          '<p>직무 관련 자격증 준비를 위한 교육은 인정될 수 있습니다. 다만 일반 사설 인강보다는 HRD-Net이나 공인 교육기관의 강의를 수강하고 수료증을 받는 것이 확실합니다.</p>',
      },
      {
        question: '온라인 강의 수강 시간이 짧아도 인정되나요?',
        answer:
          '<p>특별한 최소 시간 기준은 없지만, 너무 짧은 강의(예: 10분)만 수강하면 구직활동의 성실성을 의심받을 수 있습니다. 1시간 이상의 체계적인 강의를 수강하는 것이 좋습니다.</p>',
      },
    ],
    cta: { text: '구직활동 인정 여부 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '실업인정 출석 누락 대처', href: '/guide/unemployment/unemployment-missed-attendance' },
      { label: '직업훈련 수당', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '부정수급 유형 5가지', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
    ],
  },

  // ── 8. 통근곤란 자발적 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-commute-hardship-quit',
    keyword: '통근곤란 자발적 퇴사 실업급여',
    questionKeyword: '통근이 너무 힘들어서 퇴사해도 실업급여를 받을 수 있나요?',
    ctaKeyword: '통근곤란 퇴사 실업급여 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '통근곤란 퇴사 실업급여 받는 3가지 인정 기준 | 로앤가이드',
      description:
        '회사가 너무 멀어서 출퇴근이 힘들어 퇴사를 고민 중이라면, 통근곤란 사유로 실업급여를 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>회사가 갑자기 사무실을 이전했는데, 편도 통근시간이 2시간이 넘어 출퇴근이 너무 힘들어졌습니다. 자발적으로 퇴사하면 실업급여를 못 받을까 봐 참고 다니고 있습니다. 하지만 통근곤란은 고용보험법에서 정당한 이직 사유로 인정되는 경우가 있어, 조건만 갖추면 자발적 퇴사라도 실업급여를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '통근곤란 사유 인정 기준 3가지',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에서 통근곤란을 정당한 이직 사유로 인정하는 기준을 확인하세요.</strong></p>\n<ol>\n<li><strong>사업장 이전으로 통근이 곤란한 경우</strong> — 회사가 이전하여 왕복 통근시간이 3시간 이상이 되거나, 대중교통 수단이 없어 통근이 사실상 불가능한 경우입니다.</li>\n<li><strong>근로자의 주거 이전이 불가피한 경우</strong> — 배우자의 전근, 부모 간병 등 본인의 의사와 무관하게 거주지를 옮겨야 해서 통근이 곤란해진 경우입니다.</li>\n<li><strong>통근 비용이 과도한 경우</strong> — 대중교통이 없어 자차 통근만 가능한데 교통비가 임금의 상당 부분을 차지하는 경우도 인정될 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 왕복 통근시간 3시간 이상이 핵심 기준입니다. 사업장 이전이나 불가피한 주거 이전을 증빙할 수 있어야 합니다.</blockquote>',
      },
      {
        title: '통근곤란 증빙서류 준비',
        content:
          '<p><strong style="color:#1e3a5f">통근곤란 사유로 실업급여를 신청하려면 아래 증빙서류를 반드시 준비하세요.</strong></p>\n<ul>\n<li><strong>사업장 이전 확인서</strong> — 회사 이전 공문, 사업자등록증 변경 내역 등으로 사업장 이전 사실을 증빙합니다.</li>\n<li><strong>통근시간 증빙</strong> — 네이버 지도, 카카오맵 등에서 대중교통 경로 검색 결과를 캡처하세요. 출발지(자택)에서 도착지(사업장)까지의 편도 소요시간이 표시되어야 합니다.</li>\n<li><strong>주민등록등본</strong> — 현재 거주지를 확인하기 위한 서류입니다.</li>\n<li><strong>주거 이전 사유 증빙(해당 시)</strong> — 배우자 전근 발령, 부모 간병 사실 확인서 등을 준비하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>통근곤란 사유 인정 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">통근시간, 이전 사유, 거주지 정보를 입력하면 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '통근곤란 퇴사 전 확인할 것 3가지',
        content:
          '<p><strong style="color:#1e3a5f">통근곤란 사유로 퇴사하기 전에 반드시 아래 사항을 확인하세요.</strong></p>\n<ul>\n<li><strong>회사에 배치전환 요청</strong> — 사업장 이전으로 통근이 곤란해졌다면 먼저 회사에 가까운 지점이나 재택근무 전환을 요청하세요. 회사가 거부한 사실이 있으면 정당한 이직 사유로 인정받기 더 쉽습니다.</li>\n<li><strong>이직확인서 기재 사항 확인</strong> — 퇴사 시 이직확인서에 "사업장 이전에 따른 통근곤란"이 이직 사유로 기재되는지 회사와 미리 협의하세요.</li>\n<li><strong>3개월 내 퇴사 권장</strong> — 사업장 이전 후 너무 오래 근무하면 "통근곤란을 감수한 것"으로 판단될 수 있습니다. 이전 후 3개월 이내에 퇴사하는 것이 인정 가능성이 높습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이직사유 진정성 판단 기준',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 실업급여 수급 과정에서 절차적 요건(본인 직접 신고)을 갖추지 못한 경우 부정수급에 해당한다고 판시했습니다. 이직사유와 구직활동 모두 진정성이 요구됩니다.',
        takeaway:
          '통근곤란 사유로 퇴사할 때는 이직사유의 진정성을 증빙할 수 있는 서류를 미리 확보하세요. 단순히 "멀어서 그만뒀다"는 주장만으로는 부족하고, 구체적인 통근시간과 이전 사실을 객관적으로 증명해야 합니다.',
      },
    ],
    faq: [
      {
        question: '편도 1시간 30분이면 통근곤란으로 인정되나요?',
        answer:
          '<p>일반적으로 왕복 3시간(편도 1시간 30분) 이상이 기준입니다. 편도 1시간 30분이면 왕복 3시간이므로 인정될 가능성이 있습니다. 다만 대중교통 여건, 야간근무 여부 등 개별 사정에 따라 달라질 수 있습니다.</p>',
      },
      {
        question: '사업장 이전이 아니라 원래 먼 곳에 입사한 경우에도 인정되나요?',
        answer:
          '<p>처음부터 먼 곳에 입사한 경우에는 통근곤란 사유로 인정받기 어렵습니다. 입사 시점에 이미 통근 거리를 알고 근무를 시작했기 때문입니다. 다만 입사 후 배우자 전근 등으로 불가피하게 거주지를 옮긴 경우는 인정될 수 있습니다.</p>',
      },
      {
        question: '통근곤란 사유로 퇴사하면 수급제한 기간이 있나요?',
        answer:
          '<p>통근곤란이 정당한 이직 사유로 인정되면 수급제한 기간 없이 7일 대기기간 후 바로 구직급여가 지급됩니다. 정당한 사유가 인정되지 않으면 자발적 퇴사로 분류되어 수급자격 자체가 제한될 수 있습니다.</p>',
      },
      {
        question: '재택근무가 가능한 직종인데 회사가 출근을 강제하면 통근곤란이 인정되나요?',
        answer:
          '<p>재택근무 가능 여부는 회사의 재량이므로, 회사가 출근을 요구하는 것 자체는 부당하지 않습니다. 다만 사업장 이전 후 왕복 3시간 이상 통근이 필요한 상황에서 재택근무 전환을 요청했으나 거부당한 사실은 정당한 이직 사유를 보강하는 증거가 될 수 있습니다.</p>',
      },
      {
        question: '통근곤란 사유 퇴사 후 이직확인서에 "자발적 퇴사"로 기재되면 어떻게 하나요?',
        answer:
          '<p>고용센터에 이직확인서 기재 내용에 이의를 제기하세요. 통근곤란 증빙서류(지도 경로, 사업장 이전 확인서 등)를 제출하면 고용센터가 실질적 이직 사유를 검토하여 수급자격을 판단합니다.</p>',
      },
    ],
    cta: { text: '통근곤란 퇴사 실업급여 가능 여부 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '자발적 퇴직 실업급여 가능 사유', href: '/guide/unemployment/voluntary-quit-approved-case-types' },
      { label: '자발적 퇴직 수급 가능 사례', href: '/guide/unemployment/voluntary-resignation-benefit-eligible-cases' },
      { label: '이직확인서 분쟁 해결', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '고용센터 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },
];
