import { SpokePage } from '../spoke-pages';

// batch39 노동 14개: 실업 5 + 퇴직 3 + 임금 3 + 해고 3

export const spokesBatch39Labor: SpokePage[] = [
  // ─── 1. unemployment / pregnancy-job-search-activity ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-job-search-activity',
    keyword: '실업급여 임신 구직활동 면제',
    questionKeyword: '임신 중 실업급여 구직활동 어떻게 하나요?',
    ctaKeyword: '임신 중 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '임신 중 실업급여 구직활동 요건과 면제 기준 | 로앤가이드',
      description:
        '임신 중 실업급여 수급 시 구직활동 면제·완화 기준과 수급기간 연장 방법을 정리했습니다. 필요 증빙과 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>임신 중 실업급여를 신청하려 하면 "이 상태로 구직활동이 가능한가" "불이익은 없는가" 고민이 커집니다. 고용보험법은 임신·출산 사유로 구직활동 곤란 시 수급기간 연장·활동 완화를 인정하고 있어 적법한 절차만 따르면 안정적으로 수급할 수 있습니다.</p>',
    sections: [
      {
        title: '임신 중 구직활동 — 완화·면제 기준',
        content:
          '<p><strong style="color:#1e3a5f">임신 중이라도 원칙적으로 구직활동 의무가 있지만, 의학적 소견으로 활동이 곤란한 경우 완화·면제가 가능합니다.</strong></p>\n<ul>\n<li><strong>일반 구직활동</strong> — 임신 초·중기는 일반 구직활동을 계속 수행합니다.</li>\n<li><strong>위험 임신 증빙</strong> — 조기 진통·위험 임신으로 진단받으면 진단서를 제출해 구직활동 면제가 인정됩니다.</li>\n<li><strong>수급기간 연장</strong> — 구직활동이 근본적으로 어려우면 "수급기간 연장 신청"으로 최대 4년까지 연장할 수 있습니다.</li>\n<li><strong>법적 근거</strong> — 고용보험법 시행령 제66조가 임신·출산을 연장 사유로 규정합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무리하게 구직활동 하지 말고, 의학적 판단에 따라 연장·면제 제도를 활용하세요.</blockquote>',
      },
      {
        title: '출산 전후 — 산전후휴가급여와 구직급여 충돌 방지',
        content:
          '<p><strong style="color:#1e3a5f">출산전후휴가급여·육아휴직급여와 실업급여는 동시 수령이 불가능하므로 우선순위를 정해야 합니다.</strong></p>\n<ul>\n<li><strong>출산전후휴가급여 우선</strong> — 재직 중 가입자라면 90일 출산휴가 + 급여 수령이 가능.</li>\n<li><strong>실업급여는 휴가 종료 후</strong> — 출산휴가 종료·이직 이후 실업급여 신청이 가능합니다.</li>\n<li><strong>이중 수령 금지</strong> — 동일 기간 중복 수령은 부정수급에 해당합니다.</li>\n<li><strong>구직급여 연장</strong> — 출산 후 구직활동이 어렵다면 연장 신청으로 기간을 확보하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임신·출산 시점의 수급 전략을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수급기간 연장 신청 — 구체적 절차',
        content:
          '<p><strong style="color:#1e3a5f">임신·출산 사유로 구직활동이 어렵다면 30일 이내 "수급기간 연장 신청서" 제출이 원칙입니다.</strong></p>\n<ul>\n<li><strong>신청 시점</strong> — 사유 발생일(진단일 등)로부터 30일 이내 원칙. 긴급 사정 시 예외 인정.</li>\n<li><strong>제출 서류</strong> — 수급기간 연장 신청서, 임신확인서·진단서·출생증명서(출산 후) 등 상황별 증빙.</li>\n<li><strong>최대 연장 기간</strong> — 최대 4년까지 수급기간 연장 가능.</li>\n<li><strong>온라인 신청</strong> — ei.go.kr 또는 관할 고용센터에서 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연장 신청은 빠를수록 유리하며, 증빙 서류는 최신 진단서를 준비하세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 임산부 맞춤 수급 전략',
        content:
          '<p><strong style="color:#1e3a5f">건강 상태·임신 단계에 따라 구직활동 방식과 수급 전략이 달라집니다.</strong></p>\n<ul>\n<li><strong>초기(~14주)</strong> — 일반 구직활동 수행, 재택·서비스 직군 중심으로 지원.</li>\n<li><strong>중기(15~28주)</strong> — 의료진 상담 후 활동 범위 조정, 필요 시 연장 신청 검토.</li>\n<li><strong>후기(29주~)</strong> — 연장 신청 적극 검토, 출산 후 재개 계획 수립.</li>\n<li><strong>출산 후</strong> — 육아 상황에 따라 추가 연장 또는 단계적 재취업 활동.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 수급자격 심사에서 임산부라고 불리하게 판단되는 일은 없습니다. 공정 심사를 요구할 권리가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임신·출산 사유의 수급기간 연장 인정',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 구직급여 수급기간 연장 사유를 엄격하게 해석하되 임신·출산·양육 등 법정 사유는 폭넓게 인정해야 한다고 판시했습니다.',
        takeaway:
          '임신·출산은 법정 연장 사유에 해당하므로 적극 활용하면 수급권이 보장됩니다.',
      },
    ],
    faq: [
      {
        question: '임신 중에도 실업급여 신청 가능한가요?',
        answer:
          '<strong>네, 가능합니다.</strong> 일반 구직활동을 하거나 연장 신청으로 수급권을 확보할 수 있습니다.',
      },
      {
        question: '출산 후 바로 실업급여 받을 수 있나요?',
        answer:
          '<strong>출산전후휴가급여·육아휴직급여 중이 아니라면 가능합니다.</strong> 중복 수령은 부정수급이 되므로 주의하세요.',
      },
      {
        question: '진단서 없어도 구직활동 면제 되나요?',
        answer:
          '<strong>원칙적으로 의학적 증빙이 필요합니다.</strong> 산부인과 진단서를 발급받아 제출하세요.',
      },
      {
        question: '수급기간 연장하면 언제까지 받을 수 있나요?',
        answer:
          '<strong>최대 4년까지 연장 가능합니다.</strong> 그 안에 남은 소정급여일수를 수급할 수 있습니다.',
      },
      {
        question: '임신 중 건강상 근로불능이면 구직의사 없음으로 거부되나요?',
        answer:
          '<strong>구직활동 면제·연장으로 구제됩니다.</strong> 의학적 소견이 있으면 의사·능력 없음 판정은 내려지지 않습니다.',
      },
    ],
    cta: {
      text: '임신·출산 실업급여 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '수급기간 연장 사유 정리', href: '/guide/unemployment/benefit-period-extension-cases' },
      { label: '출산전후휴가급여 안내', href: '/guide/retirement/retirement-maternity-leave-included' },
      { label: '자발적 퇴사 예외 사례', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '늦은 신청 구제 사례', href: '/guide/unemployment/unemployment-late-application-rescue' },
    ],
  },

  // ─── 2. unemployment / disabled-extension-special ───
  {
    domain: 'unemployment',
    slug: 'unemployment-disabled-extension-special',
    keyword: '장애인 실업급여 연장 특례',
    questionKeyword: '장애인은 실업급여 얼마나 더 받나요?',
    ctaKeyword: '장애인 실업급여 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '장애인 실업급여 특례 — 30일 연장과 개별 연장급여 | 로앤가이드',
      description:
        '장애인 실업급여 특례와 추가 연장 가능성을 정리했습니다. 소정급여일수·개별연장급여 요건을 지금 확인하세요.',
    },
    intro:
      '<p>장애인이 실직한 경우 일반 수급자보다 긴 기간 실업급여를 받을 수 있는 특례가 있지만 제도를 모르면 혜택을 놓치기 쉽습니다. 장애인 특례 소정급여일수·개별연장급여·취업촉진수당까지 체계적으로 안내합니다.</p>',
    sections: [
      {
        title: '장애인 소정급여일수 특례 — 30일 추가',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제50조 별표는 장애인이 일반 수급자보다 30일 더 받을 수 있도록 소정급여일수를 우대합니다.</strong></p>\n<ul>\n<li><strong>기본 구조</strong> — 피보험기간별 120~270일에 장애인은 동일 구간 기본 30일 추가.</li>\n<li><strong>장애인 증빙</strong> — 복지카드·장애인증명서 발급 후 수급자격 신청 시 제출.</li>\n<li><strong>중증 장애인</strong> — 중증 장애인은 개별연장급여·특별연장급여 추가 검토 대상.</li>\n<li><strong>증빙 시점</strong> — 이직 전 등록된 장애 정보가 우선 반영되므로 사전 등록 확인 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장애 등록 증빙을 신청 시 빠뜨리면 연장일수가 반영되지 않으므로 반드시 함께 제출하세요.</blockquote>',
      },
      {
        title: '개별연장급여 — 소정급여일수 소진 후 추가',
        content:
          '<p><strong style="color:#1e3a5f">소정급여일수를 다 받고도 취업이 어려우면 "개별연장급여"를 추가로 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 고용보험법 제51조, 재취업이 어렵다고 인정되는 경우 심사 후 지급.</li>\n<li><strong>지원 기간</strong> — 최대 60일 추가 지급, 원래 지급액의 70% 수준.</li>\n<li><strong>대상</strong> — 장애·고령·부양가족 다수·취약계층 등 구체적 취약 사유 필요.</li>\n<li><strong>절차</strong> — 고용센터 담당자와 상담 후 심사 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 장애인·취약계층 특례 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '취업촉진수당 — 조기재취업·직업능력개발수당',
        content:
          '<p><strong style="color:#1e3a5f">장애인도 조기재취업수당·직업능력개발수당 등 추가 지원금을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>조기재취업수당</strong> — 소정급여일수의 1/2 이상 남기고 재취업해 12개월 유지 시 남은 급여 50% 일시지급.</li>\n<li><strong>직업능력개발수당</strong> — 승인 훈련 수강 시 수강기간 중 수당 지급.</li>\n<li><strong>광역구직활동비</strong> — 거주지에서 50km 이상 떨어진 면접 참석 시 교통·숙박비 지원.</li>\n<li><strong>이주비</strong> — 재취업에 따른 이주가 필요한 경우 이주비 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업촉진수당은 사전 신청이 필수이며, 요건을 충족하면 꼭 신청해 혜택을 놓치지 마세요.</blockquote>',
      },
      {
        title: '실무 포인트 — 신청 전 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">장애인 특례를 제대로 받으려면 사전에 등록·서류 준비를 철저히 해야 합니다.</strong></p>\n<ul>\n<li><strong>장애 등록 확인</strong> — 주민센터 또는 복지로에서 장애 등록 상태와 재심사 여부 점검.</li>\n<li><strong>이직확인서 확인</strong> — 퇴직 사유가 비자발 사유로 기재됐는지 확인.</li>\n<li><strong>고용센터 상담</strong> — 신청 전 담당자와 특례·연장 가능성을 구체적으로 상담.</li>\n<li><strong>증빙 서류 완비</strong> — 복지카드·장애인증명서·가족관계증명서 등 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장애 상태가 변경됐다면 재등록·재심사를 먼저 완료한 뒤 수급 신청이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 장애인 구직급여 특례 인정의 취지',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 장애인·고령자·취약계층의 실질적 재취업 곤란성을 고려해 연장·추가지급 규정을 폭넓게 적용해야 한다고 판시했습니다.',
        takeaway:
          '장애인 특례 규정은 실질 취업곤란성에 맞춰 적극 적용되어야 하며 제도적 보호가 강화됩니다.',
      },
    ],
    faq: [
      {
        question: '복지카드 미소지인데 장애인 특례 받을 수 있나요?',
        answer:
          '<strong>장애인증명서·공공의료보험 장애 등록 이력이 있으면 가능합니다.</strong> 등록이 없다면 먼저 복지로·주민센터에서 등록해야 합니다.',
      },
      {
        question: '개별연장급여는 누구나 신청 가능한가요?',
        answer:
          '<strong>아니요, 재취업 곤란성이 입증된 경우에 한해 심사 후 지급됩니다.</strong> 장애·고령·부양가족 등 취약 요소가 많을수록 유리합니다.',
      },
      {
        question: '장애인 특례 30일과 연령 특례 30일 중복되나요?',
        answer:
          '<strong>중복 적용되지 않습니다.</strong> 별표에서 해당 구간의 유리한 일수로 단일 적용됩니다.',
      },
      {
        question: '이직 후 장애등록을 받으면 소급 적용되나요?',
        answer:
          '<strong>원칙적으로 이직 시점 등록된 상태가 기준입니다.</strong> 이직 후 등록 건은 담당자 상담으로 예외 가능성을 확인하세요.',
      },
      {
        question: '광역구직활동비 신청 시 준비물은?',
        answer:
          '<strong>면접 확인서·교통비 영수증·실제 면접 기록을 제출합니다.</strong> 사전 승인 없이 사후 청구는 인정되지 않는 경우가 있으니 주의하세요.',
      },
    ],
    cta: {
      text: '장애인 실업급여 특례 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '소정급여일수 계산 가이드', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '조기재취업수당 요건', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '수급기간 연장 사유 정리', href: '/guide/unemployment/benefit-period-extension-cases' },
      { label: '장애인 특별연장 심사', href: '/guide/unemployment/unemployment-disability-special-benefit' },
    ],
  },

  // ─── 3. unemployment / seasonal-worker-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-seasonal-worker-eligibility',
    keyword: '계절근로자 실업급여 자격',
    questionKeyword: '농업·어업 계절근로자도 실업급여 받나요?',
    ctaKeyword: '계절근로 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '계절근로자 실업급여 — 자격·피보험기간 요건 | 로앤가이드',
      description:
        '농어업·건설업 등 계절 근로자도 실업급여 자격을 인정받을 수 있습니다. 피보험기간 계산·일용 전환 요건을 지금 확인하세요.',
    },
    intro:
      '<p>농어업·건설업·관광업 등 계절적으로 일하는 근로자는 실업급여 자격을 두고 혼란이 큽니다. 피보험단위기간 산정 방식·일용 근로자 전환 요건·특수 직종 특례를 정리해 받을 수 있는 길을 제시합니다.</p>',
    sections: [
      {
        title: '계절근로자의 피보험단위기간 계산',
        content:
          '<p><strong style="color:#1e3a5f">계절근로자도 고용보험 가입 + 피보험단위기간 180일 이상을 충족하면 실업급여 수급이 가능합니다.</strong></p>\n<ul>\n<li><strong>피보험단위기간</strong> — 유급 근로일 합산 180일 이상 필요.</li>\n<li><strong>합산 인정</strong> — 퇴사 후 3년 내 재가입 기간은 합산되어 180일 충족에 도움.</li>\n<li><strong>일용 특례</strong> — 일용근로자는 종별 일용근로확인서로 피보험일수가 산정됨.</li>\n<li><strong>단기 반복 근로</strong> — 매년 반복 계약이어도 고용보험 가입 이력이 합산되면 충족 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일용직이라도 고용보험 가입과 피보험일수 관리가 수급의 전제입니다.</blockquote>',
      },
      {
        title: '계약 종료 사유 — 비자발 vs 자발',
        content:
          '<p><strong style="color:#1e3a5f">계절근로 종료가 "계약기간 만료"로 기재되면 비자발 사유로 인정됩니다.</strong></p>\n<ul>\n<li><strong>계약기간 만료</strong> — 시즌 종료·연장 없음은 비자발 사유.</li>\n<li><strong>자진 조기 이탈</strong> — 시즌 중 본인이 그만두면 자진 퇴사로 분류돼 수급 불이익.</li>\n<li><strong>사업주 경영악화</strong> — 폐업·휴업 등도 비자발 사유.</li>\n<li><strong>이직확인서 기재</strong> — 정확한 사유 코드 기재를 사업주에게 요청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 계절근로 종료 사유의 수급 유불리를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '일용근로자 특례 — 14일 요건·근로일수',
        content:
          '<p><strong style="color:#1e3a5f">일용근로자 실업급여는 근로일 규제가 엄격해 세부 기준을 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>이직 전 1개월 요건</strong> — 이직 전 1개월 동안 근로일수가 10일 미만이어야 원칙적으로 수급 자격.</li>\n<li><strong>단절 요건</strong> — 최근 7일 이상 연속해서 일하지 않은 기간이 있어야 함.</li>\n<li><strong>피보험단위기간</strong> — 180일 누적 충족 + 일용근로확인서로 입증.</li>\n<li><strong>건설 일용</strong> — 건설업 일용은 별도 특례로 자격 인정 기준이 완화되어 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일용근로자 자격 요건은 일반 근로자와 다르므로 고용센터 상담 후 신청이 안전합니다.</blockquote>',
      },
      {
        title: '실무 대응 — 피보험기간 관리·신청 타이밍',
        content:
          '<p><strong style="color:#1e3a5f">계절근로자는 피보험기간 관리와 신청 타이밍이 수급 성공의 핵심입니다.</strong></p>\n<ul>\n<li><strong>1단계: 가입이력 조회</strong> — work.go.kr에서 본인 피보험자격 이력 확인.</li>\n<li><strong>2단계: 이직확인서 확인</strong> — 시즌 종료 직후 사업주에게 발급 요청.</li>\n<li><strong>3단계: 관할 고용센터 상담</strong> — 일용·계절 특례 적용 여부 확인.</li>\n<li><strong>4단계: 수급자격 신청</strong> — 필요 서류 준비 후 즉시 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 수급기간은 이직일 기준 12개월이므로 시즌 종료 후 바로 움직이는 것이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 일용·계절근로자 수급자격 기준',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 고용보험 피보험단위기간 산정에서 일용·단속적 근로자의 합산 인정을 폭넓게 허용해야 한다고 판시했습니다.',
        takeaway:
          '계절·일용 근로자도 피보험일수를 합산 인정받아 수급자격을 얻을 수 있다는 근거입니다.',
      },
    ],
    faq: [
      {
        question: '매년 동일 농장에 시즌 근로하는데 수급 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 피보험기간 합산 180일 이상이면 요건 충족. 시즌 종료가 비자발 사유로 기재되어야 합니다.',
      },
      {
        question: '일용근로자는 신청 어떻게 하나요?',
        answer:
          '<strong>일용근로확인서를 제출해 피보험일수 입증 후 고용센터에서 수급자격 신청합니다.</strong> 1개월 10일 미만 근로 요건을 확인하세요.',
      },
      {
        question: '농번기 중 조기 이탈하면 수급되나요?',
        answer:
          '<strong>자진 이탈은 원칙적으로 수급 제한됩니다.</strong> 임금체불·건강 문제 등 정당한 사유가 입증되면 예외 가능.',
      },
      {
        question: '외국인 계절근로자도 수급 가능한가요?',
        answer:
          '<strong>합법 체류 + 고용보험 가입자라면 가능합니다.</strong> 체류 상태와 가입 이력을 우선 확인하세요.',
      },
      {
        question: '건설 일용과 농업 일용 요건 동일한가요?',
        answer:
          '<strong>건설업 일용은 특례로 요건이 완화되어 있습니다.</strong> 각 업종별 세부 기준을 고용센터에 문의하세요.',
      },
    ],
    cta: {
      text: '계절근로 실업급여 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '일용근로자 수급자격', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '건설 일용 특례', href: '/guide/unemployment/unemployment-construction-daily-apply' },
      { label: '피보험단위기간 계산', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '계약만료 수급자격', href: '/guide/unemployment/unemployment-contract-end-no-renewal' },
    ],
  },

  // ─── 4. unemployment / part-time-multiple-jobs ───
  {
    domain: 'unemployment',
    slug: 'unemployment-part-time-multiple-jobs',
    keyword: '실업급여 복수 파트타임 자격',
    questionKeyword: '여러 파트타임 중 하나만 그만둬도 실업급여 되나요?',
    ctaKeyword: '복수 파트타임 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '복수 파트타임 근무자 실업급여 기준 | 로앤가이드',
      description:
        '두 개 이상 파트타임 중 하나만 종료된 경우의 실업급여 자격을 정리했습니다. 주 소득 판단·피보험기간 합산을 지금 확인하세요.',
    },
    intro:
      '<p>여러 회사에서 파트타임으로 동시에 일하다가 한 군데가 종료되면 "이 경우에도 실업급여를 받을 수 있나" 헷갈립니다. 주된 직장·피보험기간·취업 상태 정의가 중요하므로 기준을 정확히 알고 접근해야 합니다.</p>',
    sections: [
      {
        title: '실업의 정의 — 전면 실직이 원칙',
        content:
          '<p><strong style="color:#1e3a5f">실업급여는 원칙적으로 근로관계가 완전히 종료된 상태(전면 실직)에서 수급 가능합니다.</strong></p>\n<ul>\n<li><strong>완전 실직 원칙</strong> — 일부 직장만 종료되고 다른 곳에서 일하는 중이면 수급 제한.</li>\n<li><strong>주된 직장 판단</strong> — 가장 소득·근로시간 많은 직장이 주된 직장으로 봄.</li>\n<li><strong>주 직장 종료 + 부업 유지</strong> — 주 직장 종료가 주된 사유라면 검토 여지가 있으나 제한적.</li>\n<li><strong>부업 소득 신고</strong> — 수급 중 부업 소득이 있으면 소득 신고 의무 발생.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 두 곳 모두에서 근로가 종료되어야 원칙적으로 수급 자격이 성립합니다.</blockquote>',
      },
      {
        title: '피보험기간 합산 — 복수 직장 이력 통합',
        content:
          '<p><strong style="color:#1e3a5f">복수 직장의 피보험기간은 합산해 180일 요건을 충족할 수 있습니다.</strong></p>\n<ul>\n<li><strong>합산 원칙</strong> — 각 직장의 피보험일수를 합산해 180일 이상 산정.</li>\n<li><strong>이직일 기준</strong> — 마지막 이직일 기준 12개월 수급기간 적용.</li>\n<li><strong>이직확인서</strong> — 각 직장별 이직확인서 발급이 필요.</li>\n<li><strong>가입 공백</strong> — 가입 공백이 3년 초과면 이전 기간은 산정에서 제외.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 복수 직장 피보험기간 합산과 수급자격을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '평균임금 산정 — 여러 직장 통합',
        content:
          '<p><strong style="color:#1e3a5f">복수 직장 수급자는 평균임금 산정 방식이 통합 적용됩니다.</strong></p>\n<ul>\n<li><strong>통합 산정</strong> — 최종 이직일 기준 3개월 평균임금에 각 직장 임금 합산.</li>\n<li><strong>월 상한·하한</strong> — 일 상한 66,000원, 하한 최저임금의 80% 적용.</li>\n<li><strong>임금명세서 확보</strong> — 직장별 3개월치 급여명세서 필수.</li>\n<li><strong>미가입 기간</strong> — 고용보험 미가입 기간은 평균임금 기준에서 제외.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 복수 직장 수급은 평균임금 산정이 복잡하니 고용센터 담당자에게 상세 계산을 요청하세요.</blockquote>',
      },
      {
        title: '실무 대응 — 신청 순서와 주의점',
        content:
          '<p><strong style="color:#1e3a5f">복수 직장 수급 신청은 순서와 서류 준비가 중요합니다.</strong></p>\n<ul>\n<li><strong>1단계: 전체 가입이력 조회</strong> — work.go.kr에서 복수 직장 이력 확인.</li>\n<li><strong>2단계: 이직확인서 완비</strong> — 모든 직장에서 이직확인서 발급.</li>\n<li><strong>3단계: 부업 종료 정리</strong> — 남은 직장이 있으면 종료 후 신청 권장.</li>\n<li><strong>4단계: 고용센터 상담</strong> — 복수 직장 특수 케이스로 사전 상담 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 부업이 남아있는 상태에서 신청하면 취업 중으로 판정돼 수급이 거부될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 복수 직장자 수급자격 판단 기준',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 구직급여 수급자격에서 "실업" 요건은 실질적 근로관계 전면 종료를 의미하며 부업 유지 시 제한된다고 판시했습니다.',
        takeaway:
          '복수 직장자는 주된 근로관계 종료뿐 아니라 부업까지 정리되어야 완전한 수급 자격이 확정됩니다.',
      },
    ],
    faq: [
      {
        question: '주업 퇴사 + 부업 계속 시 수급 가능한가요?',
        answer:
          '<strong>원칙적으로 제한됩니다.</strong> 부업이 소득·근로시간이 낮더라도 취업 상태로 보여 수급자격이 거부될 수 있습니다.',
      },
      {
        question: '부업 소득 신고 안 하면 문제되나요?',
        answer:
          '<strong>부정수급에 해당합니다.</strong> 소득 발생 즉시 실업인정일에 신고가 원칙입니다.',
      },
      {
        question: '여러 직장 평균임금 어떻게 계산되나요?',
        answer:
          '<strong>최종 이직일 기준 3개월 평균임금을 통합해 계산합니다.</strong> 임금명세서 확보가 필수입니다.',
      },
      {
        question: '주말 알바만 하는데 취업으로 보나요?',
        answer:
          '<strong>규칙적 주말 근로는 취업 상태로 판단될 수 있습니다.</strong> 실업인정일에 반드시 신고하세요.',
      },
      {
        question: '프리랜서 부업이 있으면 어떻게 되나요?',
        answer:
          '<strong>실질 취업으로 간주될 수 있어 수급 제한됩니다.</strong> 활동 내용·소득·시간을 솔직하게 신고하세요.',
      },
    ],
    cta: {
      text: '복수 파트타임 실업급여 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '피보험단위기간 계산', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '이직확인서 발급 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '부정수급 제재', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '복수 직장 통합 사례', href: '/guide/unemployment/unemployment-multiple-workplace-combined' },
    ],
  },

  // ─── 5. unemployment / benefit-rejection-appeal-procedure ───
  {
    domain: 'unemployment',
    slug: 'unemployment-benefit-rejection-appeal-procedure',
    keyword: '실업급여 수급자격 불인정 이의신청',
    questionKeyword: '실업급여 거부당했을 때 어떻게 이의제기 하나요?',
    ctaKeyword: '수급 거부 이의신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 거부 시 심사·재심사 청구 절차 | 로앤가이드',
      description:
        '실업급여 수급자격 불인정 결정을 받았을 때 이의신청·심사·재심사 절차와 준비서류를 정리했습니다. 90일 시효와 승소 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>실업급여 신청 후 "수급자격 불인정" 통지를 받으면 망연자실하지만 포기할 필요는 없습니다. 고용보험심사관·심사위원회에 이의제기하면 결정을 뒤집는 사례가 상당하며, 90일 시효 내 절차만 지키면 기회가 있습니다.</p>',
    sections: [
      {
        title: '불인정 사유 유형과 반박 포인트',
        content:
          '<p><strong style="color:#1e3a5f">불인정 결정의 주요 사유에 따라 이의제기 방향을 달리해야 합니다.</strong></p>\n<ul>\n<li><strong>자진퇴사 분류</strong> — 사직이 아닌 실질적 비자발 사유(임금체불·괴롭힘 등) 입증.</li>\n<li><strong>피보험기간 부족</strong> — 합산 누락·가입이력 오기재 확인.</li>\n<li><strong>부정수급 오인</strong> — 소득 신고 정확성·의도 없음 입증.</li>\n<li><strong>구직활동 부족</strong> — 활동 증빙 보완 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 왜 거부됐는지 구체적 사유를 안 뒤 이에 맞춘 반박 자료를 구성합니다.</blockquote>',
      },
      {
        title: '심사청구 — 90일 시효·고용보험심사관',
        content:
          '<p><strong style="color:#1e3a5f">결정 통지일로부터 90일 이내에 고용보험심사관에게 심사청구서를 제출해야 합니다.</strong></p>\n<ul>\n<li><strong>신청 기한</strong> — 결정 통지일로부터 90일.</li>\n<li><strong>제출처</strong> — 관할 고용보험심사관(지방고용노동청).</li>\n<li><strong>필수 서류</strong> — 심사청구서, 결정통지서 사본, 이의 사유·증빙.</li>\n<li><strong>처리 기간</strong> — 보통 2~3개월 내 결과.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 수급 불인정 사유의 반박 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재심사청구 — 심사위원회·추가 90일',
        content:
          '<p><strong style="color:#1e3a5f">심사청구 결과에도 불복할 경우 90일 내 고용보험심사위원회에 재심사 청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>재심사 대상</strong> — 심사관 결정에 불복.</li>\n<li><strong>기한</strong> — 심사 결정 통지일로부터 90일.</li>\n<li><strong>기구</strong> — 중앙 고용보험심사위원회.</li>\n<li><strong>추가 증거 제출</strong> — 심사 단계에서 제출 못한 자료 보완.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재심사 단계에서 법률전문가 조력을 받으면 승소율이 올라갑니다.</blockquote>',
      },
      {
        title: '행정소송 — 마지막 단계',
        content:
          '<p><strong style="color:#1e3a5f">재심사에서도 불복하면 행정소송(취소소송)으로 법원 판단을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>관할</strong> — 행정법원.</li>\n<li><strong>기한</strong> — 재심사 결정 통지일로부터 90일.</li>\n<li><strong>청구 취지</strong> — 수급자격 불인정 처분 취소.</li>\n<li><strong>비용</strong> — 인지대·송달료·대리인 수임료 발생.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 행정소송 전 단계 심사·재심사를 반드시 거쳐야 하며, 소급 수급 가능성을 변호사와 상담하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 수급자격 심사의 실질 판단 원칙',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 수급자격 심사에서 형식적 분류가 아닌 실질적 사유를 종합 판단해야 하며 이의제기 절차는 실질적 구제 기능을 가진다고 판시했습니다.',
        takeaway:
          '형식적 거부에도 실질적 사유가 있다면 심사·재심사 단계에서 구제받을 가능성이 높습니다.',
      },
    ],
    faq: [
      {
        question: '심사청구서 양식은 어디서 받나요?',
        answer:
          '<strong>고용보험 홈페이지(ei.go.kr) 또는 관할 고용노동청에서 받을 수 있습니다.</strong> 전자신청도 가능합니다.',
      },
      {
        question: '심사 중에 실업급여 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 거부 결정이 유지되는 동안 수급은 어렵습니다.</strong> 승소 시 소급 지급이 가능합니다.',
      },
      {
        question: '변호사 없이 혼자 해도 되나요?',
        answer:
          '<strong>가능하지만 복잡한 사건은 노무사·변호사 도움이 유리합니다.</strong> 무료법률지원센터(대한법률구조공단) 활용을 고려하세요.',
      },
      {
        question: '결정통지서 못 받았다면 기한은 어떻게 되나요?',
        answer:
          '<strong>송달 시점부터 90일이 기산됩니다.</strong> 미송달 사실을 입증하면 기한이 연장될 수 있습니다.',
      },
      {
        question: '부정수급 오인 거부의 반박 핵심은?',
        answer:
          '<strong>고의 없음·오인 가능성·사후 회복 노력을 구체적 증빙으로 입증해야 합니다.</strong> 자료 일관성이 핵심입니다.',
      },
    ],
    cta: {
      text: '실업급여 거부 AI 이의신청 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자발적 퇴사 예외', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '부정수급 제재', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '수급자격 심사 기준', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
    ],
  },

  // ─── 6. retirement / interim-settlement-2024-rules ───
  {
    domain: 'retirement',
    slug: 'retirement-interim-settlement-2024-rules',
    keyword: '퇴직금 중간정산 법정 사유',
    questionKeyword: '요즘 중간정산 어떤 경우에 가능한가요?',
    ctaKeyword: '중간정산 가능성 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 법정 사유 총정리 | 로앤가이드',
      description:
        '퇴직금 중간정산 법정 사유 6가지를 최신 기준으로 정리했습니다. 요건과 증빙 서류를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금 중간정산은 예외적으로만 허용되는 제도로 법정 사유를 충족하지 못하면 무효 처리됩니다. 무주택자 주택 구입·전세자금·6개월 이상 요양·파산/회생·임금피크제 등 현행 법정 사유를 체계적으로 정리합니다.</p>',
    sections: [
      {
        title: '법정 사유 요약 — 근로자퇴직급여보장법 제8조 제2항',
        content:
          '<p><strong style="color:#1e3a5f">중간정산 사유는 시행령에 열거된 6가지에 한정됩니다.</strong></p>\n<ul>\n<li><strong>무주택자 주택 구입</strong> — 본인 명의 무주택 + 주택 구입 목적.</li>\n<li><strong>전세·보증금</strong> — 무주택자가 본인·배우자 명의 주거 전세·보증금 지급.</li>\n<li><strong>6개월 이상 요양</strong> — 본인·가족 6개월 이상 요양이 필요한 질병·상해.</li>\n<li><strong>파산/개인회생</strong> — 법원 파산선고·개인회생절차 개시 결정.</li>\n<li><strong>임금피크제 시행</strong> — 임금피크제 도입으로 임금이 감소하는 경우.</li>\n<li><strong>재난</strong> — 재난 및 안전관리 기본법상 특별재난지역 거주 피해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 열거된 사유 외는 원칙적으로 중간정산이 허용되지 않습니다.</blockquote>',
      },
      {
        title: '필요 증빙 서류 — 사유별 체크',
        content:
          '<p><strong style="color:#1e3a5f">사유별로 제출해야 하는 증빙이 다릅니다.</strong></p>\n<ul>\n<li><strong>주택 구입</strong> — 매매계약서·주택구입사실확인서·무주택증명서.</li>\n<li><strong>전세·보증금</strong> — 임대차계약서·세대주 주민등록등본·무주택증명.</li>\n<li><strong>요양</strong> — 진단서·치료계획서·입원확인서.</li>\n<li><strong>파산/회생</strong> — 법원 결정문·인가 결정 송달증빙.</li>\n<li><strong>임금피크제</strong> — 취업규칙·단체협약 임금피크제 문구·급여명세서 변동 비교.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황이 법정 사유에 해당하는지 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '무효 중간정산 — 차액 재청구 가능',
        content:
          '<p><strong style="color:#1e3a5f">법정 사유 미충족 중간정산은 무효로 처리되어 퇴직 시 차액 청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>무효 판정</strong> — 법정 사유 미해당·요건 미충족 시 무효.</li>\n<li><strong>차액 청구</strong> — 퇴직 시 전체 근속 합산 퇴직금 - 중간정산액 = 차액 지급.</li>\n<li><strong>동의서 무효</strong> — 서명했더라도 강행규정 위반이면 무효 주장 가능.</li>\n<li><strong>3년 시효</strong> — 퇴직일 기준 3년 내 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무효 중간정산은 서명했더라도 다툴 수 있으며 차액을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '실무 대응 — 신청 전 확인 사항',
        content:
          '<p><strong style="color:#1e3a5f">중간정산 신청 전 반드시 요건·증빙·사후 영향을 점검하세요.</strong></p>\n<ul>\n<li><strong>사유 해당성</strong> — 법정 사유 정확한 매칭 확인.</li>\n<li><strong>퇴직금 계산 영향</strong> — 중간정산 후 근속연수 리셋 여부 확인.</li>\n<li><strong>세금 영향</strong> — 중간정산분 소득세 원천징수·경정청구 검토.</li>\n<li><strong>재정산 청구 가능성</strong> — 요건 미충족 시 추후 재정산 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 임의로 중간정산을 강요하면 근로자는 거부할 수 있으며, 강요 정황을 기록해두세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 중간정산 요건의 엄격한 해석',
        summary:
          '대법원 2025다211987 사건(대법원, 2025.11.27 선고)에서 법원은 퇴직금 중간정산이 예외 제도이며 법정 사유·요건을 엄격히 해석해야 한다고 판시했습니다.',
        takeaway:
          '중간정산 요건을 충족하지 못하면 무효이며 차액 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '자녀 결혼비용도 중간정산 사유 되나요?',
        answer:
          '<strong>아닙니다.</strong> 결혼·학자금·일반 생활비는 법정 사유에 포함되지 않습니다.',
      },
      {
        question: '주택 구입 후 전매하면 문제되나요?',
        answer:
          '<strong>요건 미충족으로 중간정산 무효가 될 수 있습니다.</strong> 실거주 목적 입증이 필요합니다.',
      },
      {
        question: '무주택 증빙은 어떻게 발급받나요?',
        answer:
          '<strong>주민센터 또는 정부24에서 "무주택 증명서"를 발급받을 수 있습니다.</strong> 세대 전체 확인이 필요합니다.',
      },
      {
        question: '중간정산 후 근속연수는 어떻게 되나요?',
        answer:
          '<strong>원칙적으로 중간정산 시점부터 근속연수가 리셋됩니다.</strong> 단, 무효 중간정산은 리셋되지 않고 전체 근속이 유지됩니다.',
      },
      {
        question: '임금피크제 중간정산은 언제 가능한가요?',
        answer:
          '<strong>임금피크제 시행 시점에 중간정산 사유로 신청 가능합니다.</strong> 취업규칙·단체협약 문구가 명확해야 합니다.',
      },
    ],
    cta: {
      text: '중간정산 가능성 AI 점검',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 청구 시작 가이드', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '중간정산 요건 상세', href: '/guide/retirement/retirement-interim-settlement-eligible-7' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula' },
      { label: '퇴직금 14일 지급 원칙', href: '/guide/retirement/retirement-pay-14day-rule-explained' },
      { label: '퇴직금 강제집행 절차', href: '/guide/retirement/retirement-pay-overdue-14days' },
    ],
  },

  // ─── 7. retirement / stock-option-included ───
  {
    domain: 'retirement',
    slug: 'retirement-stock-option-included',
    keyword: '퇴직금 스톡옵션 평균임금 포함',
    questionKeyword: '스톡옵션 행사 이익도 퇴직금 계산에 들어가나요?',
    ctaKeyword: '스톡옵션 퇴직금 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '스톡옵션·주식보상 퇴직금 포함 여부 | 로앤가이드',
      description:
        '스톡옵션 행사 이익·RSU가 평균임금에 포함되는지 기준을 정리했습니다. 지급의 정기성·임금성 판단을 지금 확인하세요.',
    },
    intro:
      '<p>스타트업·IT기업 근로자에게는 스톡옵션·RSU 등 주식 기반 보상이 큰 비중을 차지합니다. 이 수익이 퇴직금 계산 시 평균임금에 포함되는지에 따라 퇴직금 규모가 달라지므로 정확한 기준을 알고 대응하는 것이 중요합니다.</p>',
    sections: [
      {
        title: '평균임금 포함 기준 — 임금성 판단',
        content:
          '<p><strong style="color:#1e3a5f">스톡옵션 행사 이익이 평균임금에 포함되려면 "근로의 대가 + 정기·계속적 지급"이 인정되어야 합니다.</strong></p>\n<ul>\n<li><strong>근로 대가성</strong> — 단순 성과 보상 성격이면 임금성 인정 가능.</li>\n<li><strong>정기성</strong> — 반복적 부여·계속적 행사 기회가 있으면 유리.</li>\n<li><strong>계속성</strong> — 일시적 인센티브 성격은 임금성 부정.</li>\n<li><strong>지급 의무</strong> — 단체협약·취업규칙에 지급 의무가 명시돼 있으면 임금성 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로 대가성·정기성·의무성 중 어느 하나라도 확실하게 인정되면 평균임금 포함 주장이 가능합니다.</blockquote>',
      },
      {
        title: '스톡옵션 vs RSU — 성격 차이',
        content:
          '<p><strong style="color:#1e3a5f">스톡옵션과 RSU(양도제한조건부주식)는 법적 성격이 달라 평균임금 판단에 차이가 있습니다.</strong></p>\n<ul>\n<li><strong>스톡옵션</strong> — 부여 후 행사 시점의 시장 가격 차액이 수익. 일회성 성격이 강함.</li>\n<li><strong>RSU</strong> — 일정 기간 근무 시 주식 자동 지급. 정기·계속적 성격이 상대적으로 강함.</li>\n<li><strong>제도 설계</strong> — RSU가 계속적 보상 체계면 임금성 인정 가능성 높음.</li>\n<li><strong>지급 시점</strong> — 재직 요건부 RSU는 임금성 주장 근거가 확실.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 보상 구조의 임금성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '입증 자료 — 계약서·지급 이력',
        content:
          '<p><strong style="color:#1e3a5f">평균임금 포함 주장을 하려면 계약서·지급 이력 등 구체적 증빙이 필요합니다.</strong></p>\n<ul>\n<li><strong>부여 계약서</strong> — 옵션 행사 조건·기간·수량 명시.</li>\n<li><strong>행사 기록</strong> — 과거 행사 횟수·시점 정리.</li>\n<li><strong>과세 자료</strong> — 근로소득으로 과세된 이력이 있으면 임금성 강화.</li>\n<li><strong>취업규칙·단체협약</strong> — 일반 보상 체계로 명시돼 있는지 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 근로소득 원천징수된 스톡옵션 수익은 임금성 인정 가능성이 매우 높습니다.</blockquote>',
      },
      {
        title: '실무 대응 — 협상과 법적 절차',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 시 평균임금 재계산 요구는 협상·노동청 진정·민사 청구를 병행하는 것이 효과적입니다.</strong></p>\n<ul>\n<li><strong>1단계: 회사 협상</strong> — 재계산 요청과 근거 자료 제시.</li>\n<li><strong>2단계: 노동청 진정</strong> — 평균임금 산정 오류를 임금체불로 진정.</li>\n<li><strong>3단계: 민사 지급명령</strong> — 지연이자 20% 포함 차액 청구.</li>\n<li><strong>4단계: 전문가 검토</strong> — 임금성 판단이 복잡하므로 변호사·노무사 조력 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금 청구권은 3년 소멸시효가 적용되므로 빠른 대응이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과급·특별보상의 평균임금성',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 성과급·특별보상의 평균임금 포함 여부를 근로 대가성·정기성·계속성으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '스톡옵션·RSU도 근로 대가성·정기성 기준으로 포함 여부가 결정되며, 사례별 판단이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '일회성 스톡옵션 행사도 포함되나요?',
        answer:
          '<strong>원칙적으로 포함되기 어렵습니다.</strong> 반복·계속적 지급 요소가 있어야 임금성 인정 가능성이 높아집니다.',
      },
      {
        question: 'RSU는 대부분 포함되나요?',
        answer:
          '<strong>재직 요건부 RSU는 임금성 인정 가능성이 높습니다.</strong> 부여·지급 구조를 확인하세요.',
      },
      {
        question: '퇴직 후 행사한 옵션도 평균임금에 들어가나요?',
        answer:
          '<strong>퇴직 후 행사분은 원칙적으로 제외됩니다.</strong> 퇴직 전 3개월 이내 행사가 기준입니다.',
      },
      {
        question: '세금 처리는 어떻게 되나요?',
        answer:
          '<strong>근로소득으로 과세된 이력이 있으면 임금성 입증에 유리합니다.</strong> 원천징수영수증을 확보하세요.',
      },
      {
        question: '회사가 재계산 거부하면 어떻게 하나요?',
        answer:
          '<strong>노동청 진정과 민사 지급명령을 병행하세요.</strong> 3년 시효 내에 진행해야 합니다.',
      },
    ],
    cta: {
      text: '스톡옵션 퇴직금 AI 점검',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula' },
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '상여금 평균임금 포함', href: '/guide/retirement/retirement-bonus-included' },
      { label: '성과급 평균임금', href: '/guide/retirement/retirement-bonus-performance-included' },
      { label: '퇴직금 재계산 오류', href: '/guide/retirement/retirement-recalculation-error' },
    ],
  },

  // ─── 8. retirement / business-acquisition-succession ───
  {
    domain: 'retirement',
    slug: 'retirement-business-acquisition-succession',
    keyword: '사업 양수도 퇴직금 승계',
    questionKeyword: '회사 인수된 뒤 퇴직금 근속 이어지나요?',
    ctaKeyword: '사업 승계 퇴직금 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업 양수도·M&A 후 퇴직금 근속 승계 기준 | 로앤가이드',
      description:
        '회사 인수·합병·사업 양수도 시 퇴직금 근속 승계 여부를 정리했습니다. 고용승계·별도 정산 구조를 지금 확인하세요.',
    },
    intro:
      '<p>회사가 다른 법인에 인수·합병되거나 사업부가 양도되면 기존 근로자의 퇴직금 근속 이력이 어떻게 처리되는지 쟁점이 됩니다. 원칙은 "고용 승계 시 근속 합산"이지만 실무상 다양한 유형이 있어 사례별 판단이 필요합니다.</p>',
    sections: [
      {
        title: '고용승계 원칙 — 근속 합산 우선',
        content:
          '<p><strong style="color:#1e3a5f">판례는 사업 양수도 시 근로관계가 포괄적으로 승계되면 근속기간이 합산된다고 봅니다.</strong></p>\n<ul>\n<li><strong>포괄 승계</strong> — 사업 실체·근로자 전원 승계 시 근속 합산 원칙.</li>\n<li><strong>개별 동의</strong> — 일부 근로자만 선택 승계 시 개별 협의 필요.</li>\n<li><strong>양수도 계약서</strong> — 퇴직금 정산 방식이 명시돼 있는지 확인.</li>\n<li><strong>사전 정산</strong> — 양도 시점에 사전 정산하면 근속이 리셋될 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업 승계는 근속 합산이 원칙이며, 이를 침해하는 합의는 무효 주장 가능.</blockquote>',
      },
      {
        title: '합병 vs 사업 양도 — 차이점',
        content:
          '<p><strong style="color:#1e3a5f">법인 합병과 사업 양도는 법적 성격이 달라 퇴직금 처리 방식도 다릅니다.</strong></p>\n<ul>\n<li><strong>흡수합병</strong> — 자동 권리·의무 승계로 근속 합산이 당연.</li>\n<li><strong>분할합병</strong> — 사업부별 승계 여부에 따라 판단.</li>\n<li><strong>사업 양도</strong> — 사업 실체·근로자 동의 기준 포괄 승계 여부 판단.</li>\n<li><strong>영업양도</strong> — 영업 자체의 동일성 유지 여부가 핵심.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 인수·합병 유형별 퇴직금 승계 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '강제 정산·불리한 조건 — 무효 가능',
        content:
          '<p><strong style="color:#1e3a5f">양수도 시점에 일방적 퇴직금 정산·불리한 조건을 강요한 경우는 무효 주장이 가능합니다.</strong></p>\n<ul>\n<li><strong>강행규정 위반</strong> — 중간정산 법정 사유 미충족 + 강제 정산은 무효.</li>\n<li><strong>근로조건 불이익 변경</strong> — 근로기준법 제94조에 따라 근로자 과반수 동의 없으면 무효.</li>\n<li><strong>포괄 승계 원칙 위반</strong> — 근로자 동의 없는 근속 분절은 무효.</li>\n<li><strong>차액 재청구</strong> — 무효 정산 시 전체 근속 합산 퇴직금 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동의서에 서명했더라도 강행규정 위반이면 사후 무효 주장이 가능합니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 신청 전 확인',
        content:
          '<p><strong style="color:#1e3a5f">사업 승계 후 퇴직금 청구 전 반드시 확인해야 할 사항이 있습니다.</strong></p>\n<ul>\n<li><strong>양수도 계약서</strong> — 퇴직금 정산 방식·승계 조건 확인.</li>\n<li><strong>근로계약 승계 여부</strong> — 새 회사 근로계약서의 근속 인정 문구 확인.</li>\n<li><strong>과거 정산 내역</strong> — 양도 시점 정산금·세금 원천징수 이력 확보.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터 3년 내 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 새 회사가 "전 회사 근속은 인정 안 된다"며 거부하면 노동청 진정·민사 청구로 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 양도와 근로관계 포괄 승계',
        summary:
          '대법원 2025다211987 사건(대법원, 2025.11.27 선고)에서 법원은 사업의 실체가 동일성을 유지하며 이전되는 경우 근로관계가 포괄적으로 승계되어 근속·퇴직금이 합산된다고 판시했습니다.',
        takeaway:
          '사업 양도·합병·인수 시 근로관계 포괄 승계가 원칙이며, 이를 침해하는 합의는 무효 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '인수 후 정리해고되면 퇴직금은 어떻게 되나요?',
        answer:
          '<strong>전체 근속을 합산해 퇴직금을 산정해야 합니다.</strong> 부당해고 시 구제신청과 별도로 진행하세요.',
      },
      {
        question: '양도 시점 퇴직금 정산이 유리할 때도 있나요?',
        answer:
          '<strong>예외적으로 유리할 수 있으나 강행규정 위반 없이 법정 사유에 해당해야 합니다.</strong> 단순한 "정산이 편하다"는 이유는 부족합니다.',
      },
      {
        question: '신 회사가 근속 인정 서면 합의했는데 나중에 뒤집을 수 있나요?',
        answer:
          '<strong>근로자 권리를 침해하지 않는 한 서면 합의는 유효합니다.</strong> 다만 불공정 요소가 있으면 무효 다툼 가능.',
      },
      {
        question: '사업 일부만 양도된 경우는 어떻게 되나요?',
        answer:
          '<strong>해당 사업부 근로자는 포괄 승계 원칙이 적용됩니다.</strong> 사업 실체 동일성 여부가 판단 기준.',
      },
      {
        question: '근속 승계 거부 시 어떤 절차가 유리한가요?',
        answer:
          '<strong>노동청 진정 + 민사 지급명령 병행이 효과적입니다.</strong> 증빙 자료 준비 후 즉시 진행하세요.',
      },
    ],
    cta: {
      text: '사업 승계 퇴직금 AI 점검',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '사업 양도 퇴직금', href: '/guide/retirement/retirement-business-transfer-responsibility' },
      { label: '합병 후 근속 승계', href: '/guide/retirement/retirement-merger-successor' },
      { label: '회사 분할 근속', href: '/guide/retirement/retirement-company-split-claim' },
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-formula' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-eligible-7' },
    ],
  },

  // ─── 9. wage / holiday-work-calculation-method ───
  {
    domain: 'wage',
    slug: 'wage-holiday-work-calculation-method',
    keyword: '휴일근로수당 계산 방법',
    questionKeyword: '휴일에 일한 수당은 어떻게 계산하나요?',
    ctaKeyword: '휴일근로수당 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '휴일근로수당 계산 공식과 중복가산 기준 | 로앤가이드',
      description:
        '공휴일·약정휴일·대체휴일 근로 시 수당 계산 방식과 연장근로 가산을 정리했습니다. 정확한 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>휴일에 출근해 일했는데 수당이 제대로 들어왔는지 헷갈리는 경우가 많습니다. 공휴일·약정휴일·대체휴일 구분에 따라 가산 방식이 다르고 연장근로 중복가산 여부에 따라 금액이 크게 달라지므로 정확한 계산 공식을 알고 있어야 손실을 방지할 수 있습니다.</p>',
    sections: [
      {
        title: '휴일의 법적 구분',
        content:
          '<p><strong style="color:#1e3a5f">휴일은 근거 법률과 성격에 따라 여러 유형으로 나뉩니다.</strong></p>\n<ul>\n<li><strong>법정휴일</strong> — 근로기준법상 주휴일·관공서 공휴일(5인 이상 사업장).</li>\n<li><strong>약정휴일</strong> — 단체협약·취업규칙에 정한 창립기념일·회사 휴일.</li>\n<li><strong>대체휴일</strong> — 법정휴일을 다른 날로 대체한 휴일.</li>\n<li><strong>유급·무급 구분</strong> — 유급휴일인지 여부에 따라 수당 계산이 달라짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 어떤 유형의 휴일인지 확인해야 정확한 수당 계산이 가능합니다.</blockquote>',
      },
      {
        title: '휴일근로 기본 가산 — 50%',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제56조는 휴일근로 시 통상임금의 50% 이상을 가산해 지급하도록 규정합니다.</strong></p>\n<ul>\n<li><strong>8시간 이내</strong> — 통상임금 150%(기본 100 + 가산 50).</li>\n<li><strong>8시간 초과</strong> — 통상임금 200%(기본 100 + 가산 100).</li>\n<li><strong>야간 중복</strong> — 22시~익일 6시 근로 시 추가 50% 가산.</li>\n<li><strong>통상임금 기준</strong> — 기본급·정기수당 포함 통상임금 시급 기준.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 휴일근로 수당을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '계산 예시 — 시급 1만 원 기준',
        content:
          '<p><strong style="color:#1e3a5f">시급 1만원 기준 구체적 계산 예시로 이해하면 오류를 잡아낼 수 있습니다.</strong></p>\n<ul>\n<li><strong>휴일 8시간</strong> — 10,000 × 8 × 1.5 = 120,000원.</li>\n<li><strong>휴일 10시간</strong> — 8시간(1.5배) + 2시간(2배) = 120,000 + 40,000 = 160,000원.</li>\n<li><strong>야간 포함</strong> — 22시 이후 시간에는 추가 0.5배 가산.</li>\n<li><strong>주휴수당 병행</strong> — 유급 주휴일에 근로 시 주휴수당 + 휴일근로수당 별도 지급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 시급과 근로시간을 대입해 회사 지급액과 비교하면 누락 여부가 드러납니다.</blockquote>',
      },
      {
        title: '미지급 시 청구 절차 — 3년 시효',
        content:
          '<p><strong style="color:#1e3a5f">휴일근로수당 미지급은 임금체불에 해당하며 3년 시효 내 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>1단계: 계산 정리</strong> — 3년치 월별 휴일근로 시간과 미지급액 엑셀 정리.</li>\n<li><strong>2단계: 노동청 진정</strong> — 고용노동부(1350)에 임금체불 진정.</li>\n<li><strong>3단계: 민사 지급명령</strong> — 지연이자 20% 포함 청구.</li>\n<li><strong>4단계: 증거 확보</strong> — 출퇴근 기록·근무 일지·카톡 지시 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3년이 지난 임금은 소멸시효로 청구가 불가하므로 빠른 대응이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴일근로 가산수당 계산 원칙',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 휴일근로수당·연장근로수당 계산 시 통상임금 기준과 가산율을 엄격히 적용해야 한다고 판시했습니다.',
        takeaway:
          '휴일근로수당은 법정 가산율에 따라 정확히 계산해야 하며 감액·회피 시도는 무효입니다.',
      },
    ],
    faq: [
      {
        question: '법정공휴일에 쉬는 날도 유급인가요?',
        answer:
          '<strong>5인 이상 사업장은 유급입니다.</strong> 근로자가 일했다면 유급휴일 수당 + 휴일근로수당 병행 지급.',
      },
      {
        question: '주휴일에 일하면 어떻게 계산되나요?',
        answer:
          '<strong>주휴수당 + 휴일근로수당 150% 각각 지급됩니다.</strong> 통상임금 시급 기준으로 산정.',
      },
      {
        question: '대체휴일 근로도 가산 대상인가요?',
        answer:
          '<strong>네, 법정휴일의 대체휴일도 휴일근로 가산 대상입니다.</strong> 약정휴일은 별도 단체협약 규정 확인.',
      },
      {
        question: '포괄임금제면 휴일근로수당 청구 못 하나요?',
        answer:
          '<strong>법정 최저기준 미달 시 차액 청구 가능합니다.</strong> 포괄임금 유효 요건을 점검하세요.',
      },
      {
        question: '연장·야간·휴일 중복 시 어떻게 가산되나요?',
        answer:
          '<strong>각 가산율이 중첩 적용됩니다(최대 200~250%).</strong> 정확한 계산은 전문가 조력이 권장됩니다.',
      },
    ],
    cta: {
      text: '휴일근로수당 AI 점검',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '야근수당 계산 방법', href: '/guide/wage/wage-night-overtime-calculation' },
      { label: '주휴수당 지급 기준', href: '/guide/wage/wage-minimum-weekly-holiday' },
      { label: '임금체불 청구 절차', href: '/guide/wage/wage-report-to-labor-ministry' },
      { label: '통상임금 판단 기준', href: '/guide/wage/wage-holiday-special-pay' },
      { label: '연장근로수당 계산', href: '/guide/wage/wage-overtime-pay-calculation' },
    ],
  },

  // ─── 10. wage / comprehensive-legal-test ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-legal-test',
    keyword: '포괄임금제 유효 요건',
    questionKeyword: '내 회사 포괄임금제 합법인지 어떻게 확인하나요?',
    ctaKeyword: '포괄임금 합법성 점검',
    type: '진단형',
    perspective: 'victim',
    meta: {
      title: '포괄임금제 유효 4가지 요건 진단 가이드 | 로앤가이드',
      description:
        '포괄임금제 유효 요건 4가지를 체크리스트로 정리했습니다. 본인 회사의 적법성을 지금 점검해보세요.',
    },
    intro:
      '<p>포괄임금제에 동의한 사실만으로 제도가 유효하다고 보긴 어렵습니다. 판례는 4가지 요건을 모두 충족해야 유효하다고 보며 하나라도 어긋나면 계약 자체가 부분 또는 전부 무효가 됩니다. 본인 회사의 포괄임금제가 법적으로 유효한지 단계별로 진단합니다.</p>',
    sections: [
      {
        title: '요건 1 — 근로자 명시적 동의',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금제는 근로자의 명시적 동의가 전제되어야 합니다.</strong></p>\n<ul>\n<li><strong>서면 동의</strong> — 계약서·근로조건 변경 동의서에 명시.</li>\n<li><strong>묵시적 동의 불가</strong> — 단순 관행·구두 설명만으로는 부족.</li>\n<li><strong>취업 전 고지</strong> — 취업 전 포괄임금 구조 고지 필수.</li>\n<li><strong>개별 동의</strong> — 집단 적용 시 각 근로자 개별 동의 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서면 동의가 없으면 포괄임금 자체가 무효입니다.</blockquote>',
      },
      {
        title: '요건 2 — 근로시간 산정 곤란성',
        content:
          '<p><strong style="color:#1e3a5f">판례는 근로시간 산정이 "실질적으로 곤란한 업무"에만 포괄임금제가 허용된다고 합니다.</strong></p>\n<ul>\n<li><strong>인정 업무</strong> — 영업·운수업·경비·감시 등 시간 산정 곤란.</li>\n<li><strong>부정 업무</strong> — 일반 사무직·IT 개발자는 시간 관리 가능하므로 대개 부정.</li>\n<li><strong>출퇴근 관리</strong> — 출퇴근·로그 기록 있는 업무는 산정 가능으로 봄.</li>\n<li><strong>형식적 적용 금지</strong> — 사무직 일괄 포괄임금제는 무효.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 직무의 포괄임금 적용 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '요건 3 — 법정 최저기준 이상 지급',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금제 지급액은 법정 최저기준(최저임금·연장·야간·휴일 가산수당) 이상이어야 합니다.</strong></p>\n<ul>\n<li><strong>가상 계산</strong> — 실근로시간 × 통상임금 × 가산율 ≤ 포괄임금액.</li>\n<li><strong>최저임금 준수</strong> — 모든 시간·모든 근로 포함 최저임금 보장.</li>\n<li><strong>초과분 별도</strong> — 계산상 부족하면 차액 청구 가능.</li>\n<li><strong>근로시간 기록</strong> — 실제 근로시간 기록이 차액 계산의 출발점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금액이 법정 최저기준에 미달하면 그만큼 차액을 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '요건 4 — 계약 내용의 명확성·예측 가능성',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 내역이 명확히 구분되어 근로자가 예측 가능해야 합니다.</strong></p>\n<ul>\n<li><strong>내역 구분</strong> — 기본급·연장수당·야간수당·휴일수당 구분 명시.</li>\n<li><strong>예측 가능</strong> — 근로시간 범위·초과분 지급 조건이 명확.</li>\n<li><strong>불명확 약정 무효</strong> — "전체 금액 일괄"은 사실상 무효.</li>\n<li><strong>변동 수당 별도</strong> — 실적·성과 수당은 별도 지급 규정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 4개 요건 중 하나라도 미충족이면 일부 또는 전부 무효 주장이 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금제 유효 요건의 엄격 해석',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 포괄임금제가 근로시간 산정이 실질적으로 어려운 업무에만 예외적으로 인정되며, 형식적 적용은 무효라고 판시했습니다.',
        takeaway:
          '일반 사무직·IT 개발직 등 시간 관리 가능한 업무의 포괄임금제는 대부분 무효로 판단됩니다.',
      },
    ],
    faq: [
      {
        question: '서명했는데 지금 다툴 수 있나요?',
        answer:
          '<strong>요건 미충족이면 가능합니다.</strong> 서명 자체로 유효가 결정되지 않습니다.',
      },
      {
        question: '사무직인데 포괄임금 받고 있어요',
        answer:
          '<strong>대부분 무효 가능성이 있습니다.</strong> 근로시간 기록을 확보해 차액 청구를 검토하세요.',
      },
      {
        question: '노동청 진정 시 유효 판단은 누가 하나요?',
        answer:
          '<strong>근로감독관이 1차 판단하며 최종은 법원에서 결정됩니다.</strong> 증거 자료가 풍부할수록 유리합니다.',
      },
      {
        question: '얼마까지 받을 수 있나요?',
        answer:
          '<strong>3년치 차액 + 지연이자 20%까지 청구 가능합니다.</strong> 실제 근로시간 입증이 핵심입니다.',
      },
      {
        question: '동료들과 공동 청구해도 되나요?',
        answer:
          '<strong>네, 공동 청구가 가능합니다.</strong> 증언 확보와 절차 진행이 수월해집니다.',
      },
    ],
    cta: {
      text: '포괄임금 합법성 AI 진단',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '포괄임금 야근수당 청구', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '포괄임금 사례별 유효성', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '통상임금 기준', href: '/guide/wage/wage-holiday-special-pay' },
      { label: '임금체불 청구 절차', href: '/guide/wage/wage-report-to-labor-ministry' },
      { label: '연장근로 계산', href: '/guide/wage/wage-overtime-pay-calculation' },
    ],
  },

  // ─── 11. wage / unpaid-bonus-performance-lawsuit ───
  {
    domain: 'wage',
    slug: 'wage-unpaid-bonus-performance-lawsuit',
    keyword: '성과급 미지급 소송',
    questionKeyword: '받기로 한 성과급 안 주면 소송 가능한가요?',
    ctaKeyword: '성과급 미지급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성과급 미지급 시 소송·노동청 절차 | 로앤가이드',
      description:
        '성과급·인센티브 미지급 시 임금성 판단과 소송 절차를 정리했습니다. 지급 의무성 입증 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>목표 달성 후 약속받은 성과급·인센티브가 지급되지 않으면 근로자 입장에서 큰 손실입니다. 성과급이 "임금"으로 인정되면 임금체불로 강력한 구제가 가능하지만, 단순 재량 보너스로 판단되면 청구가 어려워져 성격 판단이 핵심입니다.</p>',
    sections: [
      {
        title: '성과급 임금성 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">성과급이 임금으로 인정되려면 지급 의무성·정기성·구체적 지급 기준이 있어야 합니다.</strong></p>\n<ul>\n<li><strong>지급 의무성</strong> — 단체협약·취업규칙·근로계약에 지급 의무 명시.</li>\n<li><strong>정기성</strong> — 반복적·정기적 지급 관행.</li>\n<li><strong>지급 기준</strong> — 목표 달성 기준·산식이 구체적.</li>\n<li><strong>근로 대가성</strong> — 근로 제공과 밀접한 관련성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4가지 요소가 많이 충족될수록 임금성 인정 가능성이 높아집니다.</blockquote>',
      },
      {
        title: '재량 보너스 — 임금성 부정 가능성',
        content:
          '<p><strong style="color:#1e3a5f">재량적·경영 성과 기반 일회성 보너스는 임금성이 부정되는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>재량 판단</strong> — 회사 판단에 따라 지급 여부 결정되면 임금성 약화.</li>\n<li><strong>당기순이익 연동</strong> — 경영 성과 분배 성격이면 임금성 부정 판례 다수.</li>\n<li><strong>일회성</strong> — 단발성 격려금은 임금으로 보지 않음.</li>\n<li><strong>노사 합의</strong> — 노사 합의로 지급된 경우도 임금성 약함.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 성과급의 임금성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 노동청·민사 동시 활용',
        content:
          '<p><strong style="color:#1e3a5f">임금성 인정 시 노동청 진정 + 민사 지급명령 동시 진행이 효과적입니다.</strong></p>\n<ul>\n<li><strong>노동청 진정</strong> — 임금체불로 형사 처벌 압박.</li>\n<li><strong>민사 지급명령</strong> — 지연이자 20% 포함 강제집행.</li>\n<li><strong>입증 자료</strong> — 목표 달성 자료·사내 공지·지급 이력·경영진 약속 메일.</li>\n<li><strong>3년 시효</strong> — 지급 시점부터 3년 내 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재량 보너스로 인정되면 민사 손해배상(채무불이행)으로 전환해 청구를 시도할 수 있습니다.</blockquote>',
      },
      {
        title: '실무 대응 — 증거 수집 포인트',
        content:
          '<p><strong style="color:#1e3a5f">성과급 청구는 증거의 질과 양에 따라 결과가 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>서면 약속</strong> — 근로계약서·연봉계약서·성과급 지급 약정서.</li>\n<li><strong>사내 공지·메일</strong> — 목표·지급 조건·시점이 기록된 사내 문서.</li>\n<li><strong>과거 지급 이력</strong> — 동료의 지급 내역·연도별 지급 기록.</li>\n<li><strong>목표 달성 증빙</strong> — 실적 보고·KPI 달성 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 구두 약속만으로는 증명이 어려우므로 서면·이메일 기록 확보가 최우선입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과급 임금성 판단 기준',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 성과급 임금성 판단은 근로 대가성·정기성·지급 의무성을 종합해야 한다고 판시했습니다.',
        takeaway:
          '임금성 판단은 사례별이며, 구체적 약정과 정기적 지급 관행이 강할수록 임금성 인정 가능성이 높습니다.',
      },
    ],
    faq: [
      {
        question: 'KPI 달성했는데 회사가 지급 안 하면 어떻게 하나요?',
        answer:
          '<strong>약속 자료가 있으면 청구 가능합니다.</strong> 임금성 인정 시 노동청 진정 + 민사 지급명령 병행.',
      },
      {
        question: '경영진 재량 보너스는 청구 못 하나요?',
        answer:
          '<strong>임금성 약한 경우가 많으나 구체적 약정·관행 있으면 가능합니다.</strong> 증거 확보가 핵심입니다.',
      },
      {
        question: '퇴사 후 성과급 청구 가능한가요?',
        answer:
          '<strong>재직 중 발생한 성과급은 퇴사 후에도 3년 내 청구 가능합니다.</strong> 지연이자도 함께 청구하세요.',
      },
      {
        question: '성과급 임금성 다툴 때 전문가 필요한가요?',
        answer:
          '<strong>복잡한 판단이 필요하므로 노무사·변호사 조력이 유리합니다.</strong> 무료 법률상담 센터도 활용 가능합니다.',
      },
      {
        question: '공동 청구할 수 있나요?',
        answer:
          '<strong>네, 동일 약정 근거를 가진 동료와 공동 청구가 가능합니다.</strong> 증거 확보와 합의 유도에 유리합니다.',
      },
    ],
    cta: {
      text: '성과급 미지급 AI 점검',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '성과급 임금성 상세', href: '/guide/wage/wage-performance-bonus-claim' },
      { label: '통상임금 판단 기준', href: '/guide/wage/wage-holiday-special-pay' },
      { label: '임금체불 청구 절차', href: '/guide/wage/wage-report-to-labor-ministry' },
      { label: '상여금 평균임금 포함', href: '/guide/retirement/retirement-bonus-included' },
      { label: '재직 중 임금체불 대응', href: '/guide/wage/wage-retaliation-after-complaint' },
    ],
  },

  // ─── 12. dismissal / fixed-term-non-renewal-remedy ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-non-renewal-remedy',
    keyword: '계약직 재계약 거부 부당해고',
    questionKeyword: '계약 만료라며 재계약 안 해주면 부당해고인가요?',
    ctaKeyword: '재계약 거부 구제 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '계약직 재계약 거부의 부당해고 여부 | 로앤가이드',
      description:
        '갱신기대권·묵시적 갱신 인정 조건을 정리했습니다. 재계약 거부를 부당해고로 다툴 수 있는 기준을 지금 확인하세요.',
    },
    intro:
      '<p>계약직으로 일하다가 만료 시점에 "계약 종료"라는 통보를 받으면 "이게 해고인가, 그냥 종료인가" 애매합니다. 판례상 "갱신기대권"이 인정되면 재계약 거부가 부당해고로 다뤄질 수 있어 요건을 확인하고 구제 절차를 밟아야 합니다.</p>',
    sections: [
      {
        title: '갱신기대권 — 부당해고 구제의 핵심',
        content:
          '<p><strong style="color:#1e3a5f">판례는 계약직이라도 ① 반복 갱신 관행 ② 계속 고용 약속 ③ 동일 업무 수행 ④ 정규직과 동일 실적 평가 시 "갱신기대권"을 인정합니다.</strong></p>\n<ul>\n<li><strong>반복 갱신</strong> — 2회 이상 갱신된 경우 기대권 근거.</li>\n<li><strong>계속 고용 약속</strong> — 경영진의 재계약 약속·서면 통지.</li>\n<li><strong>업무 계속성</strong> — 동일 업무·동일 근무지 계속 수행.</li>\n<li><strong>평가 동일</strong> — 정규직과 동일 평가 기준 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갱신기대권이 인정되면 재계약 거부는 해고에 준해 정당 사유 심사를 받습니다.</blockquote>',
      },
      {
        title: '2년 초과 자동 전환 — 근기법 특례',
        content:
          '<p><strong style="color:#1e3a5f">기간제법 제4조에 따라 2년 초과 근무 시 무기계약직으로 자동 전환됩니다.</strong></p>\n<ul>\n<li><strong>2년 원칙</strong> — 2년 초과 시 기간 정함 없는 근로계약으로 전환.</li>\n<li><strong>예외 직종</strong> — 박사·55세 이상·특정 업무 등은 예외.</li>\n<li><strong>전환 후 해고</strong> — 정규직과 동일 해고 정당성 심사 대상.</li>\n<li><strong>회피 꼼수</strong> — 중간 퇴사·파견 전환 등 회피 시도는 무효 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 계약의 갱신기대권·무기 전환 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부당해고 구제신청 — 3개월 시효',
        content:
          '<p><strong style="color:#1e3a5f">계약 종료일로부터 3개월 내 지방노동위원회에 구제신청이 가능합니다.</strong></p>\n<ul>\n<li><strong>시효</strong> — 계약 종료일 다음날부터 3개월.</li>\n<li><strong>제출처</strong> — 사업장 관할 지방노동위원회.</li>\n<li><strong>구제 효과</strong> — 원직 복직 + 해고 기간 임금 지급.</li>\n<li><strong>금전보상 선택</strong> — 복직 대신 금전보상 선택 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 3개월 시효 놓치면 부당해고 구제 자체가 불가능하므로 즉시 움직여야 합니다.</blockquote>',
      },
      {
        title: '증거 확보 — 갱신기대권 입증',
        content:
          '<p><strong style="color:#1e3a5f">갱신기대권 입증은 문서·메시지·관행 자료로 종합 판단됩니다.</strong></p>\n<ul>\n<li><strong>계약서 연혁</strong> — 반복 갱신 이력, 근무 기간 변화.</li>\n<li><strong>평가 자료</strong> — 인사평가·업무평가 기록.</li>\n<li><strong>사내 공지</strong> — 계속 고용 방침·정규직 전환 안내.</li>\n<li><strong>경영진 약속</strong> — 재계약·전환 약속 메일·카톡.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재계약 통보 시점 전후 받은 메시지·서면을 빠짐없이 보관하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신기대권과 부당해고 법리',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 계약직의 갱신기대권이 인정되면 재계약 거부가 부당해고에 준해 심사된다고 판시했습니다.',
        takeaway:
          '반복 갱신·계속 고용 약속·동일 업무 등 갱신기대권 근거가 있으면 부당해고 구제 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '2회 갱신만 돼도 갱신기대권 인정되나요?',
        answer:
          '<strong>가능성은 있지만 사정 종합 판단됩니다.</strong> 관행·약속·업무 계속성을 함께 입증해야 합니다.',
      },
      {
        question: '2년 초과하면 자동 정규직 전환인가요?',
        answer:
          '<strong>네, 기간제법상 무기계약직으로 전환됩니다.</strong> 단 예외 직종은 제외.',
      },
      {
        question: '재계약 거부가 부당해고로 인정되면 복직해야 하나요?',
        answer:
          '<strong>원직 복직이 원칙이나 금전보상 선택도 가능합니다.</strong> 개인 선호에 따라 결정하세요.',
      },
      {
        question: '계약서에 "갱신기대권 없음" 문구가 있으면 어떻게 되나요?',
        answer:
          '<strong>실질 관행이 있으면 문구와 무관하게 기대권 인정 가능합니다.</strong> 실제 근무 실태가 우선입니다.',
      },
      {
        question: '파견·용역 근로자도 적용되나요?',
        answer:
          '<strong>파견·용역은 법적 성격이 다르므로 별도 판단이 필요합니다.</strong> 근로관계 실질에 따라 적용 여부 결정.',
      },
    ],
    cta: {
      text: '재계약 거부 부당해고 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-application-how' },
      { label: '계약직 2년 전환', href: '/guide/dismissal/dismissal-fixed-term-2year-conversion' },
      { label: '갱신기대권 인정 사례', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '부당해고 구제 3개월', href: '/guide/dismissal/dismissal-unfair-relief' },
    ],
  },

  // ─── 13. dismissal / ceo-change-unfair-dismissal ───
  {
    domain: 'dismissal',
    slug: 'dismissal-ceo-change-unfair-dismissal',
    keyword: '대표 바뀐 후 해고',
    questionKeyword: '대표 바뀌었다고 해고되는 게 정당한가요?',
    ctaKeyword: '대표 교체 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '대표이사 교체 후 해고 정당성 판단 | 로앤가이드',
      description:
        '대표 변경을 이유로 한 해고가 부당해고에 해당하는지 판단 기준을 정리했습니다. 경영상 해고 요건과 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>회사 대표가 바뀐 뒤 "새 경영방침"을 이유로 해고당하는 사례가 많습니다. 대표 교체는 경영상 필요성의 근거가 될 수 있지만 법적으로는 해고 정당 사유를 별도 심사하며 단순 인사 쇄신은 부당해고로 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '대표 교체 ≠ 해고 정당 사유',
        content:
          '<p><strong style="color:#1e3a5f">대표 변경은 근로관계 당사자(법인) 변동이 아니므로 그 자체가 해고 사유가 될 수 없습니다.</strong></p>\n<ul>\n<li><strong>법인 당사자</strong> — 근로계약 상대방은 법인이며 대표는 대리인.</li>\n<li><strong>인적 신뢰 해고 불가</strong> — 대표와 개인적 신뢰 상실은 정당 사유 아님.</li>\n<li><strong>경영상 해고 요건</strong> — 긴박한 경영상 필요·해고 회피 노력·공정 선정·성실 협의 4요건 충족 필요.</li>\n<li><strong>단순 쇄신 무효</strong> — 인적 쇄신만을 위한 해고는 부당해고 가능성 높음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대표 교체만으로는 해고 정당 사유가 되지 않습니다.</blockquote>',
      },
      {
        title: '경영상 해고 요건 — 근기법 제24조',
        content:
          '<p><strong style="color:#1e3a5f">경영상 해고는 4가지 요건을 모두 충족해야 정당합니다.</strong></p>\n<ul>\n<li><strong>긴박한 경영상 필요</strong> — 적자·부실 등 객관적 경영 위기 입증.</li>\n<li><strong>해고 회피 노력</strong> — 휴직·전환배치·임금삭감 등 대안 시도.</li>\n<li><strong>공정한 선정 기준</strong> — 성별·연령·근속·부양가족 등 종합 고려.</li>\n<li><strong>성실한 협의</strong> — 근로자 대표와 50일 이상 사전 협의.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 해고의 경영상 요건 충족 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '서면 통지 필수 — 근기법 제27조',
        content:
          '<p><strong style="color:#1e3a5f">해고 시 해고 사유와 시기를 서면으로 통지해야 해고가 유효합니다.</strong></p>\n<ul>\n<li><strong>서면 방식</strong> — 정식 서면 통지서·등기우편·전자문서.</li>\n<li><strong>구두·카톡 부족</strong> — 구두 통보·카톡 단문은 원칙적으로 서면 통지 효력 없음.</li>\n<li><strong>사유 구체성</strong> — 해고 사유가 구체적으로 기재되어야 함.</li>\n<li><strong>미통지 효과</strong> — 서면 미통지 시 해고 자체가 무효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 서면 통지 부재는 부당해고 구제 심사에서 결정적 승소 포인트가 될 수 있습니다.</blockquote>',
      },
      {
        title: '부당해고 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고일로부터 3개월 이내 지방노동위원회에 구제신청을 하세요.</strong></p>\n<ul>\n<li><strong>시효</strong> — 해고일 다음날부터 3개월.</li>\n<li><strong>제출 서류</strong> — 구제신청서, 해고통지서 사본, 경영상 자료, 근로계약서.</li>\n<li><strong>구제 효과</strong> — 원직 복직 + 해고 기간 임금 지급.</li>\n<li><strong>금전보상 선택</strong> — 복직 대신 금전보상 선택 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 대표 교체 후 다수 해고 사례는 집단 구제신청으로 진행하면 실효성이 높습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 경영상 해고 요건의 엄격 적용',
        summary:
          '대법원 2022두45500 사건(대법원, 2023.06.29 선고)에서 법원은 경영상 해고는 긴박한 경영상 필요·해고회피노력·공정선정·성실협의 4요건이 모두 충족되어야 한다고 판시했습니다.',
        takeaway:
          '대표 교체를 이유로 한 해고는 별도 정당 사유 심사를 거치며 4요건 미충족 시 부당해고로 판정될 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '대표가 "내 마음에 안 든다"며 해고하면 어떻게 되나요?',
        answer:
          '<strong>명백한 부당해고입니다.</strong> 즉시 구제신청하고 위법 사유를 입증하세요.',
      },
      {
        question: '새 대표가 제안한 퇴사 합의안 서명해도 되나요?',
        answer:
          '<strong>신중히 검토하세요.</strong> 부당해고 구제신청 포기 조건이 있으면 불리합니다.',
      },
      {
        question: '근로자 대표와 협의 없이 해고하면 무효인가요?',
        answer:
          '<strong>경영상 해고의 경우 50일 협의가 필수이며, 누락 시 무효 주장 가능합니다.</strong>',
      },
      {
        question: '3개월 시효 놓치면 어떻게 되나요?',
        answer:
          '<strong>부당해고 구제신청은 불가능하나 민사 소송(해고무효확인)은 가능합니다.</strong> 다만 시간·비용이 더 듭니다.',
      },
      {
        question: '경영상 해고 회피 노력 부족이 쟁점인가요?',
        answer:
          '<strong>핵심 쟁점입니다.</strong> 휴직·전환배치 등 대안 시도 여부를 집중 입증해야 합니다.',
      },
    ],
    cta: {
      text: '대표 교체 해고 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-application-how' },
      { label: '경영상 해고 요건', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '해고 서면 통지', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '해고예고 30일', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 14. dismissal / health-reason-defense ───
  {
    domain: 'dismissal',
    slug: 'dismissal-health-reason-defense',
    keyword: '건강 이유 해고 방어',
    questionKeyword: '질병 있다고 해고하는 게 합법인가요?',
    ctaKeyword: '건강 해고 방어 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '건강·질병 이유 해고의 정당성 심사 | 로앤가이드',
      description:
        '질병·부상·장애를 이유로 한 해고의 정당성 기준을 정리했습니다. 휴직·전환배치 의무와 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>질병·부상으로 건강이 나빠졌다는 이유로 해고당하면 받아들이기 어렵습니다. 근로기준법은 건강 악화 시 휴직·전환배치 의무가 먼저이며, 해고는 최후 수단이어야 한다고 봅니다. 요건을 모르고 포기하면 손해이므로 방어 전략을 확인하세요.</p>',
    sections: [
      {
        title: '건강 이유 해고 — 엄격한 정당성 심사',
        content:
          '<p><strong style="color:#1e3a5f">건강 악화로 인한 근로 불능을 이유로 한 해고는 사회통념상 근로가 현저히 어려운 경우에만 정당합니다.</strong></p>\n<ul>\n<li><strong>근로 불능 판단</strong> — 현재 업무 수행 가능 여부 의학적 판정 필요.</li>\n<li><strong>전환배치 의무</strong> — 가벼운 업무·재배치 가능성 검토 의무.</li>\n<li><strong>휴직 제공</strong> — 회복 가능성 있으면 휴직 제공 우선.</li>\n<li><strong>최후 수단 원칙</strong> — 대안 시도 없이 해고는 부당해고 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 건강 이유 해고는 "즉시 해고"가 아니라 전환배치·휴직 시도가 선행되어야 합니다.</blockquote>',
      },
      {
        title: '산재·업무상 질병 — 해고 제한 특례',
        content:
          '<p><strong style="color:#1e3a5f">업무상 재해·질병 치료 중에는 해고가 원칙적으로 제한됩니다.</strong></p>\n<ul>\n<li><strong>근기법 제23조 제2항</strong> — 업무상 부상·질병 요양 중에는 해고 금지.</li>\n<li><strong>산재 인정</strong> — 근로복지공단 산재 승인이 있으면 강력한 방어 근거.</li>\n<li><strong>위반 시 무효</strong> — 특례 위반 해고는 당연 무효.</li>\n<li><strong>해고 예고 제한</strong> — 요양 중 해고예고도 제한적 판단.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 건강 해고의 정당성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '장애인 차별 금지 — 고용상 배려',
        content:
          '<p><strong style="color:#1e3a5f">장애인고용촉진법은 장애를 이유로 한 해고·불리한 대우를 금지합니다.</strong></p>\n<ul>\n<li><strong>합리적 배려</strong> — 사업주는 장애인 근로자에게 합리적 배려 제공 의무.</li>\n<li><strong>해고 제한</strong> — 단순 장애를 이유로 한 해고는 금지.</li>\n<li><strong>인권위 진정</strong> — 차별적 해고는 국가인권위원회 진정 가능.</li>\n<li><strong>노동위 구제 병행</strong> — 부당해고 구제신청과 병행 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장애 판정이 없더라도 만성질환·장기 치료는 합리적 배려 대상이 될 수 있습니다.</blockquote>',
      },
      {
        title: '실무 대응 — 증거 수집·구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">건강 해고에 대응하려면 의학적 증빙과 회사 대응 기록을 체계적으로 확보해야 합니다.</strong></p>\n<ul>\n<li><strong>진단서·소견서</strong> — 주치의 소견서, 근로능력 평가서.</li>\n<li><strong>전환배치 요청</strong> — 가벼운 업무 요청·거부 기록.</li>\n<li><strong>휴직 신청</strong> — 병가·휴직 신청 서류와 회사 답변.</li>\n<li><strong>3개월 구제신청</strong> — 해고일부터 3개월 내 지방노동위 구제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해고 통지 전후 회사 관계자와 주고받은 메시지·회의 기록을 모두 보관하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 질병을 이유로 한 해고의 엄격한 심사',
        summary:
          '대법원 2022두45500 사건(대법원, 2023.06.29 선고)에서 법원은 질병·건강 이유 해고는 근로자의 회복 가능성·전환배치 가능성·휴직 제공 등을 종합적으로 고려한 뒤 최후 수단으로만 허용된다고 판시했습니다.',
        takeaway:
          '건강 해고는 단순 질병이 아닌 사회통념상 근로 곤란이 입증되어야 하며, 대안 조치 없이 해고하면 부당해고로 판정됩니다.',
      },
    ],
    faq: [
      {
        question: '휴직 신청 거부 + 해고 통보 받았어요',
        answer:
          '<strong>해고 회피 노력 부족으로 부당해고 가능성이 큽니다.</strong> 즉시 구제신청을 준비하세요.',
      },
      {
        question: '산재 치료 중 해고 통보는 무효인가요?',
        answer:
          '<strong>원칙적으로 무효입니다.</strong> 업무상 재해 요양 중 해고는 근기법 제23조 제2항으로 금지됩니다.',
      },
      {
        question: '정신과 진료 이력이 해고 사유가 되나요?',
        answer:
          '<strong>단순 진료 이력만으로는 해고 정당 사유가 되지 않습니다.</strong> 차별적 해고로 다툴 수 있습니다.',
      },
      {
        question: '장애인으로 등록되지 않아도 보호받나요?',
        answer:
          '<strong>만성질환·장기 치료도 합리적 배려 대상이 될 수 있습니다.</strong> 의학적 증빙을 제출하세요.',
      },
      {
        question: '해고 후 빠르게 재취업 하면 구제신청 의미 없나요?',
        answer:
          '<strong>아닙니다.</strong> 해고 자체의 부당성을 확인받으면 해고 기간 임금·정신적 피해 배상 청구가 가능합니다.',
      },
    ],
    cta: {
      text: '건강 해고 방어 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-application-how' },
      { label: '병가·휴직 중 해고', href: '/guide/dismissal/dismissal-sick-leave-fired' },
      { label: '산재 치료 중 해고', href: '/guide/dismissal/dismissal-continuous-unfair-labor' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },
];
