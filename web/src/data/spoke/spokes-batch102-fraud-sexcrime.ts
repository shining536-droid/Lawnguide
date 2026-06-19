import { SpokePage } from '../spoke-pages';

// batch102 fraud(6) + sex-crime(4) — 10개 (2026-06-19)
//
// 고유 존재 이유:
// 1. fraud-secondhand-camera-lens-direct-no-delivery-track — 일반 중고거래 분쟁과 분기. '중고 카메라 렌즈 직거래 입금 후 미인도' 직거래 미인도 편취 판단형 트랙(victim).
// 2. fraud-concert-ticket-resale-transfer-no-show-track — 일반 티켓 분쟁과 분기. '콘서트 티켓 양도 입금 후 연락두절' 티켓 양도 편취 판단형 트랙(victim).
// 3. fraud-fake-room-listing-keymoney-track — 일반 부동산 분쟁과 분기. '허위 원룸 매물 가계약금 편취' 허위 매물 가계약금 편취 절차형 트랙(victim).
// 4. fraud-crypto-staking-guaranteed-yield-track — 일반 코인 분쟁과 분기. '코인 스테이킹 확정수익 약속 투자' 확정수익 투자 편취 판단형 트랙(victim).
// 5. fraud-prepaid-gym-membership-closure-norefund-track — 일반 환불 분쟁과 분기. '헬스장 장기회원권 선결제 후 폐업 환불거부' 선결제 폐업 편취 절차형 트랙(victim).
// 6. fraud-loan-brokerage-advance-fee-pretext-falsely-accused-defense — 일반 사기 무고류와 분기. '대출 중개 선수수료 명목 사기로 고소당함' 편취 고의·변제능력 방어 판단형 트랙(accused).
// 7. sex-crime-subway-rush-hour-grope-report-track — 일반 추행류와 분기. '지하철 혼잡 출근길 기습 추행을 당함' 출근길 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-noraebang-private-room-forced-track — 일반 추행류와 분기. '노래방 룸에서 강제추행을 당함' 밀폐 공간 강제추행 절차형 트랙(victim).
// 9. sex-crime-swimming-pool-shower-room-track — 일반 추행류와 분기. '수영장 샤워실에서 신체접촉 추행을 당함' 샤워실 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-pub-server-customer-accusation-falsely-accused-defense — 일반 성범죄 무고류와 분기. '호프집 종업원이 손님에게 추행으로 고소' 추행 고의·진술 신빙성 방어 판단형 트랙(accused).

export const spokesBatch102FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-secondhand-camera-lens-direct-no-delivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-camera-lens-direct-no-delivery-track',
    keyword: '중고 카메라 렌즈 직거래 입금 후 미인도 사기',
    questionKeyword: '중고 거래 사이트·카메라 동호회 카페에서 ‘상태 좋은 중고 카메라 바디·렌즈를 시세보다 싸게 직거래로 넘긴다, 멀어서 직접 못 만나니 입금하면 택배로 보내준다’는 말을 믿고 카메라·렌즈 대금을 먼저 입금했는데, 입금 뒤에 ‘송장 번호를 곧 보내준다, 내일 발송한다’는 핑계만 반복하다 결국 물건도 안 오고 연락이 끊겼어요. 알고 보니 같은 제품 사진을 돌려쓰며 여러 명에게 대금을 받았던 것 같은데, 이런 중고 카메라 렌즈 미인도를 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 카메라 렌즈 직거래 미인도 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 카메라 렌즈 직거래 입금 후 미인도 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '중고 카메라·렌즈 대금을 먼저 입금했는데 물건이 안 오고 판매자가 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고 거래 사이트·카메라 동호회 카페·직거래 채팅방에서 ‘관리 잘된 중고 카메라 바디·렌즈를 시세보다 싸게 넘긴다, 거리가 멀어 직접 만나긴 어렵지만 입금하면 안전하게 택배로 보내준다’는 친절한 안내를 믿고, 좋은 매물을 놓칠까 봐 카메라·렌즈 대금을 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘오늘 발송했다, 송장 번호는 곧 보내준다, 택배사 사정으로 하루만 늦는다’는 핑계가 며칠씩 반복되다가, 결국 물건이 도착하지 않고 판매자가 게시글·연락처·계정을 닫고 사라져, 알고 보니 같은 제품 사진을 돌려쓰며 여러 명에게 대금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 오래 모은 돈으로 마음먹고 보낸 거라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 인도할 물건이나 이행 의사 없이 정상 직거래처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 다수의 피해자에게 각각 기망행위를 하여 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 피해자별로 독립한 사기죄가 성립함이 원칙이고, 피해법익이 동일하다고 평가될 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역으로, 같은 사진으로 여러 명에게 대금을 받은 정황을 들어 편취 여부와 죄수를 가려 다툴 여지가 있습니다. 대금 선입금 + 미인도 + 잠적 결합은 ‘직거래 미인도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 카메라 렌즈 직거래 입금 후 미인도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·제품 사진·대금·발송 약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 인도할 물건·이행 의사 없이 대금을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 대금·택배비 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 발송 지연과 달리, 인도할 물건이나 이행 의사 없이 대금만 받았는지가 판단의 분기점입니다. 판매 글·제품 사진·발송 약속과 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 판매 글·제품 사진·발송 약속 대화·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 발송 핑계 반복·동일 사진 재게시·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지와 대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 카메라 렌즈 직거래 미인도 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·제품 사진·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>발송·택배 약속 대화 (기망 정황)</strong></li>\n<li><strong>카메라·렌즈 대금·택배비 입금 내역 (피해 금액)</strong></li>\n<li><strong>발송 핑계 반복·미인도 정황 기록</strong></li>\n<li><strong>동일 사진 재게시·다른 피해자 정황 자료</strong></li>\n<li><strong>판매자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매 글과 제품 사진은 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 같은 사진으로 여러 명에게 대금을 받은 정황을 함께 잡으면 편취 여부와 죄수를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 인도할 물건·이행 의사 없이 대금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 발송 지연인지 처음부터 편취였는지.</li>\n<li><strong>다중 피해·죄수</strong> — 같은 사진으로 여러 명에게 받아 피해자별 죄가 되는지.</li>\n<li><strong>편취액</strong> — 교부한 대금·택배비 전부가 피해액인지.</li>\n<li><strong>판매자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·직거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자에 대한 사기죄의 성립과 죄수',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수의 피해자에게 각각 기망행위를 하여 각 피해자로부터 재물을 편취한 경우 범의가 단일하고 범행방법이 동일하더라도 각 피해자의 피해법익은 독립한 것이어서 피해자별로 독립한 사기죄가 성립함이 원칙이고, 다만 피해법익이 동일하다고 평가될 사정이 있으면 이를 포괄하여 일죄로 볼 수 있다고 판시했습니다. 같은 사진으로 여러 명에게 대금을 받고 물건을 인도하지 않은 사안을 살펴볼 때에도 피해자별 편취 성립과 죄수를 검토해볼 수 있습니다.',
        takeaway: '대금 선입금 + 미인도 + 잠적 결합 시 직거래 미인도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '택배가 늦어 안 온 것뿐 아닌가요?',
        answer:
          '<strong>인도할 물건·이행 의사 없이 대금만 받았는지가 핵심인 영역입니다.</strong> 발송 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '같은 사진을 여러 명에게 쓴 것 같아요.',
        answer:
          '<strong>동일 사진 재게시·다중 피해 정황은 편취·죄수 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '입금만 했는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
      },
      {
        question: '입금한 대금 전부를 피해액으로 볼 수 있나요?',
        answer:
          '<strong>교부한 대금·택배비 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
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
      { label: '중고 카메라 부품 바꿔치기 추적', href: '/guide/fraud/fraud-secondhand-camera-part-swap-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shopping-mall-non-delivery-track' },
      { label: '해외 직구 미수령 추적', href: '/guide/fraud/fraud-overseas-direct-purchase-noshow-track' },
      { label: '중고 에스크로 우회 피해 추적', href: '/guide/fraud/fraud-secondhand-escrow-bypass-victim' },
    ],
  },

  // ─── 2. fraud-concert-ticket-resale-transfer-no-show-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-resale-transfer-no-show-track',
    keyword: '콘서트 티켓 양도 입금 후 연락두절 사기',
    questionKeyword: '콘서트·공연 티켓 양도 카페·SNS에서 ‘좋은 자리 티켓을 양도한다, 입금하면 예매 명의를 넘기거나 티켓을 보내준다’는 글을 믿고 티켓 양도 대금을 먼저 입금했는데, 입금 뒤에 ‘명의 변경이 곧 처리된다, 공연 임박해서 보내준다’는 핑계만 반복하다 결국 티켓도 못 받고 연락이 끊겼어요. 알고 보니 같은 좌석을 여러 명에게 양도한다고 하거나 처음부터 티켓이 없었던 것 같은데, 이런 티켓 양도 편취를 사기로 신고하고 입금한 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '콘서트 티켓 양도 연락두절 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 양도 입금 후 연락두절 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '콘서트 티켓 양도 대금을 먼저 입금했는데 티켓도 못 받고 양도자가 잠적당했다면, 형법 제347조 사기·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「콘서트·공연·뮤지컬 티켓 양도 카페·티켓 거래 채팅방·SNS에서 ‘구하기 힘든 좋은 자리 티켓을 양도한다, 입금하면 예매자 명의를 넘겨주거나 티켓을 안전하게 전달해 준다’는 글을 믿고, 매진된 공연을 놓칠까 봐 티켓 양도 대금을 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘명의 변경 처리가 곧 된다, 공연이 임박하면 입장 정보를 보내준다, 양도 절차가 조금 늦어진다’는 핑계가 반복되다가, 결국 티켓을 받지도 못한 채 양도자가 글·계정·연락처를 닫고 사라져, 알고 보니 같은 좌석을 여러 명에게 양도한다고 하거나 처음부터 양도할 티켓 자체가 없었던 건 아닌지 의심되고 막막하실 거예요. 기다리던 공연을 위해 보낸 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 양도할 티켓이나 이행 의사 없이 정상 양도처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기소된 사기 사건에서 공소장에 적힌 피해자와 실제 재산상 피해자가 다른 것으로 판명되어도 공소사실의 동일성을 해치지 않고 방어권에 실질적 불이익을 주지 않는 한 진정한 피해자를 가려내어 사기죄로 판단해야 한다고 본 사례 흐름이 있는 영역으로, 누구의 어떤 재산이 침해되었는지를 가려 편취 여부를 다툴 여지가 있습니다. 티켓 양도 대금 + 미인도 + 연락두절 결합은 ‘티켓 양도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미인도·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 티켓 양도 입금 후 연락두절 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미인도·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 양도 글·좌석·공연 정보·양도 약속·결제 내역 정리.</li>\n<li><strong>② 미인도·기망</strong> — 양도할 티켓·이행 의사 없이 대금을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 티켓 양도 대금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 명의 변경 지연과 달리, 양도할 티켓이나 이행 의사 없이 대금만 받았는지가 판단의 분기점입니다. 양도 글·좌석 정보·양도 약속과 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 양도 글·좌석·공연 정보·양도 약속 대화·대금 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미인도·잠적 입증 (즉시)</strong> — 양도 핑계 반복·중복 양도 정황·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지와 대금 반환을 신속히 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 티켓 양도 연락두절 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미인도·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>티켓 양도 글·좌석·공연 정보 캡처 (거래 조건)</strong></li>\n<li><strong>명의 변경·전달 약속 대화 (기망 정황)</strong></li>\n<li><strong>티켓 양도 대금 입금 내역 (피해 금액)</strong></li>\n<li><strong>양도 핑계 반복·미인도 정황 기록</strong></li>\n<li><strong>같은 좌석 중복 양도·다른 피해자 정황 자료</strong></li>\n<li><strong>양도자 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 티켓 양도 글과 좌석 정보는 공연이 끝나면 삭제·차단으로 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 같은 좌석을 여러 명에게 양도한 정황을 함께 잡으면 편취 여부를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미인도·기망</strong> — 양도할 티켓·이행 의사 없이 대금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 양도 지연인지 처음부터 편취였는지.</li>\n<li><strong>중복 양도</strong> — 같은 좌석을 여러 명에게 양도했는지.</li>\n<li><strong>피해자·손해</strong> — 누구의 어떤 재산이 침해되어 피해자가 되는지.</li>\n<li><strong>양도자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (티켓·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공소장 기재와 다른 실제 피해자의 확정',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기소된 사기 공소사실의 재산상 피해자와 공소장에 기재된 피해자가 다른 것으로 판명된 경우 공소사실의 동일성을 해하지 않고 피고인의 방어권 행사에 실질적 불이익을 주지 않는 한 공소장변경 없이 진정한 피해자를 가려내어 사기죄로 인정하여야 한다고 판시했습니다. 티켓 양도를 둘러싸고 누구의 재산이 침해되었는지가 문제 되는 사안을 살펴볼 때에도 진정한 피해자와 편취 성립을 검토해볼 수 있습니다.',
        takeaway: '티켓 양도 대금 + 미인도 + 연락두절 결합 시 티켓 양도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '명의 변경이 늦어진 것뿐 아닌가요?',
        answer:
          '<strong>양도할 티켓·이행 의사 없이 대금만 받았는지가 핵심인 영역입니다.</strong> 양도 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '같은 좌석을 여러 명에게 판 것 같아요.',
        answer:
          '<strong>중복 양도 정황은 편취 다툼의 출발점인 영역입니다.</strong> 다른 피해자·게시글 정황을 모으세요.',
      },
      {
        question: '입금만 했는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
      },
      {
        question: '양도 대금 전부를 피해액으로 볼 수 있나요?',
        answer:
          '<strong>교부한 티켓 양도 대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '양도자가 계정을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '콘서트 티켓 양도 미이전 추적', href: '/guide/fraud/fraud-concert-ticket-resale-no-transfer-track' },
      { label: '콘서트 티켓 매크로 결제차단 취소 추적', href: '/guide/fraud/fraud-ticket-bot-resale-payment-block-cancel-track' },
      { label: '콘서트 티켓 암표 허위 매물 추적', href: '/guide/fraud/fraud-concert-ticket-scalping-nonexistent' },
      { label: '상품권 재판매 사기 대응', href: '/guide/fraud/fraud-gift-card-resale-scam-response' },
    ],
  },

  // ─── 3. fraud-fake-room-listing-keymoney-track ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-room-listing-keymoney-track',
    keyword: '허위 원룸 매물 가계약금 편취 사기',
    questionKeyword: '부동산 직거래 앱·원룸 매물 사이트에서 ‘역세권 깨끗한 원룸을 시세보다 싸게 내놓는다, 인기가 많아 가계약금을 먼저 보내야 잡아준다’는 말을 믿고 집을 보지도 못한 채 가계약금을 입금했는데, 입금 뒤에 ‘집주인 사정으로 일정이 미뤄진다, 곧 계약서를 쓰자’는 핑계만 반복하다 결국 집도 못 보고 연락이 끊겼어요. 알고 보니 실제 존재하지 않거나 권한 없는 매물을 올려 여러 명에게 가계약금을 받았던 것 같은데, 이런 허위 원룸 매물 가계약금 편취를 사기로 신고하고 입금한 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '허위 원룸 매물 가계약금 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '허위 원룸 매물 가계약금 편취 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '허위 원룸 매물에 가계약금을 먼저 보냈는데 집도 못 보고 잠적당했다면, 형법 제347조 사기의 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「부동산 직거래 앱·원룸 매물 사이트·SNS 매물 글에서 ‘역세권에 가까운 깨끗한 원룸을 시세보다 싸게 내놓는다, 보러 오겠다는 사람이 많아 가계약금을 먼저 보내야 매물을 잡아줄 수 있다’는 말을 믿고, 좋은 방을 놓칠까 봐 집을 직접 보지도 못한 채 가계약금을 서둘러 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘집주인 사정으로 입주 일정이 미뤄진다, 다음에 보고 계약서를 쓰자, 조금만 기다려 달라’는 핑계가 반복되다가, 결국 집을 보지도 계약서를 쓰지도 못한 채 상대가 글·계정·연락처를 닫고 사라져, 알고 보니 실제 존재하지 않거나 올릴 권한도 없는 매물을 올려 여러 명에게 가계약금만 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 집 구하느라 모은 돈이라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실재하지 않거나 권한 없는 매물을 정상 매물처럼 가장해 가계약금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄에서 거래의 내용이나 거래관행 등 거래실정에 비추어 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되면 그 사정을 고지할 신의칙상 의무가 있고, 다만 그러한 고지의무의 근거가 되는 거래실정에 관한 사실은 검사가 주장·증명해야 한다고 본 사례 흐름이 있는 영역으로, 매물의 실재·권한과 고지 여부를 가려 편취를 다툴 여지가 있습니다. 가계약금 선입금 + 허위 매물 + 잠적 결합은 ‘허위 매물 가계약금 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 허위·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 허위 원룸 매물 가계약금 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·허위·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 매물 글·사진·주소·가계약금 안내·결제 내역 정리.</li>\n<li><strong>② 허위·기망</strong> — 실재하지 않거나 권한 없는 매물로 가계약금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 입금한 가계약금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 계약 무산과 달리, 실재하지 않거나 권한 없는 매물을 정상 매물처럼 가장해 가계약금만 받았는지가 사기 판단의 분기점입니다. 매물 글·사진·주소와 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 매물 글·사진·주소·가계약금 안내 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 허위·잠적 입증 (즉시)</strong> — 매물 미존재·권한 없음·핑계 반복·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">허위 원룸 매물 가계약금 편취 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·허위·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>매물 글·사진·주소·시세 비교 캡처 (거래 조건)</strong></li>\n<li><strong>가계약금 입금 유도 대화 (기망 정황)</strong></li>\n<li><strong>가계약금 입금 내역·영수증 (피해 금액)</strong></li>\n<li><strong>매물 미존재·권한 없음 확인 자료</strong></li>\n<li><strong>일정 핑계 반복·다른 피해자 정황 자료</strong></li>\n<li><strong>상대 계정·닉네임·연락처·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매물 글과 사진·주소는 삭제·차단으로 사라지기 쉬우니 위치·시세·가계약금 안내가 보이게 곧바로 캡처해두는 것이 중요합니다. 송금 직후 지급정지를 요청하면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위·기망</strong> — 실재하지 않거나 권한 없는 매물로 가계약금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 계약 무산인지 처음부터 편취였는지.</li>\n<li><strong>고지의무</strong> — 매물 권한·실재에 관한 고지의무가 있었는지.</li>\n<li><strong>편취액</strong> — 입금한 가계약금 전부가 피해액인지.</li>\n<li><strong>상대 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (부동산·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 고지의무의 증명 책임',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄에서 부작위에 의한 기망이 인정되려면 거래 상대방이 일정한 사정을 고지받았더라면 거래에 임하지 않았을 관계가 인정되어 그 사정을 고지할 신의칙상 의무가 있어야 하고, 그러한 고지의무의 근거가 되는 거래의 내용이나 거래관행 등 거래실정에 관한 사실은 검사가 주장·증명해야 한다고 판시했습니다. 매물의 실재·권한과 관련 사정의 고지 여부가 문제 되는 사안을 살펴볼 때에도 이러한 고지의무·기망 기준을 검토해볼 수 있습니다.',
        takeaway: '가계약금 선입금 + 허위 매물 + 잠적 결합 시 허위 매물 가계약금 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '계약이 무산된 것뿐 아닌가요?',
        answer:
          '<strong>실재하지 않거나 권한 없는 매물로 가계약금만 받았는지가 핵심인 영역입니다.</strong> 매물 글·주소·핑계 정황을 확보하세요.',
      },
      {
        question: '집을 못 본 채 보낸 가계약금도 돌려받나요?',
        answer:
          '<strong>입금한 가계약금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액과 입금 유도 대화를 정리하세요.',
      },
      {
        question: '매물이 가짜였는지 어떻게 확인하나요?',
        answer:
          '<strong>매물 미존재·권한 없음 확인이 편취 다툼의 출발점인 영역입니다.</strong> 주소 실재·권한 확인 자료를 모으세요.',
      },
      {
        question: '입금만 했는데 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 편취 정황을 종합해 판단하는 영역입니다.</strong> 매물·약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
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
      { label: '에어비앤비 허위 매물 보증금 추적', href: '/guide/fraud/fraud-airbnb-fake-listing-deposit-track' },
      { label: '허위 임대 매물 선입금 추적', href: '/guide/fraud/fraud-fake-rental-listing-deposit-upfront-track' },
      { label: '임대 허위 매물 대응', href: '/guide/fraud/fraud-rental-fake-listing-response' },
      { label: '경매 가장 입찰 바람잡이 추적', href: '/guide/fraud/fraud-auction-shill-bidding-fake-bidder-track' },
    ],
  },

  // ─── 4. fraud-crypto-staking-guaranteed-yield-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-staking-guaranteed-yield-track',
    keyword: '코인 스테이킹 확정수익 약속 투자 사기',
    questionKeyword: '코인 투자 리딩방·SNS·지인 소개로 ‘우리 플랫폼에 코인을 스테이킹하면 매달 확정 수익을 보장한다, 원금도 언제든 출금할 수 있다’는 말을 믿고 코인·돈을 맡겼는데, 처음엔 수익이 들어오는 듯하다가 어느 순간 ‘점검 중이다, 출금이 지연된다’며 원금·수익 출금을 막더니 결국 운영자와 연락이 끊겼어요. 알고 보니 실제 운용 없이 뒷사람 자금으로 앞사람에게 수익을 주는 구조였거나 처음부터 돌려줄 의사가 없었던 것 같은데, 이런 코인 스테이킹 확정수익 투자 편취를 사기로 신고하고 맡긴 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '코인 스테이킹 확정수익 투자 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 스테이킹 확정수익 약속 투자 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '코인 스테이킹 확정수익을 믿고 맡겼는데 출금이 막히고 운영자가 잠적당했다면, 형법 제347조 사기의 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「코인 투자 리딩방·텔레그램·SNS·지인 소개로 ‘우리 스테이킹 플랫폼에 코인을 예치하면 매달 일정한 확정 수익을 보장해 준다, 원금은 언제든 자유롭게 출금할 수 있어 안전하다’는 말을 믿고, 더 나은 수익을 기대하며 코인이나 돈을 맡긴 분의 상황입니다. 그런데 처음 얼마간은 약속한 수익이 들어오는 듯 보여 추가로 더 넣었는데, 어느 순간부터 ‘서버 점검 중이다, 출금 신청이 밀렸다, 곧 정상화된다’며 원금·수익 출금을 미루고 막더니, 결국 운영자·관리자가 채널·계정·연락처를 닫고 사라져, 알고 보니 실제 운용 없이 뒷사람 자금으로 앞사람 수익을 메우는 구조였거나 처음부터 돌려줄 의사 없이 자금만 모은 건 아닌지 의심되고 막막하실 거예요. 노후·생활 자금을 맡긴 거라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하며, 피해 규모가 크면 특정경제범죄 가중처벌 등에 관한 법률 위반(사기)이 문제 될 수 있는 영역입니다. 운용·반환 의사·능력 없이 확정 수익을 보장한다고 가장해 자금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기 범죄사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 고려해 판단하고, 별개의 보호법익·행위태양을 가진 범죄와는 1죄나 상상적 경합으로 보기 어렵다고 본 사례 흐름이 있는 영역으로, 투자 권유·자금 수령 행위의 편취 여부와 범위를 가려 다툴 여지가 있습니다. 확정수익 약속 + 출금 차단 + 잠적 결합은 ‘확정수익 투자 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 운용·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 스테이킹 확정수익 약속 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·운용·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 투자 권유·확정수익 안내·예치·출금 내역 정리.</li>\n<li><strong>② 운용·기망</strong> — 실제 운용·반환 의사·능력 없이 자금을 받았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 예치한 코인·원금·추가 입금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·특경법 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 실제 운용·반환 의사 없이 확정 수익을 보장한다며 자금만 받았는지가 판단의 분기점입니다. 투자 권유·확정수익 안내와 출금 차단·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 투자 권유·확정수익 안내·예치·출금 내역·대화를 캡처 보존.</li>\n<li><strong>2단계 — 운용 부재·잠적 입증 (즉시)</strong> — 출금 차단·점검 핑계 반복·돌려막기 정황·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌·거래소 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM·금융감독원 상담, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 스테이킹 확정수익 투자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·운용·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유·확정수익 보장 안내 캡처 (거래 조건)</strong></li>\n<li><strong>스테이킹·수익 구조 설명 대화 (기망 정황)</strong></li>\n<li><strong>예치·원금·추가 입금 내역 (피해 금액)</strong></li>\n<li><strong>출금 신청·차단·점검 핑계 기록</strong></li>\n<li><strong>돌려막기·운용 부재·다른 피해자 정황 자료</strong></li>\n<li><strong>운영자·관리자·계정·지갑·계좌 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리딩방·채널 대화와 확정수익 안내는 삭제·차단으로 사라지기 쉬우니 보장 문구·수익 구조가 보이게 곧바로 캡처해두는 것이 중요합니다. 출금 차단 시점과 돌려막기 정황을 잡으면 편취 여부를 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운용·기망</strong> — 실제 운용·반환 의사 없이 자금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 투자 손실인지 처음부터 편취였는지.</li>\n<li><strong>돌려막기 구조</strong> — 뒷사람 자금으로 앞사람 수익을 메웠는지.</li>\n<li><strong>편취·피해 규모</strong> — 예치·추가 입금 전부와 특경법 적용 여부.</li>\n<li><strong>운영자 특정</strong> — 계정·지갑·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (불법 투자·피해구제 상담)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래 피해상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 범죄사실의 동일성과 죄수 판단 기준',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 공소사실이나 범죄사실의 동일성은 피고인의 행위와 사회적 사실관계를 기본으로 하되 규범적 요소도 고려해 판단해야 하고, 행위 태양이나 보호법익이 다른 범죄와는 1죄 내지 상상적 경합관계에 있다고 볼 수 없다고 판시했습니다. 투자 권유·자금 수령으로 인한 사기죄의 성립 범위와 다른 범죄와의 관계가 문제 되는 사안을 살펴볼 때에도 이러한 동일성·죄수 기준을 검토해볼 수 있습니다.',
        takeaway: '확정수익 약속 + 출금 차단 + 잠적 결합 시 확정수익 투자 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '투자라 손실 위험은 감수한 것 아닌가요?',
        answer:
          '<strong>실제 운용·반환 의사 없이 확정 수익을 보장하며 자금만 받았는지가 핵심인 영역입니다.</strong> 확정수익 보장 안내와 출금 차단 정황을 확보하세요.',
      },
      {
        question: '처음엔 수익이 들어왔는데 사기인가요?',
        answer:
          '<strong>초기 수익이 돌려막기 구조의 일부였는지가 다툼의 출발점인 영역입니다.</strong> 입금·수익·출금 차단 시점을 정리하세요.',
      },
      {
        question: '예치한 코인·원금 전부를 피해액으로 보나요?',
        answer:
          '<strong>예치·원금·추가 입금 전부가 편취·피해액으로 평가될 수 있는 영역입니다.</strong> 입금 총액과 지갑 흐름을 정리하세요.',
      },
      {
        question: '피해 규모가 크면 형이 달라지나요?',
        answer:
          '<strong>피해 규모에 따라 특정경제범죄 가중처벌이 문제 될 수 있는 영역입니다.</strong> 전체 피해액을 합산해 정리하세요.',
      },
      {
        question: '운영자가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>계좌·거래소 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금·예치 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '코인 스테이킹 폰지 이자 추적', href: '/guide/fraud/fraud-crypto-staking-ponzi-interest-track' },
      { label: '가상자산 투자 사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
      { label: '거래소 출금 차단 엑시트 추적', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-block-exit-track' },
      { label: '코인 리딩방 수익보장 출금차단 추적', href: '/guide/fraud/fraud-crypto-leading-room-profit-guarantee-withdrawal-block-track' },
    ],
  },

  // ─── 5. fraud-prepaid-gym-membership-closure-norefund-track ───
  {
    domain: 'fraud',
    slug: 'fraud-prepaid-gym-membership-closure-norefund-track',
    keyword: '헬스장 장기회원권 선결제 후 폐업 환불거부 사기',
    questionKeyword: '헬스장·피트니스에서 ‘장기 회원권을 끊으면 크게 할인해 준다’는 말에 1년·2년 장기 회원권을 선결제했는데, 얼마 지나지 않아 헬스장이 갑자기 폐업하거나 운영을 중단하고도 남은 기간에 대한 환불을 거부해요. 알고 보니 이미 운영이 어려운 상황을 숨긴 채 폐업 직전까지 장기 회원권을 대량으로 팔아 선결제를 받았던 것 같은데, 이런 헬스장 선결제 후 폐업·환불 거부를 사기로 신고하고 선결제한 돈을 돌려받으려면 어떻게 해야 하나요?',
    ctaKeyword: '헬스장 장기회원권 선결제 폐업 환불거부 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 장기회원권 선결제 후 폐업 환불거부 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '헬스장 장기 회원권을 선결제했는데 폐업하고 환불을 거부당했다면, 형법 제347조 사기의 편취 판단과 피해구제·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·피트니스·요가·필라테스 센터에서 ‘1년·2년 장기 회원권을 끊으면 월 단가가 훨씬 싸진다, 지금 등록하면 추가 개월·PT를 더 준다’는 권유를 믿고, 운동을 꾸준히 하려는 마음으로 적지 않은 금액의 장기 회원권을 선결제한 분의 상황입니다. 그런데 등록하고 얼마 지나지 않아 헬스장이 갑자기 ‘운영이 어렵다, 폐업하게 됐다’며 문을 닫거나 운영을 중단하고도, 남은 이용 기간에 해당하는 금액을 ‘환불은 어렵다, 자금이 없다’며 돌려주지 않아, 알고 보니 이미 심각한 자금난·폐업 위험을 숨긴 채 폐업 직전까지 장기 회원권을 대량으로 팔아 선결제만 챙긴 건 아닌지 의심되고 막막하실 거예요. 건강을 위해 미리 낸 돈을 통째로 잃을 위기라 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상적으로 서비스를 제공할 의사·능력이 없음을 알면서도 이를 알리지 않고 장기 회원권을 팔아 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄를 적용할 때 편취한 재물·이익의 가액을 구체적으로 산정할 수 없으면 특경법 위반(사기)으로 처벌할 수 없고, 누가 기망의 상대방이자 처분행위의 주체로서 피해자인지를 엄격히 따져야 한다고 본 사례 흐름이 있는 영역으로, 누가 무엇을 얼마나 편취당했는지를 가려 다툴 여지가 있습니다. 장기 회원권 선결제 + 폐업 + 환불 거부 결합은 ‘선결제 폐업 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 계약·결제 정리 ② 고지의무·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 피해구제·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 장기회원권 선결제 후 폐업 환불거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·고지의무·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제 정리</strong> — 회원권 계약서·기간·선결제 금액·결제 내역 정리.</li>\n<li><strong>② 고지의무·기망</strong> — 자금난·폐업 위험을 숨긴 채 장기 회원권을 팔았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 남은 기간에 해당하는 선결제 금액 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 피해구제·환급</strong> — 한국소비자원 피해구제·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 폐업과 달리, 정상 서비스를 제공할 수 없는 자금난·폐업 위험을 알면서 이를 숨기고 폐업 직전까지 장기 회원권을 팔아 선결제를 받았는지가 판단의 분기점입니다. 계약서·선결제 내역과 폐업·환불 거부 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·결제 자료 보존 (즉시)</strong> — 회원권 계약서·결제 영수증·할부 약정·약관을 보존.</li>\n<li><strong>2단계 — 폐업·환불 거부 입증 (즉시)</strong> — 폐업 공지·환불 거부 대화·운영 중단 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 피해구제·할부항변 (병행)</strong> — 한국소비자원 피해구제와 신용카드 할부항변권을 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사기 고소 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 장기회원권 선결제 폐업 환불거부 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약·고지의무·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>회원권 계약서·기간·약관 (거래 조건)</strong></li>\n<li><strong>선결제 금액·영수증·할부 약정 (피해 금액)</strong></li>\n<li><strong>폐업 공지·운영 중단 정황 자료 (기망 정황)</strong></li>\n<li><strong>환불 요구·거부 대화 기록</strong></li>\n<li><strong>폐업 직전 회원 모집·다른 피해자 정황 자료</strong></li>\n<li><strong>헬스장 사업자·운영자·계좌 정보</strong></li>\n<li><strong>한국소비자원 피해구제 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폐업 직전 공지·환불 거부 메시지는 사라지기 쉬우니 곧바로 캡처해두는 것이 중요합니다. 자금난을 숨긴 채 폐업 직전까지 장기 회원을 모집한 정황을 함께 잡으면 고지의무 위반 기망을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고지의무·기망</strong> — 자금난·폐업 위험을 알면서 숨기고 장기 회원권을 팔았는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 악화인지 처음부터 편취였는지.</li>\n<li><strong>편취액 산정</strong> — 남은 기간에 해당하는 선결제 금액이 얼마인지.</li>\n<li><strong>피해자 특정</strong> — 누가 기망의 상대방이자 처분 주체로서 피해자인지.</li>\n<li><strong>책임 주체</strong> — 운영자·법인·관계자 누구에게 책임을 물을지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (사기 신고)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·체육시설 피해상담)</strong></li>\n<li><strong>공정거래위원회 (약관·환불 분쟁 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취액 산정과 피해자의 특정',
        summary:
          '대법원 2022도3771(대법원, 2022.06.30 선고) 영역에서 법원은 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄를 적용할 때 편취한 재물·이익의 가액을 구체적으로 산정할 수 없으면 특경법 위반(사기)으로 처벌할 수 없고, 누가 기망행위의 상대방이자 그로 인한 착오·처분행위의 주체로서 사기 범행의 피해자인지를 엄격히 따져야 한다고 판시했습니다. 폐업 직전 장기 회원권을 팔아 선결제를 받은 사안을 살펴볼 때에도 편취액 산정과 피해자 특정을 검토해볼 수 있습니다.',
        takeaway: '장기 회원권 선결제 + 폐업 + 환불 거부 결합 시 선결제 폐업 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경영이 어려워 폐업한 것뿐 아닌가요?',
        answer:
          '<strong>정상 서비스를 제공할 수 없는 위험을 알면서 숨기고 장기 회원권을 팔았는지가 핵심인 영역입니다.</strong> 등록 시점의 자금난 정황을 확보하세요.',
      },
      {
        question: '환불 못 받은 금액만큼 피해인가요?',
        answer:
          '<strong>남은 이용 기간에 해당하는 선결제 금액이 편취·피해액으로 평가될 수 있는 영역입니다.</strong> 결제 총액과 잔여 기간을 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>할부 결제는 할부항변권으로 잔여 대금 지급 거절을 검토할 수 있는 영역입니다.</strong> 카드사에 항변권을 함께 알아보세요.',
      },
      {
        question: '소비자원에도 같이 신청할 수 있나요?',
        answer:
          '<strong>한국소비자원 피해구제와 형사·민사 절차를 병행 검토할 수 있는 영역입니다.</strong> 접수 기록을 함께 남기세요.',
      },
      {
        question: '운영자가 잠적해 연락이 안 돼요.',
        answer:
          '<strong>사업자·법인 정보로 책임 주체를 특정해 형사·민사를 검토할 수 있는 영역입니다.</strong> 사업자 등록·계좌 정보를 확보하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-prepaid-membership-gym-closure-track' },
      { label: '헬스장 폐업 회원권 환불 추적', href: '/guide/fraud/fraud-gym-closure-membership-refund' },
      { label: '헬스장 PT 선결제 폐업 추적', href: '/guide/fraud/fraud-gym-pt-prepay-closure-track' },
      { label: '학원 교재 선결제 폐업 잠적 추적', href: '/guide/fraud/fraud-academy-textbook-prepay-closure-vanish-track' },
    ],
  },

  // ─── 6. fraud-loan-brokerage-advance-fee-pretext-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-brokerage-advance-fee-pretext-falsely-accused-defense',
    keyword: '대출 중개 선수수료 명목 사기 무고',
    questionKeyword: '대출 중개·컨설팅 일을 하며 의뢰인에게 ‘대출을 진행하려면 서류 준비·심사 명목으로 선수수료가 필요하다’고 안내하고 수수료를 받아 절차를 진행했는데, 이후 의뢰인의 신용·서류 문제로 대출이 부결되거나 늦어지자, 의뢰인이 ‘처음부터 대출해 줄 생각 없이 수수료만 받아 챙긴 사기’라며 저를 고소했어요. 저는 실제로 대출 신청·심사 절차를 진행했고 수수료도 약정대로 받은 것인데, 단순 부결·지연이 형사 사기 사건이 돼 막막합니다. 이런 사실과 다른 사기 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '대출 중개 선수수료 사기 무고 편취 고의·기망 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '대출 중개 선수수료 명목 사기 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '대출 중개 선수수료를 받고 부결되자 사기로 고소당했다면, 형법 제347조 편취 고의와 기망·민사 분쟁의 구분을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「대출 중개·금융 컨설팅 일을 하면서 의뢰인에게 ‘대출을 진행하려면 서류 준비·심사·신청 명목으로 선수수료가 필요하다’고 안내하고 약정한 수수료를 받아 대출 신청·심사 절차를 실제로 진행했는데, 이후 의뢰인의 신용·소득·서류 문제나 금융기관 사정으로 대출이 부결되거나 늦어진 분의 상황입니다. 그러자 의뢰인이 ‘처음부터 대출해 줄 의사도 능력도 없이 수수료만 받아 챙긴 사기다’라며 본인을 사기로 고소·고발해 한순간에 피의자가 되어, 정작 본인은 실제로 대출 신청·심사 절차를 진행했고 수수료도 사전에 약정한 대로 받은 것이라 기억하는데, 단순 부결·지연·환불 다툼이 형사 사기 사건으로 번져 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 정상적으로 일한 대가가 사기로 몰려 형사 전과 위험까지 더해져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 수수료를 받을 당시 대출을 진행할 의사·절차가 실제로 있었는지, 부결·지연이 사후 사정에 따른 결과인지, 수수료 분쟁이 민사 환불 다툼에 그치는지가 핵심 쟁점입니다. 판례는 사기죄 성립 여부는 행위 당시를 기준으로 판단해야 하고, 거래 당시 이행 의사·능력이 있었다면 그 후 제대로 이행하지 못했더라도 그 사실만으로 곧바로 기망이나 편취 범의를 단정할 수 없다고 본 사례 흐름이 있는 영역으로, 실제 진행한 절차·약정 정황을 들어 편취 고의를 다툴 수 있습니다. 선수수료 수령 + 대출 절차 진행 + 사후 부결 결합은 ‘편취 고의·기망’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 약정·수수료 정리 ② 편취 고의 ③ 절차 이행 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대출 중개 선수수료 명목 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·편취 고의·절차 이행·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정·수수료 정리</strong> — 중개 약정·수수료 명목·금액·안내 내역 정리.</li>\n<li><strong>② 편취 고의</strong> — 수수료를 받을 당시 편취의 고의가 있었는지 검토.</li>\n<li><strong>③ 절차 이행</strong> — 실제 대출 신청·심사 절차 진행 여부를 검토.</li>\n<li><strong>④ 정황·증거</strong> — 신청 접수·심사·연락 자료로 절차 이행 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대출이 부결됐다는 것만으로 곧 사기가 되는 것이 아니라, 수수료를 받을 당시 대출을 진행할 의사·절차가 있었는지와 부결·지연이 사후 사정에 따른 것인지가 분기점입니다. 실제 진행한 신청·심사 절차와 약정 정황으로 고의 부재와 민사적 성격을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·수수료 정리 (즉시)</strong> — 중개 약정·수수료 명목·금액·안내 흐름을 정리.</li>\n<li><strong>2단계 — 절차 이행 자료 확보 (1주)</strong> — 대출 신청 접수·심사 진행·금융기관 연락 자료를 확보.</li>\n<li><strong>3단계 — 부결·지연 사정 정리 (2주)</strong> — 신용·서류·금융기관 사정 등 부결·지연 경위를 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출 중개 선수수료 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 약정·편취 고의·절차 이행 갈래입니다.</strong></p>\n<ul>\n<li><strong>중개 약정서·수수료 안내 대화 기록 (관계·약정)</strong></li>\n<li><strong>대출 신청 접수·심사 진행 자료 (절차 이행)</strong></li>\n<li><strong>금융기관·의뢰인과의 연락·진행 기록 (이행 의사)</strong></li>\n<li><strong>신용·서류 문제 등 부결·지연 사정 자료</strong></li>\n<li><strong>수수료 환불·정산 협의 기록</strong></li>\n<li><strong>의뢰인 주장 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘수수료를 받을 당시 대출을 진행할 의사·절차가 있었는지’와 ‘부결·지연이 사후 사정에 따른 결과인지’입니다. 실제 진행한 대출 신청·심사 자료와 약정 내역을 정돈하면 편취 의도가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 수수료를 받을 당시 편취의 고의가 있었는지.</li>\n<li><strong>이행 의사·절차</strong> — 실제 대출 신청·심사 절차를 진행했는지.</li>\n<li><strong>민사·형사 구분</strong> — 수수료 환불 다툼·민사 분쟁에 그치는지.</li>\n<li><strong>부결·지연 사정</strong> — 신용·서류·금융기관 사정에 따른 결과인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 행위 당시 기준의 편취 범의 판단',
        summary:
          '대법원 2012도14516(대법원, 2016.04.28 선고) 영역에서 법원은 사기죄가 성립하는지는 행위 당시를 기준으로 판단해야 하므로 거래 당시 이행 의사·능력이 있었다면 그 후 제대로 이행하지 못하였더라도 이는 민사상 채무불이행에 불과하고, 거래 관계·정황상 충분히 예상할 수 있는 위험에 더해 다른 기망 사정이 없다면 사후 불이행 사실만으로 편취 범의를 단정할 수 없다고 판시했습니다. 선수수료를 받고 대출 절차를 진행했으나 부결된 사안에서 편취 고의를 다툴 때에도 약정·절차 이행·부결 사정을 종합해 검토해볼 수 있습니다.',
        takeaway: '선수수료 수령 + 대출 절차 진행 + 사후 부결 결합 시 편취 고의·기망 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '대출이 부결됐다고 사기로 고소당했어요.',
        answer:
          '<strong>편취 고의 유무와 절차 이행 여부가 핵심인 영역입니다.</strong> 약정·수수료 안내와 실제 진행 절차를 정리하세요.',
      },
      {
        question: '수수료를 받고 절차를 진행했는데도 불리한가요?',
        answer:
          '<strong>실제 신청·심사 절차 진행은 이행 의사를 뒷받침하는 영역입니다.</strong> 신청 접수·심사 진행 자료를 확보하세요.',
      },
      {
        question: '환불 다툼이 형사 사건이 되나요?',
        answer:
          '<strong>수수료 환불 다툼은 민사 분쟁에 그칠 수 있는 영역입니다.</strong> 환불·정산 협의 기록과 민사적 성격을 정리하세요.',
      },
      {
        question: '부결이 제 잘못이 아닌데도 처벌되나요?',
        answer:
          '<strong>신용·서류·금융기관 사정에 따른 부결만으로는 편취 고의가 인정되지 않는 영역입니다.</strong> 부결·지연 사정을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>약정·수수료·절차에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '대출 중개 선수수료 무고 방어', href: '/guide/fraud/fraud-loan-brokerage-advance-fee-falsely-accused-defense' },
      { label: '지인 대여 채무불이행 무고 방어', href: '/guide/fraud/fraud-acquaintance-loan-default-falsely-accused-defense' },
      { label: '지인 대여 민사·형사 구분', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '사업 자금 대여 무고 방어', href: '/guide/fraud/fraud-business-fund-loan-falsely-accused-defense' },
    ],
  },

  // ─── 7. sex-crime-subway-rush-hour-grope-report-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-rush-hour-grope-report-track',
    keyword: '지하철 혼잡 출근길 기습 추행',
    questionKeyword: '출근길 만원 지하철에서 사람이 빽빽하게 들어찬 객실에 서 있던 중, 뒤·옆에 있던 사람이 흔들리는 척하며 제 몸을 만지거나 밀착해 큰 수치심을 느꼈어요. 사람이 너무 많아 누가 했는지 보이지 않고 열차가 흔들려 부딪힌 우연인지 일부러 만진 건지 헷갈렸으며 붐비고 위축돼 그 자리에서 항의도 못 했는데, 이런 출근길 지하철 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '지하철 혼잡 출근길 기습 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '지하철 혼잡 출근길 기습 추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '출근길 만원 지하철에서 흔들리는 척 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·추행의 고의를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출근 시간대 만원 지하철·전철에서 사람이 빽빽하게 들어찬 객실에 서 있던 중, 바로 뒤나 옆에 있던 사람이 열차가 흔들리는 척하면서 본인의 엉덩이·허벅지·허리·몸을 만지거나, 필요 이상으로 밀착해 신체를 비비듯 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 사람이 너무 많아 ‘열차가 흔들려 부딪힌 우연인지, 일부러 만진 건지’ 헷갈리고, 누가 그랬는지 확실치 않으며, 붐비고 위축돼 그 자리에서 곧바로 항의하거나 붙잡지 못한 채 다음 역에서 내려, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 매일 오가는 출근길에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 판단하고, 강제추행죄는 행위마다 1개의 죄가 성립하며 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 본 사례 흐름이 있는 영역입니다. 혼잡 밀착 접촉 + 의사에 반한 접촉 + 흔들림 핑계 결합은 ‘추행 해당성·추행의 고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 혼잡 출근길 기습 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 노선·열차·시간·역·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 흔들림에 따른 접촉 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 객실·승강장 CCTV·열차 정보 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·하차역·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·지하철보안관·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡으로 몸이 닿더라도 흔들림에 따른 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 강제추행으로 평가될 수 있되, 추행의 고의가 함께 인정되어야 한다는 점이 분기점입니다. 객실·승강장 CCTV와 열차·시간 정보를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 노선·열차·시간·역·접촉 부위·방식·반복·인상착의·위치를 정리.</li>\n<li><strong>2단계 — CCTV·열차 정보 확보 (즉시)</strong> — 객실·승강장 CCTV, 열차 번호·하차역·시간 정보 보존을 요청.</li>\n<li><strong>3단계 — 보안관·역무원 협조 (직후)</strong> — 지하철보안관·역무실·경찰에 영상 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 혼잡 출근길 기습 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>노선·열차·시간·역·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·하차 정황 기록</strong></li>\n<li><strong>객실·승강장 CCTV 보존 요청 자료</strong></li>\n<li><strong>교통카드·승하차 기록 (시간·동선)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>주변 승객·보안관 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 지하철 CCTV는 보존 기간이 짧으므로 노선·열차 번호·시간대·역을 확인해 보안관·역무실에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소를 남기면 흔들림에 따른 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>추행의 고의</strong> — 폭행·협박 외에 추행행위와 그 범의가 인정되는지.</li>\n<li><strong>우연·고의</strong> — 열차 흔들림에 따른 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·하차역·목격자로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·지하철경찰대 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행행위와 추행의 고의에 대한 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 판단해야 하고, 강제추행죄가 성립하려면 문제가 되는 행위마다 폭행·협박 외에 추행행위와 그에 대한 범의가 인정되어야 하며, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 판시했습니다. 혼잡한 열차에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성과 고의 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡 밀착 접촉 + 의사에 반한 접촉 + 흔들림 핑계 결합 시 추행 해당성·추행의 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '열차가 흔들려 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>흔들림에 따른 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
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
          '<strong>객실·승강장 CCTV·하차역·목격자로 특정을 보강할 수 있는 영역입니다.</strong> 노선·열차·시간대를 즉시 기록하세요.',
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
      { label: '혼잡 지하철 추행 추적', href: '/guide/sex-crime/sex-crime-crowded-subway-groping-track' },
      { label: '지하철 출근길 추행 추적', href: '/guide/sex-crime/sex-crime-subway-commute-track' },
      { label: '지하철 버스 추행 추적', href: '/guide/sex-crime/sex-crime-subway-bus-molestation-track' },
      { label: '축제 인파 기습 추행 추적', href: '/guide/sex-crime/sex-crime-festival-crowd-grope-track' },
    ],
  },

  // ─── 8. sex-crime-noraebang-private-room-forced-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-noraebang-private-room-forced-track',
    keyword: '노래방 룸 강제추행 대응 신고',
    questionKeyword: '노래방·코인노래방의 닫힌 룸 안에서 같이 있던 사람이 갑자기 제 몸을 만지거나 껴안고 밀착하는 등 원치 않는 신체 접촉을 해 큰 수치심과 공포를 느꼈어요. 밀폐된 룸이라 밖에서 못 보고 목격자도 없으며 술자리 분위기라 그 자리에서 강하게 항의하기 어려웠는데, 이런 노래방 룸 안의 강제추행을 신고하고 처벌을 물으려면 어떻게 해야 하나요?',
    ctaKeyword: '노래방 룸 강제추행 대응 신고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노래방 룸 강제추행 대응 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '노래방 닫힌 룸 안에서 원치 않는 신체 접촉으로 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성을 따지고 증거·신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「노래방·코인노래방·노래주점의 문이 닫힌 좁은 룸 안에서, 함께 노래를 부르거나 술자리를 갖던 일행·지인·낯선 사람이 갑자기 본인의 몸을 만지거나 껴안고 밀착하는 등 원치 않는 신체 접촉을 해 와 큰 불쾌감과 수치심·공포를 느낀 분의 상황입니다. 밀폐된 룸이라 밖에서 안이 보이지 않고 목격자도 없으며, 술자리 분위기에서 ‘분위기를 깬다’는 부담이나 위축감 때문에 그 자리에서 강하게 항의하거나 곧바로 빠져나오지 못한 채 자리를 정리해, 신고해도 되는 일인지·증거가 없어 어렵지 않은지 헷갈려 막막하셨을 거예요. 즐기러 간 자리에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부를 행위태양·경위·객관적 상황 등을 종합해 판단하고, 추행에 해당하기 위해 피해자가 성적 수치심이나 혐오감을 반드시 실제로 느껴야 하는 것은 아니며, 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 행위이면 추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 밀폐 공간 접촉 + 의사에 반한 접촉 + 목격자 부재 결합은 ‘추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노래방 룸 강제추행 대응 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 업소·룸·일시·접촉 부위·방식·반복·동석자 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 업소 입구·복도 CCTV·결제·예약 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 동석자·예약·결제·CCTV로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 밀폐된 룸이라 목격자가 없더라도 객관적으로 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 접촉이면 추행으로 평가될 수 있다는 점이 분기점입니다. 입구·복도 CCTV와 결제·동석 기록, 직후 호소를 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 업소·룸·일시·접촉 부위·방식·반복·동석자를 정리.</li>\n<li><strong>2단계 — CCTV·결제 기록 확보 (즉시)</strong> — 업소 입구·복도 CCTV, 예약·결제·이용 기록 보존을 요청.</li>\n<li><strong>3단계 — 업소·관계자 협조 (직후)</strong> — 업소에 입퇴실 시간·동석자·CCTV 보존과 협조를 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노래방 룸 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>업소·룸·일시·접촉 정황 메모</strong></li>\n<li><strong>가해자·동석자 인적사항·관계 기록</strong></li>\n<li><strong>업소 입구·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>예약·결제·이용 기록 (입퇴실·동석)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>업소 직원·일행 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 룸 내부에는 CCTV가 없는 경우가 많으므로 입구·복도 CCTV와 결제·동석 기록으로 입퇴실 시간과 가해자를 특정하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소·지인 연락을 남기면 추행 해당성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>수치심 실재 불요</strong> — 객관적으로 성적 수치심·혐오감을 일으키는 행위인지.</li>\n<li><strong>동의·거부</strong> — 술자리 분위기와 무관하게 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — 동석자·결제·CCTV로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 입구 CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 해당성과 수치심 실재 불요',
        summary:
          '대법원 2021도7538(대법원, 2021.10.28 선고) 영역에서 법원은 추행에 해당하는지는 추행 행위 당시의 경위와 구체적 행위태양·객관적 상황 등을 종합해 판단하고, 추행행위에 해당하기 위해 피해자가 성적 수치심이나 혐오감을 반드시 실제로 느껴야 하는 것은 아니며, 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 성적 자기결정권을 침해하는 행위이면 추행이 될 여지가 있다고 판시했습니다. 밀폐된 룸에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성 기준을 검토해볼 수 있습니다.',
        takeaway: '밀폐 공간 접촉 + 의사에 반한 접촉 + 목격자 부재 결합 시 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '목격자가 없는데 신고할 수 있나요?',
        answer:
          '<strong>입구·복도 CCTV·결제·동석 기록과 직후 호소로 입증을 보강할 수 있는 영역입니다.</strong> 입퇴실 시간과 동석자를 확보하세요.',
      },
      {
        question: '술자리 분위기였는데도 추행인가요?',
        answer:
          '<strong>분위기와 무관하게 의사에 반한 접촉이면 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 부위·방식·반복을 정리하세요.',
      },
      {
        question: '제가 강하게 거부하지 못했어요.',
        answer:
          '<strong>거부를 못 했더라도 의사에 반한 접촉 정황으로 다툴 수 있는 영역입니다.</strong> 위축 정황과 직후 호소를 남기세요.',
      },
      {
        question: '수치심을 그때 못 느꼈으면 안 되나요?',
        answer:
          '<strong>피해자가 수치심을 반드시 실제로 느껴야 하는 것은 아닌 영역입니다.</strong> 객관적 행위태양을 중심으로 정리하세요.',
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
      { label: '노래방 룸 낯선 사람 강제추행 추적', href: '/guide/sex-crime/sex-crime-noraebang-room-stranger-forced-molestation-track' },
      { label: 'PC방 옆자리 추행 추적', href: '/guide/sex-crime/sex-crime-pc-room-adjacent-seat-track' },
      { label: '지인 항거불능 상태 추행 추적', href: '/guide/sex-crime/sex-crime-acquaintance-incapacitated-state-track' },
      { label: '학원 강사 추행 추적', href: '/guide/sex-crime/sex-crime-academy-instructor-track' },
    ],
  },

  // ─── 9. sex-crime-swimming-pool-shower-room-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-swimming-pool-shower-room-track',
    keyword: '수영장 샤워실 신체접촉 추행 신고',
    questionKeyword: '수영장·스포츠센터 샤워실·탈의실에서 옷을 벗거나 씻던 중, 옆에 있던 사람이 좁다는 핑계로 밀착하거나 제 몸을 만지는 등 원치 않는 신체 접촉을 해 큰 수치심과 불쾌감을 느꼈어요. 좁고 미끄러운 곳이라 부딪힌 우연인지 일부러 만진 건지 헷갈렸고 옷을 벗은 상태라 더 위축돼 그 자리에서 항의하기 어려웠는데, 이런 수영장 샤워실 신체 접촉을 강제추행으로 신고하고 처벌을 물으려면 어떻게 해야 하나요?',
    ctaKeyword: '수영장 샤워실 신체접촉 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수영장 샤워실 신체접촉 추행 신고 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '수영장 샤워실에서 밀착하거나 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·우연과 고의 구분을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「수영장·스포츠센터·목욕탕의 샤워실·탈의실에서 옷을 벗거나 몸을 씻던 중, 바로 옆에 있던 사람이 ‘좁아서 어쩔 수 없다’는 듯 필요 이상으로 밀착하거나 본인의 몸을 만지는 등 원치 않는 신체 접촉을 해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 좁고 미끄러운 공간이라 ‘부딪힌 우연인지, 일부러 만진 건지’ 헷갈리고, 옷을 벗은 상태라 더욱 위축돼 그 자리에서 곧바로 항의하거나 붙잡지 못한 채 자리를 옮겨, 신고해도 되는 일인지·우연으로 넘겨야 하는지 헷갈려 막막하셨을 거예요. 가장 무방비한 공간에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황과 그 시대의 성적 도덕관념 등을 종합해 신중히 판단하고, 피해자에게 신체적·정신적 사정이 있는 경우 그러한 상태를 충분히 고려해야 하며 비장애인의 시각에서 함부로 단정해서는 안 된다고 본 사례 흐름이 있는 영역입니다. 무방비 공간 접촉 + 의사에 반한 접촉 + 좁음 핑계 결합은 ‘추행 해당성·우연과 고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수영장 샤워실 신체접촉 추행 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 시설·샤워실·일시·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 좁음에 따른 접촉 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 탈의실 입구·복도·로비 CCTV·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 회원권·입장·라커·CCTV로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 공간이라 몸이 닿더라도 좁음에 따른 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 샤워실 내부에 CCTV가 없는 경우가 많으므로 입구·로비 CCTV와 이용 기록을 신속히 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 시설·샤워실·일시·접촉 부위·방식·반복·인상착의·위치를 정리.</li>\n<li><strong>2단계 — CCTV·이용 기록 확보 (즉시)</strong> — 탈의실 입구·복도·로비 CCTV, 회원·입장·라커 기록 보존을 요청.</li>\n<li><strong>3단계 — 시설·관계자 협조 (직후)</strong> — 시설 측에 입퇴장 시간·회원 정보·CCTV 보존과 협조를 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수영장 샤워실 신체접촉 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>시설·샤워실·일시·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·이동 정황 기록</strong></li>\n<li><strong>탈의실 입구·복도·로비 CCTV 보존 요청 자료</strong></li>\n<li><strong>회원·입장·라커·결제 기록 (특정·시간)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>주변 이용자·직원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 샤워실·탈의실 내부에는 CCTV가 없는 경우가 많으므로 입구·로비 CCTV와 회원·입장·라커 기록으로 입퇴장 시간과 가해자를 특정하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소를 남기면 좁음에 따른 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>우연·고의</strong> — 좁은 공간에서 부딪힌 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>행위태양 종합</strong> — 접촉 부위·반복·밀착 정도를 종합해 판단하는지.</li>\n<li><strong>가해자 특정</strong> — 회원·입장·라커·CCTV로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — 입구 CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 해당성의 종합 판단과 피해자 상태 고려',
        summary:
          '대법원 2016도4404(대법원, 2021.02.25 선고) 영역에서 법원은 추행 해당 여부를 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위의 객관적 상황 등을 종합해 판단해야 하고, 피해자에게 신체적·정신적 사정이 있는 경우 그러한 상태를 충분히 고려해야 하며 비장애인의 시각·기준에서 함부로 단정해서는 안 된다고 판시했습니다. 무방비한 샤워실에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성과 상황 종합 기준을 검토해볼 수 있습니다.',
        takeaway: '무방비 공간 접촉 + 의사에 반한 접촉 + 좁음 핑계 결합 시 추행 해당성·우연과 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '좁아서 부딪힌 거라고 하면 어쩌죠?',
        answer:
          '<strong>좁음에 따른 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '옷을 벗은 상태라 항의를 못 했어요.',
        answer:
          '<strong>무방비·위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '샤워실 안에는 CCTV가 없잖아요.',
        answer:
          '<strong>입구·로비 CCTV와 회원·입장 기록으로 특정·시간을 보강할 수 있는 영역입니다.</strong> 입퇴장 시간과 라커 기록을 확보하세요.',
      },
      {
        question: '밀착해 비비는 것도 추행인가요?',
        answer:
          '<strong>상당한 범위를 넘은 의사에 반한 접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 양상과 반복을 기록하세요.',
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
      { label: '수영 강습 추행 추적', href: '/guide/sex-crime/sex-crime-swimming-lesson-track' },
      { label: '워터파크 수영장 인파 추행 추적', href: '/guide/sex-crime/sex-crime-water-park-pool-crowd-track' },
      { label: '공용 수영장 탈의실 불법촬영 추적', href: '/guide/sex-crime/sex-crime-public-pool-changing-illegal-filming-track' },
      { label: 'PC방 옆자리 추행 추적', href: '/guide/sex-crime/sex-crime-pc-room-adjacent-seat-track' },
    ],
  },

  // ─── 10. sex-crime-pub-server-customer-accusation-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-pub-server-customer-accusation-falsely-accused-defense',
    keyword: '호프집 종업원 추행 무고 방어',
    questionKeyword: '호프집·주점에서 서빙·접객 일을 하던 중, 손님에게 음식·술을 내거나 좁은 통로를 지나며 스친 것뿐인데 손님이 ‘종업원이 추행했다’며 저를 강제추행으로 고소했어요. 저는 정상적인 접객 과정에서 닿은 것이고 추행할 의도가 전혀 없었는데, 사람이 많고 시끄러운 데다 손님 진술만으로 사건이 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '호프집 종업원 추행 무고 추행 고의·진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '호프집 종업원 추행 무고 방어 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '접객 중 스친 것을 손님에게 추행으로 고소당했다면, 형법 제298조 추행 고의와 진술 신빙성·무죄추정을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「호프집·주점·식당에서 서빙·접객 일을 하던 중, 손님 테이블에 음식·술을 내려놓거나 사람이 많은 좁은 통로를 지나며 손이나 몸이 스친 것뿐인데, 손님이 ‘종업원이 일부러 몸을 만지는 추행을 했다’며 본인을 공중밀집장소에서의 추행 등으로 고소·고발해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 정상적인 접객 과정에서 불가피하게 닿은 것이고 추행할 의도가 전혀 없었다고 기억하는데, 매장이 붐비고 시끄러워 정황이 어수선했던 데다, 손님의 일방적 진술만으로 사건이 진행되어 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 생계가 걸린 일터에서 한 정상 접객이 추행으로 몰려 형사 전과 위험까지 더해져 더 답답하실 거예요.」 형법 제298조와 성폭력처벌법상 공중밀집장소에서의 추행죄는 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 있어야 성립하는 영역입니다. 혐의를 받고 있다면, 접촉이 정상 접객 범위였는지, 추행의 고의가 인정되는지, 손님 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지가 핵심 쟁점입니다. 판례는 추행의 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 종합해 판단해야 하고, 공소사실에 조금이라도 합리적 의심이 있으면 피고인이 제출한 증거가 부족하다는 이유만으로 유죄를 선고할 수 없으며, 무죄추정 원칙상 의심스러우면 피고인의 이익으로 판단해야 한다고 본 사례 흐름이 있는 영역으로, 접객 경위·진술 모순을 들어 추행 고의와 진술 신빙성을 다툴 수 있습니다. 정상 접객 + 손님 일방 진술 + 추행 고의 부재 결합은 ‘추행 고의·진술 신빙성’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 접객·경위 정리 ② 추행 고의 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 호프집 종업원 추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 접객·추행 고의·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 접객·경위 정리</strong> — 좌석·동선·접객 절차·손님과의 경위 정리.</li>\n<li><strong>② 추행 고의</strong> — 접촉이 정상 접객 범위였고 추행 고의가 없었는지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 손님 진술의 합리성·일관성·객관적 정황 부합을 검토.</li>\n<li><strong>④ 정황·증거</strong> — 매장 CCTV·동선·동료 진술로 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 손님이 추행을 주장한다고 곧 유죄가 되는 것이 아니라, 접촉이 정상 접객 범위였는지·추행의 고의가 인정되는지와 손님 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지가 분기점입니다. 접객 경위·CCTV와 진술 모순으로 추행 고의와 진술 신빙성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 접객·경위 정리 (즉시)</strong> — 좌석·동선·접객 절차·손님과의 경위를 정리.</li>\n<li><strong>2단계 — CCTV·근무 자료 확보 (1주)</strong> — 매장 CCTV·좌석 배치·근무표·동료 진술을 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 손님 진술의 시점·부위·정황 모순과 객관적 사실 불부합을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 추행 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">호프집 종업원 추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 접객·추행 고의·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>좌석 배치·동선·접객 절차 자료 (정상 범위)</strong></li>\n<li><strong>매장 CCTV·출입·결제 기록 (정황)</strong></li>\n<li><strong>근무표·동료·관리자 진술 (목격·정황)</strong></li>\n<li><strong>손님 진술의 시점·부위·정황 모순 정리 자료</strong></li>\n<li><strong>손님과의 대화·항의·요구 경위 기록</strong></li>\n<li><strong>매장 혼잡·소란 등 객관적 상황 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘접촉이 정상 접객 범위였는지·추행의 고의가 있었는지’와 ‘손님 진술이 합리적 의심을 배제할 정도로 신빙성이 있는지’입니다. 매장 CCTV·동선 자료와 손님 진술의 모순·불부합을 정돈하면 추행 고의와 진술 신빙성을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 추행을 용인하는 내심의 의사가 있었는지.</li>\n<li><strong>정상 접객</strong> — 접촉이 불가피한 정상 접객 범위였는지.</li>\n<li><strong>진술 신빙성</strong> — 손님 진술이 합리적 의심을 배제할 정도인지.</li>\n<li><strong>무죄추정</strong> — 의심스러우면 피고인의 이익으로 판단되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의의 간접사실 판단과 무죄추정',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 공중밀집장소에서의 추행죄가 성립하려면 추행을 한다는 인식을 전제로 적어도 미필적으로나마 이를 용인하는 내심의 의사가 있어야 하고, 피고인이 추행의 고의를 부인하는 경우 고의와 상당한 관련성이 있는 간접사실을 종합해 판단해야 하며, 공소사실에 조금이라도 합리적 의심이 있으면 피고인 제출 증거가 부족하다는 이유만으로 유죄를 선고할 수 없다고 판시했습니다. 접객 중 접촉이 추행으로 다투어지는 사안을 살펴볼 때에도 이러한 추행 고의·무죄추정 기준을 검토해볼 수 있습니다.',
        takeaway: '정상 접객 + 손님 일방 진술 + 추행 고의 부재 결합 시 추행 고의·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '접객 중 스친 것뿐인데 고소당했어요.',
        answer:
          '<strong>접촉이 정상 접객 범위였는지·추행 고의가 있었는지가 핵심인 영역입니다.</strong> 좌석·동선·접객 절차 자료를 정리하세요.',
      },
      {
        question: '추행할 의도가 없었는데 처벌되나요?',
        answer:
          '<strong>추행을 용인하는 내심의 의사가 없으면 고의가 부정될 수 있는 영역입니다.</strong> 접촉 경위와 동선·정황을 정리하세요.',
      },
      {
        question: '손님 진술만으로 사건이 진행돼요.',
        answer:
          '<strong>유일 진술은 합리적 의심 없는 신빙성이 있어야 유죄로 판단되는 영역입니다.</strong> 진술 모순·객관적 정황 불부합을 모으세요.',
      },
      {
        question: '매장이 붐벼 정황이 어수선했어요.',
        answer:
          '<strong>혼잡·소란 등 객관적 상황은 고의·정황 판단에 고려되는 영역입니다.</strong> 혼잡 정황과 CCTV·동료 진술을 확보하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>접객 경위·동선에 관한 진술의 일관성이 중요한 영역입니다.</strong> 관련 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'sex-crime 도메인 허브', href: '/guide/sex-crime' },
      { label: '마사지샵 손님 추행 무고 방어', href: '/guide/sex-crime/sex-crime-massage-shop-customer-accusation-falsely-accused-defense' },
      { label: '회식 술자리 접촉 무고 방어', href: '/guide/sex-crime/sex-crime-afterwork-drink-contact-falsely-accused-defense' },
      { label: '블랙아웃 만취 무고 방어', href: '/guide/sex-crime/sex-crime-blackout-drunk-falsely-accused-defense' },
      { label: '성범죄 무고 대응 절차', href: '/guide/sex-crime/sex-crime-false-accusation-process' },
    ],
  },
];
