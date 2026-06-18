import { SpokePage } from '../spoke-pages';

// batch101 fraud(6) + sex-crime(4) — 10개 (2026-06-18)
//
// 고유 존재 이유:
// 1. fraud-pet-puppy-deposit-no-delivery-track — 일반 분양 분쟁과 분기. '강아지 분양 예약금만 받고 잠적' 분양 예약금 편취 판단형 트랙(victim).
// 2. fraud-used-tractor-farm-machinery-no-delivery-track — 일반 중고거래 분쟁과 분기. '중고 농기계 트랙터 입금 후 미인도' 중고 농기계 편취 절차형 트랙(victim).
// 3. fraud-wedding-hall-prepaid-cancellation-no-refund-track — 일반 환불 분쟁과 분기. '예식장 선결제 후 폐업·환불 거부' 선결제 폐업 편취 판단형 트랙(victim).
// 4. fraud-overseas-job-recruitment-visa-fee-track — 일반 알선 분쟁과 분기. '해외 취업 알선 비자비만 가로채고 잠적' 비자비 편취 절차형 트랙(victim).
// 5. fraud-funeral-condolence-money-collection-embezzle-track — 일반 금전 다툼과 분기. '장례식 부의금 대신 수령 후 갈취' 부의금 편취 판단형 트랙(victim).
// 6. fraud-business-investment-pretext-borrowing-falsely-accused-defense — 일반 사기 무고류와 분기. '사업 투자금 명목 차용금 변제불능을 사기로 고소당함' 편취 고의·변제능력 방어 판단형 트랙(accused).
// 7. sex-crime-outdoor-festival-grope-track — 일반 추행류와 분기. '축제 인파 속 기습 추행을 당함' 야외 축제 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-physical-therapy-clinic-treatment-track — 일반 진료 분쟁과 분기. '물리치료실에서 치료를 빙자한 신체접촉을 당함' 치료 빙자 추행 절차형 트랙(victim).
// 9. sex-crime-festival-camping-tent-intrusion-track — 일반 주거침입류와 분기. '축제 캠핑장에서 텐트로 침입해 추행' 텐트 침입 기습추행 판단형 트랙(victim).
// 10. sex-crime-massage-shop-customer-accusation-falsely-accused-defense — 일반 성범죄 무고류와 분기. '마사지샵 손님이 추행으로 고소' 추행 진술 신빙성·무죄추정 방어 판단형 트랙(accused).

export const spokesBatch101FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-pet-puppy-deposit-no-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-puppy-deposit-no-delivery-track',
    keyword: '강아지 분양 예약금 받고 잠적 사기',
    questionKeyword: '온라인 분양 글·카페·SNS에서 ‘건강한 강아지를 분양한다, 예약금을 먼저 보내면 데려갈 날짜를 잡아준다’는 말을 믿고 분양 예약금을 입금했는데, 입금하고 나니 ‘아이가 아파서 며칠 미뤄야 한다, 곧 데려가게 해주겠다’는 핑계만 반복하다 결국 강아지도 보여주지 않고 연락이 끊겼어요. 알고 보니 같은 사진으로 여러 명에게 예약금을 받았거나 처음부터 분양할 강아지가 없었던 것 같은데, 이런 분양 예약금 편취를 사기로 신고하고 예약금을 돌려받을 수 있나요?',
    ctaKeyword: '강아지 분양 예약금 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '강아지 분양 예약금 받고 잠적 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '강아지 분양 예약금만 보냈는데 분양자가 잠적당했다면, 형법 제347조 사기·예약금 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 분양 글·반려동물 카페·SNS에서 ‘건강한 강아지를 합리적인 가격에 분양한다, 예약금을 먼저 보내면 데려갈 날짜를 잡아 보내준다’는 친절한 안내를 믿고, 마음에 둔 아이를 놓칠까 봐 분양 예약금을 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘아이가 갑자기 아파서 며칠 미뤄야 한다, 접종이 안 끝나 조금만 기다려 달라, 곧 데려가게 해주겠다’는 핑계가 며칠씩 반복되다가, 결국 강아지를 직접 보여주지도 않고 분양자가 게시글·연락처·계정을 닫고 사라져, 알고 보니 같은 강아지 사진으로 여러 명에게 예약금을 받았거나 처음부터 분양할 강아지 자체가 없었던 건 아닌지 의심되고 막막하실 거예요. 새 식구를 기다리는 설레는 마음으로 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 분양할 강아지나 이행 의사 없이 정상 분양처럼 가장해 예약금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 재물 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 대가를 공제한 차액이 아니라 교부받은 재물 전부로 보아야 한다고 본 사례 흐름이 있는 영역으로, 예약금 전부를 기준으로 편취 여부를 가려 다툴 여지가 있습니다. 예약금 수령 + 미인도 + 잠적 결합은 ‘분양 예약금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 강아지 분양 예약금 받고 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 분양 글·강아지 사진·예약금·인도 약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 분양할 강아지·이행 의사 없이 예약금을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 예약금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 인도 지연과 달리, 분양할 강아지나 이행 의사 없이 예약금만 받았는지가 판단의 분기점입니다. 분양 글·강아지 사진·인도 약속과 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 분양 글·강아지 사진·인도 약속 대화·예약금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 인도 핑계 반복·동일 사진 재게시·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지와 예약금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">강아지 분양 예약금 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양 글·강아지 사진·게시 화면 캡처 (거래 조건)</strong></li>\n<li><strong>인도 약속·접종·건강 안내 대화 (기망 정황)</strong></li>\n<li><strong>예약금 입금 내역·영수증 (피해 금액)</strong></li>\n<li><strong>인도 핑계 반복·미인도 정황 기록</strong></li>\n<li><strong>동일 사진 재게시·다른 피해자 정황 자료</strong></li>\n<li><strong>분양자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양 글과 강아지 사진은 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 같은 사진으로 여러 명에게 예약금을 받은 정황을 함께 잡으면 예약금만 받았는지 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 분양할 강아지·이행 의사 없이 예약금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 인도 지연인지 처음부터 편취였는지.</li>\n<li><strong>이중 분양</strong> — 같은 강아지로 여러 명에게 예약금을 받았는지.</li>\n<li><strong>편취액</strong> — 교부한 예약금 전부가 피해액인지.</li>\n<li><strong>분양자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (분양·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급 시 편취액은 교부받은 재물 전부',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 재물 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 교부받은 재물에서 대가 상당액을 공제한 차액이 아니라 교부받은 재물 전부로 보아야 한다고 판시했습니다. 예약금을 받고 강아지를 인도하지 않은 사안을 살펴볼 때에도 교부한 예약금 전부를 기준으로 편취액을 검토해볼 수 있습니다.',
        takeaway: '예약금 수령 + 미인도 + 잠적 결합 시 분양 예약금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '강아지가 아파서 늦는 것뿐 아닌가요?',
        answer:
          '<strong>분양할 강아지·이행 의사 없이 예약금만 받았는지가 핵심인 영역입니다.</strong> 인도 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '같은 사진을 여러 명에게 쓴 것 같아요.',
        answer:
          '<strong>동일 사진 재게시·이중 분양 정황은 편취 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '예약금만 보냈는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
      },
      {
        question: '예약금 전부를 피해액으로 볼 수 있나요?',
        answer:
          '<strong>편취액은 차액이 아니라 교부한 예약금 전부로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '분양자가 계정을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '반려동물 분양 허위매물 추적', href: '/guide/fraud/fraud-pet-adoption-false-listing-track' },
      { label: '반려동물 판매 병든 동물 추적', href: '/guide/fraud/fraud-pet-sale-sick-animal-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '농산물 미배송 추적', href: '/guide/fraud/fraud-farm-produce-nondelivery-track' },
    ],
  },

  // ─── 2. fraud-used-tractor-farm-machinery-no-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-tractor-farm-machinery-no-delivery-track',
    keyword: '중고 농기계 트랙터 입금 후 미인도 사기',
    questionKeyword: '중고 거래 사이트·농기계 카페에서 ‘상태 좋은 중고 트랙터·이앙기·콤바인을 시세보다 싸게 넘긴다, 멀어서 직접 못 보니 입금하면 화물로 보내준다’는 말을 믿고 농기계 대금을 먼저 입금했는데, 입금 뒤에 ‘운송 일정이 밀렸다, 곧 출발한다’는 핑계만 반복하다 결국 농기계도 안 오고 연락이 끊겼어요. 알고 보니 같은 사진을 돌려쓰며 여러 농가에서 대금을 받았던 것 같은데, 이런 중고 농기계 미인도를 사기로 신고하고 입금한 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '중고 농기계 트랙터 미인도 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 농기계 트랙터 입금 후 미인도 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '중고 트랙터 대금을 먼저 입금했는데 농기계가 안 오고 판매자가 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 사이트·농기계 직거래 카페·지역 커뮤니티에서 ‘관리 잘된 중고 트랙터·이앙기·콤바인을 시세보다 싸게 넘긴다, 거리가 멀어 직접 보긴 어렵지만 입금하면 화물·탁송으로 안전하게 보내준다’는 말을 믿고, 농사철을 놓칠까 마음이 급해 적지 않은 농기계 대금을 먼저 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘운송 기사 일정이 밀렸다, 부품 점검 때문에 며칠 늦는다, 내일은 꼭 출발한다’는 핑계가 며칠씩 반복되다가, 결국 농기계가 도착하지 않고 판매자가 게시글·연락처를 닫고 사라져, 알고 보니 같은 농기계 사진을 돌려쓰며 여러 농가에서 대금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 농사철 일손이 급해 보낸 큰돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 인도할 농기계나 이행 의사 없이 정상 거래처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 대가를 공제한 차액이 아니라 교부받은 금원 전부로 보아야 한다고 본 사례 흐름이 있는 영역으로, 입금한 대금 전부를 기준으로 편취 여부를 가려 다툴 여지가 있습니다. 농기계 대금 + 선입금 + 미인도·잠적 결합은 ‘중고 농기계 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 농기계 트랙터 입금 후 미인도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·기종·사진·대금·운송 약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 인도할 농기계·이행 의사 없이 대금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 입금한 대금·운송비 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 운송 지연과 달리, 인도할 농기계나 이행 의사 없이 선입금만 받았는지가 사기 판단의 분기점입니다. 판매 글·운송 약속과 미인도·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 판매 글·기종·사진·운송 약속 대화·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 운송 핑계 반복·동일 사진 재게시·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 농기계 트랙터 미인도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·기종·사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>운송·탁송 약속 대화 (기망 정황)</strong></li>\n<li><strong>농기계 대금·운송비 입금 내역 (피해 금액)</strong></li>\n<li><strong>운송 핑계 반복·미인도 정황 기록</strong></li>\n<li><strong>동일 사진 재게시·다른 농가 피해 정황 자료</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직거래 글과 농기계 사진은 삭제·차단으로 사라지기 쉬우니 기종·시세·운송 약속이 보이게 곧바로 캡처해두는 것이 중요합니다. 송금 직후 지급정지를 요청하면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 인도할 농기계·이행 의사 없이 대금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 운송 지연인지 처음부터 편취였는지.</li>\n<li><strong>다중 피해</strong> — 같은 사진으로 여러 농가에서 대금을 받았는지.</li>\n<li><strong>편취액</strong> — 입금한 대금·운송비 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·직거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급 시 편취액은 교부받은 금원 전부',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 기망행위를 수단으로 한 금원 편취 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 대가를 공제한 차액이 아니라 교부받은 금원 전부로 보아야 하고, 이는 특정경제범죄 가중처벌 등에 관한 법률 위반(사기)에서도 마찬가지라고 판시했습니다. 대금을 받고 농기계를 인도하지 않은 사안을 살펴볼 때에도 입금한 대금 전부를 기준으로 편취액을 검토해볼 수 있습니다.',
        takeaway: '농기계 대금 + 선입금 + 미인도·잠적 결합 시 중고 농기계 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '운송 일정이 밀려 늦는 것뿐 아닌가요?',
        answer:
          '<strong>인도할 농기계·이행 의사 없이 선입금만 받았는지가 핵심인 영역입니다.</strong> 운송 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '같은 사진으로 여러 농가에서 받은 것 같아요.',
        answer:
          '<strong>동일 사진 재게시·다중 피해 정황은 편취 다툼의 출발점인 영역입니다.</strong> 다른 피해 농가·게시글 정황을 모으세요.',
      },
      {
        question: '입금만 했는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
      },
      {
        question: '입금한 대금 전부를 받을 수 있나요?',
        answer:
          '<strong>편취액은 차액이 아니라 입금한 대금·운송비 전부로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '판매자가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '농산물 미배송 추적', href: '/guide/fraud/fraud-farm-produce-nondelivery-track' },
      { label: '온라인 게임 아이템 거래 추적', href: '/guide/fraud/fraud-online-game-item-trade-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
    ],
  },

  // ─── 3. fraud-wedding-hall-prepaid-cancellation-no-refund-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-prepaid-cancellation-no-refund-track',
    keyword: '예식장 선결제 후 폐업 환불 거부 사기',
    questionKeyword: '결혼식을 앞두고 예식장·웨딩홀에 계약금·식대·홀 사용료를 미리 선결제했는데, 예식 날짜가 다가오자 예식장이 갑자기 폐업하거나 운영이 어렵다며 예약을 취소하고도 선결제한 돈을 돌려주지 않아요. 알고 보니 이미 자금난에 빠져 정상 운영이 어려운 상황을 숨긴 채 여러 예비부부에게 선결제를 받았던 것 같은데, 이런 예식장 선결제 후 폐업·환불 거부를 사기로 신고하고 선결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '예식장 선결제 폐업 환불 거부 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '예식장 선결제 후 폐업 환불 거부 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '예식장에 선결제했는데 폐업하고 환불을 거부당했다면, 형법 제347조 사기·고지의무 위반 기망 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「결혼식을 앞두고 마음에 드는 예식장·웨딩홀을 정해 계약금·식대 보증·홀 사용료를 미리 선결제하고, 인생의 큰 행사를 차질 없이 준비하려 했던 분의 상황입니다. 그런데 예식 날짜가 다가오자 예식장이 갑자기 ‘운영이 어렵다, 폐업하게 됐다’며 예약을 일방적으로 취소하고도, 선결제한 계약금·식대를 돌려주지 않고 ‘환불은 어렵다, 자금이 없다’는 말만 반복해, 알고 보니 이미 심각한 자금난에 빠져 정상적으로 예식을 치를 수 없는 상황을 숨긴 채 여러 예비부부에게 선결제를 받아온 건 아닌지 의심되고 막막하실 거예요. 일생에 한 번뿐인 결혼식 비용을 잃을 위기라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상적으로 예식을 제공할 의사·능력이 없음을 알면서도 이를 알리지 않고 선결제를 받았다면 부작위에 의한 기망으로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 기망은 거래관계에서 지켜야 할 신의성실의 의무를 저버리는 행위를 말하고, 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 그 사정을 고지할 신의칙상 의무가 있어 이를 묵비하면 기망이 되어 사기죄를 구성하며, 현실적 손해 발생을 요건으로 하지 않는다고 본 사례 흐름이 있는 영역으로, 자금난·폐업 위험을 숨긴 채 선결제를 받았는지를 가려 다툴 여지가 있습니다. 선결제 + 폐업 + 환불 거부 결합은 ‘고지의무 위반 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 고지의무·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 선결제 후 폐업 환불 거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·고지의무·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 예식 계약서·견적·선결제 항목·결제 내역 정리.</li>\n<li><strong>② 고지의무·기망</strong> — 자금난·폐업 위험을 숨긴 채 선결제를 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 선결제한 계약금·식대 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 한국소비자원 피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 폐업과 달리, 정상 예식을 제공할 수 없는 자금난·폐업 위험을 알면서 이를 숨기고 선결제를 받았는지가 판단의 분기점입니다. 계약서·선결제 내역과 폐업·환불 거부 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 예식 계약서·견적서·선결제 영수증·약관을 보존.</li>\n<li><strong>2단계 — 폐업·환불 거부 입증 (즉시)</strong> — 예약 취소 통보·환불 거부 대화·폐업 공지를 시간순으로 확보.</li>\n<li><strong>3단계 — 환불·구제 요청 (병행)</strong> — 한국소비자원 피해구제 신청과 예식장에 환불을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사기 고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 선결제 폐업 환불 거부 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·고지의무·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>예식 계약서·견적서·약관 (거래 조건)</strong></li>\n<li><strong>선결제 계약금·식대 영수증·결제 내역 (피해 금액)</strong></li>\n<li><strong>예약 취소 통보·폐업 공지 자료 (기망 정황)</strong></li>\n<li><strong>환불 요구·거부 대화 기록</strong></li>\n<li><strong>자금난·운영 중단 정황·다른 피해자 정황 자료</strong></li>\n<li><strong>예식장 사업자·운영자·계좌 정보</strong></li>\n<li><strong>한국소비자원 피해구제 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐업 직전 공지·환불 거부 메시지는 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 자금난을 숨긴 채 여러 예비부부에게 선결제를 받은 정황을 함께 잡으면 고지의무 위반 기망을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무·기망</strong> — 자금난·폐업 위험을 알면서 숨기고 선결제를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 악화인지 처음부터 편취였는지.</li>\n<li><strong>손해 발생</strong> — 현실적 손해 없이도 기망·교부로 사기가 되는지.</li>\n<li><strong>편취액</strong> — 선결제한 계약금·식대 전부가 피해액인지.</li>\n<li><strong>책임 주체</strong> — 운영자·법인·관계자 누구에게 책임을 물을지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (사기 신고)</strong></li>\n<li><strong>한국소비자원 1372 (예식·웨딩 피해상담)</strong></li>\n<li><strong>공정거래위원회 (약관·환불 분쟁 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반의 부작위 기망과 손해 발생 불요',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 사기죄의 기망은 거래관계에서 지켜야 할 신의성실의 의무를 저버리는 행위를 말하고, 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 그 사정을 고지할 신의칙상 의무가 있어 이를 묵비하면 기망이 되어 사기죄를 구성하며, 사기죄는 기망으로 재물·이익을 취득하면 성립하고 현실적 손해 발생을 요건으로 하지 않는다고 판시했습니다. 자금난·폐업 위험을 숨긴 채 선결제를 받은 사안을 살펴볼 때에도 이러한 고지의무·기망 기준을 검토해볼 수 있습니다.',
        takeaway: '선결제 + 폐업 + 환불 거부 결합 시 고지의무 위반 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경영이 어려워 폐업한 것뿐 아닌가요?',
        answer:
          '<strong>정상 예식을 제공할 수 없는 위험을 알면서 숨기고 선결제를 받았는지가 핵심인 영역입니다.</strong> 계약 시점의 자금난 정황을 확보하세요.',
      },
      {
        question: '아무 말 안 한 것도 기망이 되나요?',
        answer:
          '<strong>고지할 신의칙상 의무가 있는 사정을 묵비하면 부작위 기망이 될 수 있는 영역입니다.</strong> 숨긴 사정과 고지 의무를 정리하세요.',
      },
      {
        question: '환불을 못 받은 손해가 있어야 사기인가요?',
        answer:
          '<strong>사기죄는 현실적 손해 발생을 요건으로 하지 않는 영역입니다.</strong> 기망과 선결제 교부 사실을 중심으로 정리하세요.',
      },
      {
        question: '선결제한 돈 전부를 피해액으로 볼 수 있나요?',
        answer:
          '<strong>선결제한 계약금·식대 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '소비자원에도 같이 신청할 수 있나요?',
        answer:
          '<strong>한국소비자원 피해구제와 형사·민사 절차를 병행 검토할 수 있는 영역입니다.</strong> 접수 기록을 함께 남기세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '헬스장 PT 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-pt-prepay-closure-track' },
      { label: '장례 선결제 취소 환불거부 추적', href: '/guide/fraud/fraud-funeral-prepay-cancel-refund-refuse-track' },
      { label: '학원 교재 선결제 폐업 잠적 추적', href: '/guide/fraud/fraud-academy-textbook-prepay-closure-vanish-track' },
    ],
  },

  // ─── 4. fraud-overseas-job-recruitment-visa-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-job-recruitment-visa-fee-track',
    keyword: '해외 취업 알선 비자비 가로채기 사기',
    questionKeyword: '해외 취업 알선 업체·브로커가 ‘좋은 조건의 해외 일자리를 연결해 줄 수 있다, 비자·항공·수속비를 먼저 내면 출국 절차를 진행해 준다’고 해서 비자비·수속비를 먼저 입금했는데, 입금 뒤에 ‘서류 심사가 늦어진다, 곧 비자가 나온다’는 핑계만 반복하다 결국 일자리도 비자도 없이 연락이 끊겼어요. 알고 보니 실제 알선할 일자리나 비자 진행 능력 없이 수속비만 받아 챙긴 것 같은데, 이런 해외 취업 비자비 편취를 사기로 신고하고 입금한 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '해외 취업 알선 비자비 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 취업 알선 비자비 가로채기 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '해외 취업 비자비를 먼저 입금했는데 일자리도 비자도 없이 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 취업 알선 업체·브로커·SNS 모집 글에서 ‘급여 조건이 좋은 해외 일자리를 연결해 줄 수 있다, 비자·항공·수속비를 먼저 내면 출국 절차와 현지 취업을 책임지고 진행해 준다’는 말을 믿고, 더 나은 일자리를 향한 기대로 비자비·수속비·알선비를 먼저 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘현지 회사 심사가 늦어진다, 비자 서류가 보완 중이다, 다음 주엔 출국 일정이 잡힌다’는 핑계가 몇 주씩 반복되다가, 결국 일자리도 비자도 나오지 않은 채 업체·브로커가 연락처·사무실을 닫고 사라져, 알고 보니 실제로 알선할 일자리나 비자를 진행할 능력 없이 수속비만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 새 출발을 위해 모은 큰돈을 잃을 위기라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 알선할 일자리·비자 진행 능력 없이 정상 알선처럼 가장해 수속비를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 기망으로 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 일부 지급되었거나 전체 재산상 손해가 없더라도 편취액은 차액이 아니라 교부받은 금원 전부로 보아야 한다고 본 사례 흐름이 있는 영역으로, 입금한 수속비 전부를 기준으로 편취 여부를 가려 다툴 여지가 있습니다. 비자비 선입금 + 미알선 + 잠적 결합은 ‘해외 취업 비자비 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미알선·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 취업 알선 비자비 가로채기 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미알선·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 모집 글·일자리 조건·비자비 안내·결제 내역 정리.</li>\n<li><strong>② 미알선·기망</strong> — 알선할 일자리·비자 진행 능력 없이 수속비를 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 입금한 비자비·수속비·알선비 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 수속 지연과 달리, 알선할 일자리나 비자 진행 능력 없이 수속비만 받았는지가 사기 판단의 분기점입니다. 모집 글·비자비 안내와 미알선·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 모집 글·일자리 조건·비자비 안내 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미알선·잠적 입증 (즉시)</strong> — 수속 핑계 반복·비자 미발급·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사기·직업안정법 위반 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 취업 알선 비자비 가로채기 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미알선·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>해외 취업 모집 글·일자리 조건 캡처 (거래 조건)</strong></li>\n<li><strong>비자·수속·출국 약속 대화 (기망 정황)</strong></li>\n<li><strong>비자비·수속비·알선비 입금 내역 (피해 금액)</strong></li>\n<li><strong>수속 핑계 반복·비자 미발급 정황 기록</strong></li>\n<li><strong>업체 미등록·다른 피해자 정황 자료</strong></li>\n<li><strong>업체·브로커·계정·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 모집 글과 비자비 안내 대화는 삭제·차단으로 사라지기 쉬우니 일자리 조건·수속비 항목이 보이게 곧바로 캡처해두는 것이 중요합니다. 송금 직후 지급정지를 요청하면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미알선·기망</strong> — 알선할 일자리·비자 진행 능력 없이 수속비를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 수속 지연인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 입금한 비자비·수속비 전부가 피해액인지.</li>\n<li><strong>업체 적법성</strong> — 직업소개·해외취업 알선 등록 업체인지.</li>\n<li><strong>브로커 특정</strong> — 업체·계정·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국산업인력공단 (해외취업 상담 안내)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망으로 금원 교부 시 편취액은 교부받은 금원 전부',
        summary:
          '대법원 2017도12649(대법원, 2017.12.22 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 지급되거나 담보가 제공되었더라도 편취액은 그 대가·담보 상당액을 공제한 차액이 아니라 교부받은 금원 전부로 보아야 한다고 판시했습니다. 비자비·수속비를 받고 일자리·비자를 진행하지 않은 사안을 살펴볼 때에도 입금한 금원 전부를 기준으로 편취액을 검토해볼 수 있습니다.',
        takeaway: '비자비 선입금 + 미알선 + 잠적 결합 시 해외 취업 비자비 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '서류 심사가 늦어진 것뿐 아닌가요?',
        answer:
          '<strong>알선할 일자리·비자 진행 능력 없이 수속비만 받았는지가 핵심인 영역입니다.</strong> 수속 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '일부는 절차를 진행해 줬다고 하면요?',
        answer:
          '<strong>대가가 일부 지급되어도 편취액은 차액이 아니라 입금 전부로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '등록되지 않은 업체였어요.',
        answer:
          '<strong>알선 업체 미등록은 사기·직업안정법 위반 다툼의 출발점인 영역입니다.</strong> 업체 등록 여부와 다른 피해자 정황을 모으세요.',
      },
      {
        question: '입금만 했는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 모집·약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
      },
      {
        question: '업체가 사무실을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '해외 취업 알선 브로커비 잠적 추적', href: '/guide/fraud/fraud-overseas-job-recruitment-broker-fee-vanish-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
      { label: '취업 알선 보증금 추적', href: '/guide/fraud/fraud-job-placement-deposit-track' },
      { label: '해외 유학원 선결제 잠적 추적', href: '/guide/fraud/fraud-overseas-study-agency-prepay-vanish-track' },
    ],
  },

  // ─── 5. fraud-funeral-condolence-money-collection-embezzle-track ───
  {
    domain: 'fraud',
    slug: 'fraud-funeral-condolence-money-collection-embezzle-track',
    keyword: '장례식 부의금 대신 수령 후 갈취 사기',
    questionKeyword: '갑작스러운 상을 당해 정신없는 와중에, 지인·친척·장례 도우미가 ‘부의금 접수와 정산을 대신 맡아주겠다’며 조문객들의 부의금을 접수·관리했는데, 장례가 끝난 뒤 받은 부의금을 제대로 전달하지 않고 일부를 빼돌리거나 정산을 미루며 ‘얼마 안 들어왔다, 정리 중이다’는 말만 반복했어요. 알고 보니 부의금 총액을 속이거나 처음부터 가로챌 생각으로 대신 수령했던 것 같은데, 이런 부의금 대신 수령 후 편취를 사기로 신고하고 부의금을 돌려받을 수 있나요?',
    ctaKeyword: '장례식 부의금 대신 수령 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '장례식 부의금 대신 수령 후 갈취 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '맡긴 부의금을 정산하지 않고 빼돌리거나 가로채당했다면, 형법 제347조 사기·횡령의 편취 판단과 회수까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「갑작스러운 부고로 상을 당해 경황 없이 장례를 치르는 와중에, 가까운 지인·친척·장례 도우미가 ‘부의금 접수와 명부 정리, 정산까지 대신 맡아주겠다’며 조문객들이 낸 부의금을 접수·보관·관리한 분의 상황입니다. 그런데 장례가 끝난 뒤에도 받은 부의금을 제대로 전달하지 않고, ‘생각보다 얼마 안 들어왔다, 아직 정리 중이다, 곧 정산해 주겠다’는 말만 반복하며 정산을 미루다가, 부의금 총액을 실제보다 적게 속이거나 일부를 빼돌린 정황이 드러나, 처음부터 부의금을 정산해 줄 의사 없이 가로챌 생각으로 대신 수령·관리한 건 아닌지 의심되고 막막하실 거예요. 슬픔 속에 믿고 맡긴 돈이라 더 답답하고 배신감이 크셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고, 보관 중인 타인 재물을 횡령한 경우에는 형법 제355조 횡령죄가 문제 될 수 있는 영역입니다. 정산해 줄 의사 없이 가로챌 생각으로 부의금 관리를 맡았거나 총액을 속였다면 기망·편취로 평가될 여지가 있는 영역입니다. 판례는 기망으로 재물·이익을 교부받은 사기죄와 위계로 업무를 방해한 업무방해죄가 보호법익·행위태양·기수 시기가 달라 별개로 성립하고 실체적 경합관계에 있다고 본 사례 흐름이 있는 영역으로, 부의금 관리 과정의 기망·편취 행위를 다른 행위와 나누어 가려 다툴 여지가 있습니다. 부의금 대신 수령 + 정산 미이행 + 빼돌림 결합은 ‘부의금 편취·횡령’ 다툼이 가능한 트랙입니다. 피해자라면 ① 위탁·관리 정리 ② 정산·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 회수·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장례식 부의금 대신 수령 후 갈취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위탁·정산·손해액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위탁·관리 정리</strong> — 부의금 접수·관리 위탁 경위·명부·정산 약속 정리.</li>\n<li><strong>② 정산·기망</strong> — 정산 의사 없이 가로채거나 총액을 속였는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 미정산·빼돌린 부의금 금액을 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·제355조 횡령 신고·고소 검토.</li>\n<li><strong>⑤ 회수·반환</strong> — 정산 요구·민사 반환·부당이득 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 정산 지연과 달리, 정산 의사 없이 가로채거나 부의금 총액을 속였는지가 판단의 분기점입니다. 부의금 명부·접수 정황과 정산 거부·빼돌림 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·대한법률구조공단 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위탁·관리 자료 보존 (즉시)</strong> — 부의금 관리 위탁 경위·명부·접수 정황·정산 약속을 정리·보존.</li>\n<li><strong>2단계 — 미정산·빼돌림 입증 (즉시)</strong> — 정산 거부·총액 축소·계좌 입출금 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 정산·반환 요구 (병행)</strong> — 부의금 명부·총액 대조로 정산과 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사기·횡령 고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 회수·반환 (2개월 내)</strong> — 민사 반환·부당이득 반환 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">장례식 부의금 대신 수령 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 위탁·정산·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>부의금 관리 위탁 경위·대화 기록 (위탁 사실)</strong></li>\n<li><strong>부의금 접수 명부·방명록·기록 (총액 기준)</strong></li>\n<li><strong>정산 약속·정산 거부 대화 (기망 정황)</strong></li>\n<li><strong>관리자 계좌 입출금·송금 내역 (빼돌림 정황)</strong></li>\n<li><strong>조문객·문상 기록·증인 진술</strong></li>\n<li><strong>총액과 정산액 차이 정리 자료</strong></li>\n<li><strong>관리자 인적사항·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부의금 명부·방명록과 정산 거부 대화는 분쟁의 핵심 증거이니 곧바로 확보·정리해두는 것이 중요합니다. 접수 총액과 실제 정산액의 차이를 명부로 대조하면 빼돌림·총액 축소를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정산·기망</strong> — 정산 의사 없이 가로채거나 총액을 속였는지.</li>\n<li><strong>사기·횡령 구분</strong> — 기망 교부형 사기인지 보관 중 횡령인지.</li>\n<li><strong>편취·횡령액</strong> — 미정산·빼돌린 부의금 금액이 얼마인지.</li>\n<li><strong>총액 입증</strong> — 명부·방명록으로 부의금 총액을 입증할 수 있는지.</li>\n<li><strong>책임 주체</strong> — 관리·정산을 맡은 사람이 누구인지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (사기·횡령 신고)</strong></li>\n<li><strong>대한변호사협회 법률상담 (절차 안내)</strong></li>\n<li><strong>금융감독원 1332 (계좌·송금 분쟁 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망 편취와 위계 업무방해는 별개로 성립',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 피해자를 기망하여 대금 등을 교부받은 특정경제범죄 가중처벌 등에 관한 법률 위반(사기)죄와 위계로 피해자의 업무를 방해한 업무방해죄는 보호법익·구성요건적 행위태양·기수 시기가 서로 다르고 어느 한 죄가 다른 죄의 불법·책임을 모두 포함하지 않으므로 별개로 성립하며 실체적 경합관계에 있다고 판시했습니다. 부의금 관리를 맡아 기망·편취한 행위와 다른 행위가 함께 문제 되는 사안을 살펴볼 때에도 이러한 죄수·성립 기준을 검토해볼 수 있습니다.',
        takeaway: '부의금 대신 수령 + 정산 미이행 + 빼돌림 결합 시 부의금 편취·횡령 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '정산이 늦은 것뿐 아닌가요?',
        answer:
          '<strong>정산 의사 없이 가로채거나 총액을 속였는지가 핵심인 영역입니다.</strong> 정산 약속과 거부·축소 정황을 확보하세요.',
      },
      {
        question: '사기인가요 횡령인가요?',
        answer:
          '<strong>기망 교부형은 사기, 보관 중 빼돌림은 횡령으로 나뉘어 검토되는 영역입니다.</strong> 관리 위탁 경위와 자금 흐름을 정리하세요.',
      },
      {
        question: '부의금 총액을 어떻게 입증하나요?',
        answer:
          '<strong>부의금 명부·방명록·조문객 진술이 총액 입증의 핵심인 영역입니다.</strong> 명부와 실제 정산액 차이를 대조하세요.',
      },
      {
        question: '빼돌린 금액만큼 받을 수 있나요?',
        answer:
          '<strong>미정산·빼돌린 부의금이 편취·횡령액으로 평가될 수 있는 영역입니다.</strong> 총액과 정산액 차액을 정리하세요.',
      },
      {
        question: '가까운 사이라 신고가 망설여져요.',
        answer:
          '<strong>친분과 별개로 정산·반환을 요구하고 형사·민사를 병행 검토할 수 있는 영역입니다.</strong> 먼저 정산 요구 기록을 남기세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '위탁판매 정산 지연 무고 방어', href: '/guide/fraud/fraud-consignment-sale-settlement-delay-falsely-accused-defense' },
      { label: '장례 선결제 취소 환불거부 추적', href: '/guide/fraud/fraud-funeral-prepay-cancel-refund-refuse-track' },
      { label: '명품 위탁 미정산 추적', href: '/guide/fraud/fraud-luxury-consignment-nonpayment-track' },
      { label: '사업 정산 무고 방어', href: '/guide/fraud/fraud-business-settlement-falsely-accused-defense' },
    ],
  },

  // ─── 6. fraud-business-investment-pretext-borrowing-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-investment-pretext-borrowing-falsely-accused-defense',
    keyword: '사업 투자금 명목 차용금 변제불능 사기 무고',
    questionKeyword: '운영하던 사업을 키우려고 지인에게 ‘투자 겸 차용’ 명목으로 돈을 빌리며 사업 전망과 변제 계획을 설명했는데, 이후 경기 악화·거래처 사정으로 사업이 어려워져 약속한 시기에 변제하지 못하자, 상대가 ‘처음부터 갚을 생각 없이 속여 돈을 받았다’며 저를 사기로 고소했어요. 저는 실제로 사업에 자금을 투입했고 담보·정산 시도도 했으며 변제할 의사가 있었는데, 단순 변제 지연이 형사 사기 사건이 돼 막막합니다. 이런 사실과 다른 사기 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '사업 투자금 차용금 변제불능 무고 편취 고의·변제능력 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '사업 투자금 차용금 변제불능 사기 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '사업 차용금을 못 갚자 사기로 고소당했다면, 형법 제347조 편취 고의와 변제 의사·능력·민사 분쟁의 구분을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「운영하던 사업을 키우거나 자금을 돌리려고, 가까운 지인·동업자에게 ‘투자 겸 차용’ 명목으로 돈을 빌리면서 사업 전망·수익 계획·변제 시기를 설명하고 자금을 받았는데, 이후 경기 악화·거래처 부도·매출 급감 같은 사정으로 사업이 어려워져 약속한 시기에 차용금을 변제하지 못한 분의 상황입니다. 그러자 돈을 빌려준 사람이 ‘처음부터 갚을 생각도 능력도 없이 속여 돈을 받았다’며 본인을 사기로 고소·고발해 한순간에 피의자가 되어, 정작 본인은 실제로 빌린 돈을 사업에 투입했고 일부 담보를 제공하거나 정산·변제를 시도했으며 변제할 의사가 분명히 있었다고 기억하는데, 단순 변제 지연·채무불이행이 형사 사기 사건으로 번져 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 사업이 무너진 데다 가해자로까지 몰려 형사 전과 위험이 더해져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 돈을 빌릴 당시 변제 의사·능력이 있었는지, 변제 지연이 사후 사정에 따른 채무불이행·민사 분쟁에 그치는지가 핵심 쟁점입니다. 판례는 타인으로부터 돈을 차용하면서 충분한 담보를 제공하였다면 특별한 사정이 없는 한 변제 의사·능력이 없었다고 볼 수 없고, 단순한 채무불이행 사실만으로 곧바로 편취 범의를 인정할 수 없다고 본 사례 흐름이 있는 영역으로, 자금 투입·담보 제공·변제 시도 정황을 들어 편취 고의를 다툴 수 있습니다. 사업 자금 차용 + 사후 변제불능 + 편취 고의 부재 결합은 ‘편취 고의·변제능력’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 차용·자금 정리 ② 편취 고의 ③ 변제 의사·능력 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업 투자금 차용금 변제불능 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용·편취 고의·변제능력·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용·자금 정리</strong> — 차용 경위·금액·변제 약속·자금 투입 내역 정리.</li>\n<li><strong>② 편취 고의</strong> — 돈을 빌릴 당시 편취의 고의가 있었는지 검토.</li>\n<li><strong>③ 변제 의사·능력</strong> — 담보 제공·변제 시도가 의사·능력을 뒷받침하는지 검토.</li>\n<li><strong>④ 정황·증거</strong> — 사업 투입·담보·정산 시도 자료로 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변제를 못 했다는 것만으로 곧 사기가 되는 것이 아니라, 돈을 빌릴 당시 편취 고의가 있었는지와 변제 지연이 사후 사정에 따른 채무불이행인지가 분기점입니다. 자금 투입·담보 제공·변제 시도 정황으로 고의 부재와 민사적 성격을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용·자금 정리 (즉시)</strong> — 차용 경위·금액·변제 약속·사업 자금 투입 흐름을 정리.</li>\n<li><strong>2단계 — 담보·변제 시도 확보 (1주)</strong> — 제공한 담보·일부 변제·정산 시도·연락 자료를 확보.</li>\n<li><strong>3단계 — 변제불능 사정 정리 (2주)</strong> — 경기 악화·거래처 부도 등 사후 사정으로 변제가 어려워진 경위를 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업 투자금 차용금 변제불능 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차용·편취 고의·변제능력 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·계약·변제 약속 대화 기록 (관계·약정)</strong></li>\n<li><strong>빌린 돈의 사업 투입·집행 내역 (고의 부재 정황)</strong></li>\n<li><strong>제공한 담보·근저당·보증 자료 (변제 능력)</strong></li>\n<li><strong>일부 변제·정산·연장 합의 기록 (이행 의사)</strong></li>\n<li><strong>경기 악화·거래처 부도 등 변제불능 사정 자료</strong></li>\n<li><strong>상대 주장 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘돈을 빌릴 당시 변제 의사·능력이 있었는지’와 ‘변제 지연이 사후 사정에 따른 채무불이행에 그치는지’입니다. 빌린 돈을 사업에 투입한 내역과 제공한 담보·변제 시도를 정돈하면 편취 의도가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 돈을 빌릴 당시 편취의 고의가 있었는지.</li>\n<li><strong>변제 의사·능력</strong> — 담보 제공·자금 투입이 의사·능력을 뒷받침하는지.</li>\n<li><strong>민사·형사 구분</strong> — 사후 사정에 따른 채무불이행·민사 분쟁에 그치는지.</li>\n<li><strong>채무불이행</strong> — 단순 변제 지연만으로 편취가 인정되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 충분한 담보 제공과 편취 범의의 구분',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 타인으로부터 돈을 차용하면서 충분한 담보를 제공하였다면 특별한 사정이 없는 한 그 차용금을 변제할 의사와 능력이 없었다고 볼 수 없다고 보면서도, 담보가치 평가에 중요한 사항을 숨기는 등 사정이 있으면 충분한 담보를 제공한 것으로 볼 수 없어 편취 범의가 인정될 수 있다고 판시했습니다. 사업 자금을 차용하고 변제하지 못한 사안에서 편취 고의를 다툴 때에도 담보 제공·변제 의사·자금 사용 정황을 종합해 검토해볼 수 있습니다.',
        takeaway: '사업 자금 차용 + 사후 변제불능 + 편취 고의 부재 결합 시 편취 고의·변제능력 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '변제 지연인데 사기로 고소당했어요.',
        answer:
          '<strong>편취 고의 유무와 민사·형사 구분이 핵심인 영역입니다.</strong> 차용 경위·자금 투입·담보 제공을 정리하세요.',
      },
      {
        question: '담보를 제공했는데도 불리한가요?',
        answer:
          '<strong>충분한 담보 제공은 변제 의사·능력을 뒷받침하는 영역입니다.</strong> 담보·근저당·보증 자료를 확보하세요.',
      },
      {
        question: '빌린 돈을 사업에 다 썼는데요.',
        answer:
          '<strong>자금을 실제 사업에 투입한 정황은 고의 부재를 뒷받침하는 영역입니다.</strong> 집행·지출 내역을 정리하세요.',
      },
      {
        question: '돈을 못 갚았다는 이유로 처벌되나요?',
        answer:
          '<strong>단순 채무불이행만으로는 편취 고의가 인정되지 않는 영역입니다.</strong> 변제 의사·정산 시도·연장 합의 정황을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>차용·자금에 관한 진술의 일관성이 중요한 영역입니다.</strong> 경위·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '사업 자금 대여 무고 방어', href: '/guide/fraud/fraud-business-fund-loan-falsely-accused-defense' },
      { label: '사업 대출 민사 분쟁 무고 방어', href: '/guide/fraud/fraud-business-loan-civil-dispute-falsely-accused-defense' },
      { label: '지인 대여 채무불이행 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-default-falsely-accused-defense' },
      { label: '동업 자본 손실 무고 방어', href: '/guide/fraud/fraud-business-partner-capital-loss-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-outdoor-festival-grope-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-outdoor-festival-grope-track',
    keyword: '축제 인파 속 기습 추행',
    questionKeyword: '야외 축제·불꽃놀이·공연·페스티벌 현장에 사람이 빽빽하게 몰린 곳에 서 있던 중, 옆·뒤에 있던 사람이 인파에 떠밀리는 척하며 제 몸을 만지거나 밀착해 큰 수치심을 느꼈어요. 사람이 너무 많아 누가 했는지 보이지 않고 떠밀린 우연인지 일부러 만진 건지 헷갈렸으며 어수선해 그 자리에서 항의도 못 했는데, 이런 축제 인파 속 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '축제 인파 기습 추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 인파 속 기습 추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '야외 축제 인파 속에서 떠밀리는 척 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·기습추행을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「야외 축제·불꽃놀이·콘서트·지역 페스티벌·거리 행사처럼 사람이 빽빽하게 몰린 현장에서 무대·공연을 보려고 서 있던 중, 옆이나 뒤에 있던 사람이 인파에 떠밀리는 척하면서 본인의 엉덩이·허벅지·허리·몸을 만지거나, 필요 이상으로 밀착해 신체를 비비듯 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 사람이 너무 많아 ‘인파에 떠밀려 부딪힌 우연인지, 일부러 만진 건지’ 헷갈리고, 누가 그랬는지 확실치 않으며, 어수선하고 위축돼 그 자리에서 곧바로 항의하거나 붙잡지 못한 채 자리를 옮겨, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 즐기러 간 축제에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 판단하고, 추행의 고의로 의사에 반하는 유형력을 행사하면 폭행행위 자체가 추행이 되는 기습추행이 성립할 수 있다고 본 사례 흐름이 있는 영역입니다. 인파 밀착 접촉 + 의사에 반한 접촉 + 떠밀림 핑계 결합은 ‘추행 해당성·기습추행’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 속 기습 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 행사·장소·일시·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 떠밀림에 따른 접촉 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 행사장·주변 CCTV·현장 영상·사진 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·현장 영상·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인파로 몸이 닿더라도 떠밀림에 따른 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 기습추행으로 평가될 수 있다는 점이 분기점입니다. 행사장 CCTV와 현장 영상·목격자를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 행사·장소·일시·접촉 부위·방식·반복·인상착의·위치 정리.</li>\n<li><strong>2단계 — CCTV·현장 영상 확보 (즉시)</strong> — 행사장·주변 CCTV, 관객·중계 영상·사진 보존을 요청.</li>\n<li><strong>3단계 — 주최·안전요원 협조 (직후)</strong> — 행사 주최·안전요원·경찰 부스에 영상 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 속 기습 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>행사·장소·일시·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·이탈 정황 기록</strong></li>\n<li><strong>행사장·주변 CCTV 보존 요청 자료</strong></li>\n<li><strong>현장 영상·사진·중계 화면 (특정·정황)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>주변 관객·안전요원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 축제 현장 CCTV·중계 영상은 보존 기간이 짧으므로 행사명·시간대·위치를 확인해 주최·관계기관에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소를 남기면 떠밀림에 따른 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행인 기습추행에 해당하는지.</li>\n<li><strong>우연·고의</strong> — 인파에 떠밀린 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·현장 영상·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 판단 기준과 기습추행',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 판단해야 하고, 신체접촉이 사회적으로 상당한 범주를 다소 벗어나 부적절하더라도 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르러야 강제추행이 된다고 판시했습니다. 인파 속에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성 기준을 검토해볼 수 있습니다.',
        takeaway: '인파 밀착 접촉 + 의사에 반한 접촉 + 떠밀림 핑계 결합 시 추행 해당성·기습추행 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '인파에 떠밀려 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>떠밀림에 따른 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '사람이 너무 많아 항의를 못 했어요.',
        answer:
          '<strong>혼잡·위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '밀착해 비비는 것도 추행인가요?',
        answer:
          '<strong>상당한 범위를 넘은 의사에 반한 유형력 행사는 기습추행으로 평가될 수 있는 영역입니다.</strong> 접촉 양상과 반복을 기록하세요.',
      },
      {
        question: '누가 만졌는지 특정할 수 있나요?',
        answer:
          '<strong>행사장 CCTV·현장 영상·목격자로 특정을 보강할 수 있는 영역입니다.</strong> 행사명·시간대·위치를 즉시 기록하세요.',
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
      { label: '축제 인파 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-track' },
      { label: '클럽 페스티벌 군중 추행 추적', href: '/guide/sex-crime/sex-crime-club-festival-crowd-molestation-track' },
      { label: '클럽 댄스플로어 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '혼잡 지하철 추행 추적', href: '/guide/sex-crime/sex-crime-crowded-subway-groping-track' },
    ],
  },

  // ─── 8. sex-crime-physical-therapy-clinic-treatment-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-physical-therapy-clinic-treatment-track',
    keyword: '물리치료실 치료 빙자 신체접촉 추행',
    questionKeyword: '병원·정형외과·한의원 물리치료실에서 치료를 받던 중, 물리치료사·시술자가 치료에 필요한 부위라며 가슴·엉덩이·골반 안쪽 등 내밀한 부위를 치료와 무관하게 만지거나 필요 이상으로 오래 접촉해 큰 수치심을 느꼈어요. 치료 행위인지 추행인지 헷갈렸고 환자라 그 자리에서 항의하기 어려웠으며 폐쇄된 치료실이라 목격자도 없었는데, 이런 치료 빙자 신체접촉을 강제추행으로 신고하고 처벌을 물으려면 어떻게 해야 하나요?',
    ctaKeyword: '물리치료실 치료 빙자 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '물리치료실 치료 빙자 신체접촉 추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '물리치료를 빙자해 내밀한 부위를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·치료 상당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「병원·정형외과·한의원·물리치료센터의 치료실에서 통증·재활 치료를 받던 중, 물리치료사·시술자가 ‘치료에 필요한 부위’라며 가슴·엉덩이·골반 안쪽·허벅지 안쪽 같은 내밀한 부위를 치료와 무관하게 만지거나, 정상 치료 범위를 넘어 필요 이상으로 오래·반복해 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. ‘치료 과정에서 닿은 것인지, 치료를 빙자해 추행한 것인지’ 헷갈리고, 환자 입장이라 그 자리에서 곧바로 항의하거나 거부하기 어려웠으며, 커튼·문이 닫힌 폐쇄된 치료실이라 목격자도 없어, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 몸을 맡기고 치료받는 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 판단하고, 치료·진료 등 정당한 행위로 볼 수 있는 범위를 벗어나 의사에 반하는 접촉으로 성적 자유를 침해하면 강제추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 치료 빙자 접촉 + 내밀 부위 접촉 + 치료 범위 일탈 결합은 ‘추행 해당성·치료 상당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 물리치료실 치료 빙자 신체접촉 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 병원·치료실·일시·치료 부위·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 정상 치료 범위를 벗어난 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 진료기록·치료 부위 기록·치료실·복도 CCTV 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 진료기록·예약·근무자 정보로 시술자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 치료 과정에서 신체가 닿더라도 정상 치료 범위를 벗어나 내밀한 부위를 의사에 반해 만지면 추행으로 평가될 수 있다는 점이 분기점입니다. 진료기록·치료 부위와 직후 호소를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 병원·치료실·일시·치료 부위·접촉 부위·방식·반복·시술자를 정리.</li>\n<li><strong>2단계 — 진료기록·CCTV 확보 (즉시)</strong> — 진료기록·치료 부위 기록·예약 내역, 치료실·복도 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 병원·관계자 협조 (직후)</strong> — 병원에 근무자·예약·기록 보존과 협조를 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">물리치료실 치료 빙자 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원·치료실·일시·치료 빙자 정황 메모</strong></li>\n<li><strong>치료 부위와 접촉 부위 불일치 기록</strong></li>\n<li><strong>진료기록·치료 내역·예약 내역 (정상 범위 대조)</strong></li>\n<li><strong>치료실·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>직후 호소·지인 연락·증상 기록</strong></li>\n<li><strong>시술자·근무자 인적사항 정보</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록과 치료 부위 기록은 정상 치료 범위와 실제 접촉을 대조하는 핵심 자료이니 곧바로 발급·확보해두는 것이 중요합니다. 치료 부위와 접촉 부위가 다른 점과 직후 호소를 남기면 치료 빙자 추행을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>치료 상당성</strong> — 정상 치료 범위를 벗어난 접촉인지.</li>\n<li><strong>치료·추행 구분</strong> — 치료 과정인지 치료를 빙자한 추행인지.</li>\n<li><strong>가해자 특정</strong> — 진료기록·예약·근무자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 진료기록·CCTV·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 행위태양의 종합 판단',
        summary:
          '대법원 2015도2390(대법원, 2018.06.28 선고) 영역에서 법원은 추행이란 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 말하며, 추행 해당 여부는 피해자의 의사·성별·연령·행위자와 피해자의 관계·행위에 이르게 된 경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 결정해야 한다는 취지로 판시했습니다. 치료를 빙자해 내밀한 부위를 의사에 반해 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성 기준을 검토해볼 수 있습니다.',
        takeaway: '치료 빙자 접촉 + 내밀 부위 접촉 + 치료 범위 일탈 결합 시 추행 해당성·치료 상당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '치료 과정에서 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>정상 치료 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 치료 부위와 실제 접촉 부위의 불일치를 기록하세요.',
      },
      {
        question: '환자라 그 자리에서 거부를 못 했어요.',
        answer:
          '<strong>치료 관계의 위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '폐쇄된 치료실이라 목격자가 없어요.',
        answer:
          '<strong>진료기록·치료 부위·직후 호소로 입증을 보강할 수 있는 영역입니다.</strong> 진료기록과 예약 내역을 확보하세요.',
      },
      {
        question: '내밀한 부위를 만진 것도 추행인가요?',
        answer:
          '<strong>치료 범위를 벗어난 의사에 반한 접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식·반복을 기록하세요.',
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
      { label: '병원 진료 의사 부적절 행위 추적', href: '/guide/sex-crime/sex-crime-hospital-treatment-doctor-inappropriate-act-track' },
      { label: '의원 치료 추행 추적', href: '/guide/sex-crime/sex-crime-clinic-treatment-track' },
      { label: '발 마사지샵 추행 추적', href: '/guide/sex-crime/sex-crime-foot-massage-shop-track' },
      { label: '헬스장 PT 부적절 접촉 추적', href: '/guide/sex-crime/sex-crime-gym-personal-trainer-inappropriate-contact-track' },
    ],
  },

  // ─── 9. sex-crime-festival-camping-tent-intrusion-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-camping-tent-intrusion-track',
    keyword: '축제 캠핑장 텐트 침입 추행',
    questionKeyword: '축제·캠핑 페스티벌에서 텐트를 치고 잠을 자던 중, 밤에 모르는 사람이 텐트 안으로 침입하거나 텐트를 열고 들어와 제 몸을 만지거나 껴안으려 해 큰 공포와 수치심을 느꼈어요. 소리를 지르자 도망갔지만 어두운 텐트라 얼굴을 제대로 못 봤고 술 취한 다른 캠핑객인지 일부러 노린 건지 헷갈렸는데, 이런 텐트 침입 추행을 주거침입·강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '축제 캠핑장 텐트 침입 추행 기습추행 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 캠핑장 텐트 침입 추행 — 5단계 기습추행 점검 | 로앤가이드',
      description:
        '캠핑장 텐트에 침입해 몸을 만져 공포를 느꼈다면, 형법 제298조 강제추행·기습추행과 주거침입을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「축제·캠핑 페스티벌·야영장에서 텐트를 치고 잠을 자거나 쉬던 중, 한밤중에 모르는 사람이 텐트 지퍼를 열고 안으로 침입하거나 텐트를 헤집고 들어와 본인의 몸을 만지거나 갑자기 껴안으려 해 큰 공포와 수치심을 느낀 분의 상황입니다. 놀라 소리를 지르자 침입자가 황급히 도망갔지만, 어두운 텐트 안이라 얼굴을 제대로 보지 못했고, ‘술 취해 텐트를 착각한 다른 캠핑객인지, 처음부터 노리고 침입한 건지’ 헷갈리며, 야영지라 곧바로 누구에게 도움을 청해야 할지 막막하셨을 거예요. 안전하게 쉬려던 잠자리에서 겪은 일이라 더 무섭고 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하며, 텐트 등 사실상 평온을 누리는 공간에 침입한 행위는 주거침입이 함께 문제 될 수 있는 영역입니다. 판례는 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수하면 추행 결과에 이르지 못해도 강제추행미수죄가 성립하고, 갑자기 뒤에서 껴안으려는 행위도 의사에 반하는 유형력 행사로서 기습추행의 실행 착수가 될 수 있다고 본 사례 흐름이 있는 영역입니다. 텐트 침입 + 의사에 반한 접촉 + 기습 시도 결합은 ‘기습추행·주거침입’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 기습추행·침입 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 캠핑장 텐트 침입 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·기습추행·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 캠핑장·텐트 위치·일시·침입 경위·접촉 부위·방식 정리.</li>\n<li><strong>② 기습추행·침입</strong> — 의사에 반한 접촉·껴안기 시도와 텐트 침입이 성립하는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 캠핑장·진입로 CCTV, 입장·예약 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·입장·예약·목격자로 침입자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉이 짧게 끝났더라도 의사에 반한 유형력 행사로 껴안으려 한 행위는 기습추행의 실행 착수로 평가될 수 있고, 텐트 침입은 주거침입이 함께 문제 될 수 있다는 점이 분기점입니다. 캠핑장 CCTV와 입장·예약 기록을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 캠핑장·텐트 위치·일시·침입 경위·접촉 부위·방식·인상착의 정리.</li>\n<li><strong>2단계 — CCTV·입장 기록 확보 (즉시)</strong> — 캠핑장·진입로 CCTV, 입장·예약·차량 기록 보존을 요청.</li>\n<li><strong>3단계 — 운영·안전요원 협조 (직후)</strong> — 캠핑장 관리자·안전요원에게 영상·입장 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (즉시·준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 캠핑장 텐트 침입 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·기습추행·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>캠핑장·텐트 위치·일시·침입 정황 메모</strong></li>\n<li><strong>침입자 인상착의·도주 방향 기록</strong></li>\n<li><strong>캠핑장·진입로 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장·예약·차량 기록 (특정·동선)</strong></li>\n<li><strong>직후 호소·동행자·지인 연락 기록</strong></li>\n<li><strong>주변 캠핑객·안전요원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 캠핑장 CCTV·입장 기록은 보존 기간이 짧으므로 구역·시간대·차량 정보를 확인해 관리자에 곧바로 보존을 요청하는 것이 중요합니다. 침입 경위·접촉 양상과 직후 호소를 남기면 기습추행·주거침입을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기습추행 착수</strong> — 껴안으려는 의사에 반한 유형력이 실행 착수인지.</li>\n<li><strong>주거침입</strong> — 텐트 침입이 사실상 평온 침해로 성립하는지.</li>\n<li><strong>우연·고의</strong> — 텐트를 착각한 우연인지 노린 침입인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·입장·예약 기록으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 실행 착수와 강제추행미수',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 추행의 고의로 상대방의 의사에 반하는 유형력을 행사해 실행에 착수하였으나 추행 결과에 이르지 못하면 강제추행미수죄가 성립하고, 이러한 법리는 폭행행위 자체가 추행인 기습추행에도 마찬가지로 적용되며, 갑자기 뒤에서 껴안으려고 양팔을 든 행위도 의사에 반하는 유형력 행사로서 기습추행의 실행 착수로 볼 수 있다고 판시했습니다. 텐트에 침입해 의사에 반해 껴안으려 한 사안을 살펴볼 때에도 이러한 기습추행·실행 착수 기준을 검토해볼 수 있습니다.',
        takeaway: '텐트 침입 + 의사에 반한 접촉 + 기습 시도 결합 시 기습추행·주거침입 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '몸에 닿기 전에 도망갔는데 처벌되나요?',
        answer:
          '<strong>의사에 반한 유형력으로 껴안으려 한 행위는 기습추행 실행 착수로 평가될 수 있는 영역입니다.</strong> 침입·접촉 시도 경위를 구체적으로 남기세요.',
      },
      {
        question: '텐트도 주거침입이 되나요?',
        answer:
          '<strong>사실상 평온을 누리는 텐트 침입은 주거침입이 함께 문제 될 수 있는 영역입니다.</strong> 침입 경위와 위치를 정리하세요.',
      },
      {
        question: '술 취해 텐트를 착각했다고 하면요?',
        answer:
          '<strong>우연한 착각인지 의사에 반한 접촉 시도인지가 다툼점인 영역입니다.</strong> 접촉 양상·도주 정황을 기록하세요.',
      },
      {
        question: '어두워서 얼굴을 못 봤어요.',
        answer:
          '<strong>캠핑장 CCTV·입장·예약 기록으로 특정을 보강할 수 있는 영역입니다.</strong> 구역·시간대·차량 정보를 즉시 기록하세요.',
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
      { label: '축제 군중 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-track' },
      { label: '출장 숙소 동료 추행 추적', href: '/guide/sex-crime/sex-crime-business-trip-lodging-coworker-track' },
      { label: '엘리베이터 낯선 사람 밀착 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-close-contact-track' },
      { label: '클럽 댄스플로어 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-stranger-groping-track' },
    ],
  },

  // ─── 10. sex-crime-massage-shop-customer-accusation-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-customer-accusation-falsely-accused-defense',
    keyword: '마사지샵 손님 추행 무고 방어',
    questionKeyword: '마사지샵·안마원·스파에서 마사지·관리 업무를 하던 중, 손님에게 정상적인 관리 과정에서 신체를 만졌을 뿐인데 손님이 ‘마사지를 빙자해 추행했다’며 저를 강제추행으로 고소했어요. 저는 시술 부위와 절차대로 관리했고 추행할 의도가 전혀 없었는데, 폐쇄된 관리실이라 목격자가 없고 손님 진술만으로 사건이 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '마사지샵 손님 추행 무고 진술 신빙성·무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '마사지샵 손님 추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '마사지 관리 중 손님에게 추행으로 고소당했다면, 형법 제298조 추행 해당성과 진술 신빙성·무죄추정을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「마사지샵·안마원·스파·피부관리실에서 마사지·관리 업무를 하던 중, 손님의 어깨·등·다리 등 시술 부위를 정상적인 관리 절차에 따라 만졌을 뿐인데, 손님이 ‘마사지를 빙자해 내밀한 부위를 만지는 등 추행을 했다’며 본인을 강제추행으로 고소·고발해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 정해진 시술 부위와 관리 절차대로 손을 댔고 추행할 의도가 전혀 없었다고 기억하는데, 커튼·문이 닫힌 폐쇄된 관리실이라 목격자가 없고 CCTV도 없어 손님의 일방적 진술만으로 사건이 진행되어, 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 생계가 걸린 일터에서 한 정상 시술이 추행으로 몰려 형사 전과 위험까지 더해져 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행 해당 여부는 행위태양·경위·객관적 상황 등을 종합해 신중히 판단하는 영역입니다. 혐의를 받고 있다면, 시술이 정상 관리 범위였는지, 손님의 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄 확정 전까지 무죄로 추정되고 유죄 인정은 합리적 의심이 없을 정도의 증명에 이르러야 하며, 피해자 진술이 유일한 증거인 경우 진술 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 합리적 의심 없는 신빙성이 있어야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역으로, 시술 절차·진술 모순을 들어 추행 성립과 진술 신빙성을 다툴 수 있습니다. 정상 시술 + 손님 일방 진술 + 추행 고의 부재 결합은 ‘진술 신빙성·무죄추정’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 시술·관계 정리 ② 추행 해당성 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 손님 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시술·추행 해당성·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시술·관계 정리</strong> — 예약·시술 부위·관리 절차·손님과의 경위 정리.</li>\n<li><strong>② 추행 해당성</strong> — 정상 관리 범위 내 시술이었는지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 손님 진술의 합리성·일관성·객관적 정황 부합을 검토.</li>\n<li><strong>④ 정황·증거</strong> — 예약·시술 기록·CCTV·동료 진술로 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 손님이 추행을 주장한다고 곧 유죄가 되는 것이 아니라, 시술이 정상 관리 범위였는지와 손님 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지가 분기점입니다. 시술 절차·예약 기록과 진술 모순으로 추행 성립과 진술 신빙성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시술·관계 정리 (즉시)</strong> — 예약·시술 부위·관리 절차·손님과의 경위를 정리.</li>\n<li><strong>2단계 — 시술 기록·CCTV 확보 (1주)</strong> — 예약·시술 기록, 대기실·복도 CCTV, 동료 진술을 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 손님 진술의 시점·부위·정황 모순과 객관적 사실 불부합을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 추행 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 손님 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 시술·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약·접수·시술 부위 기록 (정상 범위)</strong></li>\n<li><strong>관리 절차·매뉴얼·표준 시술 자료 (절차 부합)</strong></li>\n<li><strong>대기실·복도 CCTV·출입 기록 (정황)</strong></li>\n<li><strong>동료·관리자 진술·근무표 (목격·정황)</strong></li>\n<li><strong>손님 진술의 시점·부위·정황 모순 정리 자료</strong></li>\n<li><strong>손님과의 대화·항의·요구 경위 기록</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘시술이 정상 관리 범위였는지’와 ‘손님 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지’입니다. 시술 부위·관리 절차 자료와 손님 진술의 모순·불부합을 정돈하면 추행 성립과 진술 신빙성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술이 정상 관리 범위였는지 추행인지.</li>\n<li><strong>진술 신빙성</strong> — 손님 진술이 합리적 의심을 배제할 정도인지.</li>\n<li><strong>무죄추정</strong> — 유일 진술만으로 유죄로 단정할 수 없는지.</li>\n<li><strong>객관적 정황</strong> — 시술 기록·CCTV·동료 진술과 부합하는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 유일 진술의 신빙성 판단',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄 확정 전까지 무죄로 추정되고 유죄 인정은 합리적 의심이 없을 정도의 증명에 이르러야 하며, 통상 추행이 이루어질 것으로 예상하기 어려운 상황에서 피해자 진술이 유일한 증거인 경우 진술 자체의 합리성·타당성뿐 아니라 객관적 정황과 경험칙에 비추어 합리적 의심을 배제할 정도의 신빙성이 있어야 유죄로 판단할 수 있다고 판시했습니다. 손님 진술만으로 추행이 다투어지는 사안을 살펴볼 때에도 이러한 무죄추정·진술 신빙성 기준을 검토해볼 수 있습니다.',
        takeaway: '정상 시술 + 손님 일방 진술 + 추행 고의 부재 결합 시 진술 신빙성·무죄추정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '정상 시술인데 추행으로 고소당했어요.',
        answer:
          '<strong>시술이 정상 관리 범위였는지와 진술 신빙성이 핵심인 영역입니다.</strong> 예약·시술 부위·관리 절차 자료를 정리하세요.',
      },
      {
        question: '목격자도 CCTV도 없는데 불리한가요?',
        answer:
          '<strong>유일 진술만으로는 합리적 의심 없는 신빙성이 있어야 유죄로 판단되는 영역입니다.</strong> 진술 모순·객관적 정황 불부합을 모으세요.',
      },
      {
        question: '손님 진술만으로 처벌되나요?',
        answer:
          '<strong>진술 자체의 합리성과 객관적 정황 부합이 함께 요구되는 영역입니다.</strong> 시술 기록·동료 진술로 정황을 보강하세요.',
      },
      {
        question: '무죄추정은 어떻게 작용하나요?',
        answer:
          '<strong>유죄가 확정될 때까지 무죄로 추정되고 의심스러우면 피고인의 이익으로 판단되는 영역입니다.</strong> 다툼 지점을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>시술 부위·절차에 관한 진술의 일관성이 중요한 영역입니다.</strong> 시술 기록을 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '운전 교습 접촉 방어 추적', href: '/guide/sex-crime/sex-crime-driving-lesson-touch-defense-track' },
      { label: '회식 술자리 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '소개팅 동의 무고 방어', href: '/guide/sex-crime/sex-crime-blind-date-consent-falsely-accused-defense' },
      { label: '직장 누명 성범죄 방어', href: '/guide/sex-crime/sex-crime-false-charge-workplace' },
    ],
  },
];
