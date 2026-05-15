import { SpokePage } from '../spoke-pages';

// batch66 fraud — 5개 (2026-05-16)
//
// 고유 존재 이유:
// 1. fraud-bitcoin-mining-machine-fake-rental-track — 비트코인 채굴기 임대 가짜 수익 보장 (기존 fraud-investment-platform-yield-fake-display / fraud-crypto-exchange 와 분기: "채굴기 실물 임대 + 운영 수익 보장"이라는 임대 형식 트랙).
// 2. fraud-auction-shill-bidding-fake-bidder-track — 경매 가짜 입찰자 가격 부풀리기 (신규 도메인, 미술품·중고 경매 + 공정거래법 위반 트랙).
// 3. fraud-airbnb-fake-listing-deposit-track — 에어비앤비 가짜 매물 보증금 (기존 fraud-online-shopping 와 분기: "숙박 플랫폼·결제 후 잠적" 트랙, 플랫폼 환불 한계).
// 4. fraud-art-investment-fractional-ownership-track — 미술품 조각투자 운용수익 허위 (기존 fraud-investment-platform-yield-fake-display 와 분기: "조각투자·실물자산 토큰화" 트랙, 자본시장법 신유형).
// 5. fraud-prepaid-card-discount-bulk-resale-track — 선불카드 대량 할인 판매 사기 (기존 fraud-gift-card-resale 와 분기: "백화점 상품권·선불카드 대량 할인 미발급" 폰지 트랙).

export const spokesBatch66Fraud: SpokePage[] = [
  // ─── 1. fraud-bitcoin-mining-machine-fake-rental-track ───
  {
    domain: 'fraud',
    slug: 'fraud-bitcoin-mining-machine-fake-rental-track',
    keyword: '비트코인 채굴기 임대 사기',
    questionKeyword: '비트코인 채굴기 임대로 월 30만원 수익 보장한다는데 실제 채굴이 안 됩니다.',
    ctaKeyword: '채굴기 임대 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '채굴기 임대 수익 보장 — 5단계 사기·유사수신 다툼 | 로앤가이드',
      description:
        '"채굴기 1대 월 30만원 수익 보장"이라는 광고로 임대료만 받고 실제 채굴이 안 된다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'비트코인 채굴기 1대 임대료 300만원, 월 30만원 수익 보장\'이라는 광고에 끌려 채굴기 3대 900만원 결제. 처음 두 달은 수익이 들어왔는데 셋째 달부터 \'전기료 인상\' \'난이도 상승\'으로 미루더니 회사 연락 두절. 알고 보니 채굴기 실물도 없고 입금된 돈으로 신규 가입자에게 \'수익\'을 돌려막던 폰지 구조였어요." 채굴기 임대형 수익 보장은 ① 사기죄(형법 347조) ② 유사수신행위 규제법 ③ 자본시장법(파생결합증권 평가 시) ④ 전기통신금융사기 환급 트랙이 핵심. 채굴기 실물 미존재·운영 미이행·신규 가입자 자금으로 기존자 보상하는 폰지 구조가 결정적 사정. 대응은 ① 계약·이체 자료 ② 금감원 1332 ③ 사이버 고소 ④ 환급 신청 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 채굴기 임대 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·환급·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·광고·이체 자료 보존</strong> — 임대계약서·수익 보장 광고·이체 내역.</li>\n<li><strong>② 채굴기 실물·운영 확인</strong> — 채굴장 주소·해시레이트 증빙 요청.</li>\n<li><strong>③ 금감원 1332 신고</strong> — 유사수신·무인가 영업.</li>\n<li><strong>④ 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 집단 고소.</li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 사기 시 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 채굴기 실물·운영 미이행 + "수익 보장" 약정 + 신규 자금으로 기존자 보상 패턴이 결합되면 사기·유사수신 결합 영역으로 평가될 여지가 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (즉시)</strong> — 임대계약서·광고·이체·카톡.</li>\n<li><strong>2단계 — 채굴기 실물 확인 요청</strong> — 채굴장 방문·해시레이트 자료.</li>\n<li><strong>3단계 — 금감원 1332 신고 (1일 내)</strong> — 유사수신·무인가 투자업.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 사기 + 유사수신 병합.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효)</strong> — 집단 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">채굴기 임대 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·광고·운영 갈래입니다.</strong></p>\n<ul>\n<li><strong>채굴기 임대계약서·약관·수익 보장 명세</strong></li>\n<li><strong>이체 내역·카드 매출전표</strong></li>\n<li><strong>광고·SNS·카페·텔레그램 캡처 ("월 30만원 보장")</strong></li>\n<li><strong>운영사 안내 자료 (채굴장 주소·해시레이트)</strong></li>\n<li><strong>수익 지급 내역 → 지급 중단 시점 기록</strong></li>\n<li><strong>같은 시기 다른 피해자 명단·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채굴장 주소가 명시돼 있다면 직접 방문 또는 사진·영상 요청. 응답 회피·실물 미공개는 \"채굴기 자체가 없다\"는 결정적 정황 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채굴기 실물 존재</strong> — 운영사가 실물 공개 회피 시 핵심 입증.</li>\n<li><strong>"수익 보장" 약정</strong> — 유사수신 핵심 표지.</li>\n<li><strong>폰지 구조</strong> — 신규 자금으로 기존자 보상 패턴 분석.</li>\n<li><strong>전기료·난이도 핑계</strong> — 지급 중단 합리화 패턴 검증.</li>\n<li><strong>해외 채굴장 주장</strong> — 국제 수사 공조 + 실재 검증.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채굴기·가상자산 임대 유사수신',
        summary:
          '대법원 2020도10330(대법원, 2020.12.10 선고) 영역에서 법원은 가상자산 채굴기·플랫폼 임대 명목으로 수익 보장 약정을 통해 자금을 모집하면서 실제 채굴·운영 사실이 인정되기 어려운 사정이 결합된 경우 유사수신행위규제법 위반과 사기죄가 경합범으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"수익 보장" + "채굴기 실물 미존재" 결합은 유사수신 + 사기 경합. 채굴장 실재 입증 회피가 결정적 정황.',
      },
    ],
    faq: [
      {
        question: '초반에 수익이 들어왔는데 사기인가요?',
        answer:
          '<strong>전형적 폰지 패턴입니다.</strong> 신규 가입자 자금으로 초기 보상을 지급하다 일정 규모 도달 시 잠적.',
      },
      {
        question: '채굴장 주소가 해외라며 방문 못하게 합니다',
        answer:
          '<strong>실물 공개 회피는 결정적 정황 자료입니다.</strong> 영상·사진 요청도 거부하면 채굴기 자체가 없을 가능성.',
      },
      {
        question: '운영사가 코인을 대신 보관한다고 합니다',
        answer:
          '<strong>가상자산이용자보호법상 분리보관 의무 위반 영역입니다.</strong> 추가 신고 사유.',
      },
      {
        question: '계좌 지급정지는 어떻게 신청하나요?',
        answer:
          '<strong>경찰 사건사고사실확인원 발급 후 송금 은행에 신청합니다.</strong> 빠를수록 환급률 높음.',
      },
      {
        question: '소액 피해자도 집단 고소 참여 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 같은 광고·같은 패턴이면 명단 합산해 집단 고소가 효과적입니다.',
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

  // ─── 2. fraud-auction-shill-bidding-fake-bidder-track ───
  {
    domain: 'fraud',
    slug: 'fraud-auction-shill-bidding-fake-bidder-track',
    keyword: '경매 가짜 입찰자 가격 부풀리기',
    questionKeyword: '미술품 경매에서 운영자가 가짜 입찰자를 동원해 가격을 부풀린 것 같습니다.',
    ctaKeyword: '경매 가짜 입찰 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경매 거짓 입찰자 가격 부풀리기 — 5단계 사기 다툼 | 로앤가이드',
      description:
        '미술품·중고 경매에서 운영자가 가짜 입찰자(shill bidder)를 동원해 가격을 부풀린 정황이 있다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"미술품 온라인 경매에서 \'마감 직전 다른 입찰자\'가 계속 가격을 올려 결국 1,800만원에 낙찰. 그런데 낙찰 후 \'전 낙찰자가 포기했으니 추가로 사라\'는 권유 전화가 왔고, 알고 보니 마감 직전 입찰자 IP·계정이 운영자 본인 또는 지인이었다는 정황이 드러났어요." 경매 가짜 입찰자(shill bidding)는 ① 사기죄(형법 347조) — 가격 형성 자체를 조작 ② 표시·광고의 공정화에 관한 법률 — 허위 입찰 표시 ③ 전자상거래법 — 통신판매업자 금지행위 ④ 부정경쟁방지법 — 거래 신뢰 침해 트랙이 핵심. 가짜 입찰자가 운영자·지인이라는 정황 + 동일 IP·계정·결제수단 패턴이 결정적. 대응은 ① 거래 자료 ② 운영자 신원·계정 자료 ③ 소비자원·공정위 ④ 사기 고소 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경매 가짜 입찰 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·운영자 신원·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경매 자료 보존</strong> — 입찰 내역·IP·계정 ID·결제 자료.</li>\n<li><strong>② 운영자·관계자 신원 확인</strong> — 통신판매업자 등록·동일 IP 입찰자.</li>\n<li><strong>③ 한국소비자원 1372·공정위 신고</strong> — 표시광고법·전자상거래법.</li>\n<li><strong>④ 사이버 사기 고소 (ecrm)</strong> — 가격 형성 조작 사기.</li>\n<li><strong>⑤ 민사 매매계약 취소·손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가짜 입찰자가 운영자 또는 지인임을 입증하는 IP·계정·결제수단 동일성이 결정적. "마감 직전 입찰"이 매번 동일 패턴이면 경매 조작 평가 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경매 자료 보존 (즉시)</strong> — 입찰 화면·낙찰 내역·결제·메시지.</li>\n<li><strong>2단계 — 운영자 신원·계정 자료 확보</strong> — 통신판매업자 정보·이용약관.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정</strong> — 30~60일.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>5단계 — 민사 매매계약 취소·반환 청구 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">경매 가짜 입찰 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·계정·운영자 갈래입니다.</strong></p>\n<ul>\n<li><strong>경매 입찰 내역·낙찰가·시간 기록</strong></li>\n<li><strong>입찰자 ID·닉네임 목록 (마감 직전 입찰자 강조)</strong></li>\n<li><strong>결제 영수증·카드 매출전표·이체 내역</strong></li>\n<li><strong>경매 페이지 스크린샷·이용약관</strong></li>\n<li><strong>운영자 통신판매업자 정보 (공정위 사업자정보공개)</strong></li>\n<li><strong>같은 패턴 다른 피해자 명단·SNS 캡처</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 운영자 다른 경매들 입찰 내역도 비교 분석. 매번 마감 직전 동일 닉네임·동일 패턴이면 경매 조작의 결정적 정황 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가격 형성 조작</strong> — 가짜 입찰자가 운영자·지인 입증.</li>\n<li><strong>전자상거래법 금지행위</strong> — 통신판매업자 부당 표시.</li>\n<li><strong>표시광고법 위반</strong> — 허위 입찰자 노출.</li>\n<li><strong>매매계약 취소</strong> — 사기에 의한 의사표시 취소 (민법 110조).</li>\n<li><strong>플랫폼 책임</strong> — 경매 플랫폼의 검증 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 신고</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경매·가격 조작 사기',
        summary:
          '대법원 2014도8482(대법원, 2014.10.30 선고) 영역에서 법원은 경매·거래 절차에서 운영자 또는 관계자가 가짜 입찰·허위 호가를 통해 가격 형성을 조작하고 그 결과 매수인이 정상 가격보다 높은 금액을 지급한 경우 사기죄가 성립될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '가짜 입찰자를 동원한 가격 부풀리기는 사기죄 평가 영역. 가짜 입찰자의 운영자 관련성 입증이 핵심.',
      },
    ],
    faq: [
      {
        question: '가짜 입찰자가 운영자임을 어떻게 입증하나요?',
        answer:
          '<strong>경찰 수사를 통한 IP·계정·결제수단 동일성 확인으로 입증됩니다.</strong> 통신영장 트랙.',
      },
      {
        question: '낙찰 후 매매계약 취소가 가능한가요?',
        answer:
          '<strong>민법 110조 사기에 의한 의사표시 취소 가능한 영역입니다.</strong> 안 날부터 3년 시효.',
      },
      {
        question: '경매 플랫폼은 책임이 없나요?',
        answer:
          '<strong>플랫폼이 가짜 입찰 패턴을 알고도 방치한 경우 공동불법행위 평가 가능합니다.</strong>',
      },
      {
        question: '오프라인 갤러리·경매장도 해당하나요?',
        answer:
          '<strong>오프라인도 가짜 입찰자·바람잡이 동원 시 동일한 사기 평가 영역입니다.</strong>',
      },
      {
        question: '낙찰가 일부만 환수받을 수 있나요?',
        answer:
          '<strong>정상 가격과 낙찰가의 차액 + 위자료가 손해배상 청구 범위로 평가될 수 있습니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '표시광고법 위반', href: '/guide/fraud/fraud-false-advertising' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '매매계약 취소', href: '/guide/fraud/fraud-sales-contract-cancellation' },
    ],
  },

  // ─── 3. fraud-airbnb-fake-listing-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-airbnb-fake-listing-deposit-track',
    keyword: '에어비앤비 가짜 매물 보증금',
    questionKeyword: '에어비앤비로 숙소 예약하고 결제했는데 실제로는 존재하지 않는 매물이었어요.',
    ctaKeyword: '에어비앤비 가짜 매물 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '에어비앤비 가짜 매물 결제 — 5단계 환불·사기 다툼 | 로앤가이드',
      description:
        '에어비앤비·숙박 플랫폼에서 가짜 매물에 결제 후 잠적당했다면 환불·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"에어비앤비 비슷한 숙박 플랫폼에서 \'제주 오션뷰 빌라\' 3박 예약 + 보증금 포함 90만원 결제. 체크인 당일 주소지 찾아갔더니 매물 자체가 없거나 이미 다른 임차인이 살고 있었어요. 호스트는 연락 두절, 플랫폼 고객센터는 \'개인 간 거래 책임\' 답변. 알고 보니 같은 매물 사진을 도용해 가짜 호스트 계정 여러 개로 동시 사기 친 경우였어요." 가짜 매물 결제 사기는 ① 사기죄(형법 347조) ② 정보통신망법(허위 게시) ③ 전자상거래법(통신판매중개자 책임) ④ 플랫폼 환불·보증 정책 ⑤ 카드 항변권이 핵심 트랙. 외부 송금·플랫폼 외 입금 유도 패턴이 가장 위험한 영역. 대응은 ① 결제·예약 자료 ② 플랫폼 환불 신청 ③ 사이버 고소 ④ 카드 항변 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 매물 결제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·플랫폼·고소·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 예약·결제·메시지 자료 보존</strong> — 플랫폼 내 모든 이력.</li>\n<li><strong>② 플랫폼 환불·보증 정책 신청</strong> — 48시간 내 신고 권장.</li>\n<li><strong>③ 사이버 사기 고소 (ecrm)</strong> — 호스트 계정·이미지 도용.</li>\n<li><strong>④ 카드 항변 (90일 내)</strong> — 비대면 결제 환수.</li>\n<li><strong>⑤ 민사 부당이득 반환</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 플랫폼 외 송금·계좌이체 유도가 가장 위험한 패턴. 플랫폼 내 결제 + 메시지로 남겨야 환불·보증 정책 적용 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·환불·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (도착 당일)</strong> — 매물 부재 사진·플랫폼 메시지·결제.</li>\n<li><strong>2단계 — 플랫폼 환불 신청 (48시간 내 권장)</strong> — 보증 정책 적용.</li>\n<li><strong>3단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 호스트·이미지 도용.</li>\n<li><strong>4단계 — 카드 할부항변 (90일 내)</strong> — 결제 분쟁.</li>\n<li><strong>5단계 — 민사 부당이득 반환·플랫폼 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 매물 결제 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 예약·결제·현장 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약 확정 메일·플랫폼 예약번호</strong></li>\n<li><strong>카드 매출전표·이체 내역</strong></li>\n<li><strong>호스트와 플랫폼 내 메시지 전체</strong></li>\n<li><strong>매물 사진·주소·체크인 안내</strong></li>\n<li><strong>현장 도착 후 매물 부재·다른 거주자 사진·영상</strong></li>\n<li><strong>같은 매물 사진 도용 여부 (구글 이미지 검색 결과)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매물 사진을 구글·네이버 역방향 이미지 검색하면 같은 사진이 여러 플랫폼·여러 호스트 계정에서 사용된 정황 확인 가능. 이미지 도용은 사기 입증 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>플랫폼 환불 정책 한계</strong> — "개인 간 거래" 책임 회피 패턴.</li>\n<li><strong>플랫폼 외 입금 유도</strong> — 가장 위험한 패턴, 환불 곤란.</li>\n<li><strong>통신판매중개자 책임</strong> — 전자상거래법상 보증·환불 의무.</li>\n<li><strong>이미지 도용</strong> — 같은 사진 여러 계정 사용 입증.</li>\n<li><strong>해외 플랫폼</strong> — 국제 신고·관할 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>공정거래위원회 신고</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 온라인 플랫폼·가짜 매물 사기',
        summary:
          '대법원 2018도7172(대법원, 2018.08.30 선고) 영역에서 법원은 인터넷 플랫폼에서 존재하지 않거나 이미 다른 사람에게 임대된 부동산·숙소를 게시해 다수에게 보증금·예약금을 받은 경우 사기죄가 성립되며 피해자 수·금액에 따라 특정경제범죄가중처벌법위반(사기)로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '실재하지 않는 매물 + 결제 후 잠적은 사기 평가 영역. 다수 피해 + 이미지 도용은 가중 사정.',
      },
    ],
    faq: [
      {
        question: '플랫폼이 "개인 간 거래"라며 책임 회피합니다',
        answer:
          '<strong>전자상거래법상 통신판매중개자에게 일정한 검증·환불 의무가 있는 영역입니다.</strong> 소비자원 신고로 다툼 가능.',
      },
      {
        question: '호스트가 "다른 매물로 옮기겠다"고 합니다',
        answer:
          '<strong>2차 사기·증거 인멸 시도일 수 있습니다.</strong> 플랫폼 내 기록 남기고 즉시 신고하세요.',
      },
      {
        question: '플랫폼 외 계좌로 이미 입금했어요',
        answer:
          '<strong>플랫폼 환불 정책 적용이 어려운 영역입니다.</strong> 경찰 사이버 고소 + 계좌 지급정지 트랙 우선.',
      },
      {
        question: '해외 호스트라며 답변이 없어요',
        answer:
          '<strong>국내 피해자라면 국내 경찰 신고 가능합니다.</strong> 플랫폼 본사 신고 병행.',
      },
      {
        question: '카드 결제는 환수가 더 쉽나요?',
        answer:
          '<strong>카드 항변·차지백 트랙으로 90일 내 분쟁 신청 가능합니다.</strong> 이체보다 환수율 높음.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 4. fraud-art-investment-fractional-ownership-track ───
  {
    domain: 'fraud',
    slug: 'fraud-art-investment-fractional-ownership-track',
    keyword: '미술품 조각투자 운용수익 허위',
    questionKeyword: '미술품 조각투자 플랫폼에 투자했는데 운용수익이 허위이고 출금이 거부됩니다.',
    ctaKeyword: '미술품 조각투자 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '미술품 조각투자 운용수익 허위 — 5단계 자본시장법 다툼 | 로앤가이드',
      description:
        '미술품·실물자산 조각투자 플랫폼이 운용수익을 허위 표시하거나 출금을 거부한다면 자본시장법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'유명 화가 작품 조각투자로 연 12% 수익\'이라는 광고로 800만원 투자. 앱 안에 \'평가수익률 +18%\'가 매일 표시되고, 처음엔 분기 배당도 들어왔는데, 막상 매각·출금 요청하니 \'매각 절차 진행 중\' \'유찰\'로 미루다 결국 앱 접속 불가. 알고 보니 실제 미술품 매입 자체가 없었거나, 매입했어도 평가가 허위였어요." 미술품·실물자산 조각투자는 ① 자본시장법 — 수익증권·투자계약증권으로 평가 시 인가 필요 ② 사기죄(형법 347조) — 운용수익 허위 ③ 유사수신행위 규제법 ④ 전자증권법·신탁법 보호 ⑤ 금감원·금융위 신고 트랙이 핵심. 2022년부터 금융위 가이드라인 적용 영역. 대응은 ① 거래·홍보 자료 ② 금감원 1332 ③ 사이버 고소 ④ 환수 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 조각투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·환수·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·홍보 자료 보존</strong> — 앱 화면·평가수익률·배당 자료.</li>\n<li><strong>② 실물 매입·신탁 확인</strong> — 미술품 실재·신탁 자료 요청.</li>\n<li><strong>③ 금감원 1332·금융위 신고</strong> — 자본시장법·유사수신.</li>\n<li><strong>④ 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 집단.</li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미술품 실물 매입 + 신탁 분리보관 + 평가 객관성이 핵심 검증 영역. "앱 안 평가수익률"만 보이고 매각·출금 거부 패턴은 사기 + 자본시장법 결합 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·환수 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (즉시)</strong> — 앱 화면·이체·광고·계약.</li>\n<li><strong>2단계 — 실물·신탁 확인 요청</strong> — 미술품 매입증·신탁계약서.</li>\n<li><strong>3단계 — 금감원 1332·금융위 신고</strong> — 자본시장법·유사수신.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 집단 고소.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">미술품 조각투자 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·평가·신탁 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자계약서·약관·플랫폼 이용약관</strong></li>\n<li><strong>이체 내역·결제 자료</strong></li>\n<li><strong>앱 평가수익률·배당 화면 캡처</strong></li>\n<li><strong>매입 미술품 증빙·신탁계약 자료</strong></li>\n<li><strong>출금·매각 요청·거부 답변 기록</strong></li>\n<li><strong>같은 시기 다른 피해자 명단·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 금융위 "조각투자 가이드라인"에서 인가·등록 여부 확인. 미인가 + 실물 매입 미입증 + 신탁 미분리는 자본시장법·유사수신 핵심 위반 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실물 매입 입증</strong> — 미술품 실재·매입가·신탁 분리.</li>\n<li><strong>평가수익률 허위</strong> — 객관적 평가기관 검증 없음.</li>\n<li><strong>출금·매각 거부</strong> — 약관상 권리 침해.</li>\n<li><strong>자본시장법 인가</strong> — 투자계약증권 인가 필요 영역.</li>\n<li><strong>해외 작품·해외 신탁</strong> — 검증 곤란 시 추가 위험 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>금융위원회·금감원 분쟁조정</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조각투자·실물자산 토큰화 사기',
        summary:
          '대법원 2022도8089(대법원, 2022.10.27 선고) 영역에서 법원은 실물자산을 기초로 한 조각투자 상품을 판매하면서 실제 자산의 매입·평가·신탁 분리 보관이 이루어지지 않거나 운용 수익을 허위로 표시한 경우 자본시장법 위반·유사수신·사기죄가 경합범으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '실물 미매입 + 운용수익 허위 + 신탁 미분리는 자본시장법 + 유사수신 + 사기 경합. 금융위 가이드라인이 평가 기준.',
      },
    ],
    faq: [
      {
        question: '미술품 조각투자가 모두 불법인가요?',
        answer:
          '<strong>금융위 가이드라인 준수·인가받은 플랫폼은 합법 영역입니다.</strong> 미인가 + 실물 미입증이 문제.',
      },
      {
        question: '"평가수익률"이 허위인지 어떻게 확인하나요?',
        answer:
          '<strong>제3자 평가기관·신탁사 보고서·실거래 매각 자료를 요청해 비교합니다.</strong>',
      },
      {
        question: '출금 거부 시 즉시 신고해야 하나요?',
        answer:
          '<strong>출금 거부는 위험 신호입니다.</strong> 다른 투자자 출금 가능 여부 확인 후 신고 트랙 우선.',
      },
      {
        question: '소액 투자자도 집단 고소 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 동일 플랫폼 피해자 모아 명단·진술서 정리해 집단 고소 효과적.',
      },
      {
        question: '플랫폼이 해외 법인이라며 책임 회피합니다',
        answer:
          '<strong>국내 모집·국내 결제는 국내법 적용 가능 영역입니다.</strong> 국제 공조 트랙 검토.',
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

  // ─── 5. fraud-prepaid-card-discount-bulk-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-prepaid-card-discount-bulk-resale-track',
    keyword: '선불카드 대량 할인 판매 사기',
    questionKeyword: '백화점 상품권 20% 할인 광고로 대량 결제했는데 발급되지 않아요.',
    ctaKeyword: '선불카드 할인 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '선불카드·상품권 할인 미발급 — 5단계 사기·환수 다툼 | 로앤가이드',
      description:
        '"백화점 상품권 20% 할인" 대량 판매 광고에 결제했는데 발급되지 않거나 부분만 받았다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'백화점 상품권 20% 할인, 무제한 발급\' 광고를 보고 300만원 결제. 첫 1주일은 50만원치 받아 사용했는데, 그 다음 주문부터는 \'발행처 점검\' \'정산 지연\'으로 미루다 결국 잔액 250만원 미발급 상태로 운영자 잠적. 알고 보니 후속 주문자 결제로 앞선 주문자에게 할인분 메우다 일정 규모 도달 시 잠적하는 폰지 구조였어요." 선불카드·상품권 대량 할인 판매 사기는 ① 사기죄(형법 347조) ② 유사수신행위 규제법 ③ 전자상거래법(통신판매업자 의무) ④ 여신전문금융업법(상품권 발행 규제) ⑤ 전기통신금융사기 환수 트랙이 핵심. 후속 결제로 앞선 발급 메우는 폰지 구조 + 일정 시점 잠적 패턴이 결정적. 대응은 ① 결제 자료 ② 금감원·소비자원 ③ 사이버 고소 ④ 카드 항변 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 선불카드 할인 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·광고·발급 자료 보존</strong> — 이체·카톡·발급 내역.</li>\n<li><strong>② 발행처 정품 확인</strong> — 백화점·상품권사 공식 발급 여부.</li>\n<li><strong>③ 금감원 1332·소비자원 1372 신고</strong> — 유사수신·전자상거래법.</li>\n<li><strong>④ 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 집단.</li>\n<li><strong>⑤ 카드 항변·민사 부당이득</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "20% 이상 할인 + 대량 무제한 + 선결제" 조합은 폰지 구조 의심 영역. 초기 일부 발급 후 정상화 미루다 잠적 패턴 결합 시 사기·유사수신 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·환수 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·발급 자료 보존 (즉시)</strong> — 이체·카톡·발급 내역.</li>\n<li><strong>2단계 — 발행처 정품 확인 (백화점 본사)</strong> — 위조·미발행 확인.</li>\n<li><strong>3단계 — 금감원 1332·소비자원 1372 신고</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 집단 고소.</li>\n<li><strong>5단계 — 카드 항변·민사 부당이득 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">선불카드 할인 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·광고·발급 갈래입니다.</strong></p>\n<ul>\n<li><strong>결제 영수증·이체 내역·카드 매출전표</strong></li>\n<li><strong>광고 (SNS·블로그·카페) 캡처</strong></li>\n<li><strong>발급받은 상품권 핀번호·미발급분 내역</strong></li>\n<li><strong>운영자와 카톡·문자·이메일 (할인 약정·미루기 답변)</strong></li>\n<li><strong>발행처 정품 확인 결과 (백화점 본사 답변)</strong></li>\n<li><strong>같은 시기 다른 피해자 명단·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 상품권 핀번호를 발행처(롯데·신세계 등)에 문의해 정품 여부·잔액·발행일 확인. 위조·이미 사용된 핀번호면 추가 사기 사정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폰지 구조 입증</strong> — 후속 결제로 앞선 발급 메우는 패턴.</li>\n<li><strong>"정산 지연" 핑계</strong> — 잠적 직전 미루기 패턴.</li>\n<li><strong>위조·중복 핀번호</strong> — 위조상품권 유통·여신전문금융업법 위반.</li>\n<li><strong>일부 발급 + 잔량 미발급</strong> — 사기 고의 정황.</li>\n<li><strong>플랫폼·결제대행사 책임</strong> — PG·오픈마켓 검증 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상품권 할인 폰지 사기',
        summary:
          '대법원 2017도8388(대법원, 2017.09.07 선고) 영역에서 법원은 시중가보다 현저히 낮은 할인율로 상품권·선불카드를 대량 판매하면서 후속 매수인 결제 자금으로 앞선 매수인에게 상품권을 발급하다가 일정 시점에 잠적한 경우 사기죄·유사수신행위규제법 위반이 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"비현실적 할인 + 대량 + 선결제 + 일부 발급 후 잠적" 결합은 사기·유사수신 결합 영역.',
      },
    ],
    faq: [
      {
        question: '초반에 일부 발급받았는데도 사기인가요?',
        answer:
          '<strong>전형적 폰지 패턴입니다.</strong> 후속 결제 자금으로 앞선 발급을 메우다 일정 규모 도달 시 잠적.',
      },
      {
        question: '받은 상품권이 위조일 수도 있나요?',
        answer:
          '<strong>발행처(백화점 본사·상품권사)에 핀번호 조회로 정품 확인 가능합니다.</strong> 위조 시 추가 신고 사유.',
      },
      {
        question: 'PG·오픈마켓도 책임 있나요?',
        answer:
          '<strong>통신판매중개자로서 일정한 검증 의무가 있는 영역입니다.</strong> 함께 분쟁조정·민사 청구 검토.',
      },
      {
        question: '카드 결제 시 항변 가능한가요?',
        answer:
          '<strong>20만원 이상·3개월 이상 할부 결제는 항변권 행사 가능합니다.</strong> 일시불·체크카드는 차지백 트랙.',
      },
      {
        question: '집단 고소 참여자는 어떻게 모으나요?',
        answer:
          '<strong>같은 광고·같은 입금 계좌 피해자가 SNS·카페에 모입니다.</strong> 단톡방 구성 후 명단·진술서 정리.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '유사수신 신고', href: '/guide/fraud/fraud-illegal-fundraising' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },
];
