import { SpokePage } from '../spoke-pages';

// batch80 fraud — 6개 (2026-05-28)
//
// 고유 존재 이유:
// 1. 중고 명품 정품 감정서·보증서 위조 후 잠적 — 단순 짝퉁 배송·진위 다툼 류와 분기. '정품 감정서·보증서 위조 제시 + 정품가 결제 유인 + 가품 인도 + 잠적' 트랙. 이 페이지는 중고 명품 구매자의 위조 보증서 인지 직후 상황에서 감정·결제 입증과 추적 준비를 돕는 페이지다.
// 2. 코인 리딩방 수익보장 투자 후 출금 거부 — 주식 리딩방 손실보장·거래소 인출거부 류와 분기. '코인 리딩방 가입 + 원금·수익 보장 약속 + 추가 입금 유도 + 출금 거부' 트랙. 이 페이지는 코인 투자 피해자의 출금 거부 인지 상황에서 수익보장 약정·입출금 입증과 신고 준비를 돕는 페이지다(판단형).
// 3. 온라인 강의 환불보장 광고로 결제 유도 후 환불 거부·잠적 — 학원 폐원·수강권 환불 류와 분기. '100% 환불보장·수료 보장 광고 + 결제 유인 + 환불 거부·약관 핑계 + 잠적' 트랙. 이 페이지는 온라인 강의 결제자의 환불 거부 상황에서 광고·결제 입증과 분쟁조정 준비를 돕는 페이지다.
// 4. 전세대출 알선 수수료 선입금 받고 대출 미실행 잠적 — 일반 대출 선수수료·전세사기 보증금 류와 분기. '전세대출 알선·승인 보장 + 수수료·서류비 선입금 + 대출 미실행 + 잠적' 트랙. 이 페이지는 전세대출 알선 피해자의 수수료 편취 인지 상황에서 알선·송금 입증과 신고 준비를 돕는 페이지다.
// 5. 재택알바 물품 대리구매 선결제 편취 — 댓글 알바 선입금·구인 보증금 류와 분기. '재택 부업 모집 + 물품 대리구매·결제 후 정산 약속 + 선결제 유도 + 미정산·잠적' 트랙. 이 페이지는 재택알바 지원자의 대리구매 선결제 편취 상황에서 모집·결제 입증과 추적 준비를 돕는 페이지다.
// 6. 개인 간 차용금 변제 지연을 차용사기로 고소당한 채무불이행 방어 — 지인 대여금 민형사·동업 손실 무고 류와 분기. '개인 차용 + 변제 지연 + 변제 의사·일부 변제 vs 차용사기(편취 범의) 구분 + 무고 방어' 트랙 (accused). 이 페이지는 차용금 변제가 늦어져 사실과 다르게 사기로 고소당한 피의자의 변제 경위 입증과 방어 준비를 돕는 페이지다(판단형).

export const spokesBatch80Fraud: SpokePage[] = [
  // ─── 1 ───
  // 이 페이지는 중고 명품 구매자가 위조 감정서·보증서를 믿고 정품가를 결제한 뒤 가품·잠적을 인지한 상황에서 감정·결제 입증과 추적을 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-fake-guarantee-cert-vanish-track',
    keyword: '중고 명품 정품 보증서 위조 잠적 사기',
    questionKeyword: '중고로 산 명품에 정품 감정서·보증서가 같이 왔는데 알고 보니 위조였고 판매자는 정품값을 받은 뒤 연락이 끊겼어요.',
    ctaKeyword: '중고 명품 위조 보증서 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 위조 보증서 잠적 사기 — 5단계 추적 | 로앤가이드',
      description:
        '위조 감정서·보증서를 정품인 것처럼 보여주고 정품값을 받은 뒤 가품을 보내고 잠적했다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고 거래로 명품 가방을 시세보다 조금 싸게 샀습니다. 판매자가 \'백화점 정품 보증서와 사설 감정원 감정서까지 동봉한다\'며 사진을 보내줘 안심하고 정품 시세에 가까운 금액을 송금했어요. 막상 받아보니 박음질과 로고가 어색해 정식 감정을 의뢰했더니 \'가품, 보증서도 위조\'라는 결과가 나왔습니다. 판매자에게 환불을 요구하자 처음에는 \'재감정해보라\'며 시간을 끌다가 계정을 닫고 연락이 끊겼고, 같은 닉네임·계좌로 동일하게 \'정품 보증서\'를 내세워 판 피해자가 더 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 상표법은 \'위조 상표 상품의 판매\'를 규제하는 영역입니다. 위조 감정서·보증서 제시 + 정품가 결제 유인 + 가품 인도 + 잠적 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 거래·감정 입증 ② 송금·계좌 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 위조 보증서 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·감정 입증</strong> — 정품 보증서·감정서 동봉 약속 대화, 정식 감정원 가품·위조 결과서.</li>\n<li><strong>② 송금·계좌 추적</strong> — 수취 계좌·예금주·이체 시각, 판매 게시글·시세 비교.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원 발급, 계좌 지급정지 요청 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 위조 보증서로 정품을 가장한 기망 정황(상표법 위반 병행 검토).</li>\n<li><strong>⑤ 민사 배상</strong> — 결제 대금·감정 비용·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위조된 보증서·감정서를 정품인 것처럼 제시해 정품 시세에 가까운 대금을 받아냈는지가 사기 평가의 결정 사정. 정식 감정원의 가품·보증서 위조 결과서 확보가 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·한국소비자원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·결제 자료 즉시 보존 (인지 당일)</strong> — 판매 게시글·정품 보증서 동봉 약속 대화·송금 내역·실물 사진 캡처.</li>\n<li><strong>2단계 — 정식 감정 의뢰 (1주 내)</strong> — 공신력 있는 감정원에 진위·보증서 위조 여부 감정, 결과서 확보.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 수취 계좌 지급정지 요청 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 위조 보증서 기망 + 동일 계좌 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제 대금·감정 비용·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 위조 보증서 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·감정·송금 갈래입니다.</strong></p>\n<ul>\n<li><strong>판매 게시글·상품 설명·시세 비교 화면 캡처</strong></li>\n<li><strong>정품 보증서·감정서 동봉 약속 대화(카톡·플랫폼 메시지)</strong></li>\n<li><strong>결제·송금 내역·수취 계좌·예금주</strong></li>\n<li><strong>실물·동봉 보증서 사진(정·후면·라벨)</strong></li>\n<li><strong>공신력 있는 감정원 가품·위조 결과서</strong></li>\n<li><strong>환불 요구·연락두절·계정 폐쇄 정황</strong></li>\n<li><strong>같은 닉네임·계좌로 거래한 다수 피해자 후기</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실물을 받은 직후 포장을 풀기 전후로 사진·영상을 남기고, 보증서까지 함께 정식 감정을 받아 위조 여부를 결과서로 확보해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망·고지의무</strong> — 가품·위조 보증서를 알고도 정품인 것처럼 묵비했는지 정황.</li>\n<li><strong>위조 보증서 진위</strong> — 동봉된 감정서·보증서의 위조 여부.</li>\n<li><strong>정품 시세 차액</strong> — 가품 가치와 결제액의 차이 산정.</li>\n<li><strong>지급정지 가능성</strong> — 수취 계좌 잔액·이체 직후 인출 여부.</li>\n<li><strong>다수 피해 결집</strong> — 동일 닉네임·계좌 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>특허청 위조상품 신고센터 (1666-6464)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고지의무 위반·부작위 기망 평가 영역',
        summary:
          '대법원 2003도7828(대법원, 2004.04.09 선고) 영역에서 법원은 거래상 신의성실의 원칙상 고지할 의무가 있는 사정을 알리지 않고 묵비해 상대방을 착오에 빠뜨린 경우에도 사기죄의 기망이 성립한다고 판시했습니다. 가품·위조 보증서임을 알면서도 정품인 것처럼 묵비하고 정품가를 받은 사안에도 거래 당시의 고지의무와 기망 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '위조 보증서 제시 + 정품가 결제 + 가품 인도·잠적 결합 시 사기·고지의무 위반 평가 영역 — 감정 결과 보존·계좌 추적·고소 권장.',
      },
    ],
    faq: [
      {
        question: '보증서가 위조라는 건 어떻게 입증하나요?',
        answer:
          '<strong>공신력 있는 감정원의 가품·보증서 위조 결과서가 핵심 입증 자료인 영역입니다.</strong> 실물·보증서를 함께 감정 의뢰.',
      },
      {
        question: '단순 가품 배송과 사기는 다른가요?',
        answer:
          '<strong>위조 보증서로 정품임을 적극 가장했는지가 기망 평가 영역입니다.</strong> 보증서 동봉 약속 대화가 근거.',
      },
      {
        question: '결제한 금액을 돌려받을 수 있나요?',
        answer:
          '<strong>결제 대금·감정 비용 환수 청구가 가능한 영역입니다.</strong> 수취 계좌 지급정지 요청도 검토.',
      },
      {
        question: '계정을 닫고 사라졌는데 신원을 찾을 수 있나요?',
        answer:
          '<strong>수취 계좌·예금주·플랫폼 거래 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 보증서로 속은 사람이 더 있어요',
        answer:
          '<strong>동일 계좌·수법 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '중고 명품 진위 다툼', href: '/guide/fraud/fraud-secondhand-luxury-fake-authenticity-track' },
      { label: '명품 리셀 짝퉁 배송', href: '/guide/fraud/fraud-luxury-resale-counterfeit-delivery-refund-track' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
    ],
  },

  // ─── 2 ───
  // 이 페이지는 코인 리딩방에서 원금·수익 보장을 믿고 추가 입금했다가 출금이 막힌 투자 피해자의 약정·입출금 입증과 신고를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-crypto-leading-room-profit-guarantee-withdrawal-block-track',
    keyword: '코인 리딩방 수익보장 투자 출금 거부 사기',
    questionKeyword: '코인 리딩방에서 원금과 수익을 보장한다기에 시키는 대로 입금했는데 수익은 계속 늘어난다면서 출금만 막고 추가 입금을 요구해요.',
    ctaKeyword: '코인 리딩방 수익보장 출금 거부 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '코인 리딩방 수익보장 출금 거부 사기 — 5단계 점검 | 로앤가이드',
      description:
        '코인 리딩방에서 원금·수익 보장한다며 입금받고 출금만 막은 채 추가 입금을 요구한다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오픈채팅 코인 리딩방에 들어가니 \'전문 트레이더가 신호를 주고 원금과 일정 수익을 보장한다\'며, 지정 거래소 앱에 가입해 입금하라고 했습니다. 처음 소액은 화면상 수익이 찍혀 출금도 됐어요. 그래서 믿고 큰 금액을 추가로 넣었더니 이번엔 \'세금·인증 보증금을 더 내야 출금된다\'며 출금을 막았습니다. 화면에는 수익이 계속 늘어나는데 정작 돈은 한 푼도 빠지지 않았고, 같은 방에 있던 \'수익 인증\'들도 전부 바람잡이였던 것 같아요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 자본시장법은 \'무인가 투자중개·일임\'을 규제하는 영역입니다. 리딩방 가입 + 원금·수익 보장 약속 + 추가 입금 유도 + 출금 거부 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 약정·거래 입증 ② 입출금·지갑 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 리딩방 수익보장 출금 거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정·거래 입증</strong> — 원금·수익 보장 약속 대화, 입금 지시·거래소 가입 안내.</li>\n<li><strong>② 입출금·지갑 추적</strong> — 입금 계좌·지갑 주소·이체 시각, 출금 거부·추가요구 메시지.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원 발급, 원화 입금 계좌 지급정지 요청 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 출금 의사 없이 추가 입금만 유도한 정황(무인가 중개 병행 검토).</li>\n<li><strong>⑤ 민사 배상</strong> — 입금 원금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 화면상 수익을 가장하고 출금 의사 없이 \'세금·보증금\'을 핑계로 추가 입금만 받아냈는지가 사기 평가의 결정 사정. 출금 거부·추가요구 메시지와 입금 흐름 보존이 판단의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금융감독원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·입금 자료 즉시 보존 (인지 당일)</strong> — 보장 약속 대화·입금 지시·거래소 화면·출금 거부 메시지 캡처.</li>\n<li><strong>2단계 — 입금 계좌·지갑·거래소 확인 (1주 내)</strong> — 원화 입금 계좌·예금주, 코인 송금 지갑 주소, 거래소 실재·등록 여부 정리.</li>\n<li><strong>3단계 — 경찰·금감원 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 원화 입금 계좌 지급정지·무인가 중개 신고 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 수익 가장·출금 거부 + 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 입금 원금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 리딩방 출금 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·입금·출금 갈래입니다.</strong></p>\n<ul>\n<li><strong>리딩방 초대·운영자 안내·원금·수익 보장 약속 캡처</strong></li>\n<li><strong>입금 지시·거래소 가입 안내 메시지</strong></li>\n<li><strong>원화 입금 내역·수취 계좌·예금주</strong></li>\n<li><strong>코인 송금 지갑 주소·트랜잭션 해시</strong></li>\n<li><strong>출금 거부·세금·보증금 추가요구 메시지</strong></li>\n<li><strong>화면상 수익·잔고 캡처(가장 정황)</strong></li>\n<li><strong>같은 방 다수 피해자 제보·바람잡이 정황</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'세금·보증금을 더 내야 출금된다\'는 요구는 출금 거부형 코인 사기의 전형적 단계로 거론됩니다. 추가 입금 전에 출금 거부 메시지와 지갑 주소를 먼저 보존해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 출금시킬 의사 없이 입금만 받았는지 정황.</li>\n<li><strong>수익 가장</strong> — 화면 잔고가 실제 자산과 일치하는지.</li>\n<li><strong>무인가 중개·일임</strong> — 자본시장법상 인가 유무.</li>\n<li><strong>지급정지·추적 가능성</strong> — 원화 입금 계좌·지갑 흐름.</li>\n<li><strong>다수 피해 결집</strong> — 동일 방·계좌 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (무인가 투자중개·금융사기)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취 범의의 객관적 판단 평가 영역',
        summary:
          '대법원 2017도14104(대법원, 2023.01.12 선고) 영역에서 법원은 사기죄의 편취 범의는 피고인이 자백하지 않는 이상 범행 전후의 재력·환경·범행 내용·거래의 이행 과정 등 객관적 사정을 종합해 판단할 수밖에 없다고 판시했습니다. 원금·수익을 보장한다며 입금받고 출금을 거부한 사안에도 입금·출금 흐름과 운영 정황을 종합해 편취 의사를 나누어 검토해볼 수 있습니다.',
        takeaway: '수익보장 약속 + 추가 입금 유도 + 출금 거부 결합 시 편취 범의·무인가 중개 평가 영역 — 약정·입출금 보존·금감원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '처음에 출금이 됐는데도 사기인가요?',
        answer:
          '<strong>소액 출금으로 신뢰를 쌓고 큰 금액의 출금을 막았는지가 평가 영역입니다.</strong> 입출금 흐름 전체를 정리.',
      },
      {
        question: '수익이 화면에 찍혀 있는데 손해가 맞나요?',
        answer:
          '<strong>화면 잔고가 실제 출금 가능한 자산인지를 다투는 영역입니다.</strong> 출금 거부 메시지가 핵심.',
      },
      {
        question: '코인으로 보냈는데 추적이 되나요?',
        answer:
          '<strong>지갑 주소·트랜잭션 해시로 흐름 추적을 시도할 수 있는 영역입니다.</strong> 원화 입금 계좌는 지급정지 요청 검토.',
      },
      {
        question: '세금을 더 내면 출금된다는데 보내야 하나요?',
        answer:
          '<strong>추가 입금 유도는 출금 거부형 사기의 전형으로 거론되는 영역입니다.</strong> 보내기 전 메시지부터 보존.',
      },
      {
        question: '같은 방에서 당한 사람이 많아요',
        answer:
          '<strong>동일 방·계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '주식 리딩방 손실보장', href: '/guide/fraud/fraud-stock-leading-room-loss-guarantee-track' },
      { label: '코인 거래소 출금 거부', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-refuse-track' },
      { label: '투자사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
    ],
  },

  // ─── 3 ───
  // 이 페이지는 100% 환불보장 광고를 믿고 온라인 강의를 결제했다가 환불 거부·잠적당한 결제자의 광고·결제 입증과 분쟁조정을 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-online-course-refund-guarantee-ad-block-vanish-track',
    keyword: '온라인 강의 환불보장 광고 환불 거부 잠적 사기',
    questionKeyword: '100% 환불보장이라는 광고를 보고 온라인 강의를 결제했는데 막상 환불을 요구하니 약관을 핑계로 거부하다가 연락이 끊겼어요.',
    ctaKeyword: '온라인 강의 환불보장 광고 환불 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 환불보장 광고 환불 거부 사기 — 5단계 | 로앤가이드',
      description:
        '100% 환불보장 광고로 결제를 유도하고 막상 환불은 약관 핑계로 거부·잠적했다면 사기·분쟁조정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'성과가 없으면 100% 전액 환불, 수료까지 책임진다\'는 온라인 강의 광고를 보고 큰맘 먹고 결제했습니다. 광고에는 환불 조건이 아주 간단해 보였는데, 막상 효과가 없어 환불을 요구하니 \'출석률·과제 제출 등 숨은 조건을 못 채웠다\'며 약관을 들이댔어요. 광고와 실제 약관이 전혀 달랐고, 항의가 이어지자 상담 채널을 닫고 환불 담당 연락처도 모두 끊겼습니다. 후기 게시판에는 같은 환불보장 문구로 결제했다가 똑같이 거부당한 사람들이 줄지어 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 전자상거래법은 \'거짓·과장 광고와 청약철회 방해\'를 규제하는 영역입니다. 환불보장·수료 보장 광고 + 결제 유인 + 환불 거부·약관 핑계 + 잠적 결합은 사기 + 분쟁조정 결합 트랙. 피해자라면 ① 광고·결제 입증 ② 약관 차이 정리 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 환불보장 광고 환불 거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·약관·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고·결제 입증</strong> — \'100% 환불보장\' 광고 화면·결제 안내·결제 내역.</li>\n<li><strong>② 약관 차이 정리</strong> — 광고 문구와 실제 환불 약관·숨은 조건의 차이.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 거짓·과장 광고·청약철회 방해 청구.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 환불 의사 없이 보장 문구로 결제만 받은 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 결제 대금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 환불해줄 의사 없이 \'100% 환불보장\'을 내세워 결제를 받아냈는지가 사기 평가의 결정 사정. 광고 문구와 실제 약관의 차이 입증이 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 광고·결제 자료 즉시 보존 (인지 당일)</strong> — 환불보장 광고 화면·랜딩페이지·결제 내역·환불 거부 답변 캡처.</li>\n<li><strong>2단계 — 광고·약관 차이 정리 (3일 내)</strong> — 광고 문구와 실제 환불 약관·숨은 조건 대조표 작성.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 거짓·과장 광고·청약철회 방해 신청.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 환불 의사 없는 보장 문구 + 다수 피해자 반복 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제 대금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 환불보장 환불 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·결제·약관 갈래입니다.</strong></p>\n<ul>\n<li><strong>\'100% 환불보장\'·수료 보장 광고 화면·랜딩페이지 캡처</strong></li>\n<li><strong>결제 안내·결제·카드 승인 내역</strong></li>\n<li><strong>실제 환불 약관·숨은 조건 전문</strong></li>\n<li><strong>광고 문구와 약관 차이 대조표</strong></li>\n<li><strong>환불 요구·거부 답변·상담 채널 폐쇄 정황</strong></li>\n<li><strong>업체·운영자 사업자 정보·연락처</strong></li>\n<li><strong>같은 광고로 결제·거부당한 다수 후기</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 광고 화면은 수정·삭제될 수 있으니 결제 전후로 광고·랜딩페이지를 스크린샷·녹화로 남기고, 카드 결제라면 카드사 항변권(차지백) 신청 기한도 함께 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 환불 의사 없이 보장 문구로 결제만 받았는지 정황.</li>\n<li><strong>광고·약관 괴리</strong> — 광고 문구와 실제 환불 조건의 차이.</li>\n<li><strong>청약철회 방해</strong> — 숨은 조건·연락 차단으로 환불을 막았는지.</li>\n<li><strong>결제 환수</strong> — 카드 항변권·계좌 이체별 회수 방법.</li>\n<li><strong>다수 피해 결집</strong> — 동일 광고·업체 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>공정거래위원회 (전자상거래 거짓·과장 광고)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망에 의한 처분행위·처분의사 평가 영역',
        summary:
          '대법원 2016도13362(대법원, 2017.02.16 선고) 영역에서 법원은 사기죄의 처분행위는 기망에 의한 피기망자의 착오와 행위자의 재물·이익 취득을 매개하는 것으로, 착오에 빠진 피해자의 처분의사에 기초한 행위로 재물·이익을 취득했다고 평가되면 처분행위가 인정된다고 판시했습니다. 환불보장 문구에 속아 결제(처분)한 사안에도 광고로 유발된 착오와 결제 사이의 인과관계를 나누어 검토해볼 수 있습니다.',
        takeaway: '환불보장 광고 + 결제 유인 + 환불 거부·잠적 결합 시 사기·거짓 광고 평가 영역 — 광고·약관 차이 보존·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '약관에 환불 조건이 있으면 사기가 아닌가요?',
        answer:
          '<strong>광고의 \'100% 환불보장\'과 실제 약관이 크게 다른지가 평가 영역입니다.</strong> 광고·약관 대조표가 근거.',
      },
      {
        question: '강의를 일부 들었는데도 환불되나요?',
        answer:
          '<strong>거짓·과장 광고로 결제가 유도됐다면 청약철회·환불을 다툴 수 있는 영역입니다.</strong> 결제·수강 시점 정리.',
      },
      {
        question: '카드로 결제했는데 되돌릴 방법이 있나요?',
        answer:
          '<strong>카드 항변권(차지백) 신청을 검토할 수 있는 영역입니다.</strong> 카드사·소비자원에 기한 확인.',
      },
      {
        question: '업체가 상담 채널을 닫았는데 신고되나요?',
        answer:
          '<strong>사업자 정보·결제 대행·도메인 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 광고로 당한 사람이 많아요',
        answer:
          '<strong>동일 광고·업체 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 분쟁조정·고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '온라인 강의 환불 차단', href: '/guide/fraud/fraud-mooc-bootcamp-refund-block' },
      { label: '학원 수강권 환불 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: 'SNS 광고 제품 환불 거부', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '인터넷 쇼핑 카드 차지백', href: '/guide/fraud/fraud-overseas-shopping-card-chargeback-track' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
    ],
  },

  // ─── 4 ───
  // 이 페이지는 전세대출 알선·승인 보장을 믿고 수수료를 선입금했다가 대출 미실행·잠적을 당한 피해자의 알선·송금 입증과 신고를 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-jeonse-loan-brokerage-upfront-fee-vanish-track',
    keyword: '전세대출 알선 수수료 선입금 대출 미실행 잠적 사기',
    questionKeyword: '전세대출을 무조건 승인되게 알선해준다며 수수료와 서류비를 먼저 받아간 사람이 대출은 실행도 안 하고 사라졌어요.',
    ctaKeyword: '전세대출 알선 수수료 선입금 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세대출 알선 수수료 선입금 잠적 사기 — 5단계 추적 | 로앤가이드',
      description:
        '전세대출 승인을 보장한다며 수수료·서류비를 먼저 받고 대출은 실행 안 한 채 잠적했다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 잔금 날짜가 다가오는데 대출 한도가 모자라 급해진 상황에서, \'신용이 낮아도 전세대출을 무조건 승인되게 알선해준다\'는 사람을 광고로 알게 됐습니다. \'먼저 진행 수수료와 서류 발급비를 입금하면 며칠 안에 승인이 난다\'기에 지정 계좌로 선입금했어요. 그런데 약속한 날이 지나도 대출 실행 소식은 없고, \'심사 보강 비용\'을 또 요구하더니 결국 연락처를 모두 바꾸고 사라졌습니다. 알고 보니 정식 대출모집인 등록도 없고, 같은 계좌로 수수료를 보낸 피해자가 더 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 대부업법·금융소비자보호법은 \'미등록 대출 중개와 중개수수료 수취\'를 규제하는 영역입니다. 전세대출 알선·승인 보장 + 수수료·서류비 선입금 + 대출 미실행 + 잠적 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 알선·약속 입증 ② 송금·계좌 추적 ③ 경찰·금감원 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전세대출 알선 수수료 선입금 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 알선·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 알선·약속 입증</strong> — 무조건 승인·알선 권유 대화, 수수료·서류비 청구·송금.</li>\n<li><strong>② 송금·계좌 추적</strong> — 수취 계좌·예금주·이체 시각, 대출모집인 등록 여부 확인.</li>\n<li><strong>③ 경찰·금감원 신고</strong> — 사건사고사실확인원 발급, 계좌 지급정지·미등록 중개 신고 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 대출 실행 의사 없이 수수료만 받은 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 선입금 수수료·서류비·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대출을 실행할 의사·능력 없이 \'무조건 승인\'을 빙자해 선수수료를 받아 챙겼는지가 사기 평가의 결정 사정. 정식 대출은 차주에게 선수수료를 받지 않는다는 점이 기망 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금융감독원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 알선·송금 자료 즉시 보존 (인지 당일)</strong> — 승인 보장 권유 대화·수수료 청구·송금 내역·추가 비용 요구 캡처.</li>\n<li><strong>2단계 — 대출모집인 등록·업체 확인 (1주 내)</strong> — 금융감독원·협회 조회로 등록 여부, 선수수료 수취의 위법성 확인.</li>\n<li><strong>3단계 — 경찰·금감원 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 수취 계좌 지급정지·미등록 중개 신고.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 대출 미실행 + 동일 계좌 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 선입금 수수료·서류비·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전세대출 알선 수수료 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 알선·송금·확인 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세대출 알선·무조건 승인 광고·권유 대화</strong></li>\n<li><strong>수수료·서류비·심사 보강 비용 청구 메시지</strong></li>\n<li><strong>선입금 송금 내역·수취 계좌·예금주</strong></li>\n<li><strong>대출모집인 등록 여부 조회 결과</strong></li>\n<li><strong>대출 미실행·승인 지연·연락두절 정황</strong></li>\n<li><strong>상대 명의·연락처·사업자(가장) 정보</strong></li>\n<li><strong>같은 계좌로 수수료를 보낸 다수 피해자 제보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정식 금융기관·등록 대출모집인은 대출 실행 전 차주에게 수수료를 선입금받지 않는 것이 원칙입니다. \'선수수료부터 입금\' 요구 자체를 위험 신호로 보고 송금 전 등록 여부를 확인해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 대출 실행 의사·능력 없이 수수료만 받았는지 정황.</li>\n<li><strong>미등록 중개</strong> — 대출모집인 등록·선수수료 수취의 위법성.</li>\n<li><strong>승인 보장 기망</strong> — \'무조건 승인\' 약속의 허위성.</li>\n<li><strong>지급정지 가능성</strong> — 수취 계좌 잔액·이체 직후 인출 여부.</li>\n<li><strong>다수 피해 결집</strong> — 동일 계좌 수취 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (미등록 대출중개·금융사기)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대출 알선 가장 행위의 평가 영역',
        summary:
          '대법원 2024도6831(대법원, 2024.10.25 선고) 영역에서 법원은 통신사기피해환급법이 \'재화의 공급·용역의 제공을 가장한 행위\'는 전기통신금융사기에서 제외하면서도 \'대출의 제공·알선·중개를 가장한 행위\'는 포함한다고 정하고 있다는 점을 판시했습니다. 전세대출 알선·승인을 가장해 수수료를 받아간 사안에도 대출 알선 가장의 성격과 기망 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '전세대출 알선·승인 보장 + 선수수료 + 대출 미실행·잠적 결합 시 사기·미등록 중개 평가 영역 — 알선·송금 보존·금감원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '대출이 안 나온 것뿐인데 사기인가요?',
        answer:
          '<strong>실행 의사·능력 없이 무조건 승인을 빙자해 수수료만 받았는지가 평가 영역입니다.</strong> 승인 보장 대화가 근거.',
      },
      {
        question: '대출 수수료를 미리 내는 게 원래 정상 아닌가요?',
        answer:
          '<strong>정식 대출모집인은 차주에게 선수수료를 받지 않는 것이 원칙인 영역입니다.</strong> 등록 여부 조회가 핵심.',
      },
      {
        question: '보낸 수수료를 돌려받을 수 있나요?',
        answer:
          '<strong>선입금 수수료·서류비 환수 청구가 가능한 영역입니다.</strong> 수취 계좌 지급정지 요청도 검토.',
      },
      {
        question: '상대가 연락처를 다 바꿨는데 신고되나요?',
        answer:
          '<strong>수취 계좌·예금주·광고 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 계좌로 수수료를 보낸 사람이 많아요',
        answer:
          '<strong>동일 수취 계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소·신고 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '대출 선수수료 사기', href: '/guide/fraud/fraud-loan-broker-upfront-fee-vanish-track' },
      { label: '대출 수수료 선입금 사기', href: '/guide/fraud/fraud-loan-fee-advance-scam' },
      { label: '저금리 대환 보이스피싱', href: '/guide/fraud/fraud-voicephishing-low-interest-loan-trap-track' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
    ],
  },

  // ─── 5 ───
  // 이 페이지는 재택 부업으로 물품 대리구매·결제를 하면 정산해준다는 말에 선결제했다가 미정산·잠적당한 지원자의 모집·결제 입증과 추적을 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-remote-job-proxy-purchase-prepay-track',
    keyword: '재택알바 물품 대리구매 선결제 편취 사기',
    questionKeyword: '재택 부업으로 지정 상품을 대신 구매·결제하면 구매가에 수당까지 정산해준다기에 카드로 선결제했는데 정산을 안 하고 잠적했어요.',
    ctaKeyword: '재택알바 대리구매 선결제 편취 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재택알바 대리구매 선결제 편취 사기 — 5단계 추적 | 로앤가이드',
      description:
        '재택 부업으로 물품을 대리구매·선결제하면 정산해준다며 결제만 시키고 정산을 안 한 채 잠적했다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부업을 찾던 중 \'재택으로 지정 쇼핑몰 상품을 대신 구매·결제만 하면 구매가에 건당 수당까지 더해 바로 정산해준다\'는 모집글을 봤습니다. 처음 한두 건은 약속대로 입금돼 믿게 됐고, 점점 더 비싼 상품을 \'한 번에 여러 건 결제하면 수당이 커진다\'며 권했어요. 카드 한도까지 끌어 선결제했더니 이번엔 \'정산이 시스템에 묶였다, 인증비를 더 내야 풀린다\'며 미루다 담당자가 사라졌습니다. 결제한 상품 대금도 수당도 한 푼 못 받았고, 같은 모집글로 들어온 사람들이 단체방에서 같은 피해를 호소하고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 여신전문금융업법은 \'허위 거래를 통한 카드 결제\' 등을 규제하는 영역입니다. 재택 부업 모집 + 물품 대리구매·결제 후 정산 약속 + 선결제 유도 + 미정산·잠적 결합은 사기 + 환수 추적 결합 트랙. 피해자라면 ① 모집·약속 입증 ② 결제·송금 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재택알바 대리구매 선결제 편취 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 모집·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 모집·약속 입증</strong> — 부업 모집글·정산 약속 대화·대리구매 지시·수당 안내.</li>\n<li><strong>② 결제·송금 추적</strong> — 카드 결제·계좌 이체 내역, 정산 입금·미입금 흐름, 인증비 추가요구.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원 발급, 계좌 지급정지·카드사 신고 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 정산 의사 없이 선결제만 유도한 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 결제 대금·미정산액·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정산해줄 의사 없이 \'대리구매·선결제\'를 시키고 미정산·잠적했는지가 사기 평가의 결정 사정. 초기 소액 정산으로 신뢰를 쌓고 고액 결제를 유도한 흐름 보존이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·카드사·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 모집·결제 자료 즉시 보존 (인지 당일)</strong> — 모집글·정산 약속 대화·대리구매 지시·카드 결제·정산 입금 내역 캡처.</li>\n<li><strong>2단계 — 결제·정산 흐름 정리 (3일 내)</strong> — 초기 정산·고액 결제·미정산·인증비 추가요구 시점 정리.</li>\n<li><strong>3단계 — 경찰·카드사 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 계좌 지급정지·카드 결제 항변권 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 미정산·잠적 + 동일 모집글 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제 대금·미정산액·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">재택알바 대리구매 선결제 편취 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 모집·결제·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>재택 부업 모집글·정산 약속·수당 안내 캡처</strong></li>\n<li><strong>대리구매 지시·지정 상품·쇼핑몰 화면</strong></li>\n<li><strong>카드 결제·계좌 이체 내역</strong></li>\n<li><strong>초기 정산 입금·이후 미정산 흐름 정리</strong></li>\n<li><strong>\'인증비·시스템 정산\' 등 추가요구 메시지</strong></li>\n<li><strong>담당자 닉네임·연락처·수취 계좌</strong></li>\n<li><strong>같은 모집글 단체방 다수 피해자 제보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'내 돈으로 먼저 결제하고 나중에 정산\'을 요구하는 부업은 미정산·선결제 편취형으로 거론됩니다. 카드 결제 건은 카드사 항변권(차지백) 신청 기한도 함께 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 정산 의사 없이 선결제만 유도했는지 정황.</li>\n<li><strong>신뢰 유인 구조</strong> — 초기 소액 정산으로 고액 결제를 끌어냈는지.</li>\n<li><strong>결제 환수</strong> — 카드 항변권·계좌 이체별 회수 방법.</li>\n<li><strong>지급정지 가능성</strong> — 수취 계좌 잔액·이체 직후 인출 여부.</li>\n<li><strong>다수 피해 결집</strong> — 동일 모집글·계좌 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 기망·착오·처분의 인과관계 평가 영역',
        summary:
          '대법원 2017도8449(대법원, 2017.09.26 선고) 영역에서 법원은 사기죄가 성립하려면 행위자의 기망행위, 피기망자의 착오와 처분행위, 재물·이익의 취득 사이에 순차적인 인과관계가 존재해야 한다고 판시했습니다. 정산 약속에 속아 대리구매·선결제(처분)를 한 사안에도 모집 단계의 기망과 결제 사이의 인과관계를 나누어 검토해볼 수 있습니다.',
        takeaway: '부업 모집 + 정산 약속 + 선결제 유도 + 미정산·잠적 결합 시 사기 평가 영역 — 모집·결제 보존·카드 항변·고소 권장.',
      },
    ],
    faq: [
      {
        question: '처음엔 정산이 됐는데도 사기인가요?',
        answer:
          '<strong>초기 소액 정산으로 신뢰를 쌓고 고액 결제 후 미정산했는지가 평가 영역입니다.</strong> 정산 입금·미정산 흐름 정리.',
      },
      {
        question: '제가 직접 결제한 건데 책임이 저한테 있나요?',
        answer:
          '<strong>정산 약속에 속아 결제하도록 유도됐는지가 핵심 쟁점 영역입니다.</strong> 모집·지시 대화가 근거.',
      },
      {
        question: '카드로 결제한 금액을 되돌릴 수 있나요?',
        answer:
          '<strong>카드 항변권(차지백) 신청을 검토할 수 있는 영역입니다.</strong> 카드사·소비자원에 기한 확인.',
      },
      {
        question: '담당자가 잠적했는데 신원을 찾을 수 있나요?',
        answer:
          '<strong>수취 계좌·닉네임·모집 채널 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '단체방에 같은 피해자가 많아요',
        answer:
          '<strong>동일 모집글·계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '댓글 알바 선입금 사기', href: '/guide/fraud/fraud-comment-part-time-advance-deposit-track' },
      { label: '온라인 구인 보증금 요구', href: '/guide/fraud/fraud-online-job-recruit-deposit-required-vanish-track' },
      { label: '채용 사기 보증금 회수', href: '/guide/fraud/fraud-job-recruit-deposit-scam' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
    ],
  },

  // ─── 6 (accused) ───
  // 이 페이지는 개인 차용금 변제가 늦어진 것을 차용사기로 고소당한 피의자가 변제 의사·경위를 입증해 채무불이행과 편취를 구분하도록 돕는 페이지다.
  {
    domain: 'fraud',
    slug: 'fraud-personal-loan-repayment-delay-falsely-accused-defense',
    keyword: '개인 차용금 변제 지연 차용사기 무고 방어',
    questionKeyword: '개인적으로 돈을 빌렸다가 사정이 어려워 변제가 늦어졌을 뿐인데 상대가 처음부터 갚을 생각이 없었다며 저를 차용사기로 고소했어요.',
    ctaKeyword: '차용금 변제 지연 차용사기 고소 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '차용금 변제 지연 차용사기 고소 방어 — 5가지 대응 | 로앤가이드',
      description:
        '돈을 빌렸다 사정으로 변제가 늦어진 것뿐인데 차용사기로 고소당해 막막하다면 채무불이행·편취 구분 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"개인적으로 알던 사이에 급한 사정으로 돈을 빌렸고, 차용증과 변제 일정도 적어뒀습니다. 그런데 제 사업·수입이 갑자기 나빠지면서 약속한 날짜를 지키지 못했고, 그동안 일부는 갚으면서 사정을 설명하고 변제 계획도 다시 전달했어요. 그러자 상대는 \'처음부터 갚을 생각이 없었던 차용사기\'라며 저를 고소했습니다. 저는 빌릴 당시 갚을 의사도 있었고 실제로 일부 변제와 연락도 이어왔는데, 단순히 변제가 늦어진 것이 형사 사건으로 둔갑한 것 같아 억울합니다." 형법 제347조 사기는 \'차용 당시부터 변제 의사·능력이 없는 기망\'이 있어야 성립하는 영역이고, 단순한 변제 지연·채무불이행은 형사 사기와 구분되는 민사 영역입니다. 개인 차용 + 변제 지연 + 변제 의사·일부 변제 vs 차용사기(편취 범의) 구분 + 무고 정황 결합 사안. 사실과 다르게 신고되었다면 ① 차용·변제 입증 ② 변제 의사·능력 입증 ③ 진술 정리 ④ 형사 방어 ⑤ 무고·민사 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 차용금 변제 지연 차용사기 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용·변제·진술·방어·무고 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용·변제 입증</strong> — 차용증·이체 내역·변제 일정 합의·일부 변제 송금.</li>\n<li><strong>② 변제 의사·능력 입증</strong> — 차용 당시 수입·자산, 이후 사정 악화, 변제 계획 재안내.</li>\n<li><strong>③ 진술 정리</strong> — 차용 경위·사정 변화·변제 노력을 시간 순으로 정리.</li>\n<li><strong>④ 형사 방어</strong> — 차용 당시 변제 의사·능력이 있었음(편취 범의 부재) 소명.</li>\n<li><strong>⑤ 무고·민사 대응</strong> — 허위 고소 정황 시 무고 검토, 채무는 민사로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차용 당시 변제 의사·능력이 있었는데 이후 사정 악화로 변제가 지연된 것이라면, 차용 시점의 편취 범의를 요하는 형사 사기와 단순 채무불이행은 구분되는 영역. 차용·변제·사정 변화 입증이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용·변제 자료 즉시 정리 (고소 통보 시)</strong> — 차용증·이체·변제 일정 합의·일부 변제·연락 내역 정리.</li>\n<li><strong>2단계 — 진술 전 법률구조공단 132 상담 (조사 전)</strong> — 채무불이행·차용사기 구분, 편취 범의 쟁점 점검.</li>\n<li><strong>3단계 — 경찰 조사 대응 (조사 시)</strong> — 차용 당시 변제 의사·능력, 사정 악화 경위 진술.</li>\n<li><strong>4단계 — 무고 검토 (허위 정황 시)</strong> — 변제 노력·연락 이력이 명백한데 \'처음부터 갚을 뜻 없음\'이라 신고했다면 무고 검토.</li>\n<li><strong>5단계 — 민사 정산 (병행)</strong> — 잔여 채무·이자 분쟁은 변제 합의·민사 절차로 분리 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">차용금 변제 지연 차용사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용·변제·사정 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·차용 당시 대화·이체 내역</strong></li>\n<li><strong>변제 일정 합의·일부 변제 송금 내역</strong></li>\n<li><strong>차용 당시 수입·자산 등 변제 능력 자료</strong></li>\n<li><strong>이후 사정 악화(폐업·수입 감소 등) 증빙</strong></li>\n<li><strong>변제 계획 재안내·연락 지속 기록</strong></li>\n<li><strong>고소장·경찰 조사 통보·소환장</strong></li>\n<li><strong>차용 당시 편취 의사 없음 소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차용 당시 변제 의사·능력이 있었고 이후 일부 변제와 연락을 이어온 기록이 명확할수록, 단순 채무불이행과 차용사기(편취 범의)를 구분하는 데 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의 시점</strong> — 차용 당시 변제 의사·능력 vs 이후 사정 악화.</li>\n<li><strong>채무불이행 구분</strong> — 형사 차용사기와 민사 책임의 경계.</li>\n<li><strong>변제 노력</strong> — 일부 변제·계획 재안내·연락 지속 정황.</li>\n<li><strong>자금 사용처</strong> — 차용금의 실제 용도와 변제 가능성.</li>\n<li><strong>무고 가능성</strong> — \'처음부터 갚을 뜻 없음\' 신고의 사실 부합 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무불이행과 형사책임의 구분 평가 영역',
        summary:
          '대법원 2008도10479(대법원, 2011.01.20 선고) 영역에서 법원은 매매와 같은 쌍무계약에서 계약 내용에 좇은 이행 채무는 특별한 사정이 없는 한 \'자기의 사무\'에 해당해, 그 불이행만으로 곧바로 형사 배임죄가 성립하는 것은 아니라고 판시했습니다. 차용금 변제가 늦어진 사안에서도 단순 채무불이행과 차용 당시 편취 범의를 요하는 형사책임은 구분된다는 관점을 나누어 검토해볼 수 있습니다.',
        takeaway: '개인 차용 + 변제 지연 + 변제 노력 결합 시 채무불이행·차용사기 구분 영역 — 차용·변제·사정 입증·법률구조공단 상담·진술 정리 권장.',
      },
    ],
    faq: [
      {
        question: '변제가 늦은 것만으로 차용사기가 되나요?',
        answer:
          '<strong>차용 당시부터 변제 의사·능력이 없었는지가 핵심 쟁점 영역입니다.</strong> 차용·변제·사정 변화 흐름이 방어 근거.',
      },
      {
        question: '일부라도 갚았는데 사기로 고소당했어요',
        answer:
          '<strong>일부 변제·변제 계획 재안내는 편취 범의 부재 소명에 도움이 되는 영역입니다.</strong> 변제·연락 기록 정리.',
      },
      {
        question: '상대가 사실과 다르게 고소했다면요?',
        answer:
          '<strong>변제 노력이 명백한데 \'갚을 뜻 없음\'으로 신고했다면 무고를 검토할 수 있는 영역입니다.</strong> 법률구조공단 132 상담 권장.',
      },
      {
        question: '빌린 돈 문제는 민사로 풀 수 없나요?',
        answer:
          '<strong>잔여 채무·이자 분쟁은 민사로 분리 대응이 가능한 영역입니다.</strong> 형사·민사 트랙 구분.',
      },
      {
        question: '조사받기 전에 무엇을 준비해야 하나요?',
        answer:
          '<strong>차용 경위·변제 노력·사정 변화를 시간 순으로 정리하는 것이 핵심입니다.</strong> 진술 전 법률구조공단 132 상담.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '채무불이행 vs 사기 구분', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '지인 대여금 민형사 구분', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '차용증 있는 대여금 민형사', href: '/guide/fraud/fraud-loan-with-promissory-note-criminal-civil' },
      { label: '무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 고소 대응', href: '/guide/fraud/fraud-accused-response' },
    ],
  },
];
