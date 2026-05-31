import { SpokePage } from '../spoke-pages';

// batch84 fraud(6) + sex-crime(4) — 10개 (2026-06-01)
//
// 고유 존재 이유:
// 1. fraud-used-car-mileage-tampering-track — 일반 중고거래류와 분기. '중고차 주행거리를 조작해 정상가로 매도한' 기망·재물교부 판단형 트랙(victim).
// 2. fraud-crypto-exchange-fake-withdrawal-block-track — 일반 투자사기류와 분기. '가짜 코인거래소에 입금 후 수익이 찍히나 출금이 정지되고 잠적' 편취액·지급정지 판단형 트랙(victim).
// 3. fraud-prepaid-membership-gym-closure-track — 일반 폐업분쟁류와 분기. '헬스장 선불 회원권을 결제했는데 폐업·잠적' 계약 당시 편취 고의·환급 절차형 트랙(victim).
// 4. fraud-job-recruitment-upfront-deposit-track — 일반 선입금류와 분기. '취업을 빌미로 교육비·보증금 선입금을 받고 잠적' 편취 범의·미필적 고의 판단형 트랙(victim).
// 5. fraud-government-subsidy-impersonation-track — 일반 보이스피싱류와 분기. '정부 지원금 사칭으로 본인 계좌 송금을 유도' 재물성·지급정지 판단형 트랙(victim).
// 6. fraud-loan-brokerage-advance-fee-falsely-accused-defense — 일반 사기 무고류와 분기. '대출 중개 선수수료 계좌로 피해금이 들어와 방조·횡령 의심' 고의·횡령 불성립 방어 판단형 트랙(accused).
// 7. sex-crime-company-dinner-intoxication-contact-track — 일반 직장 추행류와 분기. '회식 후 만취 상태에서 신체접촉' 추행 폭행 의미·기습추행 판단형 트랙(victim).
// 8. sex-crime-gym-personal-training-session-track — 일반 강제추행류와 분기. 'PT 중 자세 교정을 빙자한 추행' 기습추행·미수 판단형 트랙(victim).
// 9. sex-crime-public-restroom-hidden-camera-track — 일반 불법촬영류와 분기. '공중화장실 불법촬영물 촬영·소지' 촬영 대상·복제물 절차형 트랙(victim).
// 10. sex-crime-online-message-coercion-falsely-accused-defense — 일반 성범죄 무고류와 분기. '온라인 메시지 내 표현을 추행으로 고소당함' 진술 신빙성·합리적 의심 방어 판단형 트랙(accused).

export const spokesBatch84FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-mileage-tampering-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-mileage-tampering-track',
    keyword: '중고차 주행거리 조작 매매 사기',
    questionKeyword: '중고차를 샀는데 알고 보니 주행거리가 조작돼 있었어요. 계기판은 적게 찍혀 있었지만 정비 이력을 보니 실제로는 훨씬 많이 탄 차였어요. 이런 경우 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고차 주행거리 조작 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '중고차 주행거리가 조작된 걸 뒤늦게 알았다면 기망 고의·재물 교부·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「믿고 산 중고차의 계기판 주행거리가 실제보다 크게 적게 찍혀 있었던 분의 상황입니다. 정비 이력·보험 기록을 떼어 보니 실제 주행거리는 훨씬 많았고, 그만큼 비싸게 산 셈이라 막막하실 거예요. 매매상은 \'몰랐다\'며 발뺌하는데 어디서부터 따져야 할지 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고, 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 주행거리를 조작·은폐해 정상가로 매도한 정황은 기망행위로 평가될 여지가 있고, 매매대금 지급이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자에게 교부받게 한 경우에도 사기죄가 성립할 수 있고, 기망으로 인한 재물 교부가 있으면 그 이익이 누구에게 귀속되는지는 성립에 영향이 없다고 본 사례 흐름이 있는 영역입니다. 주행거리 조작 + 정상가 매도 + 이력 불일치 결합은 \'기망 고의·재물 교부\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·차량 정리 ② 기망 고의 ③ 손해 산정 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 조작 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 고의·손해 산정·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·차량 정리</strong> — 매매계약서·성능점검기록부·계기판·실제 주행거리 정리.</li>\n<li><strong>② 기망 고의</strong> — 주행거리를 조작·은폐하고 정상가로 판 정황 정리.</li>\n<li><strong>③ 손해 산정</strong> — 조작이 없었을 적정 시세와의 차액 등 손해 정리.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 매매계약 해제·손해배상·부당이득 반환 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계기판 표시와 정비·보험 이력상 실제 주행거리의 불일치, 그리고 그 사실을 알리지 않고 정상가로 판 정황이 기망 판단의 핵심입니다. 성능점검기록부·이력 자료를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량·거래 자료 보존 (즉시)</strong> — 매매계약서·성능점검기록부·계기판 사진·대화 보존.</li>\n<li><strong>2단계 — 실제 주행거리 확인 (1주)</strong> — 정비 이력·보험개발원 기록으로 실제 주행거리 대조.</li>\n<li><strong>3단계 — 경찰 신고·소비자상담 (병행)</strong> — 사이버범죄 신고·한국소비자원 1372 상담.</li>\n<li><strong>4단계 — 기망 정황 제출 (조사 단계)</strong> — 이력 불일치·정상가 매도 정황 제출.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 계약 해제·손해배상·차액 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 조작 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 고의·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>중고차 매매계약서 (거래 내용·매도인 정보)</strong></li>\n<li><strong>중고차 성능·상태 점검기록부 (고지 내용)</strong></li>\n<li><strong>계기판 주행거리 사진·영상</strong></li>\n<li><strong>정비 이력·보험개발원 기록 (실제 주행거리)</strong></li>\n<li><strong>대금 결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>매도인·중개상과의 대화·고지 기록</strong></li>\n<li><strong>적정 시세 자료 (차액 손해 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성능점검기록부와 보험개발원 주행거리 기록을 대조하면 조작 정황이 드러나는 경우가 많습니다. 계기판 사진과 실제 이력을 함께 정리하고, 적정 시세 자료로 차액 손해를 뒷받침하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 주행거리 조작·은폐를 알면서 정상가로 팔았는지.</li>\n<li><strong>고지의무</strong> — 성능점검·고지 내용과 실제의 불일치.</li>\n<li><strong>매도인 인식</strong> — 매매상이 조작 사실을 알았는지(미필적 인식 포함).</li>\n<li><strong>손해 산정</strong> — 조작이 없었을 적정 시세와의 차액.</li>\n<li><strong>책임 주체</strong> — 매도인·중개상·점검자 중 책임 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (자동차 거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 재물 교부와 사기죄 성립 범위',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 기망행위로 범인이 스스로 재물을 취득하지 않고 제3자로 하여금 교부받게 한 경우에도, 제3자로 하여금 재물을 취득하게 할 의사가 있으면 사기죄가 성립하고 그 의사는 미필적 인식으로도 충분하다고 보았으며, 기망으로 인한 재물 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고 그로 인한 이익이 누구에게 귀속되는지는 성립에 영향이 없다고 판시했습니다. 주행거리를 속여 매매대금을 교부받은 사안에서도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '주행거리 조작 + 정상가 매도 + 이력 불일치 결합 시 기망 고의·재물 교부 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '매매상이 몰랐다는데 사기가 되나요?',
        answer:
          '<strong>조작 사실을 알았거나 미필적으로 인식한 정황이 있는지가 핵심인 영역입니다.</strong> 성능점검·고지 내용을 정리하세요.',
      },
      {
        question: '주행거리가 조작됐는지 어떻게 확인하나요?',
        answer:
          '<strong>정비 이력·보험개발원 기록으로 실제 주행거리를 대조하는 것이 핵심인 영역입니다.</strong> 이력 자료를 발급해 비교하세요.',
      },
      {
        question: '차를 이미 탔는데도 환급이 되나요?',
        answer:
          '<strong>계약 해제·차액 손해배상으로 다툼을 검토할 수 있는 영역입니다.</strong> 적정 시세와의 차액을 정리하세요.',
      },
      {
        question: '계약서에 \'무사고\'만 적혀 있는데 어떻게 하나요?',
        answer:
          '<strong>주행거리는 별도 고지 대상으로, 표시·고지와 실제의 불일치를 다투는 영역입니다.</strong> 점검기록부를 확인하세요.',
      },
      {
        question: '형사와 민사를 같이 진행할 수 있나요?',
        answer:
          '<strong>사기 고소와 계약 해제·손해배상은 병행해볼 수 있는 영역입니다.</strong> 자료를 갖춰 함께 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-secondhand-deal-response-track' },
      { label: '기망 고의 입증', href: '/guide/fraud/fraud-deception-intent-track' },
      { label: '계약 해제·손해배상', href: '/guide/fraud/fraud-contract-rescission-track' },
      { label: '부당이득 반환 청구', href: '/guide/fraud/fraud-unjust-enrichment-track' },
    ],
  },

  // ─── 2. fraud-crypto-exchange-fake-withdrawal-block-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-exchange-fake-withdrawal-block-track',
    keyword: '가짜 코인거래소 출금정지 사기',
    questionKeyword: '추천받은 코인거래소에 입금했더니 처음엔 수익이 찍혀서 더 넣었는데, 막상 출금하려니 \'세금\'·\'보증금\'을 더 내라며 출금이 막혔어요. 알고 보니 가짜 거래소였는데 돈을 돌려받을 수 있나요?',
    ctaKeyword: '가짜 코인거래소 출금정지 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '가짜 코인거래소 출금정지 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '가짜 코인거래소에 입금 후 출금이 막히고 추가 입금을 요구받았다면 편취액·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「지인이나 리딩방에서 추천받은 코인거래소에 입금했더니 처음엔 수익이 찍혀 안심하고 더 넣었는데, 막상 출금하려니 \'세금\'·\'보증금\'·\'인증비\'를 더 내야 한다며 출금이 막힌 분의 상황입니다. 시키는 대로 추가 입금을 했는데도 출금은 끝내 안 되고, 알고 보니 실체 없는 가짜 거래소였어요. 모은 돈을 통째로 잃을까 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 수익이 나는 것처럼 화면을 꾸며 입금을 유도하고 출금을 막은 정황은 기망행위로 평가될 여지가 있고, 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 대가가 일부 지급되거나 \'수익\'이 일부 표시됐더라도 편취액은 교부한 금원 전부로 보되, 특정경제범죄법 적용 시 이익 가액 산정은 엄격해야 한다고 본 사례 흐름이 있는 영역입니다. 가짜 거래소 + 수익 표시 + 출금 차단·추가 입금 요구 결합은 \'편취액·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래소·입금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 고소 ⑤ 환급·추적 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 코인거래소 출금정지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입금·기망 고의·지급정지·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래소·입금 정리</strong> — 거래소 주소·앱·추천 경위·입금 내역·수익 화면 정리.</li>\n<li><strong>② 기망 고의</strong> — 가짜 수익 화면으로 입금을 유도하고 출금을 막은 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 국내 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·추적</strong> — 피해구제·자금 흐름 추적·민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출금하려 할 때마다 명목을 바꿔 추가 입금을 요구하는 흐름은 전형적인 가짜 거래소 기망 정황입니다. 추가 입금을 멈추고 국내 송금 계좌의 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 입금 중단·자료 보존 (즉시)</strong> — 거래소 화면·입금 내역·대화 보존, 추가 입금 중단.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 국내 계좌 송금분은 은행·112로 지급정지 요청.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·금감원 상담 (2개월 내)</strong> — 은행 피해구제신청·금융감독원 1332 상담.</li>\n<li><strong>5단계 — 자금 추적·민사 청구 (이후)</strong> — 자금 흐름 추적·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 코인거래소 출금정지 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 입금·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래소 URL·앱·계정 화면 캡처 (거래소 정황)</strong></li>\n<li><strong>추천·권유 대화·리딩방 기록 (유도 정황)</strong></li>\n<li><strong>입금·송금 내역 (피해 금액)</strong></li>\n<li><strong>수익 표시·출금 거부 화면 캡처</strong></li>\n<li><strong>추가 입금 요구(세금·보증금) 메시지</strong></li>\n<li><strong>송금 계좌·연락처 정보</strong></li>\n<li><strong>사건사고사실확인원·은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'출금하려면 세금·보증금을 더 내라\'는 메시지와 수익 표시·출금 거부 화면이 핵심 자료입니다. 입금부터 출금 거부까지의 흐름을 시간 순으로 정리해두면 기망 정황과 편취액 산정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 가짜 수익 화면으로 입금을 유도하고 출금을 막았는지.</li>\n<li><strong>편취액 산정</strong> — 일부 \'수익\'이 표시됐어도 입금 전부가 피해액인지.</li>\n<li><strong>자발적 투자 항변</strong> — \'스스로 투자한 것\'이라는 상대 주장의 다툼.</li>\n<li><strong>송금 수단</strong> — 국내 계좌면 지급정지·피해구제 대상.</li>\n<li><strong>국외·코인 흐름</strong> — 자금이 코인·국외로 빠졌을 때의 추적 한계.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>검찰청 1301 (형사 사건 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취액 산정과 특정경제범죄법 적용 기준',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 대가가 일부 지급됐어도 편취액은 교부받은 금원 전부이며 이는 특정경제범죄법 위반죄에서도 같다고 보면서, 다만 이익 가액으로 가중 처벌하는 같은 법 제3조는 죄형균형·책임주의에 비추어 엄격히 산정해야 하고 가액을 구체적으로 산정할 수 없으면 적용할 수 없다고 판시했습니다. 가짜 거래소에 입금한 금원의 편취액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '가짜 거래소 + 수익 표시 + 출금 차단·추가 입금 요구 결합 시 편취액·지급정지 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 투자하겠다고 입금한 건데 사기가 되나요?',
        answer:
          '<strong>가짜 거래소라는 점을 속여 입금을 유도하고 출금을 막은 정황이 있으면 기망으로 다툴 수 있는 영역입니다.</strong> 화면·대화를 확보하세요.',
      },
      {
        question: '화면에 수익이 일부 찍혔는데 피해액은 얼마인가요?',
        answer:
          '<strong>표시된 \'수익\'과 무관하게 입금한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입출금 흐름을 정리하세요.',
      },
      {
        question: '출금하려면 세금을 내라는데 더 내야 하나요?',
        answer:
          '<strong>추가 입금 요구는 전형적인 출금 차단 수법이므로 멈추고 신고를 검토하는 것이 중요한 영역입니다.</strong> 더 내기 전에 상담하세요.',
      },
      {
        question: '코인으로 보냈는데도 환급이 되나요?',
        answer:
          '<strong>국내 계좌로 송금한 부분은 지급정지·피해구제를 검토할 수 있는 영역입니다.</strong> 송금 계좌 정보부터 확보하세요.',
      },
      {
        question: '거래소가 사라졌는데 신고가 되나요?',
        answer:
          '<strong>송금 계좌·URL·대화 기록으로 수사기관이 추적할 수 있는 영역입니다.</strong> 가진 자료를 모두 모아 신고하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자사기 기망 입증', href: '/guide/fraud/fraud-investment-deception-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '리딩방·코인 사기 대응', href: '/guide/fraud/fraud-crypto-leading-room-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-prepaid-membership-gym-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-prepaid-membership-gym-closure-track',
    keyword: '헬스장 선불 회원권 폐업 잠적',
    questionKeyword: '장기 할인을 받으려고 헬스장 회원권을 1년치 선결제했는데, 얼마 못 가 헬스장이 갑자기 문을 닫고 운영자가 연락이 끊겼어요. 남은 기간 환불도 안 되는데 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '헬스장 선불 회원권 폐업 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 선불 회원권 폐업 사기 — 5단계 환급·신고 점검 | 로앤가이드',
      description:
        '헬스장 회원권을 선결제했는데 갑자기 폐업·잠적했다면 편취 고의·환급·피해구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「장기 할인을 받으려고 헬스장 1년치 회원권·PT를 한꺼번에 선결제했는데, 얼마 다니지도 못해 헬스장이 갑자기 문을 닫고 운영자는 연락이 끊긴 분의 상황입니다. 남은 기간 환불 요청도 무시되고, 같은 피해를 본 회원이 여럿이라는 이야기까지 들려 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 폐업이 임박했음을 알면서도 장기 회원권을 팔아 선불금을 받은 정황은 기망행위로 평가될 여지가 있으나, 단순한 경영난·채무불이행과는 구별이 필요합니다. 판례는 공사대금 등 편취 사기에서 편취 고의는 계약 당시를 기준으로 이행할 의사·능력이 있었는지로 판단해야 하고, 행정법규 위반 등 사정만으로 곧바로 기망행위라 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 선불 결제 + 폐업·잠적 + 환불 거부 결합은 \'편취 고의·환급·피해구제\' 절차가 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 편취 고의 ③ 환급·항변권 ④ 형사 신고 ⑤ 집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 선불 회원권 폐업 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·편취 고의·환급·신고·집단 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 회원권·PT 계약서·결제 수단·이용 기간·잔여 기간 정리.</li>\n<li><strong>② 편취 고의</strong> — 폐업이 임박함을 알면서 장기 회원권을 판 정황 정리.</li>\n<li><strong>③ 환급·항변권</strong> — 카드 할부분 항변권·잔여 이용분 환급 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 집단 대응</strong> — 동일 피해 회원 공동 신고·소비자 분쟁조정 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결제 시점에 폐업이 임박했음을 알았는지, 즉 계약 당시 서비스를 제공할 의사·능력이 있었는지가 단순 폐업과 사기를 가르는 핵심입니다. 카드 할부 결제분은 항변권 행사 가능성을 함께 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 한국소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 회원권 계약서·결제 내역·폐업 공지·대화 보존.</li>\n<li><strong>2단계 — 카드 항변권 신청 (할부 잔여 시)</strong> — 잔여 할부분에 대한 카드사 항변권 신청 검토.</li>\n<li><strong>3단계 — 소비자 상담·분쟁조정 (1~2주)</strong> — 한국소비자원 1372 상담·피해구제 신청.</li>\n<li><strong>4단계 — 경찰 신고 (병행)</strong> — 폐업 임박 인지 등 기망 정황 정리해 사기 신고.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 잔여 이용분 환급·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 선불 회원권 폐업 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·편취 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>회원권·PT 계약서 (계약 기간·금액)</strong></li>\n<li><strong>카드·계좌 결제 내역 (할부 여부·피해 금액)</strong></li>\n<li><strong>이용 기록·잔여 기간 자료</strong></li>\n<li><strong>폐업 공지·연락 두절 정황 캡처</strong></li>\n<li><strong>환불 요청·거부 대화 기록</strong></li>\n<li><strong>동일 피해 회원 연락처·사례 정리</strong></li>\n<li><strong>소비자원 상담·분쟁조정 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카드 할부로 결제했다면 잔여 할부분에 대한 항변권이 환급의 빠른 경로가 될 수 있습니다. 결제 수단·잔여 기간을 먼저 정리하고, 폐업 직전 장기 회원권을 적극 권유한 정황을 모아두면 기망 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 계약 당시 폐업이 임박함을 알았는지.</li>\n<li><strong>단순 폐업과 구별</strong> — 경영난·채무불이행인지, 처음부터 편취인지.</li>\n<li><strong>결제 수단</strong> — 카드 할부면 항변권 행사 가능 여부.</li>\n<li><strong>잔여 이용분</strong> — 환급 범위·정산 기준.</li>\n<li><strong>책임 주체</strong> — 운영자·양수인·프랜차이즈 본사 책임.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372 (소비자상담·분쟁조정)</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변권 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의의 판단 시점과 사기죄 성립 기준',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄의 편취 범의는 계약 당시를 기준으로 이행할 의사·능력이 없음에도 이행할 것처럼 속였는지에 따라 판단해야 하고, 거래 경위·이행 과정 등 객관적 사정을 종합해야 하며, 사기죄의 보호법익은 재산권이므로 행정법규 위반 등 사정만으로 곧바로 기망행위라 단정할 수 없다고 판시했습니다. 폐업 직전 장기 회원권을 판 사안에서 편취 고의를 살펴볼 때에도 계약 당시 이행 의사·능력을 기준으로 검토해볼 수 있습니다.',
        takeaway: '선불 결제 + 폐업·잠적 + 환불 거부 결합 시 편취 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '그냥 폐업한 것도 사기가 되나요?',
        answer:
          '<strong>계약 당시 폐업이 임박함을 알면서 장기 회원권을 팔았는지가 핵심인 영역입니다.</strong> 결제 시점 정황을 정리하세요.',
      },
      {
        question: '카드 할부로 냈는데 환급 방법이 다른가요?',
        answer:
          '<strong>잔여 할부분은 카드사 항변권으로 환급을 다툴 수 있는 영역입니다.</strong> 결제내역과 할부 잔액을 확인하세요.',
      },
      {
        question: '소비자원과 경찰 중 어디부터 가나요?',
        answer:
          '<strong>환급은 소비자원·항변권, 기망은 경찰 신고로 병행 검토하는 영역입니다.</strong> 계약·결제 자료를 함께 준비하세요.',
      },
      {
        question: '같은 피해 회원이 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 피해 회원의 공동 신고·분쟁조정을 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
      {
        question: '운영자가 바뀌었다는데 누구에게 청구하나요?',
        answer:
          '<strong>양수인·본사 등 책임 주체를 따져 청구 대상을 정하는 영역입니다.</strong> 계약·양도 관계를 확인하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '카드 항변권 활용', href: '/guide/fraud/fraud-installment-defense-track' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-track' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-job-recruitment-upfront-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-job-recruitment-upfront-deposit-track',
    keyword: '취업 빙자 선입금 사기',
    questionKeyword: '\'바로 채용해 주겠다\'며 교육비·보증금·장비대금을 먼저 내라고 해서 입금했는데, 막상 일은 시작되지 않고 담당자가 연락이 끊겼어요. 취업을 빌미로 돈만 받은 것 같은데 사기로 다툴 수 있나요?',
    ctaKeyword: '취업 빙자 선입금 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '취업 빙자 선입금 사기 — 5단계 편취 범의·환급 점검 | 로앤가이드',
      description:
        '취업을 빌미로 교육비·보증금을 선입금했는데 일이 시작되지 않고 잠적했다면 편취 범의·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「\'바로 채용해 주겠다\', \'교육만 받으면 정규직이 된다\'는 말에 교육비·보증금·장비대금을 먼저 입금한 분의 상황입니다. 그런데 막상 일은 시작되지 않거나 형식적인 교육만 반복되다, 어느 순간 담당자와 연락이 끊겼어요. 취업이 절박한 마음을 이용해 돈만 받은 것 같아 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 채용 의사·능력 없이 취업을 빌미로 선입금만 받은 정황은 기망행위로 평가될 여지가 있고, 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 편취의 범의를 범행 전후의 재력·거래 이행 과정 등 객관적 사정으로 판단하고 확정적 고의가 아닌 미필적 고의로도 족하다고 본 사례 흐름이 있는 영역입니다. 채용 약속 + 선입금 요구 + 업무 미개시·연락 두절 결합은 \'편취 범의·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 채용·입금 정리 ② 편취 범의 ③ 지급정지 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 취업 빙자 선입금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채용·편취 범의·지급정지·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채용·입금 정리</strong> — 채용 공고·면접·약속 내용·입금 명목(교육비·보증금) 정리.</li>\n<li><strong>② 편취 범의</strong> — 채용 의사·능력 없이 선입금만 받으려 한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 피해구제·부당이득 반환·손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 채용을 약속하며 선입금만 받고 정작 업무는 시작되지 않은 흐름, 그리고 같은 수법으로 여러 명에게 돈을 받은 정황이 편취 범의를 보여주는 핵심입니다. 계좌 송금분은 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌 송금분은 은행·112로 지급정지 요청, 공고·대화·입금 보존.</li>\n<li><strong>2단계 — 채용·업체 정보 정리 (1주)</strong> — 채용 공고·업체 실체·담당자 정보 정리.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1~2주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·노동부 상담 (병행)</strong> — 은행 피해구제신청·고용노동부 1350 채용절차 상담.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 부당이득·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">취업 빙자 선입금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채용·편취 범의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>채용 공고·모집글 캡처 (모집 정황)</strong></li>\n<li><strong>면접·채용 약속 대화·녹취 (기망 정황)</strong></li>\n<li><strong>입금 명목(교육비·보증금·장비대금) 안내 기록</strong></li>\n<li><strong>계좌 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>업체·담당자 연락처·사업자 정보</strong></li>\n<li><strong>업무 미개시·연락 두절 정황 기록</strong></li>\n<li><strong>동일 수법 피해 사례 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'채용 후 환급해 준다\'며 교육비·보증금을 받는 패턴은 채용절차법상으로도 문제될 수 있습니다. 채용 약속과 입금 명목 안내가 담긴 대화를 시간 순으로 정리하고, 같은 수법 피해 사례를 모아두면 편취 범의 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 채용 의사·능력 없이 선입금만 받으려 했는지(미필적 고의 포함).</li>\n<li><strong>입금 명목</strong> — 교육비·보증금·장비대금이 정당한 비용인지.</li>\n<li><strong>채용절차 위반</strong> — 구직자에게 비용을 전가한 채용절차법 위반 소지.</li>\n<li><strong>송금 수단</strong> — 계좌 송금이면 지급정지·피해구제 대상.</li>\n<li><strong>업체 실체</strong> — 사업자·담당자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>고용노동부 1350 (채용절차·구직 피해 상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단 방법과 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취 범의는 자백이 없는 이상 범행 전후의 재력·환경·범행 내용·거래 이행 과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 판시했습니다. 채용을 빌미로 선입금만 받고 업무를 시작하지 않은 사안에서 편취 범의를 살펴볼 때에도 거래 경위·이행 과정 등 객관적 사정을 종합하는 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '채용 약속 + 선입금 요구 + 업무 미개시·연락 두절 결합 시 편취 범의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '교육비라고 받았는데 사기가 되나요?',
        answer:
          '<strong>채용 의사 없이 명목만 교육비로 선입금을 받았는지가 핵심인 영역입니다.</strong> 채용 약속·입금 안내 대화를 확보하세요.',
      },
      {
        question: '실제로 교육을 일부 받았는데도 다툴 수 있나요?',
        answer:
          '<strong>형식적 교육만으로 채용을 가장했는지, 업무가 끝내 시작됐는지가 판단 요소인 영역입니다.</strong> 이행 경위를 정리하세요.',
      },
      {
        question: '구직자에게 돈을 받는 게 원래 불법 아닌가요?',
        answer:
          '<strong>채용을 빌미로 비용을 전가한 부분은 채용절차법 위반으로도 다툴 수 있는 영역입니다.</strong> 노동부 상담을 함께 검토하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 인출 전 신속 신고가 중요합니다.',
      },
      {
        question: '같은 피해자가 많은데 함께 신고할 수 있나요?',
        answer:
          '<strong>동일 수법 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '기망 고의 입증', href: '/guide/fraud/fraud-deception-intent-track' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-government-subsidy-impersonation-track ───
  {
    domain: 'fraud',
    slug: 'fraud-government-subsidy-impersonation-track',
    keyword: '정부 지원금 사칭 송금 유도',
    questionKeyword: '정부 지원금·환급금을 준다는 문자·전화를 받고 안내대로 따라 했는데, 알고 보니 제 계좌로 다른 피해자 돈이 들어오거나 제가 돈을 송금하게 됐어요. 정부 사칭 사기 같은데 어떻게 대응하나요?',
    ctaKeyword: '정부 지원금 사칭 송금 유도 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '정부 지원금 사칭 사기 — 5단계 재물·지급정지 점검 | 로앤가이드',
      description:
        '정부 지원금·환급금을 준다는 사칭에 속아 송금하거나 계좌가 이용됐다면 재물성·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「\'정부 지원금·세금 환급금을 받으려면 안내대로 하라\'는 문자·전화에 속아, 시키는 대로 앱을 깔거나 본인 인증·송금을 한 분의 상황입니다. 알고 보니 공공기관을 사칭한 사기였고, 제 계좌로 다른 피해자의 돈이 들어왔거나 제가 직접 돈을 보내 버린 상황이라 당혹스럽고 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 공공기관·지원금을 사칭해 송금을 유도한 정황은 기망행위로 평가될 여지가 있고, 계좌로 현금을 송금받은 경우 그 객체는 재물에 해당하며, 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 피해자가 기망당해 현금을 계좌로 송금한 경우 그 객체는 재물에 해당한다고 보고, 계좌 명의자의 인출행위 등 죄책을 사안별로 판단해온 사례 흐름이 있는 영역입니다. 공공기관 사칭 + 지원금 미끼 + 송금·계좌 이용 결합은 \'재물성·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 사칭·송금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·명의도용 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정부 지원금 사칭 송금 유도 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사칭·기망 고의·지급정지·신고·명의도용 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사칭·송금 정리</strong> — 사칭 문자·전화·앱 설치·송금·계좌 이용 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 공공기관·지원금을 사칭해 송금을 유도한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 본인 송금분·계좌 입금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·전기통신금융사기 신고 검토.</li>\n<li><strong>⑤ 명의도용 대응</strong> — 계좌·명의 도용 시 명의도용 신고·계좌 정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정부·공공기관은 문자·전화로 송금이나 앱 설치, 본인 인증을 요구하지 않습니다. 내가 송금한 경우와 내 계좌가 이용된 경우 대응이 달라, 송금·입금 흐름을 빨리 정리하고 지급정지를 검토하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 은행·112로 지급정지 요청, 문자·통화·앱·송금 내역 보존.</li>\n<li><strong>2단계 — 악성앱·정보 점검 (즉시)</strong> — 악성앱 삭제·휴대폰 점검, 유출된 인증정보 변경.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·금감원 상담 (2개월 내)</strong> — 은행 피해구제신청·금융감독원 1332 상담.</li>\n<li><strong>5단계 — 환급·명의도용 대응 (이후)</strong> — 채권소멸 후 환급, 명의도용 시 계좌·명의 정정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">정부 지원금 사칭 송금 유도 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사칭·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>사칭 문자·전화·발신번호 기록 (사칭 정황)</strong></li>\n<li><strong>안내 화면·앱 설치·링크 캡처 (유도 정황)</strong></li>\n<li><strong>송금·이체 내역 또는 계좌 입금 내역 (피해 흐름)</strong></li>\n<li><strong>본인 계좌 거래 내역 (계좌 이용 정황)</strong></li>\n<li><strong>상대 계좌·연락처 정보</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서·명의도용 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사칭 발신번호·안내 링크·송금 내역이 핵심 자료입니다. 내가 송금한 경우와 내 계좌가 통장으로 이용된 경우는 대응이 달라, 송금·입금 흐름을 명확히 구분해 정리해두면 신고와 환급에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 공공기관·지원금을 사칭해 송금을 유도했는지.</li>\n<li><strong>객체의 성질</strong> — 계좌로 송금받은 현금이 재물에 해당하는지.</li>\n<li><strong>피해 흐름</strong> — 본인이 송금한 것인지, 계좌가 이용된 것인지.</li>\n<li><strong>지급정지 시점</strong> — 신고·지급정지 시점이 환급에 미치는 영향.</li>\n<li><strong>명의도용</strong> — 계좌·명의가 도용된 경우의 정정·면책.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·피해구제 상담)</strong></li>\n<li><strong>한국인터넷진흥원 118 (악성앱·개인정보 침해 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계좌 송금 사기의 객체와 인출행위의 죄책',
        summary:
          '대법원 2010도6256(대법원, 2010.12.09 선고) 영역에서 법원은 피해자가 기망당해 현금을 계좌로 송금한 경우 그 사기죄의 객체는 재물에 해당하는 현금을 송금 형식으로 교부한 것에 불과하고, 계좌를 양도해 사기를 방조한 종범이 그 계좌의 돈을 인출하더라도 이는 예금명의자로서 반환을 청구한 결과일 뿐이어서 별도의 장물취득죄로 벌할 수 없다고 판시했습니다. 정부 사칭에 속아 계좌로 돈이 오간 사안에서 객체의 성질과 관련자 죄책을 살펴볼 때에도 이러한 법리를 검토해볼 수 있습니다.',
        takeaway: '공공기관 사칭 + 지원금 미끼 + 송금·계좌 이용 결합 시 재물성·지급정지 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '정부 지원금이라는 문자, 진짜와 어떻게 구별하나요?',
        answer:
          '<strong>공공기관은 문자·전화로 송금·앱 설치·인증을 요구하지 않는 점이 핵심인 영역입니다.</strong> 의심되면 공식 번호로 확인하세요.',
      },
      {
        question: '제 계좌로 모르는 돈이 들어왔는데 어떻게 하나요?',
        answer:
          '<strong>임의로 출금·이체하지 말고 즉시 은행·112에 신고해 지급정지를 검토하는 영역입니다.</strong> 인출하면 더 불리할 수 있습니다.',
      },
      {
        question: '제가 직접 송금했는데도 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
      {
        question: '앱을 깔았는데 정보가 유출됐을까요?',
        answer:
          '<strong>악성앱은 정보 유출 위험이 있어 삭제·점검과 인증정보 변경을 검토하는 영역입니다.</strong> 한국인터넷진흥원 118에 상담하세요.',
      },
      {
        question: '제 명의 계좌가 통장으로 쓰였다면 저도 처벌받나요?',
        answer:
          '<strong>인식 여부에 따라 달라지며 피해자로 대응할 수 있는 경우도 있는 영역입니다.</strong> 경위를 정리해 상담하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 즉시 대응', href: '/guide/fraud/fraud-voice-phishing-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '기관 사칭 사기 대응', href: '/guide/fraud/fraud-impersonation-response-track' },
      { label: '명의도용·통장 이용 대응', href: '/guide/fraud/fraud-account-misuse-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 6. fraud-loan-brokerage-advance-fee-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-brokerage-advance-fee-falsely-accused-defense',
    keyword: '대출 중개 선수수료 무고',
    questionKeyword: '대출을 알아보다 \'중개 수수료를 받아 전달해 주면 된다\'는 말에 제 계좌를 통해 돈을 받고 보냈는데, 그 돈이 보이스피싱 피해금이라며 사기 방조·횡령으로 입건됐어요. 범행인 줄 몰랐는데 어떻게 방어하나요?',
    ctaKeyword: '대출 중개 선수수료 방조 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '대출 중개 수수료 방조 방어 — 5단계 고의·횡령 점검 | 로앤가이드',
      description:
        '대출 중개 수수료라며 계좌로 받은 돈이 피해금이라 방조·횡령으로 입건됐다면 고의·횡령 불성립 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「대출을 알아보다 \'중개·전달 수수료를 받아 넘겨주면 일정 금액을 주겠다\'는 제안을 받고, 별 의심 없이 본인 계좌로 돈을 받아 전달했는데, 그 돈이 전기통신금융사기 피해금이라며 사기 방조·횡령 혐의로 입건된 분의 상황입니다. 정상적인 대출 업무인 줄 알았는데 한순간에 가담자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 사기 방조범이 성립하려면 정범의 사기 범행과 자신의 방조에 대한 인식(고의)이 인정돼야 한다는 점, 그리고 사기 피해금을 송금받은 후 인출한 행위가 피해자에 대한 별도의 횡령죄를 구성하지 않는다는 점이 핵심 쟁점입니다. 판례는 보이스피싱 범인이 피해금을 송금받으면 편취가 기수에 이르고, 그 후 계좌에서 인출하더라도 피해자와 위탁·신임관계가 없어 횡령죄를 구성하지 않으며, 이는 접근매체를 양도해 방조한 종범이 임의로 인출한 경우에도 같다고 본 사례 흐름이 있는 영역입니다. 단순 전달이라는 사정만으로 곧바로 방조 고의가 인정되는 것은 아니라는 평가가 가능한 영역입니다. 중개 빌미 + 계좌 전달 + 범행 인식 다툼 결합은 \'고의·횡령 불성립\' 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위 정리 ② 인식 다툼 ③ 죄책 검토 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대출 중개 수수료 방조 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·인식·죄책·증거·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 대출 상담·중개 제안·수수료 약속·계좌 전달 과정 정리.</li>\n<li><strong>② 인식 다툼</strong> — 정범의 사기 범행과 방조에 대한 인식이 있었는지 검토.</li>\n<li><strong>③ 죄책 검토</strong> — 인출행위가 별도 횡령죄를 구성하는지 검토.</li>\n<li><strong>④ 증거 검토</strong> — 대화·송금·전달 정황 등 객관 자료 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사기 방조는 정범의 범행과 방조에 대한 인식이 증명돼야 하고, 피해금을 인출했더라도 피해자에 대한 별도 횡령죄는 성립하지 않을 수 있습니다. 단순 전달이라는 사정만으로 곧바로 방조 고의가 인정되는 것은 아니어서, 제안 경위·인식 부족 정황을 정리해 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 대출 상담·중개 제안·수수료 약속·전달 경위 정리.</li>\n<li><strong>2단계 — 인식 부족 정황 확보 (1주)</strong> — 사기 범행 인식이 없었음을 보여주는 대화·정황 확보.</li>\n<li><strong>3단계 — 고의·횡령 죄책 정리 (2주)</strong> — 방조 고의·인출행위의 횡령 불성립 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출 중개 선수수료 방조 고의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·인식·죄책 갈래입니다.</strong></p>\n<ul>\n<li><strong>대출 상담·중개 제안 메시지 (제안 경위)</strong></li>\n<li><strong>수수료 약속·전달 지시 대화 기록 (인식 정황)</strong></li>\n<li><strong>본인 계좌 입금·인출·전달 내역 (자금 흐름)</strong></li>\n<li><strong>정상 대출 업무로 인식한 정황 자료</strong></li>\n<li><strong>상대방 연락처·신분 정보</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>피해 회복·선처 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'사기 범행 인식이 있었는지\'와 \'인출이 별도 횡령이 되는지\'입니다. 중개 제안·수수료 약속이 담긴 대화를 확보하고, 자금이 들어와 전달되기까지의 흐름을 시간 순으로 정돈해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>방조 고의</strong> — 정범의 사기 범행과 방조에 대한 인식이 증명됐는지.</li>\n<li><strong>횡령 성부</strong> — 피해금 인출이 별도 횡령죄를 구성하는지.</li>\n<li><strong>미필적 인식</strong> — 범행에 쓰일 가능성을 인식·용인했는지.</li>\n<li><strong>경위·동기</strong> — 대출 상담·수수료 제안 경위가 인식 판단에 미치는 영향.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 방조와 피해금 인출의 횡령 불성립',
        summary:
          '대법원 2017도3045(대법원, 2017.05.31 선고) 영역에서 법원은 전기통신금융사기 범인이 피해자를 기망해 피해금을 사기이용계좌로 송금받으면 편취가 기수에 이르고, 그 후 현금을 인출하더라도 피해자와 위탁·신임관계가 없어 보관자 지위가 인정되지 않으므로 별도의 횡령죄를 구성하지 않으며, 이는 접근매체를 양도해 사기를 방조한 종범이 임의로 인출한 경우에도 같다고 판시했습니다. 대출 중개를 가장해 계좌로 받은 돈을 전달·인출한 사안의 죄책을 살펴볼 때에도 이러한 법리를 검토해볼 수 있습니다.',
        takeaway: '중개 빌미 + 계좌 전달 + 범행 인식 다툼 결합 시 고의·횡령 불성립 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '돈을 받아 전달만 했는데도 처벌 대상이 되나요?',
        answer:
          '<strong>사기 범행 인식이 증명돼야 하는 영역으로, 단순 전달만으로 방조 고의가 곧바로 인정되는 것은 아닙니다.</strong> 제안 경위를 정리하세요.',
      },
      {
        question: '제 계좌에서 돈을 뺐는데 횡령까지 되나요?',
        answer:
          '<strong>피해금 인출은 피해자에 대한 별도 횡령죄를 구성하지 않을 수 있는 영역입니다.</strong> 자금 흐름과 인식 여부를 정리하세요.',
      },
      {
        question: '대출인 줄 알았다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>중개 제안·수수료 약속·정상 업무로 믿은 정황이 인식 다툼의 자료가 되는 영역입니다.</strong> 대화 기록을 확보하세요.',
      },
      {
        question: '수수료를 받았는데 더 불리한가요?',
        answer:
          '<strong>대가 수령은 경위의 하나일 뿐, 범행 인식 여부를 종합해 판단하는 영역입니다.</strong> 제안 맥락을 함께 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 방조 혐의 방어', href: '/guide/fraud/fraud-aiding-defense-track' },
      { label: '대포통장 명의대여 대응', href: '/guide/fraud/fraud-account-lending-track' },
      { label: '고의·범의 다툼', href: '/guide/fraud/fraud-intent-dispute-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/fraud/fraud-public-defender-track' },
    ],
  },

  // ─── 7. sex-crime-company-dinner-intoxication-contact-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-intoxication-contact-track',
    keyword: '회식 만취 추행',
    questionKeyword: '회식 자리에서 술에 취한 상사·동료가 제 몸을 만지거나 끌어안았어요. 만취 상태라 그 자리에서 강하게 거부하지 못했는데, 이런 경우도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '회식 만취 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '회식 만취 추행 — 5단계 추행·증거 점검 | 로앤가이드',
      description:
        '회식에서 취한 상사·동료가 신체를 만지거나 끌어안았다면 추행 해당성·증거 보전·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「회식 자리에서 술에 취한 상사·동료가 갑자기 몸을 만지거나 끌어안아 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 분위기와 직장 관계, 만취 상태가 겹쳐 그 자리에서 강하게 거부하기도 어려웠고, \'술자리에서 있을 수 있는 일\'로 넘겨야 하나 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 강제추행죄에 폭행행위 자체가 추행으로 인정되는 이른바 기습추행이 포함되고, 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없으며, 추행 해당 여부는 피해자의 의사·관계·경위·행위태양·상황을 종합해 신중히 판단한다고 본 사례 흐름이 있는 영역입니다. 회식·음주 + 신체접촉 + 즉시 거부 곤란 결합은 \'추행 해당성·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 관계·상황 ③ 증거 보전 ④ 직장 대응 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 만취 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·관계·증거·직장 대응·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식(만짐·끌어안음)·시점, 거부 의사 정리.</li>\n<li><strong>② 관계·상황</strong> — 직장 관계·음주 분위기로 즉시 거부가 어려웠던 사정 정리.</li>\n<li><strong>③ 증거 보전</strong> — 식당·이동 구간 CCTV·메시지·동석자 진술 확보.</li>\n<li><strong>④ 직장 대응</strong> — 직장 내 신고·불이익 금지·분리 조치 검토.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행의 폭행은 의사를 억압할 정도까지 요하지 않아, 회식에서의 갑작스러운 신체접촉도 기습추행으로 평가될 수 있는 영역입니다. 직장 관계·음주로 즉시 거부가 어려웠던 사정과 동석자 진술을 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 식당·이동 구간 CCTV 보존 요청, 직후 메시지·동석자 확보.</li>\n<li><strong>2단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담으로 대응 방향 정리.</li>\n<li><strong>3단계 — 직장 내 신고·보호 (병행)</strong> — 직장 내 고충·신고 절차, 불이익 금지·분리 조치 요청.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 112 신고, 행위태양·관계·상황 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 만취 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·관계·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·방식 메모 (구체적 행위태양)</strong></li>\n<li><strong>회식 일시·장소·참석자 정보 (관계·경위)</strong></li>\n<li><strong>식당·이동 구간 CCTV 보존 요청 자료</strong></li>\n<li><strong>직후 통화·메시지 기록 (즉시 호소 정황)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n<li><strong>직장 내 신고·고충 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식 사건은 동석자 진술과 식당·이동 구간 CCTV가 중요한 증거가 됩니다. 회식 일시·장소·참석자를 정리하고, 직후 동료에게 호소한 메시지나 통화 정황을 남겨두면 행위태양 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연·실수인지, 성적 수치심을 일으키는 추행인지.</li>\n<li><strong>기습추행</strong> — 의사를 억압할 정도까지 요하지 않는 추행 해당 여부.</li>\n<li><strong>가해자 음주</strong> — 만취가 책임에 영향을 주는지(심신장애 항변).</li>\n<li><strong>즉시 거부 정황</strong> — 직장·음주로 즉시 거부가 어려웠던 사정.</li>\n<li><strong>증거 시점</strong> — CCTV·동석자 진술 확보의 신속성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행 해당성의 종합 판단',
        summary:
          '대법원 2020도11186(대법원, 2020.12.10 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행으로 인정되는 경우가 포함되고 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없으며, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 보았습니다. 회식에서 취한 동료가 몸을 만지거나 끌어안은 행위가 추행에 해당하는지를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '회식·음주 + 신체접촉 + 즉시 거부 곤란 결합 시 추행 해당성·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '술자리에서 있을 수 있는 일 아닌가요?',
        answer:
          '<strong>성적 수치심을 일으키는 신체접촉이면 술자리라도 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '그 자리에서 강하게 거부 못 했는데 불리한가요?',
        answer:
          '<strong>기습추행은 의사를 억압할 정도의 폭행까지 요하지 않는 영역입니다.</strong> 직장·음주로 거부가 어려웠던 사정을 정리하세요.',
      },
      {
        question: '가해자가 \'취해서 기억이 안 난다\'고 하면 어떻게 되나요?',
        answer:
          '<strong>만취가 곧바로 면책되는 것은 아니며 사안별로 판단되는 영역입니다.</strong> 행위태양·동석자 진술을 확보하세요.',
      },
      {
        question: '같은 직장이라 신고하면 불이익이 있을까요?',
        answer:
          '<strong>신고를 이유로 한 불이익은 금지되고 분리·보호 조치를 요청할 수 있는 영역입니다.</strong> 직장 내 신고 절차를 함께 확인하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-act-report-procedure' },
      { label: '직장 내 성희롱·추행 대응', href: '/guide/sex-crime/sex-crime-workplace-response-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-gym-personal-training-session-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-personal-training-session-track',
    keyword: '헬스 PT 중 추행',
    questionKeyword: '헬스장에서 PT를 받던 중 트레이너가 자세 교정을 한다며 불필요하게 몸을 만지거나 밀착했어요. 운동 지도인 척했지만 분명히 불쾌하고 추행 같았는데, 이런 경우도 신고해 처벌을 물을 수 있나요?',
    ctaKeyword: 'PT 중 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'PT 중 추행 — 5단계 추행·증거 점검 | 로앤가이드',
      description:
        'PT 중 트레이너가 자세 교정을 빙자해 신체를 만지거나 밀착했다면 추행 해당성·증거 보전·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장에서 개인 PT를 받던 중, 트레이너가 \'자세 교정\'을 한다며 불필요하게 몸을 만지거나 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 운동 지도라는 명목이 섞여 그 자리에서 항의하기 애매했고, \'지도에 필요한 접촉이었다\'고 하면 어떻게 따져야 할지 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 추행의 고의로 의사에 반하는 유형력을 행사해 실행에 착수했으나 추행 결과에 이르지 못하면 강제추행미수가 성립하고, 이는 폭행행위 자체가 추행으로 인정되는 기습추행에도 같다고 보면서, 추행 해당 여부는 관계·경위·행위태양·상황을 종합해 판단한다고 본 사례 흐름이 있는 영역입니다. 지도 빙자 + 불필요한 신체접촉 + 항의 곤란 결합은 \'추행 해당성·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 지도 필요성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PT 중 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·지도 필요성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식·반복 여부, 거부 의사 표시 정리.</li>\n<li><strong>② 지도 필요성</strong> — 해당 접촉이 운동 지도에 통상 필요한 범위였는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 헬스장 CCTV·수업 예약·결제·메시지 확보.</li>\n<li><strong>④ 가해자 특정</strong> — 트레이너 성명·소속·근무 기록 등 특정 자료 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운동 지도에 통상 필요한 접촉을 넘어선 부위·방식·반복인지가 추행 판단의 핵심입니다. 헬스장 CCTV·수업 기록과 거부 의사 표시 정황을 함께 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 헬스장 CCTV 보존 요청, 수업 예약·결제·메시지 확보.</li>\n<li><strong>2단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담으로 대응 방향 정리.</li>\n<li><strong>3단계 — 가해자·소속 특정 (직후)</strong> — 트레이너 성명·소속·근무 기록 확보.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 112 신고, 행위태양·지도 필요성 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PT 중 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·지도 필요성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·방식 메모 (구체적 행위태양)</strong></li>\n<li><strong>PT 예약·결제·수업 일지 (관계·시간 입증)</strong></li>\n<li><strong>헬스장·운동 공간 CCTV 보존 요청 자료</strong></li>\n<li><strong>트레이너 성명·소속·근무 정보 (가해자 특정)</strong></li>\n<li><strong>수업 전후 메시지·통화 기록 (거부·호소 정황)</strong></li>\n<li><strong>목격자·다른 회원 진술</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PT는 예약·결제·CCTV로 가해자·시간 특정이 비교적 수월합니다. 운동 지도에 통상 필요한 접촉을 넘어선 부위·방식·반복을 구체적으로 메모하고, 수업 전후 거부·호소 메시지를 남겨두면 추행 해당성 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 자세 교정인지, 성적 수치심을 일으키는 추행인지.</li>\n<li><strong>지도 필요성</strong> — 접촉이 운동 지도에 통상 필요한 범위였는지.</li>\n<li><strong>기습추행·미수</strong> — 결과에 이르지 못한 경우의 미수 성립.</li>\n<li><strong>가해자 특정</strong> — 트레이너·소속을 특정할 수 있는지.</li>\n<li><strong>증거 시점</strong> — CCTV 보존·즉시 신고의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행미수의 성립과 추행 해당성 판단',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수했으나 추행 결과에 이르지 못하면 강제추행미수죄가 성립하고, 이는 폭행행위 자체가 추행으로 인정되는 기습추행의 경우에도 같다고 보았으며, 추행 해당 여부는 피해자의 의사·관계·경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 자세 교정을 빙자한 신체접촉이 추행에 해당하는지를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 불필요한 신체접촉 + 항의 곤란 결합 시 추행 해당성·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자세 교정이라고 하는데도 추행이 되나요?',
        answer:
          '<strong>운동 지도에 통상 필요한 범위를 넘은 접촉인지를 행위태양으로 판단하는 영역입니다.</strong> 접촉 부위·방식·반복을 정리하세요.',
      },
      {
        question: '결과적으로 크게 닿진 않았는데 처벌이 되나요?',
        answer:
          '<strong>의사에 반하는 유형력 행사로 착수하면 미수까지 성립할 수 있는 영역입니다.</strong> 당시 행위 경위를 정리하세요.',
      },
      {
        question: '헬스장 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>시간이 지나면 덮어쓰일 수 있어 헬스장·경찰을 통해 빨리 보존을 요청하는 것이 중요한 영역입니다.</strong> 즉시 신고하세요.',
      },
      {
        question: '트레이너를 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제·수업 일지·근무 기록으로 가해자를 특정할 수 있는 영역입니다.</strong> 관련 기록을 확보하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-act-report-procedure' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '가해자 특정·수사 협조', href: '/guide/sex-crime/sex-crime-offender-identification-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-public-restroom-hidden-camera-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-public-restroom-hidden-camera-track',
    keyword: '공중화장실 불법촬영',
    questionKeyword: '공중화장실에서 칸막이 위·아래로 휴대폰이 넘어오거나 몰래카메라가 설치된 걸 발견했어요. 너무 불안하고 제 모습이 찍혔을까 봐 무서운데, 어떻게 신고하고 촬영물 확산을 막을 수 있나요?',
    ctaKeyword: '공중화장실 불법촬영 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공중화장실 불법촬영 — 5단계 신고·삭제 점검 | 로앤가이드',
      description:
        '공중화장실에서 불법촬영을 당하거나 몰래카메라를 발견했다면 증거 보전·신고·촬영물 삭제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「공중화장실에서 칸막이 위·아래로 휴대폰이 넘어오거나 환기구·틈새에 설치된 몰래카메라를 발견한 분의 상황입니다. 내 모습이 촬영됐을까, 어딘가에 퍼지고 있을까 불안하고 무서운데, 무엇부터 신고하고 어떻게 확산을 막아야 할지 막막하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조 제1항은 카메라 등을 이용해 성적 욕망·수치심을 유발할 수 있는 사람의 신체를 의사에 반해 촬영한 행위를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 정하고, 같은 조는 촬영물의 반포·소지 등도 규율하는 영역입니다. 판례는 위 조항의 \'사람의 신체를 촬영한 행위\'와 촬영물·복제물의 범위, 소지 등 처벌의 전제를 사안별로 해석해온 사례 흐름이 있는 영역입니다. 불법촬영 발견 + 촬영물 존재 우려 + 확산 위험 결합은 \'증거 보전·신고·삭제\' 절차가 가능한 트랙입니다. 피해자라면 ① 현장·기기 보존 ② 촬영 사실 정리 ③ 신고·압수 ④ 촬영물 삭제지원 ⑤ 보호·피해회복 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공중화장실 불법촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장 보존·촬영 사실·신고·삭제지원·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장·기기 보존</strong> — 발견한 카메라·기기 위치 보존, 임의 삭제·훼손 금지.</li>\n<li><strong>② 촬영 사실 정리</strong> — 촬영 정황·일시·장소·목격 내용 정리.</li>\n<li><strong>③ 신고·압수</strong> — 경찰 신고로 기기 확보·압수·디지털포렌식 요청.</li>\n<li><strong>④ 촬영물 삭제지원</strong> — 디지털성범죄피해자지원센터 삭제·확산 차단 요청.</li>\n<li><strong>⑤ 보호·피해회복</strong> — 신변보호·심리지원·민사 손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 현장과 기기를 그대로 보존하고 임의로 만지거나 삭제하지 않는 것이 증거 확보의 핵심입니다. 촬영물이 이미 퍼졌을 우려가 있으면 삭제지원센터에 빠르게 삭제·확산 차단을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·기기 보존·신고 (즉시)</strong> — 112 신고, 카메라·기기 위치 보존, 현장 사진 촬영.</li>\n<li><strong>2단계 — 기기 압수·포렌식 (수사 단계)</strong> — 경찰의 기기 확보·디지털포렌식 협조.</li>\n<li><strong>3단계 — 촬영물 삭제·확산 차단 (병행)</strong> — 디지털성범죄피해자지원센터에 삭제·모니터링 요청.</li>\n<li><strong>4단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공중화장실 불법촬영 신고·삭제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장·촬영 사실·삭제지원 갈래입니다.</strong></p>\n<ul>\n<li><strong>발견 카메라·기기 위치·현장 사진 (촬영 정황)</strong></li>\n<li><strong>발견 일시·장소·경위 메모 (사건 정리)</strong></li>\n<li><strong>건물·화장실 출입·CCTV 보존 요청 자료</strong></li>\n<li><strong>목격자·신고 접수 기록</strong></li>\n<li><strong>유포 의심 게시물·URL 캡처 (확산 정황)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 삭제지원 신청서</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기기를 직접 만지면 증거가 훼손될 수 있어 현장 사진만 남기고 경찰에 맡기는 것이 안전합니다. 촬영물이 이미 유포된 정황(게시물·URL)을 발견하면 캡처해 삭제지원센터·경찰에 함께 제출하면 확산 차단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 행위</strong> — 신체를 의사에 반해 촬영한 행위에 해당하는지.</li>\n<li><strong>촬영물·복제물</strong> — 저장·전송된 파일이 촬영물·복제물에 해당하는지.</li>\n<li><strong>소지·반포</strong> — 소지·반포 등 처벌의 전제가 되는 행위가 있었는지.</li>\n<li><strong>미수·예비</strong> — 촬영에 이르지 못한 경우의 평가.</li>\n<li><strong>확산 차단</strong> — 유포물 삭제·재유포 모니터링의 신속성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (불법촬영 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·지원)</strong></li>\n<li><strong>여성긴급전화 1366·해바라기센터</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 불법촬영의 촬영 대상과 촬영물·복제물의 범위',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항의 \'사람의 신체를 촬영한 행위\'는 사람의 신체 그 자체를 직접 촬영하는 행위만 해당하고, 같은 조 제2항 후단의 촬영물·복제물의 범위와 제4항 소지 등 처벌의 전제를 조문의 문언·취지·체계에 따라 해석해야 한다고 판시했습니다. 화장실에서의 불법촬영·저장·소지 행위가 어느 조항에 해당하는지를 살펴볼 때에도 이러한 해석 기준을 검토해볼 수 있습니다.',
        takeaway: '불법촬영 발견 + 촬영물 존재 우려 + 확산 위험 결합 시 증거 보전·신고·삭제 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '카메라를 발견했는데 제가 직접 떼도 되나요?',
        answer:
          '<strong>직접 만지면 증거가 훼손될 수 있어 현장 사진만 남기고 경찰에 맡기는 것이 안전한 영역입니다.</strong> 즉시 112에 신고하세요.',
      },
      {
        question: '제가 찍혔는지 모르는데도 신고가 되나요?',
        answer:
          '<strong>촬영 정황·기기 확보로 수사를 통해 확인하는 영역입니다.</strong> 발견 경위와 현장을 정리해 신고하세요.',
      },
      {
        question: '촬영물이 이미 퍼졌을까 봐 불안한데 어떻게 하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에 삭제·확산 차단을 요청할 수 있는 영역입니다.</strong> 유포 의심 정황을 함께 제출하세요.',
      },
      {
        question: '화장실에 CCTV가 없는데 가해자를 찾을 수 있나요?',
        answer:
          '<strong>건물 출입 CCTV·기기 포렌식·목격자로 특정을 검토하는 영역입니다.</strong> 출입 기록 보존을 요청하세요.',
      },
      {
        question: '심리적으로 너무 힘든데 지원을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·1366에서 심리·법률 지원을 받아볼 수 있는 영역입니다.</strong> 신고와 함께 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '불법촬영 신고 절차', href: '/guide/sex-crime/sex-crime-illegal-filming-report-track' },
      { label: '촬영물 삭제·확산 차단', href: '/guide/sex-crime/sex-crime-content-deletion-track' },
      { label: '디지털 증거 보전', href: '/guide/sex-crime/sex-crime-digital-evidence-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-online-message-coercion-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-online-message-coercion-falsely-accused-defense',
    keyword: '온라인 메시지 추행 무고',
    questionKeyword: '온라인에서 주고받은 메시지 속 표현을 두고 상대가 저를 추행·성희롱으로 고소했어요. 농담이거나 합의된 대화였다고 생각했는데, 상대 진술과 캡처만으로 가해자가 된 상황이에요. 어떻게 방어해야 하나요?',
    ctaKeyword: '온라인 메시지 추행 고소 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '온라인 메시지 추행 고소 방어 — 5단계 진술·맥락 점검 | 로앤가이드',
      description:
        '온라인 메시지 표현을 두고 추행·성희롱으로 고소당했다면 무죄추정·진술 신빙성·대화 맥락 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「온라인에서 주고받은 메시지 속 표현을 두고, 상대가 추행·성희롱을 당했다며 고소를 한 상황에 놓인 분의 경우입니다. 농담이거나 서로 주고받던 합의된 대화의 일부라고 생각했는데, 상대의 진술과 일부 캡처만으로 가해자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고(헌법 제27조 제4항, 형사소송법 제275조의2), 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다(형사소송법 제307조 제2항)는 점, 그리고 대화의 전체 맥락이 평가돼야 한다는 점이 핵심 쟁점입니다. 판례는 피해자 진술이 사실상 유일한 직접증거인 경우 그 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지를 일관성·구체성·객관 정황 부합·허위 동기 유무 등으로 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 일부 캡처·진술만으로 곧바로 혐의가 인정되는 것은 아니라는 평가가 가능한 영역입니다. 대화 일부 인용 + 맥락 다툼 + 진술 신빙성 다툼 결합은 \'무죄추정·진술 신빙성·대화 맥락\' 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위 정리 ② 대화 맥락 ③ 진술 신빙성 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 메시지 추행 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·대화 맥락·진술 신빙성·증거·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 관계·대화 플랫폼·기간·문제된 표현의 전후 정리.</li>\n<li><strong>② 대화 맥락</strong> — 인용된 일부가 아닌 전체 대화의 맥락·상호성 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 고소인 진술의 일관성·객관 정황 부합·허위 동기 검토.</li>\n<li><strong>④ 증거 검토</strong> — 전체 대화 원본·시간순 로그 등 객관 자료 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일부만 캡처된 표현이 아니라 대화 전체의 맥락과 상호성이 평가돼야 하고, 진술이 사실상 유일한 증거라면 합리적 의심을 배제할 정도로 신빙성이 있어야 합니다. 전체 대화 원본을 확보해 맥락을 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·대화 원본 정리 (즉시)</strong> — 관계·플랫폼·문제된 표현의 전후 대화 원본 확보.</li>\n<li><strong>2단계 — 맥락·상호성 정리 (1주)</strong> — 인용 부분과 전체 대화의 맥락·상호성 정리.</li>\n<li><strong>3단계 — 진술 신빙성 검토 (2주)</strong> — 고소인 진술의 일관성·객관 정황 부합·허위 동기 검토.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 메시지 추행 고소 진술 신빙성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·대화 맥락·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>전체 대화 원본·시간순 로그 (맥락 입증)</strong></li>\n<li><strong>관계·대화 기간·플랫폼 정보 (경위)</strong></li>\n<li><strong>문제된 표현 전후 메시지 (상호성·맥락)</strong></li>\n<li><strong>상대의 동일·유사 표현·반응 기록</strong></li>\n<li><strong>고소 전후 정황·대화 변화 자료 (허위 동기 검토)</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>피해 회복·선처 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'전체 맥락\'과 \'진술 신빙성\'입니다. 일부 캡처만이 아닌 전체 대화 원본을 시간순으로 확보하고, 상호성·상대의 동일 표현 등 객관 정황을 정리해두면 진술 신빙성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지.</li>\n<li><strong>대화 맥락</strong> — 인용된 일부가 전체 맥락과 부합하는지.</li>\n<li><strong>상호성·합의</strong> — 서로 주고받은 대화인지, 일방적이었는지.</li>\n<li><strong>고의·인식</strong> — 성적 의도·인식이 있었는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술이 유일한 증거인 사건의 신빙성 판단 기준',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술이 합리적 의심을 배제할 만한 신빙성이 있는지는 진술의 주요 부분이 일관되고 구체적인지, 논리·경험칙에 부합하는지, 객관적으로 확인된 사실과 모순되지 않는지, 허위로 불리한 진술을 할 동기가 있는지 등을 종합해 신중히 판단해야 한다고 판시했습니다. 메시지 일부와 진술만으로 추행이 다투어지는 사건에서도 이러한 신빙성 판단 기준을 검토해볼 수 있습니다.',
        takeaway: '대화 일부 인용 + 맥락 다툼 + 진술 신빙성 다툼 결합 시 무죄추정·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '캡처 몇 장과 상대 진술만 있는데 처벌받게 되나요?',
        answer:
          '<strong>진술이 합리적 의심을 배제할 정도로 신빙성이 있어야 인정되는 영역입니다.</strong> 전체 대화 원본과의 부합 여부를 정리하세요.',
      },
      {
        question: '농담이거나 합의된 대화였다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>전체 맥락·상호성·상대의 동일 표현이 맥락 다툼의 자료가 되는 영역입니다.</strong> 대화 원본을 시간순으로 확보하세요.',
      },
      {
        question: '일부만 캡처해 제출했다는데 문제가 되나요?',
        answer:
          '<strong>인용된 일부가 전체 맥락과 부합하는지가 핵심 쟁점이 되는 영역입니다.</strong> 누락된 전후 대화를 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 대화 경위를 정돈하고 변호인 조력을 검토하세요.',
      },
      {
        question: '무고로 맞고소할 수 있나요?',
        answer:
          '<strong>허위 사실이 입증되면 무고를 검토할 수 있으나 신중한 판단이 필요한 영역입니다.</strong> 정황을 정리해 상담하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense-track' },
      { label: '진술 신빙성 다툼', href: '/guide/sex-crime/sex-crime-statement-credibility-track' },
      { label: '대화 맥락·증거 정리', href: '/guide/sex-crime/sex-crime-message-context-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
    ],
  },
];
