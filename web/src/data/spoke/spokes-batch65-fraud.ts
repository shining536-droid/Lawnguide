import { SpokePage } from '../spoke-pages';

// batch65 fraud — 5개 (2026-05-15)
//
// 고유 존재 이유:
// 1. fraud-investment-platform-yield-fake-display-track — 투자 플랫폼이 수익률 화면을 조작해 표시한 유형 (기존 crypto-exchange-withdrawal / dating-romance 와 분기: 본 페이지는 "가짜 수익률 화면" 표시 트랙).
// 2. fraud-funeral-prepay-cancel-refund-refuse-track — 상조서비스 해약 환급 거부 (할부거래법 + 선불식 환급률 규정, 신규 도메인).
// 3. fraud-medical-device-elderly-doortodoor-track — 노인 대상 의료기기 방문판매 (방문판매법 + 14일 청약철회·고령자 보호, 신규 피해자층).
// 4. fraud-overseas-job-recruitment-broker-fee-vanish-track — 해외취업 알선 브로커 수수료 가로채기 (직업안정법, 기존 job-headhunter 와 분기: 국내가 아니라 해외 알선).
// 5. fraud-nft-game-item-rugpull-developer-flee-track — NFT 게임 아이템 러그풀, 개발사 잠적 (기존 crypto-exchange 와 분기: 거래소가 아니라 NFT 발행·게임 운영사 잠적).

export const spokesBatch65Fraud: SpokePage[] = [
  // ─── 1. fraud-investment-platform-yield-fake-display-track ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-platform-yield-fake-display-track',
    keyword: '투자 플랫폼 수익률 조작',
    questionKeyword: '투자 플랫폼 앱에서 수익률 화면이 가짜였어요. 사기로 신고 가능한가요?',
    ctaKeyword: '투자 플랫폼 수익률 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '투자 앱 수익률 조작 — 5단계 사기·환수 다툼 | 로앤가이드',
      description:
        '투자 플랫폼이 수익률 화면을 조작해 표시했다면 사기·자본시장법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'AI 알고리즘 자동매매로 월 8% 수익 보장\'이라는 광고에 끌려 투자 앱에 1,000만원 입금. 앱 안 화면에는 매일 수익이 차곡차곡 쌓이는데, 막상 출금 요청하면 \'세금 정산 중\' \'시스템 점검\'으로 미루더니 어느 날 앱이 통째로 사라졌어요." 앱 내 수익률 화면을 임의로 조작해 표시하는 것은 ① 사기죄(형법 347조) ② 유사수신행위 규제법 ③ 자본시장법 무인가 영업 ④ 전기통신금융사기 특별법 + 피해금 환급 트랙. 출금 거부·앱 잠적·다수 피해자 패턴이 결합되면 편취의 고의가 강하게 추정되는 영역. 대응은 ① 앱·이체 자료 ② 금감원·금융사기 신고 ③ 사이버 고소 ④ 환급 신청 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 투자 앱 수익률 조작 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·환급·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 앱 화면·이체 자료 보존</strong> — 수익률 캡처·출금 거부 메시지.</li>\n<li><strong>② 금감원 불법사금융 1332 신고</strong> — 유사수신·무인가 영업.</li>\n<li><strong>③ 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 명단.</li>\n<li><strong>④ 전기통신금융사기 환급 신청</strong> — 계좌 지급정지 + 채권소멸 공고.</li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 사기 시 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 앱 안에서만 수익이 \"보이는\" 상태가 핵심 기망. 출금 거부 패턴 + 다수 피해자 동일 경험 입증이 사기 입증의 결정적 사정으로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 앱·이체 자료 보존 (즉시)</strong> — 수익률 화면 캡처·이체·광고·앱 ID.</li>\n<li><strong>2단계 — 금감원 1332 신고 (1일 내)</strong> — 유사수신·무인가 투자업.</li>\n<li><strong>3단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 사기 + 자본시장법.</li>\n<li><strong>4단계 — 피해금 환급 신청 (보이스피싱법 준용 검토)</strong> — 계좌 지급정지·채권소멸 공고.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효)</strong> — 단독·집단 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자 앱 수익률 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·계좌·광고 갈래입니다.</strong></p>\n<ul>\n<li><strong>앱 화면 캡처 (수익률·잔고·출금 거부 메시지)</strong></li>\n<li><strong>입금 이체 내역·계좌번호</strong></li>\n<li><strong>광고·SNS·텔레그램 채팅방 캡처</strong></li>\n<li><strong>가입 안내 문자·메일·계약서</strong></li>\n<li><strong>같은 시기 다른 피해자 명단·진술서</strong></li>\n<li><strong>업체명·앱 마켓 정보·도메인</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 텔레그램 \"수익 인증방\"에서 같은 패턴 피해자 모이는 단톡방 검색해서 명단 확보. 다수 피해자 + 동일 출금 거부 패턴이 사기 입증 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"앱 안 수익" 입증</strong> — 실제로는 화면만 조작된 가짜 잔고.</li>\n<li><strong>자본시장법 무인가</strong> — 금융위 인가 없이 투자일임·유사수신.</li>\n<li><strong>편취의 고의</strong> — 출금 거부·잠적·다수 피해 입증.</li>\n<li><strong>피해금 환급</strong> — 계좌 지급정지 + 채권소멸 공고 트랙.</li>\n<li><strong>해외 운영사</strong> — 국제 수사 공조 필요한 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유사수신 + 자본시장법 + 사기 경합',
        summary:
          '대법원 2023도1014(대법원, 2023.05.18 선고) 영역에서 법원은 무인가 투자업·유사수신 행위로 자금을 모집하면서 실제 운용이나 수익 산출이 이루어지지 않는 사정이 인정될 수 있는 경우 사기죄·유사수신행위규제법·자본시장법이 경합범으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"앱 안 수익"만 보이고 실제 운용 없는 구조는 사기 + 유사수신 + 자본시장법 경합. 출금 거부 + 잠적 패턴이 결정적.',
      },
    ],
    faq: [
      {
        question: '앱이 사라져 운영사 신원도 모릅니다',
        answer:
          '<strong>계좌·도메인·앱 마켓 정보로 추적 가능합니다.</strong> 경찰 사이버수사 + 통신사 협조 트랙.',
      },
      {
        question: '"세금 정산 중"이라며 추가 입금을 요구합니다',
        answer:
          '<strong>전형적 2차 사기 패턴입니다.</strong> 추가 입금 금지 + 즉시 신고하세요.',
      },
      {
        question: '계좌 지급정지는 어떻게 신청하나요?',
        answer:
          '<strong>경찰 사건사고사실확인원 발급 후 송금 은행에 신청합니다.</strong> 빠를수록 환급률이 높은 영역.',
      },
      {
        question: '해외 거래소·해외 앱이면 신고 불가인가요?',
        answer:
          '<strong>국내 피해자라면 국내 경찰 신고 가능합니다.</strong> 국제 수사 공조 트랙 검토.',
      },
      {
        question: '소액 피해자도 환급 신청 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 다수 피해자 합산으로 집단 신청·집단 고소 트랙이 효과적입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voicephishing-refund' },
      { label: '유사수신 신고', href: '/guide/fraud/fraud-illegal-fundraising' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 2. fraud-funeral-prepay-cancel-refund-refuse-track ───
  {
    domain: 'fraud',
    slug: 'fraud-funeral-prepay-cancel-refund-refuse-track',
    keyword: '상조서비스 해약 환급 거부',
    questionKeyword: '상조서비스 10년간 납입했는데 해약 환급이 거의 없다고 합니다. 받을 수 있나요?',
    ctaKeyword: '상조 환급 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상조 해약 환급 거부 — 5단계 할부거래법·환급률 다툼 | 로앤가이드',
      description:
        '상조서비스 해약 환급이 거부되거나 턱없이 적다면 할부거래법·환급률 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'안심 상조\'에 매월 4만원씩 10년간 480만원 납입. 가정 사정으로 해약 요청하니 \'관리비·수당 제외하면 환급 100만원도 안 된다\'고 통보. 약관에 \'중도해지 환급률 30%\'라 적혀 있는데, 할부거래법 환급률 기준은 훨씬 더 높다고 들었어요." 선불식 할부거래(상조)는 ① 할부거래법 상 법정 환급률 기준 ② 영업·관리비 공제 한도 ③ 해약 환급 의무 위반 시 시정명령·과징금 ④ 공정거래위원회 신고 + 분쟁조정 트랙이 핵심. 약관이 법정 환급률보다 낮으면 그 부분이 무효로 평가되는 영역. 일부 업체는 보전금(소비자피해보상보험·예치금) 미이행 + 폐업 시 사기 가능성도 결합. 대응은 ① 약관·납입 자료 ② 공정위·소비자원 ③ 형사 고소 ④ 카드 항변 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상조 해약 환급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약관·환급률·신고·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약관·납입 자료 확보</strong> — 가입계약서·납입 영수증.</li>\n<li><strong>② 법정 환급률 비교</strong> — 할부거래법 시행령 별표 기준.</li>\n<li><strong>③ 공정위·소비자원 신고·조정</strong> — 환급률 미달 시.</li>\n<li><strong>④ 카드 항변 (할부 결제 시)</strong> — 20만원 이상·3개월 이상.</li>\n<li><strong>⑤ 민사 환급금 청구·사기 고소 (폐업 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 약관 환급률이 법정 기준보다 낮으면 그 차액은 청구 가능한 영역. 폐업·잠적 결합 시 선불식 할부거래법 위반 + 사기죄 결합 트랙으로 평가될 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 비교·신고·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약관·납입 자료 확보 (즉시)</strong> — 계약서·납입 영수증·환급 거부 답변.</li>\n<li><strong>2단계 — 법정 환급률 산출</strong> — 할부거래법 시행령 별표 환급률 표 적용.</li>\n<li><strong>3단계 — 공정위·소비자원 분쟁조정 (1372)</strong> — 차액 청구.</li>\n<li><strong>4단계 — 카드 항변 (할부 결제 시·90일 내)</strong></li>\n<li><strong>5단계 — 민사·형사 (폐업·보전금 미이행 시)</strong> — 10년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">상조 환급 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약관·납입·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>가입계약서·약관·청약서</strong></li>\n<li><strong>월별 납입 내역·자동이체 기록</strong></li>\n<li><strong>해약 요청 자료 (서면·내용증명)</strong></li>\n<li><strong>업체 환급 안내 답변</strong></li>\n<li><strong>업체 등록·예치 여부 (공정위 등록)</strong></li>\n<li><strong>소비자피해보상보험 가입 여부</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공정위 \"선불식 할부거래업체 정보공개\"에서 등록 여부·소비자피해보상보험 가입 여부·재무 건전성 확인. 등록 미이행·예치금 부족은 추가 다툼 사유.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법정 환급률</strong> — 시행령 별표 기준 미달 약관은 무효.</li>\n<li><strong>관리비·수당 공제 한도</strong> — 과도한 공제는 위법.</li>\n<li><strong>예치금 미이행</strong> — 50% 예치 의무 위반은 행정처분 사유.</li>\n<li><strong>폐업·잠적</strong> — 사기죄·할부거래법 위반 경합.</li>\n<li><strong>이관·합병</strong> — 승계업체 책임 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>공정거래위원회 소비자정책국</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상조·선불식 할부거래법 위반',
        summary:
          '대법원 2017도1284(대법원, 2017.05.30 선고) 영역에서 법원은 선불식 할부거래(상조) 사업자가 법령상 예치 의무·소비자피해보상 의무를 위반하면서 자금을 운용한 경우 할부거래법 위반과 함께 횡령·배임 등의 죄책이 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '예치 의무·환급 의무 위반은 형사 처벌 사유. 환급률 미달 약관은 무효 평가 영역.',
      },
    ],
    faq: [
      {
        question: '법정 환급률은 얼마인가요?',
        answer:
          '<strong>할부거래법 시행령 별표에 따라 납입 회차별 산정 기준이 정해져 있습니다.</strong> 통상 약관 환급률보다 높은 경우가 많아 비교 필요.',
      },
      {
        question: '업체가 합병·이관됐다고 합니다',
        answer:
          '<strong>승계업체에게 환급 의무가 이어집니다.</strong> 공정위 등록 여부 확인 필요.',
      },
      {
        question: '소비자피해보상보험은 무엇인가요?',
        answer:
          '<strong>업체가 폐업해도 납입금 50%까지 보상받을 수 있는 보전제도입니다.</strong>',
      },
      {
        question: '해약 요청을 서면으로 해야 하나요?',
        answer:
          '<strong>내용증명이 가장 안전합니다.</strong> 카톡·전화만으로는 입증 약함.',
      },
      {
        question: '소액이라 변호사 선임이 부담입니다',
        answer:
          '<strong>대한법률구조공단(132) 무료 상담을 활용하세요.</strong> 소비자원 분쟁조정도 비용 없음.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '할부거래 환급', href: '/guide/fraud/fraud-installment-refund' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 3. fraud-medical-device-elderly-doortodoor-track ───
  {
    domain: 'fraud',
    slug: 'fraud-medical-device-elderly-doortodoor-track',
    keyword: '노인 의료기기 방문판매',
    questionKeyword: '어머니가 방문판매로 의료기기 500만원 결제했어요. 환불 가능한가요?',
    ctaKeyword: '노인 방문판매 환불 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노인 의료기기 방문판매 — 5단계 청약철회·환불 다툼 | 로앤가이드',
      description:
        '고령자가 방문판매·체험판매로 의료기기·건강기기를 결제했다면 청약철회·환불 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"80세 어머니가 \'무료 건강체험\' 광고 보고 방문한 매장에서 안마의자·온열기 등 500만원을 24개월 할부로 결제하고 오셨어요. \'국가 인증\' \'질병 치료 효과\'라는 설명을 그대로 믿으셨는데, 막상 알아보니 의료기기 인증도 없고 효과도 과장이었어요." 방문판매법은 ① 14일 청약철회권 ② 고령자·취약계층 보호 강화 ③ 허위·과장 광고 시 환불 의무 ④ 무허가 의료기기 표시 시 약사법·의료기기법 위반이 핵심 트랙. 노인 대상 강매·심리적 압박 + 인지능력 저하 사정이 결합되면 사기죄 + 방문판매법 위반 평가가 가능한 영역. 대응은 ① 결제·광고 자료 ② 14일 청약철회 ③ 소비자원 조정 ④ 카드 항변 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 노인 방문판매 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·철회·신고·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·광고·홍보물 자료 확보</strong> — 영수증·전단·상담 녹음.</li>\n<li><strong>② 14일 청약철회 (방문판매법)</strong> — 사유 불문 환불.</li>\n<li><strong>③ 소비자원·공정위 신고</strong> — 허위·과장 시 환불 강제.</li>\n<li><strong>④ 카드 할부항변 (90일 내)</strong> — 분쟁 입증.</li>\n<li><strong>⑤ 민사·형사 (강매·기망 결합 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 방문판매는 14일 청약철회가 강력한 출발점. 고령자·인지능력 저하 사정 결합 시 단순 환불 + 사기죄 평가 트랙이 결합되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 철회·신고·환불 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (즉시)</strong> — 계약서·영수증·전단·매장 영상.</li>\n<li><strong>2단계 — 청약철회 내용증명 (14일 내)</strong> — 우체국 내용증명 발송.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정</strong> — 30~60일.</li>\n<li><strong>4단계 — 카드 할부항변 (90일 내)</strong> — 잔여 할부금 정지.</li>\n<li><strong>5단계 — 민사·사기 고소 (강매·기망 결합 시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">노인 방문판매 환불 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·광고·고령자 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서·할부 약정서</strong></li>\n<li><strong>영수증·카드 매출전표</strong></li>\n<li><strong>전단·홍보물·"국가 인증" 표시</strong></li>\n<li><strong>상담 녹음·매장 영상 (있을 시)</strong></li>\n<li><strong>제품 의료기기 인증 여부 확인 (식약처 조회)</strong></li>\n<li><strong>고령자 인지능력·진료기록 (있을 시)</strong></li>\n<li><strong>가족·대리인 진술서·신분증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 식약처 \"의료기기 정보포털\"에서 제품명·제조사 조회해 인증 미보유 확인 시 \"의료기기 허위 표시\" 추가 사유 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>14일 청약철회</strong> — 방문판매법상 강행규정.</li>\n<li><strong>의료기기 허위 표시</strong> — 의료기기법 위반 + 약사법 위반.</li>\n<li><strong>고령자 보호</strong> — 인지능력 저하 사정 시 무효·취소 평가.</li>\n<li><strong>강매·심리적 압박</strong> — 사기·강요 평가 영역.</li>\n<li><strong>"체험판매" 트랩</strong> — 무료 체험 후 강매 패턴.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 신고</strong></li>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 방문판매·강매 결합 사기',
        summary:
          '대법원 2017도16223(대법원, 2017.12.13 선고) 영역에서 법원은 방문판매업자가 허위·과장 광고와 강매적 판매 방식을 결합해 다수 소비자에게 고가의 상품을 판매한 경우 특정경제범죄가중처벌법위반(사기) + 방문판매법 위반이 경합범으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '허위 광고 + 강매 결합은 사기 + 방문판매법 위반 경합. 고령자 사례는 보호 강화 평가.',
      },
    ],
    faq: [
      {
        question: '14일이 지났어도 환불 가능한가요?',
        answer:
          '<strong>허위·과장 광고·강매가 입증되면 14일 후에도 환불 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '고령자라 본인이 청약철회 어렵습니다',
        answer:
          '<strong>가족·대리인이 대신 청약철회 통지 가능합니다.</strong> 위임장·가족관계증명서 첨부.',
      },
      {
        question: '"국가 인증" 표시는 사실일까요?',
        answer:
          '<strong>식약처 의료기기 정보포털에서 직접 조회 가능합니다.</strong> 미인증 시 허위 표시.',
      },
      {
        question: '카드 할부로 결제했어요',
        answer:
          '<strong>20만원 이상·3개월 이상이면 카드 항변권 행사 가능합니다.</strong>',
      },
      {
        question: '제품을 일부 사용했어요',
        answer:
          '<strong>일부 사용했어도 청약철회·환불 청구 가능한 영역입니다.</strong> 다만 감가 공제 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '청약철회권', href: '/guide/fraud/fraud-online-cancellation-right' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '표시광고법 위반', href: '/guide/fraud/fraud-false-advertising' },
    ],
  },

  // ─── 4. fraud-overseas-job-recruitment-broker-fee-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-job-recruitment-broker-fee-vanish-track',
    keyword: '해외취업 알선 브로커 사기',
    questionKeyword: '해외취업 알선 브로커에게 수수료 500만원 냈는데 잠적했어요.',
    ctaKeyword: '해외취업 알선 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외취업 알선 사기 — 5단계 직업안정법·환수 다툼 | 로앤가이드',
      description:
        '해외취업 알선 브로커에게 수수료를 선결제했는데 잠적당했다면 직업안정법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'캐나다 호텔 정직원 비자 보장\'이라는 광고 보고 알선 브로커에게 수수료 500만원 선결제. 비자 신청한다며 추가 200만원 또 받아 가더니 \'서류 절차가 늦어진다\' \'대사관 변동\'으로 미루다 결국 연락 두절. 알고 보니 직업안정법상 해외취업 알선 등록 없는 무허가 업체였어요." 직업안정법은 ① 국외 유료 직업소개 시 고용노동부 등록 필수 ② 미등록 알선 시 형사 처벌 ③ 수수료 한도 규정 ④ 위반 시 5년 이하 징역·5천만원 이하 벌금이 핵심 트랙. 미등록 + 선수금 + 비자 보장 광고 결합은 사기 + 직업안정법 위반 결합 평가 영역. 대응은 ① 결제·계약 자료 ② 고용노동부 신고 ③ 사이버 고소 ④ 환수 신청 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외취업 알선 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록 확인·신고·고소·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·계약 자료 확보</strong> — 이체·계약서·광고.</li>\n<li><strong>② 고용노동부 등록 여부 확인</strong> — 워크넷·국외알선 조회.</li>\n<li><strong>③ 고용노동부·경찰 사기 고소</strong> — 직업안정법 + 사기.</li>\n<li><strong>④ 카드 항변·계좌 지급정지</strong> — 즉시.</li>\n<li><strong>⑤ 민사 부당이득 반환</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 유료 직업소개는 고용노동부 등록 필수 영역. 미등록 + 비자 보장 광고 + 선수금 결합은 사기 + 직업안정법 위반 경합 트랙으로 평가될 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·환수 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 카톡·이체·광고·계약서.</li>\n<li><strong>2단계 — 고용노동부 등록 여부 확인 (워크넷)</strong> — 미등록 입증.</li>\n<li><strong>3단계 — 경찰 사이버 사기 고소 (ecrm)</strong> — 직업안정법 위반 병합.</li>\n<li><strong>4단계 — 카드 항변·계좌 지급정지 (이체 직후)</strong></li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외취업 알선 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·광고·등록 갈래입니다.</strong></p>\n<ul>\n<li><strong>이체 내역·카드 매출전표</strong></li>\n<li><strong>알선 계약서·약관·수수료 내역</strong></li>\n<li><strong>광고 (SNS·블로그·카페·전단) 캡처</strong></li>\n<li><strong>카톡·문자·이메일 (\"비자 보장\" 약속)</strong></li>\n<li><strong>업체 등록 여부 확인 (고용부·워크넷)</strong></li>\n<li><strong>같은 시기 다른 피해자 명단</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 워크넷·HRD-Net에서 업체명·대표자명·등록번호 조회. \"국외 유료 직업소개사업자 등록부\"에 미등록이면 위법 입증 결정적 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>등록 여부</strong> — 미등록은 직업안정법 위반.</li>\n<li><strong>수수료 한도 위반</strong> — 법정 수수료 초과 수취 위법.</li>\n<li><strong>"비자 보장" 광고</strong> — 비자는 국가권한이라 보장 자체가 기망.</li>\n<li><strong>현지 동업·해외법인</strong> — 국제 수사 공조 필요.</li>\n<li><strong>집단 피해</strong> — 같은 광고 다수 피해자 집단 고소.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국산업인력공단 (해외취업 K-MOVE)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직업안정법 + 사기 경합',
        summary:
          '대법원 2009도5304(대법원, 2009.07.23 선고) 영역에서 법원은 등록 없이 직업소개 사업을 영위하면서 수수료를 수취하고 알선의 본질적 의무를 이행하지 않은 경우 직업안정법 위반과 사기죄가 경합범으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '미등록 + 알선 미이행 + 선수금은 직업안정법 위반 + 사기 경합. 등록 여부 확인이 출발점.',
      },
    ],
    faq: [
      {
        question: '브로커 연락처가 모두 끊겼습니다',
        answer:
          '<strong>계좌·카톡 ID로 추적 가능합니다.</strong> 경찰 사이버수사 + 통신사 협조.',
      },
      {
        question: '해외 현지 알선업체라며 책임 회피합니다',
        answer:
          '<strong>국내에서 모집·수수료 수취했다면 국내 직업안정법 적용 가능합니다.</strong>',
      },
      {
        question: '"비자 보장"이 위법인가요?',
        answer:
          '<strong>비자는 상대국 정부 권한이라 보장 자체가 기망 표지로 평가될 여지가 있습니다.</strong>',
      },
      {
        question: '한국산업인력공단 K-MOVE는 무엇인가요?',
        answer:
          '<strong>정부 공식 해외취업 지원 사업입니다.</strong> 민간 알선과 구분해 확인하세요.',
      },
      {
        question: '집단 피해자 모임은 어떻게 만드나요?',
        answer:
          '<strong>SNS·카페에서 같은 업체 피해자 찾아 단체 카톡방 구성 후 명단·진술서 정리합니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '직업소개 사기', href: '/guide/fraud/fraud-job-broker-procedure' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
    ],
  },

  // ─── 5. fraud-nft-game-item-rugpull-developer-flee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-game-item-rugpull-developer-flee-track',
    keyword: 'NFT 게임 러그풀',
    questionKeyword: 'NFT 게임 아이템에 투자했는데 개발사가 잠적했어요. 사기 신고 가능한가요?',
    ctaKeyword: 'NFT 러그풀 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'NFT 게임 러그풀 — 5단계 사기·환수 다툼 | 로앤가이드',
      description:
        'NFT 게임 아이템·코인에 투자한 뒤 개발사가 잠적했다면 사기·자본시장법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'P2E 게임에서 NFT 캐릭터 보유하면 매월 토큰 보상\'이라는 광고로 1,500만원 상당 NFT 구입. 처음 2개월은 보상이 나오더니 어느 날 갑자기 게임 서버 다운·디스코드 폐쇄·개발팀 SNS 비공개. 토큰 가격은 99% 폭락. 알고 보니 \"러그풀\" 사기 패턴이었어요." 러그풀(Rug Pull, 개발사가 자금만 챙기고 잠적)은 ① 사기죄(형법 347조) ② 유사수신 행위 규제법 ③ 자본시장법(증권형 토큰의 경우) ④ 전기통신금융사기 환급 + 가상자산이용자보호법 트랙. 다수 투자자·홍보 인플루언서 결합·로드맵 미이행이 결정적 사정. 대응은 ① 거래·홍보 자료 ② 금감원·금융정보분석원 신고 ③ 사이버 고소 ④ 거래소·지갑 추적 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. NFT 러그풀 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·추적·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·홍보 자료 보존</strong> — 지갑 주소·트랜잭션·로드맵·SNS.</li>\n<li><strong>② 금감원·FIU 신고</strong> — 유사수신·자금세탁 의심.</li>\n<li><strong>③ 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 집단 고소.</li>\n<li><strong>④ 거래소·지갑 추적 협조 요청</strong> — 가상자산 이동 경로.</li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: NFT·코인은 추적 가능한 블록체인 데이터가 결정적. 개발사 지갑 주소 + 토큰 이동 경로 + 거래소 입금 자료 확보가 환수 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래 자료 보존 (즉시)</strong> — 지갑·트랜잭션 ID·홍보 SNS·디스코드.</li>\n<li><strong>2단계 — 금감원 1332·FIU 신고</strong> — 유사수신·자금세탁.</li>\n<li><strong>3단계 — 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 집단 고소 우선.</li>\n<li><strong>4단계 — 거래소·체인분석 협조 요청</strong> — 지갑 추적·동결.</li>\n<li><strong>5단계 — 민사 부당이득·손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">NFT 러그풀 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·홍보·로드맵 갈래입니다.</strong></p>\n<ul>\n<li><strong>지갑 주소·트랜잭션 ID·이체 내역</strong></li>\n<li><strong>NFT·토큰 보유 증빙 (오픈씨·민팅 영수증)</strong></li>\n<li><strong>홍보 SNS·텔레그램·디스코드 캡처</strong></li>\n<li><strong>백서·로드맵·팀 소개 페이지</strong></li>\n<li><strong>개발사 신원·법인 정보</strong></li>\n<li><strong>같은 시기 피해자 명단·디스코드 멤버</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 디스코드·텔레그램이 \"비공개·삭제\" 되기 전 화면 캡처·메시지 백업 즉시. 인플루언서 홍보글도 \"삭제\" 전 캡처해야 입증 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>러그풀 고의 입증</strong> — 로드맵 미이행·SNS 폐쇄·자금 이동 패턴.</li>\n<li><strong>유사수신 여부</strong> — \"매월 보상\" 약속은 유사수신 평가 사정.</li>\n<li><strong>증권형 토큰 (STO)</strong> — 자본시장법 적용 가능 영역.</li>\n<li><strong>해외 법인·익명 개발자</strong> — 국제 수사 공조 + 블록체인 추적.</li>\n<li><strong>인플루언서 책임</strong> — 유상 홍보 미공개 시 표시광고법 위반.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융정보분석원 (FIU)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 발행·운영 사기',
        summary:
          '대법원 2021도9855(대법원, 2021.11.11 선고) 영역에서 법원은 가상자산·전자정보를 발행하거나 운영하는 자가 투자자에게 약속한 운영·보상 의무를 이행하지 않고 자금을 임의로 사용한 경우 특정경제범죄가중처벌법위반(사기)·횡령·배임 등의 죄책이 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '약속한 운영·보상 미이행 + 자금 임의 사용은 사기·횡령·배임 결합. 지갑 주소 추적이 핵심 입증 자료.',
      },
    ],
    faq: [
      {
        question: '개발사가 익명이라 신원을 모릅니다',
        answer:
          '<strong>지갑 주소·도메인·거래소 KYC 협조로 추적 가능합니다.</strong> 체인 분석 회사 협조 트랙도.',
      },
      {
        question: '해외 거래소·해외 개발사면 신고 불가인가요?',
        answer:
          '<strong>국내 피해자라면 국내 경찰 신고 가능합니다.</strong> 국제 공조·인터폴 트랙 검토.',
      },
      {
        question: 'NFT는 환불·환수가 가능한가요?',
        answer:
          '<strong>가상자산이용자보호법·민사 부당이득 반환으로 청구 가능한 영역입니다.</strong> 환수율은 추적 여부 좌우.',
      },
      {
        question: '인플루언서·연예인 홍보도 책임 있나요?',
        answer:
          '<strong>유상 홍보 미공개·허위 추천은 표시광고법 위반 + 공동불법행위 평가 영역입니다.</strong>',
      },
      {
        question: '소액 투자자도 집단 고소 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 디스코드·SNS에서 피해자 모이면 명단·진술서 정리해 일괄 신고.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '유사수신 신고', href: '/guide/fraud/fraud-illegal-fundraising' },
      { label: '가상자산 사기', href: '/guide/fraud/fraud-crypto-procedure' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },
];
