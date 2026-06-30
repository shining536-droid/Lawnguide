import { SpokePage } from '../spoke-pages';

// batch113 fraud(6) + sex-crime(4) — 10개 (2026-06-30)
//
// 고유 존재 이유:
// 1. fraud-used-camera-lens-fungus-concealed-resale-track — 일반 중고거래 분쟁과 분기. '렌즈 내부 곰팡이·하자를 숨기고 정상품처럼 되판' 곰팡이 하자 은폐 재판매 기망 편취 판단형 트랙(victim).
// 2. fraud-overseas-purchase-agent-nondelivery-track — 일반 미배송 분쟁과 분기. '해외 구매대행으로 결제만 받고 물품을 보내지 않음' 구매대행 미배송 기망 편취 절차형 트랙(victim).
// 3. fraud-wedding-planner-prepaid-package-nonperformance-track — 일반 환불 분쟁과 분기. '웨딩플래너 패키지를 선결제받고 약속한 서비스를 이행하지 않음' 선결제 패키지 미이행 편취 판단형 트랙(victim).
// 4. fraud-used-luxury-bag-fake-authentication-resale-track — 일반 가품 분쟁과 분기. '가짜 정품인증서로 명품 가방을 정품처럼 되판' 가짜 정품인증 재판매 기망 편취 절차형 트랙(victim).
// 5. fraud-membership-point-cash-exchange-nonpayment-track — 일반 포인트 분쟁과 분기. '멤버십 포인트 현금화를 미끼로 돈만 받고 미지급' 포인트 현금화 미지급 기망 편취 판단형 트랙(victim).
// 6. fraud-pre-ipo-unlisted-stock-investment-falsely-accused-defense — 일반 사기 무고류와 분기. '상장예정 비상장주식 투자 권유가 사기 고의로 고소됨' 편취 고의·고지의무 구별 방어 판단형 트랙(accused).
// 7. sex-crime-pc-room-next-seat-touch-report-track — 일반 추행류와 분기. 'PC방 옆자리에서 신체를 추행' 옆자리 추행 해당성·고의 판단형 트랙(victim).
// 8. sex-crime-club-crowded-dancefloor-touch-report-track — 일반 추행류와 분기. '클럽 혼잡 무대에서 신체를 추행' 혼잡 무대 추행 신고 절차형 트랙(victim).
// 9. sex-crime-festival-crowd-touch-report-track — 일반 추행류와 분기. '축제 인파 속에서 신체를 추행' 공중밀집장소 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-company-dinner-drunk-touch-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 음주 후 접촉이 추행으로 고소' 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch113FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-camera-lens-fungus-concealed-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-camera-lens-fungus-concealed-resale-track',
    keyword: '중고 카메라 렌즈 곰팡이 하자 은폐 판매 기망 사기',
    questionKeyword: '중고 거래로 카메라 렌즈를 사면서 판매자가 ‘렌즈 내부가 깨끗하고 곰팡이·먼지·발삼 분리 같은 하자가 전혀 없다, 상태 최상급이라 시세대로 받는다’고 해서 적지 않은 돈을 주고 샀어요. 그런데 막상 받아 카메라 매장·수리점에서 점검하니 렌즈 안에 곰팡이와 흠집이 있어 화질에 영향을 주고 수리비도 많이 드는 물건이었고, 거래 전 보여준 사진도 하자가 안 보이게 찍은 것이었어요. 판매자에게 따지니 ‘나는 몰랐다, 환불은 안 된다’며 발뺌하다 연락을 피하는데, 처음부터 곰팡이 하자를 알면서 숨기고 정상품처럼 되판 정황이에요. 이런 중고 카메라 렌즈 곰팡이 하자 은폐 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 카메라 렌즈 곰팡이 하자 은폐·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 카메라 렌즈 곰팡이 은폐 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '하자 없다는 말을 믿고 산 중고 렌즈에서 곰팡이가 드러나고 환불도 거부당했다면, 형법 제347조 사기·고지의무 위반 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·카메라 동호회·직거래로 카메라 렌즈를 사면서 판매자에게서 ‘렌즈 내부가 깨끗하고 곰팡이·먼지·발삼 분리·헤이즈 같은 하자가 전혀 없다, 상태 최상급이라 정상 시세대로 받는다’는 말을 믿고, 깨끗한 렌즈를 기대하며 적지 않은 대금을 주고 물건을 받은 분의 상황입니다. 그런데 막상 인수해 카메라 매장·수리점에서 LED·플래시 라이트로 비춰 점검해보니, 겉보기와 달리 렌즈 안쪽에 곰팡이가 퍼져 있거나 코팅 흠집·먼지가 심해 화질·역광에 영향을 주고, 곰팡이 제거·분해 수리에 적지 않은 비용이 드는 물건이었으며, 거래 전 받은 사진마저 하자가 보이지 않는 각도·조명으로만 찍은 것이어서, 깨끗한 렌즈를 산 줄 알았다가 하자 렌즈를 정상 값에 산 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘나도 몰랐다, 거래가 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 비슷하게 곰팡이·하자를 숨기고 여러 사람에게 정상품처럼 되판 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 곰팡이·하자가 있는 사실을 알면서도 ‘하자 없다’고 적극적으로 속이거나, 화질·가치에 영향을 주는 중요한 하자를 알리지 않은 채 정상 시세로 팔았다면 적극적·소극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되는 경우 신의칙상 그 사정을 고지할 의무가 있고, 이를 묵비한 것은 기망에 해당해 사기죄를 구성한다고 본 사례 흐름이 있는 영역으로, 곰팡이 하자 고지의무 위반 여부를 가려 다툴 여지가 있습니다. 곰팡이 은폐 + 사진 가림 + 환불 거부·발뺌 결합은 ‘곰팡이 하자 은폐 재판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 하자·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 카메라 렌즈 곰팡이 하자 은폐 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·하자 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 하자 없음 강조 설명·거래 대화·결제 내역 정리.</li>\n<li><strong>② 하자·기망 입증</strong> — 카메라 매장·수리점 점검 소견·곰팡이·흠집 사진으로 하자를 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정상 시세로 지급한 대금·수리비 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 곰팡이·하자를 알면서 ‘하자 없다’고 속였는지, 화질·가치에 영향을 주는 중요한 하자를 알리지 않았는지가 판단의 분기점입니다. 하자 없음을 강조한 대화와 점검 소견, 같은 판매자의 반복 재판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 하자 없음 강조 설명·거래 대화·결제·택배 내역 캡처 보존.</li>\n<li><strong>2단계 — 하자 입증 (즉시)</strong> — 카메라 매장·수리점 점검 소견서, 곰팡이·흠집 확대 사진·수리 견적 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 카메라 렌즈 곰팡이 하자 은폐 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·하자·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>하자 없음 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>렌즈 대금·배송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>카메라 매장·수리점 점검 소견서·수리 견적</strong></li>\n<li><strong>곰팡이·흠집 확대 사진·거래 전 사진 대비 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 재판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카메라 매장·수리점 점검 소견과 곰팡이를 비춘 확대 사진으로 하자의 정도와 화질 영향을 명확히 하고, 판매자가 ‘하자 없음’을 강조한 대화와 거래 전 사진을 실제 렌즈 상태와 대비하면 은폐 재판매 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 재판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>하자 여부</strong> — 실제로 곰팡이·화질 영향 하자가 있는지.</li>\n<li><strong>고지의무 위반</strong> — 가치에 영향을 주는 하자를 알리지 않았는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 은폐 재판매였는지.</li>\n<li><strong>편취액</strong> — 정상 시세 대금·수리비가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·하자 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반에 의한 부작위 기망과 사기죄의 성립',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 요건으로서의 기망은 재산상 거래관계에서 서로 지켜야 할 신의와 성실의 의무를 저버리는 모든 적극적·소극적 행위를 말하고, 반드시 법률행위의 중요 부분에 관한 허위표시일 필요는 없으며 상대방을 착오에 빠지게 하여 재산적 처분행위를 하도록 하는 판단의 기초가 되는 사실에 관한 것이면 충분하다고 보았습니다. 그리고 거래 상대방이 일정한 사정을 고지받았더라면 그 거래에 임하지 아니하였을 관계가 인정되는 경우에는 재물을 수취하는 자에게 신의성실의 원칙상 그 사정을 사전에 고지할 의무가 있고, 그럼에도 이를 고지하지 않은 것은 사실을 묵비하여 상대방을 기망한 것이 되어 사기죄를 구성한다고 판시했습니다. 곰팡이·하자를 숨기고 정상품처럼 렌즈를 되판 사안을 살펴볼 때에도, 화질·가치에 영향을 주는 하자를 고지할 의무가 있었는데 묵비했는지를 기준으로 기망과 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '곰팡이 은폐 + 사진 가림 + 환불 거부 결합 시 곰팡이 하자 은폐 재판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 몰랐다고 하는데도 사기인가요?',
        answer:
          '<strong>하자를 알면서 숨겼거나 고지의무를 어겼는지가 핵심인 영역입니다.</strong> 하자 없음 강조 대화와 점검 소견을 확보하세요.',
      },
      {
        question: '곰팡이 하자를 어떻게 입증하나요?',
        answer:
          '<strong>카메라 매장·수리점 점검 소견이 핵심 단서인 영역입니다.</strong> 곰팡이 확대 사진과 수리 견적을 함께 확보하세요.',
      },
      {
        question: '사진에는 깨끗해 보였는데 다툴 수 있나요?',
        answer:
          '<strong>하자가 안 보이게 찍은 사진과 실제 상태의 차이가 단서인 영역입니다.</strong> 거래 전 사진과 점검 사진을 대비해 정리하세요.',
      },
      {
        question: '직거래라 현금으로 줬으면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 점검 소견을 정리하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 재판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 카메라 렌즈 직거래 미배송 추적', href: '/guide/fraud/fraud-secondhand-camera-lens-direct-no-delivery-track' },
      { label: '중고 카메라 렌즈 가짜 정품 판매 추적', href: '/guide/fraud/fraud-secondhand-camera-lens-fake-genuine-sale-track' },
      { label: '중고 자전거 가짜 카본 프레임 재판매 추적', href: '/guide/fraud/fraud-used-bicycle-fake-carbon-frame-resale-track' },
      { label: '중고차 침수 사고 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-damage-concealed-track' },
    ],
  },

  // ─── 2. fraud-overseas-purchase-agent-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-purchase-agent-nondelivery-track',
    keyword: '해외 구매대행 물품 미배송 기망 사기',
    questionKeyword: '해외 구매대행 업체·판매자가 ‘해외 정품을 싸게 대신 구매해 보내준다, 보통 2~3주면 도착한다’고 해서 물품 대금과 수수료를 한 번에 결제했는데, 결제 후로는 배송이 계속 지연되더니 송장 번호도 가짜이거나 조회가 안 됐어요. 환불을 요구하니 ‘통관이 지연된다, 곧 발송한다’며 미루다 결국 연락을 끊고 잠적했어요. 알고 보니 처음부터 물건을 보낼 의사나 능력 없이 구매대행을 가장해 결제만 받은 정황이고 다른 구매자도 같이 못 받았는데, 이런 해외 구매대행 물품 미배송 기망을 사기로 신고하고 결제한 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '해외 구매대행 미배송 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 구매대행 미배송 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '해외 구매대행이라며 결제만 받고 물건을 보내지 않은 채 잠적했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 구매대행 업체·SNS 셀러·오픈채팅 판매자에게서 ‘해외 매장·직구 사이트에서 정품을 대신 구매해 보내준다, 국내가보다 훨씬 싸고 보통 2~3주면 받는다, 통관도 다 처리해준다’는 말을 믿고, 갖고 싶던 물건을 싸게 산다는 생각으로 물품 대금과 구매대행 수수료를 한 번에 결제한 분의 상황입니다. 그런데 결제하고 나서는 ‘현지 재고 확인 중이다, 항공편이 밀렸다, 통관이 지연된다’며 배송이 계속 미뤄지고, 어렵게 받은 송장 번호마저 가짜이거나 조회되지 않거나 다른 물건의 것이어서, 물건은 끝내 오지 않고 돈만 묶이게 되어 막막하실 거예요. 환불을 요구하니 ‘곧 발송한다, 환불 처리 중이다’라며 차일피일 미루다, 결국 연락처·계정을 닫고 잠적해, 같은 시기에 결제한 다른 구매자들도 똑같이 물건을 못 받고 환불을 거부당했다면 단순 배송 지연이 아닐 수 있어 더 답답하셨을 거예요. 알고 보니 처음부터 물건을 구매·발송할 의사나 능력 없이 구매대행을 가장해 결제만 받은 정황이면 단순 거래 사고로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 물건을 보낼 의사·능력 없이 정상 구매대행처럼 가장해 결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산 침해가 되어 곧 사기죄가 성립하고, 대가가 일부 지급되거나 담보가 제공되었더라도 편취액은 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 결제 당시의 이행 의사·능력을 가려 다툴 여지가 있습니다. 발송 의사·능력 결여 + 가짜 송장·지연 + 미배송·잠적 결합은 ‘구매대행 미배송 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미배송·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 구매대행 물품 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미배송·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 구매대행 약속·배송 안내·결제 내역 정리.</li>\n<li><strong>② 미배송·기망</strong> — 가짜 송장·미배송·발송 의사 결여 여부 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 물품 대금·수수료 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 물건을 보낼 의사·능력 없이 구매대행을 가장해 결제를 받았는지가 판단의 분기점입니다. 배송 약속 대화와 가짜 송장·잠적 정황, 다른 구매자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 구매대행 약속·배송 안내·결제·송장 안내 캡처 보존.</li>\n<li><strong>2단계 — 미배송·가짜 송장 입증 (즉시)</strong> — 송장 조회 불가·미배송·발송 지연·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 구매대행 물품 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>구매대행 약속·배송 안내 캡처 (거래 조건)</strong></li>\n<li><strong>주문 내역·합의 내용·상품 정보 (계약 내용)</strong></li>\n<li><strong>물품 대금·수수료 결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>송장 번호·조회 불가·가짜 송장 자료</strong></li>\n<li><strong>배송 지연·미배송·환불 거부 대화 기록</strong></li>\n<li><strong>판매자·업체·계정·계좌 정보</strong></li>\n<li><strong>다른 구매자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 송장 번호가 실제 조회되는지, 다른 물건·과거 송장인지 캡처로 확인해두고, 결제 시점과 배송 지연·잠적 시점의 흐름을 정리하면 발송 의사 없이 결제만 받았는지를 다투는 데 도움이 됩니다. 카드 결제였다면 항변권 행사 시한을 챙기고, 같은 시기 결제한 다른 구매자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>발송 의사·능력</strong> — 결제 당시 실제 구매·발송할 의사·능력이 있었는지.</li>\n<li><strong>가짜 송장</strong> — 송장이 조회되지 않거나 다른 물건의 것인지.</li>\n<li><strong>편취 범의</strong> — 단순 배송 지연인지 처음부터 결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 물품 대금·수수료 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (해외 구매대행·미배송 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금원 편취 사기에서 편취액과 재산 침해의 성립',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로써 피해자의 재산 침해가 되어 곧 사기죄가 성립하고, 상당한 대가가 지급되었거나 피해자의 전체 재산상 손해가 없더라도 사기죄의 성립에는 영향이 없다고 보았습니다. 따라서 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부받은 금원에서 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 보아야 한다고 판시했습니다. 또 기망행위와 재산상 처분 사이의 인과관계는 거래의 내용과 경위, 처분 결정의 근거가 된 사정 등을 종합해 판단해야 한다고 보았습니다. 구매대행을 가장해 물품 대금과 수수료를 받고 물건을 보내지 않은 사안을 살펴볼 때에도, 일부 환불·부분 이행이 있었더라도 교부한 금원 전부를 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '발송 의사·능력 결여 + 가짜 송장·지연 + 미배송·잠적 결합 시 구매대행 미배송 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 통관·배송이 지연된 것 아닌가요?',
        answer:
          '<strong>결제 당시 발송할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 가짜 송장·미배송·잠적 정황을 확보하세요.',
      },
      {
        question: '송장 번호를 받았는데도 사기인가요?',
        answer:
          '<strong>송장이 조회되지 않거나 다른 물건의 것이면 단서가 되는 영역입니다.</strong> 송장 조회 화면을 캡처로 보존하세요.',
      },
      {
        question: '카드로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 항변권으로 결제를 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '해외 셀러라 신원을 모르는데 신고되나요?',
        answer:
          '<strong>국내 결제·계좌·계정 정보로도 신고를 검토할 수 있는 영역입니다.</strong> 송금·결제·연락 자료를 정리해 접수하세요.',
      },
      {
        question: '다른 구매자도 같이 못 받은 것 같아요.',
        answer:
          '<strong>다수 구매자의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·결제 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외 구매대행 미배송 추적', href: '/guide/fraud/fraud-overseas-purchase-agent-track' },
      { label: '해외 구매대행 코인 결제 잠적 추적', href: '/guide/fraud/fraud-overseas-agent-crypto-payment-vanish-track' },
      { label: '해외 구매대행 이중청구 잠적 추적', href: '/guide/fraud/fraud-overseas-buying-agent-double-billing-disappear-track' },
      { label: '해외 직구 노쇼 미배송 추적', href: '/guide/fraud/fraud-overseas-direct-purchase-noshow-track' },
    ],
  },

  // ─── 3. fraud-wedding-planner-prepaid-package-nonperformance-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-planner-prepaid-package-nonperformance-track',
    keyword: '웨딩플래너 선결제 패키지 미이행 기망 사기',
    questionKeyword: '결혼 준비를 하면서 웨딩플래너·웨딩업체가 ‘스드메·예식·신혼여행까지 묶은 패키지를 지금 선결제하면 크게 할인된다, 다 책임지고 진행해준다’고 해서 적지 않은 돈을 한 번에 선결제했는데, 정작 약속한 업체 예약·일정 진행이 안 되거나 계약과 다른 저가 서비스로 바뀌었어요. 환불·이행을 요구하니 ‘제휴 업체 사정이다, 곧 처리한다’며 미루다 결국 연락을 끊고 잠적했어요. 알고 보니 처음부터 패키지를 정상 이행할 의사나 능력 없이 선결제만 챙긴 정황이고 다른 예비부부도 같이 당했는데, 이런 웨딩플래너 선결제 패키지 미이행 기망을 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '웨딩플래너 선결제 패키지 미이행·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '웨딩플래너 선결제 미이행 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '할인을 미끼로 웨딩 패키지를 선결제했는데 약속한 서비스가 이행되지 않고 잠적당했다면, 형법 제347조 사기·편취 고의 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「결혼을 준비하면서 웨딩플래너·웨딩업체에게서 ‘스튜디오·드레스·메이크업은 물론 예식장·신혼여행까지 한 번에 묶은 패키지를 지금 선결제하면 따로따로 계약하는 것보다 훨씬 싸다, 제휴 업체 예약과 일정 조율을 다 책임지고 진행해준다’는 말을 믿고, 바쁜 준비 과정을 한 번에 맡긴다는 생각으로 적지 않은 금액을 한꺼번에 선결제한 분의 상황입니다. 그런데 정작 약속한 스튜디오·드레스·예식장 예약이 잡히지 않거나, 계약서에 적힌 것과 다른 저가 업체·축소된 서비스로 슬그머니 바뀌고, 일정이 임박해도 진행이 되지 않아 결혼 준비 전체가 흔들리게 되어 막막하실 거예요. 환불·정상 이행을 요구하니 ‘제휴 업체 사정 때문이다, 곧 처리해주겠다, 일부는 환불해주겠다’며 차일피일 미루다, 끝내 연락처·사무실을 닫고 잠적해, 같은 시기에 계약한 다른 예비부부들도 똑같이 서비스를 못 받고 환불을 거부당했다면 단순 업체 사정이 아닐 수 있어 더 답답하셨을 거예요. 알고 보니 처음부터 패키지를 정상 이행할 의사나 능력 없이 선결제만 집중적으로 받은 정황이면 단순 계약 분쟁으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 패키지를 정상 이행할 의사·능력 없이 책임지고 진행해줄 것처럼 가장해 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 용역·대가 편취형 사기에서 기망으로 대금을 교부받았다면 그 자체로 사기죄가 성립하고, 다른 죄와는 보호법익·구성요건이 달라 별개로 성립할 수 있다고 본 사례 흐름이 있는 영역으로, 선결제 받을 당시의 이행 의사·능력을 가려 다툴 여지가 있습니다. 이행 의사·능력 결여 + 패키지 미이행·축소 + 환불 거부·잠적 결합은 ‘선결제 패키지 미이행 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미이행·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 웨딩플래너 선결제 패키지 미이행 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미이행·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 패키지 약속·할인 안내·선결제 내역 정리.</li>\n<li><strong>② 미이행·기망</strong> — 약속한 업체 예약·서비스가 이행됐는지, 이행 의사가 있었는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 이행되지 않은 패키지 선결제액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 업체 사정과 달리, 패키지를 정상 이행할 의사·능력 없이 책임지고 진행해줄 것처럼 가장해 선결제를 받았는지가 판단의 분기점입니다. 패키지를 약속한 계약·대화와 미이행·잠적 정황, 다른 예비부부의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 패키지 약속·할인 안내·계약서·선결제 영수증·카드 내역 보존.</li>\n<li><strong>2단계 — 미이행·잠적 입증 (즉시)</strong> — 예약 누락·서비스 축소·환불 거부·잠적 정황과 일정 흐름을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 잔여 금액 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">웨딩플래너 선결제 패키지 미이행 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미이행·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>패키지 약속·할인 안내 캡처 (거래 조건)</strong></li>\n<li><strong>웨딩 계약서·견적·제휴 업체 목록 (계약 내용)</strong></li>\n<li><strong>선결제 영수증·카드 할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>이행된 서비스·누락 항목 확인 자료 (손해 산정)</strong></li>\n<li><strong>예약 누락·서비스 축소·환불 거부 기록</strong></li>\n<li><strong>플래너·업체·사업자·계좌 정보</strong></li>\n<li><strong>다른 예비부부의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약서에 적힌 패키지 구성과 실제 진행된 서비스를 항목별로 대비하고, 선결제 시점과 미이행·잠적 시점의 흐름을 정리하면 이행 의사 없이 선결제만 받았는지를 다투는 데 도움이 됩니다. 카드 결제였다면 항변권 행사 시한을 챙기고, 같은 시기에 계약한 다른 예비부부를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이행 의사·능력</strong> — 선결제 당시 패키지를 이행할 의사·능력이 있었는지.</li>\n<li><strong>책임 진행 가장</strong> — 다 책임지고 진행한다고 가장했는지.</li>\n<li><strong>편취 범의</strong> — 단순 업체 사정인지 처음부터 선결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 이행되지 않은 패키지 선결제액이 피해액인지.</li>\n<li><strong>책임 주체</strong> — 플래너·업체·제휴사 중 책임 주체가 누구인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·웨딩 서비스 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 할부 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 용역 대금 편취 사기의 성립과 죄수 관계',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 위탁기관으로부터 의뢰받은 대로 업무를 진행하지 않았음에도 관련 비용을 계속 청구·수령해 대금을 편취한 사안에서, 위탁기관을 기망해 대금을 교부받은 사기죄와 위계로써 그 업무를 방해한 업무방해죄는 보호법익·구성요건적 행위의 양태·기수 시기가 서로 달라 별개로 성립한다고 보았습니다. 또 어느 한 죄의 불법과 책임의 내용이 다른 죄의 불법과 책임을 모두 포함한다고 보기 어려워 불가벌적 수반행위로 흡수되지 않고, 법률상 1개의 행위로 평가되는 경우가 아니어서 상상적 경합이 아니라 실체적 경합관계로 봄이 타당하다고 판시했습니다. 약속한 패키지 서비스를 진행하지 않으면서 선결제 대금을 받은 사안을 살펴볼 때에도, 의뢰받은 대로 이행하지 않으면서 대가를 받았다면 기망에 의한 대금 편취가 성립하는지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '이행 의사·능력 결여 + 패키지 미이행·축소 + 환불 거부·잠적 결합 시 선결제 패키지 미이행 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '제휴 업체 사정 때문이라는데 사기인가요?',
        answer:
          '<strong>선결제 당시 이행할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 패키지 약속과 미이행·잠적 정황을 확보하세요.',
      },
      {
        question: '일부 서비스는 진행됐는데도 사기인가요?',
        answer:
          '<strong>이행되지 않은 부분을 기준으로 편취를 다투는 영역입니다.</strong> 계약 구성과 실제 진행 내역을 대비하세요.',
      },
      {
        question: '카드 할부로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 할부 항변권으로 잔여 대금을 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '계약서와 다른 저가 서비스로 바뀌었어요.',
        answer:
          '<strong>계약과 다른 이행은 기망·편취 다툼의 단서인 영역입니다.</strong> 계약서와 실제 서비스 차이를 정리하세요.',
      },
      {
        question: '다른 예비부부도 같이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·계약 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '웨딩홀 패키지 이중계약 추적', href: '/guide/fraud/fraud-wedding-hall-package-double-contract-track' },
      { label: '웨딩홀 패키지 허위 견적 추적', href: '/guide/fraud/fraud-wedding-hall-package-false-estimate-track' },
      { label: '웨딩홀 선결제 취소 환불거부 추적', href: '/guide/fraud/fraud-wedding-hall-prepaid-cancellation-no-refund-track' },
      { label: '성형 패키지 선결제 폐업 추적', href: '/guide/fraud/fraud-cosmetic-surgery-package-prepay-closure-track' },
    ],
  },

  // ─── 4. fraud-used-luxury-bag-fake-authentication-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-luxury-bag-fake-authentication-resale-track',
    keyword: '중고 명품 가방 가짜 정품인증 판매 기망 사기',
    questionKeyword: '중고 거래로 명품 가방을 사면서 판매자가 ‘정품 보증서·정품인증서가 있는 진품이다, 백화점 구매 영수증도 있다’며 인증서 사진을 보여줘 믿고 정품 시세에 맞춰 적지 않은 돈을 주고 샀어요. 그런데 받아서 명품 감정원·매장에 감정을 맡기니 가품이었고, 보여준 정품인증서·영수증도 위조이거나 다른 제품의 것이었어요. 판매자에게 따지니 ‘진품이 맞다, 환불은 안 된다’며 발뺌하다 연락을 끊었는데, 처음부터 가짜 정품인증서로 가품을 진품처럼 둔갑시켜 판 정황이고 다른 구매자도 같이 당했어요. 이런 중고 명품 가방 가짜 정품인증 판매 기망을 사기로 신고하고 보낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 명품 가방 가짜 정품인증 판매 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 가방 가짜 정품인증 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '정품인증서를 믿고 산 중고 명품 가방이 가품으로 드러나고 환불도 거부당했다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·명품 카페·직거래로 명품 가방을 사면서 판매자에게서 ‘정품 보증서·정품인증서가 있는 진품이고, 백화점 구매 영수증·보증카드까지 다 있다, 믿고 사도 된다’는 말과 함께 인증서·영수증 사진을 보여줘, 진품을 시세보다 합리적으로 산다는 믿음으로 정품 시세에 맞춰 적지 않은 대금을 주고 가방을 받은 분의 상황입니다. 그런데 막상 받아 명품 감정원·브랜드 매장·전문 감정가에게 감정을 맡겨보니, 박음질·각인·시리얼·소재가 정품과 달라 가품으로 판정됐고, 거래 전 보여준 정품인증서·영수증·보증카드마저 위조됐거나 다른 제품의 것이어서, 진품을 산 줄 알았다가 가짜를 정품 값에 산 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘분명 진품이 맞다, 거래가 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 위조 인증서로 여러 가품을 진품처럼 둔갑시켜 다른 구매자들에게도 비슷하게 판 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품인 사실을 알면서도 위조 정품인증서·영수증으로 진품이라고 속여 정품 시세를 받았다면 적극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 전기통신금융사기·재산범죄 관련 처벌 규정의 의미와 적용 범위를 엄격히 해석하면서도, 기망으로 재물을 교부받았다면 사기죄가 성립한다는 기본 법리를 전제로 본 사례 흐름이 있는 영역으로, 위조 인증서를 이용한 기망과 편취를 가려 다툴 여지가 있습니다. 가품 + 위조 정품인증서·영수증 + 환불 거부·발뺌 결합은 ‘가짜 정품인증 재판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·위조 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 가방 가짜 정품인증 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 진품 강조 설명·정품인증서 제시·결제 내역 정리.</li>\n<li><strong>② 가품·위조 입증</strong> — 명품 감정원·매장 감정서로 가품·인증서 위조를 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정품 시세로 지급한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 가품인 사실을 알면서 위조 정품인증서로 진품이라 속여 정품 값을 받았는지가 판단의 분기점입니다. 진품·인증서를 강조한 대화와 감정서, 같은 판매자의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 진품 강조 설명·정품인증서·영수증·거래 대화·결제 내역 보존.</li>\n<li><strong>2단계 — 가품·위조 입증 (즉시)</strong> — 명품 감정원·매장 감정서, 인증서·영수증 위조·불일치 자료 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 가방 가짜 정품인증 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>진품·정품인증 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>가방 대금·배송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>명품 감정원·매장 감정서·감정 결과</strong></li>\n<li><strong>제시받은 정품인증서·영수증 위조·불일치 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 거부 대화·다른 구매자 피해 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명품 감정원·브랜드 매장 감정서로 가품 여부를 명확히 하고, 판매자가 보여준 정품인증서·영수증의 시리얼·발행처를 실제와 대비하면 위조 인증을 이용한 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 구매자에게도 비슷한 인증서로 판 흔적을 함께 모으면 반복 판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 여부</strong> — 실제로 가품인지 감정으로 확인되는지.</li>\n<li><strong>인증서 위조</strong> — 정품인증서·영수증이 위조·타제품의 것인지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 위조 판매였는지.</li>\n<li><strong>편취액</strong> — 정품 시세 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·가품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산범죄 처벌 규정의 해석과 기망에 의한 재물 취득',
        summary:
          '대법원 2024도7516(대법원, 2024.09.27 선고) 영역에서 법원은 전기통신금융사기 피해 방지 관련 처벌 규정의 개정 전후 의미를 살피면서, 개정으로 처벌 대상 행위의 범위와 법정형이 정비되었더라도 기존 행위가 더 이상 범죄를 구성하지 않게 되어 형이 폐지된 것은 아니라고 보아, 재산범죄 처벌 규정의 적용 범위를 문언과 입법 취지에 따라 신중히 해석해야 한다고 판단했습니다. 이러한 판단의 전제에는 타인을 기망해 재산상 이익을 취득하는 행위를 엄정히 규율한다는 재산범죄의 기본 법리가 깔려 있습니다. 위조 정품인증서로 가품을 진품처럼 속여 정품 시세를 받은 사안을 살펴볼 때에도, 기망으로 인해 대금이 교부되었는지와 위조 인증서가 그 기망에 이용되었는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '가품 + 위조 정품인증서·영수증 + 환불 거부 결합 시 가짜 정품인증 재판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '가품이라는 걸 어떻게 확인하나요?',
        answer:
          '<strong>명품 감정원·매장 감정서가 핵심 단서인 영역입니다.</strong> 박음질·시리얼 불일치 등 감정 결과를 확보하세요.',
      },
      {
        question: '정품인증서를 받았는데도 사기인가요?',
        answer:
          '<strong>인증서가 위조·타제품의 것이면 기망의 단서인 영역입니다.</strong> 인증서 발행처·시리얼을 대조하세요.',
      },
      {
        question: '판매자도 진품인 줄 알았다는데 사기인가요?',
        answer:
          '<strong>가품을 알면서 위조 인증서로 속였는지가 핵심인 영역입니다.</strong> 진품 강조 대화를 정리하세요.',
      },
      {
        question: '직거래라 현금으로 줬으면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래·감정 자료를 정리하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 자전거 가짜 카본 프레임 재판매 추적', href: '/guide/fraud/fraud-used-bicycle-fake-carbon-frame-resale-track' },
      { label: '중고 골프채 가짜 브랜드 재판매 추적', href: '/guide/fraud/fraud-used-golf-club-fake-brand-resale-track' },
      { label: '가짜 명품 정품 판매 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '명품 가방 가품 판매 추적', href: '/guide/fraud/fraud-luxury-bag-counterfeit-track' },
    ],
  },

  // ─── 5. fraud-membership-point-cash-exchange-nonpayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-point-cash-exchange-nonpayment-track',
    keyword: '멤버십 포인트 현금화 미지급 기망 사기',
    questionKeyword: '온라인에서 ‘멤버십 포인트·적립금·기프트 포인트를 시세보다 좋은 조건으로 현금으로 바꿔준다, 먼저 포인트를 넘기면 바로 입금해준다’는 사람을 만나, 안내대로 포인트·기프트 코드를 먼저 넘겼는데 약속한 현금이 들어오지 않았어요. 입금을 독촉하니 ‘처리 중이다, 한도가 걸렸다’며 미루다 결국 연락을 끊고 잠적했어요. 알고 보니 처음부터 현금을 줄 의사 없이 포인트만 받아 챙긴 정황이고 다른 사람도 같이 당했는데, 이런 멤버십 포인트 현금화 미지급 기망을 사기로 신고하고 손해를 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '멤버십 포인트 현금화 미지급·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '멤버십 포인트 현금화 미지급 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '포인트를 먼저 넘기면 현금을 준다는 말을 믿었는데 입금이 없고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 커뮤니티·중고 거래·오픈채팅에서 ‘멤버십 포인트·적립금·기프트 포인트·상품권 포인트를 시세보다 좋은 조건으로 현금으로 바꿔준다, 절차가 간단하니 먼저 포인트·코드를 넘겨주면 곧바로 계좌로 입금해주겠다’는 사람을 만나, 안 쓰는 포인트를 현금으로 바꾼다는 생각으로 안내대로 포인트·기프트 코드·전환 정보를 먼저 넘긴 분의 상황입니다. 그런데 포인트를 넘기고 나서는 약속한 현금이 들어오지 않고, 입금을 독촉하니 ‘지금 처리 중이다, 시스템 점검이다, 일일 한도가 걸려 내일 보내준다’며 그럴듯한 이유로 차일피일 미루다, 정작 포인트·코드는 이미 사용·이전되어 회수할 수 없게 되어 막막하실 거예요. 결국 상대가 연락처·계정을 닫고 잠적해, 같은 방식으로 포인트를 넘긴 다른 사람들도 똑같이 현금을 못 받았다면 단순 지급 지연이 아닐 수 있어 더 답답하셨을 거예요. 알고 보니 처음부터 현금을 지급할 의사 없이 포인트·코드만 받아 챙길 작정으로 현금화를 가장한 정황이면 단순 거래 사고로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 현금을 지급할 의사 없이 현금화를 가장해 포인트·코드를 먼저 받아 챙겼다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재산적 가치가 있어 거래상 중요한 기능을 하는 문서·재산상 이익을 기망으로 교부받으면 그 소지인에 대한 관계에서 사기죄가 성립할 수 있다고 본 사례 흐름이 있는 영역으로, 포인트·코드의 재물·재산상 이익성과 기망을 가려 다툴 여지가 있습니다. 현금 지급 의사 결여 + 포인트 선이전 + 미지급·잠적 결합은 ‘포인트 현금화 미지급 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·이전 정리 ② 미지급·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 멤버십 포인트 현금화 미지급 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미지급·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·이전 정리</strong> — 현금화 약속·전환 조건·포인트·코드 이전 내역 정리.</li>\n<li><strong>② 미지급·기망</strong> — 현금 지급 의사·능력이 있었는지, 포인트만 받아 챙겼는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 넘긴 포인트·코드의 환산 가치 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금받았던 계좌·코드 사용처 추적·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 지급 지연과 달리, 현금을 줄 의사 없이 현금화를 가장해 포인트·코드를 먼저 받아 챙겼는지가 판단의 분기점입니다. 현금화를 약속한 대화와 포인트 이전·미지급·잠적 정황, 다른 피해자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·이전 자료 보존 (즉시)</strong> — 현금화 약속·전환 조건·포인트·코드 이전 화면·대화 캡처 보존.</li>\n<li><strong>2단계 — 미지급·잠적 입증 (즉시)</strong> — 입금 누락·독촉 대화·연락 두절·코드 사용 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·추적 요구 (병행)</strong> — 상대 계좌가 확인되면 지급정지를 112·은행에 요청하고 코드 사용처 정지·회수를 문의.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">멤버십 포인트 현금화 미지급 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미지급·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>현금화 약속·전환 조건 캡처 (거래 조건)</strong></li>\n<li><strong>거래 합의·전환율·입금 약속 (계약 내용)</strong></li>\n<li><strong>포인트·기프트 코드 이전 내역·캡처 (피해 규모)</strong></li>\n<li><strong>넘긴 포인트·코드의 환산 가치 자료 (손해 산정)</strong></li>\n<li><strong>입금 독촉·미지급·잠적 대화 기록</strong></li>\n<li><strong>상대 닉네임·연락처·계좌·코드 사용처 정보</strong></li>\n<li><strong>다른 피해자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 포인트·코드를 넘긴 시점과 입금이 약속된 시점, 실제 미지급·잠적 시점을 시간순으로 정리하면 현금 지급 의사 없이 포인트만 받아 챙겼는지를 다투는 데 도움이 됩니다. 코드가 이미 사용·이전됐다면 사용처·사용 시각을 확보하고, 같은 방식으로 당한 다른 피해자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>현금 지급 의사</strong> — 포인트를 받을 당시 현금을 줄 의사·능력이 있었는지.</li>\n<li><strong>재물·이익성</strong> — 넘긴 포인트·코드가 재산상 이익에 해당하는지.</li>\n<li><strong>편취 범의</strong> — 단순 지급 지연인지 처음부터 포인트만 노렸는지.</li>\n<li><strong>편취액</strong> — 넘긴 포인트·코드의 환산 가치가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 닉네임·계좌·코드 사용처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·포인트 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산적 가치 있는 객체를 기망으로 교부받은 사기죄의 성립',
        summary:
          '대법원 2011도9919(대법원, 2011.11.10 선고) 영역에서 법원은 거래상 중요한 기능을 가지고 개인의 권리·의무에 관계되는 일에 사용되어 재산적 가치가 인정되는 객체는 형법상 재물에 해당하고, 그 안에 재물·재산상 이익의 처분에 관한 사항이 포함되어 있지 않더라도 달리 볼 것이 아니라고 보았습니다. 따라서 그러한 용도로 발급되어 소지인에게 재산적 가치가 있는 것으로 인정되는 객체를 그 소지인을 기망하여 교부받았다면, 그 소지인에 대한 관계에서 사기죄가 성립한다고 판시했습니다. 또 기망으로 그 객체를 교부받은 이상 편취의 고의도 인정될 수 있다고 보았습니다. 현금화를 가장해 재산적 가치가 있는 포인트·코드를 먼저 교부받고 약속한 현금을 지급하지 않은 사안을 살펴볼 때에도, 그 객체가 재산상 이익에 해당하는지와 기망으로 교부받았는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '현금 지급 의사 결여 + 포인트 선이전 + 미지급·잠적 결합 시 포인트 현금화 미지급 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '포인트만 넘긴 건데 사기가 되나요?',
        answer:
          '<strong>재산적 가치가 있는 포인트·코드를 기망으로 받았는지가 핵심인 영역입니다.</strong> 이전 내역과 약속 대화를 정리하세요.',
      },
      {
        question: '상대가 처리 중이라며 미루는데 사기인가요?',
        answer:
          '<strong>현금 지급 의사 없이 미룬 것인지가 판단의 단서인 영역입니다.</strong> 독촉·미지급·잠적 정황을 확보하세요.',
      },
      {
        question: '코드가 이미 사용됐는데 회수되나요?',
        answer:
          '<strong>사용처·사용 시각 확보로 정지·회수를 문의할 수 있는 영역입니다.</strong> 코드 발행처에 즉시 사용 정지를 문의하세요.',
      },
      {
        question: '계좌이체가 아니라 코드라 신고가 되나요?',
        answer:
          '<strong>현금이 아니어도 재산상 이익 편취로 신고를 검토할 수 있는 영역입니다.</strong> 환산 가치와 거래 자료를 정리하세요.',
      },
      {
        question: '다른 사람도 같이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·이전 시점·미지급 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '코인 거래소 출금 차단 추적', href: '/guide/fraud/fraud-coin-exchange-withdrawal-blocked' },
      { label: '코인 거래소 가짜 출금 차단 추적', href: '/guide/fraud/fraud-crypto-exchange-fake-withdrawal-block-track' },
      { label: '코인 거래소 출금 차단 먹튀 추적', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-block-exit-track' },
      { label: '헬스장 폐업 회원권 환불 추적', href: '/guide/fraud/fraud-gym-closure-membership-refund' },
    ],
  },

  // ─── 6. fraud-pre-ipo-unlisted-stock-investment-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-pre-ipo-unlisted-stock-investment-falsely-accused-defense',
    keyword: '상장예정 비상장주식 투자 권유 사기 고의 무고 방어',
    questionKeyword: '지인·투자 모임에 ‘곧 상장 예정인 비상장주식이 있다, 상장하면 큰 수익이 난다’며 비상장주식 투자를 소개·권유했고 몇 명이 투자했는데, 이후 상장이 미뤄지거나 주가가 떨어지자 일부 투자자가 ‘처음부터 상장 안 될 걸 알면서 속여 투자금을 가로챘다, 사기다’라며 저를 고소했어요. 저는 받은 정보와 회사 자료를 근거로 권유했고 저도 같이 투자했으며 투자금을 가로챌 생각은 전혀 없었는데, 손실이 났다는 이유만으로 사기 고의로 몰려 너무 억울해요. 권유 당시 자료·대화도 있는데, 이렇게 상장예정 비상장주식 투자 권유가 사기로 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '상장예정 비상장주식 투자 권유 편취 고의·고지의무 구별 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '비상장주식 투자 권유 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '상장예정 비상장주식 투자를 권했다가 손실 뒤 사기로 고소돼 억울하다면, 형법 제347조 편취 고의 판단 시점과 투자손실·채무불이행 구별 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·투자 모임·소개를 통해 ‘곧 상장이 예정된 유망한 비상장주식이 있다, 상장만 되면 큰 차익이 난다’는 정보를 듣고, 받은 회사 자료·상장 추진 정황을 근거로 주변에 투자를 소개·권유했고 본인도 함께 투자했는데, 이후 상장이 지연·무산되거나 주가가 하락해 손실이 나자, 일부 투자자가 ‘너는 처음부터 상장이 안 될 것을 알면서 속여 투자금을 가로챌 작정이었다, 이건 명백한 사기다’라며 고소해, 한순간에 투자 사기범으로 몰린 분의 상황입니다. 저는 권유 당시 알고 있던 정보와 자료를 사실대로 전했고, 투자 손실 위험도 함께 이야기했으며, 본인도 같은 종목에 투자해 손실을 본 처지여서 투자금을 가로챌 의도는 전혀 없었다고 생각하는데, 투자 결과가 나빠졌다는 사정만으로 정상적인 투자 권유가 형사 사기로 비화되어 너무 억울하고 막막하실 거예요. 비상장주식은 가치 평가와 상장 가능성에 불확실성이 커 ‘처음부터 속였다’는 일방적 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 권유 당시 전달한 정보의 출처와 내용, 본인의 투자·손실 내역, 자금의 흐름을 차분히 정리해 편취 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 편취의 고의가 인정되어야 하고, 그 판단은 행위 당시를 기준으로 하는 영역입니다. 판례는 사기죄의 기망에는 신의칙상 고지의무 위반에 의한 부작위도 포함될 수 있으나, 편취의 고의는 자백이 없는 한 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 하고, 단순한 투자 손실·채무불이행 사실만으로 곧바로 편취 고의를 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 권유 당시 전달한 정보의 진실성과 상장 가능성 인식, 자금 흐름을 종합해 편취 고의가 있었는지를 가려 다툴 여지가 있는 영역입니다. 정상 권유 정황 + 본인 투자·손실 + 정보 출처 자료 결합은 ‘편취 고의 부재·투자손실 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 권유 경위 정리 ② 정보 출처·자료 ③ 기망·고지 여부 ④ 편취 고의 ⑤ 투자손실·채무불이행 구별 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상장예정 비상장주식 투자 권유 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·정보 출처·기망 여부·편취 고의·투자손실 구별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유 경위 정리</strong> — 권유 시점·대상·전달 내용·위험 고지 정리.</li>\n<li><strong>② 정보 출처·자료</strong> — 상장 추진 정황·회사 자료의 출처와 진실성 정리.</li>\n<li><strong>③ 기망·고지 여부</strong> — 허위 정보를 단정했는지, 위험을 고지했는지 검토.</li>\n<li><strong>④ 편취 고의</strong> — 행위 당시 기준으로 편취의 범의가 인정되는지 검토.</li>\n<li><strong>⑤ 투자손실·채무불이행 구별</strong> — 손실·정산 다툼이 민사 분쟁에 그치는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 상장이 안 될 것을 알면서 투자금을 가로챌 의사로 속였는지(편취 고의), 아니면 받은 정보로 권유했고 본인도 투자해 손실을 본 것인지(투자 손실·채무불이행)가 판단의 분기점입니다. 권유 경위와 정보 출처, 본인의 투자·자금 흐름을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유·자금 자료 보존 (즉시)</strong> — 권유 대화·전달 자료·본인 투자·자금 흐름을 시간순으로 보존.</li>\n<li><strong>2단계 — 정보 출처·고지 정리 (즉시)</strong> — 상장 추진 정황·회사 자료의 출처와 위험 고지 정황을 정리.</li>\n<li><strong>3단계 — 편취 고의·손실 구별 검토 (병행)</strong> — 본인 투자·손실과 정보의 진실성, 기망 부재를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 투자손실·채무불이행 구별·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상장예정 비상장주식 투자 권유 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정보 출처·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유 대화·자료 전달 기록 (권유 경위)</strong></li>\n<li><strong>상장 추진 정황·회사 IR·공시 자료 (정보 출처)</strong></li>\n<li><strong>본인 투자·매수·손실 내역 (편취 고의 반증)</strong></li>\n<li><strong>위험 고지·손실 가능성 안내 기록 (고지 여부)</strong></li>\n<li><strong>투자금 입출금·자금 흐름 내역 (자금 흐름)</strong></li>\n<li><strong>공동 투자자·관계자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 권유 당시 전달한 정보의 출처와 본인도 같은 종목에 투자해 손실을 본 내역을 정리하면 처음부터 가로챌 의사였는지, 받은 정보로 권유한 것인지를 다투는 데 도움이 됩니다. 위험·손실 가능성을 함께 고지한 정황과 투자금이 본인에게 귀속되지 않고 종목 매수에 쓰인 흐름을 모아 투자 손실·채무불이행과의 구별을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 행위 당시 투자금을 편취할 범의가 있었는지.</li>\n<li><strong>정보 진실성</strong> — 전달한 상장·수익 정보가 허위였는지, 받은 정보였는지.</li>\n<li><strong>위험 고지</strong> — 손실 가능성·불확실성을 고지했는지.</li>\n<li><strong>투자손실 구별</strong> — 결과적 손실·정산 다툼이 민사 분쟁에 그치는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 편취 범의의 판단 기준',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 사기죄의 기망에는 신의칙상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서 그 사실을 고지하지 아니하는 부작위도 포함되고, 일반거래의 경험칙상 상대방이 그 사실을 알았더라면 거래를 하지 않았을 것이 명백한 경우에는 그 사정을 고지할 법률상 의무가 인정된다고 보았습니다. 또 충분한 담보를 제공하고 돈을 차용했다면 특별한 사정이 없는 한 변제 의사·능력이 없었다고 볼 수 없으나, 담보가치 평가에 중요한 사항을 알리지 않은 경우에는 충분한 담보를 제공한 것으로 볼 수 없어 편취 범의가 인정될 수 있으며, 편취 범의는 자백이 없는 한 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 한다고 판시했습니다. 비상장주식 투자 권유가 사기로 고소된 사안을 살펴볼 때에도, 권유 당시 정보의 진실성과 위험 고지 여부, 자금 흐름을 종합해 편취 고의를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '정상 권유 정황 + 본인 투자·손실 + 정보 출처 자료 결합 시 편취 고의 부재·투자손실 구별 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '상장이 무산돼 손실이 났으면 사기인가요?',
        answer:
          '<strong>행위 당시 투자금을 편취할 범의가 있었는지가 핵심인 영역입니다.</strong> 권유 경위와 정보 출처를 정리하세요.',
      },
      {
        question: '받은 정보로 권유했는데도 기망인가요?',
        answer:
          '<strong>정보가 허위였는지, 받은 정보였는지를 따지는 영역입니다.</strong> 자료 출처와 전달 내용을 정리하세요.',
      },
      {
        question: '저도 같이 투자해 손실을 봤어요.',
        answer:
          '<strong>본인 투자·손실은 편취 고의와 구별해 보는 영역입니다.</strong> 본인 매수·손실 내역과 자금 흐름을 모으세요.',
      },
      {
        question: '투자 손실 다툼인데 형사로 고소됐어요.',
        answer:
          '<strong>결과적 손실·정산 다툼이 민사 분쟁에 그치는지가 구별의 핵심인 영역입니다.</strong> 자금 흐름과 권유 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>권유 내용·정보 출처에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '비상장주식 상장예정 미끼 추적', href: '/guide/fraud/fraud-unlisted-stock-pre-ipo-lure-track' },
      { label: '비상장주식 상장예정 투자 추적', href: '/guide/fraud/fraud-unlisted-stock-pre-ipo-track' },
      { label: '주식 리딩방 투자 강요 추적', href: '/guide/fraud/fraud-investment-stock-room-coercion' },
      { label: '공동 주식투자 손실 은폐 무고 방어', href: '/guide/fraud/fraud-joint-stock-investment-loss-concealment-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-pc-room-next-seat-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-pc-room-next-seat-touch-report-track',
    keyword: '피시방 옆자리 추행 신고',
    questionKeyword: 'PC방에서 게임을 하던 중, 바로 옆자리에 앉은 사람이 화면을 보는 척하거나 좁은 좌석 사이를 지나는 척하면서 허벅지·어깨·팔·손등에 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 좌석이 붙어 있어 닿은 건가 싶었지만 접촉이 반복되고 노골적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 어두운 데다 다들 게임에 집중하는 분위기라 그 자리에서 큰 소리로 항의하기도 어려웠는데, 이런 PC방 옆자리 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '피시방 옆자리 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '피시방 옆자리 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        'PC방에서 붙은 좌석을 핑계로 신체에 손을 대는 접촉을 당해 수치스러웠다면, 강제추행죄의 추행 해당성·고의 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「PC방·게임존처럼 좌석이 다닥다닥 붙어 있고 조명이 어두운 공간에서 게임을 하거나 화면을 보던 중, 바로 옆자리에 앉은 사람이 내 화면을 함께 보는 척하거나 좁은 좌석 사이를 지나는 척하면서 허벅지·어깨·팔·등·손등 등 신체에 손을 대거나, 몸을 바짝 붙여 밀착하는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘좌석이 붙어 있어 어쩌다 닿은 건가’ 싶어 몸을 틀거나 자리를 옮겼는데도, 시간이 지나도 접촉이 계속되고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 붙은 자리를 틈탄 추행이라는 생각이 들었지만, 어둡고 다들 게임에 몰입해 있는 분위기라 큰 소리로 항의하거나 곧바로 제지하기도 어려운 채 당하고 나니, 신고해도 ‘자리가 붙어 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 쉬러 간 PC방에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 좌석이 붙어 있다는 점을 핑계로 했더라도 신체의 민감한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행의 고의로 상대방의 의사에 반하는 유형력의 행사, 즉 폭행행위를 하여 실행에 착수했으나 추행의 결과에 이르지 못한 때에는 강제추행미수죄가 성립하고, 이 법리는 폭행행위 자체가 추행행위로 인정되는 기습추행에도 적용된다고 본 사례 흐름이 있는 영역으로, 붙은 자리를 틈탄 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 붙은 좌석 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘옆자리 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 피시방 옆자리 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — PC방명·이용 시간대·좌석 번호·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허벅지·어깨·팔 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 우연한 스침을 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자리가 붙어 닿았다는 변명과 달리, 붙은 좌석을 틈타 민감 부위를 만지거나 필요 이상 밀착해 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 PC방 CCTV·좌석 배정·이용 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — PC방명·시간대·좌석·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — PC방 내부·통로 CCTV·좌석 배정·이용 결제·회원 내역·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">피시방 옆자리 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>PC방명·이용 시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>PC방 내부·통로 CCTV 보존 요청 자료</strong></li>\n<li><strong>좌석 배정·이용 결제·회원 내역 등 입증 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PC방은 좌석마다 이용 결제·회원 로그가 남아 가해자 좌석을 특정하기 쉽고, 내부·통로 CCTV로 동선을 보강할 수 있으나 보관 기간이 짧으니 시간대와 좌석 번호를 특정해 업주·경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 스침으로 설명되지 않는 접촉이 자리를 옮긴 뒤에도 반복됐다는 점을 구체적으로 기록하면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>추행 고의</strong> — 행위마다 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘자리가 붙어 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·좌석·이용 로그로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 강제추행미수죄',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄는 폭행 또는 협박으로 항거를 곤란하게 한 뒤 추행하는 경우뿐만 아니라 폭행행위 자체가 추행행위로 인정되는 경우도 포함되며, 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없다고 보았습니다. 추행은 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 말하며, 그 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이른 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 또 추행의 고의로 의사에 반하는 유형력을 행사해 실행에 착수했으나 추행 결과에 이르지 못하면 강제추행미수죄가 성립하고, 이는 기습추행에도 마찬가지로 적용된다고 보았습니다. 붙은 좌석을 틈타 신체에 손을 대거나 밀착한 접촉이 문제 된 사안을 살펴볼 때에도, 의사에 반하는 유형력과 추행 해당성을 기준으로 강제추행 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '붙은 좌석 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 옆자리 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좌석이 붙어 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '강하게 항거하지 못했는데 강제추행인가요?',
        answer:
          '<strong>의사에 반하는 유형력이 있으면 힘의 강약을 불문하는 영역입니다.</strong> 접촉의 태양과 직후 반응을 정리하세요.',
      },
      {
        question: '어두워서 잘 못 봤는데 가해자를 특정할 수 있나요?',
        answer:
          '<strong>좌석 이용 로그·CCTV·결제 내역으로 특정을 다툴 수 있는 영역입니다.</strong> 좌석 번호와 시간대를 특정해 자료를 모으세요.',
      },
      {
        question: '그 자리에서 항의하지 못했어요.',
        answer:
          '<strong>즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지·자리 이동을 정리하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '노래방 밀폐공간 추행 신고', href: '/guide/sex-crime/sex-crime-karaoke-room-confined-space-touch-report-track' },
      { label: '도서관 열람실 추행 신고', href: '/guide/sex-crime/sex-crime-library-reading-room-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: '택시 뒷좌석 잠든 승객 추행 신고', href: '/guide/sex-crime/sex-crime-taxi-back-seat-sleeping-passenger-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-club-crowded-dancefloor-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-crowded-dancefloor-touch-report-track',
    keyword: '클럽 혼잡 무대 추행 신고',
    questionKeyword: '클럽 무대·플로어에서 사람이 빽빽하게 몰린 채 춤을 추고 있었는데, 옆·뒤에 있던 사람이 혼잡한 틈을 타 엉덩이·허리·가슴 쪽에 손을 대거나 몸을 밀착해 비벼 너무 불쾌하고 수치스러웠어요. 술도 마신 상태였고 사람이 너무 많아 누가 했는지 곧바로 붙잡거나 항의하기도 어려웠어요. 처음엔 사람이 많아 닿은 건가 싶었지만 접촉이 노골적이고 반복돼 단순한 스침이 아니라 추행이라는 생각이 들었어요. 이런 클럽 혼잡 무대 추행을 신고하려면 어떤 절차로 진행되는지, 술 취한 상태에서 당한 경우도 어떻게 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '클럽 혼잡 무대 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '클럽 혼잡 무대 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '클럽 무대에서 혼잡한 틈을 타 신체를 만지는 접촉을 당해 수치스러웠다면, 형법 제299조 준강제추행 등 신고 절차와 CCTV 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·나이트·라운지의 무대·플로어에서 사람이 빽빽하게 몰린 채 음악에 맞춰 춤을 추던 중, 옆이나 뒤에 있던 사람이 혼잡하고 어두워 시선이 닿지 않는 틈을 타 엉덩이·허리·가슴·허벅지 등 신체에 손을 대거나, 몸을 바짝 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 술을 마셔 판단이 흐릿하고 사람이 너무 많아, 누가 했는지 곧바로 붙잡거나 큰 소리로 항의하기도 어려웠고, 처음에는 ‘사람이 많아 어쩌다 닿은 건가’ 싶었지만 접촉이 멈추지 않고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 혼잡을 틈탄 추행이라는 생각이 들었지만, 정신을 차리고 보니 가해자는 인파 속으로 사라져 신고해도 ‘붐벼서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를, 형법 제299조는 심신상실 또는 항거불능 상태를 이용해 추행한 경우를 준강제추행으로 정해 처벌하는 영역입니다. 혼잡한 무대에서 의사에 반해 엉덩이·가슴 등 민감한 부위를 만지거나 밀착해 비빈 행위라면, 또 술에 취해 항거가 곤란한 상태를 이용한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 준강제추행죄의 보호법익은 소극적 성적 자기결정권이고, 음주로 일시적으로 의식을 잃거나 정상적인 판단·대응 능력을 행사할 수 없는 상태도 심신상실·항거불능에 해당할 수 있다고 본 사례 흐름이 있는 영역으로, 혼잡·음주 상태를 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 혼잡 무대 이용 + 음주·항거 곤란 + 민감 부위 접촉·밀착 결합은 ‘혼잡 무대 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 혼잡 무대 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 클럽명·시간대·무대 위치·혼잡도·음주 상태 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허리·가슴 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 혼잡·음주 상태를 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 붐벼서 닿았다는 변명과 달리, 혼잡·음주 상태를 틈타 의사에 반해 민감 부위를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 클럽 CCTV·입장·결제 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 클럽명·시간대·무대 위치·접촉 부위·방식·반복·음주 정황을 기록·보존.</li>\n<li><strong>2단계 — CCTV·객관 자료 확보 (즉시)</strong> — 무대·플로어·입구·통로 CCTV, 입장·결제·동행자 정보, 목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 혼잡 무대 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>클럽명·이용 시간대·무대 동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복·음주 정황 기록 (행위 태양)</strong></li>\n<li><strong>무대·플로어·입구 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장·결제·동행자 등 이용 입증 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽 무대는 어둡고 혼잡해 가해자 특정이 어렵지만 입구·통로·바 CCTV와 입장·결제 내역, 동행자 진술로 동선을 보강할 수 있고, 보관 기간이 짧으니 시간대와 무대 위치를 특정해 업주·경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 음주로 기억이 일부 흐릿해도 접촉 부위·방식과 직후 반응을 구체적으로 기록하면 추행 해당성과 항거 곤란 상태를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>항거 곤란</strong> — 음주·혼잡으로 항거가 곤란한 상태를 이용했는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘붐벼서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동행자·입장 내역으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 음주에도 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 준강제추행죄의 심신상실·항거불능 상태의 판단',
        summary:
          '대법원 2018도9781(대법원, 2021.02.04 선고) 영역에서 법원은 형법 제299조의 준강제추행죄는 정신적·신체적 사정으로 성적 자기방어를 할 수 없는 사람의 성적 자기결정권을 보호하는 것을 보호법익으로 하고, 여기서 ‘심신상실’은 정신기능 장애로 성적 행위에 대한 정상적인 판단능력이 없는 상태를, ‘항거불능’은 그 밖의 원인으로 심리적·물리적으로 반항이 절대적으로 불가능하거나 현저히 곤란한 상태를 의미한다고 보았습니다. 또 피해자가 술·약물 등으로 일시적으로 의식을 잃었거나 완전히 의식을 잃지 않았더라도 정상적인 판단·대응·조절 능력을 행사할 수 없는 상태였다면 심신상실·항거불능에 해당할 수 있고, 단편적인 모습만으로 단순한 알코올 블랙아웃이어서 심신상실이 아니라고 단정할 수 없다고 판시했습니다. 혼잡한 클럽 무대에서 음주 상태의 피해자에게 접촉이 이루어진 사안을 살펴볼 때에도, 의사에 반하는 추행과 항거 곤란 상태를 기준으로 강제추행·준강제추행 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '혼잡 무대 이용 + 음주·항거 곤란 + 민감 부위 접촉·밀착 결합 시 혼잡 무대 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 많아 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '술에 취한 상태였는데 신고할 수 있나요?',
        answer:
          '<strong>항거 곤란 상태를 이용한 추행도 다툴 수 있는 영역입니다.</strong> 음주 정황과 직후 반응·기억을 정리하세요.',
      },
      {
        question: '누가 했는지 못 봤는데 가해자를 특정할 수 있나요?',
        answer:
          '<strong>CCTV·동행자·입장 내역으로 특정을 다툴 수 있는 영역입니다.</strong> 시간대·무대 위치를 특정해 자료를 모으세요.',
      },
      {
        question: '그 자리에서 붙잡거나 항의하지 못했어요.',
        answer:
          '<strong>즉시 대응하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지·동행자 진술을 정리하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '클럽 무대 그루핑 추행 신고', href: '/guide/sex-crime/sex-crime-club-dancefloor-grope-report-track' },
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
      { label: '나이트클럽 무대 인파 추행 신고', href: '/guide/sex-crime/sex-crime-nightclub-dancefloor-crowd-touch-report-track' },
      { label: '클럽 무대 접촉 추행 신고', href: '/guide/sex-crime/sex-crime-club-dancefloor-contact-track' },
    ],
  },

  // ─── 9. sex-crime-festival-crowd-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-crowd-touch-report-track',
    keyword: '축제 인파 추행 신고',
    questionKeyword: '축제·콘서트·불꽃놀이 같은 행사장에서 사람이 빽빽하게 몰린 인파 속에 서 있었는데, 옆·뒤에 있던 사람이 혼잡한 틈을 타 엉덩이·허리·가슴 쪽에 손을 대거나 성기를 몸에 밀착해 비벼 너무 불쾌하고 수치스러웠어요. 사람이 너무 많아 움직이기도 어려웠고 누가 했는지 곧바로 붙잡거나 항의하기도 힘들었어요. 처음엔 인파에 밀려 닿은 건가 싶었지만 접촉이 노골적이고 반복돼 단순한 스침이 아니라 추행이라는 생각이 들었어요. 이런 축제 인파 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '축제 인파 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 인파 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '축제 인파 속에서 혼잡을 틈타 신체를 만지는 접촉을 당해 수치스러웠다면, 성폭력처벌법 제11조 공중밀집장소 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「축제·콘서트·불꽃놀이·거리 행사처럼 사람이 빽빽하게 몰리는 공중밀집장소에서 인파 속에 서 있거나 이동하던 중, 옆이나 뒤에 있던 사람이 혼잡하고 서로 몸이 닿을 수밖에 없는 상황을 틈타 엉덩이·허리·가슴·허벅지 등 신체에 손을 대거나, 성기·몸을 바짝 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 사람이 너무 많아 자유롭게 움직이거나 피하기도 어려웠고, 누가 했는지 곧바로 붙잡거나 큰 소리로 항의하기도 힘든 상황이었으며, 처음에는 ‘인파에 밀려 어쩌다 닿은 건가’ 싶었지만 접촉이 멈추지 않고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 혼잡을 틈탄 추행이라는 생각이 들었지만, 정신을 차리고 보니 가해자는 인파 속으로 사라져 신고해도 ‘붐벼서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 행사에서 겪은 일이라 더 답답하셨을 거예요.」 성폭력처벌법 제11조는 대중교통수단·공연·집회 장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행한 사람을 처벌하도록 정하는 영역입니다. 피해자가 접근이 용이하고 추행 장소가 공개되어 명시적·적극적 저항이나 회피가 어려운 상황을 이용한 접촉이라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 공중밀집장소에서의 추행죄가 기수에 이르기 위해 행위자의 행위로 대상자가 반드시 실제로 성적 수치심이나 혐오감을 느껴야 하는 것은 아니고, 객관적으로 그러한 행위를 실행하는 것으로 충분하다고 본 사례 흐름이 있는 영역으로, 인파를 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 공중밀집 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘공중밀집장소 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 행사명·장소·시간대·인파 위치·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허리·가슴 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 공중밀집 상황을 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인파에 밀려 닿았다는 변명과 달리, 공중밀집 상황을 틈타 의사에 반해 민감 부위를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 행사장 CCTV·입장·동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 행사명·장소·시간대·인파 위치·접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·객관 자료 확보 (즉시)</strong> — 행사장·무대·입구·통로 CCTV, 입장·동행자 정보, 목격자 진술·현장 영상을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>행사명·장소·시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>행사장·무대·입구 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장권·예매·동행자 등 이용 입증 자료</strong></li>\n<li><strong>목격자·동행자 진술·현장 영상·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대규모 행사장은 CCTV·관제 영상과 관람객이 찍은 현장 영상이 함께 남는 경우가 많으므로 시간대와 위치를 특정해 주최 측·경찰을 통해 신속히 보존을 요청하고, 보관 기간이 짧으니 서둘러야 합니다. 인파에 밀린 우연으로 설명되지 않는 접촉이 반복됐다는 점과 직후 반응을 구체적으로 기록하면 공중밀집장소 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>공중밀집 이용</strong> — 회피가 어려운 밀집 상황을 이용했는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘인파에 밀려 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·현장 영상·동행자로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공중밀집장소 추행죄의 기수와 추행의 판단 기준',
        summary:
          '대법원 2015도7102(대법원, 2020.06.25 선고) 영역에서 법원은 공중밀집장소에서의 추행을 처벌하는 규정의 취지가, 다중이 출입하는 공개된 장소에서 추행 발생 개연성이 높은 반면 피해자가 명시적·적극적으로 저항하거나 회피하기 어려운 상황을 이용한 추행에 대처하기 위한 것이라고 보았습니다. 여기서 ‘추행’은 일반인을 기준으로 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 말하며, 그 해당 여부는 피해자의 성별·연령, 행위자와 피해자의 관계, 행위에 이른 경위와 구체적 행위 양태, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 또 이 죄가 기수에 이르기 위해 행위자의 행위로 대상자가 반드시 실제로 성적 수치심·혐오감을 느껴야 하는 것은 아니라고 보았습니다. 축제 인파 속에서 혼잡을 틈타 접촉이 이루어진 사안을 살펴볼 때에도, 공개·밀집 상황을 이용한 의사에 반하는 추행에 해당하는지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '공중밀집 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 공중밀집장소 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '인파에 밀려 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '제가 수치심을 표현하지 못했는데 처벌되나요?',
        answer:
          '<strong>대상자가 반드시 실제로 수치심을 느껴야 성립하는 것은 아닌 영역입니다.</strong> 객관적 행위 태양을 정리하세요.',
      },
      {
        question: '누가 했는지 못 봤는데 가해자를 특정할 수 있나요?',
        answer:
          '<strong>CCTV·현장 영상·동행자 진술로 특정을 다툴 수 있는 영역입니다.</strong> 시간대·위치를 특정해 자료를 모으세요.',
      },
      {
        question: '그 자리에서 붙잡거나 항의하지 못했어요.',
        answer:
          '<strong>즉시 대응하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지·동행자 진술을 정리하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '축제 밀집 인파 추행 신고', href: '/guide/sex-crime/sex-crime-festival-dense-crowd-touch-report-track' },
      { label: '축제 인파 그루핑 추행 신고', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-report-track' },
      { label: '나이트클럽 무대 인파 추행 신고', href: '/guide/sex-crime/sex-crime-nightclub-dancefloor-crowd-touch-report-track' },
      { label: '클럽 축제 인파 추행 신고', href: '/guide/sex-crime/sex-crime-club-festival-crowd-molestation-track' },
    ],
  },

  // ─── 10. sex-crime-company-dinner-drunk-touch-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-drunk-touch-falsely-accused-defense',
    keyword: '회식 음주 후 추행 무고 방어',
    questionKeyword: '회사 회식에서 술을 많이 마시며 동료들과 어울렸는데, 다음 날 같이 있던 동료가 ‘회식 자리에서 동의 없이 신체를 만져 추행당했다’며 저를 고소했어요. 저는 당시 다 같이 웃고 떠드는 분위기였고 강제로 만지거나 추행할 의도는 전혀 없었으며, 술에 취해 기억이 일부 흐릿하지만 그런 행동을 했다고 생각하지 않아요. 그런데 여러 사람이 섞여 있던 자리라 진술이 엇갈리고, 음주 상태였다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 회식 자리 배치·대화 같은 자료도 있는데, 이렇게 회식 음주 후 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '회식 음주 후 추행 고의 부재·진술 신빙성 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 음주 후 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '회식 술자리 접촉이 추행으로 고소돼 억울하다면, 형법 제298조 강제추행 고의 판단과 피해자 진술 신빙성·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식·부서 모임에서 술을 마시며 여러 동료와 어울려 분위기 좋게 시간을 보냈다고 생각했는데, 다음 날 또는 며칠 뒤 같은 자리에 있던 동료가 ‘회식 자리에서 동의 없이 신체를 만져 추행을 당했다’며 저를 고소해, 한순간에 직장 내 성추행 가해자로 몰린 분의 상황입니다. 저는 당시 다 함께 웃고 떠드는 분위기였고 강제로 신체를 만지거나 추행할 의도는 전혀 없었으며, 술에 취해 일부 기억이 흐릿하더라도 그런 행동을 했다고 생각하지 않는데, 여러 사람이 섞여 있던 자리라 누가 무엇을 했는지에 관한 진술이 엇갈리고, 음주 상태였다는 사정과 직장이라는 관계 때문에 일방의 진술만으로 추행 가해자로 단정될까 봐 너무 억울하고 막막하실 거예요. 회식 자리의 접촉은 좌석 배치·분위기·맥락에 따라 평가가 갈리는데 ‘동의 없는 추행이었다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 회식의 경위와 좌석 배치, 당시 대화·분위기, 동석자들의 기억을 차분히 정리해 추행의 고의가 없었고 상대의 의사에 반하지 않았다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄가 성립하려면 의사에 반하는 유형력의 행사와 추행, 그리고 그에 대한 고의가 인정되어야 하는 영역입니다. 판례는 형사피고인은 유죄 판결이 확정될 때까지 무죄로 추정되고, 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 피해자 또는 밀접한 관계인의 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 만큼 신빙성이 있고 무죄 주장을 배척하기에 충분해야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 회식의 경위와 접촉의 맥락, 진술의 신빙성을 종합해 추행 고의와 의사 반함이 인정되는지를 가려 다툴 여지가 있는 영역입니다. 회식 경위·좌석 정황 + 동석자 진술 + 진술 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 회식 경위 정리 ② 접촉 맥락·좌석 정황 ③ 진술 신빙성 검토 ④ 추행 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 음주 후 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 맥락·진술 신빙성·추행 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 회식 경위 정리</strong> — 회식 일시·장소·참석자·좌석 배치·분위기 정리.</li>\n<li><strong>② 접촉 맥락·좌석 정황</strong> — 접촉의 맥락과 좌석·동선·거부 의사 유무 정리.</li>\n<li><strong>③ 진술 신빙성 검토</strong> — 상대·동석자 진술의 일관성·구체성·동기를 검토.</li>\n<li><strong>④ 추행 고의</strong> — 의사에 반하는 유형력·추행 고의가 인정되는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 좌석·대화·동석자 기억이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대의 의사에 반해 추행할 고의가 있었는지(강제추행), 아니면 진술이 엇갈리거나 일관되지 않는지(무고·신빙성 다툼)가 판단의 분기점입니다. 회식 경위와 좌석 배치, 동석자 기억을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 회식·좌석 자료 보존 (즉시)</strong> — 회식 일정·장소·참석자·좌석 배치·당시 대화·사진을 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 맥락·정황 정리 (즉시)</strong> — 접촉의 맥락, 좌석·동선, 거부 의사 유무·분위기를 정리.</li>\n<li><strong>3단계 — 진술 신빙성·고의 검토 (병행)</strong> — 상대·동석자 진술의 일관성·구체성과 추행 고의 부재를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 음주 후 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일정·장소·참석자 자료 (회식 경위)</strong></li>\n<li><strong>좌석 배치·동선·이동 정황 자료 (좌석 정황)</strong></li>\n<li><strong>당시 대화·메시지·사진·영상 (분위기·맥락)</strong></li>\n<li><strong>매장 결제·CCTV 등 객관 정황 자료 (객관 정황)</strong></li>\n<li><strong>접촉 맥락·거부 의사 유무 정리 (동의 정황)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식의 일시·장소·참석자와 좌석 배치, 당시 대화·사진·매장 CCTV를 시간순으로 정리하면 접촉이 어떤 맥락에서 있었는지, 추행할 고의가 있었는지를 다투는 데 도움이 됩니다. 여러 사람이 섞인 자리인 만큼 동석자들의 기억과 상대 진술이 시점·내용에 따라 달라지거나 객관 정황과 어긋나는 부분을 함께 정리해 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 의사에 반하는 유형력·추행 고의가 있었는지.</li>\n<li><strong>접촉 맥락</strong> — 접촉이 어떤 좌석·동선·분위기에서 이루어졌는지.</li>\n<li><strong>진술 신빙성</strong> — 상대·동석자 진술이 일관되고 정황과 맞는지.</li>\n<li><strong>음주·다인 정황</strong> — 음주 상태와 다인 회식 정황이 어떻게 평가되는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정의 원칙과 피해자 진술의 신빙성 판단',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 판결이 확정될 때까지 무죄로 추정되고, 무죄추정의 원칙은 수사 단계뿐 아니라 판결 확정 시까지 형사절차 전반을 이끄는 대원칙이며, 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하고 검사가 제출한 증거가 그러한 확신을 주지 못하면 유죄의 의심이 있더라도 피고인의 이익으로 판단해야 한다고 보았습니다. 특히 추행 행위가 이루어졌을 것으로 예상하기 곤란한 상황에서 피해자 또는 밀접한 관계인의 진술이 유일한 증거인 경우, 이를 근거로 유죄로 판단하려면 진술 내용 자체의 합리성·타당성뿐 아니라 객관적 정황과 경험칙에 비추어 합리적 의심을 배제할 만한 신빙성이 있고 피고인의 무죄 주장을 배척하기에 충분해야 한다고 판시했습니다. 회식 음주 후 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 피해자 진술의 일관성·구체성과 객관 정황 부합 여부, 추행 고의를 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '회식 경위·좌석 정황 + 동석자 진술 + 진술 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '다 같이 웃던 분위기였는데도 추행으로 보나요?',
        answer:
          '<strong>접촉이 의사에 반했는지와 추행 고의가 있었는지가 핵심인 영역입니다.</strong> 좌석·대화·거부 의사 유무를 정리하세요.',
      },
      {
        question: '술을 마셔 기억이 흐릿한데 불리한가요?',
        answer:
          '<strong>음주 정황은 양측 진술과 객관 자료로 함께 따지는 영역입니다.</strong> 좌석·대화·결제·CCTV 등 정황 자료를 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성을 신중히 따지는 영역입니다.</strong> 진술의 일관성·정황 부합 여부를 정리하세요.',
      },
      {
        question: '여러 사람이 있어 진술이 엇갈려요.',
        answer:
          '<strong>동석자 진술의 차이는 신빙성 판단의 자료가 되는 영역입니다.</strong> 동석자별 기억과 좌석·동선을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>회식 경위·접촉 맥락에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '회식 강제 좌석 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
      { label: '직장 회식 음주 동료 추행 무고 방어', href: '/guide/sex-crime/sex-crime-office-dinner-drunk-colleague-touch-falsely-accused-defense' },
      { label: '회식 동료 무고 추행 방어', href: '/guide/sex-crime/sex-crime-company-dinner-coworker-accusation-falsely-accused-defense' },
      { label: '회식 만취 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-intoxicated-falsely-accused-defense' },
    ],
  },
];
