import { SpokePage } from '../spoke-pages';

// batch120 fraud(6) + sex-crime(4) — 10개 (2026-07-08)
//
// 고유 존재 이유:
// 1. fraud-used-electric-scooter-prepay-nondelivery-track — 일반 중고거래 분쟁과 분기. '중고 전동킥보드·전기자전거를 직거래로 선입금받고 물건을 보내지 않고 잠적' 중고 직거래 미인도 편취 절차형 트랙(victim).
// 2. fraud-solar-power-plant-share-guaranteed-return-track — 일반 투자 분쟁과 분기. '태양광 발전 지분·확정수익을 보장한다며 투자금을 편취' 확정수익 보장 지분 투자 편취 판단형 트랙(victim).
// 3. fraud-gye-savings-club-organizer-embezzle-vanish-track — 일반 지인 금전거래와 분기. '계모임 계주가 곗돈을 모아 지급하지 않고 잠적' 계주 곗돈 편취 잠적 판단형 트랙(victim).
// 4. fraud-prosecutor-impersonation-safe-account-transfer-track — 일반 보이스피싱과 분기. '검찰·경찰을 사칭해 안전계좌 이체를 유도한 기관사칭형 전기통신금융사기' 기관사칭 안전계좌 이체 환급 절차형 트랙(victim).
// 5. fraud-groupbuy-travel-package-prepay-nondelivery-track — 일반 전자상거래 미배송과 분기. '공동구매 총대가 여행상품 대금을 선수취하고 상품을 제공하지 않고 잠적' 공동구매 여행상품 미제공 편취 절차형 트랙(victim).
// 6. fraud-used-car-private-sale-defect-falsely-accused-defense — 일반 사기 무고류와 분기. '중고차 개인거래로 판 뒤 나타난 하자로 매도인이 사기로 고소됨' 하자 인식·편취 고의 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-waxing-shop-service-pretext-touch-report-track — 일반 추행류와 분기. '왁싱샵 제모 시술을 빙자해 신체를 추행' 시술 빙자 추행 신고 판단형 트랙(victim).
// 8. sex-crime-intercity-express-bus-adjacent-seat-touch-report-track — 일반 대중교통 추행과 분기. '고속·시외버스 옆좌석에서 잠든 승객을 틈타 추행' 옆좌석 항거곤란 추행 신고 판단형 트랙(victim).
// 9. sex-crime-dance-academy-choreography-guidance-touch-report-track — 일반 추행류와 분기. '댄스·무용학원 안무·자세 지도를 빙자해 신체를 추행' 안무 지도 빙자 추행 신고 판단형 트랙(victim).
// 10. sex-crime-concert-standing-crowd-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '콘서트 스탠딩 인파 속 우연 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch120FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-electric-scooter-prepay-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-electric-scooter-prepay-nondelivery-track',
    keyword: '중고 전동킥보드 직거래 입금 미인도 사기',
    questionKeyword: '중고 거래 카페·앱에서 중고 전동킥보드·전기자전거를 싸게 판다는 글을 보고 판매자와 연락했는데, ‘직거래는 어렵고 택배로 보내줄 테니 먼저 입금하면 바로 발송한다’고 해서 시세보다 저렴한 가격에 대금을 계좌로 보냈어요. 그런데 입금 후에는 ‘오늘 발송했다, 송장 곧 보내준다’며 미루기만 하고 물건은 오지 않았고, 며칠 뒤부터는 메시지도 읽지 않고 연락이 끊겼어요. 알고 보니 같은 계좌·번호로 여러 사람에게 전동킥보드·전기자전거를 판다며 선입금만 받고 물건을 보내지 않은 정황이었어요. 처음부터 물건을 보낼 생각 없이 선입금만 챙긴 것 같은데, 이런 중고 전동킥보드 직거래 입금 후 미인도를 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 전동킥보드 선입금 미인도 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 전동킥보드 직거래 입금 미인도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '선입금했는데 전동킥보드를 받지 못하고 판매자가 잠적해 막막하다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 카페·앱에서 중고 전동킥보드·전기자전거를 시세보다 싸게 판다는 글을 보고 판매자와 연락했는데, ‘직거래는 어려우니 택배로 보내주겠다, 먼저 입금하면 오늘 바로 발송한다’는 말을 믿고 대금을 계좌로 보낸 분의 상황입니다. 그런데 막상 입금하고 나니 ‘방금 발송했다, 송장 번호는 곧 보내주겠다’며 차일피일 미루기만 하고 물건은 오지 않았고, 며칠 뒤부터는 메시지도 읽지 않은 채 연락이 끊겨, 저렴하게 잘 샀다고 생각했던 대금만 고스란히 잃게 되어 막막하실 거예요. 발송 여부를 묻고 환불을 요구해도 답이 없다가 번호를 차단당하고, 뒤늦게 확인해보니 같은 계좌·번호로 여러 사람에게 전동킥보드·전기자전거를 판다며 선입금만 받고 물건을 보내지 않은 정황까지 보이면 단순한 배송 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 물건을 보낼 의사나 능력 없이 선입금만 받은 정황이면 단순 거래 지연으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 물건을 보낼 의사 없이 선입금만 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 형사소송법이 증인 등 인증과 증거서류·증거물을 구분해 각 증거방법의 조사 방식을 개별적·구체적으로 규정하고 특히 증인에 대한 증거조사를 엄격한 절차로 정한 취지를 밝혀, 적법한 절차를 거치지 아니한 진술과 그 변형에 불과한 자료는 증거능력이 인정되기 어렵다고 본 사례 흐름이 있는 영역으로, 편취를 입증할 대화·이체·진술 자료를 적법하게 정리해두고 다툴 여지가 있습니다. 선입금 유인 + 물건 미인도 + 미발송·잠적 결합은 ‘중고 직거래 미인도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미인도·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 전동킥보드 직거래 입금 미인도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 판매 글·발송 약속 대화·주문 조건·송금 내역 정리.</li>\n<li><strong>② 미인도·기망 입증</strong> — 미발송·허위 송장·연락 두절 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선입금한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 물건을 보낼 의사나 능력 없이 선입금만 받고 발송하지 않았는지가 판단의 분기점입니다. 발송을 약속한 대화와 송금 내역, 허위 송장·연락 두절 정황과 같은 계좌·번호의 반복 미인도를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·발송 약속 대화·주문 조건·송금 내역을 캡처 보존.</li>\n<li><strong>2단계 — 미인도·기망 입증 (즉시)</strong> — 미발송·허위 송장·읽지 않은 메시지·연락 두절 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 전동킥보드 직거래 입금 미인도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·매물 사진·조건 캡처 (거래 조건)</strong></li>\n<li><strong>발송 약속·송장 안내 대화 (계약 내용)</strong></li>\n<li><strong>송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>미발송·허위 송장·연락 두절 화면 (기망 입증)</strong></li>\n<li><strong>판매자·닉네임·계좌·연락처 정보</strong></li>\n<li><strong>환불 요청·거부·차단 기록</strong></li>\n<li><strong>같은 계좌·번호 반복 미인도 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발송을 약속한 대화와 송금 내역을 대비하고, 실제로는 발송되지 않았거나 송장이 허위였음을 보여주는 화면을 확보하면 물건을 보낼 의사 없이 선입금만 받았는지를 다투는 데 도움이 됩니다. 같은 계좌·번호로 다른 사람도 전동킥보드·전기자전거를 떼인 정황을 함께 모으면 반복 편취를 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>발송 의사·능력</strong> — 입금 수령 당시 물건을 보낼 의사·능력이 있었는지.</li>\n<li><strong>미발송·허위 송장</strong> — 실제 발송 여부와 송장이 허위였는지.</li>\n<li><strong>편취 범의</strong> — 단순 지연인지 처음부터 선입금만 노렸는지.</li>\n<li><strong>편취액</strong> — 선입금한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인·직거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적법 절차를 거친 진술·증거의 증거능력',
        summary:
          '대법원 2020도14843(대법원, 2024.09.12 선고) 영역에서 법원은 형사소송법이 증인 등 인증, 증거서류와 증거물 및 그 밖의 증거를 구분한 다음 각 증거방법에 대한 증거조사 방식을 개별적·구체적으로 규정하고, 특히 증인에 대한 증거조사를 ‘신문’의 방식으로 하면서 엄격한 절차 규정을 둔 취지를 밝혔습니다. 그러면서 형사소송법에서 정한 증인신문절차를 거치지 아니한 채 증인에 대하여 선서 없이 법관이 임의의 방법으로 청취한 진술과 그 진술의 형식적 변형에 불과한 녹음파일 등은 증거능력이 인정되기 어렵고, 이는 피고인이나 변호인이 그러한 절차 진행에 동의하였거나 사후에 증거로 함에 동의하였더라도 마찬가지라고 판시했습니다. 온라인 중고거래에서 선입금 후 물건을 받지 못한 편취 사안을 살펴볼 때에도, 편취를 입증할 대화·이체·진술 등 증거를 적법한 절차에 따라 정리·확보하는 것이 다툼의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '선입금 유인 + 물건 미인도 + 미발송·잠적 결합 시 중고 직거래 미인도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '오늘 발송했다며 미루는데도 사기인가요?',
        answer:
          '<strong>물건을 보낼 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 발송 약속 대화와 미발송·연락 두절 정황을 대비하세요.',
      },
      {
        question: '실제로 발송하지 않은 걸 어떻게 밝히나요?',
        answer:
          '<strong>허위 송장·미발송 정황이 단서인 영역입니다.</strong> 송장 조회 결과와 읽지 않은 메시지를 확보하세요.',
      },
      {
        question: '계좌이체로 보냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 이체 내역과 상대 계좌 정보를 정리하세요.',
      },
      {
        question: '소액인데도 신고가 되나요?',
        answer:
          '<strong>금액과 무관하게 편취 정황이 있으면 신고를 검토하는 영역입니다.</strong> 대화·송금·미인도 자료를 정리하세요.',
      },
      {
        question: '같은 계좌로 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 미인도는 편취 다툼의 출발점인 영역입니다.</strong> 같은 계좌·번호 피해 사례를 함께 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '가짜 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-fake-online-shopping-mall-nondelivery-track' },
      { label: '농산물 직거래 미배송 추적', href: '/guide/fraud/fraud-farm-produce-nondelivery-track' },
      { label: '크라우드펀딩 리워드 미배송 추적', href: '/guide/fraud/fraud-crowdfunding-reward-nondelivery-track' },
      { label: '콘서트 티켓 미전달 추적', href: '/guide/fraud/fraud-concert-ticket-nondelivery-track' },
    ],
  },

  // ─── 2. fraud-solar-power-plant-share-guaranteed-return-track ───
  {
    domain: 'fraud',
    slug: 'fraud-solar-power-plant-share-guaranteed-return-track',
    keyword: '태양광 발전 지분 확정수익 보장 편취 사기',
    questionKeyword: '태양광 발전소 지분·수익권을 권하는 업체가 ‘발전소가 완공되면 연 몇 퍼센트 확정수익이 나온다, 한전에 전기를 팔아 매달 배당한다, 정부 정책이라 안전하다’며 확정수익을 자신 있게 제시해서, 노후 대비 안정적 투자라 믿고 지분 투자금·계약금을 냈어요. 그런데 발전소는 착공이 지지부진하거나 실체가 부실했고, 약속한 배당은 몇 달 만에 끊겼으며 수익 근거는 부풀리거나 실체가 없는 것이었어요. 항의하니 ‘인허가가 늦어져서 그렇다’며 발뺌하고 연락을 피했고, 알고 보니 같은 업체가 여러 사람에게 태양광 확정수익을 앞세워 투자금만 챙긴 정황이었어요. 처음부터 지킬 수 없는 확정수익을 보장한 것 같은데, 이런 태양광 발전 지분 확정수익 보장 편취를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '태양광 지분 확정수익 보장 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '태양광 발전 지분 확정수익 보장 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '확정수익을 보장한다던 태양광 발전 지분 투자금이 묶이고 발뺌당해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「태양광 발전소 지분·수익권을 권하는 업체가 ‘발전소가 완공되면 연 몇 퍼센트 확정수익이 나온다, 한전에 전기를 팔아 매달 배당한다, 정부가 밀어주는 사업이라 안전하다’며 확정수익을 자신 있게 제시해, 노후 대비로 꾸준한 배당을 받을 좋은 기회라는 생각으로 지분 투자금·계약금을 낸 분의 상황입니다. 그런데 막상 진행해보니 발전소는 착공이 지지부진하거나 인허가·부지·설비가 부실했고, 처음 몇 달 지급되던 배당은 이내 끊겼으며, 계약 당시 근거라며 보여준 수익 구조·발전량 전망은 크게 부풀려졌거나 실체가 없는 것이어서, 노후 자금까지 들여 투자한 돈이 회수되지 않고 묶이게 되어 막막하실 거예요. 업체에 항의하면 ‘인허가가 늦어져서 그렇다, 곧 정상화된다’며 책임을 미루다 연락을 피하고, 뒤늦게 확인해보니 같은 업체가 비슷하게 태양광 확정수익을 부풀려 여러 사람에게 투자금을 받아 챙긴 정황까지 보이면 단순 사업 부진이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 지킬 수 없는 확정수익을 알면서도 보장되는 것처럼 앞세워 투자금을 받은 정황이면 단순 투자 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 지킬 수 없는 확정수익을 보장되는 것처럼 앞세워 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 실체 없는 사업을 적법한 것처럼 가장해 지급을 청구하고 이에 속은 상대로부터 금원을 지급받아 편취한 경우 그 편취가 성립하고 피해자를 특정할 수 있다고 본 사례 흐름이 있는 영역으로, 확정수익 보장을 앞세운 자금 유치가 기망에 의한 편취였는지를 가려 다툴 여지가 있습니다. 확정수익 보장·근거 결여 + 실체 없는 사업구조 + 발뺌·회피 결합은 ‘확정수익 보장 지분 투자 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 확정수익 기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 태양광 발전 지분 확정수익 보장 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 확정수익 제시 대화·투자계약서·수익보장 각서·투자금 결제 내역 정리.</li>\n<li><strong>② 확정수익 기망 입증</strong> — 보장 수익과 실제 배당, 발전소 실체·근거 부실 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 지분 투자금·계약금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 사업 부진과 달리, 지킬 수 없는 확정수익을 알면서도 보장되는 것처럼 앞세워 투자금을 받았는지가 판단의 분기점입니다. 확정수익 제시 자료·수익보장 각서와 실제 배당 내역, 발전소·수익 구조의 실체와 발뺌·회피, 같은 업체의 반복 모집을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 확정수익 제시 대화·투자계약서·수익보장 각서·투자금 결제 내역을 캡처 보존.</li>\n<li><strong>2단계 — 확정수익 기망 입증 (즉시)</strong> — 보장 수익과 실제 배당, 발전소 착공·인허가·수익 근거의 부실을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰·기관 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">태양광 발전 지분 확정수익 보장 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>확정수익 제시·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>투자계약서·수익보장 각서·지분 약정 (계약 내용)</strong></li>\n<li><strong>지분 투자금·계약금 결제 내역 (피해 금액)</strong></li>\n<li><strong>실제 배당 지급·미지급 내역 (기망 입증)</strong></li>\n<li><strong>발전소 착공·인허가·수익 근거 자료</strong></li>\n<li><strong>업체·대표·계좌 정보</strong></li>\n<li><strong>이의 제기·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투자 당시 제시받은 확정수익·수익보장 각서와 실제 배당 지급·미지급 내역을 시간순으로 대조하고, 발전소가 실제로 착공·인허가되었는지, 발전량·수익 근거가 부풀려졌는지 확인하면 지킬 수 없는 확정수익을 앞세웠는지를 다투는 데 도움이 됩니다. 같은 업체에서 태양광 확정수익을 믿고 투자한 다른 피해자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>확정수익 기망</strong> — 보장 수익이 지킬 수 없는 부풀림이었는지.</li>\n<li><strong>사업 실체</strong> — 발전소·수익 구조에 실체가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 사업 부진인지 처음부터 투자금만 노렸는지.</li>\n<li><strong>편취액</strong> — 지분 투자금·계약금이 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·대표·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (계약·투자 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실체 없는 사업을 가장한 편취와 피해자',
        summary:
          '대법원 2022도90(대법원, 2023.10.26 선고) 영역에서 법원은 적법하게 개설되지 아니한 의료기관의 실질 개설·운영자가 적법하게 개설된 의료기관인 것처럼 의료급여비용의 지급을 청구하여 이에 속은 국민건강보험공단으로부터 그 명목의 금원을 지급받아 편취한 경우 그 피해자를 국민건강보험공단으로 보아야 한다고 보았습니다. 이는 외형만 갖춘 실체를 적법한 것처럼 가장하여 상대를 기망하고 그 처분에 따라 금원을 지급받으면 사기죄의 편취가 성립하며, 기망당하여 재산을 처분한 자를 피해자로 특정할 수 있다는 법리를 전제로 판시한 것입니다. 태양광 발전 지분·확정수익을 앞세워 투자금을 받은 사안을 살펴볼 때에도, 실체가 부실한 사업을 안정적인 확정수익이 보장되는 것처럼 앞세워 투자자를 기망하고 투자금을 교부받은 것인지와 그 편취의 피해자·범위를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '확정수익 보장·근거 결여 + 실체 없는 사업구조 + 발뺌·회피 결합 시 태양광 지분 확정수익 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '인허가가 늦어져서 배당이 안 나온다는데도 사기인가요?',
        answer:
          '<strong>보장 수익이 지킬 수 없는 부풀림이었는지가 핵심인 영역입니다.</strong> 확정수익 제시 자료와 실제 배당을 대비하세요.',
      },
      {
        question: '확정수익 보장이 기망인 걸 어떻게 밝히나요?',
        answer:
          '<strong>발전소 실체와 수익 근거 부실이 단서인 영역입니다.</strong> 착공·인허가·발전량 근거와 실제 배당을 확인하세요.',
      },
      {
        question: '투자계약서에 서명했는데도 다툴 수 있나요?',
        answer:
          '<strong>계약 체결 과정의 확정수익 기망을 다투는 영역입니다.</strong> 상담·홍보 대화와 수익보장 각서를 정리하세요.',
      },
      {
        question: '지분 투자금 전부를 피해로 보나요?',
        answer:
          '<strong>지분 투자금·계약금 등 교부 금액을 편취액으로 다투는 영역입니다.</strong> 결제·송금 내역을 정리하세요.',
      },
      {
        question: '같은 업체에 여러 명이 투자했다 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 투자자의 배당 지급·미지급 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '갭투자 임대수익 보장 추적', href: '/guide/fraud/fraud-gap-investment-rental-income-guarantee-track' },
      { label: '투자 사기 공동 대응', href: '/guide/fraud/fraud-investment-collective-action' },
      { label: '다단계 투자 구조 분석', href: '/guide/fraud/fraud-investment-mlm-structure' },
      { label: '가상자산 채굴기 임대 수익 보장 추적', href: '/guide/fraud/fraud-crypto-mining-machine-rental-track' },
    ],
  },

  // ─── 3. fraud-gye-savings-club-organizer-embezzle-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gye-savings-club-organizer-embezzle-vanish-track',
    keyword: '계모임 곗돈 계주 잠적 편취 사기',
    questionKeyword: '지인·동네 모임에서 계모임(번호계·낙찰계)에 들어 매달 계주 계좌로 곗돈을 부었는데, 제 순번이 되어 목돈을 받을 때가 됐는데도 계주가 ‘조금만 기다려라, 다른 계원이 아직 안 냈다’며 미루기만 했어요. 그러다 계주가 곗돈을 받아 다른 데 써버렸거나 애초에 계 자체를 부풀려 여러 사람에게 곗돈만 걷은 정황이 드러났고, 결국 목돈은 받지 못한 채 계주가 연락을 끊고 잠적했어요. 계주는 ‘사정이 어려워 못 준 것뿐 사기는 아니다’라고 할 것 같아요. 처음부터 지급할 의사나 능력 없이 곗돈만 걷은 것 같은데, 이런 계모임 곗돈 계주 잠적을 사기로 신고하고 낸 곗돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '계주 곗돈 편취 잠적 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '계모임 곗돈 들고 잠적 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '믿고 부은 곗돈을 계주가 들고 잠적해 막막하다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동네 모임에서 계모임(번호계·낙찰계)에 들어 매달 계주 계좌로 곗돈을 성실히 부었는데, 정작 제 순번이 되어 목돈을 받을 때가 되자 계주가 ‘조금만 기다려라, 아직 안 낸 계원이 있다’며 지급을 미루기만 한 분의 상황입니다. 그러다 계주가 걷은 곗돈을 다른 곳에 써버렸거나, 애초에 계 규모·계원 수를 부풀려 여러 사람에게서 곗돈만 걷어온 정황이 드러났고, 결국 받기로 한 목돈은 받지 못한 채 계주가 연락을 끊고 잠적해, 매달 아껴 부은 곗돈을 고스란히 잃게 되어 막막하실 거예요. 계주에게 지급과 정산을 요구해도 ‘사정이 어려워 그런 것’이라며 차일피일 미루다 번호를 바꾸거나 자취를 감추고, 뒤늦게 확인해보니 다른 계원들도 목돈을 받지 못한 정황까지 보이면 단순한 돈 문제가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 곗돈을 지급할 의사나 능력 없이 걷기만 한 정황이면 단순한 채무 불이행으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 지급할 의사·능력 없이 곗돈을 걷었다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 범인이 형사처분을 면할 목적으로 국외에 있는 경우 그 기간 동안 공소시효가 정지된다고 규정한 취지가 도피 수단으로 이용된 국외 체류기간 동안 시효 진행을 저지하여 형벌권을 적정하게 실현하려는 데 있다고 본 사례 흐름이 있는 영역으로, 계주가 자취를 감추거나 도피하더라도 그 사정이 곧바로 책임을 면하게 하는 것은 아니라는 점을 전제로 편취 여부를 다툴 여지가 있습니다. 곗돈 수령·지급 불이행 + 잠적·도피 + 회피 결합은 ‘계주 곗돈 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·납입 정리 ② 지급 불이행·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 계모임 곗돈 계주 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 납입·불이행·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·납입 정리</strong> — 계 조직·순번·계금 약정·매월 납입 이체 내역 정리.</li>\n<li><strong>② 지급 불이행·기망 입증</strong> — 순번 도래 후 미지급·계 규모 부풀림·잠적 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 납입한 곗돈과 받지 못한 목돈 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순한 채무 불이행과 달리, 지급할 의사나 능력 없이 곗돈만 걷었는지가 판단의 분기점입니다. 계 조직·순번·계금 약정과 매월 납입 이체 내역, 순번 도래 후 미지급·계 규모 부풀림·잠적 정황, 다른 계원의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·대한법률구조공단 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·납입 자료 보존 (즉시)</strong> — 계 조직 대화·순번·계금 약정·매월 납입 이체 내역을 캡처 보존.</li>\n<li><strong>2단계 — 지급 불이행·기망 입증 (즉시)</strong> — 순번 도래 후 미지급·계 규모 부풀림·잠적 정황과 다른 계원 상황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 계주 계좌 지급정지를 112·은행에 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 경찰서·사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">계모임 곗돈 계주 잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 납입·불이행·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>계 조직·모집·약정 대화 캡처 (거래 조건)</strong></li>\n<li><strong>순번·계금·계원 명단 자료 (계약 내용)</strong></li>\n<li><strong>매월 곗돈 납입 이체 내역 (피해 금액)</strong></li>\n<li><strong>순번 도래 후 미지급·미룸 대화 (기망 입증)</strong></li>\n<li><strong>계 규모 부풀림·잠적 정황 기록</strong></li>\n<li><strong>계주 인적사항·계좌·연락처 정보</strong></li>\n<li><strong>다른 계원 동일 피해 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계 조직·순번·계금 약정과 매월 납입한 이체 내역을 정리하고, 순번이 되었는데도 지급하지 않은 대화와 계 규모를 부풀린 정황을 대비하면 지급할 의사 없이 곗돈만 걷었는지를 다투는 데 도움이 됩니다. 다른 계원도 목돈을 받지 못했거나 곗돈만 떼인 정황을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지급 의사·능력</strong> — 곗돈 수령 당시 지급할 의사·능력이 있었는지.</li>\n<li><strong>계 실체</strong> — 계원·순번·계금이 실제로 있었는지, 규모를 부풀렸는지.</li>\n<li><strong>편취 범의</strong> — 단순 채무 불이행인지 처음부터 곗돈만 노렸는지.</li>\n<li><strong>편취액</strong> — 납입 곗돈과 받지 못한 목돈이 피해액인지.</li>\n<li><strong>계주 특정</strong> — 인적사항·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (금전거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도피와 공소시효 정지의 취지',
        summary:
          '대법원 2020도13547(대법원, 2022.09.29 선고) 영역에서 법원은 형사소송법 제253조 제3항이 ‘범인이 형사처분을 면할 목적으로 국외에 있는 경우 그 기간 동안 공소시효는 정지된다.’라고 규정한 취지가, 범인이 우리나라의 사법권이 실질적으로 미치지 못하는 국외에 체류한 것이 도피의 수단으로 이용된 경우 그 체류기간 동안 공소시효가 진행되는 것을 저지하여 범인을 처벌할 수 있도록 함으로써 형벌권을 적정하게 실현하려는 데 있다고 보았습니다. 그러면서 위 조항에서 정지의 대상으로 규정한 ‘공소시효’의 의미를 문언과 취지에 따라 가려 판시했습니다. 계주가 곗돈을 받아 지급하지 않고 잠적·도피한 사안을 살펴볼 때에도, 상대가 자취를 감추거나 국외로 도피하더라도 그 사정이 곧바로 책임을 면하게 하는 것은 아니라는 점을 전제로, 지급 의사 없이 곗돈을 걷은 편취였는지를 가려 검토해볼 수 있습니다.',
        takeaway: '곗돈 수령·지급 불이행 + 잠적·도피 + 회피 결합 시 계주 곗돈 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사정이 어려워 못 준 것뿐이라는데도 사기인가요?',
        answer:
          '<strong>지급할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 순번 도래 후 미지급·계 규모 부풀림 정황을 대비하세요.',
      },
      {
        question: '곗돈을 딴 데 썼다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>계금 용처·계 규모 부풀림이 단서인 영역입니다.</strong> 납입 이체 내역과 순번·계원 자료를 확보하세요.',
      },
      {
        question: '계약서 없이 구두로 든 계인데 다툴 수 있나요?',
        answer:
          '<strong>대화·이체 내역으로 계 약정을 입증하는 영역입니다.</strong> 모집 대화와 매월 납입 내역을 정리하세요.',
      },
      {
        question: '받지 못한 목돈 전부를 피해로 보나요?',
        answer:
          '<strong>납입 곗돈과 받지 못한 목돈을 편취액으로 다투는 영역입니다.</strong> 이체·정산 내역을 정리하세요.',
      },
      {
        question: '다른 계원도 못 받은 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 계원의 납입·미지급 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인에게 빌려준 돈 잠적 추적', href: '/guide/fraud/fraud-friend-loan-vanish-recovery' },
      { label: '지인 차용금 민사·형사 구별', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '보증금만 받고 미이행 추적', href: '/guide/fraud/fraud-deposit-only-withholding-trick' },
      { label: '고령자 집단 투자 사기 대응', href: '/guide/fraud/fraud-elderly-group-investment-scam' },
    ],
  },

  // ─── 4. fraud-prosecutor-impersonation-safe-account-transfer-track ───
  {
    domain: 'fraud',
    slug: 'fraud-prosecutor-impersonation-safe-account-transfer-track',
    keyword: '검찰 사칭 안전계좌 이체 보이스피싱 사기',
    questionKeyword: '검찰·경찰·금융감독원을 사칭한 전화가 와서 ‘당신 명의 계좌가 범죄에 연루됐다, 대포통장 명의인으로 조사 대상이다, 자금을 검증해야 하니 안전계좌로 옮겨야 무혐의 처리된다’며 겁을 줘서, 구속·처벌이 두려워 시키는 대로 안전계좌라는 곳으로 예금과 대출받은 돈까지 이체했어요. 공문·검사 신분증 사진까지 보내와 진짜인 줄 알았는데, 알고 보니 검찰·금감원은 안전계좌로 이체를 요구하지 않고 그 계좌는 대포통장이었어요. 이체 후 상대는 연락을 끊었고 돈은 순식간에 인출된 것 같아요. 이런 검찰 사칭 안전계좌 이체 보이스피싱을 당했을 때 즉시 무엇을 하고 어떤 절차로 지급정지·피해구제를 받아 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '검찰 사칭 안전계좌 이체 피해구제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '검찰 사칭 안전계좌 이체 보이스피싱 — 5단계 환급 점검 | 로앤가이드',
      description:
        '검찰·경찰을 사칭한 전화에 안전계좌로 돈을 보내 막막하다면, 형법 제347조 사기 판단과 지급정지·피해구제·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「검찰·경찰·금융감독원을 사칭한 전화가 걸려와 ‘당신 명의 계좌가 범죄에 연루됐다, 대포통장 명의인으로 수사 대상이 됐다, 지금 자금을 검증해야 하니 안전계좌로 옮겨야 무혐의로 처리된다’며 겁을 주어, 구속·처벌이 두려운 마음에 시키는 대로 예금은 물론 급하게 대출받은 돈까지 안전계좌라는 곳으로 이체한 분의 상황입니다. 상대가 검사·수사관을 자처하며 공문·신분증 사진까지 보내오고 통화 내내 다그쳐, 진짜 기관인 줄 알고 계좌번호·비밀번호를 알려주거나 시키는 대로 송금했는데, 뒤늦게 검찰·금융감독원은 안전계좌로 이체를 요구하지 않는다는 사실을 알게 되고 그 계좌가 대포통장이었음이 드러나, 순식간에 큰돈이 빠져나가 막막하실 거예요. 이체 직후 상대는 연락을 끊고 돈은 여러 계좌로 빠르게 인출된 정황이라 시간이 촉박하고, 어디에 어떤 순서로 알려 지급을 막아야 할지 몰라 더 답답하셨을 거예요. 기관은 전화로 자금 이체·안전계좌를 요구하지 않으므로, 이런 요구는 전기통신금융사기의 전형으로 볼 여지가 큽니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하며, 전기통신금융사기는 관련 특별법에 따라 지급정지·피해금 환급 절차가 마련되어 있는 영역입니다. 판례는 범행 중 또는 범행 직후 범죄 장소에서 영장 없이 압수한 물건에 대하여 사후 영장을 발부받지 못하면 즉시 반환하여야 하고 즉시 반환하지 아니한 압수물은 유죄의 증거로 쓸 수 없다고 보아 적법한 증거 확보의 중요성을 밝힌 사례 흐름이 있는 영역으로, 피해금 흐름·계좌·통신 자료를 적법하게 확보해두는 것이 대응의 출발점이 됩니다. 기관 사칭 + 안전계좌 이체 유도 + 피해금 이체 결합은 ‘기관사칭 전기통신금융사기’ 대응이 가능한 트랙입니다. 피해자라면 ① 즉시 지급정지 ② 사칭·이체 정리 ③ 피해구제 신청 ④ 경찰 신고 ⑤ 채권소멸·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 검찰 사칭 안전계좌 이체 보이스피싱 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급정지·사칭 정리·피해구제·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 지급정지</strong> — 112·송금 은행에 즉시 계좌 지급정지 요청.</li>\n<li><strong>② 사칭·이체 정리</strong> — 사칭 전화·공문·계좌·이체 내역 정리.</li>\n<li><strong>③ 피해구제 신청</strong> — 은행에 전기통신금융사기 피해구제 신청서 접수.</li>\n<li><strong>④ 경찰 신고</strong> — 경찰서·사이버범죄 신고 ECRM 접수와 사건사고사실확인원 발급.</li>\n<li><strong>⑤ 채권소멸·환급</strong> — 채권소멸 공고 절차를 거쳐 피해금 환급 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 검찰·경찰·금융감독원은 전화로 자금 이체나 안전계좌를 요구하지 않는다는 점이 판단의 분기점입니다. 무엇보다 이체 직후 즉시 지급정지를 요청해 인출을 막는 것이 중요하고, 사칭 전화 녹음·공문·이체 내역과 상대 계좌 정보를 신속히 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 지급정지 (즉시)</strong> — 112·송금 은행 콜센터에 전화해 상대 계좌 지급정지를 요청.</li>\n<li><strong>2단계 — 사칭·이체 자료 보존 (즉시)</strong> — 사칭 전화 번호·녹음·공문·신분증 사진·이체 내역을 캡처 보존.</li>\n<li><strong>3단계 — 피해구제 신청 (지급정지 후)</strong> — 은행에 전기통신금융사기 피해구제 신청서를 접수.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 경찰서·사이버범죄 신고 ECRM 접수 후 사건사고사실확인원을 발급, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 채권소멸·환급 (약 2개월)</strong> — 채권소멸 공고 절차를 거쳐 남은 피해금 환급을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">검찰 사칭 안전계좌 이체 보이스피싱 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 지급정지·피해구제·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>사칭 전화 번호·통화 녹음 (사칭 정황)</strong></li>\n<li><strong>가짜 공문·검사 신분증 사진 (기망 수단)</strong></li>\n<li><strong>안전계좌 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>상대 계좌·예금주 정보 (지급정지 대상)</strong></li>\n<li><strong>지급정지 요청·접수 확인 자료</strong></li>\n<li><strong>피해구제 신청서·사건사고사실확인원</strong></li>\n<li><strong>악성 앱·문자·링크 캡처 (원격제어 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무엇보다 이체 직후 112·은행에 즉시 지급정지를 요청해 계좌가 비워지기 전에 인출을 막는 것이 가장 중요합니다. 사칭 전화 녹음·가짜 공문·이체 내역과 상대 계좌 정보를 정리하고, 원격제어 앱이나 악성 링크를 눌렀다면 그 흔적까지 확보해 피해구제 신청과 신고에 대비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기관 사칭</strong> — 검찰·경찰·금감원을 사칭해 자금 이체를 요구했는지.</li>\n<li><strong>지급정지 시점</strong> — 이체 직후 신속히 지급정지가 이루어졌는지.</li>\n<li><strong>잔액 여부</strong> — 지급정지 시점에 계좌에 잔액이 남아 있었는지.</li>\n<li><strong>피해금 흐름</strong> — 안전계좌에서 다른 계좌로 이체·인출된 경로.</li>\n<li><strong>피해구제 요건</strong> — 전기통신금융사기 피해구제 요건에 해당하는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·피해구제 상담)</strong></li>\n<li><strong>송금 은행 콜센터 (계좌 지급정지 접수)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적법한 증거 확보와 즉시 반환 원칙',
        summary:
          '대법원 2024도10062(대법원, 2024.10.08 선고) 영역에서 법원은 형사소송법 제216조 제3항에 따라 범행 중 또는 범행 직후의 범죄 장소에서 긴급을 요하여 영장 없이 압수한 물건에 대하여 사후에 압수수색영장을 청구하였다가 이를 발부받지 못한 때에는 수사기관이 압수한 물건을 즉시 반환하여야 하고, 즉시 반환하지 아니한 압수물은 유죄의 증거로 사용할 수 없으며, 영장주의의 중요성에 비추어 피고인이나 변호인이 증거로 함에 동의하였더라도 달리 볼 것은 아니라고 판시했습니다. 이는 편취 사안의 증거도 헌법과 형사소송법이 정한 적법한 절차에 따라 확보·사용되어야 함을 보여줍니다. 기관을 사칭해 안전계좌 이체를 유도한 전기통신금융사기 사안을 살펴볼 때에도, 사칭 전화·공문·피해금 이체 흐름과 상대 계좌 등 증거를 적법한 절차에 따라 신속히 확보·정리하는 것이 지급정지·피해구제와 대응의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '기관 사칭 + 안전계좌 이체 유도 + 피해금 이체 결합 시 기관사칭 전기통신금융사기 검토 영역 — 즉시 지급정지·상담 검토 권장.',
      },
    ],
    faq: [
      {
        question: '검찰이라며 안전계좌로 옮기라는데 진짜인가요?',
        answer:
          '<strong>기관은 전화로 자금 이체·안전계좌를 요구하지 않는 영역입니다.</strong> 이런 요구는 사칭으로 보고 즉시 끊고 확인하세요.',
      },
      {
        question: '이미 이체했는데 지금 무엇을 먼저 해야 하나요?',
        answer:
          '<strong>즉시 지급정지가 가장 중요한 영역입니다.</strong> 112·송금 은행에 바로 전화해 계좌 지급정지를 요청하세요.',
      },
      {
        question: '공문·신분증까지 받았는데 사칭인가요?',
        answer:
          '<strong>공문·신분증 사진은 위조가 흔한 영역입니다.</strong> 대표번호로 직접 확인하고 받은 파일을 보존하세요.',
      },
      {
        question: '피해금은 어떻게 돌려받나요?',
        answer:
          '<strong>지급정지 후 피해구제·채권소멸 공고를 거치는 영역입니다.</strong> 은행 피해구제 신청서와 사건사고사실확인원을 준비하세요.',
      },
      {
        question: '앱을 설치하라고 해서 눌렀어요.',
        answer:
          '<strong>원격제어·악성 앱 감염이 의심되는 영역입니다.</strong> 휴대전화 초기화·명의도용 차단과 함께 흔적을 캡처해 두세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '고령자 보이스피싱 피해 구제', href: '/guide/fraud/fraud-elderly-voice-phishing-recovery' },
      { label: '정부 환급 사칭 피싱 추적', href: '/guide/fraud/fraud-government-refund-phishing-variant' },
      { label: '정부 지원금 사칭 송금 추적', href: '/guide/fraud/fraud-government-subsidy-impersonation-track' },
      { label: '계좌 지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
    ],
  },

  // ─── 5. fraud-groupbuy-travel-package-prepay-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-groupbuy-travel-package-prepay-nondelivery-track',
    keyword: '공동구매 여행상품 선결제 미제공 잠적 사기',
    questionKeyword: '단톡방·카페·SNS에서 ‘총대’가 항공권·호텔·패키지 여행을 공동구매로 대량 할인받아 준다며 인원을 모아서, 저렴하다는 말을 믿고 여행상품 대금을 총대 계좌로 미리 보냈어요. 그런데 출발일이 다가와도 항공권·바우처는 발급되지 않았고, 총대는 ‘업체 사정으로 예약이 늦어진다, 곧 확정된다’며 미루기만 하다가 결국 여행은 무산됐어요. 환불을 요구하니 답을 피하다 단톡방을 폭파하고 잠적했고, 알고 보니 같은 총대가 여러 참가자에게 공동구매 여행상품 대금만 걷고 상품을 제공하지 않은 정황이었어요. 처음부터 상품을 제공할 생각 없이 대금만 챙긴 것 같은데, 이런 공동구매 여행상품 선결제 미제공을 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '공동구매 여행상품 선결제 미제공 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공동구매 여행상품 선결제 미제공 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '공동구매로 선결제한 여행상품이 제공되지 않고 총대가 잠적해 막막하다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「단톡방·카페·SNS에서 ‘총대’가 항공권·호텔·패키지 여행을 공동구매로 대량 할인받아 준다며 인원을 모아, 정식으로 예약하는 것보다 훨씬 저렴하다는 말을 믿고 여행상품 대금을 총대 개인 계좌로 미리 보낸 분의 상황입니다. 그런데 막상 출발일이 다가와도 항공권·호텔 바우처·예약 확정서는 발급되지 않았고, 총대는 ‘제휴 업체 사정으로 예약이 늦어진다, 곧 확정된다’며 미루기만 하다가 결국 여행 자체가 무산되어, 기대했던 여행도 못 가고 미리 낸 대금만 잃게 되어 막막하실 거예요. 환불을 요구하면 답을 피하다 단톡방을 폭파하거나 아이디를 바꾸고 잠적하고, 뒤늦게 확인해보니 같은 총대가 여러 참가자에게 공동구매 여행상품 대금만 걷고 상품을 제공하지 않은 정황까지 보이면 단순한 예약 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 여행상품을 제공할 의사나 능력 없이 공동구매를 앞세워 대금만 받은 정황이면 단순 거래 지연으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 여행상품을 제공할 의사 없이 공동구매를 앞세워 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망으로 상대의 처분행위를 이끌어내 재물 또는 재산상 이익을 취득한 경우 사기죄가 성립한다는 법리를 전제로, 권리·자격을 이전하거나 취득하는 다양한 형태의 편취를 폭넓게 인정한 사례 흐름이 있는 영역으로, 공동구매 대금을 받고 상품을 제공하지 않은 것이 편취에 해당하는지를 가려 다툴 여지가 있습니다. 공동구매 유인 + 여행상품 미제공 + 잠적·회피 결합은 ‘공동구매 여행상품 미제공 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미제공·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공동구매 여행상품 선결제 미제공 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미제공·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 공동구매 모집 글·할인 조건·상품 안내 대화·대금 송금 내역 정리.</li>\n<li><strong>② 미제공·기망 입증</strong> — 항공권·바우처 미발급·예약 미확정·잠적 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선결제한 여행상품 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 예약 지연과 달리, 여행상품을 제공할 의사나 능력 없이 공동구매를 앞세워 대금만 받았는지가 판단의 분기점입니다. 공동구매 모집 글·할인 조건과 대금 송금 내역, 항공권·바우처 미발급·예약 미확정·잠적 정황, 다른 참가자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 공동구매 모집 글·할인 조건·상품 안내 대화·대금 송금 내역을 캡처 보존.</li>\n<li><strong>2단계 — 미제공·기망 입증 (즉시)</strong> — 항공권·바우처 미발급·예약 미확정·단톡방 폭파·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동구매 여행상품 선결제 미제공 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미제공·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>공동구매 모집 글·할인 조건 캡처 (거래 조건)</strong></li>\n<li><strong>상품·일정·예약 안내 대화 (계약 내용)</strong></li>\n<li><strong>여행상품 대금 송금 내역 (피해 금액)</strong></li>\n<li><strong>항공권·바우처 미발급·예약 미확정 화면 (기망 입증)</strong></li>\n<li><strong>단톡방 폭파·잠적·연락 두절 기록</strong></li>\n<li><strong>총대·닉네임·계좌·연락처 정보</strong></li>\n<li><strong>다른 참가자 동일 피해 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공동구매 모집 글·할인 조건과 대금 송금 내역을 대비하고, 출발일이 다가와도 항공권·바우처가 발급되지 않고 예약이 확정되지 않은 화면을 확보하면 상품을 제공할 의사 없이 대금만 받았는지를 다투는 데 도움이 됩니다. 같은 총대에게 공동구매 여행상품 대금을 떼인 다른 참가자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>제공 의사·능력</strong> — 대금 수령 당시 상품을 제공할 의사·능력이 있었는지.</li>\n<li><strong>예약 실체</strong> — 실제로 항공·호텔이 예약·확정되었는지.</li>\n<li><strong>편취 범의</strong> — 단순 예약 지연인지 처음부터 대금만 노렸는지.</li>\n<li><strong>편취액</strong> — 선결제한 여행상품 대금이 피해액인지.</li>\n<li><strong>총대 특정</strong> — 닉네임·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (여행·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 처분과 편취의 다양한 형태',
        summary:
          '대법원 2022도3044(대법원, 2022.06.30 선고) 영역에서 법원은 주택법 제65조 제1항 제2호에서 금지하는 ‘입주자저축 증서 등의 양도행위’란 그 개념상 입주자저축 증서 등에 관한 법률상 또는 사실상의 귀속주체를 종국적으로 변경하는 행위를 의미하고, 온라인 청약이 일반화된 현실을 고려하면 주택청약종합저축 계좌에 연계된 공인인증서를 양도·양수한 행위도 이에 포함된다고 판시했습니다. 이는 거래 현실의 변화에 따라 권리·자격이 이전·취득되는 실질을 기준으로 규범을 해석해야 한다는 취지로, 사기죄에서도 기망으로 상대의 처분을 이끌어내 재물이나 재산상 이익을 취득하면 그 편취가 다양한 형태로 인정될 수 있음을 시사합니다. 공동구매 형태로 여행상품 대금을 미리 받고 상품을 제공하지 않은 사안을 살펴볼 때에도, 공동구매를 앞세운 기망에 속아 대금을 교부한 처분이 있었고 이를 통해 재물·재산상 이익을 취득한 것인지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '공동구매 유인 + 여행상품 미제공 + 잠적·회피 결합 시 공동구매 여행상품 미제공 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '업체 사정으로 예약이 늦어진다는데도 사기인가요?',
        answer:
          '<strong>상품을 제공할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 예약 미확정·바우처 미발급 정황을 대비하세요.',
      },
      {
        question: '실제로 예약을 안 한 걸 어떻게 밝히나요?',
        answer:
          '<strong>항공권·바우처·예약 확정서 부존재가 단서인 영역입니다.</strong> 미발급 화면과 안내 대화를 확보하세요.',
      },
      {
        question: '총대 개인 계좌로 보냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 송금 내역과 총대 계좌 정보를 정리하세요.',
      },
      {
        question: '단톡방이 폭파돼 자료가 사라졌어요.',
        answer:
          '<strong>남은 개별 대화·송금 내역으로 다투는 영역입니다.</strong> 개인 메시지·이체 내역과 캡처를 모으세요.',
      },
      {
        question: '여러 참가자가 함께 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 참가자의 송금·미제공 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '인플루언서 공동구매 미배송 추적', href: '/guide/fraud/fraud-influencer-groupbuy-nondelivery-track' },
      { label: '크라우드펀딩 리워드 미배송 추적', href: '/guide/fraud/fraud-crowdfunding-reward-product-nondelivery-track' },
      { label: '행사 예약금 취소 잠적 추적', href: '/guide/fraud/fraud-event-deposit-cancel-vanish-recovery-track' },
      { label: '농산물 직거래 미배송 추적', href: '/guide/fraud/fraud-farm-produce-nondelivery-track' },
    ],
  },

  // ─── 6. fraud-used-car-private-sale-defect-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-private-sale-defect-falsely-accused-defense',
    keyword: '중고차 매도 후 하자 사기 고소 방어',
    questionKeyword: '개인 간 중고차 직거래로 제 차를 팔았는데, 매수인이 며칠·몇 주 뒤에 엔진·미션·누유 같은 고장을 발견했다며 ‘하자를 숨기고 팔았다, 사기다’라며 저를 사기로 고소했어요. 저는 제가 아는 범위에서 차 상태를 알려줬고 알면서 하자를 숨긴 적이 없는데, 매도 후에 생기거나 뒤늦게 발견된 문제까지 제가 속인 것처럼 몰려 너무 억울해요. 성능점검기록부·시운전 기회도 줬고 가격도 그에 맞춰 정한 것인데, 접촉·주행 중 발생한 고장인지 매도 전부터 있던 하자인지도 불분명해요. 이렇게 중고차를 판 뒤 나타난 하자로 사기 고소된 상황에서 하자를 알면서 속인 게 아니라는 점과 편취의 고의가 없었다는 점을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '중고차 매도 하자 편취 고의 부재·방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '중고차 매도 후 하자 사기 고소 방어 — 5단계 점검 | 로앤가이드',
      description:
        '중고차를 판 뒤 나타난 하자로 사기 고소를 당해 억울하다면, 편취 고의 유무 판단과 진술·증거 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「개인 간 중고차 직거래로 타던 차를 판 뒤, 매수인이 며칠 또는 몇 주가 지나 엔진·미션·누유 같은 고장을 발견했다며 ‘하자를 알면서 숨기고 팔았다, 사기다’라며 사기로 고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 제가 아는 범위에서 차 상태를 알려주고 성능점검기록부와 시운전 기회도 주었으며 가격도 상태에 맞춰 정했을 뿐, 알면서 하자를 숨긴 적이 없는데, 매도 후에 생기거나 뒤늦게 발견된 문제까지 처음부터 속인 것처럼 몰려 억울하고 막막하실 거예요. 게다가 중고차는 오래 탄 물건이라 부품 노후로 고장이 언제든 날 수 있고, 인수 후 주행 과정에서 발생한 고장인지 매도 전부터 있던 하자인지 구분이 어려운데도, 하자가 있었다는 사실과 매수인의 주장만으로 기망·편취가 단정될까 봐 더 답답하셨을 거예요. 혐의를 받고 있다면, 매도 당시 알려준 차 상태와 성능점검기록부·시운전 정황, 가격 산정 경위와 하자 발생·발견 시점을 차분히 정리해 하자를 알면서 속인 것이 아니라는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 매수인 주장의 모순까지 함께 기록해두는 것이 좋습니다.」 사기죄가 성립하려면 기망행위와 함께 편취의 고의가 인정되어야 하고, 단순한 채무 불이행이나 매매 목적물의 하자만으로 곧바로 기망이 인정되는 것은 아닌 영역입니다. 판례는 소송사기와 같이 재산범죄의 성부를 가릴 때, 피고인이 범행을 인정한 경우가 아니라면 주장이 사실과 다름이 객관적으로 명백하거나 허위임을 인식하고 증거를 조작하려 한 흔적이 있는 등의 경우가 아닌 한 쉽사리 유죄로 인정해서는 안 되고, 단순히 채권이 존재하지 않는다는 것만으로는 부족하며 존재하지 않는 사실을 잘 알면서 허위로 기망한다는 인식이 있어야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 매도 당시 하자를 알면서 속였는지와 편취의 고의가 있었는지를 종합해 가려 다툴 여지가 있는 영역입니다. 하자 인식 여부 + 거래 후 하자 발생·발견 + 편취 고의 다툼 결합은 ‘편취 고의 부재’를 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 거래·고지 정리 ② 하자 시점·경위 ③ 고의 부재 검토 ④ 진술·증거 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 매도 후 하자 사기 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·하자 시점·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·고지 정리</strong> — 매매 경위·고지한 차 상태·성능점검기록부·가격 산정 정리.</li>\n<li><strong>② 하자 시점·경위</strong> — 하자 발생·발견 시점과 인수 후 주행 정황 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 하자 인식과 편취 고의를 배척하는 간접사실 검토.</li>\n<li><strong>④ 진술·증거 신빙성</strong> — 매수인 주장의 일관성과 정비 내역의 신빙성 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 시운전·기록부·가격이 기망 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 매도 당시 하자를 알면서 속였는지(기망·편취), 아니면 매도 후 발생·발견된 하자인지(고의 부재)가 판단의 분기점입니다. 고지한 차 상태·성능점검기록부·시운전 정황과 가격 산정 경위, 하자 발생·발견 시점과 정비 내역, 매수인 주장의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·고지 자료 보존 (즉시)</strong> — 매매계약서·성능점검기록부·고지 대화·가격 산정 근거를 시간순으로 보존.</li>\n<li><strong>2단계 — 하자 시점·정비 정리 (즉시)</strong> — 하자 발생·발견 시점, 인수 후 주행거리·정비·수리 내역을 정리.</li>\n<li><strong>3단계 — 진술·증거 신빙성 검토 (병행)</strong> — 매수인 주장의 일관성·변동과 하자 원인·시점에 관한 자료의 부합 여부를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 매도 후 하자 사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서·이전등록 자료 (거래 내용)</strong></li>\n<li><strong>성능점검기록부·차량 상태 고지 자료 (고지 정황)</strong></li>\n<li><strong>시운전·현장 확인 정황·대화 (확인 기회)</strong></li>\n<li><strong>가격 산정 근거·시세 비교 자료 (편취 부재)</strong></li>\n<li><strong>하자 발생·발견 시점·정비 내역 (원인·시점)</strong></li>\n<li><strong>매수인 주장·연락 기록 (신빙성 검토)</strong></li>\n<li><strong>고소장·조사 일정·진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매도 당시 고지한 차 상태와 성능점검기록부·시운전 정황, 상태에 맞춘 가격 산정 근거를 정리하면 하자를 알면서 속인 것이 아니라 알린 범위에서 거래했다는 점을 다투는 데 도움이 됩니다. 하자가 인수 후 주행·시간 경과로 발생·발견된 것인지, 매수인 주장이 시점·내용에 따라 달라지는지 함께 정리해 편취 고의 부재와 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>하자 인식</strong> — 매도 당시 하자를 알면서 숨겼는지.</li>\n<li><strong>하자 시점</strong> — 매도 후 발생·발견된 하자인지.</li>\n<li><strong>편취 고의</strong> — 대금만 노린 기망의 고의가 있었는지.</li>\n<li><strong>고지·확인</strong> — 성능점검기록부·시운전으로 상태를 알렸는지.</li>\n<li><strong>진술 신빙성</strong> — 매수인 주장이 일관되고 원인·시점과 맞는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산범죄에서 기망 인식과 신중한 유죄 판단',
        summary:
          '대법원 2022도1227(대법원, 2022.05.26 선고) 영역에서 법원은 소송사기는 법원을 기망하여 자기에게 유리한 판결을 얻음으로써 상대방의 재물 또는 재산상 이익을 취득하는 것을 내용으로 하는 범죄로서, 이를 처벌하는 것은 민사재판제도의 위축을 가져올 수밖에 없으므로 피고인이 범행을 인정한 경우 외에는 소송상 주장이 사실과 다름이 객관적으로 명백하거나 그 주장이 명백히 허위임을 인식하였거나 증거를 조작하려 한 흔적이 있는 등의 경우가 아니라면 이를 쉽사리 유죄로 인정하여서는 안 된다고 보았습니다. 나아가 사기죄가 성립하려면 단순히 채권이 존재하지 않는다는 것만으로는 부족하고 그 사실을 잘 알면서도 허위의 주장과 증명으로 기망한다는 인식이 있어야 하며, 사실을 잘못 인식하였거나 법률적 평가를 잘못한 것만으로는 사기죄가 성립하지 않는다고 판시했습니다. 중고차를 판 뒤 나타난 하자를 두고 사기로 고소된 사안을 살펴볼 때에도, 매도 당시 하자를 알면서 속였는지, 아니면 거래 후 발생·발견되었거나 인식하지 못한 하자인지를 가려 편취의 고의 유무를 다퉈볼 수 있습니다.',
        takeaway: '하자 인식 여부 + 거래 후 하자 발생·발견 + 편취 고의 다툼 결합 시 하자 사기 고소 방어 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '하자가 있으면 무조건 사기가 되나요?',
        answer:
          '<strong>하자만으로 곧바로 기망·편취가 되는 것은 아닌 영역입니다.</strong> 하자를 알면서 숨겼는지와 발생 시점을 정리하세요.',
      },
      {
        question: '매도 후에 생긴 고장인데 어떻게 밝히나요?',
        answer:
          '<strong>하자 발생·발견 시점과 주행 정황이 단서인 영역입니다.</strong> 인수 후 주행거리·정비 내역을 확보하세요.',
      },
      {
        question: '성능점검기록부를 줬는데도 사기가 되나요?',
        answer:
          '<strong>고지·확인 기회는 고의를 배척하는 정황이 되는 영역입니다.</strong> 기록부·시운전·고지 대화를 정리하세요.',
      },
      {
        question: '매수인이 말을 바꾸는데 다툴 수 있나요?',
        answer:
          '<strong>주장의 일관성과 정황 부합을 따지는 영역입니다.</strong> 매수인 주장의 변동과 하자 원인 자료를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>고지 범위·가격 산정·하자 시점 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '사기 혐의 편취의사 종합 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '물품대금 미지급 무고 방어', href: '/guide/fraud/fraud-goods-payment-default-falsely-accused-defense' },
      { label: '거래 분쟁 사기 고소 둔갑 방어', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '위탁판매 정산 지연 무고 방어', href: '/guide/fraud/fraud-consignment-sale-settlement-delay-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-waxing-shop-service-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-waxing-shop-service-pretext-touch-report-track',
    keyword: '왁싱샵 시술 빙자 추행 신고',
    questionKeyword: '왁싱샵·제모샵에서 브라질리언·바디 왁싱 시술을 받는데, 관리사가 시술에 필요한 범위를 넘어 손이나 도구로 민감한 부위를 필요 이상으로 만지거나 문지르고, 시술과 무관한 신체 부위까지 접촉해 너무 불쾌하고 수치스러웠어요. 왁싱은 원래 민감 부위를 다루는 시술이라 어느 정도 접촉은 예상했지만, 손이 향한 부위와 방식이 시술 필요 범위를 벗어나 단순한 관리가 아니라 추행이라는 생각이 들었어요. 시술 중이라 누워 있는 상태여서 그 순간엔 바로 항의하지 못했고, 관리사는 ‘시술에 필요한 접촉이었다’고 할 것 같아요. 이런 왁싱샵 시술 빙자 신체접촉 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '왁싱샵 시술 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '왁싱샵 시술 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '왁싱샵에서 시술을 빙자한 신체 접촉 추행을 당해 수치스러웠다면, 강제추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「왁싱샵·제모샵에서 브라질리언·바디 왁싱 같은 시술을 받던 중, 관리사가 시술에 필요한 범위를 넘어 손이나 도구로 민감한 부위를 필요 이상으로 만지거나 문지르고, 시술과 무관한 신체 부위까지 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 왁싱은 본래 민감한 부위를 다루는 시술이라 어느 정도 접촉이 예정되어 있어 그 순간에는 ‘시술상 필요한 접촉인가’ 하고 헷갈리기도 하고, 시술대에 누워 있는 상태라 곧바로 강하게 항의하거나 벗어나기 어려워 참고 넘겼지만, 손이 향하는 부위와 방식이 시술에 필요한 범위를 명백히 벗어나 단순한 관리가 아니라 추행이라는 생각이 들지만, 관리사가 ‘시술에 필요한 접촉이었다’고 해명할 것 같아 신고해도 정상 시술과 구별될지 막막하실 거예요. 편히 관리를 받으려고 믿고 찾은 곳에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 시술을 빙자해 의사에 반해 신체를 만지거나 문지른 행위라면, 시술에 필요했다는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 보호·교육 등을 목적으로 하는 시설의 종사자가 신뢰를 깨고 성폭력범죄를 저지르는 경우 불법성과 비난 가능성이 더 크다는 점을 밝히면서, 관련 규정의 취지에 따라 그 적용 범위를 실질에 맞게 해석한 사례 흐름이 있는 영역으로, 관리·서비스 관계에서 신뢰를 이용한 접촉이 시술 필요 범위를 벗어난 추행인지를 가려 다툴 여지가 있습니다. 시술 필요 범위 초과 + 신체 접촉·문지름 + 관리 빙자 해명 결합은 ‘왁싱샵 시술 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·시술 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 왁싱샵 시술 빙자 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·시술 정리</strong> — 왁싱샵·시술 종류·관리사·예약 시각·시술 형태 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 민감 부위·시술 무관 부위 접촉·문지름·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 시술 필요 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시술에 필요한 접촉이었다는 해명과 달리, 시술 필요 범위를 벗어나 의사에 반해 신체를 만지거나 문질렀는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 왁싱샵 예약·결제 내역, 직후 메시지·상담과 다른 이용자 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·시술 자료 보존 (즉시)</strong> — 왁싱샵·시술 종류·관리사·시각과 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — 예약·진술 확보 (즉시)</strong> — 예약·결제·방문 내역과 직후 메시지·상담, 다른 이용자·목격 정황을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">왁싱샵 시술 빙자 신체접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>왁싱샵·시술 종류·관리사·시각 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>예약·결제·방문 입증 자료 (이용 정황)</strong></li>\n<li><strong>매장 CCTV 보존 요청 자료 (있는 경우)</strong></li>\n<li><strong>다른 이용자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예약·결제·방문 내역으로 시술 시간과 관리사를 특정하고, 손이 향한 부위와 방식이 왁싱 시술에 필요한 범위를 벗어났다는 점을 구체적으로 기록하면 시술 빙자 추행을 다투는 데 도움이 됩니다. 그 순간 바로 항의하지 못했더라도 직후에 남긴 메시지나 지인·다른 이용자에게 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술 필요 범위를 벗어난 신체 접촉·문지름인지.</li>\n<li><strong>시술 필요 해명</strong> — ‘시술에 필요한 접촉’ 해명에 가려지지 않는지.</li>\n<li><strong>기습추행</strong> — 의사에 반하는 유형력의 행사가 있었는지.</li>\n<li><strong>관리사 특정</strong> — 예약·결제 기록으로 관리사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보호·서비스 관계의 신뢰를 이용한 추행',
        summary:
          '대법원 2023도2358(대법원, 2023.04.13 선고) 영역에서 법원은 성폭력처벌법 제6조 제7항이 장애인의 보호·교육 등을 목적으로 하는 시설의 장 또는 종사자가 보호·감독의 대상에 대하여 성폭력범죄를 범한 경우 그 형의 2분의 1까지 가중하도록 한 것은, 보호·교육 등을 목적으로 하는 시설의 종사자가 대상자에 대한 신뢰를 깨고 성폭력범죄를 저지르는 경우 불법성과 비난 가능성이 더 크다는 데 취지가 있다고 보았습니다. 그러면서 위 조항의 ‘시설’은 거주·교육시설에 한정되는 것이 아니라 법령·계약 등에 따라 보호의무를 전제로 한 보호·교육 등이 포함된 시설을 의미한다고 넓게 해석하여 판시했습니다. 왁싱·관리 시술 관계에서 신뢰를 이용한 신체 접촉이 문제 된 사안을 살펴볼 때에도, 관리·서비스 관계에서 시술에 필요한 범위를 벗어나 의사에 반하는 추행이 있었는지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '시술 필요 범위 초과 + 신체 접촉·문지름 + 관리 빙자 해명 결합 시 왁싱샵 시술 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시술에 필요한 접촉이었다는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>시술 필요 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 받은 시술과 접촉 부위·방식을 대비하세요.',
      },
      {
        question: '누워서 시술받느라 그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>시술 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 메시지·상담 정황을 정리하세요.',
      },
      {
        question: '왁싱은 원래 민감 부위를 다루는데 어떻게 구별하나요?',
        answer:
          '<strong>시술 필요성·설명·범위로 정상 시술과 구별하는 영역입니다.</strong> 시술 무관 부위 접촉과 문지름 방식을 정리하세요.',
      },
      {
        question: '매장에 CCTV가 없는데 다툴 수 있나요?',
        answer:
          '<strong>예약·결제·진술로도 다툴 수 있는 영역입니다.</strong> 방문 기록과 직후 메시지·상담 정황을 확보하세요.',
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
      { label: '마사지숍 서비스 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-service-pretext-touch-report-track' },
      { label: '피부관리실 관리 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-skincare-shop-care-pretext-touch-report-track' },
      { label: '네일샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-nail-salon-service-pretext-touch-report-track' },
      { label: '미용실 두피관리 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hair-salon-scalp-care-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-intercity-express-bus-adjacent-seat-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-intercity-express-bus-adjacent-seat-touch-report-track',
    keyword: '고속버스 옆좌석 잠든 승객 추행 신고',
    questionKeyword: '고속버스·시외버스로 장거리 이동 중 어두운 차 안에서 잠이 들거나 피곤해 눈을 감고 있었는데, 옆좌석에 앉은 승객이 담요·팔걸이 틈을 이용해 제 허벅지·어깨·손 같은 신체를 만지거나 몸을 밀착해 소름이 끼치고 수치스러웠어요. 좁은 옆좌석이라 팔이 스칠 수는 있지만 접촉 부위와 방식이 우연으로 보기 어려웠고, 잠결이라 반항하기 어려운 상태를 틈타 계속된 정황이었어요. 무섭고 잠결이라 그 순간엔 바로 항의하지 못했고, 상대는 ‘좁아서 스친 것’이라거나 ‘자다가 팔이 닿은 것’이라고 할 것 같아요. 이런 고속버스 옆좌석에서의 신체접촉 추행을 신고하려면 어떤 기준으로 강제추행·준강제추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '고속버스 옆좌석 항거곤란 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '고속버스 옆좌석 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '고속버스 옆좌석에서 잠든 사이 추행을 당해 불안하다면, 강제추행·준강제추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「고속버스·시외버스로 장거리를 이동하던 중, 불을 낮춘 어두운 차 안에서 잠이 들거나 피곤해 눈을 감고 있는 사이, 옆좌석에 앉은 승객이 담요나 팔걸이 틈을 이용해 허벅지·어깨·손 같은 신체를 만지거나 몸을 바짝 밀착해 소름이 끼치고 수치스러웠던 분의 상황입니다. 좁은 옆좌석이라 팔이 스칠 수는 있어 그 순간에는 ‘좁아서 우연히 닿은 건가’ 하고 헷갈리기도 하지만, 접촉한 부위와 방식이 우연으로 보기 어렵고 잠결이라 곧바로 반항하거나 자리를 피하기 어려운 상태를 틈타 접촉이 계속된 정황이라면 단순한 스침으로 넘기기 어려운데, 무섭고 잠결이라 그 순간 강하게 항의하지 못하고 참고 내린 경우가 많아 막막하실 거예요. 게다가 상대가 ‘좁아서 스친 것’이라거나 ‘자다가 팔이 닿은 것’이라고 해명할 것 같아 신고해도 우연한 접촉과 구별될지, 어두운 차 안이라 정황이 남았을지 불안해 더 답답하셨을 거예요. 편히 이동하려 탄 버스에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 잠들었거나 항거가 곤란한 상태를 이용해 추행한 경우는 준강제추행으로 처벌되는 영역입니다. 옆좌석 승객이 잠들어 반항이 어려운 상태를 틈타 의사에 반해 신체를 만지거나 밀착한 행위라면, 스쳤다는 해명이 있더라도 추행으로 평가될 여지가 있는 영역입니다. 판례는 신체적인 또는 정신적인 장애로 항거불능 또는 항거곤란 상태에 있음이란 그 상태 자체로 반항이 불가능·곤란한 경우뿐 아니라 주된 원인이 되어 심리적·물리적으로 반항이 불가능하거나 곤란한 상태를 포함하고, ‘이용하여’란 그러한 상태를 인식하고 성적 행위의 계기로 삼는 것을 의미한다고 본 사례 흐름이 있는 영역으로, 잠들거나 반항이 어려운 상태를 이용한 추행인지를 가려 다툴 여지가 있습니다. 항거 곤란 상태 + 신체 접촉·밀착 + 우연·수면 해명 결합은 ‘고속·시외버스 옆좌석 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·좌석 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 고속버스 옆좌석 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·좌석 정리</strong> — 버스 노선·탑승 시각·좌석 번호·옆좌석 상대·차내 조도 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허벅지·어깨·손 접촉·밀착·잠결 이용·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 반항이 어려운 상태를 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁아서 스쳤다는 해명과 달리, 잠들거나 반항이 어려운 상태를 틈타 의사에 반해 신체를 만지거나 밀착했는지가 판단의 분기점입니다. 좌석·노선·탑승 시각과 접촉 부위·방식, 버스 내부·터미널 CCTV, 승무원·주변 승객 진술과 직후 메시지·112 신고를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·좌석 자료 보존 (즉시)</strong> — 버스 노선·탑승 시각·좌석 번호·상대와 접촉 부위·방식을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 버스 내부·터미널 CCTV, 승차권·예매 내역, 승무원·주변 승객 진술을 신속히 확보.</li>\n<li><strong>3단계 — 즉시 신고·안전 조치 (병행)</strong> — 하차 전 112 신고·승무원 협조와 좌석 이동 등 안전 조치를 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">고속버스 옆좌석 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>버스 노선·탑승 시각·좌석 번호 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·잠결 이용·반복 기록 (행위 태양)</strong></li>\n<li><strong>버스 내부·터미널 CCTV 보존 요청 자료</strong></li>\n<li><strong>승차권·예매·결제 입증 자료</strong></li>\n<li><strong>승무원·주변 승객 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·112 신고·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 승차권·좌석 번호와 버스 내부·터미널 CCTV로 시각과 상대를 특정하고, 잠결이라 반항하기 어려운 상태에서 접촉이 계속된 부위·방식을 구체적으로 기록하면 우연한 스침이 아니라 항거가 어려운 상태를 이용한 추행이었다는 점을 다투는 데 도움이 됩니다. 하차 전 승무원에게 알리거나 112에 신고한 정황, 직후 남긴 메시지를 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항거 곤란 상태</strong> — 잠들거나 반항이 어려운 상태였는지.</li>\n<li><strong>상태 이용</strong> — 그 상태를 인식하고 이용해 접촉했는지.</li>\n<li><strong>우연 접촉 해명</strong> — ‘좁아서 스친 것’ 해명에 가려지지 않는지.</li>\n<li><strong>상대 특정</strong> — CCTV·좌석 기록으로 상대를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 항거곤란 상태의 이용과 추행의 성립',
        summary:
          '대법원 2020도13672(대법원, 2022.11.10 선고) 영역에서 법원은 성폭력처벌법 제6조 제4항의 ‘신체적인 또는 정신적인 장애로 항거불능 또는 항거곤란 상태에 있음’이란 장애 그 자체로 항거불능·항거곤란 상태에 있는 경우뿐 아니라 그것이 주된 원인이 되어 심리적 또는 물리적으로 반항이 불가능하거나 곤란한 상태에 이른 경우를 포함하고, 여기서 ‘이용하여’란 그러한 상태를 인식하고 이를 성적 행위의 계기로 삼는 것을 의미한다고 판시했습니다. 이는 상대가 곧바로 저항하기 어려운 상태를 인식하고 그 상태를 틈타 성적 행위에 나아간 경우 이를 이용한 것으로 평가할 수 있다는 취지입니다. 고속·시외버스 옆좌석에서 잠들거나 반항이 어려운 상태를 틈타 신체를 접촉한 사안을 살펴볼 때에도, 상대가 잠결 등으로 곧바로 저항하기 어려운 상태였는지와 그 상태를 이용한 의사에 반하는 추행인지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '항거 곤란 상태 + 신체 접촉·밀착 + 우연·수면 해명 결합 시 고속·시외버스 옆좌석 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 스친 것이라는데 추행이 되나요?',
        answer:
          '<strong>우연한 스침인지 반항이 어려운 상태를 이용한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 잠결 정황을 정리하세요.',
      },
      {
        question: '잠들어 있어 상황을 정확히 못 봤는데 신고되나요?',
        answer:
          '<strong>잠결 등 항거가 어려운 상태를 틈탄 추행이 다뤄지는 영역입니다.</strong> 깬 직후 정황과 좌석·CCTV를 확보하세요.',
      },
      {
        question: '버스 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 버스회사·경찰에 즉시 보존을 요청하세요.',
      },
      {
        question: '내려서 신고했는데 늦지 않았나요?',
        answer:
          '<strong>하차 후에도 신고·조사가 가능한 영역입니다.</strong> 승차권·좌석·직후 메시지 등 정황을 정리해 신고하세요.',
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
      { label: 'KTX 기차 옆좌석 추행', href: '/guide/sex-crime/sex-crime-ktx-adjacent-seat-track' },
      { label: '시내버스 혼잡 추행', href: '/guide/sex-crime/sex-crime-city-bus-crowd-track' },
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '택시 승객 잠든 사이 추행', href: '/guide/sex-crime/sex-crime-taxi-passenger-asleep-track' },
    ],
  },

  // ─── 9. sex-crime-dance-academy-choreography-guidance-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-dance-academy-choreography-guidance-touch-report-track',
    keyword: '댄스학원 안무 지도 빙자 추행 신고',
    questionKeyword: '댄스·방송댄스·무용학원에서 강사가 안무·자세·동작을 봐준다며 필요 이상으로 허리·골반·허벅지·가슴에 손을 대거나 뒤에서 몸을 밀착해 동작을 잡는 척 신체를 만져 너무 불쾌하고 수치스러웠어요. 안무 지도라 어느 정도 접촉은 예상했지만 손이 향한 부위와 방식이 정상 지도 범위를 벗어나 단순한 지도가 아니라 추행이라는 생각이 들었어요. 그 순간엔 ‘원래 이렇게 잡아주나’ 헷갈려 바로 항의하지 못했어요. 강사는 ‘안무 동작을 교정하려던 것’이라고 할 것 같아요. 이런 댄스학원 안무 지도 중 신체접촉 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '댄스학원 안무 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '댄스학원 지도 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '댄스학원에서 강사가 지도를 빙자해 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「댄스·방송댄스·무용학원에서 강사에게 안무 지도를 받던 중, 강사가 안무·자세·동작을 봐준다는 이유로, 정상적인 지도로는 설명되지 않게 허리·골반·허벅지·가슴에 손을 대거나, 뒤에서 몸을 바짝 밀착해 붙어 동작을 잡는 척 단순한 지도로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 안무 지도는 자세를 바로잡거나 동작을 잡아주는 접촉이 어느 정도 예정되어 있어 그 순간에는 ‘원래 이렇게 잡아주는 건가’ 하고 헷갈리기도 하고, 배우는 입장이라 곧바로 강하게 항의하거나 자리를 벗어나기 어려워 참고 넘겼지만, 손이 향하는 부위와 방식이 지도에 필요한 범위를 명백히 벗어나 단순한 지도가 아니라 추행이라는 생각이 들지만, 강사가 ‘안무 동작을 교정하려던 것’이라고 해명할 것 같아 신고해도 정상 지도와 구별될지 막막하실 거예요. 배우려고 믿고 다닌 학원에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 지도를 빙자해 의사에 반해 신체를 만지거나 밀착한 행위라면, 동작을 교정하려 했다는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행으로 기소된 사안에서 심판 대상을 명확히 한정하고 피고인의 방어권을 보장하기 위한 절차의 중요성을 밝히며, 어떤 행위가 문제 되는지 구체적으로 특정하고 관련 증거에 따라 판단하여야 한다는 취지를 밝힌 사례 흐름이 있는 영역으로, 지도 범위를 벗어난 각 접촉이 추행인지를 특정해 가려 다툴 여지가 있습니다. 지도 빙자 + 신체 접촉·밀착 + 안무·동작 해명 결합은 ‘댄스학원 안무 지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·수업 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 댄스학원 안무 지도 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·수업 정리</strong> — 학원·수업 시간·강사·수업 형태·주변 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허리·골반·허벅지·가슴 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 안무 동작을 교정하려던 것이라는 해명과 달리, 지도에 필요한 범위를 벗어나 의사에 반해 신체를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 학원 CCTV, 다른 수강생·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·수업 자료 보존 (즉시)</strong> — 학원·수업 시간·강사·수업 형태와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 학원·연습실 CCTV, 수강 등록·결제·출결 내역, 다른 수강생·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">댄스학원 안무 지도 신체접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>학원·수업 시간·강사·수업 형태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>학원·연습실 CCTV 보존 요청 자료</strong></li>\n<li><strong>수강 등록·결제·출결 입증 자료</strong></li>\n<li><strong>다른 수강생·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원·연습실 CCTV와 수강 등록·출결 내역으로 수업 시간과 강사를 특정하고, 손이 향한 부위와 방식이 안무 지도에 필요한 범위를 벗어났다는 점을 구체적으로 기록하면 지도 빙자 추행을 다투는 데 도움이 됩니다. 그 순간 바로 항의하지 못했더라도 직후에 남긴 메시지·통화나 다른 수강생에게 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 범위를 벗어난 신체 접촉·밀착인지.</li>\n<li><strong>안무 지도 해명</strong> — ‘안무 동작을 교정하려던 것’ 해명에 가려지지 않는지.</li>\n<li><strong>기습추행</strong> — 의사에 반하는 유형력의 행사가 있었는지.</li>\n<li><strong>강사 특정</strong> — CCTV·수강 기록으로 강사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 심판 대상 특정과 방어권 보장',
        summary:
          '대법원 2019도7217(대법원, 2021.06.30 선고) 영역에서 법원은 강제추행으로 기소된 피고인에 대하여 항소심에서 공연음란을 예비적으로 추가하는 공소장변경이 이루어진 사안에서, 검사의 서면에 의한 공소장변경허가신청이 있는데도 그 부본을 피고인이나 변호인에게 송달·교부하지 않은 채 공소장변경을 허가하고 유죄로 판단한 것은 심판 대상을 명확히 한정하고 피고인의 방어권 행사를 가능하게 하기 위한 절차를 위반한 것으로 판결에 영향을 미친 위법이 될 수 있다고 판시했습니다. 이는 어떤 행위가 문제 되는지 심판 대상이 구체적으로 특정되어야 하고 그에 따른 증거로 판단해야 한다는 취지를 담고 있습니다. 댄스·안무 지도 과정에서 이루어진 접촉이 강제추행에 해당하는지 다투는 사안을 살펴볼 때에도, 어떤 접촉이 문제 되는지 부위·시점·방식으로 구체적으로 특정하고 관련 CCTV·진술 등 증거를 정리하는 것이 판단의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 신체 접촉·밀착 + 안무·동작 해명 결합 시 댄스학원 안무 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '안무 동작을 교정한 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>지도 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '안무 지도는 원래 몸을 잡아주는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 지도와 민감 부위 접촉의 구별이 핵심인 영역입니다.</strong> 손이 향한 부위와 방식을 구체적으로 정리하세요.',
      },
      {
        question: '학원 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 학원·연습실에 즉시 보존을 요청하세요.',
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
      { label: '필라테스 자세 교정 추행 신고', href: '/guide/sex-crime/sex-crime-pilates-instructor-posture-correction-touch-report-track' },
      { label: '요가 강습 자세교정 추행', href: '/guide/sex-crime/sex-crime-yoga-class-correction-touch-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-guidance-touch-report-track' },
      { label: '수영 강습 지도 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-lesson-guidance-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-concert-standing-crowd-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-concert-standing-crowd-contact-misunderstanding-falsely-accused-defense',
    keyword: '콘서트 스탠딩 인파 접촉 오해 추행 무고 방어',
    questionKeyword: '콘서트·페스티벌 스탠딩석처럼 사람이 빽빽하게 몰려 앞뒤로 밀리는 공간에서 공연을 보다가 앞·뒤 사람과 몸이 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 관객이 밀리는 물결에 떠밀려 우연히 닿은 것뿐인데, 신체 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 어둡고 붐비는 스탠딩이라 누가 무엇을 했는지 특정도 어렵고, 상대 진술은 시점마다 달라지고 지목 경위도 불분명해요. 이렇게 콘서트 스탠딩 인파 속 우연 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점과 진술·범인지목의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '콘서트 스탠딩 인파 접촉 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '콘서트 인파 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '콘서트 스탠딩 인파 속 우연한 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 진술·지목 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「콘서트·페스티벌의 스탠딩석처럼 관객이 빽빽하게 몰려 음악에 맞춰 앞뒤·좌우로 밀리고 서로 몸이 닿을 수밖에 없는 공간에서, 공연을 보거나 인파에 떠밀려 이동하는 과정에서 앞·뒤 사람과 몸이 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 관객이 밀리는 물결에 떠밀려 우연히 닿은 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 더구나 스탠딩석은 어둡고 붐벼 누가 무엇을 했는지 정확히 특정하기 어렵고 순식간에 벌어지는데도, 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉽고, 상대의 진술마저 시점·내용에 따라 달라지거나 지목 경위가 불분명하다면 더 답답하셨을 거예요. 혐의를 받고 있다면, 그날의 동선과 인파·밀림 상황, 접촉이 일어난 부위·방식과 혼잡도, CCTV·일행 진술과 상대의 지목 경위를 차분히 정리해 추행의 고의가 없었고 공연 중 우연한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대 진술·범인지목의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 형사절차에서 피고인에게 불리한 사실의 증명책임은 검사에게 있고, 요건 사실이 없다는 점을 검사가 증명하여야 하며 그 판단은 구체적 동기·경위·결과 등을 종합해 개별적으로 하여야 한다는 취지를 밝힌 사례 흐름이 있는 영역입니다. 따라서 인파 속 접촉이 추행의 고의로 이루어졌는지, 상대 진술과 범인지목의 신빙성이 인정되는지를 종합해 가려 다툴 여지가 있는 영역입니다. 혼잡·밀림 상황 + 접촉 부위·방식 + 고의 부인·진술·지목 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉 부위·경위 ③ 고의 부재 검토 ④ 진술·지목 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 인파 접촉 오해 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 콘서트·스탠딩 구역·이동 동선·혼잡도·조도 정리.</li>\n<li><strong>② 접촉 부위·경위</strong> — 인파 밀림·스침 등 접촉 부위·방식·순간성 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 혼잡·밀림·동선 등 간접사실 검토.</li>\n<li><strong>④ 진술·지목 신빙성</strong> — 상대 진술의 일관성과 범인지목 경위의 신빙성 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — CCTV·일행 진술이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행할 고의로 접촉했는지(추행), 아니면 인파에 떠밀려 우연히 스친 것인지(고의 부재)가 판단의 분기점입니다. 콘서트 스탠딩의 혼잡·밀림 상황과 동선, 접촉 부위·방식과 순간성, CCTV·일행 진술, 상대 진술과 범인지목 경위의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 콘서트·스탠딩 구역·이동 동선·시각과 접촉 경위를 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·영상 정리 (즉시)</strong> — 공연 중 접촉한 부위·방식과 순간성, 공연장·주변 CCTV·입장 기록을 정리.</li>\n<li><strong>3단계 — 진술·지목 신빙성 검토 (병행)</strong> — 상대 진술의 일관성·변동과 범인지목 경위, 정황 부합 여부를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 인파 접촉 오해 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>콘서트·스탠딩 구역·동선·혼잡도 자료 (경위)</strong></li>\n<li><strong>입장·예매·결제·이용 내역 (이용 입증)</strong></li>\n<li><strong>공연장·주변 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>접촉 부위·방식·순간성 정리 (접촉 경위)</strong></li>\n<li><strong>당일 함께한 일행·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술·범인지목 경위 정리 (신빙성 검토)</strong></li>\n<li><strong>고소장·조사 일정·진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 콘서트 스탠딩의 혼잡도와 밀림·동선, 접촉이 공연·이동 과정에서 순간적으로 일어난 것이라는 점을 정리하면 접촉이 추행의 고의에 의한 것인지, 인파 속 우연한 스침인지를 다투는 데 도움이 됩니다. 공연장·주변 CCTV와 입장·예매 기록, 상대 진술이 시점·내용에 따라 달라지거나 어두운 스탠딩에서 범인지목 경위가 불분명한 부분을 함께 정리해 고의 부재와 진술·지목 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>혼잡·밀림 경위</strong> — 인파에 떠밀린 우연한 접촉이었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>범인지목</strong> — 어두운 스탠딩에서의 지목 경위가 신빙성 요건을 갖췄는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형사절차의 증명책임과 개별적 판단',
        summary:
          '대법원 2020도16111(대법원, 2021.08.19 선고) 영역에서 법원은 성충동약물치료법 제35조 제2항의 ‘정당한 사유’가 구성요건해당성을 조각하는 사유로서, 정당한 사유가 없다는 사실은 검사가 증명하여야 하고, 준수사항 위반에 정당한 사유가 있는지는 위반하게 된 구체적인 동기와 경위, 위반으로 발생한 결과 등을 종합적으로 고려하여 개별적으로 판단하여야 한다고 판시했습니다. 이는 형사절차에서 피고인에게 불리한 요건 사실의 증명책임이 검사에게 있고, 그 판단은 정황을 종합해 신중하게 개별적으로 이루어져야 함을 보여줍니다. 콘서트 스탠딩 인파 속 우연한 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 추행의 고의가 있었는지에 대한 증명이 합리적 의심을 배제할 정도에 이르렀는지와 상대 진술·범인지목의 신빙성을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '혼잡·밀림 상황 + 접촉 부위·방식 + 고의 부인·진술·지목 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '인파에 밀려 스친 접촉인데도 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 혼잡·밀림 경위와 접촉 부위·방식·순간성을 정리하세요.',
      },
      {
        question: '어둡고 붐벼 우연히 닿았다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>혼잡·밀림·동선은 고의를 배척하는 간접사실이 되는 영역입니다.</strong> CCTV·입장 기록·일행 진술을 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '어두운 스탠딩에서 지목당했는데 다툴 수 있나요?',
        answer:
          '<strong>범인지목 경위의 신빙성을 다투는 영역입니다.</strong> 지목 경위와 정황을 구체적으로 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>혼잡·밀림 경위·접촉에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '축제 인파 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense' },
      { label: '클럽 인파 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-club-crowd-accidental-contact-misunderstanding-falsely-accused-defense' },
      { label: '만원버스 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense' },
      { label: '워터파크 물놀이 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-water-park-water-play-contact-misunderstanding-falsely-accused-defense' },
    ],
  },
];
