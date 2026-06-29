import { SpokePage } from '../spoke-pages';

// batch112 fraud(6) + sex-crime(4) — 10개 (2026-06-29)
//
// 고유 존재 이유:
// 1. fraud-used-bicycle-fake-carbon-frame-resale-track — 일반 중고거래 분쟁과 분기. '가짜 카본 프레임 자전거를 정품처럼 둔갑시켜 재판매' 가짜 카본 둔갑 재판매 기망 편취 판단형 트랙(victim).
// 2. fraud-gym-longterm-membership-prepaid-closure-track — 일반 폐업 분쟁과 분기. '헬스장 장기회원권을 선결제받고 곧 폐업·잠적' 장기회원권 선결제 폐업 편취 절차형 트랙(victim).
// 3. fraud-online-lecture-lifetime-access-shutdown-track — 일반 환불 분쟁과 분기. '온라인 강의 평생수강을 약속하고 결제 후 사이트 폐쇄' 평생수강 약속 폐쇄 편취 판단형 트랙(victim).
// 4. fraud-secondhand-concert-ticket-duplicate-resale-track — 일반 티켓 분쟁과 분기. '중고 콘서트 티켓을 여러 명에게 중복 양도' 중복 양도 기망 편취 절차형 트랙(victim).
// 5. fraud-puppy-adoption-pedigree-forgery-sale-track — 일반 분양 분쟁과 분기. '반려견 혈통서를 위조해 정품 혈통처럼 판매' 혈통서 위조 판매 기망 편취 판단형 트랙(victim).
// 6. fraud-realestate-down-payment-double-contract-falsely-accused-defense — 일반 사기 무고류와 분기. '부동산 계약금 이중계약으로 사기 고의로 고소됨' 편취 고의·고지의무 구별 방어 판단형 트랙(accused).
// 7. sex-crime-library-reading-room-touch-report-track — 일반 추행류와 분기. '도서관 열람실에서 신체를 추행' 추행 해당성·고의 판단형 트랙(victim).
// 8. sex-crime-elevator-enclosed-space-touch-report-track — 일반 추행류와 분기. '엘리베이터 밀폐공간에서 신체를 추행' 밀폐공간 추행 신고 절차형 트랙(victim).
// 9. sex-crime-private-tutoring-guidance-pretext-touch-report-track — 일반 추행류와 분기. '과외 교습 지도를 빙자해 신체를 추행' 지도 빙자 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-blind-date-after-drinking-touch-falsely-accused-defense — 일반 성범죄 무고류와 분기. '소개팅 음주 후 접촉이 추행으로 고소' 고의 부재·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch112FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-bicycle-fake-carbon-frame-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-bicycle-fake-carbon-frame-resale-track',
    keyword: '중고 자전거 가짜 카본 프레임 둔갑 판매 기망 사기',
    questionKeyword: '중고 거래로 로드 자전거를 사면서 판매자가 ‘프레임이 100% 정품 풀카본이고 하자 없다, 시세보다 싸게 준다’고 해서 카본 시세에 맞춰 적지 않은 돈을 주고 샀어요. 그런데 막상 받아 전문 자전거 매장에서 점검하니 풀카본이 아니라 알루미늄·하이브리드 프레임이거나 다른 브랜드 부품이 섞인 물건이었고, 보여준 사진·스펙도 다른 제품 것이었어요. 판매자에게 따지니 ‘나도 카본인 줄 알았다, 환불은 안 된다’며 발뺌하다 연락을 피하는데, 처음부터 가짜 카본을 풀카본으로 둔갑시켜 되판 정황이에요. 이런 중고 자전거 가짜 카본 프레임 둔갑 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 자전거 가짜 카본 둔갑·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 자전거 가짜 카본 프레임 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '풀카본이라는 말을 믿고 산 중고 자전거가 가짜 카본으로 드러나고 환불도 거부당했다면, 형법 제347조 사기·고지의무 위반 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·자전거 동호회·직거래로 로드·MTB 자전거를 사면서 판매자에게서 ‘프레임이 100% 정품 풀카본이고 크랙·하자 없다, 정품 부품으로 구성됐고 시세보다 싸게 준다’는 말을 믿고, 알루미늄·저가 프레임보다 비싼 카본 시세에 맞춰 적지 않은 대금을 주고 물건을 받은 분의 상황입니다. 그런데 막상 인수해 전문 자전거 매장·정비점에서 점검해보니, 겉모습만 비슷할 뿐 풀카본이 아니라 알루미늄·하이브리드 프레임이거나 다른 등급·다른 브랜드 부품이 섞여 있었고, 거래 전 보여준 사진·스펙·시리얼마저 실제 물건과 다른 제품의 것이어서, 가짜 카본을 카본 값에 산 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘나도 카본인 줄 알고 받아 되판 것뿐이다, 거래가 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 비슷하게 가짜 카본을 풀카본으로 둔갑시켜 여러 사람에게 재판매한 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가짜 카본인 사실을 알면서도 풀카본으로 속이거나, 카본이 아닐 수 있다는 중요한 사정을 알리지 않은 채 카본 시세로 팔았다면 적극적·소극적 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 상당한 대가가 일부 지급되었더라도 편취액은 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 일부 부품이 정품이었다는 사정만으로 편취가 부정되는지를 가려 다툴 여지가 있습니다. 카본 가장 + 다른 프레임·부품 혼합 + 환불 거부·발뺌 결합은 ‘가짜 카본 둔갑 재판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가품·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 자전거 가짜 카본 프레임 둔갑 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 풀카본 강조 설명·거래 대화·결제 내역 정리.</li>\n<li><strong>② 가품·기망 입증</strong> — 전문 매장 점검 소견·소재 불일치·스펙 불일치로 가짜 카본을 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 카본 시세로 지급한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 가짜 카본인 사실을 알면서 풀카본으로 속였는지, 카본이 아닐 수 있다는 중요한 사정을 알리지 않았는지가 판단의 분기점입니다. 카본을 강조한 대화와 점검 소견, 같은 판매자의 반복 재판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 풀카본 강조 설명·거래 대화·결제·택배 내역 캡처 보존.</li>\n<li><strong>2단계 — 가품 입증 (즉시)</strong> — 전문 자전거 매장·정비점 점검 소견서, 소재·스펙 불일치 자료 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 자전거 가짜 카본 프레임 둔갑 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>풀카본 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>중고 거래글·합의 내용·약정 (계약 내용)</strong></li>\n<li><strong>자전거 대금·배송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>전문 매장·정비점 점검 소견서·진단 자료</strong></li>\n<li><strong>거래 전 사진·스펙·시리얼 불일치 대비 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>환불 요청·거부 대화·반복 재판매 정황 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전문 자전거 매장·정비점 점검 소견으로 소재가 카본이 아닌지를 명확히 하고, 판매자가 풀카본을 강조한 대화와 거래 전 사진·스펙을 실제 물건과 대비하면 둔갑 재판매 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 사람에게도 비슷하게 판 흔적을 함께 모으면 반복 재판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 여부</strong> — 실제로 가짜 카본·소재 혼합인지.</li>\n<li><strong>고지의무 위반</strong> — 카본이 아닐 수 있는 사정을 알리지 않았는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 둔갑 재판매였는지.</li>\n<li><strong>편취액</strong> — 카본 시세 대금 전부가 피해액인지, 일부 정품 부품의 영향.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·가품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 대가가 지급된 사기죄의 편취액 산정',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에 있어서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산 침해가 되어 곧 사기죄가 성립하고, 상당한 대가가 지급되었거나 피해자의 전체 재산상 손해가 없더라도 사기죄의 성립에는 영향이 없다고 보았습니다. 따라서 대가가 일부 지급된 경우에도 편취액은 교부된 금원에서 그 대가를 공제한 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 다만 가액에 따라 가중 처벌하는 특정경제범죄가중처벌법을 적용할 때에는 편취한 재산상 이익의 가액을 엄격·신중하게 산정해야 하고, 그 가액을 구체적으로 산정할 수 없는 경우에는 같은 법 제3조를 적용할 수 없다고 보았습니다. 가짜 카본을 풀카본으로 둔갑시켜 카본 시세로 되판 사안을 살펴볼 때에도, 일부 부품이 정품이었다는 사정과 무관하게 교부한 대금 전부를 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '카본 가장 + 다른 소재·부품 혼합 + 환불 거부 결합 시 가짜 카본 둔갑 재판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '일부 부품은 정품이었는데도 사기인가요?',
        answer:
          '<strong>일부 대가가 있어도 교부한 대금 전부를 편취액으로 보는 영역입니다.</strong> 카본 강조 대화와 점검 소견을 확보하세요.',
      },
      {
        question: '가짜 카본이라는 걸 어떻게 확인하나요?',
        answer:
          '<strong>전문 매장·정비점 점검 소견이 핵심 단서인 영역입니다.</strong> 소재·스펙 불일치 자료를 함께 확보하세요.',
      },
      {
        question: '판매자도 카본인 줄 알았다는데 사기인가요?',
        answer:
          '<strong>가품 가능성을 알면서 카본으로 속였거나 묵비했는지가 핵심인 영역입니다.</strong> 풀카본 강조 대화를 정리하세요.',
      },
      {
        question: '직거래라 현금으로 줬으면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래 자료와 점검 소견을 정리하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 재판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 거래·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '중고 골프채 가짜 브랜드 재판매 추적', href: '/guide/fraud/fraud-used-golf-club-fake-brand-resale-track' },
      { label: '콘서트 티켓 가짜 링크 재판매 추적', href: '/guide/fraud/fraud-concert-ticket-resale-fake-link-track' },
      { label: '한정 스니커즈 가품 재판매 추적', href: '/guide/fraud/fraud-limited-sneaker-resale-fake-track' },
      { label: '중고폰 허위 송장 추적', href: '/guide/fraud/fraud-used-phone-fake-shipping-invoice-track' },
    ],
  },

  // ─── 2. fraud-gym-longterm-membership-prepaid-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-longterm-membership-prepaid-closure-track',
    keyword: '헬스장 장기회원권 선결제 폐업 기망 사기',
    questionKeyword: '헬스장이 ‘1년·2년 장기회원권을 끊으면 파격 할인된다, 시설도 곧 확장한다’며 장기 등록을 권해 적지 않은 돈을 한 번에 선결제했는데, 얼마 지나지 않아 갑자기 폐업한다는 통보가 붙고 문을 닫았어요. 환불을 요구하니 ‘본사·점주에게 말하라’며 떠넘기다 점주는 연락을 끊고 잠적했어요. 알고 보니 폐업·매각이 예정된 걸 알면서도 장기회원권을 집중적으로 팔아 선결제만 챙긴 정황이고, 다른 회원도 같이 당했는데, 이런 헬스장 장기회원권 선결제 폐업 기망을 사기로 신고하고 남은 회원권 금액을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '헬스장 장기회원권 선결제 폐업 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 장기회원권 선결제 폐업 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '할인을 미끼로 장기회원권을 선결제했는데 헬스장이 곧 폐업·잠적했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·피트니스센터가 ‘지금 1년·2년 장기회원권을 끊으면 월 단위보다 훨씬 싸다, 시설을 곧 확장하고 PT도 추가해준다’며 한 번에 큰 금액을 선결제하도록 장기 등록을 적극적으로 권해, 운동을 꾸준히 하려던 마음에 적지 않은 돈을 미리 낸 분의 상황입니다. 그런데 얼마 지나지 않아 갑자기 입구에 폐업·임시휴관 안내문이 붙고 문이 닫혔고, 환불을 요구하니 ‘본사에 말하라, 양수인에게 인계됐다, 점주가 따로 있다’며 책임을 서로 떠넘기다, 끝내 점주·운영자가 전화·메신저를 차단하고 잠적해, 운동도 못 하고 낸 돈도 돌려받지 못하게 되어 막막하실 거예요. 알고 보니 이미 폐업·매각·임대료 연체 등으로 곧 문을 닫을 사정을 알면서도 그 직전에 장기회원권·선결제를 집중적으로 판 정황이고, 같은 시기에 등록한 다른 회원들도 똑같이 환불을 못 받고 잠적당했다면 단순 경영 악화가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 곧 폐업할 사정을 알면서도 정상 운영·시설 확장을 약속하며 장기 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 거래·계약에서 편취의 범의는 피고인이 자백하지 않는 한 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단해야 하고, 대금을 변제·이행할 의사나 능력 없이 변제·이행할 것처럼 가장해 금원을 받았다면 편취 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역으로, 선결제 받을 당시의 운영·폐업 사정을 가려 다툴 여지가 있습니다. 폐업 임박 인지 + 장기 선결제 집중 판매 + 미이행·잠적 결합은 ‘장기회원권 선결제 폐업 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업 사정·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 장기회원권 선결제 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업 사정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 장기 등록 권유·할인 안내·선결제 내역 정리.</li>\n<li><strong>② 폐업 사정·기망</strong> — 결제 당시 폐업·매각·임대료 연체 등 사정을 알았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 이용하지 못한 잔여 회원권 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영 악화와 달리, 곧 폐업할 사정을 알면서 정상 운영을 가장해 장기 선결제를 받았는지가 판단의 분기점입니다. 장기 등록을 권한 안내와 폐업 시점·잠적 정황, 다른 회원의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 장기 등록 권유·할인 안내·계약서·선결제 영수증·카드 내역 보존.</li>\n<li><strong>2단계 — 폐업·잠적 입증 (즉시)</strong> — 폐업 안내문·휴관 통보·환불 거부·점주 잠적 정황과 폐업 시점을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 할부 항변권·결제 취소, 계좌 지급정지를 요청하고 잔여 금액 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 장기회원권 선결제 폐업 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>장기 등록 권유·할인 안내 캡처 (거래 조건)</strong></li>\n<li><strong>회원권 계약서·약정·이용 기간 (계약 내용)</strong></li>\n<li><strong>선결제 영수증·카드 할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>이용 횟수·잔여 기간 확인 자료 (손해 산정)</strong></li>\n<li><strong>폐업 안내문·휴관 통보·환불 거부 기록</strong></li>\n<li><strong>점주·운영자·사업자·계좌 정보</strong></li>\n<li><strong>다른 회원의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 시점과 폐업·휴관 시점의 간격, 폐업 직전에 장기 등록·할인을 집중적으로 권한 정황을 시간순으로 정리하면 폐업 사정을 알면서 선결제를 받았는지를 다투는 데 도움이 됩니다. 카드 할부였다면 항변권 행사 시한을 놓치지 않도록 결제 내역을 챙기고, 같은 시기에 등록한 다른 회원을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 사정 인지</strong> — 결제 당시 곧 폐업할 사정을 알았는지.</li>\n<li><strong>운영 가장</strong> — 정상 운영·시설 확장을 가장했는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 악화인지 처음부터 선결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 잔여 회원권 금액이 피해액인지.</li>\n<li><strong>책임 주체</strong> — 점주·본사·양수인 중 책임 주체가 누구인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (회원권·폐업 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 할부 항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래에서 편취 범의의 판단 방법',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후 피고인의 재력·환경·범행의 내용·거래의 이행과정 등과 같은 객관적인 사정을 종합하여 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 보았습니다. 특히 물품거래나 어음할인의 방법으로 금원을 교부받은 경우, 거래 당시를 기준으로 대금을 변제·결제할 의사나 능력이 없음에도 변제·결제할 것처럼 거짓말을 하여 상대방으로부터 물품·금원을 교부받을 고의가 있었는지에 의하여 사기죄의 성립 여부를 판단해야 한다고 판시했습니다. 폐업이 임박한 헬스장이 장기회원권을 선결제받은 사안을 살펴볼 때에도, 결제 당시 정상적으로 서비스를 제공할 의사·능력이 있었는지와 폐업 사정을 알았는지를 종합해 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '폐업 임박 인지 + 장기 선결제 집중 판매 + 미이행·잠적 결합 시 장기회원권 선결제 폐업 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 헬스장이 경영난으로 망한 것 아닌가요?',
        answer:
          '<strong>결제 당시 곧 폐업할 사정을 알면서 선결제를 받았는지가 핵심인 영역입니다.</strong> 결제·폐업 시점 간격과 권유 정황을 확보하세요.',
      },
      {
        question: '카드 할부로 결제했는데 막을 수 있나요?',
        answer:
          '<strong>카드 할부 항변권으로 잔여 대금 결제를 다툴 수 있는 영역입니다.</strong> 항변권 시한 전에 카드사에 신청하세요.',
      },
      {
        question: '점주가 본사·양수인에게 떠넘기는데 누구에게 청구하나요?',
        answer:
          '<strong>계약·운영·인수 관계로 책임 주체를 가리는 영역입니다.</strong> 계약서·인수 안내·운영자 정보를 정리하세요.',
      },
      {
        question: '이용을 일부 한 경우에도 환급되나요?',
        answer:
          '<strong>이용하지 못한 잔여 기간·횟수를 기준으로 환급을 다투는 영역입니다.</strong> 이용 내역과 잔여 금액을 정리하세요.',
      },
      {
        question: '다른 회원도 같이 당한 것 같아요.',
        answer:
          '<strong>같은 시기 회원들의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·등록 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '헬스장 회원권 선결제 급폐업 추적', href: '/guide/fraud/fraud-gym-membership-prepaid-sudden-closure-track' },
      { label: '회원권 헬스장 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-gym-prepaid-closure-track' },
      { label: '선결제 헬스장 폐업 환불거부 추적', href: '/guide/fraud/fraud-prepaid-gym-membership-closure-norefund-track' },
      { label: '선결제 회원권 헬스장 폐업 추적', href: '/guide/fraud/fraud-prepaid-membership-gym-closure-track' },
    ],
  },

  // ─── 3. fraud-online-lecture-lifetime-access-shutdown-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-lifetime-access-shutdown-track',
    keyword: '온라인 강의 평생수강 약속 폐쇄 기망 사기',
    questionKeyword: '온라인 강의 업체가 ‘한 번 결제하면 평생 수강 가능하다, 강의도 계속 업데이트되고 폐강은 없다’며 평생수강권을 권해 적지 않은 돈을 한 번에 결제했는데, 얼마 지나지 않아 사이트·앱이 닫히고 강의 접속이 막혔어요. 환불을 요구하니 ‘약관상 환불 불가다, 운영이 어렵다’며 떠넘기다 결국 연락을 끊고 사이트를 폐쇄했어요. 알고 보니 폐쇄·운영 중단을 앞둔 걸 알면서도 평생수강권을 집중적으로 팔아 결제만 챙긴 정황이고 다른 수강생도 같이 막혔는데, 이런 온라인 강의 평생수강 약속 폐쇄 기망을 사기로 신고하고 결제한 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '온라인 강의 평생수강 약속 폐쇄·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 평생수강 폐쇄 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '평생 수강을 약속받고 결제했는데 강의 사이트가 폐쇄되고 환불도 거부당했다면, 형법 제347조 사기·편취 고의 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 강의·인터넷 강의 업체가 ‘이 평생수강권은 한 번만 결제하면 기간 제한 없이 평생 수강할 수 있다, 강의도 계속 업데이트하고 폐강·서비스 종료는 없다, 지금 결제하면 추가 강좌까지 무료’라며 한 번에 큰 금액을 내도록 적극적으로 권해, 오래 두고 공부하려던 마음에 적지 않은 돈을 결제한 분의 상황입니다. 그런데 얼마 지나지 않아 사이트·앱이 갑자기 닫히거나 강의 영상·진도·자료 접속이 막혔고, 환불을 요구하니 ‘약관상 평생수강권은 환불 불가다, 운영이 어려워졌다, 다른 사이트로 이전된다’며 책임을 떠넘기다, 끝내 고객센터·연락처를 닫고 사이트를 폐쇄해, 약속받은 평생수강은커녕 낸 돈도 돌려받지 못하게 되어 막막하실 거예요. 알고 보니 이미 운영 중단·매각·폐쇄를 앞둔 사정을 알면서도 그 직전에 평생수강권·장기 결제를 집중적으로 판 정황이고, 같은 시기에 결제한 다른 수강생들도 똑같이 접속이 막히고 환불을 거부당했다면 단순 운영 악화가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 곧 서비스를 중단·폐쇄할 사정을 알면서도 평생수강·계속 운영을 약속하며 결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 일의 대가 등 편취에 의한 사기죄에서 편취의 고의는 계약 당시를 기준으로 일을 완성·이행할 의사나 능력이 있었는지를 거래의 내용·경위·이행과정을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역으로, 평생수강권을 판매할 당시의 운영·폐쇄 사정을 가려 다툴 여지가 있습니다. 폐쇄 임박 인지 + 평생수강 약속 결제 + 접속 차단·폐쇄 결합은 ‘평생수강 약속 폐쇄 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 운영·폐쇄 사정·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 평생수강 폐쇄 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·운영 사정·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 평생수강 약속·광고·결제 내역 정리.</li>\n<li><strong>② 운영·폐쇄 사정·기망</strong> — 결제 당시 폐쇄·운영 중단 사정을 알았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 이용하지 못한 평생수강권 결제액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 카드 항변·계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 운영 악화와 달리, 곧 폐쇄할 사정을 알면서 평생수강·계속 운영을 가장해 결제를 받았는지가 판단의 분기점입니다. 평생수강을 약속한 광고와 폐쇄 시점·잠적 정황, 다른 수강생의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 평생수강 약속 광고·결제 화면·약관·카드 내역 캡처 보존.</li>\n<li><strong>2단계 — 폐쇄·차단 입증 (즉시)</strong> — 사이트·앱 폐쇄, 접속 차단, 환불 거부, 연락 두절 정황과 폐쇄 시점을 시간순으로 확보.</li>\n<li><strong>3단계 — 카드 항변·환불 요구 (병행)</strong> — 카드 항변권·결제 취소, 계좌 지급정지를 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰·소비자원 상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 카드 취소·계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 평생수강 폐쇄 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐쇄·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>평생수강 약속·광고·상세페이지 캡처 (거래 조건)</strong></li>\n<li><strong>수강 계약·약관·이용 조건 (계약 내용)</strong></li>\n<li><strong>평생수강권 결제·카드 할부 내역 (피해 금액)</strong></li>\n<li><strong>수강 진도·이용 내역 확인 자료 (손해 산정)</strong></li>\n<li><strong>사이트 폐쇄·접속 차단·환불 거부 기록</strong></li>\n<li><strong>업체·운영자·사업자·계좌 정보</strong></li>\n<li><strong>다른 수강생의 동일 피해·단체 채팅 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: ‘평생 수강·폐강 없음’을 약속한 광고·상세페이지를 결제 직후 캡처로 보존하고, 결제 시점과 사이트 폐쇄 시점의 간격을 정리하면 폐쇄 사정을 알면서 결제를 받았는지를 다투는 데 도움이 됩니다. 카드 결제였다면 항변권 행사 시한을 챙기고, 같은 시기 결제한 다른 수강생을 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐쇄 사정 인지</strong> — 결제 당시 곧 폐쇄할 사정을 알았는지.</li>\n<li><strong>평생수강 약속</strong> — 평생수강·계속 운영을 단정해 결제를 유도했는지.</li>\n<li><strong>편취 범의</strong> — 단순 운영 악화인지 처음부터 결제만 노렸는지.</li>\n<li><strong>편취액</strong> — 이용하지 못한 평생수강권 결제액이 피해액인지.</li>\n<li><strong>약관 효력</strong> — 환불 불가 약관이 그대로 인정되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 강의·환불 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (카드 결제 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일의 대가 편취 사기에서 편취 고의의 판단 기준',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득에 있고, 불법영득의 의사 내지 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후의 재력·환경·범행의 내용·거래의 이행과정 등 객관적 사정을 종합해 판단할 수밖에 없다고 보았습니다. 특히 일의 대가 등 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 일을 완성·이행할 의사나 능력이 없음에도 이를 완성·이행할 것처럼 거짓말을 하여 대가를 편취할 고의가 있었는지에 의하여 판단하여야 하고, 계약의 내용·체결 경위와 이행과정·결과 등을 종합해야 한다고 판시했습니다. 평생수강을 약속하고 결제를 받은 뒤 사이트를 폐쇄한 사안을 살펴볼 때에도, 결제 당시 평생 서비스를 제공할 의사·능력이 있었는지를 종합해 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '폐쇄 임박 인지 + 평생수강 약속 결제 + 접속 차단 결합 시 평생수강 약속 폐쇄 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '약관에 환불 불가라고 적혀 있는데 못 받나요?',
        answer:
          '<strong>환불 불가 약관이 그대로 인정되는지를 다투는 영역입니다.</strong> 평생수강 약속과 폐쇄 정황을 함께 정리하세요.',
      },
      {
        question: '그냥 회사가 망해서 사이트가 닫힌 것 아닌가요?',
        answer:
          '<strong>결제 당시 곧 폐쇄할 사정을 알면서 결제를 받았는지가 핵심인 영역입니다.</strong> 결제·폐쇄 시점 간격을 확보하세요.',
      },
      {
        question: '강의를 일부 들은 경우에도 환급되나요?',
        answer:
          '<strong>이용하지 못한 부분을 기준으로 환급을 다투는 영역입니다.</strong> 수강 진도·이용 내역을 정리하세요.',
      },
      {
        question: '평생수강이라는 광고가 지워졌는데 입증되나요?',
        answer:
          '<strong>캡처·약관·결제 화면으로도 약속 내용을 입증할 수 있는 영역입니다.</strong> 결제 직후 자료부터 모으세요.',
      },
      {
        question: '다른 수강생도 같이 막힌 것 같아요.',
        answer:
          '<strong>다수 수강생의 동일 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·결제 시점·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 강의 평생수강 폐쇄 추적', href: '/guide/fraud/fraud-online-lecture-lifetime-access-closure-track' },
      { label: '온라인 강의 평생회원 추적', href: '/guide/fraud/fraud-online-lecture-lifetime-membership-track' },
      { label: '온라인 강의 결제 취소 추적', href: '/guide/fraud/fraud-online-class-lecture-paid-cancelled-track' },
      { label: '온라인 강의 선결제 미제공 추적', href: '/guide/fraud/fraud-online-lecture-prepaid-no-service-track' },
    ],
  },

  // ─── 4. fraud-secondhand-concert-ticket-duplicate-resale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-concert-ticket-duplicate-resale-track',
    keyword: '중고 콘서트 티켓 중복 양도 기망 사기',
    questionKeyword: '중고 거래로 콘서트 티켓을 사면서 판매자가 ‘정상 양도해주겠다, 입장에 문제없다’고 해서 시세에 맞춰 돈을 보냈는데, 알고 보니 같은 좌석 티켓을 저 말고도 여러 명에게 중복으로 팔았어요. 결국 한 명만 입장하고 나머지는 막히거나 양도가 취소됐고, 저도 입장하지 못했어요. 판매자에게 따지니 ‘착오였다, 환불해주겠다’며 미루다 연락을 끊고 잠적했는데, 처음부터 한 좌석을 여러 명에게 중복 양도해 돈만 챙긴 정황이에요. 이런 중고 콘서트 티켓 중복 양도 기망을 사기로 신고하고 보낸 돈을 돌려받으려면 어떤 절차를 밟아야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '중고 콘서트 티켓 중복 양도 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 콘서트 티켓 중복 양도 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '정상 양도를 믿고 티켓 값을 보냈는데 같은 좌석이 여러 명에게 중복 양도돼 입장도 못 했다면, 형법 제347조 사기·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼·팬 커뮤니티·오픈채팅으로 콘서트·공연 티켓을 사면서 판매자에게서 ‘예매 내역이 확실하다, 정상적으로 양도해주겠다, 입장에 아무 문제 없다’는 말을 믿고, 인기 공연이라 시세에 맞춰 적지 않은 돈을 먼저 보낸 분의 상황입니다. 그런데 알고 보니 판매자가 같은 좌석·같은 예매번호 티켓을 저 한 사람에게만 판 것이 아니라, 비슷한 시기에 여러 명에게 중복으로 양도해 돈을 받아, 결국 공연 당일 한 명만 입장하고 나머지는 양도가 취소되거나 입장이 거부돼, 저도 자리에 들어가지 못한 채 돈만 날리게 되어 막막하실 거예요. 판매자에게 따지니 ‘단순 착오였다, 곧 환불해주겠다’며 차일피일 미루다, 끝내 연락처·계정을 닫고 잠적해, 같은 좌석을 산 다른 구매자들도 똑같이 입장하지 못하고 환불을 못 받았다면 단순 실수가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 하나의 좌석만 양도할 수 있음을 알면서도 여러 명에게 정상 양도해줄 것처럼 속여 각각 돈을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 편취 범의는 계약 당시를 기준으로 이행할 의사나 능력이 없음에도 이행할 것처럼 거짓말을 하여 재물을 편취할 고의가 있었는지로 판단하고, 거래의 내용·체결 경위·이행과정 등을 종합해야 한다고 본 사례 흐름이 있는 영역으로, 중복 양도 당시의 이행 의사·능력을 가려 다툴 여지가 있습니다. 단일 좌석 인지 + 다수 중복 양도 + 미입장·잠적 결합은 ‘중복 양도 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 중복 양도·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 콘서트 티켓 중복 양도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·중복 양도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 정상 양도 약속·거래 대화·송금 내역 정리.</li>\n<li><strong>② 중복 양도·기망</strong> — 같은 좌석을 여러 명에게 양도했는지, 이행 의사가 있었는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 티켓 값·수수료 등 교부 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 착오·취소와 달리, 하나의 좌석만 양도할 수 있음을 알면서 여러 명에게 정상 양도를 약속하고 각각 돈을 받았는지가 판단의 분기점입니다. 양도 약속 대화와 중복 양도·미입장 정황, 다른 구매자의 동일 피해를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 정상 양도 약속·예매 인증·거래 대화·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 중복 양도·미입장 입증 (즉시)</strong> — 같은 좌석 중복 판매, 입장 거부·양도 취소, 잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 콘서트 티켓 중복 양도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·중복 양도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>정상 양도 약속·예매 인증 캡처 (거래 조건)</strong></li>\n<li><strong>거래글·합의 내용·좌석 정보 (계약 내용)</strong></li>\n<li><strong>티켓 값·수수료 송금 내역 (피해 금액)</strong></li>\n<li><strong>같은 좌석 중복 양도 정황 자료</strong></li>\n<li><strong>입장 거부·양도 취소·미입장 확인 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>다른 구매자의 동일 좌석 피해·환불 거부 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 좌석·예매번호가 여러 명에게 양도된 정황을 모으는 것이 핵심이므로, 입장 거부·양도 취소 확인 자료와 다른 구매자의 좌석 정보를 대비해 정리하면 중복 양도 기망을 다투는 데 도움이 됩니다. 송금이 어느 계좌로 갔는지 흐름을 보존하고, 같은 판매자에게 당한 다른 구매자를 함께 모으면 반복 편취 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중복 양도 여부</strong> — 같은 좌석을 여러 명에게 양도했는지.</li>\n<li><strong>이행 의사</strong> — 정상 양도할 의사·능력이 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 착오인지 처음부터 중복 양도로 돈만 노렸는지.</li>\n<li><strong>편취액</strong> — 티켓 값·수수료 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 닉네임·연락처·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·티켓 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사대금 등 편취 사기에서 편취 범의의 판단 시점',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득에 있고, 사기죄의 주관적 구성요건인 불법영득의 의사 내지 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후의 재력·환경·범행의 내용·거래의 이행과정 등 객관적인 사정을 종합하여 판단할 수밖에 없다고 보았습니다. 특히 공사대금 등 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 피고인에게 일을 완성·이행할 의사나 능력이 없음에도 이를 이행할 것처럼 거짓말을 하여 대가를 편취할 고의가 있었는지에 의하여 판단해야 하고, 계약의 내용·체결 경위와 이행과정·결과 등을 종합해야 한다고 판시했습니다. 같은 좌석 티켓을 여러 명에게 중복 양도하고 돈을 받은 사안을 살펴볼 때에도, 양도 약속 당시 실제 정상 양도할 의사·능력이 있었는지를 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '단일 좌석 인지 + 다수 중복 양도 + 미입장·잠적 결합 시 중복 양도 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 단순 착오였다는데 사기인가요?',
        answer:
          '<strong>하나만 양도할 수 있음을 알면서 여러 명에게 약속했는지가 핵심인 영역입니다.</strong> 중복 양도·미입장 정황을 확보하세요.',
      },
      {
        question: '같은 좌석을 여러 명이 샀다는 걸 어떻게 입증하나요?',
        answer:
          '<strong>입장 거부·양도 취소 자료와 다른 구매자의 좌석 정보가 단서인 영역입니다.</strong> 좌석·예매번호를 대비해 정리하세요.',
      },
      {
        question: '입장은 한 명이라도 했는데 나머지는 사기인가요?',
        answer:
          '<strong>나머지에 대한 양도 의사·능력이 없었는지를 따지는 영역입니다.</strong> 미입장 구매자별로 거래 자료를 정리하세요.',
      },
      {
        question: '송금만 하고 만난 적이 없는데 신고되나요?',
        answer:
          '<strong>비대면 거래여도 송금·대화 자료로 신고를 검토할 수 있는 영역입니다.</strong> 송금·약속·미입장 자료를 정리해 접수하세요.',
      },
      {
        question: '다른 구매자도 같이 당한 것 같아요.',
        answer:
          '<strong>다수 구매자의 동일 좌석 피해는 편취 다툼의 출발점인 영역입니다.</strong> 단체 채팅·좌석 정보·환불 거부 기록을 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '콘서트 티켓 가짜 링크 재판매 추적', href: '/guide/fraud/fraud-concert-ticket-resale-fake-link-track' },
      { label: '콘서트 티켓 양도 불이행 추적', href: '/guide/fraud/fraud-concert-ticket-resale-no-transfer-track' },
      { label: '콘서트 티켓 재판매 추적', href: '/guide/fraud/fraud-concert-ticket-resale-track' },
      { label: '콘서트 티켓 양도 잠적 추적', href: '/guide/fraud/fraud-concert-ticket-resale-transfer-no-show-track' },
    ],
  },

  // ─── 5. fraud-puppy-adoption-pedigree-forgery-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-puppy-adoption-pedigree-forgery-sale-track',
    keyword: '반려견 분양 혈통서 위조 판매 기망 사기',
    questionKeyword: '반려견을 분양받으면서 분양업체·판매자가 ‘정식 혈통서가 있는 순종이다, 챔피언 혈통이라 분양가가 비싸다’며 혈통서를 보여줘 믿고 순종 시세에 맞춰 적지 않은 돈을 주고 데려왔어요. 그런데 이후 협회·동물병원에 확인하니 혈통서가 위조됐거나 다른 개의 것이었고, 순종도 챔피언 혈통도 아니었어요. 판매자에게 따지니 ‘진짜 혈통서다, 환불은 안 된다’며 발뺌하다 연락을 끊었는데, 처음부터 위조 혈통서로 순종처럼 둔갑시켜 판 정황이고 다른 분양자도 같이 당했어요. 이런 반려견 분양 혈통서 위조 판매 기망을 사기로 신고하고 보낸 돈을 돌려받을 수 있는지 점검해볼 수 있나요?',
    ctaKeyword: '반려견 분양 혈통서 위조 판매·기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '반려견 혈통서 위조 분양 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정식 혈통서를 믿고 순종 시세로 분양받았는데 혈통서가 위조로 드러나고 환불도 거부당했다면, 형법 제347조 사기·기망 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「반려견을 분양받으면서 분양업체·켄넬·개인 판매자에게서 ‘이 강아지는 정식 혈통서가 있는 순종이고, 부모견이 챔피언 혈통이라 분양가가 비싸다, 협회 등록 혈통서까지 다 챙겨준다’는 말과 함께 혈통서·등록증을 직접 보여줘, 건강하고 혈통이 분명한 아이를 데려온다는 믿음으로 순종·챔피언 혈통 시세에 맞춰 적지 않은 분양가를 주고 강아지를 데려온 분의 상황입니다. 그런데 이후 견종 협회·동물병원·전문가에게 확인해보니, 받은 혈통서가 위조됐거나 다른 개의 것이었고, 등록번호가 조회되지 않거나 부모견 정보가 실제와 달라, 순종도 챔피언 혈통도 아닌 아이를 순종 값에 데려온 셈이 되어 막막하실 거예요. 판매자에게 따지니 ‘진짜 혈통서가 맞다, 분양이 끝났으니 환불은 못 한다’며 발뺌하다 점점 연락을 피하고, 알고 보니 같은 판매자가 위조 혈통서로 여러 강아지를 순종처럼 둔갑시켜 다른 분양자들에게도 비슷하게 판 정황까지 보이면 단순 착오가 아닐 수 있어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 혈통서가 위조됐거나 순종·챔피언 혈통이 아닌 사실을 알면서도 정식 혈통서·순종이라고 속여 비싼 분양가를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자에게 교부받게 한 경우에도 사기죄가 성립할 수 있고, 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산 침해가 되어 곧 사기죄가 성립한다고 본 사례 흐름이 있는 영역으로, 분양가 교부 경위와 기망을 가려 다툴 여지가 있습니다. 혈통서 위조·순종 가장 + 비싼 분양가 수령 + 환불 거부·발뺌 결합은 ‘혈통서 위조 판매 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 위조·기망 입증 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려견 분양 혈통서 위조 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·위조 입증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 순종·챔피언 혈통 강조 설명·거래 대화·분양가 결제 내역 정리.</li>\n<li><strong>② 위조·기망 입증</strong> — 협회 조회·동물병원 소견으로 혈통서 위조·순종 아님을 확인.</li>\n<li><strong>③ 편취·손해액</strong> — 순종 시세로 지급한 분양가 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 착오와 달리, 혈통서가 위조됐거나 순종이 아닌 사실을 알면서 정식 혈통서·순종이라 속여 비싼 분양가를 받았는지가 판단의 분기점입니다. 순종·혈통을 강조한 대화와 협회 조회 결과, 같은 판매자의 반복 판매 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 순종·혈통 강조 설명·혈통서·거래 대화·분양가 결제 내역 보존.</li>\n<li><strong>2단계 — 위조 입증 (즉시)</strong> — 견종 협회 등록 조회, 동물병원·전문가 소견, 부모견 정보 불일치 자료 확보.</li>\n<li><strong>3단계 — 지급정지·환불 요구 (병행)</strong> — 송금 계좌 지급정지를 112·은행에 요청하고 계약 해제·환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·피해구제·민사 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려견 분양 혈통서 위조 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·위조·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>순종·챔피언 혈통 강조 광고·대화 캡처 (거래 조건)</strong></li>\n<li><strong>분양 계약서·약정·혈통서 원본 (계약 내용)</strong></li>\n<li><strong>분양가·운송비 결제 내역 (피해 금액)</strong></li>\n<li><strong>견종 협회 등록 조회 결과</strong></li>\n<li><strong>동물병원·전문가 소견·부모견 정보 불일치 자료</strong></li>\n<li><strong>판매자·업체·켄넬·계좌 정보</strong></li>\n<li><strong>환불 거부 대화·다른 분양자 피해 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 견종 협회 등록 조회로 혈통서 위조·미등록 여부를 명확히 하고, 판매자가 순종·챔피언 혈통을 강조한 대화와 받은 혈통서를 대비하면 위조 판매 기망을 다투는 데 도움이 됩니다. 같은 판매자가 다른 분양자에게도 비슷한 혈통서로 판 흔적을 함께 모으면 반복 판매 정황을 입증하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위조 여부</strong> — 실제로 혈통서가 위조·타견의 것인지.</li>\n<li><strong>순종 가장</strong> — 순종·챔피언 혈통이 아님을 알면서 속였는지.</li>\n<li><strong>편취 범의</strong> — 판매자도 몰랐는지 처음부터 위조 판매였는지.</li>\n<li><strong>편취액</strong> — 순종 시세 분양가가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 업체·켄넬·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (반려동물 분양 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 교부형 사기와 재물 편취의 성립',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 범인이 기망행위로 스스로 재물을 취득하지 않고 제3자로 하여금 재물을 교부받게 한 경우에도, 그 제3자가 정을 모르는 도구나 대리인의 관계에 있거나 적어도 범인에게 제3자로 하여금 재물을 취득하게 할 의사가 있으면 사기죄가 성립한다고 보았습니다. 그 의사는 적극적 의욕이나 확정적 인식이 아니라 미필적 인식으로도 충분하다고 보았습니다. 또 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 피해자의 재산 침해가 되어 곧 사기죄가 성립하고, 그로 인한 이익이 결과적으로 누구에게 귀속되는지는 사기죄의 성부에 아무런 영향이 없다고 판시했습니다. 위조 혈통서로 순종처럼 둔갑시켜 분양가를 받은 사안을 살펴볼 때에도, 기망으로 분양가가 교부됐는지를 기준으로 편취 여부를 가려 검토해볼 수 있습니다.',
        takeaway: '혈통서 위조·순종 가장 + 비싼 분양가 수령 + 환불 거부 결합 시 혈통서 위조 판매 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '혈통서가 위조라는 걸 어떻게 확인하나요?',
        answer:
          '<strong>견종 협회 등록 조회가 핵심 단서인 영역입니다.</strong> 등록번호 미조회·부모견 정보 불일치 자료를 확보하세요.',
      },
      {
        question: '판매자도 순종인 줄 알았다는데 사기인가요?',
        answer:
          '<strong>위조·순종 아님을 알면서 속였거나 묵비했는지가 핵심인 영역입니다.</strong> 순종 강조 대화를 정리하세요.',
      },
      {
        question: '강아지를 이미 키우고 있는데 환급되나요?',
        answer:
          '<strong>혈통·순종 가장으로 비싼 분양가를 낸 손해를 기준으로 다투는 영역입니다.</strong> 조회·소견과 결제 자료를 정리하세요.',
      },
      {
        question: '직거래라 현금으로 줬으면 환급이 안 되나요?',
        answer:
          '<strong>현금 거래여도 계약 해제·민사 반환을 검토할 수 있는 영역입니다.</strong> 거래·혈통서·조회 자료를 정리하세요.',
      },
      {
        question: '같은 판매자에게 여러 명이 당한 것 같아요.',
        answer:
          '<strong>반복 판매 정황은 편취 다툼의 출발점인 영역입니다.</strong> 같은 판매자의 다른 분양·후기를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '반려견 분양 혈통·건강 허위 추적', href: '/guide/fraud/fraud-puppy-adoption-pedigree-health-false-track' },
      { label: '온라인 반려견 분양 질병 추적', href: '/guide/fraud/fraud-pet-puppy-online-sale-sickness-track' },
      { label: '반려견 분양 예약금 추적', href: '/guide/fraud/fraud-puppy-adoption-reservation-deposit-track' },
      { label: '반려견 가짜 혈통서 추적', href: '/guide/fraud/fraud-puppy-fake-pedigree-track' },
    ],
  },

  // ─── 6. fraud-realestate-down-payment-double-contract-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-realestate-down-payment-double-contract-falsely-accused-defense',
    keyword: '부동산 계약금 이중계약 사기 고의 무고 방어',
    questionKeyword: '부동산 매매·임대 과정에서 한 사람과 계약하고 계약금을 받은 뒤, 사정이 생겨 다른 사람과도 계약을 진행하게 됐는데, 먼저 계약했던 쪽이 ‘처음부터 이중으로 계약해 계약금을 가로챌 작정이었다, 사기다’라며 저를 고소했어요. 저는 계약 당시 정상적으로 거래할 생각이었고 계약금도 돌려주거나 정산할 의사가 있었는데, 이중계약이라는 사정만으로 한순간에 사기 고의로 몰려 너무 억울해요. 계약서·정산 의사를 보여주는 자료도 있는데, 이렇게 부동산 계약금 이중계약이 사기로 고소된 상황에서 편취 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '부동산 계약금 이중계약 편취 고의·고지의무 구별 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '부동산 계약금 이중계약 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '이중계약이 됐다는 이유로 사기로 고소돼 억울하다면, 형법 제347조 편취 고의 판단 시점과 고지의무·채무불이행 구별 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「부동산 매매·전월세 계약 과정에서 먼저 한 상대와 계약을 맺고 계약금을 받았는데, 잔금 지연·조건 변경·계약 해제 협의 등 사정이 생겨 다른 상대와도 계약을 진행하게 되었고, 그러자 먼저 계약했던 쪽이 ‘너는 처음부터 같은 물건을 이중으로 계약해 계약금을 가로챌 작정이었다, 이건 명백한 사기다’라며 저를 고소해, 한순간에 사기범으로 몰린 분의 상황입니다. 저는 계약 당시 정상적으로 거래를 마칠 생각이었고, 이중계약이 된 뒤에도 받은 계약금을 돌려주거나 배액 상환·정산으로 해결할 의사가 있었으며, 사정 변경을 숨기고 돈만 챙길 의도는 없었다고 생각하는데, 이중계약이라는 외형만으로 민사상 채무·정산 문제가 형사 사기로 비화되어 너무 억울하고 막막하실 거예요. 부동산은 금액이 크고 고지·정산을 둘러싼 다툼이 잦아 ‘처음부터 가로챌 작정이었다’는 일방적 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 각 계약의 체결 경위와 시점, 계약금의 흐름, 정산·반환 의사를 보여주는 연락을 차분히 정리해 편취 고의가 없었다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조 사기죄가 성립하려면 기망행위와 편취의 고의가 인정되어야 하고, 그 판단은 행위 당시를 기준으로 하는 영역입니다. 판례는 사기죄의 기망에는 신의칙상 고지의무 위반에 의한 부작위도 포함될 수 있으나, 편취의 고의는 거래의 이행과정·당사자 관계 등 객관적 사정을 종합해 판단해야 하고, 채무불이행 사실만으로 곧바로 편취 고의를 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 각 계약 체결의 경위와 계약금 처리, 정산·반환 의사를 종합해 편취 고의가 있었는지를 가려 다툴 여지가 있는 영역입니다. 정상 거래 의사 + 계약·정산 자료 + 사정 변경에 따른 이중계약 결합은 ‘편취 고의 부재·고지의무 구별’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 계약 체결 경위 정리 ② 계약금·자금 흐름 ③ 기망·고지 여부 ④ 편취 고의 ⑤ 채무불이행 구별·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 부동산 계약금 이중계약 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·자금 흐름·기망 여부·편취 고의·채무불이행 구별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 체결 경위 정리</strong> — 각 계약의 시점·조건·체결 경위 정리.</li>\n<li><strong>② 계약금·자금 흐름</strong> — 계약금 수령·정산·반환 등 자금 흐름 정리.</li>\n<li><strong>③ 기망·고지 여부</strong> — 사정 변경·선행 계약을 사실대로 고지했는지 검토.</li>\n<li><strong>④ 편취 고의</strong> — 행위 당시 기준으로 편취의 범의가 인정되는지 검토.</li>\n<li><strong>⑤ 채무불이행 구별·방어</strong> — 정산·반환 다툼이 민사 분쟁에 그치는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 계약금을 가로챌 의사로 이중계약을 가장했는지(편취 고의), 아니면 사정 변경으로 이중계약이 됐고 정산·반환 의사가 있었는지(채무불이행)가 판단의 분기점입니다. 각 계약 경위와 계약금 흐름, 정산·반환 의사를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·자금 자료 보존 (즉시)</strong> — 각 계약서·특약·계약금 수령·정산·반환 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 경위·고지 정리 (즉시)</strong> — 사정 변경·해제 협의·선행 계약 고지 정황을 정리.</li>\n<li><strong>3단계 — 편취 고의·정산 의사 검토 (병행)</strong> — 정산·반환·배액 상환 의사와 기망 부재를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 채무불이행 구별·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">부동산 계약금 이중계약 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·자금 흐름·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>각 계약서·특약·중개 자료 (계약 경위)</strong></li>\n<li><strong>계약금 수령·정산·반환 내역 (자금 흐름)</strong></li>\n<li><strong>사정 변경·해제 협의 대화 (고지 내용)</strong></li>\n<li><strong>선행 계약 고지·안내 기록 (고지 여부)</strong></li>\n<li><strong>정산·반환·배액 상환 제안 기록 (정산 의사)</strong></li>\n<li><strong>중개인·관계자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 각 계약의 체결 시점과 사정 변경·해제 협의의 흐름을 시간순으로 정리하면 처음부터 가로챌 의사였는지, 사정 변경으로 이중계약이 됐는지를 다투는 데 도움이 됩니다. 계약금을 정산·반환하거나 배액 상환하려 한 연락을 함께 모아 채무불이행·정산 다툼과의 구별을 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 행위 당시 계약금을 편취할 범의가 있었는지.</li>\n<li><strong>고지의무</strong> — 선행 계약·사정 변경을 고지해야 했는지, 고지했는지.</li>\n<li><strong>정산·반환 의사</strong> — 계약금을 정산·반환할 의사가 있었는지.</li>\n<li><strong>채무불이행 구별</strong> — 정산·이행 다툼이 민사 분쟁에 그치는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반과 편취 고의의 판단 기준',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 기망은 재산상 거래관계에서 지켜야 할 신의와 성실의 의무를 저버리는 모든 적극적·소극적 행위를 말하고, 거래 상대방이 일정한 사정을 고지받았더라면 거래를 하지 않았을 관계가 인정되는 경우에는 신의칙상 그 사정을 고지할 의무가 있으며 이를 묵비한 것은 기망에 해당한다고 보았습니다. 또 사기죄의 편취 고의는 피고인이 자백하지 않는 한 범행 전후의 재력·환경·범행의 내용·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 단순한 채무불이행 사실만으로 곧바로 편취 고의를 인정할 수는 없으나 확실한 변제·이행 의사나 능력 없이 이행할 것처럼 가장한 경우에는 편취 고의를 인정할 수 있다고 판시했습니다. 부동산 이중계약이 사기로 고소된 사안을 살펴볼 때에도, 행위 당시 정상 이행·정산 의사와 선행 계약 고지 여부를 종합해 편취 고의를 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '정상 거래 의사 + 계약·정산 자료 + 사정 변경 이중계약 결합 시 편취 고의 부재·고지의무 구별 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '이중계약이 됐으면 무조건 사기인가요?',
        answer:
          '<strong>행위 당시 계약금을 편취할 범의가 있었는지가 핵심인 영역입니다.</strong> 각 계약 경위와 정산·반환 의사를 정리하세요.',
      },
      {
        question: '선행 계약을 말 안 한 게 기망인가요?',
        answer:
          '<strong>고지의무가 있었는지와 실제 고지했는지를 따지는 영역입니다.</strong> 사정 변경·고지·해제 협의 기록을 정리하세요.',
      },
      {
        question: '계약금을 돌려주려 했는데도 사기로 보나요?',
        answer:
          '<strong>정산·반환 의사는 편취 고의와 구별해 따지는 영역입니다.</strong> 반환·배액 상환 제안 연락을 모으세요.',
      },
      {
        question: '정산 다툼인데 형사로 고소됐어요.',
        answer:
          '<strong>정산·이행 다툼이 민사 분쟁에 그치는지가 구별의 핵심인 영역입니다.</strong> 계약·자금 흐름과 협의 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>각 계약 경위·계약금 흐름에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 혐의 방어 준비자료, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '아파트 분양권 이중계약 추적', href: '/guide/fraud/fraud-apartment-presale-right-double-contract-track' },
      { label: '월세 이중계약 보증금 추적', href: '/guide/fraud/fraud-monthly-rent-double-contract-deposit-track' },
      { label: '월세 이중계약 추적', href: '/guide/fraud/fraud-monthly-rent-double-contract-track' },
      { label: '원룸 이중계약 추적', href: '/guide/fraud/fraud-oneroom-double-contract-track' },
    ],
  },

  // ─── 7. sex-crime-library-reading-room-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-library-reading-room-touch-report-track',
    keyword: '도서관 열람실 추행 신고',
    questionKeyword: '도서관 열람실·자료실에서 공부하던 중, 옆·뒷자리에 앉은 사람이 자료를 보는 척하거나 좁은 통로를 지나는 척하면서 어깨·허벅지·등·손등에 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 좁아서 닿은 건가 싶었지만 접촉이 반복되고 노골적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 조용한 공간이라 그 자리에서 큰 소리로 항의하거나 곧바로 제지하기도 어려웠는데, 이런 도서관 열람실 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '도서관 열람실 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '도서관 열람실 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '도서관 열람실에서 좁은 자리를 핑계로 신체에 손을 대는 접촉을 당해 수치스러웠다면, 강제추행죄의 추행 해당성·고의 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「도서관 열람실·자료실·스터디카페처럼 조용하고 사람이 가까이 붙어 앉는 공간에서 공부하거나 책을 보던 중, 바로 옆·뒷자리에 앉은 사람이 자료를 함께 보는 척하거나 좁은 책상·통로를 지나는 척하면서 어깨·허벅지·등·허리·손등 등 신체에 손을 대거나, 몸을 바짝 붙여 밀착하는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘자리가 좁아 어쩌다 닿은 건가’ 싶어 몸을 틀거나 자리를 옮겼는데도, 시간이 지나도 접촉이 계속되고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 가까운 자리를 틈탄 추행이라는 생각이 들었지만, 정숙해야 하는 공간이라 큰 소리로 항의하거나 곧바로 제지하기도 어려운 채 당하고 나니, 신고해도 ‘좁은 데서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 공부하러 간 도서관에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 좁은 자리를 핑계로 했더라도 신체의 민감한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 강제추행죄의 폭행은 상대방의 신체에 대해 불법한 유형력을 행사하는 것으로, 폭행행위 자체가 곧바로 추행에 해당하는 경우에는 상대방의 의사에 반하는 유형력의 행사가 있는 이상 그 힘의 대소강약을 불문한다고 본 사례 흐름이 있는 영역으로, 좁은 공간을 틈탄 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 좁은 자리 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합은 ‘열람실 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 도서관 열람실 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 도서관명·이용 시간대·좌석 위치·혼잡도 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 어깨·허벅지·등 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 우연한 스침을 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁아 닿았다는 변명과 달리, 가까운 자리를 틈타 민감 부위를 만지거나 필요 이상 밀착해 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 열람실 CCTV·좌석·이용 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 도서관명·시간대·좌석·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 열람실·통로 CCTV·좌석 발권·출입 내역·목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">도서관 열람실 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>도서관명·이용 시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>열람실·통로 CCTV 보존 요청 자료</strong></li>\n<li><strong>좌석 발권·출입·회원증 등 이용 입증 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 열람실 내부는 CCTV가 제한적일 수 있으나 출입구·통로·복도 CCTV와 좌석 발권·출입 내역으로 동선을 보강할 수 있고, 보관 기간이 짧으니 시간대와 좌석을 특정해 도서관·경찰을 통해 신속히 보존을 요청하는 것이 중요합니다. 스침으로 설명되지 않는 접촉이 자리를 옮긴 뒤에도 반복됐다는 점을 구체적으로 기록하면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 스침을 넘는 민감 부위 접촉·밀착인지.</li>\n<li><strong>추행 고의</strong> — 행위마다 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘좁아서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·좌석·목격으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 폭행과 기습추행의 성립',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 폭행 또는 협박은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대하여 불법한 유형력을 행사하거나 일반적으로 보아 상대방으로 하여금 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 보아야 한다고 판단했습니다. 또 폭행행위 자체가 곧바로 추행에 해당하는 경우에는 상대방의 의사에 반하는 유형력의 행사가 있는 이상 그 힘의 대소강약을 불문하고 강제추행이 성립할 수 있다고 보아, 종래 폭행·협박 선행형에 항거 곤란 정도를 요구하던 법리를 변경했습니다. 좁은 열람실에서 신체에 손을 대거나 밀착한 접촉이 문제 된 사안을 살펴볼 때에도, 의사에 반하는 유형력의 행사와 추행 해당성을 기준으로 강제추행 성부를 가려 검토해볼 수 있습니다.',
        takeaway: '좁은 자리 이용 + 민감 부위 접촉·밀착 + 반복·노골 결합 시 열람실 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 닿은 것이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>우연한 스침을 넘어 성적 자유를 침해하는 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '강하게 밀치거나 항거하지 못했는데 강제추행인가요?',
        answer:
          '<strong>의사에 반하는 유형력이 있으면 힘의 강약을 불문하는 영역입니다.</strong> 접촉의 태양과 직후 반응을 정리하세요.',
      },
      {
        question: '열람실 안은 CCTV가 없는데 신고할 수 있나요?',
        answer:
          '<strong>출입구·통로 CCTV·좌석·출입 내역으로도 다툴 수 있는 영역입니다.</strong> 인근 영상과 동선 자료를 폭넓게 모으세요.',
      },
      {
        question: '조용한 곳이라 그 자리에서 항의하지 못했어요.',
        answer:
          '<strong>즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지·자리 이동을 정리하세요.',
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
      { label: '노래방 밀폐공간 추행 신고', href: '/guide/sex-crime/sex-crime-karaoke-room-confined-space-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: '워터파크 샤워실 추행 신고', href: '/guide/sex-crime/sex-crime-waterpark-shower-room-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },

  // ─── 8. sex-crime-elevator-enclosed-space-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-elevator-enclosed-space-touch-report-track',
    keyword: '엘리베이터 밀폐공간 추행 신고',
    questionKeyword: '아파트·건물 엘리베이터에 단둘이 또는 사람이 적은 채로 탔는데, 같이 탄 사람이 좁고 닫힌 공간이라는 점을 틈타 엉덩이·허벅지·허리에 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 좁아서 닿은 건가 싶었지만 접촉이 노골적이고 의도적이라 단순한 스침이 아니라 추행이라는 생각이 들었어요. 짧은 시간에 갑자기 벌어진 데다 닫힌 공간이라 당황해 제대로 항의하거나 도망치지도 못했는데, 이런 엘리베이터 밀폐공간 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '엘리베이터 밀폐공간 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 밀폐공간 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '엘리베이터 안에서 좁고 닫힌 공간을 틈타 신체를 만지는 접촉을 당해 수치스러웠다면, 강제추행죄 신고 절차와 CCTV 확보·보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「아파트·오피스텔·상가 건물의 엘리베이터에 단둘이 타거나 사람이 거의 없는 상태로 탔는데, 함께 탄 사람이 좁고 사방이 닫힌 공간이라는 점, 짧은 시간 다른 사람의 시선이 닿지 않는다는 점을 틈타 엉덩이·허벅지·허리·등 등 신체에 손을 대거나, 몸을 바짝 밀착해 비비는 등 단순한 스침으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘좁은 데서 어쩌다 닿은 건가’ 싶어 구석으로 물러섰는데도, 접촉이 멈추지 않고 손의 움직임이 점점 노골적이어서, 단순한 우연이 아니라 닫힌 공간을 틈탄 추행이라는 생각이 들었지만, 갑작스럽고 도망칠 곳도 없는 밀폐된 공간에서 당황해 큰 소리로 항의하거나 곧바로 제지하기도 어려운 채 당하고 나니, 신고해도 ‘좁아서 어쩌다 닿은 것’으로 가볍게 치부될까 봐 막막하실 거예요. 매일 오르내리는 일상 공간에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 좁고 닫힌 공간이라는 점을 이용해 의사에 반해 엉덩이·허벅지 등 민감한 부위를 만지거나 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 하고, 피해자의 진술이 사실상 유일한 직접증거인 경우 그 진술의 신빙성을 일관성·구체성 등을 기준으로 신중히 살펴야 한다고 본 사례 흐름이 있는 영역으로, 밀폐 공간을 틈탄 접촉이 추행에 해당하는지를 가려 다툴 여지가 있습니다. 밀폐 공간 이용 + 민감 부위 접촉·밀착 + 노골·반복 결합은 ‘엘리베이터 추행 신고’를 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·동선 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 밀폐공간 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 건물명·층·시간대·탑승 인원·동선 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 엉덩이·허벅지·허리 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 밀폐 공간을 이용한 의사에 반하는 추행인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁아 닿았다는 변명과 달리, 닫힌 공간을 틈타 의사에 반해 민감 부위를 만지거나 밀착했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 엘리베이터 CCTV·출입 내역 등 동선 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 건물명·층·시간대·탑승 정황·접촉 부위·방식·반복을 기록·보존.</li>\n<li><strong>2단계 — CCTV·객관 자료 확보 (즉시)</strong> — 엘리베이터 내부·로비·층별 CCTV, 출입·카드 내역, 목격자 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 밀폐공간 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>건물명·층·시간대·동선 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>엘리베이터·로비 CCTV 보존 요청 자료</strong></li>\n<li><strong>출입카드·공동현관·방문 기록 등 이용 입증 자료</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 엘리베이터는 내부 CCTV가 설치된 경우가 많지만 보관 기간이 짧으니 건물 관리실·경찰을 통해 층·시간대를 특정해 신속히 보존을 요청하는 것이 중요합니다. 닿았다는 변명으로 설명되지 않는 접촉이 구석으로 물러선 뒤에도 이어졌다는 점을 구체적으로 기록하면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 밀폐 공간을 틈탄 의사에 반하는 접촉·밀착인지.</li>\n<li><strong>추행 고의</strong> — 행위마다 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>우연 접촉 변명</strong> — ‘좁아서 닿았다’ 변명에 가려지지 않는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·출입 내역으로 가해자를 특정할 수 있는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 판단 기준과 피해자 진술의 신빙성',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술이 합리적 의심을 배제할 만한 신빙성이 있는지는 진술 내용의 주요 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적인지, 허위로 불리한 진술을 할 동기가 있는지 등을 종합해 신중히 판단해야 한다고 보았습니다. 또 추행이란 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 의미하며, 강제추행죄 성립에 필요한 주관적 구성요건은 고의로 충분하고 성욕을 자극·만족시키려는 동기나 목적까지 있어야 하는 것은 아니라고 판시했습니다. 닫힌 엘리베이터 안에서의 접촉이 문제 된 사안을 살펴볼 때에도, 구체적 행위 태양과 피해자 진술의 신빙성을 종합해 추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '밀폐 공간 이용 + 민감 부위 접촉·밀착 + 노골·반복 결합 시 엘리베이터 추행 신고 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 닿은 것뿐이라는데 추행인가요?',
        answer:
          '<strong>닫힌 공간을 빌렸어도 의사에 반하는 접촉인지가 핵심인 영역입니다.</strong> 닿음으로 설명되지 않는 접촉·반복 정황을 기록하세요.',
      },
      {
        question: '엘리베이터 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>관리실·경찰을 통해 층·시간대를 특정해 보존을 요청하는 영역입니다.</strong> 보관 기간이 짧으니 즉시 요청하세요.',
      },
      {
        question: '당황해서 그 자리에서 항의하지 못했어요.',
        answer:
          '<strong>밀폐 공간의 당혹으로 즉시 항의하지 못했어도 신고를 검토할 수 있는 영역입니다.</strong> 직후 반응·메시지를 정리하세요.',
      },
      {
        question: '성적 의도가 있었는지 모르겠는데 추행인가요?',
        answer:
          '<strong>강제추행은 고의로 충분하고 별도 성적 동기·목적까지 요구하지 않는 영역입니다.</strong> 접촉의 태양·반복을 중심으로 정리하세요.',
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
      { label: '노래방 밀폐공간 추행 신고', href: '/guide/sex-crime/sex-crime-karaoke-room-confined-space-touch-report-track' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '콜택시 기사 추행 신고', href: '/guide/sex-crime/sex-crime-call-taxi-driver-touch-report-track' },
      { label: '회식 강제 합석 추행 신고', href: '/guide/sex-crime/sex-crime-company-dinner-forced-seating-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-private-tutoring-guidance-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-private-tutoring-guidance-pretext-touch-report-track',
    keyword: '과외 교습 지도 빙자 추행 신고',
    questionKeyword: '과외·개인 교습을 받던 중, 교습자가 ‘자세를 봐준다, 문제 푸는 걸 옆에서 도와준다’며 어깨·허벅지·손·등에 필요 이상으로 손을 대거나 몸을 밀착해 너무 불쾌하고 수치스러웠어요. 처음엔 지도 동작인가 싶어 참았지만 갈수록 접촉이 노골적이고 교습과 무관한 부위에 집중되며, 단둘이 있는 상황을 이용하는 것 같았어요. 교습 지도라는 명목으로 한 일이라 추행이라고 신고해도 될지 망설여지는데, 이런 과외 교습 지도 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '과외 교습 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '과외 교습 지도 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '과외 지도를 빙자해 신체에 필요 이상 손을 대는 접촉을 당해 수치스러웠다면, 강제추행죄의 추행 해당성·고의 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「집·교습소·스터디룸에서 과외·개인 교습·레슨을 받던 중, 교습자가 ‘자세를 교정해준다, 푸는 과정을 옆에서 봐준다, 손 모양을 잡아준다’며 어깨·허벅지·손·등·허리 등 교습과 직접 관련 없는 신체 부위까지 필요 이상으로 손을 대거나, 몸을 바짝 붙여 밀착하는 등 단순한 지도 동작으로는 설명되지 않는 접촉을 해 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘가르치다 보니 그런가, 지도 동작인가’ 싶어 참고 넘겼는데도, 시간이 지나도 접촉이 계속되고 손의 움직임이 점점 노골적이며 교습과 무관한 부위에 집중되어, 단둘이 있는 폐쇄적인 상황을 이용한 추행이라는 생각이 들었지만, 교습 지도라는 명목이 앞서다 보니 ‘가르치려고 그런 건데 내가 예민한 건가’ 싶어 신고를 망설이게 되어 막막하실 거예요. 배우려고 시작한 교습에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 교습 지도를 빙자했더라도 신체의 민감한 부위를 필요 이상 만지거나 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 폭행행위 자체가 추행에 해당하는 기습추행의 경우 상대방의 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문하고, 추행 해당 여부는 피해자의 의사·관계·경위와 구체적 행위 태양 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 지도를 빙자한 접촉이 의사에 반하는 추행에 해당하는지를 가려 다툴 여지가 있습니다. 지도 빙자 + 교습 무관 부위 접촉·밀착 + 반복·노골 결합은 ‘교습 지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 과외 교습 지도 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 교습 종류·장소·시간·교습자와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 어깨·허벅지·손 등 교습 무관 부위 접촉·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 지도 동작을 넘어 성적 자유를 침해하는 접촉인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지도라는 명목과 달리, 교습과 무관한 부위를 필요 이상 만지거나 밀착해 성적 자유를 침해했는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 교습 일정·메시지 등 관계 자료를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 교습 종류·장소·시간·접촉 부위·방식·반복 정황을 기록·보존.</li>\n<li><strong>2단계 — 관계·객관 자료 확보 (즉시)</strong> — 교습 일정·연락·결제 내역, 교습소·인근 CCTV, 목격·전해들은 진술을 신속히 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">과외 교습 지도 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>교습 종류·장소·시간·관계 정리 (경위)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>교습 일정·연락·결제 내역 (관계 입증)</strong></li>\n<li><strong>교습소·인근 CCTV 보존 요청 자료</strong></li>\n<li><strong>목격자·가족·지인 등 전해들은 진술·연락처</strong></li>\n<li><strong>당일·직후 메시지·심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 교습 일정·연락·결제 내역으로 교습 관계와 단둘이 있던 정황을 보강하고, 접촉이 교습과 무관한 부위에 집중되고 자세 교정으로 설명되지 않는다는 점을 구체적으로 기록하면 지도 빙자 추행 해당성을 다투는 데 도움이 됩니다. 사건 직후 가족·지인에게 알린 메시지나 상담 기록도 진술의 신빙성을 보강하는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 동작을 넘는 교습 무관 부위 접촉·밀착인지.</li>\n<li><strong>지도 빙자 변명</strong> — ‘자세 교정·지도였다’ 변명에 가려지지 않는지.</li>\n<li><strong>추행 고의</strong> — 행위마다 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>관계·정황</strong> — 단둘이 있는 폐쇄적 상황을 이용했는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행 판단 기준',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행 또는 협박으로 항거를 곤란하게 한 뒤 추행하는 경우뿐만 아니라 폭행행위 자체가 추행으로 인정되는 이른바 기습추행도 포함되고, 기습추행에서 추행과 동시에 저질러지는 폭행행위는 반드시 상대방의 의사를 억압할 정도일 것을 요하지 않고 상대방의 의사에 반하는 유형력의 행사가 있기만 하면 그 힘의 대소강약을 불문한다고 보았습니다. 또 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키게 하고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것으로, 그 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 판시했습니다. 교습 지도를 빙자한 접촉이 문제 된 사안을 살펴볼 때에도, 의사에 반하는 유형력의 행사와 구체적 행위 태양을 종합해 추행 해당성을 가려 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 교습 무관 부위 접촉·밀착 + 반복·노골 결합 시 교습 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 봐주는 동작이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>지도 동작을 넘어 교습 무관 부위를 만졌는지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 기록하세요.',
      },
      {
        question: '강하게 항거하지 못했는데 강제추행인가요?',
        answer:
          '<strong>의사에 반하는 유형력이 있으면 힘의 강약을 불문하는 영역입니다.</strong> 접촉의 태양과 직후 반응을 정리하세요.',
      },
      {
        question: '단둘이라 목격자가 없는데 신고할 수 있나요?',
        answer:
          '<strong>피해자 진술과 교습 관계·직후 정황으로 다툴 수 있는 영역입니다.</strong> 일정·연락 내역과 직후 메시지를 모으세요.',
      },
      {
        question: '예민하게 받아들인 건 아닌지 망설여져요.',
        answer:
          '<strong>접촉이 교습과 무관하고 반복됐는지로 따지는 영역입니다.</strong> 접촉 부위·횟수·상황을 구체적으로 정리하세요.',
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
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지샵 서비스 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-service-pretext-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-blind-date-after-drinking-touch-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-blind-date-after-drinking-touch-falsely-accused-defense',
    keyword: '소개팅 음주 후 추행 무고 방어',
    questionKeyword: '소개팅에서 만난 상대와 술을 마시며 분위기 좋게 대화하고 서로 호감을 주고받았는데, 헤어진 뒤 상대가 ‘술자리에서 동의 없이 신체를 만져 추행당했다’며 저를 고소했어요. 저는 당시 서로 웃으며 대화했고 상대도 거부 의사를 보이지 않았다고 기억하며, 강제로 만지거나 추행할 의도는 전혀 없었어요. 그런데 음주 상태였던 데다 단둘이 있던 자리라 한순간에 성추행 가해자로 몰려 너무 억울해요. 대화·이동 동선 같은 자료도 있는데, 이렇게 소개팅 음주 후 접촉이 추행으로 고소된 상황에서 고의가 없었다는 점을 어떻게 방어해야 하는지 점검해볼 수 있나요?',
    ctaKeyword: '소개팅 음주 후 추행 고의 부재·진술 신빙성 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '소개팅 음주 후 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '소개팅 술자리 접촉이 추행으로 고소돼 억울하다면, 강제추행 고의 판단과 피해자 진술 신빙성·정황 검토 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「소개팅·만남에서 처음 만난 상대와 함께 술을 마시며 분위기 좋게 대화를 나누고 서로 호감을 주고받았다고 생각했는데, 자리가 끝나고 헤어진 뒤 상대가 ‘술자리에서 동의 없이 신체를 만져 추행을 당했다’며 저를 고소해, 한순간에 성추행 가해자로 몰린 분의 상황입니다. 저는 당시 서로 웃으며 대화했고 분위기에 따라 자연스러운 접촉이 있었을 수는 있어도 상대가 거부 의사를 보이지 않았다고 기억하며, 강제로 신체를 만지거나 추행할 의도는 전혀 없었다고 생각하는데, 음주로 기억이 일부 흐릿하고 단둘이 있던 자리라 객관적 정황을 대기 어려워, 일방의 진술만으로 추행 가해자로 단정될까 봐 너무 억울하고 막막하실 거예요. 소개팅 자리의 접촉은 맥락과 동의 여부에 따라 평가가 갈리는데 ‘동의 없는 추행이었다’는 주장에 휘말리기 쉬워 더 답답하셨을 거예요. 혐의를 받고 있다면, 만남의 경위와 대화·분위기, 이동 동선, 헤어진 뒤 연락 내용을 차분히 정리해 추행의 고의가 없었고 상대의 의사에 반하지 않았다는 점을 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄가 성립하려면 의사에 반하는 유형력의 행사와 추행, 그리고 그에 대한 고의가 인정되어야 하는 영역입니다. 판례는 피고인이 공소사실을 부인하고 직접증거로 피해자의 진술이 사실상 유일한 경우, 그 진술이 합리적 의심을 배제할 만한 신빙성이 있는지를 일관성·구체성, 경험칙 부합 여부, 허위 진술의 동기 유무 등을 기준으로 신중히 판단해야 하고, 사진·진술에 의한 식별 등 증거의 신빙성을 높이기 위한 절차적 요건도 갖추어야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 만남의 경위와 접촉의 맥락, 진술의 신빙성을 종합해 추행 고의와 의사 반함이 인정되는지를 가려 다툴 여지가 있는 영역입니다. 만남 경위·정황 + 대화·동선 자료 + 진술 신빙성 다툼 결합은 ‘추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 만남 경위 정리 ② 접촉 맥락·동의 정황 ③ 진술 신빙성 검토 ④ 추행 고의 ⑤ 정황·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 소개팅 음주 후 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 맥락·진술 신빙성·추행 고의·정황 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 만남 경위 정리</strong> — 소개팅 경위·만남 장소·대화·분위기 정리.</li>\n<li><strong>② 접촉 맥락·동의 정황</strong> — 접촉의 맥락과 거부 의사 유무·반응 정리.</li>\n<li><strong>③ 진술 신빙성 검토</strong> — 상대 진술의 일관성·구체성·동기를 검토.</li>\n<li><strong>④ 추행 고의</strong> — 의사에 반하는 유형력·추행 고의가 인정되는지 검토.</li>\n<li><strong>⑤ 정황·방어</strong> — 대화·동선이 추행 주장과 어긋나는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대의 의사에 반해 추행할 고의가 있었는지(강제추행), 아니면 동의·맥락 속의 접촉이거나 진술이 일관되지 않는지(무고·신빙성 다툼)가 판단의 분기점입니다. 만남 경위와 대화·동선, 헤어진 뒤 연락을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 만남·대화 자료 보존 (즉시)</strong> — 소개팅 주선·약속·대화·이동 동선·헤어진 뒤 연락을 시간순으로 보존.</li>\n<li><strong>2단계 — 접촉 맥락·동의 정황 정리 (즉시)</strong> — 접촉의 맥락, 거부 의사 유무, 분위기·반응을 정리.</li>\n<li><strong>3단계 — 진술 신빙성·고의 검토 (병행)</strong> — 상대 진술의 일관성·구체성과 추행 고의 부재를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 정황·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 혐의 방어 준비자료, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">소개팅 음주 후 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·정황·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>소개팅 주선·약속·만남 경위 자료 (만남 경위)</strong></li>\n<li><strong>당일 대화·메시지·통화 기록 (분위기·맥락)</strong></li>\n<li><strong>이동 동선·매장·결제·CCTV 등 정황 자료 (객관 정황)</strong></li>\n<li><strong>헤어진 뒤 연락·후속 메시지 (사후 정황)</strong></li>\n<li><strong>접촉 맥락·거부 의사 유무 정리 (동의 정황)</strong></li>\n<li><strong>목격자·동석자 진술·연락처</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 만남의 경위와 당일 대화·메시지, 이동 동선과 헤어진 뒤 연락을 시간순으로 정리하면 접촉이 동의·맥락 속에서 이루어졌는지, 추행할 고의가 있었는지를 다투는 데 도움이 됩니다. 상대 진술이 시점·내용에 따라 달라지거나 객관적 정황과 어긋나는 부분을 함께 정리해 진술 신빙성 검토를 준비하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 의사에 반하는 유형력·추행 고의가 있었는지.</li>\n<li><strong>동의·맥락</strong> — 접촉이 동의·맥락 속에서 이루어졌는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 구체적인지, 정황과 맞는지.</li>\n<li><strong>음주·정황</strong> — 음주 상태와 단둘 정황이 어떻게 평가되는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술 신빙성 판단과 식별 절차의 요건',
        summary:
          '대법원 2006도2520(대법원, 2008.07.10 선고) 영역에서 법원은 성추행 사건에서 피해자 진술의 신빙성을 판단할 때에는 진술이 사건 발생으로부터 얼마나 지난 후에 이루어졌는지, 진술에 이르는 과정에서 편파적 예단이나 암시적·반복적 신문으로 기억에 변형이 생길 여지는 없었는지, 진술 내용이 일관되고 명확하며 세부 묘사가 구체적인지 등을 종합적으로 검토해야 한다고 보았습니다. 또 범인식별 절차에서 피해자 진술의 신빙성을 높이려면 인상착의에 관한 진술을 사전에 상세히 기록하고, 비교 대상자들과 동시에 대면시키며, 사전 접촉을 차단하고 그 과정을 서면화하는 등 절차적 요건을 갖추어야 한다고 판시했습니다. 소개팅 음주 후 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 피해자 진술의 일관성·구체성과 형성 과정, 객관적 정황 부합 여부를 종합해 추행 고의와 진술 신빙성을 가려 방어를 검토해볼 수 있습니다.',
        takeaway: '만남 경위·정황 + 대화·동선 자료 + 진술 신빙성 다툼 결합 시 추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '서로 호감이 있었는데도 추행으로 보나요?',
        answer:
          '<strong>접촉이 의사에 반했는지와 추행 고의가 있었는지가 핵심인 영역입니다.</strong> 대화·분위기·거부 의사 유무를 정리하세요.',
      },
      {
        question: '술을 마셔 기억이 흐릿한데 불리한가요?',
        answer:
          '<strong>음주 정황은 양측 진술과 객관 자료로 함께 따지는 영역입니다.</strong> 대화·동선·결제 등 정황 자료를 모으세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>진술이 유일하면 그 신빙성을 신중히 따지는 영역입니다.</strong> 진술의 일관성·정황 부합 여부를 정리하세요.',
      },
      {
        question: '헤어진 뒤 연락이 평소처럼 오갔어요.',
        answer:
          '<strong>사후 연락은 정황·신빙성 판단의 자료가 되는 영역입니다.</strong> 헤어진 뒤 메시지·통화를 시간순으로 보존하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>만남 경위·접촉 맥락에 관한 진술의 일관성이 중요한 영역입니다.</strong> 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '소개팅 합의 추행 무고 방어', href: '/guide/sex-crime/sex-crime-blind-date-consent-falsely-accused-defense' },
      { label: '소개팅 추행 무고 방어', href: '/guide/sex-crime/sex-crime-blind-date-falsely-accused-defense' },
      { label: '직장 회식 추행 무고 방어', href: '/guide/sex-crime/sex-crime-workplace-after-party-touch-falsely-accused-defense' },
      { label: '학원 강사 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-academy-instructor-pretext-touch-report-track' },
    ],
  },
];
