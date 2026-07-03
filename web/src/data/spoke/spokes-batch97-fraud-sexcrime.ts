import { SpokePage } from '../spoke-pages';

// batch97 fraud(6) + sex-crime(4) — 10개 (2026-06-14)
//
// 고유 존재 이유:
// 1. fraud-pet-sale-sick-animal-track — 일반 중고거래 하자류와 분기. '질병을 숨기고 건강한 것처럼 분양 강아지를 판매' 질병 은폐·편취 판단형 트랙(victim).
// 2. fraud-secondhand-tablet-icloud-locked-track — 일반 중고거래 미전달류와 분기. '잠금 해제 불가 태블릿을 정상품처럼 판매' 사용불가 은폐·편취 판단형 트랙(victim).
// 3. fraud-rental-equipment-deposit-track — 일반 렌탈 분쟁과 분기. '장비 렌탈 보증금을 반환하지 않고 잠적' 보증금 미반환·편취 절차형 트랙(victim).
// 4. fraud-crypto-mining-machine-track — 일반 코인 투자사기류와 분기. '채굴기 수익을 보장한다며 투자금 유치' 수익보장 기망·편취 판단형 트랙(victim).
// 5. fraud-membership-prepay-closure-track — 일반 선결제 분쟁과 분기. '헬스장 장기 선결제 후 폐업·잠적' 선결제·폐업 편취 절차형 트랙(victim).
// 6. fraud-acquaintance-principal-guarantee-falsely-accused-defense — 일반 사기 무고류와 분기. '지인 투자금 원금보장 약속을 사기로 고소당함' 고지의무·편취 고의 방어 판단형 트랙(accused).
// 7. sex-crime-ktx-adjacent-seat-track — 일반 대중교통 추행류와 분기. 'KTX 옆좌석에서의 신체 접촉' 추행 해당성·상당성 일탈 판단형 트랙(victim).
// 8. sex-crime-jjimjilbang-sauna-track — 일반 추행류와 분기. '찜질방·사우나 공용공간 기습추행' 기습추행·폭행 정도 판단형 트랙(victim).
// 9. sex-crime-school-trip-escort-track — 일반 추행류와 분기. '수학여행 인솔 중 학생 강제추행' 추행 해당성·수치심 인식 불요 판단형 트랙(victim).
// 10. sex-crime-company-dinner-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 후 동료 강제추행으로 고소당함' 진술 신빙성·무죄추정 방어 판단형 트랙(accused).

export const spokesBatch97FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-pet-sale-sick-animal-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-sale-sick-animal-track',
    keyword: '분양 강아지 질병 은폐 판매 사기',
    questionKeyword: '펫숍·가정분양·중고거래에서 ‘건강하다, 예방접종 다 했다, 질병 없다’는 말을 믿고 강아지를 분양받았는데, 데려온 지 며칠 만에 파보·홍역·심한 기침 같은 증상이 나타나 병원에 가니 분양 전부터 앓던 질병으로 보인다는 소견을 받았어요. 판매자는 ‘몰랐다, 데려간 뒤 생긴 일’이라며 치료비도 환불도 거부하는데, 처음부터 아픈 사실을 숨기고 건강한 것처럼 속여 판 이 분양을 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '분양 강아지 질병 은폐·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '분양 강아지 질병 은폐 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '건강하다던 분양 강아지가 질병을 앓고 있고 판매자가 환불을 거부한다면, 형법 제347조 사기의 질병 은폐·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「펫숍·가정분양·중고거래·온라인 분양 글에서 ‘건강 상태 좋다, 예방접종·구충 다 마쳤다, 질병·유전병 없다’는 설명과 건강확인서를 믿고, 새 가족을 맞이하는 설레는 마음에 적지 않은 분양비를 주고 강아지를 데려온 분의 상황입니다. 그런데 데려온 지 며칠 만에 설사·구토·심한 기침·식욕부진 같은 증상이 나타나 동물병원에 데려갔더니, 파보·홍역·켄넬코프 등 분양 이전부터 잠복·진행되던 질병으로 보인다는 소견을 받아 충격받으셨을 거예요. 판매자에게 따지자 ‘나도 몰랐다, 데려간 뒤 관리 잘못으로 생긴 것이다, 치료비·환불은 못 해준다’며 발뺌하거나 연락을 미뤄, 처음부터 아픈 사실을 알면서 건강한 것처럼 속여 판 건 아닌지 의심되고 막막하실 거예요. 어린 생명이 아픈 데다 큰돈까지 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 질병을 알거나 알 수 있었음에도 이를 숨기거나 건강하다고 표시해 정상 시세로 분양했다면 기망행위로 평가될 여지가 있고, 분양비 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취 사기죄에서는 대가가 일부 지급된 경우에도 편취액은 교부받은 금원 전부이고, 다만 가액에 따라 가중 처벌하는 특정경제범죄법을 적용할 때에는 그 가액을 엄격·신중하게 산정해야 한다고 본 사례 흐름이 있는 영역입니다. 질병 은폐 + 건강 표시 + 환불 거부 결합은 ‘질병 은폐·편취 고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·분양 정리 ② 질병 은폐·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 분양 강아지 질병 은폐 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·질병 은폐·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·분양 정리</strong> — 분양계약서·건강확인서·건강 설명·분양비·강아지 상태 정리.</li>\n<li><strong>② 질병 은폐·고지의무</strong> — 질병을 알거나 알 수 있었음에도 숨겼는지 검토.</li>\n<li><strong>③ 편취액</strong> — 분양비 등 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·분양비 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 분양 후 질병과 달리, 분양 당시 이미 앓던 질병을 알거나 알 수 있었음에도 건강하다고 속여 정상 시세로 팔았는지가 사기 판단의 분기점입니다. 건강확인서와 동물병원 진단 소견을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·분양 자료 보존 (즉시)</strong> — 분양계약서·건강확인서·건강 설명 대화·강아지 상태 사진·영상 보존.</li>\n<li><strong>2단계 — 질병 진단 확보 (즉시)</strong> — 동물병원 진단서·검사 결과로 분양 전 질병 가능성을 객관적으로 확보.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·분양비·치료비 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄·경찰 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 분양비 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">분양 강아지 질병 은폐 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·질병 은폐·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양계약서·건강확인서 (건강·질병 표시 확인)</strong></li>\n<li><strong>건강·예방접종·질병 없음 설명 대화·광고 캡처 (기망 정황)</strong></li>\n<li><strong>동물병원 진단서·검사 결과 (질병·시점 입증)</strong></li>\n<li><strong>분양 직후 증상 사진·영상 (상태 변화)</strong></li>\n<li><strong>분양비·치료비 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불·치료비 요구·발뺌·연락 두절 대화 기록</strong></li>\n<li><strong>판매자·펫숍·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 건강하다는 설명·건강확인서와 동물병원 진단 소견을 대조하면 질병을 숨겼는지 기망 정황이 선명해집니다. 잠복기·발병 시점을 짚으면 판매자가 알 수 있었는지 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>질병 인식</strong> — 분양 당시 질병을 알거나 알 수 있었는지.</li>\n<li><strong>고지의무</strong> — 질병·건강 상태를 고지·표시할 의무를 어겼는지.</li>\n<li><strong>발병 시점</strong> — 분양 전 잠복 질병인지 이후 발병인지.</li>\n<li><strong>편취액</strong> — 분양비 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 펫숍·분양자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (반려동물·분양 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취액과 가액 산정',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 바로 성립하고 대가가 일부 지급되었어도 편취액은 교부받은 금원 전부이며, 다만 가액에 따라 가중 처벌하는 특정경제범죄법을 적용할 때에는 죄형균형·책임주의가 훼손되지 않도록 그 가액을 엄격·신중하게 산정해야 한다고 판시했습니다. 질병을 숨기고 건강한 것처럼 강아지를 분양해 분양비를 받은 사안을 살펴볼 때에도 분양비 전부를 기준으로 한 편취·재산침해를 검토해볼 수 있습니다.',
        takeaway: '질병 은폐 + 건강 표시 + 환불 거부 결합 시 질병 은폐·편취 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 몰랐다는데 사기가 되나요?',
        answer:
          '<strong>질병을 알거나 알 수 있었음에도 건강하다고 표시했는지가 핵심인 영역입니다.</strong> 건강확인서와 병원 진단 소견을 확보하세요.',
      },
      {
        question: '데려간 뒤 생긴 병이라고 우겨요.',
        answer:
          '<strong>잠복기·발병 시점이 다툼의 출발점인 영역입니다.</strong> 분양 직후 증상 사진과 진단서로 분양 전 질병 가능성을 입증하세요.',
      },
      {
        question: '질병 진단은 어디서 받나요?',
        answer:
          '<strong>동물병원 진단서·검사 결과가 핵심 자료인 영역입니다.</strong> 증상·잠복기·발병 시점을 서면으로 남기세요.',
      },
      {
        question: '치료비도 함께 청구할 수 있나요?',
        answer:
          '<strong>분양비와 함께 손해를 정리해 청구를 검토할 수 있는 영역입니다.</strong> 분양비·치료비 송금 총액을 정리하세요.',
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
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '동업 자금 손실 사기 무고 방어', href: '/guide/fraud/fraud-business-partner-capital-loss-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 2. fraud-secondhand-tablet-icloud-locked-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-tablet-icloud-locked-track',
    keyword: '중고 태블릿 잠금 해제 불가 판매 사기',
    questionKeyword: '중고거래에서 ‘정상 작동, 초기화 완료, 깨끗하다’는 설명을 믿고 중고 태블릿·아이패드를 샀는데, 받아 보니 아이클라우드(활성화 잠금)·구글 계정 잠금이 걸려 있어 초기화도 사용도 불가능했어요. 판매자는 ‘몰랐다, 그쪽에서 풀어라’며 환불을 거부하는데, 처음부터 잠금 때문에 쓸 수 없는 기기를 정상품처럼 속여 판 것 같아요. 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 태블릿 잠금 은폐·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 태블릿 잠금 해제 불가 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정상품이라던 중고 태블릿이 계정 잠금으로 사용 불가이고 판매자가 환불을 거부한다면, 형법 제347조 사기의 사용불가 은폐·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고거래·번개장터·당근·카페에서 ‘정상 작동, 공장초기화 완료, 잠금 없음, 깨끗하게 썼다’는 설명과 사진을 믿고, 새것보다 싸다는 생각에 적지 않은 돈을 주고 중고 태블릿·아이패드·갤럭시탭을 산 분의 상황입니다. 그런데 받아서 켜 보니 아이클라우드 활성화 잠금이나 구글 계정 잠금이 걸려 있어 초기화도, 본인 계정 로그인도, 정상 사용도 전혀 되지 않아, 사실상 쓸 수 없는 기기였다는 걸 뒤늦게 알고 충격받으셨을 거예요. 판매자에게 따지자 ‘나도 몰랐다, 원래 주인한테 풀어달라고 해라, 환불은 안 된다’며 발뺌하거나 연락을 미뤄, 처음부터 잠금 때문에 쓸 수 없는 기기를 정상품처럼 속여 판 건 아닌지 의심되고 막막하실 거예요. 멀쩡한 줄 알았던 기기가 무용지물이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 계정 잠금으로 사용할 수 없는 사정을 알거나 알 수 있었음에도 이를 숨기고 정상품으로 속여 판매대금을 받았다면 기망행위로 평가될 여지가 있고, 대금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 물품거래에서 편취 사기죄 성립은 거래 당시를 기준으로 대금을 변제·이행할 의사나 능력 없이 속였는지로 판단하고, 편취의 범의는 미필적 고의로도 족하며 범행 전후의 객관적 사정을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 사용불가 은폐 + 정상 표시 + 환불 거부 결합은 ‘사용불가 은폐·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·기기 정리 ② 잠금 은폐·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 태블릿 잠금 해제 불가 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·잠금 은폐·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·기기 정리</strong> — 거래 글·정상 설명·대금·기기 상태·잠금 화면 정리.</li>\n<li><strong>② 잠금 은폐·고지의무</strong> — 계정 잠금을 알거나 알 수 있었음에도 숨겼는지 검토.</li>\n<li><strong>③ 편취액</strong> — 교부한 판매대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·대금 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 하자와 달리, 계정 잠금으로 쓸 수 없는 사정을 알거나 알 수 있었음에도 정상품으로 속여 팔았는지가 사기 판단의 분기점입니다. 정상 설명 대화와 잠금 화면 캡처를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·기기 자료 보존 (즉시)</strong> — 거래 글·정상 설명 대화·대금 송금·잠금 화면 캡처 보존.</li>\n<li><strong>2단계 — 사용불가 입증 (즉시)</strong> — 활성화 잠금·계정 잠금으로 초기화·사용이 불가함을 캡처·영상으로 확보.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·대금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 대금 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 태블릿 잠금 해제 불가 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·잠금 은폐·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 글·정상 작동·잠금 없음 설명 캡처 (기망 정황)</strong></li>\n<li><strong>활성화·계정 잠금 화면 캡처·영상 (사용불가 입증)</strong></li>\n<li><strong>기기 일련번호·모델·잠금 상태 조회 자료</strong></li>\n<li><strong>판매대금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요구·발뺌·연락 두절 대화 기록</strong></li>\n<li><strong>동일 판매자 다른 잠금 기기 판매 정황</strong></li>\n<li><strong>판매자 계정·닉네임·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정상품이라는 설명 대화와 실제 잠금 화면을 대조하면 사용불가를 숨겼는지 기망 정황이 선명해집니다. 잠금 상태 조회·일련번호로 기기를 특정하면 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>잠금 인식</strong> — 계정 잠금을 알거나 알 수 있었는지.</li>\n<li><strong>고지의무</strong> — 사용불가 사정을 고지·표시할 의무를 어겼는지.</li>\n<li><strong>편취 범의</strong> — 거래 당시 정상품 이행 의사·능력 없이 속였는지.</li>\n<li><strong>편취액</strong> — 교부한 판매대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자제품·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 물품거래 편취 사기죄의 범의 판단',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 물품거래에서 편취 사기죄의 성립 여부는 거래 당시를 기준으로 대금을 변제·이행할 의사나 능력 없이 거짓말로 물품·금원을 편취할 고의가 있었는지로 판단하고, 편취의 범의는 확정적 고의가 아니라 미필적 고의로도 족하며 범행 전후의 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단해야 한다고 판시했습니다. 계정 잠금으로 쓸 수 없는 기기를 정상품처럼 판 사안을 살펴볼 때에도 거래 당시 기망과 편취 범의를 검토해볼 수 있습니다.',
        takeaway: '사용불가 은폐 + 정상 표시 + 환불 거부 결합 시 사용불가 은폐·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 잠금을 몰랐다는데 사기가 되나요?',
        answer:
          '<strong>사용불가를 알거나 알 수 있었음에도 정상품으로 표시했는지가 핵심인 영역입니다.</strong> 정상 설명 대화와 잠금 화면을 확보하세요.',
      },
      {
        question: '잠금 때문에 못 쓰는 건 어떻게 입증하나요?',
        answer:
          '<strong>활성화·계정 잠금 화면과 초기화 불가 정황이 출발점인 영역입니다.</strong> 캡처·영상으로 사용불가를 남기세요.',
      },
      {
        question: '원래 주인한테 풀라는데 맞는 말인가요?',
        answer:
          '<strong>책임을 떠넘기는 발뺌이 다툼의 핵심인 영역입니다.</strong> 정상품으로 속여 판 거래 조건과 잠금 상태를 정리하세요.',
      },
      {
        question: '대금 전부가 피해인가요?',
        answer:
          '<strong>교부한 판매대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '판매자가 환불을 거부하고 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '중고거래 사기 가능성, AI로 점검하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '데이팅앱 로맨스 스캠', href: '/guide/fraud/fraud-dating-app-money-loss' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 3. fraud-rental-equipment-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-equipment-deposit-track',
    keyword: '장비 렌탈 보증금 미반환 사기',
    questionKeyword: '카메라·드론·공구·행사 장비 등을 빌리면서 업체·개인에게 보증금을 맡기고 장비를 정상 반납했는데, 반납 후 ‘파손이 있다, 확인 중이다’며 보증금 반환을 계속 미루다 연락이 끊겼어요. 알고 보니 처음부터 보증금만 받고 돌려줄 생각이 없거나 같은 수법으로 여러 명에게 돈을 챙긴 정황인데, 사기로 신고하고 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '장비 렌탈 보증금 미반환·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '장비 렌탈 보증금 미반환 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '장비를 정상 반납했는데 렌탈 보증금을 핑계만 대며 돌려주지 않고 잠적당했다면, 형법 제347조 사기의 미반환·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「카메라·드론·공구·음향·행사 장비 등을 단기 대여하면서, 업체나 개인 렌탈 사업자에게 시키는 대로 보증금을 그 계좌로 맡기고 약속대로 장비를 깨끗하게 정상 반납한 분의 상황입니다. 그런데 반납 후 보증금을 돌려달라고 하자 ‘파손·분실 확인 중이다, 점검이 끝나야 한다, 곧 보내겠다’며 며칠씩 미루다가, 결국 연락을 끊거나 차일피일 시간만 끌어, 처음부터 보증금만 받고 돌려줄 생각이 없었던 건 아닌지 의심되고 막막하실 거예요. 같은 업체에 당한 사람이 더 있는 정황까지 보여, 멀쩡히 반납하고도 돈이 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 반환 의사·능력 없이 보증금을 반환할 것처럼 속여 받았거나 정상 반납에도 핑계로 반환을 거부·잠적했다면 기망행위로 평가될 여지가 있고, 보증금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득이고, 편취의 범의는 계약 당시를 기준으로 거래의 내용·체결 경위·이행과정 등 객관적 사정을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 정상 반납 + 보증금 미반환 + 핑계·잠적 결합은 ‘보증금 미반환·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·보증금 정리 ② 미반환·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장비 렌탈 보증금 미반환 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미반환·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·보증금 정리</strong> — 렌탈 계약·보증금 송금·반납 약정·반납 사실 정리.</li>\n<li><strong>② 미반환·기망</strong> — 정상 반납에도 핑계로 반환을 거부·잠적했는지 검토.</li>\n<li><strong>③ 편취액</strong> — 교부한 보증금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 반환 지연과 달리, 정상 반납했는데도 거짓 핑계로 보증금을 돌려주지 않고 챙겼는지가 사기 판단의 분기점입니다. 반납 사실 증빙과 미반환·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·보증금 자료 보존 (즉시)</strong> — 렌탈 계약·보증금 송금·반납 약정·반납 인수증 보존.</li>\n<li><strong>2단계 — 정상 반납 입증 (즉시)</strong> — 반납 사진·영상·인수 확인·반납 대화로 파손·분실이 없음을 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지·내용증명 보증금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 동일 업체 공동 신고·민사 보증금 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">장비 렌탈 보증금 미반환 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미반환·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>렌탈 계약·약관·보증금 반환 조건 (거래 조건)</strong></li>\n<li><strong>보증금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>반납 사진·영상·인수 확인 (정상 반납 입증)</strong></li>\n<li><strong>반환 요구·핑계·연락 두절 대화 기록</strong></li>\n<li><strong>파손·분실 주장에 대한 반박 자료</strong></li>\n<li><strong>동일 업체 다른 피해·후기 자료</strong></li>\n<li><strong>업체·사업자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 반납 인수증·사진과 보증금 미반환 대화를 대조하면 정상 반납에도 거짓 핑계로 돌려주지 않았는지 기망 정황이 선명해집니다. 같은 업체 피해자를 모으면 편취 패턴과 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정상 반납</strong> — 파손·분실 없이 정상 반납했는지.</li>\n<li><strong>미반환·기망</strong> — 거짓 핑계로 보증금을 돌려주지 않았는지.</li>\n<li><strong>편취 범의</strong> — 처음부터 보증금만 챙길 의도였는지.</li>\n<li><strong>편취액</strong> — 교부한 보증금 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (렌탈·대여 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 편취 범의와 기망행위 판단',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득이고, 불법영득의 의사 내지 편취의 범의는 계약 당시를 기준으로 피고인의 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단해야 하며, 행정법규나 절차 규정을 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정할 수 없다고 판시했습니다. 정상 반납에도 보증금을 핑계로 돌려주지 않고 잠적한 사안을 살펴볼 때에도 계약 당시·이행과정을 종합한 편취 범의와 기망을 검토해볼 수 있습니다.',
        takeaway: '정상 반납 + 보증금 미반환 + 핑계·잠적 결합 시 보증금 미반환·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 반환 지연 아닌가요?',
        answer:
          '<strong>정상 반납에도 거짓 핑계로 보증금을 돌려주지 않았는지가 핵심인 영역입니다.</strong> 반납 증빙과 미반환 대화를 확보하세요.',
      },
      {
        question: '파손이 있다고 우기면 어쩌죠?',
        answer:
          '<strong>반납 당시 상태 입증이 다툼의 출발점인 영역입니다.</strong> 반납 사진·영상·인수 확인으로 파손이 없음을 남기세요.',
      },
      {
        question: '보증금 전부가 피해인가요?',
        answer:
          '<strong>교부한 보증금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 업체에 당한 사람이 많아요.',
        answer:
          '<strong>동일 업체 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 계약·송금·후기 자료를 모으세요.',
      },
      {
        question: '업체가 잠적했는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '임대인 전세보증금 빼돌리기', href: '/guide/fraud/fraud-jeonse-deposit-embezzle-track' },
      { label: '투자 동호회 운영자 회원 손실 차용사기 무고 방어', href: '/guide/fraud/fraud-investment-club-member-loss-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-crypto-mining-machine-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-mining-machine-track',
    keyword: '코인 채굴기 수익보장 투자 사기',
    questionKeyword: '‘채굴기를 사두면 매달 코인이 자동으로 채굴돼 원금 이상 수익이 보장된다, 우리가 관리·운영해준다’는 말을 믿고 채굴기 구매·위탁운영 명목으로 큰돈을 투자했는데, 처음 몇 달은 수익이 들어오는 듯하다가 점점 줄더니 ‘전기료·점검비를 더 내라’며 추가 입금을 요구하고 결국 연락이 끊겼어요. 처음부터 채굴기·수익이 허위였던 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '코인 채굴기 수익보장 기망·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 채굴기 수익보장 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '채굴기 수익을 보장한다며 투자금을 받고 추가 입금을 요구하다 잠적당했다면, 형법 제347조 사기의 수익보장 기망·편취 판단과 대응까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「설명회·지인 소개·SNS·오픈채팅에서 ‘채굴기를 한 대 사두면 매달 코인이 자동으로 채굴돼 원금 이상 수익이 보장된다, 운영·관리는 우리가 다 해준다, 전기료 빼도 남는다’는 말을 믿고, 노후·재테크를 위해 적지 않은 돈을 채굴기 구매·위탁운영 명목으로 투자한 분의 상황입니다. 처음 몇 달은 약속대로 수익이 들어오는 듯 보이다가, 점점 정산금이 줄거나 밀리더니 ‘전기료·점검비·시설 이전비를 더 내야 한다’며 추가 입금을 요구하고, 더 보내지 않자 정산을 끊거나 결국 연락을 끊어, 처음부터 채굴기·수익이 허위였거나 돌려막기였던 건 아닌지 의심되고 막막하실 거예요. 노후 자금까지 들어가 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부 또는 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 채굴기·수익이 실제와 다르거나 정산할 의사·능력 없이 수익을 보장한다며 투자금을 받았다면 기망행위로 평가될 여지가 있습니다. 판례는 금원 편취 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 금원 전부이고, 기망을 수단으로 한 권리행사가 사회통념상 권리행사를 빙자한 것이면 사기죄를 구성할 수 있다고 본 사례 흐름이 있는 영역입니다. 수익보장 + 채굴기 위탁 + 추가 입금·잠적 결합은 ‘수익보장 기망·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·송금 정리 ② 기망·수익보장 ③ 편취액 ④ 형사 신고 ⑤ 회수·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 채굴기 수익보장 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망·편취액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·송금 정리</strong> — 채굴기 구매·위탁 계약·수익보장 약속·투자금 송금 정리.</li>\n<li><strong>② 기망·수익보장</strong> — 채굴기·수익이 허위이거나 정산 의사 없이 보장했는지 검토.</li>\n<li><strong>③ 편취액</strong> — 투자·추가 입금 등 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 회수·집단 대응</strong> — 지급정지·동일 행위자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 채굴기·수익이 허위이거나 정산할 의사·능력 없이 수익을 보장한다며 돈을 받았는지가 사기 판단의 분기점입니다. 수익보장 약속과 추가 입금·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·송금 자료 보존 (즉시)</strong> — 채굴기 계약·수익보장 약속·정산 내역·송금·추가 입금 캡처 보존.</li>\n<li><strong>2단계 — 채굴기·운영 실체 정리 (즉시)</strong> — 채굴기 실재·운영·정산 화면·전기료 빙자 요구 정황 정리.</li>\n<li><strong>3단계 — 계좌·자금 흐름 확보 (병행)</strong> — 송금 계좌·정산 계좌·자금 흐름을 확보.</li>\n<li><strong>4단계 — 경찰·금감원 신고 (1주)</strong> — 사이버범죄 신고, 금융감독원 1332 유사수신·투자사기 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 회수·집단 대응 (2개월 내)</strong> — 지급정지·동일 행위자 공동 신고·민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 채굴기 수익보장 투자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>채굴기 구매·위탁운영 계약·약관 (거래 조건)</strong></li>\n<li><strong>수익보장·원금보장 약속 대화·홍보 자료 (기망 정황)</strong></li>\n<li><strong>정산 내역·수익 화면·채굴기 사진 (실체 확인)</strong></li>\n<li><strong>투자금·추가 입금·전기료 빙자 송금 내역 (피해 금액)</strong></li>\n<li><strong>정산 중단·연락 두절 대화 기록</strong></li>\n<li><strong>동일 행위자 다른 피해·모집 자료</strong></li>\n<li><strong>송금 계좌·운영자·법인 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수익보장 약속과 추가 입금 요구·정산 중단을 시간순으로 정리하면 기망·편취 정황이 선명해집니다. 같은 수법에 당한 피해자를 모아 자금 흐름을 묶으면 피해 입증과 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 여부</strong> — 채굴기·수익이 허위이거나 정산 의사 없이 보장했는지.</li>\n<li><strong>수익보장</strong> — 원금·수익 보장 약속이 실제와 다른지.</li>\n<li><strong>투자 손실 항변</strong> — 단순 손실인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 투자·추가 입금 전부가 피해액인지.</li>\n<li><strong>행위자 특정</strong> — 계좌·법인·운영자로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (투자·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자사기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금원 편취 사기죄의 편취액과 권리행사',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 대가가 일부 지급된 경우에도 편취액은 그 대가를 공제한 차액이 아니라 교부받은 금원 전부이고, 기망행위를 수단으로 한 권리행사가 사회통념상 권리행사를 빙자한 것이면 사기죄를 구성할 수 있다고 판시했습니다. 채굴기·수익을 보장한다며 투자금과 추가 입금을 받은 사안을 살펴볼 때에도 교부한 금원 전부를 기준으로 한 편취·재산침해를 검토해볼 수 있습니다.',
        takeaway: '수익보장 + 채굴기 위탁 + 추가 입금·잠적 결합 시 수익보장 기망·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실은 제 책임 아닌가요?',
        answer:
          '<strong>채굴기·수익이 허위이거나 정산 의사 없이 보장했는지가 핵심인 영역입니다.</strong> 수익보장 약속과 정산 중단 대화를 확보하세요.',
      },
      {
        question: '채굴기가 실제로 있긴 한 것 같아요.',
        answer:
          '<strong>채굴기 실재 여부와 수익·정산의 실체가 다툼점인 영역입니다.</strong> 정산 화면·채굴기 사진·자금 흐름을 정리하세요.',
      },
      {
        question: '전기료·점검비를 더 내라고 했어요.',
        answer:
          '<strong>전기료·점검비 빙자 추가 요구는 기망 다툼의 핵심인 영역입니다.</strong> 추가 입금 요구 대화와 거부 후 잠적 정황을 정리하세요.',
      },
      {
        question: '투자금 전부가 피해인가요?',
        answer:
          '<strong>투자·추가 입금 등 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 수법에 당한 사람이 많아요.',
        answer:
          '<strong>같은 행위자 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 계약·송금 자료를 모으세요.',
      },
    ],
    cta: { text: '코인 투자 사기 가능성, AI로 점검하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '주식 리딩방 사기 증거 보존', href: '/guide/fraud/fraud-investment-stock-room-coercion' },
      { label: '공동 주식투자 손실 은폐 사기 고의 무고 방어', href: '/guide/fraud/fraud-joint-stock-investment-loss-concealment-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-membership-prepay-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-prepay-closure-track',
    keyword: '헬스장 선결제 폐업 잠적 사기',
    questionKeyword: '헬스장·필라테스·PT에서 ‘오래 끊을수록 저렴하다, 곧 시설 확장한다, 절대 폐업 안 한다’는 말을 믿고 1~3년치를 한꺼번에 선결제했는데, 얼마 지나지 않아 갑자기 문을 닫고 환불도 없이 잠적했어요. 알고 보니 폐업·자금난을 알면서도 막판에 회원을 모집해 선결제만 챙긴 정황인데, 사기로 신고하고 남은 이용료를 돌려받을 수 있나요?',
    ctaKeyword: '헬스장 선결제 폐업 잠적·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 선결제 폐업 잠적 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '헬스장에 장기 이용료를 선결제했는데 곧 폐업·잠적해 환불도 못 받았다면, 형법 제347조 사기의 폐업 인식·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·필라테스·PT·요가원에서 ‘길게 끊을수록 한 달 단가가 싸다, 곧 시설을 확장·리뉴얼한다, 회원이 많아 폐업할 일 없다’는 권유를 믿고, 아끼려는 마음에 1년·2년·3년치 이용료를 한꺼번에 선결제한 분의 상황입니다. 그런데 결제하고 얼마 지나지 않아 헬스장이 갑자기 문을 닫고, 환불 안내도 없이 사장·운영자가 연락을 끊고 잠적해, 남은 기간 이용료를 고스란히 떼이게 되어 막막하실 거예요. 알고 보니 이미 임대료·기구 대금이 밀려 폐업이 예정돼 있었는데도 막판에 장기 회원을 집중 모집해 선결제만 챙긴 정황까지 보여, 멀쩡한 줄 알고 큰돈을 낸 게 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 폐업·자금난으로 계약대로 시설을 제공할 의사·능력이 없음을 알면서도 정상 운영할 것처럼 속여 선결제를 받았다면 기망행위로 평가될 여지가 있고, 선결제 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 재물편취 사기죄에서 대가가 일부 제공된 경우에도 편취액은 교부받은 재물 전부이고, 상품 거래를 빙자해 실질적으로 출자·투자금을 받은 것이면 그 실질에 따라 평가해야 한다고 본 사례 흐름이 있는 영역입니다. 폐업 인식 + 막판 모집 + 잠적 결합은 ‘폐업 인식·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·계약 정리 ② 폐업 인식·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 선결제 폐업 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·폐업 인식·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·계약 정리</strong> — 회원권·PT 계약·선결제 금액·이용 기간·잔여 기간 정리.</li>\n<li><strong>② 폐업 인식·기망</strong> — 폐업·자금난을 알면서도 정상 운영할 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취액</strong> — 선결제 중 미이용 잔여분 또는 교부한 금원 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 카드 할부항변·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 폐업과 달리, 폐업·자금난을 알면서도 막판에 장기 회원을 모집해 선결제만 챙겼는지가 사기 판단의 분기점입니다. 권유·결제 정황과 직후 폐업·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·계약 자료 보존 (즉시)</strong> — 회원권·PT 계약·선결제 영수증·권유 대화·이용 기록 보존.</li>\n<li><strong>2단계 — 폐업·잠적 정황 확보 (즉시)</strong> — 폐업 공지·문 닫힘·연락 두절·환불 거부 정황을 확보.</li>\n<li><strong>3단계 — 카드 할부항변·환급 요구 (병행)</strong> — 신용카드 할부항변권·내용증명 환급을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 경찰 신고, 한국소비자원 1372·대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 동일 업체 공동 신고·민사 환급 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 선결제 폐업 잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·폐업 인식·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>회원권·PT 계약서·약관 (거래 조건)</strong></li>\n<li><strong>선결제 영수증·카드 결제·할부 내역 (피해 금액)</strong></li>\n<li><strong>장기 등록·시설 확장·폐업 안 한다 권유 대화 (기망 정황)</strong></li>\n<li><strong>폐업 공지·문 닫힘·연락 두절 정황 자료</strong></li>\n<li><strong>이용 기록·잔여 기간 산정 자료</strong></li>\n<li><strong>동일 업체 다른 피해 회원·후기 자료</strong></li>\n<li><strong>업체·운영자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐업 직전 장기 등록을 권유한 정황과 결제 직후 폐업·잠적을 시간순으로 정리하면 폐업 인식·기망 정황이 선명해집니다. 카드 결제라면 할부항변권을 함께 검토하는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 인식</strong> — 결제 권유 당시 폐업·자금난을 알고 있었는지.</li>\n<li><strong>막판 모집</strong> — 폐업 직전 장기 회원을 집중 모집했는지.</li>\n<li><strong>편취 범의</strong> — 정상 운영 의사 없이 선결제만 챙길 의도였는지.</li>\n<li><strong>편취액</strong> — 미이용 잔여분 또는 선결제 전부가 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 사업자·운영자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·선결제 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재물편취 사기죄의 편취액과 거래 실질',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 재물편취를 내용으로 하는 사기죄에서는 대가가 일부 제공된 경우에도 편취액은 그 대가를 공제한 차액이 아니라 교부받은 재물 전부이고, 상품 거래를 매개·빙자해 실질적으로 출자·투자금을 받은 것인지는 거래의 실질에 따라 평가해야 한다고 판시했습니다. 폐업을 알면서 장기 회원을 모집해 선결제를 받은 사안을 살펴볼 때에도 교부한 금원 전부를 기준으로 한 편취·재산침해를 검토해볼 수 있습니다.',
        takeaway: '폐업 인식 + 막판 모집 + 잠적 결합 시 폐업 인식·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 장사가 안돼서 폐업한 것 아닌가요?',
        answer:
          '<strong>폐업·자금난을 알면서도 막판에 장기 회원을 모집했는지가 핵심인 영역입니다.</strong> 권유 대화와 직후 폐업 정황을 확보하세요.',
      },
      {
        question: '폐업을 알고 있었다는 걸 어떻게 다투나요?',
        answer:
          '<strong>임대료·기구 대금 연체·폐업 예정 정황이 출발점인 영역입니다.</strong> 결제 직전 권유와 직후 폐업 시점을 시간순으로 정리하세요.',
      },
      {
        question: '카드로 결제했는데 돌려받을 길이 있나요?',
        answer:
          '<strong>신용카드 할부라면 할부항변권을 함께 검토할 수 있는 영역입니다.</strong> 결제·할부 내역과 폐업 정황을 모으세요.',
      },
      {
        question: '남은 기간만 손해인가요?',
        answer:
          '<strong>미이용 잔여분 또는 교부한 금원 전부가 피해액으로 평가될 수 있는 영역입니다.</strong> 이용 기록과 잔여 기간을 정리하세요.',
      },
      {
        question: '같은 헬스장에 당한 회원이 많아요.',
        answer:
          '<strong>동일 업체 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 회원별 계약·결제 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '성형외과 패키지 선결제 폐업 사기', href: '/guide/fraud/fraud-cosmetic-surgery-package-prepay-closure-track' },
      { label: '친구 사업 손실 차용금 사기', href: '/guide/fraud/fraud-loan-friend-business-loss-not-paying' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-acquaintance-principal-guarantee-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-acquaintance-principal-guarantee-falsely-accused-defense',
    keyword: '지인 투자금 원금보장 약속 사기 무고',
    questionKeyword: '지인·친구에게 좋은 투자처를 소개하며 ‘원금은 보장한다, 손해는 안 보게 하겠다’고 말하고 돈을 받아 함께 투자했는데, 투자가 실패해 원금을 돌려주지 못하자 상대가 ‘처음부터 원금보장이라 속인 사기’라며 저를 고소했어요. 저는 정말 수익이 날 거라 믿었고 같이 손해를 본 처지인데, 사기 피의자가 되어 막막합니다. 이런 원금보장 약속 사기 고소에 어떻게 방어하나요?',
    ctaKeyword: '지인 투자금 원금보장 무고 고지의무·편취 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '지인 투자금 원금보장 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '지인 투자금 원금보장 약속을 처음부터 속인 사기로 고소당했다면, 형법 제347조 사기의 고지의무·편취 고의 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·친구·동호회 사람에게 평소 알던 투자처·사업을 소개하며 ‘좋은 기회다, 같이 하자, 원금은 보장한다, 손해는 안 보게 하겠다’고 말하고 돈을 받아 함께 투자했는데, 시장이 꺾이거나 사업이 어그러져 투자가 실패하고 원금을 돌려주지 못하게 된 분의 상황입니다. 그러자 상대가 ‘처음부터 원금보장이라 속여 돈을 받아 간 사기’라며 형사 고소를 해, 본인도 똑같이 돈을 넣고 손해를 본 처지인데 한순간에 사기 피의자가 되어버린 분의 상황입니다. 정말로 수익이 날 거라 믿고 권한 것이고 결과가 나빠 함께 손해 본 것뿐인데, 원금보장이라는 말 한마디로 처음부터 사기였던 것처럼 몰려 억울하고 막막하실 거예요. 오랜 관계까지 틀어져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 규정이고, 투자 권유 사기는 권유 당시를 기준으로 기망과 편취의 고의가 있었는지가 핵심 쟁점인 영역입니다. 혐의를 받고 있다면, 권유 당시 투자 위험·손실 가능성을 알면서 숨겼는지, 아니면 본인도 수익을 믿고 권한 것인지가 갈립니다. 판례는 사기죄의 편취 고의는 자백이 없는 한 범행 전후의 재력·환경·거래 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 민사상 채무불이행 사실만으로 바로 편취 고의를 인정할 수 없으나 확실한 변제 의사 없이 변제할 것처럼 가장한 경우에는 편취 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 권유 경위·자금 흐름·본인 투자 정황을 정리해 다툴 수 있는 영역입니다. 원금보장 약속 + 공동 손실 + 정황 다툼 결합은 ‘고지의무·편취 고의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 권유 경위 정리 ② 기망·고지의무 ③ 편취 고의 ④ 자금 흐름·정황 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 투자금 원금보장 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유 경위·기망·편취 고의·자금 흐름·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유 경위 정리</strong> — 권유 시기·투자처·원금보장 언급·관계·송금 경위 정리.</li>\n<li><strong>② 기망·고지의무</strong> — 위험·손실 가능성을 알면서 숨겼는지 검토.</li>\n<li><strong>③ 편취 고의</strong> — 권유 당시 기준으로 편취 고의가 부정되는지 검토.</li>\n<li><strong>④ 자금 흐름·정황</strong> — 본인 투자·공동 손실·자금 사용 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 투자가 실패했다는 사실만으로 곧바로 사기가 되는 것이 아니라, 권유 당시 위험을 숨겼는지와 편취 고의가 있었는지가 분기점입니다. 본인도 함께 투자·손실을 본 정황과 권유 경위로 단순 투자 실패임을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유 경위 정리 (즉시)</strong> — 권유 시기·투자처·원금보장 언급·관계·송금 경위 정리.</li>\n<li><strong>2단계 — 자금 흐름 확보 (1주)</strong> — 본인 투자·전달·공동 손실·계좌 자금 흐름을 확보.</li>\n<li><strong>3단계 — 위험 고지·상환 노력 정리 (2주)</strong> — 위험을 함께 인식한 정황·일부 변제·상환 노력 정황 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 권유 당시 수익 기대·기망 없음 입증 자료, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 투자금 원금보장 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권유 경위·기망·편취 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유·원금보장 언급 대화·메시지 (거래 조건)</strong></li>\n<li><strong>본인 투자·전달 송금 내역 (공동 손실 정황)</strong></li>\n<li><strong>투자처·사업의 실재·운영 자료 (실체)</strong></li>\n<li><strong>위험·손실 가능성을 함께 인식한 정황 자료</strong></li>\n<li><strong>일부 변제·상환 노력·연장 협의 기록</strong></li>\n<li><strong>권유·손실 관련 대화·메시지 기록</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘권유 당시 위험을 숨겼는지’와 ‘편취 고의가 합리적 의심 없이 증명되는지’입니다. 본인도 같은 투자처에 돈을 넣고 손실을 본 정황과 실제 투자 자금 흐름을 정돈하면 단순 투자 실패와 사기를 가르는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·고지의무</strong> — 권유 당시 위험·손실 가능성을 숨겼는지.</li>\n<li><strong>편취 고의</strong> — 권유 당시 기준으로 편취 고의가 증명되는지.</li>\n<li><strong>채무불이행 경계</strong> — 단순 투자 실패·변제 불능인지 사기인지.</li>\n<li><strong>공동 손실</strong> — 본인도 함께 투자해 손실을 봤는지.</li>\n<li><strong>원금보장 의미</strong> — 단정적 보장인지 수익 기대 표현인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망·고지의무와 편취 고의 판단 기준',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 지켜야 할 신의성실 의무를 저버리는 모든 적극·소극 행위를 말하고, 상대방이 일정한 사정을 고지받았더라면 거래하지 않았을 관계가 인정되면 그 사정을 고지할 의무가 있으며, 편취 고의는 자백이 없는 한 범행 전후의 재력·환경·거래 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단하고, 단순 채무불이행만으로 바로 편취 고의를 인정할 수 없으나 확실한 변제 의사 없이 변제할 것처럼 가장한 경우에는 인정할 수 있다고 판시했습니다. 원금보장을 약속해 투자금을 받았다 돌려주지 못해 사기로 고소된 사안을 살펴볼 때에도 고지의무 위반과 편취 고의를 검토해볼 수 있습니다.',
        takeaway: '원금보장 약속 + 공동 손실 + 정황 다툼 결합 시 고지의무·편취 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '원금보장이라 말했으면 무조건 사기인가요?',
        answer:
          '<strong>그 말이 위험을 숨긴 기망인지, 본인도 믿고 권한 수익 기대 표현인지가 핵심인 영역입니다.</strong> 권유 경위와 본인 투자 정황을 정리하세요.',
      },
      {
        question: '저도 같이 돈을 넣고 손해를 봤어요.',
        answer:
          '<strong>공동 투자·손실 정황은 편취 고의를 부정하는 다툼점인 영역입니다.</strong> 본인 송금·손실 자료를 함께 모으세요.',
      },
      {
        question: '투자가 실패한 것뿐인데 어떻게 보나요?',
        answer:
          '<strong>단순 투자 실패와 권유 당시 편취는 구분되는 영역입니다.</strong> 권유 당시 투자처 실재·운영과 이후 시장 악화를 시간순으로 정리하세요.',
      },
      {
        question: '위험 설명을 했는데도 사기라고 해요.',
        answer:
          '<strong>위험·손실 가능성을 함께 인식한 정황이 다툼의 핵심인 영역입니다.</strong> 위험을 알린 대화와 상환 노력을 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>권유 당시 사정에 관한 진술의 일관성이 중요한 영역입니다.</strong> 경위·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '임대차 분쟁인데 사기로 고소당했을 때', href: '/guide/fraud/rental-fraud-false-accusation-defense' },
      { label: '대출 알선 선수수료 편취 사기 고의 무고 방어', href: '/guide/fraud/fraud-loan-brokerage-upfront-fee-intent-falsely-accused-defense' },
      { label: '사기 피의자 조사에서 흔한 실수 5가지', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '계좌 지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
    ],
  },

  // ─── 7. sex-crime-ktx-adjacent-seat-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-ktx-adjacent-seat-track',
    keyword: 'KTX 기차 옆좌석 강제추행',
    questionKeyword: 'KTX·SRT·기차 옆좌석에 앉은 사람이 좁은 좌석 틈을 이용해 제 허벅지·손·팔에 자기 다리나 손을 슬며시 붙이거나 쓰다듬고, 자는 척하며 몸을 기대 와 큰 불쾌감과 수치심을 느꼈어요. 좌석이 붙어 있으니 우연인지 일부러인지 헷갈렸고 그 자리에서 항의도 못 했는데, 이런 기차 옆좌석에서의 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: 'KTX 옆좌석 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'KTX 옆좌석 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '기차 옆좌석 사람이 좌석 틈을 이용해 신체를 접촉해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성 일탈을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「KTX·SRT·일반 기차의 좁은 옆좌석에 앉아 가던 중, 옆자리 사람이 좌석이 붙어 있는 틈을 이용해 본인의 허벅지·손·팔·어깨에 자기 다리나 손을 슬며시 붙이거나 쓰다듬고, 자는 척하며 몸을 필요 이상으로 기대 오거나 손을 뻗어 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 좌석이 워낙 붙어 있어 ‘흔들려서 닿은 우연인지, 일부러 만지는 건지’ 헷갈리고, 낯선 사람과 좁은 공간에 갇혀 있다는 위축감에 그 자리에서 제대로 항의하거나 자리를 옮기지 못한 채 도착할 때까지 참아, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 도망갈 곳 없는 좌석에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 다중이 이용하는 교통수단에서의 추행은 성폭력처벌법으로도 규율되는 영역입니다. 판례는 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 판단하고, 공동체 내 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 접촉은 추행으로 보지 않으나, 그 상당한 범주를 벗어나 상대방의 성적 자유를 침해하는 유형력 행사이면 강제추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 좌석 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합은 ‘추행 해당성·상당성 일탈’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. KTX 옆좌석 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 열차편·일시·좌석 번호·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의례적·상당한 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 객실 CCTV·승무원 신고·좌석 발권 정보 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 좌석 발권·CCTV·승무원 확인으로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·철도경찰·해바라기센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좌석이 붙어 있어도 의례적·상당한 범위를 넘어 의사에 반한 쓰다듬·밀착이 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 열차편·좌석 정보와 객실 CCTV·승무원 신고를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 열차편·일시·좌석 번호·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>2단계 — 승무원 신고·CCTV 보존 (즉시)</strong> — 열차 승무원·철도경찰에 즉시 알리고 객실 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 좌석·발권 정보 확보 (직후)</strong> — 본인·가해자 좌석 발권 정보·동선을 확보.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112·철도경찰에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">KTX 옆좌석 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>열차편·일시·좌석 번호·접촉 정황 메모</strong></li>\n<li><strong>본인·가해자 좌석 발권·승차권 정보 (특정)</strong></li>\n<li><strong>객실·통로 CCTV 보존 요청 자료</strong></li>\n<li><strong>승무원·철도경찰 신고·접수 기록</strong></li>\n<li><strong>가해자 인상착의·하차역·동선 기록</strong></li>\n<li><strong>직후 호소·동행자·지인 연락 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 열차 객실 CCTV는 보존 기간이 짧으므로 승무원·철도경찰에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 좌석 발권 정보를 남기면 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>상당성 일탈</strong> — 좌석상 불가피한 접촉의 상당 범위를 벗어났는지.</li>\n<li><strong>우연·고의</strong> — 흔들려 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — 좌석 발권·CCTV·승무원 확인으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·승무원 신고·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·철도경찰 (현장 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당성 일탈 판단',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 그 해당 여부는 관계·경위·행위태양·주위 상황 등을 종합해 판단하고, 공동체 내 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 신체접촉은 추행으로 보지 않으나, 그 상당한 범주를 다소 벗어나더라도 성적 자유를 침해하는 정도에 이른 유형력 행사이면 강제추행에 해당할 수 있다고 판시했습니다. 좁은 좌석에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성·상당성 일탈 기준을 검토해볼 수 있습니다.',
        takeaway: '좌석 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합 시 추행 해당성·상당성 일탈 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '좌석이 붙어 있어 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>좌석상 불가피한 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>좁은 좌석의 위축 상황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '자는 척하며 기대 온 것도 추행인가요?',
        answer:
          '<strong>의례적·상당한 범위를 넘은 의사에 반한 밀착·접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 밀착 양상과 반복을 기록하세요.',
      },
      {
        question: '하차한 가해자를 특정할 수 있나요?',
        answer:
          '<strong>좌석 발권·객실 CCTV·승무원 확인으로 특정할 여지가 있는 영역입니다.</strong> 열차편·좌석·하차역을 즉시 기록하세요.',
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
      { label: '모임 신체접촉 강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-social-gathering-contact-false-report-defense' },
      { label: '지하철 에스컬레이터 추행 신고', href: '/guide/sex-crime/sex-crime-subway-escalator-touch-report-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '사진 촬영 자세 지도 접촉 오해 추행 무고 방어', href: '/guide/sex-crime/sex-crime-photo-studio-posing-contact-misunderstanding-falsely-accused-defense' },
    ],
  },

  // ─── 8. sex-crime-jjimjilbang-sauna-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-jjimjilbang-sauna-track',
    keyword: '찜질방 사우나 강제추행',
    questionKeyword: '찜질방·사우나·목욕탕 수면실·공용공간에서 옆에 있던 사람이 자는 척하거나 지나가는 척하며 갑자기 제 몸을 만지거나 쓰다듬어 큰 수치심을 느꼈어요. 어두운 수면실이라 누가 그랬는지 헷갈리고 옷을 갖춰 입지 못한 공간이라 그 자리에서 바로 따지지도 못했는데, 이런 찜질방·사우나 공용공간에서의 기습추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '찜질방 사우나 기습추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '찜질방 사우나 강제추행 — 5단계 기습추행 점검 | 로앤가이드',
      description:
        '찜질방·사우나 공용공간에서 누군가 갑자기 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 기습추행·폭행 정도를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「찜질방·사우나·목욕탕의 수면실·찜질칸·공용 휴게공간에서 쉬거나 누워 있던 중, 옆에 있던 사람이 자는 척하거나 지나가는 척하며 갑자기 본인의 가슴·엉덩이·허벅지·다리를 만지거나 쓰다듬어 큰 수치심과 불쾌감을 느낀 분의 상황입니다. 어둑한 수면실이라 누가 그랬는지 헷갈리고, 찜질복 차림이거나 옷을 제대로 갖춰 입지 못한 공간이라는 위축감에, 순식간에 벌어진 일이라 그 자리에서 바로 붙잡거나 따지지 못한 채 자리를 피해, ‘착각이면 어쩌지, 증거도 없는데’ 싶어 막막하셨을 거예요. 편히 쉬려고 간 곳에서 이런 일을 겪어 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행죄에는 폭행행위 자체가 추행에 해당하는 이른바 기습추행도 포함되고, 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없으며, 추행의 고의로 의사에 반하는 유형력 행사에 착수했으나 추행에 이르지 못하면 강제추행미수도 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 공용공간 접촉 + 기습추행 + 우연·고의 다툼 결합은 ‘기습추행·폭행 정도’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 찜질방 사우나 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·장소·공간·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 갑작스러운 접촉이 기습추행에 해당하는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 입구·복도·휴게실 CCTV, 카운터·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 입장 기록·CCTV·신발장·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공용공간이라도 의사에 반한 갑작스러운 접촉은 기습추행이 될 수 있고, 이때 폭행은 의사를 억압할 정도가 아니어도 된다는 점이 분기점입니다. 접촉 부위·방식과 입구·복도 CCTV를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·장소·공간·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV·이용 기록 확보 (즉시)</strong> — 입구·복도·휴게실 CCTV, 카운터·신발장·입장 기록 보존 요청.</li>\n<li><strong>3단계 — 업소·직원 협조 (직후)</strong> — 찜질방·사우나 측에 영상·이용 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">찜질방 사우나 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·공간·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·동선·이탈 정황 기록</strong></li>\n<li><strong>입구·복도·휴게실 CCTV 보존 요청 자료</strong></li>\n<li><strong>카운터·신발장·입장 기록 (특정)</strong></li>\n<li><strong>직후 호소·동행자·지인 연락 기록</strong></li>\n<li><strong>다른 이용객·목격자·직원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수면실·찜질칸 내부는 CCTV가 없을 수 있으므로 입구·복도·신발장 CCTV와 입장 기록을 곧바로 보존 요청하는 것이 중요합니다. 접촉 부위·방식과 직후 호소를 기록하면 우연과 기습추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행인 기습추행에 해당하는지.</li>\n<li><strong>폭행 정도</strong> — 의사를 억압할 정도가 아니어도 성립하는지.</li>\n<li><strong>가해자 특정</strong> — 입장 기록·CCTV·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 폭행의 정도',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행으로 인정되는 이른바 기습추행도 포함되고 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없으며, 추행의 고의로 의사에 반하는 유형력 행사에 착수했으나 추행 결과에 이르지 못하면 강제추행미수가 성립한다고 판시했습니다. 공용공간에서 갑자기 신체를 만진 사안을 살펴볼 때에도 이러한 기습추행·폭행 정도 기준을 검토해볼 수 있습니다.',
        takeaway: '공용공간 접촉 + 기습추행 + 우연·고의 다툼 결합 시 기습추행·폭행 정도 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자다가 뒤척이다 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>의사에 반한 갑작스러운 쓰다듬·접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '강하게 저항하지 못했는데 불리한가요?',
        answer:
          '<strong>기습추행은 의사를 억압할 정도가 아니어도 성립할 수 있는 영역입니다.</strong> 의사에 반한 접촉 정황을 즉시 기록하세요.',
      },
      {
        question: '수면실이 어두워서 누군지 헷갈려요.',
        answer:
          '<strong>입구·복도 CCTV와 입장 기록으로 특정할 여지가 있는 영역입니다.</strong> 시간대·신발장·인상착의를 즉시 기록하세요.',
      },
      {
        question: '몸에 닿기만 하고 멈췄는데 처벌되나요?',
        answer:
          '<strong>의사에 반한 유형력 행사에 착수했으면 미수도 평가될 수 있는 영역입니다.</strong> 착수 정황과 직후 반응을 정리하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 신고 절차와 보호 제도, AI로 확인하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '지하철 혼잡 출근길 기습 추행', href: '/guide/sex-crime/sex-crime-subway-rush-hour-grope-report-track' },
      { label: '수영 강습 자세교정 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-lesson-posture-correction-touch-report-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '사진 촬영 빙자 추행', href: '/guide/sex-crime/sex-crime-photo-studio-track' },
    ],
  },

  // ─── 9. sex-crime-school-trip-escort-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-school-trip-escort-track',
    keyword: '수학여행 인솔 중 강제추행',
    questionKeyword: '수학여행·수련회·체험학습 인솔 과정에서 교사·인솔자·보조 인력이 ‘챙겨준다, 줄 세운다, 사진 찍어준다’는 명목으로 학생인 자녀의 어깨·허리·엉덩이 등을 만지거나 필요 이상으로 밀착해 자녀가 큰 수치심을 느꼈어요. 인솔이라는 명목 때문에 그 자리에서 항의도 못 했는데, 이런 수학여행 인솔 중 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '수학여행 인솔 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수학여행 인솔 중 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '수학여행 인솔자가 챙겨준다는 명목으로 학생 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·수치심 인식 불요를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「수학여행·수련회·체험학습·캠프 인솔 과정에서 교사·인솔자·보조 인력·안전요원이 ‘챙겨준다, 줄을 세운다, 사진을 찍어준다, 부축한다’는 명목으로 학생인 자녀의 어깨·허리·엉덩이·허벅지 등을 손으로 만지거나, 보조한다며 필요 이상으로 몸을 밀착해 자녀가 큰 수치심과 불쾌감을 느낀 상황을 알게 된 보호자의 상황입니다. 가르치고 인솔하는 사람과 학생이라는 관계, 단체 활동이라는 분위기, ‘원래 챙겨주는 거겠지’ 하는 혼란 때문에 자녀가 그 자리에서 제대로 거부하거나 항의하지 못한 채 여행을 마치고 돌아와 뒤늦게 털어놓아, 정상적인 인솔이었는지 추행이었는지 헷갈려 막막하셨을 거예요. 보호받아야 할 단체활동에서 벌어진 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하고, 19세 미만 아동·청소년 대상 추행은 아동·청소년의 성보호에 관한 법률로 더 무겁게 규율되는 영역입니다. 판례는 추행은 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 그 해당 여부는 관계·경위·행위태양·주위 상황 등을 종합해 판단하고, 추행에 해당하기 위해 피해자가 반드시 성적 수치심을 실제로 느껴야 하는 것은 아니라고 본 사례 흐름이 있는 영역입니다. 인솔 빙자 + 의사에 반한 접촉 + 우월·단체 관계 결합은 ‘추행 해당성·수치심 인식 불요’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 인솔자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수학여행 인솔 중 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·인솔자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일정·장소·인솔 명목·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 인솔의 상당한 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 숙소·버스·현장 CCTV, 단체사진·영상·메시지 보존 요청.</li>\n<li><strong>④ 인솔자 특정</strong> — 인솔 명단·CCTV·동행 학생 진술로 인솔자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·학교·교육청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인솔·돌봄을 빙자한 접촉이라도 상당한 범위를 넘어 성적 자유를 침해하면 추행으로 평가될 수 있고, 피해자가 그 자리에서 수치심을 느꼈는지 여부가 추행 성립의 절대 요건은 아니라는 점이 분기점입니다. 접촉 부위·방식·반복과 현장 CCTV·동행 진술을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일정·장소·인솔 명목·접촉 부위·방식·반복·동행자 정리.</li>\n<li><strong>2단계 — CCTV·기록 확보 (즉시)</strong> — 숙소·버스·현장 CCTV, 단체사진·영상·인솔 메시지 보존 요청.</li>\n<li><strong>3단계 — 학교·기관 협조 (직후)</strong> — 학교·교육청·여행 주관처에 사안·기록 보존과 협조를 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·진술·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 자녀 보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수학여행 인솔 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일정·장소·인솔 명목·접촉 정황 메모</strong></li>\n<li><strong>인솔 명단·담당자·직책 (인솔자 특정)</strong></li>\n<li><strong>숙소·버스·현장 CCTV 보존 요청 자료</strong></li>\n<li><strong>단체사진·영상·인솔 메시지 기록 (정황)</strong></li>\n<li><strong>자녀의 직후 호소·일관된 진술 기록</strong></li>\n<li><strong>동행 학생·교사·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터·학교·교육청 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단체활동 CCTV·사진은 빠르게 사라질 수 있으므로 학교·주관처에 곧바로 보존을 요청하는 것이 중요합니다. 자녀의 직후 호소와 동행 학생 진술, 접촉 부위·방식을 함께 남기면 인솔의 상당성을 넘었는지 판단하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 인솔의 상당한 범위를 넘은 접촉이 추행인지.</li>\n<li><strong>수치심 인식</strong> — 피해자가 그때 수치심을 느꼈는지가 절대 요건은 아닌지.</li>\n<li><strong>인솔·상당성</strong> — 돌봄·인솔의 상당 범위를 벗어난 접촉인지.</li>\n<li><strong>인솔자 특정</strong> — 인솔 명단·CCTV·진술로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·사진·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (아동·청소년 성폭력 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 판단 기준과 수치심 인식 불요',
        summary:
          '대법원 2021도7538(대법원, 2021.10.28 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 그 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위·태양, 주위 상황 등을 종합해 판단하고, 추행에 해당하기 위해 피해자가 반드시 성적 수치심을 실제로 느껴야 하는 것은 아니라고 판시했습니다. 인솔·돌봄을 빙자한 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 추행 해당성·수치심 인식 불요 기준을 검토해볼 수 있습니다.',
        takeaway: '인솔 빙자 + 의사에 반한 접촉 + 우월·단체 관계 결합 시 추행 해당성·수치심 인식 불요 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '챙겨주다 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>인솔·돌봄의 상당한 범위를 넘은 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '아이가 그때는 가만히 있었는데 불리한가요?',
        answer:
          '<strong>피해자가 그 자리에서 수치심을 느꼈는지가 추행 성립의 절대 요건은 아닌 영역입니다.</strong> 객관적 행위태양과 직후 호소를 정리하세요.',
      },
      {
        question: '단둘이 아니라 단체 속이라 증거가 없어요.',
        answer:
          '<strong>현장 CCTV·단체사진·동행 학생 진술로 보강할 수 있는 영역입니다.</strong> 학교·주관처에 보존을 요청하세요.',
      },
      {
        question: '학교에 먼저 알려야 하나요?',
        answer:
          '<strong>학교·교육청 신고와 형사 신고를 함께 검토할 수 있는 영역입니다.</strong> 사안·기록 보존을 먼저 요청하세요.',
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
      { label: '수영장 강습 지도 중 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-lesson-guidance-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '물리치료실 치료 빙자 신체접촉 추행', href: '/guide/sex-crime/sex-crime-physical-therapy-clinic-treatment-track' },
    ],
  },

  // ─── 10. sex-crime-company-dinner-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-falsely-accused-defense',
    keyword: '회식 후 동료 강제추행 무고',
    questionKeyword: '회사 회식·송년회에서 술을 마시고 2차·이동·택시 대기 과정에서 동료와 어깨동무·부축·인사 같은 접촉이 있었는데, 며칠 뒤 동료가 저를 회식 자리에서의 강제추행으로 고소·신고했어요. 저는 추행할 의도가 전혀 없었고 취중 자연스러운 분위기였다고 기억하는데, 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어하나요?',
    ctaKeyword: '회식 후 동료 강제추행 무고 진술 신빙성·무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 후 강제추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '회식 후 동료와의 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 해당성과 진술 신빙성·무죄추정 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식·송년회·환영회에서 다 같이 술을 마시고 2차로 이동하거나, 술자리 정리·택시 대기·귀가 과정에서 동료와 어깨동무·부축·악수·인사 같은 접촉이 오갔는데, 며칠 뒤 그 동료·후배가 ‘회식 자리에서 강제로 추행을 당했다’며 고소·신고하거나 회사에 진정해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고 취기 오른 회식 분위기 속 자연스러운 상황이었다고 기억하는데, 술자리라 기억이 일부 흐릿하고 목격자 진술이 엇갈리며 직접 증거가 상대 진술 위주여서 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 직장 내 소문과 징계·인사상 불이익까지 겹쳐 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉이 추행에 해당하는지, 그리고 피해 진술의 신빙성이 합리적 의심 없이 인정되는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고 유죄 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 진술 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 신빙성이 있어야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 회식 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 해당성·진술 신빙성’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 후 동료 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식 일정·자리·이동·접촉 경위·참석자 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술의 일관성·구체성·객관 사실 부합 여부 검토.</li>\n<li><strong>④ 정황·증거</strong> — 매장·이동 CCTV·단체대화·좌석·동선으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 원칙 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉이 추행에 해당하는지와 피해 진술이 합리적 의심 없이 신빙성을 갖는지가 분기점입니다. 회식 동선·CCTV·단체대화로 정황과 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 정리 (즉시)</strong> — 회식 일정·자리·이동·접촉 경위·참석자 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 매장·이동 CCTV·단체대화·결제·일정 기록을 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 상대 진술과 객관 정황·참석자 진술의 불부합·모순을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 후 동료 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일정·자리·이동·접촉 경위 메모</strong></li>\n<li><strong>회식 단체대화·이후 메시지·SNS 기록</strong></li>\n<li><strong>매장·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·예약·콜택시·일정 객관 자료 (정황 특정)</strong></li>\n<li><strong>함께한 참석자·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉이 추행에 해당하는지’와 ‘피해 진술이 합리적 의심 없이 신빙성을 갖는지’입니다. 회식 동선·CCTV·단체대화와 참석자 진술 같은 객관 정황을 정돈해 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심을 배제할 정도의 증명이 있는지.</li>\n<li><strong>허위 동기</strong> — 허위로 불리한 진술을 할 동기·이유가 있는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정 원칙과 피해 진술의 신빙성',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고 유죄 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 통상 추행이 이루어질 것으로 예상하기 어려운 상황에서 피해자나 밀접한 관계인의 진술이 유일한 증거인 경우 그 진술이 진술 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 신빙성이 있고 피고인의 무죄 주장을 배척하기에 충분해야 유죄로 판단할 수 있다고 판시했습니다. 회식 자리 접촉을 추행으로 다투는 사안에서 진술 신빙성과 무죄추정·증명 정도를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '회식 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 해당성·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '취중 자연스러운 분위기였는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 해당성과 진술 신빙성이 핵심인 영역입니다.</strong> 회식 동선·자리·접촉 경위를 정리하세요.',
      },
      {
        question: '상대 진술만 있는데도 처벌되나요?',
        answer:
          '<strong>진술 신빙성을 종합해 합리적 의심 없는 증명에 이르러야 하는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 정리하세요.',
      },
      {
        question: '회식이라 목격자 진술이 엇갈려요.',
        answer:
          '<strong>매장·이동 CCTV·단체대화·참석자 진술 같은 객관 정황으로 보강할 수 있는 영역입니다.</strong> 회식 전후 기록을 확보하세요.',
      },
      {
        question: '술자리라 기억이 흐릿해요.',
        answer:
          '<strong>결제·콜택시·일정·동선 등 객관 자료로 보강할 수 있는 영역입니다.</strong> 시간대별 회식 기록을 정돈하세요.',
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
      { label: '호프집 종업원 추행 무고 방어', href: '/guide/sex-crime/sex-crime-pub-server-customer-accusation-falsely-accused-defense' },
      { label: '화상과외 음란행위 노출', href: '/guide/sex-crime/sex-crime-online-video-tutoring-indecent-exposure-track' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
    ],
  },
];
