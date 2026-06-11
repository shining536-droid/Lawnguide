import { SpokePage } from '../spoke-pages';

// batch94 fraud(6) + sex-crime(4) — 10개 (2026-06-11)
//
// 고유 존재 이유:
// 1. fraud-studio-double-lease-deposit-track — 일반 전세사기류와 분기. '집주인 행세·중복임대로 원룸 보증금을 편취당함' 편취 범의·교부 판단형 트랙(victim).
// 2. fraud-concert-ticket-nondelivery-track — 일반 중고거래류와 분기. '콘서트 티켓을 선결제했는데 미발송·잠적' 금원 편취·편취액 판단형 트랙(victim).
// 3. fraud-puppy-fake-pedigree-track — 일반 분양 하자류와 분기. '혈통·건강을 허위 고지하고 강아지를 분양' 고지의무·편취 판단형 트랙(victim).
// 4. fraud-remote-job-prepayment-track — 일반 알바사기류와 분기. '재택알바·부업 빙자로 선입금·물품대금을 받아 잠적' 빙자·편취 절차형 트랙(victim).
// 5. fraud-gym-prepay-closure-track — 일반 환불거부류와 분기. '헬스장 장기 선결제 직후 폐업·먹튀' 폐업 인지·편취 절차형 트랙(victim).
// 6. fraud-acquaintance-loan-default-falsely-accused-defense — 일반 사기 무고류와 분기. '지인 차용금 변제지체를 사기로 고소당함' 편취 고의·채무불이행 구별 방어 판단형 트랙(accused).
// 7. sex-crime-festival-crowd-track — 일반 추행류와 분기. '축제·행사 인파 속 강제추행·기습추행' 폭행 의미·기습추행 판단형 트랙(victim).
// 8. sex-crime-photo-studio-track — 일반 추행류와 분기. '촬영 빙자 포즈 교정으로 신체 접촉' 추행 해당성·상당성 판단형 트랙(victim).
// 9. sex-crime-fitting-room-hidden-cam-track — 일반 불법촬영류와 분기. '탈의실·피팅룸 몰래카메라 촬영' 카메라등이용촬영·증거보전 절차형 트랙(victim).
// 10. sex-crime-blind-date-falsely-accused-defense — 일반 성범죄 무고류와 분기. '소개팅 자리 접촉을 강제추행으로 고소당함' 진술 신빙성·무죄추정 다툼 방어 판단형 트랙(accused).

export const spokesBatch94FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-studio-double-lease-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-studio-double-lease-deposit-track',
    keyword: '원룸 이중계약 보증금 편취',
    questionKeyword: '원룸·오피스텔을 계약하면서 집주인 또는 관리인이라는 사람에게 보증금을 보냈는데, 알고 보니 같은 방을 여러 사람에게 중복으로 임대했거나 임대 권한이 없는 사람이 집주인 행세를 한 이중계약이었어요. 들어가 살지도 못한 채 보증금만 묶였는데, 처음부터 보증금을 가로챌 작정이었던 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '원룸 이중계약 편취 범의·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '원룸 이중계약 보증금 편취 — 5단계 편취 범의 점검 | 로앤가이드',
      description:
        '집주인 행세·중복임대로 원룸 보증금을 편취당하고 들어가 살지도 못했다면, 형법 제347조 사기의 편취 범의·교부 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘바로 입주 가능, 좋은 조건’이라는 말을 믿고 원룸·오피스텔·고시원을 계약하면서 집주인·임대인 또는 관리인이라는 사람에게 보증금·월세 선납금을 보냈다가, 정작 입주일에 같은 방에 다른 세입자가 이미 살고 있거나, 그 사람에게 임대 권한이 전혀 없고 진짜 소유자는 따로 있는 이중계약·무권한 임대였음을 알게 되어 충격받은 분의 상황입니다. 같은 방을 여러 사람에게 중복으로 임대해 보증금만 챙기거나, 집주인 행세를 하며 처음부터 보증금을 가로챌 작정이었던 건 아닌지 의심되는데, 상대는 연락을 끊거나 ‘곧 정리해주겠다’며 시간만 끌어 막막하실 거예요. 들어가 살지도 못한 채 큰 보증금만 묶여 당장 머물 곳까지 걱정돼 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 임대 권한이 없거나 같은 방을 중복 임대하면서 정상 임대인 것처럼 속여 보증금을 받았다면 기망행위로 평가될 여지가 있고, 보증금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 편취의 범의는 피고인이 자백하지 않는 이상 범행 전후의 재력·환경·거래의 내용과 이행과정 등 객관적 사정을 종합해 판단하고, 그 범의는 확정적 고의가 아니라 미필적 고의로도 족하다고 본 사례 흐름이 있는 영역입니다. 무권한·중복 임대 + 보증금 교부 + 잠적 결합은 ‘편취 범의·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·계약 정리 ② 편취 범의·권한 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 원룸 이중계약 보증금 편취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·편취 범의·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·계약 정리</strong> — 임대차계약서·신분 확인·보증금 송금·입주 약정 정리.</li>\n<li><strong>② 편취 범의·권한</strong> — 임대 권한이 있었는지, 같은 방을 중복 임대했는지, 미필적 고의가 인정되는지 검토.</li>\n<li><strong>③ 편취액</strong> — 일부 정산이 있어도 교부한 보증금·선납금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·보증금 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 임대차 분쟁과 달리, 임대 권한 없이 또는 같은 방을 중복 임대하면서 정상 거래인 척 속였는지가 사기 판단의 분기점입니다. 계약서·신분 표시와 등기부·중복 임대 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·계약 자료 보존 (즉시)</strong> — 계약서·신분 확인·보증금 송금·입주 약정·대화 보존.</li>\n<li><strong>2단계 — 권한·중복 임대 확인 (즉시)</strong> — 등기부·전입세대 열람으로 소유자·중복 임대 여부 확인.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·보증금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사기 신고, 대한법률구조공단 132 상담.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 보증금 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">원룸 이중계약 보증금 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·편취 범의·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·특약 (계약 내용)</strong></li>\n<li><strong>임대인·관리인 신분증·명함·신분 표시 (권한 정황)</strong></li>\n<li><strong>등기부등본·전입세대 열람 (소유자·중복 확인)</strong></li>\n<li><strong>보증금·선납금 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>입주 거부·중복 임대 정황 자료</strong></li>\n<li><strong>반환 요구·연락 두절 대화 기록</strong></li>\n<li><strong>상대·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부상 소유자와 계약 상대의 불일치, 같은 방 중복 임대 정황을 함께 정리하면 무권한·기망 정황이 선명해집니다. 같은 건물 피해자를 모아 송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 보증금을 가로챌 의사가 거래 당시 있었는지.</li>\n<li><strong>임대 권한</strong> — 임대할 권한·소유 관계가 있었는지.</li>\n<li><strong>편취액</strong> — 일부 정산이 있어도 교부한 보증금 전부가 피해액인지.</li>\n<li><strong>민사 분쟁 항변</strong> — 단순 임대차 다툼인지 처음부터 기망인지.</li>\n<li><strong>상대 특정</strong> — 계약서·신분·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (임대차·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취의 범의와 미필적 고의',
        summary:
          '대법원 2007도10416(대법원, 2008.02.28 선고) 영역에서 법원은 사기죄의 편취 범의는 피고인이 자백하지 않는 이상 범행 전후의 재력·환경·범행 내용·거래의 이행과정 등 객관적 사정을 종합해 판단할 수밖에 없고, 그 범의는 확정적 고의가 아닌 미필적 고의로도 족하다고 판시했습니다. 임대 권한 없이 또는 같은 방을 중복 임대하면서 보증금을 받은 사안을 살펴볼 때에도 이러한 편취 범의 판단 기준을 검토해볼 수 있습니다.',
        takeaway: '무권한·중복 임대 + 보증금 교부 + 잠적 결합 시 편취 범의·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계약서를 썼는데도 사기가 되나요?',
        answer:
          '<strong>계약서와 별개로 임대 권한·중복 임대 정황이 핵심인 영역입니다.</strong> 등기부와 신분 표시를 대조해 확보하세요.',
      },
      {
        question: '상대가 집주인인 줄 알았는데 아니었어요.',
        answer:
          '<strong>임대 권한 없이 집주인 행세를 했다면 기망으로 평가될 수 있는 영역입니다.</strong> 등기부·신분 자료를 정리하세요.',
      },
      {
        question: '같은 방을 여러 명이 계약했어요.',
        answer:
          '<strong>중복 임대 정황은 편취 범의 판단의 출발점인 영역입니다.</strong> 다른 세입자·입주 거부 정황을 모으세요.',
      },
      {
        question: '보증금 일부만 손해인가요, 전부인가요?',
        answer:
          '<strong>일부 정산이 있어도 교부한 보증금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '상대가 잠적했는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '임대차 보증금 편취 대응', href: '/guide/fraud/fraud-lease-deposit-track' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 2. fraud-concert-ticket-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-nondelivery-track',
    keyword: '콘서트 티켓 중고거래 미발송 사기',
    questionKeyword: '중고거래·SNS에서 ‘콘서트 티켓·예매권을 양도한다’는 글을 보고 돈을 먼저 보냈는데, 판매자가 ‘예매가 곧 확정된다’며 시간만 끌다가 티켓을 보내지 않고 연락을 끊었어요. 처음부터 티켓을 줄 의사 없이 입금만 받은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '콘서트 티켓 미발송 금원 편취·편취액 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '콘서트 티켓 미발송 사기 — 5단계 편취·편취액 점검 | 로앤가이드',
      description:
        '콘서트 티켓을 선결제했는데 판매자가 미발송하고 잠적했다면, 형법 제347조 사기의 금원 편취·편취액 산정과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「좋아하는 가수·아이돌 콘서트 티켓을 구하려고 중고거래 앱·SNS·팬 커뮤니티에서 ‘양도·대리예매’ 글을 보고, ‘선입금하면 예매해 넘겨준다’, ‘곧 예매 확정’이라는 말을 믿고 티켓값·예매 대행비를 먼저 송금한 분의 상황입니다. 그런데 판매자가 ‘예매가 지연된다’, ‘좌석을 확인 중이다’라며 시간만 끌다가 공연 날이 다가올수록 연락을 미루고, 결국 티켓도 보내지 않은 채 계정을 닫거나 차단하고 잠적해, 처음부터 티켓을 넘길 의사 없이 입금만 받아낸 건 아닌지 의심되고 막막하실 거예요. 공연은 코앞인데 표도 돈도 잃은 것 같아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 티켓을 양도할 의사·능력 없이 양도 가능한 것처럼 속여 입금을 유도했다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 금원 편취를 내용으로 하는 사기죄에서 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 대가가 일부 지급된 경우에도 편취액은 그 공제 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 양도 빙자 + 미발송 + 잠적 결합은 ‘편취·편취액’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 기망·편취 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 콘서트 티켓 미발송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 거래 글·양도 약속·대화·입금 내역 정리.</li>\n<li><strong>② 기망·편취 정황</strong> — 티켓 양도 의사 없이 양도 가능한 척 입금을 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 입금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 거래 불이행과 달리, 처음부터 티켓을 넘길 의사 없이 입금만 받았는지가 사기 판단의 분기점입니다. 양도 약속 대화와 미발송·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 거래 글·양도 약속·대화·입금 내역 캡처·보존.</li>\n<li><strong>2단계 — 미발송·잠적 정황 정리 (즉시)</strong> — 약속한 발송 시점과 연락 두절 시점 정리.</li>\n<li><strong>3단계 — 지급정지 요청 (병행)</strong> — 송금 계좌·간편결제 지급정지를 신속 요청.</li>\n<li><strong>4단계 — 경찰 신고·사기조회 (1주)</strong> — 사이버범죄 신고, 더치트 등 사기 이력 조회.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">콘서트 티켓 미발송 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 글·판매 게시물 캡처 (유도 정황)</strong></li>\n<li><strong>양도·예매 약속 대화 기록 (거래 조건)</strong></li>\n<li><strong>입금·송금·간편결제 내역 (피해 금액)</strong></li>\n<li><strong>발송 지연·연락 두절·차단 기록</strong></li>\n<li><strong>판매자 계정·닉네임·연락처 정보</strong></li>\n<li><strong>동일 판매자 사기 이력·다른 피해 자료</strong></li>\n<li><strong>받는 계좌·예금주 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양도 약속 대화와 미발송·잠적 정황을 함께 정리하면 기망 정황이 선명해집니다. 계좌·닉네임으로 사기 이력을 조회하고 같은 판매자 피해를 모으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 티켓 양도 의사 없이 입금을 유도했는지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 입금 전부가 피해액인지.</li>\n<li><strong>거래 불이행 항변</strong> — 단순 예매 실패인지 처음부터 기망인지.</li>\n<li><strong>판매자 특정</strong> — 계정·계좌·연락처로 특정할 수 있는지.</li>\n<li><strong>계좌 추적</strong> — 송금 계좌·중간 계좌를 추적할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·중고거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 지급에도 편취액은 교부 금원 전부',
        summary:
          '대법원 2023도18971(대법원, 2024.04.25 선고) 영역에서 법원은 금원 편취를 내용으로 하는 사기죄에서 기망으로 인한 금원 교부가 있으면 그 자체로 재산침해가 되어 사기죄가 성립하고, 대가가 일부 지급된 경우에도 편취액은 그 공제 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 콘서트 티켓을 선입금받고 미발송한 사안에서 일부 환불이 있더라도 입금 총액을 편취액으로 다투는 경우를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '양도 빙자 + 미발송 + 잠적 결합 시 편취·편취액 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '예매가 실패한 것뿐이라는데 사기가 되나요?',
        answer:
          '<strong>처음부터 양도 의사 없이 입금만 받았는지가 핵심인 영역입니다.</strong> 양도 약속 대화와 잠적 정황을 확보하세요.',
      },
      {
        question: '일부를 환불해줬는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '판매자가 차단하고 사라졌어요.',
        answer:
          '<strong>계정·계좌·연락처로 특정할 여지가 있는 영역입니다.</strong> 거래 글·대화·송금 기록을 보존하세요.',
      },
      {
        question: '간편결제로 보냈는데 멈출 수 있나요?',
        answer:
          '<strong>송금 계좌 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
      {
        question: '같은 판매자에게 당한 사람이 많아요.',
        answer:
          '<strong>같은 계정·계좌 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 피해자별 거래·입금 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '편취액 산정 쟁점', href: '/guide/fraud/fraud-loss-amount-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 3. fraud-puppy-fake-pedigree-track ───
  {
    domain: 'fraud',
    slug: 'fraud-puppy-fake-pedigree-track',
    keyword: '강아지 분양 허위고지 사기',
    questionKeyword: '‘혈통서 있는 순종, 건강검진 완료, 질병 없음’이라는 분양업자·브리더의 말을 믿고 비싼 값에 강아지를 분양받았는데, 데려오자마자 아프거나 며칠 만에 큰 병이 드러나고 혈통서·품종도 거짓이었어요. 처음부터 병·혈통을 숨기고 속여 판 것 같은데, 사기로 신고하고 분양비를 돌려받을 수 있나요?',
    ctaKeyword: '강아지 분양 허위고지 고지의무·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '강아지 분양 허위고지 사기 — 5단계 고지의무·편취 점검 | 로앤가이드',
      description:
        '혈통·건강을 보장한다던 강아지가 질병·잡종으로 드러나고 업자가 환불을 거부한다면, 형법 제347조 사기의 고지의무·기망 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘혈통서 있는 순종, 예방접종·건강검진 완료, 질병 없는 건강한 아이’라는 분양업자·펫숍·브리더의 설명과 사진을 믿고 적지 않은 분양비를 주고 강아지를 데려온 분의 상황입니다. 그런데 데려온 직후부터 기침·설사·식욕부진이 이어지고, 며칠 만에 파보·홍역 같은 큰 병이 진단되거나, 알고 보니 혈통서가 위조됐고 품종도 광고와 다른 잡종이었음이 드러나, 처음부터 병·혈통 문제를 알면서 숨기고 속여 판 건 아닌지 의심되고 막막하실 거예요. 업자는 ‘분양 후 관리 탓’이라며 환불·치료비를 거부하고, 아픈 강아지의 치료비까지 겹쳐 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 건강·혈통은 분양 결정에 직결되는 중요한 사정이어서, 질병·혈통 문제를 알면서 고지하지 않은 채 순종·건강으로 속여 분양했다면 신의칙상 고지의무 위반에 의한 기망으로 평가될 여지가 있고, 분양비 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득에 있고, 편취의 범의는 계약 당시를 기준으로 거래의 내용·체결 경위·이행과정 등을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 질병·혈통 인지 + 미고지 + 순종·건강 표시 결합은 ‘고지의무·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·개체 정리 ② 질병·혈통 인지·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 환급·배상 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 강아지 분양 허위고지 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·고지의무·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·개체 정리</strong> — 분양계약서·혈통서·건강보장 문구·분양비 송금 정리.</li>\n<li><strong>② 질병·혈통 인지·고지의무</strong> — 업자가 질병·혈통 문제를 알면서 숨겼는지, 고지의무가 있었는지 검토.</li>\n<li><strong>③ 편취액</strong> — 시세 차액이 아니라 교부한 분양비 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·배상</strong> — 계약 취소·분양비 반환·치료비 손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 분양 후 발병과 달리, 질병·혈통 문제를 알면서 고지하지 않고 순종·건강으로 속였는지가 기망 판단의 분기점입니다. 분양 직후 진단서와 분양 당시 건강보장·혈통 표시를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·개체 자료 보존 (즉시)</strong> — 분양계약서·혈통서·건강보장 문구·분양비 송금·대화 보존.</li>\n<li><strong>2단계 — 질병·혈통 입증 확보 (즉시)</strong> — 동물병원 진단서·검사 결과·DNA·혈통 확인 자료 확보.</li>\n<li><strong>3단계 — 환불·치료비 요구 (병행)</strong> — 업자에게 허위고지 통지·계약취소·치료비 요구.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사기 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 분양비 반환·배상 (2개월 내)</strong> — 민사 분양비 반환·치료비 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">강아지 분양 허위고지 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·고지의무·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양계약서·특약·건강보장 문구 (계약 내용)</strong></li>\n<li><strong>혈통서·접종·건강검진 표시 (고지 정황)</strong></li>\n<li><strong>동물병원 진단서·검사 결과 (질병 입증)</strong></li>\n<li><strong>품종·혈통 DNA·확인 자료 (허위 입증)</strong></li>\n<li><strong>분양 직후 증상·치료 경과 사진·영상</strong></li>\n<li><strong>분양비 송금·치료비 영수증 (피해 금액)</strong></li>\n<li><strong>분양업자·펫숍·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양 당시 건강·혈통 보장 문구와 분양 직후 진단서를 대조하면 고지의무 위반 정황이 선명해집니다. 발병 시점이 분양 직후임을 증상 사진·경과로 남기면 질병 인지·기망 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>질병·혈통 인지</strong> — 업자가 질병·혈통 문제를 알면서 숨겼는지.</li>\n<li><strong>고지의무</strong> — 건강·혈통이 신의칙상 고지의무 대상인지.</li>\n<li><strong>발병 시점</strong> — 분양 전 잠복 질환인지 분양 후 관리 탓인지.</li>\n<li><strong>편취액</strong> — 시세 차액이 아니라 교부한 분양비 전부가 피해액인지.</li>\n<li><strong>업자 특정</strong> — 펫숍·브리더·계좌로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (반려동물 분양 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취의 범의와 계약 당시 기준 판단',
        summary:
          '대법원 2015도10570(대법원, 2019.12.27 선고) 영역에서 법원은 사기죄의 본질은 기망행위에 의한 재물·재산상 이익의 취득에 있고, 편취의 범의는 계약 당시를 기준으로 거래의 내용·체결 경위·이행과정과 결과 등을 종합해 판단해야 한다고 판시했습니다. 건강·혈통을 보장한다며 강아지를 분양하고도 질병·혈통 문제를 숨긴 사안을 살펴볼 때에도 이러한 고지의무·편취 범의 판단 기준을 검토해볼 수 있습니다.',
        takeaway: '질병·혈통 인지 + 미고지 + 순종·건강 표시 결합 시 고지의무·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '분양 후에 아픈 건데 사기가 되나요?',
        answer:
          '<strong>분양 전 질병을 알면서 숨겼는지가 핵심인 영역입니다.</strong> 분양 직후 진단서와 건강보장 문구를 확보하세요.',
      },
      {
        question: '혈통서가 가짜였어요. 어떻게 하나요?',
        answer:
          '<strong>혈통 허위는 고지의무·기망 다툼의 출발점인 영역입니다.</strong> 혈통서와 DNA·품종 확인 자료를 대조하세요.',
      },
      {
        question: '업자가 관리 잘못이라며 환불을 거부해요.',
        answer:
          '<strong>발병 시점이 분양 직후임을 입증하면 다툼에 도움이 되는 영역입니다.</strong> 증상·치료 경과를 사진으로 남기세요.',
      },
      {
        question: '치료비도 받을 수 있나요?',
        answer:
          '<strong>분양비 반환과 별도로 치료비 손해배상을 검토할 수 있는 영역입니다.</strong> 영수증·진단서를 모으세요.',
      },
      {
        question: '환불 거부당했는데 어디에 도움을 청하나요?',
        answer:
          '<strong>한국소비자원 상담과 경찰 신고를 함께 검토할 수 있는 영역입니다.</strong> 계약·진단 자료부터 정돈하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '고지의무 위반 기망 쟁점', href: '/guide/fraud/fraud-nondisclosure-deception-track' },
      { label: '온라인 거래사기 대응', href: '/guide/fraud/fraud-online-deal-response-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 4. fraud-remote-job-prepayment-track ───
  {
    domain: 'fraud',
    slug: 'fraud-remote-job-prepayment-track',
    keyword: '재택알바 빙자 선입금 사기',
    questionKeyword: '‘재택알바·부업으로 고수익, 간단한 일’이라는 광고를 보고 지원했는데, 업체가 ‘일을 시작하려면 교재·물품 구입비, 보증금, 등록비를 먼저 내야 한다’며 선입금을 받더니 일감도 수당도 주지 않고 연락을 끊었어요. 처음부터 일자리는 핑계고 입금만 받을 작정이었던 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '재택알바 빙자 선입금 편취·환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재택알바 빙자 선입금 사기 — 5단계 편취·환급 점검 | 로앤가이드',
      description:
        '재택알바·부업 빙자로 선입금·물품대금을 내고 일감도 수당도 못 받았다면, 형법 제347조 사기의 빙자·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘재택근무·부업으로 하루 몇 시간만 일해도 고수익, 누구나 가능’이라는 SNS·문자·구인 광고를 보고 지원했다가, 업체가 ‘일을 배정하려면 교재·키트·물품 구입비, 회원 등록비, 보증금을 먼저 입금해야 한다’, ‘구매한 물품을 되팔면 수당이 붙는다’며 선입금을 요구해 돈을 보낸 분의 상황입니다. 그런데 정작 약속한 일감·수당은 주지 않거나, 처음 소액만 주고 더 큰 구매·입금을 계속 유도하다 결국 연락을 끊고 잠적해, 처음부터 일자리는 미끼고 입금만 받아낼 작정이었던 건 아닌지 의심되고 막막하실 거예요. 돈을 벌려다 오히려 빚만 진 것 같아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 실제로 일·수당을 줄 의사 없이 일자리를 빙자해 물품 구입·등록비 명목으로 입금을 유도했다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 물품 거래를 빙자해 실제로는 투자·출자금을 받은 것으로 볼 수 있고, 재물 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 교부받은 재물 전부라고 본 사례 흐름이 있는 영역입니다. 일자리 빙자 + 선입금 유도 + 잠적 결합은 ‘빙자·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 빙자·편취 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재택알바 빙자 선입금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망 정황·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 구인 광고·업무 안내·선입금 요구·송금 내역 정리.</li>\n<li><strong>② 빙자·편취 정황</strong> — 일·수당 지급 의사 없이 물품·등록비 명목으로 입금을 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 수당·물품이 있어도 교부한 입금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·청약철회·동일 업체 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 부업 분쟁과 달리, 일·수당 지급 의사 없이 일자리를 빙자해 입금만 끌어모았는지가 사기 판단의 분기점입니다. 구인 광고·업무 안내와 선입금 요구·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 광고·업무 안내·선입금 요구·송금·대화 보존.</li>\n<li><strong>2단계 — 빙자·잠적 정황 정리 (즉시)</strong> — 일감 미배정·수당 미지급·연락 두절 시점 정리.</li>\n<li><strong>3단계 — 지급정지·청약철회 (병행)</strong> — 송금 계좌 지급정지·물품 구매 청약철회 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 업체 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">재택알바 빙자 선입금 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망 정황·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>구인 광고·고수익 문구 캡처 (유도 정황)</strong></li>\n<li><strong>업무 안내·선입금 요구 대화 기록 (거래 조건)</strong></li>\n<li><strong>물품·등록비·보증금 송금 내역 (피해 금액)</strong></li>\n<li><strong>일감 미배정·수당 미지급·연락 두절 기록</strong></li>\n<li><strong>구매한 물품·키트·환불 거부 자료</strong></li>\n<li><strong>동일 업체 피해·모집 시점 자료</strong></li>\n<li><strong>업체·운영자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 구인 광고와 선입금 요구·잠적 정황을 함께 정리하면 빙자·기망 정황이 선명해집니다. 같은 업체 피해자를 모아 송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 일·수당 지급 의사 없이 입금을 유도했는지.</li>\n<li><strong>물품 빙자</strong> — 물품 거래를 빙자한 출자·입금에 불과한지.</li>\n<li><strong>편취액</strong> — 일부 수당·물품이 있어도 입금 전부가 피해액인지.</li>\n<li><strong>청약철회</strong> — 구매 물품에 청약철회·환불이 가능한지.</li>\n<li><strong>업체 특정</strong> — 운영자·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (다단계·부업 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 물품 빙자 출자금 수수와 편취액 전부',
        summary:
          '대법원 2007도6241(대법원, 2007.10.25 선고) 영역에서 법원은 물품 거래를 매개한 자금 수입이 실제로는 물품거래를 빙자한 출자금 수수에 해당할 수 있고, 재물 편취를 내용으로 하는 사기죄에서 그 대가가 일부 지급된 경우에도 편취액은 교부받은 재물 전부라고 판시했습니다. 재택알바·부업을 빙자해 물품 구입·등록비 명목으로 입금을 받은 사안을 살펴볼 때에도 빙자·편취액 기준을 검토해볼 수 있습니다.',
        takeaway: '일자리 빙자 + 선입금 유도 + 잠적 결합 시 빙자·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '물품을 받긴 받았는데 사기가 되나요?',
        answer:
          '<strong>물품 거래를 빙자한 입금 유도였는지가 핵심인 영역입니다.</strong> 광고·업무 안내와 선입금 요구 정황을 확보하세요.',
      },
      {
        question: '처음엔 수당을 조금 줬는데 사기인가요?',
        answer:
          '<strong>초기 소액 수당은 신뢰 유도 수단으로 평가될 수 있는 영역입니다.</strong> 이후 미지급·추가 입금 요구 정황을 모으세요.',
      },
      {
        question: '일부 수당을 받았는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 수당·물품이 있어도 교부한 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
      },
      {
        question: '산 물품을 환불받을 수 있나요?',
        answer:
          '<strong>청약철회·환불 요건을 따져 다퉈볼 수 있는 영역입니다.</strong> 구매·결제·환불 거부 정황을 정리하세요.',
      },
      {
        question: '업체가 잠적했는데 환급이 되나요?',
        answer:
          '<strong>계좌 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '부업·다단계 사기 대응', href: '/guide/fraud/fraud-side-job-mlm-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 5. fraud-gym-prepay-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-prepay-closure-track',
    keyword: '헬스장 선결제 폐업 먹튀 사기',
    questionKeyword: '헬스장·PT·필라테스 장기 회원권을 ‘할인 행사’라며 권유받아 수십만원에서 수백만원을 한 번에 선결제했는데, 얼마 지나지 않아 갑자기 폐업하거나 양도·이전을 핑계로 문을 닫고 환불을 거부한 채 사라졌어요. 폐업이 예정된 걸 알면서도 결제를 받은 것 같은데, 사기로 신고하고 결제금을 돌려받을 수 있나요?',
    ctaKeyword: '헬스장 선결제 폐업 먹튀 폐업 인지·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 선결제 폐업 먹튀 — 5단계 폐업 인지·환급 점검 | 로앤가이드',
      description:
        '헬스장·PT 장기권을 선결제한 직후 폐업·먹튀로 환불을 거부당했다면, 형법 제347조 사기의 폐업 인지·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘오늘만 할인, 장기로 끊으면 훨씬 저렴하다’는 권유에 헬스장·PT·필라테스·요가 장기 회원권을 수십만원에서 수백만원에 한 번에 선결제한 분의 상황입니다. 그런데 얼마 다니지도 못한 사이 시설이 갑자기 폐업하거나, ‘운영자가 바뀐다·양도된다’며 문을 닫고, 남은 횟수·기간에 대한 환불을 거부한 채 운영자가 연락을 끊고 사라져, 이미 자금난·폐업이 예정된 걸 알면서도 마지막까지 장기 결제를 받아낸 건 아닌지 의심되고 막막하실 거예요. 운동하려고 큰돈을 미리 냈는데 다니지도 못하고 돈만 묶여 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 정상적인 서비스 제공 의사·능력이 없거나 폐업이 임박한 사정을 알면서 이를 고지하지 않고 장기 결제를 받았다면 기망행위로 평가될 여지가 있고, 결제금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망을 수단으로 한 권리행사가 사기죄를 구성할 수 있고, 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급·이용된 경우에도 편취액은 그 공제 차액이 아니라 교부받은 금원 전부라고 본 사례 흐름이 있는 영역입니다. 폐업 임박 인지 + 미고지 + 장기 결제 결합은 ‘폐업 인지·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·결제 정리 ② 폐업 인지·고지의무 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 선결제 폐업 먹튀 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·폐업 인지·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·결제 정리</strong> — 계약서·할인 권유·장기 결제·이용 내역 정리.</li>\n<li><strong>② 폐업 인지·고지의무</strong> — 자금난·폐업 임박을 알면서 숨기고 장기 결제를 받았는지 검토.</li>\n<li><strong>③ 편취액</strong> — 일부 이용이 있어도 교부한 결제금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 결제 이의·지급정지·동일 시설 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 폐업 환불 분쟁과 달리, 폐업이 임박한 사정을 알면서 숨기고 장기 결제를 유도했는지가 사기 판단의 분기점입니다. 결제 시점과 폐업·양도 시점의 간격, 마지막까지 모집한 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 보존 (즉시)</strong> — 계약서·할인 권유·결제·이용·폐업 공지 보존.</li>\n<li><strong>2단계 — 폐업·인지 정황 정리 (즉시)</strong> — 결제와 폐업·양도 시점 간격, 자금난·체불 정황 정리.</li>\n<li><strong>3단계 — 결제 이의·지급정지 (병행)</strong> — 카드 할부항변·결제 이의·계좌 지급정지 검토.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사기 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 시설 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 선결제 폐업 먹튀 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·폐업 인지·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>회원권 계약서·약관·환불 규정 (계약 내용)</strong></li>\n<li><strong>할인·장기 결제 권유 대화·문구 (유도 정황)</strong></li>\n<li><strong>카드 승인·할부·결제 내역 (피해 금액)</strong></li>\n<li><strong>이용 횟수·잔여 기간 기록 (잔여 가치)</strong></li>\n<li><strong>폐업·양도 공지·연락 두절 기록</strong></li>\n<li><strong>임금체불·자금난 등 폐업 임박 정황 자료</strong></li>\n<li><strong>운영자·사업자·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 시점과 폐업·양도 시점의 간격, 마지막까지 장기 회원을 모집한 정황을 정리하면 폐업 인지·기망 정황이 선명해집니다. 같은 시설 피해자를 모아 결제 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폐업 인지</strong> — 자금난·폐업 임박을 알면서 결제를 받았는지.</li>\n<li><strong>고지의무</strong> — 폐업 임박 사정이 신의칙상 고지의무 대상인지.</li>\n<li><strong>편취액</strong> — 일부 이용이 있어도 교부한 결제금 전부가 피해액인지.</li>\n<li><strong>단순 경영난 항변</strong> — 예측 못 한 폐업인지 처음부터 기망인지.</li>\n<li><strong>운영자 특정</strong> — 사업자·계좌·양수인으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (헬스장·이용권 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 이용에도 편취액은 교부 금원 전부',
        summary:
          '대법원 2017도21196(대법원, 2018.04.12 선고) 영역에서 법원은 기망을 수단으로 한 권리행사가 사기죄를 구성할 수 있고, 금원 편취를 내용으로 하는 사기죄에서 대가가 일부 지급된 경우에도 편취액은 그 공제 차액이 아니라 교부받은 금원 전부라고 판시했습니다. 헬스장 장기 회원권을 선결제받고 일부만 이용한 뒤 폐업한 사안에서 결제금 전부를 편취액으로 다투는 경우를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '폐업 임박 인지 + 미고지 + 장기 결제 결합 시 폐업 인지·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '갑자기 폐업한 것뿐이라는데 사기가 되나요?',
        answer:
          '<strong>폐업 임박을 알면서 숨기고 장기 결제를 받았는지가 핵심인 영역입니다.</strong> 결제·폐업 시점 간격을 정리하세요.',
      },
      {
        question: '조금 다녔는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 이용이 있어도 교부한 결제금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 결제 총액을 정리하세요.',
      },
      {
        question: '양도됐다며 환불을 거부해요.',
        answer:
          '<strong>양도를 핑계로 한 환불 거부도 다퉈볼 수 있는 영역입니다.</strong> 양도·폐업 공지와 잔여 가치를 정리하세요.',
      },
      {
        question: '카드 할부로 결제했는데 멈출 수 있나요?',
        answer:
          '<strong>카드 할부항변·결제 이의로 청구를 다퉈볼 수 있는 영역입니다.</strong> 폐업·미이용 정황을 정리해 이의신청하세요.',
      },
      {
        question: '같은 헬스장 회원이 많이 당했어요.',
        answer:
          '<strong>같은 시설 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 회원별 결제·이용 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-criminal-complaint-procedure' },
      { label: '선결제 먹튀 사기 대응', href: '/guide/fraud/fraud-prepayment-closure-track' },
      { label: '결제 이의·환불 절차', href: '/guide/fraud/fraud-payment-dispute-track' },
      { label: '피해금 환급 절차', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },

  // ─── 6. fraud-acquaintance-loan-default-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-acquaintance-loan-default-falsely-accused-defense',
    keyword: '지인 차용금 변제지체 사기 무고',
    questionKeyword: '지인에게 돈을 빌렸다가 사업·형편이 어려워져 약속한 날짜에 갚지 못하고 변제가 늦어졌는데, 상대가 ‘처음부터 갚을 생각 없이 빌려갔다’며 저를 사기로 고소했어요. 저는 빌릴 당시엔 갚을 의사도 능력도 있었고 일부는 갚았으며 단지 변제가 늦어진 것뿐인데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '지인 차용금 변제지체 사기 무고 편취 고의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '차용금 변제지체 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '지인 차용금 변제지체를 사기로 고소당했다면, 형법 제347조 사기의 편취 고의 판단 기준과 채무불이행 구별을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가까운 지인·친구·가족에게 사업자금·생활비·급한 돈을 빌렸다가, 매출 부진·실직·형편 악화로 약속한 변제기일에 갚지 못하고 변제가 늦어지자, 손해를 본 상대가 ‘처음부터 갚을 생각 없이 빌려간 것이다’, ‘속여서 돈을 가로챘다’며 저를 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 빌릴 당시엔 갚을 의사도 능력도 있었고 이자·원금 일부를 갚기도 했으며, 단지 예상치 못한 사정으로 변제가 늦어진 채무불이행일 뿐인데, 결과적으로 못 갚았다는 이유로 사기로 몰려 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 차용 당시 편취의 고의가 있었는지가 핵심 쟁점입니다. 판례는 사기죄의 편취 고의는 피고인이 자백하지 않는 한 범행 전후의 재력·환경·범행 내용·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단하고, 민사상 금전대차에서 채무불이행 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나 확실한 변제 의사가 없거나 약정 변제기 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 차용한 경우에는 편취 고의를 인정할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 차용 경위·변제 노력·자금 사용처를 정리해 다툴 수 있는 영역입니다. 차용 당시 변제 의사 + 일부 변제 + 사정 악화 결합은 ‘편취 고의·채무불이행 구별’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 차용 경위 정리 ② 편취 고의 ③ 변제 노력 ④ 자금 사용처 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 차용금 변제지체 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용 경위·편취 고의·변제 노력·자금 사용처·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용 경위 정리</strong> — 차용 시점·약정·변제기·당시 재력·소통 내역 정리.</li>\n<li><strong>② 편취 고의</strong> — 차용 당시 변제 의사·능력이 있었는지, 채무불이행과 구별되는지 검토.</li>\n<li><strong>③ 변제 노력</strong> — 일부 변제·이자 지급·연장 협의 등 변제 노력 정리.</li>\n<li><strong>④ 자금 사용처</strong> — 빌린 돈을 약정 목적·사업에 실제 사용했는지 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변제기를 지키지 못한 결과만으로 곧바로 사기가 되는 것이 아니라, 차용 당시 변제 의사·능력이 있었는지가 분기점입니다. 편취 고의는 객관적 사정으로 판단되므로 차용 경위·변제 노력·자금 사용처로 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용·소통 정리 (즉시)</strong> — 차용 시점·약정·변제기·당시 재력·대화 내역 정리.</li>\n<li><strong>2단계 — 변제·자금 자료 확보 (1주)</strong> — 일부 변제·이자 지급·연장 협의와 자금 사용처 자료 확보.</li>\n<li><strong>3단계 — 편취 고의 쟁점 정리 (2주)</strong> — 차용 당시 변제 의사·능력과 채무불이행 구별 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 차용금 변제지체 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차용 경위·편취 고의·변제 노력 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·약정·변제기 자료 (거래 내용)</strong></li>\n<li><strong>차용 당시 재력·소득·자산 자료 (변제 능력)</strong></li>\n<li><strong>일부 변제·이자 지급·송금 내역 (변제 노력)</strong></li>\n<li><strong>변제 연장·사정 설명 대화 기록</strong></li>\n<li><strong>빌린 돈의 사용처·지출 내역 (자금 흐름)</strong></li>\n<li><strong>고소장·상대 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘차용 당시 변제 의사·능력이 있었는지’입니다. 당시 재력·소득과 이후 사정 악화 경위, 일부 변제·연장 협의 같은 변제 노력을 정돈하면 채무불이행과 편취 고의를 구별하는 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 차용 당시 변제 의사·능력이 있었는지.</li>\n<li><strong>채무불이행 구별</strong> — 단순 변제지체인지 처음부터 기망인지.</li>\n<li><strong>변제 노력</strong> — 일부 변제·이자·연장 협의가 있었는지.</li>\n<li><strong>자금 사용처</strong> — 빌린 돈을 약정 목적에 실제 사용했는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용금 편취 고의와 채무불이행 구별',
        summary:
          '대법원 2017도20682(대법원, 2018.08.01 선고) 영역에서 법원은 사기죄의 편취 고의는 범행 전후의 재력·환경·범행 내용·거래의 이행과정·피해자와의 관계 등 객관적 사정을 종합해 판단하고, 민사상 금전대차에서 채무불이행 사실만으로 곧바로 차용금 편취의 고의를 인정할 수는 없으나 확실한 변제 의사가 없거나 변제기 내에 변제할 능력이 없는데도 변제할 것처럼 가장해 차용한 경우에는 편취 고의를 인정할 수 있다고 판시했습니다. 지인 차용금 변제지체를 사기로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '차용 당시 변제 의사 + 일부 변제 + 사정 악화 결합 시 편취 고의·채무불이행 구별 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '돈을 못 갚았을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>변제지체만으로는 부족하고 차용 당시 편취 고의가 있어야 하는 영역입니다.</strong> 당시 재력·변제 노력 자료를 정리하세요.',
      },
      {
        question: '일부라도 갚은 게 유리한가요?',
        answer:
          '<strong>일부 변제·이자 지급은 편취 고의 부정에 도움이 되는 영역입니다.</strong> 송금·연장 협의 기록을 정리하세요.',
      },
      {
        question: '빌릴 땐 갚을 능력이 있었어요.',
        answer:
          '<strong>차용 당시 재력·소득이 핵심 판단 요소인 영역입니다.</strong> 당시 자산·소득과 이후 악화 경위를 입증하세요.',
      },
      {
        question: '채무불이행과 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 변제지체인지, 차용 당시 변제 의사·능력이 없었는지로 갈리는 영역입니다.</strong> 차용·변제 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 차용·변제 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '편취 고의 입증', href: '/guide/fraud/fraud-intent-proof-track' },
      { label: '차용금·채무불이행 사기 구별', href: '/guide/fraud/fraud-loan-default-distinction-track' },
      { label: '수사 진술 대응', href: '/guide/fraud/fraud-investigation-statement-response' },
    ],
  },

  // ─── 7. sex-crime-festival-crowd-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-festival-crowd-track',
    keyword: '축제 인파 강제추행',
    questionKeyword: '축제·공연·불꽃놀이·해돋이 같은 행사장 인파 속에서, 누군가 일부러 밀착해 제 가슴·엉덩이·허벅지를 만지거나 끌어안아 큰 수치심을 느꼈어요. 사람이 많아 누가 그랬는지 바로 잡지는 못했고 그 자리에서 항의도 못 했는데, 이런 행사장 인파 속 강제추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '축제 인파 강제추행 기습추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '축제 인파 강제추행 — 5단계 강제추행 해당성 점검 | 로앤가이드',
      description:
        '축제·행사장 인파 속에서 누군가 신체를 만지거나 끌어안아 수치심을 느꼈다면, 형법 제298조 강제추행의 폭행·기습추행 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「축제·콘서트·불꽃놀이·해돋이·핼러윈 같은 행사장에 빽빽이 모인 인파 속에서, 누군가 우연을 가장해 또는 일부러 몸을 밀착하며 제 가슴·엉덩이·허벅지를 만지거나 갑자기 뒤에서 끌어안아 큰 수치심과 모욕감을 느낀 분의 상황입니다. 사람이 너무 많고 순식간이라 누가 그랬는지 곧바로 잡지 못했고, 당황해 그 자리에서 제대로 거부·항의하지 못한 채 빠져나와, ‘붐비는 데서 닿은 것뿐이라고 하면 어쩌지’ 싶어 위축되고 막막하셨을 거예요. 즐거우려고 간 자리에서 이런 일을 당해 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 추행의 고의로 상대의 의사에 반하는 유형력 행사, 즉 폭행행위를 하여 실행에 착수했으나 추행 결과에 이르지 못하면 강제추행미수죄가 성립하고, 이러한 법리는 폭행행위 자체가 추행으로 인정되는 기습추행에도 마찬가지로 적용된다고 본 사례 흐름이 있는 영역입니다. 인파 속 의사에 반한 접촉 + 기습 결합은 ‘강제추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 축제 인파 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·장소·접촉 부위·방식·인상착의·동선 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의사에 반한 접촉이 강제추행·기습추행인지, 미수도 처벌되는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 행사장·주변 CCTV·직접 촬영 정황 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·목격자·동선으로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 붐비는 곳이라도 의사에 반한 접촉은 강제추행으로 평가될 수 있고, 추행에 이르지 못해도 기습추행 미수가 성립할 수 있다는 점이 분기점입니다. 행사장 CCTV는 보존 기간이 짧으므로 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·장소·접촉 부위·방식·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV·기록 확보 (즉시)</strong> — 행사장·주변·상가 CCTV 보존 요청, 직접 촬영 정황 보존.</li>\n<li><strong>3단계 — 주최·관리 협조 (직후)</strong> — 행사 주최·시설에 영상·안전요원 기록 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">축제 인파 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·동선 정황 기록</strong></li>\n<li><strong>행사장·주변 CCTV 보존 요청 자료</strong></li>\n<li><strong>직접 촬영한 정황 사진·영상 (현장 자료)</strong></li>\n<li><strong>동행자·목격자 진술·연락처</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행사장·주변 CCTV는 보존 기간이 짧으므로 곧바로 주최·시설·경찰에 보존을 요청하는 것이 중요합니다. 인상착의·동선과 직후 호소 정황을 남기면 가해자 특정과 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>고의·우연 구별</strong> — 붐벼서 닿은 우연인지 추행의 고의인지.</li>\n<li><strong>미수·기습추행</strong> — 추행에 이르지 못해도 기습추행 미수가 성립하는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·목격자·동선으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·목격자 진술·정황으로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행과 강제추행미수의 성립',
        summary:
          '대법원 2015도6980(대법원, 2015.09.10 선고) 영역에서 법원은 추행의 고의로 상대의 의사에 반하는 유형력 행사, 즉 폭행행위를 하여 실행에 착수했으나 추행 결과에 이르지 못한 때에는 강제추행미수죄가 성립하고, 이러한 법리는 폭행행위 자체가 추행으로 인정되는 기습추행에도 마찬가지로 적용된다고 판시했습니다. 인파 속에서 갑자기 끌어안거나 만지는 등 의사에 반한 접촉을 강제추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '인파 속 의사에 반한 접촉 + 기습 결합 시 강제추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '붐비는 곳이라 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>우연한 접촉인지 추행의 고의인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복 정황을 구체적으로 남기세요.',
      },
      {
        question: '직접 만지진 않고 끌어안으려다 멈췄어요.',
        answer:
          '<strong>추행에 이르지 못해도 기습추행 미수가 성립할 수 있는 영역입니다.</strong> 접촉 시도·동작을 구체적으로 기록하세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>인파 속이라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '누가 그랬는지 못 봤는데 특정되나요?',
        answer:
          '<strong>행사장·주변 CCTV와 목격자로 특정할 여지가 있는 영역입니다.</strong> 일시·동선·인상착의를 즉시 기록하세요.',
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
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: '공공장소 추행 대응', href: '/guide/sex-crime/sex-crime-public-place-touch-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 8. sex-crime-photo-studio-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-photo-studio-track',
    keyword: '사진 촬영 빙자 추행',
    questionKeyword: '프로필·바디·웨딩 촬영을 받으러 갔다가, 사진작가·실장이 ‘포즈 교정·자세를 잡아준다’는 핑계로 제 가슴·허벅지·골반 등을 만지거나 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느꼈어요. 촬영 중이라 그 자리에서 항의도 못 했는데, 이런 촬영 빙자 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '사진 촬영 빙자 추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사진 촬영 빙자 추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '프로필·바디 촬영 중 작가가 포즈 교정을 빙자해 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「프로필·바디프로필·웨딩·개인 화보 촬영을 받으러 스튜디오에 갔다가, 사진작가·실장·헤어메이크업 담당이 ‘포즈를 교정해준다’, ‘자세·각도를 잡아준다’는 핑계로 제 가슴·허벅지·골반·엉덩이 등을 만지거나 필요 이상으로 몸을 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 작가와 둘만 있는 폐쇄된 공간이고 촬영 중이라 ‘원래 이렇게 잡아주는 건가’ 헷갈려 그 자리에서 제대로 항의하지 못한 채 촬영을 마치고 나와, 정상적인 연출이었는지 추행이었는지 혼란스러워 막막하셨을 거예요. 좋은 사진을 남기려던 자리에서 이런 일을 당해 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 추행이란 객관적으로 일반인에게 성적 수치심·혐오감을 일으키고 선량한 성적 도덕관념에 반해 피해자의 성적 자유를 침해하는 행위로서, 그 해당 여부는 피해자의 의사·성별·연령·관계·경위·구체적 행위태양·주위 상황 등을 종합해 신중히 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 촬영 빙자 + 의사에 반한 접촉 + 폐쇄 공간 결합은 ‘추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 작가 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사진 촬영 빙자 추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·작가 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 촬영 일시·장소·접촉 부위·방식·반복 여부 정리.</li>\n<li><strong>② 추행 해당성</strong> — 연출을 넘어선 의사에 반한 접촉이 추행에 해당하는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 스튜디오 예약·결제·CCTV·촬영 원본 보존 요청.</li>\n<li><strong>④ 작가 특정</strong> — 예약·결제·소속·계약으로 작가·실장 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포즈 교정·연출을 빙자한 접촉이라도 의사에 반하고 성적 자유를 침해하면 추행으로 평가될 수 있다는 점이 분기점입니다. 접촉이 연출의 상당한 범위를 벗어났는지를 부위·방식·반복으로 구체화하고, 예약·CCTV는 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 촬영 일시·장소·접촉 부위·방식·반복 정황 정리.</li>\n<li><strong>2단계 — 예약·CCTV 확보 (즉시)</strong> — 스튜디오 예약·결제·CCTV·촬영 원본 보존 요청.</li>\n<li><strong>3단계 — 스튜디오·소속 협조 (직후)</strong> — 스튜디오에 영상·예약·작가 정보 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진 촬영 빙자 추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>촬영 일시·장소·접촉 정황 메모</strong></li>\n<li><strong>스튜디오 예약·결제·계약 기록 (작가 특정)</strong></li>\n<li><strong>스튜디오 CCTV 보존 요청 자료</strong></li>\n<li><strong>촬영 원본·연출 지시 메시지 기록</strong></li>\n<li><strong>직후 호소·연락·후기 기록</strong></li>\n<li><strong>동행자·동료 모델·목격자 진술</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스튜디오 예약·CCTV·촬영 원본은 보존 기간이 짧거나 삭제될 수 있으므로 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소 정황을 남기면 연출의 상당성을 넘었는지 판단하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>연출·상당성</strong> — 포즈 교정의 상당한 범위를 벗어난 접촉인지.</li>\n<li><strong>동의 항변</strong> — 촬영 진행 동의가 신체 접촉 동의까지인지.</li>\n<li><strong>작가 특정</strong> — 예약·결제·소속으로 작가를 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·촬영 원본·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행의 의미와 상당성 판단',
        summary:
          '대법원 2024도18701(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하고, 공동체 내 신체접촉이 자연스러운 비언어적 의사소통이나 의례적·사회적으로 상당한 것으로 볼 수 있는 경우에는 추행에 해당하지 않을 수 있으나, 상대의 의사에 반하는 유형력 행사로 성적 자유를 침해하는 정도에 이르렀는지를 종합해 판단해야 한다고 판시했습니다. 촬영 연출을 빙자한 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '촬영 빙자 + 의사에 반한 접촉 + 폐쇄 공간 결합 시 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '포즈를 잡아준 것뿐이라고 하면 어쩌죠?',
        answer:
          '<strong>연출의 상당한 범위를 벗어난 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '촬영에 동의했는데도 추행이 되나요?',
        answer:
          '<strong>촬영 동의가 신체 접촉 동의까지는 아닌 영역입니다.</strong> 동의 범위와 의사에 반한 접촉 정황을 정리하세요.',
      },
      {
        question: '그 자리에서 항의를 못 했는데 불리한가요?',
        answer:
          '<strong>폐쇄 공간이라 즉시 항의하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '작가를 어떻게 특정하나요?',
        answer:
          '<strong>예약·결제·소속·계약으로 특정할 수 있는 영역입니다.</strong> 스튜디오 예약·CCTV 보존부터 요청하세요.',
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
      { label: '강제추행 신고 절차', href: '/guide/sex-crime/sex-crime-indecent-assault-report-procedure' },
      { label: '업소·시술 추행 대응', href: '/guide/sex-crime/sex-crime-service-touch-track' },
      { label: '추행 증거 보전', href: '/guide/sex-crime/sex-crime-evidence-preservation-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 9. sex-crime-fitting-room-hidden-cam-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-fitting-room-hidden-cam-track',
    keyword: '탈의실 몰래카메라 촬영',
    questionKeyword: '옷가게·수영장·헬스장·찜질방 탈의실이나 피팅룸에서 옷을 갈아입다가, 천장·환풍구·콘센트·옷걸이 같은 곳에 숨겨진 초소형 카메라를 발견했거나 누군가 휴대전화를 칸막이 위·아래로 들이대 몰래 촬영당한 것 같아 너무 놀랐어요. 이런 탈의실 몰래카메라 촬영을 신고하고 가해자를 처벌할 수 있나요?',
    ctaKeyword: '탈의실 몰래카메라 신고·증거보전 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '탈의실 몰래카메라 촬영 — 5단계 신고·증거보전 점검 | 로앤가이드',
      description:
        '탈의실·피팅룸에서 숨겨진 카메라나 휴대전화로 몰래 촬영당했다면, 성폭력처벌법 제14조 카메라등이용촬영죄의 증거보전과 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「옷가게 피팅룸이나 수영장·헬스장·찜질방·공중화장실 탈의실에서 옷을 갈아입다가, 천장·환풍구·콘센트·옷걸이·시계 같은 곳에 숨겨진 초소형 카메라를 발견하거나, 옆 칸 사람이 칸막이 위·아래 틈으로 휴대전화를 들이대 제 신체를 몰래 촬영하는 것을 눈치채 큰 충격과 수치심을 느낀 분의 상황입니다. 이미 찍힌 영상이 어디로 퍼졌을지, 누가 설치했는지 두려운데, 현장에서 곧바로 기기를 확보하거나 가해자를 붙잡지 못한 채 빠져나와 잠도 못 이루실 만큼 막막하셨을 거예요.」 성폭력처벌법 제14조 제1항은 카메라나 그 밖에 이와 유사한 기능을 갖춘 기계장치를 이용하여 성적 욕망·수치심을 유발할 수 있는 사람의 신체를 그 의사에 반하여 촬영한 자를 7년 이하의 징역 또는 5천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 위 조항이 촬영 대상을 ‘사람의 신체’로 규정하므로 사람의 신체 그 자체를 직접 촬영하는 행위가 처벌 대상이 되고, 의사에 반해 촬영한 촬영물뿐 아니라 그 복제물의 소지·유포 등 후속 행위도 규율 대상이 될 수 있다고 본 사례 흐름이 있는 영역입니다. 사적 신체 촬영 + 의사에 반한 촬영 + 탈의 공간 결합은 ‘신고·증거보전’ 절차가 가능한 트랙입니다. 피해자라면 ① 현장·정황 정리 ② 촬영 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·삭제·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 탈의실 몰래카메라 촬영 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·촬영 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장·정황 정리</strong> — 일시·장소·카메라 위치·촬영 방향·발견 경위 정리.</li>\n<li><strong>② 촬영 해당성</strong> — 의사에 반해 신체를 촬영했는지, 미수·소지·유포도 포함되는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 발견한 카메라·기기 현상 유지, 매장·시설 CCTV 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 설치자·이용 내역·CCTV로 가해자 특정.</li>\n<li><strong>⑤ 신고·삭제·보호</strong> — 112·디지털성범죄피해자지원센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 탈의 공간에서 의사에 반해 신체를 촬영했는지가 분기점이고, 발견한 카메라·기기는 손대지 말고 적법 절차로 확보하는 것이 중요합니다. 매장·시설 CCTV는 보존 기간이 짧으므로 즉시 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·디지털성범죄피해자지원센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·기기 보존 (즉시)</strong> — 발견한 카메라·기기는 손대지 말고 현상 유지, 위치·정황 사진 기록.</li>\n<li><strong>2단계 — 시설·매장 협조 (즉시)</strong> — 매장·시설에 CCTV·이용 내역 보존 요청.</li>\n<li><strong>3단계 — 경찰 신고·기기 확보 (직후)</strong> — 112 신고, 적법 절차로 기기·영상 확보 협조.</li>\n<li><strong>4단계 — 삭제·확산 차단 (병행)</strong> — 디지털성범죄피해자지원센터에 삭제·확산 차단 지원 요청.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">탈의실 몰래카메라 촬영 신고·증거보전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 현장·촬영 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·카메라 위치·촬영 방향 메모</strong></li>\n<li><strong>발견한 카메라·기기 위치 사진 (현장 자료)</strong></li>\n<li><strong>매장·시설 CCTV 보존 요청 자료</strong></li>\n<li><strong>설치·관리자·이용자 정보 (가해자 특정)</strong></li>\n<li><strong>옆 칸·휴대전화 촬영 정황 기록</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>디지털성범죄피해자지원센터 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발견한 카메라·기기는 손대지 말고 위치·정황을 사진으로 남긴 뒤 경찰에 적법 확보를 맡기는 것이 중요합니다. 매장·시설 CCTV와 설치·관리자 정보를 보존하면 가해자 특정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영 해당성</strong> — 의사에 반해 성적 수치심 유발 신체를 촬영했는지.</li>\n<li><strong>미수·소지·유포</strong> — 촬영 미수·촬영물 소지·유포도 처벌 대상이 되는지.</li>\n<li><strong>현장 미검거</strong> — 즉시 붙잡지 못해도 기기·CCTV로 특정할 수 있는지.</li>\n<li><strong>증거 적법성</strong> — 기기·영상이 적법 절차로 확보됐는지.</li>\n<li><strong>유포·확산</strong> — 촬영물이 이미 유포됐는지, 삭제·차단이 필요한지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 (현장 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 (삭제·확산 차단 지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카메라등이용촬영죄의 신체 촬영과 복제물',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항이 촬영 대상을 ‘사람의 신체’로 규정하므로 사람의 신체 그 자체를 직접 촬영하는 행위가 처벌 대상이 되고, 의사에 반하지 않은 촬영물도 그 복제물의 소지 등 후속 행위가 규율 대상이 될 수 있다고 판시했습니다. 탈의실·피팅룸에서 의사에 반해 신체를 촬영·소지·유포한 사안을 살펴볼 때에도 이러한 촬영 해당성과 복제물 기준을 검토해볼 수 있습니다.',
        takeaway: '사적 신체 촬영 + 의사에 반한 촬영 + 탈의 공간 결합 시 신고·증거보전 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '카메라를 발견했는데 어떻게 해야 하나요?',
        answer:
          '<strong>손대지 말고 위치·정황을 사진으로 남기는 것이 먼저인 영역입니다.</strong> 곧바로 112에 신고해 적법 확보를 맡기세요.',
      },
      {
        question: '촬영물을 못 봤는데도 신고가 되나요?',
        answer:
          '<strong>촬영 미수도 처벌 대상이 될 수 있는 영역입니다.</strong> 카메라·촬영 정황과 발견 경위를 구체적으로 기록하세요.',
      },
      {
        question: '옆 칸에서 휴대전화로 찍은 것 같아요.',
        answer:
          '<strong>의사에 반한 신체 촬영이면 처벌 대상이 될 수 있는 영역입니다.</strong> 촬영 방향·정황과 시설 CCTV를 확보하세요.',
      },
      {
        question: '이미 촬영물이 퍼졌을까 걱정돼요.',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 삭제·확산 차단 지원을 받아볼 수 있는 영역입니다.</strong> 신고와 함께 지원을 요청하세요.',
      },
      {
        question: '신고 전 상담은 어디서 받나요?',
        answer:
          '<strong>여성긴급전화 1366·디지털성범죄피해자지원센터에서 상담을 받아볼 수 있는 영역입니다.</strong> 대응 방향을 먼저 정리하세요.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '불법촬영 신고 절차', href: '/guide/sex-crime/sex-crime-illegal-filming-report-procedure' },
      { label: '숨은 카메라 발견 대응', href: '/guide/sex-crime/sex-crime-hidden-camera-discovery-track' },
      { label: '촬영물 삭제·확산 차단', href: '/guide/sex-crime/sex-crime-image-deletion-support-track' },
      { label: '피해 손해배상 청구', href: '/guide/sex-crime/sex-crime-civil-damages-track' },
    ],
  },

  // ─── 10. sex-crime-blind-date-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-blind-date-falsely-accused-defense',
    keyword: '소개팅 강제추행 무고',
    questionKeyword: '소개팅·데이팅 앱에서 만난 상대와 식사·카페·드라이브를 하며 손을 잡거나 어깨에 손을 올리는 등 분위기 속 접촉이 있었는데, 헤어진 뒤 상대가 저를 강제추행으로 고소했어요. 저는 서로 호감 속에 자연스러운 접촉이었다고 생각했고 사실과 다른 부분도 있는데, 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어하나요?',
    ctaKeyword: '소개팅 강제추행 무고 진술 신빙성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '소개팅 강제추행 무고 방어 — 5단계 진술 신빙성 점검 | 로앤가이드',
      description:
        '소개팅 자리 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 해당성과 무죄추정·피해자 진술 신빙성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「소개팅·데이팅 앱·지인 소개로 만난 상대와 식사·카페·드라이브·산책을 하며 손을 잡거나 어깨·등에 손을 얹는 등 호감 어린 분위기 속 신체 접촉이 있었는데, 만남이 끝나거나 관계가 틀어진 뒤 상대가 ‘강제로 추행을 당했다’며 저를 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 서로 호감 속에 자연스럽게 이루어진 접촉이라 여겼고 상대 진술과 사실관계가 다른 부분도 있는데, 직접 증거가 상대 진술 위주이고 둘만 있던 자리라 정황이 엇갈려 어떻게 다퉈야 할지 막막하고 억울하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉이 추행에 해당하는지, 그리고 직접 증거가 사실상 피해자 진술뿐인 경우 그 진술이 합리적 의심을 배제할 신빙성을 갖추었는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고, 통상적으로 추행이 이루어질 것으로 예상하기 곤란한 상황에서 피해자 진술이 유일한 증거인 경우, 진술 내용 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 합리적 의심을 배제할 정도의 신빙성이 있어야 유죄로 판단할 수 있다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 호감 속 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 해당성·진술 신빙성’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 진술 신빙성 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 소개팅 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·진술 신빙성·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 만남 경위·장소·동선·접촉 경위·시간대 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 진술 신빙성</strong> — 피해자 진술이 일관·구체·객관 사실과 부합하는지, 무죄추정 원칙 검토.</li>\n<li><strong>④ 정황·증거</strong> — 메시지·CCTV·결제·동선으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉이 추행에 해당하는지와 피해자 진술이 합리적 의심을 배제할 신빙성을 갖추는지가 분기점입니다. 만남 전후 메시지·동선·정황으로 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·동선 정리 (즉시)</strong> — 만남 경위·장소·동선·접촉 경위·시간대 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 만남 전후 메시지·CCTV·결제·이동 기록 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 피해자 진술과 객관 정황의 불부합·모순 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">소개팅 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>만남 경위·장소·동선·접촉 경위 메모</strong></li>\n<li><strong>만남 전후 메시지·통화·SNS 기록</strong></li>\n<li><strong>식당·카페·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·예약·시간대 객관 자료 (동선 특정)</strong></li>\n<li><strong>지인·소개자 진술·연락처</strong></li>\n<li><strong>피해자 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉이 추행에 해당하는지’와 ‘피해자 진술이 합리적 의심을 배제할 신빙성을 갖추는지’입니다. 만남 전후 메시지와 동선·시간대 같은 객관 정황을 정돈해 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>진술 신빙성</strong> — 피해자 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심을 배제할 정도의 증명이 있는지.</li>\n<li><strong>허위 동기</strong> — 허위로 불리한 진술을 할 동기·이유가 있는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무죄추정과 피해자 진술의 신빙성 판단',
        summary:
          '대법원 2016도21231(대법원, 2017.10.31 선고) 영역에서 법원은 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고, 통상적으로 추행이 이루어질 것으로 예상하기 곤란한 상황에서 피해자 진술이 유일한 증거인 경우, 진술 내용 자체의 합리성·타당성과 객관적 정황·경험칙에 비추어 합리적 의심을 배제하고 무죄 주장을 배척하기에 충분할 정도의 신빙성이 있어야 유죄로 판단할 수 있다고 판시했습니다. 소개팅 자리 접촉을 추행으로 다투는 사안에서 진술 신빙성과 추행 해당성을 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '호감 속 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 해당성·진술 신빙성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '서로 호감 속 접촉이었는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 해당성과 진술 신빙성이 핵심인 영역입니다.</strong> 만남 경위·동선·접촉 경위를 정리하세요.',
      },
      {
        question: '상대 진술뿐인데도 처벌되나요?',
        answer:
          '<strong>진술이 유일한 증거면 합리적 의심을 배제할 신빙성이 요구되는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 짚으세요.',
      },
      {
        question: '둘만 있던 자리라 증거가 없어요.',
        answer:
          '<strong>메시지·CCTV·동선 같은 객관 정황으로 사실관계를 보강할 수 있는 영역입니다.</strong> 만남 전후 기록을 확보하세요.',
      },
      {
        question: '상대가 왜 이렇게 진술하는지 모르겠어요.',
        answer:
          '<strong>허위로 불리한 진술을 할 동기·경위도 신빙성 판단 요소인 영역입니다.</strong> 관계 변화·정황을 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 경위·정황 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '성범죄 무고 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 도메인 허브', href: '/guide/sex-crime' },
      { label: '성범죄 무고 방어 전략', href: '/guide/sex-crime/sex-crime-false-accusation-defense' },
      { label: '피해자 진술 신빙성 다툼', href: '/guide/sex-crime/sex-crime-statement-credibility-track' },
      { label: '강제추행 혐의 대응', href: '/guide/sex-crime/sex-crime-indecent-assault-suspect-response-track' },
      { label: '수사 진술 대응', href: '/guide/sex-crime/sex-crime-investigation-statement-response' },
    ],
  },
];
