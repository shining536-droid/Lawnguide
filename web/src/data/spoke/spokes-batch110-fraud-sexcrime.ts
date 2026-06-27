import { SpokePage } from '../spoke-pages';

// batch110 fraud(6) + sex-crime(4) — 10개 (2026-06-27)
//
// 고유 존재 이유:
// 1. fraud-secondhand-camera-lens-fake-genuine-sale-track — 일반 중고거래 분쟁과 분기. '가짜 렌즈를 정품으로 둔갑시켜 판매' 가짜 정품 둔갑 고지의무 기망 편취 판단형 트랙(victim).
// 2. fraud-nft-artwork-fake-mint-investment-track — 일반 투자 분쟁과 분기. 'NFT 작품을 허위 발행해 투자금을 편취' NFT 허위 발행 투자 기망 편취 절차형 트랙(victim).
// 3. fraud-mealkit-subscription-auto-renewal-refund-track — 일반 환불 분쟁과 분기. '밀키트 구독 자동결제를 숨기고 환불을 거부' 자동결제 은폐 환불거부 기망 편취 판단형 트랙(victim).
// 4. fraud-influencer-groupbuy-nondelivery-track — 일반 미배송 분쟁과 분기. '인플루언서 공동구매로 결제만 받고 미배송' 공동구매 미배송 기망 편취 절차형 트랙(victim).
// 5. fraud-overseas-realestate-development-fake-investment-track — 일반 투자 분쟁과 분기. '실재하지 않는 해외 부동산 개발을 미끼로 투자금을 편취' 해외 부동산 허위 개발 투자 기망 편취 판단형 트랙(victim).
// 6. fraud-business-partnership-profit-distribution-falsely-accused-defense — 일반 사기 무고류와 분기. '동업 수익 분배 다툼이 사기 고의로 고소됨' 고지·편취 고의·정산분쟁 구별 방어 판단형 트랙(accused).
// 7. sex-crime-gym-pt-posture-correction-touch-report-track — 일반 추행류와 분기. '헬스장 PT 자세 교정을 빙자해 신체에 부적절 접촉' 자세 교정 빙자 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-taxi-back-seat-sleeping-passenger-touch-report-track — 일반 추행류와 분기. '택시 뒷좌석에서 잠든 승객을 추행' 심신상실·항거불능 이용 준강제추행 신고 절차형 트랙(victim).
// 9. sex-crime-festival-dense-crowd-touch-report-track — 일반 추행류와 분기. '축제 인파 밀집을 틈타 신체를 추행' 공중밀집장소 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-medical-checkup-pretext-touch-falsely-accused-defense — 일반 성범죄 무고류와 분기. '진료·검진 과정 접촉이 추행으로 고소' 진료 행위 통상성·고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch110FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-secondhand-camera-lens-fake-genuine-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-camera-lens-fake-genuine-sale-track',
    keyword: '중고 카메라 렌즈 가짜 정품 둔갑 판매 기망 사기',
    questionKeyword: '중고 거래로 카메라 렌즈를 사면서 ‘정품 박스·보증서까지 다 있는 100% 정품이다’라는 판매자의 말을 믿고 정품 시세에 맞춰 적지 않은 돈을 주고 샀어요. 그런데 막상 받아 서비스센터에서 확인하니 정품이 아닌 가품·짝퉁이거나 다른 부품이 섞인 물건이었고, 박스·시리얼·보증서도 가짜였어요. 판매자에게 따지니 ‘나도 정품인 줄 알았다, 환불은 안 된다’며 발뺌하다 연락을 피하는데, 처음부터 가품을 정품으로 둔갑시켜 판 정황이에요. 이런 중고 카메라 렌즈 가짜 정품 둔갑 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 렌즈 가짜 정품 둔갑·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 렌즈 가짜 정품 둔갑 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라는 말을 믿고 산 중고 렌즈가 가품으로 드러나고 환불도 거부당했다면, 형법 제347조 사기·고지의무 위반 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·카페·직거래로 카메라 렌즈를 사면서 판매자에게서 ‘정품 박스와 보증서까지 다 갖춰진 100% 정품이다, 시리얼도 조회되고 하자 없다’는 말을 믿고, 가품보다 비싼 정품 시세에 맞춰 적지 않은 대금을 주고 물건을 받은 분의 상황입니다. 그런데 막상 인수해 정식 서비스센터·전문점에서 감정해보니, 외관만 비슷할 뿐 정품이 아닌 가품·짝퉁이거나 다른 모델 부품이 섞여 있었고, 함께 받은 정품 박스·시리얼 번호·보증서마저 위조이거나 다른 제품의 것이어서, 가품을 정품 값에 산 셈이 되어 막막하실 거예요. 판매자에게 이를 따지니 ‘나도 정품인 줄 알고 받아서 되판 것뿐이다, 이미 거래가 끝났으니 환불은 못 해준다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 비슷하게 가품을 정품으로 둔갑시켜 여러 사람에게 판 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품인 사실을 알면서도 정품인 것처럼 속이거나, 정품이 아닐 수 있다는 중요한 사정을 알리지 않은 채 정품 시세로 팔았다면 적극적·소극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 기망은 거래에서 지켜야 할 신의성실의 의무를 저버리는 모든 행위를 말하고, 상대방이 그 사정을 알았더라면 거래하지 않았을 관계가 인정되면 신의칙상 사전에 고지할 의무가 있어 이를 묵비하면 기망이 된다고 본 사례 흐름이 있는 영역으로, 정품 여부라는 거래의 핵심 사정을 알리지 않았는지를 가려 다툴 여지가 있습니다. 정품 가장 + 가품·위조 보증서 + 환불 거부·발뺌 결합은 ‘가짜 정품 둔갑 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 렌즈 가짜 정품 둔갑 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정품 강조 설명·거래 대화·결제 내역 정리.</li>\n<li><strong>② 가품·기망 입증</strong> — 서비스센터 감정서·위조 보증서·시리얼 불일치로 가품을 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정품 시세로 지급한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 가품인 사실을 알면서 정품으로 속였는지, 정품이 아닐 수 있다는 중요한 사정을 알리지 않았는지가 판단의 분기점입니다. 정품을 강조한 대화와 감정 결과, 같은 판매자의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정품 강조 설명·거래 대화·결제·택배 내역 캡처 보존.</li>\n<li><strong>2단계 — 가품 입증 (즉시)</strong> — 정식 서비스센터·전문점 감정서, 위조 보증서·시리얼 불일치 자료 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 렌즈 가짜 정품 둔갑 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정품 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>렌즈 대금·배송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>정식 서비스센터·전문점 감정서·진단서</strong></li>\n<li><strong>위조 박스·보증서·시리얼 불일치 대비 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정식 서비스센터·전문점 감정서로 가품 여부를 명확히 하고, 판매자가 정품을 강조한 대화와 위조 보증서·시리얼을 대비하면 가짜 정품 둔갑 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 여부</strong> — 실제로 가품·부품 혼합인지.</li>\n<li><strong>고지의무 위반</strong> — 정품이 아닐 수 있는 사정을 알리지 않았는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 둔갑 판매였는지.</li>\n<li><strong>편취액</strong> — 정품 시세로 지급한 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·가품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반과 부작위에 의한 기망',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 서로 지켜야 할 신의와 성실의 의무를 저버리는 모든 적극적·소극적 행위를 말하고, 반드시 법률행위의 중요 부분에 관한 허위표시임을 요하지 않으며, 상대방이 일정한 사정을 고지받았더라면 그 거래에 임하지 않았을 관계가 인정되는 경우에는 신의성실의 원칙상 사전에 그 사정을 고지할 의무가 있어 이를 묵비하면 기망이 되어 사기죄를 구성한다고 보았습니다. 또 사기죄는 기망에 의한 재물·재산상 이익의 취득에 본질이 있어 피해자에게 현실적 손해가 발생함을 요건으로 하지 않는다고 판시했습니다. 가품을 정품으로 둔갑시켜 판 사안을 살펴볼 때에도, 정품 여부라는 거래의 핵심 사정을 알면서 알리지 않았는지를 기준으로 기망과 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '정품 가장 + 가품·위조 보증서 + 환불 거부 결합 시 가짜 정품 둔갑 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자도 정품인 줄 알았다는데 사기인가요?',
        answer:
          '<strong>가품 가능성을 알면서 정품으로 속였거나 중요한 사정을 묵비했는지가 핵심인 영역입니다.</strong> 정품 강조 대화와 감정 결과를 확보하세요.',
      },
      {
        question: '가품이라는 걸 어떻게 확인하나요?',
        answer:
          '<strong>정식 서비스센터·전문점 감정서가 핵심 단서인 영역입니다.</strong> 시리얼 불일치와 위조 보증서를 함께 확보하세요.',
      },
      {
        question: '정품 박스·보증서가 있었는데도 가품인가요?',
        answer:
          '<strong>박스·보증서·시리얼이 위조됐는지가 기망 판단의 단서인 영역입니다.</strong> 정품 자료와 실제 제품을 대비하세요.',
      },
      {
        question: '직거래라 송금이 아닌 현금이면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 감정서를 정리해 청구를 준비하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 렌즈 직거래 미배송 추적', href: '/guide/fraud/fraud-secondhand-camera-lens-direct-no-delivery-track' },
      { label: '중고 카메라 부품 바꿔치기 추적', href: '/guide/fraud/fraud-secondhand-camera-part-swap-track' },
      { label: '가짜 명품 정품 둔갑 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '중고 명품 가품 진품여부 추적', href: '/guide/fraud/fraud-secondhand-luxury-fake-authenticity-track' },
    ],
  },

  // ─── 2. fraud-nft-artwork-fake-mint-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-artwork-fake-mint-investment-track',
    keyword: 'NFT 작품 허위 발행 투자 기망 사기',
    questionKeyword: 'NFT 프로젝트·작가·운영진이 ‘유명 작가 작품을 한정 발행한다, 곧 거래소 상장과 로드맵 실행으로 가치가 오른다’며 민팅·투자금을 모았는데, 그 말을 믿고 적지 않은 코인·돈을 넣었어요. 그런데 알고 보니 작품 권리가 실재하지 않거나 발행 수량·소각·로드맵이 전부 허위였고, 운영진은 자금만 챙긴 뒤 커뮤니티를 닫고 잠적했어요. 이미 일부 에어드랍·코인을 받았더라도 처음부터 허위 발행으로 투자금을 노린 정황인데, 이런 NFT 작품 허위 발행 투자 기망을 사기로 신고하고 넣은 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: 'NFT 허위 발행 투자 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'NFT 작품 허위 발행 투자 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '한정 발행·상장 약속을 믿고 NFT에 투자했는데 권리·로드맵이 허위로 드러나고 운영진이 잠적했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「NFT 프로젝트·작가·운영진이 ‘유명 작가의 작품을 한정 수량으로 발행한다, 발행 후 곧 거래소 상장·2차 컬렉션·로드맵 실행이 예정돼 있어 가치가 크게 오른다, 지금 민팅하면 초기 혜택이 크다’는 솔깃한 말로 투자자를 모으고, 그 말을 믿고 좋은 기회를 놓칠까 봐 적지 않은 코인·현금으로 민팅·투자에 참여한 분의 상황입니다. 그런데 막상 발행 이후 확인해보니 약속한 작품의 권리·라이선스가 실재하지 않거나, 한정이라던 발행 수량·소각·에어드랍·로드맵이 전부 허위였고, 운영진은 모인 자금만 챙긴 뒤 디스코드·커뮤니티를 닫고 연락을 끊은 채 잠적해, 넣은 돈을 회수하지 못하게 되어 막막하실 거예요. 이미 일부 에어드랍이나 소액 코인을 받았더라도, 처음부터 실체 없는 작품을 허위로 발행해 여러 투자자에게서 자금만 받아온 정황이라면 단순 시세 하락이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 작품 권리·발행 수량·상장·로드맵 같은 핵심 사정을 허위로 꾸며 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되었거나 일부 담보가 제공되었더라도 편취액은 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 일부 에어드랍·코인을 받았더라도 넣은 금액 전부를 기준으로 편취 여부와 죄책을 가려 다툴 여지가 있습니다. 한정 발행 가장·권리·로드맵 허위 + 투자금 수령 + 잠적·환불 거부 결합은 ‘NFT 허위 발행 투자 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 발행·권리·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. NFT 작품 허위 발행 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·발행 권리·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 발행·상장 홍보·민팅 안내·코인·현금 송금 내역 정리.</li>\n<li><strong>② 발행·권리·기망</strong> — 작품 권리·발행 수량·로드맵이 실재했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 일부 에어드랍을 받았어도 넣은 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 거래소·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 시세 하락과 달리, 작품 권리·발행 수량·상장·로드맵 같은 핵심 사정을 허위로 꾸며 투자금을 받았는지가 판단의 분기점입니다. 발행·상장을 강조한 홍보와 권리·로드맵 부재 정황, 운영진의 잠적·반복 모집 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 발행·상장 홍보·민팅 안내·코인·현금 송금 내역·지갑 주소 캡처 보존.</li>\n<li><strong>2단계 — 발행·권리 부재 입증 (즉시)</strong> — 작품 권리·발행 수량·로드맵 불이행·커뮤니티 폐쇄 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 현금 송금 계좌 지급정지를 112·은행에 요청하고 거래소에 신고·동결을 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">NFT 작품 허위 발행 투자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·발행 권리·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>발행·상장·로드맵 홍보·백서 캡처 (투자 조건)</strong></li>\n<li><strong>민팅·투자 안내·약정·공지 (계약 내용)</strong></li>\n<li><strong>코인·현금 송금·지갑 거래 내역 (피해 금액)</strong></li>\n<li><strong>작품 권리·라이선스 확인 시도·불가 기록</strong></li>\n<li><strong>로드맵 불이행·커뮤니티 폐쇄·잠적 정황</strong></li>\n<li><strong>운영진·작가·지갑 주소·계좌 정보</strong></li>\n<li><strong>다른 투자자·단체 채팅·환불 거부 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발행·상장·로드맵을 약속한 홍보·백서·공지와, 그 약속이 이행되지 않고 권리도 실재하지 않은 정황을 시간순으로 정리하면 허위 발행 기망을 다투는 데 도움이 됩니다. 코인 송금은 지갑 주소·트랜잭션 해시까지 보존하고, 같은 운영진이 다른 투자자도 비슷하게 모집한 정황을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>권리·발행 실재</strong> — 작품 권리·발행 수량이 실재했는지.</li>\n<li><strong>로드맵 허위</strong> — 상장·로드맵이 처음부터 허위였는지.</li>\n<li><strong>편취 범의</strong> — 단순 시세 하락인지 처음부터 자금만 노렸는지.</li>\n<li><strong>편취액</strong> — 일부 에어드랍을 받았어도 넣은 금액 전부가 피해액인지.</li>\n<li><strong>운영진 특정</strong> — 운영진·지갑·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (디지털 거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액과 대가 일부 지급',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 상당한 대가가 지급되었다거나 피해자의 전체 재산상에 손해가 없다 하더라도 사기죄 성립에는 영향이 없다고 보았습니다. 그러므로 그 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부된 금원에서 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 보아야 한다고 판시했습니다. 허위 발행을 미끼로 NFT 투자금을 받은 사안을 살펴볼 때에도, 일부 에어드랍·코인을 받았더라도 그 가액을 빼지 않고 넣은 금액 전부를 기준으로 편취 여부와 죄책을 가려 검토해볼 수 있습니다.',
        takeaway: '한정 발행 가장·권리·로드맵 허위 + 투자금 수령 + 잠적 결합 시 NFT 허위 발행 투자 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 코인 시세가 떨어진 것 아닌가요?',
        answer:
          '<strong>권리·발행·로드맵 같은 핵심 사정을 허위로 꾸몄는지가 핵심인 영역입니다.</strong> 발행·상장 홍보와 권리 부재 정황을 확보하세요.',
      },
      {
        question: '일부 에어드랍을 받았는데도 사기인가요?',
        answer:
          '<strong>대가가 일부 지급돼도 넣은 금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액과 받은 가액을 함께 정리하세요.',
      },
      {
        question: '코인으로 보냈는데 추적이 되나요?',
        answer:
          '<strong>지갑 주소·트랜잭션 해시가 자금 추적의 단서인 영역입니다.</strong> 거래소 신고와 함께 송금 기록을 보존하세요.',
      },
      {
        question: '운영진이 외국에 있는 것 같은데 신고되나요?',
        answer:
          '<strong>피해자가 국내에서 송금했다면 국내 신고를 검토할 수 있는 영역입니다.</strong> 송금·홍보·지갑 자료를 정리해 접수하세요.',
      },
      {
        question: '다른 투자자도 같이 당한 것 같아요.',
        answer:
          '<strong>다수 투자자의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·모집 공지·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: 'NFT 디지털 자산 투자 추적', href: '/guide/fraud/fraud-nft-digital-asset-investment-track' },
      { label: 'NFT 프로젝트 러그풀 투자 추적', href: '/guide/fraud/fraud-nft-project-rugpull-investment-track' },
      { label: '투자 플랫폼 허위 수익률 표시 추적', href: '/guide/fraud/fraud-investment-platform-yield-fake-display-track' },
      { label: '코인 투자 사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
    ],
  },

  // ─── 3. fraud-mealkit-subscription-auto-renewal-refund-track ───
  {
    domain: 'fraud',
    slug: 'fraud-mealkit-subscription-auto-renewal-refund-track',
    keyword: '밀키트 구독 자동결제 환불거부 기망 사기',
    questionKeyword: '밀키트·식품 정기구독을 ‘첫 달 무료·할인 체험’이라는 광고를 믿고 신청했는데, 무료라던 체험이 끝나자 동의한 적 없는 정기결제로 매달 큰 금액이 자동으로 빠져나갔어요. 해지하려 해도 해지 버튼을 숨겨두거나 ‘약정 기간이 남았다’며 환불을 거부하고, 자동결제·약정 사실을 가입 단계에서 제대로 알리지 않은 정황이에요. 이미 받은 밀키트가 있더라도 처음부터 자동결제를 숨겨 결제만 챙긴 것 같은데, 이런 밀키트 구독 자동결제 환불거부 기망을 사기로 신고하고 결제된 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '밀키트 구독 자동결제 은폐·환불거부 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '밀키트 구독 자동결제 환불거부 사기 — 5단계 점검 | 로앤가이드',
      description:
        '무료 체험인 줄 알았는데 자동결제로 매달 돈이 빠지고 해지·환불까지 거부당했다면, 형법 제347조 사기·고지의무 위반 판단과 카드 항변·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「밀키트·반찬·식품 정기구독 업체가 ‘첫 달 무료, 부담 없는 체험, 언제든 해지 가능’이라는 광고를 내세워, 그 말을 믿고 가볍게 체험만 해보려고 신청한 분의 상황입니다. 그런데 무료라던 체험 기간이 끝나자 동의한 기억이 없는 정기결제·자동연장으로 매달 적지 않은 금액이 카드·계좌에서 빠져나가기 시작했고, 막상 해지하려 하니 해지 메뉴를 찾기 어렵게 깊숙이 숨겨두었거나 ‘이미 약정 기간이 남아 위약금이 발생한다, 환불은 안 된다’며 거부해, 원하지도 않은 결제만 계속 쌓여 막막하실 거예요. 가입 화면에서 자동결제 전환·약정 기간·해지 방법 같은 중요한 조건을 눈에 띄지 않게 처리하거나 사실상 알리지 않은 정황이고, 같은 방식으로 다른 소비자도 똑같이 당했다면 단순 결제 착오가 아닐 수 있어 더 답답하셨을 거예요. 이미 밀키트 몇 개를 받아봤더라도, 처음부터 자동결제 전환을 숨겨 결제만 챙긴 것은 아닌지 의심되면 더 불안하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 무료 체험을 강조하면서 자동결제 전환·약정 같은 결제의 핵심 조건을 알리지 않거나 동의 없이 계속 결제했다면 적극적·소극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망으로 비용을 계속 청구·수령해 대금을 편취한 행위에 대해, 그로 인한 사기죄와 별도의 죄가 보호법익·구성요건이 다를 경우 각 죄가 별개로 성립한다고 본 사례 흐름이 있는 영역으로, 자동결제 은폐로 받은 대금이 기망에 의한 편취에 해당하는지를 가려 다툴 여지가 있습니다. 무료 체험 가장·자동결제 은폐 + 동의 없는 결제 + 해지·환불 거부 결합은 ‘자동결제 은폐 환불거부 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 가입·결제 정리 ② 자동결제 은폐·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 카드 항변·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 밀키트 구독 자동결제 환불거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·자동결제 은폐·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입·결제 정리</strong> — 무료 체험 광고·가입 화면·결제·약정 내역 정리.</li>\n<li><strong>② 자동결제 은폐·기망</strong> — 자동결제 전환·약정·해지 조건을 제대로 알렸는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 동의 없이 자동결제된 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 카드 항변·환급</strong> — 신용카드 항변권·결제 취소·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 결제 착오와 달리, 무료 체험을 강조하면서 자동결제 전환·약정 같은 핵심 조건을 숨기거나 동의 없이 계속 결제했는지가 판단의 분기점입니다. 가입 화면·광고 캡처와 결제 내역, 해지 거부 정황, 다른 소비자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·결제 자료 보존 (즉시)</strong> — 무료 체험 광고·가입 화면·약정·결제·문자 내역 캡처 보존.</li>\n<li><strong>2단계 — 자동결제 은폐 입증 (즉시)</strong> — 동의 없는 결제·숨겨진 해지 메뉴·해지 거부 공지를 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·해지 요구 (병행)</strong> — 신용카드사 결제 취소·항변권 행사와 자동결제 해지를 신속히 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 한국소비자원 피해구제·민사 반환·부당이득 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">밀키트 구독 자동결제 환불거부 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가입·자동결제·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>무료 체험·할인 광고·랜딩 페이지 캡처 (가입 조건)</strong></li>\n<li><strong>가입 화면·약관·동의 항목 캡처 (계약 내용)</strong></li>\n<li><strong>매월 자동결제·카드·계좌 내역 (피해 금액)</strong></li>\n<li><strong>해지 시도·숨겨진 해지 메뉴 화면 기록</strong></li>\n<li><strong>해지·환불 거부·위약금 청구 안내 기록</strong></li>\n<li><strong>업체·상호·사업자등록·고객센터 정보</strong></li>\n<li><strong>다른 소비자의 동일 피해·후기 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무료 체험을 강조한 광고와 가입 화면에서 자동결제 전환·약정·해지 조건이 어떻게 표시됐는지를 캡처해두면 자동결제 은폐를 다투는 데 도움이 됩니다. 동의 없이 결제된 내역과 해지를 시도했는데도 거부된 정황, 다른 소비자의 동일 피해를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자동결제 고지</strong> — 자동결제 전환·약정을 명확히 알렸는지.</li>\n<li><strong>동의 여부</strong> — 정기결제에 실제로 동의했는지.</li>\n<li><strong>해지 방해</strong> — 해지 메뉴를 숨기거나 방해했는지.</li>\n<li><strong>편취액</strong> — 동의 없이 결제된 금액 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 상호·사업자·결제대행사로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (정기구독·자동결제 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 대금 편취와 별개 죄의 성립',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 의뢰받은 대로 업무를 진행하지 않았음에도 관련 비용을 계속적으로 청구·수령해 대금을 편취하고, 같은 방법으로 위계로써 상대방의 업무를 방해한 사안에서, 기망하여 대금을 교부받은 사기죄와 위계에 의한 업무방해죄는 보호법익·구성요건적 행위의 양태·기수 시기 등이 서로 달라 별개로 성립하고 실체적 경합관계에 있다고 보았습니다. 어느 한 죄가 다른 죄의 불법과 책임을 모두 포함하지 않는 이상 불가벌적 수반행위로 흡수되지 않는다고 판시했습니다. 자동결제를 숨기고 대금을 계속 받아온 사안을 살펴볼 때에도, 기망으로 비용을 청구·수령했는지를 기준으로 편취에 해당하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '무료 체험 가장·자동결제 은폐 + 동의 없는 결제 + 환불 거부 결합 시 자동결제 은폐 환불거부 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '약관에 자동결제가 적혀 있으면 사기가 아닌가요?',
        answer:
          '<strong>핵심 조건을 알아보기 어렵게 숨겼는지·동의를 받았는지가 핵심인 영역입니다.</strong> 가입 화면과 광고 표시 방식을 캡처하세요.',
      },
      {
        question: '밀키트를 몇 번 받았는데도 환불되나요?',
        answer:
          '<strong>받은 분을 제외한 동의 없는 결제분 환급을 검토할 수 있는 영역입니다.</strong> 수령 내역과 결제 내역을 분리해 정리하세요.',
      },
      {
        question: '카드사로 결제를 막을 수 있나요?',
        answer:
          '<strong>신용카드 항변권·결제 취소로 자동결제를 다툴 수 있는 영역입니다.</strong> 결제 방식과 자동결제 등록을 확인하세요.',
      },
      {
        question: '해지 버튼이 안 보이게 숨겨져 있어요.',
        answer:
          '<strong>해지 방해 정황은 기망·부당 결제 다툼의 단서인 영역입니다.</strong> 해지 시도 화면을 단계별로 캡처하세요.',
      },
      {
        question: '다른 사람도 같은 피해를 본 것 같아요.',
        answer:
          '<strong>다수 소비자의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 후기·단체 채팅·민원 사례를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '구독 자동연장 은폐 추적', href: '/guide/fraud/fraud-subscription-auto-renewal-concealed-track' },
      { label: '학원 수강료 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '헬스장 양도 회원권 환불 추적', href: '/guide/fraud/fraud-gym-transfer-membership-refund-track' },
      { label: '보험 모집인 설명 오인 환불', href: '/guide/fraud/fraud-insurance-broker-misexplain-refund' },
    ],
  },

  // ─── 4. fraud-influencer-groupbuy-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-influencer-groupbuy-nondelivery-track',
    keyword: '인플루언서 공동구매 미배송 기망 사기',
    questionKeyword: 'SNS 인플루언서가 ‘한정 수량 공동구매, 마감 임박, 선입금 순으로 발송한다’며 진행한 공동구매를 믿고 선결제로 큰돈을 보냈는데, 약속한 발송일이 지나도 물건이 오지 않았어요. 처음엔 ‘물량이 밀렸다, 곧 보낸다’며 미루더니 점점 답이 없고, 결국 계정을 비공개로 돌리거나 댓글·문의를 막고 잠적했어요. 알고 보니 애초에 보낼 물건이나 발송할 의사 없이 선입금만 모은 정황이고 다른 참여자도 같이 못 받았는데, 이런 인플루언서 공동구매 미배송 기망을 사기로 신고하고 보낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '인플루언서 공동구매 미배송 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인플루언서 공동구매 미배송 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '마감 임박 공동구매를 믿고 선입금했는데 미배송·잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·블로그 인플루언서가 ‘한정 수량 공동구매다, 마감이 임박했다, 선입금 순서대로 빠르게 발송한다, 믿고 사도 된다’며 진행한 공동구매를 보고, 평소 그 인플루언서를 신뢰해온 터라 좋은 기회를 놓칠까 봐 서둘러 선결제·계좌이체로 적지 않은 돈을 보낸 분의 상황입니다. 그런데 약속한 발송 예정일이 지나도 물건이 도착하지 않았고, 처음에는 ‘주문이 폭주해 물량이 밀렸다, 며칠만 더 기다려달라, 곧 송장 번호를 올리겠다’며 차일피일 미루더니, 점점 답변이 느려지다 끝내 계정을 비공개로 돌리거나 댓글·DM·문의 채널을 막고 잠적해, 보낸 돈도 물건도 받지 못하게 되어 막막하실 거예요. 알고 보니 애초에 보낼 물건을 확보하거나 발송할 의사·능력 없이 선입금만 모은 정황이고, 같은 공동구매에 참여한 다른 사람들도 똑같이 물건을 못 받고 환불도 거부당했다면 단순 배송 지연이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 물건을 보낼 의사·능력이 없는데도 발송을 약속하고 선입금을 받았다면 기망행위로 평가될 여지가 있는 영역이고, 전기통신을 이용한 거래에서 발생한 경우 관련 특별법의 적용도 함께 검토될 수 있는 영역입니다. 판례는 전기통신금융사기의 처벌 범위를 확대·강화하는 방향으로 관련 법이 개정되었고, 종래 처벌 대상 행위가 개정으로 처벌되지 않게 된 것이 아니라고 본 사례 흐름이 있는 영역으로, 거래 당시의 발송 의사·능력을 종합해 편취 여부를 가려 다툴 여지가 있습니다. 발송 가장·선입금 유도 + 미배송 + 잠적·환불 거부 결합은 ‘공동구매 미배송 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 발송 의사·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 인플루언서 공동구매 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·발송 의사·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 공동구매 게시물·마감 안내·선입금 송금 내역 정리.</li>\n<li><strong>② 발송 의사·기망</strong> — 물건을 확보·발송할 의사·능력이 있었는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선입금·배송비 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 물건을 보낼 의사·능력 없이 발송을 약속하고 선입금만 모았는지가 판단의 분기점입니다. 공동구매 게시물·마감 안내와 미배송·잠적 정황, 다른 참여자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 공동구매 게시물·마감 안내·선입금 송금·DM 내역 캡처 보존.</li>\n<li><strong>2단계 — 미배송·잠적 입증 (즉시)</strong> — 발송 약속·지연 변명·계정 비공개·문의 차단 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">인플루언서 공동구매 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·발송 의사·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>공동구매 게시물·마감 임박·발송 약속 캡처 (거래 조건)</strong></li>\n<li><strong>주문·옵션·수량·약정 DM (계약 내용)</strong></li>\n<li><strong>선입금·배송비 송금 내역 (피해 금액)</strong></li>\n<li><strong>발송 지연 변명·송장 미제공 기록</strong></li>\n<li><strong>계정 비공개·문의 차단·잠적 정황 자료</strong></li>\n<li><strong>인플루언서·판매자·계좌 정보</strong></li>\n<li><strong>다른 참여자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 마감 임박·발송 순서를 강조한 게시물과 선입금 후 발송이 이행되지 않은 정황, 계정 비공개·문의 차단으로 잠적한 흐름을 시간순으로 정리하면 발송 의사 부재를 다투는 데 도움이 됩니다. 같은 공동구매에서 다른 참여자도 미배송을 겪은 정황을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>발송 의사</strong> — 물건을 보낼 의사·능력이 있었는지.</li>\n<li><strong>선입금 유도</strong> — 마감 임박·선착순으로 선입금을 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 배송 지연인지 처음부터 선입금만 노렸는지.</li>\n<li><strong>편취액</strong> — 선입금·배송비 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 인플루언서·판매자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·공동구매 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기 처벌 범위의 확대',
        summary:
          '대법원 2024도7516(대법원, 2024.09.27 선고) 영역에서 법원은 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법이 처벌 범위를 확대하고 법정형을 강화하는 방향으로 개정되었고, 종래 처벌 대상이던 행위가 개정으로 범죄를 구성하지 않게 되어 형이 폐지된 것은 아니라고 보았습니다. 개정법이 대면편취형·출금형 등을 정의에 포함하는 등 처벌을 강화한 취지와 문언을 종합하면, 개정 전 행위에 대한 가벌성이 사라진 것이 아니라고 판시했습니다. 전기통신을 이용해 선입금을 받고 물건을 보내지 않은 공동구매 사안을 살펴볼 때에도, 거래 당시의 발송 의사·능력과 거래 방식을 종합해 사기죄 성립 여부와 관련 특별법 적용을 가려 검토해볼 수 있습니다.',
        takeaway: '발송 가장·선입금 유도 + 미배송 + 잠적 결합 시 공동구매 미배송 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 배송이 늦은 것 아닌가요?',
        answer:
          '<strong>물건을 보낼 의사·능력 없이 선입금만 모았는지가 핵심인 영역입니다.</strong> 발송 약속과 미배송·잠적 정황을 확보하세요.',
      },
      {
        question: '인플루언서가 ‘나도 업체에 속았다’고 해요.',
        answer:
          '<strong>중간 판매자도 발송 의사·능력을 따져 책임을 가리는 영역입니다.</strong> 거래 구조와 자금 흐름을 정리하세요.',
      },
      {
        question: '계정을 비공개로 돌리고 잠적했어요.',
        answer:
          '<strong>잠적·문의 차단은 편취 범의를 의심할 단서인 영역입니다.</strong> 비공개 전후 캡처와 송금 기록을 보존하세요.',
      },
      {
        question: '소액인데도 신고가 되나요?',
        answer:
          '<strong>소액·다수 피해도 합쳐 신고를 검토할 수 있는 영역입니다.</strong> 다른 참여자 피해를 모아 함께 접수하세요.',
      },
      {
        question: '다른 참여자도 같이 못 받았어요.',
        answer:
          '<strong>다수 참여자의 동일 미배송은 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅과 환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '인플루언서 홍보비 잠적 추적', href: '/guide/fraud/fraud-influencer-promotion-fee-vanish-track' },
      { label: '크라우드펀딩 리워드 미배송 추적', href: '/guide/fraud/fraud-crowdfunding-reward-nondelivery-track' },
      { label: '온라인몰 선결제 미배송 추적', href: '/guide/fraud/fraud-online-mall-nondelivery-prepayment-track' },
      { label: '쇼핑몰 선입금 미배송 추적', href: '/guide/fraud/fraud-shopping-mall-prepay-nondelivery-track' },
    ],
  },

  // ─── 5. fraud-overseas-realestate-development-fake-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-realestate-development-fake-investment-track',
    keyword: '해외 부동산 개발 허위 투자 기망 사기',
    questionKeyword: '해외 부동산 개발 업체·브로커가 ‘동남아·해외 리조트·분양 개발 사업에 투자하면 확정 수익과 시세 차익이 보장된다, 인허가도 끝났고 곧 착공한다’며 투자금을 모았는데, 그 말을 믿고 큰돈을 송금했어요. 그런데 알고 보니 사업 부지·인허가·착공이 전부 허위이거나 실재하지 않았고, 업체는 수익 지급을 미루다 사무실을 닫고 연락을 끊었어요. 처음부터 개발 사업 자체가 없는데 있는 것처럼 꾸며 투자금만 노린 정황이고 다른 투자자도 같이 당했는데, 이런 해외 부동산 개발 허위 투자 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '해외 부동산 허위 개발 투자 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '해외 부동산 개발 허위 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '확정 수익·인허가 완료를 믿고 해외 부동산 개발에 투자했는데 사업이 허위로 드러나고 업체가 잠적했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 부동산 개발 업체·투자 설명회·브로커가 ‘동남아 리조트·분양·택지 개발 사업에 투자하면 연 몇 %의 확정 수익과 큰 시세 차익이 보장된다, 현지 인허가와 부지 매입이 이미 끝났고 곧 착공한다, 원금도 안전하다’는 솔깃한 말로 투자자를 모으고, 그럴듯한 사업계획서·조감도·현지 사진을 보여주기에 믿고 노후 자금·목돈을 송금한 분의 상황입니다. 그런데 막상 약속한 시점이 지나도 수익은 들어오지 않았고, 확인해보니 사업 부지·인허가·착공·시행사 자체가 허위이거나 실재하지 않았으며, 업체는 ‘현지 사정으로 일정이 미뤄졌다, 곧 지급된다’며 미루다 사무실을 닫고 담당자가 연락을 끊은 채 잠적해, 보낸 돈을 회수하지 못하게 되어 막막하실 거예요. 처음부터 개발 사업 실체가 없는데도 있는 것처럼 꾸며 여러 투자자에게서 자금만 모은 정황이고, 같은 설명을 듣고 투자한 다른 사람들도 똑같이 당했다면 단순 사업 실패가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 사업 부지·인허가·수익 보장 같은 핵심 사정을 허위로 꾸며 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 편취된 금전이 송금·이체된 경우 그 금전을 받은 사람이 편취 사실에 악의 또는 중대한 과실이 없으면 법률상 원인이 인정될 수 있으나, 그렇지 않다면 부당이득 반환 등 회복 절차를 검토할 수 있다고 본 사례 흐름이 있는 영역으로, 자금 흐름과 수취인의 인식을 함께 살펴 회복 방법을 가려 다툴 여지가 있습니다. 사업 실체 가장·인허가·수익 허위 + 투자금 수령 + 잠적·지급 거부 결합은 ‘해외 부동산 허위 개발 투자 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 사업 실체·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 부동산 개발 허위 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·사업 실체·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 확정 수익·인허가 홍보·투자 계약·송금 내역 정리.</li>\n<li><strong>② 사업 실체·기망</strong> — 사업 부지·인허가·착공·시행사가 실재했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 송금한 투자 원금·부대 비용 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·부당이득 반환·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 사업 실패와 달리, 사업 부지·인허가·수익 보장 같은 핵심 사정을 허위로 꾸며 투자금을 받았는지가 판단의 분기점입니다. 확정 수익·인허가를 강조한 홍보와 사업 실체 부재 정황, 자금 흐름·다른 투자자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 확정 수익·인허가 홍보·사업계획서·투자 계약·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 사업 실체 부재 입증 (즉시)</strong> — 현지 부지·인허가·착공·시행사 확인 불가, 수익 지급 불이행 정황을 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 원금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·부당이득 반환·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 부동산 개발 허위 투자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·사업 실체·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>확정 수익·인허가 완료 홍보·설명회 자료 (투자 조건)</strong></li>\n<li><strong>사업계획서·조감도·투자 계약·약정 (계약 내용)</strong></li>\n<li><strong>투자 원금·부대 비용 송금 내역 (피해 금액)</strong></li>\n<li><strong>현지 부지·인허가·시행사 확인 시도·불가 기록</strong></li>\n<li><strong>수익 지급 불이행·잠적·사무실 폐쇄 정황</strong></li>\n<li><strong>업체·브로커·시행사·계좌 정보</strong></li>\n<li><strong>다른 투자자·단체 채팅·환불 거부 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 확정 수익·인허가 완료를 강조한 홍보·설명회 자료와, 현지 부지·인허가·시행사가 실재하지 않은 정황을 함께 모으면 사업 실체 가장 기망을 다투는 데 도움이 됩니다. 자금이 어느 계좌로 흘러갔는지 송금 흐름을 보존하고, 같은 설명을 들은 다른 투자자의 동일 피해를 정리하면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사업 실체</strong> — 부지·인허가·착공·시행사가 실재했는지.</li>\n<li><strong>수익 보장 허위</strong> — 확정 수익·원금 보장이 허위였는지.</li>\n<li><strong>편취 범의</strong> — 단순 사업 실패인지 처음부터 자금만 노렸는지.</li>\n<li><strong>자금 흐름·수취인 인식</strong> — 자금을 받은 사람의 악의·중과실 여부.</li>\n<li><strong>업체 특정</strong> — 업체·브로커·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (투자·계약 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 금전의 송금과 부당이득 반환',
        summary:
          '대법원 2024다216187(대법원, 2024.06.27 선고) 영역에서 법원은 부당이득제도가 법률상 원인 없는 재산상 이득을 공평과 정의의 이념에 따라 반환하게 하는 제도임을 전제로, 편취된 금전이 채무 변제 등에 사용된 경우 그 금전을 받은 사람이 편취 사실에 악의 또는 중대한 과실이 없다면 그 취득은 피해자에 대한 관계에서도 법률상 원인이 있다고 보았습니다. 여기서 중대한 과실이란 조금만 주의했다면 편취된 금전임을 쉽게 알 수 있었음에도 일반인에게 요구되는 주의의무를 현저히 위반한 것을 말하고, 그 악의·중과실에 대한 증명책임은 피해자에게 있다고 판시했습니다. 허위 개발 사업으로 투자금을 송금받아 흘려보낸 사안을 살펴볼 때에도, 자금이 흘러간 경로와 수취인의 인식을 함께 살펴 사기 책임과 부당이득 반환 등 회복 방법을 가려 검토해볼 수 있습니다.',
        takeaway: '사업 실체 가장·인허가·수익 허위 + 투자금 수령 + 잠적 결합 시 해외 부동산 허위 개발 투자 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 사업이 잘 안 된 것 아닌가요?',
        answer:
          '<strong>부지·인허가·수익 보장 같은 핵심 사정을 허위로 꾸몄는지가 핵심인 영역입니다.</strong> 확정 수익·인허가 홍보와 사업 실체 부재 정황을 확보하세요.',
      },
      {
        question: '인허가가 끝났다더니 실제로는 없었어요.',
        answer:
          '<strong>인허가·부지·시행사 실재 여부가 기망 판단의 단서인 영역입니다.</strong> 현지 확인 시도와 불가 기록을 모으세요.',
      },
      {
        question: '해외 사업이라 처벌·환급이 어렵나요?',
        answer:
          '<strong>국내에서 모집·송금했다면 국내 신고·환급을 검토할 수 있는 영역입니다.</strong> 송금·홍보·계약 자료를 정리해 접수하세요.',
      },
      {
        question: '돈이 다른 계좌로 옮겨졌다는데 돌려받나요?',
        answer:
          '<strong>자금을 받은 사람의 악의·중과실 여부에 따라 부당이득 반환을 검토하는 영역입니다.</strong> 자금 흐름과 수취 경위를 정리하세요.',
      },
      {
        question: '다른 투자자도 같이 당한 것 같아요.',
        answer:
          '<strong>다수 투자자의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 설명회 참석자·단체 채팅·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외 휴양지 부동산 허위 매물 추적', href: '/guide/fraud/fraud-overseas-vacation-rental-property-fake-track' },
      { label: '투자 플랫폼 허위 수익률 표시 추적', href: '/guide/fraud/fraud-investment-platform-yield-fake-display-track' },
      { label: '스타트업 엔젤투자 허위 추적', href: '/guide/fraud/fraud-startup-angel-investment-fake-track' },
      { label: '미술품 분할소유 투자 추적', href: '/guide/fraud/fraud-art-investment-fractional-ownership-track' },
    ],
  },

  // ─── 6. fraud-business-partnership-profit-distribution-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-partnership-profit-distribution-falsely-accused-defense',
    keyword: '동업 수익 분배 사기 고의 무고 방어',
    questionKeyword: '지인과 동업으로 사업을 하면서 함께 자금을 대고 운영했는데, 매출·비용 정산과 수익 분배를 두고 의견이 갈리던 중 상대가 ‘처음부터 수익을 빼돌리려고 동업을 핑계로 돈을 가로챘다’며 저를 사기로 고소했어요. 저는 실제로 사업을 운영했고 장부·정산 내역도 있으며 손실이 나 분배할 수익이 적었던 것뿐이라고 생각하는데, 정산 다툼이 한순간에 사기 고의로 몰려 너무 억울해요. 동업 경위와 자금 사용 내역이 분명히 있는데, 이렇게 동업 수익 분배가 사기 고의로 고소된 상황에서 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '동업 수익 분배 편취 고의·정산분쟁 구별 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업 수익 분배 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '함께 운영한 동업의 정산 다툼이 사기 고소로 번져 억울하다면, 편취 고의 판단 시점과 민사 정산분쟁 구별 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·친구·동료와 동업으로 가게나 사업을 시작하면서 서로 자금을 대고 함께 운영해왔는데, 시간이 지나 매출·비용 정산과 수익 분배를 두고 의견이 갈리고, 손실이 났거나 재투자로 나눌 돈이 적어지자 상대가 ‘처음부터 수익을 빼돌릴 작정으로 동업을 핑계 삼아 내 투자금을 가로챘다’며 저를 사기로 고소해, 한순간에 사기범으로 몰린 분의 상황입니다. 저는 실제로 사업장을 운영하고 거래처와 거래했으며 장부·정산 내역·계좌 흐름도 있고, 다만 경기·매출 악화나 비용 증가로 분배할 수익이 적었던 것뿐이라고 생각하는데, 동업자 사이의 정산·손익 다툼이라는 민사적 사안이 형사 사기로 비화되어 너무 억울하고 막막하실 거예요. 동업 자금이 섞여 있고 명확한 약정서가 없으면 ‘처음부터 편취였다’는 일방적 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 동업 합의 경위와 자금의 실제 사용처, 정산 내역과 손익 발생 경위를 차분히 정리해 편취 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 편취의 고의가 인정되어야 하고, 그 판단은 행위 당시를 기준으로 하는 영역입니다. 판례는 사기죄의 편취 범의는 자백이 없는 한 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 하고, 거래에서 서로 지켜야 할 신의성실의 의무를 저버리는 적극적·소극적 기망이 있었는지를 가려야 하며, 단순한 민사상 채무불이행이나 정산 다툼만으로 곧바로 편취 고의를 인정할 수는 없다고 본 사례 흐름이 있는 영역입니다. 따라서 동업 운영의 실질과 자금 사용 내역, 손익 발생 경위를 종합해 편취 고의가 있었는지를 가려 다툴 여지가 있는 영역입니다. 동업 운영 실질 + 자금 사용·정산 내역 + 손익에 따른 분배 결합은 ‘편취 고의 부재·정산분쟁 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 동업·거래 경위 정리 ② 자금 사용·정산 내역 ③ 기망·고지 여부 ④ 편취 고의 ⑤ 정산분쟁 구별·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업 수익 분배 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·자금 사용·기망 여부·편취 고의·정산분쟁 구별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동업·거래 경위 정리</strong> — 동업 합의·출자·역할·운영 경위 정리.</li>\n<li><strong>② 자금 사용·정산 내역</strong> — 출자금·매출·비용·정산이 실제로 어떻게 쓰였는지 정리.</li>\n<li><strong>③ 기망·고지 여부</strong> — 수익·손익·자금 사정을 사실대로 알렸는지 검토.</li>\n<li><strong>④ 편취 고의</strong> — 행위 당시 기준으로 편취의 범의가 인정되는지 검토.</li>\n<li><strong>⑤ 정산분쟁 구별·방어</strong> — 손익·정산 다툼이 민사 분쟁에 그치는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 출자금을 빼돌릴 의사로 동업을 가장했는지(편취 고의), 아니면 실제 운영 중 손익·정산을 두고 의견이 갈린 것(정산분쟁)인지가 판단의 분기점입니다. 동업 운영의 실질과 자금의 실제 사용처, 손익 발생 경위를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동업·거래 자료 보존 (즉시)</strong> — 동업 합의·출자·운영·거래·정산 자료를 시간순으로 보존.</li>\n<li><strong>2단계 — 자금 사용·정산 정리 (즉시)</strong> — 출자금·매출·비용·분배가 실제로 어떻게 쓰였는지 계좌·장부로 정리.</li>\n<li><strong>3단계 — 편취 고의·손익 검토 (병행)</strong> — 손익 악화·재투자 등 분배 감소의 경위와 기망 부재 정황을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정산분쟁 구별·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업 수익 분배 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·자금 사용·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 합의·출자·역할 약정·대화 (거래 경위)</strong></li>\n<li><strong>출자금·매출·비용·정산 계좌·장부 내역 (자금 흐름)</strong></li>\n<li><strong>거래처·세금계산서·운영 자료 (운영 실질)</strong></li>\n<li><strong>수익·손익·자금 사정 공유·고지 기록 (고지 내용)</strong></li>\n<li><strong>손익 악화·재투자 등 분배 감소 경위 자료</strong></li>\n<li><strong>정산·분배 협의·제안 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동업 자금이 실제 사업 운영·거래에 쓰였음을 계좌·장부·거래처 자료로 정리하면 출자금을 빼돌린 편취가 아니라 통상의 동업 운영이었음을 다투는 데 도움이 됩니다. 수익·손익·자금 사정을 공유한 기록과 분배가 줄어든 경위를 함께 모아 정산분쟁과의 구별을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 행위 당시 출자금을 편취할 범의가 있었는지.</li>\n<li><strong>기망·고지</strong> — 수익·손익·자금 사정을 사실대로 알렸는지.</li>\n<li><strong>운영 실질</strong> — 자금이 실제 사업 운영에 쓰였는지.</li>\n<li><strong>정산분쟁 구별</strong> — 손익·정산 다툼이 민사 분쟁에 그치는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 편취 범의의 판단',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 사기죄의 기망은 거래에서 서로 지켜야 할 신의와 성실의 의무를 저버리는 모든 적극적·소극적 행위를 말하고, 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서도 일반거래의 경험칙상 상대방이 그 사실을 알았더라면 거래하지 않았을 것이 명백한 사정을 고지하지 않는 것을 말한다고 보았습니다. 또 충분한 담보를 제공하고 돈을 빌린 경우에는 특별한 사정이 없는 한 변제 의사·능력이 없었다고 볼 수 없으나, 담보가치 평가에 중요한 사정을 알리지 않은 등의 사정이 있으면 편취 범의가 인정될 수 있다고 판시했습니다. 동업 정산 다툼이 사기로 고소된 사안을 살펴볼 때에도, 행위 당시 기망·편취의 범의가 있었는지와 단순 정산·손익 다툼인지를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '동업 운영 실질 + 자금 사용·정산 내역 + 손익에 따른 분배 결합 시 편취 고의 부재·정산분쟁 구별 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '동업하다 손해가 났는데 무조건 사기인가요?',
        answer:
          '<strong>행위 당시 출자금을 편취할 범의가 있었는지가 핵심인 영역입니다.</strong> 자금이 실제 운영에 쓰인 내역을 정리하세요.',
      },
      {
        question: '약정서를 안 써둬서 불리한가요?',
        answer:
          '<strong>약정서가 없어도 계좌·장부·대화로 동업 실질을 다툴 수 있는 영역입니다.</strong> 출자·운영·정산 기록을 모으세요.',
      },
      {
        question: '정산 다툼인데 형사로 고소됐어요.',
        answer:
          '<strong>손익·정산 다툼이 민사 분쟁에 그치는지가 구별의 핵심인 영역입니다.</strong> 손익 발생 경위와 분배 협의 기록을 정리하세요.',
      },
      {
        question: '수익을 적게 나눈 게 편취로 보이나요?',
        answer:
          '<strong>분배가 줄어든 경위와 자금 사정 공유 여부가 단서인 영역입니다.</strong> 손익 악화·재투자 경위를 자료로 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>동업 경위·자금 사용·정산에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '동업 수익 분배 빙자 무고 방어', href: '/guide/fraud/fraud-joint-business-profit-distribution-pretext-falsely-accused-defense' },
      { label: '동업 자금 대여 무고 방어', href: '/guide/fraud/fraud-business-fund-loan-falsely-accused-defense' },
      { label: '동업 투자 빙자 차용 무고 방어', href: '/guide/fraud/fraud-business-investment-pretext-borrowing-falsely-accused-defense' },
      { label: '동업 정산 무고 방어', href: '/guide/fraud/fraud-business-settlement-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-gym-pt-posture-correction-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-pt-posture-correction-touch-report-track',
    keyword: '헬스장 PT 자세 교정 빙자 추행 신고',
    questionKeyword: '헬스장에서 개인 PT를 받던 중, 트레이너가 ‘자세를 교정해준다, 근육 위치를 잡아준다’며 가슴 주변·엉덩이·허벅지 안쪽 등 운동 동작과 무관한 부위까지 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 교정 과정인가 싶어 참았지만 갈수록 접촉이 노골적이고 운동과 무관한 부위에 집중되며, 다른 회원도 비슷한 일을 겪었다는 말을 들으니 단순 교정이 아니라 추행 같다는 생각이 들어요. 이런 헬스장 PT 자세 교정 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 PT 자세 교정 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 자세 교정 빙자 추행 신고 — 5단계 점검 | 로앤가이드',
      description:
        '자세 교정을 빙자해 민감한 부위에 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·피트니스에서 개인 PT를 받던 중, 트레이너가 ‘자세를 교정해준다, 근육 쓰는 위치를 잡아준다, 코어를 눌러본다’는 명목으로 가슴 주변·엉덩이·허벅지 안쪽·골반 등 운동 동작과 직접 관련 없는 민감한 부위에까지 필요 이상으로 손을 대거나, 뒤에서 몸을 바짝 붙여 잡아주는 척하며 신체를 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘PT가 원래 자세를 많이 잡아주나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 운동과 무관한 부위에 집중되며, 한적한 시간대나 시선이 닿지 않는 구석 기구에서 유독 그러는 듯하고, 다른 회원도 비슷한 일을 겪었다는 이야기까지 들으니, 단순한 자세 교정이 아니라 교정을 빙자한 추행은 아닌지 의심되고, 신고해도 ‘운동 지도 과정에서 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 건강하려고 다닌 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 자세 교정을 가장했더라도 운동과 무관한 민감 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄에서 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수했으나 결과에 이르지 못하면 미수가 성립하고, 이는 폭행행위 자체가 추행으로 인정되는 이른바 기습추행에도 적용된다고 본 사례 흐름이 있는 영역으로, 교정을 빙자한 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 자세 교정 빙자 + 무관 부위 접촉 + 밀착·반복 결합은 ‘자세 교정 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 자세 교정 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 등록·결제·PT 형태·트레이너와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 운동과 무관한 민감 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 자세 교정 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 자세 교정과 달리, 운동과 무관한 민감 부위를 만지거나 필요 이상 밀착해 교정의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 회원의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — PT 형태·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 헬스장 CCTV·등록·결제·메시지·다른 회원의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 자세 교정 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>등록·결제·PT 프로그램 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>헬스장 CCTV·기구 위치·동선 확보 요청 자료</strong></li>\n<li><strong>트레이너와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 회원의 유사 경험·후기·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PT 중 접촉은 목격자가 적을 수 있으므로 등록·결제 기록, 직후 메시지, 다른 회원의 유사 경험으로 정황을 보강할 수 있습니다. 접촉이 운동과 무관한 민감 부위에 집중됐는지, 반복됐는지를 구체적으로 기록하면 자세 교정의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 운동과 무관한 부위 접촉·밀착인지.</li>\n<li><strong>교정 범주</strong> — 자세 교정상 자연스러운 접촉의 범위를 넘는지.</li>\n<li><strong>유형력 행사</strong> — 의사에 반하는 불법한 유형력이 있었는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행과 기습추행 미수의 성립',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄는 폭행·협박으로 항거를 곤란하게 한 뒤 추행하는 경우뿐 아니라 폭행행위 자체가 추행으로 인정되는 경우도 포함하고, 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없다고 보았습니다. 추행은 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하여 피해자의 성적 자유를 침해하는 행위로, 피해자의 의사·관계·경위·행위 태양·주위 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 또 추행의 고의로 의사에 반하는 유형력을 행사해 실행에 착수했으나 결과에 이르지 못하면 미수가 성립하고 이는 기습추행에도 적용된다고 보았습니다. 자세 교정을 빙자한 접촉 사안을 살펴볼 때에도, 의사에 반하는 유형력의 행사가 있었는지와 접촉이 교정의 범주를 넘어 성적 자유를 침해하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '자세 교정 빙자 + 무관 부위 접촉 + 밀착·반복 결합 시 자세 교정 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 잡아주다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>교정의 범주를 넘어 성적 자유를 침해하는 접촉인지·의사에 반하는 유형력이 있었는지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 운동 지도인 줄 알고 참았어요.',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '운동 중이라 목격자가 없어요.',
        answer:
          '<strong>CCTV·등록·결제·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '다른 회원도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·후기·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 회원의 진술을 확보하세요.',
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
      { label: '헬스장 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '필라테스 강사 자세 교정 추행 신고', href: '/guide/sex-crime/sex-crime-pilates-instructor-posture-correction-touch-report-track' },
      { label: '수영 강습 자세 교정 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-lesson-posture-correction-touch-report-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-taxi-back-seat-sleeping-passenger-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-back-seat-sleeping-passenger-touch-report-track',
    keyword: '택시 뒷좌석 잠든 승객 추행 신고',
    questionKeyword: '늦은 밤 술을 마시고 택시 뒷좌석에서 깜빡 잠이 들거나 정신이 흐릿한 상태로 가던 중, 기사가 신호 대기나 빈 길에서 뒤로 손을 뻗어 허벅지·가슴 등을 만지는 등 잠들어 저항하지 못하는 틈을 타 추행한 것 같아요. 중간에 인기척에 잠깐 깼을 때의 느낌과 내릴 때의 위치, 옷매무새 등으로 추행을 당했다는 생각이 드는데, 잠들어 있어 정확히 기억나지 않는 부분이 있어 신고해도 인정될지 막막해요. 이런 택시 뒷좌석 잠든 승객 추행을 신고하려면 어떤 절차로 진행되는지, 잠든 상태에서 당한 경우 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '택시 잠든 승객 심신상실·항거불능 이용 준강제추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '택시 잠든 승객 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '술에 취해 잠든 사이 택시 기사에게 추행을 당한 것 같다면, 준강제추행 신고 절차와 증거 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「늦은 밤 술을 마신 뒤 택시를 타고 뒷좌석에서 깜빡 잠이 들거나 술기운에 정신이 흐릿해진 상태로 귀가하던 중, 기사가 신호 대기·빈 도로·인적 드문 구간에서 뒤로 손을 뻗어 허벅지·가슴·엉덩이 등을 만지는 등, 잠들어 제대로 저항하거나 거부하지 못하는 틈을 이용해 추행한 것으로 의심되는 상황을 겪은 분의 경우입니다. 중간에 인기척이나 이상한 느낌에 잠깐 깼을 때의 손의 위치, 내릴 때의 좌석 위치·옷매무새의 흐트러짐, 묘하게 돌아간 경로 등으로 ‘잠든 사이 추행을 당한 것 같다’는 생각이 들지만, 술에 취해 잠들어 있어 일부 장면이 또렷하지 않거나 시간·구간이 정확히 기억나지 않는 부분이 있어, 신고해도 ‘기억이 분명치 않다’는 이유로 받아들여지지 않을까 봐 막막하실 거예요. 안전하게 귀가하려고 탄 택시에서 겪은 일이라 더 답답하고 불안하셨을 거예요.」 형법 제299조는 사람의 심신상실 또는 항거불능 상태를 이용하여 추행한 경우를 준강제추행죄로 정해 처벌하는 영역입니다. 술에 취해 잠들었거나 의식이 흐려 정상적인 판단·대응을 할 수 없는 상태를 이용한 접촉이라면, 항거불능·심신상실 상태를 이용한 준강제추행으로 평가될 여지가 있는 영역입니다. 판례는 피해자가 깊은 잠에 빠져 있거나 술 등으로 일시적으로 의식을 잃은 상태, 또는 완전히 의식을 잃지는 않았더라도 정상적인 판단·대응·조절 능력을 행사할 수 없는 상태에 있었다면 준강제추행죄의 심신상실·항거불능에 해당할 수 있다고 본 사례 흐름이 있는 영역으로, 당시 음주·수면 상태와 정황을 종합해 항거불능 여부를 가려 다툴 여지가 있습니다. 음주·수면 상태 + 항거불능 이용 접촉 + 정황 부합 결합은 ‘심신상실·항거불능 이용 준강제추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·상태 정리 ② 접촉 부위·태양 ③ 항거불능·추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 뒷좌석 잠든 승객 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·항거불능 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·상태 정리</strong> — 탑승 시각·구간·음주·수면 상태와 기사와의 위치 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허벅지·가슴 등 접촉 부위·방식·시점 정리.</li>\n<li><strong>③ 항거불능·추행 해당성</strong> — 잠들어 저항하지 못하는 상태를 이용한 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 깨어 있을 때의 접촉과 달리, 술·수면으로 정상적인 판단·대응을 할 수 없는 상태를 이용했는지가 판단의 분기점입니다. 음주·수면 상태와 접촉 정황, 택시 운행 기록·블랙박스 등 객관 자료를 신속히 확보해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·상태 자료 보존 (즉시)</strong> — 탑승 시각·구간·음주·수면 상태·접촉 부위·시점을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 택시 블랙박스·운행 기록·카드·앱 호출 내역·동승자·당일·직후 메시지를 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 뒷좌석 잠든 승객 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·상태·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시각·구간·음주·수면 상태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·시점 기록 (행위 태양)</strong></li>\n<li><strong>택시 블랙박스·운행 기록 보존 요청 자료</strong></li>\n<li><strong>택시 호출 앱·카드 결제·차량 번호 내역</strong></li>\n<li><strong>동승자·마중 나온 사람 등 목격·정황 진술</strong></li>\n<li><strong>직후 옷매무새·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 블랙박스·운행 기록은 보관 기간이 짧으니 차량 번호·탑승 시각·구간을 특정해 경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 술·수면으로 정상적인 판단·대응이 어려운 상태였음을 음주 정황·메시지·동승자 진술로 보강하면 항거불능 상태를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항거불능 해당성</strong> — 술·수면으로 정상적인 판단·대응이 어려운 상태였는지.</li>\n<li><strong>추행 해당성</strong> — 잠든 틈을 이용한 의사에 반하는 접촉인지.</li>\n<li><strong>기억 단절</strong> — 블랙아웃·기억 단절이 진술 신빙성에 미치는 영향.</li>\n<li><strong>가해자 특정</strong> — 차량·운행 기록으로 기사를 특정할 수 있는지.</li>\n<li><strong>객관 정황</strong> — 블랙박스·동승자·직후 정황이 뒷받침되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 준강제추행죄의 심신상실·항거불능',
        summary:
          '대법원 2018도9781(대법원, 2021.02.04 선고) 영역에서 법원은 형법 제299조의 준강제추행죄는 정신적·신체적 사정으로 성적 자기방어를 할 수 없는 사람의 성적 자기결정권을 보호하는 것을 보호법익으로 하고, ‘심신상실’은 정신기능의 장애로 정상적인 판단능력이 없는 상태를, ‘항거불능’은 그 밖의 원인으로 반항이 절대적으로 불가능하거나 현저히 곤란한 상태를 의미한다고 보았습니다. 피해자가 깊은 잠에 빠져 있거나 술 등으로 일시적으로 의식을 잃은 상태, 또는 완전히 의식을 잃지는 않았더라도 정상적인 판단·대응·조절 능력을 행사할 수 없는 상태였다면 심신상실·항거불능에 해당할 수 있고, 단지 기억하지 못하는 블랙아웃과 의식을 상실한 상태는 구별해 판단해야 한다고 판시했습니다. 택시에서 잠든 사이 추행이 문제 된 사안을 살펴볼 때에도, 당시 음주·수면 상태와 정황을 종합해 항거불능 여부와 추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '음주·수면 상태 + 항거불능 이용 접촉 + 정황 부합 결합 시 심신상실·항거불능 이용 준강제추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '잠들어 정확히 기억이 안 나는데 신고할 수 있나요?',
        answer:
          '<strong>음주·수면 등 항거불능 상태와 정황으로도 다툴 수 있는 영역입니다.</strong> 깬 순간의 느낌·직후 정황을 구체적으로 정리하세요.',
      },
      {
        question: '술에 취했던 게 불리하게 작용하나요?',
        answer:
          '<strong>술로 정상적인 판단·대응이 어려운 상태는 오히려 항거불능 판단의 단서인 영역입니다.</strong> 음주 정황을 함께 정리하세요.',
      },
      {
        question: '택시 블랙박스로 다툴 수 있나요?',
        answer:
          '<strong>블랙박스·운행 기록이 접촉·경로 정황을 보여줄 수 있는 영역입니다.</strong> 차량 번호·시각을 특정해 빠르게 보존을 요청하세요.',
      },
      {
        question: '어느 택시였는지 특정할 수 있나요?',
        answer:
          '<strong>호출 앱·카드 결제·운행 기록으로 차량과 기사를 특정할 수 있는 영역입니다.</strong> 결제·호출 내역을 확보하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '택시 승객 기사 추행 신고', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
      { label: '심야 버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '회식 자리 강요 접촉 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-festival-dense-crowd-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-dense-crowd-touch-report-track',
    keyword: '축제 인파 밀집 틈탄 추행 신고',
    questionKeyword: '불꽃축제·콘서트·지역 축제처럼 사람이 빽빽한 곳에서 인파에 떠밀려 서 있던 중, 뒤·옆 사람이 밀집한 틈을 타 엉덩이·허벅지·허리에 손을 대거나 몸을 밀착해 비비는 등 명백히 의도적인 접촉을 해 너무 불쾌하고 수치스러웠어요. 처음엔 사람이 많아 떠밀려 닿은 건가 싶었지만 접촉이 계속되고 움직임이 노골적이라 인파를 틈탄 추행이라는 확신이 들었어요. 사람이 너무 많아 누가 그랬는지 특정하거나 그 자리에서 항의하기도 어려웠는데, 이런 축제 인파 밀집 틈탄 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '축제 인파 밀집 공중밀집장소 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 인파 밀집 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '축제 인파에 떠밀린 틈을 타 엉덩이·허벅지를 만지는 의도적 접촉을 당해 수치스러웠다면, 공중밀집장소 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「불꽃축제·콘서트·지역 축제·퍼레이드처럼 사람이 빽빽하게 모인 공간에서 인파에 떠밀려 옴짝달싹하기 어려운 채 서 있던 중, 바로 뒤·옆에 있던 사람이 밀집한 틈을 타 엉덩이·허벅지·허리·손등 등에 손을 대거나, 몸을 바짝 밀착해 비비는 등 단순한 떠밀림으로는 설명되지 않는 의도적인 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘사람이 많아 어쩌다 닿은 건가’ 싶어 자리를 조금 옮기거나 몸을 틀었는데도, 시간이 지나도 접촉이 계속되고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 인파를 틈탄 추행이라는 확신이 들었지만, 주위가 빽빽하고 어수선해 누가 그랬는지 특정하거나 큰 소리로 항의하기도 어려운 상황에서 당하고 나니, 신고해도 ‘사람 많은 데서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 축제에서 겪은 일이라 더 답답하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법은 대중교통수단·공연·집회 장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행한 경우를 처벌하는 영역입니다. 축제 인파처럼 공중이 밀집한 장소를 이용해 의사에 반해 엉덩이·허벅지 등을 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 공중밀집장소에서의 추행은 피해자에게 접근이 용이하고 명시적·적극적 저항이나 회피가 어려운 상황을 이용한 행위를 처벌하려는 취지이고, 그 죄가 기수에 이르기 위해 피해자가 성적 수치심·혐오감을 반드시 실제로 느껴야 하는 것은 아니라고 본 사례 흐름이 있는 영역으로, 인파를 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 인파 밀집 이용 + 의사에 반하는 접촉·밀착 + 반복·노골 결합은 ‘공중밀집장소 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 밀집 틈탄 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 축제명·장소·시간대·혼잡도·서 있던 위치 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허벅지·허리 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 공중밀집장소를 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 떠밀려 닿았다는 변명과 달리, 인파를 틈타 의사에 반해 엉덩이·허벅지를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 현장 CCTV·입장·결제 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 축제명·장소·시간대·위치·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 현장·주변 CCTV·입장·결제·교통 내역·동행자·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 밀집 틈탄 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>축제명·장소·시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>현장·주변 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장권·결제·교통카드 등 참석 입증 자료</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 축제 현장과 주변 CCTV는 보관 기간이 짧으니 장소·시간대를 특정해 경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 떠밀림으로 설명되지 않는 의도적 접촉이 자리를 옮긴 뒤에도 반복됐다는 점을 구체적으로 기록하면 공중밀집장소 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 인파를 틈탄 의사에 반하는 접촉·밀착인지.</li>\n<li><strong>공중밀집장소</strong> — 공중이 밀집한 장소를 이용했는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘떠밀려서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·목격으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공중밀집장소 추행의 의미와 기수',
        summary:
          '대법원 2015도7102(대법원, 2020.06.25 선고) 영역에서 법원은 공중밀집장소에서의 추행을 처벌하는 규정의 취지가, 도시화된 사회에서 다중이 출입하는 공개된 장소에서 추행 발생의 개연성과 처벌 필요성이 높아진 반면 피해자가 명시적·적극적으로 저항하거나 회피하기 어려운 상황을 이용한 추행에 대처하기 위한 것이라고 보았습니다. 여기서 추행은 일반인을 기준으로 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하여 성적 자기결정권을 침해하는 행위를 의미하고, 그 죄가 기수에 이르기 위해 행위자의 행위로 대상자가 성적 수치심·혐오감을 반드시 실제로 느껴야 하는 것은 아니라고 판시했습니다. 축제 인파를 틈탄 접촉이 문제 된 사안을 살펴볼 때에도, 공중이 밀집한 상황을 이용한 의사에 반하는 접촉이 추행에 해당하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '인파 밀집 이용 + 의사에 반하는 접촉·밀착 + 반복·노골 결합 시 공중밀집장소 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '떠밀려서 닿은 것뿐이라는데 추행인가요?',
        answer:
          '<strong>인파를 빌렸어도 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 떠밀림으로 설명되지 않는 접촉·반복 정황을 기록하세요.',
      },
      {
        question: '사람이 많아 누가 그랬는지 모르겠어요.',
        answer:
          '<strong>현장 CCTV·목격으로 가해자를 특정할 수 있는 영역입니다.</strong> 장소·시간대를 특정해 보존을 요청하세요.',
      },
      {
        question: '그 자리에서 항의하지 못했는데 신고할 수 있나요?',
        answer:
          '<strong>혼잡·당혹으로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '수치심을 실제로 못 느꼈어도 추행인가요?',
        answer:
          '<strong>객관적으로 추행에 해당하면 피해자가 실제로 느꼈는지와 무관하게 다툴 수 있는 영역입니다.</strong> 행위 자체의 태양을 정리하세요.',
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
      { label: '축제 인파 그루핑 추행 신고', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-report-track' },
      { label: '클럽·축제 인파 추행 추적', href: '/guide/sex-crime/sex-crime-club-festival-crowd-molestation-track' },
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
      { label: '축제 인파 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-track' },
    ],
  },

  // ─── 10. sex-crime-medical-checkup-pretext-touch-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-medical-checkup-pretext-touch-falsely-accused-defense',
    keyword: '진료 검진 빙자 추행 무고 방어',
    questionKeyword: '의료인으로서 환자를 진료·검진하면서 촉진·청진·시술 등 의학적으로 필요한 진찰 행위로 신체에 접촉했을 뿐인데, 환자가 ‘진료를 빙자해 추행했다’며 저를 성범죄로 고소했어요. 저는 진료상 반드시 필요한 검진이었고 통상의 진찰 범위였으며 추행할 의도가 전혀 없었다고 생각하는데, 진료실에 단둘이 있던 상황이거나 직접 목격자가 없어 환자 진술이 사실상 유일한 증거라 한순간에 가해자로 몰려 너무 억울하고 막막해요. 진료 기록과 검진 경위가 분명히 있는데, 이렇게 진료·검진 과정의 접촉이 추행으로 고소된 상황에서 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '진료 검진 빙자 추행 진료 통상성·고의 부재·진술 신빙성 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '진료 검진 빙자 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '진료상 필요한 검진이었는데 추행으로 고소돼 억울하다면, 진료 행위의 통상성·추행 고의 판단과 진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「의사·한의사·물리치료사 등 의료인으로서 환자를 진료·검진하면서 촉진·청진·도수치료·시술 등 의학적으로 필요한 진찰·치료 행위로 환자의 신체에 접촉했을 뿐인데, 진료가 끝난 뒤 또는 한참 지나 환자가 ‘그때 진료를 빙자해 추행을 당했다’며 저를 성범죄로 고소해, 한순간에 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 접촉도 진단·치료에 반드시 필요한 통상의 진찰 범위였으며, 사전에 검진 부위·방법을 설명하고 진행했다고 기억하는데도, 진료실에 단둘이 있었거나 직접 목격자가 없어 환자 진술이 사실상 유일한 증거라 진술 다툼만 남을까 봐 너무 억울하고 막막하실 거예요. 환자를 돕기 위한 진료에서 벌어진 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 진료 경위와 검진의 의학적 필요성, 접촉이 통상의 진찰 범위였다는 점을 진료기록·문진표 등으로 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄가 성립하려면 추행행위와 그에 대한 고의가 인정되어야 하는 영역입니다. 판례는 통상적으로 추행이 이루어질 것으로 예상하기 어려운 상황에서 피해자 진술이 유일한 증거인 경우, 이를 근거로 유죄로 판단하려면 그 진술이 진술 내용 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 합리적인 의심을 배제할 정도의 신빙성이 있어야 한다고 본 사례 흐름이 있는 영역이고, 무죄추정의 원칙상 합리적 의심이 남으면 피고인의 이익으로 판단해야 하는 영역입니다. 또 추행 해당 여부는 행위자와 피해자의 관계·경위·구체적 행위 태양과 주위 상황 등을 종합해 판단해야 하는 영역으로, 접촉의 진료상 통상성·추행 고의 여부와 진술 신빙성을 가려 다툴 여지가 있습니다. 진료 경위 + 통상 진찰 범위 접촉 + 진술 중심 증거 결합은 ‘진료 통상성·추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·진료 흐름 정리 ② 접촉 진료 통상성 ③ 추행 고의 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 진료 검진 빙자 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·진료 통상성·추행 고의·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·진료 흐름 정리</strong> — 진료 목적·증상·검진 부위·진행 흐름·동의 경위 정리.</li>\n<li><strong>② 접촉 진료 통상성</strong> — 촉진·청진·시술 등 통상의 진찰 범위 접촉이었는지 정리.</li>\n<li><strong>③ 추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정될 정황이 있는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 환자 진술이 유일·일관·정황 부합하는지, 오염 가능성은 없는지 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진단·치료에 필요한 통상의 진찰 범위 접촉인지, 추행을 용인하는 내심의 의사(고의)가 인정될 정황이 있는지가 판단의 분기점입니다. 진료 경위·검진의 의학적 필요성과 접촉 부위, 환자 진술이 유일 증거인지·일관·정황에 부합하는지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·진료 자료 보존 (즉시)</strong> — 진료기록·차트·문진표·검사 결과·당일 대화를 보존.</li>\n<li><strong>2단계 — 진료 통상성 정리 (즉시)</strong> — 검진의 의학적 필요성과 촉진·청진·시술 등 통상의 진찰 범위 접촉이었음을 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 환자 진술이 유일 증거인지, 일관·정황 부합하는지와 모순·오염 가능성을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진료 검진 빙자 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·진료 통상성·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>진료기록·차트·문진표·검사 결과 (경위)</strong></li>\n<li><strong>검진 부위·방법·의학적 필요성 설명 자료 (행위 태양)</strong></li>\n<li><strong>진료실·대기실 CCTV·진료 동선 보존 요청 자료</strong></li>\n<li><strong>간호사·동석자·접수 기록 등 정황 자료</strong></li>\n<li><strong>당일·전후 대화·동의·안내 기록</strong></li>\n<li><strong>환자 진술의 일관성·모순·정황 불부합·오염 가능성 정리</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록·문진표·검사 결과로 검진의 의학적 필요성과 접촉 부위·방법을 정리하면 접촉이 통상의 진찰 범위였음을 다투는 데 도움이 됩니다. 환자 진술이 유일 증거인지, 시점에 따라 달라지거나 정황과 모순되는 부분은 없는지, 진술이 암시·유도로 오염될 가능성은 없었는지를 정리하면 추행 고의를 다투는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정되는지.</li>\n<li><strong>진료 통상성</strong> — 통상의 진찰·치료 범위를 넘는지.</li>\n<li><strong>진술 신빙성</strong> — 환자 진술이 유일·일관·정황에 부합하는지.</li>\n<li><strong>진술 오염</strong> — 암시·유도로 진술이 오염될 가능성이 있는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 피해자 진술의 신빙성',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 판결이 확정될 때까지 무죄로 추정되고, 범죄사실의 인정은 합리적인 의심이 없는 정도의 증명에 이르러야 하므로, 검사가 제출한 증거만으로 그러한 확신에 이르지 못하면 유죄의 의심이 들더라도 피고인의 이익으로 판단해야 한다고 보았습니다. 특히 통상적으로 추행이 이루어질 것으로 예상하기 어려운 상황에서 피해자 또는 밀접한 관계에 있는 사람의 진술이 유일한 증거인 경우, 이를 근거로 유죄로 판단하려면 그 진술이 내용 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 합리적 의심을 배제할 정도의 신빙성이 있어야 한다고 판시했습니다. 진료·검진 과정의 접촉이 추행으로 주장되는 사안을 살펴볼 때에도, 진술이 일관·구체적이고 정황에 부합하는지와 진료의 통상성을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '진료 경위 + 통상 진찰 범위 접촉 + 진술 중심 증거 결합 시 진료 통상성·추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '진료상 필요한 검진이었는데 추행이 되나요?',
        answer:
          '<strong>통상의 진찰 범위 접촉인지, 추행을 용인하는 고의가 있는지가 핵심인 영역입니다.</strong> 진료 경위와 검진 필요성을 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>진료기록·검진 부위·의학적 필요성으로 고의 부재를 다투는 영역입니다.</strong> 차트·문진표·검사 결과를 정리하세요.',
      },
      {
        question: '환자 진술만 있고 목격자가 없어요.',
        answer:
          '<strong>합리적 의심이 남으면 피고인의 이익으로 보는 무죄추정이 적용되는 영역입니다.</strong> 진술의 일관성·정황 부합 여부를 검토하세요.',
      },
      {
        question: '진술이 진료 한참 뒤에 나왔는데 다툴 수 있나요?',
        answer:
          '<strong>시간 경과·반복 신문 등 진술 오염 가능성을 함께 살피는 영역입니다.</strong> 진술 시점과 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진료 경위·검진 범위에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 혐의 방어 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '진료 검진 빙자 추행 추적', href: '/guide/sex-crime/sex-crime-medical-exam-pretext-track' },
      { label: '마사지샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-pretext-touch-report-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },
];
