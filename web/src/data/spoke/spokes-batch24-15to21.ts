import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [퇴사를 앞둔 근로자]의 [실업급여를 확실히 받기 위해 퇴사 전에 미리 챙겨야 할 요건과 서류를 모르는 상황]에서 [퇴사 전 체크리스트와 핵심 준비사항 안내]를 돕는 페이지다.
// 16. 이 페이지는 [회사와 권고사직 합의서를 쓰려는 근로자]의 [불리한 조항을 피하고 유리한 조건을 협상하고 싶은 상황]에서 [합의서 작성 시 주의할 점과 협상 전략 안내]를 돕는 페이지다.
// 17. 이 페이지는 [퇴직금 계산이 맞는지 확인하고 미지급 시 대응하고 싶은 근로자]의 [퇴직금 산정 기준과 체불 대응법을 한 번에 파악하려는 상황]에서 [계산 기준과 미지급 대응 절차 안내]를 돕는 페이지다.
// 18. 이 페이지는 [직장 내 괴롭힘을 당하고 있는 근로자]의 [신고 절차와 보호 조치를 모르는 상황]에서 [증거 확보부터 구제 신청까지 4단계 절차 안내]를 돕는 페이지다.
// 19. 이 페이지는 [근로감독관에게 신고하기 전에 어떤 증거를 준비해야 하는지 모르는 근로자]의 [증거 목록을 체계적으로 준비하려는 상황]에서 [증거 종류별 확보 방법과 체크리스트 안내]를 돕는 페이지다.
// 20. 이 페이지는 [계약직 계약이 만료된 근로자]의 [실업급여 수급 가능 여부와 신청 조건을 파악하려는 상황]에서 [계약만료 시 실업급여 요건과 신청 절차 안내]를 돕는 페이지다.
// 21. 이 페이지는 [중고거래에서 사기를 당해 환불을 받고 싶은 피해자]의 [현실적으로 돈을 돌려받을 수 있는 방법을 모르는 상황]에서 [증거 확보부터 강제집행까지 4단계 환수 절차 안내]를 돕는 페이지다.

export const spokesBatch24_15to21: SpokePage[] = [
  // ───────────────────────────────────────────
  // 15. unemployment / pre-resignation-benefit-prep
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'pre-resignation-benefit-prep',
    keyword: '실업급여 퇴사 전 준비 체크리스트',
    questionKeyword: '실업급여 받으려면 퇴사 전에 뭘 준비해야 하나요?',
    ctaKeyword: '실업급여 퇴사 전 준비',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '실업급여 퇴사 전 준비 5가지 체크리스트 | 로앤가이드',
      description:
        '퇴사를 앞두고 실업급여를 확실히 받고 싶다면, 퇴사 전에 반드시 확인해야 할 5가지 요건과 서류를 지금 확인하세요.',
    },
    intro:
      '<p>이직을 결심했지만, 실업급여를 받을 수 있을지 걱정됩니다. "자발적 퇴사면 못 받는 거 아닌가?" 하는 생각에 선뜻 사직서를 내지 못하고 있습니다. 막상 퇴사한 뒤에 "이 서류가 없어서 안 됩니다"라는 말을 들으면 되돌릴 수 없습니다. 퇴사 전에 미리 챙겨야 할 요건과 서류를 정리해드립니다.</p>',
    sections: [
      {
        title: '실업급여 수급 요건 3가지 핵심 확인',
        content:
          '<p><strong style="color:#1e3a5f">「고용보험법」 제40조에 따라 실업급여를 받으려면 3가지 요건을 모두 충족해야 합니다. 퇴사 전에 미리 확인하면 수급 탈락을 방지할 수 있습니다</strong></p>\n<ul>\n<li><strong>고용보험 가입 기간 180일 이상</strong> — 퇴직일 이전 18개월 중 피보험 단위기간이 합산 180일 이상이어야 합니다. 주 15시간 미만 초단시간 근로는 산입되지 않으므로 급여명세서로 확인하세요</li>\n<li><strong>비자발적 이직 사유</strong> — 자발적 퇴사는 원칙적으로 수급 불가입니다. 다만 임금체불, 근로조건 변경, 직장 내 괴롭힘, 통근 곤란 등 정당한 사유가 있으면 자발적 퇴사도 수급 가능합니다</li>\n<li><strong>재취업 의사와 능력</strong> — 퇴직 후 지체 없이 고용센터에 출석해 구직 등록을 해야 합니다. 질병·부상으로 즉시 취업이 어려운 경우 상병급여로 전환 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 180일 가입 + 비자발적 이직 + 재취업 의사 = 3요건 충족</blockquote>',
      },
      {
        title: '퇴사 전에 반드시 챙길 서류와 기록',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 후에는 회사에 자료를 요청하기 어렵습니다. 재직 중에 미리 확보해야 할 서류를 정리합니다</strong></p>\n<ul>\n<li><strong>근로계약서 사본</strong> — 계약 기간, 근무 시간, 급여 조건이 명시된 원본 또는 사본을 확보하세요. 이직 사유 입증에 필요합니다</li>\n<li><strong>급여명세서 최근 6개월</strong> — 고용보험 가입 기간과 평균임금 산정의 기초 자료입니다. 퇴사 후 급여명세서 발급이 거부될 수 있으니 미리 저장하세요</li>\n<li><strong>이직 사유 증빙자료</strong> — 임금체불이면 통장 내역과 체불 내역 캡처, 괴롭힘이면 대화 기록·녹음·진단서, 근로조건 변경이면 변경 통보 문서를 확보하세요. 이 자료가 없으면 고용센터에서 "자발적 퇴사"로 분류될 수 있습니다</li>\n<li><strong>4대보험 가입이력 확인</strong> — 국민건강보험공단 홈페이지에서 고용보험 가입 이력을 조회하세요. 회사가 고용보험에 가입시키지 않았다면 퇴사 전에 노동청에 신고해야 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 실업급여 수급 가능성과 준비사항을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴사 직후 반드시 해야 할 행동 3단계',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 후 12개월 이내에 신청하지 않으면 수급권이 소멸합니다. 퇴사 직후 절차를 놓치지 마세요</strong></p>\n<ul>\n<li><strong>이직확인서 발급 요청</strong> — 퇴사일로부터 10일 이내에 회사가 고용센터에 이직확인서를 제출해야 합니다(「고용보험법」 제42조). 회사가 지연하면 고용센터(1350)에 직접 요청할 수 있습니다</li>\n<li><strong>구직 등록과 수급자격 인정 신청</strong> — 관할 고용센터에 방문하여 구직 등록 후 수급자격 인정 신청을 합니다. 온라인(고용보험 홈페이지)으로 사전 신청도 가능합니다</li>\n<li><strong>수급자격 교육 이수</strong> — 수급자격 인정을 받으면 고용센터에서 실업급여 수급자 교육을 이수해야 합니다. 교육을 이수해야 첫 실업인정일이 지정되고 급여가 지급됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 이직확인서 발급 → 구직 등록 + 수급 신청 → 교육 이수 → 실업인정</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2018두47264 (2021.03.18)',
        summary:
          '대법원 2018두47264 사건(2021.03.18 선고)에서 법원은 육아휴직급여 청구 기간이 종료된 때부터 12개월 이내에 신청해야 한다는 규정이 강행규정이라고 판시했습니다. 기한 내에 신청하지 않으면 수급권이 소멸됩니다.',
        takeaway:
          '실업급여도 마찬가지로 퇴직일로부터 12개월 이내에 신청해야 합니다. 기한을 하루라도 넘기면 수급 자체가 불가능하므로, 퇴사 직후 바로 고용센터를 방문하세요.',
      },
    ],
    faq: [
      {
        question: '자발적으로 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '<strong>정당한 사유가 있으면 가능합니다.</strong> 임금체불 2개월 이상, 근로조건 일방 변경, 직장 내 괴롭힘, 통근 시간 3시간 이상 등 고용보험법 시행규칙이 정한 사유에 해당하면 자발적 퇴사도 실업급여를 받을 수 있습니다. 이를 입증할 자료를 퇴사 전에 미리 확보하세요.',
      },
      {
        question: '고용보험 가입 기간이 180일이 안 되면 방법이 없나요?',
        answer:
          '<strong>이전 직장의 피보험 기간을 합산할 수 있습니다.</strong> 직전 직장 퇴사일로부터 3년 이내에 다시 고용보험에 가입했다면, 이전 직장에서의 피보험 기간을 합산합니다. 국민건강보험공단에서 고용보험 가입 이력을 조회해보세요.',
      },
      {
        question: '퇴사 전에 회사에 실업급여 관련해서 요청할 것이 있나요?',
        answer:
          '<strong>이직 사유를 확인해달라고 요청하세요.</strong> 회사가 이직확인서에 "자발적 퇴사"로 기재하면 수급이 거부될 수 있습니다. 권고사직이나 계약만료 등 실제 이직 사유를 정확히 기재해달라고 요청하고, 거부하면 고용센터에 이의 제기가 가능합니다.',
      },
      {
        question: '사직서를 이미 냈는데 실업급여를 받을 수 있나요?',
        answer:
          '<strong>사직서를 냈더라도 실질적 이직 사유가 비자발적이면 가능합니다.</strong> 회사의 권유나 압박에 의한 사직, 근로조건 위반으로 인한 사직은 비자발적 이직으로 인정됩니다. 권유 문자, 대화 녹음, 동료 진술 등 증거를 함께 제출하세요.',
      },
      {
        question: '실업급여 신청 기한을 놓치면 어떻게 되나요?',
        answer:
          '<strong>퇴직일로부터 12개월이 지나면 수급권이 완전히 소멸합니다.</strong> 이 기한은 연장이나 예외가 인정되지 않는 강행규정입니다. 퇴사 후 가능한 빨리 고용센터를 방문하여 구직 등록과 수급자격 인정 신청을 하세요.',
      },
    ],
    cta: {
      text: '실업급여 수급 가능성 무료 AI 상담',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '권고사직 실업급여 수급 가이드', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '실업급여 수급 요건 정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '권고사직 전 서명 주의사항', href: '/guide/dismissal/recommended-resignation-before-signing' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '임금체불 신고 서류 준비', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ───────────────────────────────────────────
  // 16. dismissal / recommended-resignation-agreement-tips
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'recommended-resignation-agreement-tips',
    keyword: '권고사직 합의서 작성 주의사항',
    questionKeyword: '권고사직 합의서 쓸 때 뭘 주의해야 하나요?',
    ctaKeyword: '권고사직 합의서 주의점',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '권고사직 합의서 작성 시 주의할 점 5가지 | 로앤가이드',
      description:
        '회사에서 권고사직 합의서에 서명하라고 하는데 불안하다면, 불리한 조항 5가지와 협상 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>회사에서 "합의서에 서명만 하면 깔끔하게 정리해줄게"라고 합니다. 그런데 합의서 내용을 자세히 보니 "향후 일체의 청구를 포기한다"는 문구가 있습니다. 서명 한 번 잘못하면 퇴직금, 실업급여, 미지급 수당까지 모두 포기하게 될 수 있습니다. 합의서에 서명하기 전에 반드시 확인해야 할 주의사항을 정리해드립니다.</p>',
    sections: [
      {
        title: '합의서에서 반드시 확인해야 할 3가지 핵심 조항',
        content:
          '<p><strong style="color:#1e3a5f">권고사직 합의서는 근로관계 종료의 조건을 정하는 문서이므로, 불리한 조항 하나가 수백만 원의 손해로 이어질 수 있습니다</strong></p>\n<ul>\n<li><strong>이직 사유 기재 확인</strong> — 합의서에 "자발적 사직"으로 기재되면 실업급여 수급이 불가능합니다. 반드시 "권고사직" 또는 "회사의 경영상 사유에 의한 이직"으로 명시되어야 합니다. 이직확인서에도 같은 사유가 기재되는지 확인하세요</li>\n<li><strong>청구권 포기 조항 삭제</strong> — "향후 일체의 민·형사상 청구를 포기한다"는 포괄적 부제소 합의 조항은 퇴직금, 미지급 수당, 연차수당 청구권까지 모두 포기하는 것입니다. 이 조항은 반드시 삭제하거나 범위를 특정하세요</li>\n<li><strong>퇴직금·정산금 명시</strong> — 퇴직금 금액, 미사용 연차수당, 미지급 임금 등 정산 항목과 금액을 구체적으로 명시해야 합니다. "추후 정산"이라는 모호한 표현은 분쟁의 원인이 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이직 사유 "권고사직" 명시 + 포괄 포기 조항 삭제 + 정산금 구체화</blockquote>',
      },
      {
        title: '유리한 조건을 협상하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">권고사직은 해고가 아니라 합의이므로, 근로자도 조건을 제시할 권리가 있습니다. 서명을 서두르지 마세요</strong></p>\n<ul>\n<li><strong>위로금(퇴직 위로금) 협상</strong> — 법적 의무는 아니지만, 회사가 해고의 부담을 피하기 위해 권고사직을 제안하는 경우가 많습니다. 근속 연수에 비례한 위로금(통상 1~3개월 급여)을 요청할 수 있습니다</li>\n<li><strong>퇴직일 조정</strong> — 고용보험 가입 기간 180일 요건을 충족하도록 퇴직일을 조정하세요. 며칠 차이로 실업급여 수급이 좌우될 수 있습니다. 또한 퇴직금 산정을 위해 근속 연수가 1년을 넘기는 것이 유리합니다</li>\n<li><strong>검토 기간 확보</strong> — 합의서에 즉시 서명하라는 압박을 받으면, 최소 3일의 검토 기간을 요청하세요. 그 사이에 노무사나 변호사의 검토를 받는 것이 안전합니다. 서명 후에는 번복이 매우 어렵습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 합의서 조항별 위험 요소를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '서명 후 문제가 생겼을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">이미 합의서에 서명했더라도 취소할 수 있는 경우가 있습니다. 포기하지 마세요</strong></p>\n<ul>\n<li><strong>강박에 의한 서명</strong> — "서명 안 하면 해고 처리한다", "오늘 안에 서명해라"는 식의 압박을 받고 서명했다면 「민법」 제110조에 따라 의사표시를 취소할 수 있습니다. 압박 상황의 녹음, 문자, 동료 진술을 확보하세요</li>\n<li><strong>중요 사항 착오</strong> — 합의서 내용을 제대로 설명받지 못하고 서명한 경우(예: 실업급여를 받을 수 있다고 했는데 "자발적 사직"으로 처리된 경우) 착오에 의한 취소가 가능합니다</li>\n<li><strong>퇴직금·임금 미지급</strong> — 합의서에 명시된 퇴직금이나 정산금을 회사가 지급하지 않으면, 합의서와 별개로 노동청에 임금체불 진정을 제기할 수 있습니다. 「근로기준법」 제36조에 따라 퇴직일로부터 14일 이내 지급 의무가 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">강박·착오 서명 → 취소 가능 / 합의금 미지급 → 노동청 진정</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 서울행법 2024구합52434 (2025.04.18)',
        summary:
          '서울행정법원 2024구합52434 사건(2025.04.18 선고)에서 법원은 노동조합 사무실 미제공이 지배·개입의 부당노동행위에 해당한다고 판시했습니다. 단체협약 유효기간이 만료된 후에도 사용자에게 성실한 교섭 의무가 있다고 확인했습니다.',
        takeaway:
          '사용자가 합의 과정에서 성실한 교섭 없이 일방적 조건을 강요하면 부당노동행위에 해당할 수 있습니다. 권고사직 합의서도 대등한 교섭의 결과여야 하므로, 일방적 서명 압박은 거부할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '합의서에 서명하면 부당해고 구제신청을 못 하나요?',
        answer:
          '<strong>원칙적으로 어렵지만 예외가 있습니다.</strong> 합의에 강박이나 사기가 개입되었다면 합의의 효력을 다툴 수 있습니다. 서명 전에 녹음, 문자 등 증거를 확보해두면 나중에 구제신청의 근거가 됩니다.',
      },
      {
        question: '합의서에 퇴직금 포기 조항이 있으면 정말 못 받나요?',
        answer:
          '<strong>퇴직금은 법정 청구권이므로 포기 합의의 효력이 제한됩니다.</strong> 대법원 판례에 따르면, 퇴직금 사전포기 약정은 「근로자퇴직급여보장법」에 위반되어 무효입니다. 합의서에 포기 조항이 있더라도 퇴직금은 별도로 청구할 수 있습니다.',
      },
      {
        question: '회사가 합의서 검토 기간을 주지 않으면 어떻게 하나요?',
        answer:
          '<strong>즉시 서명할 법적 의무는 없습니다.</strong> "검토할 시간이 필요합니다"라고 말하고 서류 사본을 가지고 나오세요. 회사가 거부하면 핸드폰으로 합의서를 촬영하세요. 그 자리에서 서명하라는 압박 자체가 나중에 강박에 의한 의사표시 취소의 근거가 됩니다.',
      },
      {
        question: '권고사직 합의서와 사직서는 다른 건가요?',
        answer:
          '<strong>법적 효과가 완전히 다릅니다.</strong> 사직서는 근로자의 일방적 사직 의사표시이고, 권고사직 합의서는 쌍방이 조건을 합의하는 계약입니다. 사직서만 쓰면 실업급여 수급이 어려워지므로, 반드시 "권고사직 합의서" 형태로 작성하세요.',
      },
      {
        question: '합의서에 비밀유지 조항이 있으면 문제가 되나요?',
        answer:
          '<strong>비밀유지 조항 자체는 유효하지만 범위가 중요합니다.</strong> 합의 내용(위로금 금액 등)의 비밀유지는 통상적입니다. 다만 "노동청 진정, 소송 제기를 하지 않겠다"는 부제소 합의는 법적 권리를 제한하므로 삭제를 요구하세요.',
      },
    ],
    cta: {
      text: '권고사직 합의서 검토 무료 AI 상담',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '권고사직 전 서명 주의사항', href: '/guide/dismissal/recommended-resignation-before-signing' },
      { label: '권고사직 실업급여 수급 가이드', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '부당해고 초기 대응 가이드', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '임금체불 신고 서류 준비', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ───────────────────────────────────────────
  // 17. retirement / retirement-pay-standard-and-nonpayment
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-pay-standard-and-nonpayment',
    keyword: '퇴직금 계산 기준과 미지급 대응',
    questionKeyword: '퇴직금 계산이 맞는지, 안 주면 어떻게 하나요?',
    ctaKeyword: '퇴직금 미지급 대응',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '퇴직금 계산 기준 3가지와 미지급 시 대응법 | 로앤가이드',
      description:
        '퇴직금이 제대로 계산됐는지 의심되거나 회사가 안 준다면, 법정 산정 기준 3가지와 체불 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴사한 지 2주가 넘었는데 퇴직금이 들어오지 않습니다. 회사에 문의하면 "곧 처리해줄게"라는 말만 반복합니다. 입금된 퇴직금 금액도 생각보다 적어서 계산이 맞는 건지 의문입니다. 퇴직금 산정 기준과 미지급 시 법적 대응 방법을 정리해드립니다.</p>',
    sections: [
      {
        title: '퇴직금 산정 기준 3가지 핵심',
        content:
          '<p><strong style="color:#1e3a5f">「근로자퇴직급여보장법」 제8조에 따라 1년 이상 근속하고 4주 평균 1주 15시간 이상 근로한 근로자에게 퇴직금 지급 의무가 있습니다</strong></p>\n<ul>\n<li><strong>계산 공식</strong> — 퇴직금 = 1일 평균임금 × 30일 × (총 근속일수 ÷ 365). 평균임금은 퇴직일 이전 3개월간 지급된 임금 총액을 해당 기간의 총 일수로 나눈 금액입니다</li>\n<li><strong>평균임금에 포함되는 항목</strong> — 기본급, 고정 수당(직책수당·식대·교통비), 연장·야간·휴일근로수당, 상여금(정기적·일률적 지급분), 연차수당이 포함됩니다. 경조사비·실비변상 등 은혜적 급여는 제외됩니다</li>\n<li><strong>근속 기간 산정</strong> — 입사일부터 퇴직일까지 연속 근무 기간입니다. 휴직 기간(육아휴직·병가 등)도 원칙적으로 근속 기간에 포함됩니다. 계약 갱신을 반복한 경우 최초 계약일부터 산정합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공식: 1일 평균임금 × 30일 × (근속일수 ÷ 365) = 퇴직금</blockquote>',
      },
      {
        title: '미지급 시 법적 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">「근로기준법」 제36조에 따라 사용자는 퇴직일로부터 14일 이내에 퇴직금을 지급해야 합니다. 미지급 시 지연이자(연 20%)가 가산됩니다</strong></p>\n<ul>\n<li><strong>1단계: 내용증명 발송</strong> — 회사에 퇴직금 지급을 요청하는 내용증명을 보내세요. 퇴직일, 근속 기간, 청구 금액을 명시합니다. 내용증명 자체가 법적 효력은 없지만, 이후 진정·소송에서 "지급을 요청했다"는 증거가 됩니다</li>\n<li><strong>2단계: 노동청 진정 제기</strong> — 관할 지방고용노동청에 임금체불 진정서를 제출합니다. 근로계약서, 급여명세서, 퇴직금 미지급 증빙(퇴직 후 통장 내역)을 첨부하세요. 근로감독관이 사실 조사 후 시정 명령을 내립니다</li>\n<li><strong>3단계: 체당금 제도 활용</strong> — 회사가 도산·폐업한 경우 「임금채권보장법」에 따라 고용노동부에서 퇴직금을 대신 지급(체당금)합니다. 퇴직일 기준 최종 3년분의 퇴직금, 최종 3개월분의 임금, 최종 3년분의 휴업수당이 대상입니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 퇴직금 계산과 미지급 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직금 소멸시효와 지연이자',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 청구권의 소멸시효는 3년이며, 14일 초과 지연 시 연 20% 지연이자가 발생합니다</strong></p>\n<ul>\n<li><strong>소멸시효 3년</strong> — 퇴직일 다음 날부터 3년 이내에 청구해야 합니다(「근로기준법」 제49조). 3년이 지나면 청구권이 소멸하므로 빠른 대응이 중요합니다. 다만 대법원 판례에 따르면 사용자의 시효 주장이 신의성실 원칙에 반하면 권리남용으로 볼 수 있습니다</li>\n<li><strong>지연이자 연 20%</strong> — 퇴직일로부터 14일 이후부터 지급일까지 미지급 퇴직금에 대해 연 20%의 지연이자가 발생합니다(「근로기준법」 제37조). 예를 들어 퇴직금 1,000만 원을 6개월 체불하면 약 100만 원의 지연이자가 추가됩니다</li>\n<li><strong>형사처벌</strong> — 퇴직금 체불은 「근로기준법」 제109조에 따라 3년 이하 징역 또는 3천만 원 이하 벌금에 해당합니다. 노동청 진정 후에도 미지급 시 사업주가 형사처벌 대상이 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 14일 이내 지급 의무 / 3년 소멸시효 / 지연이자 연 20%</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2024다294705 (2025.05.29)',
        summary:
          '대법원 2024다294705 사건(2025.05.29 선고)에서 법원은 퇴직금 청구에서 소멸시효가 완성되었더라도 채무자의 시효 주장이 신의성실 원칙에 반하면 권리남용으로 볼 수 있다고 판시했습니다.',
        takeaway:
          '퇴직금 청구 시효 3년이 지났더라도 바로 포기하지 마세요. 회사가 퇴직금 지급을 약속하거나 지연 사유를 고지했다면, 소멸시효 주장이 신의칙에 반하여 인정되지 않을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '1년 미만 근무했는데 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 불가합니다.</strong> 「근로자퇴직급여보장법」 제4조에 따라 계속 근로 기간이 1년 이상이어야 퇴직금 지급 대상입니다. 다만 계약 갱신을 반복한 경우 전체 기간을 합산하여 1년 이상이면 지급 대상이 될 수 있습니다.',
      },
      {
        question: '퇴직금에 상여금이 포함되나요?',
        answer:
          '<strong>정기적·일률적으로 지급되는 상여금은 포함됩니다.</strong> 설·추석 상여금처럼 정기적으로 모든 근로자에게 지급되는 상여금은 평균임금에 포함됩니다. 다만 개인 성과에 따른 인센티브는 제외될 수 있으므로 급여명세서를 확인하세요.',
      },
      {
        question: '퇴직금을 중간정산 받았는데 나머지 기간은 어떻게 되나요?',
        answer:
          '<strong>중간정산 이후 근속 기간만큼 퇴직금이 발생합니다.</strong> 중간정산 시점에서 근속 기간이 리셋되므로, 그 이후 퇴직일까지의 기간에 대해 새로 퇴직금을 산정합니다. 중간정산 영수증을 보관해두세요.',
      },
      {
        question: '회사가 폐업했는데 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>체당금 제도를 활용하세요.</strong> 회사가 도산하거나 폐업한 경우 「임금채권보장법」에 따라 고용노동부에서 최종 3년분의 퇴직금을 대신 지급합니다. 관할 고용센터에 체당금 지급 청구서를 제출하면 됩니다.',
      },
      {
        question: '퇴직금 계산이 맞는지 어떻게 확인하나요?',
        answer:
          '<strong>고용노동부 퇴직금 계산기를 활용하세요.</strong> 고용노동부 홈페이지(www.moel.go.kr)에서 무료 퇴직금 계산기를 제공합니다. 최근 3개월 급여명세서와 근속 기간을 입력하면 법정 퇴직금을 확인할 수 있습니다.',
      },
    ],
    cta: {
      text: '퇴직금 미지급 대응 무료 AI 상담',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법 정리', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 미지급 신고 절차', href: '/guide/retirement/unpaid-retirement-report-procedure' },
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
    ],
  },

  // ───────────────────────────────────────────
  // 18. dismissal / workplace-bullying-complaint-procedure
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'workplace-bullying-complaint-procedure',
    keyword: '직장 내 괴롭힘 신고 절차',
    questionKeyword: '직장 내 괴롭힘 당하면 어디에 신고하나요?',
    ctaKeyword: '직장 내 괴롭힘 신고',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '직장 내 괴롭힘 신고 4단계 절차와 증거 확보 | 로앤가이드',
      description:
        '직장에서 괴롭힘을 당하고 있는데 어떻게 대응해야 할지 모르겠다면, 증거 확보부터 구제 신청까지 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>상사가 매일같이 "넌 왜 이것도 못 하냐"며 다른 직원들 앞에서 모욕을 줍니다. 업무와 무관한 잡무를 시키고, 회식 자리에서는 일부러 제외시킵니다. 참고 버텨왔지만 이제 한계입니다. 직장 내 괴롭힘에 해당하는지, 어디에 신고해야 하는지, 단계별로 정리해드립니다.</p>',
    timelineSteps: [
      '1단계: 괴롭힘 증거 확보',
      '2단계: 사내 신고 또는 노동청 진정',
      '3단계: 사용자 조치 이행 확인',
      '4단계: 불이익 시 추가 구제 신청',
    ],
    sections: [
      {
        title: '1단계: 괴롭힘 증거 확보와 법적 기준',
        content:
          '<p><strong style="color:#1e3a5f">「근로기준법」 제76조의2에 따라 직장 내 괴롭힘은 사용자 또는 근로자가 지위·관계 등의 우위를 이용하여 업무상 적정 범위를 넘어 신체적·정신적 고통을 주거나 근무 환경을 악화시키는 행위입니다</strong></p>\n<ul>\n<li><strong>녹음과 대화 기록</strong> — 괴롭힘 발언을 핸드폰으로 녹음하세요. 대화 당사자가 녹음하는 것은 합법입니다. 카카오톡, 이메일, 사내 메신저의 모욕적 메시지도 캡처하여 날짜와 함께 보관하세요</li>\n<li><strong>일지 작성</strong> — 괴롭힘이 발생할 때마다 날짜, 시간, 장소, 가해자, 행위 내용, 목격자를 기록하세요. 수기 메모보다 날짜가 자동 기록되는 앱이나 이메일로 남기는 것이 증거력이 높습니다</li>\n<li><strong>진단서 확보</strong> — 괴롭힘으로 인한 우울증, 불안장애, 수면장애 등이 있으면 정신건강의학과 진단서를 받으세요. "직장 내 스트레스로 인한 적응장애" 등의 진단이 있으면 괴롭힘 입증에 강력한 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 3종 세트: 녹음·메시지 캡처 + 괴롭힘 일지 + 정신과 진단서</blockquote>',
      },
      {
        title: '2~3단계: 사내 신고와 사용자 조치 확인',
        content:
          '<p><strong style="color:#1e3a5f">「근로기준법」 제76조의3에 따라 사용자는 괴롭힘 신고를 받으면 즉시 조사하고, 피해자 보호 조치를 취해야 합니다</strong></p>\n<ul>\n<li><strong>사내 신고</strong> — 인사팀, 고충처리위원회, 사내 괴롭힘 신고 채널에 서면으로 신고합니다. 구두 신고만 하면 "신고 사실이 없다"고 부인당할 수 있으니 반드시 서면(이메일·내용증명)으로 남기세요</li>\n<li><strong>사용자 의무 조치</strong> — 신고 접수 후 사용자는 ①즉시 조사 실시 ②피해자에게 근무 장소 변경, 유급휴가 등 적절한 조치 ③가해자에게 징계 등 필요한 조치를 해야 합니다. 피해자의 의사에 반하는 조치는 불법입니다</li>\n<li><strong>노동청 진정</strong> — 사내 신고 후 30일이 지나도 조치가 없거나, 사용자가 오히려 피해자에게 불이익을 주면 관할 지방고용노동청에 직장 내 괴롭힘 진정서를 제출하세요. 고용노동부 민원마당(minwon.moel.go.kr)에서 온라인 접수도 가능합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 괴롭힘 해당 여부와 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 불이익 시 추가 구제 신청',
        content:
          '<p><strong style="color:#1e3a5f">괴롭힘을 신고했다는 이유로 해고, 전보, 감봉 등 불이익을 받으면 추가 구제를 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>불이익 조치 금지</strong> — 「근로기준법」 제76조의3 제6항에 따라 괴롭힘 신고를 이유로 한 해고 등 불이익 조치는 금지됩니다. 위반 시 3년 이하 징역 또는 3천만 원 이하 벌금에 처해집니다</li>\n<li><strong>부당해고 구제신청</strong> — 신고 후 해고당한 경우, 해고일로부터 3개월 이내에 노동위원회에 부당해고 구제신청을 할 수 있습니다. 괴롭힘 신고 사실과 해고의 인과관계를 입증하면 원직복직과 해고 기간 임금을 받을 수 있습니다</li>\n<li><strong>산재 신청</strong> — 직장 내 괴롭힘으로 인한 정신질환(우울증, 적응장애 등)은 업무상 질병으로 산재 인정이 가능합니다. 정신건강의학과 진단서와 괴롭힘 증거를 함께 제출하면 요양급여, 휴업급여를 받을 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불이익 대응: 부당해고 구제신청(3개월 이내) + 산재 신청 + 형사고소</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2025두33276 (2025.10.16)',
        summary:
          '대법원 2025두33276 사건(2025.10.16 선고)에서 법원은 근로자가 사직서를 제출한 후에도 구제신청이 가능한지를 다루었으며, 이미 근로관계가 종료된 경우 구제이익이 소멸한다고 판시했습니다.',
        takeaway:
          '괴롭힘에 못 이겨 성급하게 사직서를 제출하면 구제 기회를 잃을 수 있습니다. 퇴사 결정 전에 반드시 증거를 확보하고 신고 절차를 밟으세요. 사직서 제출 후에는 부당해고 구제신청이 어려워집니다.',
      },
    ],
    faq: [
      {
        question: '상사의 업무 지시가 괴롭힘에 해당할 수 있나요?',
        answer:
          '<strong>업무상 적정 범위를 넘으면 해당됩니다.</strong> 합리적 이유 없이 능력 밖의 업무를 반복 지시하거나, 업무와 무관한 잡무(개인 심부름 등)를 시키거나, 주요 업무에서 배제하는 것은 직장 내 괴롭힘에 해당할 수 있습니다.',
      },
      {
        question: '동료 간 괴롭힘도 신고할 수 있나요?',
        answer:
          '<strong>네, 동료 간 괴롭힘도 신고 대상입니다.</strong> 「근로기준법」 제76조의2는 "사용자 또는 근로자"가 가해자인 경우를 모두 포함합니다. 다만 동료 간이라도 집단 따돌림, 반복적 모욕 등 지위·관계의 우위를 이용한 행위여야 합니다.',
      },
      {
        question: '사내 신고 없이 바로 노동청에 진정할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 사내 신고 절차를 거치는 것이 일반적이지만, 가해자가 사업주 본인이거나 사내 신고 시 2차 피해가 우려되면 바로 노동청에 진정할 수 있습니다. 고용노동부 대표번호(1350)에서 안내를 받으세요.',
      },
      {
        question: '괴롭힘으로 퇴사하면 실업급여를 받을 수 있나요?',
        answer:
          '<strong>받을 수 있습니다.</strong> 직장 내 괴롭힘은 고용보험법상 "정당한 이직 사유"에 해당합니다. 괴롭힘 증거(녹음, 진단서, 신고 기록 등)를 고용센터에 제출하면 자발적 퇴사라도 실업급여 수급이 인정됩니다.',
      },
      {
        question: '괴롭힘 가해자를 형사고소할 수 있나요?',
        answer:
          '<strong>행위 유형에 따라 가능합니다.</strong> 모욕(「형법」 제311조), 명예훼손(제307조), 협박(제283조), 상해(제257조)에 해당하면 별도로 형사고소가 가능합니다. 직장 내 괴롭힘 자체는 형사처벌 대상이 아니지만, 개별 행위가 형법에 해당하면 처벌됩니다.',
      },
    ],
    cta: {
      text: '직장 내 괴롭힘 신고 무료 AI 상담',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 초기 대응 가이드', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '임금체불 신고 서류 준비', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '해고예고수당 안내', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 19. wage / labor-inspector-complaint-evidence-prep
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'labor-inspector-complaint-evidence-prep',
    keyword: '근로감독관 신고 전 증거 준비',
    questionKeyword: '근로감독관에게 신고하려면 어떤 증거를 준비해야 하나요?',
    ctaKeyword: '근로감독관 신고 증거',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '근로감독관 신고 전 준비할 증거 7가지 체크리스트 | 로앤가이드',
      description:
        '임금체불로 근로감독관에게 신고하려는데 증거가 부족할까 걱정된다면, 반드시 준비해야 할 증거 7가지를 지금 확인하세요.',
    },
    intro:
      '<p>몇 달째 월급이 밀렸습니다. 노동청에 신고하려고 하는데, "증거가 없으면 소용없다"는 말이 걱정됩니다. 어떤 자료를 가져가야 근로감독관이 제대로 조사해주는지, 막막하기만 합니다. 신고 전에 반드시 확보해야 할 증거 목록을 체크리스트로 정리해드립니다.</p>',
    sections: [
      {
        title: '근로관계를 입증하는 핵심 증거',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관에게 신고할 때 가장 먼저 확인하는 것은 "근로관계가 존재하는가"입니다. 아래 자료 중 2개 이상을 확보하세요</strong></p>\n<ul>\n<li><strong>근로계약서</strong> — 가장 기본적인 증거입니다. 사본이라도 됩니다. 계약서가 없다면 그 사실 자체가 사업주의 「근로기준법」 위반(제17조)이므로 추가 시정 명령의 근거가 됩니다</li>\n<li><strong>급여명세서·급여 이체 내역</strong> — 통장에 "OO회사"에서 입금된 내역이 있으면 근로관계의 강력한 증거입니다. 급여명세서에 기본급, 수당, 공제 항목이 나와 있으면 미지급 금액 산정에도 활용됩니다</li>\n<li><strong>4대보험 가입확인서</strong> — 국민건강보험공단에서 발급받을 수 있습니다. 고용보험에 가입되어 있으면 근로자임을 공식적으로 입증할 수 있습니다. 미가입 상태라면 이것도 별도 위반 사항이 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로계약서 + 급여 이체 내역 + 4대보험 가입확인서</blockquote>',
      },
      {
        title: '체불 금액과 기간을 입증하는 증거',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관은 "얼마를 언제부터 못 받았는지"를 구체적으로 확인합니다. 금액과 기간을 특정할 수 있는 자료를 준비하세요</strong></p>\n<ul>\n<li><strong>출퇴근 기록</strong> — 출퇴근 앱, 지문인식기 기록, 카드키 출입 기록, 교통카드 이용 내역을 확보하세요. 이 자료로 실제 근무 일수와 연장근로 시간을 입증할 수 있습니다</li>\n<li><strong>근무 일지·업무 기록</strong> — 사내 메신저(슬랙, 팀즈 등)의 업무 대화, 업무 보고 이메일, 작업 일지를 캡처해두세요. 야근·주말 근무를 지시받은 메시지가 있으면 연장근로수당 청구에 결정적입니다</li>\n<li><strong>미지급 내역 정리표</strong> — 월별로 "받아야 할 금액 vs 실제 받은 금액"을 엑셀이나 표로 정리하세요. 근로감독관이 조사할 때 이 표를 기준으로 사실 확인을 진행합니다. 구체적일수록 조사가 빨라집니다</li>\n<li><strong>사업주와의 대화 기록</strong> — "다음 달에 줄게", "지금 회사 사정이 어려워서"라는 사업주의 메시지나 녹음은 체불 사실을 인정한 증거가 됩니다. 대화 당사자 녹음은 합법이므로 안심하고 녹음하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 증거 충분성과 체불 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고서 작성과 접수 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">증거를 잘 준비해도 신고서 작성이 부실하면 조사가 늦어집니다. 접수 시 아래 사항을 확인하세요</strong></p>\n<ul>\n<li><strong>진정서 양식</strong> — 고용노동부 민원마당(minwon.moel.go.kr)에서 임금체불 진정서 양식을 내려받을 수 있습니다. 사업장명, 사업주명, 근로 기간, 체불 항목(임금·퇴직금·수당), 체불 금액, 체불 기간을 빠짐없이 기재하세요</li>\n<li><strong>관할 지방고용노동청</strong> — 사업장 소재지 관할 노동청에 제출합니다. 관할이 다르면 이송되므로 시간이 지연됩니다. 사업장 주소로 관할 노동청을 미리 확인하세요</li>\n<li><strong>접수 후 추가 대응</strong> — 접수 후 평균 2~4주 내에 근로감독관에게서 연락이 옵니다. 조사 일정이 잡히면 준비한 증거 원본과 사본 2부를 지참하세요. 조사 시 감정적 표현보다 사실 위주로 진술하는 것이 효과적입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 민원마당 온라인 또는 관할 노동청 방문 → 2~4주 내 조사 → 시정 명령</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대구지법 2018구합23680 (2019.04.17)',
        summary:
          '대구지방법원 2018구합23680 사건(2019.04.17 선고)에서 법원은 실업급여 수급자가 재취업 노력신고를 통해 구직급여를 받았으나 실제로 해외에 거주한 사실이 밝혀져 반환명령을 받은 사건을 다루었습니다.',
        takeaway:
          '고용보험 관련 신고나 급여 청구에서 허위 사실이 드러나면 반환 명령과 추가 징수가 이루어집니다. 근로감독관 신고 시에도 사실에 근거한 정확한 증거 제출이 중요하며, 과장이나 허위 자료 제출은 오히려 불이익이 됩니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서가 없어도 신고할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 근로계약서가 없다는 것 자체가 사업주의 법 위반(「근로기준법」 제17조)입니다. 급여 이체 내역, 출퇴근 기록, 동료 진술, 업무 지시 문자 등으로 근로관계를 입증하면 됩니다.',
      },
      {
        question: '증거가 부족하면 신고해봐야 소용없나요?',
        answer:
          '<strong>증거가 적어도 신고할 수 있습니다.</strong> 근로감독관은 신고를 접수하면 사업주에게 출석 요구와 자료 제출 명령을 내립니다. 사업주가 근로자명부, 임금대장, 출근부 등을 제출해야 하므로 근로자의 증거가 적어도 조사는 진행됩니다.',
      },
      {
        question: '현재 재직 중인데 신고하면 회사에서 알 수 있나요?',
        answer:
          '<strong>신고자 신원은 보호됩니다.</strong> 「근로기준법」 제104조 제2항에 따라 사용자는 신고를 이유로 근로자에게 불이익을 줄 수 없습니다. 다만 소규모 사업장에서는 추측이 가능할 수 있으니, 익명 신고(공익신고)도 고려해보세요.',
      },
      {
        question: '퇴직 후에도 임금체불 신고가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 임금체불 청구권의 소멸시효는 3년입니다. 퇴직 후에도 3년 이내라면 근로감독관에게 진정을 제기할 수 있습니다. 다만 시간이 지날수록 증거 확보가 어려워지므로 빠르게 신고하세요.',
      },
      {
        question: '근로감독관 조사 결과가 나오면 바로 돈을 받을 수 있나요?',
        answer:
          '<strong>시정 명령 후 14일 이내에 지급해야 합니다.</strong> 사업주가 시정 명령을 이행하지 않으면 검찰에 송치되어 형사처벌 대상이 됩니다. 그래도 미지급 시 민사소송(소액사건심판 등)을 통해 강제 집행할 수 있습니다.',
      },
    ],
    cta: {
      text: '임금체불 신고 증거 준비 무료 AI 상담',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 서류 준비', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '부당해고 초기 대응 가이드', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 20. unemployment / contract-expiry-unemployment-benefit
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'contract-expiry-unemployment-benefit',
    keyword: '계약직 만료 실업급여 수급 요건',
    questionKeyword: '계약직 만료되면 실업급여 받을 수 있나요?',
    ctaKeyword: '계약만료 실업급여',
    type: 'Q&A형',
    perspective: '피해자',
    meta: {
      title: '계약직 만료 후 실업급여 받는 3가지 조건 | 로앤가이드',
      description:
        '계약직 계약이 끝났는데 실업급여를 받을 수 있는지 모르겠다면, 수급 가능 요건 3가지와 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>2년 계약직이 만료되었습니다. 회사에서 갱신하지 않겠다고 통보했는데, 실업급여를 받을 수 있는지 아무도 알려주지 않습니다. "계약 만료는 자발적 퇴사가 아닌가요?" 하는 의문도 있습니다. 계약직 만료 시 실업급여 수급 가능 여부와 신청 방법을 정리해드립니다.</p>',
    sections: [
      {
        title: '계약만료는 비자발적 이직에 해당합니다',
        content:
          '<p><strong style="color:#1e3a5f">「고용보험법」 제58조에 따라 기간제 근로계약이 만료되어 갱신되지 않은 경우는 비자발적 이직으로 인정됩니다</strong></p>\n<ul>\n<li><strong>계약만료 = 수급 가능</strong> — 계약 기간이 끝나고 회사가 갱신하지 않으면 자발적 퇴사가 아닙니다. 이직확인서에 "계약 기간 만료"로 기재되면 실업급여 수급이 가능합니다</li>\n<li><strong>근로자가 갱신을 거부한 경우</strong> — 회사가 갱신을 제안했으나 근로자가 거부한 경우는 원칙적으로 자발적 이직입니다. 다만 근로조건이 크게 불리해졌거나(임금 삭감, 직무 변경 등) 정당한 사유가 있으면 비자발적 이직으로 인정될 수 있습니다</li>\n<li><strong>반복 갱신 후 만료</strong> — 2년 이상 반복 갱신된 계약직은 「기간제법」 제4조에 따라 무기계약으로 전환됩니다. 이 경우 계약만료를 이유로 한 고용 종료는 부당해고에 해당할 수 있으니 별도로 확인하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약 기간 만료 + 회사 미갱신 = 비자발적 이직 = 실업급여 수급 가능</blockquote>',
      },
      {
        title: '수급 요건 3가지와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">계약만료라도 아래 3가지 요건을 모두 충족해야 실업급여를 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>고용보험 가입 기간 180일 이상</strong> — 퇴직일 이전 18개월 중 피보험 단위기간이 합산 180일 이상이어야 합니다. 계약직은 짧은 계약이 반복되는 경우가 많으므로, 이전 직장의 피보험 기간도 합산 가능합니다(직전 직장 퇴사 후 3년 이내 재취업 시)</li>\n<li><strong>이직확인서 정확 기재</strong> — 이직 사유가 "계약 기간 만료"로 기재되어야 합니다. 회사가 "자발적 사직"으로 기재하면 고용센터에 이의를 제기하세요. 근로계약서에 명시된 계약 기간이 증거가 됩니다</li>\n<li><strong>신청 기한 12개월 이내</strong> — 퇴직일로부터 12개월 이내에 고용센터에 신청해야 합니다. 기한을 넘기면 수급권이 완전히 소멸하므로 계약만료 즉시 고용센터를 방문하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 계약만료 시 실업급여 수급 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실업급여 신청 절차와 급여 금액',
        content:
          '<p><strong style="color:#1e3a5f">수급 요건을 충족했다면 아래 절차에 따라 신청하세요. 급여 금액과 수급 기간도 함께 확인합니다</strong></p>\n<ul>\n<li><strong>신청 절차</strong> — ①고용보험 홈페이지에서 수급자격 사전 신청 → ②관할 고용센터 방문하여 구직 등록 → ③수급자격 인정 교육 이수 → ④실업인정일에 출석하여 구직 활동 보고. 첫 급여는 대기 기간(7일) 이후 지급됩니다</li>\n<li><strong>급여 금액</strong> — 퇴직 전 평균임금의 60%를 받습니다. 상한액은 1일 66,000원(2026년 기준), 하한액은 1일 63,104원(최저임금의 80%)입니다. 대부분의 계약직 근로자는 하한액에 해당합니다</li>\n<li><strong>수급 기간</strong> — 나이와 고용보험 가입 기간에 따라 120~270일입니다. 50세 미만·가입 1년 이상~3년 미만이면 150일, 50세 이상이거나 장애인이면 같은 조건에서 180일입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">급여: 평균임금 60%(하한 63,104원/일) × 수급 기간 120~270일</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2018두63235 (2022.10.27)',
        summary:
          '대법원 2018두63235 사건(2022.10.27 선고)에서 법원은 단서 조항이 임용일부터 3개월로 신청기간을 제한한 시행령 규정의 유효성을 다루었습니다. 신청 기한을 엄격히 적용해야 한다고 판시했습니다.',
        takeaway:
          '고용보험 관련 급여 신청에는 법정 기한이 엄격히 적용됩니다. 계약만료 후 실업급여도 퇴직일로부터 12개월 이내에 반드시 신청해야 합니다. 기한을 놓치면 구제가 불가능하니 즉시 고용센터를 방문하세요.',
      },
    ],
    faq: [
      {
        question: '계약 갱신을 제안받았는데 거절하면 실업급여를 못 받나요?',
        answer:
          '<strong>원칙적으로 자발적 이직이 됩니다.</strong> 다만 갱신 조건이 기존보다 현저히 불리하면(임금 삭감, 직무 변경, 근로시간 변경 등) 정당한 사유로 인정될 수 있습니다. 갱신 제안서와 변경된 조건을 증거로 보관하세요.',
      },
      {
        question: '여러 직장을 다녔는데 고용보험 기간을 합산할 수 있나요?',
        answer:
          '<strong>합산 가능합니다.</strong> 직전 이직 후 3년 이내에 재취업하여 고용보험에 가입했다면 이전 직장의 피보험 기간이 합산됩니다. 단, 이전 직장에서 이미 실업급여를 받았으면 그 기간은 제외됩니다.',
      },
      {
        question: '계약만료일에 바로 실업급여를 신청할 수 있나요?',
        answer:
          '<strong>이직확인서가 처리된 후 가능합니다.</strong> 회사가 이직확인서를 고용센터에 제출해야(퇴직일로부터 10일 이내 의무) 수급자격 신청이 가능합니다. 회사가 지연하면 고용센터(1350)에 직접 요청하세요.',
      },
      {
        question: '계약직이 2년 넘었는데 계약만료로 끝나도 되나요?',
        answer:
          '<strong>무기계약 전환 대상일 수 있습니다.</strong> 「기간제법」 제4조에 따라 2년을 초과하여 계약이 갱신되면 무기계약 근로자로 간주됩니다. 이 경우 계약만료를 이유로 한 고용 종료는 부당해고에 해당할 수 있으니 노동위원회 구제신청을 검토하세요.',
      },
      {
        question: '실업급여 받으면서 아르바이트를 할 수 있나요?',
        answer:
          '<strong>조건부로 가능합니다.</strong> 주 15시간 미만·월 60시간 미만의 단기 취업은 허용됩니다. 다만 소득이 발생하면 반드시 실업인정일에 신고해야 합니다. 미신고 시 부정수급으로 반환 명령과 추가 징수(2배)를 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '계약만료 실업급여 수급 무료 AI 상담',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 요건 정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '권고사직 실업급여 수급 가이드', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '퇴직금 체불 신고 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '임금체불 신고 서류 준비', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '부당해고 초기 대응 가이드', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 21. fraud / secondhand-trade-fraud-refund-method
  // ───────────────────────────────────────────
  {
    domain: 'fraud',
    slug: 'secondhand-trade-fraud-refund-method',
    keyword: '중고거래 사기 환불 방법',
    questionKeyword: '중고거래 사기 당했는데 환불받을 수 있나요?',
    ctaKeyword: '중고거래 사기 환불',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '중고거래 사기 환불받는 4단계 현실적 방법 | 로앤가이드',
      description:
        '중고거래에서 사기를 당해 돈을 돌려받고 싶다면, 계좌 지급정지부터 강제집행까지 4단계 환수 방법을 지금 확인하세요.',
    },
    intro:
      '<p>당근마켓에서 30만 원을 송금했는데 물건이 오지 않습니다. 상대방은 읽씹 후 연락이 두절됐고, 프로필도 삭제되었습니다. 경찰에 신고하면 돈을 돌려받을 수 있을까요? 현실적으로 환불받을 수 있는 방법을 단계별로 정리해드립니다.</p>',
    timelineSteps: [
      '1단계: 증거 확보와 계좌 지급정지',
      '2단계: 경찰 사이버수사대 신고',
      '3단계: 합의 요청 또는 민사소송',
      '4단계: 강제집행으로 환수',
    ],
    sections: [
      {
        title: '1단계: 증거 확보와 계좌 지급정지 — 골든타임 30분',
        content:
          '<p><strong style="color:#1e3a5f">사기를 인지한 즉시 계좌 지급정지를 신청하세요. 상대방이 돈을 인출하기 전에 막는 것이 가장 확실한 환수 방법입니다</strong></p>\n<ul>\n<li><strong>계좌 지급정지 신청</strong> — 송금한 은행 고객센터(24시간)에 전화하여 "사기 피해 계좌 지급정지"를 요청하세요. 「전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법」에 따라 사기 이용 계좌를 즉시 동결할 수 있습니다. 30분 이내가 골든타임입니다</li>\n<li><strong>거래 증거 캡처</strong> — 대화 내용(채팅방 전체), 상대방 프로필, 송금 내역(이체확인증), 거래 게시글을 캡처하세요. 상대방이 삭제하기 전에 최대한 빨리 확보해야 합니다. 화면 녹화도 유효합니다</li>\n<li><strong>상대방 정보 기록</strong> — 계좌번호, 계좌 예금주명, 전화번호, 거래 플랫폼 ID를 정리하세요. 이 정보는 경찰 신고와 민사소송에 모두 필요합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">골든타임: 사기 인지 즉시 → 은행 전화 → 계좌 지급정지 → 증거 캡처</blockquote>',
      },
      {
        title: '2~3단계: 경찰 신고와 합의·민사소송',
        content:
          '<p><strong style="color:#1e3a5f">계좌 지급정지 후 경찰에 신고하고, 상대방에게 합의를 요청하거나 민사소송을 준비하세요</strong></p>\n<ul>\n<li><strong>경찰 사이버수사대 신고</strong> — 사이버범죄 신고 시스템(ecrm.police.go.kr)에서 온라인 신고하거나, 경찰서 사이버수사팀에 직접 방문 신고합니다. 확보한 증거(대화 캡처, 송금 내역, 계좌 정보)를 함께 제출하세요. 피해금액이 소액이라도 사기죄(「형법」 제347조, 10년 이하 징역 또는 2천만 원 이하 벌금)에 해당합니다</li>\n<li><strong>합의 요청</strong> — 경찰 수사가 시작되면 상대방에게 "합의하면 고소를 취하하겠다"고 제안할 수 있습니다. 사기죄는 반의사불벌죄가 아니므로 고소 취하가 처벌을 면하게 하지는 않지만, 실무상 합의가 이루어지면 기소유예·집행유예 가능성이 높아 상대방이 합의에 응할 유인이 있습니다</li>\n<li><strong>민사소송(소액사건심판)</strong> — 피해금액이 3,000만 원 이하이면 소액사건심판으로 간소하게 진행할 수 있습니다. 소장은 대법원 전자소송 사이트(ecfs.scourt.go.kr)에서 온라인으로 제출 가능합니다. 인지대(소가의 0.5%)와 송달료만 있으면 변호사 없이도 진행할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 환불 가능성과 최적 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 강제집행과 피해금 환급 제도',
        content:
          '<p><strong style="color:#1e3a5f">판결을 받아도 상대방이 자발적으로 돈을 돌려주지 않으면 강제집행이 필요합니다. 피해금 환급 제도도 활용하세요</strong></p>\n<ul>\n<li><strong>강제집행</strong> — 민사 판결 확정 후 상대방의 재산(예금, 급여, 부동산 등)에 대해 강제집행을 신청합니다. 채권압류 및 추심명령을 받으면 상대방의 은행 계좌에서 직접 추심할 수 있습니다. 상대방의 재산 정보는 법원의 재산명시·재산조회 절차로 확인 가능합니다</li>\n<li><strong>피해금 환급 제도</strong> — 계좌 지급정지가 성공하여 사기 계좌에 잔액이 남아 있으면, 「통신사기피해환급법」에 따라 피해금 환급을 신청할 수 있습니다. 은행에서 지급정지 후 채권소멸 공고 절차를 거쳐 피해금이 환급됩니다(통상 2~3개월 소요)</li>\n<li><strong>현실적 한계와 대안</strong> — 상대방이 재산이 없거나 소재불명이면 실제 환수가 어렵습니다. 이 경우 형사 합의를 통한 환수가 가장 현실적입니다. 또한 범죄피해자 지원제도(한국범죄피해자지원중앙센터 1577-1295)를 통해 긴급 지원을 받을 수도 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">환수 우선순위: 계좌 지급정지 환급 → 형사 합의금 → 민사 강제집행</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대법원 2022도1862 (2026.01.29)',
        summary:
          '대법원 2022도1862 사건(2026.01.29 선고)에서 법원은 위계에 의한 업무방해죄 성립 요건인 "위계"는 상대방에게 오인·착각 또는 부지를 일으키게 하여 이를 이용하는 것이라고 판시했습니다. 사기죄와의 구별 기준도 제시했습니다.',
        takeaway:
          '중고거래 사기에서 가해자가 처음부터 물건을 보낼 의사 없이 돈만 받은 경우, 사기죄뿐 아니라 위계에 의한 업무방해죄까지 적용될 수 있습니다. 거래 당시 "물건을 보내겠다"고 한 대화 기록이 기망 행위의 핵심 증거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '피해금액이 소액(10만 원 이하)이어도 신고할 수 있나요?',
        answer:
          '<strong>금액에 관계없이 신고할 수 있습니다.</strong> 사기죄는 피해 금액의 하한이 없습니다. 소액이라도 경찰에 신고하면 수사가 진행되며, 같은 가해자의 다른 피해자가 있을 경우 합산되어 처벌이 무거워집니다.',
      },
      {
        question: '상대방이 연락두절되면 돈을 못 돌려받나요?',
        answer:
          '<strong>계좌 지급정지가 가장 중요합니다.</strong> 상대방이 연락두절이더라도 계좌에 잔액이 남아 있으면 피해금 환급 절차로 돌려받을 수 있습니다. 경찰 수사를 통해 신원이 특정되면 합의 협상이나 민사소송도 가능합니다.',
      },
      {
        question: '당근마켓이나 번개장터에서 거래 기록을 삭제하면 어떻게 하나요?',
        answer:
          '<strong>삭제 전 캡처가 최선이지만, 플랫폼에 자료 보존을 요청할 수 있습니다.</strong> 경찰이 수사를 시작하면 플랫폼에 공식적으로 거래 기록 보존을 요청합니다. 또한 자신의 거래 내역은 플랫폼 고객센터에서 복원을 요청할 수 있습니다.',
      },
      {
        question: '경찰 수사가 오래 걸리면 먼저 민사소송을 해도 되나요?',
        answer:
          '<strong>형사 수사와 민사소송은 동시에 진행할 수 있습니다.</strong> 형사 수사를 기다리지 않고 바로 민사소송(소액사건심판)을 제기할 수 있습니다. 형사 수사에서 확인된 상대방 신원정보를 민사소송에 활용하면 더 효과적입니다.',
      },
      {
        question: '중고거래 사기 예방 방법이 있나요?',
        answer:
          '<strong>안전거래(에스크로)를 이용하세요.</strong> 직거래보다 플랫폼 내 안전결제 서비스를 이용하면 물건 수령 후 결제가 확정됩니다. 직거래 시에는 만나서 현금 거래하고, 택배 거래 시에는 운송장 번호를 먼저 받은 후 송금하세요.',
      },
    ],
    cta: {
      text: '중고거래 사기 환불 무료 AI 상담',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 민사소송 절차 안내', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기죄 고소 절차 개요', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 신고 증거 체크리스트', href: '/guide/fraud/fraud-report-evidence-checklist' },
      { label: '사기 합의 협상 가이드', href: '/guide/fraud/fraud-settlement-negotiation-guide' },
      { label: '온라인 사기 증거 보전 방법', href: '/guide/fraud/online-fraud-evidence-preservation' },
    ],
  },
];
