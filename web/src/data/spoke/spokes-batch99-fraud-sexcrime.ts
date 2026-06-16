import { SpokePage } from '../spoke-pages';

// batch99 fraud(6) + sex-crime(4) — 10개 (2026-06-16)
//
// 고유 존재 이유:
// 1. fraud-luxury-watch-consignment-nonpayment-track — 일반 위탁판매 분쟁과 분기. '명품시계를 위탁판매 맡겼는데 판매대금을 정산 안 하고 잠적' 위탁대금 편취 절차형 트랙(victim).
// 2. fraud-pt-membership-transfer-premium-track — 일반 회원권 분쟁과 분기. 'PT·헬스 회원권 양수·권리금을 받고 영업 양도 안 하고 잠적' 양도 빙자 편취 판단형 트랙(victim).
// 3. fraud-franchise-startup-fee-track — 일반 가맹분쟁과 분기. '프랜차이즈 창업 빙자로 가맹비·시설비를 받고 개점시켜주지 않음' 창업 빙자 편취 판단형 트랙(victim).
// 4. fraud-joint-investment-profit-guarantee-track — 일반 투자분쟁과 분기. '공동투자 수익보장을 미끼로 투자원금을 받고 반복 추가입금 유도 후 잠적' 수익보장 편취 절차형 트랙(victim).
// 5. fraud-presale-right-double-sale-track — 일반 부동산분쟁과 분기. '분양권을 같은 물건으로 여러 명에게 이중 전매하고 계약금을 편취' 이중매매 편취 판단형 트랙(victim).
// 6. fraud-business-settlement-falsely-accused-defense — 일반 사기 무고류와 분기. '동업자금 정산 다툼을 사기로 고소당함' 편취 고의·민사다툼 방어 판단형 트랙(accused).
// 7. sex-crime-pc-room-adjacent-seat-track — 일반 추행류와 분기. 'PC방 옆자리 낯선 사람이 신체를 만짐' 추행 해당성·상당성 일탈 판단형 트랙(victim).
// 8. sex-crime-water-park-pool-crowd-track — 일반 추행류와 분기. '워터파크·수영장 혼잡 속 신체 접촉·기습추행' 혼잡 추행 해당성 판단형 트랙(victim).
// 9. sex-crime-livestream-chat-obscene-message-track — 일반 통매음류와 분기. '인터넷 방송 채팅으로 성적 메시지를 반복 도달' 통신매체이용음란 목적 판단형 트랙(victim).
// 10. sex-crime-afterwork-drink-contact-falsely-accused-defense — 일반 성범죄 무고류와 분기. '회식 후 술자리 신체 접촉을 강제추행으로 고소당함' 추행 고의·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch99FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-luxury-watch-consignment-nonpayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-watch-consignment-nonpayment-track',
    keyword: '명품시계 위탁판매 대금 미정산 사기',
    questionKeyword: '중고명품 매장·위탁판매 업체·중개인에게 ‘좋은 값에 팔아 정산해주겠다’는 말을 믿고 명품 시계·가방을 위탁판매로 맡겼는데, 물건이 팔린 뒤에도 판매대금을 정산해주지 않고 ‘아직 안 팔렸다, 곧 보내준다’는 핑계만 반복하다 결국 연락이 끊겼어요. 처음부터 판매대금을 가로챌 생각으로 위탁을 받은 것 같은데, 이런 위탁판매 대금 미정산을 사기로 신고하고 맡긴 물건 값을 돌려받을 수 있나요?',
    ctaKeyword: '명품시계 위탁판매 대금 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '명품시계 위탁판매 대금 미정산 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '명품 시계를 위탁판매로 맡겼는데 판매대금을 정산 안 하고 잠적당했다면, 형법 제347조 사기·위탁대금 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고명품 매장·위탁판매 전문 업체·SNS 중개인에게 ‘우리가 단골·해외 수요가 있어 제값에 빨리 팔아 바로 정산해준다’는 말을 믿고, 적지 않은 값어치의 명품 시계·가방·주얼리를 위탁판매로 맡긴 분의 상황입니다. 그런데 한참이 지나도 정산이 없어 확인해 보니 이미 물건이 팔렸는데도 ‘아직 안 팔렸다, 입금이 막혔다, 다음 주에 꼭 보내준다’는 핑계만 며칠씩 반복되다가, 결국 매장이 닫히거나 중개인이 연락처·메신저를 모두 끊어, 처음부터 위탁받은 물건과 판매대금을 가로챌 생각이었던 건 아닌지 의심되고 막막하실 거예요. 비싼 물건도 잃고 돈도 못 받아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 위탁판매에서 정산할 의사·능력 없이 정상 중개처럼 가장해 물건을 받거나, 판매대금을 보관하면서 임의로 소비하면 사기 또는 횡령으로 평가될 여지가 있는 영역입니다. 판례는 위탁·보관 관계에서 금전을 위탁자를 위해 보관하는 지위에 있는지 여부에 따라 재산범죄 성립과 죄책이 달라질 수 있다고 본 사례 흐름이 있는 영역으로, 위탁판매 대금의 귀속과 보관자 지위를 가려 다툴 여지가 있습니다. 위탁판매 + 매도 후 미정산 + 잠적 결합은 ‘위탁대금 편취·보관 횡령’ 다툼이 가능한 트랙입니다. 피해자라면 ① 위탁·정산 정리 ② 미정산·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명품시계 위탁판매 대금 미정산 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위탁·미정산·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위탁·정산 정리</strong> — 위탁판매 계약·정산 약속·물품·시세·인수증 정리.</li>\n<li><strong>② 미정산·기망</strong> — 정산할 의사·능력 없이 매도 후 대금을 가로챘는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 위탁물 시세·실제 판매대금 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·횡령 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 대금·물품 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 정산 지연과 달리, 판매대금을 정산할 의사 없이 가로챘거나 보관 중인 대금을 임의로 소비했는지가 판단의 분기점입니다. 위탁판매 계약과 매도 사실·정산 핑계 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위탁·정산 자료 보존 (즉시)</strong> — 위탁판매 계약·인수증·정산 약속·물품 사진·시세 자료 보존.</li>\n<li><strong>2단계 — 매도·미정산 입증 (즉시)</strong> — 물건이 팔린 정황·정산 핑계 반복·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 정산·반환 요구 (병행)</strong> — 내용증명으로 판매대금 정산 또는 물품 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 대금·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명품시계 위탁판매 대금 미정산 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 위탁·미정산·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>위탁판매 계약서·인수증·물품 보관증 (위탁 사실)</strong></li>\n<li><strong>정산 약속·판매가·수수료 합의 대화 (조건)</strong></li>\n<li><strong>물품 시세·감정·구입 영수증 (손해 산정)</strong></li>\n<li><strong>매도 정황·재판매 게시글 캡처 (판매 사실)</strong></li>\n<li><strong>정산 핑계·연락 두절 대화 기록 (기망 정황)</strong></li>\n<li><strong>위탁 업체·중개인·계좌 신원 정보</strong></li>\n<li><strong>내용증명·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 물건이 실제 팔렸는데도 정산을 미루는 정황을 재판매 게시글·매도 기록으로 함께 잡으면 대금을 가로챘는지 다투는 데 도움이 됩니다. 위탁판매 계약과 정산 약속을 명확히 정리하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미정산·기망</strong> — 정산할 의사·능력 없이 위탁을 받았는지.</li>\n<li><strong>대금 귀속·보관</strong> — 판매대금을 위탁자를 위해 보관하는 지위인지.</li>\n<li><strong>사기·횡령 구분</strong> — 위탁 단계 편취인지 보관 후 임의 소비인지.</li>\n<li><strong>손해액</strong> — 시세·실판매가·위탁물 가치 중 무엇을 기준할지.</li>\n<li><strong>업체 특정</strong> — 매장·중개인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (위탁·중개 거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위탁·보관 관계와 금전의 귀속',
        summary:
          '대법원 2023도16896(대법원, 2025.07.17 선고) 영역에서 법원은 채권양도인이 대항요건을 갖추지 않은 채 채무자로부터 채권을 추심해 받은 금전은 특별한 사정이 없으면 양수인이 아니라 양도인에게 귀속하고, 그 금전을 양수인을 위해 보관하는 지위에 있다고 볼 수 없어 임의로 처분하더라도 횡령죄가 성립하지 않는다고 판시했습니다. 위탁판매에서 판매대금의 귀속과 보관자 지위를 살펴볼 때에도 사기·횡령의 죄책을 가려 검토해볼 수 있습니다.',
        takeaway: '위탁판매 + 매도 후 미정산 + 잠적 결합 시 위탁대금 편취·보관 횡령 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '정산이 늦는 것뿐 아닌가요?',
        answer:
          '<strong>정산할 의사·능력 없이 매도 후 대금을 가로챘는지가 핵심인 영역입니다.</strong> 매도 정황과 정산 핑계 기록을 확보하세요.',
      },
      {
        question: '물건이 팔렸는지 어떻게 입증하나요?',
        answer:
          '<strong>재판매 게시글·매도 기록이 출발점인 영역입니다.</strong> 판매 정황과 위탁 시세 자료를 모으세요.',
      },
      {
        question: '사기인가요 횡령인가요?',
        answer:
          '<strong>위탁 단계 편취인지 보관 후 임의 소비인지에 따라 갈리는 영역입니다.</strong> 위탁·정산 경위를 시간순으로 정리하세요.',
      },
      {
        question: '맡긴 물건 값 전부를 받을 수 있나요?',
        answer:
          '<strong>위탁물 시세·실판매가 기준 손해를 함께 검토할 수 있는 영역입니다.</strong> 감정·시세·구입 자료를 정돈하세요.',
      },
      {
        question: '업체가 문을 닫고 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '로맨스스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
    ],
  },

  // ─── 2. fraud-pt-membership-transfer-premium-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pt-membership-transfer-premium-track',
    keyword: 'PT 헬스장 양도 권리금 편취 사기',
    questionKeyword: '헬스장·PT샵·필라테스 스튜디오를 ‘회원·시설·권리금까지 다 넘겨주겠다’는 말을 믿고 양수하기로 하고 권리금·보증금·인수대금을 입금했는데, 막상 회원 명단·계약을 제대로 넘기지 않거나 임대차·시설 권리가 양도인 것이 아니었고 결국 연락이 끊겼어요. 처음부터 양도할 의사·권한 없이 권리금만 받아 챙길 생각이었던 것 같은데, 이런 양도 빙자 권리금 편취를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: 'PT 헬스장 양도 권리금 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'PT 헬스장 양도 권리금 편취 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '헬스장·PT샵 양수에 권리금·인수대금을 냈는데 양도가 안 되고 잠적당했다면, 형법 제347조 사기의 양도 빙자 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·PT샵·필라테스·요가 스튜디오를 인수하려고 ‘회원이 많다, 시설·집기·권리금까지 통째로 넘겨주겠다, 임대차도 그대로 승계된다’는 말을 믿고, 적지 않은 권리금·보증금·인수대금을 양도인에게 입금한 분의 상황입니다. 그런데 막상 잔여 회원 명단·PT 계약·매출 자료를 제대로 넘기지 않거나, 알고 보니 임대차·시설 권리가 양도인 것이 아니어서 건물주·실제 권리자와 분쟁이 생기고, 양도인은 ‘정리해서 보내준다’는 핑계만 반복하다 결국 연락을 끊어, 처음부터 양도할 의사나 권한 없이 권리금만 받아 챙길 생각이었던 건 아닌지 의심되고 막막하실 거예요. 새 출발을 하려다 큰돈만 잃어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 양도할 의사·권한·실체 없이 정상 영업양도처럼 가장해 권리금·인수대금을 받았다면 기망행위로 평가될 여지가 있고, 그 대금 교부가 있으면 재산침해가 인정될 수 있습니다. 판례는 동일 피해자에 대해 단일하고 계속된 범의 아래 동종 범행을 반복한 경우 포괄일죄가 될 수 있으나 피해액 기준 가중처벌·시효·기판력에 중대한 영향을 미치므로 범의의 단일성·계속성을 신중히 판단해야 한다고 본 사례 흐름이 있는 영역으로, 분할 입금·반복 편취의 피해 단위를 가려 다툴 여지가 있습니다. 양도 빙자 + 권리금 입금 + 미양도·잠적 결합은 ‘양도 빙자 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 양도·입금 정리 ② 기망·권한 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PT 헬스장 양도 권리금 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·기망·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양도·입금 정리</strong> — 양도 합의·권리금·인수대금·승계 약속·입금 내역 정리.</li>\n<li><strong>② 기망·권한</strong> — 양도할 의사·권한·실체 없이 권리금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 권리금·보증금·인수대금 교부 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 대금·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 양도 분쟁과 달리, 양도할 권한·실체 없이 정상 양도처럼 속여 권리금을 받았는지가 사기 판단의 분기점입니다. 양도 합의 내용과 임대차·시설 권리 실체를 함께 확인해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양도·입금 자료 보존 (즉시)</strong> — 양도 합의·권리금·승계 약속 대화·입금·인수 자료 보존.</li>\n<li><strong>2단계 — 권한·미양도 입증 (즉시)</strong> — 임대차·시설 권리 실체, 회원·계약 미인계 정황을 확보.</li>\n<li><strong>3단계 — 반환 요구 (병행)</strong> — 내용증명으로 권리금·인수대금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 대금·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">PT 헬스장 양도 권리금 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 양도·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>양도 합의서·권리금 계약서 (양도 조건)</strong></li>\n<li><strong>회원·시설·임대차 승계 약속 대화 (기망 정황)</strong></li>\n<li><strong>권리금·보증금·인수대금 입금 내역 (피해 금액)</strong></li>\n<li><strong>임대차계약·등기·시설 권리 자료 (권한 확인)</strong></li>\n<li><strong>회원 명단·PT 계약 미인계 정황</strong></li>\n<li><strong>정산 핑계·연락 두절 대화 기록</strong></li>\n<li><strong>양도인·계좌·연락처 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대차·시설 권리가 양도인 것이 맞는지부터 확인하면 양도 권한 없이 권리금만 받았는지 기망 정황이 선명해집니다. 회원·계약 인계 약속과 실제 인계 여부를 대조하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·권한</strong> — 양도할 의사·권한·실체가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 양도 무산인지 처음부터 편취였는지.</li>\n<li><strong>죄수</strong> — 분할 입금 반복이 포괄일죄인지.</li>\n<li><strong>편취액</strong> — 권리금·인수대금 전부가 피해액인지.</li>\n<li><strong>양도인 특정</strong> — 양도인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (영업양도·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 반복 편취 재산범죄의 포괄일죄 판단',
        summary:
          '대법원 2024도11353(대법원, 2025.12.04 선고) 영역에서 법원은 동일 피해자에 대해 단일하고 계속된 범의 아래 동종 범행을 일정 기간 반복한 경우 포괄일죄가 될 수 있으나, 포괄일죄인지 경합범인지는 피해액 기준 가중처벌·양형·공소시효·기판력에 중대한 영향을 미치므로 범행 방법·동기·시간적 간격·범의의 단절·갱신 여부를 세밀하게 살펴 신중히 판단해야 한다고 판시했습니다. 양도 빙자로 권리금·인수대금을 분할 편취한 사안을 살펴볼 때에도 피해 단위와 죄수를 검토해볼 수 있습니다.',
        takeaway: '양도 빙자 + 권리금 입금 + 미양도·잠적 결합 시 양도 빙자 편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '양도가 무산된 것뿐 아닌가요?',
        answer:
          '<strong>양도할 권한·실체 없이 권리금만 받았는지가 핵심인 영역입니다.</strong> 양도 합의와 임대차·시설 권리 실체를 확인하세요.',
      },
      {
        question: '임대차가 양도인 것이 아니었어요.',
        answer:
          '<strong>양도 권한 부재는 기망 정황의 출발점인 영역입니다.</strong> 임대차계약·등기·권리 자료를 확보하세요.',
      },
      {
        question: '회원·계약을 안 넘겨주는데 사기인가요?',
        answer:
          '<strong>승계 약속과 실제 인계 여부가 다툼점인 영역입니다.</strong> 인계 약속 대화와 미인계 정황을 정리하세요.',
      },
      {
        question: '권리금·인수대금 전부가 피해인가요?',
        answer:
          '<strong>교부한 권리금·보증금·인수대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '양도인이 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '지인 원금보장 차용 무고 방어', href: '/guide/fraud/fraud-acquaintance-principal-guarantee-falsely-accused-defense' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 3. fraud-franchise-startup-fee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-franchise-startup-fee-track',
    keyword: '프랜차이즈 창업 빙자 가맹비 편취 사기',
    questionKeyword: '프랜차이즈 본사·창업 컨설팅에서 ‘유망 브랜드다, 본사가 입지·인테리어·물품까지 다 책임지고 바로 개점시켜 수익을 보장한다’는 말을 믿고 가맹비·교육비·인테리어 선금을 입금했는데, 개점이 계속 미뤄지거나 약속한 지원·물품이 오지 않고 결국 본사가 잠적했어요. 알고 보니 실체 없는 브랜드로 가맹비만 받아 챙긴 것 같은데, 이런 창업 빙자 가맹비 편취를 사기로 신고하고 낸 돈을 돌려받을 수 있나요?',
    ctaKeyword: '프랜차이즈 창업 빙자 가맹비 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '프랜차이즈 창업 빙자 가맹비 편취 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '창업을 미끼로 가맹비·인테리어 선금을 받고 개점이 안 되고 본사가 잠적했다면, 형법 제347조 사기의 창업 빙자 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「프랜차이즈 본사·창업 컨설팅 업체에서 ‘지금 뜨는 유망 브랜드다, 본사가 좋은 입지·인테리어·집기·초도 물품까지 책임지고 빠르게 개점시켜 매달 안정적 수익을 낼 수 있다’는 설명회·상담을 믿고, 가맹비·교육비·인테리어 선금·보증금을 입금한 분의 상황입니다. 그런데 계약 후 개점이 ‘인허가·공사 사정’이라며 계속 미뤄지거나, 약속한 인테리어·물품·운영 지원이 오지 않고, 결국 본사가 사무실을 비우고 연락을 끊어, 알고 보니 가맹점 실체나 운영 능력 없이 가맹비·선금만 받아 챙기는 구조였던 건 아닌지 의심되고 막막하실 거예요. 인생을 걸고 시작한 창업이 첫발도 떼기 전에 무너져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 개점·지원·수익을 이행할 의사·능력 없이 정상 가맹사업처럼 가장해 가맹비·선금을 받았다면 기망행위로 평가될 여지가 있고, 그 대금 교부가 있으면 재산침해가 인정될 수 있습니다. 판례는 업무상 임무에 위배해 타인에게 재산상 손해를 가하고 재산상 이익을 취득하는 행위의 죄책을 손해·이익의 발생을 경제적 관점에서 가려 판단해야 한다고 본 사례 흐름이 있는 영역으로, 가맹비 편취와 사업 운영상 손해를 구분해 다툴 여지가 있습니다. 창업 빙자 + 가맹비 선입금 + 미개점·잠적 결합은 ‘창업 빙자 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·입금 정리 ② 기망·실체 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 프랜차이즈 창업 빙자 가맹비 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기망·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·입금 정리</strong> — 가맹계약·정보공개서·개점·지원 약속·입금 내역 정리.</li>\n<li><strong>② 기망·실체</strong> — 개점·지원·수익을 이행할 의사·능력·실체 없이 가맹비를 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 가맹비·교육비·인테리어 선금·보증금 교부 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 본사 피해자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 개점 지연·사업 부진과 달리, 가맹점 실체·운영 능력 없이 가맹비·선금만 받을 의도였는지가 사기 판단의 분기점입니다. 정보공개서·개점 약속과 미개점·미지원 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·입금 자료 보존 (즉시)</strong> — 가맹계약·정보공개서·설명회 자료·개점·지원 약속·입금 내역 보존.</li>\n<li><strong>2단계 — 미개점·미지원 입증 (즉시)</strong> — 개점 무산·인테리어·물품 미제공·연락 두절 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 반환 요구 (병행)</strong> — 내용증명으로 가맹비·선금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 계좌 지급정지·동일 본사 피해자 공동 신고·민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">프랜차이즈 창업 빙자 가맹비 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>가맹계약서·정보공개서·설명회 자료 (계약 조건)</strong></li>\n<li><strong>개점·인테리어·물품·수익 보장 약속 대화 (기망 정황)</strong></li>\n<li><strong>가맹비·교육비·선금·보증금 입금 내역 (피해 금액)</strong></li>\n<li><strong>개점 무산·미지원·공사 중단 정황 자료</strong></li>\n<li><strong>본사 실체·기존 가맹점 운영 여부 확인 자료</strong></li>\n<li><strong>동일 본사 다른 피해자·후기 자료</strong></li>\n<li><strong>본사·대표·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정보공개서와 실제 운영 중인 가맹점이 있는지부터 확인하면 실체 없는 브랜드로 가맹비만 받았는지 기망 정황이 선명해집니다. 개점·지원 약속과 미이행을 시간순으로 정리하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·실체</strong> — 개점·지원·수익을 이행할 의사·능력·실체가 있었는지.</li>\n<li><strong>편취 범의</strong> — 단순 사업 부진인지 처음부터 편취였는지.</li>\n<li><strong>수익 보장</strong> — 과장·허위 수익 약속이 기망에 이르렀는지.</li>\n<li><strong>편취액</strong> — 가맹비·선금 전부가 피해액인지.</li>\n<li><strong>본사 특정</strong> — 본사·대표·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (가맹·창업 거래 피해상담)</strong></li>\n<li><strong>공정거래위원회 1670-0007 (가맹사업 분쟁상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임무위배와 재산상 손해·이익의 판단',
        summary:
          '대법원 2020도17272(대법원, 2025.10.16 선고) 영역에서 법원은 업무상 임무에 위배해 재산상 이익을 취득하고 본인에게 손해를 가하는 행위에서 임무위배란 신임관계를 저버리는 일체의 행위를 포함하고, 재산상 손해에는 현실적 손해뿐 아니라 실해 발생의 위험을 초래한 경우도 포함되며 그 유무는 법률적 판단이 아니라 경제적 관점에서 파악해야 한다고 판시했습니다. 창업·가맹을 빙자해 가맹비를 받고 약속을 이행하지 않은 사안을 살펴볼 때에도 편취와 손해의 발생을 경제적 관점에서 검토해볼 수 있습니다.',
        takeaway: '창업 빙자 + 가맹비 선입금 + 미개점·잠적 결합 시 창업 빙자 편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 개점 지연·사업 부진 아닌가요?',
        answer:
          '<strong>실체·운영 능력 없이 가맹비만 받을 의도였는지가 핵심인 영역입니다.</strong> 정보공개서와 개점·지원 약속을 확보하세요.',
      },
      {
        question: '실체 없는 브랜드인지 어떻게 확인하나요?',
        answer:
          '<strong>정보공개서·실제 운영 가맹점 유무가 출발점인 영역입니다.</strong> 본사 실체·운영 자료를 확인하세요.',
      },
      {
        question: '수익 보장한다는 말도 기망인가요?',
        answer:
          '<strong>과장·허위 수익 약속이 기망에 이르렀는지 다툼점인 영역입니다.</strong> 수익 보장 대화·설명회 자료를 정리하세요.',
      },
      {
        question: '같은 본사 피해자가 여럿이에요.',
        answer:
          '<strong>동일 본사 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 계약·입금 자료를 모으세요.',
      },
      {
        question: '본사가 사무실을 비우고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
    ],
  },

  // ─── 4. fraud-joint-investment-profit-guarantee-track ───
  {
    domain: 'fraud',
    slug: 'fraud-joint-investment-profit-guarantee-track',
    keyword: '공동투자 수익보장 원금 편취 사기',
    questionKeyword: '지인·투자방·SNS에서 ‘함께 투자하면 매달 고정 수익을 보장하고 원금은 안전하다’는 말을 믿고 공동투자 명목으로 원금을 입금했는데, 처음 몇 번 소액 수익을 주며 안심시킨 뒤 ‘추가 투자하면 수익이 커진다’며 더 큰 입금을 반복 요구하다 결국 수익도 원금도 주지 않고 잠적했어요. 처음부터 수익을 줄 의사·능력 없이 투자금만 받아 돌려막은 것 같은데, 이런 수익보장 공동투자 편취를 사기로 신고하고 원금을 돌려받을 수 있나요?',
    ctaKeyword: '공동투자 수익보장 원금 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공동투자 수익보장 원금 편취 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '수익보장을 미끼로 공동투자 원금을 받고 수익·원금도 안 주고 잠적당했다면, 형법 제347조 사기의 수익보장 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·동호회·투자 단체방·SNS에서 ‘함께 투자하면 매달 일정한 고정 수익을 보장하고, 원금은 안전하게 지켜진다, 이미 많은 사람이 수익을 보고 있다’는 말을 믿고, 공동투자·원금보장 명목으로 적지 않은 돈을 입금한 분의 상황입니다. 그런데 처음 몇 번은 약속대로 소액 수익을 정산해주며 신뢰를 쌓은 뒤, ‘지금 추가로 넣으면 등급이 올라가 수익이 훨씬 커진다, 이번이 마지막 기회다’라며 점점 더 큰 입금을 반복 요구하고, 더 보내지 않거나 출금을 요청하자 정산을 미루다 결국 수익도 원금도 주지 않고 연락을 끊어, 처음부터 수익을 줄 의사·능력 없이 투자금만 받아 앞사람 수익을 뒷사람 돈으로 돌려막은 건 아닌지 의심되고 막막하실 거예요. 노후·목돈을 걸어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실제 운용·수익을 낼 의사·능력 없이 수익보장을 가장해 투자금을 받았다면 기망행위로 평가될 여지가 있고, 그 입금 교부가 있으면 재산침해가 인정될 수 있습니다. 판례는 전기통신금융사기 규정이 형법상 사기죄에 대한 특별법 관계에 있지 않고, 한 행위가 양 죄의 구성요건을 충족하면 상상적 경합관계에 있다고 본 사례 흐름이 있는 영역으로, 비대면 투자 편취의 죄책과 죄수를 가려 다툴 여지가 있습니다. 수익보장 + 원금 입금 + 추가 입금·잠적 결합은 ‘수익보장 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 투자·입금 정리 ② 기망·수익보장 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공동투자 수익보장 원금 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·기망·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·입금 정리</strong> — 투자 권유·수익·원금보장 약속·입금·소액 정산 내역 정리.</li>\n<li><strong>② 기망·수익보장</strong> — 운용·수익을 낼 의사·능력 없이 수익보장으로 투자금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 원금·추가 입금 등 교부 금원 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·집단 대응</strong> — 계좌 지급정지·동일 투자처 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 운용·수익을 낼 의사·능력 없이 수익보장을 내세워 투자금만 받아 돌려막았는지가 사기 판단의 분기점입니다. 수익보장 약속과 소액 정산·추가 입금 유도 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·입금 자료 보존 (즉시)</strong> — 투자 권유·수익보장 약속·입금·소액 정산·출금 거부 대화 캡처 보존.</li>\n<li><strong>2단계 — 수익보장·돌려막기 입증 (즉시)</strong> — 정산 핑계·추가 입금 유도·출금 거부·잠적 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 동일 투자처 피해자 공동 신고·민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동투자 수익보장 원금 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·기망·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유·수익·원금보장 약속 대화 (기망 정황)</strong></li>\n<li><strong>원금·추가 입금·소액 정산 내역 (피해 금액)</strong></li>\n<li><strong>투자 단체방·게시글·수익 인증 캡처</strong></li>\n<li><strong>출금 요청·정산 거부·잠적 대화 기록</strong></li>\n<li><strong>운용 실체·사업자 등록 여부 확인 자료</strong></li>\n<li><strong>동일 투자처 다른 피해자·후기 자료</strong></li>\n<li><strong>권유자·운영자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소액 정산으로 안심시킨 뒤 추가 입금을 유도한 흐름을 시간순으로 정리하면 처음부터 돌려막기 구조였는지 기망 정황이 선명해집니다. 출금 거부 시점이 회수의 분기점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·수익보장</strong> — 운용·수익 능력 없이 수익보장을 내세웠는지.</li>\n<li><strong>편취 범의</strong> — 단순 투자 손실인지 처음부터 편취였는지.</li>\n<li><strong>돌려막기</strong> — 뒷사람 돈으로 앞사람 수익을 준 구조인지.</li>\n<li><strong>편취액</strong> — 원금·추가 입금 전부가 피해액인지.</li>\n<li><strong>운영자 특정</strong> — 권유자·운영자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자사기 피해상담)</strong></li>\n<li><strong>한국소비자원 1372 (거래·환급 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기와 사기죄의 죄수',
        summary:
          '대법원 2025도6811(대법원, 2025.08.14 선고) 영역에서 법원은 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법상 전기통신금융사기죄 규정이 형법상 사기죄 규정에 대해 특별법의 관계에 있지 않고, 1개의 행위가 전기통신금융사기죄와 사기죄의 각 구성요건을 충족하는 경우 두 죄는 상상적 경합관계에 있다고 판시했습니다. 비대면으로 수익보장을 내세워 투자금을 편취한 사안을 살펴볼 때에도 적용 법조와 죄수를 검토해볼 수 있습니다.',
        takeaway: '수익보장 + 원금 입금 + 추가 입금·잠적 결합 시 수익보장 편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 투자 손실 아닌가요?',
        answer:
          '<strong>운용·수익 능력 없이 수익보장으로 투자금만 받아 돌려막았는지가 핵심인 영역입니다.</strong> 수익보장 약속과 정산·입금 흐름을 확보하세요.',
      },
      {
        question: '처음엔 수익을 줬는데도 사기인가요?',
        answer:
          '<strong>소액 정산으로 안심시킨 뒤 더 받는 수법도 다툼점인 영역입니다.</strong> 정산·추가 입금 유도 흐름을 정리하세요.',
      },
      {
        question: '원금·추가 입금 전부가 피해인가요?',
        answer:
          '<strong>교부한 원금·추가 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '같은 투자처 피해자가 많아요.',
        answer:
          '<strong>동일 투자처 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 입금·약속 자료를 모으세요.',
      },
      {
        question: '운영자가 출금을 막고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 출금 거부·잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 원금보장 차용 무고 방어', href: '/guide/fraud/fraud-acquaintance-principal-guarantee-falsely-accused-defense' },
      { label: '로맨스스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 5. fraud-presale-right-double-sale-track ───
  {
    domain: 'fraud',
    slug: 'fraud-presale-right-double-sale-track',
    keyword: '분양권 전매 이중매매 사기',
    questionKeyword: '아파트·오피스텔 분양권을 ‘프리미엄 붙은 좋은 물건이다, 명의변경·전매가 가능하다’는 말을 믿고 매수하기로 하고 계약금·프리미엄을 입금했는데, 알고 보니 같은 분양권을 여러 명에게 이중으로 팔았거나 이미 다른 사람에게 넘어간 물건이었고 매도인은 연락이 끊겼어요. 처음부터 넘겨줄 의사·권리 없이 계약금만 받아 챙긴 것 같은데, 이런 분양권 이중매매를 사기로 신고하고 낸 돈을 돌려받을 수 있나요?',
    ctaKeyword: '분양권 전매 이중매매 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '분양권 전매 이중매매 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '분양권 전매에 계약금·프리미엄을 냈는데 이중매매·무권리로 매도인이 잠적했다면, 형법 제347조 사기의 이중매매 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「아파트·오피스텔·생활형 숙박시설 분양권을 ‘프리미엄이 붙은 좋은 물건이다, 명의변경·전매가 가능하다, 잔금만 치르면 입주권이 그대로 넘어온다’는 말을 믿고, 분양권 매매로 계약금·프리미엄·중도금을 매도인에게 입금한 분의 상황입니다. 그런데 명의변경을 진행하려 하니, 알고 보니 같은 분양권을 비슷한 시기에 여러 명에게 이중으로 팔았거나, 이미 다른 사람에게 넘어가 매도인에게 처분 권리가 없는 물건이었고, 매도인은 ‘곧 정리된다’는 핑계만 반복하다 결국 연락을 끊어, 처음부터 넘겨줄 의사·권리 없이 계약금·프리미엄만 받아 챙길 생각이었던 건 아닌지 의심되고 막막하실 거예요. 큰돈이 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 처분 권리·이전 의사 없이 정상 전매처럼 가장해 계약금·프리미엄을 받았다면 기망행위로 평가될 여지가 있고, 그 대금 교부가 있으면 재산침해가 인정될 수 있습니다. 판례는 사기 공소사실의 피해자가 공소장 기재와 달라도 동일성을 해치지 않고 방어권에 실질적 불이익이 없는 한 진정한 피해자를 가려 사기죄로 처벌해야 한다고 본 사례 흐름이 있는 영역으로, 이중매매로 다수 매수인이 생긴 경우에도 피해자별 편취를 가려 다툴 여지가 있습니다. 이중매매 + 무권리·미이전 + 잠적 결합은 ‘이중매매 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·입금 정리 ② 권리·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 분양권 전매 이중매매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·권리·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·입금 정리</strong> — 분양권 매매계약·프리미엄·명의변경 약속·입금 내역 정리.</li>\n<li><strong>② 권리·기망</strong> — 처분 권리·이전 의사 없이 정상 전매처럼 속였는지 검토.</li>\n<li><strong>③ 편취액</strong> — 계약금·프리미엄·중도금 교부 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 대금·손해배상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 분쟁과 달리, 같은 분양권을 이중으로 팔았거나 처분 권리 없이 정상 전매처럼 속였는지가 사기 판단의 분기점입니다. 분양계약·명의변경 가능 여부와 이중매매·무권리 정황을 함께 확인해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·입금 자료 보존 (즉시)</strong> — 분양권 매매계약·프리미엄·명의변경 약속 대화·입금 내역 보존.</li>\n<li><strong>2단계 — 이중매매·무권리 입증 (즉시)</strong> — 시행사·분양사 명의 확인, 다른 매수인 존재·미이전 정황을 확보.</li>\n<li><strong>3단계 — 반환 요구 (병행)</strong> — 내용증명으로 계약금·프리미엄 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 대금·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">분양권 전매 이중매매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·권리·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양권 매매계약서·프리미엄 합의 (계약 조건)</strong></li>\n<li><strong>명의변경·전매 가능 약속 대화 (기망 정황)</strong></li>\n<li><strong>계약금·프리미엄·중도금 입금 내역 (피해 금액)</strong></li>\n<li><strong>분양계약서·시행사·분양사 명의 확인 자료 (권리)</strong></li>\n<li><strong>다른 매수인 존재·미이전 정황 자료</strong></li>\n<li><strong>정산 핑계·연락 두절 대화 기록</strong></li>\n<li><strong>매도인·중개인·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시행사·분양사에 명의변경 가능 여부와 실제 명의자를 확인하면 처분 권리 없이 판 것인지, 이중매매인지 기망 정황이 선명해집니다. 명의변경 약속과 실제 이전 여부를 대조하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>권리·기망</strong> — 처분 권리·이전 의사가 있었는지.</li>\n<li><strong>이중매매</strong> — 같은 분양권을 여러 명에게 팔았는지.</li>\n<li><strong>피해자 특정</strong> — 다수 매수인 중 본인 피해를 가려낼 수 있는지.</li>\n<li><strong>편취액</strong> — 계약금·프리미엄 전부가 피해액인지.</li>\n<li><strong>매도인 특정</strong> — 매도인·중개인·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (부동산·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 진정한 피해자의 특정과 처벌',
        summary:
          '대법원 2025도6356(대법원, 2025.09.11 선고) 영역에서 법원은 업무상배임으로 취득한 재산상 이익이 있더라도 이득액을 구체적으로 산정할 수 없으면 특정경제범죄법 제3조를 적용할 수 없고, 본인에게 재산상 손해를 가한다는 것은 전체적 재산가치의 감소를 의미하며 이는 행위자나 제3자가 취득하는 재산상 이익에도 동일하게 적용된다고 판시했습니다. 이중매매로 계약금·프리미엄을 편취한 사안의 피해액과 이득액을 살펴볼 때에도 손해·이익의 산정을 검토해볼 수 있습니다.',
        takeaway: '이중매매 + 무권리·미이전 + 잠적 결합 시 이중매매 편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 거래 분쟁 아닌가요?',
        answer:
          '<strong>처분 권리·이전 의사 없이 정상 전매처럼 속였는지가 핵심인 영역입니다.</strong> 명의변경 약속과 권리 실체를 확인하세요.',
      },
      {
        question: '이중매매인지 어떻게 확인하나요?',
        answer:
          '<strong>시행사·분양사 명의 확인이 출발점인 영역입니다.</strong> 실제 명의자·다른 매수인 정황을 확보하세요.',
      },
      {
        question: '명의변경이 안 되는데 사기인가요?',
        answer:
          '<strong>처분 권리 없이 전매 가능하다 속였는지 다툼점인 영역입니다.</strong> 명의변경 약속 대화와 미이전 정황을 정리하세요.',
      },
      {
        question: '계약금·프리미엄 전부가 피해인가요?',
        answer:
          '<strong>교부한 계약금·프리미엄·중도금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '매도인이 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '지인 원금보장 차용 무고 방어', href: '/guide/fraud/fraud-acquaintance-principal-guarantee-falsely-accused-defense' },
    ],
  },

  // ─── 6. fraud-business-settlement-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-settlement-falsely-accused-defense',
    keyword: '동업자금 정산 사기 고소 무고',
    questionKeyword: '동업으로 함께 사업을 운영하다 손익·정산을 두고 상대와 다툼이 생겼는데, 상대가 ‘처음부터 자금을 가로챌 생각으로 속였다’며 저를 사기로 고소했어요. 저는 실제로 사업에 자금을 투입하고 운영했으며 정산은 회계·기여도에 대한 견해차일 뿐 편취할 의도가 없었는데, 정산 다툼이 형사 사기 사건이 돼 막막합니다. 이런 사실과 다른 사기 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '동업자금 정산 사기 무고 편취 고의·민사다툼 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업자금 정산 사기 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '동업 정산 다툼을 사기로 고소당했다면, 형법 제347조 편취 고의와 민사상 정산 분쟁의 구분을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「동업·공동사업으로 자금을 모아 함께 가게·사업체를 운영하다가, 매출·비용·손익 정산과 기여도·지분을 두고 상대와 견해차·분쟁이 생겼는데, 상대가 ‘처음부터 자금을 빼돌릴 생각으로 속여 동업금을 받았다’며 본인을 사기로 고소·고발해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 실제로 동업 자금을 사업에 투입하고 운영에 참여했으며, 정산이 어긋난 것은 회계 처리·기여도·비용 인정 범위에 대한 민사상 견해차일 뿐 처음부터 편취할 의도가 없었다고 기억하는데, 정산 다툼이 형사 사기 사건으로 번져 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 함께 일군 사업이 분쟁이 되고 형사 전과 위험까지 더해져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 동업금을 받을 당시 편취의 고의가 있었는지, 정산 다툼이 형사 편취가 아니라 민사상 정산·손익 분쟁에 그치는지가 핵심 쟁점입니다. 판례는 업무상배임죄에서 불법이득의 의사는 검사가 합리적 의심 없는 정도의 증명력을 가진 엄격한 증거로 입증해야 하고, 그러한 증거가 없으면 유죄의 의심이 있더라도 피고인의 이익으로 판단해야 한다고 본 사례 흐름이 있는 영역으로, 편취·불법이득 고의의 증명 부담을 들어 다툴 수 있습니다. 동업 운영 + 정산 견해차 + 편취 고의 부재 결합은 ‘편취 고의·민사다툼’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 동업·자금 정리 ② 편취 고의 ③ 정산 다툼 성격 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업자금 정산 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동업·편취 고의·정산 성격·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동업·자금 정리</strong> — 동업 합의·출자·자금 투입·운영 참여 내역 정리.</li>\n<li><strong>② 편취 고의</strong> — 동업금을 받을 당시 편취의 고의가 있었는지 검토.</li>\n<li><strong>③ 정산 다툼 성격</strong> — 회계·기여도 견해차인 민사 분쟁에 그치는지 검토.</li>\n<li><strong>④ 정황·증거</strong> — 자금 사용 내역·운영 기록·정산 자료로 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정산이 어긋났다는 것만으로 곧 사기가 되는 것이 아니라, 동업금을 받을 당시 편취 고의가 있었는지와 다툼이 민사상 정산 분쟁에 그치는지가 분기점입니다. 자금 투입·운영 참여·정산 자료로 고의 부재와 민사적 성격을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동업·자금 정리 (즉시)</strong> — 동업 합의·출자·자금 투입·운영 참여 경위를 정리.</li>\n<li><strong>2단계 — 자금 사용·정황 확보 (1주)</strong> — 자금이 사업에 쓰인 내역·매출·비용·운영 기록을 확보.</li>\n<li><strong>3단계 — 정산 다툼 정리 (2주)</strong> — 회계·기여도 견해차와 민사적 정산 쟁점을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업자금 정산 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 동업·편취 고의·정산 성격 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 합의서·출자·지분 약정 자료 (관계)</strong></li>\n<li><strong>자금 투입·사업 사용 내역 (고의 부재 정황)</strong></li>\n<li><strong>매출·비용·운영 참여 기록 (실제 운영)</strong></li>\n<li><strong>정산·회계·기여도 견해차 자료 (민사 성격)</strong></li>\n<li><strong>상대와의 대화·정산 요구·분쟁 경위 기록</strong></li>\n<li><strong>상대 주장 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘동업금을 받을 당시 편취 고의가 있었는지’와 ‘다툼이 민사상 정산 분쟁에 그치는지’입니다. 자금이 실제 사업에 쓰인 내역과 운영 참여 기록을 정돈해 편취 의도가 없었음을 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 동업금을 받을 당시 편취의 고의가 있었는지.</li>\n<li><strong>민사·형사 구분</strong> — 정산 다툼이 민사 분쟁에 그치는지.</li>\n<li><strong>자금 사용</strong> — 동업금이 실제 사업에 투입됐는지.</li>\n<li><strong>증명 책임</strong> — 편취·불법이득 고의가 엄격히 증명됐는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범의의 엄격하고 신중한 판단',
        summary:
          '대법원 2025도8824(대법원, 2025.09.25 선고) 영역에서 법원은 재산국외도피죄에서 어떤 행위가 도피에 해당하는지는 행위자가 처한 경제적 사정, 행위로 추구한 경제적 이익, 행위에 이르게 된 동기, 방법·수단이 은밀·탈법적인지, 이후 행위자가 취한 조치 등 여러 사정을 두루 참작해 엄격하고 신중하게 판단해야 하고, 도피 고의가 있었다고 볼 수 없는 경우에는 죄가 성립하지 않는다고 판시했습니다. 동업 정산 다툼을 사기로 다투는 사안에서 편취 고의 유무를 동기·경위·이후 조치까지 종합해 살펴볼 때에도 이러한 엄격·신중 판단 기준을 검토해볼 수 있습니다.',
        takeaway: '동업 운영 + 정산 견해차 + 편취 고의 부재 결합 시 편취 고의·민사다툼 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '정산 다툼인데 사기로 고소당했어요.',
        answer:
          '<strong>편취 고의 유무와 민사·형사 구분이 핵심인 영역입니다.</strong> 자금 투입·운영 참여·정산 경위를 정리하세요.',
      },
      {
        question: '자금을 실제 사업에 썼는데도 불리한가요?',
        answer:
          '<strong>자금이 사업에 투입된 내역은 고의 부재를 뒷받침하는 영역입니다.</strong> 자금 사용·운영 기록을 확보하세요.',
      },
      {
        question: '회계·기여도 견해차일 뿐인데요.',
        answer:
          '<strong>견해차에 그치는 민사 정산 분쟁인지가 다툼점인 영역입니다.</strong> 정산·회계 자료와 분쟁 경위를 정리하세요.',
      },
      {
        question: '상대 진술만으로 처벌되나요?',
        answer:
          '<strong>편취·불법이득 고의는 엄격히 증명되어야 하는 영역입니다.</strong> 상대 주장 모순과 객관 정황 불부합을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>동업·자금에 관한 진술의 일관성이 중요한 영역입니다.</strong> 경위·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 원금보장 차용 무고 방어', href: '/guide/fraud/fraud-acquaintance-principal-guarantee-falsely-accused-defense' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 7. sex-crime-pc-room-adjacent-seat-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-pc-room-adjacent-seat-track',
    keyword: 'PC방 옆자리 강제추행',
    questionKeyword: 'PC방·스터디카페·만화카페에서 게임·공부를 하던 중 옆자리에 앉은 낯선 사람이 칸막이 너머로 손을 뻗어 제 다리·허리·몸을 만지거나 가까이 붙어 신체를 접촉해 큰 수치심을 느꼈어요. 어둡고 칸막이로 나뉜 공간이라 그 자리에서 제대로 항의도 못 했고 우연인지 일부러인지 헷갈렸는데, 이런 PC방 옆자리에서의 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: 'PC방 옆자리 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'PC방 옆자리 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        'PC방·스터디카페 옆자리 낯선 사람이 칸막이 너머로 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성 일탈을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「PC방·스터디카페·만화카페·룸형 공간에서 게임이나 공부에 집중하던 중, 옆자리에 앉은 낯선 사람이 칸막이 너머로 손을 뻗거나 의자를 붙여 본인의 다리·허벅지·허리·몸을 만지거나, 필요 이상으로 가까이 붙어 신체를 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 조명이 어둡고 칸막이로 좌석이 나뉘어 있어 ‘부딪힌 우연인지, 일부러 만진 건지’ 헷갈리고, 단둘이 가까이 있다는 위축감과 주변 시선 때문에 그 자리에서 곧바로 항의하거나 붙잡지 못한 채 자리를 옮기거나 나와, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 편하게 쉬거나 공부하러 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 판단하고, 공동체 내 의례적·사회적으로 상당한 신체접촉은 추행으로 보지 않으나, 그 상당한 범주를 다소 벗어나 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르면 강제추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 좁은 좌석 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합은 ‘추행 해당성·상당성 일탈’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PC방 옆자리 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 업소·일시·좌석·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 우연한 접촉 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 매장·통로 CCTV, 좌석 배정·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·좌석·이용 기록·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좌석이 붙어 있어도 우연한 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 매장 CCTV와 좌석·이용 기록을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 업소·일시·좌석·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV·이용 기록 확보 (즉시)</strong> — 매장·통로 CCTV, 좌석 배정·결제·이용 기록 보존을 요청.</li>\n<li><strong>3단계 — 업소·직원 협조 (직후)</strong> — 업주·관리자에게 영상·이용 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PC방 옆자리 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·일시·좌석·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·좌석·이탈 정황 기록</strong></li>\n<li><strong>매장·통로 CCTV 보존 요청 자료</strong></li>\n<li><strong>좌석 배정·결제·이용 기록 (특정)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>주변 이용자·직원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매장 CCTV는 보존 기간이 짧으므로 업주·관리자에게 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 좌석·이용 기록을 남기면 우연한 부딪힘과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>상당성 일탈</strong> — 우연한 접촉의 상당 범위를 벗어났는지.</li>\n<li><strong>우연·고의</strong> — 부딪혀 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·좌석·이용 기록으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당성 일탈 판단',
        summary:
          '대법원 2022도10688(대법원, 2024.11.28 선고) 영역에서 법원은 성적 수치심이나 혐오감을 일으키는 것은 단순한 부끄러움·불쾌감을 넘어 인격적 존재로서의 수치심·모욕감을 느끼게 하는 것으로서 사회 평균인의 성적 도의관념에 반하는 것을 의미하고, 그 해당 여부는 행위자의 주관적 동기가 아니라 피해자와 같은 성별·연령대의 일반적·평균적 사람을 기준으로 행위 전체의 내용을 관찰해 건전한 사회통념에 따라 객관적·규범적으로 판단해야 한다고 판시했습니다. 좁은 좌석에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성·상당성 일탈 기준을 검토해볼 수 있습니다.',
        takeaway: '좁은 좌석 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합 시 추행 해당성·상당성 일탈 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '좌석이 붙어 있어 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>우연한 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '어둡고 칸막이가 있어 항의를 못 했어요.',
        answer:
          '<strong>어두운 칸막이 공간 속 위축은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '칸막이 너머로 손을 뻗어 만진 것도 추행인가요?',
        answer:
          '<strong>의례적·상당한 범위를 넘은 의사에 반한 접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 양상과 반복을 기록하세요.',
      },
      {
        question: '낯선 사람인데 특정할 수 있나요?',
        answer:
          '<strong>매장 CCTV와 좌석·이용 기록으로 특정할 여지가 있는 영역입니다.</strong> 시간대·좌석·인상착의를 즉시 기록하세요.',
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
      { label: 'KTX 옆좌석 추행 추적', href: '/guide/sex-crime/sex-crime-ktx-adjacent-seat-track' },
      { label: '클럽 댄스플로어 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '엘리베이터 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-track' },
      { label: '회식 술자리 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-falsely-accused-defense' },
    ],
  },

  // ─── 8. sex-crime-water-park-pool-crowd-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-water-park-pool-crowd-track',
    keyword: '워터파크 수영장 혼잡 강제추행',
    questionKeyword: '워터파크·수영장·물놀이장에서 파도풀·유수풀·슬라이드 대기 줄처럼 사람이 빽빽한 곳에 있던 중, 옆·뒤에 있던 사람이 물속에서 제 몸을 만지거나 밀착해 큰 수치심을 느꼈어요. 물속이라 누가 했는지 보이지 않고 사람이 많아 우연인지 일부러인지 헷갈렸으며 수영복 차림이라 더 위축됐는데, 이런 워터파크 혼잡 속 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '워터파크 수영장 혼잡 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '워터파크 수영장 혼잡 강제추행 — 5단계 추행 점검 | 로앤가이드',
      description:
        '워터파크·수영장 혼잡 속에서 물속으로 몸을 만지거나 밀착해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성 일탈을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「워터파크·실내외 수영장·물놀이장의 파도풀·유수풀·슬라이드 대기 줄처럼 사람이 빽빽하게 몰린 곳에서 물놀이를 하던 중, 옆이나 뒤에 있던 사람이 물속에서 본인의 허리·엉덩이·가슴·허벅지에 손을 대거나 몸을 밀착해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 물속이라 손이 보이지 않고 사람이 워낙 많아 ‘파도·물살에 떠밀려 닿은 건지, 일부러 만진 건지’ 헷갈리고, 수영복 차림이라는 위축감과 누가 했는지 곧바로 특정하기 어렵다는 당혹감 때문에 그 자리에서 제대로 항의하거나 붙잡지 못한 채 자리를 피해, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 즐기러 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 다중이 밀집한 장소에서의 추행은 성폭력처벌법으로도 규율되는 영역입니다. 판례는 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 판단하고, 의례적·상당한 신체접촉의 범주를 다소 벗어나 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르면 강제추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 혼잡 물속 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합은 ‘추행 해당성·상당성 일탈’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 워터파크 수영장 혼잡 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 시설·일시·구역·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 물살에 떠밀린 우연을 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 풀·입구·통로 CCTV, 입장·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·입장 기록·일행·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사람이 붐비고 물속이라도 우연을 넘어 의사에 반한 만짐·밀착이 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 시설 CCTV와 입장·이용 기록을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 시설·일시·구역·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV·이용 기록 확보 (즉시)</strong> — 풀·입구·통로 CCTV, 입장·결제·라커 이용 기록 보존을 요청.</li>\n<li><strong>3단계 — 시설·안전요원 협조 (직후)</strong> — 안전요원·관리자에게 영상·이용 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">워터파크 수영장 혼잡 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>시설·일시·구역·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·동선·이탈 정황 기록</strong></li>\n<li><strong>풀·입구·통로 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장·결제·라커 이용 기록 (특정)</strong></li>\n<li><strong>직후 호소·일행·지인 연락 기록</strong></li>\n<li><strong>주변 이용자·안전요원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 풀 주변·입구 CCTV는 보존 기간이 짧으므로 안전요원·관리자에게 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 입장 기록을 남기면 물살에 떠밀린 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>상당성 일탈</strong> — 물살에 떠밀린 우연의 상당 범위를 벗어났는지.</li>\n<li><strong>우연·고의</strong> — 떠밀려 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·입장 기록·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다중 밀집 장소 추행의 판단 기준',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 등 성적 촬영·추행 관련 규정의 문언과 입법 취지·보호법익·규율 체계를 종합해 그 적용 범위를 신중히 해석하고, 의사에 반한 신체에 대한 침해가 보호법익을 침해하는 정도에 이르는지를 객관적·규범적으로 판단해야 한다고 판시했습니다. 혼잡한 물속에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성·상당성 일탈 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡 물속 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합 시 추행 해당성·상당성 일탈 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '물살에 떠밀려 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>우연의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '물속이라 누가 했는지 못 봤어요.',
        answer:
          '<strong>풀 주변·입구 CCTV와 입장 기록으로 특정할 여지가 있는 영역입니다.</strong> 시간대·구역·인상착의를 즉시 기록하세요.',
      },
      {
        question: '뒤에서 밀착한 것도 추행인가요?',
        answer:
          '<strong>의사에 반한 밀착·접촉이 성적 자유를 침해하면 추행으로 평가될 수 있는 영역입니다.</strong> 밀착 양상과 반복을 기록하세요.',
      },
      {
        question: '사람이 너무 많아 특정이 어려워요.',
        answer:
          '<strong>CCTV·일행·목격자 진술로 보강할 수 있는 영역입니다.</strong> 직후 호소와 동선을 정리하세요.',
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
      { label: '찜질방 사우나 추행 추적', href: '/guide/sex-crime/sex-crime-jjimjilbang-sauna-track' },
      { label: '클럽 댄스플로어 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '마사지샵 업주 추행 추적', href: '/guide/sex-crime/sex-crime-massage-shop-owner-track' },
      { label: '데이팅앱 만남 추행 무고 방어', href: '/guide/sex-crime/sex-crime-dating-app-meetup-falsely-accused-defense' },
    ],
  },

  // ─── 9. sex-crime-livestream-chat-obscene-message-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-livestream-chat-obscene-message-track',
    keyword: '인터넷 방송 채팅 통신매체이용음란',
    questionKeyword: '인터넷 라이브 방송·스트리밍 채팅에서 시청자·상대방이 제게 성적 수치심을 일으키는 음란한 말·메시지를 반복해서 보내 큰 모욕감과 수치심을 느꼈어요. 단순 욕설이 아니라 성적으로 비하·조롱하는 내용이었고 차단해도 다른 계정으로 또 보냈는데, 이런 인터넷 방송 채팅의 성적 메시지를 통신매체이용음란으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '인터넷 방송 채팅 통신매체이용음란 목적 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '인터넷 방송 채팅 통신매체이용음란 — 5단계 점검 | 로앤가이드',
      description:
        '인터넷 방송 채팅에서 성적 메시지를 반복해 받아 수치심을 느꼈다면, 성폭력처벌법 제13조 통신매체이용음란의 성적 욕망 목적·도달을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「인터넷 라이브 방송·스트리밍·게임 방송의 실시간 채팅이나 DM에서, 시청자나 상대방이 본인에게 성적 수치심·혐오감을 일으키는 음란한 말·메시지를 반복해서 보내 큰 모욕감과 수치심을 느낀 분의 상황입니다. 단순한 비난·욕설을 넘어 신체를 성적으로 묘사하거나 성행위를 연상시키며 비하·조롱하는 내용이었고, 차단을 해도 다른 계정·닉네임으로 다시 찾아와 같은 메시지를 보내, 불특정 다수가 보는 공개된 자리라는 점에서 더 위축되고 어떻게 대응해야 할지 막막하셨을 거예요. 방송·소통을 즐기던 공간에서 겪은 일이라 더 답답하셨을 거예요.」 성폭력처벌법 제13조는 자기 또는 다른 사람의 성적 욕망을 유발하거나 만족시킬 목적으로 컴퓨터·통신매체를 통하여 성적 수치심·혐오감을 일으키는 말·글·영상 등을 상대방에게 도달하게 한 사람을 통신매체이용음란죄로 처벌하는 영역입니다. 채팅·메시지가 인격적 존재로서의 수치심·모욕감을 느끼게 하고 성적 욕망 목적이 인정되면 처벌 대상이 될 수 있습니다. 판례는 ‘성적 욕망’에는 성행위·성관계를 전제로 한 욕망뿐 아니라 상대방을 성적으로 비하·조롱해 수치심을 줌으로써 심리적 만족을 얻으려는 욕망도 포함되고, 그 목적이 분노감과 결합돼 있어도 달리 볼 것은 아니며 미필적 인식으로 충분하다고 본 사례 흐름이 있는 영역입니다. 성적 메시지 + 수치심 도달 + 성적 욕망 목적 결합은 ‘통신매체이용음란 목적’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 음란·목적 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 인터넷 방송 채팅 통신매체이용음란 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·음란·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 방송·채팅·DM 일시·내용·반복·차단 회피 정리.</li>\n<li><strong>② 음란·목적</strong> — 성적 수치심을 일으키는 말이 성적 욕망 목적으로 도달했는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 채팅·DM 캡처·방송 다시보기·로그 보존.</li>\n<li><strong>④ 가해자 특정</strong> — 계정·닉네임·IP·플랫폼 협조로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·사이버범죄 신고·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 욕설과 달리, 성적으로 비하·조롱해 수치심을 주는 말을 성적 욕망 목적으로 도달하게 했는지가 분기점입니다. 채팅·DM 원문과 반복·차단 회피 정황을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 방송·채팅·DM 일시·내용·반복·차단 회피·계정 정리.</li>\n<li><strong>2단계 — 증거 보전 (즉시)</strong> — 채팅·DM 캡처, 방송 다시보기·녹화, 플랫폼 로그 보존을 확보.</li>\n<li><strong>3단계 — 플랫폼 협조 (직후)</strong> — 방송 플랫폼에 신고·로그·계정 정보 보존을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112·사이버범죄 신고 ECRM에 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">인터넷 방송 채팅 통신매체이용음란 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·음란·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>채팅·DM 원문 캡처 (날짜·시간 포함)</strong></li>\n<li><strong>방송 다시보기·녹화·로그 자료</strong></li>\n<li><strong>반복·차단 회피·다른 계정 사용 정황 기록</strong></li>\n<li><strong>가해자 계정·닉네임·프로필 정보 (특정)</strong></li>\n<li><strong>플랫폼 신고 접수·로그 보존 요청 자료</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 메시지는 삭제·계정 변경으로 사라질 수 있으므로 원문을 날짜·시간이 보이게 곧바로 캡처·저장하는 것이 중요합니다. 반복·차단 회피 정황을 함께 남기면 성적 욕망 목적을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>음란성</strong> — 단순 욕설을 넘어 성적 수치심을 일으키는 내용인지.</li>\n<li><strong>성적 욕망 목적</strong> — 성적으로 비하·조롱해 만족을 얻으려는 목적인지.</li>\n<li><strong>도달</strong> — 메시지가 상대방에게 도달했는지.</li>\n<li><strong>가해자 특정</strong> — 계정·닉네임·로그로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 캡처·로그·다시보기로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신매체이용음란죄의 성적 욕망 목적',
        summary:
          '대법원 2023도7199(대법원, 2024.11.28 선고) 영역에서 법원은 통신매체이용음란죄가 성적 자기결정권에 반하여 성적 수치심을 일으키는 글 등을 의사에 반해 접하지 않을 권리를 보장하기 위한 것으로, ‘성적 욕망을 유발·만족시킬 목적’이 있는지는 행위자와 상대방의 관계, 행위의 동기·경위·수단·방법·내용·태양 등 여러 사정을 종합해 사회통념에 비추어 합리적으로 판단해야 한다고 판시했습니다. 인터넷 방송 채팅으로 성적 메시지를 반복 도달한 사안을 살펴볼 때에도 이러한 음란성·성적 욕망 목적 기준을 검토해볼 수 있습니다.',
        takeaway: '성적 메시지 + 수치심 도달 + 성적 욕망 목적 결합 시 통신매체이용음란 목적 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 욕설·악플 아닌가요?',
        answer:
          '<strong>성적으로 비하·조롱해 수치심을 주는 내용인지가 핵심인 영역입니다.</strong> 채팅·DM 원문을 그대로 보존하세요.',
      },
      {
        question: '화풀이로 보낸 거라고 하면 어쩌죠?',
        answer:
          '<strong>성적 욕망 목적이 분노감과 결합돼 있어도 인정될 수 있는 영역입니다.</strong> 메시지 내용과 맥락을 정리하세요.',
      },
      {
        question: '차단해도 다른 계정으로 또 보냈어요.',
        answer:
          '<strong>반복·차단 회피 정황은 목적 다툼에 도움이 되는 영역입니다.</strong> 계정·시간대별 반복 기록을 남기세요.',
      },
      {
        question: '익명 계정인데 특정이 되나요?',
        answer:
          '<strong>플랫폼 로그·IP·계정 정보로 특정할 여지가 있는 영역입니다.</strong> 플랫폼에 로그 보존을 신속히 요청하세요.',
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
      { label: '클럽 댄스플로어 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '마사지샵 업주 추행 추적', href: '/guide/sex-crime/sex-crime-massage-shop-owner-track' },
      { label: '엘리베이터 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-track' },
      { label: '데이팅앱 만남 추행 무고 방어', href: '/guide/sex-crime/sex-crime-dating-app-meetup-falsely-accused-defense' },
    ],
  },

  // ─── 10. sex-crime-afterwork-drink-contact-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-afterwork-drink-contact-falsely-accused-defense',
    keyword: '회식 후 술자리 강제추행 무고',
    questionKeyword: '회식 후 2차·3차 술자리에서 동료·지인과 분위기 속에 어깨동무·악수·부축 같은 접촉이 오갔는데, 며칠 뒤 상대가 저를 강제추행으로 고소·신고했어요. 저는 추행할 의도가 전혀 없었고 술에 취한 상황에서 일행끼리 흔히 있는 접촉이었다고 기억하는데, 직접 증거 없이 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '회식 후 술자리 강제추행 무고 추행 고의·진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '회식 술자리 강제추행 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '회식 후 술자리 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 고의와 무죄추정·진술 신빙성 판단을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식이 끝난 뒤 2차·3차로 이어진 술자리에서 동료·지인과 어울리며, 어깨동무·악수·부축·건배처럼 술자리 분위기 속에서 흔히 오가는 신체 접촉이 있었는데, 며칠 뒤 그 상대가 ‘강제로 추행을 당했다’며 고소·신고해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고, 다 같이 술에 취해 있었으며 일행끼리 흔히 있는 접촉이었다고 기억하는데, 다른 사람들도 취해 있어 정확한 정황을 기억하지 못하고 수사가 상대 진술 위주로 흘러 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 직장·인간관계와 신상까지 흔들려 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉에 추행의 고의가 있었는지, 그리고 피해 진술의 신빙성이 합리적 의심 없이 인정되는지가 핵심 쟁점입니다. 판례는 추행의 고의를 부인하는 경우 고의와 상당한 관련성 있는 간접사실을 종합해 판단하되 고의로 추행했다고 볼 징표와 어긋나는 의문점이 해소되어야 하고, 형사피고인은 유죄가 확정될 때까지 무죄로 추정되며 범죄사실 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 술자리 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 고의·무죄추정’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 고의 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회식 후 술자리 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 고의·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식·자리 이동·동석자·접촉 경위·대화 흐름 정리.</li>\n<li><strong>② 추행 고의</strong> — 문제 된 접촉에 추행의 고의가 있었는지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술의 일관성·구체성·객관 사실 부합 여부 검토.</li>\n<li><strong>④ 정황·증거</strong> — 매장 CCTV·동석자 진술·결제·이동 동선으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 원칙 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉에 추행의 고의가 있었는지와 피해 진술이 합리적 의심 없이 신빙성을 갖는지가 분기점입니다. CCTV·동석자 진술·동선으로 고의와 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 정리 (즉시)</strong> — 회식·자리 이동·동석자·접촉 경위와 대화 흐름을 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 매장·이동 CCTV, 동석자 진술, 결제·동선 기록을 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 상대 진술과 객관 정황·동석자 진술의 불부합·모순을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 후 술자리 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 고의·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식·자리 이동·동석자·접촉 경위 메모</strong></li>\n<li><strong>매장·주점·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술·연락처 (정황)</strong></li>\n<li><strong>결제·예약·콜택시·일정 객관 자료 (동선 특정)</strong></li>\n<li><strong>이후 메시지·연락·SNS 기록</strong></li>\n<li><strong>상대 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉에 추행의 고의가 있었는지’와 ‘피해 진술이 합리적 의심 없이 신빙성을 갖는지’입니다. CCTV·동석자 진술·동선 같은 객관 정황을 정돈해 고의 유무와 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 문제 된 접촉에 추행의 고의가 있었는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심을 배제할 정도의 증명이 있는지.</li>\n<li><strong>음주·정황</strong> — 음주 속 일행 간 접촉의 의미·맥락이 어떠한지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양형조건 아닌 별도 범죄사실의 신중한 인정',
        summary:
          '대법원 2024도20879(대법원, 2025.03.13 선고) 영역에서 법원은 사실심 법원이 형법 제51조의 양형조건으로 포섭되지 않는 별도의 범죄사실에 해당하는 사정을 증거 없이 핵심적인 형벌가중적 양형조건으로 삼아 형을 정한 경우 그 부당성을 다투는 피고인의 주장이 적법한 상고이유에 해당한다고 판시했습니다. 술자리 접촉을 추행으로 다투는 사안에서 증거 없는 불리한 사정이 함부로 인정되지 않도록 진술·정황을 신중히 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '술자리 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 고의·무죄추정 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '술자리 일행 간 접촉이었는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 고의와 진술 신빙성이 핵심인 영역입니다.</strong> 회식·이동·접촉 경위와 동석자 정황을 정리하세요.',
      },
      {
        question: '상대 진술만 있는데도 처벌되나요?',
        answer:
          '<strong>진술 신빙성을 종합해 합리적 의심 없는 증명에 이르러야 하는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 정리하세요.',
      },
      {
        question: '다 같이 취해 있어 정황이 불분명해요.',
        answer:
          '<strong>매장 CCTV·동석자 진술·동선 같은 객관 정황으로 보강할 수 있는 영역입니다.</strong> 자리 전후 기록을 확보하세요.',
      },
      {
        question: '어깨동무·부축도 추행이 되나요?',
        answer:
          '<strong>접촉의 의미·맥락과 추행 고의가 다툼점인 영역입니다.</strong> 접촉 경위와 동석자 인식을 정리하세요.',
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
      { label: '회식 술자리 추행 무고 방어', href: '/guide/sex-crime/sex-crime-company-dinner-falsely-accused-defense' },
      { label: '클럽 댄스플로어 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '마사지샵 업주 추행 추적', href: '/guide/sex-crime/sex-crime-massage-shop-owner-track' },
      { label: '엘리베이터 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-track' },
    ],
  },
];
