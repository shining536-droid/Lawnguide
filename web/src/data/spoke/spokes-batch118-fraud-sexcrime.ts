import { SpokePage } from '../spoke-pages';

// batch118 fraud(6) + sex-crime(4) — 10개 (2026-07-06)
//
// 고유 존재 이유:
// 1. fraud-used-car-accident-history-inspection-false-sale-track — 일반 중고차 분쟁과 분기. '사고·침수 이력을 성능점검표에 무사고로 허위 기재해 중고차를 판' 성능점검표 허위 기망 편취 판단형 트랙(victim).
// 2. fraud-unmanned-store-franchise-profit-exaggeration-track — 일반 창업 분쟁과 분기. '무인점포 창업 수익을 과장해 가맹비·설비비를 편취한' 수익 과장 가맹비 편취 절차형 트랙(victim).
// 3. fraud-wedding-hall-deposit-contract-disappear-track — 일반 예약 분쟁과 분기. '예식장 예약금·계약금만 받고 계약을 이행하지 않고 잠적한' 예약금 미이행 편취 판단형 트랙(victim).
// 4. fraud-parcel-delivery-smishing-micropayment-track — 일반 스미싱과 분기. '택배 배송조회를 사칭한 스미싱으로 소액결제·정보를 편취한' 택배 사칭 스미싱 소액결제 편취 절차형 트랙(victim).
// 5. fraud-online-lecture-pass-refund-breach-track — 일반 환불 분쟁과 분기. '온라인 강의 수강권 환불 약정을 앞세워 결제만 받고 환불을 불이행한' 환불 약정 불이행 편취 판단형 트랙(victim).
// 6. fraud-acquaintance-loan-repayment-delay-intent-falsely-accused-defense — 일반 사기 무고류와 분기. '지인 금전 대여 상환 지연을 편취로 고소당함' 변제의사·편취 고의 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-company-dinner-noraebang-touch-report-track — 일반 추행류와 분기. '회식 노래방에서 밀착해 신체를 추행' 노래방 밀착 추행 신고 판단형 트랙(victim).
// 8. sex-crime-hospital-examination-improper-touch-report-track — 일반 추행류와 분기. '병원 진료·검진을 빙자해 부적절하게 신체를 추행' 진료 빙자 추행 신고 절차형 트랙(victim).
// 9. sex-crime-academy-instructor-guidance-touch-report-track — 일반 추행류와 분기. '학원 강사가 지도를 빙자해 신체를 추행' 지도 빙자 추행 신고 판단형 트랙(victim).
// 10. sex-crime-club-crowd-accidental-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '클럽 혼잡 인파 속 우연 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch118FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-accident-history-inspection-false-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-accident-history-inspection-false-sale-track',
    keyword: '중고차 사고이력 성능점검표 허위 매매 기망 사기',
    questionKeyword: '중고차 매매상사·딜러에게서 ‘무사고 차량이고 성능점검표에도 이상 없이 다 나와 있다, 침수·전손 이력도 전혀 없다’는 말을 믿고 중고차를 시세대로 샀어요. 그런데 인수 후 정비소·보험개발원 사고이력을 조회해보니 실제로는 큰 사고나 침수 이력이 있었고, 건네받은 성능·상태점검기록부에는 이런 이력이 무사고로 허위 기재돼 있었어요. 딜러는 ‘몰랐다’며 발뺌하다 연락을 피하고, 알고 보니 같은 상사가 여러 명에게 사고·침수 이력을 숨기고 판 정황도 보여요. 처음부터 사고이력을 알면서 성능점검표를 무사고로 속여 판 것 같은데, 이런 중고차 사고이력 성능점검표 허위 매매를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고차 성능점검표 허위·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 사고이력 성능점검표 허위 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '무사고라는 말과 성능점검표를 믿고 산 중고차가 사고·침수 이력 은폐로 드러나 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매상사·딜러가 ‘완전 무사고 차량이다, 성능·상태점검기록부에도 이상 없이 다 나와 있고 침수·전손 이력도 전혀 없다, 오래 탄 차치고 관리가 잘 됐다’며 이력에 문제가 없음을 거듭 강조해, 중고차라면 이 정도 상태에 이 값이면 괜찮다는 생각으로 시세대로 대금을 치르고 차를 산 분의 상황입니다. 그런데 막상 인수한 차를 정비소·보험개발원 카히스토리 등으로 사고이력을 조회해보니 실제로는 프레임까지 손상된 큰 사고나 침수 이력이 있었고, 계약 당시 건네받은 성능·상태점검기록부에는 이런 이력이 무사고·이상 없음으로 허위 기재되어 있어, 정상 차량 값을 치르고도 실제로는 사고·침수 이력이 있는 차를 떠안게 되어 막막하실 거예요. 딜러에게 조회 결과를 들이대며 따지면 ‘나도 몰랐다, 점검업체가 그렇게 써준 것’이라며 책임을 미루다 점점 연락을 피하고, 알고 보니 같은 상사가 비슷하게 이력을 숨기고 여러 사람에게 사고·침수차를 판 정황까지 보이면 단순 거래 착오가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 사고·침수 이력을 알면서도 성능점검표를 무사고로 앞세워 정상 차량인 것처럼 속여 대금을 받은 정황이면 단순 하자 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 사고·침수 이력을 숨기고 성능점검표를 무사고로 앞세워 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되었다거나 전체 재산상 손해가 없다 하더라도 편취액은 대가를 공제한 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 정상 차량 값으로 지급한 대금 전부를 기준으로 기망에 의한 편취 성립과 편취액을 가려 다툴 여지가 있습니다. 사고이력 인식·묵비 + 성능점검표 무사고 허위 + 발뺌·회피 결합은 ‘성능점검표 허위 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 사고이력·허위 기재 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 사고이력 성능점검표 허위 매매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·이력·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 무사고 강조 대화·매매계약서·성능점검표·결제 내역 정리.</li>\n<li><strong>② 사고이력·허위 기재 입증</strong> — 보험개발원·정비소 사고이력과 점검표 무사고 기재 대조.</li>\n<li><strong>③ 편취·손해액</strong> — 정상 차량 값으로 지급한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자 다툼과 달리, 사고·침수 이력을 알면서 성능점검표를 무사고로 허위 기재해 정상 차량인 것처럼 속였는지가 판단의 분기점입니다. 무사고를 강조한 대화와 성능점검표, 보험개발원·정비소 사고이력 조회, 발뺌·회피 정황과 같은 상사의 반복 판매를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 무사고 강조 대화·매매계약서·성능점검표·결제 내역 캡처 보존.</li>\n<li><strong>2단계 — 사고이력·허위 확인 (즉시)</strong> — 보험개발원 카히스토리·정비소 점검으로 사고·침수 이력과 점검표 허위 기재를 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 사고이력 성능점검표 허위 매매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·이력·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>무사고 강조 대화·광고 캡처 (거래 조건)</strong></li>\n<li><strong>중고차 매매계약서·성능상태점검기록부 (계약 내용)</strong></li>\n<li><strong>차량 대금·이전비·송금 내역 (피해 금액)</strong></li>\n<li><strong>보험개발원 카히스토리·정비소 점검 결과 (사고이력 입증)</strong></li>\n<li><strong>점검표 무사고 기재와 실제 이력 대조 자료</strong></li>\n<li><strong>매매상사·딜러·점검업체·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험개발원 카히스토리와 정비소 점검으로 사고·침수 이력을 확정하고, 계약 당시 받은 성능·상태점검기록부의 무사고 기재와 대조해 딜러가 강조한 무사고 대화와 대비하면 성능점검표 허위 기망을 다투는 데 도움이 됩니다. 같은 상사가 다른 사람에게도 이력을 숨기고 판 흔적을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사고·침수 이력</strong> — 실제로 사고·침수 이력이 있는지.</li>\n<li><strong>이력 인식·기망</strong> — 이력을 알면서 무사고로 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 대금만 노렸는지.</li>\n<li><strong>편취액</strong> — 정상 차량 값으로 지급한 대금이 피해액인지.</li>\n<li><strong>매도인 특정</strong> — 상사·딜러·점검업체로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·매매 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액 산정과 대가 일부 지급',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에 있어서는 기망으로 인한 금원 교부가 있으면 그 자체로써 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 상당한 대가가 지급되었다거나 피해자의 전체 재산상에 손해가 없다 하여도 사기죄의 성립에는 영향이 없으므로, 그 대가가 일부 지급된 경우에도 편취액은 피해자로부터 교부된 금원에서 그 대가를 공제한 차액이 아니라 교부받은 금원 전부이고 이는 특정경제범죄가중처벌법 위반죄에서도 마찬가지라고 보았습니다. 다만 편취한 재물이나 재산상 이익의 가액에 따라 가중 처벌하는 규정을 적용할 때에는 그 가액을 엄격하고 신중하게 산정하여야 하고, 이익의 가액을 구체적으로 산정할 수 없는 경우에는 가액 기준 가중 처벌 규정을 적용할 수 없다고 판시했습니다. 사고·침수 이력을 숨기고 성능점검표를 무사고로 속여 중고차를 판 사안을 살펴볼 때에도, 정상 차량 값으로 지급한 대금 전부를 기준으로 기망에 의한 편취 성립과 편취액을 가려 검토해볼 수 있습니다.',
        takeaway: '사고이력 인식·묵비 + 성능점검표 무사고 허위 + 발뺌·회피 결합 시 성능점검표 허위 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '딜러가 자기도 몰랐다는데도 사기인가요?',
        answer:
          '<strong>사고이력을 알면서 무사고로 속였는지가 핵심인 영역입니다.</strong> 무사고 강조 대화와 사고이력 조회 결과를 대비하세요.',
      },
      {
        question: '사고·침수 이력을 어떻게 입증하나요?',
        answer:
          '<strong>보험개발원 카히스토리·정비소 점검이 핵심 단서인 영역입니다.</strong> 사고이력과 점검표 무사고 기재를 확보하세요.',
      },
      {
        question: '성능점검표를 받았는데도 다툴 수 있나요?',
        answer:
          '<strong>점검표의 무사고 허위 기재 자체를 다투는 영역입니다.</strong> 실제 이력과 점검표 기재를 대조해 정리하세요.',
      },
      {
        question: '시세대로 냈는데 다 피해로 보나요?',
        answer:
          '<strong>정상 차량 값으로 지급한 대금 전부를 편취액으로 다투는 영역입니다.</strong> 대금·이전비·결제 내역을 정리하세요.',
      },
      {
        question: '같은 상사에서 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 상사의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고차 사고이력 은폐 판매 추적', href: '/guide/fraud/fraud-used-car-accident-history-concealment-sale-track' },
      { label: '중고차 침수 사고이력 은폐 추적', href: '/guide/fraud/fraud-used-car-flood-accident-history-conceal-track' },
      { label: '중고차 주행거리 이력 은폐', href: '/guide/fraud/fraud-used-car-meter-history-concealed' },
      { label: '중고차 시승 미끼 바꿔치기 추적', href: '/guide/fraud/fraud-used-car-dealer-test-drive-bait-switch-track' },
    ],
  },

  // ─── 2. fraud-unmanned-store-franchise-profit-exaggeration-track ───
  {
    domain: 'fraud',
    slug: 'fraud-unmanned-store-franchise-profit-exaggeration-track',
    keyword: '무인점포 창업 수익 과장 가맹비 편취 사기',
    questionKeyword: '무인 아이스크림·밀키트·세탁·스터디카페 등 무인점포 창업을 권하는 본사·창업 컨설팅이 ‘한 달 순수익이 얼마는 확실히 나온다, 검증된 상권 분석 자료도 있다, 무인이라 인건비가 안 든다’며 수익을 자신 있게 제시해서, 믿고 가맹비·설비비·인테리어비를 내고 점포를 열었어요. 그런데 막상 열어보니 제시한 수익은커녕 매출이 턱없이 낮았고, 상권 분석·매출 자료는 부풀리거나 근거 없는 것이었어요. 항의하니 ‘장사가 원래 그런 것’이라며 발뺌하고 연락을 피했고, 알고 보니 같은 본사가 여러 사람에게 같은 방식으로 수익을 부풀려 가맹비를 챙긴 정황이었어요. 처음부터 실현 불가능한 수익을 과장해 가맹비만 받은 것 같은데, 이런 무인점포 창업 수익 과장 가맹비 편취를 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '무인점포 수익 과장 가맹비 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무인점포 수익 과장 창업 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '검증됐다던 무인점포 수익이 실제와 딴판이고 본사가 발뺌·잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「무인 아이스크림·밀키트·무인세탁·무인카페·스터디카페 같은 무인점포 창업을 권하는 본사나 창업 컨설팅이 ‘한 달 순수익이 얼마는 확실히 나온다, 검증된 상권 분석과 매출 자료가 있다, 무인이라 인건비가 들지 않아 관리도 편하다’며 수익을 자신 있게 제시해, 안정적으로 부수입을 얻을 좋은 기회라는 생각으로 가맹비·설비비·인테리어비를 내고 점포를 연 분의 상황입니다. 그런데 막상 문을 열어보니 제시받은 수익은커녕 매출이 임대료·관리비도 감당하기 어려운 수준으로 턱없이 낮았고, 창업 당시 근거라며 보여준 상권 분석·예상 매출 자료는 크게 부풀려졌거나 실제 근거가 없는 것이어서, 노후 자금·대출까지 들여 시작한 창업이 손실만 남기게 되어 막막하실 거예요. 본사에 항의하면 ‘장사가 원래 그런 것, 운영을 잘 못한 탓’이라며 책임을 미루다 연락을 피하고, 뒤늦게 확인해보니 같은 본사가 비슷하게 수익을 부풀려 여러 사람에게 가맹비를 받아 챙긴 정황까지 보이면 단순 경영 실패가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 실현 불가능한 수익을 알면서도 검증된 것처럼 과장해 가맹비·설비비만 받은 정황이면 단순 창업 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실현 불가능한 수익을 검증된 것처럼 과장해 가맹비를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 주관적 구성요건인 편취의 범의는 자백이 없는 이상 범행 전후 피고인의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하며 거래 당시 대금을 변제할 의사나 능력이 없음에도 이를 속여 재물을 편취할 고의가 있었는지로 가려야 한다고 본 사례 흐름이 있는 영역으로, 창업 권유 당시의 수익 근거와 이행 능력을 종합해 편취 범의를 다툴 여지가 있습니다. 수익 과장·근거 결여 + 검증 가장 + 발뺌·회피 결합은 ‘수익 과장 가맹비 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 수익 과장·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 무인점포 창업 수익 과장 가맹비 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·과장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 수익 제시 대화·가맹계약서·가맹비·설비비 결제 내역 정리.</li>\n<li><strong>② 수익 과장·기망 입증</strong> — 제시 수익과 실제 매출, 상권 분석 근거 부실 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 가맹비·설비비 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영 실패와 달리, 실현 불가능한 수익을 알면서도 검증된 것처럼 과장해 가맹비를 받았는지가 판단의 분기점입니다. 제시한 수익·상권 자료와 실제 매출, 근거 부실 정황과 발뺌·회피, 같은 본사의 반복 권유를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 수익 제시 대화·가맹계약서·상권 자료·가맹비·설비비 결제 내역 캡처 보존.</li>\n<li><strong>2단계 — 수익 과장·기망 입증 (즉시)</strong> — 제시 수익과 실제 매출, 상권 분석의 근거 부실과 부풀림 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">무인점포 창업 수익 과장 가맹비 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·과장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수익 제시·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>가맹계약서·정보공개서·상권 분석 자료 (계약 내용)</strong></li>\n<li><strong>가맹비·설비비·인테리어비 결제 내역 (피해 금액)</strong></li>\n<li><strong>실제 매출·카드 매출·정산 자료 (과장 입증)</strong></li>\n<li><strong>제시 수익과 실제 매출 대조 자료</strong></li>\n<li><strong>본사·담당자·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 창업 당시 제시받은 수익·상권 자료와 실제 매출·정산 내역을 시간순으로 대조하고, 상권 분석의 근거가 부실하거나 부풀려졌는지 확인하면 검증된 것처럼 수익을 과장했는지를 다투는 데 도움이 됩니다. 같은 본사에서 수익을 부풀려 가맹비를 낸 다른 창업자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수익 과장</strong> — 제시 수익이 실현 불가능한 부풀림이었는지.</li>\n<li><strong>근거 부실</strong> — 상권 분석·매출 자료에 실제 근거가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 실패인지 처음부터 가맹비만 노렸는지.</li>\n<li><strong>편취액</strong> — 가맹비·설비비가 피해액인지.</li>\n<li><strong>본사 특정</strong> — 상호·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (창업·가맹 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 편취의 범의와 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후 피고인의 재력, 환경, 범행의 내용, 거래의 이행과정 등과 같은 객관적인 사정 등을 종합하여 판단할 수밖에 없고, 그 범의는 확정적인 고의가 아닌 미필적 고의로도 족하다고 보았습니다. 특히 물품거래나 어음할인 등 거래관계에서 편취에 의한 사기죄의 성립 여부는 거래 당시를 기준으로 피고인에게 대금을 변제할 의사나 능력이 없음에도 피해자에게 변제할 것처럼 거짓말을 하여 재물 등을 편취할 고의가 있었는지에 의하여 판단하여야 한다고 판시했습니다. 무인점포 창업 수익을 검증된 것처럼 과장해 가맹비를 받은 사안을 살펴볼 때에도, 권유 당시 제시한 수익의 실현 가능성과 근거, 본사의 이행 능력을 종합해 편취의 범의가 있었는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '수익 과장·근거 결여 + 검증 가장 + 발뺌·회피 결합 시 수익 과장 가맹비 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '장사가 원래 그런 것이라는데도 사기인가요?',
        answer:
          '<strong>제시 수익이 실현 불가능한 과장이었는지가 핵심인 영역입니다.</strong> 제시 수익과 실제 매출을 대비하세요.',
      },
      {
        question: '수익 과장인 걸 어떻게 밝히나요?',
        answer:
          '<strong>상권 분석 근거 부실과 실제 매출이 단서인 영역입니다.</strong> 제시 자료의 근거와 실제 정산을 확인하세요.',
      },
      {
        question: '가맹계약서에 서명했는데도 다툴 수 있나요?',
        answer:
          '<strong>계약 체결 과정의 수익 과장·기망을 다투는 영역입니다.</strong> 상담·홍보 대화와 정보공개서를 정리하세요.',
      },
      {
        question: '가맹비 말고 설비비도 피해로 보나요?',
        answer:
          '<strong>가맹비·설비비 등 교부 금액을 편취액으로 다투는 영역입니다.</strong> 결제·송금 내역을 정리하세요.',
      },
      {
        question: '같은 본사에 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 창업자의 수익·매출 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '무인점포 결제 사기', href: '/guide/fraud/fraud-unmanned-store-payment-fraud' },
      { label: '프랜차이즈 창업비 추적', href: '/guide/fraud/fraud-franchise-startup-fee-track' },
      { label: '공동투자 수익보장 추적', href: '/guide/fraud/fraud-joint-investment-profit-guarantee-track' },
      { label: '채굴기 임대 수익보장 추적', href: '/guide/fraud/fraud-crypto-mining-rig-rental-profit-guarantee-track' },
    ],
  },

  // ─── 3. fraud-wedding-hall-deposit-contract-disappear-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-deposit-contract-disappear-track',
    keyword: '예식장 예약금 계약 후 잠적 미이행 기망 사기',
    questionKeyword: '결혼을 준비하며 예식장·웨딩홀과 날짜를 잡고 ‘예약금·계약금만 걸면 그날을 확정해준다, 나머지는 나중에 정산하면 된다’는 안내를 믿고 예약금·계약금을 보냈어요. 그런데 예식이 다가와도 준비는 진행되지 않았고, 확인하니 예약이 제대로 잡혀 있지 않거나 이미 다른 팀과 겹쳐 있었어요. 환불·이행을 요구하니 ‘곧 처리된다’며 미루다 연락을 끊고 잠적했고, 알고 보니 같은 업체가 여러 예비부부에게 예약금만 받고 계약을 이행하지 않은 정황이었어요. 처음부터 예식을 치러줄 의사 없이 예약금만 챙긴 것 같은데, 이런 예식장 예약금 계약 후 잠적 미이행을 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '예식장 예약금 미이행·잠적 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '예식장 예약금 계약 후 잠적 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '날짜를 확정해준다던 예식장이 예약금만 받고 계약을 이행하지 않고 잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「결혼을 준비하며 예식장·웨딩홀·컨벤션과 예식 날짜를 잡고, 업체가 ‘예약금·계약금만 미리 걸면 그날을 확실히 확정해준다, 홀·식대·꽃장식은 나중에 정산하면 된다, 지금 계약하지 않으면 인기 날짜가 빠진다’며 서둘러 안내해, 인생에 한 번뿐인 날을 놓칠까 하는 마음으로 적지 않은 예약금·계약금을 보낸 분의 상황입니다. 그런데 예식이 다가와도 준비가 진행되지 않아 확인해보니 예약이 제대로 잡혀 있지 않거나 이미 다른 팀과 같은 시간에 겹쳐 잡혀 있었고, 예정대로 예식을 치를 수 있을지조차 불투명해져, 청첩장을 돌리고 하객까지 초대한 상황에서 예식 자체가 무산될 위기에 놓여 막막하실 거예요. 환불이나 이행을 요구하면 ‘이번 주 안에 꼭 처리된다, 다른 날로 잡아주겠다’며 차일피일 미루다 끝내 전화·메신저 연락을 끊고 잠적하고, 뒤늦게 확인해보니 같은 업체가 여러 예비부부에게 예약금만 받고 계약을 이행하지 않은 정황까지 보이면 단순 일정 착오가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 예식을 치러줄 의사나 능력 없이 예약금·계약금만 받은 정황이면 단순 계약 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 예식을 치러줄 의사 없이 예약금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 도급계약 등 편취에 의한 사기죄에서 편취의 고의가 있었는지는 계약 당시를 기준으로 피고인에게 일을 완성할 의사나 능력이 없음에도 완성할 것처럼 거짓말을 해 대가를 편취할 고의가 있었는지로 판단하고, 계약의 내용·체결 경위·이행과정·결과 등을 종합해 살펴야 한다고 본 사례 흐름이 있는 영역으로, 예약금을 받을 당시 예식을 이행할 의사·능력이 있었는지를 가려 다툴 여지가 있습니다. 이행 의사·능력 결여 + 날짜 확정 유인 + 미이행·잠적 결합은 ‘예약금 미이행 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미이행·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 예약금 계약 후 잠적 미이행 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미이행·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 예약 안내·계약서·예약금·계약금 송금 내역 정리.</li>\n<li><strong>② 미이행·기망 입증</strong> — 예약 미확정·이중예약·준비 미진행 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 예약금·계약금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 일정 착오와 달리, 예식을 치러줄 의사나 능력 없이 날짜 확정을 앞세워 예약금만 받았는지가 판단의 분기점입니다. 예약 안내와 계약서, 예약 미확정·이중예약 정황, 미이행·잠적과 다른 예비부부의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 예약 안내·계약서·예약금·계약금 송금·문의 대화를 캡처 보존.</li>\n<li><strong>2단계 — 미이행·기망 입증 (즉시)</strong> — 예약 미확정·이중예약·준비 미진행과 잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 예약금 계약 후 잠적 미이행 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미이행·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약 안내·홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>예식 계약서·견적서·예약 확인 자료 (계약 내용)</strong></li>\n<li><strong>예약금·계약금·송금 내역 (피해 금액)</strong></li>\n<li><strong>예약 미확정·이중예약 확인 자료 (기망 입증)</strong></li>\n<li><strong>준비 미진행·이행 거부·잠적 대화 기록</strong></li>\n<li><strong>업체·담당자·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예약 안내·계약서와 송금 내역을 정리하고, 예약이 실제로 확정됐는지, 같은 시간에 다른 팀과 겹쳐 있지 않았는지 확인해 미이행·잠적 흐름과 대비하면 예식을 치러줄 의사 없이 예약금만 받았는지를 다투는 데 도움이 됩니다. 같은 업체에서 예약금을 떼인 다른 예비부부를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이행 의사·능력</strong> — 예약금 수령 당시 예식을 치러줄 의사·능력이 있었는지.</li>\n<li><strong>예약 확정</strong> — 실제로 예약이 확정되고 준비가 진행됐는지.</li>\n<li><strong>편취 범의</strong> — 단순 일정 착오인지 처음부터 예약금만 노렸는지.</li>\n<li><strong>편취액</strong> — 예약금·계약금이 피해액인지.</li>\n<li><strong>업체 특정</strong> — 상호·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·예약금 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도급계약 편취에서 편취 고의의 판단 시점과 기준',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄는 타인을 기망하여 착오에 빠뜨리고 처분행위를 유발하여 재물을 교부받거나 재산상 이익을 얻음으로써 성립하고, 사기죄의 기망행위라고 하려면 불법영득의 의사 내지 편취의 범의를 가지고 상대방을 기망한 것이어야 한다고 보았습니다. 특히 도급계약에서 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 일을 완성할 의사나 능력이 없음에도 피해자에게 일을 완성할 것처럼 거짓말을 하여 일의 대가 등을 편취할 고의가 있었는지에 의하여 판단하여야 하고, 이때 법원은 계약의 내용, 체결 경위 및 계약의 이행과정이나 결과 등을 종합하여 판단하여야 한다고 판시했습니다. 예식장이 예약금만 받고 예식을 이행하지 않고 잠적한 사안을 살펴볼 때에도, 예약금을 받을 당시 예식을 치러줄 의사나 능력이 있었는지, 계약 체결 경위와 이행과정을 기준으로 편취의 고의를 가려 검토해볼 수 있습니다.',
        takeaway: '이행 의사·능력 결여 + 날짜 확정 유인 + 미이행·잠적 결합 시 예약금 미이행 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '다른 날로 잡아주겠다며 미루는데도 사기인가요?',
        answer:
          '<strong>예식을 치러줄 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 예약 확정 여부와 잠적 정황을 대비하세요.',
      },
      {
        question: '예약이 안 잡혀 있던 걸 어떻게 밝히나요?',
        answer:
          '<strong>예약 미확정·이중예약이 단서인 영역입니다.</strong> 예약 확인 자료와 겹친 일정 정황을 확보하세요.',
      },
      {
        question: '계좌이체로 예약금을 냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 이체 내역과 상대 계좌 정보를 정리하세요.',
      },
      {
        question: '계약금 말고 예약금도 다 피해로 보나요?',
        answer:
          '<strong>예약금·계약금 등 교부 금액을 편취액으로 다투는 영역입니다.</strong> 송금·결제 내역을 정리하세요.',
      },
      {
        question: '같은 업체에 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 예비부부의 예약·미이행 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '예식장 패키지 이중계약 추적', href: '/guide/fraud/fraud-wedding-hall-package-double-contract-track' },
      { label: '예식장 패키지 허위 견적 추적', href: '/guide/fraud/fraud-wedding-hall-package-false-estimate-track' },
      { label: '예식장 선불 취소 환불거부 추적', href: '/guide/fraud/fraud-wedding-hall-prepaid-cancellation-no-refund-track' },
      { label: '웨딩 촬영·드레스 예약금 손실 추적', href: '/guide/fraud/fraud-wedding-vendor-photographer-dress-deposit-loss-track' },
    ],
  },

  // ─── 4. fraud-parcel-delivery-smishing-micropayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-parcel-delivery-smishing-micropayment-track',
    keyword: '택배 배송조회 사칭 스미싱 소액결제 기망 사기',
    questionKeyword: '‘택배 주소가 불명확하니 확인하라, 배송이 보류됐다’는 문자에 있는 링크를 눌렀더니 택배사·배송조회 사이트처럼 보이는 화면이 떠서, 배송 확인을 하려고 앱 설치·정보 입력을 했어요. 그런데 알고 보니 배송조회를 사칭한 스미싱이었고, 이후 제 명의로 모르는 소액결제가 빠져나가거나 문화상품권·게임머니가 결제됐고, 휴대폰에 악성앱이 깔려 문자·인증정보까지 새어나간 정황이었어요. 저는 택배를 시킨 게 맞아서 별 의심 없이 눌렀을 뿐인데 소액결제 피해와 개인정보 유출까지 겹쳐 막막해요. 이런 택배 배송조회 사칭 스미싱 소액결제 피해를 신고하고 결제된 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '택배 사칭 스미싱 소액결제 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '택배 사칭 스미싱 소액결제 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '택배 배송조회 문자인 줄 알고 눌렀다가 스미싱으로 소액결제·정보 유출 피해를 입어 막막하다면, 형법 제347조 사기·소액결제 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘택배 주소가 불명확하니 확인해달라, 배송이 보류됐다, 통관 정보를 입력하라’는 문자메시지에 담긴 링크를 무심코 눌렀더니 택배사·배송조회 사이트처럼 그럴듯하게 꾸며진 화면이 떠서, 마침 주문한 택배가 있어 배송 상태를 확인하려고 안내대로 앱을 설치하거나 이름·전화번호·인증정보를 입력한 분의 상황입니다. 그런데 알고 보니 그 화면과 링크는 배송조회를 사칭한 스미싱이었고, 이후 본인도 모르게 명의로 소액결제가 빠져나가거나 문화상품권·게임머니·콘텐츠가 결제됐으며, 휴대폰에 악성앱이 설치돼 문자·연락처·인증번호까지 빠져나가 추가 피해로 이어질 위험에 놓여 막막하실 거예요. 실제로 택배를 주문한 상황이라 별다른 의심 없이 링크를 눌렀을 뿐인데, 소액결제 청구와 개인정보 유출이 한꺼번에 겹치고 결제 취소·환급이 될지, 유출된 정보로 또 다른 피해가 생길지 불안해 더 답답하셨을 거예요. 문자·링크·악성앱을 통해 명의를 도용하고 착오를 일으켜 결제·정보를 빼낸 정황이면 단순 실수로 넘기기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하며, 컴퓨터등 정보처리장치에 허위 정보·부정한 명령을 입력해 이익을 취득한 경우는 형법 제347조의2 컴퓨터등사용사기로도 평가될 수 있는 영역입니다. 배송조회를 사칭해 착오를 일으키고 소액결제·정보를 빼냈다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 공사대금 등 편취에 의한 사기죄에서 편취의 범의가 있었는지는 계약 당시를 기준으로 판단하고, 재산권을 보호법익으로 하는 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득에 있다고 본 사례 흐름이 있는 영역으로, 사칭·기망으로 소액결제 등 재산상 이익을 취득했는지를 가려 다툴 여지가 있습니다. 배송 사칭 문자·링크 + 악성앱·정보 입력 + 소액결제·정보 유출 결합은 ‘택배 사칭 스미싱 소액결제 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 문자·결제 정리 ② 사칭·기망 입증 ③ 결제·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택배 배송조회 사칭 스미싱 소액결제 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 문자·사칭·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 문자·결제 정리</strong> — 사칭 문자·링크·앱 설치·소액결제 청구 내역 정리.</li>\n<li><strong>② 사칭·기망 입증</strong> — 배송조회 사칭·악성앱·정보 유출 정황 확인.</li>\n<li><strong>③ 결제·손해액</strong> — 소액결제·상품권 결제 등 피해 금액 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·제347조의2 컴퓨터등사용사기 신고 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 통신사·결제대행 이의신청·계좌 지급정지·피해구제 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 실수와 달리, 배송조회를 사칭한 문자·링크·악성앱으로 착오를 일으켜 소액결제·정보를 빼냈는지가 판단의 분기점입니다. 사칭 문자·링크와 앱 설치 흔적, 소액결제 청구와 정보 유출 정황을 신속히 캡처·보존해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원·KISA 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 문자·결제 자료 보존 (즉시)</strong> — 사칭 문자·링크·앱 설치 화면·소액결제 청구 내역을 캡처 보존.</li>\n<li><strong>2단계 — 악성앱 차단·초기화 (즉시)</strong> — 데이터 백업 후 악성앱 삭제·기기 초기화, 통신사에 소액결제 차단·정지를 요청.</li>\n<li><strong>3단계 — 지급정지·이의신청 (병행)</strong> — 결제대행사·통신사에 결제 취소·이의신청, 계좌 이체가 있으면 112·은행에 지급정지를 요청.</li>\n<li><strong>4단계 — 경찰·기관 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·한국인터넷진흥원(KISA) 118·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·정보보호 (2개월 내)</strong> — 결제 취소·피해구제와 명의도용·정보 유출 보호 조치를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">택배 배송조회 사칭 스미싱 소액결제 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 문자·결제·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>사칭 문자·링크 원문 캡처 (기망 수단)</strong></li>\n<li><strong>앱 설치·권한 요청 화면 캡처 (악성앱 정황)</strong></li>\n<li><strong>소액결제·상품권·콘텐츠 결제 청구 내역 (피해 금액)</strong></li>\n<li><strong>통신사 요금 명세·결제 상세 자료</strong></li>\n<li><strong>정보 유출·인증 문자 수신 정황 기록</strong></li>\n<li><strong>결제대행사·통신사 이의신청 접수 자료</strong></li>\n<li><strong>계좌 이체가 있으면 이체·상대 계좌 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사칭 문자·링크 원문과 앱 설치·소액결제 청구 내역을 삭제하기 전에 먼저 캡처해두고, 악성앱은 데이터를 백업한 뒤 삭제·초기화하면 추가 피해를 줄이는 데 도움이 됩니다. 통신사·결제대행사에 소액결제 차단과 이의신청을 신속히 접수하고, 인증 문자·명의 도용 흔적을 함께 정리하면 사칭·기망에 의한 소액결제 편취를 다투는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사칭·기망</strong> — 배송조회를 사칭해 착오를 일으켰는지.</li>\n<li><strong>본인 결제 여부</strong> — 소액결제가 본인 의사에 의한 것이 아닌지.</li>\n<li><strong>악성앱·정보 유출</strong> — 악성앱으로 인증정보가 유출됐는지.</li>\n<li><strong>피해액</strong> — 소액결제·상품권 결제가 피해액인지.</li>\n<li><strong>결제 취소 가능성</strong> — 통신사·결제대행 이의신청으로 취소 가능한지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국인터넷진흥원(KISA) 118 (스미싱·개인정보 신고)</strong></li>\n<li><strong>금융감독원 1332 (소액결제·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 성립요건과 편취 범의의 판단',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄는 타인을 기망하여 착오에 빠뜨리고 처분행위를 유발하여 재물을 교부받거나 재산상 이익을 얻음으로써 성립하는 범죄로서 그 본질은 기망행위에 의한 재물이나 재산상 이익의 취득에 있고, 사기죄는 보호법익인 재산권이 침해되었을 때 성립하므로 사기죄의 기망행위라고 하려면 불법영득의 의사 내지 편취의 범의를 가지고 상대방을 기망한 것이어야 한다고 보았습니다. 그리고 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 대가를 지급할 의사나 능력이 없음에도 이를 지급할 것처럼 거짓말을 하여 편취할 고의가 있었는지에 의하여 판단하여야 하고, 이때 거래의 내용·경위·이행과정과 결과 등을 종합하여야 한다고 판시했습니다. 택배 배송조회를 사칭한 스미싱으로 소액결제·정보를 빼낸 사안을 살펴볼 때에도, 사칭·기망으로 착오를 일으켜 재산상 이익을 취득했는지를 기준으로 기망에 의한 편취를 가려 검토해볼 수 있습니다.',
        takeaway: '배송 사칭 문자·링크 + 악성앱·정보 입력 + 소액결제·정보 유출 결합 시 택배 사칭 스미싱 소액결제 편취 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '제가 링크를 눌러 설치했는데도 사기인가요?',
        answer:
          '<strong>배송조회를 사칭해 착오를 일으켰는지가 핵심인 영역입니다.</strong> 사칭 문자·링크와 앱 설치 정황을 대비하세요.',
      },
      {
        question: '소액결제된 돈을 돌려받을 수 있나요?',
        answer:
          '<strong>통신사·결제대행 이의신청으로 취소를 다투는 영역입니다.</strong> 결제 청구 내역과 명세를 신속히 확보하세요.',
      },
      {
        question: '악성앱이 깔린 것 같은데 어떻게 하나요?',
        answer:
          '<strong>추가 피해 차단이 먼저인 영역입니다.</strong> 데이터 백업 후 앱 삭제·초기화하고 소액결제 차단을 요청하세요.',
      },
      {
        question: '개인정보가 유출됐는데 어디에 신고하나요?',
        answer:
          '<strong>KISA 118에서 스미싱·개인정보 유출을 신고할 수 있는 영역입니다.</strong> 유출 정황과 인증 문자 기록을 정리하세요.',
      },
      {
        question: '문자를 지웠는데도 신고할 수 있나요?',
        answer:
          '<strong>결제 청구·통신 명세로도 다툴 수 있는 영역입니다.</strong> 요금 명세와 결제 상세를 확보해 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: 'SNS 쇼핑 미배송', href: '/guide/fraud/fraud-sns-shopping-no-delivery' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shopping-mall-non-delivery-track' },
      { label: '반려동물 입양 예약금 미배송 추적', href: '/guide/fraud/fraud-pet-adoption-deposit-no-delivery-track' },
      { label: '사기 형사·민사 구별', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
    ],
  },

  // ─── 5. fraud-online-lecture-pass-refund-breach-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-pass-refund-breach-track',
    keyword: '온라인 강의 수강권 환불 약정 불이행 편취 사기',
    questionKeyword: '온라인 강의·인강 플랫폼이 ‘목표를 못 이루면 100% 환불해준다, 조건만 맞으면 언제든 전액 돌려준다’는 환불 약정을 앞세워 고액 수강권·평생반을 결제하게 했어요. 그런데 막상 환불 조건을 갖춰 요청하니 ‘조건이 안 맞는다, 규정이 바뀌었다’며 이 핑계 저 핑계로 환불을 거부했고, 결국 연락을 끊거나 사이트를 닫고 잠적했어요. 알고 보니 처음부터 지킬 생각 없는 환불 약정을 미끼로 여러 수강생에게 결제만 받은 정황이었어요. 환불해줄 의사 없이 환불 약정을 앞세워 결제만 받은 것 같은데, 이런 온라인 강의 수강권 환불 약정 불이행을 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '온라인 강의 환불 약정 불이행 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 환불 약정 불이행 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '100% 환불을 약속하며 결제를 유도한 온라인 강의가 환불을 거부하고 잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 강의·인터넷 강의·자격증 강좌 플랫폼이 ‘목표 점수를 못 이루면 100% 환불해준다, 일정 조건만 충족하면 언제든 전액 돌려준다, 그러니 부담 없이 시작하라’는 환불 약정·환급반을 앞세워, 조건을 못 채우면 돈을 돌려받으면 된다는 생각으로 고액의 수강권·평생반·패키지를 결제한 분의 상황입니다. 그런데 막상 안내받은 환불 조건을 갖춰 환불을 요청하니 ‘출석·진도 조건이 안 맞는다, 이벤트 규정이 바뀌었다, 환불 기간이 지났다’며 처음 안내와 다른 이런저런 이유로 환불을 거부하고, 실제로는 사실상 환불이 불가능하도록 조건을 까다롭게 운영해, 약속을 믿고 결제한 수강료가 묶이게 되어 막막하실 거예요. 계속 환불을 요구하면 상담을 회피하거나 연락을 끊고 사이트·계정을 닫아 잠적하며, 뒤늦게 확인해보니 처음부터 지킬 생각 없는 환불 약정을 미끼로 여러 수강생에게 결제만 받은 정황까지 보이면 단순 환불 분쟁이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 환불해줄 의사 없이 환불 약정을 앞세워 결제만 받은 정황이면 단순 환불 거부로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 환불해줄 의사 없이 환불 약정을 앞세워 결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재물편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속하는지는 사기죄의 성부에 영향이 없으며, 기망행위로 스스로 재물을 취득하지 않고 제3자로 하여금 교부받게 한 경우에도 일정 요건에서 사기죄가 성립한다고 본 사례 흐름이 있는 영역으로, 환불 약정 기망으로 수강료를 교부받았는지를 가려 다툴 여지가 있습니다. 환불 의사 결여 + 환불 약정 미끼 + 환불 거부·잠적 결합은 ‘환불 약정 불이행 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 환불 약정·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 수강권 환불 약정 불이행 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·약정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 환불 약정 안내·수강 계약·결제·환불 요청 내역 정리.</li>\n<li><strong>② 환불 약정·기망 입증</strong> — 처음 안내와 다른 조건 변경·환불 거부 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 수강료·패키지 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·카드 항변·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 환불 거부와 달리, 처음부터 지킬 의사 없는 환불 약정을 미끼로 결제만 받았는지가 판단의 분기점입니다. 환불 약정 안내와 결제 내역, 처음 안내와 다른 조건 변경·환불 거부 정황, 다른 수강생의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 환불 약정 안내·수강 계약·결제·환불 요청·거부 대화를 캡처 보존.</li>\n<li><strong>2단계 — 환불 약정·기망 입증 (즉시)</strong> — 처음 안내한 환불 조건과 이후 변경·거부 정황, 잠적 흔적을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·항변 (병행)</strong> — 계좌 지급정지를 112·은행에 요청하고 카드 결제면 항변권을 신청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·카드 취소·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 수강권 환불 약정 불이행 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·약정·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>100% 환불·환급반 홍보 캡처 (거래 조건)</strong></li>\n<li><strong>수강 계약·환불 약관·환급 조건 안내 (계약 내용)</strong></li>\n<li><strong>수강료·패키지·카드·계좌 결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요청·거부 대화 (기망 입증)</strong></li>\n<li><strong>처음 안내와 다른 조건 변경 자료</strong></li>\n<li><strong>플랫폼·운영자·계좌 정보</strong></li>\n<li><strong>다른 수강생의 동일 환불 거부 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제를 유도할 때 안내한 환불 약정·환급 조건과 실제 환불을 요청했을 때의 거부·조건 변경 대화를 시간순으로 대비하면 처음부터 지킬 의사 없는 약정으로 결제만 받았는지를 다투는 데 도움이 됩니다. 카드로 결제했다면 항변권 시한을 챙기고, 같은 플랫폼에서 환불을 거부당한 다른 수강생을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>환불 의사</strong> — 결제 당시 환불 약정을 지킬 의사가 있었는지.</li>\n<li><strong>약정 기망</strong> — 지킬 수 없는 환불 조건을 미끼로 결제를 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 환불 분쟁인지 처음부터 결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 수강료·패키지 결제가 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 상호·운영자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 강의·환불 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 재물 편취와 제3자 교부',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 재물편취를 내용으로 하는 사기죄에 있어서는 기망으로 인한 재물교부가 있으면 그 자체로써 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속하는지는 사기죄의 성부에 아무런 영향이 없다고 보았습니다. 나아가 범인이 기망행위에 의해 스스로 재물을 취득하지 않고 제3자로 하여금 재물의 교부를 받게 한 경우에 사기죄가 성립하려면, 그 제3자가 범인과 사이에 정을 모르는 도구 또는 범인의 이익을 위해 행동하는 대리인의 관계에 있거나 적어도 범인에게 그 제3자로 하여금 재물을 취득하게 할 의사가 있어야 하며, 그 의사는 미필적 인식으로도 충분하다고 판시했습니다. 온라인 강의 환불 약정을 앞세워 수강료만 받고 환불을 이행하지 않은 사안을 살펴볼 때에도, 환불 약정 기망으로 재물 교부가 이루어졌는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '환불 의사 결여 + 환불 약정 미끼 + 환불 거부·잠적 결합 시 환불 약정 불이행 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '환불 조건이 안 맞는다는데도 사기인가요?',
        answer:
          '<strong>환불 약정을 지킬 의사가 있었는지가 핵심인 영역입니다.</strong> 처음 안내와 이후 조건 변경을 대비하세요.',
      },
      {
        question: '지킬 수 없는 약정인 걸 어떻게 밝히나요?',
        answer:
          '<strong>처음 안내와 실제 운영의 차이가 단서인 영역입니다.</strong> 홍보·안내 대화와 환불 거부 사유를 확인하세요.',
      },
      {
        question: '약관에 환불 제한이 있는데도 다툴 수 있나요?',
        answer:
          '<strong>결제 유도 당시의 환불 약정 기망을 다투는 영역입니다.</strong> 홍보 문구와 실제 약관을 대조해 정리하세요.',
      },
      {
        question: '카드로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 항변권으로 결제를 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '같은 플랫폼에 여러 명이 환불을 못 받았어요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 수강생의 결제·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 강의 환불 거부 추적', href: '/guide/fraud/fraud-online-lecture-course-refund-refusal-track' },
      { label: '온라인 강의 환불거부 잠적 추적', href: '/guide/fraud/fraud-online-lecture-refund-refusal-disappear-track' },
      { label: '온라인 강좌 환불 거부 추적', href: '/guide/fraud/fraud-online-course-refund-refusal-track' },
      { label: '온라인 강의 선결제 미제공 추적', href: '/guide/fraud/fraud-online-lecture-prepaid-no-service-track' },
    ],
  },

  // ─── 6. fraud-acquaintance-loan-repayment-delay-intent-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-acquaintance-loan-repayment-delay-intent-falsely-accused-defense',
    keyword: '지인 금전 대여 상환 지연 편취 고의 무고 방어',
    questionKeyword: '가까운 지인에게서 급한 사정으로 돈을 빌렸는데, 갚기로 한 시기에 제 형편이 어려워지면서 상환이 늦어졌어요. 저는 빌릴 당시 실제로 갚을 의사와 능력이 있었고 일부는 이미 갚았으며 지금도 갚으려는 마음인데, 상대가 ‘처음부터 갚을 생각 없이 돈을 빌려 편취했다’며 저를 사기로 고소했어요. 상환이 늦어진 건 예상치 못한 사정 때문이고 변제 의사도 분명한데, 갚지 못했다는 이유만으로 한순간에 사기 피의자로 몰려 너무 억울해요. 차용 경위와 그동안 갚은 내역, 형편이 나빠진 사정 자료도 있어요. 이렇게 지인 금전 대여 상환 지연으로 사기 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '지인 대여 상환 지연 편취 고의·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '지인 대여 상환 지연 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '형편이 어려워 상환이 늦어졌을 뿐인데 지인 대여를 편취 사기로 고소당해 억울하다면, 형법 제347조 편취 고의 판단과 변제의사·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가까운 지인이나 친척에게서 급한 사정으로 돈을 빌리면서 정해진 시기에 갚기로 했는데, 이후 예상치 못하게 형편이 어려워지거나 수입이 끊기면서 약속한 상환 시기에 돈을 갚지 못해 상환이 늦어져, 상대가 ‘처음부터 갚을 생각 없이 돈을 빌려 편취했다’며 저를 사기로 고소해 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 돈을 빌릴 당시 실제로 갚을 의사와 능력이 있었고 받은 돈도 사정대로 사용했으며 일부는 이미 갚거나 이자를 냈고 지금도 갚으려는 마음인데, 결과적으로 상환이 늦어졌다는 사정만으로 편취 고의가 있었던 것처럼 몰려 억울하고 막막하실 거예요. 개인 간 금전거래는 원래 형편에 따라 상환이 늦어질 수 있고 상대도 제 사정을 어느 정도 알고 빌려줬는데도, 갚지 못했다는 이유만으로 ‘처음부터 속였다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 돈을 빌리게 된 경위와 차용 조건, 빌린 돈의 사용처, 상환이 늦어진 원인과 그동안의 상환·이자 지급 내역을 차분히 정리해 빌릴 당시 갚을 의사·능력이 있었고 이후 사정으로 지연됐다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대가 제 형편을 알고 있었던 정황까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 돈을 빌릴 당시 상대를 기망하여 편취할 고의가 있어야 하는 영역입니다. 판례는 사기죄의 주관적 구성요건인 편취의 고의는 자백이 없는 한 범행 전후 피고인의 재력·환경·범행 내용·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단하여야 하고, 민사상 금전대차에서 채무불이행 사실만으로 바로 차용금 편취의 고의를 인정할 수는 없으나 확실한 변제의 의사가 없거나 약속한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장하여 금원을 차용한 경우에는 편취의 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 차용 당시의 변제 의사·능력과 자금 사용처, 지연 원인, 상대의 인식을 종합해 편취 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 차용 경위·조건 + 실제 사용·상환 + 편취 고의 다툼 결합은 ‘사기 고의 부재·채무불이행 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 차용·경위 정리 ② 자금 사용·상환 ③ 지연 원인 검토 ④ 편취 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 대여 상환 지연 편취 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·자금 사용·지연 원인·편취 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용·경위 정리</strong> — 차용 경위, 변제기·이자 등 조건, 형편 고지 정리.</li>\n<li><strong>② 자금 사용·상환</strong> — 빌린 돈을 쓴 내역과 상환·이자 지급 내역 정리.</li>\n<li><strong>③ 지연 원인 검토</strong> — 상환이 늦어진 객관적 사정·형편 변화 검토.</li>\n<li><strong>④ 편취 고의</strong> — 차용 당시 변제 의사·능력이 있었는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 자금 사용·상환이 편취 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 돈을 빌릴 당시 편취할 고의가 있었는지(사기), 아니면 형편이 나빠져 상환이 늦어진 것인지(채무불이행)가 판단의 분기점입니다. 차용 경위와 조건, 자금 사용처, 지연 원인과 상환·이자 내역, 상대가 형편을 알고 있었는지를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용·자금 자료 보존 (즉시)</strong> — 차용증·대화, 자금 수령·사용·상환 내역, 형편 고지 대화를 시간순으로 보존.</li>\n<li><strong>2단계 — 사용·상환 정리 (즉시)</strong> — 빌린 돈을 쓴 증빙과 그동안의 상환·이자 지급 내역을 정리.</li>\n<li><strong>3단계 — 편취 고의 검토 (병행)</strong> — 차용 당시 변제 의사·능력, 지연이 이후 사정임을 뒷받침하는 자료를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 대여 상환 지연 편취 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·자금·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·차용 조건·대화 기록 (차용 경위)</strong></li>\n<li><strong>자금 수령·입금 내역 (자금 흐름)</strong></li>\n<li><strong>빌린 돈의 실제 사용 증빙 (사용처)</strong></li>\n<li><strong>상환·이자 지급 내역 (변제 정황)</strong></li>\n<li><strong>형편 변화·지연 원인 관련 자료 (지연 원인)</strong></li>\n<li><strong>상대의 형편 인지·고지 대화 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차용 경위와 빌린 돈을 쓴 내역, 그동안의 상환·이자 지급 내역, 상환이 늦어진 형편 변화의 원인을 시간순으로 정리하면 차용 당시 변제 의사·능력이 있었는지, 아니면 처음부터 편취를 노렸는지를 다투는 데 도움이 됩니다. 상대가 제 형편을 알고 돈을 빌려줬다는 정황과 변제기 이후에도 갚으려 노력한 기록을 함께 정리해 편취 고의 부재를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 돈을 빌릴 당시 편취할 고의가 있었는지.</li>\n<li><strong>변제 의사·능력</strong> — 차용 당시 확실한 변제 의사·능력이 있었는지.</li>\n<li><strong>자금 사용처</strong> — 빌린 돈을 사정대로 실제 사용했는지.</li>\n<li><strong>지연 원인</strong> — 상환 지연이 이후 형편 변화 때문인지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용금 편취의 고의 판단과 채무불이행의 구별',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 고의는 피고인이 자백하지 않는 한 범행 전후 피고인의 재력, 환경, 범행의 내용, 거래의 이행과정, 피해자와의 관계 등과 같은 객관적인 사정을 종합하여 판단하여야 한다고 보았습니다. 그리고 민사상 금전대차관계에서 채무불이행 사실을 가지고 바로 차용금 편취의 고의를 인정할 수는 없으나, 피고인이 확실한 변제의 의사가 없거나 또는 차용 시 약속한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장하여 금원을 차용한 경우에는 편취의 고의를 인정할 수 있다고 판시했습니다. 아울러 거래의 상대방이 일정한 사정을 고지받았더라면 거래를 하지 않았을 관계가 인정되는 경우에는 신의칙상 그 사정을 고지할 의무가 있고 이를 묵비하면 기망이 될 수 있다고 하였습니다. 형편이 어려워져 상환이 늦어진 지인 대여가 편취로 고소된 사안을 살펴볼 때에도, 차용 당시의 변제 의사·능력과 이후 지연 원인, 상대의 인식을 기준으로 편취 고의를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '차용 경위·조건 + 실제 사용·상환 + 편취 고의 다툼 결합 시 사기 고의 부재·채무불이행 구별 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '상환이 늦어졌다는 이유로 사기가 되나요?',
        answer:
          '<strong>차용 당시 변제 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 자금 사용처와 지연 원인을 정리하세요.',
      },
      {
        question: '빌린 돈을 실제로 썼는데도 사기로 보나요?',
        answer:
          '<strong>자금 사용 내역은 편취 고의를 배척하는 자료가 되는 영역입니다.</strong> 사용 증빙과 상환 내역을 확보하세요.',
      },
      {
        question: '일부만 갚았는데 그것만으로 사기인가요?',
        answer:
          '<strong>변제 지연과 편취 고의는 구별되는 영역입니다.</strong> 상환·이자 내역과 지연 원인을 함께 정리하세요.',
      },
      {
        question: '형편을 상대가 알고 빌려준 게 도움이 되나요?',
        answer:
          '<strong>상대의 형편 인식은 편취 고의 판단에 고려되는 영역입니다.</strong> 형편을 알린 대화·정황을 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>차용·상환 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 대여 변제의사 빙자 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense' },
      { label: '개인 대여 상환 지연 무고 방어', href: '/guide/fraud/fraud-personal-loan-repayment-delay-falsely-accused-defense' },
      { label: '지인 대여 채무불이행 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-default-falsely-accused-defense' },
      { label: '투자수익 지연 고의 무고 방어', href: '/guide/fraud/fraud-investment-return-delay-intent-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-company-dinner-noraebang-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-noraebang-touch-report-track',
    keyword: '회식 노래방 밀착 신체접촉 추행 신고',
    questionKeyword: '회사 회식 2차로 간 노래방에서 같은 회사 상사·동료가 좁고 어두운 룸에서 옆에 바짝 붙어 앉아 어깨·허리·허벅지에 손을 대거나 노래·춤을 핑계로 몸을 밀착해 껴안아 너무 불쾌하고 수치스러웠어요. 회식 자리라 분위기를 깰까, 관계가 불편해질까 걱정돼 그 순간엔 강하게 거부하지 못했어요. 상대는 ‘노래방에서 분위기 타서 장난친 것’이라고 하거나 회사도 조용히 넘기려는 것 같아요. 그런데 접촉 부위와 방식이 명백히 선을 넘어 단순한 장난이 아니라 추행이라는 생각이 들어요. 이런 회식 노래방 밀착 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '회식 노래방 밀착 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '회식 노래방 밀착 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '회식 2차 노래방에서 상사·동료가 밀착해 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행 해당성 판단과 노래방 정황·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식 자리가 2차로 이어져 간 노래방에서, 같은 회사 상사나 동료가 좁고 어두운 룸의 분위기를 틈타 옆에 바짝 붙어 앉아 어깨·허리·허벅지에 손을 대거나, 함께 노래·춤을 추자며 몸을 밀착해 뒤에서 껴안는 등 단순한 실수로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 노래방 회식은 상사·동료라는 회사 관계 속에서 술자리 뒤 이어지는 자리라 그 순간에는 분위기를 깰까, 유난스럽게 보일까, 이후 관계가 불편해질까 걱정돼 곧바로 강하게 거부하거나 자리를 벗어나기 어려워 참고 넘겼지만, 접촉 부위와 방식이 명백히 선을 넘어 단순한 장난이 아니라 추행이라는 생각이 들지만, 상대가 ‘노래방에서 분위기 타서 장난친 것뿐’이라고 해명하거나 회사가 회식 중 일이라며 조용히 덮으려는 것 같아 신고해도 제대로 다뤄질지 막막하실 거예요. 매일 얼굴을 봐야 하는 회사 사람과의 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 노래방 회식 자리에서 의사에 반해 신체를 만지거나 껴안은 행위라면, 분위기에 취한 장난이라는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄의 ‘폭행 또는 협박’은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고 상대방의 신체에 대하여 불법한 유형력을 행사하거나 공포심을 일으킬 정도의 해악을 고지하는 것이라고 보아, 종래 폭행·협박 선행형에 요구되던 ‘항거 곤란’ 기준을 변경한 사례 흐름이 있는 영역으로, 회식 자리 접촉이 의사에 반하는 추행인지를 가려 다툴 여지가 있습니다. 회사 관계·회식 이용 + 신체 접촉·밀착 + 장난 해명·묵인 결합은 ‘노래방 밀착 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·회식 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 노래방 밀착 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·회식 정리</strong> — 회식 일정·노래방·참석자·좌석·관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 어깨·허리·허벅지 접촉·껴안음·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 회식 자리 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366·직장 내 고충창구 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분위기 타서 장난친 것이라는 해명과 달리, 회식 자리를 이용해 의사에 반해 신체를 만지거나 껴안았는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 노래방·업소 CCTV, 동석자·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·회식 자료 보존 (즉시)</strong> — 회식 일정·노래방·참석자·좌석과 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 노래방·업소·복도 CCTV, 회식 결제·예약 내역, 동석자·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담과 직장 내 고충창구 지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 노래방 밀착 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일정·노래방·참석자·관계 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>노래방·업소·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>회식 결제·예약·좌석 배치 자료 (정황)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>직장 내 신고·고충창구 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식 일정·좌석 배치·참석 명단과 노래방·업소 CCTV로 시간과 장소를 특정하고, 접촉 부위와 방식이 회식 중 장난으로 설명될 수 없다는 점을 구체적으로 기록하면 회사 관계 속 추행을 다투는 데 도움이 됩니다. 관계가 불편해 그 순간 강하게 거부하지 못했더라도 직후에 동료에게 알리거나 남긴 메시지·상담 정황을 정리하면 의사에 반하는 추행이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 장난을 넘는 신체 접촉·껴안음인지.</li>\n<li><strong>장난 해명</strong> — ‘분위기 타서 장난친 것’ 해명에 가려지지 않는지.</li>\n<li><strong>관계·위력</strong> — 상사·동료 관계나 회식 자리를 이용했는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·참석 명단·진술로 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 폭행·협박 의미와 판단 기준 변경',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 구성요건인 ‘폭행 또는 협박’의 의미를 다시 정의하여, 종래 폭행·협박이 추행보다 앞서 그 수단으로 행해진 경우 상대방의 항거를 곤란하게 하는 정도가 요구된다고 본 판례 법리를 변경하였습니다. 다수의견은 강제추행죄의 ‘폭행 또는 협박’은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 아니하고, 상대방의 신체에 대하여 불법한 유형력을 행사하거나 일반적으로 보아 상대방으로 하여금 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아야 한다고 판시했습니다. 이는 강제추행죄의 보호법익인 성적 자기결정권과 현행 규정의 문언에 부합하도록 해석 기준을 명확히 한 것입니다. 회식 노래방에서 밀착해 신체를 만지거나 껴안은 사안을 살펴볼 때에도, 접촉의 구체적 태양이 의사에 반하는 유형력의 행사에 해당하는지를 기준으로 추행 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '회사 관계·회식 이용 + 신체 접촉·밀착 + 장난 해명·묵인 결합 시 노래방 밀착 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '분위기 타서 장난친 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>장난을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '회식 자리라 그 순간 거부하지 못했는데 신고되나요?',
        answer:
          '<strong>관계상 즉시 거부가 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '회사가 조용히 덮으려 하는데 어떻게 하나요?',
        answer:
          '<strong>형사 신고와 직장 내 고충창구는 별개로 진행되는 영역입니다.</strong> 증거를 확보하고 외부 상담을 검토하세요.',
      },
      {
        question: '노래방 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>업소·복도 CCTV와 회식 정황으로 다투는 영역입니다.</strong> 노래방·경찰에 즉시 보존을 요청하세요.',
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
      { label: '회식 강제 착석 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
      { label: '회식 강제 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-touch-report-track' },
      { label: '회식 노래방 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-karaoke-touch-report-track' },
      { label: '워크숍 숙소 추행 신고', href: '/guide/sex-crime/sex-crime-company-workshop-lodging-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-hospital-examination-improper-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-hospital-examination-improper-touch-report-track',
    keyword: '병원 진료 검진 부적절 신체접촉 추행 신고',
    questionKeyword: '병원에서 진료·검진을 받는데 의료진이 증상과 무관한 부위를 만지거나, 진료에 필요한 범위를 넘어 가슴·음부 등 내밀한 부위를 필요 이상으로 만지고, 설명이나 동의도 없이 접촉해 너무 불쾌하고 수치스러웠어요. 진료라 어느 정도 접촉은 예상했지만 손이 향한 부위와 방식이 정상 진료로는 설명되지 않아 단순한 검진이 아니라 추행이라는 생각이 들었어요. 진료실이라 곧바로 항의하기 어려웠고, 상대는 ‘진단에 필요한 진료였다’고 할 것 같아요. 이런 병원 진료·검진 중 부적절 신체접촉을 신고하려면 어떤 기준으로 추행에 해당하는지, 진료기록·진술 같은 자료는 어떤 절차로 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '병원 진료 빙자 부적절 접촉 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '병원 진료 검진 부적절 접촉 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '병원 진료·검진 중 의료진이 필요 이상으로 신체를 만지는 부적절 접촉을 당해 수치스러웠다면, 진료 빙자 추행 해당성 판단과 진료기록·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「병원·의원에서 진료나 검진을 받던 중, 의료진이 호소한 증상과 무관한 부위를 만지거나, 진단·치료에 필요한 범위를 넘어 가슴·음부 등 내밀한 신체 부위를 필요 이상으로 만지고, 접촉의 필요성에 대한 설명이나 동의를 구하는 절차도 없이 신체를 만져 너무 불쾌하고 수치스러웠던 분의 상황입니다. 진료는 환부에 대한 접촉이 어느 정도 예정되어 있어 그 순간에는 ‘원래 이렇게 진료하는 건가’ 하고 헷갈리기도 하고, 흰 가운을 입은 의료진 앞 진료실이라는 공간에서 곧바로 강하게 항의하거나 자리를 벗어나기 어려워 참고 넘겼지만, 손이 향한 부위와 방식이 진료에 필요한 범위를 명백히 벗어나 단순한 검진이 아니라 추행이라는 생각이 들지만, 상대가 ‘진단·치료에 필요한 진료였다’고 해명할 것 같아 신고해도 정상 진료와 구별될지 막막하실 거예요. 몸을 맡기고 믿고 찾은 의료기관에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 진료를 빙자해 의사에 반해 내밀한 부위를 필요 이상으로 만진 행위라면, 진단에 필요한 진료였다는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 피고인이 공소사실을 부인하는 성폭력 사건에서 직접증거가 사실상 피해자 진술뿐인 경우 그 진술이 합리적 의심을 배제할 신빙성이 있는지 신중히 판단하고, 환자의 내밀한 신체 부위를 대상으로 하는 진단·치료 과정의 의료인 접촉이 추행인지는 증상에 대한 진단·치료의 필요성, 접촉 부위의 위치와 특성, 시술 수단·방법의 상당성, 사전 설명·동의 여부 등을 종합해 신중하고 엄격하게 판단해야 한다고 본 사례 흐름이 있는 영역으로, 진료 범위를 벗어난 접촉인지를 가려 다툴 여지가 있습니다. 진료 빙자 + 내밀 부위 접촉·설명 부재 + 진료 필요 해명 결합은 ‘진료 빙자 부적절 접촉 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·진료 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병원 진료·검진 부적절 접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·진료 정리</strong> — 병원·진료과·의료진·증상·진료 형태 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 증상 무관 부위·내밀 부위 접촉·설명 부재 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 진료 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진단에 필요한 진료였다는 해명과 달리, 증상에 대한 진료 필요성을 넘어 내밀 부위를 필요 이상으로 만졌는지, 사전 설명·동의가 있었는지가 판단의 분기점입니다. 접촉 부위·방식과 진료기록·처방, 동석 간호인력·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·진료 자료 보존 (즉시)</strong> — 병원·진료과·의료진·증상·진료 형태와 접촉 부위·방식·설명 부재를 기록·보존.</li>\n<li><strong>2단계 — 진료기록·진술 확보 (즉시)</strong> — 진료기록·처방전·예약·수납 내역, 동석 간호인력·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병원 진료·검진 부적절 접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원·진료과·의료진·증상·진료 형태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·설명 부재 정황 기록 (행위 태양)</strong></li>\n<li><strong>진료기록·처방전 발급 요청 자료</strong></li>\n<li><strong>예약·수납·방문 입증 자료 (방문 정황)</strong></li>\n<li><strong>동석 간호인력·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록·처방전과 예약·수납 내역으로 방문 사실과 진료과·의료진을 특정하고, 접촉한 부위가 호소한 증상의 진단·치료에 필요한 범위였는지, 사전 설명·동의가 있었는지를 구체적으로 기록하면 진료를 빙자한 부적절 접촉을 다투는 데 도움이 됩니다. 그 순간 항의하지 못했더라도 직후에 남긴 메시지나 다른 병원·상담에서 남긴 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 진료 필요성을 넘는 내밀 부위 접촉인지.</li>\n<li><strong>진료 필요 해명</strong> — ‘진단에 필요한 진료’ 해명에 가려지지 않는지.</li>\n<li><strong>설명·동의</strong> — 접촉의 필요성에 대한 사전 설명·동의가 있었는지.</li>\n<li><strong>의료진 특정</strong> — 진료기록·수납으로 의료진을 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진료 과정의 신체접촉이 추행인지 판단하는 기준',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 직접증거가 사실상 피해자 진술뿐인 경우 그 진술이 합리적 의심을 배제할 신빙성이 있는지는 진술 내용의 일관성·구체성, 논리와 경험칙 부합, 객관적 사실과의 모순 여부, 허위 진술 동기 유무 등을 종합해 신중히 판단해야 한다고 보았습니다. 나아가 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키고 선량한 성적 도덕관념에 반하여 피해자의 성적 자유를 침해하는 행위를 의미하고, 환자의 내밀한 신체 부위를 대상으로 하는 진단·치료 과정의 의료인 신체접촉이 추행인지는 증상에 대한 진단·치료의 필요성, 접촉 부위의 위치와 특성, 시술 수단과 방법의 상당성, 사전에 진료 내용과 접촉의 필요성을 설명하고 동의를 구했는지 등을 종합적으로 고려하여 신중하고 엄격하게 판단해야 한다고 판시했습니다. 병원 진료·검진 중 부적절한 접촉이 문제 된 사안을 살펴볼 때에도, 접촉이 진료 필요성을 넘어 성적 자유를 침해했는지를 기준으로 추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '진료 빙자 + 내밀 부위 접촉·설명 부재 + 진료 필요 해명 결합 시 진료 빙자 부적절 접촉 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '진단에 필요한 진료였다는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>진료 필요성을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 증상과 접촉 부위·방식을 대비하세요.',
      },
      {
        question: '진료실이라 그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>진료 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 메시지·상담 정황을 정리하세요.',
      },
      {
        question: '진료라 접촉이 당연한데 어떻게 구별하나요?',
        answer:
          '<strong>필요성·설명·동의 여부로 정상 진료와 구별하는 영역입니다.</strong> 접촉 부위와 사전 설명 유무를 정리하세요.',
      },
      {
        question: '진료기록으로 다툴 수 있나요?',
        answer:
          '<strong>진료기록·처방은 접촉의 필요성을 따지는 자료인 영역입니다.</strong> 진료기록·처방전 발급을 신속히 요청하세요.',
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
      { label: '병원 검진 부적절 접촉 신고', href: '/guide/sex-crime/sex-crime-hospital-medical-exam-improper-touch-report-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지숍 부적절 접촉 신고', href: '/guide/sex-crime/sex-crime-massage-shop-improper-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-academy-instructor-guidance-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-academy-instructor-guidance-touch-report-track',
    keyword: '학원 강사 지도 신체접촉 추행 신고',
    questionKeyword: '학원·교습소에서 수업·실기 지도를 받는데 강사가 자세나 동작을 봐준다며 필요 이상으로 어깨·허리·허벅지·손 위에 손을 얹거나 뒤에서 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 지도라 어느 정도 접촉은 예상했지만 손이 향한 부위와 방식이 정상 지도 범위를 벗어나 단순한 지도가 아니라 추행이라는 생각이 들었어요. 그 순간엔 ‘원래 이렇게 봐주나’ 헷갈려 바로 항의하지 못했어요. 강사는 ‘자세·동작을 잡아주려던 것’이라고 할 것 같아요. 이런 학원 강사 지도 중 신체접촉 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '학원 강사 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '학원 강사 지도 신체접촉 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '학원에서 강사가 지도를 빙자해 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행·기습추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「학원·교습소·실기 수업에서 강사에게 지도를 받던 중, 강사가 자세나 동작·손 모양을 봐준다는 이유로, 정상적인 지도로는 설명되지 않게 어깨·허리·허벅지·손 위에 손을 얹거나, 뒤에서 몸을 바짝 밀착해 붙는 등 단순한 지도로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 실기 지도는 자세를 바로잡거나 동작을 잡아주는 접촉이 어느 정도 예정되어 있어 그 순간에는 ‘원래 이렇게 봐주는 건가’ 하고 헷갈리기도 하고, 배우는 입장이라 곧바로 강하게 항의하거나 자리를 벗어나기 어려워 참고 넘겼지만, 손이 향하는 부위와 방식이 지도에 필요한 범위를 명백히 벗어나 단순한 지도가 아니라 추행이라는 생각이 들지만, 강사가 ‘자세·동작을 잡아주려던 것’이라고 해명할 것 같아 신고해도 정상 지도와 구별될지 막막하실 거예요. 무언가를 배우려고 믿고 다닌 학원에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 지도를 빙자해 의사에 반해 신체를 만지거나 밀착한 행위라면, 자세를 잡아주려 했다는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄에는 폭행행위 자체가 추행에 해당하는 이른바 기습추행이 포함되고, 이때 추행과 동시에 저질러지는 폭행은 반드시 상대방의 의사를 억압할 정도일 필요 없이 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문하며, 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역으로, 지도 범위를 벗어난 접촉인지를 가려 다툴 여지가 있습니다. 지도 빙자 + 신체 접촉·밀착 + 자세·동작 해명 결합은 ‘학원 강사 지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·수업 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학원 강사 지도 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·수업 정리</strong> — 학원·수업 시간·강사·수업 형태·주변 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 어깨·허리·허벅지·손 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자세를 잡아주려던 것이라는 해명과 달리, 지도에 필요한 범위를 벗어나 의사에 반해 신체를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 학원 CCTV, 다른 수강생·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·수업 자료 보존 (즉시)</strong> — 학원·수업 시간·강사·수업 형태와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 학원 내부 CCTV, 수강 등록·결제·출결 내역, 다른 수강생·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 강사 지도 신체접촉 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>학원·수업 시간·강사·수업 형태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>학원 내부 CCTV 보존 요청 자료</strong></li>\n<li><strong>수강 등록·결제·출결 입증 자료</strong></li>\n<li><strong>다른 수강생·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원 내부 CCTV와 수강 등록·출결 내역으로 수업 시간과 강사를 특정하고, 손이 향한 부위와 방식이 지도에 필요한 범위를 벗어났다는 점을 구체적으로 기록하면 지도 빙자 추행을 다투는 데 도움이 됩니다. 그 순간 바로 항의하지 못했더라도 직후에 남긴 메시지·통화나 다른 수강생에게 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 범위를 벗어난 신체 접촉·밀착인지.</li>\n<li><strong>자세 지도 해명</strong> — ‘자세·동작을 잡아주려던 것’ 해명에 가려지지 않는지.</li>\n<li><strong>기습추행</strong> — 의사에 반하는 유형력의 행사가 있었는지.</li>\n<li><strong>강사 특정</strong> — CCTV·수강 기록으로 강사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행 해당 여부의 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄는 폭행 또는 협박을 가하여 항거를 곤란하게 한 뒤 추행하는 경우뿐만 아니라 폭행행위 자체가 추행행위라고 인정되는 이른바 기습추행의 경우도 포함되고, 기습추행에서 추행행위와 동시에 저질러지는 폭행행위는 반드시 상대방의 의사를 억압할 정도의 것임을 요하지 않고 상대방의 의사에 반하는 유형력의 행사가 있기만 하면 그 힘의 대소강약을 불문한다고 보았습니다. 나아가 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것으로, 이에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 이전부터의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합적으로 고려하여 신중히 결정되어야 한다고 판시했습니다. 학원 강사가 지도를 빙자해 신체를 만지거나 밀착한 사안을 살펴볼 때에도, 접촉이 의사에 반하는 유형력의 행사로서 지도 범위를 벗어났는지를 기준으로 추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 신체 접촉·밀착 + 자세·동작 해명 결합 시 학원 강사 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 잡아준 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '그 순간 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>지도 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '실기 지도는 원래 몸을 잡아주는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 지도와 민감 부위 접촉의 구별이 핵심인 영역입니다.</strong> 손이 향한 부위와 방식을 구체적으로 정리하세요.',
      },
      {
        question: '학원 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 학원·시설에 즉시 보존을 요청하세요.',
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
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '학원 셔틀버스 추행 신고', href: '/guide/sex-crime/sex-crime-academy-shuttle-bus-touch-report-track' },
      { label: '과외 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-private-tutoring-guidance-pretext-touch-report-track' },
      { label: '수영 강습 지도 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-lesson-guidance-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-club-crowd-accidental-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-crowd-accidental-contact-misunderstanding-falsely-accused-defense',
    keyword: '클럽 혼잡 인파 우연 접촉 오해 추행 무고 방어',
    questionKeyword: '클럽·페스티벌처럼 사람이 빽빽하게 몰린 어둡고 시끄러운 공간에서 인파에 밀려 이동하거나 춤추는 과정에서 옆·뒤 사람과 몸이 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 혼잡한 인파 속에서 우연히 닿은 것뿐인데, 신체 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 어둡고 붐벼서 정확히 누가 무엇을 했는지 특정도 어렵고, 상대 진술은 시점마다 달라지고 지목 경위도 불분명해요. 이렇게 클럽 혼잡 인파 속 우연 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점과 진술·범인지목의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '클럽 혼잡 우연 접촉 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '클럽 혼잡 우연 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '클럽 인파 속 우연한 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 진술·범인지목 신빙성·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·페스티벌·공연장처럼 사람이 빽빽하게 몰려 몸이 서로 닿을 수밖에 없고 어둡고 시끄러운 공간에서, 인파에 밀려 이동하거나 춤을 추는 과정에서 옆·뒤 사람과 몸이 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 혼잡한 인파 속에서 우연히 닿은 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 더구나 클럽·인파는 어둡고 붐벼 누가 무엇을 했는지 정확히 특정하기 어렵고 순식간에 벌어지는데도, 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉽고, 상대의 진술마저 시점·내용에 따라 달라지거나 지목 경위가 불분명하다면 더 답답하셨을 거예요. 혐의를 받고 있다면, 그날의 동선과 혼잡 상황, 접촉이 일어난 부위·방식과 인파·조명, CCTV·일행 진술과 상대의 지목 경위를 차분히 정리해 추행의 고의가 없었고 혼잡 속 우연한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대 진술·범인지목의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 성추행 등 사건에서 피해자 진술의 신빙성은 진술의 일관성·구체성과 사건·가해자에 대한 특징적 묘사 등을 종합해 신중히 판단해야 하고, 사진제시나 대면에 의한 범인식별 절차에서는 목격자 진술을 사전에 상세히 기록한 뒤 여러 사람을 동시에 대면시켜 지목하게 하고 상호 사전 접촉을 차단하며 그 과정과 결과를 서면·사진으로 남기는 등의 절차적 요건을 갖추어야 신빙성을 높게 평가할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 혼잡 속 접촉이 추행의 고의로 이루어졌는지, 상대 진술과 범인지목의 신빙성이 인정되는지를 종합해 가려 다툴 여지가 있는 영역입니다. 혼잡 상황·경위 + 접촉 부위·방식 + 고의 부인·진술·지목 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉 부위·경위 ③ 고의 부재 검토 ④ 진술·지목 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 혼잡 우연 접촉 오해 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 클럽·인파·조명·이동 동선·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·경위</strong> — 인파 속 스침·밀림 등 접촉 부위·방식·순간성 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 혼잡·조명·동선 등 간접사실 검토.</li>\n<li><strong>④ 진술·지목 신빙성</strong> — 상대 진술의 일관성과 범인지목 경위의 신빙성 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — CCTV·일행 진술이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행할 고의로 접촉했는지(추행), 아니면 혼잡한 인파 속에서 우연히 스친 것인지(고의 부재)가 판단의 분기점입니다. 클럽·인파 상황과 동선, 접촉 부위·방식과 순간성, CCTV·일행 진술, 상대 진술과 범인지목 경위의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 클럽·인파·조명·이동 동선·시각과 접촉 경위를 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·영상 정리 (즉시)</strong> — 혼잡 속 접촉한 부위·방식과 순간성, 업소·주변 CCTV·입장 기록을 정리.</li>\n<li><strong>3단계 — 진술·지목 신빙성 검토 (병행)</strong> — 상대 진술의 일관성·변동과 범인지목 경위, 정황 부합 여부를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 혼잡 우연 접촉 오해 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>클럽·인파·동선·혼잡도 자료 (경위)</strong></li>\n<li><strong>입장·예약·결제·이용 내역 (이용 입증)</strong></li>\n<li><strong>업소·주변 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>접촉 부위·방식·순간성 정리 (접촉 경위)</strong></li>\n<li><strong>당일 함께한 일행·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술·범인지목 경위 정리 (신빙성 검토)</strong></li>\n<li><strong>고소장·조사 일정·진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽·인파의 혼잡도와 조명·동선, 접촉이 이동·춤 과정에서 순간적으로 일어난 것이라는 점을 정리하면 접촉이 추행의 고의에 의한 것인지, 혼잡 속 우연한 스침인지를 다투는 데 도움이 됩니다. 업소·주변 CCTV와 입장·이용 기록, 상대 진술이 시점·내용에 따라 달라지거나 어두운 곳에서 범인지목 경위가 불분명한 부분을 함께 정리해 고의 부재와 진술·지목 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>혼잡 경위</strong> — 어둡고 붐비는 인파 속 우연한 접촉이었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>범인지목</strong> — 어두운 곳에서의 지목 경위가 신빙성 요건을 갖췄는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술의 신빙성과 범인식별 절차의 요건',
        summary:
          '대법원 2006도2520(대법원, 2008.07.10 선고) 영역에서 법원은 성추행 피해자 진술의 신빙성을 판단할 때 진술이 사건 발생 후 얼마나 지나 이루어졌는지, 최초 청취자나 수사관의 편파적 예단이나 반복 신문으로 특정 답변이 유도되어 기억에 변형이 생겼을 여지는 없는지, 진술 내용이 일관되고 구체적이며 사건·가해자에 대한 특징적 묘사가 있는지 등을 종합적으로 검토하여야 한다고 보았습니다. 나아가 범인식별 절차에서 목격자 진술의 신빙성을 높게 평가하려면, 범인의 인상착의에 관한 진술을 사전에 상세히 기록한 다음 용의자를 포함해 인상착의가 비슷한 여러 사람을 동시에 대면시켜 지목하도록 하고, 용의자와 목격자·비교대상자들이 사전에 접촉하지 못하도록 하며, 그 과정과 결과를 문자·사진으로 서면화하는 등의 조치를 취하여야 하고 사진제시에 의한 절차도 기본적으로 이 원칙에 따라야 한다고 판시했습니다. 클럽 혼잡 인파 속 우연한 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 상대 진술의 신빙성과 어두운 곳에서의 범인지목 경위, 추행 고의의 증명을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '혼잡 상황·경위 + 접촉 부위·방식 + 고의 부인·진술·지목 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '인파에 밀려 스친 접촉인데도 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 혼잡 경위와 접촉 부위·방식·순간성을 정리하세요.',
      },
      {
        question: '어둡고 붐벼서 우연히 닿았다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>혼잡·조명·동선은 고의를 배척하는 간접사실이 되는 영역입니다.</strong> CCTV·입장 기록·일행 진술을 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '어두운 곳에서 지목당했는데 다툴 수 있나요?',
        answer:
          '<strong>범인지목 절차의 요건 충족 여부를 다투는 영역입니다.</strong> 지목 경위와 정황을 구체적으로 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>혼잡 경위·접촉에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '클럽 무대 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
      { label: '축제 인파 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense' },
      { label: '만원버스 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense' },
      { label: '사진 촬영 자세 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-photo-studio-posing-contact-misunderstanding-falsely-accused-defense' },
    ],
  },
];
