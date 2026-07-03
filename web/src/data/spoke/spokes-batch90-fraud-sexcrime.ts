import { SpokePage } from '../spoke-pages';

// batch90 fraud(6) + sex-crime(4) — 10개 (2026-06-07)
//
// 고유 존재 이유:
// 1. fraud-secondhand-luxury-counterfeit-track — 일반 중고거래류와 분기. '중고 명품을 진품으로 속여 대금을 받은' 기망·편취 성립·죄수 판단형 트랙(victim).
// 2. fraud-wedding-hall-prepay-cancel-track — 일반 선결제 환불류와 분기. '예식장 선결제 후 환불거부·취소' 부작위 기망·고지의무 절차형 트랙(victim).
// 3. fraud-crypto-mining-machine-rental-track — 일반 투자수익류와 분기. '코인 채굴기 렌탈 수익 약속 후 미지급' 사업 성패 관련 처분행위 기망·인과 판단형 트랙(victim).
// 4. fraud-concert-ticket-resale-vanish-track — 일반 거래잠적류와 분기. '콘서트 티켓 양도금만 받고 잠적' 편취액 산정·특경법 적용 한계 판단형 트랙(victim).
// 5. fraud-online-lecture-lifetime-membership-track — 일반 구독결제류와 분기. '온라인 강의 평생회원 결제 후 미제공' 편취 고의·고지의무·편취액 판단형 트랙(victim).
// 6. fraud-used-car-mileage-tampering-falsely-accused-defense — 일반 사기 무고류와 분기. '중고차 주행거리 조작 사기로 고소당함' 공모·범의 입증 다툼 방어 판단형 트랙(accused).
// 7. sex-crime-taxi-passenger-track — 일반 추행류와 분기. '택시 안 승객 강제추행' 추행 해당성·판단 기준 판단형 트랙(victim).
// 8. sex-crime-massage-shop-track — 일반 추행류와 분기. '마사지샵 시술 중 추행' 추행 의미·범의 증명 판단형 트랙(victim).
// 9. sex-crime-deepfake-acquaintance-photo-track — 일반 불법촬영류와 분기. '딥페이크 지인합성물 제작·유포' 허위영상물·증거 임의제출 절차형 트랙(victim).
// 10. sex-crime-company-dinner-intoxicated-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 만취 추행으로 고소당함' 추행 고의 부인·무죄추정 다툼 방어 판단형 트랙(accused).

export const spokesBatch90FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-secondhand-luxury-counterfeit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-counterfeit-track',
    keyword: '중고 명품 가품 사기',
    questionKeyword: '중고 거래로 정품이라던 명품 가방·시계를 수백만원 주고 샀는데, 받아보니 가품(짝퉁)이었고 판매자는 환불을 거부하거나 연락을 끊었어요. 처음부터 가품인 걸 알면서 진품이라 속여 판 것 같은데, 사기로 신고하고 대금을 돌려받을 수 있나요?',
    ctaKeyword: '중고 명품 가품 사기 편취·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 가품 사기 — 5단계 기망·환급 점검 | 로앤가이드',
      description:
        '정품이라던 중고 명품이 가품이었고 판매자가 환불을 거부한다면, 형법 제347조 사기의 기망·편취 성립을 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 플랫폼이나 커뮤니티에서 ‘정품 보증’, ‘구성품 완비’라는 말을 믿고 명품 가방·시계를 수백만원에 산 분의 상황입니다. 그런데 막상 받아 감정해보니 가품(짝퉁)이었고, 판매자는 ‘몰랐다’며 환불을 미루거나 끝내 연락을 끊어, 처음부터 가품인 줄 알면서 진품이라 속여 판 건 아닌지 의심되고 막막하실 거예요. 큰돈을 들였는데 물건도 돈도 애매해져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품을 진품으로 속여 대금을 받은 정황은 기망행위로 평가될 여지가 있고, 대금 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 위탁받은 대로 업무를 이행하지 않으면서도 비용을 계속 청구·수령해 대금을 편취한 행위에 대해 사기죄가 성립하고, 위계로써 상대의 업무를 방해한 행위는 이와 별개로 성립한다고 본 사례 흐름이 있는 영역입니다. 정품 표시 + 가품 인도 + 환불 거부 결합은 ‘기망·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 기망 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 가품 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 판매 글·정품 표시·대화·결제·이체 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 가품을 진품으로 표시·보증해 거래를 유도한 정황 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 품질 다툼과 달리, 가품인 줄 알면서 진품이라 속였는지가 사기 판단의 분기점입니다. 정품 감정서·전문가 감정 결과와 판매 당시 정품 표시를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·정품 표시·대화·결제·물품 사진 보존.</li>\n<li><strong>2단계 — 가품 감정 확보 (즉시)</strong> — 브랜드 정품 감정·전문 감정으로 가품 여부 확인.</li>\n<li><strong>3단계 — 지급정지·이의 (병행)</strong> — 계좌 이체분 지급정지·결제 이의제기 검토.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 가품 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·정품 표시·보증 문구 캡처 (거래 조건)</strong></li>\n<li><strong>대금 송금·이체·결제 내역 (피해 금액)</strong></li>\n<li><strong>정품 감정서·전문 감정 결과 (가품 입증)</strong></li>\n<li><strong>물품·구성품·태그 사진 (현품 상태)</strong></li>\n<li><strong>환불 요청·거부·연락 두절 대화</strong></li>\n<li><strong>동일 판매자·계좌 피해 사례 자료</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정품 표시·보증 문구와 전문 감정 결과를 함께 모으면 기망 정황이 선명해집니다. 같은 판매자·계좌의 다른 피해 사례를 묶으면 편취 의도 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 가품인 줄 알면서 진품이라 속였는지.</li>\n<li><strong>판매자 인식</strong> — ‘몰랐다’는 주장과 정품 보증 표시의 모순.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 교부한 대금 전부가 피해액인지.</li>\n<li><strong>단순 품질 다툼 항변</strong> — 민사 환불·하자 다툼에 그치는지의 구별.</li>\n<li><strong>판매자 특정</strong> — 닉네임·계좌·결제 기록으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망·편취 사기죄 성립과 죄수 판단',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 위탁받은 업무를 의뢰받은 대로 진행하지 않으면서도 관련 비용을 계속 청구·수령해 대금을 편취한 행위는 사기죄가 성립하고, 위계로써 상대의 업무를 방해한 업무방해죄는 이와 별개로 성립하여 두 죄가 실체적 경합관계에 있다고 판시했습니다. 가품을 진품으로 속여 대금을 받은 중고 명품 거래 사안에서 기망·편취 성립을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '정품 표시 + 가품 인도 + 환불 거부 결합 시 기망·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 ‘가품인 줄 몰랐다’고 하는데 사기가 되나요?',
        answer:
          '<strong>정품 보증 표시와 인식의 모순으로 기망 여부를 검토하는 영역입니다.</strong> 정품 표시 문구와 감정 결과를 확보하세요.',
      },
      {
        question: '가품이라는 걸 어떻게 증명하나요?',
        answer:
          '<strong>브랜드 정품 감정·전문 감정 결과로 가품 여부를 입증하는 영역입니다.</strong> 현품·구성품 사진과 감정서를 모으세요.',
      },
      {
        question: '일부만 환불받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금·결제 총액을 정리하세요.',
      },
      {
        question: '환불을 받으면 민사로 끝나는 것 아닌가요?',
        answer:
          '<strong>환불과 별개로 기망·편취 정황이 있으면 형사 사기를 검토하는 영역입니다.</strong> 정품 표시·거부 대화를 정리하세요.',
      },
      {
        question: '판매자 닉네임만 아는데 특정이 되나요?',
        answer:
          '<strong>거래 사이트·결제·계좌 기록으로 상대를 특정할 수 있는 영역입니다.</strong> 결제·계좌 기록부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '데이팅앱 로맨스 스캠', href: '/guide/fraud/fraud-dating-app-money-loss' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 2. fraud-wedding-hall-prepay-cancel-track ───
  {
    domain: 'fraud',
    slug: 'fraud-wedding-hall-prepay-cancel-track',
    keyword: '예식장 선결제 환불거부 사기',
    questionKeyword: '예식장·웨딩 패키지를 계약하며 계약금과 잔금 일부를 미리 결제했는데, 사정이 생겨 취소를 요청하니 위약금을 과도하게 떼거나 환불 자체를 거부했어요. 처음부터 환불할 의사 없이 선결제만 받은 것 같기도 한데, 사기로 신고하고 선결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '예식장 선결제 환불거부 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '예식장 선결제 환불거부 사기 — 5단계 고지의무·환급 점검 | 로앤가이드',
      description:
        '예식장 선결제 후 환불을 거부당했다면, 형법 제347조 사기의 부작위 기망·고지의무와 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「결혼을 준비하며 예식장·웨딩홀 패키지를 계약하고 계약금과 잔금 일부를 ‘미리 결제하면 할인된다’는 말에 선결제한 분의 상황입니다. 그런데 일정 변경이나 사정으로 취소를 요청하자 위약금을 과도하게 떼거나 환불 규정을 들어 환불 자체를 거부하고, 알고 보니 영업난·폐업이 예정돼 있었던 정황까지 보여, 처음부터 환불·이행할 의사 없이 선결제만 받은 건 아닌지 의심되고 막막하실 거예요. 인생의 큰 행사를 앞두고 목돈이 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 정상 이행·환불할 의사·능력 없이 선결제만 유도한 정황은 부작위에 의한 기망으로 평가될 여지가 있고, 선결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 부작위에 의한 기망은 거래 상대방이 일정한 사정을 고지받았더라면 거래하지 않았을 관계가 인정될 때 법률상 고지의무 위반으로 성립하고, 그 고지의무 근거가 되는 거래실정에 관한 사실은 검사가 증명할 책임이 있다고 본 사례 흐름이 있는 영역입니다. 선결제 + 이행·환불 거부 + 폐업 정황 결합은 ‘고지의무·환급’ 절차가 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 고지의무·기망 ③ 결제 이의·지급정지 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 예식장 선결제 환불거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·고지의무·결제 이의·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 계약서·약관·환불 규정·선결제 내역 정리.</li>\n<li><strong>② 고지의무·기망</strong> — 폐업·이행 불가를 숨기고 선결제만 받은 정황 정리.</li>\n<li><strong>③ 결제 이의·지급정지</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 피해구제·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 위약금 다툼과 달리, 폐업·이행 불가를 알면서도 알리지 않고 선결제를 받았는지가 부작위 기망 판단의 분기점입니다. 선결제 시점과 폐업·환불 거부 시점을 함께 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 계약·약관·환불 규정·선결제·대화 보존.</li>\n<li><strong>2단계 — 이행·폐업 정황 확인 (즉시)</strong> — 선결제 시점과 영업난·폐업·환불 거부 시점 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 업체 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">예식장 선결제 환불거부 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·고지의무·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>예식·웨딩 계약서·약관 (계약 내용)</strong></li>\n<li><strong>환불·위약금 규정 사본 (환불 조건)</strong></li>\n<li><strong>계약금·잔금 선결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>취소 요청·환불 거부 대화 기록</strong></li>\n<li><strong>영업난·폐업·운영자 변경 정황 자료</strong></li>\n<li><strong>동일 업체 피해·모집 시점 자료</strong></li>\n<li><strong>업체·사업자·결제 계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환불 규정과 실제 거부 사유를 대조하고, 선결제 모집 시점과 폐업·환불 거부 시점을 함께 정리하면 부작위 기망 검토에 도움이 됩니다. 같은 업체 피해자를 모으면 공동 대응에 유리합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무</strong> — 폐업·이행 불가를 알렸어야 했는지.</li>\n<li><strong>부작위 기망</strong> — 중요한 사정을 묵비하고 선결제를 받았는지.</li>\n<li><strong>편취 범의</strong> — 계약 당시 이행·환불 의사·능력이 있었는지.</li>\n<li><strong>위약금 다툼</strong> — 과도한 위약금 공제가 민사 다툼에 그치는지.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (예식·웨딩 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위에 의한 기망과 고지의무·증명책임',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄의 부작위에 의한 기망은 거래 상대방이 일정한 사정을 고지받았더라면 거래하지 않았을 관계가 인정될 때 법률상 고지의무 위반으로 성립하고, 그 고지의무의 근거가 되는 거래의 내용·거래관행 등 거래실정에 관한 사실은 검사가 주장·증명할 책임이 있다고 판시했습니다. 예식장 선결제 후 이행·환불을 거부한 사안에서 고지의무 위반을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '선결제 + 이행·환불 거부 + 폐업 정황 결합 시 고지의무·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '환불 규정대로 거부한 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>규정과 별개로 폐업·이행 불가를 숨기고 선결제를 받았는지가 핵심인 영역입니다.</strong> 모집 시점·폐업 정황을 확보하세요.',
      },
      {
        question: '말하지 않은 것도 기망이 되나요?',
        answer:
          '<strong>상대가 알았다면 거래하지 않았을 사정을 묵비하면 부작위 기망으로 평가될 수 있는 영역입니다.</strong> 고지 여부를 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 항변·결제 이의로 잔여 할부금 청구를 다퉈볼 수 있는 영역입니다.</strong> 미이행·거부 정황을 정리해 이의신청하세요.',
      },
      {
        question: '업체가 폐업했는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 폐업 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 업체·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '직장 동료 코인투자 권유 사기', href: '/guide/fraud/fraud-coworker-coin-investment-loss-dispute' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 3. fraud-crypto-mining-machine-rental-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-mining-machine-rental-track',
    keyword: '코인 채굴기 렌탈 사기',
    questionKeyword: '‘채굴기를 빌려두면 매달 코인 수익이 자동으로 들어온다’는 말에 채굴기 렌탈·위탁 비용으로 수백만원을 보냈는데, 약속한 수익은 거의 없고 운영자는 ‘시세 탓’이라며 정산을 미루다 연락이 끊겼어요. 처음부터 수익을 줄 의사 없이 렌탈비만 받은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '코인 채굴기 렌탈 사기 기망·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 채굴기 렌탈 사기 — 5단계 기망·인과 환급 점검 | 로앤가이드',
      description:
        '채굴기 렌탈로 수익을 약속받고 송금했는데 정산이 끊겼다면, 형법 제347조 사기의 기망·인과관계를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘고성능 채굴기를 대신 운영해주면 매달 코인 수익이 자동으로 들어온다’, ‘원금 회수는 금방’이라는 권유에 채굴기 렌탈·위탁 비용으로 수백만원을 보낸 분의 상황입니다. 그런데 약속한 수익은 처음 몇 번 들어오다 끊기거나 아예 없고, 운영자는 ‘시세 하락 탓’, ‘전기료 때문’이라며 정산을 미루다 끝내 연락이 끊겨, 처음부터 수익을 줄 의사·능력 없이 렌탈비만 끌어모은 건 아닌지 의심되고 막막하실 거예요. 채굴기 실물도 확인하기 어려워 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 채굴 실체·수익 구조를 허위·과장해 송금을 유도한 정황은 기망행위로 평가될 여지가 있고, 렌탈비 송금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 처분행위나 이를 유발한 행위가 도모하는 사업의 성패·성과와 밀접하게 관련된 경우 행위자의 재력·신용만으로 기망·인과관계를 단정할 수 없고 당사자 관계·사업 인식·처분 경위·성공 가능성 등을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 수익 약속 + 채굴 실체 의심 + 정산 두절 결합은 ‘기망·인과·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·송금 정리 ② 기망·인과 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 채굴기 렌탈 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·송금 정리</strong> — 렌탈·위탁 계약·수익 약속·송금 내역 정리.</li>\n<li><strong>② 기망·인과 정황</strong> — 채굴 실체·수익 구조를 허위·과장해 송금을 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 정산이 있어도 교부한 렌탈비 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·관련 특별법 신고 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·다수 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 시세 하락에 따른 손실과 달리, 채굴기·운영 실체가 실제 있었는지와 수익 구조를 허위로 설명했는지가 기망 판단의 분기점입니다. 채굴 실체 자료와 수익 약속·정산 내역을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 보존 (즉시)</strong> — 계약·수익 약속·송금·정산·대화 보존.</li>\n<li><strong>2단계 — 채굴 실체 확인 (즉시)</strong> — 채굴기·운영장·지갑 주소 등 실체와 설명의 괴리 확인.</li>\n<li><strong>3단계 — 지급정지·자금 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·다수 피해 공동 고소·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 채굴기 렌탈 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>렌탈·위탁 계약서·약정서 (계약 내용)</strong></li>\n<li><strong>렌탈비 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>수익률·자동수익 약속 광고·대화 캡처</strong></li>\n<li><strong>정산 내역·중단·지연 기록 (이행 정황)</strong></li>\n<li><strong>채굴기·운영장·지갑 실체 확인 자료</strong></li>\n<li><strong>동일 운영자·계좌 피해 사례 자료</strong></li>\n<li><strong>운영자·법인·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 약속한 수익률과 실제 정산 내역, 채굴기 실체 자료를 함께 모으면 기망·인과 정황이 선명해집니다. 같은 운영자·계좌 피해자를 모아 송금·약속 자료를 묶으면 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 채굴 실체·수익 구조를 허위·과장해 송금을 유도했는지.</li>\n<li><strong>인과관계</strong> — 사업 성패와 밀접한 거래에서 기망과 송금 사이 인과가 있는지.</li>\n<li><strong>편취액</strong> — 일부 정산이 있어도 교부한 렌탈비 전부가 피해액인지.</li>\n<li><strong>단순 시세손실 항변</strong> — ‘시세 하락으로 수익이 줄었다’는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 법인·계좌·실운영자를 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (투자사기·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 성패와 밀접한 처분행위의 기망·인과 판단',
        summary:
          '대법원 2011도8829(대법원, 2011.10.13 선고) 영역에서 법원은 피해자의 재산적 처분행위나 이를 유발한 행위가 도모하는 사업의 성패·성과와 밀접하게 관련된 경우, 단순히 행위자의 재력·신용만으로 기망행위나 인과관계를 판단할 수 없고 당사자 관계·사업에 대한 인식·처분 경위·성공 가능성·경험과 직업 등을 종합해 일반적·객관적으로 판단해야 한다고 판시했습니다. 채굴기 렌탈 수익을 약속한 사안에서 기망·인과관계를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '수익 약속 + 채굴 실체 의심 + 정산 두절 결합 시 기망·인과·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시세가 떨어진 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>채굴 실체·수익 구조를 허위로 설명해 송금을 유도했는지가 핵심인 영역입니다.</strong> 약속과 실제 정산의 괴리를 확보하세요.',
      },
      {
        question: '채굴기가 실제 있는지 어떻게 확인하나요?',
        answer:
          '<strong>운영장·기기·지갑 주소 등 실체와 설명의 괴리로 기망을 다투는 영역입니다.</strong> 실체 확인 자료를 모으세요.',
      },
      {
        question: '처음 몇 번 정산받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 정산이 있어도 교부한 렌탈비 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>같은 운영자·계좌 피해는 묶어 공동 고소·자금 추적을 검토할 수 있는 영역입니다.</strong> 피해 규모·송금 자료를 모으세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 이체 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: 'SNS 투자 사기 피해 구제 증거 확보', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '딥페이크 셀럽 투자 사기 피해 구제', href: '/guide/fraud/fraud-deepfake-celebrity-investment-relief' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-concert-ticket-resale-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-resale-vanish-track',
    keyword: '콘서트 티켓 양도 잠적 사기',
    questionKeyword: '인기 콘서트 티켓을 양도받기로 하고 SNS·중고 거래로 수십만원을 먼저 보냈는데, 판매자가 티켓을 넘기지 않고 그대로 잠적했어요. 같은 티켓을 여러 명에게 중복으로 팔고 사라진 것 같기도 한데, 사기로 신고하고 보낸 돈을 돌려받을 수 있나요?',
    ctaKeyword: '콘서트 티켓 양도 잠적 편취액 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 양도 잠적 사기 — 5단계 편취액·환급 점검 | 로앤가이드',
      description:
        '콘서트 티켓 양도금만 보냈는데 판매자가 잠적했다면, 형법 제347조 사기의 편취·특경법 적용 한계를 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「예매에 실패한 인기 콘서트 티켓을 SNS·중고 거래 글에서 양도받기로 하고 ‘선입금하면 바로 보내준다’는 말에 수십만원을 먼저 보낸 분의 상황입니다. 그런데 판매자는 티켓 양도를 미루다 입금이 끝나자 계정을 닫거나 연락을 끊고 그대로 잠적했고, 알고 보니 같은 티켓을 여러 명에게 중복으로 받고 사라진 정황까지 보여, 처음부터 양도할 의사 없이 입금만 받은 건 아닌지 의심되고 막막하실 거예요. 공연 날짜는 다가오는데 돈도 티켓도 없어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 양도 의사 없이 입금만 유도한 정황은 기망행위로 평가될 여지가 있고, 입금이라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기로 인한 특정경제범죄법 위반(사기)죄를 적용할 때에는 신중해야 하고 편취한 재물·재산상 이익의 가액을 구체적으로 산정할 수 없으면 특정경제범죄법 위반(사기)죄로는 처벌할 수 없다고 본 사례 흐름이 있는 영역으로, 다수 피해의 합산·죄책 범위가 쟁점이 됩니다. 입금 + 양도 불이행 + 중복판매·잠적 결합은 ‘편취액·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 기망 정황 ③ 편취액·다수 피해 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 티켓 양도 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 양도 글·대화·좌석 정보·입금 내역 정리.</li>\n<li><strong>② 기망 정황</strong> — 양도 의사 없이 입금만 받았는지, 중복판매 정황 정리.</li>\n<li><strong>③ 편취액·다수 피해</strong> — 본인 입금액과 동일 판매자 다수 피해 규모 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·피해구제·다수 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 지연과 달리, 양도 의사 없이 입금만 받았거나 같은 티켓을 중복으로 판 정황이 기망 판단의 분기점입니다. 본인 입금액뿐 아니라 동일 판매자의 다수 피해 규모를 함께 모으는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 양도 글·대화·좌석 정보·입금 캡처 보존.</li>\n<li><strong>2단계 — 잠적·중복판매 확인 (즉시)</strong> — 연락 두절 시점과 동일 판매자 다수 거래 정황 정리.</li>\n<li><strong>3단계 — 지급정지·자금 조회 (병행)</strong> — 계좌 이체분 지급정지 요청·동일 계좌 피해 조회.</li>\n<li><strong>4단계 — 경찰 신고·사건사고확인원 (1주)</strong> — 사이버범죄 신고 후 사건사고사실확인원 발급.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·다수 피해 공동 고소·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 티켓 양도 잠적 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>양도 거래 글·좌석 정보 캡처 (거래 조건)</strong></li>\n<li><strong>입금·이체 내역 (피해 금액)</strong></li>\n<li><strong>판매자와의 대화·약속·잠적 정황</strong></li>\n<li><strong>중복판매·동일 좌석 거래 정황 자료</strong></li>\n<li><strong>동일 판매자·계좌 다수 피해 사례</strong></li>\n<li><strong>거래 사이트·SNS 계정·신고 기록</strong></li>\n<li><strong>판매자 닉네임·연락처·계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 입금액과 동일 판매자·계좌의 다수 피해를 함께 모으면 편취액·죄책 범위 검토에 도움이 됩니다. 중복판매·잠적 정황을 시점별로 정리하면 기망 판단의 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 정황</strong> — 양도 의사 없이 입금만 받았거나 중복으로 팔았는지.</li>\n<li><strong>편취액 산정</strong> — 가액을 구체적으로 산정할 수 있는지, 합산 범위가 어디까지인지.</li>\n<li><strong>죄책 범위</strong> — 피해자별로 독립한 사기죄로 보는지.</li>\n<li><strong>단순 지연 항변</strong> — ‘보내려 했다’는 주장과의 구별.</li>\n<li><strong>판매자 특정</strong> — 닉네임·계좌·SNS 계정으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 가액 산정과 특경법 적용 한계',
        summary:
          '대법원 2022도3771(대법원, 2022.06.30 선고) 영역에서 법원은 사기로 인한 특정경제범죄법 위반(사기)죄를 적용할 때에는 신중해야 하고, 편취한 재물 또는 재산상 이익의 가액을 구체적으로 산정할 수 없는 경우에는 특정경제범죄법 위반(사기)죄로 처벌할 수 없다고 판시했습니다. 콘서트 티켓 양도금만 받고 잠적한 사안에서 편취액·죄책 범위를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '입금 + 양도 불이행 + 중복판매·잠적 결합 시 편취액·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보내려다 늦은 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>양도 의사 없이 입금만 받았거나 중복으로 팔았는지가 핵심인 영역입니다.</strong> 잠적·중복판매 정황을 확보하세요.',
      },
      {
        question: '같은 티켓을 여러 명에게 판 것 같은데 어떻게 하나요?',
        answer:
          '<strong>다수 피해를 묶어 편취 규모와 죄책 범위를 검토하는 영역입니다.</strong> 동일 판매자 피해 사례를 모으세요.',
      },
      {
        question: '소액인데도 사기로 신고할 수 있나요?',
        answer:
          '<strong>금액과 무관하게 기망·편취 정황이 있으면 사기로 신고를 검토하는 영역입니다.</strong> 거래·입금 자료를 정리하세요.',
      },
      {
        question: '계좌로 보냈는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 입금 직후 신속 신고가 중요합니다.',
      },
      {
        question: 'SNS 계정만 아는데 특정이 되나요?',
        answer:
          '<strong>계정·결제·계좌 기록으로 판매자를 특정할 수 있는 영역입니다.</strong> 계좌·거래 기록부터 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '투자 동호회 운영자 회원 손실 차용사기 무고 방어', href: '/guide/fraud/fraud-investment-club-member-loss-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-online-lecture-lifetime-membership-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-lecture-lifetime-membership-track',
    keyword: '온라인 강의 평생회원 사기',
    questionKeyword: '‘평생 무제한 수강’이라는 말에 온라인 강의 평생회원권을 수십만원에 결제했는데, 약속한 강의가 일부만 열리거나 사이트가 닫혀 사실상 이용할 수 없게 됐어요. 처음부터 평생 제공할 의사 없이 결제만 받은 것 같은데, 사기로 신고하고 결제한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '온라인 강의 평생회원 사기 편취·환급 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 평생회원 사기 — 5단계 편취 고의·환급 점검 | 로앤가이드',
      description:
        '평생회원권을 결제했는데 강의 제공이 끊겼다면, 형법 제347조 사기의 편취 고의·고지의무·편취액을 따지고 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘한 번만 결제하면 평생 무제한으로 들을 수 있다’, ‘강의가 계속 추가된다’는 광고를 믿고 온라인 강의 평생회원권을 수십만원에 결제한 분의 상황입니다. 그런데 약속한 강의는 일부만 열리거나 업데이트가 끊기고, 어느 날 사이트·앱이 닫히거나 운영자가 바뀌어 사실상 이용할 수 없게 돼, 처음부터 평생 제공할 의사·능력 없이 결제만 받은 건 아닌지 의심되고 막막하실 거예요. ‘평생’이라는 말만 믿고 큰돈을 한 번에 낸 터라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 제공할 수 없음을 알면서도 평생 제공을 약속해 결제를 유도한 정황은 기망행위로 평가될 여지가 있고, 결제라는 재물 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 편취 고의는 범행 이후 정황까지 종합해 판단하고, 고지의무 위반이 거래 상대방을 기망한 것이 되어 사기죄를 구성할 수 있으며, 대가가 일부 지급된 경우에도 편취액은 교부받은 재물 전부라고 본 사례 흐름이 있는 영역입니다. 평생 제공 약속 + 강의 미제공·사이트 폐쇄 결합은 ‘편취 고의·환급’ 다툼이 가능한 트랙입니다. 피해자라면 ① 결제·계약 정리 ② 기망·고의 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 평생회원 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·기망 고의·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·계약 정리</strong> — 평생회원 광고·약관·결제 내역 정리.</li>\n<li><strong>② 기망·고의 정황</strong> — 제공 불가를 알면서 평생 제공을 약속했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 강의 제공이 있어도 교부한 결제금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·피해구제·동일 피해 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 서비스 종료와 달리, 평생 제공이 불가능함을 알면서도 평생회원을 모집했는지가 기망 판단의 분기점입니다. ‘평생 제공’ 광고 문구와 사이트 폐쇄·미제공 시점을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·광고 자료 보존 (즉시)</strong> — 평생회원 광고·약관·결제·이용 기록 보존.</li>\n<li><strong>2단계 — 미제공·폐쇄 시점 확인 (즉시)</strong> — 회원 모집 시점과 강의 중단·사이트 폐쇄 시점 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부 항변·계좌이체분 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 피해 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 평생회원 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 결제·기망 고의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>평생회원 광고·약관·안내 캡처 (약속 내용)</strong></li>\n<li><strong>결제·할부·이체 내역 (피해 금액)</strong></li>\n<li><strong>제공된 강의·미제공 강의 목록 (이행 정황)</strong></li>\n<li><strong>강의 중단·사이트 폐쇄 공지 캡처</strong></li>\n<li><strong>환불 요청·거부 대화 기록</strong></li>\n<li><strong>동일 업체 피해·모집 시점 자료</strong></li>\n<li><strong>운영사·사업자·결제 계좌 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: ‘평생 제공’ 광고와 실제 제공·중단 내역을 대조하면 기망·고의 정황이 선명해집니다. 회원 모집 시점과 폐쇄 시점, 동일 피해자를 함께 모으면 편취 고의 검토에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 제공 불가를 알면서 평생 제공을 약속했는지.</li>\n<li><strong>고지의무</strong> — 폐쇄·종료 가능성을 알렸어야 했는지.</li>\n<li><strong>편취액</strong> — 일부 강의 제공이 있어도 교부한 결제금 전부가 피해액인지.</li>\n<li><strong>단순 서비스 종료 항변</strong> — ‘사정상 종료했다’는 주장과의 구별.</li>\n<li><strong>운영자 특정</strong> — 운영사·사업자·결제 계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·콘텐츠 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의·고지의무 위반과 편취액',
        summary:
          '대법원 2022도768(대법원, 2022.04.14 선고) 영역에서 법원은 사기죄의 주관적 구성요건인 편취 고의는 범행 전후의 정황까지 종합해 판단하고, 고지의무 위반이 거래 상대방을 기망한 것이 되어 사기죄를 구성할 수 있으며, 재물편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 재물 전부라고 판시했습니다. 평생 제공을 약속하고 강의를 제공하지 않은 사안에서 편취 고의·편취액을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '평생 제공 약속 + 강의 미제공·폐쇄 결합 시 편취 고의·환급 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사정상 서비스를 종료한 것일 수도 있는데 사기가 되나요?',
        answer:
          '<strong>제공 불가를 알면서 평생 제공을 약속했는지가 핵심인 영역입니다.</strong> 광고 문구와 폐쇄 정황을 확보하세요.',
      },
      {
        question: '강의를 몇 개 들었는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 제공이 있어도 교부한 결제금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 항변·결제 이의로 잔여 할부금 청구를 다퉈볼 수 있는 영역입니다.</strong> 미제공 정황을 정리해 이의신청하세요.',
      },
      {
        question: '사이트가 닫혔는데 환급이 되나요?',
        answer:
          '<strong>계좌에 남은 금액이 있으면 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 폐쇄 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 피해자가 많은데 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 업체·계좌 피해는 묶어 공동 신고를 검토할 수 있는 영역입니다.</strong> 피해 사례를 모아 정리하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '물품대금 미지급 사기 무고 방어', href: '/guide/fraud/fraud-goods-payment-default-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-used-car-mileage-tampering-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-mileage-tampering-falsely-accused-defense',
    keyword: '중고차 주행거리 조작 사기 무고',
    questionKeyword: '중고차 매매·딜러 일을 하면서 차량을 정상적으로 중개·판매했을 뿐인데, 한 매수인이 ‘주행거리(계기판)가 조작된 차를 속아 샀다’며 저를 사기로 고소했어요. 저는 조작에 가담한 적도, 편취할 의도도 없었는데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '중고차 주행거리 조작 사기 무고 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '중고차 주행거리 조작 사기 무고 방어 — 5단계 공모·범의 점검 | 로앤가이드',
      description:
        '주행거리 조작 차를 팔았다며 사기로 고소당했다면, 형법 제347조 사기의 공모·편취 범의·인과를 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고차 매매·딜러 일을 하면서 차량을 매입처에서 받아 정상적으로 중개·판매하거나 매수인을 연결해 왔을 뿐인데, 한 매수인이 ‘주행거리(계기판)가 조작된 차를 속아 샀다’며 저를 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 계기판 조작에 가담한 적도, 편취할 의도도 없었고 매입 단계에서 조작 사실을 알지도 못했는데, 거래 규모가 크고 차량이 여러 대라는 이유로 의심부터 받게 돼 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 주행거리 조작에 공모·가담했는지, 거래 당시 기망행위와 편취 범의가 있었는지가 핵심 쟁점입니다. 판례는 공모공동정범의 공모나 범의는 범죄사실을 구성하므로 이를 인정하려면 엄격한 증명이 요구되고, 실행행위 관여를 인정하면서도 공모와 범의를 부인하는 경우에는 범의와 상당한 관련성이 있는 간접사실을 합리적으로 판단해 입증해야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 매입·중개 경위·조작 인식·공모 유무를 정리해 다툴 수 있는 영역입니다. 정상 중개 흐름 + 공모·범의 다툼 + 조작 인식 검토 결합은 ‘공모·범의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 거래 정리 ② 공모 유무 ③ 편취 범의 ④ 조작 인식 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 주행거리 조작 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·공모 유무·편취 범의·조작 인식·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 정리</strong> — 매입·중개·판매 흐름과 차량별 거래 내역 정리.</li>\n<li><strong>② 공모 유무</strong> — 주행거리 조작에 공모·가담했는지 객관 정황으로 검토.</li>\n<li><strong>③ 편취 범의</strong> — 거래 당시 기망·편취 의사가 있었는지 검토.</li>\n<li><strong>④ 조작 인식</strong> — 매입 단계에서 조작 사실을 알았는지·알 수 있었는지 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·거래 자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 조작된 차를 판 결과만으로 곧바로 사기가 되는 것이 아니라, 조작에 공모했거나 조작 사실을 알면서 기망했는지가 분기점입니다. 공모나 범의는 엄격한 증명이 필요하므로 매입·중개 흐름을 객관 자료로 정돈해 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·매입 정리 (즉시)</strong> — 매입처·중개·판매·정산 내역과 차량 이력 정리.</li>\n<li><strong>2단계 — 객관 자료 확보 (1주)</strong> — 성능점검기록부·매입 계약·송장·대화 등 거래 정황 자료 확보.</li>\n<li><strong>3단계 — 공모·범의 쟁점 정리 (2주)</strong> — 조작 인식·공모 유무·편취 범의 부재 사정 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 조작 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·공모 유무·조작 인식 갈래입니다.</strong></p>\n<ul>\n<li><strong>매입·중개·판매 거래 내역 (거래 흐름)</strong></li>\n<li><strong>성능·상태점검기록부·차량 이력 (조작 인식)</strong></li>\n<li><strong>매입처·이전 소유자 정보·계약서</strong></li>\n<li><strong>매수인과의 고지·설명 대화 기록</strong></li>\n<li><strong>정산·송장·입출금 내역 (이행 정황)</strong></li>\n<li><strong>고소장·상대 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘조작에 공모했는지’와 ‘조작 사실을 알면서 기망했는지’입니다. 성능점검기록부·매입 계약·이력으로 조작 인식 여부를 정돈하고 공모·범의가 엄격히 증명됐는지를 구체적으로 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공모 유무</strong> — 주행거리 조작에 공모·가담했는지.</li>\n<li><strong>범의 입증</strong> — 공모·범의가 엄격한 증명으로 인정되는지.</li>\n<li><strong>조작 인식</strong> — 매입 단계에서 조작을 알았거나 알 수 있었는지.</li>\n<li><strong>단순 하자담보 책임</strong> — 민사 하자·환불 다툼에 그치는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모·범의의 엄격한 증명과 간접사실 판단',
        summary:
          '대법원 2000도1899(대법원, 2000.07.07 선고) 영역에서 법원은 공모공동정범의 공모나 범의는 범죄사실을 구성하므로 이를 인정하려면 엄격한 증명이 요구되고, 실행행위에 관여한 사실을 인정하면서도 공모와 범의를 부인하는 경우에는 범의와 상당한 관련성이 있는 간접사실을 경험칙에 따라 합리적으로 판단하는 방법으로 입증해야 한다고 판시했습니다. 주행거리 조작에 공모·가담했는지를 다투는 사안을 살펴볼 때에도 공모·범의 입증 기준을 검토해볼 수 있습니다.',
        takeaway: '정상 중개 흐름 + 공모·범의 다툼 + 조작 인식 검토 결합 시 공모·범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '조작된 차를 팔았을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>결과만으로는 부족하고 조작 공모·인식과 편취 범의가 필요한 영역입니다.</strong> 매입·중개 흐름을 정리하세요.',
      },
      {
        question: '조작 사실을 몰랐음을 어떻게 보이나요?',
        answer:
          '<strong>성능점검기록부·매입 계약·이력 등 객관 자료로 조작 인식 부재를 다툴 수 있는 영역입니다.</strong> 차량 이력 자료를 모으세요.',
      },
      {
        question: '공모했다는 증거가 없는데도 불리한가요?',
        answer:
          '<strong>공모·범의는 엄격한 증명이 있어야 인정되는 영역입니다.</strong> 공모를 뒷받침할 정황의 부재를 정리하세요.',
      },
      {
        question: '민사 하자담보와 형사 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 하자·환불 다툼에 그치는지, 조작 인식·편취 범의가 있는지로 갈리는 영역입니다.</strong> 고지·설명 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 거래 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '대출 알선 선수수료 편취 사기 고의 무고 방어', href: '/guide/fraud/fraud-loan-brokerage-upfront-fee-intent-falsely-accused-defense' },
      { label: '사업 채무 사기 고소 변제지연', href: '/guide/fraud/fraud-business-loan-personal-debt-civil-confused-accused-defense' },
      { label: '계좌 지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
    ],
  },

  // ─── 7. sex-crime-taxi-passenger-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-taxi-passenger-track',
    keyword: '택시기사 승객 강제추행',
    questionKeyword: '택시를 탔는데 기사가 운전 중 또는 정차 후에 제 몸을 만지거나 밀착해 큰 불쾌감과 수치심을 느꼈어요. 좁은 차 안이라 피하기도 어려웠고 그 자리에서 항의도 제대로 못 했는데, 이런 택시 안 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '택시 승객 강제추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 승객 강제추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '택시 안에서 신체 접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·판단 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「밤늦게 또는 혼자 택시를 탔는데, 기사가 운전 중이나 정차한 사이 제 손·다리·어깨 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 좁은 차 안이라 피하기도 어렵고, 운전 중이라 항의했다 더 위험해질까 두려워 그 자리에서 제대로 대응하지 못한 채 내려, ‘내가 과민한 건가’ 자책하게 돼 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 ‘추행’은 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 피해자의 성적 자기결정권을 침해하는 행위를 의미하고, 그 해당 여부는 피해자의 의사·당사자 관계·행위 경위·구체적 태양·주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 밀폐된 차 안 + 의사에 반한 접촉 + 항거 곤란 환경 결합은 ‘추행 해당성·증거’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 기사 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 승객 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·기사 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 탑승 시각·구간·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 접촉이 성적 자기결정권을 침해하는 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 택시 내·외부 영상, 운행 기록 보존 요청.</li>\n<li><strong>④ 기사 특정</strong> — 차량번호·호출·결제 기록으로 기사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행 해당 여부는 행위의 구체적 태양과 주위 상황을 종합해 판단된다는 점이 분기점입니다. 차량번호·호출·결제 기록과 택시 내·외부 영상, 운행 기록을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 대응·정황 정리 (즉시)</strong> — 가능하면 안전 확보 후 시각·구간·접촉 정황 정리.</li>\n<li><strong>2단계 — 차량·운행 기록 확보 (즉시)</strong> — 차량번호·호출·결제 기록, 택시 영상 보존 요청.</li>\n<li><strong>3단계 — 운수사·플랫폼 협조 (직후)</strong> — 운수회사·호출 플랫폼에 운행·영상 자료 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 승객 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>탑승 시각·구간·접촉 정황 메모</strong></li>\n<li><strong>차량번호·택시 영상 보존 요청 자료</strong></li>\n<li><strong>호출 앱·결제·카드 내역 (운행 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>동승자·목격자 진술·연락처</strong></li>\n<li><strong>의류·신체 접촉 흔적 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 영상·운행 기록은 보존 기간이 짧으므로 곧바로 운수회사·플랫폼에 보존을 요청하는 것이 중요합니다. 호출·결제 기록으로 운행을 특정하고 직후 호소 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 접촉이 성적 자기결정권을 침해하는 추행으로 평가되는지.</li>\n<li><strong>판단 기준</strong> — 행위 태양·주위 상황을 종합해 신중히 판단되는지.</li>\n<li><strong>우연 접촉</strong> — 운행 중 부득이한 접촉인지 의도적 추행인지.</li>\n<li><strong>기사 특정</strong> — 차량번호·호출·결제로 기사를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 영상·운행 기록·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 추행의 의미와 판단 기준',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 ‘추행’은 객관적으로 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 피해자의 성적 자기결정권을 침해하는 행위를 의미하고, 어떤 행위가 추행에 해당하는지는 피해자의 의사·당사자 관계·행위 경위·구체적 태양·주위의 객관적 상황 등을 종합해 신중히 판단해야 한다고 판시했습니다. 택시 안에서의 의사에 반한 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '밀폐된 차 안 + 의사에 반한 접촉 + 항거 곤란 환경 결합 시 추행 해당성·증거 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운전 중 닿은 건지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>부득이한 접촉을 넘어 의사에 반한 의도적 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·반복 정황을 정리하세요.',
      },
      {
        question: '세게 잡은 건 아닌데도 추행이 되나요?',
        answer:
          '<strong>행위 태양과 주위 상황을 종합해 추행 해당성을 판단하는 영역입니다.</strong> 접촉 태양을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>운전 중이라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '기사를 어떻게 특정하나요?',
        answer:
          '<strong>차량번호·호출 앱·결제 기록으로 특정할 수 있는 영역입니다.</strong> 택시 영상·운행 기록 보존부터 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '병원 진료 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-hospital-treatment-pretext-touch-report-track' },
      { label: '마사지샵 추행 대응', href: '/guide/sex-crime/sex-crime-massage-shop-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '발마사지 업소 추행', href: '/guide/sex-crime/sex-crime-foot-massage-shop-track' },
    ],
  },

  // ─── 8. sex-crime-massage-shop-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-track',
    keyword: '마사지샵 추행',
    questionKeyword: '마사지·관리샵에서 시술을 받던 중 관리사가 시술과 무관한 부위를 만지거나 필요 이상으로 신체를 접촉해 불쾌하고 수치스러웠어요. 시술인지 추행인지 순간 헷갈려 그 자리에서 항의도 못 했는데, 이런 마사지샵 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '마사지샵 추행 신고·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 추행 — 5단계 추행 해당성·증거 점검 | 로앤가이드',
      description:
        '마사지·시술 중 신체 접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 의미·범의 증명을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「피로를 풀려고 찾은 마사지·관리샵에서, 시술을 받던 중 관리사가 시술과 무관한 부위를 만지거나 필요 이상으로 오래 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 시술 과정의 정상적인 접촉인지 의도된 추행인지 순간 헷갈리고, 누워 있는 자세라 즉시 대응하기도 어려워 그 자리에서 항의하지 못한 채 나와 ‘예민하게 받아들인 건가’ 자책하게 돼 막막하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으켜 성적 자기결정권을 침해하는 행위를 의미하고, 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 하며, 추행의 범의가 합리적 의심 없이 증명되어야 한다고 본 사례 흐름이 있는 영역입니다. 시술 빙자 + 무관 부위 접촉 + 의사에 반함 결합은 ‘추행 해당성·범의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성·범의 ③ 증거 보전 ④ 관리사·업소 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·관리사 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 업소·시술 종류·시각·접촉 부위·방식 정리.</li>\n<li><strong>② 추행 해당성·범의</strong> — 시술 범위를 벗어난 접촉인지, 추행의 범의가 보이는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 업소 CCTV·예약·결제 기록 보존 요청.</li>\n<li><strong>④ 관리사·업소 특정</strong> — 예약·결제·근무 기록으로 관리사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 행위마다 추행행위와 그에 대한 범의가 인정되어야 하고 범의가 합리적 의심 없이 증명되어야 한다는 점이 분기점입니다. 시술 범위를 벗어난 접촉 정황과 업소 CCTV·예약·결제 기록을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 대응·정황 정리 (즉시)</strong> — 가능하면 도움 요청, 업소·시술·시각·접촉 정황 정리.</li>\n<li><strong>2단계 — CCTV·기록 보존 요청 (즉시)</strong> — 업소·운영사에 CCTV·예약·결제 기록 보존 요청.</li>\n<li><strong>3단계 — 관리사·근무 확인 (직후)</strong> — 예약·결제·근무표로 관리사·시각 특정.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·시술 종류·시각·접촉 정황 메모</strong></li>\n<li><strong>업소 CCTV 보존 요청 자료</strong></li>\n<li><strong>예약·결제·근무 기록 (관리사·시각 특정)</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>동행자·다른 이용자 진술·연락처</strong></li>\n<li><strong>의류·신체 접촉 흔적 등 정황 자료</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업소 CCTV는 보존 기간이 짧으므로 곧바로 보존을 요청하는 것이 중요합니다. 시술 범위와 실제 접촉 부위를 대조해 정리하고 직후 호소 정황을 남기면 추행 해당성·범의 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 시술 범위를 벗어난 접촉이 추행으로 평가되는지.</li>\n<li><strong>추행 범의</strong> — 행위마다 추행의 범의가 합리적 의심 없이 증명되는지.</li>\n<li><strong>시술 빙자</strong> — 정상 시술인지 시술을 빙자한 추행인지.</li>\n<li><strong>관리사 특정</strong> — 예약·결제·근무 기록으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 추행 범의의 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으켜 피해자의 성적 자기결정권을 침해하는 행위를 의미하고, 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 하며, 추행의 범의에 대한 증명이 부족하면 강제추행죄로 유죄를 인정할 수 없다고 판시했습니다. 마사지·시술 중의 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '시술 빙자 + 무관 부위 접촉 + 의사에 반함 결합 시 추행 해당성·범의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시술 과정인지 추행인지 헷갈려요. 신고해도 되나요?',
        answer:
          '<strong>시술 범위를 벗어난 의도적 접촉인지를 정황으로 가리는 영역입니다.</strong> 접촉 부위·방식·시술 범위를 정리하세요.',
      },
      {
        question: '관리사가 ‘시술이었다’고 하면 어떻게 되나요?',
        answer:
          '<strong>시술 빙자인지 추행 범의가 있는지로 갈리는 영역입니다.</strong> 시술과 무관한 접촉 정황을 구체적으로 남기세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>당황해 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '관리사를 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제·근무 기록과 CCTV로 특정할 수 있는 영역입니다.</strong> CCTV 보존부터 신속히 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>해바라기센터·여성긴급전화 1366에서 상담 지원을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '노래방 좁은 공간 강제 신체접촉 추행 신고', href: '/guide/sex-crime/sex-crime-karaoke-room-confined-space-touch-report-track' },
      { label: '택시 승객 추행 대응', href: '/guide/sex-crime/sex-crime-taxi-passenger-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '헬스장 PT 트레이너 자세교정 부적절 신체접촉', href: '/guide/sex-crime/sex-crime-gym-personal-trainer-inappropriate-contact-track' },
    ],
  },

  // ─── 9. sex-crime-deepfake-acquaintance-photo-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-deepfake-acquaintance-photo-track',
    keyword: '딥페이크 지인합성 유포',
    questionKeyword: '제 얼굴 사진이 음란물에 합성된 딥페이크 영상·이미지가 만들어져 SNS·단체방에 유포되고 있다는 걸 알게 됐어요. 누가 만들었는지도 모르고 어떻게 증거를 모아 신고해야 할지 막막한데, 이런 딥페이크 지인합성물 제작·유포를 신고하고 삭제·처벌을 구할 수 있나요?',
    ctaKeyword: '딥페이크 지인합성 유포 신고·증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 지인합성 유포 — 5단계 증거보전·삭제 점검 | 로앤가이드',
      description:
        '내 얼굴이 합성된 딥페이크가 유포됐다면, 성폭력처벌법 제14조의2 허위영상물과 증거 임의제출·삭제까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「평소 SNS에 올린 사진이나 지인이 가진 사진을 누군가 음란물에 합성해, 마치 제가 등장하는 듯한 딥페이크 영상·이미지를 만들어 단체방·SNS·텔레그램 등에 유포하고 있다는 걸 뒤늦게 알게 된 분의 상황입니다. 누가 만들었는지도 모르고, 영상이 어디까지 퍼졌는지, 증거는 어떻게 모아 신고해야 하는지 막막한 데다, 지인 사이에 퍼졌을까 봐 두렵고 수치스러워 더 답답하셨을 거예요.」 성폭력처벌법 제14조의2는 반포 등을 할 목적으로 사람의 얼굴·신체 등을 성적 욕망·수치심을 유발할 수 있는 형태로 편집·합성·가공하거나 이를 반포한 자를 처벌하도록 규정하는 영역입니다. 동의 없이 합성·유포한 정황은 허위영상물 편집·반포로 평가될 여지가 있습니다. 판례는 피해자가 가해자의 저장매체에서 자신의 신체 촬영물을 임의로 선별·복제해 자신의 매체에 담아 임의제출한 경우 그 전자정보를 위법수집증거로 보아 무죄로 판단한 원심에 법리오해의 잘못이 있다고 본 사례 흐름이 있는 영역으로, 피해자의 증거 확보·임의제출이 쟁점이 됩니다. 동의 없는 합성 + 유포·확산 + 가해자 불특정 결합은 ‘증거보전·삭제’ 절차가 가능한 트랙입니다. 피해자라면 ① 증거 보전 ② 유포 범위 ③ 삭제 지원 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 딥페이크 지인합성 유포 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 보전·유포 범위·삭제·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보전</strong> — 합성물·게시물 URL·캡처·게시 시각을 원본 그대로 보존.</li>\n<li><strong>② 유포 범위</strong> — 게시 플랫폼·단체방·확산 경로·조회 정황 정리.</li>\n<li><strong>③ 삭제 지원</strong> — 디지털성범죄피해자지원센터 삭제 지원 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 계정·게시·전송 기록으로 제작·유포자 특정 단서 정리.</li>\n<li><strong>⑤ 신고·보호</strong> — 112 신고·피해자 보호조치 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합성물·게시물을 임의 가공 없이 URL·캡처·게시 시각까지 원본 형태로 보존하는 것이 증거 확보의 핵심입니다. 피해자가 확보·임의제출한 자료의 증거능력이 쟁점이 될 수 있어 보존 방법을 신중히 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시)</strong> — 합성물·게시 URL·캡처·게시 시각·계정을 원본 그대로 저장.</li>\n<li><strong>2단계 — 삭제 지원 요청 (즉시)</strong> — 디지털성범죄피해자지원센터에 삭제 지원·모니터링 요청.</li>\n<li><strong>3단계 — 유포 경로 정리 (직후)</strong> — 플랫폼·단체방·확산 경로와 조회·재유포 정황 정리.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112·사이버범죄 신고, 보존한 증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·삭제 지속 모니터링·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">딥페이크 지인합성 유포 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 증거 보전·유포 범위·삭제 갈래입니다.</strong></p>\n<ul>\n<li><strong>합성물·게시물 캡처·URL·게시 시각 (원본 보존)</strong></li>\n<li><strong>유포 플랫폼·단체방·확산 경로 기록</strong></li>\n<li><strong>합성에 사용된 원본 사진 출처 정황</strong></li>\n<li><strong>가해자 의심 계정·전송·게시 기록</strong></li>\n<li><strong>조회·재유포·캡처 정황 자료</strong></li>\n<li><strong>디지털성범죄피해자지원센터 삭제 접수 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합성물은 임의로 편집·가공하지 말고 URL·게시 시각·계정까지 원본 형태로 보존하는 것이 안전합니다. 디지털성범죄피해자지원센터의 삭제 지원과 함께 유포 경로를 정리하면 가해자 특정과 피해 확산 차단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편집·합성</strong> — 성적 수치심을 유발할 형태로 편집·합성됐는지.</li>\n<li><strong>반포 목적·반포</strong> — 반포 목적의 제작인지, 실제 반포·확산됐는지.</li>\n<li><strong>증거능력</strong> — 피해자가 확보·임의제출한 자료의 증거능력이 인정되는지.</li>\n<li><strong>가해자 특정</strong> — 계정·전송·게시 기록으로 제작·유포자를 특정할 수 있는지.</li>\n<li><strong>확산 차단</strong> — 삭제·재유포 모니터링이 이뤄지는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 (성범죄 신고)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (촬영물·합성물 삭제 지원)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자의 임의제출 전자정보 증거능력',
        summary:
          '대법원 2023도3626(대법원, 2024.12.24 선고) 영역에서 법원은 피해자들이 가해자 소유 저장매체에서 자신들의 신체 촬영물 등을 임의로 선별·복제해 자신들이 소유·관리하는 매체에 담아 경찰에 임의제출한 사안에서, 그 전자정보가 위법수집증거에 해당한다고 보아 공소사실을 무죄로 판단한 원심에 법리오해의 잘못이 있다고 판시했습니다. 딥페이크·합성물 피해의 증거 확보·임의제출을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '동의 없는 합성 + 유포·확산 + 가해자 불특정 결합 시 증거보전·삭제 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '합성물을 발견했는데 무엇부터 하나요?',
        answer:
          '<strong>임의로 가공하지 말고 URL·캡처·게시 시각을 원본 형태로 보존하는 영역입니다.</strong> 보존 후 삭제 지원을 요청하세요.',
      },
      {
        question: '누가 만들었는지 모르는데 신고가 되나요?',
        answer:
          '<strong>계정·전송·게시 기록으로 수사가 진행될 수 있는 영역입니다.</strong> 의심 계정·유포 경로 기록을 보존하세요.',
      },
      {
        question: '이미 퍼진 영상은 어떻게 삭제하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터의 삭제 지원·모니터링을 받아볼 수 있는 영역입니다.</strong> 게시 URL을 모아 접수하세요.',
      },
      {
        question: '제가 캡처한 자료도 증거가 되나요?',
        answer:
          '<strong>피해자가 확보·제출한 자료의 증거능력이 인정될 수 있는 영역입니다.</strong> 원본 형태로 보존해 경찰에 제출하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터·여성긴급전화 1366에서 상담을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '지하철 불법촬영', href: '/guide/sex-crime/sex-crime-subway-illegal-filming-track' },
      { label: '협박 성적영상 유포', href: '/guide/sex-crime/sex-crime-sextortion-image-threat-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '헬스 PT 중 추행', href: '/guide/sex-crime/sex-crime-gym-personal-training-session-track' },
    ],
  },

  // ─── 10. sex-crime-company-dinner-intoxicated-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-company-dinner-intoxicated-falsely-accused-defense',
    keyword: '회식 만취 추행 무고',
    questionKeyword: '회사 회식에서 다 같이 술을 마시고 어울렸을 뿐인데, 며칠 뒤 한 직원이 ‘그날 만취 상태에서 추행당했다’며 회사와 경찰에 신고했어요. 저는 추행한 적도 없고 다들 취해 기억도 흐릿하며 상대 진술 외엔 정황도 없는데, 사실과 다른 이 신고에 어떻게 방어하나요?',
    ctaKeyword: '회식 만취 추행 무고 고의·무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 만취 추행 무고 방어 — 5단계 고의·무죄추정 점검 | 로앤가이드',
      description:
        '회식 자리 추행 주장으로 신고당했다면, 무죄추정·추행 고의 부인 시 간접사실 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회사 회식·송년회 자리에서 다 같이 술을 마시고 어울렸을 뿐인데, 며칠 뒤 한 직원이 ‘그날 만취 상태에서 추행당했다’며 회사나 경찰에 신고해 한순간에 가해자로 지목된 분의 상황입니다. 정작 본인은 추행한 적이 없고, 좁은 자리에서 부딪치거나 부축하는 과정의 접촉이 있었을 뿐이며, 모두 취해 기억도 흐릿한 데다 상대의 진술 외에는 이를 뒷받침할 객관적 정황도 뚜렷하지 않은데, 사내 소문과 징계까지 겹쳐 당혹스럽고 억울하실 거예요.」 혐의를 받고 있다면, 문제 된 행위가 추행에 해당하는지, 추행의 고의가 있었는지가 핵심 쟁점입니다. 형사재판에서 유죄 인정은 합리적 의심이 없을 정도의 증명에 이르러야 하고, 무죄추정의 원칙상 검사의 증명이 그 확신에 이르지 못하면 피고인의 이익으로 판단해야 합니다. 판례는 추행죄가 성립하려면 추행을 한다는 인식 아래 적어도 미필적으로 이를 용인하는 의사가 있어야 하고, 피고인이 추행의 고의를 부인하면 고의와 상당한 관련성이 있는 간접사실로 판단하되 합리적 의심이 있으면 유죄로 단정할 수 없다고 본 사례 흐름이 있는 영역입니다. 따라서 술자리 정황·추행 고의·해당성을 정리해 다툴 수 있는 영역입니다. 회식 정황 + 추행 고의 다툼 + 해당성 검토 결합은 ‘고의·무죄추정’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 추행 고의 ④ 정황 검토 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 만취 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·추행 고의·정황·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식 일정·자리 배치·동석자·접촉 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 행위가 성적 의도의 추행으로 평가되는지 검토.</li>\n<li><strong>③ 추행 고의</strong> — 추행을 용인하는 미필적 의사가 있었는지 간접사실로 검토.</li>\n<li><strong>④ 정황 검토</strong> — CCTV·동석자 진술·사진·메시지 등 객관 정황 검토.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리·의견서 준비, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 추행 고의를 부인하면 고의와 상당한 관련성이 있는 간접사실로 판단하되 합리적 의심이 있으면 유죄로 단정할 수 없다는 점이 분기점입니다. 회식 정황·동석자 진술·기록으로 추행 해당성과 고의를 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·자료 정리 (즉시)</strong> — 회식 일정·자리 배치·동석자·접촉 정황 정리.</li>\n<li><strong>2단계 — 객관 정황 확보 (1주)</strong> — CCTV·사진·메시지·결제·동석자 진술 등 객관 자료 확보.</li>\n<li><strong>3단계 — 해당성·고의 쟁점 정리 (2주)</strong> — 추행 해당성과 추행 고의 부재 사정, 무죄추정 쟁점 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 만취 추행 무고 고의·무죄추정 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 일정·참석자·자리 배치 메모</strong></li>\n<li><strong>식당·주점 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·이동·시간 기록 (상황 특정)</strong></li>\n<li><strong>동석자·목격자 진술·연락처</strong></li>\n<li><strong>당시·사후 사진·대화·메시지 기록</strong></li>\n<li><strong>상대 진술 모순·정황 불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 행위가 추행에 해당하는지’와 ‘추행의 고의가 있었는지’입니다. CCTV·사진·동석자 진술로 당시 상황을 정돈하고 추행 고의와 어긋나는 정황을 구체적으로 짚으면 추행 해당성·고의 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 행위가 성적 의도의 추행인지.</li>\n<li><strong>추행 고의</strong> — 추행을 용인하는 미필적 의사가 있었는지.</li>\n<li><strong>증명 정도·무죄추정</strong> — 합리적 의심을 배제할 정도로 증명됐는지.</li>\n<li><strong>음주·기억</strong> — 만취로 기억이 불명확한 사정이 어떻게 평가되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의 부인 시 간접사실 판단과 무죄추정',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로 이를 용인하는 내심의 의사가 있어야 하고, 피고인이 추행의 고의를 부인하는 경우에는 고의와 상당한 관련성이 있는 간접사실로 판단하되, 무죄추정의 원칙상 합리적 의심이 있으면 유죄로 단정할 수 없다고 판시했습니다. 회식 자리 만취 상태의 추행 주장을 다투는 사안을 살펴볼 때에도 고의 판단·무죄추정 기준을 검토해볼 수 있습니다.',
        takeaway: '회식 정황 + 추행 고의 다툼 + 해당성 검토 결합 시 고의·무죄추정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대 진술만 있는데도 처벌될 수 있나요?',
        answer:
          '<strong>합리적 의심이 없을 정도로 증명돼야 하고 무죄추정이 적용되는 영역입니다.</strong> 진술 모순·정황 불부합을 정리하세요.',
      },
      {
        question: '추행한 적이 없는데 어떻게 방어하나요?',
        answer:
          '<strong>CCTV·사진·동석자 진술 등 객관 자료로 다툴 수 있는 영역입니다.</strong> 회식 경위·정황 자료를 모으세요.',
      },
      {
        question: '부딪치거나 부축한 접촉도 추행이 되나요?',
        answer:
          '<strong>추행 고의와 해당성이 인정돼야 하는 영역입니다.</strong> 접촉 경위와 추행 고의와 어긋나는 정황을 정리하세요.',
      },
      {
        question: '다들 취해 기억이 흐릿한데 불리한가요?',
        answer:
          '<strong>음주·기억 상태도 고의·해당성 판단에 함께 고려되는 영역입니다.</strong> 당시 사진·메시지·정황을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 사실관계를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '성범죄 무고 대응 방법과 절차', href: '/guide/sex-crime/sex-crime-false-accusation-process' },
      { label: '헬스장 PT 지도 중 강제추행', href: '/guide/sex-crime/sex-crime-gym-personal-training-track' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
      { label: '공중 수영장 탈의실 불법촬영', href: '/guide/sex-crime/sex-crime-public-pool-changing-illegal-filming-track' },
    ],
  },
];
