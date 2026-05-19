import { SpokePage } from '../spoke-pages';

// batch70 fraud — 5개 (2026-05-20)
//
// 고유 존재 이유:
// 1. fraud-crypto-ico-presale-listed-fail-vanish-track — ICO 프리세일 단계에 참여(KYC 없음·화이트페이퍼 의존) 후 상장 실패·운영진 잠적 (기존 crypto-exchange-withdrawal-refuse·nft-issuer-vanish-rugpull·crypto-rug-pull-evidence 와 분기: "거래소 출금정지·NFT 발행자 잠적·일반 러그풀"이 아닌 "ICO 프리세일 + 상장 직전·실패 + 운영진 익명·해외 법인" 영역. 자본시장법·전자금융거래법 결합 트랙).
// 2. fraud-family-mobile-line-identity-theft-installment-track — 가족 통신사 결합 명의도용 + 단말기 할부·통신료 부담 (기존 messenger-family-impersonation-recovery·kakao-family-impersonation·voice-phishing-account-lender-defense 와 분기: "메신저 가장·계좌 명의대여"가 아닌 "통신사 결합 본인확인 절차 + 가족 명의 무단 회선 개설 + 할부 채무 + 단말기 분실신고" 영역. 전기통신사업법·통신비밀보호법 결합 트랙).
// 3. fraud-real-estate-consulting-success-fee-upfront-vanish-track — 부동산 컨설팅 자격·실적 미검증 상태 성공보수 선납 후 잠적 (기존 real-estate-double-contract·rental-deposit-vanish·loan-broker-upfront-fee-vanish 와 분기: "이중계약·임대차 보증금·대출 브로커"가 아닌 "부동산 컨설팅 + 절세·법인 매수 자문 + 성공보수 선납 + 공인중개사 자격 미확인" 영역. 공인중개사법·소비자분쟁해결기준 부동산 자문 트랙).
// 4. fraud-business-loan-personal-debt-civil-confused-accused-defense — 단순 사업 채무·변제지연을 사기로 고소당한 피고소인(거래 시점 변제의사·재산상황 입증) (기존 falsely-accused-defense·business-dispute-criminal-complaint-false-accused-defense·loan-friend-business-loss-not-paying 와 분기: "친구 대여금·동업 분쟁"이 아닌 "사업 채무 + 거래 시점 사업 재무상태·변제 의사·일부 변제 정황 + 형사·민사 분리 판단" 영역. 안전구문 "혐의를 받고 있다면" 톤 필수).
// 5. fraud-livestream-host-flash-sale-channel-closure-track — 라이브 커머스 단독 호스트 채널 한정판매 선결제 + 채널 폐쇄·상품 미배송 (기존 livestream-counterfeit-purchase·sns-shopping-no-delivery·online-shopping-fake-store 와 분기: "라이브 위조품·SNS 미배송·가짜 쇼핑몰"이 아닌 "라이브 커머스 호스트 단독 채널 + 한정·선착순 결제 유도 + 채널 폐쇄·운영자 추적 + 플랫폼 책임 분담" 영역. 전자상거래법·통신판매중개업법 + 플랫폼 공동책임 트랙).

export const spokesBatch70Fraud: SpokePage[] = [
  // ─── 1. fraud-crypto-ico-presale-listed-fail-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-ico-presale-listed-fail-vanish-track',
    keyword: 'ICO 프리세일 상장실패 잠적',
    questionKeyword: '코인 ICO 프리세일에 7,500달러(약 1,050만원) 참여, "3개월 내 글로벌 거래소 상장" 약속이 무산되고 운영진 익명 + 텔레그램 채널 폐쇄.',
    ctaKeyword: 'ICO 프리세일 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'ICO 프리세일·상장 실패·운영진 잠적 — 5단계 환수 | 로앤가이드',
      description:
        '코인 ICO 프리세일에 참여했는데 상장이 무산되고 운영진이 잠적했다면 자본시장법·사기죄 관점의 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"텔레그램·X(트위터)에서 \'3개월 내 글로벌 거래소 상장 확정, 백서·로드맵 보유\'로 홍보한 코인 ICO 프리세일에 7,500달러(약 1,050만원)를 USDT(테더)로 보냈어요. 약속한 상장 시점이 지났는데도 운영진은 \'규제 이슈로 지연\'이라며 핑계를 대더니, 두 달 뒤 텔레그램 공식 채널이 폐쇄되고 백서 사이트도 도메인이 만료. 알고 보니 화이트페이퍼에 적힌 \'CTO·재무총괄\'은 사진이 스톡 이미지였고, 회사 등록지인 케이만제도·세이셸 법인도 실체가 없는 정황. 같은 패턴(프리세일 + 상장 실패 + 채널 폐쇄)으로 SNS·디스코드에 수십 명의 피해자가 보고된 상태였어요." ICO 프리세일 + 상장 실패 + 운영진 잠적은 ① 사기죄(형법 347조) — 상장 약속·실체 표시 기망 ② 자본시장법(무인가 투자중개·증권형 토큰) 검토 ③ 유사수신행위 규제법(원본 보장·고수익 약정) ④ 한국소비자원 1372 + 금융감독원 분쟁조정 ⑤ 사이버 사기 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 운영진 익명·해외 페이퍼컴퍼니 + 화이트페이퍼 허위 + 채널 폐쇄가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 송금·지갑 거래내역 ② 백서·텔레그램 캡처 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. ICO 프리세일 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·지갑추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 송금·지갑 거래·백서·텔레그램 자료 보존</strong> — TX 해시·USDT 송금·채널 공지 캡처.</li>\n<li><strong>② 지갑 주소 추적 (블록체인 탐색기·KYC 거래소 입금 흔적)</strong></li>\n<li><strong>③ 금융감독원 + 한국소비자원 1372 분쟁조정·신고</strong> — 유사수신·자본시장법 위반 의심 자료.</li>\n<li><strong>④ 경찰청 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단 고소 권장.</li>\n<li><strong>⑤ 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상장 약속·운영진 신원·회사 실체에 관한 표시가 거래 결정의 핵심 사정이라면 그 표시가 허위였음이 사후 확인된 경우 거래 시점 기망 의사가 결합된 영역으로 평가될 수 있습니다. 백서·홍보 자료·텔레그램 공지가 가장 강력한 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금융감독원·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적 인지 당일)</strong> — TX 해시·송금 지갑·텔레그램 공지·백서 PDF.</li>\n<li><strong>2단계 — 지갑 주소 블록체인 탐색기 추적 (1주 내)</strong> — 국내 KYC 거래소 입금 흔적 시 영장 트랙.</li>\n<li><strong>3단계 — 금융감독원 + 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 자본시장법·유사수신 의심 자료.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단 고소 + 디스코드·텔레그램 피해자 명단.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">ICO 프리세일 잠적 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 송금·홍보·운영진 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>USDT·코인 송금 TX 해시·송금 지갑 주소·수취 지갑 주소</strong></li>\n<li><strong>백서(Whitepaper) PDF + 로드맵·상장 일정 공지 캡처</strong></li>\n<li><strong>텔레그램·디스코드·X 공식 채널 공지·운영진 발언 캡처</strong></li>\n<li><strong>회사 등록지(케이만제도·세이셸 등) 법인 등기부등본 발급 시도 자료</strong></li>\n<li><strong>운영진 LinkedIn·사진 진위 확인 (스톡이미지 검색)</strong></li>\n<li><strong>같은 ICO 피해자 디스코드·텔레그램 모음 명단·진술</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블록체인 송금은 비가역이지만 수취 지갑이 국내 KYC 거래소(빗썸·업비트·코인원)로 자금을 옮긴 흔적이 있다면 거래소 KYC 정보로 신원 추적이 가능한 영역. 송금 직후 1주 내 자료 보존이 추적 성공률을 높입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"규제 이슈로 상장 지연" 주장</strong> — 약속한 거래소·시점·로드맵을 모두 위반했다면 거래 시점 의사 평가.</li>\n<li><strong>운영진 익명·해외 페이퍼컴퍼니</strong> — 회사 실체 표시 자체가 기망 평가 대상.</li>\n<li><strong>증권형 토큰(STO) 여부</strong> — 자본시장법 무인가 투자중개·증권 신고 위반 별도 트랙.</li>\n<li><strong>유사수신행위 규제법</strong> — 원금 보장·고수익 약정 시 별도 처벌 조항.</li>\n<li><strong>해외 지갑 송금 환수</strong> — 국내 KYC 거래소 입금 흔적이 있을 때만 추적 효율적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 (1332·유사수신 신고센터)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄와 위계 업무방해죄의 죄수 관계',
        summary:
          '대법원 2024도18174(대법원, 2025.09.25 선고) 영역에서 법원은 사기죄의 성립에 일반적·전형적으로 위계에 의한 업무방해행위가 수반되는 것은 아니므로 행위자가 일련의 위계행위를 통해 금융·심사 업무 전반을 방해한 경우 그 위계 업무방해는 사기죄의 불가벌적 수반행위·사후행위가 되는 것이 아니라 별개의 범죄를 구성한다고 본 사례 흐름이 있습니다.',
        takeaway: '"ICO 프리세일 + 거래소 상장 시스템·KYC 절차 우회·허위 백서 유포"는 사기 + 위계 업무방해가 별개 평가될 수 있는 영역. 운영진 익명·해외 법인 + 백서 허위가 결합되면 자본시장법·유사수신 트랙도 함께 검토.',
      },
    ],
    faq: [
      {
        question: 'TX 해시가 있으면 송금한 사람을 찾을 수 있나요?',
        answer:
          '<strong>블록체인 송금은 익명이지만 수취 지갑이 국내 KYC 거래소(빗썸·업비트·코인원)로 자금을 이동한 흔적이 있다면 거래소 KYC 정보로 신원 추적이 가능한 영역입니다.</strong> 영장 발부 절차로 진행.',
      },
      {
        question: '운영진이 "규제 이슈로 상장 지연"이라며 환불을 거부합니다',
        answer:
          '<strong>약속한 거래소·시점·로드맵을 모두 위반하고 채널이 폐쇄됐다면 거래 시점부터 이행 의사·능력이 없었던 정황 자료로 평가될 수 있는 영역입니다.</strong> 백서·텔레그램 공지 보존이 중요.',
      },
      {
        question: '해외 거래소·해외 법인이면 처벌이 어렵나요?',
        answer:
          '<strong>국내 피해자·국내 SNS 홍보가 있다면 형법상 사기죄 관할이 인정될 수 있는 영역입니다.</strong> 국내 KYC 거래소 이동 흔적이 있으면 수사 협조 가능.',
      },
      {
        question: '증권형 토큰(STO)이면 자본시장법 위반인가요?',
        answer:
          '<strong>수익 분배·원금 보장이 표시됐다면 증권 해당성·자본시장법 무인가 투자중개 위반 검토 영역입니다.</strong> 금감원 신고 별도 트랙.',
      },
      {
        question: '같은 ICO 피해자가 디스코드에 모여 있습니다',
        answer:
          '<strong>다수 피해자 집단 고소 + 피해 합계 신고가 수사 우선순위를 높이는 영역입니다.</strong> 명단·송금 합계·운영진 동일성 자료 통합.',
      },
      {
        question: '백서에 "원금 보장"이 명시돼 있으면 더 강한가요?',
        answer:
          '<strong>원금 보장·고수익 약정은 유사수신행위 규제법 위반 자료가 추가되는 영역입니다.</strong> 사기죄 외 별도 처벌 조항.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '코인 거래소 출금정지', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-refuse-track' },
      { label: 'NFT 발행자 잠적', href: '/guide/fraud/fraud-nft-issuer-vanish-rugpull' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 2. fraud-family-mobile-line-identity-theft-installment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-family-mobile-line-identity-theft-installment-track',
    keyword: '가족 통신사 명의도용 단말기 할부',
    questionKeyword: '가족 결합 명의를 도용해 본인 모르게 휴대폰 회선 2개·단말기 할부 280만원이 개통, 통신료·할부금 부담만 떠안음.',
    ctaKeyword: '가족 명의도용 단말기 할부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가족 명의도용 휴대폰 회선·단말기 할부 — 5단계 환수 | 로앤가이드',
      description:
        '가족 결합 명의를 도용해 본인 모르게 회선이 개통되고 단말기 할부·통신료가 청구된 경우 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부모님과 가족 결합 요금제로 묶여 있던 통신사 계정에서 한 달 뒤 본인 명의로 \'갤럭시 최신 단말기 할부 + 데이터 무제한\' 회선 2개가 개통되어 단말기 가격 280만원의 24개월 할부 + 월 통신료 16만원이 청구. 본인은 신청한 적이 없는데 알고 보니 같은 가족의 한 사람이 본인 신분증 사본·계정 비밀번호를 알고 있어 가족 결합 본인확인 절차의 허점을 이용해 무단 개통한 정황. 통신사에 \'명의도용\'을 신고하니 \'가족 간 분쟁이라 본인이 직접 합의하라\'며 회선·할부 해지 처리를 지연. 신용평점도 하락하기 시작했어요." 가족 통신사 명의도용 + 단말기 할부 부담은 ① 사기죄(형법 347조) — 통신사·본인을 기망한 회선 개통 ② 사문서위조·행사(가입신청서 위조) ③ 전기통신사업법(본인확인 의무) ④ 한국소비자원 1372 + 방송통신위원회·KISA 피해 신고 ⑤ 민사 부당이득 반환 + 신용회복 트랙이 검토 가능한 영역. 본인 동의 없는 회선 개통 + 가족 간 신뢰관계 악용 + 통신사 본인확인 의무가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 회선 개통 시점·신청서 ② 본인 부재 알리바이 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가족 명의도용 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 회선해지·통신사·신용보호·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 회선 개통 시점·가입신청서·기지국 활성화 시점 자료 보존</strong></li>\n<li><strong>② 통신사 명의도용 신고 + 회선 해지·할부 정지 요청 (가입 90일 내 권장)</strong></li>\n<li><strong>③ KISA 명의도용 피해예방 서비스(M-safer) + 한국신용정보원 신용회복</strong></li>\n<li><strong>④ 경찰 사기·사문서위조 고소 (가족이라도 친족상도례 적용 여부 별개 검토)</strong></li>\n<li><strong>⑤ 민사 부당이득 반환 + 신용평점 회복 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신사의 가족 결합 본인확인이 형식적이었다면 통신사의 본인확인 의무 위반이 함께 평가될 수 있는 영역. 가족 간이라도 회선·단말기 할부의 책임 귀속은 본인 동의 여부가 핵심 자료. 친족상도례(직계혈족·배우자·동거친족) 적용 여부는 별개 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통신사·KISA·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (인지 당일)</strong> — 회선 개통 알림·가입신청서·기지국 위치 활성화 시점.</li>\n<li><strong>2단계 — 통신사 명의도용 신고 + 회선 해지·할부 정지 (3일 내)</strong> — 회신 서면 확보.</li>\n<li><strong>3단계 — KISA M-safer 명의도용 차단 서비스 + 한국신용정보원 신용보호 (1주 내)</strong></li>\n<li><strong>4단계 — 경찰 사기·사문서위조 고소 (1~2주 내)</strong> — 친족상도례 검토 + 통신사 본인확인 의무 위반 자료.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 신용평점 회복 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가족 명의도용 회선·할부 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 회선·본인부재·서명 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>회선 개통 시점 알림 문자·통신사 가입신청서 사본 발급</strong></li>\n<li><strong>개통 시점 본인 부재 알리바이 (출입기록·CCTV·근태)</strong></li>\n<li><strong>가입신청서 서명·자필 진위 비교 (본인 자필과 대조)</strong></li>\n<li><strong>통신사 본인확인 절차 로그 (전화 인증·문자 인증 기록 발급 요청)</strong></li>\n<li><strong>가족 결합 계정 관리자·비밀번호 변경 이력</strong></li>\n<li><strong>단말기 IMEI·기지국 활성화 위치 (사용자 추정 자료)</strong></li>\n<li><strong>본인 신분증·신용정보 조회·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전기통신사업법은 회선 개통 시 본인확인을 사업자의 의무로 두고 있는 영역. 가족 결합이라도 회선 신규 추가 시 본인 동의·서명·인증을 형식적으로 처리했다면 통신사 책임 분담 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>친족상도례 적용 여부</strong> — 직계혈족·배우자·동거친족은 형사 면책되나 사문서위조·통신사 기망 부분은 별개.</li>\n<li><strong>통신사 본인확인 의무</strong> — 전기통신사업법상 사업자 책임 분담 자료.</li>\n<li><strong>단말기 할부 채무 귀속</strong> — 본인 동의 없는 할부계약은 무효·부당이득 반환 검토.</li>\n<li><strong>신용평점 하락</strong> — KISA M-safer·신용정보원 신용보호 신청 별도 트랙.</li>\n<li><strong>가족 합의 우선 압박</strong> — 합의 의사 자체는 자유. 강요받지 말고 사실관계 정리 우선.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국인터넷진흥원 KISA 명의도용 방지 서비스 (M-safer, 118)</strong></li>\n<li><strong>한국소비자원 1372 (통신 분쟁상담)</strong></li>\n<li><strong>방송통신위원회·과학기술정보통신부 (통신 민원)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모공동정범에서 일부 가담자의 고의 평가',
        summary:
          '대법원 2024도15240(대법원, 2025.06.26 선고) 영역에서 법원은 사기의 공모공동정범이 기망방법을 구체적으로 몰랐던 경우에도 자신의 행위가 범죄에 이용된다는 사실을 미필적으로나마 인식·용인했는지 여부를 동기·경위·수단·관여 정도·관계 등 제반 사정을 종합해 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '"가족 명의도용 회선 개통 + 단말기 할부 편취" 사안에서도 행위자의 인식·용인 정도가 핵심 평가 대상. 가족 결합 본인확인 우회 + 단말기 직접 수령 + 회선 양도 정황이 결합되면 사기 고의 평가 자료로 평가될 수 있는 영역.',
      },
    ],
    faq: [
      {
        question: '가족이 한 일이면 친족상도례로 형사가 안 되나요?',
        answer:
          '<strong>직계혈족·배우자·동거친족 범위 내라면 형법상 친족상도례에 따라 형 면제가 적용될 수 있는 영역입니다.</strong> 다만 통신사 기망·사문서위조 부분은 친족상도례 적용 여부가 별개로 평가됩니다.',
      },
      {
        question: '통신사가 "가족 간 분쟁이라 직접 합의하라"고 합니다',
        answer:
          '<strong>회선 개통의 본인확인 의무는 사업자의 의무 영역입니다.</strong> KISA M-safer 신고·방통위 민원으로 압박하면 회선 해지·할부 정지 처리 속도가 빨라지는 경향.',
      },
      {
        question: '단말기 할부 채무를 본인이 갚아야 하나요?',
        answer:
          '<strong>본인 동의 없는 할부계약은 부당이득 반환·무효 검토 대상인 영역입니다.</strong> 통신사·할부금융사 양측에 명의도용 사실 통보 + 신용보호 신청 우선.',
      },
      {
        question: 'KISA M-safer는 어떻게 신청하나요?',
        answer:
          '<strong>KISA 명의도용방지센터 홈페이지·118 전화로 무료 신청 가능한 영역입니다.</strong> 본인 명의 회선 조회 + 신규 개통 차단 + 명의도용 차단 등록.',
      },
      {
        question: '신용평점이 떨어졌는데 회복되나요?',
        answer:
          '<strong>한국신용정보원·KCB·NICE 신용보호 신청 + 통신 연체 사유 확인서 발급으로 회복 가능한 영역입니다.</strong> 명의도용 확정 자료 첨부 필요.',
      },
      {
        question: '가입신청서 서명이 본인 글씨가 아닙니다',
        answer:
          '<strong>필적 감정·자필 대조로 사문서위조 입증 가능한 영역입니다.</strong> 통신사에 가입신청서 사본 발급 요청부터 시작.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '카카오 가족 사칭', href: '/guide/fraud/fraud-kakao-family-impersonation-100man' },
      { label: '메신저 사칭 환수', href: '/guide/fraud/fraud-messenger-family-impersonation-recovery' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
    ],
  },

  // ─── 3. fraud-real-estate-consulting-success-fee-upfront-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-real-estate-consulting-success-fee-upfront-vanish-track',
    keyword: '부동산 컨설팅 성공보수 선납 잠적',
    questionKeyword: '"법인 명의 절세·매수 자금조달 컨설팅" 명목 1,500만원 성공보수 선납 후 6개월간 진행 무, 컨설팅사 사무실 폐쇄.',
    ctaKeyword: '부동산 컨설팅 선납 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부동산 컨설팅 성공보수 선납·잠적 — 5단계 환수 | 로앤가이드',
      description:
        '부동산 컨설팅사가 절세·자금조달 명목 성공보수를 선납받은 후 진행이 없거나 잠적했다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'법인 명의로 상가 매수 시 절세 + 매수 자금조달 + 임차인 매칭까지 풀패키지\'를 표방한 부동산 컨설팅사에서 \'성공보수 1,500만원 선납, 매수 성사 시 추가 1%\' 약정으로 자문 의뢰. 첫 2주는 매물 리스트 몇 개 보내주더니 \'금융기관 자금조달은 한 달 내 답변\'이라 약속하고는 3개월간 진행 무, 카톡·전화 응답이 줄다가 6개월째 사무실까지 폐쇄. 사업자등록증을 확인해보니 \'경영컨설팅업\'으로만 등록되어 있었고 공인중개사 자격은 처음부터 없었으며, 대표는 같은 패턴으로 다른 의뢰인 5명에게 \'성공보수 선납 + 진행 무 + 잠적\'한 정황이 부동산 커뮤니티에 보고된 상태였어요." 부동산 컨설팅 성공보수 선납 + 잠적은 ① 사기죄(형법 347조) — 자격·실적·진행 의사 기망 ② 부작위 기망(공인중개사 자격 미보유 고지의무) ③ 공인중개사법(자격 없는 자의 중개행위) ④ 한국소비자원 1372 분쟁조정 ⑤ 사이버 사기 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 성공보수 선납 + 자격 미확인 + 진행 없음이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 계약·자문 약정·이체 ② 자격·실적 표시 자료 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 부동산 컨설팅 선납 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·계약·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 컨설팅 계약서·성공보수 약정·이체 자료 보존</strong></li>\n<li><strong>② 컨설팅사 사업자등록·공인중개사 자격 여부 조회</strong> — 국토부 부동산정보포털.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 + 공정위 표시광고법 신고</strong></li>\n<li><strong>④ 경찰 사기 고소 (공인중개사법 위반 병합 가능)</strong></li>\n<li><strong>⑤ 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부동산 매수 자문은 공인중개사법상 자격 있는 자만 중개행위가 가능한 영역. 자격 없이 매수 알선·중개를 하면서 성공보수를 받았다면 공인중개사법 위반 + 사기 기망이 결합되는 영역으로 평가될 수 있습니다. 자격 표시·실적 표시 캡처가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청·국토부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적 인지 당일)</strong> — 계약서·약정·이체·카톡·매물 리스트.</li>\n<li><strong>2단계 — 컨설팅사 자격 조회 (국토부 부동산정보포털·시·군·구청 공인중개사 등록 확인)</strong></li>\n<li><strong>3단계 — 한국소비자원 1372 + 공정위 신고 (30~60일)</strong> — 자격 미보유 표시광고법 위반 검토.</li>\n<li><strong>4단계 — 경찰 사기·공인중개사법 위반 고소 (ecrm.cyber.go.kr)</strong> — 다른 의뢰인 집단 고소.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">부동산 컨설팅 선납 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·계약·진행 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>컨설팅 자문 계약서·성공보수 약정서</strong></li>\n<li><strong>계좌 이체·세금계산서·현금영수증</strong></li>\n<li><strong>홍보 자료 (홈페이지·블로그·SNS 캡처 — "전문 컨설턴트" "전직 은행권 출신" 등 자격 표시)</strong></li>\n<li><strong>컨설팅사 사업자등록증·공인중개사 등록 여부 확인서</strong></li>\n<li><strong>대표·자문위원 이력·실적 표시 자료 (진위 확인용)</strong></li>\n<li><strong>다른 의뢰인 피해 사례·부동산 커뮤니티 게시글</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사업자등록상 "경영컨설팅업"만 등록되어 있고 공인중개사 자격이 없는 자가 매물 알선·매수 자문을 하면서 성공보수를 받았다면 공인중개사법 위반 영역. 자격 미보유 사실 자체가 고지의무 위반 + 부작위 기망 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"컨설팅이지 중개가 아니다" 주장</strong> — 실질 행위(매물 알선·매수 자금조달)가 공인중개사법상 중개에 해당하면 자격 위반 평가.</li>\n<li><strong>"성공보수 = 선납 후 결과만 약정" 주장</strong> — 진행 자체가 무이면 이행 의사 부존재 평가 대상.</li>\n<li><strong>사업자등록·자격증명</strong> — 자격 미확인 상태에서 결제한 본인 과실 항변 vs 사업자의 고지의무.</li>\n<li><strong>잠적·사무실 폐쇄</strong> — 대표 개인 책임 vs 법인 책임 분리 검토.</li>\n<li><strong>다수 피해자 집단</strong> — 반복 패턴이 거래 시점 기망 의사 입증 자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>국토교통부·시·군·구청 (공인중개사 등록·자격 조회)</strong></li>\n<li><strong>공정거래위원회 (표시광고법·전자상거래법 신고)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 거래 결정의 중요 사정 고지의무',
        summary:
          '서울북부지방법원 2024고단3486(서울북부지법, 2025.11.06 선고) 영역에서 법원은 시설·영업권 양수·양도 거래에서 정상 거주·영업을 어렵게 하는 중요한 사정을 알면서도 상대방에게 고지하지 않은 채 계약을 체결했다면 그 사실은 계약 체결의 모든 과정에서 반드시 고지해야 할 중요한 사항으로 기망에 해당한다고 본 사례 흐름이 있습니다.',
        takeaway: '"부동산 컨설팅 자격 미보유·전 의뢰인 피해 사례 은닉 + 성공보수 선납 유도"는 거래 결정의 중요 사정 고지의무 위반이 결합되는 영역으로 평가될 수 있는 자료. 자격 표시·실적 표시가 사실과 다르다면 기망 평가 대상.',
      },
    ],
    faq: [
      {
        question: '컨설팅사가 "중개가 아니라 자문"이라며 책임을 회피합니다',
        answer:
          '<strong>실질 행위가 매물 알선·매수 자문이고 성공보수를 받았다면 공인중개사법상 중개행위 영역입니다.</strong> 형식적 계약 명칭이 아닌 실질 평가.',
      },
      {
        question: '공인중개사 자격이 있는지 어떻게 확인하나요?',
        answer:
          '<strong>국토교통부 부동산정보포털·시·군·구청 공인중개사 등록 조회로 확인 가능한 영역입니다.</strong> 사업자등록상 업종도 함께 확인.',
      },
      {
        question: '성공보수가 선납 조건이면 환수가 안 되나요?',
        answer:
          '<strong>성공이 사실상 불가능한 상태에서 받은 선납은 부당이득 반환 영역입니다.</strong> 진행 자체가 없거나 잠적이면 이행 의사 부존재 평가 자료.',
      },
      {
        question: '다른 의뢰인도 같은 패턴으로 피해를 봤다면?',
        answer:
          '<strong>반복 패턴은 거래 시점 편취 의사 입증의 결정적 자료 영역입니다.</strong> 부동산 커뮤니티·SNS에서 모아 집단 고소 권장.',
      },
      {
        question: '컨설팅사 사무실이 폐쇄됐는데 추적 가능한가요?',
        answer:
          '<strong>법인 등기부등본·사업자등록·대표 개인 자산으로 추적 가능한 영역입니다.</strong> 사이버 고소 시 영장 발부 검토.',
      },
      {
        question: '현금·세금계산서로 결제했는데 어떻게 입증하나요?',
        answer:
          '<strong>세금계산서·계좌 이체 내역·약정서가 있으면 거래 사실 입증은 충분한 영역입니다.</strong> 컨설팅 진행 부재 사실은 별도 자료(카톡·메일).',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '대출 브로커 선납', href: '/guide/fraud/fraud-loan-broker-upfront-fee-vanish-track' },
      { label: '부동산 이중계약', href: '/guide/fraud/fraud-real-estate-double-contract-recovery-track' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 4. fraud-business-loan-personal-debt-civil-confused-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-loan-personal-debt-civil-confused-accused-defense',
    keyword: '사업 채무 사기 고소 변제지연',
    questionKeyword: '거래처에서 받은 자재 대금 6,800만원이 자금난으로 6개월 변제 지연됐다며 사기 고소장이 접수, 본인은 단순 변제지연이라 주장.',
    ctaKeyword: '사업 채무 사기 고소 방어 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '사업 채무·변제지연 사기 고소 — 거래 시점 의사 방어 5단계 | 로앤가이드',
      description:
        '사업 자금난으로 거래대금 변제가 지연됐는데 사기 고소를 당했다면 거래 시점 변제의사·재무상태를 입증하는 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년간 거래해온 자재 거래처로부터 \'2024년 11월 납품받은 자재 대금 6,800만원을 6개월째 갚지 않으니 사기로 고소한다\'는 통보를 받았어요. 본인은 자재를 받을 당시 영업이익이 정상이었고 변제할 의사·능력이 있었으나 거래처가 다른 사업장에서 큰 손실(2,400만원 부도)을 입으면서 자금 흐름이 막혀 변제가 지연됐을 뿐, 다른 거래처들과는 분할 변제 합의로 정상 처리 중인 상황. 그런데 거래처가 \'그때부터 갚을 의사가 없었다\'며 형사 고소장을 접수, 경찰 조사 출석 통보를 받은 상태." 단순 채무 변제지연이 사기로 평가될 수 있는지는 거래 시점의 변제의사·재산상태가 핵심 영역입니다. 혐의를 받고 있다면 ① 사기죄(형법 347조) 거래 시점 편취 고의 부정 ② 민사 채무·변제지연과의 구별 ③ 일부 변제·분할 변제 합의 이력 ④ 사업 재무상태 객관 자료 ⑤ 형사 조사·민사 보전 분리 트랙이 검토 가능한 영역. 거래 시점 변제 가능성 + 일부 변제 이력 + 다른 거래처 정상 처리가 결정적 사정. 피고소인 입장이라면 사실관계 입증할 수 있다면 ① 거래 시점 재무자료 ② 변제 시도·일부 변제 이력 ③ 조사 출석·민사 보전 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업 채무 사기 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·재무·조사출석·민사·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 시점 재무상태·자금흐름 자료 보존</strong> — 재무제표·통장·세금계산서.</li>\n<li><strong>② 일부 변제·변제 시도·다른 거래처 정상 처리 이력 정리</strong></li>\n<li><strong>③ 경찰 조사 출석 전 변호인 상담 (KLAC 132 무료 1차)</strong></li>\n<li><strong>④ 민사 채무 분할 변제 합의·공탁 등 보전 트랙 병행</strong></li>\n<li><strong>⑤ 합의 시 합의서 + 고소 취소 명문화</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사기죄는 거래 시점의 편취 고의·변제의사·능력이 핵심 평가 대상인 영역. 단순 사후 변제지연·자금난은 민사 채무불이행으로 평가될 수 있고 형사 사기와는 구별되는 영역. 혐의를 받고 있다면 거래 시점 재무자료 + 일부 변제 이력으로 편취 고의 부존재 입증을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 정리 (조사 통보 당일)</strong> — 재무제표·통장·세금계산서·일부 변제 이체.</li>\n<li><strong>2단계 — 변호인 1차 상담 + 경찰 조사 출석 준비 (1주 내)</strong> — KLAC 132 또는 사선.</li>\n<li><strong>3단계 — 경찰 조사 출석·진술 (편취 고의 부존재 진술 구성)</strong></li>\n<li><strong>4단계 — 민사 채무 분할 변제 협상·공탁 (병행)</strong> — 변제 의사·능력 입증 자료.</li>\n<li><strong>5단계 — 합의 시 합의서 + 고소 취소·처벌불원서 명문화</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업 채무 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 재무·거래·변제 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>거래 시점 재무제표·손익계산서·잔액증명 (거래 시점 1~3개월 전후)</strong></li>\n<li><strong>거래처 발주서·세금계산서·납품 확인서·결제 약정</strong></li>\n<li><strong>일부 변제·이체 내역 (변제 시도 자체가 핵심 자료)</strong></li>\n<li><strong>다른 거래처 정상 처리·분할 변제 합의 이력</strong></li>\n<li><strong>자금난 발생 시점 객관 자료 (거래처 부도·매출 급감 자료)</strong></li>\n<li><strong>변제 의사 표명 대화 (카톡·문자·통화)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사기죄의 편취 고의는 거래 시점에 존재해야 하는 영역. 거래 시점 재무자료(매출·자산)와 일부 변제 이체 이력은 "그때부터 갚을 의사가 없었다"는 고소인 주장을 반박하는 가장 강력한 자료. 변호인과 진술 구성 검토 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>거래 시점 변제의사·능력</strong> — 재무자료·일부 변제·다른 거래처 정상 처리가 핵심.</li>\n<li><strong>단순 채무 변제지연과의 구별</strong> — 사후 자금난은 민사 채무불이행 평가.</li>\n<li><strong>일부 변제 이력의 평가</strong> — 변제 의사·능력 입증 자료 vs 위장 변제 항변.</li>\n<li><strong>합의 시 합의서 명문화</strong> — 고소 취소·처벌불원·재고소 금지 조항 필수.</li>\n<li><strong>민사·형사 분리 진행</strong> — 형사 출석 + 민사 분할 변제 협상 병행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132 (1차 무료 상담)</strong></li>\n<li><strong>한국소비자원 1372 (소상공인 분쟁)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (피해자 측 신고 시)</strong></li>\n<li><strong>중소벤처기업부 (자금 사정 자료·분쟁 조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산상태 허위 주장과 사기죄 성립 영역',
        summary:
          '대법원 2024도13139(대법원, 2025.06.12 선고) 영역에서 법원은 채무자가 자신의 재산 및 수입 상황 등에 관하여 허위의 내용으로 상대방을 기망함으로써 유리한 결정을 받는 행위가 사기죄를 구성할 수 있고, 이때 사기죄가 성립하기 위해서는 재산·수입 상황 등에 관한 주장이 단순히 사실과 다르다는 것만으로는 부족하며 그 주장이 결정의 요건과 밀접한 관련이 있고 결정 내용이 달라질 정도에 이르러야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '"사업 채무 + 사후 자금난 + 일부 변제 + 다른 거래처 정상 처리" 사안은 거래 시점 재산상태가 사실과 부합하고 결정의 핵심 요건을 좌우하는 허위 표시가 없었다면 단순 채무 변제지연(민사)과 사기(형사)의 경계 영역. 혐의를 받고 있다면 거래 시점 재무자료가 결정적 방어 자료.',
      },
    ],
    faq: [
      {
        question: '단순히 갚지 못한 것도 사기가 되나요?',
        answer:
          '<strong>거래 시점 변제의사·능력이 있었다면 사후 변제지연 자체는 민사 채무 영역으로 평가될 수 있습니다.</strong> 사기죄는 거래 시점의 편취 고의가 핵심 요건.',
      },
      {
        question: '일부라도 갚으면 사기 의심이 줄어드나요?',
        answer:
          '<strong>일부 변제 이력은 변제의사·능력 입증의 강력한 자료로 평가될 수 있는 영역입니다.</strong> 다만 위장 변제 항변에 대비해 액수·시기·자금 출처도 함께 정리.',
      },
      {
        question: '경찰 조사에 변호인 없이 가도 되나요?',
        answer:
          '<strong>혐의를 받고 있다면 1차 진술이 이후 절차에 큰 영향을 미치는 영역입니다.</strong> KLAC 132 무료 상담 또는 사선 변호인 1차 미팅을 검토.',
      },
      {
        question: '거래처가 합의를 거부하면 어떻게 하나요?',
        answer:
          '<strong>변제금을 공탁(채권자 거절·소재불명 시)하거나 일부 변제를 계속 이어가는 것이 변제의사 입증에 유리한 영역입니다.</strong>',
      },
      {
        question: '재무제표가 부실해도 사기 의심이 강해지나요?',
        answer:
          '<strong>거래 시점 재무가 부실해도 그것을 거래처에 정확히 고지했다면 기망이 아닐 수 있는 영역입니다.</strong> 반대로 재무 허위 표시가 거래 결정의 핵심이었다면 사기 평가 자료.',
      },
      {
        question: '합의서를 쓸 때 꼭 들어가야 할 조항은?',
        answer:
          '<strong>① 변제 금액·일정 ② 고소 취소·처벌불원 ③ 재고소 금지 ④ 위약시 책임 ⑤ 합의금 외 추가 청구 포기 조항을 검토하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '거짓 고소 방어', href: '/guide/fraud/fraud-falsely-accused-defense-counter-complaint' },
      { label: '사업 분쟁 방어', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '채무 vs 범죄 구별', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '일부 변제 감경', href: '/guide/fraud/fraud-partial-repayment-settlement-reduction' },
    ],
  },

  // ─── 5. fraud-livestream-host-flash-sale-channel-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-livestream-host-flash-sale-channel-closure-track',
    keyword: '라이브 커머스 호스트 한정판매 채널 폐쇄',
    questionKeyword: '인스타 라이브 호스트 단독 채널에서 "한정 100세트·선착순 50%할인" 진공포장 명품가방 360만원 선결제, 일주일 뒤 채널 비공개·미배송.',
    ctaKeyword: '라이브 커머스 채널 폐쇄 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '라이브 커머스 호스트 한정판매·채널 폐쇄 — 5단계 환수 | 로앤가이드',
      description:
        '인스타·SNS 라이브 커머스 호스트가 한정·선착순 판매로 선결제를 받고 채널이 폐쇄·미배송됐다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타그램에서 팔로워 18만명을 보유한 라이브 호스트가 \'단 1시간 한정 100세트, 정가 720만원 명품가방을 360만원에 진공포장으로 보내드린다, 정품 보증\'으로 라이브 방송. 100명이 즉시 선결제(개인계좌)로 360만원씩을 송금. 일주일 뒤 \'배송 지연, 본사 인증 절차\'라며 미루다가 채널이 비공개로 전환되고 호스트의 다른 SNS도 모두 삭제. 알고 보니 같은 호스트가 닉네임을 바꿔가며 라이브로 \'한정·선착순·1대1 거래\'를 반복한 패턴이 SNS 신고 게시판·소비자원 사례에 보고된 상태였어요." 라이브 커머스 호스트 한정판매 + 채널 폐쇄는 ① 사기죄(형법 347조) — 한정·정품·배송 의사 기망 ② 위계에 의한 업무방해(플랫폼 시스템) ③ 전자상거래법·통신판매중개업법(통신판매업 신고 의무) ④ 한국소비자원 1372 + 공정위 신고 ⑤ 사이버 사기 고소 + 민사 부당이득 트랙이 검토 가능한 영역. 한정·선착순 결제 유도 + 개인계좌 송금 + 채널 폐쇄 + 반복 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 라이브 캡처·이체 ② 호스트 SNS 이력 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 라이브 커머스 채널 폐쇄 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·플랫폼·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 라이브 화면·캡처·이체·호스트 SNS 이력 보존</strong></li>\n<li><strong>② 플랫폼(인스타·유튜브·틱톡) 신고 + 호스트 계정 정지 요청</strong></li>\n<li><strong>③ 한국소비자원 1372 + 공정위 전자상거래·통신판매중개업법 신고</strong></li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단.</li>\n<li><strong>⑤ 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 라이브 커머스 호스트가 통신판매업 신고 없이 개인계좌로 결제를 받고 한정·선착순으로 결제 의사를 압박한 뒤 채널을 폐쇄했다면 전자상거래법·통신판매중개업법 위반 + 사기가 결합되는 영역으로 평가될 수 있습니다. 라이브 영상·이체 내역이 핵심 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·공정위·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (인지 당일)</strong> — 라이브 녹화·캡처·이체·호스트 SNS·DM 대화.</li>\n<li><strong>2단계 — 플랫폼(인스타·유튜브) 신고 + 호스트 계정 정지·라이브 영상 보존 요청 (1주 내)</strong></li>\n<li><strong>3단계 — 한국소비자원 1372 + 공정위 전자상거래·통신판매중개업법 신고 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단 + 계좌 추적.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">라이브 커머스 채널 폐쇄 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 라이브·결제·호스트 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>라이브 방송 녹화·캡처 (한정·선착순·정품 표시 발언)</strong></li>\n<li><strong>호스트와 DM 대화·결제 안내 (계좌·금액)</strong></li>\n<li><strong>계좌 이체 내역·예금주명·이체 시점</strong></li>\n<li><strong>호스트 SNS 닉네임·계정·과거 라이브 이력 (반복 패턴)</strong></li>\n<li><strong>플랫폼(인스타·유튜브) 신고 회신·계정 정지 자료</strong></li>\n<li><strong>같은 호스트 다른 피해자 SNS 게시글·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 라이브 영상은 채널이 폐쇄되면 사라질 수 있어 송금 직후 화면녹화·캡처가 결정적. 호스트가 통신판매업 신고를 했는지, 사업자등록증을 라이브에 노출했는지가 통신판매중개업법 위반 평가 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>통신판매업 미신고</strong> — 사업자등록·통신판매업 신고 부재 시 전자상거래법 위반 별도 트랙.</li>\n<li><strong>플랫폼 책임 분담</strong> — 인스타·유튜브의 거래 중개 책임 vs 단순 매개.</li>\n<li><strong>개인계좌 결제·에스크로 미사용</strong> — 환수율 낮으나 사기·민사 청구는 동일.</li>\n<li><strong>한정·선착순 압박</strong> — 결제 의사결정 시간 축소가 거래 시점 기망 평가 자료.</li>\n<li><strong>호스트 닉네임 변경 반복</strong> — 동일인 입증을 위한 계좌·휴대전화·IP 추적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (전자상거래·통신판매중개업법 신고)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>방송통신위원회 (라이브 방송 표시광고 위반 민원)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의와 미필적 인식·용인 평가',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 사기죄에서 편취 고의는 자신의 행위가 사기 범행을 실현한다는 사실을 미필적으로나마 인식·용인하면서 범행에 가담하였는지를 동기·경위·수단·관여 정도·관계 등 제반 사정을 종합해 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '"라이브 커머스 한정·선착순 + 정품 표시 + 개인계좌 결제 + 채널 폐쇄" 패턴은 거래 시점 이행 의사·정품 표시·반복 패턴이 결합되면 미필적 편취 고의 평가 대상이 될 수 있는 영역. 라이브 영상·이체·호스트 동일성 입증이 핵심.',
      },
    ],
    faq: [
      {
        question: '호스트 라이브 방송이 이미 삭제됐다면?',
        answer:
          '<strong>플랫폼(인스타·유튜브)에 영상 보존 요청 + 다른 시청자가 녹화한 자료 수집으로 보충 가능한 영역입니다.</strong> 본인 캡처가 가장 중요.',
      },
      {
        question: '플랫폼(인스타)도 책임이 있나요?',
        answer:
          '<strong>통신판매중개업법상 플랫폼의 거래 중개 책임 범위는 표시·신원 확인 의무에 한정되는 영역입니다.</strong> 플랫폼 신고로 호스트 정지·증거 보존은 가능.',
      },
      {
        question: '한정·선착순 표시가 사기 평가에 영향을 주나요?',
        answer:
          '<strong>한정·선착순이 사실이 아니거나 결제 결정 시간을 인위적으로 축소했다면 거래 시점 기망 평가 자료가 될 수 있는 영역입니다.</strong> 동일 상품 반복 판매 정황이 핵심.',
      },
      {
        question: '같은 호스트가 닉네임을 바꿔가며 반복하고 있어요',
        answer:
          '<strong>계좌·휴대전화·IP·결제 패턴으로 동일인 입증이 가능한 영역입니다.</strong> 사이버 고소 시 영장 발부 검토. 다수 피해자 집단 자료가 결정적.',
      },
      {
        question: '개인계좌로 결제했는데 환수 가능성은?',
        answer:
          '<strong>카드보다 환수율이 낮은 영역입니다.</strong> 즉시 계좌 지급정지(은행·112)·전기통신금융사기 피해 신고 검토. 이후 사기 고소·민사 부당이득 반환.',
      },
      {
        question: '통신판매업 신고가 없는 호스트면 어떻게 신고하나요?',
        answer:
          '<strong>공정거래위원회 전자상거래·통신판매중개업법 위반 신고 + 시·군·구청 미신고 통신판매업 행정 조사 신청이 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: 'SNS 쇼핑 미배송', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: '라이브 위조품', href: '/guide/fraud/fraud-livestream-counterfeit-purchase' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },
];
