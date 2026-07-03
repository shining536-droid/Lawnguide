import { SpokePage } from '../spoke-pages';

// batch96 fraud(6) + sex-crime(4) — 10개 (2026-06-13)
//
// 고유 존재 이유:
// 1. fraud-used-car-flood-damage-track — 일반 중고차 하자류와 분기. '침수 사실을 숨기고 무사고처럼 속여 중고차를 판매' 침수 은폐·편취 고의 판단형 트랙(victim).
// 2. fraud-oneroom-double-contract-track — 일반 전세사기류와 분기. '하나의 원룸을 여러 명에게 이중으로 임대해 보증금을 받아 챙김' 이중임대·편취 판단형 트랙(victim).
// 3. fraud-concert-ticket-resale-track — 일반 중고거래 미전달류와 분기. '구하기 힘든 공연 티켓을 판다며 입금받고 표를 주지 않음' 암표·미전달·편취 절차형 트랙(victim).
// 4. fraud-romance-investment-lure-track — 일반 투자사기류와 분기. '연인·호감 관계를 빙자해 신뢰를 쌓은 뒤 투자·송금을 유인' 로맨스 빙자·고지의무 판단형 트랙(victim).
// 5. fraud-remote-parttime-prepay-track — 일반 부업사기류와 분기. '재택 부업·미션을 미끼로 선입금·충전을 요구한 뒤 잠적' 선입금 요구·편취 절차형 트랙(victim).
// 6. fraud-business-fund-loan-falsely-accused-defense — 일반 사기 무고류와 분기. '사업자금 대여 변제지체를 사기로 고소당함' 차용 당시 변제의사·편취 범의 방어 판단형 트랙(accused).
// 7. sex-crime-gym-personal-training-track — 일반 추행류와 분기. '헬스장 PT 지도·자세 교정 빙자 신체 접촉' 추행 해당성·폭행 의미 판단형 트랙(victim).
// 8. sex-crime-clinic-treatment-track — 일반 추행류와 분기. '진료·처치 과정을 빙자한 의료인의 신체 접촉' 추행 해당성·진술 신빙성 판단형 트랙(victim).
// 9. sex-crime-festival-crowd-grope-track — 일반 추행류와 분기. '축제·공연 인파 속 기습추행' 기습추행·폭행 정도 판단형 트랙(victim).
// 10. sex-crime-business-trip-lodging-falsely-accused-defense — 일반 성범죄 무고류와 분기. '출장 숙소 접촉을 강제추행으로 고소당함' 진술 신빙성·무죄추정 방어 판단형 트랙(accused).

export const spokesBatch96FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-flood-damage-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-flood-damage-track',
    keyword: '중고차 침수 사실 은폐 매매 사기',
    questionKeyword: '중고차 매매상사·딜러에게 ‘무사고, 침수 없음, 상태 좋다’는 말을 믿고 중고차를 샀는데, 며칠 만에 전기 계통 고장이 잇따르고 정비소에 가니 ‘침수차’라는 소견을 받았어요. 성능점검표에도 침수 표시가 없었고 판매자는 ‘몰랐다, 환불은 안 된다’며 발뺌하는데, 처음부터 침수 사실을 알면서 숨기고 무사고처럼 속여 판 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고차 침수 은폐·편취 고의 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 침수 은폐 매매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '무사고라던 중고차가 침수차로 드러나고 판매자가 환불을 거부한다면, 형법 제347조 사기의 침수 은폐·편취 고의 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매상사·딜러·직거래에서 ‘무사고, 침수·사고 이력 없음, 관리 잘 된 차’라는 설명과 성능점검표를 믿고, 새 차보다 싸다는 생각에 적지 않은 돈을 주고 중고차를 산 분의 상황입니다. 그런데 인수 며칠 만에 시동·전조등·계기판·전기 계통에 알 수 없는 고장이 잇따르고, 불안한 마음에 정비소·전문 검수에 맡겼더니 ‘침수 흔적이 있다, 침수차로 보인다’는 소견을 받아 충격받으셨을 거예요. 판매자에게 따지자 ‘나도 몰랐다, 성능점검표대로 팔았다, 환불은 안 된다’며 발뺌하거나 연락을 미뤄, 처음부터 침수 사실을 알면서 무사고처럼 속여 판 건 아닌지 의심되고 막막하실 거예요. 큰돈을 주고 멀쩡한 차인 줄 알았던 게 사실이 아니라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 침수 이력을 알거나 알 수 있었음에도 이를 숨기거나 무사고로 표시해 정상 시세로 판매했다면 기망행위로 평가될 여지가 있고, 매매대금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득이고, 편취의 범의는 계약 당시를 기준으로 거래의 내용·경위·이행과정 등 객관적 사정을 종합해 판단해야 하며, 행정법규 위반 사정만으로 곧바로 기망행위가 되는 것은 아니라고 본 사례 흐름이 있는 영역입니다. 침수 은폐 + 무사고 표시 + 환불 거부 결합은 ‘침수 은폐·편취 고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·차량 정리 ② 침수 은폐·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 침수 은폐 매매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·침수 은폐·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·차량 정리</strong> — 매매계약서·성능점검표·무사고 설명·매매대금·차량 상태 정리.</li>\n<li><strong>② 침수 은폐·고지의무</strong> — 침수 사실을 알거나 알 수 있었음에도 숨겼는지 검토.</li>\n<li><strong>③ 편취액</strong> — 정상가와 침수차 시세 차액이 아니라 교부한 매매대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·매매대금 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 차량 하자와 달리, 침수 사실을 알거나 알 수 있었음에도 무사고로 속여 정상 시세로 팔았는지가 사기 판단의 분기점입니다. 성능점검표와 정비소 침수 소견을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·차량 자료 보존 (즉시)</strong> — 매매계약서·성능점검표·무사고 설명 대화·차량 상태 사진 보존.</li>\n<li><strong>2단계 — 침수 진단 확보 (즉시)</strong> — 정비소·전문 검수·보험개발원 카히스토리로 침수 여부를 객관적으로 확보.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·매매대금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄·경찰 신고, 대한법률구조공단 132 상담.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 매매대금 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 침수 은폐 매매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·침수 은폐·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서·성능점검표 (무사고·침수 표시 확인)</strong></li>\n<li><strong>무사고·침수 없음 설명 대화·광고 캡처 (기망 정황)</strong></li>\n<li><strong>정비소·전문 검수 침수 소견서 (침수 입증)</strong></li>\n<li><strong>보험개발원 카히스토리·사고이력 조회 자료</strong></li>\n<li><strong>매매대금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요구·발뺌·연락 두절 대화 기록</strong></li>\n<li><strong>판매자·매매상사·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무사고 표시 성능점검표와 정비소 침수 소견을 대조하면 침수를 숨겼는지 기망 정황이 선명해집니다. 카히스토리·정비 이력으로 침수 시점을 짚으면 판매자가 알 수 있었는지 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>침수 인식</strong> — 침수 사실을 알거나 알 수 있었는지.</li>\n<li><strong>고지의무</strong> — 침수 이력을 고지·표시할 의무를 어겼는지.</li>\n<li><strong>편취액</strong> — 시세 차액이 아니라 매매대금 전부가 피해액인지.</li>\n<li><strong>고의 시점</strong> — 계약 당시 편취의 고의가 있었는지.</li>\n<li><strong>판매자 특정</strong> — 매매상사·딜러·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·자동차 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취 범의와 기망행위 판단',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물이나 재산상 이익의 취득이고, 편취의 범의는 계약 당시를 기준으로 거래의 내용·체결 경위·이행과정 등 객관적 사정을 종합해 판단해야 하며, 행정법규나 절차 규정을 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정할 수 없다고 판시했습니다. 침수 사실을 숨기고 무사고로 표시해 매매대금을 교부받은 사안을 살펴볼 때에도 편취 고의와 기망행위 성립을 검토해볼 수 있습니다.',
        takeaway: '침수 은폐 + 무사고 표시 + 환불 거부 결합 시 침수 은폐·편취 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 몰랐다는데 사기가 되나요?',
        answer:
          '<strong>침수를 알거나 알 수 있었음에도 무사고로 표시했는지가 핵심인 영역입니다.</strong> 성능점검표와 침수 소견·이력을 확보하세요.',
      },
      {
        question: '성능점검표에 침수 표시가 없으면 어떻게 다투나요?',
        answer:
          '<strong>표시 누락 자체가 다툼의 출발점인 영역입니다.</strong> 정비소 침수 소견과 카히스토리로 침수 사실을 입증하세요.',
      },
      {
        question: '침수 진단은 어디서 받나요?',
        answer:
          '<strong>정비소·전문 검수와 보험개발원 카히스토리가 핵심 자료인 영역입니다.</strong> 침수 흔적·시점을 서면으로 남기세요.',
      },
      {
        question: '침수차도 일부 값어치는 있으니 손해가 적나요?',
        answer:
          '<strong>시세 차액이 아니라 교부한 매매대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '판매자가 환불을 거부하고 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '친구 사업 손실 차용금 사기', href: '/guide/fraud/fraud-loan-friend-business-loss-not-paying' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 2. fraud-oneroom-double-contract-track ───
  {
    domain: 'fraud',
    slug: 'fraud-oneroom-double-contract-track',
    keyword: '월세 원룸 이중임대 보증금 사기',
    questionKeyword: '집주인 또는 자칭 관리인과 월세 원룸 계약을 하고 보증금을 보냈는데, 막상 입주하려니 같은 호실에 이미 다른 세입자가 살고 있거나, 알고 보니 한 방을 여러 명에게 이중으로 계약하고 보증금만 챙긴 정황이 드러났어요. 처음부터 줄 수 없는 방을 여러 명에게 임대해 보증금을 가로챈 것 같은데, 사기로 신고하고 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '월세 원룸 이중임대 보증금 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '월세 원룸 이중임대 보증금 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '한 원룸을 여러 명에게 이중임대하고 보증금만 챙긴 정황이라면, 형법 제347조 사기의 이중임대·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「집주인 또는 ‘관리한다’는 사람과 월세 원룸·고시원·다가구 계약을 맺고, 시키는 대로 보증금과 첫 달 월세를 그 계좌로 보낸 분의 상황입니다. 그런데 막상 입주일에 가보니 같은 호실에 이미 다른 세입자가 살고 있거나, 한 방을 여러 명과 같은 시기에 계약해 보증금만 받아 챙긴 정황, 실제 소유자·임대 권한이 없는 사람이 계약한 정황까지 드러나, 처음부터 정상적으로 내줄 수 없는 방을 여러 명에게 이중으로 임대해 보증금을 가로챈 건 아닌지 의심되고 막막하실 거예요. 들어갈 집도 잃고 큰돈까지 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상적으로 임대할 의사·권한이 없으면서 임대해줄 것처럼 속여 보증금을 받았다면 기망행위로 평가될 여지가 있고, 보증금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 바로 사기죄가 성립하고, 대가가 일부 지급되거나 담보가 제공되었어도 편취액은 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 이중임대 + 보증금 교부 + 권한 없는 계약 결합은 ‘이중임대·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·입금 정리 ② 이중임대·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 월세 원룸 이중임대 보증금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·이중임대·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·입금 정리</strong> — 임대차계약서·등기·보증금 송금·입주 약정 정리.</li>\n<li><strong>② 이중임대·기망</strong> — 임대 의사·권한 없이 같은 방을 이중으로 계약했는지 검토.</li>\n<li><strong>③ 편취액</strong> — 보증금과 선납 월세 등 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 임대인 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 임대차 분쟁과 달리, 처음부터 줄 수 없는 방을 여러 명에게 이중으로 계약해 보증금을 가로챘는지가 사기 판단의 분기점입니다. 계약서·등기와 다른 세입자 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·입금 자료 보존 (즉시)</strong> — 임대차계약서·보증금 송금·입주 대화·등기부 보존.</li>\n<li><strong>2단계 — 이중임대 정황 확보 (즉시)</strong> — 같은 호실 다른 세입자·임대 권한 없음 정황을 확인.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지·내용증명 보증금 반환 요구 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 경찰 신고, 대한법률구조공단 132 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 동일 임대인 공동 신고·민사 보증금 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">월세 원룸 이중임대 보증금 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·이중임대·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·특약·입주 약정 (거래 조건)</strong></li>\n<li><strong>보증금·월세 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>등기부등본·임대 권한 확인 자료</strong></li>\n<li><strong>같은 호실 다른 세입자·이중계약 정황 자료</strong></li>\n<li><strong>입주 거부·연락 두절 대화 기록</strong></li>\n<li><strong>동일 임대인 다른 피해·모집 자료</strong></li>\n<li><strong>임대인·관리인·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약서·등기부와 같은 호실 다른 세입자 정황을 대조하면 이중임대·기망 정황이 선명해집니다. 같은 임대인에게 당한 세입자들을 모아 계약·송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이중임대</strong> — 같은 방을 임대 권한·의사 없이 이중으로 계약했는지.</li>\n<li><strong>편취 범의</strong> — 처음부터 보증금만 챙길 의도였는지.</li>\n<li><strong>편취액</strong> — 보증금과 선납 월세 전부가 피해액인지.</li>\n<li><strong>임대 권한</strong> — 계약자가 임대할 권한이 있었는지.</li>\n<li><strong>임대인 특정</strong> — 명의·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (임대·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금원 편취 사기죄의 편취액',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 대가가 일부 지급되거나 담보가 제공되었어도 편취액은 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부로 보아야 한다고 판시했습니다. 한 원룸을 이중으로 임대해 보증금을 받은 사안을 살펴볼 때에도 보증금 전부를 기준으로 한 편취·재산침해를 검토해볼 수 있습니다.',
        takeaway: '이중임대 + 보증금 교부 + 권한 없는 계약 결합 시 이중임대·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 임대차 분쟁 아닌가요?',
        answer:
          '<strong>임대 의사·권한 없이 같은 방을 이중 계약해 보증금만 챙겼는지가 핵심인 영역입니다.</strong> 계약서·등기·다른 세입자 정황을 확보하세요.',
      },
      {
        question: '임대 권한이 없는 사람이었어요.',
        answer:
          '<strong>임대 권한 없는 계약은 기망 다툼의 출발점인 영역입니다.</strong> 등기부와 임대 권한 확인 자료를 정리하세요.',
      },
      {
        question: '보증금 일부만 손해라고 보나요?',
        answer:
          '<strong>보증금과 선납 월세 등 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 방에 여러 명이 계약했어요.',
        answer:
          '<strong>이중임대 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 세입자별 계약·송금 자료를 모으세요.',
      },
      {
        question: '임대인이 잠적했는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '임대인 전세보증금 빼돌리기', href: '/guide/fraud/fraud-jeonse-deposit-embezzle-track' },
      { label: '사모펀드 원금 손실 사기', href: '/guide/fraud/fraud-private-equity-fund-principal-loss-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 3. fraud-concert-ticket-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-resale-track',
    keyword: '공연 암표 미전달 거래 사기',
    questionKeyword: '구하기 힘든 콘서트·공연·스포츠 경기 티켓을 SNS·중고거래·티켓 양도 글에서 ‘정가보다 비싸지만 양도해주겠다’는 판매자에게 돈을 먼저 보냈는데, 약속한 공연일이 다가와도 표가 오지 않고 판매자는 ‘곧 양도하겠다’며 끌다가 연락을 끊었어요. 처음부터 넘길 표도 없이 입금만 받은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '공연 암표 미전달 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공연 암표 미전달 거래 사기 — 5단계 미전달·환급 점검 | 로앤가이드',
      description:
        '공연 티켓을 양도한다며 입금받고 표를 주지 않은 채 잠적당했다면, 형법 제347조 사기의 미전달·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「예매가 매진된 인기 콘서트·공연·스포츠 경기 티켓을, SNS·팬 커뮤니티·중고거래·티켓 양도 글에서 ‘좌석 좋다, 정가보다 조금 비싸지만 확실히 양도해주겠다’는 판매자에게서 구하려고, 표를 놓치고 싶지 않은 마음에 입장권 대금을 먼저 그 계좌로 송금한 분의 상황입니다. 그런데 약속한 공연일이 다가오는데도 모바일 티켓·양도가 오지 않고, 판매자는 ‘곧 보낸다, 양도 처리 중이다, 예매처 점검이라 지연된다’며 시간만 끌다가 공연 직전 연락을 끊어, 처음부터 넘길 표도 없이 입금만 받아낼 작정이었던 건 아닌지 의심되고 막막하실 거예요. 보고 싶던 공연도 놓치고 돈까지 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 양도할 표·의사 없이 양도해줄 것처럼 속여 티켓 대금을 받았다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망에 의해 스스로 재물을 취득하지 않고 제3자에게 교부받게 한 경우에도 일정 요건 아래 사기죄가 성립하고, 재물편취 사기죄는 기망으로 인한 재물 교부가 있으면 그 자체로 재산침해가 되어 곧 성립한다고 본 사례 흐름이 있는 영역입니다. 미전달 + 입금 + 잠적 결합은 ‘암표 미전달·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미전달·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공연 암표 미전달 거래 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미전달·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 양도 글·좌석 약속·대금 송금·전달 약정 정리.</li>\n<li><strong>② 미전달·기망</strong> — 양도할 표·의사 없이 양도해줄 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취액</strong> — 교부한 티켓 대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 전달 지연과 달리, 처음부터 넘길 표·의사 없이 입금만 받아 가로챘는지가 사기 판단의 분기점입니다. 양도 약속 대화와 미전달·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 양도 글·좌석 약속·송금·전달 대화 캡처·보존.</li>\n<li><strong>2단계 — 미전달 확인 (즉시)</strong> — 약속한 일시까지 양도·발권이 없었다는 사실을 정리.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지·내용증명 반환 요구 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">공연 암표 미전달 거래 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미전달·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>티켓 양도 글·좌석·가격 안내 캡처 (유인 정황)</strong></li>\n<li><strong>양도·전달 약속·일정 대화 기록 (거래 조건)</strong></li>\n<li><strong>티켓 대금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>약속일까지 미전달·미발권 정황 자료</strong></li>\n<li><strong>전달 지연·연락 두절 대화 기록</strong></li>\n<li><strong>동일 판매자 다른 피해·중복 양도 자료</strong></li>\n<li><strong>판매자 계정·닉네임·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양도 약속 대화와 약속일까지 미전달된 정황을 함께 정리하면 미전달·기망 정황이 선명해집니다. 같은 판매자에게 당한 피해자를 모아 송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 양도할 표·의사 없이 입금을 유도했는지.</li>\n<li><strong>미전달</strong> — 약속한 일시까지 양도·발권이 없었는지.</li>\n<li><strong>편취액</strong> — 교부한 티켓 대금 전부가 피해액인지.</li>\n<li><strong>중복 양도</strong> — 같은 표를 여러 명에게 판 정황인지.</li>\n<li><strong>판매자 특정</strong> — 계정·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (티켓·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재물편취 사기죄의 성립과 제3자 교부',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 재물편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 기망행위로 스스로 재물을 취득하지 않고 제3자에게 교부받게 한 경우에도 일정 요건 아래 사기죄가 성립한다고 판시했습니다. 양도할 표 없이 티켓 대금만 받은 사안을 살펴볼 때에도 기망에 의한 재물 교부와 편취 성립을 검토해볼 수 있습니다.',
        takeaway: '미전달 + 입금 + 잠적 결합 시 암표 미전달·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전달 지연일 뿐이라는데 사기가 되나요?',
        answer:
          '<strong>양도할 표·의사 없이 입금만 받았는지가 핵심인 영역입니다.</strong> 양도 약속 대화와 미전달 정황을 확보하세요.',
      },
      {
        question: '미전달은 어떻게 입증하나요?',
        answer:
          '<strong>약속일까지 양도·발권이 없었다는 정황이 출발점인 영역입니다.</strong> 대화·일정·발권 내역을 캡처로 남기세요.',
      },
      {
        question: '같은 표를 여러 명에게 판 것 같아요.',
        answer:
          '<strong>중복 양도 정황은 편취 다툼의 핵심인 영역입니다.</strong> 다른 피해자의 양도 글·송금 자료를 함께 모으세요.',
      },
      {
        question: '대금 전부가 피해인가요?',
        answer:
          '<strong>교부한 티켓 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '판매자가 공연 직전 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '크라우드펀딩 리워드 미배송 사기', href: '/guide/fraud/fraud-crowdfunding-reward-nondelivery-track' },
      { label: '사기죄 양형 4갈래 피해액 합의 전과 고의성', href: '/guide/fraud/fraud-sentencing-four-axes-amount-settle-prior' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-romance-investment-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-investment-lure-track',
    keyword: '로맨스 빙자 투자유인 사기',
    questionKeyword: 'SNS·데이팅앱·랜덤채팅에서 알게 된 상대와 연인·호감 관계로 발전한 뒤, 상대가 ‘좋은 투자처가 있다, 같이 하면 돈을 불릴 수 있다, 나를 믿어라’며 코인·해외선물·플랫폼 투자를 권해 돈을 보냈는데, 처음엔 수익이 나는 듯하다가 출금을 요청하니 추가 입금을 요구하고 결국 연락이 끊겼어요. 연애 감정을 이용해 투자금을 가로챈 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '로맨스 빙자 투자유인 기망·고지의무 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '로맨스 빙자 투자유인 사기 — 5단계 기망·편취 점검 | 로앤가이드',
      description:
        '연인·호감 관계를 빙자해 투자·송금을 유인한 뒤 잠적당했다면, 형법 제347조 사기의 기망·고지의무·편취 판단과 대응까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·데이팅앱·랜덤채팅·해외 지인 소개로 알게 된 상대와 매일 다정한 대화를 나누며 연인·호감 관계로 발전한 뒤, 어느 날부터 상대가 ‘나만 아는 좋은 투자처가 있다, 같이 하면 돈을 불릴 수 있다, 우리 미래를 위해서다, 나를 믿어라’며 코인·해외선물·특정 플랫폼 투자를 권해, 사랑하고 믿는 마음에 적지 않은 돈을 보낸 분의 상황입니다. 처음엔 화면상 수익이 나는 듯 보이다가, 막상 출금을 요청하면 ‘세금이다, 보증금이다’며 추가 입금을 요구하고, 더 보내지 않자 태도가 돌변하거나 결국 연락을 끊어, 처음부터 연애 감정을 이용해 투자금을 가로챌 작정이었던 건 아닌지 의심되고 막막하실 거예요. 마음까지 다친 데다 큰돈을 잃어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부 또는 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 처음부터 투자·수익이 허위이거나 자금을 돌려줄 의사 없이 연인 관계와 거짓 정보로 송금을 유인했다면 기망행위로 평가될 여지가 있습니다. 판례는 사기죄의 기망은 거래관계에서 지켜야 할 신의성실 의무를 저버리는 적극·소극 행위를 모두 포함하고, 일정한 사정을 고지받았다면 거래에 임하지 않았을 관계가 인정되면 그 사정을 고지할 의무가 있어 이를 묵비하면 기망이 되며, 현실적 손해 발생을 요건으로 하지 않는다고 본 사례 흐름이 있는 영역입니다. 로맨스 빙자 + 투자 유인 + 추가 입금·잠적 결합은 ‘기망·고지의무’ 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·송금 정리 ② 기망·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 회수·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 로맨스 빙자 투자유인 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·기망·편취액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·송금 정리</strong> — 만남 경위·연인 빙자·투자 권유·송금 시점 정리.</li>\n<li><strong>② 기망·고지의무</strong> — 허위 투자·자금 사정을 숨기고 송금을 유인했는지 검토.</li>\n<li><strong>③ 편취액</strong> — 투자·추가 입금 등 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 회수·집단 대응</strong> — 계좌·플랫폼 추적·동일 행위자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 실패와 달리, 연인 관계와 허위 정보로 송금을 유인하고 자금을 돌려줄 의사가 없었는지가 사기 판단의 분기점입니다. 대화·투자 화면·송금 내역을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관계·송금 자료 보존 (즉시)</strong> — 대화·연인 빙자·투자 권유·송금·출금 거부 캡처·보존.</li>\n<li><strong>2단계 — 투자·플랫폼 정리 (즉시)</strong> — 투자 화면·수익 화면·추가 입금 요구·플랫폼 정보 정리.</li>\n<li><strong>3단계 — 계좌·자금 흐름 확보 (병행)</strong> — 송금 계좌·플랫폼 지갑·자금 흐름을 확보.</li>\n<li><strong>4단계 — 경찰·금감원 신고 (1주)</strong> — 사이버범죄 신고, 금융감독원 1332 상담.</li>\n<li><strong>5단계 — 회수·집단 대응 (2개월 내)</strong> — 지급정지·동일 행위자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">로맨스 빙자 투자유인 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·기망·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>만남 경위·연인 빙자·투자 권유 대화 캡처 (유인 정황)</strong></li>\n<li><strong>상대 프로필·사진·계정 정보 (행위자 특정)</strong></li>\n<li><strong>투자·수익 화면·플랫폼 안내 자료</strong></li>\n<li><strong>송금·추가 입금·출금 거부 내역 (피해 금액)</strong></li>\n<li><strong>세금·보증금 빙자 추가 요구 대화 기록</strong></li>\n<li><strong>동일 행위자 다른 피해·모집 자료</strong></li>\n<li><strong>송금 계좌·플랫폼 지갑 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연인 빙자 대화와 투자 권유·출금 거부 정황을 시간순으로 정리하면 기망·고지의무 위반 정황이 선명해집니다. 같은 수법에 당한 피해자를 모아 자금 흐름을 묶으면 피해 입증과 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 여부</strong> — 허위 투자·자금 사정으로 송금을 유인했는지.</li>\n<li><strong>고지의무</strong> — 알았다면 송금하지 않았을 사정을 숨겼는지.</li>\n<li><strong>투자 실패 항변</strong> — 단순 손실인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 투자·추가 입금 전부가 피해액인지.</li>\n<li><strong>행위자 특정</strong> — 계정·계좌·지갑으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (투자·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자사기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반과 부작위에 의한 기망',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 지켜야 할 신의성실 의무를 저버리는 모든 적극·소극 행위를 말하고, 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 신의칙상 그 사정을 고지할 의무가 있어 이를 묵비하면 기망이 되며, 사기죄는 현실적 손해 발생을 요건으로 하지 않는다고 판시했습니다. 연인 관계를 빙자해 투자·송금을 유인한 사안을 살펴볼 때에도 고지의무 위반과 기망 성립을 검토해볼 수 있습니다.',
        takeaway: '로맨스 빙자 + 투자 유인 + 추가 입금·잠적 결합 시 기망·고지의무 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실은 제 책임 아닌가요?',
        answer:
          '<strong>연인 관계와 허위 정보로 송금을 유인했는지가 핵심인 영역입니다.</strong> 권유·출금 거부 대화와 송금 내역을 확보하세요.',
      },
      {
        question: '상대가 외국인·익명인데 특정되나요?',
        answer:
          '<strong>계정·계좌·플랫폼 지갑으로 추적할 여지가 있는 영역입니다.</strong> 프로필·자금 흐름을 보존하세요.',
      },
      {
        question: '출금하려니 추가 입금을 요구했어요.',
        answer:
          '<strong>세금·보증금 빙자 추가 요구는 기망 다툼의 핵심인 영역입니다.</strong> 요구 대화와 거부 후 잠적 정황을 정리하세요.',
      },
      {
        question: '연애였다고 우기면 어쩌죠?',
        answer:
          '<strong>관계와 별개로 투자 유인·자금 편취 정황이 핵심인 영역입니다.</strong> 투자 권유·송금·출금 거부를 시간순으로 모으세요.',
      },
      {
        question: '같은 수법에 당한 사람이 많아요.',
        answer:
          '<strong>같은 행위자 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 대화·송금 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '코인 리딩방 투자 사기', href: '/guide/fraud/fraud-crypto-signal-room-investment-track' },
      { label: '리딩방 손실보전 약정 사기', href: '/guide/fraud/fraud-stock-leading-room-loss-guarantee-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-remote-parttime-prepay-track ───
  {
    domain: 'fraud',
    slug: 'fraud-remote-parttime-prepay-track',
    keyword: '재택부업 선입금 요구 사기',
    questionKeyword: 'SNS·문자·오픈채팅에서 ‘집에서 간단한 미션·리뷰·구매대행만 하면 고수익 부업’이라는 광고를 보고 시작했는데, 처음 몇 번은 소액 수당을 주더니 ‘더 큰 미션은 먼저 충전·선입금해야 한다’며 돈을 요구해 보냈고, 수익과 원금을 합쳐 출금하려니 추가 입금을 요구하다 연락이 끊겼어요. 처음부터 선입금만 받아낼 작정이었던 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '재택부업 선입금 요구 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재택부업 선입금 요구 사기 — 5단계 선입금·환급 점검 | 로앤가이드',
      description:
        '재택 부업·미션을 미끼로 선입금·충전을 요구한 뒤 잠적당했다면, 형법 제347조 사기의 선입금 요구·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘집에서 휴대폰만으로 간단한 미션·앱 리뷰·쇼핑몰 구매대행·좋아요 작업만 하면 하루 몇 만 원 고수익’이라는 SNS·문자·오픈채팅 광고를 보고, 부수입이 절실한 마음에 가입해 일을 시작한 분의 상황입니다. 처음 몇 번은 약속대로 소액 수당이 입금돼 믿음이 생기지만, 곧 ‘등급을 올려야 한다, 더 큰 미션은 먼저 충전·선입금해야 진행된다, 세트 미션을 완료해야 출금된다’며 점점 큰 돈을 요구하고, 시키는 대로 보냈다가 수익과 원금을 합쳐 출금하려니 ‘오류다, 세금이다’며 또 추가 입금을 요구하다 결국 연락을 끊어, 처음부터 선입금만 받아낼 작정이었던 건 아닌지 의심되고 막막하실 거예요. 일한 보람은커녕 모은 돈까지 잃어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실제 수익·출금 의사 없이 부업을 가장해 선입금·충전을 유도했다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기로 인한 가중처벌을 적용할 때에는 편취한 재물·재산상 이익의 가액을 구체적으로 산정할 수 있어야 하고, 가액을 산정할 수 없으면 가중처벌 규정으로 처벌할 수 없는 등 편취액 산정을 엄격히 보아야 한다고 본 사례 흐름이 있는 영역입니다. 부업 가장 + 선입금 요구 + 출금 거부·잠적 결합은 ‘선입금 요구·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 가입·입금 정리 ② 선입금 유인·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재택부업 선입금 요구 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·선입금·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입·입금 정리</strong> — 부업 광고·미션 안내·수당·선입금·충전 시점 정리.</li>\n<li><strong>② 선입금 유인·기망</strong> — 실제 수익·출금 의사 없이 선입금을 유도했는지 검토.</li>\n<li><strong>③ 편취액</strong> — 충전·선입금 등 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 운영자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 부업 손실과 달리, 처음부터 출금시킬 의사 없이 선입금·충전만 받아 가로챘는지가 사기 판단의 분기점입니다. 미션 안내와 충전·출금 거부 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·입금 자료 보존 (즉시)</strong> — 부업 광고·미션 안내·수당·충전·송금 대화 캡처·보존.</li>\n<li><strong>2단계 — 출금 거부 정리 (즉시)</strong> — 출금 요청과 추가 입금 요구·잠적 정황을 정리.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지·내용증명 반환 요구 검토.</li>\n<li><strong>4단계 — 경찰·금감원 신고 (1주)</strong> — 사이버범죄 신고, 금융감독원 1332 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 운영자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">재택부업 선입금 요구 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가입·선입금·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>부업 광고·모집 글·미션 안내 캡처 (유인 정황)</strong></li>\n<li><strong>초기 소액 수당·등급·세트 미션 안내 기록</strong></li>\n<li><strong>충전·선입금·송금 내역 (피해 금액)</strong></li>\n<li><strong>출금 요청·추가 입금 요구 대화 기록</strong></li>\n<li><strong>운영자·상담원 닉네임·계정 정보</strong></li>\n<li><strong>동일 운영자 다른 피해·모집 자료</strong></li>\n<li><strong>송금 계좌·예금주 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미션 안내와 충전·출금 거부 정황을 시간순으로 정리하면 선입금 유인·기망 정황이 선명해집니다. 같은 운영자에게 당한 피해자를 모아 송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 출금 의사 없이 선입금만 받을 의도였는지.</li>\n<li><strong>선입금 유인</strong> — 충전·세트 미션 명목으로 입금을 유도했는지.</li>\n<li><strong>편취액</strong> — 충전·선입금 전부가 피해액으로 산정되는지.</li>\n<li><strong>초기 수당 항변</strong> — 소액 수당이 신뢰 유인 수단이었는지.</li>\n<li><strong>운영자 특정</strong> — 계정·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (부업·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 편취액 산정의 엄격성',
        summary:
          '대법원 2022도3771(대법원, 2022.06.30 선고) 영역에서 법원은 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄를 적용할 때에는 편취한 재물·재산상 이익의 가액을 구체적으로 산정할 수 있어야 하고, 그 가액을 구체적으로 산정할 수 없는 경우에는 가중처벌 규정으로 처벌할 수 없다는 점을 유의해야 한다고 판시했습니다. 부업을 가장해 충전·선입금을 받은 사안을 살펴볼 때에도 교부한 금원을 기준으로 한 편취액 산정을 검토해볼 수 있습니다.',
        takeaway: '부업 가장 + 선입금 요구 + 출금 거부·잠적 결합 시 선입금 요구·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '초기에 수당을 받았는데 사기가 되나요?',
        answer:
          '<strong>소액 수당이 더 큰 선입금을 받기 위한 미끼였는지가 핵심인 영역입니다.</strong> 미션 안내와 충전·출금 거부 정황을 확보하세요.',
      },
      {
        question: '충전·선입금이 자발적이었는데도 다투나요?',
        answer:
          '<strong>출금 의사 없이 선입금을 유도했는지가 기망 다툼의 출발점인 영역입니다.</strong> 요구 대화와 거부 후 잠적을 정리하세요.',
      },
      {
        question: '운영자가 익명인데 특정되나요?',
        answer:
          '<strong>닉네임·계좌·예금주로 특정할 여지가 있는 영역입니다.</strong> 송금·대화 내역을 보존하세요.',
      },
      {
        question: '얼마가 피해액으로 잡히나요?',
        answer:
          '<strong>충전·선입금 등 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 부업에 당한 사람이 많아요.',
        answer:
          '<strong>같은 운영자 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 송금·대화 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '코인 P2P OTC 직거래 사기', href: '/guide/fraud/fraud-coin-p2p-otc-scam' },
      { label: '웨딩 벤더 선예약금 잠적', href: '/guide/fraud/fraud-wedding-vendor-photographer-dress-deposit-loss-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-business-fund-loan-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-fund-loan-falsely-accused-defense',
    keyword: '사업자금 대여 변제 사기 무고',
    questionKeyword: '지인·거래처에서 사업자금을 빌려 사업을 운영하다 자금 사정이 나빠져 약속한 변제기에 갚지 못했는데, 상대가 ‘처음부터 갚을 생각 없이 빌려 간 사기’라며 저를 고소했어요. 빌릴 당시에는 분명히 갚을 의사와 능력이 있었고 사업이 어려워져 갚지 못한 것뿐인데, 사기 피의자가 되어 막막합니다. 이런 차용금 사기 고소에 어떻게 방어하나요?',
    ctaKeyword: '사업자금 대여 변제 사기 무고 편취 범의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사업자금 대여 변제 사기 무고 방어 — 5단계 편취 범의 점검 | 로앤가이드',
      description:
        '사업자금 변제지체를 처음부터 갚을 생각 없던 사기로 고소당했다면, 형법 제347조 사기의 변제의사·편취 범의 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·거래처·투자자에게 ‘사업을 키우려 한다, 곧 매출이 나오면 갚겠다’며 사업자금을 빌려 운영하다가, 경기 악화·거래처 부도·매출 부진으로 자금 사정이 나빠져 약속한 변제기에 돈을 갚지 못한 분의 상황입니다. 그런데 상대가 ‘처음부터 갚을 생각도 없이 사업한다고 속여 빌려 간 사기’라며 형사 고소를 해, 단순한 채무 변제 지체일 뿐인데 한순간에 사기 피의자가 되어버린 분의 상황입니다. 빌릴 당시에는 분명히 갚을 의사와 능력이 있었고 사업이 예상과 달리 어려워져 갚지 못한 것뿐인데, 결과가 나쁘다는 이유로 처음부터 사기였던 것처럼 몰려 억울하고 막막하실 거예요. 신용·사업까지 위태로워 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 규정이고, 차용금 사기는 돈을 빌릴 당시를 기준으로 변제 의사·능력과 편취의 범의가 있었는지가 핵심 쟁점인 영역입니다. 혐의를 받고 있다면, 차용 당시 갚을 의사·능력이 있었는지, 단순한 사후의 변제 불능인지가 갈립니다. 판례는 사기죄 성립 여부는 행위 당시를 기준으로 판단하므로 차주가 차용 당시 변제 의사·능력이 있었다면 그 후 변제하지 못해도 민사상 채무불이행에 불과하고, 대주가 변제 지체·불능 위험을 예상했거나 충분히 예상할 수 있었던 경우 단지 변제하지 못했다는 사실만으로 편취 범의가 있었다고 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 차용 당시 사정·자금 흐름을 정리해 다툴 수 있는 영역입니다. 차용 당시 변제의사 + 사후 변제불능 + 정황 다툼 결합은 ‘변제의사·편취 범의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 차용 경위 정리 ② 변제의사·능력 ③ 편취 범의 ④ 자금 흐름·정황 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업자금 대여 변제 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용 경위·변제의사·편취 범의·자금 흐름·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용 경위 정리</strong> — 차용 시기·금액·사업 목적·변제 약정·관계 정리.</li>\n<li><strong>② 변제의사·능력</strong> — 차용 당시 갚을 의사·능력이 있었는지 검토.</li>\n<li><strong>③ 편취 범의</strong> — 행위 당시 기준으로 편취 범의가 부정되는지 검토.</li>\n<li><strong>④ 자금 흐름·정황</strong> — 빌린 돈의 사업 사용·매출·상환 노력 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변제하지 못했다는 사실만으로 곧바로 사기가 되는 것이 아니라, 차용 당시 변제 의사·능력과 편취 범의가 있었는지가 분기점입니다. 차용 경위·자금 사용·상환 노력 정황으로 단순 채무불이행임을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용 경위 정리 (즉시)</strong> — 차용 시기·금액·사업 목적·변제 약정·관계 정리.</li>\n<li><strong>2단계 — 자금 흐름 확보 (1주)</strong> — 빌린 돈의 사업 사용·매출·계좌·세금 자료 확보.</li>\n<li><strong>3단계 — 상환 노력 정리 (2주)</strong> — 일부 변제·연장 협의·상환 의사 표시 정황 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 차용 당시 변제 의사·능력 입증 자료, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업자금 대여 변제 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차용 경위·변제의사·편취 범의 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·계약서·변제 약정 (거래 조건)</strong></li>\n<li><strong>차용 당시 사업 매출·자산·신용 자료 (변제 능력)</strong></li>\n<li><strong>빌린 돈의 사업 사용·자금 흐름 내역 (용도)</strong></li>\n<li><strong>일부 변제·연장 협의·상환 노력 기록</strong></li>\n<li><strong>대주가 위험을 알고도 빌려준 정황 자료</strong></li>\n<li><strong>차용·변제 관련 대화·메시지 기록</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘차용 당시 변제 의사·능력이 있었는지’와 ‘편취 범의가 합리적 의심 없이 증명되는지’입니다. 빌린 돈을 실제 사업에 쓴 자금 흐름과 일부 변제·상환 노력 정황을 정돈하면 단순 채무불이행과 사기를 가르는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>변제의사·능력</strong> — 차용 당시 갚을 의사·능력이 있었는지.</li>\n<li><strong>편취 범의</strong> — 행위 당시 기준으로 편취 범의가 증명되는지.</li>\n<li><strong>채무불이행 경계</strong> — 단순 사후 변제 불능인지 사기인지.</li>\n<li><strong>대주의 위험 인식</strong> — 대주가 변제 위험을 알고도 빌려줬는지.</li>\n<li><strong>자금 사용</strong> — 빌린 돈을 실제 사업에 사용했는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용금 사기의 편취 범의 판단 기준',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄 성립 여부는 행위 당시를 기준으로 판단하므로 차주가 돈을 빌릴 당시 변제 의사·능력이 있었다면 그 후 변제하지 못해도 민사상 채무불이행에 불과하고, 대주가 친척·계속적 거래 등으로 차주의 신용 상태를 인식해 변제 지체·불능 위험을 예상했거나 충분히 예상할 수 있었던 경우 단지 변제하지 못했다는 사실만으로 변제능력을 기망했다거나 편취 범의가 있었다고 단정할 수 없다고 판시했습니다. 사업자금을 빌렸다 갚지 못해 사기로 고소된 사안을 살펴볼 때에도 차용 당시 변제의사·편취 범의를 검토해볼 수 있습니다.',
        takeaway: '차용 당시 변제의사 + 사후 변제불능 + 정황 다툼 결합 시 변제의사·편취 범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '빌린 돈을 못 갚았는데 바로 사기인가요?',
        answer:
          '<strong>변제 못 한 사실만으로는 부족하고 차용 당시 변제의사·편취 범의가 핵심인 영역입니다.</strong> 차용 경위와 자금 사용을 정리하세요.',
      },
      {
        question: '변제 의사가 있었다는 걸 어떻게 다투나요?',
        answer:
          '<strong>차용 당시 사업 매출·자산·자금 사용으로 다투는 영역입니다.</strong> 빌린 돈의 사업 사용 흐름과 상환 노력을 모으세요.',
      },
      {
        question: '사업이 어려워져 못 갚은 건데 어떻게 보나요?',
        answer:
          '<strong>사후의 변제 불능과 차용 당시 편취는 구분되는 영역입니다.</strong> 차용 후 경영 악화 경위를 시간순으로 정리하세요.',
      },
      {
        question: '상대가 제 사정을 알고도 빌려줬어요.',
        answer:
          '<strong>대주가 위험을 알고도 빌려준 정황은 편취 범의를 부정하는 다툼점인 영역입니다.</strong> 관계·거래 경위 자료를 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>차용 당시 사정에 관한 진술의 일관성이 중요한 영역입니다.</strong> 경위·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 무고 대응', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '투자금 회수 지연 사기 고의 무고 방어', href: '/guide/fraud/fraud-investment-return-delay-intent-falsely-accused-defense' },
      { label: '사기 피의자 조사에서 흔한 실수 5가지', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '대출사기 피싱 당했을 때 대처법', href: '/guide/fraud/loan-fraud-response-guide' },
    ],
  },

  // ─── 7. sex-crime-gym-personal-training-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-personal-training-track',
    keyword: '헬스장 PT 지도 중 강제추행',
    questionKeyword: '헬스장에서 PT(퍼스널 트레이닝)를 받던 중, 트레이너가 ‘자세를 잡아준다, 근육 위치를 봐준다’는 명목으로 제 가슴·허리·엉덩이·허벅지 등을 만지거나 뒤에서 몸을 밀착해 큰 불쾌감과 수치심을 느꼈어요. 운동 지도라고 하니 그 자리에서 항의도 못 했는데, 이런 PT 지도 중 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '헬스장 PT 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        'PT 트레이너가 자세 교정을 빙자해 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·폭행 의미를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·피트니스에서 PT(퍼스널 트레이닝)를 받던 중, 트레이너·코치가 ‘자세를 잡아준다, 근육 위치를 봐준다, 호흡을 도와준다’는 명목으로 본인의 가슴·허리·엉덩이·허벅지·골반 등을 손으로 만지거나, 운동을 보조한다며 뒤에서 몸을 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 가르치는 사람과 배우는 사람이라는 관계, ‘원래 이렇게 교정하나, 운동이라 그런가’ 하는 혼란 때문에 그 자리에서 제대로 거부하거나 항의하지 못한 채 수업을 마치고 나와, 정상적인 지도였는지 추행이었는지 헷갈려 막막하셨을 거예요. 계속 다녀야 하는 곳이라 또 마주칠까 봐 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 폭행 또는 협박은 상대방의 항거를 곤란하게 할 정도일 것을 요하지 않고 상대방의 신체에 대한 불법한 유형력의 행사이면 족하며, 폭행행위 자체가 추행에 해당하는 기습추행도 포함된다고 보고, 추행 여부는 관계·경위·행위태양·주위 상황 등을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 지도 빙자 + 의사에 반한 접촉 + 폐쇄·우월 관계 결합은 ‘추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 트레이너 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·트레이너 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 수업 일시·장소·지도 명목·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 지도의 상당한 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 헬스장 CCTV, 수업 예약·메시지·녹음 보존 요청.</li>\n<li><strong>④ 트레이너 특정</strong> — 회원권·PT 등록·CCTV로 트레이너 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지도·교정을 빙자한 접촉이라도 의사에 반하고 성적 자유를 침해하면 추행으로 평가될 수 있고, 항거를 곤란하게 할 정도가 아니어도 기습추행이 될 수 있다는 점이 분기점입니다. 접촉 부위·방식·반복과 헬스장 CCTV를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 수업 일시·장소·지도 명목·접촉 부위·방식·반복 정리.</li>\n<li><strong>2단계 — CCTV·수업 기록 확보 (즉시)</strong> — 헬스장 CCTV, PT 예약·안내·메시지·녹음 보존 요청.</li>\n<li><strong>3단계 — 시설·기관 협조 (직후)</strong> — 헬스장·시설에 영상·회원·트레이너 정보 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>수업 일시·장소·지도 명목·접촉 정황 메모</strong></li>\n<li><strong>회원권·PT 등록·결제·트레이너 정보 (특정)</strong></li>\n<li><strong>헬스장 CCTV 보존 요청 자료</strong></li>\n<li><strong>PT 예약·안내·지도 메시지·녹음 기록</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>다른 회원·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장 CCTV와 PT 메시지는 삭제될 수 있으므로 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소 정황을 남기면 지도의 상당성을 넘었는지 판단하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>폭행의 의미</strong> — 항거 곤란 정도가 아니어도 기습추행이 되는지.</li>\n<li><strong>지도·상당성</strong> — 자세 교정의 상당한 범위를 벗어난 접촉인지.</li>\n<li><strong>트레이너 특정</strong> — 회원권·PT 등록·CCTV로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·메시지·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 폭행 의미와 추행 판단',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 폭행 또는 협박은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고 상대방의 신체에 대해 불법한 유형력을 행사하는 것이면 족하다고 종래 법리를 변경하면서, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 그 해당 여부는 관계·경위·행위태양 등을 종합해 판단해야 한다고 판시했습니다. 지도·교정을 빙자한 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 폭행 의미와 추행 해당성 기준을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 의사에 반한 접촉 + 폐쇄·우월 관계 결합 시 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 잡아준 것뿐이라고 하면 어쩌죠?',
        answer:
          '<strong>지도의 상당한 범위를 벗어난 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '강하게 저항하지 못했는데 불리한가요?',
        answer:
          '<strong>항거 곤란 정도가 아니어도 기습추행이 될 수 있는 영역입니다.</strong> 의사에 반한 접촉 정황을 구체적으로 정리하세요.',
      },
      {
        question: '단둘이라 증거가 없어요.',
        answer:
          '<strong>헬스장 CCTV·PT 메시지·직후 호소로 보강할 수 있는 영역입니다.</strong> 보존 요청과 직후 연락 기록을 남기세요.',
      },
      {
        question: '운동 지도라 그런 거라고 우겨요.',
        answer:
          '<strong>지도의 상당성을 넘은 의사에 반한 접촉인지가 다툼의 핵심인 영역입니다.</strong> 접촉 양상·반복과 직후 정황을 정리하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '필라테스 강사 자세교정 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-pilates-instructor-posture-correction-touch-report-track' },
      { label: '촬영 스튜디오 작가 포즈 지도 부적절 접촉 피해', href: '/guide/sex-crime/sex-crime-photoshoot-studio-photographer-inappropriate-touch-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '축제 인파 속 기습 추행', href: '/guide/sex-crime/sex-crime-outdoor-festival-grope-track' },
    ],
  },

  // ─── 8. sex-crime-clinic-treatment-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-clinic-treatment-track',
    keyword: '진료 처치 중 강제추행',
    questionKeyword: '병원·한의원·의원에서 진료·처치를 받던 중, 의료인이 증상과 관련 없어 보이는 가슴·음부 같은 내밀한 신체 부위를 만지거나, 설명·동의 없이 필요 이상으로 신체를 접촉해 큰 수치심과 불쾌감을 느꼈어요. 진료라고 하니 그 자리에서 따지지 못했는데, 이런 진료 과정의 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '진료 처치 중 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '진료 처치 중 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '진료·처치를 빙자해 내밀한 신체 부위를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·진술 신빙성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「병원·한의원·의원·검진센터에서 진료·검사·처치를 받던 중, 의료인이 본인이 호소한 증상과 관련 없어 보이는 가슴·음부·엉덩이 같은 내밀한 신체 부위를 손으로 만지거나, 필요성·방법에 대한 충분한 설명이나 동의 없이 필요 이상으로 신체를 접촉해 큰 수치심과 불쾌감을 느낀 분의 상황입니다. ‘의료인이니까 진료 과정이겠지, 내가 예민한 건가’ 하는 혼란과, 환자와 의사라는 관계 때문에 그 자리에서 제대로 따지거나 거부하지 못한 채 진료실을 나와, 정상적인 진료였는지 추행이었는지 헷갈려 막막하셨을 거예요. 몸이 아파 찾아간 곳에서 이런 일을 겪어 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행죄의 주관적 요건은 고의로 충분하고 성욕 자극·만족 목적까지 요하지 않으며, 의료인의 진료 과정 신체 접촉이 추행인지는 환자의 성별·연령·의사, 행위 경위, 접촉 부위, 진단·치료의 필요성, 설명·동의 여부 등을 종합해 신중·엄격히 판단해야 하고, 피해자 진술이 사실상 유일한 경우 그 진술의 신빙성을 종합적으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 진료 빙자 + 내밀 부위 접촉 + 설명·동의 흠결 결합은 ‘추행 해당성·진술 신빙성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거·진술 ④ 의료인 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 진료 처치 중 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·의료인 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 진료 일시·과목·증상·접촉 부위·방식·설명·동의 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 진료의 필요성·상당성을 넘은 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거·진술</strong> — 진료기록·CCTV·녹음·직후 호소 등 진술 보강 자료 확보.</li>\n<li><strong>④ 의료인 특정</strong> — 진료 접수·진료기록·CCTV로 의료인 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진료를 빙자한 접촉이라도 필요성·상당성을 넘어 성적 자유를 침해하면 추행으로 평가될 수 있고, 피해자 진술이 유일할 때 그 신빙성을 종합 판단한다는 점이 분기점입니다. 진료기록·접촉 정황과 직후 호소를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 진료 일시·과목·증상·접촉 부위·방식·설명·동의 여부 정리.</li>\n<li><strong>2단계 — 진료기록·CCTV 확보 (즉시)</strong> — 진료기록·접수·CCTV·녹음 보존 요청.</li>\n<li><strong>3단계 — 직후 호소 정리 (직후)</strong> — 동행자·지인·다른 기관에 알린 직후 호소 기록 정리.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·진술·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진료 처치 중 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>진료 일시·과목·증상·접촉 정황 메모</strong></li>\n<li><strong>진료기록·접수·처방 자료 (의료인 특정)</strong></li>\n<li><strong>진료실·대기실 CCTV 보존 요청 자료</strong></li>\n<li><strong>설명·동의 여부·녹음 기록 (상당성 판단)</strong></li>\n<li><strong>직후 호소·동행자·지인 연락 기록</strong></li>\n<li><strong>다른 환자·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록과 접촉 정황·직후 호소를 함께 정리하면 진료의 필요성을 넘었는지와 진술의 신빙성을 함께 짚는 데 도움이 됩니다. CCTV·진료기록은 곧바로 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 진료의 필요성·상당성을 넘은 접촉이 추행인지.</li>\n<li><strong>설명·동의</strong> — 내밀 부위 접촉의 필요성을 설명·동의했는지.</li>\n<li><strong>추행 고의</strong> — 고의면 족하고 성적 목적까지는 요하지 않는지.</li>\n<li><strong>진술 신빙성</strong> — 피해자 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>의료인 특정</strong> — 진료기록·CCTV로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의료행위와 추행 해당성·진술 신빙성',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 강제추행죄 성립에 필요한 주관적 요건은 고의로 충분하고 성욕을 자극·만족시키려는 동기·목적까지 요하지 않으며, 의료인의 진료 과정 신체 접촉이 추행인지는 환자의 성별·연령·의사, 행위 경위, 접촉 부위, 진단·치료의 필요성, 설명·동의 여부 등을 종합해 신중·엄격히 판단해야 하고, 피해자 진술이 사실상 유일한 경우 그 신빙성을 종합적으로 판단해야 한다고 판시했습니다. 진료를 빙자한 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 추행 해당성·진술 신빙성 기준을 검토해볼 수 있습니다.',
        takeaway: '진료 빙자 + 내밀 부위 접촉 + 설명·동의 흠결 결합 시 추행 해당성·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진료 과정이었다고 하면 어쩌죠?',
        answer:
          '<strong>진료의 필요성·상당성을 넘은 접촉인지가 핵심인 영역입니다.</strong> 증상·접촉 부위·설명·동의 여부를 구체적으로 남기세요.',
      },
      {
        question: '설명·동의가 없었는데 다툼이 되나요?',
        answer:
          '<strong>내밀 부위 접촉의 설명·동의 여부는 추행 판단의 중요 요소인 영역입니다.</strong> 진료기록·녹음·정황을 정리하세요.',
      },
      {
        question: '제 진술밖에 없는데 처벌되나요?',
        answer:
          '<strong>피해자 진술이 유일해도 신빙성을 종합 판단하는 영역입니다.</strong> 진술의 일관성과 직후 호소·정황을 보강하세요.',
      },
      {
        question: '의사가 고의가 없었다고 해요.',
        answer:
          '<strong>고의면 족하고 성적 목적까지 요하지 않는 영역입니다.</strong> 접촉 경위·부위·상당성 일탈 정황을 정리하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '과외 교습 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-private-tutoring-guidance-pretext-touch-report-track' },
      { label: '병원 진료 검진 부당 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-medical-exam-improper-touch-report-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: 'PC방 옆자리 강제추행', href: '/guide/sex-crime/sex-crime-pc-room-adjacent-seat-track' },
    ],
  },

  // ─── 9. sex-crime-festival-crowd-grope-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-crowd-grope-track',
    keyword: '축제 인파 기습추행',
    questionKeyword: '축제·콘서트·불꽃놀이·공연장처럼 사람이 빽빽한 곳에서, 옆이나 뒤에 있던 사람이 인파에 섞여 갑자기 제 엉덩이·가슴·허벅지를 쓰다듬거나 만져 큰 수치심을 느꼈어요. 너무 붐벼 그 자리에서 바로 붙잡지 못했고 우연인지 일부러인지 헷갈렸는데, 이런 축제 인파 속 기습추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '축제 인파 기습추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 인파 기습추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '축제·공연 인파 속에서 누군가 갑자기 신체를 쓰다듬어 수치심을 느꼈다면, 형법 제298조 강제추행의 기습추행·추행 해당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「축제·콘서트·불꽃놀이·공연장·클럽처럼 사람이 빽빽하게 몰린 곳에서, 옆이나 뒤에 있던 사람이 인파에 섞여 갑자기 본인의 엉덩이·가슴·허벅지·허리를 쓰다듬거나 손을 대 큰 수치심과 불쾌감을 느낀 분의 상황입니다. 너무 붐비고 정신없는 데다 순식간이라 ‘붐벼서 닿은 우연인지 일부러 만진 건지’ 헷갈렸고, 당황한 채 그 자리에서 바로 붙잡거나 항의하지 못해 ‘착각이면 어쩌지, 증거도 없는데’ 싶어 위축되고 막막하셨을 거예요. 즐거우려고 간 자리에서 이런 일을 겪어 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하고, 다중이 밀집한 장소에서의 추행은 성폭력처벌법으로도 규율되는 영역입니다. 판례는 강제추행죄에는 폭행행위 자체가 추행에 해당하는 이른바 기습추행도 포함되고, 이때 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 것을 요하지 않고 의사에 반하는 유형력의 행사이면 그 힘의 대소강약을 불문하며, 옷 위로 엉덩이·가슴을 쓰다듬는 행위 등도 기습추행에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 인파 속 접촉 + 기습추행 + 우연·고의 다툼 결합은 ‘기습추행·추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 기습추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·장소·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 쓰다듬·접촉이 기습추행에 해당하는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 행사장·주변 CCTV, 직접 촬영·녹음 정황 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·동선·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·현장 경찰·해바라기센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 붐비는 곳이라도 의사에 반한 쓰다듬·접촉은 기습추행이 될 수 있고, 동시에 저질러지는 폭행은 힘의 대소강약을 불문한다는 점이 분기점입니다. 접촉 부위·방식과 행사장 CCTV를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·장소·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV 보존 요청 (즉시)</strong> — 행사장·주변·출입구 CCTV 보존 요청, 직접 촬영·녹음 정황 보존.</li>\n<li><strong>3단계 — 현장 경찰·진행요원 협조 (직후)</strong> — 현장 경찰·안전요원에 즉시 도움·정황 신고 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 기습추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·동선·이탈 정황 기록</strong></li>\n<li><strong>행사장·주변·출입구 CCTV 보존 요청 자료</strong></li>\n<li><strong>직접 촬영·녹음한 정황 자료 (현장 자료)</strong></li>\n<li><strong>입장권·결제·시간대 기록 (동선 특정)</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행사장·주변 CCTV는 보존 기간이 짧으므로 곧바로 주최 측·경찰에 보존을 요청하는 것이 중요합니다. 접촉 부위·방식과 가해자 인상착의·동선을 구체적으로 기록하면 우연과 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 쓰다듬·접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행인 기습추행에 해당하는지.</li>\n<li><strong>우연·고의</strong> — 붐벼서 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동선·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·정황·목격자로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (현장 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 폭행의 정도',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행으로 인정되는 이른바 기습추행도 포함되고, 이때 추행과 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 것을 요하지 않고 의사에 반하는 유형력의 행사가 있기만 하면 힘의 대소강약을 불문하며, 옷 위로 엉덩이·가슴을 쓰다듬는 행위 등도 기습추행에 해당할 수 있다고 판시했습니다. 인파 속에서 갑자기 신체를 쓰다듬은 사안을 살펴볼 때에도 이러한 기습추행·추행 해당성 기준을 검토해볼 수 있습니다.',
        takeaway: '인파 속 접촉 + 기습추행 + 우연·고의 다툼 결합 시 기습추행·추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '붐벼서 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>붐벼서 닿은 우연인지 의사에 반한 쓰다듬·접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '강하게 저항하지 못했는데 불리한가요?',
        answer:
          '<strong>기습추행은 의사를 억압할 정도가 아니어도 성립할 수 있는 영역입니다.</strong> 의사에 반한 접촉 정황을 즉시 기록하세요.',
      },
      {
        question: '그 자리에서 못 잡았는데 특정되나요?',
        answer:
          '<strong>행사장 CCTV와 동선·목격자로 특정할 여지가 있는 영역입니다.</strong> 일시·장소·인상착의를 즉시 기록하세요.',
      },
      {
        question: '다중밀집장소 추행으로도 신고되나요?',
        answer:
          '<strong>축제·공연 등 다중밀집장소 추행으로도 평가될 수 있는 영역입니다.</strong> 장소·정황을 함께 정리해 신고하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '피부관리실 관리 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-skincare-shop-care-pretext-touch-report-track' },
      { label: 'PT 지도 빙자 신체접촉 추행', href: '/guide/sex-crime/sex-crime-pt-trainer-guidance-touch-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성범죄 유형별 처벌 수위 정리', href: '/guide/sex-crime/sex-crime-penalty-levels' },
    ],
  },

  // ─── 10. sex-crime-business-trip-lodging-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-business-trip-lodging-falsely-accused-defense',
    keyword: '출장 숙소 강제추행 무고',
    questionKeyword: '회사 출장·워크숍으로 동료들과 같은 숙소·펜션에 묵으며 술자리·이동·정리 과정에서 접촉이 있었는데, 며칠 뒤 동료·후배가 저를 출장 숙소에서의 강제추행으로 고소·신고했어요. 저는 추행할 의도가 전혀 없었고 자연스러운 상황이었다고 기억하는데, 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어하나요?',
    ctaKeyword: '출장 숙소 강제추행 무고 진술 신빙성·무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '출장 숙소 강제추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '출장 숙소에서의 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 해당성과 진술 신빙성·무죄추정 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 출장·워크숍·세미나로 동료·후배들과 같은 숙소·펜션·연수원에 묵으며 저녁 술자리·이동·짐 정리·부축 같은 접촉이 오갔는데, 며칠 뒤 동료·후배·부하직원이 ‘출장 숙소에서 강제로 추행을 당했다’며 저를 고소·신고하거나 회사에 진정해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고 출장 분위기 속 자연스러운 상황이었다고 기억하는데, 폐쇄적인 숙소 공간이라 목격자가 적고 직접 증거가 상대 진술 위주이며 술자리라 기억이 일부 흐릿해 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 직장 내 소문과 징계까지 겹쳐 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉이 추행에 해당하는지, 그리고 피해 진술의 신빙성이 합리적 의심 없이 인정되는지가 핵심 쟁점입니다. 판례는 성추행 피해를 주장하는 진술의 신빙성 유무는 진술 내용의 일관성·구체성, 경험칙 부합 여부, 객관적 사실과의 모순 여부, 허위 진술 동기 유무 등을 종합해 신중히 판단해야 하고, 형사피고인은 유죄가 확정될 때까지 무죄로 추정된다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 숙소 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 해당성·진술 신빙성’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 출장 숙소 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 출장 일정·숙소 구조·동선·접촉 경위·참석자 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술의 일관성·구체성·객관 사실 부합 여부 검토.</li>\n<li><strong>④ 정황·증거</strong> — 숙소·이동 CCTV·단체대화·좌석·동선으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 원칙 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉이 추행에 해당하는지와 피해 진술이 합리적 의심 없이 신빙성을 갖는지가 분기점입니다. 출장 동선·CCTV·단체대화로 정황과 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 정리 (즉시)</strong> — 출장 일정·숙소 구조·이동·접촉 경위·참석자 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 숙소·이동 CCTV·단체대화·결제·일정 기록 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 상대 진술과 객관 정황·참석자 진술의 불부합·모순 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출장 숙소 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>출장 일정·숙소 구조·동선·접촉 경위 메모</strong></li>\n<li><strong>출장 단체대화·이후 메시지·SNS 기록</strong></li>\n<li><strong>숙소·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·예약·일정 객관 자료 (정황 특정)</strong></li>\n<li><strong>함께한 참석자·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉이 추행에 해당하는지’와 ‘피해 진술이 합리적 의심 없이 신빙성을 갖는지’입니다. 출장 동선·CCTV·단체대화와 참석자 진술 같은 객관 정황을 정돈해 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심을 배제할 정도의 증명이 있는지.</li>\n<li><strong>허위 동기</strong> — 허위로 불리한 진술을 할 동기·이유가 있는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해 진술의 신빙성과 무죄추정 원칙',
        summary:
          '대법원 2014도2918(대법원, 2014.07.24 선고) 영역에서 법원은 성추행 피해를 주장하는 진술의 신빙성 유무는 진술 내용의 일관성·구체성, 논리와 경험칙 부합 여부, 객관적으로 확인된 사실과의 모순 여부, 허위로 불리한 진술을 할 동기·이유의 유무 등을 종합해 신중히 판단해야 한다고 판시했습니다. 출장 숙소에서의 접촉을 추행으로 다투는 사안에서 진술 신빙성과 무죄추정·증명 정도를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '숙소 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 해당성·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자연스러운 상황이었는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 해당성과 진술 신빙성이 핵심인 영역입니다.</strong> 출장 동선·숙소 구조·접촉 경위를 정리하세요.',
      },
      {
        question: '상대 진술만 있는데도 처벌되나요?',
        answer:
          '<strong>진술 신빙성을 종합해 합리적 의심 없는 증명에 이르러야 하는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 정리하세요.',
      },
      {
        question: '숙소라 목격자가 없어요.',
        answer:
          '<strong>이동 CCTV·단체대화·참석자 진술 같은 객관 정황으로 보강할 수 있는 영역입니다.</strong> 출장 전후 기록을 확보하세요.',
      },
      {
        question: '술자리라 기억이 흐릿해요.',
        answer:
          '<strong>결제·일정·동선 등 객관 자료로 보강할 수 있는 영역입니다.</strong> 시간대별 출장 기록을 정돈하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 경위·정황 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 무고 방어 포인트, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '성범죄 무고 방어 전략', href: '/guide/sex-crime/sex-crime-false-accusation-defense' },
      { label: '사진 촬영 포즈 지도 추행 무고 방어', href: '/guide/sex-crime/sex-crime-photo-shoot-posing-guidance-falsely-accused-defense' },
      { label: '화상과외 음란행위 노출', href: '/guide/sex-crime/sex-crime-online-video-tutoring-indecent-exposure-track' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
    ],
  },
];
