import { SpokePage } from '../spoke-pages';

// batch116 fraud(6) + sex-crime(4) — 10개 (2026-07-03)
//
// 고유 존재 이유:
// 1. fraud-used-car-mileage-odometer-tampering-track — 일반 중고차 분쟁과 분기. '중고차 계기판 주행거리를 조작해 진짜인 것처럼 판' 주행거리 조작 기망 편취 판단형 트랙(victim).
// 2. fraud-crypto-exchange-fake-listing-lure-track — 일반 투자 분쟁과 분기. '가상자산 거래소가 허위 상장을 미끼로 투자를 유인해 편취' 허위 상장 유인 절차형 트랙(victim).
// 3. fraud-secondhand-concert-ticket-fake-resale-track — 일반 중고거래 분쟁과 분기. '중고 콘서트 티켓을 진짜인 것처럼 속여 가짜를 판매' 가짜 티켓 판매 기망 편취 판단형 트랙(victim).
// 4. fraud-romance-dating-app-remittance-request-track — 일반 로맨스 분쟁과 분기. '데이팅앱에서 연애를 빙자해 송금을 요구해 편취' 로맨스 송금 요구 절차형 트랙(victim).
// 5. fraud-fake-online-shopping-mall-nondelivery-track — 일반 쇼핑 분쟁과 분기. '가짜 온라인 쇼핑몰이 대금만 받고 물품을 미배송' 미배송 편취 판단형 트랙(victim).
// 6. fraud-loan-brokerage-upfront-fee-intent-falsely-accused-defense — 일반 사기 무고류와 분기. '대출 알선 선수수료 편취로 고소됨' 알선 의사·능력·고지의무 편취 고의 방어 판단형 트랙(accused).
// 7. sex-crime-swimming-pool-lesson-guidance-touch-report-track — 일반 추행류와 분기. '수영장 강습 지도를 빙자해 신체를 추행' 강습 지도 추행 신고 판단형 트랙(victim).
// 8. sex-crime-hospital-medical-exam-improper-touch-report-track — 일반 추행류와 분기. '병원 진료·검진을 빙자해 신체를 부당하게 추행' 진료 검진 추행 신고 절차형 트랙(victim).
// 9. sex-crime-nightclub-dance-floor-touch-report-track — 일반 추행류와 분기. '클럽 댄스 플로어 혼잡을 틈타 신체를 추행' 공중밀집장소 추행 신고 판단형 트랙(victim).
// 10. sex-crime-photo-studio-posing-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '사진 촬영 자세 지도 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch116FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-mileage-odometer-tampering-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-mileage-odometer-tampering-track',
    keyword: '중고차 주행거리 계기판 조작 매매 기망 사기',
    questionKeyword: '중고차 매매상·중고차 플랫폼에서 ‘주행거리가 몇 만 km밖에 안 된 무사고 차’라는 말을 믿고 시세보다 비싼 값에 중고차를 샀어요. 그런데 정비소·성능점검 이력을 보니 실제 주행거리는 훨씬 많았고, 계기판이 되감기·조작된 정황이 드러났어요. 판매자는 ‘나도 몰랐다, 계기판대로 팔았을 뿐이다’며 발뺌하고, 알고 보니 같은 상사가 여러 대를 같은 방식으로 판 정황도 보여요. 처음부터 주행거리를 속여 값을 부풀린 것 같은데, 이런 중고차 주행거리 계기판 조작 매매를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고차 주행거리 조작·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '주행거리가 적다는 말을 믿고 산 중고차가 계기판 조작으로 드러나고 판매자가 발뺌해 막막하다면, 형법 제347조 사기·고지의무 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매상·중고차 거래 플랫폼·개인 직거래에서 ‘주행거리가 몇 만 km밖에 안 된 관리 잘 된 무사고 차다, 계기판을 직접 보면 안다’는 판매자의 말을 믿고, 주행거리가 적으니 이 정도 값은 당연하다는 생각으로 시세보다 높은 대금을 주고 중고차를 산 분의 상황입니다. 그런데 막상 정비소 정비 이력·성능점검 기록부·보험 이력을 확인해보니, 계기판에 표시된 주행거리와 달리 실제로는 훨씬 많은 거리를 운행한 차량이었고, 매매 전 어느 시점에 계기판이 되감기·조작된 정황이 드러나, 주행거리가 적은 차의 값을 치르고도 실제로는 훨씬 많이 탄 차를 손에 쥐게 되어 막막하실 거예요. 판매자에게 이력을 들이대며 따지니 ‘나도 몰랐다, 넘겨받은 계기판 그대로 팔았을 뿐이다’라며 책임을 미루고 점점 연락을 피하고, 알고 보니 같은 매매상이 비슷하게 주행거리를 낮춰 여러 대를 판 정황까지 보이면 단순 거래 착오가 아닐 수 있어 더 답답하셨을 거예요. 주행거리가 조작된 사정을 알면서도, 또는 성능점검 의무가 있는데도 이를 알리지 않고 적은 주행거리 차로 속여 값을 받은 정황이면 단순 하자 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 사기죄의 기망은 재산상 거래관계에서 지켜야 할 신의성실 의무를 저버리는 모든 적극적·소극적 행위를 말하고, 상대방이 일정한 사정을 고지받았더라면 거래하지 않았을 관계가 인정되면 신의칙상 그 사정을 고지할 의무가 있어 이를 묵비하면 기망이 되며, 사기죄는 현실적 손해 발생을 요건으로 하지 않는다고 본 사례 흐름이 있는 영역으로, 주행거리 조작·묵비가 고지의무 위반의 기망인지 가려 다툴 여지가 있습니다. 주행거리 조작 인식 또는 성능점검 고지의무 + 적은 주행거리 강조 + 발뺌 결합은 ‘주행거리 조작 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 주행거리 이력·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 계기판 조작 매매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·이력·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 적은 주행거리 강조 대화·매매계약·성능점검표·결제 내역 정리.</li>\n<li><strong>② 주행거리 이력·기망 입증</strong> — 정비 이력·보험 이력으로 실제 주행거리와 조작 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 조작된 주행거리로 부풀려 지급한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자 다툼과 달리, 주행거리 조작을 알면서 또는 성능점검 고지의무가 있는데도 적은 주행거리 차로 속였는지가 판단의 분기점입니다. 적은 주행거리를 강조한 대화와 실제 주행거리 이력, 조작 정황과 같은 매매상의 반복 판매를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 적은 주행거리 강조 대화·매매계약서·성능점검표·결제·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 주행거리 이력 확보 (즉시)</strong> — 정비소 정비 이력·보험 이력·자동차민원으로 실제 주행거리와 조작 시점을 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 계기판 조작 매매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·이력·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>적은 주행거리 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고차 매매계약서·성능점검 기록부 (계약 내용)</strong></li>\n<li><strong>차량 대금·송금·카드 결제 내역 (피해 금액)</strong></li>\n<li><strong>정비소 정비 이력·보험 이력 (실제 주행거리)</strong></li>\n<li><strong>계기판 조작 시점·되감기 정황 자료</strong></li>\n<li><strong>매매상·판매자·중개인·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정비소 정비 이력·보험 이력·자동차민원으로 실제 주행거리와 계기판 조작 시점을 명확히 하고, 판매자가 강조한 적은 주행거리 광고·대화를 실제 이력과 대비하면 주행거리 조작 기망을 다투는 데 도움이 됩니다. 같은 매매상이 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>조작 여부</strong> — 실제로 계기판이 되감기·조작됐는지.</li>\n<li><strong>조작 인식·고지의무</strong> — 조작을 알면서 또는 고지의무가 있는데도 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 값을 부풀리려 했는지.</li>\n<li><strong>편취액</strong> — 부풀려 지급한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 매매상·중개인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·주행거리 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 기망과 신의칙상 고지의무',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 요건으로서의 기망은 널리 재산상의 거래관계에서 서로 지켜야 할 신의와 성실의 의무를 저버리는 모든 적극적 또는 소극적 행위를 말하는 것으로, 반드시 법률행위의 중요 부분에 관한 허위표시임을 요하지 않고 상대방을 착오에 빠지게 하여 재산적 처분행위를 하도록 하는 판단의 기초가 되는 사실에 관한 것이면 충분하다고 보았습니다. 그리하여 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되는 경우에는 신의성실의 원칙상 사전에 그 사정을 고지할 의무가 있고, 그럼에도 이를 고지하지 않은 것은 고지할 사실을 묵비함으로써 상대방을 기망한 것이 되어 사기죄를 구성하며, 사기죄는 기망행위에 의한 재산·이익의 취득에 본질이 있어 상대방에게 현실적으로 재산상 손해가 발생함을 요건으로 하지 않는다고 판시했습니다. 주행거리를 조작하거나 실제 주행거리를 알리지 않고 적은 주행거리 차로 속여 값을 받은 사안을 살펴볼 때에도, 조작·묵비가 신의칙상 고지의무를 저버린 기망에 해당하는지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '주행거리 조작 인식 또는 성능점검 고지의무 + 적은 주행거리 강조 + 발뺌 결합 시 주행거리 조작 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 몰랐다는데도 사기인가요?',
        answer:
          '<strong>조작을 알면서 또는 고지의무가 있는데도 속였는지가 핵심인 영역입니다.</strong> 적은 주행거리 강조 대화와 실제 이력을 대비하세요.',
      },
      {
        question: '계기판이 조작된 걸 어떻게 입증하나요?',
        answer:
          '<strong>정비 이력·보험 이력이 핵심 단서인 영역입니다.</strong> 실제 주행거리와 계기판 표시의 차이를 정리하세요.',
      },
      {
        question: '성능점검표를 받았는데도 다툴 수 있나요?',
        answer:
          '<strong>점검표 내용과 실제 이력의 차이를 다투는 영역입니다.</strong> 성능점검 기록부와 정비 이력을 함께 정리하세요.',
      },
      {
        question: '얼마를 피해로 볼 수 있나요?',
        answer:
          '<strong>조작된 주행거리로 부풀려 지급한 대금을 다투는 영역입니다.</strong> 시세·결제·송금 내역을 정리하세요.',
      },
      {
        question: '같은 상사에서 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 매매상의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고차 주행거리 이력 조작 추적', href: '/guide/fraud/fraud-used-car-mileage-history-tampering' },
      { label: '중고차 주행거리 조작 무고 방어', href: '/guide/fraud/fraud-used-car-mileage-tampering-falsely-accused-defense' },
      { label: '중고차 주행거리 조작 판매 추적', href: '/guide/fraud/fraud-used-car-mileage-tampering-sale-track' },
      { label: '중고차 주행거리 조작 추적', href: '/guide/fraud/fraud-used-car-mileage-tampering-track' },
    ],
  },

  // ─── 2. fraud-crypto-exchange-fake-listing-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-exchange-fake-listing-lure-track',
    keyword: '가상자산 거래소 허위 상장 투자 유인 기망 사기',
    questionKeyword: '가상자산 거래소·코인 프로젝트가 ‘곧 대형 거래소에 상장이 확정됐다, 상장만 되면 몇 배가 오른다’며 상장을 미끼로 코인·토큰 매수를 권해서 믿고 적지 않은 돈을 넣었어요. 그런데 약속한 상장은 이뤄지지 않았거나 애초에 허위였고, 자체 거래소 시세만 띄워 매수를 유인한 정황이었어요. 출금·환불을 요구하니 ‘상장 일정이 미뤄졌다’며 미루다 결국 사이트를 닫고 잠적했고, 같은 프로젝트에 투자한 다른 사람들도 똑같이 돈을 못 뺐어요. 이런 가상자산 거래소 허위 상장 투자 유인 기망을 사기로 신고하고 투자한 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '가상자산 허위 상장 유인·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가상자산 허위 상장 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '상장이 확정됐다는 말을 믿고 코인에 투자했는데 상장은 허위였고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가상자산 거래소·코인 프로젝트·리딩방·텔레그램 투자 채널이 ‘곧 국내외 대형 거래소에 상장이 확정됐다, 상장만 되면 지금 가격의 몇 배로 오른다, 상장 전 물량은 지금이 마지막 기회다’라며 상장을 앞세워 코인·토큰 매수를 권하고, 상장되면 큰 수익을 얻는다는 기대로 적지 않은 자금을 넣은 분의 상황입니다. 그런데 약속한 상장 일정이 지나도 상장은 이뤄지지 않거나 애초에 상장 계획 자체가 허위였고, 자체 거래소·차트에서 시세만 인위적으로 띄워 매수를 유인한 정황이어서, 오른다던 코인은커녕 넣은 돈만 묶이게 되어 막막하실 거예요. 출금·환불을 요구하면 ‘상장 심사가 지연됐다, 다음 달이면 상장된다’며 차일피일 미루다, 끝내 사이트·채널을 닫고 운영진이 잠적해, 같은 프로젝트에 투자한 다른 사람들도 똑같이 출금도 환불도 받지 못했다면 단순 투자 손실이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 상장시킬 의사나 계획 없이 허위 상장 정보로 매수를 유인해 자금을 받은 정황이면 단순 시세 하락으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 허위 상장 정보·시세 조작으로 매수를 유인해 자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 성립에 영향이 없어 편취액은 대가를 공제한 차액이 아니라 교부받은 금원 전부이며, 금융투자상품 거래에서 사회통념상 부정한 수단·계획·기교를 사용하는 행위도 규제 대상이 된다고 본 사례 흐름이 있는 영역으로, 지급한 투자금 전부를 피해액으로 볼지와 기망·부정거래 여부를 가려 다툴 여지가 있습니다. 상장 의사·계획 결여 + 허위 상장·시세 조작 + 출금 거부·잠적 결합은 ‘허위 상장 유인 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·투자 정리 ② 허위 상장·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가상자산 거래소 허위 상장 투자 유인 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·상장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 정리</strong> — 상장 확정 권유·매수·입금 내역 정리.</li>\n<li><strong>② 허위 상장·기망 입증</strong> — 약속한 상장의 실재 여부와 시세 조작·유인 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 매수·입금한 투자금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 시세 하락과 달리, 상장시킬 의사·계획 없이 허위 상장 정보로 매수를 유인해 자금을 받았는지가 판단의 분기점입니다. 상장을 강조한 권유 자료와 실제 상장 여부, 시세 조작·잠적 정황, 다른 투자자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 상장 확정 권유·투자 안내·매수·입금·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 허위 상장·기망 입증 (즉시)</strong> — 약속한 상장 실재 여부, 시세 조작·출금 지연·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·신고 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 거래소·운영진 정보를 정리.</li>\n<li><strong>4단계 — 경찰·금감원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가상자산 거래소 허위 상장 투자 유인 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·상장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>상장 확정 권유·홍보 캡처 (거래 조건)</strong></li>\n<li><strong>투자 안내·백서·약정 자료 (계약 내용)</strong></li>\n<li><strong>코인 매수·입금·송금 내역 (피해 금액)</strong></li>\n<li><strong>약속한 상장 실재 여부 확인 자료</strong></li>\n<li><strong>시세 조작·출금 지연·잠적 대화 기록</strong></li>\n<li><strong>거래소·프로젝트·운영진·지갑·계좌 정보</strong></li>\n<li><strong>다른 투자자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 약속한 상장이 실제로 존재·진행됐는지, 자체 거래소 시세가 인위적으로 조작됐는지를 확인하고, 매수·입금 시점과 상장 무산·출금 지연·잠적 시점의 흐름을 정리하면 상장 의사 없이 자금만 받았는지를 다투는 데 도움이 됩니다. 같은 프로젝트에 투자한 다른 사람을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상장 실재</strong> — 약속한 상장이 실재하거나 진행됐는지.</li>\n<li><strong>기망·부정거래</strong> — 허위 상장·시세 조작으로 매수를 유인했는지.</li>\n<li><strong>편취 범의</strong> — 단순 시세 하락인지 처음부터 자금만 노렸는지.</li>\n<li><strong>편취액</strong> — 대가가 있어도 매수·입금한 자금 전부가 피해액인지.</li>\n<li><strong>운영진 특정</strong> — 프로젝트·지갑·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (가상자산·투자 피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액과 부정한 수단·계획·기교',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 상당한 대가가 지급되었거나 피해자의 전체 재산상 손해가 없더라도 사기죄 성립에는 영향이 없으므로, 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부받은 금원으로부터 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 보아야 한다고 하였습니다. 나아가 기업의 부실 재무제표 제출과 같은 기망행위와 금융기관의 여신 결정 사이의 인과관계 판단 기준을 제시하고, 자본시장과 금융투자업에 관한 법률 제178조 제1항 제1호가 금지하는 ‘부정한 수단, 계획 또는 기교’란 사회통념상 부정하다고 인정되는 일체의 수단·계획·기교를 말한다고 판시했습니다. 허위 상장 정보와 시세 조작으로 코인 매수를 유인해 자금을 받은 사안을 살펴볼 때에도, 지급한 투자금 전부를 편취액으로 볼지와 부정한 수단에 의한 기망 여부를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '상장 의사·계획 결여 + 허위 상장·시세 조작 + 출금 거부·잠적 결합 시 허위 상장 유인 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '상장이 미뤄진 것뿐이라는데도 사기인가요?',
        answer:
          '<strong>상장시킬 의사·계획이 실제로 있었는지가 핵심인 영역입니다.</strong> 상장 확정 권유와 실제 상장 여부를 대비하세요.',
      },
      {
        question: '허위 상장인 걸 어떻게 밝히나요?',
        answer:
          '<strong>약속한 상장의 실재와 시세 조작 정황이 단서인 영역입니다.</strong> 홍보·권유 자료와 출금 지연 기록을 정리하세요.',
      },
      {
        question: '코인 시세가 그냥 떨어진 것과 어떻게 구별하나요?',
        answer:
          '<strong>허위 상장·시세 조작으로 유인했는지가 구별점인 영역입니다.</strong> 상장 약속과 자체 거래소 시세 흐름을 정리하세요.',
      },
      {
        question: '지갑·해외 거래소라 신고가 되나요?',
        answer:
          '<strong>국내 송금·계좌·연락 자료로 신고를 검토할 수 있는 영역입니다.</strong> 입금·대화·지갑 주소를 모아 접수하세요.',
      },
      {
        question: '다른 투자자도 같이 못 뺀 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·투자 시점·출금 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '가상자산 거래소 허위 출금 차단 추적', href: '/guide/fraud/fraud-crypto-exchange-fake-withdrawal-block-track' },
      { label: '거래소 출금 차단 먹튀 추적', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-block-exit-track' },
      { label: '거래소 출금 동결 추적', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-freeze-track' },
      { label: 'NFT 허위 프로젝트 유인 추적', href: '/guide/fraud/fraud-nft-artwork-fake-project-lure-track' },
    ],
  },

  // ─── 3. fraud-secondhand-concert-ticket-fake-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-concert-ticket-fake-resale-track',
    keyword: '중고 콘서트 티켓 가짜 판매 기망 사기',
    questionKeyword: '중고 거래·티켓 양도 커뮤니티에서 매진된 콘서트 티켓을 ‘정상 예매한 진짜 티켓이라 양도만 하면 된다’는 말을 믿고 웃돈까지 얹어 샀어요. 그런데 막상 받은 예매번호·QR가 위조·도용된 가짜였거나 이미 다른 사람에게 판 중복 양도라 입장이 안 됐어요. 판매자는 ‘시스템 오류다, 곧 처리된다’며 미루다 연락을 끊고 잠적했고, 알고 보니 같은 사람이 여러 명에게 같은 좌석을 판 정황도 보여요. 처음부터 유효한 티켓을 넘길 의사 없이 가짜를 진짜인 것처럼 속여 판 것 같은데, 이런 중고 콘서트 티켓 가짜 판매를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 콘서트 티켓 가짜 판매·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 가짜 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '진짜 티켓이라는 말을 믿고 산 콘서트 티켓이 가짜·중복 양도로 입장이 거부되고 잠적당했다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·티켓 양도 커뮤니티·SNS에서 이미 매진된 콘서트·공연·경기 티켓을 ‘정상적으로 예매한 진짜 티켓이라 예매번호만 넘기면 바로 입장된다, 급하게 양도하는 것이라 웃돈만 조금 얹으면 된다’는 판매자의 말을 믿고, 보고 싶은 공연을 놓치지 않으려는 마음으로 웃돈까지 얹어 티켓 값을 보낸 분의 상황입니다. 그런데 막상 받은 예매번호·QR코드가 위조·도용된 가짜이거나 이미 다른 사람에게 넘긴 중복 양도여서 공연 당일 현장에서 입장을 거부당해, 티켓 값은 값대로 치르고도 공연은 보지 못하게 되어 막막하실 거예요. 판매자에게 따지면 ‘예매처 시스템 오류다, 곧 정상 처리된다’며 차일피일 미루다 연락처·계정을 닫고 잠적하고, 알고 보니 같은 판매자가 같은 좌석을 여러 명에게 팔거나 존재하지 않는 티켓을 진짜처럼 판 정황까지 보이면 단순 거래 착오가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 유효한 티켓을 넘길 의사 없이 가짜·중복 티켓을 진짜인 것처럼 속여 대금을 받은 정황이면 단순 양도 분쟁으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 유효한 티켓을 넘길 의사 없이 진짜 티켓이라 속여 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망하여 대금을 교부받은 사기죄는 그 자체로 성립하고 위계로 업무를 방해한 죄 등 다른 죄와 보호법익·행위 태양·기수 시기가 달라 별개로 성립할 수 있다고 본 사례 흐름이 있는 영역으로, 가짜 티켓 판매의 기망과 편취를 다른 정황과 구별해 다툴 여지가 있습니다. 유효 티켓 인도 의사 결여 + 가짜·중복 티켓 + 발뺌·잠적 결합은 ‘가짜 티켓 판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가짜·중복·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 콘서트 티켓 가짜 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·진위·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 진짜 티켓 강조 대화·양도글·결제·송금 내역 정리.</li>\n<li><strong>② 가짜·중복·기망 입증</strong> — 예매처 조회로 위조·도용·중복 양도 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 웃돈 포함 지급한 티켓 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 양도 분쟁과 달리, 유효한 티켓을 넘길 의사 없이 가짜·중복 티켓을 진짜인 것처럼 속였는지가 판단의 분기점입니다. 진짜 티켓을 강조한 대화와 예매처 조회 결과, 입장 거부·잠적 정황과 같은 판매자의 중복 판매를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 진짜 티켓 강조 대화·양도글·결제·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 진위·중복 확인 (즉시)</strong> — 예매처 조회로 위조·도용·중복 양도 여부와 입장 거부 정황을 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 콘서트 티켓 가짜 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·진위·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>진짜 티켓 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>티켓 양도글·합의 내용·좌석 정보 (계약 내용)</strong></li>\n<li><strong>티켓 대금·웃돈·송금 내역 (피해 금액)</strong></li>\n<li><strong>예매처 조회·위조·도용·중복 확인 자료</strong></li>\n<li><strong>현장 입장 거부 확인·안내 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·중복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예매처 조회로 예매번호·QR가 위조·도용·중복 양도인지 확인하고, 판매자가 강조한 진짜 티켓 대화를 실제 조회 결과·입장 거부 정황과 대비하면 가짜 티켓 판매 기망을 다투는 데 도움이 됩니다. 같은 판매자가 같은 좌석을 여러 명에게 판 흔적을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>티켓 진위</strong> — 예매번호·QR가 위조·도용·중복인지.</li>\n<li><strong>인도 의사</strong> — 유효한 티켓을 넘길 의사가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 대금만 노렸는지.</li>\n<li><strong>편취액</strong> — 웃돈 포함 지급한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (티켓 양도·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 편취와 다른 죄의 별개 성립',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 피고인이 위탁기관을 기망하여 대금 등을 계속 청구·수령해 편취하고 같은 방법으로 그 업무를 위계로써 방해하였다는 사안에서, 기망하여 대금을 교부받은 특정경제범죄 가중처벌 등에 관한 법률 위반(사기)죄와 위계로써 업무를 방해한 업무방해죄는 보호법익, 구성요건적 행위의 양태, 범죄의 기수 시기 등이 서로 다르고, 어느 한 죄의 불법과 책임이 다른 죄의 불법과 책임을 모두 포함하고 있지 않아 별개로 성립한다고 보았습니다. 나아가 두 죄는 법률상 1개의 행위로 평가되는 경우로 보기 어렵고 구성요건과 보호법익을 달리하므로 상상적 경합이 아니라 실체적 경합관계에 있다고 판시했습니다. 유효한 티켓을 넘길 의사 없이 가짜·중복 티켓을 진짜인 것처럼 속여 대금을 받은 사안을 살펴볼 때에도, 기망에 의한 대금 편취가 성립하는지를 중심에 두고 관련 정황과 구별해 가려 검토해볼 수 있습니다.',
        takeaway: '유효 티켓 인도 의사 결여 + 가짜·중복 티켓 + 발뺌·잠적 결합 시 가짜 티켓 판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시스템 오류라고 하는데도 사기인가요?',
        answer:
          '<strong>유효한 티켓을 넘길 의사가 있었는지가 핵심인 영역입니다.</strong> 진짜 티켓 강조 대화와 예매처 조회 결과를 대비하세요.',
      },
      {
        question: '가짜·중복 티켓인 걸 어떻게 입증하나요?',
        answer:
          '<strong>예매처 조회 결과가 핵심 단서인 영역입니다.</strong> 위조·도용·중복 확인과 입장 거부 안내를 확보하세요.',
      },
      {
        question: '웃돈까지 냈는데 다 피해로 보나요?',
        answer:
          '<strong>웃돈 포함 지급한 대금을 편취액으로 다투는 영역입니다.</strong> 결제·송금 내역을 정리하세요.',
      },
      {
        question: '직거래 송금이라 환급이 안 되나요?',
        answer:
          '<strong>송금 거래여도 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 계좌·거래 자료를 정리하세요.',
      },
      {
        question: '같은 좌석을 여러 명이 산 것 같아요.',
        answer:
          '<strong>중복 판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·양도글을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '콘서트 티켓 가짜 링크 판매 추적', href: '/guide/fraud/fraud-concert-ticket-resale-fake-link-track' },
      { label: '중고 콘서트 티켓 중복 양도 추적', href: '/guide/fraud/fraud-secondhand-concert-ticket-duplicate-resale-track' },
      { label: '콘서트 티켓 양도 미이전 추적', href: '/guide/fraud/fraud-concert-ticket-resale-no-transfer-track' },
      { label: '콘서트 티켓 양도 잠적 추적', href: '/guide/fraud/fraud-concert-ticket-resale-vanish-track' },
    ],
  },

  // ─── 4. fraud-romance-dating-app-remittance-request-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-dating-app-remittance-request-track',
    keyword: '데이팅앱 연애 빙자 송금 요구 로맨스 기망 사기',
    questionKeyword: '데이팅앱·SNS에서 만난 상대가 다정하게 연애하듯 매일 연락하며 신뢰를 쌓더니, 어느 순간 ‘급한 사정이 생겼다, 곧 만나려면 이 돈이 필요하다, 세관·수수료만 내면 큰 돈을 보낼 수 있다’며 여러 차례 송금을 요구했어요. 사랑하는 사이라 믿고 보냈는데, 만남은 계속 미뤄지고 요구 금액만 늘다가 결국 연락이 끊겼어요. 알고 보니 프로필 사진·신분도 가짜였고 처음부터 돈을 노린 정황이었어요. 이런 데이팅앱 연애 빙자 송금 요구 로맨스 기망을 사기로 신고하고 보낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '로맨스 스캠 송금 요구·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '데이팅앱 로맨스 스캠 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '연애하듯 신뢰를 쌓은 상대의 송금 요구에 응했다가 잠적당해 막막하다면, 형법 제347조 사기·전기통신금융사기 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「데이팅앱·SNS·랜덤 채팅에서 알게 된 상대가 매일 다정하게 연락하며 마치 진지하게 연애하는 것처럼 신뢰와 애정을 쌓아가더니, 어느 순간 ‘갑자기 급한 사정이 생겼다, 곧 만나러 가려면 이 돈이 필요하다, 해외에서 큰돈을 보내려는데 세관·수수료·인증비만 먼저 내면 몇 배로 돌려주겠다’며 여러 차례 송금을 요구해, 사랑하고 믿는 사이라는 마음에 적지 않은 돈을 보낸 분의 상황입니다. 그런데 돈을 보낼수록 만남은 계속 다음으로 미뤄지고, 이런저런 명목으로 요구 금액만 점점 늘어나다가, 더 보낼 수 없다고 하자 태도가 돌변하거나 어느 순간 연락이 완전히 끊겨, 애정도 돈도 모두 잃게 되어 막막하실 거예요. 뒤늦게 확인해보니 프로필 사진은 도용된 것이고 이름·직업·신분마저 가짜였으며, 같은 수법으로 여러 사람에게 접근해 송금을 받아온 정황까지 보이면 처음부터 연애를 가장해 돈을 노린 것이라는 생각에 더 답답하고 참담하셨을 거예요. 처음부터 만나거나 돌려줄 의사 없이 연애 감정을 이용해 각종 명목으로 송금을 받은 정황이면 단순 연인 간 금전 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하며, 전기통신을 이용해 기망하여 자금을 송금·이체하게 하는 행위는 전기통신금융사기 관련 특별법으로도 규율되는 영역입니다. 신분·사정을 속이고 연애를 가장해 각종 명목으로 송금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 전기통신금융사기 관련 특별법의 개정 경과와 처벌 범위를 짚으며 전기통신을 이용해 타인을 기망·공갈하여 자금을 송금·이체하게 하는 행위 등을 처벌 대상으로 본 사례 흐름이 있는 영역으로, 어떤 죄책과 절차로 다툴지를 가려볼 여지가 있습니다. 신분·사정 기망 + 연애 가장 + 반복 송금·잠적 결합은 ‘로맨스 송금 요구 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·송금 정리 ② 신분·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 데이팅앱 연애 빙자 송금 요구 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·신분·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·송금 정리</strong> — 대화·송금 요구 명목·이체 내역 정리.</li>\n<li><strong>② 신분·기망 입증</strong> — 프로필 사진 도용·가짜 신분·거짓 사정 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 명목별로 송금한 금액 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·전기통신금융사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 연인 간 금전 다툼과 달리, 신분·사정을 속이고 연애를 가장해 각종 명목으로 송금을 받았는지가 판단의 분기점입니다. 다정한 대화와 송금 요구 명목, 프로필 도용·가짜 신분과 잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관계·송금 자료 보존 (즉시)</strong> — 대화·송금 요구 명목·이체·송금 내역과 프로필을 캡처 보존.</li>\n<li><strong>2단계 — 신분·기망 입증 (즉시)</strong> — 프로필 사진 도용·가짜 신분·거짓 사정과 잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·신고 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계좌·연락처를 정리.</li>\n<li><strong>4단계 — 경찰·금감원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">데이팅앱 연애 빙자 송금 요구 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·신분·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>데이팅앱·메신저 대화 전체 캡처 (관계·기망)</strong></li>\n<li><strong>송금 요구 명목·약속·대화 (거래 조건)</strong></li>\n<li><strong>송금·이체·환전·상품권 결제 내역 (피해 금액)</strong></li>\n<li><strong>프로필 사진 도용·가짜 신분 확인 자료</strong></li>\n<li><strong>만남 미루기·잠적·태도 돌변 대화 기록</strong></li>\n<li><strong>상대 계좌·전화·계정·닉네임 정보</strong></li>\n<li><strong>같은 수법 피해자·공유 커뮤니티 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대화 전체를 시간순으로 보존해 신뢰를 쌓아가다 송금을 요구한 흐름을 드러내고, 프로필 사진 도용·가짜 신분·거짓 사정을 확인하면 연애를 가장한 기망이었는지를 다투는 데 도움이 됩니다. 상대 계좌·전화번호로 지급정지·피해구제를 신속히 신청하고, 같은 수법으로 피해를 본 다른 사람을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신분·사정 기망</strong> — 신분·프로필·사정을 속였는지.</li>\n<li><strong>연애 가장</strong> — 연애 감정을 이용해 송금을 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 금전 다툼인지 처음부터 송금만 노렸는지.</li>\n<li><strong>편취액</strong> — 명목별로 송금한 금액이 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계좌·전화·계정으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기 처벌 범위와 법 개정 경과',
        summary:
          '대법원 2024도7516(대법원, 2024.09.27 선고) 영역에서 법원은 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법이 전기통신을 이용하여 타인을 기망·공갈함으로써 재산상 이익을 취하거나 제3자에게 취하게 하는 행위로서 자금을 송금·이체하도록 하는 행위, 개인정보를 알아내어 자금을 송금·이체하는 행위 등을 전기통신금융사기로 정의하고, 이를 목적으로 정보처리장치에 정보·명령을 입력하게 하거나 취득한 정보를 이용해 입력하는 행위 등을 처벌하도록 규정해온 경과를 짚었습니다. 그리고 2023년 개정으로 대면편취형·출금형 등을 정의에 포함하고 처벌 수준을 높이면서도 경과규정을 두지 않은 사정 등을 종합할 때, 종전 규정이 정한 행위가 범죄를 구성하지 않게 되어 형이 폐지된 것으로 볼 수 없다고 판시했습니다. 데이팅앱에서 연애를 가장해 각종 명목으로 송금을 받은 사안을 살펴볼 때에도, 전기통신을 이용한 기망과 송금 유도의 실질을 기준으로 사기·전기통신금융사기 죄책과 대응 절차를 가려 검토해볼 수 있습니다.',
        takeaway: '신분·사정 기망 + 연애 가장 + 반복 송금·잠적 결합 시 로맨스 송금 요구 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '연인 사이 돈거래인데도 사기인가요?',
        answer:
          '<strong>신분·사정을 속이고 연애를 가장했는지가 핵심인 영역입니다.</strong> 대화 흐름과 송금 요구 명목을 정리하세요.',
      },
      {
        question: '프로필이 가짜인 걸 어떻게 밝히나요?',
        answer:
          '<strong>사진 도용·가짜 신분 확인이 단서인 영역입니다.</strong> 대화·프로필·거짓 사정을 함께 캡처해두세요.',
      },
      {
        question: '여러 번 나눠 보냈는데 다 피해로 보나요?',
        answer:
          '<strong>명목별로 송금한 금액 전부를 편취액으로 다투는 영역입니다.</strong> 이체·송금·환전 내역을 정리하세요.',
      },
      {
        question: '상대가 해외에 있는 것 같은데 신고가 되나요?',
        answer:
          '<strong>국내 송금·계좌·연락 자료로 신고를 검토할 수 있는 영역입니다.</strong> 계좌·전화·대화를 모아 접수하세요.',
      },
      {
        question: '같은 수법에 당한 사람이 또 있는 것 같아요.',
        answer:
          '<strong>동일 수법 피해는 편취 다툼의 출발점인 영역입니다.</strong> 공유 커뮤니티·계좌·프로필 정보를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '데이팅앱 로맨스 스캠 추적', href: '/guide/fraud/fraud-dating-app-romance-scam-track' },
      { label: '데이팅앱 투자 유인 로맨스 추적', href: '/guide/fraud/fraud-romance-dating-app-investment-lure-track' },
      { label: '로맨스 해외송금 편취 추적', href: '/guide/fraud/fraud-romance-overseas-remittance-track' },
      { label: '로맨스 스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
    ],
  },

  // ─── 5. fraud-fake-online-shopping-mall-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-online-shopping-mall-nondelivery-track',
    keyword: '가짜 온라인 쇼핑몰 물품 미배송 기망 사기',
    questionKeyword: 'SNS 광고·검색으로 알게 된 온라인 쇼핑몰이 인기 상품을 시중보다 크게 싸게 판다고 해서 계좌이체·현금성 결제로 주문했는데, 결제만 받고 물품은 오지 않았어요. 배송 조회는 가짜 송장이거나 조회가 안 됐고, 문의하니 ‘배송 지연이다, 곧 발송된다’며 미루다 결국 사이트를 닫고 연락처도 사라졌어요. 알고 보니 사업자 정보도 도용·허위였고, 같은 쇼핑몰에서 결제한 다른 사람들도 똑같이 물건을 못 받았어요. 처음부터 물건을 보낼 의사 없이 결제만 받은 정황인데, 이런 가짜 온라인 쇼핑몰 물품 미배송 기망을 사기로 신고하고 결제한 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '가짜 쇼핑몰 미배송·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '가짜 쇼핑몰 미배송 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '싸게 판다는 쇼핑몰에 결제했는데 물건은 안 오고 사이트가 닫혀 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「인스타그램·페이스북 광고나 검색을 통해 알게 된 온라인 쇼핑몰이 인기 브랜드·품절 상품을 시중보다 크게 싸게 판다며 ‘한정 수량, 오늘까지만 특가’라고 광고해, 좋은 기회라는 생각으로 계좌이체·무통장입금·현금성 결제로 물건을 주문하고 대금을 보낸 분의 상황입니다. 그런데 결제만 받아가고 약속한 날이 지나도 물품은 오지 않고, 배송 조회를 해보면 존재하지 않는 가짜 송장번호이거나 아예 조회가 되지 않아, 물건은커녕 보낸 돈만 묶이게 되어 막막하실 거예요. 고객센터·채팅으로 문의하면 ‘물량이 몰려 배송이 지연됐다, 이번 주 안에 꼭 발송된다’며 계속 미루다, 끝내 사이트를 폐쇄하고 전화·메신저 연락처마저 사라져, 뒤늦게 확인해보니 표시된 사업자등록·주소·연락처가 도용되거나 허위였고, 같은 쇼핑몰에서 결제한 다른 소비자들도 똑같이 물건을 받지 못했다면 단순 배송 사고가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 물건을 보낼 의사나 능력 없이 특가로 유인해 결제만 받은 정황이면 단순 거래 지연으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 물건을 보낼 의사 없이 특가로 유인해 결제만 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄는 타인을 기망하여 하자 있는 의사에 기해 재물의 교부를 받으면 성립하는 것으로, 재산적 가치가 인정되는 물건을 기망으로 교부받으면 그에 대한 편취행위가 성립한다고 본 사례 흐름이 있는 영역으로, 결제만 받고 물품을 보내지 않은 행위가 기망에 의한 재물 편취인지 가려 다툴 여지가 있습니다. 배송 의사·능력 결여 + 특가 유인 + 미배송·잠적 결합은 ‘가짜 쇼핑몰 미배송 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미배송·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 온라인 쇼핑몰 물품 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미배송·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 특가 광고·주문·결제·송금 내역 정리.</li>\n<li><strong>② 미배송·기망 입증</strong> — 가짜 송장·미배송·사업자 정보 허위 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 결제·이체한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·카드 항변·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 물건을 보낼 의사·능력 없이 특가로 유인해 결제만 받았는지가 판단의 분기점입니다. 특가 광고와 결제 내역, 가짜 송장·사업자 정보 허위와 폐쇄·잠적 정황, 다른 소비자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 특가 광고·주문 내역·결제·송금·문의 대화를 캡처 보존.</li>\n<li><strong>2단계 — 미배송·기망 입증 (즉시)</strong> — 가짜 송장·미배송, 사업자 정보 허위·도용, 폐쇄·잠적 정황을 확보.</li>\n<li><strong>3단계 — 지급정지·항변 (병행)</strong> — 계좌 지급정지를 112·은행에 요청하고 카드 결제면 항변권을 신청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·카드 취소·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 온라인 쇼핑몰 물품 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>특가 광고·상품 페이지 캡처 (거래 조건)</strong></li>\n<li><strong>주문 내역·주문 확인·약정 (계약 내용)</strong></li>\n<li><strong>결제·계좌이체·카드 결제 내역 (피해 금액)</strong></li>\n<li><strong>가짜 송장·미배송·배송 조회 자료 (기망 입증)</strong></li>\n<li><strong>사업자 정보 허위·도용·사이트 폐쇄 자료</strong></li>\n<li><strong>판매자·쇼핑몰·계좌·연락처 정보</strong></li>\n<li><strong>다른 소비자의 동일 미배송 피해 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 특가 광고·주문·결제 내역과 가짜 송장·미배송 정황을 정리하고, 표시된 사업자등록·주소·연락처가 실재하는지 확인하면 물건을 보낼 의사 없이 결제만 받았는지를 다투는 데 도움이 됩니다. 카드로 결제했다면 항변권 시한을 챙기고, 같은 쇼핑몰에서 미배송을 겪은 다른 소비자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>배송 의사·능력</strong> — 결제 당시 물건을 보낼 의사·능력이 있었는지.</li>\n<li><strong>특가 유인·기망</strong> — 특가·가짜 송장으로 결제를 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 배송 지연인지 처음부터 결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 결제·이체한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 사업자·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·미배송 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 재물 편취와 사기죄의 성립',
        summary:
          '대법원 2011도9919(대법원, 2011.11.10 선고) 영역에서 법원은 사기죄는 타인을 기망하여 그로 인한 하자 있는 의사에 기하여 재물의 교부를 받거나 재산상 이익을 취득함으로써 성립하는 범죄임을 전제로, 거래상 재산적 가치가 인정되는 물건을 그 소지인을 기망하여 교부받으면 그 소지인에 대한 관계에서 사기죄가 성립한다고 보았습니다. 사안에서는 이미 권리를 처분하였음에도 정당하게 보유하고 있는 것처럼 거짓말하여 재산적 가치가 있는 문서를 교부받은 행위에 대하여, 재물성이 인정되고 편취의 고의도 인정된다는 이유로 재물의 편취에 의한 사기죄가 성립한다고 판시했습니다. 특가로 유인해 결제만 받고 물품을 보내지 않은 사안을 살펴볼 때에도, 물건을 인도할 의사 없이 기망하여 대금을 교부받았는지를 기준으로 기망에 의한 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '배송 의사·능력 결여 + 특가 유인 + 미배송·잠적 결합 시 가짜 쇼핑몰 미배송 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배송이 늦는 것뿐이라는데도 사기인가요?',
        answer:
          '<strong>물건을 보낼 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 특가 광고와 가짜 송장·미배송 정황을 대비하세요.',
      },
      {
        question: '가짜 쇼핑몰인 걸 어떻게 밝히나요?',
        answer:
          '<strong>사업자 정보 허위·폐쇄와 미배송이 단서인 영역입니다.</strong> 사업자등록·주소·연락처 실재 여부를 확인하세요.',
      },
      {
        question: '계좌이체로 냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 이체 내역과 상대 계좌 정보를 정리하세요.',
      },
      {
        question: '카드로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 항변권으로 결제를 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '같은 쇼핑몰에 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 미배송은 편취 다툼의 출발점인 영역입니다.</strong> 후기·결제 시점·미배송 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '가짜 온라인 쇼핑몰 추적', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '온라인몰 선결제 미배송 추적', href: '/guide/fraud/fraud-online-mall-nondelivery-prepayment-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shopping-mall-non-delivery-track' },
      { label: '쇼핑몰 선입금 미배송 추적', href: '/guide/fraud/fraud-shopping-mall-prepay-nondelivery-track' },
    ],
  },

  // ─── 6. fraud-loan-brokerage-upfront-fee-intent-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-brokerage-upfront-fee-intent-falsely-accused-defense',
    keyword: '대출 알선 선수수료 편취 사기 고의 무고 방어',
    questionKeyword: '대출 상담·중개 일을 하며 고객에게서 대출 알선 명목의 선수수료를 받고 실제로 여러 금융사에 대출을 알아봐 주고 서류를 진행했는데, 고객의 신용·조건 문제로 대출이 승인되지 않자 상대가 ‘처음부터 대출해줄 것처럼 속여 수수료만 챙겼다’며 저를 사기로 고소했어요. 저는 수수료를 받을 당시 실제로 알선을 진행할 의사와 능력이 있었고 진행 내역도 남아 있는데, 대출이 안 됐다는 결과만으로 한순간에 사기 피의자로 몰려 억울해요. 상담·진행 기록, 수수료 약정도 있는데, 이렇게 대출 알선 선수수료 편취로 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '대출 알선 선수수료 편취 고의·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '대출 알선 선수수료 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '실제로 대출을 알선했는데 승인이 안 됐다는 이유로 선수수료 편취 사기로 고소돼 억울하다면, 형법 제347조 편취 고의 판단과 고지의무·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「대출 상담·중개 일을 하며 고객에게서 대출 알선 명목의 선수수료·상담료를 받고, 실제로 여러 금융회사·대부업체에 대출 가능성을 알아보고 서류를 준비해 진행했는데, 고객의 신용등급·소득·기존 채무 등 조건 문제로 끝내 대출이 승인되지 않자, 고객이 ‘처음부터 대출해줄 것처럼 속여 수수료만 챙긴 것’이라며 저를 사기로 고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 선수수료를 받을 당시 실제로 알선을 진행할 의사와 능력이 있었고 상담·서류 접수·심사 문의 등 진행 내역도 남아 있는데, 대출이 안 됐다는 결과만으로 편취 고의가 있었던 것처럼 몰려 억울하고 막막하실 거예요. 대출 알선은 최종 승인 여부가 금융사 심사에 달려 있어 불승인이 나올 수 있는데도 결과가 나빴다는 이유만으로 ‘처음부터 속였다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 선수수료 약정의 경위와 실제 알선·진행 내역, 불승인의 원인을 차분히 정리해 수수료를 받을 당시 알선을 진행할 의사·능력이 있었고 결과를 보장한 것이 아니라는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 고객에게 고지한 내용까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 재물·이익을 받을 당시 상대를 기망하여 착오에 빠뜨리고 편취할 고의가 있어야 하는 영역입니다. 판례는 사기죄의 요건인 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서 이를 고지하지 않는 것을 말하고, 편취 범의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합해 판단하여야 하며, 공모·범의를 부인하는 경우 정황사실만으로 이를 함부로 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 수수료를 받을 당시의 이행 의사·능력과 실제 알선 진행, 고지 내용을 종합해 편취 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 선수수료 약정·경위 + 실제 알선 진행 + 편취 고의 다툼 결합은 ‘사기 고의 부재·고지의무 이행’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 약정·경위 정리 ② 실제 알선·진행 ③ 불승인 원인 검토 ④ 편취 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대출 알선 선수수료 편취 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·알선 진행·불승인·편취 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정·경위 정리</strong> — 선수수료 약정·상담·조건 안내 정리.</li>\n<li><strong>② 실제 알선·진행</strong> — 금융사 문의·서류 접수·심사 진행 등 실제 알선 내역 정리.</li>\n<li><strong>③ 불승인 원인 검토</strong> — 신용·소득·기존 채무 등 불승인의 객관적 원인 검토.</li>\n<li><strong>④ 편취 고의</strong> — 수수료를 받을 당시 이행 의사·능력이 있었는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 알선 진행·고지 내용이 편취 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수수료를 받을 당시 편취할 고의가 있었는지(사기), 아니면 실제 알선 후 심사에서 불승인된 것인지(결과 불발)가 판단의 분기점입니다. 선수수료 약정 경위와 실제 알선 진행 내역, 불승인 원인과 고객에게 고지한 내용을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·진행 자료 보존 (즉시)</strong> — 선수수료 약정·상담·금융사 문의·서류 접수·심사 진행 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 알선·고지 정리 (즉시)</strong> — 실제 알선 진행과 결과 불확실성·수수료 성격을 어떻게 고지했는지 정리.</li>\n<li><strong>3단계 — 편취 고의 검토 (병행)</strong> — 수수료 수령 당시 이행 의사·능력, 불승인이 심사 결과임을 뒷받침하는 자료를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출 알선 선수수료 편취 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·알선·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>선수수료 약정·상담·조건 안내 자료 (약정 경위)</strong></li>\n<li><strong>금융사 문의·서류 접수·심사 진행 내역 (실제 알선)</strong></li>\n<li><strong>대출 불승인 통지·사유 자료 (불승인 원인)</strong></li>\n<li><strong>고객 신용·소득·채무 관련 심사 자료</strong></li>\n<li><strong>수수료 성격·환불 관련 고지·대화 기록</strong></li>\n<li><strong>수수료 수령·정산·부분 환불 내역</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 선수수료 약정 경위와 실제로 금융사에 알아보고 서류를 진행한 내역, 대출 불승인 통지·사유를 시간순으로 정리하면 수수료를 받을 당시 알선을 진행할 의사·능력이 있었는지, 아니면 처음부터 수수료만 노렸는지를 다투는 데 도움이 됩니다. 결과를 보장한 것이 아니라 알선을 진행했고 불승인은 심사 결과였다는 점과 수수료 성격·환불에 관해 고지한 내용을 함께 정리해 편취 고의 부재를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 수수료를 받을 당시 편취할 고의가 있었는지.</li>\n<li><strong>실제 알선</strong> — 실제로 금융사에 알아보고 진행했는지.</li>\n<li><strong>고지의무</strong> — 결과 불확실성·수수료 성격을 고지했는지.</li>\n<li><strong>불승인 원인</strong> — 불승인이 신용·소득 등 심사 결과였는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 편취 범의의 판단, 정황사실 단정 경계',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 사기죄의 요건인 기망 중 부작위에 의한 기망은 법률상 고지의무 있는 자가 일정한 사실에 관하여 상대방이 착오에 빠져 있음을 알면서도 이를 고지하지 않는 것으로서, 일반거래 경험칙상 상대방이 그 사실을 알았더라면 법률행위를 하지 않았을 것이 명백한 경우 신의칙상 고지의무가 인정된다고 보았습니다. 또한 타인으로부터 돈을 차용하면서 충분한 담보를 제공하였다면 특별한 사정이 없는 한 변제 의사·능력이 없었다고 볼 수 없고, 편취 범의는 자백이 없는 이상 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합해 판단해야 하며, 공모·범의를 부인하는 경우 학력·경력·근무장소·담당업무 등 정황사실만으로 암묵적 의사 결합을 이루었다고 단정해서는 안 된다고 판시했습니다. 실제로 대출을 알선·진행했는데 불승인이 나 선수수료 편취로 고소된 사안을 살펴볼 때에도, 수수료 수령 당시의 이행 의사·능력과 고지 내용을 기준으로 편취 고의를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '선수수료 약정·경위 + 실제 알선 진행 + 편취 고의 다툼 결합 시 사기 고의 부재·고지의무 이행 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '대출이 안 됐다는 이유로 사기가 되나요?',
        answer:
          '<strong>수수료를 받을 당시 알선 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 실제 알선 진행과 불승인 사유를 정리하세요.',
      },
      {
        question: '실제로 알선을 진행했는데도 사기로 보나요?',
        answer:
          '<strong>알선 진행 내역은 편취 고의를 배척하는 자료가 되는 영역입니다.</strong> 금융사 문의·서류 접수 기록을 확보하세요.',
      },
      {
        question: '수수료를 안 돌려줬는데 그것만으로 사기인가요?',
        answer:
          '<strong>수수료 성격과 환불 고지가 다툼이 되는 영역입니다.</strong> 약정·고지·정산 관련 대화를 정리하세요.',
      },
      {
        question: '결과를 보장한 적 없다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>고지 내용과 상담 기록이 단서가 되는 영역입니다.</strong> 결과 불확실성을 고지한 대화·안내를 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>수수료 성격·알선 진행 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '대출 알선 선수수료 무고 방어', href: '/guide/fraud/fraud-loan-brokerage-advance-fee-falsely-accused-defense' },
      { label: '대출 알선 선수수료 빙자 무고 방어', href: '/guide/fraud/fraud-loan-brokerage-advance-fee-pretext-falsely-accused-defense' },
      { label: '지인 대여 변제의사 빙자 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense' },
      { label: '사기 편취 고의 종합 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
    ],
  },

  // ─── 7. sex-crime-swimming-pool-lesson-guidance-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-swimming-pool-lesson-guidance-touch-report-track',
    keyword: '수영장 강습 지도 중 추행 신고',
    questionKeyword: '수영장에서 강습을 받는데 강사가 자세를 교정해준다며 필요 이상으로 허리·엉덩이·허벅지·가슴 쪽에 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 물속이라 곧바로 벗어나기 어려웠고 ‘원래 이렇게 잡아주는 건가’ 헷갈리기도 했어요. 그런데 손이 향하는 부위와 방식이 정상 지도 범위를 벗어나 단순한 자세 교정이 아니라 추행이라는 생각이 들었어요. 강사는 ‘물에서 자세를 잡아주려던 것’이라고 할 것 같아요. 이런 수영장 강습 지도 중 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '수영장 강습 지도 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수영장 강습 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '수영장에서 강사가 자세 교정을 빙자해 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「수영장·스포츠센터·수영 강습에서 강사가 영법이나 자세를 교정해준다는 이유로, 정상적인 지도로는 설명되지 않게 허리·엉덩이·허벅지 안쪽·가슴 쪽에 손을 대거나, 뒤에서 몸을 바짝 밀착해 붙는 등 단순한 자세 교정으로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 수영 강습은 물속에서 몸을 받쳐주거나 자세를 잡아주는 접촉이 어느 정도 예정되어 있어 그 순간에는 ‘원래 이렇게 잡아주는 건가’ 하고 헷갈리기도 하고, 물속이라 곧바로 몸을 피하거나 벗어나기 어려워 참고 넘겼지만, 손이 향하는 부위와 방식이 지도에 필요한 범위를 명백히 벗어나 단순한 교정이 아니라 추행이라는 생각이 들지만, 강사가 ‘물에서 균형을 잡아주려던 것, 자세를 바로잡아 주려던 것’이라고 해명할 것 같아 신고해도 정상 지도와 구별될지 막막하실 거예요. 실력을 배우려고 믿고 몸을 맡긴 강습 공간에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 수영 강습에서 의사에 반해 민감한 부위를 만지거나 밀착한 행위라면, 자세 교정을 빙자했더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수했다면 추행의 결과에 이르지 못하더라도 강제추행미수가 성립하고, 이러한 법리는 폭행행위 자체가 추행행위인 기습추행에도 적용되며, 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위와 구체적 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역으로, 지도 범위를 벗어난 접촉인지를 가려 다툴 여지가 있습니다. 지도 빙자 + 민감 부위 접촉·밀착 + 자세 교정 해명 결합은 ‘수영장 강습 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·강습 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수영장 강습 지도 중 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·강습 정리</strong> — 강습 시설·시간·강사·수강 형태·주변 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허리·엉덩이·허벅지·가슴 쪽 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자세를 잡아주려던 것이라는 해명과 달리, 지도에 필요한 범위를 벗어나 의사에 반해 민감 부위를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 수영장 CCTV, 동료 수강생 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·강습 자료 보존 (즉시)</strong> — 강습 시설·시간·강사·수강 형태와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 수영장·탈의실 앞 CCTV, 수강 등록·결제 내역, 동료 수강생·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수영장 강습 지도 중 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>강습 시설·시간·강사·수강 형태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>수영장·탈의실 앞 CCTV 보존 요청 자료</strong></li>\n<li><strong>수강 등록·결제·출결 입증 자료</strong></li>\n<li><strong>동료 수강생·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수영장·탈의실 앞 CCTV와 수강 등록·출결 내역으로 강습 시간과 강사를 특정하고, 손이 향한 부위와 방식이 지도에 필요한 범위를 벗어났다는 점을 구체적으로 기록하면 지도 빙자 추행을 다투는 데 도움이 됩니다. 물속이라 즉시 벗어나지 못했더라도 직후에 남긴 메시지·통화나 주변에 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 범위를 벗어난 민감 부위 접촉인지.</li>\n<li><strong>자세 교정 해명</strong> — ‘자세를 잡아주려던 것’ 해명에 가려지지 않는지.</li>\n<li><strong>기습추행</strong> — 추행행위 자체가 유형력 행사로 인정되는지.</li>\n<li><strong>강사 특정</strong> — CCTV·수강 기록으로 강사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 강제추행미수의 인정',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄는 폭행 또는 협박을 가하여 항거를 곤란하게 한 뒤 추행하는 경우뿐만 아니라 폭행행위 자체가 추행행위라고 인정되는 경우도 포함되고, 이 경우의 폭행은 반드시 상대방의 의사를 억압할 정도의 것임을 요하지 않는다고 보았습니다. 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 말하며, 그 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 이전부터의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합적으로 고려하여 신중히 결정해야 한다고 하였습니다. 또한 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수하였으나 추행의 결과에 이르지 못한 때에는 강제추행미수죄가 성립하고, 이러한 법리는 기습추행의 경우에도 마찬가지로 적용된다고 판시했습니다. 수영 강습에서 강사가 자세 교정을 빙자해 민감 부위를 만지거나 밀착한 사안을 살펴볼 때에도, 접촉의 구체적 태양과 지도 범위 이탈 여부를 종합해 기습추행 해당성을 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 민감 부위 접촉·밀착 + 자세 교정 해명 결합 시 수영장 강습 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 잡아준 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '물속이라 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>강습 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '수영은 원래 몸을 잡아주는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 지도와 민감 부위 접촉의 구별이 핵심인 영역입니다.</strong> 손이 향한 부위와 방식을 구체적으로 정리하세요.',
      },
      {
        question: '수영장 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 수영장·시설에 즉시 보존을 요청하세요.',
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
      { label: '수영 강습 자세 교정 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-lesson-posture-correction-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: '헬스 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '과외 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-private-tutoring-guidance-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-hospital-medical-exam-improper-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-hospital-medical-exam-improper-touch-report-track',
    keyword: '병원 진료 검진 부당 추행 신고',
    questionKeyword: '병원에서 진료·검진을 받는데 의료진이 진료와 무관해 보이는 부위를 필요 이상으로 만지거나, 진찰을 빙자해 가슴·성기 주변을 부적절하게 접촉해 너무 불쾌하고 수치스러웠어요. 진료 중이라 항의하거나 자리를 벗어나기 어려웠고 ‘원래 이렇게 진찰하나’ 헷갈리기도 했어요. 그런데 접촉 부위와 방식이 정상 진료 범위를 벗어나 단순 진찰이 아니라 추행이라는 생각이 들었어요. 의료진은 ‘진료·검진 과정에서 필요한 촉진이었다’고 할 것 같아요. 이런 병원 진료 검진 부당 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '병원 진료 검진 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '병원 진료 검진 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '병원에서 의료진이 진찰을 빙자해 신체를 부적절하게 만지는 추행을 당해 수치스러웠다면, 추행 해당성 판단과 진료기록·CCTV 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「병원·의원에서 진료·검진·물리치료를 받던 중, 의료진이 호소한 증상이나 진료 목적과 무관해 보이는 부위를 필요 이상으로 만지거나, 진찰·촉진을 빙자해 가슴·성기 주변 등을 부적절하게 접촉하고 설명 없이 신체를 다뤄, 진료를 받으러 갔다가 오히려 너무 불쾌하고 수치스러웠던 분의 상황입니다. 진료실은 의료진과 환자만 있는 폐쇄된 공간인 경우가 많고, 환자는 옷을 벗거나 누운 상태로 몸을 맡기게 되어 그 순간에는 항의하거나 자리를 벗어나기 어렵고, ‘원래 이렇게 진찰하는 건가, 필요한 검사인가’ 하고 헷갈리기도 하지만, 접촉 부위와 방식이 호소한 증상·정상 진료 범위를 명백히 벗어나 단순한 진찰이 아니라 추행이라는 생각이 들지만, 의료진이 ‘진료·검진 과정에서 필요한 촉진이었다, 의학적으로 정상적인 진찰이었다’고 해명할 것 같아 신고해도 정상 진료와 구별될지 막막하실 거예요. 몸을 믿고 맡긴 진료 공간에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하고, 제299조는 사람의 심신상실 또는 항거불능 상태를 이용하여 추행한 경우를 준강제추행죄로 정해 처벌하는 영역입니다. 진료 상황상 항거하기 어려운 상태를 이용하거나 의사에 반해 민감한 부위를 만진 행위라면, 진찰을 빙자했더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 준강제추행죄의 보호법익은 성적 자기결정권 중 원치 않는 성적 관계를 거부할 소극적 측면이고, ‘항거불능’은 심신상실 외의 원인으로 심리적·물리적으로 반항이 절대적으로 불가능하거나 현저히 곤란한 경우를 의미한다고 본 사례 흐름이 있는 영역으로, 진료를 빙자한 접촉이 항거가 어려운 상태를 이용한 것인지, 정상 진료 범위를 벗어난 것인지를 가려 다툴 여지가 있습니다. 진찰 빙자 + 민감 부위 접촉 + 필요한 촉진 해명 결합은 ‘진료 검진 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·진료 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병원 진료 검진 부당 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·진료 정리</strong> — 병원·진료과·진료 목적·의료진·진료실 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 진료 목적과 무관한 부위 접촉·방식·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 정상 진료 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 필요한 촉진이었다는 해명과 달리, 호소한 증상·정상 진료 범위를 벗어나 의사에 반해 민감 부위를 만졌거나 항거가 어려운 상태를 이용했는지가 판단의 분기점입니다. 접촉 부위·방식과 진료기록, 진료실 앞 CCTV, 동석 여부, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·진료 자료 보존 (즉시)</strong> — 병원·진료과·진료 목적·의료진과 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — 진료기록·CCTV 확보 (즉시)</strong> — 진료기록·처방·예약·결제 내역, 진료실 앞·복도 CCTV, 동석자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병원 진료 검진 부당 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원·진료과·진료 목적·의료진 정보 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>진료기록·처방·예약·결제 내역 (진료 입증)</strong></li>\n<li><strong>진료실 앞·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석 간호사·보호자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록·처방·예약·결제 내역으로 진료 목적과 진료 시각을 특정하고, 접촉 부위와 방식이 호소한 증상·정상 진료 범위를 벗어났다는 점을 구체적으로 기록하면 진찰 빙자 추행을 다투는 데 도움이 됩니다. 진료실 앞·복도 CCTV와 동석 여부를 확인하고, 진료 중이라 즉시 항의하지 못했더라도 직후에 남긴 메시지·상담 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 정상 진료 범위를 벗어난 민감 부위 접촉인지.</li>\n<li><strong>필요한 촉진 해명</strong> — ‘진료상 필요한 촉진’ 해명에 가려지지 않는지.</li>\n<li><strong>항거 곤란 이용</strong> — 진료 상황상 반항이 어려운 상태를 이용했는지.</li>\n<li><strong>의료진 특정</strong> — 진료기록·CCTV로 의료진을 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 준강제추행죄의 보호법익과 항거불능의 의미',
        summary:
          '대법원 2018도9781(대법원, 2021.02.04 선고) 영역에서 법원은 형법 제299조의 준강제추행죄는 사람의 심신상실 또는 항거불능의 상태를 이용하여 추행한 자를 처벌하는 규정으로, 정신적·신체적 사정으로 성적인 자기방어를 할 수 없는 사람의 성적 자기결정권, 즉 원치 않는 성적 관계를 거부할 소극적 측면을 보호법익으로 한다고 보았습니다. 나아가 ‘심신상실’이란 정신기능의 장애로 성적 행위에 대한 정상적인 판단능력이 없는 상태를, ‘항거불능’이란 심신상실 이외의 원인으로 심리적 또는 물리적으로 반항이 절대적으로 불가능하거나 현저히 곤란한 경우를 의미하고, 깊은 잠이나 술·약물 등으로 일시적으로 의식을 잃었거나 정상적인 판단·대응 능력을 행사할 수 없는 상태에 있었다면 이에 해당한다고 판시했습니다. 진료·검진을 빙자해 민감 부위를 부적절하게 접촉한 사안을 살펴볼 때에도, 진료 상황상 반항이 어려운 상태를 이용했는지, 정상 진료 범위를 벗어난 의사에 반하는 추행인지를 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '진찰 빙자 + 민감 부위 접촉 + 필요한 촉진 해명 결합 시 진료 검진 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '진료상 필요한 촉진이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>정상 진료 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 호소 증상을 대비하세요.',
      },
      {
        question: '진료 중이라 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>진료 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '진료기록으로 다툴 수 있나요?',
        answer:
          '<strong>진료기록·처방은 진료 목적과 접촉을 대비하는 자료인 영역입니다.</strong> 진료기록·예약·결제 내역을 확보하세요.',
      },
      {
        question: '진료실에 CCTV가 없어도 다툴 수 있나요?',
        answer:
          '<strong>진료실 앞·복도 CCTV와 진료기록으로 정황을 다투는 영역입니다.</strong> 진료 시각·동석 여부를 특정해 모으세요.',
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
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지샵 부적절 접촉 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-improper-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-nightclub-dance-floor-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-nightclub-dance-floor-touch-report-track',
    keyword: '클럽 댄스 플로어 추행 신고',
    questionKeyword: '클럽 댄스 플로어에서 춤을 추는데 사람이 빽빽한 틈을 타 옆·뒤에 붙은 사람이 엉덩이·가슴·허벅지를 만지거나 몸을 밀착해 비벼 너무 불쾌하고 수치스러웠어요. 어둡고 시끄럽고 인파에 밀리는 상황이라 곧바로 항의하거나 벗어나기 어려웠어요. 처음엔 사람에 밀려 닿았나 싶었지만 접촉이 반복되고 노골적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 상대는 ‘사람이 많아 부딪힌 것’이라고 할 것 같아요. 이런 클럽 댄스 플로어 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '클럽 댄스 플로어 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '클럽 댄스 플로어 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '클럽 댄스 플로어에서 옆사람이 신체를 만지는 추행을 당해 수치스러웠다면, 공중밀집장소 추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·나이트·페스티벌 무대처럼 어둡고 시끄러우며 사람이 빽빽하게 몰린 댄스 플로어에서 춤을 추던 중, 옆이나 뒤에 붙은 사람이 혼잡을 틈타 엉덩이·가슴·허벅지 등을 만지거나 몸을 바짝 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 클럽 플로어는 사방이 사람으로 붐비고 어두우며 음악 소리가 커서 그 순간에는 ‘사람에 밀려 어쩌다 닿은 건가’ 싶어 넘기기도 하고, 인파에 밀리는 상황이라 곧바로 큰 소리로 항의하거나 자리를 벗어나기 어려워 참았지만, 접촉이 멈추지 않고 손의 움직임이 점점 노골적이어서 단순한 우연이 아니라 혼잡을 틈탄 추행이라는 생각이 들지만, 상대가 ‘사람이 많아 부딪힌 것, 춤추다 닿은 것’이라고 해명할 것 같아 신고해도 가볍게 치부될까 봐 막막하실 거예요. 즐기러 간 공간에서 예상치 못하게 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제11조는 대중교통수단, 공연·집회 장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행한 사람을 처벌하도록 정하고, 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 클럽 댄스 플로어처럼 공중이 밀집한 장소에서 의사에 반해 신체를 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 공중밀집장소에서의 추행죄의 ‘추행’은 일반인을 기준으로 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하여 성적 자기결정권을 침해하는 행위를 말하고, 그 죄가 기수에 이르기 위해 대상자가 실제로 성적 수치심이나 혐오감을 느껴야 하는 것은 아니라고 본 사례 흐름이 있는 영역으로, 혼잡을 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 공중밀집·혼잡 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘클럽 댄스 플로어 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·장소 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 댄스 플로어 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·장소 정리</strong> — 클럽·시간대·혼잡도·플로어 위치·일행 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·가슴·허벅지 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 공중밀집장소에서 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사람이 많아 부딪혔다는 해명과 달리, 혼잡을 틈타 의사에 반해 민감 부위를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 클럽 CCTV, 일행·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·장소 자료 보존 (즉시)</strong> — 클럽·시간대·혼잡도·플로어 위치와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 클럽 내부·입구 CCTV, 입장·결제 내역, 일행·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 댄스 플로어 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>클럽·시간대·혼잡도·플로어 위치 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>클럽 내부·입구 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장·예약·결제 입증 자료</strong></li>\n<li><strong>일행·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽 내부·입구 CCTV와 입장·결제 내역으로 시간대와 플로어 위치를 특정하고, 어둡고 혼잡한 상황에서도 접촉 부위와 방식이 우연으로 설명되지 않고 반복됐다는 점을 구체적으로 기록하면 혼잡을 틈탄 추행을 다투는 데 도움이 됩니다. 그 순간 강하게 항의하지 못했더라도 직후에 일행에게 알리거나 남긴 메시지·상담 정황을 정리하면 의사에 반하는 추행이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 부딪힘을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>혼잡 해명</strong> — ‘사람이 많아 부딪혔다’ 해명에 가려지지 않는지.</li>\n<li><strong>공중밀집장소</strong> — 공중이 밀집한 장소에서의 추행에 해당하는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·일행·입장 기록으로 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공중밀집장소 추행죄의 추행 의미와 기수 판단',
        summary:
          '대법원 2015도7102(대법원, 2020.06.25 선고) 영역에서 법원은 공중밀집장소에서의 추행을 처벌하는 규정의 입법 취지가, 다중이 출입하는 공공연한 장소에서 추행 발생의 개연성과 처벌 필요성이 높은 반면 피해자와의 접근이 용이하고 장소가 공개되어 있어 피해자의 명시적·적극적 저항이나 회피가 어려운 상황을 이용한 추행에 대처하기 위한 것이라고 보았습니다. 여기서 ‘추행’이란 일반인을 기준으로 객관적으로 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 말하고, 그 해당 여부는 피해자의 성별·연령, 행위자와 피해자의 관계, 행위 경위와 구체적 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 하였습니다. 나아가 이 죄가 기수에 이르기 위해서는 객관적으로 성적 수치심·혐오감을 일으킬 만한 행위를 대상자를 상대로 실행하는 것으로 충분하고, 대상자가 실제로 성적 수치심이나 혐오감을 느껴야 하는 것은 아니라고 판시했습니다. 클럽 댄스 플로어에서 혼잡을 틈타 신체를 만진 사안을 살펴볼 때에도, 공중밀집장소에서의 추행 해당성을 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '공중밀집·혼잡 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 클럽 댄스 플로어 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 많아 부딪힌 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 부딪힘을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 기록하세요.',
      },
      {
        question: '어둡고 혼잡해서 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>혼잡·소음상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 일행에게 알린 정황·메시지를 정리하세요.',
      },
      {
        question: '공중밀집장소 추행은 강제추행과 다른가요?',
        answer:
          '<strong>공중밀집장소 추행죄로 다툴 수 있는 영역입니다.</strong> 장소의 혼잡·공개 정황과 접촉 태양을 정리하세요.',
      },
      {
        question: '클럽 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 클럽·경찰에 즉시 보존을 요청하세요.',
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
      { label: '클럽 혼잡 무대 추행 신고', href: '/guide/sex-crime/sex-crime-nightclub-dancefloor-crowd-touch-report-track' },
      { label: '클럽 혼잡 무대 추행 추적', href: '/guide/sex-crime/sex-crime-club-crowded-dancefloor-touch-report-track' },
      { label: '클럽 무대 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-photo-studio-posing-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-photo-studio-posing-contact-misunderstanding-falsely-accused-defense',
    keyword: '사진 촬영 자세 지도 접촉 오해 추행 무고 방어',
    questionKeyword: '사진 스튜디오·촬영 현장에서 모델·피사체의 자세를 잡아주려고 어깨·팔·턱 각도를 손으로 살짝 조정하거나 소품 위치를 고쳐줬는데, 상대가 ‘촬영을 빙자해 몸을 만졌다’며 저를 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 촬영에 필요한 자세 지도였을 뿐인데, 신체 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 촬영 현장에는 스태프·다른 사람도 있었고 자세 지도 관행·촬영본도 있는데 상대 진술은 오락가락해요. 이렇게 사진 촬영 자세 지도 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점과 진술의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '사진 촬영 자세 지도 접촉 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '촬영 자세 지도 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '촬영에 필요한 자세 지도 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 진술 신빙성·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「사진 스튜디오·프로필·화보·행사 촬영 현장에서 촬영자·지도자가 모델이나 피사체의 자세를 잡아주려고 어깨·팔·턱 각도를 손으로 살짝 조정하거나 옷매무새·소품 위치를 고쳐주는 등 촬영에 통상 수반되는 자세 지도를 했을 뿐인데, 상대가 ‘촬영을 빙자해 일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 더 좋은 사진을 위해 필요한 범위에서 자세를 지도한 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 더구나 촬영 현장에는 스태프나 다른 참여자가 함께 있었고 자세 지도는 촬영에서 흔한 관행인데도, 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉽고, 상대의 진술마저 시점·내용에 따라 오락가락한다면 더 답답하셨을 거예요. 혐의를 받고 있다면, 촬영의 성격과 진행 방식, 자세 지도가 이뤄진 경위와 접촉 부위·방식, 현장에 함께 있던 사람과 촬영본·대화를 차분히 정리해 추행의 고의가 없었고 촬영에 필요한 지도였다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대 진술의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 형사재판에서 유죄의 인정은 합리적인 의심이 없을 정도의 증명에 이르러야 하고, 피해자 등의 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도의 신빙성이 있는지를 진술 내용의 합리성·타당성과 객관적 정황·경험칙에 비추어 신중히 판단해야 하며, 무죄추정의 원칙상 증명이 부족하면 피고인의 이익으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 촬영 현장에서의 자세 지도 접촉이 추행의 고의로 이루어졌는지, 상대 진술의 신빙성이 인정되는지를 종합해 가려 다툴 여지가 있는 영역입니다. 자세 지도 관행·경위 + 접촉 부위·방식 + 고의 부인·진술 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·촬영 정리 ② 접촉 부위·경위 ③ 고의 부재 검토 ④ 진술 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사진 촬영 자세 지도 접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·촬영 정리</strong> — 촬영 성격·장소·진행 방식·참여자 정리.</li>\n<li><strong>② 접촉 부위·경위</strong> — 자세 지도로 접촉한 부위·방식·설명 여부 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 촬영 관행·경위 등 간접사실 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술의 일관성·구체성과 정황 부합 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 촬영본·스태프 진술이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행할 고의로 접촉했는지(추행), 아니면 촬영에 필요한 자세 지도였는지(고의 부재)가 판단의 분기점입니다. 촬영의 성격과 진행 방식, 접촉 부위·방식과 설명 여부, 현장 참여자와 촬영본, 상대 진술의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·촬영 자료 보존 (즉시)</strong> — 촬영 성격·장소·진행 방식·참여자·촬영 일정·계약을 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·설명 정리 (즉시)</strong> — 자세 지도로 접촉한 부위·방식과 사전 설명·동의 여부, 촬영본을 정리.</li>\n<li><strong>3단계 — 진술 신빙성 검토 (병행)</strong> — 상대 진술의 일관성과 시점·내용의 변동, 정황 부합 여부를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진 촬영 자세 지도 접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>촬영 성격·장소·진행 방식 자료 (경위)</strong></li>\n<li><strong>촬영 일정·계약·의뢰 내역 (촬영 입증)</strong></li>\n<li><strong>스튜디오·현장 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>자세 지도 접촉 부위·방식·설명 정리 (접촉 경위)</strong></li>\n<li><strong>촬영본·촬영 전후 대화·메시지 (정황 입증)</strong></li>\n<li><strong>스태프·동행자·목격자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·상대 진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 촬영의 성격·진행 방식과 자세 지도가 촬영에서 통상 이뤄지는 관행이라는 점, 접촉한 부위·방식과 사전 설명·동의 여부를 정리하면 접촉이 추행의 고의에 의한 것인지, 촬영에 필요한 지도였는지를 다투는 데 도움이 됩니다. 현장 스태프·참여자의 진술과 촬영본·대화, 상대 진술이 시점·내용에 따라 달라지는 부분을 함께 정리해 고의 부재와 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>자세 지도 경위</strong> — 촬영에 필요한 자세 지도였는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>무죄추정</strong> — 증명이 부족하면 피고인의 이익으로 판단되는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 진술이 유일한 증거인 경우의 신빙성 판단',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄판결이 확정될 때까지 무죄로 추정되고, 무죄추정의 원칙은 수사 단계뿐 아니라 판결 확정 시까지 형사절차 전반을 이끄는 대원칙이라고 보았습니다. 그리고 범죄사실의 인정은 합리적인 의심이 없는 정도의 증명에 이르러야 하므로, 검사가 제출한 증거만으로 그러한 확신을 가지게 하는 정도에 이르지 못한 경우에는 설령 유죄의 의심이 들더라도 피고인의 이익으로 판단하여야 하고, 특히 통상적으로 추행 행위가 이루어질 것으로 예상하기 곤란한 상황에서 피해자 또는 피해자와 밀접한 관계에 있는 자의 진술이 유일한 증거인 경우, 이를 근거로 유죄로 판단하려면 진술 내용 자체의 합리성·타당성뿐 아니라 객관적 정황과 경험칙에 비추어 합리적 의심을 배제할 정도의 신빙성이 있어야 한다고 판시했습니다. 촬영 현장에서의 자세 지도 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 상대 진술의 신빙성과 객관적 정황, 추행 고의의 증명 정도를 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '자세 지도 관행·경위 + 접촉 부위·방식 + 고의 부인·진술 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 잡아준 접촉인데도 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 촬영 경위와 접촉 부위·방식·설명 여부를 정리하세요.',
      },
      {
        question: '촬영에 필요한 지도였다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>촬영 관행·경위는 고의를 배척하는 간접사실이 되는 영역입니다.</strong> 촬영본·스태프 진술·대화를 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '현장에 다른 사람이 있었다는 점이 도움이 되나요?',
        answer:
          '<strong>참여자·목격자 진술은 정황을 뒷받침하는 자료인 영역입니다.</strong> 스태프·동행자의 진술과 연락처를 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접촉 경위·자세 지도에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '사진 촬영 자세 지도 무고 방어', href: '/guide/sex-crime/sex-crime-photo-shoot-posing-guidance-falsely-accused-defense' },
      { label: '만원버스 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense' },
      { label: '축제 인파 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense' },
      { label: '회식 술자리 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
    ],
  },

];
