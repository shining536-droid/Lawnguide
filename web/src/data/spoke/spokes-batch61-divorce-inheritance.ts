import { SpokePage } from '../spoke-pages';

// batch61 divorce·inheritance — 7개 (2026-05-11)
//
// 고유 존재 이유:
// divorce 4:
// 1. 외국인 배우자가 한국에서 가정폭력 피해를 입은 사례의 비자·체류 보호 + 이혼 트랙.
// 2. 사업자 배우자가 이혼 임박 시 회사 계좌·지분으로 자산을 이전·은닉한 정황에 대한 재산분할 다툼 트랙.
// 3. 시댁 동거에서 발생한 갈등·간섭이 이혼 사유 (혼인관계 파탄)로 평가되는 트랙.
// 4. 코인·가상자산을 재산분할 대상으로 산정하는 트랙 (지갑 추적·시점 산정).
//
// inheritance 3:
// 1. 사망 후 해외에 있는 자산(부동산·계좌·연금) 발견 시 추가 분할·세금 트랙.
// 2. 사망 배우자 유족연금 수급 우선권 다툼 (재혼·동거 사유 영향).
// 3. 자필유언 증인 결격 사유 발생 시 효력 다툼 트랙.

export const spokesBatch61DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce / divorce-foreign-spouse-domestic-violence-protection-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-domestic-violence-protection-track',
    keyword: '외국인 배우자 가정폭력 이혼',
    questionKeyword: '한국인 남편의 폭력으로 결혼 비자 만료가 걱정돼요. 이혼하면 강제 출국인가요?',
    ctaKeyword: '외국인 배우자 가정폭력 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 가정폭력 — 5단계 이혼·체류 보호 | 로앤가이드',
      description:
        '한국인 배우자의 가정폭력으로 결혼 비자가 흔들리는 외국인 배우자의 이혼·체류 보호 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 전 한국인 남편과 결혼해 F-6 결혼이민 비자로 살고 있어요. 작년부터 폭력이 시작됐고 아이도 봤습니다. 이혼하고 싶지만 비자가 남편 신원보증과 연결돼 있어서 \'이혼하면 한국에서 못 산다\'는 말을 들었어요. 본국 가족도 한국말 못해서 도와주기 어렵습니다." 출입국관리법 시행규칙 별표는 외국인 배우자가 한국인 배우자의 \'귀책 사유\'(폭력·유기·외도)로 혼인이 파탄된 경우 F-6 비자 체류·연장이 가능한 영역으로 정합니다. 가정폭력 + 한국인 배우자 귀책 사유가 입증되면 이혼 후에도 한국 체류가 가능한 사례이고, 자녀 양육 관계 + 한국 사회 적응도가 추가 자료로 작용합니다. 가정폭력 피해자 보호 영역(가정폭력처벌법)과 동시 적용되어 보호명령·임시조치도 가능한 트랙입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 배우자 가정폭력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력 증거·체류 자격·이혼 사유·자녀·자립 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폭력 증거</strong> — 진단서·사진·녹취·112 신고 기록·이웃 진술.</li>\n<li><strong>② F-6 체류 자격 변경 (귀책 사유 입증)</strong> — 출입국청에 \'배우자 귀책 사유\' 자료 제출. 비자 연장 가능 영역.</li>\n<li><strong>③ 이혼 사유 (민법 제840조 1·2·6호)</strong> — 폭력·유기·혼인 계속 어려운 사유.</li>\n<li><strong>④ 자녀 양육 (친권·양육권)</strong> — 자녀 한국 거주 시 외국인 부모 양육 자격 우선 영역.</li>\n<li><strong>⑤ 자립 지원 (긴급복지·취업)</strong> — 한국이주여성인권센터·여성긴급전화 1366·법률구조공단 132 동시 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'이혼하면 강제 출국\'은 오해 영역. 한국인 배우자 귀책 사유 + 자녀 양육·한국 적응 자료가 있으면 이혼 후에도 체류 가능한 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이혼·체류 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·자격·이혼·체류 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 긴급 보호·신고 (즉시)</strong> — 1366·112 신고. 임시조치(접근금지)·피해자보호명령.</li>\n<li><strong>2단계 — 폭력 자료 보존 + 진단서 (1주)</strong> — 사진·녹취·진단서·증인.</li>\n<li><strong>3단계 — 한국이주여성인권센터·132 자문 (통역 포함)</strong> — 모국어 상담.</li>\n<li><strong>4단계 — 이혼 소송·체류 자격 변경 (3~6개월 병행)</strong> — 가정법원 이혼 + 출입국청 F-6 연장.</li>\n<li><strong>5단계 — 자녀 친권·양육·재산분할 (6~12개월)</strong> — 친권·양육·위자료·재산분할.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 배우자 가정폭력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 폭력·체류·이혼 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 112 신고 기록·임시조치 결정서</strong> — 폭력 신고 자료.</li>\n<li><strong>병원 진단서·치료 영수증·사진</strong> — 부상 자료.</li>\n<li><strong>녹취·문자·카톡·이웃 진술</strong> — 폭언·위협 자료.</li>\n<li><strong>외국인등록증·여권·F-6 비자 사본</strong> — 체류 자격.</li>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 혼인 사실.</li>\n<li><strong>자녀 출생증명서·학교 재학증명</strong> — 양육 관계.</li>\n<li><strong>본인 통장·소득 자료</strong> — 자립 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폭력 직후 사진을 본인 휴대전화 + 가족·친구에게 전송해두면 자료 보전 + 시점 입증이 동시에 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"이혼하면 강제 출국" 협박 반박</strong> — 귀책 사유 입증 시 체류 가능 영역. 출입국청 별도 절차.</li>\n<li><strong>"본국으로 자녀 데려가지 마라" 협박</strong> — 친권·양육권 결정은 법원 영역. 협박 자체가 자료.</li>\n<li><strong>"한국말 못한다" 약점 활용</strong> — 통역 지원 1366·이주여성인권센터. 모국어 상담 가능.</li>\n<li><strong>위자료·재산분할</strong> — 한국인 배우자 귀책 사유 시 위자료 산정 + 재산분할.</li>\n<li><strong>형사 트랙</strong> — 가정폭력처벌법·상해죄·협박죄. 별도 형사 처벌.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> — 24시간 통역 지원.</li>\n<li><strong>한국이주여성인권센터</strong> — 모국어 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>다누리콜센터 1577-1366</strong> — 다문화 가족 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 배우자 귀책 사유 이혼·체류 인정',
        summary:
          '대법원 2014다82354 사건 영역에서 법원은 외국인 배우자가 한국인 배우자의 가정폭력·유기·외도 등 귀책 사유로 혼인이 파탄된 경우 체류 자격 연장·변경이 가능하며, 자녀 양육 관계가 한국과 연결되어 있으면 양육·친권 결정에 외국 국적이 불리하게 작용하지 않는다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '\'이혼 = 강제 출국\'은 오해 영역. 한국인 배우자 귀책 사유 + 자녀 양육·한국 사회 적응 자료가 있으면 이혼 후에도 체류·양육이 가능한 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '비자가 남편 신원보증이라 이혼하면 끝인 줄 알았어요',
        answer:
          '<strong>귀책 사유 입증 시 체류 가능합니다.</strong> 폭력·유기·외도 입증 자료로 F-6 연장. 출입국청 별도 절차.',
      },
      {
        question: '한국말 잘 못해요. 어디서 상담 받나요?',
        answer:
          '<strong>1366·다누리(1577-1366) 모국어 통역 지원.</strong> 한국이주여성인권센터·132 무료 자문 가능.',
      },
      {
        question: '자녀가 한국에서 학교 다녀요',
        answer:
          '<strong>자녀 양육 관계가 체류·양육권 결정에 중요한 자료입니다.</strong> 학교 재학·한국 적응 자료가 결정적.',
      },
      {
        question: '재산분할도 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 국적과 무관 영역. 부부 재산 형성 기여도 자료. 위자료도 별도 청구 가능.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 비상 이혼', href: '/guide/divorce/divorce-violent-spouse-emergency-divorce' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-respondent-prep-checklist' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '자녀 친권·양육', href: '/guide/divorce/divorce-teenager-custody-own-choice' },
      { label: '접근금지·보호명령', href: '/guide/divorce/divorce-restraining-order-protection' },
    ],
  },

  // ─── 2. divorce / divorce-business-spouse-asset-transfer-detection-track ───
  {
    domain: 'divorce',
    slug: 'divorce-business-spouse-asset-transfer-detection-track',
    keyword: '사업자 배우자 자산 이전 은닉',
    questionKeyword: '남편 회사가 갑자기 적자 처리되고 명의가 친척으로 바뀌었어요. 재산분할 다툴 수 있나요?',
    ctaKeyword: '자산 이전 은닉 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업자 배우자 자산 이전 — 5단계 은닉 다툼 | 로앤가이드',
      description:
        '이혼 임박 시 사업자 배우자가 회사 명의·계좌·지분을 친척에게 이전·은닉한 정황에 대한 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 얘기 꺼낸 직후부터 남편 회사가 \'적자\'라며 자산을 친척 명의로 옮겼어요. 회사 통장 잔고는 \'운영자금\'으로 빠져나갔고, 지분도 \'경영 위기\'를 명분으로 처남 이름으로 무상 양도. 결혼 15년 동안 제가 함께 키운 사업이라 너무 분합니다." 부부 일방이 이혼 임박을 알고 재산을 친척·지인 명의로 옮기거나 일부러 적자 처리·매도해 재산분할을 회피하는 행위는 \'사해행위\'(민법 제406조)로 평가되어 취소 청구가 가능한 영역입니다. 가정법원은 사실심 변론 종결 시점을 기준으로 재산분할 대상을 확정하지만, 이전 일정 기간(통상 1~2년) 이내 의도적 이전 정황이 있으면 산정에 포함하는 영역(대법원 2013다1471 사해행위취소 법리 영역). 회사 지분·법인 계좌도 부부 공동재산 평가 영역이라 명의가 친척이더라도 실질적 지배 입증 시 분할 대상에 포함됩니다.</p>',
    sections: [
      {
        title: 'Q. 자산 이전 은닉 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이전 시점·명의·실질 지배·사해 의사·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이전 시점</strong> — 이혼 얘기 시점·소장 접수 시점 전후. 단기 이전일수록 정황 자료.</li>\n<li><strong>② 명의 변경 (친척·지인·법인)</strong> — 처남·시동생·차명 법인 등. 정상 거래 vs 사해 거래.</li>\n<li><strong>③ 실질 지배 (회사 결재·통장 관리)</strong> — 명의가 친척이라도 본인이 결재·관리하면 실질 지배.</li>\n<li><strong>④ 사해 의사 (이혼 회피 목적)</strong> — 이전 시점·이유·금액 비교.</li>\n<li><strong>⑤ 사해행위 취소 시효</strong> — 사해 알게 된 날 1년, 행위 5년 영역(민법 제406조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사·법인 명의·차명 지분도 부부 공동재산 평가 영역이라 친척 명의 이전이 분할 회피 정황으로 평가되면 사해행위 취소·재산분할 산입 트랙이 열리는 사례입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자산 추적·다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 추적·신청·증거·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자산 자료 백업 (즉시)</strong> — 통장 거래내역·법인 등기·부동산 등기·세금 납부 내역.</li>\n<li><strong>2단계 — 재산명시·재산조회 신청 (가정법원)</strong> — 가사소송법 제48조 제48조의2. 거짓 답변·은닉 시 처벌.</li>\n<li><strong>3단계 — 사해행위 취소 청구 (별도 민사)</strong> — 친척 명의 이전 거래 취소.</li>\n<li><strong>4단계 — 가압류·가처분 (소송 진행 중)</strong> — 자산 추가 이전 차단.</li>\n<li><strong>5단계 — 재산분할 산정 + 위자료 (이혼 판결)</strong> — 실질 부부 공동재산 산정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업자 배우자 자산 은닉 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산·이전·관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>법인 등기부등본·주주 명부</strong> — 지분 이력.</li>\n<li><strong>법인 결산서·세무신고서</strong> — 적자 처리 정황.</li>\n<li><strong>부동산 등기부등본·세금 납부</strong> — 명의 변경 이력.</li>\n<li><strong>부부 합의 거래·이혼 얘기 시점</strong> — 카톡·메시지.</li>\n<li><strong>친척·차명 거래 자료</strong> — 송금·인감·등기.</li>\n<li><strong>본인 결혼 기여 자료 (혼인기간·역할)</strong> — 분할 비율.</li>\n<li><strong>본인 통장·소득 자료</strong> — 자체 자산 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 법인카드·법인차량 사용 내역은 부부 공동 생활비로 평가되는 경우 회사 자산이 부부 공동재산으로 평가될 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"회사는 본인 명의라 분할 대상 아님" 주장 반박</strong> — 부부 공동 형성·기여 자료. 혼인기간·역할이 자료.</li>\n<li><strong>"적자라 분할할 게 없음" 주장 반박</strong> — 적자 처리 시점·이전 시점 비교. 사해 의도 자료.</li>\n<li><strong>"친척에게 양도는 정상 거래" 주장 반박</strong> — 무상·저가 양도면 사해행위 취소 자료.</li>\n<li><strong>차명 지분</strong> — 인감 관리·결재 권한·실질 사용이 차명 입증 자료.</li>\n<li><strong>가압류·가처분</strong> — 소송 중 추가 이전 차단.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·재산분할 무료 상담.</li>\n<li><strong>여성긴급전화 1366</strong> — 가족 상담.</li>\n<li><strong>가정법원</strong> — 재산명시·재산조회 신청.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 임박 자산 이전의 사해행위 취소',
        summary:
          '대법원 2018다85846 사건 영역에서 법원은 이혼 임박 또는 이혼 소장 접수 후 일방 배우자가 친척·지인 명의로 부동산·지분을 무상·저가 양도한 경우 사해행위에 해당하여 채권자(다른 배우자)가 취소 청구를 할 수 있고, 가정법원이 재산분할 산정 시 이전된 자산을 포함할 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '회사·법인 명의·차명 지분도 부부 공동재산 평가 영역. 사해행위 취소 + 가압류 + 재산분할 산입이 동시 트랙으로 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '회사 명의가 처음부터 남편 단독이에요',
        answer:
          '<strong>혼인기간 형성·기여 자료가 핵심입니다.</strong> 부부 공동 형성 자료면 분할 대상 영역. 명의는 절대 기준 아님.',
      },
      {
        question: '회사가 \"적자\"라며 분할할 게 없다고 합니다',
        answer:
          '<strong>적자 처리 시점·이전 시점 비교 다툼 가능합니다.</strong> 사해 의도 자료. 세무·결산서가 자료.',
      },
      {
        question: '친척이 \"정상 거래로 샀다\"고 합니다',
        answer:
          '<strong>무상·저가·시점이 핵심입니다.</strong> 시가 대비 양도가·거래 시점이 사해행위 자료. 5년 시효.',
      },
      {
        question: '가압류는 언제 신청하나요?',
        answer:
          '<strong>이혼 소장 접수 시점 또는 추가 이전 정황 시 즉시.</strong> 법원 가압류 신청 후 추가 이전 차단.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산은닉 다툼', href: '/guide/divorce/divorce-property-concealment-defense' },
      { label: '재산분할 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '주식·지분 평가', href: '/guide/divorce/divorce-spouse-shareholder-stock-valuation' },
      { label: '재산분할 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '특유재산 분리', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
    ],
  },

  // ─── 3. divorce / divorce-in-law-cohabit-conflict-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-in-law-cohabit-conflict-ground-track',
    keyword: '시댁 동거 갈등 이혼',
    questionKeyword: '시댁 동거 5년 만에 시어머니 간섭으로 부부 사이가 끊겼어요. 이혼 사유 되나요?',
    ctaKeyword: '시댁 동거 갈등 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '시댁 동거 갈등 — 5단계 혼인 파탄 이혼 | 로앤가이드',
      description:
        '시댁 동거에서 발생한 갈등·간섭이 부부 관계를 파탄시킨 경우 이혼 사유 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 직후부터 시댁에서 함께 살았어요. 시어머니 간섭이 일상이 되고 남편은 \'어머니 편\'만 들어 부부 대화가 줄었습니다. 5년이 지나니 잠도 다른 방, 식사도 따로. 친정으로 \'잠시 다녀오겠다\'며 나왔는데 6개월째 남편이 안 부릅니다. 이게 이혼 사유가 될까요?" 민법 제840조 제6호는 \'기타 혼인을 계속하기 어려운 중대한 사유\'를 이혼 사유로 정합니다. 시댁 동거에서의 간섭·갈등 자체가 단독 이혼 사유는 아니지만, 부부 관계가 사실상 파탄되었다는 결과 입증이 핵심 자료입니다. 별거 기간·소통 단절·정서적·신체적 갈등 누적이 자료로 인정되는 사례. 대법원 2015므6079 사건은 혼인 파탄의 책임 분배 기준으로 \'부부 일방이 일방적으로 가출한 것이 아니라 상호 관계 단절에 따른 별거\'면 단독 책임으로 평가되기 어렵다고 본 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 시댁 동거 갈등 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동거 기간·간섭 정황·파탄 결과·별거·책임 분배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동거 기간 (혼인 후 시댁 입주)</strong> — 동거 시작·종료 시점.</li>\n<li><strong>② 간섭 정황 (시부모·시누이)</strong> — 가정 일·자녀 양육·재정 간섭 자료.</li>\n<li><strong>③ 파탄 결과 (잠자리·식사·대화 단절)</strong> — 부부 관계 사실상 파탄 입증.</li>\n<li><strong>④ 별거 기간·소통</strong> — 별거 시작·기간·연락 시도·거부.</li>\n<li><strong>⑤ 책임 분배</strong> — 일방 가출 vs 상호 관계 단절. 후자면 단독 책임 아님.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시댁 간섭 자체가 단독 사유 아닌 영역이지만 부부 파탄 결과 + 별거 + 소통 단절이 자료로 누적되면 민법 제840조 6호 이혼 사유로 평가될 여지가 있는 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이혼 절차 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의·조정·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 카톡·문자·녹취·일기·증인 진술.</li>\n<li><strong>2단계 — 협의이혼 시도 (1~3개월)</strong> — 가정법원 협의이혼 신청.</li>\n<li><strong>3단계 — 조정 (협의 불성립 시)</strong> — 가사조정 → 합의 권고.</li>\n<li><strong>4단계 — 재판이혼 (6~12개월)</strong> — 민법 제840조 6호 주장.</li>\n<li><strong>5단계 — 재산분할·양육·위자료 (확정 후 절차)</strong> — 분할·양육 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시댁 동거 갈등 이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동거·갈등·별거 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 혼인 사실.</li>\n<li><strong>동거 자료 (전입신고·임대차계약·우편)</strong> — 시댁 동거 기간.</li>\n<li><strong>간섭·갈등 자료 (카톡·녹취·일기)</strong> — 정황 자료.</li>\n<li><strong>별거 자료 (전입신고 변경·생활비 분리)</strong> — 별거 시점·기간.</li>\n<li><strong>본인 통장·소득 자료</strong> — 자립 입증.</li>\n<li><strong>자녀 양육 자료 (학교·병원)</strong> — 친권·양육 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시어머니 간섭 녹취·카톡 자료가 자료로 강력합니다. 별거 직전 \'부부 갈등 본질\'을 본인 메모·일기로 기록해두는 것이 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"시댁 간섭은 이혼 사유 아님" 주장 반박</strong> — 단독 사유 아님. 결과(파탄·별거·단절)가 자료.</li>\n<li><strong>"본인 가출 책임" 주장 반박</strong> — 상호 관계 단절 정황. 부부 소통 시도·거부 자료.</li>\n<li><strong>재산분할 (혼인 기여)</strong> — 시댁 동거 기간의 가사·자녀 양육·시부모 부양도 기여 자료.</li>\n<li><strong>위자료</strong> — 시부모 간섭에 대한 위자료 청구는 별도 다툼 영역. 시부모 상대 별도 청구도 가능.</li>\n<li><strong>자녀 친권·양육</strong> — 자녀 의사·양육 환경 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·재산분할 무료 상담.</li>\n<li><strong>여성긴급전화 1366</strong> — 가족 상담.</li>\n<li><strong>가정법원</strong> — 협의이혼·조정 신청.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부 관계 파탄과 단독 책임 평가',
        summary:
          '대법원 2015므6079 사건 영역에서 법원은 부부 일방이 일방적으로 가출한 경우와 상호 관계 단절·소통 거부에 따른 별거는 책임 분배가 다르며, 상호 관계 단절 정황이 자료로 입증되면 단독 책임으로 평가되기 어렵고 민법 제840조 6호의 \'기타 혼인을 계속하기 어려운 중대한 사유\'에 해당할 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '시댁 간섭이 단독 사유는 아니지만 결과(파탄·별거·단절) + 상호 관계 단절 자료가 모이면 이혼 사유로 평가될 여지가 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '시어머니 욕은 한 적 없지만 간섭이 심해요',
        answer:
          '<strong>욕설보다는 결과(파탄·별거)가 자료입니다.</strong> 카톡·녹취·일기로 간섭 정황 + 부부 관계 변화 입증.',
      },
      {
        question: '제가 친정에 왔는데 본인 가출이라고 합니다',
        answer:
          '<strong>가출 vs 상호 단절은 다른 평가 영역입니다.</strong> 소통 시도 자료·남편 거부 자료 보존.',
      },
      {
        question: '시부모도 위자료 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 시부모 간섭이 부부 관계 파탄에 직접 영향을 준 경우 별도 위자료 청구 트랙.',
      },
      {
        question: '자녀 친권은 어떻게 정해지나요?',
        answer:
          '<strong>자녀 의사·양육 환경 자료 기준입니다.</strong> 시댁 동거 기간 본인 양육 자료가 자료. 학교·병원 기록 보존.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 사유', href: '/guide/divorce/divorce-spouse-gambling-ground' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-respondent-prep-checklist' },
      { label: '별거 기간 재산분할', href: '/guide/divorce/divorce-separated-couple-pension-split' },
      { label: '재산분할 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '자녀 양육 결정', href: '/guide/divorce/divorce-teenager-custody-own-choice' },
    ],
  },

  // ─── 4. divorce / divorce-virtual-asset-coin-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-virtual-asset-coin-division-track',
    keyword: '코인 가상자산 재산분할',
    questionKeyword: '남편이 코인으로 큰돈 벌었다는데 지갑 주소도 안 알려줘요. 재산분할 받을 수 있나요?',
    ctaKeyword: '가상자산 재산분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인 가상자산 재산분할 — 5단계 추적·산정 | 로앤가이드',
      description:
        '배우자의 코인·가상자산이 재산분할 대상이라는 점부터 지갑 추적·시점 산정·은닉 다툼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 2년 전부터 코인 투자에 열중했어요. 5천만원 정도 넣었다고 들었는데 최근 차도 사고 명품도 사는 걸 보니 수십억 수준인 것 같습니다. 지갑 주소·거래소 계정을 물어보면 \'사라졌다\'며 안 알려줍니다." 가상자산도 재산분할 대상 영역(대법원 2025므10716 영역에서 분할 대상으로 평가된 사례 흐름)입니다. 지갑 주소·거래소 입출금 자료·세무 신고 자료를 통해 추적이 가능하고, 가정법원의 재산명시·재산조회 절차로 거래소 협조 요청도 가능한 사례. 시세 변동성이 큰 자산이라 분할 산정 시점이 결정적인 자료. 사실심 변론 종결일이 통상 기준이지만 합의 시 다른 시점도 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 가상자산 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산 확인·시점·평가·은닉·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자산 확인 (거래소·콜드월렛)</strong> — 본인 동의 후 거래소 협조 또는 가정법원 재산명시.</li>\n<li><strong>② 시세 산정 시점</strong> — 사실심 변론 종결일 기준. 합의로 다른 시점 가능.</li>\n<li><strong>③ 평가 방식 (원화 환산·KRW 시세)</strong> — 거래소 평균가·CoinMarketCap.</li>\n<li><strong>④ 은닉·이전 (콜드월렛·믹서)</strong> — 추적 자료·체인 분석. 사해 정황.</li>\n<li><strong>⑤ 청구 방식</strong> — 코인 자체 분할 vs 원화 환산 분할.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'지갑 주소 모른다\'는 핑계는 가정법원 재산조회로 거래소 협조 강제 가능. 콜드월렛·해외 거래소 은닉은 추적 어렵지만 입출금 자료 + 세무 자료로 일부 입증 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적·청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신청·추적·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 백업 (즉시)</strong> — 통장 거래내역·세무 신고·카톡·차량 구매 영수증.</li>\n<li><strong>2단계 — 재산명시·재산조회 신청 (가정법원)</strong> — 거래소 입출금 협조.</li>\n<li><strong>3단계 — 가압류·가처분 (소송 진행 중)</strong> — 자산 추가 이전 차단.</li>\n<li><strong>4단계 — 시세 산정·합의 (1~3개월)</strong> — 변론 종결일 기준.</li>\n<li><strong>5단계 — 분할 청구·집행 (판결 후)</strong> — 원화 환산 분할 또는 코인 자체 이체.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">가상자산 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·생활·세무 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 통장 거래내역 (혼인기간)</strong> — 코인 자금 출처 입증.</li>\n<li><strong>배우자 차량·부동산 구매 자료</strong> — 코인 차익 정황.</li>\n<li><strong>세무 신고서·연말정산</strong> — 가상자산 신고 정황.</li>\n<li><strong>카톡·문자 (코인 언급)</strong> — 보유·매매 정황.</li>\n<li><strong>거래소 계정 자료 (본인이 알고 있는 것)</strong> — 추적 단서.</li>\n<li><strong>혼인기간·기여 자료</strong> — 분할 비율.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 코인 자체보다 \'코인으로 산 자산\'(차량·부동산·명품)이 입증 자료가 더 단단한 영역. 영수증·사진 보존이 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"지갑 주소 잃어버렸다" 핑계 반박</strong> — 재산명시·재산조회로 거래소 협조 강제.</li>\n<li><strong>"시세 변동 커서 산정 어려움" 주장</strong> — 변론 종결일 기준. 합의로 다른 시점 가능.</li>\n<li><strong>"본인 단독 투자라 분할 대상 아님" 주장 반박</strong> — 혼인기간 형성 자산은 분할 대상. 자금 출처 자료.</li>\n<li><strong>해외 거래소·콜드월렛 은닉</strong> — 추적 어려운 영역. 입출금·세무 자료 우회 입증.</li>\n<li><strong>사해행위 취소</strong> — 이혼 임박 이전 정황. 별도 민사 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·재산분할 무료 상담.</li>\n<li><strong>가정법원</strong> — 재산명시·재산조회 신청.</li>\n<li><strong>금융감독원 1332</strong> — 가상자산 관련 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 재산분할 대상성',
        summary:
          '대법원 2025므10716 사건 영역에서 법원은 가상자산도 재산분할 대상에 해당하고, 시세 변동성이 큰 자산이라도 사실심 변론 종결일을 기준으로 평가하여 분할이 가능하다고 본 영역으로 평가되는 사례가 있습니다. 거래소 협조 요청·재산명시 절차도 동일하게 적용되는 사례.',
        takeaway: '코인·가상자산은 명백한 재산분할 대상. 추적이 어렵더라도 입출금·세무·생활 자료 우회 입증 + 재산명시 절차가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '\"지갑 주소 잃어버렸다\"고 거짓말합니다',
        answer:
          '<strong>재산명시·재산조회 신청으로 강제 가능합니다.</strong> 거짓 답변·은닉 시 처벌 영역(가사소송법).',
      },
      {
        question: '시세가 매일 바뀌는데 어떻게 산정하나요?',
        answer:
          '<strong>사실심 변론 종결일 기준입니다.</strong> 거래소 평균가·CMC 시세 활용. 합의로 다른 시점 가능.',
      },
      {
        question: '해외 거래소에 옮겼다고 합니다',
        answer:
          '<strong>추적 어려운 영역이지만 우회 입증 가능합니다.</strong> 본인 통장 송금·생활 자산 구매 자료가 자료.',
      },
      {
        question: '본인 단독 투자라 안 된다고 합니다',
        answer:
          '<strong>혼인기간 형성 자산은 분할 대상입니다.</strong> 자금 출처가 부부 공동 자금이면 명의 무관.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산은닉 다툼', href: '/guide/divorce/divorce-property-concealment-defense' },
      { label: '재산분할 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '주식·지분 평가', href: '/guide/divorce/divorce-spouse-shareholder-stock-valuation' },
      { label: '재산분할 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '특유재산 분리', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
    ],
  },

  // ─── 5. inheritance / inheritance-overseas-asset-discovery-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-asset-discovery-track',
    keyword: '해외 자산 상속 추가',
    questionKeyword: '아버지 사망 후 1년 뒤 미국 은행 계좌가 발견됐어요. 다시 분할할 수 있나요?',
    ctaKeyword: '해외 자산 상속 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '해외 자산 상속 추가 — 5단계 분할·세금 트랙 | 로앤가이드',
      description:
        '사망 후 해외 부동산·계좌·연금이 새로 발견됐다면 추가 분할·신고·세금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"작년 봄 아버지가 돌아가셔서 형제들이 협의 분할을 마쳤어요. 그런데 최근 어머니가 옛 서류를 정리하다 \'씨티은행 미국 계좌\'를 발견했습니다. 잔액 18만 달러쯤 있는 것 같아요. 다시 분할해야 하는지, 세금 신고는 어떻게 하는지 막막합니다." 사망 후 새로 발견된 상속재산은 \'상속재산 분할 협의\' 또는 \'법정상속분 분할\' 대상 영역입니다. 협의 분할은 \'발견 후 6개월 이내 추가 협의\'가 일반적이고, 합의 불성립 시 가정법원 분할 심판 청구 트랙. 세금 측면은 상속세 신고 기한(사망 후 6개월)이 도과한 사례라면 \'사후 발견 자산\' 추가 신고 + 가산세 영역이 적용되는 사례. 해외 자산은 한·미 조세협약·외환신고 의무 등 별도 영역이 추가로 적용되는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 자산 발견 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산 확인·분할·신고·송금·세금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자산 확인 (계좌·부동산·연금)</strong> — 해외 금융기관 협조 요청. 영사관·은행 본인 인증.</li>\n<li><strong>② 분할 방식 (협의·심판)</strong> — 상속인 전원 협의 또는 가정법원 분할 심판.</li>\n<li><strong>③ 상속세 추가 신고 (가산세 영역)</strong> — 사망 후 6개월 기한 도과 시 가산세.</li>\n<li><strong>④ 외환신고·송금</strong> — 5만 달러 초과 자금 신고 의무.</li>\n<li><strong>⑤ 한·외국 조세협약</strong> — 미국 등 일부 국가는 이중 과세 방지 규정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 자산은 \'늦게 발견했다\' 자체가 가산세 면제 사유는 아닌 영역. 신속한 추가 신고가 핵심 자료. 협의 분할은 기존 협의서를 보완하는 형태가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분할·신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산·분할·신고·송금 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해외 자산 자료 확보 (영사관·은행, 1~3개월)</strong> — 사망진단서·상속관계 입증서·번역공증.</li>\n<li><strong>2단계 — 상속인 협의 (1~2개월)</strong> — 추가 협의서 작성·인감.</li>\n<li><strong>3단계 — 상속세 추가 신고 (가산세 자료 포함)</strong> — 국세청 홈택스 또는 세무서.</li>\n<li><strong>4단계 — 외환신고·송금 (외국환거래법)</strong> — 5만 달러 초과 신고 의무.</li>\n<li><strong>5단계 — 합의 불성립 시 가정법원 심판</strong> — 분할 심판 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 자산 추가 상속 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·자산·번역 갈래입니다.</strong></p>\n<ul>\n<li><strong>사망진단서·기본증명서·가족관계증명서</strong> — 상속 입증.</li>\n<li><strong>해외 자산 잔액·등기 자료</strong> — 영사관·해외 금융기관.</li>\n<li><strong>기존 상속재산 분할 협의서</strong> — 기존 분할 내역.</li>\n<li><strong>번역공증 자료</strong> — 한국 신고용.</li>\n<li><strong>상속세 신고서·납부 자료</strong> — 기존 신고 + 추가.</li>\n<li><strong>외환신고 자료 (5만 달러 초과)</strong> — 외국환거래법.</li>\n<li><strong>상속인 인감·신분증</strong> — 협의 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해외 자산 정보를 영사관·해외 금융기관 협조로 확보하는 데 통상 1~3개월 걸리는 영역. 세금 가산세 우려로 조속한 신고가 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"늦게 발견해서 가산세 면제" 오해</strong> — 가산세 면제는 별도 사유 영역. 늦은 발견 자체는 면제 사유 아님.</li>\n<li><strong>"본인이 발견했으니 본인 몫" 주장 반박</strong> — 상속재산은 법정상속분 대상. 발견자 우선 아님.</li>\n<li><strong>해외 송금 5만 달러 초과 신고</strong> — 미신고 시 외국환거래법 위반.</li>\n<li><strong>이중 과세 방지</strong> — 한·미 등 조세협약 활용. 외국 납부세 공제 가능.</li>\n<li><strong>협의 불성립 시 심판</strong> — 가정법원 분할 심판 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 상속·분할 무료 상담.</li>\n<li><strong>국세청 126</strong> — 상속세 안내.</li>\n<li><strong>외교부 영사콜센터 +82-2-3210-0404</strong> — 해외 사망·자산 협조.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산 사후 발견 시 추가 분할·신고',
        summary:
          '대법원 2024다44693 사건 영역에서 법원은 상속개시 후 새로 발견된 재산은 기존 분할 협의 또는 법정상속분에 따라 추가 분할 대상이며, 상속세 신고 기한 도과 후 사후 발견된 자산은 추가 신고 + 가산세 영역에 해당한다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '\'늦게 발견했다\'가 면제 사유는 아닌 영역. 조속한 추가 신고·협의가 효율적인 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '해외 계좌가 있는지 어떻게 확인하나요?',
        answer:
          '<strong>해당 국가 금융기관·영사관 협조 요청이 핵심입니다.</strong> 사망진단서·상속관계 입증서·번역공증.',
      },
      {
        question: '상속세 신고 6개월 이미 지났어요',
        answer:
          '<strong>추가 신고 + 가산세 영역입니다.</strong> 가산세는 무신고·과소신고에 따라 차이. 조속히 신고할수록 가산세 작음.',
      },
      {
        question: '본인이 발견했는데 몫이 더 큰가요?',
        answer:
          '<strong>아닙니다.</strong> 법정상속분 대상. 발견자 우선권은 없음.',
      },
      {
        question: '해외 송금은 어떻게 하나요?',
        answer:
          '<strong>5만 달러 초과 외환신고 의무입니다.</strong> 한국 은행에서 송금 절차 안내. 외국환거래법 준수.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속세 가산세', href: '/guide/inheritance/inheritance-tax-late-filing-penalty-relief' },
      { label: '상속 재분할', href: '/guide/inheritance/inheritance-tax-after-6months-redivision-claim' },
      { label: '숨은 자산 발견', href: '/guide/inheritance/inheritance-trust-account-hidden-asset' },
      { label: '상속 종합 가이드', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
    ],
  },

  // ─── 6. inheritance / inheritance-survivor-pension-priority-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-survivor-pension-priority-track',
    keyword: '유족연금 수급 우선권',
    questionKeyword: '돌아가신 아버지 연금을 어머니가 받는데 사망 전 별거 5년이었어요. 재혼한 자녀도 받을 수 있나요?',
    ctaKeyword: '유족연금 수급 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '유족연금 수급 우선권 — 5단계 자격·분배 | 로앤가이드',
      description:
        '국민연금·공무원연금·군인연금 유족연금 수급 우선권과 재혼·동거·별거 사유 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30년 공무원 생활하신 아버지가 돌아가셨어요. 어머니는 5년 전부터 별거 중이었고 사실상 따로 살았습니다. 재혼한 새어머니가 \'사망 직전 1년 함께 살았으니 유족연금 받아야 한다\'고 주장하고 있어요. 자녀도 미성년이라 일부 청구 가능하다는 말도 들었습니다." 국민연금·공무원연금·군인연금은 유족연금 수급권자 순위가 각 법에 따라 다른 영역입니다. 공무원연금법 제51조는 배우자(혼인기간 1년 이상)·미성년 자녀·부모·손자녀·조부모 순서로 수급권자 정함. 별거 중인 배우자도 법적 혼인 관계 유지 시 수급권 인정 사례가 많지만, \'사실상 혼인관계 해소\' 정황이 입증되면 다툼 자료. 재혼·사실혼 배우자는 일정 요건 충족 시 수급 가능하지만 별도 입증 필요한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 유족연금 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금 종류·수급권자·혼인기간·별거·재혼 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연금 종류 (국민·공무원·군인·사학·교직원)</strong> — 각 법에 따라 수급권자 순위·요건 다름.</li>\n<li><strong>② 수급권자 순위 (배우자·자녀·부모)</strong> — 우선순위 명시.</li>\n<li><strong>③ 혼인기간 (공무원연금 1년 이상)</strong> — 일정 기간 미만이면 수급 제한 영역.</li>\n<li><strong>④ 별거·사실상 혼인관계 해소</strong> — 별거 기간·정황 자료. 해소 입증 시 수급권 다툼.</li>\n<li><strong>⑤ 재혼·사실혼 배우자</strong> — 사실혼 입증 자료. 동거 기간·생활비·자녀.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 별거 중 법적 혼인 유지 사례라도 \'사실상 혼인관계 해소\' 입증 시 수급권 다툼 가능 영역. 재혼·사실혼 배우자는 별도 입증 자료가 필요한 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 수급 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청·자료·심사·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연금공단 신청 (각 공단)</strong> — 국민연금공단·공무원연금공단 등.</li>\n<li><strong>2단계 — 신청 자료 (혼인·동거 입증)</strong> — 혼인관계증명서·전입신고·생활비.</li>\n<li><strong>3단계 — 심사·결정 (1~3개월)</strong> — 공단 심사. 수급권자 결정.</li>\n<li><strong>4단계 — 이의 신청 (결정 통지 90일 내)</strong> — 공단 이의신청.</li>\n<li><strong>5단계 — 행정 소송 (이의 기각 시)</strong> — 행정법원.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유족연금 수급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·혼인·동거 갈래입니다.</strong></p>\n<ul>\n<li><strong>사망진단서·기본증명서</strong> — 사망 사실.</li>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 혼인 상태.</li>\n<li><strong>전입신고·주민등록등본 이력</strong> — 별거·동거 자료.</li>\n<li><strong>생활비 자료 (이체·세대 비용)</strong> — 사실혼 입증.</li>\n<li><strong>자녀 출생증명·학교 자료</strong> — 자녀 양육.</li>\n<li><strong>각 연금공단 신청 양식</strong> — 공단별.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼 배우자가 동거 기간 + 생활비 + 사회적 인식(가족·이웃 인지)을 자료로 모으면 사실혼 입증이 단단해지는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"별거 5년이라 수급권 없음" 주장 반박</strong> — 법적 혼인 유지면 원칙적 수급권. \'사실상 해소\' 입증 부담은 다투는 측.</li>\n<li><strong>"사실혼이라 수급권 있음" 주장 반박</strong> — 입증 자료 (동거·생활비) 부족 시 다툼.</li>\n<li><strong>자녀 미성년 수급</strong> — 자녀도 일부 수급권 영역. 배우자와 분할.</li>\n<li><strong>재혼 후 사망</strong> — 재혼한 배우자가 우선 영역. 다만 혼인기간 요건 충족 필요.</li>\n<li><strong>이의신청·행정소송</strong> — 공단 결정 불복 시.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국민연금공단 1355</strong> — 유족연금 안내.</li>\n<li><strong>공무원연금공단 1588-4321</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 별거 중 배우자 유족연금 수급권',
        summary:
          '대법원 2003다7064 사건 영역에서 법원은 별거 중인 배우자라도 법적 혼인 관계가 유지되는 한 원칙적으로 유족연금 수급권이 인정되지만, 사실상 혼인관계 해소(이혼 합의·재산 분할·장기 별거)가 입증되는 경우 수급권 다툼이 가능하다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '별거 자체가 수급권 박탈 사유는 아닌 영역. \'사실상 혼인관계 해소\' 입증이 다툼의 핵심 자료가 되는 사례.',
      },
    ],
    faq: [
      {
        question: '어머니가 5년 별거 중인데 수급권 있나요?',
        answer:
          '<strong>원칙적 수급권 있습니다.</strong> 법적 혼인 유지 중이면 별거 자체가 박탈 사유 아님. \'사실상 해소\' 입증 부담은 다투는 측.',
      },
      {
        question: '재혼한 새어머니가 \"1년 함께 살았으니 받는다\"고 합니다',
        answer:
          '<strong>공무원연금 1년 이상 혼인 요건 충족 필요합니다.</strong> 사실혼이면 별도 입증 자료. 동거·생활비·사회적 인식.',
      },
      {
        question: '자녀도 일부 받을 수 있나요?',
        answer:
          '<strong>미성년 자녀는 일부 수급 가능 영역입니다.</strong> 각 연금법별 분배 비율 다름. 공단 안내.',
      },
      {
        question: '공단이 수급권 거부하면 어디로 가나요?',
        answer:
          '<strong>90일 내 이의신청 → 행정소송.</strong> 사실상 해소·사실혼 입증 자료 보강.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 신고', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속 종합', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '상속 사후 분할', href: '/guide/inheritance/inheritance-tax-after-6months-redivision-claim' },
      { label: '계모·계부 상속', href: '/guide/inheritance/inheritance-stepfather-relationship-share' },
    ],
  },

  // ─── 7. inheritance / inheritance-handwritten-will-witness-defect-validity-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-handwritten-will-witness-defect-validity-track',
    keyword: '자필유언 증인 결격 효력',
    questionKeyword: '아버지 자필유언이 발견됐는데 증인 1명이 상속인이래요. 효력 있나요?',
    ctaKeyword: '자필유언 증인 결격 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '자필유언 증인 결격 — 5단계 효력 다툼 | 로앤가이드',
      description:
        '자필유언·녹음유언·공정증서 유언의 증인 결격·형식 흠결로 효력 다툼이 생긴 경우 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 아버지 책장에서 자필유언이 발견됐어요. \'장남에게 본가 부동산을 단독 상속한다\'는 내용입니다. 그런데 증인 두 명 중 한 명이 장남 본인 이름으로 적혀 있어요. 다른 형제들은 \'이런 유언은 무효\'라며 다툼이 시작됐습니다." 민법 제1066조는 자필증서 유언의 요건(전문·연월일·주소·성명 자필 + 날인)을 명시하고, 제1072조는 유언 증인의 결격 사유를 정합니다. 증인은 \'미성년자·피성년후견인·유언으로 이익을 받을 자와 그 배우자·직계혈족\' 등은 결격. 자필유언은 증인이 법정 요건은 아니지만, 부속 자료(녹음·공증)에 증인이 있는 경우 그 증인의 결격은 별도 자료가 됩니다. 형식·요건 결함은 유언 효력 다툼·검인 절차의 핵심 자료. 가정법원 유언 검인 절차에서 형식 흠결 발견 시 효력 다툼 트랙이 열리는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 자필유언 효력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형식 요건·자필·연월일·주소·날인 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전문 자필</strong> — 본인이 직접 쓴 필체. 타이핑·대필 무효.</li>\n<li><strong>② 연월일 명시</strong> — 정확한 작성일. 누락 시 무효.</li>\n<li><strong>③ 주소 명시</strong> — 자필. 누락 시 무효.</li>\n<li><strong>④ 성명·날인</strong> — 본인 성명·인감 또는 지문. 누락 시 무효.</li>\n<li><strong>⑤ 증인 결격 (부속 자료)</strong> — 자필유언은 증인 법정 요건 아니지만 부속 자료(녹음·공증) 증인 결격 시 별도 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자필유언은 5가지 요건(전문 자필·연월일·주소·성명·날인) 중 하나라도 결함 있으면 효력 다툼 영역. 검인 절차에서 형식 점검하는 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 효력 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검인·소송·필적 감정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언 검인 신청 (가정법원)</strong> — 발견 후 지체 없이.</li>\n<li><strong>2단계 — 형식 점검·필적 감정 (1~3개월)</strong> — 자필성 입증.</li>\n<li><strong>3단계 — 유언 무효 확인 소송 (별도 민사)</strong> — 형식 흠결 주장.</li>\n<li><strong>4단계 — 상속재산 분할 (유언 무효 시 법정 분할)</strong> — 법정상속분 또는 새 협의.</li>\n<li><strong>5단계 — 유류분 청구 (유언 유효라도 별도 트랙)</strong> — 상속 개시 후 1년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자필유언 효력 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언·사망·필적 갈래입니다.</strong></p>\n<ul>\n<li><strong>자필유언 원본</strong> — 형식 점검 자료.</li>\n<li><strong>피상속인 자필 비교본 (편지·일기·서명)</strong> — 필적 감정.</li>\n<li><strong>사망진단서·기본증명서·가족관계증명서</strong> — 상속 입증.</li>\n<li><strong>피상속인 인감·서명 인영</strong> — 날인 비교.</li>\n<li><strong>상속인 전원 신분증·인감</strong> — 검인 절차.</li>\n<li><strong>증인 진술서 (부속 자료가 있는 경우)</strong> — 증인 결격 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자필 비교본을 보존해두면 필적 감정 단계가 단축됩니다. 일기·편지·서명이 자료. 피상속인 생전에 받은 자필 자료를 정리해두는 것이 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"증인이 상속인이라 무효" 주장</strong> — 자필유언 자체는 증인 요건 없음. 부속 자료 증인 결격은 별도 평가.</li>\n<li><strong>"연월일·주소 누락" 형식 흠결</strong> — 누락 시 무효 영역.</li>\n<li><strong>"필적 의심" 주장</strong> — 필적 감정. 자필 비교본 자료.</li>\n<li><strong>유류분 청구</strong> — 유언 유효라도 별도 청구 가능. 1년 시효.</li>\n<li><strong>검인 절차 미이행</strong> — 검인 없이 등기 진행 시 위법 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 유언·상속 무료 상담.</li>\n<li><strong>가정법원</strong> — 유언 검인 신청.</li>\n<li><strong>국립과학수사연구원</strong> — 필적 감정 의뢰.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자필유언 형식 요건 결함',
        summary:
          '대법원 2014다206 사건 영역에서 법원은 자필증서 유언은 민법 제1066조의 형식 요건(전문 자필·연월일·주소·성명·날인) 중 하나라도 결함이 있으면 효력이 부정되며, 형식 흠결은 검인 절차나 별도 유언 무효 확인 소송에서 다투어질 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '자필유언은 5가지 형식 요건 중 하나라도 결함 있으면 효력 다툼 영역. 자필유언은 증인 요건 자체가 없는 영역이라 \'증인 결격\' 주장은 별도 자료 평가가 필요한 사례.',
      },
    ],
    faq: [
      {
        question: '자필유언에 증인 두 명 적혀 있어요. 필수인가요?',
        answer:
          '<strong>자필유언은 증인 요건 없습니다.</strong> 5가지 형식 요건(전문 자필·연월일·주소·성명·날인)만 충족하면 유효 영역.',
      },
      {
        question: '연월일이 \"2025년 봄\"으로 적혀 있어요',
        answer:
          '<strong>월·일 명시 누락 시 무효 영역입니다.</strong> 정확한 연·월·일 자필 필요.',
      },
      {
        question: '필적이 의심돼요',
        answer:
          '<strong>필적 감정으로 입증 가능합니다.</strong> 자필 비교본 + 국립과학수사연구원 감정.',
      },
      {
        question: '유언이 무효라도 유류분 받을 수 있나요?',
        answer:
          '<strong>유언 유무 무관 유류분 청구 가능 영역입니다.</strong> 상속 개시 후 1년 시효. 별도 트랙.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유언 위조 검증', href: '/guide/inheritance/inheritance-will-forgery-verification-procedure' },
      { label: '유언 효력 다툼', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '유언 검인 절차', href: '/guide/inheritance/inheritance-will-probate-forgery-dispute' },
      { label: '상속 종합', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
    ],
  },
];
