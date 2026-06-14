import { SpokePage } from '../spoke-pages';

// batch98 fraud(6) + sex-crime(4) — 10개 (2026-06-15)
//
// 고유 존재 이유:
// 1. fraud-used-car-odometer-track — 일반 중고차 하자류와 분기. '주행거리를 조작해 무사고·저주행처럼 판매' 계기 조작·편취 판단형 트랙(victim).
// 2. fraud-online-shop-nondelivery-track — 일반 거래분쟁과 분기. '대금 받고 물건 미배송·쇼핑몰 잠적' 미배송·편취 절차형 트랙(victim).
// 3. fraud-fake-luxury-genuine-track — 일반 가품 분쟁과 분기. '가품을 정품이라 속여 정품가로 판매' 진품 기망·편취 판단형 트랙(victim).
// 4. fraud-job-recruit-advance-fee-track — 일반 취업사기류와 분기. '구인 빙자로 선입금·교육비·보증금을 받고 잠적' 선입금 편취 판단형 트랙(victim).
// 5. fraud-romance-scam-remittance-track — 일반 송금사기류와 분기. '온라인 연인 행세로 신뢰를 쌓아 반복 송금 유도' 로맨스스캠 편취 절차형 트랙(victim).
// 6. fraud-loan-default-falsely-accused-defense — 일반 사기 무고류와 분기. '차용금 변제지체를 사기로 고소당함' 변제의사·고지의무 방어 판단형 트랙(accused).
// 7. sex-crime-club-dancefloor-track — 일반 추행류와 분기. '클럽 댄스플로어 혼잡 속 신체 접촉' 추행 해당성·상당성 일탈 판단형 트랙(victim).
// 8. sex-crime-massage-shop-owner-track — 일반 추행류와 분기. '마사지·관리 중 업주가 신체를 추행' 시술 빙자 추행·위력 판단형 트랙(victim).
// 9. sex-crime-elevator-stranger-track — 일반 추행류와 분기. '엘리베이터 밀폐공간 낯선 사람 기습추행' 추행 고의·범의 판단형 트랙(victim).
// 10. sex-crime-dating-app-meetup-falsely-accused-defense — 일반 성범죄 무고류와 분기. '데이팅앱 만남 후 강제추행으로 고소당함' 추행 고의·무죄추정 방어 판단형 트랙(accused).

export const spokesBatch98FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-car-odometer-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-odometer-track',
    keyword: '중고차 주행거리 조작 판매 사기',
    questionKeyword: '중고차를 사면서 ‘주행거리 얼마 안 됐다, 무사고 저주행이다’라는 말과 계기판 숫자를 믿고 시세보다 비싼 값에 차를 샀는데, 나중에 보험이력·정비이력·성능점검 기록을 조회해 보니 실제 주행거리가 훨씬 길고 계기판이 조작된 정황이 나왔어요. 판매자·상사는 ‘우리도 몰랐다, 원래 그렇게 받았다’며 환불을 거부하는데, 처음부터 주행거리를 속여 비싸게 판 이 거래를 사기로 신고하고 차액·대금을 돌려받을 수 있나요?',
    ctaKeyword: '중고차 주행거리 조작·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '저주행이라던 중고차의 계기판이 조작돼 비싸게 샀고 판매자가 환불을 거부한다면, 형법 제347조 사기의 주행거리 조작·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매상사·딜러·직거래에서 ‘주행거리 얼마 안 됐다, 무사고에 저주행이다, 계기판 숫자 그대로다’라는 설명과 깨끗한 계기판을 믿고, 그만큼 값을 쳐주고 적지 않은 돈으로 중고차를 산 분의 상황입니다. 그런데 인수 후 보험개발원 카히스토리·정비이력·성능상태점검 기록을 조회해 보니 실제 주행거리가 계기판 숫자보다 훨씬 길거나, 과거 정비 시점의 주행거리보다 현재 숫자가 줄어든 명백한 계기 조작 정황이 드러나 충격받으셨을 거예요. 판매자·상사에 따지자 ‘우리도 받을 때부터 그랬다, 몰랐다, 환불은 안 된다’며 발뺌하거나 책임을 떠넘겨, 처음부터 주행거리를 속여 시세보다 비싸게 판 건 아닌지 의심되고 막막하실 거예요. 큰돈이 들어간 데다 안전과 직결되는 차라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 주행거리를 알거나 알 수 있었음에도 조작·은폐하고 저주행 차량으로 표시해 정상보다 높은 가격에 판매했다면 기망행위로 평가될 여지가 있고, 그 대금 교부가 있으면 재산침해가 인정될 수 있습니다. 판례는 특정경제범죄법 위반(사기)죄와 위계에 의한 업무방해죄처럼 보호법익·구성요건·기수 시기가 다른 범죄는 각각 별개로 성립하고 실체적 경합관계에 있을 수 있다고 본 사례 흐름이 있는 영역으로, 기망에 의한 편취가 다른 위법행위와 결합한 경우 죄책을 폭넓게 검토할 여지가 있습니다. 주행거리 조작 + 저주행 표시 + 환불 거부 결합은 ‘계기 조작·편취 고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·차량 정리 ② 주행거리 조작·고지의무 ③ 편취액·차액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 조작 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·주행거리 조작·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·차량 정리</strong> — 매매계약서·성능점검표·주행거리 설명·매매대금·계기판 정리.</li>\n<li><strong>② 주행거리 조작·고지의무</strong> — 실제 주행거리를 알거나 알 수 있었음에도 숨겼는지 검토.</li>\n<li><strong>③ 편취액·차액</strong> — 대금 전부 또는 저주행 표시로 부풀려진 차액 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·대금·차액 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 주행거리 오차와 달리, 계기판을 조작하거나 실제 주행거리를 알면서 저주행으로 속여 비싸게 팔았는지가 사기 판단의 분기점입니다. 성능점검표와 보험·정비이력 조회 결과를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·차량 자료 보존 (즉시)</strong> — 매매계약서·성능점검표·주행거리 설명 대화·계기판 사진 보존.</li>\n<li><strong>2단계 — 주행거리 조작 입증 (즉시)</strong> — 카히스토리·정비이력·검사 기록으로 실제 주행거리와 조작 정황을 객관적으로 확보.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·대금·차액 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄·경찰 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 대금·차액 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 조작 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·주행거리 조작·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서·성능상태점검표 (주행거리 표시 확인)</strong></li>\n<li><strong>저주행·무사고 설명 대화·광고 캡처 (기망 정황)</strong></li>\n<li><strong>카히스토리·보험·정비이력 조회 결과 (실제 주행거리)</strong></li>\n<li><strong>계기판·차량 상태 사진·영상 (조작 정황)</strong></li>\n<li><strong>매매대금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불·차액 요구·발뺌·책임 회피 대화 기록</strong></li>\n<li><strong>판매자·상사·딜러·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성능점검표의 주행거리 표시와 정비이력상 과거 주행거리를 대조하면 계기 조작 정황이 선명해집니다. 정비 시점별 주행거리 역전을 짚으면 판매자가 알 수 있었는지 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>조작 인식</strong> — 주행거리 조작을 알거나 알 수 있었는지.</li>\n<li><strong>고지의무</strong> — 실제 주행거리를 고지·표시할 의무를 어겼는지.</li>\n<li><strong>가격 부풀림</strong> — 저주행 표시로 시세보다 비싸게 받았는지.</li>\n<li><strong>편취액·차액</strong> — 대금 전부인지 부풀린 차액인지.</li>\n<li><strong>판매자 특정</strong> — 상사·딜러·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고차·매매 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄와 결합 범죄의 죄수·실체적 경합',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 기망하여 대금을 교부받은 특정경제범죄법 위반(사기)죄와 위계로 업무를 방해한 업무방해죄는 보호법익·구성요건적 행위태양·기수 시기 등이 서로 달라 별개로 성립하고, 어느 한 죄의 불법·책임이 다른 죄를 모두 포함하지 않으므로 상상적 경합이 아니라 실체적 경합관계로 봄이 타당하다고 판시했습니다. 주행거리를 조작·은폐해 차량을 비싸게 판 사안을 살펴볼 때에도 기망에 의한 편취와 다른 위법행위의 죄책을 폭넓게 검토해볼 수 있습니다.',
        takeaway: '주행거리 조작 + 저주행 표시 + 환불 거부 결합 시 계기 조작·편취 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 몰랐다는데 사기가 되나요?',
        answer:
          '<strong>주행거리 조작을 알거나 알 수 있었음에도 저주행으로 표시했는지가 핵심인 영역입니다.</strong> 성능점검표와 정비이력 조회 결과를 확보하세요.',
      },
      {
        question: '계기판 조작은 어떻게 입증하나요?',
        answer:
          '<strong>카히스토리·정비이력의 과거 주행거리와 현재 숫자 역전이 출발점인 영역입니다.</strong> 시점별 주행거리 기록을 모으세요.',
      },
      {
        question: '환불이 아니라 차액만 받을 수도 있나요?',
        answer:
          '<strong>대금 전부 반환과 부풀린 차액 회수를 함께 검토할 수 있는 영역입니다.</strong> 시세·매수가·실제 가치 자료를 정리하세요.',
      },
      {
        question: '상사가 받을 때부터 그랬다고 떠넘겨요.',
        answer:
          '<strong>책임을 떠넘기는 발뺌이 다툼의 핵심인 영역입니다.</strong> 저주행으로 속여 판 거래 조건과 조작 정황을 정리하세요.',
      },
      {
        question: '판매자가 환불을 거부하고 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '형사·민사 사기 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '계좌 지급정지 환급', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '학원비 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 2. fraud-online-shop-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-shop-nondelivery-track',
    keyword: '온라인 쇼핑몰 미배송 잠적 사기',
    questionKeyword: '온라인 쇼핑몰·SNS 마켓·오픈마켓에서 물건을 주문하고 대금을 미리 입금했는데, 약속한 배송일이 지나도 물건이 오지 않고 ‘재고가 늦는다, 곧 발송한다’는 말만 반복하다 결국 사이트가 닫히고 연락이 끊겼어요. 알고 보니 같은 쇼핑몰에서 돈만 받고 물건을 안 보낸 피해자가 여럿인데, 미배송 잠적 쇼핑몰을 사기로 신고하고 입금한 돈을 돌려받으려면 어떤 순서로 해야 하나요?',
    ctaKeyword: '온라인 쇼핑몰 미배송·편취 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 쇼핑몰 미배송 잠적 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '대금을 입금했는데 쇼핑몰이 물건을 안 보내고 잠적했다면, 형법 제347조 사기의 미배송·편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 쇼핑몰·SNS 마켓·인스타·오픈마켓·공동구매에서 사진과 후기를 믿고 물건을 주문한 뒤, 시키는 대로 카드 결제나 계좌이체로 대금을 먼저 입금한 분의 상황입니다. 그런데 약속한 배송일이 지나도 물건이 오지 않고 ‘재고 입고가 늦는다, 택배사 사정이다, 오늘 발송한다’는 핑계만 며칠씩 반복되다가, 결국 쇼핑몰·SNS 계정이 닫히고 고객센터·메시지가 모두 막혀 연락이 끊겨, 처음부터 물건을 보낼 생각 없이 돈만 받은 건 아닌지 의심되고 막막하실 거예요. 같은 쇼핑몰에서 똑같이 돈만 떼인 피해자가 여럿이라는 글까지 보여, 멀쩡히 결제하고도 물건도 돈도 없어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 물건을 보낼 의사·능력 없이 정상 판매처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있고, 대금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기 공소사실의 재산상 피해자와 공소장 기재 피해자가 다른 것이 판명되어도 공소사실의 동일성을 해하지 않고 방어권에 실질적 불이익을 주지 않는 한 진정한 피해자를 가려내어 사기죄로 처벌해야 한다고 본 사례 흐름이 있는 영역으로, 피해자가 다수인 거래에서도 실제 피해자별 편취를 면밀히 가려 다툴 여지가 있습니다. 미배송 + 핑계·반복 + 잠적 결합은 ‘미배송·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 주문·결제 정리 ② 미배송·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 쇼핑몰 미배송 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 주문·미배송·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 주문·결제 정리</strong> — 주문 내역·결제·입금·배송 약속·판매 글 정리.</li>\n<li><strong>② 미배송·기망</strong> — 보낼 의사·능력 없이 핑계로 미루다 잠적했는지 검토.</li>\n<li><strong>③ 편취액</strong> — 교부한 결제·입금액 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·집단 대응</strong> — 계좌 지급정지·동일 쇼핑몰 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 보낼 의사·능력 없이 정상 판매처럼 가장해 돈만 받고 잠적했는지가 사기 판단의 분기점입니다. 주문·결제 증빙과 미배송·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 주문·결제 자료 보존 (즉시)</strong> — 주문 내역·결제·입금·판매 글·배송 약속 대화 캡처 보존.</li>\n<li><strong>2단계 — 미배송·잠적 입증 (즉시)</strong> — 미발송·핑계 반복·계정 폐쇄·연락 두절 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 계좌이체는 송금 은행에 지급정지를, 카드는 카드사에 거래취소·이의제기를 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM에 접수하고 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 동일 쇼핑몰 공동 신고·민사 대금 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 쇼핑몰 미배송 잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 주문·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문 내역·상품 페이지·판매 글 캡처 (거래 조건)</strong></li>\n<li><strong>카드 결제·계좌이체·입금 내역 (피해 금액)</strong></li>\n<li><strong>배송 약속·발송 핑계·연락 두절 대화 캡처 (기망 정황)</strong></li>\n<li><strong>쇼핑몰·SNS 계정 폐쇄·고객센터 차단 정황</strong></li>\n<li><strong>동일 쇼핑몰 다른 피해·후기 자료</strong></li>\n<li><strong>지급정지·카드 이의제기 접수 자료</strong></li>\n<li><strong>판매자·쇼핑몰·계좌·연락처 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 직후 미배송과 핑계·잠적을 시간순으로 정리하면 보낼 의사 없이 돈만 받았는지 기망 정황이 선명해집니다. 계좌이체는 신속 지급정지가, 카드는 이의제기가 회수의 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미배송·기망</strong> — 보낼 의사·능력 없이 돈만 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 지연인지 처음부터 편취였는지.</li>\n<li><strong>피해자 특정</strong> — 다수 피해 중 본인 결제·피해를 가려낼 수 있는지.</li>\n<li><strong>편취액</strong> — 교부한 결제·입금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 쇼핑몰·계정·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·미배송 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제·지급정지 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 진정한 피해자의 특정과 처벌',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우에도, 공소사실의 동일성을 해하지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 곧바로 무죄를 선고할 것이 아니라 진정한 피해자를 가려내어 그 피해자에 대한 사기죄로 처벌해야 한다고 판시했습니다. 한 쇼핑몰이 다수에게 돈만 받고 미배송한 사안을 살펴볼 때에도 실제 피해자별 편취와 피해 특정을 검토해볼 수 있습니다.',
        takeaway: '미배송 + 핑계·반복 + 잠적 결합 시 미배송·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 배송 지연 아닌가요?',
        answer:
          '<strong>보낼 의사·능력 없이 핑계로 미루다 잠적했는지가 핵심인 영역입니다.</strong> 결제·미배송·잠적 정황을 시간순으로 확보하세요.',
      },
      {
        question: '계좌이체로 보냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>송금 은행에 지급정지를 신속히 요청할 수 있는 영역입니다.</strong> 입금 직후일수록 회수 가능성이 높습니다.',
      },
      {
        question: '카드로 결제했는데 어떻게 하나요?',
        answer:
          '<strong>카드사에 거래취소·이의제기를 신청할 수 있는 영역입니다.</strong> 미배송·잠적 증빙을 함께 제출하세요.',
      },
      {
        question: '같은 쇼핑몰 피해자가 많아요.',
        answer:
          '<strong>동일 쇼핑몰 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 주문·결제·후기 자료를 모으세요.',
      },
      {
        question: '쇼핑몰이 잠적했는데 신고가 의미 있나요?',
        answer:
          '<strong>계좌·계정 추적과 지급정지로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '형사·민사 사기 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '계좌 지급정지 환급', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '학원비 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 3. fraud-fake-luxury-genuine-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-luxury-genuine-track',
    keyword: '명품 가품 정품 속여 판매 사기',
    questionKeyword: '중고거래·SNS·구매대행에서 ‘정품 보장, 영수증·보증서 있다, 매장 구매품이다’라는 말을 믿고 명품 가방·시계·지갑을 정품 시세에 가깝게 주고 샀는데, 정품 감정·매장 점검을 받아 보니 가품으로 판정됐어요. 판매자는 ‘정품인 줄 알았다, 나도 받은 거다’라며 환불을 거부하는데, 처음부터 가품을 정품이라 속여 비싸게 판 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '명품 가품 정품 기망·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '명품 가품 정품 속여 판매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라던 명품이 감정 결과 가품으로 나오고 판매자가 환불을 거부한다면, 형법 제347조 사기의 진품 기망·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고거래·번개장터·당근·SNS 마켓·구매대행에서 ‘100% 정품 보장, 매장에서 산 정품이다, 영수증·보증서·더스트백 다 있다’는 설명과 그럴듯한 사진을 믿고, 정품 시세에 가까운 적지 않은 돈을 주고 명품 가방·시계·지갑·신발을 산 분의 상황입니다. 그런데 찜찜한 마음에 정품 감정 서비스나 브랜드 매장 점검을 받아 보니 가품(짝퉁)으로 판정돼 충격받으셨을 거예요. 판매자에게 따지자 ‘나도 정품인 줄 알았다, 나도 받아서 파는 거다, 환불은 안 된다’며 발뺌하거나 연락을 미뤄, 처음부터 가품을 정품이라 속여 비싸게 판 건 아닌지 의심되고 막막하실 거예요. 큰돈을 주고도 가짜를 떠안아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품임을 알거나 알 수 있었음에도 정품이라 속여 정품 시세로 판매대금을 받았다면 기망행위로 평가될 여지가 있고, 대금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 다수 피해자에게 각각 기망행위를 하여 재물을 편취한 경우 원칙적으로 피해자별 독립한 사기죄가 성립하되, 피해법익의 동일성이 인정되는 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 동일 판매자의 반복 가품 판매에서 피해 단위를 가려 다툴 여지가 있습니다. 가품 + 정품 표시 + 환불 거부 결합은 ‘진품 기망·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·물품 정리 ② 가품·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명품 가품 정품 속여 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가품·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·물품 정리</strong> — 거래 글·정품 보장 설명·대금·물품·구성품 정리.</li>\n<li><strong>② 가품·기망</strong> — 가품임을 알거나 알 수 있었음에도 정품이라 속였는지 검토.</li>\n<li><strong>③ 편취액</strong> — 교부한 판매대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·대금 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 품질 불만과 달리, 가품인 줄 알거나 알 수 있었음에도 정품이라 속여 정품 시세로 팔았는지가 사기 판단의 분기점입니다. 정품 보장 설명 대화와 정품 감정 결과를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·물품 자료 보존 (즉시)</strong> — 거래 글·정품 보장 설명 대화·대금 송금·물품·구성품 사진 보존.</li>\n<li><strong>2단계 — 가품 감정 확보 (즉시)</strong> — 정품 감정·매장 점검 결과로 가품 판정을 객관적으로 확보.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·대금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 대금 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명품 가품 정품 속여 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가품·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 글·정품 보장·영수증 주장 캡처 (기망 정황)</strong></li>\n<li><strong>정품 감정·매장 점검 결과 (가품 입증)</strong></li>\n<li><strong>물품·구성품·로고·각인 사진 (가품 정황)</strong></li>\n<li><strong>판매대금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요구·발뺌·연락 두절 대화 기록</strong></li>\n<li><strong>동일 판매자 다른 가품 판매·후기 자료</strong></li>\n<li><strong>판매자 계정·닉네임·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정품 보장 설명과 정품 감정 결과를 대조하면 가품을 정품이라 속였는지 기망 정황이 선명해집니다. 영수증·보증서 진위까지 확인하면 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 인식</strong> — 가품임을 알거나 알 수 있었는지.</li>\n<li><strong>정품 기망</strong> — 정품이라 적극 표시·보장했는지.</li>\n<li><strong>피해법익·죄수</strong> — 반복 판매가 피해자별인지 포괄일죄인지.</li>\n<li><strong>편취액</strong> — 교부한 판매대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (명품·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 사기죄의 죄수와 포괄일죄',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수 피해자에게 각각 기망행위를 하여 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 피해자별로 독립한 사기죄가 성립함이 원칙이나, 기망행위의 공통성·재산 교부 의사결정의 공통성·재산의 형성 과정 등 사정을 종합해 피해법익이 동일하다고 평가될 수 있으면 포괄일죄를 구성할 수 있다고 판시했습니다. 동일 판매자가 가품을 정품이라 속여 반복 판매한 사안을 살펴볼 때에도 피해 단위와 죄수를 검토해볼 수 있습니다.',
        takeaway: '가품 + 정품 표시 + 환불 거부 결합 시 진품 기망·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 자기도 정품인 줄 알았다는데 사기가 되나요?',
        answer:
          '<strong>가품임을 알거나 알 수 있었음에도 정품이라 표시했는지가 핵심인 영역입니다.</strong> 정품 보장 대화와 감정 결과를 확보하세요.',
      },
      {
        question: '가품인 건 어떻게 입증하나요?',
        answer:
          '<strong>정품 감정·매장 점검 결과가 출발점인 영역입니다.</strong> 감정서와 물품 사진을 함께 보관하세요.',
      },
      {
        question: '영수증·보증서가 있다는데 믿어도 되나요?',
        answer:
          '<strong>영수증·보증서의 진위도 다툼점이 되는 영역입니다.</strong> 진위 확인과 함께 정품 표시 정황을 정리하세요.',
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
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '형사·민사 사기 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '계좌 지급정지 환급', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '학원비 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 4. fraud-job-recruit-advance-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-job-recruit-advance-fee-track',
    keyword: '구인 빙자 선입금 알바 사기',
    questionKeyword: '구인 공고·문자·오픈채팅에서 ‘재택 알바, 고수익 부업, 채용 확정’이라며 일을 시켜주겠다고 해놓고 ‘교육비·물품비·보증금·인증비를 먼저 입금하면 바로 시작·환급해준다’고 해서 돈을 보냈는데, 일은 주지 않고 추가 입금만 요구하다 연락이 끊겼어요. 처음부터 일자리는 없이 선입금만 받아 챙길 생각이었던 것 같은데, 구인 빙자 선입금 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '구인 빙자 선입금·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '구인 빙자 선입금 알바 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '취업·알바를 미끼로 교육비·보증금을 선입금받고 일은 안 주고 잠적당했다면, 형법 제347조 사기의 선입금 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「구인 사이트·문자·SNS·오픈채팅에서 ‘재택 알바, 고수익 부업, 채용 확정, 단기 모집’이라며 솔깃한 조건을 내건 뒤, ‘교육비·물품비·작업 보증금·인증비·키트 비용을 먼저 입금하면 바로 일을 시작하고 곧 환급·정산해준다’는 말에 일자리를 구하려는 마음으로 시키는 대로 돈을 입금한 분의 상황입니다. 그런데 막상 일은 제대로 주지 않거나, 처음 소액 정산으로 안심시킨 뒤 ‘등급 상향·추가 인증·세금 명목’으로 더 큰 입금을 반복 요구하고, 더 보내지 않자 단체방에서 내보내거나 결국 연락을 끊어, 처음부터 일자리는 없이 선입금만 받아 챙길 생각이었던 건 아닌지 의심되고 막막하실 거예요. 돈을 벌려다 오히려 돈을 잃어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실제로 일을 줄 의사·능력 없이 채용·환급을 가장해 선입금을 받았다면 기망행위로 평가될 여지가 있고, 그 입금 교부가 있으면 재산침해가 인정될 수 있습니다. 판례는 별개의 범죄사실은 공소사실의 동일성이 인정되지 않으면 1죄나 상상적 경합이 아니라 별도로 성립하고, 동일 피해자에 대해 수회 기망해 편취한 경우 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 반복 선입금 요구의 피해 단위와 죄책을 가려 다툴 여지가 있습니다. 채용·환급 빙자 + 선입금 + 추가 입금·잠적 결합은 ‘선입금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 모집·입금 정리 ② 기망·선입금 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구인 빙자 선입금 알바 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 모집·기망·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 모집·입금 정리</strong> — 구인 공고·채용 약속·선입금 요구·입금 내역 정리.</li>\n<li><strong>② 기망·선입금</strong> — 일을 줄 의사·능력 없이 선입금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 교육비·보증금·추가 입금 등 교부 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 행위자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 채용 무산과 달리, 일자리는 없이 채용·환급을 가장해 선입금만 받아 챙겼는지가 사기 판단의 분기점입니다. 채용 약속과 선입금 요구·추가 입금·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 모집·입금 자료 보존 (즉시)</strong> — 구인 공고·채용 약속·선입금 요구·입금·정산 대화 캡처 보존.</li>\n<li><strong>2단계 — 선입금·미이행 입증 (즉시)</strong> — 일자리 미제공·환급 거부·추가 입금 요구·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 동일 행위자 공동 신고·민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">구인 빙자 선입금 알바 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 모집·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>구인 공고·채용 확정·조건 안내 캡처 (모집 정황)</strong></li>\n<li><strong>교육비·보증금·인증비 선입금 요구 대화 (기망 정황)</strong></li>\n<li><strong>입금·추가 입금·소액 정산 내역 (피해 금액)</strong></li>\n<li><strong>일자리 미제공·환급 거부·잠적 대화 기록</strong></li>\n<li><strong>단체방 강퇴·계정 폐쇄 정황</strong></li>\n<li><strong>동일 행위자 다른 피해·모집 자료</strong></li>\n<li><strong>모집자·계좌·연락처 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채용 약속과 선입금 요구·추가 입금·환급 거부를 시간순으로 정리하면 일자리 없이 돈만 받았는지 기망 정황이 선명해집니다. 소액 정산으로 안심시킨 수법까지 짚으면 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·선입금</strong> — 일 줄 의사 없이 채용·환급을 가장했는지.</li>\n<li><strong>편취 범의</strong> — 단순 채용 무산인지 처음부터 편취였는지.</li>\n<li><strong>죄수</strong> — 반복 선입금이 포괄일죄인지.</li>\n<li><strong>편취액</strong> — 선입금·추가 입금 전부가 피해액인지.</li>\n<li><strong>행위자 특정</strong> — 모집자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (거래·환급 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제·지급정지 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 동일 피해자 반복 기망 사기의 포괄일죄',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 범죄사실의 동일성은 사회적 사실관계를 기본으로 규범적 요소도 고려해 판단하고, 별개 범죄로서 동일성이 인정되지 않으면 1죄나 상상적 경합관계로 볼 수 없어 면소를 선고할 수 없으며, 방어권에 실질적 불이익이 없는 한 공소장변경 없이 다른 범죄사실을 인정할 수 있다고 판시했습니다. 채용을 빙자해 선입금과 추가 입금을 반복 편취한 사안을 살펴볼 때에도 피해 단위와 죄책을 검토해볼 수 있습니다.',
        takeaway: '채용·환급 빙자 + 선입금 + 추가 입금·잠적 결합 시 선입금 편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '채용이 무산된 것뿐 아닌가요?',
        answer:
          '<strong>일 줄 의사 없이 채용·환급을 가장해 선입금만 받았는지가 핵심인 영역입니다.</strong> 채용 약속과 선입금 요구 대화를 확보하세요.',
      },
      {
        question: '처음에 소액은 정산해줬는데도 사기인가요?',
        answer:
          '<strong>소액 정산으로 안심시킨 뒤 큰 입금을 받는 수법도 다툼점인 영역입니다.</strong> 정산·추가 입금 요구의 흐름을 정리하세요.',
      },
      {
        question: '교육비·보증금이라며 받았는데 돌려받나요?',
        answer:
          '<strong>명목과 무관하게 교부한 금원 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '같은 수법에 당한 사람이 많아요.',
        answer:
          '<strong>같은 행위자 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 모집·입금 자료를 모으세요.',
      },
      {
        question: '모집자가 잠적했는데 돈을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '형사·민사 사기 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '계좌 지급정지 환급', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '학원비 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 5. fraud-romance-scam-remittance-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-scam-remittance-track',
    keyword: '로맨스스캠 송금 사기',
    questionKeyword: '데이팅앱·SNS·인스타에서 알게 된 상대가 외국 군인·의사·사업가라며 다정하게 연락을 주고받다 연인처럼 신뢰가 쌓였는데, ‘통관비·세금·치료비·투자금이 급하다, 곧 만나러 가겠다’며 여러 차례 돈을 보내달라고 해서 송금했어요. 그런데 만남은 계속 미뤄지고 요구만 늘다 연락이 끊겼어요. 처음부터 연인 행세로 신뢰를 쌓아 돈을 뜯어낼 계획이었던 것 같은데, 로맨스스캠으로 신고하고 송금한 돈을 돌려받으려면 어떤 순서로 해야 하나요?',
    ctaKeyword: '로맨스스캠 송금·편취 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '로맨스스캠 송금 사기 — 5단계 환급·신고 점검 | 로앤가이드',
      description:
        '온라인 연인 행세로 신뢰를 쌓아 통관비·투자금을 반복 송금받고 잠적당했다면, 형법 제347조 사기의 로맨스스캠 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「데이팅앱·SNS·인스타·오픈채팅에서 알게 된 상대가 ‘해외 파병 군인, 의사, 사업가, 엔지니어’라며 다정한 말과 사진으로 매일 연락을 주고받아 연인처럼 신뢰가 깊어진 분의 상황입니다. 그러던 중 ‘선물·자금이 세관에 묶였다, 통관비·세금·수수료를 내야 한다, 갑자기 아파 치료비가 급하다, 좋은 투자처가 있으니 같이 넣자, 곧 한국으로 만나러 가겠다’며 안타까운 사정과 곧 만날 약속을 앞세워 여러 차례 돈을 보내달라고 해, 사랑하는 마음과 미안함에 적지 않은 돈을 송금한 분의 상황입니다. 그런데 만남은 핑계로 계속 미뤄지고 요구만 늘어나다, 더 보내지 않자 결국 연락이 끊겨, 처음부터 연인 행세로 신뢰를 쌓아 돈을 뜯어낼 계획이었던 건 아닌지 의심되고 막막하실 거예요. 마음까지 다쳐 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 거짓 신분·사정으로 연인 관계를 가장하고 갚거나 만날 의사 없이 돈을 받았다면 기망행위로 평가될 여지가 있고, 송금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방의 착오를 알면서 고지하지 않은 경우를 말하고, 거래의 내용이나 거래관행 등 거래실정에 비추어 고지의무의 근거를 검사가 주장·증명해야 한다고 본 사례 흐름이 있는 영역으로, 기망의 적극·소극 양태를 정황으로 가려 다툴 여지가 있습니다. 거짓 신분·연인 가장 + 반복 송금 요구 + 잠적 결합은 ‘로맨스스캠 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·송금 정리 ② 기망·신분 위장 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·국제공조 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 로맨스스캠 송금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·기망·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·송금 정리</strong> — 알게 된 경위·연락 내역·송금 요구·송금 내역 정리.</li>\n<li><strong>② 기망·신분 위장</strong> — 거짓 신분·사정으로 연인을 가장해 돈을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 통관비·세금·치료비·투자 등 교부 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·국제공조</strong> — 계좌 지급정지·해외 연계 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 연애 실패와 달리, 거짓 신분·사정으로 연인을 가장해 만날 의사 없이 반복 송금을 받아 잠적했는지가 사기 판단의 분기점입니다. 연락 내역과 송금·요구 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관계·송금 자료 보존 (즉시)</strong> — 프로필·채팅·송금 요구·송금·계좌 내역을 즉시 보존.</li>\n<li><strong>2단계 — 추가 송금 중단·차단 (즉시)</strong> — 더 이상 송금하지 않고 상대 요구·계좌 정보를 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌·전달책 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰·금감원 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 금융감독원 1332 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·국제공조 (2개월 내)</strong> — 채권소멸·환급 절차와 해외 연계 수사 협조를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">로맨스스캠 송금 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>상대 프로필·신분 주장·사진 (신분 위장 정황)</strong></li>\n<li><strong>채팅·통화·연락 내역 (관계 형성 정황)</strong></li>\n<li><strong>송금 요구·사정 설명·만남 약속 대화 (기망 정황)</strong></li>\n<li><strong>송금·이체·환전 내역 (피해 금액)</strong></li>\n<li><strong>송금 계좌·전달책·중계 계좌 정보 (자금 흐름)</strong></li>\n<li><strong>잠적·차단·연락 두절 정황</strong></li>\n<li><strong>지급정지·신고 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신분·사정 설명과 만남 약속, 반복 송금 요구를 시간순으로 정리하면 연인 가장으로 돈을 뜯었는지 기망 정황이 선명해집니다. 송금 계좌·전달책 정보는 지급정지와 자금 추적의 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·신분 위장</strong> — 거짓 신분·사정으로 연인을 가장했는지.</li>\n<li><strong>편취 의사</strong> — 만날·갚을 의사 없이 송금을 받았는지.</li>\n<li><strong>고지의무</strong> — 거래실정상 고지의무가 인정되는지.</li>\n<li><strong>편취액</strong> — 반복 송금 전부가 피해액인지.</li>\n<li><strong>자금 추적</strong> — 계좌·전달책으로 자금 흐름을 추적할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제·지급정지 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위에 의한 기망과 고지의무 증명',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄에서 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서도 그 사실을 고지하지 않는 것을 말하고, 그 고지의무의 근거가 되는 거래의 내용·거래관행 등 거래실정에 관한 사실은 검사가 주장·증명해야 한다고 판시했습니다. 거짓 신분·사정으로 연인을 가장해 반복 송금을 받은 사안을 살펴볼 때에도 기망의 양태와 정황을 종합한 편취를 검토해볼 수 있습니다.',
        takeaway: '거짓 신분·연인 가장 + 반복 송금 요구 + 잠적 결합 시 로맨스스캠 편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 좋아서 보낸 건데 사기가 되나요?',
        answer:
          '<strong>거짓 신분·사정으로 연인을 가장해 만날 의사 없이 돈을 받았는지가 핵심인 영역입니다.</strong> 연락·송금 요구 내역을 확보하세요.',
      },
      {
        question: '추가로 보내달라는데 어떻게 하나요?',
        answer:
          '<strong>추가 송금을 멈추는 것이 우선인 영역입니다.</strong> 요구 대화와 계좌 정보를 남기고 지급정지·신고를 검토하세요.',
      },
      {
        question: '상대가 외국에 있다는데 추적이 되나요?',
        answer:
          '<strong>국내 전달책·중계 계좌 추적과 국제공조가 단서가 되는 영역입니다.</strong> 송금 계좌·자금 흐름을 정리하세요.',
      },
      {
        question: '여러 번 보낸 돈 전부가 피해인가요?',
        answer:
          '<strong>명목과 무관하게 반복 송금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '상대가 잠적했는데 돈을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·환급 절차로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '암호화폐 투자 사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
      { label: '계좌 지급정지 환급', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '형사·민사 사기 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
    ],
  },

  // ─── 6. fraud-loan-default-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-default-falsely-accused-defense',
    keyword: '차용금 변제지체 사기 무고',
    questionKeyword: '지인·가족·거래처에서 돈을 빌릴 때는 갚을 생각으로 차용증을 쓰고 일부는 갚았는데, 사업 부진과 자금 사정으로 변제가 늦어지자 채권자가 저를 ‘처음부터 갚을 생각이 없었다’며 사기로 고소했어요. 저는 빌릴 당시 충분히 갚을 의사와 능력이 있었고 단지 형편이 나빠져 변제가 늦어진 것뿐인데, 변제지체를 사기로 모는 이 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '차용금 변제지체 사기 무고 변제의사·편취 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '차용금 변제지체 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '돈을 갚을 생각으로 빌렸는데 변제가 늦었다는 이유로 사기 고소를 당했다면, 형법 제347조 차용금 사기의 변제의사·편취 고의 판단을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·가족·친구·거래처에서 사업 운영비·생활비·급한 자금을 빌리면서 갚을 생각으로 차용증·문자 약정을 남기고 이자나 원금 일부도 갚아오던 중, 사업 부진·경기 악화·예상 못 한 자금 경색으로 변제가 늦어지자 채권자가 ‘처음부터 갚을 생각이 없었다, 속아서 빌려줬다’며 사기로 고소·진정해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 빌릴 당시 갚을 의사와 능력이 충분했고 일부 상환과 상환 노력까지 했는데, 단지 사정이 나빠져 변제가 늦어진 것뿐인데도 변제지체가 곧 사기처럼 취급돼 억울하고 막막하실 거예요. 빌려준 사람과의 관계까지 틀어져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 규정이고, 차용금 사기는 빌릴 당시를 기준으로 변제 의사·능력 없이 속였는지가 핵심인 영역입니다. 혐의를 받고 있다면, 변제가 늦어진 사정만으로 곧바로 편취 고의가 인정되는 것이 아니라 차용 당시의 의사·능력과 그 후의 사정을 가려 다투는 것이 중요합니다. 판례는 타인으로부터 돈을 차용하면서 충분한 담보를 제공하였다면 특별한 사정이 없는 한 변제 의사·능력이 없었다고 볼 수 없고, 편취의 범의는 차용 당시를 기준으로 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단해야 하며, 공모와 범의를 부인하는 경우 정황사실만으로 함부로 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 사실과 다르게 신고됐다면 차용 경위·담보·상환 노력을 정리해 다툴 수 있는 영역입니다. 변제지체 + 차용 당시 의사·능력 + 사정 변경 결합은 ‘변제의사·편취 고의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 차용 경위 정리 ② 변제의사·능력 ③ 사정 변경 ④ 상환 노력·담보 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 차용금 변제지체 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용 경위·변제의사·사정 변경·상환 노력·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용 경위 정리</strong> — 차용 일시·용도·약정·차용증·당시 자금 상황 정리.</li>\n<li><strong>② 변제의사·능력</strong> — 차용 당시 갚을 의사·능력이 있었는지 검토.</li>\n<li><strong>③ 사정 변경</strong> — 변제가 늦어진 사업 부진·자금 경색 등 사정을 정리.</li>\n<li><strong>④ 상환 노력·담보</strong> — 일부 상환·이자 지급·담보 제공 등 노력을 입증.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변제가 늦어졌다는 사실만으로 곧바로 사기가 되는 것이 아니라, 차용 당시 변제 의사·능력이 있었는지가 분기점입니다. 차용 경위·담보·상환 노력으로 편취 고의를 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용 경위 정리 (즉시)</strong> — 차용 일시·용도·약정·차용증·당시 자금·사업 상황 정리.</li>\n<li><strong>2단계 — 변제의사·능력 입증 (1주)</strong> — 차용 당시 소득·재산·거래 흐름으로 변제 의사·능력을 정리.</li>\n<li><strong>3단계 — 사정 변경·상환 노력 정리 (2주)</strong> — 사업 부진·자금 경색 자료와 일부 상환·이자·담보 자료를 확보.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 합의·변제 계획 등 절차 대응을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">차용금 변제지체 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차용 경위·변제의사·상환 노력 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·약정·송금·용도 자료 (차용 경위)</strong></li>\n<li><strong>차용 당시 소득·재산·사업 자료 (변제 능력)</strong></li>\n<li><strong>일부 상환·이자 지급·연락 내역 (상환 노력)</strong></li>\n<li><strong>담보·보증·약속 자료 (변제 의사)</strong></li>\n<li><strong>사업 부진·자금 경색 입증 자료 (사정 변경)</strong></li>\n<li><strong>채권자와의 변제 협의·독촉 대화 기록</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘차용 당시 변제 의사·능력이 있었는지’와 ‘변제가 늦어진 사정’입니다. 담보·일부 상환·상환 노력 자료와 사정 변경 자료를 정돈하면 단순 변제지체와 편취 고의를 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>변제의사·능력</strong> — 차용 당시 갚을 의사·능력이 있었는지.</li>\n<li><strong>편취 고의</strong> — 변제지체가 곧 편취 고의인지.</li>\n<li><strong>담보 제공</strong> — 충분한 담보를 제공했는지.</li>\n<li><strong>사정 변경</strong> — 차용 후 사정 악화로 변제가 늦었는지.</li>\n<li><strong>정황만의 단정</strong> — 정황사실만으로 범의를 단정할 수 없는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용금 사기의 변제의사·능력과 편취 범의',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 타인으로부터 돈을 차용하면서 충분한 담보를 제공하였다면 특별한 사정이 없는 한 변제 의사·능력이 없었다고 볼 수 없고, 사기죄의 부작위에 의한 기망은 신의칙상 고지의무가 인정되는 경우에 한하며, 공모와 범의를 부인하는 경우 학력·경력·근무장소 등 정황사실만으로 의사의 결합을 단정할 수 없다고 판시했습니다. 변제지체를 사기로 다투는 사안에서 차용 당시의 변제의사·능력과 편취 범의를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '변제지체 + 차용 당시 의사·능력 + 사정 변경 결합 시 변제의사·편취 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '변제가 늦은 것뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>변제지체만으로는 부족하고 차용 당시 변제 의사·능력이 핵심인 영역입니다.</strong> 차용 경위·당시 자금 자료를 정리하세요.',
      },
      {
        question: '일부는 갚았는데도 사기인가요?',
        answer:
          '<strong>일부 상환·이자 지급은 편취 고의를 부정하는 정황인 영역입니다.</strong> 상환·연락 내역을 확보하세요.',
      },
      {
        question: '담보를 제공했는데도 불리한가요?',
        answer:
          '<strong>충분한 담보 제공은 변제 의사·능력을 뒷받침하는 영역입니다.</strong> 담보·보증 자료를 정돈하세요.',
      },
      {
        question: '사업이 안 돼 못 갚은 건 어떻게 보나요?',
        answer:
          '<strong>차용 후 사정 변경은 차용 당시 편취 고의와 구분되는 영역입니다.</strong> 사업 부진·자금 경색 자료를 시간순으로 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>차용 당시 사정에 관한 진술의 일관성이 중요한 영역입니다.</strong> 경위·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '형사·민사 사기 비교', href: '/guide/fraud/criminal-vs-civil-fraud-lawsuit' },
      { label: '암호화폐 투자 사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
      { label: '계좌 지급정지 환급', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '학원비 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
    ],
  },

  // ─── 7. sex-crime-club-dancefloor-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-dancefloor-track',
    keyword: '클럽 댄스플로어 강제추행',
    questionKeyword: '클럽·라운지·페스티벌 댄스플로어에서 춤을 추다가 옆·뒤에 있던 사람이 혼잡한 틈을 이용해 제 몸을 만지거나 끌어안고 밀착해 큰 수치심을 느꼈어요. 사람이 빽빽해 우연히 닿은 건지 일부러 만진 건지 헷갈렸고 어둡고 시끄러워 그 자리에서 따지지도 못했는데, 이런 클럽 댄스플로어에서의 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '클럽 댄스플로어 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '클럽 댄스플로어 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '클럽 댄스플로어에서 혼잡을 틈타 몸을 만지거나 밀착해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성 일탈을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·라운지·페스티벌·EDM 파티의 붐비는 댄스플로어에서 음악에 맞춰 춤을 추던 중, 옆이나 뒤에 있던 사람이 사람이 빽빽한 혼잡한 틈을 이용해 본인의 허리·엉덩이·가슴·허벅지에 손을 대거나 뒤에서 끌어안고 몸을 밀착해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 사람이 워낙 많아 ‘부딪혀 우연히 닿은 건지, 일부러 만지는 건지’ 헷갈리고, 어둡고 시끄러운 데다 일행과 떨어져 있다는 위축감에 그 자리에서 제대로 항의하거나 붙잡지 못한 채 자리를 피해, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 즐기러 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 다중이 밀집한 장소에서의 추행은 성폭력처벌법으로도 규율되는 영역입니다. 판례는 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 판단하고, 공동체 내 의례적·사회적으로 상당한 신체접촉은 추행으로 보지 않으나, 그 상당한 범주를 다소 벗어나 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르면 강제추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 혼잡 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합은 ‘추행 해당성·상당성 일탈’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 댄스플로어 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 업소·일시·위치·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 혼잡상 불가피한 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 플로어·입구·통로 CCTV, 입장 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·입장 기록·일행·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사람이 붐벼도 의례적·상당한 범위를 넘어 의사에 반한 만짐·밀착이 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 업소 CCTV와 입장 기록을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 업소·일시·플로어 위치·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV·이용 기록 확보 (즉시)</strong> — 플로어·입구·통로 CCTV, 입장·결제 기록 보존을 요청.</li>\n<li><strong>3단계 — 업소·직원 협조 (직후)</strong> — 클럽·보안요원에게 영상·이용 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 댄스플로어 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·일시·플로어 위치·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·동선·이탈 정황 기록</strong></li>\n<li><strong>플로어·입구·통로 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장·결제·예약 기록 (특정)</strong></li>\n<li><strong>직후 호소·일행·지인 연락 기록</strong></li>\n<li><strong>다른 손님·목격자·보안요원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업소 CCTV는 보존 기간이 짧으므로 보안요원·업주에게 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 입장 기록을 남기면 우연한 부딪힘과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>상당성 일탈</strong> — 혼잡상 불가피한 접촉의 상당 범위를 벗어났는지.</li>\n<li><strong>우연·고의</strong> — 부딪혀 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·입장 기록·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당성 일탈 판단',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 그 해당 여부는 관계·경위·행위태양·주위 상황 등을 종합해 판단하고, 공동체 내 의례적·사회적으로 상당한 신체접촉이 그 상당한 범주를 다소 벗어나 부적절한 성적 언동으로 받아들여질 여지가 있더라도 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르러야 강제추행에 해당한다고 판시했습니다. 붐비는 플로어에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성·상당성 일탈 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합 시 추행 해당성·상당성 일탈 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 붐벼서 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>혼잡상 불가피한 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '어둡고 시끄러워 그 자리에서 항의를 못 했어요.',
        answer:
          '<strong>혼잡·소음 속 위축 상황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '뒤에서 끌어안고 밀착한 것도 추행인가요?',
        answer:
          '<strong>의례적·상당한 범위를 넘은 의사에 반한 밀착·접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 밀착 양상과 반복을 기록하세요.',
      },
      {
        question: '많은 사람 중에 가해자를 특정할 수 있나요?',
        answer:
          '<strong>플로어·입구 CCTV와 입장 기록으로 특정할 여지가 있는 영역입니다.</strong> 시간대·위치·인상착의를 즉시 기록하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '강제추행 증거·고소', href: '/guide/sex-crime/forced-groping-evidence-lawsuit' },
      { label: '강제추행 성립 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '허위 성범죄 신고 대응', href: '/guide/sex-crime/false-sexual-assault-report-response' },
      { label: '추행 혐의 대응', href: '/guide/sex-crime/groping-accused-response' },
    ],
  },

  // ─── 8. sex-crime-massage-shop-owner-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-owner-track',
    keyword: '마사지샵 업주 강제추행',
    questionKeyword: '마사지샵·피부관리실·체형관리·스포츠마사지를 받으러 갔는데 업주·관리사가 ‘관리에 필요하다, 자세를 잡는다’는 명목으로 시술과 무관한 가슴·엉덩이·은밀한 부위를 만지거나 필요 이상으로 밀착해 큰 수치심을 느꼈어요. 시술이라는 명목과 옷을 갖춰 입지 못한 상황 때문에 그 자리에서 항의도 못 했는데, 이런 시술 빙자 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '마사지샵 업주 강제추행 시술 빙자 추행 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 업주 강제추행 — 5단계 시술 빙자 추행 점검 | 로앤가이드',
      description:
        '마사지·관리 중 업주가 시술을 빙자해 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 시술 빙자 추행·위력을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「마사지샵·피부관리실·체형관리·스포츠마사지·1인 관리실에 관리를 받으러 갔다가, 업주·관리사가 ‘관리에 꼭 필요하다, 림프·근육을 풀어야 한다, 자세를 잡아준다’는 명목으로 시술과 무관한 가슴·엉덩이·허벅지 안쪽·은밀한 부위를 손으로 만지거나, 보조한다며 몸을 필요 이상으로 밀착해 와 큰 수치심과 불쾌감을 느낀 분의 상황입니다. 밀폐된 1인실에서 단둘이 있고, 관리를 받느라 옷을 제대로 갖춰 입지 못한 상태라는 위축감, ‘원래 이런 관리인가’ 하는 혼란 때문에 그 자리에서 제대로 거부하거나 항의하지 못한 채 관리를 마치고 나와, 정상적인 시술이었는지 추행이었는지 헷갈려 막막하셨을 거예요. 믿고 맡긴 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 시술·관리를 빙자한 접촉이라도 시술상 필요한 상당 범위를 넘으면 추행으로 평가될 수 있는 영역입니다. 판례는 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 판단하고, 위력을 이용하거나 의사에 반하는 유형력 행사로 성적 자유를 침해하는 행위는 추행에 해당할 수 있다고 본 사례 흐름이 있는 영역입니다. 시술 빙자 + 의사에 반한 접촉 + 밀폐·우월 관계 결합은 ‘시술 빙자 추행·위력’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 업주 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 업소·일시·관리 명목·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 시술상 필요한 상당 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 예약·결제·입출입 CCTV·시술 동의 자료 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 예약·결제·CCTV·관리사 배정으로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시술·관리를 빙자한 접촉이라도 시술상 필요한 상당 범위를 넘어 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 예약·결제·입출입 기록과 직후 호소를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 업소·일시·관리 명목·접촉 부위·방식·반복·관리사 정리.</li>\n<li><strong>2단계 — 예약·CCTV 확보 (즉시)</strong> — 예약·결제 기록과 입구·복도 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 직후 호소·진술 정리 (직후)</strong> — 직후 지인·동행에게 알린 내용과 일관된 진술을 정리.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 업주 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·일시·관리 명목·접촉 정황 메모</strong></li>\n<li><strong>예약·결제·문자·앱 예약 기록 (특정)</strong></li>\n<li><strong>입구·복도·대기실 CCTV 보존 요청 자료</strong></li>\n<li><strong>관리사·업주 배정·직책 정보 (가해자 특정)</strong></li>\n<li><strong>직후 호소·동행·지인 연락 기록</strong></li>\n<li><strong>동일 업소 다른 피해·후기·신고 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시술실 내부는 CCTV가 없을 수 있으므로 예약·결제·입출입 기록과 직후 호소를 곧바로 정리하는 것이 중요합니다. 접촉 부위·방식과 시술상 필요 여부를 짚으면 정상 시술과 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>시술 필요성</strong> — 시술상 필요한 상당 범위를 벗어났는지.</li>\n<li><strong>위력·관계</strong> — 밀폐·우월한 상황을 이용했는지.</li>\n<li><strong>가해자 특정</strong> — 예약·CCTV·배정으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 기록·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 판단 기준과 위력·유형력',
        summary:
          '대법원 2015도2390(대법원, 2018.06.28 선고) 영역에서 법원은 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위·태양, 주위 상황 등을 종합해 판단하고, 위력을 행사하거나 의사에 반하는 유형력으로 성적 자유를 침해하는 행위는 가혹행위·추행 등으로 평가될 수 있다고 보면서, 성폭력처벌법상 등록대상 성범죄로 유죄가 확정되면 신상정보 제출의무가 당연히 발생한다고 판시했습니다. 시술을 빙자해 신체를 만진 사안을 살펴볼 때에도 이러한 추행 해당성·위력 기준을 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 의사에 반한 접촉 + 밀폐·우월 관계 결합 시 시술 빙자 추행·위력 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '관리에 필요한 접촉이라고 하면 어쩌죠?',
        answer:
          '<strong>시술상 필요한 상당 범위를 넘은 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 시술 무관성을 구체적으로 남기세요.',
      },
      {
        question: '옷을 갖춰 입지 못해 항의를 못 했어요.',
        answer:
          '<strong>밀폐·우월 상황의 위축은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '시술실에 CCTV가 없어 증거가 없어요.',
        answer:
          '<strong>예약·결제·입출입 기록과 직후 호소로 보강할 수 있는 영역입니다.</strong> 예약·동선·일관 진술을 확보하세요.',
      },
      {
        question: '같은 업소에 비슷한 피해가 또 있어요.',
        answer:
          '<strong>동일 업소 유사 피해는 정황 보강이 되는 영역입니다.</strong> 후기·신고·진술 자료를 모으세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '강제추행 증거·고소', href: '/guide/sex-crime/forced-groping-evidence-lawsuit' },
      { label: '강제추행 성립 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '허위 성범죄 신고 대응', href: '/guide/sex-crime/false-sexual-assault-report-response' },
      { label: '추행 혐의 대응', href: '/guide/sex-crime/groping-accused-response' },
    ],
  },

  // ─── 9. sex-crime-elevator-stranger-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-elevator-stranger-track',
    keyword: '엘리베이터 낯선 사람 강제추행',
    questionKeyword: '아파트·상가·지하철 엘리베이터에 낯선 사람과 단둘이 타게 됐는데, 그 사람이 갑자기 다가와 제 몸을 만지거나 막아서고 밀착해 큰 공포와 수치심을 느꼈어요. 좁고 밀폐된 공간에 갇혀 그 자리에서 제대로 저항도 못 했고 순식간에 벌어진 일이라 증거도 없는데, 이런 엘리베이터 안 낯선 사람의 기습추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '엘리베이터 낯선 사람 강제추행 추행 고의 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 낯선 사람 강제추행 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '엘리베이터에서 낯선 사람이 갑자기 몸을 만지거나 막아서 공포와 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 고의·범의를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「아파트·오피스텔·상가·지하철의 좁은 엘리베이터에 낯선 사람과 단둘이 타게 됐는데, 그 사람이 갑자기 가까이 다가와 본인의 허리·엉덩이·가슴 등을 만지거나, 내리려는 길을 막아서고 몸을 밀착해 와 큰 공포와 수치심을 느낀 분의 상황입니다. 사방이 막힌 좁은 공간에 갇혀 있다는 압박감, 순식간에 벌어진 일이라는 당혹감 때문에 소리치거나 제대로 저항하지 못한 채 문이 열리자마자 피해, ‘착각이면 어쩌지, 증거도 없는데 신고가 될까’ 싶어 막막하셨을 거예요. 도망갈 곳 없는 밀폐 공간에서 겪은 일이라 더 답답하고 무서우셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행죄가 성립하려면 문제가 되는 행위마다 폭행 또는 협박 외에 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없으나, 행위태양·경위·관계를 종합해 의사에 반한 유형력 행사가 성적 자유를 침해하는 추행에 이르렀는지를 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 밀폐 접촉 + 의사에 반한 접촉 + 추행 범의 결합은 ‘추행 고의·범의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 낯선 사람 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 건물·일시·층·접촉 부위·방식·막아섬·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 접촉이 추행행위와 그 범의를 갖췄는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 엘리베이터·로비·복도 CCTV 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·출입 기록·동선으로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 밀폐된 좁은 공간이라도 의사에 반한 갑작스러운 접촉이 추행행위와 그 범의를 갖추면 추행으로 평가될 수 있다는 점이 분기점입니다. 엘리베이터 CCTV는 대부분 설치돼 있으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 건물·일시·층·접촉 부위·방식·막아섬·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV 보존 요청 (즉시)</strong> — 관리사무소·경비실에 엘리베이터·로비·복도 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 출입·동선 확보 (직후)</strong> — 가해자의 출입·하차·이동 동선과 시간대를 확보.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 낯선 사람 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>건물·일시·층·접촉 정황 메모</strong></li>\n<li><strong>엘리베이터·로비·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>관리사무소·경비실 협조·기록 요청 자료</strong></li>\n<li><strong>가해자 인상착의·출입·동선 기록 (특정)</strong></li>\n<li><strong>직후 호소·112 신고·지인 연락 기록</strong></li>\n<li><strong>인근 상가·출입 통제 기록·목격자 진술</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 엘리베이터 CCTV는 보존 기간이 짧을 수 있으므로 관리사무소·경비실에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·막아섬과 직후 호소를 기록하면 우연과 추행 범의를 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>추행 범의</strong> — 추행행위와 그 고의가 인정되는지.</li>\n<li><strong>우연·고의</strong> — 흔들려 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·출입 기록으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행행위와 추행 범의의 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 것으로 그 해당 여부는 관계·경위·행위태양·주위 상황을 종합해 신중히 판단하고, 강제추행죄가 성립하려면 문제가 되는 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 하며, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 판시했습니다. 밀폐 공간에서의 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 추행행위·범의 증명 기준을 검토해볼 수 있습니다.',
        takeaway: '밀폐 접촉 + 의사에 반한 접촉 + 추행 범의 결합 시 추행 고의·범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '흔들려서 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>의사에 반한 접촉이 추행행위와 그 범의를 갖췄는지가 핵심인 영역입니다.</strong> 접촉 부위·방식·막아섬을 구체적으로 남기세요.',
      },
      {
        question: '겁이 나서 저항을 못 했는데 불리한가요?',
        answer:
          '<strong>밀폐 공간의 공포·위축은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '순식간에 일어나 증거가 없어요.',
        answer:
          '<strong>엘리베이터·로비 CCTV로 보강할 수 있는 영역입니다.</strong> 관리사무소·경비실에 신속히 보존을 요청하세요.',
      },
      {
        question: '낯선 사람인데 특정이 되나요?',
        answer:
          '<strong>CCTV·출입 기록·동선으로 특정할 여지가 있는 영역입니다.</strong> 시간대·층·인상착의를 즉시 기록하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '강제추행 증거·고소', href: '/guide/sex-crime/forced-groping-evidence-lawsuit' },
      { label: '강제추행 성립 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '허위 성범죄 신고 대응', href: '/guide/sex-crime/false-sexual-assault-report-response' },
      { label: '추행 혐의 대응', href: '/guide/sex-crime/groping-accused-response' },
    ],
  },

  // ─── 10. sex-crime-dating-app-meetup-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-dating-app-meetup-falsely-accused-defense',
    keyword: '데이팅앱 만남 강제추행 무고',
    questionKeyword: '데이팅앱·소개팅앱에서 만난 상대와 카페·술집·이동 과정에서 서로 호감 속에 자연스러운 스킨십·접촉이 오갔는데, 며칠 뒤 상대가 저를 강제추행으로 고소·신고했어요. 저는 추행할 의도가 전혀 없었고 상대도 그 자리에서는 거부 의사를 보이지 않았다고 기억하는데, 직접 증거 없이 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '데이팅앱 만남 강제추행 무고 추행 고의·무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '데이팅앱 강제추행 무고 방어 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '데이팅앱에서 만난 상대와의 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 고의와 무죄추정·진술 신빙성 판단을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「데이팅앱·소개팅앱에서 매칭돼 만난 상대와 카페·식당·술집에서 대화를 나누고, 이동·귀가·다음 장소로 가는 과정에서 서로 호감을 보이며 손을 잡거나 어깨에 손을 얹는 등 자연스러운 스킨십·접촉이 오갔는데, 며칠 뒤 그 상대가 ‘강제로 추행을 당했다’며 고소·신고해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고 상대도 그 자리에서는 거부하거나 불쾌함을 드러내지 않았다고 기억하는데, 둘만 있던 상황이라 직접 증거가 적고 수사가 상대 진술 위주로 흘러 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 한 번의 만남이 형사 사건이 되고 신상·일상까지 흔들려 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉에 추행의 고의가 있었는지, 그리고 피해 진술의 신빙성이 합리적 의심 없이 인정되는지가 핵심 쟁점입니다. 판례는 추행의 고의를 부인하는 경우 고의와 상당한 관련성 있는 간접사실을 종합해 판단하되 고의로 추행했다고 볼 징표와 어긋나는 의문점이 해소되어야 하고, 형사피고인은 유죄가 확정될 때까지 무죄로 추정되며 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 호감 만남 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 고의·무죄추정’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 고의 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 데이팅앱 만남 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 고의·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 매칭·만남·이동·접촉 경위·대화 흐름 정리.</li>\n<li><strong>② 추행 고의</strong> — 문제 된 접촉에 추행의 고의가 있었는지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술의 일관성·구체성·객관 사실 부합 여부 검토.</li>\n<li><strong>④ 정황·증거</strong> — 앱 대화·메시지·CCTV·결제·동선으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 원칙 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉에 추행의 고의가 있었는지와 피해 진술이 합리적 의심 없이 신빙성을 갖는지가 분기점입니다. 앱 대화·동선·정황으로 고의와 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·대화 정리 (즉시)</strong> — 매칭·만남·이동·접촉 경위와 앱 대화 흐름을 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 앱·메신저 대화, 카페·이동 CCTV, 결제·동선 기록을 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 상대 진술과 객관 정황·대화의 불부합·모순을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">데이팅앱 만남 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 고의·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>매칭·만남·이동·접촉 경위 메모</strong></li>\n<li><strong>앱·메신저 대화·이후 메시지·SNS 기록</strong></li>\n<li><strong>카페·식당·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·예약·콜택시·일정 객관 자료 (정황 특정)</strong></li>\n<li><strong>거부 의사 부재·자연스러운 정황 자료</strong></li>\n<li><strong>상대 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉에 추행의 고의가 있었는지’와 ‘피해 진술이 합리적 의심 없이 신빙성을 갖는지’입니다. 앱 대화·동선·CCTV 같은 객관 정황을 정돈해 고의 유무와 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 문제 된 접촉에 추행의 고의가 있었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심을 배제할 정도의 증명이 있는지.</li>\n<li><strong>거부 의사</strong> — 그 자리에서 거부·불쾌 의사가 있었는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의의 증명과 무죄추정 원칙',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 추행의 고의를 부인하는 경우 고의와 상당한 관련성 있는 간접사실을 종합해 판단하되 고의로 추행했다고 볼 징표와 어긋나는 사실의 의문점이 해소되어야 하고, 형사피고인은 유죄가 확정될 때까지 무죄로 추정되며 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하므로 조금이라도 합리적 의심이 있으면 유죄로 판단할 수 없다고 판시했습니다. 호감 속 만남의 접촉을 추행으로 다투는 사안에서 추행 고의와 무죄추정·증명 정도를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '호감 만남 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 고의·무죄추정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '서로 호감 속 접촉이었는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 고의와 진술 신빙성이 핵심인 영역입니다.</strong> 만남·이동·접촉 경위와 앱 대화를 정리하세요.',
      },
      {
        question: '상대 진술만 있는데도 처벌되나요?',
        answer:
          '<strong>진술 신빙성을 종합해 합리적 의심 없는 증명에 이르러야 하는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 정리하세요.',
      },
      {
        question: '둘만 있어 직접 증거가 없어요.',
        answer:
          '<strong>앱 대화·이동 CCTV·결제·동선 같은 객관 정황으로 보강할 수 있는 영역입니다.</strong> 만남 전후 기록을 확보하세요.',
      },
      {
        question: '그 자리에서는 거부를 안 했다는데 의미가 있나요?',
        answer:
          '<strong>거부 의사 부재 정황은 추행 고의 다툼의 한 요소인 영역입니다.</strong> 대화 흐름과 직후 연락을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 경위·정황 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 무고 방어 포인트, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '허위 성범죄 신고 대응', href: '/guide/sex-crime/false-sexual-assault-report-response' },
      { label: '추행 혐의 대응', href: '/guide/sex-crime/groping-accused-response' },
      { label: '혐의 어디부터 시작', href: '/guide/sex-crime/accused-where-to-start' },
      { label: '강제추행 성립 기준', href: '/guide/sex-crime/forced-molestation-standard' },
    ],
  },
];
