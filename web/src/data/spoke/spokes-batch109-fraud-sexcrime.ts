import { SpokePage } from '../spoke-pages';

// batch109 fraud(6) + sex-crime(4) — 10개 (2026-06-26)
//
// 고유 존재 이유:
// 1. fraud-used-car-accident-history-concealment-sale-track — 일반 중고차 분쟁과 분기. '사고이력을 숨기고 무사고처럼 속여 중고차를 판매' 사고이력 은폐 기망 편취 판단형 트랙(victim).
// 2. fraud-gym-membership-prepay-sudden-closure-track — 일반 환불 분쟁과 분기. '장기 회원권을 선결제받고 갑자기 폐업·환불 거부' 선결제 폐업 환불 기망 편취 절차형 트랙(victim).
// 3. fraud-overseas-job-placement-fee-nonexistent-track — 일반 취업 분쟁과 분기. '실재하지 않는 해외 일자리를 미끼로 알선 수수료만 편취' 허위 일자리 알선 수수료 기망 편취 판단형 트랙(victim).
// 4. fraud-wedding-hall-package-double-contract-track — 일반 계약 분쟁과 분기. '같은 날짜·패키지를 이중계약하고 위약·차액을 편취' 예식장 이중계약 위약 기망 편취 절차형 트랙(victim).
// 5. fraud-puppy-adoption-pedigree-health-false-track — 일반 거래 분쟁과 분기. '혈통·건강 상태를 허위 고지해 강아지를 분양·편취' 혈통·건강 허위 고지 기망 편취 판단형 트랙(victim).
// 6. fraud-acquaintance-loan-collateral-misrepresentation-falsely-accused-defense — 일반 사기 무고류와 분기. '담보·자금 사정을 설명했다 지인 금전거래가 사기로 고소됨' 고지·편취 고의·채무불이행 구별 방어 판단형 트랙(accused).
// 7. sex-crime-skincare-shop-care-pretext-touch-report-track — 일반 추행류와 분기. '피부관리실에서 관리를 빙자해 신체에 부적절 접촉' 관리 빙자 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-karaoke-room-confined-space-touch-report-track — 일반 추행류와 분기. '노래방 좁은 공간에서 밀착·강제 신체접촉' 좁은 공간 강제 접촉 추행 신고 절차형 트랙(victim).
// 9. sex-crime-crowded-bus-rush-hour-touch-report-track — 일반 추행류와 분기. '만원 버스 혼잡을 틈타 신체를 추행' 혼잡 틈탄 기습추행 해당성 판단형 트랙(victim).
// 10. sex-crime-photo-shoot-posing-guidance-falsely-accused-defense — 일반 성범죄 무고류와 분기. '사진 촬영 포즈 지도가 추행으로 고소' 포즈 지도·고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch109FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-accident-history-concealment-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-accident-history-concealment-sale-track',
    keyword: '중고차 사고이력 은폐 판매 기망 사기',
    questionKeyword: '중고차를 사면서 ‘완전 무사고 차량이다, 사고 난 적 없다’는 딜러·판매자의 말을 믿고 시세대로 큰돈을 주고 샀어요. 그런데 인수 후 정비소·보험개발원 카히스토리를 조회해보니 큰 사고로 주요 골격까지 수리한 이력이 있었고, 성능점검기록부도 무사고로 허위 기재되어 있었어요. 판매자에게 따지니 ‘몰랐다, 환불은 안 된다’며 발뺌하다 연락을 피하는데, 처음부터 사고이력을 알면서 숨기고 무사고처럼 속여 판 정황이에요. 이런 중고차 사고이력 은폐 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고차 사고이력 은폐·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 사고이력 은폐 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '무사고라는 말을 믿고 산 중고차가 사고이력 은폐로 드러나고 환불도 거부당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매상사·개인 판매자에게서 ‘완전 무사고 차량이다, 단순 교환 외 사고 난 적 없다, 성능점검도 깨끗하다’는 말을 믿고, 사고차보다 비싼 무사고 시세에 맞춰 적지 않은 대금을 주고 차를 인수한 분의 상황입니다. 그런데 막상 받아 정비소 점검이나 보험개발원 카히스토리·사고이력 조회를 해보니, 프레임·필러 등 주요 골격까지 손본 큰 사고 이력이 있었고, 함께 받은 성능·상태점검기록부마저 무사고로 허위 기재되어 있어, 사고차를 무사고 값에 산 셈이 되어 막막하실 거예요. 판매자에게 이를 따지니 ‘나도 몰랐다, 이미 명의이전 끝나 환불은 못 해준다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 상사에서 비슷하게 사고이력을 숨기고 판 사례가 더 있는 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 사고이력을 알면서도 무사고인 것처럼 속이거나 성능점검을 허위로 기재해 무사고 시세에 팔았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 상당한 대가가 일부 지급되었더라도 편취액은 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 사고차의 잔존 가치를 빼더라도 지급한 대금 전부를 기준으로 편취 여부와 죄책을 가려 다툴 여지가 있습니다. 무사고 가장 + 사고이력 은폐·허위 점검 + 환불 거부·발뺌 결합은 ‘사고이력 은폐 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 사고이력·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 사고이력 은폐 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·사고이력 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 무사고 강조 설명·매매계약서·결제 내역 정리.</li>\n<li><strong>② 사고이력·기망 입증</strong> — 카히스토리·정비 견적·허위 성능점검기록부로 은폐를 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 무사고 시세로 지급한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 사고이력을 알면서 무사고인 것처럼 속이거나 성능점검을 허위로 기재했는지가 판단의 분기점입니다. 무사고를 강조한 거래 대화와 사고이력 조회 결과, 같은 판매자의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 무사고 강조 설명·매매계약서·성능점검기록부·결제 내역 캡처 보존.</li>\n<li><strong>2단계 — 사고이력 입증 (즉시)</strong> — 보험개발원 카히스토리·정비소 점검 견적·골격 수리 흔적을 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 사고이력 은폐 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·사고이력·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>무사고 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고차 매매계약서·특약 (계약 내용)</strong></li>\n<li><strong>차량 대금·이전비 결제 내역 (피해 금액)</strong></li>\n<li><strong>보험개발원 카히스토리·사고이력 조회 결과</strong></li>\n<li><strong>성능·상태점검기록부와 실제 수리 흔적 대비 자료</strong></li>\n<li><strong>판매자·매매상사·딜러·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카히스토리·정비소 점검 견적으로 사고이력을 명확히 하고, 판매자가 무사고를 강조한 대화와 허위 성능점검기록부를 대비하면 사고이력 은폐 기망을 다투는 데 도움이 됩니다. 같은 상사에서 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사고이력 은폐</strong> — 사고이력을 알면서 무사고로 속였는지.</li>\n<li><strong>허위 성능점검</strong> — 점검기록부가 허위로 기재됐는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 무사고 시세로 지급한 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 상사·딜러·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·자동차 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액과 대가 일부 지급',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 사기죄 성립에는 영향이 없으므로, 대가가 일부 지급된 경우에도 편취액은 차액이 아니라 교부받은 금원 전부라고 보았습니다. 다만 이익의 가액을 구체적으로 산정할 수 없는 경우에는 가액을 기준으로 가중처벌하는 특정경제범죄법 제3조를 적용할 수 없다고 판시했습니다. 사고차를 무사고 값에 판 사안을 살펴볼 때에도, 차의 잔존 가치를 빼지 않고 지급한 대금 전부를 기준으로 편취 여부와 죄책을 가려 검토해볼 수 있습니다.',
        takeaway: '무사고 가장 + 사고이력 은폐·허위 점검 + 환불 거부 결합 시 사고이력 은폐 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '딜러도 사고이력을 몰랐다는데 사기인가요?',
        answer:
          '<strong>사고이력을 알면서 무사고로 속였는지가 핵심인 영역입니다.</strong> 무사고 강조 대화와 카히스토리 조회 결과를 확보하세요.',
      },
      {
        question: '사고이력은 어떻게 확인하나요?',
        answer:
          '<strong>보험개발원 카히스토리·정비소 점검이 핵심 단서인 영역입니다.</strong> 골격 수리 흔적과 사고 기록을 먼저 확보하세요.',
      },
      {
        question: '성능점검기록부에 무사고로 적혀 있어요.',
        answer:
          '<strong>점검기록부가 허위로 기재됐는지가 기망 판단의 단서인 영역입니다.</strong> 기록부와 실제 수리 흔적을 대비하세요.',
      },
      {
        question: '이미 명의이전을 했는데 돌려받을 수 있나요?',
        answer:
          '<strong>이전을 했어도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 사고이력을 정리해 청구를 준비하세요.',
      },
      {
        question: '같은 상사에서 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 같은 상사의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고차 침수·사고이력 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-accident-history-conceal-track' },
      { label: '중고차 계기판 이력 은폐', href: '/guide/fraud/fraud-used-car-meter-history-concealed' },
      { label: '중고차 침수 피해 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-damage-concealed-track' },
      { label: '중고차 주행거리 이력 조작', href: '/guide/fraud/fraud-used-car-mileage-history-tampering' },
    ],
  },

  // ─── 2. fraud-gym-membership-prepay-sudden-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-membership-prepay-sudden-closure-track',
    keyword: '헬스장 장기회원권 선결제 폐업 환불 기망 사기',
    questionKeyword: '헬스장에서 ‘1년·2년 장기회원권을 끊으면 크게 할인된다, 오래 운영할 거라 걱정 말라’는 말을 믿고 PT까지 묶어 큰돈을 한 번에 선결제했어요. 그런데 얼마 지나지 않아 헬스장이 갑자기 문을 닫고, ‘운영상 사정으로 폐업한다, 환불은 어렵다’며 잔여 회원권 환불도 못 받고 연락도 끊겼어요. 알고 보니 이미 자금난·폐업이 예정된 상태에서 장기회원권만 집중적으로 팔아 결제만 챙긴 정황인데, 이런 헬스장 선결제 폐업 환불 기망을 사기로 신고하고 결제한 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 선결제 폐업 환불 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 선결제 폐업 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '오래 운영한다는 말을 믿고 장기회원권을 선결제했는데 곧 폐업·환불 거부로 잠적당했다면, 형법 제347조 사기·편취 판단과 카드 항변·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「동네 헬스장·피트니스에서 ‘지금 1년·2년 장기회원권을 끊으면 크게 할인된다, 오래 운영할 거니 걱정 말라, PT까지 묶으면 더 싸다’는 말을 믿고, 길게 다닐 생각에 PT 세션과 회원권을 한꺼번에 큰돈으로 선결제한 분의 상황입니다. 그런데 막상 몇 달 다니지도 못한 사이 헬스장이 갑자기 문을 닫고, ‘회사 운영상 사정으로 부득이 폐업하게 됐다, 남은 회원권·PT는 환불이 어렵다’며 일방적으로 폐업·잠적해, 결제한 돈을 쓰지도 못하고 돌려받지도 못하게 되어 막막하실 거예요. 알고 보니 이미 임대료 연체·자금난으로 폐업이 예정된 상태에서 마지막에 장기회원권만 집중적으로 팔아 결제만 챙긴 정황이고, 같은 시기 다른 회원들도 똑같이 당했다면 단순 폐업이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 영업을 지속할 의사·능력이 없는데도 장기 운영을 약속하거나 폐업 예정 사실을 숨기고 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 하고 미필적 고의로도 족하다고 본 사례 흐름이 있는 영역으로, 폐업 직전 결제 집중·자금 사정을 종합해 편취 범의를 가려 다툴 여지가 있습니다. 장기 운영 가장·폐업 예정 은폐 + 선결제 집중 유도 + 환불 거부·잠적 결합은 ‘선결제 폐업 환불 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업 예정·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 카드 항변·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 선결제 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업 예정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 장기 운영·할인 안내·회원권 약관·결제 내역 정리.</li>\n<li><strong>② 폐업 예정·기망</strong> — 폐업 예정·자금난을 숨기고 장기회원권을 팔았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 일부 이용했어도 결제한 회원권·PT 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 카드 항변·환급</strong> — 신용카드 할부항변권·계약 해지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영난 폐업과 달리, 폐업 예정 사실을 숨긴 채 장기회원권을 집중적으로 팔았는지가 판단의 분기점입니다. 장기 운영을 강조한 안내와 폐업 직전 결제 정황, 다른 회원의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 장기 운영·할인 안내·회원권 약관·결제·영수증 내역 캡처 보존.</li>\n<li><strong>2단계 — 폐업 예정 정황 입증 (즉시)</strong> — 폐업 직전 집중 결제·환불 거부 공지·다른 회원 동일 피해를 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·해지 요구 (병행)</strong> — 할부 결제면 신용카드사 할부항변권 행사와 계약 해지를 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 한국소비자원 피해구제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 선결제 폐업 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업 예정·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>장기 운영·할인 안내·홍보 캡처 (거래 조건)</strong></li>\n<li><strong>회원권·PT 약관·환불 규정·계약서 (계약 내용)</strong></li>\n<li><strong>결제·영수증·할부 내역 (피해 금액)</strong></li>\n<li><strong>폐업·환불 거부 공지·안내문 기록</strong></li>\n<li><strong>다른 회원의 동일 피해·단체 채팅 기록</strong></li>\n<li><strong>업체·상호·사업자등록·계좌 정보</strong></li>\n<li><strong>카드 할부항변·계약 해지 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장은 폐업과 함께 안내가 한순간에 사라지므로 장기 운영·할인 안내와 약관·결제 화면을 곧바로 캡처해두는 것이 중요합니다. 폐업 직전 짧은 기간에 장기 결제가 몰린 정황과 다른 회원의 동일 피해를 함께 모으면 폐업 예정 은폐를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 예정·기망</strong> — 폐업 예정·자금난을 숨기고 장기회원권을 팔았는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영난 폐업인지 처음부터 편취였는지.</li>\n<li><strong>결제 집중</strong> — 폐업 직전 장기 결제가 몰렸는지.</li>\n<li><strong>편취액</strong> — 일부 이용했어도 결제한 대금 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 상호·사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·체육시설 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (할부·결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단과 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후 피고인의 재력·환경·범행의 내용·거래의 이행과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 보았습니다. 또 거래 당시를 기준으로 대금을 변제할 의사나 능력이 없음에도 변제할 것처럼 속여 물품 등을 받았다면 사기죄가 성립한다고 판시했습니다. 폐업 예정 상태에서 장기회원권을 집중적으로 팔아 선결제만 받은 사안을 살펴볼 때에도, 거래 당시의 영업 지속 의사·능력과 자금 사정을 종합해 편취 범의를 가려 검토해볼 수 있습니다.',
        takeaway: '장기 운영 가장·폐업 예정 은폐 + 선결제 집중 + 환불 거부 결합 시 선결제 폐업 환불 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 헬스장이 망한 것 아닌가요?',
        answer:
          '<strong>폐업 예정을 숨기고 장기회원권을 집중적으로 팔았는지가 핵심인 영역입니다.</strong> 폐업 직전 결제 정황과 운영 안내를 확보하세요.',
      },
      {
        question: '환불은 카드사로 받을 수 있나요?',
        answer:
          '<strong>할부 결제면 신용카드 할부항변권으로 잔여분 환급을 검토할 수 있는 영역입니다.</strong> 결제 방식과 할부 내역을 확인하세요.',
      },
      {
        question: '몇 달 다닌 회원권도 피해액인가요?',
        answer:
          '<strong>일부 이용했어도 결제한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액과 이용 내역을 정리하세요.',
      },
      {
        question: '다른 회원도 같이 당한 것 같아요.',
        answer:
          '<strong>다수 회원의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 회원 단체 채팅과 폐업 공지를 모으세요.',
      },
      {
        question: 'PT 세션도 환불 대상인가요?',
        answer:
          '<strong>이용하지 못한 PT 잔여 세션도 환급 청구 대상이 될 수 있는 영역입니다.</strong> 잔여 세션과 결제 내역을 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '헬스장 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-membership-prepaid-sudden-closure-track' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-gym-closure-track' },
      { label: '헬스장 폐업 환불', href: '/guide/fraud/fraud-gym-closure-membership-refund' },
      { label: '헬스장 PT 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-pt-prepay-closure-track' },
    ],
  },

  // ─── 3. fraud-overseas-job-placement-fee-nonexistent-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-job-placement-fee-nonexistent-track',
    keyword: '해외 취업 알선 수수료 허위 일자리 기망 사기',
    questionKeyword: '해외 취업 알선 업체·브로커가 ‘현지에 확정된 일자리가 있다, 비자·계약까지 다 해결해주겠다’며 알선 수수료와 비자·항공비 명목으로 큰돈을 먼저 받았어요. 그런데 막상 출국하거나 연락해보니 약속한 일자리는 실재하지 않거나 이미 없던 자리였고, 업체는 ‘채용이 취소됐다, 곧 다른 자리를 알아봐주겠다’며 미루다 수수료 환불을 거부하고 연락이 끊겼어요. 처음부터 일자리가 없는데도 있는 것처럼 속여 수수료만 노린 정황인데, 이런 허위 일자리 알선 수수료 기망을 사기로 신고하고 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '해외 취업 허위 일자리 알선 수수료 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '해외 취업 허위 일자리 알선 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '확정된 해외 일자리가 있다며 알선 수수료를 받았는데 자리가 실재하지 않고 환불도 거부당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 취업 알선 업체·유학원·브로커가 ‘현지에 이미 확정된 일자리가 있다, 합격은 거의 확정이고 비자·근로계약·숙소까지 우리가 다 해결해준다, 출국만 하면 바로 일할 수 있다’는 솔깃한 말을 믿고, 좋은 기회를 놓칠까 봐 알선 수수료와 비자·항공·교육비 명목으로 적지 않은 돈을 먼저 입금한 분의 상황입니다. 그런데 막상 출국을 준비하거나 현지에 연락해보니 약속한 일자리가 실재하지 않거나 이미 마감된 자리였고, 업체는 ‘갑자기 채용이 취소됐다, 곧 다른 더 좋은 자리를 알아봐주겠다’며 차일피일 미루다 끝내 수수료 환불을 거부하고 연락이 끊겨 막막하실 거예요. 알고 보니 처음부터 알선할 일자리가 없는데도 있는 것처럼 꾸며 여러 사람에게서 수수료만 받아온 정황이라면 단순 채용 무산이 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 알선할 일자리나 알선 능력이 없는데도 확정된 일자리가 있는 것처럼 속여 수수료를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 편취에 의한 사기죄에서 편취의 고의가 있었는지는 계약 당시를 기준으로, 일을 완성·이행할 의사나 능력이 없음에도 있는 것처럼 속였는지에 의하여 판단해야 한다고 본 사례 흐름이 있는 영역으로, 수수료를 받을 당시 실제 일자리·알선 능력의 존재 여부를 가려 편취 여부를 다툴 여지가 있습니다. 일자리 실재 가장 + 알선 능력 부재 + 수수료 수령·환불 거부 결합은 ‘허위 일자리 알선 수수료 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 일자리 실재·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 취업 허위 일자리 알선 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·일자리 실재·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 확정 일자리 홍보·알선 계약·수수료 입금 내역 정리.</li>\n<li><strong>② 일자리 실재·기망</strong> — 약속한 일자리·알선 능력이 실재했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 알선 수수료·비자·항공비 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 채용 무산과 달리, 알선할 일자리나 능력이 없는데도 확정된 일자리가 있는 것처럼 속여 수수료를 받았는지가 판단의 분기점입니다. 확정 일자리를 강조한 홍보와 일자리 부재 정황, 같은 업체의 반복 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 확정 일자리 홍보·알선 계약·수수료 입금·영수증 내역 캡처 보존.</li>\n<li><strong>2단계 — 일자리 부재 입증 (즉시)</strong> — 현지 고용주·채용 공고 확인 불가·자리 마감 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 수수료 환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 취업 허위 일자리 알선 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·일자리 실재·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>확정 일자리·합격 보장 홍보 캡처 (거래 조건)</strong></li>\n<li><strong>알선·근로·비자 대행 계약·약정 (계약 내용)</strong></li>\n<li><strong>알선 수수료·비자·항공비 입금 내역 (피해 금액)</strong></li>\n<li><strong>현지 고용주·채용 공고 확인 시도·불가 기록</strong></li>\n<li><strong>채용 취소·지연·환불 거부 대화 기록</strong></li>\n<li><strong>업체·브로커·상호·계좌 정보</strong></li>\n<li><strong>다른 피해 구직자·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 약속한 일자리가 실재하는지 현지 고용주·채용 공고로 확인을 시도한 기록과 그에 대한 회피·불응 정황을 함께 모으면 일자리 실재 가장 기망을 다투는 데 도움이 됩니다. 같은 업체에서 다른 구직자도 똑같이 수수료만 떼인 정황을 정리하면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일자리 실재</strong> — 약속한 일자리가 실재했는지.</li>\n<li><strong>알선 능력</strong> — 알선·채용을 성사시킬 능력이 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 채용 무산인지 처음부터 수수료만 노렸는지.</li>\n<li><strong>편취액</strong> — 수수료·비자·항공비 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·브로커·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (유학·취업알선 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의의 판단 시점과 기준',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물이나 재산상 이익의 취득에 있고, 편취의 범의는 자백이 없는 이상 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 한다고 보았습니다. 특히 일의 대가 등 편취에 의한 사기죄에서 편취의 고의가 있었는지는 계약 당시를 기준으로, 일을 완성할 의사나 능력이 없음에도 완성할 것처럼 속여 대가를 받을 고의가 있었는지에 따라 판단해야 한다고 판시했습니다. 확정된 해외 일자리가 있다며 알선 수수료를 받은 사안을 살펴볼 때에도, 수수료를 받을 당시 실제 일자리·알선 능력의 존재 여부를 기준으로 편취 고의를 가려 검토해볼 수 있습니다.',
        takeaway: '일자리 실재 가장 + 알선 능력 부재 + 수수료 수령·환불 거부 결합 시 허위 일자리 알선 수수료 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '채용이 취소된 것뿐이라는데 사기인가요?',
        answer:
          '<strong>알선할 일자리나 능력 없이 있는 것처럼 속였는지가 핵심인 영역입니다.</strong> 확정 일자리 홍보와 일자리 부재 정황을 확보하세요.',
      },
      {
        question: '일자리가 없었다는 걸 어떻게 증명하나요?',
        answer:
          '<strong>현지 고용주·채용 공고 확인 불가가 핵심 단서인 영역입니다.</strong> 확인 요청과 회피·불응 기록을 모으세요.',
      },
      {
        question: '비자·항공비도 피해액인가요?',
        answer:
          '<strong>수수료와 비자·항공비 등 교부한 금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '다른 자리를 알아봐준다며 미루는데 어쩌죠?',
        answer:
          '<strong>대체 약속 후 환불 거부·잠적은 편취 범의를 의심할 단서인 영역입니다.</strong> 미룬 대화와 거부 내용을 보관하세요.',
      },
      {
        question: '같은 업체에 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 피해 정황은 편취 다툼의 출발점인 영역입니다.</strong> 다른 구직자의 동일 피해와 단체 채팅을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외 취업 알선 수수료 추적', href: '/guide/fraud/fraud-overseas-job-placement-fee-track' },
      { label: '해외 취업 브로커 수수료 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-broker-fee-vanish-track' },
      { label: '해외 취업 비자 수수료 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-visa-fee-track' },
      { label: '허위 채용 교육비 선납 추적', href: '/guide/fraud/fraud-fake-job-offer-training-fee-prepayment-track' },
    ],
  },

  // ─── 4. fraud-wedding-hall-package-double-contract-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-package-double-contract-track',
    keyword: '예식장 패키지 이중계약 위약 기망 사기',
    questionKeyword: '예식장·웨딩 패키지 업체와 ‘이 날짜·홀은 비어 있다, 패키지로 묶으면 더 저렴하다’는 말을 믿고 예약금과 계약금을 입금했어요. 그런데 알고 보니 같은 날짜·홀을 다른 신혼부부에게도 이중으로 계약해 두고, 결국 한쪽에 위약금을 물거나 더 비싼 홀로 옮기게 만들어 차액을 챙긴 정황이었어요. 업체는 ‘착오였다, 위약금은 못 돌려준다’며 발뺌하다 연락을 피하는데, 처음부터 이중계약으로 예약금·위약금을 노린 것 같아요. 이런 예식장 패키지 이중계약 위약 기망을 사기로 신고하고 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '예식장 이중계약 위약 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '예식장 패키지 이중계약 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '비어 있다는 말을 믿고 예약금을 냈는데 같은 날짜를 이중계약해 위약금·차액을 떼였다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「결혼을 준비하며 예식장·웨딩홀·웨딩 패키지 업체와 ‘이 날짜와 홀은 비어 있어 바로 잡을 수 있다, 스드메까지 패키지로 묶으면 훨씬 저렴하다’는 말을 믿고, 인기 날짜를 놓칠까 봐 서둘러 예약금과 계약금을 입금한 분의 상황입니다. 그런데 알고 보니 업체가 같은 날짜·같은 홀을 다른 신혼부부에게도 이중으로 계약해두고, 결국 한쪽에는 ‘일정이 겹쳤다’며 위약금을 떠넘기거나 더 비싼 홀·상품으로 옮기게 만들어 차액을 챙긴 정황이라, 평생 한 번뿐인 행사를 앞두고 큰돈이 묶여 막막하실 거예요. 업체는 ‘단순한 예약 착오다, 약관상 위약금은 돌려줄 수 없다’며 발뺌하다 점점 연락을 피하고, 처음부터 이중계약으로 예약금·위약금을 노린 건 아닌지 의심되면 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 이행할 의사·능력 없이 날짜·홀이 비어 있는 것처럼 속이거나 이미 다른 계약이 있는 사실을 숨기고 예약금·계약금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 편취에 의한 사기죄 성립 여부는 계약 당시를 기준으로 계약을 이행할 의사나 능력이 없음에도 이행할 것처럼 속였는지로 판단해야 하고, 계약의 내용·체결 경위·이행과정을 종합해야 한다고 본 사례 흐름이 있는 영역으로, 이중계약 정황과 이행 의사를 가려 편취 여부를 다툴 여지가 있습니다. 빈 날짜 가장·이중계약 은폐 + 예약금 수령 + 위약·차액 전가 결합은 ‘예식장 이중계약 위약 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 이중계약·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 패키지 이중계약 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·이중계약·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 빈 날짜·패키지 안내·예식 계약서·예약금 입금 내역 정리.</li>\n<li><strong>② 이중계약·기망</strong> — 같은 날짜·홀을 다른 부부와 이중계약했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 예약금·계약금·위약금·차액 등 교부 금액 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 송금 계좌 지급정지·계약 해제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 예약 착오와 달리, 이행할 의사·능력 없이 빈 날짜인 척하거나 이미 다른 계약이 있는 사실을 숨기고 예약금을 받았는지가 판단의 분기점입니다. 빈 날짜·단독 계약을 강조한 안내와 다른 부부와의 이중계약 정황, 위약·차액 전가 경위를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 빈 날짜·패키지 안내·예식 계약서·예약금·계약금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 이중계약 입증 (즉시)</strong> — 같은 날짜·홀의 다른 계약 존재·일정 변경 통보·위약금 청구 정황을 확보.</li>\n<li><strong>3단계 — 지급정지·해제 요구 (병행)</strong> — 송금 계좌 지급정지를 요청하고 계약 해제·예약금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 한국소비자원 피해구제·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 패키지 이중계약 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·이중계약·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>빈 날짜·패키지·단독 계약 강조 캡처 (거래 조건)</strong></li>\n<li><strong>예식·패키지 계약서·약관·특약 (계약 내용)</strong></li>\n<li><strong>예약금·계약금·위약금·차액 결제 내역 (피해 금액)</strong></li>\n<li><strong>같은 날짜·홀 이중계약 존재 정황 자료</strong></li>\n<li><strong>일정 변경·홀 변경 통보·위약금 청구 기록</strong></li>\n<li><strong>업체·상호·담당자·계좌 정보</strong></li>\n<li><strong>반환 요청·거부 대화 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 날짜·홀에 다른 계약이 있었다는 사실과 일정·홀 변경을 통보한 경위를 함께 모으면 이중계약 기망을 다투는 데 도움이 됩니다. 계약 당시 빈 날짜·단독 계약이라고 강조한 안내 대화와 위약금·차액을 전가한 정황을 캡처해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이중계약·기망</strong> — 같은 날짜·홀을 이중계약하고 숨겼는지.</li>\n<li><strong>이행 의사</strong> — 계약을 이행할 의사·능력이 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 위약·차액을 노렸는지.</li>\n<li><strong>편취액</strong> — 예약금·위약금·차액 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·웨딩 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 기준 시점과 판단 방법',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물이나 재산상 이익의 취득에 있고, 편취의 범의는 자백이 없는 이상 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 한다고 보았습니다. 특히 공사대금 등 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로, 계약을 완성·이행할 의사나 능력이 없음에도 이행할 것처럼 속여 대금을 받을 고의가 있었는지에 의하여 판단해야 하고, 계약의 내용·체결 경위·이행과정과 결과를 종합해야 한다고 판시했습니다. 같은 날짜·홀을 이중계약하고 예약금을 받은 사안을 살펴볼 때에도, 계약 당시의 이행 의사·능력과 이중계약 정황을 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '빈 날짜 가장·이중계약 은폐 + 예약금 수령 + 위약·차액 전가 결합 시 예식장 이중계약 위약 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '단순 예약 착오 아닌가요?',
        answer:
          '<strong>이행 의사·능력 없이 빈 날짜인 척하거나 이중계약을 숨겼는지가 핵심인 영역입니다.</strong> 빈 날짜·단독 계약 안내 대화를 확보하세요.',
      },
      {
        question: '같은 날짜에 다른 부부도 계약돼 있었어요.',
        answer:
          '<strong>같은 날짜·홀의 이중계약 존재는 기망 정황의 핵심 단서인 영역입니다.</strong> 다른 계약 존재와 계약 시점을 확인하세요.',
      },
      {
        question: '약관상 위약금은 못 돌려준다는데 맞나요?',
        answer:
          '<strong>이중계약으로 인한 불이행이면 위약금 귀속을 다툴 수 있는 영역입니다.</strong> 위약금 청구 경위와 약관을 정리하세요.',
      },
      {
        question: '더 비싼 홀로 옮기게 한 차액도 피해인가요?',
        answer:
          '<strong>전가된 차액도 편취액에 포함될 수 있는 영역입니다.</strong> 홀 변경 통보와 차액 결제 내역을 모으세요.',
      },
      {
        question: '예약금을 돌려받으려면 어떻게 하나요?',
        answer:
          '<strong>지급정지·계약 해제·민사 반환으로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 지급정지를 신속히 요청하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '예식장 패키지 허위 견적 추적', href: '/guide/fraud/fraud-wedding-hall-package-false-estimate-track' },
      { label: '예식장 선결제 취소 환불거부 추적', href: '/guide/fraud/fraud-wedding-hall-prepaid-cancellation-no-refund-track' },
      { label: '예식장 선결제 취소 추적', href: '/guide/fraud/fraud-wedding-hall-prepay-cancel-track' },
      { label: '아파트 분양권 이중계약 추적', href: '/guide/fraud/fraud-apartment-presale-right-double-contract-track' },
    ],
  },

  // ─── 5. fraud-puppy-adoption-pedigree-health-false-track ───
  {
    domain: 'fraud',
    slug: 'fraud-puppy-adoption-pedigree-health-false-track',
    keyword: '분양 강아지 혈통 건강 허위 고지 기망 사기',
    questionKeyword: '강아지를 분양받으면서 ‘순종 혈통이고 혈통서도 있다, 건강검진 끝났고 아픈 데 없다’는 분양업자·펫샵의 말을 믿고 분양비를 입금했어요. 그런데 데려온 지 얼마 안 돼 강아지가 심하게 아파 병원에 갔더니 분양 전부터 있던 질병이었고, 받은 혈통서도 위조이거나 다른 개의 것이며 실제로는 잡종에 가까웠어요. 업자에게 따지니 ‘몰랐다, 환불·치료비는 못 준다’며 발뺌하다 연락을 피하는데, 처음부터 혈통·건강을 허위로 고지해 분양비를 챙긴 정황이에요. 이런 강아지 혈통·건강 허위 고지 기망을 사기로 신고하고 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '강아지 혈통·건강 허위 고지 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '강아지 혈통·건강 허위 분양 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '순종·건강하다는 말을 믿고 분양받은 강아지가 병들고 혈통서도 위조로 드러났다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「반려견을 들이며 분양업자·펫샵·가정분양자에게서 ‘이 아이는 순종 혈통이고 혈통서도 다 있다, 건강검진까지 마쳐 아픈 데 하나 없다, 예방접종도 했다’는 말을 믿고, 건강하고 혈통 좋은 아이라는 생각에 적지 않은 분양비를 입금하고 강아지를 데려온 분의 상황입니다. 그런데 막상 며칠 지나지 않아 강아지가 설사·구토·기침으로 심하게 아파 동물병원에 데려가니 파보·홍역 등 분양 전부터 있던 질병으로 진단되고, 함께 받은 혈통서마저 위조이거나 다른 개의 것이어서 실제로는 표시된 품종·혈통과 다른 정황이라, 아픈 아이를 돌보며 치료비까지 떠안아 막막하실 거예요. 업자에게 이를 따지니 ‘나도 몰랐다, 환불도 치료비도 못 준다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 곳에서 비슷하게 아픈 강아지를 혈통서까지 붙여 판 사례가 더 있는 정황까지 보이면 단순 운이 나빴던 게 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 질병·혈통을 알면서도 건강한 순종인 것처럼 허위로 고지하거나 혈통서를 위조해 분양비를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재물편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 그 이익이 결과적으로 누구에게 귀속하는지는 사기죄의 성부에 영향이 없다고 본 사례 흐름이 있는 영역으로, 분양 대가가 일부 상응하더라도 기망으로 분양비를 받았는지를 기준으로 편취를 가려 다툴 여지가 있습니다. 순종·건강 가장 + 혈통서 위조·질병 은폐 + 환불 거부·발뺌 결합은 ‘혈통·건강 허위 고지 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 혈통·질병·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 강아지 혈통·건강 허위 분양 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·혈통/질병 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 순종·건강 강조 설명·분양계약서·분양비 입금 내역 정리.</li>\n<li><strong>② 혈통·질병·기망 입증</strong> — 동물병원 진단서·혈통서 진위·품종 확인으로 허위 고지를 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 분양비와 치료비 등 손해를 함께 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 운·체질 문제와 달리, 분양 전 질병이나 혈통을 알면서도 건강한 순종인 것처럼 허위로 고지했는지가 판단의 분기점입니다. 순종·건강을 강조한 거래 대화와 진단서·혈통서 진위, 같은 곳의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 순종·건강 강조 설명·분양계약서·분양비 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 질병·혈통 입증 (즉시)</strong> — 동물병원 진단서·발병 시점 소견·혈통서 진위·품종 확인을 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 환불·치료비를 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">강아지 혈통·건강 허위 분양 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·혈통/질병·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>순종·건강 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>분양계약서·건강 보증 약정 (계약 내용)</strong></li>\n<li><strong>분양비·치료비 결제·영수증 내역 (피해 금액)</strong></li>\n<li><strong>동물병원 진단서·발병 시점 소견</strong></li>\n<li><strong>혈통서 진위·품종 확인 자료</strong></li>\n<li><strong>분양업자·펫샵·상호·계좌 정보</strong></li>\n<li><strong>환불·치료비 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동물병원 진단서로 분양 전부터 있던 질병임을 명확히 하고, 업자가 순종·건강을 강조한 대화와 위조 혈통서를 대비하면 허위 고지 기망을 다투는 데 도움이 됩니다. 같은 곳에서 다른 사람에게도 아픈 강아지를 판 흔적을 함께 모으면 반복 판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>질병 은폐</strong> — 분양 전 질병을 알면서 건강하다고 속였는지.</li>\n<li><strong>혈통 허위</strong> — 혈통서가 위조이거나 다른 개의 것인지.</li>\n<li><strong>편취 범의</strong> — 업자도 몰랐는지 처음부터 편취였는지.</li>\n<li><strong>편취·손해액</strong> — 분양비와 치료비가 피해에 포함되는지.</li>\n<li><strong>판매자 특정</strong> — 업자·펫샵·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (반려동물 분양 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 재물교부와 사기죄 성립',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 재물편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물의 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속하는지는 사기죄의 성부에 아무런 영향이 없다고 보았습니다. 또 기망행위로 제3자에게 재물을 교부받게 한 경우에도 일정한 요건 아래 사기죄가 성립한다고 판시했습니다. 혈통·건강을 허위로 고지해 강아지를 분양하고 분양비를 받은 사안을 살펴볼 때에도, 분양 대가가 일부 상응하더라도 기망으로 재물의 교부를 받았는지를 기준으로 사기 성립을 검토해볼 수 있습니다.',
        takeaway: '순종·건강 가장 + 혈통서 위조·질병 은폐 + 환불 거부 결합 시 혈통·건강 허위 고지 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '데려온 뒤 아픈 건데 사기인가요?',
        answer:
          '<strong>분양 전부터 있던 질병을 알면서 건강하다고 속였는지가 핵심인 영역입니다.</strong> 진단서의 발병 시점 소견을 확보하세요.',
      },
      {
        question: '분양 전 질병인 걸 어떻게 증명하나요?',
        answer:
          '<strong>동물병원 진단서·발병 경과가 핵심 단서인 영역입니다.</strong> 데려온 직후 진료 기록을 빠르게 확보하세요.',
      },
      {
        question: '혈통서를 받았는데도 잡종일 수 있나요?',
        answer:
          '<strong>혈통서가 위조이거나 다른 개의 것일 수 있는 영역입니다.</strong> 혈통서 진위와 품종 확인을 진행하세요.',
      },
      {
        question: '치료비도 받을 수 있나요?',
        answer:
          '<strong>분양비와 함께 치료비 손해도 청구를 검토할 수 있는 영역입니다.</strong> 진료비 영수증과 진단 자료를 모으세요.',
      },
      {
        question: '같은 곳에서 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 분양처의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '반려동물 분양 허위 매물 추적', href: '/guide/fraud/fraud-pet-adoption-false-listing-track' },
      { label: '강아지 가짜 혈통서 추적', href: '/guide/fraud/fraud-puppy-fake-pedigree-track' },
      { label: '펫샵 혈통 위조 다른 품종 추적', href: '/guide/fraud/fraud-pet-shop-pedigree-falsified-different-breed-track' },
      { label: '강아지 온라인 분양 질병 추적', href: '/guide/fraud/fraud-pet-puppy-online-sale-sickness-track' },
    ],
  },

  // ─── 6. fraud-acquaintance-loan-collateral-misrepresentation-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-acquaintance-loan-collateral-misrepresentation-falsely-accused-defense',
    keyword: '지인 금전거래 담보 설명 사기 고의 무고 방어',
    questionKeyword: '지인에게 급한 사정으로 돈을 빌리면서 ‘담보가 될 만한 게 있다, 곧 들어올 돈으로 갚겠다’고 설명하고 차용했는데, 사정이 나빠져 약속한 날짜에 갚지 못했어요. 그러자 상대가 ‘처음부터 담보도 없고 갚을 마음도 없이 속여 돈을 가로챘다’며 저를 사기로 고소했어요. 저는 빌릴 당시 갚을 의사와 일정한 변제 자력이 있었고 담보 사정도 사실대로 말했다고 생각하는데, 단지 못 갚았다는 이유로 사기범으로 몰려 너무 억울해요. 이렇게 지인 금전거래 담보 설명이 사기 고의로 고소된 상황에서 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '지인 금전거래 담보 설명 편취 고의 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '지인 금전거래 담보 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '담보·변제 사정을 설명하고 빌렸는데 못 갚았다는 이유로 사기 고소를 당해 억울하다면, 편취 고의 판단 시점과 채무불이행 구별 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가까운 지인·친구·동료에게 급한 사정으로 돈을 빌리면서 ‘담보가 될 만한 자산이나 들어올 돈이 있다, 그걸로 약속한 날까지 갚겠다’고 사정을 설명하고 차용증·계좌이체로 돈을 빌렸는데, 이후 거래처 사정 악화·수입 감소·예상 밖의 지출 등으로 형편이 나빠져 약속한 변제기일에 돈을 제때 갚지 못하게 된 분의 상황입니다. 그러자 빌려준 상대가 ‘처음부터 담보도 없으면서 있는 것처럼, 갚을 마음도 없으면서 갚을 것처럼 속여 돈을 가로챘다’며 저를 사기로 고소해, 한순간에 사기범으로 몰려 너무 억울하고 막막하실 거예요. 빌릴 당시에는 분명히 갚을 의사가 있었고 일정한 변제 자력도 있었으며 담보·변제 사정도 사실대로 말했다고 생각하는데, 단지 결과적으로 못 갚았다는 이유만으로 형사 처벌까지 받게 될까 봐 더 답답하셨을 거예요. 혐의를 받고 있다면, 돈을 빌릴 당시의 변제 의사·자력과 담보·자금 사정을 사실대로 설명한 경위를 차분히 정리해 편취 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 편취의 고의가 인정되어야 하고, 그 판단은 행위 당시를 기준으로 하는 영역입니다. 판례는 사기죄의 편취 고의는 자백이 없는 한 범행 전후의 재력·환경·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 민사상 금전대차에서 채무불이행 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나, 확실한 변제 의사가 없거나 변제기 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 차용한 경우에는 편취 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 사후의 변제 실패만으로 곧바로 편취 범의를 단정할 수 없고, 담보·변제 사정을 사실대로 고지했는지를 가려 다툴 여지가 있는 영역입니다. 변제 의사·자력 보유 + 담보·사정 사실 고지 + 사후 변제 실패 결합은 ‘편취 고의 부재·채무불이행 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 거래·차용 경위 정리 ② 변제 의사·자력 ③ 담보·고지 내용 ④ 편취 고의 ⑤ 채무불이행 구별·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 금전거래 담보 설명 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·변제 의사·담보 고지·편취 고의·채무불이행 구별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·차용 경위 정리</strong> — 차용 사유·조건·차용증·입금 내역과 그 경위 정리.</li>\n<li><strong>② 변제 의사·자력</strong> — 빌릴 당시 갚을 의사·변제 자력이 있었는지 정리.</li>\n<li><strong>③ 담보·고지 내용</strong> — 담보·자금 사정을 사실대로 고지했는지 자료 정리.</li>\n<li><strong>④ 편취 고의</strong> — 행위 당시 기준으로 편취의 범의가 인정되는지 검토.</li>\n<li><strong>⑤ 채무불이행 구별·방어</strong> — 사후 변제 실패가 민사 채무불이행에 그치는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 갚을 의사·자력 없이 담보·변제 사정을 속였는지(편취 고의), 아니면 변제 의사·자력이 있었으나 사후에 형편이 나빠져 못 갚은 것(채무불이행)인지가 판단의 분기점입니다. 차용 당시의 변제 자력과 담보·사정을 사실대로 고지한 정황, 변제 노력을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·차용 자료 보존 (즉시)</strong> — 차용 사유·조건·차용증·입금·변제 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 변제 자력·담보 고지 정리 (즉시)</strong> — 차용 당시 소득·자산·담보 사정과 그 고지 정황을 자료로 정리.</li>\n<li><strong>3단계 — 편취 고의·변제 노력 검토 (병행)</strong> — 행위 당시 변제 의사·자력과 이후 변제·분할상환 시도 정황을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 채무불이행 구별·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 금전거래 담보 설명 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·변제 자력·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용 사유·조건·약정 대화·차용증 (거래 경위)</strong></li>\n<li><strong>차용금 입금·변제·이자 지급 내역 (자금 흐름)</strong></li>\n<li><strong>차용 당시 소득·자산·통장 등 변제 자력 자료</strong></li>\n<li><strong>담보·자금 사정 고지 대화·자료 (고지 내용)</strong></li>\n<li><strong>형편 악화·변제 곤란 경위 자료(수입 감소 등)</strong></li>\n<li><strong>변제·분할상환·협의 시도 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차용 당시의 소득·자산과 담보·자금 사정을 사실대로 알린 대화를 정리하면 편취 고의가 아니라 통상의 금전거래였음을 다투는 데 도움이 됩니다. 이후의 일부 변제·이자 지급·분할상환 협의 기록을 함께 모아 채무불이행과의 구별을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 행위 당시 갚을 의사·자력이 있었는지.</li>\n<li><strong>담보·고지</strong> — 담보·자금 사정을 사실대로 고지했는지.</li>\n<li><strong>변제 자력</strong> — 차용 당시 변제 능력이 있었는지.</li>\n<li><strong>채무불이행 구별</strong> — 사후 변제 실패가 민사 채무불이행에 그치는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용금 편취 고의와 고지의무',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 요건인 기망은 거래에서 서로 지켜야 할 신의성실의 의무를 저버리는 모든 행위를 말하고, 거래 상대방이 일정한 사정을 고지받았더라면 거래하지 않았을 관계가 인정되면 신의칙상 그 사정을 고지할 의무가 있어 이를 묵비하면 기망이 될 수 있다고 보았습니다. 또 편취의 고의는 자백이 없는 한 범행 전후의 재력·환경·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 민사상 채무불이행 사실만으로 곧바로 차용금 편취 고의를 인정할 수는 없으나 확실한 변제 의사·능력 없이 변제할 것처럼 가장해 차용한 경우에는 편취 고의를 인정할 수 있다고 판시했습니다. 담보·변제 사정을 설명하고 빌렸다 못 갚은 사안을 살펴볼 때에도, 차용 당시의 변제 의사·자력과 사실대로 고지했는지를 기준으로 편취 고의를 다투고 채무불이행과 구별해 검토해볼 수 있습니다.',
        takeaway: '변제 의사·자력 보유 + 담보·사정 사실 고지 + 사후 변제 실패 결합 시 편취 고의 부재·채무불이행 구별 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '돈을 못 갚으면 무조건 사기인가요?',
        answer:
          '<strong>행위 당시 갚을 의사·자력이 있었는지가 핵심인 영역입니다.</strong> 변제 실패가 사후 사정임을 보여주는 자료를 정리하세요.',
      },
      {
        question: '담보가 사실은 부족했는데 불리한가요?',
        answer:
          '<strong>담보·자금 사정을 사실대로 고지했는지가 기망 판단의 핵심인 영역입니다.</strong> 담보를 설명한 대화와 자료를 정리하세요.',
      },
      {
        question: '차용 당시 갚을 능력을 어떻게 보이죠?',
        answer:
          '<strong>당시 소득·자산·통장 내역이 변제 자력의 핵심 자료인 영역입니다.</strong> 차용 시점의 재정 자료를 모으세요.',
      },
      {
        question: '일부라도 갚은 게 도움이 되나요?',
        answer:
          '<strong>일부 변제·이자 지급·분할상환 시도는 편취 고의 부재를 뒷받침하는 단서인 영역입니다.</strong> 변제·협의 기록을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>차용 경위·변제 자력·담보 고지에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 대여금 민사·형사 구별', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '지인 대여금 미변제 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-default-falsely-accused-defense' },
      { label: '변제의사 가장 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense' },
      { label: '개인 대여 이중담보 무고 방어', href: '/guide/fraud/fraud-private-loan-double-collateral-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-skincare-shop-care-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-skincare-shop-care-pretext-touch-report-track',
    keyword: '피부관리실 관리 빙자 추행 신고',
    questionKeyword: '피부관리실·에스테틱에서 관리를 받던 중, 관리사가 ‘림프 마사지를 한다, 라인을 잡아준다, 관리 부위를 확인한다’며 가슴 주변·허벅지 안쪽 등 관리와 무관한 부위까지 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 관리 과정인가 싶어 참았지만 갈수록 접촉이 노골적이고 관리와 무관한 부위에 집중되며, 다른 손님도 비슷한 일을 겪었다는 말을 들으니 단순 관리가 아니라 추행 같다는 생각이 들어요. 이런 피부관리실 관리 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '피부관리실 관리 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '피부관리실 관리 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '관리를 빙자해 민감한 부위에 필요 이상으로 손을 대거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「피부관리실·에스테틱·체형관리숍에서 관리를 받던 중, 관리사가 ‘림프 마사지를 한다, 라인을 잡아준다, 관리 부위 상태를 확인한다’는 명목으로 가슴 주변·허벅지 안쪽·골반 등 관리와 직접 관련 없는 민감한 부위에까지 필요 이상으로 손을 대거나, 몸을 바짝 붙이고 받쳐주는 척하며 신체를 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘피부·체형 관리가 원래 이렇게 손이 많이 가나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 관리와 무관한 부위에 집중되며, 칸막이 안이라 다른 사람 눈에 잘 띄지 않는 점을 이용하는 듯하고, 다른 손님도 비슷한 일을 겪었다는 이야기까지 들으니, 단순한 관리가 아니라 관리를 빙자한 추행은 아닌지 의심되고, 신고해도 ‘관리 과정에서 닿은 것뿐’이라는 변명에 묻힐까 봐 막막하실 거예요. 편하게 관리받으러 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 관리를 가장했더라도 관리와 무관한 민감 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄의 폭행은 상대방의 항거를 곤란하게 할 정도일 것을 요하지 않고, 상대방의 신체에 대한 불법한 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 본 사례 흐름이 있는 영역으로, 관리를 빙자한 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 관리 빙자 + 무관 부위 접촉 + 밀착·반복 결합은 ‘관리 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 피부관리실 관리 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 예약·결제·관리 형태·관리사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 관리와 무관한 민감 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 관리 범주를 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자연스러운 관리와 달리, 관리와 무관한 민감 부위를 만지거나 필요 이상 밀착해 관리의 범주를 넘어 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 손님의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 관리 형태·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 매장 CCTV·예약·결제·메시지·다른 손님의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">피부관리실 관리 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약·결제·관리 프로그램 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>매장 CCTV·관리실 동선 확보 요청 자료</strong></li>\n<li><strong>관리사와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 손님의 유사 경험·후기·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 칸막이 안이라 직접 목격자가 없어도 예약·결제 기록, 직후 메시지, 다른 손님의 유사 경험으로 정황을 보강할 수 있습니다. 접촉이 관리와 무관한 민감 부위에 집중됐는지, 반복됐는지를 구체적으로 기록하면 관리의 범주를 넘는 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 관리와 무관한 부위 접촉·밀착인지.</li>\n<li><strong>관리 범주</strong> — 관리상 자연스러운 접촉의 범위를 넘는지.</li>\n<li><strong>유형력 행사</strong> — 의사에 반하는 불법한 유형력이 있었는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 폭행의 의미',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 폭행 또는 협박의 의미를 다시 정의하면서, 그 폭행 또는 협박은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대하여 불법한 유형력을 행사하거나 일반적으로 보아 상대방에게 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아야 한다고 판시했습니다. 또 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 보았습니다. 관리를 빙자한 접촉 사안을 살펴볼 때에도, 의사에 반하는 유형력의 행사가 있었는지와 접촉이 관리의 범주를 넘어 성적 자유를 침해하는지를 가려 검토해볼 수 있습니다.',
        takeaway: '관리 빙자 + 무관 부위 접촉 + 밀착·반복 결합 시 관리 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '관리하다 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>관리의 범주를 넘어 성적 자유를 침해하는 접촉인지·의사에 반하는 유형력이 있었는지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 관리 과정인 줄 알고 참았어요.',
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
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '네일샵 시술 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-nail-salon-service-pretext-touch-report-track' },
      { label: '학원 강사 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-karaoke-room-confined-space-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-karaoke-room-confined-space-touch-report-track',
    keyword: '노래방 좁은 공간 강제 신체접촉 추행 신고',
    questionKeyword: '노래방 좁은 룸에서 함께 있던 상대가 노래·춤·건배를 핑계로 자꾸 가까이 붙더니, 어깨동무·포옹을 하거나 허리·허벅지에 손을 올리는 등 좁은 공간을 이용해 강제로 신체를 접촉해 너무 불쾌하고 수치스러웠어요. 자리를 피하려 해도 룸이 좁고 출입이 막혀 빠져나가기 어려웠고, 거부 의사를 보여도 ‘분위기 좋자고 그런 거다’라며 계속됐어요. 좁은 룸과 어두운 조명 때문에 그 자리에서 강하게 항의하기도 어려웠는데, 이런 노래방 좁은 공간 강제 신체접촉 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '노래방 좁은 공간 강제 접촉 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노래방 좁은 공간 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '노래방 좁은 룸에서 밀착·강제 신체접촉을 당해 수치스러웠다면, 강제추행 신고 절차와 증거 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「노래방·코인노래방·룸형 술자리의 좁은 룸에서 함께 있던 상대·일행이 노래·춤·건배·자리 이동을 핑계로 자꾸 가까이 붙더니, 어깨동무·포옹을 하거나 허리·허벅지·엉덩이에 손을 올리는 등 좁은 공간을 이용해 의사에 반해 신체를 접촉해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 자리를 피하거나 빠져나가려 해도 룸이 좁고 출입구 쪽이 막혀 있어 쉽지 않았고, 불편한 기색이나 거부 의사를 보여도 ‘분위기 좋자고 그런 것뿐이다, 예민하게 굴지 마라’며 접촉이 계속되어, 어두운 조명과 시끄러운 음악 속에서 그 자리에서 강하게 항의하거나 곧바로 신고하기도 어려운 상황에서 당하고 나니, 신고해도 ‘좁은 데서 어쩌다 닿은 일’로 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 좁은 공간을 빌렸더라도 의사에 반해 어깨·허리·허벅지 등을 만지거나 끌어안은 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 성폭력 사건에서 직접증거로 사실상 피해자의 진술이 유일한 경우 그 진술이 합리적인 의심을 배제할 신빙성이 있는지를 진술의 일관성·구체성·정황 부합 여부 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 좁은 공간의 접촉이 의사에 반하는 추행에 해당하는지와 진술의 신빙성을 가려 다툴 여지가 있습니다. 좁은 룸 밀착 + 의사에 반하는 신체접촉 + 출입 곤란·분위기 결합은 ‘좁은 공간 강제 접촉 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노래방 좁은 공간 강제 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 일시·룸·일행 구성·가해자와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 밀착·어깨·허리·허벅지 접촉·끌어안기 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 분위기·좁은 공간을 빌린 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 데서 우연히 닿았다는 변명과 달리, 의사에 반해 밀착하고 어깨·허리·허벅지를 만지거나 끌어안았는지가 판단의 분기점입니다. 접촉 부위·방식과 거부 의사 표시, 일행·목격 정황과 진술의 일관성을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 일시·룸·접촉 부위·방식·거부 의사 표시를 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 노래방 CCTV·이용·결제 내역·일행 진술·당일·직후 메시지를 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">노래방 좁은 공간 강제 신체접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·룸·일행 구성 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·거부 의사 표시 기록 (행위 태양)</strong></li>\n<li><strong>노래방 CCTV·이용·결제 내역 확보 요청 자료</strong></li>\n<li><strong>일행·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·사진·통화 기록</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노래방 CCTV는 보관 기간이 짧으니 일시·룸을 특정해 빨리 보존을 요청하는 것이 중요합니다. 좁은 룸에서 밀착·접촉이 의사에 반해 이루어졌고 거부 의사를 표시했는데도 계속됐다는 점, 일행이 본 상황과 직후 반응을 구체적으로 정리하면 진술의 신빙성을 높이고 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반하는 밀착·신체접촉·끌어안기인지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘좁아서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>거부 의사</strong> — 거부 의사를 표시했는데도 계속됐는지.</li>\n<li><strong>진술 신빙성</strong> — 피해자 진술이 일관·구체·정황에 부합하는지.</li>\n<li><strong>객관 정황</strong> — CCTV·일행 진술·직후 메시지가 뒷받침되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성 판단 방법',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 공소사실에 부합하는 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술이 합리적인 의심을 배제할 신빙성이 있는지는 진술 내용의 주요 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적이고 그 자체로 모순되거나 객관적으로 확인된 사실과 모순되지 않는지, 허위로 불리한 진술을 할 동기나 이유가 있는지 등을 종합해 신중히 판단해야 한다고 보았습니다. 또 추행이란 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하여 성적 자유를 침해하는 행위를 의미한다고 판시했습니다. 좁은 노래방 룸에서의 신체접촉이 문제 된 사안을 살펴볼 때에도, 접촉이 의사에 반하는 추행에 해당하는지와 피해자 진술의 신빙성을 종합해 검토해볼 수 있습니다.',
        takeaway: '좁은 룸 밀착 + 의사에 반하는 신체접촉 + 출입 곤란·분위기 결합 시 좁은 공간 강제 접촉 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 닿은 것뿐이라는데 추행인가요?',
        answer:
          '<strong>좁은 공간을 빌렸어도 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 거부 의사를 구체적으로 기록하세요.',
      },
      {
        question: '그 자리에서 항의하지 못했는데 신고할 수 있나요?',
        answer:
          '<strong>좁은 룸·분위기로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '제 진술만 있는데 인정될까요?',
        answer:
          '<strong>진술이 일관·구체적이고 정황에 부합하면 신빙성이 인정될 수 있는 영역입니다.</strong> 진술을 시간순으로 일관되게 정리하세요.',
      },
      {
        question: '노래방 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>노래방 CCTV가 접촉 정황을 보여줄 수 있는 영역입니다.</strong> 보관 기간이 짧으니 빠르게 보존을 요청하세요.',
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
      { label: '회식 자리 강요 접촉 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
      { label: '심야 버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-crowded-bus-rush-hour-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-crowded-bus-rush-hour-touch-report-track',
    keyword: '만원 버스 혼잡 틈탄 추행 신고',
    questionKeyword: '출퇴근 시간 사람이 꽉 찬 만원 버스에 서서 가던 중, 뒤·옆에 있던 사람이 혼잡한 틈을 타 엉덩이·허벅지·허리에 손을 대거나 몸을 밀착해 비비는 등 명백히 의도적인 접촉을 해 너무 불쾌하고 수치스러웠어요. 처음엔 흔들려서 닿은 건가 싶었지만 정류장을 지나도 접촉이 계속되고 움직임이 노골적이라 혼잡을 틈탄 추행이라는 확신이 들었어요. 사람이 많아 누가 그랬는지 특정하거나 그 자리에서 항의하기도 어려웠는데, 이런 만원 버스 혼잡 틈탄 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '만원 버스 혼잡 틈탄 기습추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '만원 버스 혼잡 틈탄 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '꽉 찬 버스에서 혼잡을 틈타 엉덩이·허벅지를 만지는 의도적 접촉을 당해 수치스러웠다면, 강제추행죄의 추행 해당성 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근 시간 사람이 꽉 찬 만원 버스에 서서 가던 중, 바로 뒤·옆에 있던 사람이 혼잡한 틈을 타 엉덩이·허벅지·허리·손등 등에 손을 대거나, 몸을 바짝 밀착해 비비는 등 흔들림으로는 설명되지 않는 의도적인 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘버스가 흔들려서 닿은 건가’ 싶어 자리를 살짝 옮기거나 몸을 틀었는데도, 정류장을 몇 개 지나도록 접촉이 계속되고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 혼잡을 틈탄 추행이라는 확신이 들었지만, 사람이 빽빽해 누가 그랬는지 특정하거나 큰 소리로 항의하기도 어려운 상황에서 당하고 나니, 신고해도 ‘사람 많은 데서 어쩌다 닿은 것’으로 치부될까 봐 막막하실 거예요. 매일 타는 버스에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 혼잡을 빌렸더라도 의사에 반해 엉덩이·허벅지 등을 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄에는 폭행행위 자체가 추행에 해당하는 이른바 기습추행도 포함되고, 이때 추행과 동시에 저질러지는 폭행은 상대방의 의사를 억압할 정도일 필요 없이 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 본 사례 흐름이 있는 영역으로, 혼잡을 틈탄 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 혼잡 이용 + 의사에 반하는 접촉·밀착 + 반복·노골 결합은 ‘혼잡 틈탄 기습추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 만원 버스 혼잡 틈탄 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 노선·탑승 시간·정류장·혼잡도·위치 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허벅지·허리 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 혼잡을 틈탄 의사에 반하는 기습추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 흔들려 닿았다는 변명과 달리, 혼잡을 틈타 의사에 반해 엉덩이·허벅지를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 버스 CCTV·교통카드 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 노선·탑승 시간·정류장·위치·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 버스 내 CCTV·교통카드·승하차 내역·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">만원 버스 혼잡 틈탄 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>노선·탑승 시간·정류장·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>버스 내 CCTV·블랙박스 보존 요청 자료</strong></li>\n<li><strong>교통카드·승하차 내역 등 탑승 입증 자료</strong></li>\n<li><strong>목격자·동승자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 내 CCTV·블랙박스는 보관 기간이 짧으니 노선·차량 번호·탑승 시간을 특정해 경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 흔들림으로 설명되지 않는 의도적 접촉이 정류장을 지나도 반복됐다는 점을 구체적으로 기록하면 기습추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 혼잡을 틈탄 의사에 반하는 접촉·밀착인지.</li>\n<li><strong>기습추행</strong> — 접촉 자체가 추행에 해당하는 기습추행인지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘흔들려서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·목격으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 추행의 판단 기준',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행 또는 협박으로 항거를 곤란하게 한 뒤 추행하는 경우뿐 아니라 폭행행위 자체가 추행으로 인정되는 이른바 기습추행도 포함되고, 기습추행에서 추행과 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 필요 없이 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 보았습니다. 또 추행은 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하여 성적 자유를 침해하는 행위로, 피해자의 의사·관계·경위·구체적 행위 태양·주위 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 만원 버스에서 혼잡을 틈탄 접촉이 문제 된 사안을 살펴볼 때에도, 의사에 반하는 유형력의 행사가 있었는지를 기준으로 기습추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '혼잡 이용 + 의사에 반하는 접촉·밀착 + 반복·노골 결합 시 혼잡 틈탄 기습추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '흔들려서 닿은 것뿐이라는데 추행인가요?',
        answer:
          '<strong>혼잡을 빌렸어도 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 흔들림으로 설명되지 않는 접촉·반복 정황을 기록하세요.',
      },
      {
        question: '사람이 많아 누가 그랬는지 모르겠어요.',
        answer:
          '<strong>버스 CCTV·목격으로 가해자를 특정할 수 있는 영역입니다.</strong> 노선·차량·탑승 시간을 특정해 보존을 요청하세요.',
      },
      {
        question: '그 자리에서 항의하지 못했는데 신고할 수 있나요?',
        answer:
          '<strong>혼잡·당혹으로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '버스 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>버스 내 CCTV·블랙박스가 접촉 정황을 보여줄 수 있는 영역입니다.</strong> 보관 기간이 짧으니 신속히 보존을 요청하세요.',
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
      { label: '심야 버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '지하철 혼잡 추행 신고', href: '/guide/sex-crime/sex-crime-subway-rush-hour-grope-report-track' },
      { label: '혼잡 버스 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-falsely-accused-defense' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-photo-shoot-posing-guidance-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-photo-shoot-posing-guidance-falsely-accused-defense',
    keyword: '사진 촬영 포즈 지도 추행 무고 방어',
    questionKeyword: '사진 촬영을 진행하면서 모델·피사체에게 ‘턱을 들어라, 어깨를 펴라, 손 위치를 이렇게 잡아라’며 포즈를 지도하는 과정에서 자세를 잡아주려 어깨·팔·손 등을 가볍게 잡았을 뿐인데, 갑자기 상대가 ‘추행을 당했다’며 저를 고소했어요. 저는 촬영상 필요한 포즈 지도였고 추행할 의도가 전혀 없었으며 접촉도 통상적인 범위였다고 생각하는데, 한순간에 성범죄 가해자로 몰려 너무 억울하고 막막해요. 촬영 흐름과 지도 경위가 분명히 있는데, 이렇게 사진 촬영 포즈 지도가 추행으로 고소된 상황에서 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '사진 촬영 포즈 지도 추행 고의 부재·진술 신빙성 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사진 촬영 포즈 지도 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '촬영상 필요한 포즈 지도였는데 추행으로 고소돼 억울하다면, 추행 고의·접촉의 통상성 판단과 진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「프로필·스냅·바디 프로필 등 사진 촬영을 진행하면서 모델·피사체에게 ‘턱을 살짝 들어라, 어깨를 펴라, 손은 이렇게 두어라’며 포즈를 지도하고, 자세가 잘 안 나올 때 어깨·팔·손 등을 가볍게 잡아 위치를 잡아주는 통상의 디렉션을 했을 뿐인데, 촬영이 끝난 뒤 또는 한참 지나 상대가 ‘그때 추행을 당했다’며 저를 성범죄로 고소해, 한순간에 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 접촉도 촬영상 필요한 범위의 가벼운 것이었으며 그 자리에서 상대가 별다른 거부 의사를 보이지 않았다고 기억하는데도, 둘만 있던 촬영장이거나 직접 목격자가 없어 상대 진술이 사실상 유일한 증거라 진술 다툼만 남을까 봐 너무 억울하고 막막하실 거예요. 작업으로 한 촬영에서 벌어진 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 촬영 흐름과 포즈 지도의 경위, 접촉이 통상의 디렉션 범위였다는 점을 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄가 성립하려면 추행행위와 그에 대한 고의가 인정되어야 하는 영역입니다. 판례는 추행 피해를 주장하는 진술의 신빙성은 진술의 일관성·구체성·정황 부합 여부 등을 종합해 신중히 판단해야 하고, 범인식별·진술 청취 과정에서 암시나 유도로 진술이 오염될 가능성도 함께 살펴야 한다고 본 사례 흐름이 있는 영역입니다. 또 추행 해당 여부는 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양과 주위의 객관적 상황 등을 종합해 판단해야 하는 영역으로, 접촉의 통상성·추행 고의 여부와 진술 신빙성을 가려 다툴 여지가 있습니다. 포즈 지도 경위 + 통상 범위 접촉 + 진술 중심 증거 결합은 ‘추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·촬영 흐름 정리 ② 접촉 통상성 ③ 추행 고의 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사진 촬영 포즈 지도 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 통상성·추행 고의·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·촬영 흐름 정리</strong> — 촬영 목적·콘셉트·진행 흐름·포즈 지도 경위 정리.</li>\n<li><strong>② 접촉 통상성</strong> — 어깨·팔·손 등 통상의 디렉션 범위 접촉이었는지 정리.</li>\n<li><strong>③ 추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정될 정황이 있는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술이 유일·일관·정황 부합하는지, 오염 가능성은 없는지 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 포즈 지도 범위의 접촉인지, 추행을 용인하는 내심의 의사(고의)가 인정될 정황이 있는지가 판단의 분기점입니다. 촬영 흐름·콘셉트와 접촉 경위, 상대 진술이 유일 증거인지·일관·정황에 부합하는지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·촬영 자료 보존 (즉시)</strong> — 촬영 목적·콘셉트·진행 흐름·결과물·당일 대화를 보존.</li>\n<li><strong>2단계 — 접촉 통상성 정리 (즉시)</strong> — 포즈 지도 경위와 어깨·팔·손 등 통상의 디렉션 범위 접촉이었음을 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 상대 진술이 유일 증거인지, 일관·정황 부합하는지와 모순·오염 가능성을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진 촬영 포즈 지도 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉 통상성·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>촬영 목적·콘셉트·섭외·계약 기록 (경위)</strong></li>\n<li><strong>포즈 지도·디렉션 경위와 접촉 범위 정리 (행위 태양)</strong></li>\n<li><strong>촬영장 CCTV·현장 사진·결과물 보존 요청 자료</strong></li>\n<li><strong>당일·전후 메시지·대화·동의 정황 기록</strong></li>\n<li><strong>스태프·동행자 등 목격자 진술·연락처</strong></li>\n<li><strong>상대 진술의 일관성·모순·정황 불부합·오염 가능성 정리</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 촬영 콘셉트·진행 흐름과 결과물, 당일 대화를 정리하면 접촉이 통상의 포즈 지도 범위였음을 다투는 데 도움이 됩니다. 상대 진술이 유일 증거인지, 시점에 따라 달라지거나 정황과 모순되는 부분은 없는지, 진술이 암시·유도로 오염될 가능성은 없었는지를 정리하면 추행 고의를 다투는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 인정되는지.</li>\n<li><strong>접촉 통상성</strong> — 통상의 포즈 지도 범위를 넘는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 유일·일관·정황에 부합하는지.</li>\n<li><strong>진술 오염</strong> — 암시·유도로 진술이 오염될 가능성이 있는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술 신빙성 판단과 진술 오염 가능성',
        summary:
          '대법원 2006도2520(대법원, 2008.07.10 선고) 영역에서 법원은 성추행 피해를 주장하는 진술의 신빙성을 판단할 때 진술이 사건 발생으로부터 얼마나 지난 후 이루어졌는지, 그 과정에서 보호자나 수사관이 편파적 예단을 가지고 사실이 아닌 정보를 주거나 반복 신문으로 특정 답변을 유도하지는 않았는지, 진술이 일관되고 구체적이며 세부 묘사가 풍부한지 등을 종합적으로 검토해야 한다고 보았습니다. 또 범인식별 절차에서 진술의 신빙성을 높이려면 사전 묘사를 기록하고 비교 대상자와 함께 대면시키며 과정을 서면화하는 등 절차적 요건을 갖추어야 한다고 판시했습니다. 포즈 지도를 추행으로 주장하는 사안을 살펴볼 때에도, 상대 진술이 일관·구체적이고 정황에 부합하는지, 암시·유도로 오염되지 않았는지를 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '포즈 지도 경위 + 통상 범위 접촉 + 진술 중심 증거 결합 시 추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '촬영상 포즈를 잡아준 것뿐인데 추행이 되나요?',
        answer:
          '<strong>통상의 포즈 지도 범위 접촉인지, 추행을 용인하는 고의가 있는지가 핵심인 영역입니다.</strong> 촬영 흐름과 접촉 경위를 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>촬영 콘셉트·디렉션 경위·접촉 범위로 고의 부재를 다투는 영역입니다.</strong> 결과물과 당일 대화를 정리하세요.',
      },
      {
        question: '상대 진술만 있고 목격자가 없어요.',
        answer:
          '<strong>합리적 의심이 남으면 피고인의 이익으로 보는 무죄추정이 적용되는 영역입니다.</strong> 진술의 일관성·정황 부합 여부를 검토하세요.',
      },
      {
        question: '진술이 사건 한참 뒤에 나왔는데 다툴 수 있나요?',
        answer:
          '<strong>시간 경과·반복 신문 등 진술 오염 가능성을 함께 살피는 영역입니다.</strong> 진술 시점과 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>촬영 경위·접촉 범위에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 혐의 방어 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '사진관 포즈 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-photo-studio-posing-pretext-touch-report-track' },
      { label: '사진관 포즈 지도 추행 추적', href: '/guide/sex-crime/sex-crime-photo-studio-posing-touch-track' },
      { label: '사진관 추행 추적', href: '/guide/sex-crime/sex-crime-photo-studio-track' },
      { label: 'PT 트레이너 지도 접촉 추적', href: '/guide/sex-crime/sex-crime-pt-trainer-guidance-touch-track' },
    ],
  },
];
