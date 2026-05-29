import { SpokePage } from '../spoke-pages';

// batch81 fraud + sex-crime — 10개 (2026-05-29)
//
// 고유 존재 이유:
// 1. fraud-romance-scam-overseas-friend-investment-track — 해외 SNS·소개팅앱에서 친해진 외국인 친구·연인이 투자 권유 후 추가 입금 요구·잠적. 일반 로맨스스캠/투자사기와 분기: '해외 비대면 친밀관계 형성 + 외국 거래소·플랫폼 입금 + 추가요구 + 잠적' 결합 트랙. 이 페이지는 해외 로맨스 투자 피해자의 친밀관계·송금 입증과 추적 준비를 돕는 페이지다.
// 2. fraud-ticket-bot-resale-payment-block-cancel-track — 콘서트·스포츠 티켓 양도자가 결제 후 일방적 취소·환불 거부·잠적. 단순 중고거래 사기와 분기: '공연·경기 직전 시간 압박 + 결제 + 일방 취소 + 환불 거부·잠적' 결합. 이 페이지는 티켓 양도 결제자의 일방 취소·환불 거부 상황에서 결제·플랫폼 입증과 환수 준비를 돕는 페이지다.
// 3. fraud-gym-yoga-membership-prepay-bankruptcy-vanish-track — 헬스장·요가 1년치 회원권 선납 직후 폐업·잠적. 일반 학원 폐업류와 분기: '대규모 할인 + 1년치 일시 선납 + 단기 폐업·잠적 + 카드 할부항변' 결합. 이 페이지는 회원권 선납자의 폐업·잠적 상황에서 결제·소비자원·할부항변 준비를 돕는 페이지다.
// 4. fraud-overseas-purchase-customs-fee-additional-vanish-track — 해외 직구 대행업체가 통관 수수료 추가요구 후 잠적. 일반 직구 사기와 분기: '대행 결제 후 통관·세금 명목 추가 + 미배송 + 잠적' 결합. 이 페이지는 직구 대행 피해자의 결제·통관 입증과 환수 준비를 돕는 페이지다.
// 5. fraud-academy-textbook-prepay-closure-vanish-track — 학원 교재비·시험비 선납 받고 폐원·잠적. 단순 수강료 환불 거부와 분기: '교재·시험·자료비 별도 선납 + 폐원 + 환불 거부·잠적' 결합. 이 페이지는 학원 선납자의 폐원·잠적 상황에서 결제·집단 대응 준비를 돕는 페이지다.
// 6. fraud-investment-club-member-loss-falsely-accused-defense — 투자 동호회 운영자가 회원 손실을 차용사기로 고소당함. 개인 차용 분쟁과 분기: '동호회 운영 + 회원 투자금 + 손실 + 차용사기 고소(accused)' 결합. 이 페이지는 투자 동호회 운영자의 변제 의사·정상 거래 입증과 무고 방어 준비를 돕는 페이지다.
// 7. sex-crime-elevator-stranger-close-contact-track — 엘리베이터에서 모르는 사람이 좁은 공간을 이용해 신체 밀착·접촉. 노상·지하철 추행과 분기: '엘리베이터 협소 공간 + 일면식 없음 + 밀착·접촉 + 공용공간 CCTV' 결합. 이 페이지는 엘리베이터 추행 피해자의 CCTV·신고 준비를 돕는 페이지다.
// 8. sex-crime-massage-shop-therapist-inappropriate-touch-track — 마사지샵·스파에서 시술자가 시술 범위를 벗어난 부적절 접촉. 의료기관 추행과 분기: '시술 범위 + 부적절 접촉 + 업무상 위력 + 시술 동의 vs 범위 일탈' 결합. 이 페이지는 마사지·스파 이용자의 범위 일탈 입증과 신고 준비를 돕는 페이지다.
// 9. sex-crime-photoshoot-studio-photographer-inappropriate-touch-track — 일대일 촬영 스튜디오에서 사진작가가 포즈 잡아주는 척하며 부적절 접촉. 일반 직장 추행과 분기: '1:1 폐쇄 공간 + 포즈 지도 가장 + 신뢰관계 + 스튜디오 CCTV' 결합. 이 페이지는 스튜디오 피촬영자의 범위 일탈 입증과 CCTV 준비를 돕는 페이지다.
// 10. sex-crime-workplace-after-party-touch-falsely-accused-defense — 회사 회식 2차에서 신체접촉이 강제추행으로 사실과 다르게 신고됨. 일반 모임 추행 무고 방어와 분기: '회사 회식 + 2차 좁은 공간 + 동료 진술 + 합리적 의심·진술 신빙성' 결합 (accused). 이 페이지는 회식 추행으로 사실과 다르게 신고된 피의자의 경위·일행 진술 정리와 방어 준비를 돕는 페이지다.

export const spokesBatch81FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-romance-scam-overseas-friend-investment-track ───
  // 이 페이지는 해외 SNS·소개팅앱에서 친해진 외국인 친구·연인이 투자 권유 후 추가 입금을 받고 잠적한 피해자의 친밀관계·송금 입증과 추적을 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-romance-scam-overseas-friend-investment-track',
    keyword: '해외 친구·연인 로맨스 투자 잠적 사기',
    questionKeyword: '해외 SNS로 친해진 외국인이 같이 투자하자고 해서 보내준 거래소에 입금했는데 수익이 났다며 추가 입금만 요구하다가 연락이 끊겼어요.',
    ctaKeyword: '해외 로맨스 투자 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 친구·연인 로맨스 투자 잠적 사기 — 5단계 추적 | 로앤가이드',
      description:
        '해외 SNS·소개팅앱으로 친해진 사람이 투자 권유 후 추가 입금만 받고 잠적했다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"해외 SNS·소개팅앱에서 외국에 거주한다는 사람과 매일 메시지를 주고받으며 친해졌습니다. 한참 신뢰가 쌓이고 \'좋은 투자 플랫폼이 있다, 가족처럼 알려준다\'며 본인이 알려준 거래소·앱에 가입해 입금하라고 했어요. 처음 소액은 화면상 수익이 찍히고 출금도 일부 됐기에 믿고 큰 금액을 추가로 보냈더니, 이번엔 \'세금·인증 보증금을 더 내야 출금된다\'며 추가 입금만 요구했습니다. 그러더니 메신저 계정과 전화번호가 모두 사라졌고, 알고 보니 사진·자기소개도 도용된 가짜였어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 통신사기피해환급법은 전기통신금융사기 영역의 환급 절차를 정한 영역입니다. 비대면 친밀관계 형성 + 외국 거래소·플랫폼 입금 + 추가 요구 + 잠적 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 친밀관계·약정 입증 ② 송금·플랫폼 추적 ③ 경찰·금감원 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 친구·연인 로맨스 투자 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 친밀관계·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 친밀관계·약정 입증</strong> — 메신저·SNS 대화, 투자 권유·수익 약속·플랫폼 안내.</li>\n<li><strong>② 송금·플랫폼 추적</strong> — 원화 입금 계좌·예금주, 지갑·거래소 주소, 이체 시각.</li>\n<li><strong>③ 경찰·금감원 신고</strong> — 사건사고사실확인원 발급, 원화 입금 계좌 지급정지 요청 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 친밀관계 형성 후 추가 입금만 유도한 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 입금 원금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사진·신원이 도용된 가공의 인물이 친밀관계를 가장해 출금 의사 없이 추가 입금만 받아냈는지가 사기 평가의 결정 사정. 추가 송금 전에 대화·플랫폼·계좌 정보를 보존해두는 것이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금융감독원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대화·송금 자료 즉시 보존 (인지 당일)</strong> — 메신저 대화·프로필·투자 권유·플랫폼 안내·송금 내역 캡처.</li>\n<li><strong>2단계 — 거래소·지갑·플랫폼 확인 (1주 내)</strong> — 거래소 실재·등록 여부, 지갑 주소·트랜잭션 해시 정리.</li>\n<li><strong>3단계 — 경찰·금감원 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 원화 입금 계좌 지급정지·무인가 중개 신고 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 친밀관계 가장·추가 입금 유도 + 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 입금 원금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 로맨스 투자 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·입금·플랫폼 갈래입니다.</strong></p>\n<ul>\n<li><strong>SNS·메신저 대화·프로필·사진 캡처(원본 저장)</strong></li>\n<li><strong>투자 권유·수익 약속·플랫폼 안내 메시지</strong></li>\n<li><strong>원화 입금 내역·수취 계좌·예금주</strong></li>\n<li><strong>거래소·지갑 주소·트랜잭션 해시</strong></li>\n<li><strong>출금 거부·세금·보증금 추가요구 메시지</strong></li>\n<li><strong>도용 의심 사진 역검색 결과·동일 사진 사용 사례</strong></li>\n<li><strong>같은 수법 다수 피해자 후기·커뮤니티 제보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친밀관계가 충분히 쌓인 뒤 \'좋은 투자처\'를 권유하는 것은 로맨스 투자형의 전형으로 거론됩니다. 추가 입금 요구가 시작되면 일단 송금을 멈추고 대화·계좌·플랫폼 정보부터 보존해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 출금 의사 없이 친밀관계를 가장해 입금만 받았는지 정황.</li>\n<li><strong>가공 신원</strong> — 사진·국적·직업 도용 여부.</li>\n<li><strong>지급정지·추적 가능성</strong> — 원화 입금 계좌·지갑 흐름.</li>\n<li><strong>국외 가해자 관할</strong> — 발신지·서버·인출지의 국외 분포.</li>\n<li><strong>다수 피해 결집</strong> — 동일 수법·계좌 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (무인가 투자중개·금융사기 1666-6464 연계)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력을 통한 사람에 대한 기망 평가 영역',
        summary:
          '대법원 2022도1862(대법원, 2026.01.29 선고) 영역에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접적인 대상으로 한 것은 아니라도, 그 정보처리의 결과를 통해 처분행위를 하는 사람을 착오에 빠뜨린 경우에는 사람에 대한 기망행위에 해당한다고 판시했습니다. 해외 거래소·지갑 화면을 가장해 입금자를 착오에 빠뜨린 사안에도 친밀관계 가장·플랫폼 가공과 결제 사이의 기망·인과관계를 나누어 검토해볼 수 있습니다.',
        takeaway: '비대면 친밀관계 + 가장 플랫폼 + 추가 입금 유도·잠적 결합 시 사기·환수 평가 영역 — 대화·송금·플랫폼 보존·금감원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '얼굴도 한 번 안 본 외국인인데 사기로 신고할 수 있나요?',
        answer:
          '<strong>대면 여부와 관계없이 친밀관계 가장·기망·입금 흐름이 평가되는 영역입니다.</strong> 대화·송금 자료가 핵심 근거.',
      },
      {
        question: '처음엔 출금이 됐는데도 사기인가요?',
        answer:
          '<strong>소액 출금으로 신뢰를 쌓고 큰 금액의 출금을 막았는지가 평가 영역입니다.</strong> 입출금 흐름 정리.',
      },
      {
        question: '해외 거래소로 보낸 돈도 추적이 되나요?',
        answer:
          '<strong>지갑 주소·트랜잭션 해시로 흐름 추적을 시도할 수 있는 영역입니다.</strong> 원화 입금 계좌는 지급정지 요청 검토.',
      },
      {
        question: '사진이 가짜인 것 같은데 어떻게 확인하나요?',
        answer:
          '<strong>이미지 역검색·동일 사진 사용 사례가 가공 신원 입증의 근거가 되는 영역입니다.</strong> 결과를 캡처로 보존.',
      },
      {
        question: '같은 사람에게 당한 피해자가 더 있어요',
        answer:
          '<strong>동일 수법·계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '로맨스스캠 대응', href: '/guide/fraud/fraud-romance-scam-response' },
      { label: '코인 리딩방 출금 거부', href: '/guide/fraud/fraud-crypto-leading-room-profit-guarantee-withdrawal-block-track' },
      { label: '투자사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
    ],
  },

  // ─── 2. fraud-ticket-bot-resale-payment-block-cancel-track ───
  // 이 페이지는 콘서트·스포츠 티켓 양도자가 결제 후 일방적으로 취소·환불 거부·잠적한 상황에서 결제 입증과 환수 준비를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-ticket-bot-resale-payment-block-cancel-track',
    keyword: '콘서트·스포츠 티켓 양도 결제 후 취소 잠적 사기',
    questionKeyword: '콘서트·스포츠 티켓 양도자에게 결제했는데 공연 직전 일방적으로 취소했다며 환불도 안 해주고 잠적했어요.',
    ctaKeyword: '티켓 양도 결제 후 취소 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '티켓 양도 결제 후 취소 잠적 사기 — 5단계 환수 | 로앤가이드',
      description:
        '콘서트·스포츠 티켓 양도자에게 결제했는데 일방 취소 후 환불 거부·잠적이라면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"가고 싶었던 콘서트가 매진된 뒤 SNS·중고거래 게시판에서 \'정가 양도\'라는 글을 보고 양도자에게 빠르게 결제했습니다. 양도자는 \'예매번호·티켓 캡처는 입장 직전에 보내준다\'며 신원 정보를 일부 보여주기도 했어요. 그런데 공연 며칠 전, 갑자기 \'개인 사정으로 일방 취소한다\'며 예매번호도 주지 않고 환불도 \'당일에는 어렵다\'는 식으로 미루더니 결국 계정·번호가 모두 잠겼습니다. 같은 닉네임으로 동일 공연 다수에게 같은 수법으로 결제만 받고 잠적한 후기가 줄지어 올라와 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 전자상거래법은 \'청약철회 방해와 거짓 광고\'를 규제하는 영역입니다. 공연·경기 시간 압박 + 결제 + 일방 취소 + 환불 거부·잠적 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 거래·결제 입증 ② 플랫폼·계좌 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 티켓 양도 결제 후 취소 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 입증</strong> — 양도 게시글·DM 대화·예매번호 양도 약속·결제 내역.</li>\n<li><strong>② 플랫폼·계좌 추적</strong> — 수취 계좌·예금주, 양도자 계정·SNS ID 정리.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원 발급, 계좌 지급정지 요청 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 처음부터 양도 이행 의사 없이 결제만 받은 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 결제 대금·추가 비용·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 티켓을 양도할 의사·여력 없이 시간 압박을 이용해 결제만 받아냈는지가 사기 평가의 결정 사정. 게시글·대화·결제 흐름을 시간순으로 보존해두는 것이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·한국소비자원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 즉시 보존 (인지 당일)</strong> — 양도 게시글·DM·일방 취소 메시지·결제 내역 캡처.</li>\n<li><strong>2단계 — 양도자 계정·계좌 정리 (3일 내)</strong> — SNS·플랫폼 ID, 수취 계좌·예금주, 동일 닉네임 다수 피해 후기 수집.</li>\n<li><strong>3단계 — 경찰·소비자원 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 계좌 지급정지·카드 항변권 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 일방 취소·환불 거부 + 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제 대금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">티켓 양도 결제 후 취소 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·결제·플랫폼 갈래입니다.</strong></p>\n<ul>\n<li><strong>양도 게시글·플랫폼·SNS 캡처</strong></li>\n<li><strong>양도 조건·예매번호 전달 약속 대화</strong></li>\n<li><strong>결제·계좌 이체·카드 승인 내역</strong></li>\n<li><strong>일방 취소·환불 거부 메시지</strong></li>\n<li><strong>수취 계좌·예금주·연락처·SNS ID</strong></li>\n<li><strong>공연·경기 일시·시세 비교 자료</strong></li>\n<li><strong>같은 닉네임 다수 피해 후기·캡처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'입장 직전 예매번호 전달\'을 핑계로 결제를 먼저 받아내는 방식은 티켓 양도형 사기에서 자주 거론됩니다. 결제 전 공식 이전·티켓 인증을 우선 요구하고, 결제했다면 카드 항변권 신청 기한도 함께 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 양도 의사·여력 없이 결제만 받았는지 정황.</li>\n<li><strong>시간 압박 이용</strong> — 공연·경기 직전 환불·재구매가 어려운 상황을 의도적으로 이용했는지.</li>\n<li><strong>지급정지 가능성</strong> — 수취 계좌 잔액·이체 직후 인출 여부.</li>\n<li><strong>카드 항변권</strong> — 카드 결제 시 차지백 신청 기한.</li>\n<li><strong>다수 피해 결집</strong> — 동일 닉네임·계좌 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·금융사기 1666-6464)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사람의 개입 없이 처리되는 사무·관련 죄책 평가 영역',
        summary:
          '대법원 2020도949(대법원, 2025.12.04 선고) 영역에서 법원은 1인 1기관 개설·운영 원칙과 관련해 형사책임의 성립과 죄수관계를 명확히 정리하면서 형벌법규 해석의 엄격성을 거듭 확인했습니다. 티켓 양도라는 별개 거래에서도 처음부터 이행 의사·능력이 있었는지와 단순한 거래 불이행을 구분해 사기 범의를 판단해야 한다는 관점을 나누어 검토해볼 수 있습니다.',
        takeaway: '양도 약속 + 결제 + 일방 취소·환불 거부·잠적 결합 시 사기·환수 평가 영역 — 게시글·결제·계좌 보존·카드 항변·고소 권장.',
      },
    ],
    faq: [
      {
        question: '양도자가 \'개인 사정으로 취소\'라고만 했는데 사기인가요?',
        answer:
          '<strong>실제 양도 의사·여력 없이 시간 압박을 이용해 결제만 받았는지가 평가 영역입니다.</strong> 게시·결제·취소 흐름이 근거.',
      },
      {
        question: '카드로 결제했는데 돌려받을 수 있나요?',
        answer:
          '<strong>카드 항변권(차지백) 신청을 검토할 수 있는 영역입니다.</strong> 카드사·소비자원에 기한 확인.',
      },
      {
        question: '플랫폼 안전결제가 아니면 환수가 어렵나요?',
        answer:
          '<strong>안전결제·에스크로 미사용은 회수가 어려울 수 있는 영역입니다.</strong> 계좌 추적·지급정지 요청 검토.',
      },
      {
        question: '양도자가 계정을 닫았는데 신원을 찾을 수 있나요?',
        answer:
          '<strong>수취 계좌·예금주·SNS·플랫폼 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 닉네임으로 당한 사람이 많아요',
        answer:
          '<strong>동일 닉네임·계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-secondhand-transaction-response' },
      { label: '온라인 결제 차지백', href: '/guide/fraud/fraud-overseas-shopping-card-chargeback-track' },
      { label: 'SNS 직거래 사기', href: '/guide/fraud/fraud-sns-direct-deal-scam' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
    ],
  },

  // ─── 3. fraud-gym-yoga-membership-prepay-bankruptcy-vanish-track ───
  // 이 페이지는 헬스장·요가 1년치 회원권을 선납한 직후 업장이 폐업·잠적한 회원의 결제·할부항변·집단 대응 준비를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-gym-yoga-membership-prepay-bankruptcy-vanish-track',
    keyword: '헬스장·요가 회원권 선납 폐업 잠적 사기',
    questionKeyword: '대규모 할인이라고 해서 헬스장·요가 1년치 회원권을 선납했는데 한 달도 안 돼 폐업하고 운영자가 잠적했어요.',
    ctaKeyword: '회원권 선납 직후 폐업 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회원권 선납 직후 폐업 잠적 사기 — 5단계 환수 | 로앤가이드',
      description:
        '헬스장·요가 1년치 회원권을 선납한 직후 폐업·잠적이라면 사기·소비자원 분쟁조정·할부항변 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 헬스장·요가원에서 \'한정 기간 50% 할인, 1년 회원권 일시 결제 시 추가 혜택\' 광고를 보고 카드 할부로 큰 금액을 선납했습니다. 처음 한두 번 운동을 가니 평소대로 운영되는 듯했지만, 얼마 지나지 않아 시설이 문을 닫고 \'잠시 휴업\'이라는 안내문만 붙어 있었어요. 운영자에게 환불을 요구하니 처음엔 \'조만간 재오픈한다\'며 시간을 끌다가 결국 연락이 닿지 않았고, 같은 시기에 회원권을 선납한 회원들이 단톡방에서 같은 피해를 공유하고 있었습니다." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 할부거래법은 신용카드 할부 결제 시 \'할부항변권\'을 인정하는 영역입니다. 대규모 할인 + 1년치 일시 선납 + 단기 폐업·잠적 + 환불 거부 결합은 사기 + 분쟁조정·할부항변 결합 트랙. 피해자라면 ① 가입·결제 입증 ② 폐업 정황 정리 ③ 한국소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회원권 선납 직후 폐업 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·정황·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입·결제 입증</strong> — 할인 광고·계약서·카드 할부·일시 결제 내역.</li>\n<li><strong>② 폐업 정황 정리</strong> — 폐업 시점·임대료·세금 체납 정황, 사전 인지 가능성.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 환불 거부·집단 분쟁조정 신청.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 폐업이 임박한 상태에서 1년치 결제만 받아낸 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 잔여 회원권 가액·위자료(시효 3년) + 카드 할부항변권 행사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운영 지속 의사·여력 없이 폐업이 임박한 상태에서 1년치 회원권 결제만 받아냈는지가 사기 평가의 결정 사정. 카드 할부 결제라면 잔여 회차에 대한 할부항변권 행사도 함께 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 한국소비자원·카드사·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·결제·이용 자료 보존 (인지 즉시)</strong> — 할인 광고·계약서·카드 영수증·출입·이용 기록 캡처.</li>\n<li><strong>2단계 — 폐업·운영 정황 정리 (1주 내)</strong> — 폐업 안내·임대·세금 체납 정황, 단톡방 회원 피해 수집.</li>\n<li><strong>3단계 — 소비자원 분쟁조정·할부항변 (30~60일)</strong> — 한국소비자원 1372 신청 + 카드사 할부항변권 행사.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 폐업 임박 인지 + 다수 회원 동시 결제 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 잔여 회원권 가액·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">회원권 선납 폐업 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·결제·폐업 갈래입니다.</strong></p>\n<ul>\n<li><strong>할인 광고·전단·SNS 게시 캡처</strong></li>\n<li><strong>회원권 계약서·약관·환불 규정</strong></li>\n<li><strong>카드 결제·할부 승인·영수증</strong></li>\n<li><strong>운동 출입·이용 기록(잔여 회차 산정)</strong></li>\n<li><strong>폐업 안내문·휴업 공지·임대 분쟁 정황</strong></li>\n<li><strong>운영자·법인 사업자등록·연락처</strong></li>\n<li><strong>단톡방 다수 회원 피해 명단·결제 시점</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 시기에 다수 회원이 1년치를 일시 결제했다면 폐업이 임박했음을 알면서도 받았는지 정황 입증에 도움이 됩니다. 카드 할부 결제는 잔여 회차에 대한 할부항변권 신청 기한을 카드사에 빨리 확인해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의·운영 의사</strong> — 폐업이 임박한 상태에서 결제를 받았는지.</li>\n<li><strong>약관·환불 규정</strong> — 위약금·잔여 회차 환불 산정 방식.</li>\n<li><strong>할부항변권</strong> — 카드 할부 결제 잔여 회차 항변 가능 여부.</li>\n<li><strong>지급정지·재산 보전</strong> — 운영자 잔여 자산·이체 흐름.</li>\n<li><strong>집단 분쟁조정</strong> — 다수 회원 공동 신청 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (카드 할부 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운영 주체·기간에 따른 형사책임 평가 영역',
        summary:
          '대법원 2018도10779(대법원, 2018.11.29 선고) 영역에서 법원은 일련의 개설·운영 행위가 \'주도적 처리 관계에서 이탈할 때\' 종료된다고 보면서, 운영 명의·기간에 따라 죄수와 책임 범위를 구별해야 한다고 판시했습니다. 헬스장·요가 회원권 선납 후 단기 폐업 사안에도 운영 의사가 어느 시점까지 유지되었는지와 결제 유인의 분리 평가 영역을 나누어 검토해볼 수 있습니다.',
        takeaway: '1년치 일시 결제 + 단기 폐업·잠적 결합 시 사기·할부항변 평가 영역 — 광고·계약·결제 보존·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '단순 폐업도 사기로 볼 수 있나요?',
        answer:
          '<strong>폐업 임박을 알면서도 1년치 결제만 받았는지가 평가 영역입니다.</strong> 결제 시점·폐업 시점 간격 정리.',
      },
      {
        question: '카드 할부로 결제했는데 환불받을 수 있나요?',
        answer:
          '<strong>잔여 회차에 대해 할부항변권 행사를 검토할 수 있는 영역입니다.</strong> 카드사 신청 기한 확인.',
      },
      {
        question: '운영자가 잠적했는데 어떻게 추적하나요?',
        answer:
          '<strong>사업자·법인 정보, 임대인 진술, 계좌로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 시기에 회원권을 결제한 사람이 많아요',
        answer:
          '<strong>동시기 다수 회원 결제는 폐업 인지·집단 분쟁조정 근거가 되는 영역입니다.</strong> 단톡방 명단 정리.',
      },
      {
        question: '회원권에 환불 금지 규정이 있어도 환수되나요?',
        answer:
          '<strong>위약금 한도·잔여 회차 환불 산정은 약관과 별도로 다툴 수 있는 영역입니다.</strong> 소비자원 분쟁조정 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '학원 폐원 환불 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '카드 할부항변권 행사', href: '/guide/fraud/fraud-overseas-shopping-card-chargeback-track' },
      { label: '온라인 강의 환불 거부', href: '/guide/fraud/fraud-online-course-refund-guarantee-ad-block-vanish-track' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '소비자원 분쟁조정 절차', href: '/guide/fraud/fraud-kca-dispute-mediation-procedure' },
    ],
  },

  // ─── 4. fraud-overseas-purchase-customs-fee-additional-vanish-track ───
  // 이 페이지는 해외 직구 대행업체가 통관 수수료를 추가요구한 뒤 잠적한 상황에서 결제·통관 입증과 환수를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-overseas-purchase-customs-fee-additional-vanish-track',
    keyword: '해외 직구 대행 통관 수수료 추가 잠적 사기',
    questionKeyword: '해외 직구 대행에 결제했는데 \'통관 수수료·관세를 추가로 송금해야 배송된다\'며 추가요구 후 잠적해 물건도 못 받았어요.',
    ctaKeyword: '직구 대행 통관 수수료 추가 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직구 대행 통관 수수료 추가 잠적 사기 — 5단계 추적 | 로앤가이드',
      description:
        '해외 직구 대행이 통관 수수료·관세를 추가요구한 뒤 잠적해 물건도 못 받았다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"해외에서만 살 수 있는 가전·명품을 \'대행 결제·국내 배송\'으로 처리해준다는 직구 대행 광고를 보고 결제했습니다. 결제 후 며칠이 지나자 \'통관 과정에서 추가 관세·통관 수수료가 발생했으니 송금해야 발송된다\'며 처음 결제액과 비슷한 금액을 다시 요구했어요. 추적 조회를 해도 운송장 번호가 가짜이거나 조회되지 않았고, 항의하니 \'곧 처리한다\'며 시간을 끌다 메신저·고객센터가 모두 잠겼습니다. 같은 업체에 결제한 다른 피해자들이 동일한 \'통관 수수료\' 메시지로 추가 송금을 강요받은 후기가 줄지어 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 전자상거래법은 \'거짓·과장 광고와 청약철회 방해\'를 규제하는 영역입니다. 대행 결제 + 통관·세금 명목 추가 + 미배송 + 잠적 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 결제·배송 입증 ② 통관·운송장 확인 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직구 대행 통관 수수료 추가 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·통관·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·배송 입증</strong> — 직구 대행 광고·결제 내역·운송장·고객센터 답변.</li>\n<li><strong>② 통관·운송장 확인</strong> — 운송장 진위, 관세청 통관 조회, 추가요구 메시지.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 미배송·환불 거부·거짓 광고 청구.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 통관 사실 없이 추가 송금만 유도한 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 결제 대금·추가 송금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실제 통관·배송 의사·능력 없이 \'통관 수수료\'를 빙자해 추가 송금만 받아냈는지가 사기 평가의 결정 사정. 운송장 진위와 관세청 통관 조회 결과 보존이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·한국소비자원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·통관 자료 즉시 보존 (인지 당일)</strong> — 광고·결제·운송장·추가요구 메시지·고객센터 답변 캡처.</li>\n<li><strong>2단계 — 운송장·통관 진위 확인 (1주 내)</strong> — 운송사 조회, 관세청 통관 조회로 진위 확인.</li>\n<li><strong>3단계 — 소비자원·경찰 신고 (즉시~1주)</strong> — 한국소비자원 1372 분쟁조정 + 사이버범죄 신고, 계좌 지급정지·카드 항변권 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 통관 사실 없는 추가요구 + 동일 업체 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제·추가 송금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">직구 대행 통관 수수료 추가 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·통관·환수 갈래입니다.</strong></p>\n<ul>\n<li><strong>직구 대행 광고·랜딩페이지 캡처</strong></li>\n<li><strong>주문·결제·카드 승인 내역</strong></li>\n<li><strong>운송장 번호·운송사 조회 결과</strong></li>\n<li><strong>관세청 통관 조회·세금 납부 사실 확인</strong></li>\n<li><strong>\'통관 수수료·추가 관세\' 요구 메시지</strong></li>\n<li><strong>업체·운영자 사업자등록·연락처</strong></li>\n<li><strong>같은 업체 다수 피해 후기·캡처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정식 직구 대행은 추가 관세를 사전 안내하고 추후 정산하는 구조가 일반적입니다. 결제 후에야 \'통관 수수료를 더 보내야 발송된다\'고 강요하는 경우는 추가요구형 사기 패턴으로 거론됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 실제 통관·배송 의사·능력 없이 추가 송금만 받았는지.</li>\n<li><strong>광고·약관 괴리</strong> — 광고에 추가 비용 미고지 정황.</li>\n<li><strong>운송장·통관 진위</strong> — 가짜 운송장·미통관 사실.</li>\n<li><strong>카드 항변권</strong> — 결제 미인도 시 차지백 가능성.</li>\n<li><strong>다수 피해 결집</strong> — 동일 업체·메시지 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·금융사기 1666-6464)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형벌법규 해석·법령 변경의 평가 영역',
        summary:
          '대법원 2025도17027(대법원, 2026.01.15 선고) 영역에서 법원은 거짓·부정한 방법으로 급여 등을 편취한 사안에서 형벌법규의 해석·법령 변경 적용 원칙을 정리하며, 부정 수령·편취 사안에서 처벌과 면소를 가르는 기준을 명확히 했습니다. 직구 대행 통관 수수료 추가요구 사안에서도 결제·통관 사실 여부에 따라 단순 거래 분쟁과 사기 책임을 구분해 판단해야 한다는 관점을 나누어 검토해볼 수 있습니다.',
        takeaway: '대행 결제 + 통관 사실 없는 추가요구 + 미배송·잠적 결합 시 사기·환수 평가 영역 — 광고·결제·운송장 보존·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '대행업체가 통관에 시간이 걸린다고만 했는데 사기인가요?',
        answer:
          '<strong>실제 통관·배송 의사·능력 없이 추가 수수료만 받았는지가 평가 영역입니다.</strong> 운송장·통관 조회 결과가 근거.',
      },
      {
        question: '운송장 번호가 가짜인 것 같은데 어떻게 확인하나요?',
        answer:
          '<strong>운송사 조회·관세청 통관 조회로 진위 확인이 가능한 영역입니다.</strong> 결과는 캡처로 보존.',
      },
      {
        question: '결제 금액을 돌려받을 수 있나요?',
        answer:
          '<strong>결제·추가 송금 환수 청구 + 카드 항변권 행사를 검토할 수 있는 영역입니다.</strong> 카드사·소비자원에 기한 확인.',
      },
      {
        question: '업체가 고객센터를 닫았는데 신고되나요?',
        answer:
          '<strong>사업자·결제 대행·도메인 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 업체에서 통관 수수료를 요구받은 사람이 많아요',
        answer:
          '<strong>동일 메시지·계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 분쟁조정·고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '해외 직구 카드 차지백', href: '/guide/fraud/fraud-overseas-shopping-card-chargeback-track' },
      { label: '온라인 쇼핑몰 미배송 사기', href: '/guide/fraud/fraud-shopping-mall-no-delivery' },
      { label: 'SNS 광고 미배송', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '소비자원 분쟁조정 절차', href: '/guide/fraud/fraud-kca-dispute-mediation-procedure' },
    ],
  },

  // ─── 5. fraud-academy-textbook-prepay-closure-vanish-track ───
  // 이 페이지는 학원이 교재비·시험비를 별도 선납받은 직후 폐원·잠적한 수강자의 환불 청구와 집단 대응 준비를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-academy-textbook-prepay-closure-vanish-track',
    keyword: '학원 교재비·시험비 선납 폐원 잠적 사기',
    questionKeyword: '학원이 수강료와 별도로 교재비·시험비·자료비를 일시 선납받은 직후 폐원하고 운영자가 잠적해 환불도 안 됐어요.',
    ctaKeyword: '학원 교재비 시험비 선납 폐원 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학원 교재비·시험비 선납 폐원 잠적 사기 — 5단계 환수 | 로앤가이드',
      description:
        '학원이 교재비·시험비·자료비를 선납받은 직후 폐원·잠적했다면 사기·소비자원 분쟁조정·집단 대응 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"자녀가 다니던 학원에서 \'이번 시즌부터 교재비·시험비·자료비를 별도로 일시 선납해야 한다\'며 추가 금액을 요구했습니다. 정규 수강료와 별개로 큰 금액을 카드·계좌로 결제했고, 한두 번 교재가 전달된 뒤 \'곧 다음 단계 시험과 자료가 나간다\'는 안내가 있었어요. 그런데 얼마 지나지 않아 학원이 \'운영상 사정\'을 이유로 갑자기 문을 닫았고, 원장과 강사진은 연락이 닿지 않은 채 사라졌습니다. 같은 시기에 시험비·자료비를 선납한 학부모들이 단톡방에서 같은 피해를 공유하고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 학원법·전자상거래법은 학원 운영과 청약철회·환불 영역을 규제하는 영역입니다. 교재·시험·자료비 별도 선납 + 폐원 + 환불 거부·잠적 결합은 사기 + 분쟁조정 결합 트랙. 피해자라면 ① 선납·결제 입증 ② 폐원 정황 정리 ③ 한국소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학원 교재비·시험비 선납 폐원 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 선납·정황·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 선납·결제 입증</strong> — 교재비·시험비·자료비 청구 안내·계약·결제 내역.</li>\n<li><strong>② 폐원 정황 정리</strong> — 폐원 시점·임대료·세금 체납·강사 이탈 정황.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 환불 거부·집단 분쟁조정 신청.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 폐원이 임박한 상태에서 별도 선납만 받아낸 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 미사용 교재·시험비·자료비·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운영 지속 의사·여력 없이 폐원이 임박한 상태에서 교재·시험비를 별도로 선납받았는지가 사기 평가의 결정 사정. 정규 수강료와 분리된 별도 선납 구조와 동시기 다수 결제 입증이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 한국소비자원·교육청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 선납·결제 자료 즉시 보존 (인지 당일)</strong> — 교재·시험·자료비 청구 안내·결제 내역·전달 기록·환불 거부 메시지 캡처.</li>\n<li><strong>2단계 — 폐원·운영 정황 정리 (1주 내)</strong> — 폐원 시점·임대 분쟁·강사 이탈 정황, 학부모 단톡방 피해 수집.</li>\n<li><strong>3단계 — 소비자원·교육청 신고 (30~60일)</strong> — 한국소비자원 1372 분쟁조정 + 관할 교육청 학원 민원.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 폐원 임박 인지 + 다수 학부모 동시 선납 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 미사용 선납액·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 교재비·시험비 선납 폐원 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 선납·결제·폐원 갈래입니다.</strong></p>\n<ul>\n<li><strong>교재비·시험비·자료비 별도 청구 안내 캡처</strong></li>\n<li><strong>수강 계약서·약관·환불 규정</strong></li>\n<li><strong>카드·계좌 결제 내역·영수증</strong></li>\n<li><strong>교재 전달·시험 응시 기록(잔여분 산정)</strong></li>\n<li><strong>폐원 공지·휴원 안내·임대 분쟁 정황</strong></li>\n<li><strong>원장·법인 사업자등록·연락처</strong></li>\n<li><strong>단톡방 학부모 피해 명단·결제 시점</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원이 정규 수강료와 별개로 교재·시험·자료비를 한꺼번에 일시 선납받는 구조 자체가 위험 신호로 거론됩니다. 동시기 다수 학부모가 동일 명목으로 결제했다면 폐원 인지 정황 입증과 집단 분쟁조정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의·운영 의사</strong> — 폐원이 임박한 상태에서 별도 선납을 받았는지.</li>\n<li><strong>약관·환불 규정</strong> — 위약금 한도·미사용분 환불 산정 방식.</li>\n<li><strong>책임 주체</strong> — 원장·법인·운영자 명의 분리 여부.</li>\n<li><strong>지급정지·재산 보전</strong> — 운영자 잔여 자산·이체 흐름.</li>\n<li><strong>집단 분쟁조정</strong> — 다수 학부모 공동 신청 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·금융사기 1666-6464)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임무에 관한 부정한 청탁·재산 처분 평가 영역',
        summary:
          '대법원 2009도1518(대법원, 2009.06.11 선고) 영역에서 법원은 임무에 관해 부정한 청탁을 받은 자가 자신이 아니라 다른 사람으로 하여금 재물 또는 재산상의 이익을 취득하게 한 경우의 책임 성립을 정리했습니다. 학원 교재·시험비 선납 사안에서도 운영 책임자가 명의 분리·법인 가장 등을 통해 재산을 분리해 처분했는지 정황을 나누어 평가 영역에서 검토해볼 수 있습니다.',
        takeaway: '교재·시험비 별도 선납 + 단기 폐원·잠적 결합 시 사기·집단 분쟁조정 평가 영역 — 청구·결제·폐원 정황 보존·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '교재·시험비를 받은 뒤 폐원한 것도 사기로 볼 수 있나요?',
        answer:
          '<strong>폐원 임박을 알면서도 별도 선납을 받았는지가 평가 영역입니다.</strong> 결제·폐원 시점 간격 정리.',
      },
      {
        question: '카드로 결제한 교재비·시험비도 환수되나요?',
        answer:
          '<strong>미사용분에 대한 카드 항변권·소비자원 분쟁조정을 검토할 수 있는 영역입니다.</strong> 카드사 신청 기한 확인.',
      },
      {
        question: '원장이 잠적했는데 누구에게 책임을 묻나요?',
        answer:
          '<strong>법인·운영자 명의와 자산 분리 여부에 따라 책임 주체가 평가되는 영역입니다.</strong> 사업자등록·임대 정보 정리.',
      },
      {
        question: '같은 시기에 시험비를 낸 학부모가 많아요',
        answer:
          '<strong>동시기 다수 선납은 폐원 인지 입증과 집단 대응 근거가 되는 영역입니다.</strong> 단톡방 명단·결제 시점 정리.',
      },
      {
        question: '교육청에 신고하면 환불되나요?',
        answer:
          '<strong>교육청 민원은 행정 처분을 다루고, 환불 자체는 소비자원·민사 트랙이 별도 영역입니다.</strong> 트랙 분리 대응 권장.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '학원 수강권 환불 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '온라인 강의 환불 거부', href: '/guide/fraud/fraud-online-course-refund-guarantee-ad-block-vanish-track' },
      { label: '회원권 선납 폐업 사기', href: '/guide/fraud/fraud-gym-yoga-membership-prepay-bankruptcy-vanish-track' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '소비자원 분쟁조정 절차', href: '/guide/fraud/fraud-kca-dispute-mediation-procedure' },
    ],
  },

  // ─── 6. fraud-investment-club-member-loss-falsely-accused-defense ───
  // 이 페이지는 투자 동호회 운영자가 회원 손실을 차용사기로 사실과 다르게 고소당한 상황에서 변제 의사·정상 거래 입증과 무고 방어를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-investment-club-member-loss-falsely-accused-defense',
    keyword: '투자 동호회 운영자 회원 손실 차용사기 무고 방어',
    questionKeyword: '투자 동호회를 운영하며 회원들과 정상적으로 자금을 모아 투자했는데 손실이 나자 일부 회원이 처음부터 갚을 생각 없이 빌린 차용사기라며 고소했어요.',
    ctaKeyword: '투자 동호회 운영자 차용사기 고소 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '투자 동호회 운영자 차용사기 고소 방어 — 5단계 | 로앤가이드',
      description:
        '투자 동호회 운영자가 회원 손실을 차용사기로 사실과 다르게 고소당했다면 변제 의사·정상 거래·무고 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랫동안 같이 공부하던 사람들과 투자 동호회를 만들어 회비·공동 투자금을 모아 운용해 왔습니다. 동호회 규정도 만들어 회원 동의를 받고 자금 흐름·수익·손실을 정기적으로 공유했고, 회비 외 차용·운용 자금에 대해서는 차용증·운용 약정도 따로 작성했어요. 그런데 한 차례 시장 하락으로 손실이 발생하자, 일부 회원이 \'처음부터 갚을 생각이 없었던 차용사기\'라며 저를 고소했습니다. 저는 자금 운용 내역·일부 변제·연락을 꾸준히 이어왔는데, 단순 손실이 형사 사건으로 둔갑한 것 같아 혐의를 받고 있다면 어떻게 정리해야 할지 막막합니다." 형법 제347조 사기는 \'차용·자금 수령 당시부터 변제·운용 의사·능력이 없는 기망\'이 있어야 성립하는 영역이고, 단순한 투자 손실·채무불이행은 형사 사기와 구분되는 민사 영역입니다. 사실과 다르게 신고되었다면 ① 동호회 운영 입증 ② 변제·운용 의사 입증 ③ 진술 정리 ④ 형사 방어 ⑤ 무고·민사 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 투자 동호회 운영자 차용사기 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운영·변제·진술·방어·무고 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동호회 운영 입증</strong> — 회칙·운용 약정·회비·공동 투자금 입금·정기 보고 자료.</li>\n<li><strong>② 변제·운용 의사 입증</strong> — 자금 운용 내역·수익·손실 공유, 일부 변제·환급 송금.</li>\n<li><strong>③ 진술 정리</strong> — 모집 경위·시장 변동·손실 발생·대응을 시간순으로 정리.</li>\n<li><strong>④ 형사 방어</strong> — 차용·수령 당시 운용 의사·능력 존재(편취 범의 부재) 소명.</li>\n<li><strong>⑤ 무고·민사 대응</strong> — 허위 고소 정황 시 무고 검토, 잔여 채무는 민사로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자금 수령 당시 운용·변제 의사·능력이 있었는데 이후 시장 변동·운용 실패로 손실이 난 것이라면, 차용·수령 시점의 편취 범의를 요하는 형사 사기와 단순 채무불이행·투자 손실은 구분되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 운영·자금 자료 즉시 정리 (고소 통보 시)</strong> — 회칙·약정·입금·운용·일부 변제 내역, 보고 자료를 시간순으로 정리.</li>\n<li><strong>2단계 — 진술 전 법률구조공단 132 상담 (조사 전)</strong> — 채무불이행·투자 손실·차용사기 구분, 편취 범의 쟁점 점검.</li>\n<li><strong>3단계 — 경찰 조사 대응 (조사 시)</strong> — 차용·수령 당시 운용 의사·능력, 시장 변동·손실 경위 진술.</li>\n<li><strong>4단계 — 무고 검토 (허위 정황 시)</strong> — 운용·변제 노력이 명백한데 \'처음부터 갚을 뜻 없음\'으로 신고했다면 무고 검토.</li>\n<li><strong>5단계 — 민사 정산 (병행)</strong> — 잔여 채무·손실 분배는 운용 약정·민사 절차로 분리 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자 동호회 운영자 차용사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 운영·자금·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>동호회 회칙·운용 약정·동의서</strong></li>\n<li><strong>회비·공동 투자금 입금 내역</strong></li>\n<li><strong>자금 운용·매매·수익·손실 내역(증빙 포함)</strong></li>\n<li><strong>정기 운용 보고·공지·단톡 기록</strong></li>\n<li><strong>일부 변제·환급 송금 내역</strong></li>\n<li><strong>고소장·경찰 조사 통보·소환장</strong></li>\n<li><strong>차용·수령 당시 운용 의사·능력 소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실과 다르게 신고되었다면 고소인을 직접 접촉해 회유·압박하는 것은 또 다른 문제가 될 수 있으니 피하고, 운용·변제 노력을 시간순으로 객관적으로 정리하는 데 집중하는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의 시점</strong> — 차용·수령 당시 운용 의사·능력 vs 이후 시장 변동.</li>\n<li><strong>투자 손실 구분</strong> — 형사 차용사기와 민사 손실 분배의 경계.</li>\n<li><strong>운용 투명성</strong> — 운용 내역·보고·공지의 일관성.</li>\n<li><strong>변제·환급 노력</strong> — 일부 변제·환급·계획 재안내 정황.</li>\n<li><strong>무고 가능성</strong> — \'처음부터 갚을 뜻 없음\' 신고의 사실 부합 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가중처벌·책임 평가의 일관성 평가 영역',
        summary:
          '대법원 2025도15970(대법원, 2026.01.29 선고) 영역에서 법원은 형의 실효 이후에도 일정 요건에서 누범 조항이 적용된다고 보면서 형사책임의 성립과 가중 처벌은 행위 당시 사정과 후속 사정을 구분해 엄격히 판단해야 한다는 취지로 정리했습니다. 투자 동호회 운영 중 손실이 발생한 사안에서도 차용·수령 당시의 운용 의사·능력과 이후 시장 변동을 구분해 평가해야 한다는 관점을 나누어 검토해볼 수 있습니다.',
        takeaway: '동호회 운영 + 정상 자금 흐름 + 손실 + 차용사기 신고 결합 시 채무불이행·차용사기 구분 영역 — 운영·운용·변제 입증·법률구조공단 상담·진술 정리 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실이 났다고 차용사기로 고소될 수 있나요?',
        answer:
          '<strong>차용·수령 당시부터 운용 의사·능력이 없었는지가 핵심 쟁점 영역입니다.</strong> 운영·운용·변제 흐름이 방어 근거.',
      },
      {
        question: '회비·공동 투자금과 차용금이 섞여 있는데 구분되나요?',
        answer:
          '<strong>회칙·운용 약정·입금 명목에 따라 자금 성격이 평가되는 영역입니다.</strong> 명목별 입금 내역 분리 정리.',
      },
      {
        question: '일부 회원만 고소했는데 다른 회원과 다르게 봐야 하나요?',
        answer:
          '<strong>회원별 약정·운용 보고·변제 흐름이 개별적으로 평가되는 영역입니다.</strong> 회원별 자료 분리.',
      },
      {
        question: '잔여 채무를 분할 변제하면 형사도 끝나나요?',
        answer:
          '<strong>형사·민사 트랙은 별개로, 합의·변제는 양형 자료가 되는 영역입니다.</strong> 잔여 분배는 민사로 분리 대응.',
      },
      {
        question: '조사받기 전에 무엇을 준비해야 하나요?',
        answer:
          '<strong>운영·운용·변제 흐름을 시간 순으로 정리하는 것이 핵심입니다.</strong> 진술 전 법률구조공단 132 상담.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '차용금 변제 지연 방어', href: '/guide/fraud/fraud-personal-loan-repayment-delay-falsely-accused-defense' },
      { label: '채무불이행 vs 사기 구분', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '동업 손실 무고 방어', href: '/guide/fraud/fraud-partnership-loss-false-accusation-defense' },
      { label: '무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 고소 대응', href: '/guide/fraud/fraud-accused-response' },
    ],
  },

  // ─── 7. sex-crime-elevator-stranger-close-contact-track ───
  // 이 페이지는 엘리베이터 좁은 공간에서 모르는 사람에게 밀착·접촉 피해를 입은 사람이 공용공간 CCTV·신고 준비를 정리하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-elevator-stranger-close-contact-track',
    keyword: '엘리베이터 모르는 사람 밀착 접촉 피해',
    questionKeyword: '엘리베이터에서 모르는 사람이 좁은 공간을 핑계로 몸을 바짝 붙이고 신체를 접촉했어요. 좁은 공간이라 항의도 못 했는데 신고할 수 있나요?',
    ctaKeyword: '엘리베이터 모르는 사람 밀착 접촉 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 모르는 사람 밀착 접촉 — 5단계 신고 | 로앤가이드',
      description:
        '엘리베이터에서 모르는 사람이 좁은 공간을 이용해 신체를 밀착·접촉했다면 공용공간 CCTV·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>밤늦은 아파트나 오피스 엘리베이터에서 일면식 없는 사람이 \'사람이 더 탄다·자리가 좁다\'는 핑계를 대며 등 뒤에 바짝 붙거나 손등·허리·엉덩이가 닿게 자세를 바꾸고 내릴 때까지 그 자세를 유지했다면 "공용공간이라 좁은 게 당연한 건지", "그 자리에서 항의도 못 했는데 신고가 되는지" 불쾌함과 두려움이 한참 가시지 않으실 것입니다. 형법 제298조 강제추행죄와 성폭력처벌법은 \'폭행 또는 협박으로 사람에 대하여 추행\'한 행위를 규율하는 영역으로, 폭행행위 자체가 곧바로 추행이 되는 이른바 기습추행도 포함하는 것으로 해석되어 왔습니다. 대법원은 신체접촉 행위가 의례적·사회적으로 상당한 범주를 벗어나 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르는지가 핵심이라는 취지로 판시(2024도18701)한 바 있습니다. 엘리베이터 좁은 공간 + 일면식 없음 + 밀착·접촉 + 공용공간 CCTV 결합 피해라면 ① 현장 증거 확보 ② 즉시 신고 ③ 가해자 특정 ④ 진술 정리 ⑤ 절차 진행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 밀착 접촉 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거 확보</strong> — 발생 동·호기 위치·시간·접촉 부위를 즉시 메모, 엘리베이터·로비 CCTV 보존 요청.</li>\n<li><strong>② 즉시 신고</strong> — 형법 제298조 강제추행 가능성, 112 신고로 인근 순찰 요청.</li>\n<li><strong>③ 가해자 특정</strong> — 출입 카드·경비실·층 정보·동일 엘리베이터 탑승 기록.</li>\n<li><strong>④ 진술 정리</strong> — 좁은 공간에서 항의가 어려웠던 정황도 솔직히 기록.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, CCTV·출입 기록 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 공간을 핑계로 댄 접촉이라도, 의사에 반하는 유형력 행사로서 의례·사회적 상당성을 넘어선 정도라면 별도로 검토 대상이 될 수 있는 영역입니다. 동·호기·시간·접촉 부위 메모와 엘리베이터·로비 CCTV 보존 요청이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 확보 (즉시)</strong> — 동·호기 위치·시간·접촉 부위·인상착의 메모, 일행·동승자 진술 확인.</li>\n<li><strong>2단계 — 즉시 신고 (즉시)</strong> — 112 신고, 관리실·경비실에 CCTV 보존 요청.</li>\n<li><strong>3단계 — 가해자 특정 (1~4주)</strong> — 출입 카드 기록·경비실 진술·동일 엘리베이터 탑승 화면.</li>\n<li><strong>4단계 — 진술 정리·접수 (가능한 빨리)</strong> — 여성청소년수사대, 접촉 경위·항의 어려웠던 정황 구체화.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — CCTV·목격 진술 보강, 신뢰관계인 동석 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 모르는 사람 밀착 접촉 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>동·호기·시간·접촉 부위 메모(즉시 기록)</strong></li>\n<li><strong>가해자 인상착의·복장·체격 기록</strong></li>\n<li><strong>엘리베이터·로비 CCTV 보존 요청 접수 자료</strong></li>\n<li><strong>관리실·경비실 진술·출입 카드 기록</strong></li>\n<li><strong>동승자·목격자 연락처·진술</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해 경위 시간순 정리표(좁은 공간 항의 어려움 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 아파트·오피스 엘리베이터·로비 CCTV는 보존 기간이 짧은 경우가 많으니 신고 직후 관리실에 보존 요청을 해두는 것이 도움이 됩니다. 좁은 공간에서 즉시 항의가 어려웠던 정황도 진술에 솔직히 담아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당 여부</strong> — 접촉 부위·태양·시간이 의례적 범주를 벗어나 성적 침해에 이르렀는지.</li>\n<li><strong>유형력 행사 여부</strong> — 좁은 공간을 핑계로 한 의도적 밀착인지.</li>\n<li><strong>가해자 특정</strong> — 출입 카드·CCTV·층 정보 확보 여부.</li>\n<li><strong>현장 증거 보존</strong> — 엘리베이터·로비 CCTV 보존 기간 경과 전 요청 여부.</li>\n<li><strong>항의 어려움 정황</strong> — 좁은 공간·즉시 항의의 한계 설명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의례적 범주 일탈·성적 자유 침해 평가 영역',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 \'추행\' 판단과 관련해, 공동체 내 신체접촉이 자연스러운 비언어적 의사소통이나 의례·사회적으로 상당한 것으로 볼 수 있는 경우에는 추행에 해당하지 않을 수 있지만, 그 범주를 다소 벗어났더라도 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르렀는지를 종합적으로 판단해야 한다는 취지로 판시했습니다. 엘리베이터 좁은 공간 밀착 사안에서는 접촉 부위·자세 유지 시간·CCTV 정황이 의례적 범주 일탈과 성적 자유 침해 평가에 도움이 될 수 있습니다.',
        takeaway: '좁은 공간을 핑계로 한 의사 반함 접촉도 의례 범주 일탈 여부에 따라 평가될 수 있음 — 동·호기·시간·접촉 부위 메모와 CCTV 보존 요청 후 신고 권장.',
      },
    ],
    faq: [
      {
        question: '엘리베이터가 좁아서 닿은 것뿐이라고 하면 어떻게 되나요?',
        answer:
          '<strong>의례적 범주를 벗어난 의도적 밀착·접촉인지가 평가되는 영역입니다.</strong> 접촉 부위·자세 유지 시간이 근거.',
      },
      {
        question: '모르는 사람인데 가해자 특정이 가능한가요?',
        answer:
          '<strong>출입 카드·경비실 진술·엘리베이터 CCTV로 추적을 시도하는 영역입니다.</strong> 발생 동·호기·시간이 핵심.',
      },
      {
        question: '바로 항의를 못 했는데도 신고가 되나요?',
        answer:
          '<strong>좁은 공간에서 즉시 항의가 어려웠던 정황도 종합적으로 평가되는 영역입니다.</strong> 정황을 솔직히 기록.',
      },
      {
        question: '엘리베이터 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>관리실·경비실에 보존을 요청하고 경찰 신고 시 압수·열람을 진행하는 영역입니다.</strong> 보존 기간이 짧을 수 있어 빠른 요청이 중요합니다.',
      },
      {
        question: '혼자 신고하기 부담스러운데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 해바라기센터(1899-3075)에서 동반 신고·심리 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '노상 기습추행 대응', href: '/guide/sex-crime/sex-crime-street-stranger-sudden-embrace-grope-track' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 8. sex-crime-massage-shop-therapist-inappropriate-touch-track ───
  // 이 페이지는 마사지샵·스파에서 시술자가 시술 범위를 벗어난 부적절 접촉을 한 경우 피해자가 범위 일탈 입증과 신고를 정리하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-therapist-inappropriate-touch-track',
    keyword: '마사지샵·스파 시술자 부적절 접촉 피해',
    questionKeyword: '마사지샵·스파에서 시술자가 시술 범위를 벗어난 부위를 만지거나 부적절하게 접촉했어요. 시술 동의가 있었는데도 신고할 수 있나요?',
    ctaKeyword: '마사지샵 스파 시술 범위 일탈 접촉 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '마사지샵·스파 시술 범위 일탈 접촉 — 5단계 신고 | 로앤가이드',
      description:
        '마사지샵·스파에서 시술자가 시술 범위를 벗어나 부적절한 신체 접촉을 했다면 범위 일탈 입증·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>마사지샵·스파·테라피 서비스를 받으러 갔다가 시술자가 동의한 시술 범위(목·어깨·등·다리 등)를 벗어나 가슴·골반 안쪽·엉덩이 등 내밀한 부위를 만지거나, 시술과 무관한 방식으로 신체 접촉을 이어갔다면 "시술 자체에 동의했으니 신고가 되는지", "그 자리에선 당황해 항의도 못 했는데 이제 와서 문제 삼을 수 있는지" 혼란스럽고 불쾌함이 가시지 않으실 것입니다. 형법 제298조 강제추행죄와 성폭력처벌법은 \'폭행 또는 협박으로 사람에 대하여 추행\'한 행위를 규율하는 영역이고, 의료·시술과 같이 신체접촉이 수반되는 서비스에서도 동의 범위를 벗어난 접촉은 별도로 평가될 수 있는 영역입니다. 대법원은 신체접촉 행위가 의례·사회적으로 상당한 범주를 벗어나 성적 자유를 침해하는 정도에 이르렀는지를 종합적으로 판단해야 한다는 취지로 판시(2023도10410)한 바 있습니다. 시술 범위 + 부적절 접촉 + 업무상 위력 + 범위 일탈 결합 피해라면 ① 현장 증거 확보 ② 즉시 신고 ③ 시술 정황 정리 ④ 진술 정리 ⑤ 절차 진행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵·스파 시술 범위 일탈 접촉 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·정황·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거 확보</strong> — 시술 동의 범위·실제 접촉 부위·시간·자세를 즉시 메모, 결제·예약 기록 확인.</li>\n<li><strong>② 즉시 신고</strong> — 형법 제298조 강제추행·업무상 위력 가능성, 112·여성청소년수사대 신고.</li>\n<li><strong>③ 시술 정황 정리</strong> — 동의한 코스·옵션과 실제 접촉의 범위 차이 정리.</li>\n<li><strong>④ 진술 정리</strong> — 시술자 손길·말·상황을 시간 순으로 구체화.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, 업장 CCTV·예약 기록 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시술 자체에 동의했어도 동의 범위를 벗어난 내밀한 부위 접촉이나 시술과 무관한 접촉은 별도로 검토 대상이 될 수 있는 영역입니다. 동의한 코스와 실제 접촉의 범위 차이 정리가 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·정황·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 확보 (즉시)</strong> — 시술 동의 범위·실제 접촉 부위·시간·자세 메모, 결제·예약 화면 캡처.</li>\n<li><strong>2단계 — 즉시 신고 (즉시)</strong> — 112 신고, 업장에 CCTV·예약 기록 보존 요청.</li>\n<li><strong>3단계 — 시술 정황 정리 (3일 내)</strong> — 동의한 코스·옵션과 실제 접촉 범위 차이 시간순 정리.</li>\n<li><strong>4단계 — 진술 정리·접수 (가능한 빨리)</strong> — 여성청소년수사대, 접촉 경위·당황 정황 구체화.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — CCTV·동료 시술자·예약 기록 보강, 신뢰관계인 동석 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵·스파 시술 범위 일탈 접촉 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시술·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>동의 코스·옵션·동의서 캡처</strong></li>\n<li><strong>실제 접촉 부위·시간·자세 메모(즉시 기록)</strong></li>\n<li><strong>예약·결제·영수증 내역</strong></li>\n<li><strong>업장 CCTV·시술실 구조도 보존 요청 자료</strong></li>\n<li><strong>같은 시술자에게 시술받은 동료·후기 진술</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해 경위 시간순 정리표(당황·항의 어려움 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시술 동의 범위는 동의서·코스 안내·예약 화면에 기록된 부위·방식을 기준으로 확인할 수 있는 영역입니다. 시술 직후 동의 코스와 실제 접촉 범위 차이를 시간순으로 메모해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동의 범위 일탈</strong> — 동의 코스·부위와 실제 접촉의 차이.</li>\n<li><strong>추행 해당 여부</strong> — 의례·시술 상당성을 벗어난 성적 침해 여부.</li>\n<li><strong>업무상 위력</strong> — 시술 중 자세·관계의 위력 작용 여부.</li>\n<li><strong>현장 증거 보존</strong> — 시술실·복도 CCTV 보존 가능 여부.</li>\n<li><strong>유사 피해 결집</strong> — 같은 시술자에게 피해를 입은 다른 손님의 진술.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시술·공동체 내 신체접촉의 범위 일탈 평가 영역',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 공동체 내 신체접촉 행위가 의례·사회적으로 상당한 범주를 다소 벗어나 부적절한 성적 언동으로 받아들여질 여지가 있더라도, 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에까지 이르렀는지를 종합적으로 판단해야 한다는 취지로 정리했습니다. 마사지·스파 시술 사안에도 동의 범위와 실제 접촉의 차이, 위력 정황을 나누어 평가 영역에서 검토해볼 수 있습니다.',
        takeaway: '시술 동의 범위 일탈 + 내밀한 부위 접촉 + 업무상 위력 정황 결합 시 성적 자유 침해 평가 영역 — 동의 코스·접촉 차이·CCTV 보존 후 신고 권장.',
      },
    ],
    faq: [
      {
        question: '시술에 동의했는데도 신고가 되나요?',
        answer:
          '<strong>동의 범위를 벗어난 부위·방식의 접촉은 별도로 평가되는 영역입니다.</strong> 동의 코스와 실제 접촉 차이가 근거.',
      },
      {
        question: '시술자가 \'시술의 일부\'라고 설명했는데도 문제될 수 있나요?',
        answer:
          '<strong>시술 명목이라도 의례·시술 상당성을 벗어난 접촉은 평가되는 영역입니다.</strong> 동의서·코스 안내가 비교 기준.',
      },
      {
        question: '시술실에 CCTV가 없는데 입증할 수 있나요?',
        answer:
          '<strong>복도·로비 CCTV, 예약·결제 기록, 같은 시술자 후기 진술이 보강 자료가 되는 영역입니다.</strong> 가능한 자료를 함께 수집.',
      },
      {
        question: '바로 항의를 못 했는데도 신고가 되나요?',
        answer:
          '<strong>시술 자세·당황 정황도 종합적으로 평가되는 영역입니다.</strong> 항의가 어려웠던 정황을 진술에 솔직히 기록.',
      },
      {
        question: '같은 시술자에게 비슷한 피해를 본 사람이 있다고 들었어요',
        answer:
          '<strong>유사 피해 진술은 행위의 반복성 평가에 도움이 되는 영역입니다.</strong> 후기·연락처를 모아두는 것이 좋습니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '직장 위력 추행 대응', href: '/guide/sex-crime/workplace-power-molestation-track' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 9. sex-crime-photoshoot-studio-photographer-inappropriate-touch-track ───
  // 이 페이지는 일대일 촬영 스튜디오에서 사진작가가 포즈 지도를 가장해 부적절 접촉한 경우 피촬영자가 범위 일탈 입증과 CCTV·신고를 정리하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-photoshoot-studio-photographer-inappropriate-touch-track',
    keyword: '촬영 스튜디오 작가 포즈 지도 부적절 접촉 피해',
    questionKeyword: '일대일 촬영 스튜디오에서 사진작가가 포즈를 잡아주는 척하며 가슴·허리·엉덩이를 만졌어요. 촬영에 동의했는데도 신고할 수 있나요?',
    ctaKeyword: '촬영 스튜디오 작가 포즈 지도 접촉 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '촬영 스튜디오 작가 포즈 지도 접촉 — 5단계 신고 | 로앤가이드',
      description:
        '일대일 촬영 스튜디오에서 사진작가가 포즈 지도를 가장해 부적절 접촉을 했다면 범위 일탈·CCTV·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>프로필·바디·콘셉트 촬영을 위해 일대일 스튜디오를 예약했는데, 촬영 도중 사진작가가 \'포즈를 잡아주겠다\'며 가슴·허리·엉덩이·골반 안쪽에 손을 대거나 옷매무새를 정리한다는 핑계로 신체를 만졌다면 "촬영 자체엔 동의했으니 신고가 되는지", "1:1 폐쇄 공간이라 당황해 항의도 못 했는데 이제 와서 문제 삼을 수 있는지" 혼란스럽고 불쾌함이 한참 가시지 않으실 것입니다. 형법 제298조 강제추행죄와 성폭력처벌법은 \'폭행 또는 협박으로 사람에 대하여 추행\'한 행위를 규율하는 영역이고, 신체 접촉이 동반되는 전문 서비스에서도 동의 범위를 벗어난 접촉은 별도로 평가될 수 있는 영역입니다. 대법원은 강제추행죄 성립에 필요한 주관적 구성요건요소는 고의로 충분하고, 성욕 자극·만족 목적이 별도로 있어야 하는 것은 아니라는 취지로 판시(2022도9676)한 바 있습니다. 1:1 폐쇄 공간 + 포즈 지도 가장 + 신뢰관계 + 스튜디오 CCTV 결합 피해라면 ① 현장 증거 확보 ② 즉시 신고 ③ 촬영 정황 정리 ④ 진술 정리 ⑤ 절차 진행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 촬영 스튜디오 작가 포즈 지도 접촉 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·정황·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거 확보</strong> — 촬영 컨셉 동의 범위·실제 접촉 부위·시간을 즉시 메모, 예약·결제 화면 보존.</li>\n<li><strong>② 즉시 신고</strong> — 형법 제298조 강제추행 가능성, 112·여성청소년수사대 신고.</li>\n<li><strong>③ 촬영 정황 정리</strong> — 합의된 콘셉트·포즈와 실제 접촉의 범위 차이 정리.</li>\n<li><strong>④ 진술 정리</strong> — 작가 손길·말·이동을 시간 순으로 구체화.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, 스튜디오 CCTV·예약 기록 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 촬영 자체에 동의했어도 합의된 콘셉트·포즈를 벗어난 내밀한 부위 접촉은 별도로 검토 대상이 될 수 있는 영역입니다. 강제추행죄는 성욕 자극 목적이 별도로 요구되지 않으며 고의만 인정되면 평가될 수 있는 점도 참고할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·정황·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 확보 (즉시)</strong> — 콘셉트 동의 범위·실제 접촉 부위·시간 메모, 예약·결제·콘셉트 안내 캡처.</li>\n<li><strong>2단계 — 즉시 신고 (즉시)</strong> — 112 신고, 스튜디오에 CCTV·예약 기록 보존 요청.</li>\n<li><strong>3단계 — 촬영 정황 정리 (3일 내)</strong> — 합의된 포즈·콘셉트와 실제 접촉의 차이 시간순 정리.</li>\n<li><strong>4단계 — 진술 정리·접수 (가능한 빨리)</strong> — 여성청소년수사대, 1:1 폐쇄 공간에서 항의 어려웠던 정황 구체화.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — CCTV·예약·결제·동료 모델 진술 보강, 신뢰관계인 동석 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">촬영 스튜디오 작가 포즈 지도 접촉 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 촬영·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>콘셉트·포즈 동의 안내·DM 캡처</strong></li>\n<li><strong>실제 접촉 부위·시간·자세 메모(즉시 기록)</strong></li>\n<li><strong>예약·결제·영수증 내역</strong></li>\n<li><strong>스튜디오 CCTV·동선 구조도 보존 요청 자료</strong></li>\n<li><strong>같은 작가에게 촬영받은 동료·후기 진술</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해 경위 시간순 정리표(폐쇄 공간 항의 어려움 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 촬영 콘셉트 동의 범위는 사전 안내·DM·예약 화면에 기록된 포즈·노출 정도를 기준으로 확인할 수 있는 영역입니다. 촬영 직후 합의된 포즈와 실제 접촉 범위의 차이를 시간순으로 메모해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동의 범위 일탈</strong> — 합의된 콘셉트·포즈와 실제 접촉의 차이.</li>\n<li><strong>추행 해당 여부</strong> — 의례·작업 상당성을 벗어난 성적 침해 여부.</li>\n<li><strong>주관적 구성요건</strong> — 고의 인정 여부(성욕 목적 별도 요구 아님).</li>\n<li><strong>현장 증거 보존</strong> — 스튜디오 CCTV·예약·결제 기록 확보 여부.</li>\n<li><strong>유사 피해 결집</strong> — 같은 작가에게 피해를 입은 다른 피촬영자의 진술.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행 주관적 구성요건·신뢰관계 접촉 평가 영역',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 강제추행죄의 성립에 필요한 주관적 구성요건요소는 고의로 충분하고 그 외에 성욕을 자극·흥분·만족시키려는 동기·목적이 별도로 요구되는 것은 아니라는 취지를 정리하면서, 신체 접촉이 수반되는 신뢰관계에서도 접촉 부위·태양·진술 신빙성을 종합해 추행 여부를 판단해야 한다고 판시했습니다. 촬영 스튜디오에서 포즈 지도를 가장한 접촉 사안에서는 동의 콘셉트와 실제 접촉의 차이, 스튜디오 CCTV가 평가에 도움이 될 수 있습니다.',
        takeaway: '촬영 동의 범위 일탈 + 포즈 지도 가장 + 1:1 폐쇄 공간 결합 시 성적 자유 침해 평가 영역 — 콘셉트 동의·접촉 차이·CCTV 보존 후 신고 권장.',
      },
    ],
    faq: [
      {
        question: '촬영에 동의했는데도 신고가 되나요?',
        answer:
          '<strong>동의 범위를 벗어난 부위·방식 접촉은 별도로 평가되는 영역입니다.</strong> 합의된 콘셉트와 실제 접촉 차이가 근거.',
      },
      {
        question: '작가가 \'포즈 지도\'라고 하면 추행이 아닌가요?',
        answer:
          '<strong>지도 명목이라도 의례·작업 상당성을 벗어난 접촉은 평가되는 영역입니다.</strong> 사전 안내·DM과 비교.',
      },
      {
        question: '1:1 스튜디오라 목격자가 없는데 입증되나요?',
        answer:
          '<strong>스튜디오 CCTV·예약·결제 기록, 동료 모델 진술이 보강 자료가 되는 영역입니다.</strong> 가능한 자료를 함께 수집.',
      },
      {
        question: '바로 항의를 못 했는데도 신고가 되나요?',
        answer:
          '<strong>폐쇄 공간에서 즉시 항의가 어려웠던 정황도 종합적으로 평가되는 영역입니다.</strong> 정황을 진술에 솔직히 기록.',
      },
      {
        question: '같은 작가에게 비슷한 피해를 본 사람이 있어요',
        answer:
          '<strong>유사 피해 진술은 행위의 반복성 평가에 도움이 되는 영역입니다.</strong> 후기·연락처를 모아두는 것이 좋습니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '마사지샵 시술 범위 일탈', href: '/guide/sex-crime/sex-crime-massage-shop-therapist-inappropriate-touch-track' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 10. sex-crime-workplace-after-party-touch-falsely-accused-defense ───
  // 이 페이지는 회사 회식 2차 좁은 공간에서의 신체접촉이 강제추행으로 사실과 다르게 신고된 피의자가 경위·일행 진술·진술 신빙성을 정리하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-workplace-after-party-touch-falsely-accused-defense',
    keyword: '회사 회식 2차 신체접촉 강제추행 무고 방어',
    questionKeyword: '회사 회식 2차에서 좁은 자리에 함께 앉다가 닿은 신체접촉이 강제추행으로 사실과 다르게 신고됐어요. 동석한 동료들의 진술을 어떻게 정리해야 하나요?',
    ctaKeyword: '회식 2차 신체접촉 사실과 다른 신고 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 2차 신체접촉 강제추행 신고 — 5단계 방어 | 로앤가이드',
      description:
        '회사 회식 2차 좁은 공간 신체접촉이 강제추행으로 사실과 다르게 신고됐다면 진술 신빙성·일행 진술 5단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>회사 회식이 끝나고 2차로 옮긴 좁은 가게에서 자리가 부족해 동료와 어깨가 닿거나 일어서고 앉는 과정에서 신체가 스쳤을 뿐인데, 며칠 뒤 강제추행으로 신고됐다는 연락을 받았다면 "추행할 의도가 전혀 없었는데 어떻게 해명해야 하는지", "당시 좁은 자리·동석한 동료 진술을 어떻게 정리해야 하는지" 머릿속이 하얘지실 것입니다. 사실과 다르게 신고되었다면 누구라도 억울하고 막막하실 텐데요. 형법 제298조 강제추행죄는 추행행위와 함께 그에 대한 범의(고의)가 인정되어야 성립하는 것으로 해석되는 영역이고, 형사재판은 합리적 의심을 배제할 정도의 증명을 요구합니다. 대법원은 성폭력 사건에서 피고인이 공소사실을 부인하고 직접증거로 사실상 피해자 진술이 유일한 경우, 그 진술의 신빙성은 주요 부분의 일관성·구체성·논리·경험칙 부합 등을 종합해 신중하게 판단해야 하고 사소한 사항의 일관성 부족만으로 신빙성을 배척해서는 안 된다는 취지로 판시(2024도12324)한 바 있습니다. 사실과 다르게 신고되었다면 ① 사실관계 정리 ② 경위·관계 소명 ③ 객관 증거 확보 ④ 진술 일관성 ⑤ 절차 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 2차 신체접촉 강제추행 신고 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·경위소명·객관증거·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계 정리</strong> — 2차 이동·자리 배치·접촉 시점·동선을 시간순으로 객관적으로 정리.</li>\n<li><strong>② 경위·관계 소명</strong> — 좁은 좌석·이동·일어서기 등 우연한 접촉 정황을 구체적으로 설명.</li>\n<li><strong>③ 객관 증거 확보</strong> — 가게 CCTV·결제·예약 기록, 동석 동료 연락처·진술.</li>\n<li><strong>④ 진술 일관성</strong> — 추행 의도가 없었음과 경위를 일관되게 정리.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사 일정 확인, 진술 전 사실관계 정리·법률구조공단 132 상담.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행은 행위마다 추행행위와 그 범의가 함께 합리적 의심을 배제할 정도로 증명되어야 하는 영역이므로, 자리 배치·동선·동석자 진술 등 객관 자료를 시간순으로 정리해두는 것이 소명에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실관계 정리 (인지 즉시)</strong> — 2차 자리·접촉 시점·동선·결제·이동을 시간순 정리, 추측 배제하고 사실만 기록.</li>\n<li><strong>2단계 — 객관 증거 확보 (가능한 빨리)</strong> — 가게 CCTV·결제·예약 기록, 동석 동료 연락처·단톡 등 정황 자료 수집.</li>\n<li><strong>3단계 — 경위 소명 준비 (조사 전)</strong> — 좁은 좌석·이동 중 우연한 접촉 정황을 구체적으로 설명할 자료 정리.</li>\n<li><strong>4단계 — 조사 대응 (수사 단계)</strong> — 진술의 일관성 유지, 사실과 다른 부분은 차분히 정정.</li>\n<li><strong>5단계 — 절차 진행 (수개월)</strong> — 추가 정황·증거 보강, 필요 시 법률구조공단 132 상담.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 2차 신체접촉 사실과 다른 신고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·소명·증거 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>2차 자리·접촉 시점·동선 시간순 정리표</strong></li>\n<li><strong>가게 CCTV·좌석 배치·예약·결제 기록</strong></li>\n<li><strong>동석 동료·목격자 연락처·진술</strong></li>\n<li><strong>회식 단톡·메시지·이동 동선 기록</strong></li>\n<li><strong>참석자 명단·이동 동선·결제 분담 자료</strong></li>\n<li><strong>수사기관 출석요구서·사건번호</strong></li>\n<li><strong>신고인과의 평소 관계·경위 설명 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실과 다르게 신고되었다면 신고인을 직접 접촉해 회유·압박하는 것은 또 다른 문제가 될 수 있으니 피하고, 동석 동료의 진술과 가게 CCTV·예약 기록을 우선 확보하는 데 집중하는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 범의 여부</strong> — 추행행위에 대한 고의가 증명되는지.</li>\n<li><strong>접촉 경위</strong> — 좁은 좌석·이동 중 우연한 접촉인지 의도적 행위인지.</li>\n<li><strong>객관 정황</strong> — 가게 CCTV·자리 배치·동선의 부합 여부.</li>\n<li><strong>진술 신빙성</strong> — 주요 부분 일관성·구체성·경험칙 부합 여부.</li>\n<li><strong>증명 정도</strong> — 합리적 의심을 배제할 정도로 증명됐는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>국선변호인 제도</strong> (요건 충족 시 법원 선정)</li>\n<li><strong>경찰청 182</strong> (민원·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술 신빙성 판단 기준 평가 영역',
        summary:
          '대법원 2024도12324(대법원, 2024.11.28 선고) 영역에서 법원은 성폭력 사건에서 피고인이 공소사실을 부인하고 직접증거로 사실상 피해자 진술이 유일한 경우, 진술의 신빙성은 주요 부분의 일관성·구체성, 논리·경험칙 부합, 모순 여부, 허위 진술 동기 유무 등을 종합해 신중히 판단해야 하고 사소한 사항의 일관성 부족만으로 신빙성을 배척해서는 안 된다는 취지로 판시했습니다. 회식 2차 신체접촉 사안에서도 진술의 주요 부분 일관성과 객관 정황 부합 여부가 핵심 평가 영역입니다.',
        takeaway: '추행 범의가 합리적 의심 없이 증명되어야 하고 진술 신빙성은 종합 판단됨 — 자리 배치·CCTV·동석자 진술을 시간순으로 정리해 경위를 소명하는 것을 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좁은 자리에서 우연히 닿은 건데 강제추행으로 신고됐어요. 어떻게 대응하나요?',
        answer:
          '<strong>강제추행은 추행행위와 그 범의가 함께 증명되어야 하는 영역입니다.</strong> 접촉 경위·자리 정황을 시간순으로 정리해 소명을 준비해볼 수 있습니다.',
      },
      {
        question: '추행할 의도가 없었다는 걸 어떻게 입증하나요?',
        answer:
          '<strong>의도 자체보다 자리 배치·이동·동선 등 객관 정황이 종합 평가되는 영역입니다.</strong> 정황 자료와 동석자 진술을 함께 모아두는 것이 좋습니다.',
      },
      {
        question: '동석한 동료 진술이 도움이 될까요?',
        answer:
          '<strong>동석자 진술은 자리 배치·동선·접촉 경위 평가에 중요한 보강 자료가 되는 영역입니다.</strong> 단톡·연락처를 빨리 확보.',
      },
      {
        question: '신고한 동료에게 직접 연락해 오해를 풀어도 되나요?',
        answer:
          '<strong>직접 접촉은 회유·압박 문제가 생길 수 있어 신중해야 하는 영역입니다.</strong> 경위 자료를 객관적으로 정리하고 절차 안에서 소명하는 것을 권장합니다.',
      },
      {
        question: '혼자 조사받기 막막한데 도움받을 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률 상담을 받아볼 수 있고 요건 충족 시 국선변호인 제도를 검토할 수 있는 영역입니다.</strong> 진술 전 사실관계 정리를 먼저 권장합니다.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '모임 신체접촉 무고 방어', href: '/guide/sex-crime/sex-crime-social-gathering-contact-false-report-defense' },
      { label: '강제추행 고소당했을 때 대응', href: '/guide/sex-crime/groping-accused-response' },
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '성폭력 무고 방어 절차', href: '/guide/sex-crime/sexual-assault-accusation-defense' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
    ],
  },
];
