import { SpokePage } from '../spoke-pages';

// batch89 fraud(6) + sex-crime(4) — 10개 (2026-06-06)
//
// 고유 존재 이유:
// 1. fraud-startup-angel-investment-fake-track — 일반 투자사기류와 분기. '스타트업 엔젤투자로 송금했는데 사업·실적이 허위·잠적' 대가 일부 지급에도 교부금 전부 편취액 판단형 트랙(victim).
// 2. fraud-overseas-study-agency-prepay-vanish-track — 일반 선납 잠적류와 분기. '유학원에 학비·수속비를 선납했는데 잠적' 계약 당시 이행 의사·능력 기준 절차형 트랙(victim).
// 3. fraud-cosmetic-surgery-package-prepay-closure-track — 일반 선결제 폐업류와 분기. '성형외과 패키지 선결제 후 폐업' 제3자 교부·미필적 인식 편취 판단형 트랙(victim).
// 4. fraud-private-equity-fund-principal-loss-track — 일반 투자손실류와 분기. '사모펀드 원금 약속 후 손실·기망' 대가 일부 지급에도 교부금 전부 편취액 판단형 트랙(victim).
// 5. fraud-mobile-game-account-resale-chargeback-track — 일반 중고거래류와 분기. '모바일게임 계정 거래 후 회수·차지백' 고지의무·기망 판단형 트랙(victim).
// 6. fraud-goods-resale-middleman-falsely-accused-defense — 일반 사기 무고류와 분기. '물품 되팔이 중개를 두고 편취로 고소당함' 기망·인과관계 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-study-cafe-close-contact-track — 일반 추행류와 분기. '스터디카페에서 밀착·접촉 추행' 폭행·협박 의미 변경 법리 판단형 트랙(victim).
// 8. sex-crime-hospital-ward-inpatient-track — 일반 추행류와 분기. '병실 입원 중 기습추행' 기습추행·추행 해당성 법리 판단형 트랙(victim).
// 9. sex-crime-rental-studio-hidden-camera-track — 일반 불법촬영류와 분기. '대여스튜디오 몰래카메라·시청' 카메라이용촬영·공연성 법리 절차형 트랙(victim).
// 10. sex-crime-mt-group-trip-intoxicated-falsely-accused-defense — 일반 성범죄 무고류와 분기. 'MT 만취 추행으로 고소당함' 진술 신빙성·추행 해당성 다툼 방어 판단형 트랙(accused).

export const spokesBatch89FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-startup-angel-investment-fake-track ───
  {
    domain: 'fraud',
    slug: 'fraud-startup-angel-investment-fake-track',
    keyword: '스타트업 엔젤투자 사기',
    questionKeyword: '유망하다는 스타트업에 엔젤투자로 수천만원을 송금했는데, 알고 보니 매출·실적이 부풀려졌거나 사업 자체가 허위였고 대표는 연락이 끊겼어요. 처음부터 돌려줄 의사 없이 투자금만 모은 것 같은데, 사기로 신고하고 투자금을 돌려받을 수 있나요?',
    ctaKeyword: '스타트업 엔젤투자 편취액 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '스타트업 엔젤투자 사기 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '유망하다던 스타트업에 엔젤투자했는데 실적이 허위였고 대표가 잠적했다면, 형법 제347조 사기에서 대가 일부 지급에도 교부금 전부가 편취액일 수 있고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인 소개나 IR 자료를 믿고 \'곧 상장한다\', \'매출이 빠르게 늘고 있다\'는 말에 유망하다는 스타트업에 엔젤투자로 수천만원을 송금한 분의 상황입니다. 그런데 알고 보니 재무·매출 실적이 부풀려졌거나 사업 실체가 거의 없었고, 대표는 \'다음 라운드만 기다려 달라\'며 미루다 끝내 연락이 끊겨, 처음부터 돌려줄 의사·능력 없이 투자금만 모은 건 아닌지 의심되고 막막하실 거예요. 노후·여유 자금까지 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실적·재무를 허위·과장해 투자를 유도한 정황은 기망행위로 평가될 여지가 있고, 투자금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 그 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 허위 실적 + 투자 유도 + 잠적 결합은 \'편취액·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·송금 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 스타트업 엔젤투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·송금 정리</strong> — 투자계약·IR 자료·재무 설명·송금 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 매출·실적·재무를 허위·과장해 투자를 유도한 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 배당·담보가 있어도 교부한 투자금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·관련 특별법 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·다수 투자자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 사업 실패와 달리, 투자 유치 당시 실적·재무를 허위·과장해 속였는지가 사기 판단의 분기점입니다. 일부 배당·담보가 있어도 편취액은 교부한 투자금 전부로 평가될 수 있어 송금 내역을 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·송금 자료 보존 (즉시)</strong> — 투자계약·IR 자료·재무 설명·송금·대화 보존.</li>\n<li><strong>2단계 — 실적·법인 확인 (즉시)</strong> — 법인등기·재무·매출 실체와 IR 설명의 괴리 확인.</li>\n<li><strong>3단계 — 지급정지·자금 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·다수 투자자 공동 고소·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">스타트업 엔젤투자 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자계약서·약정서 (계약 내용)</strong></li>\n<li><strong>투자금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>IR 자료·재무·매출 설명 캡처</strong></li>\n<li><strong>실적 허위·과장 정황 (등기·공시 대조)</strong></li>\n<li><strong>대표와의 대화·연락 두절 정황</strong></li>\n<li><strong>다른 투자자·피해 규모 자료</strong></li>\n<li><strong>법인·대표·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: IR·재무 설명과 실제 법인등기·매출 실체를 대조해 모으면 기망 정황이 선명해집니다. 같은 라운드 투자자를 모아 송금·약속 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 실적·재무를 허위·과장해 투자를 유도했는지.</li>\n<li><strong>판단 시점</strong> — 투자 유치 당시 실체·이행 가능성이 있었는지.</li>\n<li><strong>편취액</strong> — 일부 배당·담보가 있어도 교부한 투자금 전부가 피해액인지.</li>\n<li><strong>단순 사업실패 항변</strong> — \'시장 악화로 실패했다\'는 주장과의 구별.</li>\n<li><strong>대표 특정</strong> — 법인·계좌·실운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급에도 교부 금원 전부가 편취액',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되거나 담보가 제공된 경우에도 편취액은 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 허위 실적으로 유치한 엔젤투자금의 피해액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '허위 실적 + 투자 유도 + 잠적 결합 시 편취액·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사업이 실패한 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>투자 유치 당시 실적·재무를 허위·과장해 속였는지가 핵심인 영역입니다.</strong> IR 설명과 실체의 괴리를 확보하세요.',
      },
      {
        question: '일부 배당을 받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 배당·담보가 있어도 교부한 투자금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '투자계약서를 썼는데도 사기가 되나요?',
        answer:
          '<strong>계약서 작성과 별개로 기망·편취 범의 정황으로 사기 여부를 검토하는 영역입니다.</strong> 재무·실적 자료를 대조하세요.',
      },
      {
        question: '투자자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>같은 라운드 피해는 묶어 공동 고소·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해 규모·송금 자료를 모으세요.',
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
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-overseas-study-agency-prepay-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-study-agency-prepay-vanish-track',
    keyword: '유학원 학비 선납 잠적 사기',
    questionKeyword: '유학원에 어학연수·유학 수속을 맡기며 학비와 수속비 수백만원을 선납했는데, 입학 허가도 비자도 진행되지 않고 유학원은 폐업하거나 연락이 끊겼어요. 처음부터 수속할 의사 없이 선납금만 받은 것 같은데, 사기로 신고하고 선납한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '유학원 학비 선납 잠적 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유학원 학비 선납 잠적 사기 — 5단계 이행의사·환급 점검 | 로앤가이드',
      description:
        '유학원에 학비·수속비를 선납했는데 수속이 안 되고 잠적했다면, 형법 제347조 사기의 편취 범의를 계약 당시 이행 의사·능력으로 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「어학연수나 유학을 준비하며 유학원에 입학 수속·비자 대행을 맡기고 학비와 수속비로 수백만원을 \'미리 내면 빨리 진행된다\'는 말에 선납한 분의 상황입니다. 그런데 약속한 입학 허가도 비자도 진행되지 않고, 담당자는 \'학교 답변을 기다리는 중\'이라며 미루다 끝내 폐업하거나 연락이 끊겨, 처음부터 수속할 의사·능력 없이 선납금만 받은 건 아닌지 의심되고 막막하실 거예요. 출국 일정까지 어그러져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 정상 수속할 의사·능력 없이 선납만 유도한 정황은 기망행위로 평가될 여지가 있고, 선납이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 거짓말을 하여 대가를 편취할 고의가 있었는지로 판단해야 하고, 거래의 내용·체결 경위·이행 과정 등을 종합해야 하며, 관련 행정법규를 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정해서는 안 된다고 본 사례 흐름이 있는 영역입니다. 선납 + 수속 미이행 + 잠적 결합은 \'편취 범의·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 편취 범의 ③ 지급정지·결제 이의 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유학원 학비 선납 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·편취 범의·결제 이의·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 수속 계약·견적·학비·수속비 선납 내역 정리.</li>\n<li><strong>② 편취 범의</strong> — 수속할 의사·능력 없이 선납만 받은 정황 정리.</li>\n<li><strong>③ 결제 이의·지급정지</strong> — 결제수단별 이의제기·계좌이체분 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약 당시 수속을 이행할 의사·능력이 있었는지가 기망 판단의 핵심입니다. 학교 지원·비자 진행 기록이 실제 있었는지, 선납 모집 시점과 폐업·잠적 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 계약·견적·선납·대화·진행 기록 보존.</li>\n<li><strong>2단계 — 수속 실체 확인 (즉시)</strong> — 학교 지원·비자 진행 여부와 폐업·잠적 시점 확인.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">유학원 학비 선납 잠적 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·편취 범의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수속 계약서·견적서 (계약 내용)</strong></li>\n<li><strong>학비·수속비 선납·이체 내역 (피해 금액)</strong></li>\n<li><strong>입학·비자 진행 약속·안내 기록</strong></li>\n<li><strong>담당자와의 대화·지연·연락 두절 정황</strong></li>\n<li><strong>학교·기관 미지원·미신청 확인 자료</strong></li>\n<li><strong>동일 유학원 피해·폐업 시점 자료</strong></li>\n<li><strong>유학원·사업자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실제로 학교 지원·비자 신청이 진행됐는지 학교·기관에 직접 확인해 두면 수속 의사 유무가 드러납니다. 선납 모집 시점과 폐업·잠적 시점, 동일 피해자를 함께 모으면 편취 범의 검토에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 수속 의사·능력 없이 선납만 받았는지.</li>\n<li><strong>판단 시점</strong> — 계약 당시 이행 가능성이 있었는지.</li>\n<li><strong>이행 정황</strong> — 학교 지원·비자 진행이 실제 있었는지.</li>\n<li><strong>단순 폐업 항변</strong> — \'운영난으로 폐업했다\'는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·담당자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (유학·수속 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 판단 시점과 기망행위 단정 한계',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 일을 완성·이행할 의사·능력이 없음에도 거짓말을 하여 대가를 편취할 고의가 있었는지로 판단해야 하고, 거래의 내용·체결 경위·이행 과정 등을 종합해야 하며, 관련 영업·계약절차를 규제하는 행정법규를 위반한 사정만으로 곧바로 기망행위에 해당한다고 단정해서는 안 된다고 판시했습니다. 유학 수속비 선납 후 잠적한 사안에서 편취 범의를 살펴볼 때에도 계약 당시 이행 의사를 기준으로 검토해볼 수 있습니다.',
        takeaway: '선납 + 수속 미이행 + 잠적 결합 시 편취 범의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '수속이 늦어진 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>계약 당시 수속할 의사·능력이 있었는지가 핵심인 영역입니다.</strong> 학교 지원·비자 진행 기록을 확인하세요.',
      },
      {
        question: '학교에 지원조차 안 했다면 어떻게 되나요?',
        answer:
          '<strong>실제 이행 정황이 없었다면 편취 범의를 다툴 자료가 되는 영역입니다.</strong> 학교·기관 미지원 확인을 받으세요.',
      },
      {
        question: '카드 할부로 냈는데 멈출 수 있나요?',
        answer:
          '<strong>할부 항변·결제 이의로 잔여 할부금 청구를 다퉈볼 수 있는 영역입니다.</strong> 미이행 정황을 정리해 이의신청하세요.',
      },
      {
        question: '유학원이 폐업했는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 폐업 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 유학원·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '선납·잠적 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-cosmetic-surgery-package-prepay-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-cosmetic-surgery-package-prepay-closure-track',
    keyword: '성형외과 패키지 선결제 폐업 사기',
    questionKeyword: '성형외과·피부과 시술 패키지를 할인받는다고 수백만원을 한 번에 선결제했는데, 몇 회 받지도 못한 채 병원이 갑자기 폐업했어요. 폐업이 예정된 걸 알면서도 선결제를 계속 받은 것 같은데, 사기로 신고하고 남은 횟수분 돈을 돌려받을 수 있나요?',
    ctaKeyword: '성형외과 패키지 선결제 폐업 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '성형외과 패키지 선결제 폐업 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '성형외과 시술 패키지를 선결제했는데 폐업으로 횟수가 묶였다면, 형법 제347조 사기에서 제3자 교부·미필적 인식까지 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'패키지로 묶으면 회당 가격이 훨씬 싸다\'는 권유에 성형외과·피부과 시술 패키지를 수백만원에 한 번에 선결제한 분의 상황입니다. 그런데 약속한 횟수를 몇 번 받지도 못한 채 병원이 갑자기 폐업하거나 운영자가 바뀌어 연락이 끊겨, 폐업이 예정된 걸 알면서도 선결제를 계속 받은 건 아닌지 의심되고 막막하실 거예요. 남은 횟수분 큰돈을 떼일까 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상 시술을 제공할 수 없음을 알면서도 패키지 선결제를 받은 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자에게 재물을 교부받게 한 경우에도, 제3자에게 재물을 취득하게 할 의사가 미필적 인식으로 있으면 사기죄가 성립할 수 있고, 그 이익이 누구에게 귀속되는지는 사기죄 성부에 영향이 없다고 본 사례 흐름이 있는 영역입니다. 패키지 선결제 + 폐업 + 횟수 미이행 결합은 \'편취·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 기망 정황 ③ 잔여 횟수·편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 성형외과 패키지 선결제 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 패키지 약정·횟수·선결제·시술 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 정상 제공 불가를 알면서도 선결제를 받은 정황 정리.</li>\n<li><strong>③ 잔여 횟수·편취액</strong> — 받지 못한 횟수와 교부한 결제금 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폐업·운영 불가를 알면서도 새 패키지 선결제를 받았는지가 사기 판단의 분기점입니다. 결제가 병원이 아닌 제3자 명의로 이뤄졌더라도 사기 성립이 검토될 수 있어 결제 흐름을 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 패키지 약정·결제·시술 기록·폐업 공지 보존.</li>\n<li><strong>2단계 — 폐업 시점·잔여 횟수 확인 (즉시)</strong> — 선결제 모집 시점과 폐업 시점, 받지 못한 횟수 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">성형외과 패키지 선결제 폐업 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>패키지 계약서·시술 동의서 (계약 내용)</strong></li>\n<li><strong>선결제·할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>시술 횟수·잔여 횟수 기록 (손해 산정)</strong></li>\n<li><strong>할인·장기 선결제 권유 광고·대화</strong></li>\n<li><strong>폐업·휴업·환불 거부 공지 캡처</strong></li>\n<li><strong>동일 병원 피해·모집 시점 자료</strong></li>\n<li><strong>병원·사업자·결제대행 계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 횟수와 약속한 횟수를 대조해 잔여 횟수를 정리하면 손해액이 분명해집니다. 폐업 직전까지 선결제를 받은 정황을 시점별로 모으면 기망 판단의 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 폐업·제공 불가를 알면서 선결제를 받았는지.</li>\n<li><strong>제3자 교부</strong> — 결제가 제3자 명의로 이뤄졌어도 편취로 평가되는지.</li>\n<li><strong>편취액</strong> — 받지 못한 횟수분과 교부한 결제금이 피해액인지.</li>\n<li><strong>단순 경영악화 항변</strong> — \'사정상 폐업했다\'는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 병원·사업자·결제 계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (의료·시술 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 교부 사기와 미필적 인식',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 기망행위로 스스로 재물을 취득하지 않고 제3자에게 재물을 교부받게 한 경우에도 범인에게 그 제3자로 하여금 재물을 취득하게 할 의사가 있으면 사기죄가 성립하고, 그 의사는 미필적 인식으로도 충분하며, 재물 교부가 있으면 그 자체로 재산침해가 되어 이익이 누구에게 귀속되는지는 사기죄 성부에 영향이 없다고 판시했습니다. 결제대행·운영자 명의가 얽힌 패키지 선결제 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '패키지 선결제 + 폐업 + 횟수 미이행 결합 시 편취·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '병원이 사정상 폐업한 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>제공 불가를 알면서도 선결제를 계속 받았는지가 핵심인 영역입니다.</strong> 모집 시점·폐업 정황을 확보하세요.',
      },
      {
        question: '결제를 다른 업체로 했는데도 사기가 되나요?',
        answer:
          '<strong>제3자 명의 결제라도 편취 의사가 있으면 사기가 검토되는 영역입니다.</strong> 결제 흐름·명의를 정리하세요.',
      },
      {
        question: '몇 번 받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>받지 못한 횟수분과 교부한 결제금을 기준으로 검토하는 영역입니다.</strong> 시술·잔여 횟수를 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 항변·결제 이의로 잔여 할부금 청구를 다퉈볼 수 있는 영역입니다.</strong> 미이행 정황을 정리해 이의신청하세요.',
      },
      {
        question: '같은 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 병원·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '선결제 폐업 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-private-equity-fund-principal-loss-track ───
  {
    domain: 'fraud',
    slug: 'fraud-private-equity-fund-principal-loss-track',
    keyword: '사모펀드 원금 손실 사기',
    questionKeyword: '\'안전한 사모펀드\'라며 원금 보장에 가까운 수익을 약속받고 수천만원을 투자했는데, 운용 내역은 깜깜하고 원금까지 큰 손실이 났어요. 처음부터 약속대로 운용할 의사 없이 투자금만 끌어모은 것 같은데, 사기로 신고하고 투자금을 돌려받을 수 있나요?',
    ctaKeyword: '사모펀드 원금 손실 편취액 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사모펀드 원금 손실 사기 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '안전하다던 사모펀드에 투자했는데 원금까지 손실이 났다면, 형법 제347조 사기에서 대가 일부 지급에도 교부금 전부가 편취액일 수 있고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「\'기관 전용 안전한 사모펀드\', \'원금 보장에 가까운 고수익\'이라는 권유를 믿고 수천만원을 투자한 분의 상황입니다. 그런데 운용 내역은 제대로 공개되지 않고, 약속한 수익은커녕 원금까지 큰 손실이 났으며, 판매·운용 측은 \'시장 탓\'이라며 책임을 미뤄, 처음부터 약속대로 운용할 의사 없이 투자금만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 노후 자금까지 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 위험을 숨기거나 운용 구조를 허위로 설명해 투자를 유도한 정황은 기망행위로 평가될 여지가 있고, 투자금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망행위를 수단으로 한 권리행사가 사기죄를 구성할 수 있고, 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 상당액을 공제한 차액이 아니라 교부받은 금원 전부이며, 이는 사기로 인한 특정경제범죄법 위반죄에서도 마찬가지라고 본 사례 흐름이 있는 영역입니다. 허위 운용 설명 + 투자 유도 + 원금 손실 결합은 \'편취액·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·송금 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사모펀드 원금 손실 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·송금 정리</strong> — 가입 권유·투자설명서·송금·수익 약속 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 위험을 숨기거나 운용 구조를 허위로 설명한 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 수익 지급이 있어도 교부한 투자금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·관련 특별법 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 금감원 분쟁·피해구제·다수 투자자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 투자손실과 달리, 위험·운용 구조를 허위로 설명해 가입을 유도했는지가 사기 판단의 분기점입니다. 일부 수익을 받았어도 편취액은 교부한 투자금 전부로 평가될 수 있어 가입 권유 자료를 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·송금 자료 보존 (즉시)</strong> — 가입 권유·투자설명서·송금·수익 약속·공지 보존.</li>\n<li><strong>2단계 — 금감원·운용 확인 (즉시)</strong> — 금융감독원 1332 상담, 운용·공시·위험 설명 괴리 확인.</li>\n<li><strong>3단계 — 분쟁조정·자금 조회 (병행)</strong> — 금감원 분쟁조정 신청·동일 계좌 피해 조회 검토.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·다수 투자자 공동 고소·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사모펀드 원금 손실 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>가입 권유·투자설명서·약관 캡처 (약속 내용)</strong></li>\n<li><strong>투자금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>원금 보장·수익 약속 광고·대화</strong></li>\n<li><strong>운용·손실·지급 정지 공지·보고 기록</strong></li>\n<li><strong>위험 설명 누락·허위 정황 자료</strong></li>\n<li><strong>판매사·운용사·다른 피해자 자료</strong></li>\n<li><strong>금감원 상담·사건사고사실확인원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 원금 보장·고수익을 강조한 권유와 실제 운용·손실 보고를 함께 모으면 기망 정황이 선명해집니다. 같은 펀드 피해자를 모아 송금·약속 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 위험·운용 구조를 허위로 설명해 가입을 유도했는지.</li>\n<li><strong>판단 시점</strong> — 가입 권유 당시 약속대로 운용할 의사가 있었는지.</li>\n<li><strong>편취액</strong> — 일부 수익이 있어도 교부한 투자금 전부가 피해액인지.</li>\n<li><strong>단순 투자손실 항변</strong> — \'시장 악화로 손실\'이라는 주장과의 구별.</li>\n<li><strong>운용자 특정</strong> — 판매사·운용사·실운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·분쟁조정 상담)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급에도 교부 금원 전부가 편취액',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 기망행위를 수단으로 한 권리행사가 사기죄를 구성할 수 있고, 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 대가 상당액을 공제한 차액이 아니라 교부받은 금원 전부이며, 이는 사기로 인한 특정경제범죄법 위반죄에서도 마찬가지라고 판시했습니다. 일부 수익이 지급된 사모펀드 투자금의 피해액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '허위 운용 설명 + 투자 유도 + 원금 손실 결합 시 편취액·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '투자는 원래 손실이 날 수 있는데 사기가 되나요?',
        answer:
          '<strong>위험·운용 구조를 허위로 설명해 가입을 유도했는지가 핵심인 영역입니다.</strong> 권유와 실제 운용의 괴리를 확보하세요.',
      },
      {
        question: '일부 수익을 받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 수익이 있어도 교부한 투자금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '금감원에 분쟁조정을 신청할 수 있나요?',
        answer:
          '<strong>금융감독원 1332 상담·분쟁조정과 형사 대응을 함께 검토하는 영역입니다.</strong> 권유·설명 자료를 정리하세요.',
      },
      {
        question: '투자자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>같은 펀드 피해는 묶어 공동 고소·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해 규모·송금 자료를 모으세요.',
      },
      {
        question: '판매사가 정식 등록업체인데도 사기가 되나요?',
        answer:
          '<strong>등록 여부와 별개로 기망·허위 설명 정황으로 사기 여부를 검토하는 영역입니다.</strong> 위험 설명 누락을 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자사기 대응', href: '/guide/fraud/fraud-investment-scam-response-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-mobile-game-account-resale-chargeback-track ───
  {
    domain: 'fraud',
    slug: 'fraud-mobile-game-account-resale-chargeback-track',
    keyword: '모바일게임 계정 거래 사기',
    questionKeyword: '모바일게임 계정을 거래 사이트에서 수십만원에 사거나 팔았는데, 알고 보니 분쟁·복구 가능성이 있는 계정을 숨기고 넘겼거나 결제 후 계정을 회수·차지백당했어요. 처음부터 정상 거래할 의사가 없었던 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '모바일게임 계정 거래 사기 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '모바일게임 계정 거래 사기 — 5단계 고지의무·환급 점검 | 로앤가이드',
      description:
        '게임 계정을 거래했는데 회수·차지백·복구로 돈이 묶였다면, 형법 제347조 사기에서 고지의무 위반·기망 법리를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「오래 키운 모바일게임 계정을 거래 사이트나 커뮤니티에서 수십만원에 사거나 팔았는데, 막상 거래 후 문제가 생긴 분의 상황입니다. 사는 쪽은 분쟁·복구·정지 위험이 있는 계정인 줄 모르고 샀다가 곧 회수당하고, 파는 쪽은 정상 양도했는데 상대가 결제를 차지백·취소해 계정과 돈을 모두 잃어, 처음부터 정상 거래할 의사가 없었던 건 아닌지 의심되고 막막하실 거예요. 계정 거래라 \'사기로 인정될까\' 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 중요한 사정을 알리지 않거나 정상 거래 의사 없이 대금·계정을 받은 정황은 기망행위로 평가될 여지가 있고, 대금·계정 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 기망은 신의칙상 지켜야 할 의무를 저버리는 적극적·소극적 행위를 모두 포함하고, 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 그 사정을 고지할 의무가 있으며 이를 묵비한 것도 기망에 해당하고, 현실적 손해 발생은 사기죄의 구성요건이 아니라고 본 사례 흐름이 있는 영역입니다. 계정 거래 + 고지 누락·차지백 + 회수 결합은 \'고지의무·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 기망·고지 정황 ③ 지급정지·이의 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 모바일게임 계정 거래 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·고지 정황·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 거래 글·합의 조건·결제·계정 양도 내역 정리.</li>\n<li><strong>② 기망·고지 정황</strong> — 분쟁·복구 위험을 숨겼거나 회수·차지백 의도를 정리.</li>\n<li><strong>③ 지급정지·이의</strong> — 계좌 이체분 지급정지·결제 이의제기 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 계정·계좌 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대가 알았더라면 거래하지 않았을 사정(복구·정지 위험 등)을 숨겼는지, 또는 처음부터 회수·차지백 의도였는지가 기망 판단의 분기점입니다. 거래 글·대화·결제 흐름을 시점별로 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 거래 글·대화·결제·계정 양도 캡처 보존.</li>\n<li><strong>2단계 — 회수·차지백 시점 확인 (즉시)</strong> — 계정 회수·결제 취소·정지 시점과 경위 정리.</li>\n<li><strong>3단계 — 지급정지·이의 (병행)</strong> — 계좌 이체분 지급정지·결제 이의제기 검토.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">모바일게임 계정 거래 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·고지 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 글·매물 설명 캡처 (거래 조건)</strong></li>\n<li><strong>결제·이체·차지백 내역 (피해 금액)</strong></li>\n<li><strong>계정 양도·회수·정지 기록</strong></li>\n<li><strong>분쟁·복구·정지 위험 고지 여부 대화</strong></li>\n<li><strong>상대 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>거래 사이트·게임사 회신·정책 자료</strong></li>\n<li><strong>동일 상대·계좌 피해 조회 결과</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거래 글과 대화에서 분쟁·복구·정지 위험을 알렸는지가 고지의무 판단의 자료가 됩니다. 회수·차지백 시점과 경위, 결제 흐름을 정리하면 기망과 손해 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무</strong> — 복구·정지 등 중요한 사정을 알렸어야 했는지.</li>\n<li><strong>기망 정황</strong> — 정상 거래 의사 없이 회수·차지백을 노렸는지.</li>\n<li><strong>손해 발생</strong> — 현실적 손해가 없어도 사기가 성립할 수 있는지.</li>\n<li><strong>약관 위반 항변</strong> — \'계정 거래 자체가 금지\'라는 주장과의 구별.</li>\n<li><strong>상대 특정</strong> — 닉네임·계좌·결제 기록으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·콘텐츠 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반과 묵비에 의한 기망',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 신의성실의 의무를 저버리는 모든 적극적·소극적 행위를 포함하고, 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 그 사정을 고지할 의무가 있으며 이를 묵비한 것도 기망에 해당하고, 사기죄는 현실적 손해 발생을 구성요건으로 하지 않는다고 판시했습니다. 분쟁·복구 위험을 숨긴 게임 계정 거래 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '계정 거래 + 고지 누락·차지백 + 회수 결합 시 고지의무·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계정 거래는 약관 위반인데도 사기로 신고되나요?',
        answer:
          '<strong>약관 위반과 별개로 기망·고지의무 위반 정황으로 사기 여부를 검토하는 영역입니다.</strong> 거래 글·대화를 확보하세요.',
      },
      {
        question: '복구·정지 위험을 안 알린 것도 기망인가요?',
        answer:
          '<strong>상대가 알았다면 거래하지 않았을 사정을 숨겼다면 기망으로 평가될 수 있는 영역입니다.</strong> 고지 여부 대화를 정리하세요.',
      },
      {
        question: '결제를 차지백당했는데 사기가 되나요?',
        answer:
          '<strong>처음부터 회수·차지백 의도였는지로 기망을 다투는 영역입니다.</strong> 차지백 시점·경위를 정리하세요.',
      },
      {
        question: '손해가 확정되지 않았는데도 신고되나요?',
        answer:
          '<strong>현실적 손해 발생이 사기죄의 요건은 아닌 영역입니다.</strong> 거래·교부 정황을 정리해 신고를 검토하세요.',
      },
      {
        question: '상대 닉네임만 아는데 특정이 되나요?',
        answer:
          '<strong>거래 사이트·결제·계좌 기록으로 상대를 특정할 수 있는 영역입니다.</strong> 결제·계좌 기록부터 확보하세요.',
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

  // ─── 6. fraud-goods-resale-middleman-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-goods-resale-middleman-falsely-accused-defense',
    keyword: '물품 되팔이 중개 사기 무고',
    questionKeyword: '인기 물품을 싸게 떼어 되파는 중개를 하면서 정상적으로 돈을 받고 물건을 넘겼을 뿐인데, 일부 거래가 어긋나자 한 구매자가 \'처음부터 속였다\'며 사기로 고소했어요. 저는 편취할 의도가 없었고 거래 흐름도 정상이었는데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '물품 되팔이 중개 사기 무고 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '물품 되팔이 중개 사기 무고 방어 — 5단계 기망·인과 점검 | 로앤가이드',
      description:
        '되팔이 중개로 정상 거래했는데 사기로 고소당했다면, 형법 제347조 사기의 기망·편취 범의·인과관계를 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「인기 물품을 싸게 떼어 되파는 중개를 하면서, 정상적으로 대금을 받고 물건을 넘기거나 매입처와 구매자를 연결해 왔을 뿐인데, 일부 거래에서 배송 지연·환불 분쟁이 생기자 한 구매자가 \'처음부터 속였다\'며 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 편취할 의도가 없었고 거래 흐름도 정상이었는데, 거래 규모가 크고 상대가 많다는 이유로 의심부터 받게 돼 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 거래 당시 기망행위와 편취 범의가 있었는지, 그리고 상대의 처분행위와 기망 사이에 인과관계가 있었는지가 핵심 쟁점입니다. 판례는 사기죄가 성립하려면 기망행위와 그로 인한 처분행위 사이에 인과관계가 있어야 하고, 허위 자료를 제출했더라도 그 기망과 상대의 의사결정 사이에 인과관계가 단절되는 사정이 있으면 사기죄를 인정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 거래 정황·기망 유무·인과관계를 정리해 다툴 수 있는 영역입니다. 정상 거래 흐름 + 편취 범의 다툼 + 인과관계 검토 결합은 \'기망·인과관계\' 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 거래 정리 ② 기망 유무 ③ 편취 범의 ④ 인과관계 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 물품 되팔이 중개 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 유무·편취 범의·인과관계·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 정리</strong> — 매입·중개·판매 흐름과 정산·배송 내역 정리.</li>\n<li><strong>② 기망 유무</strong> — 거래 당시 허위 고지·기망행위가 있었는지 검토.</li>\n<li><strong>③ 편취 범의</strong> — 정산·이행 의사·능력이 있었는지 객관 정황으로 검토.</li>\n<li><strong>④ 인과관계</strong> — 기망과 상대 처분행위 사이 인과관계가 있었는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·거래 자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 거래가 어긋났다는 사정만으로 곧바로 사기가 되는 것이 아니라, 기망행위·편취 범의와 인과관계가 있어야 한다는 점이 분기점입니다. 정산·배송·매입 흐름을 객관 자료로 정돈해 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·정산 정리 (즉시)</strong> — 매입·중개·판매·정산·배송 내역과 흐름 정리.</li>\n<li><strong>2단계 — 객관 자료 확보 (1주)</strong> — 입출금·송장·재고·대화 등 거래 정상성 자료 확보.</li>\n<li><strong>3단계 — 기망·인과 쟁점 정리 (2주)</strong> — 기망 유무·편취 범의·인과관계 단절 사정 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">물품 되팔이 중개 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 유무·인과관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>매입·중개·판매 거래 내역 (거래 흐름)</strong></li>\n<li><strong>입출금·정산·환불 내역 (이행 정황)</strong></li>\n<li><strong>송장·재고·배송 기록 (이행 능력)</strong></li>\n<li><strong>구매자와의 대화·고지 내용 기록</strong></li>\n<li><strong>지연·분쟁 발생 경위·해결 시도 자료</strong></li>\n<li><strong>고소장·상대 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'거래 당시 기망·편취 범의가 있었는지\'와 \'기망과 처분행위 사이 인과관계가 있었는지\'입니다. 입출금·정산·송장 기록으로 거래 정상성을 정돈하고 인과관계 단절 사정을 구체적으로 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 유무</strong> — 거래 당시 허위 고지·기망행위가 있었는지.</li>\n<li><strong>편취 범의</strong> — 정산·이행 의사·능력이 있었는지.</li>\n<li><strong>인과관계</strong> — 기망과 상대 처분행위 사이 인과관계가 있었는지.</li>\n<li><strong>단순 채무불이행</strong> — 지연·분쟁이 민사 다툼에 그치는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망과 처분행위 사이 인과관계',
        summary:
          '대법원 2003도3516(대법원, 2003.10.10 선고) 영역에서 법원은 사기죄가 성립하려면 기망행위와 그로 인한 상대방의 처분행위 사이에 인과관계가 있어야 하고, 허위의 자료를 제출했더라도 그 기망과 상대방의 의사결정 사이에 인과관계가 단절된다고 볼 사정이 있으면 사기죄를 인정할 수 없다는 취지로, 인과관계를 충분히 살피지 않고 유죄로 본 원심을 파기하였습니다. 거래가 어긋난 되팔이 중개를 사기로 다투는 사안을 살펴볼 때에도 인과관계 기준을 검토해볼 수 있습니다.',
        takeaway: '정상 거래 흐름 + 편취 범의 다툼 + 인과관계 검토 결합 시 기망·인과관계 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '거래가 어긋났을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>거래 어긋남만으로는 부족하고 기망·편취 범의·인과관계가 필요한 영역입니다.</strong> 거래·정산 흐름을 정리하세요.',
      },
      {
        question: '편취할 의도가 없었음을 어떻게 보이나요?',
        answer:
          '<strong>입출금·정산·송장 등 객관 자료로 이행 의사·능력을 다툴 수 있는 영역입니다.</strong> 거래 정상성 자료를 모으세요.',
      },
      {
        question: '허위 자료를 낸 적이 없는데도 불리한가요?',
        answer:
          '<strong>기망과 처분행위 사이 인과관계가 없으면 사기가 인정되기 어려운 영역입니다.</strong> 인과관계 단절 사정을 정리하세요.',
      },
      {
        question: '민사 분쟁과 형사 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 채무불이행에 그치는지, 기망·편취 범의가 있는지로 갈리는 영역입니다.</strong> 지연·해결 시도 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 거래 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '동업자금 유용 무고 방어', href: '/guide/fraud/fraud-joint-business-fund-misappropriation-falsely-accused-defense' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '민사 채무불이행과 사기 구별', href: '/guide/fraud/fraud-civil-debt-distinction-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
    ],
  },

  // ─── 7. sex-crime-study-cafe-close-contact-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-study-cafe-close-contact-track',
    keyword: '스터디카페 밀착 추행',
    questionKeyword: '스터디카페에서 공부하던 중 옆자리 사람이 필요 이상으로 몸을 밀착하거나 손으로 만져 불쾌하고 수치스러웠어요. 좁은 자리라 우연인지 의도된 추행인지 헷갈리고 그 자리에서 항의도 못 했는데, 이런 밀착 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '스터디카페 밀착 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '스터디카페 밀착 추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '스터디카페에서 밀착·접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 폭행·협박 의미와 추행 해당성 법리를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「조용히 공부하려 찾은 스터디카페에서, 옆자리나 같은 좌석 칸의 누군가가 필요 이상으로 몸을 밀착하거나 손으로 슬쩍 만져 불쾌함과 수치심을 느낀 분의 상황입니다. 좌석이 좁아 우연히 닿은 건지 의도된 추행인지 순간 헷갈리고, 놀라 그 자리에서 항의도 못 한 채 자리를 떠나 \'내가 예민한 건가\' 자책하게 돼 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대해 불법한 유형력을 행사하거나 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것이라고 그 의미를 정리해, 의사에 반한 신체 접촉이 추행으로 평가될 수 있다고 본 사례 흐름이 있는 영역입니다. 좁은 좌석 + 밀착·접촉 + 의사에 반함 결합은 \'추행 해당성·증거\' 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 스터디카페 밀착 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 지점·좌석·시각·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 좌석 협소에 따른 우연 접촉을 넘어 의사에 반한 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 매장 CCTV·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·회원·결제 기록으로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 항거를 곤란하게 할 정도가 아니어도 의사에 반한 유형력 행사가 추행으로 평가될 수 있다는 점이 분기점입니다. 좌석·시각·접촉 정황과 매장 CCTV를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 대응·정황 정리 (즉시)</strong> — 가능하면 도움 요청, 지점·좌석·시각·접촉 정황 정리.</li>\n<li><strong>2단계 — CCTV 보존 요청 (즉시)</strong> — 매장·운영사에 CCTV 보존 요청.</li>\n<li><strong>3단계 — 이용기록 확보 (직후)</strong> — 회원·결제·좌석 배정 기록으로 시각·자리 특정.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스터디카페 밀착 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>지점·좌석·시각·접촉 정황 메모</strong></li>\n<li><strong>매장 CCTV 보존 요청 자료</strong></li>\n<li><strong>회원·결제·좌석 배정 기록 (자리·시각 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>주변 이용자·직원 진술·연락처</strong></li>\n<li><strong>의류·신체 접촉 흔적 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매장 CCTV는 보존 기간이 짧으므로 곧바로 보존을 요청하는 것이 중요합니다. 회원·결제·좌석 기록으로 자리와 시각을 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 의사에 반한 추행으로 평가되는지.</li>\n<li><strong>폭행·협박 의미</strong> — 항거 곤란 정도가 아니어도 유형력 행사가 인정되는지.</li>\n<li><strong>우연 접촉</strong> — 좌석 협소에 따른 우연한 닿음인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·이용기록으로 상대를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 폭행·협박의 의미',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 상대방의 신체에 대해 불법한 유형력을 행사하거나 일반적으로 보아 상대방으로 하여금 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것을 의미한다고 종래 판례를 변경해 판시했습니다. 좁은 좌석에서의 의사에 반한 밀착·접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '좁은 좌석 + 밀착·접촉 + 의사에 반함 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '좌석이 좁아 닿은 건지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>우연 접촉을 넘어 의사에 반한 의도적 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 잡은 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>항거를 곤란하게 할 정도가 아니어도 의사에 반한 유형력 행사면 인정될 수 있는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>당황해 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '가해자를 어떻게 특정하나요?',
        answer:
          '<strong>매장 CCTV·회원·결제 기록으로 특정할 수 있는 영역입니다.</strong> CCTV 보존부터 신속히 요청하세요.',
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
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '병실 입원환자 추행 대응', href: '/guide/sex-crime/sex-crime-hospital-ward-inpatient-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-hospital-ward-inpatient-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-hospital-ward-inpatient-track',
    keyword: '병실 입원환자 추행',
    questionKeyword: '입원해 있던 병실에서 같은 병실 환자나 보호자가 갑자기 몸을 만지거나 밀착해 큰 충격과 수치심을 느꼈어요. 몸이 불편해 제대로 저항도 못 했고 목격자도 마땅치 않은데, 이런 병실 안 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '병실 입원환자 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '병실 입원환자 추행 — 5단계 기습추행·증거 점검 | 로앤가이드',
      description:
        '입원 병실에서 갑작스러운 신체 접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 기습추행·추행 해당성 법리를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「치료를 받으려 입원해 있던 병실에서, 같은 병실 환자나 보호자가 갑자기 몸을 만지거나 필요 이상으로 밀착해 큰 충격과 수치심을 느낀 분의 상황입니다. 몸이 아프고 거동이 불편해 제대로 저항하지도, 소리치지도 못한 채 당했고, 폐쇄된 병실이라 마땅한 목격자도 없어 \'신고해도 믿어줄까\' 막막하셨을 거예요. 회복 중인 몸과 마음에 상처까지 겹쳐 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄에는 폭행행위 자체가 추행행위로 인정되는 기습추행도 포함되고, 그 폭행은 상대방의 의사에 반하는 유형력의 행사가 있으면 힘의 대소강약을 불문하며, 추행에 해당하는지는 피해자의 의사·성별·연령, 관계, 경위, 행위태양, 주위의 객관적 상황 등을 종합해 판단한다고 본 사례 흐름이 있는 영역입니다. 폐쇄 공간 + 갑작스러운 접촉 + 의사에 반함 결합은 \'기습추행·증거\' 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병실 입원환자 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 병실·병상·시각·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 갑작스러운 접촉이 의사에 반한 기습추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 병동 복도 CCTV·간호 기록·면회 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 입원·면회·근무 기록으로 상대 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담, 병원 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갑작스러운 접촉이라도 의사에 반한 유형력 행사면 기습추행이 인정될 수 있다는 점이 분기점입니다. 거동이 불편해 저항을 못 했어도 직후 호소·간호 기록·정황을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 대응·정황 정리 (즉시)</strong> — 가능하면 간호사·보호자에 도움 요청, 병실·시각·접촉 정황 정리.</li>\n<li><strong>2단계 — CCTV·기록 보존 요청 (즉시)</strong> — 병동 복도 CCTV·면회·간호 기록 보존 요청.</li>\n<li><strong>3단계 — 직후 호소 확보 (직후)</strong> — 간호사·보호자에게 한 호소·기록으로 정황 보전.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병실 입원환자 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>병실·병상·시각·접촉 정황 메모</strong></li>\n<li><strong>병동 복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>입원·면회·근무 기록 (상대 특정)</strong></li>\n<li><strong>직후 호소·간호 기록·통화 기록</strong></li>\n<li><strong>같은 병실·간병인·간호사 진술·연락처</strong></li>\n<li><strong>의류·신체 접촉 흔적 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 병동 복도 CCTV·면회·간호 기록은 보존 기간이 짧으니 곧바로 병원에 보존을 요청하는 것이 중요합니다. 거동이 불편했더라도 간호사·보호자에게 한 직후 호소를 기록으로 남기면 기습추행 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 성적 자유를 침해하는 추행으로 평가되는지.</li>\n<li><strong>기습추행</strong> — 갑작스러운 접촉이 유형력 행사로 인정되는지.</li>\n<li><strong>저항 가능성</strong> — 거동 불편으로 저항을 못 한 사정이 고려되는지.</li>\n<li><strong>가해자 특정</strong> — 입원·면회·근무 기록으로 상대를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·간호 기록·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 추행 해당성의 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행행위로 인정되는 기습추행도 포함되고 그 폭행은 상대방의 의사에 반하는 유형력의 행사가 있으면 힘의 대소강약을 불문하며, 추행에 해당하는지는 피해자의 의사·성별·연령, 관계, 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 병실 안 갑작스러운 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '폐쇄 공간 + 갑작스러운 접촉 + 의사에 반함 결합 시 기습추행·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '갑자기 만진 것도 추행이 되나요?',
        answer:
          '<strong>의사에 반하는 유형력 행사면 기습추행으로 인정될 수 있는 영역입니다.</strong> 접촉 부위·방식·정황을 정리하세요.',
      },
      {
        question: '몸이 불편해 저항을 못 했는데 불리한가요?',
        answer:
          '<strong>저항하지 못한 사정도 함께 고려되는 영역입니다.</strong> 거동 상태와 직후 호소 정황을 기록하세요.',
      },
      {
        question: '병실이라 목격자가 없는데 입증이 되나요?',
        answer:
          '<strong>복도 CCTV·간호 기록·직후 호소 등 정황으로 다툴 수 있는 영역입니다.</strong> 간호 기록 보존부터 요청하세요.',
      },
      {
        question: '가해자를 어떻게 특정하나요?',
        answer:
          '<strong>입원·면회·근무 기록으로 상대를 특정할 수 있는 영역입니다.</strong> 면회·입원 기록부터 확보하세요.',
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
      { label: '스터디카페 밀착 추행 대응', href: '/guide/sex-crime/sex-crime-study-cafe-close-contact-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-rental-studio-hidden-camera-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-rental-studio-hidden-camera-track',
    keyword: '대여스튜디오 몰래카메라',
    questionKeyword: '대여 스튜디오·파티룸을 빌려 쓰던 중 천장·소품·콘센트 속에 숨겨진 카메라를 발견했어요. 내 신체가 찍혔을까 무섭고 그 영상이 어딘가로 전송·유포됐을까 불안한데, 이런 몰래카메라를 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '대여스튜디오 몰래카메라 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대여스튜디오 몰래카메라 — 5단계 신고·증거 점검 | 로앤가이드',
      description:
        '대여 스튜디오에서 숨겨진 카메라를 발견했다면, 성폭력처벌법 제14조 카메라등이용촬영과 촬영물 상영·공연성 법리를 따지고 증거 보전까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「촬영이나 모임을 위해 대여 스튜디오·파티룸을 빌려 쓰던 중, 천장 모서리나 소품·콘센트·시계 속에 숨겨진 카메라를 발견해 큰 충격과 수치심을 느낀 분의 상황입니다. 내 신체나 사적인 모습이 찍혔을지, 혹시 그 영상이 어딘가로 전송·저장·유포됐을지 두렵고, 무엇을 만지면 증거가 사라질지 몰라 막막하셨을 거예요. 누가 설치했는지 가늠하기 어려워 더 답답하셨을 거예요.」 성폭력범죄의 처벌 등에 관한 특례법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능의 기계장치를 이용해 성적 욕망 또는 수치심을 유발할 수 있는 사람의 신체를 의사에 반해 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 같은 조 제2항의 촬영물 전시·상영은 \'공공연하게\' 이루어질 것을 요구해 불특정 또는 다수인이 시청할 수 있는 상태에 이르러야 하고, \'다수인\'인지는 시청 가능성 등을 기준으로 판단한다고 본 사례 흐름이 있는 영역입니다. 몰래 설치 + 신체 촬영 + 전송·유포 위험 결합은 \'촬영·유포·증거 보전\' 절차가 가능한 트랙입니다. 피해자라면 ① 현장 정황 정리 ② 촬영·유포 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대여스튜디오 몰래카메라 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장 정황·촬영·유포·증거·가해자 특정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 정황 정리</strong> — 장소·시각·카메라 위치·발견 경위 정리.</li>\n<li><strong>② 촬영·유포</strong> — 신체가 촬영·저장됐는지, 전송·유포 위험이 있는지 정리.</li>\n<li><strong>③ 증거 보전</strong> — 카메라·저장매체를 임의 조작 없이 경찰이 확보하게 보존.</li>\n<li><strong>④ 가해자 특정</strong> — 예약·출입·설치 정황·CCTV로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·디지털성범죄피해자지원센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 발견한 카메라·저장매체를 임의로 분해·삭제하면 증거가 훼손될 수 있어, 현장을 보존하고 곧바로 신고해 경찰이 확보하게 하는 것이 핵심입니다. 신체가 촬영·저장됐는지가 촬영죄 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보존·신고 (즉시)</strong> — 카메라를 임의 조작 없이 두고 위치·상태 사진 확보 후 112 신고.</li>\n<li><strong>2단계 — 기기·현장 확보 (즉시)</strong> — 경찰이 카메라·저장매체를 확보하게 보존, 발견 경위 정리.</li>\n<li><strong>3단계 — 저장매체 분석 (직후)</strong> — 경찰에 인계, 촬영·저장·전송 여부 분석 요청.</li>\n<li><strong>4단계 — 진술·피해 상담 (준비 후)</strong> — 경찰 진술, 디지털성범죄피해자지원센터 상담.</li>\n<li><strong>5단계 — 삭제·보호조치 (이후)</strong> — 촬영물 유포 시 삭제 지원·신변보호·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대여스튜디오 몰래카메라 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장 정황·촬영·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>장소·시각·카메라 위치 사진 (현상 보존)</strong></li>\n<li><strong>예약·결제·출입 기록 (이용자 특정)</strong></li>\n<li><strong>건물·진입로 CCTV 보존 요청 자료</strong></li>\n<li><strong>발견 경위·설치 정황 기록</strong></li>\n<li><strong>카메라·저장매체 경찰 인계 기록</strong></li>\n<li><strong>운영자·이전 이용자 정보·연락처</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발견한 카메라는 직접 분해·확인하지 말고 경찰이 확보하게 하는 것이 안전합니다. 예약·출입 기록과 건물 CCTV는 보존 기간이 짧으니 곧바로 보존을 요청하면 가해자 특정과 촬영 정황 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신체 촬영</strong> — 성적 수치심을 유발할 신체가 촬영됐는지.</li>\n<li><strong>의사에 반함</strong> — 촬영대상자의 의사에 반한 촬영인지.</li>\n<li><strong>유포·상영</strong> — 촬영물이 전송·저장·공연히 상영됐는지.</li>\n<li><strong>공연성</strong> — 불특정 또는 다수인이 시청할 상태에 이르렀는지.</li>\n<li><strong>가해자 특정</strong> — 예약·출입·설치 정황으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물 삭제·상담 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촬영물 상영의 공연성과 다수인 판단',
        summary:
          '대법원 2024도18718(대법원, 2025.04.15 선고) 영역에서 법원은 성폭력처벌법 제14조 제2항의 전시·상영은 \'공공연하게\' 이루어질 것을 요구하므로 불특정 또는 다수인이 촬영물 등을 시청할 수 있는 상태에 이르러야 하고, 이때 \'다수인\'인지는 시청 가능성 등을 기준으로 판단해야 한다는 취지로 판시했습니다. 대여 스튜디오에서 몰래 촬영·유포된 촬영물 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '몰래 설치 + 신체 촬영 + 전송·유포 위험 결합 시 촬영·유포·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '카메라를 발견했는데 현장에서 무엇부터 하나요?',
        answer:
          '<strong>카메라를 임의로 분해·조작하지 말고 곧바로 112에 신고해 경찰이 확보하게 하는 영역입니다.</strong> 위치·상태 사진만 남기세요.',
      },
      {
        question: '실제로 찍혔는지 어떻게 확인하나요?',
        answer:
          '<strong>경찰의 저장매체 분석으로 촬영·저장 여부를 확인하는 영역입니다.</strong> 기기를 임의로 삭제·조작하지 마세요.',
      },
      {
        question: '촬영물이 유포·상영됐다면 어떻게 하나요?',
        answer:
          '<strong>전송·상영·공연성에 따라 처벌 범위가 갈리는 영역입니다.</strong> 유포 정황을 캡처해 디지털성범죄피해자지원센터에 상담하세요.',
      },
      {
        question: '누가 설치했는지 모르는데 잡을 수 있나요?',
        answer:
          '<strong>예약·출입·건물 CCTV로 수사가 진행될 수 있는 영역입니다.</strong> 예약·출입 기록 보존부터 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·여성긴급전화 1366에서 상담을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
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

  // ─── 10. sex-crime-mt-group-trip-intoxicated-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-mt-group-trip-intoxicated-falsely-accused-defense',
    keyword: 'MT 단체여행 만취 추행 무고',
    questionKeyword: 'MT·단체여행에서 다 같이 술을 마시고 어울렸을 뿐인데, 며칠 뒤 한 참가자가 \'그날 만취 상태에서 추행당했다\'며 신고했어요. 저는 추행한 적도 없고 다들 취해 기억도 흐릿하며 상대 진술 외엔 정황도 없는데, 사실과 다른 이 신고에 어떻게 방어하나요?',
    ctaKeyword: 'MT 단체여행 만취 추행 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: 'MT 만취 추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        'MT·단체여행에서 추행 주장으로 신고당했다면, 무죄추정·진술 신빙성·추행 해당성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「MT·동아리·회사 단체여행에서 다 같이 술을 마시고 어울렸을 뿐인데, 며칠 뒤 한 참가자가 \'그날 만취 상태에서 추행당했다\'며 회사나 경찰에 신고해 한순간에 가해자로 지목된 분의 상황입니다. 정작 본인은 추행한 적이 없고, 모두 취해 기억도 흐릿한 데다 상대의 진술 외에는 이를 뒷받침할 객관적 정황도 뚜렷하지 않은데, 소문과 징계까지 겹쳐 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 상대 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지, 그리고 문제 된 행위가 추행에 해당하는지가 핵심 쟁점입니다. 형사재판에서 유죄 인정은 합리적 의심이 없을 정도의 증명에 이르러야 하고, 무죄추정의 원칙상 검사의 증명이 그 확신에 이르지 못하면 피고인의 이익으로 판단해야 합니다. 판례는 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 일관되고 구체적인지, 논리·경험칙에 비추어 합리적이고 객관적으로 확인된 사정과 모순되지 않는지, 허위로 불리한 진술을 할 동기가 있는지 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 술자리 정황·진술 신빙성·추행 해당성을 정리해 다툴 수 있는 영역입니다. 단체여행 정황 + 진술 신빙성 다툼 + 추행 해당성 검토 결합은 \'진술 신빙성·추행 해당성\' 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 진술 신빙성 ③ 정황 검토 ④ 추행 해당성 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. MT 만취 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·진술 신빙성·정황·추행 해당성·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 단체여행 일정·동석자·자리 배치·접촉 여부 정리.</li>\n<li><strong>② 진술 신빙성</strong> — 상대 진술의 일관성·구체성·정황 부합 검토.</li>\n<li><strong>③ 정황 검토</strong> — CCTV·동석자 진술·사진·메시지 등 객관 정황 검토.</li>\n<li><strong>④ 추행 해당성</strong> — 문제 된 행위가 성적 의도의 추행으로 평가되는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술이 유일한 증거인 경우 그 진술이 일관·구체적이고 정황·경험칙에 부합해 합리적 의심을 배제할 정도로 신빙성이 있어야 한다는 점이 분기점입니다. 단체여행 정황·동석자 진술·기록으로 진술 신빙성과 추행 해당성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 단체여행 일정·동석자·자리 배치·접촉 정황 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·사진·메시지·결제·동석자 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 진술 신빙성·해당성 쟁점 정리 (2주)</strong> — 진술의 일관성·구체성·정황 부합과 추행 해당성 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">MT 단체여행 만취 추행 진술 신빙성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·진술 신빙성·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>단체여행 일정·참석자·자리 배치 메모</strong></li>\n<li><strong>숙소·주점 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·이동·시간 기록 (상황 특정)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당시·사후 사진·대화·메시지 기록</strong></li>\n<li><strong>상대 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'상대 진술이 일관·구체적이고 정황·경험칙에 부합하는지\'와 \'문제 된 행위가 추행에 해당하는지\'입니다. CCTV·사진·동석자 진술로 당시 상황을 정돈하고 진술의 모순·불부합을 구체적으로 짚으면 진술 신빙성·추행 해당성 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체적이고 정황에 부합하는지.</li>\n<li><strong>증명 정도</strong> — 합리적 의심을 배제할 정도로 증명됐는지.</li>\n<li><strong>추행 해당성</strong> — 문제 된 행위가 성적 의도의 추행인지.</li>\n<li><strong>음주·기억</strong> — 만취로 기억이 불명확한 사정이 어떻게 평가되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술 신빙성의 종합 판단 기준',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 피해자 진술이 사실상 유일한 직접증거인 경우, 그 진술이 합리적 의심을 배제할 신빙성이 있는지는 진술 내용의 주요 부분이 일관되고 구체적인지, 논리·경험칙에 비추어 합리적이고 객관적으로 확인된 사실과 모순되지 않는지, 허위로 불리한 진술을 할 동기가 있는지 등을 종합해 신중히 판단해야 한다고 판시했습니다. 단체여행 만취 추행 주장을 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '단체여행 정황 + 진술 신빙성 다툼 + 추행 해당성 검토 결합 시 진술 신빙성·추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>진술이 유일한 증거면 일관·구체적이고 정황에 부합하는 신빙성을 갖춰야 인정되는 영역입니다.</strong> 진술 모순·불부합을 정리하세요.',
      },
      {
        question: '추행한 적이 없는데 어떻게 방어하나요?',
        answer:
          '<strong>CCTV·사진·동석자 진술 등 객관 자료로 다툴 수 있는 영역입니다.</strong> 단체여행 경위·정황 자료를 모으세요.',
      },
      {
        question: '다들 취해 기억이 흐릿한데 불리한가요?',
        answer:
          '<strong>음주·기억 상태도 진술 신빙성 판단에 함께 고려되는 영역입니다.</strong> 당시 사진·메시지·정황을 정리하세요.',
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
