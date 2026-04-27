import { SpokePage } from '../spoke-pages';

// batch48 fraud 5개: 헬스장 폐업 회원권 환불 + 코인거래소 출금 차단 + 지인 금전대여 사기 vs 민사 + 온라인 사기범 IP 추적 후속 + 로맨스 스캠 해외 송금 환급
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 헬스장·필라테스 등 회원권 결제 후 갑작스런 폐업·잠적으로 환불 거부를 당한 피해자가 신용카드 차지백·소비자원·형사 고소 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 코인거래소·가상자산 플랫폼에서 입금 후 출금이 일방적으로 차단·지연된 피해자가 거래소 책임과 형사·민사 회수 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 지인에게 돈을 빌려줬다가 변제가 이뤄지지 않는 상황에서 단순 채무불이행(민사)인지 사기죄(형사)인지 구분 기준과 대응 순서를 확인하도록 돕는 페이지다.
// 4. 이 페이지는 온라인 사기 신고 후 경찰의 IP·계좌 추적이 진행됐을 때 이후 무엇을 해야 하는지(피해 보전·합의·민사 가압류) 다음 단계를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 로맨스 스캠 가해자가 해외 계좌로 송금을 유도해 환급이 어려운 상황에서 외환·국제공조·국내 모집책 추적 등 회복 가능성을 검토하도록 돕는 페이지다.

export const spokesBatch48Fraud: SpokePage[] = [
  // ─── 1. fraud / gym-closure-membership-refund ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-closure-membership-refund',
    keyword: '헬스장 폐업 회원권 환불',
    questionKeyword: '헬스장이 갑자기 폐업해서 1년 회원권 환불을 못 받고 있어요',
    ctaKeyword: '헬스장 폐업 환불 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 폐업 회원권 환불 4단계 절차 | 로앤가이드',
      description:
        '헬스장·필라테스 회원권 결제 직후 폐업·잠적으로 환불을 못 받았다면 신용카드 차지백·소비자원·형사 고소 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 12개월 회원권을 60만원에 결제했는데, 이번 주 갑자기 셔터가 내려가 있더라고요. 사장님 전화는 꺼져 있고, 단톡방도 폭파됐어요." 헬스장·필라테스·요가원 폐업 사기는 회원권 선납 구조를 악용해 다수의 피해자를 동시에 발생시키는 대표적 유형입니다. 폐업 통보 없이 잠적했다면 단순 환불 거부가 아니라 사기죄 검토 대상이 될 수 있고, 신용카드 결제건은 차지백 절차로 일부 회수 가능성을 검토해볼 수 있습니다. 결제 영수증과 최근 회원권 광고를 지금 바로 정리해두는 것이 첫 단계입니다.</p>',
    sections: [
      {
        title: '폐업 사기인지 어떻게 확인하나요',
        content:
          '<p><strong style="color:#1e3a5f">아래 정황이 2개 이상이면 단순 폐업이 아니라 사기 정황으로 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>폐업 직전 회원 모집 강화</strong> — 폐업 1~2개월 전부터 "할인 이벤트", "장기권 추가 혜택" 등으로 결제 유도.</li>\n<li><strong>사전 폐업 공지 없음</strong> — 회원에게 미리 알리지 않고 어느 날 갑자기 영업 종료, 연락 두절.</li>\n<li><strong>운영자 연락 차단</strong> — 사장·관리자 전화·카카오톡·단톡방 모두 차단·삭제.</li>\n<li><strong>다른 회원에게도 동일 피해</strong> — 카카오톡 오픈채팅·맘카페에서 동일 시설 피해자 다수 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폐업을 미리 알면서도 회원권을 판매한 경우 형법 제347조 사기죄 성립 소지가 있습니다. 광고 캡처와 결제 시점 정황이 핵심 증거입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 회복 4단계',
        content:
          '<p><strong style="color:#1e3a5f">신용카드사·소비자원·경찰 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신용카드 차지백 신청 (결제 후 90일 내)</strong> — 신용카드 결제건은 카드사 고객센터에 "용역 미제공" 사유로 차지백(결제 취소) 요청. 카드사 자체 분쟁조정 절차 활용 가능.</li>\n<li><strong>2단계 — 한국소비자원 피해구제 신청</strong> — 1372 또는 consumer.go.kr → 신청 후 30일 내 사업자에게 권고. 사업자 응답 없으면 분쟁조정위원회 회부.</li>\n<li><strong>3단계 — 경찰 사기죄 고소 (다수 피해자 공동 고소 권장)</strong> — 폐업 직전 회원 모집 정황·광고 캡처·결제 영수증 첨부. 동일 시설 피해자 모이면 합산 피해액 가중처벌 적용 가능.</li>\n<li><strong>4단계 — 민사 가압류 + 지급명령 신청 (잔여 재산 추적)</strong> — 운영자 명의 부동산·차량·통장이 남아 있으면 가압류 후 지급명령. 1인당 피해액이 작아도 합산하면 회수 가능성을 검토할 수 있어요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결제 방식·잔여 회차·피해자 인원에 따라 환불 경로가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">차지백·소비자원·경찰 신고 시 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>회원권 계약서·결제 영수증</strong> — 계약 기간·금액·이용 횟수가 명시된 서면.</li>\n<li><strong>카드 매출전표 또는 이체확인증</strong> — 결제 일시·금액·가맹점명 표기.</li>\n<li><strong>광고·홍보 자료</strong> — 폐업 직전 SNS·전단지 "할인 이벤트" 캡처.</li>\n<li><strong>운영자 연락 차단 증거</strong> — 통화 시도·카카오톡 차단 화면.</li>\n<li><strong>회원 단톡방 캡처</strong> — 다른 피해자들의 동일 피해 진술 보전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "운영자가 다른 곳에서 영업 재개한다더라"는 안내에 환불을 미루면 안 됩니다. 신고 시점이 늦어지면 잔여 재산 추적도 어려워져요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (피해구제·분쟁조정)</li>\n<li><strong>공정거래위원회</strong> — 1357 (선불식 할부거래·결제 표준약관 위반)</li>\n<li><strong>신용카드사 고객센터</strong> — 차지백 신청 (결제 후 90일 권장)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시, 무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업권 양수도 시 위생·하자 사실 은폐도 사기죄',
        summary:
          '서울북부지방법원 2024고단3486 사건(서울북부지법, 2025.11.06 선고)에서 법원은 운영자가 빈대 발생 등 중요한 영업 환경 하자를 숨긴 채 영업권 양수도계약을 체결한 행위에 대해 사기죄가 성립한다고 판시했습니다. 폐업 직전 회원권 판매도 동일한 기망 구조로 평가받을 수 있다는 점에서 시사점이 큽니다.',
        takeaway: '운영자가 폐업·하자 사실을 숨긴 채 회원을 모집한 정황이 있으면 사기죄 고소를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '카드 결제 후 6개월이 지났는데도 차지백이 가능한가요?',
        answer:
          '<strong>카드사마다 차지백 기한이 달라 신용카드사 약관 확인이 우선입니다.</strong> 일반적으로 결제 후 90일 이내가 권장되며, 일부는 180일까지도 접수해주는 경우가 있어요. 즉시 카드사 고객센터에 문의하는 것이 좋습니다.',
      },
      {
        question: '현금으로 결제했는데도 회수가 가능한가요?',
        answer:
          '<strong>현금 결제는 차지백이 불가하므로 형사 고소 + 민사 절차로만 회수가 가능합니다.</strong> 이체 내역·계약서·광고 자료가 있으면 사기죄 고소와 지급명령으로 잔여 재산 추적을 검토해볼 수 있어요.',
      },
      {
        question: '소비자원 분쟁조정은 강제력이 있나요?',
        answer:
          '<strong>조정 결정에 양 당사자가 모두 수락하면 재판상 화해와 같은 효력이 발생합니다.</strong> 사업자가 거부하면 강제력이 없으나, 민사·형사 절차에서 유리한 자료로 활용됩니다.',
      },
      {
        question: '회원이 100명인데 1인당 피해액이 적어도 사기죄가 성립하나요?',
        answer:
          '<strong>피해자가 다수면 합산 피해액으로 가중처벌이 적용될 수 있습니다.</strong> 5억원 이상이면 특정경제범죄가중처벌법 적용 가능. 공동 고소단을 구성하면 수사 우선순위도 높아져요.',
      },
      {
        question: '운영자가 다른 지점에서 영업 중이면 합의가 더 쉬울까요?',
        answer:
          '<strong>잔여 영업이 있으면 가압류·지급명령으로 회수 가능성이 높아집니다.</strong> 다만 합의 전 형사 고소를 먼저 접수해두는 것이 협상력 확보에 유리한 경우가 많아요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '소비자원 피해구제 신청 절차', href: '/guide/fraud/fraud-consumer-protection-relief' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
    ],
  },

  // ─── 2. fraud / coin-exchange-withdrawal-blocked ───
  {
    domain: 'fraud',
    slug: 'fraud-coin-exchange-withdrawal-blocked',
    keyword: '코인거래소 출금 차단',
    questionKeyword: '코인거래소에 입금했는데 갑자기 출금이 막혔어요. 어떻게 해야 하나요?',
    ctaKeyword: '코인거래소 출금 차단 대응 절차 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인거래소 출금 차단 대응 5단계 가이드 | 로앤가이드',
      description:
        '가상자산 거래소에 입금 후 출금이 일방적으로 막혔다면 거래소 신고·금감원·형사 고소·민사 회수 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"이름이 그럴듯한 거래소에 5천만원을 입금했어요. 처음엔 시세 그래프가 잘 움직이더니, 출금하려 하자 &ldquo;세금 정산&rdquo;이라며 추가 입금을 요구하고, 안 하니까 계정이 정지됐습니다." 가상자산 거래소를 가장한 출금 차단 사기는 합법 거래소처럼 보이는 화면 + 가짜 시세 그래프 + 출금 시 추가 입금 요구 패턴이 전형적입니다. 정상 등록된 거래소(가상자산사업자, VASP)라면 금감원·금융정보분석원에 신고된 상태이며, 그렇지 않으면 사실상 사기 플랫폼일 가능성이 높습니다. 입금 계좌 정보와 채팅 기록을 지금 보전하는 것이 시급합니다.</p>',
    sections: [
      {
        title: '진짜 거래소인지 확인하는 3가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목으로 정상 등록 여부를 30초 안에 확인할 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융정보분석원(FIU) VASP 신고 여부</strong> — kofiu.go.kr → 가상자산사업자 신고현황. 미신고 거래소는 영업 자체가 불법.</li>\n<li><strong>출금 조건 비정상</strong> — "세금 선납", "검증비 추가 입금", "VIP 등급 충족" 등 정상 거래소엔 없는 출금 조건 요구.</li>\n<li><strong>도메인·앱 위장</strong> — 유명 거래소와 비슷한 이름·로고 사용, 앱은 공식 마켓이 아닌 APK 직접 설치.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 특정금융정보법 제7조에 따라 미신고 가상자산사업자는 5년 이하 징역 또는 5천만원 이하 벌금 대상입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 출금 차단 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">금감원·경찰청 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 입금 즉시 중단</strong> — "출금하려면 세금 입금하라"는 요구에 응하지 말 것. 추가 입금하면 피해가 커집니다.</li>\n<li><strong>2단계 — 입금 계좌 지급정지 시도</strong> — 국내 은행 계좌로 입금했다면 즉시 112 또는 해당 은행에 지급정지 요청. 잔액 남아 있어야 환급 가능.</li>\n<li><strong>3단계 — 경찰 신고 + 사이버수사팀 (3일 이내)</strong> — ecrm.police.go.kr 또는 관할 경찰서. 거래소 화면 캡처·이체 내역·채팅 대화 첨부.</li>\n<li><strong>4단계 — 금감원 + 금융정보분석원 신고</strong> — 금감원 1332 (불법금융신고센터) + FIU 미신고 사업자 신고. 다른 피해자 신고와 합쳐 수사 우선순위 상승.</li>\n<li><strong>5단계 — 민사 가압류 + 손해배상 (잔여 재산 확인 시)</strong> — 운영자 국내 재산 파악되면 가압류 신청 후 민사 손배. 코인 직접 송금분은 회수가 어렵지만 원화 입금분은 시도 가치 있음.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">입금 방식(원화·코인)에 따라 회수 가능성이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신고와 고소 시 아래 자료가 핵심 증거가 됩니다.</strong></p>\n<ul>\n<li><strong>거래소 화면 전체 캡처</strong> — 잔액 표시·출금 불가 메시지·세금 납부 요구 화면.</li>\n<li><strong>이체확인증·코인 트랜잭션 해시</strong> — 원화 송금 내역 + 코인 송금이면 블록체인 해시(TXID).</li>\n<li><strong>거래소 회원가입 화면·약관 캡처</strong> — 도메인·앱 정보 보전.</li>\n<li><strong>고객센터 채팅·메일 기록</strong> — 출금 거부 사유 기재된 답변 캡처.</li>\n<li><strong>유입 광고·SNS 게시물</strong> — 거래소를 처음 알게 된 광고 캡처.</li>\n</ul>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융감독원 불법금융신고센터</strong> — 1332 / fss.or.kr</li>\n<li><strong>금융정보분석원(FIU)</strong> — kofiu.go.kr (미신고 가상자산사업자 신고)</li>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>한국인터넷진흥원(KISA)</strong> — 118 / boho.or.kr (도메인·피싱 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (무료 법률상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사람에 대한 기망 없으면 사기죄 처벌 어려움',
        summary:
          '대법원 2024도18441 사건(대법원, 2025.03.27 선고)에서 법원은 형법 제347조 사기죄의 기망행위는 사람으로 하여금 착오를 일으키게 하는 것이라며, 사람에 대한 기망행위를 수반하지 않는 경우 사기죄로 처벌할 수 없다고 판시했습니다. 자동화된 시스템만 거친 경우와 사람이 개입해 기망한 경우의 차이를 다툴 때 중요한 기준입니다.',
        takeaway: '거래소 운영자가 사람을 기망한 정황(채팅 안내·세금 납부 요구)이 있으면 사기죄 고소를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '코인을 직접 송금했는데 환급이 가능한가요?',
        answer:
          '<strong>코인 직접 송금분은 전기통신금융사기 환급 대상에서 제외될 수 있습니다.</strong> 원화 입금 부분만 지급정지·환급 대상이 됩니다. 형사 고소 + 민사 가압류로 회수 경로를 검토하는 것이 좋아요.',
      },
      {
        question: '거래소가 해외 법인인데 신고가 의미 있나요?',
        answer:
          '<strong>국내 계좌로 자금이 들어왔거나 국내 모집책이 있으면 국내 수사 대상이 됩니다.</strong> 해외 법인이라도 한국어 광고·국내 채팅 운영이 있으면 처벌 가능성을 다툴 수 있어요.',
      },
      {
        question: '출금 차단 후 며칠이 지났는데 신고해도 늦지 않나요?',
        answer:
          '<strong>형사 고소 시효(7년)는 충분합니다.</strong> 다만 입금 계좌 잔액이 빠져나가기 전 지급정지가 핵심이라 시간이 지날수록 환급 가능성은 줄어들어요. 지금 즉시 112 신고를 검토하세요.',
      },
      {
        question: '"소득세 정산이 끝나면 출금된다"는 말을 믿어도 되나요?',
        answer:
          '<strong>정상 거래소는 출금 시 별도 세금을 받지 않습니다.</strong> 한국 거주자의 가상자산 양도소득세는 거래소가 원천징수하지 않고 본인이 종합소득세 신고 시 납부하는 구조예요. "세금 선납" 요구는 사기 정황입니다.',
      },
      {
        question: '다른 피해자와 함께 고소하면 더 유리한가요?',
        answer:
          '<strong>피해 합산으로 특경법 가중처벌 요건(5억원 이상)이 충족되면 형량이 높아집니다.</strong> 온라인 피해자 카페·오픈채팅에서 공동 고소단을 구성하면 수사 우선순위가 높아져요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '코인 사기 피해 증거 수집', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
      { label: '투자 사기 유형별 대응', href: '/guide/fraud/fraud-investment-scam-response' },
      { label: '전기통신금융사기 환급 신청', href: '/guide/fraud/fraud-telecom-financial-payment-suspension' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '사기 피해 증거 수집 순서', href: '/guide/fraud/fraud-evidence-collection-order' },
    ],
  },

  // ─── 3. fraud / acquaintance-loan-civil-vs-criminal ───
  {
    domain: 'fraud',
    slug: 'fraud-acquaintance-loan-civil-vs-criminal',
    keyword: '지인 금전대여 사기 vs 민사 구분',
    questionKeyword: '지인에게 돈을 빌려줬는데 안 갚아요. 사기 고소가 가능한가요 아니면 민사로만 가능한가요?',
    ctaKeyword: '지인 대여금 사기·민사 구분 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '지인 대여금 사기 vs 민사 5가지 구분 기준 | 로앤가이드',
      description:
        '지인에게 빌려준 돈이 변제되지 않을 때 사기 고소가 가능한지 단순 채무불이행인지 5가지 구분 기준과 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 친구가 사업 자금이 급하다며 3천만원만 빌려달라고 했어요. 두 달 후 갚는다더니 6개월째 연락이 줄고, 이제는 전화도 안 받습니다." 지인에게 빌려준 돈이 안 들어올 때 가장 먼저 드는 의문은 "이거 사기로 고소해야 하나, 민사로만 가야 하나"입니다. 단순히 갚지 못하는 채무불이행은 형사 고소 대상이 아니지만, 빌릴 당시부터 갚을 의사·능력이 없었다면 사기죄가 성립할 수 있습니다. 차용증·이체 내역·당시 대화 내용을 정리하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 사기죄가 되는 경우와 단순 민사 채무불이행 차이가 뭔가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 핵심은 "빌릴 당시" 갚을 의사·능력이 있었는지입니다.</strong></p>\n<ul>\n<li><strong>사기죄 성립 가능</strong> — 빌릴 때 이미 다른 빚이 많아 갚을 능력이 없었음 / 거짓 사업 명목으로 받음 / 받은 직후 도박·유흥에 사용 / 차용증을 의도적으로 회피.</li>\n<li><strong>단순 민사 (사기 X)</strong> — 빌릴 때는 갚을 의사·능력이 있었으나 사업 실패·실직으로 사후에 못 갚게 됨 / 일부 변제 시도가 있었음.</li>\n<li><strong>판단 자료</strong> — 빌릴 당시 채무자의 재산·소득·다른 빚, 자금 사용 목적, 실제 사용처, 변제 노력 흔적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사기 고소"는 처벌 + 합의 협상력 확보 수단, "민사 청구"는 강제집행으로 돈을 받아내는 수단입니다. 둘은 동시에 진행할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어느 단계에서 형사 고소를 검토해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 정황 2개 이상이면 사기죄 고소를 검토해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1. 받은 직후 연락 두절·잠적</strong> — 변제 의사 없는 정황 강함.</li>\n<li><strong>2. 받은 돈 사용처가 거짓</strong> — "사업 자금"이라며 받았지만 실제론 도박·코인·유흥에 소비.</li>\n<li><strong>3. 빌릴 당시 다른 빚이 다수</strong> — 신용불량·다른 채권자 다수 → 갚을 능력 없음 인지.</li>\n<li><strong>4. 다른 피해자도 동일 수법</strong> — 같은 시기 여러 명에게 같은 명목으로 차용 → 조직적 사기 의심.</li>\n<li><strong>5. 차용증·계약서 작성 회피</strong> — "친한 사이에 무슨 차용증"이라며 거부한 정황.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실관계에 따라 사기·민사 경로가 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 차용증이 없어도 고소·민사 청구가 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용증 없이도 입증 가능한 자료가 충분하면 가능합니다.</strong></p>\n<ul>\n<li><strong>이체확인증</strong> — 송금 시 메모란에 "차용금" 또는 "대여" 기재된 이체확인서.</li>\n<li><strong>카카오톡·문자 대화</strong> — "두 달 뒤 갚을게", "이번 주에 입금할게" 등 변제 약속 문구.</li>\n<li><strong>녹취·통화 기록</strong> — 본인 통화 녹음은 합법(통신비밀보호법 제3조 단서). 변제 약속 통화 보전.</li>\n<li><strong>지급명령 신청</strong> — 차용증 없어도 이체 내역·대화로 지급명령 신청 가능. 상대방 이의 없으면 확정판결 효력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "친한 사이라 차용증을 안 받았다"고 포기하지 마세요. 카카오톡 대화 한 줄과 이체 내역만으로도 청구가 가능합니다.</blockquote>',
      },
      {
        title: 'Q. 형사 고소와 민사 청구를 어떻게 병행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동시 진행이 가능하며, 합의 협상에 유리합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 내용증명 발송</strong> — 변제 요구 내용증명. 상대방 응답 없으면 다음 단계.</li>\n<li><strong>2단계 — 형사 고소</strong> — 관할 경찰서에 사기죄 고소장 제출. 합의 협상력 확보.</li>\n<li><strong>3단계 — 민사 가압류 신청</strong> — 채무자 부동산·통장·차량 가압류로 강제집행 보전.</li>\n<li><strong>4단계 — 지급명령 또는 민사 소송</strong> — 3천만원 이하 소액사건심판 또는 지급명령으로 판결문 확보.</li>\n<li><strong>5단계 — 강제집행</strong> — 판결문으로 채무자 재산 강제집행. 합의 시 형사 고소 취하 가능.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 금전을 채권자에게 변제한 경우 부당이득 반환',
        summary:
          '대법원 2024다216187 사건(대법원, 2024.06.27 선고)에서 법원은 채무자가 피해자로부터 편취한 금전을 자신의 채권자에 대한 변제에 사용한 경우, 채권자가 편취 사실을 몰랐고 중대한 과실이 없으면 채권자의 금전 취득은 법률상 원인이 있는 것으로 본다고 판시했습니다. 사기 피해금 회수 시 제3자 변제 추적이 어려운 이유의 핵심 판례입니다.',
        takeaway: '편취 자금이 다른 채권자에게 변제된 경우 회수가 까다로워, 가압류로 잔여 재산을 빨리 보전하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '갚을 의사가 있었는지 어떻게 입증하나요?',
        answer:
          '<strong>당시 채무자의 객관적 사정으로 추정합니다.</strong> 신용불량·다른 빚·재산·소득·실제 사용처 등을 수사 단계에서 검사가 종합 판단해요. 받은 직후 도박·유흥에 썼다면 변제 의사 없음의 정황이 됩니다.',
      },
      {
        question: '돈을 일부 받았는데도 사기 고소가 가능한가요?',
        answer:
          '<strong>일부 변제는 사기죄 성립을 부정하는 강한 정황이 됩니다.</strong> 그래도 "처음부터 일부만 갚고 나머지는 떼먹을 의도였다"는 정황이 입증되면 가능성을 다툴 수 있어요. 변호사 상담을 검토해보는 것이 좋습니다.',
      },
      {
        question: '시효는 얼마나 되나요?',
        answer:
          '<strong>사기죄 공소시효는 7년이고, 민사 대여금 시효는 10년입니다.</strong> 다만 상사채권(사업 거래)이면 5년, 단기소멸시효(임금·공사대금 등)는 3년 등 사안별로 달라요.',
      },
      {
        question: '합의를 하면 형사 처벌도 안 받나요?',
        answer:
          '<strong>사기죄는 친고죄가 아니므로 합의해도 처벌이 면제되지는 않습니다.</strong> 다만 합의가 양형(형량 결정)에 큰 감경 사유가 되어 집행유예·벌금형으로 가벼워지는 경우가 많아요.',
      },
      {
        question: '민사 판결을 받았는데도 채무자 재산이 없으면 어떻게 하나요?',
        answer:
          '<strong>판결문은 10년간 효력이 있고 5년 단위로 갱신할 수 있습니다.</strong> 채무자가 향후 재산을 취득하면 재산조회·강제집행으로 회수 가능. 재산명시 신청을 통해 채무자 재산 신고를 강제할 수도 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '단순 채무불이행 vs 사기 구분', href: '/guide/fraud/loan-default-vs-fraud-checklist' },
      { label: '사기 합의금 산정 기준', href: '/guide/fraud/fraud-settlement-amount-calculation' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
    ],
  },

  // ─── 4. fraud / online-scam-ip-tracking-followup ───
  {
    domain: 'fraud',
    slug: 'fraud-online-scam-ip-tracking-followup',
    keyword: '온라인 사기범 IP 추적 후 다음 단계',
    questionKeyword: '온라인 사기 신고했더니 경찰이 IP·계좌 추적 중이라는데 그다음 제가 뭘 해야 하나요?',
    ctaKeyword: '사기범 IP 추적 후 다음 단계 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 사기범 IP 추적 후 다음 단계 4가지 | 로앤가이드',
      description:
        '온라인 사기 신고 후 경찰이 IP·계좌 추적에 들어갔을 때 합의·민사 가압류·강제집행을 어떤 순서로 준비해야 하는지 지금 확인하세요.',
    },
    intro:
      '<p>"중고거래로 50만원을 사기당해 신고했더니 한 달째 경찰이 &lsquo;IP·계좌 추적 중&rsquo;이라고만 합니다. 그다음엔 제가 뭘 해야 하나요?" 사이버 사기 수사는 IP 추적 → 가입자 신원 확인 → 출석 통보 → 조사 → 송치 순으로 진행되며, 통상 2~6개월이 걸립니다. 그동안 피해자가 손 놓고 기다리기보다 합의 협상 준비, 민사 가압류, 다른 피해자 탐색을 병행하면 회수 가능성을 크게 끌어올릴 수 있습니다. 다음 단계를 한 번에 정리해두는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '경찰 수사 단계 — 지금 어디쯤인가요',
        content:
          '<p><strong style="color:#1e3a5f">사이버 사기 수사 진행 단계를 알면 다음에 뭘 해야 할지 보입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 고소장 접수 + 내사 (1~2주)</strong> — 사건번호 부여, 담당자 배정.</li>\n<li><strong>2단계 — IP·계좌 추적 (3~6주)</strong> — 거래 사이트·통신사·은행에 자료 요청. 영장 필요 시 더 길어짐.</li>\n<li><strong>3단계 — 피의자 신원 확인 + 출석 통보 (1~2주)</strong> — 통보 후 10~14일 내 출석 요구.</li>\n<li><strong>4단계 — 조사 + 검찰 송치 (2~4주)</strong> — 피의자 신문·대질·대질 결과 검찰 송치.</li>\n<li><strong>5단계 — 검찰 처분 (1~2개월)</strong> — 기소·약식기소·기소유예·불기소 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상 신고 후 송치까지 2~6개월. 피의자가 해외 도피·잠적이면 더 길어집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 피해자가 할 4가지',
        content:
          '<p><strong style="color:#1e3a5f">경찰 수사와 별개로 피해자가 미리 준비하면 회수 가능성이 높아집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건 진행상황 정기 확인</strong> — 담당 수사관에게 2~3주 간격으로 진행 문의. 너무 자주 하면 역효과, 너무 안 하면 후순위로 밀릴 수 있음.</li>\n<li><strong>2단계 — 민사 가압류 준비 (피의자 신원 확인 직후)</strong> — 경찰이 신원 확인되면 피의자 부동산·예금·차량 가압류 신청 (법원에 보전소송). 형사 송치 전이라도 가압류 가능.</li>\n<li><strong>3단계 — 합의 협상 준비</strong> — 피의자 출석 통보 시점에 합의 의사 확인. 합의금은 통상 피해액 + 위자료 일부 수준에서 협상.</li>\n<li><strong>4단계 — 다른 피해자 탐색 + 공동 고소</strong> — 피의자 계좌·아이디 검색 → 동일 피해자 발견 시 공동 고소 추가. 합산 피해액으로 가중처벌 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">수사 단계별 피해자 행동 순서를 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 합의 협상 준비 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">합의는 피해 회수의 가장 빠른 경로입니다. 미리 준비해두세요.</strong></p>\n<ul>\n<li><strong>합의금 산정 기준</strong> — 피해액 100% + 위자료 10~30% + 변호사비 일부. 사례별 차이가 큼.</li>\n<li><strong>합의서 필수 항목</strong> — 피해 사실·합의금·지급 방법·처벌불원 의사·위약금 조항.</li>\n<li><strong>합의금 분할 시 공증</strong> — 일시 지급 어려우면 강제집행 인낙 공정증서로 작성. 미지급 시 즉시 집행 가능.</li>\n<li><strong>합의 후 처벌 여부</strong> — 사기죄는 친고죄가 아니라 합의해도 처벌됨. 다만 양형(형량)에 큰 감경 사유.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 합의금만 받고 처벌불원서를 미리 써주면 돈을 못 받았을 때 회수가 어려워집니다. 합의금 완납 후 처벌불원서 제출이 원칙이에요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182 (수사 진행 조회)</li>\n<li><strong>대한법률구조공단</strong> — 132 (가압류·합의서 작성 무료 상담)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (전국 56개 센터, 정서·법률 지원)</li>\n<li><strong>법원 보전소송 안내</strong> — scourt.go.kr (가압류·가처분 신청서 양식)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전자정보·디지털 증거의 압수 가능성',
        summary:
          '대법원 2025모45 사건(대법원, 2025.12.11 선고)에서 법원은 형사소송법 제106조에 따라 압수 대상에 유체물뿐 아니라 전자정보도 포함되며, 독립적 관리가능성·거래가능성·경제적 가치를 갖춘 비트코인 등 가상자산도 법정 요건을 충족하면 압수 대상이 된다고 판시했습니다. 온라인 사기범의 코인 자산도 수사·몰수 대상에 포함될 수 있다는 점에서 시사점이 큽니다.',
        takeaway: '사기범 보유 코인·전자정보도 압수·몰수 대상이 되므로 수사기관에 자산 정보를 적극 제공하는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '경찰이 한 달째 진행 안내를 안 해주는데 항의해도 되나요?',
        answer:
          '<strong>2~3주 간격으로 정중하게 진행 문의는 정상입니다.</strong> 너무 자주 하면 역효과지만 한 달 이상 무응답이면 청문감사관실 또는 시민감찰관에 민원 접수 가능. 사건번호 인용해 정중히 요청하세요.',
      },
      {
        question: '피의자가 잠적하면 사건은 어떻게 되나요?',
        answer:
          '<strong>지명수배 → 출국금지 → 시효 정지 절차로 진행됩니다.</strong> 도주해도 시효는 정지되어 추후 검거 시 처벌 가능. 다만 회수 가능성은 낮아지므로 가압류 + 민사 판결문 확보가 더 중요해져요.',
      },
      {
        question: '가압류는 변호사 없이도 할 수 있나요?',
        answer:
          '<strong>혼자도 가능하지만 보전 소송 특성상 변호사 도움이 권장됩니다.</strong> 대한법률구조공단 132에서 자격 요건 맞으면 무료 또는 저렴한 비용으로 도움을 받을 수 있어요.',
      },
      {
        question: '합의가 안 되면 어떻게 하나요?',
        answer:
          '<strong>형사 처벌 + 민사 판결문 + 강제집행으로 회수 절차를 진행합니다.</strong> 형사 판결이 확정되면 그 자체가 손해배상 청구의 강력한 증거가 되어 민사 절차가 빨라져요.',
      },
      {
        question: '피의자가 외국인이거나 해외에 있으면 어떻게 되나요?',
        answer:
          '<strong>국제 형사공조 절차를 거쳐야 해서 시간이 오래 걸립니다.</strong> 국제 공조 조약이 체결된 국가만 협조 가능. 회수 가능성은 낮아지므로 국내 자산이 있는지부터 확인하는 것이 우선입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 합의금 산정 기준', href: '/guide/fraud/fraud-settlement-amount-calculation' },
      { label: '가압류 신청 절차', href: '/guide/fraud/fraud-provisional-seizure-procedure' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
      { label: '소액사건 지급명령 신청', href: '/guide/fraud/fraud-payment-order-small-claims' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
    ],
  },

  // ─── 5. fraud / romance-scam-overseas-money-transfer ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-scam-overseas-money-transfer',
    keyword: '로맨스 스캠 해외 송금 후 환급',
    questionKeyword: '로맨스 스캠으로 해외 계좌에 돈을 보냈는데 돌려받을 수 있나요?',
    ctaKeyword: '로맨스 스캠 해외송금 환급 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '로맨스 스캠 해외 송금 후 환급 4단계 절차 | 로앤가이드',
      description:
        '로맨스 스캠으로 해외 계좌에 송금한 후 환급 가능성을 검토할 때 외환·국제공조·국내 모집책 추적 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"6개월간 매일 영상통화하던 사람과 결혼 약속까지 했어요. 그가 해외에서 사업 자금이 묶였다며 외환 송금을 부탁하기에 7천만원을 보냈는데, 그 후 연락이 끊겼습니다." 해외 계좌로 송금된 사기 피해금은 국내 지급정지·피해구제 절차의 직접 대상이 아니어서 회수가 쉽지 않은 것이 사실입니다. 그러나 국내 중간 계좌·국내 모집책·국제 형사공조·외환은행 협력 등 여러 경로를 병행하면 일부 회수 가능성을 검토해볼 수 있습니다. 송금 직후가 아닌 이미 시간이 지난 상황에서도 시도 가치가 있는 절차들을 정리해두는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '해외 송금이라도 회수 가능성이 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">아래 정황 중 하나라도 있으면 회수 시도 가치가 있습니다.</strong></p>\n<ul>\n<li><strong>국내 중간 계좌 경유</strong> — "해외 계좌로 직접 송금 안 되니 국내 ○○ 계좌로 보내라"고 했다면 국내 지급정지·환급 대상.</li>\n<li><strong>국내 모집책 존재</strong> — 한국에서 사기 조직의 자금세탁·계좌 관리를 한 모집책이 있으면 국내 수사·재산 추적 가능.</li>\n<li><strong>외환은행 송금 보고</strong> — 1만 달러 초과 송금은 한국은행 외환거래보고가 자동 생성되어 추적 가능.</li>\n<li><strong>국제 형사공조 조약 체결국</strong> — 미국·일본·홍콩 등 조약 체결국이면 협조 요청 가능. 동남아 일부 국가는 협조 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 특정경제범죄법 제4조 재산국외도피죄가 성립하면 가중처벌(3년 이상 유기징역) 대상이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 시도 4단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·금감원·법무부 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 국내 경유 계좌 즉시 확인 + 지급정지</strong> — 송금 경로에 국내 계좌가 있다면 즉시 112 또는 해당 은행에 지급정지. 잔액 있어야 환급 가능.</li>\n<li><strong>2단계 — 경찰 사이버수사대 + 국제범죄수사대 신고</strong> — ecrm.police.go.kr 또는 관할 경찰서. 해외 송금 사건은 국제범죄수사대로 이관될 수 있음. 국내 모집책 추적 우선.</li>\n<li><strong>3단계 — 외환은행 + 한국은행 외환거래 조회</strong> — 송금 은행에 외환거래 보고 사본 요청. 1만 달러 이상은 자동 보고되어 추적 자료가 됨.</li>\n<li><strong>4단계 — 국제 형사공조 + 민사 가압류 (장기 절차)</strong> — 법무부 국제형사사법공조 요청 (조약 체결국 한정). 가해자가 국내 재산 보유 시 민사 가압류 병행. 통상 6개월~2년 소요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 경로·국가에 따라 회수 가능성이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 + 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">국내·해외 절차 모두에 아래 자료가 핵심 증거가 됩니다.</strong></p>\n<ul>\n<li><strong>해외 송금 확인서</strong> — 송금 은행에서 발급. 수취 은행·계좌·국가·금액 명시.</li>\n<li><strong>SNS·채팅 대화 전체 캡처</strong> — 결혼 약속·투자 권유·송금 요청 메시지 전부 보전.</li>\n<li><strong>가해자 프로필 정보</strong> — 사용 사진(역방향 이미지 검색 결과)·SNS 계정·전화번호·이메일.</li>\n<li><strong>외환 거래 보고서</strong> — 1만 달러 초과면 자동 생성. 한국은행 외환정보시스템에서 사본 요청 가능.</li>\n<li><strong>피해 경위서</strong> — 만남부터 송금까지 시간 순서대로 2~3페이지 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 가해자 SNS 계정을 차단·삭제하면 증거가 사라집니다. 신고 전까지 계정 유지 + 전체 대화·사진 캡처가 우선이에요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182</li>\n<li><strong>경찰청 국제범죄수사대</strong> — 관할 지방청 국제수사계 (해외 송금 사건 이관)</li>\n<li><strong>법무부 국제형사사법공조</strong> — 1301 (조약 체결국 협조 요청)</li>\n<li><strong>금융감독원</strong> — 1332 (국내 경유 계좌 환급 절차)</li>\n<li><strong>대한법률구조공단</strong> — 132 (피해자 무료 상담)</li>\n<li><strong>범죄피해자지원센터</strong> — 1577-1295 (정서·법률 지원)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 공모공동정범과 기망방법 모름',
        summary:
          '대법원 2024도10141 사건(대법원, 2024.12.12 선고)에서 법원은 사기 공모공동정범이 구체적 기망방법을 몰랐더라도 공모관계가 인정될 수 있다고 판시했습니다. 다만 자신의 행위가 범죄에 이용된다는 사실 자체를 모르고 행위에 나아간 경우엔 고의가 부정될 수 있다고 보았습니다. 로맨스 스캠 조직의 국내 모집책·계좌 명의자 책임을 다툴 때 중요한 기준이 됩니다.',
        takeaway: '국내 모집책이나 계좌 명의자가 사기 사실을 알고 협력했는지 입증되면 공범으로 함께 처벌·회수가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '이미 6개월 전 송금한 건도 환급 가능성이 있나요?',
        answer:
          '<strong>국내 경유 계좌가 있고 잔액이 남아 있는 경우에 한해 가능성이 있습니다.</strong> 형사 고소 시효(7년)는 충분하지만 환급은 시간이 갈수록 어려워져요. 국제 형사공조 절차는 시간이 오래 걸리지만 시도 가치가 있습니다.',
      },
      {
        question: '가해자 국적과 거주 국가가 다른데 어디로 신고하나요?',
        answer:
          '<strong>국내 거주 시 피해 발생이면 한국 경찰에 신고하는 것이 우선입니다.</strong> 국내 수사 후 국제 형사공조로 가해자 거주국에 협조 요청. 미국·일본·홍콩 등은 조약 체결국이라 협조 가능성이 있어요.',
      },
      {
        question: '대화 캡처만 있고 가해자 실명·신분증을 모르는데 수사가 가능한가요?',
        answer:
          '<strong>SNS 계정·이메일·송금 계좌 정보만 있어도 수사가 진행됩니다.</strong> 경찰이 해당 플랫폼·은행에 가입자 정보 협조 요청 가능. 다만 해외 플랫폼은 협조까지 시간이 걸려요.',
      },
      {
        question: '소액(100만원 이하)이라도 신고할 가치가 있나요?',
        answer:
          '<strong>소액도 신고 가치가 있습니다.</strong> 동일 가해자에게 다수 피해자가 있으면 합산되어 가중처벌 가능, 신고 이력은 보험·세금 처리에도 활용돼요.',
      },
      {
        question: '국제 형사공조 절차는 얼마나 걸리나요?',
        answer:
          '<strong>통상 6개월~2년이 걸립니다.</strong> 조약 체결국이면 빠르고, 미체결국은 외교 채널로 우회해 더 오래 걸려요. 그동안 국내 모집책 추적·민사 가압류를 병행하는 것이 현실적 회수 경로입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '국제 로맨스 스캠 피해 회복', href: '/guide/fraud/fraud-international-romance-marriage-recovery' },
      { label: '데이팅 로맨스 스캠 증거', href: '/guide/fraud/fraud-dating-romance-scam-evidence' },
      { label: '보이스피싱 환급 절차', href: '/guide/fraud/fraud-voice-phishing-recovery-comprehensive' },
      { label: '사기 피해 증거 수집 순서', href: '/guide/fraud/fraud-evidence-collection-order' },
      { label: '공동 고소 절차 안내', href: '/guide/fraud/fraud-joint-complaint-procedure' },
    ],
  },
];
