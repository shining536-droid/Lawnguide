import { SpokePage } from '../spoke-pages';

// batch105 fraud(6) + sex-crime(4) — 10개 (2026-06-22)
//
// 고유 존재 이유:
// 1. fraud-used-luxury-counterfeit-authenticity-guarantee-track — 일반 중고거래 분쟁과 분기. '중고 명품 정품보증한다며 가품을 판매' 정품보증 기망 편취 판단형 트랙(victim).
// 2. fraud-fake-job-offer-training-fee-prepayment-track — 일반 채용 분쟁과 분기. '취업시켜준다며 교육비 선납 유도 후 미채용' 허위 채용 빙자 교육비 편취 절차형 트랙(victim).
// 3. fraud-online-lecture-refund-refusal-disappear-track — 일반 환불 분쟁과 분기. '온라인 강의 환불 약속 후 거부·잠적' 환불 거부 잠적 편취 판단형 트랙(victim).
// 4. fraud-pet-adoption-deposit-no-delivery-track — 일반 분양 분쟁과 분기. '반려동물 분양 예약금 입금 후 미인도' 분양 입금 미인도 편취 판단형 트랙(victim).
// 5. fraud-gap-investment-rental-income-guarantee-track — 일반 부동산 분쟁과 분기. '갭투자 임대수익 보장한다며 분양·매매대금 편취' 임대수익 보장 기망 절차형 트랙(victim).
// 6. fraud-investment-principal-guarantee-nonperformance-falsely-accused-defense — 일반 투자 무고류와 분기. '투자원금 보장 약정 미이행으로 사기 고소당함' 차용·편취 범의 방어 판단형 트랙(accused).
// 7. sex-crime-gym-pt-guidance-pretext-touch-report-track — 일반 추행류와 분기. '헬스장 PT 지도 빙자 추행을 당함' 지도 가장 추행 해당성·고의 판단형 트랙(victim).
// 8. sex-crime-company-dinner-karaoke-touch-report-track — 일반 추행류와 분기. '회식 노래방에서 추행을 당함' 추행 해당성·수치심 판단형 트랙(victim).
// 9. sex-crime-massage-shop-treatment-pretext-touch-report-track — 일반 추행류와 분기. '마사지샵 시술 빙자 추행을 당함' 시술 가장 추행 절차형 트랙(victim).
// 10. sex-crime-taxi-rideshare-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 후 택시 동승 신체접촉이 추행으로 고소' 추행 고의·진술 신빙성·무죄추정 방어 판단형 트랙(accused).

export const spokesBatch105FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-used-luxury-counterfeit-authenticity-guarantee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-luxury-counterfeit-authenticity-guarantee-track',
    keyword: '중고 명품 가품 정품보증 기망 사기',
    questionKeyword: '중고 거래 앱·명품 거래 카페·직거래 채팅방에서 ‘정품이 확실하다, 영수증·보증서도 있고 가품이면 전액 환불해주겠다’는 말을 믿고 시세보다 싼 중고 명품 가방·시계를 구매하며 대금을 입금했는데, 막상 받아 보니 박음질·각인·시리얼이 어색해 정품 감정을 받아 보니 가품 판정이 나왔어요. 판매자에게 따지니 ‘정품인데 감정이 잘못됐다’며 환불 약속을 어기고 결국 연락이 끊겼고, 알고 보니 같은 수법으로 여러 명에게 가품을 정품으로 속여 판 것 같은데, 이런 중고 명품 정품보증 기망을 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 명품 정품보증 기망 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 가품 정품보증 기망 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '정품이라며 보증까지 한 중고 명품이 가품으로 판정되고 환불도 거부당해 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 앱·명품 거래 카페·직거래 채팅방에서 ‘정품이 확실하다, 백화점 영수증·정품 보증서도 함께 있고 만에 하나 가품이면 전액 환불해주겠다’는 자신 있는 안내를 믿고, 좋은 매물을 놓칠까 봐 시세보다 싼 중고 명품 가방·시계 대금을 서둘러 입금한 분의 상황입니다. 그런데 막상 물건을 받아 보니 박음질·각인·로고·시리얼 번호가 어딘가 어색해 불안한 마음에 전문 감정을 받아 보니 가품 판정이 나왔고, 판매자에게 이를 알리니 ‘정품인데 감정이 잘못된 것이다, 다른 데서 감정해 봐라’며 처음의 환불 약속을 어기고 핑계만 반복하다가, 결국 환불도 못 받은 채 판매자가 게시글·계정·연락처를 닫고 사라져, 알고 보니 같은 수법으로 여러 명에게 가품을 정품으로 속여 팔아 온 건 아닌지 의심되고 막막하실 거예요. 큰맘 먹고 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품임을 알면서도 정품이라 보증해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 다수의 피해자에게 각각 기망행위를 해 재물을 편취한 경우 범의가 단일하고 범행 방법이 동일하더라도 원칙적으로 피해자별로 독립한 사기죄가 성립하고, 다만 피해법익이 동일하다고 평가될 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 피해자별 편취와 죄수를 가려 다툴 여지가 있습니다. 정품보증 + 가품 인도 + 환불 거부·잠적 결합은 ‘정품보증 기망 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 정품보증·가품 기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 가품 정품보증 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·정품보증·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·정품 보증·환불 약속·대금 입금 내역 정리.</li>\n<li><strong>② 정품보증·가품 기망</strong> — 가품을 알면서 정품으로 보증해 팔았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 진품 논란과 달리, 가품임을 알면서도 정품이라 보증하고 환불 약속까지 하며 대금을 받았는지가 판단의 분기점입니다. 정품 감정서와 정품 보증·환불 약속 대화를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·정품 보증·환불 약속 대화·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 가품·잠적 입증 (즉시)</strong> — 전문 감정서·가품 판정 결과와 환불 거부·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지와 대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 정품보증 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·정품보증·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·정품 사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>정품 보증·환불 약속 대화 (기망 정황)</strong></li>\n<li><strong>명품 대금 입금 내역 (피해 금액)</strong></li>\n<li><strong>전문 감정서·가품 판정 결과</strong></li>\n<li><strong>받은 물건 박음질·각인·시리얼 사진</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정품 보증·환불 약속 대화는 차단·삭제로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 공인된 감정기관의 가품 판정서와 정품 보증 대화를 함께 정리하면 정품보증 기망과 편취를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정품보증·기망</strong> — 가품임을 알면서 정품이라 보증해 팔았는지.</li>\n<li><strong>편취 범의</strong> — 단순 진품 논란인지 처음부터 편취였는지.</li>\n<li><strong>다중 피해·죄수</strong> — 같은 수법으로 여러 명에게 팔아 피해자별 죄가 되는지.</li>\n<li><strong>편취액</strong> — 교부한 대금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 사기의 죄수와 피해법익 동일성',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에게 각각 기망행위를 해 각 피해자로부터 재물을 편취한 경우 범의가 단일하고 범행 방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이어서 원칙적으로 피해자별로 독립한 사기죄가 성립한다고 보았습니다. 다만 피해법익이 동일하다고 볼 사정이 있는 경우에는 기망행위의 공통성, 재산 교부 의사결정의 공통성, 재산의 형성·교부 경위 등 모든 사정을 고려해 포괄일죄로 볼 수 있다고 판시했습니다. 같은 수법으로 여러 명에게 가품을 정품으로 속여 판 사안을 살펴볼 때에도, 피해자별 편취 성립과 죄수 관계를 검토해볼 수 있습니다.',
        takeaway: '정품보증 + 가품 인도 + 환불 거부·잠적 결합 시 정품보증 기망 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '진품 논란일 뿐 사기는 아닌 것 아닌가요?',
        answer:
          '<strong>가품임을 알면서 정품이라 보증해 대금을 받았는지가 핵심인 영역입니다.</strong> 정품 보증 대화와 가품 감정서를 확보하세요.',
      },
      {
        question: '가품인 걸 어떻게 증명하나요?',
        answer:
          '<strong>공인 감정기관의 가품 판정서가 기망을 다투는 핵심 단서인 영역입니다.</strong> 받은 직후 감정을 받아 결과를 보관하세요.',
      },
      {
        question: '여러 명에게 가품을 판 것 같아요.',
        answer:
          '<strong>같은 수법의 다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '입금한 대금 전부가 피해액인가요?',
        answer:
          '<strong>교부한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
      },
      {
        question: '환불해준다고 했다가 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 환불 약속 대화와 송금 내역을 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '명품 가방 가품 추적', href: '/guide/fraud/fraud-luxury-bag-counterfeit-track' },
      { label: '명품 리셀 가품 배송 환불', href: '/guide/fraud/fraud-luxury-resale-counterfeit-delivery-refund-track' },
      { label: '중고 명품 정품 보증 추적', href: '/guide/fraud/fraud-secondhand-luxury-fake-authenticity-track' },
      { label: '중고 명품 보증서 잠적 추적', href: '/guide/fraud/fraud-secondhand-luxury-fake-guarantee-cert-vanish-track' },
    ],
  },

  // ─── 2. fraud-fake-job-offer-training-fee-prepayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-job-offer-training-fee-prepayment-track',
    keyword: '허위 채용 빙자 교육비 선납 사기',
    questionKeyword: '구인 사이트·SNS·문자로 ‘정규직으로 채용해주겠다, 입사 전 필수 교육·자격 과정을 들어야 하니 교육비를 먼저 내면 합격이 보장된다’는 안내를 믿고, 좋은 일자리를 놓칠까 봐 교육비·자격증 비용을 선납했는데, 막상 교육은 부실하거나 아예 진행되지 않았고 채용도 계속 미뤄지다 결국 연락이 끊겼어요. 알고 보니 채용할 의사 없이 교육비 명목으로 돈만 받아 챙긴 것 같고 같은 방식으로 여러 명에게 받았던 것 같은데, 이런 허위 채용 빙자 교육비 선납 사기를 신고하고 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '허위 채용 빙자 교육비 선납 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '허위 채용 빙자 교육비 선납 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '채용해준다며 교육비를 선납했는데 교육도 부실하고 채용도 안 되고 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「구인 사이트·SNS·문자 안내로 ‘정규직·계약직으로 채용해주겠다, 다만 입사 전에 필수 교육·자격 과정을 이수해야 하니 교육비를 먼저 내면 합격이 사실상 보장된다, 교육만 마치면 바로 출근이다’라는 솔깃한 말을 믿고, 어렵게 잡은 일자리를 놓칠까 봐 교육비·자격증 비용을 서둘러 선납한 분의 상황입니다. 그런데 막상 교육은 형식적이거나 부실하게 진행되거나 아예 시작조차 되지 않았고, ‘자리가 곧 난다, 다음 기수에 배정된다’는 핑계로 채용이 계속 미뤄지다가, 결국 출근도 못 한 채 담당자·업체가 연락처·계정을 닫고 사라져, 알고 보니 처음부터 채용할 의사 없이 교육비 명목으로 돈만 받아 챙긴 건 아닌지, 같은 방식으로 여러 명에게 받아 온 건 아닌지 의심되고 막막하실 거예요. 취업을 간절히 바라며 낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 채용할 의사나 능력 없이 교육비를 받기 위한 수단으로 채용을 가장했다면 기망행위로 평가될 여지가 있는 영역입니다. 다만 판례는 부작위에 의한 기망에서 법률상 고지의무가 인정되는 범위와 그 거래실정에 관한 주장·증명책임은 검사에게 있다고 보아, 고지의무와 편취 범의를 사안마다 신중히 가린 사례 흐름이 있는 영역으로, 채용·교육의 실질과 처음부터의 편취 의사를 가려 다툴 여지가 있습니다. 채용 빙자 + 교육비 선납 + 미교육·미채용·잠적 결합은 ‘허위 채용 교육비 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 채용·결제 정리 ② 채용 빙자·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 허위 채용 빙자 교육비 선납 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채용·교육비 기망·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채용·결제 정리</strong> — 채용 안내·합격 보장·교육비 선납 요구·결제 내역 정리.</li>\n<li><strong>② 채용 빙자·기망</strong> — 채용 의사 없이 교육비만 받으려 채용을 가장했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교육비·자격증 비용 등 교부 금액 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 채용 무산과 달리, 채용할 의사 없이 교육비를 받기 위한 수단으로 채용을 가장했는지가 판단의 분기점입니다. 합격 보장·교육비 요구 대화와 미교육·미채용 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채용·결제 자료 보존 (즉시)</strong> — 채용 안내·합격 보장·교육비 요구 대화·결제 내역 캡처 보존.</li>\n<li><strong>2단계 — 미교육·잠적 입증 (즉시)</strong> — 교육 미진행·부실·채용 미뤄짐·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">허위 채용 빙자 교육비 선납 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채용·교육비·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>채용 공고·채용 안내·합격 보장 캡처 (거래 조건)</strong></li>\n<li><strong>교육비·자격증 비용 선납 요구 대화 (기망 정황)</strong></li>\n<li><strong>교육비·자격증 결제 내역 (피해 금액)</strong></li>\n<li><strong>교육 미진행·부실 정황 기록</strong></li>\n<li><strong>채용 미뤄짐·연락 두절 정황 자료</strong></li>\n<li><strong>업체·담당자·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정상적인 채용은 통상 입사 전 교육비·자격증 비용을 구직자에게 선납받지 않으므로, 선납 요구 대화와 합격 보장 안내를 함께 정리하면 채용 빙자 기망을 다투는 데 도움이 됩니다. 같은 공고로 다른 피해자가 있는지도 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채용 빙자·기망</strong> — 채용 의사 없이 교육비만 받으려 채용을 가장했는지.</li>\n<li><strong>편취 범의</strong> — 단순 채용 무산인지 처음부터 편취였는지.</li>\n<li><strong>고지의무</strong> — 채용 불가 사정을 숨기고 교육비를 받았는지.</li>\n<li><strong>편취액</strong> — 교육비·자격증 비용 등 교부 금액 전부가 피해액인지.</li>\n<li><strong>업체 특정</strong> — 업체·담당자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>고용노동부 고객상담센터 1350 (채용 절차·구직 피해 상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 고지의무 증명책임',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄의 요건인 부작위에 의한 기망이 인정되려면 법률상 고지의무가 있어야 하고, 그 근거가 되는 거래의 내용이나 거래관행 등 거래실정에 관한 사실은 검사가 주장·증명해야 한다고 판시했습니다. 또 변제자력 등에 관한 고지의무가 있었다거나 상대방이 그 사정을 착오한 상태에서 거래에 임했다고 단정하기 어렵다면 곧바로 유죄로 볼 수 없다고 보았습니다. 채용을 빙자해 교육비를 선납받은 사안을 살펴볼 때에도, 채용·교육의 실질과 고지의무, 처음부터의 편취 범의를 신중히 가려 검토해볼 수 있습니다.',
        takeaway: '채용 빙자 + 교육비 선납 + 미교육·미채용·잠적 결합 시 허위 채용 교육비 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '채용이 무산된 것뿐 아닌가요?',
        answer:
          '<strong>채용 의사 없이 교육비만 받으려 채용을 가장했는지가 핵심인 영역입니다.</strong> 합격 보장·교육비 요구 대화를 확보하세요.',
      },
      {
        question: '교육비를 먼저 내라는 게 정상인가요?',
        answer:
          '<strong>입사 전 구직자에게 교육비를 선납받는 것은 기망을 의심할 단서인 영역입니다.</strong> 선납 요구 경위를 정리하세요.',
      },
      {
        question: '교육이 부실했는데 사기로 볼 수 있나요?',
        answer:
          '<strong>교육 미진행·부실과 미채용 정황이 편취를 다투는 단서인 영역입니다.</strong> 교육 진행 여부를 기록하세요.',
      },
      {
        question: '같은 공고로 여러 명이 당한 것 같아요.',
        answer:
          '<strong>같은 공고의 다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 다른 피해자·공고 정황을 모으세요.',
      },
      {
        question: '업체가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/guide/fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '취업 빙자 보증금 사기', href: '/guide/fraud/fraud-employment-job-offer-deposit-scam' },
      { label: '가짜 채용 보증금 회수', href: '/guide/fraud/fraud-fake-job-deposit-recover' },
      { label: '채용 선급 수수료 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
      { label: '재택 부업 선입금 추적', href: '/guide/fraud/fraud-remote-job-prepayment-track' },
    ],
  },

  // ─── 3. fraud-online-lecture-refund-refusal-disappear-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-refund-refusal-disappear-track',
    keyword: '온라인 강의 환불 거부 잠적 사기',
    questionKeyword: '온라인 강의·인터넷 강좌 업체에서 ‘마음에 안 들면 언제든 전액 환불해준다, 수강 효과를 보장한다’는 광고를 믿고 적지 않은 수강료를 결제했는데, 막상 강의는 광고와 다르게 부실하거나 약속한 자료·첨삭이 제공되지 않았어요. 환불을 요청하니 ‘환불 규정에 안 된다, 처리 중이다’며 차일피일 미루다 결국 고객센터·담당자가 연락을 끊고 잠적했고, 알고 보니 같은 방식으로 여러 수강생에게 환불을 거부하고 잠적한 것 같은데, 이런 온라인 강의 환불 거부·잠적을 사기로 신고하고 결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '온라인 강의 환불 거부 잠적 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 환불 거부 잠적 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '환불 보장 광고를 믿고 강의를 결제했는데 강의도 부실하고 환불도 거부당해 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「온라인 강의·인터넷 강좌·평생교육 업체에서 ‘마음에 들지 않으면 언제든 전액 환불해준다, 수강하면 분명한 효과를 볼 수 있다, 1:1 첨삭과 자료도 모두 제공한다’는 솔깃한 광고를 믿고, 자기계발·취업 준비를 위해 적지 않은 수강료를 한 번에 결제한 분의 상황입니다. 그런데 막상 강의는 광고와 다르게 부실하거나, 약속한 학습 자료·첨삭·관리가 제대로 제공되지 않아 환불을 요청했더니, ‘환불 규정상 안 된다, 지금 처리 중이니 기다려라, 담당자가 연락 줄 것이다’라며 차일피일 미루기만 하다가, 결국 환불도 못 받은 채 고객센터·담당자가 연락을 끊고 잠적해, 알고 보니 같은 방식으로 여러 수강생에게 환불을 거부하고 잠적해 온 건 아닌지 의심되고 막막하실 거예요. 큰맘 먹고 낸 수강료라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 강의를 제공하거나 환불할 의사·능력 없이 환불 보장·효과 보장을 내세워 수강료를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기소된 사기 사건에서 공소장에 기재된 피해자와 실제 재산상 피해자가 다른 것이 판명된 경우 진정한 피해자를 가려내어 그에 대한 사기죄로 판단해야 한다고 본 사례 흐름이 있는 영역으로, 실제 손해를 입은 수강생을 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 환불·효과 보장 + 부실 강의 + 환불 거부·잠적 결합은 ‘환불 거부 잠적 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·약정 정리 ② 보장·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 환불 거부 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·보장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·약정 정리</strong> — 환불 보장·효과 보장 광고·수강료 결제·계약 내역 정리.</li>\n<li><strong>② 보장·기망</strong> — 강의 제공·환불 의사 없이 보장만 내세워 결제를 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 결제한 수강료 등 교부 금액 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 카드 항변·피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 환불 분쟁과 달리, 강의 제공·환불 의사 없이 환불 보장·효과 보장을 내세워 수강료를 받고 환불을 거부·잠적했는지가 판단의 분기점입니다. 환불 보장 광고와 환불 거부·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·약정 자료 보존 (즉시)</strong> — 환불 보장·효과 보장 광고·수강료 결제·계약서를 캡처 보존.</li>\n<li><strong>2단계 — 부실·잠적 입증 (즉시)</strong> — 강의 부실·자료 미제공·환불 거부·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 피해구제·항변 (병행)</strong> — 한국소비자원 피해구제와 카드 할부항변·결제 취소를 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 미이용분 환급·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 환불 거부·잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·보장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>수강 계약서·결제 영수증 (거래 조건)</strong></li>\n<li><strong>환불 보장·효과 보장 광고·안내 캡처 (기망 정황)</strong></li>\n<li><strong>수강료 결제·이용 잔여 내역 (피해 금액)</strong></li>\n<li><strong>강의 부실·자료 미제공 정황 기록</strong></li>\n<li><strong>환불 요청·거부·잠적 대화 기록</strong></li>\n<li><strong>업체·담당자·사업자·계좌 정보</strong></li>\n<li><strong>카드 항변·소비자원 피해구제 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환불 보장·효과 보장 광고는 화면이 바뀌거나 삭제되기 쉬우니 결제 직후 캡처해두는 것이 중요합니다. 카드 할부로 결제했다면 할부항변권으로 잔여 대금 지급 거절을 함께 알아보면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보장·기망</strong> — 환불·효과 보장을 지킬 의사 없이 내세워 결제를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 환불 분쟁인지 처음부터 편취였는지.</li>\n<li><strong>진정한 피해자</strong> — 실제 손해를 입은 수강생이 누구인지.</li>\n<li><strong>손해액</strong> — 결제한 수강료 중 미이용분이 얼마인지.</li>\n<li><strong>업체 특정</strong> — 사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 강의·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진정한 피해자 확정과 사기죄 성립',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것이 판명된 경우, 공소사실의 동일성을 해하지 않고 방어권 행사에 실질적 불이익을 주지 않는 한 공소장변경 없이 직권으로 진정한 피해자를 적시해 유죄로 인정해야 한다고 판시했습니다. 곧바로 무죄로 선고할 것이 아니라 실제 손해를 입은 진정한 피해자를 가려내어 그에 대한 사기죄로 처벌해야 한다고 보았습니다. 환불·효과 보장으로 수강료를 받고 환불을 거부·잠적한 사안을 살펴볼 때에도, 실제 손해를 입은 수강생을 기준으로 한 편취 성립과 손해액을 검토해볼 수 있습니다.',
        takeaway: '환불·효과 보장 + 부실 강의 + 환불 거부·잠적 결합 시 환불 거부 잠적 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '단순 환불 분쟁 아닌가요?',
        answer:
          '<strong>강의 제공·환불 의사 없이 보장만 내세워 결제를 받았는지가 핵심인 영역입니다.</strong> 환불 보장 광고와 거부 정황을 확보하세요.',
      },
      {
        question: '환불 규정이 없다고 하면 못 받나요?',
        answer:
          '<strong>약관과 별개로 미이용분 환급·민사 반환을 검토할 수 있는 영역입니다.</strong> 잔여 이용 기간·금액을 정리하세요.',
      },
      {
        question: '강의가 부실하면 사기로 볼 수 있나요?',
        answer:
          '<strong>광고와 다른 부실·자료 미제공은 기망을 다투는 단서인 영역입니다.</strong> 광고와 실제 제공 내용을 비교해 기록하세요.',
      },
      {
        question: '카드 할부로 냈는데 멈출 수 있나요?',
        answer:
          '<strong>장기 할부는 할부항변권으로 잔여 대금 지급 거절을 검토할 수 있는 영역입니다.</strong> 카드사에 항변권을 알아보세요.',
      },
      {
        question: '업체가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>피해구제·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 사업자·계좌 정보를 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 강의 환불 거부 추적', href: '/guide/fraud/fraud-online-course-refund-refusal-track' },
      { label: '학원 수강료 환불 거부 분쟁', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '온라인 강의 선결제 미제공 추적', href: '/guide/fraud/fraud-online-lecture-prepaid-no-service-track' },
      { label: '온라인 강의 평생회원 추적', href: '/guide/fraud/fraud-online-lecture-lifetime-membership-track' },
    ],
  },

  // ─── 4. fraud-pet-adoption-deposit-no-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-adoption-deposit-no-delivery-track',
    keyword: '반려동물 분양 입금 미인도 사기',
    questionKeyword: '반려동물 분양 사이트·SNS·중고 거래 앱에서 ‘건강한 강아지·고양이를 분양한다, 인기가 많아 예약금을 먼저 입금해야 데려갈 수 있다’는 글을 믿고, 귀여운 사진을 보고 마음을 빼앗겨 예약금·분양비를 먼저 입금했는데, 막상 데려가려 하면 ‘이동장·예방접종·보험비를 더 보내야 한다’며 추가 입금만 요구하다 결국 동물도 못 받고 연락이 끊겼어요. 알고 보니 실제 분양할 동물 없이 사진만 도용해 여러 명에게 예약금을 받아 챙긴 것 같은데, 이런 반려동물 분양 입금 미인도 사기를 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '반려동물 분양 입금 미인도 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '반려동물 분양 입금 미인도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '강아지·고양이 분양 예약금을 입금했는데 추가 입금만 요구당하고 동물도 못 받고 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「반려동물 분양 사이트·SNS·중고 거래 앱에서 ‘건강하고 예쁜 강아지·고양이를 분양한다, 워낙 인기가 많아 예약금을 먼저 입금해야 자리를 잡아둘 수 있다, 입금하면 안전하게 보내주겠다’는 글을 보고, 사진 속 모습에 마음을 빼앗겨 예약금·분양비를 서둘러 먼저 입금한 분의 상황입니다. 그런데 막상 아이를 데려가려 하면 ‘안전 이동장·예방접종·보험·검역 비용을 먼저 더 보내야 출고된다, 지금 보내면 나중에 환급된다’며 추가 입금만 계속 요구하다가, 결국 동물을 받지도 못한 채 판매자가 게시글·계정·연락처를 닫고 사라져, 알고 보니 실제 분양할 동물 없이 인터넷의 사진만 도용해 여러 명에게 예약금을 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 가족으로 맞이하려던 아이라 더 마음이 아프고 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 인도할 동물이나 이행 의사 없이 분양을 가장해 예약금·추가 비용을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄를 적용할 때 편취한 재물·재산상 이익의 가액을 구체적으로 산정해야 한다고 본 사례 흐름이 있는 영역으로, 예약금·추가 입금의 교부 금액을 기준으로 편취 여부와 손해액을 가려 다툴 여지가 있습니다. 분양 빙자 + 예약금 입금 + 추가 요구·미인도·잠적 결합은 ‘분양 입금 미인도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 분양 빙자·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 분양 입금 미인도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·분양 빙자·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 분양 글·예약금 요구·인도 약속·입금 내역 정리.</li>\n<li><strong>② 분양 빙자·기망</strong> — 인도할 동물 없이 사진을 도용해 분양을 가장했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 예약금·추가 입금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 분양 무산과 달리, 인도할 동물이나 이행 의사 없이 사진을 도용해 분양을 가장하고 예약금·추가 비용만 받았는지가 판단의 분기점입니다. 분양 글·인도 약속과 추가 요구·미인도 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 분양 글·동물 사진·인도 약속 대화·예약금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 추가 요구·미인도 입증 (즉시)</strong> — 이동장·예방접종·보험비 추가 요구·미인도·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 분양 입금 미인도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·분양 빙자·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양 글·동물 사진·분양가 캡처 (거래 조건)</strong></li>\n<li><strong>예약금 요구·인도 약속 대화 (기망 정황)</strong></li>\n<li><strong>예약금·추가 입금 내역 (피해 금액)</strong></li>\n<li><strong>이동장·접종·보험비 추가 요구 기록</strong></li>\n<li><strong>동물 사진 도용·동일 사진 재게시 정황</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양 글의 동물 사진을 인터넷에서 이미지 검색해 다른 글·다른 피해자에게 같은 사진이 쓰였는지 확인해두면 분양 빙자 기망을 다투는 데 도움이 됩니다. 출고비 명목 추가 요구는 전형적인 편취 정황이므로 대화를 빠짐없이 정리하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분양 빙자·기망</strong> — 인도할 동물 없이 사진을 도용해 분양을 가장했는지.</li>\n<li><strong>편취 범의</strong> — 단순 분양 무산인지 처음부터 편취였는지.</li>\n<li><strong>추가 요구</strong> — 이동장·접종·보험비 명목 추가 입금만 요구했는지.</li>\n<li><strong>편취액</strong> — 예약금·추가 입금 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (반려동물 분양·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 편취액 가액 산정의 엄격성',
        summary:
          '대법원 2022도3771(대법원, 2022.06.30 선고) 영역에서 법원은 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄를 적용할 때 유의할 사항을 밝히면서, 사기로 편취한 재물 또는 재산상 이익의 가액을 구체적으로 산정할 수 없는 경우에는 특정경제범죄 가중처벌 등에 관한 법률 위반(사기)죄로 처벌할 수 없다고 판시했습니다. 기망행위의 상대방과 착오·처분행위의 주체, 금원 편취의 구성요건을 사안의 거래 성격에 비추어 신중히 가려야 한다고 보았습니다. 분양을 빙자해 예약금·추가 비용을 받은 사안을 살펴볼 때에도, 예약금·추가 입금의 교부 금액을 기준으로 편취 여부와 손해액 산정을 검토해볼 수 있습니다.',
        takeaway: '분양 빙자 + 예약금 입금 + 추가 요구·미인도·잠적 결합 시 분양 입금 미인도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '분양이 무산된 것뿐 아닌가요?',
        answer:
          '<strong>인도할 동물·이행 의사 없이 사진을 도용해 분양을 가장했는지가 핵심인 영역입니다.</strong> 분양 글과 인도 약속을 확보하세요.',
      },
      {
        question: '이동장·접종비를 더 보내라고 해요.',
        answer:
          '<strong>출고비 명목 추가 요구는 전형적인 편취 정황인 영역입니다.</strong> 추가 입금 요구 대화와 내역을 정리하세요.',
      },
      {
        question: '같은 사진이 다른 글에도 있어요.',
        answer:
          '<strong>사진 도용·동일 사진 재게시는 분양 빙자 기망의 단서인 영역입니다.</strong> 이미지 검색 결과를 캡처해두세요.',
      },
      {
        question: '예약금·추가 입금 전부가 피해액인가요?',
        answer:
          '<strong>교부한 예약금·추가 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 빠짐없이 정리하세요.',
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
      { label: '강아지 분양 입금 미인도 추적', href: '/guide/fraud/fraud-pet-puppy-deposit-no-delivery-track' },
      { label: '반려동물 허위 매물 추적', href: '/guide/fraud/fraud-pet-adoption-false-listing-track' },
      { label: '강아지 예약금 분양 추적', href: '/guide/fraud/fraud-puppy-adoption-reservation-deposit-track' },
      { label: '에어비앤비 허위 매물 보증금 추적', href: '/guide/fraud/fraud-airbnb-fake-listing-deposit-track' },
    ],
  },

  // ─── 5. fraud-gap-investment-rental-income-guarantee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gap-investment-rental-income-guarantee-track',
    keyword: '갭투자 임대수익 보장 기망 사기',
    questionKeyword: '부동산 분양·갭투자 업체에서 ‘적은 돈으로 집을 사두면 전세를 끼고 임대수익까지 보장된다, 손해 볼 일 없으니 분양·매매대금만 내면 된다’는 설명을 믿고, 노후 대비로 적지 않은 분양대금·매매대금을 냈는데, 막상 약속한 임대수익은 나오지 않고 세입자도 구해지지 않으며 시세보다 비싸게 떠넘긴 정황이 드러났어요. 알고 보니 처음부터 임대수익을 줄 의사·능력 없이 보장만 내세워 대금을 받아 챙긴 것 같은데, 이런 갭투자 임대수익 보장 기망을 사기로 신고하고 낸 돈을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '갭투자 임대수익 보장 기망 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '갭투자 임대수익 보장 기망 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '임대수익을 보장한다며 분양·매매대금을 냈는데 수익도 없고 시세보다 비싸게 떠넘겨졌다면, 형법 제347조 사기의 편취 판단과 반환·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「부동산 분양·갭투자·임대사업 업체에서 ‘지금은 적은 돈만 있으면 전세를 끼고 집을 사둘 수 있다, 임대수익이 매달 보장되고 시세도 오를 일만 남았다, 손해 볼 일이 없으니 분양대금·매매대금만 맞춰 내면 된다’는 그럴듯한 설명을 믿고, 노후 대비·재테크를 위해 적지 않은 분양대금·매매대금을 마련해 낸 분의 상황입니다. 그런데 막상 약속한 임대수익은 들어오지 않고, 세입자가 구해지지 않거나 전세가 빠지면서 추가로 돈을 메워야 했고, 알아보니 매매가가 인근 시세보다 훨씬 비싸게 책정돼 처음부터 손해를 떠안도록 떠넘겨진 정황이 드러나, 알고 보니 임대수익을 줄 의사·능력 없이 보장만 내세워 분양·매매대금을 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 평생 모은 돈이 걸린 일이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 임대수익을 보장할 의사·능력 없이 손해를 떠넘기면서 보장을 내세워 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 공소사실·범죄사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 규범적 요소도 고려해 판단해야 하고, 건축·분양 의사나 능력 없이 분양대금을 편취했다는 사기와 다른 죄의 동일성을 신중히 가린 사례 흐름이 있는 영역으로, 분양·매매대금의 교부와 편취 범의를 가려 다툴 여지가 있습니다. 임대수익 보장 + 시세 초과 매매 + 수익 미지급 결합은 ‘임대수익 보장 기망’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·대금 정리 ② 임대수익 보장·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 반환·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 갭투자 임대수익 보장 기망 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·임대수익 보장·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·대금 정리</strong> — 분양·매매 계약·임대수익 보장 설명·대금 납부 내역 정리.</li>\n<li><strong>② 임대수익 보장·기망</strong> — 수익 줄 의사·능력 없이 시세 초과로 떠넘기며 보장만 했는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 분양·매매대금과 시세 차이 등 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 반환·환급</strong> — 계약 취소·민사 반환·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 임대수익을 줄 의사·능력 없이 시세보다 비싸게 떠넘기며 임대수익 보장을 내세워 대금을 받았는지가 판단의 분기점입니다. 임대수익 보장 설명과 시세 비교·수익 미지급 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·대금 자료 보존 (즉시)</strong> — 분양·매매 계약서·임대수익 보장 설명·홍보 자료·대금 납부 내역 캡처 보존.</li>\n<li><strong>2단계 — 시세 초과·수익 미지급 입증 (즉시)</strong> — 인근 시세 비교·임대수익 미지급·세입자 미확보 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 계약 취소·반환 요구 (병행)</strong> — 기망에 의한 계약 취소·대금 반환을 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 반환·환급 (2개월 내)</strong> — 민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">갭투자 임대수익 보장 기망 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·임대수익 보장·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양·매매 계약서·등기 자료 (거래 조건)</strong></li>\n<li><strong>임대수익 보장 설명·홍보 자료 (기망 정황)</strong></li>\n<li><strong>분양·매매대금 납부 내역 (피해 금액)</strong></li>\n<li><strong>인근 실거래가·시세 비교 자료</strong></li>\n<li><strong>임대수익 미지급·세입자 미확보 기록</strong></li>\n<li><strong>업체·시행사·중개·계좌 정보</strong></li>\n<li><strong>계약 취소·민사 반환 청구 준비 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 당시 임대수익 보장 설명·홍보 자료와 실제 인근 실거래가를 비교해 시세보다 비싸게 떠넘겨진 정황을 정리하면 임대수익 보장 기망을 다투는 데 도움이 됩니다. 보장 약속이 구두였다면 녹취·문자·홍보물 등 객관 자료로 뒷받침하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대수익 보장·기망</strong> — 수익 줄 의사·능력 없이 보장만 내세웠는지.</li>\n<li><strong>편취 범의</strong> — 단순 투자 손실인지 처음부터 편취였는지.</li>\n<li><strong>시세 초과</strong> — 인근 시세보다 비싸게 떠넘긴 정황이 있는지.</li>\n<li><strong>손해액</strong> — 분양·매매대금과 시세 차이가 얼마인지.</li>\n<li><strong>업체 특정</strong> — 시행사·중개·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자·부동산 피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 분양 빙자 사기와 사실의 동일성 판단',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실이나 범죄사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 고려해 판단해야 한다고 보면서, 아파트 사전분양으로 인한 주택건설촉진법 위반죄와 ‘아파트를 건축·분양할 의사나 능력 없이 피해자들을 기망해 분양대금을 편취했다’는 사기 공소사실 사이에 동일성이나 1죄·상상적 경합관계가 있다고 보기 어렵다고 판시했습니다. 임대수익을 보장한다며 분양·매매대금을 받은 사안을 살펴볼 때에도, 건축·분양·수익 보장의 의사·능력과 처음부터의 편취 범의, 분양대금의 교부를 가려 검토해볼 수 있습니다.',
        takeaway: '임대수익 보장 + 시세 초과 매매 + 수익 미지급 결합 시 임대수익 보장 기망 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실을 본 것뿐 아닌가요?',
        answer:
          '<strong>수익 줄 의사·능력 없이 시세보다 비싸게 떠넘기며 보장만 했는지가 핵심인 영역입니다.</strong> 보장 설명과 시세 비교 자료를 확보하세요.',
      },
      {
        question: '임대수익을 보장한다고 했는데 안 줘요.',
        answer:
          '<strong>보장 약속과 미지급 정황은 기망·편취를 다투는 단서인 영역입니다.</strong> 보장 설명·홍보 자료와 미지급 내역을 정리하세요.',
      },
      {
        question: '시세보다 비싸게 산 것 같아요.',
        answer:
          '<strong>인근 실거래가보다 비싸게 떠넘겨진 정황은 손해와 기망의 단서인 영역입니다.</strong> 실거래가·시세 비교 자료를 모으세요.',
      },
      {
        question: '계약서에 서명했는데 취소되나요?',
        answer:
          '<strong>기망에 의한 계약이면 취소·반환을 검토할 수 있는 영역입니다.</strong> 계약 경위와 보장 설명을 함께 정리하세요.',
      },
      {
        question: '낸 돈을 어떻게 돌려받나요?',
        answer:
          '<strong>계약 취소·민사 반환·손해배상 청구로 회수를 검토할 수 있는 영역입니다.</strong> 시행사·중개·계좌 정보를 확보하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/guide/fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '갭투자 분양 무고 방어', href: '/guide/fraud/fraud-gap-investment-presale-accused' },
      { label: '공동투자 수익 보장 추적', href: '/guide/fraud/fraud-joint-investment-profit-guarantee-track' },
      { label: '코인 원금 보장 추적', href: '/guide/fraud/fraud-coin-principal-guarantee-track' },
      { label: '미술품 분할소유 투자 추적', href: '/guide/fraud/fraud-art-investment-fractional-ownership-track' },
    ],
  },

  // ─── 6. fraud-investment-principal-guarantee-nonperformance-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-principal-guarantee-nonperformance-falsely-accused-defense',
    keyword: '투자원금 보장 약정 미이행 사기 무고 방어',
    questionKeyword: '지인·친척에게 투자·자금 융통을 받으면서 ‘원금은 보장해주겠다, 수익이 나면 나눠주겠다’고 약정했는데, 이후 사업 사정이 나빠지고 시장이 어려워져 원금·수익을 제때 돌려주지 못했더니, 상대가 ‘처음부터 갚을 생각이 없었으면서 원금 보장으로 속였다’며 저를 사기로 고소했어요. 저는 받을 당시에는 실제로 사업·투자에 쓸 의사와 갚을 능력이 있었고 상대도 제 사정을 잘 알고 돈을 준 것인데, 이렇게 원금 보장 약정을 못 지킨 것이 사기로 몰린 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '투자원금 보장 약정 미이행 사기 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '투자원금 보장 약정 미이행 사기 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '원금 보장 약정을 못 지켰다고 사기로 고소당해 억울하다면, 형법 제347조 사기의 편취 범의 판단 기준과 방어 자료 정리까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·친척·동업 상대에게 투자나 자금 융통을 받으면서 ‘원금은 보장해주겠다, 수익이 나면 함께 나누겠다’고 약정하고 돈을 받아 실제로 사업·투자에 사용했는데, 이후 사업 사정이 나빠지고 시장이 어려워지면서 약속한 원금·수익을 제때 돌려주지 못하게 된 분의 상황입니다. 사정을 설명하고 변제를 미루는 사이, 상대가 ‘처음부터 갚을 생각이 없었으면서 원금 보장이라는 말로 속여 돈을 받아간 것이다’라며 저를 사기로 고소해, 정작 받을 당시에는 실제로 사업·투자에 쓸 의사와 갚을 능력이 있었고 상대도 제 사정과 신용 상태를 잘 알면서 돈을 준 것인데도 한순간에 사기 가해자로 몰린 상황이라 억울하고 막막하실 거예요. 관계까지 얽혀 있어 더 답답하셨을 거예요. 혐의를 받고 있다면, 받을 당시의 의사·능력과 상대가 위험을 알고 있었는지를 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하지만, 사기죄 성립 여부는 행위 당시를 기준으로 판단하므로 받을 당시에는 변제 의사·능력이 있었다면 이후 갚지 못했더라도 원칙적으로 민사상 채무불이행에 그칠 수 있는 영역입니다. 판례는 대주와 차주의 인적 관계·계속 거래 등으로 대주가 차주의 신용 상태를 알고 장래 변제 지체·불능 위험을 예상했거나 충분히 예상할 수 있었던 경우, 차용 당시 중요 사항에 관한 허위 사실을 말한 다른 사정이 없다면 이후 변제하지 못했다는 사실만으로 기망·편취 범의를 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 원금 보장 약정 + 사후 변제 곤란 + 상대의 위험 인식 결합은 ‘편취 범의 부재’를 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 약정·자금 정리 ② 행위 당시 의사·능력 ③ 상대 위험 인식 ④ 조사 대응 ⑤ 무고·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 투자원금 보장 약정 미이행 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·행위 당시 의사·상대 인식·조사·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정·자금 정리</strong> — 원금 보장 약정·자금 용도·실제 사용 내역 정리.</li>\n<li><strong>② 행위 당시 의사·능력</strong> — 받을 당시 변제 의사·자금·사업 능력이 있었는지 정리.</li>\n<li><strong>③ 상대 위험 인식</strong> — 상대가 신용 상태·사업 위험을 알고 돈을 줬는지 검토.</li>\n<li><strong>④ 조사 대응</strong> — 채무불이행과 편취 범의 구분 관점에서 진술 준비.</li>\n<li><strong>⑤ 무고·방어</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 받을 당시 변제 의사·능력이 있었는지, 상대가 위험을 알고 돈을 줬는지가 사기와 단순 채무불이행을 가르는 분기점입니다. 자금을 실제로 사업·투자에 쓴 내역과 상대가 사정을 알고 있었던 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·자금 자료 보존 (즉시)</strong> — 원금 보장 약정·차용증·자금 용도·실제 사용 내역을 시간순으로 보존.</li>\n<li><strong>2단계 — 행위 당시 의사·능력 정리 (즉시)</strong> — 받을 당시 사업·투자 실행 정황과 변제 능력 자료를 확보.</li>\n<li><strong>3단계 — 상대 인식 정리 (병행)</strong> — 상대가 신용·사업 위험을 알고 돈을 준 정황·대화를 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무고·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자원금 보장 약정 미이행 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 약정·행위 당시 의사·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>원금 보장 약정·차용증·계약서 (약정 내용)</strong></li>\n<li><strong>받은 자금의 실제 사업·투자 사용 내역 (사용 정황)</strong></li>\n<li><strong>받을 당시 자금·소득·사업 능력 자료 (변제 능력)</strong></li>\n<li><strong>상대가 신용·위험을 알고 준 정황 대화 기록</strong></li>\n<li><strong>일부 변제·이자 지급 등 이행 노력 자료</strong></li>\n<li><strong>사업 악화·시장 변화 등 사후 사정 자료</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 돈을 실제로 사업·투자에 쓴 내역과 일부라도 변제하려 노력한 자료는 편취 범의가 없었음을 다투는 데 도움이 됩니다. 상대가 신용 상태·사업 위험을 알고 돈을 준 정황을 정리하면 단순 채무불이행과 사기의 구분을 분명히 하는 데 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 받을 당시 변제 의사·능력이 있었는지.</li>\n<li><strong>채무불이행 구분</strong> — 이후 갚지 못한 것이 단순 채무불이행인지.</li>\n<li><strong>상대 위험 인식</strong> — 상대가 신용·위험을 알고 돈을 줬는지.</li>\n<li><strong>허위 사실 여부</strong> — 차용 당시 중요 사항에 허위가 있었는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>금융감독원 1332 (금융·투자 분쟁 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용 사기의 편취 범의 판단 기준',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄 성립 여부는 행위 당시를 기준으로 판단해야 하므로, 차주가 돈을 빌릴 당시 변제 의사와 능력이 있었다면 이후 변제하지 않더라도 이는 민사상 채무불이행에 불과하고 형사상 사기죄가 성립하지 않는다고 판시했습니다. 또 친척·친지 등 인적 관계나 계속 거래로 대주가 차주의 신용 상태를 알아 장래 변제 지체·불능 위험을 예상했거나 충분히 예상할 수 있었던 경우, 차용 당시 중요 사항에 관해 허위 사실을 말한 다른 사정이 없다면 이후 제대로 변제하지 못했다는 사실만으로 기망이나 편취 범의를 단정할 수 없다고 보았습니다. 원금 보장 약정을 못 지킨 사안을 살펴볼 때에도, 행위 당시 의사·능력과 상대의 위험 인식을 기준으로 방어를 검토해볼 수 있습니다.',
        takeaway: '원금 보장 약정 + 사후 변제 곤란 + 상대의 위험 인식 결합 시 편취 범의 부재 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '원금을 보장한다고 했는데 못 갚으면 사기인가요?',
        answer:
          '<strong>받을 당시 변제 의사·능력이 있었다면 단순 채무불이행으로 다툴 수 있는 영역입니다.</strong> 행위 당시 사정을 정리하세요.',
      },
      {
        question: '상대가 제 사정을 알고 돈을 줬어요.',
        answer:
          '<strong>상대가 신용·위험을 알고 줬다면 기망·편취 범의를 다투는 단서인 영역입니다.</strong> 그 정황 대화를 확보하세요.',
      },
      {
        question: '받은 돈을 실제 사업에 썼는데 도움이 되나요?',
        answer:
          '<strong>자금을 실제 사업·투자에 쓴 내역은 편취 범의 부재의 단서인 영역입니다.</strong> 사용 내역을 빠짐없이 정리하세요.',
      },
      {
        question: '사실과 다르게 고소된 것 같아요.',
        answer:
          '<strong>사실과 다르게 신고되었다면 그 경위와 증거를 함께 정리하는 영역입니다.</strong> 무고 가능성도 변호인과 검토하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>행위 당시 의사·능력과 상대 인식에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 원금 보장 무고 방어', href: '/guide/fraud/fraud-acquaintance-principal-guarantee-falsely-accused-defense' },
      { label: '사업투자 빙자 차용 무고 방어', href: '/guide/fraud/fraud-business-investment-pretext-borrowing-falsely-accused-defense' },
      { label: '공동투자 수익 보장 추적', href: '/guide/fraud/fraud-joint-investment-profit-guarantee-track' },
      { label: '동료 코인 투자 손실 분쟁', href: '/guide/fraud/fraud-coworker-coin-investment-loss-dispute' },
    ],
  },

  // ─── 7. sex-crime-gym-pt-guidance-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-gym-pt-guidance-pretext-touch-report-track',
    keyword: '헬스장 PT 지도 빙자 추행 신고',
    questionKeyword: '헬스장에서 개인 PT 수업을 받던 중 트레이너가 ‘자세 교정·동작 지도’를 한다며 운동과 무관한 부위까지 손을 대거나, 필요 이상으로 몸을 밀착하고 만지는 일이 반복돼 너무 불쾌하고 수치스러웠어요. 처음엔 지도인가 싶어 참았지만 갈수록 접촉이 노골적이고 다른 회원에게도 비슷했다는 말을 들으니 단순 자세 지도가 아니라 지도를 빙자한 추행 같다는 생각이 들어요. 이런 PT 지도 빙자 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 어떻게 대응해야 하나요?',
    ctaKeyword: '헬스장 PT 지도 빙자 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 지도 빙자 추행 신고 — 5단계 해당성 점검 | 로앤가이드',
      description:
        '자세 교정이라며 운동과 무관한 부위를 만지거나 밀착해 수치스러웠다면, 강제추행죄의 추행 해당성·고의 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·피트니스에서 개인 PT 수업을 받던 중 트레이너가 ‘자세를 교정한다, 동작을 잡아준다’며 운동과 무관한 부위까지 손을 대거나, 시범·보조라는 명목으로 필요 이상 몸을 밀착하고 만지는 일이 반복돼 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘원래 이렇게 지도하나’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 특정 부위에 집중되며, 다른 회원에게도 비슷한 일이 있었다는 이야기까지 들으니, 단순한 자세 지도가 아니라 지도를 빙자한 추행은 아닌지 의심되고, 신고해도 ‘운동 지도였다’는 변명에 묻힐까 봐 막막하실 거예요. 믿고 다니던 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 운동 지도를 가장했더라도 운동과 무관한 부위를 만지거나 필요 이상 밀착한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행이 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 성적 자기결정권을 침해하는 행위를 의미하며, 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 결정해야 하고, 행위마다 추행행위와 그에 대한 범의가 인정되어야 한다고 본 사례 흐름이 있는 영역입니다. PT 지도 빙자 + 무관 부위 접촉 + 반복·노골 결합은 ‘지도 빙자 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성·고의 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 지도 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — PT 등록·수업 경위·트레이너와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 운동과 무관한 부위·밀착·반복 여부 정리.</li>\n<li><strong>③ 추행 해당성·고의</strong> — 지도 명목인지 추행행위·고의가 있는지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상적인 자세 지도와 달리, 운동과 무관한 부위를 만지거나 필요 이상 밀착했는지, 그 행위마다 추행의 고의가 인정되는지가 판단의 분기점입니다. 접촉 부위·방식·반복 정황과 다른 회원의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — PT 수업 경위·접촉 부위·방식·반복 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — CCTV·수업 일지·메시지·다른 회원의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 지도 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>PT 등록·수업 일정·결제 내역 (관계)</strong></li>\n<li><strong>접촉 부위·방식·반복 정황 기록 (행위 태양)</strong></li>\n<li><strong>헬스장 CCTV·수업 일지 확보 요청 자료</strong></li>\n<li><strong>트레이너와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>다른 회원의 유사 경험·목격 진술</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 보관 기간이 짧아 빨리 지워질 수 있으니 헬스장에 보존을 요청하고 경찰에 신속히 알리는 것이 중요합니다. 접촉이 운동과 무관한 부위에 집중됐는지, 반복됐는지를 구체적으로 기록하면 추행 해당성과 고의를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 운동과 무관한 부위 접촉·밀착인지.</li>\n<li><strong>추행 고의</strong> — 지도 명목인지 추행 고의가 인정되는지.</li>\n<li><strong>행위별 판단</strong> — 각 접촉행위마다 추행·범의가 인정되는지.</li>\n<li><strong>객관 정황</strong> — CCTV·메시지·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 행위별 범의 판단',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄의 추행이 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 피해자의 성적 자기결정권을 침해하는 것을 의미한다고 보았습니다. 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위 태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 결정해야 하고, 강제추행죄는 특별한 사정이 없는 한 행위마다 1개의 범죄가 성립해 행위마다 추행행위와 그에 대한 범의가 인정되어야 한다고 판시했습니다. PT 지도를 빙자한 접촉 사안을 살펴볼 때에도, 행위 태양과 관계·경위를 종합해 추행 해당성과 고의를 검토해볼 수 있습니다.',
        takeaway: 'PT 지도 빙자 + 무관 부위 접촉 + 반복·노골 결합 시 지도 빙자 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자세 교정이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>운동과 무관한 부위 접촉·밀착인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '처음엔 참았는데 신고할 수 있나요?',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 반복 정황과 시점을 정리하세요.',
      },
      {
        question: '다른 회원도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·목격은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 회원의 진술을 확보하세요.',
      },
      {
        question: 'CCTV가 없으면 입증이 어렵나요?',
        answer:
          '<strong>접촉 정황 기록·메시지·유사 경험으로도 다툴 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
      { label: '수영장 탈의실 추행 신고', href: '/guide/sex-crime/sex-crime-swimming-pool-locker-room-touch-report-track' },
      { label: 'PT 트레이너 부적절 접촉 추적', href: '/guide/sex-crime/sex-crime-gym-personal-trainer-inappropriate-contact-track' },
    ],
  },

  // ─── 8. sex-crime-company-dinner-karaoke-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-karaoke-touch-report-track',
    keyword: '회식 노래방 추행 신고',
    questionKeyword: '회사 회식 2차로 간 노래방에서 직장 상사·동료가 술에 취한 분위기를 틈타 옆에 바짝 붙어 앉아 어깨·허리·허벅지에 손을 올리거나, 노래·블루스를 핑계로 몸을 끌어안고 만져 너무 불쾌하고 수치스러웠어요. 그 자리에서는 분위기상 강하게 거부하지 못하고 넘어갔지만, 두고두고 모멸감이 들고 다른 직원에게도 비슷한 일이 있었다는 말을 들으니 단순 실수가 아니라 추행 같다는 생각이 들어요. 이런 회식 노래방 추행을 신고하려면 어떤 기준으로 추행에 해당하는지, 어떤 자료를 모아 대응해야 하나요?',
    ctaKeyword: '회식 노래방 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '회식 노래방 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '회식 노래방에서 술 취한 틈을 타 몸을 만지고 끌어안아 수치스러웠다면, 강제추행죄의 추행 해당성·수치심 판단과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식 자리, 특히 2차로 간 노래방에서 직장 상사·동료가 술에 취한 분위기를 틈타 옆에 바짝 붙어 앉아 어깨·허리·허벅지에 손을 올리거나, 노래·춤·블루스를 핑계로 몸을 끌어안고 만져 너무 불쾌하고 수치스러웠던 분의 상황입니다. 그 자리에서는 ‘분위기 깨면 안 된다, 괜히 예민하다는 소리를 들을까’ 싶어 강하게 거부하지 못하고 어색하게 넘어갔지만, 집에 와서도 두고두고 모멸감이 들고, 다른 직원에게도 비슷한 일이 있었다는 이야기를 들으니, 단순한 술자리 실수가 아니라 추행은 아닌지 의심되고, 신고해도 ‘취해서 기억이 안 난다, 분위기였다’는 변명에 묻힐까 봐 막막하실 거예요. 매일 마주쳐야 하는 직장 동료라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하는 영역입니다. 술자리·노래방이라는 분위기였더라도 동의 없이 신체에 손을 올리거나 끌어안은 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 추행이 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 성적 자기결정권을 침해하는 행위를 의미한다고 보면서, 추행행위에 해당하기 위해 대상자가 성적 수치심·혐오감을 반드시 실제로 느껴야 하는 것은 아니라고 본 사례 흐름이 있는 영역으로, 행위의 객관적 성격을 기준으로 추행 해당성을 가려 다툴 여지가 있습니다. 회식 노래방 + 동의 없는 신체 접촉 + 반복·유사 사례 결합은 ‘회식 추행 해당성’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성·수치심 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 노래방 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 회식 경위·자리 배치·상사·동료와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 동의 없는 어깨·허리·허벅지 접촉·포옹 여부 정리.</li>\n<li><strong>③ 추행 해당성·수치심</strong> — 객관적으로 성적 수치심·혐오감을 일으키는 행위인지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366·직장 내 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 술자리 분위기였더라도 동의 없이 신체에 손을 올리거나 끌어안았는지, 그 행위가 객관적으로 성적 수치심·혐오감을 일으키는지가 판단의 분기점입니다. 자리 배치·접촉 정황과 다른 직원의 유사 경험을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 회식 경위·자리 배치·접촉 부위·방식 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 노래방 CCTV·동석자 진술·메시지·다른 직원의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·직장 내 조치 (조사 단계)</strong> — 진술·증거 정리와 직장 내 고충 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 노래방 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일시·장소·참석자 정리 (관계)</strong></li>\n<li><strong>자리 배치·접촉 부위·방식 정황 기록 (행위 태양)</strong></li>\n<li><strong>노래방·식당 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술·메시지 기록</strong></li>\n<li><strong>다른 직원의 유사 경험·증언</strong></li>\n<li><strong>사건 직후 심경·상담·진료 기록</strong></li>\n<li><strong>해바라기센터·1366·직장 고충 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노래방·식당 CCTV는 보관 기간이 짧으니 빨리 보존을 요청하고 경찰에 알리는 것이 중요합니다. 그 자리에서 강하게 거부하지 못했더라도 동의가 있었던 것은 아니므로, 당시 분위기·자리 배치·접촉 정황을 구체적으로 기록해두면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 동의 없는 신체 접촉·포옹인지.</li>\n<li><strong>수치심 요건</strong> — 객관적으로 성적 수치심·혐오감을 일으키는 행위인지.</li>\n<li><strong>음주·분위기</strong> — 취중·분위기라는 변명에 가려지지 않는지.</li>\n<li><strong>객관 정황</strong> — CCTV·동석자·유사 경험이 뒷받침되는지.</li>\n<li><strong>피해자 진술</strong> — 진술의 일관성·구체성이 확보되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 수치심 실감 요건',
        summary:
          '대법원 2021도7538(대법원, 2021.10.28 선고) 영역에서 법원은 추행이 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 피해자의 성적 자기결정권을 침해하는 것을 의미한다고 보면서, 추행행위에 해당하기 위해 대상자가 성적 수치심·혐오감을 반드시 실제로 느껴야 하는 것은 아니라고 판시했습니다. 처음 보는 여성의 뒤로 몰래 접근해 성기를 드러내고 등 쪽에 소변을 본 행위에 대해서도, 피해자가 행위 당시 이를 인식하지 못했더라도 객관적으로 성적 수치심·혐오감을 일으키는 추행행위에 해당할 여지가 있다고 보았습니다. 회식 노래방에서 동의 없이 신체를 접촉·포옹한 사안을 살펴볼 때에도, 행위의 객관적 성격을 기준으로 추행 해당성을 검토해볼 수 있습니다.',
        takeaway: '회식 노래방 + 동의 없는 신체 접촉 + 반복·유사 사례 결합 시 회식 추행 해당성 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '술자리 분위기였는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>분위기였더라도 동의 없는 신체 접촉·포옹인지가 핵심인 영역입니다.</strong> 접촉 부위·방식을 구체적으로 기록하세요.',
      },
      {
        question: '그 자리에서 거부 못 했는데 신고할 수 있나요?',
        answer:
          '<strong>강하게 거부하지 못했어도 동의가 있었던 것은 아닌 영역입니다.</strong> 당시 분위기·자리 배치를 정리하세요.',
      },
      {
        question: '상대가 취해서 기억 안 난다고 해요.',
        answer:
          '<strong>음주·분위기 변명에 가려지지 않도록 객관 정황을 모으는 영역입니다.</strong> CCTV·동석자 진술을 확보하세요.',
      },
      {
        question: '다른 직원도 비슷한 일을 겪었대요.',
        answer:
          '<strong>유사 경험·증언은 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 다른 직원의 진술을 확보하세요.',
      },
      {
        question: '직장에 알려질까 걱정돼요.',
        answer:
          '<strong>해바라기센터·1366에서 비밀 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담과 직장 내 절차를 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '회식 음주 신체접촉 추적', href: '/guide/sex-crime/sex-crime-company-dinner-intoxication-contact-track' },
      { label: '회식 후 택시 추행 추적', href: '/guide/sex-crime/sex-crime-company-dinner-taxi-molestation-track' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
    ],
  },

  // ─── 9. sex-crime-massage-shop-treatment-pretext-touch-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-treatment-pretext-touch-report-track',
    keyword: '마사지샵 시술 빙자 추행 신고',
    questionKeyword: '마사지샵·테라피샵에서 시술을 받던 중 관리사가 ‘이 부위도 풀어야 한다, 효과를 위해 필요하다’며 시술과 무관한 부위까지 손을 대거나, 가려진 공간에서 필요 이상으로 은밀한 부위를 만져 너무 불쾌하고 수치스러웠어요. 처음엔 시술인가 싶어 참았지만 갈수록 접촉이 노골적이라 단순 관리가 아니라 시술을 빙자한 추행 같다는 생각이 들어요. 이런 마사지샵 시술 빙자 추행을 신고하려면 어떤 절차로 진행되는지, 어떤 자료를 모아 어떻게 대응해야 하나요?',
    ctaKeyword: '마사지샵 시술 빙자 추행 신고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 시술 빙자 추행 신고 — 5단계 신고 절차 점검 | 로앤가이드',
      description:
        '시술이라며 무관한 부위나 은밀한 부위를 만져 수치스러웠다면, 시술 빙자 추행의 신고 절차와 보호 지원까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「마사지샵·테라피샵·관리실에서 시술을 받던 중 관리사가 ‘이 부위도 같이 풀어야 효과가 난다, 꼭 필요한 과정이다’라며 시술과 무관한 부위까지 손을 대거나, 커튼·룸으로 가려진 공간에서 필요 이상으로 은밀한 부위를 만져 너무 불쾌하고 수치스러웠던 분의 상황입니다. 처음에는 ‘원래 이런 관리인가’ 싶어 참고 넘겼지만, 갈수록 접촉이 노골적이고 시술과 무관한 부위에 집중되니, 단순한 관리가 아니라 시술을 빙자한 추행은 아닌지 의심되고, 밀폐된 공간이라 목격자도 없어 신고해도 ‘정상 시술이었다’는 변명에 묻힐까 봐 막막하실 거예요. 편히 쉬려고 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 경우를 강제추행죄로 정해 처벌하고, 사정에 따라 성폭력처벌법상 가중처벌이 문제 될 수 있는 영역입니다. 시술을 가장했더라도 시술과 무관한 부위를 만지거나 은밀한 부위를 접촉한 행위라면, 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 추행으로 평가될 여지가 있는 영역입니다. 판례는 성폭력처벌법이 신체적 장애가 있는 사람 등 보호가 필요한 피해자에 대한 성범죄를 가중처벌하며, 그 죄가 성립하려면 행위자가 범행 당시 피해자의 그러한 상태를 인식해야 한다고 본 사례 흐름이 있는 영역으로, 피해자의 상태와 행위 태양·인식을 가려 신중히 다툴 여지가 있습니다. 시술 빙자 + 무관·은밀 부위 접촉 + 밀폐 공간 결합은 ‘시술 빙자 추행’을 다툴 수 있는 트랙입니다. 피해자라면 ① 경위·관계 정리 ② 접촉 부위·태양 ③ 추행 해당성 ④ 신고·조사 ⑤ 보호·지원 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 시술 빙자 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 태양·추행 해당성·신고·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계 정리</strong> — 예약·시술 경위·관리사와의 관계 정리.</li>\n<li><strong>② 접촉 부위·태양</strong> — 시술과 무관한 부위·은밀 부위 접촉 여부 정리.</li>\n<li><strong>③ 추행 해당성</strong> — 정상 시술인지 추행행위·고의가 있는지 검토.</li>\n<li><strong>④ 신고·조사</strong> — 성폭력 신고·고소와 진술 준비.</li>\n<li><strong>⑤ 보호·지원</strong> — 해바라기센터·여성긴급전화 1366 지원 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상적인 관리·시술과 달리, 시술과 무관한 부위나 은밀한 부위를 만졌는지, 그 행위에 추행의 성격·고의가 인정되는지가 판단의 분기점입니다. 시술 부위·동의 범위와 접촉 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·성폭력 피해자 지원 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·접촉 자료 보존 (즉시)</strong> — 예약·시술 경위·접촉 부위·방식 정황을 시간순으로 기록·보존.</li>\n<li><strong>2단계 — 객관 자료 확보 (즉시)</strong> — 예약·결제 내역·매장 입출입 기록·메시지·다른 손님의 유사 경험을 확보.</li>\n<li><strong>3단계 — 보호·심리 지원 (병행)</strong> — 해바라기센터·여성긴급전화 1366 상담·지원을 검토.</li>\n<li><strong>4단계 — 신고·조사 (1주)</strong> — 경찰 성폭력 신고·고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 형사 절차·피해 회복 (조사 단계)</strong> — 진술·증거 정리와 피해 회복 절차를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 절차와 보호 제도, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 시술 빙자 추행 신고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/guide/sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·접촉·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>예약·결제·방문 내역 (관계)</strong></li>\n<li><strong>시술 부위·동의 범위·접촉 정황 기록 (행위 태양)</strong></li>\n<li><strong>매장 입출입·CCTV 보존 요청 자료</strong></li>\n<li><strong>관리사·매장과 주고받은 메시지 기록</strong></li>\n<li><strong>다른 손님의 유사 경험·후기</strong></li>\n<li><strong>사건 직후 심경·진료·상담 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 밀폐된 시술 공간이라 직접 목격자가 없더라도, 예약·결제·입출입 기록과 사건 직후 곧바로 남긴 메시지·상담 기록이 신빙성을 뒷받침하는 데 도움이 됩니다. 시술 동의 범위와 실제 접촉 부위의 차이를 구체적으로 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술과 무관한 부위·은밀 부위 접촉인지.</li>\n<li><strong>시술 동의 범위</strong> — 동의한 시술 범위를 넘는 접촉인지.</li>\n<li><strong>밀폐 공간</strong> — 목격자 없는 공간의 진술 신빙성 확보.</li>\n<li><strong>객관 정황</strong> — 예약·결제·입출입·메시지가 뒷받침되는지.</li>\n<li><strong>피해자 상태</strong> — 가중처벌 요건과 행위자 인식이 문제 되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담·지원)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성폭력처벌법 가중 요건과 행위자 인식',
        summary:
          '대법원 2016도4404(대법원, 2021.02.25 선고) 영역에서 법원은 성폭력처벌법 제6조가 신체적인 장애가 있는 사람에 대한 강간·강제추행 등을 가중처벌한다고 보면서, ‘신체적인 장애가 있는 사람’이란 신체적 기능이나 구조 등의 문제로 일상·사회생활에서 상당한 제약을 받는 사람을 의미한다고 판시했습니다. 또 피해자의 상태는 개인별로 모습과 정도에 차이가 있어 비장애인의 시각으로 쉽게 장애가 없다고 단정해서는 안 되고, 본죄가 성립하려면 행위자도 범행 당시 피해자에게 그러한 신체적 장애가 있음을 인식해야 한다고 보았습니다. 시술을 빙자한 추행 사안을 살펴볼 때에도, 피해자의 상태·행위 태양과 행위자의 인식을 가려 추행 해당성과 가중 여부를 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 무관·은밀 부위 접촉 + 밀폐 공간 결합 시 시술 빙자 추행 검토 영역 — 변호인 상담·신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '시술이라는데 추행으로 볼 수 있나요?',
        answer:
          '<strong>시술과 무관한 부위·은밀 부위 접촉인지가 핵심인 영역입니다.</strong> 동의한 시술 범위와 실제 접촉을 비교해 기록하세요.',
      },
      {
        question: '밀폐된 공간이라 목격자가 없어요.',
        answer:
          '<strong>예약·결제·입출입·메시지로 신빙성을 뒷받침할 수 있는 영역입니다.</strong> 객관 자료를 폭넓게 모으세요.',
      },
      {
        question: '처음엔 참았는데 신고할 수 있나요?',
        answer:
          '<strong>참다가 뒤늦게 인지해도 신고를 검토할 수 있는 영역입니다.</strong> 접촉 정황과 시점을 정리하세요.',
      },
      {
        question: '다른 손님 후기에 비슷한 말이 있어요.',
        answer:
          '<strong>유사 경험·후기는 추행 정황을 뒷받침하는 단서인 영역입니다.</strong> 후기·유사 진술을 확보하세요.',
      },
      {
        question: '어디에서 도움을 받을 수 있나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담·지원을 받을 수 있는 영역입니다.</strong> 신고 전 상담을 검토하세요.',
      },
    ],
    cta: { text: '신고 절차와 보호 제도, AI로 확인하기', link: '/guide/sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지샵 강제 추행 신고', href: '/guide/sex-crime/sex-crime-massage-shop-forced-touch-report-track' },
      { label: '마사지샵 관리사 부적절 접촉 추적', href: '/guide/sex-crime/sex-crime-massage-shop-therapist-inappropriate-touch-track' },
      { label: '심야버스 승객 추행 신고', href: '/guide/sex-crime/sex-crime-late-night-bus-passenger-touch-report-track' },
    ],
  },

  // ─── 10. sex-crime-taxi-rideshare-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-rideshare-contact-falsely-accused-defense',
    keyword: '회식 택시 동승 신체접촉 추행 무고 방어',
    questionKeyword: '회식 후 같은 방향이라 동료와 택시를 함께 타고 귀가했는데, 좁은 뒷좌석에서 차가 흔들리며 어깨·팔이 닿거나 짐 때문에 몸이 스친 정도였을 뿐인데, 며칠 뒤 그 동료가 ‘택시에서 추행을 당했다’며 저를 고소했어요. 저는 추행할 의도가 전혀 없었고 좁은 공간에서 우연히 닿은 것뿐인데 한순간에 성범죄 가해자로 몰려 너무 억울하고 막막해요. CCTV도 흐릿하고 둘만 있던 상황이라 진술만으로 판가름 날까 걱정되는데, 이렇게 택시 동승 신체접촉이 추행으로 고소된 상황에서 어떻게 방어해야 하나요?',
    ctaKeyword: '택시 동승 신체접촉 추행 무고 방어 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 택시 동승 신체접촉 추행 무고 방어 — 5단계 점검 | 로앤가이드',
      description:
        '택시에서 우연히 몸이 닿은 것뿐인데 추행으로 고소돼 억울하다면, 추행의 고의 판단 기준과 무죄추정·진술 신빙성 방어까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식이 끝난 뒤 같은 방향이라 동료와 택시를 함께 타고 귀가했는데, 좁은 뒷좌석에서 차가 흔들리며 어깨·팔이 닿거나 가방·짐 때문에 잠깐 몸이 스친 정도였을 뿐인데, 며칠 뒤 그 동료가 ‘택시 안에서 추행을 당했다’며 저를 고소해, 한순간에 성범죄 가해자로 몰린 분의 상황입니다. 추행할 의도가 전혀 없었고 좁은 공간에서 우연히 닿은 것뿐인데도, 둘만 있던 차 안이라 객관적 증거가 부족하고 CCTV도 흐릿해 결국 진술만으로 판가름 날까 봐 너무 억울하고 막막하실 거예요. 매일 마주쳐야 하는 직장 동료와의 일이라 더 답답하셨을 거예요. 혐의를 받고 있다면, 접촉이 좁은 공간에서의 우발적·불가피한 것이었는지와 추행의 고의가 없었다는 점을 차분히 정리해 방어를 준비하는 것이 중요합니다. 만약 사실과 다르게 신고되었다면 그 경위까지 함께 기록해두는 것이 좋습니다.」 형법 제298조 강제추행죄와 성폭력처벌법상 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사, 즉 추행의 고의가 있어야 하는 영역입니다. 판례는 추행죄가 성립하려면 주관적 구성요건으로서 추행 인식과 용인 의사가 있어야 하고, 피고인이 고의를 부인하는 경우 나이·경력·행위에 이르게 된 경위·관계·구체적 행위 태양·전후 정황 등 간접사실로 신중히 판단하되 고의와 어긋나는 의문점이 해소되어야 한다고 보았습니다. 또 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 조금이라도 합리적 의심이 있으면 피고인의 이익으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 좁은 공간 동승 + 우발적 접촉 + 객관 증거 부족 결합은 ‘추행 고의 부재·진술 신빙성’을 다툴 수 있는 방어 트랙입니다. 혐의를 받고 있다면 ① 경위·동선 정리 ② 접촉 우발성 ③ 고의 부재 ④ 진술 신빙성 ⑤ 무죄추정·방어 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 택시 동승 신체접촉 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·접촉 우발성·고의·진술 신빙성·무죄추정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·동선 정리</strong> — 회식·동승 경위·탑승 위치·하차 동선 정리.</li>\n<li><strong>② 접촉 우발성</strong> — 좁은 공간·차량 흔들림·짐 등 우발 접촉 정황 정리.</li>\n<li><strong>③ 고의 부재</strong> — 추행 인식·용인 의사가 없었음을 뒷받침할 정황 검토.</li>\n<li><strong>④ 진술 신빙성</strong> — 상대 진술의 일관성·정황 부합 여부 검토.</li>\n<li><strong>⑤ 무죄추정·방어</strong> — 합리적 의심·무죄추정 관점에서 방어 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 택시 안에서의 접촉이 우발적·불가피한 것이었는지, 추행의 고의가 인정될 만한 정황이 있는지가 판단의 분기점입니다. 탑승 위치·동선·차량 상황 정황과 상대 진술의 모순을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 조사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 자료 보존 (즉시)</strong> — 회식·동승 경위·탑승 위치·하차 동선·택시 배차·결제 기록을 보존.</li>\n<li><strong>2단계 — 접촉 우발성 정리 (즉시)</strong> — 좌석 배치·차량 흔들림·짐 등 우발 접촉 정황을 구체적으로 정리.</li>\n<li><strong>3단계 — 진술·정황 검토 (병행)</strong> — 상대 진술의 일관성·정황 부합 여부와 모순을 정리.</li>\n<li><strong>4단계 — 조사 대응·상담 (1주)</strong> — 변호인 조력과 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 무죄추정·방어 (조사 단계)</strong> — 사실과 다른 신고면 경위·증거를 정리해 방어를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 동승 신체접촉 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·우발성·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일시·참석자·동승 경위 정리 (관계)</strong></li>\n<li><strong>택시 배차·결제·경로 기록 (동선)</strong></li>\n<li><strong>좌석 배치·차량 흔들림·짐 등 우발 정황 기록</strong></li>\n<li><strong>택시·주변 CCTV·블랙박스 보존 요청 자료</strong></li>\n<li><strong>상대 진술의 모순·정황 불부합 정리</strong></li>\n<li><strong>평소 관계·전후 대화 기록</strong></li>\n<li><strong>고소장·조사 일정·진술 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 배차·결제 내역과 동선 기록은 시간이 지나면 확보가 어려우니 빨리 모아두는 것이 중요합니다. 좁은 공간에서의 접촉이 우발적이었음을 좌석 배치·차량 상황으로 구체적으로 설명하고, 상대 진술의 일관성·정황 부합 여부를 함께 정리하면 고의 부재를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행 인식·용인 의사가 있었는지.</li>\n<li><strong>접촉 우발성</strong> — 좁은 공간의 우발·불가피한 접촉인지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관되고 정황에 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심이 남으면 피고인의 이익으로 보는지.</li>\n<li><strong>무고 가능성</strong> — 사실과 다르게 신고된 정황이 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·성폭력 신고</strong></li>\n<li><strong>대한변협 법률구조재단 (형사 변호 상담 안내)</strong></li>\n<li><strong>국선변호인 제도 (형사 절차 조력)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 고의 부인과 무죄추정',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 공중 밀집 장소에서의 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 있어야 하고, 피고인이 추행의 고의를 부인하는 경우 나이·경력·행위에 이르게 된 경위·관계·구체적 행위 태양·전후 정황 등 간접사실로 판단하되 고의와 어긋나는 의문점이 해소되어야 한다고 판시했습니다. 또 형사피고인은 유죄 확정 전까지 무죄로 추정되고, 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 하며, 조금이라도 합리적 의심이 있으면 피고인의 이익으로 판단해야 한다고 보았습니다. 택시 동승 중 우발적 접촉이 추행으로 고소된 사안을 살펴볼 때에도, 추행의 고의와 진술 신빙성, 무죄추정 원칙을 기준으로 방어를 검토해볼 수 있습니다.',
        takeaway: '좁은 공간 동승 + 우발적 접촉 + 객관 증거 부족 결합 시 추행 고의 부재·진술 신빙성 다툼 검토 영역 — 변호인 조력·방어 준비 권장.',
      },
    ],
    faq: [
      {
        question: '우연히 닿은 것뿐인데 추행이 되나요?',
        answer:
          '<strong>좁은 공간의 우발·불가피한 접촉인지와 추행 고의가 핵심인 영역입니다.</strong> 좌석 배치·차량 상황을 구체적으로 정리하세요.',
      },
      {
        question: '추행 의도가 없었다는 걸 어떻게 보이죠?',
        answer:
          '<strong>경위·관계·행위 태양 등 간접사실로 고의 부재를 다투는 영역입니다.</strong> 접촉 부위·방식·우발성을 정리하세요.',
      },
      {
        question: 'CCTV가 흐릿한데 불리한가요?',
        answer:
          '<strong>객관 증거 부족 시 무죄추정·진술 신빙성 다툼이 중요한 영역입니다.</strong> 동선·배차·결제 기록을 함께 확보하세요.',
      },
      {
        question: '둘만 있던 상황이라 진술만 남았어요.',
        answer:
          '<strong>진술이 합리적 의심을 배제할 만큼 신빙성이 있어야 하는 영역입니다.</strong> 상대 진술의 모순·정황 불부합을 정리하세요.',
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
      { label: '택시 승객 운전기사 접촉 추적', href: '/guide/sex-crime/sex-crime-taxi-passenger-driver-contact-track' },
      { label: '회식 후 음주 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '클럽 무도장 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-club-dance-floor-contact-falsely-accused-defense' },
      { label: '회사 회식 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-office-party-contact-falsely-accused-defense' },
    ],
  },
];
