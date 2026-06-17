import { SpokePage } from '../spoke-pages';

// batch100 fraud(6) + sex-crime(4) — 10개 (2026-06-17)
//
// 고유 존재 이유:
// 1. fraud-crowdfunding-reward-undelivered-track — 일반 후원·환불 분쟁과 분기. '크라우드펀딩에 후원했는데 리워드를 제공하지 않고 잠적' 리워드 미제공 편취 판단형 트랙(victim).
// 2. fraud-concert-ticket-transfer-track — 일반 양도 분쟁과 분기. '콘서트 티켓을 양도받기로 입금했는데 티켓이 오지 않음' 티켓 양도 미전달 편취 절차형 트랙(victim).
// 3. fraud-pet-adoption-false-listing-track — 일반 분양 분쟁과 분기. '반려동물 분양 허위매물에 분양비를 입금했는데 동물도 분양도 없음' 허위매물 편취 판단형 트랙(victim).
// 4. fraud-gym-pt-prepay-closure-track — 일반 환불 분쟁과 분기. '헬스장 PT를 장기 선결제했는데 곧 폐업해 잠적' 선결제 폐업 편취 판단형 트랙(victim).
// 5. fraud-overseas-purchase-agent-track — 일반 배송지연 분쟁과 분기. '해외직구 대행에 물품대금을 입금했는데 미배송·잠적' 대행 미배송 편취 절차형 트랙(victim).
// 6. fraud-coin-staking-yield-falsely-accused-defense — 일반 사기 무고류와 분기. '코인 스테이킹 수익을 약속했다 손실 후 사기로 고소당함' 편취 고의·투자손실 방어 판단형 트랙(accused).
// 7. sex-crime-city-bus-crowd-track — 일반 추행류와 분기. '시내버스 혼잡 속 옆·뒤 사람이 신체를 만짐' 혼잡 추행 해당성 판단형 트랙(victim).
// 8. sex-crime-water-park-track — 일반 추행류와 분기. '워터파크·물놀이장에서 신체를 접촉당함' 물놀이장 추행 해당성·상당성 일탈 판단형 트랙(victim).
// 9. sex-crime-medical-exam-pretext-track — 일반 진료 분쟁과 분기. '진료를 빙자해 내밀한 부위를 만짐' 진료 빙자 추행 해당성 판단형 트랙(victim).
// 10. sex-crime-noraebang-room-falsely-accused-defense — 일반 성범죄 무고류와 분기. '노래방 회식 자리 접촉을 강제추행으로 고소당함' 추행 고의·기습추행 방어 판단형 트랙(accused).

export const spokesBatch100FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-crowdfunding-reward-undelivered-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crowdfunding-reward-undelivered-track',
    keyword: '크라우드펀딩 리워드 미제공 사기',
    questionKeyword: '크라우드펀딩 플랫폼에서 ‘목표를 달성하면 정해진 일정에 리워드를 보내준다’는 프로젝트를 믿고 후원금을 결제했는데, 약속한 발송일이 지나도 리워드가 오지 않고 ‘생산 지연, 곧 발송한다’는 공지만 반복하다 결국 진행자가 연락을 끊고 잠적했어요. 처음부터 리워드를 만들거나 보낼 의사·능력 없이 후원금만 모을 생각이었던 것 같은데, 이런 크라우드펀딩 리워드 미제공을 사기로 신고하고 후원금을 돌려받을 수 있나요?',
    ctaKeyword: '크라우드펀딩 리워드 미제공 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '크라우드펀딩 리워드 미제공 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '크라우드펀딩에 후원했는데 리워드를 안 보내고 진행자가 잠적당했다면, 형법 제347조 사기·리워드 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「크라우드펀딩 플랫폼에서 ‘목표 금액을 달성하면 정해진 일정에 신제품·굿즈·서비스 리워드를 보내준다’는 매력적인 프로젝트 소개를 믿고, 적지 않은 금액을 후원으로 결제한 분의 상황입니다. 그런데 약속한 발송일이 지나도 리워드가 오지 않고 ‘부품 수급 문제, 생산 지연, 다음 달엔 꼭 발송한다’는 공지만 며칠씩 반복되다가, 결국 진행자가 업데이트를 멈추고 문의에 답하지 않으며 연락처·계정을 닫아, 처음부터 리워드를 만들거나 보낼 의사·능력 없이 후원금만 모아 챙길 생각이었던 건 아닌지 의심되고 막막하실 거예요. 응원하는 마음으로 후원했는데 돈도 물건도 없어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받거나 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 리워드를 제공할 의사·능력 없이 정상 프로젝트처럼 가장해 후원금을 모았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 기망으로 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 일부 지급되었더라도 편취액은 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역으로, 후원금 전부를 기준으로 편취 여부를 가려 다툴 여지가 있습니다. 리워드 미제공 + 후원금 결제 + 잠적 결합은 ‘리워드 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 프로젝트·후원 정리 ② 미제공·기망 ③ 편취·손해액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 크라우드펀딩 리워드 미제공 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 프로젝트·미제공·손해액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 프로젝트·후원 정리</strong> — 펀딩 페이지·리워드 약속·발송 일정·결제 내역 정리.</li>\n<li><strong>② 미제공·기망</strong> — 리워드를 제공할 의사·능력 없이 후원금을 모았는지 검토.</li>\n<li><strong>③ 편취·손해액</strong> — 교부한 후원금 전부 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 플랫폼 환불·계좌 지급정지·민사 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 발송 지연과 달리, 리워드를 제공할 의사·능력 없이 후원금만 모았는지가 판단의 분기점입니다. 펀딩 페이지·리워드 약속과 발송 핑계·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 프로젝트·결제 자료 보존 (즉시)</strong> — 펀딩 페이지·리워드 약속·발송 일정·결제 영수증 캡처 보존.</li>\n<li><strong>2단계 — 미제공·잠적 입증 (즉시)</strong> — 발송 핑계 공지·문의 무응답·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 환불·반환 요구 (병행)</strong> — 플랫폼 환불 요청과 진행자에게 후원금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 대금·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">크라우드펀딩 리워드 미제공 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 프로젝트·미제공·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>펀딩 페이지·프로젝트 소개 캡처 (약속 내용)</strong></li>\n<li><strong>리워드 구성·발송 일정 안내 (조건)</strong></li>\n<li><strong>후원 결제 영수증·내역 (피해 금액)</strong></li>\n<li><strong>발송 지연·핑계 공지·업데이트 캡처 (기망 정황)</strong></li>\n<li><strong>문의 무응답·연락 두절 기록</strong></li>\n<li><strong>진행자·계정·계좌·플랫폼 정보</strong></li>\n<li><strong>플랫폼 환불 요청·접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 펀딩 페이지와 리워드 약속은 삭제·비공개로 사라질 수 있으니 곧바로 캡처해두는 것이 중요합니다. 발송 핑계 공지와 잠적 정황을 함께 잡으면 후원금만 모았는지 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미제공·기망</strong> — 리워드를 제공할 의사·능력 없이 후원금을 모았는지.</li>\n<li><strong>편취 범의</strong> — 단순 사업 실패인지 처음부터 편취였는지.</li>\n<li><strong>편취액</strong> — 교부한 후원금 전부가 피해액인지.</li>\n<li><strong>플랫폼 책임</strong> — 환불·중개 책임을 어디까지 물을 수 있는지.</li>\n<li><strong>진행자 특정</strong> — 진행자·계정·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·후원 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취액은 교부받은 금원 전부',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서 기망으로 인한 금원 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하고, 상당한 대가가 일부 지급되었거나 전체 재산상 손해가 없더라도 편취액은 대가를 공제한 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 리워드를 빌미로 후원금을 받고 제공하지 않은 사안을 살펴볼 때에도 후원금 전부를 기준으로 편취액을 검토해볼 수 있습니다.',
        takeaway: '리워드 미제공 + 후원금 결제 + 잠적 결합 시 리워드 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '발송이 늦는 것뿐 아닌가요?',
        answer:
          '<strong>리워드를 제공할 의사·능력 없이 후원금만 모았는지가 핵심인 영역입니다.</strong> 약속 일정과 발송 핑계 공지를 확보하세요.',
      },
      {
        question: '대가로 일부라도 받았으면 사기가 아닌가요?',
        answer:
          '<strong>편취액은 차액이 아니라 교부한 후원금 전부로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '진행자가 사업 실패라고 주장하면요?',
        answer:
          '<strong>단순 실패인지 처음부터 편취였는지가 다툼점인 영역입니다.</strong> 처음 약속과 자금 사용 정황을 모으세요.',
      },
      {
        question: '플랫폼에 환불을 요구할 수 있나요?',
        answer:
          '<strong>플랫폼 환불·중개 책임을 함께 검토할 수 있는 영역입니다.</strong> 환불 정책과 접수 기록을 남기세요.',
      },
      {
        question: '진행자가 계정을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 2. fraud-concert-ticket-transfer-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-transfer-track',
    keyword: '콘서트 티켓 양도 미전달 사기',
    questionKeyword: '콘서트·공연·스포츠 경기 티켓을 ‘좋은 자리를 양도하겠다’는 글을 믿고 SNS·중고거래로 양도받기로 하고 티켓값을 먼저 입금했는데, 입금 뒤에 양도자가 ‘예매 취소가 안 된다, 곧 보내준다’는 핑계만 반복하다 결국 티켓도 안 보내고 연락이 끊겼어요. 알고 보니 같은 티켓을 여러 명에게 팔았거나 처음부터 양도할 티켓이 없었던 것 같은데, 이런 티켓 양도 미전달을 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '콘서트 티켓 양도 미전달 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 양도 미전달 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '콘서트 티켓 양도값을 먼저 입금했는데 티켓이 안 오고 양도자가 잠적당했다면, 형법 제347조 사기의 티켓 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「콘서트·공연·스포츠 경기 티켓을 구하지 못해 애태우다, ‘피치 못할 사정으로 못 가게 됐다, 좋은 자리를 정가에 양도하겠다’는 SNS·중고거래·티켓 양도 게시글을 믿고, 양도자에게 티켓값을 먼저 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘예매처에서 명의 변경이 막혔다, 본인 인증이 늦어진다, 공연 직전에 꼭 보내준다’는 핑계가 며칠씩 반복되다가, 결국 티켓도 보내지 않고 양도자가 계정·연락처를 닫고 사라져, 알고 보니 같은 좌석을 여러 명에게 팔았거나 처음부터 양도할 티켓 자체가 없었던 건 아닌지 의심되고 막막하실 거예요. 공연 날짜는 다가오는데 돈도 티켓도 없어 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 양도할 티켓이나 이행 의사 없이 정상 양도처럼 가장해 티켓값을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 편취의 범의는 자백이 없는 한 범행 전후 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단하고, 지급기일에 결제되지 않으리라는 점을 예견하면서 이를 고지하지 않고 속여 금원을 받은 경우 사기죄가 성립한다고 본 사례 흐름이 있는 영역으로, 거래 이행 과정과 미필적 고의를 가려 다툴 여지가 있습니다. 티켓 양도 + 선입금 + 미전달·잠적 결합은 ‘티켓 양도 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미전달·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 티켓 양도 미전달 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미전달·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 양도 게시글·좌석·양도가·입금·전달 약속 정리.</li>\n<li><strong>② 미전달·기망</strong> — 양도할 티켓·이행 의사 없이 티켓값을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 입금한 티켓값·수수료 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 지연과 달리, 양도할 티켓이나 이행 의사 없이 선입금만 받았는지가 사기 판단의 분기점입니다. 양도 게시글·전달 약속과 미전달·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 양도 게시글·좌석·양도가·전달 약속 대화·입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미전달·잠적 입증 (즉시)</strong> — 전달 핑계 반복·이중 양도 정황·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 티켓 양도 미전달 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미전달·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>티켓 양도 게시글·좌석·양도가 캡처 (거래 조건)</strong></li>\n<li><strong>전달 약속·명의변경 안내 대화 (기망 정황)</strong></li>\n<li><strong>티켓값·수수료 입금 내역 (피해 금액)</strong></li>\n<li><strong>전달 핑계 반복·미전달 정황 기록</strong></li>\n<li><strong>이중 양도·다른 구매자 정황 자료</strong></li>\n<li><strong>양도자 계정·닉네임·연락처 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대화·게시글은 삭제·차단으로 사라지기 쉬우니 좌석·양도가·전달 약속이 보이게 곧바로 캡처해두는 것이 중요합니다. 송금 직후 지급정지를 요청하면 회수 가능성을 높이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미전달·기망</strong> — 양도할 티켓·이행 의사 없이 입금을 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 거래 지연인지 처음부터 편취였는지.</li>\n<li><strong>이중 양도</strong> — 같은 좌석을 여러 명에게 팔았는지.</li>\n<li><strong>편취액</strong> — 입금한 티켓값·수수료 전부가 피해액인지.</li>\n<li><strong>양도자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·양도 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의와 미필적 고의의 판단',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 편취 범의는 자백이 없는 한 범행 전후 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단하고 미필적 고의로도 족하며, 지급기일에 결제되지 않으리라는 점을 예견하거나 확신이 없으면서도 이를 고지하지 않고 속여 금원을 받았다면 사기죄가 성립한다고 판시했습니다. 양도 약속만 하고 티켓값을 받아 전달하지 않은 사안을 살펴볼 때에도 거래 이행과정과 미필적 고의를 검토해볼 수 있습니다.',
        takeaway: '티켓 양도 + 선입금 + 미전달·잠적 결합 시 티켓 양도 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '명의변경이 막혀 못 보낸 것뿐 아닌가요?',
        answer:
          '<strong>이행 의사·능력 없이 선입금만 받았는지가 핵심인 영역입니다.</strong> 전달 약속과 핑계 반복 정황을 확보하세요.',
      },
      {
        question: '같은 좌석을 여러 명에게 판 것 같아요.',
        answer:
          '<strong>이중 양도 정황은 편취 다툼의 출발점인 영역입니다.</strong> 다른 구매자·게시글 정황을 모으세요.',
      },
      {
        question: '입금만 하면 사기 입증이 어렵나요?',
        answer:
          '<strong>거래 이행과정과 미필적 고의를 종합해 판단하는 영역입니다.</strong> 약속·핑계·잠적 흐름을 시간순으로 정리하세요.',
      },
      {
        question: '입금한 티켓값 전부를 받을 수 있나요?',
        answer:
          '<strong>입금한 티켓값·수수료 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
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
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '로맨스스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 3. fraud-pet-adoption-false-listing-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-adoption-false-listing-track',
    keyword: '반려동물 분양 허위매물 사기',
    questionKeyword: '강아지·고양이를 분양받으려고 SNS·중고거래·분양 사이트에서 ‘건강하고 예방접종 마친 아이다, 분양비를 입금하면 안전하게 보내준다’는 글을 믿고 분양비·운송비를 먼저 입금했는데, 입금 뒤에 ‘추가 비용, 운송 보증금이 필요하다’며 돈을 더 요구하거나 결국 동물도 안 보내고 연락이 끊겼어요. 처음부터 분양할 동물 없이 사진만 올려 분양비만 챙긴 것 같은데, 이런 반려동물 허위매물 분양을 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '반려동물 분양 허위매물 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '반려동물 분양 허위매물 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '반려동물 분양비를 입금했는데 동물은 안 오고 추가비만 요구·잠적당했다면, 형법 제347조 사기의 허위매물 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「강아지·고양이 등 반려동물을 가족으로 맞으려고, SNS·중고거래·분양 사이트에서 ‘예방접종을 마친 건강한 아이다, 사진처럼 예쁜 아이를 분양비만 입금하면 안전하게 보내준다’는 귀여운 사진과 글을 믿고, 분양비·운송비를 먼저 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘예방접종 추가 비용, 항공·운송 보증금, 케이지 비용이 필요하다, 나중에 전액 환불된다’며 자꾸 돈을 더 요구하거나, 결국 약속한 날에 동물을 보내지 않고 사진 속 아이는 처음부터 없었던 것처럼 연락을 끊어, 분양할 동물 없이 인터넷에서 떠도는 사진만 올려 분양비·추가비만 챙긴 건 아닌지 의심되고 막막하실 거예요. 새 가족을 기다린 마음까지 무너져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 분양할 동물이나 이행 의사 없이 정상 분양처럼 가장해 분양비·추가비를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 사기죄의 편취 범의는 자백이 없는 한 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단하고, 도급·물품 거래에서 일을 완성하거나 물품을 인도할 의사·능력 없이 거짓말로 대금을 받을 고의가 있었는지를 기준으로 한다고 본 사례 흐름이 있는 영역으로, 분양 이행 의사와 추가비 요구의 의도를 가려 다툴 여지가 있습니다. 허위매물 + 분양비 선입금 + 추가비·잠적 결합은 ‘허위매물 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미이행·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 분양 허위매물 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미이행·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 분양 게시글·사진·분양비·운송비·추가비·입금 내역 정리.</li>\n<li><strong>② 미이행·기망</strong> — 분양할 동물·이행 의사 없이 분양비를 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 분양비·운송비·추가비 교부 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 무산과 달리, 분양할 동물이나 이행 의사 없이 사진만으로 분양비·추가비를 받았는지가 사기 판단의 분기점입니다. 분양 게시글·사진과 추가비 요구·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 분양 게시글·사진·대화·분양비·추가비 입금 내역 캡처 보존.</li>\n<li><strong>2단계 — 미이행·추가비 입증 (즉시)</strong> — 추가비 요구·미배송·연락 두절·사진 도용 정황을 시간순으로 확보.</li>\n<li><strong>3단계 — 반환 요구 (병행)</strong> — 분양자에게 분양비·추가비 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 분양 허위매물 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미이행·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양 게시글·동물 사진·소개 캡처 (거래 조건)</strong></li>\n<li><strong>분양·운송·환불 약속 대화 (기망 정황)</strong></li>\n<li><strong>분양비·운송비·추가비 입금 내역 (피해 금액)</strong></li>\n<li><strong>추가비 요구·미배송 정황 기록</strong></li>\n<li><strong>사진 도용·동일 사진 재게시 정황 자료</strong></li>\n<li><strong>분양자 계정·닉네임·연락처 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 동물 사진이 여러 글에 떠돌거나 인터넷에서 검색되는 정황을 함께 잡으면 사진만 올려 분양비를 받았는지 기망 정황이 선명해집니다. 추가비 요구가 반복되면 입금을 멈추고 정황을 기록하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미이행·기망</strong> — 분양할 동물·이행 의사 없이 분양비를 받았는지.</li>\n<li><strong>추가비 요구</strong> — 운송 보증금 등 추가 요구가 편취 수법인지.</li>\n<li><strong>사진 도용</strong> — 동물 사진을 도용·재사용했는지.</li>\n<li><strong>편취액</strong> — 분양비·추가비 전부가 피해액인지.</li>\n<li><strong>분양자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (온라인 거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래에서 편취의 고의 판단 기준',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 본질이 기망행위에 의한 재물·재산상 이익의 취득에 있고, 편취의 범의는 자백이 없는 한 재력·환경·거래 이행과정 등 객관적 사정을 종합해 판단하며, 거래에서 편취의 성립 여부는 계약 당시를 기준으로 이행할 의사·능력 없이 거짓말로 대가를 받을 고의가 있었는지에 따라 판단해야 한다고 판시했습니다. 분양할 동물 없이 분양비를 받은 사안을 살펴볼 때에도 이행 의사·능력과 편취 고의를 검토해볼 수 있습니다.',
        takeaway: '허위매물 + 분양비 선입금 + 추가비·잠적 결합 시 허위매물 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '단순 거래 무산 아닌가요?',
        answer:
          '<strong>분양할 동물·이행 의사 없이 분양비만 받았는지가 핵심인 영역입니다.</strong> 게시글·사진·약속 대화를 확보하세요.',
      },
      {
        question: '운송 보증금을 더 달라고 해요.',
        answer:
          '<strong>추가비 반복 요구는 흔한 편취 수법으로 다뤄지는 영역입니다.</strong> 입금을 멈추고 요구 내역을 기록하세요.',
      },
      {
        question: '사진 속 동물이 진짜인지 모르겠어요.',
        answer:
          '<strong>사진 도용·재사용 정황은 기망 다툼의 출발점인 영역입니다.</strong> 동일 사진이 떠도는 정황을 모으세요.',
      },
      {
        question: '분양비·추가비 전부가 피해인가요?',
        answer:
          '<strong>교부한 분양비·운송비·추가비 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '분양자가 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '로맨스스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
    ],
  },

  // ─── 4. fraud-gym-pt-prepay-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-pt-prepay-closure-track',
    keyword: '헬스장 PT 선결제 폐업 사기',
    questionKeyword: '헬스장·PT샵에서 ‘장기로 등록하면 크게 할인된다, 트레이너가 끝까지 책임진다’는 권유를 믿고 PT 수십 회·연 단위 이용권을 한꺼번에 선결제했는데, 얼마 지나지 않아 갑자기 문을 닫고 환불도 없이 운영자가 연락을 끊었어요. 알고 보니 폐업이 임박한 걸 알면서도 막판에 선결제를 더 받아 챙긴 것 같은데, 이런 헬스장 PT 선결제 폐업을 사기로 신고하고 남은 이용권 값을 돌려받을 수 있나요?',
    ctaKeyword: '헬스장 PT 선결제 폐업 편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 선결제 폐업 사기 — 5단계 편취 점검 | 로앤가이드',
      description:
        '헬스장 PT를 장기 선결제했는데 곧 폐업하고 환불 없이 잠적당했다면, 형법 제347조 사기의 폐업 임박 편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「헬스장·PT샵·필라테스 스튜디오에서 ‘지금 장기로 등록하면 회당 단가가 크게 내려간다, 담당 트레이너가 끝까지 책임지고 관리해준다, 이벤트가 곧 끝난다’는 권유를 믿고, PT 수십 회권·연 단위 이용권을 한꺼번에 선결제한 분의 상황입니다. 그런데 결제하고 얼마 지나지 않아 시설이 갑자기 문을 닫거나 트레이너가 그만두고, 남은 횟수·이용권에 대한 환불도 없이 운영자가 연락을 끊어, 알고 보니 임대료 연체·폐업이 임박한 사정을 알면서도 막판에 회원들에게 선결제·재등록을 더 받아 챙긴 건 아닌지 의심되고 막막하실 거예요. 건강을 챙기려 큰돈을 미리 냈는데 시설도 돈도 사라져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상 운영이 어려운 사정을 알면서도 이를 숨기고 정상 영업처럼 가장해 선결제를 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 공사·용역 대금 편취 사기의 성립 여부는 계약 당시를 기준으로 일을 완성할 의사·능력 없이 완성할 것처럼 속였는지에 따라 판단하고, 행정법규 위반 등 사정만으로 곧바로 기망으로 단정하지 않고 계약 내용과 이행과정을 종합해 살펴야 한다고 본 사례 흐름이 있는 영역으로, 폐업 인식 시점과 이행 의사를 가려 다툴 여지가 있습니다. 폐업 임박 + 선결제 권유 + 환불 없는 폐업 결합은 ‘폐업 임박 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 등록·결제 정리 ② 폐업 인식·기망 ③ 편취·잔여액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 PT 선결제 폐업 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·폐업 인식·잔여액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등록·결제 정리</strong> — 계약서·이용권·PT 횟수·결제·이용 내역 정리.</li>\n<li><strong>② 폐업 인식·기망</strong> — 폐업이 임박한 사정을 알면서 선결제를 받았는지 검토.</li>\n<li><strong>③ 편취·잔여액</strong> — 미사용 횟수·잔여 이용권 가치 기준 손해 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 카드 항변·지급정지·피해자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 폐업·환불 지연과 달리, 폐업이 임박한 사정을 알면서 숨기고 막판에 선결제를 받았는지가 사기 판단의 분기점입니다. 결제 시점과 폐업 시점의 간격·정황을 함께 확인해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등록·결제 자료 보존 (즉시)</strong> — 계약서·이용권·PT 횟수·결제 영수증·이용 기록 보존.</li>\n<li><strong>2단계 — 폐업 인식 정황 입증 (즉시)</strong> — 막판 결제 권유·임대료 연체·폐업 임박 정황을 확보.</li>\n<li><strong>3단계 — 카드 항변·반환 요구 (병행)</strong> — 카드사 할부항변·환불 요구를 진행.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 지급정지·피해자 공동 신고·민사 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 PT 선결제 폐업 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 등록·폐업 인식·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>이용 계약서·이용권·PT 횟수 약정 (계약 조건)</strong></li>\n<li><strong>선결제·할부 결제 영수증·내역 (피해 금액)</strong></li>\n<li><strong>막판 등록·재결제 권유 대화 (기망 정황)</strong></li>\n<li><strong>이용 횟수·잔여 횟수 확인 자료 (잔여액)</strong></li>\n<li><strong>폐업·휴업 공지·임대료 연체 정황 자료</strong></li>\n<li><strong>같은 시설 다른 피해 회원·후기 자료</strong></li>\n<li><strong>운영자·사업자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 시점과 폐업 시점의 간격이 짧을수록 폐업을 알면서 선결제를 받았는지 기망 정황이 선명해집니다. 할부 결제라면 카드사 할부항변권으로 잔여 회차 청구를 막을 수 있는지 함께 확인하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 인식</strong> — 폐업 임박을 알면서 선결제를 받았는지.</li>\n<li><strong>편취 범의</strong> — 단순 경영 악화인지 처음부터 편취였는지.</li>\n<li><strong>잔여액</strong> — 미사용 횟수·이용권 가치를 어떻게 산정할지.</li>\n<li><strong>카드 항변</strong> — 할부항변권으로 잔여 회차를 막을 수 있는지.</li>\n<li><strong>운영자 특정</strong> — 운영자·사업자·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (선결제·폐업 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (할부항변·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 용역 대금 편취의 고의 판단 기준',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 공사·용역 대금 편취에 의한 사기죄의 성립 여부는 계약 당시를 기준으로 일을 완성할 의사·능력 없이 완성할 것처럼 거짓말로 대금을 받을 고의가 있었는지에 따라 판단하고, 관련 영업·업무를 규제하는 행정법규 위반 등 사정만으로 곧바로 기망행위로 단정해서는 안 되며 계약 내용·이행과정을 종합해 살펴야 한다고 판시했습니다. 폐업을 알면서 선결제를 받은 사안을 살펴볼 때에도 계약 당시 이행 의사·능력과 편취 고의를 검토해볼 수 있습니다.',
        takeaway: '폐업 임박 + 선결제 권유 + 환불 없는 폐업 결합 시 폐업 임박 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '경영이 나빠 폐업한 것뿐 아닌가요?',
        answer:
          '<strong>폐업 임박을 알면서 숨기고 선결제를 받았는지가 핵심인 영역입니다.</strong> 결제 시점과 폐업 시점 간격을 확인하세요.',
      },
      {
        question: '막판에 재등록을 강하게 권유받았어요.',
        answer:
          '<strong>폐업 직전 결제 권유 정황은 기망 다툼의 출발점인 영역입니다.</strong> 권유 대화와 결제 시점을 정리하세요.',
      },
      {
        question: '남은 횟수만큼 돌려받을 수 있나요?',
        answer:
          '<strong>미사용 횟수·잔여 이용권 가치를 손해로 검토할 수 있는 영역입니다.</strong> 이용·잔여 횟수 자료를 정돈하세요.',
      },
      {
        question: '카드 할부로 결제했는데 도움이 되나요?',
        answer:
          '<strong>할부항변권으로 잔여 회차 청구를 막을 수 있는지 검토되는 영역입니다.</strong> 카드사에 항변을 문의하세요.',
      },
      {
        question: '같은 헬스장 피해 회원이 여럿이에요.',
        answer:
          '<strong>동일 시설 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 회원별 계약·결제 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '회원권 선결제 폐업 추적', href: '/guide/fraud/fraud-membership-prepay-closure-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
    ],
  },

  // ─── 5. fraud-overseas-purchase-agent-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-purchase-agent-track',
    keyword: '해외직구 대행 미배송 사기',
    questionKeyword: '해외 명품·한정판·가전을 ‘싸게 대신 사다 준다’는 해외직구 대행·구매대행을 믿고 물품대금·대행수수료·관세를 먼저 입금했는데, 입금 뒤에 ‘세관에 걸렸다, 추가 비용이 필요하다, 곧 배송된다’는 핑계만 반복하다 결국 물건도 안 오고 대행자가 연락을 끊었어요. 처음부터 구매·배송할 의사 없이 대금만 받아 챙긴 것 같은데, 이런 해외직구 대행 미배송을 사기로 신고하고 입금한 돈을 돌려받을 수 있나요?',
    ctaKeyword: '해외직구 대행 미배송 편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외직구 대행 미배송 사기 — 5단계 환급 점검 | 로앤가이드',
      description:
        '해외직구 대행에 물품대금을 입금했는데 미배송·추가비만 요구·잠적당했다면, 형법 제347조 사기의 대행 편취 판단과 지급정지·환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「해외 명품·한정판·가전·건강식품을 정식 구매처보다 싸게 구하려고, ‘우리가 현지에서 대신 사다 준다, 정품을 안전하게 배송한다’는 해외직구 대행·구매대행·공동구매 글을 믿고, 물품대금·대행수수료·예상 관세를 먼저 입금한 분의 상황입니다. 그런데 입금하고 나니 ‘세관에 걸렸다, 환율·관세가 올라 추가 비용이 필요하다, 통관이 늦어져 곧 배송된다’는 핑계가 며칠씩 반복되고, 추가 입금을 하면 또 다른 명목으로 돈을 요구하다가, 결국 물건도 보내지 않고 대행자가 계정·채팅방을 닫고 사라져, 처음부터 구매·배송할 의사 없이 대금과 추가비만 받아 챙길 생각이었던 건 아닌지 의심되고 막막하실 거예요. 싸게 사려다 큰돈만 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 구매·배송할 의사 없이 정상 대행처럼 가장해 대금을 받았다면 기망행위로 평가될 여지가 있는 영역입니다. 판례는 기망행위로 스스로 재물을 취득하지 않고 제3자에게 재물을 교부받게 한 경우에도 일정 요건에서 사기죄가 성립하고, 재물 편취 사기는 기망으로 재물 교부가 있으면 그 자체로 재산침해가 되어 이익 귀속과 무관하게 성립한다고 본 사례 흐름이 있는 영역으로, 대금이 누구에게 흘러갔는지와 무관하게 편취를 가려 다툴 여지가 있습니다. 대행 미배송 + 선입금 + 추가비·잠적 결합은 ‘대행 미배송 편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미배송·기망 ③ 편취액 ④ 형사 신고 ⑤ 지급정지·환급 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외직구 대행 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미배송·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 대행 게시글·주문·물품대금·수수료·추가비·입금 내역 정리.</li>\n<li><strong>② 미배송·기망</strong> — 구매·배송할 의사 없이 대금을 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 물품대금·수수료·추가비 교부 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 지급정지·환급</strong> — 송금 계좌 지급정지·민사 반환 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 구매·배송할 의사 없이 대금과 추가비만 받았는지가 사기 판단의 분기점입니다. 주문·결제와 통관 핑계·추가비 요구·잠적 기록을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 대행 게시글·주문·대금·추가비 입금 내역·대화 캡처 보존.</li>\n<li><strong>2단계 — 미배송·추가비 입증 (즉시)</strong> — 통관 핑계·추가비 요구·운송장 부존재·연락 두절을 시간순으로 확보.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌 지급정지를 신속히 요청.</li>\n<li><strong>4단계 — 경찰 신고 (1주)</strong> — 사이버범죄 신고 ECRM 접수, 대한법률구조공단 132 상담을 검토해볼 수 있습니다.</li>\n<li><strong>5단계 — 환급·반환 (2개월 내)</strong> — 계좌 지급정지·민사 반환·손해배상 청구를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외직구 대행 미배송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>대행 게시글·주문서·상품 소개 캡처 (거래 조건)</strong></li>\n<li><strong>배송·통관·환불 약속 대화 (기망 정황)</strong></li>\n<li><strong>물품대금·수수료·추가비 입금 내역 (피해 금액)</strong></li>\n<li><strong>통관 핑계·추가비 요구·운송장 부존재 기록</strong></li>\n<li><strong>같은 대행 다른 피해자·후기 정황 자료</strong></li>\n<li><strong>대행자 계정·닉네임·채팅방 정보</strong></li>\n<li><strong>송금 계좌·지급정지 접수 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진짜 통관이라면 운송장·세관 통관 내역이 나오므로, 운송장이 없는데 추가비만 요구하는 정황을 잡으면 구매·배송 의사가 없었는지 다투는 데 도움이 됩니다. 추가비 요구가 반복되면 입금을 멈추세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미배송·기망</strong> — 구매·배송할 의사 없이 대금을 받았는지.</li>\n<li><strong>추가비 요구</strong> — 통관·관세 명목 추가 요구가 편취 수법인지.</li>\n<li><strong>대금 귀속</strong> — 대금이 제3자에게 흘러도 편취가 성립하는지.</li>\n<li><strong>편취액</strong> — 물품대금·수수료·추가비 전부가 피해액인지.</li>\n<li><strong>대행자 특정</strong> — 계정·닉네임·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (해외구매대행 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 교부형 재물 편취 사기의 성립',
        summary:
          '대법원 2008도9985(대법원, 2009.01.30 선고) 영역에서 법원은 기망행위로 스스로 재물을 취득하지 않고 제3자에게 재물을 교부받게 한 경우에도 일정 요건에서 사기죄가 성립하고, 재물 편취를 내용으로 하는 사기죄는 기망으로 재물 교부가 있으면 그 자체로 피해자의 재산침해가 되어 사기죄가 성립하며 그 이익이 결과적으로 누구에게 귀속하는지는 성부에 영향이 없다고 판시했습니다. 대행 대금이 어디로 흘러갔는지와 무관하게 미배송 편취를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '대행 미배송 + 선입금 + 추가비·잠적 결합 시 대행 미배송 편취 검토 영역 — 변호인 상담·고소 검토 권장.',
      },
    ],
    faq: [
      {
        question: '통관이 늦는 것뿐 아닌가요?',
        answer:
          '<strong>구매·배송할 의사 없이 대금만 받았는지가 핵심인 영역입니다.</strong> 운송장 유무와 통관 핑계를 확인하세요.',
      },
      {
        question: '관세·추가비를 자꾸 더 달라고 해요.',
        answer:
          '<strong>추가비 반복 요구는 흔한 편취 수법으로 다뤄지는 영역입니다.</strong> 입금을 멈추고 요구 내역을 기록하세요.',
      },
      {
        question: '대금이 다른 사람 계좌로 갔어요.',
        answer:
          '<strong>대금 귀속과 무관하게 편취가 성립할 수 있는 영역입니다.</strong> 계좌·송금 흐름을 정리하세요.',
      },
      {
        question: '입금한 돈 전부를 받을 수 있나요?',
        answer:
          '<strong>물품대금·수수료·추가비 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '대행자가 채팅방을 닫고 잠적했어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 송금 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '명품 가품 정품 추적', href: '/guide/fraud/fraud-fake-luxury-genuine-track' },
      { label: '로맨스스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 6. fraud-coin-staking-yield-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-coin-staking-yield-falsely-accused-defense',
    keyword: '코인 스테이킹 수익 사기 고소 무고',
    questionKeyword: '지인·투자방에서 코인 스테이킹·예치로 수익을 낼 수 있다고 함께 투자했다가 시세 급락으로 손실이 나자, 같이 넣었던 사람이 ‘처음부터 수익이 보장된다며 속여 돈을 받았다’며 저를 사기로 고소했어요. 저는 실제로 같은 상품에 함께 투자했고 수익도 손실도 시장 상황에 따른 것이라 편취할 의도가 없었는데, 투자 손실 다툼이 형사 사기 사건이 돼 막막합니다. 이런 사실과 다른 사기 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '코인 스테이킹 수익 사기 무고 편취 고의·투자손실 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '코인 스테이킹 수익 사기 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '코인 스테이킹 투자 손실을 사기로 고소당했다면, 형법 제347조 편취 고의와 투자 손실·민사 분쟁의 구분을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「지인·투자 단체방·SNS에서 코인 스테이킹·예치·디파이로 수익을 낼 수 있다는 정보를 나누다가, 함께 자금을 모아 투자했는데 시세 급락·플랫폼 사정으로 손실이 나자, 같이 투자했던 사람이 ‘처음부터 수익이 보장된다며 속여 돈을 받았다’며 본인을 사기로 고소·고발해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 자신도 같은 상품에 실제로 자금을 넣었고, 수익도 손실도 시장 상황과 코인 가격 변동에 따른 것이며, 위험성을 함께 인지한 상태에서 투자한 것이지 처음부터 편취할 의도가 없었다고 기억하는데, 투자 손실 다툼이 형사 사기 사건으로 번져 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 같이 잃은 입장인데 가해자로 몰리고 형사 전과 위험까지 더해져 더 답답하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 투자를 권유하거나 자금을 받을 당시 편취의 고의가 있었는지, 손실이 시장 변동에 따른 투자 손실·민사 분쟁에 그치는지가 핵심 쟁점입니다. 판례는 사기죄의 편취 고의는 자백이 없는 한 재력·환경·범행 내용·거래 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단하고, 단순 채무불이행만으로 곧바로 편취 고의를 인정할 수 없다고 본 사례 흐름이 있는 영역으로, 본인도 함께 투자한 정황과 위험 고지를 들어 편취 고의를 다툴 수 있습니다. 공동 투자 + 시세 손실 + 편취 고의 부재 결합은 ‘편취 고의·투자손실’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 투자·자금 정리 ② 편취 고의 ③ 손실 성격 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 스테이킹 수익 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 투자·편취 고의·손실 성격·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 투자·자금 정리</strong> — 투자 권유·위험 고지·본인 투자·자금 흐름 내역 정리.</li>\n<li><strong>② 편취 고의</strong> — 자금을 받을 당시 편취의 고의가 있었는지 검토.</li>\n<li><strong>③ 손실 성격</strong> — 시세 변동에 따른 투자 손실·민사 분쟁에 그치는지 검토.</li>\n<li><strong>④ 정황·증거</strong> — 투자 내역·시세·위험 고지 대화로 정황 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 손실이 났다는 것만으로 곧 사기가 되는 것이 아니라, 자금을 받을 당시 편취 고의가 있었는지와 손실이 시장 변동에 따른 투자 손실인지가 분기점입니다. 본인도 함께 투자한 정황과 위험 고지로 고의 부재와 민사적 성격을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 투자·자금 정리 (즉시)</strong> — 투자 권유·위험 고지·본인 투자·자금 흐름 경위를 정리.</li>\n<li><strong>2단계 — 손실·정황 확보 (1주)</strong> — 시세 변동·플랫폼 사정·본인도 입은 손실 자료를 확보.</li>\n<li><strong>3단계 — 손실 성격 정리 (2주)</strong> — 수익 보장 단정이 아니라 위험을 함께 인지한 정황을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 스테이킹 수익 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 투자·편취 고의·손실 성격 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자 권유·위험 고지 대화 기록 (관계·고지)</strong></li>\n<li><strong>본인 투자·자금 투입 내역 (고의 부재 정황)</strong></li>\n<li><strong>코인 시세·스테이킹·플랫폼 손실 자료 (시장 손실)</strong></li>\n<li><strong>수익·정산·환급 시도 기록 (이행 의사)</strong></li>\n<li><strong>상대와의 대화·정산 요구·분쟁 경위 기록</strong></li>\n<li><strong>상대 주장 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘자금을 받을 당시 편취 고의가 있었는지’와 ‘손실이 시장 변동에 따른 투자 손실에 그치는지’입니다. 본인도 함께 투자해 손실을 입은 정황과 위험을 고지한 대화를 정돈하면 편취 의도가 없었음을 다투는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 자금을 받을 당시 편취의 고의가 있었는지.</li>\n<li><strong>민사·형사 구분</strong> — 시세 손실에 따른 민사 분쟁에 그치는지.</li>\n<li><strong>위험 고지</strong> — 수익 보장 단정인지 위험을 함께 인지했는지.</li>\n<li><strong>채무불이행</strong> — 단순 손실·미정산만으로 편취가 인정되는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 고의와 채무불이행의 구분',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 편취 고의는 자백이 없는 한 범행 전후 재력·환경·범행 내용·거래 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단해야 하고, 민사상 금전거래에서 채무불이행 사실만으로 곧바로 편취 고의를 인정할 수는 없으며 확실한 변제 의사·능력 없이 변제할 것처럼 가장해 금원을 받은 경우에 편취 고의를 인정할 수 있다고 판시했습니다. 함께 투자해 손실을 본 사안에서 편취 고의 유무를 다툴 때에도 이러한 구분 기준을 검토해볼 수 있습니다.',
        takeaway: '공동 투자 + 시세 손실 + 편취 고의 부재 결합 시 편취 고의·투자손실 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실인데 사기로 고소당했어요.',
        answer:
          '<strong>편취 고의 유무와 민사·형사 구분이 핵심인 영역입니다.</strong> 본인 투자·위험 고지·자금 흐름을 정리하세요.',
      },
      {
        question: '저도 같이 투자해 손실을 봤는데도 불리한가요?',
        answer:
          '<strong>본인도 함께 투자한 정황은 고의 부재를 뒷받침하는 영역입니다.</strong> 본인 투자·손실 자료를 확보하세요.',
      },
      {
        question: '시세가 떨어진 것뿐인데요.',
        answer:
          '<strong>시장 변동에 따른 투자 손실인지가 다툼점인 영역입니다.</strong> 시세·플랫폼 손실 자료와 분쟁 경위를 정리하세요.',
      },
      {
        question: '돈을 못 돌려줬다는 이유로 처벌되나요?',
        answer:
          '<strong>단순 채무불이행만으로는 편취 고의가 인정되지 않는 영역입니다.</strong> 변제 의사·정산 시도 정황을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>투자·자금에 관한 진술의 일관성이 중요한 영역입니다.</strong> 경위·자금 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: 'fraud 도메인 허브', href: '/guide/fraud' },
      { label: '지인 원금보장 차용 무고 방어', href: '/guide/fraud/fraud-acquaintance-principal-guarantee-falsely-accused-defense' },
      { label: '로맨스스캠 송금 추적', href: '/guide/fraud/fraud-romance-scam-remittance-track' },
      { label: '온라인 쇼핑몰 미배송 추적', href: '/guide/fraud/fraud-online-shop-nondelivery-track' },
      { label: '구인 빙자 선입금 추적', href: '/guide/fraud/fraud-job-recruit-advance-fee-track' },
    ],
  },

  // ─── 7. sex-crime-city-bus-crowd-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-city-bus-crowd-track',
    keyword: '시내버스 혼잡 강제추행',
    questionKeyword: '출퇴근 시간 사람이 빽빽한 시내버스·마을버스에서 손잡이를 잡고 서 있던 중, 옆·뒤에 밀착해 선 사람이 흔들림을 핑계로 제 몸을 만지거나 밀착해 와 큰 수치심을 느꼈어요. 버스가 흔들려 닿은 우연인지 일부러 만진 건지 헷갈렸고 사람이 많아 그 자리에서 항의도 못 했는데, 이런 시내버스 혼잡 속 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '시내버스 혼잡 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '시내버스 혼잡 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '혼잡한 시내버스에서 옆 사람이 흔들림을 핑계로 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·기습추행을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출퇴근·등하교 시간에 사람이 빽빽하게 들어찬 시내버스·마을버스·광역버스에서 손잡이를 잡고 서 있던 중, 옆이나 뒤에 바짝 붙어 선 사람이 버스 흔들림을 핑계로 본인의 엉덩이·허벅지·허리·몸을 만지거나, 필요 이상으로 밀착해 신체를 비비듯 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 버스가 흔들려 ‘부딪힌 우연인지, 일부러 만진 건지’ 헷갈리고, 빽빽한 사람들 틈에서 누가 그랬는지 확실치 않으며, 주변 시선과 위축감 때문에 그 자리에서 곧바로 항의하거나 붙잡지 못한 채 내리거나 자리를 옮겨, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 매일 타는 대중교통에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행의 ‘폭행 또는 협박’은 상대방의 항거를 곤란하게 할 정도까지 요구되지 않고, 상대방의 신체에 불법한 유형력을 행사하면 되며, 폭행행위 자체가 곧 추행에 해당하는 기습추행도 포함되어 의사에 반하는 유형력 행사가 있으면 힘의 대소강약을 불문한다고 본 사례 흐름이 있는 영역입니다. 혼잡 밀착 접촉 + 의사에 반한 접촉 + 흔들림 핑계 결합은 ‘추행 해당성·기습추행’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시내버스 혼잡 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 노선·일시·정류장·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 흔들림에 따른 접촉 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 버스 내·정류장 CCTV, 교통카드·승하차 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·승하차·교통카드·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡해 몸이 닿더라도 흔들림에 따른 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 기습추행으로 평가될 수 있다는 점이 분기점입니다. 버스 CCTV와 승하차·교통카드 기록을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 노선·일시·정류장·접촉 부위·방식·반복·인상착의·위치 정리.</li>\n<li><strong>2단계 — CCTV·승하차 기록 확보 (즉시)</strong> — 버스·정류장 CCTV, 교통카드·승하차 기록 보존을 요청.</li>\n<li><strong>3단계 — 운수사·기사 협조 (직후)</strong> — 버스회사·기사에게 영상·운행 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시내버스 혼잡 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>노선·일시·정류장·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·하차 정황 기록</strong></li>\n<li><strong>버스·정류장 CCTV 보존 요청 자료</strong></li>\n<li><strong>교통카드·승하차·결제 기록 (특정·동선)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>주변 승객·기사 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 내 CCTV는 보존 기간이 짧으므로 노선·차량 번호·시간대를 확인해 운수사에 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 교통카드 기록을 남기면 흔들림에 따른 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>기습추행</strong> — 폭행행위 자체가 추행인 기습추행에 해당하는지.</li>\n<li><strong>우연·고의</strong> — 흔들려 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·승하차·교통카드로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행의 폭행·협박과 기습추행',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 ‘폭행 또는 협박’은 상대방의 항거를 곤란하게 할 정도로 강력할 것이 요구되지 않고 상대방의 신체에 불법한 유형력을 행사하거나 공포심을 일으킬 정도의 해악을 고지하는 것으로 보아야 한다고 판시했습니다. 폭행행위 자체가 곧 추행인 기습추행도 의사에 반하는 유형력 행사가 있으면 힘의 대소강약을 불문하므로, 혼잡한 버스에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '혼잡 밀착 접촉 + 의사에 반한 접촉 + 흔들림 핑계 결합 시 추행 해당성·기습추행 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '버스가 흔들려 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>흔들림에 따른 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '사람이 많아 항의를 못 했어요.',
        answer:
          '<strong>혼잡 속 위축은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '밀착해 비비는 것도 추행인가요?',
        answer:
          '<strong>의사에 반하는 유형력 행사는 기습추행으로 평가될 수 있는 영역입니다.</strong> 접촉 양상과 반복을 기록하세요.',
      },
      {
        question: '누가 만졌는지 특정할 수 있나요?',
        answer:
          '<strong>버스 CCTV와 승하차·교통카드 기록으로 특정할 여지가 있는 영역입니다.</strong> 노선·차량·시간대를 즉시 기록하세요.',
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

  // ─── 8. sex-crime-water-park-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-water-park-track',
    keyword: '워터파크 물놀이장 강제추행',
    questionKeyword: '워터파크·수영장·물놀이장에서 파도풀·유수풀·슬라이드 대기 줄처럼 사람이 빽빽한 곳에 있던 중, 옆·뒤에 있던 사람이 물속에서 제 몸을 만지거나 밀착해 큰 수치심을 느꼈어요. 물속이라 누가 했는지 보이지 않고 사람이 많아 우연인지 일부러인지 헷갈렸으며 수영복 차림이라 더 위축됐는데, 이런 워터파크 혼잡 속 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '워터파크 물놀이장 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '워터파크 물놀이장 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '워터파크 혼잡 속에서 물속으로 몸을 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성 일탈을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「워터파크·수영장·물놀이장에서 파도풀·유수풀·슬라이드 대기 줄·튜브존처럼 사람이 빽빽하게 몰린 곳에 있던 중, 옆이나 뒤에 있던 사람이 물속에서 본인의 엉덩이·허벅지·허리·몸을 만지거나, 필요 이상으로 밀착해 신체를 접촉해 와 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 물속이라 누구의 손인지 보이지 않고, 사람이 많아 ‘파도·물살에 부딪힌 우연인지, 일부러 만진 건지’ 헷갈리며, 수영복 차림이라 더 위축돼 그 자리에서 곧바로 항의하거나 붙잡지 못한 채 자리를 옮겨, 신고해도 되는 일인지 헷갈려 막막하셨을 거예요. 즐거우려고 간 물놀이에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 추행 해당 여부는 행위자의 주관적 동기가 아니라 객관적으로 성적 수치심·혐오감을 일으키는지로 판단하고, 공동체 내 의례적·사회적으로 상당한 신체접촉은 추행으로 보지 않으나 그 상당한 범주를 다소 벗어나 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르면 강제추행이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 물속 밀착 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합은 ‘추행 해당성·상당성 일탈’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 워터파크 물놀이장 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 시설·구역·일시·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 해당성</strong> — 물살에 따른 접촉 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 시설 내·구역 CCTV, 입장·이용 기록 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·입장·이용 기록·목격자로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡해 몸이 닿더라도 물살에 따른 접촉의 상당 범위를 넘어 의사에 반한 만짐이 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 시설 CCTV와 입장·이용 기록을 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 시설·구역·일시·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV·이용 기록 확보 (즉시)</strong> — 시설·구역 CCTV, 입장·결제·이용 기록 보존을 요청.</li>\n<li><strong>3단계 — 시설·안전요원 협조 (직후)</strong> — 시설 관리자·안전요원에게 영상·이용 정보 보존과 도움을 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">워터파크 물놀이장 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>시설·구역·일시·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·이탈 정황 기록</strong></li>\n<li><strong>시설·구역 CCTV 보존 요청 자료</strong></li>\n<li><strong>입장·결제·이용 기록 (특정·동선)</strong></li>\n<li><strong>직후 호소·지인 연락 기록</strong></li>\n<li><strong>주변 이용자·안전요원 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시설 CCTV는 보존 기간이 짧고 물놀이 구역은 사각이 많으므로 관리자·안전요원에게 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 입장·이용 기록을 남기면 물살에 따른 우연과 의사에 반한 추행을 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>상당성 일탈</strong> — 물살에 따른 접촉의 상당 범위를 벗어났는지.</li>\n<li><strong>우연·고의</strong> — 물살에 닿은 우연인지 의사에 반한 접촉인지.</li>\n<li><strong>가해자 특정</strong> — CCTV·입장·이용 기록으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·진술·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당성 일탈 판단',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 추행 해당 여부를 행위자의 주관적 동기가 아니라 객관적으로 성적 수치심·혐오감을 일으키는지로 판단하고, 공동체 내 구성원 사이의 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있으면 추행으로 보지 않으나, 그 상당한 범주를 다소 벗어나더라도 상대방의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르면 강제추행이 될 수 있다고 판시했습니다. 물속에서 의사에 반해 신체를 접촉한 사안을 살펴볼 때에도 이러한 추행 해당성·상당성 일탈 기준을 검토해볼 수 있습니다.',
        takeaway: '물속 밀착 접촉 + 의사에 반한 접촉 + 상당성 일탈 결합 시 추행 해당성·상당성 일탈 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '물살에 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>물살에 따른 접촉의 상당 범위를 벗어난 의사에 반한 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '물속이라 누가 했는지 못 봤어요.',
        answer:
          '<strong>시설 CCTV·입장 기록으로 특정을 보강할 수 있는 영역입니다.</strong> 구역·시간대·인상착의를 즉시 기록하세요.',
      },
      {
        question: '수영복 차림이라 위축돼 항의를 못 했어요.',
        answer:
          '<strong>혼잡·위축 정황은 흔히 고려되는 영역입니다.</strong> 의사에 반한 접촉 정황과 직후 호소를 정리하세요.',
      },
      {
        question: '밀착해 만진 것도 추행인가요?',
        answer:
          '<strong>의례적·상당한 범위를 넘은 의사에 반한 접촉은 추행으로 평가될 수 있는 영역입니다.</strong> 접촉 양상과 반복을 기록하세요.',
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
      { label: '엘리베이터 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-track' },
    ],
  },

  // ─── 9. sex-crime-medical-exam-pretext-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-medical-exam-pretext-track',
    keyword: '진료 빙자 강제추행',
    questionKeyword: '병원·한의원·물리치료실에서 진료·치료를 받던 중, 증상과 무관해 보이는 가슴·음부 등 내밀한 부위를 의료인이 만지거나 눌러 큰 수치심을 느꼈어요. 진료에 필요한 행위인지 추행인지 헷갈렸고, 사전 설명이나 동의도 없었으며 단둘이 있던 상황이라 항의도 못 했는데, 이런 진료 빙자 신체 접촉을 강제추행으로 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '진료 빙자 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '진료 빙자 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '진료·치료 중 증상과 무관한 내밀한 부위를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·진료 상당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「병원·한의원·물리치료실·검진센터에서 진료·치료·검진을 받던 중, 본인이 호소한 증상과 무관해 보이는 가슴·음부·엉덩이 등 내밀한 신체 부위를 의료인이 손으로 만지거나 눌러, 진료에 필요한 행위인지 추행인지 혼란스럽고 큰 수치심을 느낀 분의 상황입니다. 사전에 그 부위를 만지는 이유나 필요성에 대한 설명·동의를 구하는 절차가 없었고, 진료실에 단둘이 있는 상황이라 ‘내가 예민한 건가, 진료라서 그런 건가’ 헷갈려 그 자리에서 곧바로 항의하지 못한 채 나와, 신고해도 되는 일인지 막막하셨을 거예요. 몸을 맡기고 도움을 받으러 간 곳에서 겪은 일이라 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 판례는 강제추행죄에 성욕을 자극·만족시키려는 동기·목적까지 요구되지는 않고, 환자의 내밀한 신체 부위에 대한 의료인의 접촉이 추행인지는 환자의 성별·연령·증상, 진단·치료의 필요성, 신체 부위와 행위의 연관성, 사전 설명·동의 여부 등을 종합해 신중·엄격하게 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 진료 빙자 접촉 + 증상 무관·미동의 + 내밀 부위 결합은 ‘진료 빙자 추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 의료인 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 진료 빙자 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·의료인 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 의료기관·일시·호소 증상·접촉 부위·방식·설명·동의 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 증상과 무관한 내밀 부위 접촉이 진료 상당성을 벗어난 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 진료기록·차트·CCTV·결제 내역 보존 요청.</li>\n<li><strong>④ 의료인 특정</strong> — 진료기록·예약·결제로 의료인 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·여성긴급전화 1366 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의료 행위라도 호소 증상과 무관한 내밀 부위를 사전 설명·동의 없이 만져 진료의 상당성을 벗어났는지가 분기점입니다. 진료기록·차트와 호소 증상을 대조할 수 있게 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 의료기관·일시·호소 증상·접촉 부위·방식·설명·동의 여부 정리.</li>\n<li><strong>2단계 — 진료기록·CCTV 확보 (즉시)</strong> — 진료기록·차트·예약·결제 내역, 대기·복도 CCTV 보존을 요청.</li>\n<li><strong>3단계 — 직후 호소 기록 (직후)</strong> — 동행인·지인·다른 의료진에게 알린 직후 호소를 남김.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거를 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상을 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진료 빙자 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>의료기관·일시·호소 증상 메모</strong></li>\n<li><strong>접촉 부위·방식·설명·동의 여부 기록</strong></li>\n<li><strong>진료기록·차트 사본 발급 자료 (증상 대조)</strong></li>\n<li><strong>예약·접수·결제 내역 (의료인 특정)</strong></li>\n<li><strong>대기·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>직후 호소·동행인·지인 연락 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록·차트를 발급받아 본인이 호소한 증상과 실제 접촉 부위가 맞는지 대조하면 진료의 상당성을 벗어났는지 다투는 데 도움이 됩니다. 사전 설명·동의가 없었다는 점을 구체적으로 기록하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 증상과 무관한 내밀 부위 접촉이 추행인지.</li>\n<li><strong>진료 상당성</strong> — 진단·치료에 필요·상당한 범위를 벗어났는지.</li>\n<li><strong>설명·동의</strong> — 사전 설명·동의 절차가 있었는지.</li>\n<li><strong>진술 신빙성</strong> — 피해 진술이 일관·구체적인지.</li>\n<li><strong>증거 확보</strong> — 진료기록·CCTV·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의료 행위와 추행의 신중한 구별',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 추행이 객관적으로 성적 수치심·혐오감을 일으켜 성적 자유를 침해하는 행위이고 강제추행죄에 성욕을 자극·만족시키려는 동기·목적까지 요구되지는 않으며, 환자의 내밀한 신체 부위에 대한 의료인의 접촉이 추행인지는 환자의 성별·연령·증상, 진단·치료의 필요성, 신체 부위와 행위의 연관성, 사전 설명·동의 여부 등을 종합해 신중·엄격하게 판단해야 한다고 판시했습니다. 진료를 빙자한 내밀 부위 접촉 사안을 살펴볼 때에도 이러한 진료 상당성·추행 해당성 기준을 검토해볼 수 있습니다.',
        takeaway: '진료 빙자 접촉 + 증상 무관·미동의 + 내밀 부위 결합 시 진료 빙자 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진료에 필요한 행위라고 하면 어쩌죠?',
        answer:
          '<strong>증상과 무관하게 진료 상당성을 벗어난 접촉인지가 핵심인 영역입니다.</strong> 진료기록과 호소 증상을 대조해 정리하세요.',
      },
      {
        question: '사전 설명이나 동의가 없었어요.',
        answer:
          '<strong>설명·동의 부재는 추행 해당성 다툼의 중요 정황인 영역입니다.</strong> 설명·동의가 없었던 경위를 구체적으로 남기세요.',
      },
      {
        question: '의료인 의도를 입증해야 하나요?',
        answer:
          '<strong>강제추행에 성적 동기·목적까지 요구되지는 않는 영역입니다.</strong> 접촉의 객관적 양상과 정황을 정리하세요.',
      },
      {
        question: '진료실에 단둘이라 증거가 없어요.',
        answer:
          '<strong>진료기록·CCTV·직후 호소로 보강할 수 있는 영역입니다.</strong> 진료기록 발급과 직후 호소 기록을 확보하세요.',
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
      { label: '마사지샵 업주 추행 추적', href: '/guide/sex-crime/sex-crime-massage-shop-owner-track' },
      { label: '찜질방 사우나 추행 추적', href: '/guide/sex-crime/sex-crime-jjimjilbang-sauna-track' },
      { label: '엘리베이터 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-track' },
      { label: '데이팅앱 만남 추행 무고 방어', href: '/guide/sex-crime/sex-crime-dating-app-meetup-falsely-accused-defense' },
    ],
  },

  // ─── 10. sex-crime-noraebang-room-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-noraebang-room-falsely-accused-defense',
    keyword: '노래방 술자리 강제추행 무고',
    questionKeyword: '회식 뒤 노래방·룸에서 동료·직원들과 술을 마시며 노래하던 중, 분위기 속에 옆자리에서 어깨·팔이 닿거나 짧은 접촉이 있었는데, 며칠 뒤 상대가 저를 강제추행으로 고소·신고했어요. 저는 추행할 의도가 전혀 없었고 다 같이 취해 노래방에서 흔히 있는 접촉이었다고 기억하는데, 직접 증거 없이 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어해야 하나요?',
    ctaKeyword: '노래방 술자리 강제추행 무고 추행 고의·기습추행 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '노래방 술자리 강제추행 무고 방어 — 5단계 고의 점검 | 로앤가이드',
      description:
        '노래방 회식 자리 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 고의와 기습추행·진술 신빙성 판단을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식이 끝난 뒤 2차로 이어진 노래방·룸에서 동료·직원들과 술을 마시며 함께 노래하던 중, 옆자리에 앉아 어깨가 닿거나 잠깐 손·팔이 스치는 것 같은 접촉이 분위기 속에서 오갔는데, 며칠 뒤 그 상대가 ‘강제로 추행을 당했다’며 고소·신고해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고, 다 같이 술에 취해 있었으며 좁은 노래방 자리에서 일행끼리 흔히 있는 접촉이었다고 기억하는데, 어둡고 시끄러운 공간이라 정확한 정황을 기억하는 사람도 적고 수사가 상대 진술 위주로 흘러 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 직장·인간관계와 신상까지 흔들려 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉에 추행의 고의가 있었는지, 그리고 피해 진술의 신빙성이 합리적 의심 없이 인정되는지가 핵심 쟁점입니다. 판례는 폭행행위 자체가 추행인 기습추행에서 추행 여부는 피해자의 의사·성별·연령, 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황 등을 종합해 신중히 결정해야 한다고 본 사례 흐름이 있는 영역으로, 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 노래방 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 고의·기습추행’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 고의 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노래방 술자리 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 고의·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식·노래방 이동·동석자·좌석·접촉 경위·대화 흐름 정리.</li>\n<li><strong>② 추행 고의</strong> — 문제 된 접촉에 추행의 고의가 있었는지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술의 일관성·구체성·객관 사실 부합 여부 검토.</li>\n<li><strong>④ 정황·증거</strong> — 노래방·복도 CCTV·동석자 진술·결제·이용 시간으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 무죄추정 원칙 아래 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉에 추행의 고의가 있었는지와 피해 진술이 합리적 의심 없이 신빙성을 갖는지가 분기점입니다. CCTV·동석자 진술·이용 시간으로 고의와 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 정리 (즉시)</strong> — 회식·노래방 이동·동석자·좌석·접촉 경위와 대화 흐름을 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 노래방·복도 CCTV, 동석자 진술, 결제·룸 이용 시간 기록을 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 상대 진술과 객관 정황·동석자 진술의 불부합·모순을 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서를 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비를 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노래방 술자리 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 고의·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식·노래방 이동·동석자·좌석·접촉 경위 메모</strong></li>\n<li><strong>노래방·주점·복도 CCTV 보존 요청 자료</strong></li>\n<li><strong>동석자·목격자 진술·연락처 (정황)</strong></li>\n<li><strong>결제·예약·룸 이용 시간·콜택시 객관 자료 (동선 특정)</strong></li>\n<li><strong>이후 메시지·연락·SNS 기록</strong></li>\n<li><strong>상대 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉에 추행의 고의가 있었는지’와 ‘피해 진술이 합리적 의심 없이 신빙성을 갖는지’입니다. CCTV·동석자 진술·룸 이용 시간 같은 객관 정황을 정돈해 고의 유무와 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의</strong> — 문제 된 접촉에 추행의 고의가 있었는지.</li>\n<li><strong>기습추행</strong> — 접촉의 경위·태양이 기습추행에 해당하는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>음주·정황</strong> — 음주 속 일행 간 접촉의 의미·맥락이 어떠한지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 추행 해당의 신중한 판단',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에 폭행행위 자체가 추행인 기습추행이 포함되고 그 폭행은 의사에 반하는 유형력 행사가 있으면 힘의 대소강약을 불문하나, 추행 해당 여부는 피해자의 의사·성별·연령, 행위자와의 관계, 행위에 이르게 된 경위, 구체적 행위태양, 주위의 객관적 상황과 시대의 성적 도덕관념 등을 종합해 신중히 결정해야 한다고 판시했습니다. 술자리 접촉을 추행으로 다투는 사안에서 접촉 경위·태양과 진술을 신중히 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '노래방 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 고의·기습추행 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '노래방 일행 간 접촉이었는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 고의와 진술 신빙성이 핵심인 영역입니다.</strong> 회식·이동·접촉 경위와 동석자 정황을 정리하세요.',
      },
      {
        question: '상대 진술만 있는데도 처벌되나요?',
        answer:
          '<strong>진술 신빙성을 종합해 합리적 의심 없는 증명에 이르러야 하는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 정리하세요.',
      },
      {
        question: '어둡고 시끄러워 정황이 불분명해요.',
        answer:
          '<strong>노래방·복도 CCTV·동석자 진술·룸 이용 시간으로 보강할 수 있는 영역입니다.</strong> 자리 전후 기록을 확보하세요.',
      },
      {
        question: '어깨가 닿은 것도 추행이 되나요?',
        answer:
          '<strong>접촉의 경위·태양과 추행 고의가 다툼점인 영역입니다.</strong> 접촉 경위와 동석자 인식을 정리하세요.',
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
      { label: '데이팅앱 만남 추행 무고 방어', href: '/guide/sex-crime/sex-crime-dating-app-meetup-falsely-accused-defense' },
      { label: '클럽 댄스플로어 추행 추적', href: '/guide/sex-crime/sex-crime-club-dancefloor-track' },
      { label: '엘리베이터 낯선 사람 추행 추적', href: '/guide/sex-crime/sex-crime-elevator-stranger-track' },
    ],
  },
];
