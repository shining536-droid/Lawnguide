import { SpokePage } from '../spoke-pages';

// batch117 fraud(6) + sex-crime(4) — 10개 (2026-07-04)
//
// 고유 존재 이유:
// 1. fraud-luxury-watch-fake-authentication-guarantee-resale-track — 일반 명품 분쟁과 분기. '명품시계를 정품보증이라며 가품을 중고로 판' 정품보증 허위 기망 편취 판단형 트랙(victim).
// 2. fraud-rental-item-deposit-nonreturn-lease-scam-track — 일반 임대 분쟁과 분기. '렌탈 물품 임대를 사칭해 보증금만 받고 반환하지 않은' 임대 사칭 보증금 편취 절차형 트랙(victim).
// 3. fraud-overseas-purchasing-agent-nondelivery-track — 일반 구매대행 분쟁과 분기. '해외구매대행이 선결제만 받고 물품을 미배송' 선결제 미배송 편취 판단형 트랙(victim).
// 4. fraud-coin-reading-room-paid-pick-loss-lure-track — 일반 투자 분쟁과 분기. '코인 리딩방이 유료 종목추천으로 유인해 손실·편취' 유료 종목추천 유인 편취 절차형 트랙(victim).
// 5. fraud-membership-gym-prepaid-sudden-closure-track — 일반 회원권 분쟁과 분기. '헬스장이 회원권 선불만 받고 갑자기 폐업' 선불 회원권 폐업 편취 판단형 트랙(victim).
// 6. fraud-profit-distribution-delay-repayment-intent-falsely-accused-defense — 일반 사기 무고류와 분기. '투자수익 배분 지연을 편취로 고소당함' 편취 고의·변제의사 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-gym-personal-training-guidance-touch-report-track — 일반 추행류와 분기. '헬스장 PT 자세 교정을 빙자해 신체를 추행' PT 자세 교정 추행 신고 판단형 트랙(victim).
// 8. sex-crime-subway-crowded-car-press-touch-report-track — 일반 추행류와 분기. '지하철 혼잡 차량에서 밀착해 추행' 혼잡 차량 밀착 추행 신고 절차형 트랙(victim).
// 9. sex-crime-company-workshop-lodging-touch-report-track — 일반 추행류와 분기. '사내 워크숍 숙소에서 신체를 추행' 워크숍 숙소 추행 신고 판단형 트랙(victim).
// 10. sex-crime-taxi-getoff-body-contact-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. '택시 하차 접촉이 추행으로 고소' 추행 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch117FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-luxury-watch-fake-authentication-guarantee-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-watch-fake-authentication-guarantee-resale-track',
    keyword: '명품시계 가품 정품보증 허위 중고판매 기망 사기',
    questionKeyword: '중고 거래·명품 커뮤니티에서 판매자가 ‘정품이 확실하다, 정품 보증서·구매 영수증도 있고 감정도 받았다’며 정품임을 거듭 강조해, 믿고 시세에 가깝게 웃돈까지 얹어 명품시계를 샀어요. 그런데 막상 받아 정식 서비스센터·감정에 맡겨보니 가품이었거나 보증서·감정서가 위조된 것이었어요. 판매자는 ‘나도 정품인 줄 알았다’며 발뺌하다 연락을 끊고 잠적했고, 알고 보니 같은 사람이 여러 명에게 같은 방식으로 가품을 정품이라 속여 판 정황도 보여요. 처음부터 정품을 넘길 의사 없이 가품을 정품보증으로 속여 판 것 같은데, 이런 명품시계 가품 정품보증 허위 중고판매를 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '명품시계 정품보증 허위·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '명품시계 가품 정품보증 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라는 말과 보증서를 믿고 산 명품시계가 가품으로 드러나고 판매자가 잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·명품 커뮤니티·SNS에서 판매자가 ‘정품이 100% 확실하다, 정품 보증서·구매 영수증도 있고 정식 감정도 받았다, 급하게 처분하는 것이라 시세보다 조금 싸게 준다’며 정품임을 거듭 강조해, 명품시계라면 이 정도 값은 당연하다는 생각으로 시세에 가깝게 웃돈까지 얹어 시계를 산 분의 상황입니다. 그런데 막상 받은 시계를 정식 서비스센터·전문 감정에 맡겨보니 정교하게 만든 가품이었거나, 함께 건네받은 보증서·감정서·시리얼조차 위조·도용된 것이어서, 정품 값을 치르고도 실제로는 가품을 손에 쥐게 되어 막막하실 거예요. 판매자에게 감정 결과를 들이대며 따지면 ‘나도 정품인 줄 알고 넘겨받아 팔았을 뿐이다’라며 책임을 미루다 점점 연락을 피하고 계정을 닫아 잠적하며, 알고 보니 같은 판매자가 비슷하게 정품이라 속여 여러 명에게 가품을 판 정황까지 보이면 단순 거래 착오가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 정품을 넘길 의사 없이, 또는 가품임을 알면서도 정품 보증서를 앞세워 정품인 것처럼 속여 대금을 받은 정황이면 단순 하자 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품을 정품이라 속이고 위조 보증서를 앞세워 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 다수의 피해자에 대하여 각각 기망행위를 하여 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 피해자별로 독립한 사기죄가 성립하나, 피해법익이 동일하다고 평가될 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 기망에 의한 편취 성립과 여러 피해자 사이의 죄수 관계를 가려 다툴 여지가 있습니다. 정품 인식·인도 의사 결여 + 위조 보증서·정품 강조 + 발뺌·잠적 결합은 ‘정품보증 허위 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·위조·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명품시계 가품 정품보증 허위 중고판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·진위·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 정품 강조 대화·판매글·보증서·결제·송금 내역 정리.</li>\n<li><strong>② 가품·위조·기망 입증</strong> — 정식 감정·서비스센터로 가품·보증서 위조 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 정품 값으로 지급한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자 다툼과 달리, 가품임을 알면서 또는 정품을 넘길 의사 없이 위조 보증서로 정품인 것처럼 속였는지가 판단의 분기점입니다. 정품을 강조한 대화와 보증서, 정식 감정 결과, 발뺌·잠적 정황과 같은 판매자의 반복 판매를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 정품 강조 대화·판매글·보증서·결제·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 진위·위조 확인 (즉시)</strong> — 정식 서비스센터·전문 감정으로 가품 여부와 보증서·시리얼 위조를 확보.</li>\n<li><strong>3단계 — 지급정지·계약 해제 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계약 해제·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명품시계 가품 정품보증 허위 중고판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·진위·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정품 강조 판매글·대화 캡처 (거래 조건)</strong></li>\n<li><strong>정품 보증서·구매 영수증·감정서 사본 (계약 내용)</strong></li>\n<li><strong>시계 대금·웃돈·송금 내역 (피해 금액)</strong></li>\n<li><strong>정식 서비스센터·전문 감정 결과 (가품 입증)</strong></li>\n<li><strong>보증서·시리얼 위조·도용 확인 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정식 서비스센터·전문 감정으로 가품 여부를 확정하고, 함께 받은 보증서·감정서·시리얼이 위조·도용인지 확인해 판매자가 강조한 정품 대화와 대비하면 정품보증 허위 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 정품이라 속여 판 흔적을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 여부</strong> — 실제로 가품이고 보증서가 위조인지.</li>\n<li><strong>정품 인식·기망</strong> — 가품임을 알면서 정품이라 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 대금만 노렸는지.</li>\n<li><strong>편취액</strong> — 정품 값으로 지급한 대금이 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (명품·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자에 대한 기망 편취와 사기죄의 죄수',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에 대하여 각각 기망행위를 하여 각 피해자로부터 재물을 편취한 경우에는 범의가 단일하고 범행방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이므로 이를 포괄일죄로 파악할 수 없고 피해자별로 독립한 사기죄가 성립하나, 피해자들의 피해법익이 동일하다고 볼 수 있는 사정이 있는 경우에는 이들에 대한 사기죄를 포괄하여 일죄로 볼 수 있다고 보았습니다. 그리하여 부부인 피해자들에게 토지를 매수·분양해 원금과 수익금을 지급하겠다고 기망한 후 공동재산을 매도해 마련한 돈을 송금받아 편취한 사안에서, 기망행위의 공통성, 재산 교부에 관한 의사결정의 공통성, 재산의 형성·유지 과정 등 모든 사정을 고려하면 피해법익이 동일하다고 평가될 수 있어 포괄일죄를 구성한다고 판시했습니다. 정품 보증서를 앞세워 가품 명품시계를 정품이라 속여 여러 사람에게 판 사안을 살펴볼 때에도, 기망에 의한 편취 성립과 피해자별 죄수 관계를 기준으로 가려 검토해볼 수 있습니다.',
        takeaway: '정품 인식·인도 의사 결여 + 위조 보증서·정품 강조 + 발뺌·잠적 결합 시 정품보증 허위 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 정품인 줄 알았다는데도 사기인가요?',
        answer:
          '<strong>가품임을 알면서 정품이라 속였는지가 핵심인 영역입니다.</strong> 정품 강조 대화와 감정 결과를 대비하세요.',
      },
      {
        question: '가품·위조 보증서인 걸 어떻게 입증하나요?',
        answer:
          '<strong>정식 서비스센터·전문 감정이 핵심 단서인 영역입니다.</strong> 감정 결과와 보증서·시리얼 위조를 확보하세요.',
      },
      {
        question: '감정서까지 받았는데도 다툴 수 있나요?',
        answer:
          '<strong>감정서 자체의 위조·도용을 다투는 영역입니다.</strong> 발급처 조회와 정식 감정을 함께 정리하세요.',
      },
      {
        question: '웃돈까지 냈는데 다 피해로 보나요?',
        answer:
          '<strong>정품 값으로 지급한 대금을 편취액으로 다투는 영역입니다.</strong> 시세·결제·송금 내역을 정리하세요.',
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
      { label: '중고 명품백 가품 인증 판매 추적', href: '/guide/fraud/fraud-used-luxury-bag-fake-authentication-resale-track' },
      { label: '중고 명품 가짜 보증서 잠적 추적', href: '/guide/fraud/fraud-secondhand-luxury-fake-guarantee-cert-vanish-track' },
      { label: '중고 명품시계 진위 조작 추적', href: '/guide/fraud/fraud-secondhand-luxury-watch-fake-authenticity-track' },
      { label: '중고 명품시계 가품 바꿔치기 추적', href: '/guide/fraud/fraud-secondhand-luxury-watch-fake-swap-track' },
    ],
  },

  // ─── 2. fraud-rental-item-deposit-nonreturn-lease-scam-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-item-deposit-nonreturn-lease-scam-track',
    keyword: '렌탈 물품 보증금 미반환 임대 사칭 기망 사기',
    questionKeyword: '카메라·명품·가전·장비 등을 단기로 빌려주는 렌탈 업체라며 ‘물품 보증금만 예치하면 대여해준다, 반납하면 보증금은 전액 돌려준다’고 해서 믿고 보증금을 보냈어요. 그런데 물품은 제대로 오지 않거나 하자품이었고, 반납한 뒤에도 이런저런 핑계로 보증금을 돌려주지 않았어요. 환불을 요구하니 ‘곧 처리된다’며 미루다 결국 연락을 끊고 잠적했고, 알고 보니 정식 렌탈 업체가 아니라 임대를 사칭해 보증금만 챙긴 정황이었어요. 같은 업체에서 여러 사람이 똑같이 보증금을 못 받았어요. 이런 렌탈 물품 보증금 미반환 임대 사칭 기망을 사기로 신고하고 보증금을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '렌탈 임대 사칭 보증금 미반환·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '렌탈 보증금 미반환 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '반납하면 돌려준다던 렌탈 보증금을 업체가 잠적하며 떼먹어 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「카메라·촬영장비·명품·가전·공구 등을 단기로 빌려준다는 렌탈 업체가 ‘물품 보증금만 예치하면 바로 대여해준다, 반납만 하면 보증금은 전액 그대로 돌려준다’며 정식 임대 서비스인 것처럼 안내해, 필요한 물품을 잠깐 빌리려는 마음으로 적지 않은 보증금을 계좌로 보낸 분의 상황입니다. 그런데 막상 받은 물품은 약속과 달리 오지 않거나 하자·다른 물건이었고, 정상적으로 반납했는데도 ‘점검이 남았다, 파손이 의심된다, 정산 중이다’며 이런저런 핑계로 보증금 반환을 미뤄, 물품도 제대로 쓰지 못한 채 보증금만 묶이게 되어 막막하실 거예요. 환불을 재촉하면 ‘이번 주 안에 꼭 처리된다’며 차일피일 미루다 끝내 전화·메신저 연락을 끊고 잠적하고, 뒤늦게 확인해보니 정식 사업자가 아니라 임대를 사칭해 보증금만 받아 챙긴 정황이었으며, 같은 업체에서 물품을 빌린 다른 사람들도 똑같이 보증금을 돌려받지 못했다면 단순 정산 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 보증금을 돌려줄 의사나 정상 대여 능력 없이 임대를 사칭해 보증금만 받은 정황이면 단순 계약 다툼으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 보증금을 돌려줄 의사 없이 임대를 사칭해 보증금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우 진정한 피해자를 가려 유죄로 인정해야 하고, 기망으로 재산상 손해를 야기하는 처분에 갈음하는 행위가 있으면 사기죄의 처분행위로 평가된다고 본 사례 흐름이 있는 영역으로, 누구의 어떤 처분으로 어떤 편취가 이뤄졌는지를 가려 다툴 여지가 있습니다. 보증금 반환 의사 결여 + 임대 사칭 + 반환 거부·잠적 결합은 ‘임대 사칭 보증금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 임대 사칭·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 렌탈 물품 보증금 미반환 임대 사칭 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·사칭·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 보증금 예치 안내·대여 약정·송금 내역 정리.</li>\n<li><strong>② 임대 사칭·기망 입증</strong> — 사업자 실재 여부·반환 약속·반환 거부 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 예치한 보증금 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 정산 지연과 달리, 보증금을 돌려줄 의사나 정상 대여 능력 없이 임대를 사칭해 보증금만 받았는지가 판단의 분기점입니다. 반환 약속 대화와 사업자 실재 여부, 반환 거부·잠적 정황, 다른 이용자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 보증금 예치 안내·대여 약정·송금·문의 대화를 캡처 보존.</li>\n<li><strong>2단계 — 사칭·기망 입증 (즉시)</strong> — 사업자등록·상호·연락처 실재 여부와 반환 거부·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 보증금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">렌탈 물품 보증금 미반환 임대 사칭 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·사칭·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>보증금 예치 안내·광고 캡처 (거래 조건)</strong></li>\n<li><strong>대여 약정·반환 약속 대화 (계약 내용)</strong></li>\n<li><strong>보증금·대여료·송금 내역 (피해 금액)</strong></li>\n<li><strong>사업자등록·상호·연락처 실재 여부 자료</strong></li>\n<li><strong>물품 미인도·하자·반납 확인 자료</strong></li>\n<li><strong>업체·담당자·계좌 정보</strong></li>\n<li><strong>반환 요청·거부 대화·동일 피해 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증금 예치·반환 약속 대화와 송금 내역을 정리하고, 표시된 사업자등록·상호·연락처가 실재하는지 확인해 반환 거부·잠적 흐름과 대비하면 임대를 사칭해 보증금만 받았는지를 다투는 데 도움이 됩니다. 같은 업체에서 보증금을 떼인 다른 이용자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대 사칭</strong> — 정식 사업자·대여 능력이 실재했는지.</li>\n<li><strong>반환 의사</strong> — 보증금을 돌려줄 의사가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 정산 지연인지 처음부터 보증금만 노렸는지.</li>\n<li><strong>편취액</strong> — 예치한 보증금이 피해액인지.</li>\n<li><strong>업체 특정</strong> — 상호·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (렌탈·보증금 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 진정한 피해자 특정과 처분행위',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우에는 공소사실의 동일성을 해하지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 공소장변경 없이 직권으로 진정한 피해자를 적시하여 유죄로 인정하여야 한다고 보았습니다. 나아가 허위의 근저당권자가 집행법원을 기망하여 원인무효인 근저당권에 기해 임의경매를 신청하고 배당금을 지급받은 경우, 집행법원의 배당표 작성과 이에 따른 배당금 교부행위는 매수인에 대한 관계에서 그의 재산을 처분하여 직접 재산상 손해를 야기하는 행위로서 매수인의 처분행위에 갈음하는 내용과 효력을 가진다고 판시했습니다. 렌탈 임대를 사칭해 보증금을 받고 반환하지 않은 사안을 살펴볼 때에도, 누구의 어떤 처분으로 재산상 손해가 발생했고 진정한 피해자가 누구인지를 기준으로 기망에 의한 편취를 가려 검토해볼 수 있습니다.',
        takeaway: '보증금 반환 의사 결여 + 임대 사칭 + 반환 거부·잠적 결합 시 임대 사칭 보증금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '정산 중이라며 미루는데도 사기인가요?',
        answer:
          '<strong>보증금을 돌려줄 의사가 있었는지가 핵심인 영역입니다.</strong> 반환 약속 대화와 잠적 정황을 대비하세요.',
      },
      {
        question: '임대 사칭인 걸 어떻게 밝히나요?',
        answer:
          '<strong>사업자 실재 여부와 반환 거부가 단서인 영역입니다.</strong> 사업자등록·상호·연락처 실재를 확인하세요.',
      },
      {
        question: '계좌이체로 보증금을 냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 이체 내역과 상대 계좌 정보를 정리하세요.',
      },
      {
        question: '물품을 잠깐이라도 썼는데 피해로 보나요?',
        answer:
          '<strong>예치한 보증금 반환을 다투는 영역입니다.</strong> 반납 확인과 반환 약속·거부 대화를 정리하세요.',
      },
      {
        question: '같은 업체에 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 후기·거래 시점·미반환 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '렌탈 보증금 사기 예방', href: '/guide/fraud/fraud-rental-deposit-scam-prevention' },
      { label: '공사 보증금 사기 회수', href: '/guide/fraud/fraud-construction-deposit-scam-recovery' },
      { label: '취업 채용 보증금 사기', href: '/guide/fraud/fraud-employment-job-offer-deposit-scam' },
      { label: '허위 렌탈 매물 선입금 추적', href: '/guide/fraud/fraud-fake-rental-listing-deposit-upfront-track' },
    ],
  },

  // ─── 3. fraud-overseas-purchasing-agent-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-purchasing-agent-nondelivery-track',
    keyword: '해외구매대행 선결제 물품 미배송 기망 사기',
    questionKeyword: 'SNS·카페·오픈채팅에서 해외 명품·한정판·인기 상품을 정가보다 싸게 대신 사다 준다는 해외구매대행이라며 ‘물량이 확보돼 있으니 선결제만 하면 2~3주면 받는다’고 해서 믿고 대금을 먼저 보냈어요. 그런데 약속한 날이 지나도 물품은 오지 않고, 송장은 가짜이거나 계속 ‘통관 지연·현지 품절’이라며 미뤘어요. 환불을 요구하니 연락을 끊고 잠적했고, 알고 보니 같은 대행자가 여러 명에게 선결제만 받고 물건을 보내지 않은 정황이었어요. 처음부터 물건을 보낼 의사 없이 선결제만 받은 것 같은데, 이런 해외구매대행 선결제 물품 미배송 기망을 사기로 신고하고 결제한 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '해외구매대행 선결제 미배송·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '해외구매대행 미배송 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '선결제만 하면 보내준다던 해외구매대행 물품이 오지 않고 대행자가 잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「인스타그램·네이버 카페·오픈채팅에서 해외 명품·한정판·인기 브랜드 상품을 현지에서 대신 사다 준다는 해외구매대행이 ‘이미 물량을 확보해 뒀으니 선결제만 하면 2~3주 안에 정품을 받는다, 대행이라 정가보다 크게 싸다’며 안내해, 원하는 상품을 싸게 구할 좋은 기회라는 생각으로 대금을 먼저 보낸 분의 상황입니다. 그런데 약속한 배송 날짜가 지나도 물품은 오지 않고, 배송 조회를 하면 존재하지 않는 가짜 송장이거나 ‘현지 품절·통관 지연·재입고 대기’라는 말만 반복돼, 물건은커녕 보낸 대금만 묶이게 되어 막막하실 거예요. 환불을 요구하면 ‘곧 발송된다, 다음 주면 통관된다’며 차일피일 미루다, 끝내 계정·채팅방을 닫고 연락을 끊어 잠적하고, 뒤늦게 확인해보니 같은 대행자가 여러 사람에게 선결제만 받고 물건을 보내지 않은 정황까지 보이면 단순 배송 지연이 아닐 수 있어 더 답답하셨을 거예요. 처음부터 물건을 사다 줄 의사나 능력 없이 대행을 앞세워 선결제만 받은 정황이면 단순 거래 지연으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 물건을 사다 줄 의사 없이 대행을 앞세워 선결제만 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 피기망자가 처분행위의 의미나 결과를 미처 인식하지 못하였더라도 착오에 빠진 상태에서 재산상 손해를 초래하는 작위 또는 부작위를 하였다면 그 행위가 사기죄의 처분행위에 해당하고 그에 상응하는 처분의사가 인정된다고 본 사례 흐름이 있는 영역으로, 선결제라는 처분이 기망에 의한 것인지를 가려 다툴 여지가 있습니다. 배송 의사·능력 결여 + 대행 앞세운 유인 + 미배송·잠적 결합은 ‘해외구매대행 미배송 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 미배송·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외구매대행 선결제 물품 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미배송·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 대행 안내·주문·선결제·송금 내역 정리.</li>\n<li><strong>② 미배송·기망 입증</strong> — 가짜 송장·미배송·품절 반복 정황 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 선결제·송금한 대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·카드 항변·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 물건을 사다 줄 의사·능력 없이 대행을 앞세워 선결제만 받았는지가 판단의 분기점입니다. 대행 안내와 결제 내역, 가짜 송장·품절 반복과 잠적 정황, 다른 이용자의 동일 미배송 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 대행 안내·주문·선결제·송금·문의 대화를 캡처 보존.</li>\n<li><strong>2단계 — 미배송·기망 입증 (즉시)</strong> — 가짜 송장·미배송·품절 반복, 대행자 정보와 잠적 정황을 확보.</li>\n<li><strong>3단계 — 지급정지·항변 (병행)</strong> — 계좌 지급정지를 112·은행에 요청하고 카드 결제면 항변권을 신청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·카드 취소·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외구매대행 선결제 물품 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>대행 안내·홍보·상품 페이지 캡처 (거래 조건)</strong></li>\n<li><strong>주문·대행 약정·배송 약속 대화 (계약 내용)</strong></li>\n<li><strong>선결제·계좌이체·카드 결제 내역 (피해 금액)</strong></li>\n<li><strong>가짜 송장·미배송·배송 조회 자료 (기망 입증)</strong></li>\n<li><strong>품절·통관 지연 반복·잠적 대화 기록</strong></li>\n<li><strong>대행자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>다른 이용자의 동일 미배송 피해 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대행 안내·주문·선결제 내역과 가짜 송장·미배송 정황을 정리하고, 배송 약속과 품절·통관 지연 반복의 흐름을 시간순으로 대비하면 물건을 사다 줄 의사 없이 선결제만 받았는지를 다투는 데 도움이 됩니다. 카드로 결제했다면 항변권 시한을 챙기고, 같은 대행자에게 미배송을 겪은 다른 이용자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>배송 의사·능력</strong> — 선결제 당시 물건을 사다 줄 의사·능력이 있었는지.</li>\n<li><strong>대행 유인·기망</strong> — 물량 확보·저가를 앞세워 선결제를 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 배송 지연인지 처음부터 선결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 선결제·송금한 대금이 피해액인지.</li>\n<li><strong>대행자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (해외구매대행·미배송 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 처분행위와 처분의사',
        summary:
          '대법원 2016도13362(대법원, 2017.02.16 선고) 영역에서 법원은 피기망자의 처분의사는 기망행위로 착오에 빠진 상태에서 형성된 하자 있는 의사이므로 불완전하거나 결함이 있을 수밖에 없고, 처분행위의 법적 의미나 경제적 효과에 대한 인식과 실제 초래되는 결과가 일치하지 않는 것이 오히려 사기죄의 본질적 속성이라고 보았습니다. 그리하여 처분의사는 착오에 빠진 피기망자가 어떤 행위를 한다는 인식이 있으면 충분하고 그 행위가 가져오는 결과에 대한 인식까지 필요한 것은 아니며, 피기망자가 기망당한 결과 자신의 작위 또는 부작위가 갖는 의미를 제대로 인식하지 못하여 그 결과를 인식하지 못하였더라도 착오 상태에서 재산상 손해를 초래하는 행위를 하였다면 처분행위와 그에 상응하는 처분의사가 있다고 보아야 한다고 판시했습니다. 해외구매대행을 앞세워 선결제만 받고 물품을 보내지 않은 사안을 살펴볼 때에도, 선결제라는 처분이 기망에 의한 착오에서 이루어진 것인지를 기준으로 사기죄 성립을 가려 검토해볼 수 있습니다.',
        takeaway: '배송 의사·능력 결여 + 대행 앞세운 유인 + 미배송·잠적 결합 시 해외구매대행 미배송 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '통관이 지연된 것뿐이라는데도 사기인가요?',
        answer:
          '<strong>물건을 사다 줄 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 대행 안내와 가짜 송장·미배송 정황을 대비하세요.',
      },
      {
        question: '가짜 대행인 걸 어떻게 밝히나요?',
        answer:
          '<strong>가짜 송장·품절 반복과 잠적이 단서인 영역입니다.</strong> 배송 조회·연락처 실재 여부를 확인하세요.',
      },
      {
        question: '계좌이체로 선결제했는데 돌려받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환을 검토할 수 있는 영역입니다.</strong> 이체 내역과 상대 계좌 정보를 정리하세요.',
      },
      {
        question: '카드로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 항변권으로 결제를 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '같은 대행자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>다수의 동일 미배송은 편취 다툼의 출발점인 영역입니다.</strong> 후기·결제 시점·미배송 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외구매대행 미배송 추적', href: '/guide/fraud/fraud-overseas-purchase-agent-nondelivery-track' },
      { label: '해외대행 코인결제 잠적 추적', href: '/guide/fraud/fraud-overseas-agent-crypto-payment-vanish-track' },
      { label: '해외대행 이중청구 잠적 추적', href: '/guide/fraud/fraud-overseas-buying-agent-double-billing-disappear-track' },
      { label: '해외취업 알선 비자비 미이행 추적', href: '/guide/fraud/fraud-overseas-job-placement-visa-fee-nondelivery-track' },
    ],
  },

  // ─── 4. fraud-coin-reading-room-paid-pick-loss-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-coin-reading-room-paid-pick-loss-lure-track',
    keyword: '코인 리딩방 유료 종목추천 손실 유인 기망 사기',
    questionKeyword: '오픈채팅·텔레그램 코인 리딩방에서 ‘전문가 분석으로 수익률이 검증됐다, 유료 회원이 되면 확실한 종목만 추천한다’며 이용료·VIP 가입비를 받고, 지정한 코인을 지금 사라고 콕 집어줬어요. 추천대로 매수했는데 정작 시세는 반대로 움직여 큰 손실을 봤고, 알고 보니 리딩방이 미리 사둔 코인을 회원들에게 사게 해 띄우고 자기들은 팔고 빠지는 구조였어요. 환불·항의하니 강퇴하고 방을 닫고 잠적했어요. 같은 방 회원 상당수가 똑같이 손실을 봤어요. 이런 코인 리딩방 유료 종목추천 손실 유인 기망을 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '코인 리딩방 유료추천 유인·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인 리딩방 종목추천 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '수익이 검증됐다는 코인 리딩방 유료 추천을 믿었다가 손실만 보고 방이 잠적해 막막하다면, 형법 제347조 사기·부정거래 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「오픈채팅·텔레그램·카페의 코인 리딩방·투자 채널이 ‘전문가 분석으로 수익률이 검증됐다, 유료 회원·VIP가 되면 확실한 종목만 콕 집어 추천한다, 지금이 마지막 저점 매수 기회다’라며 이용료·가입비를 받고, 특정 코인을 지정해 지금 매수하라고 추천해, 검증된 수익을 얻을 수 있다는 기대로 이용료를 내고 추천대로 코인을 산 분의 상황입니다. 그런데 추천대로 매수하자 정작 시세는 반대로 움직여 큰 손실을 보았고, 알고 보니 리딩방 운영진이 미리 사둔 코인을 회원들에게 사게 해 인위적으로 시세를 띄운 뒤 자신들은 고점에 팔고 빠지는 이른바 ‘펌프 앤드 덤프’ 구조여서, 추천이 회원의 수익이 아니라 운영진의 매도 물량을 받아주는 통로였음을 뒤늦게 알게 되어 막막하실 거예요. 이용료 환불·손실 항의를 하면 곧바로 강제 퇴장시키고 채팅방·계정을 닫아 잠적하며, 같은 방의 다른 회원 상당수도 똑같이 추천 종목에서 손실을 보았다면 단순 투자 실패가 아닐 수 있어 더 답답하셨을 거예요. 처음부터 시세 조작·물량 떠넘기기를 감춘 채 검증된 수익인 것처럼 속여 이용료를 받고 매수를 유인한 정황이면 단순 시세 하락으로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 시세 조작·물량 떠넘기기를 감추고 검증된 수익이라 속여 이용료를 받고 매수를 유인했다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 공소사실이나 범죄사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 함께 고려해 판단하고, 건축·분양할 의사나 능력 없이 피해자를 기망하여 분양대금을 편취하였다는 사기 공소사실의 성부를 다른 죄책과 구별해 살펴야 한다고 본 사례 흐름이 있는 영역으로, 어떤 기망으로 어떤 금원을 편취했는지를 다른 정황과 구별해 다툴 여지가 있습니다. 검증 수익 가장 + 시세 조작·물량 떠넘기기 + 이용료·매수 유인 결합은 ‘유료추천 손실 유인 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·이용 정리 ② 유인·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 리딩방 유료 종목추천 손실 유인 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·유인·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·이용 정리</strong> — 수익 검증 광고·유료 가입·이용료 결제·추천 내역 정리.</li>\n<li><strong>② 유인·기망 입증</strong> — 시세 조작·물량 떠넘기기·강퇴·잠적 정황 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 이용료·가입비 등 교부 금액과 추천 손실 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 실패와 달리, 시세 조작·물량 떠넘기기를 감추고 검증된 수익이라 속여 이용료를 받고 매수를 유인했는지가 판단의 분기점입니다. 수익 검증 광고와 유료 결제, 추천 시점의 시세 흐름과 강퇴·잠적 정황, 다른 회원의 동일 손실을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·이용 자료 보존 (즉시)</strong> — 수익 검증 광고·유료 가입·이용료 결제·종목추천·매수 내역을 캡처 보존.</li>\n<li><strong>2단계 — 유인·기망 입증 (즉시)</strong> — 추천 시점의 시세 흐름, 시세 조작·물량 떠넘기기·강퇴·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·신고 (병행)</strong> — 이용료 송금 계좌 지급정지를 112·은행에 요청하고 운영진 정보를 정리.</li>\n<li><strong>4단계 — 경찰·금감원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 리딩방 유료 종목추천 손실 유인 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·유인·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수익 검증·전문가 홍보 캡처 (거래 조건)</strong></li>\n<li><strong>유료 가입·VIP 약정 안내 (계약 내용)</strong></li>\n<li><strong>이용료·가입비 결제·송금 내역 (피해 금액)</strong></li>\n<li><strong>종목추천·매수 지시·매수 시점 자료</strong></li>\n<li><strong>추천 시점 시세·조작·물량 떠넘기기 정황</strong></li>\n<li><strong>운영진·리딩방·계좌·닉네임 정보</strong></li>\n<li><strong>강퇴·잠적·다른 회원 동일 손실 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수익이 검증됐다는 홍보와 유료 가입 결제 내역, 종목추천 시점과 실제 시세 흐름을 대비하면 검증된 수익이 아니라 물량을 떠넘기려 매수를 유인했는지를 다투는 데 도움이 됩니다. 항의하자 강퇴·잠적한 정황과 같은 방에서 동일하게 손실을 본 다른 회원을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수익 검증 허위</strong> — 검증된 수익이라는 홍보가 사실이었는지.</li>\n<li><strong>시세 조작·유인</strong> — 물량 떠넘기기·시세 조작으로 매수를 유인했는지.</li>\n<li><strong>편취 범의</strong> — 단순 투자 실패인지 처음부터 이용료·물량을 노렸는지.</li>\n<li><strong>편취액</strong> — 이용료·가입비와 추천 손실이 피해액인지.</li>\n<li><strong>운영진 특정</strong> — 리딩방·계좌·닉네임으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사투자자문·리딩방 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 공소사실의 동일성과 편취 성부의 판단',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실이나 범죄사실의 동일성 여부는 사실의 동일성이 갖는 법률적 기능을 염두에 두고 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 고려하여 판단하여야 한다고 보았습니다. 그리하여 아파트 사전분양으로 인한 구 주택건설촉진법 위반죄의 범죄사실과 아파트를 건축·분양할 의사나 능력 없이 피해자들을 기망하여 분양대금을 편취하였다는 사기 공소사실은 행위 태양이나 보호법익에 비추어 동일하다고 보기 어렵고 1죄 내지 상상적 경합관계에 있다고 볼 수도 없다고 판시했습니다. 또한 피고인의 방어권 행사에 실질적 불이익이 없는 범위에서는 공소장변경 없이 다르게 사실을 인정하더라도 불고불리 원칙에 위배되지 않는다고 하였습니다. 검증된 수익이라 속여 이용료를 받고 시세를 조작해 매수를 유인한 코인 리딩방 사안을 살펴볼 때에도, 어떤 기망으로 어떤 금원을 편취했는지를 다른 정황과 구별해 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '검증 수익 가장 + 시세 조작·물량 떠넘기기 + 이용료·매수 유인 결합 시 유료추천 손실 유인 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '투자는 원래 손실도 있는데도 사기인가요?',
        answer:
          '<strong>검증된 수익이라 속이고 시세 조작·물량 떠넘기기를 감췄는지가 핵심인 영역입니다.</strong> 홍보와 추천 시점 시세를 대비하세요.',
      },
      {
        question: '시세 조작·물량 떠넘기기를 어떻게 밝히나요?',
        answer:
          '<strong>추천 시점 시세 흐름과 운영진 매도 정황이 단서인 영역입니다.</strong> 종목추천·매수 시점과 시세 자료를 정리하세요.',
      },
      {
        question: '이용료만 냈는데 손실까지 피해로 보나요?',
        answer:
          '<strong>이용료·가입비와 추천 손실을 함께 다투는 영역입니다.</strong> 결제 내역과 추천 손실을 구분해 정리하세요.',
      },
      {
        question: '리딩방이 방을 닫고 잠적했는데 신고가 되나요?',
        answer:
          '<strong>이용료 송금·계좌·연락 자료로 신고를 검토할 수 있는 영역입니다.</strong> 결제·대화·계좌를 모아 접수하세요.',
      },
      {
        question: '같은 방 회원 상당수가 손실을 본 것 같아요.',
        answer:
          '<strong>다수의 동일 손실은 편취 다툼의 출발점인 영역입니다.</strong> 회원 채팅·추천 시점·손실 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '직장동료 코인투자 손실 분쟁', href: '/guide/fraud/fraud-coworker-coin-investment-loss-dispute' },
      { label: '연애 빙자 코인투자 유인 추적', href: '/guide/fraud/fraud-romance-pretext-coin-investment-lure-track' },
      { label: '주식 리딩방 손실 보장 추적', href: '/guide/fraud/fraud-stock-leading-room-loss-guarantee-track' },
      { label: '동업 투자금 손실 무고 방어', href: '/guide/fraud/fraud-business-partner-capital-loss-falsely-accused-defense' },
    ],
  },

  // ─── 5. fraud-membership-gym-prepaid-sudden-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-gym-prepaid-sudden-closure-track',
    keyword: '헬스장 회원권 선불 결제 갑작스런 폐업 기망 사기',
    questionKeyword: '헬스장이 ‘장기로 끊으면 크게 할인된다, 곧 시설도 늘린다’며 1년·2년 장기 회원권과 PT를 선불로 권해서 목돈을 미리 결제했어요. 그런데 얼마 지나지 않아 어느 날 갑자기 문을 닫고 관장·업주는 연락이 끊겼어요. 알고 보니 폐업이 예정돼 이미 임대료·직원 급여도 밀린 상태였는데도 그 사실을 숨기고 장기 회원을 계속 모집해 선불금만 챙긴 정황이었어요. 환불 안내도 없이 사라졌고, 같은 시기에 등록한 다른 회원들도 똑같이 돈을 못 돌려받았어요. 처음부터 정상 운영할 의사 없이 선불금만 노린 것 같은데, 이런 헬스장 회원권 선불 결제 갑작스런 폐업을 사기로 신고하고 낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 선불 회원권 폐업·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 선불 회원권 폐업 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '장기 할인이라며 선불로 끊은 헬스장이 갑자기 폐업하고 업주가 잠적해 막막하다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·PT샵이 ‘장기로 끊을수록 크게 할인된다, 곧 기구와 시설을 늘릴 예정이다, 지금 등록하면 특별 혜택을 준다’며 1년·2년 장기 회원권이나 다회 PT를 선불로 결제하도록 권해, 오래 다닐 생각으로 목돈을 미리 낸 분의 상황입니다. 그런데 얼마 지나지 않아 어느 날 갑자기 헬스장이 문을 닫고 관장·업주는 전화·메신저 연락이 끊겨, 남은 이용 기간은 물론 선불로 낸 돈까지 고스란히 묶이게 되어 막막하실 거예요. 뒤늦게 알아보니 이미 임대료·직원 급여가 밀리고 폐업이 예정돼 있었는데도 그 사정을 숨긴 채 ‘시설을 늘린다’며 장기 회원을 계속 모집해 선불금만 챙긴 정황이었고, 환불 안내나 양도 조치도 없이 사라졌으며, 같은 시기에 등록한 다른 회원들도 똑같이 돈을 돌려받지 못했다면 단순 폐업 사고가 아닐 수 있어 더 답답하셨을 거예요. 정상적으로 운영하거나 환불·양도할 의사·능력 없이 폐업이 임박한 사정을 숨기고 장기 선불금을 받은 정황이면 단순 경영 실패로 보기 어렵습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 폐업이 임박한 사정을 숨기고 정상 운영할 것처럼 장기 선불금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 다만 판례는 사기죄의 성립 여부는 기망행위가 있었던 행위 당시를 기준으로 판단하여야 하고, 재물 교부 당시 정상 운영·이행 의사가 있었다면 이후 사정 변경으로 이행하지 못하였더라도 곧바로 사기죄가 되는 것은 아니라는 취지의 사례 흐름이 있는 영역으로, 선불금을 받을 당시 폐업이 임박한 사정을 알고 숨겼는지, 정상 운영 의사가 있었는지를 가려 다툴 여지가 있습니다. 폐업 임박 사정 인식·묵비 + 장기 할인 강조 + 잠적·환불 거부 결합은 ‘선불 회원권 폐업 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업 임박·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 회원권 선불 결제 갑작스런 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 장기 할인 권유·회원권 계약·선불 결제 내역 정리.</li>\n<li><strong>② 폐업 임박·기망 입증</strong> — 등록 시점 임대료·급여 체납·폐업 예정 사정 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 미이용 기간 상당의 선불금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 계좌 지급정지·카드 항변·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영 실패와 달리, 폐업이 임박한 사정을 알고 숨긴 채 정상 운영할 것처럼 장기 선불금을 받았는지가 판단의 분기점입니다. 장기 할인 권유와 결제 내역, 등록 시점의 체납·폐업 예정 정황과 잠적·환불 거부, 다른 회원의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 장기 할인 권유·회원권 계약서·선불 결제·문의 대화를 캡처 보존.</li>\n<li><strong>2단계 — 폐업 임박·기망 입증 (즉시)</strong> — 등록 시점 임대료·급여 체납, 폐업 예정 정황, 잠적·환불 거부를 확보.</li>\n<li><strong>3단계 — 지급정지·항변 (병행)</strong> — 계좌 지급정지를 112·은행에 요청하고 카드 결제면 항변권을 신청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·카드 취소·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 회원권 선불 결제 갑작스런 폐업 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>장기 할인·시설 확충 홍보 캡처 (거래 조건)</strong></li>\n<li><strong>회원권·PT 계약서·이용 약관 (계약 내용)</strong></li>\n<li><strong>선불 결제·카드·계좌이체 내역 (피해 금액)</strong></li>\n<li><strong>등록 시점 체납·폐업 예정 정황 자료 (기망 입증)</strong></li>\n<li><strong>폐업·잠적·환불 거부 확인 자료</strong></li>\n<li><strong>헬스장·업주·관장·계좌 정보</strong></li>\n<li><strong>같은 시기 등록 회원의 동일 피해 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장기 할인·시설 확충 홍보와 선불 결제 내역을 정리하고, 등록 시점에 이미 임대료·급여 체납이나 폐업 준비가 있었는지 확인해 정상 운영을 가장한 정황과 대비하면 폐업 임박 사정을 숨기고 선불금만 받았는지를 다투는 데 도움이 됩니다. 카드로 결제했다면 항변권 시한을 챙기고, 같은 시기 등록해 돈을 떼인 다른 회원을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 임박 인식</strong> — 등록 시점 폐업이 임박했음을 알았는지.</li>\n<li><strong>정상 운영 의사</strong> — 선불금을 받을 당시 정상 운영·환불 의사가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 실패인지 처음부터 선불금만 노렸는지.</li>\n<li><strong>편취액</strong> — 미이용 기간 상당의 선불금이 피해액인지.</li>\n<li><strong>업주 특정</strong> — 상호·업주·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·선불 회원권 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 성립의 판단 시점과 기망행위',
        summary:
          '대법원 2015도17452(대법원, 2016.03.24 선고) 영역에서 법원은 피고인이 피해자에게 자동차를 매도하겠다고 하고 이를 양도하면서 매매대금을 받은 뒤 미리 부착해 둔 GPS로 위치를 추적해 자동차를 다시 절취한 사안에서, 피고인이 자동차를 인도하고 소유권이전등록에 필요한 서류를 교부해 피해자가 언제든 이전등록을 마칠 수 있게 된 이상, 나중에 다시 절취할 의사를 가지고 있었더라도 매도 당시 소유권을 이전하여 줄 의사가 없었다고 볼 수 없다고 보았습니다. 그리하여 매도 당시 곧바로 다시 절취할 의사를 숨긴 것을 기망이라고 할 수 없어 매도 당시 기망행위가 없었으므로 사기죄를 인정한 원심에 법리오해의 잘못이 있다고 판시했습니다. 이는 사기죄의 성부가 재물 교부 당시 기망행위가 있었는지를 기준으로 가려진다는 취지로, 장기 선불 회원권을 받은 헬스장 폐업 사안을 살펴볼 때에도 선불금을 받을 당시 폐업이 임박한 사정을 알고 숨겼는지, 정상 운영 의사가 있었는지를 기준으로 사기죄 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '폐업 임박 사정 인식·묵비 + 장기 할인 강조 + 잠적·환불 거부 결합 시 선불 회원권 폐업 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경영이 어려워 폐업한 것뿐이라는데도 사기인가요?',
        answer:
          '<strong>등록 시점에 폐업이 임박했음을 알고 숨겼는지가 핵심인 영역입니다.</strong> 장기 할인 권유와 체납·폐업 정황을 대비하세요.',
      },
      {
        question: '폐업이 예정돼 있었다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>등록 시점 임대료·급여 체납이 단서인 영역입니다.</strong> 등록 시점과 폐업 시점의 사정을 시간순으로 정리하세요.',
      },
      {
        question: '이용을 조금 했는데도 다 피해로 보나요?',
        answer:
          '<strong>미이용 기간 상당의 선불금을 편취액으로 다투는 영역입니다.</strong> 결제·이용 기간·잔여 기간을 정리하세요.',
      },
      {
        question: '카드로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 항변권으로 잔여분 결제를 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '같은 시기에 등록한 회원들이 다 못 받았어요.',
        answer:
          '<strong>다수의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 등록 시점·결제·미환불 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '헬스장 회원권 선불 폐업 추적', href: '/guide/fraud/fraud-gym-membership-prepaid-sudden-closure-track' },
      { label: '헬스장 장기회원권 선불 폐업 추적', href: '/guide/fraud/fraud-gym-longterm-membership-prepaid-closure-track' },
      { label: '헬스장 회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-membership-prepay-sudden-closure-track' },
      { label: '헬스장 PT 선불 폐업 추적', href: '/guide/fraud/fraud-gym-pt-prepaid-sudden-closure-track' },
    ],
  },

  // ─── 6. fraud-profit-distribution-delay-repayment-intent-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-profit-distribution-delay-repayment-intent-falsely-accused-defense',
    keyword: '투자수익 배분 지연 변제 편취 고의 무고 방어',
    questionKeyword: '지인·투자자에게서 사업·투자 자금을 받아 수익이 나면 원금과 수익을 배분하기로 했는데, 사업이 어려워지면서 약속한 시기에 수익 배분과 원금 반환이 늦어졌어요. 저는 자금을 받을 당시 실제로 사업을 진행할 의사와 능력이 있었고 자금도 사업에 썼으며 일부는 변제했는데, 상대가 ‘처음부터 돌려줄 생각 없이 투자금을 편취했다’며 저를 사기로 고소했어요. 배분이 늦어진 건 사업 사정 때문이고 변제 의사도 있는데, 결과가 나빴다는 이유만으로 한순간에 사기 피의자로 몰려 억울해요. 자금 사용 내역과 상환 기록도 있는데, 이렇게 투자수익 배분 지연으로 사기 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '투자수익 배분 지연 편취 고의·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '투자수익 배분 지연 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '사업 사정으로 수익 배분이 늦어졌을 뿐인데 투자금 편취 사기로 고소돼 억울하다면, 형법 제347조 편취 고의 판단과 변제의사·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인이나 투자자로부터 사업·투자 자금을 받으면서 수익이 나면 정해진 시기에 원금과 수익을 배분하기로 약정했는데, 이후 사업이 예상보다 어려워지거나 시장 상황이 나빠지면서 약속한 시기에 수익 배분과 원금 반환이 늦어져, 상대가 ‘처음부터 돌려줄 의사 없이 투자금을 편취했다’며 저를 사기로 고소해 한순간에 사기 피의자로 몰린 분의 상황입니다. 저는 자금을 받을 당시 실제로 사업·투자를 진행할 의사와 능력이 있었고 받은 돈도 실제 사업에 사용했으며 일부는 이미 변제하거나 정산했는데, 결과적으로 배분이 늦어졌다는 사정만으로 편취 고의가 있었던 것처럼 몰려 억울하고 막막하실 거예요. 투자나 동업은 원래 손실·지연 위험이 따르고 상대도 그 위험을 알고 자금을 맡겼는데도, 수익이 늦어졌다는 이유만으로 ‘처음부터 속였다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 자금을 받게 된 경위와 약정 내용, 자금의 실제 사용처, 배분·변제가 늦어진 원인과 그동안의 상환·정산 내역을 차분히 정리해 자금을 받을 당시 사업을 진행할 의사·능력이 있었고 결과를 보장한 것이 아니라는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대가 위험을 인지하고 있었던 정황까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 재물·이익을 받을 당시 상대를 기망하여 편취할 고의가 있어야 하는 영역입니다. 판례는 사기죄의 성립 여부는 행위 당시를 기준으로 판단하여야 하므로, 차주가 돈을 빌릴 당시 변제할 의사와 능력을 가지고 있었다면 그 후 변제하지 못하더라도 이는 민사상 채무불이행에 불과하고 형사상 사기죄가 성립하지 않으며, 대주가 장래의 변제 지체·변제불능 위험을 예상하고 있었거나 충분히 예상할 수 있었던 경우에는 이후 변제하지 못하였다는 사실만으로 편취 범의를 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 자금 수령 당시의 사업·변제 의사와 능력, 자금 사용처, 상대의 위험 인식을 종합해 편취 고의가 인정되는지를 가려 다툴 여지가 있는 영역입니다. 자금 수령 경위·약정 + 실제 사업 사용·상환 + 편취 고의 다툼 결합은 ‘사기 고의 부재·채무불이행 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 약정·경위 정리 ② 자금 사용·상환 ③ 지연 원인 검토 ④ 편취 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 투자수익 배분 지연 편취 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·자금 사용·지연 원인·편취 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정·경위 정리</strong> — 투자·동업 약정, 배분·반환 조건, 위험 고지 정리.</li>\n<li><strong>② 자금 사용·상환</strong> — 자금을 실제 사업에 쓴 내역과 상환·정산 내역 정리.</li>\n<li><strong>③ 지연 원인 검토</strong> — 배분·반환이 늦어진 사업·시장상 객관적 원인 검토.</li>\n<li><strong>④ 편취 고의</strong> — 자금을 받을 당시 사업·변제 의사·능력이 있었는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 자금 사용·상환이 편취 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자금을 받을 당시 편취할 고의가 있었는지(사기), 아니면 사업 사정으로 배분·반환이 늦어진 것인지(채무불이행)가 판단의 분기점입니다. 투자·동업 약정 경위와 자금의 실제 사용처, 지연 원인과 상환·정산 내역, 상대의 위험 인식을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·자금 자료 보존 (즉시)</strong> — 투자·동업 약정, 자금 수령·사용·상환 내역, 위험 고지 대화를 시간순으로 보존.</li>\n<li><strong>2단계 — 사용·상환 정리 (즉시)</strong> — 자금을 실제 사업에 쓴 증빙과 그동안의 배분·상환·정산 내역을 정리.</li>\n<li><strong>3단계 — 편취 고의 검토 (병행)</strong> — 자금 수령 당시 사업·변제 의사·능력, 지연이 사업 사정임을 뒷받침하는 자료를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자수익 배분 지연 편취 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·자금·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자·동업 약정서·배분 조건 자료 (약정 경위)</strong></li>\n<li><strong>자금 수령·입금 내역 (자금 흐름)</strong></li>\n<li><strong>자금의 실제 사업 사용 증빙 (사용처)</strong></li>\n<li><strong>배분·상환·정산 내역 (변제 정황)</strong></li>\n<li><strong>지연 원인 관련 사업·시장 자료 (지연 원인)</strong></li>\n<li><strong>상대의 위험 인지·고지 대화 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투자·동업 약정 경위와 자금을 실제 사업에 쓴 증빙, 그동안의 배분·상환·정산 내역, 배분이 늦어진 사업·시장상 원인을 시간순으로 정리하면 자금을 받을 당시 사업·변제 의사·능력이 있었는지, 아니면 처음부터 편취를 노렸는지를 다투는 데 도움이 됩니다. 결과를 보장한 것이 아니라 위험이 있는 투자였고 상대도 이를 알고 있었다는 정황을 함께 정리해 편취 고의 부재를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 자금을 받을 당시 편취할 고의가 있었는지.</li>\n<li><strong>사업·변제 의사·능력</strong> — 수령 당시 실제 사업·변제 의사·능력이 있었는지.</li>\n<li><strong>자금 사용처</strong> — 받은 자금을 실제 사업에 사용했는지.</li>\n<li><strong>위험 인식</strong> — 상대가 투자·지연 위험을 알고 자금을 맡겼는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용사기의 편취 범의 판단 기준과 채무불이행의 구별',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄가 성립하는지는 그 행위 당시를 기준으로 판단하여야 하므로, 소비대차 거래에서 차주가 돈을 빌릴 당시에는 변제할 의사와 능력을 가지고 있었다면 비록 그 후에 변제하지 않고 있더라도 이는 민사상 채무불이행에 불과하며 형사상 사기죄가 성립하지 않는다고 보았습니다. 나아가 대주와 차주 사이의 인적 관계나 계속적 거래 관계 등에 의하여 대주가 차주의 신용 상태를 인식하고 있어 장래의 변제 지체 또는 변제불능에 대한 위험을 예상하고 있었거나 충분히 예상할 수 있었던 경우에는, 차용 당시 변제의사·능력·차용 조건 등 중요한 사항에 관하여 허위 사실을 말하였다는 등의 다른 사정이 없다면, 차주가 그 후 제대로 변제하지 못하였다는 사실만으로 변제능력에 관하여 대주를 기망하였다거나 편취의 범의가 있었다고 단정할 수 없다고 판시했습니다. 사업 사정으로 투자수익 배분이 늦어져 편취로 고소된 사안을 살펴볼 때에도, 자금 수령 당시의 사업·변제 의사·능력과 상대의 위험 인식을 기준으로 편취 고의를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '자금 수령 경위·약정 + 실제 사업 사용·상환 + 편취 고의 다툼 결합 시 사기 고의 부재·채무불이행 구별 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '수익 배분이 늦어졌다는 이유로 사기가 되나요?',
        answer:
          '<strong>자금을 받을 당시 사업·변제 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 자금 사용처와 지연 원인을 정리하세요.',
      },
      {
        question: '자금을 실제 사업에 썼는데도 사기로 보나요?',
        answer:
          '<strong>자금 사용 내역은 편취 고의를 배척하는 자료가 되는 영역입니다.</strong> 사업 사용 증빙과 상환 내역을 확보하세요.',
      },
      {
        question: '일부만 갚았는데 그것만으로 사기인가요?',
        answer:
          '<strong>변제 지연과 편취 고의는 구별되는 영역입니다.</strong> 상환·정산 내역과 지연 원인을 함께 정리하세요.',
      },
      {
        question: '투자 위험을 상대가 알고 있었다는 게 도움이 되나요?',
        answer:
          '<strong>상대의 위험 인식은 편취 범의 판단에 고려되는 영역입니다.</strong> 위험을 고지한 대화·약정을 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>자금 사용·상환 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 대여 변제의사 빙자 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense' },
      { label: '동업 수익 배분 무고 방어', href: '/guide/fraud/fraud-business-partnership-profit-distribution-falsely-accused-defense' },
      { label: '투자수익 지연 고의 무고 방어', href: '/guide/fraud/fraud-investment-return-delay-intent-falsely-accused-defense' },
      { label: '공동사업 수익배분 빙자 무고 방어', href: '/guide/fraud/fraud-joint-business-profit-distribution-pretext-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-gym-personal-training-guidance-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-personal-training-guidance-touch-report-track',
    keyword: '헬스장 PT 자세 교정 추행 신고',
    questionKeyword: '헬스장에서 개인 PT를 받는데 트레이너가 자세를 교정해준다며 필요 이상으로 허리·엉덩이·허벅지 안쪽·가슴 쪽에 손을 대거나 뒤에서 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 운동 지도라 어느 정도 접촉은 예상했지만 손이 향하는 부위와 방식이 정상 지도 범위를 벗어나 단순한 자세 교정이 아니라 추행이라는 생각이 들었어요. 그 순간엔 ‘원래 이렇게 잡아주나’ 헷갈려 바로 항의하지 못했어요. 트레이너는 ‘운동 자세를 잡아주려던 것’이라고 할 것 같아요. 이런 헬스장 PT 자세 교정 중 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 PT 자세 교정 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 자세 교정 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '헬스장에서 트레이너가 자세 교정을 빙자해 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·피트니스 센터에서 개인 PT를 받던 중, 트레이너가 운동 자세나 근육 사용을 교정해준다는 이유로, 정상적인 지도로는 설명되지 않게 허리·엉덩이·허벅지 안쪽·가슴 쪽에 손을 대거나, 뒤에서 몸을 바짝 밀착해 붙는 등 단순한 자세 교정으로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. PT는 동작을 잡아주거나 자극 부위를 짚어주는 접촉이 어느 정도 예정되어 있어 그 순간에는 ‘원래 이렇게 잡아주는 건가’ 하고 헷갈리기도 하고, 지도를 받는 입장이라 곧바로 강하게 항의하거나 자리를 벗어나기 어려워 참고 넘겼지만, 손이 향하는 부위와 방식이 지도에 필요한 범위를 명백히 벗어나 단순한 교정이 아니라 추행이라는 생각이 들지만, 트레이너가 ‘운동 자세를 잡아주려던 것, 근육 위치를 짚어준 것’이라고 해명할 것 같아 신고해도 정상 지도와 구별될지 막막하실 거예요. 몸을 만들려고 믿고 맡긴 훈련 공간에서 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. PT 지도에서 의사에 반해 민감한 부위를 만지거나 밀착한 행위라면, 자세 교정을 빙자했더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄에서의 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키고 선량한 성적 도덕관념에 반하여 성적 자기결정권을 침해하는 행위를 의미하고, 추행 해당 여부와 추행의 고의는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 하며, 추행의 고의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 본 사례 흐름이 있는 영역으로, 지도 범위를 벗어난 접촉인지와 그 고의를 가려 다툴 여지가 있습니다. 지도 빙자 + 민감 부위 접촉·밀착 + 자세 교정 해명 결합은 ‘PT 자세 교정 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·PT 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 자세 교정 중 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·PT 정리</strong> — 헬스장·PT 시간·트레이너·수업 형태·주변 상황 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 허리·엉덩이·허벅지·가슴 쪽 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 범위를 벗어난 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자세를 잡아주려던 것이라는 해명과 달리, 지도에 필요한 범위를 벗어나 의사에 반해 민감 부위를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 헬스장 CCTV, 다른 회원·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·PT 자료 보존 (즉시)</strong> — 헬스장·PT 시간·트레이너·수업 형태와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 헬스장 내부 CCTV, PT 등록·결제·예약 내역, 다른 회원·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 자세 교정 중 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>헬스장·PT 시간·트레이너·수업 형태 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>헬스장 내부 CCTV 보존 요청 자료</strong></li>\n<li><strong>PT 등록·결제·예약·출결 입증 자료</strong></li>\n<li><strong>다른 회원·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장 내부 CCTV와 PT 등록·예약·출결 내역으로 PT 시간과 트레이너를 특정하고, 손이 향한 부위와 방식이 지도에 필요한 범위를 벗어났다는 점을 구체적으로 기록하면 지도 빙자 추행을 다투는 데 도움이 됩니다. 그 순간 바로 항의하지 못했더라도 직후에 남긴 메시지·통화나 주변에 털어놓은 정황을 정리하면 의사에 반하는 접촉이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 범위를 벗어난 민감 부위 접촉인지.</li>\n<li><strong>자세 교정 해명</strong> — ‘자세를 잡아주려던 것’ 해명에 가려지지 않는지.</li>\n<li><strong>추행의 고의</strong> — 접촉이 추행의 고의로 이루어졌는지.</li>\n<li><strong>트레이너 특정</strong> — CCTV·PT 기록으로 트레이너를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 추행 의미와 추행 고의의 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄에서의 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 의미하고, 어떠한 행위가 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 이전부터의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합적으로 고려하여 신중히 결정해야 한다고 보았습니다. 나아가 강제추행죄가 성립하려면 문제가 되는 행위마다 폭행 또는 협박 외에 추행행위와 그에 대한 범의가 인정되어야 하고, 형사재판에서 유죄의 인정은 합리적인 의심이 없을 정도의 증명에 이르러야 하므로 추행의 범의에 대한 증명이 부족하다면 설령 유죄의 의심이 가더라도 강제추행죄의 유죄로 판단할 수 없다고 판시했습니다. 헬스장 PT에서 자세 교정을 빙자해 민감 부위를 만지거나 밀착한 사안을 살펴볼 때에도, 접촉의 구체적 태양과 지도 범위 이탈 여부, 추행의 고의를 종합해 추행 해당성을 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 민감 부위 접촉·밀착 + 자세 교정 해명 결합 시 PT 자세 교정 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
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
        question: 'PT는 원래 몸을 잡아주는데 어떻게 구별하나요?',
        answer:
          '<strong>정상 지도와 민감 부위 접촉의 구별이 핵심인 영역입니다.</strong> 손이 향한 부위와 방식을 구체적으로 정리하세요.',
      },
      {
        question: '헬스장 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 헬스장·시설에 즉시 보존을 요청하세요.',
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
      { label: '헬스 PT 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-pretext-touch-report-track' },
      { label: '헬스 PT 지도 추행 신고', href: '/guide/sex-crime/sex-crime-gym-pt-guidance-touch-report-track' },
      { label: '헬스장 개인강습 추행 추적', href: '/guide/sex-crime/sex-crime-gym-personal-training-session-track' },
      { label: '헬스장 PT 추행 추적', href: '/guide/sex-crime/sex-crime-gym-personal-training-track' },
    ],
  },

  // ─── 8. sex-crime-subway-crowded-car-press-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-crowded-car-press-touch-report-track',
    keyword: '지하철 혼잡 차량 밀착 추행 신고',
    questionKeyword: '출퇴근 시간 지하철 혼잡한 차량에서 사람이 빽빽하게 낀 틈을 타 뒤·옆에 붙은 사람이 엉덩이·허벅지·등에 신체를 밀착해 비비거나 손을 대 너무 불쾌하고 수치스러웠어요. 사람에 밀려 닿았나 싶었지만 접촉이 반복되고 밀착 정도가 노골적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 만원 차량이라 몸을 피하거나 곧바로 항의하기 어려웠고, 상대는 ‘사람이 많아 밀린 것’이라고 할 것 같아요. 이런 지하철 혼잡 차량 밀착 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, CCTV·진술 같은 자료는 어떤 절차로 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '지하철 혼잡 차량 밀착 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지하철 혼잡 차량 밀착 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '지하철 혼잡 차량에서 옆사람이 밀착해 신체를 만지는 추행을 당해 수치스러웠다면, 공중밀집장소 추행 해당성 판단과 CCTV·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근 시간대 지하철처럼 사람이 빽빽하게 들어차 몸이 서로 닿을 수밖에 없는 혼잡한 차량 안에서, 뒤나 옆에 붙은 사람이 혼잡을 틈타 엉덩이·허벅지·등 등에 신체를 바짝 밀착해 비비거나 손을 대는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 만원 차량은 사방이 사람으로 눌려 있어 그 순간에는 ‘사람에 밀려 어쩌다 닿은 건가’ 싶어 넘기기도 하고, 몸을 피하거나 곧바로 큰 소리로 항의하기 어려워 참았지만, 접촉이 멈추지 않고 밀착 정도가 점점 노골적이어서 단순한 우연이 아니라 혼잡을 틈탄 추행이라는 생각이 들지만, 상대가 ‘사람이 많아 밀린 것뿐’이라고 해명할 것 같아 신고해도 가볍게 치부될까 봐 막막하실 거예요. 매일 이용하는 대중교통에서 예상치 못하게 겪은 일이라 더 당황스럽고 답답하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제11조는 대중교통수단, 공연·집회 장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행한 사람을 처벌하도록 정하고, 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 지하철 혼잡 차량처럼 공중이 밀집한 장소에서 의사에 반해 신체를 만지거나 밀착해 비빈 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강간·강제추행 등의 성립과 관련해 추행 등의 성립 요건과 함께 그 행위 당시 행위자의 인식이 필요하다는 점을 짚으며 관련 규정의 취지와 판단 기준을 제시한 사례 흐름이 있는 영역으로, 혼잡을 틈탄 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 공중밀집·혼잡 이용 + 신체 밀착·접촉 + 반복·노골 결합은 ‘혼잡 차량 밀착 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·장소 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 혼잡 차량 밀착 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·장소 정리</strong> — 노선·시간대·혼잡도·차량·위치 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허벅지·등 밀착·접촉·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 공중밀집장소에서 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사람이 많아 밀렸다는 해명과 달리, 혼잡을 틈타 의사에 반해 신체를 밀착해 비비거나 만졌는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 지하철 역사·차량 CCTV, 목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·지하철보안관·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·장소 자료 보존 (즉시)</strong> — 노선·시간대·혼잡도·차량·위치와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 역사·승강장·차량 CCTV, 교통카드 이용 내역, 목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰·지하철경찰대에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 혼잡 차량 밀착 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>노선·시간대·혼잡도·차량·위치 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>역사·승강장·차량 CCTV 보존 요청 자료</strong></li>\n<li><strong>교통카드·모바일 승차 이용 내역 (이동 입증)</strong></li>\n<li><strong>목격자·동승자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 역사·승강장·차량 CCTV와 교통카드 이용 내역으로 탑승 시간과 위치를 특정하고, 혼잡한 상황에서도 접촉 부위와 방식이 우연으로 설명되지 않고 반복됐다는 점을 구체적으로 기록하면 혼잡을 틈탄 추행을 다투는 데 도움이 됩니다. CCTV는 보관 기간이 짧으므로 역무실·경찰에 즉시 보존을 요청하고, 그 순간 항의하지 못했더라도 직후에 남긴 메시지·상담 정황을 정리하면 의사에 반하는 추행이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 밀림을 넘는 신체 밀착·접촉인지.</li>\n<li><strong>혼잡 해명</strong> — ‘사람이 많아 밀렸다’ 해명에 가려지지 않는지.</li>\n<li><strong>공중밀집장소</strong> — 대중교통 등 공중밀집장소에서의 추행에 해당하는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·교통카드·목격자로 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·지하철경찰대·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행죄의 성립 요건과 행위자의 인식',
        summary:
          '대법원 2016도4404(대법원, 2021.02.25 선고) 영역에서 법원은 성폭력범죄의 처벌 등에 관한 특례법이 강간의 죄 또는 강제추행의 죄 등을 처벌하는 취지와 관련 규정의 개정 경과를 짚으며, 성폭력에 대한 인지·항거·대처 능력이 낮은 사람을 보호하려는 입법 취지를 고려해 관련 개념을 해석해야 한다고 보았습니다. 그리고 이러한 성폭력범죄가 성립하려면 행위자도 범행 당시 그 요건이 되는 사정을 인식하여야 한다고 하여, 추행 등의 성립에는 객관적 요건과 함께 행위 당시 행위자의 인식이 필요하다는 점을 분명히 하였습니다. 지하철 혼잡 차량에서 밀착해 신체를 접촉한 사안을 살펴볼 때에도, 접촉이 우연한 밀림을 넘어 의사에 반하는 추행에 해당하는지, 행위자가 그러한 접촉을 인식하고 있었는지를 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '공중밀집·혼잡 이용 + 신체 밀착·접촉 + 반복·노골 결합 시 혼잡 차량 밀착 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 많아 밀린 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 밀림을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 기록하세요.',
      },
      {
        question: '만원 차량이라 항의하지 못했는데 신고되나요?',
        answer:
          '<strong>혼잡상 즉시 대응이 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 남긴 메시지·상담 정황을 정리하세요.',
      },
      {
        question: '공중밀집장소 추행은 강제추행과 다른가요?',
        answer:
          '<strong>대중교통 등에서는 공중밀집장소 추행죄로 다툴 수 있는 영역입니다.</strong> 장소의 혼잡·공개 정황과 접촉 태양을 정리하세요.',
      },
      {
        question: '지하철 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>CCTV는 보관 기간이 짧아 신속 보존이 중요한 영역입니다.</strong> 역무실·경찰에 즉시 보존을 요청하세요.',
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
      { label: '클럽 혼잡 무대 추행 신고', href: '/guide/sex-crime/sex-crime-club-crowded-dancefloor-touch-report-track' },
      { label: '혼잡 버스 출퇴근 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-bus-rush-hour-touch-report-track' },
      { label: '지하철 에스컬레이터 추행 신고', href: '/guide/sex-crime/sex-crime-subway-escalator-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-company-workshop-lodging-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-workshop-lodging-touch-report-track',
    keyword: '사내 워크숍 숙소 추행 신고',
    questionKeyword: '회사 워크숍·MT로 간 숙소에서 늦은 밤 술자리 뒤, 같은 회사 사람이 방·복도·숙소 공용공간에서 몸을 만지거나 껴안는 등 신체를 추행해 너무 불쾌하고 수치스러웠어요. 상사·동료라는 관계에다 회사 행사 자리라 곧바로 강하게 거부하거나 자리를 벗어나기 어려웠어요. 상대는 ‘분위기에 취해 장난친 것’이라고 하거나 회사도 조용히 넘기려는 것 같아요. 그런데 접촉 부위와 방식이 명백히 선을 넘어 단순한 장난이 아니라 추행이라는 생각이 들어요. 이런 사내 워크숍 숙소 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 회사 관계 속에서 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '사내 워크숍 숙소 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사내 워크숍 숙소 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '회사 워크숍 숙소에서 동료·상사가 신체를 만지는 추행을 당해 수치스러웠다면, 강제추행 해당성 판단과 숙소·진술 확보·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 워크숍·MT·야유회로 간 숙소에서 늦은 밤 술자리가 이어진 뒤, 같은 회사 상사나 동료가 방·복도·숙소 공용공간에서 몸을 만지거나 뒤에서 껴안고 밀착하는 등 단순한 실수로 보기 어려운 신체 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 워크숍은 상사·동료라는 회사 관계 속에서 이뤄지고 술자리와 숙박이 섞인 자리라 그 순간에는 분위기를 깰까, 관계가 불편해질까 걱정돼 곧바로 강하게 거부하거나 자리를 벗어나기 어려워 참고 넘겼지만, 접촉 부위와 방식이 명백히 선을 넘어 단순한 장난이 아니라 추행이라는 생각이 들지만, 상대가 ‘분위기에 취해 장난친 것뿐’이라고 해명하거나 회사가 행사 중 일이라며 조용히 덮으려는 것 같아 신고해도 제대로 다뤄질지 막막하실 거예요. 매일 얼굴을 봐야 하는 회사 사람과의 일이라 더 당황스럽고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 추행행위 자체가 폭행에 해당하는 이른바 기습추행도 이에 포함되는 영역입니다. 워크숍 숙소에서 의사에 반해 신체를 만지거나 껴안은 행위라면, 회사 행사 중 장난이라는 해명이 있더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄가 정범 자신이 직접 실행하여야 성립하는 자수범이 아니어서 타인을 도구로 삼아 추행하는 간접정범의 형태로도 범할 수 있고, 추행 해당 여부는 피해자의 의사·성별·나이, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역으로, 회사 관계 속 접촉이 의사에 반하는 추행인지를 가려 다툴 여지가 있습니다. 회사 관계·행사 이용 + 신체 접촉·밀착 + 장난 해명·묵인 결합은 ‘워크숍 숙소 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·행사 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사내 워크숍 숙소 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·행사 정리</strong> — 워크숍 일정·숙소·참석자·술자리·관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 몸 접촉·껴안음·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 회사 관계 속 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366·직장 내 고충창구 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분위기에 취해 장난친 것이라는 해명과 달리, 회사 행사 자리를 이용해 의사에 반해 신체를 만지거나 껴안았는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 숙소·복도 CCTV, 동석자·목격자 진술, 직후 메시지를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·행사 자료 보존 (즉시)</strong> — 워크숍 일정·숙소·참석자·술자리와 접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·진술 확보 (즉시)</strong> — 숙소·복도·로비 CCTV, 참석 일정·명단, 동석자·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담과 직장 내 고충창구 지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰에 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 워크숍 숙소 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>워크숍 일정·숙소·참석자·관계 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>숙소·복도·로비 CCTV 보존 요청 자료</strong></li>\n<li><strong>참석 일정·명단·좌석·객실 배정 자료 (정황)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>직장 내 신고·고충창구 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 워크숍 일정·객실 배정·참석 명단과 숙소·복도 CCTV로 시간과 장소를 특정하고, 접촉 부위와 방식이 회사 행사 중 장난으로 설명될 수 없다는 점을 구체적으로 기록하면 회사 관계 속 추행을 다투는 데 도움이 됩니다. 관계가 불편해 그 순간 강하게 거부하지 못했더라도 직후에 동료에게 알리거나 남긴 메시지·상담 정황을 정리하면 의사에 반하는 추행이었다는 점을 뒷받침하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 장난을 넘는 민감 부위 접촉·껴안음인지.</li>\n<li><strong>장난 해명</strong> — ‘분위기에 취해 장난친 것’ 해명에 가려지지 않는지.</li>\n<li><strong>관계·위력</strong> — 상사·동료 관계나 행사 자리를 이용했는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·참석 명단·진술로 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 추행 의미와 간접정범 성립',
        summary:
          '대법원 2016도17733(대법원, 2018.02.08 선고) 영역에서 법원은 강제추행죄에서 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 의미하고, 그 해당 여부는 피해자의 의사·성별·나이, 행위자와 피해자의 이전부터의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합적으로 고려하여 신중히 결정해야 한다고 보았습니다. 나아가 강제추행죄는 정범 자신이 직접 실행하여야 성립하는 자수범이라고 볼 수 없으므로 처벌되지 않는 타인을 도구로 삼아 피해자를 강제로 추행하는 간접정범의 형태로도 범할 수 있고, 그 도구가 되는 타인에는 피해자도 포함될 수 있어 피해자를 도구로 삼아 그 신체를 이용해 추행행위를 한 경우에도 강제추행죄의 간접정범에 해당할 수 있다고 판시했습니다. 회사 워크숍 숙소에서 동료·상사가 신체를 만지거나 껴안은 사안을 살펴볼 때에도, 접촉의 구체적 태양과 회사 관계·행사 상황을 종합해 추행 해당성을 기준으로 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '회사 관계·행사 이용 + 신체 접촉·밀착 + 장난 해명·묵인 결합 시 워크숍 숙소 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '분위기에 취해 장난친 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>장난을 넘는 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '회사 사람이라 그 자리에서 거부하지 못했는데 신고되나요?',
        answer:
          '<strong>관계상 즉시 거부가 어려웠던 사정이 고려되는 영역입니다.</strong> 직후 반응·메시지·상담 정황을 정리하세요.',
      },
      {
        question: '회사가 조용히 덮으려 하는데 어떻게 하나요?',
        answer:
          '<strong>형사 신고와 직장 내 고충창구는 별개로 진행되는 영역입니다.</strong> 증거를 확보하고 외부 상담을 검토하세요.',
      },
      {
        question: '숙소 CCTV로 다툴 수 있나요?',
        answer:
          '<strong>복도·로비 CCTV와 참석 정황으로 다투는 영역입니다.</strong> 숙소·경찰에 즉시 보존을 요청하세요.',
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
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-taxi-getoff-body-contact-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-getoff-body-contact-misunderstanding-falsely-accused-defense',
    keyword: '택시 하차 접촉 오해 추행 무고 방어',
    questionKeyword: '택시에서 내리는 과정에서 좁은 차 안·문 앞에서 몸이 스치거나, 짐을 건네받고 부축하려다 손·팔이 잠깐 닿았을 뿐인데, 상대가 ‘하차하면서 일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 좁은 공간에서 하차·짐 정리 중 우연히 스친 것뿐인데, 신체 접촉이 있었다는 이유만으로 한순간에 성추행 가해자로 몰려 너무 억울해요. 블랙박스·하차 위치·동선도 있고 상대 진술은 시점마다 달라져요. 이렇게 택시 하차 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점과 진술의 신빙성을 어떻게 다퉈야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '택시 하차 접촉 추행 고의 부재·무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '택시 하차 접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '택시 하차 중 우연한 접촉이 추행으로 고소돼 억울하다면, 추행 고의 부재 판단과 진술 신빙성·무죄추정 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「택시에서 내리는 과정에서 좁은 차 안이나 문 앞에서 몸이 스치거나, 짐을 건네받고 내리는 사람을 부축하려다 손·팔이 잠깐 닿는 등 하차에 통상 수반되는 접촉이 있었을 뿐인데, 상대가 ‘하차하면서 일부러 몸을 만졌다, 추행당했다’며 저를 추행으로 신고·고소해, 한순간에 성추행 피의자로 몰린 분의 상황입니다. 저는 추행할 의도가 전혀 없었고 좁은 공간에서 하차·짐 정리 과정에 우연히 스친 것뿐인데, 신체 접촉이 있었다는 사실과 상대의 일방적 느낌만으로 가해자로 단정될까 봐 억울하고 막막하실 거예요. 더구나 택시 하차는 좁은 차량 구조상 몸이 닿기 쉽고 순식간에 벌어지는데도, 접촉이 있었다는 이유만으로 ‘고의로 만졌다’는 주장에 휘말리기 쉽고, 상대의 진술마저 시점·내용에 따라 달라진다면 더 답답하셨을 거예요. 혐의를 받고 있다면, 택시 이용 경위와 하차 상황, 접촉이 일어난 부위·방식과 좁은 공간·동선, 블랙박스·차량 내부 영상과 대화를 차분히 정리해 추행의 고의가 없었고 하차 과정의 우연한 접촉이었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위와 상대 진술의 모순까지 함께 기록해두는 것이 좋습니다.」 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 공중밀집장소에서의 추행죄 등에서 피고인이 추행의 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법에 따를 수밖에 없고, 피고인의 나이·경력, 행위에 이르게 된 경위와 동기, 피고인과 상대의 관계, 구체적 행위 태양과 전후 정황 등 객관적 사정을 종합해 판단하되, 조금이라도 합리적 의심이 있으면 피고인의 이익으로 판단해야 하며, 무죄추정의 원칙과 성인지적 관점을 함께 유지하면서 진술의 신빙성을 신중히 살펴야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 하차 과정의 접촉이 추행의 고의로 이루어졌는지, 상대 진술의 신빙성이 인정되는지를 종합해 가려 다툴 여지가 있는 영역입니다. 하차 상황·경위 + 접촉 부위·방식 + 고의 부인·진술 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성 판단’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·하차 정리 ② 접촉 부위·경위 ③ 고의 부재 검토 ④ 진술 신빙성 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 하차 접촉 오해 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 경위·고의 부재·진술 신빙성·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·하차 정리</strong> — 택시 이용·하차 상황·좌석·동선·좁은 공간 정리.</li>\n<li><strong>② 접촉 부위·경위</strong> — 하차·짐 정리 중 접촉한 부위·방식·순간성 정리.</li>\n<li><strong>③ 고의 부재 검토</strong> — 추행 고의를 배척하는 좁은 공간·동선 등 간접사실 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술의 일관성·구체성과 정황 부합 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 블랙박스·차량 영상이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행할 고의로 접촉했는지(추행), 아니면 좁은 차량에서 하차·짐 정리 중 우연히 스친 것인지(고의 부재)가 판단의 분기점입니다. 택시 이용·하차 상황, 접촉 부위·방식과 순간성, 블랙박스·차량 영상과 동선, 상대 진술의 일관성을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·하차 자료 보존 (즉시)</strong> — 택시 이용·하차 상황·좌석·동선·시각과 접촉 경위를 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 경위·영상 정리 (즉시)</strong> — 하차·짐 정리 중 접촉한 부위·방식과 순간성, 블랙박스·차량 내부 영상·배차 기록을 정리.</li>\n<li><strong>3단계 — 진술 신빙성 검토 (병행)</strong> — 상대 진술의 일관성과 시점·내용의 변동, 정황 부합 여부를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 하차 접촉 오해 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>택시 이용·하차 상황·동선 자료 (경위)</strong></li>\n<li><strong>배차·결제·호출 앱 이용 내역 (이용 입증)</strong></li>\n<li><strong>블랙박스·차량 내부 영상 보존 요청 자료 (객관 정황)</strong></li>\n<li><strong>접촉 부위·방식·순간성 정리 (접촉 경위)</strong></li>\n<li><strong>하차 전후 대화·메시지 (정황 입증)</strong></li>\n<li><strong>기사·동승자·목격자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·상대 진술 모순 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 이용·하차 상황과 좁은 차량 구조·동선, 접촉이 하차·짐 정리 중 순간적으로 일어난 것이라는 점을 정리하면 접촉이 추행의 고의에 의한 것인지, 하차 과정의 우연한 스침인지를 다투는 데 도움이 됩니다. 블랙박스·차량 내부 영상과 배차·결제 기록, 상대 진술이 시점·내용에 따라 달라지는 부분을 함께 정리해 고의 부재와 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>하차 경위</strong> — 좁은 공간에서 하차·짐 정리 중 접촉이었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 객관 정황과 맞는지.</li>\n<li><strong>무죄추정</strong> — 증명이 부족하면 피고인의 이익으로 판단되는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의의 간접사실 증명과 무죄추정',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 공중 밀집 장소에서의 추행죄가 성립하려면 주관적 구성요건으로서 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 있어야 하므로, 피고인이 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실을 증명하는 방법에 따를 수밖에 없다고 보았습니다. 이때 피고인의 나이·지능·판단능력, 직업과 경력, 행위에 이르게 된 경위와 동기, 피고인과 상대의 관계, 구체적 행위 태양과 전후 정황 등 객관적 사정을 종합해 판단하되 고의를 인정할 만한 징표와 어긋나는 의문점이 해소되어야 한다고 하였습니다. 나아가 형사피고인은 유죄판결이 확정될 때까지 무죄로 추정되고 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하므로 조금이라도 합리적 의심이 있으면 피고인의 이익으로 판단하여야 하며, 성범죄 사건에서 성인지적 관점을 유지하면서도 피해자 진술의 신빙성을 신중히 살펴야 한다고 판시했습니다. 택시 하차 과정의 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 추행 고의의 증명 정도와 상대 진술의 신빙성, 객관적 정황을 종합해 방어를 검토해볼 수 있습니다.',
        takeaway: '하차 상황·경위 + 접촉 부위·방식 + 고의 부인·진술 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 판단 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '하차 중 스친 접촉인데도 추행이 되나요?',
        answer:
          '<strong>추행을 용인하는 고의가 있었는지가 핵심인 영역입니다.</strong> 하차 경위와 접촉 부위·방식·순간성을 정리하세요.',
      },
      {
        question: '좁은 차라 닿을 수밖에 없었다는 걸 어떻게 밝히나요?',
        answer:
          '<strong>차량 구조·동선은 고의를 배척하는 간접사실이 되는 영역입니다.</strong> 블랙박스·차량 영상·배차 기록을 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성과 정황 부합을 따지는 영역입니다.</strong> 진술의 일관성·객관 정황 부합 여부를 정리하세요.',
      },
      {
        question: '블랙박스 영상이 도움이 되나요?',
        answer:
          '<strong>블랙박스·차량 영상은 접촉 경위를 뒷받침하는 자료인 영역입니다.</strong> 영상·배차 기록을 신속히 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>하차 경위·접촉에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '만원버스 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-crowded-bus-contact-misunderstanding-falsely-accused-defense' },
      { label: '축제 인파 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-festival-crowd-contact-misunderstanding-falsely-accused-defense' },
      { label: '사진 촬영 자세 접촉 오해 무고 방어', href: '/guide/sex-crime/sex-crime-photo-studio-posing-contact-misunderstanding-falsely-accused-defense' },
      { label: '택시 승객 접촉 추적', href: '/guide/sex-crime/sex-crime-taxi-passenger-contact-track' },
    ],
  },
];
