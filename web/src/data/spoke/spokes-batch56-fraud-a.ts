import { SpokePage } from '../spoke-pages';

// batch56 fraud A — 3개:
// 1. 보험금 사기 공모 가담 무고 (가해자 무고 트랙)
// 2. NFT 발행자 잠적 러그풀 (피해자)
// 3. 외제차 리스 보증금 잠적 (피해자)
//
// 고유 존재 이유:
// 1. 이 페이지는 단순 차량 빌려준 행위가 보험금 사기 공모로 입건된 사람이 공모공동정범 성립 요건 + 범행의 고의 부재 입증으로 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 NFT 프로젝트 발행자가 토큰 발행 후 잠적해 자금을 들고 사라진 피해자가 사기 + 유사수신 + 자본시장법 결합 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 외제차 리스 명목으로 보증금 1천만원을 보낸 후 리스사가 잠적한 피해자가 사기 + 부당이득반환 + 가처분 4단계 회수 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56FraudA: SpokePage[] = [
  // ─── 1. fraud / fraud-insurance-conspiracy-falsely-accused ───
  {
    domain: 'fraud',
    slug: 'fraud-insurance-conspiracy-falsely-accused',
    keyword: '보험금 사기 공모 가담 무고 방어',
    questionKeyword: '친구가 사고낸 차량을 빌려줬을 뿐인데 보험금 사기 공모로 입건됐어요. 어떻게 방어하나요?',
    ctaKeyword: '보험금 사기 공모 무고 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '보험금 사기 공모로 입건됐다면 — 4가지 방어 트랙 | 로앤가이드',
      description:
        '단순 차량 빌려준 행위가 보험금 사기 공모로 입건됐다면 공모공동정범 성립요건 + 고의 부재 입증 4가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"친한 친구가 \'잠깐 차량 좀 빌려달라\'고 해서 빌려줬을 뿐인데, 그 차량으로 보험금 사기 사고를 낸 사실을 나중에 알게 됐어요. 경찰에서 \'공모로 입건한다\'며 출석 통보가 왔습니다." 보험금 사기 공모는 형법 제30조 공동정범 + 상법 제659조 보험금 편취 결합 영역이지만, 대법원 2024도10141 판결은 공모공동정범 성립을 위해서는 하나의 범죄행위에 관여한 여러 사람 사이에 공모관계가 있어야 하고, 본인이 자신의 행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우라면 죄책을 물을 수 없다고 판시했습니다. 단순 차량 빌려준 행위가 보험금 사기 공모로 평가되려면 ① 사기 계획 인식 ② 공모 의사 합치 ③ 본질적 기여 3가지 요건 충족이 필요한 영역이라, 무고 방어 트랙으로 검토할 수 있는 사례가 있어요.</p>',
    sections: [
      {
        title: 'Q. 보험금 사기 공모 무고 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기 계획 인식·공모 의사·본질적 기여·범행 시점 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기 계획 인식 부재</strong> — 차량을 빌려준 시점에 친구의 사기 계획을 알고 있었는지가 핵심. 단순 \'차량 빌려달라\' 요청만 받았다면 사기 계획 인식 부재 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>② 공모 의사 합치 부재</strong> — 사기 범행에 대한 본인과 친구 사이의 의사 합치가 입증돼야 공모 성립. 카톡·문자에 사기 관련 발언이 부재하다면 공모 부재 정황.</li>\n<li><strong>③ 본질적 기여 부재</strong> — 단순 차량 대여만으로는 사기 실행에 본질적 기여가 어려운 사례가 있어, 방조 vs 공모 구분 영역.</li>\n<li><strong>④ 보험금 분배 부재</strong> — 사기 보험금 일부를 분배받지 않았다면 공모 부재 강한 정황. 계좌 이체·현금 수수 부재가 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2024도10141은 외형상 범죄 일부를 실행했더라도 \'행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우\'에는 죄책을 물을 수 없다고 봤습니다. 카톡·통화·계좌 자료로 인식 부재를 입증하면 무고 방어 트랙이 열리는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 조사 출석 → 검찰 송치 → 본안 변론 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 친구와의 카톡·통화 기록·차량 빌려준 시점·보험금 미수령 정황. 사기 인식 부재 입증 핵심 자료.</li>\n<li><strong>2단계 — 변호인 선임 (출석 전 필수)</strong> — 형사 방어는 첫 조사 진술이 결정적. 변호인 동석 권리 행사 + 진술거부권 활용.</li>\n<li><strong>3단계 — 경찰 조사 출석 (10~14일 내)</strong> — 출석요구서 받은 후 14일 이내 출석. 진술서·변호인 의견서 제출.</li>\n<li><strong>4단계 — 검찰 송치 단계 (조사 완료 후 1~3개월)</strong> — 경찰이 \'무혐의\' 의견 송치 시 검사 결정 대기. 보강조사 시 추가 자료 제출.</li>\n<li><strong>5단계 — 기소 시 형사재판 (기소 후 2~6개월)</strong> — 공모공동정범 성립 부재 입증. 범행 시점 본인 행적·인식 부재 자료가 핵심.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">보험금 사기 공모 무고 4가지 방어 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 인식 부재 자료 + 분배 부재 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>친구와의 카톡·문자·통화 기록</strong> — 차량 대여 시 사기 관련 발언 부재 입증.</li>\n<li><strong>차량 대여 시점·반환 시점</strong> — 사고 시점과의 시간 관계.</li>\n<li><strong>본인 통장·계좌 거래 내역</strong> — 보험금 분배 부재 입증.</li>\n<li><strong>당시 본인 행적 자료</strong> — 직장·통화·신용카드 결제 등 알리바이.</li>\n<li><strong>경찰 출석요구서·피의자신문조서</strong> — 혐의 사실 정리.</li>\n<li><strong>차량 등록·보험 관련 자료</strong> — 차량 명의·보험 계약자.</li>\n<li><strong>변호인 선임서·의견서</strong> — 법적 방어 전략 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친구가 \"같이 사기 치자\"는 등의 발언을 카톡으로 한 정황이 부재하다면 매우 강력한 무고 방어 자료. 카톡 백업·복원으로 초기 메시지까지 확보하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"친구가 본인이 알고 있었다고 진술했다" 주장 반박</strong> — 친구의 진술이 본인에게 책임을 전가하기 위한 자료일 수 있어, 카톡·계좌 등 객관 자료와의 일치 여부가 핵심 검토 영역.</li>\n<li><strong>"차량 빌려준 행위 자체로 본질적 기여" 주장 반박</strong> — 단순 대여만으로 본질적 기여 인정은 부족. 사기 인식 + 분배 + 적극 가담 결합이 일반적 영역.</li>\n<li><strong>"방조라도 성립한다" 주장 대응</strong> — 방조도 사기 인식이 있어야 성립. 인식 부재 입증되면 방조도 부정 영역.</li>\n<li><strong>합의·취하는 별개</strong> — 본 건은 보험회사가 피해자라 형사 합의가 사실상 어려운 사례가 많음. 객관 자료 입증이 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 방어 자격 요건 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시 국선 선임.</li>\n<li><strong>경찰 민원 (110·182)</strong> — 부당 출석요구·인권침해 민원.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모공동정범의 성립요건과 고의 부재',
        summary:
          '대법원 2024도10141 사건(대법원, 2024.12.12 선고)에서 법원은 공모공동정범의 성립을 위해서는 하나의 범죄행위에 관여한 여러 사람 사이에 공모관계가 인정돼야 하고, 본인의 행위가 범죄에 이용된다는 사실을 모르고 행위에 나아간 경우에는 죄책을 물을 수 없다고 판시했습니다. 외형상 범죄 일부를 실행했더라도 행위 시점에 범행 인식이 부재했다면 공모공동정범으로 처벌할 수 없다는 사례입니다.',
        takeaway: '단순 차량 대여 행위가 보험금 사기 공모로 입건된 사안은 사기 계획 인식·공모 의사·분배 정황이 결합돼야 공모공동정범 성립 영역으로 평가될 여지가 있어, 카톡·계좌·행적 자료를 정리하면 무고 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '경찰에서 "친구가 본인 알고 있었다고 진술했다"고 합니다',
        answer:
          '<strong>친구의 진술만으로 공모 인정은 어려운 사례가 있습니다.</strong> 카톡·계좌·통화 기록 등 객관 자료와의 일치 여부가 검토되며, 친구가 책임 전가를 위해 허위 진술하는 사례도 있어 객관 증거 우선.',
      },
      {
        question: '경찰 조사 첫 출석에 변호인 없이 가도 되나요?',
        answer:
          '<strong>변호인 동석을 권장합니다.</strong> 첫 조사 진술이 이후 절차에 결정적 영향을 미치는 사례가 있어, 진술거부권 + 변호인 동석으로 자료 정리 후 진술하는 것이 안전. 자격 요건 시 국선 선임 검토.',
      },
      {
        question: '보험금을 받지 않았는데도 공모로 처벌되나요?',
        answer:
          '<strong>분배 부재는 공모 부재 강한 정황 자료입니다.</strong> 다만 \'사기 성공 후 분배 약속\'만으로도 공모 성립 가능성이 있는 사례가 있어, 친구와의 사전 합의 부재 입증이 핵심.',
      },
      {
        question: '친구가 자수했는데 본인은 어떻게 되나요?',
        answer:
          '<strong>친구의 자수가 본인 무고 방어에 유리할 수도 불리할 수도 있습니다.</strong> 자수 진술 내용에 따라 본인 인식 부재가 명확해지면 유리, 본인을 공모자로 끌어들이면 불리. 진술 내용 확인이 핵심.',
      },
      {
        question: '본인이 차량을 빌려준 게 1년 전 일인데 지금 입건됐어요',
        answer:
          '<strong>오래된 자료라도 카톡 백업·통신사 통화 기록은 일정 기간 보관됩니다.</strong> 통신사에 통화 기록 사본 발급 요청, 카톡 백업 복원으로 자료 확보 가능. 자료 부재 자체가 무고 방어 트랙에 부정적이지는 않습니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 누명 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 가해자 1차 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '보이스피싱 전달책 무고', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '사기 공범 인식 부재', href: '/guide/fraud/fraud-accomplice-unknowing-defense' },
      { label: '사기 피의자 신문 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
    ],
  },

  // ─── 2. fraud / fraud-nft-issuer-vanish-rugpull ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-issuer-vanish-rugpull',
    keyword: 'NFT 러그풀 발행자 잠적',
    questionKeyword: 'NFT 프로젝트에 500만원 투자했는데 발행자가 잠적했어요. 회수 가능한가요?',
    ctaKeyword: 'NFT 러그풀 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'NFT 러그풀 발행자 잠적 — 4가지 회수 트랙 | 로앤가이드',
      description:
        'NFT 프로젝트 발행자가 토큰 발행 후 잠적했다면 사기 + 유사수신 + 자본시장법 + 가처분 4가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"트위터에서 화제였던 NFT 프로젝트에 0.3 ETH(약 80만원)을 보냈고, 디스코드 친구들과 합쳐 500만원을 투자했어요. 민팅(발행) 직후 일주일도 안 돼 공식 사이트가 사라지고 디스코드도 폭파됐습니다." NFT 러그풀(Rug Pull)은 형법 제347조 사기죄 + 유사수신행위규제법 + 자본시장법 결합 영역이지만, 발행자가 익명 다수에 글로벌 분산이라 회수 트랙이 한정적인 영역입니다. 그러나 ① 국내 거주 발행자 특정 시 사기 고소 ② 국내 거래소 동결 신청 ③ 트래블 룰 활용 발행자 추적 ④ 다수 피해자 공동 대응 4가지 트랙은 검토할 수 있어요. 송금 직후 1~2주가 자금 추적의 골든타임이라 빠른 행동이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. NFT 러그풀에서 점검할 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 사기 고소·거래소 동결·트래블룰 추적·공동 대응 4단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기 고소 (형법 제347조)</strong> — 발행자가 처음부터 사용 의사 없이 자금을 챙겨 잠적했다면 사기 성립 영역. 로드맵 미이행·SNS 폐쇄·자금 즉시 인출 정황이 핵심 자료.</li>\n<li><strong>② 국내 거래소 동결 신청 (특금법)</strong> — 발행자 자금이 국내 거래소(업비트·빗썸·코인원 등)로 이동했다면 거래소에 사기 의심 신고로 계좌 동결 협조 요청. 트래블 룰(100만원 초과) 자료 활용.</li>\n<li><strong>③ 발행자 특정·추적</strong> — 디스코드·트위터 핸들·이메일·도메인 등록 정보 수집. 국내 거주자라면 ECRM(ecrm.police.go.kr) 신고 + 사이버수사대 협조.</li>\n<li><strong>④ 다수 피해자 공동 대응</strong> — 디스코드·텔레그램에 같은 피해자 모아 공동 고소단 구성. 수사 우선순위 상승 + 자금 동결 효과 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: NFT 러그풀은 발행자 익명·글로벌 분산이라 단독 회수가 어려운 사례가 많음. 다수 피해자 + 국내 거래소 동결 + 사이버수사대 신고 결합이 회수 가능성을 높이는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 거래소 동결 → 사기 고소 → 공동 대응 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 트위터·디스코드·웹사이트 캡처·발행자 핸들·로드맵·민팅 기록·송금 트랜잭션 해시.</li>\n<li><strong>2단계 — 거래소 동결 신청 (1주 내)</strong> — 발행자 자금이 국내 거래소로 이동했다면 사기 의심 신고. 트랜잭션 추적은 etherscan·solscan 등 활용.</li>\n<li><strong>3단계 — ECRM 사기 고소 (2주 내)</strong> — 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) 또는 관할 경찰서 사이버수사대 신고.</li>\n<li><strong>4단계 — 공동 대응단 구성 (1개월)</strong> — 디스코드·텔레그램에 같은 피해자 모집. 공동 고소단 구성으로 수사 우선순위 상승.</li>\n<li><strong>5단계 — 민사 회수 (3~6개월)</strong> — 발행자 특정 후 민사 부당이득반환·손해배상 청구. 발행자 자산이 국내에 있다면 가처분·강제집행 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">NFT 러그풀 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발행자 자료 + 송금 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>발행자 SNS 핸들·웹사이트 캡처</strong> — 트위터·디스코드·텔레그램·공식 사이트.</li>\n<li><strong>로드맵·홍보 자료</strong> — 사기 기망 입증 핵심.</li>\n<li><strong>민팅 트랜잭션 해시</strong> — 송금 시점·금액·받은 주소.</li>\n<li><strong>이메일·DM 통신 기록</strong> — 발행자와의 직접 대화.</li>\n<li><strong>다른 피해자 정황</strong> — 디스코드·트위터 같은 피해 사례.</li>\n<li><strong>거래소 송금 내역</strong> — 발행자 자금이 거래소로 이동한 정황.</li>\n<li><strong>도메인 등록·서버 정보</strong> — 발행자 특정 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발행자가 한국어 발언·시간대·KST 활동 패턴을 보였다면 국내 거주자 가능성. 디스코드 음성·트위터 시간대 분석으로 실마리 확보 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>해외 거주 발행자 회수 한계</strong> — 발행자가 해외 거주·익명이라면 회수 트랙이 매우 제한적. 국내 거래소 동결로 자금 일부 회수가 현실적 영역.</li>\n<li><strong>"투자 손실"로 평가되는 사례 주의</strong> — 단순 NFT 가격 하락은 사기 부정 영역. 발행자의 처음부터의 사기 의도·로드맵 미이행 입증이 핵심.</li>\n<li><strong>유사수신·자본시장법 결합</strong> — NFT가 사실상 \'증권성\'을 가졌다면 자본시장법 위반 결합 가능성. 금감원 신고도 검토.</li>\n<li><strong>공동 대응의 효과</strong> — 1인 회수는 어려운 사례가 많음. 다수 피해자 모집이 수사·자금 동결 효과의 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 사기 신고.</li>\n<li><strong>금융감독원 1332</strong> — 유사수신·자본시장법 위반 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 사기 피해 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 성립과 정보처리장치 입력 매개 기망',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 정보처리장치에 정보를 입력해 그 결과로 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. NFT·암호화폐 거래에서도 발행자가 사이트·홍보자료를 통해 투자자를 기망해 송금 처분행위를 유도했다면 사기죄 성립 영역으로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: 'NFT 러그풀은 발행자의 처음부터의 사기 의도와 로드맵 미이행을 입증하면 사기 성립 검토 영역이라, 트위터·디스코드 캡처·로드맵·트랜잭션 해시를 시간순 정리하면 회수 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '발행자가 외국인 같아 보이는데 회수 가능한가요?',
        answer:
          '<strong>해외 거주·익명 발행자는 회수 트랙이 제한적입니다.</strong> 다만 자금이 국내 거래소로 이동한 정황이 있다면 거래소 동결로 일부 회수 가능성. 자금 흐름 추적이 핵심.',
      },
      {
        question: 'NFT 가격 하락도 사기로 신고할 수 있나요?',
        answer:
          '<strong>단순 가격 하락은 사기 부정 영역입니다.</strong> 발행자의 처음부터의 사기 의도·로드맵 미이행·SNS 폐쇄·자금 즉시 인출 정황이 결합돼야 사기 성립 검토 영역.',
      },
      {
        question: '디스코드에서 같은 피해자를 어떻게 모으나요?',
        answer:
          '<strong>피해자 모집 채널을 별도 디스코드·텔레그램에 만드는 사례가 일반적입니다.</strong> 트위터·레딧에 피해 인증 + 채널 링크 게시. 50명 이상 모이면 공동 고소단 구성 검토 영역.',
      },
      {
        question: '거래소가 동결 협조를 거부하면 어떻게 하나요?',
        answer:
          '<strong>경찰 수사 의뢰 + 법원 가처분 트랙으로 압박 가능합니다.</strong> 거래소가 자체 약관에 \'사기 의심 거래 동결\' 조항이 있는 사례가 다수라, 경찰 사건번호 제공 + 동결 신청 정식 절차 활용.',
      },
      {
        question: '자본시장법 위반으로도 신고 가능한가요?',
        answer:
          '<strong>NFT가 \'증권성\'을 가졌다면 자본시장법 위반 결합 가능성이 있습니다.</strong> 금감원 1332 신고 트랙. 다만 NFT의 증권성 인정은 사안별로 다르므로 변호사 자문 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '코인 P2P OTC 사기', href: '/guide/fraud/fraud-coin-p2p-otc-scam' },
      { label: '코인 러그풀 증거 수집', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
      { label: '코인 거래소 출금 차단', href: '/guide/fraud/fraud-coin-exchange-withdrawal-blocked' },
      { label: 'NFT 디지털자산 리딩방', href: '/guide/fraud/fraud-nft-digital-asset-leading-room' },
      { label: '코인 펌프앤덤프 사기', href: '/guide/fraud/fraud-crypto-pump-dump-coin' },
    ],
  },

  // ─── 3. fraud / fraud-luxury-car-lease-deposit-vanish ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-car-lease-deposit-vanish',
    keyword: '외제차 리스 보증금 잠적',
    questionKeyword: '외제차 리스 보증금 1천만원 보냈는데 리스사가 잠적했어요. 회수할 수 있나요?',
    ctaKeyword: '외제차 리스 보증금 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '외제차 리스 보증금 잠적 — 4단계 회수 절차 | 로앤가이드',
      description:
        '외제차 리스 보증금 송금 후 리스사·중개인이 잠적했다면 사기 + 부당이득반환 + 가처분 4단계 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고나라에서 시세보다 30% 저렴한 외제차 리스 광고를 봤어요. \'시간이 없다, 보증금부터 보내라\'는 재촉에 1,000만원을 송금했는데, 다음날부터 카톡·전화 모두 차단되고 광고도 내려갔습니다." 외제차 리스 보증금 잠적은 형법 제347조 사기죄 + 민사 부당이득반환·손해배상 + 부동산·동산 가처분 트랙으로 회수 절차를 검토할 수 있는 영역입니다. 리스 계약 시점에 처음부터 차량 인도 의사 없이 보증금만 챙길 의도였다면 사기 성립 가능성이 있고, 송금 직후 1~2주가 가처분·계좌 동결의 골든타임이에요. 같은 광고에 다수 피해자가 있는 경우 공동 고소단 구성도 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외제차 리스 사기 5가지 핵심 신호',
        content:
          '<p><strong style="color:#1e3a5f">A. 시세 대비 저렴·시간 압박·계좌 명의·계약서 부재 결합 정황은 사기 강한 신호입니다.</strong></p>\n<ul>\n<li><strong>① 시세 대비 30% 이상 저렴</strong> — 같은 모델·연식·주행거리 대비 비현실적 할인. 미끼 매물 가능성.</li>\n<li><strong>② "오늘 안에 보내야" 시간 압박</strong> — 차량 확인·계약서 검토 시간 차단. 사기의 가장 흔한 패턴.</li>\n<li><strong>③ 리스사·중개인 본인 명의 계좌 아님</strong> — 가족·지인·법인 계좌 송금 요구. 자금 추적 차단 정황.</li>\n<li><strong>④ 정식 리스 계약서·등록증 부재</strong> — "일단 입금부터, 서류는 차량 인도 시"라는 패턴. 계약 의사 입증 차단.</li>\n<li><strong>⑤ 사업자등록번호·금융감독원 등록 미확인</strong> — 정식 리스사는 금감원 등록 필수(여신전문금융업법). 등록 부재 시 유사수신·사기 결합 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기 + 여신전문금융업법 위반 + 부당이득반환. 리스사가 금감원 미등록 + 본인 명의 아닌 계좌 + 시세 30% 이상 저렴 결합이라면 사기 의도 강한 정황으로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 계좌 동결 → 사기 고소 → 가처분 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 광고 캡처·카톡·통화 기록·송금 영수증·리스사 정보(상호·사업자번호·계좌)·금감원 등록 여부 확인.</li>\n<li><strong>2단계 — 송금은행 사기 의심 신고 (1주 내)</strong> — 송금 은행에 사기 의심 거래 신고로 상대방 계좌 동결 협조 요청. 통신사기피해환급법 적용 가능성 검토.</li>\n<li><strong>3단계 — 사기 고소 (2주 내)</strong> — 관할 경찰서 사이버수사대 또는 ecrm.police.go.kr 신고. 형법 제347조 + 여신전문금융업법 위반 결합.</li>\n<li><strong>4단계 — 가처분 (송금 1주 내 골든타임)</strong> — 리스사·중개인 명의 부동산·차량 가처분 신청. 강제집행 봉쇄.</li>\n<li><strong>5단계 — 민사 회수 (1~3개월)</strong> — 부당이득반환·손해배상 청구. 3,000만원 이하면 소액심판, 청구액 무관 지급명령 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">외제차 리스 사기 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·계약 자료 + 송금·리스사 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>중고나라·SNS 광고 캡처</strong> — 시세·차량 정보·리스 조건.</li>\n<li><strong>리스사·중개인 카톡·통화</strong> — 시간 압박·계약 강요 정황.</li>\n<li><strong>송금 영수증·계좌 정보</strong> — 입금일·금액·받은 계좌 명의.</li>\n<li><strong>리스사 사업자번호·등록 정보</strong> — 금감원 여신전문금융업 등록 여부.</li>\n<li><strong>차량 정보 (차대번호·연식)</strong> — 실제 존재하는 차량인지 확인.</li>\n<li><strong>다른 피해자 정황</strong> — 같은 광고·같은 계좌 다수 피해 사례.</li>\n<li><strong>리스 계약서 (있다면)</strong> — 약정 조건·해지 조항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리스 광고에 사용된 차량 사진을 구글 이미지 검색하면 다른 사이트에서 도용된 정황이 발견되는 사례가 많습니다. 그 자체로 사기 강한 정황 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"리스사 폐업으로 어쩔 수 없다" 주장 반박</strong> — 폐업·도산이 아니라 처음부터 사기 의도였다면 사기 성립. 리스사 운영자 개인 책임 추적 트랙.</li>\n<li><strong>"개인 채무로 처리해주겠다" 주장 주의</strong> — 사기 형사 트랙을 회피시키려는 시도일 수 있어, 합의·각서에 신중. 변호사·법률구조공단 132 상담 후 결정.</li>\n<li><strong>"중개인일 뿐 본인은 책임 없다" 주장 반박</strong> — 중개인도 사기 인식·기여가 입증되면 공동책임. 사기 구조의 본질적 기여 입증 영역.</li>\n<li><strong>가처분 시기 골든타임</strong> — 송금 1~2주 내 가처분이 회수율의 핵심. 변호사 비용 부담돼도 청구액 10% 수준 보증금으로 진행 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>금융감독원 1332</strong> — 여신전문금융업 미등록 신고.</li>\n<li><strong>한국소비자원 1372</strong> — 소비자 분쟁 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 사기 피해 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄에서 차량 임대·리스 사칭 기망',
        summary:
          '대법원 2010도15350 사건(대법원, 2011.04.28 선고)은 차량 리스계약 관련 처분 행위가 형사상 평가의 대상이 됨을 보여주는 사례입니다. 또한 대법원 2022도1862 (대법원, 2026.01.29 선고)는 정보처리장치를 매개로 한 기망도 사람에 대한 기망에 해당해 사기죄 성립 가능하다고 판시했습니다. 외제차 리스 광고를 통해 처음부터 차량 인도 의사 없이 보증금만 받아 챙긴 행위는 사기 성립 영역으로 평가될 여지가 있습니다.',
        takeaway: '외제차 리스 보증금 잠적은 사기 + 여신전문금융업법 위반 결합 영역으로, 광고 캡처·송금 영수증·리스사 등록 정보를 시간순 정리하면 회수 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '리스사 사업자등록은 있는데 사기인 경우가 있나요?',
        answer:
          '<strong>사업자등록만으로 정식 리스사가 아닙니다.</strong> 여신전문금융업 등록(금감원)이 정식 리스사 핵심. 사업자등록만 있는 \'유령 리스사\' 정황 자체가 사기 강한 정황 자료.',
      },
      {
        question: '계약서 없이 송금했는데 회수 가능할까요?',
        answer:
          '<strong>계약서 부재라도 광고·카톡·송금 영수증으로 사기 입증 가능 영역입니다.</strong> 광고가 \'리스 보증금\'으로 명시돼 있고 송금 메모에 그 취지가 남아있으면 부당이득반환 청구 가능 영역.',
      },
      {
        question: '같은 광고에 다른 피해자가 있는지 어떻게 확인하나요?',
        answer:
          '<strong>네이버 카페·디시인사이드·중고나라 검색이 효과적입니다.</strong> 광고 사진·전화번호·계좌번호로 검색하면 같은 사기 사례가 발견되는 경우가 많은 영역.',
      },
      {
        question: '경찰이 "민사로 해결하라"고 합니다',
        answer:
          '<strong>다수 피해자 + 사기 의도 정황 결합으로 형사 트랙 재요청 가능합니다.</strong> 사이버수사대 직접 방문 + 자료 추가 제출. 형사·민사 동시 진행 트랙.',
      },
      {
        question: '리스사 명의가 가족·지인 계좌라면 책임 추적 가능한가요?',
        answer:
          '<strong>실질 운영자 책임 추적 트랙이 열립니다.</strong> 계좌 명의자가 단순 명의 대여자라도 형사상 방조·민사 부당이득반환 책임 영역. 명의자 행적·실질 운영자 관계 추적.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고차 미터기 조작 사기', href: '/guide/fraud/fraud-used-car-meter-history-concealed' },
      { label: '직거래 가계약금 잠적', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '소액심판 1천만원 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '온라인 쇼핑몰 환불 사기', href: '/guide/fraud/online-shopping-fraud-refund' },
    ],
  },
];
