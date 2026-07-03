import { SpokePage } from '../spoke-pages';

// batch91 fraud(6) + sex-crime(4) — 10개 (2026-06-08)
//
// 고유 존재 이유:
// 1. fraud-wedding-snap-studio-prepay-closure-track — 일반 선결제 폐업류와 분기. '웨딩스냅·스튜디오 선결제 후 폐업·미촬영' 편취액 산정·특경법 적용 한계 절차형 트랙(victim).
// 2. fraud-secondhand-camera-part-swap-track — 일반 중고거래류와 분기. '중고 카메라 부품을 몰래 바꿔치기해 인도' 계약 당시 편취 범의 판단 판단형 트랙(victim).
// 3. fraud-limited-sneaker-resale-fake-track — 일반 가품 거래류와 분기. '한정판 운동화 리셀을 가품으로 인도' 편취 범의·미필적 고의 판단형 트랙(victim).
// 4. fraud-unlisted-stock-preipo-lure-track — 일반 투자수익류와 분기. '비상장주식 상장 임박 미끼로 투자 유도' 다수 피해자 죄수·포괄일죄 판단형 트랙(victim).
// 5. fraud-subscription-auto-renewal-concealed-track — 일반 구독결제류와 분기. '무료체험 뒤 자동결제를 숨기고 반복 청구' 대가 일부 지급 시 편취액 판단형 트랙(victim).
// 6. fraud-crowdfunding-production-delay-falsely-accused-defense — 일반 사기 무고류와 분기. '크라우드펀딩 제작지연을 사기로 고소당함' 편취 범의·실행행위 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-swimming-lesson-track — 일반 추행류와 분기. '수영강습 지도 중 강제추행·기습추행' 폭행 형태·추행 해당성 판단형 트랙(victim).
// 8. sex-crime-city-bus-track — 일반 추행류와 분기. '시내버스 안 밀착·접촉 추행' 추행 의미·상당성 판단 판단형 트랙(victim).
// 9. sex-crime-fitting-room-hidden-camera-track — 일반 불법촬영류와 분기. '매장 탈의실 몰래카메라 촬영' 신체 직접 촬영·증거보전 절차형 트랙(victim).
// 10. sex-crime-blind-date-consent-falsely-accused-defense — 일반 성범죄 무고류와 분기. '소개팅 동의 스킨십을 추행으로 고소당함' 무죄추정·진술 신빙성 다툼 방어 판단형 트랙(accused).

export const spokesBatch91FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-wedding-snap-studio-prepay-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-snap-studio-prepay-closure-track',
    keyword: '웨딩스냅 선결제 폐업 사기',
    questionKeyword: '웨딩스냅·스튜디오 촬영을 계약하고 ‘미리 결제하면 할인된다’는 말에 촬영비 전액을 선결제했는데, 촬영일이 다가오자 업체가 잠적하거나 폐업해 촬영도 못 받고 환불도 거부당했어요. 처음부터 촬영해줄 의사 없이 선결제만 끌어모은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '웨딩스냅 선결제 폐업 편취·환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '웨딩스냅 선결제 폐업 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '웨딩스냅을 선결제했는데 업체가 폐업·잠적해 촬영도 환불도 못 받았다면, 형법 제347조 사기의 편취액 산정과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「인생에 한 번뿐인 결혼을 준비하며 웨딩스냅·스튜디오 촬영을 계약하고, ‘미리 전액 결제하면 크게 할인된다’는 말에 수십만원에서 수백만원의 촬영비를 선결제한 분의 상황입니다. 그런데 촬영일이 가까워지자 업체가 연락을 끊거나 갑자기 폐업해, 촬영도 받지 못하고 선결제한 돈도 돌려받지 못하게 돼, 처음부터 촬영해줄 의사·능력 없이 선결제만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 예식 일정은 정해져 있는데 사진도 돈도 사라져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 이행할 의사·능력 없이 할인을 미끼로 선결제만 유도한 정황은 기망행위로 평가될 여지가 있고, 선결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망으로 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고 대가가 일부 지급되었더라도 편취액은 교부받은 금원 전부이지만, 특정경제범죄법 위반(사기)죄는 편취액을 엄격하게 산정해야 하고 그 가액을 구체적으로 산정할 수 없으면 특경법을 적용할 수 없다고 본 사례 흐름이 있는 영역입니다. 선결제 + 폐업·미촬영 + 환불 거부 결합은 ‘편취·환급’ 절차가 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 기망·편취 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 웨딩스냅 선결제 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 촬영 계약·약관·할인 안내·선결제 내역 정리.</li>\n<li><strong>② 기망·편취 정황</strong> — 이행 불가를 알면서 할인 미끼로 선결제만 받은 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 결제금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·지급정지·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 환불 다툼과 달리, 촬영해줄 의사·능력 없이 할인 선결제를 받았는지가 사기 판단의 분기점입니다. 다수 피해의 편취액 합산은 가액 산정 가능성에 따라 죄책 범위가 달라지므로 선결제 시점과 폐업·미촬영 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 촬영 계약·약관·할인 안내·선결제·대화 보존.</li>\n<li><strong>2단계 — 폐업·미촬영 정황 확인 (즉시)</strong> — 선결제 모집 시점과 폐업·잠적·환불 거부 시점 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 업체 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">웨딩스냅 선결제 폐업 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>웨딩스냅·스튜디오 촬영 계약서·약관 (계약 내용)</strong></li>\n<li><strong>할인·선결제 안내·광고 캡처 (유도 정황)</strong></li>\n<li><strong>촬영비 선결제·할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>촬영 일정·미촬영·환불 거부 대화 기록</strong></li>\n<li><strong>폐업·잠적·운영자 변경 정황 자료</strong></li>\n<li><strong>동일 업체 피해·모집 시점 자료</strong></li>\n<li><strong>업체·사업자·결제 계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 할인 선결제 모집 시점과 폐업·미촬영 시점을 함께 정리하면 편취 정황이 선명해집니다. 같은 업체 피해자를 모아 선결제 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·편취 범의</strong> — 촬영해줄 의사·능력 없이 선결제를 받았는지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 교부한 결제금 전부가 피해액인지.</li>\n<li><strong>특경법 적용</strong> — 다수 피해 합산 가액을 구체적으로 산정할 수 있는지.</li>\n<li><strong>단순 폐업 항변</strong> — 경영난에 따른 폐업·환불 지연 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·웨딩 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취액 산정과 특경법 적용 한계',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고 대가가 일부 지급되었더라도 편취액은 교부받은 금원 전부이지만, 특정경제범죄법 위반(사기)죄는 편취한 재물·재산상 이익의 가액을 엄격하게 산정해야 하고 그 가액을 구체적으로 산정할 수 없으면 특경법 제3조를 적용할 수 없다고 판시했습니다. 웨딩스냅을 선결제받고 폐업·미촬영한 사안에서 편취액·죄책 범위를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '선결제 + 폐업·미촬영 + 환불 거부 결합 시 편취·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '경영난으로 폐업한 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>이행할 의사·능력 없이 할인 선결제를 받았는지가 핵심인 영역입니다.</strong> 모집 시점·폐업 정황을 확보하세요.',
      },
      {
        question: '일부만 환불받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 결제금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 선결제 총액을 정리하세요.',
      },
      {
        question: '피해자가 많은데 특경법으로 가중되나요?',
        answer:
          '<strong>합산 가액을 구체적으로 산정할 수 있어야 특경법 적용을 검토하는 영역입니다.</strong> 피해자별 결제 자료를 모으세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 항변·결제 이의로 잔여 할부금 청구를 다퉈볼 수 있는 영역입니다.</strong> 미촬영·거부 정황을 정리해 이의신청하세요.',
      },
      {
        question: '업체가 폐업했는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 폐업 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '동업 수익 배분 분쟁 사기 고의 무고 방어', href: '/guide/fraud/fraud-joint-business-profit-share-dispute-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 2. fraud-secondhand-camera-part-swap-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-camera-part-swap-track',
    keyword: '중고 카메라 부품 바꿔치기 사기',
    questionKeyword: '중고 거래로 카메라·렌즈를 정상품이라며 샀는데, 받아보니 내부 부품이 고장품·저가품으로 바꿔치기돼 있거나 직거래 점검 때 보여준 물건과 다른 게 배송됐어요. 판매자는 ‘원래 그랬다’며 발뺌하는데, 처음부터 속여서 판 것 같은 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 카메라 부품 바꿔치기 편취 범의 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 카메라 부품 바꿔치기 사기 — 5단계 편취 범의 점검 | 로앤가이드',
      description:
        '점검한 카메라와 다른 부품 바꿔치기 물건이 왔는데 판매자가 발뺌한다면, 형법 제347조 사기의 계약 당시 편취 범의를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼이나 직거래로 카메라·렌즈를 ‘정상 작동, 부품 손상 없음’이라는 설명을 믿고 산 분의 상황입니다. 그런데 받아보니 내부 부품이 고장품·저가품으로 바꿔치기돼 있거나, 직거래 점검 때 보여준 물건과 다른 제품이 배송돼 와, 판매자는 ‘원래 그 상태였다’며 발뺌하고, 처음부터 멀쩡한 척 보여준 뒤 속여 판 건 아닌지 의심되고 막막하실 거예요. 고가 장비라 돈도 물건도 애매해져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 점검품과 다른 물건·바꿔치기한 부품을 정상품으로 속여 대금을 받은 정황은 기망행위로 평가될 여지가 있고, 대금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 물품거래에서 편취에 의한 사기죄 성립 여부는 거래 당시를 기준으로 피고인에게 변제·이행할 의사나 능력이 없음에도 거짓말로 물품 대금을 편취할 고의가 있었는지에 따라 판단하고, 그 범의는 거래 경위·이행과정 등 객관적 사정을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 정상품 표시 + 부품 바꿔치기·다른 물건 인도 + 발뺌 결합은 ‘편취 범의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 카메라 부품 바꿔치기 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 판매 글·상태 설명·점검 사진·대화·결제 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 점검품과 다른 물건·바꿔치기 부품을 정상품으로 속였는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자 다툼과 달리, 거래 당시 정상품으로 속이거나 점검품과 바꿔 인도할 고의가 있었는지가 편취 범의 판단의 분기점입니다. 점검 당시 사진·영상과 수령품의 상태·시리얼을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·상태 설명·점검 사진·대화·결제 내역 보존.</li>\n<li><strong>2단계 — 상태 비교·점검 확보 (즉시)</strong> — 점검품과 수령품의 시리얼·부품·작동 차이를 사진·수리점 점검으로 확인.</li>\n<li><strong>3단계 — 지급정지·이의 (병행)</strong> — 계좌 이체분 지급정지·결제 이의제기 검토.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 카메라 부품 바꿔치기 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·상태 설명·정상 표시 캡처 (거래 조건)</strong></li>\n<li><strong>점검 당시 사진·영상·시리얼 기록 (대조 자료)</strong></li>\n<li><strong>수령품 사진·시리얼·작동 영상 (현품 상태)</strong></li>\n<li><strong>수리점 점검·부품 교체 확인서 (바꿔치기 입증)</strong></li>\n<li><strong>대금 송금·이체·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요청·발뺌·연락 대화 기록</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 점검 당시 사진·시리얼과 수령품의 차이를 수리점 점검서로 뒷받침하면 바꿔치기·기망 정황이 선명해집니다. 같은 판매자·계좌의 다른 피해 사례를 묶으면 편취 범의 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 거래 당시 정상품으로 속이거나 바꿔 인도할 고의가 있었는지.</li>\n<li><strong>기망 정황</strong> — 점검품과 수령품의 차이가 의도적 바꿔치기인지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 교부한 대금 전부가 피해액인지.</li>\n<li><strong>단순 하자 항변</strong> — 민사 하자·환불 다툼에 그치는지의 구별.</li>\n<li><strong>판매자 특정</strong> — 닉네임·계좌·결제 기록으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 물품거래 편취 범의의 판단 기준과 시점',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 편취에 의한 사기죄에서 불법영득의 의사 내지 편취의 범의는 거래 당시를 기준으로 피고인에게 이행할 의사나 능력이 없음에도 거짓말을 하여 물품·대금을 편취할 고의가 있었는지에 따라 판단하고, 그 범의는 범행 전후의 재력·거래의 이행과정 등 객관적 사정을 종합해 판단해야 한다고 판시했습니다. 점검품과 다른 카메라·바꿔치기 부품을 정상품으로 속여 판 사안에서 편취 범의를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '정상품 표시 + 부품 바꿔치기·다른 물건 인도 + 발뺌 결합 시 편취 범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 ‘원래 그랬다’고 하는데 사기가 되나요?',
        answer:
          '<strong>거래 당시 정상품으로 속였거나 바꿔 인도할 고의가 있었는지를 다투는 영역입니다.</strong> 점검 사진과 수령품 차이를 확보하세요.',
      },
      {
        question: '부품이 바뀐 걸 어떻게 증명하나요?',
        answer:
          '<strong>점검 당시 시리얼·사진과 수리점 점검서로 바꿔치기를 입증하는 영역입니다.</strong> 수령 즉시 상태를 기록하세요.',
      },
      {
        question: '일부만 환불받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금·결제 총액을 정리하세요.',
      },
      {
        question: '단순 하자로 보면 민사로 끝나는 것 아닌가요?',
        answer:
          '<strong>거래 당시 편취 범의가 있으면 형사 사기를 검토하는 영역입니다.</strong> 정상 표시·발뺌 대화를 정리하세요.',
      },
      {
        question: '판매자 닉네임만 아는데 특정이 되나요?',
        answer:
          '<strong>거래 사이트·결제·계좌 기록으로 상대를 특정할 수 있는 영역입니다.</strong> 결제·계좌 기록부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '친구 사업 손실 차용금 사기', href: '/guide/fraud/fraud-loan-friend-business-loss-not-paying' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 3. fraud-limited-sneaker-resale-fake-track ───
  {
    domain: 'fraud',
    slug: 'fraud-limited-sneaker-resale-fake-track',
    keyword: '한정판 운동화 리셀 가품 사기',
    questionKeyword: '한정판·발매 운동화를 리셀로 정품이라며 프리미엄까지 얹어 샀는데, 받아보니 가품(짝퉁)이었고 정품 인증서·영수증도 위조된 것 같았어요. 판매자는 ‘정품이 맞다’며 환불을 거부하는데, 처음부터 가품인 줄 알면서 정품이라 속여 판 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '한정판 운동화 리셀 가품 편취 범의 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '한정판 운동화 리셀 가품 사기 — 5단계 편취 범의 점검 | 로앤가이드',
      description:
        '정품이라던 리셀 운동화가 가품이었고 판매자가 환불을 거부한다면, 형법 제347조 사기의 편취 범의·미필적 고의를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「발매가 끝난 한정판 운동화를 리셀 시장에서 ‘정품 보장, 영수증·태그 완비’라는 설명을 믿고 프리미엄까지 얹어 산 분의 상황입니다. 그런데 받아보니 가품(짝퉁)으로 보이고 정품 인증서·영수증도 위조 의심이 들어, 판매자는 ‘정품이 맞다’며 환불을 거부하거나 연락을 끊고, 처음부터 가품인 줄 알면서 정품이라 속여 판 건 아닌지 의심되고 막막하실 거예요. 시세보다 비싸게 주고 산 터라 돈도 신발도 애매해져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품을 정품으로 속여 프리미엄 대금을 받은 정황은 기망행위로 평가될 여지가 있고, 대금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취의 범의는 범행 전후의 재력·거래의 이행과정 등 객관적 사정을 종합해 판단하고 확정적 고의가 아닌 미필적 고의로도 족하며, 물품거래에서 변제·이행 의사나 능력 없이 거짓말로 물품 등을 편취할 고의가 있었는지에 따라 사기죄 성립을 판단한다고 본 사례 흐름이 있는 영역입니다. 정품 보장 + 가품 인도 + 환불 거부 결합은 ‘편취 범의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 한정판 운동화 리셀 가품 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 판매 글·정품 보장·인증서·대화·결제 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 가품을 정품으로 속이거나 인증서를 위조해 거래를 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 프리미엄 대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 품질 다툼과 달리, 가품인 줄 알면서 또는 가품일 수 있음을 용인하면서 정품이라 속였는지가 편취 범의 판단의 분기점입니다. 미필적 고의로도 사기가 성립할 수 있어 정품 보장 표시와 정품 감정 결과를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·정품 보장·인증서·대화·결제 내역 보존.</li>\n<li><strong>2단계 — 정품 감정 확보 (즉시)</strong> — 리셀 플랫폼·전문 감정으로 가품 여부와 인증서 위조 여부 확인.</li>\n<li><strong>3단계 — 지급정지·이의 (병행)</strong> — 계좌 이체분 지급정지·결제 이의제기 검토.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">한정판 운동화 리셀 가품 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·정품 보장 문구 캡처 (거래 조건)</strong></li>\n<li><strong>정품 인증서·영수증·태그 사진 (위조 정황)</strong></li>\n<li><strong>리셀 플랫폼·전문 감정 결과 (가품 입증)</strong></li>\n<li><strong>수령품·박스·태그 사진 (현품 상태)</strong></li>\n<li><strong>프리미엄 대금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요청·거부·연락 두절 대화</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정품 보장 표시와 위조 의심 인증서, 전문 감정 결과를 함께 모으면 기망·편취 정황이 선명해집니다. 같은 판매자·계좌의 다른 피해 사례를 묶으면 미필적 고의 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 가품인 줄 알았거나 가품일 수 있음을 용인하며 정품이라 속였는지.</li>\n<li><strong>미필적 고의</strong> — 확정적 고의가 아니어도 미필적 고의로 사기가 성립하는지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 교부한 프리미엄 대금 전부가 피해액인지.</li>\n<li><strong>단순 품질 다툼 항변</strong> — 민사 환불·하자 다툼에 그치는지의 구별.</li>\n<li><strong>판매자 특정</strong> — 닉네임·계좌·결제 기록으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단과 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 편취 범의는 범행 전후의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단하고 확정적 고의가 아닌 미필적 고의로도 족하며, 물품거래에서 변제·이행 의사나 능력 없이 거짓말로 물품 등을 편취할 고의가 있었는지에 따라 사기죄 성립을 판단한다고 판시했습니다. 가품을 정품으로 속여 프리미엄을 받은 리셀 사안에서 편취 범의를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '정품 보장 + 가품 인도 + 환불 거부 결합 시 편취 범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 ‘정품인 줄 알았다’고 하면 사기가 안 되나요?',
        answer:
          '<strong>가품일 수 있음을 용인하며 정품이라 속였다면 미필적 고의로 평가될 수 있는 영역입니다.</strong> 정품 보장·감정 결과를 확보하세요.',
      },
      {
        question: '가품이라는 걸 어떻게 증명하나요?',
        answer:
          '<strong>리셀 플랫폼·전문 감정 결과로 가품 여부를 입증하는 영역입니다.</strong> 박스·태그·인증서 사진과 감정서를 모으세요.',
      },
      {
        question: '인증서가 위조 같은데 이것도 사기에 보태지나요?',
        answer:
          '<strong>위조 인증서로 정품인 것처럼 믿게 했는지가 기망 정황이 되는 영역입니다.</strong> 인증서·영수증 원본을 보존하세요.',
      },
      {
        question: '일부만 환불받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 프리미엄 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '판매자 닉네임만 아는데 특정이 되나요?',
        answer:
          '<strong>거래 사이트·결제·계좌 기록으로 상대를 특정할 수 있는 영역입니다.</strong> 결제·계좌 기록부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '사모펀드 원금 손실 사기', href: '/guide/fraud/fraud-private-equity-fund-principal-loss-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-unlisted-stock-preipo-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-unlisted-stock-preipo-lure-track',
    keyword: '비상장주식 상장 미끼 사기',
    questionKeyword: '‘곧 상장하니 비상장주식을 지금 사두면 몇 배가 된다’는 권유에 부부가 함께 노후자금·공동재산을 정리해 수억원을 투자했는데, 상장은 무산되고 주식은 휴지조각이 됐으며 권유자는 연락이 끊겼어요. 처음부터 상장 계획도 없이 투자금만 끌어모은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '비상장주식 상장 미끼 사기 죄수·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '비상장주식 상장 미끼 사기 — 5단계 죄수·환급 점검 | 로앤가이드',
      description:
        '상장 임박을 미끼로 비상장주식에 투자했는데 상장이 무산되고 연락이 끊겼다면, 형법 제347조 사기의 죄수·편취액과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘곧 코스닥에 상장하니 비상장주식을 지금 미리 사두면 상장 후 몇 배가 된다’, ‘마지막 물량’이라는 권유에 부부가 함께 노후자금이나 공동재산을 정리해 수천만원에서 수억원을 투자한 분의 상황입니다. 그런데 약속한 상장은 계속 미뤄지다 무산되고, 주식은 사실상 휴지조각이 됐으며, 권유자·법인은 ‘시장 상황 탓’이라며 책임을 미루다 연락이 끊겨, 처음부터 상장 계획도 능력도 없이 투자금만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 부부가 함께 큰돈을 넣은 터라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 상장 가능성·기업 실체를 허위·과장해 투자를 유도한 정황은 기망행위로 평가될 여지가 있고, 투자금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 다수 피해자에 대해 각각 기망해 편취하면 피해자별로 독립한 사기죄가 성립하지만, 부부처럼 재산 형성·교부 의사결정·기망 경위 등 피해법익이 동일하다고 평가될 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역입니다. 상장 미끼 + 기업 실체 의심 + 연락 두절 결합은 ‘죄수·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 기망 정황 ③ 편취액·죄수 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비상장주식 상장 미끼 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 투자 권유·상장 약속·매매 계약·송금 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 상장 가능성·기업 실체를 허위·과장해 투자를 유도했는지 정리.</li>\n<li><strong>③ 편취액·죄수</strong> — 본인·부부·다수 피해의 편취액과 죄수 관계 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·관련 특별법 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·다수 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 실패와 달리, 상장 가능성·기업 실체를 허위로 설명해 투자를 유도했는지가 기망 판단의 분기점입니다. 부부 등 피해법익이 동일하면 포괄일죄로 볼 수 있어 송금·권유 자료를 함께 모으는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 투자 권유·상장 약속·매매 계약·송금·대화 보존.</li>\n<li><strong>2단계 — 기업·상장 실체 확인 (즉시)</strong> — 회사 등기·상장 추진 여부·재무 실체와 설명의 괴리 확인.</li>\n<li><strong>3단계 — 지급정지·자금 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄·금융사기 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·다수 피해 공동 고소·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">비상장주식 상장 미끼 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유·상장 약속 광고·대화 캡처 (유도 정황)</strong></li>\n<li><strong>주식 매매·양도 계약서·증서 (거래 내용)</strong></li>\n<li><strong>투자금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>부부·다수 피해자 송금·의사결정 정황</strong></li>\n<li><strong>회사 등기·상장 추진·재무 실체 자료</strong></li>\n<li><strong>동일 권유자·법인·계좌 피해 사례 자료</strong></li>\n<li><strong>권유자·법인·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상장 약속과 실제 기업·상장 추진 실체의 괴리를 모으면 기망 정황이 선명해집니다. 부부 등 피해법익이 동일한 사정과 다수 피해 송금 자료를 함께 묶으면 죄수·편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 상장 가능성·기업 실체를 허위·과장해 투자를 유도했는지.</li>\n<li><strong>죄수 관계</strong> — 부부·다수 피해를 피해자별 독립죄로 보는지 포괄일죄로 보는지.</li>\n<li><strong>편취액</strong> — 일부 회수가 있어도 교부한 투자금 전부가 피해액인지.</li>\n<li><strong>단순 투자손실 항변</strong> — ‘시장 탓으로 상장이 무산됐다’는 주장과의 구별.</li>\n<li><strong>권유자 특정</strong> — 법인·계좌·실권유자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 사기죄의 죄수와 포괄일죄',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수 피해자에 대해 각각 기망해 재물을 편취하면 범의가 단일하고 범행방법이 동일하더라도 피해자별로 독립한 사기죄가 성립하지만, 부부처럼 기망 경위·재산 교부 의사결정·재산 형성 과정 등 피해법익이 동일하다고 평가될 사정이 있으면 이들에 대한 사기죄를 포괄일죄로 볼 수 있다고 판시했습니다. 부부가 함께 비상장주식 상장 미끼에 투자한 사안에서 죄수·편취액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '상장 미끼 + 기업 실체 의심 + 연락 두절 결합 시 죄수·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상장이 시장 탓에 무산된 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>상장 가능성·기업 실체를 허위로 설명해 투자를 유도했는지가 핵심인 영역입니다.</strong> 약속과 실제 실체의 괴리를 확보하세요.',
      },
      {
        question: '부부가 함께 투자했는데 죄가 하나인가요 둘인가요?',
        answer:
          '<strong>피해법익이 동일하다고 평가되면 포괄일죄로 볼 수 있는 영역입니다.</strong> 공동재산·의사결정 정황을 정리하세요.',
      },
      {
        question: '주식 증서를 받았는데도 사기가 되나요?',
        answer:
          '<strong>증서 교부와 별개로 상장 미끼 기망·편취 정황이 있으면 사기를 검토하는 영역입니다.</strong> 권유·약속 자료를 모으세요.',
      },
      {
        question: '피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>같은 권유자·법인·계좌 피해는 묶어 공동 고소·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해 규모·송금 자료를 모으세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: 'SNS 투자 사기 피해 구제 증거 확보', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '해외직구 대행 가상자산 결제 잠적 사기', href: '/guide/fraud/fraud-overseas-agent-crypto-payment-vanish-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-subscription-auto-renewal-concealed-track ───
  {
    domain: 'fraud',
    slug: 'fraud-subscription-auto-renewal-concealed-track',
    keyword: '구독 자동결제 은닉 사기',
    questionKeyword: '‘무료체험’, ‘첫 달 0원’이라는 광고를 보고 가입했는데, 해지 방법은 숨겨두고 어느새 매달 비싼 구독료가 자동결제되고 있었어요. 해지하려 해도 화면이 복잡하고 환불도 거부당했는데, 자동결제를 일부러 숨기고 반복 청구한 이 구독을 사기로 신고하고 결제금을 돌려받을 수 있나요?',
    ctaKeyword: '구독 자동결제 은닉 편취액·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '구독 자동결제 은닉 사기 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '무료체험인 줄 알았는데 매달 구독료가 자동결제되고 해지·환불이 막혔다면, 형법 제347조 사기의 편취액과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘무료체험’, ‘첫 달 0원’, ‘언제든 해지 가능’이라는 광고를 보고 별생각 없이 가입한 뒤, 해지 방법은 잘 보이지 않게 숨겨져 있고 어느새 매달 적지 않은 구독료가 카드·간편결제로 자동으로 빠져나가고 있던 것을 뒤늦게 안 분의 상황입니다. 해지하려 해도 화면이 복잡하게 꼬여 있거나 고객센터가 닿지 않고, 이미 결제된 금액의 환불도 거부당해, 처음부터 자동결제 사실을 일부러 숨기고 반복 청구한 건 아닌지 의심되고 막막하실 거예요. 모르는 사이 여러 달이 빠져나가 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 자동결제·유료 전환이라는 중요한 사정을 숨기고 결제를 유도한 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 재물편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 재물 전부이고, 거래를 빙자하더라도 실질이 투자금·금원 수수에 불과한 모집은 그 실질에 따라 평가된다고 본 사례 흐름이 있는 영역입니다. 자동결제 은닉 + 해지 방해 + 환불 거부 결합은 ‘편취액·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 가입·결제 정리 ② 기망·고지의무 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구독 자동결제 은닉 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입·결제 정리</strong> — 무료체험 광고·가입 화면·약관·자동결제 내역 정리.</li>\n<li><strong>② 기망·고지의무 정황</strong> — 자동결제·유료 전환을 숨기고 결제를 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 이용이 있어도 자동결제된 금액 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·지급정지·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상적인 구독과 달리, 자동결제·유료 전환이라는 중요한 사정을 일부러 숨기고 해지를 방해했는지가 기망 판단의 분기점입니다. 가입 당시 ‘무료’ 표시와 실제 결제·해지 화면을 함께 캡처해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·결제 자료 보존 (즉시)</strong> — 무료체험 광고·가입 화면·약관·자동결제·해지 시도 보존.</li>\n<li><strong>2단계 — 자동결제·해지 방해 확인 (즉시)</strong> — 유료 전환 고지 여부와 해지 절차의 곤란성 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드사·간편결제 이의제기·결제 차단 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 업체 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">구독 자동결제 은닉 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 가입·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>무료체험·첫 달 0원 광고 캡처 (유도 정황)</strong></li>\n<li><strong>가입 화면·약관·동의 항목 캡처 (고지 여부)</strong></li>\n<li><strong>자동결제·반복 청구 카드·간편결제 내역 (피해 금액)</strong></li>\n<li><strong>해지 시도·화면·고객센터 응대 기록 (방해 정황)</strong></li>\n<li><strong>환불 요청·거부 대화 기록</strong></li>\n<li><strong>동일 업체 피해·해지 곤란 사례 자료</strong></li>\n<li><strong>운영사·사업자·결제 대행사 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가입 당시 ‘무료’ 표시와 자동결제 고지 화면, 해지 시도 기록을 함께 모으면 고지의무·기망 정황이 선명해집니다. 같은 업체의 해지 곤란·자동결제 피해자를 모으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무·기망</strong> — 자동결제·유료 전환을 숨기고 결제를 유도했는지.</li>\n<li><strong>해지 방해</strong> — 해지를 곤란하게 설계해 반복 청구했는지.</li>\n<li><strong>편취액</strong> — 일부 이용이 있어도 자동결제된 금액 전부가 피해액인지.</li>\n<li><strong>단순 약관 항변</strong> — 약관 동의가 있었다는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 운영사·결제 대행사를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·구독 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (결제·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급 시 편취액과 거래 실질 판단',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 재물편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 재물 전부이고, 거래를 빙자하더라도 그 실질이 투자금·금원의 수수에 불과하면 외형이 아닌 실질에 따라 평가해야 한다는 취지로 판시했습니다. 자동결제·유료 전환을 숨기고 반복 청구한 구독 사안에서 편취액·거래 실질을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '자동결제 은닉 + 해지 방해 + 환불 거부 결합 시 편취액·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '약관에 동의했는데도 사기가 되나요?',
        answer:
          '<strong>자동결제·유료 전환이라는 중요한 사정을 숨겼는지가 핵심인 영역입니다.</strong> 가입 화면·고지 여부를 캡처해 확보하세요.',
      },
      {
        question: '해지가 너무 어렵게 돼 있는데 이것도 문제가 되나요?',
        answer:
          '<strong>해지를 곤란하게 설계해 반복 청구했는지가 기망·방해 정황이 되는 영역입니다.</strong> 해지 시도 기록을 남기세요.',
      },
      {
        question: '몇 달 이용은 했는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 이용이 있어도 자동결제된 금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 내역 총액을 정리하세요.',
      },
      {
        question: '카드 자동결제를 멈출 수 있나요?',
        answer:
          '<strong>카드사·간편결제 이의제기와 결제 차단을 검토할 수 있는 영역입니다.</strong> 은닉·해지 방해 정황을 정리해 이의신청하세요.',
      },
      {
        question: '같은 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 업체·결제 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '개인 과외 선결제 수업 미실시', href: '/guide/fraud/fraud-private-tutor-pre-payment-lessons-no-show-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-crowdfunding-production-delay-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-crowdfunding-production-delay-falsely-accused-defense',
    keyword: '크라우드펀딩 제작지연 사기 무고',
    questionKeyword: '크라우드펀딩으로 제품·콘텐츠를 기획해 정상적으로 펀딩을 받고 제작에 착수했는데, 부품 수급·외주 문제로 배송이 늦어지자 일부 후원자가 ‘처음부터 만들 의사 없이 돈만 받았다’며 저를 사기로 고소했어요. 저는 편취할 의도도 없었고 제작도 진행했는데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '크라우드펀딩 제작지연 사기 무고 범의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '크라우드펀딩 제작지연 사기 무고 방어 — 5단계 범의 점검 | 로앤가이드',
      description:
        '펀딩 제품 제작이 지연돼 사기로 고소당했다면, 형법 제347조 사기의 편취 범의·실행행위 유무를 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「크라우드펀딩 플랫폼에서 제품·콘텐츠를 기획해 정상적으로 후원을 받고 실제 제작에 착수했는데, 부품 수급 차질·외주 지연·예상보다 큰 제작 난이도 때문에 배송 일정이 계속 미뤄지자, 기다리다 지친 일부 후원자가 ‘처음부터 만들 의사 없이 돈만 받았다’며 저를 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 편취할 의도가 없었고 제작비 지출·시제품 제작 등 이행 노력을 해왔는데, 지연 사실만으로 사기로 몰려 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 펀딩 당시 제작·이행할 의사와 능력이 있었는지, 즉 편취의 범의가 있었는지가 핵심 쟁점입니다. 판례는 허위 주장으로 승소확정판결을 받아 재산상 이익을 취득하는 소송사기는 승소판결이 확정된 때 기수에 이르고, 누범가중 등의 판단에서도 범죄의 성립·실행행위 유무를 기준으로 본다고 하여 실행행위와 범의의 존부를 엄격히 따진 사례 흐름이 있는 영역입니다. 따라서 펀딩 경위·제작 진행·이행 노력을 정리해 다툴 수 있는 영역입니다. 정상 펀딩 흐름 + 제작 진행 자료 + 범의 다툼 결합은 ‘편취 범의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 펀딩 경위 정리 ② 편취 범의 ③ 이행 노력 ④ 지연 사유 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 크라우드펀딩 제작지연 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 펀딩 경위·편취 범의·이행 노력·지연 사유·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 펀딩 경위 정리</strong> — 기획·펀딩 모집·후원금 사용·일정 안내 흐름 정리.</li>\n<li><strong>② 편취 범의</strong> — 펀딩 당시 제작·이행할 의사·능력이 있었는지 객관 정황으로 검토.</li>\n<li><strong>③ 이행 노력</strong> — 제작비 지출·시제품·외주 계약 등 실제 이행 노력 정리.</li>\n<li><strong>④ 지연 사유</strong> — 부품 수급·외주·난이도 등 지연의 객관적 사유 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배송이 늦어진 결과만으로 곧바로 사기가 되는 것이 아니라, 펀딩 당시 제작·이행 의사 없이 후원금을 받았는지가 분기점입니다. 범의와 실행행위 유무는 객관적 사정으로 판단되므로 제작 진행·지출 자료로 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 펀딩·제작 정리 (즉시)</strong> — 펀딩 페이지·모집·후원금 사용·제작 일정 정리.</li>\n<li><strong>2단계 — 이행 노력 자료 확보 (1주)</strong> — 제작비 지출·외주 계약·시제품·소통 내역 등 자료 확보.</li>\n<li><strong>3단계 — 범의·지연 쟁점 정리 (2주)</strong> — 편취 범의 부재와 지연의 객관적 사유 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">크라우드펀딩 제작지연 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 펀딩 경위·범의·이행 노력 갈래입니다.</strong></p>\n<ul>\n<li><strong>펀딩 페이지·기획·일정 안내 캡처 (모집 내용)</strong></li>\n<li><strong>후원금 정산·사용·제작비 지출 내역 (자금 흐름)</strong></li>\n<li><strong>외주·부품 계약·시제품·생산 기록 (이행 노력)</strong></li>\n<li><strong>지연 사유·공지·후원자 소통 기록</strong></li>\n<li><strong>부품 수급·외주 차질 등 지연 입증 자료</strong></li>\n<li><strong>고소장·후원자 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘펀딩 당시 제작·이행 의사가 있었는지’입니다. 후원금을 실제 제작에 쓴 자금 흐름과 외주·시제품 기록으로 이행 노력을 정돈하고, 지연이 객관적 사유 때문임을 구체적으로 짚으면 편취 범의 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 펀딩 당시 제작·이행 의사·능력이 있었는지.</li>\n<li><strong>실행행위·이행 노력</strong> — 후원금을 제작에 사용한 실행행위가 있었는지.</li>\n<li><strong>지연 vs 기망</strong> — 객관적 사유에 의한 지연인지 기망인지.</li>\n<li><strong>채무불이행 구별</strong> — 민사 환불·채무불이행 다툼에 그치는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 실행행위·범의와 기수시기 판단',
        summary:
          '대법원 2005도9858(대법원, 2006.04.07 선고) 영역에서 법원은 허위 주장으로 승소확정판결을 받아 재산상 이익을 취득하는 소송사기는 승소판결이 확정된 때 기수에 이르고, 누범가중 등의 판단에서도 범죄의 성립과 실행행위의 존부를 기준으로 본다고 하여 사기죄의 실행행위와 범의 존부를 엄격히 따져야 한다고 판시했습니다. 펀딩 제작이 지연된 사안에서 편취 범의·실행행위 유무를 다툴 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '정상 펀딩 흐름 + 제작 진행 자료 + 범의 다툼 결합 시 편취 범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '배송이 늦어졌을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>지연 결과만으로는 부족하고 펀딩 당시 편취 범의가 있어야 하는 영역입니다.</strong> 제작 진행·지출 자료를 정리하세요.',
      },
      {
        question: '제작 의사가 있었음을 어떻게 보이나요?',
        answer:
          '<strong>제작비 지출·외주 계약·시제품 등 이행 노력으로 다툴 수 있는 영역입니다.</strong> 자금 흐름과 제작 기록을 모으세요.',
      },
      {
        question: '후원금을 다른 데 일부 쓴 것도 불리한가요?',
        answer:
          '<strong>자금 사용처가 제작과 관련됐는지가 범의 판단에 영향을 주는 영역입니다.</strong> 지출 내역을 항목별로 정리하세요.',
      },
      {
        question: '민사 환불과 형사 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 채무불이행·환불 다툼에 그치는지, 편취 범의가 있는지로 갈리는 영역입니다.</strong> 지연 사유·소통 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 펀딩·제작 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '사기 피의자 편취의사 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '채무불이행과 사기죄 구분 기준', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '사기 고소당했을때', href: '/guide/fraud/fraud-accused-response' },
    ],
  },

  // ─── 7. sex-crime-swimming-lesson-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-swimming-lesson-track',
    keyword: '수영강습 강제추행',
    questionKeyword: '수영 강습을 받던 중 강사가 자세 교정·보조를 핑계로 제 몸을 만지거나 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느꼈어요. 물속이라 피하기도 어렵고 지도인지 추행인지 순간 헷갈려 항의도 못 했는데, 이런 수영강습 중 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '수영강습 강제추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수영강습 강제추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '수영 강습 중 자세 교정을 빌미로 신체 접촉을 당해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·기습추행 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「수영·아쿠아 강습을 받던 중 강사가 ‘자세 교정’, ‘물에 뜨는 것 보조’ 등을 핑계로 제 허리·다리·가슴 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 물속이라 피하기 어렵고, 다른 수강생도 있는 자리라 ‘내가 과민한 건가’ 헷갈려 그 자리에서 제대로 항의하지 못한 채 강습을 마치고 나와, 지도였는지 추행이었는지 혼란스러워 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 폭행은 반드시 상대의 의사를 억압할 정도일 필요가 없고, 폭행행위 자체가 추행으로 인정되는 ‘기습추행’도 포함되며, 추행은 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 성적 자유를 침해하는 행위로서 피해자의 의사·관계·경위·구체적 태양·주위 상황을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 지도 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합은 ‘추행 해당성·증거’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 강사 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수영강습 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·강사 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 강습 일시·장소·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 지도를 넘어선 의사에 반한 접촉이 추행인지, 기습추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 수영장·강습장 CCTV, 수강 기록 보존 요청.</li>\n<li><strong>④ 강사 특정</strong> — 등록·예약·근무 기록으로 강사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자세 교정을 빙자한 접촉이라도 의사에 반한 추행으로 평가될 수 있고 기습추행도 강제추행이 된다는 점이 분기점입니다. CCTV·수강 기록은 보존 기간이 짧으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 강습 일시·장소·접촉 부위·방식·반복 정황 정리.</li>\n<li><strong>2단계 — CCTV·기록 확보 (즉시)</strong> — 수영장·강습장 CCTV, 수강·예약 기록 보존 요청.</li>\n<li><strong>3단계 — 시설·운영자 협조 (직후)</strong> — 수영장·센터에 영상·근무 기록 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수영강습 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>강습 일시·장소·접촉 정황 메모</strong></li>\n<li><strong>수영장·강습장 CCTV 보존 요청 자료</strong></li>\n<li><strong>수강 등록·예약·결제 내역 (강습 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>다른 수강생·목격자 진술·연락처</strong></li>\n<li><strong>수영복·신체 접촉 부위 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수영장 CCTV·수강 기록은 보존 기간이 짧으므로 곧바로 시설·센터에 보존을 요청하는 것이 중요합니다. 등록·예약 기록으로 강사를 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도를 넘어선 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행으로 인정되는지.</li>\n<li><strong>지도 빙자</strong> — 자세 교정·보조를 빙자한 추행인지 정당한 지도인지.</li>\n<li><strong>강사 특정</strong> — 등록·예약·근무 기록으로 강사를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·수강 기록·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 강제추행죄의 추행 판단',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄의 폭행은 반드시 상대의 의사를 억압할 정도일 필요가 없고 폭행행위 자체가 추행으로 인정되는 ‘기습추행’도 포함되며, 추행 고의로 의사에 반하는 유형력을 행사해 실행에 착수했으나 추행에 이르지 못하면 강제추행미수가 성립한다고 판시했습니다. 수영 강습 중 자세 교정을 빙자한 의사에 반한 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 의사에 반한 접촉 + 회피 곤란 환경 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자세 교정인지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>지도를 넘어선 의사에 반한 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 잡은 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>폭행행위 자체가 추행으로 인정되는 기습추행도 강제추행이 되는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>물속이라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '강사를 어떻게 특정하나요?',
        answer:
          '<strong>등록·예약·근무 기록과 CCTV로 특정할 수 있는 영역입니다.</strong> 수영장 영상·수강 기록 보존부터 요청하세요.',
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
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '마사지샵 추행 대응', href: '/guide/sex-crime/sex-crime-massage-shop-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '헬스장 PT 트레이너 추행', href: '/guide/sex-crime/sex-crime-gym-pt-trainer-track' },
    ],
  },

  // ─── 8. sex-crime-city-bus-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-city-bus-track',
    keyword: '시내버스 추행',
    questionKeyword: '혼잡한 시내버스 안에서 옆 사람이 흔들림을 핑계로 제 몸을 만지거나 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느꼈어요. 사람이 많아 피하기 어렵고 흔들려서 닿은 건지 추행인지 순간 헷갈려 항의도 못 했는데, 이런 버스 안 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '시내버스 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '시내버스 추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '혼잡한 버스 안에서 신체 접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 의미·상당성 판단 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근길이나 혼잡한 시내버스 안에서, 옆이나 뒤에 선 사람이 버스의 흔들림을 핑계로 제 엉덩이·허벅지·등 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 사람이 빽빽해 피하기도 어렵고, ‘흔들려서 닿은 건지 일부러 만진 건지’ 순간 헷갈려 그 자리에서 제대로 항의하지 못한 채 내려, ‘과민한 건가’ 자책하게 돼 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 추행은 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서, 의례적·사회적으로 상당한 신체접촉이나 자연스러운 비언어적 의사소통으로 볼 수 있는 경우에는 추행에 해당하지 않을 수 있고, 상당한 범주를 다소 벗어났더라도 의사에 반하는 유형력으로 성적 자유를 침해하는 정도에 이르지 않으면 강제추행으로 보기 어렵다고 하여 어떤 행위가 추행인지를 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 혼잡한 차내 + 의사에 반한 접촉 + 회피 곤란 환경 결합은 ‘추행 해당성·증거’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시내버스 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 탑승 시각·노선·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 단순 접촉을 넘어 의사에 반한 성적 자유 침해인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 버스 내 CCTV·운행 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·하차 정보·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 흔들림에 따른 우연한 접촉인지, 의사에 반해 성적 자유를 침해하는 추행인지가 분기점입니다. 버스 CCTV는 보존 기간이 짧으므로 노선·시각을 특정해 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 탑승 시각·노선·차량번호·접촉 정황 정리.</li>\n<li><strong>2단계 — CCTV·운행 기록 확보 (즉시)</strong> — 버스 내 CCTV·운행 기록 보존 요청.</li>\n<li><strong>3단계 — 운수사·교통기관 협조 (직후)</strong> — 운수회사·교통기관에 영상·운행 자료 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시내버스 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시각·노선·차량번호 메모</strong></li>\n<li><strong>버스 내 CCTV 보존 요청 자료</strong></li>\n<li><strong>교통카드·결제 내역 (탑승 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>동승 승객·목격자 진술·연락처</strong></li>\n<li><strong>의류·신체 접촉 부위 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 CCTV·운행 기록은 보존 기간이 짧으므로 노선·시각·차량번호를 특정해 곧바로 운수회사에 보존을 요청하는 것이 중요합니다. 교통카드 내역으로 탑승을 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 성적 자유를 침해하는 추행으로 평가되는지.</li>\n<li><strong>상당성 판단</strong> — 의례적·사회적으로 상당한 접촉 범주를 벗어났는지.</li>\n<li><strong>우연 접촉</strong> — 흔들림에 따른 부득이한 접촉인지 의도적 추행인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·하차 정보·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 영상·운행 기록·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 신체접촉의 상당성 판단',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행은 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서, 공동체 내 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있으면 추행에 해당하지 않고, 상당한 범주를 다소 벗어났더라도 의사에 반하는 유형력으로 성적 자유를 침해하는 정도에 이르지 않으면 강제추행으로 보기 어렵다고 판시했습니다. 혼잡한 버스 안의 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡한 차내 + 의사에 반한 접촉 + 회피 곤란 환경 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '흔들려서 닿은 건지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>우연한 접촉을 넘어 의사에 반한 성적 자유 침해인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '잠깐 닿은 정도인데도 추행이 되나요?',
        answer:
          '<strong>상당성 범주를 벗어나 성적 자유를 침해하는 정도인지로 판단되는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>사람이 많아 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '가해자를 어떻게 특정하나요?',
        answer:
          '<strong>버스 CCTV·하차 정보·목격자로 특정할 수 있는 영역입니다.</strong> 노선·시각을 특정해 영상 보존부터 요청하세요.',
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
      { label: '도서관 열람실 추행 신고', href: '/guide/sex-crime/sex-crime-library-reading-room-touch-report-track' },
      { label: '택시 승객 추행 대응', href: '/guide/sex-crime/sex-crime-taxi-passenger-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '병원 진료 의료인 신체접촉 진료범위 초과 추행', href: '/guide/sex-crime/sex-crime-hospital-treatment-doctor-inappropriate-act-track' },
    ],
  },

  // ─── 9. sex-crime-fitting-room-hidden-camera-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-fitting-room-hidden-camera-track',
    keyword: '매장 탈의실 불법촬영',
    questionKeyword: '옷가게·매장 탈의실에서 옷을 갈아입다가 천장·벽·환풍구 등에 숨겨진 몰래카메라를 발견했어요. 누가 언제부터 찍었는지, 영상이 어디로 넘어갔는지 몰라 두렵고, 증거를 어떻게 보전해 신고해야 할지 막막한데, 이런 탈의실 불법촬영을 신고하고 처벌·삭제를 구할 수 있나요?',
    ctaKeyword: '매장 탈의실 불법촬영 신고·증거보전 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '매장 탈의실 불법촬영 — 5단계 증거보전·삭제 점검 | 로앤가이드',
      description:
        '탈의실에서 몰래카메라를 발견해 불법촬영 피해가 의심된다면, 성폭력처벌법 제14조 카메라등이용촬영과 증거보전·삭제까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「옷가게·매장 탈의실에서 옷을 갈아입다가 천장·거울·벽·환풍구·옷걸이 등에 숨겨진 초소형 몰래카메라를 발견하거나, 촬영 정황을 뒤늦게 알게 된 분의 상황입니다. 누가 언제부터 설치해 찍어왔는지, 내 모습이 담긴 영상이 이미 어디로 넘어갔는지 알 수 없어 두렵고, 현장을 어떻게 보존하고 무엇부터 신고해야 하는지 막막한 데다, 영상이 유포됐을까 봐 더 답답하셨을 거예요.」 성폭력처벌법 제14조는 카메라 등을 이용하여 성적 욕망·수치심을 유발할 수 있는 사람의 신체를 의사에 반하여 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 의사에 반해 신체를 촬영한 정황은 카메라등이용촬영으로 평가될 여지가 있습니다. 판례는 위 조항이 촬영 대상을 ‘사람의 신체’로 규정하므로 사람의 신체 그 자체를 직접 촬영하는 행위가 처벌 대상이 되고, 촬영물의 소지·반포 등 후속 행위도 그 처벌 체계에 따라 평가된다고 본 사례 흐름이 있는 영역으로, 현장·기기·영상의 증거보전이 쟁점이 됩니다. 카메라 발견 + 의사에 반한 촬영 + 유포 우려 결합은 ‘증거보전·삭제’ 절차가 가능한 트랙입니다. 피해자라면 ① 현장·기기 보전 ② 촬영 범위 ③ 삭제 지원 ④ 촬영자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 매장 탈의실 불법촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·기기 보전·촬영 범위·삭제·촬영자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장·기기 보전</strong> — 카메라·설치 위치·매장 현장을 손대지 말고 사진·영상으로 보존.</li>\n<li><strong>② 촬영 범위</strong> — 촬영 시점·저장매체·전송 정황을 정리.</li>\n<li><strong>③ 삭제 지원</strong> — 촬영물 유포 시 디지털성범죄피해자지원센터 삭제 지원 요청.</li>\n<li><strong>④ 촬영자 특정</strong> — 설치자·매장 관계자·접근 기록 단서 정리.</li>\n<li><strong>⑤ 신고·보호</strong> — 112 신고·피해자 보호조치 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카메라·저장매체를 임의로 조작하지 말고 발견 즉시 경찰에 알려 현장 그대로 보전하는 것이 증거 확보의 핵심입니다. 신체를 직접 촬영한 정황과 저장·전송 여부를 함께 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·기기 보전 (즉시)</strong> — 카메라·설치 위치·매장 현장을 손대지 말고 사진·영상으로 보존, 경찰에 연락.</li>\n<li><strong>2단계 — 신고·기기 확보 (즉시)</strong> — 112 신고 후 경찰이 기기·저장매체를 적법하게 확보하도록 협조.</li>\n<li><strong>3단계 — 삭제 지원 요청 (직후)</strong> — 유포 정황이 있으면 디지털성범죄피해자지원센터에 삭제 지원 요청.</li>\n<li><strong>4단계 — 촬영자 특정 (수사 단계)</strong> — 설치자·매장 관계자·접근 기록으로 촬영자 특정 협조.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·삭제 모니터링·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">매장 탈의실 불법촬영 신고·증거보전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장·기기 보전·촬영 범위·삭제 갈래입니다.</strong></p>\n<ul>\n<li><strong>카메라·설치 위치·현장 사진·영상 (원본 보존)</strong></li>\n<li><strong>발견 시각·매장·탈의실 위치 메모</strong></li>\n<li><strong>매장 CCTV·출입·근무 기록 보존 요청 자료</strong></li>\n<li><strong>저장매체·전송·유포 정황 자료</strong></li>\n<li><strong>목격자·매장 관계자 진술·연락처</strong></li>\n<li><strong>디지털성범죄피해자지원센터 삭제 접수 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카메라·저장매체는 임의로 조작하지 말고 발견 상태 그대로 보존한 뒤 경찰이 적법하게 확보하도록 하는 것이 안전합니다. 매장 CCTV·출입 기록으로 설치자를 특정하고 유포 정황이 있으면 디지털성범죄피해자지원센터 삭제 지원을 병행하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 행위</strong> — 신체를 의사에 반하여 직접 촬영했는지.</li>\n<li><strong>저장·반포</strong> — 촬영물이 저장·전송·반포됐는지.</li>\n<li><strong>증거 적법성</strong> — 기기·저장매체가 적법하게 확보됐는지.</li>\n<li><strong>촬영자 특정</strong> — 설치자·매장 관계자·접근 기록으로 특정할 수 있는지.</li>\n<li><strong>유포 차단</strong> — 삭제·재유포 모니터링이 이뤄지는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제 지원)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카메라등이용촬영의 신체 직접 촬영과 처벌 체계',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항이 촬영 대상을 ‘사람의 신체’로 규정하므로 사람의 신체 그 자체를 직접 촬영하는 행위가 처벌 대상이 되고, 촬영물의 소지·반포 등 후속 행위는 그 촬영·반포 행위가 전제된 경우에 한해 처벌 체계에 따라 평가된다고 판시했습니다. 탈의실에서 신체를 직접 촬영한 불법촬영 사안의 증거보전·삭제를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '카메라 발견 + 의사에 반한 촬영 + 유포 우려 결합 시 증거보전·삭제 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '탈의실에서 카메라를 발견했는데 무엇부터 하나요?',
        answer:
          '<strong>기기를 임의로 조작하지 말고 현장 그대로 보존한 뒤 경찰에 알리는 영역입니다.</strong> 사진·영상으로 위치를 남기고 112에 신고하세요.',
      },
      {
        question: '누가 설치했는지 모르는데 신고가 되나요?',
        answer:
          '<strong>매장 CCTV·출입·근무 기록으로 수사가 진행될 수 있는 영역입니다.</strong> 매장 측에 관련 기록 보존을 요청하세요.',
      },
      {
        question: '영상이 이미 퍼졌을까 봐 두려워요. 어떻게 하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터의 삭제 지원·모니터링을 받아볼 수 있는 영역입니다.</strong> 유포 정황을 함께 정리해 접수하세요.',
      },
      {
        question: '제가 직접 기기를 가져가도 되나요?',
        answer:
          '<strong>임의로 조작하면 증거 적법성에 다툼이 생길 수 있는 영역입니다.</strong> 경찰이 적법하게 확보하도록 현장을 보존하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·여성긴급전화 1366에서 상담을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '탈의실 불법촬영', href: '/guide/sex-crime/sex-crime-changing-room-illegal-filming-track' },
      { label: '딥페이크 합성 성착취물 제작', href: '/guide/sex-crime/sex-crime-deepfake-synthetic-image-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '병실 입원환자 추행', href: '/guide/sex-crime/sex-crime-hospital-ward-inpatient-track' },
    ],
  },

  // ─── 10. sex-crime-blind-date-consent-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-blind-date-consent-falsely-accused-defense',
    keyword: '소개팅 동의 추행 무고',
    questionKeyword: '소개팅·데이트에서 서로 호감을 표하며 동의 분위기 속에 스킨십이 있었을 뿐인데, 헤어진 뒤 상대가 ‘그날 추행당했다’며 저를 고소했어요. 저는 추행한 적도 없고 당시엔 거부 의사도 없었으며 상대 진술 외엔 객관적 정황도 없는데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '소개팅 동의 추행 무고 무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '소개팅 동의 추행 무고 방어 — 5단계 무죄추정·진술 점검 | 로앤가이드',
      description:
        '소개팅 자리 스킨십을 추행으로 고소당했다면, 무죄추정·진술 신빙성과 추행 해당성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「소개팅·데이트 자리에서 서로 호감을 표하며 분위기상 자연스러운 스킨십이 있었을 뿐인데, 만남이 어긋나거나 헤어진 뒤 상대가 ‘그날 추행당했다’며 경찰에 고소해 한순간에 가해자로 지목된 분의 상황입니다. 정작 본인은 추행한 적이 없고, 당시 상대도 거부 의사를 보이지 않았으며, 둘만 있던 자리라 상대의 진술 외에는 이를 뒷받침하거나 반박할 객관적 정황도 뚜렷하지 않은데, 진술만으로 몰리는 것 같아 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 문제 된 행위가 추행에 해당하는지, 당시 동의·거부 의사가 어떠했는지, 상대 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도의 신빙성을 갖추고 객관적 정황·경험칙에 부합해야 유죄로 인정할 수 있으며, 추행 해당 여부는 피해자의 의사·관계·경위·구체적 태양·주위 상황을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 만남 경위·동의 정황·진술 신빙성을 정리해 다툴 수 있는 영역입니다. 데이트 정황 + 진술 신빙성 다툼 + 해당성 검토 결합은 ‘무죄추정·진술’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 동의·거부 정황 ④ 진술 신빙성 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 소개팅 동의 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·동의 정황·진술 신빙성·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 만남 일정·장소·이동·대화 흐름·접촉 경위 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 행위가 성적 자유를 침해하는 추행으로 평가되는지 검토.</li>\n<li><strong>③ 동의·거부 정황</strong> — 당시 동의·호감 표시와 거부 의사 유무를 정황으로 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술이 객관적 정황·경험칙에 부합하는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술이 사실상 유일한 증거인 경우 합리적 의심을 배제할 정도의 신빙성이 있어야 하고 무죄추정이 적용된다는 점이 분기점입니다. 만남 경위·대화·동의 정황으로 추행 해당성과 진술 신빙성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 만남 일정·장소·이동·대화·접촉 경위 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — 메시지·통화·CCTV·결제·이동 기록 등 객관 자료 확보.</li>\n<li><strong>3단계 — 해당성·진술 쟁점 정리 (2주)</strong> — 추행 해당성·동의 정황·상대 진술의 모순·무죄추정 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">소개팅 동의 추행 무고 무죄추정·진술 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>만남 일정·장소·이동 경위 메모</strong></li>\n<li><strong>전후 메시지·통화·SNS 대화 기록 (동의 정황)</strong></li>\n<li><strong>식당·카페·이동 CCTV·결제 기록 보존 요청 자료</strong></li>\n<li><strong>당시 분위기·호감 표시 정황 자료</strong></li>\n<li><strong>상대 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>목격자·소개자 진술·연락처</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 행위가 추행에 해당하는지’와 ‘진술이 합리적 의심을 배제할 신빙성이 있는지’입니다. 전후 메시지·통화로 당시 동의·호감 정황을 정돈하고 상대 진술의 모순·정황 불부합을 구체적으로 짚으면 무죄추정·진술 신빙성 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 행위가 성적 자유를 침해하는 추행인지.</li>\n<li><strong>동의·거부 의사</strong> — 당시 동의·호감 표시와 거부 의사 유무.</li>\n<li><strong>진술 신빙성</strong> — 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지.</li>\n<li><strong>무죄추정</strong> — 검사의 증명이 확신에 이르지 못하면 피고인 이익으로 판단되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 진술 신빙성, 추행 판단',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도의 신빙성을 갖추고 객관적 정황·경험칙에 부합해야 유죄로 인정할 수 있으며, 추행 해당 여부는 피해자의 의사·관계·경위·구체적 태양·주위 상황을 종합해 판단해야 한다고 판시했습니다. 소개팅 자리 동의 스킨십을 추행으로 다투는 사안을 살펴볼 때에도 무죄추정·진술 신빙성 기준을 검토해볼 수 있습니다.',
        takeaway: '데이트 정황 + 진술 신빙성 다툼 + 해당성 검토 결합 시 무죄추정·진술 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>진술이 합리적 의심을 배제할 신빙성을 갖춰야 하고 무죄추정이 적용되는 영역입니다.</strong> 진술 모순·정황 불부합을 정리하세요.',
      },
      {
        question: '당시 거부가 없었음을 어떻게 보이나요?',
        answer:
          '<strong>전후 메시지·대화·정황으로 동의·호감 분위기를 다툴 수 있는 영역입니다.</strong> 만남 전후 기록을 모으세요.',
      },
      {
        question: '서로 호감 있던 스킨십도 추행이 되나요?',
        answer:
          '<strong>의사에 반해 성적 자유를 침해했는지로 추행 해당성을 판단하는 영역입니다.</strong> 접촉 경위와 동의 정황을 정리하세요.',
      },
      {
        question: '둘만 있어 증거가 없는데 불리한가요?',
        answer:
          '<strong>진술 신빙성과 객관적 정황의 부합 여부로 판단되는 영역입니다.</strong> 전후 메시지·이동·결제 기록을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '성범죄 무고를 당했을 때 반대고소 가능한지', href: '/guide/sex-crime/sex-crime-false-accusation-counter' },
      { label: '찜질방 사우나 강제추행', href: '/guide/sex-crime/sex-crime-jjimjilbang-sauna-track' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
      { label: '공중화장실 불법촬영', href: '/guide/sex-crime/sex-crime-public-restroom-hidden-camera-track' },
    ],
  },
];
