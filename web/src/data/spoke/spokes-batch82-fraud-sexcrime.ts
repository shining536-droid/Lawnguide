import { SpokePage } from '../spoke-pages';

// batch82 fraud(6) + sex-crime(4) — 10개 (2026-05-30)
//
// 고유 존재 이유:
// 1. fraud-used-car-mileage-tampering-sale-track — 일반 중고거래 사기류와 분기. 여기는 '중고차 주행거리(계기판) 조작·사고이력 은폐 후 판매에 기망의 고의가 인정되는지' 판단형 트랙(victim). 계기판 조작 입증·매매계약 취소·형사 고소 결합.
// 2. fraud-pet-shop-sick-puppy-disease-concealment-track — 일반 물품하자 분쟁류와 분기. 여기는 '펫샵이 질병(파보·홍역 등) 있는 분양동물을 건강하다고 속여 판매한 경우 기망·업무방해 평가' 판단형 트랙(victim). 동물보호법·소비자분쟁해결기준 결합.
// 3. fraud-wedding-hall-prepayment-sudden-closure-track — 일반 선납 폐업류와 분기. 여기는 '예식장이 예약금·식대를 선납받고 폐업·잠적해 환급 불가가 된 경우 피해구제·고소 절차' 절차형 트랙(victim). 소비자원 피해구제·집단 고소 결합.
// 4. fraud-job-offer-security-deposit-upfront-scam-track — 일반 취업사기류와 분기. 여기는 '허위 채용공고로 보증금·교육비를 선입금받고 잠적한 경우 신고·환급 절차' 절차형 트랙(victim). 채용절차법·전기통신금융사기 환급 결합.
// 5. fraud-crypto-exchange-withdrawal-block-exit-track — 일반 투자사기류와 분기. 여기는 '거래소가 출금을 막거나 출금 수수료·세금 명목 추가 입금을 요구하며 출금을 차단(출구사기)한 경우' 판단형 트랙(victim). 권리행사 기망·지급정지 결합.
// 6. fraud-private-loan-double-collateral-falsely-accused-defense — 일반 사기 무고류와 분기. 여기는 '개인 간 금전대차에서 이중담보·중복양도 의혹으로 사기로 고소당했으나 변제의사·담보 권한이 있었다는 방어' 판단형 트랙(accused). 기망 고의·편취 의사 부재 방어.
// 7. sex-crime-gym-personal-trainer-inappropriate-contact-track — 일반 강제추행류와 분기. 여기는 '헬스장 PT 트레이너가 자세교정을 명목으로 한 신체접촉이 추행에 해당하는지' 판단형 트랙(victim). 추행 의미·범의 입증 기준 결합.
// 8. sex-crime-club-dancefloor-stranger-groping-track — 일반 공중밀집 추행류와 분기. 여기는 '클럽 댄스플로어에서 모르는 사람이 밀착·신체접촉을 한 경우 추행·성적 자기결정권 침해 평가' 판단형 트랙(victim). 항거곤란·즉시 신고 증거 결합.
// 9. sex-crime-hospital-treatment-doctor-inappropriate-act-track — 일반 의료 분쟁류와 분기. 여기는 '진료·검사 과정에서 의료인의 신체접촉이 진료 필요 범위를 넘은 추행에 해당하는지' 판단형 트랙(victim). 진료 명목·추행 고의 간접사실 결합.
// 10. sex-crime-company-dinner-intoxicated-misunderstanding-falsely-accused-defense — 일반 성범죄 무고류와 분기. 여기는 '회식 후 음주 만취 상태의 접촉을 두고 강제추행 등으로 고소당했으나 고의·강제성을 다투는 방어' 판단형 트랙(accused). 추행 범의 부족·합리적 의심 방어.

export const spokesBatch82FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-mileage-tampering-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-mileage-tampering-sale-track',
    keyword: '중고차 주행거리 조작 사고이력 은폐 사기',
    questionKeyword: '중고차를 샀는데 계기판 주행거리가 조작됐고 무사고라더니 큰 사고이력이 있었어요. 판매자가 일부러 속인 것 같은데, 계약을 무르고 사기로 고소할 수 있을까요?',
    ctaKeyword: '중고차 계기판 조작·사고이력 은폐 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 사기 — 5단계 기망·취소 점검 | 로앤가이드',
      description:
        '중고차 계기판 조작과 사고이력 은폐로 속아 샀다면 기망 고의·매매 취소·형사 고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「분명 \'무사고에 주행거리 5만km\'라고 들었는데, 정비소에 맡겨보니 계기판이 조작됐고 큰 사고이력까지 있었던 중고차를 산 분의 상황입니다. 알고 보니 실제 주행거리는 두 배가 넘었고, 골격까지 수리한 사고차였다는 사실을 뒤늦게 알게 됐어요. 큰돈을 들여 산 차인데 어디서부터 풀어야 할지 막막한 상황이실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고, 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 자동차관리법은 매매업자에게 주행거리·사고이력 등 성능·상태점검 내용을 사실대로 고지하도록 정하고 있어, 핵심 정보를 거짓으로 알린 정황은 기망행위로 평가될 여지가 있습니다. 판례는 기망행위에 의한 거래에서 행위자에게 편취의 고의가 있었는지를 거래 경위·표시 내용 등 객관적 사정으로 판단해온 사례 흐름이 있는 영역입니다. 계기판 조작 + 사고이력 은폐 + 사전 허위 고지 결합은 \'기망 고의·매매 취소·형사 고소\' 다툼이 가능한 트랙입니다. 피해자라면 ① 조작·은폐 입증 ② 기망 고의 ③ 매매 취소·손해 ④ 형사 고소 ⑤ 환급·합의 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 조작·사고이력 은폐 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조작·은폐 입증·기망 고의·매매 취소·형사 고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 조작·은폐 입증</strong> — 계기판 실제 주행거리(정비이력·검사기록)와 표시 거리 차이, 사고이력 자료 확보.</li>\n<li><strong>② 기망 고의</strong> — 판매자가 사실을 알면서도 거짓으로 고지·은폐했는지의 정황 정리.</li>\n<li><strong>③ 매매 취소·손해배상</strong> — 기망에 의한 의사표시 취소·계약 해제, 손해배상 청구 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기·자동차관리법 위반 고소 검토.</li>\n<li><strong>⑤ 환급·합의</strong> — 매매대금 반환·차액 합의 또는 분쟁조정 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주행거리·사고이력 같은 핵심 정보를 사실과 다르게 고지·은폐한 정황과, 판매자가 그 사실을 알고 있었다는 정황(기망 고의)이 함께 정리되면 사기 다툼과 매매 취소를 함께 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량 상태·표시 자료 보존 (즉시)</strong> — 매매계약서·성능점검기록부·광고·대화 캡처 보존.</li>\n<li><strong>2단계 — 실제 이력 확인 (1주)</strong> — 자동차이력조회·보험사고이력·정비이력으로 실제 주행거리·사고이력 확인.</li>\n<li><strong>3단계 — 내용증명·취소 통지 (2주)</strong> — 기망에 의한 계약 취소·대금 반환 요구 통지.</li>\n<li><strong>4단계 — 형사 고소·소비자 피해구제 (병행)</strong> — 경찰 사기 고소 + 소비자원 피해구제 신청 검토.</li>\n<li><strong>5단계 — 분쟁조정·민사 청구 (합의 불발 시)</strong> — 소비자분쟁조정 또는 손해배상 민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 계기판 조작·사고이력 은폐 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 조작·은폐 입증·기망 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서·매도확인서 (거래 내용)</strong></li>\n<li><strong>중고차 성능·상태점검기록부 (고지 내용)</strong></li>\n<li><strong>광고·매물 화면·판매자 대화 캡처 (허위 표시 정황)</strong></li>\n<li><strong>자동차 이력조회·보험사고이력 (실제 사고이력)</strong></li>\n<li><strong>정비이력·계기판 점검 자료 (실제 주행거리)</strong></li>\n<li><strong>입금·결제 내역 (피해 금액)</strong></li>\n<li><strong>차량 인수 후 발견 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 표시된 주행거리·무사고 고지와 실제 이력의 차이가 핵심 자료입니다. 자동차이력조회·보험사고이력·정비기록을 함께 모으면 \'사실을 알면서도 거짓 고지했다\'는 기망 고의 정황을 정리하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 판매자가 조작·사고이력을 알고도 거짓 고지했는지.</li>\n<li><strong>고지의무 범위</strong> — 성능점검·고지 의무가 미친 항목인지.</li>\n<li><strong>인과관계</strong> — 거짓 고지가 구매 결정에 영향을 미쳤는지.</li>\n<li><strong>취소·해제 선택</strong> — 기망 취소·계약 해제·손해배상 중 어떤 구제를 택할지.</li>\n<li><strong>증거 시점</strong> — 인수 직후 점검·증거 확보 시점이 분쟁에서 중요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (소비자상담·피해구제)</strong></li>\n<li><strong>금융감독원 1332 (결제·금융 분쟁)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정한 수단·기교 사용과 거래 신뢰 침해 판단',
        summary:
          '대법원 2024도11686(대법원, 2026.01.15 선고) 영역에서 법원은 거래 관련 \'부정한 수단, 계획 또는 기교\'란 사회통념상 부정하다고 인정되는 일체의 수단을 말하고, 어떤 행위가 부정한지는 그 행위가 법령 등에서 금지된 것인지, 다른 거래 상대방으로 하여금 잘못된 판단을 하게 함으로써 공정한 거래를 해치고 선의의 상대방에게 손해를 전가하여 거래의 공정성·신뢰성을 해칠 위험이 있는지를 고려해 판단해야 한다고 판시했습니다. 중고차 주행거리·사고이력을 거짓으로 고지한 행위가 거래 상대방의 판단을 그르치게 했는지를 살펴볼 때에도 이러한 기준을 살펴볼 수 있습니다.',
        takeaway: '계기판 조작 + 사고이력 은폐 + 사전 허위 고지 결합 시 기망 고의·매매 취소 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '주행거리만 다르고 사고는 없으면 사기가 안 되나요?',
        answer:
          '<strong>주행거리 조작도 거래 결정에 영향을 준 핵심 정보의 거짓 고지로 평가될 수 있는 영역입니다.</strong> 실제 거리 입증 자료를 확보.',
      },
      {
        question: '성능점검기록부에 적힌 대로면 판매자 책임이 없나요?',
        answer:
          '<strong>기록부 자체가 사실과 다르게 작성·고지된 정황이 있으면 함께 다툼 대상이 되는 영역입니다.</strong> 실제 이력과 대조해 정리.',
      },
      {
        question: '계약을 무를 수 있나요?',
        answer:
          '<strong>기망에 의한 의사표시 취소·계약 해제·손해배상을 함께 검토할 수 있는 영역입니다.</strong> 어떤 구제가 유리한지 상담을 검토.',
      },
      {
        question: '형사 고소와 환급을 같이 진행할 수 있나요?',
        answer:
          '<strong>형사 고소와 소비자 피해구제·민사 청구는 병행해볼 수 있는 영역입니다.</strong> 두 절차의 자료를 함께 준비.',
      },
      {
        question: '증거는 무엇부터 모아야 하나요?',
        answer:
          '<strong>매매계약서·성능점검기록부·광고·자동차이력조회를 우선 확보하는 것이 핵심인 영역입니다.</strong> 인수 직후 점검 기록을 남기세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-secondhand-deal-response-track' },
      { label: '계약 취소·손해배상', href: '/guide/fraud/fraud-contract-cancel-damages-track' },
      { label: '소비자 피해구제 신청', href: '/guide/fraud/fraud-consumer-relief-application' },
      { label: '사기 합의와 형량', href: '/guide/fraud/fraud-settlement-sentencing-effect' },
    ],
  },

  // ─── 2. fraud-pet-shop-sick-puppy-disease-concealment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-shop-sick-puppy-disease-concealment-track',
    keyword: '펫샵 아픈 강아지 질병 은폐 분양 사기',
    questionKeyword: '펫샵에서 건강하다고 해서 강아지를 분양받았는데 며칠 만에 파보·홍역 진단을 받았어요. 이미 아픈 걸 알고 속여 판 것 같은데, 환급이나 사기로 다툴 수 있나요?',
    ctaKeyword: '펫샵 질병 은폐 분양 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '펫샵 질병 은폐 분양 사기 — 5단계 기망·피해구제 점검 | 로앤가이드',
      description:
        '건강하다던 강아지가 며칠 만에 질병 진단을 받았다면 질병 은폐·기망 고의·피해구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「\'건강에 아무 문제 없다\'는 말만 믿고 강아지를 분양받았는데, 집에 온 지 며칠 만에 파보장염·홍역 같은 진단을 받은 분의 상황입니다. 병원비는 계속 늘어나고, 펫샵은 \'데려갈 때는 멀쩡했다\'며 책임을 미루고 있어요. 작은 생명을 살리려 애쓰면서 분쟁까지 떠안게 돼 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역이고, 동물보호법은 반려동물 영업자에게 일정한 고지·관리 의무를 두고 있습니다. 소비자분쟁해결기준은 분양 후 일정 기간 내 질병이 확인된 경우의 치료·교환·환급 기준을 안내하는 영역입니다. 판례는 사기죄 성립에 일반적·전형적으로 위계에 의한 업무방해가 수반되는 것은 아니라고 보면서 기망행위의 독자적 평가 기준을 제시해온 사례 흐름이 있습니다. 분양 직후 발병 + 사전 \'건강\' 고지 + 책임 회피 결합은 \'질병 은폐·기망 고의·피해구제\' 다툼이 가능한 트랙입니다. 피해자라면 ① 발병 시점 입증 ② 기망 고의 ③ 교환·환급 ④ 형사·민사 ⑤ 분쟁조정 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 펫샵 질병 은폐 분양 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발병 시점·기망 고의·교환·환급·구제·조정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발병 시점 입증</strong> — 분양일과 진단일 간격, 잠복기 등 분양 전 감염 가능성 자료 확보.</li>\n<li><strong>② 기망 고의</strong> — 펫샵이 질병을 알면서도 \'건강\'하다고 고지·은폐했는지 정황 정리.</li>\n<li><strong>③ 교환·환급·치료비</strong> — 소비자분쟁해결기준상 교환·환급·치료비 부담 기준 확인.</li>\n<li><strong>④ 형사·민사</strong> — 사기 고소·손해배상 청구 검토.</li>\n<li><strong>⑤ 분쟁조정</strong> — 소비자원 피해구제·분쟁조정 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분양 직후 발병한 질병의 잠복기·진단 시점과, 펫샵이 질병을 알면서 건강하다고 고지했다는 정황이 함께 정리되면 기망 다툼과 소비자 구제를 함께 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 한국소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·분양 자료 보존 (즉시)</strong> — 분양계약서·동물병원 진단서·진료비 영수증 보존.</li>\n<li><strong>2단계 — 발병 시점·잠복기 정리 (1주)</strong> — 수의사 소견으로 분양 전 감염 가능성·잠복기 정리.</li>\n<li><strong>3단계 — 내용증명·환급 요구 (2주)</strong> — 소비자분쟁해결기준 근거 교환·환급·치료비 요구 통지.</li>\n<li><strong>4단계 — 피해구제·형사 고소 (병행)</strong> — 소비자원 피해구제 신청 + 사기 고소 검토.</li>\n<li><strong>5단계 — 분쟁조정·민사 청구 (합의 불발 시)</strong> — 소비자분쟁조정 또는 손해배상 민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">펫샵 질병 은폐 분양 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발병 시점·기망 고의·구제 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양계약서·건강 고지서 (고지 내용)</strong></li>\n<li><strong>동물병원 진단서·검사결과 (질병·발병 시점)</strong></li>\n<li><strong>진료비·약값 영수증 (피해 금액)</strong></li>\n<li><strong>수의사 잠복기·감염시점 소견 자료</strong></li>\n<li><strong>펫샵 광고·대화·\'건강\' 고지 캡처</strong></li>\n<li><strong>입금·결제 내역 (분양비)</strong></li>\n<li><strong>분양 직후 상태 사진·영상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'분양 전에 이미 감염돼 있었는지\'와 \'펫샵이 이를 알았는지\'입니다. 진단서에 발병 시점·잠복기 소견을 받아두고, 분양 당시 건강 고지·광고 내용을 캡처해두면 기망 고의 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>발병 시점</strong> — 분양 전 감염인지, 분양 후 환경 요인인지.</li>\n<li><strong>기망 고의</strong> — 펫샵이 질병을 알고도 건강하다고 고지했는지.</li>\n<li><strong>고지의무</strong> — 동물보호법·계약상 고지·관리 의무 범위.</li>\n<li><strong>구제 기준</strong> — 소비자분쟁해결기준상 교환·환급·치료비 부담 범위.</li>\n<li><strong>증거 시점</strong> — 분양 직후 진단·증거 확보 시점이 중요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372 (소비자상담·피해구제)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (결제·금융 분쟁)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄와 위계에 의한 업무방해의 독자적 평가',
        summary:
          '대법원 2024도18174(대법원, 2025.09.25 선고) 영역에서 법원은 사기죄와 위계에 의한 업무방해죄는 구성요건과 보호법익을 달리하고, 사기죄의 성립에 일반적·전형적으로 위계에 의한 업무방해행위가 수반되는 것은 아니어서 일련의 위계행위가 사기 범행과 별도로 새로운 법익을 침해한 경우 별개의 범죄를 구성한다고 판시했습니다. 펫샵이 질병을 숨긴 채 건강하다고 속여 분양한 행위의 기망성을 평가할 때에도, 그 기망행위가 독자적으로 어떤 법익을 침해했는지를 살펴볼 수 있습니다.',
        takeaway: '분양 직후 발병 + 사전 건강 고지 + 책임 회피 결합 시 기망 고의·피해구제 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '데려온 뒤 아픈데 분양 전 감염인지 어떻게 가리나요?',
        answer:
          '<strong>질병의 잠복기·진단 시점에 대한 수의사 소견이 핵심 자료가 되는 영역입니다.</strong> 진단서에 발병 시점 소견을 받아두세요.',
      },
      {
        question: '건강하다고 들었는데 계약서엔 다른 말이 있어요.',
        answer:
          '<strong>구두 고지·광고와 계약서 내용이 다르면 함께 다툼 대상이 되는 영역입니다.</strong> 대화·광고 캡처를 확보.',
      },
      {
        question: '치료비도 받을 수 있나요?',
        answer:
          '<strong>소비자분쟁해결기준상 교환·환급과 함께 치료비 부담이 검토될 수 있는 영역입니다.</strong> 영수증을 모아 정리.',
      },
      {
        question: '사기 고소까지 가능한가요?',
        answer:
          '<strong>질병을 알면서 은폐한 기망 고의 정황이 정리되면 사기 고소를 검토할 수 있는 영역입니다.</strong> 발병 시점·고지 자료를 함께 준비.',
      },
      {
        question: '어디에 먼저 도움을 요청하나요?',
        answer:
          '<strong>한국소비자원 1372 상담·피해구제를 먼저 검토해볼 수 있는 영역입니다.</strong> 진단서·계약서를 준비해 상담하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '물품 하자 환급 대응', href: '/guide/fraud/fraud-defective-goods-refund-track' },
      { label: '소비자 피해구제 신청', href: '/guide/fraud/fraud-consumer-relief-application' },
      { label: '계약 취소·손해배상', href: '/guide/fraud/fraud-contract-cancel-damages-track' },
      { label: '분쟁조정 신청 절차', href: '/guide/fraud/fraud-dispute-mediation-procedure' },
    ],
  },

  // ─── 3. fraud-wedding-hall-prepayment-sudden-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-prepayment-sudden-closure-track',
    keyword: '예식장 예약금 선납 폐업 환급 피해구제',
    questionKeyword: '예식장에 예약금과 식대를 선납했는데 갑자기 폐업하고 연락이 끊겼어요. 결혼식은 코앞인데 돈도 못 돌려받을 것 같아요. 환급받고 책임을 물을 방법이 있을까요?',
    ctaKeyword: '예식장 선납 폐업 환급·피해구제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '예식장 선납 폐업 환급 — 5단계 피해구제·고소 점검 | 로앤가이드',
      description:
        '예식장에 선납한 예약금·식대를 폐업으로 못 돌려받게 됐다면 피해구제·집단 고소·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「설레는 마음으로 예식장에 예약금과 식대 일부를 선납했는데, 결혼식을 앞두고 갑자기 폐업하고 연락이 끊긴 분의 상황입니다. 같은 피해를 본 예비부부가 한둘이 아니라는 소문도 들리고, 환급은커녕 대표와 통화조차 안 되는 상황이에요. 인생에서 가장 중요한 날을 앞두고 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고, 처음부터 영업을 정상 진행할 의사·능력 없이 선납금을 받은 정황은 기망행위로 평가될 여지가 있는 영역입니다. 할부거래법·소비자분쟁해결기준은 예식 서비스 계약 해제·환급 기준을 안내하고, 선납금을 신용카드 할부로 결제한 경우 항변권(철회·항변)을 검토할 수 있는 영역입니다. 폐업·잠적 + 다수 피해 + 선납금 미환급 결합은 \'피해구제·집단 고소·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 폐업 시점·고의 ③ 피해구제·항변권 ④ 형사 고소 ⑤ 분쟁조정·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 선납 폐업 환급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·결제·폐업 고의·피해구제·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 계약서·선납 금액·결제 수단(현금·카드 할부) 정리.</li>\n<li><strong>② 폐업 시점·고의</strong> — 선납금 수령 시점에 정상 영업 의사·능력이 있었는지 정황 정리.</li>\n<li><strong>③ 피해구제·항변권</strong> — 카드 할부 결제 시 항변권·소비자원 피해구제 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소(다수 피해 시 공동 고소) 검토.</li>\n<li><strong>⑤ 분쟁조정·민사</strong> — 소비자분쟁조정·손해배상 민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 선납금을 받을 당시 정상적으로 예식을 진행할 의사·능력이 있었는지(기망 고의)와 결제 수단(카드 할부 여부)이 환급 경로를 가르는 핵심입니다. 다수 피해가 확인되면 공동 고소·집단 대응도 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 한국소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 계약서·선납 영수증·카드 결제내역·폐업 안내 보존.</li>\n<li><strong>2단계 — 카드사 항변권 신청 (인지 즉시)</strong> — 할부 결제분은 카드사에 항변권(할부항변) 신청 검토.</li>\n<li><strong>3단계 — 소비자원 피해구제 신청 (1~2주)</strong> — 한국소비자원 1372 피해구제 신청.</li>\n<li><strong>4단계 — 형사 고소·공동 대응 (병행)</strong> — 경찰 사기 고소, 동일 피해자 공동 고소 검토.</li>\n<li><strong>5단계 — 분쟁조정·민사 청구 (합의 불발 시)</strong> — 소비자분쟁조정·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 선납 폐업 환급·피해구제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·결제·폐업 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>예식 서비스 계약서 (선납·환급 조항)</strong></li>\n<li><strong>선납 영수증·입금 내역 (피해 금액)</strong></li>\n<li><strong>카드 할부 결제내역 (항변권 대상)</strong></li>\n<li><strong>폐업·잠적 정황 자료 (안내문·통화기록)</strong></li>\n<li><strong>업체 광고·예약 안내 캡처</strong></li>\n<li><strong>동일 피해자 연락·피해 사례 정리</strong></li>\n<li><strong>예식 일정·진행 무산 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카드 할부로 결제한 선납금은 카드사 항변권(할부항변)으로 잔여 할부금 지급을 다툴 수 있는 경우가 있어, 결제 수단별로 환급 경로가 달라집니다. 결제내역·계약서를 먼저 정리해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 선납금 수령 시 정상 영업 의사·능력이 있었는지.</li>\n<li><strong>결제 수단</strong> — 현금·계좌이체·카드 할부에 따라 환급 경로가 다름.</li>\n<li><strong>항변권 요건</strong> — 할부 금액·잔여 할부금 등 항변권 행사 요건.</li>\n<li><strong>공동 대응</strong> — 다수 피해 시 공동 고소·집단 피해구제 가능성.</li>\n<li><strong>채권 회수</strong> — 폐업 업체의 잔여 재산·책임 재산 확인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372 (소비자상담·피해구제)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (카드 할부항변·결제 분쟁)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 반복 재산범행의 포괄일죄와 죄수 판단 기준',
        summary:
          '대법원 2022다255454(대법원, 2026.01.29 선고) 영역에서 법원은 기업 내부에 존재하는 특정 관행이 계약의 내용을 이루고 있다고 인정하려면 그것이 일반적으로 규율하는 규범적 사실로 명확히 승인되거나 당연한 것으로 받아들여져 사실상의 제도로 확립돼 있어야 하고, 어떤 금품이 특정 성과를 전제로 분배되는 성격이라면 그 본래 성격에 따라 평가해야 한다고 판시했습니다. 예식장이 선납금을 받으면서 약정한 서비스를 이행할 의사·능력이 있었는지, 받은 금원의 성격이 무엇인지를 살펴볼 때에도 그 실질을 따져보는 관점을 살펴볼 수 있습니다.',
        takeaway: '폐업·잠적 + 다수 피해 + 선납금 미환급 결합 시 피해구제·집단 고소 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '카드로 결제했는데 환급 방법이 다른가요?',
        answer:
          '<strong>할부 결제분은 카드사 항변권으로 잔여 할부금 지급을 다툴 수 있는 경우가 있는 영역입니다.</strong> 결제내역을 먼저 확인하세요.',
      },
      {
        question: '폐업했는데 사기로 고소가 되나요?',
        answer:
          '<strong>선납금 수령 시점에 정상 영업 의사·능력이 없었던 정황이 정리되면 사기 고소를 검토할 수 있는 영역입니다.</strong> 폐업 시점 자료를 확보.',
      },
      {
        question: '다른 피해자와 함께 대응하는 게 나은가요?',
        answer:
          '<strong>다수 피해가 확인되면 공동 고소·집단 피해구제로 대응을 검토해볼 수 있는 영역입니다.</strong> 피해 사례를 모아 정리.',
      },
      {
        question: '소비자원과 경찰 중 어디부터 가나요?',
        answer:
          '<strong>피해구제와 형사 고소는 병행해볼 수 있는 영역입니다.</strong> 자료를 갖춰 동시에 진행을 검토하세요.',
      },
      {
        question: '돈을 실제로 돌려받을 수 있을까요?',
        answer:
          '<strong>업체의 잔여 재산·책임 재산에 따라 회수 가능성이 달라지는 영역입니다.</strong> 채권 보전 조치를 함께 상담하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '선납·폐업 환급 대응', href: '/guide/fraud/fraud-prepayment-closure-refund-track' },
      { label: '카드 할부항변 활용', href: '/guide/fraud/fraud-installment-defense-track' },
      { label: '소비자 피해구제 신청', href: '/guide/fraud/fraud-consumer-relief-application' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
    ],
  },

  // ─── 4. fraud-job-offer-security-deposit-upfront-scam-track ───
  {
    domain: 'fraud',
    slug: 'fraud-job-offer-security-deposit-upfront-scam-track',
    keyword: '취업 보증금 교육비 선입금 채용사기 환급',
    questionKeyword: '채용됐다며 보증금과 교육비를 먼저 입금하라고 해서 보냈는데, 그 뒤로 연락이 끊겼어요. 일자리는 처음부터 없었던 것 같은데, 신고하고 돈을 돌려받을 수 있을까요?',
    ctaKeyword: '취업 보증금·교육비 선입금 신고·환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '채용 보증금 선입금 사기 — 5단계 신고·환급 점검 | 로앤가이드',
      description:
        '취업 보증금·교육비를 먼저 보냈는데 연락이 끊겼다면 채용사기 신고·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「\'합격했으니 보증금과 교육비를 먼저 입금하면 출근할 수 있다\'는 말을 믿고 돈을 보낸 뒤, 그날부터 연락이 끊긴 분의 상황입니다. 알고 보니 채용공고 자체가 허위였고, 같은 수법에 당한 사람이 여럿이라는 사실까지 알게 됐어요. 어렵게 모은 돈을 잃고 일자리도 없어져 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고, 처음부터 채용 의사 없이 보증금·교육비 명목으로 금원을 받은 정황은 기망행위로 평가될 여지가 있는 영역입니다. 채용절차의 공정화에 관한 법률은 구인자가 채용을 빌미로 금전 등을 요구하지 못하도록 정하고 있어 위반 정황을 함께 정리할 수 있습니다. 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지·피해구제를 검토할 수 있는 영역입니다. 허위 공고 + 선입금 요구 + 연락 두절 결합은 \'채용사기 신고·지급정지·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 공고·송금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 고소 ⑤ 피해금 환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 채용 보증금 선입금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 공고·송금·기망 고의·지급정지·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공고·송금 정리</strong> — 채용공고·문자·송금 내역·요구 명목(보증금·교육비) 정리.</li>\n<li><strong>② 기망 고의</strong> — 처음부터 채용 의사 없이 금원만 받으려 한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 송금 시 은행·112를 통한 지급정지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기·채용절차법 위반 고소 검토.</li>\n<li><strong>⑤ 피해금 환급</strong> — 전기통신금융사기 피해구제·채권소멸 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 송금 직후에는 지급정지를 빨리 요청할수록 환급 가능성을 살려둘 수 있고, 허위 공고·선입금 요구·연락 두절 정황은 기망 고의를 정리하는 핵심 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환급 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지 요청 (즉시)</strong> — 송금 은행·112 신고로 계좌 지급정지 요청.</li>\n<li><strong>2단계 — 공고·송금 자료 보존 (즉시)</strong> — 채용공고·문자·통화·이체 내역 보존.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 경찰 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제 신청 (2개월 내)</strong> — 은행 피해구제신청서 제출, 채권소멸 공고 절차 진행.</li>\n<li><strong>5단계 — 환급·민사 청구 (공고 후 약 2개월)</strong> — 채권소멸 후 피해금 환급, 부족분 민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">취업 보증금·교육비 선입금 신고·환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 공고·송금·기망 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>채용공고·합격 통보 캡처 (허위 공고 정황)</strong></li>\n<li><strong>보증금·교육비 요구 문자·메신저 기록</strong></li>\n<li><strong>계좌 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>상대 계좌·연락처 정보</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n<li><strong>동일 수법 피해 사례 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계좌로 송금한 경우 지급정지를 빨리 요청할수록 계좌에 남은 금액을 환급받을 가능성을 살려둘 수 있습니다. 정당한 채용 과정에서는 구직자에게 보증금·교육비 선입금을 요구하지 않는 것이 원칙이라는 점도 정리해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 처음부터 채용 의사 없이 금원만 받으려 했는지.</li>\n<li><strong>송금 수단</strong> — 계좌 송금이면 지급정지·피해구제 절차 대상.</li>\n<li><strong>채용절차법 위반</strong> — 채용 빌미 금전 요구 금지 위반 정황.</li>\n<li><strong>환급 시점</strong> — 지급정지·피해구제 신청 시점이 환급 가능성에 영향.</li>\n<li><strong>잔액 부족</strong> — 인출된 경우 부족분은 민사 청구·구상 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·피해구제 상담)</strong></li>\n<li><strong>고용노동부 1350 (채용절차법 위반 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 반복 재산범행의 포괄일죄와 불법이득 의사 판단',
        summary:
          '대법원 2024도11353(대법원, 2025.12.04 선고) 영역에서 법원은 재산범죄에서 동일 피해자에 대해 단일하고 계속된 범의 아래 동종 범행을 일정 기간 반복한 경우 포괄일죄가 될 수 있으나, 범의의 단일성·계속성은 범행 방법·동기·시간적 간격 등을 세밀히 살펴 신중히 판단해야 하고, 불법이득의사의 증명책임은 검사에게 있다고 판시했습니다. 허위 채용을 빌미로 여러 사람에게 보증금·교육비를 받은 행위의 범의·죄수를 살펴볼 때에도 이러한 기준을 살펴볼 수 있습니다.',
        takeaway: '허위 공고 + 선입금 요구 + 연락 두절 결합 시 채용사기 신고·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '돈을 보낸 지 얼마 안 됐는데 뭐부터 하나요?',
        answer:
          '<strong>계좌 송금이면 은행·112로 지급정지를 빨리 요청하는 것이 우선인 영역입니다.</strong> 송금 내역을 준비해 신고하세요.',
      },
      {
        question: '취업하려고 보증금 내는 건 원래 있는 일 아닌가요?',
        answer:
          '<strong>정당한 채용 과정에서 구직자에게 보증금·교육비 선입금을 요구하지 않는 것이 원칙인 영역입니다.</strong> 요구 자체를 정황으로 정리.',
      },
      {
        question: '환급은 받을 수 있나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 인출 전 신속 신고가 중요.',
      },
      {
        question: '상대가 누군지 모르는데 고소가 되나요?',
        answer:
          '<strong>계좌·연락처 등 자료로 수사기관이 특정할 수 있는 영역입니다.</strong> 가진 자료를 모두 모아 신고하세요.',
      },
      {
        question: '회사를 상대로 채용절차법 위반도 물을 수 있나요?',
        answer:
          '<strong>채용 빌미 금전 요구 금지 위반 정황은 함께 정리해볼 수 있는 영역입니다.</strong> 고용노동부 1350 상담을 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '채용·취업 사기 대응', href: '/guide/fraud/fraud-job-scam-response-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
    ],
  },

  // ─── 5. fraud-crypto-exchange-withdrawal-block-exit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-exchange-withdrawal-block-exit-track',
    keyword: '코인 거래소 출금 차단 수수료 요구 출구사기',
    questionKeyword: '투자한 거래소에서 출금하려니 세금·수수료를 먼저 입금하라며 출금을 막고 있어요. 입금해도 또 다른 명목을 대요. 이게 출금을 빌미로 한 사기인지 어떻게 대응하나요?',
    ctaKeyword: '거래소 출금 차단·추가 입금 요구 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 출금 차단 출구사기 — 5단계 기망·지급정지 점검 | 로앤가이드',
      description:
        '거래소가 출금을 막고 세금·수수료 명목 추가 입금을 요구한다면 출구사기 기망·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「수익이 났다는 화면을 믿고 투자한 거래소에서 막상 출금하려니 \'세금·보증금·수수료를 먼저 내야 출금이 된다\'며 추가 입금을 요구하는 분의 상황입니다. 시키는 대로 입금해도 또 다른 명목을 대며 출금을 미루고, 원금조차 빼지 못하고 있어요. 돈이 계속 묶이며 불안이 커지실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하는 영역입니다. 처음부터 출금을 정상적으로 이행할 의사 없이 출금을 빌미로 추가 입금을 받아내는 \'출구사기\' 정황은 기망행위로 평가될 여지가 있습니다. 판례는 기망행위를 수단으로 한 권리행사가 사기죄를 구성할 수 있는지에 관해 한정적으로 인정해온 사례 흐름이 있는 영역입니다. 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 출금 차단 + 추가 입금 요구 반복 + 명목 변경 결합은 \'출구사기 기망·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·출금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 고소 ⑤ 환급·추적 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 거래소 출금 차단 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·출금·기망 고의·지급정지·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·출금 정리</strong> — 가입·입금·출금 시도·거부 화면·요구 명목(세금·수수료) 정리.</li>\n<li><strong>② 기망 고의</strong> — 처음부터 출금을 이행할 의사 없이 추가 입금만 받아내려 했는지 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 국내 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기·관련 법령 위반 고소 검토.</li>\n<li><strong>⑤ 환급·추적</strong> — 피해구제·자금 흐름 추적·민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'출금하려면 먼저 입금하라\'는 반복 요구와 명목 변경은 출금을 빌미로 한 기망 정황으로 정리될 수 있는 핵심입니다. 추가 입금을 중단하고 송금 계좌의 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 입금 중단·자료 보존 (즉시)</strong> — 출금 거부 화면·채팅·입금 내역 보존, 추가 입금 중단.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 국내 계좌 송금분은 은행·112로 지급정지 요청.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·금감원 상담 (2개월 내)</strong> — 은행 피해구제신청·금융감독원 1332 상담 검토.</li>\n<li><strong>5단계 — 자금 추적·민사 청구 (이후)</strong> — 자금 흐름 추적·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">거래소 출금 차단·추가 입금 요구 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·출금·기망 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래소 가입·계정 화면 (플랫폼 정보)</strong></li>\n<li><strong>입금·송금 내역 (피해 금액·계좌)</strong></li>\n<li><strong>출금 시도·거부 화면 (출금 차단 정황)</strong></li>\n<li><strong>세금·수수료 등 추가 입금 요구 채팅·메시지</strong></li>\n<li><strong>상담원·모집책 연락처·대화 기록</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정상적인 거래소는 출금 자체를 위해 별도의 세금·보증금을 \'먼저 입금하라\'고 요구하지 않습니다. 출금을 막은 채 명목을 바꿔가며 추가 입금을 요구하는 화면·채팅을 시점별로 캡처해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 출금을 이행할 의사 없이 추가 입금만 받아내려 했는지.</li>\n<li><strong>출금 빌미 요구</strong> — 세금·수수료 선입금 요구의 정당성 여부.</li>\n<li><strong>송금 경로</strong> — 국내 계좌 송금분은 지급정지·피해구제 대상 검토.</li>\n<li><strong>플랫폼 실체</strong> — 거래소가 실제 운영·허가된 곳인지.</li>\n<li><strong>추가 입금 중단</strong> — 손실 확대를 막기 위한 즉시 중단의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자·금융사기 상담)</strong></li>\n<li><strong>금융감독원 불법사금융·보이스피싱 통합신고</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망을 수단으로 한 권리행사와 사기죄 성부',
        summary:
          '대법원 2024도11951(대법원, 2025.09.25 선고) 영역에서 법원은 기망행위를 수단으로 한 권리행사가 사기죄를 구성하는지를 한정적으로 인정하는 취지로 판단한 사례 흐름이 있습니다. 거래소가 출금을 빌미로 세금·수수료 명목의 추가 입금을 받아낸 행위가 기망을 수단으로 재산상 이익을 취득한 것으로 평가될 수 있는지를 살펴볼 때에도, 기망과 처분행위·이익 취득의 연결을 살펴볼 수 있습니다.',
        takeaway: '출금 차단 + 추가 입금 요구 반복 + 명목 변경 결합 시 출구사기 기망·지급정지 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '출금하려면 세금을 먼저 내라는데 정상인가요?',
        answer:
          '<strong>출금 자체를 위해 별도 세금·보증금을 먼저 입금하라는 요구는 정상 거래에서 보기 어려운 영역입니다.</strong> 추가 입금을 멈추고 점검하세요.',
      },
      {
        question: '이미 여러 번 입금했는데 더 보내야 하나요?',
        answer:
          '<strong>명목을 바꿔가며 반복 요구하는 경우 손실 확대를 막기 위해 추가 입금 중단을 우선 검토하는 영역입니다.</strong> 자료부터 보존하세요.',
      },
      {
        question: '국내 계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>국내 계좌 송금분은 지급정지·피해구제 대상으로 검토할 수 있는 영역입니다.</strong> 빨리 은행·112에 신고하세요.',
      },
      {
        question: '해외 거래소라 손쓸 수 없는 건가요?',
        answer:
          '<strong>송금 경로·자금 흐름에 따라 추적·구제 가능성이 달라지는 영역입니다.</strong> 거래·송금 자료를 모두 보존하세요.',
      },
      {
        question: '경찰과 금감원 중 어디에 신고하나요?',
        answer:
          '<strong>경찰 사이버범죄 신고와 금융감독원 1332 상담을 병행해볼 수 있는 영역입니다.</strong> 지급정지 신고를 먼저 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자·코인 사기 대응', href: '/guide/fraud/fraud-investment-crypto-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '자금 추적·민사 청구', href: '/guide/fraud/fraud-asset-tracing-civil-track' },
    ],
  },

  // ─── 6. fraud-private-loan-double-collateral-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-private-loan-double-collateral-falsely-accused-defense',
    keyword: '개인 금전대차 이중담보 사기 고소 방어',
    questionKeyword: '지인에게 돈을 빌리면서 담보를 제공했는데, 같은 물건에 다른 담보가 있었다며 사기로 고소당했어요. 갚을 생각이었고 속일 의도는 없었는데, 어떻게 방어하나요?',
    ctaKeyword: '이중담보 사기 고소 편취 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '이중담보 사기 고소 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '개인 간 금전대차에서 이중담보 의혹으로 사기 고소를 당했다면 편취 고의·변제의사·담보 권한 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「개인적으로 알던 지인에게 돈을 빌리면서 담보를 제공했는데, 나중에 \'같은 물건에 이미 다른 담보가 잡혀 있었다\'며 사기로 고소를 당한 분의 상황입니다. 정해진 기한에 갚을 생각이었고 담보를 속여 빼앗을 의도는 없었는데, 이중담보라는 형식만으로 사기범으로 몰리는 것 같아 억울하실 거예요.」 혐의를 받고 있다면, 형법 제347조 사기죄는 \'사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득\'한 경우에 성립하고, 차용 당시 변제의사·변제능력이 없었거나 담보에 관한 중요한 사실을 속였다는 \'기망의 고의(편취 의사)\'가 인정돼야 한다는 점이 핵심 쟁점입니다. 단순히 결과적으로 변제가 늦어졌거나 담보 가치가 부족했다는 사정만으로 곧바로 편취 고의가 인정되는 것은 아니라는 평가가 가능한 영역입니다. 판례는 죄수·공소시효 등 형사절차 쟁점을 신중히 판단해온 사례 흐름이 있습니다. 차용 경위 + 변제 노력 + 담보 권한 정황 결합은 \'편취 고의 부재·기망 부인\' 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 차용 경위 ② 변제의사·능력 ③ 담보 권한 ④ 고지 내용 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이중담보 사기 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용 경위·변제의사·담보 권한·고지 내용·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용 경위</strong> — 차용 목적·금액·기한·당시 자력 등 거래 경위 정리.</li>\n<li><strong>② 변제의사·능력</strong> — 차용 당시 변제할 의사와 능력이 있었다는 정황(소득·자산·상환 이력) 정리.</li>\n<li><strong>③ 담보 권한</strong> — 제공한 담보에 대한 권한·후순위 설정 가능성·고지 여부 정리.</li>\n<li><strong>④ 고지 내용</strong> — 기존 담보·권리관계를 알리거나 채권자가 알고 있었는지 정황 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 수사 단계 진술·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사기죄의 핵심은 차용·담보 제공 당시 편취 고의(기망의 고의)가 있었는지입니다. 변제의사·능력과 담보에 관한 고지·권한 정황을 정리하면, 이중담보라는 형식만으로 곧바로 편취 고의가 인정되는 것은 아니라는 방어를 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용·담보 자료 정리 (즉시)</strong> — 차용증·계약서·담보 설정 서류·계좌 내역 정리.</li>\n<li><strong>2단계 — 변제의사·능력 자료 (1주)</strong> — 차용 당시 소득·자산·상환 이력·일부 변제 자료 정리.</li>\n<li><strong>3단계 — 고지·권한 정황 정리 (2주)</strong> — 기존 담보 고지·채권자 인지·담보 권한 자료 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 의견서·진술 전략 검토.</li>\n<li><strong>5단계 — 합의·처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 합의·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">이중담보 사기 고소 편취 고의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차용 경위·변제의사·담보 권한 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·금전대차계약서 (조건·기한)</strong></li>\n<li><strong>담보 설정 서류·등기·권리관계 자료</strong></li>\n<li><strong>차용 당시 소득·자산 자료 (변제능력)</strong></li>\n<li><strong>일부 변제·상환 노력 내역</strong></li>\n<li><strong>기존 담보 고지·채권자 인지 정황 (대화·교신)</strong></li>\n<li><strong>차용 경위·용도 설명 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'차용·담보 제공 당시 편취 고의가 있었는가\'입니다. 변제의사·능력을 보여주는 자료와 담보에 관한 고지·권한 정황을 시점별로 정리하고, 진술이 흔들리지 않도록 사실관계를 미리 정돈해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 차용·담보 제공 당시 기망의 고의가 있었는지.</li>\n<li><strong>변제의사·능력</strong> — 당시 변제할 의사와 능력이 있었는지.</li>\n<li><strong>담보 고지</strong> — 기존 권리관계를 고지했거나 채권자가 알았는지.</li>\n<li><strong>결과와 고의 구분</strong> — 변제 지연·담보 부족이라는 결과가 곧 편취 고의는 아닌지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (금융·대차 분쟁 상담)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄일죄와 공소시효·공소장변경 판단 기준',
        summary:
          '대법원 2025도14142(대법원, 2026.01.15 선고) 영역에서 법원은 일정 범죄에서 구성·가입과 그 이후 활동이 범의의 단일성·계속성과 피해법익의 동일성을 인정할 수 있어 포괄일죄의 관계에 있을 수 있고, 포괄일죄의 공소시효는 최종 범죄행위가 종료한 때로부터 진행하며, 공소장변경이 있는 경우 공소시효 완성 여부는 당초 공소제기 시점을 기준으로 판단한다고 판시했습니다. 반복된 금전거래가 하나의 범행으로 묶이는지, 공소시효가 어떻게 산정되는지를 다툴 때에도 이러한 죄수·시효 기준을 살펴볼 수 있습니다.',
        takeaway: '차용 경위 + 변제 노력 + 담보 권한 정황 결합 시 편취 고의 부재·기망 부인 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '이중담보면 무조건 사기인가요?',
        answer:
          '<strong>이중담보라는 형식만으로 곧바로 편취 고의가 인정되는 것은 아닌 영역입니다.</strong> 차용 당시 의사·고지 정황을 정리.',
      },
      {
        question: '갚을 생각이었다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>당시 소득·자산·일부 변제·상환 이력 등이 변제의사·능력의 정황 자료가 되는 영역입니다.</strong> 시점별로 모아 정리하세요.',
      },
      {
        question: '담보 사실을 말 안 했으면 불리한가요?',
        answer:
          '<strong>고지 여부와 채권자의 인지 정황이 함께 평가되는 영역입니다.</strong> 대화·교신 기록으로 정황을 확인하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 미리 정돈하고 변호인 조력을 검토하세요.',
      },
      {
        question: '합의가 처분에 영향을 주나요?',
        answer:
          '<strong>피해 회복·합의는 처분·양형에 영향을 줄 수 있는 영역입니다.</strong> 사실관계 다툼과 함께 전략을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 무고 방어 대응', href: '/guide/fraud/fraud-false-accusation-defense-track' },
      { label: '편취 고의 다툼', href: '/guide/fraud/fraud-intent-to-defraud-dispute' },
      { label: '차용금 사기 방어', href: '/guide/fraud/fraud-loan-default-defense-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
      { label: '합의와 양형 자료', href: '/guide/fraud/fraud-settlement-sentencing-effect' },
    ],
  },

  // ─── 7. sex-crime-gym-personal-trainer-inappropriate-contact-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-personal-trainer-inappropriate-contact-track',
    keyword: '헬스장 PT 트레이너 자세교정 부적절 신체접촉',
    questionKeyword: '헬스장 PT를 받는데 트레이너가 자세교정을 핑계로 불필요하게 몸을 만지는 일이 반복됐어요. 단순 지도인지 추행인지 헷갈리는데, 어떻게 대응하고 신고해야 하나요?',
    ctaKeyword: '헬스장 PT 자세교정 부적절 접촉 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'PT 자세교정 추행 — 5단계 추행·범의 점검 | 로앤가이드',
      description:
        '헬스장 PT 중 자세교정을 빙자한 신체접촉이 반복됐다면 추행 해당성·범의·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장에서 개인 PT를 받던 중, 트레이너가 \'자세교정\'을 이유로 필요 이상으로 몸을 만지는 일이 반복돼 불쾌함과 불안을 느낀 분의 상황입니다. 운동을 위해 어느 정도 접촉이 있을 수 있다는 생각에 참았지만, 점점 불필요한 부위까지 닿는 느낌이 들어 \'이게 지도인지 추행인지\' 혼란스러우셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람에 대하여 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 추행을 \'객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키고 선량한 성적 도덕관념에 반하는, 피해자의 성적 자기결정권을 침해하는 행위\'로 보고, 추행 해당성은 행위자와 피해자의 관계·행위에 이르게 된 경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있습니다. 자세교정 명목 + 불필요한 부위 접촉 반복 + 거부 의사 정황 결합은 \'추행 해당성·범의\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 추행 해당성 ③ 범의 ④ 증거 보전 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PT 자세교정 부적절 접촉 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·추행 해당성·범의·증거·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·반복 횟수·상황(자세교정 필요성 여부) 정리.</li>\n<li><strong>② 추행 해당성</strong> — 일반인 기준 성적 수치심·혐오감을 일으키는 행위인지 검토.</li>\n<li><strong>③ 범의</strong> — 지도 명목을 넘어선 추행의 인식·의사 정황 정리.</li>\n<li><strong>④ 증거 보전</strong> — CCTV·대화·당시 기록·목격자 등 증거 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 등 보호·상담 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행 해당성은 행위자와 피해자의 관계·경위·구체적 행위태양·주위 상황을 종합해 판단되는 영역입니다. 자세교정의 필요성과 실제 접촉 부위·반복성을 구분해 정리하면 다툼 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 당시 상황 메모·대화·CCTV 보존 요청·목격자 확보.</li>\n<li><strong>2단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담으로 대응 방향 정리.</li>\n<li><strong>3단계 — 경찰 신고·진술 (준비 후)</strong> — 경찰 112 신고, 시점·행위태양 진술 정리.</li>\n<li><strong>4단계 — 증거 제출·조사 (조사 단계)</strong> — CCTV·대화·진술로 추행 해당성·범의 정황 제출.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 접근금지·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 자세교정 부적절 접촉 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·시점 메모 (구체적 행위태양)</strong></li>\n<li><strong>헬스장 CCTV 보존 요청·확보 자료</strong></li>\n<li><strong>트레이너와의 대화·메신저 기록</strong></li>\n<li><strong>거부·불쾌 의사 표시 정황 자료</strong></li>\n<li><strong>목격자·동반자 진술</strong></li>\n<li><strong>PT 등록·이용 내역 (관계 입증)</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 시간이 지나면 삭제될 수 있어, 가능한 한 빨리 헬스장에 보존을 요청해두는 것이 중요합니다. 접촉 부위·상황·반복성을 시점별로 구체적으로 기록하면 추행 해당성·범의 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 지도 범위를 넘어선 접촉인지, 일반인 기준 성적 수치심을 일으키는지.</li>\n<li><strong>범의</strong> — 자세교정 명목과 구별되는 추행의 인식·의사가 있었는지.</li>\n<li><strong>관계·경위</strong> — 트레이너·회원 관계와 접촉에 이르게 된 경위.</li>\n<li><strong>증거 시점</strong> — CCTV 보존·즉시 기록의 중요성.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성과 성인지적 관점.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 추행 의미와 추행 범의 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄에서 추행은 객관적으로 일반인에게 성적 수치심이나 혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자기결정권을 침해하는 것을 의미하고, 추행 해당성은 피해자와 행위자의 이전부터의 관계·행위에 이르게 된 경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 하며, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 판시했습니다. 자세교정 명목의 접촉이 추행에 해당하는지를 살펴볼 때에도 행위태양·관계·범의를 함께 살펴볼 수 있습니다.',
        takeaway: '자세교정 명목 + 불필요한 부위 접촉 반복 + 거부 의사 결합 시 추행 해당성·범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운동 지도 중 접촉도 추행이 되나요?',
        answer:
          '<strong>지도 범위를 넘어 일반인 기준 성적 수치심을 일으키는지로 판단하는 영역입니다.</strong> 접촉 부위·상황을 구체적으로 정리하세요.',
      },
      {
        question: '한 번이 아니라 반복됐는데 더 중요한가요?',
        answer:
          '<strong>반복성·접촉 부위·경위는 추행 해당성과 범의 판단의 중요한 사정인 영역입니다.</strong> 시점별 기록을 남기세요.',
      },
      {
        question: 'CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>시간이 지나면 삭제될 수 있어 빨리 보존을 요청하는 것이 중요한 영역입니다.</strong> 헬스장에 서면으로 요청해두세요.',
      },
      {
        question: '신고 전에 어디서 상담받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
      {
        question: '심리적으로 힘든데 지원이 있나요?',
        answer:
          '<strong>해바라기센터 등에서 심리·의료·법률 지원을 함께 받아볼 수 있는 영역입니다.</strong> 상담 기록도 자료가 됩니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-act-report-procedure' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '접근금지·신변보호', href: '/guide/sex-crime/sex-crime-protection-order-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-club-dancefloor-stranger-groping-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-dancefloor-stranger-groping-track',
    keyword: '클럽 댄스플로어 모르는 사람 밀착 신체접촉 추행',
    questionKeyword: '클럽에서 춤추는데 모르는 사람이 뒤에서 밀착하며 몸을 만졌어요. 사람이 많아 즉시 항의도 어려웠는데, 이런 경우도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '클럽 밀착 신체접촉 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '클럽 밀착 추행 — 5단계 추행·증거 점검 | 로앤가이드',
      description:
        '클럽 댄스플로어에서 모르는 사람이 밀착해 몸을 만졌다면 추행 해당성·증거 보전·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「사람이 가득한 클럽 댄스플로어에서 춤을 추던 중, 모르는 사람이 뒤에서 밀착하며 몸을 만져 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 주변이 혼잡해 즉시 항의하기도, 누가 그랬는지 특정하기도 어려운 상황에서 \'이런 경우도 신고가 되는지\' 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 추행한 경우를 강제추행죄로, 성폭력범죄의 처벌 등에 관한 특례법 제11조는 대중교통수단·공연·집회 장소 등 공중이 밀집하는 장소에서의 추행을 정하는 영역입니다. 판례는 추행을 \'일반인을 기준으로 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는, 성적 자기결정권을 침해하는 행위\'로 보고, 항거불능·항거곤란 여부 등은 당시 상황을 종합해 판단해야 한다고 본 사례 흐름이 있습니다. 밀집 장소 + 밀착·신체접촉 + 즉시 항의 곤란 결합은 \'추행 해당성·증거 특정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 장소·상황 ③ 가해자 특정 ④ 증거 보전 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 밀착 신체접촉 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·장소·가해자 특정·증거·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식(밀착·만짐)·반복 여부 정리.</li>\n<li><strong>② 장소·상황</strong> — 공중 밀집 장소 여부, 즉시 항의가 어려웠던 상황 정리.</li>\n<li><strong>③ 가해자 특정</strong> — 인상착의·동선·CCTV·일행 진술로 특정 자료 확보.</li>\n<li><strong>④ 증거 보전</strong> — 클럽 CCTV 보존 요청·당시 메시지·목격자 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공중 밀집 장소에서의 밀착·신체접촉도 추행으로 평가될 수 있는 영역입니다. 혼잡으로 즉시 항의가 어려웠던 상황과 접촉 부위·방식, 가해자 특정 자료를 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 보전 (즉시)</strong> — 클럽 직원·CCTV 보존 요청, 일행·목격자 확보.</li>\n<li><strong>2단계 — 경찰 신고 (현장·직후)</strong> — 112 신고로 가해자 특정·현장 조치 요청.</li>\n<li><strong>3단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담.</li>\n<li><strong>4단계 — 진술·증거 제출 (조사 단계)</strong> — 행위태양·장소·CCTV로 추행 해당성 정황 제출.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 밀착 신체접촉 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·장소·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·방식 메모 (구체적 행위태양)</strong></li>\n<li><strong>클럽 CCTV 보존 요청·확보 자료</strong></li>\n<li><strong>가해자 인상착의·동선 메모</strong></li>\n<li><strong>일행·목격자 진술</strong></li>\n<li><strong>입장 기록·결제 내역 (시간·장소 입증)</strong></li>\n<li><strong>당시·직후 메신저·통화 기록 (즉시 호소 정황)</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼잡한 장소에서는 가해자 특정이 관건이므로, 현장에서 바로 클럽 직원에게 CCTV 보존을 요청하고 일행·목격자를 확보해두는 것이 중요합니다. 접촉 부위·방식과 즉시 항의가 어려웠던 사정을 함께 기록해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 접촉인지, 성적 수치심을 일으키는 추행인지.</li>\n<li><strong>장소 성격</strong> — 공중 밀집 장소에서의 추행에 해당하는지.</li>\n<li><strong>가해자 특정</strong> — 혼잡한 상황에서 가해자를 특정할 수 있는지.</li>\n<li><strong>즉시 호소 정황</strong> — 즉시 항의가 어려웠던 사정과 직후 호소 정황.</li>\n<li><strong>증거 시점</strong> — 현장 CCTV 보존·즉시 신고의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행과 성적 자기결정권 침해, 상황 종합 판단',
        summary:
          '대법원 2021도11938(대법원, 2025.05.01 선고) 영역에서 법원은 형법 제299조 준강간죄의 보호법익이 소극적 측면의 성적 자기결정권이고, 성폭력범죄를 심리할 때 우월적 지위·상황 등 점진적·누적적 영향과 피해자가 처한 구체적 상황을 종합해 항거불능·현저한 항거곤란 여부를 신중히 판단해야 한다고 판시했습니다. 클럽처럼 혼잡해 즉시 대응이 어려운 상황에서의 신체접촉이 추행에 해당하는지, 당시 상황을 어떻게 평가할지를 살펴볼 때에도 이러한 상황 종합 판단 기준을 살펴볼 수 있습니다.',
        takeaway: '밀집 장소 + 밀착·신체접촉 + 즉시 항의 곤란 결합 시 추행 해당성·증거 특정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 많아 닿은 건데 추행이 되나요?',
        answer:
          '<strong>우연한 접촉인지, 성적 수치심을 일으키는 추행인지를 행위태양·상황으로 판단하는 영역입니다.</strong> 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '누가 그랬는지 모르는데 신고가 되나요?',
        answer:
          '<strong>CCTV·일행 진술로 가해자를 특정할 수 있는 영역입니다.</strong> 현장에서 CCTV 보존을 빨리 요청하세요.',
      },
      {
        question: '그 자리에서 항의 못 했는데 불리한가요?',
        answer:
          '<strong>혼잡으로 즉시 항의가 어려웠던 사정도 함께 평가되는 영역입니다.</strong> 직후 호소·메시지 정황을 남기세요.',
      },
      {
        question: 'CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>시간이 지나면 삭제될 수 있어 현장에서 바로 보존을 요청하는 것이 중요한 영역입니다.</strong> 직원에게 서면 요청을 남기세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '공중밀집장소 추행 신고', href: '/guide/sex-crime/sex-crime-crowded-place-report-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '가해자 특정·수사 협조', href: '/guide/sex-crime/sex-crime-offender-identification-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-hospital-treatment-doctor-inappropriate-act-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-hospital-treatment-doctor-inappropriate-act-track',
    keyword: '병원 진료 의료인 신체접촉 진료범위 초과 추행',
    questionKeyword: '진료·검사를 받는데 의료인이 진료에 필요한 범위를 넘어 신체를 만지는 것 같아 불쾌했어요. 진료인지 추행인지 헷갈리는데, 어떻게 판단하고 신고하나요?',
    ctaKeyword: '진료 중 신체접촉 진료범위 초과 추행 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '진료 중 추행 의혹 — 5단계 진료범위·추행 점검 | 로앤가이드',
      description:
        '진료·검사 중 의료인의 신체접촉이 진료 범위를 넘은 것 같다면 진료범위·추행 해당성·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「진료나 검사를 받던 중, 의료인이 진료에 꼭 필요해 보이지 않는 부위까지 만지는 것 같아 불쾌하고 불안했던 분의 상황입니다. \'의료행위라 어쩔 수 없는 건지, 아니면 진료를 빙자한 추행인지\' 판단하기 어려워 문제를 제기해야 할지 망설이셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 추행한 경우를 강제추행죄로, 의료 등 업무·고용 관계로 보호·감독받는 사람에 대한 추행은 성폭력처벌법상 업무상위력 등에 의한 추행으로 평가될 수 있는 영역입니다. 판례는 추행을 \'일반인 기준 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는, 성적 자기결정권을 침해하는 행위\'로 보고, 추행의 고의를 부인하는 경우 행위 경위·태양·전후 정황 등 간접사실로 신중히 판단해야 한다고 본 사례 흐름이 있습니다. 진료 명목 + 진료범위 초과 접촉 + 불필요 부위 결합은 \'추행 해당성·진료 필요성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 진료 필요성 ③ 추행 고의 ④ 증거 보전 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 진료 중 신체접촉 추행 의혹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·진료 필요성·추행 고의·증거·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식·시점, 진료 설명 유무 정리.</li>\n<li><strong>② 진료 필요성</strong> — 해당 접촉이 진료·검사에 필요한 범위였는지 검토.</li>\n<li><strong>③ 추행 고의</strong> — 진료 범위를 넘은 추행의 인식·의사 정황 정리.</li>\n<li><strong>④ 증거 보전</strong> — 진료기록·동행자·CCTV·당시 기록 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진료에 필요한 범위였는지와 추행의 고의가 있었는지가 핵심 쟁점입니다. 접촉 부위·방식·진료 설명 유무를 구체적으로 정리하면 진료 필요성과 추행 해당성을 구분하는 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 진료기록 사본 요청·당시 메모·동행자·CCTV 보존 요청.</li>\n<li><strong>2단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담으로 대응 방향 정리.</li>\n<li><strong>3단계 — 경찰 신고·진술 (준비 후)</strong> — 경찰 112 신고, 행위태양·진료 설명 유무 진술.</li>\n<li><strong>4단계 — 증거 제출·자문 (조사 단계)</strong> — 진료기록·전문 의학 자문으로 진료 필요성·추행 정황 제출.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">진료 중 신체접촉 진료범위 초과 추행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·진료 필요성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·시점 메모 (구체적 행위태양)</strong></li>\n<li><strong>진료기록·검사기록 사본 (진료 범위)</strong></li>\n<li><strong>진료 설명·동의 여부 정황 자료</strong></li>\n<li><strong>진료실 CCTV·간호인력 입회 여부 자료</strong></li>\n<li><strong>동행자·목격자 진술</strong></li>\n<li><strong>진료 접수·이용 내역 (관계·시간 입증)</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록 사본을 확보하고, 해당 접촉이 진료·검사에 통상 필요한 범위였는지에 대한 전문 의학 자문을 함께 정리하면 진료 필요성과 추행 해당성을 구분하는 데 도움이 됩니다. 진료 설명·동의 유무도 함께 기록해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진료 필요성</strong> — 접촉이 진료·검사에 통상 필요한 범위였는지.</li>\n<li><strong>추행 고의</strong> — 진료 범위를 넘은 추행의 인식·의사가 있었는지.</li>\n<li><strong>설명·동의</strong> — 접촉 전 설명·동의 절차가 있었는지.</li>\n<li><strong>입회 여부</strong> — 간호인력 등 제3자 입회 여부.</li>\n<li><strong>증거 시점</strong> — 진료기록·CCTV 보존, 즉시 기록의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 고의와 간접사실에 의한 신중한 판단',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 공중 밀집 장소에서의 추행죄의 추행이 일반인 기준 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는, 성적 자기결정권 침해 행위를 의미하고, 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실을 행위 경위·동기·관계·구체적 행위태양·전후 정황 등 객관적 사정을 종합해 신중히 판단해야 한다고 판시했습니다. 진료를 빙자한 접촉이 추행에 해당하는지, 진료 필요성과 추행 고의를 구분할 때에도 이러한 간접사실 종합 판단 기준을 살펴볼 수 있습니다.',
        takeaway: '진료 명목 + 진료범위 초과 접촉 + 불필요 부위 결합 시 추행 해당성·진료 필요성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진료에 필요한 접촉인지 어떻게 가리나요?',
        answer:
          '<strong>해당 접촉이 진료·검사에 통상 필요한 범위였는지를 전문 자문과 함께 판단하는 영역입니다.</strong> 진료기록을 확보하세요.',
      },
      {
        question: '진료실엔 CCTV가 없는데 어떻게 하나요?',
        answer:
          '<strong>간호인력 입회 여부·동행자 진술·진료기록 등 다른 정황으로 정리하는 영역입니다.</strong> 가능한 자료를 모두 모으세요.',
      },
      {
        question: '설명 없이 만진 게 문제가 되나요?',
        answer:
          '<strong>접촉 전 설명·동의 유무는 추행 해당성 판단의 중요한 사정인 영역입니다.</strong> 당시 설명 여부를 기록하세요.',
      },
      {
        question: '의료분쟁과 형사 신고를 같이 하나요?',
        answer:
          '<strong>형사 신고와 별개로 의료기관 민원·민사 대응을 병행해볼 수 있는 영역입니다.</strong> 자료를 갖춰 함께 검토하세요.',
      },
      {
        question: '상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-act-report-procedure' },
      { label: '업무상위력 추행 대응', href: '/guide/sex-crime/sex-crime-abuse-of-authority-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-company-dinner-intoxicated-misunderstanding-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-intoxicated-misunderstanding-falsely-accused-defense',
    keyword: '회식 음주 만취 접촉 강제추행 무고 방어',
    questionKeyword: '회식 후 모두 만취한 상태에서 있었던 접촉을 두고 강제추행으로 고소당했어요. 추행할 의도가 전혀 없었고 우발적 접촉이었는데, 어떻게 방어해야 하나요?',
    ctaKeyword: '회식 만취 접촉 강제추행 고소 범의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 추행 고소 방어 — 5단계 추행 범의 점검 | 로앤가이드',
      description:
        '회식 후 만취 상태의 접촉을 두고 강제추행으로 고소당했다면 추행 범의·고의·합리적 의심 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「회식이 늦게까지 이어져 모두 술에 취한 상태에서 있었던 신체접촉을 두고, 며칠 뒤 강제추행으로 고소를 당한 분의 상황입니다. 추행할 의도는 전혀 없었고 혼잡하고 취한 상황에서 우발적으로 닿은 것뿐이라고 생각하는데, 한순간에 가해자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 형법 제298조 강제추행죄는 폭행 또는 협박으로 사람을 추행한 경우에 성립하고, 추행행위마다 폭행·협박 외에 \'추행행위와 그에 대한 범의\'가 인정돼야 한다는 점이 핵심 쟁점입니다. 판례는 형사재판에서 유죄 인정은 합리적 의심이 없을 정도의 증명을 요하고, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 본 사례 흐름이 있는 영역입니다. 만취·혼잡 상황에서의 접촉이라는 사정만으로 곧바로 추행 범의가 인정되는 것은 아니라는 평가가 가능한 영역입니다. 회식 경위 + 만취·우발 정황 + 범의 다툼 결합은 \'추행 범의 부족·합리적 의심\' 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위 정리 ② 행위태양 ③ 범의 다툼 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 만취 접촉 강제추행 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·행위태양·범의 다툼·증거·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식 진행·자리 배치·이동 경위·음주 정도 정리.</li>\n<li><strong>② 행위태양</strong> — 접촉 부위·방식·반복 여부, 우발·혼잡 정황 정리.</li>\n<li><strong>③ 범의 다툼</strong> — 추행의 인식·의사가 있었는지, 증명이 충분한지 검토.</li>\n<li><strong>④ 증거 검토</strong> — CCTV·동석자 진술·메시지 등 객관 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행죄는 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정돼야 합니다. 만취·혼잡이라는 사정만으로 범의가 곧바로 인정되는 것은 아니어서, 경위·행위태양·객관 정황을 정리해 범의의 증명을 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·증거 정리 (즉시)</strong> — 회식 동선·자리 배치·음주 정도·CCTV·동석자 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·메시지·동석자 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 범의 다툼 정리 (2주)</strong> — 우발·혼잡 정황과 추행 인식·의사 부족 정황 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 합의·처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·합의 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 만취 접촉 강제추행 고소 범의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·행위태양·범의 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일정·장소·참석자 정리 (경위)</strong></li>\n<li><strong>자리 배치·이동 동선 메모 (접촉 경위)</strong></li>\n<li><strong>식당·이동 구간 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술</strong></li>\n<li><strong>음주 정도·당시 상태 정황 자료</strong></li>\n<li><strong>고소 전후 대화·메시지 기록</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'추행의 범의가 합리적 의심 없이 증명되었는가\'입니다. 우발·혼잡 정황을 보여주는 CCTV·동석자 진술을 확보하고, 진술이 일관되도록 경위·행위태양을 미리 정돈해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 범의</strong> — 추행의 인식·의사가 합리적 의심 없이 증명됐는지.</li>\n<li><strong>행위태양</strong> — 접촉 부위·방식이 우발적·일시적인지.</li>\n<li><strong>경위·상황</strong> — 만취·혼잡 등 접촉에 이르게 된 경위.</li>\n<li><strong>증명 정도</strong> — 진술 외 객관 증거의 충분성.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 범의의 증명과 합리적 의심 없는 증명 요구',
        summary:
          '대법원 2023도10405(대법원, 2025.03.20 선고) 영역에서 법원은 성폭력처벌법상 특수강간치상죄의 성립·미수 법리 등 성폭력범죄의 구성요건과 죄수에 관한 기준을 제시하며 관련 법리를 신중히 적용해야 한다고 판시했습니다. 강제추행 사건에서도 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정돼야 하고, 범의의 증명이 합리적 의심이 없을 정도에 이르렀는지를 다툴 때에도 이러한 신중한 증명 요구를 살펴볼 수 있습니다.',
        takeaway: '회식 경위 + 만취·우발 정황 + 범의 다툼 결합 시 추행 범의 부족·합리적 의심 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '취한 상태의 접촉이면 무조건 추행인가요?',
        answer:
          '<strong>만취·혼잡이라는 사정만으로 추행 범의가 곧바로 인정되는 것은 아닌 영역입니다.</strong> 경위·행위태양을 정리하세요.',
      },
      {
        question: '의도가 없었다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>접촉이 우발적·일시적이었다는 객관 정황이 범의 다툼의 자료가 되는 영역입니다.</strong> CCTV·동석자 진술을 확보하세요.',
      },
      {
        question: '동석자 진술이 도움이 되나요?',
        answer:
          '<strong>당시 상황·자리 배치·음주 정도에 관한 동석자 진술이 중요한 정황인 영역입니다.</strong> 진술을 미리 정리해두세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
      {
        question: '합의가 처분에 영향을 주나요?',
        answer:
          '<strong>사실관계 다툼과 별개로 피해 회복·합의는 처분·양형에 영향을 줄 수 있는 영역입니다.</strong> 전략을 함께 검토하세요.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense-track' },
      { label: '추행 범의 다툼', href: '/guide/sex-crime/sex-crime-intent-dispute-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
      { label: '합의와 양형 자료', href: '/guide/sex-crime/sex-crime-settlement-sentencing-effect' },
    ],
  },
];
