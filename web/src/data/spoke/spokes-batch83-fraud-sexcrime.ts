import { SpokePage } from '../spoke-pages';

// batch83 fraud(6) + sex-crime(4) — 10개 (2026-05-31)
//
// 고유 존재 이유:
// 1. fraud-online-shopping-mall-non-delivery-track — 일반 중고거래류와 분기. '쇼핑몰 결제 후 물품 미배송·판매자 잠적' 환급·지급정지 절차형 트랙(victim).
// 2. fraud-romance-dating-app-investment-lure-track — 일반 투자사기류와 분기. '데이팅앱에서 친밀감 형성 후 투자를 유도해 송금받은 로맨스스캠' 기망 고의 판단형 트랙(victim).
// 3. fraud-fake-rental-listing-deposit-upfront-track — 일반 전세사기류와 분기. '허위 월세 매물로 가계약금·보증금을 선입금받고 잠적' 신고·환급 절차형 트랙(victim).
// 4. fraud-concert-ticket-resale-no-transfer-track — 일반 중고거래류와 분기. '콘서트 티켓 양도 거래에서 입금받고 양도 미이행' 기망 고의 판단형 트랙(victim).
// 5. fraud-unlisted-stock-pre-ipo-lure-track — 일반 투자사기류와 분기. '곧 상장한다며 비상장주식 매수를 유도해 투자금을 편취' 기망·처분행위 인과관계 판단형 트랙(victim).
// 6. fraud-account-name-lending-unwitting-falsely-accused-defense — 일반 사기 무고류와 분기. '환전 도와주면 대가 준다는 말에 계좌번호를 알려줬다 대포통장 방조로 입건' 고의·목적 방어 판단형 트랙(accused).
// 7. sex-crime-taxi-passenger-driver-contact-track — 일반 강제추행류와 분기. '심야 택시에서 기사가 승객에게 신체접촉' 추행 폭행 의미·기습추행 판단형 트랙(victim).
// 8. sex-crime-crowded-subway-groping-track — 일반 공중밀집 추행류와 분기. '만원 지하철에서 추행' 기습추행·가해자 특정 판단형 트랙(victim).
// 9. sex-crime-business-trip-lodging-coworker-track — 일반 직장 추행류와 분기. '출장 숙소에서 동료가 추행' 위력·고소기간·신상정보 판단형 트랙(victim).
// 10. sex-crime-massage-shop-customer-falsely-accused-defense — 일반 성범죄 무고류와 분기. '마사지샵에서 시술 중 접촉을 두고 추행으로 고소당함' 무죄추정·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch83FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-online-shopping-mall-non-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-shopping-mall-non-delivery-track',
    keyword: '쇼핑몰 물품 미배송 판매자 잠적 환급',
    questionKeyword: '온라인 쇼핑몰에서 결제까지 했는데 물건이 오지 않고 판매자와 연락도 끊겼어요. 사이트도 갑자기 닫혀버렸는데, 돈을 돌려받고 신고할 방법이 있을까요?',
    ctaKeyword: '쇼핑몰 미배송·판매자 잠적 환급·신고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '쇼핑몰 미배송 잠적 사기 — 5단계 환급·신고 점검 | 로앤가이드',
      description:
        '온라인 쇼핑몰에서 결제 후 물건이 안 오고 판매자가 잠적했다면 지급정지·피해구제·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「큰맘 먹고 온라인 쇼핑몰에서 결제까지 마쳤는데, 배송일이 한참 지나도 물건은 오지 않고 판매자는 연락이 끊긴 분의 상황입니다. 다시 들어가 보니 사이트마저 닫혀 있고, 같은 피해를 본 사람이 여럿이라는 글까지 보여요. 어렵게 모은 돈을 잃을까 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고, 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 처음부터 물품을 보낼 의사·능력 없이 대금만 받은 정황은 기망행위로 평가될 여지가 있고, 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지·피해구제를 검토할 수 있습니다. 판례는 거래 당시를 기준으로 편취의 고의가 있었는지를 거래 경위·이행 과정 등 객관적 사정으로 판단해온 본 사례 흐름이 있는 영역입니다. 결제 후 미배송 + 연락 두절 + 사이트 폐쇄 결합은 \'지급정지·피해구제·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 결제·거래 정리 ② 기망 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·항변권 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 쇼핑몰 미배송·판매자 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·기망 고의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·거래 정리</strong> — 주문 내역·결제 수단(계좌·카드)·배송 약속·판매자 정보 정리.</li>\n<li><strong>② 기망 고의</strong> — 처음부터 물품을 보낼 의사 없이 대금만 받으려 한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 송금 시 은행·112를 통한 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·항변권</strong> — 카드 결제분은 항변권·피해구제로 환급 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계좌 송금이면 지급정지를 빨리 요청할수록 환급 가능성을 살려둘 수 있고, 카드 결제면 항변권을 검토할 수 있습니다. 미배송·연락 두절·사이트 폐쇄 정황은 기망 고의를 정리하는 핵심 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌 송금분은 은행·112로 지급정지 요청, 주문·결제·대화 보존.</li>\n<li><strong>2단계 — 거래·판매자 정보 정리 (즉시)</strong> — 사이트 화면·판매자 계좌·연락처·배송 약속 캡처.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·항변권 신청 (2개월 내)</strong> — 은행 피해구제신청 또는 카드사 항변권 신청 검토.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 채권소멸 후 환급, 부족분 민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">쇼핑몰 미배송·판매자 잠적 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문 내역·결제 영수증 (거래 내용)</strong></li>\n<li><strong>계좌 이체·카드 결제 내역 (피해 금액·결제 수단)</strong></li>\n<li><strong>판매자 계좌·연락처·사업자 정보</strong></li>\n<li><strong>쇼핑몰 화면·상품 페이지·배송 약속 캡처</strong></li>\n<li><strong>판매자와의 대화·문의 기록 (연락 두절 정황)</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>동일 수법 피해 사례 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 수단에 따라 환급 경로가 달라집니다. 계좌 송금분은 지급정지·피해구제를, 카드 결제분은 카드사 항변권을 검토할 수 있어 결제내역을 먼저 정리해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 결제 당시 물품을 보낼 의사·능력이 있었는지.</li>\n<li><strong>단순 지연과 구별</strong> — 배송 지연·재고 문제인지, 처음부터 잠적인지.</li>\n<li><strong>결제 수단</strong> — 계좌·카드에 따라 지급정지·항변권 등 환급 경로가 다름.</li>\n<li><strong>판매자 특정</strong> — 계좌·연락처·사업자 정보로 특정 가능한지.</li>\n<li><strong>환급 시점</strong> — 지급정지·신청 시점이 환급 가능성에 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (소비자상담·피해구제)</strong></li>\n<li><strong>금융감독원 1332 (카드 항변권·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의의 판단 기준과 계약 당시 기준 시점',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득이고, 편취의 범의는 범행 전후의 재력·거래의 이행 과정 등 객관적 사정을 종합해 판단하되 편취 고의의 유무는 계약 당시를 기준으로 일을 이행할 의사·능력이 있었는지에 따라 판단해야 한다고 판시했습니다. 쇼핑몰이 결제를 받을 당시 물품을 보낼 의사·능력이 있었는지를 거래 경위·이행 과정으로 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '결제 후 미배송 + 연락 두절 + 사이트 폐쇄 결합 시 지급정지·피해구제 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '돈을 보낸 지 얼마 안 됐는데 뭐부터 하나요?',
        answer:
          '<strong>계좌 송금이면 은행·112로 지급정지를 빨리 요청하는 것이 우선인 영역입니다.</strong> 송금 내역을 준비해 신고하세요.',
      },
      {
        question: '단순 배송 지연과 사기는 어떻게 구별하나요?',
        answer:
          '<strong>처음부터 보낼 의사 없이 잠적·사이트 폐쇄가 동반됐는지가 핵심인 영역입니다.</strong> 연락 두절 정황을 정리하세요.',
      },
      {
        question: '카드로 결제했는데 환급 방법이 다른가요?',
        answer:
          '<strong>카드 결제분은 카드사 항변권·이의제기로 환급을 다툴 수 있는 영역입니다.</strong> 결제내역을 먼저 확인하세요.',
      },
      {
        question: '판매자가 누군지 몰라도 신고가 되나요?',
        answer:
          '<strong>계좌·연락처·사업자 정보로 수사기관이 특정할 수 있는 영역입니다.</strong> 가진 자료를 모두 모아 신고하세요.',
      },
      {
        question: '소액인데 신고해도 되나요?',
        answer:
          '<strong>금액과 무관하게 신고·피해구제를 검토할 수 있고 같은 수법 피해와 묶일 수도 있는 영역입니다.</strong> 자료를 갖춰 신고하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '카드 항변권 활용', href: '/guide/fraud/fraud-installment-defense-track' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-romance-dating-app-investment-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-dating-app-investment-lure-track',
    keyword: '데이팅앱 로맨스 투자 유도 사기',
    questionKeyword: '데이팅앱에서 만난 사람과 한동안 친밀하게 지냈는데, 어느 날부터 \'확실한 투자처\'라며 돈을 넣으라고 했어요. 시키는 대로 송금했더니 출금이 안 되고 연락이 끊겼어요. 사기로 다툴 수 있나요?',
    ctaKeyword: '데이팅앱 로맨스 투자 유도 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '데이팅앱 로맨스 투자 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '데이팅앱에서 친밀해진 상대가 투자를 권해 송금했는데 출금이 막혔다면 기망 고의·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「데이팅앱에서 만나 매일 다정하게 연락하던 상대가, 어느 순간부터 \'나만 아는 확실한 투자처\'라며 돈을 넣으라고 권해 송금한 분의 상황입니다. 처음엔 수익이 나는 것처럼 보였지만 막상 출금하려니 막히고, 더 넣으라는 말만 반복되다 연락마저 끊겼어요. 마음까지 다쳐 더 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하는 영역입니다. 친밀감을 형성한 뒤 허위 투자처로 송금을 유도해 출금을 막은 정황은 기망행위로 평가될 여지가 있고, 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액을 교부받은 금원 전부로 보는 등 기망에 의한 금원 교부 자체를 재산침해로 본 사례 흐름이 있는 영역입니다. 친밀감 형성 + 투자 유도 + 출금 차단·연락 두절 결합은 \'기망 고의·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·송금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 고소 ⑤ 환급·추적 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 데이팅앱 로맨스 투자 유도 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·송금·기망 고의·지급정지·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·송금 정리</strong> — 만남 경위·대화·투자 권유 시점·송금 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 친밀감을 이용해 허위 투자처로 송금을 유도한 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 국내 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·추적</strong> — 피해구제·자금 흐름 추적·민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친밀감을 형성한 뒤 \'확실한 수익\'을 내세워 송금을 유도하고 출금을 막는 흐름은 기망 정황으로 정리될 수 있습니다. 추가 송금을 멈추고 송금 계좌의 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 송금 중단·자료 보존 (즉시)</strong> — 대화·투자 화면·송금 내역 보존, 추가 송금 중단.</li>\n<li><strong>2단계 — 지급정지 요청 (즉시)</strong> — 국내 계좌 송금분은 은행·112로 지급정지 요청.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제·금감원 상담 (2개월 내)</strong> — 은행 피해구제신청·금융감독원 1332 상담 검토.</li>\n<li><strong>5단계 — 자금 추적·민사 청구 (이후)</strong> — 자금 흐름 추적·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">데이팅앱 로맨스 투자 유도 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·송금·기망 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>데이팅앱 매칭·프로필·대화 기록 (만남 경위)</strong></li>\n<li><strong>투자 권유 메시지·캡처 (유도 정황)</strong></li>\n<li><strong>투자 플랫폼·수익 화면·출금 거부 화면</strong></li>\n<li><strong>계좌 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>상대 계좌·연락처·앱 아이디 정보</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 친밀한 대화에서 투자 권유로 넘어가는 흐름이 그대로 남아 있는 메시지가 핵심 자료입니다. 대화·송금·출금 거부 화면을 시간 순으로 정리해두면 기망 정황을 보여주는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 친밀감을 이용해 허위 투자처로 송금을 유도했는지.</li>\n<li><strong>편취액 산정</strong> — 일부 수익이 입금됐어도 송금 전부가 피해액인지.</li>\n<li><strong>자발적 송금 항변</strong> — \'스스로 투자한 것\'이라는 상대 주장의 다툼.</li>\n<li><strong>송금 수단</strong> — 국내 계좌면 지급정지·피해구제 대상.</li>\n<li><strong>국외 흐름</strong> — 자금이 국외로 빠졌을 때의 추적 한계.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>검찰청 1301 (형사 사건 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 금원 교부와 편취액 산정',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 성립에 영향이 없으며, 대가가 일부 지급되거나 담보가 제공된 경우에도 편취액은 교부받은 금원 전부로 보아야 한다고 판시했습니다. 일부 수익이 입금됐더라도 투자 명목으로 송금한 금원 전부의 피해를 살펴볼 때 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '친밀감 형성 + 투자 유도 + 출금 차단·연락 두절 결합 시 기망 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 투자하겠다고 송금한 건데 사기가 되나요?',
        answer:
          '<strong>허위 투자처라는 점을 속여 송금을 유도한 정황이 있으면 기망으로 다툼 대상이 되는 영역입니다.</strong> 권유 대화를 확보하세요.',
      },
      {
        question: '일부 수익을 받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 대가가 지급됐어도 송금한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입출금 흐름을 정리하세요.',
      },
      {
        question: '상대가 외국에 있는 것 같은데 추적이 되나요?',
        answer:
          '<strong>국내 송금 계좌를 단서로 지급정지·추적을 검토할 수 있는 영역입니다.</strong> 송금 계좌 정보부터 확보하세요.',
      },
      {
        question: '추가로 더 보내라는데 어떻게 하나요?',
        answer:
          '<strong>추가 송금을 멈추고 지급정지·신고를 먼저 검토하는 것이 중요한 영역입니다.</strong> 더 보내기 전에 상담하세요.',
      },
      {
        question: '대화 기록만으로 신고가 되나요?',
        answer:
          '<strong>대화·송금 내역·출금 거부 화면을 함께 모으면 신고 자료가 되는 영역입니다.</strong> 시간 순으로 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자사기 기망 입증', href: '/guide/fraud/fraud-investment-deception-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '로맨스스캠 대응', href: '/guide/fraud/fraud-romance-scam-response-track' },
    ],
  },

  // ─── 3. fraud-fake-rental-listing-deposit-upfront-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-rental-listing-deposit-upfront-track',
    keyword: '허위 월세 매물 가계약금 보증금 선입금 사기',
    questionKeyword: '저렴한 월세 매물을 보고 \'다른 사람이 계약하기 전에 잡아두라\'는 말에 가계약금과 보증금을 먼저 입금했어요. 그런데 알고 보니 그 집을 빌려줄 권한도 없는 사람이었고 연락이 끊겼어요. 어떻게 대응하나요?',
    ctaKeyword: '허위 월세 매물 선입금 신고·환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '허위 월세 매물 선입금 사기 — 5단계 신고·환급 점검 | 로앤가이드',
      description:
        '저렴한 월세 매물에 가계약금·보증금을 선입금했는데 권한 없는 사람에게 당했다면 지급정지·신고·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「시세보다 싼 월세 매물을 보고 \'지금 안 잡으면 다른 사람에게 넘어간다\'는 재촉에 가계약금과 보증금을 서둘러 입금한 분의 상황입니다. 막상 들어가려니 그 집을 빌려줄 권한도 없는 사람이었고, 입금하자마자 연락이 끊겼어요. 이사 계획까지 어그러져 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 임대 권한이 없으면서 있는 것처럼 속여 가계약금·보증금을 받은 정황은 기망행위로 평가될 여지가 있고, 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 임대차에서 보증금 반환 의사·능력, 처분행위와 재산상 이익의 관계 등을 사안별로 따져 사기죄 성립 여부를 신중히 판단해온 사례 흐름이 있는 영역입니다. 허위 매물 + 권한 없는 임대 + 선입금·연락 두절 결합은 \'지급정지·신고·환급\' 절차가 가능한 트랙입니다. 피해자라면 ① 매물·송금 정리 ② 임대 권한·기망 ③ 지급정지 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 허위 월세 매물 선입금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 매물·임대 권한·지급정지·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 매물·송금 정리</strong> — 매물 광고·중개 경위·가계약 내용·송금 내역 정리.</li>\n<li><strong>② 임대 권한·기망</strong> — 실제 소유자·임대 권한 여부, 권한 없이 속였는지 확인.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 피해구제·부당이득 반환·손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 그 집을 빌려줄 권한이 실제로 있었는지(등기부·소유자 확인)와 권한이 없으면서 있는 것처럼 속였는지가 기망 판단의 핵심입니다. 계좌 송금분은 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌 송금분은 은행·112로 지급정지 요청, 광고·대화·송금 보존.</li>\n<li><strong>2단계 — 권한·소유 확인 (1주)</strong> — 등기부등본·실제 소유자 확인으로 임대 권한 여부 정리.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1~2주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제 신청 (2개월 내)</strong> — 은행 피해구제신청·채권소멸 절차 진행.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 채권소멸 후 환급, 부당이득·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">허위 월세 매물 선입금 신고·환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 매물·임대 권한·기망 갈래입니다.</strong></p>\n<ul>\n<li><strong>매물 광고·게시글 캡처 (허위 매물 정황)</strong></li>\n<li><strong>가계약·계약서·문자 기록 (거래 내용)</strong></li>\n<li><strong>계좌 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>등기부등본·실제 소유자 정보 (임대 권한)</strong></li>\n<li><strong>상대 계좌·연락처·신분 정보</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n<li><strong>은행 피해구제신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부등본으로 실제 소유자·임대 권한을 확인하는 것이 핵심입니다. 권한 없는 사람이 임대인인 척 속였다는 정황과 시세보다 싸게 재촉한 대화를 함께 정리해두면 기망 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대 권한</strong> — 그 집을 빌려줄 권한이 실제로 있었는지.</li>\n<li><strong>기망 고의</strong> — 권한이 없으면서 있는 것처럼 속였는지.</li>\n<li><strong>가계약금 성격</strong> — 반환 의무·해약금 약정의 내용.</li>\n<li><strong>송금 수단</strong> — 계좌 송금이면 지급정지·피해구제 대상.</li>\n<li><strong>중개 관여</strong> — 공인중개사 등 제3자 관여 여부와 책임.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n<li><strong>전세사기피해지원센터 (주택 임대차 피해 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차에서 처분행위·재산상 이익과 사기죄 성립',
        summary:
          '대법원 2023도17200(대법원, 2024.03.12 선고) 영역에서 법원은 재물에 대한 사용·수익권이 사기죄에서 보호하는 재산상 이익에 포함되지 않는다고 보아, 임대차보증금 반환 능력이 부족한 임대인이 임차인을 속여 점유권을 이전받은 사안에서 재산상 이익의 처분이 있었다고 보기 어려워 사기죄가 성립하지 않는다고 판시한 사례가 있습니다. 임대차를 둘러싼 사기 성립은 처분행위·재산상 이익의 존부를 사안별로 따져야 하는 영역이므로, 허위 매물 송금 사안에서도 송금이라는 재산 교부가 있었는지를 중심으로 검토해볼 수 있습니다.',
        takeaway: '허위 매물 + 권한 없는 임대 + 선입금·연락 두절 결합 시 지급정지·신고 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '가계약금만 보냈는데도 신고가 되나요?',
        answer:
          '<strong>가계약금도 기망에 의한 재물 교부면 신고를 검토할 수 있는 영역입니다.</strong> 광고·대화·송금 내역을 모으세요.',
      },
      {
        question: '상대가 집주인이 맞는지 어떻게 확인하나요?',
        answer:
          '<strong>등기부등본으로 실제 소유자·임대 권한을 확인하는 것이 핵심인 영역입니다.</strong> 등본을 발급해 대조하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 인출 전 신속 신고가 중요합니다.',
      },
      {
        question: '중개인을 끼고 거래했는데 책임을 물을 수 있나요?',
        answer:
          '<strong>중개 관여·설명의무 위반 여부에 따라 책임을 함께 다툴 수 있는 영역입니다.</strong> 중개 정황도 정리하세요.',
      },
      {
        question: '어디에 먼저 상담하나요?',
        answer:
          '<strong>지급정지 신고와 함께 전세사기피해지원센터 상담을 검토해볼 수 있는 영역입니다.</strong> 계약·송금 자료를 준비하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '부당이득 반환 청구', href: '/guide/fraud/fraud-unjust-enrichment-track' },
      { label: '전세사기 피해 대응', href: '/guide/jeonse-fraud/jeonse-fraud-response-track' },
    ],
  },

  // ─── 4. fraud-concert-ticket-resale-no-transfer-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-resale-no-transfer-track',
    keyword: '콘서트 티켓 양도 미이행 사기',
    questionKeyword: '온라인에서 콘서트 티켓을 양도받기로 하고 돈을 먼저 보냈는데, 입금하자마자 판매자가 양도를 미루다 연락이 끊겼어요. 공연 날짜는 다가오는데, 사기로 신고하고 돈을 돌려받을 수 있을까요?',
    ctaKeyword: '콘서트 티켓 양도 미이행 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 양도 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '콘서트 티켓 양도금을 보냈는데 양도가 안 되고 판매자가 잠적했다면 기망 고의·지급정지·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「가고 싶던 공연 티켓을 온라인에서 양도받기로 하고 \'먼저 입금하면 바로 넘겨주겠다\'는 말에 돈을 보낸 분의 상황입니다. 그런데 입금하자마자 판매자는 양도를 차일피일 미루더니 연락이 끊겼고, 알고 보니 같은 티켓을 여러 명에게 팔았다는 정황까지 보여요. 공연 날짜는 다가오는데 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 처음부터 양도할 의사·능력 없이 또는 같은 티켓을 중복 판매하며 대금만 받은 정황은 기망행위로 평가될 여지가 있고, 계좌로 송금한 경우 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법상 지급정지를 검토할 수 있습니다. 판례는 동일·유사 거래의 죄수와 동일성, 편취 고의를 사안별로 신중히 판단해온 사례 흐름이 있는 영역입니다. 선입금 + 양도 미이행 + 연락 두절·중복 판매 결합은 \'기망 고의·지급정지·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 기망 고의 ③ 지급정지 ④ 형사 신고 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 티켓 양도 미이행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 고의·지급정지·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 양도 합의 대화·티켓 정보·송금 내역·판매자 정보 정리.</li>\n<li><strong>② 기망 고의</strong> — 처음부터 양도 의사 없이 또는 중복 판매하며 대금만 받았는지 정황 정리.</li>\n<li><strong>③ 지급정지 요청</strong> — 계좌 송금분에 대한 은행·112 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 피해구제·부당이득·손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 입금 직후 양도를 미루거나 같은 티켓을 여러 명에게 판 정황은 양도 의사가 처음부터 없었다는 기망 정황으로 정리될 수 있습니다. 계좌 송금분은 지급정지를 빨리 검토하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급정지·자료 보존 (즉시)</strong> — 계좌 송금분은 은행·112로 지급정지 요청, 거래 대화·송금 보존.</li>\n<li><strong>2단계 — 중복 판매·잠적 정황 정리 (즉시)</strong> — 동일 피해자·중복 판매 정황 수집.</li>\n<li><strong>3단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>4단계 — 피해구제 신청 (2개월 내)</strong> — 은행 피해구제신청·채권소멸 절차 진행.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 채권소멸 후 환급, 부족분 민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 티켓 양도 미이행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>양도 합의 대화·게시글 캡처 (거래 내용)</strong></li>\n<li><strong>티켓 정보·예매 안내 캡처 (양도 대상)</strong></li>\n<li><strong>계좌 이체·송금 내역 (피해 금액)</strong></li>\n<li><strong>판매자 계좌·연락처·아이디 정보</strong></li>\n<li><strong>양도 미이행·연락 두절 정황 기록</strong></li>\n<li><strong>중복 판매·동일 피해 사례 정리</strong></li>\n<li><strong>사건사고사실확인원 (경찰 신고 후)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입금 직후 태도가 바뀐 대화와 같은 티켓을 여러 명에게 판 정황이 핵심 자료입니다. 거래 게시글·대화·송금 내역을 시간 순으로 정리하면 기망 고의 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 입금 당시 양도 의사·능력이 있었는지.</li>\n<li><strong>단순 채무불이행과 구별</strong> — 사정 변경으로 못 넘긴 것인지, 처음부터 잠적인지.</li>\n<li><strong>중복 판매</strong> — 같은 티켓을 여러 명에게 판 정황.</li>\n<li><strong>송금 수단</strong> — 계좌 송금이면 지급정지·피해구제 대상.</li>\n<li><strong>판매자 특정</strong> — 계좌·아이디·연락처로 특정 가능한지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (지급정지)·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (소비자상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래의 동일성·죄수와 편취 고의의 신중한 판단',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 규범적 요소도 고려해 판단해야 하고, 행위 태양·보호법익이 다른 별개 행위는 동일성이나 1죄·상상적 경합으로 보기 어렵다고 판시했습니다. 같은 티켓을 여러 명에게 팔거나 양도를 미루며 대금을 받은 행위의 기망성·죄수를 살펴볼 때에도 거래별 경위를 사안별로 따지는 이러한 관점을 검토해볼 수 있습니다.',
        takeaway: '선입금 + 양도 미이행 + 연락 두절·중복 판매 결합 시 기망 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '못 넘긴 사정이 있다는데 사기가 아닌가요?',
        answer:
          '<strong>처음부터 양도 의사 없이 또는 중복 판매하며 대금만 받았는지가 핵심인 영역입니다.</strong> 입금 전후 대화를 정리하세요.',
      },
      {
        question: '같은 티켓을 여러 명에게 팔았다면 어떻게 되나요?',
        answer:
          '<strong>중복 판매 정황은 기망 고의를 뒷받침하는 자료가 되는 영역입니다.</strong> 다른 피해자 정황을 모으세요.',
      },
      {
        question: '소액인데 신고할 수 있나요?',
        answer:
          '<strong>금액과 무관하게 신고를 검토할 수 있고 같은 수법 피해와 묶일 수 있는 영역입니다.</strong> 거래 자료를 갖춰 신고하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 인출 전 신속 신고가 중요합니다.',
      },
      {
        question: '판매자 아이디만 아는데 신고가 되나요?',
        answer:
          '<strong>계좌·아이디·연락처로 수사기관이 특정할 수 있는 영역입니다.</strong> 가진 자료를 모두 모아 신고하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-secondhand-deal-response-track' },
      { label: '계좌 지급정지·피해구제', href: '/guide/fraud/fraud-payment-suspension-relief-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '공동 고소·집단 대응', href: '/guide/fraud/fraud-joint-complaint-track' },
    ],
  },

  // ─── 5. fraud-unlisted-stock-pre-ipo-lure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-unlisted-stock-pre-ipo-lure-track',
    keyword: '비상장주식 상장 미끼 투자 사기',
    questionKeyword: '\'곧 상장하면 몇 배가 된다\'는 말에 비상장주식을 샀는데, 상장은 계속 미뤄지고 회사 실체도 의심스러워요. 처음부터 상장 계획이 없었던 것 같은데, 사기로 다툴 수 있나요?',
    ctaKeyword: '비상장주식 상장 미끼 투자 기망 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '비상장주식 상장 미끼 사기 — 5단계 기망·인과 점검 | 로앤가이드',
      description:
        '곧 상장한다는 말에 비상장주식을 샀는데 상장이 계속 미뤄진다면 기망 고의·인과관계·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「\'이 회사는 곧 상장해서 투자금이 몇 배가 된다\'는 권유에 비상장주식을 매수한 분의 상황입니다. 그런데 약속한 상장 시점은 계속 미뤄지고, 회사 실체나 재무 상태마저 의심스러워졌어요. 처음부터 상장 계획이 없으면서 미끼로 쓴 것 같아 막막하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하는 영역입니다. 상장 가능성·수익을 거짓으로 부풀려 투자를 유도한 정황은 기망행위로 평가될 여지가 있으나, 투자자가 사업 내용을 알고 관여한 정도에 따라 기망·인과관계 판단이 달라질 수 있습니다. 판례는 사업의 성패와 밀접한 투자에서 기망행위·인과관계 존부를 거래 상황·투자자의 지식·경험 등을 종합해 신중히 판단해온 사례 흐름이 있는 영역입니다. 상장 약속 + 수익 과장 + 실체 불명 결합은 \'기망 고의·인과관계·환급\' 다툼이 가능한 트랙입니다. 피해자라면 ① 권유·투자 정리 ② 기망 고의 ③ 인과관계 ④ 형사 고소 ⑤ 환급·민사 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비상장주식 상장 미끼 투자 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·기망 고의·인과관계·고소·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유·투자 정리</strong> — 상장 약속·수익 설명·투자 권유 자료·매수 내역 정리.</li>\n<li><strong>② 기망 고의</strong> — 상장 가능성·수익을 거짓으로 부풀렸는지 정황 정리.</li>\n<li><strong>③ 인과관계</strong> — 거짓 설명이 투자 결정에 영향을 미쳤는지 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 사기 고소 검토.</li>\n<li><strong>⑤ 환급·민사</strong> — 피해구제·부당이득·손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상장 가능성·수익을 거짓으로 부풀린 정황과 그 설명이 투자 결정에 영향을 미쳤는지(인과관계)가 핵심입니다. 투자자가 사업 내용을 얼마나 알고 관여했는지에 따라 판단이 달라질 수 있어 권유 자료를 함께 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유·투자 자료 보존 (즉시)</strong> — 상장 약속·수익 설명·매수 계약·송금 내역 보존.</li>\n<li><strong>2단계 — 회사 실체·상장 가능성 확인 (1~2주)</strong> — 법인등기·재무·상장 추진 사실 여부 확인.</li>\n<li><strong>3단계 — 경찰 신고·금감원 상담 (병행)</strong> — 사이버범죄 신고·금융감독원 1332 투자사기 상담.</li>\n<li><strong>4단계 — 피해구제·자료 제출 (조사 단계)</strong> — 권유 자료로 기망·인과관계 정황 제출.</li>\n<li><strong>5단계 — 환급·민사 청구 (이후)</strong> — 부당이득·손해배상 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">비상장주식 상장 미끼 투자 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권유·기망 고의·인과 갈래입니다.</strong></p>\n<ul>\n<li><strong>상장 약속·수익 설명 자료·녹취 (권유 정황)</strong></li>\n<li><strong>주식 매매계약서·청약 자료 (거래 내용)</strong></li>\n<li><strong>송금·결제 내역 (투자 금액)</strong></li>\n<li><strong>법인등기·재무·상장 추진 자료 (회사 실체)</strong></li>\n<li><strong>권유자·중개자 연락처·신분 정보</strong></li>\n<li><strong>투자 결정 경위·관여 정도 메모</strong></li>\n<li><strong>동일 수법 피해 사례 정리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'곧 상장한다\'는 약속과 수익 설명이 담긴 녹취·메시지가 핵심 자료입니다. 법인등기·재무 자료로 실제 상장 추진 여부를 확인하고, 투자자가 사업 내용을 얼마나 알았는지를 함께 정리해두면 기망·인과관계 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 고의</strong> — 상장 가능성·수익을 거짓으로 부풀렸는지.</li>\n<li><strong>인과관계</strong> — 거짓 설명이 투자 결정에 영향을 미쳤는지.</li>\n<li><strong>투자자 관여</strong> — 사업 내용을 알고 관여한 정도가 판단에 영향.</li>\n<li><strong>투자 위험 고지</strong> — 비상장주식의 위험을 고지했는지.</li>\n<li><strong>회사 실체</strong> — 법인·사업 실체와 상장 추진의 진위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·불공정거래 상담)</strong></li>\n<li><strong>검찰청 1301 (형사 사건 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 성패와 밀접한 투자에서 기망·인과관계 판단',
        summary:
          '대법원 2011도8829(대법원, 2011.10.13 선고) 영역에서 법원은 피해자의 재산적 처분행위나 이를 유발한 행위가 어떤 사업의 성패·성과와 밀접하게 관련된 경우에는 단순히 행위자의 재력·신용만으로 기망·인과관계를 판단할 수 없고, 피해자와 행위자의 관계·사업에 대한 인식과 관여 정도·투자 경위·성공 가능성·피해자의 경험과 직업 등을 종합해 일반적·객관적으로 판단해야 한다고 판시했습니다. 상장 가능성을 내세운 비상장주식 투자에서도 투자자의 인식·관여를 종합해 기망·인과관계를 검토해볼 수 있습니다.',
        takeaway: '상장 약속 + 수익 과장 + 실체 불명 결합 시 기망 고의·인과관계 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상장이 미뤄진 것만으로 사기가 되나요?',
        answer:
          '<strong>처음부터 상장 가능성을 거짓으로 부풀렸는지가 핵심인 영역입니다.</strong> 권유 당시 약속·설명 자료를 확보하세요.',
      },
      {
        question: '제가 알아보고 투자했는데도 다툴 수 있나요?',
        answer:
          '<strong>투자자의 관여 정도에 따라 기망·인과관계 판단이 달라질 수 있는 영역입니다.</strong> 권유 내용과 관여 경위를 정리하세요.',
      },
      {
        question: '회사가 실제로 있긴 한데 어떻게 보나요?',
        answer:
          '<strong>법인 존재와 별개로 상장 추진의 진위·수익 과장 여부를 따지는 영역입니다.</strong> 등기·재무 자료를 확인하세요.',
      },
      {
        question: '녹취가 없으면 입증이 어렵나요?',
        answer:
          '<strong>메시지·홍보 자료·증인 진술 등으로도 권유 정황을 정리할 수 있는 영역입니다.</strong> 가능한 자료를 모으세요.',
      },
      {
        question: '어디에 먼저 상담하나요?',
        answer:
          '<strong>금융감독원 1332 투자사기 상담을 먼저 검토해볼 수 있는 영역입니다.</strong> 권유·투자 자료를 준비하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '투자사기 기망 입증', href: '/guide/fraud/fraud-investment-deception-track' },
      { label: '유사수신·불법모집 대응', href: '/guide/fraud/fraud-illegal-fundraising-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '부당이득 반환 청구', href: '/guide/fraud/fraud-unjust-enrichment-track' },
    ],
  },

  // ─── 6. fraud-account-name-lending-unwitting-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-account-name-lending-unwitting-falsely-accused-defense',
    keyword: '대포통장 명의대여 방조 무고 방어',
    questionKeyword: '\'환전 업무를 도와주면 수고비를 주겠다\'는 말에 제 계좌번호를 알려줬는데, 알고 보니 그 계좌로 사기 피해금이 들어와 대포통장 방조로 입건됐어요. 범행에 쓰일 줄은 전혀 몰랐는데 어떻게 방어하나요?',
    ctaKeyword: '대포통장 명의대여 방조 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '대포통장 방조 고소 방어 — 5단계 고의·목적 점검 | 로앤가이드',
      description:
        '환전을 도와주면 대가를 준다는 말에 계좌를 알려줬다 방조로 입건됐다면 고의·탈법 목적 인식 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「\'환전 업무를 도와주면 수고비를 주겠다\'는 제안을 받고 별다른 의심 없이 계좌번호를 알려줬는데, 그 계좌로 전기통신금융사기 피해금이 들어오면서 대포통장 방조 혐의로 입건된 분의 상황입니다. 범행에 쓰일 줄은 전혀 몰랐고 단순 아르바이트로만 생각했는데, 한순간에 가담자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 금융실명거래 및 비밀보장에 관한 법률 제3조 제3항·제6조 제1항은 불법재산 은닉·자금세탁·강제집행 면탈, 그 밖의 탈법행위를 목적으로 타인 실명으로 금융거래를 하는 행위를 처벌하는데, 이때 방조범이 성립하려면 정범의 범행과 자신의 방조에 대한 인식(고의)이 인정돼야 한다는 점이 핵심 쟁점입니다. 판례는 목적범의 방조범 성립에 필요한 고의의 내용을 엄격히 보고, \'그 밖의 탈법행위\'도 형사처벌 대상에 준하는 정도를 요한다고 본 사례 흐름이 있는 영역입니다. 단순 명의대여라는 사정만으로 곧바로 방조 고의가 인정되는 것은 아니라는 평가가 가능한 영역입니다. 환전 빌미 + 계좌 제공 + 범행 인식 다툼 결합은 \'고의·탈법 목적 인식\' 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위 정리 ② 인식 다툼 ③ 목적 다툼 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대포통장 방조 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·인식·목적·증거·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 제안 경위·대가 약속·계좌 제공 과정·아르바이트 인식 정리.</li>\n<li><strong>② 인식 다툼</strong> — 정범의 사기 범행과 자신의 방조에 대한 인식이 있었는지 검토.</li>\n<li><strong>③ 목적 다툼</strong> — 탈법행위 목적의 금융거래임을 알았는지 정황 정리.</li>\n<li><strong>④ 증거 검토</strong> — 대화·송금·이용 정황 등 객관 자료 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 목적범의 방조범이 성립하려면 정범의 범행과 자신의 방조에 대한 인식(고의)이 인정돼야 합니다. 단순 명의대여라는 사정만으로 곧바로 방조 고의가 인정되는 것은 아니어서, 제안 경위·인식 부족 정황을 정리해 고의를 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 제안 메시지·대가 약속·계좌 제공 경위 정리.</li>\n<li><strong>2단계 — 인식 부족 정황 확보 (1주)</strong> — 범행 인식이 없었음을 보여주는 대화·정황 확보.</li>\n<li><strong>3단계 — 고의·목적 다툼 정리 (2주)</strong> — 탈법 목적 인식이 없었다는 정황 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대포통장 명의대여 방조 고의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·인식·목적 갈래입니다.</strong></p>\n<ul>\n<li><strong>제안·대가 약속 메시지 (제안 경위)</strong></li>\n<li><strong>계좌 제공 과정·대화 기록 (인식 정황)</strong></li>\n<li><strong>아르바이트·업무로 인식한 정황 자료</strong></li>\n<li><strong>본인 계좌 거래 내역 (이용 정황)</strong></li>\n<li><strong>상대방 연락처·신분 정보</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n<li><strong>피해 회복·선처 관련 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'범행 인식과 탈법 목적을 알았는지\'입니다. 제안 경위·대가 약속·아르바이트로 믿은 정황이 담긴 대화를 확보하고, 진술이 일관되도록 경위를 미리 정돈해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>방조 고의</strong> — 정범의 범행과 방조에 대한 인식이 증명됐는지.</li>\n<li><strong>탈법 목적 인식</strong> — 탈법행위 목적의 거래임을 알았는지.</li>\n<li><strong>미필적 인식</strong> — 범행에 쓰일 가능성을 인식·용인했는지.</li>\n<li><strong>경위·동기</strong> — 대가·제안 경위가 인식 판단에 미치는 영향.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 목적범의 방조범 성립에 필요한 고의와 탈법행위의 범위',
        summary:
          '대법원 2020도12563(대법원, 2022.10.27 선고) 영역에서 법원은 금융실명법상 \'그 밖의 탈법행위\'란 우회적으로 금지규정을 피하려는 행위 전반이 아니라 불법재산 은닉·자금세탁 등 형사처벌 대상에 준하는 정도여야 하고, 방조범은 정범의 실행을 방조한다는 정을 알면서 한 행위라야 하므로 목적범인 위반죄의 방조범 성립에는 정범의 목적과 방조에 대한 인식이 필요하다고 판시했습니다. 환전을 도와주면 대가를 준다는 말에 계좌를 알려준 행위의 방조 고의를 다툴 때에도 이러한 인식 요건을 검토해볼 수 있습니다.',
        takeaway: '환전 빌미 + 계좌 제공 + 범행 인식 다툼 결합 시 고의·탈법 목적 인식 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계좌만 알려줬는데도 처벌 대상이 되나요?',
        answer:
          '<strong>범행 인식과 탈법 목적 인식이 증명돼야 하는 영역으로, 단순 제공만으로 고의가 곧바로 인정되는 것은 아닙니다.</strong> 제안 경위를 정리하세요.',
      },
      {
        question: '범행에 쓰일 줄 몰랐다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>제안·대가 약속·아르바이트로 믿은 정황이 인식 다툼의 자료가 되는 영역입니다.</strong> 대화 기록을 확보하세요.',
      },
      {
        question: '수고비를 받았는데 더 불리한가요?',
        answer:
          '<strong>대가 수령은 경위의 하나일 뿐, 범행 인식 여부를 종합해 판단하는 영역입니다.</strong> 제안 맥락을 함께 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
      {
        question: '피해 회복이 처분에 영향을 주나요?',
        answer:
          '<strong>사실관계 다툼과 별개로 피해 회복은 처분·양형에 영향을 줄 수 있는 영역입니다.</strong> 전략을 함께 검토하세요.',
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

  // ─── 7. sex-crime-taxi-passenger-driver-contact-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-passenger-driver-contact-track',
    keyword: '심야 택시 기사 승객 신체접촉 추행',
    questionKeyword: '늦은 밤 택시를 탔는데 기사가 운전 중 제 몸을 만지거나 밀착하려 해 너무 무섭고 불쾌했어요. 차 안이라 도망칠 수도 없었는데, 이런 경우도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '택시 기사 신체접촉 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 기사 추행 — 5단계 추행·증거 점검 | 로앤가이드',
      description:
        '심야 택시에서 기사가 신체를 만지거나 밀착했다면 추행 해당성·증거 보전·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「늦은 밤 혼자 택시를 탔는데, 운전하던 기사가 갑자기 몸을 만지거나 밀착하려 해 큰 공포와 수치심을 느낀 분의 상황입니다. 달리는 차 안이라 내릴 수도, 즉시 항의하기도 어려운 상황에서 \'이런 경우도 신고가 되는지\' 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정하는 영역입니다. 판례는 강제추행죄의 \'폭행 또는 협박\'을 상대방의 항거를 곤란하게 할 정도로 강력할 것을 요하지 않고, 신체에 대한 불법한 유형력의 행사이거나 공포심을 일으킬 정도의 해악 고지로 보아야 한다고 보면서, 추행에 해당하는지는 행위 경위·태양·상황을 종합해 판단한 사례 흐름이 있는 영역입니다. 밀폐된 차내 + 운전 중 신체접촉 + 즉시 회피 곤란 결합은 \'추행 해당성·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 상황·회피 곤란 ③ 기사·차량 특정 ④ 증거 보전 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 기사 신체접촉 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·상황·차량 특정·증거·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식(만짐·밀착)·반복 여부 정리.</li>\n<li><strong>② 상황·회피 곤란</strong> — 운행 중 차내라 즉시 회피·항의가 어려웠던 사정 정리.</li>\n<li><strong>③ 기사·차량 특정</strong> — 차량번호·배차 기록·운수회사·결제 내역으로 특정.</li>\n<li><strong>④ 증거 보전</strong> — 차내 블랙박스·앱 호출·결제 기록·당시 메시지 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행의 \'폭행\'은 신체에 대한 불법한 유형력의 행사로도 인정될 수 있어, 차내에서의 신체접촉도 추행으로 평가될 수 있는 영역입니다. 차량 특정 자료와 즉시 회피가 어려웠던 사정을 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량·증거 보전 (즉시)</strong> — 차량번호·앱 호출·결제 기록 확보, 블랙박스 보존 요청.</li>\n<li><strong>2단계 — 경찰 신고 (직후)</strong> — 112 신고로 기사·차량 특정·현장 조치 요청.</li>\n<li><strong>3단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담.</li>\n<li><strong>4단계 — 진술·증거 제출 (조사 단계)</strong> — 행위태양·상황·블랙박스로 추행 해당성 정황 제출.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 기사 신체접촉 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·상황·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·방식 메모 (구체적 행위태양)</strong></li>\n<li><strong>차량번호·운수회사 정보 (가해자 특정)</strong></li>\n<li><strong>택시 앱 호출·배차·결제 기록 (시간·경로 입증)</strong></li>\n<li><strong>차내 블랙박스 보존 요청·확보 자료</strong></li>\n<li><strong>하차 직후 통화·메시지 기록 (즉시 호소 정황)</strong></li>\n<li><strong>목격자·지인 진술</strong></li>\n<li><strong>심리상담·진료 기록 (피해 영향)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시는 차량번호·앱 호출·결제 기록으로 기사·차량 특정이 비교적 수월합니다. 차내 블랙박스는 시간이 지나면 덮어쓰일 수 있어 운수회사·경찰을 통해 빨리 보존을 요청하고, 하차 직후 호소 정황을 남겨두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 접촉인지, 성적 수치심을 일으키는 추행인지.</li>\n<li><strong>유형력 정도</strong> — 항거 곤란까지 요하지 않는 추행 해당 여부.</li>\n<li><strong>차량 특정</strong> — 차량번호·앱 기록으로 기사를 특정할 수 있는지.</li>\n<li><strong>즉시 호소 정황</strong> — 차내라 즉시 항의가 어려웠던 사정과 하차 직후 호소.</li>\n<li><strong>증거 시점</strong> — 블랙박스 보존·즉시 신고의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄의 폭행 의미와 추행 해당성 판단',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 \'폭행 또는 협박\'은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고, 신체에 대한 불법한 유형력의 행사(폭행)이거나 일반적으로 공포심을 일으킬 정도의 해악 고지(협박)이면 충분하다고 판시했습니다. 택시 안에서 기사가 승객의 신체를 만지거나 밀착한 행위가 추행에 해당하는지, 그 유형력의 정도를 평가할 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '밀폐된 차내 + 운전 중 신체접촉 + 즉시 회피 곤란 결합 시 추행 해당성·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '스치듯 닿은 것도 추행이 되나요?',
        answer:
          '<strong>우연한 접촉인지, 성적 수치심을 일으키는 추행인지를 행위태양·상황으로 판단하는 영역입니다.</strong> 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '강하게 저항하지 못했는데 불리한가요?',
        answer:
          '<strong>강제추행은 항거를 곤란하게 할 정도의 폭행까지 요하지 않는 영역입니다.</strong> 차내라 회피가 어려웠던 사정을 정리하세요.',
      },
      {
        question: '차량번호를 못 봤는데 기사를 찾을 수 있나요?',
        answer:
          '<strong>택시 앱 호출·결제 기록으로 차량·기사를 특정할 수 있는 영역입니다.</strong> 호출·결제 내역을 확보하세요.',
      },
      {
        question: '블랙박스는 어떻게 확보하나요?',
        answer:
          '<strong>시간이 지나면 덮어쓰일 수 있어 운수회사·경찰을 통해 빨리 보존을 요청하는 것이 중요한 영역입니다.</strong> 즉시 신고하세요.',
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

  // ─── 8. sex-crime-crowded-subway-groping-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-crowded-subway-groping-track',
    keyword: '만원 지하철 추행 기습추행 가해자 특정',
    questionKeyword: '출근길 만원 지하철에서 누군가 제 몸을 만지는 게 분명히 느껴졌어요. 사람이 너무 많아 누가 그랬는지 돌아보기도, 항의하기도 어려웠는데, 이런 경우도 추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '지하철 추행 신고·가해자 특정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '지하철 추행 — 5단계 기습추행·증거 점검 | 로앤가이드',
      description:
        '만원 지하철에서 누군가 몸을 만졌다면 추행 해당성·가해자 특정·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「사람으로 가득 찬 출근길 지하철에서, 누군가 분명히 몸을 만지는 것을 느꼈지만 너무 혼잡해 돌아보기도 항의하기도 어려웠던 분의 상황입니다. 누가 그랬는지 특정하기도 힘들고 \'이런 경우도 신고가 되는지\' 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 추행한 경우를 강제추행죄로, 성폭력범죄의 처벌 등에 관한 특례법 제11조는 대중교통수단 등 공중이 밀집하는 장소에서의 추행을 정하는 영역입니다. 판례는 폭행행위 자체가 추행에 해당하는 이른바 기습추행의 경우 상대방의 의사에 반하는 유형력의 행사가 있으면 힘의 대소강약을 불문한다고 보고, 추행은 일반인 기준 성적 수치심·혐오감을 일으키는 행위로 보아 상황을 종합해 판단한 사례 흐름이 있는 영역입니다. 공중 밀집 + 기습 신체접촉 + 즉시 항의 곤란 결합은 \'추행 해당성·가해자 특정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 장소·상황 ③ 가해자 특정 ④ 증거 보전 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 기습추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·장소·가해자 특정·증거·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식(만짐·밀착)·반복 여부 정리.</li>\n<li><strong>② 장소·상황</strong> — 대중교통수단 등 공중 밀집 장소 여부, 즉시 항의가 어려웠던 상황 정리.</li>\n<li><strong>③ 가해자 특정</strong> — 인상착의·동선·하차역·역사·차량 CCTV로 특정 자료 확보.</li>\n<li><strong>④ 증거 보전</strong> — 역사·열차 CCTV 보존 요청·당시 메시지·목격자 확보.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰·지하철보안관 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기습추행은 의사에 반하는 유형력의 행사가 있으면 힘의 대소강약을 불문하고 추행으로 평가될 수 있는 영역입니다. 혼잡으로 즉시 항의가 어려웠던 사정과 접촉 부위·방식, 가해자 특정 자료를 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 신고·증거 보전 (즉시)</strong> — 112·지하철보안관 신고, 역사·열차 CCTV 보존 요청.</li>\n<li><strong>2단계 — 가해자 특정 자료 확보 (직후)</strong> — 인상착의·하차역·목격자 확보.</li>\n<li><strong>3단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담.</li>\n<li><strong>4단계 — 진술·증거 제출 (조사 단계)</strong> — 행위태양·장소·CCTV로 추행 해당성 정황 제출.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 추행 신고·가해자 특정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·장소·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·방식 메모 (구체적 행위태양)</strong></li>\n<li><strong>탑승 역·시간·노선·칸 정보 (시간·장소 입증)</strong></li>\n<li><strong>역사·열차 CCTV 보존 요청 자료</strong></li>\n<li><strong>가해자 인상착의·하차역·동선 메모</strong></li>\n<li><strong>목격자 진술·연락처</strong></li>\n<li><strong>교통카드 이용 내역 (탑승 입증)</strong></li>\n<li><strong>직후 통화·메시지 기록 (즉시 호소 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼잡한 지하철에서는 가해자 특정이 관건이므로, 탑승 역·시간·노선·칸을 기록하고 즉시 지하철보안관·112에 신고해 역사·열차 CCTV 보존을 요청하는 것이 중요합니다. 접촉 부위·방식과 즉시 항의가 어려웠던 사정도 함께 기록해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 우연한 접촉인지, 의사에 반하는 추행인지.</li>\n<li><strong>기습추행</strong> — 힘의 대소강약을 불문하는 기습추행 해당 여부.</li>\n<li><strong>가해자 특정</strong> — 혼잡한 상황에서 가해자를 특정할 수 있는지.</li>\n<li><strong>즉시 호소 정황</strong> — 즉시 항의가 어려웠던 사정과 직후 호소.</li>\n<li><strong>증거 시점</strong> — CCTV 보존·즉시 신고의 중요성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·지하철경찰대 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행 해당성 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행행위로 인정되는 이른바 기습추행도 포함되고, 이때 추행행위와 동시에 저질러지는 폭행은 상대방의 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 판시했습니다. 또 추행은 일반인 기준 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위라고 보았습니다. 만원 지하철에서 몸을 만진 행위가 추행에 해당하는지를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '공중 밀집 + 기습 신체접촉 + 즉시 항의 곤란 결합 시 추행 해당성·가해자 특정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 많아 닿은 건데 추행이 되나요?',
        answer:
          '<strong>의사에 반하는 유형력의 행사이면 힘의 정도와 무관하게 기습추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식을 정리하세요.',
      },
      {
        question: '누가 그랬는지 못 봤는데 신고가 되나요?',
        answer:
          '<strong>역사·열차 CCTV·목격자로 가해자를 특정할 수 있는 영역입니다.</strong> 탑승 역·시간·칸을 기록해 보존을 요청하세요.',
      },
      {
        question: '그 자리에서 항의 못 했는데 불리한가요?',
        answer:
          '<strong>혼잡으로 즉시 항의가 어려웠던 사정도 함께 평가되는 영역입니다.</strong> 직후 호소·메시지 정황을 남기세요.',
      },
      {
        question: 'CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>시간이 지나면 삭제될 수 있어 즉시 지하철보안관·경찰에 보존을 요청하는 것이 중요한 영역입니다.</strong> 탑승 정보를 함께 제출하세요.',
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
      { label: '가해자 특정·수사 협조', href: '/guide/sex-crime/sex-crime-offender-identification-track' },
      { label: '성범죄 피해자 보호제도', href: '/guide/sex-crime/sex-crime-victim-protection-system' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-business-trip-lodging-coworker-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-business-trip-lodging-coworker-track',
    keyword: '출장 숙소 동료 추행 위력',
    questionKeyword: '회사 출장으로 함께 간 숙소에서 동료가 제 몸을 만지거나 추행을 했어요. 같은 직장이라 신고하면 불이익이 있을까 두렵고, 시간이 좀 지났는데 지금이라도 처벌을 물을 수 있나요?',
    ctaKeyword: '출장 숙소 동료 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '출장 숙소 동료 추행 — 5단계 추행·증거 점검 | 로앤가이드',
      description:
        '출장 숙소에서 직장 동료에게 추행을 당했다면 추행 해당성·증거 보전·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「회사 출장으로 함께 간 숙소에서, 같은 직장 동료가 몸을 만지거나 추행을 해 큰 충격과 수치심을 느낀 분의 상황입니다. 신고하면 직장 내에서 불이익을 받을까 두렵고, 시간이 좀 지나 \'지금이라도 처벌을 물을 수 있는지\' 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 추행한 경우를 강제추행죄로 정하고, 업무·고용 등 관계로 보호·감독받는 사람에 대한 추행은 성폭력처벌법상 업무상위력 등에 의한 추행으로 평가될 수 있는 영역입니다. 판례는 추행을 일반인 기준 성적 수치심·혐오감을 일으키는 행위로 보고, 친고죄였던 시기 사건의 고소기간·신상정보 제출의무 등 절차적 쟁점도 함께 다뤄온 사례 흐름이 있는 영역입니다. 출장·숙소 밀폐 + 직장 관계 + 추행 결합은 \'추행 해당성·증거 보전\' 다툼이 가능한 트랙입니다. 피해자라면 ① 행위태양 정리 ② 관계·위력 ③ 증거 보전 ④ 직장 대응 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 출장 숙소 동료 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위태양·관계·증거·직장 대응·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위태양 정리</strong> — 접촉 부위·방식·시점, 거부 의사 표시 여부 정리.</li>\n<li><strong>② 관계·위력</strong> — 직장 내 지위·업무 관계로 인한 위력 정황 검토.</li>\n<li><strong>③ 증거 보전</strong> — 숙소·이동 구간 CCTV·메시지·목격자·진료 기록 확보.</li>\n<li><strong>④ 직장 대응</strong> — 직장 내 신고·불이익 금지·분리 조치 검토.</li>\n<li><strong>⑤ 신고·보호</strong> — 경찰 신고·해바라기센터 상담·보호 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 관계로 거부가 쉽지 않았던 사정과 추행의 행위태양을 함께 정리하는 것이 핵심입니다. 형사 신고와 별개로 직장 내 신고·불이익 금지·분리 조치도 함께 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·해바라기센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 숙소·이동 구간 CCTV 보존 요청, 메시지·진료 기록 확보.</li>\n<li><strong>2단계 — 상담·심리 지원 (수일 내)</strong> — 해바라기센터·1366 상담으로 대응 방향 정리.</li>\n<li><strong>3단계 — 직장 내 신고·보호 (병행)</strong> — 직장 내 고충·신고 절차, 불이익 금지·분리 조치 요청.</li>\n<li><strong>4단계 — 경찰 신고·진술 (준비 후)</strong> — 경찰 112 신고, 행위태양·관계 진술.</li>\n<li><strong>5단계 — 보호조치·피해회복 (이후)</strong> — 신변보호·합의·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출장 숙소 동료 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 행위태양·관계·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>당시 상황·접촉 부위·시점 메모 (구체적 행위태양)</strong></li>\n<li><strong>출장 일정·숙소 배정·동행자 정보 (관계·경위)</strong></li>\n<li><strong>숙소·이동 구간 CCTV 보존 요청 자료</strong></li>\n<li><strong>사건 전후 메시지·통화 기록 (거부·호소 정황)</strong></li>\n<li><strong>목격자·동행자 진술</strong></li>\n<li><strong>병원·심리상담 기록 (피해 영향)</strong></li>\n<li><strong>직장 내 신고·고충 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직장 관계 사건은 형사 절차와 직장 내 절차가 함께 진행될 수 있습니다. 출장 일정·숙소 배정으로 경위를 정리하고, 사건 전후 메시지·진료 기록으로 행위태양과 피해를 뒷받침하면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 성적 수치심을 일으키는 추행에 해당하는지.</li>\n<li><strong>위력·관계</strong> — 직장 지위·업무 관계로 인한 위력 여부.</li>\n<li><strong>거부 정황</strong> — 거부 의사 표시와 직장 관계로 인한 곤란.</li>\n<li><strong>직장 내 불이익</strong> — 신고 후 불이익 금지·분리 조치.</li>\n<li><strong>증거 시점</strong> — 시간 경과에 따른 CCTV·증거 확보의 한계.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 지원)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 사건의 친고죄·고소기간과 신상정보 제출의무',
        summary:
          '대법원 2015도2390(대법원, 2018.06.28 선고) 영역에서 법원은 일정 시기 이전에 저질러진 강제추행 등 성폭력범죄가 여전히 친고죄로서 구 특례법이 적용되는 경우 고소기간이 \'범인을 알게 된 날부터 1년\'인지, 등록대상 성범죄로 유죄판결이 확정되면 신상정보 제출의무가 당연히 발생하는지 등을 판단했습니다. 직장 동료에 의한 추행 사건에서 처벌·고소 가능 시기와 절차적 쟁점을 살펴볼 때에도 이러한 법리를 검토해볼 수 있습니다.',
        takeaway: '출장·숙소 밀폐 + 직장 관계 + 추행 결합 시 추행 해당성·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시간이 좀 지났는데 지금도 신고가 되나요?',
        answer:
          '<strong>사건 시점·죄명에 따라 고소·공소시효가 달라지는 영역입니다.</strong> 시점을 정리해 상담으로 확인하세요.',
      },
      {
        question: '같은 직장이라 신고하면 불이익이 있을까요?',
        answer:
          '<strong>신고를 이유로 한 불이익은 금지되고 분리·보호 조치를 요청할 수 있는 영역입니다.</strong> 직장 내 신고 절차를 함께 확인하세요.',
      },
      {
        question: '숙소엔 CCTV가 없는데 어떻게 하나요?',
        answer:
          '<strong>이동 구간 CCTV·메시지·동행자 진술 등 다른 정황으로 정리하는 영역입니다.</strong> 가능한 자료를 모두 모으세요.',
      },
      {
        question: '형사 신고와 직장 대응을 같이 하나요?',
        answer:
          '<strong>형사 신고와 직장 내 신고·보호 조치는 병행해볼 수 있는 영역입니다.</strong> 자료를 갖춰 함께 검토하세요.',
      },
      {
        question: '상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-act-report-procedure' },
      { label: '업무상위력 추행 대응', href: '/guide/sex-crime/sex-crime-abuse-of-authority-track' },
      { label: '직장 내 성희롱·추행 대응', href: '/guide/sex-crime/sex-crime-workplace-response-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-massage-shop-customer-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-customer-falsely-accused-defense',
    keyword: '마사지샵 시술 중 접촉 추행 무고 방어',
    questionKeyword: '마사지샵에서 시술하던 중 신체접촉이 있었다며 손님이 저를 추행으로 고소했어요. 시술에 필요한 접촉이었을 뿐 추행 의도는 전혀 없었는데, 진술만으로 가해자가 된 상황이에요. 어떻게 방어해야 하나요?',
    ctaKeyword: '마사지샵 추행 고소 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '마사지샵 추행 고소 방어 — 5단계 진술·무죄추정 점검 | 로앤가이드',
      description:
        '시술 중 접촉을 두고 추행으로 고소당했다면 무죄추정·진술 신빙성·합리적 의심 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>「마사지샵에서 시술을 하던 중 있었던 신체접촉을 두고, 손님이 추행을 당했다며 고소를 한 상황에 놓인 분의 경우입니다. 시술에 필요한 접촉이었을 뿐 추행할 의도는 전혀 없었는데, 상대 진술만으로 가해자로 지목돼 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 형사피고인은 유죄의 판결이 확정될 때까지 무죄로 추정되고(헌법 제27조 제4항, 형사소송법 제275조의2), 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다(형사소송법 제307조 제2항)는 점이 핵심 쟁점입니다. 판례는 피해자 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도로 신빙성이 있어야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역입니다. 진술만으로 곧바로 추행이 인정되는 것은 아니라는 평가가 가능한 영역입니다. 시술 경위 + 진료·시술 필요 접촉 + 진술 신빙성 다툼 결합은 \'무죄추정·진술 신빙성·합리적 의심\' 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위 정리 ② 시술 필요성 ③ 진술 신빙성 ④ 증거 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 추행 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·시술 필요성·진술 신빙성·증거·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 시술 종류·자세·접촉 부위·예약·동선 정리.</li>\n<li><strong>② 시술 필요성</strong> — 해당 접촉이 시술에 통상 필요한 범위였는지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 고소인 진술의 일관성·객관 정황 부합 여부 검토.</li>\n<li><strong>④ 증거 검토</strong> — CCTV·예약 기록·동시간 직원 진술 등 객관 자료 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진술이 사실상 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도로 신빙성이 있어야 유죄로 판단할 수 있습니다. 시술 필요성과 진술의 객관 정황 부합 여부를 정리해 진술 신빙성을 다툴 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·증거 정리 (즉시)</strong> — 시술 종류·자세·접촉 경위·예약·CCTV·동선 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·예약 기록·동시간 직원 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 진술 신빙성 검토 (2주)</strong> — 고소인 진술의 일관성·객관 정황 부합 여부 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 피해 회복·선처 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 추행 고소 진술 신빙성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·시술 필요성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>시술 종류·자세·접촉 부위 메모 (구체적 경위)</strong></li>\n<li><strong>예약·이용 내역·시술 기록 (관계·시간 입증)</strong></li>\n<li><strong>매장·시술실 CCTV 보존 요청 자료</strong></li>\n<li><strong>동시간 직원·다른 손님 진술</strong></li>\n<li><strong>시술 표준 절차·동의 안내 자료 (필요 범위 입증)</strong></li>\n<li><strong>고소 전후 대화·메시지 기록</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 \'진술이 합리적 의심 없이 신빙성이 있는가\'입니다. 시술 표준 절차·CCTV·예약 기록 등 객관 자료를 확보하고, 진술이 일관되도록 시술 경위·접촉 범위를 미리 정돈해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지.</li>\n<li><strong>시술 필요성</strong> — 접촉이 시술에 통상 필요한 범위였는지.</li>\n<li><strong>추행 고의</strong> — 시술 범위를 넘은 추행의 인식·의사가 있었는지.</li>\n<li><strong>객관 증거</strong> — 진술 외 CCTV·정황 증거의 충분성.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정 원칙과 진술 신빙성·합리적 의심 없는 증명',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고, 유죄 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 통상 추행이 예상되기 어려운 상황에서 피해자 진술이 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 정도로 신빙성이 있어야 유죄로 판단할 수 있다고 판시했습니다. 시술 중 접촉을 두고 진술만으로 추행이 다투어지는 사건에서도 이러한 무죄추정·진술 신빙성 기준을 검토해볼 수 있습니다.',
        takeaway: '시술 경위 + 시술 필요 접촉 + 진술 신빙성 다툼 결합 시 무죄추정·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대 진술만 있는데 처벌받게 되나요?',
        answer:
          '<strong>진술이 합리적 의심을 배제할 정도로 신빙성이 있어야 유죄로 판단되는 영역입니다.</strong> 객관 정황과의 부합 여부를 정리하세요.',
      },
      {
        question: '시술에 필요한 접촉이었다는 걸 어떻게 보여주나요?',
        answer:
          '<strong>시술 표준 절차·자세·접촉 범위 자료가 시술 필요성 다툼의 근거가 되는 영역입니다.</strong> 시술 기록을 확보하세요.',
      },
      {
        question: '시술실에 CCTV가 없는데 불리한가요?',
        answer:
          '<strong>매장 CCTV·예약 기록·직원 진술 등 다른 정황으로 정리하는 영역입니다.</strong> 가능한 객관 자료를 모으세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 시술 경위를 정돈하고 변호인 조력을 검토하세요.',
      },
      {
        question: '합의가 처분에 영향을 주나요?',
        answer:
          '<strong>사실관계 다툼과 별개로 피해 회복·합의는 처분·양형에 영향을 줄 수 있는 영역입니다.</strong> 전략을 함께 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense-track' },
      { label: '진술 신빙성 다툼', href: '/guide/sex-crime/sex-crime-statement-credibility-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
      { label: '국선변호인 선임', href: '/guide/sex-crime/sex-crime-public-defender-track' },
      { label: '합의와 양형 자료', href: '/guide/sex-crime/sex-crime-settlement-sentencing-effect' },
    ],
  },
];
