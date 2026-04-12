import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 6개 (batch29-2)
//
// 7. unemployment-pension-simultaneous
//    이 페이지는 [국민연금 수령 중인 퇴직자]의 [연금과 실업급여를 동시에 받을 수 있는지 모르는 상황]에서
//    [동시 수급 가능 여부와 감액 기준 안내]를 돕는 페이지다.
//
// 8. unemployment-waiting-7days
//    이 페이지는 [실업급여 신청 직후 대기기간이 궁금한 구직자]의 [대기기간 7일 동안 무엇을 해야 하는지 모르는 상황]에서
//    [대기기간 의미·주의사항·이후 절차 안내]를 돕는 페이지다.
//
// 9. unemployment-reapply-after-expiry
//    이 페이지는 [실업급여 수급이 끝난 구직자]의 [재취업 후 다시 실직하면 또 받을 수 있는지 모르는 상황]에서
//    [재수급 요건과 반복수급 제한 기준 안내]를 돕는 페이지다.
//
// 10. unemployment-night-shift-change-quit
//     이 페이지는 [근로조건 일방변경(야간·교대 전환)으로 퇴사한 근로자]의 [자진퇴사인데 실업급여를 받을 수 있는지 모르는 상황]에서
//     [근로조건 변경 사유 정당한 이직 인정 기준]을 돕는 페이지다.
//
// 11. unemployment-company-no-separation
//     이 페이지는 [회사가 이직확인서를 안 내주는 근로자]의 [이직확인서 없이 실업급여를 신청할 수 있는지 모르는 상황]에서
//     [이직확인서 미발급 대처법과 직권 확인 절차]를 돕는 페이지다.
//
// 12. unemployment-short-term-worker
//     이 페이지는 [6개월 미만 단기 근로자]의 [짧은 근무로도 실업급여를 받을 수 있는지 모르는 상황]에서
//     [피보험기간 합산 방법과 단기 근로자 수급 가능성]을 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch29Unemployment2: SpokePage[] = [
  // ── 7. 국민연금과 실업급여 동시 수급 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-pension-simultaneous',
    keyword: '국민연금 실업급여 동시 수급',
    questionKeyword: '국민연금을 받고 있는데 실업급여도 받을 수 있나요?',
    ctaKeyword: '연금 실업급여 동시 수급 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '국민연금과 실업급여 동시 수급 가능 여부 총정리 | 로앤가이드',
      description:
        '국민연금을 받고 있는 상태에서 실직했다면, 실업급여와 동시 수급이 가능한지 감액 기준을 지금 확인하세요.',
    },
    intro:
      '<p>60세에 퇴직하고 국민연금 조기수령을 시작했는데, 재취업한 회사에서 또 실직했습니다. 국민연금을 이미 받고 있으면 실업급여를 못 받는 건지 걱정됩니다. 결론부터 말하면, 국민연금과 실업급여는 동시에 받을 수 있습니다. 다만 조건에 따라 실업급여가 감액될 수 있습니다.</p>',
    sections: [
      {
        title: '국민연금과 실업급여 동시 수급이 가능한 이유',
        content:
          '<p><strong style="color:#1e3a5f">국민연금과 고용보험은 별개의 사회보험입니다.</strong></p>\n<p>국민연금은 국민연금법, 실업급여는 고용보험법에 근거하여 지급됩니다. 법률상 두 급여의 동시 수급을 금지하는 규정은 없습니다.</p>\n<ul>\n<li><strong>동시 수급 원칙 가능</strong> — 국민연금 수급 사실을 고용센터에 별도로 신고할 의무도 없습니다.</li>\n<li><strong>산재보험과 차이</strong> — 산재보험 휴업급여와 실업급여는 동시 수급이 불가능하지만, 국민연금은 다릅니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 국민연금을 받고 있어도 실업급여 신청에 아무 문제가 없습니다. 두 급여를 동시에 받을 수 있습니다.</blockquote>',
      },
      {
        title: '실업급여 감액이 되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">65세 이상에서 새로 고용된 근로자는 실업급여 적용에서 제외됩니다.</strong></p>\n<p>국민연금 수급 자체로 실업급여가 감액되는 것은 아니지만, 나이에 따른 고용보험 적용 여부가 관건입니다.</p>\n<ul>\n<li><strong>65세 전 가입자</strong> — 65세 이전에 고용보험에 가입한 상태에서 계속 근무하다 퇴직하면, 65세 이후에도 실업급여 수급이 가능합니다.</li>\n<li><strong>65세 이후 신규 고용</strong> — 65세 이후에 새로 고용된 경우는 고용보험 실업급여 적용에서 제외됩니다.</li>\n<li><strong>구직급여일액 상한·하한</strong> — 구직급여 1일 상한액(66,000원)과 하한액은 연금 수령과 관계없이 동일하게 적용됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>국민연금+실업급여 동시 수급액, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">나이, 연금액, 퇴직 전 급여를 입력하면 총 수급 가능 금액을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '연금 수급자의 실업급여 극대화 전략',
        content:
          '<p><strong style="color:#1e3a5f">50세 이상은 수급기간이 더 길어 유리합니다.</strong></p>\n<ul>\n<li><strong>50세 이상 가산</strong> — 50세 이상 또는 장애인은 동일 피보험기간 대비 30일 더 많은 수급일수가 적용됩니다.</li>\n<li><strong>조기재취업수당 활용</strong> — 수급기간의 절반 이상을 남기고 재취업하면 남은 기간의 1/2을 일시금으로 받을 수 있습니다.</li>\n<li><strong>퇴직 후 12개월 이내 신청</strong> — 연금을 받으며 여유를 부리다 신청 기한을 놓치지 마세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조기재취업수당 부지급 처분 취소',
        summary:
          '행정법원 2009구합47705 사건에서 법원은 고용보험 수급자격자의 재취업 의사와 능력을 실질적으로 판단해야 한다고 보면서, 수급자격 관련 처분의 적법성을 심사했습니다.',
        takeaway:
          '국민연금 수급 중이라도 재취업 의사가 있으면 실업급여 수급자격에 문제가 없습니다. 구직활동 실적을 성실히 보고하세요.',
      },
    ],
    faq: [
      {
        question: '조기노령연금을 받고 있어도 실업급여를 받을 수 있나요?',
        answer:
          '<p>네, 조기노령연금과 실업급여는 별개의 제도이므로 동시 수급이 가능합니다. 연금 수령 사실이 실업급여에 영향을 주지 않습니다.</p>',
      },
      {
        question: '실업급여를 받으면 국민연금이 줄어드나요?',
        answer:
          '<p>아닙니다. 실업급여 수급이 국민연금 수령액에 영향을 주지 않습니다. 두 급여는 완전히 독립적인 제도입니다.</p>',
      },
      {
        question: '65세가 넘었는데 실업급여를 받을 수 있는 경우가 있나요?',
        answer:
          '<p>65세 이전에 고용보험에 가입한 상태에서 계속 일하다 퇴직한 경우에는 65세 이후에도 수급 가능합니다. 65세 이후 새로 취업한 경우는 불가능합니다.</p>',
      },
      {
        question: '기초연금과 실업급여도 동시에 받을 수 있나요?',
        answer:
          '<p>네, 기초연금(기초노령연금)과 실업급여도 동시 수급이 가능합니다. 기초연금은 소득 기준으로 지급되는 것이고, 실업급여는 고용보험 급여이므로 별개입니다.</p>',
      },
    ],
    cta: { text: '국민연금+실업급여 동시 수급 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '50세 이상 수급기간 연장', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '정년퇴직 실업급여', href: '/guide/unemployment/unemployment-60-retirement-benefit' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '실업급여 첫 방문', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 8. 실업급여 대기기간 7일 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-waiting-7days',
    keyword: '실업급여 대기기간 7일',
    questionKeyword: '실업급여 대기기간 7일은 무엇인가요?',
    ctaKeyword: '실업급여 대기기간 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '실업급여 대기기간 7일 완벽 정리 — 할 일과 주의사항 | 로앤가이드',
      description:
        '실업급여 신청 후 7일간 급여가 안 나온다면, 대기기간의 의미와 이 기간에 해야 할 일을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 신청했는데 7일간은 급여가 지급되지 않는다고 합니다. 왜 7일을 기다려야 하는지, 이 기간에 무엇을 해야 하는지 궁금합니다. 고용보험법 제49조에 따라 수급자격 인정일부터 7일간은 대기기간으로 구직급여가 지급되지 않습니다. 이 기간의 의미와 주의사항을 정리합니다.</p>',
    timelineSteps: [
      '수급자격 인정신청(D-day)',
      '수급자격 인정 결정(1~2주)',
      '대기기간 7일(급여 미지급)',
      '첫 번째 실업인정일(급여 시작)',
    ],
    sections: [
      {
        title: '대기기간 7일이 존재하는 이유',
        content:
          '<p><strong style="color:#1e3a5f">대기기간은 실업 상태를 확인하는 최소 기간입니다.</strong></p>\n<p>고용보험법 제49조에 따라 수급자격 인정일부터 7일간은 대기기간입니다. 이 기간은 일시적 실업과 구별하기 위한 제도적 장치입니다.</p>\n<ul>\n<li><strong>모든 수급자에게 적용</strong> — 비자발적·자발적 이직 구분 없이 모든 수급자에게 동일하게 적용됩니다.</li>\n<li><strong>총 수급기간에서 차감 안 됨</strong> — 대기기간 7일은 구직급여 수급기간(120~270일)에서 차감되지 않습니다.</li>\n<li><strong>토·일·공휴일 포함</strong> — 대기기간 7일은 달력 기준이므로 주말과 공휴일도 포함됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대기기간 7일은 무급이지만 수급기간에서 차감되지 않습니다. 실질적으로 손해보는 것은 7일분의 급여뿐입니다.</blockquote>',
      },
      {
        title: '대기기간 중 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">대기기간에도 구직활동 준비를 시작해야 합니다.</strong></p>\n<ul>\n<li><strong>워크넷 이력서 등록</strong> — 고용센터에서 안내하는 워크넷(worknet.go.kr)에 이력서를 등록하세요.</li>\n<li><strong>구직활동 계획 수립</strong> — 실업인정일에 보고할 구직활동 실적을 미리 계획하세요.</li>\n<li><strong>실업인정일 확인</strong> — 첫 번째 실업인정일 날짜와 준비물을 확인하세요.</li>\n<li><strong>취업지원 프로그램</strong> — 고용센터에서 제공하는 직업훈련, 취업특강 등 프로그램을 탐색하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>실업급여 일정과 수급액, AI가 즉시 정리합니다</strong></p>\n<p style="margin:0;font-size:0.95em">대기기간부터 첫 급여일까지 전체 일정을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대기기간 중 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">대기기간 중에도 취업하면 반드시 신고해야 합니다.</strong></p>\n<ul>\n<li><strong>취업 시 신고</strong> — 대기기간 중 취업하면 실업급여 수급자격이 소멸합니다. 반드시 고용센터에 신고하세요.</li>\n<li><strong>아르바이트 주의</strong> — 대기기간 중 단기 아르바이트를 하면 취업으로 간주될 수 있습니다.</li>\n<li><strong>해외 출국 제한</strong> — 대기기간 중 해외 출국은 실업급여 수급에 영향을 줄 수 있으므로 사전 확인이 필요합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 조기재취업수당 부지급 처분',
        summary:
          '행정법원 2009누3400 사건에서 법원은 고용보험 조기재취업수당의 지급 요건을 엄격히 해석하면서, 수급자격 인정일과 대기기간의 산정 방법이 정확해야 한다고 판시했습니다.',
        takeaway:
          '대기기간의 시작일은 수급자격 인정일입니다. 신청일이 아닌 인정일을 기준으로 7일을 계산하므로, 인정 결정이 늦어지면 대기기간도 늦어집니다.',
      },
    ],
    faq: [
      {
        question: '대기기간 7일은 수급기간에서 빠지나요?',
        answer:
          '<p>아닙니다. 대기기간 7일은 구직급여 수급기간(120~270일)에서 차감되지 않습니다. 대기기간이 지난 후부터 수급기간이 시작됩니다.</p>',
      },
      {
        question: '대기기간 중에 구직활동을 해도 되나요?',
        answer:
          '<p>물론입니다. 오히려 대기기간 중에 구직활동을 시작하는 것이 좋습니다. 첫 실업인정일에 보고할 활동 실적을 미리 준비하세요.</p>',
      },
      {
        question: '자발적 퇴사면 대기기간이 더 긴가요?',
        answer:
          '<p>대기기간 7일은 모든 수급자에게 동일합니다. 다만 자발적 이직의 경우 수급자격 인정 자체에 시간이 더 걸릴 수 있습니다.</p>',
      },
      {
        question: '대기기간 7일이 끝나면 바로 급여가 입금되나요?',
        answer:
          '<p>대기기간 종료 후 첫 번째 실업인정일에 출석하고 구직활동을 보고해야 급여가 지급됩니다. 실업인정일은 보통 1~2주 간격으로 지정됩니다.</p>',
      },
    ],
    cta: { text: '실업급여 대기기간부터 첫 급여까지 일정 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 전체 절차', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업인정 출석 누락', href: '/guide/unemployment/unemployment-missed-attendance' },
      { label: '구직활동 인정 기준', href: '/guide/unemployment/unemployment-online-class-job-search' },
      { label: '실업급여 부정수급 유형', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '고용센터 첫 방문', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 9. 실업급여 종료 후 재신청 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-reapply-after-expiry',
    keyword: '실업급여 종료 후 재신청',
    questionKeyword: '실업급여 수급이 끝났는데 다시 받을 수 있나요?',
    ctaKeyword: '실업급여 재수급 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '실업급여 종료 후 재취업·재신청 가능 조건 정리 | 로앤가이드',
      description:
        '실업급여를 다 받고 재취업했다가 또 실직했다면, 다시 실업급여를 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 모두 수급한 후 재취업했는데, 6개월 만에 또 실직했습니다. 실업급여를 다시 받을 수 있는지, 반복수급 제한에 걸리는지 걱정됩니다. 이전 수급 이력과 상관없이 새로운 피보험기간 요건을 충족하면 다시 실업급여를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '재수급 기본 조건',
        content:
          '<p><strong style="color:#1e3a5f">새로운 직장에서 180일 이상 피보험기간을 쌓으면 됩니다.</strong></p>\n<p>이전에 실업급여를 수급했더라도, 재취업 후 새로 쌓은 피보험기간이 180일 이상이면 다시 실업급여를 신청할 수 있습니다.</p>\n<ul>\n<li><strong>이전 수급 기간은 리셋</strong> — 실업급여를 수급하면 그 이전의 피보험기간은 소멸됩니다. 새 직장에서 0일부터 다시 쌓아야 합니다.</li>\n<li><strong>18개월 중 180일</strong> — 이직일 이전 18개월 내 180일 이상의 피보험기간이 필요합니다.</li>\n<li><strong>비자발적 이직 요건</strong> — 새 직장에서의 이직도 비자발적이어야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 실업급여 재수급에 횟수 제한은 없습니다. 매번 새 직장에서 180일 피보험기간을 충족하면 됩니다.</blockquote>',
      },
      {
        title: '반복수급 제한이란',
        content:
          '<p><strong style="color:#1e3a5f">5년 이내 3회 이상 수급하면 수급기간이 줄어듭니다.</strong></p>\n<p>고용보험법 시행규칙에 따라 최근 5년간 3회 이상 실업급여를 수급한 경우, 수급기간의 1/2이 감소합니다.</p>\n<ul>\n<li><strong>감소 기준</strong> — 3회차부터 소정급여일수의 50%만 지급됩니다.</li>\n<li><strong>5년 기준 산정</strong> — 직전 5년간의 수급 횟수를 기준으로 판단합니다.</li>\n<li><strong>감소되어도 수급은 가능</strong> — 수급기간이 줄어들 뿐, 실업급여 자체를 못 받는 것은 아닙니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>재수급 가능 여부와 수급기간, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">이전 수급 이력과 새 직장 근무기간을 입력하면 재수급 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재수급 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">짧은 기간 반복 취업·퇴직은 부정수급 의심을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>부정수급 조사</strong> — 짧은 기간 반복적으로 취업·퇴직하는 패턴은 고용센터에서 부정수급 여부를 조사할 수 있습니다.</li>\n<li><strong>실질적 구직활동</strong> — 수급 중 성실한 구직활동을 하고 있다는 것을 실업인정 시 보여주어야 합니다.</li>\n<li><strong>조기재취업수당 활용</strong> — 빠르게 재취업하면 남은 수급기간의 1/2을 일시금으로 받을 수 있으니 적극 활용하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 조기재취업수당 지급 요건',
        summary:
          '행정법원 2008구합8216 사건에서 법원은 조기재취업수당의 지급 요건으로 12개월 이상 계속 근무가 필요하다는 점을 확인하면서, 수급자격자의 재취업 의사를 실질적으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '실업급여를 반복 수급하는 것보다 조기재취업수당을 활용하면 총 수령액이 더 클 수 있습니다. 안정적인 재취업이 가장 유리합니다.',
      },
    ],
    faq: [
      {
        question: '실업급여를 받다가 중간에 취업했다가 또 실직하면 남은 기간 이어서 받나요?',
        answer:
          '<p>네, 수급기간(퇴직일 다음 날부터 12개월) 내에 재실직하면 남은 구직급여일수를 이어서 받을 수 있습니다. 새로 신청할 필요 없이 고용센터에 알리면 됩니다.</p>',
      },
      {
        question: '재취업 후 3개월 만에 또 실직했는데 새 피보험기간이 180일이 안 됩니다.',
        answer:
          '<p>이전 수급 시 남은 구직급여일수가 있고, 수급기간(12개월) 내라면 남은 일수를 받을 수 있습니다. 12개월이 지났다면 새 피보험기간 180일을 채워야 합니다.</p>',
      },
      {
        question: '반복수급 제한은 평생 기록이 남나요?',
        answer:
          '<p>아닙니다. 최근 5년간의 수급 횟수만 기준으로 합니다. 5년이 지나면 이전 수급 이력은 반복수급 제한 판단에 포함되지 않습니다.</p>',
      },
      {
        question: '자발적 퇴사 후 실업급여를 못 받은 건 횟수에 포함되나요?',
        answer:
          '<p>실업급여를 실제로 수급하지 않았다면 반복수급 횟수에 포함되지 않습니다. 신청만 하고 수급하지 않은 경우도 마찬가지입니다.</p>',
      },
    ],
    cta: { text: '실업급여 재수급 가능성 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '반복수급 제한', href: '/guide/unemployment/unemployment-repeat-claim-limit' },
      { label: '재취업 후 재수급', href: '/guide/unemployment/unemployment-rehire-second-claim' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '부정수급 유형', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
    ],
  },

  // ── 10. 근로조건 일방변경 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-night-shift-change-quit',
    keyword: '근로조건 변경 퇴사 실업급여',
    questionKeyword: '회사가 일방적으로 야간근무로 바꾸면 퇴사해도 실업급여를 받나요?',
    ctaKeyword: '근로조건 변경 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '근로조건 일방변경 퇴사 실업급여 받는 조건 | 로앤가이드',
      description:
        '회사가 동의 없이 야간근무나 배치전환을 강행했다면, 퇴사해도 실업급여를 받을 수 있는지 지금 확인하세요.',
    },
    intro:
      '<p>10년간 주간근무를 했는데 갑자기 야간교대로 바꾸겠다는 통보를 받았습니다. 건강 문제와 육아 때문에 야간은 어려운데 회사는 들은 척도 하지 않습니다. 근로조건의 일방적 불이익 변경으로 퇴사한 경우, 정당한 이직 사유로 인정되어 실업급여를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '근로조건 일방변경이 정당한 이직 사유인 기준',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 근로조건의 불이익 변경은 정당한 이직 사유입니다.</strong></p>\n<p>"사업주가 근로조건을 위반하거나 근로자에게 불리하게 근로조건을 변경한 경우"에 해당합니다.</p>\n<ul>\n<li><strong>근무시간 변경</strong> — 주간에서 야간으로, 또는 교대근무 패턴의 일방 변경</li>\n<li><strong>업무 내용 변경</strong> — 채용 시 합의된 업무와 전혀 다른 업무로 배치전환</li>\n<li><strong>근무지 변경</strong> — 통근이 현저히 곤란해지는 원거리 전근</li>\n<li><strong>급여 삭감</strong> — 동의 없는 일방적인 급여 인하</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로계약서에 명시된 조건을 사업주가 일방적으로 불이익하게 변경한 경우, 이를 이유로 퇴사하면 실업급여 수급이 가능합니다.</blockquote>',
      },
      {
        title: '증거 수집과 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">변경 전후 근로조건을 비교할 수 있는 증거가 핵심입니다.</strong></p>\n<ul>\n<li><strong>근로계약서</strong> — 채용 시 합의된 근로조건(근무시간, 업무, 급여 등)이 기재된 서류입니다.</li>\n<li><strong>변경 통보서</strong> — 사업주의 일방적 변경 통보 문자, 이메일, 공문 등입니다.</li>\n<li><strong>이의 제기 기록</strong> — 변경에 동의하지 않는다는 의사를 표시한 기록(이메일, 문자 등)입니다.</li>\n<li><strong>급여명세서</strong> — 급여 삭감의 경우 변경 전후 급여명세서를 비교 증거로 제출합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>근로조건 변경 퇴사 실업급여 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">변경된 근로조건을 입력하면 정당한 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴사 전 이의 제기를 먼저 하세요',
        content:
          '<p><strong style="color:#1e3a5f">변경에 동의하지 않는다는 의사를 공식적으로 남겨야 합니다.</strong></p>\n<ul>\n<li><strong>서면 이의</strong> — 사업주에게 "변경에 동의하지 않는다"는 내용의 이메일이나 서면을 보내세요.</li>\n<li><strong>협의 요청</strong> — 변경 내용에 대한 협의를 요청한 기록을 남기세요.</li>\n<li><strong>고용노동부 상담</strong> — 퇴사 전 고용노동부 상담센터(1350)에 문의하여 정당한 이직 인정 가능성을 사전 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 불이익 변경과 근로자 보호',
        summary:
          '대법원 2009두22980 사건(대법원, 2011.11.24 선고)에서 법원은 취업규칙의 불이익 변경 시 근로자 과반수의 동의가 필요하다는 원칙을 재확인하면서, 근로조건 변경의 적법성 판단 기준을 제시했습니다.',
        takeaway:
          '사업주가 취업규칙이나 근로조건을 일방적으로 불이익하게 변경한 경우, 이는 위법할 수 있습니다. 퇴사 시 정당한 이직 사유가 될 뿐 아니라, 노동위원회에 부당한 근로조건 변경 구제를 신청할 수도 있습니다.',
      },
    ],
    faq: [
      {
        question: '급여는 그대로인데 업무만 바뀌어도 정당한 이직 사유인가요?',
        answer:
          '<p>채용 시 합의된 업무와 전혀 다른 업무로 배치전환된 경우는 정당한 이직 사유가 될 수 있습니다. 다만 업무 변경이 합리적 범위 내인지가 기준입니다.</p>',
      },
      {
        question: '근로계약서 없이 구두로 합의한 조건도 인정되나요?',
        answer:
          '<p>구두 합의도 근로계약의 내용이 될 수 있지만, 증명이 어렵습니다. 동료 진술, 과거 근무 패턴 기록 등 간접 증거를 확보하세요.</p>',
      },
      {
        question: '회사가 변경에 동의하는 서명을 요구하면 어떡하나요?',
        answer:
          '<p>동의하지 않으면 서명하지 마세요. 서명하면 근로조건 변경에 동의한 것으로 간주되어 이후 정당한 이직 사유로 인정받기 어려워집니다.</p>',
      },
      {
        question: '부서 이동인데 급여도 줄었습니다. 실업급여 받을 수 있나요?',
        answer:
          '<p>급여 삭감이 동반된 부서 이동은 더욱 강력한 정당한 이직 사유입니다. 변경 전후 급여명세서를 증거로 보관하세요.</p>',
      },
    ],
    cta: { text: '근로조건 변경 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '임금삭감 퇴사 실업급여', href: '/guide/unemployment/unemployment-wage-cut-voluntary-quit' },
      { label: '통근곤란 퇴사 실업급여', href: '/guide/unemployment/unemployment-commute-hardship-quit' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
    ],
  },

  // ── 11. 이직확인서 미발급 대처 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-company-no-separation',
    keyword: '이직확인서 안내줄때 실업급여',
    questionKeyword: '회사가 이직확인서를 안 내주면 실업급여를 못 받나요?',
    ctaKeyword: '이직확인서 미발급 실업급여 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '이직확인서 안 내줄 때 실업급여 받는 방법 3단계 | 로앤가이드',
      description:
        '퇴사했는데 회사가 이직확인서를 안 내준다면, 직권 확인을 통해 실업급여를 받는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>퇴사한 지 한 달이 넘었는데 회사에서 이직확인서를 보내주지 않습니다. 전화하면 바쁘다고만 하고, 실업급여 신청 기한은 다가옵니다. 이직확인서가 없어도 실업급여를 신청할 수 있는 방법이 있습니다. 고용센터에 직권 확인을 요청하면 됩니다.</p>',
    timelineSteps: [
      '1단계: 회사에 이직확인서 발급 요청',
      '2단계: 미발급 시 고용센터에 직권 확인 요청',
      '3단계: 고용센터 직권 조사 후 수급자격 결정',
    ],
    sections: [
      {
        title: '이직확인서는 사업주의 법적 의무입니다',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제42조에 따라 사업주는 이직확인서를 발급할 의무가 있습니다.</strong></p>\n<p>사업주가 정당한 사유 없이 이직확인서를 발급하지 않거나 거짓으로 작성하면 과태료 처분을 받습니다.</p>\n<ul>\n<li><strong>발급 의무</strong> — 근로자 이직 시 사업주는 고용센터에 이직확인서를 제출해야 합니다.</li>\n<li><strong>미발급 과태료</strong> — 이직확인서를 발급하지 않으면 100만원 이하의 과태료가 부과됩니다.</li>\n<li><strong>허위 작성 과태료</strong> — 거짓 내용으로 작성하면 300만원 이하의 과태료가 부과됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이직확인서 미발급은 사업주의 위법행위입니다. 고용센터에 알리면 사업주에게 시정 지시와 과태료가 부과됩니다.</blockquote>',
      },
      {
        title: '이직확인서 없이 실업급여 신청하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">고용센터에 직권 확인을 요청하면 이직확인서 없이도 수급자격을 인정받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>고용센터 방문</strong> — 관할 고용센터에 방문하여 이직확인서 미발급 사실을 알립니다.</li>\n<li><strong>직권 확인 요청서 작성</strong> — 이직 사실, 이직 사유, 근무기간 등을 기재한 요청서를 제출합니다.</li>\n<li><strong>증빙서류 첨부</strong> — 근로계약서, 급여명세서, 퇴직 관련 문자 등 근로 사실을 증명할 수 있는 서류를 첨부합니다.</li>\n<li><strong>고용센터 직권 조사</strong> — 고용센터가 사업주에게 이직확인서 제출을 독촉하고, 응하지 않으면 직권으로 사실관계를 확인합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>이직확인서 미발급 시 대처법, AI가 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">상황을 입력하면 직권 확인 요청 절차를 무료로 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직확인서 미발급 시 추가 대응',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부에 진정을 제기하면 더 빠르게 해결할 수 있습니다.</strong></p>\n<ul>\n<li><strong>고용노동부 진정</strong> — 이직확인서 미발급에 대해 고용노동부에 진정을 제기할 수 있습니다.</li>\n<li><strong>피보험자격 확인청구</strong> — 근로복지공단에 피보험자격 확인청구를 하면 고용보험 가입 사실과 기간을 공식 확인할 수 있습니다.</li>\n<li><strong>신청 기한 보호</strong> — 이직확인서 미발급으로 신청이 지연된 경우, 그 기간만큼 신청 기한이 연장될 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 피보험자격 확인과 사업주 의무',
        summary:
          '대법원 2010두20348 사건(대법원, 2012.06.18 선고)에서 법원은 고용보험 피보험자격의 직권취소 처분이 위법하다고 판시하면서, 근로자의 피보험자격이 실질적으로 보호되어야 한다고 판시했습니다.',
        takeaway:
          '사업주가 이직확인서를 발급하지 않아도 포기하지 마세요. 고용센터 직권 확인 절차를 통해 수급자격을 인정받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 폐업했으면 이직확인서를 어떻게 받나요?',
        answer:
          '<p>사업주가 폐업한 경우 고용센터에 직권 확인을 요청하세요. 4대보험 가입 기록, 급여 이체 내역 등으로 근로 사실을 확인할 수 있습니다.</p>',
      },
      {
        question: '직권 확인은 얼마나 걸리나요?',
        answer:
          '<p>통상 2~4주 정도 소요됩니다. 사업주가 고용센터의 독촉에 빠르게 응하면 더 빨리 처리될 수 있습니다.</p>',
      },
      {
        question: '이직확인서 미발급으로 실업급여 신청 기한(12개월)을 넘기면요?',
        answer:
          '<p>이직확인서 미발급이 지연 사유인 경우, 고용센터에 사정을 설명하면 기한 연장이 가능할 수 있습니다. 지연 사유를 증명할 수 있는 기록(요청 문자 등)을 보관하세요.</p>',
      },
      {
        question: '사업주에게 이직확인서 발급을 요청한 기록이 없으면요?',
        answer:
          '<p>지금이라도 문자나 이메일로 공식 요청을 보내세요. "이직확인서 발급을 요청합니다"라는 기록을 남기면 이후 직권 확인 요청 시 증거가 됩니다.</p>',
      },
    ],
    cta: { text: '이직확인서 미발급 대처법 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '회사 부도 체당금', href: '/guide/unemployment/unemployment-company-bankrupt-double-claim' },
      { label: '고용센터 첫 방문', href: '/guide/unemployment/first-application-employment-center-checklist' },
      { label: '실업급여 전체 절차', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },

  // ── 12. 단기근로자 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-short-term-worker',
    keyword: '6개월 미만 단기 근로자 실업급여',
    questionKeyword: '6개월도 안 다녔는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '단기근로 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '6개월 미만 단기 근로자 실업급여 받는 방법 | 로앤가이드',
      description:
        '짧은 기간만 일하고 실직했다면, 이전 직장 피보험기간 합산으로 실업급여를 받을 수 있는지 지금 확인하세요.',
    },
    intro:
      '<p>새 직장에서 4개월 만에 해고되었습니다. 180일 피보험기간을 못 채웠는데 실업급여를 받을 수 있는 방법이 있을까요? 이전 직장의 고용보험 가입기간을 합산하면 180일을 채울 수 있습니다. 합산 가능 여부와 조건을 아래에서 확인해보세요.</p>',
    sections: [
      {
        title: '피보험기간 합산의 원리',
        content:
          '<p><strong style="color:#1e3a5f">여러 직장의 고용보험 가입기간을 합산하여 180일을 채울 수 있습니다.</strong></p>\n<p>고용보험법 제41조에 따라 피보험기간은 이전 직장의 기간도 합산됩니다. 다만 합산에는 조건이 있습니다.</p>\n<ul>\n<li><strong>합산 조건 1</strong> — 이전 직장 퇴사 시 실업급여를 수급하지 않았어야 합니다. 수급한 경우 그 이전 기간은 소멸됩니다.</li>\n<li><strong>합산 조건 2</strong> — 이전 직장과 현 직장 사이의 공백기간이 3년을 초과하지 않아야 합니다.</li>\n<li><strong>예시</strong> — A회사 1년 → B회사 4개월이면 합산 피보험기간은 약 16개월(480일)으로 180일을 충족합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 현 직장 근무기간이 짧아도 이전 직장 피보험기간을 합산하면 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '피보험기간 확인 방법',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 홈페이지에서 전체 피보험기간을 한눈에 확인할 수 있습니다.</strong></p>\n<ul>\n<li><strong>고용보험 홈페이지</strong> — ei.go.kr에서 공동인증서로 로그인하면 전체 피보험이력을 확인할 수 있습니다.</li>\n<li><strong>1350 전화문의</strong> — 고용보험 고객센터에 전화하면 피보험기간을 안내받을 수 있습니다.</li>\n<li><strong>고용센터 방문</strong> — 관할 고용센터에 신분증을 지참하고 방문하면 피보험기간 확인서를 발급받을 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>이전 직장 합산 후 피보험기간, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">각 직장별 근무기간을 입력하면 합산 피보험기간과 수급 자격을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합산해도 180일이 안 되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">180일 미달이면 실업급여 대신 다른 지원을 활용하세요.</strong></p>\n<ul>\n<li><strong>긴급복지지원</strong> — 갑작스러운 실직으로 생계가 어려운 경우 긴급복지지원을 신청할 수 있습니다.</li>\n<li><strong>국민취업지원제도</strong> — 실업급여 수급 자격이 없는 구직자를 위한 취업지원 프로그램입니다. 월 50만원의 구직촉진수당이 최대 6개월 지급됩니다.</li>\n<li><strong>다음 취업을 위한 준비</strong> — 이번 직장의 고용보험 가입기간이 보존되므로, 다음 직장에서 합산하여 180일을 채울 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 피보험자격의 소급 취소 한계',
        summary:
          '대법원 2010두20348 사건(대법원, 2012.06.18 선고)에서 법원은 고용보험 피보험자격을 직권으로 소급 취소하는 것이 위법하다고 판시했습니다. 이미 인정된 피보험기간은 소급하여 취소할 수 없다는 취지입니다.',
        takeaway:
          '이전 직장에서 인정된 피보험기간이 사후에 취소된 경우 이의를 제기하세요. 합산 피보험기간 산정에 직접 영향을 미치므로 포기하지 마세요.',
      },
    ],
    faq: [
      {
        question: '아르바이트 기간도 피보험기간에 합산되나요?',
        answer:
          '<p>고용보험에 가입된 아르바이트라면 합산됩니다. 주 15시간 이상 근무하면 고용보험 의무가입 대상이므로 확인해보세요.</p>',
      },
      {
        question: '이전 직장이 여러 곳인데 모두 합산되나요?',
        answer:
          '<p>네, 실업급여를 수급한 시점 이후의 모든 직장 피보험기간이 합산됩니다. 직장 수에 제한은 없습니다.</p>',
      },
      {
        question: '이전 직장에서 고용보험 미가입이었으면 어떡하나요?',
        answer:
          '<p>근로복지공단에 피보험자격 확인청구를 하면 소급 가입이 가능합니다. 급여 입금 내역, 근로계약서 등이 증거가 됩니다.</p>',
      },
      {
        question: '피보험기간 합산 후 수급기간은 어떻게 정해지나요?',
        answer:
          '<p>합산된 총 피보험기간과 나이에 따라 수급기간이 결정됩니다. 피보험기간이 길수록, 나이가 많을수록 수급기간이 깁니다.</p>',
      },
    ],
    cta: { text: '단기근로 피보험기간 합산 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '수습해고 실업급여', href: '/guide/unemployment/unemployment-probation-fired' },
      { label: '플랫폼 노동자 실업급여', href: '/guide/unemployment/unemployment-gig-platform-worker' },
      { label: '일용직 실업급여', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '고용센터 첫 방문', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },
];
