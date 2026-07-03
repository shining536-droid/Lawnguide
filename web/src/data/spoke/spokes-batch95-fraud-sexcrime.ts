import { SpokePage } from '../spoke-pages';

// batch95 fraud(6) + sex-crime(4) — 10개 (2026-06-12)
//
// 고유 존재 이유:
// 1. fraud-luxury-bag-counterfeit-track — 일반 중고거래류와 분기. '정품이라며 중고 명품가방을 팔았는데 가품이었음' 정품 표시·기망·편취 판단형 트랙(victim).
// 2. fraud-chatroom-coin-pump-track — 일반 투자사기류와 분기. '단톡방 리딩방에서 코인 시세조작·펌핑으로 매수 유인 후 투자금 편취' 기망·재산침해 판단형 트랙(victim).
// 3. fraud-tuition-payment-scam-track — 일반 금전사기류와 분기. '등록금·학자금을 싸게 대납해준다며 입금받아 잠적' 대납 빙자·편취 판단형 트랙(victim).
// 4. fraud-mobile-invite-phishing-track — 일반 스미싱류와 분기. '모바일 청첩장·부고 문자 링크로 악성앱 설치·금융정보 탈취' 피싱·송금 절차형 트랙(victim).
// 5. fraud-farm-produce-nondelivery-track — 일반 중고거래 미배송류와 분기. 'SNS·산지직송 농산물을 선결제했는데 미배송·잠적' 미배송·편취 절차형 트랙(victim).
// 6. fraud-guarantor-debt-repayment-falsely-accused-defense — 일반 사기 무고류와 분기. '보증·연대보증 채무 변제지체를 사기로 고소당함' 고지의무·편취 고의 방어 판단형 트랙(accused).
// 7. sex-crime-karaoke-afterparty-track — 일반 추행류와 분기. '노래방·회식 2차 좁은 공간에서 신체 접촉' 추행 해당성·상당성 판단형 트랙(victim).
// 8. sex-crime-subway-commute-track — 일반 추행류와 분기. '지하철 출근길 만원 전동차에서 밀착 추행' 추행 고의·범의 판단형 트랙(victim).
// 9. sex-crime-academy-instructor-track — 일반 추행류와 분기. '학원·과외 강사가 지도 빙자로 신체 접촉' 추행 고의·신빙성 판단형 트랙(victim).
// 10. sex-crime-workplace-dinner-falsely-accused-defense — 일반 성범죄 무고류와 분기. '직장 회식 자리 접촉을 추행으로 고소당함' 추행 고의·무죄추정 다툼 방어 판단형 트랙(accused).

export const spokesBatch95FraudSexCrime: SpokePage[] = [
  // ─── 1. fraud-luxury-bag-counterfeit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-bag-counterfeit-track',
    keyword: '중고 명품가방 가품 판매 사기',
    questionKeyword: '중고거래 앱·SNS에서 ‘정품, 매장 구매, 보증서 있음’이라는 판매자의 말을 믿고 비싼 값에 중고 명품가방을 샀는데, 받고 보니 시리얼·박음질·로고가 이상해 감정을 맡겼더니 가품이라는 결과가 나왔어요. 판매자는 ‘정품이 맞다, 환불은 안 된다’며 발뺌하는데, 처음부터 가품을 정품으로 속여 판 이 거래를 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고 명품가방 가품 정품 표시·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중고 명품가방 가품 판매 사기 — 5단계 기망 점검 | 로앤가이드',
      description:
        '정품이라던 중고 명품가방이 감정 결과 가품으로 드러나고 판매자가 환불을 거부한다면, 형법 제347조 사기의 정품 표시·기망·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「중고거래 앱·명품 카페·SNS에서 ‘정품 맞다, 백화점·면세점에서 산 것, 보증서·영수증 있다’는 판매자의 설명과 사진을 믿고, 새 제품보다 싸다는 생각에 적지 않은 돈을 주고 중고 명품가방·지갑·시계를 산 분의 상황입니다. 그런데 막상 물건을 받아보니 시리얼 번호·박음질·로고 각인·내피 재질이 어딘가 어색하고, 불안한 마음에 정식 감정원에 감정을 맡겼더니 ‘가품’이라는 결과가 나와 충격받으셨을 거예요. 판매자에게 따지자 ‘정품이 맞다, 네가 바꿔치기한 것 아니냐, 환불은 안 된다’며 발뺌하거나 연락을 끊어, 처음부터 가품인 줄 알면서 정품으로 속여 판 건 아닌지 의심되고 막막하실 거예요. 큰돈을 주고 짝퉁을 떠안은 것 같아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 가품임을 알거나 알 수 있었음에도 정품·정품 보증서가 있는 것처럼 속여 정품 시세로 판매했다면 기망행위로 평가될 여지가 있고, 매매대금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 기망행위에 의한 재물·재산상 이익 취득이 사기죄의 본질이고, 사기죄와 함께 위계에 의한 업무방해 등 별개 죄가 성립할 수 있어 그 죄수 관계를 따로 살펴야 한다고 본 사례 흐름이 있는 영역입니다. 정품 표시 + 가품 판매 + 환불 거부 결합은 ‘정품 표시·기망·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·물건 정리 ② 정품 표시·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·반환 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품가방 가품 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·정품 표시·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·물건 정리</strong> — 판매 글·정품 보증 문구·매매대금 송금·물건 상태 정리.</li>\n<li><strong>② 정품 표시·기망</strong> — 가품임을 알면서 정품·보증서가 있는 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취액</strong> — 가품 시세 차액이 아니라 교부한 매매대금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·반환</strong> — 계약 취소·매매대금 반환·지급정지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 품질 분쟁과 달리, 가품임을 알거나 알 수 있었음에도 정품으로 속여 정품 시세로 팔았는지가 사기 판단의 분기점입니다. 정품 보증 문구와 정식 감정 결과를 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·물건 자료 보존 (즉시)</strong> — 판매 글·정품 보증 대화·송금·받은 물건 상태 사진 보존.</li>\n<li><strong>2단계 — 정식 감정 확보 (즉시)</strong> — 명품 감정원 감정서로 가품 여부를 객관적으로 확보.</li>\n<li><strong>3단계 — 계약취소·반환 요구 (병행)</strong> — 내용증명으로 계약 취소·매매대금 반환을 요구.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담.</li>\n<li><strong>5단계 — 반환·지급정지 (2개월 내)</strong> — 계좌 지급정지·민사 매매대금 반환 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품가방 가품 판매 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·정품 표시·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·정품 보증·구매처 설명 캡처 (기망 정황)</strong></li>\n<li><strong>정품 보증서·영수증·구성품 주장 자료</strong></li>\n<li><strong>명품 감정원 감정서 (가품 입증)</strong></li>\n<li><strong>받은 물건 시리얼·박음질·로고 사진 (상태 입증)</strong></li>\n<li><strong>매매대금 송금·결제 내역 (피해 금액)</strong></li>\n<li><strong>환불 요구·발뺌·연락 두절 대화 기록</strong></li>\n<li><strong>판매자 계정·닉네임·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정품 보증 문구와 정식 감정서를 대조하면 정품으로 속였는지 기망 정황이 선명해집니다. 받은 그대로의 물건 상태를 사진·영상으로 남겨 바꿔치기 항변에 대비하면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가품 인식</strong> — 가품임을 알거나 알 수 있었는지.</li>\n<li><strong>정품 표시</strong> — 정품·보증서가 있는 것처럼 표시·설명했는지.</li>\n<li><strong>편취액</strong> — 가품 시세 차액이 아니라 매매대금 전부가 피해액인지.</li>\n<li><strong>바꿔치기 항변</strong> — 받은 물건이 판매한 그 물건인지.</li>\n<li><strong>판매자 특정</strong> — 계정·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (중고거래·명품 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 편취와 별개 죄의 죄수',
        summary:
          '대법원 2024도1932(대법원, 2025.09.11 선고) 영역에서 법원은 피해자를 기망하여 대금 등을 교부받은 사기죄와 위계로써 피해자의 업무를 방해한 업무방해죄는 보호법익·행위태양·기수 시기가 달라 별개로 성립하고 실체적 경합관계에 있다고 판시했습니다. 가품을 정품으로 속여 매매대금을 교부받은 사안을 살펴볼 때에도 기망에 의한 편취 성립과 죄수 관계를 검토해볼 수 있습니다.',
        takeaway: '정품 표시 + 가품 판매 + 환불 거부 결합 시 정품 표시·기망·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '품질 불만일 뿐이라는데 사기가 되나요?',
        answer:
          '<strong>가품을 정품으로 속여 정품 시세로 팔았는지가 핵심인 영역입니다.</strong> 정품 보증 문구와 감정서를 확보하세요.',
      },
      {
        question: '판매자가 바꿔치기했다고 우겨요.',
        answer:
          '<strong>받은 그대로의 상태 입증이 중요한 영역입니다.</strong> 개봉·수령 시점의 물건 상태를 사진·영상으로 남기세요.',
      },
      {
        question: '감정서가 꼭 필요한가요?',
        answer:
          '<strong>정식 감정서는 가품 입증의 핵심 자료인 영역입니다.</strong> 공인 감정원 감정 결과를 확보해 두세요.',
      },
      {
        question: '가품이라도 일부 값어치는 있으니 손해가 적나요?',
        answer:
          '<strong>가품 시세 차액이 아니라 교부한 매매대금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '판매자가 환불을 거부하고 연락을 끊었어요.',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
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

  // ─── 2. fraud-chatroom-coin-pump-track ───
  {
    domain: 'fraud',
    slug: 'fraud-chatroom-coin-pump-track',
    keyword: '단톡방 코인 시세조작 사기',
    questionKeyword: '오픈채팅·텔레그램 리딩방·코인 단톡방에서 ‘이 코인이 곧 펌핑된다, 따라 사면 수익 보장’이라는 운영자·전문가 말을 믿고 특정 코인을 매수했는데, 제가 사들이자마자 가격이 급락하고 운영자·세력은 미리 빠져나가 큰 손실을 봤어요. 처음부터 시세를 띄워 저를 매수에 끌어들여 돈을 가로챈 것 같은데, 사기로 신고하고 손해를 따져볼 수 있나요?',
    ctaKeyword: '단톡방 코인 시세조작 기망·재산침해 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '단톡방 코인 시세조작 사기 — 5단계 기망·편취 점검 | 로앤가이드',
      description:
        '리딩방·단톡방에서 코인 펌핑·수익 보장 말을 믿고 매수했다가 급락으로 손실을 봤다면, 형법 제347조 사기의 기망·재산침해 판단과 대응까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「오픈채팅·텔레그램 리딩방·코인 단톡방에 초대받아, ‘여기 추천 종목은 다 올랐다, 이 코인은 곧 세력이 들어와 펌핑된다, 우리만 아는 정보다, 따라 사면 수익은 보장된다’는 운영자·자칭 전문가의 말과 인증 사진·수익 캡처를 믿고, 시키는 대로 특정 코인을 매수한 분의 상황입니다. 그런데 정작 본인이 사들이자마자 가격이 급락하고, 운영자·작전 세력은 미리 사둔 물량을 고점에서 떠넘기고 빠져나간 정황이 드러나, 처음부터 시세를 인위적으로 띄워 저 같은 일반 참여자를 매수에 끌어들여 손실을 떠안기고 돈을 가로챈 건 아닌지 의심되고 막막하실 거예요. 큰돈이 순식간에 반 토막 난 것 같아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부 또는 재산상 이익을 취득한 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 허위·과장 정보나 인위적 시세조작으로 매수를 유인하여 재산상 손해를 입혔다면 기망행위로 평가될 여지가 있고, 자본시장법상 시세조종·부정거래 등 별도 규정 위반도 함께 문제 될 수 있습니다. 판례는 기망으로 인한 처분행위가 있으면 그 자체로 재산침해가 되어 사기죄가 성립할 수 있고, 진정한 재산상 피해자가 누구인지를 가려 그에 대한 사기죄로 의율해야 한다고 본 사례 흐름이 있는 영역입니다. 시세조작·수익 보장 + 매수 유인 + 손실 결합은 ‘기망·재산침해’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·유인 정리 ② 기망·시세조작 ③ 피해액 ④ 형사 신고 ⑤ 회수·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 코인 시세조작 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·기망·피해액·신고·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·유인 정리</strong> — 채팅방 초대·추천·수익 보장 발언·매수 시점 정리.</li>\n<li><strong>② 기망·시세조작</strong> — 허위·과장 정보나 인위적 펌핑으로 매수를 유인했는지 검토.</li>\n<li><strong>③ 피해액</strong> — 매수·매도 내역으로 입은 손실액 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·자본시장법 위반 신고 검토.</li>\n<li><strong>⑤ 회수·집단 대응</strong> — 계좌·거래소 추적·동일 운영자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자 손실과 달리, 운영자·세력이 허위 정보·인위적 시세조작으로 매수를 유인해 손실을 떠넘겼는지가 사기 판단의 분기점입니다. 채팅 로그와 매매·시세 흐름을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채팅·거래 자료 보존 (즉시)</strong> — 채팅방 발언·추천·수익 인증·초대 경위 캡처·보존.</li>\n<li><strong>2단계 — 매매·시세 정리 (즉시)</strong> — 매수·매도 내역, 매수 직후 급락·세력 매도 정황 정리.</li>\n<li><strong>3단계 — 계좌·거래소 정황 확보 (병행)</strong> — 입출금 계좌·거래소 거래 내역을 확보.</li>\n<li><strong>4단계 — 경찰·금감원 신고 (1주)</strong> — 사이버범죄 신고, 금융감독원 1332 상담.</li>\n<li><strong>5단계 — 회수·집단 대응 (2개월 내)</strong> — 동일 운영자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 코인 시세조작 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·기망·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>채팅방 초대·추천·수익 보장 발언 캡처 (유인 정황)</strong></li>\n<li><strong>운영자·전문가 닉네임·프로필 정보</strong></li>\n<li><strong>매수·매도·코인 거래 내역 (피해 금액)</strong></li>\n<li><strong>매수 직후 급락·세력 매도 시세 자료</strong></li>\n<li><strong>거래소 입출금·지갑 주소 내역</strong></li>\n<li><strong>동일 운영자 다른 피해·모집 자료</strong></li>\n<li><strong>송금 계좌·예금주 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채팅방의 수익 보장·추천 발언과 매수 직후 급락 시세를 시간순으로 정리하면 시세조작·기망 정황이 선명해집니다. 같은 운영자에게 당한 참여자를 모아 매매 자료를 묶으면 피해 입증과 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 여부</strong> — 허위·과장 정보나 인위적 시세조작으로 매수를 유인했는지.</li>\n<li><strong>재산침해</strong> — 매수 유인으로 처분·손실이 발생했는지.</li>\n<li><strong>투자 손실 항변</strong> — 단순 시장 변동인지 작전·기망인지.</li>\n<li><strong>운영자 특정</strong> — 닉네임·계좌·지갑으로 특정할 수 있는지.</li>\n<li><strong>피해액 산정</strong> — 매수·매도 내역으로 손실을 산정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (투자·거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (유사수신·투자사기 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 처분과 진정한 피해자',
        summary:
          '대법원 2013도564(대법원, 2017.06.19 선고) 영역에서 법원은 기망으로 인한 처분행위가 매수인 등의 재산을 직접 처분하여 손해를 야기하면 처분행위에 갈음하는 효력을 가지고, 기소된 피해자와 실제 피해자가 다른 경우에도 진정한 피해자를 가려내어 그에 대한 사기죄로 의율해야 한다고 판시했습니다. 시세조작·허위 정보로 매수를 유인해 손실을 떠넘긴 사안에서 누가 재산상 피해자인지와 기망·처분 관계를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '시세조작·수익 보장 + 매수 유인 + 손실 결합 시 기망·재산침해 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '투자 손실은 제 책임 아닌가요?',
        answer:
          '<strong>허위 정보·인위적 시세조작으로 매수를 유인했는지가 핵심인 영역입니다.</strong> 추천·수익 보장 발언과 시세 흐름을 확보하세요.',
      },
      {
        question: '운영자가 익명인데 특정되나요?',
        answer:
          '<strong>닉네임·계좌·거래소 지갑으로 특정할 여지가 있는 영역입니다.</strong> 입출금·거래 내역을 보존하세요.',
      },
      {
        question: '수익 보장이라더니 급락했어요.',
        answer:
          '<strong>수익 보장 발언과 매수 직후 급락 정황은 기망 다툼의 출발점인 영역입니다.</strong> 시간순으로 채팅·시세를 정리하세요.',
      },
      {
        question: '자본시장법 위반도 같이 신고하나요?',
        answer:
          '<strong>시세조종·부정거래는 자본시장법 위반도 함께 문제 될 수 있는 영역입니다.</strong> 금융감독원 1332 상담을 검토하세요.',
      },
      {
        question: '같은 방에서 당한 사람이 많아요.',
        answer:
          '<strong>같은 운영자 피해는 묶어 공동 신고할 수 있는 영역입니다.</strong> 참여자별 매매·채팅 자료를 모으세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '주식 리딩방 사기 증거 보존', href: '/guide/fraud/fraud-investment-stock-room-coercion' },
      { label: '투자 동호회 운영자 회원 손실 차용사기 무고 방어', href: '/guide/fraud/fraud-investment-club-member-loss-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 3. fraud-tuition-payment-scam-track ───
  {
    domain: 'fraud',
    slug: 'fraud-tuition-payment-scam-track',
    keyword: '등록금 대납 빙자 사기',
    questionKeyword: '‘대학 등록금·학자금을 카드 포인트·제휴 할인으로 싸게 대납해준다, 수수료만 내면 된다’는 사람의 말을 믿고 등록금과 수수료를 입금했는데, 정작 학교에는 납부가 되지 않았고 상대는 ‘처리 중’이라며 끌다가 연락을 끊었어요. 처음부터 대납해줄 의사 없이 돈만 받을 작정이었던 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '등록금 대납 빙자 대납·편취 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '등록금 대납 빙자 사기 — 5단계 대납·편취 점검 | 로앤가이드',
      description:
        '등록금을 싸게 대납해준다는 말을 믿고 입금했는데 학교 납부가 안 되고 잠적당했다면, 형법 제347조 사기의 대납 빙자·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘대학 등록금·대학원 학비·학자금을 카드 포인트·제휴 할인·분할 시스템으로 싸게 대신 납부해주겠다, 너는 수수료만 내면 된다, 등록금은 우리 쪽으로 보내면 학교에 대신 넣어준다’는 사람의 말을 SNS·지인 소개·커뮤니티에서 보고, 한 푼이 아쉬운 마음에 등록금과 수수료를 그 사람 계좌로 송금한 분의 상황입니다. 그런데 정작 학교 등록금 시스템에는 납부가 확인되지 않고, 상대는 ‘처리 중이다, 곧 반영된다, 학교 행정 지연이다’라며 시간만 끌다가 등록 마감이 다가올수록 연락을 미루고 결국 잠적해, 처음부터 대납해줄 의사 없이 등록금만 받아낼 작정이었던 건 아닌지 의심되고 막막하실 거예요. 제때 등록을 못 하면 학적까지 위태로워 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 대납할 의사·능력 없이 대납해줄 것처럼 속여 등록금·수수료를 받았다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 다수 피해자에게 각각 기망행위를 해 재물을 편취하면 원칙적으로 피해자별로 독립한 사기죄가 성립하나, 피해법익이 동일하다고 평가될 사정이 있으면 포괄일죄로 볼 수 있다고 본 사례 흐름이 있는 영역입니다. 대납 빙자 + 미납부 + 잠적 결합은 ‘대납 빙자·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 대납 빙자·기망 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 등록금 대납 빙자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·대납 빙자·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 대납 제안·수수료 약속·송금·납부 약정 정리.</li>\n<li><strong>② 대납 빙자·기망</strong> — 대납 의사·능력 없이 대납해줄 것처럼 속였는지 검토.</li>\n<li><strong>③ 편취액</strong> — 등록금과 수수료 등 교부한 입금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 행위자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 대행 지연과 달리, 처음부터 대납할 의사·능력 없이 등록금을 받아 가로챘는지가 사기 판단의 분기점입니다. 대납 약속 대화와 학교 미납부 확인을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 대납 제안·수수료 약속·송금·대화 보존.</li>\n<li><strong>2단계 — 미납부 확인 (즉시)</strong> — 학교 행정실·등록 시스템에서 미납부 사실을 확인.</li>\n<li><strong>3단계 — 지급정지·반환 요구 (병행)</strong> — 송금 계좌 지급정지·내용증명 반환 요구 검토.</li>\n<li><strong>4단계 — 경찰 신고·상담 (1주)</strong> — 사이버범죄 신고, 대한법률구조공단 132 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 행위자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">등록금 대납 빙자 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·대납 빙자·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>대납·할인 제안 광고·대화 캡처 (유인 정황)</strong></li>\n<li><strong>수수료·등록금 약정·납부 약속 기록 (거래 조건)</strong></li>\n<li><strong>등록금·수수료 송금·이체 내역 (피해 금액)</strong></li>\n<li><strong>학교 미납부 확인서·등록 안내 자료</strong></li>\n<li><strong>처리 지연·연락 두절 대화 기록</strong></li>\n<li><strong>동일 행위자 다른 피해·모집 자료</strong></li>\n<li><strong>상대·계좌 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대납 약속 대화와 학교 미납부 확인을 함께 정리하면 대납 빙자·기망 정황이 선명해집니다. 같은 행위자에게 당한 학생들을 모아 송금 자료를 묶으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 대납 의사·능력 없이 입금을 유도했는지.</li>\n<li><strong>대납 빙자</strong> — 할인·대납 시스템이 실제 존재했는지.</li>\n<li><strong>편취액</strong> — 수수료뿐 아니라 등록금 전부가 피해액인지.</li>\n<li><strong>피해자별 죄수</strong> — 다수 피해 시 죄수·피해법익이 어떻게 평가되는지.</li>\n<li><strong>행위자 특정</strong> — 계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (대행·결제 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 사기죄의 죄수',
        summary:
          '대법원 2023도13514(대법원, 2023.12.21 선고) 영역에서 법원은 다수 피해자에게 각각 기망행위를 해 재물을 편취하면 범의가 단일하고 범행방법이 동일하더라도 원칙적으로 피해자별로 독립한 사기죄가 성립하나, 기망행위·재산 교부 의사결정·교부 목적 등 사정에 비추어 피해법익이 동일하다고 평가될 경우에는 포괄일죄를 구성할 수 있다고 판시했습니다. 등록금 대납을 빙자해 여러 명에게서 입금을 받은 사안을 살펴볼 때에도 이러한 편취·죄수 기준을 검토해볼 수 있습니다.',
        takeaway: '대납 빙자 + 미납부 + 잠적 결합 시 대납 빙자·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '처리 지연일 뿐이라는데 사기가 되나요?',
        answer:
          '<strong>대납 의사·능력 없이 입금만 받았는지가 핵심인 영역입니다.</strong> 대납 약속 대화와 학교 미납부 확인을 확보하세요.',
      },
      {
        question: '학교에 납부가 안 됐는지 어떻게 확인하나요?',
        answer:
          '<strong>학교 행정실·등록 시스템 확인이 출발점인 영역입니다.</strong> 미납부 사실을 서면·캡처로 남기세요.',
      },
      {
        question: '수수료만 손해인가요, 등록금까지인가요?',
        answer:
          '<strong>수수료뿐 아니라 교부한 등록금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 송금 총액을 정리하세요.',
      },
      {
        question: '같은 사람에게 여러 학생이 당했어요.',
        answer:
          '<strong>피해자별 사기 성립과 죄수가 함께 문제 되는 영역입니다.</strong> 각자의 송금·약속 자료를 모으세요.',
      },
      {
        question: '상대가 잠적했는데 돈을 받을 수 있나요?',
        answer:
          '<strong>계좌 지급정지·민사 반환 청구로 회수를 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '대출 중개 선수수료 명목 사기 무고', href: '/guide/fraud/fraud-loan-brokerage-advance-fee-pretext-falsely-accused-defense' },
      { label: '공동 주식투자 손실 은폐 사기 고의 무고 방어', href: '/guide/fraud/fraud-joint-stock-investment-loss-concealment-falsely-accused-defense' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 4. fraud-mobile-invite-phishing-track ───
  {
    domain: 'fraud',
    slug: 'fraud-mobile-invite-phishing-track',
    keyword: '모바일 청첩장 피싱 사기',
    questionKeyword: '‘모바일 청첩장입니다, 부고를 전합니다’라는 문자에 담긴 링크를 무심코 눌렀더니 앱이 설치되고, 이후 제 휴대전화에서 알 수 없는 결제·소액결제·계좌이체가 일어나거나 지인들에게 같은 문자가 발송됐어요. 링크 하나로 금융정보가 털리고 돈이 빠져나간 것 같은데, 사기로 신고하고 빠져나간 돈을 돌려받을 수 있나요?',
    ctaKeyword: '모바일 청첩장 피싱 악성앱·환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '모바일 청첩장 피싱 사기 — 5단계 악성앱·환급 점검 | 로앤가이드',
      description:
        '모바일 청첩장·부고 문자 링크를 눌러 악성앱이 깔리고 결제·이체로 돈이 빠져나갔다면, 형법 제347조 사기·전자금융거래법의 대응과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「‘모바일 청첩장을 보냅니다, 결혼식에 초대합니다’ 또는 ‘부고를 전합니다, 빈소 안내’라는 그럴듯한 문자에 담긴 링크를, 아는 사람일 수도 있다는 생각에 무심코 눌렀다가, 알 수 없는 앱이 설치되거나 권한을 요구받은 분의 상황입니다. 그 뒤로 휴대전화에서 본인이 하지 않은 소액결제·앱 결제·계좌이체가 일어나거나, 저장된 연락처로 똑같은 청첩장·부고 문자가 무더기로 발송되고, 인증번호·계좌가 도용된 정황까지 드러나, 링크 하나로 금융정보와 연락처가 통째로 털린 건 아닌지 두렵고 막막하실 거예요. 영문도 모른 채 돈이 빠져나가고 지인들에게까지 피해가 번져 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부 또는 재산상 이익을 취득한 경우를 사기죄로 정하는 영역이고, 타인의 접근매체·금융정보를 무단 이용한 이체·결제는 전자금융거래법 등 별도 규정도 함께 문제 될 수 있는 영역입니다. 정상 청첩장·부고로 가장해 악성앱 설치·금융정보 탈취로 재산을 빼냈다면 기망·부정 이용으로 평가될 여지가 있습니다. 판례는 기망행위에 의한 분양대금 등 재물 편취와 동일성 없는 별개 범죄는 각각 성립할 수 있고, 사기 공소사실의 동일성은 사회적 사실관계를 기본으로 규범적 요소도 고려해 판단한다고 본 사례 흐름이 있는 영역입니다. 청첩장·부고 가장 + 악성앱 + 무단 결제·이체 결합은 ‘피싱·부정 이용’ 대응이 가능한 트랙입니다. 피해자라면 ① 차단·지급정지 ② 피해 정리 ③ 증거 보전 ④ 형사 신고 ⑤ 환급·재발 방지 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 모바일 청첩장 피싱 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차단·피해 정리·증거·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차단·지급정지</strong> — 통신사·은행·카드사에 결제·이체 정지와 비밀번호 변경 요청.</li>\n<li><strong>② 피해 정리</strong> — 무단 결제·소액결제·이체·문자 발송 내역 정리.</li>\n<li><strong>③ 증거 보전</strong> — 받은 문자·링크·설치된 앱·결제 알림 보존.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기·전자금융거래법 위반 신고 검토.</li>\n<li><strong>⑤ 환급·재발 방지</strong> — 소액결제 차단·악성앱 제거·피해구제 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 링크를 누른 뒤 무단 결제·이체·정보 탈취가 발생했다면, 가장 먼저 결제·이체를 멈추고 금융정보를 보호하는 것이 분기점입니다. 받은 문자·앱·결제 내역을 함께 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 경찰청·금융감독원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 차단·지급정지 (즉시)</strong> — 은행·카드사 결제·이체 정지, 통신사 소액결제 차단, 비밀번호 변경.</li>\n<li><strong>2단계 — 악성앱 제거·점검 (즉시)</strong> — 설치된 앱 삭제·기기 점검, 금융앱 재설정.</li>\n<li><strong>3단계 — 증거 보존 (병행)</strong> — 받은 문자·링크·결제 알림·발송 내역 캡처·보존.</li>\n<li><strong>4단계 — 경찰·금감원 신고 (1주)</strong> — 사이버범죄 신고, 금융감독원 1332 상담.</li>\n<li><strong>5단계 — 환급·재발 방지 (2개월 내)</strong> — 피해구제 신청·결제 이의·재발 방지 설정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">모바일 청첩장 피싱 사기 차단·환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차단·피해·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>받은 청첩장·부고 문자·링크 캡처 (유인 정황)</strong></li>\n<li><strong>설치된 악성앱·권한 요구 화면 기록</strong></li>\n<li><strong>무단 결제·소액결제·이체 내역 (피해 금액)</strong></li>\n<li><strong>연락처 무더기 발송·도용 정황 자료</strong></li>\n<li><strong>지급정지·차단 요청 접수 자료</strong></li>\n<li><strong>통신사·카드사·은행 상담 기록</strong></li>\n<li><strong>발신 번호·앱 출처 등 추적 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 문자·링크·설치 앱과 무단 결제·이체 내역을 함께 정리하면 피싱·부정 이용 정황이 선명해집니다. 가장 먼저 결제·이체를 멈추고 금융정보를 바꾸면 추가 피해 차단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·부정 이용</strong> — 청첩장·부고로 가장해 정보 탈취·결제를 했는지.</li>\n<li><strong>본인 결제 여부</strong> — 무단 결제·이체가 본인 의사와 무관한지.</li>\n<li><strong>피해액</strong> — 결제·이체·소액결제 합계가 얼마인지.</li>\n<li><strong>접근매체 도용</strong> — 인증·계좌가 무단 이용됐는지.</li>\n<li><strong>발신자 특정</strong> — 번호·앱 출처·자금 흐름으로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (소액결제·전자상거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (보이스피싱·피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망 편취와 별개 범죄의 동일성',
        summary:
          '대법원 2011도1651(대법원, 2011.06.30 선고) 영역에서 법원은 기망행위로 분양대금 등을 편취한 사기죄와 행위태양·보호법익이 다른 별개의 죄는 동일성이 인정되지 않아 각각 성립할 수 있고, 공소사실의 동일성은 사회적 사실관계를 기본으로 규범적 요소도 고려해 판단해야 한다고 판시했습니다. 청첩장·부고를 가장한 악성앱으로 금융정보를 빼내 결제·이체한 사안에서 사기와 전자금융거래법 위반 등 별개 범죄를 함께 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '청첩장·부고 가장 + 악성앱 + 무단 결제·이체 결합 시 피싱·부정 이용 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '링크를 눌렀을 뿐인데 어떻게 돈이 빠져나가나요?',
        answer:
          '<strong>악성앱이 금융정보·인증을 빼내 결제·이체에 쓰는 영역입니다.</strong> 가장 먼저 결제·이체를 멈추고 비밀번호를 바꾸세요.',
      },
      {
        question: '무엇부터 해야 하나요?',
        answer:
          '<strong>차단·지급정지가 최우선인 영역입니다.</strong> 통신사 소액결제 차단·카드사 정지·악성앱 삭제를 즉시 진행하세요.',
      },
      {
        question: '제 명의로 결제됐는데 환급되나요?',
        answer:
          '<strong>무단 결제·이체는 피해구제·결제 이의로 다퉈볼 수 있는 영역입니다.</strong> 본인 의사와 무관함을 입증할 자료를 모으세요.',
      },
      {
        question: '지인들에게 같은 문자가 갔어요.',
        answer:
          '<strong>연락처 도용·재발송도 피해 정황인 영역입니다.</strong> 발송 내역을 캡처하고 지인들에게 클릭 주의를 알리세요.',
      },
      {
        question: '발신자를 찾을 수 있나요?',
        answer:
          '<strong>번호·앱 출처·자금 흐름으로 추적할 여지가 있는 영역입니다.</strong> 문자·링크·결제 자료를 보존해 신고하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기죄 고소 절차 총정리', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '피싱 앱 설치 즉시 대응', href: '/guide/fraud/fraud-phishing-app-immediate-response' },
      { label: '보이스피싱 보험사 환급', href: '/guide/fraud/fraud-voice-phishing-insurance-refund' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 5. fraud-farm-produce-nondelivery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-farm-produce-nondelivery-track',
    keyword: '농산물 직거래 미배송 사기',
    questionKeyword: 'SNS·중고거래·산지직송 글에서 ‘제철 과일·쌀·해산물을 농가 직거래로 싸게 보내준다’는 판매자에게 돈을 먼저 보냈는데, 약속한 날이 지나도 물건이 오지 않고 판매자는 ‘택배 지연’이라며 끌다가 연락을 끊었어요. 처음부터 보낼 물건도 없이 입금만 받은 것 같은데, 사기로 신고하고 돈을 돌려받을 수 있나요?',
    ctaKeyword: '농산물 직거래 미배송 미배송·편취 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '농산물 직거래 미배송 사기 — 5단계 미배송·환급 점검 | 로앤가이드',
      description:
        '산지직송 농산물을 선결제했는데 배송이 안 되고 판매자가 잠적했다면, 형법 제347조 사기의 미배송·편취 판단과 환급까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「SNS·맘카페·중고거래 앱·산지직송 광고에서 ‘우리 농가에서 직접 키운 제철 과일·햇곡식·쌀·해산물·한우를 중간 유통 없이 싸게 보내드린다, 선입금하면 바로 발송한다’는 글과 농장 사진·후기를 믿고, 시세보다 저렴하다는 생각에 물건값을 먼저 송금한 분의 상황입니다. 그런데 약속한 배송일이 지나도 물건은 오지 않고, 판매자는 ‘택배가 밀렸다, 작황이 안 좋아 늦어진다, 곧 보낸다’며 시간만 끌다가 연락을 미루고 결국 계정을 닫거나 차단하고 잠적해, 처음부터 보낼 물건도 없이 입금만 받아낸 건 아닌지 의심되고 막막하실 거예요. 싸게 사려다 돈만 잃은 것 같아 더 답답하셨을 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하고 10년 이하의 징역 또는 2천만원 이하의 벌금에 처하도록 규정하는 영역입니다. 발송할 의사·능력 없이 산지직송이 가능한 것처럼 속여 입금을 유도했다면 기망행위로 평가될 여지가 있고, 입금 교부가 있으면 그 자체로 재산침해가 인정될 수 있습니다. 판례는 사기죄의 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방의 착오를 알면서 사실을 고지하지 않는 것을 말하고, 고지의무의 근거가 되는 거래실정에 관한 사실은 검사가 증명할 책임을 진다고 본 사례 흐름이 있는 영역입니다. 산지직송 빙자 + 미배송 + 잠적 결합은 ‘미배송·편취’ 다툼이 가능한 트랙입니다. 피해자라면 ① 거래·입금 정리 ② 미배송·편취 정황 ③ 편취액 ④ 형사 신고 ⑤ 환급·집단 대응 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 농산물 직거래 미배송 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·미배송·편취액·신고·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·입금 정리</strong> — 판매 글·발송 약속·대화·입금 내역 정리.</li>\n<li><strong>② 미배송·편취 정황</strong> — 발송 의사 없이 산지직송이 가능한 척 입금을 유도했는지 정리.</li>\n<li><strong>③ 편취액</strong> — 일부 환불이 있어도 교부한 입금 전부 기준 정리.</li>\n<li><strong>④ 형사 신고</strong> — 형법 제347조 사기 신고·고소 검토.</li>\n<li><strong>⑤ 환급·집단 대응</strong> — 지급정지·동일 판매자 공동 신고 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 배송 지연과 달리, 처음부터 보낼 물건도 발송 의사도 없이 입금만 받았는지가 사기 판단의 분기점입니다. 발송 약속 대화와 미배송·잠적 정황을 함께 모아두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong>A. 경찰청·한국소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·입금 자료 보존 (즉시)</strong> — 판매 글·발송 약속·대화·입금 내역 캡처·보존.</li>\n<li><strong>2단계 — 미배송·잠적 정황 정리 (즉시)</strong> — 약속한 발송일과 연락 두절 시점 정리.</li>\n<li><strong>3단계 — 지급정지·사기조회 (병행)</strong> — 송금 계좌 지급정지, 더치트 등 사기 이력 조회.</li>\n<li><strong>4단계 — 경찰 신고·소비자상담 (1주)</strong> — 사이버범죄 신고, 한국소비자원 1372 상담.</li>\n<li><strong>5단계 — 환급·집단 대응 (2개월 내)</strong> — 피해구제·동일 판매자 공동 신고·민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">농산물 직거래 미배송 사기 환급·신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 거래·미배송·환급 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 글·산지직송 광고 캡처 (유도 정황)</strong></li>\n<li><strong>발송·배송 약속 대화 기록 (거래 조건)</strong></li>\n<li><strong>입금·송금·간편결제 내역 (피해 금액)</strong></li>\n<li><strong>배송 지연·연락 두절·차단 기록</strong></li>\n<li><strong>판매자 계정·닉네임·연락처 정보</strong></li>\n<li><strong>동일 판매자 사기 이력·다른 피해 자료</strong></li>\n<li><strong>받는 계좌·예금주 신원 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발송 약속 대화와 미배송·잠적 정황을 함께 정리하면 기망 정황이 선명해집니다. 계좌·닉네임으로 사기 이력을 조회하고 같은 판매자 피해를 모으면 편취액 검토와 공동 대응에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 발송 의사·능력 없이 입금을 유도했는지.</li>\n<li><strong>고지의무</strong> — 발송 불가 사정을 알리지 않은 것이 기망인지.</li>\n<li><strong>편취액</strong> — 일부 환불이 있어도 입금 전부가 피해액인지.</li>\n<li><strong>배송 지연 항변</strong> — 단순 지연인지 처음부터 기망인지.</li>\n<li><strong>판매자 특정</strong> — 계정·계좌·연락처로 특정할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·사이버범죄 신고 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372 (전자상거래·직거래 피해상담)</strong></li>\n<li><strong>금융감독원 1332 (피해구제 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망과 고지의무의 증명책임',
        summary:
          '대법원 2022도16422(대법원, 2023.06.29 선고) 영역에서 법원은 사기죄의 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서 사실을 고지하지 않는 것을 말하고, 고지의무의 근거가 되는 거래의 내용·거래관행 등 거래실정에 관한 사실은 검사가 주장·증명할 책임을 진다고 판시했습니다. 산지직송을 빙자해 입금만 받고 발송 불가 사정을 알리지 않은 사안을 살펴볼 때에도 이러한 기망·고지의무 기준을 검토해볼 수 있습니다.',
        takeaway: '산지직송 빙자 + 미배송 + 잠적 결합 시 미배송·편취 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단순 배송 지연이라는데 사기가 되나요?',
        answer:
          '<strong>처음부터 발송 의사 없이 입금만 받았는지가 핵심인 영역입니다.</strong> 발송 약속 대화와 잠적 정황을 확보하세요.',
      },
      {
        question: '간편결제로 보냈는데 멈출 수 있나요?',
        answer:
          '<strong>송금 계좌 지급정지·피해구제로 환급을 검토할 수 있는 영역입니다.</strong> 잠적 직후 신속 신고가 중요합니다.',
      },
      {
        question: '판매자가 차단하고 사라졌어요.',
        answer:
          '<strong>계정·계좌·연락처로 특정할 여지가 있는 영역입니다.</strong> 판매 글·대화·송금 기록을 보존하세요.',
      },
      {
        question: '일부 환불해줬는데 피해액은 얼마인가요?',
        answer:
          '<strong>일부 환불이 있어도 교부한 입금 전부가 편취액으로 평가될 수 있는 영역입니다.</strong> 입금 총액을 정리하세요.',
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
      { label: '거래 분쟁의 사기 고소 둔갑', href: '/guide/fraud/fraud-business-dispute-criminal-complaint-false-accused-defense' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/guide/fraud/online-shopping-fraud-response' },
      { label: '콘서트 티켓 중고거래 미발송 사기', href: '/guide/fraud/fraud-concert-ticket-nondelivery-track' },
      { label: '보이스피싱 송금 환급 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
    ],
  },

  // ─── 6. fraud-guarantor-debt-repayment-falsely-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-guarantor-debt-repayment-falsely-accused-defense',
    keyword: '보증채무 변제 사기 무고',
    questionKeyword: '지인·가족의 대출이나 거래에 보증·연대보증을 섰다가 주채무자가 갚지 못해 제가 보증채무를 떠안게 됐는데, 변제가 늦어지자 채권자가 ‘처음부터 갚을 생각 없이 보증만 세운 것이다’라며 저를 사기로 고소했어요. 저는 보증 당시 변제 의사도 있었고 사정상 지체된 것뿐인데, 사실과 다른 이 고소에 어떻게 방어하나요?',
    ctaKeyword: '보증채무 변제 사기 무고 편취 고의·고지의무 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '보증채무 변제 사기 무고 방어 — 5단계 편취 고의 점검 | 로앤가이드',
      description:
        '보증·연대보증 채무 변제지체를 사기로 고소당했다면, 형법 제347조 사기의 편취 고의·고지의무 판단과 채무불이행 구별을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「가까운 지인·가족·동업자의 대출·물품거래·사업자금에 보증인·연대보증인으로 이름을 올렸다가, 주채무자가 사업 부진·연락두절로 빚을 갚지 못하자 보증채무가 고스란히 저에게 넘어오고, 그 변제마저 형편 때문에 늦어지자 손해를 본 채권자가 ‘처음부터 갚을 생각 없이 보증만 세워 돈을 빌리게 한 것이다, 속았다’며 저를 사기로 고소해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 보증 당시엔 주채무자가 갚으리라 믿었고 본인도 변제 의사가 있었으며 일부를 갚거나 변제 연장을 협의하기도 했는데, 결과적으로 다 갚지 못했다는 이유로 사기로 몰려 당혹스럽고 억울하실 거예요.」 형법 제347조는 사람을 기망하여 재물의 교부를 받은 경우를 사기죄로 정하는 영역입니다. 혐의를 받고 있다면, 보증 당시 편취의 고의가 있었는지, 신의칙상 고지할 사정을 숨겼는지가 핵심 쟁점입니다. 판례는 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방의 착오를 알면서 고지하지 않는 것을 말하고, 충분한 담보를 제공한 경우에는 특별한 사정이 없는 한 변제 의사·능력이 없었다고 단정하기 어려우며, 동일 피해자에게 수회 기망해 편취하면 포괄일죄로 본다고 한 사례 흐름이 있는 영역입니다. 따라서 보증 경위·담보·변제 노력을 정리해 다툴 수 있는 영역입니다. 보증 당시 변제 의사 + 담보·일부 변제 + 사정 악화 결합은 ‘편취 고의·채무불이행 구별’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 보증 경위 정리 ② 편취 고의·고지의무 ③ 담보·변제 노력 ④ 자금·사실관계 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 보증채무 변제 사기 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보증 경위·편취 고의·담보·사실관계·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보증 경위 정리</strong> — 보증 시점·범위·주채무·변제기·당시 소통 정리.</li>\n<li><strong>② 편취 고의·고지의무</strong> — 보증 당시 변제 의사·능력이 있었는지, 숨긴 사정이 있었는지 검토.</li>\n<li><strong>③ 담보·변제 노력</strong> — 제공한 담보·일부 변제·연장 협의 등 변제 노력 정리.</li>\n<li><strong>④ 자금·사실관계</strong> — 주채무자의 자금 흐름과 보증인의 관여 정도 정리.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술·자료 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증채무를 다 갚지 못한 결과만으로 곧바로 사기가 되는 것이 아니라, 보증 당시 변제 의사·능력과 숨긴 사정이 있었는지가 분기점입니다. 편취 고의는 객관적 사정으로 판단되므로 보증 경위·담보·변제 노력으로 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보증·소통 정리 (즉시)</strong> — 보증계약·범위·주채무·변제기·당시 대화 정리.</li>\n<li><strong>2단계 — 담보·변제 자료 확보 (1주)</strong> — 제공한 담보·일부 변제·연장 협의 자료 확보.</li>\n<li><strong>3단계 — 편취 고의 쟁점 정리 (2주)</strong> — 보증 당시 변제 의사·능력과 채무불이행 구별 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">보증채무 변제 사기 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 보증 경위·편취 고의·변제 노력 갈래입니다.</strong></p>\n<ul>\n<li><strong>보증·연대보증 계약·범위 자료 (거래 내용)</strong></li>\n<li><strong>보증 당시 재력·소득·담보 자료 (변제 능력)</strong></li>\n<li><strong>제공한 담보·근저당·일부 변제 내역 (변제 노력)</strong></li>\n<li><strong>변제 연장·사정 설명 대화 기록</strong></li>\n<li><strong>주채무자 자금 흐름·관여 정도 자료</strong></li>\n<li><strong>고소장·채권자 진술 모순·불부합 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘보증 당시 변제 의사·능력이 있었는지’와 ‘숨긴 사정이 있었는지’입니다. 제공한 담보, 당시 재력, 일부 변제·연장 협의 같은 변제 노력을 정돈하면 채무불이행과 편취 고의를 구별하는 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 고의</strong> — 보증 당시 변제 의사·능력이 있었는지.</li>\n<li><strong>고지의무</strong> — 신의칙상 알릴 사정을 숨겼는지.</li>\n<li><strong>담보 제공</strong> — 충분한 담보를 제공했는지.</li>\n<li><strong>채무불이행 구별</strong> — 단순 변제지체인지 처음부터 기망인지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 충분한 담보 제공과 편취 고의',
        summary:
          '대법원 2005도8645(대법원, 2006.02.23 선고) 영역에서 법원은 사기죄의 부작위에 의한 기망은 법률상 고지의무 있는 자가 상대방이 착오에 빠져 있음을 알면서 고지하지 않는 것을 말하고, 충분한 담보를 제공한 경우에는 특별한 사정이 없는 한 차용금을 변제할 의사·능력이 없었다고 볼 수 없으며, 동일 피해자에게 수회 기망해 편취한 경우 포괄일죄가 성립한다고 판시했습니다. 보증채무 변제지체를 사기로 다투는 사안을 살펴볼 때에도 이러한 편취 고의·고지의무 기준을 검토해볼 수 있습니다.',
        takeaway: '보증 당시 변제 의사 + 담보·일부 변제 + 사정 악화 결합 시 편취 고의·채무불이행 구별 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보증을 섰다가 못 갚았을 뿐인데 사기로 고소당했어요.',
        answer:
          '<strong>변제지체만으로는 부족하고 보증 당시 편취 고의가 있어야 하는 영역입니다.</strong> 보증 경위·변제 노력 자료를 정리하세요.',
      },
      {
        question: '담보를 제공했는데 유리한가요?',
        answer:
          '<strong>충분한 담보 제공은 변제 의사·능력 부정에 도움이 되는 영역입니다.</strong> 근저당·담보 설정 자료를 정리하세요.',
      },
      {
        question: '주채무자가 갚을 줄 알았어요.',
        answer:
          '<strong>보증 당시의 신뢰 근거와 객관적 사정이 핵심인 영역입니다.</strong> 주채무자 자금 흐름과 보증 경위를 정리하세요.',
      },
      {
        question: '채무불이행과 사기는 어떻게 구별되나요?',
        answer:
          '<strong>단순 변제지체인지, 보증 당시 변제 의사·능력이 없었는지로 갈리는 영역입니다.</strong> 보증·변제 경위를 정리하세요.',
      },
      {
        question: '경찰 조사에서 무엇을 조심하나요?',
        answer:
          '<strong>진술의 일관성과 신중함이 중요한 영역입니다.</strong> 보증·담보·변제 자료를 정돈하고 변호인 조력을 검토하세요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 도메인 허브', href: '/guide/fraud' },
      { label: '사기 무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '지인 금전 차용 변제의사 사기 무고', href: '/guide/fraud/fraud-acquaintance-loan-repayment-intent-pretext-falsely-accused-defense' },
      { label: '채무불이행 vs 사기 구별 체크리스트', href: '/guide/fraud/loan-default-vs-fraud-checklist' },
      { label: '허위 매물 부동산 사기 대응 형사고소', href: '/guide/fraud/fraud-rental-fake-listing-response' },
    ],
  },

  // ─── 7. sex-crime-karaoke-afterparty-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-karaoke-afterparty-track',
    keyword: '노래방 회식 강제추행',
    questionKeyword: '회식 2차로 간 노래방·단란주점의 좁고 어두운 공간에서, 상사·동료가 옆자리에 바짝 붙어 제 허벅지·어깨·허리를 만지거나 어깨동무를 핑계로 신체를 밀착해 큰 불쾌감과 수치심을 느꼈어요. 술자리라 그 자리에서 강하게 거부하지 못했는데, 이런 회식 자리 강제추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '노래방 회식 강제추행 추행 해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '노래방 회식 강제추행 — 5단계 추행 해당성 점검 | 로앤가이드',
      description:
        '회식 2차 노래방에서 상사·동료가 신체를 만지거나 밀착해 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·상당성을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「회식 1차를 마치고 분위기에 떠밀려 2차로 간 노래방·단란주점·룸의 좁고 어두운 공간에서, 상사·선배·동료가 옆자리에 바짝 붙어 어깨동무·블루스를 핑계로 제 허벅지·어깨·허리·손을 만지거나 신체를 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 술자리이고 직장 사람들과 함께라 ‘분위기 깬다, 예민하게 군다’는 말을 들을까 봐 그 자리에서 강하게 거부·항의하지 못한 채 자리를 빠져나와, ‘술김에 그런 건데 내가 유난인가’ 싶어 위축되고 막막하셨을 거예요. 직장 사람과 계속 마주쳐야 한다는 점까지 겹쳐 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하는 영역입니다. 판례는 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서, 직장 등 공동체 내 신체접촉이 의례적·사회적으로 상당한 범주를 다소 벗어나더라도 상대의 의사에 반하는 유형력 행사로 성적 자유를 침해하는 정도에 이르렀는지를 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 술자리 밀착 + 의사에 반한 접촉 + 직장 관계 결합은 ‘추행 해당성’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노래방 회식 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·장소·좌석 배치·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 의례적 범주를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 노래방·매장 CCTV, 단체대화·직후 호소 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — 참석자·좌석·CCTV로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 술자리·직장 분위기라도 의사에 반한 접촉이 의례적 상당성을 넘으면 강제추행으로 평가될 수 있다는 점이 분기점입니다. 접촉 부위·방식·반복과 직후 호소 정황을 구체화하고, 노래방 CCTV는 신속히 보존을 요청하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·장소·좌석·접촉 부위·방식·반복·참석자 정리.</li>\n<li><strong>2단계 — CCTV·기록 확보 (즉시)</strong> — 노래방·매장 CCTV 보존 요청, 단체대화·직후 호소 보존.</li>\n<li><strong>3단계 — 참석자·목격 협조 (직후)</strong> — 함께한 동료·목격자에게 정황 확인·진술 협조 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·직장 내 조치·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노래방 회식 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·장소·좌석·접촉 정황 메모</strong></li>\n<li><strong>가해자 신원·참석자 명단 기록</strong></li>\n<li><strong>노래방·매장 CCTV 보존 요청 자료</strong></li>\n<li><strong>회식 단체대화·이후 메시지 기록</strong></li>\n<li><strong>직후 호소·연락·통화 기록</strong></li>\n<li><strong>동석 동료·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노래방·매장 CCTV는 보존 기간이 짧으므로 곧바로 매장·경찰에 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 동료에게 호소한 정황을 남기면 추행 해당성 판단에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>의례·상당성</strong> — 의례적·사회적으로 상당한 범주를 넘었는지.</li>\n<li><strong>술자리 항변</strong> — 술김의 우발인지 추행의 고의인지.</li>\n<li><strong>가해자 특정</strong> — 참석자·좌석·CCTV로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·목격자·직후 호소로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동체 내 신체접촉과 추행의 상당성',
        summary:
          '대법원 2023도10410(대법원, 2025.09.04 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하고, 직장 등 공동체 내 신체접촉이 의례적·사회적으로 상당한 범주를 다소 벗어나 부적절하더라도 상대의 의사에 반하는 유형력 행사로서 성적 자유를 침해하는 정도에 이르지 않으면 강제추행죄에 해당하지 않을 수 있다고 판시했습니다. 회식 자리 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 추행 해당성·상당성 기준을 검토해볼 수 있습니다.',
        takeaway: '술자리 밀착 + 의사에 반한 접촉 + 직장 관계 결합 시 추행 해당성 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '술김에 그런 거라고 하면 어쩌죠?',
        answer:
          '<strong>술김의 우발인지 의사에 반한 추행인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '어깨동무 정도였다고 우겨요.',
        answer:
          '<strong>의례적 범주를 넘었는지가 다툼의 핵심인 영역입니다.</strong> 밀착 정도·접촉 부위와 직후 호소 정황을 정리하세요.',
      },
      {
        question: '그 자리에서 거부를 못 했는데 불리한가요?',
        answer:
          '<strong>술자리·직장이라 즉시 거부하지 못해도 직후 정황으로 다툴 수 있는 영역입니다.</strong> 직후 호소·연락 기록을 남기세요.',
      },
      {
        question: '직장 사람이라 신고가 망설여져요.',
        answer:
          '<strong>신변보호·직장 내 조치를 함께 검토할 수 있는 영역입니다.</strong> 정황 자료부터 정돈하고 상담을 받아보세요.',
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
      { label: '회사 탕비실 추행 신고', href: '/guide/sex-crime/sex-crime-office-pantry-touch-report-track' },
      { label: '회사 회식 2차 신체접촉 강제추행 무고 방어', href: '/guide/sex-crime/sex-crime-workplace-after-party-touch-falsely-accused-defense' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '노래방 술자리 강제추행 무고', href: '/guide/sex-crime/sex-crime-noraebang-room-falsely-accused-defense' },
    ],
  },

  // ─── 8. sex-crime-subway-commute-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-subway-commute-track',
    keyword: '지하철 출근길 강제추행',
    questionKeyword: '출근길 만원 지하철·전동차 안에서, 뒤나 옆에 선 사람이 몸을 밀착해 제 엉덩이·허벅지·등을 만지거나 손을 대 큰 수치심을 느꼈어요. 너무 붐벼 그 사람이 일부러 그런 건지 우연인지 헷갈렸고 그 자리에서 바로 항의도 못 했는데, 이런 지하철 출근길 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '지하철 출근길 강제추행 추행 고의 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '지하철 출근길 강제추행 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '만원 지하철에서 누군가 밀착해 신체를 만져 수치심을 느꼈다면, 형법 제298조·성폭력처벌법의 추행 해당성·추행 고의 기준을 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「출근길 만원 지하철·전동차·환승 통로처럼 사람이 빽빽한 곳에서, 뒤나 옆에 선 사람이 흔들림을 가장해 또는 일부러 몸을 밀착하며 제 엉덩이·허벅지·등·손을 만지거나 손등·신체를 대 큰 수치심과 불쾌감을 느낀 분의 상황입니다. 차량이 너무 붐비고 흔들려 ‘붐벼서 닿은 우연인지, 일부러 만진 건지’ 순간 헷갈렸고, 당황한 데다 사람이 많아 그 자리에서 바로 붙잡거나 항의하지 못한 채 내려, ‘착각이면 어쩌지, 증거도 없는데’ 싶어 위축되고 막막하셨을 거예요. 매일 타야 하는 출근길이라 또 마주칠까 봐 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하고, 지하철 등 공중이 밀집하는 장소에서의 추행은 성폭력처벌법 제11조로도 규율되는 영역입니다. 판례는 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서, 강제추행죄가 성립하려면 문제 되는 행위마다 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 본 사례 흐름이 있는 영역입니다. 밀착 접촉 + 추행 고의 + 밀집 공간 결합은 ‘추행 해당성·고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 고의 ③ 증거 보전 ④ 가해자 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지하철 출근길 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 고의·증거·가해자 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 일시·호선·칸·접촉 부위·방식·반복·인상착의 정리.</li>\n<li><strong>② 추행 고의</strong> — 흔들림의 우연인지 추행의 고의·범의가 있었는지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 역사·차량 CCTV, 직접 촬영·녹음 정황 보존 요청.</li>\n<li><strong>④ 가해자 특정</strong> — CCTV·교통카드·동선으로 가해자 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·지하철보안관·해바라기센터 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 붐비는 곳이라도 추행의 고의로 한 의사에 반한 접촉은 처벌 대상이 될 수 있고, 다만 추행의 범의가 증명돼야 한다는 점이 분기점입니다. 접촉 부위·방식·반복과 역사·차량 CCTV를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 일시·호선·칸·접촉 부위·방식·반복·인상착의·동선 정리.</li>\n<li><strong>2단계 — CCTV 보존 요청 (즉시)</strong> — 역사·차량 CCTV 보존 요청, 직접 촬영·녹음 정황 보존.</li>\n<li><strong>3단계 — 보안관·역무 협조 (직후)</strong> — 지하철보안관·역무실에 즉시 도움·정황 신고 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112·지하철경찰대에 신고, 정황·증거 제출.</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지하철 출근길 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 고의·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>일시·호선·칸·접촉 정황 메모</strong></li>\n<li><strong>가해자 인상착의·동선·하차 정황 기록</strong></li>\n<li><strong>역사·차량 CCTV 보존 요청 자료</strong></li>\n<li><strong>직접 촬영·녹음한 정황 자료 (현장 자료)</strong></li>\n<li><strong>교통카드·승하차 시각 기록 (동선 특정)</strong></li>\n<li><strong>목격자·동행자 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 역사·차량 CCTV는 보존 기간이 짧으므로 곧바로 역무실·경찰에 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복을 구체적으로 기록하면 우연과 추행 고의를 구별하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>추행 고의·범의</strong> — 흔들림의 우연인지 추행의 고의가 증명되는지.</li>\n<li><strong>밀집 공간</strong> — 공중밀집장소 추행으로도 평가되는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·교통카드·동선으로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·정황·목격자로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·지하철경찰대 (현장 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행행위와 추행 범의의 증명',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄의 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서, 강제추행죄가 성립하려면 문제 되는 행위마다 추행행위와 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 판시했습니다. 밀집한 지하철에서 신체 접촉이 우연인지 추행의 고의인지 다투는 사안을 살펴볼 때에도 이러한 추행 해당성·범의 기준을 검토해볼 수 있습니다.',
        takeaway: '밀착 접촉 + 추행 고의 + 밀집 공간 결합 시 추행 해당성·고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '붐벼서 닿은 거라고 하면 어쩌죠?',
        answer:
          '<strong>흔들림의 우연인지 추행의 고의인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복·밀착 정도를 구체적으로 남기세요.',
      },
      {
        question: '추행의 고의는 어떻게 입증하나요?',
        answer:
          '<strong>접촉 양상·반복·동선 같은 간접 정황으로 범의를 다투는 영역입니다.</strong> 정황을 즉시 구체적으로 기록하세요.',
      },
      {
        question: '그 자리에서 못 잡았는데 특정되나요?',
        answer:
          '<strong>역사·차량 CCTV와 교통카드 동선으로 특정할 여지가 있는 영역입니다.</strong> 일시·호선·칸·인상착의를 즉시 기록하세요.',
      },
      {
        question: '공중밀집장소 추행으로도 신고되나요?',
        answer:
          '<strong>지하철 등 공중밀집장소 추행으로도 평가될 수 있는 영역입니다.</strong> 장소·정황을 함께 정리해 신고하세요.',
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
      { label: '피시방 옆자리 추행 신고', href: '/guide/sex-crime/sex-crime-pc-room-next-seat-touch-report-track' },
      { label: '회식 만취 동료 추행 무고 방어', href: '/guide/sex-crime/sex-crime-office-dinner-drunk-colleague-touch-falsely-accused-defense' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '노래방 합석 손님 강제추행 피해', href: '/guide/sex-crime/sex-crime-noraebang-room-stranger-forced-molestation-track' },
    ],
  },

  // ─── 9. sex-crime-academy-instructor-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-academy-instructor-track',
    keyword: '학원 강사 강제추행',
    questionKeyword: '학원·과외·체육·음악 레슨을 받다가, 강사가 ‘자세를 잡아준다, 동작을 교정한다’는 핑계로 제(또는 자녀의) 어깨·허리·허벅지 등을 만지거나 단둘이 있는 자리에서 신체를 밀착해 큰 불쾌감과 수치심을 느꼈어요. 지도라고 하니 그 자리에서 항의도 못 했는데, 이런 학원 강사의 추행을 신고하고 처벌을 물을 수 있나요?',
    ctaKeyword: '학원 강사 강제추행 추행 고의·해당성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '학원 강사 강제추행 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '학원·레슨 강사가 자세 교정을 빙자해 신체를 만져 수치심을 느꼈다면, 형법 제298조 강제추행의 추행 해당성·추행 고의를 따지고 신고까지 5단계 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「학원·과외·체육·음악·무용·헬스 PT 레슨을 받다가, 강사·코치·선생이 ‘자세를 잡아준다, 동작을 교정한다, 호흡을 봐준다’는 핑계로 본인(또는 미성년 자녀)의 어깨·허리·허벅지·골반 등을 만지거나, 단둘이 있는 연습실·강의실에서 신체를 필요 이상으로 밀착해 큰 불쾌감과 수치심을 느낀 분의 상황입니다. 가르치는 사람과 배우는 사람이라는 관계, ‘원래 이렇게 지도하나’ 하는 혼란 때문에 그 자리에서 제대로 항의하지 못한 채 수업을 마치고 나와, 정상적인 지도였는지 추행이었는지 헷갈려 막막하셨을 거예요. 계속 다녀야 하는 곳이라 또 마주칠까 봐 더 답답하셨을 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 10년 이하의 징역 또는 1천500만원 이하의 벌금에 처하도록 규정하고, 미성년자·장애인 대상은 가중 처벌되는 영역입니다. 판례는 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 그 해당 여부는 관계·경위·행위태양·주위 상황 등을 종합해 신중히 판단해야 하고, 추행의 고의를 부인하면 고의와 관련성 있는 간접사실로 이를 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 지도 빙자 + 의사에 반한 접촉 + 폐쇄·우월 관계 결합은 ‘추행 해당성·고의’ 다툼이 가능한 트랙입니다. 피해자라면 ① 경위 정리 ② 추행 해당성 ③ 증거 보전 ④ 강사 특정 ⑤ 신고·보호 5중 트랙을 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학원 강사 강제추행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·증거·강사 특정·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 수업 일시·장소·지도 명목·접촉 부위·방식·반복 정리.</li>\n<li><strong>② 추행 해당성</strong> — 지도의 상당한 범위를 넘은 의사에 반한 접촉이 추행인지 검토.</li>\n<li><strong>③ 증거 보전</strong> — 학원·연습실 CCTV, 수업 메시지·녹음 보존 요청.</li>\n<li><strong>④ 강사 특정</strong> — 수강 등록·강사 정보·CCTV로 강사 특정.</li>\n<li><strong>⑤ 신고·보호</strong> — 112·해바라기센터·학원 관할 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지도·교정을 빙자한 접촉이라도 의사에 반하고 성적 자유를 침해하면 추행으로 평가될 수 있고, 고의를 부인해도 간접사실로 판단된다는 점이 분기점입니다. 접촉 부위·방식·반복과 학원 CCTV를 신속히 보존하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰청·여성긴급전화 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 정리 (즉시)</strong> — 수업 일시·장소·지도 명목·접촉 부위·방식·반복 정리.</li>\n<li><strong>2단계 — CCTV·수업 기록 확보 (즉시)</strong> — 학원·연습실 CCTV, 수업 안내·메시지·녹음 보존 요청.</li>\n<li><strong>3단계 — 학원·기관 협조 (직후)</strong> — 학원·교습소에 영상·수강·강사 정보 보존 요청.</li>\n<li><strong>4단계 — 경찰 신고 (준비 후)</strong> — 112에 신고, 정황·증거 제출(미성년자는 보호자 동반).</li>\n<li><strong>5단계 — 보호·손해배상 (이후)</strong> — 신변보호·상담 지원·민사 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 강사 강제추행 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>수업 일시·장소·지도 명목·접촉 정황 메모</strong></li>\n<li><strong>수강 등록·결제·강사 정보 (강사 특정)</strong></li>\n<li><strong>학원·연습실 CCTV 보존 요청 자료</strong></li>\n<li><strong>수업 안내·지도 메시지·녹음 기록</strong></li>\n<li><strong>직후 호소·보호자·지인 연락 기록</strong></li>\n<li><strong>동료 수강생·목격자 진술·연락처</strong></li>\n<li><strong>해바라기센터·1366 상담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원·연습실 CCTV와 수업 메시지는 삭제될 수 있으므로 곧바로 보존을 요청하는 것이 중요합니다. 접촉 부위·방식·반복과 직후 호소 정황을 남기면 지도의 상당성을 넘었는지 판단하는 데 도움이 됩니다. 미성년자 피해는 즉시 보호자·전문기관과 함께 대응하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 의사에 반한 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>지도·상당성</strong> — 자세 교정의 상당한 범위를 벗어난 접촉인지.</li>\n<li><strong>추행 고의</strong> — 고의를 부인할 때 간접사실로 증명되는지.</li>\n<li><strong>강사 특정</strong> — 수강 등록·강사 정보로 특정할 수 있는지.</li>\n<li><strong>증거 확보</strong> — CCTV·메시지·진술로 입증할 수 있는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (성범죄 신고)</strong></li>\n<li><strong>여성긴급전화 1366 (24시간 상담)</strong></li>\n<li><strong>해바라기센터 (성폭력 피해 통합지원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 해당성과 추행 고의의 판단',
        summary:
          '대법원 2015도2390(대법원, 2018.06.28 선고) 영역에서 법원은 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위로서 그 해당 여부는 관계·경위·행위태양·주위 상황 등을 종합해 판단해야 하고, 성폭력 처벌 특례 및 친고죄·고소기간 등 관련 법리도 함께 살펴야 한다고 판시했습니다. 지도·교정을 빙자한 신체 접촉을 추행으로 다투는 사안을 살펴볼 때에도 이러한 추행 해당성과 고의 판단 기준을 검토해볼 수 있습니다.',
        takeaway: '지도 빙자 + 의사에 반한 접촉 + 폐쇄·우월 관계 결합 시 추행 해당성·고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자세를 잡아준 것뿐이라고 하면 어쩌죠?',
        answer:
          '<strong>지도의 상당한 범위를 벗어난 접촉인지가 핵심인 영역입니다.</strong> 접촉 부위·방식·반복을 구체적으로 남기세요.',
      },
      {
        question: '강사가 고의가 없었다고 해요.',
        answer:
          '<strong>고의를 부인해도 간접사실로 추행 고의를 판단하는 영역입니다.</strong> 접촉 양상·반복·정황을 구체적으로 정리하세요.',
      },
      {
        question: '단둘이라 증거가 없어요.',
        answer:
          '<strong>학원 CCTV·수업 메시지·직후 호소로 보강할 수 있는 영역입니다.</strong> 보존 요청과 직후 연락 기록을 남기세요.',
      },
      {
        question: '미성년 자녀가 당했어요. 무엇부터 하나요?',
        answer:
          '<strong>보호자와 전문기관이 함께 대응해야 하는 영역입니다.</strong> 정황을 정리하고 해바라기센터 상담부터 검토하세요.',
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
      { label: '사진관 포즈 지도 빙자 추행 신고', href: '/guide/sex-crime/sex-crime-photo-studio-posing-pretext-touch-report-track' },
      { label: '사진스튜디오 포즈교정 추행', href: '/guide/sex-crime/sex-crime-photo-studio-posing-touch-track' },
      { label: '성범죄 디지털 증거 보존기한 정리', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '회식 신체접촉 추행 무고', href: '/guide/sex-crime/sex-crime-office-party-contact-falsely-accused-defense' },
    ],
  },

  // ─── 10. sex-crime-workplace-dinner-falsely-accused-defense ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-workplace-dinner-falsely-accused-defense',
    keyword: '직장 회식 강제추행 무고',
    questionKeyword: '직장 회식 자리에서 술을 마시며 건배·어깨동무·자리 이동 같은 접촉이 있었는데, 며칠 뒤 동료·후배가 저를 회식 자리 강제추행으로 고소·신고했어요. 저는 추행할 의도가 전혀 없었고 자연스러운 분위기 속 접촉이었다고 기억하는데 상대 진술 위주로 수사가 진행돼 막막합니다. 이런 사실과 다른 추행 고소에 어떻게 방어하나요?',
    ctaKeyword: '직장 회식 강제추행 무고 추행 고의·무죄추정 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '직장 회식 강제추행 무고 방어 — 5단계 추행 고의 점검 | 로앤가이드',
      description:
        '직장 회식 자리 접촉을 강제추행으로 고소당했다면, 형법 제298조 추행 해당성과 추행 고의·무죄추정·진술 신빙성 판단 기준을 5단계 방어 트랙으로 점검해볼 수 있어요. 지금 확인하세요.',
    },
    intro:
      '<p>「직장 회식·송년회·환영회 자리에서 다 같이 술을 마시며 건배·어깨동무·자리 이동·부축 같은 접촉이 오갔는데, 며칠 뒤 동료·후배·부하직원이 ‘그 자리에서 강제로 추행을 당했다’며 저를 고소·신고하거나 회사에 진정해 한순간에 피의자가 된 분의 상황입니다. 정작 본인은 추행할 의도가 전혀 없었고 회식 분위기 속 자연스러운 접촉이었다고 기억하는데, 술자리라 기억이 일부 흐릿하고 직접 증거가 상대 진술 위주이며 여럿이 섞인 자리라 정황이 엇갈려 어떻게 다퉈야 할지 막막하고 억울하실 거예요. 직장 내 소문과 징계까지 겹쳐 더 답답하실 거예요.」 형법 제298조는 폭행 또는 협박으로 사람을 추행한 자를 처벌하는 규정이고, 추행은 객관적으로 성적 수치심·혐오감을 일으키고 성적 자유를 침해하는 행위를 의미하는 영역입니다. 혐의를 받고 있다면, 문제 된 접촉이 추행에 해당하는지, 그리고 추행의 고의가 있었는지가 핵심 쟁점입니다. 판례는 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고, 추행의 고의를 부인하는 경우 고의와 관련성 있는 간접사실로 이를 판단하되 고의를 인정하기에 어긋나는 의문점이 해소되어야 하며, 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다고 본 사례 흐름이 있는 영역입니다. 따라서 접촉 경위·정황·진술 모순을 정리해 다툴 수 있는 영역입니다. 회식 접촉 + 진술 위주 + 정황 다툼 결합은 ‘추행 해당성·추행 고의’ 방어가 가능한 트랙입니다. 사실과 다르게 신고됐다면 ① 경위 정리 ② 추행 해당성 ③ 추행 고의 ④ 정황·증거 ⑤ 진술·대응 5중 방어를 검토해볼 수 있는 영역. 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 회식 강제추행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·추행 해당성·추행 고의·정황·진술 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 회식 자리·좌석·시간대·접촉 경위·참석자 정리.</li>\n<li><strong>② 추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지 검토.</li>\n<li><strong>③ 추행 고의</strong> — 추행 고의가 있었는지, 간접사실로 부정되는지, 무죄추정 원칙 검토.</li>\n<li><strong>④ 정황·증거</strong> — CCTV·단체대화·좌석·동선으로 정황을 확보.</li>\n<li><strong>⑤ 진술·대응</strong> — 일관된 진술 정리, 변호인 조력 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 접촉 사실이 있다는 것만으로 곧바로 추행이 되는 것이 아니라, 그 접촉이 추행에 해당하는지와 추행의 고의가 합리적 의심 없이 증명되는지가 분기점입니다. 회식 좌석·CCTV·단체대화로 정황과 진술의 일관성을 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong>A. 경찰·검찰 수사 절차에 대응하는 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경위·좌석 정리 (즉시)</strong> — 회식 자리·좌석·시간대·접촉 경위·참석자 정리.</li>\n<li><strong>2단계 — 정황·증거 확보 (1주)</strong> — 회식 장소 CCTV·단체대화·결제·이동 기록 확보.</li>\n<li><strong>3단계 — 진술 모순 정리 (2주)</strong> — 상대 진술과 객관 정황·참석자 진술의 불부합·모순 정리.</li>\n<li><strong>4단계 — 진술·의견서 준비 (조사 전)</strong> — 일관된 진술 정리, 변호인과 진술 전략·의견서 검토.</li>\n<li><strong>5단계 — 처분 대응 (조사 후)</strong> — 사실관계 다툼 또는 절차 대응 자료 준비 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 무고 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 회식 강제추행 무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·추행 해당성·추행 고의 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 자리·좌석·시간대·접촉 경위 메모</strong></li>\n<li><strong>회식 단체대화·이후 메시지·SNS 기록</strong></li>\n<li><strong>회식 장소·이동 경로 CCTV 보존 요청 자료</strong></li>\n<li><strong>결제·예약·시간대 객관 자료 (정황 특정)</strong></li>\n<li><strong>함께한 참석자·목격자 진술·연락처</strong></li>\n<li><strong>상대 진술 모순·불부합 정리 자료</strong></li>\n<li><strong>수사 출석 통지·진술 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방어의 중심은 ‘문제 된 접촉이 추행에 해당하는지’와 ‘추행의 고의가 합리적 의심 없이 증명되는지’입니다. 회식 좌석·CCTV·단체대화와 참석자 진술 같은 객관 정황을 정돈해 진술의 일관성·부합 여부를 짚으면 다툼에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당성</strong> — 문제 된 접촉이 성적 자유를 침해하는 추행인지.</li>\n<li><strong>추행 고의</strong> — 고의를 부인할 때 간접사실로 증명되는지.</li>\n<li><strong>무죄추정</strong> — 합리적 의심을 배제할 정도의 증명이 있는지.</li>\n<li><strong>진술 신빙성</strong> — 상대 진술이 일관·구체·객관 사실과 부합하는지.</li>\n<li><strong>진술 일관성</strong> — 수사 단계 진술의 일관성·신중함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112 (수사 절차 안내)</strong></li>\n<li><strong>대한변호사협회 법률상담 (형사 절차 안내)</strong></li>\n<li><strong>국선변호인 제도 (자력 부족 시 선임 검토)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추행 고의 판단과 무죄추정 원칙',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 형사피고인은 유죄가 확정될 때까지 무죄로 추정되고, 추행의 고의를 부인하는 경우 고의와 상당한 관련성 있는 간접사실로 이를 판단하되 고의를 인정하기에 어긋나는 의문점이 해소되어야 하며, 범죄사실의 인정은 합리적 의심이 없는 정도의 증명에 이르러야 한다고 판시했습니다. 회식 자리 접촉을 추행으로 다투는 사안에서 추행 고의와 무죄추정·증명 정도를 살펴볼 때에도 이러한 기준을 검토해볼 수 있습니다.',
        takeaway: '회식 접촉 + 진술 위주 + 정황 다툼 결합 시 추행 해당성·추행 고의 검토 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '자연스러운 접촉이었는데 추행으로 고소당했어요.',
        answer:
          '<strong>접촉 사실만으로는 부족하고 추행 해당성과 추행 고의가 핵심인 영역입니다.</strong> 회식 자리·좌석·접촉 경위를 정리하세요.',
      },
      {
        question: '추행 고의가 없었다는 걸 어떻게 다투나요?',
        answer:
          '<strong>고의를 부인하면 간접사실로 판단되는 영역입니다.</strong> 접촉 경위·정황·참석자 진술로 의문점을 짚으세요.',
      },
      {
        question: '상대 진술뿐인데도 처벌되나요?',
        answer:
          '<strong>범죄사실은 합리적 의심 없는 증명에 이르러야 하는 영역입니다.</strong> 진술 모순·객관 정황 불부합을 정리하세요.',
      },
      {
        question: '술자리라 기억이 흐릿해요.',
        answer:
          '<strong>CCTV·단체대화·참석자 진술 같은 객관 정황으로 보강할 수 있는 영역입니다.</strong> 회식 전후 기록을 확보하세요.',
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
      { label: '온라인 메시지 추행 무고', href: '/guide/sex-crime/sex-crime-online-message-coercion-falsely-accused-defense' },
      { label: '화상과외 음란행위 노출', href: '/guide/sex-crime/sex-crime-online-video-tutoring-indecent-exposure-track' },
      { label: '성범죄 초범 처벌 수위와 대응 방법', href: '/guide/sex-crime/sex-crime-first-offense-response' },
    ],
  },
];
