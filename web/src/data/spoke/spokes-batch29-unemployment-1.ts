import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 6개 (batch29-1)
//
// 1. unemployment-unpaid-salary-quit
//    이 페이지는 [임금체불을 겪은 근로자]의 [자진퇴사인데 실업급여를 받을 수 있는지 모르는 상황]에서
//    [임금체불 사유 정당한 이직 인정 기준과 신청 절차]를 돕는 페이지다.
//
// 2. unemployment-contract-end-no-renewal
//    이 페이지는 [계약 만료 후 갱신을 거절당한 근로자]의 [계약직도 실업급여를 받을 수 있는지 모르는 상황]에서
//    [계약 만료 시 비자발적 이직 인정 요건과 신청 절차]를 돕는 페이지다.
//
// 3. unemployment-harassment-quit
//    이 페이지는 [직장 내 성희롱·괴롭힘으로 퇴사한 근로자]의 [자발적 퇴사로 처리될까 걱정되는 상황]에서
//    [괴롭힘 사유 정당한 이직 인정 기준과 증빙 방법]을 돕는 페이지다.
//
// 4. unemployment-health-quit
//    이 페이지는 [건강 문제로 퇴사한 근로자]의 [질병 사유 실업급여 수급 가능 여부를 모르는 상황]에서
//    [건강 사유 정당한 이직 요건과 의료 증빙서류 준비]를 돕는 페이지다.
//
// 5. unemployment-family-care-quit
//    이 페이지는 [가족 간병·돌봄으로 퇴사한 근로자]의 [간병 퇴사도 실업급여 대상인지 모르는 상황]에서
//    [가족돌봄 사유 정당한 이직 인정과 증빙서류 준비]를 돕는 페이지다.
//
// 6. unemployment-probation-fired
//    이 페이지는 [수습기간에 해고된 근로자]의 [수습 해고도 실업급여 대상인지 모르는 상황]에서
//    [수습 해고 시 실업급여 수급 요건과 신청 방법]을 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch29Unemployment1: SpokePage[] = [
  // ── 1. 임금체불 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-unpaid-salary-quit',
    keyword: '임금체불 퇴사 실업급여',
    questionKeyword: '임금이 밀려서 퇴사했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '임금체불 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '임금체불 퇴사 실업급여 받는 3가지 조건 정리 | 로앤가이드',
      description:
        '월급이 2개월 넘게 밀려 퇴사를 결심했다면, 자진퇴사라도 실업급여를 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>3개월째 월급이 밀리고 있는데 더 이상 버틸 수 없어 퇴사를 결심했습니다. 자진퇴사면 실업급여를 못 받는다고 알고 있는데, 임금체불은 다릅니다. 고용보험법상 임금체불은 정당한 이직 사유에 해당하므로, 요건을 갖추면 자진퇴사라도 실업급여를 받을 수 있습니다. 어떤 조건이 필요한지 아래에서 확인해보세요.</p>',
    sections: [
      {
        title: '임금체불이 정당한 이직 사유인 이유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 임금체불은 비자발적 이직으로 인정될 수 있습니다.</strong></p>\n<p>구체적으로 사업주가 근로조건을 위반한 경우에 해당하며, 임금의 30% 이상을 체불하거나 2개월 이상 연속 체불한 경우가 대표적입니다.</p>\n<ol>\n<li><strong>임금의 30% 이상 체불</strong> — 정해진 급여일에 임금의 70% 미만만 지급받은 경우입니다. 잔여분을 다음 달에 주겠다는 약속만으로는 해결되지 않습니다.</li>\n<li><strong>2개월 이상 연속 체불</strong> — 2개월 이상 계속하여 임금이 지급되지 않은 경우입니다. 일부만 지급한 경우도 체불에 해당할 소지가 있습니다.</li>\n<li><strong>퇴직금 미지급 약속</strong> — 퇴직금을 지급하지 않겠다고 사업주가 명시적으로 말한 경우도 포함됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임금체불 2개월 이상이면 자진퇴사도 정당한 이직으로 인정될 수 있습니다. 급여명세서와 계좌이체 내역을 가능한 한 보관하세요.</blockquote>',
      },
      {
        title: '실업급여 신청 전 꼭 준비할 서류 4가지',
        content:
          '<p><strong style="color:#1e3a5f">임금체불 퇴사의 핵심은 체불 사실을 증명할 수 있느냐입니다.</strong></p>\n<ul>\n<li><strong>급여명세서 또는 근로계약서</strong> — 정해진 급여액과 지급일을 확인할 수 있는 서류입니다.</li>\n<li><strong>계좌이체 내역</strong> — 실제 입금된 금액과 날짜를 증명합니다. 인터넷뱅킹에서 3개월치 내역을 출력하세요.</li>\n<li><strong>체불 관련 문자·카톡</strong> — 사업주가 급여를 늦추겠다고 한 메시지, 체불 사실을 인정하는 대화 내용입니다.</li>\n<li><strong>진정서 접수증(선택)</strong> — 고용노동부에 임금체불 진정을 제기했다면 접수증도 강력한 증거입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>임금체불 퇴사 후 실업급여 수급 자격, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 기간과 금액을 입력하면 정당한 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직확인서 사유 코드 확인이 가장 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 이직확인서에 "자발적 퇴사"로 기재하면 즉시 이의를 제기하세요.</strong></p>\n<p>임금체불 퇴사인데 사업주가 이직확인서에 "개인 사정에 의한 자발적 이직"으로 기재하는 경우가 많습니다. 이 경우 고용센터에 이의신청을 하면 됩니다.</p>\n<ul>\n<li><strong>이의신청 방법</strong> — 고용센터 방문 또는 온라인으로 이직확인서 내용에 대한 이의신청서를 제출합니다.</li>\n<li><strong>증빙자료 첨부</strong> — 체불 증빙서류(계좌내역, 문자 등)를 함께 제출하면 고용센터가 사실관계를 확인합니다.</li>\n<li><strong>처리 기간</strong> — 이의신청 후 통상 2~4주 이내에 결과가 나옵니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업주가 이직 사유를 잘못 기재해도 포기하지 마세요. 증빙서류만 있으면 고용센터가 직권으로 사유를 변경할 수 있습니다.</blockquote>',
      },
      {
        title: '임금체불 퇴사 시 실업급여와 체불임금 동시 청구하기',
        content:
          '<p><strong style="color:#1e3a5f">실업급여와 체불임금 청구는 별개 절차이므로 동시에 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>실업급여</strong> — 고용센터에 수급자격 인정신청을 합니다.</li>\n<li><strong>체불임금</strong> — 고용노동부에 임금체불 진정을 제기합니다. 사업주가 지급하지 않으면 소액체당금(최대 1,000만원)을 근로복지공단에 청구할 수 있습니다.</li>\n<li><strong>동시 진행 가능</strong> — 두 절차는 관할 기관이 다르므로(고용센터 vs 고용노동부) 병행할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험료 부과처분 시 임금총액 산정 기준',
        summary:
          '대법원 2009두22980 사건(대법원, 2011.11.24 선고)에서 법원은 근로자에게 지급하는 개인연금보조금 등이 임금총액에 포함되어야 하는지 판단하면서, 근로의 대가로 지급되는 금품은 고용보험료 산정 기준인 임금총액에 포함된다고 판시했습니다.',
        takeaway:
          '임금체불 여부를 판단할 때 기본급뿐 아니라 정기적으로 지급되는 각종 수당과 보조금도 임금에 포함됩니다. 체불 금액을 산정할 때 누락 없이 계산하세요.',
      },
    ],
    faq: [
      {
        question: '월급이 1개월만 밀렸는데도 실업급여를 받을 수 있나요?',
        answer:
          '<p>1개월 체불만으로는 정당한 이직 사유로 인정되기 어렵습니다. 다만 임금의 30% 이상이 체불되었다면 1개월이라도 인정될 수 있으니 고용센터에 확인하세요.</p>',
      },
      {
        question: '사업주가 급여를 현금으로 줘서 체불 증거가 없으면 어떡하나요?',
        answer:
          '<p>동료 근로자 진술서, 근무일지, 사업주와의 문자·녹음 등 간접 증거를 최대한 확보하세요. 고용노동부에 진정을 제기하면 근로감독관이 사실관계를 조사합니다.</p>',
      },
      {
        question: '체불임금 진정을 제기하면 실업급여 신청에 유리한가요?',
        answer:
          '<p>네, 고용노동부 진정 접수증은 임금체불 사실을 증명하는 강력한 증거입니다. 고용센터도 이를 참고하여 이직 사유를 판단합니다.</p>',
      },
      {
        question: '퇴사 전에 먼저 노동부 진정을 해야 하나요?',
        answer:
          '<p>가능한 한 그럴 필요는 없지만, 퇴사 전 진정을 해두면 체불 사실 증명이 쉬워집니다. 퇴사 후에도 진정은 가능하므로 상황에 따라 결정하세요.</p>',
      },
    ],
    cta: { text: '임금체불 퇴사 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '체불임금 증거 수집', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '이직확인서 분쟁 해결', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
    ],
  },

  // ── 2. 계약만료 갱신 거절 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-end-no-renewal',
    keyword: '계약만료 갱신거절 실업급여',
    questionKeyword: '계약직 만료 후 갱신이 안 되면 실업급여를 받을 수 있나요?',
    ctaKeyword: '계약만료 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '계약만료 갱신거절 실업급여 수급 조건 4가지 | 로앤가이드',
      description:
        '계약직 만료 후 갱신이 되지 않아 실직했다면, 실업급여 수급 가능 여부와 갱신기대권까지 지금 확인하세요.',
    },
    intro:
      '<p>2년간 계약직으로 일했는데 이번에 갱신이 안 된다는 통보를 받았습니다. 그동안 당연히 연장될 거라 생각했는데 갑자기 계약이 끝나니 막막합니다. 계약 만료로 인한 퇴직은 비자발적 이직에 해당하므로 실업급여를 받을 수 있습니다. 갱신기대권까지 인정되면 부당해고 구제도 가능합니다.</p>',
    sections: [
      {
        title: '계약만료 퇴직이 비자발적 이직인 이유',
        content:
          '<p><strong style="color:#1e3a5f">기간제 근로계약의 만료는 고용보험법상 비자발적 이직에 해당할 소지가 있습니다.</strong></p>\n<p>근로자가 계약 갱신을 원했으나 사업주가 갱신을 거절한 경우, 이는 근로자의 의사에 반한 이직입니다. 고용보험법 시행규칙 별표2에 따라 수급자격이 제한되지 않는 이직 사유에 해당할 소지가 있습니다.</p>\n<ul>\n<li><strong>1회 이상 갱신된 적 있는 계약</strong> — 이전에 한 번이라도 갱신된 적 있다면 갱신기대권이 인정될 가능성이 높습니다.</li>\n<li><strong>갱신 기대를 줄 만한 사업주 언행</strong> — "계속 일할 수 있다", "내년에도 같이 일하자" 등의 발언이 있었다면 증거로 보관하세요.</li>\n<li><strong>동종 업무 후임 채용 여부</strong> — 계약 종료 후 같은 업무에 새 직원을 채용했다면 갱신 거절의 합리성이 약해집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약 만료는 자발적 퇴사가 아닙니다. 별도의 증명 없이도 실업급여 신청이 가능합니다.</blockquote>',
      },
      {
        title: '갱신기대권이 인정되면 부당해고 구제도 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">기간제법 제4조에 따라 2년 초과 사용 시 무기계약으로 전환됩니다.</strong></p>\n<p>기간제 근로자를 2년 이상 사용하면 무기계약 근로자로 간주됩니다. 또한 2년 미만이라도 갱신기대권이 인정되면 갱신 거절이 부당해고에 해당할 수 있습니다.</p>\n<ul>\n<li><strong>실업급여와 부당해고 구제 병행</strong> — 실업급여를 받으면서 동시에 노동위원회에 부당해고 구제신청을 할 수 있습니다.</li>\n<li><strong>복직되면 실업급여 반환</strong> — 부당해고 구제가 인정되어 복직하면 그동안 받은 실업급여는 반환해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>계약만료 후 실업급여·갱신기대권 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약 기간, 갱신 횟수, 사업주 언행을 입력하면 수급 자격과 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '계약만료 실업급여 신청 시 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서와 이직확인서가 핵심 서류입니다.</strong></p>\n<ul>\n<li><strong>근로계약서</strong> — 계약 기간, 갱신 조건 등이 기재된 서류입니다. 갱신 횟수를 증명할 수 있습니다.</li>\n<li><strong>이직확인서</strong> — 이직 사유에 "계약 만료"로 기재되었는지 확인하세요.</li>\n<li><strong>갱신 거절 통보서(있는 경우)</strong> — 문자, 이메일, 공문 등 갱신 거절 사실을 증명하는 서류입니다.</li>\n<li><strong>사업주 발언 증거(선택)</strong> — 갱신을 약속한 문자, 녹음 등이 있으면 갱신기대권 입증에 유리합니다.</li>\n</ul>',
      },
      {
        title: '계약만료 퇴직자가 놓치기 쉬운 실수 3가지',
        content:
          '<p><strong style="color:#1e3a5f">계약 만료 후 12개월 이내에 신청하지 않으면 수급권이 소멸합니다.</strong></p>\n<ul>\n<li><strong>신청 기한 도과</strong> — 계약 만료일 다음 날부터 12개월 이내에 가능한 한 신청해야 합니다. 재취업을 시도하다가 기한을 놓치는 경우가 많습니다.</li>\n<li><strong>피보험기간 부족</strong> — 이직일 이전 18개월 중 180일 이상 피보험기간이 필요합니다. 단기 계약이 여러 건이면 합산하여 180일을 채울 수 있습니다.</li>\n<li><strong>합의 퇴직 서명</strong> — 사업주가 "원만한 퇴직"이라며 자발적 퇴사 동의서에 서명을 요구할 수 있습니다. 서명하면 비자발적 이직 입증이 어려워지니 주의하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 피보험자격 직권취소 처분의 위법성',
        summary:
          '대법원 2010두20348 사건(대법원, 2012.06.18 선고)에서 법원은 고용보험 피보험자격 직권취소처분이 위법하다고 판시했습니다. 2008년 개정된 고용보험법 시행령에 따라 시행일 당시 이미 고용보험에 가입된 근로자의 자격을 소급 취소하는 것은 허용되지 않는다는 취지입니다.',
        takeaway:
          '계약직 근로자의 고용보험 자격이 소급 취소된 경우, 이의를 제기하면 피보험기간을 인정받을 수 있습니다. 실업급여 수급 요건인 180일 피보험기간 산정에 직접 영향을 미칩니다.',
      },
    ],
    faq: [
      {
        question: '계약 만료 통보를 구두로만 받았는데 증거가 될까요?',
        answer:
          '<p>구두 통보만으로도 계약 만료 사실은 인정될 수 있습니다. 다만 증거를 위해 사업주에게 문자나 이메일로 확인 요청을 보내고, 그 답변을 보관해두세요.</p>',
      },
      {
        question: '1년 계약을 3번 갱신했는데 이번에 안 된다고 합니다. 부당해고인가요?',
        answer:
          '<p>3회 갱신은 갱신기대권이 인정될 가능성이 높습니다. 실업급여를 신청하면서 동시에 노동위원회에 부당해고 구제신청을 검토해보세요.</p>',
      },
      {
        question: '계약직인데 고용보험 미가입이면 실업급여를 못 받나요?',
        answer:
          '<p>사업주가 고용보험 가입의무를 이행하지 않은 것이므로, 근로복지공단에 피보험자격 확인청구를 하면 소급 가입이 가능합니다. 근로계약서와 급여 입금 내역이 증거가 됩니다.</p>',
      },
      {
        question: '계약 만료 후 프리랜서로 일하면 실업급여가 중단되나요?',
        answer:
          '<p>프리랜서 소득이 발생하면 실업인정 시 가능한 한 신고해야 합니다. 월 소득이 일정 금액을 초과하면 해당 기간의 구직급여가 감액되거나 중단될 수 있습니다.</p>',
      },
    ],
    cta: { text: '계약만료 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '기간제 갱신기대권', href: '/guide/dismissal/dismissal-fixed-term-2year-conversion' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '부당해고 구제신청', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '고용센터 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 4. 건강사유 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-health-quit',
    keyword: '건강 사유 퇴사 실업급여',
    questionKeyword: '몸이 아파서 퇴사했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '건강 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '질병·건강 사유 퇴사 실업급여 수급 조건 완벽 정리 | 로앤가이드',
      description:
        '건강이 나빠져 더 이상 출근할 수 없어 퇴사했다면, 자진퇴사도 실업급여 대상이 되는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>허리 디스크가 심해져서 출근 자체가 어려워졌습니다. 병원에서 "당분간 절대 안정이 필요하다"고 했는데, 회사에서는 병가를 줄 수 없다고 합니다. 결국 퇴사를 했는데, 자진퇴사라서 실업급여를 못 받을까 걱정됩니다. 건강 사유로 인한 퇴사도 의사 진단서가 있으면 정당한 이직으로 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '건강 사유 정당한 이직 인정 기준',
        content:
          '<p><strong style="color:#1e3a5f">의사의 진단에 따라 계속 근무가 어렵다고 인정되면 정당한 이직 사유입니다.</strong></p>\n<p>고용보험법 시행규칙 별표2에 따라 "본인의 질병이나 부상 등으로 근로가 불가능하게 된 경우"는 수급자격 제한 사유에 해당하지 않습니다.</p>\n<ul>\n<li><strong>의사 진단서 필수</strong> — "근로가 어렵다" 또는 "절대 안정이 필요하다"는 내용의 진단서가 있어야 합니다.</li>\n<li><strong>질병의 종류 불문</strong> — 신체 질환, 정신 질환(우울증, 공황장애 등) 모두 해당됩니다.</li>\n<li><strong>업무와의 관련성 불문</strong> — 업무상 질병이 아니어도 됩니다. 개인 질병도 인정될 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 진단서에 "근로 불가능" 또는 "장기 치료 필요"라는 의사 소견이 있으면 실업급여 수급이 가능합니다.</blockquote>',
      },
      {
        title: '건강 퇴사 시 실업급여와 상병급여 선택',
        content:
          '<p><strong style="color:#1e3a5f">구직활동이 어려울 정도로 아프면 상병급여를 받을 수 있습니다.</strong></p>\n<p>실업급여 수급 중 질병으로 구직활동이 불가능한 경우, 구직급여 대신 상병급여를 받을 수 있습니다. 금액은 구직급여와 동일합니다.</p>\n<ul>\n<li><strong>상병급여 요건</strong> — 7일 이상 계속하여 질병·부상으로 취업이 불가능하고, 의사 진단서를 제출해야 합니다.</li>\n<li><strong>구직급여와 금액 동일</strong> — 1일 수급액은 구직급여와 같으며, 수급기간도 구직급여 수급기간에서 차감됩니다.</li>\n<li><strong>최장 기간</strong> — 구직급여 수급기간 범위 내에서 상병급여를 받을 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>건강 퇴사 후 실업급여·상병급여 수급 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">질병 유형과 치료 기간을 입력하면 최적의 수급 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '건강 퇴사자가 주의할 점 3가지',
        content:
          '<p><strong style="color:#1e3a5f">건강 퇴사도 12개월 이내 신청이 필수입니다.</strong></p>\n<ul>\n<li><strong>치료 중에도 신청 가능</strong> — 치료가 끝날 때까지 기다릴 필요 없습니다. 수급자격 인정신청 후 상병급여로 전환하면 됩니다.</li>\n<li><strong>진단서 날짜 확인</strong> — 퇴사 시점 전후의 진단서가 있어야 합니다. 퇴사 후 한참 뒤에 발급받은 진단서는 증명력이 떨어집니다.</li>\n<li><strong>회복 후 구직활동 전환</strong> — 건강이 회복되면 상병급여에서 구직급여로 전환하고 구직활동을 시작해야 합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조기재취업수당 부지급 처분과 수급자격 보호',
        summary:
          '서울행정법원 2008구합8216 사건에서 법원은 고용보험 수급자격자의 재취업 과정에서 실질적인 취업 의사와 능력이 있었는지를 종합적으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '건강 사유로 퇴사한 후에도 회복 의지와 구직 의사가 있다면 실업급여 수급 자격이 인정될 수 있습니다. 치료 중이라도 수급자격 인정신청은 빠르게 하세요.',
      },
    ],
    faq: [
      {
        question: '정신질환(우울증, 공황장애)으로 퇴사해도 실업급여를 받나요?',
        answer:
          '<p>네, 정신건강의학과 진단서에 "근로가 어렵다"는 소견이 있으면 정당한 이직 사유로 인정될 수 있습니다. 정신질환도 신체 질환과 동일하게 취급됩니다.</p>',
      },
      {
        question: '상병급여를 받으면 구직활동을 안 해도 되나요?',
        answer:
          '<p>네, 상병급여 수급 기간 동안은 구직활동 의무가 면제됩니다. 의사 진단서를 제출하면 실업인정 출석일에도 출석하지 않아도 됩니다.</p>',
      },
      {
        question: '건강이 회복되면 바로 구직활동을 해야 하나요?',
        answer:
          '<p>네, 건강이 회복되면 상병급여에서 구직급여로 전환되며, 이후부터 구직활동을 해야 합니다. 고용센터에 회복 사실을 알려야 합니다.</p>',
      },
      {
        question: '업무 때문에 아픈 건데 산재와 실업급여를 동시에 받을 수 있나요?',
        answer:
          '<p>산재보험 휴업급여와 실업급여는 동시 수급이 불가능합니다. 산재가 인정되면 휴업급여를 먼저 받고, 산재 치료 종결 후 실업급여를 신청할 수 있습니다.</p>',
      },
    ],
    cta: { text: '건강 퇴사 실업급여·상병급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '질병 휴직 실업급여', href: '/guide/unemployment/unemployment-illness-suspension' },
      { label: '연장급여 조건', href: '/guide/unemployment/unemployment-extended-illness-caring' },
      { label: '자발적 퇴사 실업급여 유형', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 첫 방문 체크리스트', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 5. 가족돌봄 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-family-care-quit',
    keyword: '가족돌봄 간병 퇴사 실업급여',
    questionKeyword: '부모님 간병 때문에 퇴사했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '가족돌봄 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '가족 간병·돌봄 퇴사 실업급여 인정 조건 정리 | 로앤가이드',
      description:
        '부모님 간병이나 자녀 돌봄 때문에 퇴사를 고민 중이라면, 실업급여 수급 가능 조건을 지금 확인하세요.',
    },
    intro:
      '<p>어머니가 갑자기 쓰러지셔서 수술을 받으셨습니다. 간병할 사람이 없어 회사를 그만둬야 하는데, 자진퇴사면 실업급여를 못 받을까 걱정됩니다. 가족의 질병·부상으로 인한 간병이 필요하여 퇴사한 경우도 정당한 이직 사유로 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '가족돌봄이 정당한 이직 사유인 기준',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 가족의 질병·부상 간병으로 인한 퇴사는 정당한 이직 사유입니다.</strong></p>\n<ul>\n<li><strong>가족 범위</strong> — 배우자, 부모, 배우자의 부모, 조부모, 자녀, 손자녀가 해당됩니다.</li>\n<li><strong>간병 필요성</strong> — 가족이 질병·부상으로 30일 이상 간병이 필요하고, 다른 간병인을 구할 수 없는 경우입니다.</li>\n<li><strong>돌봄 사유</strong> — 영유아 돌봄, 장애인 가족 돌봄 등도 가족돌봄 사유에 포함될 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 간병 대상 가족의 진단서와 가족관계증명서가 핵심 증빙서류입니다.</blockquote>',
      },
      {
        title: '가족돌봄 퇴사 실업급여 신청 서류',
        content:
          '<p><strong style="color:#1e3a5f">간병 필요성을 증명할 서류를 미리 준비하세요.</strong></p>\n<ul>\n<li><strong>가족 진단서</strong> — 간병이 필요하다는 의사 소견이 포함된 진단서입니다.</li>\n<li><strong>가족관계증명서</strong> — 간병 대상과의 가족 관계를 증명합니다.</li>\n<li><strong>간병 불가피성 증빙</strong> — 다른 가족이 간병할 수 없는 사정(해외 거주, 질병, 미성년 등)을 설명하는 자료입니다.</li>\n<li><strong>가족돌봄휴직 신청 거부 기록(있는 경우)</strong> — 회사에 가족돌봄휴직을 신청했으나 거부당한 기록이 있으면 더욱 유리합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>가족돌봄 퇴사 실업급여 자격, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">간병 사유와 가족 관계를 입력하면 수급 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '가족돌봄휴직을 먼저 활용할 수 있는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전 가족돌봄휴직을 신청하면 고용을 유지하면서 간병할 수 있습니다.</strong></p>\n<p>남녀고용평등법 제22조의2에 따라 가족돌봄휴직은 최대 90일(연간)까지 사용할 수 있습니다. 사업주는 정당한 사유 없이 거부할 수 없습니다.</p>\n<ul>\n<li><strong>급여</strong> — 가족돌봄휴직 급여는 고용보험에서 월 최대 약 50만원이 지급됩니다.</li>\n<li><strong>거부 시 대응</strong> — 사업주가 부당하게 거부하면 고용노동부에 신고할 수 있으며, 이 사실 자체가 퇴사 시 정당한 이직 사유가 됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험료 산정 기준과 근로자 보호',
        summary:
          '대법원 2007구합1972 사건에서 법원은 회사가 임직원에게 지급한 경영성과금이 근로기준법상 임금에 해당하여 고용보험료 산정 기준인 임금총액에 포함되어야 한다고 판시했습니다.',
        takeaway:
          '실업급여 수급액은 퇴직 전 평균임금을 기준으로 산정됩니다. 경영성과금 등 정기적으로 받던 금품도 임금에 포함되므로, 수급액 산정 시 누락 없이 신고하세요.',
      },
    ],
    faq: [
      {
        question: '시부모님 간병도 가족돌봄 퇴사 사유로 인정되나요?',
        answer:
          '<p>네, 배우자의 부모(시부모·장인·장모)도 가족 범위에 포함됩니다. 가족관계증명서로 관계를 증명하면 됩니다.</p>',
      },
      {
        question: '간병 기간이 끝나면 바로 구직활동을 해야 하나요?',
        answer:
          '<p>네, 간병 사유가 해소되면 구직급여로 전환되며 구직활동 의무가 생깁니다. 간병 중에는 상병급여와 유사하게 구직활동이 면제될 수 있습니다.</p>',
      },
      {
        question: '가족돌봄휴직 중에 해고되면 실업급여를 받을 수 있나요?',
        answer:
          '<p>가족돌봄휴직 중 해고는 위법입니다. 다만 해고가 된 경우 비자발적 이직에 해당하므로 실업급여 수급은 가능합니다. 동시에 부당해고 구제신청도 검토하세요.</p>',
      },
      {
        question: '부모님이 고령으로 돌봄이 필요한 것도 인정되나요?',
        answer:
          '<p>고령 자체만으로는 어렵고, 질병·부상으로 인해 일상생활이 어렵다는 의사 소견이 필요합니다. 장기요양등급 인정서가 있으면 증빙에 도움이 됩니다.</p>',
      },
    ],
    cta: { text: '가족돌봄 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여 유형', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '연장급여 질병·돌봄', href: '/guide/unemployment/unemployment-extended-illness-caring' },
      { label: '육아휴직 후 퇴사 실업급여', href: '/guide/unemployment/unemployment-maternity-voluntary-quit' },
      { label: '실업급여 첫 방문', href: '/guide/unemployment/first-application-employment-center-checklist' },
    ],
  },

  // ── 6. 수습기간 해고 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-probation-fired',
    keyword: '수습기간 해고 실업급여',
    questionKeyword: '수습기간에 해고되면 실업급여를 받을 수 있나요?',
    ctaKeyword: '수습 해고 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '수습기간 해고 실업급여 받는 조건 3가지 | 로앤가이드',
      description:
        '수습기간에 갑자기 해고 통보를 받았다면, 실업급여 수급 가능 조건과 부당해고 여부를 지금 확인하세요.',
    },
    intro:
      '<p>입사한 지 2개월밖에 안 됐는데 수습 평가에서 탈락했다며 해고 통보를 받았습니다. 수습기간이라 해고가 자유롭다고 들었는데, 실업급여라도 받을 수 있을지 막막합니다. 수습기간 해고도 비자발적 이직에 해당하므로 고용보험 가입기간 등 요건을 갖추면 실업급여를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '수습 해고도 실업급여 대상입니다',
        content:
          '<p><strong style="color:#1e3a5f">수습기간 해고는 사업주에 의한 비자발적 이직입니다.</strong></p>\n<p>수습 해고는 근로자가 원해서 나간 것이 아니므로 고용보험법상 비자발적 이직에 해당할 소지가 있습니다. 다만 실업급여를 받으려면 피보험기간 180일 요건을 충족해야 합니다.</p>\n<ul>\n<li><strong>현 직장만으로 180일 미달</strong> — 수습 3개월이면 약 90일이므로 현 직장만으로는 180일을 채울 수 없습니다.</li>\n<li><strong>이전 직장 피보험기간 합산</strong> — 이전 직장에서의 고용보험 가입기간이 있다면 합산하여 180일을 채울 수 있습니다.</li>\n<li><strong>합산 조건</strong> — 이전 직장 퇴사 시 실업급여를 받지 않았어야 합산이 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수습 해고 자체는 실업급여 수급 사유가 됩니다. 관건은 이전 직장 포함 180일 피보험기간 충족 여부입니다.</blockquote>',
      },
      {
        title: '수습 해고가 부당해고일 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">수습기간이라도 해고 사유와 절차가 정당해야 합니다.</strong></p>\n<p>근로기준법 제23조에 따라 수습 중이라도 정당한 이유 없이 해고할 수 없습니다. 다만 수습 3개월 이내에는 해고예고 의무가 면제됩니다.</p>\n<ul>\n<li><strong>정당한 해고 사유</strong> — 업무 적격성, 근무태도 등 객관적 사유가 있어야 합니다.</li>\n<li><strong>평가 기준의 공정성</strong> — 수습 평가 기준이 사전에 고지되지 않았거나, 동일 기준이 다른 수습직원에게는 적용되지 않았다면 부당합니다.</li>\n<li><strong>부당해고 구제</strong> — 수습 해고가 부당하다면 노동위원회에 구제신청이 가능하며, 실업급여 신청과 병행할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>수습 해고 후 실업급여·부당해고 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">수습 기간, 해고 사유, 이전 직장 근무기간을 입력하면 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수습 해고 시 확인해야 할 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">해고 통보를 받으면 즉시 확인할 3가지입니다.</strong></p>\n<ul>\n<li><strong>이직확인서 이직 사유</strong> — "회사 사정에 의한 이직" 또는 "수습 불합격에 의한 해고"로 기재되었는지 확인하세요.</li>\n<li><strong>피보험기간 합산 가능 여부</strong> — 고용보험 홈페이지에서 이전 직장 포함 총 피보험기간을 확인하세요.</li>\n<li><strong>해고예고수당</strong> — 수습 3개월 초과 시 해고예고(30일 전 통보 또는 30일분 해고예고수당)가 필요합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 청원경찰 고용보험 적용과 피보험자격 확인',
        summary:
          '대법원 2007구합3176 사건에서 법원은 고용보험법상 적용 제외 요건의 해석은 엄격해야 하며, 청원경찰에 대한 고용보험 적용 여부를 판단할 때 실질적인 근로관계를 기준으로 해야 한다고 판시했습니다.',
        takeaway:
          '수습기간 근로자도 고용보험 가입 대상입니다. 만약 사업주가 수습이라며 고용보험에 가입하지 않았다면 소급 가입을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '수습 3개월인데 해고예고도 없이 즉시 해고당했습니다. 위법인가요?',
        answer:
          '<p>근로기준법 제35조에 따라 수습 3개월 이내에는 해고예고 의무가 면제됩니다. 다만 해고 사유 자체가 부당하다면 부당해고로 다툴 수 있습니다.</p>',
      },
      {
        question: '이전 직장에서 실업급여를 받았으면 피보험기간 합산이 안 되나요?',
        answer:
          '<p>맞습니다. 이전에 실업급여를 수급한 기간의 피보험기간은 합산되지 않습니다. 수급 이후 새로 쌓인 피보험기간만 합산 대상입니다.</p>',
      },
      {
        question: '수습 1개월 만에 해고되면 실업급여를 못 받나요?',
        answer:
          '<p>이전 직장 피보험기간과 합산하여 180일 이상이면 받을 수 있습니다. 합산해도 180일 미만이면 수급이 어렵습니다.</p>',
      },
      {
        question: '수습 해고인데 사업주가 자발적 퇴사로 이직확인서를 작성하면요?',
        answer:
          '<p>고용센터에 이의신청하세요. 해고 통보 문자, 이메일 등 해고 사실을 증명할 수 있는 자료를 첨부하면 고용센터가 사실관계를 확인합니다.</p>',
      },
    ],
    cta: { text: '수습 해고 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '수습기간 부당해고', href: '/guide/dismissal/dismissal-probation-unfair-cases' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 구제신청', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
    ],
  },
];
