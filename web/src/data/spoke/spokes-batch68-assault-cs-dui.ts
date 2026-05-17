import { SpokePage } from '../spoke-pages';

// batch68 assault(3) + child-support(2) + dui(1) — 6개 (2026-05-18)
//
// 고유 존재 이유:
// 1. assault-construction-site-worker-supervisor-attack-track — 건설현장 인부-반장·안전관리자 폭행 + 산재·근로감독 결합. 기존 workplace-drinking-coworker / supervisor-after-hours 와 분기: "건설현장 + 산재·노안법 + 사용자책임" 트랙.
// 2. assault-multi-attacker-pokchoebop-joint-liability-evidence-track — 폭처법 공동폭행 공모공동정범 입증 다툼. 기존 club-group-collective-sentencing 와 분기: "공모 입증 + 가담 정도 + 단순 가담자 무죄 다툼" 트랙.
// 3. assault-self-defense-elderly-grandchild-protect-counter-track — 노인이 손주·약자 보호하다 한 정당방위·침해 현재성. 기존 self-defense-proof / excessive 와 분기: "약자 보호 + 침해 현재성 + 반격방어" 트랙.
// 4. child-support-non-payer-credit-information-registration-track — 양육비이행법 27조의2 신용정보 등록(KCB·NICE) 제재. 기존 public-disclosure-debtor-list / license-suspension 과 분기: "신용 등록·금융 제재" 트랙.
// 5. child-support-modification-payer-disability-income-drop-track — 채무자 장해·산재·질병으로 수입 급감 시 감액 청구. 기존 ex-unemployed-reduction / paying-parent-remarriage 와 분기: "장해·산재 + 객관 자료 + 자녀 복리 균형" 트랙.
// 6. dui-test-refusal-hospital-bed-blood-extraction-warrant-track — 병원 응급실 채혈 영장 + 의식 없는 음주측정 다툼. 기존 measurement-refusal-appeal / test-refusal-warrant 과 분기: "응급실 + 영장 + 의식 상태" 트랙.

export const spokesBatch68AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-construction-site-worker-supervisor-attack-track ───
  {
    domain: 'assault',
    slug: 'assault-construction-site-worker-supervisor-attack-track',
    keyword: '건설현장 인부 반장 폭행',
    questionKeyword: '건설현장에서 안전 지적하던 반장이 인부를 폭행했어요. 산재와 형사 어떻게 같이 보나요?',
    ctaKeyword: '건설현장 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '건설현장 인부 반장 폭행 — 5단계 산재 + 형사 결합 트랙 | 로앤가이드',
      description:
        '건설현장 반장·안전관리자가 인부를 폭행했다면 산재 + 형사 + 사용자책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"건설현장에서 안전모 미착용을 두고 반장이 큰 소리를 냈고, 항의하자 반장이 손에 들고 있던 자재를 휘둘러 머리를 때리고 발로 옆구리를 차 갈비뼈에 금이 갔습니다. 원청·하청 회사는 \"개인 다툼\"이라며 산재 처리를 거부하고, 반장은 \"본인이 먼저 욕했다\"며 책임을 회피해 어디부터 정리해야 하는지 막막합니다." 건설현장 인부 폭행 피해자라면 ① 형법 260조 폭행·257조 상해죄 ② 산업안전보건법 위반(작업 중 폭력) ③ 산재보험법 업무상 재해 인정 여지 ④ 원청·하청 사용자책임(민법 756조) ⑤ 형사 + 산재 + 민사 3중 트랙 5가지가 결합되는 영역. 작업 중 발생한 폭행은 \"업무수행 중\" 평가로 산재 인정 여지가 있고, 원청·하청은 안전배려의무 + 사용자책임 별도 검토 영역. 대응은 ① 증거 ② 의료 ③ 신고 ④ 산재신청 ⑤ 형사·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 건설현장 인부 반장 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·산재·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 CCTV·동료 진술·자재 영상</strong></li>\n<li><strong>② 응급실·산재 지정병원 진단서</strong></li>\n<li><strong>③ 112 신고·고용노동부 진정 병행</strong></li>\n<li><strong>④ 근로복지공단 산재 신청 (요양·휴업급여)</strong></li>\n<li><strong>⑤ 폭행·상해 형사 + 사용자책임 민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 작업 중 폭행은 산재 평가 영역이고 원청·하청은 안전배려의무 + 사용자책임 별도 트랙. 형사·산재·민사 동시 진행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보전·동료 연락처·CCTV (즉시)</strong></li>\n<li><strong>2단계 — 산재 지정병원 진단서·치료 (즉시~1주)</strong></li>\n<li><strong>3단계 — 112 신고 + 고용노동부 1350 진정</strong></li>\n<li><strong>4단계 — 근로복지공단 산재 요양급여 신청 (3년 시효)</strong></li>\n<li><strong>5단계 — 폭행·상해 고소 + 원청·하청 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">건설현장 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·산재·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·동료 휴대폰 영상·자재 사진</strong></li>\n<li><strong>응급실·산재 지정병원 진단서·치료비</strong></li>\n<li><strong>동료 증인 진술서·연락처·서명</strong></li>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>근로계약서·일용 출역 기록·임금명세서</strong></li>\n<li><strong>원청·하청 회사명·작업지시 라인</strong></li>\n<li><strong>근로복지공단 요양급여 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출역 기록·일당 명세는 \"업무수행 중\" 입증 객관 자료. 자재로 가격한 경우 특수폭행·상해 평가 여지. 산재 신청은 3년 시효라 형사 결과 기다릴 필요 없음.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무 수행 중 평가</strong> — 산재 인정 핵심.</li>\n<li><strong>원청 사용자책임</strong> — 안전배려의무 결합.</li>\n<li><strong>자재 사용 → 특수폭행</strong> — 가중 평가 영역.</li>\n<li><strong>본인 자극 사정</strong> — 과실 상계.</li>\n<li><strong>일용직 신분</strong> — 산재 적용 영역 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 작업 현장 동료 폭행 상해',
        summary:
          '서울중앙지방법원 2019노2316(서울중앙지방법원, 2020.05.14 선고) 영역에서 법원은 직장·작업 관련 다툼 과정에서 동료를 폭행한 행위에 대해 폭행죄가 성립할 수 있고, 자재·도구를 사용한 경우 특수폭행 등 가중 평가로 발전할 여지가 있다고 본 사례 흐름이 있습니다. 작업 중 폭행은 산재 평가·사용자책임 별도 트랙으로 함께 검토되는 영역입니다.',
        takeaway: '작업 중 폭행은 형사 + 산재 평가 영역. 자재 사용 시 특수폭행 가중. 원청·하청 사용자책임 별도 트랙.',
      },
    ],
    faq: [
      {
        question: '원청·하청이 "개인 다툼"이라며 산재 거부합니다',
        answer:
          '<strong>작업 중 폭행은 업무수행 중 평가로 산재 인정 여지가 있고 회사 거부와 별개로 근로복지공단에 직접 신청 가능합니다.</strong>',
      },
      {
        question: '자재로 때렸으면 가중 처벌인가요?',
        answer:
          '<strong>위험한 물건 사용 평가 영역으로 특수폭행·특수상해 가중 검토될 여지가 있습니다.</strong>',
      },
      {
        question: '일용직인데 산재 적용되나요?',
        answer:
          '<strong>건설일용직도 산재 적용 영역이고 출역 기록으로 업무 입증 가능합니다.</strong>',
      },
      {
        question: '치료비·휴업급여는 누가 부담하나요?',
        answer:
          '<strong>산재 인정 시 요양·휴업급여는 근로복지공단이 지급하고 별도 위자료는 가해자·회사에 민사 청구 영역입니다.</strong>',
      },
      {
        question: '반장이 "본인이 먼저 욕했다"고 주장합니다',
        answer:
          '<strong>일부 자극 사정이 있더라도 자재 가격·발로 차기 등 폭행 행위 자체는 별개 평가될 여지가 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '직장 내 폭행', href: '/guide/assault/assault-workplace-drinking-coworker-track' },
      { label: '특수폭행 위험물건', href: '/guide/assault/assault-armed-special-aggravated-weapon-bring-distinction' },
      { label: '사용자책임 손해배상', href: '/guide/assault/assault-employer-liability' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 2. assault-multi-attacker-pokchoebop-joint-liability-evidence-track ───
  {
    domain: 'assault',
    slug: 'assault-multi-attacker-pokchoebop-joint-liability-evidence-track',
    keyword: '폭처법 공동폭행 공모공동정범',
    questionKeyword: '4명이 함께 있던 자리에서 일부가 폭행했는데 나머지도 폭처법 공동폭행으로 입건됐어요.',
    ctaKeyword: '공동폭행 가담 정도 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '폭처법 공동폭행 — 5단계 공모·가담 정도 입증 다툼 | 로앤가이드',
      description:
        '공동폭행으로 입건되어 혐의를 받고 있다면 공모·가담 정도 다툼 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술자리에서 다툼이 벌어졌고 일행 4명 중 2명이 피해자를 때리는 동안 본인은 옆에서 \"그만하라\"고 말렸지만 자리에 있었다는 이유로 폭처법 공동폭행으로 같이 입건됐어요. 사실과 다르게 신고되었다면 어떻게 방어해야 하는지, 단순히 자리에 있었던 것만으로도 처벌되는지 정리하고 싶어 막막합니다." 공동폭행 혐의를 받고 있다면 ① 폭력행위처벌법 2조 2항 1호 \"2명 이상이 공동하여\" 의미 ② 형법 30조 공동정범·공모공동정범 ③ 공모 사실 + 범행 가담 + 현장 존재 평가 영역 ④ 단순 동석자·말리는 자 무죄 가능성 ⑤ 형사 + 합의 + 양형 5가지 방어 트랙에 해당할 소지가 있는 영역. 판례 흐름상 공모 사실은 인정되지만 가담·현장 존재가 없으면 공동폭행 부정 평가 영역이 있고, 단순 동석만으로는 처벌 한계. 대응은 ① 사실관계 ② 가담 부정 ③ 변호인 ④ 진술 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 폭처법 공동폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·가담·변호·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 CCTV·동석자 진술 정리</strong></li>\n<li><strong>② 본인 행동·말리는 동작 영상 추적</strong></li>\n<li><strong>③ 변호인 상담·진술 전략</strong></li>\n<li><strong>④ 공모 부정 + 가담 부정 + 단순 동석 주장</strong></li>\n<li><strong>⑤ 합의·반성문·양형 사정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 공모 + 가담 + 현장 존재 3요소가 핵심 평가 영역. 단순 동석만으로 공동폭행 부정 평가 가능. 말리는 행위는 가담 반대 방향 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실정리·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 CCTV·동석자 연락처 (즉시)</strong></li>\n<li><strong>2단계 — 본인 위치·동작 영상 정리 (1주)</strong></li>\n<li><strong>3단계 — 변호인 상담·진술 전략 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 진술조서·송치 (1~3개월)</strong></li>\n<li><strong>5단계 — 합의·반성문·양형 사정 (재판 3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동폭행 가담 정도 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·가담·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·주변 상가 영상 보존 요청</strong></li>\n<li><strong>본인 휴대폰 사진·통화 기록·위치 자료</strong></li>\n<li><strong>동석자 진술서·연락처·관계 정리</strong></li>\n<li><strong>경찰·검찰 출석 통보서·진술조서</strong></li>\n<li><strong>본인 전과 기록·반성문·탄원서</strong></li>\n<li><strong>변호인 의견서·진술 전략 자료</strong></li>\n<li><strong>피해자 합의서·공탁 자료 (양형용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV로 본인이 말리는 동작·물러서는 동작이 확인되면 가담 부정 방향 사정. 동석자 진술 일관성 확보. 가담 없는 단순 동석은 공동폭행 부정 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공모 사실</strong> — 사전 모의·합의 평가.</li>\n<li><strong>가담 정도</strong> — 실행행위 여부 핵심.</li>\n<li><strong>현장 존재</strong> — 단순 동석 vs 가담 다툼.</li>\n<li><strong>말리는 행위</strong> — 반대 방향 사정.</li>\n<li><strong>양형</strong> — 초범·반성·합의 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 선정 (경찰·법원)</strong></li>\n<li><strong>경찰청 112 (긴급)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동폭행 가담 평가',
        summary:
          '대법원 2023도6355(대법원, 2023.08.31 선고) 영역에서 법원은 폭력행위 등 처벌에 관한 법률 2조 2항 1호의 \"2명 이상이 공동하여 폭행의 죄를 범한 때\"의 의미와 관련하여, 폭행 실행범과 공모한 사실은 인정되더라도 그와 공동하여 범행에 가담하였거나 범행장소에 있었다고 인정되지 않는 경우 위 조항의 \"공동하여 죄를 범한 때\"에 해당하지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '공모만으로는 공동폭행 인정 부족. 가담·현장 존재가 핵심. 단순 동석·말리는 행위는 부정 평가 여지.',
      },
    ],
    faq: [
      {
        question: '자리에 있었던 것만으로도 처벌되나요?',
        answer:
          '<strong>판례 흐름상 가담·실행행위 없는 단순 현장 존재만으로는 공동폭행 부정 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '말리는 행위는 어떻게 입증하나요?',
        answer:
          '<strong>CCTV·동석자 진술·음성 녹취가 핵심 증거이고 변호인 상담으로 진술 전략 정리 권장됩니다.</strong>',
      },
      {
        question: '국선변호인을 받을 수 있나요?',
        answer:
          '<strong>경찰·법원 단계에서 국선변호인 선정 신청 가능한 영역입니다.</strong>',
      },
      {
        question: '합의하면 처벌이 가벼워지나요?',
        answer:
          '<strong>피해자 합의·공탁은 양형에 유리하게 검토되는 사정 영역입니다.</strong>',
      },
      {
        question: '폭처법은 일반 폭행과 어떻게 다른가요?',
        answer:
          '<strong>폭처법 공동폭행은 2명 이상 공동 평가 영역으로 일반 폭행보다 가중 처벌 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 무고 방어', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭처법 공동폭행', href: '/guide/assault/assault-club-group-collective-sentencing' },
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '특수폭행 위험물건', href: '/guide/assault/assault-armed-special-aggravated-weapon-bring-distinction' },
      { label: '국선변호인 신청', href: '/guide/assault/assault-public-defender-application' },
    ],
  },

  // ─── 3. assault-self-defense-elderly-grandchild-protect-counter-track ───
  {
    domain: 'assault',
    slug: 'assault-self-defense-elderly-grandchild-protect-counter-track',
    keyword: '손주 보호 정당방위 노인',
    questionKeyword: '60대 어머니가 손주를 폭행하려는 사람을 막다가 가해자를 밀쳐 다치게 했어요. 정당방위 되나요?',
    ctaKeyword: '약자 보호 정당방위 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '손주 보호 정당방위 — 5단계 침해 현재성 + 반격방어 다툼 | 로앤가이드',
      description:
        '약자·자녀·손주 보호 중 가해자를 밀쳐 다치게 해 혐의를 받고 있다면 정당방위 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"60대 어머니가 손주를 데리고 산책 중 술 취한 남성이 손주에게 다가가 욕설하며 멱살을 잡으려 하자, 어머니가 그 남성을 밀쳤는데 남성이 넘어져 손목이 부러졌어요. 어머니는 \"손주를 지키려 했을 뿐\"인데, 형사 입건됐고 \"먼저 밀쳤다\"고 사실과 다르게 신고되었다면 어떻게 정당방위를 다투는지 정리하고 싶어 답답합니다." 약자·손주 보호 정당방위 혐의를 받고 있다면 ① 형법 21조 정당방위 (현재 부당한 침해) ② 침해 현재성 — 일련의 연속 행위 평가 ③ 반격방어 — 적극 반격 포함 영역 ④ 방위 의사 + 사회상규 적합성 ⑤ 형사 + 양형 + 합의 5가지 트랙에 해당할 소지가 있는 영역. 판례 흐름상 일련의 연속 침해 + 추가 침해 객관적 사유 + 약자 보호 의사가 결합되면 정당방위 평가 영역. 대응은 ① 사실 ② 침해 현재성 ③ 변호인 ④ 진술 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 손주 보호 정당방위 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·침해성·변호·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 영상·목격자 진술 정리</strong></li>\n<li><strong>② 침해 현재성 + 손주 위협 입증</strong></li>\n<li><strong>③ 변호인 정당방위 주장 전략</strong></li>\n<li><strong>④ 방위 의사 + 사회상규 적합 진술</strong></li>\n<li><strong>⑤ 합의·양형·과잉방위 보조 주장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 침해 현재성 + 손주·약자 보호 의사 + 사회상규 적합성이 핵심 평가 영역. 반격방어도 정당방위에 포함될 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실정리·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 CCTV·휴대폰 영상 보전 (즉시)</strong></li>\n<li><strong>2단계 — 목격자 진술서·연락처 (1주)</strong></li>\n<li><strong>3단계 — 변호인 상담·정당방위 주장 전략 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 진술조서·송치 (1~3개월)</strong></li>\n<li><strong>5단계 — 무혐의·기소유예·재판 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">약자 보호 정당방위 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·침해성·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스·휴대폰 영상</strong></li>\n<li><strong>손주·자녀 진술서·심리 영향 자료</strong></li>\n<li><strong>목격자 진술서·연락처</strong></li>\n<li><strong>가해자 사전 행동·욕설 음성 녹취</strong></li>\n<li><strong>경찰·검찰 진술조서·접수번호</strong></li>\n<li><strong>본인 전과·반성문·탄원서</strong></li>\n<li><strong>변호인 의견서·정당방위 주장 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가해자가 손주에게 다가간 시점·욕설·멱살 시도 등 사전 행동이 \"현재 부당한 침해\" 입증 핵심. 손주의 진술·연령은 약자 보호 의사 사정. 반격방어도 정당방위 포함 평가 여지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>침해 현재성</strong> — 연속 행위 평가 핵심.</li>\n<li><strong>방위 의사</strong> — 약자 보호 동기 사정.</li>\n<li><strong>사회상규 적합</strong> — 정도 평가 영역.</li>\n<li><strong>과잉방위 보조</strong> — 정도 초과 시 형 감면.</li>\n<li><strong>반격방어 인정</strong> — 적극 반격 포함 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 선정 (경찰·법원)</strong></li>\n<li><strong>여성긴급전화 1577-1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당방위 침해 현재성',
        summary:
          '대법원 2020도6874(대법원, 2023.04.27 선고) 영역에서 법원은 정당방위의 요건 중 \"침해의 현재성\"의 의미와 관련하여 일련의 연속되는 행위로 인해 침해상황이 중단되지 아니하거나 일시 중단되더라도 추가 침해가 곧바로 발생할 객관적인 사유가 있는 경우 그중 일부 행위가 범죄의 기수에 이르렀더라도 침해의 현재성이 인정되고, 정당방위의 방어행위에는 순수한 수비적 방어뿐 아니라 적극적 반격을 포함하는 반격방어의 형태도 포함된다고 본 사례 흐름이 있습니다.',
        takeaway: '연속 침해는 현재성 인정 영역. 반격방어도 정당방위 포함. 약자 보호 의사 평가 핵심.',
      },
    ],
    faq: [
      {
        question: '"손주가 직접 맞기 전인데 정당방위가 되나요?"',
        answer:
          '<strong>침해 현재성 평가는 추가 침해 객관 사유가 있으면 인정될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '밀친 정도가 과했으면 정당방위 인정 안 되나요?',
        answer:
          '<strong>정도가 초과한 경우 과잉방위로 형 감면 검토 영역에 해당할 수 있습니다.</strong>',
      },
      {
        question: '가해자가 "본인이 먼저 밀었다"고 주장합니다',
        answer:
          '<strong>CCTV·목격자 진술이 핵심 증거이고 사실과 다르게 신고되었다면 적극 다툴 영역입니다.</strong>',
      },
      {
        question: '국선변호인 선임은 어떻게 하나요?',
        answer:
          '<strong>경찰·검찰·법원 단계 모두 국선변호인 신청 가능한 영역입니다.</strong>',
      },
      {
        question: '합의는 꼭 해야 하나요?',
        answer:
          '<strong>정당방위 다툼과 별개로 양형·기소유예에 유리하게 작용할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '정당방위 입증', href: '/guide/assault/assault-self-defense-proof-defensive-boundary-track' },
      { label: '정당방위 vs 과잉방위', href: '/guide/assault/assault-self-defense-vs-excessive-evidence-track' },
      { label: '폭행 무고 방어', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '국선변호인 신청', href: '/guide/assault/assault-public-defender-application' },
    ],
  },

  // ─── 4. child-support-non-payer-credit-information-registration-track ───
  {
    domain: 'child-support',
    slug: 'child-support-non-payer-credit-information-registration-track',
    keyword: '양육비 미지급 신용정보 등록',
    questionKeyword: '양육비를 6개월째 안 주는 전 남편을 신용정보에 올릴 수 있다는데 절차가 어떻게 되나요?',
    ctaKeyword: '양육비 신용정보 등록 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 미지급 신용정보 등록 — 5단계 양육비이행법 27조의2 트랙 | 로앤가이드',
      description:
        '양육비 채무자가 미지급 시 KCB·NICE 신용정보 등록 제재 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 매월 양육비 60만원을 받기로 했는데 전 남편이 6개월째 한 푼도 입금하지 않고 \"형편이 어렵다\"는 말만 반복합니다. 양육비이행관리원에 신용정보 등록 제재가 있다고 들었는데, 정확히 어떤 조건에서 신청 가능하고 어떻게 진행되는지, 효과는 얼마나 큰지 정리하고 싶어 막막합니다." 양육비 미지급 신용정보 등록 피해자라면 ① 양육비이행법 27조의2 신용정보 등록 제재 ② 감치명령 또는 이행명령 위반 요건 ③ 양육비이행관리원 신청 + 여성가족부 결정 ④ KCB·NICE 신용평가사 등록 → 대출·카드 제한 ⑤ 출국금지 + 명단 공개 + 형사 처벌 결합 트랙 5가지가 결합되는 영역. 신용정보 등록은 양육비이행법 시행령에 따라 감치 또는 이행명령 미이행이 일정 기간 누적되면 신청 가능한 영역으로, 등록 시 채무자의 신용거래 전반에 큰 압박. 대응은 ① 집행권원 ② 이행명령 ③ 감치 ④ 등록 신청 ⑤ 결정 통보 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 신용정보 등록 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 집행권원·이행명령·감치·신청·결정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육비 합의·심판 확정 (집행권원)</strong></li>\n<li><strong>② 가사소송법 64조 이행명령 신청</strong></li>\n<li><strong>③ 68조 감치명령 (3기 이상 미이행)</strong></li>\n<li><strong>④ 양육비이행관리원 신용정보 등록 신청</strong></li>\n<li><strong>⑤ 여성가족부 결정 → KCB·NICE 등록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비이행법 27조의2 영역. 감치 또는 이행명령 위반이 일정 기간 누적 + 양육비이행관리원 신청 + 여성가족부 결정 → 신용정보 등록 진행.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 집행권원·제재 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비 심판·조정 확정 (집행권원 확보)</strong></li>\n<li><strong>2단계 — 가사소송법 64조 이행명령 신청 (2~3개월)</strong></li>\n<li><strong>3단계 — 68조 감치명령 (3기 이상 미이행)</strong></li>\n<li><strong>4단계 — 양육비이행관리원 1644-6621 신용정보 등록 신청</strong></li>\n<li><strong>5단계 — 여성가족부 결정 → KCB·NICE 등록·통보</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 신용정보 등록 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 집행·신청·자료 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>미지급 양육비 계산서·이체 미입금 내역</strong></li>\n<li><strong>이행명령 결정문·송달증명서</strong></li>\n<li><strong>감치명령 결정문·집행 자료</strong></li>\n<li><strong>본인 신분증·자녀 가족관계증명서</strong></li>\n<li><strong>신용정보 등록 신청서·소명자료</strong></li>\n<li><strong>채무자 인적사항·주소·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신용정보 등록 신청 전 이행명령·감치 결정문 필수. 양육비이행관리원 1644-6621이 절차 무료 지원. 등록 시 채무자 신용거래 전반 제한 효과.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>집행권원</strong> — 합의서·심판 결정 필수.</li>\n<li><strong>이행명령 + 감치</strong> — 단계 누락 시 기각.</li>\n<li><strong>여성가족부 결정</strong> — 의견 청취 절차.</li>\n<li><strong>KCB·NICE 등록</strong> — 신용거래 광범위 제한.</li>\n<li><strong>해제 절차</strong> — 양육비 완납 시 등록 해제.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>여성가족부 양육비 02-2100-6000</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 이행명령 범위',
        summary:
          '대법원 2025으517(대법원, 2025.05.23 선고) 영역에서 법원은 양육비부담조서 등에 의하여 확정된 양육비 지급 의무 중 의무자가 이행하지 아니한 의무의 범위를 넘어서 가사소송법 64조 이행명령을 할 수 있는지 여부에 관하여 미이행 의무 범위를 넘어선 이행명령은 할 수 없다고 보아 양육비 이행명령의 집행 가능 범위 평가 영역을 명확히 한 사례 흐름이 있습니다. 신용정보 등록도 이 흐름 위에서 진행되는 트랙입니다.',
        takeaway: '확정 양육비 미이행분만 이행명령 영역. 신용정보 등록은 이행명령·감치 결정 위에서 진행. 단계 누락 시 기각 사정.',
      },
    ],
    faq: [
      {
        question: '신용정보 등록되면 어떤 효과가 있나요?',
        answer:
          '<strong>KCB·NICE 신용평가사 등록 시 대출·신용카드·금융거래 전반 제한이 검토되는 영역입니다.</strong>',
      },
      {
        question: '미지급 몇 개월부터 신청 가능한가요?',
        answer:
          '<strong>이행명령·감치 위반이 양육비이행법 시행령 기준 누적되면 신청 가능한 영역이고 양육비이행관리원 안내를 확인하시는 것이 좋습니다.</strong>',
      },
      {
        question: '신용정보 등록 후 양육비를 갚으면?',
        answer:
          '<strong>완납·일정 비율 변제 시 등록 해제 신청 가능한 영역입니다.</strong>',
      },
      {
        question: '출국금지·명단 공개와 동시에 가능한가요?',
        answer:
          '<strong>제재 트랙 병행 가능한 영역으로 양육비이행관리원 종합 검토 권장됩니다.</strong>',
      },
      {
        question: '집행권원이 조정조서여도 가능한가요?',
        answer:
          '<strong>가정법원 조정조서·심판 결정 모두 집행권원 평가 영역으로 신청 가능합니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 추심', href: '/guide/child-support/child-support-arrears-collection' },
      { label: '이행명령·감치', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '명단 공개', href: '/guide/child-support/child-support-public-disclosure-debtor-list-procedure' },
      { label: '출국금지', href: '/guide/child-support/child-support-non-payer-overseas-residence' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
    ],
  },

  // ─── 5. child-support-modification-payer-disability-income-drop-track ───
  {
    domain: 'child-support',
    slug: 'child-support-modification-payer-disability-income-drop-track',
    keyword: '양육비 감액 채무자 장해 수입 감소',
    questionKeyword: '교통사고로 장해를 입고 수입이 절반 이하로 줄었어요. 양육비 감액 청구가 되나요?',
    ctaKeyword: '양육비 감액 청구 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '양육비 감액 청구 — 5단계 채무자 장해·산재 + 자녀 복리 균형 | 로앤가이드',
      description:
        '교통사고·산재·질병으로 수입이 급감해 양육비 감액을 검토 중이라면 5가지 변경 심판 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 한쪽 다리에 장해 등급을 받고 직장도 그만두어 월 소득이 350만원에서 130만원으로 떨어졌습니다. 합의로 매월 양육비 90만원을 보내고 있는데, 이대로면 생활도 어려워 감액을 검토 중인 것이 사실과 다르게 신고되었다면 어떻게 해야 하는지, 자녀 복리를 어떻게 균형 잡는지 정리하고 싶어 막막합니다." 양육비 감액 청구 채무자라면 ① 민법 837조·가사소송법 변경 심판 ② 사정변경 — 장해·산재·질병·실직 평가 ③ 자녀 복리 균형 ④ 객관 자료 (장해진단서·소득증빙) 입증 ⑤ 변경 인용 + 협의 + 임시 처분 5가지 트랙에 해당할 소지가 있는 영역. 판례 흐름상 양육비 감액은 \"자녀의 복리를 위하여 필요한지\"가 기준이고 채무자의 객관적 수입 감소 + 장해 + 자녀 성장 등 종합 평가 영역. 대응은 ① 사정변경 ② 자료 ③ 협의 ④ 심판 ⑤ 임시 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 감액 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경·자료·협의·심판·임시 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 장해진단서·산재 자료·수입 변동 입증</strong></li>\n<li><strong>② 자녀 복리 영향 + 양육자 사정 비교</strong></li>\n<li><strong>③ 양육자 협의·내용증명 (감액 협의)</strong></li>\n<li><strong>④ 가정법원 양육비 변경 심판 신청</strong></li>\n<li><strong>⑤ 임시 처분·조정 + 인용 결정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀 복리가 기준이고 채무자의 객관적 사정변경(장해·산재·실직) 입증이 핵심. 일방적 미지급 금지, 변경 심판으로 다툴 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·협의·심판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 장해진단서·산재 결정·소득 자료 정리 (즉시)</strong></li>\n<li><strong>2단계 — 자녀 복리 영향 자료·양육자 사정 정리</strong></li>\n<li><strong>3단계 — 양육자 협의·내용증명 (1~2개월)</strong></li>\n<li><strong>4단계 — 가정법원 양육비 변경 심판 신청 (3~6개월)</strong></li>\n<li><strong>5단계 — 임시 처분·조정·인용 결정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 감액 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경·자료·심판 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>장해진단서·산재 결정·진료기록</strong></li>\n<li><strong>최근 1~2년 소득금액증명·근로소득원천징수영수증</strong></li>\n<li><strong>퇴직증명서·실업급여 수급 자료</strong></li>\n<li><strong>본인 가계부·필수 지출·기존 양육비 입금 내역</strong></li>\n<li><strong>변경 심판 신청서·청구 취지</strong></li>\n<li><strong>자녀 신분증·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일방적 미지급 절대 금지. 일시적 자료가 아닌 \"지속적 사정변경\" 입증 권장. 장해진단서·산재 결정은 객관 자료로 핵심. 임시 처분으로 심판 결정 전 일부 감액 가능 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자녀 복리 기준</strong> — 감액 판단 핵심.</li>\n<li><strong>지속성</strong> — 일시 vs 지속 사정 평가.</li>\n<li><strong>일방 미지급 금지</strong> — 감치·이행명령 위험.</li>\n<li><strong>임시 처분</strong> — 심판 전 일부 조정.</li>\n<li><strong>양육자 사정</strong> — 양육자 소득·재혼 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 감액 자녀 복리 기준',
        summary:
          '대법원 2022스646(대법원, 2022.09.29 선고) 영역에서 법원은 재판 또는 당사자의 협의로 정해진 양육비 부담 내용이 제반 사정에 비추어 \"부당\"한지 여부는 \"자녀의 복리를 위하여 필요한지\"를 기준으로 판단하여야 하고, 가정법원이 양육비 감액 청구를 판단할 때 자녀들의 성장에도 불구하고 양육비의 감액이 필요한지 등 관련 사정을 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '자녀 복리가 감액 판단 기준. 채무자 사정변경 + 자녀 영향 종합 평가 영역. 일방적 미지급은 별도 위험.',
      },
    ],
    faq: [
      {
        question: '장해진단서만 있으면 감액되나요?',
        answer:
          '<strong>장해 + 객관적 소득 감소 입증이 함께 필요한 영역이고 일시적 사정은 인정 부족 평가될 여지가 있습니다.</strong>',
      },
      {
        question: '양육자 동의 없어도 감액 가능한가요?',
        answer:
          '<strong>가정법원 변경 심판으로 결정 가능한 영역이고 양육자 협의가 우선 검토되는 것이 일반입니다.</strong>',
      },
      {
        question: '심판 중에 일방적으로 감액 입금해도 되나요?',
        answer:
          '<strong>일방적 미지급은 이행명령·감치 위험 영역이므로 임시 처분·협의로 진행 권장됩니다.</strong>',
      },
      {
        question: '얼마나 줄여 달라고 청구할 수 있나요?',
        answer:
          '<strong>사례에 따라 다르고 양육비 산정기준표·자녀 복리·양측 소득 종합 평가 영역입니다.</strong>',
      },
      {
        question: '나중에 회복되면 다시 증액 청구되나요?',
        answer:
          '<strong>채무자 사정 회복 시 양육자가 증액 청구 가능한 영역이고 사정변경 입증 필요합니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 변경 심판', href: '/guide/child-support/child-support-modification-claim' },
      { label: '양육비 산정기준표', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '채무자 수입 감소', href: '/guide/child-support/child-support-ex-unemployed-reduction-refuse' },
      { label: '재혼 시 감액', href: '/guide/child-support/child-support-ex-remarriage-reduction-possible' },
      { label: '협의·임시 처분', href: '/guide/child-support/child-support-interim-modification' },
    ],
  },

  // ─── 6. dui-test-refusal-hospital-bed-blood-extraction-warrant-track ───
  {
    domain: 'dui',
    slug: 'dui-test-refusal-hospital-bed-blood-extraction-warrant-track',
    keyword: '응급실 채혈 영장 음주측정거부',
    questionKeyword: '교통사고로 응급실에 누워 있는데 경찰이 음주측정·채혈을 요구했어요. 어떻게 다투나요?',
    ctaKeyword: '응급실 채혈 영장 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '응급실 채혈 영장 음주측정거부 — 5단계 의식·동의 다툼 트랙 | 로앤가이드',
      description:
        '응급실 입원 중 음주측정·채혈 요구로 혐의를 받고 있다면 의식·동의·영장 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 의식이 흐릿한 채 응급실에 누워 있었는데, 경찰이 음주 의심으로 호흡측정을 요구하다 본인이 거부 의사로 비춰질 만한 행동을 했고, 이후 채혈 영장으로 혈중알코올농도가 검출됐어요. 사실과 다르게 신고되었다면 의식 상태와 동의·영장 요건이 어디까지 다툴 수 있는지 정리하고 싶어 막막합니다." 응급실 채혈 영장 음주측정거부 혐의를 받고 있다면 ① 도로교통법 44조 2항 측정요구 + 148조의2 측정거부 처벌 ② 영장 채혈 — 형사소송법 215조·216조 ③ 의식 상태 + 동의 능력 평가 ④ 위드마크 + 상승기 다툼 ⑤ 형사 + 행정 90일 분리 5가지 트랙에 해당할 소지가 있는 영역. 판례 흐름상 측정거부는 \"음주측정에 응할 의무가 있음에도 정당한 사유 없이 응하지 않은 경우\" 영역이고, 의식이 흐릿한 응급실 상황은 \"정당한 사유\" 평가 영역. 대응은 ① 사실 ② 의식 자료 ③ 변호인 ④ 영장·동의 ⑤ 행정·형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 응급실 채혈 영장 음주측정거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·의식·변호·영장·분리대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 시점·구급 기록·응급실 진료기록</strong></li>\n<li><strong>② 의식 상태·동의 능력 의무기록 평가</strong></li>\n<li><strong>③ 변호인 상담·진술 전략</strong></li>\n<li><strong>④ 채혈 영장 요건 + 위드마크 상승기 다툼</strong></li>\n<li><strong>⑤ 형사 + 면허 행정심판 90일 분리 대응</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 응급실 의식 상태·동의 능력·정당한 사유 평가가 핵심. 채혈 영장 요건·영장 없는 채혈의 적법성도 다툼 영역. 형사·행정 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실정리·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·구급·응급실 의무기록 보전 (즉시)</strong></li>\n<li><strong>2단계 — 의식 상태·동의 능력 의사 의견 (1~2주)</strong></li>\n<li><strong>3단계 — 변호인 상담·영장·진술 전략 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 송치·기소 (1~3개월)</strong></li>\n<li><strong>5단계 — 행정심판 90일 + 양형 (초범·반성)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">응급실 채혈 영장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·의식·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>119 구급기록지·이송 기록</strong></li>\n<li><strong>응급실 의무기록·바이탈·의식 평가</strong></li>\n<li><strong>채혈 영장·동의서·측정 결과지</strong></li>\n<li><strong>음주 시점·운전 시점 정리표</strong></li>\n<li><strong>본인 운전면허 기록·전과 자료</strong></li>\n<li><strong>탄원서·반성문·생계자료 (양형용)</strong></li>\n<li><strong>변호인 의견서·진술 전략 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 응급실 의무기록은 의식 상태·동의 능력 평가 핵심 객관 자료. 채혈 영장 발부 시점·내용 검토 필수. 행정심판은 처분일로부터 90일 별도 트랙으로 즉시 준비.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당한 사유</strong> — 의식 상태 평가 핵심.</li>\n<li><strong>채혈 영장 적법성</strong> — 요건·절차 다툼.</li>\n<li><strong>위드마크 상승기</strong> — 측정 시점 차이.</li>\n<li><strong>형사·행정 분리</strong> — 별도 대응.</li>\n<li><strong>행정심판 90일</strong> — 시한 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>중앙행정심판위원회 110</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정거부와 처벌 적용',
        summary:
          '대법원 2022도3929(대법원, 2022.07.28 선고) 영역에서 법원은 음주측정거부 전력이 있는 피고인이 음주측정요구에 불응하였다는 공소사실에 대하여 도로교통법 148조의2 1항 중 \"제44조 제2항을 위반한 사람으로서 다시 같은 조 제2항을 위반한 사람\"에 관한 부분과 관련하여 헌법재판소 위헌결정 등 적용 법령의 변동을 함께 검토하여 원심판결의 적용 법령 부분을 재검토한 사례 흐름이 있습니다.',
        takeaway: '측정거부 처벌은 적용 법령·전력·시기에 따라 평가가 달라지는 영역. 응급실 상황은 정당한 사유 다툼 여지.',
      },
    ],
    faq: [
      {
        question: '의식이 흐릿했는데도 측정거부가 되나요?',
        answer:
          '<strong>의식 상태·동의 능력은 \"정당한 사유\" 평가 영역으로 의무기록 기반 다툼이 가능한 영역입니다.</strong>',
      },
      {
        question: '채혈 영장 없이 채혈된 경우는?',
        answer:
          '<strong>영장 요건·동의 여부 적법성 다툼 영역으로 변호인 상담 권장됩니다.</strong>',
      },
      {
        question: '위드마크 공식이 응급실 사례에도 적용되나요?',
        answer:
          '<strong>운전 시점 + 측정 시점 차이를 검토하는 영역으로 상승기·하강기 다툼 가능합니다.</strong>',
      },
      {
        question: '형사·행정 동시 다투는 방법은?',
        answer:
          '<strong>형사 변호인 + 행정심판 90일 별도 신청으로 분리 트랙 운영 가능합니다.</strong>',
      },
      {
        question: '국선변호인 받을 수 있나요?',
        answer:
          '<strong>경찰·검찰·법원 모두 국선변호인 선정 신청 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부', href: '/guide/dui/dui-measurement-refusal-penalty-appeal' },
      { label: '채혈·영장', href: '/guide/dui/dui-test-refusal-warrant-blood-extraction' },
      { label: '위드마크 공식', href: '/guide/dui/dui-widmark-rising-phase-defense' },
      { label: '행정심판 90일', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 형사 방어', href: '/guide/dui/dui-criminal-defense' },
    ],
  },
];
