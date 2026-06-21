import { SpokePage } from '../spoke-pages';

// batch104 fraud(6) + sex-crime(4) — 10개 (2026-06-21)
//
// 고유 존재 이유:
// 1. fraud-used-phone-fake-shipping-invoice-track — 일반 중고거래 분쟁과 분기. '중고폰 직거래 허위 송장번호 입금 후 미발송' 가짜 운송장 편취 판단형 트랙(victim).
// 2. fraud-concert-ticket-resale-fake-link-track — 일반 티켓 양도 분쟁과 분기. '콘서트 티켓 가짜 양도 링크 결제 유도' 위조 결제링크 편취 절차형 트랙(victim).
// 3. fraud-gym-membership-prepaid-sudden-closure-track — 일반 폐업 환불 분쟁과 분기. '헬스장 회원권 선결제 후 폐업·잠적' 고지의무 위반 묵비 편취 판단형 트랙(victim).
// 4. fraud-romance-pretext-coin-investment-track — 일반 투자 분쟁과 분기. '호감·연애 빙자 코인 투자 유도' 로맨스스캠 투자 편취 판단형 트랙(victim).
// 5. fraud-remote-side-job-task-advance-deposit-track — 일반 부업 사기와 분기. '재택 부업 업무비 선입금 유도' 미수행 업무비 편취 절차형 트랙(victim).
// 6. fraud-joint-business-profit-distribution-pretext-falsely-accused-defense — 일반 동업 분쟁과 분기. '동업 수익배분 약정 사기로 고소당함' 고지의무·편취 범의 방어 판단형 트랙(accused).
// 7. sex-crime-swimming-pool-locker-room-touch-report-track — 일반 추행류와 분기. '수영장 탈의실에서 추행을 당함' 추행 해당성·상당 범주 판단형 트랙(victim).
// 8. sex-crime-late-night-bus-passenger-touch-report-track — 일반 추행류와 분기. '심야버스 승객 추행을 당함' 추행 해당성·신빙성 판단형 트랙(victim).
// 9. sex-crime-hospital-treatment-pretext-touch-report-track — 일반 추행류와 분기. '병원 진료를 빙자한 추행을 당함' 진료 가장 기습추행 절차형 트랙(victim).
// 10. sex-crime-club-dance-floor-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '클럽 무도장 신체접촉이 추행으로 고소' 추행 고의·진술 신빙성·무죄추정 방어 판단형 트랙(accused).

export const spokesBatch104FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-phone-fake-shipping-invoice-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-phone-fake-shipping-invoice-track',
    keyword: '중고폰 거래 허위 송장번호 입금 사기',
    questionKeyword: '중고 거래 앱·중고폰 카페·직거래 채팅방에서 ‘급하게 정리하느라 상태 좋은 중고폰을 시세보다 싸게 넘긴다, 직거래는 어렵고 택배로 안전하게 보내준다’는 말을 믿고 휴대폰 대금을 먼저 입금했는데, 입금 뒤에 ‘방금 택배 부쳤다, 송장 번호 보내줄게’라며 운송장 번호를 알려줬지만 조회해 보니 다른 물건이거나 아예 등록되지 않은 가짜 번호였고, 결국 폰도 안 오고 연락이 끊겼어요. 알고 보니 가짜 송장번호로 발송한 것처럼 속여 여러 명에게 대금을 받았던 것 같은데, 이런 중고폰 허위 송장 미발송을 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고폰 허위 송장번호 미발송 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고폰 거래 허위 송장번호 입금 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '중고폰 대금을 입금했는데 가짜 송장번호만 받고 물건이 안 오고 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 앱·중고폰 거래 카페·직거래 채팅방에서 ‘이사·기기 변경으로 거의 새것 같은 중고폰을 시세보다 싸게 넘긴다, 사정상 직접 만나기는 어렵고 입금하면 택배로 안전하게 보내준다’는 친절한 안내를 믿고, 좋은 매물을 놓칠까 봐 휴대폰 대금을 서둘러 먼저 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘방금 택배 부쳤다, 송장 번호 보내주겠다’며 운송장 번호를 알려줬는데, 막상 조회해 보니 전혀 다른 물건이 찍히거나 아예 등록조차 되지 않은 가짜 번호였고, ‘배송이 밀렸다, 곧 도착한다’는 핑계가 반복되다가 결국 폰이 오지 않고 판매자가 게시글·연락처·계정을 닫고 사라져, 알고 보니 가짜 송장번호로 발송한 척 안심시키며 여러 명에게 대금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 큰맘 먹고 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 보낼 물건이나 이행 의사 없이 가짜 송장번호로 정상 발송처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 상품 거래를 매개로 한 자금 수입이라도 그 실질이 거래를 빙자한 것에 불과하면 정상 거래로 보지 않고, 재물편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 차액이 아니라 교부받은 재물 전부라고 본 사례 흐름이 있는 영역으로, 입금 대금 전부를 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 대금 선입금 + 가짜 송장 + 미발송·잠적 결합은 ‘허위 송장 미발송 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 가짜 송장·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고폰 거래 허위 송장번호 입금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가짜 송장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·기기 사진·대금·발송 약속·결제 내역 정리.</li>\n<li><strong>② 가짜 송장·기망</strong> — 송장번호 조회 결과 다른 물건·미등록인지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 보낼 물건이나 이행 의사 없이 가짜 송장번호로 발송한 척 대금만 받았는지가 판단의 분기점입니다. 송장번호 조회 화면과 발송 약속·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·기기 사진·발송 약속 대화·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 가짜 송장·잠적 입증 (즉시)</strong> — 송장번호 조회 화면·미등록·다른 물건 결과와 연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지와 대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고폰 허위 송장번호 미발송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가짜 송장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·기기 사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>발송 약속·송장 안내 대화 (기망 정황)</strong></li>\n<li><strong>휴대폰 대금 입금 내역 (피해 금액)</strong></li>\n<li><strong>송장번호 조회 화면·미등록·다른 물건 결과</strong></li>\n<li><strong>동일 매물 재게시·다른 피해자 정황 자료</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 송장번호 조회 결과는 시간이 지나면 화면이 바뀌므로 받은 직후 곧바로 캡처해두는 것이 중요합니다. 미등록·다른 물건 결과와 발송 약속 대화를 함께 정리하면 가짜 송장 기망과 편취를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가짜 송장·기망</strong> — 발송 사실이 없는데 송장번호로 발송한 척 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 배송 지연인지 처음부터 편취였는지.</li>\n<li><strong>다중 피해·죄수</strong> — 같은 수법으로 여러 명에게 받아 피해자별 죄가 되는지.</li>\n<li><strong>편취액</strong> — 교부한 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래 빙자 자금 수입과 편취액 전부 산정',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 상품의 거래를 매개로 한 자금의 수입이라도 그 실질이 거래를 빙자해 실제로는 출자금·투자금을 받은 것에 불과하면 정상적인 상품 거래로 평가하지 않았고, 재물편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 그 차액이 아니라 교부받은 재물 전부라고 판시했습니다. 발송한 것처럼 가짜 송장으로 속여 대금을 받고 물건을 인도하지 않은 사안을 살펴볼 때에도, 거래의 외형을 빌렸을 뿐 실질이 기망에 의한 대금 편취인지와 입금 대금 전부를 기준으로 한 편취 여부를 검토해볼 수 있습니다.',
        takeaway: '대금 선입금 + 가짜 송장 + 미발송·잠적 결합 시 허위 송장 미발송 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배송이 늦은 것뿐 아닌가요?',
        answer:
          '<strong>보낼 물건·이행 의사 없이 가짜 송장으로 발송한 척했는지가 핵심인 영역입니다.</strong> 송장번호 조회 화면과 발송 약속을 확보하세요.',
      },
      {
        question: '송장번호를 받았는데도 사기인가요?',
        answer:
          '<strong>송장번호가 미등록·다른 물건이면 가짜 발송 기망 정황인 영역입니다.</strong> 조회 결과 화면을 곧바로 캡처해두세요.',
      },
      {
        question: '같은 매물을 여러 명에게 판 것 같아요.',
        answer:
          '<strong>동일 매물 재게시·다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '입금한 대금 전부가 피해액인가요?',
        answer:
          '<strong>교부한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '판매자가 계정을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-ecommerce-site-response' },
      { label: '에어비앤비 허위 매물 보증금 추적', href: '/guide/fraud/fraud-airbnb-fake-listing-deposit-track' },
      { label: '가짜 채용 보증금 회수', href: '/guide/fraud/fraud-fake-job-deposit-recover' },
      { label: '집주인 사칭 피해 추적', href: '/guide/fraud/fraud-fake-landlord-impersonation-victim' },
    ],
  },

  // ─── 2. fraud-concert-ticket-resale-fake-link-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-resale-fake-link-track',
    keyword: '콘서트 티켓 가짜 양도 링크 결제 사기',
    questionKeyword: '가고 싶던 콘서트가 매진돼 SNS·티켓 양도 카페·중고 거래 앱에서 ‘정가에 티켓을 양도한다, 안전하게 양도 링크·결제 페이지로 보내준다’는 글을 보고 연락했는데, 상대가 보내준 결제 링크나 양도 페이지로 티켓값을 결제·입금했더니 정작 티켓은 양도되지 않고, ‘처리 중이다, 결제가 안 잡혀서 한 번 더 보내라’는 핑계만 반복하다 결국 연락이 끊겼어요. 알고 보니 진짜 예매처가 아닌 가짜 양도 링크였고 여러 명에게 같은 방식으로 돈을 받았던 것 같은데, 이런 콘서트 티켓 가짜 양도 링크 결제 사기를 신고하고 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '콘서트 티켓 가짜 양도 링크 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 가짜 양도 링크 결제 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '콘서트 티켓 양도 링크로 결제했는데 티켓도 못 받고 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가고 싶던 콘서트·공연이 순식간에 매진돼 SNS·티켓 양도 카페·중고 거래 앱에서 ‘사정이 생겨 정가 그대로 양도한다, 안전하게 공식 양도 링크·결제 페이지로 보내줄 테니 거기서 결제만 하면 된다’는 글을 보고, 마지막 기회를 놓칠까 봐 상대가 보내준 결제 링크나 양도 페이지로 티켓값을 서둘러 결제·입금한 분의 상황입니다. 그런데 결제하고 나니 정작 티켓은 양도되지 않은 채, ‘지금 처리 중이다, 결제가 안 잡혀서 한 번 더 보내야 한다, 수수료를 추가로 보내야 완료된다’는 핑계가 반복되다가, 결국 티켓을 받지도 양도 확인을 받지도 못한 채 상대가 글·계정·연락처를 닫고 사라져, 알고 보니 진짜 예매처가 아닌 가짜 양도 링크로 여러 명에게 같은 방식으로 돈만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 손꼽아 기다리던 공연이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 양도할 티켓이나 이행 의사 없이 가짜 결제 링크로 정상 양도처럼 가장해 결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망행위를 수단으로 한 권리행사도 사기죄를 구성할 수 있고, 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 결제·추가 입금 전부를 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 가짜 링크 결제 + 미양도 + 추가 요구·잠적 결합은 ‘가짜 양도 링크 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 가짜 링크·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 티켓 가짜 양도 링크 결제 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·가짜 링크·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 양도 글·양도 약속·결제 링크·결제·입금 내역 정리.</li>\n<li><strong>② 가짜 링크·기망</strong> — 정식 예매처가 아닌 위조 결제 링크였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 결제·추가 입금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·카드 항변·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 양도 무산과 달리, 양도할 티켓이나 이행 의사 없이 가짜 결제 링크로 정상 양도처럼 가장해 결제만 받았는지가 판단의 분기점입니다. 결제 링크 주소·양도 약속과 추가 요구·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 양도 글·양도 약속 대화·결제 링크 주소·결제·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 가짜 링크·잠적 입증 (즉시)</strong> — 비정식 결제 링크·추가 입금 요구·핑계 반복·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·항변 (병행)</strong> — 송금 계좌 지급정지 또는 카드 결제 항변·취소를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 티켓 가짜 양도 링크 결제 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·가짜 링크·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>티켓 양도 글·정가 양도 안내 캡처 (거래 조건)</strong></li>\n<li><strong>양도 약속·결제 링크 안내 대화 (기망 정황)</strong></li>\n<li><strong>결제·입금·추가 요구 내역 (피해 금액)</strong></li>\n<li><strong>결제 링크 주소·비정식 페이지 캡처</strong></li>\n<li><strong>한 번 더 결제·수수료 요구 정황 기록</strong></li>\n<li><strong>상대 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지·카드 항변 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 링크 주소와 양도 글은 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 카드로 결제했다면 카드사 결제 취소·항변을, 계좌이체였다면 지급정지를 함께 알아보면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가짜 링크·기망</strong> — 정식 예매처가 아닌 위조 결제 링크로 속였는지.</li>\n<li><strong>편취 범의</strong> — 단순 양도 무산인지 처음부터 편취였는지.</li>\n<li><strong>추가 요구</strong> — 재결제·수수료 명목 추가 입금 요구가 있었는지.</li>\n<li><strong>편취액</strong> — 결제·추가 입금 전부가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (티켓 양도·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망 수단 권리행사와 편취액 전부 산정',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 기망행위를 수단으로 한 권리행사가 사기죄를 구성하는 경우가 있고, 금원 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 그 차액이 아니라 교부받은 금원 전부라고 보아야 하며, 이는 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄에서도 마찬가지라고 판시했습니다. 가짜 양도 링크로 결제를 받고 티켓을 양도하지 않은 사안을 살펴볼 때에도, 결제·추가 입금 전부를 기준으로 편취 여부와 손해액을 검토해볼 수 있습니다.',
        takeaway: '가짜 링크 결제 + 미양도 + 추가 요구·잠적 결합 시 가짜 양도 링크 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '양도가 안 된 것뿐 아닌가요?',
        answer:
          '<strong>양도할 티켓·이행 의사 없이 가짜 링크로 결제만 받았는지가 핵심인 영역입니다.</strong> 양도 약속과 결제 링크 주소를 확보하세요.',
      },
      {
        question: '결제 링크가 가짜인지 어떻게 보나요?',
        answer:
          '<strong>정식 예매처가 아닌 비정식 페이지면 위조 링크 기망 정황인 영역입니다.</strong> 링크 주소와 결제 화면을 캡처하세요.',
      },
      {
        question: '한 번 더 결제하라고 했는데 사기인가요?',
        answer:
          '<strong>재결제·수수료 반복 요구는 편취 다툼의 출발점인 영역입니다.</strong> 추가 입금 요구 대화와 내역을 정리하세요.',
      },
      {
        question: '카드로 결제했는데 취소되나요?',
        answer:
          '<strong>카드 결제는 결제 취소·항변을 검토할 수 있는 영역입니다.</strong> 카드사에 부정 결제·미이행을 신속히 알아보세요.',
      },
      {
        question: '상대가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '콘서트 티켓 양도 미이행 추적', href: '/guide/fraud/fraud-concert-ticket-resale-no-transfer-track' },
      { label: '콘서트 티켓 양도 후 잠적 추적', href: '/guide/fraud/fraud-concert-ticket-resale-vanish-track' },
      { label: '티켓봇 재판매 결제 차단 추적', href: '/guide/fraud/fraud-ticket-bot-resale-payment-block-cancel-track' },
      { label: '한정판 스니커즈 리셀 추적', href: '/guide/fraud/fraud-limited-sneaker-resale-fake-track' },
    ],
  },

  // ─── 3. fraud-gym-membership-prepaid-sudden-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-membership-prepaid-sudden-closure-track',
    keyword: '헬스장 회원권 선결제 후 폐업 잠적 사기',
    questionKeyword: '집 근처 헬스장에서 ‘장기 등록하면 크게 할인해준다, 곧 시설도 더 좋아진다’는 말을 믿고 1년·2년치 회원권과 PT를 한 번에 선결제했는데, 얼마 지나지 않아 헬스장이 갑자기 문을 닫고 운영자가 환불도 해주지 않은 채 연락이 끊겼어요. 알고 보니 폐업이 임박해 자금 사정이 어려운 걸 알면서도 그 사실을 숨기고 장기 회원권을 계속 받아 챙겼던 것 같은데, 이런 헬스장 선결제 후 폐업·잠적을 사기로 신고하고 결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '헬스장 회원권 선결제 폐업 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 회원권 선결제 후 폐업 잠적 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '헬스장 장기 회원권을 선결제했는데 곧바로 폐업·잠적당했다면, 형법 제347조 사기·고지의무 위반 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「집·회사 근처 헬스장·피트니스에서 ‘지금 장기로 등록하면 월 회비를 크게 깎아준다, 곧 기구도 새로 들이고 시설도 확장한다’는 솔깃한 안내를 믿고, 꾸준히 운동하려는 마음에 1년·2년치 회원권과 개인 PT를 한 번에 선결제한 분의 상황입니다. 그런데 등록한 지 얼마 지나지 않아 헬스장이 별다른 예고 없이 갑자기 문을 닫고, 남은 기간 환불도 해주지 않은 채 운영자·관장과 연락이 끊겨, 알고 보니 이미 임대료·인건비를 감당하기 어려워 폐업이 임박했다는 사정을 알면서도 그 사실을 숨긴 채 장기 회원권·PT 비용을 계속 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 건강을 챙기려 큰맘 먹고 낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상 운영이 어려운 사정을 알면서도 이를 고지하지 않고 장기 회원권을 받았다면 묵비에 의한 기망으로 평가될 여지가 있는 영역입니다. 판례는 거래의 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되는 경우 신의성실의 원칙상 그 사정을 고지할 의무가 있고, 이를 묵비함으로써 상대방을 기망한 것은 사기죄를 구성하며, 사기죄는 현실적 손해 발생을 요건으로 하지 않는다고 본 사례 흐름이 있는 영역으로, 폐업 임박 사정을 숨기고 장기 결제를 받았는지를 가려 편취를 다툴 여지가 있습니다. 장기 선결제 + 폐업 임박 묵비 + 환불 거부·잠적 결합은 ‘고지의무 위반 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·약정 정리 ② 폐업 임박 묵비·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 회원권 선결제 후 폐업 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·묵비·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·약정 정리</strong> — 등록 권유·할인 약속·회원권·PT 결제·계약서 정리.</li>\n<li><strong>② 폐업 임박 묵비·기망</strong> — 폐업 임박·자금난을 알면서 숨기고 장기 결제를 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 결제한 회원권·PT 비용 중 미이용분 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 카드 항변·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 경영 악화 폐업과 달리, 폐업 임박·자금난 사정을 알면서도 이를 숨기고 장기 회원권을 받았는지가 판단의 분기점입니다. 등록 시기·할인 권유와 곧이은 폐업·환불 거부 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·약정 자료 보존 (즉시)</strong> — 등록 권유·할인 약속·회원권·PT 결제 영수증·계약서를 캡처 보존.</li>\n<li><strong>2단계 — 폐업·묵비 입증 (즉시)</strong> — 등록 직후 폐업·환불 거부·자금난 정황과 연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 피해구제·항변 (병행)</strong> — 한국소비자원 피해구제와 카드 할부항변·결제 취소를 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 미이용분 환급·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 회원권 선결제 폐업·잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·묵비·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>회원권·PT 계약서·결제 영수증 (거래 조건)</strong></li>\n<li><strong>장기 등록 권유·할인 약속 대화 (기망 정황)</strong></li>\n<li><strong>회원권·PT 결제·이용 잔여 내역 (피해 금액)</strong></li>\n<li><strong>등록 직후 폐업·환불 거부 정황 기록</strong></li>\n<li><strong>자금난·임대료 체납 등 폐업 임박 정황 자료</strong></li>\n<li><strong>운영자·사업자·계좌 정보</strong></li>\n<li><strong>카드 항변·소비자원 피해구제 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등록 시점과 폐업 시점의 간격, 등록 직전 다른 회원에게도 장기 등록을 권유한 정황을 정리하면 폐업 임박 묵비를 다투는 데 도움이 됩니다. 카드 장기 할부로 결제했다면 할부항변권을 함께 알아보면 회수 가능성을 높일 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무·묵비</strong> — 폐업 임박 사정을 알면서 숨기고 결제를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 악화 폐업인지 처음부터 편취였는지.</li>\n<li><strong>등록·폐업 시점</strong> — 장기 등록 직후 폐업한 시점 간격이 어떤지.</li>\n<li><strong>손해액</strong> — 미이용 회원권·PT 비용 잔여분이 얼마인지.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·체육시설 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반 묵비에 의한 기망',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 지켜야 할 신의와 성실의 의무를 저버리는 적극적·소극적 행위를 모두 포함하고, 거래 상대방이 일정한 사정을 고지받았더라면 그 거래에 임하지 않았을 관계가 인정되는 경우에는 신의성실의 원칙상 그 사정을 고지할 의무가 있으며, 이를 묵비함으로써 상대방을 기망한 것은 사기죄를 구성한다고 판시했습니다. 또 사기죄는 기망에 의한 재물·재산상 이익의 취득에 본질이 있어 상대방에게 현실적 손해가 발생함을 요건으로 하지 않는다고 보았습니다. 폐업 임박 사정을 숨기고 장기 회원권을 받은 사안을 살펴볼 때에도 이러한 고지의무 위반 묵비에 의한 기망을 검토해볼 수 있습니다.',
        takeaway: '장기 선결제 + 폐업 임박 묵비 + 환불 거부·잠적 결합 시 고지의무 위반 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경영이 어려워 문 닫은 것뿐 아닌가요?',
        answer:
          '<strong>폐업 임박을 알면서 숨기고 장기 결제를 받았는지가 핵심인 영역입니다.</strong> 등록 권유 시점과 폐업 시점 간격을 정리하세요.',
      },
      {
        question: '환불 규정이 없다고 하면 못 받나요?',
        answer:
          '<strong>약관과 별개로 미이용분 환급·민사 반환을 검토할 수 있는 영역입니다.</strong> 잔여 이용 기간·금액을 정리하세요.',
      },
      {
        question: '폐업 임박을 숨겼다는 걸 어떻게 보나요?',
        answer:
          '<strong>자금난·임대료 체납 등 폐업 임박 정황이 묵비 기망의 단서인 영역입니다.</strong> 등록 직후 폐업 정황을 모으세요.',
      },
      {
        question: '카드 할부로 냈는데 멈출 수 있나요?',
        answer:
          '<strong>장기 할부는 할부항변권으로 잔여 대금 지급 거절을 검토할 수 있는 영역입니다.</strong> 카드사에 항변권을 알아보세요.',
      },
      {
        question: '운영자가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>피해구제·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 사업자·계좌 정보를 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '헬스장 폐업 회원권 환불 추적', href: '/guide/fraud/fraud-prepaid-gym-membership-closure-norefund-track' },
      { label: '멤버십 클럽 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-club-prepaid-sudden-shutdown-track' },
      { label: '헬스장 PT 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-pt-prepay-closure-track' },
      { label: '요가·헬스 선결제 잠적 추적', href: '/guide/fraud/fraud-gym-yoga-membership-prepay-bankruptcy-vanish-track' },
    ],
  },

  // ─── 4. fraud-romance-pretext-coin-investment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-pretext-coin-investment-track',
    keyword: '호감 빙자 코인 투자 유도 사기',
    questionKeyword: 'SNS·데이팅 앱·오픈채팅에서 알게 된 상대가 다정하게 호감을 표하며 가까워진 뒤, ‘내가 아는 안전한 코인·거래소가 있는데 같이 투자하면 금방 큰 수익이 난다, 나를 믿고 입금만 하면 된다’고 유도해 코인 투자 명목으로 돈을 입금·송금했는데, 처음엔 수익이 난 것처럼 보이다가 출금하려 하면 ‘세금·보증금을 더 넣어야 출금된다’며 추가 입금만 요구하다 결국 연락이 끊겼어요. 알고 보니 호감을 빙자해 투자를 유도한 로맨스스캠 같은데, 이런 호감 빙자 코인 투자 유도를 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '호감 빙자 코인 투자 유도 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '호감 빙자 코인 투자 유도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '호감을 빙자해 코인 투자에 입금했는데 출금이 막히고 추가 입금만 요구당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·데이팅 앱·인스타·오픈채팅에서 우연히 알게 된 상대가 매일 다정하게 안부를 묻고 호감을 표하며 빠르게 가까워진 뒤, ‘내가 아는 안전한 코인·해외 거래소가 있는데 같이 투자하면 금방 큰 수익이 난다, 나를 믿고 이 플랫폼에 입금만 하면 내가 다 봐주겠다’고 부드럽게 유도해, 상대를 믿고 코인 투자 명목으로 적지 않은 돈을 입금·송금한 분의 상황입니다. 그런데 처음엔 화면상 수익이 난 것처럼 보여 마음을 놓았다가, 막상 출금을 시도하면 ‘출금하려면 세금·보증금·수수료를 먼저 더 넣어야 한다, 계정이 잠겼으니 추가 입금으로 풀어야 한다’며 입금만 계속 요구하다가, 결국 출금도 못 한 채 상대와 플랫폼이 연락을 끊고 사라져, 알고 보니 호감을 빙자해 투자처럼 꾸며 돈을 받아낸 로맨스스캠은 아닌지 의심되고 막막하실 거예요. 마음까지 줬던 상대라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실체 없는 투자처를 진짜인 것처럼 꾸며 호감을 이용해 입금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 곧 사기죄가 성립하고 상당한 대가가 지급되었더라도 편취액은 교부받은 금원 전부이며, 금융투자 거래와 관련해 사회통념상 부정하다고 인정되는 일체의 수단·계획·기교를 부정한 수단으로 본 사례 흐름이 있는 영역으로, 입금·추가 입금 전부를 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 호감 빙자 + 투자 유도 + 출금 거부·추가 요구 결합은 ‘로맨스스캠 투자 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 관계·입금 정리 ② 투자처 실체·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 호감 빙자 코인 투자 유도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·투자처 실체·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관계·입금 정리</strong> — 만난 경위·호감 표현·투자 권유·입금·송금 내역 정리.</li>\n<li><strong>② 투자처 실체·기망</strong> — 실체 없는 거래소·플랫폼을 진짜처럼 꾸몄는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 입금·추가 입금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 실체 없는 투자처를 진짜처럼 꾸미고 호감을 이용해 입금을 받았는지, 출금 시 세금·보증금 명목으로 추가 입금만 요구했는지가 판단의 분기점입니다. 대화·투자 화면·입금 내역을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관계·입금 자료 보존 (즉시)</strong> — 만난 경위·호감 표현·투자 권유 대화·입금·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 투자처·출금 거부 입증 (즉시)</strong> — 투자 화면·수익 표시·세금·보증금 추가 요구·출금 거부·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">호감 빙자 코인 투자 유도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관계·투자처·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>만난 경위·호감 표현 대화 기록 (관계)</strong></li>\n<li><strong>코인·거래소 투자 권유 대화 (기망 정황)</strong></li>\n<li><strong>입금·송금·추가 입금 내역 (피해 금액)</strong></li>\n<li><strong>투자 플랫폼 화면·수익 표시 캡처</strong></li>\n<li><strong>세금·보증금 추가 요구·출금 거부 기록</strong></li>\n<li><strong>상대 계정·연락처·플랫폼·수취 계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대 계정·대화·투자 플랫폼은 차단·삭제로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 출금 시 세금·보증금 명목으로 추가 입금을 요구한 정황은 실체 없는 투자처 기망을 다투는 핵심 단서가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>투자처 실체·기망</strong> — 실체 없는 거래소를 진짜처럼 꾸몄는지.</li>\n<li><strong>편취 범의</strong> — 단순 투자 손실인지 처음부터 편취였는지.</li>\n<li><strong>출금 거부·추가 요구</strong> — 세금·보증금 명목 추가 입금만 요구했는지.</li>\n<li><strong>편취액</strong> — 입금·추가 입금 전부가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계정·플랫폼·수취 계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금원 편취 사기와 부정한 수단의 의미',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 편취액은 그 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 또 자본시장과 금융투자업에 관한 법률 제178조 제1항 제1호의 부정한 수단·계획·기교란 사회통념상 부정하다고 인정되는 일체의 수단·계획·기교를 의미한다고 보았습니다. 호감을 빙자해 실체 없는 투자처에 입금을 유도한 사안을 살펴볼 때에도, 입금·추가 입금 전부를 기준으로 한 편취와 기망 수단의 부정성을 검토해볼 수 있습니다.',
        takeaway: '호감 빙자 + 투자 유도 + 출금 거부·추가 요구 결합 시 로맨스스캠 투자 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실을 본 것뿐 아닌가요?',
        answer:
          '<strong>실체 없는 투자처를 진짜처럼 꾸미고 호감으로 입금을 유도했는지가 핵심인 영역입니다.</strong> 권유 대화와 투자 화면을 확보하세요.',
      },
      {
        question: '출금하려니 세금을 더 내라고 해요.',
        answer:
          '<strong>출금 시 세금·보증금 추가 요구는 전형적인 편취 정황인 영역입니다.</strong> 추가 입금 요구 대화를 정리하세요.',
      },
      {
        question: '처음엔 수익이 난 것처럼 보였어요.',
        answer:
          '<strong>가짜 수익 화면으로 안심시키는 것도 기망 정황으로 다투는 영역입니다.</strong> 수익 표시·화면을 캡처해두세요.',
      },
      {
        question: '입금한 돈 전부를 피해액으로 보나요?',
        answer:
          '<strong>입금·추가 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액과 송금 내역을 정리하세요.',
      },
      {
        question: '상대가 연락을 끊고 사라졌어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '데이팅앱 투자 유도 추적', href: '/guide/fraud/fraud-romance-dating-app-investment-lure-track' },
      { label: '로맨스 투자 유도 추적', href: '/guide/fraud/fraud-romance-investment-lure-track' },
      { label: '코인 거래소 출금 차단', href: '/guide/fraud/fraud-coin-exchange-withdrawal-blocked' },
      { label: '채팅방 코인 펌핑 추적', href: '/guide/fraud/fraud-chatroom-coin-pump-track' },
    ],
  },

  // ─── 5. fraud-remote-side-job-task-advance-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-remote-side-job-task-advance-deposit-track',
    keyword: '재택 부업 업무비 선입금 유도 사기',
    questionKeyword: 'SNS·문자·오픈채팅 광고에서 ‘집에서 하루 몇 시간 간단한 미션·업무만 하면 수익을 준다, 시작하려면 업무비·보증금·작업 비용을 먼저 입금해야 한다’는 재택 부업 제안을 보고, 처음엔 소액 수익이 입금돼 믿고 더 큰 업무비를 선입금했는데, 이후 ‘등급을 올려야 출금된다, 미션을 다 채워야 수익을 준다’며 추가 입금만 계속 요구하다 결국 약속한 업무도 수익도 주지 않고 연락이 끊겼어요. 알고 보니 실제 업무 없이 업무비 명목으로 돈을 받아낸 것 같은데, 이런 재택 부업 업무비 선입금 유도를 사기로 신고하고 입금한 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '재택 부업 업무비 선입금 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재택 부업 업무비 선입금 유도 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '재택 부업 업무비를 선입금했는데 수익도 출금도 막히고 추가 입금만 요구당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·문자·오픈채팅·구인 광고에서 ‘집에서 하루 몇 시간 간단한 미션·좋아요·구매·업무만 하면 안정적으로 수익을 준다, 다만 시작하거나 등급을 올리려면 업무비·보증금·작업 비용을 먼저 입금해야 한다’는 재택 부업 제안을 보고, 부수입을 기대하며 시작한 분의 상황입니다. 처음엔 소액 수익이 실제로 입금돼 ‘진짜구나’ 하고 믿었다가, 점점 더 큰 업무비를 선입금하자 ‘아직 미션을 다 못 채웠다, 등급을 올려야 출금이 된다, 한 번만 더 입금하면 누적 수익까지 한꺼번에 준다’며 추가 입금만 반복해서 요구하다가, 결국 약속한 업무도 수익도 출금도 주지 않은 채 운영자·관리자가 채팅방·계정을 닫고 사라져, 알고 보니 실제 일거리 없이 업무비 명목으로 돈만 받아낸 건 아닌지 의심되고 막막하실 거예요. 시간과 돈을 함께 들인 일이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실제 제공할 업무·수익 없이 정상 부업처럼 가장해 업무비를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 피해자를 기망해 금원을 교부받은 사기죄와 위계로써 업무를 방해한 업무방해죄는 보호법익·행위 양태가 달라 별개로 성립할 수 있다고 보아, 기망에 의한 금원 편취를 사기죄로 평가하는 흐름이 있는 영역으로, 입금·추가 입금 전부를 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 소액 수익 미끼 + 업무비 선입금 + 출금 거부·추가 요구 결합은 ‘부업 업무비 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 모집·입금 정리 ② 업무·수익 미제공 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재택 부업 업무비 선입금 유도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 모집·미제공·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 모집·입금 정리</strong> — 부업 광고·업무 약속·업무비 안내·입금·송금 내역 정리.</li>\n<li><strong>② 업무·수익 미제공</strong> — 제공할 업무·수익 없이 업무비를 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 입금·추가 입금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 부업 실패와 달리, 실제 제공할 업무·수익 없이 정상 부업처럼 가장해 업무비를 받고 출금 시 추가 입금만 요구했는지가 판단의 분기점입니다. 모집 광고·소액 수익 입금과 추가 요구·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 모집·입금 자료 보존 (즉시)</strong> — 부업 광고·업무 약속·업무비 안내 대화·입금·송금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미제공·잠적 입증 (즉시)</strong> — 소액 수익 미끼·출금 거부·추가 입금 요구·핑계 반복·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">재택 부업 업무비 선입금 유도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 모집·미제공·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>부업 광고·모집 안내 캡처 (거래 조건)</strong></li>\n<li><strong>업무·수익 약속·업무비 입금 안내 대화 (기망 정황)</strong></li>\n<li><strong>업무비·추가 입금·소액 수익 입금 내역 (피해 금액)</strong></li>\n<li><strong>출금 거부·등급 인상 요구 정황 기록</strong></li>\n<li><strong>미션 미정산·다른 피해자 정황 자료</strong></li>\n<li><strong>운영자·관리자·플랫폼·수취 계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채팅방·광고·소액 수익 입금 내역은 차단·삭제로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 소액 수익으로 믿게 한 뒤 큰 업무비를 받고 출금 시 추가 입금을 요구한 흐름을 정리하면 편취를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무·수익 미제공</strong> — 제공할 업무·수익 없이 업무비를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 부업 부진인지 처음부터 편취였는지.</li>\n<li><strong>출금 거부·추가 요구</strong> — 등급·미션 명목 추가 입금만 요구했는지.</li>\n<li><strong>편취액</strong> — 입금·추가 입금 전부에서 받은 수익을 뺀 손해인지.</li>\n<li><strong>운영자 특정</strong> — 계정·플랫폼·수취 계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·부업 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 금원 편취 사기의 별개 성립',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 피해 회사를 기망해 대금 등을 교부받은 특정경제범죄 가중처벌 등에 관한 법률 위반(사기)죄와 위계로써 업무를 방해한 업무방해죄는 보호법익·구성요건적 행위의 양태·기수 시기 등이 서로 달라 어느 한 죄가 다른 죄의 불법과 책임을 모두 포함하지 않으므로 별개로 성립하고 실체적 경합관계에 있다고 판시했습니다. 실제 일을 의뢰받은 대로 수행하지 않으면서 비용을 계속 청구·수령해 금원을 편취한 점을 사기죄로 평가한 흐름은, 실제 제공할 업무·수익 없이 업무비를 받은 재택 부업 사안에서도 기망에 의한 금원 편취 여부를 검토해볼 수 있게 합니다.',
        takeaway: '소액 수익 미끼 + 업무비 선입금 + 출금 거부·추가 요구 결합 시 부업 업무비 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '부업이 잘 안된 것뿐 아닌가요?',
        answer:
          '<strong>제공할 업무·수익 없이 업무비만 받았는지가 핵심인 영역입니다.</strong> 모집 광고·업무 약속과 미제공 정황을 확보하세요.',
      },
      {
        question: '처음엔 소액 수익이 들어왔어요.',
        answer:
          '<strong>소액 수익으로 믿게 한 뒤 큰 입금을 유도한 것도 기망 정황인 영역입니다.</strong> 소액 입금과 이후 추가 요구를 정리하세요.',
      },
      {
        question: '등급을 올려야 출금된다고 해요.',
        answer:
          '<strong>등급·미션 명목 추가 입금 요구는 전형적 편취 정황인 영역입니다.</strong> 출금 거부·추가 요구 대화를 모으세요.',
      },
      {
        question: '받은 수익이 있어도 피해로 보나요?',
        answer:
          '<strong>입금 총액에서 실제 수령액을 뺀 손해를 따져 다투는 영역입니다.</strong> 입금·수령 내역을 함께 정리하세요.',
      },
      {
        question: '운영자가 채팅방을 닫고 사라졌어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '댓글 알바 선입금 추적', href: '/guide/fraud/fraud-comment-part-time-advance-deposit-track' },
      { label: '취업 보증금 선입금 사기', href: '/guide/fraud/fraud-employment-job-offer-deposit-scam' },
      { label: '구인 선입금 잠적 추적', href: '/guide/fraud/fraud-online-job-recruit-deposit-required-vanish-track' },
      { label: '가짜 채용 보증금 회수', href: '/guide/fraud/fraud-fake-job-deposit-recover' },
    ],
  },

  // ─── 6. fraud-joint-business-profit-distribution-pretext-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-business-profit-distribution-pretext-falsely-accused-defense',
    keyword: '동업 수익배분 약정 사기 무고 방어',
    questionKeyword: '지인과 함께 동업을 시작하면서 ‘수익이 나면 약정한 비율대로 나누자’고 합의하고 사업을 운영했는데, 매출 부진·비용 증가로 기대만큼 수익이 나지 않거나 분배가 늦어지자 상대가 ‘처음부터 수익을 나눠줄 생각 없이 동업을 빙자해 돈을 받아 챙긴 사기’라며 저를 고소했어요. 저는 실제로 함께 사업을 운영했고 수익이 나면 약정대로 나눌 생각이었으며 손실은 함께 부담해야 하는 상황인데, 이렇게 동업 수익배분 약정을 두고 사기로 고소당했을 때 어떻게 방어해야 하나요?',
    ctaKeyword: '동업 수익배분 사기 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업 수익배분 약정 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '동업 수익배분 약정을 두고 사기로 고소당해 막막하다면, 형법 제347조 편취 범의·고지의무 유무를 따지고 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동료와 의기투합해 동업을 시작하면서 ‘수익이 나면 미리 정한 비율대로 나누자, 손실도 함께 부담하자’고 합의하고 실제로 함께 자금을 대거나 일을 분담하며 사업을 운영했는데, 막상 매출이 기대만큼 나오지 않거나 비용이 늘어 수익 분배가 늦어지자, 상대가 갑자기 태도를 바꿔 ‘너는 처음부터 수익을 나눠줄 생각 없이 동업을 빙자해 내 투자금·운영자금을 받아 챙긴 사기꾼’이라며 본인을 사기로 고소해, 함께 사업을 일군 입장에서 억울하고 막막하실 거예요. 동업은 본래 손익을 함께 나누는 관계라 수익이 안 났다는 것만으로 사기가 되는 게 아닌데, 갑자기 형사사건의 피의자가 되어 답답하셨을 거예요. 사기 혐의를 받고 있다면, 동업의 실체와 약정 당시 자신의 의사·이행 정황을 차분히 정리해 대응하는 것이 중요합니다.」 형법 제347조의 사기죄가 성립하려면 편취 범의를 가지고 상대방을 기망한 것이어야 하고, 동업 손익 분배 지연 자체가 곧 편취가 되는 것은 아닌 영역입니다. 판례는 사기죄의 부작위에 의한 기망과 고지의무는 상대방이 그 사정을 알았더라면 거래에 임하지 않았을 것이 명백한 경우에 인정되고, 충분한 담보를 제공하는 등 변제 의사·능력을 뒷받침하는 사정이 있으면 편취 범의를 가볍게 단정할 수 없으며, 공모·범의는 정황만으로 함부로 인정할 수 없다고 본 사례 흐름이 있는 영역으로, 동업의 실체와 약정 당시 이행 의사·정황을 가려 편취 고의 유무를 다툴 여지가 있습니다. 동업 실체 + 손익 분배 약정 + 사후 수익 부진 결합은 ‘편취 범의·민사적 성격’ 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 동업·약정 정리 ② 편취 범의 ③ 이행·기여 정황 ④ 진술·대응 ⑤ 민사·형사 구분 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업 수익배분 약정 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동업·약정·편취 범의·이행·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동업·약정 정리</strong> — 동업 경위·출자·역할·수익배분·손실분담 약정 정리.</li>\n<li><strong>② 편취 범의</strong> — 약정 당시 수익을 나눌 의사·동업 실체가 있었는지 검토.</li>\n<li><strong>③ 이행·기여 정황</strong> — 실제 자금 투입·업무 분담·운영 기여를 자료로 확보.</li>\n<li><strong>④ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n<li><strong>⑤ 민사·형사 구분</strong> — 손익 정산 분쟁의 민사적 성격을 소명 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수익이 안 났거나 분배가 늦어진 것만으로 곧 사기가 되는 것이 아니라, 약정 당시 수익을 나눌 의사·동업 실체가 있었는지가 분기점입니다. 동업의 실체와 이행·기여 정황으로 편취 고의 부재와 민사적 성격을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동업·약정 정리 (즉시)</strong> — 동업 경위·출자·역할·수익배분·손실분담 약정과 대화 흐름을 정리.</li>\n<li><strong>2단계 — 이행·기여 자료 확보 (1주)</strong> — 자금 투입·업무 분담·운영 기여·정산 내역을 확보.</li>\n<li><strong>3단계 — 수익 부진·분배 지연 경위 정리 (2주)</strong> — 매출 부진·비용 증가 등 분배 지연의 사후 사정을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 민사적 성격 소명 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업 수익배분 약정 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 동업·편취 범의·이행 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 계약서·출자·역할 분담 자료 (동업 실체)</strong></li>\n<li><strong>수익배분·손실분담 약정 대화 (약정 내용)</strong></li>\n<li><strong>자금 투입·계좌 이체·운영비 내역 (기여)</strong></li>\n<li><strong>업무 분담·거래처·운영 기록 (이행)</strong></li>\n<li><strong>매출 부진·비용 증가 등 수익 부진 자료</strong></li>\n<li><strong>고소인 주장 모순·정산 다툼 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘약정 당시 수익을 나눌 의사·동업 실체가 있었는지’와 ‘분배 지연이 사후 수익 부진에 따른 것인지’입니다. 자금 투입·업무 분담 등 실제 기여 자료와 정산 다툼의 경위를 정돈하면 편취 고의가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 약정 당시 수익을 나눌 의사가 있었는지.</li>\n<li><strong>동업 실체</strong> — 실제 출자·역할 분담·운영 기여가 있었는지.</li>\n<li><strong>고지의무</strong> — 알릴 의무가 있는 중요 사정을 숨겼는지.</li>\n<li><strong>민사·형사 구분</strong> — 손익 정산 분쟁의 민사적 성격에 그치는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무·편취 범의와 공모 인정의 신중함',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 사기죄의 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 일정한 사정에 관해 착오에 빠진 것을 알면서도 이를 고지하지 않는 것을 말하고, 상대방이 그 사실을 알았더라면 거래를 하지 않았을 것이 명백한 경우 신의칙상 고지의무가 인정된다고 보면서도, 충분한 담보를 제공한 경우에는 변제 의사·능력이 없다고 단정할 수 없고, 공모·범의는 학력·경력·관계 등 정황만으로 함부로 인정해서는 안 된다고 판시했습니다. 동업 수익배분 약정을 두고 사기로 고소된 사안에서도, 약정 당시 이행 의사·동업 실체와 편취 범의를 신중히 가려 검토해볼 수 있습니다.',
        takeaway: '동업 실체 + 손익 분배 약정 + 사후 수익 부진 결합 시 편취 범의·민사적 성격 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '수익을 못 나눠줬다고 사기로 고소당했어요.',
        answer:
          '<strong>약정 당시 수익을 나눌 의사·동업 실체 유무가 핵심인 영역입니다.</strong> 동업 경위와 출자·역할 자료를 정리하세요.',
      },
      {
        question: '동업 손실이 났는데도 사기가 되나요?',
        answer:
          '<strong>손익 분배 지연만으로는 편취 고의를 단정할 수 없는 영역입니다.</strong> 민사적 성격과 수익 부진 경위를 정리하세요.',
      },
      {
        question: '실제로 함께 일했다는 걸 어떻게 보이죠?',
        answer:
          '<strong>자금 투입·업무 분담·운영 기여가 동업 실체를 뒷받침하는 영역입니다.</strong> 이체·거래처·운영 기록을 확보하세요.',
      },
      {
        question: '분배가 늦어진 게 전부인데 처벌되나요?',
        answer:
          '<strong>사후 수익 부진에 따른 분배 지연만으로는 편취 고의가 인정되지 않는 영역입니다.</strong> 매출 부진·비용 증가 자료를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>약정 의사·동업 실체에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '동업 자금 횡령 무고 방어', href: '/guide/fraud/fraud-joint-business-fund-misappropriation-falsely-accused-defense' },
      { label: '사업 투자 빙자 차용 무고 방어', href: '/guide/fraud/fraud-business-investment-pretext-borrowing-falsely-accused-defense' },
      { label: '동업자 자본 손실 무고 방어', href: '/guide/fraud/fraud-business-partner-capital-loss-falsely-accused-defense' },
      { label: '사업 정산 분쟁 무고 방어', href: '/guide/fraud/fraud-business-settlement-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-swimming-pool-locker-room-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-swimming-pool-locker-room-touch-report-track',
    keyword: '수영장 탈의실 추행 신고',
    questionKeyword: '수영장·헬스장 탈의실·샤워실에서 옷을 갈아입거나 씻던 중, 같은 공간에 있던 사람이 좁다는 핑계로 갑자기 제 몸을 만지거나 불필요하게 밀착해 큰 수치심과 불쾌감을 느꼈어요. 노출된 공간이라 더 위축되어 그 자리에서 강하게 항의하지 못했고, 일부러 만진 건지 사람이 많아 우연히 닿은 건지 헷갈렸는데, 이런 탈의실 안 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있는지, 또 단순한 스침과 추행을 어떻게 구별하는지 알고 싶어요.',
    ctaKeyword: '수영장 탈의실 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수영장 탈의실 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '수영장 탈의실에서 누군가 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「수영장·헬스장·목욕탕의 탈의실·샤워실에서 옷을 갈아입거나 몸을 씻던 중, 같은 공간에 있던 사람이 ‘좁아서 그렇다, 지나가려다 그랬다’는 식으로 갑자기 본인의 몸·엉덩이·허리·가슴 부위를 만지거나, 필요 이상으로 몸을 밀착해 신체를 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 옷을 벗고 있거나 노출이 많은 공간이라 더욱 위축되고 당황해 그 자리에서 강하게 항의하거나 곧바로 따지지 못한 채 자리를 피해야 했고, ‘일부러 만진 건지, 사람이 많아 우연히 닿은 건지’ 헷갈려 신고해도 되는 일인지, 단순한 스침과 추행을 어떻게 구별하는지 막막하셨을 거예요. 편하게 쉬려고 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 어떤 행위가 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 판단하고, 신체접촉이 사회적으로 상당한 범주를 다소 벗어나더라도 성적 자유를 침해하는 정도에 이르렀는지를 가려야 한다고 본 사례 흐름이 있는 영역으로, 탈의실 접촉이 의사에 반한 추행에 해당하는지를 다툴 여지가 있습니다. 노출 공간 접촉 + 의사에 반한 신체 접촉 + 핑계 결합은 ‘추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수영장 탈의실 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·장소·접촉 부위·방식·반복·핑계·주변 상황 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 시설 CCTV(출입구·복도)·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 사물함·회원·출입 기록·인상착의로 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 공간에서 몸이 닿더라도 통상의 이용에 필요한 범위를 넘어 의사에 반해 신체를 만진 것이 성적 자유를 침해하면 추행으로 평가될 수 있고, 사회적으로 상당한 범주를 벗어났는지가 분기점입니다. 접촉 부위·방식·핑계와 직후 호소를 신속히 남기는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·장소·접촉 부위·방식·반복·핑계·주변 상황·인상착의를 정리.</li>\n<li><strong>2단계 — 증거 보전 요청 (즉시)</strong> — 시설 출입구·복도 CCTV·사물함·이용 기록 보존을 요청.</li>\n<li><strong>3단계 — 시설·관리자 협조 (직후)</strong> — 시설 관리자·경찰에 영상 보존과 회원·이용자 확인을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수영장 탈의실 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·접촉 정황 메모</strong></li>\n<li><strong>이용권·사물함·출입 기록 (가해자 특정)</strong></li>\n<li><strong>시설 CCTV 보존 요청 자료</strong></li>\n<li><strong>가해자 인상착의·핑계 발언 기록</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>시설 관리자 문의·응답 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 탈의실 내부는 보통 촬영이 제한되므로 출입구·복도 CCTV와 이용·출입 기록을 시설 관리자·경찰에 곧바로 보존 요청하는 것이 중요합니다. 접촉 부위·방식·핑계 발언과 직후 호소를 남기면 우연한 스침과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>상당 범주</strong> — 사회적으로 상당한 범주를 벗어난 접촉인지.</li>\n<li><strong>우연·고의</strong> — 통상 이용에 필요한 접촉인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — 사물함·출입 기록·인상착의로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당 범주 판단 기준',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 추행이란 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반하는 행위로서 피해자의 성적 자유를 침해하는 것을 말하며, 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 판단해야 한다고 판시했습니다. 또 공동체 내 신체접촉이 사회적으로 상당한 범주를 다소 벗어나더라도 의사에 반하는 유형력의 행사로서 성적 자유를 침해하는 정도에 이르렀는지를 가려야 한다고 보았습니다. 탈의실에서 갑자기 신체를 만진 사안을 살펴볼 때에도 이러한 추행 해당성 기준으로 검토해볼 수 있습니다.',
        takeaway: '노출 공간 접촉 + 의사에 반한 신체 접촉 + 핑계 결합 시 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>통상 이용에 필요한 범위를 넘은 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·핑계 발언을 구체적으로 남기세요.',
      },
      {
        question: '노출된 곳이라 항의를 못 했어요.',
        answer:
          '<strong>노출 공간에서의 위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '가벼운 접촉인데도 추행인가요?',
        answer:
          '<strong>사회적으로 상당한 범주를 벗어나 성적 자유를 침해했는지로 가리는 영역입니다.</strong> 접촉의 양상과 반복을 기록하세요.',
      },
      {
        question: '탈의실엔 CCTV가 없는데 어떡하죠?',
        answer:
          '<strong>출입구·복도 CCTV와 출입·이용 기록으로 특정을 보강할 수 있는 영역입니다.</strong> 시설에 즉시 보존을 요청하세요.',
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
      { label: '수영장 샤워실 추행 추적', href: '/guide/sex-crime/sex-crime-swimming-pool-shower-room-track' },
      { label: '탈의실 불법촬영 추적', href: '/guide/sex-crime/sex-crime-changing-room-illegal-filming-track' },
      { label: '마사지샵 추행 신고 추적', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
      { label: '축제 인파 기습 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-report-track' },
    ],
  },

  // ─── 8. sex-crime-late-night-bus-passenger-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-late-night-bus-passenger-touch-report-track',
    keyword: '심야버스 승객 추행 신고',
    questionKeyword: '밤늦게 심야버스·막차를 타고 가던 중, 옆·뒤에 앉거나 선 승객이 흔들리는 척하며 제 몸을 만지거나 필요 이상으로 밀착해 큰 수치심과 공포를 느꼈어요. 승객도 적고 어두운 데다 상대가 취한 듯해 무서워서 그 자리에서 항의하거나 자리를 옮기지 못했고, 버스가 흔들려 닿은 우연인지 일부러 만진 건지 헷갈렸는데, 이런 심야버스 안 승객의 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있는지, 또 어떻게 가해자를 특정하고 입증하는지 알고 싶어요.',
    ctaKeyword: '심야버스 승객 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '심야버스 승객 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '심야버스에서 옆 승객이 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「밤늦게 심야버스·막차·시외버스를 타고 가던 중, 옆자리나 뒷자리에 앉거나 통로에 서 있던 승객이 ‘버스가 흔들려서 그렇다’는 식으로 갑자기 본인의 손·허벅지·어깨·허리를 만지거나, 좌석이 비어 있는데도 필요 이상으로 몸을 밀착해 신체를 접촉해 와 큰 불쾌감과 수치심, 공포를 느낀 분의 상황입니다. 승객도 적고 어두운 데다 상대가 술에 취한 듯해 무섭고 위축되어 그 자리에서 강하게 항의하거나 자리를 옮기지 못한 채 목적지 또는 다음 정류장까지 참아야 했고, ‘버스가 흔들려 닿은 우연인지, 일부러 만진 건지’ 헷갈려 신고해도 되는 일인지, 어떻게 가해자를 특정하고 입증하는지 막막하셨을 거예요. 늦은 밤 안전하게 귀가하려던 길에 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 판단하고, 성폭력범죄 피해 진술의 신빙성과 객관적 정황을 함께 살펴야 한다고 본 사례 흐름이 있는 영역으로, 버스 안 접촉이 의사에 반한 추행에 해당하는지를 가려 다툴 여지가 있습니다. 흔들림 빙자 + 의사에 반한 접촉 + 밀착 결합은 ‘추행 해당성·증거 보전’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 심야버스 승객 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 탑승 시간·노선·정류장·접촉 부위·방식·반복·핑계 정리.</li>\n<li><strong>② 추행 해당성</strong> — 흔들림 빙자 접촉이 의사에 반해 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 버스 CCTV·교통카드 승하차 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 노선·시간·CCTV·교통카드 내역으로 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 버스가 흔들려 몸이 닿더라도 통상의 흔들림을 넘어 의사에 반해 신체를 만진 것이 성적 자유를 침해하면 추행으로 평가될 수 있고, 우연한 스침과 고의의 접촉을 구별하는 정황이 분기점입니다. 버스 CCTV·교통카드 기록을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 탑승 시간·노선·정류장·차량 번호·접촉 부위·방식·반복·핑계를 정리.</li>\n<li><strong>2단계 — 버스 CCTV·승하차 기록 확보 (즉시)</strong> — 버스 내 CCTV·교통카드 승하차 내역 보존을 요청.</li>\n<li><strong>3단계 — 운수사·경찰 협조 (직후)</strong> — 운수회사·경찰에 영상 보존과 승객·가해자 확인을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">심야버스 승객 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시간·노선·정류장·접촉 정황 메모</strong></li>\n<li><strong>교통카드 승하차 내역 (시간·구간 특정)</strong></li>\n<li><strong>버스 CCTV 보존 요청 자료</strong></li>\n<li><strong>가해자 인상착의·핑계 발언 기록</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>운수회사 문의·응답 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 CCTV는 보존 기간이 짧아 시간이 지나면 사라질 수 있으니 노선·차량 번호·탑승 시간을 확인해 운수회사·경찰에 곧바로 보존을 요청하는 것이 중요합니다. 교통카드 승하차 내역으로 시간·구간을 특정하고 직후 호소를 남기면 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>우연·고의</strong> — 통상의 흔들림인지 의사에 반한 고의 접촉인지.</li>\n<li><strong>진술 신빙성</strong> — 피해 진술이 객관적 정황과 부합하는지.</li>\n<li><strong>가해자 특정</strong> — 노선·CCTV·교통카드 내역으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 판단 기준과 피해 진술의 신빙성',
        summary:
          '대법원 2015도2390(대법원, 2018.06.28 선고) 영역에서 법원은 강제추행 등 성폭력범죄에서 추행에 해당하는지는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위와 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 판단해야 하고, 친고죄·고소기간 등 적용 법령과 함께 피해 진술의 신빙성과 객관적 정황을 신중히 살펴야 한다는 취지로 판시했습니다. 어두운 심야버스 안에서 흔들림을 빙자해 신체를 만진 사안을 살펴볼 때에도, 접촉의 태양과 정황·진술의 신빙성을 종합해 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '흔들림 빙자 + 의사에 반한 접촉 + 밀착 결합 시 추행 해당성·증거 보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '버스가 흔들려 닿은 거라고 하면요?',
        answer:
          '<strong>통상의 흔들림을 넘은 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복과 핑계 발언을 남기세요.',
      },
      {
        question: '무섭고 어두워 항의를 못 했어요.',
        answer:
          '<strong>야간·위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '가해자를 못 봤는데 특정되나요?',
        answer:
          '<strong>노선·차량·CCTV·교통카드 내역으로 특정을 보강할 수 있는 영역입니다.</strong> 탑승 시간·노선·정류장을 즉시 기록하세요.',
      },
      {
        question: '버스 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>보존 기간이 짧아 신속 보존 요청이 중요한 영역입니다.</strong> 운수회사·경찰에 곧바로 영상 보존을 요청하세요.',
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
      { label: '시내버스 혼잡 추행 추적', href: '/guide/sex-crime/sex-crime-city-bus-crowd-track' },
      { label: '시내버스 추행 신고 추적', href: '/guide/sex-crime/sex-crime-city-bus-track' },
      { label: '택시 승객 운전기사 추행 추적', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-touch-report-track' },
      { label: '축제 인파 기습 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-report-track' },
    ],
  },

  // ─── 9. sex-crime-hospital-treatment-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-hospital-treatment-pretext-touch-report-track',
    keyword: '병원 진료 빙자 추행 신고',
    questionKeyword: '병원·의원에서 진료·검사·처치를 받던 중, 의료진이 진찰·치료에 필요하다는 핑계로 불필요하게 가슴·하복부·둔부 등 부위를 만지거나, 보호자도 없이 단둘이 있는 진료실에서 진료 범위를 넘는 신체 접촉을 해 큰 수치심과 불쾌감을 느꼈어요. 진료라고 하니 그 자리에서 거부하거나 항의하기 어려웠고, 정말 진료에 필요한 행위였는지 추행인지 헷갈렸는데, 이런 병원 진료를 빙자한 신체 접촉을 강제추행으로 신고하려면 어떤 절차를 밟고 무엇을 준비해야 하는지 알고 싶어요.',
    ctaKeyword: '병원 진료 빙자 추행 신고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '병원 진료 빙자 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '병원에서 진료를 빙자한 부적절한 신체 접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「병원·의원·한의원에서 진료·검사·물리치료·시술을 받던 중, 의료진이 ‘진찰·치료에 필요하다, 이 부위를 봐야 한다’는 핑계로 진료 목적을 넘어 불필요하게 가슴·하복부·둔부·허벅지 안쪽 등을 만지거나, 보호자도 없이 단둘이 있는 진료실·치료실에서 설명 없이 진료 범위를 벗어난 신체 접촉을 해 와 큰 수치심과 불쾌감, 당혹감을 느낀 분의 상황입니다. ‘진료니까 어쩔 수 없는 건가’ 싶어 그 자리에서 거부하거나 항의하기 어려웠고, 환자로서 위축된 상태라 따져 묻지 못한 채 자리를 떠나야 했으며, ‘정말 진료에 필요한 행위였는지, 진료를 빙자한 추행인지’ 헷갈려 신고해도 되는 일인지, 어떤 절차를 밟고 무엇을 준비해야 하는지 막막하셨을 거예요. 몸을 맡기고 치료받던 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행죄에는 폭행행위 자체가 곧 추행에 해당하는 기습추행이 포함되고 이때의 폭행은 상대방의 의사를 억압할 정도일 필요가 없으며, 추행 여부는 피해자의 의사·연령, 행위에 이르게 된 경위, 구체적 행위 태양, 객관적 상황 등을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역으로, 진료에 필요한 범위를 넘는 접촉이 의사에 반한 추행에 해당하는지를 가려 다툴 여지가 있습니다. 진료 빙자 + 진료 범위 초과 접촉 + 단둘 상황 결합은 ‘기습추행·추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 의료진 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병원 진료 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·의료진 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 진료 일시·진료과·증상·접촉 부위·방식·설명 유무 정리.</li>\n<li><strong>② 추행 해당성</strong> — 진료에 필요한 범위를 넘는 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 진료기록·예약·진료 내역·CCTV 보존 요청.</li>\n<li><strong>④ 의료진 특정</strong> — 진료기록·담당의·예약 내역으로 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진료·치료에 통상 필요한 신체 접촉이라면 추행으로 보기 어렵지만, 진료 목적·범위를 넘어 의사에 반해 신체를 만진 것이 성적 자유를 침해하면 기습추행으로 평가될 수 있다는 점이 분기점입니다. 진료기록·접촉 부위·설명 유무를 신속히 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 진료 일시·진료과·증상·접촉 부위·방식·설명 유무·보호자 동석 여부를 정리.</li>\n<li><strong>2단계 — 진료기록·CCTV 보존 요청 (즉시)</strong> — 진료기록·예약·진료 내역과 복도·대기실 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 의료기관 협조 (직후)</strong> — 병원·경찰에 진료기록 발급과 담당 의료진 확인을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병원 진료 빙자 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>진료 일시·진료과·증상·접촉 정황 메모</strong></li>\n<li><strong>진료기록·예약·진료비 영수증 (의료진 특정)</strong></li>\n<li><strong>복도·대기실 CCTV 보존 요청 자료</strong></li>\n<li><strong>접촉 부위·방식·설명 유무·보호자 동석 기록</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>병원·관리자 문의·응답 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록·예약·진료비 내역은 진료 일시와 담당 의료진을 특정하는 핵심 자료이니 사본을 확보해두는 것이 좋습니다. 접촉 부위·방식과 진료상 설명 유무, 보호자 동석 여부를 정리하면 진료에 필요한 행위와 진료를 빙자한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 진료 범위를 넘는 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>진료 필요성</strong> — 접촉이 진료·치료에 통상 필요한 범위였는지.</li>\n<li><strong>기습추행·유형력</strong> — 설명 없이 의사에 반해 신체를 만졌는지.</li>\n<li><strong>의료진 특정</strong> — 진료기록·담당의·예약 내역으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 진료기록·CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행에서 폭행과 추행의 판단',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 강제추행죄는 폭행·협박으로 항거를 곤란하게 한 뒤 추행하는 경우뿐 아니라 폭행행위 자체가 추행으로 인정되는 경우도 포함하고, 이때의 폭행은 반드시 상대방의 의사를 억압할 정도일 필요가 없으며, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 피해자의 의사·연령, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 진료를 빙자해 진료 범위를 넘는 신체 접촉을 한 사안을 살펴볼 때에도, 의사에 반한 유형력의 행사와 추행 해당성을 이러한 기준으로 검토해볼 수 있습니다.',
        takeaway: '진료 빙자 + 진료 범위 초과 접촉 + 단둘 상황 결합 시 기습추행·추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진료에 필요한 거라고 하면 어쩌죠?',
        answer:
          '<strong>진료·치료에 통상 필요한 범위를 넘었는지가 핵심인 영역입니다.</strong> 접촉 부위·방식과 설명 유무를 구체적으로 정리하세요.',
      },
      {
        question: '진료라 그 자리에서 항의를 못 했어요.',
        answer:
          '<strong>환자로서의 위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '진료기록은 어떻게 확보하나요?',
        answer:
          '<strong>진료기록·예약·진료비 내역은 의료진·일시 특정의 핵심인 영역입니다.</strong> 병원에 사본 발급을 신속히 요청하세요.',
      },
      {
        question: '진료실엔 CCTV가 없는데 어떡하죠?',
        answer:
          '<strong>복도·대기실 CCTV와 진료기록·진술로 정황을 보강하는 영역입니다.</strong> 보존 요청과 직후 호소 기록을 남기세요.',
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
      { label: '병원 의사 부적절 행위 추적', href: '/guide/sex-crime/sex-crime-hospital-treatment-doctor-inappropriate-act-track' },
      { label: '병원 입원 병실 추행 추적', href: '/guide/sex-crime/sex-crime-hospital-ward-inpatient-track' },
      { label: '진료 빙자 의료 추행 추적', href: '/guide/sex-crime/sex-crime-medical-exam-pretext-track' },
      { label: '마사지샵 추행 신고 추적', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-club-dance-floor-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-dance-floor-contact-falsely-accused-defense',
    keyword: '클럽 무도장 신체접촉 추행 무고 방어',
    questionKeyword: '클럽·무도장에서 사람이 빽빽하게 몰린 무대 위에서 춤을 추던 중 인파에 밀려 옆 사람과 몸이 부딪히거나 스쳤을 뿐인데, 상대가 ‘일부러 만졌다’며 저를 강제추행으로 신고·고소했어요. 저는 추행할 의도가 전혀 없었고 좁은 무도장에서 떠밀려 닿은 우발적 접촉이었는데, 어두운 데다 목격자도 분명치 않은 상황이라 진술만으로 가해자로 몰릴까 봐 막막합니다. 이렇게 클럽 무도장 신체접촉을 두고 추행으로 고소당했을 때 어떻게 방어해야 하나요?',
    ctaKeyword: '클럽 무도장 추행 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '클럽 무도장 신체접촉 추행 무고 방어 — 5단계 진술 점검 | 로앤가이드',
      description:
        '클럽 무도장에서 우발적 접촉을 두고 추행으로 고소당해 막막하다면, 형법 제298조 추행 고의·진술 신빙성·무죄추정을 따지고 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「클럽·무도장·페스티벌 무대에서 사람이 빽빽하게 몰린 가운데 춤을 추다가 인파에 떠밀려 옆 사람과 몸이 부딪히거나 스쳤을 뿐인데, 상대가 ‘일부러 몸을 만졌다’며 본인을 강제추행으로 신고·고소해, 추행할 의도가 전혀 없던 입장에서 갑자기 형사사건의 피의자가 되어 억울하고 막막하실 거예요. 어둡고 음악 소리가 큰 좁은 공간에서 누구나 부딪힐 수밖에 없는 상황이었고, 목격자도 분명치 않으며 CCTV도 흐릿해, 상대의 진술만으로 추행 가해자로 몰릴까 봐 두렵고 답답하셨을 거예요. 추행 혐의를 받고 있다면, 당시 좁은 무도장의 객관적 상황과 우발적 접촉의 정황, 추행 고의가 없었음을 차분히 정리해 대응하는 것이 중요합니다.」 형법 제298조의 강제추행죄가 성립하려면 의사에 반하는 유형력의 행사와 추행 고의가 있어야 하고, 인파에 밀린 우발적 접촉 자체가 곧 추행이 되는 것은 아닌 영역입니다. 판례는 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 통상 추행이 이루어질 것으로 예상하기 어려운 상황에서 피해자 진술이 유일한 증거인 경우 그 진술이 합리적 의심을 배제할 만큼 신빙성이 있어야 유죄로 인정할 수 있다고 본 사례 흐름이 있는 영역으로, 접촉의 우발성과 추행 고의 유무, 진술의 신빙성을 가려 다툴 여지가 있습니다. 좁은 무도장 + 인파 밀집 + 우발적 접촉 결합은 ‘추행 고의 부재·진술 신빙성’ 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위·정황 정리 ② 추행 고의 ③ 진술 신빙성 ④ 객관 증거 ⑤ 진술·대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽 무도장 신체접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 고의·진술 신빙성·객관 증거·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·정황 정리</strong> — 일시·장소·혼잡도·조도·접촉 부위·방식·우발성 정리.</li>\n<li><strong>② 추행 고의</strong> — 인파에 밀린 우발적 접촉인지 의사에 반한 고의 접촉인지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 고소인 진술이 객관적 정황·경험칙에 부합하는지 검토.</li>\n<li><strong>④ 객관 증거</strong> — CCTV·동행·목격자 등 객관 자료를 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁고 혼잡한 무도장에서 몸이 닿은 것만으로 곧 추행이 되는 것이 아니라, 의사에 반한 유형력의 행사와 추행 고의가 있었는지, 진술이 합리적 의심을 배제할 만큼 신빙성이 있는지가 분기점입니다. 혼잡·조도 등 객관적 상황과 우발적 접촉 정황으로 추행 고의 부재를 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·정황 정리 (즉시)</strong> — 일시·장소·혼잡도·조도·접촉 부위·방식·우발성과 동행 여부를 정리.</li>\n<li><strong>2단계 — 객관 증거 확보 (1주)</strong> — 클럽 CCTV·동행·목격자 진술·입장 기록 보존을 요청.</li>\n<li><strong>3단계 — 진술 신빙성 검토 (2주)</strong> — 고소인 진술의 모순·정황 불부합·경험칙 위배 여부를 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 추행 고의 부재·진술 신빙성 부족 소명 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 추행 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽 무도장 신체접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 고의·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·혼잡도·조도 정황 메모</strong></li>\n<li><strong>클럽 입장·결제·동행 기록 (현장 정황)</strong></li>\n<li><strong>CCTV 보존 요청·확보 자료 (객관 증거)</strong></li>\n<li><strong>동행·목격자 진술 (우발성 정황)</strong></li>\n<li><strong>고소인 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>접촉 부위·방식·우발성 설명 메모</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘인파에 밀린 우발적 접촉인지’와 ‘진술이 합리적 의심을 배제할 만큼 신빙성이 있는지’입니다. 혼잡·조도 등 객관적 상황과 CCTV·동행·목격자 자료를 정돈하면 추행 고의가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 의사에 반한 고의 접촉인지 우발적 접촉인지.</li>\n<li><strong>진술 신빙성</strong> — 고소인 진술이 객관적 정황·경험칙에 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 없을 정도로 증명되었는지.</li>\n<li><strong>객관적 상황</strong> — 혼잡·조도 등 우발적 접촉이 자연스러운 상황인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 피해 진술의 신빙성 정도',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 판결이 확정될 때까지 무죄로 추정되고 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 통상적으로 추행이 이루어질 것으로 예상하기 어려운 상황에서 피해자 또는 밀접한 관계자의 진술이 유일한 증거인 경우, 이를 근거로 유죄로 판단하려면 진술 내용 자체의 합리성·타당성뿐 아니라 객관적 정황과 경험칙에 비추어 합리적 의심을 배제할 정도로 신빙성이 있어야 한다고 판시했습니다. 좁고 혼잡한 무도장에서의 우발적 접촉을 두고 추행으로 고소된 사안에서도, 추행 고의 유무와 진술의 신빙성을 이러한 기준으로 신중히 검토해볼 수 있습니다.',
        takeaway: '좁은 무도장 + 인파 밀집 + 우발적 접촉 결합 시 추행 고의 부재·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '떠밀려 닿았을 뿐인데 고소당했어요.',
        answer:
          '<strong>의사에 반한 고의 접촉인지 우발적 접촉인지가 핵심인 영역입니다.</strong> 혼잡·조도 등 객관적 상황을 구체적으로 정리하세요.',
      },
      {
        question: '진술만으로 유죄가 될 수 있나요?',
        answer:
          '<strong>진술이 합리적 의심을 배제할 만큼 신빙성이 있어야 하는 영역입니다.</strong> 진술의 모순·정황 불부합을 정리하세요.',
      },
      {
        question: 'CCTV가 흐릿한데 불리한가요?',
        answer:
          '<strong>객관 증거 부족 시 무죄추정·신빙성 다툼이 중요한 영역입니다.</strong> 동행·목격자·입장 기록을 함께 확보하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>혼잡한 현장의 우발적 접촉 정황이 고의 부재를 뒷받침하는 영역입니다.</strong> 접촉 부위·방식·우발성을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접촉 경위·고의 부재에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '클럽 애프터파티 무고 방어', href: '/guide/sex-crime/sex-crime-club-afterparty-falsely-accused-defense' },
      { label: '회식 후 음주 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '회사 회식 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-office-party-contact-falsely-accused-defense' },
      { label: '클럽 무도장 접촉 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-contact-track' },
    ],
  },
];
