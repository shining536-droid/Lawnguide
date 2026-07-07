import { SpokePage } from '../spoke-pages';

// batch119 fraud(6) + sex-crime(4) — 10개 (2026-07-07)
//
// 고유 존재 이유:
// 1. fraud-refurbished-display-item-sold-as-new-track — 일반 하자 분쟁과 분기. '리퍼·전시·반품품을 미개봉 새 제품으로 속여 새 제품 값을 받은' 리퍼 둔갑 기망 편취 판단형 트랙(victim).
// 2. fraud-serviced-hotel-guaranteed-return-presale-track — 일반 부동산 투자와 분기. '분양형 호텔·생활형 숙박시설 확정수익을 보장한다며 분양·투자금을 편취한' 확정수익 보장 분양 절차형 트랙(victim).
// 3. fraud-game-rank-boosting-prepayment-vanish-track — 일반 게임 계정거래와 분기. '게임 대리랭크·부스팅 대행 선입금만 받고 잠적한' 대행 선입금 미이행 편취 절차형 트랙(victim).
// 4. fraud-realestate-auction-consulting-winning-bid-fee-track — 일반 컨설팅 분쟁과 분기. '부동산 경매 낙찰을 보장한다며 허위 실적으로 컨설팅 수수료를 편취한' 낙찰 보장 수수료 편취 판단형 트랙(victim).
// 5. fraud-webtoon-copyright-revenue-share-investment-track — 일반 투자 분쟁과 분기. '웹툰·콘텐츠 저작권 수익배분을 앞세워 투자금을 편취한' 저작권 수익배분 투자 기망 판단형 트랙(victim).
// 6. fraud-groupbuy-organizer-settlement-delay-falsely-accused-defense — 일반 사기 무고류와 분기. '공동구매 총대가 정산 지연으로 편취로 고소당함' 정산 지연·편취 고의 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-hair-salon-scalp-care-pretext-touch-report-track — 일반 추행류와 분기. '미용실 헤어·두피 관리를 빙자해 신체를 추행' 미용 시술 빙자 추행 신고 절차형 트랙(victim).
// 8. sex-crime-goshiwon-sharehouse-common-area-intrusion-touch-report-track — 일반 추행류와 분기. '고시원·셰어하우스 공용공간에 침입해 신체를 추행' 공용공간 침입 추행 신고 판단형 트랙(victim).
// 9. sex-crime-golf-lesson-posture-guidance-touch-report-track — 일반 추행류와 분기. '골프 레슨 자세 지도를 빙자해 신체를 추행' 레슨 지도 빙자 추행 신고 판단형 트랙(victim).
// 10. sex-crime-water-park-water-play-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '워터파크 물놀이 중 우연 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch119FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-refurbished-display-item-sold-as-new-track ───
  {
    domain: 'fraud',
    slug: 'fraud-refurbished-display-item-sold-as-new-track',
    keyword: '리퍼 전시품 새제품 둔갑 판매 기망 사기',
    questionKeyword: '온라인 쇼핑몰·오픈마켓·중고 직거래에서 판매자가 ‘완전 새 제품이다, 미개봉·미사용 정품이고 리퍼·전시품이 아니다’라고 강조해서, 정품 새 제품인 줄 믿고 대금을 치르고 물건을 받았어요. 그런데 막상 받아 보니 잔기스·사용감이 있고 보호필름·봉인이 이미 제거돼 있었으며, 제조번호·시리얼로 조회하니 이미 개통·정품등록·AS 이력이 남아 있는 리퍼·전시·반품 제품이었어요. 항의하니 ‘원래 그런 것, 유통 과정에서 생긴 것’이라며 발뺌하다 연락을 피했고, 알고 보니 같은 판매자가 리퍼·전시품을 새 제품으로 속여 여러 명에게 판 정황이었어요. 처음부터 리퍼·전시품인 줄 알면서 새 제품으로 속여 새 제품 값을 받은 것 같은데, 이런 리퍼 전시품 새제품 둔갑 판매를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '리퍼 전시품 새제품 둔갑 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '리퍼 전시품 새제품 둔갑 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '새 제품인 줄 알고 산 물건이 리퍼·전시·반품품으로 드러나 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 쇼핑몰·오픈마켓·중고 직거래에서 판매자가 ‘완전 새 제품이다, 미개봉·미사용 정품이고 박스도 뜯지 않았다, 리퍼·전시품이 아니라 정식 새 상품이다’라며 새것임을 거듭 강조해, 정품 새 제품이라면 이 값에 살 만하다는 생각으로 대금을 치르고 물건을 받은 분의 상황입니다. 그런데 막상 받아 보니 표면에 잔기스·사용감이 있거나 보호필름·봉인이 이미 제거돼 있었고, 제조번호·시리얼로 조회해보니 이미 개통·정품등록·AS 이력이 남아 있는 리퍼·전시·반품 제품이어서, 새 제품 값을 치르고도 실제로는 사용·반품된 물건을 떠안게 되어 막막하실 거예요. 판매자에게 사용 흔적과 이력 조회 결과를 들이대며 따지면 ‘원래 그런 것, 유통 과정에서 생긴 것’이라며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 리퍼·전시품을 새 제품으로 속여 여러 사람에게 판 정황까지 보이면 단순 변심·교환 다툼이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 리퍼·전시·반품 제품인 줄 알면서도 새 제품인 것처럼 속여 새 제품 값을 받은 정황이면 단순 하자 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 리퍼·전시품을 새 제품으로 속여 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망의 방법으로 타인으로 하여금 처분행위를 하도록 하여 재물이나 재산상 이익을 취득한 경우에는 절도가 아니라 사기죄가 성립하고, 처분행위는 기망에 의한 착오와 재물 취득이라는 결과를 매개·연결하며 착오에 빠진 피해자의 행위를 이용해 재산을 취득하는 것을 본질로 한다고 본 사례 흐름이 있는 영역으로, 새 제품인 줄 알고 대금을 치른 처분행위가 기망에 의한 것인지를 가려 다툴 여지가 있습니다. 새것 강조·이력 은폐 + 사용·반품 흔적 + 발뺌·회피 결합은 ‘리퍼·전시품 새 제품 둔갑 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 리퍼·사용 이력 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 리퍼 전시품 새제품 둔갑 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·이력·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 새 제품 강조 대화·상품 상세페이지·주문·결제 내역 정리.</li>\n<li><strong>② 리퍼·사용 이력 입증</strong> — 시리얼·정품등록·AS 이력과 개봉·사용 흔적 대조.</li>\n<li><strong>③ 편취·손해액</strong> — 새 제품 값으로 지급한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자 다툼과 달리, 리퍼·전시·반품 제품인 줄 알면서 새 제품으로 속여 새 제품 값을 받았는지가 판단의 분기점입니다. 새것을 강조한 대화와 상세페이지, 시리얼·정품등록·AS 이력 조회, 발뺌·회피 정황과 같은 판매자의 반복 판매를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 새 제품 강조 대화·상세페이지·주문·결제 내역을 캡처 보존.</li>\n<li><strong>2단계 — 리퍼·사용 이력 확인 (즉시)</strong> — 시리얼·정품등록·AS 이력 조회와 개봉·사용 흔적 사진을 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">리퍼 전시품 새제품 둔갑 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·이력·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>새 제품·미개봉 강조 대화·광고 캡처 (거래 조건)</strong></li>\n<li><strong>상품 상세페이지·주문서·영수증 (계약 내용)</strong></li>\n<li><strong>결제·송금 내역 (피해 금액)</strong></li>\n<li><strong>시리얼·정품등록·AS 이력 조회 결과 (리퍼 입증)</strong></li>\n<li><strong>개봉·사용 흔적·봉인 제거 사진 (사용 흔적)</strong></li>\n<li><strong>판매자·상호·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 제조번호·시리얼로 정품등록·AS 이력을 조회해 이미 사용·반품된 제품임을 확정하고, 개봉·사용 흔적 사진과 새 제품을 강조한 대화를 대비하면 리퍼·전시품 둔갑 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 리퍼를 새 제품으로 판 흔적을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>리퍼·사용 여부</strong> — 실제로 리퍼·전시·반품 제품이었는지.</li>\n<li><strong>이력 인식·기망</strong> — 이력을 알면서 새 제품으로 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 유통 하자인지 처음부터 대금만 노렸는지.</li>\n<li><strong>편취액</strong> — 새 제품 값으로 지급한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 상호·판매자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 처분행위와 사기죄의 성립',
        summary:
          '대법원 2022도12494(대법원, 2022.12.29 선고) 영역에서 법원은 형법상 절취란 타인이 점유하는 자기 이외의 자의 소유물을 점유자의 의사에 반하여 자기 또는 제3자의 점유로 옮기는 것을 말하고, 이에 반해 기망의 방법으로 타인으로 하여금 처분행위를 하도록 하여 재물 또는 재산상 이익을 취득한 경우에는 절도죄가 아니라 사기죄가 성립한다고 보았습니다. 나아가 사기죄에서 처분행위는 행위자의 기망행위에 의한 피기망자의 착오와 행위자 등의 재물 또는 재산상 이익의 취득이라는 최종적 결과를 중간에서 매개·연결하는 한편, 착오에 빠진 피해자의 행위를 이용하여 재산을 취득하는 것을 본질적 특성으로 하므로, 피기망자의 의사에 기초한 어떤 행위를 통해 행위자 등이 재물 또는 재산상 이익을 취득하였다고 평가할 수 있는 경우라면 사기죄에서 말하는 처분행위가 인정된다고 판시했습니다. 리퍼·전시품을 새 제품으로 속여 대금을 받은 사안을 살펴볼 때에도, 새 제품인 줄 알고 대금을 치른 피해자의 처분행위가 판매자의 기망에 의한 착오에서 비롯된 것인지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '새것 강조·이력 은폐 + 사용·반품 흔적 + 발뺌·회피 결합 시 리퍼·전시품 새 제품 둔갑 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '유통 과정에서 생긴 흠이라는데도 사기인가요?',
        answer:
          '<strong>리퍼·전시품을 알면서 새 제품으로 속였는지가 핵심인 영역입니다.</strong> 새 제품 강조 대화와 사용 흔적을 대비하세요.',
      },
      {
        question: '리퍼·전시품인 걸 어떻게 입증하나요?',
        answer:
          '<strong>시리얼·정품등록·AS 이력이 핵심 단서인 영역입니다.</strong> 제조번호로 조회한 개통·등록 이력을 확보하세요.',
      },
      {
        question: '상세페이지에 새 제품이라 적혀 있었는데 다툴 수 있나요?',
        answer:
          '<strong>표시·설명의 허위 자체를 다투는 영역입니다.</strong> 상세페이지 캡처와 실제 이력·흔적을 대조해 정리하세요.',
      },
      {
        question: '새 제품 값 전부를 피해로 보나요?',
        answer:
          '<strong>새 제품 값으로 지급한 대금을 편취액으로 다투는 영역입니다.</strong> 주문·결제·송금 내역을 정리하세요.',
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
      { label: '중고 전자제품 하자 은폐 추적', href: '/guide/fraud/fraud-second-hand-electronics-fake-defect-track' },
      { label: '중고 명품 가품 추적', href: '/guide/fraud/fraud-secondhand-luxury-fake-track' },
      { label: '가짜 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-fake-online-shopping-mall-nondelivery-track' },
      { label: '중고 기계 하자 은폐 추적', href: '/guide/fraud/fraud-used-machinery-defect-concealment-track' },
    ],
  },

  // ─── 2. fraud-serviced-hotel-guaranteed-return-presale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-serviced-hotel-guaranteed-return-presale-track',
    keyword: '분양형 호텔 확정수익 보장 분양 편취 사기',
    questionKeyword: '분양형 호텔·생활형 숙박시설을 권하는 시행사·분양대행이 ‘연 몇 퍼센트 확정수익을 보장한다, 위탁운영사가 책임지고 임대수익을 지급한다, 공실 걱정이 없다’며 확정수익을 자신 있게 제시해서, 노후 대비 안정적 투자라 믿고 계약금·중도금·분양대금을 냈어요. 그런데 준공 후 약속한 확정수익은 지급되지 않거나 몇 달 만에 끊겼고, 위탁운영·수익보장 근거는 부풀리거나 실체가 없는 것이었어요. 항의하니 ‘경기가 안 좋아서 그렇다’며 발뺌하고 연락을 피했고, 알고 보니 같은 시행사가 여러 수분양자에게 같은 방식으로 확정수익을 부풀려 분양대금을 챙긴 정황이었어요. 처음부터 지킬 수 없는 확정수익을 보장한 것 같은데, 이런 분양형 호텔 확정수익 보장 분양 편취를 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '분양형 호텔 확정수익 보장 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '분양형 호텔 확정수익 보장 분양 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '확정수익을 보장한다던 분양형 호텔 수익이 끊기고 시행사가 발뺌해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「분양형 호텔·생활형 숙박시설·수익형 오피스텔을 권하는 시행사나 분양대행이 ‘연 몇 퍼센트 확정수익을 보장한다, 위탁운영사가 책임지고 임대수익을 매달 지급한다, 공실 걱정 없이 안정적으로 수익이 나온다’며 확정수익을 자신 있게 제시해, 노후 대비로 안정적인 임대수익을 얻을 좋은 기회라는 생각으로 계약금·중도금·분양대금을 낸 분의 상황입니다. 그런데 막상 준공 후에는 약속한 확정수익이 처음부터 지급되지 않거나 몇 달 만에 끊겼고, 계약 당시 근거라며 보여준 위탁운영 계약·수익보장 구조는 크게 부풀려졌거나 실체가 없는 것이어서, 노후 자금·대출까지 들여 투자한 돈이 회수되지 않고 묶이게 되어 막막하실 거예요. 시행사·운영사에 항의하면 ‘경기가 안 좋아서 그렇다, 곧 정상화된다’며 책임을 미루다 연락을 피하고, 뒤늦게 확인해보니 같은 시행사가 비슷하게 확정수익을 부풀려 여러 수분양자에게 분양대금을 받아 챙긴 정황까지 보이면 단순 경기 부진이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 지킬 수 없는 확정수익을 알면서도 보장되는 것처럼 앞세워 분양대금을 받은 정황이면 단순 투자 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 지킬 수 없는 확정수익을 보장되는 것처럼 앞세워 분양대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 원금·수익을 보장한다며 자금을 모으는 유사수신행위와 사기죄는 구성요건과 보호법익이 다른 별개의 범죄이고, 유사수신행위를 한 자가 출자자에게 별도의 기망행위를 하여 자금을 다시 투자받는 행위는 불가벌적 사후행위가 아니라 별죄인 사기죄를 구성한다고 본 사례 흐름이 있는 영역으로, 확정수익 보장을 앞세운 자금 유치와 별도의 기망이 편취에 해당하는지를 가려 다툴 여지가 있습니다. 확정수익 보장·근거 결여 + 실체 없는 운영구조 + 발뺌·회피 결합은 ‘확정수익 보장 분양 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 확정수익 기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 분양형 호텔 확정수익 보장 분양 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 확정수익 제시 대화·분양계약서·수익보장 각서·분양대금 결제 내역 정리.</li>\n<li><strong>② 확정수익 기망 입증</strong> — 보장 수익과 실제 지급, 위탁운영 구조의 실체·근거 부실 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 계약금·중도금·분양대금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경기 부진과 달리, 지킬 수 없는 확정수익을 알면서도 보장되는 것처럼 앞세워 분양대금을 받았는지가 판단의 분기점입니다. 확정수익 제시 자료·수익보장 각서와 실제 지급 내역, 위탁운영 구조의 실체와 발뺌·회피, 같은 시행사의 반복 분양을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 확정수익 제시 대화·분양계약서·수익보장 각서·분양대금 결제 내역을 캡처 보존.</li>\n<li><strong>2단계 — 확정수익 기망 입증 (즉시)</strong> — 보장 수익과 실제 지급 내역, 위탁운영 구조의 실체·근거 부실을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰·기관 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">분양형 호텔 확정수익 보장 분양 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>확정수익 제시·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>분양계약서·수익보장 각서·위탁운영 계약 (계약 내용)</strong></li>\n<li><strong>계약금·중도금·분양대금 결제 내역 (피해 금액)</strong></li>\n<li><strong>실제 수익 지급·미지급 내역 (기망 입증)</strong></li>\n<li><strong>보장 수익과 실제 지급 대조 자료</strong></li>\n<li><strong>시행사·분양대행·운영사·계좌 정보</strong></li>\n<li><strong>이의 제기·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양 당시 제시받은 확정수익·수익보장 각서와 실제 수익 지급·미지급 내역을 시간순으로 대조하고, 위탁운영 구조가 실체가 있는지, 수익보장 근거가 부실하거나 부풀려졌는지 확인하면 지킬 수 없는 확정수익을 앞세웠는지를 다투는 데 도움이 됩니다. 같은 시행사에서 확정수익을 부풀려 분양대금을 낸 다른 수분양자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>확정수익 기망</strong> — 보장 수익이 지킬 수 없는 부풀림이었는지.</li>\n<li><strong>운영구조 실체</strong> — 위탁운영·수익보장 구조에 실체가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 경기 부진인지 처음부터 분양대금만 노렸는지.</li>\n<li><strong>편취액</strong> — 계약금·중도금·분양대금이 피해액인지.</li>\n<li><strong>시행사 특정</strong> — 시행사·분양대행·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (분양·계약 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유사수신과 사기죄의 별죄 관계 및 편취',
        summary:
          '대법원 2023도12424(대법원, 2023.11.16 선고) 영역에서 법원은 유사수신행위의 규제에 관한 법률 제6조 제1항, 제3조를 위반한 행위는 그 자체가 사기행위에 해당한다거나 사기행위를 반드시 포함한다고 할 수 없고, 유사수신행위법 위반죄가 형법 제347조 제1항의 사기죄와 구성요건을 달리하는 별개의 범죄로서 서로 보호법익이 다르다고 보았습니다. 그러므로 유사수신행위를 한 자가 출자자에게 별도의 기망행위를 하여 유사수신행위로 조달받은 자금의 전부 또는 일부를 다시 투자받는 행위는 유사수신행위법 위반죄와 다른 새로운 보호법익을 침해하는 것으로서 유사수신행위법 위반죄의 불가벌적 사후행위가 되는 것이 아니라 별죄인 사기죄를 구성한다고 판시했습니다. 확정수익을 보장한다며 분양대금을 받은 사안을 살펴볼 때에도, 원금·수익 보장을 앞세운 자금 유치와 별도의 기망행위가 결합되어 지킬 수 없는 수익을 보장되는 것처럼 앞세웠는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '확정수익 보장·근거 결여 + 실체 없는 운영구조 + 발뺌·회피 결합 시 확정수익 보장 분양 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경기가 안 좋아 수익이 안 났다는데도 사기인가요?',
        answer:
          '<strong>보장 수익이 지킬 수 없는 부풀림이었는지가 핵심인 영역입니다.</strong> 확정수익 제시 자료와 실제 지급을 대비하세요.',
      },
      {
        question: '확정수익 보장이 기망인 걸 어떻게 밝히나요?',
        answer:
          '<strong>위탁운영 구조의 실체와 수익 근거 부실이 단서인 영역입니다.</strong> 수익보장 각서와 실제 정산을 확인하세요.',
      },
      {
        question: '분양계약서에 서명했는데도 다툴 수 있나요?',
        answer:
          '<strong>계약 체결 과정의 확정수익 기망을 다투는 영역입니다.</strong> 상담·홍보 대화와 수익보장 각서를 정리하세요.',
      },
      {
        question: '계약금 말고 중도금·분양대금도 피해로 보나요?',
        answer:
          '<strong>계약금·중도금·분양대금 등 교부 금액을 편취액으로 다투는 영역입니다.</strong> 결제·송금 내역을 정리하세요.',
      },
      {
        question: '같은 시행사에 여러 수분양자가 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 수분양자의 수익 지급·미지급 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '갭투자 임대수익 보장 추적', href: '/guide/fraud/fraud-gap-investment-rental-income-guarantee-track' },
      { label: '해외 부동산 개발 허위 투자 추적', href: '/guide/fraud/fraud-overseas-realestate-development-fake-investment-track' },
      { label: '기획부동산 지분 쪼개기 추적', href: '/guide/fraud/fraud-planning-realty-land-share-split-track' },
      { label: '부동산 분양 대규모 피해', href: '/guide/fraud/fraud-real-estate-presale-mass-victims' },
    ],
  },

  // ─── 3. fraud-game-rank-boosting-prepayment-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-game-rank-boosting-prepayment-vanish-track',
    keyword: '게임 대리랭크 부스팅 선입금 잠적 사기',
    questionKeyword: '온라인 게임에서 티어·랭크를 올려준다는 대리게임·부스팅 대행업자에게 ‘선입금하면 며칠 안에 목표 티어까지 올려준다, 계정도 안전하게 관리한다’는 말을 믿고 대행비를 미리 보냈어요. 그런데 약속한 기간이 지나도 작업은 진행되지 않았고, 티어는 그대로거나 계정만 넘겨받은 채 연락이 끊겼어요. 환불·이행을 요구하니 ‘곧 시작한다’며 미루다 잠적했고, 알고 보니 같은 업자가 여러 게이머에게 부스팅 선입금만 받고 작업을 하지 않은 정황이었어요. 처음부터 대행해줄 의사 없이 선입금만 챙긴 것 같은데, 이런 게임 대리랭크 부스팅 선입금 잠적을 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '게임 부스팅 선입금 미이행·잠적 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '게임 대리랭크 부스팅 선입금 잠적 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '티어를 올려준다던 부스팅 업자가 선입금만 받고 작업 없이 잠적해 막막하다면, 형법 제347조 사기·미이행 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 게임에서 티어·랭크·점수를 대신 올려준다는 대리게임·부스팅 대행업자가 ‘선입금만 하면 며칠 안에 목표 티어까지 확실히 올려준다, 계정은 안전하게 관리하고 정지 위험도 없다’며 자신 있게 안내해, 실력으로 올리기 어려운 구간을 빠르게 넘길 좋은 기회라는 생각으로 대행비를 미리 계좌로 보낸 분의 상황입니다. 그런데 막상 약속한 기간이 지나도 작업은 시작되지 않았고, 티어는 그대로이거나 계정 아이디·비밀번호만 넘겨받은 채 진행 상황을 물어도 답이 없다가 연락이 끊겨, 선입금한 대행비도 잃고 넘겨준 계정마저 위험에 놓여 막막하실 거예요. 환불이나 이행을 요구하면 ‘이번 주 안에 꼭 시작한다, 작업자가 배정됐다’며 차일피일 미루다 끝내 메신저·연락을 끊고 잠적하고, 뒤늦게 확인해보니 같은 업자가 여러 게이머에게 부스팅 선입금만 받고 작업을 하지 않은 정황까지 보이면 단순 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 대행해줄 의사나 능력 없이 선입금만 받은 정황이면 단순 거래 지연으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 대행해줄 의사 없이 선입금만 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 범죄행위로 피해자가 입은 직접적인 재산상 손해에 대하여 피해금액이 특정되고 피고인의 배상책임 범위가 명백한 경우 형사절차에서 배상명령을 통해 간편·신속하게 피해회복을 도모할 수 있다고 본 사례 흐름이 있는 영역으로, 선입금 후 미이행·잠적으로 특정된 피해금액을 기준으로 편취와 피해회복을 함께 다툴 여지가 있습니다. 이행 의사·능력 결여 + 선입금 유인 + 미이행·잠적 결합은 ‘부스팅 선입금 미이행 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미이행·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 게임 대리랭크 부스팅 선입금 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미이행·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 부스팅 안내 대화·대행 조건·선입금 송금 내역 정리.</li>\n<li><strong>② 미이행·기망 입증</strong> — 작업 미진행·티어 변동 없음·잠적 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선입금한 대행비 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 지연과 달리, 대행해줄 의사나 능력 없이 선입금을 유인해 받고 작업을 하지 않았는지가 판단의 분기점입니다. 부스팅 안내 대화와 선입금 내역, 작업 미진행·잠적 정황과 같은 업자의 반복 미이행을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 부스팅 안내 대화·대행 조건·선입금 송금·문의 대화를 캡처 보존.</li>\n<li><strong>2단계 — 미이행·기망 입증 (즉시)</strong> — 작업 미진행·티어 변동 없음·잠적 정황과 넘겨준 계정 상태를 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계정 보호 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 넘겨준 계정 비밀번호 변경 등 보호 조치.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 대리랭크 부스팅 선입금 잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미이행·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>부스팅 안내·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>대행 조건·기간·목표 티어 약정 (계약 내용)</strong></li>\n<li><strong>선입금·송금 내역 (피해 금액)</strong></li>\n<li><strong>작업 미진행·티어 변동 없음 화면 (기망 입증)</strong></li>\n<li><strong>넘겨준 계정 정보·이용 정황 기록</strong></li>\n<li><strong>업자·닉네임·계좌·연락처 정보</strong></li>\n<li><strong>환불 요청·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부스팅 안내 대화와 선입금 내역을 정리하고, 약속한 기간·목표 티어와 실제 작업 미진행·티어 변동 없는 화면을 대비하면 대행 의사 없이 선입금만 받았는지를 다투는 데 도움이 됩니다. 같은 업자에게 부스팅 선입금을 떼인 다른 게이머를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이행 의사·능력</strong> — 선입금 수령 당시 대행해줄 의사·능력이 있었는지.</li>\n<li><strong>작업 진행</strong> — 실제로 작업이 진행되고 티어가 변동됐는지.</li>\n<li><strong>편취 범의</strong> — 단순 지연인지 처음부터 선입금만 노렸는지.</li>\n<li><strong>편취액</strong> — 선입금한 대행비가 피해액인지.</li>\n<li><strong>업자 특정</strong> — 닉네임·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 피해의 배상명령을 통한 피해회복',
        summary:
          '대법원 2020도12279(대법원, 2022.07.28 선고) 영역에서 법원은 소송촉진 등에 관한 특례법 제25조 제1항에 따른 배상명령은 피고인의 범죄행위로 피해자가 입은 직접적인 재산상 손해에 대하여 피해금액이 특정되고 피고인의 배상책임 범위가 명백한 경우에 한하여 피고인에게 배상을 명함으로써 간편하고 신속하게 피해자의 피해회복을 도모하고자 하는 제도라고 보았습니다. 다만 같은 법 제26조 제7항에 따라 피해자는 피고사건의 범죄행위로 발생한 피해에 관하여 불법행위를 원인으로 한 손해배상청구 등 다른 절차에 따른 손해배상청구가 법원에 계속 중일 때에는 배상신청을 할 수 없고, 그러한 경우 법원은 결정으로 배상명령신청을 각하하여야 한다고 판시했습니다. 부스팅 대행비를 선입금받고 작업 없이 잠적한 사안을 살펴볼 때에도, 특정된 선입금 피해금액을 기준으로 형사절차에서 배상명령 등을 통한 피해회복을 함께 검토해볼 수 있습니다.',
        takeaway: '이행 의사·능력 결여 + 선입금 유인 + 미이행·잠적 결합 시 부스팅 선입금 미이행 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '작업자가 배정됐다며 미루는데도 사기인가요?',
        answer:
          '<strong>대행 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 약속 기간과 작업 미진행·잠적 정황을 대비하세요.',
      },
      {
        question: '작업을 안 한 걸 어떻게 밝히나요?',
        answer:
          '<strong>티어 변동 없음·미진행 화면이 단서인 영역입니다.</strong> 작업 전후 티어·전적 화면을 캡처해 확보하세요.',
      },
      {
        question: '계좌이체로 선입금했는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 이체 내역과 상대 계좌 정보를 정리하세요.',
      },
      {
        question: '넘겨준 계정도 위험한데 어떻게 하나요?',
        answer:
          '<strong>계정 보호를 함께 검토하는 영역입니다.</strong> 비밀번호 변경과 이용 정황을 기록해 보존하세요.',
      },
      {
        question: '같은 업자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 미이행은 편취 다툼의 출발점인 영역입니다.</strong> 다른 게이머의 선입금·미이행 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 게임 아이템 거래 추적', href: '/guide/fraud/fraud-online-game-item-trade-track' },
      { label: '모바일게임 계정 되팔이 추적', href: '/guide/fraud/fraud-mobile-game-account-resale-chargeback-track' },
      { label: '게임 아이템 계정 회수 추적', href: '/guide/fraud/fraud-game-item-account-reclaim-track' },
      { label: '댓글 알바 선입금 추적', href: '/guide/fraud/fraud-comment-part-time-advance-deposit-track' },
    ],
  },

  // ─── 4. fraud-realestate-auction-consulting-winning-bid-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-realestate-auction-consulting-winning-bid-fee-track',
    keyword: '부동산 경매 컨설팅 낙찰 보장 수수료 편취 사기',
    questionKeyword: '부동산 경매·공매 컨설팅업자가 ‘우리가 분석한 물건은 낙찰을 보장한다, 명도까지 책임진다, 수익이 확실하다’며 성공 실적을 내세워서, 믿고 컨설팅 수수료·착수금·성공보수를 미리 냈어요. 그런데 실제로는 낙찰이 되지 않거나 권리분석이 엉터리여서 오히려 손해가 났고, 내세운 성공 실적·후기는 부풀리거나 근거 없는 것이었어요. 항의하니 ‘경매가 원래 그런 것’이라며 발뺌하고 연락을 피했고, 알고 보니 같은 업자가 여러 사람에게 낙찰 보장을 앞세워 수수료만 챙긴 정황이었어요. 처음부터 지킬 수 없는 낙찰을 보장한다며 허위 실적으로 수수료만 받은 것 같은데, 이런 부동산 경매 컨설팅 낙찰 보장 수수료 편취를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '경매 컨설팅 낙찰 보장 수수료 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '부동산 경매 컨설팅 낙찰 보장 수수료 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '낙찰을 보장한다던 경매 컨설팅이 허위 실적으로 수수료만 받고 발뺌해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「부동산 경매·공매 컨설팅업자가 ‘우리가 분석한 물건은 낙찰을 보장한다, 권리분석과 명도까지 책임지고 처리한다, 이 정도 수익은 확실하다’며 화려한 성공 실적과 후기를 내세워, 경매는 어렵지만 전문가가 낙찰까지 책임진다면 안전하겠다는 생각으로 컨설팅 수수료·착수금·성공보수를 미리 낸 분의 상황입니다. 그런데 막상 진행해보니 장담하던 낙찰은 되지 않거나 권리분석이 부실해 오히려 손해가 났고, 계약 당시 근거라며 보여준 성공 실적·후기는 크게 부풀려졌거나 실제 근거가 없는 것이어서, 낙찰 보장과 수익을 믿고 낸 수수료만 날리게 되어 막막하실 거예요. 업자에게 항의하면 ‘경매가 원래 그런 것, 운이 없었을 뿐’이라며 책임을 미루다 연락을 피하고, 뒤늦게 확인해보니 같은 업자가 비슷하게 낙찰 보장을 앞세워 여러 사람에게 수수료를 받아 챙긴 정황까지 보이면 단순 자문 실패가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 지킬 수 없는 낙찰을 보장한다며 허위 실적으로 수수료만 받은 정황이면 단순 컨설팅 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 지킬 수 없는 낙찰을 보장한다며 허위 실적으로 수수료를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 허위 내용으로 법원을 기망하여 자기에게 유리한 결정을 받는 행위는 사기죄를 구성할 수 있으나, 소명자료 등을 조작하거나 허위의 소명자료를 제출함이 없이 단지 실제 사실과 다른 주장만 하는 경우에는 신중히 판단하여야 한다고 본 사례 흐름이 있는 영역으로, 낙찰 보장과 실적이 조작·허위로 뒷받침된 기망이었는지를 가려 다툴 여지가 있습니다. 낙찰 보장·허위 실적 + 근거 결여 + 발뺌·회피 결합은 ‘낙찰 보장 수수료 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 낙찰 보장·허위 실적 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 부동산 경매 컨설팅 낙찰 보장 수수료 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 낙찰 보장 대화·컨설팅 계약서·수수료·착수금 결제 내역 정리.</li>\n<li><strong>② 낙찰 보장·허위 실적 입증</strong> — 내세운 실적·후기의 근거 부실과 실제 결과 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 컨설팅 수수료·착수금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 자문 실패와 달리, 지킬 수 없는 낙찰을 보장한다며 허위 실적으로 수수료를 받았는지가 판단의 분기점입니다. 낙찰 보장 대화와 내세운 실적·후기, 근거 부실과 실제 결과, 발뺌·회피와 같은 업자의 반복 수취를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 낙찰 보장 대화·컨설팅 계약서·실적 자료·수수료·착수금 결제 내역을 캡처 보존.</li>\n<li><strong>2단계 — 낙찰 보장·허위 실적 입증 (즉시)</strong> — 내세운 실적·후기의 근거 부실과 실제 낙찰·손실 결과를 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">부동산 경매 컨설팅 낙찰 보장 수수료 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>낙찰 보장·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>컨설팅 계약서·수수료 약정서 (계약 내용)</strong></li>\n<li><strong>수수료·착수금·성공보수 결제 내역 (피해 금액)</strong></li>\n<li><strong>내세운 성공 실적·후기 자료 (허위 입증)</strong></li>\n<li><strong>실제 낙찰·유찰·손실 결과 자료</strong></li>\n<li><strong>업자·상호·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 낙찰 보장 대화와 내세운 성공 실적·후기를 확보하고, 그 실적에 실제 근거가 있는지, 권리분석·낙찰 결과가 어땠는지를 대비하면 지킬 수 없는 낙찰을 보장하며 허위 실적으로 수수료를 받았는지를 다투는 데 도움이 됩니다. 같은 업자에게 낙찰 보장을 믿고 수수료를 낸 다른 의뢰인을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>낙찰 보장</strong> — 지킬 수 없는 낙찰을 보장한다며 유인했는지.</li>\n<li><strong>실적 허위</strong> — 내세운 성공 실적·후기에 실제 근거가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 자문 실패인지 처음부터 수수료만 노렸는지.</li>\n<li><strong>편취액</strong> — 수수료·착수금·성공보수가 피해액인지.</li>\n<li><strong>업자 특정</strong> — 상호·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (컨설팅·계약 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위 자료에 의한 기망과 사기죄의 성립',
        summary:
          '대법원 2021도2340(대법원, 2024.06.27 선고) 영역에서 법원은 허위 내용으로 법원을 기망하여 자기에게 유리한 소송비용액확정결정을 받는 행위는 사기죄를 구성할 수 있다고 보면서도, 소송비용액확정결정을 신청하는 당사자가 소명자료 등을 조작하거나 허위의 소명자료를 제출함이 없이 단지 실제 사실과 다른 비용액에 관한 주장만 하는 경우에는 특별한 사정이 없는 한 법원을 기망하였다고 단정하기 어려우므로 사기죄로 인정하는 데 신중하여야 한다고 판시했습니다. 이는 단순히 사실과 다른 주장을 넘어 소명자료를 조작하거나 허위 자료를 제출하는 등 적극적인 기망 수단이 결합되었는지를 신중히 가려야 한다는 취지입니다. 경매 컨설팅업자가 지킬 수 없는 낙찰을 보장한다며 성공 실적을 내세워 수수료를 받은 사안을 살펴볼 때에도, 내세운 실적·후기가 조작되거나 허위로 뒷받침된 적극적 기망이었는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '낙찰 보장·허위 실적 + 근거 결여 + 발뺌·회피 결합 시 낙찰 보장 수수료 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경매가 원래 그런 것이라는데도 사기인가요?',
        answer:
          '<strong>낙찰 보장·허위 실적으로 기망했는지가 핵심인 영역입니다.</strong> 낙찰 보장 대화와 실제 결과를 대비하세요.',
      },
      {
        question: '성공 실적이 허위인 걸 어떻게 밝히나요?',
        answer:
          '<strong>내세운 실적·후기의 근거 부실이 단서인 영역입니다.</strong> 실적 자료와 실제 낙찰·손실 결과를 확인하세요.',
      },
      {
        question: '컨설팅 계약서를 썼는데도 다툴 수 있나요?',
        answer:
          '<strong>계약 체결 과정의 낙찰 보장·기망을 다투는 영역입니다.</strong> 상담·홍보 대화와 실적 자료를 정리하세요.',
      },
      {
        question: '착수금·성공보수도 피해로 보나요?',
        answer:
          '<strong>수수료·착수금·성공보수 등 교부 금액을 편취액으로 다투는 영역입니다.</strong> 결제·송금 내역을 정리하세요.',
      },
      {
        question: '같은 업자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 의뢰인의 수수료·결과 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '부동산 컨설팅 성공보수 잠적 추적', href: '/guide/fraud/fraud-real-estate-consulting-success-fee-upfront-vanish-track' },
      { label: '기획부동산 지분 쪼개기 추적', href: '/guide/fraud/fraud-planning-realty-land-share-split-track' },
      { label: '대출 브로커 선수수료 잠적 추적', href: '/guide/fraud/fraud-loan-broker-upfront-fee-vanish-track' },
      { label: '투자 브로커 자격 위조 추적', href: '/guide/fraud/fraud-investment-broker-license-falsify' },
    ],
  },

  // ─── 5. fraud-webtoon-copyright-revenue-share-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-webtoon-copyright-revenue-share-investment-track',
    keyword: '웹툰 콘텐츠 저작권 수익배분 투자 편취 사기',
    questionKeyword: '웹툰·웹소설·영화·음원 같은 콘텐츠 저작권에 투자하면 수익을 나눠준다는 업체가 ‘저작권 지분에 투자하면 조회수·판매 수익을 배분한다, 이미 흥행 실적이 있다, 원금 회수도 가능하다’며 수익배분을 자신 있게 제시해서, 믿고 투자금을 보냈어요. 그런데 약속한 수익배분은 처음 몇 번뿐이거나 아예 없었고, 저작권·수익 정산 근거는 부풀리거나 실체가 없는 것이었어요. 항의하니 ‘정산이 밀렸을 뿐’이라며 발뺌하고 연락을 피했고, 알고 보니 같은 업체가 여러 투자자에게 같은 방식으로 저작권 수익배분을 앞세워 투자금을 챙긴 정황이었어요. 처음부터 지킬 수 없는 수익배분을 앞세워 투자금만 받은 것 같은데, 이런 웹툰 콘텐츠 저작권 수익배분 투자 편취를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '콘텐츠 저작권 수익배분 투자 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '웹툰 저작권 수익배분 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '저작권 수익을 배분한다던 콘텐츠 투자가 정산 없이 끊기고 업체가 발뺌해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「웹툰·웹소설·영화·음원·드라마 같은 콘텐츠 저작권에 투자하면 수익을 나눠준다는 업체나 플랫폼이 ‘저작권 지분에 투자하면 조회수·판매·2차 판권 수익을 배분한다, 이미 흥행한 작품 실적이 있다, 원금 회수도 가능하다’며 수익배분을 자신 있게 제시해, 안정적으로 콘텐츠 수익을 나눠 받을 좋은 기회라는 생각으로 투자금을 계좌로 보낸 분의 상황입니다. 그런데 막상 약속한 수익배분은 처음 몇 번 소액 지급되다 끊기거나 아예 없었고, 계약 당시 근거라며 보여준 저작권 보유·수익 정산 구조는 크게 부풀려졌거나 실제 저작권·매출 근거가 없는 것이어서, 목돈을 넣은 투자금이 회수되지 않고 묶이게 되어 막막하실 거예요. 업체에 항의하면 ‘정산이 밀렸을 뿐, 곧 지급된다’며 책임을 미루다 연락을 피하고, 뒤늦게 확인해보니 같은 업체가 비슷하게 저작권 수익배분을 앞세워 여러 투자자에게 투자금을 받아 챙긴 정황까지 보이면 단순 투자 손실이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 지킬 수 없는 수익배분을 알면서도 실적이 있는 것처럼 앞세워 투자금만 받은 정황이면 단순 투자 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 지킬 수 없는 수익배분을 실적이 있는 것처럼 앞세워 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재산범죄로 취득한 이른바 범죄피해재산에 대하여, 피해자가 재산반환청구권이나 손해배상청구권 등을 행사할 수 없는 등 피해회복이 심히 곤란하다고 인정되는 경우에는 이를 몰수·추징하여 피해자에게 환부할 수 있다고 본 사례 흐름이 있는 영역으로, 편취된 투자금의 회복·환부 가능성까지 함께 다툴 여지가 있습니다. 수익배분 기망·실적 부풀림 + 근거 결여 + 발뺌·회피 결합은 ‘저작권 수익배분 투자 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 수익배분 기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 웹툰 콘텐츠 저작권 수익배분 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 수익배분 제시 대화·투자계약서·저작권 지분 약정·투자금 송금 내역 정리.</li>\n<li><strong>② 수익배분 기망 입증</strong> — 보장 수익배분과 실제 정산, 저작권 보유·매출 근거 부실 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 투자금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·범죄피해재산 환부·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 지킬 수 없는 수익배분을 알면서도 실적이 있는 것처럼 앞세워 투자금을 받았는지가 판단의 분기점입니다. 수익배분 제시 자료와 실제 정산 내역, 저작권 보유·매출 근거의 실체와 발뺌·회피, 같은 업체의 반복 유치를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 수익배분 제시 대화·투자계약서·저작권 지분 약정·투자금 송금 내역을 캡처 보존.</li>\n<li><strong>2단계 — 수익배분 기망 입증 (즉시)</strong> — 보장 수익배분과 실제 정산 내역, 저작권 보유·매출 근거의 실체·부실을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰·기관 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·범죄피해재산 환부·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">웹툰 콘텐츠 저작권 수익배분 투자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수익배분 제시·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>투자계약서·저작권 지분 약정서 (계약 내용)</strong></li>\n<li><strong>투자금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>실제 수익배분·미지급 정산 내역 (기망 입증)</strong></li>\n<li><strong>저작권 보유·매출 근거 대조 자료</strong></li>\n<li><strong>업체·담당자·계좌 정보</strong></li>\n<li><strong>이의 제기·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투자 당시 제시받은 수익배분·저작권 지분 약정과 실제 정산 내역을 시간순으로 대조하고, 업체가 실제로 저작권을 보유하고 매출 근거가 있는지, 실적이 부풀려졌는지 확인하면 지킬 수 없는 수익배분을 앞세웠는지를 다투는 데 도움이 됩니다. 같은 업체에서 저작권 수익배분을 믿고 투자한 다른 투자자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수익배분 기망</strong> — 수익배분이 지킬 수 없는 부풀림이었는지.</li>\n<li><strong>저작권·매출 실체</strong> — 저작권 보유·수익 정산에 실체가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 투자 손실인지 처음부터 투자금만 노렸는지.</li>\n<li><strong>편취액</strong> — 투자금이 피해액인지.</li>\n<li><strong>업체 특정</strong> — 상호·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자·유사수신 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (계약 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄피해재산의 몰수·추징과 피해자 환부',
        summary:
          '대법원 2022도8662(대법원, 2022.11.17 선고) 영역에서 법원은 부패재산의 몰수 및 회복에 관한 특례법이 재산범죄의 피해재산에 대한 몰수·추징을 인정하지 않는 형법과 달리, 전기통신금융사기를 포함한 특정 사기범죄 등에 의하여 피해자로부터 취득한 재산 또는 그 재산의 보유·처분에 의하여 얻은 이른바 범죄피해재산에 대하여, 범죄피해자가 그 재산에 관하여 범인에 대한 재산반환청구권 또는 손해배상청구권 등을 행사할 수 없는 등 피해회복이 심히 곤란하다고 인정되는 경우 이를 몰수·추징할 수 있고, 몰수·추징된 범죄피해재산은 피해자에게 환부한다고 규정하고 있다고 보았습니다. 다만 몰수·추징의 원인이 되는 범죄사실은 공소제기된 범죄사실에 한정되고, 범죄피해재산도 그 공소제기된 범죄사실의 피해자로부터 취득한 재산 등에 한정된다고 판시했습니다. 저작권 수익배분을 앞세워 투자금을 편취한 사안을 살펴볼 때에도, 편취된 투자금이 범죄피해재산으로서 회복·환부될 수 있는지를 함께 검토해볼 수 있습니다.',
        takeaway: '수익배분 기망·실적 부풀림 + 근거 결여 + 발뺌·회피 결합 시 저작권 수익배분 투자 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '정산이 밀렸을 뿐이라는데도 사기인가요?',
        answer:
          '<strong>수익배분이 지킬 수 없는 부풀림이었는지가 핵심인 영역입니다.</strong> 제시 수익배분과 실제 정산을 대비하세요.',
      },
      {
        question: '저작권 수익이 허위인 걸 어떻게 밝히나요?',
        answer:
          '<strong>저작권 보유·매출 근거 부실이 단서인 영역입니다.</strong> 지분 약정과 실제 정산 근거를 확인하세요.',
      },
      {
        question: '투자계약서를 썼는데도 다툴 수 있나요?',
        answer:
          '<strong>계약 체결 과정의 수익배분 기망을 다투는 영역입니다.</strong> 상담·홍보 대화와 지분 약정을 정리하세요.',
      },
      {
        question: '넣은 투자금 전부를 피해로 보나요?',
        answer:
          '<strong>교부한 투자금을 편취액으로 다투는 영역입니다.</strong> 송금·결제 내역을 정리하세요.',
      },
      {
        question: '같은 업체에 여러 투자자가 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 투자자의 수익배분·미지급 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '공동투자 수익보장 추적', href: '/guide/fraud/fraud-joint-investment-profit-guarantee-track' },
      { label: '크라우드펀딩 리워드 미배송 추적', href: '/guide/fraud/fraud-crowdfunding-reward-nondelivery-track' },
      { label: '투자 플랫폼 수익률 허위표시 추적', href: '/guide/fraud/fraud-investment-platform-yield-fake-display-track' },
      { label: '사모펀드 원금 손실 추적', href: '/guide/fraud/fraud-private-equity-fund-principal-loss-track' },
    ],
  },

  // ─── 6. fraud-groupbuy-organizer-settlement-delay-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-groupbuy-organizer-settlement-delay-falsely-accused-defense',
    keyword: '공동구매 총대 정산 지연 사기 고소 무고 방어',
    questionKeyword: '카페·오픈채팅·SNS에서 공동구매 총대를 맡아 참여자들의 돈을 모아 물건을 주문·배송했는데, 업체 배송 지연·불량·환불 처리가 늘어지면서 일부 참여자에게 정산·환불이 밀렸어요. 저는 모은 돈으로 실제 주문했고 정산도 하려던 것뿐인데, 일부 참여자가 ‘처음부터 돈만 챙기려 한 사기’라며 저를 사기로 고소했어요. 주문·결제 내역과 업체 지연 정황이 다 있는데도 편취 고의가 있었던 것처럼 몰려 억울하고, 정산이 늦어진 것과 처음부터 속인 것은 다른데 한순간에 사기꾼이 된 것 같아요. 이렇게 공동구매 총대 정산 지연이 사기로 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '공동구매 총대 정산 지연 편취 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '공동구매 총대 정산 지연 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '공동구매 총대로 정산이 밀렸다는 이유로 사기 고소를 당해 억울하다면, 편취 고의 부재 판단과 주문·정산 내역·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「카페·오픈채팅·SNS에서 공동구매 총대를 맡아 여러 참여자의 돈을 모아 업체에 물건을 주문·배송하고 정산까지 하려던 중, 업체의 배송 지연·품절·불량·환불 처리가 겹치면서 일부 참여자에게 정산·환불이 늦어졌을 뿐인데, 일부 참여자가 ‘처음부터 돈만 챙기려 한 사기’라며 저를 사기로 신고·고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 모은 돈으로 실제로 주문·결제했고 업체 지연만 아니었다면 정산도 마쳤을 것인데, 정산이 밀렸다는 사실만으로 편취 고의가 있었던 것처럼 단정될까 봐 억울하고 막막하실 거예요. 더구나 공동구매는 참여자가 많고 정산·환불이 얽혀 진행이 지연되기 쉬운데도, 정산이 늦어졌다는 이유만으로 ‘처음부터 속였다’는 주장에 휘말리기 쉽고, 주문·결제 내역과 업체 지연 정황이 있는데도 일부 참여자의 감정적 고소로 편취 고의가 있었던 것처럼 몰리면 더 답답하셨을 거예요. 혐의를 받고 있다면, 참여자에게서 돈을 모은 경위와 실제 주문·결제 내역, 업체 배송·환불 지연 정황과 정산 진행 상황, 참여자와 주고받은 안내·소통 기록을 차분히 정리해 편취 고의 없이 정산이 지연된 것이라는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대 주장의 모순까지 함께 기록해두는 것이 좋습니다.」 사기죄는 처음부터 대금을 편취할 의사와 능력 없이 상대방을 기망하여 재물을 교부받은 경우에 성립하는 것으로, 단순히 채무 이행이나 정산이 지연된 것과는 구별되는 영역입니다. 판례는 국민참여재판을 거쳐 제1심법원이 배심원의 만장일치 무죄평결을 받아들여 무죄를 선고한 경우, 증거의 취사 및 사실의 인정에 관한 제1심의 판단은 실질적 직접심리주의와 공판중심주의의 취지에 비추어 한층 더 존중될 필요가 있고 항소심에서의 추가·새로운 증거조사는 신중하게 이루어져야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 정산 지연이 처음부터의 편취 고의에서 비롯된 것인지, 편취 고의에 대한 증명이 충분한지를 종합해 가려 다툴 여지가 있는 영역입니다. 주문·결제 사실 + 업체 지연 정황 + 편취 고의 부인·소통 기록 결합은 ‘정산 지연·편취 고의 부재 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 모금·주문 정리 ② 정산·지연 경위 ③ 편취 고의 부재 ④ 소통·정황 ⑤ 무고·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공동구매 총대 정산 지연 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 모금·정산 경위·편취 고의 부재·소통·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 모금·주문 정리</strong> — 참여자 모금·실제 주문·결제 내역 정리.</li>\n<li><strong>② 정산·지연 경위</strong> — 업체 배송·환불 지연과 정산 진행 상황 정리.</li>\n<li><strong>③ 편취 고의 부재</strong> — 처음부터 편취 의사가 없었음을 뒷받침하는 간접사실 검토.</li>\n<li><strong>④ 소통·정황</strong> — 참여자 안내·지연 공지·환불 진행 소통 기록 검토.</li>\n<li><strong>⑤ 무고·방어</strong> — 상대 주장의 모순과 사실관계를 정리해 방어 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 대금을 편취할 의사로 돈을 모았는지(사기), 아니면 실제 주문했으나 업체 지연으로 정산이 늦어진 것인지(고의 부재)가 판단의 분기점입니다. 모금·주문·결제 내역과 업체 지연 정황, 참여자 안내·소통 기록을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 모금·주문 자료 보존 (즉시)</strong> — 참여자 모금·실제 주문·결제·배송 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 지연·정산 경위 정리 (즉시)</strong> — 업체 배송·환불 지연 증빙과 정산 진행·환불 내역을 정리.</li>\n<li><strong>3단계 — 소통·정황 정리 (병행)</strong> — 참여자 안내·지연 공지·환불 소통 기록과 상대 주장의 모순을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무고·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동구매 총대 정산 지연 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 모금·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>참여자 모금·입금 내역 (모금 경위)</strong></li>\n<li><strong>실제 주문·결제·배송 내역 (이행 정황)</strong></li>\n<li><strong>업체 배송·환불 지연 증빙 (지연 경위)</strong></li>\n<li><strong>정산·환불 진행 내역 (정산 정황)</strong></li>\n<li><strong>참여자 안내·지연 공지·소통 기록</strong></li>\n<li><strong>상대 주장·고소장·진술 모순 정리 자료</strong></li>\n<li><strong>조사 일정·대응 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 모은 돈으로 실제 주문·결제했다는 내역과 업체 배송·환불 지연 증빙을 정리하면 정산 지연이 처음부터의 편취 고의에서 비롯된 것이 아니라는 점을 다투는 데 도움이 됩니다. 참여자에게 지연을 공지하고 환불을 진행한 소통 기록과 상대 주장이 사실관계와 어긋나는 부분을 함께 정리해 편취 고의 부재를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 처음부터 편취할 의사로 돈을 모았는지.</li>\n<li><strong>주문·이행</strong> — 모은 돈으로 실제 주문·결제했는지.</li>\n<li><strong>지연 원인</strong> — 정산 지연이 업체 지연 등 외부 사정 때문인지.</li>\n<li><strong>정산·환불 노력</strong> — 정산·환불을 진행하려 했는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 국민참여재판 무죄평결과 사실인정의 존중',
        summary:
          '대법원 2020도7802(대법원, 2024.07.25 선고) 영역에서 법원은 국민참여재판을 거쳐 제1심법원이 배심원의 만장일치 무죄평결을 받아들여 피고인에 대하여 무죄판결을 선고한 경우, 국민참여재판을 도입한 입법 취지와 실질적 직접심리주의의 정신 등에 비추어 증거의 취사 및 사실의 인정에 관한 제1심법원의 판단은 한층 더 존중될 필요가 있다고 보았습니다. 나아가 배심원이 증인신문 등 사실심리의 전 과정에 참여한 후 만장일치로 내린 무죄평결이 재판부의 심증에 부합하여 채택된 경우라면, 그러한 절차를 거쳐 이루어진 제1심의 증거 취사와 사실인정은 항소심에서의 새로운 증거조사를 통해 그에 명백히 반대되는 충분하고도 납득할 만한 현저한 사정이 나타나지 않는 한 함부로 뒤집어서는 안 된다고 판시했습니다. 공동구매 정산 지연이 사기로 고소된 사안을 살펴볼 때에도, 처음부터의 편취 고의에 대한 증명이 합리적 의심을 배제할 정도에 이르렀는지를 기준으로 방어를 검토해볼 수 있습니다.',
        takeaway: '주문·결제 사실 + 업체 지연 정황 + 편취 고의 부인·소통 기록 결합 시 정산 지연·편취 고의 부재 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '정산이 밀렸을 뿐인데 사기가 되나요?',
        answer:
          '<strong>처음부터 편취할 고의가 있었는지가 핵심인 영역입니다.</strong> 실제 주문·결제와 지연 경위를 정리하세요.',
      },
      {
        question: '실제로 주문한 걸 어떻게 밝히나요?',
        answer:
          '<strong>주문·결제·배송 내역이 고의를 배척하는 간접사실인 영역입니다.</strong> 업체 주문·결제 내역을 확보하세요.',
      },
      {
        question: '업체가 지연시킨 건데 제가 책임지나요?',
        answer:
          '<strong>지연 원인이 외부 사정인지 따지는 영역입니다.</strong> 업체 배송·환불 지연 증빙을 정리하세요.',
      },
      {
        question: '참여자에게 공지하고 환불도 했는데 도움이 되나요?',
        answer:
          '<strong>정산·환불 노력은 편취 고의를 배척하는 정황인 영역입니다.</strong> 안내·환불 소통 기록을 모으세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>모금·주문·지연 경위 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '위탁판매 정산 지연 무고 방어', href: '/guide/fraud/fraud-consignment-sale-settlement-delay-falsely-accused-defense' },
      { label: '사업 정산 분쟁 무고 방어', href: '/guide/fraud/fraud-business-settlement-falsely-accused-defense' },
      { label: '중고 재판매 중개 무고 방어', href: '/guide/fraud/fraud-goods-resale-middleman-falsely-accused-defense' },
      { label: '쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shopping-mall-non-delivery-track' },
    ],
  },

  // ─── 7. sex-crime-hair-salon-scalp-care-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-hair-salon-scalp-care-pretext-touch-report-track',
    keyword: '미용실 헤어 두피관리 빙자 추행 신고',
    questionKeyword: '미용실·헤어샵에서 머리 시술이나 두피·목·어깨 관리를 받는데, 담당자가 관리에 필요한 범위를 넘어 가슴·허리 등 내밀한 부위에 손을 대거나 뒤에서 밀착하고, 설명이나 동의도 없이 접촉해 너무 불쾌하고 수치스러웠어요. 두피·어깨 마사지라 어느 정도 접촉은 예상했지만 손이 향한 부위와 방식이 정상 시술로는 설명되지 않아 단순한 관리가 아니라 추행이라는 생각이 들었어요. 시술 의자라 곧바로 항의하기 어려웠고, 상대는 ‘관리에 필요한 시술이었다’고 할 것 같아요. 이런 미용실 헤어·두피 관리 중 부적절 신체접촉을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '미용실 시술 빙자 부적절 접촉 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '미용실 헤어 두피관리 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '미용실 시술·관리 중 필요 이상으로 신체를 만지는 부적절 접촉을 당해 수치스러웠다면, 시술 빙자 추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「미용실·헤어샵에서 커트·펌·염색 같은 머리 시술이나 두피·목·어깨 관리를 받던 중, 담당자가 관리·시술에 필요한 범위를 넘어 가슴·허리 등 내밀한 신체 부위에 손을 대거나, 뒤에서 몸을 바짝 밀착하고, 접촉의 필요성에 대한 설명이나 동의를 구하는 절차도 없이 신체를 만져 너무 불쾌하고 수치스러웠던 분의 상황입니다. 두피·목·어깨 마사지는 어느 정도 접촉이 예정되어 있어 그 순간에는 ‘원래 이렇게 관리하는 건가’ 하고 헷갈리기도 하고, 시술 가운을 두르고 의자에 앉아 있는 상태라 곧바로 강하게 항의하거나 자리를 벗어나기 어려워 참고 넘겼지만, 손이 향한 부위와 방식이 시술에 필요한 범위를 명백히 벗어나 단순한 관리가 아니라 추행이라는 생각이 들지만, 상대가 ‘관리에 필요한 시술이었다’고 해명할 것 같아 신고해도 정상 시술과 구별될지 막막하실 거예요. 편하게 관리받으러 찾은 미용실에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 시술·관리를 빙자해 의사에 반해 내밀한 부위를 필요 이상으로 만지거나 밀착한 행위라면, 관리에 필요한 시술이었다는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 피고인이 부인하고 직접증거가 사실상 피해자 진술뿐인 성폭력 사건에서 그 진술이 합리적 의심을 배제할 신빙성이 있는지를 일관성·구체성, 논리·경험칙 부합 등을 종합해 신중히 판단하고, 누구든 일정 수준의 신체접촉을 용인하였더라도 예상하거나 동의한 범위를 넘어서는 신체접촉은 거부할 수 있다고 본 사례 흐름이 있는 영역으로, 시술상 접촉을 어느 정도 용인했더라도 필요 범위를 넘는 접촉이 추행인지를 가려 다툴 여지가 있습니다. 시술 빙자 + 내밀 부위 접촉·설명 부재 + 시술 필요 해명 결합은 ‘미용 시술 빙자 부적절 접촉 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·시술 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 미용실 헤어·두피 관리 부적절 접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·시술 정리</strong> — 미용실·시술 종류·담당자·이용 시간·주변 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 시술 무관 부위·내밀 부위 접촉·밀착·설명 부재 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 시술 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 관리에 필요한 시술이었다는 해명과 달리, 시술 필요 범위를 넘어 내밀 부위를 필요 이상으로 만지거나 밀착했는지, 사전 설명·동의가 있었는지가 판단의 분기점입니다. 접촉 부위·방식과 예약·결제 내역, 미용실 CCTV, 동석 직원·다른 손님 진술과 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·시술 자료 보존 (즉시)</strong> — 미용실·시술 종류·담당자·이용 시간과 접촉 부위·방식·설명 부재를 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 미용실 내부 CCTV, 예약·결제·방문 내역, 동석 직원·다른 손님 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">미용실 헤어·두피 관리 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>미용실·시술 종류·담당자·이용 시간 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·설명 부재 정황 기록 (행위 태양)</strong></li>\n<li><strong>미용실 내부 CCTV 보존 요청 자료</strong></li>\n<li><strong>예약·결제·방문 입증 자료 (방문 정황)</strong></li>\n<li><strong>동석 직원·다른 손님 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예약·결제·방문 내역으로 방문 사실과 담당자를 특정하고, 접촉한 부위가 받은 시술·관리에 필요한 범위였는지, 사전 설명·동의가 있었는지를 구체적으로 기록하면 시술을 빙자한 부적절 접촉을 다투는 데 도움이 됩니다. 그 순간 항의하지 못했더라도 직후에 남긴 메시지나 다른 사람에게 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술 필요성을 넘는 내밀 부위 접촉·밀착인지.</li>\n<li><strong>시술 필요 해명</strong> — ‘관리에 필요한 시술’ 해명에 가려지지 않는지.</li>\n<li><strong>설명·동의</strong> — 접촉의 필요성에 대한 사전 설명·동의가 있었는지.</li>\n<li><strong>담당자 특정</strong> — 예약·결제·CCTV로 담당자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 용인한 범위를 넘는 신체접촉과 진술 신빙성',
        summary:
          '대법원 2021도3451(대법원, 2022.08.19 선고) 영역에서 법원은 성폭력 사건에서 피고인이 공소사실을 부인하고 공소사실에 부합하는 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술이 합리적인 의심을 배제할 만한 신빙성이 있는지는 진술 내용의 주요 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적이고 객관적으로 확인된 사실과 모순되지 않는지, 허위로 불리한 진술을 할 만한 동기나 이유가 있는지 등을 종합적으로 고려하여 신중하게 판단하여야 한다고 보았습니다. 나아가 누구든지 일정 수준의 신체접촉을 용인하였더라도 자신이 예상하거나 동의한 범위를 넘어서는 신체접촉을 거부할 수 있고, 피해상황에서 명확한 판단이나 즉각적인 대응을 하는 데 어려움을 겪을 수 있으며, 피해자의 대처 양상은 구체적인 처지와 상황에 따라 다르게 나타난다고 판시했습니다. 미용 시술·관리 과정의 접촉이 문제 된 사안을 살펴볼 때에도, 시술상 접촉을 어느 정도 용인했더라도 예상·동의 범위를 넘는 접촉이 의사에 반하는 추행인지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 내밀 부위 접촉·설명 부재 + 시술 필요 해명 결합 시 미용 시술 빙자 부적절 접촉 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '관리에 필요한 시술이었다는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>시술 필요성을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 받은 시술과 접촉 부위·방식을 대비하세요.',
      },
      {
        question: '시술 의자라 그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>시술 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 메시지·상담 정황을 정리하세요.',
      },
      {
        question: '두피·어깨 마사지라 접촉이 당연한데 어떻게 구별하나요?',
        answer:
          '<strong>필요성·설명·동의 여부로 정상 시술과 구별하는 영역입니다.</strong> 접촉 부위와 사전 설명 유무를 정리하세요.',
      },
      {
        question: '미용실 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 미용실에 즉시 보존을 요청하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '피부관리실 관리 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-skincare-shop-care-pretext-touch-report-track' },
      { label: '네일샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-nail-salon-service-pretext-touch-report-track' },
      { label: '마사지숍 서비스 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-service-pretext-touch-report-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-goshiwon-sharehouse-common-area-intrusion-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-goshiwon-sharehouse-common-area-intrusion-touch-report-track',
    keyword: '고시원 셰어하우스 공용공간 침입 추행 신고',
    questionKeyword: '고시원·셰어하우스·원룸텔에서 공용 주방·복도·세탁실·샤워실 같은 공용공간을 쓰는데, 다른 입주자나 외부인이 그곳까지 들어와 몸을 밀착하거나 신체를 만져 너무 놀랍고 수치스러웠어요. 공용공간이라 오가는 사람이 있어 처음엔 우연인가 싶었지만, 접촉 부위와 방식이 우연으로 보기 어려웠고 상대가 제 방 앞이나 공용공간까지 따라와 접촉한 정황이었어요. 그 순간엔 무서워서 바로 항의하지 못했고, 상대는 ‘같은 공간이라 지나가다 스친 것’이라고 할 것 같아요. 이런 고시원·셰어하우스 공용공간에서의 침입·신체접촉을 신고하려면 어떤 기준으로 주거침입·추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '공용공간 침입 추행 주거침입·추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '고시원 셰어하우스 공용공간 침입 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '고시원·셰어하우스 공용공간에서 침입·신체접촉 추행을 당해 불안하다면, 주거침입·강제추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「고시원·셰어하우스·원룸텔에서 공용 주방·복도·세탁실·샤워실 같은 공용공간을 함께 쓰던 중, 다른 입주자나 외부인이 그 공용공간이나 방 앞까지 들어와 몸을 바짝 밀착하거나 신체를 만져 너무 놀랍고 수치스러웠던 분의 상황입니다. 공용공간은 여러 사람이 오가는 곳이라 그 순간에는 ‘지나가다 우연히 스친 건가’ 하고 헷갈리기도 하지만, 접촉한 부위와 방식이 우연으로 보기 어렵고 상대가 제 방 앞이나 공용공간까지 따라와 접촉한 정황이라면 단순한 실수로 넘기기 어려운데, 좁은 생활공간에서 계속 마주쳐야 하는 사이라 무섭고 곧바로 강하게 항의하거나 벗어나기 어려워 참고 넘긴 경우가 많아 막막하실 거예요. 게다가 상대가 ‘같은 공간이라 지나가다 스친 것’이라고 해명할 것 같아 신고해도 우연한 접촉과 구별될지, 매일 마주치는 생활공간에서 안전이 지켜질지 불안해 더 답답하셨을 거예요. 편히 쉬어야 할 생활공간에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 주거에 침입해 사람을 강제추행한 경우는 성폭력처벌법상 주거침입강제추행으로 더 무겁게 처벌되는 영역입니다. 다른 입주자·외부인이 공용공간이나 방 앞까지 들어와 의사에 반해 신체를 만지거나 밀착한 행위라면, 지나가다 스쳤다는 해명이 있더라도 침입과 추행이 결합된 것으로 평가될 여지가 있는 영역입니다. 판례는 주거침입강제추행죄가 주거침입죄와 강제추행죄의 결합범이고, 공동주택 내부의 엘리베이터·공용 계단·복도 등 공용 부분도 거주자들의 사실상 주거의 평온을 보호할 필요가 있어 주거침입죄의 객체인 사람의 주거에 해당하며, 사실상의 평온상태를 해치는 행위태양으로 공용 부분에 출입하면 주거침입에 해당한다고 본 사례 흐름이 있는 영역으로, 공용공간 침입과 강제추행 성부를 가려 다툴 여지가 있습니다. 공용공간 침입 + 신체 접촉·밀착 + 우연 접촉 해명 결합은 ‘공용공간 침입 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·공간 정리 ② 접촉 부위·태양 ③ 침입·추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 고시원·셰어하우스 공용공간 침입 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·침입·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·공간 정리</strong> — 고시원·셰어하우스·공용공간·상대·시각·동선 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 밀착·신체 접촉·따라온 정황·반복 여부 정리.</li>\n<li><strong>③ 침입·추행 해당성</strong> — 공용공간 침입과 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원과 안전 조치 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지나가다 스쳤다는 해명과 달리, 상대가 공용공간·방 앞까지 들어와 의사에 반해 신체를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식과 따라온 동선, 고시원·셰어하우스 CCTV, 다른 입주자·목격자 진술과 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·공간 자료 보존 (즉시)</strong> — 고시원·셰어하우스·공용공간·상대·시각·동선과 접촉 부위·방식을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 건물 내부·복도 CCTV, 입주·계약 내역, 다른 입주자·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·안전 조치 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담과 잠금·분리 등 안전 조치를 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">고시원·셰어하우스 공용공간 침입 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>고시원·셰어하우스·공용공간·상대·시각 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·따라온 동선 기록 (행위 태양)</strong></li>\n<li><strong>건물 내부·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>입주·계약·이용 입증 자료 (거주 정황)</strong></li>\n<li><strong>다른 입주자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 건물 내부·복도 CCTV와 입주·계약 내역으로 공간과 상대를 특정하고, 상대가 공용공간·방 앞까지 들어와 접촉한 동선과 부위·방식을 구체적으로 기록하면 우연한 스침이 아니라 침입·추행이었다는 점을 다투는 데 도움이 됩니다. 그 순간 항의하지 못했더라도 직후에 남긴 메시지나 다른 입주자에게 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공용공간 침입</strong> — 사실상 주거 평온을 해치는 태양으로 출입했는지.</li>\n<li><strong>추행 해당성</strong> — 의사에 반하는 신체 접촉·밀착인지.</li>\n<li><strong>우연 접촉 해명</strong> — ‘지나가다 스친 것’ 해명에 가려지지 않는지.</li>\n<li><strong>상대 특정</strong> — CCTV·입주 기록으로 상대를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공용 부분 침입과 주거침입강제추행의 성립',
        summary:
          '대법원 2022도3801(대법원, 2022.08.25 선고) 영역에서 법원은 성폭력처벌법 위반(주거침입강제추행)죄가 형법 제319조 제1항의 주거침입죄 내지 건조물침입죄와 형법 제298조의 강제추행죄의 결합범이므로 그 죄가 성립하려면 주거침입죄 내지 건조물침입죄에 해당하여야 한다고 보았습니다. 나아가 다세대주택·연립주택·아파트와 같은 공동주택 내부의 엘리베이터, 공용 계단, 복도 등 공용 부분도 거주자들의 사실상 주거의 평온을 보호할 필요성이 있으므로 주거침입죄의 객체인 사람의 주거에 해당하고, 거주자가 아닌 외부인이 공동주택의 공용 부분에 출입한 것이 주거침입에 해당하는지는 출입 당시 객관적·외형적으로 드러난 행위태양을 기준으로 사실상의 평온상태를 해치는 것인지에 따라 판단하여야 한다고 판시했습니다. 고시원·셰어하우스의 공용공간에서 침입·신체접촉이 문제 된 사안을 살펴볼 때에도, 공용공간에 사실상 평온을 해치는 태양으로 출입한 것이 침입에 해당하는지와 강제추행 성부를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '공용공간 침입 + 신체 접촉·밀착 + 우연 접촉 해명 결합 시 공용공간 침입 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '같은 공간이라 지나가다 스친 것이라는데 추행인가요?',
        answer:
          '<strong>우연한 스침인지 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 따라온 동선을 정리하세요.',
      },
      {
        question: '공용공간인데 침입이 되나요?',
        answer:
          '<strong>공용 부분도 사실상 주거로 보호되는 영역입니다.</strong> 출입 태양이 평온을 해쳤는지 정황을 정리하세요.',
      },
      {
        question: '무서워서 그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 메시지·상담 정황을 정리하세요.',
      },
      {
        question: '건물 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 건물 관리자·경찰에 즉시 보존을 요청하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '엘리베이터 밀폐공간 추행 신고', href: '/guide/sex-crime/sex-crime-elevator-enclosed-space-touch-report-track' },
      { label: '엘리베이터 낯선 사람 밀착 추행', href: '/guide/sex-crime/sex-crime-elevator-stranger-close-contact-track' },
      { label: '축제 캠핑장 텐트 침입 추행', href: '/guide/sex-crime/sex-crime-festival-camping-tent-intrusion-track' },
      { label: '노상 낯선 사람 기습 추행', href: '/guide/sex-crime/sex-crime-street-stranger-sudden-embrace-grope-track' },
    ],
  },

  // ─── 9. sex-crime-golf-lesson-posture-guidance-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-golf-lesson-posture-guidance-touch-report-track',
    keyword: '골프 레슨 자세 지도 빙자 추행 신고',
    questionKeyword: '골프연습장·스크린골프·실내골프 레슨에서 프로·강사가 스윙 자세를 봐준다며 필요 이상으로 허리·골반·허벅지·가슴에 손을 대거나 뒤에서 몸을 밀착해 그립·자세를 잡는 척 신체를 만져 너무 불쾌하고 수치스러웠어요. 자세 지도라 어느 정도 접촉은 예상했지만 손이 향한 부위와 방식이 정상 지도 범위를 벗어나 단순한 지도가 아니라 추행이라는 생각이 들었어요. 그 순간엔 ‘원래 이렇게 잡아주나’ 헷갈려 바로 항의하지 못했어요. 강사는 ‘스윙 자세를 교정하려던 것’이라고 할 것 같아요. 이런 골프 레슨 자세 지도 중 신체접촉 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '골프 레슨 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '골프 레슨 자세 지도 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '골프 레슨에서 강사가 자세 지도를 빙자해 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행·기습추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「골프연습장·스크린골프·실내골프 레슨에서 프로·강사에게 스윙 지도를 받던 중, 강사가 자세·그립·회전 동작을 봐준다는 이유로, 정상적인 지도로는 설명되지 않게 허리·골반·허벅지·가슴에 손을 대거나, 뒤에서 몸을 바짝 밀착해 붙어 그립·자세를 잡는 척 단순한 지도로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 스윙 지도는 자세를 바로잡거나 동작을 잡아주는 접촉이 어느 정도 예정되어 있어 그 순간에는 ‘원래 이렇게 잡아주는 건가’ 하고 헷갈리기도 하고, 배우는 입장이라 곧바로 강하게 항의하거나 자리를 벗어나기 어려워 참고 넘겼지만, 손이 향하는 부위와 방식이 지도에 필요한 범위를 명백히 벗어나 단순한 지도가 아니라 추행이라는 생각이 들지만, 강사가 ‘스윙 자세를 교정하려던 것’이라고 해명할 것 같아 신고해도 정상 지도와 구별될지 막막하실 거예요. 운동을 배우려고 믿고 다닌 레슨에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 지도를 빙자해 의사에 반해 신체를 만지거나 밀착한 행위라면, 자세를 교정하려 했다는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 형사재판에서 범죄사실의 유죄 인정은 법관으로 하여금 합리적인 의심을 할 여지가 없을 정도로 공소사실이 진실하다는 확신을 가지게 하는 증명력 있는 증거에 의하여야 하고, 인접한 시기에 같은 피해자를 상대로 저질러진 동종 범죄라도 각각의 범죄에 따라 피해자 진술의 신빙성과 범죄 성립 여부를 달리 판단할 수 있다고 본 사례 흐름이 있는 영역으로, 지도 범위를 벗어난 각 접촉이 추행인지를 개별적으로 가려 다툴 여지가 있습니다. 지도 빙자 + 신체 접촉·밀착 + 자세·동작 해명 결합은 ‘골프 레슨 지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·레슨 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 골프 레슨 자세 지도 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·레슨 정리</strong> — 골프장·레슨 시간·강사·수업 형태·주변 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허리·골반·허벅지·가슴 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스윙 자세를 교정하려던 것이라는 해명과 달리, 지도에 필요한 범위를 벗어나 의사에 반해 신체를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 골프장 CCTV, 다른 회원·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·레슨 자료 보존 (즉시)</strong> — 골프장·레슨 시간·강사·수업 형태와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 골프장·연습장 CCTV, 레슨 등록·결제·예약 내역, 다른 회원·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">골프 레슨 자세 지도 신체접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>골프장·레슨 시간·강사·수업 형태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>골프장·연습장 CCTV 보존 요청 자료</strong></li>\n<li><strong>레슨 등록·결제·예약 입증 자료</strong></li>\n<li><strong>다른 회원·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 골프장·연습장 CCTV와 레슨 등록·예약 내역으로 레슨 시간과 강사를 특정하고, 손이 향한 부위와 방식이 스윙 지도에 필요한 범위를 벗어났다는 점을 구체적으로 기록하면 지도 빙자 추행을 다투는 데 도움이 됩니다. 그 순간 바로 항의하지 못했더라도 직후에 남긴 메시지·통화나 다른 회원에게 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 범위를 벗어난 신체 접촉·밀착인지.</li>\n<li><strong>자세 지도 해명</strong> — ‘스윙 자세를 교정하려던 것’ 해명에 가려지지 않는지.</li>\n<li><strong>기습추행</strong> — 의사에 반하는 유형력의 행사가 있었는지.</li>\n<li><strong>강사 특정</strong> — CCTV·레슨 기록으로 강사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유죄 증명력과 동종 범죄의 개별적 판단',
        summary:
          '대법원 2018도19472(대법원, 2022.03.31 선고) 영역에서 법원은 형사재판에서 범죄사실에 대한 유죄의 인정은 법관으로 하여금 합리적인 의심을 할 여지가 없을 정도로 공소사실이 진실한 것이라는 확신을 가지게 하는 증명력을 가진 증거에 의하여야 하므로, 그와 같은 증거가 없다면 설령 피고인에게 유죄의 의심이 간다고 하더라도 피고인의 이익으로 판단할 수밖에 없다고 보았습니다. 나아가 사실인정의 전제로 이루어지는 증거의 취사선택과 증명력에 대한 판단은 자유심증주의의 한계를 벗어나지 않는 한 사실심 법원의 재량에 속하고, 인접한 시기에 같은 피해자를 상대로 저질러진 동종 범죄라도 각각의 범죄에 따라 범행의 구체적 경위, 피해자와 피고인의 관계, 관련 당사자의 진술 등이 다를 수 있으므로 각각의 범죄에 따라 피해자 진술의 신빙성이나 그 신빙성 유무를 기초로 한 범죄 성립 여부를 달리 판단할 수 있다고 판시했습니다. 골프 레슨 지도 과정에서 반복된 접촉이 문제 된 사안을 살펴볼 때에도, 각 접촉별로 지도 범위를 벗어난 추행인지와 진술의 신빙성을 개별적으로 가려 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 신체 접촉·밀착 + 자세·동작 해명 결합 시 골프 레슨 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '스윙 자세를 교정한 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>지도 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '스윙 지도는 원래 몸을 잡아주는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 지도와 민감 부위 접촉의 구별이 핵심인 영역입니다.</strong> 손이 향한 부위와 방식을 구체적으로 정리하세요.',
      },
      {
        question: '골프장 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 골프장·연습장에 즉시 보존을 요청하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '수영 강습 지도 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-lesson-guidance-touch-report-track' },
      { label: '헬스 PT 지도 추행 신고', href: '/guide/sex-crime/sex-crime-gym-personal-training-guidance-touch-report-track' },
      { label: '필라테스 자세 교정 추행 신고', href: '/guide/sex-crime/sex-crime-pilates-instructor-posture-correction-touch-report-track' },
      { label: '학원 강사 지도 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-guidance-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-water-park-water-play-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-water-park-water-play-contact-misunderstanding-falsely-accused-defense',
    keyword: '워터파크 물놀이 중 접촉 오해 추행 무고 방어',
    questionKeyword: '워터파크·수영장 유수풀·파도풀처럼 사람이 몰려 물살에 밀리고 미끄러운 공간에서 물놀이하다가 옆·뒤 사람과 몸이 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 물살·인파에 밀려 우연히 닿은 것뿐인데, 신체 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 물속이라 정확히 누가 무엇을 했는지 특정도 어렵고, 상대 진술은 시점마다 달라지고 지목 경위도 불분명해요. 이렇게 워터파크 물놀이 중 우연 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점과 진술·범인지목의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '워터파크 물놀이 접촉 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '워터파크 물놀이 접촉 오해 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '워터파크 물놀이 중 우연한 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 진술·범인지목 신빙성·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「워터파크·수영장의 유수풀·파도풀·워터슬라이드처럼 사람이 빽빽하게 몰려 물살에 몸이 밀리고 바닥이 미끄러워 서로 몸이 닿을 수밖에 없는 공간에서, 물놀이를 하거나 물살에 떠밀려 이동하는 과정에서 옆·뒤 사람과 몸이 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 물살·인파에 밀려 우연히 닿은 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 더구나 워터파크는 물속이고 붐벼 누가 무엇을 했는지 정확히 특정하기 어렵고 순식간에 벌어지는데도, 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉽고, 상대의 진술마저 시점·내용에 따라 달라지거나 지목 경위가 불분명하다면 더 답답하셨을 거예요. 혐의를 받고 있다면, 그날의 동선과 혼잡·물살 상황, 접촉이 일어난 부위·방식과 인파·수심, CCTV·일행 진술과 상대의 지목 경위를 차분히 정리해 추행의 고의가 없었고 물놀이 중 우연한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대 진술·범인지목의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 형사재판에서 유죄의 인정은 합리적 의심을 배제할 증명력 있는 증거에 의하여야 하고 검사가 그만큼 증명하지 못하면 유죄의 의심이 들더라도 피고인의 이익으로 판단해야 하며, 항소심이 새로운 객관적 사유 없이 제1심이 공소사실을 뒷받침하는 진술의 신빙성을 배척한 판단을 뒤집으려면 무죄추정의 원칙과 형사증명책임의 원칙에 비추어 수긍할 수 없는 충분하고도 납득할 만한 현저한 사정이 나타나야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 물놀이 중 접촉이 추행의 고의로 이루어졌는지, 상대 진술과 범인지목의 신빙성이 인정되는지를 종합해 가려 다툴 여지가 있는 영역입니다. 혼잡·물살 상황 + 접촉 부위·방식 + 고의 부인·진술·지목 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉 부위·경위 ③ 고의 부재 검토 ④ 진술·지목 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 워터파크 물놀이 접촉 오해 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 워터파크·물살·수심·이동 동선·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·경위</strong> — 물살 밀림·스침 등 접촉 부위·방식·순간성 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 혼잡·물살·동선 등 간접사실 검토.</li>\n<li><strong>④ 진술·지목 신빙성</strong> — 상대 진술의 일관성과 범인지목 경위의 신빙성 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — CCTV·일행 진술이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행할 고의로 접촉했는지(추행), 아니면 물살·인파에 밀려 우연히 스친 것인지(고의 부재)가 판단의 분기점입니다. 워터파크 혼잡·물살 상황과 동선, 접촉 부위·방식과 순간성, CCTV·일행 진술, 상대 진술과 범인지목 경위의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 워터파크·물살·수심·이동 동선·시각과 접촉 경위를 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·영상 정리 (즉시)</strong> — 물놀이 중 접촉한 부위·방식과 순간성, 시설·주변 CCTV·입장 기록을 정리.</li>\n<li><strong>3단계 — 진술·지목 신빙성 검토 (병행)</strong> — 상대 진술의 일관성·변동과 범인지목 경위, 정황 부합 여부를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">워터파크 물놀이 접촉 오해 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>워터파크·물살·동선·혼잡도 자료 (경위)</strong></li>\n<li><strong>입장·예약·결제·이용 내역 (이용 입증)</strong></li>\n<li><strong>시설·주변 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>접촉 부위·방식·순간성 정리 (접촉 경위)</strong></li>\n<li><strong>당일 함께한 일행·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술·범인지목 경위 정리 (신빙성 검토)</strong></li>\n<li><strong>고소장·조사 일정·진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 워터파크의 혼잡도와 물살·수심·동선, 접촉이 물놀이·이동 과정에서 순간적으로 일어난 것이라는 점을 정리하면 접촉이 추행의 고의에 의한 것인지, 물살·인파 속 우연한 스침인지를 다투는 데 도움이 됩니다. 시설·주변 CCTV와 입장·이용 기록, 상대 진술이 시점·내용에 따라 달라지거나 물속에서 범인지목 경위가 불분명한 부분을 함께 정리해 고의 부재와 진술·지목 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>혼잡·물살 경위</strong> — 물살·인파 속 우연한 접촉이었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>범인지목</strong> — 물속에서의 지목 경위가 신빙성 요건을 갖췄는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정 원칙과 진술 신빙성 판단',
        summary:
          '대법원 2017도11582(대법원, 2022.05.26 선고) 영역에서 법원은 형사재판에서 유죄의 인정은 법관으로 하여금 합리적인 의심을 할 여지가 없을 정도로 공소사실이 진실한 것이라는 확신을 가지게 하는 증명력을 가진 증거에 의하여야 하고, 검사가 이러한 확신을 가지게 할 만큼 충분히 증명하지 못한 경우에는 설령 유죄의 의심이 든다고 하더라도 피고인의 이익으로 판단해야 한다고 보았습니다. 나아가 항소심이 심리과정에서 심증 형성에 영향을 미칠 만한 객관적 사유가 새로 드러난 것이 없는데도 제1심의 사실인정을 재평가하여 뒤집으려 할 때에는, 특히 공소사실을 뒷받침하는 증인 진술의 신빙성을 배척한 제1심판단을 뒤집는 경우에는 무죄추정의 원칙과 형사증명책임의 원칙에 비추어 이를 수긍할 수 없는 충분하고도 납득할 만한 현저한 사정이 나타나는 경우라야 한다고 판시했습니다. 워터파크 물놀이 중 우연한 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 추행 고의에 대한 증명이 합리적 의심을 배제할 정도에 이르렀는지와 상대 진술의 신빙성을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '혼잡·물살 상황 + 접촉 부위·방식 + 고의 부인·진술·지목 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '물살에 밀려 스친 접촉인데도 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 혼잡·물살 경위와 접촉 부위·방식·순간성을 정리하세요.',
      },
      {
        question: '물속이라 우연히 닿았다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>혼잡·물살·동선은 고의를 배척하는 간접사실이 되는 영역입니다.</strong> CCTV·입장 기록·일행 진술을 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '물속에서 지목당했는데 다툴 수 있나요?',
        answer:
          '<strong>범인지목 경위의 신빙성을 다투는 영역입니다.</strong> 지목 경위와 정황을 구체적으로 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>혼잡·물살 경위·접촉에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '만원버스 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense' },
      { label: '클럽 인파 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-club-crowd-accidental-contact-misunderstanding-falsely-accused-defense' },
      { label: '엘리베이터 순간 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-elevator-momentary-contact-falsely-accused-defense' },
      { label: '택시 하차 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-taxi-getoff-body-contact-misunderstanding-falsely-accused-defense' },
    ],
  },
];
