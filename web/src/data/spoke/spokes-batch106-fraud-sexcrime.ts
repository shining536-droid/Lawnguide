import { SpokePage } from '../spoke-pages';

// batch106 fraud(6) + sex-crime(4) — 10개 (2026-06-22)
//
// 고유 존재 이유:
// 1. fraud-used-car-mileage-manipulation-track — 일반 중고차 분쟁과 분기. '중고차 주행거리를 조작해 정상 주행거리로 속여 판매' 주행거리 조작 기망 편취 판단형 트랙(victim).
// 2. fraud-crypto-exchange-withdrawal-freeze-track — 일반 코인 분쟁과 분기. '가상화폐 거래소가 출금을 정지·거부하며 추가 입금만 요구' 출금 정지 기망 편취 판단형 트랙(victim).
// 3. fraud-luxury-resell-prepayment-no-shipping-track — 일반 리셀 분쟁과 분기. '명품 리셀 선입금 후 미배송·잠적' 선입금 미배송 편취 절차형 트랙(victim).
// 4. fraud-loan-pretext-upfront-fee-track — 일반 대출 분쟁과 분기. '대출해준다며 선수수료·보증료만 받고 잠적' 대출 빙자 선수수료 편취 판단형 트랙(victim).
// 5. fraud-apartment-presale-right-double-contract-track — 일반 부동산 분쟁과 분기. '분양권을 이중으로 매도해 매수인을 기망' 분양권 이중매매 기망 절차형 트랙(victim).
// 6. fraud-goods-payment-default-falsely-accused-defense — 일반 사기 무고류와 분기. '물품대금 미지급을 사기로 고소당함' 편취 고의·고지의무 방어 판단형 트랙(accused).
// 7. sex-crime-office-pantry-touch-report-track — 일반 추행류와 분기. '회사 탕비실에서 추행을 당함' 기습추행 폭행·협박 해당성 판단형 트랙(victim).
// 8. sex-crime-academy-instructor-pretext-touch-report-track — 일반 추행류와 분기. '학원 강사가 지도를 빙자해 추행' 지도 가장 추행 해당성 판단형 트랙(victim).
// 9. sex-crime-call-taxi-driver-touch-report-track — 일반 추행류와 분기. '콜택시 기사에게 추행을 당함' 추행 신고 절차·진술 신빙성 절차형 트랙(victim).
// 10. sex-crime-company-dinner-shoulder-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 어깨동무 신체접촉이 추행으로 고소' 기습추행 해당성·고의 방어 판단형 트랙(accused).

export const spokesBatch106FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-mileage-manipulation-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-mileage-manipulation-track',
    keyword: '중고차 주행거리 조작 기망 사기',
    questionKeyword: '중고차 매매상사·직거래로 ‘주행거리가 적고 사고도 없는 차’라는 말을 믿고, 계기판에 찍힌 낮은 주행거리를 보고 시세보다 조금 비싸도 괜찮다 싶어 차를 구매하며 대금을 입금했어요. 그런데 정비를 맡기거나 자동차 이력·검사 기록을 떼어 보니 실제 주행거리가 훨씬 길고 계기판이 되돌려진 정황이 드러났어요. 판매자에게 따지니 ‘몰랐다, 원래 그랬다’며 발뺌하고 환불도 거부하는데, 이런 중고차 주행거리 조작 기망을 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고차 주행거리 조작 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 기망 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '주행거리가 적다는 말을 믿고 산 중고차의 계기판이 조작된 정황이 드러나고 환불도 거부당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매상사·직거래 플랫폼에서 ‘주행거리가 얼마 안 되고 무사고에 관리도 잘 된 차’라는 자신 있는 설명을 믿고, 계기판에 찍힌 낮은 주행거리를 직접 확인한 뒤 시세보다 조금 비싸도 상태가 좋으니 괜찮다 싶어 서둘러 계약하고 대금을 입금한 분의 상황입니다. 그런데 막상 인수 후 정비소에 점검을 맡기거나 자동차등록원부·정기검사 기록·보험 수리 이력을 떼어 보니, 실제 주행거리가 계기판 표시보다 훨씬 길고 어느 시점에 주행거리가 거꾸로 줄어든 정황이 드러나, 계기판이 되돌려졌거나 부품 교체로 표시가 조작된 건 아닌지 의심되기 시작합니다. 판매자에게 이를 따지니 ‘나도 몰랐다, 매입할 때부터 그랬다, 원래 그 거리였다’며 발뺌하고 처음의 환불 약속도 어기다가 결국 연락을 피해, 큰돈을 들여 산 차가 알고 보니 주행거리를 속여 판 차일까 봐 막막하실 거예요. 한두 푼 하는 물건이 아니라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 주행거리가 조작된 사실을 알면서도 정상 주행거리인 것처럼 속여 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 기망으로 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 일부 지급되었더라도 편취액은 그 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 차를 받았더라도 지급한 대금 전부를 기준으로 편취 여부와 손해를 가려 다툴 여지가 있습니다. 주행거리 조작 + 정상 표시 기망 + 환불 거부 결합은 ‘주행거리 조작 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 주행거리 조작·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 조작 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·주행거리 조작·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 매물 광고·주행거리 설명·계약서·대금 입금 내역 정리.</li>\n<li><strong>② 주행거리 조작·기망</strong> — 계기판이 되돌려졌거나 표시를 조작해 정상으로 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 매매대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 해제·대금 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 차량 상태 불만과 달리, 주행거리가 조작된 사실을 알면서 정상 주행거리인 것처럼 속여 팔았는지가 판단의 분기점입니다. 검사·정비·보험 이력과 계기판 표시의 차이를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 매물 광고·주행거리 설명·계약서·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 조작 정황 입증 (즉시)</strong> — 자동차등록원부·정기검사 기록·보험 수리 이력으로 주행거리 역전 정황 확보.</li>\n<li><strong>3단계 — 해제·반환 요구 (병행)</strong> — 계약 해제와 매매대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 조작 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·주행거리·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매물 광고·주행거리 설명 캡처 (거래 조건)</strong></li>\n<li><strong>매매계약서·성능점검기록부 (계약 내용)</strong></li>\n<li><strong>매매대금 입금 내역 (피해 금액)</strong></li>\n<li><strong>자동차등록원부·정기검사 주행거리 기록</strong></li>\n<li><strong>보험 수리 이력·정비 점검 결과</strong></li>\n<li><strong>판매자·매매상사·상호·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정기검사·보험 수리 시점별 주행거리를 시간순으로 비교하면 어느 구간에서 거리가 거꾸로 줄었는지 드러나 조작 정황을 다투는 데 도움이 됩니다. 성능점검기록부의 주행거리 표기와 계기판 표시의 차이도 함께 정리해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주행거리 조작·기망</strong> — 조작 사실을 알면서 정상으로 속여 팔았는지.</li>\n<li><strong>편취 범의</strong> — 단순 상태 불만인지 처음부터 편취였는지.</li>\n<li><strong>판매자 인식</strong> — 매입 시부터 몰랐다는 주장의 진위.</li>\n<li><strong>편취액</strong> — 차를 받았어도 교부한 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 매매상사·상호·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·자동차 매매 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액과 대가 일부 지급',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 성립에 영향이 없다고 보았습니다. 그 대가가 일부 지급된 경우에도 편취액은 교부받은 금원에서 대가를 공제한 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 다만 특정경제범죄법 적용 시에는 편취액을 엄격·신중하게 산정해야 하고 가액을 구체적으로 산정할 수 없으면 가중처벌 규정을 적용할 수 없다고 보았습니다. 주행거리를 조작해 중고차를 판 사안을 살펴볼 때에도, 차를 받았더라도 지급한 매매대금 전부를 기준으로 편취 여부와 손해를 검토해볼 수 있습니다.',
        takeaway: '주행거리 조작 + 정상 표시 기망 + 환불 거부 결합 시 주행거리 조작 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '차 상태 불만일 뿐 사기는 아닌 것 아닌가요?',
        answer:
          '<strong>주행거리 조작을 알면서 정상으로 속여 팔았는지가 핵심인 영역입니다.</strong> 검사·보험 이력과 계기판 표시 차이를 확보하세요.',
      },
      {
        question: '주행거리 조작을 어떻게 증명하나요?',
        answer:
          '<strong>정기검사·보험 수리 시점별 주행거리 역전이 핵심 단서인 영역입니다.</strong> 시간순으로 거리 기록을 정리하세요.',
      },
      {
        question: '판매자가 몰랐다고 발뺌해요.',
        answer:
          '<strong>매입 경위·점검 기록으로 인식 여부를 다투는 영역입니다.</strong> 성능점검기록부와 매입 정황을 모으세요.',
      },
      {
        question: '차를 받았는데도 사기 피해인가요?',
        answer:
          '<strong>차를 받았어도 교부한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 매매대금 총액을 정리하세요.',
      },
      {
        question: '환불을 거부하고 연락을 피해요.',
        answer:
          '<strong>계약 해제·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 환불 요청·거부 대화를 보관하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고차 주행거리 이력 조작', href: '/guide/fraud/fraud-used-car-mileage-history-tampering' },
      { label: '중고차 주행거리 조작 판매', href: '/guide/fraud/fraud-used-car-mileage-tampering-sale-track' },
      { label: '중고차 침수 이력 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-accident-history-conceal-track' },
      { label: '중고차 리스 인수 추적', href: '/guide/fraud/fraud-used-car-lease-takeover-track' },
    ],
  },

  // ─── 2. fraud-crypto-exchange-withdrawal-freeze-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-exchange-withdrawal-freeze-track',
    keyword: '가상화폐 거래소 출금 정지 기망 사기',
    questionKeyword: '가상화폐 거래소·투자 플랫폼에 가입해 코인을 사고팔며 수익이 났는데, 막상 돈을 빼려고 출금을 신청하니 ‘세금·보증금·인증비를 먼저 내야 출금이 풀린다, 시스템 점검 중이다’라며 출금을 정지하고 추가 입금만 계속 요구해요. 시키는 대로 돈을 더 넣었는데도 출금은 계속 막히고, 알고 보니 화면에 찍힌 수익은 가짜이고 같은 방식으로 여러 명에게 출금을 미끼로 입금을 받아 챙긴 것 같은데, 이런 가상화폐 거래소 출금 정지 기망을 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '가상화폐 거래소 출금 정지 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '가상화폐 거래소 출금 정지 기망 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '출금하려니 세금·보증금을 먼저 내라며 출금을 막고 추가 입금만 요구당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가상화폐 거래소·코인 투자 플랫폼·리딩방에 가입해 안내대로 코인을 사고팔자 화면상 수익이 빠르게 불어났고, 어느 정도 모였다 싶어 돈을 빼려고 출금을 신청한 순간부터 ‘출금하려면 세금·보증금·인증비·전환 수수료를 먼저 입금해야 풀린다, 지금 시스템 점검 중이니 조금만 기다려라’라며 출금이 정지되고 추가 입금만 계속 요구받은 분의 상황입니다. 이미 넣은 돈을 빼려면 어쩔 수 없다는 생각에 시키는 대로 돈을 더 넣었는데도 출금은 계속 막히고, ‘마지막 한 번만 더 내면 전액 출금된다’는 말이 반복되다가, 알고 보니 화면에 찍힌 수익이나 잔고는 실제가 아니라 조작된 숫자였고, 같은 방식으로 여러 명에게 출금을 미끼로 입금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 노후 자금·전 재산을 넣은 경우도 많아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 처음부터 출금을 내줄 의사 없이 출금을 미끼로 추가 입금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 편취 범의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래 이행 과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하며, 지급기일에 결제되지 않으리라는 점을 예견하면서도 이를 고지하지 않고 속여 금원을 받았다면 사기죄가 성립한다고 본 사례 흐름이 있는 영역으로, 객관적 정황으로 편취 범의를 가려 다툴 여지가 있습니다. 출금 정지 + 추가 입금 요구 + 잔고 조작 결합은 ‘출금 정지 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 출금 정지·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가상화폐 거래소 출금 정지 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·출금 정지·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 가입 경위·매매·출금 신청·추가 입금 요구·입금 내역 정리.</li>\n<li><strong>② 출금 정지·기망</strong> — 출금 의사 없이 세금·보증금 명목으로 출금을 미끼 삼았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 입금·추가 입금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 시스템 지연과 달리, 처음부터 출금을 내줄 의사 없이 세금·보증금 명목으로 추가 입금만 받았는지가 판단의 분기점입니다. 출금 정지 안내·추가 입금 요구 대화와 잔고 조작 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 가입·매매·출금 신청·추가 입금 요구 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 출금 정지·조작 입증 (즉시)</strong> — 세금·보증금 명목 출금 거부·잔고 조작 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가상화폐 거래소 출금 정지 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·출금·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래소·플랫폼 가입·안내 캡처 (거래 조건)</strong></li>\n<li><strong>출금 신청·정지·추가 입금 요구 대화 (기망 정황)</strong></li>\n<li><strong>입금·추가 입금 내역 (피해 금액)</strong></li>\n<li><strong>화면 잔고·수익 캡처 (조작 정황)</strong></li>\n<li><strong>리딩방·상담원·운영자 대화 기록</strong></li>\n<li><strong>송금 계좌·지갑 주소·연락처 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출금하려는 순간 세금·보증금을 먼저 내라는 요구는 전형적인 출금 미끼 정황이므로 대화를 빠짐없이 캡처해두는 것이 중요합니다. 송금 직후라면 112·은행에 지급정지를 신속히 요청하면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>출금 정지·기망</strong> — 출금 의사 없이 세금·보증금을 미끼로 삼았는지.</li>\n<li><strong>편취 범의</strong> — 단순 지연인지 처음부터 편취였는지.</li>\n<li><strong>잔고 조작</strong> — 화면 수익·잔고가 실제가 아닌 조작인지.</li>\n<li><strong>편취액</strong> — 입금·추가 입금 전부가 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 계좌·지갑 주소·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (가상자산·투자사기 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의와 미필적 고의 판단',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취 범의는 피고인이 자백하지 않는 한 범행 전후의 재력·환경·범행 내용·거래의 이행 과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 보았습니다. 특히 어음할인 방식으로 금원을 교부받은 경우 지급기일에 결제되지 않으리라는 점을 예견했거나 지급될 확신이 없으면서도 이를 고지하지 않고 속여 할인을 받았다면 사기죄가 성립한다고 판시했습니다. 출금을 미끼로 추가 입금을 받은 사안을 살펴볼 때에도, 출금을 내줄 의사·능력과 객관적 정황을 종합해 편취 범의를 검토해볼 수 있습니다.',
        takeaway: '출금 정지 + 추가 입금 요구 + 잔고 조작 결합 시 출금 정지 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시스템 점검 중이라는데 사기인가요?',
        answer:
          '<strong>출금 의사 없이 세금·보증금을 미끼로 추가 입금을 받았는지가 핵심인 영역입니다.</strong> 출금 정지·요구 대화를 확보하세요.',
      },
      {
        question: '세금·보증금을 내라는 게 정상인가요?',
        answer:
          '<strong>출금 시 별도 세금·보증금 선입금 요구는 기망을 의심할 단서인 영역입니다.</strong> 요구 경위와 명목을 정리하세요.',
      },
      {
        question: '화면에 수익이 찍혀 있었어요.',
        answer:
          '<strong>화면 잔고·수익이 조작된 숫자일 수 있는 영역입니다.</strong> 잔고·거래내역 캡처를 보관하세요.',
      },
      {
        question: '추가로 넣은 돈도 피해액인가요?',
        answer:
          '<strong>입금과 추가 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '방금 송금했는데 어떻게 하나요?',
        answer:
          '<strong>112·은행 지급정지로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속한 지급정지 요청이 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '코인 거래소 출금 차단', href: '/guide/fraud/fraud-coin-exchange-withdrawal-blocked' },
      { label: '거래소 출금 거부 추적', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-refuse-track' },
      { label: '코인 투자사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
      { label: '계좌 지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
    ],
  },

  // ─── 3. fraud-luxury-resell-prepayment-no-shipping-track ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-resell-prepayment-no-shipping-track',
    keyword: '명품 리셀 선입금 미배송 사기',
    questionKeyword: '명품 리셀·한정판 거래 채팅방·중고 거래 앱에서 ‘구하기 힘든 인기 제품을 시세보다 싸게 넘긴다, 다른 사람이 채갈 수 있으니 선입금하면 바로 발송한다’는 말을 믿고, 좋은 매물을 놓칠까 봐 대금을 먼저 입금했어요. 그런데 발송했다는 송장은 가짜이거나 조회가 안 되고, ‘배송이 지연된다, 곧 보낸다’는 핑계만 반복되다 결국 물건도 못 받고 연락이 끊겼어요. 같은 방식으로 여러 명에게 선입금을 받아 챙긴 것 같은데, 이런 명품 리셀 선입금 미배송 사기를 신고하고 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '명품 리셀 선입금 미배송 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '명품 리셀 선입금 미배송 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '시세보다 싸게 넘긴다는 명품을 선입금했는데 송장은 가짜이고 물건도 못 받고 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「명품 리셀·한정판 거래 채팅방·중고 거래 앱·SNS에서 ‘발매가 끝난 인기 제품을 운 좋게 구해 시세보다 싸게 넘긴다, 워낙 인기라 다른 사람이 먼저 채갈 수 있으니 선입금부터 해야 자리를 잡는다, 입금하면 바로 발송한다’는 솔깃한 말을 믿고, 좋은 매물을 놓칠까 봐 대금을 서둘러 먼저 입금한 분의 상황입니다. 그런데 막상 입금하고 나니 판매자가 알려준 송장 번호는 가짜이거나 조회되지 않고, ‘택배사 사정으로 지연된다, 오늘 보낸다, 내일은 꼭 도착한다’는 핑계만 반복되다가, 결국 물건을 받지도 못한 채 판매자가 게시글·계정·연락처를 닫고 사라져, 알고 보니 처음부터 보낼 물건 없이 같은 방식으로 여러 명에게 선입금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 어렵게 모은 돈을 보낸 거라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 보낼 물건이나 이행 의사 없이 선입금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 다만 판례는 도급·물품 등 편취에 의한 사기죄에서 편취의 고의가 있었는지는 계약 당시를 기준으로 거래의 내용·체결 경위·이행 과정·결과 등을 종합해 판단해야 한다고 보아, 단순 채무불이행과 처음부터의 편취를 신중히 가린 사례 흐름이 있는 영역으로, 계약 당시의 이행 의사·능력을 가려 다툴 여지가 있습니다. 선입금 + 가짜 송장·미배송 + 잠적 결합은 ‘선입금 미배송 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 선입금·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명품 리셀 선입금 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·선입금 기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·선입금 요구·발송 약속·대금 입금 내역 정리.</li>\n<li><strong>② 선입금·기망</strong> — 보낼 물건·이행 의사 없이 선입금만 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선입금한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 보낼 물건이나 이행 의사 없이 선입금만 받고 가짜 송장으로 시간을 끌다 잠적했는지가 판단의 분기점입니다. 선입금 요구·발송 약속 대화와 가짜 송장·미배송 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·선입금 요구·발송 약속 대화·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 가짜 송장·잠적 입증 (즉시)</strong> — 조회 안 되는 송장·미배송·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명품 리셀 선입금 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/guide/fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·선입금·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·제품 사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>선입금 요구·발송 약속 대화 (기망 정황)</strong></li>\n<li><strong>대금 입금 내역 (피해 금액)</strong></li>\n<li><strong>가짜·조회 불가 송장 번호 기록</strong></li>\n<li><strong>배송 지연·연락 두절 대화 기록</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 선입금 요구·발송 약속 대화는 차단·삭제로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 안전결제 대신 계좌 직거래·선입금을 유도했다는 점과 가짜 송장 정황을 함께 정리하면 편취를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선입금·기망</strong> — 보낼 물건·이행 의사 없이 선입금만 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 배송 지연인지 처음부터 편취였는지.</li>\n<li><strong>가짜 송장</strong> — 조회 안 되는 송장으로 시간을 끌었는지.</li>\n<li><strong>편취액</strong> — 선입금한 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 물품 편취 사기죄의 편취 고의 판단 시점',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질이 기망행위에 의한 재물·재산상 이익의 취득에 있고, 그 성립에는 불법영득의 의사 내지 편취의 범의가 필요하다고 보았습니다. 도급계약 등에서 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 일을 완성할 의사나 능력이 없음에도 완성할 것처럼 거짓말을 해 대가를 편취할 고의가 있었는지에 따라 판단하고, 계약의 내용·체결 경위·이행 과정이나 결과 등을 종합해야 한다고 판시했습니다. 선입금을 받고 물건을 보내지 않은 사안을 살펴볼 때에도, 입금 당시 이행 의사·능력과 객관적 정황을 종합해 편취 고의를 검토해볼 수 있습니다.',
        takeaway: '선입금 + 가짜 송장·미배송 + 잠적 결합 시 선입금 미배송 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '단순 배송 지연 아닌가요?',
        answer:
          '<strong>보낼 물건·이행 의사 없이 선입금만 받았는지가 핵심인 영역입니다.</strong> 선입금 요구·발송 약속 대화를 확보하세요.',
      },
      {
        question: '송장을 줬는데도 사기인가요?',
        answer:
          '<strong>조회 안 되는 가짜 송장으로 시간을 끌었는지가 단서인 영역입니다.</strong> 송장 조회 결과를 캡처해두세요.',
      },
      {
        question: '안전결제를 안 쓰고 계좌이체했어요.',
        answer:
          '<strong>안전결제 대신 계좌 선입금 유도는 편취 정황을 뒷받침하는 단서인 영역입니다.</strong> 직거래 유도 경위를 정리하세요.',
      },
      {
        question: '같은 방식으로 여러 명이 당한 것 같아요.',
        answer:
          '<strong>같은 수법의 다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글을 모으세요.',
      },
      {
        question: '판매자가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/guide/fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '명품 리셀 가품 배송 환불', href: '/guide/fraud/fraud-luxury-resale-counterfeit-delivery-refund-track' },
      { label: '온라인몰 선결제 미배송 추적', href: '/guide/fraud/fraud-online-mall-nondelivery-prepayment-track' },
      { label: '명품 위탁 미지급 추적', href: '/guide/fraud/fraud-luxury-consignment-nonpayment-track' },
      { label: '해외구매대행 이중청구 잠적 추적', href: '/guide/fraud/fraud-overseas-buying-agent-double-billing-disappear-track' },
    ],
  },

  // ─── 4. fraud-loan-pretext-upfront-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-pretext-upfront-fee-track',
    keyword: '대출 빙자 선수수료 편취 사기',
    questionKeyword: '급하게 돈이 필요해 문자·전화·앱으로 받은 ‘저금리 대출이 가능하다, 신용이 낮아도 보증보험료·전산작업비·선수수료만 먼저 내면 바로 대출이 실행된다’는 안내를 믿고, 대출만 나오면 된다는 생각에 수수료 명목의 돈을 먼저 입금했어요. 그런데 막상 입금하고 나니 ‘추가 비용이 더 필요하다, 한도가 막혀 보증금을 더 내야 한다’며 돈만 계속 요구하고 정작 대출은 실행되지 않은 채 연락이 끊겼어요. 알고 보니 대출해줄 의사 없이 선수수료만 받아 챙긴 것 같은데, 이런 대출 빙자 선수수료 편취를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '대출 빙자 선수수료 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '대출 빙자 선수수료 편취 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '대출해준다며 보증료·선수수료만 받고 추가 비용만 요구하다 대출은 안 되고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「급하게 돈이 필요한 상황에서 문자·전화·대출 앱으로 받은 ‘저금리·고한도 대출이 가능하다, 신용이 낮아도 보증보험료·전산작업비·선수수료만 먼저 내면 바로 대출이 실행된다, 대출금에서 다시 빼주겠다’는 솔깃한 안내를 믿고, 일단 대출만 나오면 급한 불을 끌 수 있다는 생각에 수수료·보증금 명목의 돈을 먼저 입금한 분의 상황입니다. 그런데 막상 돈을 보내고 나니 ‘시스템상 한도가 막혔다, 정상화하려면 보증금을 더 내야 한다, 마지막으로 한 번만 더 입금하면 즉시 실행된다’며 추가 비용만 계속 요구하다가, 정작 약속한 대출은 실행되지 않은 채 담당자·업체가 연락처를 닫고 사라져, 알고 보니 처음부터 대출해줄 의사 없이 선수수료·보증금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 가뜩이나 돈이 급한데 있던 돈마저 빠져나가 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상적인 금융기관은 통상 대출 실행 전에 보증료·수수료를 차주에게 선입금받지 않는데, 대출해줄 의사 없이 선수수료 명목으로 돈을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 공사대금 등 편취에 의한 사기죄에서 편취의 범의가 있었는지는 계약 당시를 기준으로 일을 완성·이행할 의사나 능력 없이 이행할 것처럼 거짓말을 했는지에 따라 판단하고, 거래의 내용·체결 경위·이행 과정·결과 등을 종합해야 한다고 본 사례 흐름이 있는 영역으로, 대출 실행 의사·능력과 객관적 정황을 가려 다툴 여지가 있습니다. 대출 빙자 + 선수수료·보증금 요구 + 미실행·잠적 결합은 ‘대출 빙자 선수수료 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 대출·입금 정리 ② 대출 빙자·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대출 빙자 선수수료 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대출·선수수료 기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대출·입금 정리</strong> — 대출 안내·선수수료·보증금 요구·입금 내역 정리.</li>\n<li><strong>② 대출 빙자·기망</strong> — 대출 의사 없이 선수수료·보증금만 받으려 했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선수수료·보증금 등 교부 금액 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 대출 거절과 달리, 대출 실행 의사 없이 선수수료·보증금 명목으로 돈만 받고 잠적했는지가 판단의 분기점입니다. 대출 안내·선수수료 요구 대화와 미실행·추가 요구 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대출·결제 자료 보존 (즉시)</strong> — 대출 안내·선수수료·보증금 요구 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미실행·추가 요구 입증 (즉시)</strong> — 대출 미실행·반복된 추가 입금 요구·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출 빙자 선수수료 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대출·선수수료·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>대출 광고·문자·안내 캡처 (거래 조건)</strong></li>\n<li><strong>보증료·전산작업비·선수수료 요구 대화 (기망 정황)</strong></li>\n<li><strong>선수수료·보증금 입금 내역 (피해 금액)</strong></li>\n<li><strong>대출 미실행·한도 막힘 안내 기록</strong></li>\n<li><strong>반복된 추가 입금 요구·연락 두절 기록</strong></li>\n<li><strong>업체·담당자·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 제도권 금융기관은 대출 실행 전에 차주에게 보증료·수수료를 선입금받지 않으므로, 선입금 요구 대화와 안내 문자를 함께 정리하면 대출 빙자 기망을 다투는 데 도움이 됩니다. 등록 대부업체·금융사인지 금융소비자정보포털에서 확인한 자료도 보관해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대출 빙자·기망</strong> — 대출 의사 없이 선수수료·보증금만 받으려 했는지.</li>\n<li><strong>편취 범의</strong> — 단순 대출 거절인지 처음부터 편취였는지.</li>\n<li><strong>선입금 관행</strong> — 대출 전 차주에게 선수수료를 받는 것이 정상인지.</li>\n<li><strong>편취액</strong> — 선수수료·보증금 등 교부 금액 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (대출사기·보이스피싱 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사대금 등 편취 사기죄의 편취 범의',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄의 본질이 기망행위에 의한 재물·재산상 이익의 취득에 있고, 그 성립에는 불법영득의 의사 내지 편취의 범의가 필요하다고 보았습니다. 공사대금 등 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 공사를 완성할 의사나 능력이 없음에도 완성할 것처럼 거짓말을 해 대금을 편취할 고의가 있었는지에 따라 판단하고, 계약의 내용·체결 경위·이행 과정·결과 등을 종합해야 한다고 판시했습니다. 대출을 빙자해 선수수료·보증금을 받은 사안을 살펴볼 때에도, 대출 실행 의사·능력과 거래 정황을 종합해 편취 범의를 검토해볼 수 있습니다.',
        takeaway: '대출 빙자 + 선수수료·보증금 요구 + 미실행·잠적 결합 시 대출 빙자 선수수료 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '대출이 거절된 것뿐 아닌가요?',
        answer:
          '<strong>대출 의사 없이 선수수료·보증금만 받으려 했는지가 핵심인 영역입니다.</strong> 대출 안내·요구 대화를 확보하세요.',
      },
      {
        question: '선수수료를 먼저 내라는 게 정상인가요?',
        answer:
          '<strong>대출 실행 전 차주에게 보증료·수수료를 선입금받는 것은 기망을 의심할 단서인 영역입니다.</strong> 요구 경위를 정리하세요.',
      },
      {
        question: '보증금을 더 내라고 계속 요구해요.',
        answer:
          '<strong>반복된 추가 입금 요구는 전형적인 편취 정황인 영역입니다.</strong> 추가 요구 대화와 명목을 정리하세요.',
      },
      {
        question: '넣은 선수수료 전부가 피해액인가요?',
        answer:
          '<strong>선수수료·보증금 등 교부 금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '방금 송금했는데 어떻게 하나요?',
        answer:
          '<strong>112·은행 지급정지로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속한 지급정지 요청이 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '대출 중개 선수수료 잠적 추적', href: '/guide/fraud/fraud-loan-broker-upfront-fee-vanish-track' },
      { label: '대출 선수수료 추적', href: '/guide/fraud/fraud-loan-advance-fee-track' },
      { label: '대출 수수료 선납 사기', href: '/guide/fraud/fraud-loan-fee-advance-scam' },
      { label: '대출 빙자 보이스피싱 추적', href: '/guide/fraud/fraud-loan-pretext-voice-phishing-track' },
    ],
  },

  // ─── 5. fraud-apartment-presale-right-double-contract-track ───
  {
    domain: 'fraud',
    slug: 'fraud-apartment-presale-right-double-contract-track',
    keyword: '분양권 전매 이중매매 기망 사기',
    questionKeyword: '아파트 분양권·택지 분양권을 전매로 사면서 ‘이 분양권은 내 명의이고 다른 데 판 적이 없다, 깨끗하다’는 말을 믿고 프리미엄까지 얹어 매매대금을 입금했는데, 알고 보니 같은 분양권을 이미 다른 사람에게 먼저 팔아 놓고 저에게 또 판 이중매매였어요. 결국 명의 이전도 안 되고 분양권도 제 것이 되지 못한 채 돈만 날릴 처지가 됐고, 매도인은 ‘사정이 꼬였다’며 발뺌하는데, 이런 분양권 이중매매 기망을 사기로 신고하고 입금한 매매대금을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '분양권 전매 이중매매 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '분양권 전매 이중매매 기망 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '깨끗하다는 말을 믿고 산 분양권이 이미 다른 사람에게 팔린 이중매매였다면, 형법 제347조 사기의 편취 판단과 대금 반환·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「아파트 분양권·택지 분양권을 전매로 사면서 ‘이 분양권은 분명히 내 명의이고, 다른 사람에게 판 적이 전혀 없다, 권리관계가 깨끗하니 안심하라’는 매도인의 말을 믿고, 인기 단지라 놓치면 안 된다는 생각에 적지 않은 프리미엄까지 얹어 계약금·중도금·잔금 형태로 매매대금을 입금한 분의 상황입니다. 그런데 막상 명의 변경·전매 절차를 진행하려 하니, 같은 분양권을 매도인이 이미 다른 사람에게 먼저 팔아 놓고 저에게 또 판 ‘이중매매’였던 사실이 드러나, 결국 제 명의로 이전도 되지 못하고 분양권도 제 것이 되지 못한 채 입금한 돈만 고스란히 날릴 처지가 됩니다. 매도인에게 따지니 ‘일이 꼬였다, 곧 해결해 주겠다’며 발뺌하다 연락을 피하기 시작해, 큰돈을 들인 거래가 처음부터 속임수였던 건 아닌지 의심되고 막막하실 거예요. 내 집 마련을 바라며 모은 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 이미 타인에게 판 분양권을 숨기고 깨끗한 권리인 것처럼 속여 매매대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속하는지는 사기죄 성부에 영향이 없다고 본 사례 흐름이 있는 영역으로, 매도인이 대금을 직접 받지 않았더라도 매수인에 대한 기망과 편취를 가려 다툴 여지가 있습니다. 이중매매 + 권리 깨끗하다는 기망 + 미이전 결합은 ‘분양권 이중매매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 이중매매·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 대금 반환·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 분양권 전매 이중매매 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·이중매매·손해액·신고·반환 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 전매 계약·권리 설명·매매대금 입금 내역 정리.</li>\n<li><strong>② 이중매매·기망</strong> — 이미 타인에게 판 분양권을 숨기고 깨끗하다 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 매매대금·프리미엄 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 대금 반환·환급</strong> — 계약 해제·대금 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 무산과 달리, 이미 타인에게 판 분양권임을 숨기고 깨끗한 권리인 것처럼 속여 대금을 받았는지가 판단의 분기점입니다. 전매 계약서·권리 설명과 선행 매매·미이전 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 전매 계약서·권리 설명 대화·매매대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 이중매매 입증 (즉시)</strong> — 선행 매매·계약자 명단·미이전 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 해제·반환 요구 (병행)</strong> — 계약 해제와 매매대금·프리미엄 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 반환·환급 (2개월 내)</strong> — 계약 해제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">분양권 전매 이중매매 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/guide/fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·이중매매·반환 갈래입니다.</strong></p>\n<ul>\n<li><strong>전매 계약서·프리미엄 약정 (거래 조건)</strong></li>\n<li><strong>권리 깨끗하다는 설명·고지 대화 (기망 정황)</strong></li>\n<li><strong>매매대금·프리미엄 입금 내역 (피해 금액)</strong></li>\n<li><strong>선행 매매·계약자 명단·이전 거부 정황</strong></li>\n<li><strong>시행사·분양사무소 명의 확인 자료</strong></li>\n<li><strong>매도인·중개인·연락처·계좌 정보</strong></li>\n<li><strong>해제·반환 요구·거부 대화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양권은 시행사·분양사무소에 명의자·계약자 정보가 남아 있으므로, 선행 매매 여부와 실제 명의 상태를 확인한 자료를 확보하면 이중매매와 기망을 다투는 데 도움이 됩니다. 권리가 깨끗하다는 매도인의 고지 내용을 대화·계약서로 함께 정리해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이중매매·기망</strong> — 이미 판 분양권을 숨기고 깨끗하다 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 거래 무산인지 처음부터 편취였는지.</li>\n<li><strong>대금 귀속</strong> — 매도인이 대금을 직접 받지 않았어도 편취인지.</li>\n<li><strong>편취액</strong> — 매매대금·프리미엄 전부가 피해액인지.</li>\n<li><strong>매도인 특정</strong> — 명의·계좌·중개 경위로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (부동산 거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 분양권 이중매도와 사기죄의 성립',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속하는지는 사기죄 성부에 영향이 없다고 보았습니다. 갑이 을에게 이중매도한 택지분양권을 순차로 매수한 병·정에게 이중매도 사실을 숨긴 채 자신 명의로 형식적인 매매계약서를 작성해 준 사안에서, 갑이 직접 매매대금을 수령하지 않았더라도 병·정에 대한 사기죄가 성립한다고 판시했습니다. 분양권을 이중매도한 사안을 살펴볼 때에도, 매도인이 대금을 직접 받지 않았더라도 매수인에 대한 기망과 편취를 검토해볼 수 있습니다.',
        takeaway: '이중매매 + 권리 깨끗하다는 기망 + 미이전 결합 시 분양권 이중매매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '거래가 꼬인 것뿐 아닌가요?',
        answer:
          '<strong>이미 판 분양권을 숨기고 깨끗하다 속였는지가 핵심인 영역입니다.</strong> 권리 설명·고지 대화를 확보하세요.',
      },
      {
        question: '이중매매를 어떻게 증명하나요?',
        answer:
          '<strong>선행 매매·계약자 명단·미이전 정황이 핵심 단서인 영역입니다.</strong> 시행사·분양사무소 명의 자료를 확보하세요.',
      },
      {
        question: '매도인이 대금을 안 받았다고 해요.',
        answer:
          '<strong>대금을 직접 받지 않았어도 매수인 기망·편취를 다투는 영역입니다.</strong> 입금처와 거래 경위를 정리하세요.',
      },
      {
        question: '프리미엄까지 줬는데 피해액인가요?',
        answer:
          '<strong>매매대금과 프리미엄 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '매도인이 연락을 피해요.',
        answer:
          '<strong>계약 해제·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 해제·반환 요구 대화를 보관하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/guide/fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '분양권 이중매도 추적', href: '/guide/fraud/fraud-presale-right-double-sale-track' },
      { label: '월세 이중계약 보증금 추적', href: '/guide/fraud/fraud-monthly-rent-double-contract-deposit-track' },
      { label: '부동산 보증금 이중계약', href: '/guide/fraud/fraud-real-estate-deposit-double-contract' },
      { label: '부동산 이중계약 회수 추적', href: '/guide/fraud/fraud-real-estate-double-contract-recovery-track' },
    ],
  },

  // ─── 6. fraud-goods-payment-default-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-goods-payment-default-falsely-accused-defense',
    keyword: '물품대금 미지급 사기 무고 방어',
    questionKeyword: '거래처에서 물품을 납품받아 사업을 이어 왔는데, 거래 당시에는 분명히 대금을 갚을 생각으로 받았고 일부는 결제도 했지만, 갑자기 매출이 끊기고 자금 사정이 나빠지면서 남은 물품대금을 제때 지급하지 못했어요. 그런데 거래처가 ‘처음부터 갚을 생각 없이 물건을 받아 갔다’며 저를 사기로 고소했고, 한순간에 사기범으로 몰려 너무 억울해요. 저는 단지 사정이 어려워 미지급이 생겼을 뿐 처음부터 속일 의도는 없었는데, 이렇게 물품대금 미지급이 사기로 고소된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '물품대금 미지급 사기 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '물품대금 미지급 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '사정이 어려워 물품대금을 못 갚았을 뿐인데 처음부터 속였다며 사기로 고소돼 억울하다면, 편취 고의 판단 기준과 무고 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「거래처에서 물품을 납품받아 사업을 이어 오던 중, 계약 당시에는 분명히 대금을 갚을 생각으로 물건을 받았고 일부는 실제로 결제까지 했지만, 갑작스럽게 매출이 끊기고 거래처가 줄거나 자금 사정이 급격히 나빠지면서 남은 물품대금을 약속한 기일에 지급하지 못하게 된 분의 상황입니다. 단순한 채무불이행이라고 생각하고 사정을 설명하며 변제 방안을 찾던 중, 거래처가 ‘처음부터 갚을 생각 없이 물건만 받아 갔다, 작정한 사기다’라며 형사 고소를 해, 한순간에 사기범으로 몰려 너무 억울하고 막막하실 거예요. 매일 거래로 얼굴을 보던 사이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 거래 당시 변제 의사와 능력이 있었는지, 대금을 갚지 못하게 된 것이 거래 이후의 사정 변화 때문인지를 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 함께 불법영득의 의사 내지 편취의 고의가 있어야 하는 영역입니다. 판례는 사기죄의 주관적 구성요건인 편취의 고의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행 과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 민사상 금전대차에서 단순히 채무를 갚지 못한 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나, 확실한 변제 의사가 없거나 약정한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 금원을 받았다면 편취의 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역입니다. 동시에 형사피고인은 유죄 확정 전까지 무죄로 추정되고 범죄사실 인정은 합리적 의심이 없는 정도의 증명을 요하는 영역으로, 거래 당시의 변제 의사·능력과 사정 변화를 가려 다툴 여지가 있습니다. 변제 의사 있던 거래 + 사후 자금 악화 + 단순 미지급 결합은 ‘편취 고의 부재·채무불이행’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 거래·결제 정리 ② 변제 의사·능력 ③ 사정 변화 ④ 편취 고의 부재 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 물품대금 미지급 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·변제 의사·사정 변화·고의·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 납품 계약·결제 이력·일부 변제 내역 정리.</li>\n<li><strong>② 변제 의사·능력</strong> — 거래 당시 변제 의사·자금 능력이 있었는지 검토.</li>\n<li><strong>③ 사정 변화</strong> — 거래 이후 매출 감소·자금 악화 등 사정 변화 정리.</li>\n<li><strong>④ 편취 고의 부재</strong> — 처음부터 속일 의도가 없었음을 뒷받침할 정황 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 채무불이행과 달리, 거래 당시 변제 의사·능력이 없으면서 갚을 것처럼 가장했는지가 판단의 분기점입니다. 일부 변제·정상 거래 이력과 사후 자금 악화 정황을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 납품 계약·세금계산서·결제 이력·일부 변제 내역을 보존.</li>\n<li><strong>2단계 — 사정 변화 정리 (즉시)</strong> — 거래 이후 매출 감소·거래처 이탈·자금 악화 정황을 구체적으로 정리.</li>\n<li><strong>3단계 — 변제 노력 정리 (병행)</strong> — 변제 의사 표시·분할 변제 제안·협의 시도를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">물품대금 미지급 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·변제 의사·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>납품 계약서·거래 명세·세금계산서 (거래 내용)</strong></li>\n<li><strong>대금 결제·일부 변제 내역 (변제 노력)</strong></li>\n<li><strong>거래 당시 재무·자금 상황 자료 (변제 능력)</strong></li>\n<li><strong>거래 이후 매출 감소·거래처 이탈 자료 (사정 변화)</strong></li>\n<li><strong>변제 의사 표시·협의·분할 변제 제안 기록</strong></li>\n<li><strong>거래처와의 전후 대화·정산 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거래 초기 정상 결제·일부 변제 이력과 거래 이후의 매출 감소·자금 악화를 시간순으로 보여주면, 처음부터의 편취가 아니라 사후 사정 변화에 의한 미지급임을 다투는 데 도움이 됩니다. 변제 의사를 밝히고 협의를 시도한 기록도 함께 정리해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 거래 당시 변제 의사·능력이 없었는지.</li>\n<li><strong>채무불이행 구별</strong> — 단순 미지급인지 처음부터 편취였는지.</li>\n<li><strong>고지의무</strong> — 변제 능력에 관해 허위 고지를 했는지.</li>\n<li><strong>사정 변화</strong> — 거래 이후 자금 악화가 미지급 원인인지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 남으면 피고인의 이익으로 보는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무불이행과 편취 고의의 구별',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 고의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행 과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 한다고 보았습니다. 민사상 금전대차에서 단순히 채무를 갚지 못한 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나, 확실한 변제 의사가 없거나 약정한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 금원을 받았다면 편취의 고의를 인정할 수 있다고 판시했습니다. 물품대금을 제때 지급하지 못한 사안을 살펴볼 때에도, 거래 당시 변제 의사·능력과 사후 사정 변화를 가려 편취 고의 인정 여부를 검토해볼 수 있습니다.',
        takeaway: '변제 의사 있던 거래 + 사후 자금 악화 + 단순 미지급 결합 시 편취 고의 부재·채무불이행 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '못 갚은 것뿐인데 사기가 되나요?',
        answer:
          '<strong>거래 당시 변제 의사·능력이 없으면서 갚을 것처럼 가장했는지가 핵심인 영역입니다.</strong> 정상 거래·일부 변제 이력을 정리하세요.',
      },
      {
        question: '일부는 결제했는데 도움이 되나요?',
        answer:
          '<strong>일부 변제·정상 거래 이력은 편취 고의를 다투는 단서인 영역입니다.</strong> 결제·변제 내역을 빠짐없이 정리하세요.',
      },
      {
        question: '거래 후 자금이 나빠진 건 어떻게 보이죠?',
        answer:
          '<strong>거래 이후 매출 감소·자금 악화로 미지급이 생겼음을 다투는 영역입니다.</strong> 사정 변화 자료를 시간순으로 정리하세요.',
      },
      {
        question: '변제하겠다고 했는데 의미가 있나요?',
        answer:
          '<strong>변제 의사 표시·협의 시도는 편취 의도 부재를 뒷받침하는 단서인 영역입니다.</strong> 협의·분할 변제 제안 기록을 모으세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>거래 경위·변제 의사에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 대여금 미변제 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-default-falsely-accused-defense' },
      { label: '물품 재판매 중간상 무고 방어', href: '/guide/fraud/fraud-goods-resale-middleman-falsely-accused-defense' },
      { label: '대여금 미변제 무고 방어', href: '/guide/fraud/fraud-loan-default-falsely-accused-defense' },
      { label: '지인 대여 민사 형사 구별', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
    ],
  },

  // ─── 7. sex-crime-office-pantry-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-office-pantry-touch-report-track',
    keyword: '회사 탕비실 추행 신고',
    questionKeyword: '회사 탕비실·휴게실에서 커피를 타거나 잠깐 쉬고 있을 때, 직장 상사·동료가 사람이 없는 틈을 타 갑자기 등 뒤에서 몸을 밀착하거나 어깨·허리·손을 잡고 만져 너무 불쾌하고 수치스러웠어요. 좁고 가려진 공간이라 순간적으로 일어난 일이고 강하게 거부할 틈도 없었는데, 갈수록 비슷한 일이 반복되고 다른 직원에게도 그랬다는 말을 들으니 단순 실수가 아니라 추행 같다는 생각이 들어요. 이런 회사 탕비실 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '회사 탕비실 기습추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '회사 탕비실 추행 신고 — 5단계 기습추행 해당성 점검 | 로앤가이드',
      description:
        '탕비실에서 갑자기 몸을 밀착하고 손을 대 수치스러웠다면, 기습추행의 폭행·협박 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 탕비실·휴게실에서 커피를 타거나 잠깐 숨을 돌리던 중, 직장 상사·동료가 사람이 없는 틈을 타 갑자기 등 뒤에서 몸을 밀착하거나 어깨·허리·손을 잡고 만져 너무 불쾌하고 수치스러웠던 분의 상황입니다. 좁고 가려진 공간에서 순식간에 벌어진 일이라 강하게 거부하거나 피할 틈도 없이 당하고, 그 자리에서는 ‘괜히 일을 키우는 건 아닐까, 예민하다는 소리를 들을까’ 싶어 어색하게 넘겼지만, 갈수록 비슷한 일이 반복되고 다른 직원에게도 그런 일이 있었다는 이야기를 들으니, 단순한 실수나 장난이 아니라 추행은 아닌지 의심되고, 신고해도 ‘지나가다 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 매일 같은 공간에서 마주쳐야 하는 동료라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 갑작스러운 신체 접촉처럼 폭행행위 자체가 곧 추행에 해당하는 이른바 기습추행이라면, 상대방의 항거를 곤란하게 할 정도의 폭행·협박이 아니더라도 의사에 반하는 유형력 행사가 있으면 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄의 폭행·협박이 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대해 불법한 유형력을 행사하거나 일반적으로 공포심을 일으킬 정도의 해악을 고지하는 것이라고 보아, 종래보다 그 의미를 다시 정의한 사례 흐름이 있는 영역으로, 갑작스러운 밀착·접촉이 폭행·추행에 해당하는지를 가려 다툴 여지가 있습니다. 탕비실 기습 접촉 + 의사에 반하는 밀착 + 반복·유사 사례 결합은 ‘기습추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행·폭행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회사 탕비실 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 탕비실 상황·동선·상사·동료와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 갑작스러운 밀착·어깨·허리·손 접촉 여부 정리.</li>\n<li><strong>③ 추행·폭행 해당성</strong> — 의사에 반하는 유형력 행사·기습추행에 해당하는지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366·직장 내 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지나가다 닿은 것과 달리, 갑작스러운 밀착·접촉이 의사에 반하는 유형력 행사로서 기습추행에 해당하는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 직원의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 탕비실 상황·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 사무실·복도 CCTV·메시지·다른 직원의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·직장 내 조치 (조사 단계)</strong> — 진술·증거 정리와 직장 내 고충 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회사 탕비실 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>사건 일시·장소·상황 정리 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>사무실·복도·탕비실 주변 CCTV 보존 요청 자료</strong></li>\n<li><strong>상사·동료와 주고받은 메시지 기록</strong></li>\n<li><strong>다른 직원의 유사 경험·목격 진술</strong></li>\n<li><strong>사건 직후 심경·상담·진료 기록</strong></li>\n<li><strong>해바라기센터·1366·직장 고충 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 탕비실 안은 CCTV가 없더라도 출입 동선·복도 CCTV로 시간대를 특정할 수 있으니 보존을 요청하는 것이 중요합니다. 갑작스러운 밀착·접촉이라 그 자리에서 거부하지 못했더라도 동의가 있었던 것은 아니므로, 접촉 정황과 직후 반응을 구체적으로 기록해두면 기습추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 갑작스러운 밀착·접촉이 의사에 반하는 유형력 행사인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 곧 추행에 해당하는지.</li>\n<li><strong>우연 접촉 변명</strong> — 지나가다 닿은 것이라는 변명에 가려지지 않는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 폭행·협박의 의미',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 폭행 또는 협박이 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대해 불법한 유형력을 행사하거나 일반적으로 보아 공포심을 일으킬 정도의 해악을 고지하는 것이라고 보아 종래의 판례 법리를 다시 정의했습니다. 강제추행죄의 구성요건과 성적 자기결정권이라는 보호법익, 성폭력범죄에 대한 사회적 인식 변화 등을 근거로, 폭행·협박이 추행보다 앞서는 경우에도 항거 곤란 정도를 요구하던 종래 기준을 변경한 것입니다. 탕비실에서 갑작스러운 밀착·접촉이 있었던 사안을 살펴볼 때에도, 의사에 반하는 유형력 행사와 추행 해당성을 기준으로 검토해볼 수 있습니다.',
        takeaway: '탕비실 기습 접촉 + 의사에 반하는 밀착 + 반복·유사 사례 결합 시 기습추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '지나가다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>의사에 반하는 밀착·접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·직후 반응을 구체적으로 기록하세요.',
      },
      {
        question: '강하게 거부하지 못했는데 신고할 수 있나요?',
        answer:
          '<strong>갑작스러운 기습 접촉은 항거 곤란을 요구하지 않는 영역입니다.</strong> 당시 상황과 동선을 정리하세요.',
      },
      {
        question: '탕비실 안은 CCTV가 없어요.',
        answer:
          '<strong>출입 동선·복도 CCTV·메시지로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '다른 직원도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·증언은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 직원의 진술을 확보하세요.',
      },
      {
        question: '직장에 알려질까 걱정돼요.',
        answer:
          '<strong>해바라기센터·1366에서 비밀 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담과 직장 내 절차를 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '회식 노래방 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-karaoke-touch-report-track' },
      { label: '헬스장 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-academy-instructor-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-academy-instructor-pretext-touch-report-track',
    keyword: '학원 강사 지도 빙자 추행 신고',
    questionKeyword: '학원·교습소에서 강사에게 수업을 받던 중 강사가 ‘자세를 잡아준다, 손을 잡아 시범을 보여준다, 집중하라’며 지도를 빙자해 어깨·등·손·다리 등에 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 지도인가 싶어 참았지만 갈수록 접촉이 노골적이고 다른 수강생에게도 비슷했다는 말을 들으니 단순 지도가 아니라 지도를 빙자한 추행 같다는 생각이 들어요. 이런 학원 강사 지도 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '학원 강사 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '학원 강사 지도 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '지도라며 필요 이상으로 손을 대거나 몸을 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「학원·교습소·과외 수업에서 강사에게 지도를 받던 중, 강사가 ‘자세를 잡아준다, 손을 잡아 시범을 보여준다, 집중하라’는 명목으로 어깨·등·손·다리 등 수업과 무관한 부위까지 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘원래 이렇게 가르치나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 특정 부위에 집중되며, 다른 수강생에게도 비슷한 일이 있었다는 이야기까지 들으니, 단순한 학습 지도가 아니라 지도를 빙자한 추행은 아닌지 의심되고, 신고해도 ‘가르치다 보면 닿을 수 있다’는 변명에 묻힐까 봐 막막하실 거예요. 배우려고 다닌 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 지도를 가장했더라도 수업과 무관한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 다만 판례는 공동체 내 구성원 사이의 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있는 경우에는 추행에 해당하지 않고, 의례적·사회적으로 상당한 범주를 다소 벗어났더라도 상대방의 성적 자유를 침해하는 정도에 이르지 않으면 강제추행죄에 해당하지 않는다고 본 사례 흐름이 있는 영역으로, 접촉이 지도의 범주를 넘어 성적 자유를 침해하는지를 신중히 가려 다툴 여지가 있습니다. 지도 빙자 + 무관 부위 접촉 + 반복·노골 결합은 ‘지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학원 강사 지도 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 수강 등록·수업 경위·강사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 수업과 무관한 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 지도와 달리, 수업과 무관한 부위를 만지거나 필요 이상 밀착해 지도의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 수강생의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 수업 경위·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 학원 CCTV·수업 일지·메시지·다른 수강생의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 강사 지도 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>수강 등록·수업 일정·결제 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>학원 CCTV·수업 일지 확보 요청 자료</strong></li>\n<li><strong>강사와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 수강생의 유사 경험·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원 CCTV는 보관 기간이 짧아 빨리 지워질 수 있으니 보존을 요청하고 경찰에 신속히 알리는 것이 중요합니다. 접촉이 수업과 무관한 부위에 집중됐는지, 반복됐는지를 구체적으로 기록하면 지도의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 수업과 무관한 부위 접촉·밀착인지.</li>\n<li><strong>지도 범주</strong> — 의례적·사회적으로 상당한 범위를 넘는지.</li>\n<li><strong>성적 자유 침해</strong> — 성적 자유를 침해하는 정도에 이르는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 지도·접촉의 상당성',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행이 어떤 행위에 해당하는지 판단하는 방법을 밝히면서, 직장 등 공동체 내에서 구성원 사이에 발생한 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있는 경우에는 추행에 해당하지 않는다고 보았습니다. 또 신체접촉이 의례적·사회적으로 상당한 범주를 다소 벗어났더라도 상대방의 의사에 반하는 유형력 행사로서 상대방의 성적 자유를 침해하는 정도에까지 이르지 않은 경우에는 강제추행죄에 해당하지 않는다고 판시했습니다. 지도를 빙자한 접촉 사안을 살펴볼 때에도, 접촉이 지도의 상당한 범주를 넘어 성적 자유를 침해하는지를 신중히 가려 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 무관 부위 접촉 + 반복·노골 결합 시 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '가르치다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도의 상당한 범주를 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 참았는데 신고할 수 있나요?',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '다른 수강생도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 수강생의 진술을 확보하세요.',
      },
      {
        question: 'CCTV가 없으면 입증이 어렵나요?',
        answer:
          '<strong>접촉 정황 기록·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
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
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-pretext-touch-report-track' },
      { label: '회식 노래방 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-karaoke-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-call-taxi-driver-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-call-taxi-driver-touch-report-track',
    keyword: '콜택시 기사 추행 신고',
    questionKeyword: '늦은 밤 콜택시·호출 택시를 타고 귀가하던 중 기사가 ‘가방을 받아준다, 안전벨트를 매준다, 길을 묻는다’는 핑계로 손이나 몸을 만지거나, 백미러로 계속 쳐다보다 갑자기 신체를 접촉해 너무 불쾌하고 무서웠어요. 둘만 있는 차 안이라 강하게 거부하기도 어려웠고, 내린 뒤에도 두고두고 수치스러운데, 단순 실수가 아니라 추행 같다는 생각이 들어요. 이런 콜택시 기사 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 어떻게 대응해야 하나요?',
    ctaKeyword: '콜택시 기사 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '콜택시 기사 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '택시 안에서 기사가 핑계를 대며 몸을 만져 수치스럽고 무서웠다면, 추행 신고 절차와 진술 신빙성·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「늦은 밤 콜택시·호출 택시·가맹 택시를 타고 귀가하던 중, 기사가 ‘가방을 받아준다, 안전벨트를 매준다, 길을 묻겠다’는 핑계로 손이나 몸을 만지거나, 운전 중 백미러로 계속 쳐다보다가 신호 대기·하차 무렵 갑자기 신체를 접촉해 너무 불쾌하고 무서웠던 분의 상황입니다. 운전석과 가까운 좁은 공간에 둘만 있는 데다, 목적지까지 가야 해서 강하게 거부하거나 곧바로 내리기도 어려워 어색하게 참고 넘겼지만, 집에 도착해 내린 뒤에도 두고두고 수치스럽고, 단순한 실수가 아니라 추행은 아닌지, 신고해도 ‘운전하다 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 안전하게 귀가하려고 탄 택시에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 운전·안내를 가장했더라도 동의 없이 신체를 만진 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 피고인이 공소사실을 부인하는 성폭력 사건에서 직접증거로 사실상 피해자 진술이 유일한 경우, 그 진술이 합리적 의심을 배제할 만한 신빙성이 있는지는 주요 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적이고 객관적 사정과 모순되지 않는지, 허위로 불리한 진술을 할 동기가 있는지 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 피해자 진술의 신빙성과 객관 정황을 함께 정리해 다툴 여지가 있습니다. 콜택시 동승 + 안내 빙자 접촉 + 밀폐 공간 결합은 ‘콜택시 기사 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콜택시 기사 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 호출·탑승 경위·경로·하차 동선 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 안내·운전 빙자한 동의 없는 신체 접촉 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 운전·안내 명목인지 동의 없는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운전·안내 과정의 우연한 접촉과 달리, 동의 없이 신체를 만졌는지, 그 행위가 객관적으로 성적 수치심·혐오감을 일으키는지가 판단의 분기점입니다. 호출·경로 기록과 접촉 정황·직후 반응을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 호출·배차·경로·결제 기록과 접촉 부위·방식 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 택시 내·외부 CCTV·블랙박스·배차 기록·다른 승객 정황을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">콜택시 기사 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/guide/sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>호출·배차·결제·경로 기록 (동선)</strong></li>\n<li><strong>접촉 부위·방식·직후 반응 기록 (행위 태양)</strong></li>\n<li><strong>택시 내·외부 CCTV·블랙박스 보존 요청 자료</strong></li>\n<li><strong>택시·기사 식별 정보(차량번호·소속) 기록</strong></li>\n<li><strong>사건 직후 지인·가족에게 알린 메시지</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 호출 앱의 배차·경로·결제 기록은 택시와 기사를 특정하는 핵심 자료이므로 캡처해두는 것이 중요합니다. 둘만 있던 공간이라 직접증거가 피해자 진술 중심일 수 있으니, 사건 직후 곧바로 지인에게 알린 메시지·상담 기록을 남겨 진술의 일관성을 뒷받침하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 안내·운전 빙자한 동의 없는 신체 접촉인지.</li>\n<li><strong>진술 신빙성</strong> — 진술이 일관되고 구체적이며 정황에 부합하는지.</li>\n<li><strong>밀폐 공간</strong> — 둘만 있는 차 안의 직접증거 확보.</li>\n<li><strong>객관 정황</strong> — 배차·경로·CCTV·블랙박스가 뒷받침되는지.</li>\n<li><strong>택시·기사 특정</strong> — 차량번호·소속·배차로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성 판단 방법',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 공소사실에 부합하는 직접증거로 사실상 피해자 진술이 유일한 경우, 그 진술이 합리적 의심을 배제할 만한 신빙성이 있는지는 진술 내용의 주요한 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적이고 진술 자체나 객관적으로 확인된 사실과 모순되지 않는지, 허위로 불리한 진술을 할 동기나 이유가 있는지 등을 종합해 신중히 판단해야 한다고 보았습니다. 또 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하며, 강제추행죄 성립에 성욕을 자극·만족시키려는 동기·목적까지 필요한 것은 아니라고 판시했습니다. 택시 안에서 기사의 접촉이 문제 된 사안을 살펴볼 때에도, 진술의 신빙성과 객관 정황을 종합해 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '콜택시 동승 + 안내 빙자 접촉 + 밀폐 공간 결합 시 콜택시 기사 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '운전하다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>동의 없는 신체 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 직후 반응을 구체적으로 기록하세요.',
      },
      {
        question: '둘만 있어서 증거가 없어요.',
        answer:
          '<strong>배차·경로·CCTV·블랙박스로 진술을 뒷받침할 수 있는 영역입니다.</strong> 객관 자료를 신속히 확보하세요.',
      },
      {
        question: '택시와 기사를 어떻게 특정하나요?',
        answer:
          '<strong>호출 앱 배차·경로·결제 기록이 특정의 핵심 단서인 영역입니다.</strong> 배차 내역을 캡처해두세요.',
      },
      {
        question: '내린 뒤에 신고해도 되나요?',
        answer:
          '<strong>사건 직후 지인에게 알린 기록이 진술 신빙성을 뒷받침하는 영역입니다.</strong> 직후 메시지·상담 기록을 남기세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/guide/sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '택시 승객 운전기사 추행 신고', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-touch-report-track' },
      { label: '택시 승객 운전기사 접촉 추적', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-contact-track' },
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '회식 후 택시 추행 추적', href: '/guide/sex-crime/sex-crime-company-dinner-taxi-molestation-track' },
    ],
  },

  // ─── 10. sex-crime-company-dinner-shoulder-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-shoulder-contact-falsely-accused-defense',
    keyword: '회식 어깨동무 신체접촉 추행 무고 방어',
    questionKeyword: '회식 자리에서 분위기가 무르익어 동료들과 어깨동무를 하거나 격려하며 어깨·등을 잠깐 두드린 정도였을 뿐인데, 며칠 뒤 한 직원이 ‘회식에서 추행을 당했다’며 저를 고소했어요. 저는 추행할 의도가 전혀 없었고 여럿이 함께 있는 자리에서 통상적인 격려·친목의 신체접촉이었을 뿐인데, 한순간에 성범죄 가해자로 몰려 너무 억울하고 막막해요. 술자리라 기억도 조각조각이고 목격자 진술도 엇갈리는데, 이렇게 회식 어깨동무 신체접촉이 추행으로 고소된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '회식 어깨동무 신체접촉 추행 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 어깨동무 신체접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '회식에서 격려로 어깨를 두드린 정도인데 추행으로 고소돼 억울하다면, 기습추행 해당성·고의 판단과 무죄추정·진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식 자리에서 분위기가 무르익어 동료들과 어깨동무를 하거나, 수고했다며 어깨·등을 잠깐 두드리거나 격려하는 정도의 신체접촉이 있었을 뿐인데, 며칠 뒤 한 직원이 ‘회식에서 추행을 당했다’며 저를 고소해, 한순간에 성범죄 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 여럿이 함께 있는 자리에서 통상적인 격려·친목의 접촉이었을 뿐이라고 생각하는데도, 술자리라 기억이 조각조각이고 동석자 진술도 엇갈려, 결국 진술 다툼만 남을까 봐 너무 억울하고 막막하실 거예요. 매일 마주쳐야 하는 직장 동료와의 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 접촉이 통상적인 격려·친목의 범주였는지와 추행의 고의가 없었다는 점을 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄가 성립하려면 추행행위와 그에 대한 고의가 인정되어야 하는 영역입니다. 다만 판례는 강제추행죄에 폭행행위 자체가 추행행위로 인정되는 이른바 기습추행이 포함되며, 이때 폭행행위는 상대방의 의사에 반하는 유형력 행사가 있으면 그 힘의 대소강약을 불문한다고 보면서도, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 이전부터의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역입니다. 또 형사피고인은 유죄 확정 전까지 무죄로 추정되고 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하는 영역으로, 접촉의 성격·경위와 고의를 가려 다툴 여지가 있습니다. 격려·친목 접촉 + 통상적 범주 + 진술 엇갈림 결합은 ‘추행 해당성·고의 부재’를 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·관계 정리 ② 접촉 성격 ③ 추행 해당성·고의 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 어깨동무 신체접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 성격·추행 해당성·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 회식 경위·자리 배치·상대와의 관계 정리.</li>\n<li><strong>② 접촉 성격</strong> — 통상적 격려·친목 접촉인지 정리.</li>\n<li><strong>③ 추행 해당성·고의</strong> — 추행행위·고의가 인정될 만한 정황이 있는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대·동석자 진술의 일관성·엇갈림 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상적 격려·친목 접촉인지, 추행행위와 그에 대한 고의가 인정될 만한 정황이 있는지가 판단의 분기점입니다. 자리 배치·접촉 경위와 상대·동석자 진술의 엇갈림을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·관계 자료 보존 (즉시)</strong> — 회식 경위·자리 배치·참석자·전후 대화 기록을 보존.</li>\n<li><strong>2단계 — 접촉 성격 정리 (즉시)</strong> — 접촉 부위·방식·여럿이 있던 정황 등 통상적 범주를 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 상대·동석자 진술의 일관성·엇갈림과 모순을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 어깨동무 신체접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉 성격·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일시·장소·참석자 정리 (관계)</strong></li>\n<li><strong>자리 배치·접촉 부위·방식 정황 기록 (행위 태양)</strong></li>\n<li><strong>식당·노래방 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술의 엇갈림·정황 정리</strong></li>\n<li><strong>평소 관계·전후 대화 기록</strong></li>\n<li><strong>술자리 경위·음주 정도 정리 자료</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 식당·노래방 CCTV는 보관 기간이 짧으니 빨리 보존을 요청하는 것이 중요합니다. 접촉이 여럿이 함께 있는 자리에서의 통상적 격려·친목이었음을 자리 배치·접촉 방식으로 구체적으로 설명하고, 상대·동석자 진술의 엇갈림을 함께 정리하면 추행 해당성·고의를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 통상적 격려·친목 접촉을 넘는 추행인지.</li>\n<li><strong>추행 고의</strong> — 추행행위와 그에 대한 고의가 인정되는지.</li>\n<li><strong>진술 신빙성</strong> — 상대·동석자 진술이 일관되고 정황에 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 남으면 피고인의 이익으로 보는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행 해당성과 추행의 판단 기준',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에 폭행행위 자체가 추행행위로 인정되는 이른바 기습추행이 포함되고, 이때 추행행위와 동시에 저질러지는 폭행행위는 반드시 상대방의 의사를 억압할 정도일 것을 요하지 않으며 의사에 반하는 유형력 행사가 있으면 그 힘의 대소강약을 불문한다고 보았습니다. 나아가 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 것으로, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 이전부터의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 결정해야 한다고 판시했습니다. 회식에서의 신체접촉이 문제 된 사안을 살펴볼 때에도, 접촉의 성격·경위와 추행 해당성·고의를 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '격려·친목 접촉 + 통상적 범주 + 진술 엇갈림 결합 시 추행 해당성·고의 부재 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '격려로 어깨를 두드린 것뿐인데 추행이 되나요?',
        answer:
          '<strong>통상적 격려·친목 접촉을 넘는 추행행위·고의가 핵심인 영역입니다.</strong> 접촉 부위·방식·경위를 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>관계·경위·행위 태양 등 정황으로 고의 부재를 다투는 영역입니다.</strong> 여럿이 있던 상황과 접촉 방식을 정리하세요.',
      },
      {
        question: '술자리라 기억이 잘 안 나요.',
        answer:
          '<strong>음주 정황과 별개로 객관 정황·진술 일관성이 중요한 영역입니다.</strong> CCTV·동석자 진술을 확보하세요.',
      },
      {
        question: '목격자 진술이 엇갈려요.',
        answer:
          '<strong>진술의 일관성·엇갈림은 신빙성 다툼의 핵심인 영역입니다.</strong> 동석자 진술의 모순·정황 불부합을 정리하세요.',
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
      { label: '회식 음주 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-intoxicated-falsely-accused-defense' },
      { label: '회식 동료 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-coworker-accusation-falsely-accused-defense' },
      { label: '회식 후 음주 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '클럽 무도장 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
    ],
  },
];
