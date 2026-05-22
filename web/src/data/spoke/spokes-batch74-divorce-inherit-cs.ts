import { SpokePage } from '../spoke-pages';

// batch74 divorce / inheritance / child-support — 9개 (2026-05-22) = 4+3+2
//
// 고유 존재 이유:
// divorce 4:
// 1. 재혼·계자녀(stepchildren) 양육권 분쟁 — \'재혼 후 계자녀 + 친권·양육권 + 재혼 가족 관계\' 트랙
// 2. 외국인 배우자 비자 연동 협박 이혼 — \'F-6 결혼이민 비자 + 비자 연동 협박 + 가정폭력 보호\' 트랙
// 3. postnuptial 혼인 중 작성 합의서 효력 — \'혼인 중 재산분할 약정 + 효력 다툼 + 강박\' 트랙
// 4. 배우자 결혼 후 숨긴 채무 발견 — \'결혼 후 발견 + 재산분할 + 책임 분배\' 트랙
//
// inheritance 3:
// 5. 사망 직전 보험 수익자 변경 — \'생명보험 수익자 변경 + 사망 직전 + 의사능력 다툼\' 트랙
// 6. 상속재산 분할협의 결렬 — \'공동상속인 + 분할협의 결렬 + 가정법원 심판\' 트랙
// 7. 사전연명의료의향서·유언 효력 — \'유언 + 사전연명의료의향서 + 효력 다툼\' 트랙
//
// child-support 2:
// 8. 친부 사망 후 계모 양육비 청구 — \'친부 사망 + 계모 양육 의무 + 인지청구 결합\' 트랙
// 9. 양육친 새 동거 시작 후 양육비 감액 — \'양육친 동거 + 양육비 감액 + 자녀 복리\' 트랙

export const spokesBatch74DivorceInheritCs: SpokePage[] = [
  // ─── 1. divorce-second-marriage-stepchildren-custody-conflict-track ───
  {
    domain: 'divorce',
    slug: 'divorce-second-marriage-stepchildren-custody-conflict-track',
    keyword: '재혼·계자녀 양육권 분쟁',
    questionKeyword: '재혼 후 계자녀를 키우다가 이혼하게 됐어요. 계자녀의 친권·양육권은 누구에게 가나요?',
    ctaKeyword: '재혼 계자녀 양육권 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재혼 계자녀 양육권 — 5단계 친권·양자 평가 | 로앤가이드',
      description:
        '재혼 가정에서 계자녀 양육권·친권 분쟁 시 양자 입양·면접교섭권·자녀 복리 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"40대 초반에 사별 후 자녀 1명을 둔 배우자와 재혼해 7년간 함께 계자녀를 양육했습니다. 본인은 계자녀와 정서적 유대가 깊었지만 \'친양자 입양\' 절차는 진행하지 않은 상태였어요. 이혼하게 되면서 계자녀는 친부(생부)에게 가야 하는지, 본인이 양육권을 주장할 수 있는지가 쟁점이 됐습니다. 계자녀의 친모는 사망했고 친부도 \'본인이 키우겠다\'는 입장이지만, 계자녀 본인은 \'본인(계모)과 살고 싶다\'는 의사를 표현하고 있어요." 재혼 가정의 계자녀 양육권은 친권자(생부·생모)와 양친 사이의 법률 관계 구조에 따라 달라지고, 친양자 입양 + 양자 입양 + 일반 양육 동거의 법률 효과가 다른 영역입니다. 양육권 결정은 가정법원이 자녀 복리·정서적 유대·양육 환경·자녀 의사를 종합 평가하는 트랙. 본인이라면 ① 친양자 vs 양자 ② 양육권 주장 ③ 자녀 의사 ④ 면접교섭권 ⑤ 양육비 5중 트랙이 가능한 영역. 대응은 ① 친양자 ② 양육 ③ 의사 ④ 면접 ⑤ 양육비 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 재혼 계자녀 양육권 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 친양자·양육권·의사·면접·양육비 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 친양자·양자 평가</strong> — 입양 절차 완료 여부에 따른 법률 효과 차이.</li>\n<li><strong>② 양육권 주장</strong> — 친권자 부재 시 + 정서적 유대 + 양육 환경 종합.</li>\n<li><strong>③ 자녀 의사</strong> — 13세 이상 시 자녀 의사 중대 사정.</li>\n<li><strong>④ 면접교섭권</strong> — 양육권 인정 안 돼도 면접교섭 청구 가능.</li>\n<li><strong>⑤ 양육비</strong> — 양육권 보유 시 친부에게 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친양자 입양 완료 시 친부 친권 종료 + 본인 친권 단독. 양자 입양 시 친부 친권 공동. 일반 동거 시 친부 친권 우선이지만 양육권은 자녀 복리·정서적 유대·자녀 의사 종합 평가 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·청구·면접 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족 관계·입양 확인 (즉시)</strong> — 가족관계증명서·입양 등록 확인.</li>\n<li><strong>2단계 — 양육 환경·정서적 유대 자료 (1~2주)</strong> — 양육 7년간 자료·자녀 진술·심리 평가.</li>\n<li><strong>3단계 — 가사조사관 면담·자녀 의사 (2~3주)</strong> — 가정법원 가사조사관·자녀 면담.</li>\n<li><strong>4단계 — 양육권 청구 또는 면접교섭권 청구</strong> — 가정법원 심판 청구.</li>\n<li><strong>5단계 — 양육비 청구 (양육권 보유 시)</strong> — 친부 상대 양육비 산정·이행 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">재혼 계자녀 양육권 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 친양자·양육·면접 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·입양 등록 확인서</strong></li>\n<li><strong>혼인관계증명서</strong></li>\n<li><strong>양육 7년간 양육 일지·사진·학교 자료</strong></li>\n<li><strong>자녀 학교 생활기록부·성적표</strong></li>\n<li><strong>심리 평가·정서적 유대 평가 자료</strong></li>\n<li><strong>친부 양육 환경 비교 자료</strong></li>\n<li><strong>가사조사관 면담·자녀 의사 진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친양자 입양은 만 15세 미만 자녀에 한정·가정법원 허가 필요. 입양 미완료 시 양육권 주장은 어렵지만 면접교섭권은 \'특별한 사정\'으로 청구 가능 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>친양자 vs 양자 vs 동거</strong> — 입양 절차에 따른 법률 효과.</li>\n<li><strong>정서적 유대</strong> — 양육 기간·자녀 진술·심리 평가.</li>\n<li><strong>자녀 의사</strong> — 13세 이상 시 중대 사정.</li>\n<li><strong>양육 환경</strong> — 본인 vs 친부 비교.</li>\n<li><strong>면접교섭권</strong> — 양육권 미인정 시 별도 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>여성가족부 콜센터 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 의무 상속인 승계 영역',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 영역에서 법원은 재산분할 사건에서 협의이혼을 한 당사자 일방이 사망한 경우 그 재산분할의무가 상속인들에게 승계되는지 여부 평가를 다루면서, 재산분할 제도의 목적과 취지 및 이혼 당사자 일방 사망 시 재산분할 청구권 평가가 결정 사정이라고 본 사례 흐름이 있고, 재혼·계자녀 양육권 평가에서도 자녀 복리·재산 평가 결합이 핵심 트랙입니다.',
        takeaway: '재혼 가정의 계자녀 양육권은 친양자·자녀 의사·정서적 유대 종합 평가 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계모인 본인이 양육권을 가질 수 있나요?',
        answer:
          '<strong>친양자 입양 완료 시 단독, 미완료 시 자녀 복리 평가 영역입니다.</strong> 정서적 유대·자녀 의사가 결정.',
      },
      {
        question: '자녀가 본인과 살고 싶다고 해요',
        answer:
          '<strong>13세 이상 자녀 의사는 중대 사정 영역입니다.</strong> 가사조사관 면담에서 진술 보강.',
      },
      {
        question: '친부가 친권자라 본인은 권리가 전혀 없나요?',
        answer:
          '<strong>면접교섭권은 별도 청구 가능 영역입니다.</strong> \'특별한 사정\'으로 신청.',
      },
      {
        question: '양육비를 친부에게 청구할 수 있나요?',
        answer:
          '<strong>양육권 인정 시 청구 가능 영역입니다.</strong> 양육비 산정 기준표 적용.',
      },
      {
        question: '친양자 입양은 지금이라도 가능한가요?',
        answer:
          '<strong>만 15세 미만 자녀에 한정·가정법원 허가 필요 영역입니다.</strong> 이혼 진행 중에는 어려운 사정.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-consensual-procedure' },
      { label: '양육권 결정 기준', href: '/guide/divorce/divorce-custody-criteria' },
      { label: '재산분할 산정', href: '/guide/divorce/divorce-property-division-calculation' },
      { label: '면접교섭권 청구', href: '/guide/divorce/divorce-visitation-right' },
      { label: '양육비 산정', href: '/guide/divorce/divorce-child-support-calculation' },
    ],
  },

  // ─── 2. divorce-foreign-spouse-visa-link-pressure-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-visa-link-pressure-track',
    keyword: '외국인 배우자 비자 협박 이혼',
    questionKeyword: 'F-6 결혼이민 비자로 입국한 외국인 배우자인데 한국인 배우자가 \'이혼하면 비자 취소·강제 출국\'이라 협박해요.',
    ctaKeyword: '외국인 비자 협박 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 비자 협박 이혼 — 5단계 가정폭력·체류 보호 | 로앤가이드',
      description:
        '한국인 배우자의 비자 협박·가정폭력 시 F-6 체류 자격 + 가정폭력 보호 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"베트남에서 한국인 남편과 결혼해 F-6 결혼이민 비자로 입국한 30대 여성입니다. 결혼 2년 차에 시댁·남편의 가정폭력·언어폭력이 시작됐고, 본인이 이혼을 언급할 때마다 남편은 \'이혼하면 비자 취소 + 강제 출국 + 자녀 양육권 박탈\'을 협박했어요. 본인 한국어가 부족한 사정 + 친정·친구가 한국에 없는 사정을 악용해 협박이 반복됐고, 본인은 자녀 1명과 함께 갈 곳이 없는 상황입니다. 비자 갱신은 남편의 신원보증·생활능력 확인이 필요한 사정이라 더 두려워하고 있어요." 결혼이민 비자(F-6)는 한국인 배우자의 신원보증 + 혼인 관계 유지가 조건이지만, 출입국관리법은 \'한국인 배우자의 책임 있는 사유\'(가정폭력·외도·유기 등)로 혼인이 파탄된 경우 외국인 배우자의 체류 자격을 보장하는 영역입니다. 가정폭력방지법은 보호조치 + 보호명령 + 형사 처벌까지 결합되는 트랙. 피해자라면 ① 가정폭력 입증 ② F-6 체류 자격 ③ 가정법원 보호 ④ 이혼·양육권 ⑤ 형사 5중 트랙이 가능한 영역. 대응은 ① 폭력 ② 비자 ③ 보호 ④ 이혼 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 배우자 비자 협박 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력·비자·보호·이혼·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가정폭력 입증</strong> — 진단서·녹취·증인·CCTV.</li>\n<li><strong>② F-6 체류 자격</strong> — 한국인 배우자 귀책 시 체류 보장.</li>\n<li><strong>③ 가정법원 보호명령</strong> — 접근금지·임시 보호.</li>\n<li><strong>④ 이혼·양육권</strong> — 재판상 이혼 + 양육권·양육비.</li>\n<li><strong>⑤ 형사 고소</strong> — 폭행·협박·가정폭력특례법.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: F-6 결혼이민 비자는 \'한국인 배우자 책임 있는 사유\'로 파탄된 경우 체류 보장 영역. 가정폭력 입증 + 출입국 신고 + 보호명령 결합 시 협박 효과 무력화 가능 트랙. 다국어 상담 + 1366 + 1577-1366 활용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가정폭력 신고·보호시설 (즉시)</strong> — 112·1366·다누리콜센터 1577-1366.</li>\n<li><strong>2단계 — 의료 진단서·증거 보존 (1주)</strong> — 진단서·사진·녹취·증인.</li>\n<li><strong>3단계 — 가정법원 보호명령 (1~2주)</strong> — 접근금지·임시 보호.</li>\n<li><strong>4단계 — 출입국 신고 + F-6 변경 (2~4주)</strong> — 체류 자격 유지·F-5 변경 검토.</li>\n<li><strong>5단계 — 이혼·양육권 + 형사 고소</strong> — 재판상 이혼 + 폭행·협박 형사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 배우자 비자 협박 이혼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력·비자·보호 갈래입니다.</strong></p>\n<ul>\n<li><strong>가정폭력 진단서·사진·녹취·증인</strong></li>\n<li><strong>여권·외국인등록증·F-6 비자</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>한국인 배우자 협박 메시지·통화 녹취</strong></li>\n<li><strong>경찰 신고 접수증·112 신고 기록</strong></li>\n<li><strong>의료기관 진료·심리 평가 자료</strong></li>\n<li><strong>다누리콜센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다누리콜센터 1577-1366은 다국어 (베트남어·중국어·필리핀어·태국어·러시아어·몽골어 등) 상담 + 보호시설 안내 + 통역 지원. 가정폭력 입증 + 1366 신고 + 보호명령은 체류 자격 보장의 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가정폭력 입증</strong> — 진단서·녹취·증인.</li>\n<li><strong>F-6 체류 자격</strong> — 한국인 배우자 귀책 사유.</li>\n<li><strong>보호명령</strong> — 접근금지·임시 보호.</li>\n<li><strong>양육권</strong> — 자녀 복리·정서적 유대.</li>\n<li><strong>형사 고소</strong> — 가정폭력특례법·폭행·협박.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>다누리콜센터 1577-1366 (다국어·24시간)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>출입국·외국인청 1345</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재판상 이혼 후 재산분할심판 청구 영역',
        summary:
          '대법원 2025스595(대법원, 2025.08.14 선고) 영역에서 법원은 재산분할 사건에서 재판상 이혼이 확정된 후 재산분할심판을 청구한 경우 법원이 재산분할의 대상과 가액을 직권으로 조사·판단할 수 있는지 여부 평가를 다루면서, 재판상 이혼을 전제로 한 재산분할에서 분할의 대상이 되는 재산과 평가가 핵심 사정이라고 본 사례 흐름이 있고, 외국인 배우자 이혼에서도 재산분할 + 양육비 + 위자료 종합 청구 트랙입니다.',
        takeaway: '한국인 배우자 귀책 사유 + 가정폭력 결합 시 F-6 체류 자격 보장 + 이혼·양육권 다툼 영역 — 다국어 상담·변호인 권장.',
      },
    ],
    faq: [
      {
        question: '이혼하면 정말 비자가 취소되나요?',
        answer:
          '<strong>한국인 배우자 귀책 사유면 체류 자격 보장 영역입니다.</strong> 가정폭력 입증 + 출입국 신고 결정.',
      },
      {
        question: '자녀와 함께 한국에 남을 수 있나요?',
        answer:
          '<strong>양육권 확보 시 가능한 영역입니다.</strong> 자녀 복리·F-2 체류 자격 검토.',
      },
      {
        question: '한국어가 부족한데 절차 진행이 어렵지 않나요?',
        answer:
          '<strong>다누리콜센터 1577-1366 다국어 지원 영역입니다.</strong> 통역·법률·심리 상담 결합.',
      },
      {
        question: '보호시설이 있나요?',
        answer:
          '<strong>가정폭력 피해 외국인 보호시설 있는 영역입니다.</strong> 1366·1577-1366으로 안내.',
      },
      {
        question: '재산분할·양육비도 청구 가능한가요?',
        answer:
          '<strong>외국인 배우자도 동일하게 청구 가능한 영역입니다.</strong> 변호인 자문 + 가정법원 진행.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판상 이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산분할 산정', href: '/guide/divorce/divorce-property-division-calculation' },
      { label: '양육권 결정 기준', href: '/guide/divorce/divorce-custody-criteria' },
      { label: '가정폭력 대응', href: '/guide/divorce/divorce-domestic-violence-response' },
      { label: '양육비 산정', href: '/guide/divorce/divorce-child-support-calculation' },
    ],
  },

  // ─── 3. divorce-postnuptial-agreement-validity-dispute-track ───
  {
    domain: 'divorce',
    slug: 'divorce-postnuptial-agreement-validity-dispute-track',
    keyword: '혼인 중 작성 재산분할 합의서 효력',
    questionKeyword: '결혼 후 배우자가 강요로 작성하게 한 \'재산분할 포기 합의서\'가 있는데 이혼 때 효력이 있나요?',
    ctaKeyword: '혼인 중 합의서 효력 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '혼인 중 합의서 효력 다툼 — 5단계 강박·재산분할 | 로앤가이드',
      description:
        '혼인 중 강요로 작성된 \'재산분할 포기 합의서\' 효력 다툼 + 강박 + 무효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 3년 차에 배우자가 \'본인 명의 부동산 + 사업체에 대한 재산분할을 청구하지 않겠다\'는 합의서를 작성하라고 강요했습니다. 당시 본인은 임신 중이었고 배우자가 \'동의 안 하면 이혼·자녀 양육 박탈\'을 협박해 어쩔 수 없이 서명·인감 날인을 했어요. 합의서엔 \'본 합의는 영구적이며 이혼 시에도 효력 유지\'가 명시돼 있고 변호사 자문이나 공증은 거치지 않았습니다. 이혼을 진행하려는데 배우자가 \'합의서가 있으니 재산분할은 0원\'을 주장하고 있어요." 혼인 중 작성된 재산분할 약정(postnuptial agreement)은 \'사전 약정\'이라는 점에서 효력 평가가 엄격한 영역이고, 강박·기망·궁박·경솔에 의한 약정은 민법 제104조 불공정한 법률행위 + 제110조 강박에 의한 의사표시로 무효·취소 다툼이 가능한 트랙입니다. 임신 중 + 양육 박탈 협박 + 변호사 자문 부재 결합은 강박·궁박 입증 강한 사정. 피해자라면 ① 강박 입증 ② 불공정 법률행위 ③ 합의 무효 ④ 재산분할 청구 ⑤ 위자료 5중 트랙이 가능한 영역. 대응은 ① 강박 ② 불공정 ③ 무효 ④ 분할 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 혼인 중 합의서 효력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 강박·불공정·무효·분할·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 강박 입증</strong> — 임신·양육 박탈 협박·심리적 압박.</li>\n<li><strong>② 불공정 법률행위</strong> — 민법 제104조 궁박·경솔·무경험 평가.</li>\n<li><strong>③ 합의 무효·취소</strong> — 강박·불공정 시 무효 또는 취소.</li>\n<li><strong>④ 재산분할 청구</strong> — 합의 무효 시 정상 재산분할 진행.</li>\n<li><strong>⑤ 위자료</strong> — 강박·정신적 고통 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼인 중 재산분할 약정은 약자 보호 + 강박·기망 영역의 엄격 평가 대상. 임신 중 + 양육 박탈 협박 + 변호사 자문 부재 결합 시 강박·궁박 입증 강한 트랙. 합의 무효 시 정상 재산분할 회복.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·무효·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합의서·정황 자료 보존 (즉시)</strong> — 합의서·작성 당시 메시지·녹취.</li>\n<li><strong>2단계 — 강박 입증 자료 (1~2주)</strong> — 임신 진단서·양육 박탈 협박 자료·심리 평가.</li>\n<li><strong>3단계 — 변호인 자문 + 합의 무효 통지 (2~3주)</strong> — 내용증명·합의 효력 부정 통지.</li>\n<li><strong>4단계 — 이혼·재산분할 청구</strong> — 합의 무효 + 정상 재산분할.</li>\n<li><strong>5단계 — 위자료 청구</strong> — 강박·정신적 고통.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">혼인 중 합의서 효력 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 강박·불공정·무효 갈래입니다.</strong></p>\n<ul>\n<li><strong>합의서 원본·사본</strong></li>\n<li><strong>합의 작성 당시 카톡·메시지·통화 녹취</strong></li>\n<li><strong>임신 진단서·산부인과 자료</strong></li>\n<li><strong>양육 박탈 협박 자료·이혼 거론 메시지</strong></li>\n<li><strong>심리 평가·정신과 진료 자료</strong></li>\n<li><strong>배우자 재산 자료 (불공정 입증)</strong></li>\n<li><strong>변호사 자문 부재 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 강박·궁박 입증은 \'작성 당시 상황 + 약자 사정 + 협박 정황\' 종합. 임신 중 + 양육 박탈 협박은 \'궁박\'의 결정 사정. 변호사 자문·공증 부재는 \'경솔·무경험\' 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>강박 입증</strong> — 임신·양육 박탈 협박.</li>\n<li><strong>불공정 법률행위</strong> — 궁박·경솔·무경험.</li>\n<li><strong>합의 무효·취소</strong> — 강박·불공정 평가.</li>\n<li><strong>재산분할 회복</strong> — 합의 무효 시 정상 재산분할.</li>\n<li><strong>위자료</strong> — 강박·정신적 고통 위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 5·18민주화운동 관련자 가족 위자료 영역',
        summary:
          '대법원 2023다285162(대법원, 2026.01.22 선고) 영역에서 법원은 손해배상 사건에서 불법행위로 인한 손해배상청구권 행사의 객관적·합리적 기대가능성을 부정하는 사유가 있는 경우 민법 제766조 제1항의 단기소멸시효가 진행하지 않는다는 평가를 다루면서, 강박·압박·궁박 상태에서의 법률행위 평가가 사건 당사자의 의사·자유 평가에 직접 영향을 미친다고 본 사례 흐름이 있고, 혼인 중 합의서 평가에도 동일 기준이 적용됩니다.',
        takeaway: '임신 중 + 양육 박탈 협박 + 변호사 자문 부재 결합 시 강박·궁박 입증 + 합의 무효 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '서명·인감을 했는데도 합의가 무효가 될 수 있나요?',
        answer:
          '<strong>강박·궁박·기망 입증 시 무효·취소 영역입니다.</strong> 작성 당시 정황 자료가 결정.',
      },
      {
        question: '공증을 안 받았는데 효력에 영향이 있나요?',
        answer:
          '<strong>공증 부재는 효력 약화 사정 영역입니다.</strong> 변호사 자문 부재도 결합 사정.',
      },
      {
        question: '합의 무효 시 재산분할은 정상 진행되나요?',
        answer:
          '<strong>합의 무효 시 정상 재산분할 회복 영역입니다.</strong> 50:50 기여도 평가.',
      },
      {
        question: '강박 입증이 어렵지 않나요?',
        answer:
          '<strong>임신·양육 박탈 협박 + 메시지·녹취 결합 시 입증 가능 영역입니다.</strong> 즉시 자료 수집.',
      },
      {
        question: '위자료 청구는 얼마까지 가능한가요?',
        answer:
          '<strong>강박·정신적 고통 정도에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 산정', href: '/guide/divorce/divorce-property-division-calculation' },
      { label: '재판상 이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-alimony-claim' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-consensual-procedure' },
      { label: '가정폭력 대응', href: '/guide/divorce/divorce-domestic-violence-response' },
    ],
  },

  // ─── 4. divorce-spouse-debt-hidden-after-marriage-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-debt-hidden-after-marriage-track',
    keyword: '배우자 결혼 후 숨긴 채무 발견',
    questionKeyword: '결혼 후 배우자가 결혼 전·결혼 중 본인 모르게 빌린 거액의 채무가 있다는 사실을 알게 됐어요. 이혼 시 어떻게 분배되나요?',
    ctaKeyword: '배우자 숨긴 채무 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 숨긴 채무 이혼 — 5단계 채무 분배·기망 다툼 | 로앤가이드',
      description:
        '결혼 후 배우자의 숨긴 채무 발견 시 채무 분배·기망·재산분할 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 4년 차에 배우자 앞으로 \'카드사·캐피탈·지인 차용\' 합계 8천만 원 채무가 있다는 사실을 우연히 알게 됐습니다. 결혼 전 \'채무 없다\'는 명시적 답변 + 결혼 후에도 사업 자금·생활비를 핑계로 추가 차용을 본인 몰래 했고, 채권자들이 가정으로 압류·내용증명을 보내기 시작했어요. 본인은 채무 보증·연대보증을 한 적이 없고 채무 사용처도 본인 가계에 쓴 흔적이 없습니다. 배우자는 \'결혼 생활 중 채무라 부부 공동 책임\'을 주장하지만 본인은 이혼 + 채무 분배를 검토 중이에요." 부부 재산은 \'특유재산\' + \'부부공유재산\' + \'채무\' 구조이고, 채무는 \'생활비·자녀 양육 등 일상가사\' 채무와 \'사업·도박·사치 등 개인 채무\'로 분리 평가되는 영역입니다. 일상가사 채무는 부부 공동 책임, 개인 채무는 개인 책임 영역이라 \'사용처\' 입증이 핵심 트랙. 피해자라면 ① 채무 성격 ② 사용처 ③ 기망 ④ 재산분할 ⑤ 위자료 5중 트랙이 가능한 영역. 대응은 ① 성격 ② 사용처 ③ 기망 ④ 분할 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 숨긴 채무 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·사용처·기망·분할·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무 성격 분류</strong> — 일상가사 vs 개인 채무 분리 평가.</li>\n<li><strong>② 사용처 입증</strong> — 채무 사용처가 본인 가계에 사용됐는지.</li>\n<li><strong>③ 기망 평가</strong> — 결혼 전 \'채무 없음\' 답변 + 결혼 중 숨김.</li>\n<li><strong>④ 재산분할</strong> — 채무 분배 + 적극재산 + 소극재산 종합 평가.</li>\n<li><strong>⑤ 위자료</strong> — 기망·정신적 고통 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 채무 분배의 핵심은 \'사용처\'. 본인 모르게 + 사업·도박·사치 사용 채무는 개인 책임 영역. 일상가사 채무라도 본인 몰래 거액 차용은 기망 평가. 결혼 전 \'채무 없음\' 답변은 사기 평가 가능한 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·분리·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무 내역·계약서 확인 (즉시)</strong> — 채권자 정보·차용증·사용 시점·금액.</li>\n<li><strong>2단계 — 사용처 추적 자료 (1~2주)</strong> — 본인 가계 사용 부재·배우자 단독 사용 입증.</li>\n<li><strong>3단계 — 결혼 전 답변 자료 (2주)</strong> — 채무 없음 답변 메시지·결혼 자료.</li>\n<li><strong>4단계 — 이혼·재산분할 청구</strong> — 채무 분배 분리 + 적극재산 청구.</li>\n<li><strong>5단계 — 위자료 + 채무 보증 거부</strong> — 기망 위자료 + 채권자에 보증 거부 통지.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 숨긴 채무 이혼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·사용처·기망 갈래입니다.</strong></p>\n<ul>\n<li><strong>채무 내역서·차용증·압류 자료</strong></li>\n<li><strong>채권자 정보·차용 시점 자료</strong></li>\n<li><strong>가계 사용 부재 입증 자료 (가계부·계좌이체 내역)</strong></li>\n<li><strong>결혼 전 \'채무 없음\' 답변 자료</strong></li>\n<li><strong>배우자 사업·도박·사치 사용처 자료</strong></li>\n<li><strong>본인 보증·연대보증 부재 입증</strong></li>\n<li><strong>가족관계증명서·혼인관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채권자에 \'본인은 채무 보증·연대보증 안 했음\' 명시 통지 + 가정 압류 시 즉시 변호인 자문. 사용처 입증이 채무 분배의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 성격</strong> — 일상가사 vs 개인 채무.</li>\n<li><strong>사용처 입증</strong> — 본인 가계 사용 부재.</li>\n<li><strong>기망 평가</strong> — 결혼 전·중 숨김.</li>\n<li><strong>재산분할</strong> — 채무 분배 + 적극재산 평가.</li>\n<li><strong>채권자 대응</strong> — 보증 거부 통지·압류 방어.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>금융감독원 1332 (채무 분쟁)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주택재개발 권리산정기준일 평가 영역',
        summary:
          '대법원 2024두31185(대법원, 2025.05.29 선고) 영역에서 법원은 조합원지위확인 사건에서 주택재개발사업에서 권리산정기준일 이전에 상속이 개시되어 권리 평가가 달라지는 영역을 다루면서, 부부 재산의 형성·분배·기여도 평가에서 사실관계와 시점 평가가 결정 사정이라고 본 사례 흐름이 있고, 부부 채무 분배 평가에도 동일하게 사용처·시점·기여도 평가가 적용됩니다.',
        takeaway: '배우자 숨긴 채무는 사용처 + 기망 + 사용 시점 종합 평가로 분배되는 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 채무를 본인이 다 갚아야 하나요?',
        answer:
          '<strong>사용처가 본인 가계에 사용 안 된 경우 책임 분리 영역입니다.</strong> 가계 사용 부재 입증.',
      },
      {
        question: '채권자가 본인에게 변제를 청구해요',
        answer:
          '<strong>보증·연대보증 부재 시 변제 의무 없는 영역입니다.</strong> 즉시 보증 거부 통지.',
      },
      {
        question: '결혼 전 \'채무 없음\' 답변이 기망인가요?',
        answer:
          '<strong>혼인 의사 결정에 영향 끼친 사정이면 기망 평가 영역입니다.</strong> 답변 메시지 자료 보존.',
      },
      {
        question: '재산분할에서 채무는 어떻게 계산되나요?',
        answer:
          '<strong>적극재산 - 소극재산(채무) = 분할 대상 영역입니다.</strong> 사용처 입증 시 채무 분리.',
      },
      {
        question: '위자료까지 청구 가능한가요?',
        answer:
          '<strong>기망 + 정신적 고통 시 위자료 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 산정', href: '/guide/divorce/divorce-property-division-calculation' },
      { label: '재판상 이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-alimony-claim' },
      { label: '채무 분배 평가', href: '/guide/divorce/divorce-debt-division' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-consensual-procedure' },
    ],
  },

  // ─── 5. inheritance-life-insurance-beneficiary-change-dispute-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-beneficiary-change-dispute-track',
    keyword: '사망 직전 보험 수익자 변경 분쟁',
    questionKeyword: '아버지 사망 직전 의식이 혼미한 상태에서 생명보험 수익자가 새 배우자로 갑자기 변경됐어요. 다툴 수 있나요?',
    ctaKeyword: '보험 수익자 변경 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사망 직전 보험 수익자 변경 — 5단계 의사능력 다툼 | 로앤가이드',
      description:
        '사망 직전 생명보험 수익자 변경 시 의사능력·강박·재산 회복 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 말기 췌장암으로 호스피스에 입원해 있던 중 사망 2주 전 의식이 혼미한 상태에서 갑자기 \'본인 명의 5억 원 생명보험 수익자\'가 기존 자녀 3명에서 \'재혼한 새 배우자 단독\'으로 변경됐습니다. 변경 신청서엔 아버지 서명이 있지만 당시 호스피스 의료진은 \'중증 인지 저하 + 진통제 영향으로 의사 표현 어려움\' 진단을 했어요. 새 배우자는 변경 직후 신청을 진행했고 보험사도 별도 확인 없이 처리했습니다. 본인은 형제 2명과 함께 \'의사능력 없는 상태의 변경\'을 다투려는 상황이에요." 생명보험 수익자 변경은 보험계약자의 의사능력이 있어야 효력이 있고, 사망 직전 의식 혼미 + 진통제 영향 + 새 배우자 강박 결합은 의사능력 부재·강박에 의한 무효 다툼이 가능한 영역입니다. 보험금은 \'수익자 고유 재산\'이지만 변경 무효 시 원수익자(자녀)에게 귀속되는 트랙. 피해자라면 ① 의사능력 ② 강박 ③ 변경 무효 ④ 보험금 반환 ⑤ 상속재산 5중 트랙이 가능한 영역. 대응은 ① 능력 ② 강박 ③ 무효 ④ 반환 ⑤ 상속 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사망 직전 보험 수익자 변경 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 능력·강박·무효·반환·상속 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의사능력 평가</strong> — 변경 당시 인지 상태·진통제·의료 진단.</li>\n<li><strong>② 강박 평가</strong> — 새 배우자 강박·고립·압박 정황.</li>\n<li><strong>③ 변경 무효 청구</strong> — 의사능력 부재 또는 강박 시 무효.</li>\n<li><strong>④ 보험금 반환 청구</strong> — 무효 시 원수익자에게 귀속.</li>\n<li><strong>⑤ 상속재산 평가</strong> — 보험금 + 상속재산 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사망 직전 수익자 변경은 의사능력 평가가 핵심. 호스피스 진단·진통제 영향·중증 인지 저하 결합 시 의사능력 부재 입증 강한 트랙. 변경 무효 시 원수익자(자녀)에게 보험금 귀속.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·회복 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의료 기록·변경 자료 보존 (즉시)</strong> — 호스피스 진단서·약물 기록·변경 신청서.</li>\n<li><strong>2단계 — 의사능력 평가 (1~2주)</strong> — 의료진 소견서·인지 평가 자료.</li>\n<li><strong>3단계 — 강박 정황 자료 (2주)</strong> — 새 배우자 고립·압박 정황 메시지·증인.</li>\n<li><strong>4단계 — 보험사 통지 + 민사 청구 (1~3개월)</strong> — 변경 무효 통지·보험금 지급 정지.</li>\n<li><strong>5단계 — 민사 소송 + 상속재산 회복</strong> — 보험금 반환 + 상속재산 평가.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사망 직전 보험 수익자 변경 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 능력·강박·무효 갈래입니다.</strong></p>\n<ul>\n<li><strong>호스피스 진료 기록·진단서</strong></li>\n<li><strong>변경 당시 약물 기록·진통제 자료</strong></li>\n<li><strong>의료진 소견서·인지 평가</strong></li>\n<li><strong>보험 변경 신청서·서명 자료</strong></li>\n<li><strong>새 배우자 고립·압박 정황 자료</strong></li>\n<li><strong>증인 진술서 (가족·간병인·의료진)</strong></li>\n<li><strong>보험 계약서·기존 수익자 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험사에 즉시 \'변경 무효 다툼\' 통지 + 보험금 지급 정지 요청. 보험금 이미 지급된 경우 새 배우자 상대 부당이득 반환 청구 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의사능력 평가</strong> — 의료 진단·약물·인지 상태.</li>\n<li><strong>강박 평가</strong> — 고립·압박 정황.</li>\n<li><strong>변경 무효</strong> — 의사능력 부재·강박 시.</li>\n<li><strong>보험금 반환</strong> — 무효 시 원수익자 귀속.</li>\n<li><strong>상속재산</strong> — 보험금 + 상속재산 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원·가사조사관</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 법인세 부과·소득금액 변동 통지 평가 영역',
        summary:
          '대법원 2025두33647(대법원, 2025.10.30 선고) 영역에서 법원은 법인세부과처분 및 소득금액변동통지 취소 청구 사건에서 특수관계인에 대한 저가 양도 평가 영역을 다루면서, 일시적으로 보유하는 자기주식의 양도성·자산성 평가가 결정 사정이라고 본 사례 흐름이 있고, 사망 직전 재산 이전·수익자 변경 평가에서도 의사능력 + 정상 거래 평가가 핵심 트랙입니다.',
        takeaway: '의사능력 부재 + 강박 결합 시 변경 무효 + 보험금 반환 영역 — 변호인 상담·민사 청구 권장.',
      },
    ],
    faq: [
      {
        question: '변경 신청서에 서명이 있는데도 다툴 수 있나요?',
        answer:
          '<strong>의사능력 부재면 서명만으로 효력 없는 영역입니다.</strong> 의료 진단·약물 기록 결정 입증.',
      },
      {
        question: '보험금이 이미 새 배우자에게 지급됐어요',
        answer:
          '<strong>부당이득 반환 청구 영역입니다.</strong> 즉시 보험사 통지 + 민사 청구.',
      },
      {
        question: '의료진 소견서가 결정적인가요?',
        answer:
          '<strong>호스피스 의료진 인지 평가가 핵심 사정 영역입니다.</strong> 변경 당시 기록 확보.',
      },
      {
        question: '강박 입증이 어렵지 않나요?',
        answer:
          '<strong>고립·압박 정황 + 증인 결합 시 입증 가능 영역입니다.</strong> 가족·간병인 진술 보강.',
      },
      {
        question: '상속재산도 함께 다툴 수 있나요?',
        answer:
          '<strong>유언·증여 효력 동시 평가 가능 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 절차 안내', href: '/guide/inheritance/inheritance-procedure-overview' },
      { label: '유언 효력 다툼', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '한정승인·상속포기', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-legal-reserve-claim' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-property-division' },
    ],
  },

  // ─── 6. inheritance-coheirs-property-divide-stalemate-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-coheirs-property-divide-stalemate-track',
    keyword: '상속재산 분할협의 결렬',
    questionKeyword: '공동상속인 4명이 상속재산 분할협의를 했는데 합의가 결렬됐어요. 가정법원 분할심판 어떻게 진행하나요?',
    ctaKeyword: '상속재산 분할심판 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속재산 분할협의 결렬 — 5단계 가정법원 심판 다툼 | 로앤가이드',
      description:
        '공동상속인 분할협의 결렬 시 가정법원 분할심판·조정·기여분 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 사망 후 상속인은 본인·형 1명·누나 1명·새어머니 4명이고 상속재산은 부동산 3건·현금 약 5억 원·주식 약 2억 원입니다. 분할협의를 위해 5차례 모였지만 \'장남 우선·기여도 차이·새어머니의 일방적 주장\' 등으로 합의에 도달하지 못했고, 일부 상속인은 분할협의서 서명 자체를 거부 중이에요. 본인은 부모 임종 직전 5년간 부모를 단독 부양했고 의료비 약 6천만 원도 본인이 부담한 사정이 있어 \'기여분\' 청구를 검토 중입니다." 상속재산 분할은 공동상속인 전원 합의가 원칙이지만 결렬 시 가정법원 분할심판을 청구하는 영역이고, 기여분·특별수익 청구도 분할심판 과정에서 동시 진행되는 트랙입니다. 본인이라면 ① 협의 부재 입증 ② 가정법원 조정 ③ 분할심판 ④ 기여분 ⑤ 특별수익 5중 트랙이 가능한 영역. 대응은 ① 부재 ② 조정 ③ 심판 ④ 기여 ⑤ 특별 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상속재산 분할협의 결렬 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 부재·조정·심판·기여·특별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 협의 부재 입증</strong> — 5차례 협의·결렬 정황 자료.</li>\n<li><strong>② 가정법원 조정</strong> — 협의 결렬 시 조정 우선.</li>\n<li><strong>③ 분할심판</strong> — 조정 무산 시 심판 청구.</li>\n<li><strong>④ 기여분 청구</strong> — 부양·재산 증식 기여 평가.</li>\n<li><strong>⑤ 특별수익 청구</strong> — 다른 상속인의 생전 증여·기증 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분할심판은 가정법원이 직권으로 재산 평가·분할 방법 결정하는 영역. 기여분 + 특별수익 동시 청구로 \'정상 분할\' 회복 가능 트랙. 분할 결정까지 통상 6개월~1년 소요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·조정·심판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산·상속인 확인 (즉시)</strong> — 가족관계증명서·재산 목록·부동산 등기.</li>\n<li><strong>2단계 — 협의 부재 입증 자료 (1~2주)</strong> — 협의 기록·결렬 통지·내용증명.</li>\n<li><strong>3단계 — 가정법원 조정 신청 (1개월 내)</strong> — 조정 절차 우선 진행.</li>\n<li><strong>4단계 — 분할심판 청구 (조정 무산 시)</strong> — 기여분·특별수익 동시 청구.</li>\n<li><strong>5단계 — 판결 + 분할 실행</strong> — 부동산 등기·예금 분할·주식 양도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속재산 분할협의 결렬 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 부재·조정·심판 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·제적등본·상속관계증명서</strong></li>\n<li><strong>피상속인 사망신고서·기본증명서</strong></li>\n<li><strong>부동산 등기부등본·재산 목록</strong></li>\n<li><strong>예금·주식·차량 등 재산 자료</strong></li>\n<li><strong>분할협의 기록·결렬 정황 자료</strong></li>\n<li><strong>기여분 자료 (부양 기록·의료비 영수증·재산 증식)</strong></li>\n<li><strong>다른 상속인 생전 증여·기증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여분 청구는 \'부양·재산 증식 기여\' 명백 + 객관 입증 필요. 5년 단독 부양 + 의료비 6천만 원 부담은 기여분 강한 사정. 가정법원 분할심판은 직권 평가라 상대방 협조 없이 진행 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>협의 부재</strong> — 5차례 협의·결렬 정황.</li>\n<li><strong>조정 우선</strong> — 가정법원 조정 절차.</li>\n<li><strong>분할심판</strong> — 직권 재산 평가·분할 방법.</li>\n<li><strong>기여분</strong> — 부양·재산 증식 기여.</li>\n<li><strong>특별수익</strong> — 다른 상속인 생전 증여.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국세청 홈택스 126 (상속세 신고)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상 자해 행위에 따른 평균임금 평가 영역',
        summary:
          '대법원 2025두31014(대법원, 2025.10.16 선고) 영역에서 법원은 평균임금정정불승인등 처분 취소 사건에서 근로자가 업무상의 사유로 인한 정신적 이상 상태에서 한 자해행위로 사망하거나 부상·질병에 이른 경우 평균임금 평가 영역을 다루면서, 재산·임금·기여 평가에서 객관적 사정과 인과관계 평가가 결정 사정이라고 본 사례 흐름이 있고, 상속재산 기여분 평가에도 동일하게 객관적 기여·시점·기간 평가가 적용됩니다.',
        takeaway: '협의 결렬 시 가정법원 분할심판 + 기여분 + 특별수익 동시 청구 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '협의가 결렬되면 누가 먼저 청구해야 하나요?',
        answer:
          '<strong>공동상속인 누구나 청구 가능한 영역입니다.</strong> 가정법원 조정 우선.',
      },
      {
        question: '5년 부양·의료비 부담이 기여분 인정되나요?',
        answer:
          '<strong>객관적 부양·재산 증식 기여 시 인정되는 영역입니다.</strong> 부양 기록·영수증 결정.',
      },
      {
        question: '새어머니도 상속인인가요?',
        answer:
          '<strong>법률혼이면 1/3 비율 상속인 영역입니다.</strong> 가족관계증명서 확인.</strong>',
      },
      {
        question: '부동산을 누가 가져갈지는 어떻게 결정되나요?',
        answer:
          '<strong>가정법원 직권으로 \'현물 분할·대금 분할\' 결정 영역입니다.</strong> 평가액·사용 사정 종합.',
      },
      {
        question: '분할심판은 얼마나 걸리나요?',
        answer:
          '<strong>통상 6개월~1년 소요 영역입니다.</strong> 협조 부재 시 연장 가능.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 절차 안내', href: '/guide/inheritance/inheritance-procedure-overview' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-property-division' },
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-claim' },
      { label: '특별수익 평가', href: '/guide/inheritance/inheritance-special-benefit' },
      { label: '한정승인·상속포기', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
    ],
  },

  // ─── 7. inheritance-living-will-advance-directive-dispute-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-living-will-advance-directive-dispute-track',
    keyword: '사전연명의료의향서·유언 효력',
    questionKeyword: '아버지의 자필 유언장과 사전연명의료의향서가 있는데 가족 일부가 \'위조·강박\'을 주장해요. 효력 어떻게 다투나요?',
    ctaKeyword: '유언·연명의료 효력 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유언·사전연명의료의향서 효력 — 5단계 위조·강박 다툼 | 로앤가이드',
      description:
        '자필 유언장·사전연명의료의향서 효력 다툼 시 위조·강박·검인 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 사망 후 본인이 보관하던 \'자필 유언장 + 사전연명의료의향서\'를 공개했습니다. 유언장엔 \'본인 단독 상속·새어머니 1/4·다른 자녀 1/4\' 비율이 명시돼 있었고 자필·서명·날인·일자 4요건이 갖춰졌어요. 사전연명의료의향서는 호스피스 입원 직전 작성됐고 의료기관에 등록됐습니다. 그런데 새어머니·이복형제는 \'자필이 아버지 글씨와 다르다·강박 작성·의사능력 부재\'를 주장하며 위조 의혹을 제기 중이에요. 가정법원에 유언장 검인 절차를 신청한 상태입니다." 자필 유언장은 민법 제1066조에 따라 ① 자필 ② 서명 ③ 날인 ④ 일자 4요건을 모두 갖춰야 효력이 있고, 위조·강박·의사능력 부재 시 무효 다툼이 가능한 영역입니다. 사전연명의료의향서는 별도 법률(연명의료결정법)에 따른 절차이고 상속과는 직접 관련 없는 트랙. 본인이라면 ① 4요건 ② 필적 감정 ③ 의사능력 ④ 검인 ⑤ 무효 청구 5중 트랙이 가능한 영역. 대응은 ① 요건 ② 감정 ③ 능력 ④ 검인 ⑤ 무효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자필 유언장 효력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 요건·감정·능력·검인·무효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 4요건 확인</strong> — 자필·서명·날인·일자 모두 갖춤.</li>\n<li><strong>② 필적 감정</strong> — 국과수·사설 필적 감정 의뢰.</li>\n<li><strong>③ 의사능력 평가</strong> — 작성 당시 인지 상태·진단 자료.</li>\n<li><strong>④ 가정법원 검인</strong> — 유언장 검인 절차 + 효력 확인.</li>\n<li><strong>⑤ 무효 청구</strong> — 위조·강박·의사능력 부재 시 무효 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자필 유언장은 4요건 갖추면 형식 효력. 다툼은 \'필적 진정성 + 의사능력 + 강박\' 영역. 필적 감정·의료 진단·작성 정황 증인 결합 시 효력 다툼 결정. 검인 절차는 효력 확인이 아닌 \'존재 확인\' 절차.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검인·감정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언장 보존·검인 신청 (즉시)</strong> — 가정법원 검인 신청·유언장 보관.</li>\n<li><strong>2단계 — 4요건 확인 (1주)</strong> — 자필·서명·날인·일자 확인.</li>\n<li><strong>3단계 — 필적 감정·의료 자료 (2~4주)</strong> — 국과수·사설 감정 + 인지 평가.</li>\n<li><strong>4단계 — 검인 절차 출석</strong> — 다른 상속인 참석·이의 진술.</li>\n<li><strong>5단계 — 유언 무효 청구 (필요 시)</strong> — 위조·강박 시 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유언·연명의료 효력 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 요건·감정·능력 갈래입니다.</strong></p>\n<ul>\n<li><strong>유언장 원본·사본·봉투</strong></li>\n<li><strong>피상속인 자필 비교 자료 (편지·서류)</strong></li>\n<li><strong>의료 진료 기록·인지 평가서</strong></li>\n<li><strong>가족관계증명서·상속관계증명서</strong></li>\n<li><strong>작성 정황 증인 진술서</strong></li>\n<li><strong>필적 감정 의뢰서·결과</strong></li>\n<li><strong>사전연명의료의향서 등록 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자필 유언장 검인은 \'존재 확인\' 절차로 효력 다툼은 별도 민사 소송. 필적 감정 + 의료 평가 + 증인 결합이 효력 평가의 결정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>4요건 확인</strong> — 자필·서명·날인·일자.</li>\n<li><strong>필적 감정</strong> — 국과수·사설 감정.</li>\n<li><strong>의사능력</strong> — 작성 당시 인지 상태.</li>\n<li><strong>강박 평가</strong> — 작성 정황·증인.</li>\n<li><strong>유류분 청구</strong> — 무효 시 유류분 별도 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>국립과학수사연구원 (필적 감정)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주식 공동상속 명의개서 영역',
        summary:
          '대법원 2025다211120(대법원, 2025.09.11 선고) 영역에서 법원은 주주지위확인의소 사건에서 주식을 공동상속받은 자가 단독으로 회사에 명의개서를 청구할 수 있는지 여부 평가를 다루면서, 공동으로 주식을 상속한 수인은 상속이 개시된 때에 주식을 공유하게 되고 이는 상속인들 명의로의 명의개서 여부와 무관하다고 본 사례 흐름이 있고, 유언·상속재산 평가에서도 동일하게 효력·승계 평가가 핵심 트랙입니다.',
        takeaway: '자필 유언장은 4요건 + 필적 + 의사능력 종합 평가로 효력 결정되는 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '4요건 다 갖췄는데도 무효가 될 수 있나요?',
        answer:
          '<strong>위조·강박·의사능력 부재 시 무효 영역입니다.</strong> 필적 감정·의료 평가 결정.',
      },
      {
        question: '검인 절차에서 효력이 결정되나요?',
        answer:
          '<strong>검인은 \'존재 확인\' 절차이고 효력 다툼은 민사 소송 영역입니다.</strong> 별도 무효 청구.',
      },
      {
        question: '필적 감정은 어떻게 의뢰하나요?',
        answer:
          '<strong>국과수·사설 감정원 의뢰 영역입니다.</strong> 비교 자료 (편지·서류) 확보.',
      },
      {
        question: '사전연명의료의향서는 상속과 관련 있나요?',
        answer:
          '<strong>연명의료 결정 영역으로 상속과 직접 관련 없는 영역입니다.</strong> 별도 평가.',
      },
      {
        question: '유언 무효 시 어떻게 상속되나요?',
        answer:
          '<strong>법정 상속분으로 진행되는 영역입니다.</strong> 유류분 청구 가능.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 절차 안내', href: '/guide/inheritance/inheritance-procedure-overview' },
      { label: '유언 효력 다툼', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-legal-reserve-claim' },
      { label: '한정승인·상속포기', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-property-division' },
    ],
  },

  // ─── 8. child-support-step-mother-bio-father-deceased-claim-track ───
  {
    domain: 'child-support',
    slug: 'child-support-step-mother-bio-father-deceased-claim-track',
    keyword: '친부 사망 후 계모 양육비 청구',
    questionKeyword: '아이의 친부가 사망했어요. 친부와 재혼한 계모(법률혼 배우자)에게 양육비 청구가 가능한가요?',
    ctaKeyword: '친부 사망 계모 양육비 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '친부 사망 계모 양육비 — 5단계 부양 의무 다툼 | 로앤가이드',
      description:
        '친부 사망 후 계모(친부 법률혼 배우자)에게 양육비 청구 시 부양 의무·상속 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 아이의 친모이고 친부와는 이혼한 상태였습니다. 친부 사망 후 친부의 새 배우자(계모, 친부와 법률혼)가 친부 재산 일부를 상속받았어요. 본인이 단독 양육 중인 자녀의 양육비를 친부에게 청구해 왔지만 친부 사망으로 청구 대상이 없어졌고, 계모에게 양육비 또는 부양료를 청구할 수 있는지 검토 중입니다. 자녀는 친부와 친모의 자녀로 계모와는 양친자 관계가 없는 상태이고, 친부 사망으로 자녀가 친부 상속인이 되는 영역입니다." 계모는 자녀와 양친자 관계 미성립 시 직접 부양 의무가 없는 영역이지만, 친부 사망 시 자녀가 친부 상속인이 되고 친부의 양육비 채무는 상속재산에 포함되어 상속인이 승계하는 트랙입니다. 자녀 본인이 친부 상속인 중 1인으로 양육비 채권을 상속받거나 친부의 상속재산에서 양육비 우선 변제 청구가 가능한 영역. 본인이라면 ① 양친자 부재 ② 상속 평가 ③ 양육비 승계 ④ 가정법원 심판 ⑤ 부양료 5중 트랙이 가능한 영역. 대응은 ① 양친자 ② 상속 ③ 승계 ④ 심판 ⑤ 부양 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 친부 사망 계모 양육비 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양친자·상속·승계·심판·부양 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양친자 관계 평가</strong> — 계모·자녀 양친자 입양 부재 시 직접 부양 의무 없음.</li>\n<li><strong>② 친부 상속 평가</strong> — 자녀가 친부 상속인 중 1인으로 상속 평가.</li>\n<li><strong>③ 양육비 채무 승계</strong> — 친부 양육비 채무가 상속재산에 포함.</li>\n<li><strong>④ 가정법원 심판</strong> — 상속재산 분할·양육비 우선 변제 청구.</li>\n<li><strong>⑤ 부양료 청구 (예외 사정 시)</strong> — 계모가 사실상 부양 약속한 사정 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계모는 양친자 입양 부재 시 직접 부양 의무 없음. 다만 친부 사망 시 자녀가 친부 상속인이 되고 친부의 양육비 채무는 상속재산에 포함되어 청구 가능 영역. 계모에게 직접 청구보다 친부 상속재산에서 우선 변제 트랙이 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·승계·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계·상속 확인 (즉시)</strong> — 가족관계증명서·기본증명서·상속관계증명서.</li>\n<li><strong>2단계 — 양친자 관계 평가 (1주)</strong> — 계모·자녀 양친자 입양 부재 확인.</li>\n<li><strong>3단계 — 친부 상속재산 조사 (2~3주)</strong> — 부동산·예금·주식·보험.</li>\n<li><strong>4단계 — 가정법원 심판 청구</strong> — 상속재산 분할 + 양육비 우선 변제.</li>\n<li><strong>5단계 — 양육비 이행 청구 (자녀 단독)</strong> — 자녀가 상속인으로 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">친부 사망 계모 양육비 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양친자·상속·승계 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·기본증명서</strong></li>\n<li><strong>친부 사망신고서·상속관계증명서</strong></li>\n<li><strong>친부 재산 자료 (부동산·예금·주식)</strong></li>\n<li><strong>계모와의 법률혼 + 양친자 부재 입증 자료</strong></li>\n<li><strong>기존 양육비 심판·이행명령 자료</strong></li>\n<li><strong>자녀 양육 자료 (성장·교육비)</strong></li>\n<li><strong>친부 상속세 신고서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친부 양육비 채무가 사망 시까지 미이행분 + 사망 이후 양육비 모두 상속재산에서 평가 가능. 계모 직접 청구는 양친자 입양 부재 시 어렵지만 사실상 부양 약속 사정 있으면 별도 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>양친자 관계</strong> — 계모·자녀 입양 부재.</li>\n<li><strong>친부 상속</strong> — 자녀 상속인 + 상속재산 평가.</li>\n<li><strong>양육비 채무 승계</strong> — 친부 채무가 상속재산 포함.</li>\n<li><strong>우선 변제</strong> — 상속재산에서 양육비 우선 변제.</li>\n<li><strong>계모 부양 약속</strong> — 사실상 부양 약속 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼외자 친부 과거 부양료 청구 영역',
        summary:
          '대법원 2023므11758(대법원, 2025.09.11 선고) 영역에서 법원은 인지청구및부양료청구 사건에서 혼외자가 비양육친인 친부에게 과거의 부양료를 청구할 수 있는지 여부 평가를 다루면서, 이혼한 부부나 혼인외 출생자의 생모·생부 사이에서 미성년 자녀에 대한 양육비청구권의 법적 성질 평가가 결정 사정이라고 본 사례 흐름이 있고, 친부 사망 시 양육비 채무 승계 평가에도 동일하게 적용됩니다.',
        takeaway: '계모 직접 청구보다 친부 상속재산에서 양육비 우선 변제 트랙이 결정 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계모에게 직접 양육비 청구가 가능한가요?',
        answer:
          '<strong>양친자 입양 부재 시 직접 청구 어려운 영역입니다.</strong> 친부 상속재산 우선 변제 트랙.',
      },
      {
        question: '자녀도 친부 상속인이 되나요?',
        answer:
          '<strong>친자관계 인정 시 상속인 영역입니다.</strong> 가족관계증명서 확인.',
      },
      {
        question: '친부가 남긴 재산이 적으면 양육비를 못 받나요?',
        answer:
          '<strong>상속재산 한도 내 변제 영역입니다.</strong> 한도 초과분은 청구 불가.',
      },
      {
        question: '계모가 사실상 부양 약속을 했어요',
        answer:
          '<strong>사실상 부양 약속 사정으로 별도 평가 가능 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '양육비이행관리원 도움을 받을 수 있나요?',
        answer:
          '<strong>친부 사망 후에도 상속인 상대 이행 청구 지원 영역입니다.</strong> 1644-6621 상담.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation' },
      { label: '양육비 이행 청구', href: '/guide/child-support/child-support-enforcement-claim' },
      { label: '양육비 변경 청구', href: '/guide/child-support/child-support-modification' },
      { label: '양육비 소송 절차', href: '/guide/child-support/child-support-lawsuit-process' },
      { label: '양육비 직접지급명령', href: '/guide/child-support/child-support-direct-payment-order-process' },
    ],
  },

  // ─── 9. child-support-recipient-cohabit-new-partner-reduction-track ───
  {
    domain: 'child-support',
    slug: 'child-support-recipient-cohabit-new-partner-reduction-track',
    keyword: '양육친 새 동거 양육비 감액',
    questionKeyword: '본인이 양육비를 지급 중인데 전 배우자(양육친)가 새 동거인과 사실혼을 시작했어요. 양육비 감액 청구 가능한가요?',
    ctaKeyword: '양육친 동거 양육비 감액 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '양육친 동거 양육비 감액 — 5단계 사정변경·자녀 복리 | 로앤가이드',
      description:
        '양육친(전 배우자)이 새 동거 시작 시 양육비 감액 청구 + 자녀 복리 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 비양육친으로 매월 양육비 150만 원을 지급 중인 본인입니다. 최근 전 배우자가 새 동거인과 사실혼을 시작했고 동거인이 \'고소득 정규직(연 1억 원+) + 자녀 양육 의지 표현\'하는 정황을 SNS·지인을 통해 확인했어요. 본인은 \'사정변경 + 양육 환경 개선\'을 사유로 양육비 감액 또는 일부 변경 청구를 검토 중입니다. 다만 양육친은 \'양육비는 자녀 권리\'·\'동거인은 양육 의무 없음\'을 주장하며 거부하는 입장이에요." 양육비는 \'자녀의 권리\'이지만 가사소송법 제837조에 따라 \'사정변경\'이 있을 때 변경 청구 가능한 영역이고, 양육친의 재혼·동거·소득 변화·자녀 양육 환경 변화는 사정변경 평가 사정입니다. 다만 동거인은 자녀와 양친자 관계 미성립 시 직접 부양 의무가 없고, 자녀 복리·실제 양육 부담 평가가 우선되는 트랙. 본인(비양육친)이라면 ① 사정변경 입증 ② 자녀 복리 평가 ③ 양육친 소득 ④ 가정법원 심판 ⑤ 감액 비율 5중 트랙이 가능한 영역. 대응은 ① 사정 ② 복리 ③ 소득 ④ 심판 ⑤ 비율 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육친 동거 양육비 감액 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·복리·소득·심판·비율 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사정변경 입증</strong> — 양육친의 재혼·동거·소득 변화.</li>\n<li><strong>② 자녀 복리 평가</strong> — 양육 환경·자녀 의사·실제 부담.</li>\n<li><strong>③ 양육친 소득 변화</strong> — 동거인 소득 결합 평가는 제한 영역.</li>\n<li><strong>④ 가정법원 심판</strong> — 양육비 변경 심판 청구.</li>\n<li><strong>⑤ 감액 비율 협의</strong> — 변경 정도·시점 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비 변경은 \'사정변경\' + \'자녀 복리\' 종합 평가 영역. 동거인 소득은 직접 평가 안 되지만 양육친 본인의 양육 환경·소득 변화 평가는 가능한 트랙. 자녀 권리 우선 평가라 감액 신중 적용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·협의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정변경 자료 보존 (즉시)</strong> — 양육친 동거·재혼 정황 자료.</li>\n<li><strong>2단계 — 자녀 양육 환경 자료 (1~2주)</strong> — 자녀 학교·생활·정서적 안정 자료.</li>\n<li><strong>3단계 — 양육친 본인 소득 자료 (2~3주)</strong> — 양육친 본인 소득 변화 평가.</li>\n<li><strong>4단계 — 가정법원 변경 심판 청구</strong> — 양육비 감액 또는 변경 청구.</li>\n<li><strong>5단계 — 협의 또는 심판 결정</strong> — 양육친 협의 또는 법원 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">양육친 동거 양육비 감액 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정·복리·소득 갈래입니다.</strong></p>\n<ul>\n<li><strong>기존 양육비 심판·이행 자료</strong></li>\n<li><strong>양육친 동거·재혼 정황 자료 (SNS·지인 진술)</strong></li>\n<li><strong>자녀 양육 환경 자료 (학교·생활)</strong></li>\n<li><strong>양육친 본인 소득 자료 (가능 시)</strong></li>\n<li><strong>본인(비양육친) 소득·재산 자료</strong></li>\n<li><strong>자녀 양육비 산정 기준표</strong></li>\n<li><strong>가족관계증명서·자녀 기본증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동거인 소득 자체는 양육비 평가 직접 사정이 아니라 신중. 양육친 본인의 소득·양육 환경 변화 + 자녀 실제 양육 부담 평가가 결정 사정. 감액 비율은 통상 10~30% 수준이 일반적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사정변경 평가</strong> — 양육친 재혼·동거·소득 변화.</li>\n<li><strong>자녀 복리 우선</strong> — 자녀 권리·정서적 안정.</li>\n<li><strong>동거인 평가 제한</strong> — 양친자 부재 시 직접 평가 안 됨.</li>\n<li><strong>가정법원 심판</strong> — 변경 심판 청구.</li>\n<li><strong>감액 비율</strong> — 통상 10~30%.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>가정법원·가사조사관</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비부담조서 이행명령 영역',
        summary:
          '대법원 2025으517(대법원, 2025.05.23 선고) 영역에서 법원은 이행명령 사건에서 양육비부담조서에 의하여 확정된 양육비 지급 의무 중 미이행 의무의 범위를 넘어서 가사소송법 제64조에서 정한 이행명령을 할 수 있는지 여부 평가를 다루면서, 양육비 채무는 자녀의 권리 + 사정변경 + 자녀 복리 종합 평가가 결정 사정이라고 본 사례 흐름이 있고, 양육비 변경 청구에도 동일하게 사정변경·자녀 복리 평가가 적용됩니다.',
        takeaway: '양육친 동거는 사정변경 평가 가능하지만 자녀 복리 우선 평가 영역 — 변호인 상담·신중 청구 권장.',
      },
    ],
    faq: [
      {
        question: '동거인이 고소득이면 양육비 감액 가능한가요?',
        answer:
          '<strong>동거인 소득 직접 평가는 제한 영역입니다.</strong> 양육친 본인 소득·자녀 환경 평가가 우선.',
      },
      {
        question: '재혼이 아니라 사실혼인데도 사정변경인가요?',
        answer:
          '<strong>사실혼·동거도 사정변경 평가 사정 영역입니다.</strong> 다만 신중 평가.',
      },
      {
        question: '자녀에게 불리한 결정이 될까 걱정돼요',
        answer:
          '<strong>자녀 복리 우선 평가라 신중 결정 영역입니다.</strong> 자녀 의사·정서적 안정 평가.',
      },
      {
        question: '얼마나 감액될 수 있나요?',
        answer:
          '<strong>통상 10~30% 수준 영역입니다.</strong> 사정변경 정도에 따라 결정.',
      },
      {
        question: '협의가 안 되면 어떻게 되나요?',
        answer:
          '<strong>가정법원 심판 청구 영역입니다.</strong> 법원 직권으로 변경 결정.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation' },
      { label: '양육비 변경 청구', href: '/guide/child-support/child-support-modification' },
      { label: '양육비 이행 청구', href: '/guide/child-support/child-support-enforcement-claim' },
      { label: '양육비 소송 절차', href: '/guide/child-support/child-support-lawsuit-process' },
      { label: '양육비 직접지급명령', href: '/guide/child-support/child-support-direct-payment-order-process' },
    ],
  },
];
