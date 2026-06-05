import { SpokePage } from '../spoke-pages';

// batch88 fraud(6) + sex-crime(4) — 10개 (2026-06-05)
//
// 고유 존재 이유:
// 1. fraud-wedding-hall-prepay-closure-track — 일반 선결제 분쟁과 분기. '예식장에 예약금·식대를 선결제했는데 폐업·잠적' 대가 일부 지급에도 교부금 전부 편취액 판단형 트랙(victim).
// 2. fraud-crowdfunding-reward-nondelivery-track — 일반 미배송류와 분기. '크라우드펀딩 후원했는데 리워드 미배송·프로젝트 무산' 계약 당시 이행 의사·능력 기준 절차형 트랙(victim).
// 3. fraud-subscription-box-prepay-vanish-track — 일반 선결제 잠적과 분기. '정기구독 선결제 후 상품 미발송·잠적' 미필적 고의·변제 의사 판단형 트랙(victim).
// 4. fraud-p2p-lending-platform-default-track — 일반 투자사기류와 분기. 'P2P 대출 플랫폼이 원금·수익 약속 후 부실·잠적' 다수 피해자 죄수·기망 판단형 트랙(victim).
// 5. fraud-secondhand-furniture-bulk-noshow-track — 일반 중고거래류와 분기. '중고가구 일괄구매 결제했는데 미배송·잠적' 대가 일부 지급에도 교부 재물 전부 편취액 판단형 트랙(victim).
// 6. fraud-joint-business-fund-misappropriation-falsely-accused-defense — 일반 사기 무고류와 분기. '동업자금 사용을 두고 유용·편취로 고소당함' 편취 범의·처분행위 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-gym-pt-trainer-track — 일반 추행류와 분기. '헬스장 PT 지도 중 트레이너의 신체접촉 추행' 기습추행·폭행행위 자체 추행 법리 판단형 트랙(victim).
// 8. sex-crime-subway-bus-molestation-track — 일반 추행류와 분기. '지하철·버스 등 대중교통 밀착 추행' 의례적·사회적 상당성과 추행 해당성 경계 판단형 트랙(victim).
// 9. sex-crime-public-restroom-illegal-filming-track — 일반 불법촬영류와 분기. '공중화장실 몰래 촬영·전송' 신체 직접 촬영·복제물 법리 절차형 트랙(victim).
// 10. sex-crime-workplace-afterparty-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 후 동료 추행으로 고소당함' 무죄추정·진술 신빙성·추행 해당성 다툼 방어 판단형 트랙(accused).

export const spokesBatch88FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-wedding-hall-prepay-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-prepay-closure-track',
    keyword: '예식장 선결제 폐업 사기',
    questionKeyword: '예식장·웨딩홀에 예약금과 식대 일부를 미리 결제했는데, 예식일을 앞두고 갑자기 폐업하거나 운영자가 연락이 끊겼어요. 정상 운영이 어려운 걸 알면서도 계약을 받은 것 같은데, 사기로 신고하고 선결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '예식장 선결제 폐업 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '예식장 선결제 폐업 사기 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '예식장에 예약금·식대를 선결제했는데 폐업·잠적으로 돈이 묶였다면, 형법 제347조 사기에서 대가 일부 지급에도 교부금 전부가 편취액일 수 있고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「인생의 가장 중요한 날을 위해 예식장·웨딩홀에 예약금과 식대 일부를 미리 결제했는데, 예식일을 앞두고 갑자기 폐업하거나 운영자가 \'곧 정상화된다\'며 미루다 끝내 연락이 끊긴 분의 상황입니다. 정작 운영이 어려운 걸 알면서도 새 예약을 계속 받은 정황이 보여, 선결제한 큰돈을 떼이고 다른 식장까지 급히 잡아야 할까 막막하실 거예요. 결혼 준비까지 겹쳐 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 폐업·정상 이행 불가를 알면서도 이를 숨긴 채 예약·선결제를 받은 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취 사기에서 대가가 일부 지급된 경우에도 편취액은 그 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 선결제 + 폐업·잠적 + 이행 불가 인식 결합은 \'편취액·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 선결제 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 예식 계약서·견적·예약금·식대 결제 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 폐업·이행 불가를 알면서 예약·선결제를 받은 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환급·서비스가 있어도 교부한 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 폐업 환불 분쟁과 달리, 운영 불가를 알면서도 새 예약·선결제를 계속 받았는지가 사기 판단의 분기점입니다. 모집 시점과 폐업 정황, 같은 피해 예약자를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 계약서·견적·결제·대화·폐업 공지 보존.</li>\n<li><strong>2단계 — 운영·폐업 시점 확인 (즉시)</strong> — 모집 시점과 폐업·잠적 시점, 동일 피해 예약자 조회.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 선결제 폐업 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>예식 계약서·견적서 (계약 내용)</strong></li>\n<li><strong>예약금·식대 결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>예약 권유·할인 안내 광고·대화</strong></li>\n<li><strong>폐업·잠적·환불 거부 공지 캡처</strong></li>\n<li><strong>예식일·잔여 서비스 자료 (손해 산정)</strong></li>\n<li><strong>동일 피해 예약자·모집 시점 자료</strong></li>\n<li><strong>사업자·운영자 신원·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐업 직전까지 새 예약을 받은 정황을 시점별로 모으면 기망 판단의 자료가 됩니다. 선결제 총액과 받지 못한 서비스를 정리하면 편취액 검토와 환급에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 폐업·이행 불가를 알면서 예약·선결제를 받았는지.</li>\n<li><strong>판단 시점</strong> — 계약 당시 정상 이행 가능성이 있었는지.</li>\n<li><strong>편취액</strong> — 일부 환급·서비스가 있어도 교부한 금원 전부가 피해액인지.</li>\n<li><strong>단순 경영악화 항변</strong> — \'사정상 폐업했다\'는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급에도 교부금 전부가 편취액',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되거나 일부 대가가 지급된 경우에도 편취액은 그 대가 상당액을 공제한 차액이 아니라 교부받은 금원 전부이며, 이는 특정경제범죄법 위반죄에서도 마찬가지라고 판시했습니다. 예식장에 선결제한 금원의 피해액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '선결제 + 폐업·잠적 + 이행 불가 인식 결합 시 편취액·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 폐업일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>폐업·이행 불가를 알면서 예약·선결제를 계속 받았는지가 핵심인 영역입니다.</strong> 모집 시점·폐업 정황을 확보하세요.',
      },
      {
        question: '일부만 돌려준다는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환급·서비스가 있어도 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 선결제 총액을 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 항변·결제 이의로 잔여 할부금 청구를 다퉈볼 수 있는 영역입니다.</strong> 미이행 정황을 정리해 이의신청하세요.',
      },
      {
        question: '같은 피해 예약자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 식장·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '정기구독 선결제 잠적 대응', href: '/guide/fraud/fraud-subscription-box-prepay-vanish-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-crowdfunding-reward-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crowdfunding-reward-nondelivery-track',
    keyword: '크라우드펀딩 리워드 미배송 사기',
    questionKeyword: '크라우드펀딩 프로젝트에 후원하고 결제까지 했는데, 약속한 리워드가 오지 않고 프로젝트는 무산되거나 진행자가 연락을 끊었어요. 처음부터 만들 능력도 없이 후원금만 모은 것 같은데, 사기로 신고하고 후원금을 돌려받을 수 있나요?',
    ctaKeyword: '크라우드펀딩 리워드 미배송 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '크라우드펀딩 리워드 미배송 사기 — 5단계 이행의사·환급 점검 | 로앤가이드',
      description:
        '후원했는데 리워드가 오지 않고 프로젝트가 무산됐다면, 형법 제347조 사기의 편취 범의를 계약 당시 이행 의사·능력으로 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「와디즈·텀블벅 등 크라우드펀딩 프로젝트에 마음이 끌려 후원하고 결제까지 마쳤는데, 약속한 배송일이 한참 지나도 리워드가 오지 않는 분의 상황입니다. 진행자는 \'생산이 지연된다\'며 미루다 프로젝트를 무산시키거나 끝내 연락을 끊어, 처음부터 만들 의사·능력도 없이 후원금만 모은 건 아닌지 의심되고 막막하실 거예요. 펀딩 특성상 환불도 쉽지 않아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 리워드를 완성·이행할 의사·능력 없이 후원금만 받은 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 속였는지로 판단하고, 거래의 내용·체결 경위·이행 과정 등을 종합해야 하며 행정법규 위반 사정만으로 곧바로 기망행위라 단정해서는 안 된다고 본 사례 흐름이 있는 영역입니다. 후원 결제 + 리워드 미배송 + 이행 의사 결여 결합은 \'편취 범의·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 후원·결제 정리 ② 편취 범의 ③ 지급정지·결제 이의 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 크라우드펀딩 리워드 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후원·편취 범의·결제 이의·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후원·결제 정리</strong> — 프로젝트 페이지·후원 내역·리워드 약속·결제 정리.</li>\n<li><strong>② 편취 범의</strong> — 완성·이행 의사·능력 없이 후원금만 받은 정황 정리.</li>\n<li><strong>③ 결제 이의·지급정지</strong> — 결제수단별 이의제기·계좌이체분 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 후원자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약 당시 리워드를 완성할 의사·능력이 있었는지가 기망 판단의 핵심입니다. 단순 지연·무산과 처음부터의 편취를 가르는 진행 경위·자금 사용 정황을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후원·결제 자료 보존 (즉시)</strong> — 프로젝트 페이지·리워드 약속·결제·공지·대화 보존.</li>\n<li><strong>2단계 — 플랫폼 문의·이의 (즉시)</strong> — 펀딩 플랫폼 미이행 문의·환불 정책 확인.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 이의제기·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 후원자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">크라우드펀딩 리워드 미배송 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 후원·편취 범의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>프로젝트 페이지·리워드 설명 캡처 (약속 내용)</strong></li>\n<li><strong>후원·결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>배송 약속·지연·무산 공지 기록</strong></li>\n<li><strong>진행자와의 대화·환불 요청·연락 두절 정황</strong></li>\n<li><strong>플랫폼 문의·환불 정책 회신</strong></li>\n<li><strong>동일 프로젝트·진행자 피해 조회 결과</strong></li>\n<li><strong>진행자·사업자 신원·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 프로젝트 페이지와 리워드 약속 화면을 캡처해 두면 무엇을 약속받았는지 명확해집니다. 다른 후원자들의 미배송 정황을 함께 모으면 편취 범의와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 완성·이행 의사·능력 없이 후원금만 받았는지.</li>\n<li><strong>판단 시점</strong> — 계약 당시 이행 가능성이 있었는지.</li>\n<li><strong>단순 무산 항변</strong> — \'사업이 실패했다\'는 주장과의 구별.</li>\n<li><strong>자금 사용</strong> — 후원금을 다른 용도로 유용한 정황이 있는지.</li>\n<li><strong>진행자 특정</strong> — 사업자·계좌·계정으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단 시점과 기망행위 단정 한계',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 거짓말을 하여 대가를 편취할 고의가 있었는지로 판단해야 하고, 거래의 내용·체결 경위·이행 과정 등을 종합해야 하며, 관련 행정법규를 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정해서는 안 된다고 판시했습니다. 펀딩 리워드 미배송 사안에서 편취 범의를 살펴볼 때에도 계약 당시 이행 의사를 기준으로 검토해볼 수 있습니다.',
        takeaway: '후원 결제 + 리워드 미배송 + 이행 의사 결여 결합 시 편취 범의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '펀딩은 원래 무산될 수도 있는데 사기가 되나요?',
        answer:
          '<strong>계약 당시 완성·이행 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 진행 경위·자금 사용 정황을 확보하세요.',
      },
      {
        question: '단순 지연이라는데 어떻게 구별하나요?',
        answer:
          '<strong>처음부터 이행 능력이 없었거나 속였는지로 갈리는 영역입니다.</strong> 약속·지연·무산 경위를 정리하세요.',
      },
      {
        question: '카드로 결제했으면 환불이 되나요?',
        answer:
          '<strong>카드사 이의제기·결제 취소를 함께 검토하는 영역입니다.</strong> 미배송·미이행 정황을 정리해 이의신청하세요.',
      },
      {
        question: '플랫폼이 책임지지 않나요?',
        answer:
          '<strong>플랫폼 환불 정책과 별개로 진행자에 대한 형사·민사 대응을 검토하는 영역입니다.</strong> 플랫폼 회신을 함께 보존하세요.',
      },
      {
        question: '같은 후원자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 프로젝트·진행자 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '온라인 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-subscription-box-prepay-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-subscription-box-prepay-vanish-track',
    keyword: '정기구독 선결제 잠적 사기',
    questionKeyword: '월 정기구독 서비스나 정기배송 상품을 몇 개월치 미리 결제했는데, 얼마 안 가 상품 발송이 끊기고 운영자는 연락이 두절됐어요. 처음부터 보낼 의사 없이 선결제만 모은 것 같은데, 사기로 신고하고 남은 결제금을 돌려받을 수 있나요?',
    ctaKeyword: '정기구독 선결제 잠적 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '정기구독 선결제 잠적 사기 — 5단계 변제의사·환급 점검 | 로앤가이드',
      description:
        '정기구독을 몇 개월치 선결제했는데 발송이 끊기고 잠적했다면, 형법 제347조 사기의 편취 범의를 미필적 고의·변제 의사로 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「반찬·꽃·생필품 정기배송이나 월 정기구독 서비스를 \'길게 결제하면 더 싸다\'는 말에 몇 개월치를 미리 결제한 분의 상황입니다. 그런데 한두 번 받은 뒤 발송이 끊기고, 운영자는 \'재고가 곧 들어온다\'며 미루다 끝내 연락이 두절돼, 처음부터 보낼 의사 없이 선결제만 모은 건 아닌지 의심되고 막막하실 거예요. 남은 회차분까지 떼일까 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 정상 공급할 의사·능력 없이 장기 선결제만 유도한 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 편취 범의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행 과정 등 객관적 사정을 종합해 판단하고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 본 사례 흐름이 있는 영역입니다. 장기 선결제 + 발송 중단 + 잠적 결합은 \'편취 범의·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 구독·결제 정리 ② 편취 범의 ③ 지급정지·결제 이의 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정기구독 선결제 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 구독·편취 범의·결제 이의·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 구독·결제 정리</strong> — 구독 약정·회차·선결제·발송 내역 정리.</li>\n<li><strong>② 편취 범의</strong> — 공급 의사·능력 없이 장기 선결제만 받은 정황 정리.</li>\n<li><strong>③ 결제 이의·지급정지</strong> — 결제수단별 이의제기·계좌이체분 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 구독자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미필적 고의로도 편취 범의가 인정될 수 있어, 공급이 끊길 줄 알면서도 장기 선결제를 받았는지가 분기점입니다. 결제 시점·발송 중단 시점·잔여 회차를 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구독·결제 자료 보존 (즉시)</strong> — 약정·회차·결제·발송·공지·대화 보존.</li>\n<li><strong>2단계 — 운영·잠적 시점 확인 (즉시)</strong> — 선결제 모집 시점과 발송 중단·잠적 시점 확인.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 정기결제 해지·카드 이의·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 구독자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">정기구독 선결제 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 구독·편취 범의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>구독 약정·상품 설명 캡처 (약속 내용)</strong></li>\n<li><strong>선결제·정기결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>발송·미발송·잔여 회차 기록</strong></li>\n<li><strong>운영자와의 대화·지연 안내·연락 두절 정황</strong></li>\n<li><strong>장기 결제 권유 광고·할인 안내</strong></li>\n<li><strong>동일 운영자·계좌 피해 조회 결과</strong></li>\n<li><strong>운영자·사업자 신원·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 몇 개월치를 한 번에 결제하도록 유도한 광고·대화를 모으면 장기 선결제 유도 정황이 드러납니다. 발송이 끊긴 시점과 잔여 회차를 정리하면 손해액과 편취 범의 검토에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 공급 의사·능력 없이 선결제만 받았는지.</li>\n<li><strong>미필적 고의</strong> — 공급이 끊길 줄 알면서도 결제를 받았는지.</li>\n<li><strong>단순 폐업 항변</strong> — \'운영난으로 멈췄다\'는 주장과의 구별.</li>\n<li><strong>장기 결제 유도</strong> — 무리한 장기 선결제를 권유한 정황이 있는지.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·계정으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (정기구독·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단 방법과 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 자백이 없는 한 범행 전후 피고인의 재력·환경·범행의 내용·거래의 이행 과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하며, 물품거래에서는 거래 당시 변제할 의사·능력 없이 속여 물품 등을 편취할 고의가 있었는지로 판단해야 한다고 판시했습니다. 장기 선결제 후 발송이 끊긴 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '장기 선결제 + 발송 중단 + 잠적 결합 시 편취 범의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운영난으로 멈춘 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>공급 의사·능력 없이 장기 선결제만 받았는지가 핵심인 영역입니다.</strong> 결제 시점·발송 중단 정황을 확보하세요.',
      },
      {
        question: '확실히 속일 의도가 없었다면 사기가 아닌가요?',
        answer:
          '<strong>확정적 고의가 아닌 미필적 고의로도 편취 범의가 인정될 수 있는 영역입니다.</strong> 거래 경위·이행 과정을 정리하세요.',
      },
      {
        question: '정기결제는 어떻게 멈추나요?',
        answer:
          '<strong>정기결제 해지·카드 이의제기로 추가 결제를 막아볼 수 있는 영역입니다.</strong> 미발송 정황을 정리해 이의신청하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 구독자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 운영자·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '예식장 선결제 폐업 대응', href: '/guide/fraud/fraud-wedding-hall-prepay-closure-track' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-p2p-lending-platform-default-track ───
  {
    domain: 'fraud',
    slug: 'fraud-p2p-lending-platform-default-track',
    keyword: 'P2P 대출 플랫폼 원금 편취',
    questionKeyword: 'P2P 대출·투자 플랫폼이 \'원금 보장에 고수익\'을 내세워 투자했는데, 약속한 상환·수익이 막히고 플랫폼은 부실·잠적했어요. 처음부터 돌려줄 의사 없이 투자금만 모은 것 같은데, 사기로 신고하고 원금을 돌려받을 수 있나요?',
    ctaKeyword: 'P2P 대출 플랫폼 원금 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'P2P 대출 플랫폼 원금 편취 — 5단계 기망·죄수 점검 | 로앤가이드',
      description:
        'P2P 플랫폼이 원금·수익을 약속하고 부실·잠적했다면, 형법 제347조 사기의 기망·다수 피해자 죄수 법리를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「P2P 대출·투자 플랫폼이 \'원금 보장\', \'안전한 담보\', \'고수익\'을 내세워 여러 차례 투자했는데, 약속한 상환·수익 지급이 막히고 플랫폼은 부실·연체를 반복하다 끝내 잠적한 분의 상황입니다. 처음부터 돌려줄 의사·능력 없이 투자금만 모은 건 아닌지 의심되고, 노후 자금까지 묶여 막막하실 거예요. 피해자가 많아 어디부터 손대야 할지 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 원금 보장·상환 의사·능력 없이 허위·과장 정보로 투자를 유도한 정황은 기망행위로 평가될 여지가 있고, 투자금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 다수 피해자에 대해 각각 기망행위를 해 재물을 편취한 경우 범의가 단일하고 방법이 동일하더라도 원칙적으로 피해자별로 독립한 사기죄가 성립하고, 피해법익의 동일성이 인정되는 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역입니다. 원금·수익 약속 + 부실·잠적 + 다수 피해 결합은 \'기망·죄수·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·송금 정리 ② 기망 정황 ③ 자금 추적 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. P2P 대출 플랫폼 원금 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망 정황·자금 추적·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·송금 정리</strong> — 투자 안내·상품 설명·송금·약속 수익 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 원금 보장·상환 의사·능력 없이 투자를 유도한 정황 정리.</li>\n<li><strong>③ 자금 추적</strong> — 투자금의 실제 운용·유용·돌려막기 정황 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·관련 특별법 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·다수 피해자 공동 고소·민사 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수 피해자는 원칙적으로 피해자별 독립한 사기죄가 성립할 수 있어, 각자 송금·약속 자료를 정리해 모으는 것이 중요합니다. 원금 보장 광고와 실제 자금 운용의 괴리가 기망 판단의 분기점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·송금 자료 보존 (즉시)</strong> — 투자 안내·상품 설명·송금·수익 약속·공지 보존.</li>\n<li><strong>2단계 — 금감원·플랫폼 확인 (즉시)</strong> — 금융감독원 1332 상담, 등록·연체·부실 공시 확인.</li>\n<li><strong>3단계 — 지급정지·자금 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 집단 고소·환급 (2개월 내)</strong> — 다수 피해자 공동 고소·피해구제·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">P2P 대출 플랫폼 원금 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 안내·상품 설명·약관 캡처 (약속 내용)</strong></li>\n<li><strong>투자금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>원금 보장·수익 약속 광고·대화</strong></li>\n<li><strong>연체·부실·지급 정지 공지 기록</strong></li>\n<li><strong>플랫폼 사업자·운영자·계좌 정보</strong></li>\n<li><strong>다른 피해자 모집·피해 규모 자료</strong></li>\n<li><strong>금감원 상담·사건사고사실확인원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 원금 보장·고수익을 강조한 광고와 실제 연체·부실 공지를 함께 모으면 기망 정황이 선명해집니다. 같은 플랫폼 피해자를 모아 송금·약속 자료를 묶으면 공동 고소와 자금 추적에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 원금 보장·상환 의사·능력 없이 투자를 유도했는지.</li>\n<li><strong>죄수 관계</strong> — 다수 피해자별 독립 사기인지 포괄일죄인지.</li>\n<li><strong>자금 유용</strong> — 투자금을 돌려막기·다른 용도로 쓴 정황이 있는지.</li>\n<li><strong>단순 투자손실 항변</strong> — \'시장 악화로 손실\'이라는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·실운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 사기의 죄수 관계',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에 대해 각각 기망행위를 해 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이어서 원칙적으로 피해자별로 독립한 사기죄가 성립하고, 다만 기망행위의 공통성·재산 교부 의사결정의 공통성 등 피해법익의 동일성이 인정되는 사정이 있으면 포괄일죄로 볼 수 있다고 판시했습니다. 다수 투자자를 모집한 P2P 플랫폼 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '원금·수익 약속 + 부실·잠적 + 다수 피해 결합 시 기망·죄수·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '투자는 원래 손실이 날 수 있는데 사기가 되나요?',
        answer:
          '<strong>원금 보장·상환 의사·능력 없이 허위로 투자를 유도했는지가 핵심인 영역입니다.</strong> 광고와 실제 운용의 괴리를 확보하세요.',
      },
      {
        question: '피해자가 많은데 각자 신고해야 하나요?',
        answer:
          '<strong>원칙적으로 피해자별 독립 사기가 성립할 수 있어 각자 자료를 정리하는 영역입니다.</strong> 송금·약속 자료를 개별로 모으세요.',
      },
      {
        question: '함께 모여 대응하면 유리한가요?',
        answer:
          '<strong>다수 피해를 묶어 공동 고소·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해 규모·운영자 정보를 모으세요.',
      },
      {
        question: '플랫폼이 등록업체인데도 사기가 되나요?',
        answer:
          '<strong>등록 여부와 별개로 기망·자금 유용 정황으로 사기 여부를 검토하는 영역입니다.</strong> 연체·부실 공시를 함께 확보하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자사기 대응', href: '/guide/fraud/fraud-investment-scam-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '동업자금 유용 무고 방어', href: '/guide/fraud/fraud-joint-business-fund-misappropriation-falsely-accused-defense' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-secondhand-furniture-bulk-noshow-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-furniture-bulk-noshow-track',
    keyword: '중고가구 일괄구매 미배송 사기',
    questionKeyword: '이사·창업 때문에 중고가구를 일괄로 싸게 사기로 하고 대금을 보냈는데, 일부만 오거나 아예 배송이 안 되고 판매자는 연락이 끊겼어요. 처음부터 다 보낼 의사 없이 대금만 받은 것 같은데, 사기로 신고하고 보낸 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고가구 일괄구매 미배송 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고가구 일괄구매 미배송 사기 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '중고가구를 일괄로 결제했는데 미배송·잠적했다면, 형법 제347조 사기에서 대가 일부 지급에도 교부 재물 전부가 편취액일 수 있고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「이사·창업·사무실 정리 때문에 중고가구를 \'한 번에 사면 싸다\'는 말에 일괄로 묶어 사기로 하고 대금을 먼저 보낸 분의 상황입니다. 그런데 일부 품목만 오거나 아예 배송이 되지 않고, 판매자는 \'나머지는 곧 보낸다\'며 미루다 끝내 연락이 끊겨, 처음부터 전부 보낼 의사 없이 대금만 받은 건 아닌지 의심되고 막막하실 거예요. 일부만 받았으니 피해액이 얼마인지도 헷갈려 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 전부 인도할 의사·능력 없이 일괄 대금을 받은 정황은 기망행위로 평가될 여지가 있고, 대금 이체라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 재물 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 교부받은 재물에서 그 대가를 공제한 차액이 아니라 교부받은 재물 전부라고 본 사례 흐름이 있는 영역입니다. 일괄 결제 + 일부·미배송 + 잠적 결합은 \'편취액·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고가구 일괄구매 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 일괄 매물·품목 목록·합의 금액·이체 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 전부 인도 의사·능력 없이 일괄 대금을 받은 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 배송이 있어도 교부한 대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일부 품목을 받았더라도 편취액은 교부한 대금 전부로 평가될 수 있다는 점이 분기점입니다. 약속한 품목 목록과 실제 받은 품목, 송금 내역을 대조해 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 매물 목록·합의·대화·대금 이체 내역 보존.</li>\n<li><strong>2단계 — 품목·배송 대조 (즉시)</strong> — 약속 품목과 실제 수령 품목·미배송 내역 대조.</li>\n<li><strong>3단계 — 지급정지·사기 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고가구 일괄구매 미배송 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>일괄 매물·품목 목록 캡처 (거래 내용)</strong></li>\n<li><strong>합의 금액·대금 이체 내역 (피해 금액)</strong></li>\n<li><strong>약속 품목·실제 수령 품목 대조표</strong></li>\n<li><strong>배송 약속·미배송·연락 두절 대화</strong></li>\n<li><strong>판매자 상호·계좌·연락처 정보</strong></li>\n<li><strong>동일 계좌·판매자 피해 조회 결과</strong></li>\n<li><strong>사건사고사실확인원·피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 약속한 품목 목록과 실제로 받은 품목을 표로 대조하면 무엇이 미배송됐는지와 피해액이 명확해집니다. 같은 계좌·판매자로 여러 피해가 있으면 동일 수법 공동 신고에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 전부 인도 의사·능력 없이 일괄 대금을 받았는지.</li>\n<li><strong>편취액</strong> — 일부 배송이 있어도 교부한 대금 전부가 피해액인지.</li>\n<li><strong>단순 배송 지연 항변</strong> — \'나머지도 보낸다\'는 주장과의 구별.</li>\n<li><strong>품목 누락</strong> — 약속 품목과 수령 품목의 차이가 있는지.</li>\n<li><strong>판매자 특정</strong> — 상호·계좌·계정으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급에도 교부 재물 전부가 편취액',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 재물 편취를 내용으로 하는 사기죄에서는 그 대가가 일부 지급된 경우에도 편취액은 교부받은 재물에서 그 대가를 공제한 차액이 아니라 교부받은 재물 전부라고 판시했습니다. 중고가구를 일괄 결제했으나 일부만 배송된 사안의 피해액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '일괄 결제 + 일부·미배송 + 잠적 결합 시 편취액·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '일부는 받았는데도 사기가 되나요?',
        answer:
          '<strong>전부 인도 의사·능력 없이 일괄 대금을 받았는지가 핵심인 영역입니다.</strong> 약속 품목·미배송 정황을 확보하세요.',
      },
      {
        question: '일부 받았으면 피해액은 나머지뿐인가요?',
        answer:
          '<strong>일부 배송이 있어도 교부한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '나머지도 보낸다고 미루는데 어떻게 하나요?',
        answer:
          '<strong>지연 주장과 처음부터의 미이행을 정황으로 구별하는 영역입니다.</strong> 약속·지연·연락 두절 대화를 정리하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 판매자 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 계좌·판매자 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-used-deal-response-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 6. fraud-joint-business-fund-misappropriation-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-business-fund-misappropriation-falsely-accused-defense',
    keyword: '동업자금 유용 사기 무고',
    questionKeyword: '동업자와 함께 사업을 하며 공동자금을 집행했는데, 동업이 틀어지자 상대가 \'내 투자금을 처음부터 빼돌릴 작정으로 받았다\'며 사기로 고소했어요. 저는 실제 사업에 썼고 편취할 의도도 없었는데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '동업자금 유용 편취 범의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업자금 유용 사기 무고 방어 — 5단계 편취 범의 점검 | 로앤가이드',
      description:
        '동업자금 집행을 두고 사기로 고소당했다면, 편취 범의와 처분행위·기망 여부를 계약 당시 의사로 따지고 정황·자금 사용으로 5단계 방어 트랙을 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「동업자와 함께 사업을 시작하며 투자금·운영비를 공동자금으로 집행해 왔는데, 동업 관계가 틀어지자 상대가 갑자기 \'처음부터 내 투자금을 빼돌릴 작정으로 받았다\'며 사기로 고소해 한순간에 피의자로 지목된 분의 상황입니다. 정작 본인은 그 돈을 실제 사업·운영에 썼고 편취할 의도도 없었는데, 동업 분쟁이 형사 사건으로 번져 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 자금 수령이 처음부터 기망에 의한 편취였는지, 아니면 사업상 투자·집행을 둘러싼 민사 분쟁인지가 핵심 쟁점입니다. 사기죄는 타인을 기망해 착오에 빠뜨리고 처분행위를 유발해 재물·재산상 이익을 취득함으로써 성립하고, 그 주관적 구성요건인 편취의 범의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행 과정 등 객관적 사정을 종합해 판단됩니다. 판례는 사기죄 성립과 관련해 기망·처분행위·편취 범의를 객관적 정황으로 엄격히 따지는 사례 흐름이 있는 영역입니다. 따라서 자금의 실제 사용처와 사업 경위, 동업 정산 관계를 정리해 다툴 수 있는 영역입니다. 동업 분쟁 + 편취 범의 다툼 + 자금 사용 검토 결합은 \'편취 범의·자금 사용\' 방어가 가능한 트랙입니다. 사실과 다르게 고소됐다면 ① 자금 흐름 정리 ② 편취 범의 ③ 자금 사용처 ④ 정산 관계 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업자금 유용 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금 흐름·편취 범의·자금 사용처·정산·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자금 흐름 정리</strong> — 투자·운영비 수령 경위·동업 계약·집행 내역 정리.</li>\n<li><strong>② 편취 범의</strong> — 수령 당시 빼돌릴 의도가 있었는지 객관 정황으로 검토.</li>\n<li><strong>③ 자금 사용처</strong> — 실제 사업·운영에 쓴 증빙·거래내역 정리.</li>\n<li><strong>④ 정산 관계</strong> — 동업 손익·정산 미완에 따른 민사 분쟁 성격 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 동업 분쟁은 자금을 실제 사업에 썼다면 처음부터의 편취가 아니라 정산·민사 다툼일 수 있다는 점이 분기점입니다. 자금 사용처 증빙과 동업 경위를 정리해 편취 범의를 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자금·계약 자료 정리 (즉시)</strong> — 동업 계약·투자·운영비 수령·집행 내역 정리.</li>\n<li><strong>2단계 — 사용처 증빙 확보 (1주)</strong> — 거래내역·세금계산서·지출 증빙 등 자금 사용 자료 확보.</li>\n<li><strong>3단계 — 편취 범의·정산 쟁점 정리 (2주)</strong> — 수령 당시 의사·사업 경위와 동업 정산 미완 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 민사 정산 병행 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업자금 유용 편취 범의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 자금 흐름·편취 범의·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 계약서·약정 (관계·권한)</strong></li>\n<li><strong>투자금·운영비 수령 내역 (자금 흐름)</strong></li>\n<li><strong>사업 지출·거래내역·세금계산서 (사용처)</strong></li>\n<li><strong>사업 운영·실적 자료 (실제 집행 증빙)</strong></li>\n<li><strong>동업 손익·정산 관련 대화·자료</strong></li>\n<li><strong>고소 경위·관계 악화 정황</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'자금을 실제 사업에 썼는지\'와 \'수령 당시 편취 의도가 없었는지\'입니다. 거래내역·세금계산서로 사용처를 입증하고 동업 정산 미완을 짚으면 민사 분쟁 성격을 부각하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 수령 당시 빼돌릴 의도가 있었는지.</li>\n<li><strong>기망·처분행위</strong> — 상대가 기망에 빠져 자금을 교부한 것인지.</li>\n<li><strong>자금 사용처</strong> — 실제 사업·운영에 집행했는지.</li>\n<li><strong>민사·형사 구별</strong> — 동업 정산 미완에 따른 민사 분쟁인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄의 성립과 편취 범의의 판단',
        summary:
          '대법원 2005도9858(대법원, 2006.04.07 선고) 영역에서 법원은 사기죄는 타인을 기망해 착오에 빠뜨리고 처분행위를 유발하여 재물·재산상 이익을 취득함으로써 성립하고, 허위 주장으로 소송을 제기해 승소확정판결을 받아 재산상 이익을 취득한 경우 그 기수시기는 판결이 확정된 때라고 판시하는 등 기망·처분행위·편취 범의를 객관적 정황으로 엄격히 따졌습니다. 동업자금 수령을 사기로 다투는 사안에서 편취 범의를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '동업 분쟁 + 편취 범의 다툼 + 자금 사용 검토 결합 시 편취 범의·자금 사용 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '동업이 틀어졌을 뿐인데 사기로 고소당했어요. 어떻게 방어하나요?',
        answer:
          '<strong>자금을 실제 사업에 썼다면 정산·민사 분쟁으로 다툴 수 있는 영역입니다.</strong> 자금 사용처 증빙을 모으세요.',
      },
      {
        question: '돈을 받은 건 맞는데 편취가 아니라고 어떻게 보여주나요?',
        answer:
          '<strong>수령 당시 빼돌릴 의도가 없었음을 객관 정황으로 다투는 영역입니다.</strong> 사업 집행·거래내역을 정리하세요.',
      },
      {
        question: '손실이 났다고 사기가 되는 건 아니죠?',
        answer:
          '<strong>사업 손실 자체가 곧 편취 범의는 아니어서 사용처·경위로 구별하는 영역입니다.</strong> 손익·정산 자료를 정리하세요.',
      },
      {
        question: '민사로 해결할 문제 아닌가요?',
        answer:
          '<strong>정산 미완이면 민사 분쟁 성격을 부각해 형사 다툼을 정리하는 영역입니다.</strong> 동업 정산 관계를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 자금 흐름을 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 무고 방어 절차', href: '/guide/fraud/fraud-false-accusation-defense-track' },
      { label: '편취 고의 다툼', href: '/guide/fraud/fraud-intent-dispute-track' },
      { label: 'P2P 대출 플랫폼 원금 편취', href: '/guide/fraud/fraud-p2p-lending-platform-default-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/fraud/fraud-public-defender-track' },
    ],
  },

  // ─── 7. sex-crime-gym-pt-trainer-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-pt-trainer-track',
    keyword: '헬스장 PT 트레이너 추행',
    questionKeyword: '헬스장 PT를 받던 중 트레이너가 자세 교정을 핑계로 불필요하게 몸을 만지거나 밀착했어요. 처음엔 지도인 줄 알았는데 점점 불쾌하고 수치스러웠는데, 이런 신체접촉을 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '헬스장 PT 트레이너 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 트레이너 추행 — 5단계 신고·증거 점검 | 로앤가이드',
      description:
        'PT 지도 중 자세 교정을 빙자한 신체접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행과 기습추행·추행 해당성 법리를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·필라테스에서 PT를 받던 중 트레이너가 \'자세 교정\', \'근육 위치\'를 핑계로 필요 이상으로 몸을 만지거나 밀착해, 처음엔 지도인 줄 알았다가 점점 불쾌함과 수치심을 느낀 분의 상황입니다. 운동을 계속해야 해 항의하기도 어렵고, 지도였는지 추행이었는지 스스로 의심하게 돼 막막하셨을 거예요. 믿고 맡긴 관계라 더 혼란스러우셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없고, 폭행행위 자체가 추행이라고 인정되는 기습추행도 포함되며, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역입니다. 지도 빙자 + 불필요한 접촉 + 의사에 반함 결합은 \'추행 해당성·증거\' 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 트레이너 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — PT 일시·지도 내용·접촉 부위·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 지도 범위를 벗어난 의사에 반한 접촉인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 헬스장 CCTV·예약·결제·대화 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 트레이너·업체·예약 기록으로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터·1366 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자세 교정에 필요한 접촉인지, 지도 범위를 벗어난 의사에 반한 접촉인지가 추행 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 CCTV를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·정황 정리 (즉시)</strong> — PT 일시·접촉 부위·방식·반복 여부와 직후 호소 정리.</li>\n<li><strong>2단계 — CCTV 보존 요청 (즉시)</strong> — 헬스장에 CCTV 보존 요청, 예약·결제 기록 확보.</li>\n<li><strong>3단계 — 상담·증거 정리 (직후)</strong> — 해바라기센터·1366 상담, 대화·목격자 정리.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112·경찰서에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·분리 조치·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 트레이너 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>PT 일시·지도 내용·접촉 정황 메모</strong></li>\n<li><strong>헬스장 CCTV 보존 요청 자료</strong></li>\n<li><strong>예약·결제·출입 기록 (시간·장소 특정)</strong></li>\n<li><strong>트레이너와의 대화·메시지 기록</strong></li>\n<li><strong>직후 호소·상담 정황 (지인·센터)</strong></li>\n<li><strong>목격자·다른 회원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 일정 기간 지나면 삭제되므로 곧바로 헬스장에 보존을 요청하는 것이 중요합니다. 접촉 부위·방식과 직후 불쾌감을 호소한 정황을 구체적으로 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 의사에 반한 추행으로 평가되는지.</li>\n<li><strong>지도 범위</strong> — 자세 교정에 필요한 접촉을 벗어났는지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행으로 인정되는지.</li>\n<li><strong>고의·우연</strong> — 의도된 접촉인지 우연한 접촉인지.</li>\n<li><strong>증거 확보</strong> — CCTV·정황·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 추행 해당성의 종합 판단',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄는 폭행 또는 협박을 가해 항거를 곤란하게 한 뒤 추행하는 경우뿐 아니라 폭행행위 자체가 추행이라고 인정되는 경우도 포함되고, 이때 폭행은 상대방의 의사를 억압할 정도일 필요가 없으며, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 판시했습니다. PT 지도 중 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 불필요한 접촉 + 의사에 반함 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자세 교정이라는데도 추행이 되나요?',
        answer:
          '<strong>지도에 필요한 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 잡은 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>항거를 곤란하게 할 정도가 아니어도 기습추행이 인정될 수 있는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: 'CCTV가 없으면 입증이 어렵나요?',
        answer:
          '<strong>직후 호소·대화·목격자 진술 등 정황으로도 다툴 수 있는 영역입니다.</strong> 직후 정황을 구체적으로 남기세요.',
      },
      {
        question: '트레이너를 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제·업체 기록으로 트레이너를 특정할 수 있는 영역입니다.</strong> 예약·결제 기록부터 확보하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: '지하철 버스 추행 대응', href: '/guide/sex-crime/sex-crime-subway-bus-molestation-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-subway-bus-molestation-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-bus-molestation-track',
    keyword: '지하철 버스 추행',
    questionKeyword: '혼잡한 지하철·버스에서 누군가 몸을 밀착하거나 손으로 만져 불쾌하고 수치스러웠어요. 혼잡 때문에 닿은 건지 의도된 추행인지 헷갈리고 그 자리에서 항의도 못 했는데, 이런 대중교통 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '지하철 버스 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '지하철 버스 추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '혼잡한 대중교통에서 밀착·접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행과 추행 해당성·의례적 상당성 경계 법리를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근길 혼잡한 지하철·버스에서 누군가 몸을 필요 이상으로 밀착하거나 손으로 만져 불쾌함과 수치심을 느낀 분의 상황입니다. 사람이 많아 우연히 닿은 건지 의도된 추행인지 순간 헷갈리고, 놀라 그 자리에서 항의도 못 한 채 내려버려 \'내가 예민한 건가\' 자책하게 돼 막막하셨을 거예요. 불특정 다수 속에서 가해자를 특정하기도 어려워 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하도록 규정하는 영역입니다. 판례는 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 판단하고, 공동체 내 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있는 경우에는 추행에 해당하지 않을 수 있다고 본 사례 흐름이 있는 영역입니다. 혼잡 + 밀착·접촉 + 의사에 반함 결합은 \'추행 해당성·증거\' 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 버스 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 노선·시각·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 혼잡에 따른 우연 접촉을 넘어 의사에 반한 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 역사·차량 CCTV·교통카드 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·동승자·신고 협조로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 현장·역무실 신고, 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡에 따른 우연한 접촉인지, 의사에 반한 의도적 접촉인지가 추행 판단의 분기점입니다. 가능하면 그 자리에서 도움을 요청하고 노선·시각·CCTV를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 대응·정황 정리 (즉시)</strong> — 가능하면 도움 요청·하차, 노선·시각·접촉 정황 정리.</li>\n<li><strong>2단계 — CCTV 보존 요청 (즉시)</strong> — 역무실·운수사에 역사·차량 CCTV 보존 요청.</li>\n<li><strong>3단계 — 교통기록 확보 (직후)</strong> — 교통카드·이동 기록으로 시각·구간 특정.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112·지하철경찰대에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 버스 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>노선·시각·접촉 정황 메모</strong></li>\n<li><strong>역사·차량 CCTV 보존 요청 자료</strong></li>\n<li><strong>교통카드·이동 기록 (구간·시각 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>동승자·목격자·역무원 진술·연락처</strong></li>\n<li><strong>의류·신체 접촉 흔적 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 역사·차량 CCTV는 보존 기간이 짧으므로 곧바로 역무실·운수사에 보존을 요청하는 것이 중요합니다. 교통카드 기록으로 구간·시각을 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 의사에 반한 추행으로 평가되는지.</li>\n<li><strong>의례적·우연 접촉</strong> — 혼잡에 따른 우연·사회적 상당 범위인지.</li>\n<li><strong>고의</strong> — 성적 의도의 접촉인지 우연한 닿음인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동승자로 상대를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·교통기록·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·지하철경찰대 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 해당성과 의례적·사회적 상당성의 경계',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 어떤 행위가 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 판단해야 하고, 공동체 내 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있는 경우 또는 상대방의 성적 자유를 침해하는 정도에 이르지 않은 경우에는 강제추행에 해당하지 않을 수 있다고 판시했습니다. 대중교통 밀착 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡 + 밀착·접촉 + 의사에 반함 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '혼잡해서 닿은 건지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>우연 접촉을 넘어 의사에 반한 의도적 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>당황해 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '가해자를 어떻게 특정하나요?',
        answer:
          '<strong>역사·차량 CCTV와 동승자 협조로 특정할 수 있는 영역입니다.</strong> CCTV 보존부터 신속히 요청하세요.',
      },
      {
        question: 'CCTV가 없으면 입증이 어렵나요?',
        answer:
          '<strong>직후 호소·교통기록·목격자 진술 등 정황으로도 다툴 수 있는 영역입니다.</strong> 교통카드 기록을 확보하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: '헬스장 PT 트레이너 추행 대응', href: '/guide/sex-crime/sex-crime-gym-pt-trainer-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-public-restroom-illegal-filming-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-public-restroom-illegal-filming-track',
    keyword: '공중화장실 불법촬영',
    questionKeyword: '공중화장실·공용 탈의실에서 옆 칸·천장·문틈으로 누군가 휴대폰을 들이밀거나 몰래 촬영하는 걸 발견했어요. 제 신체가 찍혔을까 무섭고 어딘가로 전송됐을까 불안한데, 이런 불법촬영을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '공중화장실 불법촬영 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공중화장실 불법촬영 — 5단계 신고·증거 점검 | 로앤가이드',
      description:
        '공중화장실에서 몰래 촬영을 당하거나 발견했다면, 성폭력처벌법 제14조 카메라등이용촬영과 신체 직접 촬영·복제물 법리를 따지고 증거 보전까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「공중화장실·공용 탈의실을 쓰던 중 옆 칸이나 천장·문틈으로 휴대폰을 들이밀거나 몰래 촬영하는 사람을 발견해 큰 충격과 수치심을 느낀 분의 상황입니다. 내 신체가 찍혔을지, 혹시 그 영상이 어딘가로 전송되거나 저장됐을지 두렵고, 가해자를 붙잡거나 그 자리에서 무엇을 해야 증거가 남을지 막막하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능의 기계장치를 이용해 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 의사에 반해 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 같은 조 제1항의 \'사람의 신체를 촬영한 행위\'는 사람의 신체 그 자체를 직접 촬영하는 행위를 의미하고, 의사에 반하지 않게 촬영된 신체 영상물의 복제물 등에 관한 규율 체계를 정리한 사례 흐름이 있는 영역입니다. 몰래 촬영 + 신체 직접 촬영 + 전송·저장 위험 결합은 \'촬영·유포·증거 보전\' 절차가 가능한 트랙입니다. 피해자라면 ① 현장 정황 정리 ② 촬영·유포 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공중화장실 불법촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장 정황·촬영·유포·증거·가해자 특정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 정황 정리</strong> — 장소·시각·촬영 방식·발견 경위 정리.</li>\n<li><strong>② 촬영·유포</strong> — 신체가 직접 촬영·저장됐는지, 전송 위험이 있는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 가해자 기기·현장을 임의 조작 없이 경찰이 확보하게 보존.</li>\n<li><strong>④ 가해자 특정</strong> — 현장 제지·CCTV·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·디지털성범죄피해자지원센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가해자의 휴대폰·저장매체를 임의로 삭제·조작하면 증거가 훼손될 수 있어, 현장에서 제지하고 곧바로 신고해 경찰이 확보하게 하는 것이 핵심입니다. 신체가 직접 촬영·저장됐는지가 촬영죄 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 제지·신고 (즉시)</strong> — 안전이 확보되면 가해자 제지·도움 요청, 112 신고.</li>\n<li><strong>2단계 — 현장·기기 보존 (즉시)</strong> — 가해자 기기를 임의 조작 없이 경찰이 확보하게 보존, 장소·시각 사진 확보.</li>\n<li><strong>3단계 — 기기·저장매체 분석 (직후)</strong> — 경찰에 기기 인계, 촬영·저장·전송 여부 분석 요청.</li>\n<li><strong>4단계 — 진술·피해 상담 (준비 후)</strong> — 경찰 진술, 디지털성범죄피해자지원센터 상담.</li>\n<li><strong>5단계 — 삭제·보호조치 (이후)</strong> — 촬영물 유포 시 삭제 지원·신변보호·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공중화장실 불법촬영 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장 정황·촬영·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>장소·시각·촬영 방식 메모 (현상 보존)</strong></li>\n<li><strong>현장·진입로 CCTV 보존 요청 자료</strong></li>\n<li><strong>가해자 기기·인상착의·도주 방향 정보</strong></li>\n<li><strong>발견 경위·제지 정황 기록</strong></li>\n<li><strong>기기·저장매체 경찰 인계 기록</strong></li>\n<li><strong>목격자·신고 협조자 진술·연락처</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가해자의 기기는 직접 열어보지 말고 경찰이 확보하게 하는 것이 안전합니다. 현장·진입로 CCTV는 보존 기간이 짧으니 곧바로 보존을 요청하면 가해자 특정과 촬영 정황 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신체 직접 촬영</strong> — 신체 그 자체를 직접 촬영했는지.</li>\n<li><strong>미수·기수</strong> — 들이대기만 했는지, 실제 촬영·저장에 이르렀는지.</li>\n<li><strong>의사에 반함</strong> — 촬영대상자의 의사에 반한 촬영인지.</li>\n<li><strong>유포·전송</strong> — 촬영물이 전송·저장·유포됐는지.</li>\n<li><strong>가해자 특정</strong> — 현장 제지·CCTV·기기로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·상담 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신체 직접 촬영과 복제물의 법리',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항이 촬영 대상을 \'사람의 신체\'로 규정하고 있어 사람의 신체 그 자체를 직접 촬영하는 행위만이 위 조항의 \'사람의 신체를 촬영한 행위\'에 해당하고, 같은 조 제2항·제4항의 촬영물·복제물의 의미와 규율 범위를 체계적으로 해석해야 한다고 판시했습니다. 공중화장실에서 신체를 몰래 촬영한 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '몰래 촬영 + 신체 직접 촬영 + 전송·저장 위험 결합 시 촬영·유포·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '촬영하는 걸 발견했는데 현장에서 무엇부터 하나요?',
        answer:
          '<strong>안전이 확보되면 도움을 요청하고 곧바로 112에 신고해 경찰이 기기를 확보하게 하는 영역입니다.</strong> 기기는 직접 조작하지 마세요.',
      },
      {
        question: '실제로 찍혔는지 어떻게 확인하나요?',
        answer:
          '<strong>경찰의 기기·저장매체 분석으로 촬영·저장 여부를 확인하는 영역입니다.</strong> 기기를 임의로 삭제·조작하지 마세요.',
      },
      {
        question: '들이대기만 하고 찍지는 못했어도 처벌되나요?',
        answer:
          '<strong>촬영·저장에 이르렀는지에 따라 미수·기수가 갈리는 영역입니다.</strong> 기기 상태·메모리 분석이 중요합니다.',
      },
      {
        question: '촬영물이 유포됐다면 어떻게 하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제 지원을 받아볼 수 있는 영역입니다.</strong> 유포 정황을 캡처해 신고하세요.',
      },
      {
        question: '가해자가 도주했는데 잡을 수 있나요?',
        answer:
          '<strong>현장·진입로 CCTV와 목격자 협조로 수사가 진행될 수 있는 영역입니다.</strong> CCTV 보존부터 신속히 요청하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '불법촬영 신고 절차', href: '/guide/sex-crime/sex-crime-illegal-filming-report-procedure' },
      { label: '촬영물 삭제 지원', href: '/guide/sex-crime/sex-crime-image-deletion-support-track' },
      { label: '촬영·전시 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-workplace-afterparty-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-workplace-afterparty-falsely-accused-defense',
    keyword: '회식 후 동료 추행 무고',
    questionKeyword: '회식 자리에서 동료들과 어울렸을 뿐인데, 며칠 뒤 한 동료가 \'그날 추행당했다\'며 회사·경찰에 신고했어요. 저는 추행한 적도 없고 상대 진술 외엔 별다른 정황도 없는데, 사실과 다른 이 신고에 어떻게 방어하나요?',
    ctaKeyword: '회식 후 동료 추행 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 후 동료 추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '회식 후 동료가 추행을 주장하며 신고했다면, 무죄추정·진술 신빙성·추행 해당성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식 자리에서 동료들과 평소처럼 어울렸을 뿐인데, 며칠 뒤 한 동료가 \'그날 추행당했다\'며 회사와 경찰에 신고해 한순간에 가해자로 지목된 분의 상황입니다. 정작 본인은 추행한 적이 없고 상대의 진술 외에는 이를 뒷받침할 객관적 정황도 뚜렷하지 않은데, 직장 내 소문과 징계까지 겹쳐 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 상대 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지, 그리고 문제 된 행위가 추행에 해당하는지가 핵심 쟁점입니다. 형사재판에서 유죄 인정은 합리적 의심이 없을 정도의 증명에 이르러야 하고, 무죄추정의 원칙상 검사의 증명이 그 확신에 이르지 못하면 피고인의 이익으로 판단해야 합니다. 판례는 피해자 진술이 유일한 증거인 경우 그 진술이 객관적 정황·경험칙에 비추어 합리적 의심을 배제할 정도로 신빙성이 있어야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 술자리 정황·진술 신빙성·추행 해당성을 정리해 다툴 수 있는 영역입니다. 회식 정황 + 진술 신빙성 다툼 + 추행 해당성 검토 결합은 \'진술 신빙성·추행 해당성\' 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 진술 신빙성 ③ 정황 검토 ④ 추행 해당성 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 후 동료 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·진술 신빙성·정황·추행 해당성·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식 경위·동석자·자리 배치·접촉 여부 정리.</li>\n<li><strong>② 진술 신빙성</strong> — 상대 진술의 일관성·정황 부합·경험칙 부합 검토.</li>\n<li><strong>③ 정황 검토</strong> — CCTV·동석자 진술·당시 분위기 등 객관 정황 검토.</li>\n<li><strong>④ 추행 해당성</strong> — 문제 된 행위가 성적 의도의 추행으로 평가되는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술이 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도로 신빙성이 있어야 한다는 점이 분기점입니다. 술자리 정황·동석자 진술·CCTV로 진술 신빙성과 추행 해당성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 회식 경위·동석자·자리 배치·접촉 정황 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·결제·메시지·동석자 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 진술 신빙성·해당성 쟁점 정리 (2주)</strong> — 진술의 일관성·정황 부합과 추행 해당성 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 후 동료 추행 진술 신빙성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·진술 신빙성·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 경위·참석자·자리 배치 메모</strong></li>\n<li><strong>주점·노래방 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·이동·시간 기록 (상황 특정)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당시·사후 대화·메시지 기록</strong></li>\n<li><strong>상대 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'상대 진술이 정황·경험칙에 부합하는지\'와 \'문제 된 행위가 추행에 해당하는지\'입니다. CCTV·동석자 진술로 당시 상황을 정돈하고 진술의 모순·불부합을 구체적으로 짚으면 진술 신빙성·추행 해당성 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 상대 진술이 정황·경험칙에 부합하는지.</li>\n<li><strong>증명 정도</strong> — 합리적 의심을 배제할 정도로 증명됐는지.</li>\n<li><strong>추행 해당성</strong> — 문제 된 행위가 성적 의도의 추행인지.</li>\n<li><strong>고의·우연</strong> — 의도된 접촉인지 우연한 접촉인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 진술 신빙성의 판단',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 판결이 확정될 때까지 무죄로 추정되고, 유죄 인정은 합리적 의심을 배제할 정도의 증명에 이르러야 하며, 피해자 진술 등이 유일한 증거인 경우 그 진술이 객관적 정황과 경험칙에 비추어 합리적 의심을 배제할 정도로 신빙성이 있고 피고인의 무죄 주장을 배척하기에 충분해야 유죄로 판단할 수 있다고 판시했습니다. 회식 후 추행 주장을 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '회식 정황 + 진술 신빙성 다툼 + 추행 해당성 검토 결합 시 진술 신빙성·추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>진술이 유일한 증거면 정황·경험칙에 부합하는 신빙성을 갖춰야 인정되는 영역입니다.</strong> 진술 모순·불부합을 정리하세요.',
      },
      {
        question: '추행한 적이 없는데 어떻게 방어하나요?',
        answer:
          '<strong>CCTV·동석자 진술·당시 정황 등 객관 자료로 다툴 수 있는 영역입니다.</strong> 회식 경위·정황 자료를 모으세요.',
      },
      {
        question: '가볍게 닿은 정도라도 추행이 되나요?',
        answer:
          '<strong>접촉의 경위·관계·당시 상황을 종합해 추행 해당성을 판단하는 영역입니다.</strong> 접촉 태양·정황을 정리하세요.',
      },
      {
        question: '며칠 지나 신고했는데 그게 유리한가요?',
        answer:
          '<strong>신고 시점은 정황의 하나일 뿐 경위·진술을 종합해 판단하는 영역입니다.</strong> 사후 대화·정황을 함께 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense-track' },
      { label: '진술 신빙성 다툼', href: '/guide/sex-crime/sex-crime-statement-credibility-track' },
      { label: '추행 해당성 다툼', href: '/guide/sex-crime/sex-crime-indecency-standard-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
    ],
  },
];
