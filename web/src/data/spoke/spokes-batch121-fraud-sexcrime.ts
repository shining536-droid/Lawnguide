import { SpokePage } from '../spoke-pages';

// batch121 fraud(6)+sex-crime(4) — 10개 (2026-07-10)
//
// 고유 존재 이유:
// 1. fraud-remote-nonface-rental-prepaid-deposit-vanish-track — 일반 임대보증금 사기와 분기. '원격지·비대면으로 원룸을 계약하며 가계약금을 선입금했는데 매물·임대인이 실체 없이 잠적' 비대면 원격지 가계약금 편취 절차형 트랙(victim).
// 2. fraud-fx-margin-auto-trading-guaranteed-return-track — 일반 투자·리딩방 사기와 분기. '해외선물 FX 마진 자동매매 프로그램이 확정수익을 보장한다며 투자·이용료를 편취' FX 자동매매 수익보장 편취 판단형 트랙(victim).
// 3. fraud-fake-kidnapping-ransom-extortion-voice-phishing-track — 일반 기관사칭 보이스피싱과 분기. '가족을 납치했다며 협박해 몸값을 송금하도록 유도한 납치빙자 전화금융사기' 납치협박 사칭 몸값 송금 환급 절차형 트랙(victim).
// 4. fraud-used-musical-instrument-direct-deal-prepay-no-delivery-track — 일반 중고 미인도와 분기. '중고 악기(기타·색소폰 등)를 직거래로 선입금받고 물건을 보내지 않고 잠적' 중고 악기 직거래 미인도 편취 절차형 트랙(victim).
// 5. fraud-secondhand-seller-defect-disclosure-dispute-falsely-accused-defense — 일반 사기 무고류와 분기. '중고 물품을 판 뒤 하자 고지 여부를 두고 매수인이 매도인을 사기로 고소' 하자 고지·기망 고의 다툼 방어 판단형 트랙(accused).
// 6. fraud-online-mall-seller-shipping-delay-falsely-accused-defense — 일반 사기 무고류와 분기. '온라인 쇼핑몰 판매자가 재고·공급 지연으로 배송이 늦어지자 미배송 편취로 사기 고소됨' 배송지연·편취 고의 부재 방어 판단형 트랙(accused).
// 7. sex-crime-ex-partner-intimate-video-distribution-threat-track — 일반 성착취물 협박과 분기. '헤어진 연인이 교제 중 촬영한 성적 영상을 유포하겠다며 협박' 전 연인 촬영물 이용 유포 협박 신고 판단형 트랙(victim).
// 8. sex-crime-delivery-secondhand-app-obscene-image-message-track — 일반 통신매체음란과 분기. '배달앱·중고거래로 알게 된 연락처로 판매자·기사가 음란 사진·메시지를 반복 전송' 통신매체이용음란 신고 판단형 트랙(victim).
// 9. sex-crime-workplace-restroom-changing-hidden-camera-track — 일반 불법촬영과 분기. '회사 화장실·탈의실에 몰래카메라를 설치해 직장 동료를 불법촬영' 직장 내 몰카 불법촬영 신고 절차형 트랙(victim).
// 10. sex-crime-fitness-trainer-posture-correction-falsely-accused-defense — 일반 성범죄 무고류와 분기. 'PT 트레이너가 자세 교정 중 지도상 접촉이 추행으로 신고됨' 지도 접촉 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch121FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-remote-nonface-rental-prepaid-deposit-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-remote-nonface-rental-prepaid-deposit-vanish-track',
    keyword: '비대면 원룸 원격지 가계약금 편취 사기',
    questionKeyword: '타지·원격지로 이사·발령을 앞두고 직접 방을 보러 갈 형편이 안 돼, 부동산 앱·카페에 올라온 원룸·오피스텔 매물을 보고 임대인·중개인이라는 사람과 전화·메신저로만 계약을 진행했어요. ‘문의가 많아 금방 나간다, 가계약금부터 넣어야 잡아둔다’며 재촉해 계좌로 가계약금을 보냈는데, 그 뒤로 계약서 작성과 방 확인을 미루다가 연락이 끊겼어요. 알고 보니 그 매물은 실제로 없거나 다른 사람이 이미 살고 있는 방이었고, 같은 계좌·번호로 여러 사람에게 원격지 세입자를 노려 가계약금만 받은 정황이었어요. 처음부터 방을 내줄 의사나 권한 없이 가계약금만 챙긴 것 같은데, 이런 비대면 원룸 가계약금 편취를 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '비대면 원룸 가계약금 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비대면 원룸 가계약금 편취 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '직접 방을 보지 못하고 비대면으로 가계약금을 보냈는데 임대인이 잠적해 막막하다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「타지 발령·이사·입학을 앞두고 직접 방을 보러 갈 형편이 안 돼, 부동산 앱·대학가 카페에 올라온 원룸·오피스텔 매물을 보고 임대인·중개인이라는 사람과 전화·메신저로만 계약을 진행한 분의 상황입니다. 상대가 ‘조건 좋은 방이라 문의가 많다, 오늘 안에 가계약금부터 넣어야 잡아둘 수 있다’며 재촉해, 방을 놓칠까 봐 시세와 비슷한 가격에 가계약금을 계좌로 보냈는데, 정작 그 뒤로는 계약서 작성과 방 확인·입주 날짜를 이런저런 핑계로 미루다가 며칠 만에 메시지도 읽지 않고 연락이 끊겨, 이사 준비에 쫓기는 와중에 목돈만 잃게 되어 막막하실 거예요. 뒤늦게 확인해보니 그 매물은 실제로 존재하지 않거나 이미 다른 사람이 살고 있는 방이었고, 같은 계좌·번호로 원격지에서 방을 구하는 여러 사람을 노려 가계약금만 받아온 정황까지 보이면 단순한 계약 취소가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 방을 내줄 의사나 권한 없이 가계약금만 받은 정황이면 단순한 계약 불이행으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 방을 내줄 의사·권한 없이 가계약금만 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄가 타인을 기망하여 착오에 빠뜨리고 그 처분행위를 유발하여 재물을 교부받음으로써 성립하는 재산범죄로서 그 본질이 기망에 의한 재물·재산상 이익의 취득에 있다고 본 사례 흐름이 있는 영역으로, 매물·계약의 실체와 가계약금 교부 경위를 정리해 기망에 의한 편취였는지를 가려 다툴 여지가 있습니다. 비대면 유인 + 매물·권한 부존재 + 가계약금 편취·잠적 결합은 ‘비대면 원격지 가계약금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 매물·권한 기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비대면 원룸 가계약금 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 매물 광고·상담 대화·가계약 조건·가계약금 송금 내역 정리.</li>\n<li><strong>② 매물·권한 기망 입증</strong> — 매물 실체·임대 권한·중복 계약·잠적 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선입금한 가계약금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순한 계약 취소와 달리, 방을 내줄 의사나 권한 없이 가계약금만 받았는지가 판단의 분기점입니다. 가계약금 입금을 재촉한 대화와 송금 내역, 매물이 실제로 없거나 이미 임차 중이었던 정황, 같은 계좌·번호의 반복 편취를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 매물 광고·상담 대화·가계약 조건·가계약금 송금 내역을 캡처 보존.</li>\n<li><strong>2단계 — 매물·권한 기망 입증 (즉시)</strong> — 매물 실체·등기·임대 권한·중복 임차·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">비대면 원룸 가계약금 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매물 광고·사진·조건 캡처 (거래 조건)</strong></li>\n<li><strong>가계약금 입금 재촉·계약 대화 (계약 내용)</strong></li>\n<li><strong>가계약금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>매물 부존재·중복 임차·잠적 화면 (기망 입증)</strong></li>\n<li><strong>임대인·중개인·계좌·연락처 정보</strong></li>\n<li><strong>계약서 미작성·환불 거부·차단 기록</strong></li>\n<li><strong>같은 계좌·번호 반복 편취 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가계약금 입금을 재촉한 대화와 송금 내역을 대비하고, 광고된 방이 실제로는 존재하지 않았거나 이미 다른 사람이 임차 중이었음을 보여주는 등기·정황을 확보하면 방을 내줄 의사·권한 없이 가계약금만 받았는지를 다투는 데 도움이 됩니다. 같은 계좌·번호로 원격지 세입자를 노려 다른 사람도 가계약금을 떼인 정황을 함께 모으면 반복 편취를 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대 의사·권한</strong> — 가계약금 수령 당시 방을 내줄 의사·권한이 있었는지.</li>\n<li><strong>매물 실체</strong> — 광고된 방이 실제로 존재하고 계약 가능했는지.</li>\n<li><strong>편취 범의</strong> — 단순 계약 취소인지 처음부터 가계약금만 노렸는지.</li>\n<li><strong>편취액</strong> — 선입금한 가계약금이 피해액인지.</li>\n<li><strong>상대 특정</strong> — 임대인·중개인·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (부동산·직거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 보호법익과 기망에 의한 재산권 침해',
        summary:
          '대법원 2021도7831(대법원, 2021.11.11 선고) 영역에서 법원은 기망행위에 의하여 국가적 또는 공공적 법익을 침해한 경우라도 그와 동시에 형법상 사기죄의 보호법익인 재산권을 침해하는 것과 동일하게 평가할 수 있는 때에는 별도의 처벌 규정이 없는 한 사기죄가 성립할 수 있다고 보면서, 사기죄가 보호법익인 재산권이 침해되었을 때 성립하는 범죄임을 전제로 판시했습니다. 이는 사기죄의 본질이 기망행위에 의한 재물이나 재산상 이익의 취득에 있고, 기망으로 상대의 재산권을 침해해 재물을 교부받았는지가 성부의 핵심임을 보여줍니다. 원격지에서 방을 직접 보지 못한 채 가계약금을 송금한 사안을 살펴볼 때에도, 상대가 방을 내줄 의사나 권한 없이 광고와 재촉으로 착오를 일으켜 가계약금을 교부받아 재산권을 침해한 것인지를 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '비대면 유인 + 매물·권한 부존재 + 가계약금 편취·잠적 결합 시 비대면 원격지 가계약금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '가계약금은 원래 못 돌려받는 것 아닌가요?',
        answer:
          '<strong>실체 없는 매물·권한으로 받았는지가 핵심인 영역입니다.</strong> 광고·재촉 대화와 매물 부존재 정황을 대비하세요.',
      },
      {
        question: '방이 실제로 없었다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>등기·중복 임차·잠적 정황이 단서인 영역입니다.</strong> 매물 광고와 실제 점유·등기 상태를 확인하세요.',
      },
      {
        question: '계약서도 안 쓰고 보낸 돈인데 다툴 수 있나요?',
        answer:
          '<strong>대화·이체 내역으로 계약 경위를 입증하는 영역입니다.</strong> 상담 대화와 송금 내역을 정리하세요.',
      },
      {
        question: '소액 가계약금인데도 신고가 되나요?',
        answer:
          '<strong>금액과 무관하게 편취 정황이 있으면 신고를 검토하는 영역입니다.</strong> 광고·대화·송금 자료를 정리하세요.',
      },
      {
        question: '같은 번호로 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 편취는 다툼의 출발점인 영역입니다.</strong> 같은 계좌·번호 피해 사례를 함께 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '부동산 직거래 가계약금 잠적 추적', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '허위 매물 가계약금 편취 추적', href: '/guide/fraud/fraud-fake-rental-listing-deposit-upfront-track' },
      { label: '원룸 이중계약 보증금 편취 추적', href: '/guide/fraud/fraud-oneroom-double-contract-track' },
      { label: '가짜 임대인 사칭 보증금 추적', href: '/guide/fraud/fraud-rental-deposit-fake-agent-track' },
    ],
  },

  // ─── 2. fraud-fx-margin-auto-trading-guaranteed-return-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fx-margin-auto-trading-guaranteed-return-track',
    keyword: '해외선물 FX 자동매매 수익보장 편취 사기',
    questionKeyword: '해외선물·FX 마진거래를 하는 업체·리딩 운영자가 ‘자동매매(EA) 프로그램을 돌리면 손실 없이 매달 확정수익이 난다, 원금은 보장된다, 손실 나면 보전해준다’며 자신 있게 수익을 제시해서, 프로그램 이용료와 투자·예치금을 냈어요. 처음 며칠은 수익이 찍히는 것처럼 보였지만 곧 계좌가 마이너스가 되거나 출금을 요청하니 ‘세금·수수료를 먼저 넣어야 출금된다’며 추가 입금을 요구했고, 결국 원금까지 묶인 채 운영자가 연락을 끊었어요. 알고 보니 실제 거래는 없거나 화면만 조작된 것이었고 같은 방식으로 여러 사람에게 확정수익을 앞세워 돈을 받은 정황이었어요. 처음부터 지킬 수 없는 확정수익을 보장한 것 같은데, 이런 FX 자동매매 수익보장 편취를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: 'FX 자동매매 수익보장 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '해외선물 FX 자동매매 수익보장 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '확정수익을 보장한다던 FX 자동매매 투자금이 마이너스로 묶이고 출금이 막혀 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외선물·FX 마진거래를 한다는 업체나 리딩방 운영자가 ‘자동매매(EA) 프로그램을 돌리면 손실 없이 매달 몇 퍼센트 확정수익이 난다, 원금은 보장된다, 혹시 손실이 나도 우리가 보전해준다’며 수익을 자신 있게 제시해, 어렵게 모은 돈으로 안정적인 수익을 얻을 기회라는 생각에 프로그램 이용료와 투자·예치금을 낸 분의 상황입니다. 처음 며칠은 계좌에 수익이 찍히는 것처럼 보여 안심했지만, 얼마 지나지 않아 계좌가 마이너스로 돌아서거나 막상 출금을 요청하니 ‘세금·수수료·보증금을 먼저 넣어야 출금 처리가 된다’며 자꾸 추가 입금을 요구했고, 시키는 대로 넣어도 출금은 되지 않은 채 원금까지 묶여, 노후·생활 자금을 들여 투자한 돈이 회수되지 않아 막막하실 거예요. 항의하면 ‘시장 변동 때문’이라거나 ‘규정상 절차’라며 미루다 운영자가 연락을 끊고, 뒤늦게 확인해보니 실제 거래는 없거나 화면·수익률이 조작된 것이었고 같은 방식으로 여러 사람에게 확정수익을 앞세워 돈을 받은 정황까지 보이면 단순 투자 손실이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 지킬 수 없는 확정수익을 알면서도 보장되는 것처럼 앞세워 돈을 받은 정황이면 단순 투자 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 지킬 수 없는 확정수익을 보장되는 것처럼 앞세워 투자금·이용료를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 편취 범의가 계약 당시를 기준으로 이행 의사·능력과 거래의 경위·내용 등을 종합하여 판단되어야 한다고 본 사례 흐름이 있는 영역으로, 확정수익 보장을 앞세운 자금 유치가 기망에 의한 편취였는지를 가려 다툴 여지가 있습니다. 확정수익·원금 보장 + 거래·수익률 조작 + 출금 거부·잠적 결합은 ‘FX 자동매매 수익보장 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 확정수익 기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외선물 FX 자동매매 수익보장 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 확정수익·원금보장 제시 대화·이용계약·투자약정·입금 내역 정리.</li>\n<li><strong>② 확정수익 기망 입증</strong> — 보장 수익과 실제 손실, 거래·수익률 조작·출금 거부 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 이용료·투자·예치금·추가 입금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 지킬 수 없는 확정수익·원금보장을 알면서도 보장되는 것처럼 앞세워 돈을 받았는지가 판단의 분기점입니다. 확정수익 제시 자료·수익보장 약정과 실제 손실·출금 거부, 거래·수익률 조작 정황, 같은 업체의 반복 모집을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 확정수익·원금보장 제시 대화·이용계약·투자약정·입금 내역을 캡처 보존.</li>\n<li><strong>2단계 — 확정수익 기망 입증 (즉시)</strong> — 보장 수익과 실제 손실, 출금 거부·추가 입금 요구, 거래·수익률 조작 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청.</li>\n<li><strong>4단계 — 경찰·기관 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332(유사수신·불법투자)·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외선물 FX 자동매매 수익보장 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>확정수익·원금보장 홍보·상담 대화 캡처 (거래 조건)</strong></li>\n<li><strong>자동매매 이용계약·투자약정·수익보장 각서 (계약 내용)</strong></li>\n<li><strong>이용료·투자·예치금·추가 입금 내역 (피해 금액)</strong></li>\n<li><strong>수익률 화면·거래내역·출금 거부 기록 (기망 입증)</strong></li>\n<li><strong>세금·수수료 명목 추가 입금 요구 대화</strong></li>\n<li><strong>업체·운영자·계좌·플랫폼 정보</strong></li>\n<li><strong>이의 제기·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가입 당시 제시받은 확정수익·원금보장 문구와 실제 손실·출금 거부 내역을 시간순으로 대조하고, 표시된 수익률·거래내역이 실제 거래와 맞는지, 출금 때마다 세금·수수료 명목으로 추가 입금을 요구했는지 확인하면 지킬 수 없는 확정수익을 앞세웠는지를 다투는 데 도움이 됩니다. 같은 업체·운영자에게 확정수익을 믿고 투자한 다른 피해자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>확정수익 기망</strong> — 보장 수익·원금보장이 지킬 수 없는 것이었는지.</li>\n<li><strong>거래 실체</strong> — 실제 거래가 있었는지, 수익률이 조작됐는지.</li>\n<li><strong>출금 거부</strong> — 세금·수수료 명목 추가 입금 요구가 출금 회피였는지.</li>\n<li><strong>편취액</strong> — 이용료·투자·예치·추가 입금액이 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·운영자·계좌·플랫폼으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·불법투자 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (계약·투자 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 편취 범의의 판단 기준',
        summary:
          '대법원 2016도16343(대법원, 2021.10.14 선고) 영역에서 법원은 사기죄가 타인을 기망하여 착오에 빠뜨리고 그 처분행위를 유발하여 재물을 교부받거나 재산상 이익을 얻음으로써 성립하는 범죄로서 그 본질이 기망행위에 의한 재물이나 재산상 이익의 취득에 있고, 사기죄의 주관적 구성요건인 편취의 범의는 계약 당시를 기준으로 이행 의사와 능력, 거래의 경위와 내용 등 객관적 사정을 종합하여 판단하여야 한다고 판시했습니다. 이는 단순한 채무 불이행이나 투자 실패와 사기를 가르는 기준이 계약 당시의 이행 의사·능력에 있음을 보여줍니다. FX 자동매매로 확정수익·원금보장을 앞세워 투자금을 받은 사안을 살펴볼 때에도, 상대가 지킬 수 없는 확정수익을 알면서도 보장되는 것처럼 앞세워 자금을 교부받은 것인지와 그 편취 범의를 계약 당시를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '확정수익·원금 보장 + 거래·수익률 조작 + 출금 거부·잠적 결합 시 FX 자동매매 수익보장 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시장 변동 때문에 손실 난 것이라는데도 사기인가요?',
        answer:
          '<strong>보장 수익이 지킬 수 없는 것이었는지가 핵심인 영역입니다.</strong> 확정수익 제시 자료와 실제 손실·출금 거부를 대비하세요.',
      },
      {
        question: '수익률 화면이 조작인 걸 어떻게 밝히나요?',
        answer:
          '<strong>표시 수익률과 실제 거래·출금 정황의 불일치가 단서인 영역입니다.</strong> 화면 캡처와 거래·입출금 내역을 확인하세요.',
      },
      {
        question: '세금을 내야 출금된다는데 더 넣어야 하나요?',
        answer:
          '<strong>출금 시 추가 입금 요구는 대표적 회피 정황으로 다뤄지는 영역입니다.</strong> 추가 입금 요구 대화를 보존하세요.',
      },
      {
        question: '이용계약서에 서명했는데도 다툴 수 있나요?',
        answer:
          '<strong>계약 과정의 확정수익 기망을 다투는 영역입니다.</strong> 홍보·상담 대화와 수익보장 각서를 정리하세요.',
      },
      {
        question: '같은 리딩방에서 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 다른 참여자의 손실·출금 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '투자 플랫폼 수익률 조작 추적', href: '/guide/fraud/fraud-investment-platform-yield-fake-display-track' },
      { label: '리딩방 손실보전 약정 추적', href: '/guide/fraud/fraud-stock-leading-room-loss-guarantee-track' },
      { label: '코인 리딩방 투자 추적', href: '/guide/fraud/fraud-crypto-signal-room-investment-track' },
      { label: '투자 사기 공동 대응', href: '/guide/fraud/fraud-investment-collective-action' },
    ],
  },

  // ─── 3. fraud-fake-kidnapping-ransom-extortion-voice-phishing-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-kidnapping-ransom-extortion-voice-phishing-track',
    keyword: '가족 납치 협박 사칭 몸값 송금 보이스피싱 사기',
    questionKeyword: '갑자기 걸려온 전화에서 상대가 ‘당신 자녀·가족을 데리고 있다, 경찰·주변에 알리면 위험해진다, 지금 당장 돈을 보내야 풀어준다’며 울음소리·비명을 들려주고 다그쳐서, 가족이 정말 붙잡힌 줄 알고 겁에 질려 시키는 대로 계좌로 몸값을 이체했어요. 실제로는 가족은 무사했고 전화·연락이 잠시 안 됐을 뿐, 이를 이용해 납치를 가장한 협박이었어요. 이체 직후 상대는 연락을 끊었고 돈은 순식간에 빠져나간 것 같아요. 너무 놀라 확인도 못 하고 송금했는데, 이런 가족 납치 협박 사칭 몸값 송금 보이스피싱을 당했을 때 즉시 무엇을 하고 어떤 절차로 지급정지·피해구제를 받아 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '납치 협박 사칭 몸값 송금 피해구제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가족 납치 협박 사칭 보이스피싱 — 5단계 환급 점검 | 로앤가이드',
      description:
        '가족을 납치했다는 협박 전화에 겁에 질려 몸값을 송금해 막막하다면, 형법 제347조 사기 판단과 지급정지·피해구제·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「갑자기 걸려온 전화에서 상대가 ‘당신 자녀·가족을 데리고 있다, 경찰이나 주변에 알리면 가족이 위험해진다, 지금 당장 돈을 보내야 풀어준다’며 울음소리·비명·다급한 목소리를 들려주고 몰아붙여, 가족이 정말 붙잡힌 줄 알고 겁에 질려 확인할 겨를도 없이 시키는 대로 몸값을 계좌로 이체한 분의 상황입니다. 마침 그 순간 가족과 전화·연락이 잠시 닿지 않으면 ‘정말 큰일이 났구나’ 싶어 판단이 흐려지기 마련이고, 상대가 통화를 끊지 못하게 하며 계속 다그치면 경찰에 알릴 생각도 못 한 채 급하게 송금하게 되는데, 나중에 가족이 멀쩡히 연락되는 것을 확인하고서야 납치를 가장한 협박이었음을 알게 되어 큰돈이 순식간에 빠져나가 막막하실 거예요. 이체 직후 상대는 연락을 끊고 돈은 여러 계좌로 빠르게 인출된 정황이라 시간이 촉박하고, 놀란 마음에 어디에 어떤 순서로 알려 지급을 막아야 할지 몰라 더 답답하셨을 거예요. 실제 납치 없이 겁을 주어 돈을 이체하도록 유도한 것이라면, 이는 전기통신금융사기의 한 유형으로 볼 여지가 큽니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하며, 전기통신금융사기는 관련 특별법에 따라 지급정지·피해금 환급 절차가 마련되어 있는 영역입니다. 판례는 수사기관이 전자정보를 임의제출받아 압수할 때 그 대상과 범위를 명확히 하여 적법절차를 준수해야 하고 관련성 있는 자료가 적법하게 확보되어야 함을 밝힌 사례 흐름이 있는 영역으로, 통화·계좌·문자 등 피해 자료를 적법하게 확보해두는 것이 대응의 출발점이 됩니다. 납치 가장 협박 + 겁박·몸값 유도 + 피해금 이체 결합은 ‘납치빙자 전기통신금융사기’ 대응이 가능한 트랙입니다. 피해자라면 ① 즉시 지급정지 ② 협박·이체 정리 ③ 피해구제 신청 ④ 경찰 신고 ⑤ 채권소멸·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가족 납치 협박 사칭 보이스피싱 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급정지·협박 정리·피해구제·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 지급정지</strong> — 112·송금 은행에 즉시 계좌 지급정지 요청.</li>\n<li><strong>② 협박·이체 정리</strong> — 협박 전화 번호·녹음·문자·계좌·이체 내역 정리.</li>\n<li><strong>③ 피해구제 신청</strong> — 은행에 전기통신금융사기 피해구제 신청서 접수.</li>\n<li><strong>④ 경찰 신고</strong> — 경찰서·사이버범죄 신고 ECRM 접수와 사건사고사실확인원 발급.</li>\n<li><strong>⑤ 채권소멸·환급</strong> — 채권소멸 공고 절차를 거쳐 피해금 환급 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실제 납치가 아니라 가족과 연락이 잠시 안 되는 상황을 이용해 겁을 주어 송금을 유도한 것인지가 판단의 분기점입니다. 무엇보다 이체 직후 즉시 지급정지를 요청해 인출을 막고 가족의 안전부터 확인하는 것이 중요하며, 협박 전화 녹음·문자·이체 내역과 상대 계좌 정보를 신속히 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 지급정지·안전 확인 (즉시)</strong> — 112·송금 은행 콜센터에 상대 계좌 지급정지를 요청하고 가족의 안전을 확인.</li>\n<li><strong>2단계 — 협박·이체 자료 보존 (즉시)</strong> — 협박 전화 번호·녹음·문자·이체 내역을 캡처 보존.</li>\n<li><strong>3단계 — 피해구제 신청 (지급정지 후)</strong> — 은행에 전기통신금융사기 피해구제 신청서를 접수.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 경찰서·사이버범죄 신고 ECRM 접수 후 사건사고사실확인원을 발급, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 채권소멸·환급 (약 2개월)</strong> — 채권소멸 공고 절차를 거쳐 남은 피해금 환급을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가족 납치 협박 사칭 보이스피싱 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 지급정지·피해구제·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>협박 전화 번호·통화 녹음 (협박 정황)</strong></li>\n<li><strong>납치 가장 문자·메시지 캡처 (기망·협박 수단)</strong></li>\n<li><strong>몸값 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>상대 계좌·예금주 정보 (지급정지 대상)</strong></li>\n<li><strong>지급정지 요청·접수 확인 자료</strong></li>\n<li><strong>피해구제 신청서·사건사고사실확인원</strong></li>\n<li><strong>가족 안전·연락 두절 시각 등 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무엇보다 이체 직후 112·은행에 즉시 지급정지를 요청해 계좌가 비워지기 전에 인출을 막고, 동시에 가족의 안전을 확인하는 것이 가장 중요합니다. 협박 전화 녹음·문자·이체 내역과 상대 계좌 정보를 정리하고, 가족과 연락이 닿지 않았던 시각 등 정황까지 기록해 피해구제 신청과 신고에 대비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>납치 가장</strong> — 실제 납치 없이 협박으로 송금을 유도했는지.</li>\n<li><strong>지급정지 시점</strong> — 이체 직후 얼마나 빨리 지급정지를 요청했는지.</li>\n<li><strong>피해금 잔여</strong> — 계좌에 남은 피해금이 있어 환급 대상인지.</li>\n<li><strong>계좌·번호 특정</strong> — 상대 계좌·전화번호를 특정할 수 있는지.</li>\n<li><strong>추가 피해 차단</strong> — 개인정보 유출·추가 협박 위험이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (전기통신금융사기 피해구제)</strong></li>\n<li><strong>보이스피싱 통합신고·대응센터 (112)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임의제출 전자정보의 적법한 확보',
        summary:
          '대법원 2021도11170(대법원, 2022.01.27 선고) 영역에서 법원은 수사기관이 정보저장매체와 거기에 저장된 전자정보를 임의제출의 방식으로 압수할 때, 제출자의 제출 범위에 관한 의사가 명확하지 않거나 이를 알 수 없는 경우에는 임의제출에 따른 압수의 동기가 된 범죄혐의사실과 관련되고 이를 증명할 수 있는 최소한의 가치가 있는 전자정보에 한하여 압수의 대상이 된다고 보았습니다. 그러면서 그 관련성은 범행 동기와 경위, 수단과 방법, 시간과 장소 등에 관한 간접·정황증거로 사용될 수 있는 정보까지 포함하되 구체적·개별적 연관관계가 있는 경우에 인정된다고 판시했습니다. 납치를 가장한 협박으로 몸값을 이체하게 한 사안을 살펴볼 때에도, 통화 녹음·문자·계좌·이체 내역 등 피해를 증명할 자료를 적법한 절차에 따라 정리·확보해두는 것이 피해구제와 신고의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '납치 가장 협박 + 겁박·몸값 유도 + 피해금 이체 결합 시 납치빙자 전기통신금융사기 대응 검토 영역 — 즉시 지급정지·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 송금했는데 돈을 돌려받을 수 있나요?',
        answer:
          '<strong>즉시 지급정지와 피해구제 신청으로 남은 금액 환급을 검토하는 영역입니다.</strong> 이체 직후 112·은행에 지급정지를 요청하세요.',
      },
      {
        question: '가족이 무사한데도 신고가 되나요?',
        answer:
          '<strong>실제 납치가 없어도 협박으로 송금을 유도한 정황이 다뤄지는 영역입니다.</strong> 협박 녹음·문자와 이체 내역을 보존하세요.',
      },
      {
        question: '지급정지는 어디에 요청하나요?',
        answer:
          '<strong>112와 송금한 은행 콜센터에 즉시 요청하는 영역입니다.</strong> 상대 계좌·예금주 정보를 함께 전달하세요.',
      },
      {
        question: '통화를 녹음하지 못했는데 다툴 수 있나요?',
        answer:
          '<strong>번호·문자·이체 내역 등 다른 정황으로도 다투는 영역입니다.</strong> 통화 시각·상대 번호와 계좌 정보를 정리하세요.',
      },
      {
        question: '경찰 신고와 피해구제 중 뭐부터 하나요?',
        answer:
          '<strong>지급정지가 최우선이고 이어 피해구제·신고를 진행하는 영역입니다.</strong> 지급정지 후 신청서·사건사고사실확인원을 준비하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '보이스피싱 100만원 이상 환급', href: '/guide/fraud/fraud-voice-phishing-100m-plus-recovery' },
      { label: '카카오 가족사칭 4단계 환급', href: '/guide/fraud/fraud-kakao-family-phishing-4step-refund' },
      { label: '메신저피싱 가족사칭 환급', href: '/guide/fraud/fraud-messenger-family-impersonation-recovery' },
      { label: '검찰 사칭 안전계좌 이체 추적', href: '/guide/fraud/fraud-prosecutor-impersonation-safe-account-transfer-track' },
    ],
  },

  // ─── 4. fraud-used-musical-instrument-direct-deal-prepay-no-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-musical-instrument-direct-deal-prepay-no-delivery-track',
    keyword: '중고 악기 직거래 입금 후 미인도 사기',
    questionKeyword: '중고 거래 카페·앱에서 중고 기타·색소폰·전자피아노 같은 악기를 싸게 판다는 글을 보고 판매자와 연락했는데, ‘직거래는 어렵고 택배로 보내주겠다, 먼저 입금하면 바로 발송한다’고 해서 시세보다 저렴한 가격에 대금을 계좌로 보냈어요. 입금 후에는 ‘오늘 택배 접수했다, 송장 곧 보내준다’며 미루기만 하고 악기는 오지 않았고, 며칠 뒤부터는 메시지도 읽지 않고 연락이 끊겼어요. 알고 보니 같은 계좌·번호로 여러 사람에게 악기를 판다며 선입금만 받고 물건을 보내지 않은 정황이었어요. 처음부터 악기를 보낼 생각 없이 선입금만 챙긴 것 같은데, 이런 중고 악기 직거래 입금 후 미인도를 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 악기 선입금 미인도 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 악기 직거래 미인도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '선입금했는데 중고 악기를 받지 못하고 판매자가 잠적해 막막하다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 카페·앱에서 중고 기타·색소폰·전자피아노·앰프 같은 악기를 시세보다 싸게 판다는 글을 보고 판매자와 연락했는데, ‘직거래는 어려우니 택배로 보내주겠다, 먼저 입금하면 오늘 바로 발송한다’는 말을 믿고 대금을 계좌로 보낸 분의 상황입니다. 마침 배우거나 연주하려던 악기를 저렴하게 잘 샀다고 생각했는데, 막상 입금하고 나니 ‘방금 택배 접수했다, 송장 번호는 곧 보내주겠다’며 차일피일 미루기만 하고 악기는 오지 않았고, 며칠 뒤부터는 메시지도 읽지 않은 채 연락이 끊겨 대금만 고스란히 잃게 되어 막막하실 거예요. 발송 여부를 묻고 환불을 요구해도 답이 없다가 번호를 차단당하고, 뒤늦게 확인해보니 같은 계좌·번호로 여러 사람에게 악기를 판다며 선입금만 받고 물건을 보내지 않은 정황까지 보이면 단순한 배송 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 악기를 보낼 의사나 능력 없이 선입금만 받은 정황이면 단순 거래 지연으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 악기를 보낼 의사 없이 선입금만 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 수사기관이 혐의사실과 무관한 정보를 삭제·반환하지 않고 보관한 경우 그 부분 압수가 위법하다고 보아 적법절차에 따른 증거 확보의 중요성을 밝힌 사례 흐름이 있는 영역으로, 편취를 입증할 대화·이체·진술 자료를 적법하게 정리해두고 다툴 여지가 있습니다. 선입금 유인 + 물건 미인도 + 미발송·잠적 결합은 ‘중고 직거래 미인도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미인도·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 악기 직거래 입금 후 미인도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 판매 글·발송 약속 대화·주문 조건·송금 내역 정리.</li>\n<li><strong>② 미인도·기망 입증</strong> — 미발송·허위 송장·연락 두절 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선입금한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 악기를 보낼 의사나 능력 없이 선입금만 받고 발송하지 않았는지가 판단의 분기점입니다. 발송을 약속한 대화와 송금 내역, 허위 송장·연락 두절 정황과 같은 계좌·번호의 반복 미인도를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·발송 약속 대화·주문 조건·송금 내역을 캡처 보존.</li>\n<li><strong>2단계 — 미인도·기망 입증 (즉시)</strong> — 미발송·허위 송장·읽지 않은 메시지·연락 두절 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 악기 직거래 입금 후 미인도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·악기 사진·조건 캡처 (거래 조건)</strong></li>\n<li><strong>발송 약속·송장 안내 대화 (계약 내용)</strong></li>\n<li><strong>송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>미발송·허위 송장·연락 두절 화면 (기망 입증)</strong></li>\n<li><strong>판매자·닉네임·계좌·연락처 정보</strong></li>\n<li><strong>환불 요청·거부·차단 기록</strong></li>\n<li><strong>같은 계좌·번호 반복 미인도 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발송을 약속한 대화와 송금 내역을 대비하고, 실제로는 발송되지 않았거나 송장이 허위였음을 보여주는 화면을 확보하면 악기를 보낼 의사 없이 선입금만 받았는지를 다투는 데 도움이 됩니다. 같은 계좌·번호로 다른 사람도 악기를 떼인 정황을 함께 모으면 반복 편취를 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>발송 의사·능력</strong> — 입금 수령 당시 악기를 보낼 의사·능력이 있었는지.</li>\n<li><strong>미발송·허위 송장</strong> — 실제 발송 여부와 송장이 허위였는지.</li>\n<li><strong>편취 범의</strong> — 단순 지연인지 처음부터 선입금만 노렸는지.</li>\n<li><strong>편취액</strong> — 선입금한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인·직거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적법절차에 따른 압수·증거의 확보',
        summary:
          '대법원 2020도3050(대법원, 2024.04.16 선고) 영역에서 법원은 전자정보에 대한 압수·수색 과정에서 혐의사실과 관련된 전자정보를 선별해 압수한 후에도 무관한 전자정보를 삭제·폐기·반환하지 않은 채 그대로 보관하고 있다면 그 무관정보 부분에 대한 압수는 위법하고, 사후에 압수·수색영장을 발부받았다거나 피고인이 증거로 함에 동의하였더라도 그 위법성이 치유되지 않는다고 판시했습니다. 이는 수사기관의 증거 수집이 헌법과 형사소송법이 정한 적법절차에 따라 이루어져야 하고, 그렇게 확보된 증거만이 유죄 인정의 자료가 될 수 있음을 보여줍니다. 온라인 중고거래에서 악기를 선입금하고 받지 못한 편취 사안을 살펴볼 때에도, 편취를 입증할 대화·이체·진술 등 증거를 적법한 절차에 따라 정리·확보하는 것이 다툼의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '선입금 유인 + 물건 미인도 + 미발송·잠적 결합 시 중고 직거래 미인도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '택배 접수했다며 미루는데도 사기인가요?',
        answer:
          '<strong>악기를 보낼 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 발송 약속 대화와 미발송·연락 두절 정황을 대비하세요.',
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
        question: '고가 악기가 아닌데도 신고가 되나요?',
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
      { label: '중고 택배 발송 후 사라짐 추적', href: '/guide/fraud/fraud-secondhand-shipped-vanish-track' },
      { label: '중고 전동킥보드 직거래 미인도 추적', href: '/guide/fraud/fraud-used-electric-scooter-prepay-nondelivery-track' },
      { label: '중고 냉장고 직거래 미인도 추적', href: '/guide/fraud/fraud-used-refrigerator-direct-deal-deposit-no-delivery-track' },
      { label: '중고가구 일괄구매 미배송 추적', href: '/guide/fraud/fraud-secondhand-furniture-bulk-noshow-track' },
    ],
  },

  // ─── 5. fraud-secondhand-seller-defect-disclosure-dispute-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-seller-defect-disclosure-dispute-falsely-accused-defense',
    keyword: '중고거래 하자 고지 분쟁 판매자 사기 고소 방어',
    questionKeyword: '중고 거래로 제가 쓰던 물건(전자제품·가전·명품 등)을 상태를 설명하고 팔았는데, 산 사람이 며칠·몇 주 뒤에 ‘사용해보니 하자가 있다, 알고도 숨기고 팔았으니 사기다’라며 저를 사기로 고소하겠다거나 고소했어요. 저는 제가 아는 범위에서 상태를 고지하고 시세에 맞춰 팔았을 뿐이고, 판매 당시엔 정상이었거나 몰랐던 하자인데, 하자가 나왔다는 이유만으로 처음부터 속인 사기꾼으로 몰려 억울해요. 상대는 사용 중 생긴 문제까지 제 탓으로 돌리고 환불·배상을 압박해요. 이렇게 중고 물품 하자 고지를 두고 사기로 고소된 상황에서 편취의 고의가 없었다는 점과 고지 내용·거래 경위를 어떻게 정리해 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '중고거래 하자 고지 편취 고의 부재 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '중고거래 하자 고지 사기 고소 방어 — 5단계 무고 점검 | 로앤가이드',
      description:
        '중고로 판 물건에 하자가 나왔다며 사기로 고소돼 억울하다면, 편취 고의 부재 판단과 고지 내용·거래 경위 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래로 자신이 쓰던 전자제품·가전·명품·취미용품 같은 물건을 상태를 설명하고 시세에 맞춰 팔았는데, 산 사람이 며칠·몇 주 뒤에 ‘사용해보니 하자가 있다, 알고도 숨기고 팔았으니 사기다’라며 사기로 고소하겠다거나 실제로 고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 파는 사람 입장에서는 자신이 아는 범위에서 상태를 고지하고 중고임을 전제로 시세보다 낮게 넘겼을 뿐이고, 판매 당시에는 정상이었거나 자신도 몰랐던 하자, 혹은 상대가 받은 뒤 사용 중 생긴 문제일 수 있는데, 하자가 나왔다는 결과만으로 처음부터 속인 사기꾼으로 단정될까 봐 억울하고 막막하실 거예요. 게다가 상대가 사용 중 생긴 문제나 단순 변심까지 판매자 탓으로 돌리며 환불·배상을 압박하고, 안 들어주면 사기로 신고하겠다고 하면 더 답답하셨을 거예요. 혐의를 받고 있다면, 판매 당시 어떤 상태로 어떻게 고지했는지와 거래 경위, 가격·중고 조건, 상대의 사용 정황을 차분히 정리해 처음부터 하자를 알면서 속일 편취의 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 하자 고지 내용이나 거래 경위가 신고되었다면 그 경위와 상대 주장의 모순까지 함께 기록해두는 것이 좋습니다.」 사기죄는 타인을 기망하여 착오에 빠뜨리고 그 처분행위를 유발하여 재물을 교부받음으로써 성립하는 범죄로서, 하자를 알면서 숨기고 판 기망행위와 편취의 고의가 인정되어야 성립할 수 있는 영역입니다. 판례는 사기죄로 기소된 사안에서 어떤 행위가 문제 되는지 심판 대상을 구체적으로 특정하고 피고인의 방어권을 보장하는 절차의 중요성을 밝힌 사례 흐름이 있는 영역으로, 어떤 고지·거래가 기망으로 문제 되는지 특정해 가려 다툴 여지가 있습니다. 하자 결과 발생 + 고지 내용·거래 경위 + 편취 고의 부인 결합은 ‘하자 고지·편취 고의 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 거래·고지 정리 ② 하자 인식 여부 ③ 편취 고의 부재 ④ 사용·경위 검토 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고거래 하자 고지 사기 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·하자 인식·편취 고의·사용 경위·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·고지 정리</strong> — 판매 글·상태 고지 대화·가격·중고 조건·거래 경위 정리.</li>\n<li><strong>② 하자 인식 여부</strong> — 판매 당시 하자를 알았는지, 정상이었는지 검토.</li>\n<li><strong>③ 편취 고의 부재</strong> — 하자를 알면서 숨길 고의가 없었음을 뒷받침하는 사정 검토.</li>\n<li><strong>④ 사용·경위 검토</strong> — 상대가 받은 뒤 사용 중 발생한 문제인지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 고지 기록·거래 경위가 사기 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 하자가 나왔다는 결과가 아니라, 판매 당시 하자를 알면서 숨기고 팔았는지(편취 고의)가 판단의 분기점입니다. 상태를 고지한 대화·판매 글과 가격·중고 조건, 판매 당시 정상이었거나 하자를 몰랐던 정황, 상대의 사용 경위를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·고지 자료 보존 (즉시)</strong> — 판매 글·상태 고지 대화·가격·거래 경위를 시간순으로 보존.</li>\n<li><strong>2단계 — 하자 인식·상태 정리 (즉시)</strong> — 판매 당시 상태·점검 내역과 하자를 몰랐던 정황을 정리.</li>\n<li><strong>3단계 — 사용·경위 검토 (병행)</strong> — 상대가 받은 뒤 사용 중 발생한 문제인지, 상대 주장의 변동을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 고지 기록·거래 경위를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고거래 하자 고지 사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·고지·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·상태 설명·사진 캡처 (고지 내용)</strong></li>\n<li><strong>상태 고지·문답 대화 (기망 부존재 입증)</strong></li>\n<li><strong>가격·중고 조건·거래 경위 정리 (거래 내용)</strong></li>\n<li><strong>판매 당시 점검·정상 작동 정황 (하자 인식 여부)</strong></li>\n<li><strong>상대의 수령·사용·문제 발생 시점 기록</strong></li>\n<li><strong>환불·배상 압박·협박성 요구 기록</strong></li>\n<li><strong>고소장·상대 주장 변동·모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매 당시 어떤 상태로 어떻게 고지했는지 대화·판매 글·사진으로 정리하고, 시세보다 낮은 가격과 중고 조건, 판매 시점의 정상 작동 정황을 함께 확보하면 하자를 알면서 숨긴 것이 아니라는 점을 다투는 데 도움이 됩니다. 상대가 받은 뒤 사용 중 문제가 생겼거나 주장이 시점마다 달라지는 부분, 환불을 안 들어주자 사기로 몰아간 정황을 정리하면 편취 고의 부재를 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 하자를 알면서 숨기고 팔 고의가 있었는지.</li>\n<li><strong>고지 내용</strong> — 상태를 어떻게 고지했고 중고 조건이 어땠는지.</li>\n<li><strong>하자 발생 시점</strong> — 판매 당시 하자인지 사용 중 생긴 문제인지.</li>\n<li><strong>가격·거래 조건</strong> — 시세·중고임을 반영한 거래였는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래 분쟁상담)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 공소사실의 특정과 방어권 보장',
        summary:
          '대법원 2021도13108(대법원, 2022.01.13 선고) 영역에서 법원은 검사가 공소장에 기재한 공소사실 또는 적용법조의 추가·철회·변경을 하려면 그 취지를 기재한 공소장변경허가신청서를 법원에 제출하여야 하고, 공소사실의 기재가 불분명한 경우 법원은 검사에게 석명을 구한 다음에야 공소사실의 불특정을 이유로 공소를 기각해야 한다고 판시했습니다. 이는 형사재판에서 어떤 행위가 문제 되는지 심판 대상이 구체적으로 특정되어야 하고, 그래야 피고인이 방어권을 제대로 행사할 수 있다는 취지를 담고 있습니다. 중고 물품의 하자 고지를 두고 사기로 고소된 사안을 살펴볼 때에도, 어떤 고지·거래가 기망으로 문제 되는지 구체적으로 특정하고 판매 당시의 상태·고지 내용·거래 경위 등 관련 증거를 정리해 편취 고의 유무를 가리는 것이 방어의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '하자 결과 발생 + 고지 내용·거래 경위 + 편취 고의 부인 결합 시 하자 고지·편취 고의 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '하자가 나왔으면 무조건 사기가 되나요?',
        answer:
          '<strong>하자를 알면서 숨긴 편취 고의가 있었는지가 핵심인 영역입니다.</strong> 고지 내용·거래 경위와 판매 당시 상태를 정리하세요.',
      },
      {
        question: '몰랐던 하자인데 어떻게 밝히나요?',
        answer:
          '<strong>판매 당시 정상 작동·점검 정황이 근거가 되는 영역입니다.</strong> 판매 시점 상태·사진·고지 대화를 확보하세요.',
      },
      {
        question: '상대가 받아서 쓰다가 생긴 문제 같아요.',
        answer:
          '<strong>하자 발생 시점을 가리는 것이 중요한 영역입니다.</strong> 수령·사용 시점과 문제 발생 경위를 정리하세요.',
      },
      {
        question: '환불 안 해주면 사기로 신고한다는데요?',
        answer:
          '<strong>환불 압박과 편취 고의는 별개로 다뤄지는 영역입니다.</strong> 압박·요구 기록과 상대 주장 변동을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>고지 내용·거래 경위에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고차 하자 사기 고소 방어', href: '/guide/fraud/fraud-used-car-private-sale-defect-falsely-accused-defense' },
      { label: '중고 명품 가품 고소 방어', href: '/guide/fraud/fraud-second-hand-luxury-replica-defense' },
      { label: '중고거래 오송금 사기 고소 방어', href: '/guide/fraud/fraud-secondhand-accused-misremit-defense' },
      { label: '물품대금 미지급 사기 고소 방어', href: '/guide/fraud/fraud-goods-payment-default-falsely-accused-defense' },
    ],
  },

  // ─── 6. fraud-online-mall-seller-shipping-delay-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-online-mall-seller-shipping-delay-falsely-accused-defense',
    keyword: '온라인 쇼핑몰 배송 지연 판매자 사기 고소 방어',
    questionKeyword: '온라인 쇼핑몰·스마트스토어를 운영하며 상품을 팔았는데, 재고·공급처 문제나 주문 폭주로 배송이 늦어지자 일부 구매자가 ‘돈만 받고 안 보낸다, 처음부터 보낼 생각 없이 판 사기다’라며 저를 사기로 고소하겠다거나 고소했어요. 저는 실제 사업을 하며 상당수는 정상 배송했고 지연된 건도 환불·재발송을 안내했는데, 배송이 늦었다는 이유만으로 편취 목적의 사기꾼으로 몰려 억울해요. 매입·발주·발송 내역과 환불 처리 기록도 있는데, 지연·품절이 곧 사기로 취급될까 봐 걱정돼요. 이렇게 온라인 쇼핑몰 배송 지연을 두고 사기로 고소된 상황에서 편취의 고의가 없었다는 점과 사업 실체·처리 경위를 어떻게 정리해 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '온라인몰 배송 지연 편취 고의 부재 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '온라인몰 배송 지연 사기 고소 방어 — 5단계 방어 점검 | 로앤가이드',
      description:
        '재고·공급 지연으로 배송이 늦어졌을 뿐인데 미배송 사기로 고소돼 억울하다면, 편취 고의 부재 판단과 사업 실체·처리 경위 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 쇼핑몰·스마트스토어·오픈마켓에서 상품을 팔며 실제로 사업을 운영해 왔는데, 재고·공급처 사정이나 주문 폭주로 일부 상품의 배송이 늦어지자, 기다리다 지친 일부 구매자가 ‘돈만 받고 안 보낸다, 처음부터 보낼 생각 없이 판 사기다’라며 사기로 고소하겠다거나 실제로 고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 판매자 입장에서는 상당수 주문은 정상적으로 발송했고 지연된 건도 사정을 안내하며 환불·재발송으로 처리하려 했는데, 배송이 늦었다는 결과만으로 처음부터 편취할 목적이었던 사기꾼으로 단정될까 봐 억울하고 막막하실 거예요. 매입·발주·발송 내역과 환불 처리 기록, 사업자등록·거래 실적이 남아 있는데도, 지연·품절·일시적 자금 사정이 곧바로 편취 사기로 취급될까 봐 더 답답하셨을 거예요. 혐의를 받고 있다면, 매입·발주·발송·환불 내역과 사업 실체, 지연이 발생한 원인과 구매자 안내 경위를 차분히 정리해 처음부터 물건을 보내지 않고 대금만 챙길 편취의 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 미배송·편취 경위가 신고되었다면 그 경위와 상대 주장의 모순, 정상 처리된 다수 거래까지 함께 기록해두는 것이 좋습니다.」 사기죄는 타인을 기망하여 착오에 빠뜨리고 그 처분행위를 유발하여 재물을 교부받음으로써 성립하는 범죄로서, 처음부터 상품을 보낼 의사·능력 없이 대금만 받을 편취의 고의가 인정되어야 성립할 수 있는 영역입니다. 판례는 형사재판에서 피고인의 출석·진술 기회를 보장하는 절차를 지켜야 하고 그 방어권이 실질적으로 보장되어야 함을 밝힌 사례 흐름이 있는 영역으로, 사업 실체와 처리 경위를 정리해 편취 고의 유무를 가려 다툴 여지가 있습니다. 배송 지연·품절 + 사업 실체·처리 경위 + 편취 고의 부인 결합은 ‘배송 지연·편취 고의 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 거래·처리 정리 ② 사업 실체 입증 ③ 편취 고의 부재 ④ 지연 원인 검토 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인몰 배송 지연 사기 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·사업 실체·편취 고의·지연 원인·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·처리 정리</strong> — 주문·결제·발송·환불·재발송 내역과 안내 대화 정리.</li>\n<li><strong>② 사업 실체 입증</strong> — 사업자등록·매입·발주·거래 실적 등 실체 검토.</li>\n<li><strong>③ 편취 고의 부재</strong> — 대금만 챙길 고의가 없었음을 뒷받침하는 사정 검토.</li>\n<li><strong>④ 지연 원인 검토</strong> — 재고·공급·주문 폭주 등 지연 원인 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 정상 처리된 다수 거래가 사기 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배송이 늦었다는 결과가 아니라, 처음부터 상품을 보낼 의사·능력 없이 대금만 챙길 목적이었는지(편취 고의)가 판단의 분기점입니다. 매입·발주·발송·환불 내역과 사업 실체, 지연 원인과 구매자 안내 경위, 정상 처리된 다수 거래를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·처리 자료 보존 (즉시)</strong> — 주문·결제·발송·환불·재발송 내역과 안내 대화를 시간순으로 보존.</li>\n<li><strong>2단계 — 사업 실체 정리 (즉시)</strong> — 사업자등록·매입·발주·거래 실적 등 실체 자료를 정리.</li>\n<li><strong>3단계 — 지연 원인·경위 검토 (병행)</strong> — 재고·공급·주문 폭주 등 지연 원인과 구매자 안내 경위를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 사업 실체·처리 경위를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인몰 배송 지연 사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·실체·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문·결제·정산 내역 (거래 내용)</strong></li>\n<li><strong>매입·발주·재고·발송 내역 (사업 실체)</strong></li>\n<li><strong>환불·재발송·지연 안내 대화 (처리 경위)</strong></li>\n<li><strong>사업자등록·거래 실적·정상 배송 기록</strong></li>\n<li><strong>재고·공급·주문 폭주 등 지연 원인 자료</strong></li>\n<li><strong>구매자 항의·환불 요구·주장 변동 기록</strong></li>\n<li><strong>고소장·상대 주장 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매입·발주·발송·환불 내역과 사업자등록·거래 실적으로 실제 사업을 운영했음을 정리하고, 지연이 재고·공급·주문 폭주 등 사정에서 비롯됐으며 구매자에게 안내·환불·재발송으로 대응했음을 함께 확보하면 처음부터 대금만 챙길 편취 고의가 없었다는 점을 다투는 데 도움이 됩니다. 상당수 주문이 정상 배송된 기록과 상대 주장이 시점마다 달라지는 부분을 정리하면 편취 고의 부재를 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 처음부터 보낼 의사·능력 없이 대금만 노렸는지.</li>\n<li><strong>사업 실체</strong> — 실제 매입·발주·배송이 이루어진 사업이었는지.</li>\n<li><strong>지연 원인</strong> — 재고·공급·주문 폭주 등 정당한 사정이 있었는지.</li>\n<li><strong>처리 경위</strong> — 환불·재발송·안내로 대응했는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 분쟁상담)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형사절차의 출석·진술 기회와 방어권',
        summary:
          '대법원 2022도7940(대법원, 2022.11.10 선고) 영역에서 법원은 항소심에서도 피고인의 출석 없이 개정하지 못하는 것이 원칙이고, 피고인이 불출석한 상태에서 그 진술 없이 판결하기 위해서는 피고인이 적법한 공판기일 통지를 받고서도 2회 연속으로 정당한 이유 없이 출정하지 않은 경우에 해당하여야 한다고 판시했습니다. 그러면서 그 ‘적법한 공판기일 통지’에는 피고인의 이름·죄명·출석 일시·장소가 명시된 공판기일 변경명령을 송달받은 경우도 포함된다고 보았습니다. 이는 형사재판에서 피고인의 출석·진술 기회를 보장하는 절차가 방어권 보장의 핵심임을 보여줍니다. 온라인 쇼핑몰 배송 지연을 두고 사기로 고소된 사안을 살펴볼 때에도, 사업 실체와 지연 원인·처리 경위를 정리해 진술 기회에서 편취 고의가 없었음을 충실히 다투는 것이 방어의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '배송 지연·품절 + 사업 실체·처리 경위 + 편취 고의 부인 결합 시 배송 지연·편취 고의 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '배송이 늦으면 무조건 사기가 되나요?',
        answer:
          '<strong>처음부터 대금만 챙길 편취 고의가 있었는지가 핵심인 영역입니다.</strong> 사업 실체와 지연 원인·처리 경위를 정리하세요.',
      },
      {
        question: '실제로 사업을 하는 걸 어떻게 밝히나요?',
        answer:
          '<strong>매입·발주·발송·정산 내역이 실체의 근거가 되는 영역입니다.</strong> 사업자등록·거래 실적과 발송 기록을 확보하세요.',
      },
      {
        question: '품절·재고 문제로 늦은 건데도 사기인가요?',
        answer:
          '<strong>지연 원인의 정당성을 가리는 것이 중요한 영역입니다.</strong> 재고·공급·주문 폭주 정황과 안내 대화를 정리하세요.',
      },
      {
        question: '환불·재발송을 안내했는데도 고소됐어요.',
        answer:
          '<strong>처리 경위는 편취 고의를 배척하는 사정이 되는 영역입니다.</strong> 환불·재발송·안내 기록을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>사업 실체·지연 원인에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '위탁판매 정산 지연 사기 고소 방어', href: '/guide/fraud/fraud-consignment-sale-settlement-delay-falsely-accused-defense' },
      { label: '물품 되팔이 중개 사기 고소 방어', href: '/guide/fraud/fraud-goods-resale-middleman-falsely-accused-defense' },
      { label: '거래 분쟁 사기 고소 방어', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
    ],
  },

  // ─── 7. sex-crime-ex-partner-intimate-video-distribution-threat-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-ex-partner-intimate-video-distribution-threat-track',
    keyword: '전 연인 성관계 영상 유포 협박 신고',
    questionKeyword: '헤어진 연인이 사귈 때 촬영했던 성관계 영상·은밀한 사진을 빌미로 ‘다시 만나주지 않으면, 돈을 주지 않으면 영상을 SNS·지인에게 뿌리겠다’며 저를 협박해 너무 두렵고 수치스러워요. 촬영 당시엔 동의했더라도 지금 유포하겠다고 겁을 주는 것 자체가 협박 같은데, 상대는 ‘장난이다, 가지고만 있겠다’고 하면서도 계속 암시하며 몰아붙여요. 영상이 실제로 유포될까 봐 잠도 못 자고 시키는 대로 해야 하나 겁이 나요. 이런 전 연인의 촬영물 이용 유포 협박을 신고하려면 어떤 기준으로 성폭력처벌법 위반에 해당하는지, 어떤 자료를 모아 대응하고 유포를 막을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '전 연인 촬영물 이용 유포 협박 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '전 연인 영상 유포 협박 신고 — 5단계 대응 점검 | 로앤가이드',
      description:
        '전 연인이 성적 영상을 뿌리겠다며 협박해 두렵다면, 촬영물 이용 협박 해당성 판단과 증거 보존·신고·유포 차단까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헤어진 연인이 사귈 때 함께 촬영했던 성관계 영상이나 은밀한 사진을 빌미로, ‘다시 만나주지 않으면’ 또는 ‘돈을 주지 않으면 영상을 SNS·지인·가족에게 뿌리겠다’며 협박해 잠도 못 자고 두렵고 수치스러운 분의 상황입니다. 촬영 당시에는 서로 동의했더라도, 헤어진 뒤 그 영상을 유포하겠다며 겁을 주는 것 자체가 사람을 공포에 빠뜨리는 협박인데, 상대가 ‘장난이다, 가지고만 있겠다’고 하면서도 은근히 유포 가능성을 계속 암시하며 몰아붙이면, 영상이 실제로 퍼질까 봐 시키는 대로 해야 하나 하는 압박에 시달리게 되어 막막하실 거예요. 특히 한때 믿고 사랑했던 사람에게서 이런 협박을 받는다는 것 자체가 큰 충격이고, 신고하면 오히려 영상이 먼저 퍼질까 봐 두려워 이러지도 저러지도 못한 채 혼자 견디다 더 답답하셨을 거예요. 유포하겠다는 해악의 고지가 있었다면, 촬영물을 실제로 눈앞에 보여주지 않았더라도 협박으로 볼 여지가 있습니다.」 성폭력처벌법 제14조의3은 성적 욕망 또는 수치심을 유발할 수 있는 촬영물 또는 복제물을 이용하여 사람을 협박한 경우를 형법상 협박죄보다 가중해 처벌하고, 실제 유포 행위는 같은 법 제14조에 따라 처벌될 수 있는 영역입니다. 판례는 촬영물 등을 이용하여 사람을 협박한다는 것은 촬영물 등을 인식하고 이를 방편·수단으로 삼아 공포심을 일으킬 정도의 해악을 고지하는 것으로, 반드시 촬영물을 피해자에게 직접 제시하거나 협박 당시 이를 소지·유포할 수 있는 상태여야 하는 것은 아니라고 본 사례 흐름이 있는 영역으로, 유포 암시가 협박에 해당하는지를 가려 다툴 여지가 있습니다. 촬영물 이용 + 유포 해악 고지 + 재회·금전 강요 결합은 ‘전 연인 촬영물 이용 협박 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 협박·정황 정리 ② 촬영물 이용 입증 ③ 협박 해당성 ④ 신고·유포 차단 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전 연인 영상 유포 협박 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 협박·촬영물 이용·협박 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 협박·정황 정리</strong> — 협박 메시지·통화·재회·금전 요구·유포 암시 정리.</li>\n<li><strong>② 촬영물 이용 입증</strong> — 촬영물·복제물을 방편으로 삼은 해악 고지 정황 검토.</li>\n<li><strong>③ 협박 해당성</strong> — 공포심을 일으킬 해악 고지인지 검토.</li>\n<li><strong>④ 신고·유포 차단</strong> — 성폭력 신고·고소와 삭제·차단 지원 요청.</li>\n<li><strong>⑤ 보호·지원</strong> — 디지털성범죄피해자지원센터·해바라기센터·1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 촬영 당시 동의가 있었는지가 아니라, 그 영상을 유포하겠다며 공포심을 일으킬 해악을 고지했는지가 판단의 분기점입니다. 협박 메시지·통화 녹음과 유포 암시, 재회·금전 요구 정황을 캡처·보존하고, 삭제·차단을 위해 신속히 지원기관에 연계하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 협박·정황 자료 보존 (즉시)</strong> — 협박 메시지·통화 녹음·유포 암시·재회·금전 요구를 캡처 보존.</li>\n<li><strong>2단계 — 촬영물·유포 정황 확인 (즉시)</strong> — 어떤 영상·사진을 방편으로 삼았는지, 유포·게시 정황이 있는지 확인.</li>\n<li><strong>3단계 — 삭제·차단 지원 연계 (병행)</strong> — 디지털성범죄피해자지원센터에 삭제·유포 차단 지원을 요청.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 접근금지·피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전 연인 영상 유포 협박 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 협박·촬영물·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>협박 메시지·통화 녹음 캡처 (협박 정황)</strong></li>\n<li><strong>유포 암시·게시 예고 화면 (해악 고지)</strong></li>\n<li><strong>재회·금전 요구 대화 (강요 정황)</strong></li>\n<li><strong>대상 영상·사진 특정 정보 (촬영물 이용)</strong></li>\n<li><strong>상대 계정·연락처·인적사항 정보</strong></li>\n<li><strong>실제 유포·전송 정황·URL 기록</strong></li>\n<li><strong>디지털성범죄피해자지원센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협박 메시지·통화 녹음과 유포 예고·재회·금전 요구를 시간순으로 캡처해 어떤 영상을 방편으로 삼아 해악을 고지했는지 정리하면 촬영물 이용 협박을 다투는 데 도움이 됩니다. 촬영물을 직접 보여주지 않았더라도 유포를 암시하며 겁을 준 정황을 함께 확보하고, 실제 유포가 있었다면 게시 URL·전송 화면을 신속히 보존해 삭제·차단 지원과 신고에 대비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>협박 해당성</strong> — 유포 예고가 공포심을 일으킬 해악 고지였는지.</li>\n<li><strong>촬영물 이용</strong> — 촬영물·복제물을 방편으로 삼았는지.</li>\n<li><strong>제시·소지 불요</strong> — 직접 제시·소지 없이도 협박이 되는지.</li>\n<li><strong>강요 목적</strong> — 재회·금전 등 요구가 결합했는지.</li>\n<li><strong>상대 특정</strong> — 계정·연락처로 상대를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (삭제·유포 차단 지원)</strong></li>\n<li><strong>여성긴급전화 1366·해바라기센터 (24시간 상담·지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촬영물 등을 이용한 협박의 성립',
        summary:
          '대법원 2023도17896(대법원, 2024.05.30 선고) 영역에서 법원은 성폭력처벌법 제14조의3 제1항의 ‘촬영물 등을 이용하여’란 성적 욕망·수치심을 유발할 수 있는 촬영물 또는 복제물을 인식하고 이를 방편·수단으로 삼아 협박행위에 나아가는 것을 의미한다고 보았습니다. 그러면서 협박이란 사람으로 하여금 공포심을 일으킬 수 있을 정도의 해악을 고지하는 것으로 그 방법에 제한이 없어 태도나 거동에 의하는 경우도 포함되고, 실제로 만들어진 바 있는 촬영물 등을 방편·수단으로 삼아 유포 가능성 등 공포심을 일으킬 정도의 해악을 고지한 이상 그 죄가 성립하며, 반드시 촬영물을 피해자에게 직접 제시하거나 협박 당시 이를 소지·유포할 수 있는 상태여야 하는 것은 아니라고 판시했습니다. 전 연인이 성적 영상을 빌미로 유포를 암시하며 재회·금전을 요구한 사안을 살펴볼 때에도, 촬영물을 방편으로 삼은 해악 고지가 있었는지를 기준으로 협박 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '촬영물 이용 + 유포 해악 고지 + 재회·금전 강요 결합 시 전 연인 촬영물 이용 협박 해당성 검토 영역 — 지원기관 연계·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '촬영할 때 동의했는데도 협박이 되나요?',
        answer:
          '<strong>촬영 동의와 유포 협박은 별개로 다뤄지는 영역입니다.</strong> 유포 예고·해악 고지 메시지를 보존하세요.',
      },
      {
        question: '영상을 직접 보여주지 않았는데도 협박인가요?',
        answer:
          '<strong>직접 제시·소지 없이도 협박이 성립할 수 있는 영역입니다.</strong> 유포를 암시하며 겁을 준 대화를 확보하세요.',
      },
      {
        question: '가지고만 있겠다며 장난이라는데요?',
        answer:
          '<strong>유포 암시가 공포심을 일으켰는지가 핵심인 영역입니다.</strong> 반복된 암시·요구와 심리적 압박 정황을 정리하세요.',
      },
      {
        question: '신고하면 영상이 먼저 퍼질까 걱정돼요.',
        answer:
          '<strong>삭제·유포 차단 지원과 함께 대응하는 영역입니다.</strong> 디지털성범죄피해자지원센터에 먼저 연계하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·해바라기센터·1366에서 지원받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '촬영물 이용 협박(섹스토션) 대응', href: '/guide/sex-crime/sex-crime-sextortion-image-threat-track' },
      { label: '촬영물 유포 협박 대응', href: '/guide/sex-crime/sex-crime-filming-blackmail-threat-track' },
      { label: '동의 촬영물 사후 유포 대응', href: '/guide/sex-crime/sex-crime-consensual-footage-later-distribution-track' },
      { label: '딥페이크 지인 합성 대응', href: '/guide/sex-crime/sex-crime-deepfake-acquaintance-photo-track' },
    ],
  },

  // ─── 8. sex-crime-delivery-secondhand-app-obscene-image-message-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-delivery-secondhand-app-obscene-image-message-track',
    keyword: '배달앱 중고거래 연락처 음란 사진 전송 통신매체이용음란 신고',
    questionKeyword: '배달앱·중고거래 앱을 이용하다가 주문·거래 때문에 알게 된 제 휴대폰 번호로, 배달기사·판매자·구매자라는 사람이 갑자기 카톡·문자로 음란한 사진이나 성적인 메시지, 신체 노출 사진을 보내와 너무 불쾌하고 수치스러웠어요. 거래와 아무 상관없는 성적 표현을 반복해서 보내고 답을 안 하면 또 보내는데, 거래 상대라 번호가 노출된 상황이라 더 무섭고 찜찜해요. 상대는 ‘실수로 잘못 보냈다, 그냥 장난이었다’고 할 것 같아요. 이런 배달앱·중고거래로 알게 된 연락처로 온 음란 사진·메시지 전송을 신고하려면 어떤 기준으로 통신매체이용음란에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '연락처 음란 메시지 통신매체이용음란 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '배달·중고앱 음란 메시지 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '배달·중고거래로 알게 된 번호로 음란 사진·메시지가 와 불쾌하다면, 통신매체이용음란 해당성 판단과 증거 보존·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「배달앱이나 중고거래 앱을 이용하다가 주문·배송·거래 때문에 알게 된 휴대폰 번호로, 배달기사·판매자·구매자라는 사람이 갑자기 카카오톡·문자로 음란한 사진이나 성적인 메시지, 신체 노출 사진을 보내와 너무 불쾌하고 수치스러운 분의 상황입니다. 거래와는 아무 상관없는 성적 표현이나 사진을 반복해서 보내고, 답을 하지 않으면 또 보내거나 은근히 만남을 요구하기도 해, 단순히 기분 나쁜 정도를 넘어 성적 수치심과 불안에 시달리게 되는데, 하필 거래 상대라 이미 이름·주소·번호가 노출된 상황이라 ‘집을 아는데 어쩌지’ 싶어 더 무섭고 찜찜하실 거예요. 게다가 상대가 ‘실수로 잘못 보냈다, 그냥 장난이었다’고 둘러댈 것 같아 신고해도 처벌될지, 오히려 예민한 사람 취급을 받을까 봐 망설이며 혼자 참다 더 답답하셨을 거예요. 성적 수치심·혐오감을 일으키는 사진·글을 정보통신망을 통해 상대에게 도달하게 한 것이라면, 통신매체이용음란으로 볼 여지가 있습니다.」 성폭력처벌법 제13조는 자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적으로 전화·우편·컴퓨터나 그 밖의 통신매체를 통하여 성적 수치심이나 혐오감을 일으키는 말·글·사진·영상 등을 상대방에게 도달하게 한 경우를 처벌하는 영역입니다. 판례는 수사기관이 휴대전화 등 정보저장매체와 그 안의 전자정보를 확보할 때 압수의 대상과 범위를 명확히 하여 적법절차를 준수해야 하고 관련 있는 자료가 적법하게 확보되어야 함을 밝힌 사례 흐름이 있는 영역으로, 음란 메시지·사진 등 디지털 증거를 적법하게 보존·정리해두는 것이 대응의 출발점이 됩니다. 통신매체 전송 + 성적 수치심 유발 + 반복·거래관계 이용 결합은 ‘통신매체이용음란 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 전송·정황 정리 ② 매체 이용 입증 ③ 해당성 검토 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배달·중고앱 음란 메시지 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 전송·매체 이용·해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전송·정황 정리</strong> — 음란 사진·메시지 내용·시각·반복 횟수·거래 경위 정리.</li>\n<li><strong>② 매체 이용 입증</strong> — 카톡·문자 등 통신매체로 도달하게 한 정황 검토.</li>\n<li><strong>③ 해당성 검토</strong> — 성적 수치심·혐오감을 일으키는 표현이었는지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력·통신매체이용음란 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실수·장난이라는 해명과 달리, 성적 수치심·혐오감을 일으키는 사진·글을 통신매체를 통해 상대에게 도달하게 했는지가 판단의 분기점입니다. 전송된 사진·메시지 원본과 발신 번호·계정, 반복 전송·거래관계 이용 정황을 삭제 전에 캡처·보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전송·정황 자료 보존 (즉시)</strong> — 음란 사진·메시지 원본과 발신 번호·계정·시각·반복 정황을 캡처 보존.</li>\n<li><strong>2단계 — 거래·연결 경위 확인 (즉시)</strong> — 배달·중고거래로 번호가 노출된 경위와 주문·거래 내역을 확보.</li>\n<li><strong>3단계 — 차단·안전 조치 (병행)</strong> — 발신 차단과 앱 신고, 개인정보 노출 최소화 조치를 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰·사이버범죄 신고 ECRM에 통신매체이용음란 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달·중고앱 음란 메시지 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 전송·매체·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>음란 사진·메시지 원본 캡처 (전송 내용)</strong></li>\n<li><strong>발신 번호·계정·프로필 정보 (상대 특정)</strong></li>\n<li><strong>전송 시각·반복 횟수 정리 (반복 정황)</strong></li>\n<li><strong>배달·중고거래 주문·거래 내역 (연결 경위)</strong></li>\n<li><strong>답하지 않아도 계속 보낸 정황 기록</strong></li>\n<li><strong>차단·앱 신고 접수 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음란 사진·메시지 원본과 발신 번호·계정을 삭제하지 말고 캡처·보존하고, 전송 시각과 반복 횟수를 정리하면 성적 수치심·혐오감을 일으키는 표현을 통신매체로 도달하게 한 점을 다투는 데 도움이 됩니다. 배달·중고거래로 번호가 노출된 경위와 주문·거래 내역을 함께 확보하면 상대를 특정하고 거래관계를 악용한 정황을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>성적 수치심 유발</strong> — 전송 표현이 성적 수치심·혐오감을 일으켰는지.</li>\n<li><strong>통신매체 이용</strong> — 카톡·문자 등으로 도달하게 했는지.</li>\n<li><strong>목적</strong> — 성적 욕망 유발·만족 목적이 인정되는지.</li>\n<li><strong>실수·장난 해명</strong> — 반복 전송이 우연·장난으로 설명되는지.</li>\n<li><strong>상대 특정</strong> — 번호·계정·거래 내역으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 디지털 증거의 적법한 확보',
        summary:
          '대법원 2020도2550(대법원, 2023.06.01 선고) 영역에서 법원은 사법경찰관이 임의제출된 증거물을 압수한 경우 압수경위 등을 구체적으로 기재한 압수조서를 작성하도록 한 관련 규정의 취지와, 수사기관이 전자정보를 담은 매체를 임의제출받아 압수하면서 무엇을 제출하는지 명확히 확인하지 않은 경우 임의제출의 동기가 된 범죄혐의사실과 관련되고 이를 증명할 수 있는 최소한의 가치가 있는 정보가 압수의 대상이 된다고 보았습니다. 그러면서 범행 동기와 경위, 수단과 방법, 시간과 장소에 관한 간접·정황증거로 사용될 수 있는 정보도 그에 포함될 수 있다고 판시했습니다. 배달·중고거래로 알게 된 번호로 음란 사진·메시지를 받은 사안을 살펴볼 때에도, 전송된 사진·메시지와 발신 정보 등 디지털 증거를 삭제하지 않고 적법하게 보존·정리하는 것이 신고와 판단의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '통신매체 전송 + 성적 수치심 유발 + 반복·거래관계 이용 결합 시 통신매체이용음란 해당성 검토 영역 — 증거 보존·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '한 번 보낸 것도 통신매체이용음란이 되나요?',
        answer:
          '<strong>표현이 성적 수치심·혐오감을 일으켰는지가 핵심인 영역입니다.</strong> 전송 내용과 성적 표현 정도를 정리하세요.',
      },
      {
        question: '실수로 잘못 보냈다는데도 신고되나요?',
        answer:
          '<strong>반복 전송·거래관계 이용 정황이 단서인 영역입니다.</strong> 반복 횟수와 답하지 않아도 계속 보낸 정황을 확보하세요.',
      },
      {
        question: '이미 캡처했는데 원본을 지워도 되나요?',
        answer:
          '<strong>원본과 발신 정보를 그대로 보존하는 것이 중요한 영역입니다.</strong> 메시지·사진을 지우지 말고 그대로 두세요.',
      },
      {
        question: '거래 상대라 번호를 아는데 위험하지 않나요?',
        answer:
          '<strong>차단·앱 신고와 안전 조치를 병행하는 영역입니다.</strong> 발신 차단과 개인정보 노출 최소화를 함께 진행하세요.',
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
      { label: 'SNS 통신매체이용음란 대응', href: '/guide/sex-crime/sex-crime-sns-message-cyber-obscenity-track' },
      { label: '통신매체이용음란 메시지 대응', href: '/guide/sex-crime/sex-crime-telecom-obscene-message-track' },
      { label: '모르는 번호 음란전화 대응', href: '/guide/sex-crime/sex-crime-unknown-number-phone-obscene-words-telecom-track' },
      { label: '화상 수업 음란행위 노출 대응', href: '/guide/sex-crime/sex-crime-online-video-tutoring-indecent-exposure-track' },
    ],
  },

  // ─── 9. sex-crime-workplace-restroom-changing-hidden-camera-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-workplace-restroom-changing-hidden-camera-track',
    keyword: '회사 화장실 탈의실 몰래카메라 불법촬영 신고',
    questionKeyword: '회사 화장실·탈의실·샤워실에서 옷을 갈아입거나 볼일을 보다가, 환풍구·선반·콘센트·옷걸이 같은 곳에 숨겨진 초소형 카메라나 이상한 렌즈·구멍을 발견해 소름이 끼치고 수치스러웠어요. 누군가 몰래카메라를 설치해 직원들의 신체를 불법촬영한 것 같은데, 이미 촬영·유포됐을까 봐 두렵고 직장이라 누구 짓인지, 어떻게 신고해야 할지 막막해요. 회사에 알리면 조용히 덮으려 하거나 오히려 저를 곤란하게 할까 봐 걱정도 돼요. 이런 회사 화장실·탈의실 몰래카메라 불법촬영을 발견했을 때 어떤 기준으로 성폭력처벌법 위반에 해당하는지, 증거를 어떻게 보존하고 어떤 절차로 신고해 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '직장 내 몰래카메라 불법촬영 신고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 탈의실 몰래카메라 신고 — 5단계 대응 점검 | 로앤가이드',
      description:
        '회사 화장실·탈의실에서 몰래카메라를 발견해 두렵다면, 불법촬영 해당성 판단과 현장 보존·신고·유포 차단까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 화장실·탈의실·샤워실에서 옷을 갈아입거나 볼일을 보다가, 환풍구·선반·콘센트·옷걸이·시계 같은 곳에 숨겨진 초소형 카메라나 이상한 렌즈·구멍·배선을 발견해 소름이 끼치고 수치스러웠던 분의 상황입니다. 매일 아무 의심 없이 드나들던 공간에서 누군가 몰래카메라를 설치해 직원들의 신체를 불법촬영해 온 것 같다는 사실을 알게 되면, 이미 내 모습이 촬영·저장·유포됐을까 봐 극심한 불안과 수치심에 시달리게 되는데, 하필 직장이라 누가 설치했는지, 동료인지 외부인인지도 모른 채 어떻게 신고하고 무엇부터 해야 할지 몰라 막막하실 거예요. 게다가 회사에 알리면 이미지·소문을 걱정해 조용히 덮으려 하거나, 오히려 문제 제기한 사람을 곤란하게 만들지 않을까 하는 걱정에 이러지도 저러지도 못한 채 혼자 견디다 더 답답하셨을 거예요. 카메라나 이와 유사한 기능을 갖춘 기계장치를 이용해 성적 욕망·수치심을 유발할 수 있는 신체를 의사에 반하여 촬영한 것이라면, 불법촬영으로 볼 여지가 있습니다.」 성폭력처벌법 제14조는 카메라나 그 밖에 이와 유사한 기능을 갖춘 기계장치를 이용하여 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 그 의사에 반하여 촬영하거나, 그 촬영물을 반포·판매·제공·전시·상영한 경우를 처벌하는 영역입니다. 판례는 카메라의 기능과 정보저장매체의 기능을 함께 갖춘 휴대전화 등을 이용한 불법촬영 범죄에서 그 안에 저장된 같은 유형의 전자정보에서 발견되는 간접·정황증거가 범죄혐의사실과 구체적·개별적 연관관계가 인정될 수 있다고 본 사례 흐름이 있는 영역으로, 촬영 기기·영상 등 증거를 적법하게 확보해두는 것이 대응의 출발점이 됩니다. 촬영 기기 설치 + 신체 불법촬영 + 유포 우려 결합은 ‘직장 내 불법촬영 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 현장·기기 보존 ② 촬영·유포 확인 ③ 해당성 검토 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회사 화장실 몰래카메라 불법촬영 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·촬영 확인·해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장·기기 보존</strong> — 발견 위치·기기·렌즈·배선을 원상태로 촬영·기록.</li>\n<li><strong>② 촬영·유포 확인</strong> — 저장매체·영상·전송·유포 정황 확인.</li>\n<li><strong>③ 해당성 검토</strong> — 의사에 반한 신체 불법촬영인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 경찰 신고·고소와 현장 감식·기기 확보 협조.</li>\n<li><strong>⑤ 보호·지원</strong> — 디지털성범죄피해자지원센터·해바라기센터·1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카메라·유사 기계장치로 성적 수치심을 유발할 수 있는 신체를 의사에 반하여 촬영했는지가 판단의 분기점입니다. 발견한 기기를 함부로 만지거나 없애지 말고 위치·형태를 원상태로 기록한 뒤, 즉시 경찰에 신고해 현장 감식과 저장매체 확보가 이뤄지도록 하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·기기 보존 (즉시)</strong> — 발견 위치·기기·렌즈·배선을 원상태로 촬영·기록하고 훼손을 피함.</li>\n<li><strong>2단계 — 즉시 신고·현장 감식 (즉시)</strong> — 112 신고 후 경찰의 현장 감식과 카메라·저장매체 확보에 협조.</li>\n<li><strong>3단계 — 촬영·유포 확인 (병행)</strong> — 저장매체·영상·전송·유포 정황을 경찰과 함께 확인.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰·사이버범죄 신고 ECRM에 불법촬영 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 삭제·피해 회복 (조사 단계)</strong> — 디지털성범죄피해자지원센터의 삭제·유포 차단 지원과 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회사 화장실 몰래카메라 불법촬영 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장·촬영·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>발견 위치·기기·렌즈·배선 원상태 사진 (현장 보존)</strong></li>\n<li><strong>발견 일시·경위·목격자 기록 (발견 정황)</strong></li>\n<li><strong>카메라·저장매체 확보 협조 자료 (촬영 입증)</strong></li>\n<li><strong>영상·전송·유포 정황 기록 (유포 확인)</strong></li>\n<li><strong>공간 이용·출입 기록 (피해 범위)</strong></li>\n<li><strong>회사 보고·CCTV 보존 요청 자료</strong></li>\n<li><strong>디지털성범죄피해자지원센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발견한 카메라나 렌즈를 함부로 뽑거나 없애지 말고 위치·형태를 원상태 그대로 사진·영상으로 기록한 뒤 112에 신고해 현장 감식과 저장매체 확보가 이뤄지도록 하면 불법촬영을 다투는 데 도움이 됩니다. 발견 일시·경위와 공간 출입 기록, 이미 촬영·전송된 정황을 함께 확보하고 삭제·유포 차단 지원에 연계하면 피해 확산을 막고 상대를 특정하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>불법촬영 해당성</strong> — 의사에 반한 신체 촬영이었는지.</li>\n<li><strong>기기·촬영 입증</strong> — 카메라·저장매체에 촬영 정황이 남았는지.</li>\n<li><strong>설치·관리 주체</strong> — 누가 설치·관리했는지 특정할 수 있는지.</li>\n<li><strong>유포 여부</strong> — 촬영물이 전송·유포됐는지.</li>\n<li><strong>현장 보존</strong> — 기기·현장이 훼손 없이 보존됐는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (삭제·유포 차단 지원)</strong></li>\n<li><strong>여성긴급전화 1366·해바라기센터 (24시간 상담·지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 불법촬영 범죄와 관련 증거의 확보',
        summary:
          '대법원 2019도4938(대법원, 2022.02.17 선고) 영역에서 법원은 수사기관이 전자정보를 담은 매체를 피의자로부터 임의제출받아 압수하면서 무엇을 제출하는지 명확히 확인하지 않은 경우 임의제출의 동기가 된 범죄혐의사실과 관련되고 이를 증명할 수 있는 최소한의 가치가 있는 정보가 압수의 대상이 되고, 카메라의 기능과 정보저장매체의 기능을 함께 갖춘 휴대전화를 이용한 불법촬영 범죄와 같이 그 안에 저장된 같은 유형의 전자정보에서 발견되는 간접·정황증거는 범죄혐의사실과 구체적·개별적 연관관계가 인정될 수 있다고 판시했습니다. 그러면서 그러한 전자정보를 확보하는 과정에서 참여의 기회 보장과 압수 목록 교부 등 적법절차가 지켜져야 함을 밝혔습니다. 회사 화장실·탈의실에서 몰래카메라를 발견한 사안을 살펴볼 때에도, 카메라·저장매체와 촬영·유포 정황 등 증거를 적법하게 확보하는 것이 신고와 판단의 출발점이 됨을 검토해볼 수 있습니다.',
        takeaway: '촬영 기기 설치 + 신체 불법촬영 + 유포 우려 결합 시 직장 내 불법촬영 해당성 검토 영역 — 현장 보존·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '카메라만 발견하고 영상은 못 봤는데 신고되나요?',
        answer:
          '<strong>기기·저장매체에서 촬영 정황을 확인하는 영역입니다.</strong> 기기를 원상태로 두고 즉시 경찰에 신고하세요.',
      },
      {
        question: '카메라를 뽑아서 가지고 있어도 되나요?',
        answer:
          '<strong>현장·기기 보존이 중요한 영역입니다.</strong> 함부로 만지지 말고 위치·형태를 기록한 뒤 경찰 감식에 맡기세요.',
      },
      {
        question: '누가 설치했는지 모르는데 어떻게 하나요?',
        answer:
          '<strong>현장 감식·출입 기록으로 설치 주체를 특정하는 영역입니다.</strong> 공간 출입·CCTV 보존을 함께 요청하세요.',
      },
      {
        question: '이미 유포됐을까 봐 두려워요.',
        answer:
          '<strong>삭제·유포 차단 지원과 병행하는 영역입니다.</strong> 디지털성범죄피해자지원센터에 삭제 지원을 요청하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·해바라기센터·1366에서 지원받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '공중화장실 몰래카메라 대응', href: '/guide/sex-crime/sex-crime-public-restroom-hidden-camera-track' },
      { label: '탈의실 몰래카메라 대응', href: '/guide/sex-crime/sex-crime-fitting-room-hidden-camera-track' },
      { label: '탈의실 불법촬영 대응', href: '/guide/sex-crime/sex-crime-changing-room-illegal-filming-track' },
      { label: '숙박업소 몰래카메라 대응', href: '/guide/sex-crime/sex-crime-lodging-hidden-cam-track' },
    ],
  },

  // ─── 10. sex-crime-fitness-trainer-posture-correction-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-fitness-trainer-posture-correction-falsely-accused-defense',
    keyword: 'PT 트레이너 자세 교정 접촉 추행 무고 방어',
    questionKeyword: '헬스장·PT 트레이너로 일하며 회원의 운동 자세를 교정하고 동작을 잡아주는 과정에서 어깨·허리·골반 등에 손을 대 지도했는데, 회원이 ‘자세 교정을 빙자해 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소했어요. 저는 부상 방지와 정확한 자세를 위해 지도상 필요한 범위에서 접촉했을 뿐 추행할 의도가 전혀 없었는데, 신체 접촉이 있었다는 이유만으로 성추행 가해자로 몰려 너무 억울해요. 수업은 예약·기록으로 남아 있고 다른 회원·CCTV도 있는데, 상대 진술은 시점마다 달라지고 접촉 경위 설명도 애매해요. 이렇게 PT 자세 교정 접촉이 추행으로 고소된 상황에서 추행의 고의가 없었다는 점과 지도 필요성·진술의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: 'PT 자세 교정 접촉 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: 'PT 트레이너 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        'PT 자세 교정 중 지도상 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 지도 필요성·진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·PT 트레이너로 일하며 회원의 운동 자세를 교정하고 동작을 잡아주는 과정에서, 부상 방지와 정확한 자세를 위해 어깨·허리·골반·다리 등에 손을 대 지도했는데, 회원이 ‘자세 교정을 빙자해 몸을 만졌다, 추행당했다’며 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 트레이너 입장에서는 스쿼트·데드리프트 같은 동작에서 부상을 막고 정확한 자세를 잡아주려면 신체 접촉이 어느 정도 불가피하고, 지도상 필요한 범위에서 접촉했을 뿐 추행할 의도가 전혀 없었는데, 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 수업은 예약·결제·출결로 남아 있고 다른 회원이나 CCTV도 있는데, 접촉이 있었다는 이유만으로 ‘의도적으로 만졌다’는 주장에 휘말리기 쉽고, 상대의 진술마저 시점·내용에 따라 달라지거나 접촉 경위 설명이 애매하다면 더 답답하셨을 거예요. 혐의를 받고 있다면, 어떤 동작을 지도하며 어느 부위를 왜 접촉했는지와 지도상 필요성, 수업 경위, 다른 회원·CCTV 정황을 차분히 정리해 추행의 고의가 없었고 지도에 필요한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 접촉 경위가 신고되었다면 그 경위와 상대 진술의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 형사절차에서 위법하게 수집된 증거는 증거능력이 부정될 수 있고 적법한 절차에 따른 증거로 사실을 판단하여야 한다는 취지를 밝힌 사례 흐름이 있는 영역으로, 접촉이 지도 목적인지 추행의 고의에 의한 것인지와 상대 진술·증거의 신빙성을 종합해 가려 다툴 여지가 있는 영역입니다. 지도 접촉 + 지도 필요성·수업 경위 + 고의 부인·진술 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·지도 정리 ② 접촉 부위·필요성 ③ 고의 부재 검토 ④ 진술·증거 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PT 자세 교정 접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·지도 필요성·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·지도 정리</strong> — 수업 종목·동작·지도 경위·예약·출결 정리.</li>\n<li><strong>② 접촉 부위·필요성</strong> — 지도한 동작과 접촉 부위·방식·필요성 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 지도 목적·경위 등 간접사실 검토.</li>\n<li><strong>④ 진술·증거 신빙성</strong> — 상대 진술의 일관성과 접촉 경위 설명의 신빙성 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — CCTV·다른 회원 진술이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신체 접촉이 있었다는 사실이 아니라, 추행할 고의로 접촉했는지 아니면 지도에 필요한 접촉이었는지가 판단의 분기점입니다. 지도한 동작과 접촉 부위·필요성, 수업 예약·출결·CCTV, 다른 회원 진술, 상대 진술의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·지도 자료 보존 (즉시)</strong> — 수업 종목·동작·지도 경위와 예약·결제·출결을 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 부위·필요성 정리 (즉시)</strong> — 지도한 동작과 접촉 부위·방식·필요성, 헬스장·PT룸 CCTV를 정리.</li>\n<li><strong>3단계 — 진술·증거 신빙성 검토 (병행)</strong> — 상대 진술의 일관성·변동과 접촉 경위 설명, 다른 회원 진술을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PT 자세 교정 접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>수업 종목·동작·지도 경위 정리 (경위)</strong></li>\n<li><strong>예약·결제·출결 내역 (수업 입증)</strong></li>\n<li><strong>헬스장·PT룸 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>지도한 동작·접촉 부위·필요성 정리 (접촉 경위)</strong></li>\n<li><strong>다른 회원·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술·접촉 경위 설명 변동 정리 (신빙성 검토)</strong></li>\n<li><strong>고소장·조사 일정·진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어떤 동작을 지도하며 부상 방지·자세 교정을 위해 어느 부위를 왜 접촉했는지 지도 필요성 관점에서 구체적으로 정리하면 접촉이 추행의 고의에 의한 것인지, 지도에 필요한 접촉인지를 다투는 데 도움이 됩니다. 헬스장·PT룸 CCTV와 예약·출결 기록, 다른 회원 진술을 확보하고 상대 진술이 시점·내용에 따라 달라지는 부분을 함께 정리해 고의 부재와 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>지도 필요성</strong> — 부상 방지·자세 교정에 필요한 접촉이었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>접촉 경위</strong> — 접촉 부위·방식이 지도 범위를 벗어났는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 적법절차와 증거능력, 그리고 개별적 판단',
        summary:
          '대법원 2016도348(대법원, 2021.11.18 선고) 영역에서 법원은 수사기관이 정보저장매체와 거기에 저장된 전자정보를 임의제출의 방식으로 압수할 때 임의제출자의 의사에 따른 압수의 대상과 범위가 명확하지 않거나 이를 알 수 없는 경우 임의제출에 따른 압수의 동기가 된 범죄혐의사실과 관련되고 이를 증명할 수 있는 최소한의 가치가 있는 전자정보에 한하여 압수의 대상이 된다고 보았습니다. 그러면서 피의자가 소유·관리하는 정보저장매체를 제3자가 임의제출하는 경우 그 관련성이 있는 전자정보에 한하여 더욱 제한적으로 압수의 대상이 된다고 판시해, 적법한 절차에 따라 관련성 있는 증거만이 유죄의 자료가 될 수 있음을 밝혔습니다. PT 자세 교정 중 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 지도 필요성과 접촉 경위, CCTV·진술 등 증거의 적법성과 신빙성을 종합해 추행의 고의가 증명되었는지를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '지도 접촉 + 지도 필요성·수업 경위 + 고의 부인·진술 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '지도하다 몸에 손이 닿았는데 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 지도한 동작과 접촉 부위·필요성을 구체적으로 정리하세요.',
      },
      {
        question: '자세 교정에 필요한 접촉이었다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>동작별 지도 필요성이 고의를 배척하는 사정이 되는 영역입니다.</strong> 종목·동작과 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> CCTV·출결·다른 회원 진술을 모으세요.',
      },
      {
        question: 'CCTV가 있는데 도움이 되나요?',
        answer:
          '<strong>객관 정황으로 접촉 경위를 다투는 데 유리한 영역입니다.</strong> 헬스장·PT룸 CCTV 보존을 신속히 요청하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>지도 경위·접촉 필요성에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '운전연수 신체접촉 추행 무고 방어', href: '/guide/sex-crime/sex-crime-driving-lesson-touch-defense-track' },
      { label: '사진 촬영 포즈 지도 추행 무고 방어', href: '/guide/sex-crime/sex-crime-photo-shoot-posing-guidance-falsely-accused-defense' },
      { label: '마사지샵 손님 추행 무고 방어', href: '/guide/sex-crime/sex-crime-massage-shop-customer-falsely-accused-defense' },
      { label: '진료 검진 빙자 추행 무고 방어', href: '/guide/sex-crime/sex-crime-medical-exam-falsely-accused-defense' },
    ],
  },
];
