import { SpokePage } from '../spoke-pages';

// batch61 fraud — 5개 (2026-05-11)
//
// 고유 존재 이유:
// 1. 코인 에어드롭 이벤트라며 지갑 시드·개인키 요구 받아 자산 탈취된 피해자가 회수·신고 트랙을 정리하는 페이지.
// 2. 텔레그램 종목방·리딩방에서 \'세력 매집\' 신호를 보고 매수해 손실난 피해자가 시세조종 회수 트랙을 정리하는 페이지.
// 3. 부동산 이중계약 사기 — 이미 매도된 부동산을 다른 매수인에게 다시 매도한 사례 피해 회수 트랙.
// 4. 채용 사기 — \'정규직 전환 보증금\'·\'유니폼비\' 명목으로 돈을 받고 잠적한 사례 회수 트랙.
// 5. 인터넷 쇼핑 카드 차지백 — 해외 사이트·SNS 광고에서 결제 후 미배송된 사례 카드사 분쟁조정 트랙.

export const spokesBatch61Fraud: SpokePage[] = [
  // ─── 1. fraud / fraud-crypto-airdrop-seed-phrase-theft-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-airdrop-seed-phrase-theft-track',
    keyword: '코인 에어드롭 시드 탈취',
    questionKeyword: '에어드롭 신청 사이트에 지갑 연결했더니 코인 다 빠져나갔어요. 회수 가능한가요?',
    ctaKeyword: '코인 에어드롭 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인 에어드롭 시드 탈취 — 5단계 회수·신고 | 로앤가이드',
      description:
        '\'에어드롭 신청\' 사이트에서 지갑 시드·개인키를 입력해 자산이 탈취됐다면 회수·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"트위터에서 \'△△ 코인 에어드롭\' 광고를 봤어요. 지갑을 연결하니 \'추가 인증\'을 요구해 시드 구문을 입력했는데, 1분도 안 돼 코인이 모두 사라졌습니다. 같은 시간 같은 사이트에 당한 사람이 텔레그램방에 50명 넘게 모여 있어요." 코인 에어드롭을 사칭한 시드 구문·개인키 탈취 수법은 형법상 사기·컴퓨터등사용사기·정보통신망법 위반 영역으로 평가될 수 있습니다. 회수는 ① 즉시 지급정지·동결 요청 (해외 거래소·체인 트랙) ② 사이버수사대 신고 ③ 도메인 호스팅·결제대행사 공조 ④ 텔레그램 단체 피해자 신고 ⑤ 민사 손해배상 다섯 트랙이 있고, 체인 분석 전문 업체(예: 한국인터넷진흥원 ECRM 공조 사례)와 KISA 118 신고가 결정적인 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 에어드롭 시드 탈취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 피해 시점·지갑 주소·이체 경로·사이트 정보·공조 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 피해 시점 (분 단위)</strong> — 시드 입력 시각·자산 이체 시각. 체인 익스플로러에서 트랜잭션 해시 확보.</li>\n<li><strong>② 본인 지갑·공격자 지갑 주소</strong> — 자산이 흘러간 다음 주소. 거래소로 입금 정황 확인.</li>\n<li><strong>③ 이체 경로 (믹서·브릿지)</strong> — 자금세탁 정황. 중간 경유 지갑 자료.</li>\n<li><strong>④ 사이트·도메인 정보</strong> — URL·SSL 인증서·등록자·호스팅. 가짜 사이트 신고용.</li>\n<li><strong>⑤ 공조 신고 (사이버수사대·KISA·거래소)</strong> — 동결·계좌 정지·도메인 차단 동시 요청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시드 구문 탈취 사기는 회수 자체가 어려운 영역이지만, 자산이 국내 거래소로 흘러간 사례는 동결 요청 + 사이버수사대 공조로 일부 회수된 사례가 있는 영역입니다. 시간이 결정적이라 24시간 안 신고가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·KISA·거래소 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 자료 백업 + 거래소 동결 요청 (1~2시간)</strong> — 트랜잭션 해시·공격자 지갑 주소·사이트 URL 캡처. 국내 거래소 입금 정황이면 즉시 동결 요청.</li>\n<li><strong>2단계 — 사이버수사대 신고 (ecrm.police.go.kr, 24시간 내)</strong> — 사건사고사실확인원 + 피해 자료 일체.</li>\n<li><strong>3단계 — KISA 118 신고 (가짜 도메인·SSL 차단, 1~2일)</strong> — 도메인 호스팅 공조로 사이트 차단.</li>\n<li><strong>4단계 — 텔레그램·디스코드 피해자 모임 + 공동 고소 (1~2주)</strong> — 동일 사이트 피해자 단체 신고로 공조 강화.</li>\n<li><strong>5단계 — 민사 손해배상 (1~3년)</strong> — 공격자 신원 특정 시 손해배상. 거래소 약관 위반·관리책임 다툼은 별도 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 에어드롭 사기 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 체인 자료 + 사이트 자료 두 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인·공격자 지갑 주소</strong> — 익스플로러(etherscan·tronscan) 조회 가능.</li>\n<li><strong>트랜잭션 해시·시각</strong> — 자산 이체 입증.</li>\n<li><strong>가짜 에어드롭 사이트 URL·캡처</strong> — 도메인·SSL·디자인 자료.</li>\n<li><strong>광고 출처 (트위터·SNS·텔레그램) 캡처</strong> — 유도 경로.</li>\n<li><strong>본인 지갑 거래 이력 (피해 직전·직후)</strong> — 통상 거래와 비교.</li>\n<li><strong>거래소 입출금 내역 (국내 거래소 경유 시)</strong> — 동결 요청 자료.</li>\n<li><strong>본인 신분증·통신 가입 자료</strong> — 사이버수사대 신고 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자산이 국내 거래소(업비트·빗썸·코인원)로 입금된 정황이 보이면 거래소 KYC 정보로 신원 특정 가능성이 커지는 영역. 트랜잭션 추적은 사이버수사대가 거래소와 공조하는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 회수 장애와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>해외 지갑 송금 후 추적 불가</strong> — 믹서·체인 브릿지 경유 시 추적 어려운 영역. 체인 분석 전문업체 협조 검토.</li>\n<li><strong>거래소 KYC 미가입 지갑</strong> — 일부 해외 거래소·DEX는 신원 특정 어려운 영역.</li>\n<li><strong>"본인이 시드 입력했다" 책임론</strong> — 사기 자체는 형법상 처벌 영역. 본인 과실 정황은 손해배상 과실상계 자료 정도.</li>\n<li><strong>도메인·SSL 차단 늦음</strong> — KISA 신고 후 동일 도메인 변형 사이트 즉시 재등장. 도메인 패턴 자료 누적.</li>\n<li><strong>공동 고소 효과</strong> — 동일 도메인·동일 패턴 피해자 다수면 공조 강화. 텔레그램·디스코드 단체 모집 권장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr, 182)</strong></li>\n<li><strong>KISA 118</strong> — 가짜 사이트·도메인 차단.</li>\n<li><strong>금융감독원 1332</strong> — 가상자산 사기 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 컴퓨터등사용사기 + 정보통신망법 위반 동시 적용',
        summary:
          '대법원 2020다10330 사건 영역에서 법원은 피해자의 의사에 반하여 정보처리장치에 허위 정보·부정한 명령을 입력해 재산상 이익을 취득하는 행위는 형법 제347조의2 컴퓨터등사용사기 또는 정보통신망법상 정보통신망 침해 영역으로 평가될 수 있다고 본 사례가 있습니다. 가상자산을 직접 탈취하는 수법도 같은 법리 영역으로 평가되는 흐름입니다.',
        takeaway: '에어드롭 사칭 시드 탈취는 단순 사기죄를 넘어 컴퓨터등사용사기·정보통신망법 위반으로 평가될 여지가 있는 영역. 신고 시 사이버수사대 + KISA 동시 공조가 가장 효율적인 사례입니다.',
      },
    ],
    faq: [
      {
        question: '자산이 이미 해외 거래소로 흘러갔어요. 회수 가능한가요?',
        answer:
          '<strong>국내 경유 정황이 있으면 일부 가능합니다.</strong> 사이버수사대가 국내 거래소와 공조해 동결·환수한 사례가 있는 영역. 추적 자료가 핵심.',
      },
      {
        question: '본인이 시드를 입력한 거라 책임이 본인 아닌가요?',
        answer:
          '<strong>사기 자체는 형법상 처벌 영역입니다.</strong> 본인 과실은 손해배상 과실상계 자료 정도. 형사 처벌은 본인 입력 여부와 별개 영역입니다.',
      },
      {
        question: '같은 사이트 피해자가 50명 넘게 있어요',
        answer:
          '<strong>공동 고소가 효율적입니다.</strong> 텔레그램·디스코드 모임 + 동일 도메인·동일 패턴 자료 누적해 공조 강화. KISA 차단도 빨라지는 영역.',
      },
      {
        question: '경찰 신고하면 어디로 가나요?',
        answer:
          '<strong>사이버수사대(ecrm.police.go.kr) 또는 관할 경찰서.</strong> 온라인 신고가 가장 빠른 경로. 사건사고사실확인원 발급 받아 거래소 동결 요청에 사용.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voice-phishing-100m-plus-recovery' },
      { label: 'SNS 투자 사기', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '로맨스 스캠 회수', href: '/guide/fraud/fraud-romance-scam-recovery-steps' },
      { label: '사기 고소 준비', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 형량 4축', href: '/guide/fraud/fraud-sentencing-four-axes-amount-settle-prior' },
    ],
  },

  // ─── 2. fraud / fraud-telegram-stock-pump-dump-track ───
  {
    domain: 'fraud',
    slug: 'fraud-telegram-stock-pump-dump-track',
    keyword: '텔레그램 종목방 시세조종',
    questionKeyword: '텔레그램방에서 \"세력 매집 들어간다\"는 신호 보고 샀는데 다음 날 폭락했어요. 사기인가요?',
    ctaKeyword: '종목방 시세조종 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '텔레그램 종목방 시세조종 — 5단계 신고·회수 | 로앤가이드',
      description:
        '\'세력 매집\' 신호 후 단기 폭락한 텔레그램·디스코드 종목방 시세조종 피해 5가지 신고 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'유료 리딩방\'에 입장해 \'다음 주 △△△ 세력 매집 들어간다\'는 신호를 받고 1,500만원을 풀매수 했어요. 다음 날 9시 동시호가 폭등 후 10시쯤 단번에 -25% 하락. 방 운영자는 \'손절하고 다음 종목 가자\'며 분위기를 돌렸습니다." 자본시장법 제176조는 시세조종 행위(허위 매수 유도·통정매매·자전거래)를 금지하고, 같은 법 제178조는 부정거래행위(거짓 정보 유포)를 금지하는 영역입니다. 텔레그램·디스코드 유료 리딩방에서 \'세력 매집\' 신호로 매수를 유도한 후 운영자가 미리 매집한 물량을 떠넘기는 패턴은 시세조종·부정거래 영역으로 평가될 여지가 있는 사례입니다. 회수는 ① 금융감독원 신고 ② 사이버수사대 신고 ③ 한국거래소 시장감시 ④ 민사 손해배상 트랙이 있고, 동일 방 피해자 공동 행동이 결정적인 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 종목방 시세조종 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입 경로·신호 내용·매매 시점·운영자 보유·피해자 규모 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입 경로 (유료·무료)</strong> — 운영자에게 가입비·이용료 지급 정황. 카드·계좌 이체 자료.</li>\n<li><strong>② 신호 내용 (\'세력 매집\'·\'호가창 분석\')</strong> — 구체적 종목·시점 지정. 단순 \'관심 종목\'과 구분.</li>\n<li><strong>③ 본인 매매 시점·금액</strong> — 신호 직후 매수, 폭락 직전 운영자 매도 정황.</li>\n<li><strong>④ 운영자 차명·미리 매집 정황</strong> — 호가·체결 데이터 분석. 한국거래소 시장감시본부 조사 영역.</li>\n<li><strong>⑤ 피해자 규모·동일 패턴</strong> — 같은 방에서 같은 종목 매수한 다수 정황. 공동 고소 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'세력 매집\'·\'호가창 분석\'·\'다음 주 폭등\' 류 신호는 단순 리딩이 아닌 시세조종·부정거래 영역으로 평가될 여지가 있는 사례. 운영자의 차명 보유 + 미리 매집 정황이 자료로 누적되면 자본시장법 처벌 트랙이 열립니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·거래소·경찰 공조 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신호·매매 자료 백업 (24시간 내)</strong> — 텔레그램방 대화·신호 캡처·본인 매매 체결 내역.</li>\n<li><strong>2단계 — 금융감독원 1332 신고 + 한국거래소 시장감시</strong> — 시장감시본부 조사 의뢰.</li>\n<li><strong>3단계 — 사이버수사대 신고 (ecrm.police.go.kr, 1주 내)</strong> — 자본시장법 위반 + 사기 혐의.</li>\n<li><strong>4단계 — 동일 방 피해자 단체 신고 (1~2주)</strong> — 텔레그램·디스코드 공동 고소단 구성.</li>\n<li><strong>5단계 — 민사 손해배상 (1~3년)</strong> — 운영자 신원 특정 시 손해배상. 운영자 차명 계좌 추적 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">종목방 시세조종 신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신호·매매·운영자 갈래입니다.</strong></p>\n<ul>\n<li><strong>텔레그램·디스코드 방 가입·신호 캡처</strong> — 가입 시점·운영자 ID·신호 내용.</li>\n<li><strong>본인 증권 계좌 매매 체결 내역</strong> — 신호 직후 매수·폭락 시점 자료.</li>\n<li><strong>운영자 계좌 이체 자료 (유료 가입비)</strong> — 가입 비용 추적.</li>\n<li><strong>해당 종목 차트·체결 데이터</strong> — 한국거래소 자료. 통정매매·자전거래 정황.</li>\n<li><strong>동일 방 피해자 진술서 (10명 이상 권장)</strong> — 공동 고소 자료.</li>\n<li><strong>본인 신분증·통신 가입 자료</strong> — 사이버수사대 신고용.</li>\n<li><strong>금감원·거래소 신고 접수증</strong> — 공조 트랙 추적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신호 내용을 \'관심종목\'·\'추천\'으로 두루뭉술하게 표현한 방은 운영자 책임 회피용 영역. \'세력\'·\'매집\'·\'급등 예정\' 같은 명시 표현이 자료로 강력합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 장애와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"투자 권유 아닌 단순 정보 공유" 주장</strong> — 신호 표현·매매 유도 자료가 핵심. \'세력 매집\'은 단순 정보 공유 영역을 벗어남.</li>\n<li><strong>"본인 책임 투자" 주장</strong> — 시세조종·부정거래 자체는 자본시장법 처벌 영역. 본인 과실은 손해배상 과실상계 자료.</li>\n<li><strong>"운영자 익명·해외 거주" 추적 한계</strong> — 차명 계좌·통신 가입 자료 추적이 핵심. 금감원·거래소 공조.</li>\n<li><strong>공동 고소 효과</strong> — 동일 방 피해자 10명 이상이면 시장감시본부 우선 조사 가능성 영역.</li>\n<li><strong>형사 처벌 자료</strong> — 자본시장법 제443조 시세조종은 1년 이상 유기 또는 이익액 3~5배 벌금 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332</strong> — 자본시장 사기 신고.</li>\n<li><strong>한국거래소 시장감시본부</strong> — 시세조종 조사 의뢰.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr, 182)</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자본시장법 시세조종·부정거래',
        summary:
          '대법원 2019도980 사건 영역에서 법원은 거짓의 시세를 조성하거나 부정한 수단을 사용해 거래를 유인하는 행위는 자본시장법 제176조·제178조 시세조종·부정거래 영역으로 평가되며, 행위자가 미리 매집한 물량을 떠넘기는 패턴이 입증되면 형사 처벌과 더불어 손해배상 책임이 인정될 여지가 있다는 취지로 본 사례가 있습니다.',
        takeaway: '단순 \'리딩\'·\'정보 공유\'가 아니라 \'세력 매집\'·\'급등 예정\' 신호로 매수를 유도한 후 운영자가 미리 매집한 물량을 처분하는 패턴은 자본시장법 처벌 영역. 자료가 누적되면 형사 + 민사 트랙이 동시 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '제가 사인한 \"본인 투자 책임\" 약관이 있는데도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 시세조종·부정거래 자체는 자본시장법 강행규정 위반이라 약관으로 면제 불가 영역. 약관은 손해배상 과실상계 자료 정도.',
      },
      {
        question: '운영자가 해외에 있는 것 같아요',
        answer:
          '<strong>차명 계좌·통신 가입 자료 추적이 가능합니다.</strong> 가입비 송금 계좌·휴대전화·이메일 자료가 자료. 사이버수사대 + 금감원 공조 영역.',
      },
      {
        question: '같은 방에서 폭락한 피해자가 30명 됩니다',
        answer:
          '<strong>공동 고소가 효율적입니다.</strong> 동일 방·동일 종목·동일 신호 패턴 자료 누적. 시장감시본부 우선 조사 가능성 영역.',
      },
      {
        question: '손실액 얼마부터 신고 가능한가요?',
        answer:
          '<strong>금액 무관 신고 가능합니다.</strong> 형사 처벌은 운영자 이익액 기준이고 피해자 금액과 별개 영역. 자료 누적이 핵심입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'SNS 투자 사기', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '코인 사기 회수', href: '/guide/fraud/fraud-crypto-airdrop-seed-phrase-theft-track' },
      { label: '사기 고소 준비', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 형량 4축', href: '/guide/fraud/fraud-sentencing-four-axes-amount-settle-prior' },
      { label: '합의 영향', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
    ],
  },

  // ─── 3. fraud / fraud-real-estate-double-contract-recovery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-real-estate-double-contract-recovery-track',
    keyword: '부동산 이중계약 사기',
    questionKeyword: '계약금 5천만원 줬는데 매도인이 다른 사람한테도 똑같이 팔았더라고요. 회수 가능한가요?',
    ctaKeyword: '부동산 이중계약 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부동산 이중계약 사기 — 5단계 회수·형사 | 로앤가이드',
      description:
        '매도인이 같은 부동산을 다른 매수인에게도 매도해 계약금이 묶였다면 회수·형사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 매수 계약금 5천만원을 보냈어요. 잔금 일주일 전 등기부등본을 떼보니 다른 사람 이름으로 \'소유권이전등기 신청\'이 접수돼 있었습니다. 매도인은 \'먼저 잔금 낸 사람한테 넘어갔다\'며 \'계약금은 위약금으로 갈음\'한다고 일방 통보했어요." 부동산 이중매매는 형법 제355조 횡령·배임 또는 제347조 사기 영역으로 평가될 수 있는 사례입니다. 회수는 ① 계약금 반환 + 위약금 청구 ② 처분금지가처분 (잔금 임박 시) ③ 형사 고소 (배임·사기) ④ 다른 매수인에 대한 부당이득 반환 청구 (이중 양수가 미리 알았던 사례) ⑤ 부동산중개사 책임 다툼 트랙이 있는 영역입니다. 대법원 2018다301350 사건은 이중매매 매도인 측 배임 책임을 인정한 영역으로 평가됩니다.</p>',
    sections: [
      {
        title: 'Q. 이중계약 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 시점·계약금·다른 매수인·등기 시점·중개사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 계약 시점·계약서</strong> — 매매계약서·계약금 지급 영수증. 매도인 인감 확인.</li>\n<li><strong>② 다른 매수인 계약 시점</strong> — 본인 계약 전·후 여부. 후 계약이면 배임 영역. 전 계약이면 매도인 사기 영역.</li>\n<li><strong>③ 등기부 변동 이력</strong> — 등기부등본 신청 시점·이전 등기 진행 상황.</li>\n<li><strong>④ 다른 매수인 인지 여부</strong> — 본인 계약 사실 알고 매수했는지. \'알고 양수\' 시 그 매수인도 다툼 대상.</li>\n<li><strong>⑤ 부동산중개사 책임</strong> — 중개사가 이중계약 알면서도 거래 진행 정황. 손해배상·자격정지 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약금 반환은 민사 트랙, 배임·사기는 형사 트랙, 처분금지가처분은 잔금 임박 시 가장 결정적인 영역. 시간 우선순위가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 가처분·고소·반환청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부 확인·자료 백업 (즉시)</strong> — 등기부등본 신청·매매계약서·계약금 영수증·문자·녹취.</li>\n<li><strong>2단계 — 처분금지가처분 (등기 이전 전, 1~3일)</strong> — 법원 가처분 신청. 다른 매수인 등기 이전 차단.</li>\n<li><strong>3단계 — 형사 고소 (1주 내)</strong> — 배임·사기. 관할 경찰서 또는 검찰.</li>\n<li><strong>4단계 — 민사 청구 (계약금 반환 + 위약금)</strong> — 매매계약 해제 + 손해배상. 다른 매수인이 알고 양수했으면 그 매수인 상대 부당이득 반환 청구 검토.</li>\n<li><strong>5단계 — 중개사 책임 트랙 (별도)</strong> — 중개사·중개법인 손해배상. 한국공인중개사협회 분쟁조정 동시 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">이중계약 회수·형사 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·중개사 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서 원본·사본</strong> — 계약 시점·금액·매도인 인감 확인.</li>\n<li><strong>계약금 송금 자료·영수증</strong> — 지급 입증.</li>\n<li><strong>등기부등본 (계약 직후·현재)</strong> — 변동 이력 비교.</li>\n<li><strong>매도인·다른 매수인 카톡·문자·녹취</strong> — 정황 자료.</li>\n<li><strong>부동산중개사 명함·중개 카드</strong> — 중개사 책임 추적.</li>\n<li><strong>주민등록증·신분증 사본</strong> — 본인 입증.</li>\n<li><strong>등기 이전 신청서 사본 (등기소)</strong> — 다른 매수인 진행 상황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약금 송금 시 매매계약서 상 매도인 본인 명의 계좌인지 확인. 본인 명의 아니면 사기 정황 자료가 더 단단해지는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 장애와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"먼저 잔금 낸 사람 우선" 주장 반박</strong> — 등기 이전 전이면 가처분으로 차단 가능. 형사 배임 영역.</li>\n<li><strong>"위약금으로 갈음" 일방 통보 반박</strong> — 매도인 측 계약 위반이면 위약금 + 손해배상 별도. 계약금 배액 반환 영역.</li>\n<li><strong>다른 매수인 \'알고 양수\' 정황</strong> — 다른 매수인 상대 부당이득 반환 청구 가능. 거래 정황·중개사 진술이 자료.</li>\n<li><strong>중개사 책임 자료</strong> — 중개사가 이중계약 알았거나 알 수 있었으면 손해배상 + 자격정지 영역.</li>\n<li><strong>형사 처벌 자료</strong> — 배임 5년 이하 징역, 사기 10년 이하 징역 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부동산 사기 무료 상담.</li>\n<li><strong>경찰청 182</strong> — 사기·배임 신고.</li>\n<li><strong>한국공인중개사협회</strong> — 중개사 책임 분쟁조정.</li>\n<li><strong>법원 가처분</strong> — 처분금지가처분 신청.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부동산 이중매매 배임죄 성립',
        summary:
          '대법원 2018다301350 사건 영역에서 법원은 부동산 매도인이 매수인으로부터 계약금·중도금을 받은 후 같은 부동산을 제3자에게 다시 매도하여 등기를 이전해버린 경우, 매도인의 등기 협력 의무 위반은 형법 제355조 배임 영역으로 평가될 수 있고, 매수인은 매매계약 해제 + 계약금 배액 반환 + 손해배상 청구가 가능하다는 취지로 본 사례가 있습니다.',
        takeaway: '계약금 + 중도금까지 받은 매도인이 등기 이전 전 다른 사람에게 같은 부동산을 매도하면 배임 영역. 가처분 신청이 잔금 이전 시점에 결정적인 트랙으로 작용하는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '아직 잔금 안 냈어요. 어떻게 막을 수 있나요?',
        answer:
          '<strong>처분금지가처분이 핵심입니다.</strong> 법원 가처분 신청으로 등기 이전 차단. 1~3일 내 결정 사례가 많은 영역.',
      },
      {
        question: '계약금 5천만원 돌려받을 수 있나요?',
        answer:
          '<strong>계약금 배액 반환 + 손해배상 영역입니다.</strong> 매도인 측 계약 위반이면 계약금 + 동액 위약금 영역(민법 제565조).',
      },
      {
        question: '다른 매수인이 \"몰랐다\"고 합니다',
        answer:
          '<strong>알 수 있었는지가 자료입니다.</strong> 매도인 측 정황·중개사 진술·계약 시기로 다툼. 알고 양수면 부당이득 반환 청구 가능.',
      },
      {
        question: '중개사가 잘못 알선한 경우는?',
        answer:
          '<strong>중개사 손해배상·자격정지 영역입니다.</strong> 중개사 보증보험·중개법인 책임도 자료. 한국공인중개사협회 분쟁조정 동시 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '전세 사기 회수', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '사기 고소 준비', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 형량 4축', href: '/guide/fraud/fraud-sentencing-four-axes-amount-settle-prior' },
      { label: '합의 영향', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '범죄피해자 부대청구', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
    ],
  },

  // ─── 4. fraud / fraud-job-scam-recruitment-deposit-recovery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-job-scam-recruitment-deposit-recovery-track',
    keyword: '채용 사기 보증금 회수',
    questionKeyword: '입사 전에 유니폼비·교육비로 200만원 보냈는데 출근하라더니 연락 끊겼어요',
    ctaKeyword: '채용 사기 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '채용 사기 보증금 — 5단계 회수·신고 | 로앤가이드',
      description:
        '\'유니폼비·교육비·보증금\' 명목으로 돈을 받고 잠적한 채용 사기 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"잡코리아 공고로 이력서 넣었는데 \'합격\'이라며 면접 없이 입사 결정. \'유니폼·신분증 카드·교육 자료 비용 200만원을 미리 입금하면 첫 월급에 환급한다\'는 안내를 받고 송금했어요. 출근 일자가 오기 직전 연락이 끊겼고 회사 이름으로 검색하니 같은 피해자가 게시판에 20명 넘게 모여 있었습니다." 직업안정법 제32조는 직업소개·근로자모집 시 구직자에게 금품을 요구·수령하는 행위를 명시적으로 금지하는 영역입니다. \'유니폼비\'·\'교육비\'·\'보증금\' 명목 사전 입금 요구 자체가 위법 영역이고, 추가로 형법 제347조 사기 영역으로 평가되는 사례입니다. 회수는 ① 계좌 동결 ② 사이버수사대 신고 ③ 노동부 직업안정 단속 신고 ④ 채용 사이트 신고 ⑤ 민사 손해배상 다섯 트랙이 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 채용 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 공고 경로·면접 진정성·송금 명목·연락 두절·피해자 규모 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공고 경로 (잡코리아·사람인·SNS)</strong> — 정식 채용 사이트인지 SNS 광고 출처인지.</li>\n<li><strong>② 면접 진정성</strong> — 면접 없이 합격, 화상 면접만, 직무 설명 모호. 정황 자료.</li>\n<li><strong>③ 송금 명목</strong> — 직업안정법 제32조 금지 영역(유니폼·신분증·교육·보증금 명목 모두 위법).</li>\n<li><strong>④ 연락 두절 시점</strong> — 입금 후 며칠 만에 두절. 사용자 측 도주 정황.</li>\n<li><strong>⑤ 동일 피해자 규모</strong> — 회사명·계좌번호·담당자 이름이 다수 게시판에 나오면 공동 고소 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'채용 비용\'을 구직자에게 요구하는 것 자체가 직업안정법 위반 영역. 사기 형사 트랙과 별도로 노동부 단속 트랙도 가능한 사례입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·노동부·채용 사이트 공조 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 백업 (24시간 내)</strong> — 채용 공고·합격 통보 메일·송금 영수증·담당자 카톡·전화번호.</li>\n<li><strong>2단계 — 송금 은행 지급정지 요청 (1~2시간)</strong> — 은행 보이스피싱 신고 절차 활용 가능.</li>\n<li><strong>3단계 — 사이버수사대 신고 (ecrm.police.go.kr)</strong> — 사기 + 직업안정법 위반.</li>\n<li><strong>4단계 — 고용노동부 직업안정 단속 신고 (1350)</strong> — 직업안정법 제32조 위반.</li>\n<li><strong>5단계 — 채용 사이트 신고 (잡코리아·사람인)</strong> — 공고 차단 + 회사 정보 확인 요청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">채용 사기 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 공고·송금·연락 갈래입니다.</strong></p>\n<ul>\n<li><strong>채용 공고 캡처 (잡코리아·사람인·SNS)</strong> — 공고 ID·게시일.</li>\n<li><strong>합격 통보 메일·문자·카톡</strong> — 합격 시점·담당자 이름.</li>\n<li><strong>송금 영수증·계좌번호</strong> — 사용자 측 계좌 추적.</li>\n<li><strong>유니폼비·교육비 안내 자료</strong> — 위법 영역 자료.</li>\n<li><strong>본인 신분증·통신 가입 자료</strong> — 신고용.</li>\n<li><strong>동일 피해자 진술서·게시판 글 캡처</strong> — 공동 고소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 사업자등록번호를 국세청·중기부 사이트에서 조회해 실재 회사인지 확인. 미등록·휴면 사업자면 정황 자료가 강력합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 장애와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"교육비·유니폼비 환불 약속" 주장 반박</strong> — 환불 약속 자체가 직업안정법 위반 영역. 약속 무효.</li>\n<li><strong>"본인 동의" 주장 반박</strong> — 강행규정 위반. 동의로 면제 불가.</li>\n<li><strong>"개인 계좌가 아닌 회사 계좌" 추적</strong> — 회사 사업자등록·국세청 조회.</li>\n<li><strong>동일 패턴 다수 피해</strong> — 공동 고소 효율적. 사이버수사대 우선 조사 가능성.</li>\n<li><strong>형사 처벌 자료</strong> — 사기 10년 이하 징역. 직업안정법 위반 5년 이하 징역 또는 5천만원 이하 벌금 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 (ecrm.police.go.kr, 182)</strong></li>\n<li><strong>고용노동부 1350</strong> — 직업안정 단속.</li>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n<li><strong>채용 사이트 신고 (잡코리아·사람인)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채용 명목 금품 요구 사기·직업안정법 위반',
        summary:
          '대법원 2024다18174 사건 영역에서 법원은 채용·근로자 모집 명목으로 구직자에게 금품을 요구·수령하는 행위는 직업안정법 위반에 해당하며, 채용 의사 없이 또는 채용 가능성이 명백히 낮은 상태에서 금품을 받아 가로채면 형법 제347조 사기 영역으로 평가될 여지가 있다는 취지로 본 사례가 있습니다.',
        takeaway: '\'환불 약속\'·\'본인 동의\' 같은 약관은 직업안정법 위반을 우회하지 못하는 영역. 사기 + 직업안정법 위반 동시 트랙이 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '\"첫 월급에 환급\"이라고 약속받았는데도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 채용 명목 금품 요구 자체가 위법 영역. 약속 무효. 사기 + 직업안정법 위반 동시 트랙.',
      },
      {
        question: '계좌가 회사 계좌라서 추적 안 되나요?',
        answer:
          '<strong>회사 사업자등록 조회 가능합니다.</strong> 국세청·중기부 조회로 실재 여부 확인. 미등록·휴면이면 정황 자료.',
      },
      {
        question: '같은 회사 피해자가 20명 됩니다',
        answer:
          '<strong>공동 고소가 효율적입니다.</strong> 동일 패턴 자료 누적. 사이버수사대 우선 조사 가능성.',
      },
      {
        question: '은행 지급정지 늦었으면 회수 불가인가요?',
        answer:
          '<strong>형사·민사 트랙은 별도로 가능합니다.</strong> 형사 처벌 후 부대청구 또는 별도 손해배상 청구. 132 자문 활용.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voice-phishing-100m-plus-recovery' },
      { label: '사기 고소 준비', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: 'SNS 사기', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '사기 형량 4축', href: '/guide/fraud/fraud-sentencing-four-axes-amount-settle-prior' },
      { label: '범죄피해자 부대청구', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
    ],
  },

  // ─── 5. fraud / fraud-overseas-shopping-card-chargeback-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-shopping-card-chargeback-track',
    keyword: '인터넷 쇼핑 카드 차지백',
    questionKeyword: '인스타 광고 보고 해외 사이트에서 옷 샀는데 두 달째 배송 안 와요. 카드로 환불 받을 수 있나요?',
    ctaKeyword: '카드 차지백 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 쇼핑 카드 차지백 — 5단계 환불 트랙 | 로앤가이드',
      description:
        '해외 사이트·SNS 광고 결제 후 미배송·가품 수령 시 카드 차지백 5가지 환불 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타 광고에서 \'정품 △△ 브랜드 50% 할인\'을 봤어요. 신용카드로 25만원 결제했는데 두 달 넘게 배송이 안 옵니다. 사이트는 \'주문 확인됨\'으로만 표시되고 메일·채팅은 응답 없음. 카드사에 문의하니 \'해외 결제는 차지백(chargeback) 신청 가능하다\'고 안내받았어요." 카드 차지백은 비자·마스터·아멕스 등 국제 결제 네트워크가 정한 \'미배송\'·\'가품 수령\'·\'사기 결제\' 사유로 결제 취소를 요청하는 영역입니다. 국내 통신판매 분쟁조정 트랙과 별도로 카드사·국제 네트워크가 직접 처리하는 사례. 신청 기한이 결제일·예상 배송일 기준 60~120일 정도로 짧은 영역이라 빠른 자료 정리가 핵심입니다. 한국소비자원·금융감독원 분쟁조정 트랙도 병행 가능한 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 카드 차지백 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제일·미배송 사유·카드 네트워크·기한·자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제일·예상 배송일</strong> — 차지백 기한 카운트 시작점. 60~120일 한도.</li>\n<li><strong>② 미배송 사유</strong> — 송장 미발급·송장 위조·반품 거부·가품 수령. 사례별 적용 코드 다름.</li>\n<li><strong>③ 카드 네트워크 (비자·마스터·아멕스)</strong> — 각 네트워크별 절차·기한 약간 다름.</li>\n<li><strong>④ 신청 기한</strong> — 비자·마스터 통상 120일. 분쟁 자료 첨부 필수.</li>\n<li><strong>⑤ 자료 (송장·메일·캡처)</strong> — 사이트와의 분쟁 시도 자료가 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차지백은 \'먼저 사이트와 해결 시도 후 안 되면 신청\'이 원칙이라 분쟁 시도 자료(메일·채팅·트래킹)가 필수. 기한 60~120일 영역이라 빠른 자료 정리가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차지백·환불 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 카드사·분쟁조정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 백업 (즉시)</strong> — 결제 명세서·주문 확인 메일·송장(있다면)·사이트 캡처.</li>\n<li><strong>2단계 — 사이트와의 분쟁 시도 (1~2주)</strong> — 환불·재배송 요청 메일·채팅. 응답·미응답 모두 자료.</li>\n<li><strong>3단계 — 카드사에 차지백 신청 (60~120일 내)</strong> — 결제 취소 신청서 + 분쟁 시도 자료 + 미배송 입증.</li>\n<li><strong>4단계 — 카드사·국제 네트워크 조사 (1~2개월)</strong> — 카드사가 매입사(국외)에 분쟁 통보. 매입사 답변 후 결정.</li>\n<li><strong>5단계 — 분쟁조정 병행 (한국소비자원 1372, 금감원 1332)</strong> — 차지백 거부 시 별도 분쟁조정 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 쇼핑 차지백 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·분쟁·미배송 갈래입니다.</strong></p>\n<ul>\n<li><strong>카드 결제 명세서 (결제일·금액·매입사)</strong> — 결제 입증.</li>\n<li><strong>주문 확인 메일·주문 번호</strong> — 거래 입증.</li>\n<li><strong>송장 (있다면) 또는 송장 부재 확인 자료</strong> — 미배송 입증.</li>\n<li><strong>사이트와의 분쟁 시도 메일·채팅 캡처</strong> — 노력 입증.</li>\n<li><strong>사이트 URL·도메인 등록 정보 (whois)</strong> — 사기 의심 정황.</li>\n<li><strong>본인 신분증·카드 본인 사용 입증</strong> — 카드사 신청용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 시 \'본인이 직접 결제했다\'는 사실은 사기 결제(부정 사용)와 다른 분쟁 코드라 \'미배송\'·\'가품\' 사유로 신청해야 합니다. 카드사 콜센터에서 정확한 코드 안내 받기.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 장애와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"송장 발급됐다"는 사이트 주장 반박</strong> — 송장 추적 결과·실제 미수령 자료. 송장 위조 정황도 자료.</li>\n<li><strong>"본인이 동의 결제" 주장 반박</strong> — 결제는 동의했어도 미배송·가품은 차지백 사유 영역.</li>\n<li><strong>기한 도과</strong> — 60~120일 한도. 도과 후엔 카드사·분쟁조정 어려운 영역. 빠른 신청 핵심.</li>\n<li><strong>가품 수령</strong> — 정품 인증서·브랜드 공식 회신·전문가 감정서 자료.</li>\n<li><strong>형사·민사 트랙</strong> — 사기죄 신고 + 손해배상 별도 가능. 사이트 운영자 신원 특정 시.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong> — 통신판매 분쟁조정.</li>\n<li><strong>금융감독원 1332</strong> — 카드 분쟁.</li>\n<li><strong>경찰청 사이버범죄 (ecrm.police.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신판매 미배송 사기·소비자 보호',
        summary:
          '대법원 2023도17394 사건 영역에서 법원은 사업자가 통신판매 명목으로 결제를 받고 처음부터 배송 의사 없이 또는 배송 능력 없는 상태에서 금원을 받아 가로채는 행위는 사기 영역으로 평가되고, 카드 결제의 경우 카드 네트워크의 차지백 절차로 환불받을 수 있다고 본 영역으로 평가됩니다.',
        takeaway: '미배송 + 응답 두절 + 동일 피해 다수 정황이 모이면 사기 형사 트랙과 카드 차지백 트랙이 병행 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '결제한 지 80일 됐어요. 신청 가능한가요?',
        answer:
          '<strong>비자·마스터 통상 120일 한도라 가능합니다.</strong> 카드사별 약관 확인 후 즉시 신청.',
      },
      {
        question: '카드사가 \"본인 결제라 안 된다\"고 합니다',
        answer:
          '<strong>분쟁 코드가 다릅니다.</strong> 본인 결제 동의했어도 \'미배송\'·\'가품\' 사유는 별도 차지백 영역. 카드사 콜센터 재확인.',
      },
      {
        question: '한국소비자원 분쟁조정도 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 1372 통신판매 분쟁조정 트랙. 다만 해외 사이트는 결과 강제력 약한 영역이라 카드 차지백 트랙이 더 효율적.',
      },
      {
        question: '사기죄 신고도 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 미배송 + 응답 두절 + 동일 피해 다수면 사기 영역. 사이버수사대 신고 + 차지백 동시 트랙.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '미배송 사기 회수', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: 'SNS 광고 환불 거부', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '사기 고소 준비', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '한국소비자원 분쟁조정', href: '/guide/small-claims/small-claims-where-to-start' },
      { label: '범죄피해자 부대청구', href: '/guide/fraud/fraud-victim-criminal-attached-civil-claim' },
    ],
  },
];
