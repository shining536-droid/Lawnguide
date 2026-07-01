import { SpokePage } from '../spoke-pages';

// batch115 fraud(6) + sex-crime(4) — 10개 (2026-07-02)
//
// 고유 존재 이유:
// 1. fraud-secondhand-luxury-watch-fake-authenticity-track — 일반 중고거래 분쟁과 분기. '중고 명품 시계를 진품이라 속여 판' 진품 위장 기망 편취 판단형 트랙(victim).
// 2. fraud-overseas-job-placement-fee-embezzle-track — 일반 취업 분쟁과 분기. '해외 취업을 알선해준다며 수수료만 받고 편취' 알선 수수료 편취 절차형 트랙(victim).
// 3. fraud-wedding-hall-prepaid-cancellation-refusal-track — 일반 환불 분쟁과 분기. '예식장을 선결제받고 취소·환불을 거부' 선결제 환불 거부 기망 판단형 트랙(victim).
// 4. fraud-p2p-loan-platform-principal-nonpayment-track — 일반 투자 분쟁과 분기. 'P2P 대출 플랫폼이 원금을 상환하지 않고 잠적' 원금 미상환 편취 절차형 트랙(victim).
// 5. fraud-nft-artwork-fake-project-lure-track — 일반 투자 분쟁과 분기. '허위 NFT 미술품 프로젝트로 투자를 유인해 편취' 허위 프로젝트 유인 판단형 트랙(victim).
// 6. fraud-investment-return-delay-intent-falsely-accused-defense — 일반 사기 무고류와 분기. '투자금 회수 지연이 사기 고의로 고소됨' 편취 고의·민사 채무불이행 구별 방어 판단형 트랙(accused).
// 7. sex-crime-company-dinner-forced-touch-report-track — 일반 추행류와 분기. '회식 자리에서 신체를 강제로 추행' 강제추행 폭행·협박 해당성 판단형 트랙(victim).
// 8. sex-crime-academy-shuttle-bus-touch-report-track — 일반 추행류와 분기. '학원 셔틀버스에서 신체를 추행' 셔틀버스 추행 신고 절차형 트랙(victim).
// 9. sex-crime-massage-shop-improper-touch-report-track — 일반 추행류와 분기. '마사지샵에서 부당하게 신체를 추행' 기습추행 해당성 판단형 트랙(victim).
// 10. sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '축제 인파 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch115FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-secondhand-luxury-watch-fake-authenticity-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-watch-fake-authenticity-track',
    keyword: '중고 명품 시계 가짜 진품 속임 기망 사기',
    questionKeyword: '중고 거래 플랫폼·명품 커뮤니티에서 롤렉스·오메가 같은 명품 시계를 사면서 판매자가 ‘정품 보증서·박스까지 다 있는 진품이다, 백화점 정품이 확실하니 믿어도 된다’고 해서 적지 않은 돈을 주고 샀어요. 그런데 막상 받아 정식 서비스센터·감정원에 진품 감정을 맡기니 가품·부품 짜깁기 시계였고, 판매자가 보여준 보증서·사진도 위조된 것이었어요. 진품 시세를 그대로 치렀는데 가짜를 받은 셈이고, 판매자에게 따지니 ‘나도 진품인 줄 알았다, 환불은 안 된다’며 발뺌하다 연락을 끊었어요. 처음부터 가품인 걸 알면서 진품이라 속여 판 정황인데, 이런 중고 명품 시계 가짜 진품 속임을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 명품 시계 진품 위장·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 시계 가짜 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라는 말을 믿고 산 중고 명품 시계가 가품으로 드러나고 환불도 거부당해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·명품 커뮤니티·중고 시계 매매상에서 롤렉스·오메가·까르띠에 같은 명품 시계를 사면서 판매자에게서 ‘정품 보증서·정품 박스·구입 영수증까지 다 있는 진품이다, 백화점·정식 매장에서 산 것이라 진품이 확실하니 믿고 사도 된다’는 말을 믿고, 진품이라면 이 정도 값은 당연하다는 생각으로 적지 않은 대금을 주고 시계를 받은 분의 상황입니다. 그런데 막상 물건을 받아 정식 서비스센터·명품 감정원에 진품 감정을 맡겨보니, 겉보기와 달리 가품이거나 진품 케이스에 다른 부품을 섞은 짜깁기 시계였고, 거래 전 판매자가 보여준 보증서·정품 사진마저 정교하게 위조·도용된 것이어서, 진품 시세를 그대로 치르고도 가짜 시계를 손에 쥐게 되어 막막하실 거예요. 판매자에게 감정 결과를 들이대며 따지니 ‘나도 진품인 줄 알고 팔았다, 거래가 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 비슷하게 가품을 진품처럼 여러 사람에게 판 정황까지 보이면 단순 거래 착오가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 가품인 사정을 알면서도 진품이라 적극적으로 속여 정품 값을 받은 정황이면 단순 하자 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품인 줄 알면서 위조 보증서·사진으로 진품이라 속여 진품 시세로 팔았다면 적극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 상당한 대가가 지급되었더라도 편취액은 대가를 공제한 차액이 아니라 교부받은 금원 전부이고, 다만 특정경제범죄법을 적용할 때에는 편취 가액을 엄격·신중하게 산정해야 한다고 본 사례 흐름이 있는 영역으로, 지급한 대금 전부를 피해액으로 볼지와 가액 산정 기준을 가려 다툴 여지가 있습니다. 가품 인식 + 위조 보증서·사진 + 환불 거부·발뺌 결합은 ‘진품 위장 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 진품 감정·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 시계 가짜 진품 속임 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·감정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 진품 강조 대화·보증서·거래글·결제 내역 정리.</li>\n<li><strong>② 진품 감정·기망 입증</strong> — 서비스센터·감정원 감정으로 가품·위조 보증서 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 진품 시세로 지급한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자 다툼과 달리, 가품인 줄 알면서 위조 보증서·사진으로 진품이라 속였는지가 판단의 분기점입니다. 진품을 강조한 대화와 감정 결과, 위조 보증서·사진과 같은 판매자의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 진품 강조 대화·보증서·거래글·결제·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 진품 감정 확보 (즉시)</strong> — 정식 서비스센터·명품 감정원 감정서, 가품·위조 보증서 사진을 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 시계 가짜 진품 속임 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·감정·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>진품 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>시계 대금·송금·카드 결제 내역 (피해 금액)</strong></li>\n<li><strong>서비스센터·감정원 진품 감정서 (가품 입증)</strong></li>\n<li><strong>위조 보증서·정품 사진 대비 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정식 서비스센터·명품 감정원의 감정서로 가품·짜깁기 여부를 명확히 하고, 판매자가 보여준 보증서·정품 사진을 실제 감정 결과와 대비하면 진품 위장 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진품 여부</strong> — 감정 결과 실제로 가품·짜깁기인지.</li>\n<li><strong>가품 인식</strong> — 판매자가 가품인 줄 알면서 진품이라 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 진품 값을 노렸는지.</li>\n<li><strong>편취액</strong> — 대가가 일부 있어도 지급 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·가품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액 산정과 특정경제범죄법 적용 기준',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 바로 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 사기죄 성립에는 영향이 없으므로, 대가가 일부 지급된 경우에도 편취액은 대가를 공제한 차액이 아니라 교부받은 금원 전부이며 이는 특정경제범죄법 위반죄에서도 마찬가지라고 보았습니다. 다만 특정경제범죄법 위반죄는 편취한 재물·이익의 가액이 구성요건의 일부이고 가액에 따라 형벌이 가중되므로 가액을 엄격하고 신중하게 산정해 죄형균형·책임주의 원칙이 훼손되지 않도록 해야 하고, 그 이익의 가액을 구체적으로 산정할 수 없는 경우에는 같은 법 제3조를 적용할 수 없다고 판시했습니다. 가품을 진품처럼 속여 명품 시계 대금을 받은 사안을 살펴볼 때에도, 지급한 대금 전부를 편취액으로 볼지와 피해 규모를 어떻게 산정하는지를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '가품 인식 + 위조 보증서·사진 + 환불 거부·발뺌 결합 시 진품 위장 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 진품인 줄 알았다고 하는데도 사기인가요?',
        answer:
          '<strong>가품인 줄 알면서 진품이라 속였는지가 핵심인 영역입니다.</strong> 진품 강조 대화와 감정서를 함께 확보하세요.',
      },
      {
        question: '가품이라는 걸 어떻게 입증하나요?',
        answer:
          '<strong>정식 서비스센터·감정원 감정서가 핵심 단서인 영역입니다.</strong> 감정 결과와 위조 보증서를 대비해 정리하세요.',
      },
      {
        question: '진품 값을 다 냈는데 얼마를 피해로 보나요?',
        answer:
          '<strong>대가가 일부 있어도 지급 대금 전부를 편취액으로 다투는 영역입니다.</strong> 결제·송금 내역을 정리하세요.',
      },
      {
        question: '직거래 현금이라 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 감정서를 정리하세요.',
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
      { label: '중고 명품 시계 가품 바꿔치기 추적', href: '/guide/fraud/fraud-secondhand-luxury-watch-fake-swap-track' },
      { label: '중고 명품 가짜 보증서 잠적 추적', href: '/guide/fraud/fraud-secondhand-luxury-fake-guarantee-cert-vanish-track' },
      { label: '중고 명품 시계 위조품 추적', href: '/guide/fraud/fraud-secondhand-luxury-watch-counterfeit-track' },
      { label: '중고 카메라 렌즈 정품 위장 판매 추적', href: '/guide/fraud/fraud-secondhand-camera-lens-fake-genuine-sale-track' },
    ],
  },

  // ─── 2. fraud-overseas-job-placement-fee-embezzle-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-job-placement-fee-embezzle-track',
    keyword: '해외 취업 알선 수수료 편취 기망 사기',
    questionKeyword: '해외 취업 알선 업체·브로커가 ‘현지 회사에 확실한 자리가 있다, 수수료만 내면 비자·취업까지 다 처리해준다’고 해서 믿고 알선 수수료·비자 비용을 미리 송금했어요. 그런데 막상 시간이 지나도 채용은 진행되지 않고, 회사·자리가 실재하지 않거나 애초에 연결해줄 능력이 없었던 정황이었어요. 환불을 요구하니 ‘조금만 기다리라, 곧 된다’며 미루다 결국 연락을 끊고 잠적했고, 같은 업체에 수수료를 낸 다른 구직자들도 똑같이 취업도 환불도 못 받았어요. 이런 해외 취업 알선 수수료 편취를 사기로 신고하고 낸 수수료를 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '해외 취업 알선 수수료 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 취업 알선 수수료 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '확실한 해외 일자리라는 말을 믿고 알선 수수료를 냈는데 취업도 환불도 안 되고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 취업 알선 업체·유학·취업 브로커·SNS 에이전트가 ‘현지 대기업·공장·농장에 확실히 자리가 잡혀 있다, 수수료와 비자 비용만 먼저 내면 서류부터 비자·현지 취업까지 전부 처리해준다, 지금 자리가 몇 개 안 남았으니 서둘러야 한다’며 확실한 취업을 앞세운 권유를 믿고, 더 나은 조건의 일자리를 잡으려는 마음으로 적지 않은 알선 수수료·비자 비용을 미리 송금한 분의 상황입니다. 그런데 정작 돈을 보낸 뒤로는 채용 절차가 진행되지 않거나 계속 미뤄지고, 알고 보니 약속한 회사·일자리가 실재하지 않거나 애초에 그 자리에 연결해줄 능력·권한이 없었던 정황이어서, 취업은커녕 낸 돈만 묶이게 되어 막막하실 거예요. 환불·진행 상황을 물으면 ‘현지 사정으로 조금만 기다리라, 다음 주면 비자가 나온다, 곧 출국한다’며 차일피일 미루다, 끝내 연락처·사무실을 닫고 잠적해, 같은 업체에 수수료를 낸 다른 구직자들도 똑같이 취업도 환불도 받지 못했다면 단순 알선 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 취업을 성사시킬 의사나 능력 없이 수수료만 받아 챙긴 정황이면 단순 알선 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 취업을 성사시킬 의사·능력 없이 확실한 자리가 있는 것처럼 가장해 수수료를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 편취 범의는 자백이 없는 이상 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합하여 판단할 수밖에 없고, 그 범의는 미필적 고의로도 충분하다고 본 사례 흐름이 있는 영역으로, 수수료를 받을 당시의 이행 의사·능력을 가려 다툴 여지가 있습니다. 취업 성사 의사·능력 결여 + 확실한 자리 가장 + 미이행·잠적 결합은 ‘알선 수수료 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 알선·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 취업 알선 수수료 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·알선·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 확실한 자리 권유·수수료·비자 비용 송금 내역 정리.</li>\n<li><strong>② 알선·기망 입증</strong> — 약속한 회사·자리의 실재 여부와 알선 능력 결여 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 송금한 수수료·비자 비용 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 알선 지연과 달리, 취업을 성사시킬 의사·능력 없이 확실한 자리가 있는 것처럼 가장해 수수료를 받았는지가 판단의 분기점입니다. 약속한 회사·자리의 실재 여부와 진행 정황, 다른 구직자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 확실한 자리 권유·수수료·비자 비용 약정·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 알선·기망 입증 (즉시)</strong> — 회사·자리 실재 여부, 진행 중단·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 수수료 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 취업 알선 수수료 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·알선·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>확실한 자리 권유·약속 캡처 (거래 조건)</strong></li>\n<li><strong>알선 계약·약정·안내 자료 (계약 내용)</strong></li>\n<li><strong>수수료·비자 비용 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>약속한 회사·자리 실재 여부 확인 자료</strong></li>\n<li><strong>진행 중단·환불 요청·거부·잠적 대화 기록</strong></li>\n<li><strong>업체·브로커·에이전트·계좌 정보</strong></li>\n<li><strong>다른 구직자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 약속한 회사·일자리가 실재하는지, 업체가 그 자리에 연결해줄 능력·권한이 있었는지를 확인하고, 수수료 송금 시점과 진행 중단·잠적 시점의 흐름을 정리하면 취업 성사 의사 없이 수수료만 받았는지를 다투는 데 도움이 됩니다. 같은 업체에 수수료를 낸 다른 구직자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>알선 능력</strong> — 수수료를 받을 당시 취업을 성사시킬 의사·능력이 있었는지.</li>\n<li><strong>자리 실재</strong> — 약속한 회사·일자리가 실재했는지.</li>\n<li><strong>편취 범의</strong> — 단순 알선 실패인지 처음부터 수수료만 노렸는지.</li>\n<li><strong>편취액</strong> — 송금한 수수료·비자 비용이 피해액인지.</li>\n<li><strong>업체 특정</strong> — 브로커·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (취업 알선·수수료 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취 범의 판단 방법과 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후 피고인의 재력·환경·범행의 내용·거래의 이행과정 등과 같은 객관적인 사정 등을 종합하여 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 보았습니다. 특히 물품거래나 자금 융통 관계에서 편취에 의한 사기죄의 성립 여부는 거래 당시를 기준으로 피고인에게 대금·채무를 변제할 의사나 능력이 없음에도 변제할 것처럼 거짓말을 하여 재물 등을 편취할 고의가 있었는지에 따라 판단하여야 하며, 어음할인 등의 방법으로 금원을 교부받은 경우 지급기일에 결제되지 않으리라는 점을 예견하고도 이를 고지하지 않고 속여 할인을 받았다면 사기죄가 성립한다고 판시했습니다. 확실한 해외 일자리가 있는 것처럼 가장해 알선 수수료를 받은 사안을 살펴볼 때에도, 수수료를 받을 당시 취업을 성사시킬 의사와 능력이 있었는지를 기준으로 편취 범의를 가려 검토해볼 수 있습니다.',
        takeaway: '취업 성사 의사·능력 결여 + 확실한 자리 가장 + 미이행·잠적 결합 시 알선 수수료 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '취업이 안 된 것뿐인데도 사기인가요?',
        answer:
          '<strong>수수료를 받을 당시 성사 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 약속한 자리의 실재 여부를 확인하세요.',
      },
      {
        question: '회사·자리가 실재하지 않은 걸 어떻게 밝히나요?',
        answer:
          '<strong>약속한 회사·자리의 실재와 알선 능력이 단서인 영역입니다.</strong> 권유 대화와 진행 정황을 정리하세요.',
      },
      {
        question: '비자 비용까지 냈는데 다 피해로 보나요?',
        answer:
          '<strong>송금한 수수료·비자 비용 전부를 편취액으로 다투는 영역입니다.</strong> 송금·이체 내역을 정리하세요.',
      },
      {
        question: '해외 계좌·브로커라 신고가 되나요?',
        answer:
          '<strong>국내 송금·계좌·연락 자료로 신고를 검토할 수 있는 영역입니다.</strong> 계좌·대화·송금 자료를 모아 접수하세요.',
      },
      {
        question: '다른 구직자도 같이 못 받은 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·송금 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '허위 해외 취업 알선 수수료 추적', href: '/guide/fraud/fraud-overseas-job-placement-fee-nonexistent-track' },
      { label: '해외 취업 비자 수수료 미이행 추적', href: '/guide/fraud/fraud-overseas-job-placement-visa-fee-nondelivery-track' },
      { label: '헤드헌터 알선 수수료 잠적 추적', href: '/guide/fraud/fraud-job-headhunter-placement-fee-vanish-track' },
      { label: '해외 취업 브로커 수수료 잠적 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-broker-fee-vanish-track' },
    ],
  },

  // ─── 3. fraud-wedding-hall-prepaid-cancellation-refusal-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-prepaid-cancellation-refusal-track',
    keyword: '예식장 선결제 취소 환불 거부 기망 사기',
    questionKeyword: '예식장·웨딩홀 업체가 ‘지금 계약하면 크게 할인해준다, 사정이 생기면 언제든 취소·환불이 된다’고 해서 예식 비용·패키지 대금을 미리 선결제했는데, 막상 사정이 생겨 취소·환불을 요청하니 처음 설명과 전혀 다르게 ‘위약금이 대부분이라 환불이 안 된다, 규정상 못 준다’며 사실상 대부분을 돌려주지 않았어요. 알고 보니 계약 당시 안내와 실제 약관이 달랐고, 애초에 환불해줄 의사 없이 할인·환불 보장만 내세워 선결제를 받은 정황이에요. 이런 예식장 선결제 취소 환불 거부 기망을 사기로 신고하고 선결제한 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '예식장 선결제 환불 거부·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '예식장 선결제 환불 거부 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '언제든 환불된다는 말을 믿고 예식장을 선결제했는데 취소하니 환불을 거부당해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「예식장·웨딩홀·웨딩 패키지 업체에서 ‘지금 계약하면 대관료·식대를 크게 할인해준다, 혹시 날짜가 바뀌거나 사정이 생기면 언제든 취소·환불이 되니 부담 없이 먼저 잡으라’며 할인과 환불 보장을 앞세운 상담을 믿고, 좋은 날짜를 선점하려는 마음으로 적지 않은 예식 비용·패키지 대금을 미리 선결제한 분의 상황입니다. 그런데 막상 예식을 미루거나 취소해야 할 사정이 생겨 환불을 요청하니, 처음 상담과 전혀 다르게 ‘규정상 위약금이 대부분이라 돌려줄 것이 거의 없다, 이미 예약이 잡혀 환불 대상이 아니다’라며 선결제한 돈의 대부분을 돌려주지 않거나 과도한 위약금을 떼어, 언제든 환불된다던 약속을 믿고 낸 큰돈이 묶이게 되어 막막하실 거예요. 계약서를 다시 확인하려 해도 상담 때 들은 환불 조건과 실제 약관이 다르고, 알고 보니 같은 예식장과 계약한 다른 신랑·신부들도 똑같이 환불 보장을 믿었다가 거부당했다면 단순 위약금 다툼이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 환불해줄 의사 없이 할인·환불 보장만 미끼로 선결제를 받은 정황이면 단순 계약 분쟁으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 환불해줄 의사 없이 ‘언제든 환불’을 내세워 선결제를 받았다면 적극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 계약에 따른 대가 편취에 의한 사기죄에서 편취의 고의가 있었는지는 계약 당시를 기준으로 판단하여야 하고, 관련 행정법규나 절차 규정을 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정할 수 없으며 그 위반이 계약 이행에 본질적인지를 심리해야 한다고 본 사례 흐름이 있는 영역으로, 계약 당시의 환불 이행 의사를 가려 다툴 여지가 있습니다. 환불 의사 결여 + 환불 보장 상담 + 환불 거부·과다 위약금 결합은 ‘선결제 환불 거부 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 환불 거부·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 선결제 취소 환불 거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·환불 거부·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 할인·환불 보장 상담·계약·선결제 내역 정리.</li>\n<li><strong>② 환불 거부·기망</strong> — 상담과 다른 환불 거부 사유·환불 이행 의사 결여 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 돌려받지 못한 선결제 대금·과다 위약금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 위약금 다툼과 달리, 환불해줄 의사 없이 ‘언제든 환불’을 내세워 선결제를 받았는지가 판단의 분기점입니다. 환불 보장을 강조한 상담과 실제 거부 사유, 상담 안내와 약관의 차이, 다른 계약자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 할인·환불 보장 상담·계약서·약관·선결제·카드 내역 캡처 보존.</li>\n<li><strong>2단계 — 환불 거부·기망 입증 (즉시)</strong> — 상담과 다른 거부 사유·환불 요청·거부 대화를 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 선결제 취소 환불 거부 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·환불 거부·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>할인·환불 보장 상담 캡처·녹취 (거래 조건)</strong></li>\n<li><strong>예식 계약서·약관·견적서 (계약 내용)</strong></li>\n<li><strong>선결제 대금·카드 할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>상담 안내와 다른 환불 거부 사유·약관 대비 자료</strong></li>\n<li><strong>환불 요청·거부·과다 위약금 대화 기록</strong></li>\n<li><strong>예식장·업체·사업자·계좌 정보</strong></li>\n<li><strong>다른 계약자의 동일 피해·후기 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 전 들은 환불 보장 상담과 실제 적용된 약관·위약금 규정을 항목별로 대비하면 환불 의사 없이 선결제만 받았는지를 다투는 데 도움이 됩니다. 카드 결제였다면 항변권 행사 시한을 챙기고, 같은 예식장과 계약한 다른 신랑·신부를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>환불 이행 의사</strong> — 선결제 당시 환불해줄 의사가 있었는지.</li>\n<li><strong>환불 보장 상담</strong> — 상담과 다른 사유로 환불을 거부했는지.</li>\n<li><strong>편취 범의</strong> — 단순 위약금 다툼인지 처음부터 선결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 돌려받지 못한 선결제 대금이 피해액인지.</li>\n<li><strong>약관 상이</strong> — 상담 안내와 약관 차이가 어떻게 평가되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·환불 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약 대가 편취 사기의 편취 고의 판단 기준',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 불법영득의사 내지 편취의 범의는 자백이 없는 이상 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합하여 판단하여야 하고, 특히 계약에 따른 대가 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 일을 완성·이행할 의사나 능력이 없음에도 이행할 것처럼 거짓말을 하여 대가를 편취할 고의가 있었는지에 따라 판단하여야 한다고 보았습니다. 나아가 사기죄의 보호법익은 재산권이므로 계약 당시 관련 영업·업무를 규제하는 행정법규나 절차 규정을 위반한 사정이 있더라도 그러한 사정만으로 계약 체결 행위가 기망행위에 해당한다고 단정해서는 안 되고, 그 위반으로 계약 내용대로 이행되더라도 이행이 불가능하였다고 평가할 만큼 위법이 본질적인지를 심리·판단하여야 한다고 판시했습니다. 언제든 환불된다며 예식 대금을 선결제받고 환불을 거부한 사안을 살펴볼 때에도, 계약 당시 환불·이행 의사가 있었는지를 기준으로 기망과 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '환불 의사 결여 + 환불 보장 상담 + 환불 거부·과다 위약금 결합 시 선결제 환불 거부 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '위약금 규정을 이유로 거부하는데도 사기인가요?',
        answer:
          '<strong>선결제 당시 환불해줄 의사가 있었는지가 핵심인 영역입니다.</strong> 환불 보장 상담과 실제 거부 사유를 대비하세요.',
      },
      {
        question: '상담과 약관이 다른데 어떻게 다투나요?',
        answer:
          '<strong>상담 안내와 약관의 차이가 기망 다툼의 단서인 영역입니다.</strong> 계약 전 상담 내용을 녹취·캡처로 보존하세요.',
      },
      {
        question: '카드 할부로 냈는데 막을 수 있나요?',
        answer:
          '<strong>카드 할부 항변권으로 잔여 대금을 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '위약금이 대부분이라는데 다 떼여야 하나요?',
        answer:
          '<strong>과다 위약금은 소비자분쟁해결기준으로 다툴 수 있는 영역입니다.</strong> 결제·약관·상담 자료를 정리하세요.',
      },
      {
        question: '다른 신랑·신부도 같이 거부당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 후기·계약 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '예식장 선결제 취소 환불불가 추적', href: '/guide/fraud/fraud-wedding-hall-prepaid-cancellation-no-refund-track' },
      { label: '예식장 선결제 갑작스런 폐업 추적', href: '/guide/fraud/fraud-wedding-hall-prepayment-sudden-closure-track' },
      { label: '웨딩플래너 선결제 패키지 미이행 추적', href: '/guide/fraud/fraud-wedding-planner-prepaid-package-nonperformance-track' },
      { label: '학원 수강료 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 4. fraud-p2p-loan-platform-principal-nonpayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-p2p-loan-platform-principal-nonpayment-track',
    keyword: 'P2P 대출 플랫폼 원금 미상환 기망 사기',
    questionKeyword: 'P2P 대출·온라인 투자연계금융 플랫폼이 ‘안전한 담보가 잡혀 있어 원금 손실 위험이 거의 없다, 매달 이자가 꼬박꼬박 들어오고 만기에 원금도 확실히 상환된다’고 해서 믿고 적지 않은 돈을 투자했어요. 그런데 얼마 지나 이자 지급이 밀리더니 만기가 돼도 원금이 상환되지 않았고, 알고 보니 담보·차주가 부실하거나 실재하지 않았고 돌려막기로 운영된 정황이었어요. 환불·상환을 요구하니 ‘연체가 곧 회수된다’며 미루다 결국 연락을 끊고 잠적했고, 같은 플랫폼에 투자한 다른 투자자들도 똑같이 원금을 못 받았어요. 이런 P2P 대출 플랫폼 원금 미상환 기망을 사기로 신고하고 투자한 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: 'P2P 대출 플랫폼 원금 미상환·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'P2P 대출 원금 미상환 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '안전한 담보라는 말을 믿고 P2P에 투자했는데 원금이 상환되지 않고 잠적당했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「P2P 대출·온라인투자연계금융·부동산 조각투자 플랫폼이 ‘부동산·매출채권 같은 안전한 담보가 잡혀 있어 원금 손실 위험이 거의 없다, 매달 이자가 안정적으로 지급되고 만기에는 원금이 확실히 상환된다, 지금이 수익률이 가장 좋을 때다’라며 안전과 확정 수익을 앞세운 권유를 믿고, 은행 이자보다 나은 수익을 기대하며 적지 않은 자금을 투자한 분의 상황입니다. 그런데 처음 몇 달은 이자가 들어오는 듯하다가 어느 순간 이자 지급이 밀리기 시작하고, 만기가 되어도 원금이 상환되지 않아 확인해보니 담보로 내세운 부동산·채권이 부실하거나 실재하지 않았고, 새 투자자의 돈으로 앞선 투자자에게 이자를 지급하는 이른바 돌려막기 방식으로 운영된 정황이어서, 안전하다던 원금이 통째로 묶이게 되어 막막하실 거예요. 상환·환불을 요구하면 ‘연체 채권이 곧 회수된다, 담보를 처분하면 원금이 나온다’며 차일피일 미루다, 끝내 대표·운영진이 연락을 끊고 잠적해, 같은 플랫폼에 투자한 다른 투자자들도 똑같이 원금을 돌려받지 못했다면 단순 투자 손실이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 정상적으로 운용·상환할 의사나 능력 없이 안전한 담보가 있는 것처럼 가장해 투자금을 받은 정황이면 단순 연체로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 상환 의사·능력 없이 담보·수익을 과장·가장해 투자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 대가 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 이행 의사나 능력이 없음에도 이행할 것처럼 속여 재물을 편취할 고의가 있었는지에 따라 판단하여야 한다고 본 사례 흐름이 있는 영역으로, 투자금을 받을 당시의 운용·상환 의사·능력을 가려 다툴 여지가 있습니다. 상환 의사·능력 결여 + 담보·수익 가장 + 원금 미상환·잠적 결합은 ‘원금 미상환 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·투자 정리 ② 담보·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. P2P 대출 플랫폼 원금 미상환 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·담보·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 정리</strong> — 안전·확정 수익 권유·투자·이자 지급 내역 정리.</li>\n<li><strong>② 담보·기망 입증</strong> — 담보·차주의 실재·부실 여부와 돌려막기 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 상환되지 않은 투자 원금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 연체·투자 손실과 달리, 상환할 의사·능력 없이 안전한 담보가 있는 것처럼 가장해 투자금을 받았는지가 판단의 분기점입니다. 담보·수익을 강조한 권유 자료와 담보 실재 여부, 돌려막기 정황, 다른 투자자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 안전·확정 수익 권유·투자 계약·송금·이자 지급 내역 캡처 보존.</li>\n<li><strong>2단계 — 담보·기망 입증 (즉시)</strong> — 담보·차주 실재 여부, 이자 연체·원금 미상환·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·신고 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 플랫폼·운영진 정보를 정리.</li>\n<li><strong>4단계 — 경찰·금감원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">P2P 대출 플랫폼 원금 미상환 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·담보·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>안전·확정 수익 권유·광고 캡처 (거래 조건)</strong></li>\n<li><strong>투자 계약·상품 설명·약관 (계약 내용)</strong></li>\n<li><strong>투자 원금 송금·이체·이자 수령 내역 (피해 금액)</strong></li>\n<li><strong>담보·차주 정보·실재 여부 확인 자료</strong></li>\n<li><strong>이자 연체·원금 미상환·잠적 대화 기록</strong></li>\n<li><strong>플랫폼·운영사·대표·계좌 정보</strong></li>\n<li><strong>다른 투자자의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 플랫폼이 내세운 담보·차주가 실재하고 안전했는지, 새 투자금으로 앞선 투자자 이자를 지급한 돌려막기 정황이 있는지를 정리하면 상환 의사·능력 없이 투자금을 받았는지를 다투는 데 도움이 됩니다. 같은 플랫폼 투자자를 함께 모으면 반복 편취·피해 규모를 입증하는 데 유리하고, 계좌 지급정지는 신속할수록 회수에 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상환 의사·능력</strong> — 투자금을 받을 당시 정상 운용·상환 의사·능력이 있었는지.</li>\n<li><strong>담보 실재</strong> — 안전하다던 담보·차주가 실재·건전했는지.</li>\n<li><strong>편취 범의</strong> — 단순 연체인지 처음부터 돌려막기·편취였는지.</li>\n<li><strong>편취액</strong> — 상환되지 않은 투자 원금이 피해액인지.</li>\n<li><strong>운영 주체</strong> — 플랫폼·운영사·대표 중 책임 주체가 누구인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (금융·투자 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 편취 사기의 성립과 편취 범의의 판단 시점',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄는 타인을 기망하여 착오에 빠뜨리고 처분행위를 유발하여 재물을 교부받거나 재산상 이익을 얻음으로써 성립하는 범죄로서 그 본질은 기망행위에 의한 재물·이익의 취득에 있고, 사기죄의 기망행위라고 하려면 불법영득의사 내지 편취의 범의를 가지고 상대방을 기망한 것이어야 한다고 보았습니다. 특히 대가 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 이행할 의사나 능력이 없음에도 이행할 것처럼 거짓말을 하여 대가를 편취할 고의가 있었는지에 따라 판단하여야 한다고 하였습니다. 나아가 사기죄의 보호법익은 재산권이므로 관련 행정법규나 절차 규정을 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정해서는 안 되고, 그 위반이 계약 이행에 본질적인지를 심리·판단하여야 한다고 판시했습니다. 안전한 담보가 있는 것처럼 가장해 P2P 투자금을 받고 원금을 상환하지 않은 사안을 살펴볼 때에도, 투자금을 받을 당시 정상 운용·상환 의사와 능력이 있었는지를 기준으로 편취 범의를 가려 검토해볼 수 있습니다.',
        takeaway: '상환 의사·능력 결여 + 담보·수익 가장 + 원금 미상환·잠적 결합 시 원금 미상환 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 투자 손실이나 연체 아닌가요?',
        answer:
          '<strong>투자금을 받을 당시 정상 운용·상환 의사가 있었는지가 핵심인 영역입니다.</strong> 담보·수익 권유 자료와 미상환 정황을 확보하세요.',
      },
      {
        question: '담보가 부실한 걸 어떻게 밝히나요?',
        answer:
          '<strong>담보·차주의 실재·건전성과 돌려막기 정황이 단서인 영역입니다.</strong> 상품 설명과 담보 정보를 정리하세요.',
      },
      {
        question: '이자를 몇 번 받았는데도 사기인가요?',
        answer:
          '<strong>돌려막기식 이자 지급은 오히려 기망 정황이 되는 영역입니다.</strong> 이자 수령·연체·원금 미상환 흐름을 정리하세요.',
      },
      {
        question: '플랫폼이 폐업하면 원금을 못 받나요?',
        answer:
          '<strong>계좌 지급정지·피해구제·민사 반환을 검토할 수 있는 영역입니다.</strong> 송금 계좌를 특정해 신속히 지급정지를 요청하세요.',
      },
      {
        question: '다른 투자자도 같이 못 받은 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·투자 시점·미상환 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: 'P2P 대출 플랫폼 상환불능 추적', href: '/guide/fraud/fraud-p2p-lending-platform-default-track' },
      { label: '코인 P2P OTC 거래 사기', href: '/guide/fraud/fraud-coin-p2p-otc-scam' },
      { label: '지인 대여금 민사·형사 구별', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '사업 대여금 개인채무 혼동 방어', href: '/guide/fraud/fraud-business-loan-personal-debt-civil-confused-accused-defense' },
    ],
  },

  // ─── 5. fraud-nft-artwork-fake-project-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-nft-artwork-fake-project-lure-track',
    keyword: 'NFT 미술품 허위 프로젝트 유인 기망 사기',
    questionKeyword: 'SNS·디스코드에서 알게 된 NFT 미술품·아트 프로젝트 운영진이 ‘유명 작가와 협업한 한정판이라 곧 가치가 크게 오른다, 로드맵대로 에어드랍·2차 판매 수익까지 보장된다’며 민팅·구매를 유인해서 믿고 적지 않은 돈을 코인·현금으로 투자했어요. 그런데 약속한 작가 협업·로드맵은 실현되지 않았고, 알고 보니 이미지 도용·허위 로드맵으로 투자만 모은 뒤 운영진이 프로젝트를 방치하고 잠적한 정황이었어요. 환불을 요구하니 연락을 끊었고 같은 프로젝트에 참여한 다른 홀더들도 똑같이 돈을 잃었어요. 이런 NFT 미술품 허위 프로젝트 유인 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: 'NFT 미술품 허위 프로젝트 유인·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'NFT 허위 프로젝트 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '작가 협업·로드맵을 믿고 NFT에 투자했는데 프로젝트가 방치되고 운영진이 잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·디스코드·오픈채팅에서 알게 된 NFT 미술품·아트·PFP 프로젝트 운영진이 ‘유명 작가·유명 IP와 정식으로 협업한 한정판이라 발행 즉시 가치가 크게 오른다, 공개된 로드맵대로 에어드랍·2차 판매 로열티·커뮤니티 혜택까지 확실히 보장된다, 초기 민팅에 들어와야 수익이 크다’며 민팅·구매를 유인해, 새로운 투자 기회를 잡으려는 마음으로 적지 않은 돈을 코인·현금으로 넣어 NFT를 산 분의 상황입니다. 그런데 약속했던 작가 협업·에어드랍·2차 판매는 시간이 지나도 실현되지 않고, 알고 보니 다른 작가의 이미지를 도용하거나 실체 없는 로드맵으로 초기 투자만 잔뜩 모은 뒤, 운영진이 커뮤니티를 방치하고 계정·프로젝트를 닫은 채 사라진 이른바 러그풀 정황이어서, 오를 것이라던 NFT는 거래도 되지 않고 투자한 돈만 사라져 막막하실 거예요. 환불·해명을 요구하면 운영진이 연락을 끊고 잠적해, 같은 프로젝트에 참여한 다른 홀더들도 똑같이 돈을 잃었다면 단순 투자 손실이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 로드맵을 실현할 의사 없이 도용 이미지·허위 협업으로 투자만 모아 편취할 목적이었던 정황이면 단순 시세 하락으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실현 의사 없는 허위 협업·로드맵과 도용 이미지로 투자를 유인해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자에게 재물을 교부받게 한 경우에도 편취의사와의 관련상 제3자로 하여금 재물을 취득하게 할 의사가 있으면 사기죄가 성립하고, 기망으로 인한 재물 교부가 있으면 그 자체로 재산침해가 되어 이익의 최종 귀속과 무관하게 사기죄가 성립한다고 본 사례 흐름이 있는 영역으로, 기망행위의 존부와 편취 목적을 가려 다툴 여지가 있습니다. 허위 협업·로드맵 + 이미지 도용 + 프로젝트 방치·잠적 결합은 ‘허위 프로젝트 유인 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·투자 정리 ② 허위·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. NFT 미술품 허위 프로젝트 유인 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·허위·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·투자 정리</strong> — 협업·로드맵 홍보·민팅·구매·송금 내역 정리.</li>\n<li><strong>② 허위·기망 입증</strong> — 작가 협업·로드맵의 허위, 이미지 도용·러그풀 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 민팅·구매에 지급한 코인·현금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·지갑 추적·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 시세 하락과 달리, 실현 의사 없는 허위 협업·로드맵과 도용 이미지로 투자를 유인해 대금을 받았는지가 판단의 분기점입니다. 협업·로드맵 홍보 자료와 실제 실현 여부, 이미지 도용·잠적 정황, 다른 홀더의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·투자 자료 보존 (즉시)</strong> — 협업·로드맵 홍보·민팅·구매·송금·지갑 내역 캡처 보존.</li>\n<li><strong>2단계 — 허위·도용 입증 (즉시)</strong> — 작가 협업·로드맵 불이행, 이미지 도용, 운영진 잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·지갑 추적 (병행)</strong> — 현금 송금 계좌 지급정지를 112·은행에 요청하고 지갑 주소·거래 내역을 정리.</li>\n<li><strong>4단계 — 경찰·금감원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">NFT 미술품 허위 프로젝트 유인 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·허위·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>협업·로드맵 홍보·공지 캡처 (거래 조건)</strong></li>\n<li><strong>민팅·구매 페이지·화이트리스트 자료 (계약 내용)</strong></li>\n<li><strong>코인·현금 송금·지갑 거래 내역 (피해 금액)</strong></li>\n<li><strong>작가 협업·로드맵 불이행·이미지 도용 확인 자료</strong></li>\n<li><strong>운영진 잠적·환불 거부·커뮤니티 방치 기록</strong></li>\n<li><strong>운영진 계정·연락처·지갑·계좌 정보</strong></li>\n<li><strong>다른 홀더의 동일 피해·디스코드 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 홍보한 작가 협업·에어드랍·2차 판매 로드맵이 실제로 실현됐는지, 대표 이미지가 도용인지, 초기 투자만 모은 뒤 방치·잠적했는지를 정리하면 실현 의사 없이 투자를 유인했는지를 다투는 데 도움이 됩니다. 지갑 주소·거래 내역을 특정해 자금 흐름을 추적하고, 다른 홀더를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위 여부</strong> — 협업·로드맵이 허위였고 이미지가 도용됐는지.</li>\n<li><strong>기망 유인</strong> — 실현 의사 없이 투자를 유인했는지.</li>\n<li><strong>투자 손실 항변</strong> — 단순 시세 하락 주장에 가려지지 않는지.</li>\n<li><strong>편취액</strong> — 민팅·구매에 지급한 코인·현금이 피해액인지.</li>\n<li><strong>운영진 특정</strong> — 계정·지갑·계좌로 운영진을 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 취득 사기와 재물 교부에 의한 사기죄의 성립',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 범인이 기망행위에 의해 스스로 재물을 취득하지 않고 제3자로 하여금 재물의 교부를 받게 한 경우에 사기죄가 성립하려면, 그 제3자가 범인과 사이에 정을 모르는 도구이거나 범인의 이익을 위해 행동하는 관계에 있거나, 적어도 불법영득의사와의 관련상 범인에게 제3자로 하여금 재물을 취득하게 할 의사가 있어야 하며, 그 의사는 미필적 인식으로도 충분하다고 보았습니다. 그리고 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속하는지는 사기죄의 성부에 아무런 영향이 없다고 판시했습니다. 허위 협업·로드맵과 도용 이미지로 NFT 투자를 유인해 대금을 받은 사안을 살펴볼 때에도, 기망행위로 투자자가 재물을 교부했는지와 편취 목적을 기준으로 사기 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '허위 협업·로드맵 + 이미지 도용 + 프로젝트 방치·잠적 결합 시 허위 프로젝트 유인 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '제가 투자 판단을 한 건데도 사기인가요?',
        answer:
          '<strong>허위 협업·로드맵·도용 이미지로 착오에 빠졌는지가 핵심인 영역입니다.</strong> 홍보 자료와 불이행 정황을 확보하세요.',
      },
      {
        question: 'NFT 시세가 떨어진 것뿐 아닌가요?',
        answer:
          '<strong>실현 의사 없는 허위 유인은 단순 시세 하락과 구별되는 영역입니다.</strong> 로드맵 불이행·러그풀 정황을 정리하세요.',
      },
      {
        question: '이미지 도용은 어떻게 밝히나요?',
        answer:
          '<strong>원작·원저작자와 대비해 도용을 입증하는 영역입니다.</strong> 대표 이미지와 원작 출처를 함께 확보하세요.',
      },
      {
        question: '코인으로 보냈는데 추적·회수가 되나요?',
        answer:
          '<strong>지갑 주소·거래 내역으로 추적·신고를 검토할 수 있는 영역입니다.</strong> 지갑·송금 자료를 정리해 신속히 신고하세요.',
      },
      {
        question: '다른 홀더도 같이 잃은 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 디스코드·투자 시점·잠적 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: 'NFT 미술품 허위 민팅 투자 추적', href: '/guide/fraud/fraud-nft-artwork-fake-mint-investment-track' },
      { label: 'NFT 프로젝트 러그풀 투자 추적', href: '/guide/fraud/fraud-nft-project-rugpull-investment-track' },
      { label: '가상자산 거래소 출금 차단 추적', href: '/guide/fraud/fraud-crypto-exchange-fake-withdrawal-block-track' },
      { label: '미술품 진품 인증서 위조 추적', href: '/guide/fraud/fraud-art-painting-authentic-certificate-fake-track' },
    ],
  },

  // ─── 6. fraud-investment-return-delay-intent-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-return-delay-intent-falsely-accused-defense',
    keyword: '투자금 회수 지연 사기 고의 무고 방어',
    questionKeyword: '지인·투자자에게서 사업·투자 명목으로 자금을 받아 실제로 사업에 투입했는데, 시장 상황이 나빠지고 회수가 늦어지자 상대가 ‘처음부터 나를 속여 투자금을 받아 갚을 생각이 없었다’며 저를 사기로 고소했어요. 저는 자금을 받을 당시 실제로 사업을 진행했고 수익을 돌려줄 의사도 능력도 있었는데, 회수가 지연됐을 뿐 편취할 고의는 전혀 없었어요. 그런데 투자금 회수가 늦어졌다는 이유만으로 한순간에 사기 피의자로 몰려 너무 억울해요. 투자 계약·자금 사용처·사업 진행 자료도 있는데, 이렇게 투자금 회수 지연이 사기 고의로 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '투자금 회수 지연 사기 고의·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '투자금 회수 지연 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '실제로 투자한 자금 회수가 늦어진 것이 사기 고의로 고소돼 억울하다면, 형법 제347조 편취 고의 판단과 민사 채무불이행 구별·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동료·투자자에게서 사업 자금·투자금 명목으로 돈을 받아 실제로 사업에 투입하고 운영했는데, 시장 상황이 나빠지거나 사업 성과가 기대에 못 미쳐 원금·수익 회수가 늦어지자, 상대가 ‘처음부터 나를 속여 투자금을 받아 갚을 생각이 없었던 것’이라며 저를 사기로 고소해, 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 자금을 받을 당시 실제로 사업을 진행할 의사와 능력이 있었고 수익이 나면 약속대로 돌려줄 생각이었는데, 경기·거래처 사정으로 회수가 지연됐을 뿐 편취할 고의는 전혀 없었는데도, 투자금 회수가 늦어졌다는 사실만으로 사기 고의가 있었던 것처럼 몰려 억울하고 막막하실 거예요. 투자·사업 관계에서는 손익과 회수 시점이 변동하는 것이 자연스러운데도 결과가 나빠졌다는 이유만으로 ‘처음부터 속였다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 투자 계약의 경위와 자금 사용처, 실제 사업 진행과 회수 지연의 원인을 차분히 정리해 자금을 받을 당시 편취할 고의가 없었고 실제로 사업에 투입했다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 재물·이익을 받을 당시 상대를 기망하여 착오에 빠뜨리고 편취할 고의가 있어야 하는 영역입니다. 판례는 사기죄의 편취 고의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합하여 판단하여야 하고, 민사상 금전거래에서 채무불이행 사실만으로 곧바로 편취 고의를 인정할 수는 없으나 확실한 변제 의사가 없거나 약속한 변제기 내에 변제할 능력이 없는데도 변제할 것처럼 가장하여 금원을 받은 경우에는 편취 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 자금을 받을 당시의 이행 의사·능력과 실제 사업 진행을 종합해 편취 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 투자 경위·자금 사용처 + 실제 사업 진행 + 편취 고의 다툼 결합은 ‘사기 고의 부재·민사 채무불이행 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 투자 경위 정리 ② 자금 사용처·사업 진행 ③ 회수 지연 원인 검토 ④ 편취 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 투자금 회수 지연 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·자금 사용처·회수 지연·편취 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자 경위 정리</strong> — 투자 권유·계약·약정·조건 정리.</li>\n<li><strong>② 자금 사용처·사업 진행</strong> — 받은 자금의 사업 투입·집행 내역과 실제 운영 정리.</li>\n<li><strong>③ 회수 지연 원인 검토</strong> — 경기·거래처 등 회수 지연의 객관적 원인 검토.</li>\n<li><strong>④ 편취 고의</strong> — 자금을 받을 당시 이행 의사·능력이 있었는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 사업 진행·자금 사용 자료가 편취 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자금을 받을 당시 편취할 고의가 있었는지(사기), 아니면 실제 사업 후 회수가 지연된 것인지(민사 채무불이행)가 판단의 분기점입니다. 투자 경위와 자금 사용처, 실제 사업 진행과 회수 지연 원인을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·자금 자료 보존 (즉시)</strong> — 투자 계약·약정·자금 수령·사업 투입·집행 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 사업 진행·사용처 정리 (즉시)</strong> — 사업 운영·거래·매출·자금 사용처와 회수 지연의 경위를 정리.</li>\n<li><strong>3단계 — 편취 고의·구별 검토 (병행)</strong> — 자금 수령 당시 이행 의사·능력, 민사 채무불이행과의 구별점을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자금 회수 지연 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·자금·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 계약서·약정·조건 자료 (투자 경위)</strong></li>\n<li><strong>자금 수령·사업 투입·집행 이체 내역 (자금 사용처)</strong></li>\n<li><strong>사업 운영·거래·매출 자료 (실제 진행)</strong></li>\n<li><strong>회수 지연 원인·경기·거래처 자료 (지연 경위)</strong></li>\n<li><strong>당시 대화·메시지·회계 자료 (경위 입증)</strong></li>\n<li><strong>변제·정산 노력·부분 상환 자료</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투자 권유·계약 경위와 받은 자금의 사업 투입·집행 내역, 실제 사업 운영과 회수 지연 원인을 시간순으로 정리하면 자금을 받을 당시 편취 고의가 있었는지, 아니면 회수 지연·손실인지를 다투는 데 도움이 됩니다. 사업이 실제로 진행됐고 지연이 경기·거래처 사정에서 비롯됐다는 객관 자료와 변제·정산 노력을 함께 정리해 민사 채무불이행과의 구별점을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 자금을 받을 당시 편취할 고의가 있었는지.</li>\n<li><strong>실제 사업</strong> — 받은 자금을 실제 사업에 투입·집행했는지.</li>\n<li><strong>민사·형사 구별</strong> — 회수 지연이 채무불이행인지 사기인지.</li>\n<li><strong>지연 경위</strong> — 회수 지연이 경기·거래처 사정에서 비롯됐는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취 고의와 채무불이행의 구별 기준',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 고의는 피고인이 자백하지 않는 한 범행 전후 피고인의 재력·환경·범행의 내용·거래의 이행과정·피해자와의 관계 등 객관적인 사정을 종합하여 판단하여야 한다고 보았습니다. 그리고 민사상 금전대차관계에서 채무불이행 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나, 피고인이 확실한 변제의 의사가 없거나 차용 시 약속한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장하여 금원을 차용한 경우에는 편취의 고의를 인정할 수 있다고 하였습니다. 또한 거래의 상대방이 일정한 사정을 고지받았더라면 거래를 하지 않았을 관계가 인정되는 경우에는 신의칙상 그 사정을 고지할 의무가 있고 이를 묵비하면 기망이 될 수 있다고 판시했습니다. 투자금을 받아 사업에 투입한 뒤 회수가 지연되어 사기로 고소된 사안을 살펴볼 때에도, 자금을 받을 당시의 이행 의사·능력을 기준으로 편취 고의와 민사 채무불이행을 구별해 방어를 검토해볼 수 있습니다.',
        takeaway: '투자 경위·자금 사용처 + 실제 사업 진행 + 편취 고의 다툼 결합 시 사기 고의 부재·채무불이행 구별 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '회수가 늦어졌다는 이유로 사기가 되나요?',
        answer:
          '<strong>자금을 받을 당시 편취 고의가 있었는지가 핵심인 영역입니다.</strong> 자금 사용처·사업 진행·지연 원인 자료를 정리하세요.',
      },
      {
        question: '실제로 사업에 썼는데도 사기로 보나요?',
        answer:
          '<strong>자금 사용처는 편취 고의를 배척하는 자료가 되는 영역입니다.</strong> 사업 투입·집행 이체 내역을 확보하세요.',
      },
      {
        question: '투자 계약서가 있으면 방어에 도움이 되나요?',
        answer:
          '<strong>계약·자금 흐름은 실제 투자 관계를 뒷받침하는 자료인 영역입니다.</strong> 계약·이체·운영 내역을 함께 정리하세요.',
      },
      {
        question: '상대가 처음부터 속였다고 주장해요.',
        answer:
          '<strong>행위 당시 이행 의사·능력이 기준이 되는 영역입니다.</strong> 자금 수령 당시 정황과 사업 진행 자료를 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>투자 경위·자금 사용처 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '투자수익 약속 사업실패 무고 방어', href: '/guide/fraud/fraud-investment-return-promise-business-failure-falsely-accused-defense' },
      { label: '사기 편취 고의 종합 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '사업투자 빙자 차용 무고 방어', href: '/guide/fraud/fraud-business-investment-pretext-borrowing-falsely-accused-defense' },
      { label: '크라우드펀딩 제작 지연 무고 방어', href: '/guide/fraud/fraud-crowdfunding-production-delay-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-company-dinner-forced-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-forced-touch-report-track',
    keyword: '회식 자리 강제추행 신고',
    questionKeyword: '회사 회식 자리에서 상사·동료가 술김에 옆자리에 앉히더니 어깨·허벅지·허리에 손을 대거나 갑자기 끌어안는 등 몸을 만져 너무 불쾌하고 수치스러웠어요. 분위기상 곧바로 강하게 항의하거나 자리를 뜨기 어려웠고, 다들 술에 취해 있어 문제 삼으면 제가 예민한 사람이 될까 봐 참았어요. 그런데 생각할수록 단순한 실수가 아니라 명백한 추행이었고, 상대는 ‘취해서 기억이 안 난다, 장난이었다’고 할 것 같아요. 이런 회식 자리 강제추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '회식 강제추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '회식 강제추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '회식 자리에서 상사·동료가 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행 폭행·협박 해당성 판단과 증거 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식·부서 모임·거래처 술자리에서 상사나 동료가 술기운을 빌려 옆자리에 앉히더니 어깨·허리·허벅지 등에 손을 대거나, 갑자기 끌어안고 볼에 입을 맞추려 하는 등 단순한 스킨십으로는 설명되지 않는 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 직장 회식이라는 자리의 특성상 상대가 상사이거나 여러 사람이 함께 있어 곧바로 큰 소리로 항의하거나 자리를 박차고 나오기 어렵고, 다들 취해 있는 분위기에서 문제를 제기하면 오히려 예민한 사람으로 몰리거나 이후 직장 생활에 불이익이 있을까 봐 그 순간에는 참고 넘긴 경우도 많아, 나중에 생각할수록 단순한 실수가 아니라 명백한 추행이라는 생각이 들지만, 상대가 ‘술에 취해 기억이 안 난다, 친해서 한 장난이었다’고 해명하거나 오히려 없던 일로 만들려 할 것 같아 신고해도 받아들여질지 막막하실 거예요. 매일 얼굴을 봐야 하는 직장에서 벌어진 일이라 더 답답하고 두려우셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 판례는 강제추행죄의 폭행 또는 협박은 상대방의 항거를 곤란하게 할 정도일 것을 요하지 않고, 상대방의 신체에 대하여 불법한 유형력을 행사하거나 일반적으로 보아 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아, 의사에 반하는 유형력의 행사가 있으면 강제추행이 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 회식 자리에서 의사에 반해 어깨·허리 등 신체를 만지거나 끌어안은 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있어, 술김·장난이라는 해명이 그 성립을 가리는지 가려 다툴 여지가 있는 영역입니다. 위력·상하관계 이용 + 의사에 반하는 신체 접촉 + 술김·장난 해명 결합은 ‘회식 강제추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·자리 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 자리 강제추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·자리 정리</strong> — 회식 장소·시간·좌석 배치·참석자·음주 정황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 어깨·허리·허벅지 접촉·끌어안음·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 의사에 반하는 유형력 행사로서 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366·직장 내 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 술김·장난이라는 해명과 달리, 의사에 반해 신체에 유형력을 행사해 추행했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 회식 장소 CCTV, 동석자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자리 자료 보존 (즉시)</strong> — 회식 장소·시간·좌석 배치·참석자·접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 식당·주점 CCTV, 결제·예약 내역, 동석자·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원과 직장 내 고충 절차를 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 자리 강제추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 장소·시간·좌석 배치·참석자 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>식당·주점 CCTV 보존 요청 자료</strong></li>\n<li><strong>회식 결제·예약·참석 입증 자료</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·통화·심경·상담 기록</strong></li>\n<li><strong>해바라기센터·1366·직장 고충 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식 장소의 CCTV와 결제·예약 내역으로 시간·좌석을 특정하고, 동석자 중 목격자의 진술을 확보하면 접촉의 구체적 태양을 뒷받침하는 데 도움이 됩니다. 그 순간 강하게 항의하지 못했더라도 직후에 남긴 메시지·통화나 주변에 털어놓은 정황을 정리하면 의사에 반하는 추행이었다는 점을 다투는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반하는 유형력 행사로서 추행인지.</li>\n<li><strong>술김·장난 해명</strong> — ‘취해서 기억 안 난다·장난’ 해명에 가려지지 않는지.</li>\n<li><strong>위력·상하관계</strong> — 상사·선배의 지위가 항의를 어렵게 했는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동석자·결제로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 폭행·협박의 의미와 판단 기준',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 전원합의체 판결 영역에서 법원은 강제추행죄의 폭행 또는 협박의 의미를 다시 정의하면서, 종래 폭행·협박 선행형에서 상대방의 항거를 곤란하게 할 정도의 폭행·협박을 요구하던 판례 법리를 변경했습니다. 그리하여 강제추행죄의 폭행 또는 협박은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대하여 불법한 유형력을 행사하거나 일반적으로 보아 상대방으로 하여금 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아야 한다고 판시했습니다. 이는 강제추행죄의 보호법익인 성적 자기결정권과 범죄구성요건에 부합하는 해석으로, 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문하고 강제추행이 성립할 수 있다는 취지입니다. 회식 자리에서 상사·동료가 의사에 반해 신체를 만지거나 끌어안은 사안을 살펴볼 때에도, 항거 곤란 여부가 아니라 의사에 반하는 유형력 행사와 추행 해당성을 기준으로 강제추행 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '위력·상하관계 이용 + 의사에 반하는 신체 접촉 + 술김·장난 해명 결합 시 회식 강제추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '술김에 한 장난이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>의사에 반하는 유형력 행사인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 직후 반응을 구체적으로 기록하세요.',
      },
      {
        question: '그 자리에서 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>상하관계·분위기상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 메시지·상담 정황을 정리하세요.',
      },
      {
        question: '항거가 곤란할 정도가 아니면 추행이 아닌가요?',
        answer:
          '<strong>변경된 판례상 항거 곤란은 요건이 아닌 영역입니다.</strong> 의사에 반하는 접촉이었다는 점을 정리하세요.',
      },
      {
        question: '상대가 취해서 기억이 안 난다고 해요.',
        answer:
          '<strong>기억 여부와 별개로 접촉 사실·정황으로 다투는 영역입니다.</strong> CCTV·동석자 진술을 신속히 확보하세요.',
      },
      {
        question: '직장 내 불이익이 걱정돼요.',
        answer:
          '<strong>직장 내 고충 절차와 피해자 보호를 함께 검토할 수 있는 영역입니다.</strong> 1366·해바라기센터 상담을 병행하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '회식 옆자리 강요 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
      { label: '회식 노래방 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-karaoke-touch-report-track' },
      { label: '마사지샵 강제추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
      { label: '클럽 혼잡 무대 추행 신고', href: '/guide/sex-crime/sex-crime-club-crowded-dancefloor-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-academy-shuttle-bus-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-academy-shuttle-bus-touch-report-track',
    keyword: '학원 셔틀버스 추행 신고',
    questionKeyword: '학원 셔틀버스를 타고 이동하는데 옆에 앉은 사람·기사·인솔자가 좁은 좌석과 흔들림을 틈타 허벅지·어깨 쪽에 손을 대거나 몸을 밀착해 너무 불쾌하고 무서웠어요. 좁은 차 안이라 자리를 옮기기 어려웠고, 아이·학생이 타는 셔틀이라 곧바로 문제 삼기도 조심스러웠어요. 처음엔 흔들려서 닿았나 싶었지만 접촉이 반복되고 노골적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 상대는 ‘버스가 흔들려 닿았다’고 할 것 같아 걱정돼요. 이런 학원 셔틀버스 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '학원 셔틀버스 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학원 셔틀버스 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '학원 셔틀버스에서 옆사람·기사가 신체를 만지는 추행을 당해 무서웠다면, 강제추행 해당성 판단과 블랙박스·CCTV 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「학원·교습소 셔틀버스나 통학·통원 차량을 타고 이동하던 중, 옆자리에 앉은 사람이나 기사·인솔 교사가 좁은 좌석과 차량의 흔들림·급정거를 틈타 허벅지·어깨·등에 손을 대거나, 몸을 바짝 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 무서웠던 분의 상황입니다. 셔틀버스는 좌석이 좁고 옆·앞뒤로 붙어 앉게 되어 몸을 피하거나 자리를 옮기기 어렵고, 특히 학생·아이가 함께 타는 차량이라 그 자리에서 곧바로 큰 소리로 문제 삼기도 조심스러워, 처음에는 ‘차가 흔들려서 어쩌다 닿은 건가’ 싶었지만 접촉이 멈추지 않고 손의 움직임이 점점 노골적이어서 단순한 우연이 아니라 좁은 공간을 틈탄 추행이라는 생각이 들지만, 상대가 ‘버스가 흔들려 어쩌다 닿았다, 그런 의도가 아니었다’고 해명할 것 같아 신고해도 가볍게 치부될까 봐 막막하실 거예요. 매일 이용해야 하는 통학·통원 공간에서 겪은 일이라 더 답답하고 두려우셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 좁은 셔틀버스 안에서 의사에 반해 허벅지·어깨 등 신체를 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 공소사실을 부인하는 성폭력 사건에서 직접증거가 사실상 피해자의 진술뿐인 경우 그 진술이 합리적 의심을 배제할 신빙성이 있는지는 진술의 일관성·구체성, 논리·경험칙 부합, 객관적 사정과의 모순 여부, 허위 진술 동기의 유무 등을 종합해 신중히 판단해야 하고, 추행은 성적 수치심·혐오감을 일으키는 행위로서 성욕을 자극·만족시키려는 목적까지 필요하지는 않다고 본 사례 흐름이 있는 영역으로, 접촉의 태양과 진술의 신빙성을 가려 다툴 여지가 있습니다. 좁은 좌석 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘셔틀버스 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학원 셔틀버스 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 셔틀 노선·탑승 시간대·좌석 위치·동승자 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허벅지·어깨 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 좁은 좌석을 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 흔들려서 닿았다는 해명과 달리, 좁은 좌석을 틈타 의사에 반해 민감 부위를 만지거나 밀착해 비볐는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 셔틀 블랙박스·CCTV, 노선·탑승 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 셔틀 노선·탑승 시간대·좌석 위치·접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — 블랙박스·CCTV 확보 (즉시)</strong> — 셔틀 블랙박스·차량 내 CCTV, 승하차 지점 CCTV, 탑승 기록, 동승자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 셔틀버스 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>셔틀 노선·탑승 시간대·좌석 위치 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>셔틀 블랙박스·차량 내 CCTV 보존 요청 자료</strong></li>\n<li><strong>승하차 지점 CCTV·학원 출결 기록</strong></li>\n<li><strong>동승자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 셔틀버스는 블랙박스·차량 내 CCTV와 운행·출결 기록으로 탑승 시간대와 좌석을 특정할 수 있으므로, 학원·운수업체·경찰을 통해 신속히 보존을 요청하고 보관 기간이 짧으니 서둘러야 합니다. 좁은 좌석에서 우연으로 설명되지 않는 접촉이 반복됐다는 점과 직후 반응을 구체적으로 기록하면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>흔들림 해명</strong> — ‘버스가 흔들려 닿았다’ 해명에 가려지지 않는지.</li>\n<li><strong>진술 신빙성</strong> — 피해자 진술이 일관되고 구체적인지.</li>\n<li><strong>가해자 특정</strong> — 블랙박스·CCTV·탑승 기록으로 특정할 수 있는지.</li>\n<li><strong>보호 필요</strong> — 통학·통원 공간의 반복 위험이 고려되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성 판단과 추행의 의미',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 공소사실에 부합하는 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술이 합리적인 의심을 배제할 만한 신빙성이 있는지는 진술 내용의 주요한 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적이고 진술 자체로 모순되거나 객관적으로 확인된 사실과 모순되지는 않는지, 허위로 불리한 진술을 할 만한 동기나 이유가 있는지 등을 종합적으로 고려하여 신중히 판단하여야 한다고 보았습니다. 또 추행이란 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 의미하고, 강제추행죄의 성립에 필요한 주관적 구성요건은 고의만으로 충분하며 성욕을 자극·흥분·만족시키려는 동기나 목적까지 있어야 하는 것은 아니라고 판시했습니다. 좁은 셔틀버스 안에서 접촉이 이루어진 사안을 살펴볼 때에도, 피해자 진술의 신빙성과 접촉의 구체적 태양을 종합해 추행 해당성을 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '좁은 좌석 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 셔틀버스 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '버스가 흔들려 닿았다는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 기록하세요.',
      },
      {
        question: '증거가 제 진술뿐인데 신고되나요?',
        answer:
          '<strong>진술의 일관성·구체성·정황 부합을 따지는 영역입니다.</strong> 블랙박스·CCTV·동승자 진술을 함께 확보하세요.',
      },
      {
        question: '성적 목적이 없었다고 하면 추행이 아닌가요?',
        answer:
          '<strong>성욕 목적이 없어도 고의만 있으면 추행이 되는 영역입니다.</strong> 접촉의 태양과 정황을 정리하세요.',
      },
      {
        question: '셔틀 블랙박스 영상은 어떻게 확보하나요?',
        answer:
          '<strong>블랙박스·CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 학원·운수업체·경찰에 즉시 보존을 요청하세요.',
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
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-massage-shop-improper-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-improper-touch-report-track',
    keyword: '마사지샵 부당 추행 신고',
    questionKeyword: '마사지샵·안마·스포츠마사지 업소에서 관리·시술을 받는데 관리사가 시술과 무관하게 가슴·엉덩이·허벅지 안쪽 같은 민감한 부위를 만지거나 필요 이상으로 몸을 밀착·문질러 너무 불쾌하고 수치스러웠어요. 시술 중이라 곧바로 항의하거나 일어나기 어려웠고, ‘원래 이런 관리인가’ 헷갈리기도 했어요. 그런데 생각할수록 정상 시술 범위를 벗어난 명백한 추행이었고, 상대는 ‘시술 과정에서 닿은 것’이라고 할 것 같아요. 이런 마사지샵 부당 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '마사지샵 부당 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '마사지샵에서 관리사가 시술을 빙자해 민감한 부위를 만지는 추행을 당해 수치스러웠다면, 기습추행 해당성 판단과 예약·CCTV 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「마사지샵·안마·스포츠마사지·타이마사지 업소에서 피로를 풀거나 관리를 받으려고 시술대에 누웠는데, 관리사가 정상적인 시술과 무관하게 가슴·엉덩이·허벅지 안쪽 등 민감한 부위를 만지거나, 필요 이상으로 몸을 밀착하고 문지르는 등 단순한 관리로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 시술 중에는 옷을 벗거나 엎드린 상태라 곧바로 항의하거나 자리에서 일어나기 어렵고, 마사지라는 특성상 신체 접촉이 어느 정도 예정되어 있어 ‘원래 이렇게 하는 관리인가’ 하고 순간 헷갈리기도 하지만, 손이 향하는 부위와 방식이 정상 시술 범위를 명백히 벗어나 단순한 시술이 아니라 추행이라는 생각이 들지만, 관리사가 ‘시술 과정에서 자연스럽게 닿은 것, 근육을 풀어주려던 것’이라고 해명할 것 같아 신고해도 정상 시술과 구별될지 막막하실 거예요. 몸을 맡기고 편히 쉬려던 공간에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 마사지샵에서 의사에 반해 가슴·엉덩이 등 민감한 부위를 만진 행위라면, 시술을 빙자했더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 기습추행의 경우 추행행위와 동시에 이루어지는 폭행행위는 상대방의 의사를 억압할 정도임을 요하지 않고 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문하며, 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역으로, 시술 범위를 벗어난 접촉인지를 가려 다툴 여지가 있습니다. 시술 빙자 + 민감 부위 접촉·밀착 + 정상 시술 해명 결합은 ‘마사지샵 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·시술 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 부당 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·시술 정리</strong> — 업소·예약·시술 종류·관리사·시술실 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 가슴·엉덩이·허벅지 안쪽 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 정상 시술 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시술 과정에서 닿았다는 해명과 달리, 정상 시술 범위를 벗어나 의사에 반해 민감 부위를 만졌는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 예약·결제 내역, 업소·복도 CCTV, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·시술 자료 보존 (즉시)</strong> — 업소·시술 종류·관리사·시술 시간과 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — 예약·CCTV 확보 (즉시)</strong> — 예약·결제 내역, 업소 입구·복도 CCTV, 목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 부당 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·예약·시술 종류·관리사 정보 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>예약·결제·방문 입증 자료</strong></li>\n<li><strong>업소 입구·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예약·결제 내역과 업소 입구·복도 CCTV로 방문 시각과 관리사를 특정하고, 손이 향한 부위와 방식이 정상 시술 범위를 벗어났다는 점을 구체적으로 기록하면 시술 빙자 추행을 다투는 데 도움이 됩니다. 시술 중이라 즉시 항의하지 못했더라도 직후에 남긴 메시지·통화나 주변에 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 정상 시술 범위를 벗어난 민감 부위 접촉인지.</li>\n<li><strong>정상 시술 해명</strong> — ‘시술 과정에서 닿았다’ 해명에 가려지지 않는지.</li>\n<li><strong>기습추행</strong> — 추행행위 자체가 유형력 행사로 인정되는지.</li>\n<li><strong>관리사 특정</strong> — 예약·결제·CCTV로 관리사를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행의 판단 기준',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄는 폭행 또는 협박을 가하여 항거를 곤란하게 한 뒤 추행하는 경우뿐만 아니라 폭행행위 자체가 추행행위라고 인정되는 이른바 기습추행의 경우도 포함되고, 기습추행에서 추행행위와 동시에 저질러지는 폭행행위는 반드시 상대방의 의사를 억압할 정도의 것임을 요하지 않고 상대방의 의사에 반하는 유형력의 행사가 있기만 하면 그 힘의 대소강약을 불문한다고 보았습니다. 나아가 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것으로, 이에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 이전부터의 관계, 그 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합적으로 고려하여 신중히 결정하여야 한다고 판시했습니다. 마사지샵에서 관리사가 시술을 빙자해 민감 부위를 만진 사안을 살펴볼 때에도, 접촉의 구체적 태양과 정상 시술 범위 이탈 여부를 종합해 기습추행 해당성을 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 민감 부위 접촉·밀착 + 정상 시술 해명 결합 시 마사지샵 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시술 과정에서 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>정상 시술 범위를 벗어난 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '시술 중이라 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>시술 상황상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '마사지는 원래 몸을 만지는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 시술과 민감 부위 접촉의 구별이 핵심인 영역입니다.</strong> 손이 향한 부위와 방식을 구체적으로 정리하세요.',
      },
      {
        question: 'CCTV가 시술실 안에는 없을 텐데 다툴 수 있나요?',
        answer:
          '<strong>입구·복도 CCTV와 예약·결제로 정황을 다투는 영역입니다.</strong> 방문 시각·관리사를 특정해 자료를 모으세요.',
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
      { label: '마사지샵 강제추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
      { label: '마사지샵 서비스 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-service-pretext-touch-report-track' },
      { label: '마사지샵 관리사 부적절 접촉 추적', href: '/guide/sex-crime/sex-crime-massage-shop-therapist-inappropriate-touch-track' },
      { label: '피부관리샵 관리 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-skincare-shop-care-pretext-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense',
    keyword: '축제 인파 접촉 오해 추행 무고 방어',
    questionKeyword: '축제·행사장에 사람이 빽빽하게 몰린 인파 속에서 밀리고 떠밀리는 과정에서 앞·옆 사람과 몸이 닿았어요. 그런데 옆에 있던 사람이 ‘일부러 몸을 만졌다’며 저를 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 인파에 떠밀려 어쩔 수 없이 닿은 것뿐인데, 신체 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 게다가 그 혼잡 속에서 상대가 저를 제대로 특정한 것인지도 의문이고 진술도 오락가락해요. 축제 혼잡도·동선·손 위치 같은 정황도 있는데, 이렇게 축제 인파 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점과 진술의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '축제 인파 접촉 오해 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '축제 인파 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '축제 인파에 떠밀려 닿은 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 진술 신빙성·범인식별·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「축제·불꽃놀이·콘서트·행사장처럼 사람이 빽빽하게 몰린 인파 속에서 앞뒤·좌우로 밀리고 떠밀리는 과정에서 앞이나 옆 사람과 몸이 닿을 수밖에 없었고, 그 접촉을 두고 옆에 있던 상대가 ‘일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 인파에 떠밀려 어쩔 수 없이 닿은 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 더구나 사방이 사람으로 붐비는 혼잡 속에서 상대가 실제로 접촉한 사람이 저였는지, 다른 사람과 혼동한 것은 아닌지조차 불분명하고, 상대의 진술마저 시점·내용에 따라 오락가락한다면, 혼잡한 축제에서는 원치 않는 접촉이 흔히 생기는데도 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 축제의 혼잡도와 이동 동선, 손·소지품의 위치, 접촉이 일어난 경위와 상대가 저를 특정하게 된 과정을 차분히 정리해 추행의 고의가 없었고 혼잡으로 인한 불가피한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 진술의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 성추행 피해를 다투는 사건에서 피해자·목격자 진술의 신빙성은 진술의 일관성·구체성과 함께 최초 진술이 이루어진 경위, 암시적 질문이나 반복 신문에 의한 오염 가능성 등을 신중히 살펴 판단해야 하고, 특히 사진 제시나 대면에 의한 범인식별 절차에서는 진술의 신빙성을 높이기 위한 절차적 요건이 지켜졌는지를 따져야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 혼잡한 축제에서의 접촉 경위와 정황, 상대가 가해자를 특정한 과정과 진술의 신빙성을 종합해 추행 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 혼잡·이동 정황 + 접촉 경위 + 고의 부인·진술 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·혼잡 정리 ② 접촉 경위·손 위치 ③ 고의 부재 검토 ④ 진술·범인식별 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 접촉 오해 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·혼잡 정리</strong> — 축제 장소·시간대·혼잡도·이동 동선 정리.</li>\n<li><strong>② 접촉 경위·손 위치</strong> — 떠밀림·밀림 경위와 손·소지품 위치·자세 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 혼잡·경위 등 간접사실 검토.</li>\n<li><strong>④ 진술·범인식별 신빙성</strong> — 상대 진술의 일관성과 가해자 특정 과정 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 혼잡·동선·손 위치가 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의사에 반해 추행할 고의로 접촉했는지(추행), 아니면 혼잡으로 떠밀려 불가피하게 닿은 것인지(고의 부재)가 판단의 분기점입니다. 축제 혼잡도와 이동 동선, 손·소지품 위치, 상대가 가해자를 특정한 과정을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·혼잡 자료 보존 (즉시)</strong> — 축제 장소·시간대·혼잡도·이동 동선·입장 기록을 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·손 위치 정리 (즉시)</strong> — 떠밀림·밀림 경위, 손·소지품·일행 위치와 자세를 정리.</li>\n<li><strong>3단계 — 진술·범인식별 검토 (병행)</strong> — 상대 진술의 일관성과 혼잡 속 가해자 특정 과정·오인 가능성을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 접촉 오해 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>축제 장소·시간대·혼잡도 자료 (경위)</strong></li>\n<li><strong>입장·예매·결제·이동 동선 내역 (동선 입증)</strong></li>\n<li><strong>행사장·주변 CCTV 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>손·소지품·일행 위치·자세 정리 (접촉 경위)</strong></li>\n<li><strong>당시 통화·메시지·사진·영상 (동선·정황 입증)</strong></li>\n<li><strong>일행·목격자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·상대 진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 축제 장소·시간대·혼잡도와 입장·예매·이동 동선, 행사장 CCTV·현장 사진·영상을 시간순으로 정리하면 접촉이 혼잡으로 인한 불가피한 것이었는지, 추행할 고의가 있었는지를 다투는 데 도움이 됩니다. 손·소지품·일행의 위치와 자세, 혼잡 속에서 상대가 가해자를 특정한 과정과 진술이 시점·내용에 따라 달라지는 부분을 함께 정리해 고의 부재와 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>접촉 경위</strong> — 혼잡·떠밀림으로 인한 불가피한 접촉이었는지.</li>\n<li><strong>범인식별</strong> — 혼잡 속에서 가해자를 오인·혼동한 것은 아닌지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성추행 진술의 신빙성과 범인식별 절차의 요건',
        summary:
          '대법원 2006도2520(대법원, 2008.07.10 선고) 영역에서 법원은 성추행 피해를 다투는 사건에서 진술의 신빙성을 판단할 때에는, 특히 아동 등의 경우 질문자에 의한 피암시성이 강하고 기억의 출처를 제대로 인식하지 못할 가능성이 있는 점을 고려하여, 최초로 피해 사실을 청취한 사람이 편파적 예단을 가지고 사실이 아닌 정보를 주거나 반복 신문으로 특정한 답변을 유도해 기억에 변형을 가져올 여지는 없었는지, 진술이 일관되고 구체적인지 등을 종합적으로 검토하여야 한다고 보았습니다. 또한 범인식별 절차에서 진술의 신빙성을 높게 평가하려면, 목격자의 진술을 사전에 상세히 기록한 다음 용의자를 포함해 인상착의가 비슷한 여러 사람을 동시에 대면시켜 지목하도록 하고, 상호 사전 접촉을 막으며 그 과정과 결과를 서면화하는 등의 절차적 요건을 지켜야 하고, 사진 제시에 의한 식별에서도 이러한 원칙을 따라야 한다고 판시했습니다. 혼잡한 축제에서의 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 상대 진술의 신빙성과 가해자 특정 과정의 적정성, 혼잡·경위 등 정황을 종합해 추행 고의가 증명되는지를 기준으로 방어를 검토해볼 수 있습니다.',
        takeaway: '혼잡·이동 정황 + 접촉 경위 + 고의 부인·진술 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '접촉이 있었다는 이유만으로 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 혼잡·떠밀림 경위와 손·소지품 위치를 정리하세요.',
      },
      {
        question: '인파에 떠밀린 것뿐인데 어떻게 방어하나요?',
        answer:
          '<strong>혼잡·경위는 고의를 배척하는 간접사실이 되는 영역입니다.</strong> 혼잡도·동선·CCTV·현장 사진을 모으세요.',
      },
      {
        question: '혼잡 속에서 상대가 저를 잘못 지목한 것 같아요.',
        answer:
          '<strong>범인식별 절차의 적정성과 오인 가능성을 다투는 영역입니다.</strong> 특정 과정과 상대 진술의 모순을 정리하세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접촉 경위·손 위치에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '만원버스 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense' },
      { label: '축제 인파 추행 신고', href: '/guide/sex-crime/sex-crime-festival-crowd-touch-report-track' },
      { label: '회식 술자리 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '클럽 무대 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
    ],
  },
];
