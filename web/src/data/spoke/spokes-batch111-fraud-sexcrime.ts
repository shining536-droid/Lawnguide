import { SpokePage } from '../spoke-pages';

// batch111 fraud(6) + sex-crime(4) — 10개 (2026-06-28)
//
// 고유 존재 이유:
// 1. fraud-used-golf-club-fake-brand-resale-track — 일반 중고거래 분쟁과 분기. '가짜 브랜드 골프채를 정품으로 둔갑시켜 재판매' 가짜 브랜드 둔갑 재판매 고지의무 기망 편취 판단형 트랙(victim).
// 2. fraud-overseas-job-placement-visa-fee-nondelivery-track — 일반 알선 분쟁과 분기. '해외 취업 알선·비자 비용을 받고 취업·비자 미이행' 해외 취업 알선 비자 비용 편취 절차형 트랙(victim).
// 3. fraud-livestream-commerce-counterfeit-luxury-sale-track — 일반 명품 분쟁과 분기. '라이브커머스 방송으로 짝퉁 명품을 정품처럼 판매' 짝퉁 명품 판매 기망 편취 판단형 트랙(victim).
// 4. fraud-crowdfunding-reward-product-nondelivery-track — 일반 미배송 분쟁과 분기. '크라우드펀딩 리워드 제품을 제작·발송 의사 없이 후원금만 수령' 리워드 미배송 기망 편취 절차형 트랙(victim).
// 5. fraud-rental-car-deposit-double-booking-track — 일반 보증금 분쟁과 분기. '렌터카 보증금을 이중예약으로 받아 편취' 렌터카 보증금 이중예약 편취 판단형 트랙(victim).
// 6. fraud-joint-stock-investment-loss-concealment-falsely-accused-defense — 일반 사기 무고류와 분기. '공동 주식투자 손실을 은폐했다며 사기 고의로 고소됨' 편취 고의·투자손실 구별 방어 판단형 트랙(accused).
// 7. sex-crime-waterpark-shower-room-touch-report-track — 일반 추행류와 분기. '워터파크 샤워실에서 신체를 추행' 추행 해당성·고의 판단형 트랙(victim).
// 8. sex-crime-nightclub-dancefloor-crowd-touch-report-track — 일반 추행류와 분기. '클럽 댄스플로어 인파를 틈타 신체를 추행' 인파 밀집 이용 추행 신고 절차형 트랙(victim).
// 9. sex-crime-massage-shop-service-pretext-touch-report-track — 일반 추행류와 분기. '마사지샵 서비스를 빙자해 신체를 추행' 서비스 빙자 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-office-dinner-drunk-colleague-touch-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 만취 상황 접촉이 추행으로 고소' 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch111FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-golf-club-fake-brand-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-golf-club-fake-brand-resale-track',
    keyword: '중고 골프채 가짜 브랜드 둔갑 재판매 기망 사기',
    questionKeyword: '중고 거래로 골프채 풀세트를 사면서 ‘정품 박스·보증서까지 다 있는 100% 정품 브랜드다’라는 판매자의 말을 믿고 정품 시세에 맞춰 적지 않은 돈을 주고 샀어요. 그런데 막상 받아 정식 매장에서 감정하니 정품이 아닌 가짜 브랜드·짝퉁이거나 다른 브랜드 부품이 섞인 물건이었고, 박스·시리얼·보증서도 가짜였어요. 판매자에게 따지니 ‘나도 정품인 줄 알았다, 환불은 안 된다’며 발뺌하다 연락을 피하는데, 처음부터 가짜 브랜드를 정품으로 둔갑시켜 되판 정황이에요. 이런 중고 골프채 가짜 브랜드 둔갑 재판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 골프채 가짜 브랜드 둔갑·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 골프채 가짜 브랜드 둔갑 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라는 말을 믿고 산 중고 골프채가 가짜 브랜드로 드러나고 환불도 거부당했다면, 형법 제347조 사기·고지의무 위반 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·골프 동호회·직거래로 골프채(드라이버·아이언 세트)를 사면서 판매자에게서 ‘정품 박스와 정품 보증서까지 다 있는 100% 정품 브랜드다, 시리얼도 조회되고 하자 없다’는 말을 믿고, 가품보다 비싼 정품 시세에 맞춰 적지 않은 대금을 주고 물건을 받은 분의 상황입니다. 그런데 막상 인수해 정식 매장·전문점에서 감정해보니, 외관만 비슷할 뿐 정품이 아닌 가짜 브랜드·짝퉁이거나 다른 브랜드 부품이 섞여 있었고, 함께 받은 정품 박스·시리얼·보증서마저 위조이거나 다른 제품의 것이어서, 가품을 정품 값에 산 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘나도 정품인 줄 알고 받아 되판 것뿐이다, 거래가 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 비슷하게 가짜 브랜드를 정품으로 둔갑시켜 여러 사람에게 재판매한 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가짜 브랜드인 사실을 알면서도 정품으로 속이거나, 정품이 아닐 수 있다는 중요한 사정을 알리지 않은 채 정품 시세로 팔았다면 적극적·소극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 여러 피해자에게 각각 기망행위로 재물을 편취한 경우 원칙적으로 피해자별로 독립한 사기죄가 성립하지만, 피해법익이 동일하다고 볼 사정이 있으면 포괄하여 일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 반복된 둔갑 재판매가 어떻게 죄수로 평가되는지를 가려 다툴 여지가 있습니다. 정품 가장 + 가품·위조 보증서 + 환불 거부·발뺌 결합은 ‘가짜 브랜드 둔갑 재판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 골프채 가짜 브랜드 둔갑 재판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정품 강조 설명·거래 대화·결제 내역 정리.</li>\n<li><strong>② 가품·기망 입증</strong> — 정식 매장 감정서·위조 보증서·시리얼 불일치로 가짜 브랜드를 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정품 시세로 지급한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 가짜 브랜드인 사실을 알면서 정품으로 속였는지, 정품이 아닐 수 있다는 중요한 사정을 알리지 않았는지가 판단의 분기점입니다. 정품을 강조한 대화와 감정 결과, 같은 판매자의 반복 재판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정품 강조 설명·거래 대화·결제·택배 내역 캡처 보존.</li>\n<li><strong>2단계 — 가품 입증 (즉시)</strong> — 정식 매장·전문점 감정서, 위조 보증서·시리얼 불일치 자료 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 골프채 가짜 브랜드 둔갑 재판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정품 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>골프채 대금·배송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>정식 매장·전문점 감정서·진단서</strong></li>\n<li><strong>위조 박스·보증서·시리얼 불일치 대비 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 재판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정식 매장·전문점 감정서로 가짜 브랜드 여부를 명확히 하고, 판매자가 정품을 강조한 대화와 위조 보증서·시리얼을 대비하면 둔갑 재판매 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 재판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 여부</strong> — 실제로 가짜 브랜드·부품 혼합인지.</li>\n<li><strong>고지의무 위반</strong> — 정품이 아닐 수 있는 사정을 알리지 않았는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 둔갑 재판매였는지.</li>\n<li><strong>편취액·죄수</strong> — 정품 시세 대금 전부가 피해액인지, 반복 판매의 죄수.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·가품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자에 대한 사기죄의 죄수와 포괄일죄',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에게 각각 기망행위를 하여 각 피해자로부터 재물을 편취한 경우에는 범의가 단일하고 범행방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이므로 원칙적으로 피해자별로 독립한 사기죄가 성립한다고 보았습니다. 다만 피해자들의 피해법익이 동일하다고 볼 수 있는 사정이 있는 경우에는 이들에 대한 사기죄를 포괄하여 일죄로 볼 수 있고, 부부인 피해자들에게 같은 명목으로 기망하여 공동재산을 매도해 마련한 돈을 송금받아 편취한 사안에서 기망행위의 공통성, 재산 교부 의사결정의 공통성, 재산 형성·교부의 목적과 방법 등 모든 사정을 고려하면 피해법익이 동일하다고 평가될 수 있어 포괄일죄를 구성한다고 판시했습니다. 가짜 브랜드를 정품으로 둔갑시켜 여러 사람에게 되판 사안을 살펴볼 때에도, 각 거래의 기망과 피해법익을 기준으로 편취 여부와 죄수를 가려 검토해볼 수 있습니다.',
        takeaway: '정품 가장 + 가품·위조 보증서 + 환불 거부 결합 시 가짜 브랜드 둔갑 재판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자도 정품인 줄 알았다는데 사기인가요?',
        answer:
          '<strong>가품 가능성을 알면서 정품으로 속였거나 중요한 사정을 묵비했는지가 핵심인 영역입니다.</strong> 정품 강조 대화와 감정 결과를 확보하세요.',
      },
      {
        question: '가짜 브랜드라는 걸 어떻게 확인하나요?',
        answer:
          '<strong>정식 매장·전문점 감정서가 핵심 단서인 영역입니다.</strong> 시리얼 불일치와 위조 보증서를 함께 확보하세요.',
      },
      {
        question: '정품 박스·보증서가 있었는데도 가품인가요?',
        answer:
          '<strong>박스·보증서·시리얼이 위조됐는지가 기망 판단의 단서인 영역입니다.</strong> 정품 자료와 실제 제품을 대비하세요.',
      },
      {
        question: '직거래라 현금으로 줬으면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 감정서를 정리해 청구를 준비하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 재판매 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '콘서트 티켓 가짜 링크 재판매 추적', href: '/guide/fraud/fraud-concert-ticket-resale-fake-link-track' },
      { label: '한정 스니커즈 가품 재판매 추적', href: '/guide/fraud/fraud-limited-sneaker-resale-fake-track' },
      { label: '중고폰 허위 송장 추적', href: '/guide/fraud/fraud-used-phone-fake-shipping-invoice-track' },
      { label: '에어비앤비 허위 매물 보증금 추적', href: '/guide/fraud/fraud-airbnb-fake-listing-deposit-track' },
    ],
  },

  // ─── 2. fraud-overseas-job-placement-visa-fee-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-job-placement-visa-fee-nondelivery-track',
    keyword: '해외 취업 알선 비자 비용 편취 기망 사기',
    questionKeyword: '해외 취업 알선 업체·브로커가 ‘현지 일자리가 확정됐다, 비자·취업허가 수속만 마치면 바로 출국·취업할 수 있다’며 비자 비용·수속비·보증금 명목으로 큰돈을 먼저 받아 갔는데, 약속한 시점이 지나도 비자도 일자리도 나오지 않았어요. 처음엔 ‘서류가 밀렸다, 곧 된다’며 미루더니 점점 답이 없고 사무실을 닫거나 연락을 끊었어요. 알고 보니 애초에 그런 일자리나 비자 수속 능력 없이 비용만 챙긴 정황이고 다른 사람도 같이 당했는데, 이런 해외 취업 알선 비자 비용 편취를 사기로 신고하고 보낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '해외 취업 알선 비자 비용 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 취업 알선 비자 비용 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '일자리·비자가 확정됐다는 말을 믿고 비자 비용을 선납했는데 취업도 비자도 없이 업체가 잠적했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 취업 알선 업체·유학원·브로커가 ‘현지 기업의 일자리가 이미 확정됐다, 비자·취업허가·노동허가 수속만 마치면 곧바로 출국해 취업할 수 있다, 지금 비용을 내야 자리를 잡아둘 수 있다’는 말로, 더 나은 일자리를 찾던 마음을 파고들어 비자 비용·수속비·항공·보증금 명목으로 적지 않은 돈을 먼저 받아 간 상황을 겪은 분의 경우입니다. 그런데 막상 약속한 시점이 지나도 비자도, 확정됐다던 일자리도 나오지 않았고, 처음에는 ‘현지 사정으로 서류가 밀렸다, 며칠만 더 기다려달라, 곧 비자가 나온다’며 차일피일 미루더니, 점점 연락이 뜸해지다 끝내 사무실을 닫거나 전화·메신저를 차단하고 잠적해, 보낸 돈도 취업 기회도 잃게 되어 막막하실 거예요. 알고 보니 애초에 그런 일자리를 확보하거나 비자 수속을 진행할 의사·능력 없이 비용만 모은 정황이고, 같은 말을 듣고 돈을 보낸 다른 사람들도 똑같이 당했다면 단순 수속 지연이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 일자리·비자 수속의 실체나 능력이 없는데도 확정된 것처럼 꾸며 비용을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄에서 재물을 교부받는 행위가 피해자의 처분행위에 의한 것인지, 그리고 기소된 공소사실의 피해자와 실제 피해자가 다른 경우 진정한 피해자를 가려 그에 대한 관계에서 사기죄 성부를 판단해야 한다고 본 사례 흐름이 있는 영역으로, 누구의 어떤 처분행위로 비용이 교부됐는지를 가려 다툴 여지가 있습니다. 일자리·비자 실체 가장 + 비용 선수령 + 미이행·잠적 결합은 ‘해외 취업 알선 비자 비용 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 일자리·비자 실체·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 취업 알선 비자 비용 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·실체·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 일자리·비자 확정 안내·계약·비용 송금 내역 정리.</li>\n<li><strong>② 일자리·비자 실체·기망</strong> — 일자리·비자 수속이 실재했고 진행할 능력이 있었는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 비자 비용·수속비·보증금 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 수속 지연과 달리, 일자리·비자 수속의 실체나 능력 없이 확정된 것처럼 꾸며 비용을 받았는지가 판단의 분기점입니다. 확정을 강조한 안내와 미이행·잠적 정황, 다른 피해자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 일자리·비자 확정 안내·계약서·비용 송금·메시지 내역 캡처 보존.</li>\n<li><strong>2단계 — 실체·미이행 입증 (즉시)</strong> — 일자리·비자 수속 진행 불가, 약속 불이행, 사무실 폐쇄·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 비용 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 취업 알선 비자 비용 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·실체·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>일자리·비자 확정 안내·홍보 캡처 (거래 조건)</strong></li>\n<li><strong>알선 계약서·약정·고용 제안 자료 (계약 내용)</strong></li>\n<li><strong>비자 비용·수속비·보증금 송금 내역 (피해 금액)</strong></li>\n<li><strong>비자·취업 수속 진행 확인 시도·불가 기록</strong></li>\n<li><strong>미이행·사무실 폐쇄·잠적 정황 자료</strong></li>\n<li><strong>업체·브로커·담당자·계좌 정보</strong></li>\n<li><strong>다른 피해자·단체 채팅·환불 거부 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일자리·비자가 확정됐다고 강조한 안내와, 실제로는 수속이 진행되지 않고 일자리도 실재하지 않은 정황을 시간순으로 정리하면 알선 실체 부재를 다투는 데 도움이 됩니다. 비용이 어느 계좌로 흘러갔는지 송금 흐름을 보존하고, 같은 업체에 비슷하게 당한 다른 피해자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일자리·비자 실체</strong> — 일자리·비자 수속이 실재·가능했는지.</li>\n<li><strong>능력·의사</strong> — 알선·수속을 진행할 의사·능력이 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 지연인지 처음부터 비용만 노렸는지.</li>\n<li><strong>편취액</strong> — 비자 비용·수속비·보증금 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·브로커·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (알선·계약 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 처분행위와 진정한 피해자의 특정',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우에는, 공소사실의 동일성을 해하지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 공소장변경 절차 없이도 진정한 피해자를 가려내어 그에 대한 사기죄로 처벌하여야 한다고 보았습니다. 또 기망으로 인한 처분행위로 재물·재산상 이익이 행위자에게 이전되었는지를 기준으로 사기죄 성부를 판단해야 하고, 진정한 피해자가 누구인지를 가리지 않은 채 곧바로 무죄로 판단해서는 안 된다고 판시했습니다. 해외 취업 알선 명목으로 비자 비용을 받아 간 사안을 살펴볼 때에도, 누구의 어떤 처분행위로 비용이 교부됐는지와 그 처분이 기망에 의한 것인지를 가려 사기죄 성부를 검토해볼 수 있습니다.',
        takeaway: '일자리·비자 실체 가장 + 비용 선수령 + 미이행·잠적 결합 시 해외 취업 알선 비자 비용 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 비자 수속이 늦어지는 것 아닌가요?',
        answer:
          '<strong>일자리·비자 수속 실체와 진행 능력이 있었는지가 핵심인 영역입니다.</strong> 확정 안내와 진행 불가 정황을 확보하세요.',
      },
      {
        question: '계약서를 써서 정상 거래처럼 보이는데요.',
        answer:
          '<strong>계약 형식이 있어도 실체·의사 없이 비용만 받았는지를 따지는 영역입니다.</strong> 미이행·잠적 정황을 함께 모으세요.',
      },
      {
        question: '업체가 외국에 있다는데 신고되나요?',
        answer:
          '<strong>국내에서 모집·송금했다면 국내 신고를 검토할 수 있는 영역입니다.</strong> 송금·안내·계약 자료를 정리해 접수하세요.',
      },
      {
        question: '일부는 수속을 했다는데 사기인가요?',
        answer:
          '<strong>일부 형식적 절차가 있어도 실체 없는 기망이었는지가 단서인 영역입니다.</strong> 진행 내역과 결과 불일치를 정리하세요.',
      },
      {
        question: '다른 사람도 같이 당한 것 같아요.',
        answer:
          '<strong>다수 피해자의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·모집 안내·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외 취업 알선 실재없는 수수료 추적', href: '/guide/fraud/fraud-overseas-job-placement-fee-nonexistent-track' },
      { label: '해외 취업 알선 수수료 추적', href: '/guide/fraud/fraud-overseas-job-placement-fee-track' },
      { label: '해외 채용 비자 비용 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-visa-fee-track' },
      { label: '헤드헌터 알선비 잠적 추적', href: '/guide/fraud/fraud-job-headhunter-placement-fee-vanish-track' },
    ],
  },

  // ─── 3. fraud-livestream-commerce-counterfeit-luxury-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-livestream-commerce-counterfeit-luxury-sale-track',
    keyword: '라이브커머스 짝퉁 명품 판매 기망 사기',
    questionKeyword: '라이브커머스 방송에서 진행자가 ‘정품 명품을 병행수입·특가로 푼다, 정품 보증·감정서까지 보장된다’며 실시간으로 보여준 명품 가방·시계를 믿고 결제 버튼을 눌러 적지 않은 돈을 냈어요. 그런데 막상 받아 감정해보니 정품이 아닌 짝퉁이었고, 보증서·태그도 가짜였어요. 항의하니 ‘정품이 맞다, 환불은 안 된다’며 발뺌하다 방송·채널을 닫고 연락을 끊었어요. 처음부터 짝퉁을 정품으로 속여 방송으로 판 정황이고 다른 시청자도 같이 당했는데, 이런 라이브커머스 짝퉁 명품 판매 기망을 사기로 신고하고 결제한 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '라이브커머스 짝퉁 명품 판매·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '라이브커머스 짝퉁 명품 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라는 방송을 믿고 산 명품이 짝퉁으로 드러나고 환불도 거부당했다면, 형법 제347조 사기·처분행위 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「라이브커머스·실시간 방송에서 진행자·판매자가 ‘정품 명품을 병행수입·해외 직구로 들여와 특가로 푼다, 정품이 100% 맞고 정품 보증·감정서·정품 영수증까지 보장한다, 지금 이 방송에서만 이 가격’이라며 카메라로 명품 가방·지갑·시계를 가까이 비춰 보여주기에, 정품을 싸게 사는 좋은 기회라고 믿고 실시간 결제로 적지 않은 돈을 낸 분의 상황입니다. 그런데 막상 물건을 받아 정식 매장·전문 감정처에서 확인하니, 정품이 아닌 짝퉁·가품이었고 함께 온 보증서·정품 태그·시리얼마저 위조이거나 다른 제품의 것이어서, 정품 값을 주고 가품을 산 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘정품이 맞다, 단순 변심 환불은 안 된다’며 발뺌하다 방송 다시보기를 내리거나 채널·계정을 닫고 연락을 끊고, 알고 보니 같은 방송을 보고 산 다른 시청자도 똑같이 짝퉁을 받았다면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 짝퉁인 사실을 알면서 정품으로 방송·설명해 결제하게 했다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 처분행위는 피기망자가 착오에 빠진 상태에서 한 행위로 재물·재산상 이익이 행위자에게 이전되는 것을 본질로 하고, 피기망자가 처분 결과의 구체적 내용을 미처 인식하지 못했더라도 그 행위를 한다는 인식이 있었다면 처분행위와 처분의사가 인정된다고 본 사례 흐름이 있는 영역으로, 정품으로 오인해 결제한 행위가 기망에 의한 처분행위였는지를 가려 다툴 여지가 있습니다. 정품 가장·방송 판매 + 짝퉁 인도 + 환불 거부·잠적 결합은 ‘짝퉁 명품 판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 라이브커머스 짝퉁 명품 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정품 강조 방송·다시보기·주문·결제 내역 정리.</li>\n<li><strong>② 가품·기망 입증</strong> — 정식 매장·전문 감정처 감정서, 위조 보증서·태그로 짝퉁을 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정품 명목으로 결제한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 변심·하자와 달리, 짝퉁인 사실을 알면서 정품으로 방송·설명해 결제하게 했는지가 판단의 분기점입니다. 정품을 강조한 방송 장면·다시보기와 감정 결과, 다른 시청자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정품 강조 방송·다시보기·캡처·주문·결제·택배 내역 보존.</li>\n<li><strong>2단계 — 가품 입증 (즉시)</strong> — 정식 매장·전문 감정처 감정서, 위조 보증서·태그·시리얼 자료 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 신속히 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">라이브커머스 짝퉁 명품 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정품 강조 방송·다시보기·캡처 (거래 조건)</strong></li>\n<li><strong>상품 설명·채팅·주문 약정 (계약 내용)</strong></li>\n<li><strong>명품 대금·배송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>정식 매장·전문 감정처 감정서</strong></li>\n<li><strong>위조 보증서·태그·시리얼 대비 자료</strong></li>\n<li><strong>판매자·채널·상호·계좌 정보</strong></li>\n<li><strong>환불 거부·방송 삭제·잠적·다른 시청자 피해 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방송은 다시보기·캡처로 정품을 강조한 발언을 보존하는 것이 중요합니다. 정식 감정서로 짝퉁임을 명확히 하고, 위조 보증서·태그를 정품과 대비하면 정품 가장 기망을 다투는 데 도움이 됩니다. 같은 방송을 보고 산 다른 시청자의 동일 피해를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 여부</strong> — 실제로 짝퉁·가품인지.</li>\n<li><strong>정품 고지</strong> — 정품으로 단정·보증했는지, 가품 가능성을 알렸는지.</li>\n<li><strong>편취 범의</strong> — 처음부터 짝퉁을 정품으로 판 것인지.</li>\n<li><strong>편취액</strong> — 정품 명목 결제 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 채널·상호·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·가품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 처분행위와 처분의사',
        summary:
          '대법원 2016도13362(대법원, 2017.02.16 선고) 영역에서 법원은 사기죄에서 처분행위는 행위자의 기망으로 착오에 빠진 피해자의 행위를 이용해 재물·재산상 이익을 취득하는 것을 본질로 하며, 피기망자의 의사에 기초한 행위를 통해 행위자가 이익을 취득했다고 평가할 수 있으면 처분행위가 인정된다고 보았습니다. 또 피기망자의 처분의사는 착오에 빠진 상태에서 어떤 행위를 한다는 인식이 있으면 충분하고, 그 행위가 가져오는 결과까지 인식해야 하는 것은 아니므로, 기망당해 자신의 행위가 갖는 의미를 제대로 인식하지 못한 채 재산상 손해를 초래하는 행위를 했다면 처분행위와 그에 상응하는 처분의사가 있다고 보아야 한다고 판시했습니다. 짝퉁을 정품으로 오인하게 해 결제하게 한 사안을 살펴볼 때에도, 정품으로 착오에 빠져 대금을 지급한 행위가 기망에 의한 처분행위였는지를 가려 검토해볼 수 있습니다.',
        takeaway: '정품 가장·방송 판매 + 짝퉁 인도 + 환불 거부 결합 시 짝퉁 명품 판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '병행수입이라 정품이 아닐 수도 있다고 했는데요.',
        answer:
          '<strong>정품으로 단정·보증했는지, 짝퉁임을 알고도 정품처럼 팔았는지가 핵심인 영역입니다.</strong> 방송에서 정품을 강조한 장면을 확보하세요.',
      },
      {
        question: '방송 다시보기가 사라졌는데 입증되나요?',
        answer:
          '<strong>캡처·녹화·채팅 기록으로도 정품 강조를 입증할 수 있는 영역입니다.</strong> 결제 직후 자료부터 모으세요.',
      },
      {
        question: '짝퉁이라는 걸 어떻게 확인하나요?',
        answer:
          '<strong>정식 매장·전문 감정처 감정서가 핵심 단서인 영역입니다.</strong> 위조 보증서·태그를 함께 확보하세요.',
      },
      {
        question: '카드로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>신용카드 항변권·결제 취소로 다툴 수 있는 영역입니다.</strong> 결제 방식과 거래 경위를 정리해 신속히 요청하세요.',
      },
      {
        question: '다른 시청자도 같이 당한 것 같아요.',
        answer:
          '<strong>다수 시청자의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 방송 채팅·후기·단체 채팅을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '라이브커머스 짝퉁 구매', href: '/guide/fraud/fraud-livestream-counterfeit-purchase' },
      { label: '라이브 진행자 폐쇄 잠적 추적', href: '/guide/fraud/fraud-livestream-host-flash-sale-channel-closure-track' },
      { label: '명품 가방 가품 추적', href: '/guide/fraud/fraud-luxury-bag-counterfeit-track' },
      { label: '명품 가품 판매', href: '/guide/fraud/fraud-luxury-fake-counterfeit' },
    ],
  },

  // ─── 4. fraud-crowdfunding-reward-product-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crowdfunding-reward-product-nondelivery-track',
    keyword: '크라우드펀딩 리워드 제품 미배송 기망 사기',
    questionKeyword: '크라우드펀딩에서 ‘신제품을 양산해 후원자에게 리워드로 발송한다, 목표 달성 후 곧 제작·배송한다’는 프로젝트를 믿고 후원금으로 적지 않은 돈을 결제했는데, 약속한 발송 시점이 한참 지나도 제품이 오지 않았어요. 처음엔 ‘양산이 지연됐다, 곧 보낸다’며 미루더니 점점 답이 없고, 결국 프로젝트 페이지·계정을 닫고 잠적했어요. 알고 보니 애초에 제품을 만들거나 발송할 의사·능력 없이 후원금만 모은 정황이고 다른 후원자도 같이 못 받았는데, 이런 크라우드펀딩 리워드 제품 미배송 기망을 사기로 신고하고 보낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '크라우드펀딩 리워드 미배송 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '크라우드펀딩 리워드 미배송 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '양산·발송을 약속한 크라우드펀딩에 후원했는데 리워드 미배송·잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「크라우드펀딩 플랫폼에서 ‘혁신적인 신제품을 양산해 후원자에게 리워드로 보내준다, 목표 금액을 달성하면 곧바로 제작에 들어가 정해진 일정에 배송한다, 한정 수량 얼리버드 혜택까지 있다’는 프로젝트 설명과 시제품·렌더링 이미지를 믿고, 좋은 제품을 미리 합리적인 가격에 받는다는 기대로 후원금을 결제한 분의 상황입니다. 그런데 막상 약속한 발송 예정일이 지나도 리워드가 도착하지 않았고, 처음에는 ‘양산 공정이 지연됐다, 부품 수급이 늦어졌다, 며칠만 더 기다려달라, 곧 배송을 시작한다’며 업데이트로 차일피일 미루더니, 점점 공지가 뜸해지다 끝내 프로젝트 페이지·계정·연락처를 닫고 잠적해, 후원금도 제품도 받지 못하게 되어 막막하실 거예요. 알고 보니 애초에 제품을 양산하거나 발송할 의사·능력 없이 후원금만 모은 정황이고, 같은 프로젝트에 후원한 다른 사람들도 똑같이 리워드를 못 받고 환불도 거부당했다면 단순 일정 지연이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 제품을 만들어 보낼 의사·능력이 없는데도 양산·발송을 약속하고 후원금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 물건을 건축·공급할 의사나 능력이 없으면서 이를 가장해 대금을 편취했다는 사기 공소사실은, 다른 죄의 확정판결이 있더라도 행위 태양·보호법익이 달라 동일성이 인정되지 않는 별개의 범죄로 평가될 수 있다고 본 사례 흐름이 있는 영역으로, 후원 당시의 제작·발송 의사·능력을 종합해 편취 여부를 가려 다툴 여지가 있습니다. 양산·발송 가장 + 후원금 수령 + 미배송·잠적 결합은 ‘리워드 미배송 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 제작·발송 의사·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 크라우드펀딩 리워드 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·발송 의사·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 프로젝트 설명·발송 일정·후원 결제 내역 정리.</li>\n<li><strong>② 제작·발송 의사·기망</strong> — 제품을 양산·발송할 의사·능력이 있었는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 후원금·수수료 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 일정 지연과 달리, 제품을 만들어 보낼 의사·능력 없이 양산·발송을 약속하고 후원금만 모았는지가 판단의 분기점입니다. 프로젝트 설명·발송 일정과 미배송·잠적 정황, 다른 후원자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 프로젝트 설명·발송 일정·업데이트·후원 결제 내역 캡처 보존.</li>\n<li><strong>2단계 — 미배송·잠적 입증 (즉시)</strong> — 발송 약속·지연 변명·페이지 폐쇄·연락 차단 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">크라우드펀딩 리워드 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·발송 의사·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>프로젝트 설명·시제품·발송 일정 캡처 (거래 조건)</strong></li>\n<li><strong>후원 옵션·리워드·약정 내용 (계약 내용)</strong></li>\n<li><strong>후원금·수수료 결제 내역 (피해 금액)</strong></li>\n<li><strong>발송 지연 변명·업데이트·송장 미제공 기록</strong></li>\n<li><strong>페이지 폐쇄·계정 삭제·잠적 정황 자료</strong></li>\n<li><strong>창작자·업체·계좌·플랫폼 정보</strong></li>\n<li><strong>다른 후원자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양산·발송 일정을 약속한 프로젝트 설명·업데이트와, 그 약속이 이행되지 않고 페이지·계정을 닫고 잠적한 흐름을 시간순으로 정리하면 제작·발송 의사 부재를 다투는 데 도움이 됩니다. 같은 프로젝트에서 다른 후원자도 미배송을 겪은 정황을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>제작·발송 의사</strong> — 제품을 양산·발송할 의사·능력이 있었는지.</li>\n<li><strong>후원 유도</strong> — 시제품·일정으로 후원을 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 일정 지연인지 처음부터 후원금만 노렸는지.</li>\n<li><strong>편취액</strong> — 후원금·수수료 전부가 피해액인지.</li>\n<li><strong>창작자 특정</strong> — 창작자·업체·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·후원 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공급 의사·능력 없는 기망과 별개 범죄의 성립',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실이나 범죄사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 규범적 요소도 고려해 판단해야 한다고 전제하면서, 물건을 건축·분양할 의사나 능력이 없으면서 이를 가장해 피해자들을 기망하여 대금을 편취했다는 사기 공소사실은 다른 죄의 확정판결이 있더라도 행위 태양과 보호법익이 달라 동일성이 인정되지 않는 별개의 범죄로 보아 면소를 선고할 수 없다고 판시했습니다. 곧 공급할 의사·능력 없이 대금을 받은 행위 자체가 기망에 의한 편취로 평가될 수 있다는 취지입니다. 제품을 양산·발송할 의사·능력 없이 후원금을 받은 크라우드펀딩 사안을 살펴볼 때에도, 후원 당시의 제작·발송 의사와 능력을 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '양산·발송 가장 + 후원금 수령 + 미배송·잠적 결합 시 리워드 미배송 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '크라우드펀딩은 원래 실패 위험이 있는 것 아닌가요?',
        answer:
          '<strong>제작·발송 의사·능력 없이 후원금만 모았는지가 핵심인 영역입니다.</strong> 일정 약속과 미배송·잠적 정황을 확보하세요.',
      },
      {
        question: '양산이 지연됐다는 변명은 어떻게 보나요?',
        answer:
          '<strong>실제 제작·발송 진행 정황이 있었는지가 단서인 영역입니다.</strong> 업데이트·송장 제공 여부와 폐쇄 시점을 정리하세요.',
      },
      {
        question: '플랫폼이 환불을 안 해준다는데요.',
        answer:
          '<strong>창작자 책임과 별도로 카드 항변·민사 반환을 검토할 수 있는 영역입니다.</strong> 결제 방식과 후원 약정을 정리하세요.',
      },
      {
        question: '계정을 닫고 잠적했어요.',
        answer:
          '<strong>페이지 폐쇄·연락 차단은 편취 범의를 의심할 단서인 영역입니다.</strong> 폐쇄 전후 캡처와 결제 기록을 보존하세요.',
      },
      {
        question: '다른 후원자도 같이 못 받았어요.',
        answer:
          '<strong>다수 후원자의 동일 미배송은 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·후기·민원 사례를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '크라우드펀딩 리워드 미배송 추적', href: '/guide/fraud/fraud-crowdfunding-reward-nondelivery-track' },
      { label: '크라우드펀딩 리워드 미전달 추적', href: '/guide/fraud/fraud-crowdfunding-reward-undelivered-track' },
      { label: '콘서트 티켓 미배송 추적', href: '/guide/fraud/fraud-concert-ticket-nondelivery-track' },
      { label: '크라우드펀딩 제작 지연 무고 방어', href: '/guide/fraud/fraud-crowdfunding-production-delay-falsely-accused-defense' },
    ],
  },

  // ─── 5. fraud-rental-car-deposit-double-booking-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-car-deposit-double-booking-track',
    keyword: '렌터카 보증금 이중예약 편취 기망 사기',
    questionKeyword: '여행·출장용으로 렌터카를 빌리려고 ‘차량이 확보돼 있다, 예약을 잡으려면 보증금·예약금을 먼저 보내야 한다’는 업체·개인 말을 믿고 적지 않은 보증금을 송금했어요. 그런데 막상 인수일이 되니 차가 없거나, 같은 차를 다른 사람에게도 이중으로 예약받아 보증금만 챙긴 정황이었어요. 항의하니 ‘차가 빠졌다, 환불해주겠다’며 미루다 연락을 끊었고, 알고 보니 애초에 빌려줄 차 없이 여러 사람에게 보증금만 받은 것 같아요. 이런 렌터카 보증금 이중예약 편취를 사기로 신고하고 보낸 보증금을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '렌터카 보증금 이중예약·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '렌터카 보증금 이중예약 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '차가 있다는 말을 믿고 렌터카 보증금을 보냈는데 이중예약·미인도로 돈만 떼였다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「여행·출장·이사 등으로 렌터카가 필요해 온라인 카페·플랫폼·SNS·직거래로 차를 빌리려는데, 업체나 개인이 ‘원하는 차량이 확보돼 있다, 인기 차종이라 예약이 몰리니 보증금·예약금을 먼저 보내야 차를 잡아둘 수 있다’며 선입금을 요구해, 좋은 조건을 놓칠까 봐 적지 않은 보증금을 계좌로 송금한 분의 상황입니다. 그런데 막상 인수 약속일이 되니 차량이 준비돼 있지 않거나, 알고 보니 같은 차량을 여러 사람에게 이중·삼중으로 예약받아 보증금만 챙긴 정황이어서, 정작 차는 빌리지도 못한 채 돈만 묶이게 되어 막막하실 거예요. 항의하니 ‘갑자기 차가 빠졌다, 일정이 겹쳤다, 곧 환불해주겠다’며 차일피일 미루다 점점 연락을 피하고, 애초에 빌려줄 차량을 확보하지도 않은 채 여러 사람에게서 보증금만 받아온 정황까지 보이면 단순 예약 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 빌려줄 차량을 확보하거나 인도할 의사·능력이 없는데도 예약이 된 것처럼 꾸며 보증금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 다만 판례는 거래 당시 실제로 목적물을 인도할 의사·능력이 있었는지를 기준으로 기망 여부를 판단해, 매도·인도 당시 기망행위가 없었다면 이후 사정만으로 곧바로 사기죄를 인정할 수 없다고 본 사례 흐름이 있는 영역으로, 보증금을 받을 당시 차량 확보·인도 의사가 있었는지를 가려 다툴 여지가 있습니다. 차량 확보 가장·선입금 유도 + 이중예약·미인도 + 환불 거부·잠적 결합은 ‘렌터카 보증금 이중예약 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 차량 확보·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 렌터카 보증금 이중예약 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·차량 확보·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 차량 확보 안내·예약 대화·보증금 송금 내역 정리.</li>\n<li><strong>② 차량 확보·기망</strong> — 빌려줄 차량을 확보·인도할 의사·능력이 있었는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 보증금·예약금 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 예약 착오와 달리, 빌려줄 차량을 확보·인도할 의사·능력 없이 예약된 것처럼 꾸며 보증금만 받았는지가 판단의 분기점입니다. 차량 확보를 강조한 대화와 이중예약·미인도 정황, 다른 피해자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 차량 확보 안내·예약 대화·보증금 송금·문자 내역 캡처 보존.</li>\n<li><strong>2단계 — 이중예약·미인도 입증 (즉시)</strong> — 같은 차량의 중복 예약·인수일 차량 부재·환불 미이행 정황을 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 보증금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">렌터카 보증금 이중예약 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·차량 확보·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 확보·예약 안내 대화 캡처 (거래 조건)</strong></li>\n<li><strong>예약 약정·차종·일정·요금 내용 (계약 내용)</strong></li>\n<li><strong>보증금·예약금 송금 내역 (피해 금액)</strong></li>\n<li><strong>같은 차량 이중예약·중복 모집 정황 자료</strong></li>\n<li><strong>인수일 차량 부재·환불 미이행 기록</strong></li>\n<li><strong>업체·개인·연락처·계좌 정보</strong></li>\n<li><strong>다른 피해자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량이 확보됐다며 보증금을 요구한 대화와, 인수일에 차량이 없거나 같은 차를 여러 사람에게 예약받은 이중예약 정황을 함께 모으면 차량 확보·인도 의사 부재를 다투는 데 도움이 됩니다. 보증금이 어느 계좌로 흘러갔는지 송금 흐름을 보존하고, 같은 업체·계좌에 당한 다른 피해자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>차량 확보·인도 의사</strong> — 보증금 수령 당시 차량을 확보·인도할 의사·능력이 있었는지.</li>\n<li><strong>이중예약</strong> — 같은 차량을 여러 사람에게 중복 예약받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 일정 충돌인지 처음부터 보증금만 노렸는지.</li>\n<li><strong>편취액</strong> — 보증금·예약금 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·개인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (렌터카·예약 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래 당시 기망행위 유무의 판단',
        summary:
          '대법원 2015도17452(대법원, 2016.03.24 선고) 영역에서 법원은 자동차를 매도하겠다고 하고 인도하면서 매매대금을 받은 뒤 미리 부착한 GPS로 위치를 추적해 다시 가져간 사안에서, 피고인이 자동차를 인도하고 소유권이전등록에 필요한 일체의 서류를 교부해 매수인이 언제든 소유권이전등록을 마칠 수 있게 된 이상, 매도 후 다시 가져갈 의사가 있었더라도 소유권을 이전할 의사가 없었다고 볼 수 없다고 보았습니다. 그리하여 매도 당시 곧바로 다시 가져갈 의사를 숨겼다는 사정만으로는 기망행위가 있었다고 할 수 없어 사기죄를 인정한 원심에 법리오해의 잘못이 있다고 판시했습니다. 곧 사기죄의 기망은 거래 당시를 기준으로 인도·이행 의사가 있었는지로 가려야 한다는 취지입니다. 렌터카 보증금을 받은 사안을 살펴볼 때에도, 보증금을 받을 당시 차량을 확보·인도할 의사·능력이 있었는지를 기준으로 기망과 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '차량 확보 가장·선입금 유도 + 이중예약·미인도 + 환불 거부 결합 시 렌터카 보증금 이중예약 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '차가 갑자기 빠졌다는데 사기인가요?',
        answer:
          '<strong>보증금 받을 당시 차량을 확보·인도할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 차량 확보 강조 대화와 이중예약 정황을 확보하세요.',
      },
      {
        question: '같은 차를 여러 명이 예약했다는 걸 어떻게 아나요?',
        answer:
          '<strong>중복 모집·동일 차량 안내가 이중예약의 단서인 영역입니다.</strong> 다른 예약자와 게시글·대화를 비교해 모으세요.',
      },
      {
        question: '환불해주겠다더니 연락을 끊었어요.',
        answer:
          '<strong>환불 약속 후 잠적은 편취 범의를 의심할 단서인 영역입니다.</strong> 환불 약속 대화와 미이행 정황을 보존하세요.',
      },
      {
        question: '계좌로 보냈는데 돈을 추적할 수 있나요?',
        answer:
          '<strong>지급정지·피해구제로 자금을 다툴 수 있는 영역입니다.</strong> 송금 계좌·일시를 특정해 신속히 신고하세요.',
      },
      {
        question: '다른 사람도 같은 계좌에 당한 것 같아요.',
        answer:
          '<strong>동일 계좌의 다수 피해는 편취 다툼의 출발점인 영역입니다.</strong> 같은 업체·계좌 피해자를 모아 함께 접수하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '렌터카 예약 보증금 허위 추적', href: '/guide/fraud/fraud-rental-car-booking-deposit-fake-track' },
      { label: '임대 매물 보증금 이중등록 추적', href: '/guide/fraud/fraud-rental-property-deposit-double-listing-track' },
      { label: '허위 임대 매물 선보증금 추적', href: '/guide/fraud/fraud-fake-rental-listing-deposit-upfront-track' },
      { label: '수입차 리스 보증금 잠적', href: '/guide/fraud/fraud-luxury-car-lease-deposit-vanish' },
    ],
  },

  // ─── 6. fraud-joint-stock-investment-loss-concealment-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-stock-investment-loss-concealment-falsely-accused-defense',
    keyword: '공동 주식투자 손실 은폐 사기 고의 무고 방어',
    questionKeyword: '지인·친구와 함께 자금을 모아 주식에 공동투자하면서 제가 계좌를 관리하고 운용했는데, 시장이 나빠져 손실이 나자 상대가 ‘처음부터 손실을 숨기고 수익이 난 것처럼 속여 돈을 가로챘다, 사기다’라며 저를 고소했어요. 저는 실제로 투자에 운용했고 거래 내역도 있으며, 다만 손실 사실을 즉시 자세히 알리지 못했을 뿐 편취할 생각은 전혀 없었다고 생각해요. 그런데 투자 손실 다툼이 한순간에 사기 고의로 몰려 너무 억울해요. 거래·운용 내역이 분명히 있는데, 이렇게 공동 주식투자 손실 은폐가 사기로 고소된 상황에서 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '공동 주식투자 편취 고의·투자손실 구별 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '공동 주식투자 손실 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '함께한 주식투자에서 손실이 났는데 사기로 고소돼 억울하다면, 편취 고의 판단 시점과 투자손실·채무불이행 구별 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·친구·동료와 함께 돈을 모아 주식에 공동으로 투자하면서 제가 대표로 계좌를 관리하고 매매를 운용해왔는데, 시장이 급락하거나 종목이 하락해 손실이 나자 상대가 ‘처음부터 손실을 숨기고 수익이 난 것처럼 속여 투자금을 가로챈 것이다, 이건 사기다’라며 저를 고소해, 한순간에 사기범으로 몰린 분의 상황입니다. 저는 실제로 받은 돈을 주식 계좌에 넣어 운용했고 거래·잔고 내역도 있으며, 다만 손실이 난 사실을 곧바로 자세히 공유하지 못했거나 회복을 기대하며 알리는 것을 미뤘을 뿐 처음부터 돈을 빼돌릴 생각은 전혀 없었다고 생각하는데, 투자 손익을 둘러싼 다툼이라는 민사적 사안이 형사 사기로 비화되어 너무 억울하고 막막하실 거예요. 투자금이 섞여 있고 손익 공유 방식에 관한 명확한 약정이 없으면 ‘손실을 은폐한 편취였다’는 일방적 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 투자 위임의 경위와 실제 운용·거래 내역, 손실 발생과 공유 경위를 차분히 정리해 편취 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 편취의 고의가 인정되어야 하고, 그 판단은 행위 당시를 기준으로 하는 영역입니다. 판례는 돈을 받을 당시 변제·운용할 의사와 능력이 있었다면 그 후 손실이 나거나 제대로 돌려주지 못했더라도 이는 민사상 채무불이행에 불과하고, 특히 거래 관계·신용 상태를 서로 알고 손실 위험을 충분히 예상할 수 있었던 경우에는 이후 변제·반환을 못 했다는 사정만으로 곧바로 기망이나 편취 범의를 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 투자 운용의 실질과 거래 내역, 손실 발생·공유 경위를 종합해 편취 고의가 있었는지를 가려 다툴 여지가 있는 영역입니다. 투자 운용 실질 + 거래·잔고 내역 + 손실에 따른 손익 결합은 ‘편취 고의 부재·투자손실 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 투자·위임 경위 정리 ② 운용·거래 내역 ③ 기망·고지 여부 ④ 편취 고의 ⑤ 투자손실 구별·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공동 주식투자 손실 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·운용 내역·기망 여부·편취 고의·투자손실 구별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·위임 경위 정리</strong> — 공동투자 합의·출자·운용 위임 경위 정리.</li>\n<li><strong>② 운용·거래 내역</strong> — 투자금이 실제 주식 매매에 운용된 거래·잔고 내역 정리.</li>\n<li><strong>③ 기망·고지 여부</strong> — 수익·손실·운용 상황을 사실대로 알렸는지 검토.</li>\n<li><strong>④ 편취 고의</strong> — 행위 당시 기준으로 편취의 범의가 인정되는지 검토.</li>\n<li><strong>⑤ 투자손실 구별·방어</strong> — 손실·손익 다툼이 민사 분쟁에 그치는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 투자금을 빼돌릴 의사로 투자를 가장했는지(편취 고의), 아니면 실제 운용 중 손실이 나고 공유가 늦은 것(투자손실)인지가 판단의 분기점입니다. 투자 운용의 실질과 거래·잔고 내역, 손실 발생·공유 경위를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·거래 자료 보존 (즉시)</strong> — 공동투자 합의·출자·운용 위임·매매 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 운용·손익 정리 (즉시)</strong> — 투자금이 실제 매매에 운용된 거래·잔고·손익을 계좌로 정리.</li>\n<li><strong>3단계 — 편취 고의·고지 검토 (병행)</strong> — 손실 발생 경위와 수익·손실 공유 정황, 기망 부재를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 투자손실 구별·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동 주식투자 손실 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·운용 내역·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>공동투자 합의·출자·위임 대화 (거래 경위)</strong></li>\n<li><strong>주식 계좌·매매·잔고·손익 내역 (자금 흐름)</strong></li>\n<li><strong>투자금 입출금·운용 자금 흐름 자료 (운용 실질)</strong></li>\n<li><strong>수익·손실·운용 상황 공유·고지 기록 (고지 내용)</strong></li>\n<li><strong>손실 발생 경위·시장 상황 자료</strong></li>\n<li><strong>정산·손익 분배 협의·제안 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투자금이 실제 주식 매매에 운용됐음을 계좌·매매·잔고 내역으로 정리하면 투자금을 빼돌린 편취가 아니라 통상의 투자 운용이었음을 다투는 데 도움이 됩니다. 수익·손실·운용 상황을 공유한 기록과 손실이 난 경위를 함께 모아 투자손실과의 구별을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 행위 당시 투자금을 편취할 범의가 있었는지.</li>\n<li><strong>기망·고지</strong> — 수익·손실·운용 상황을 사실대로 알렸는지.</li>\n<li><strong>운용 실질</strong> — 투자금이 실제 주식 매매에 운용됐는지.</li>\n<li><strong>투자손실 구별</strong> — 손실·손익 다툼이 민사 분쟁에 그치는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용·운용 사기에서 편취 범의의 판단 기준',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄의 성립 여부는 행위 당시를 기준으로 판단해야 하므로, 돈을 받을 당시에 변제·이행할 의사와 능력을 가지고 있었다면 비록 그 후에 변제·반환하지 못하더라도 이는 민사상 채무불이행에 불과하고 형사상 사기죄가 성립하지 않는다고 보았습니다. 특히 친척·친지와 같은 인적 관계나 계속적 거래 관계로 상대방이 신용 상태를 알고 있어 장래의 변제 지체·불능 위험을 예상하고 있었거나 충분히 예상할 수 있었던 경우에는, 중요한 사항에 관해 허위 사실을 말한 등의 다른 사정이 없는 한 그 후 제대로 변제하지 못했다는 사실만으로 변제능력에 관해 기망했다거나 편취 범의가 있었다고 단정할 수 없다고 판시했습니다. 공동 주식투자 손실이 사기로 고소된 사안을 살펴볼 때에도, 행위 당시 운용·반환 의사와 능력이 있었는지, 손실이 단순 투자 위험의 실현인지를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '투자 운용 실질 + 거래·잔고 내역 + 손실에 따른 손익 결합 시 편취 고의 부재·투자손실 구별 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '투자해서 손해가 났는데 무조건 사기인가요?',
        answer:
          '<strong>행위 당시 투자금을 편취할 범의가 있었는지가 핵심인 영역입니다.</strong> 투자금이 실제 매매에 운용된 내역을 정리하세요.',
      },
      {
        question: '손실을 바로 안 알린 게 은폐로 보이나요?',
        answer:
          '<strong>공유가 늦은 사정과 편취 의도는 구별해 따지는 영역입니다.</strong> 손실 발생 경위와 공유 시점을 시간순으로 정리하세요.',
      },
      {
        question: '약정서를 안 써둬서 불리한가요?',
        answer:
          '<strong>약정서가 없어도 계좌·매매·대화로 투자 실질을 다툴 수 있는 영역입니다.</strong> 출자·운용·손익 기록을 모으세요.',
      },
      {
        question: '투자 손실 다툼인데 형사로 고소됐어요.',
        answer:
          '<strong>손익 다툼이 민사 분쟁에 그치는지가 구별의 핵심인 영역입니다.</strong> 손실 경위와 손익 분배 협의 기록을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>투자 경위·운용·손익에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '동료 코인 투자 손실 분쟁', href: '/guide/fraud/fraud-coworker-coin-investment-loss-dispute' },
      { label: '투자 모임 회원 손실 무고 방어', href: '/guide/fraud/fraud-investment-club-member-loss-falsely-accused-defense' },
      { label: '주식 리딩방 강요', href: '/guide/fraud/fraud-investment-stock-room-coercion' },
      { label: '공동 투자 수익 보장 추적', href: '/guide/fraud/fraud-joint-investment-profit-guarantee-track' },
    ],
  },

  // ─── 7. sex-crime-waterpark-shower-room-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-waterpark-shower-room-touch-report-track',
    keyword: '워터파크 샤워실 추행 신고',
    questionKeyword: '워터파크·수영장 샤워실·탈의실에서 씻고 있던 중, 옆에 있던 사람이 비좁고 미끄러운 공간을 핑계 삼아 엉덩이·허벅지·가슴 등 신체에 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 사람이 많아 닿은 건가 싶었지만 접촉이 계속되고 노골적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 물놀이 공간이라 옷차림이 가볍고 당황해 그 자리에서 제대로 항의하지 못했는데, 이런 워터파크 샤워실 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '워터파크 샤워실 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '워터파크 샤워실 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '워터파크 샤워실에서 비좁은 공간을 핑계로 신체에 손을 대는 접촉을 당해 수치스러웠다면, 강제추행죄의 추행 해당성·고의 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「워터파크·수영장의 샤워실·탈의실에서 물놀이를 마치고 씻거나 옷을 갈아입던 중, 바로 옆에 있던 사람이 비좁고 미끄러운 공간, 김이 서린 어수선한 상황을 핑계 삼아 엉덩이·허벅지·가슴·허리 등 신체의 민감한 부위에 손을 대거나, 몸을 바짝 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘사람이 많아 어쩌다 닿은 건가’ 싶어 자리를 옮기거나 몸을 틀었는데도, 시간이 지나도 접촉이 계속되고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 비좁은 공간을 틈탄 추행이라는 생각이 들었지만, 물놀이 공간이라 옷차림이 가볍고 갑작스러운 상황에 당황해 큰 소리로 항의하거나 곧바로 제지하기도 어려웠던 채 당하고 나니, 신고해도 ‘좁은 데서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 워터파크에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 비좁은 공간을 핑계로 했더라도 신체의 민감한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄에서 추행은 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 하고, 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 한다고 본 사례 흐름이 있는 영역으로, 좁은 공간을 틈탄 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 좁은 공간 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘샤워실 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 워터파크 샤워실 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 시설명·이용 시간대·샤워실 위치·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허벅지·가슴 등 접촉 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 우연한 스침을 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비좁아 닿았다는 변명과 달리, 좁은 공간을 틈타 민감 부위를 만지거나 필요 이상 밀착해 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 시설 CCTV·이용 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 시설명·시간대·위치·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 시설·탈의실 인근 CCTV·입장·결제·라커 내역·동행자·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">워터파크 샤워실 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>시설명·이용 시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>시설·탈의실 인근 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장권·결제·라커·예약 등 이용 입증 자료</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 샤워실 내부는 CCTV가 없을 수 있으나 입구·통로·라커 구역 CCTV와 입장·결제 내역으로 동선을 보강할 수 있고, 보관 기간이 짧으니 시간대를 특정해 경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 스침으로 설명되지 않는 접촉이 자리를 옮긴 뒤에도 반복됐다는 점을 구체적으로 기록하면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>추행 고의</strong> — 행위마다 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘좁아서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동선·목격으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 추행 해당성과 추행의 고의',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄에서의 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 의미하고, 어떠한 행위가 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합적으로 고려해 신중히 결정해야 한다고 보았습니다. 또 강제추행죄가 성립하려면 문제 되는 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하다면 유죄로 판단할 수 없다고 판시했습니다. 좁은 샤워실에서의 접촉이 문제 된 사안을 살펴볼 때에도, 구체적 행위 태양과 정황을 종합해 추행 해당성과 추행의 고의를 가려 검토해볼 수 있습니다.',
        takeaway: '좁은 공간 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 샤워실 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '샤워실이라 CCTV가 없는데 신고할 수 있나요?',
        answer:
          '<strong>입구·통로 CCTV·이용 내역·목격으로도 다툴 수 있는 영역입니다.</strong> 인근 영상과 동선 자료를 폭넓게 모으세요.',
      },
      {
        question: '당황해서 그 자리에서 항의하지 못했어요.',
        answer:
          '<strong>당혹으로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '옷차림이 가벼웠던 게 불리하게 작용하나요?',
        answer:
          '<strong>옷차림은 추행 성부와 무관하게 행위 자체를 따지는 영역입니다.</strong> 접촉의 태양·반복을 중심으로 정리하세요.',
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
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-nightclub-dancefloor-crowd-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-nightclub-dancefloor-crowd-touch-report-track',
    keyword: '클럽 댄스플로어 인파 추행 신고',
    questionKeyword: '클럽 댄스플로어처럼 사람이 빽빽하고 어두운 곳에서 춤을 추던 중, 뒤·옆 사람이 인파에 섞인 틈을 타 엉덩이·허벅지·허리에 손을 대거나 몸을 밀착해 비비는 등 명백히 의도적인 접촉을 해 너무 불쾌하고 수치스러웠어요. 처음엔 사람이 많아 부딪힌 건가 싶었지만 접촉이 계속되고 노골적이라 인파를 틈탄 추행이라는 확신이 들었어요. 어둡고 사람이 많아 누가 그랬는지 특정하거나 그 자리에서 항의하기도 어려웠는데, 이런 클럽 댄스플로어 인파 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '클럽 댄스플로어 인파 밀집 이용 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '클럽 댄스플로어 인파 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '클럽 인파를 틈타 엉덩이·허벅지를 만지는 의도적 접촉을 당해 수치스러웠다면, 공중밀집장소 추행 신고 절차와 증거 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·라운지의 댄스플로어처럼 사람이 빽빽하게 모여 있고 조명이 어둡고 음악이 큰 공간에서 춤을 추거나 서 있던 중, 바로 뒤·옆에 있던 사람이 인파에 섞여 잘 보이지 않는 틈을 타 엉덩이·허벅지·허리·손등 등에 손을 대거나, 몸을 바짝 밀착해 비비는 등 단순한 부딪힘으로는 설명되지 않는 의도적인 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘사람이 많아 어쩌다 부딪힌 건가’ 싶어 자리를 옮기거나 몸을 틀었는데도, 시간이 지나도 접촉이 계속되고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 인파를 틈탄 추행이라는 확신이 들었지만, 어둡고 어수선하며 빽빽한 곳이라 누가 그랬는지 특정하거나 큰 소리로 항의하기도 어려운 상황에서 당하고 나니, 신고해도 ‘사람 많은 데서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법은 대중교통수단·공연·집회 장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행한 경우를 처벌하는 영역입니다. 클럽 댄스플로어처럼 공중이 밀집한 장소를 이용해 의사에 반해 엉덩이·허벅지 등을 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행 여부를 판단할 때 피해자의 의사·관계·경위·구체적 행위 태양과 주위의 객관적 상황 등을 종합해 신중히 판단해야 하고, 비장애인의 시각이나 일반적 기준만으로 피해자의 상태나 정황을 쉽게 단정해서는 안 된다고 본 사례 흐름이 있는 영역으로, 어둡고 밀집한 상황을 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 인파 밀집 이용 + 의사에 반하는 접촉·밀착 + 반복·노골 결합은 ‘공중밀집장소 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 댄스플로어 인파 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 클럽명·장소·시간대·혼잡도·서 있던 위치 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허벅지·허리 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 공중밀집장소를 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부딪혔다는 변명과 달리, 인파를 틈타 의사에 반해 엉덩이·허벅지를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 클럽 CCTV·입장·결제 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 클럽명·장소·시간대·위치·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 클럽 내부·입구 CCTV·입장·결제·일행·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 댄스플로어 인파 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>클럽명·장소·시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>클럽 내부·입구 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장권·결제·예약 등 방문 입증 자료</strong></li>\n<li><strong>일행·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽 내부·입구 CCTV는 보관 기간이 짧으니 장소·시간대를 특정해 경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 부딪힘으로 설명되지 않는 의도적 접촉이 자리를 옮긴 뒤에도 반복됐다는 점을 구체적으로 기록하면 공중밀집장소 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 인파를 틈탄 의사에 반하는 접촉·밀착인지.</li>\n<li><strong>공중밀집장소</strong> — 공중이 밀집한 장소를 이용했는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘부딪혀서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·일행·목격으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 판단에서 정황과 피해자 상태의 신중한 고려',
        summary:
          '대법원 2016도4404(대법원, 2021.02.25 선고) 영역에서 법원은 강간·강제추행 등 성범죄의 성립과 추행 여부를 판단할 때 피해자의 의사와 상태, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 보았습니다. 특히 피해자가 처한 상태나 정황은 개인별로 차이가 있어 이를 본질적 요소로 충분히 고려해야 하고, 비장애인의 시각이나 일반적 기준만으로 피해자의 상태를 쉽게 단정해서는 안 되며, 행위자도 범행 당시 그러한 사정을 인식하였는지를 함께 살펴야 한다고 판시했습니다. 어둡고 밀집한 클럽에서 인파를 틈탄 접촉이 문제 된 사안을 살펴볼 때에도, 피해자가 처한 상황과 구체적 행위 태양을 신중히 고려해 추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '인파 밀집 이용 + 의사에 반하는 접촉·밀착 + 반복·노골 결합 시 공중밀집장소 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '부딪혀서 닿은 것뿐이라는데 추행인가요?',
        answer:
          '<strong>인파를 빌렸어도 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 부딪힘으로 설명되지 않는 접촉·반복 정황을 기록하세요.',
      },
      {
        question: '어둡고 사람이 많아 누가 그랬는지 모르겠어요.',
        answer:
          '<strong>클럽 CCTV·일행·목격으로 가해자를 특정할 수 있는 영역입니다.</strong> 장소·시간대를 특정해 보존을 요청하세요.',
      },
      {
        question: '그 자리에서 항의하지 못했는데 신고할 수 있나요?',
        answer:
          '<strong>혼잡·당혹으로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '술을 마신 상태였는데 불리한가요?',
        answer:
          '<strong>음주 여부와 무관하게 접촉의 태양으로 추행을 다투는 영역입니다.</strong> 접촉 부위·반복과 직후 정황을 정리하세요.',
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
      { label: '축제 인파 밀집 추행 신고', href: '/guide/sex-crime/sex-crime-festival-dense-crowd-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
      { label: '클럽 댄스플로어 그루핑 신고', href: '/guide/sex-crime/sex-crime-club-dancefloor-grope-report-track' },
    ],
  },

  // ─── 9. sex-crime-massage-shop-service-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-service-pretext-touch-report-track',
    keyword: '마사지샵 서비스 빙자 추행 신고',
    questionKeyword: '마사지샵·스파에서 관리를 받던 중, 관리사가 ‘서비스 동작이다, 시원하게 풀어주는 과정이다’라며 가슴 주변·엉덩이·허벅지 안쪽 등 관리와 무관한 부위까지 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 관리 동작인가 싶어 참았지만 갈수록 접촉이 노골적이고 무관한 부위에 집중되며, 다른 손님도 비슷한 일을 겪었다는 말을 들으니 단순 서비스가 아니라 추행 같다는 생각이 들어요. 이런 마사지샵 서비스 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '마사지샵 서비스 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 서비스 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '서비스 동작을 빙자해 민감한 부위에 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성·간접정범 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「마사지샵·스파·테라피샵에서 관리를 받던 중, 관리사가 ‘이게 서비스 동작이다, 시원하게 풀어주려면 이렇게 해야 한다, 근육을 깊이 눌러야 한다’는 명목으로 가슴 주변·엉덩이·허벅지 안쪽·골반 등 받기로 한 관리와 직접 관련 없는 민감한 부위에까지 필요 이상으로 손을 대거나, 몸을 바짝 붙여 누르는 척하며 신체를 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘원래 관리가 이렇게 과감한가’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 관리와 무관한 부위에 집중되며, 커튼으로 가려지거나 둘만 있는 밀폐된 룸에서 유독 그러는 듯하고, 다른 손님도 비슷한 일을 겪었다는 이야기까지 들으니, 단순한 서비스 동작이 아니라 관리를 빙자한 추행은 아닌지 의심되고, 신고해도 ‘관리 과정에서 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 편하게 쉬려고 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 서비스 동작을 가장했더라도 관리와 무관한 민감 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄가 정범 자신이 직접 실행해야 성립하는 자수범이 아니므로, 피해자를 도구로 삼아 피해자의 신체를 이용해 추행한 경우에도 강제추행죄가 성립할 수 있고, 추행 여부는 피해자의 의사·관계·경위·구체적 행위 태양과 주위 상황 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 서비스를 빙자한 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 서비스 빙자 + 무관 부위 접촉 + 밀착·반복 결합은 ‘서비스 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 서비스 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 예약·결제·관리 종류·관리사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 관리와 무관한 민감 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 서비스 동작의 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 관리 동작과 달리, 관리와 무관한 민감 부위를 만지거나 필요 이상 밀착해 서비스의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 손님의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 관리 종류·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 샵 예약·결제·메시지·내부·복도 CCTV·다른 손님의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 서비스 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약·결제·관리 프로그램 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>샵 내부·복도 CCTV·룸 구조 보존 요청 자료</strong></li>\n<li><strong>관리사·샵과 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 손님의 유사 경험·후기·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 관리 중 접촉은 밀폐된 룸이라 목격자가 적을 수 있으므로 예약·결제 기록, 직후 메시지, 다른 손님의 유사 경험으로 정황을 보강할 수 있습니다. 접촉이 관리와 무관한 민감 부위에 집중됐는지, 반복됐는지를 구체적으로 기록하면 서비스 동작의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 관리와 무관한 부위 접촉·밀착인지.</li>\n<li><strong>서비스 범주</strong> — 통상의 관리 동작 범위를 넘는지.</li>\n<li><strong>유형력 행사</strong> — 의사에 반하는 불법한 유형력이 있었는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄와 간접정범, 추행의 의미',
        summary:
          '대법원 2016도17733(대법원, 2018.02.08 선고) 영역에서 법원은 강제추행죄에서 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 의미하고, 그 해당 여부는 피해자의 의사·성별·나이, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 보았습니다. 또 강제추행죄는 정범 자신이 직접 실행해야만 성립하는 자수범이 아니므로, 처벌되지 않는 타인을 도구로 삼아 추행하는 간접정범의 형태로도 범할 수 있고, 그 도구가 되는 타인에는 피해자도 포함될 수 있어 피해자를 도구로 삼아 피해자의 신체를 이용해 추행한 경우에도 강제추행죄에 해당할 수 있다고 판시했습니다. 서비스를 빙자한 마사지샵 접촉이 문제 된 사안을 살펴볼 때에도, 의사에 반하는 접촉이 관리의 범주를 넘어 성적 자유를 침해하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '서비스 빙자 + 무관 부위 접촉 + 밀착·반복 결합 시 서비스 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '관리 동작이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>관리의 범주를 넘어 성적 자유를 침해하는 접촉인지·의사에 반하는 유형력이 있었는지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 서비스인 줄 알고 참았어요.',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '밀폐된 룸이라 목격자가 없어요.',
        answer:
          '<strong>예약·결제·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '다른 손님도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·후기·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 손님의 진술을 확보하세요.',
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
      { label: '마사지샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-pretext-touch-report-track' },
      { label: '마사지샵 강제 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
      { label: '네일샵 서비스 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-nail-salon-service-pretext-touch-report-track' },
      { label: '피부관리샵 케어 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-skincare-shop-care-pretext-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-office-dinner-drunk-colleague-touch-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-office-dinner-drunk-colleague-touch-falsely-accused-defense',
    keyword: '회식 만취 동료 추행 무고 방어',
    questionKeyword: '회식 자리에서 다 같이 술을 많이 마시고 만취한 상태로 좁은 테이블에 끼어 앉거나 부축하며 자리를 옮기던 중 동료와 신체가 닿았을 뿐인데, 며칠 뒤 그 동료가 ‘그때 추행을 당했다’며 저를 성범죄로 고소했어요. 저는 추행할 의도가 전혀 없었고 좁은 자리·부축 과정에서 우발적으로 닿은 것이라고 생각하는데, 다 같이 취한 자리라 기억이 흐릿한 부분도 있고 직접 목격자가 없어 동료 진술이 사실상 유일한 증거라 한순간에 가해자로 몰려 너무 억울해요. 이렇게 회식 만취 상황의 접촉이 추행으로 고소된 상황에서 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '회식 만취 추행 고의 부재·진술 신빙성 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 만취 동료 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '회식 만취 상황의 우발적 접촉이 추행으로 고소돼 억울하다면, 추행 고의 판단과 무죄추정·진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식 자리에서 다 같이 술을 많이 마시고 만취한 상태로, 좁은 테이블에 여럿이 끼어 앉거나 비틀거리는 동료를 부축하고 자리를 옮기고 단체로 이동하는 과정에서 동료와 신체가 닿았을 뿐인데, 며칠 또는 한참 뒤에 그 동료가 ‘그때 추행을 당했다’며 저를 성범죄로 고소해, 한순간에 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 좁은 좌석·부축·혼잡한 이동 과정에서 우발적으로 스친 것이라고 기억하는데, 다 같이 취한 자리라 서로 기억이 흐릿한 부분도 있고, 직접 목격자가 없거나 모두 술에 취해 진술이 엇갈려 동료의 진술이 사실상 유일한 증거가 되다 보니, 진술 다툼만 남은 채 억울하게 몰릴까 봐 너무 막막하실 거예요. 함께 일하던 동료 사이에서 벌어진 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 회식 경위와 좌석·동선, 접촉이 우발적이었던 정황을 차분히 정리해 추행 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄나 공중 밀집 장소 등에서의 추행이 성립하려면 추행행위와 그에 대한 고의, 곧 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 인정되어야 하는 영역입니다. 판례는 피고인이 추행의 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 통해 증명할 수밖에 없고, 피고인의 나이·경력, 행위에 이르게 된 경위와 동기, 피고인과 피해자의 관계, 구체적 행위 태양과 전후 정황 등 객관적 사정을 종합해 판단해야 하며, 무죄추정의 원칙상 합리적 의심이 남으면 피고인의 이익으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 만취 회식의 정황과 접촉의 우발성, 추행 고의 여부와 진술의 신빙성을 종합해 다툴 여지가 있는 영역입니다. 회식 경위 + 좌석·부축 등 우발적 접촉 + 진술 중심 증거 결합은 ‘추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉의 우발성 ③ 추행 고의 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 만취 동료 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 우발성·추행 고의·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 회식 장소·좌석 배치·이동·부축 등 경위 정리.</li>\n<li><strong>② 접촉의 우발성</strong> — 좁은 자리·부축·혼잡 이동에서 우발적으로 닿았는지 정리.</li>\n<li><strong>③ 추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정될 정황이 있는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 동료 진술이 유일·일관·정황 부합하는지, 기억 오류·오염 가능성은 없는지 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 좌석·부축에서 우발적으로 닿은 것인지, 추행을 용인하는 내심의 의사(고의)가 인정될 정황이 있는지가 판단의 분기점입니다. 회식 경위·좌석·동선과 접촉의 우발성, 동료 진술이 유일 증거인지·일관·정황에 부합하는지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·정황 자료 보존 (즉시)</strong> — 회식 장소·좌석·이동·참석자·당일 대화·메시지를 보존.</li>\n<li><strong>2단계 — 접촉 우발성 정리 (즉시)</strong> — 좁은 자리·부축·혼잡 이동에서 닿은 경위와 접촉의 우발성을 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 동료 진술이 유일 증거인지, 일관·정황 부합하는지와 기억 오류·모순 가능성을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 만취 동료 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉 우발성·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 장소·좌석 배치·이동 경위 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·우발성 정황 기록 (행위 태양)</strong></li>\n<li><strong>매장·인근·이동 동선 CCTV 보존 요청 자료</strong></li>\n<li><strong>참석자·동석자 진술·연락처 (정황)</strong></li>\n<li><strong>당일·전후 대화·메시지·취기 정황 기록</strong></li>\n<li><strong>동료 진술의 일관성·모순·정황 불부합·오염 가능성 정리</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식 장소·좌석·이동 동선과 접촉이 좁은 자리·부축에서 우발적으로 일어난 경위를 CCTV·참석자 진술로 정리하면 접촉의 우발성을 다투는 데 도움이 됩니다. 동료 진술이 유일 증거인지, 시점에 따라 달라지거나 정황과 모순되는 부분은 없는지, 취중 기억 오류·암시로 오염될 가능성은 없었는지를 정리하면 추행 고의를 다투는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정되는지.</li>\n<li><strong>접촉 우발성</strong> — 좁은 자리·부축에서 우발적으로 닿았는지.</li>\n<li><strong>진술 신빙성</strong> — 동료 진술이 유일·일관·정황에 부합하는지.</li>\n<li><strong>기억 오류·오염</strong> — 취중 기억 오류·암시로 진술이 오염될 가능성이 있는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의의 증명과 무죄추정의 원칙',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 추행죄가 성립하려면 주관적 구성요건으로서 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 있어야 하므로, 피고인이 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법으로 판단할 수밖에 없다고 보았습니다. 이때 피고인의 나이·지능·판단능력, 직업과 경력, 행위에 이르게 된 경위와 동기, 피고인과 피해자의 관계, 구체적 행위 태양과 전후 정황 등 객관적 사정을 종합해야 하고, 고의를 인정할 만한 징표와 어긋나는 의문점이 해소되어야 한다고 판시했습니다. 또 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하므로, 그러한 확신에 이르지 못하면 유죄의 의심이 들더라도 피고인의 이익으로 판단해야 한다고 보았습니다. 만취 회식의 접촉이 추행으로 주장되는 사안을 살펴볼 때에도, 추행 고의를 뒷받침하는 간접사실과 진술의 신빙성, 접촉의 우발성을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '회식 경위 + 좌석·부축 등 우발적 접촉 + 진술 중심 증거 결합 시 추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '좁은 자리에서 우발적으로 닿았는데 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 인정될 정황이 있는지가 핵심인 영역입니다.</strong> 좌석·동선과 접촉의 우발성을 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>경위·정황·전후 행동 같은 간접사실로 고의 부재를 다투는 영역입니다.</strong> 회식 경위와 참석자 진술을 정리하세요.',
      },
      {
        question: '동료 진술만 있고 목격자가 없어요.',
        answer:
          '<strong>합리적 의심이 남으면 피고인의 이익으로 보는 무죄추정이 적용되는 영역입니다.</strong> 진술의 일관성·정황 부합 여부를 검토하세요.',
      },
      {
        question: '다 같이 취해서 기억이 흐릿한데 불리한가요?',
        answer:
          '<strong>취중 기억 오류·진술 오염 가능성을 함께 살피는 영역입니다.</strong> 진술 시점·경위와 정황 자료를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>회식 경위·좌석·접촉 경위에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 혐의 방어 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '회식 자리 강요 접촉 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
      { label: '회식 노래방 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-karaoke-touch-report-track' },
      { label: '사무실 탕비실 추행 신고', href: '/guide/sex-crime/sex-crime-office-pantry-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

];
