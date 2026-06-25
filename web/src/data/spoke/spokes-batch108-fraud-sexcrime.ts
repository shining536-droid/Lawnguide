import { SpokePage } from '../spoke-pages';

// batch108 fraud(6) + sex-crime(4) — 10개 (2026-06-25)
//
// 고유 존재 이유:
// 1. fraud-secondhand-luxury-watch-counterfeit-track — 일반 중고 거래 분쟁과 분기. '중고 명품 시계를 정품이라 속여 가품을 판매' 가품 기망 편취 판단형 트랙(victim).
// 2. fraud-monthly-rent-deposit-double-lease-track — 일반 임대차 분쟁과 분기. '하나의 집을 여러 임차인에게 이중으로 세놓고 보증금을 편취' 이중 임대 보증금 편취 절차형 트랙(victim).
// 3. fraud-crypto-mining-rig-rental-profit-guarantee-track — 일반 코인 분쟁과 분기. '채굴기를 임대하면 매달 수익이 보장된다며 투자금만 받고 잠적' 채굴기 임대 수익 보장 기망 편취 판단형 트랙(victim).
// 4. fraud-online-lecture-lifetime-access-closure-track — 일반 환불 분쟁과 분기. '평생 수강이라며 강의를 결제받고 폐업·환불 거부' 평생수강 폐업 환불 기망 편취 절차형 트랙(victim).
// 5. fraud-livestock-consignment-breeding-return-track — 일반 투자 분쟁과 분기. '가축을 위탁 사육하면 수익을 보장한다며 투자금만 편취' 위탁 사육 수익 보장 기망 편취 판단형 트랙(victim).
// 6. fraud-investment-return-promise-business-failure-falsely-accused-defense — 일반 사기 무고류와 분기. '투자수익을 약속했다 사업이 실패해 사기로 고소당함' 편취 고의·사업실패 방어 판단형 트랙(accused).
// 7. sex-crime-nail-salon-service-pretext-touch-report-track — 일반 추행류와 분기. '네일샵에서 시술을 빙자해 손·팔에 부적절 접촉' 시술 가장 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-company-dinner-forced-seating-touch-report-track — 일반 추행류와 분기. '회식에서 옆자리를 강요받고 신체접촉을 당함' 회식 자리 강요 추행 신고 절차형 트랙(victim).
// 9. sex-crime-swimming-lesson-posture-correction-touch-report-track — 일반 추행류와 분기. '수영 강습에서 자세교정을 빙자해 추행' 자세교정 가장 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-elevator-momentary-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '엘리베이터 순간 접촉이 추행으로 고소' 우연 접촉·고의 부재 방어 판단형 트랙(accused).

export const spokesBatch108FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-secondhand-luxury-watch-counterfeit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-watch-counterfeit-track',
    keyword: '중고 명품 시계 가품 판매 기망 사기',
    questionKeyword: '중고 거래로 ‘정품 보증서까지 있는 진품 명품 시계’라는 말을 믿고 시세에 맞춰 큰돈을 보내고 받았어요. 그런데 정품 감정을 받아보니 가품으로 판명됐고, 보증서·박스도 위조이거나 다른 제품의 것이었어요. 판매자에게 따지니 ‘본인도 정품으로 알고 받았다, 환불은 못 해준다’며 발뺌하다 연락을 피하는데, 알고 보니 처음부터 가품인 줄 알면서 정품인 척 판 정황이에요. 이런 중고 명품 시계 가품 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 명품 시계 가품 판매 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 시계 가품 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라며 받은 중고 명품 시계가 감정 결과 가품으로 드러나고 환불도 거부당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고거래 플랫폼·카페에서 ‘정품 보증서와 박스까지 다 있는 진품 명품 시계다, 직접 구매해 몇 번 안 찼다’는 판매자의 설명을 믿고, 새 제품보다 싸게 잘 샀다는 생각에 시세에 맞춰 적지 않은 대금을 송금하고 시계를 받은 분의 상황입니다. 그런데 막상 받아 정품 감정 서비스나 공식 매장에 가져가 보니 가품으로 판명되고, 함께 온 보증서·박스마저 위조이거나 전혀 다른 제품의 것이었으며, 시리얼 번호도 조회되지 않아 큰돈을 주고 가짜를 받은 상황이라 막막하실 거예요. 판매자에게 이를 따지니 ‘나도 정품으로 알고 받은 거라 책임 없다, 환불은 못 해준다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 계정으로 여러 명에게 비슷한 가품을 팔아온 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품인 줄 알면서도 정품인 것처럼 속여 정품 시세에 판매했다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 다수의 피해자에게 각각 기망행위를 하여 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 원칙적으로 피해자별로 독립한 사기죄가 성립한다고 본 사례 흐름이 있는 영역으로, 같은 계정으로 여러 사람에게 가품을 판 정황이라면 피해자별 사기 성립과 죄수를 가려 다툴 여지가 있습니다. 정품 가장 + 가품 판매 + 환불 거부·발뺌 결합은 ‘가품 판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 시계 가품 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정품 보증 설명·거래 대화·결제 내역 정리.</li>\n<li><strong>② 가품·기망 입증</strong> — 가품 감정 결과·위조 보증서로 정품 가장을 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정품 시세로 지급한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 가품인 줄 알면서 정품인 것처럼 속여 정품 시세에 팔았는지가 판단의 분기점입니다. 정품을 강조한 거래 대화와 가품 감정 결과, 같은 판매자의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정품 보증 설명·거래 대화·결제·택배 내역 캡처 보존.</li>\n<li><strong>2단계 — 가품 입증 (즉시)</strong> — 정품 감정서·공식 매장 확인·시리얼 조회 결과를 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 환불·계약 해제를 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 시계 가품 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정품 보증·진품 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>거래 합의·계약·약정 내용 (계약 내용)</strong></li>\n<li><strong>송금·결제·택배 내역 (피해 금액)</strong></li>\n<li><strong>정품 감정서·공식 매장 확인·시리얼 조회 결과</strong></li>\n<li><strong>위조 보증서·박스 등 가품 정황 사진</strong></li>\n<li><strong>판매자 계정·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공식 감정서나 매장 확인 자료로 가품임을 명확히 하고, 판매자가 정품임을 강조한 대화와 대비하면 정품 가장 기망을 다투는 데 도움이 됩니다. 같은 계정으로 다른 사람에게도 비슷한 가품을 판 흔적을 함께 모으면 반복 판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품·정품 가장</strong> — 가품인 줄 알면서 정품으로 속였는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 정품 시세로 지급한 대금 전부가 피해액인지.</li>\n<li><strong>피해자별 죄수</strong> — 다수 피해 시 피해자별로 사기가 성립하는지.</li>\n<li><strong>판매자 특정</strong> — 계정·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고 거래·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자에 대한 사기죄의 죄수',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에 대하여 각각 기망행위를 하여 각 피해자로부터 재물을 편취한 경우에는, 범의가 단일하고 범행방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이므로 원칙적으로 피해자별로 독립한 사기죄가 성립한다고 보았습니다. 다만 피해자들의 피해법익이 동일하다고 볼 수 있는 사정이 있는 경우에는 이들에 대한 사기죄를 포괄하여 일죄로 볼 수 있다고 판시했습니다. 한 판매자가 같은 방식으로 여러 사람에게 가품을 판 사안을 살펴볼 때에도, 원칙적으로 피해자별로 사기 성립을 검토하면서 피해법익의 동일성 사정에 따른 죄수를 함께 가려 검토해볼 수 있습니다.',
        takeaway: '정품 가장 + 가품 판매 + 환불 거부·발뺌 결합 시 가품 판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자도 정품으로 알았다는데 사기인가요?',
        answer:
          '<strong>가품인 줄 알면서 정품으로 속였는지가 핵심인 영역입니다.</strong> 정품 강조 대화와 가품 감정 결과를 확보하세요.',
      },
      {
        question: '가품인 걸 어떻게 증명하나요?',
        answer:
          '<strong>공식 감정서·매장 확인·시리얼 조회가 핵심 단서인 영역입니다.</strong> 객관적 감정 자료를 먼저 확보하세요.',
      },
      {
        question: '보증서·박스도 받았는데 가품일 수 있나요?',
        answer:
          '<strong>보증서·박스가 위조이거나 다른 제품 것일 수 있는 영역입니다.</strong> 보증서 진위와 시리얼 일치 여부를 확인하세요.',
      },
      {
        question: '같은 사람이 여러 명에게 판 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 같은 계정의 다른 거래·후기를 모으세요.',
      },
      {
        question: '돈을 돌려받을 방법이 있나요?',
        answer:
          '<strong>지급정지·피해구제·민사 반환으로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속한 지급정지가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 명품 가방 가품 추적', href: '/guide/fraud/fraud-secondhand-luxury-bag-counterfeit-track' },
      { label: '중고 명품 가품 추적', href: '/guide/fraud/fraud-secondhand-luxury-counterfeit-track' },
      { label: '중고 명품 시계 진품 바꿔치기 추적', href: '/guide/fraud/fraud-secondhand-luxury-watch-fake-swap-track' },
      { label: '명품 시계 위탁 미정산 추적', href: '/guide/fraud/fraud-luxury-watch-consignment-nonpayment-track' },
    ],
  },

  // ─── 2. fraud-monthly-rent-deposit-double-lease-track ───
  {
    domain: 'fraud',
    slug: 'fraud-monthly-rent-deposit-double-lease-track',
    keyword: '월세 보증금 이중 임대 기망 사기',
    questionKeyword: '월세 집을 계약하면서 ‘바로 입주할 수 있는 빈집이다’라는 임대인·중개인의 말을 믿고 보증금과 월세, 중개비를 입금했어요. 그런데 막상 들어가려니 이미 다른 임차인이 살고 있거나, 같은 집을 여러 사람에게 동시에 세놓고 보증금만 받아 챙긴 정황이었어요. 임대인은 ‘착오였다, 곧 정리해주겠다’며 미루다 연락이 끊겼고, 알고 보니 처음부터 입주시킬 의사 없이 보증금만 노린 것 같아요. 이런 월세 보증금 이중 임대 기망을 사기로 신고하고 보증금을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '월세 보증금 이중 임대 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '월세 보증금 이중 임대 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '빈집이라는 말을 믿고 보증금을 냈는데 같은 집이 이미 다른 사람에게 세놓아진 이중 임대로 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「원룸·월세 집을 계약하면서 ‘비어 있어 바로 입주할 수 있는 집이다, 다른 계약은 없다’는 임대인·중개인의 말을 믿고, 좋은 조건에 빠르게 잡았다는 생각에 보증금과 첫 달 월세, 중개비를 서둘러 입금한 분의 상황입니다. 그런데 막상 입주 날 들어가려니 이미 다른 임차인이 살고 있거나, 알고 보니 같은 집을 여러 사람에게 동시에 세놓고 각자에게서 보증금만 받아 챙긴 이른바 이중·다중 임대 정황이라, 들어가지도 못한 채 큰돈만 묶여버려 막막하실 거예요. 임대인은 ‘단순한 착오다, 곧 다른 집으로 정리해주겠다, 보증금은 돌려주겠다’며 차일피일 미루다 결국 연락이 끊기고, 처음부터 입주시킬 의사 없이 보증금만 노린 건 아닌지 의심되면 더 답답하셨을 거예요. 살 곳을 구하려다 당한 일이라 더 절박하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 입주시킬 의사·권한·능력 없이 빈집인 것처럼 속이거나 이미 세놓은 사실을 숨기고 보증금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기소된 사기 공소사실의 재산상 피해자와 공소장 기재 피해자가 다른 것으로 판명된 경우 공소사실의 동일성을 해하지 않고 방어권에 실질적 불이익을 주지 않는 한 진정한 피해자를 가려내어 사기죄로 처벌해야 한다고 본 사례 흐름이 있는 영역으로, 부동산을 둘러싼 권리관계와 실제 피해자가 누구인지를 가려 다툴 여지가 있습니다. 빈집 가장·이중 임대 은폐 + 보증금 수령 + 입주 불능·잠적 결합은 ‘이중 임대 보증금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·입금 정리 ② 이중 임대·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 월세 보증금 이중 임대 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·이중 임대·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·입금 정리</strong> — 매물 안내·임대차 계약서·보증금 입금 내역 정리.</li>\n<li><strong>② 이중 임대·기망</strong> — 빈집인 척하거나 이미 세놓은 사실을 숨겼는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 보증금·월세·중개비 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 송금 계좌 지급정지·계약 해제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 계약 착오와 달리, 입주시킬 의사·권한 없이 빈집인 척하거나 이미 세놓은 사실을 숨기고 보증금을 받았는지가 판단의 분기점입니다. 빈집·단독 계약을 강조한 안내와 다른 임차인 존재, 등기부상 권리관계를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·입금 자료 보존 (즉시)</strong> — 매물 안내·계약서·보증금 입금·중개 영수증 내역 캡처 보존.</li>\n<li><strong>2단계 — 이중 임대 입증 (즉시)</strong> — 다른 임차인 존재·동시 계약·등기부등본·권리관계를 확보.</li>\n<li><strong>3단계 — 지급정지·해제 요구 (병행)</strong> — 송금 계좌 지급정지를 요청하고 계약 해제·보증금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">월세 보증금 이중 임대 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·이중 임대·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매물 안내·빈집·단독 계약 강조 캡처 (거래 조건)</strong></li>\n<li><strong>임대차 계약서·특약·중개대상물 확인서 (계약 내용)</strong></li>\n<li><strong>보증금·월세·중개비 입금·영수증 내역 (피해 금액)</strong></li>\n<li><strong>다른 임차인 존재·동시 계약 정황 자료</strong></li>\n<li><strong>등기부등본·임대인·소유자 권리관계 자료</strong></li>\n<li><strong>임대인·중개인·상호·계좌 정보</strong></li>\n<li><strong>입주 거부·반환 요청·거부 대화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부등본으로 소유자·권리관계를 확인하고, 같은 집에 다른 임차인이 있다는 사실과 동시 계약 정황을 함께 모으면 이중 임대 기망을 다투는 데 도움이 됩니다. 계약 당시 빈집·단독 계약이라고 한 안내 대화를 캡처해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이중 임대·기망</strong> — 빈집인 척하거나 이미 세놓은 사실을 숨겼는지.</li>\n<li><strong>입주 권한</strong> — 임대 권한·처분 권한이 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 보증금만 노렸는지.</li>\n<li><strong>편취액·진정 피해자</strong> — 교부 금액과 실제 피해자가 누구인지.</li>\n<li><strong>임대인 특정</strong> — 임대인·중개인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (부동산·중개 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 진정한 피해자 특정',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우, 공소사실의 동일성을 해하지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 공소장변경절차 없이 직권으로 진정한 피해자를 가려내어 유죄로 인정해야 한다고 보았습니다. 또 부동산을 둘러싼 권리관계와 처분행위가 누구의 재산을 침해한 것인지에 따라 사기죄의 성립과 피해자가 달라질 수 있다고 판시했습니다. 같은 집을 여러 사람에게 세놓아 보증금을 받은 사안을 살펴볼 때에도, 권리관계와 실제 손해를 입은 피해자가 누구인지를 가려 사기 성립을 검토해볼 수 있습니다.',
        takeaway: '빈집 가장·이중 임대 은폐 + 보증금 수령 + 입주 불능·잠적 결합 시 이중 임대 보증금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '단순 계약 착오 아닌가요?',
        answer:
          '<strong>입주 의사·권한 없이 빈집인 척하거나 이중 임대를 숨겼는지가 핵심인 영역입니다.</strong> 빈집·단독 계약 안내 대화를 확보하세요.',
      },
      {
        question: '이미 다른 사람이 살고 있어요.',
        answer:
          '<strong>다른 임차인 존재·동시 계약은 이중 임대 정황의 핵심 단서인 영역입니다.</strong> 거주자·계약 시점을 확인하세요.',
      },
      {
        question: '등기부를 꼭 확인해야 하나요?',
        answer:
          '<strong>등기부상 소유자·권리관계가 임대 권한 판단에 중요한 영역입니다.</strong> 등기부등본과 임대인 명의를 대조하세요.',
      },
      {
        question: '보증금을 곧 돌려준다고 해놓고 잠적했어요.',
        answer:
          '<strong>반환 약속 후 잠적은 편취 범의를 의심할 단서인 영역입니다.</strong> 반환 약속·거부 대화와 계좌를 보관하세요.',
      },
      {
        question: '보증금을 돌려받으려면 어떻게 하나요?',
        answer:
          '<strong>지급정지·계약 해제·민사 반환으로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 지급정지를 신속히 요청하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '월세 이중 계약 보증금 추적', href: '/guide/fraud/fraud-monthly-rent-double-contract-deposit-track' },
      { label: '원룸 이중 임대 보증금 추적', href: '/guide/fraud/fraud-studio-double-lease-deposit-track' },
      { label: '부동산 보증금 이중 계약', href: '/guide/fraud/fraud-real-estate-deposit-double-contract' },
      { label: '임대 매물 보증금 이중 게시 추적', href: '/guide/fraud/fraud-rental-property-deposit-double-listing-track' },
    ],
  },

  // ─── 3. fraud-crypto-mining-rig-rental-profit-guarantee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-mining-rig-rental-profit-guarantee-track',
    keyword: '가상자산 채굴기 임대 수익 보장 기망 사기',
    questionKeyword: '가상자산 채굴 업체가 ‘채굴기 한 대를 임대·구매하면 매달 일정 수익이 보장된다, 원금도 회수된다’는 말을 믿고 채굴기 임대료와 투자금을 입금했어요. 처음 몇 달은 소액이 들어와 믿었는데, 어느 순간부터 ‘채굴 난도가 올랐다, 전기료가 늘었다’며 지급이 끊기고, 채굴기가 실제로 돌아가는지조차 확인되지 않더니 업체와 연락이 끊겼어요. 알고 보니 실체 없는 채굴기를 미끼로 투자금만 받아 돌려막은 정황인데, 이런 채굴기 임대 수익 보장 기망을 사기로 신고하고 투자금을 돌려받을 수 있나요?',
    ctaKeyword: '채굴기 임대 수익 보장 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '채굴기 임대 수익 보장 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '채굴기를 임대하면 매달 수익이 보장된다는 말을 믿고 투자했는데 지급이 끊기고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가상자산 채굴 업체·플랫폼이 ‘채굴기 한 대를 임대하거나 구매해 맡겨두면 매달 일정한 채굴 수익이 꼬박꼬박 보장된다, 일정 기간이면 원금도 회수되고 그 뒤로는 순수익만 남는다, 우리가 시설·전기·관리까지 다 한다’는 솔깃한 말을 믿고, 가만히 둬도 돈이 들어온다는 기대에 채굴기 임대료와 투자금을 입금한 분의 상황입니다. 처음 몇 달은 약속대로 소액이 들어와 믿고 추가 투자까지 했는데, 어느 순간부터 ‘채굴 난도가 급등했다, 전기료·관리비가 늘어 정산이 어렵다, 곧 정상화된다’며 지급이 끊기고, 정작 내 명의로 돌아간다는 채굴기가 실제로 존재하고 가동되는지조차 확인되지 않더니, 결국 업체·담당자와 연락이 끊겨 막막하실 거예요. 알고 보니 실체 없는 채굴기를 미끼로 투자금만 받아 앞사람 수익을 뒷사람 돈으로 돌려막은 정황이라면 단순 사업 부진이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 수익을 지급할 의사·능력이나 채굴기의 실체 없이 수익이 보장되는 것처럼 속여 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 공소사실이나 범죄사실의 동일성을 사회적 사실관계를 기본으로 규범적 요소까지 고려하여 판단하고, 사기 범행의 실질과 그 죄책을 사안의 구체적 사정에 따라 가려야 한다고 본 사례 흐름이 있는 영역으로, 채굴기 임대를 빙자한 자금 수수의 실질을 따져 편취 여부를 가려 다툴 여지가 있습니다. 수익 보장 가장 + 채굴기 실체 불명 + 지급 중단·잠적 결합은 ‘채굴기 임대 수익 보장 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·투자 정리 ② 수익 보장·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가상자산 채굴기 임대 수익 보장 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·수익 보장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 정리</strong> — 수익 보장 홍보·채굴기 임대 계약·투자 입금 내역 정리.</li>\n<li><strong>② 수익 보장·기망</strong> — 채굴기 실체·지급 능력 없이 수익을 보장한 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 임대료·투자금 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 사업 부진과 달리, 채굴기 실체나 지급 능력 없이 수익이 보장되는 것처럼 속여 투자금만 받고 돌려막다 잠적했는지가 판단의 분기점입니다. 수익 보장 홍보와 채굴기 실체 불명·지급 중단 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 수익 보장 홍보·임대 계약·투자 입금·정산 내역 캡처 보존.</li>\n<li><strong>2단계 — 채굴기 실체 불명 입증 (즉시)</strong> — 채굴기 가동·소재 확인 불가·지급 중단·돌려막기 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가상자산 채굴기 임대 수익 보장 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·수익 보장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수익 보장·원금 회수 홍보 캡처 (거래 조건)</strong></li>\n<li><strong>채굴기 임대·구매 계약·약정 (계약 내용)</strong></li>\n<li><strong>임대료·투자금 입금·정산 내역 (피해 금액)</strong></li>\n<li><strong>채굴기 가동·소재 확인 시도·불가 기록</strong></li>\n<li><strong>지급 중단·돌려막기 정황 자료</strong></li>\n<li><strong>업체·담당자·연락처·계좌 정보</strong></li>\n<li><strong>다른 피해자·투자자 단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채굴기가 실제로 존재하고 가동되는지 확인을 요청한 기록과 그에 대한 회피·불응 정황을 함께 모으면 실체 불명 기망을 다투는 데 도움이 됩니다. 초기 소액 정산 후 지급이 끊긴 흐름과 다른 투자자들의 동일 피해를 정리하면 돌려막기·편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수익 보장·기망</strong> — 지급 능력·채굴기 실체 없이 수익을 보장한 것처럼 속였는지.</li>\n<li><strong>채굴기 실체</strong> — 약속한 채굴기가 실재·가동되었는지.</li>\n<li><strong>편취 범의</strong> — 단순 사업 부진인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 임대료·투자금 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (가상자산·투자사기 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 범행의 동일성과 실질 판단',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실이나 범죄사실의 동일성 여부는 사실의 동일성이 갖는 법률적 기능을 염두에 두고 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 고려하여 판단해야 한다고 보았습니다. 또 사업·분양 등을 빙자해 받은 자금이 문제 된 사안에서 행위 태양과 보호법익에 비추어 죄책과 죄수를 가리고, 피고인의 방어권에 실질적 불이익이 없는 범위에서 실제 범죄사실을 인정할 수 있다고 판시했습니다. 채굴기 임대·수익 보장을 빙자해 투자금을 받은 사안을 살펴볼 때에도, 자금 수수의 실질과 기망 여부를 사안의 구체적 사정에 따라 가려 편취 성립을 검토해볼 수 있습니다.',
        takeaway: '수익 보장 가장 + 채굴기 실체 불명 + 지급 중단·잠적 결합 시 채굴기 임대 수익 보장 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 채굴 사업이 잘 안된 것 아닌가요?',
        answer:
          '<strong>채굴기 실체·지급 능력 없이 수익을 보장한 것처럼 속였는지가 핵심인 영역입니다.</strong> 수익 보장 홍보와 지급 중단 정황을 확보하세요.',
      },
      {
        question: '처음 몇 달은 수익이 들어왔는데도 사기인가요?',
        answer:
          '<strong>초기 소액 지급 후 끊긴 흐름은 돌려막기를 의심할 단서인 영역입니다.</strong> 정산 내역과 중단 시점을 정리하세요.',
      },
      {
        question: '채굴기가 실제로 있는지 어떻게 확인하나요?',
        answer:
          '<strong>채굴기 가동·소재 확인 불가가 실체 불명의 핵심 단서인 영역입니다.</strong> 확인 요청과 회피·불응 기록을 모으세요.',
      },
      {
        question: '추가로 넣은 투자금도 피해액인가요?',
        answer:
          '<strong>임대료와 추가 투자금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '여러 명이 같이 당한 것 같아요.',
        answer:
          '<strong>다중 피해·돌려막기 정황은 편취 다툼의 출발점인 영역입니다.</strong> 투자자 단체 채팅과 정산 정황을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '채굴기 임대 추적', href: '/guide/fraud/fraud-crypto-mining-machine-rental-track' },
      { label: '비트코인 채굴기 가짜 임대 추적', href: '/guide/fraud/fraud-bitcoin-mining-machine-fake-rental-track' },
      { label: '코인 리딩방 수익 보장 추적', href: '/guide/fraud/fraud-crypto-leading-room-profit-guarantee-withdrawal-block-track' },
      { label: '코인 투자사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
    ],
  },

  // ─── 4. fraud-online-lecture-lifetime-access-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-lifetime-access-closure-track',
    keyword: '온라인 강의 평생수강 폐업 환불 기망 사기',
    questionKeyword: '온라인 강의 플랫폼·인강 업체가 ‘한 번 결제하면 평생 무제한으로 수강할 수 있다, 업데이트도 계속 제공된다’는 말을 믿고 고액의 평생수강권을 결제했어요. 그런데 얼마 지나지 않아 강의 사이트가 갑자기 닫히고, ‘운영상 사정으로 서비스를 종료한다, 환불은 어렵다’며 폐업·잠적해 결제한 강의를 듣지도, 돈을 돌려받지도 못하게 됐어요. 알고 보니 폐업이 예정된 상태에서 평생수강권만 잔뜩 판 정황인데, 이런 평생수강 폐업 환불 기망을 사기로 신고하고 결제한 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '평생수강 폐업 환불 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 평생수강 폐업 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '평생 무제한 수강이라며 결제받은 강의 업체가 곧 폐업·환불 거부로 잠적했다면, 형법 제347조 사기·편취 판단과 카드 항변·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 강의 플랫폼·인강·온라인 클래스 업체가 ‘지금 한 번만 결제하면 평생 무제한으로 수강할 수 있다, 강의도 계속 추가·업데이트되고 폐강 걱정도 없다’는 솔깃한 말을 믿고, 길게 보면 훨씬 이득이라는 생각에 고액의 평생수강권·패키지를 한꺼번에 결제한 분의 상황입니다. 그런데 막상 몇 강 듣지도 못한 사이 강의 사이트·앱이 갑자기 닫히고, ‘회사 운영상 사정으로 서비스를 종료하게 됐다, 평생수강이라도 환불은 어렵다’며 일방적으로 폐업·잠적해, 결제한 강의를 듣지도 못하고 돈도 돌려받지 못하게 되어 막막하실 거예요. 알고 보니 이미 폐업이 예정되어 자금 사정이 어려운 상태에서 평생수강권만 집중적으로 팔아 결제만 챙긴 정황이고, 같은 시기 다른 수강생들도 똑같이 당했다면 단순 폐업이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 서비스를 지속할 의사·능력이 없는데도 평생수강이 보장되는 것처럼 속이거나 폐업 예정 사실을 숨기고 결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 다만 판례는 부작위에 의한 기망에서 법률상 고지의무가 인정되는 범위와 그 근거가 되는 거래실정에 관한 증명책임이 검사에게 있다고 보면서, 고지의무 위반 여부를 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 폐업 예정 등을 알면서 숨겼는지를 가려 다툴 여지가 있습니다. 평생수강 가장·폐업 예정 은폐 + 결제 집중 유도 + 환불 거부·잠적 결합은 ‘평생수강 폐업 환불 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업 예정·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 카드 항변·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 평생수강 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업 예정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 평생수강 보장 광고·이용약관·결제 내역 정리.</li>\n<li><strong>② 폐업 예정·기망</strong> — 폐업 예정·자금난을 숨기고 평생수강권을 팔았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 일부 수강했어도 결제한 수강권 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 카드 항변·환급</strong> — 신용카드 할부항변권·계약 해지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영난 폐업과 달리, 폐업 예정 사실을 숨긴 채 평생수강권을 집중적으로 팔았는지가 판단의 분기점입니다. 평생수강을 보장한 광고와 폐업 직전 결제 정황, 다른 수강생의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 평생수강 보장 광고·약관·결제·영수증 내역 캡처 보존.</li>\n<li><strong>2단계 — 폐업 예정 정황 입증 (즉시)</strong> — 폐업 직전 집중 결제·환불 거부 공지·다른 수강생 동일 피해를 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·해지 요구 (병행)</strong> — 할부 결제면 신용카드사 할부항변권 행사와 계약 해지를 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 한국소비자원 피해구제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 평생수강 폐업 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업 예정·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>평생수강·무제한 보장 광고·페이지 캡처 (거래 조건)</strong></li>\n<li><strong>수강 약관·환불 규정·결제 화면 (계약 내용)</strong></li>\n<li><strong>결제·영수증·할부 내역 (피해 금액)</strong></li>\n<li><strong>서비스 종료·폐업·환불 거부 공지 기록</strong></li>\n<li><strong>다른 수강생의 동일 피해·단체 채팅 기록</strong></li>\n<li><strong>업체·상호·사업자등록·계좌 정보</strong></li>\n<li><strong>카드 할부항변·계약 해지 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 강의 사이트는 폐업과 함께 한순간에 닫히므로 평생수강 보장 광고·약관과 결제 화면을 곧바로 캡처해두는 것이 중요합니다. 폐업 직전 짧은 기간에 결제가 몰린 정황과 다른 수강생의 동일 피해를 함께 모으면 폐업 예정 은폐를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 예정·기망</strong> — 폐업 예정·자금난을 숨기고 평생수강권을 팔았는지.</li>\n<li><strong>고지의무</strong> — 서비스 지속 의사·능력을 알릴 신의칙상 의무가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영난 폐업인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 일부 수강했어도 결제한 대금 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 상호·사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·교육 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (할부·결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 고지의무의 범위',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄의 요건으로서 부작위에 의한 기망이 성립하려면 법률상 고지의무가 인정되어야 하고, 그 고지의무의 근거가 되는 거래의 내용이나 거래관행 등 거래실정에 관한 사실을 주장·증명할 책임은 검사에게 있다고 보았습니다. 또 거래 상대방의 변제자력 등에 관한 고지의무가 있었는지, 상대방이 그러한 사정을 착오한 상태에서 거래에 임했는지를 신중히 판단해야 한다고 판시했습니다. 평생수강을 약속하고 결제를 받은 뒤 폐업한 사안을 살펴볼 때에도, 폐업 예정 등 중요한 사정을 알면서 고지하지 않았는지를 기준으로 부작위 기망을 검토해볼 수 있습니다.',
        takeaway: '평생수강 가장·폐업 예정 은폐 + 결제 집중 + 환불 거부 결합 시 평생수강 폐업 환불 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 회사가 망한 것 아닌가요?',
        answer:
          '<strong>폐업 예정을 숨기고 평생수강권을 집중적으로 팔았는지가 핵심인 영역입니다.</strong> 폐업 직전 결제 정황과 보장 광고를 확보하세요.',
      },
      {
        question: '평생수강이라 했는데 환불이 안 되나요?',
        answer:
          '<strong>환불 거부의 적정성과 폐업 예정 은폐가 함께 다퉈지는 영역입니다.</strong> 약관·환불 규정과 종료 공지를 정리하세요.',
      },
      {
        question: '몇 강 들었는데도 사기 피해인가요?',
        answer:
          '<strong>일부 수강했어도 결제한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 수강권 결제 총액을 정리하세요.',
      },
      {
        question: '카드 할부로 냈는데 막을 방법이 있나요?',
        answer:
          '<strong>할부 결제면 신용카드사 할부항변권 행사를 검토할 수 있는 영역입니다.</strong> 카드사에 잔여 할부 항변을 신속히 요청하세요.',
      },
      {
        question: '다른 수강생도 같이 당한 것 같아요.',
        answer:
          '<strong>같은 시기 다중 피해 정황은 편취·기망을 뒷받침하는 단서인 영역입니다.</strong> 수강생 단체 채팅·피해 명단을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 강의 평생 멤버십 추적', href: '/guide/fraud/fraud-online-lecture-lifetime-membership-track' },
      { label: '온라인 강의 선결제 미제공 추적', href: '/guide/fraud/fraud-online-lecture-prepaid-no-service-track' },
      { label: '온라인 강의 환불 거부 잠적 추적', href: '/guide/fraud/fraud-online-lecture-refund-refusal-disappear-track' },
      { label: '학원 교재 선납 폐업 잠적 추적', href: '/guide/fraud/fraud-academy-textbook-prepay-closure-vanish-track' },
    ],
  },

  // ─── 5. fraud-livestock-consignment-breeding-return-track ───
  {
    domain: 'fraud',
    slug: 'fraud-livestock-consignment-breeding-return-track',
    keyword: '가축 위탁 사육 수익 보장 투자 기망 사기',
    questionKeyword: '농장·축산 업체가 ‘송아지·돼지 같은 가축을 사서 우리에게 위탁 사육을 맡기면, 우리가 키워서 출하한 뒤 원금과 수익을 함께 돌려준다, 손실 위험도 없다’는 말을 믿고 가축 구입비와 위탁 사육비를 투자했어요. 처음엔 약속한 정산금이 들어와 믿고 추가로 더 투자했는데, 어느 순간부터 ‘사료값이 올랐다, 질병이 돌았다’며 정산이 끊기고, 내 명의라는 가축이 실제로 있는지조차 확인되지 않더니 업체와 연락이 끊겼어요. 알고 보니 실체 없는 가축을 미끼로 투자금만 받아 돌려막은 정황인데, 이런 가축 위탁 사육 수익 보장 투자 기망을 사기로 신고하고 투자금을 돌려받을 수 있나요?',
    ctaKeyword: '가축 위탁 사육 수익 보장 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '가축 위탁 사육 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '가축을 위탁 사육하면 원금과 수익을 보장한다는 말을 믿고 투자했는데 정산이 끊기고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「농장·축산·목장 업체가 ‘송아지·돼지·닭 같은 가축을 사서 우리에게 위탁 사육을 맡겨두면, 우리가 책임지고 키워 출하한 뒤 원금에 수익을 더해 돌려준다, 시설·사료·관리·방역까지 다 우리가 하니 손실 위험도 없다’는 솔깃한 말을 믿고, 실물 자산이라 안전하다는 생각에 가축 구입비와 위탁 사육비를 투자한 분의 상황입니다. 처음 얼마간은 약속한 정산금이 실제로 들어와 믿고 추가로 더 투자했는데, 어느 순간부터 ‘사료값이 폭등했다, 가축 질병이 돌아 출하가 늦어진다, 곧 정상화된다’며 정산이 끊기고, 정작 내 명의로 키운다는 가축이 실제로 존재하는지, 그 수만큼 사육되고 있는지조차 확인되지 않더니, 결국 업체·담당자와 연락이 끊겨 막막하실 거예요. 알고 보니 실체 없는 가축을 미끼로 투자금만 받아 앞사람 정산을 뒷사람 돈으로 돌려막은 정황이라면 단순 작황 부진이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 수익·원금을 돌려줄 의사·능력이나 가축의 실체 없이 수익이 보장되는 것처럼 속여 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄가 성립하려면 기망행위와 그로 인한 처분행위 사이에 인과관계가 있어야 하고, 기망행위와 재물 교부 사이의 인과관계를 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 위탁 사육을 빙자한 자금 수수의 실질과 기망 여부를 가려 다툴 여지가 있습니다. 수익 보장 가장 + 가축 실체 불명 + 정산 중단·잠적 결합은 ‘위탁 사육 수익 보장 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·투자 정리 ② 수익 보장·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가축 위탁 사육 수익 보장 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·수익 보장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 정리</strong> — 수익·원금 보장 홍보·위탁 사육 계약·투자 입금 내역 정리.</li>\n<li><strong>② 수익 보장·기망</strong> — 가축 실체·정산 능력 없이 수익을 보장한 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 가축 구입비·위탁 사육비 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 작황 부진과 달리, 가축 실체나 정산 능력 없이 수익이 보장되는 것처럼 속여 투자금만 받고 돌려막다 잠적했는지가 판단의 분기점입니다. 수익·원금 보장 홍보와 가축 실체 불명·정산 중단 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 수익·원금 보장 홍보·위탁 사육 계약·투자 입금·정산 내역 캡처 보존.</li>\n<li><strong>2단계 — 가축 실체 불명 입증 (즉시)</strong> — 가축 두수·소재 확인 불가·정산 중단·돌려막기 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가축 위탁 사육 수익 보장 투자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·수익 보장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수익·원금 보장 홍보·설명회 자료 (거래 조건)</strong></li>\n<li><strong>가축 구입·위탁 사육 계약·약정 (계약 내용)</strong></li>\n<li><strong>가축 구입비·위탁 사육비 입금·정산 내역 (피해 금액)</strong></li>\n<li><strong>가축 두수·소재·사육 현황 확인 시도·불가 기록</strong></li>\n<li><strong>정산 중단·돌려막기 정황 자료</strong></li>\n<li><strong>업체·농장·담당자·연락처·계좌 정보</strong></li>\n<li><strong>다른 피해자·투자자 단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 내 명의로 키운다는 가축이 실제로 그 수만큼 존재·사육되는지 현장 확인을 요청한 기록과 그에 대한 회피·불응 정황을 함께 모으면 실체 불명 기망을 다투는 데 도움이 됩니다. 초기 정산 후 끊긴 흐름과 다른 투자자들의 동일 피해를 정리하면 돌려막기·편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수익 보장·기망</strong> — 정산 능력·가축 실체 없이 수익을 보장한 것처럼 속였는지.</li>\n<li><strong>가축 실체</strong> — 약속한 가축이 그 수만큼 실재·사육되었는지.</li>\n<li><strong>편취 범의</strong> — 단순 작황 부진인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 구입비·위탁 사육비 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·농장·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자사기 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 성립과 인과관계',
        summary:
          '대법원 2003도3516(대법원, 2003.10.10 선고) 영역에서 법원은 사기죄가 성립하려면 기망행위와 그로 인한 착오·처분행위 사이에 인과관계가 있어야 한다는 성립 요건을 밝히면서, 기망행위와 자금 제공 사이에 인과관계가 인정되는지를 신중히 판단해야 한다고 보았습니다. 또 자금 수수가 문제 된 사안에서 그 실질과 경위, 손해의 발생을 종합해 사기·배임 등의 죄책을 가려야 한다고 판시했습니다. 가축 위탁 사육·수익 보장을 빙자해 투자금을 받은 사안을 살펴볼 때에도, 수익 보장 약속이라는 기망과 투자금 교부 사이의 인과관계, 가축 실체 여부를 함께 따져 편취 성립을 검토해볼 수 있습니다.',
        takeaway: '수익 보장 가장 + 가축 실체 불명 + 정산 중단·잠적 결합 시 위탁 사육 수익 보장 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 작황·사육이 안된 것 아닌가요?',
        answer:
          '<strong>가축 실체·정산 능력 없이 수익을 보장한 것처럼 속였는지가 핵심인 영역입니다.</strong> 수익 보장 홍보와 정산 중단 정황을 확보하세요.',
      },
      {
        question: '처음엔 정산금이 들어왔는데도 사기인가요?',
        answer:
          '<strong>초기 정산 후 끊긴 흐름은 돌려막기를 의심할 단서인 영역입니다.</strong> 정산 내역과 중단 시점을 정리하세요.',
      },
      {
        question: '가축이 실제로 있는지 어떻게 확인하나요?',
        answer:
          '<strong>가축 두수·소재·사육 현황 확인 불가가 실체 불명의 핵심 단서인 영역입니다.</strong> 현장 확인 요청과 불응 기록을 모으세요.',
      },
      {
        question: '추가로 넣은 투자금도 피해액인가요?',
        answer:
          '<strong>구입비와 추가 투자금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '여러 명이 같이 당한 것 같아요.',
        answer:
          '<strong>다중 피해·돌려막기 정황은 편취 다툼의 출발점인 영역입니다.</strong> 투자자 단체 채팅과 정산 정황을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '공동 투자 수익 보장 추적', href: '/guide/fraud/fraud-joint-investment-profit-guarantee-track' },
      { label: '코인 투자사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
      { label: '형사 사기와 민사 분쟁 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '미술품 지분 투자 추적', href: '/guide/fraud/fraud-art-investment-fractional-ownership-track' },
    ],
  },

  // ─── 6. fraud-investment-return-promise-business-failure-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-return-promise-business-failure-falsely-accused-defense',
    keyword: '투자수익 약속 사업실패 사기 고의 무고 방어',
    questionKeyword: '지인·투자자에게 ‘사업이 잘되면 수익을 나눠주겠다’며 투자를 받아 실제로 사업에 썼는데, 시장 상황이 나빠져 사업이 실패하고 약속한 수익은커녕 원금도 돌려주기 어려워졌어요. 그러자 상대가 ‘처음부터 갚을 마음 없이 속여 돈을 가로챘다’며 저를 사기로 고소했어요. 저는 받을 당시 분명히 사업을 할 의사와 능력이 있었고 실제로 자금을 사업에 투입했는데, 결과가 안 좋았다는 이유만으로 사기범으로 몰려 너무 억울해요. 이렇게 투자수익 약속 사업실패가 사기로 고소된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '투자수익 약속 사업실패 사기 고의 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '투자수익 사업실패 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '수익을 약속하고 받은 투자금을 사업에 썼는데 실패했다는 이유로 사기 고소를 당해 억울하다면, 편취 고의 판단 시점과 채무불이행 구별 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동료·투자자에게 ‘이 사업이 잘되면 약속한 수익을 나눠주겠다, 일정 기간이면 원금도 돌려주겠다’며 투자를 받아 그 돈을 실제로 사업 운영·자재·인건비 등에 투입했는데, 시장 상황 악화·거래처 부도·예상 밖의 손실 등으로 사업이 기울어 약속한 수익은커녕 원금조차 제때 돌려주기 어려워진 분의 상황입니다. 그러자 투자한 상대가 ‘처음부터 갚을 마음도, 사업을 제대로 할 능력도 없으면서 수익을 미끼로 속여 돈을 가로챘다’며 저를 사기로 고소해, 한순간에 사기범으로 몰려 너무 억울하고 막막하실 거예요. 받을 당시에는 분명히 사업을 할 의사와 능력이 있었고 자금도 실제로 사업에 썼는데, 결과가 안 좋아졌다는 이유만으로 형사 처벌까지 받게 될까 봐 더 답답하셨을 거예요. 혐의를 받고 있다면, 투자를 받을 당시의 사업 의사·능력과 자금 사용처를 차분히 정리해 편취 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 편취의 고의가 인정되어야 하고, 그 판단은 행위 당시를 기준으로 하는 영역입니다. 판례는 사기죄 성립 여부는 행위 당시를 기준으로 판단하므로 차주가 돈을 빌릴 당시에 변제할 의사와 능력을 가지고 있었다면 그 후 변제하지 못하더라도 이는 민사상 채무불이행에 불과하고 형사상 사기죄가 성립하지 않는다고 본 사례 흐름이 있는 영역으로, 사후의 변제 실패만으로 곧바로 편취의 범의를 단정할 수 없다고 다툴 여지가 있습니다. 사업 의사·능력 보유 + 실제 사업 투입 + 사후 사업실패 결합은 ‘편취 고의 부재·채무불이행 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 거래·투자 경위 정리 ② 사업 의사·능력 ③ 자금 사용처 ④ 편취 고의 ⑤ 채무불이행 구별·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 투자수익 약속 사업실패 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·사업 의사·자금 사용처·편취 고의·채무불이행 구별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 경위 정리</strong> — 투자 권유·조건·약정·입금 내역과 그 경위 정리.</li>\n<li><strong>② 사업 의사·능력</strong> — 받을 당시 실제 사업 의사·능력이 있었는지 정리.</li>\n<li><strong>③ 자금 사용처</strong> — 투자금을 사업에 실제로 투입했는지 자료 정리.</li>\n<li><strong>④ 편취 고의</strong> — 행위 당시 기준으로 편취의 범의가 인정되는지 검토.</li>\n<li><strong>⑤ 채무불이행 구별·방어</strong> — 사후 사업실패가 민사 채무불이행에 그치는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 갚을 의사 없이 속였는지(편취 고의), 아니면 사업 의사·능력이 있었으나 사후 사업이 실패한 것(채무불이행)인지가 판단의 분기점입니다. 투자 당시의 사업 실재·자금 사용처와 변제 노력 정황을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 투자 권유·조건·약정·입금·정산 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 사업 실재·자금 사용처 정리 (즉시)</strong> — 사업자등록·계약·세금계산서·지출 증빙으로 자금을 사업에 투입한 사실을 정리.</li>\n<li><strong>3단계 — 편취 고의·변제 노력 검토 (병행)</strong> — 행위 당시 사업 의사·능력과 이후 변제·정산 시도 정황을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 채무불이행 구별·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자수익 약속 사업실패 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·사업 실재·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유·조건·약정 대화·계약서 (거래 경위)</strong></li>\n<li><strong>투자금 입금·정산·변제 내역 (자금 흐름)</strong></li>\n<li><strong>사업자등록·거래처 계약·세금계산서 (사업 실재)</strong></li>\n<li><strong>임대료·자재·인건비 등 지출 증빙 (자금 사용처)</strong></li>\n<li><strong>사업 부진·손실 경위 자료(거래처 부도 등)</strong></li>\n<li><strong>변제·정산 시도·협의 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투자금이 실제로 사업에 쓰였다는 지출 증빙과 사업 실재 자료를 정리하면 편취 고의가 아니라 사업 운영이었음을 다투는 데 도움이 됩니다. 받을 당시의 사업 의사·능력과 이후의 변제·정산 노력을 보여주는 자료를 함께 모아 채무불이행과의 구별을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 행위 당시 갚을 의사·능력이 있었는지.</li>\n<li><strong>사업 의사·능력</strong> — 실제 사업을 할 의사·능력이 있었는지.</li>\n<li><strong>자금 사용처</strong> — 투자금을 사업에 실제로 투입했는지.</li>\n<li><strong>채무불이행 구별</strong> — 사후 사업실패가 민사 채무불이행에 그치는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의의 판단 시점과 채무불이행 구별',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄가 성립하는지는 행위 당시를 기준으로 판단하여야 하므로, 차주가 돈을 빌릴 당시에는 변제할 의사와 능력을 가지고 있었다면 비록 그 후에 변제하지 않고 있더라도 이는 민사상 채무불이행에 불과하며 형사상 사기죄가 성립하지 않는다고 보았습니다. 또 대주가 차주의 신용 상태를 인식해 장래의 변제 지체·불능 위험을 예상하거나 예상할 수 있었던 경우, 변제의사·능력·차용 조건 등 중요한 사항에 관한 허위 진술 같은 다른 사정이 없다면, 그 후 제대로 변제하지 못했다는 사실만으로 편취의 범의를 단정할 수 없다고 판시했습니다. 투자수익을 약속했다 사업이 실패한 사안을 살펴볼 때에도, 행위 당시의 사업 의사·능력과 자금 사용처를 기준으로 편취 고의를 다투고 채무불이행과 구별해 검토해볼 수 있습니다.',
        takeaway: '사업 의사·능력 보유 + 실제 사업 투입 + 사후 사업실패 결합 시 편취 고의 부재·채무불이행 구별 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '사업이 실패하면 무조건 사기인가요?',
        answer:
          '<strong>행위 당시 갚을 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 사업 실패가 사후 사정임을 보여주는 자료를 정리하세요.',
      },
      {
        question: '돈을 못 갚은 것만으로 사기 고의가 인정되나요?',
        answer:
          '<strong>사후 변제 실패만으로 편취 고의를 단정하기 어려운 영역입니다.</strong> 변제 노력과 사업 투입 정황을 정리하세요.',
      },
      {
        question: '투자금을 사업에 쓴 걸 어떻게 보이죠?',
        answer:
          '<strong>지출 증빙·거래처 계약·세금계산서가 자금 사용처의 핵심 자료인 영역입니다.</strong> 사업 관련 증빙을 빠짐없이 모으세요.',
      },
      {
        question: '수익을 보장한다고 말한 게 불리한가요?',
        answer:
          '<strong>약속의 표현보다 당시 사업 의사·능력과 실현 가능성이 중요한 영역입니다.</strong> 권유 경위와 사업 계획을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>투자 경위·자금 사용처에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '사업 투자 빙자 차용 무고 방어', href: '/guide/fraud/fraud-business-investment-pretext-borrowing-falsely-accused-defense' },
      { label: '사업 자금 대여 무고 방어', href: '/guide/fraud/fraud-business-fund-loan-falsely-accused-defense' },
      { label: '사업 대여 민사 분쟁 무고 방어', href: '/guide/fraud/fraud-business-loan-civil-dispute-falsely-accused-defense' },
      { label: '동업 자본 손실 무고 방어', href: '/guide/fraud/fraud-business-partner-capital-loss-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-nail-salon-service-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-nail-salon-service-pretext-touch-report-track',
    keyword: '네일샵 시술 빙자 추행 신고',
    questionKeyword: '네일샵·왁싱샵·뷰티샵에서 시술을 받던 중, 시술자가 ‘손·팔을 잡아준다, 자세를 편하게 해준다, 시술 부위를 확인한다’며 손목·팔·허벅지 안쪽 등 필요 이상으로 신체를 만지거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 시술 과정인가 싶어 참았지만 갈수록 접촉이 노골적이고 시술과 무관한 부위에 집중되며, 다른 손님에게도 비슷했다는 말을 들으니 단순 시술이 아니라 추행 같다는 생각이 들어요. 이런 네일샵 시술 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '네일샵 시술 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '네일샵 시술 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '시술을 빙자해 시술과 무관한 부위에 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성·고의 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「네일샵·왁싱샵·속눈썹·뷰티샵에서 시술을 받던 중, 시술자가 ‘손·팔을 편하게 잡아준다, 자세를 잡아준다, 시술 부위를 확인한다’는 명목으로 손목·팔·어깨·허벅지 안쪽 등 시술과 무관하거나 필요 이상으로 신체를 만지거나 몸을 밀착해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘시술하다 보면 닿을 수도 있나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 시술과 무관한 부위에 집중되며, 손님이 적은 시간대나 칸막이 안에서 더 심해지고, 다른 손님에게도 비슷한 일이 있었다는 이야기까지 들으니, 단순한 시술이 아니라 시술을 빙자한 추행은 아닌지 의심되고, 신고해도 ‘시술하다 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 편하게 관리받으려 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 시술을 가장했더라도 시술과 무관한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 다만 판례는 강제추행죄가 성립하려면 문제 되는 행위마다 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하면 설령 유죄의 의심이 들더라도 강제추행죄로 판단할 수 없다고 본 사례 흐름이 있는 영역으로, 접촉이 시술의 범주를 넘어 성적 자유를 침해하는지와 추행의 고의를 신중히 가려 다툴 여지가 있습니다. 시술 빙자 + 무관 부위 접촉 + 반복·노골 결합은 ‘시술 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성·고의 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 네일샵 시술 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 예약·시술 종류·시술자와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 시술과 무관한 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성·고의</strong> — 시술 범주를 넘어 성적 자유를 침해하는 접촉·추행 고의인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 시술과 달리, 시술과 무관한 부위를 만지거나 필요 이상 밀착해 시술의 범주를 넘어 성적 자유를 침해했는지, 추행의 고의가 인정되는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 손님의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 시술 종류·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 매장 CCTV·예약·결제·메시지·다른 손님의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">네일샵 시술 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약·시술 종류·결제 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>매장 CCTV·시술 일정 확보 요청 자료</strong></li>\n<li><strong>시술자와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 손님의 유사 경험·후기·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매장 CCTV는 보관 기간이 짧을 수 있으니 보존을 요청하고 경찰에 신속히 알리는 것이 중요합니다. 접촉이 시술과 무관한 부위에 집중됐는지, 칸막이 안·한산한 시간대에 반복됐는지를 구체적으로 기록하면 시술의 범주를 넘는 추행 해당성·고의를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술과 무관한 부위 접촉·밀착인지.</li>\n<li><strong>시술 범주</strong> — 시술상 자연스러운 접촉의 범위를 넘는지.</li>\n<li><strong>추행 고의</strong> — 추행행위에 대한 범의가 인정되는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 해당성과 추행의 고의 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 의미하고, 그 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 보았습니다. 또 강제추행죄가 성립하려면 문제 되는 행위마다 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하면 설령 유죄의 의심이 들더라도 강제추행죄로 판단할 수 없다고 판시했습니다. 시술을 빙자한 접촉 사안을 살펴볼 때에도, 접촉이 시술의 범주를 넘어 성적 자유를 침해하는지와 추행의 고의를 신중히 가려 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 무관 부위 접촉 + 반복·노골 결합 시 시술 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시술하다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>시술의 범주를 넘어 성적 자유를 침해하는 접촉인지·추행 고의가 있는지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 시술 과정인 줄 알고 참았어요.',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '칸막이 안이라 목격자가 없어요.',
        answer:
          '<strong>CCTV·예약·결제·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
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
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '헬스장 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-company-dinner-forced-seating-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-forced-seating-touch-report-track',
    keyword: '회식 자리 강요 신체접촉 추행 신고',
    questionKeyword: '회식 자리에서 상사·선배가 ‘옆에 앉아라, 술 따라라’며 굳이 제 옆자리를 강요하더니, 어깨·허리·허벅지에 손을 올리거나 끌어안듯 신체를 접촉해 너무 불쾌하고 수치스러웠어요. 자리를 옮기려 해도 분위기상 빠지기 어려웠고, 거부 의사를 보여도 ‘친근함의 표시다, 분위기 좋자고 그런 거다’라며 계속됐어요. 회식이라는 자리와 상하관계 때문에 그 자리에서 강하게 항의하기도 어려웠는데, 이런 회식 자리 강요 신체접촉 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '회식 자리 강요 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회식 자리 강요 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '회식에서 옆자리를 강요받고 어깨·허리에 손을 올리는 신체접촉을 당해 수치스러웠다면, 강제추행 신고 절차와 증거 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「부서·팀 회식 자리에서 상사·선배·거래처 사람이 ‘옆에 앉아라, 술 한 잔 따라라, 가까이 와라’며 굳이 제 옆자리나 무릎 가까이 자리를 강요하더니, 어깨·허리·허벅지에 손을 올리거나 어깨동무·포옹하듯 신체를 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 자리를 옮기거나 빠지려 해도 회식 분위기와 상하관계 때문에 쉽지 않았고, 불편한 기색이나 거부 의사를 보여도 ‘친근함의 표시다, 분위기 좋자고 한 것뿐이다, 예민하게 굴지 마라’며 접촉이 계속되어, 그 자리에서 강하게 항의하거나 곧바로 신고하기도 어려운 상황에서 당하고 나니, 신고해도 ‘회식 분위기에서 그럴 수 있는 일’로 가볍게 치부될까 봐 막막하실 거예요. 일 때문에 어쩔 수 없이 참석한 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 회식 분위기를 빌렸더라도 의사에 반해 어깨·허리·허벅지 등을 만지거나 끌어안은 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행에 해당하는지는 객관적 기준으로 판단하고, 추행행위에 해당하기 위해 대상자가 성적 수치심·혐오감을 반드시 실제로 느껴야 하는 것은 아니라고 본 사례 흐름이 있는 영역으로, 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 옆자리 강요 + 의사에 반하는 신체접촉 + 상하관계·분위기 결합은 ‘회식 자리 강요 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 자리 강요 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 회식 일시·자리 배치·가해자와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 옆자리 강요·어깨·허리·허벅지 접촉·끌어안기 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 분위기를 빌린 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366·직장 내 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회식 분위기로 치부되는 것과 달리, 의사에 반해 옆자리를 강요하고 어깨·허리·허벅지를 만지거나 끌어안았는지가 판단의 분기점입니다. 접촉 부위·방식과 거부 의사 표시, 동석자 목격 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 회식 일시·자리 배치·접촉 부위·방식·거부 의사 표시를 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 식당 CCTV·동석자 진술·당일·직후 메시지·사진을 확보.</li>\n<li><strong>3단계 — 보호·직장 내 조치 (병행)</strong> — 해바라기센터·1366 상담과 직장 내 성희롱·성폭력 신고 창구를 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복·불이익 방지 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 자리 강요 신체접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일시·장소·자리 배치 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·거부 의사 표시 기록 (행위 태양)</strong></li>\n<li><strong>식당 CCTV·예약·결제 내역 확보 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·사진·통화 기록</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366·직장 내 신고 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 식당 CCTV는 보관 기간이 짧으니 일시·장소를 특정해 빨리 보존을 요청하는 것이 중요합니다. 옆자리를 강요당한 정황과 거부 의사를 표시했는데도 접촉이 계속됐다는 점, 동석자가 본 상황을 구체적으로 정리하면 분위기를 빌린 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반하는 어깨·허리·허벅지 접촉·끌어안기인지.</li>\n<li><strong>회식 분위기</strong> — ‘친근함의 표시’ 변명에 가려지지 않는지.</li>\n<li><strong>거부 의사</strong> — 거부 의사를 표시했는데도 계속됐는지.</li>\n<li><strong>객관 정황</strong> — CCTV·동석자 진술·직후 메시지가 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 직후 반응·진술의 일관성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 수치심의 실제 인식 여부',
        summary:
          '대법원 2021도7538(대법원, 2021.10.28 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 의미하고, 추행에 해당하는지는 피해자의 의사, 행위자와의 관계, 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 판단해야 한다고 보았습니다. 또 추행행위에 해당하기 위하여 대상자가 성적 수치심이나 혐오감을 반드시 실제로 느껴야 하는 것은 아니라고 판시했습니다. 회식 자리에서 의사에 반한 신체접촉이 문제 된 사안을 살펴볼 때에도, 분위기를 빌린 접촉이 객관적으로 성적 자유를 침해하는 추행에 해당하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '옆자리 강요 + 의사에 반하는 신체접촉 + 상하관계·분위기 결합 시 회식 자리 강요 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '회식 분위기에서 그런 것뿐이라는데 추행인가요?',
        answer:
          '<strong>분위기를 빌렸어도 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 거부 의사를 구체적으로 기록하세요.',
      },
      {
        question: '그 자리에서 항의하지 못했는데 신고할 수 있나요?',
        answer:
          '<strong>상하관계·분위기로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '동석자들이 있었는데 도움이 되나요?',
        answer:
          '<strong>동석자 목격·진술은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 목격자 진술과 연락처를 확보하세요.',
      },
      {
        question: '직장이라 불이익이 걱정돼요.',
        answer:
          '<strong>직장 내 신고 창구와 불이익 방지 절차를 함께 검토할 수 있는 영역입니다.</strong> 사내 신고와 형사 신고를 함께 정리하세요.',
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
      { label: '회식 노래방 접촉 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-karaoke-touch-report-track' },
      { label: '회식 음주 접촉 추적', href: '/guide/sex-crime/sex-crime-company-dinner-intoxication-contact-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-swimming-lesson-posture-correction-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-swimming-lesson-posture-correction-touch-report-track',
    keyword: '수영 강습 자세교정 빙자 추행 신고',
    questionKeyword: '수영 강습을 받던 중 강사가 ‘물에서 자세를 잡아준다, 몸의 뜨는 라인을 교정한다, 발차기를 봐준다’며 허리·골반·엉덩이·가슴 부근에까지 필요 이상으로 손을 대거나 물속에서 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 물에서 잡아주는 건가 싶어 참았지만 갈수록 접촉이 노골적이고, 1:1 강습이나 사람이 적은 시간대에 더 심해지며, 다른 수강생에게도 비슷했다는 말을 들으니 단순 자세교정이 아니라 추행 같다는 생각이 들어요. 이런 수영 강습 자세교정 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '수영 강습 자세교정 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수영 강습 자세교정 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '물에서 자세를 잡아준다며 민감한 부위에 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「수영장·강습 프로그램에서 강사에게 지도를 받던 중, 강사가 ‘물에서 자세를 잡아준다, 몸이 뜨는 라인을 교정한다, 발차기·호흡을 봐준다’는 명목으로 허리·골반·엉덩이·가슴 부근 등 민감한 부위에까지 필요 이상으로 손을 대거나, 물속에서 몸을 밀착하고 받쳐주는 척하며 신체를 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘수영은 물에서 잡아줘야 하나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고, 물속이라 다른 사람 눈에 잘 띄지 않는 점을 이용해 1:1 강습이나 사람이 적은 시간대에 더 심해지며, 다른 수강생에게도 비슷한 일이 있었다는 이야기까지 들으니, 단순한 자세교정이 아니라 교정을 빙자한 추행은 아닌지 의심되고, 신고해도 ‘물에서 잡아준 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 건강·취미로 다닌 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 자세교정을 가장했더라도 강습과 무관한 민감 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강간·강제추행 등 성폭력범죄에서 행위 태양과 피해자의 상태·관계 등을 종합해 신중히 판단해야 하고, 본죄가 성립하려면 행위자에게 그에 대한 인식이 인정되어야 한다고 본 사례 흐름이 있는 영역으로, 접촉이 교정의 범주를 넘어 성적 자유를 침해하는지를 신중히 가려 다툴 여지가 있습니다. 자세교정 빙자 + 민감 부위 접촉 + 물속 밀착·반복 결합은 ‘자세교정 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수영 강습 자세교정 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 수강 등록·강습 형태(1:1·그룹)·강사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 강습과 무관한 민감 부위·물속 밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 자세교정 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 자세교정과 달리, 강습과 무관한 민감 부위를 만지거나 물속에서 필요 이상 밀착해 교정의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 수강생의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 강습 형태·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 수영장 CCTV·강습 예약·메시지·다른 수강생의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수영 강습 자세교정 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>수강 등록·강습 예약·결제 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>수영장 CCTV·강습 일정 확보 요청 자료</strong></li>\n<li><strong>강사와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 수강생의 유사 경험·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수영장 CCTV는 보관 기간이 짧고 물속 장면이 잘 안 보일 수 있으니 보존을 요청하고 경찰에 신속히 알리는 것이 중요합니다. 접촉이 강습과 무관한 민감 부위에 집중됐는지, 1:1 강습·한산한 시간대에 반복됐는지를 구체적으로 기록하면 교정의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 강습과 무관한 민감 부위 접촉·밀착인지.</li>\n<li><strong>교정 범주</strong> — 자세교정의 상당한 범위를 넘는지.</li>\n<li><strong>성적 자유 침해</strong> — 성적 자유를 침해하는 정도에 이르는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성폭력범죄의 판단과 행위자의 인식',
        summary:
          '대법원 2016도4404(대법원, 2021.02.25 선고) 영역에서 법원은 성폭력범죄의 처벌 등에 관한 특례법이 정한 강간·강제추행 등의 죄에서 피해자의 상태와 행위 태양 등을 종합해 신중히 판단해야 하고, 피해자의 상태는 개인별로 모습과 정도에 차이가 있으므로 비장애인의 시각과 기준에서 쉽게 단정해서는 안 된다고 보았습니다. 또 해당 죄가 성립하려면 행위자도 범행 당시 그러한 사정을 인식하여야 한다고 판시했습니다. 강습 중 자세교정을 빙자한 접촉 사안을 살펴볼 때에도, 접촉의 구체적 태양과 경위, 피해자의 상태를 종합해 그것이 교정의 범주를 넘어 성적 자유를 침해하는 추행에 해당하는지를 신중히 가려 검토해볼 수 있습니다.',
        takeaway: '자세교정 빙자 + 민감 부위 접촉 + 물속 밀착·반복 결합 시 자세교정 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '물에서 잡아준 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>교정의 상당한 범주를 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 자세교정인 줄 알고 참았어요.',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '물속이라 CCTV로도 잘 안 보여요.',
        answer:
          '<strong>예약 기록·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '다른 수강생도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 수강생의 진술을 확보하세요.',
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
      { label: '필라테스 강사 자세교정 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-pilates-instructor-posture-correction-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: '헬스장 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-elevator-momentary-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-elevator-momentary-contact-falsely-accused-defense',
    keyword: '엘리베이터 순간 접촉 추행 무고 방어',
    questionKeyword: '사람이 꽉 찬 엘리베이터에 타고 있던 중, 문이 열리고 닫히며 사람이 타고 내리는 사이 옆에 있던 사람과 몸이 순간적으로 닿았을 뿐인데, 갑자기 그 사람이 ‘추행을 당했다’며 저를 지목하고 경찰에 신고했어요. 저는 추행할 의도가 전혀 없었고 좁은 엘리베이터에서 어쩔 수 없이 닿은 우연한 접촉이었는데, 한순간에 성범죄 가해자로 몰려 너무 억울하고 막막해요. 짐을 들고 있었고 일부러 만진 적이 없는데, 이렇게 엘리베이터 순간 접촉이 추행으로 신고된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '엘리베이터 순간 접촉 추행 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '엘리베이터 순간 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '꽉 찬 엘리베이터에서 순간적으로 닿은 우연한 접촉인데 추행으로 신고돼 억울하다면, 추행 고의 판단과 무죄추정·진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「사람이 꽉 찬 엘리베이터에 함께 타고 있던 중, 문이 열리고 닫히며 사람이 타고 내리거나 몸이 밀리는 사이 옆·뒤에 있던 사람과 몸이 순간적으로 닿았을 뿐인데, 갑자기 그 사람이 ‘추행을 당했다’며 저를 지목하고 경찰에 신고해, 한순간에 성범죄 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 짐을 들거나 손잡이·벽에 기댄 채 좁은 공간에서 어쩔 수 없이 닿은 우연한 접촉이었다고 생각하는데도, 밀폐된 짧은 시간의 일이라 직접 목격자가 없거나 상대 진술이 사실상 유일한 증거라 진술 다툼만 남을까 봐 너무 억울하고 막막하실 거예요. 평범하게 오르내리던 길에 벌어진 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 접촉이 좁은 공간에서의 우연한 것이었는지와 추행의 고의가 없었다는 점을 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 성폭력처벌법 제11조의 공중밀집장소에서의 추행죄나 형법 제298조 강제추행죄가 성립하려면 추행행위와 그에 대한 고의가 인정되어야 하는 영역입니다. 판례는 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로 이를 용인하는 내심의 의사가 있어야 하고, 피고인이 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법에 따를 수밖에 없으며, 공소사실에 관하여 조금이라도 합리적인 의심이 있으면 피고인이 제출한 증거가 부족하다는 이유만으로 유죄를 선고할 수 없다고 본 사례 흐름이 있는 영역입니다. 또 추행 해당 여부는 행위자의 나이·경위·관계, 구체적 행위 태양과 전후 정황 등 객관적 사정을 종합해 판단해야 하는 영역으로, 접촉의 우연성·고의 여부와 진술 신빙성을 가려 다툴 여지가 있습니다. 밀폐 공간 순간 접촉 + 우연한 닿음 + 진술 중심 증거 결합은 ‘추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉 우연성 ③ 추행 고의 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 순간 접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 우연성·추행 고의·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 탑승 시간·층·혼잡도·위치·짐·자세 정황 정리.</li>\n<li><strong>② 접촉 우연성</strong> — 승하차·밀림 등 좁은 공간의 우연한 접촉인지 정리.</li>\n<li><strong>③ 추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정될 정황이 있는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술이 유일·일관·정황 부합하는지 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 공간에서의 우연한 접촉인지, 추행을 용인하는 내심의 의사(고의)가 인정될 정황이 있는지가 판단의 분기점입니다. 짐·자세·위치·혼잡도 정황과 상대 진술이 유일 증거인지·정황에 부합하는지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 건물·탑승 시간·층·동선과 짐·자세·혼잡도 정황을 보존.</li>\n<li><strong>2단계 — 접촉 우연성 정리 (즉시)</strong> — 짐·승하차·밀림 등 좁은 공간의 우연한 접촉이었음을 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 상대 진술이 유일 증거인지, 일관·정황 부합하는지와 모순을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 순간 접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉 우연성·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>건물·탑승 시간·층·동선 기록 (동선)</strong></li>\n<li><strong>엘리베이터 혼잡도·위치·짐·자세 정황 기록 (행위 태양)</strong></li>\n<li><strong>엘리베이터 내 CCTV 보존 요청 자료</strong></li>\n<li><strong>접촉 우연성 정리(짐·승하차·밀림 등) 자료</strong></li>\n<li><strong>상대 진술의 일관성·모순·정황 불부합 정리</strong></li>\n<li><strong>당시 통화·메시지·출입 기록 등 행적 자료</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 엘리베이터 CCTV는 접촉 정황을 가장 직접적으로 보여줄 수 있으니 건물 관리주체에 보존을 신속히 요청하는 것이 중요합니다. 짐을 들고 있었거나 손잡이·벽에 기댄 자세, 승하차로 인한 밀림 정황을 구체적으로 설명하고, 상대 진술이 유일 증거인지·정황과 모순되는 부분을 정리하면 추행 고의를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정되는지.</li>\n<li><strong>접촉 우연성</strong> — 좁은 공간의 우연한 접촉을 넘는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 유일·일관·정황에 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 남으면 피고인의 이익으로 보는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의의 증명과 무죄추정',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 공중밀집장소에서의 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로 이를 용인하는 내심의 의사가 있어야 하므로, 피고인이 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법에 따를 수밖에 없고, 피고인의 나이·경위·관계, 구체적 행위 태양과 전후 정황 등 객관적 사정을 종합해 판단해야 한다고 보았습니다. 또 공소사실에 관하여 조금이라도 합리적인 의심이 있으면 피고인이 제출한 증거가 부족하다는 이유만으로 유죄를 선고할 수 없고, 무죄추정의 원칙이 형사절차 전반을 이끄는 대원칙이라고 판시했습니다. 좁은 엘리베이터에서의 순간 접촉이 문제 된 사안을 살펴볼 때에도, 접촉의 우연성과 추행 고의 여부, 진술의 신빙성을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '밀폐 공간 순간 접촉 + 우연한 닿음 + 진술 중심 증거 결합 시 추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '좁은 데서 닿은 것뿐인데 추행이 되나요?',
        answer:
          '<strong>좁은 공간의 우연한 접촉인지, 추행을 용인하는 고의가 있는지가 핵심인 영역입니다.</strong> 짐·자세·혼잡도 정황을 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>접촉 경위·자세·전후 정황으로 고의 부재를 다투는 영역입니다.</strong> 당시 위치·짐·승하차 정황을 정리하세요.',
      },
      {
        question: '상대 진술만 있고 목격자가 없어요.',
        answer:
          '<strong>합리적 의심이 남으면 피고인의 이익으로 보는 무죄추정이 적용되는 영역입니다.</strong> CCTV·출입 기록·행적 자료를 확보하세요.',
      },
      {
        question: 'CCTV로 다툴 수 있나요?',
        answer:
          '<strong>엘리베이터 CCTV가 접촉 정황을 직접 보여줄 수 있는 영역입니다.</strong> 건물 관리주체에 보존을 신속히 요청하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접촉 경위·고의 부재에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '엘리베이터 낯선 사람 밀착 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-close-contact-track' },
      { label: '혼잡 버스 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-falsely-accused-defense' },
      { label: '클럽 무도장 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
      { label: '회식 후 음주 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
    ],
  },
];
