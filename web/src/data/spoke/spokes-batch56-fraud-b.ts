import { SpokePage } from '../spoke-pages';

// batch56 fraud B — 2개:
// 1. MOOC 부트캠프 환불 거부
// 2. 학원 폐원 환불 거부 회수
//
// 고유 존재 이유:
// 1. 이 페이지는 100~500만원 부트캠프·MOOC를 결제 후 환불 거부받은 수강생이 학원법·전자상거래법 + 신용카드 청구이의 4단계 회수 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 학원이 갑작스럽게 폐원해 잔여 수강료가 환불되지 않은 피해자가 학원법 환불 + 사기 + 금감원 카드결제 항의 4단계 회수 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56FraudB: SpokePage[] = [
  // ─── 1. fraud / fraud-mooc-bootcamp-refund-block ───
  {
    domain: 'fraud',
    slug: 'fraud-mooc-bootcamp-refund-block',
    keyword: 'MOOC 부트캠프 환불 거부',
    questionKeyword: '300만원 부트캠프 결제 후 환불 거부됐어요. 학원법으로 회수 가능한가요?',
    ctaKeyword: '부트캠프 환불 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '부트캠프·MOOC 환불 거부 — 4단계 회수 트랙 | 로앤가이드',
      description:
        '부트캠프·MOOC 강의 환불을 거부받았다면 학원법 + 전자상거래법 + 신용카드 청구이의 4단계 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 부트캠프 300만원을 결제했는데 첫 강의 들어보니 광고와 너무 달랐어요. \'환불 가능한가요?\' 물었더니 약관에 \'환불 불가\'로 명시돼 있다며 거부합니다." 부트캠프·MOOC·인터넷 강의 환불 거부는 학원법(평생교육법) + 전자상거래법 + 약관규제법 + 신용카드 청구이의 4가지 트랙으로 회수 절차를 검토할 수 있는 영역입니다. 학원법 시행령 제18조 별표는 강의 진행 비율에 따른 환불 기준을 명시하고 있고, 약관에 \'환불 불가\'라고 일방 명시돼 있어도 약관규제법에 따라 무효 정황으로 평가될 여지가 있어요. 결제 후 7일 이내라면 전자상거래법 청약철회권도 함께 검토 가능하고, 신용카드 결제라면 카드사 청구이의 트랙도 결합 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 부트캠프 환불 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 학원법·전자상거래법·약관규제법·카드 청구이의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 학원법 시행령 환불 기준</strong> — 강의 진행 비율에 따른 환불 기준이 시행령 별표로 명시. 1/3 미만 진행 시 2/3 환불, 2/3 미만 진행 시 1/3 환불 영역.</li>\n<li><strong>② 전자상거래법 청약철회권 (제17조)</strong> — 결제 후 7일 이내라면 무조건 청약철회 가능 영역. 다만 콘텐츠 일부 사용 시 제한이 있는 사례.</li>\n<li><strong>③ 약관규제법 (제8조 등)</strong> — \'환불 불가\' 약관은 고객에게 부당하게 불리하면 무효 영역. 일방적 환불 거부 약관은 다툼 가능성 큰 영역.</li>\n<li><strong>④ 신용카드 청구이의 (여신전문금융업법 시행령 제19조의2)</strong> — 카드 결제 후 환불 거부 시 카드사에 청구이의 신청. 결제일로부터 일정 기간 내(통상 60일) 신청 가능한 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학원·부트캠프·MOOC가 \'평생교육법상 평생교육시설\' 또는 \'학원법상 학원\'에 해당한다면 환불 기준이 강행규정 영역. 약관에 환불 불가라고 명시돼 있어도 강행규정 위반은 무효.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 환불 요청 → 카드 청구이의 → 분쟁조정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 결제 영수증·계약서·약관·강의 진행 비율·광고 vs 실제 차이 자료.</li>\n<li><strong>2단계 — 환불 요청 내용증명 (1주 내)</strong> — 학원법 시행령 별표 기준 환불액 명시 + 거부 시 분쟁조정·민사 절차 예고.</li>\n<li><strong>3단계 — 신용카드 청구이의 (60일 내)</strong> — 카드사에 환불 거부 사유 + 자료 첨부 제출. 카드사 자체 조사 + 학원 측 답변 비교.</li>\n<li><strong>4단계 — 한국소비자원 분쟁조정 (1372)</strong> — 카드 청구이의가 한계인 사안은 소비자 분쟁조정. 무료, 평균 30~60일.</li>\n<li><strong>5단계 — 민사 청구 (소액심판·지급명령)</strong> — 분쟁조정 결렬 시 민사. 청구액 무관 지급명령, 3,000만원 이하 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">부트캠프 환불 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 자료 + 환불 요청 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>결제 영수증·카드 명세서</strong> — 결제일·금액·결제수단.</li>\n<li><strong>계약서·약관 사본</strong> — 환불 조항·강의 일정.</li>\n<li><strong>강의 진행 자료</strong> — 수강일·진행 비율 (영상·LMS 기록).</li>\n<li><strong>광고 vs 실제 차이 자료</strong> — 광고 캡처 + 실제 강의 화면.</li>\n<li><strong>환불 요청·거부 정황</strong> — 카톡·이메일·통화 기록.</li>\n<li><strong>학원 사업자등록·평생교육시설 등록 정보</strong> — 학원법 적용 여부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 강의 시작 후라도 학원법 시행령 별표는 진행 비율에 따른 환불을 강행규정으로 보고 있어, 1/3 진행 후 환불 요청해도 2/3 환불 가능한 사례가 일반적인 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 학원 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"약관에 환불 불가 명시" 주장 반박</strong> — 약관규제법상 부당하게 불리한 조항은 무효 정황. 학원법 시행령 별표는 강행규정 영역.</li>\n<li><strong>"평생교육시설이 아니라 일반 사업자" 주장 반박</strong> — 학원법·평생교육법 미적용 시 전자상거래법 + 약관규제법 트랙으로 분기. 적용 법령은 달라도 환불 다툼은 가능 영역.</li>\n<li><strong>"수강 일부 진행됐으니 환불 어렵다" 주장 반박</strong> — 진행 비율에 따른 부분 환불은 강행규정. 일부 진행 후에도 잔여분 환불 가능.</li>\n<li><strong>강의 자체 사기는 별도 트랙</strong> — 광고와 실제 차이가 크고 처음부터 사기 의도였다면 형법 제347조 사기죄 결합 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong> — 환불 분쟁조정 무료.</li>\n<li><strong>대한법률구조공단 132</strong> — 약관·소비자 무료 상담.</li>\n<li><strong>각 시·도 교육청</strong> — 학원법 위반 신고.</li>\n<li><strong>금융감독원 1332</strong> — 카드 청구이의 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 약관 환불 불가 조항의 효력',
        summary:
          '대법원 2014도2754 사건(대법원, 2019.04.03 선고)은 보험계약자가 보험금 편취를 위해 고지의무를 위반한 사안 등에서 일방 약관·고지의무의 효력을 다툰 사례입니다. 약관규제법은 고객에게 부당하게 불리한 조항을 무효로 보고, 학원법 시행령 별표는 강의 진행 비율에 따른 환불 기준을 강행규정으로 봅니다. 부트캠프 약관에 \'환불 불가\'로 명시돼 있어도 강행규정 위반 영역으로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: '부트캠프·MOOC 환불 거부는 학원법·약관규제법·전자상거래법 결합 영역이라, 결제·계약·진행 자료를 정리하면 4단계 회수 트랙 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '약관에 "환불 불가"라고 명시돼 있어요',
        answer:
          '<strong>강행규정 위반 약관은 무효 정황입니다.</strong> 학원법 시행령 별표·약관규제법이 적용되면 환불 청구 가능 영역. 일방 약관 만으로 환불 봉쇄되지 않는 사례가 많습니다.',
      },
      {
        question: '강의 1/3 들었는데 환불 가능한가요?',
        answer:
          '<strong>학원법 시행령 별표상 1/3 진행 시 2/3 환불 가능 영역입니다.</strong> 부분 환불 트랙. 약관에 \'1/3 진행 후 환불 불가\'라도 강행규정 위반.',
      },
      {
        question: '카드사가 청구이의를 거부하면 어떻게 하나요?',
        answer:
          '<strong>금감원 1332 민원 + 분쟁조정으로 재요청 가능합니다.</strong> 카드사 1차 거부는 자료 부족인 경우가 많아, 학원법 시행령 별표 + 환불 요청 자료 추가 제출 후 재신청.',
      },
      {
        question: '학원이 답이 없어요. 어디로 가야 하나요?',
        answer:
          '<strong>한국소비자원 1372 분쟁조정이 가장 빠른 경로입니다.</strong> 무료, 평균 30~60일 처리. 분쟁조정 결렬 시 민사 트랙으로 분기.',
      },
      {
        question: '광고와 강의 내용이 너무 달라요. 사기 신고 가능한가요?',
        answer:
          '<strong>광고 vs 실제 차이가 크고 처음부터 사기 의도였다면 사기 결합 가능합니다.</strong> 광고 캡처 + 실제 강의 비교 자료 + 다른 수강생 정황 결합으로 사기 신고 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '학원 수강료 환불 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '인터넷 자격강의 환불', href: '/guide/fraud/fraud-online-cert-class-refund' },
      { label: '온라인 쇼핑몰 환불 사기', href: '/guide/fraud/fraud-online-shopping-fraud-refund' },
      { label: '구독 자동결제 환불', href: '/guide/fraud/fraud-subscription-autorenewal-deceptive' },
      { label: '온라인 카페 회비 환불', href: '/guide/fraud/fraud-online-cafe-membership-fee-recovery' },
    ],
  },

  // ─── 2. fraud / fraud-cram-school-sudden-close-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-cram-school-sudden-close-recovery',
    keyword: '학원 폐원 수강료 환불',
    questionKeyword: '학원이 갑자기 폐원했는데 잔여 수강료 200만원 환불을 안 해줘요. 회수 가능한가요?',
    ctaKeyword: '학원 폐원 환불 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '학원 갑자기 폐원 — 잔여 수강료 4단계 회수 | 로앤가이드',
      description:
        '학원이 갑작스럽게 폐원해 잔여 수강료가 환불되지 않았다면 학원법 환불 + 사기 + 카드 청구이의 4단계 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 학원 등록비 360만원을 일시 결제했어요. 3개월 진행 후 갑자기 \'경영 사정으로 폐원\' 공지가 떴고, 원장은 잠적했습니다." 학원 갑작스러운 폐원은 학원법 시행령 환불 기준 + 형법 제347조 사기죄 + 약관규제법 + 신용카드 청구이의 결합 영역입니다. 폐원 직전까지 수강료를 받고 폐원 후 환불을 거부한 정황이라면 사기 의도 가능성도 검토할 수 있는 영역이에요. 학원장이 잠적해도 사업자 본인 명의 부동산·계좌가 있다면 가처분·강제집행 트랙이 열리고, 같은 학원에 다수 피해자가 있으면 공동 고소단 구성으로 회수 가능성을 높일 수 있는 사례가 있어요.</p>',
    sections: [
      {
        title: 'Q. 학원 폐원 환불 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 학원법 환불·사기 고소·카드 청구이의·민사 회수 4단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 학원법 시행령 환불</strong> — 학원이 일방적으로 폐원해 강의를 제공하지 못하면 잔여분 100% 환불 영역. 학원법 시행령 별표 적용.</li>\n<li><strong>② 사기죄 검토 (형법 제347조)</strong> — 폐원 직전까지 수강료를 받고 폐원 후 환불 거부했다면 사기 의도 정황. 폐원 시점·결제 시점 비교가 핵심.</li>\n<li><strong>③ 신용카드 청구이의</strong> — 카드 결제 시 카드사에 청구이의 신청. \'서비스 미제공\'이 명확한 사례라 인정 가능성 높은 영역.</li>\n<li><strong>④ 민사 회수·강제집행</strong> — 학원장 본인 명의 부동산·차량·계좌가 있다면 가처분·강제집행. 공동 고소단 구성 시 효과 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학원장이 잠적해도 사업자등록 + 부동산 명의는 추적 가능한 영역. 송금일·폐원 시점·환불 거부 정황을 시간순 정리하면 사기 + 민사 두 트랙 동시 진행 가능 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 카드 청구이의 → 사기 고소 → 공동 대응 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 결제 영수증·계약서·폐원 공지·학원장 잠적 정황·다른 피해자 정황.</li>\n<li><strong>2단계 — 신용카드 청구이의 (60일 내)</strong> — 카드사에 \'서비스 미제공\' 청구이의. 폐원 공지 + 잔여 수강 일수 명시.</li>\n<li><strong>3단계 — 사기 고소 (2주 내)</strong> — 관할 경찰서 또는 ecrm.police.go.kr 신고. 폐원 직전 등록자 다수면 사기 의도 강한 정황.</li>\n<li><strong>4단계 — 공동 대응단 구성 (1개월)</strong> — 같은 학원 피해자 모집. 카카오톡 단톡·온라인 카페 활용. 공동 고소단 + 민사 공동 청구.</li>\n<li><strong>5단계 — 민사 회수 (3~6개월)</strong> — 학원장 명의 자산 추적 → 가처분 → 강제집행. 청구액 무관 지급명령, 3,000만원 이하 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 폐원 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제 자료 + 폐원 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>결제 영수증·카드 명세서</strong> — 결제일·금액·결제수단.</li>\n<li><strong>학원 등록 계약서</strong> — 강의 일정·환불 조항.</li>\n<li><strong>폐원 공지·SMS·이메일</strong> — 폐원 시점 입증.</li>\n<li><strong>학원장·직원 잠적 정황</strong> — 카톡·통화 기록 단절.</li>\n<li><strong>다른 피해자 정황</strong> — 카페·SNS 같은 피해 게시글.</li>\n<li><strong>학원 사업자등록 정보</strong> — 사업자번호·등록 주소·운영자 정보.</li>\n<li><strong>학원장 명의 자산 정황</strong> — 부동산·차량 정보 (등기부등본 700원).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐원 직전 1~2개월 이내에 신규 등록자가 다수였다면 사기 의도의 강한 정황. 학원 SNS·블로그 폐원 직전 광고 캡처가 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 학원장 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"불가항력 폐원이라 책임 없다" 주장 반박</strong> — 임대료 미납·세금 체납 등 누적 정황이라면 사전 인지 가능 영역. 사기 의도 다툼.</li>\n<li><strong>"개인 파산 신청 중" 주장 주의</strong> — 파산절차로 채권 면책 시도 가능성. 파산 신청 전후 계좌 이동 정황 추적이 핵심.</li>\n<li><strong>"환불은 다음달에" 회피 주장 대응</strong> — 시간 끌기로 시효 도과·자산 은닉 시도. 즉시 가처분 트랙으로 봉쇄.</li>\n<li><strong>학원장 사업자 vs 법인 주의</strong> — 법인 학원이라면 법인 자산 + 임원 책임 검토. 사업자 개인 학원이라면 본인 명의 자산 추적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>한국소비자원 1372</strong> — 환불 분쟁조정.</li>\n<li><strong>각 시·도 교육청</strong> — 학원법 위반 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 성립과 처분의사·기망행위',
        summary:
          '대법원 2016도13362 사건(대법원, 2017.02.16 선고)에서 법원은 사기죄에서 기망행위로 인한 착오로 처분문서에 서명 또는 날인한 경우 그 행위가 사기죄의 처분행위에 해당한다고 판시했습니다. 학원이 폐원 직전까지 수강료를 받으며 정상 운영을 가장한 행위가 처분행위 유도 기망에 해당한다면 사기죄 성립 가능성이 검토되는 영역으로 평가될 여지가 있습니다.',
        takeaway: '학원 갑작스러운 폐원은 폐원 시점·결제 시점·환불 거부 정황을 시간순 정리하면 사기 + 학원법 환불 결합 회수 트랙이 열리는 사례가 있어, 자료 보존이 회수의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '학원이 \'법인 파산\' 신청하면 회수 못 받나요?',
        answer:
          '<strong>법인 파산 시 일반 채권은 후순위라 회수가 어려운 사례가 있습니다.</strong> 다만 학원장 개인 사기 책임은 별도. 사기 형사 + 학원장 개인 자산 추적 트랙은 유효한 영역.',
      },
      {
        question: '카드사가 \'서비스 일부 제공돼서 청구이의 어렵다\'고 합니다',
        answer:
          '<strong>잔여 수강분에 한해 청구이의 가능 영역입니다.</strong> 6개월 중 3개월 진행이면 잔여 3개월분 청구이의. 폐원 공지 + 잔여 일수 명시 자료 보강.',
      },
      {
        question: '같은 피해자 모집 어떻게 하나요?',
        answer:
          '<strong>학원 SNS·네이버 카페·디시인사이드에 피해 사례 게시글이 일반적입니다.</strong> 본인 피해 게시 + 카카오톡 오픈채팅 모집. 50명 이상 모이면 공동 고소단 영역.',
      },
      {
        question: '학원장이 외국으로 도주했어요',
        answer:
          '<strong>인터폴 적색수배 + 법무부 협조 트랙으로 추적 가능합니다.</strong> 다만 시간이 오래 걸리는 영역. 국내 자산 가처분이 회수 가능성 핵심.',
      },
      {
        question: '시효는 얼마인가요?',
        answer:
          '<strong>사기죄 공소시효 10년, 민사 부당이득반환 10년 시효입니다.</strong> 다만 빠른 자료 보존 + 가처분이 회수 가능성에 결정적이라 시효보다 빠른 행동이 핵심.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '학원 수강료 환불 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '헬스장 폐업 환불', href: '/guide/fraud/fraud-gym-closure-membership-refund' },
      { label: '부트캠프 환불 거부', href: '/guide/fraud/fraud-mooc-bootcamp-refund-block' },
      { label: '인터넷 자격강의 환불', href: '/guide/fraud/fraud-online-cert-class-refund' },
      { label: '구독 자동결제 환불', href: '/guide/fraud/fraud-subscription-autorenewal-deceptive' },
    ],
  },
];
