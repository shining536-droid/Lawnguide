import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 5개 (batch27)
//
// 1. unemployment-50plus-extended-period
//    이 페이지는 [50세 이상 또는 장기가입 근로자]의 [실업급여 수급기간이 더 긴지 모르는 상황]에서
//    [연령·가입기간별 수급기간 확인과 최대 270일 수급 준비]를 돕는 페이지다.
//
// 2. unemployment-gig-platform-worker
//    이 페이지는 [배달·대리운전 등 플랫폼 노동자]의 [고용보험 미가입 상태에서 일을 잃은 상황]에서
//    [플랫폼 노동자 고용보험 특례 적용과 실업급여 신청]을 돕는 페이지다.
//
// 3. unemployment-training-allowance
//    이 페이지는 [실업급여 수급 중인 구직자]의 [직업훈련도 받고 수당도 받고 싶은 상황]에서
//    [훈련연장급여·직업능력개발수당 수급 조건과 신청]을 돕는 페이지다.
//
// 4. unemployment-appeal-rejection
//    이 페이지는 [실업급여 수급자격 불인정 처분을 받은 근로자]의 [이의신청 방법을 모르는 상황]에서
//    [심사청구·재심사청구·행정소송 3단계 구제 절차]를 돕는 페이지다.
//
// 5. unemployment-missed-attendance
//    이 페이지는 [실업인정일에 출석하지 못한 구직자]의 [급여가 중단될까 불안한 상황]에서
//    [미출석 시 대처법과 사후 실업인정 절차]를 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch27Unemployment_1to5: SpokePage[] = [
  // ── 1. 50세 이상 실업급여 연장 기간 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-50plus-extended-period',
    keyword: '50세 이상 실업급여 수급기간',
    questionKeyword: '50세 넘으면 실업급여를 더 오래 받을 수 있나요?',
    ctaKeyword: '50세 이상 실업급여 기간 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '50세 이상 실업급여 수급기간 최대 270일 받는 법 | 로앤가이드',
      description:
        '50세 이상이거나 장애인이면 실업급여 수급기간이 최대 270일까지 늘어납니다. 연령·가입기간별 수급일수표를 지금 확인하세요.',
    },
    intro:
      '<p>20년 넘게 다니던 회사에서 권고사직을 받았습니다. 52세인데 재취업이 쉽지 않을 것 같아 걱정입니다. 다행히 50세 이상 근로자는 실업급여 수급기간이 일반 근로자보다 길어, 최대 270일까지 받을 수 있습니다. 내 나이와 가입기간에 맞는 정확한 수급일수를 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 나이·고용보험 가입기간 확인',
      '2단계: 수급일수표에서 내 기간 확인',
      '3단계: 수급자격 인정신청',
      '4단계: 실업인정 및 급여 수령',
    ],
    sections: [
      {
        title: '50세 이상·장애인 수급기간이 더 긴 이유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제50조는 50세 이상 또는 장애인 근로자의 재취업 어려움을 고려해 수급기간을 연장합니다.</strong></p>\n<p>일반 근로자의 최대 수급기간은 240일이지만, 50세 이상 또는 장애인은 최대 270일까지 가능합니다. 구체적인 수급일수는 나이와 고용보험 피보험기간에 따라 달라집니다.</p>\n<table style="width:100%;border-collapse:collapse;margin:16px 0">\n<tr style="background:#f0f4f8"><th style="padding:8px;border:1px solid #ddd">피보험기간</th><th style="padding:8px;border:1px solid #ddd">1년 미만</th><th style="padding:8px;border:1px solid #ddd">1~3년</th><th style="padding:8px;border:1px solid #ddd">3~5년</th><th style="padding:8px;border:1px solid #ddd">5~10년</th><th style="padding:8px;border:1px solid #ddd">10년 이상</th></tr>\n<tr><td style="padding:8px;border:1px solid #ddd"><strong>50세 이상·장애인</strong></td><td style="padding:8px;border:1px solid #ddd">120일</td><td style="padding:8px;border:1px solid #ddd">180일</td><td style="padding:8px;border:1px solid #ddd">210일</td><td style="padding:8px;border:1px solid #ddd">240일</td><td style="padding:8px;border:1px solid #ddd">270일</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">50세 미만</td><td style="padding:8px;border:1px solid #ddd">120일</td><td style="padding:8px;border:1px solid #ddd">150일</td><td style="padding:8px;border:1px solid #ddd">180일</td><td style="padding:8px;border:1px solid #ddd">210일</td><td style="padding:8px;border:1px solid #ddd">240일</td></tr>\n</table>',
      },
      {
        title: '수급일수 확인 3단계',
        content:
          '<p><strong style="color:#1e3a5f">내 수급일수를 정확히 확인하려면 아래 3가지를 먼저 파악하세요.</strong></p>\n<ol>\n<li><strong>이직일 기준 나이 확인</strong> — 50세 이상 여부는 이직일(퇴직일) 기준입니다. 퇴직일에 만 50세 이상이면 연장 수급일수가 적용됩니다.</li>\n<li><strong>고용보험 피보험기간 확인</strong> — 고용보험 가입 총 기간을 확인합니다. 여러 직장에서 가입한 기간을 합산할 수 있습니다. 고용보험 홈페이지나 1350에서 확인 가능합니다.</li>\n<li><strong>1일 수급액 확인</strong> — 퇴직 전 3개월 평균임금의 60%가 1일 수급액이며, 상한액(1일 66,000원)과 하한액(최저임금의 80% × 1일 소정근로시간)이 적용됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 실업급여 수급일수와 총액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">나이, 가입기간, 평균임금만 입력하면 수급기간과 총 수령액을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수급기간을 더 연장할 수 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">특정 조건에 해당하면 수급기간을 추가로 연장할 수 있습니다.</strong></p>\n<ul>\n<li><strong>훈련연장급여</strong> — 직업안정기관장이 지시한 직업훈련을 받는 기간 동안 최대 2년까지 연장됩니다.</li>\n<li><strong>개별연장급여</strong> — 수급 종료 후에도 취업이 특히 곤란한 경우 60일 범위 내에서 연장됩니다.</li>\n<li><strong>특별연장급여</strong> — 실업률이 급격히 높아진 경우 고용노동부 장관이 60일 범위 내에서 연장을 지시할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 기본 수급기간이 끝나더라도 훈련이나 개별 연장으로 추가 수급이 가능합니다. 수급 종료 전에 관할 고용센터에 문의하세요.</blockquote>',
      },
      {
        title: '50세 이상 재취업 지원 제도',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 외에도 50세 이상을 위한 재취업 지원 프로그램이 있습니다.</strong></p>\n<ul>\n<li><strong>재취업지원서비스</strong> — 300인 이상 사업장에서 1년 이상 근무 후 비자발적으로 이직한 50세 이상 근로자는 재취업지원서비스를 받을 수 있습니다.</li>\n<li><strong>신중년 경력형 일자리</strong> — 고용노동부가 운영하는 50+ 맞춤형 일자리 연계 프로그램입니다.</li>\n<li><strong>조기재취업수당</strong> — 수급기간의 1/2 이상을 남기고 재취업하면 남은 수급일수의 1/2을 일시에 지급받습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입 기간 산정과 수급자격',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 별정직·임기제 공무원의 고용보험 가입신청기간 3개월이 소속기관장의 의무 해태로 경과한 경우, 가입대상 공무원이 그 사유를 안 날부터 다시 3개월 내에 가입신청을 할 수 있다고 판시했습니다. 가입기간이 수급일수에 직접 영향을 미치므로, 정당한 가입 기간을 확보하는 것이 중요합니다.',
        takeaway:
          '비슷한 상황이라면 고용보험 가입 기간이 누락되었거나 짧게 산정된 경우, 이의를 제기하여 올바른 가입 기간을 인정받으세요. 수급일수에 직접 영향을 미칩니다.',
      },
    ],
    faq: [
      {
        question: '만 50세 기준은 언제입니까?',
        answer:
          '<p>이직일(퇴직일) 기준으로 만 50세 이상이면 됩니다. 생년월일과 퇴직일을 비교하여 판단합니다.</p>',
      },
      {
        question: '장애인도 50세 이상과 동일한 수급기간을 받나요?',
        answer:
          '<p>네, 고용보험법상 장애인은 나이에 관계없이 50세 이상과 동일한 수급일수 테이블이 적용됩니다.</p>',
      },
      {
        question: '여러 직장의 가입기간을 합산할 수 있나요?',
        answer:
          '<p>네, 이전 직장에서 실업급여를 받지 않은 기간의 피보험기간은 합산됩니다. 다만 이전에 실업급여를 수급한 기간은 합산에서 제외됩니다.</p>',
      },
      {
        question: '실업급여 1일 상한액은 얼마인가요?',
        answer:
          '<p>2026년 기준 1일 상한액은 66,000원입니다. 하한액은 최저임금의 80% × 1일 소정근로시간입니다.</p>',
      },
    ],
    cta: { text: '내 실업급여 수급일수와 총액 AI로 즉시 계산하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴직도 실업급여 가능?', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '조기재취업수당 안내', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
    ],
  },

  // ── 2. 플랫폼 노동자 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-gig-platform-worker',
    keyword: '플랫폼 노동자 실업급여 자격',
    questionKeyword: '배달 대리운전 플랫폼 노동자도 실업급여 받을 수 있나요?',
    ctaKeyword: '플랫폼 노동자 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '배달·대리운전 플랫폼 노동자 실업급여 자격 확인법 | 로앤가이드',
      description:
        '2022년부터 플랫폼 노동자도 고용보험에 가입할 수 있습니다. 배달·대리운전·퀵서비스 실업급여 자격 요건을 지금 확인하세요.',
    },
    intro:
      '<p>3년 동안 배달 플랫폼에서 일했는데 갑자기 계정이 정지됐습니다. 고용보험에 가입되어 있는지도 모르겠고, 실업급여를 받을 수 있는지도 막막합니다. 2022년 1월부터 특수형태근로종사자도 고용보험에 가입할 수 있게 되면서, 플랫폼 노동자의 실업급여 신청 길이 열렸습니다.</p>',
    timelineSteps: [
      '1단계: 고용보험 가입 여부 확인',
      '2단계: 수급자격 요건 충족 여부 확인',
      '3단계: 이직확인서 발급 요청',
      '4단계: 관할 고용센터에 수급자격 신청',
    ],
    sections: [
      {
        title: '플랫폼 노동자 고용보험 적용 현황',
        content:
          '<p><strong style="color:#1e3a5f">2022년 1월부터 12개 직종의 특수형태근로종사자에게 고용보험이 적용됩니다.</strong></p>\n<p>적용 대상에는 배달 라이더, 대리운전 기사, 퀵서비스 기사, 가사서비스 종사자 등이 포함됩니다. 단, 월 보수가 80만원 미만이거나 65세 이후 새로 종사하는 경우에는 적용 제외될 수 있습니다.</p>\n<ul>\n<li><strong>가입 의무</strong> — 플랫폼 사업주(노무제공 계약의 상대방)가 고용보험 가입 신고 의무를 집니다.</li>\n<li><strong>보험료 부담</strong> — 사업주와 노무제공자가 각각 50%씩 부담합니다.</li>\n<li><strong>적용 제외 신청</strong> — 노무제공자가 원하면 적용 제외를 신청할 수 있으나, 이 경우 실업급여를 받을 수 없습니다.</li>\n</ul>',
      },
      {
        title: '실업급여 수급 요건',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼 노동자의 실업급여 수급 요건은 일반 근로자와 유사하지만 일부 차이가 있습니다.</strong></p>\n<ol>\n<li><strong>이직일 이전 24개월 중 12개월 이상 보험료 납부</strong> — 일반 근로자(18개월 중 180일)보다 기간이 깁니다.</li>\n<li><strong>비자발적 이직</strong> — 본인 의사가 아닌 사유로 이직해야 합니다. 계정 정지, 계약 해지, 소득 감소(직전 1년 평균 대비 25% 이상) 등이 해당합니다.</li>\n<li><strong>적극적 구직 활동</strong> — 재취업 의사와 능력이 있어야 합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>플랫폼 노동자 실업급여 자격, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">가입 기간, 이직 사유, 소득을 입력하면 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고용보험 미가입 시 대처법',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼 사업주가 고용보험 가입 신고를 하지 않은 경우에도 실업급여를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험자격 확인 청구</strong> — 근로복지공단에 피보험자격 확인을 청구하면 소급하여 가입 처리될 수 있습니다.</li>\n<li><strong>고용노동부 신고</strong> — 사업주의 가입의무 위반을 신고하면 과태료가 부과되고, 소급 가입이 가능합니다.</li>\n<li><strong>증거 확보</strong> — 앱 배달 기록, 수입 내역, 계약서 등을 보관하세요.</li>\n</ul>',
      },
      {
        title: '신청 절차와 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">관할 고용센터에 아래 서류를 가지고 방문하세요.</strong></p>\n<ul>\n<li>신분증</li>\n<li>이직확인서(플랫폼 사업주 발급) — 발급을 거부하면 고용센터에 신고합니다.</li>\n<li>통장 사본</li>\n<li>플랫폼 앱 이용 기록 또는 소득 내역(필요시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하로 인한 자발적 이직도 수급자격 인정',
        summary:
          '서울행정법원 2014구합2270 사건(서울행법, 2014.07.03 선고)에서 법원은 부서 이동 지시로 월 평균 임금이 46% 이상 하락할 것이 확정된 경우, 이를 이유로 퇴직하더라도 정당한 이직 사유에 해당하여 실업급여 수급자격이 인정된다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 플랫폼 수수료 인상이나 배달 단가 인하로 소득이 25% 이상 감소한 경우에도 비자발적 이직으로 인정받을 수 있습니다. 소득 감소 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '배달 앱에서 계정이 정지된 것도 비자발적 이직인가요?',
        answer:
          '<p>플랫폼 사업주에 의한 계정 정지나 계약 해지는 비자발적 이직으로 볼 수 있습니다. 계정 정지 알림 캡처 등 증거를 보관하세요.</p>',
      },
      {
        question: '여러 플랫폼에서 동시에 일했는데 가입기간은 어떻게 계산하나요?',
        answer:
          '<p>각 플랫폼에서의 가입 기간이 합산됩니다. 다만 동일 기간에 중복 가입된 부분은 한 번만 산정됩니다.</p>',
      },
      {
        question: '적용 제외를 신청했었는데 지금이라도 가입할 수 있나요?',
        answer:
          '<p>적용 제외 철회는 가능하지만, 철회 이전 기간은 가입 기간으로 인정되지 않습니다. 향후를 위해 빠르게 철회하는 것이 유리합니다.</p>',
      },
      {
        question: '플랫폼 노동자 실업급여 금액은 어떻게 계산하나요?',
        answer:
          '<p>이직 전 12개월간의 보수 총액을 기준으로 산정합니다. 1일 수급액은 이직 전 1일 평균보수의 60%이며, 상한액(66,000원)과 하한액이 적용됩니다.</p>',
      },
    ],
    cta: { text: '플랫폼 노동자 실업급여 수급 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '고용보험 미가입 사업장 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '일용직 실업급여 자격', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
    ],
  },

  // ── 3. 실업급여 중 직업훈련 수당 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-training-allowance',
    keyword: '실업급여 직업훈련 수당 수령',
    questionKeyword: '실업급여 받으면서 직업훈련도 받으면 수당이 추가되나요?',
    ctaKeyword: '실업급여 훈련수당 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 수급 중 직업훈련 수당 추가 수령 방법 | 로앤가이드',
      description:
        '실업급여를 받으면서 직업훈련까지 받으면 훈련연장급여와 직업능력개발수당을 추가로 받을 수 있습니다. 신청 조건을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받고 있는데 수급기간 안에 재취업이 어려울 것 같습니다. 직업훈련을 받으면 수급기간이 연장되고 수당도 추가로 받을 수 있다고 들었는데, 구체적인 조건이 궁금합니다. 훈련연장급여와 직업능력개발수당 제도를 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 훈련과정 선택 (직업안정기관장 지시)',
      '2단계: 훈련연장급여 신청',
      '3단계: 훈련 수강 및 급여 수령',
      '4단계: 훈련 종료 후 재취업 활동',
    ],
    sections: [
      {
        title: '훈련연장급여란?',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 수급기간이 끝나더라도 직업안정기관장이 지시한 직업훈련을 받는 동안에는 훈련연장급여를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>지급 기간</strong> — 직업훈련 기간 동안 최대 2년까지 연장됩니다.</li>\n<li><strong>지급 금액</strong> — 구직급여 일액의 100%가 지급됩니다.</li>\n<li><strong>조건</strong> — 직업안정기관의 장이 취업을 위해 특히 필요하다고 인정하여 지시한 훈련이어야 합니다. 본인이 임의로 선택한 훈련은 해당되지 않습니다.</li>\n</ul>',
      },
      {
        title: '직업능력개발수당',
        content:
          '<p><strong style="color:#1e3a5f">직업훈련을 받는 수급자에게는 교통비·식비 명목의 직업능력개발수당이 추가 지급됩니다.</strong></p>\n<ul>\n<li><strong>지급 대상</strong> — 직업안정기관장이 알선한 직업능력개발 훈련을 받는 수급자</li>\n<li><strong>지급 기준</strong> — 훈련 출석일수에 따라 산정되며, 교통비·식대 등 실비를 보전합니다.</li>\n<li><strong>별도 신청 불요</strong> — 훈련연장급여를 받으면 자동으로 함께 지급됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>나에게 맞는 훈련과정과 수당, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 수급 상태와 희망 직종을 입력하면 적합한 훈련과 추가 수당을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '훈련과정 선택 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">훈련연장급여를 받으려면 직업안정기관장의 훈련 지시가 필수입니다.</strong></p>\n<ol>\n<li><strong>관할 고용센터 방문</strong> — 먼저 담당 상담사에게 훈련 희망을 알립니다.</li>\n<li><strong>훈련과정 추천</strong> — 상담사가 취업 가능성을 고려하여 적합한 과정을 추천합니다.</li>\n<li><strong>훈련 지시서 발급</strong> — 직업안정기관장의 훈련 지시서를 받아야 합니다.</li>\n<li><strong>출석 의무</strong> — 훈련 출석률 80% 이상을 유지해야 급여가 지급됩니다.</li>\n</ol>',
      },
      {
        title: '훈련 중 알바는 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">훈련 중에도 월 60시간 미만, 3개월 미만의 취업활동은 가능합니다.</strong></p>\n<p>다만 취업 사실을 신고해야 하며, 소득 금액에 따라 급여가 감액될 수 있습니다. 취업활동 시간이 훈련 출석에 영향을 주지 않도록 주의하세요.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 부정수급 주의사항',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 구직급여 수급자가 해외 체류 중 형에게 대리로 재취업 노력신고를 시킨 것은 "거짓이나 부정한 방법"으로 구직급여를 받은 것에 해당한다고 판시했습니다. 본인이 직접 실업인정을 받아야 하며, 대리 신청은 부정수급에 해당할 소지가 있습니다.',
        takeaway:
          '비슷한 상황이라면 훈련 수강 중에도 실업인정은 가능한 한 본인이 직접 해야 합니다. 훈련 출석과 실업인정 일정이 겹치면 미리 고용센터에 일정 변경을 요청하세요.',
      },
    ],
    faq: [
      {
        question: '수급기간이 끝나기 전에 훈련을 시작해야 하나요?',
        answer:
          '<p>네, 수급기간 만료 전에 훈련 지시를 받고 훈련을 시작해야 훈련연장급여로 이어집니다. 수급기간 만료 후에는 신청할 수 없으므로 미리 준비하세요.</p>',
      },
      {
        question: '어떤 훈련과정이 훈련연장급여 대상인가요?',
        answer:
          '<p>직업안정기관장이 지시한 과정만 해당됩니다. HRD-Net(직업훈련포털)에서 "국민내일배움카드" 훈련과정을 검색하고, 고용센터 상담사에게 훈련 지시를 요청하세요.</p>',
      },
      {
        question: '훈련 중에 취업이 결정되면 어떻게 되나요?',
        answer:
          '<p>취업일 전날까지 훈련연장급여가 지급되고, 남은 수급일수가 있으면 조기재취업수당을 받을 수 있습니다.</p>',
      },
      {
        question: '훈련 출석률이 80% 미만이면 어떻게 되나요?',
        answer:
          '<p>출석률 80% 미만이면 해당 기간의 훈련연장급여가 지급되지 않을 수 있습니다. 정당한 사유(질병 등)가 있으면 증빙서류를 제출하세요.</p>',
      },
    ],
    cta: { text: '실업급여 훈련연장 자격 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '50세 이상 수급기간 연장', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '실업급여 수급 중 알바', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
    ],
  },

  // ── 4. 실업급여 불승인 이의신청 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-appeal-rejection',
    keyword: '실업급여 불승인 이의신청 절차',
    questionKeyword: '실업급여가 불승인됐는데 이의신청할 수 있나요?',
    ctaKeyword: '실업급여 불승인 이의신청 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 불승인 이의신청 3단계 구제 절차 | 로앤가이드',
      description:
        '실업급여 수급자격이 불인정됐다면 심사청구·재심사청구·행정소송으로 구제받을 수 있습니다. 3단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴사 후 실업급여를 신청했는데 "수급자격 불인정"이라는 통보를 받았습니다. 자발적 퇴직이라는 이유인데, 실제로는 회사의 부당한 근로조건 변경 때문에 어쩔 수 없이 나온 것입니다. 이의를 제기할 수 있는 방법을 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 불인정 사유 확인',
      '2단계: 심사청구 (처분 통보 후 90일 이내)',
      '3단계: 재심사청구 또는 행정소송',
    ],
    sections: [
      {
        title: '불승인 사유별 이의 가능성',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 불승인 사유에 따라 이의신청 성공 가능성이 달라집니다.</strong></p>\n<ul>\n<li><strong>"자발적 퇴직"으로 분류된 경우</strong> — 실제로는 근로조건 저하, 임금 체불, 직장 내 괴롭힘 등으로 퇴직했다면 정당한 이직 사유에 해당할 수 있습니다. 증거를 확보하면 이의신청 성공 가능성이 높습니다.</li>\n<li><strong>"피보험기간 부족"인 경우</strong> — 가입 기간이 누락되었거나 사업주가 신고를 하지 않은 경우 피보험자격 확인 청구로 기간을 소급 인정받을 수 있습니다.</li>\n<li><strong>"구직 노력 부족"인 경우</strong> — 실업인정 시 구직활동 증빙이 부족했다면, 추가 증빙을 제출하여 이의신청할 수 있습니다.</li>\n</ul>',
      },
      {
        title: '3단계 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">불승인 처분에 대한 불복은 심사청구 → 재심사청구 → 행정소송 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>심사청구</strong> — 처분 통보일로부터 90일 이내에 고용보험심사관에게 심사청구를 합니다. 관할 지방고용노동청에 서면으로 접수합니다.</li>\n<li><strong>재심사청구</strong> — 심사 결과에 불복하면 결과 통보일로부터 90일 이내에 고용보험심사위원회에 재심사를 청구합니다.</li>\n<li><strong>행정소송</strong> — 재심사 결과에도 불복하면 행정법원에 처분 취소소송을 제기합니다. 재심사 결과 통보일로부터 90일 이내에 제기해야 합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>불승인 사유 분석과 이의신청 방법, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">불승인 통보 내용을 입력하면 이의신청 가능 여부와 필요 증거를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '심사청구서 작성 요령',
        content:
          '<p><strong style="color:#1e3a5f">심사청구서에는 불승인 처분이 부당한 구체적 이유를 기재합니다.</strong></p>\n<ul>\n<li><strong>처분의 내용</strong> — 불인정 처분의 일자, 내용, 사유를 적습니다.</li>\n<li><strong>불복 이유</strong> — 왜 정당한 이직 사유에 해당하는지 구체적으로 기술합니다.</li>\n<li><strong>증거자료 첨부</strong> — 퇴직 경위를 입증하는 서류(임금체불 증빙, 근로조건 변경 통보서, 직장 내 괴롭힘 신고 기록 등)를 첨부합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하로 인한 퇴직은 정당한 이직',
        summary:
          '서울행정법원 2014구합2270 사건(서울행법, 2014.07.03 선고)에서 법원은 부서 이동으로 월 평균 임금이 46% 이상 하락할 것이 확정된 근로자의 퇴직을 정당한 이직 사유로 인정하고, 고용보험 수급자격 불인정처분을 위법하다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 임금 감소, 근무지 변경, 직무 변경 등으로 근로조건이 현저히 저하된 증거를 확보하세요. 이를 이유로 한 퇴직은 정당한 이직 사유로 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '심사청구 기한 90일을 놓치면 어떻게 되나요?',
        answer:
          '<p>90일이 지나면 심사청구가 각하됩니다. 다만 천재지변 등 정당한 사유가 있으면 그 사유가 소멸한 날부터 14일 이내에 청구할 수 있습니다.</p>',
      },
      {
        question: '심사청구 중에 실업급여를 받을 수 있나요?',
        answer:
          '<p>심사청구가 인용되기 전까지는 급여가 지급되지 않습니다. 다만 심사가 인용되면 소급하여 급여가 지급됩니다.</p>',
      },
      {
        question: '행정소송 비용은 얼마나 드나요?',
        answer:
          '<p>행정소송 인지대는 약 1~2만원으로 저렴합니다. 대한법률구조공단에서 무료 소송 대리를 받을 수도 있습니다.</p>',
      },
      {
        question: '권고사직인데 자발적 퇴직으로 처리됐습니다. 어떻게 하나요?',
        answer:
          '<p>이직확인서에 "자발적 퇴직"으로 기재되어 있어도, 실제 퇴직 경위가 권고사직이었음을 입증하면 이의신청이 가능합니다. 사직서 작성 경위, 면담 기록, 동료 진술 등을 증거로 확보하세요.</p>',
      },
    ],
    cta: { text: '실업급여 불승인 이의신청 가능 여부 AI로 분석하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '권고사직 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '자발적 퇴직 수급 가능 유형', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
    ],
  },

  // ── 5. 실업인정일 미출석 대처 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-missed-attendance',
    keyword: '실업인정일 미출석 대처법',
    questionKeyword: '실업인정일에 출석 못 했는데 실업급여가 끊기나요?',
    ctaKeyword: '실업인정일 미출석 급여 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업인정일 미출석 시 급여 중단 방지 대처법 3가지 | 로앤가이드',
      description:
        '실업인정일에 출석하지 못했다면 급여가 중단될 수 있습니다. 사후 인정 방법과 정당한 사유 입증법을 지금 확인하세요.',
    },
    intro:
      '<p>급한 병원 진료 때문에 실업인정일에 고용센터에 못 갔습니다. 이대로 실업급여가 끊기는 건 아닌지 걱정됩니다. 정당한 사유가 있으면 사후 실업인정이 가능합니다. 미출석 시 대처법을 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 미출석 사유 정리',
      '2단계: 사후 실업인정 신청',
      '3단계: 증빙서류 제출',
    ],
    sections: [
      {
        title: '미출석 시 급여는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">실업인정일에 출석하지 않으면 해당 인정대상기간의 급여가 지급되지 않습니다.</strong></p>\n<p>다만 다음 실업인정일에 출석하면 미출석 기간의 급여도 소급 지급될 수 있습니다. 단, 정당한 사유 없이 2회 연속 미출석하면 수급자격이 상실될 수 있으므로 주의하세요.</p>',
      },
      {
        title: '사후 실업인정이 가능한 정당한 사유',
        content:
          '<p><strong style="color:#1e3a5f">아래 사유에 해당하면 사후 실업인정을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>질병·부상</strong> — 7일 이상 입원 치료 또는 의사의 안정 가료 지시</li>\n<li><strong>가족의 질병·사고</strong> — 본인이 직접 간호해야 하는 경우</li>\n<li><strong>취업면접</strong> — 채용 면접이 실업인정일과 겹친 경우</li>\n<li><strong>직업훈련 수강</strong> — 훈련 일정이 겹친 경우</li>\n<li><strong>천재지변</strong> — 태풍, 폭설 등으로 출석이 불가능한 경우</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미출석 사유가 정당한지 AI가 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">미출석 이유를 입력하면 사후 인정 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실업인정일 변경 방법',
        content:
          '<p><strong style="color:#1e3a5f">미리 알 수 있는 사유라면 사전에 실업인정일을 변경하는 것이 안전합니다.</strong></p>\n<ol>\n<li><strong>고용센터 전화(1350)</strong> — 실업인정일 전에 전화하여 일정 변경을 요청합니다.</li>\n<li><strong>인터넷 실업인정</strong> — 온라인으로 실업인정이 가능한 차수라면 고용보험 홈페이지에서 처리할 수 있습니다.</li>\n<li><strong>사전 방문</strong> — 실업인정일 전에 미리 방문하여 인정받을 수도 있습니다.</li>\n</ol>',
      },
      {
        title: '대리 출석은 절대 안 됩니다',
        content:
          '<p><strong style="color:#1e3a5f">가족이나 지인이 대신 실업인정을 받는 것은 부정수급에 해당할 소지가 있습니다.</strong></p>\n<p>대법원 판례에서도 본인이 직접 실업인정을 받지 않고 제3자가 대리 신청한 것은 "거짓이나 부정한 방법"에 해당하여 구직급여 반환 및 추가징수 대상이 된다고 확인했습니다. 어떤 사정이 있더라도 대리 출석은 절대 하지 마세요.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 대리 실업인정은 부정수급',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 구직급여 수급자가 일본 체류 중 형에게 인터넷으로 대리 재취업노력신고를 시킨 것은 "거짓이나 부정한 방법"에 해당하며, 해당 기간 수령한 구직급여의 지급제한 및 반환명령이 적법하다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 출석이 어려운 사정이 있어도 절대 대리 출석을 하지 마세요. 정당한 사유가 있으면 사후 실업인정을 받는 것이 합법적이고 안전한 방법입니다.',
      },
    ],
    faq: [
      {
        question: '1회 미출석으로 수급자격이 바로 상실되나요?',
        answer:
          '<p>1회 미출석으로 바로 상실되지는 않습니다. 해당 인정대상기간의 급여가 미지급될 뿐이며, 다음 실업인정일에 출석하면 소급 지급이 가능합니다. 다만 2회 연속 미출석은 수급자격 상실 사유가 될 수 있습니다.</p>',
      },
      {
        question: '인터넷 실업인정은 누구나 할 수 있나요?',
        answer:
          '<p>1·3차 실업인정은 고용센터 방문이 원칙이고, 2·4차부터 인터넷 실업인정이 가능한 경우가 있습니다. 담당 상담사에게 확인하세요.</p>',
      },
      {
        question: '사후 실업인정 증빙서류는 무엇을 내야 하나요?',
        answer:
          '<p>질병이면 진단서·진료확인서, 취업면접이면 면접확인서, 훈련이면 출석확인서 등 해당 사유를 증명하는 서류를 제출합니다.</p>',
      },
      {
        question: '미출석으로 미지급된 급여를 나중에 받을 수 있나요?',
        answer:
          '<p>정당한 사유를 증빙하면 소급 지급됩니다. 다만 수급기간 자체가 연장되는 것은 아니므로, 총 수급일수 내에서 처리됩니다.</p>',
      },
    ],
    cta: { text: '실업인정일 미출석 대처법 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 가이드', href: '/guide/unemployment' },
      { label: '실업급여 부정수급 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 수급 중 알바', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },
];
