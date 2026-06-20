import { SpokePage } from '../spoke-pages';

// batch103 fraud(6) + sex-crime(4) — 10개 (2026-06-20)
//
// 고유 존재 이유:
// 1. fraud-used-refrigerator-direct-deal-deposit-no-delivery-track — 일반 중고거래 분쟁과 분기. '중고 냉장고 직거래 입금 후 미인도' 대형가전 직거래 미인도 편취 판단형 트랙(victim).
// 2. fraud-online-lecture-prepaid-no-service-track — 일반 환불 분쟁과 분기. '온라인 강의 선결제 후 서비스 미제공' 강의 선결제 편취 판단형 트랙(victim).
// 3. fraud-puppy-adoption-reservation-deposit-track — 일반 분양 분쟁과 분기. '반려동물 분양 예약금 입금 후 잠적' 예약금 편취 절차형 트랙(victim).
// 4. fraud-rental-car-booking-deposit-fake-track — 일반 렌터카 분쟁과 분기. '렌터카 예약 보증금 허위 유도' 보증금 편취 판단형 트랙(victim).
// 5. fraud-shopping-mall-bulk-order-nonpayment-track — 일반 대금 분쟁과 분기. '쇼핑몰 대량주문 후 대금 미지급' 납품대금 편취 절차형 트랙(victim).
// 6. fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense — 일반 사기 무고류와 분기. '지인 금전 차용 변제의사 사기로 고소당함' 편취 고의·변제의사 방어 판단형 트랙(accused).
// 7. sex-crime-taxi-passenger-driver-touch-report-track — 일반 추행류와 분기. '택시 승객이 운전기사에게 추행을 당함' 기습추행 폭행 해당성 판단형 트랙(victim).
// 8. sex-crime-festival-crowd-grope-report-track — 일반 추행류와 분기. '축제 인파 속 기습 추행을 당함' 추행 해당성 판단형 트랙(victim).
// 9. sex-crime-massage-shop-forced-touch-report-track — 일반 추행류와 분기. '마사지샵에서 불법 추행을 당함' 시술 가장 추행 해당성 절차형 트랙(victim).
// 10. sex-crime-company-dinner-coworker-accusation-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식에서 동료가 추행으로 고소' 추행 고의·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch103FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-refrigerator-direct-deal-deposit-no-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-refrigerator-direct-deal-deposit-no-delivery-track',
    keyword: '중고 냉장고 직거래 입금 후 미인도 사기',
    questionKeyword: '중고 거래 사이트·동네 직거래 카페에서 ‘이사·매장 정리로 멀쩡한 중고 냉장고를 싸게 넘긴다, 대형이라 직접 못 가지러 오니 입금하면 용달·화물로 보내준다’는 말을 믿고 냉장고 대금과 운송비를 먼저 입금했는데, 입금 뒤에 ‘기사님이 곧 출발한다, 송장 번호를 보내준다’는 핑계만 반복하다 결국 물건도 안 오고 연락이 끊겼어요. 알고 보니 같은 냉장고 사진을 돌려쓰며 여러 명에게 대금을 받았던 것 같은데, 이런 중고 냉장고 미인도를 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 냉장고 직거래 미인도 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 냉장고 직거래 입금 후 미인도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '중고 냉장고 대금·운송비를 먼저 입금했는데 물건이 안 오고 판매자가 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 사이트·동네 직거래 카페·중고 가전 채팅방에서 ‘이사·매장 정리로 상태 좋은 중고 냉장고를 시세보다 싸게 넘긴다, 워낙 크고 무거워 직접 가지러 오긴 어려우니 입금하면 용달·화물 기사를 통해 안전하게 보내준다’는 친절한 안내를 믿고, 좋은 매물을 놓칠까 봐 냉장고 대금과 운송비를 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘오늘 기사님이 출발했다, 송장 번호는 곧 보내준다, 화물 사정으로 하루만 늦는다’는 핑계가 며칠씩 반복되다가, 결국 물건이 도착하지 않고 판매자가 게시글·연락처·계정을 닫고 사라져, 알고 보니 같은 냉장고 사진을 돌려쓰며 여러 명에게 대금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 살림에 꼭 필요해 마음먹고 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 인도할 물건이나 이행 의사 없이 정상 직거래처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 곧 사기죄가 성립하고, 상당한 대가가 일부 지급되었더라도 편취액은 그 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 운송비까지 포함한 입금 전부를 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 대금·운송비 선입금 + 미인도 + 잠적 결합은 ‘직거래 미인도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 냉장고 직거래 입금 후 미인도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·냉장고 사진·대금·운송비·발송 약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 인도할 물건·이행 의사 없이 대금을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 대금·운송비 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 발송 지연과 달리, 인도할 물건이나 이행 의사 없이 대금만 받았는지가 판단의 분기점입니다. 판매 글·냉장고 사진·발송 약속과 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·냉장고 사진·발송 약속 대화·대금·운송비 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 발송 핑계 반복·동일 사진 재게시·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지와 대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 냉장고 직거래 미인도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·냉장고 사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>발송·운송 약속 대화 (기망 정황)</strong></li>\n<li><strong>냉장고 대금·운송비 입금 내역 (피해 금액)</strong></li>\n<li><strong>발송 핑계 반복·미인도 정황 기록</strong></li>\n<li><strong>동일 사진 재게시·다른 피해자 정황 자료</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매 글과 냉장고 사진은 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 운송비까지 포함한 입금 전부를 정리하면 편취액과 손해를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 인도할 물건·이행 의사 없이 대금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 발송 지연인지 처음부터 편취였는지.</li>\n<li><strong>다중 피해·죄수</strong> — 같은 사진으로 여러 명에게 받아 피해자별 죄가 되는지.</li>\n<li><strong>편취액</strong> — 교부한 대금·운송비 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·직거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대가 일부 지급 시 편취액의 산정',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서는 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 곧 사기죄가 성립하고, 상당한 대가가 지급되었거나 전체 재산상 손해가 없더라도 사기죄 성립에는 영향이 없으므로 대가가 일부 지급된 경우에도 편취액은 그 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 다만 특정경제범죄법 제3조를 적용할 때에는 편취 재산상 이익의 가액을 엄격히 산정해야 하고 가액을 구체적으로 산정할 수 없으면 제3조를 적용할 수 없다고 보았습니다. 운송비까지 함께 입금하고 물건을 인도받지 못한 사안을 살펴볼 때에도 입금 전부를 기준으로 편취 여부와 손해액을 검토해볼 수 있습니다.',
        takeaway: '대금·운송비 선입금 + 미인도 + 잠적 결합 시 직거래 미인도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '화물이 늦어 안 온 것뿐 아닌가요?',
        answer:
          '<strong>인도할 물건·이행 의사 없이 대금만 받았는지가 핵심인 영역입니다.</strong> 발송 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '같은 사진을 여러 명에게 쓴 것 같아요.',
        answer:
          '<strong>동일 사진 재게시·다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '운송비도 피해액에 포함되나요?',
        answer:
          '<strong>교부한 대금·운송비 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '입금만 했는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
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
      { label: '부동산 직거래 보증금 잠적 추적', href: '/guide/fraud/fraud-real-estate-direct-deal-deposit-vanish' },
      { label: '반려동물 분양 예약금 미인도 추적', href: '/guide/fraud/fraud-pet-puppy-deposit-no-delivery-track' },
      { label: '중고 카메라 렌즈 미인도 추적', href: '/guide/fraud/fraud-secondhand-camera-lens-direct-no-delivery-track' },
      { label: '중고 농기계 미인도 추적', href: '/guide/fraud/fraud-used-tractor-farm-machinery-no-delivery-track' },
    ],
  },

  // ─── 2. fraud-online-lecture-prepaid-no-service-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-prepaid-no-service-track',
    keyword: '온라인 강의 선결제 후 서비스 미제공 사기',
    questionKeyword: '온라인 강의 플랫폼·SNS 광고에서 ‘이 과정만 결제하면 평생 수강·1:1 첨삭·취업 연계까지 다 제공한다’는 말을 믿고 강의료를 한 번에 선결제했는데, 막상 결제 후에는 약속한 강의가 일부만 열리거나 첨삭·상담이 전혀 안 되고, 문의하면 ‘준비 중이다, 곧 오픈한다’는 핑계만 반복하다 결국 운영자와 연락이 끊겼어요. 알고 보니 처음부터 제공할 강의·서비스 없이 결제만 받았던 것 같은데, 이런 온라인 강의 선결제 후 서비스 미제공을 사기로 신고하고 결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '온라인 강의 선결제 미제공 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 선결제 후 서비스 미제공 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '온라인 강의료를 선결제했는데 강의·서비스가 제공되지 않고 운영자가 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 강의 플랫폼·인터넷 강의 사이트·SNS 광고에서 ‘이 과정만 결제하면 평생 무제한 수강·1:1 첨삭·전문가 상담·취업 연계까지 전부 제공한다’는 솔깃한 안내를 믿고, 자기계발·취업 준비를 위해 적지 않은 강의료를 한 번에 선결제한 분의 상황입니다. 그런데 막상 결제하고 나니 약속한 강의가 일부만 열리거나 핵심 콘텐츠가 비어 있고, 1:1 첨삭·상담·취업 연계는 전혀 이루어지지 않은 채, 문의할 때마다 ‘콘텐츠 준비 중이다, 다음 달에 오픈한다, 담당자가 곧 연락한다’는 핑계가 반복되다가, 결국 운영자·고객센터가 응답을 끊고 사이트마저 닫혀, 알고 보니 처음부터 제공할 강의·서비스 없이 결제만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 큰맘 먹고 낸 강의료를 통째로 잃을 위기라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 제공할 강의·서비스나 이행 의사 없이 정상 서비스처럼 가장해 결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 거래 당시를 기준으로 대금을 변제·이행할 의사나 능력이 없음에도 이행할 것처럼 거짓말을 해 재물을 받았는지에 따라 편취 범의를 판단하고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 본 사례 흐름이 있는 영역으로, 결제 당시 서비스 제공 의사·능력이 있었는지를 가려 편취를 다툴 여지가 있습니다. 강의료 선결제 + 서비스 미제공 + 잠적 결합은 ‘강의 선결제 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·약속 정리 ② 미제공·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 선결제 후 서비스 미제공 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·미제공·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·약속 정리</strong> — 강의 광고·제공 약속·결제 금액·결제 내역 정리.</li>\n<li><strong>② 미제공·기망</strong> — 제공할 강의·서비스·이행 의사 없이 결제를 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 결제한 강의료 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 카드 할부항변·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 서비스 부실과 달리, 제공할 강의·서비스나 이행 의사 없이 결제만 받았는지가 판단의 분기점입니다. 광고·제공 약속과 미제공·핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·약속 자료 보존 (즉시)</strong> — 강의 광고·제공 약속·결제 영수증·약관을 캡처 보존.</li>\n<li><strong>2단계 — 미제공·잠적 입증 (즉시)</strong> — 강의 미오픈·첨삭 미이행·핑계 반복·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 피해구제·할부항변 (병행)</strong> — 한국소비자원 피해구제와 신용카드 할부항변권을 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 선결제 미제공 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·미제공·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>강의 광고·제공 약속 캡처 (거래 조건)</strong></li>\n<li><strong>평생 수강·첨삭·연계 안내 대화 (기망 정황)</strong></li>\n<li><strong>강의료 결제 내역·영수증 (피해 금액)</strong></li>\n<li><strong>강의 미오픈·첨삭 미이행 정황 기록</strong></li>\n<li><strong>준비 중 핑계 반복·다른 피해자 정황 자료</strong></li>\n<li><strong>운영자·플랫폼·사업자·계좌 정보</strong></li>\n<li><strong>카드 할부항변·피해구제 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 광고 문구와 제공 약속·강의 화면은 사이트가 닫히면 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 카드 할부로 결제했다면 할부항변권을 함께 알아보면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미제공·기망</strong> — 제공할 강의·서비스·이행 의사 없이 결제를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 서비스 부실인지 처음부터 편취였는지.</li>\n<li><strong>광고·약속</strong> — 평생 수강·첨삭·연계 약속이 어디까지였는지.</li>\n<li><strong>편취액</strong> — 결제한 강의료 전부가 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 사업자·계정·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 강의·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 물품·금원 거래에서 편취 범의의 판단',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 범의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 판시했습니다. 특히 거래 당시를 기준으로 대금을 변제·이행할 의사나 능력이 없음에도 이행할 것처럼 거짓말을 해 재물을 받았다면 사기죄가 성립한다고 보았습니다. 강의료를 선결제했으나 강의·서비스가 제공되지 않은 사안을 살펴볼 때에도 결제 당시 서비스 제공 의사·능력과 편취 범의를 검토해볼 수 있습니다.',
        takeaway: '강의료 선결제 + 서비스 미제공 + 잠적 결합 시 강의 선결제 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '서비스가 부실했던 것뿐 아닌가요?',
        answer:
          '<strong>제공할 강의·서비스·이행 의사 없이 결제만 받았는지가 핵심인 영역입니다.</strong> 광고·제공 약속과 미제공 정황을 확보하세요.',
      },
      {
        question: '광고와 다르게 제공됐는데 사기인가요?',
        answer:
          '<strong>광고·약속과 실제 제공의 차이가 편취 다툼의 출발점인 영역입니다.</strong> 평생 수강·첨삭·연계 약속을 캡처하세요.',
      },
      {
        question: '결제한 강의료 전부를 피해액으로 보나요?',
        answer:
          '<strong>결제한 강의료 전부가 편취·피해액으로 평가될 수 있는 영역입니다.</strong> 결제 총액과 영수증을 정리하세요.',
      },
      {
        question: '카드로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 결제는 할부항변권으로 잔여 대금 지급 거절을 검토할 수 있는 영역입니다.</strong> 카드사에 항변권을 함께 알아보세요.',
      },
      {
        question: '운영자가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>피해구제·계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 사업자·계좌 정보를 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 강의 결제 후 취소 추적', href: '/guide/fraud/fraud-online-class-lecture-paid-cancelled-track' },
      { label: '온라인 강의 평생회원권 추적', href: '/guide/fraud/fraud-online-lecture-lifetime-membership-track' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
      { label: '온라인 강의 환불 거부 추적', href: '/guide/fraud/fraud-online-course-refund-refusal-track' },
    ],
  },

  // ─── 3. fraud-puppy-adoption-reservation-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-puppy-adoption-reservation-deposit-track',
    keyword: '반려동물 분양 예약금 입금 후 잠적 사기',
    questionKeyword: '반려동물 분양 카페·SNS·중고 거래 앱에서 ‘건강한 강아지·고양이를 분양한다, 인기가 많아 예약금을 먼저 보내야 잡아준다, 입금하면 며칠 뒤 데려가거나 안전하게 보내준다’는 말을 믿고 분양 예약금을 먼저 입금했는데, 입금 뒤에 ‘접종·건강검진 중이다, 곧 데려갈 날짜를 잡아주겠다’는 핑계만 반복하다 결국 아이도 못 보고 연락이 끊겼어요. 알고 보니 같은 분양 사진을 돌려쓰며 여러 명에게 예약금을 받았던 것 같은데, 이런 반려동물 분양 예약금 편취를 사기로 신고하고 입금한 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '반려동물 분양 예약금 잠적 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '반려동물 분양 예약금 입금 후 잠적 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '반려동물 분양 예약금을 먼저 보냈는데 아이도 못 보고 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「반려동물 분양 카페·SNS·중고 거래 앱·분양 사이트에서 ‘건강하게 잘 자란 강아지·고양이를 분양한다, 보러 오겠다는 사람이 많아 예약금을 먼저 보내야 아이를 잡아줄 수 있다, 입금하면 접종을 마치고 데려가게 해주거나 안전하게 보내준다’는 말을 믿고, 기다리던 가족을 놓칠까 봐 분양 예약금을 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘지금 접종·건강검진 중이라 조금만 기다려 달라, 곧 데려갈 날짜를 잡아주겠다, 추가 비용을 더 보내면 빨리 보내준다’는 핑계가 반복되다가, 결국 아이를 보지도 데려오지도 못한 채 상대가 글·계정·연락처를 닫고 사라져, 알고 보니 같은 분양 사진을 돌려쓰며 여러 명에게 예약금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 새 가족을 기다리며 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 분양할 동물이나 이행 의사 없이 정상 분양처럼 가장해 예약금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 편취에 의한 사기죄 성립 여부는 계약 당시를 기준으로 일을 완성하거나 의무를 이행할 의사·능력이 있었는지에 따라 판단하고, 계약의 내용·체결 경위·이행과정과 결과 등을 종합해 가려야 한다고 본 사례 흐름이 있는 영역으로, 분양 약속 당시 동물·이행 의사가 실제로 있었는지를 가려 편취를 다툴 여지가 있습니다. 예약금 선입금 + 미인도 + 잠적 결합은 ‘분양 예약금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 분양 예약금 입금 후 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 분양 글·분양 사진·예약금 안내·약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 분양할 동물·이행 의사 없이 예약금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 입금한 예약금·추가 요구 금액 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 분양 무산과 달리, 분양할 동물이나 이행 의사 없이 정상 분양처럼 가장해 예약금만 받았는지가 사기 판단의 분기점입니다. 분양 글·사진·예약금 안내와 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 분양 글·사진·예약금 안내 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 접종·추가비 핑계 반복·동일 사진 재게시·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 분양 예약금 잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양 글·분양 사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>예약금 입금 유도·약속 대화 (기망 정황)</strong></li>\n<li><strong>예약금·추가 요구 입금 내역 (피해 금액)</strong></li>\n<li><strong>접종·건강검진 핑계 반복·미인도 정황 기록</strong></li>\n<li><strong>동일 사진 재게시·다른 피해자 정황 자료</strong></li>\n<li><strong>상대 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양 글과 동물 사진은 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 같은 사진을 여러 명에게 보낸 정황과 추가 비용 요구를 함께 잡으면 편취 여부를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 분양할 동물·이행 의사 없이 예약금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 분양 무산인지 처음부터 편취였는지.</li>\n<li><strong>추가 요구</strong> — 접종비·운송비 명목 추가 입금 요구가 있었는지.</li>\n<li><strong>편취액</strong> — 입금한 예약금·추가 금액 전부가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (분양·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약 당시 기준의 편취 고의 판단',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 불법영득 의사 내지 편취 범의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 도급계약 등 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 일을 완성하거나 의무를 이행할 의사·능력이 없음에도 이행할 것처럼 거짓말을 해 대가를 편취할 고의가 있었는지에 따라 판단해야 한다고 판시했습니다. 분양 약속 당시 동물·이행 의사가 실제로 있었는지가 문제 되는 사안을 살펴볼 때에도 이러한 계약 당시 기준의 편취 고의를 검토해볼 수 있습니다.',
        takeaway: '예약금 선입금 + 미인도 + 잠적 결합 시 분양 예약금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '분양이 무산된 것뿐 아닌가요?',
        answer:
          '<strong>분양할 동물·이행 의사 없이 예약금만 받았는지가 핵심인 영역입니다.</strong> 분양 글·사진·약속·핑계 정황을 확보하세요.',
      },
      {
        question: '접종비를 더 보내라고 했는데 사기인가요?',
        answer:
          '<strong>추가 비용 반복 요구는 편취 다툼의 출발점인 영역입니다.</strong> 추가 입금 요구 대화와 입금 내역을 정리하세요.',
      },
      {
        question: '같은 사진을 여러 명에게 쓴 것 같아요.',
        answer:
          '<strong>동일 사진 재게시·다중 피해 정황은 편취 다툼을 뒷받침하는 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '예약금 전부를 피해액으로 볼 수 있나요?',
        answer:
          '<strong>입금한 예약금·추가 금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '상대가 계정을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '반려동물 분양 예약금 미인도 추적', href: '/guide/fraud/fraud-pet-puppy-deposit-no-delivery-track' },
      { label: '에어비앤비 허위 매물 보증금 추적', href: '/guide/fraud/fraud-airbnb-fake-listing-deposit-track' },
      { label: '댓글 알바 선입금 추적', href: '/guide/fraud/fraud-comment-part-time-advance-deposit-track' },
      { label: '이벤트 예약금 취소 잠적 추적', href: '/guide/fraud/fraud-event-deposit-cancel-vanish-recovery-track' },
    ],
  },

  // ─── 4. fraud-rental-car-booking-deposit-fake-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-car-booking-deposit-fake-track',
    keyword: '렌터카 예약 보증금 허위 유도 사기',
    questionKeyword: '여행·출장 준비로 SNS·중고 거래 앱·렌터카 카페에서 ‘인기 차량을 정식 업체보다 싸게 빌려준다, 예약이 몰려 보증금·예약금을 먼저 보내야 차를 잡아준다’는 말을 믿고 렌터카 예약 보증금을 먼저 입금했는데, 입금 뒤에 ‘차량 점검 중이다, 인수 장소를 곧 안내한다, 보험·추가 보증금을 더 보내라’는 핑계만 반복하다 결국 차도 못 받고 연락이 끊겼어요. 알고 보니 실제 차량이나 영업 권한 없이 여러 명에게 보증금을 받았던 것 같은데, 이런 렌터카 예약 보증금 허위 유도를 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '렌터카 예약 보증금 허위 유도 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '렌터카 예약 보증금 허위 유도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '렌터카 예약 보증금을 먼저 보냈는데 차도 못 받고 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「여행·출장·행사 준비로 SNS·중고 거래 앱·렌터카 거래 카페에서 ‘인기 차량을 정식 렌터카 업체보다 훨씬 싸게 빌려준다, 성수기라 예약이 몰리니 보증금·예약금을 먼저 보내야 차를 잡아줄 수 있다’는 말을 믿고, 좋은 조건을 놓칠까 봐 렌터카 예약 보증금을 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘지금 차량을 점검 중이라 인수 장소를 곧 안내하겠다, 보험·추가 보증금을 더 보내야 출고가 된다, 일정이 조금 미뤄진다’는 핑계가 반복되다가, 결국 차량을 받지도 인수 장소를 안내받지도 못한 채 상대가 글·계정·연락처를 닫고 사라져, 알고 보니 실제 차량이나 렌터카 영업 권한 없이 여러 명에게 보증금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 여행을 앞두고 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 빌려줄 차량이나 이행 의사 없이 정상 대여처럼 가장해 보증금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄는 재산권 침해로 성립하는 범죄이므로 기망행위라고 하려면 불법영득 의사 내지 편취 범의를 가지고 상대방을 기망한 것이어야 하고, 편취 범의는 계약 당시를 기준으로 이행 의사·능력 없이 이행할 것처럼 거짓말을 했는지에 따라 판단해야 한다고 본 사례 흐름이 있는 영역으로, 대여 약속 당시 차량·권한·이행 의사가 있었는지를 가려 편취를 다툴 여지가 있습니다. 보증금 선입금 + 미인도 + 잠적 결합은 ‘렌터카 보증금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 렌터카 예약 보증금 허위 유도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 차량 광고·대여 조건·보증금 안내·약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 빌려줄 차량·권한·이행 의사 없이 보증금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 입금한 보증금·추가 보증금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 예약 취소와 달리, 빌려줄 차량이나 영업 권한·이행 의사 없이 정상 대여처럼 가장해 보증금만 받았는지가 판단의 분기점입니다. 차량 광고·대여 조건과 핑계·추가 요구·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 차량 광고·대여 조건·보증금 안내 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 인수 장소 미안내·추가 보증금 요구·핑계 반복·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">렌터카 예약 보증금 허위 유도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 광고·대여 조건·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>보증금 입금 유도·약속 대화 (기망 정황)</strong></li>\n<li><strong>보증금·추가 보증금 입금 내역 (피해 금액)</strong></li>\n<li><strong>인수 장소 미안내·추가 요구·미인도 정황 기록</strong></li>\n<li><strong>차량·권한 미존재·다른 피해자 정황 자료</strong></li>\n<li><strong>상대 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량 광고와 대여 조건은 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 추가 보증금 요구와 인수 장소 미안내 정황을 함께 잡으면 편취 여부를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 빌려줄 차량·권한·이행 의사 없이 보증금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 예약 취소인지 처음부터 편취였는지.</li>\n<li><strong>추가 요구</strong> — 보험·추가 보증금 명목 추가 입금 요구가 있었는지.</li>\n<li><strong>편취액</strong> — 입금한 보증금·추가 금액 전부가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (렌터카·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의와 사기죄의 보호법익',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄는 보호법익인 재산권이 침해되었을 때 성립하는 범죄이므로 기망행위라고 하려면 불법영득 의사 내지 편취 범의를 가지고 상대방을 기망한 것이어야 하고, 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 의무를 이행할 의사·능력이 없음에도 이행할 것처럼 거짓말을 해 대가를 편취할 고의가 있었는지에 따라 판단해야 한다고 판시했습니다. 또 행정법규·영업 자격 위반 사정만으로 곧 기망행위라고 단정할 수 없고 그 위법이 본질적인지 심리해야 한다고 보았습니다. 차량·권한 없이 보증금을 받은 사안을 살펴볼 때에도 계약 당시 이행 의사·능력과 편취 범의를 검토해볼 수 있습니다.',
        takeaway: '보증금 선입금 + 미인도 + 잠적 결합 시 렌터카 보증금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '예약이 취소된 것뿐 아닌가요?',
        answer:
          '<strong>빌려줄 차량·권한·이행 의사 없이 보증금만 받았는지가 핵심인 영역입니다.</strong> 차량 광고·대여 조건·핑계 정황을 확보하세요.',
      },
      {
        question: '추가 보증금을 더 보내라고 했는데 사기인가요?',
        answer:
          '<strong>추가 보증금 반복 요구는 편취 다툼의 출발점인 영역입니다.</strong> 추가 입금 요구 대화와 입금 내역을 정리하세요.',
      },
      {
        question: '실제 차량이 있는지 어떻게 확인하나요?',
        answer:
          '<strong>차량·영업 권한 미존재 확인이 편취 다툼을 뒷받침하는 영역입니다.</strong> 사업자·차량 실재 확인 자료를 모으세요.',
      },
      {
        question: '입금한 보증금 전부를 피해액으로 보나요?',
        answer:
          '<strong>입금한 보증금·추가 금액 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '상대가 계정을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '허위 임대 매물 선입금 추적', href: '/guide/fraud/fraud-fake-rental-listing-deposit-upfront-track' },
      { label: '에어비앤비 허위 매물 보증금 추적', href: '/guide/fraud/fraud-airbnb-fake-listing-deposit-track' },
      { label: '고급 차량 리스 보증금 잠적 추적', href: '/guide/fraud/fraud-luxury-car-lease-deposit-vanish' },
      { label: '허위 임대 대리인 보증금 추적', href: '/guide/fraud/fraud-rental-deposit-fake-agent-track' },
    ],
  },

  // ─── 5. fraud-shopping-mall-bulk-order-nonpayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-shopping-mall-bulk-order-nonpayment-track',
    keyword: '쇼핑몰 대량주문 후 대금 미지급 사기',
    questionKeyword: '도소매·온라인 쇼핑몰을 운영한다는 거래처에서 ‘물량이 많이 필요하다, 거래 트면 계속 주문하겠다, 대금은 납품 후 며칠 안에 정산해 주겠다’는 말을 믿고 상품을 대량으로 납품했는데, 막상 납품을 마치자 ‘정산이 곧 된다, 다음 결제일에 한 번에 보내준다’는 핑계만 반복하다 결국 대금을 받지 못하고 연락이 끊겼어요. 알고 보니 처음부터 대금을 지급할 의사나 능력 없이 여러 납품업체에서 물건만 받아 챙겼던 것 같은데, 이런 쇼핑몰 대량주문 후 대금 미지급을 사기로 신고하고 납품 대금을 받으려면 어떻게 해야 하나요?',
    ctaKeyword: '쇼핑몰 대량주문 대금 미지급 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '쇼핑몰 대량주문 후 대금 미지급 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '쇼핑몰에 대량 납품했는데 대금을 받지 못하고 거래처가 잠적당했다면, 형법 제347조 사기의 편취 판단과 회수·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「도소매·온라인 쇼핑몰을 운영한다는 거래처·바이어에게서 ‘물량이 많이 필요하다, 한번 거래를 트면 앞으로 계속 주문하겠다, 대금은 납품 후 며칠 안에 또는 다음 결제일에 한 번에 정산해 주겠다’는 말을 믿고, 새 거래처를 키우려는 마음으로 상품을 대량으로 먼저 납품한 분의 상황입니다. 그런데 막상 납품을 마치고 나니 ‘정산이 곧 처리된다, 자금이 잠깐 막혀 다음 결제일에 합쳐 보내준다, 추가 물량을 더 받고 한꺼번에 정산하겠다’는 핑계가 반복되다가, 결국 납품 대금을 받지 못한 채 상대가 연락처·사무실·계정을 닫고 사라져, 알고 보니 처음부터 대금을 지급할 의사나 능력 없이 여러 납품업체에서 물건만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 원가·인건비까지 들여 납품한 물건이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 대금을 변제할 의사·능력이 없음에도 정산해 줄 것처럼 가장해 물품을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자에게 교부받게 한 경우에도 일정 요건 아래 사기죄가 성립할 수 있고, 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 재산침해가 되어 곧 사기죄가 성립하며 이익이 누구에게 귀속하는지는 성부에 영향이 없다고 본 사례 흐름이 있는 영역으로, 누가 물품을 받아 누구의 이익이 되었는지와 편취 여부를 가려 다툴 여지가 있습니다. 대량 납품 + 대금 미지급 + 잠적 결합은 ‘납품대금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·납품 정리 ② 대금·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 회수·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 쇼핑몰 대량주문 후 대금 미지급 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·대금·손해액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·납품 정리</strong> — 주문·계약·납품 내역·정산 약속·세금계산서 정리.</li>\n<li><strong>② 대금·기망</strong> — 대금 변제 의사·능력 없이 정산을 약속하고 물품을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 미지급 납품 대금·원가 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 회수·환급</strong> — 지급명령·가압류·민사 청구로 회수 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 대금 연체와 달리, 처음부터 대금을 변제할 의사·능력 없이 정산을 약속하고 물품만 받았는지가 판단의 분기점입니다. 주문·납품·정산 약속과 미지급·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·대한법률구조공단 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·납품 자료 보존 (즉시)</strong> — 주문서·계약·납품 확인·세금계산서·정산 약속 대화를 보존.</li>\n<li><strong>2단계 — 미지급·잠적 입증 (즉시)</strong> — 정산 핑계 반복·연락 두절·자금 부족 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 가압류·보전 (병행)</strong> — 상대 재산·계좌에 대한 가압류 등 보전조치를 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사기 고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 회수·환급 (이후)</strong> — 지급명령·민사 대금 청구·손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">쇼핑몰 대량주문 대금 미지급 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·대금·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문서·거래 계약서·발주 내역 (거래 조건)</strong></li>\n<li><strong>정산·결제 약속 대화 (기망 정황)</strong></li>\n<li><strong>납품 확인·거래명세서·세금계산서 (납품 사실)</strong></li>\n<li><strong>미지급 대금·원가 정리 (피해 금액)</strong></li>\n<li><strong>정산 핑계 반복·자금 부족 정황 기록</strong></li>\n<li><strong>거래처 사업자·대표·계좌·재산 정보</strong></li>\n<li><strong>지급명령·가압류 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거래명세서·세금계산서·정산 약속 대화는 납품 사실과 대금 채권을 입증하는 핵심이니 빠짐없이 정리하는 것이 중요합니다. 잠적 전에 상대 재산·계좌를 파악해 가압류를 검토하면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대금·기망</strong> — 변제 의사·능력 없이 정산을 약속하고 물품을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 대금 연체인지 처음부터 편취였는지.</li>\n<li><strong>이익 귀속</strong> — 물품·이익이 제3자·법인에 귀속해도 사기가 되는지.</li>\n<li><strong>편취·손해액</strong> — 미지급 납품 대금·원가가 얼마인지.</li>\n<li><strong>책임 주체</strong> — 거래처 대표·법인·관계자 누구에게 책임을 물을지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (사기 신고)</strong></li>\n<li><strong>한국소비자원 1372 (거래·전자상거래 피해상담)</strong></li>\n<li><strong>중소벤처기업부·소상공인 법률상담 (거래 분쟁 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 교부형 사기와 재물 편취의 성립',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 범인이 기망행위로 스스로 재물을 취득하지 않고 제3자에게 재물을 교부받게 한 경우에도 그 제3자가 도구·대리인의 관계에 있거나 적어도 범인에게 제3자로 하여금 재물을 취득하게 할 의사가 있으면 사기죄가 성립할 수 있고, 그 의사는 미필적 인식으로도 충분하다고 판시했습니다. 또 재물 편취를 내용으로 하는 사기죄에서는 기망으로 인한 재물 교부가 있으면 그 자체로 재산침해가 되어 곧 사기죄가 성립하고 그 이익이 누구에게 귀속하는지는 성부에 영향이 없다고 보았습니다. 대량 납품 후 대금이 미지급된 사안을 살펴볼 때에도 편취 성립과 이익 귀속 관계를 검토해볼 수 있습니다.',
        takeaway: '대량 납품 + 대금 미지급 + 잠적 결합 시 납품대금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '대금이 늦는 것뿐 아닌가요?',
        answer:
          '<strong>변제 의사·능력 없이 정산을 약속하고 물품만 받았는지가 핵심인 영역입니다.</strong> 정산 약속과 자금 부족 정황을 확보하세요.',
      },
      {
        question: '납품 사실은 어떻게 입증하나요?',
        answer:
          '<strong>거래명세서·세금계산서·납품 확인이 대금 채권을 뒷받침하는 영역입니다.</strong> 납품 관련 서류를 빠짐없이 정리하세요.',
      },
      {
        question: '법인 명의로 받아갔는데 책임을 물을 수 있나요?',
        answer:
          '<strong>이익이 법인·제3자에 귀속해도 편취가 성립할 수 있는 영역입니다.</strong> 대표·관계자와 법인 정보를 함께 확보하세요.',
      },
      {
        question: '미지급 대금 전부를 피해액으로 보나요?',
        answer:
          '<strong>미지급 납품 대금·원가가 편취·손해액으로 평가될 수 있는 영역입니다.</strong> 대금과 원가를 정리하세요.',
      },
      {
        question: '거래처가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>지급명령·가압류·민사 청구로 회수를 검토할 수 있는 영역입니다.</strong> 상대 재산·계좌 파악과 보전이 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '명품 위탁 대금 미지급 추적', href: '/guide/fraud/fraud-luxury-consignment-nonpayment-track' },
      { label: '온라인몰 선결제 미배송 추적', href: '/guide/fraud/fraud-online-mall-nondelivery-prepayment-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shopping-mall-non-delivery-track' },
      { label: '가짜 온라인 쇼핑몰 대응', href: '/guide/fraud/fraud-fake-online-shopping-mall' },
    ],
  },

  // ─── 6. fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense',
    keyword: '지인 금전 차용 변제의사 사기 무고',
    questionKeyword: '잘 알고 지내던 지인에게 사정이 생겨 ‘형편이 풀리면 꼭 갚겠다’며 돈을 빌렸고 당시에는 정말 갚을 생각과 능력이 있었는데, 이후 사업·수입이 갑자기 나빠져 약속한 날짜에 변제하지 못하자 지인이 ‘처음부터 갚을 생각 없이 돈만 빌려간 사기’라며 저를 고소했어요. 저는 일부라도 갚으려 했고 변제 노력을 보였는데, 단순한 채무불이행·민사 빚 문제가 형사 사기 사건이 돼버려 막막합니다. 이런 사실과 다른 사기 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '지인 차용 변제의사 사기 무고 편취 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '지인 금전 차용 변제의사 사기 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '지인에게 빌린 돈을 못 갚아 사기로 고소당했다면, 형법 제347조 편취 고의·변제의사와 채무불이행·민사 분쟁의 구분을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「오래 알고 지내던 지인에게 갑작스러운 사정으로 ‘형편이 풀리면 반드시 갚겠다’며 돈을 빌렸고, 차용 당시에는 실제로 갚을 생각과 정기적인 수입·자산 등 변제 능력이 있었는데, 그 뒤 사업 부진·실직·예상치 못한 지출로 형편이 급격히 나빠져 약속한 변제기일에 돈을 갚지 못한 분의 상황입니다. 그러자 지인이 ‘처음부터 갚을 생각도 능력도 없이 돈만 빌려간 사기다’라며 본인을 사기로 고소·고발해 한순간에 피의자가 되어, 정작 본인은 차용 당시 변제 의사가 분명했고 일부라도 갚으려 노력했으며 형편이 어려워진 사정을 설명했다고 기억하는데, 단순한 채무불이행·민사 빚 문제가 형사 사기 사건으로 번져 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 갚으려는 마음이 있었는데도 사기범으로 몰려 형사 전과 위험까지 더해져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 사기 혐의를 받고 있다면, 차용 당시 변제 의사·능력이 실제로 있었는지, 변제 지체가 사후 사정에 따른 결과인지, 이 분쟁이 민사 채무불이행에 그치는지가 핵심 쟁점입니다. 판례는 민사상 금전대차에서 단순히 채무를 이행하지 못했다는 사실만으로는 곧바로 차용금 편취의 고의를 인정할 수 없고, 다만 확실한 변제 의사가 없거나 약속한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 돈을 빌린 경우에 한해 편취의 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역으로, 차용 당시 변제 의사·능력과 변제 노력 정황을 들어 편취 고의를 다툴 수 있습니다. 차용 + 변제 노력 + 사후 변제 지체 결합은 ‘편취 고의·변제의사’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 차용·약정 정리 ② 변제 의사·능력 ③ 변제 노력 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 금전 차용 변제의사 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용·변제 의사·변제 노력·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용·약정 정리</strong> — 차용 경위·금액·변제기·이자 약정·용도 정리.</li>\n<li><strong>② 변제 의사·능력</strong> — 차용 당시 변제 의사·수입·자산 등 능력이 있었는지 검토.</li>\n<li><strong>③ 변제 노력</strong> — 일부 변제·연장 협의·사정 설명 등 변제 노력을 검토.</li>\n<li><strong>④ 정황·증거</strong> — 차용 당시 재력·이후 형편 악화 정황을 자료로 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 빚을 갚지 못했다는 것만으로 곧 사기가 되는 것이 아니라, 차용 당시 변제 의사·능력이 있었는지와 변제 지체가 사후 사정에 따른 것인지가 분기점입니다. 차용 당시 재력·변제 노력 정황으로 편취 고의 부재와 민사적 성격을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용·약정 정리 (즉시)</strong> — 차용 경위·금액·변제기·이자·용도·대화 흐름을 정리.</li>\n<li><strong>2단계 — 변제 의사·능력 자료 확보 (1주)</strong> — 차용 당시 수입·자산·재력 등 변제 능력 자료를 확보.</li>\n<li><strong>3단계 — 변제 노력·형편 악화 정리 (2주)</strong> — 일부 변제·연장 협의·사정 설명과 형편 악화 경위를 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 민사적 성격 소명 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 금전 차용 변제의사 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차용·변제 의사·변제 노력 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·계좌 이체·차용 경위 대화 (관계·약정)</strong></li>\n<li><strong>차용 당시 수입·자산·재력 자료 (변제 능력)</strong></li>\n<li><strong>일부 변제·이자 지급 내역 (변제 노력)</strong></li>\n<li><strong>변제기 연장·정산 협의 기록 (변제 의사)</strong></li>\n<li><strong>형편 악화·사업 부진·실직 등 사정 자료</strong></li>\n<li><strong>고소인 주장 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘차용 당시 변제 의사·능력이 있었는지’와 ‘변제 지체가 사후 사정에 따른 것인지’입니다. 차용 당시 재력 자료와 일부 변제·연장 협의 기록을 정돈하면 편취 의도가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 차용 당시 변제 의사가 있었는지.</li>\n<li><strong>변제 능력</strong> — 변제기 내에 갚을 수입·자산이 있었는지.</li>\n<li><strong>민사·형사 구분</strong> — 단순 채무불이행·민사 분쟁에 그치는지.</li>\n<li><strong>사후 사정</strong> — 사업 부진·실직 등으로 형편이 악화됐는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무불이행과 차용금 편취 고의의 구별',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취의 고의는 자백이 없는 한 범행 전후의 재력·환경·범행 내용·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 민사상 금전대차에서 채무불이행 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나, 확실한 변제 의사가 없거나 약속한 변제기일 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 돈을 빌린 경우에는 편취의 고의를 인정할 수 있다고 판시했습니다. 지인에게 돈을 빌렸다가 변제하지 못한 사안에서 편취 고의를 다툴 때에도 차용 당시 변제 의사·능력과 변제 노력을 종합해 검토해볼 수 있습니다.',
        takeaway: '차용 + 변제 노력 + 사후 변제 지체 결합 시 편취 고의·변제의사 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '돈을 못 갚았다고 사기로 고소당했어요.',
        answer:
          '<strong>차용 당시 변제 의사·능력 유무가 핵심인 영역입니다.</strong> 차용 경위와 당시 재력 자료를 정리하세요.',
      },
      {
        question: '채무불이행만으로 사기가 되나요?',
        answer:
          '<strong>단순 채무불이행만으로는 편취 고의를 단정할 수 없는 영역입니다.</strong> 민사적 성격과 변제 노력을 정리하세요.',
      },
      {
        question: '일부라도 갚으려 했는데 도움이 되나요?',
        answer:
          '<strong>일부 변제·연장 협의는 변제 의사를 뒷받침하는 영역입니다.</strong> 변제·이자·협의 내역을 확보하세요.',
      },
      {
        question: '형편이 갑자기 나빠진 건데도 처벌되나요?',
        answer:
          '<strong>사후 형편 악화로 인한 변제 지체만으로는 편취 고의가 인정되지 않는 영역입니다.</strong> 사업 부진·실직 사정을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>차용 경위·변제 의사·능력에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 대여 채무불이행 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-default-falsely-accused-defense' },
      { label: '지인 대여 민사·형사 구분', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '개인 대여 변제지연 무고 방어', href: '/guide/fraud/fraud-personal-loan-repayment-delay-falsely-accused-defense' },
      { label: '사업 자금 대여 무고 방어', href: '/guide/fraud/fraud-business-fund-loan-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-taxi-passenger-driver-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-passenger-driver-touch-report-track',
    keyword: '택시 승객 운전기사 추행 신고',
    questionKeyword: '밤늦게 택시를 타고 가던 중, 운전기사가 길을 안내해 준다거나 짐을 옮겨 준다는 핑계로 갑자기 제 손·허벅지·어깨를 만지거나 불필요하게 몸을 밀착해 와 큰 수치심과 공포를 느꼈어요. 좁은 차 안에 단둘이라 무서워 그 자리에서 강하게 항의하지 못했고 일부러 만진 건지 우연인지 헷갈렸는데, 이런 택시 안 운전기사의 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '택시 승객 운전기사 기습 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 승객 운전기사 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '택시 안에서 운전기사가 갑자기 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 폭행·추행 해당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「밤늦게 또는 혼자 택시·콜택시를 타고 가던 중, 운전기사가 길을 안내해 준다거나 짐을 옮겨 준다거나 안전벨트를 매준다는 핑계로 갑자기 본인의 손·허벅지·어깨·허리를 만지거나, 운전 중 또는 정차 중에 필요 이상으로 몸을 밀착해 신체를 접촉해 와 큰 불쾌감과 수치심, 공포를 느낀 분의 상황입니다. 좁은 차 안에 단둘이 있어 무섭고 위축돼 그 자리에서 강하게 항의하거나 곧바로 내리지 못한 채 목적지까지 가야 했고, ‘일부러 만진 건지, 우연히 닿은 건지’ 헷갈려 신고해도 되는 일인지 막막하셨을 거예요. 안전하게 가려고 탄 택시에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행죄의 폭행·협박을 두 유형으로 보아, 폭행행위 자체가 곧바로 추행에 해당하는 기습추행의 경우에는 상대방의 의사에 반하는 유형력의 행사가 있는 이상 그 힘의 대소강약을 불문하며, 나아가 강제추행죄의 폭행·협박은 상대방의 항거를 곤란하게 할 정도일 것을 요하지 않고 신체에 대한 불법한 유형력의 행사이면 족하다고 본 사례 흐름이 있는 영역으로, 갑작스러운 신체 접촉이 의사에 반한 유형력의 행사인지를 가려 추행 해당성을 다툴 여지가 있습니다. 좁은 차내 밀착 + 의사에 반한 접촉 + 핑계 결합은 ‘기습추행·추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 승객 운전기사 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 탑승 시간·구간·차량 번호·접촉 부위·방식·반복·핑계 정리.</li>\n<li><strong>② 추행 해당성</strong> — 갑작스러운 접촉이 의사에 반한 유형력의 행사로 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 택시 블랙박스·차량 정보·승하차 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 차량 번호·호출 기록·운전기사 정보로 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 차 안에서 몸이 닿더라도 운전·안내에 필요한 범위를 넘어 의사에 반해 신체를 만진 것이 성적 자유를 침해하면 기습추행으로 평가될 수 있고, 이때 유형력의 대소강약은 불문한다는 점이 분기점입니다. 블랙박스·차량 번호·호출 기록을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 탑승 시간·구간·차량 번호·접촉 부위·방식·반복·핑계·위치를 정리.</li>\n<li><strong>2단계 — 블랙박스·차량 정보 확보 (즉시)</strong> — 택시 블랙박스·차량 번호·호출 앱 기록·결제 내역 보존을 요청.</li>\n<li><strong>3단계 — 호출사·운수사 협조 (직후)</strong> — 호출 플랫폼·운수회사·경찰에 영상 보존과 운전기사 확인을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 승객 운전기사 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시간·구간·차량 번호·접촉 정황 메모</strong></li>\n<li><strong>호출 앱 예약·결제 내역 (운전기사 특정)</strong></li>\n<li><strong>택시 블랙박스 보존 요청 자료</strong></li>\n<li><strong>운전기사 인상착의·핑계 발언 기록</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>호출 플랫폼·운수사 문의·응답 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 블랙박스·호출 기록은 시간이 지나면 사라질 수 있으니 차량 번호·탑승 시간·구간을 확인해 호출 플랫폼·운수회사·경찰에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·핑계 발언과 직후 호소를 남기면 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행·유형력</strong> — 갑작스러운 접촉이 의사에 반한 유형력의 행사인지.</li>\n<li><strong>우연·고의</strong> — 운전·안내에 필요한 접촉인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — 차량 번호·호출 기록·운전기사 정보로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 블랙박스·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행에서 폭행·협박의 의미',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 폭행·협박은 상대방의 항거를 곤란하게 할 정도로 강력할 것을 요구하지 않고, 상대방의 신체에 대해 불법한 유형력을 행사하거나 일반적으로 보아 공포심을 일으킬 수 있는 정도의 해악을 고지하는 것을 의미한다고 보아 종래 판례를 변경했습니다. 또 폭행행위 자체가 곧바로 추행에 해당하는 기습추행의 경우 의사에 반하는 유형력의 행사가 있는 이상 그 힘의 대소강약을 불문한다고 판시했습니다. 좁은 차 안에서 운전기사가 갑자기 신체를 만진 사안을 살펴볼 때에도 이러한 기습추행·유형력 기준으로 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '좁은 차내 밀착 + 의사에 반한 접촉 + 핑계 결합 시 기습추행·추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전하다 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>운전·안내에 필요한 범위를 넘은 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·핑계 발언을 구체적으로 남기세요.',
      },
      {
        question: '무서워서 항의를 못 했어요.',
        answer:
          '<strong>좁은 차 안 단둘·위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '항거가 곤란할 정도는 아니었는데 추행인가요?',
        answer:
          '<strong>기습추행은 의사에 반하는 유형력이면 힘의 대소강약을 불문하는 영역입니다.</strong> 접촉의 양상과 반복을 기록하세요.',
      },
      {
        question: '운전기사를 어떻게 특정하나요?',
        answer:
          '<strong>차량 번호·호출 앱 기록·운수사 정보로 특정을 보강할 수 있는 영역입니다.</strong> 탑승 시간·구간·차량 번호를 즉시 기록하세요.',
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
      { label: '택시 승객 추행 접촉 추적', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-contact-track' },
      { label: '택시 승객 잠든 사이 추행 추적', href: '/guide/sex-crime/sex-crime-taxi-passenger-asleep-track' },
      { label: '회식 후 택시 추행 추적', href: '/guide/sex-crime/sex-crime-company-dinner-taxi-molestation-track' },
      { label: '마사지샵 부적절 접촉 추적', href: '/guide/sex-crime/sex-crime-massage-shop-therapist-inappropriate-touch-track' },
    ],
  },

  // ─── 8. sex-crime-festival-crowd-grope-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-crowd-grope-report-track',
    keyword: '축제 인파 기습 추행 신고',
    questionKeyword: '축제·콘서트·불꽃놀이 현장에서 사람이 빽빽하게 몰린 인파 속에 서 있던 중, 뒤·옆에 있던 사람이 밀리는 척하며 제 몸을 만지거나 밀착해 큰 수치심을 느꼈어요. 사람이 너무 많아 누가 했는지 보이지 않고 인파에 떠밀려 부딪힌 우연인지 일부러 만진 건지 헷갈렸으며 정신이 없어 그 자리에서 붙잡거나 항의하지 못했는데, 이런 축제 인파 속 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '축제 인파 기습 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 인파 기습 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '축제 인파 속에서 밀리는 척 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·추행의 고의를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지역 축제·콘서트·불꽃놀이·페스티벌 현장에서 사람이 빽빽하게 몰린 인파 속에 서 있던 중, 바로 뒤나 옆에 있던 사람이 인파에 밀리는 척하면서 본인의 엉덩이·허벅지·허리·가슴 부근을 만지거나, 필요 이상으로 밀착해 신체를 비비듯 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 사람이 너무 많아 ‘인파에 떠밀려 부딪힌 우연인지, 일부러 만진 건지’ 헷갈리고, 누가 그랬는지 확실치 않으며, 정신이 없고 위축돼 그 자리에서 곧바로 붙잡거나 항의하지 못한 채 자리를 벗어나, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 즐거우려고 찾은 축제에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부를 행위 경위·구체적 행위태양·주위의 객관적 상황 등을 종합해 판단하면서, 공동체 안에서의 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있으면 추행에 해당하지 않을 수 있고, 의례적·사회적으로 상당한 범주를 다소 벗어났더라도 성적 자유를 침해하는 정도에 이르지 않으면 강제추행으로 보기 어렵다고 본 사례 흐름이 있는 영역으로, 인파 속 접촉이 우연한 떠밀림을 넘어 성적 자유를 침해하는 추행인지를 가려 다툴 여지가 있습니다. 혼잡 밀착 접촉 + 의사에 반한 접촉 + 떠밀림 핑계 결합은 ‘추행 해당성·추행의 고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 기습 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 축제·장소·시간·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 떠밀림에 따른 접촉을 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 현장·주변 CCTV·행사 영상 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·일행·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·현장 경찰·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인파로 몸이 닿더라도 떠밀림에 따른 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 강제추행으로 평가될 수 있되, 추행의 고의가 함께 인정되어야 한다는 점이 분기점입니다. 현장·주변 CCTV와 행사·시간 정보를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 축제·장소·시간·접촉 부위·방식·반복·인상착의·위치를 정리.</li>\n<li><strong>2단계 — CCTV·행사 영상 확보 (즉시)</strong> — 현장·주변 CCTV, 행사 촬영·중계 영상 보존을 요청.</li>\n<li><strong>3단계 — 현장 경찰·주최 협조 (직후)</strong> — 현장 경찰·행사 주최·안전요원에 영상 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 기습 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>축제·장소·시간·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·이동 정황 기록</strong></li>\n<li><strong>현장·주변 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장권·결제·동선 기록 (시간·위치)</strong></li>\n<li><strong>직후 호소·일행 연락 기록</strong></li>\n<li><strong>주변 목격자·안전요원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 축제 현장 CCTV·행사 영상은 보존 기간이 짧을 수 있으니 장소·시간대·구역을 확인해 현장 경찰·주최 측에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소를 남기면 떠밀림에 따른 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>추행의 고의</strong> — 떠밀림을 넘어 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>우연·고의</strong> — 인파에 떠밀린 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·일행·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당한 신체접촉의 구별',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하고 어떤 행위가 추행에 해당하는지는 행위 경위·구체적 행위태양·주위의 객관적 상황 등을 종합해 판단해야 한다고 보면서, 공동체 안에서 구성원 사이에 발생한 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있으면 추행에 해당하지 않고, 그 범주를 다소 벗어났더라도 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르지 않으면 강제추행죄에 해당하지 않는다고 판시했습니다. 인파 속 신체접촉이 문제 되는 사안을 살펴볼 때에도 우연한 떠밀림과 의사에 반한 추행을 구별하는 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡 밀착 접촉 + 의사에 반한 접촉 + 떠밀림 핑계 결합 시 추행 해당성·추행의 고의 검토 영역 — 변호인 상담 권장.',
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
        question: '추행의 고의는 어떻게 다투나요?',
        answer:
          '<strong>접촉의 양상·반복·밀착 정도로 추행행위와 고의를 따지는 영역입니다.</strong> 반복·부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '누가 만졌는지 특정할 수 있나요?',
        answer:
          '<strong>현장·주변 CCTV·일행·목격자로 특정을 보강할 수 있는 영역입니다.</strong> 장소·시간대·구역을 즉시 기록하세요.',
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
      { label: '축제 인파 기습 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-track' },
      { label: '클럽 축제 인파 추행 추적', href: '/guide/sex-crime/sex-crime-club-festival-crowd-molestation-track' },
      { label: '지하철 혼잡 출근길 추행 추적', href: '/guide/sex-crime/sex-crime-subway-rush-hour-grope-report-track' },
      { label: '워터파크 인파 추행 추적', href: '/guide/sex-crime/sex-crime-water-park-pool-crowd-track' },
    ],
  },

  // ─── 9. sex-crime-massage-shop-forced-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-forced-touch-report-track',
    keyword: '마사지샵 불법 추행 신고',
    questionKeyword: '몸이 뭉쳐 마사지샵·테라피샵에서 관리를 받던 중, 관리사가 마사지·시술에 필요한 범위를 넘어 제 가슴·엉덩이·음부 부근을 만지거나 불필요하게 밀착해 큰 수치심을 느꼈어요. ‘근육을 풀려면 어쩔 수 없다, 원래 이렇게 한다’는 말에 시술인지 추행인지 헷갈려 그 자리에서 곧바로 항의하지 못했는데, 이런 마사지샵 관리 중 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '마사지샵 시술 가장 추행 해당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 불법 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '마사지샵에서 시술을 핑계로 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·시술과의 구별을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「몸이 뭉치거나 피로가 쌓여 마사지샵·테라피샵·스파에서 관리를 받던 중, 관리사가 마사지·시술에 필요한 범위를 넘어 본인의 가슴·엉덩이·허벅지 안쪽·음부 부근을 만지거나, 시술과 무관하게 불필요하게 몸을 밀착해 신체를 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. ‘근육을 풀려면 어쩔 수 없다, 원래 이 부위까지 관리한다, 효과를 보려면 이렇게 해야 한다’는 말에 ‘정상 시술인지, 추행인지’ 헷갈리고, 옷을 벗고 누운 상태라 위축돼 그 자리에서 곧바로 항의하거나 멈추라고 말하지 못한 채 관리를 마쳐, 신고해도 되는 일인지 막막하셨을 거예요. 쉬려고 찾은 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 시술·진료 과정의 신체접촉이 추행인지는 행위 경위·접촉 부위의 위치와 특성·시술의 필요성·시술 수단과 방법의 상당성·사전 설명과 동의 여부 등을 종합해 신중·엄격하게 판단하고, 강제추행죄의 성립에 필요한 주관적 요소는 고의로 충분하며 성욕을 자극·만족시키려는 동기나 목적까지 있어야 하는 것은 아니라고 본 사례 흐름이 있는 영역으로, 시술에 필요한 범위를 넘어 성적 자유를 침해한 접촉인지를 가려 추행 해당성을 다툴 여지가 있습니다. 시술 가장 + 의사에 반한 접촉 + 부적절 부위 결합은 ‘시술 가장 추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 관리사·업소 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 불법 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 업소·예약·시술 종류·접촉 부위·방식·발언·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 시술에 필요한 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 예약·결제·CCTV·관리실 정황 보존 요청.</li>\n<li><strong>④ 관리사·업소 특정</strong> — 예약 기록·결제·업소 정보로 관리사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 마사지·시술에 신체접촉이 따르더라도 시술에 필요한 부위·방법을 넘어 의사에 반해 성적 자유를 침해한 접촉인지가 분기점이고, 추행은 고의로 충분하며 성적 동기·목적까지 요구되지는 않습니다. 예약·결제 기록과 접촉 부위·발언·시점을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 업소·예약·시술 종류·접촉 부위·방식·발언·반복·시점을 정리.</li>\n<li><strong>2단계 — 예약·결제·CCTV 확보 (즉시)</strong> — 예약 내역·결제·대기실·복도 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 직후 호소·진술 정리 (직후)</strong> — 직후 호소·지인 연락·메모로 진술을 보강.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 불법 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·예약·시술 종류·시점 메모</strong></li>\n<li><strong>예약 내역·결제·영수증 (관리사·업소 특정)</strong></li>\n<li><strong>접촉 부위·방식·발언 기록 (추행 정황)</strong></li>\n<li><strong>대기실·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>업소 상호·사업자·관리사 정보</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예약·결제 기록은 관리사·업소를 특정하는 핵심이고, CCTV는 보존 기간이 짧으므로 곧바로 업소·경찰에 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·발언과 직후 호소를 남기면 정상 시술과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술에 필요한 범위를 넘은 의사에 반한 접촉인지.</li>\n<li><strong>시술과의 구별</strong> — 접촉 부위·방법이 시술상 상당한 범위였는지.</li>\n<li><strong>고의·동기</strong> — 추행은 고의로 충분하고 성적 동기까지 요구되지 않는지.</li>\n<li><strong>관리사·업소 특정</strong> — 예약·결제·업소 정보로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 예약·CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시술 과정 신체접촉의 추행 판단 기준',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하고 강제추행죄 성립에 필요한 주관적 요소는 고의로 충분하며 성욕을 자극·흥분·만족시키려는 동기나 목적까지 있어야 하는 것은 아니라고 보면서, 의료인 등의 진단·치료 과정의 신체접촉이 추행인지는 행위 경위·접촉 부위의 위치와 특성·시술의 필요성·시술 수단과 방법의 상당성·사전 설명과 동의 여부 등을 종합해 신중·엄격하게 판단해야 한다고 판시했습니다. 마사지·시술을 핑계로 한 신체접촉이 문제 되는 사안을 살펴볼 때에도 시술 필요성·방법의 상당성과 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '시술 가장 + 의사에 반한 접촉 + 부적절 부위 결합 시 시술 가장 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시술상 어쩔 수 없는 접촉이라고 하면 어쩌죠?',
        answer:
          '<strong>시술에 필요한 부위·방법을 넘은 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·발언을 구체적으로 남기세요.',
      },
      {
        question: '관리사가 성적 목적이 없었다고 하면요?',
        answer:
          '<strong>추행은 고의로 충분하고 성적 동기·목적까지 요구되지 않는 영역입니다.</strong> 접촉 부위·방법의 상당성 여부를 정리하세요.',
      },
      {
        question: '옷을 벗고 있어 항의를 못 했어요.',
        answer:
          '<strong>위축된 상황 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '관리사·업소를 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제 기록·업소 정보로 특정을 보강할 수 있는 영역입니다.</strong> 예약 내역과 결제 자료를 확보하세요.',
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
      { label: '마사지샵 부적절 접촉 추적', href: '/guide/sex-crime/sex-crime-massage-shop-therapist-inappropriate-touch-track' },
      { label: '발 마사지샵 추행 추적', href: '/guide/sex-crime/sex-crime-foot-massage-shop-track' },
      { label: '마사지샵 추행 추적', href: '/guide/sex-crime/sex-crime-massage-shop-track' },
      { label: '마사지샵 시술 추행 추적', href: '/guide/sex-crime/sex-crime-massage-shop-treatment-track' },
    ],
  },

  // ─── 10. sex-crime-company-dinner-coworker-accusation-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-coworker-accusation-falsely-accused-defense',
    keyword: '회식 동료 추행 무고 방어',
    questionKeyword: '회식 자리에서 동료·후배와 술을 마시며 격려한다고 어깨를 두드리거나 자리를 좁혀 앉는 등 평범한 분위기였다고 기억하는데, 며칠 뒤 그 동료가 ‘회식 때 강제로 추행당했다’며 저를 고소해 한순간에 피의자가 됐어요. 저는 성적 의도로 만진 적이 없고 자연스러운 분위기였다고 생각하는데, 진술과 정황만으로 회식 자리가 강제추행 사건이 돼버려 막막합니다. 사실과 다르게 신고됐다면 이런 회식 추행 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '회식 동료 추행 무고 추행 고의·진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 동료 추행 무고 방어 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '회식 자리 신체접촉으로 강제추행 고소를 당했다면, 형법 제298조 추행 고의·기습추행 성립과 진술 신빙성 다툼을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식·송년회 자리에서 동료·후배와 함께 술을 마시며 ‘고생한다, 힘든 일 있으면 말하라’고 격려한다고 어깨를 두드리거나, 좁은 자리에서 옆에 붙어 앉고 잔을 부딪치는 등 본인 기억으로는 평범하고 자연스러운 분위기였다고 생각하는데, 며칠 뒤 그 동료가 ‘회식 때 강제로 추행당했다, 허벅지를 만지고 신체를 접촉했다’며 본인을 강제추행으로 고소·고발해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 성적 의도로 신체를 만진 적이 없고 분위기상 자연스러운 접촉이었다고 기억하는데, 피해 진술과 주변 정황만으로 회식 자리가 형사 강제추행 사건으로 번져 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 직장 동료와의 일이라 소문·인사상 불이익 걱정까지 더해져 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 영역입니다. 사실과 다르게 신고됐다면, 신체접촉이 의사에 반하는 유형력의 행사로 추행에 해당하는지, 추행행위와 그 고의가 인정되는지, 피해 진술이 합리적 의심을 배제할 만큼 신빙성이 있는지가 핵심 쟁점입니다. 판례는 기습추행의 경우 추행행위와 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 것을 요하지 않고 의사에 반하는 유형력의 행사가 있으면 족하다고 보면서도, 추행 해당 여부는 피해자의 의사·관계·경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 접촉의 경위·태양과 진술 신빙성을 들어 추행 고의를 다툴 수 있습니다. 회식 접촉 + 자연스러운 분위기 주장 + 진술 신빙성 결합은 ‘추행 고의·진술 신빙성’ 방어가 가능한 트랙입니다. 혐의를 받고 있다면 ① 경위·관계 정리 ② 추행 해당성 ③ 추행 고의 ④ 진술 신빙성 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 동료 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·추행 고의·진술 신빙성·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 회식 자리·관계·좌석·접촉 경위와 분위기 정리.</li>\n<li><strong>② 추행 해당성</strong> — 접촉이 의사에 반하는 유형력 행사로 추행인지 검토.</li>\n<li><strong>③ 추행 고의</strong> — 성적 의도·추행행위와 그 고의가 인정되는지 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 피해 진술의 일관성·구체성·정황 부합을 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기습추행은 의사에 반하는 유형력이면 성립할 수 있으나, 신체접촉이 추행에 해당하는지와 추행 고의는 경위·관계·태양·정황을 종합해 신중히 가려야 하고, 피해 진술의 신빙성도 함께 검토됩니다. 회식 정황·좌석·관계와 목격자 진술로 추행 고의를 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·관계 정리 (즉시)</strong> — 회식 일시·장소·좌석·관계·접촉 경위와 분위기를 정리.</li>\n<li><strong>2단계 — 정황·목격자 확보 (1주)</strong> — 동석자 진술·좌석 배치·CCTV·메시지 등 정황 자료를 확보.</li>\n<li><strong>3단계 — 진술 신빙성 검토 (2주)</strong> — 피해 진술의 일관성·구체성·정황 부합 여부를 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 동료 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 고의·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일시·장소·좌석·관계 정리 메모 (경위)</strong></li>\n<li><strong>동석자·목격자 진술·연락처 (정황)</strong></li>\n<li><strong>좌석 배치·이동·접촉 경위 자료 (행위태양)</strong></li>\n<li><strong>현장 CCTV·사진·메시지 (객관 정황)</strong></li>\n<li><strong>피해 진술 모순·불부합 정리 자료 (신빙성)</strong></li>\n<li><strong>고소인과의 관계·갈등 경위 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘접촉이 의사에 반하는 추행행위였는지’와 ‘피해 진술이 합리적 의심을 배제할 만큼 신빙성이 있는지’입니다. 동석자 진술·좌석 배치·CCTV 등 객관 정황을 정돈하면 추행 고의가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 의사에 반하는 유형력 행사로 추행인지.</li>\n<li><strong>추행 고의</strong> — 성적 의도·추행행위와 그 고의가 인정되는지.</li>\n<li><strong>진술 신빙성</strong> — 피해 진술이 일관·구체적이고 정황에 부합하는지.</li>\n<li><strong>정황 부합</strong> — 좌석·관계·동석자 진술과 어긋나는 부분이 있는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행의 성립과 추행 해당성의 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행행위 자체가 추행행위라고 인정되는 기습추행이 포함되고, 이때 추행행위와 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 것을 요하지 않고 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 판시했습니다. 다만 추행 해당 여부는 피해자의 의사·성별·연령·이전부터의 관계·행위에 이르게 된 경위·구체적 행위태양·주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 보았습니다. 회식 자리 신체접촉이 문제 되는 사안에서 추행 고의를 다툴 때에도 접촉의 경위·태양과 정황·진술 신빙성을 종합해 검토해볼 수 있습니다.',
        takeaway: '회식 접촉 + 자연스러운 분위기 주장 + 진술 신빙성 결합 시 추행 고의·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '격려로 어깨를 두드린 것도 추행인가요?',
        answer:
          '<strong>접촉이 의사에 반하는 추행행위에 해당하는지를 경위·태양으로 가리는 영역입니다.</strong> 접촉 경위·부위·분위기를 구체적으로 정리하세요.',
      },
      {
        question: '성적 의도가 없었는데도 처벌되나요?',
        answer:
          '<strong>추행 고의 유무와 행위의 추행 해당성이 핵심인 영역입니다.</strong> 성적 의도 부재와 자연스러운 접촉 경위를 정리하세요.',
      },
      {
        question: '피해 진술만 있는데 어떻게 다투나요?',
        answer:
          '<strong>피해 진술의 일관성·구체성·정황 부합이 신빙성 다툼의 출발점인 영역입니다.</strong> 동석자 진술·CCTV 등 객관 정황을 확보하세요.',
      },
      {
        question: '동석자들은 못 봤다고 하는데 도움이 되나요?',
        answer:
          '<strong>동석자 진술·좌석 배치는 정황 부합 여부를 따지는 영역입니다.</strong> 목격자 진술과 좌석·이동 정황을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>경위·접촉·관계에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '회식 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-falsely-accused-defense' },
      { label: '회식 만취 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-intoxicated-falsely-accused-defense' },
      { label: '성범죄 무고 대응 절차', href: '/guide/sex-crime/sex-crime-false-accusation-process' },
      { label: '성범죄 무고 방어', href: '/guide/sex-crime/sex-crime-false-accusation-defense' },
    ],
  },
];
