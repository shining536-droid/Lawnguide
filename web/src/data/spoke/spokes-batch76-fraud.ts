import { SpokePage } from '../spoke-pages';

// batch76 fraud — 6개 (2026-05-24)
//
// 고유 존재 이유:
// 1. 리딩방 손실보전 약정 — 일반 투자사기 류와 분기. '유료 구독 + 손실 전액 보전 약정 + 유사투자자문 미신고 + 단톡 폐쇄 잠적 + 사기' 트랙.
// 2. 헬스장 양도 회원권 환불거부 — 일반 폐업 환불 류와 분기. '장기 회원권 + 사업장 양도 + 신·구 운영자 책임 분리 + 방판법·할부거래법 + 사기' 트랙.
// 3. 결혼정보회사 허위 프로필 — 일반 가입비 환불 류와 분기. '다액 가입비 + 직업·재산·혼인이력 허위 + 약정 횟수 미이행 + 방판법 + 사기' 트랙.
// 4. 중고 명품 정품보증 가품 — 일반 중고거래 사기 류와 분기. '정품 보증 표시 + 감정 가품 + 상표법·전자상거래법 + 판매자 계정 정리 + 사기' 트랙.
// 5. 기획부동산 지분 쪼개기 — 일반 부동산 사기 류와 분기. '개발 호재 가장 + 맹지 지분 분할 매각 + 다수 피해자 + 표시광고법 + 사기' 트랙.
// 6. 코인 예치 이자 폰지 — 일반 코인 투자사기 류와 분기. '월 고정이자 약정 + 출금 정지 + 돌려막기 정황 + 유사수신·가상자산이용자보호법 + 사기' 트랙.

export const spokesBatch76Fraud: SpokePage[] = [
  // ─── 1 ───
  {
    domain: 'fraud',
    slug: 'fraud-stock-leading-room-loss-guarantee-track',
    keyword: '리딩방 손실보전 약정 사기',
    questionKeyword: '유료 주식 리딩방에 월 구독료를 내고 \'손실 전액 보전\' 약정을 받았는데, 큰 손실 뒤 운영자가 약정 이행을 거부하고 단톡방을 폐쇄·잠적했어요.',
    ctaKeyword: '리딩방 손실보전 약정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '리딩방 손실보전 약정 사기 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '손실 전액 보전을 약속받고 유료 리딩방에 가입했다 운영자가 잠적했다면 사기·유사투자자문 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'손실 나면 전액 보전해드린다\'는 약정을 믿고 유료 주식 리딩방에 월 구독료를 내며 가입했습니다. 운영자가 추천한 종목을 따라 매수했다가 몇 달 만에 투자금의 절반 가까이를 잃었고, 약정 이행을 요구하자 운영자는 \'시장 상황 탓\'이라며 보전을 거부했어요. 며칠 뒤 단톡방이 통째로 폐쇄됐고, 운영자 명의 연락처와 SNS 계정도 차단·잠적된 정황이었습니다. 같은 방에서 손실을 본 다른 구독자들도 동일한 보전 거부·연락두절을 겪고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 자본시장법은 \'유사투자자문업\'을 미신고로 영위하거나 손실보전을 약정해 투자를 유인하는 행위를 규제 대상으로 평가하는 영역입니다. 손실 전액 보전 약정 + 구독료 수취 + 단톡 폐쇄 잠적 결합은 사기 + 유사투자자문 미신고 결합 트랙. 피해자라면 ① 약정 입증 ② 구독·투자 자료 ③ 금감원 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 리딩방 손실보전 약정 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·자료·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정 입증</strong> — \'손실 전액 보전\' 메시지·공지·녹취·가입 안내문 캡처.</li>\n<li><strong>② 구독·투자 자료</strong> — 구독료 결제·추천 종목·매수 내역·손실 산정.</li>\n<li><strong>③ 금감원 1332 신고</strong> — 미신고 유사투자자문·손실보전 약정 정황 신고.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 단톡 폐쇄·잠적 정황 결합.</li>\n<li><strong>⑤ 민사 배상</strong> — 약정 보전액·구독료 환수·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'손실 전액 보전\' 약정 자체가 유사투자자문 규제 위반 정황일 수 있고, 처음부터 이행 의사 없이 구독료·투자를 유인했다면 사기 평가의 결정 자료. 다수 구독자 결집이 잠적 입증을 가속합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·잠적 자료 즉시 보존 (인지 당일)</strong> — 손실보전 공지·단톡 폐쇄 캡처·연락 차단 정황.</li>\n<li><strong>2단계 — 구독·투자 자료 정리 (1주 내)</strong> — 구독료 결제·추천 종목·매매 내역·손실액 산정.</li>\n<li><strong>3단계 — 금감원 1332 신고 (30~60일)</strong> — 미신고 유사투자자문·손실보전 약정 정황.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (시효 7년)</strong> — 운영자 + 다수 구독자 공동 고소.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 약정 보전액·구독료·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">리딩방 손실보전 약정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·결제·투자 갈래입니다.</strong></p>\n<ul>\n<li><strong>\'손실 전액 보전\' 약정 메시지·공지·가입 안내문 캡처</strong></li>\n<li><strong>월 구독료 결제·이체 영수증</strong></li>\n<li><strong>운영자 추천 종목·매수 시점·매매 내역</strong></li>\n<li><strong>손실액 산정 자료 (매수가-매도가 차액)</strong></li>\n<li><strong>단톡방 폐쇄·연락 차단·SNS 잠적 정황 캡처</strong></li>\n<li><strong>같은 방 다수 구독자 피해 진술·연락처</strong></li>\n<li><strong>운영자 신원·계좌·사업자 등록 여부 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 손실보전 약정은 정상 투자자문에서 허용되지 않는 형태라 그 약정문구 자체가 유사투자자문 규제 위반 정황 자료가 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의 입증</strong> — 처음부터 이행 의사 없이 유인했는지 객관 정황 종합.</li>\n<li><strong>손실보전 약정의 효력</strong> — 유사투자자문 규제 위반 정황과 결합 평가.</li>\n<li><strong>미신고 유사투자자문</strong> — 사업자 등록·신고 부재 자료.</li>\n<li><strong>다수 구독자 결집</strong> — 동일 패턴 잠적이 사기 입증 가속.</li>\n<li><strong>환수 범위</strong> — 약정 보전액·구독료·투자손실 차액 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기 편취 범의 평가 영역',
        summary:
          '대법원 96도481(대법원, 1996.05.14 선고) 영역에서 법원은 사기죄의 편취 범의는 자백이 없는 한 범행 전후 피고인의 재력·환경·거래의 이행과정 등 객관적 사정을 종합해 판단한다고 판시했습니다. 손실 전액 보전을 약정해 구독료·투자를 유인한 뒤 단톡방을 폐쇄·잠적한 사안에도 약정 당시 이행 의사·자력 등 객관적 사정을 종합해 사기 여부를 검토해볼 수 있습니다.',
        takeaway: '손실보전 약정 + 구독료 수취 + 단톡 폐쇄 잠적 결합 시 사기·유사투자자문 평가 영역 — 변호인 상담·금감원 신고·고소 권장.',
      },
    ],
    faq: [
      {
        question: '운영자가 \'시장 상황 탓\'이라며 보전을 거부합니다',
        answer:
          '<strong>처음부터 이행 의사가 있었는지가 핵심 평가 영역입니다.</strong> 약정문구·자력·잠적 정황 종합 입증.',
      },
      {
        question: '단톡방이 폐쇄돼 증거가 사라질까 걱정됩니다',
        answer:
          '<strong>화면 캡처·녹화·결제 내역을 즉시 보존하는 것이 핵심입니다.</strong> 다수 구독자 자료도 결집.',
      },
      {
        question: '손실보전 약정 자체가 문제될 수 있나요?',
        answer:
          '<strong>손실보전 약정은 유사투자자문 규제 위반 정황 영역입니다.</strong> 금감원 1332 신고로 확인할 수 있습니다.',
      },
      {
        question: '구독료까지 돌려받을 수 있을까요?',
        answer:
          '<strong>약정 보전액·구독료·투자손실 차액 청구 영역입니다.</strong> 결제·투자 자료가 산정 근거.',
      },
      {
        question: '다른 구독자와 함께 고소할 수 있나요?',
        answer:
          '<strong>동일 패턴 다수 피해자 결집은 사기 입증을 가속하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 2 ───
  {
    domain: 'fraud',
    slug: 'fraud-gym-transfer-membership-refund-track',
    keyword: '헬스장 양도 회원권 환불거부 사기',
    questionKeyword: '1년 장기 헬스장 회원권을 결제했는데 헬스장이 타인에게 양도되고 새 운영자가 기존 회원권 인정·환불을 거부, 양도 전 운영자는 폐업·연락두절됐어요.',
    ctaKeyword: '헬스장 양도 회원권 환불거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 양도 회원권 환불거부 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '장기 회원권을 결제했는데 헬스장이 양도되고 새 운영자가 환불을 거부한다면 사기·할부거래법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"운동을 결심하고 동네 헬스장의 1년 장기 회원권을 70만원 넘게 일시납으로 결제했습니다. 두 달쯤 다녔을 무렵 헬스장 간판이 바뀌고 새 운영자가 \'우리는 기존 회원권을 인수하지 않았다\'며 이용·환불을 모두 거부했어요. 양도 전 운영자에게 환불을 요구하려 연락했지만 이미 폐업 신고를 마치고 휴대폰도 정지된 채 연락두절 상태였습니다. 알고 보니 회원권을 대량 선결제 받은 직후 시설을 양도한 정황이었고, 같은 헬스장에서 동일하게 환불을 막힌 회원이 여럿이었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 방문판매 등에 관한 법률·할부거래에 관한 법률은 \'계속거래·선불식 회원권\'의 청약철회·중도해지 환급을 보장하는 영역입니다. 장기 회원권 + 대량 선결제 직후 양도 + 환불 거부 + 연락두절 결합은 사기 + 계속거래 환급 거부 결합 트랙. 피해자라면 ① 계약 입증 ② 양도 경위 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 헬스장 양도 회원권 환불거부 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·양도·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 입증</strong> — 회원권 계약서·결제 영수증·이용 기간·잔여 회차.</li>\n<li><strong>② 양도 경위</strong> — 양도 시점·선결제 규모·폐업 신고 시점 정황.</li>\n<li><strong>③ 소비자원 1372 분쟁조정 (30~60일)</strong> — 계속거래 중도해지 환급 청구.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 대량 선결제 직후 양도 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 미이용분 환급·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양도 전 운영자가 대량 선결제를 받은 직후 시설을 넘기고 잠적했다면 처음부터 이행 의사가 없었는지가 사기 평가의 결정 사정. 신·구 운영자 간 영업 양도에서 채무 인수 여부도 함께 다툼 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·환불거부 자료 즉시 보존 (인지 당일)</strong> — 회원권 계약서·결제 영수증·새 운영자 거부 정황.</li>\n<li><strong>2단계 — 양도·폐업 경위 확인 (1주 내)</strong> — 사업자 등록 변경·폐업 신고 시점 조회.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 신·구 운영자 함께 신청.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 양도 전 운영자 + 다수 피해자 공동.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 미이용분 환급·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헬스장 양도 회원권 환불거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·결제·양도 갈래입니다.</strong></p>\n<ul>\n<li><strong>헬스장 회원권 계약서·이용약관</strong></li>\n<li><strong>일시납 결제 영수증·카드 전표·이체 내역</strong></li>\n<li><strong>이용 기간·출입 기록·잔여 회차 자료</strong></li>\n<li><strong>새 운영자의 인정·환불 거부 정황 (문자·녹취)</strong></li>\n<li><strong>양도 전 운영자의 폐업 신고·연락두절 정황</strong></li>\n<li><strong>사업자 등록 변경·시설 양도 시점 자료</strong></li>\n<li><strong>같은 헬스장 다수 피해 회원 연락처·진술</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계속거래(헬스장·필라테스 등)는 중도해지 환급이 보장되는 영역. 결제 시점과 양도·폐업 시점의 간격이 짧을수록 편취 정황 입증에 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신·구 운영자 책임 분리</strong> — 영업 양도 시 회원 채무 인수 여부.</li>\n<li><strong>편취 범의</strong> — 대량 선결제 직후 양도·잠적 정황 종합 평가.</li>\n<li><strong>중도해지 환급 산정</strong> — 미이용분 일할 계산·위약금 공제.</li>\n<li><strong>다수 피해 결집</strong> — 동일 패턴 회원 공동 대응.</li>\n<li><strong>양도 전 운영자 재산</strong> — 폐업·잠적 시 가압류·계좌압류 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (계속거래·할부거래)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·횡령 별죄 평가 영역',
        summary:
          '대법원 89도1605(대법원, 1989.10.24 선고) 영역에서 법원은 대표기관 등이 피해자를 기망해 교부받은 금원을 보관하던 중 횡령한 경우 사기와 횡령은 침해법익을 달리해 별도의 죄로 평가될 수 있다는 취지로 판시했습니다. 회원권 대금을 선결제로 교부받은 뒤 시설을 양도·잠적한 사안에도 기망 교부와 그 후 처분 경위를 나누어 검토해볼 수 있습니다.',
        takeaway: '대량 선결제 직후 양도 + 환불 거부 + 연락두절 결합 시 사기·환급 평가 영역 — 변호인 상담·소비자원 분쟁조정·고소 권장.',
      },
    ],
    faq: [
      {
        question: '새 운영자가 \'우리는 인수 안 했다\'며 환불을 거부합니다',
        answer:
          '<strong>영업 양도 시 회원 채무 인수 여부가 핵심 다툼 영역입니다.</strong> 양도 계약·약관·정황 종합 검토.',
      },
      {
        question: '양도 전 운영자가 폐업하고 연락이 끊겼어요',
        answer:
          '<strong>대량 선결제 직후 양도·잠적은 편취 정황 영역입니다.</strong> 결제·양도 시점 간격 자료 보존.',
      },
      {
        question: '미이용분만 돌려받을 수 있나요?',
        answer:
          '<strong>계속거래 중도해지 환급은 미이용분 일할 계산 영역입니다.</strong> 위약금 공제 후 산정.',
      },
      {
        question: '소비자원과 고소 중 무엇을 먼저 해야 하나요?',
        answer:
          '<strong>분쟁조정과 형사 고소는 병행할 수 있는 영역입니다.</strong> 환급은 소비자원·민사, 처벌은 고소 트랙.',
      },
      {
        question: '다른 회원들과 함께 대응하는 게 유리한가요?',
        answer:
          '<strong>동일 패턴 다수 피해 결집은 입증을 강화하는 영역입니다.</strong> 공동 분쟁조정·고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 3 ───
  {
    domain: 'fraud',
    slug: 'fraud-marriage-agency-fake-profile-track',
    keyword: '결혼정보회사 허위 프로필 가입비 사기',
    questionKeyword: '결혼정보회사에 수백만원 가입비를 냈는데 매칭 상대의 직업·재산·혼인이력 프로필이 허위였고 약정 횟수도 못 채운 채 환불을 거부당했어요.',
    ctaKeyword: '결혼정보회사 허위 프로필 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '결혼정보회사 허위 프로필 가입비 — 5단계 환수 | 로앤가이드',
      description:
        '매칭 상대 프로필이 허위였고 약정 횟수도 못 채웠는데 가입비 환불을 거부당했다면 사기·방판법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"진지한 만남을 기대하고 결혼정보회사에 수백만원의 가입비를 내고 약정 횟수의 매칭을 보장받았습니다. 그런데 소개받은 상대의 \'전문직·고소득·초혼\' 프로필이 실제와 달랐고, 만나 보니 직업·재산은 물론 혼인이력까지 사실과 다른 정황이 드러났어요. 항의하며 환불을 요구하자 회사는 \'상대가 제출한 자료대로 안내했을 뿐\'이라며 책임을 회피했고, 약정한 매칭 횟수도 절반밖에 채우지 않은 채 위약금을 이유로 환불을 거부했습니다. 같은 회사에서 비슷하게 허위 프로필·환불 거부를 겪은 회원이 여럿이라는 후기도 누적되고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 방문판매 등에 관한 법률은 \'계속거래\'인 결혼중개 서비스의 중도해지·환급을 보장하는 영역입니다. 다액 가입비 + 직업·재산·혼인이력 허위 + 약정 횟수 미이행 + 환불 거부 결합은 사기 + 계속거래 환급 결합 트랙. 피해자라면 ① 허위 입증 ② 약정 미이행 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 결혼정보회사 허위 프로필 가입비 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 허위·약정·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 허위 입증</strong> — 안내받은 프로필 vs 실제 직업·재산·혼인이력 격차 자료.</li>\n<li><strong>② 약정 미이행</strong> — 계약상 매칭 횟수 vs 실제 진행 횟수.</li>\n<li><strong>③ 소비자원 1372 분쟁조정 (30~60일)</strong> — 계속거래 중도해지 환급.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 허위 프로필·횟수 미이행 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 가입비 환급·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 \'상대 자료대로 안내했다\'고 해도 검증 의무를 다하지 않았거나 허위를 알고도 가입을 유인했는지가 다툼 사정. 약정 횟수 미이행은 계속거래 환급의 결정 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청·법원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 허위·약정 자료 즉시 보존 (인지 당일)</strong> — 안내 프로필·실제 정보 격차·매칭 진행 기록.</li>\n<li><strong>2단계 — 계약·환불 조항 정리 (1주 내)</strong> — 약정 횟수·위약금·환급 기준 확인.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 계속거래 중도해지 환급 신청.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 허위 프로필 제공·검증 누락 정황.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 가입비 환급·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결혼정보회사 허위 프로필 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·프로필·결제 갈래입니다.</strong></p>\n<ul>\n<li><strong>결혼정보회사 가입 계약서·이용약관</strong></li>\n<li><strong>가입비 결제 영수증·카드 전표·이체 내역</strong></li>\n<li><strong>안내받은 매칭 상대 프로필 (직업·재산·혼인이력)</strong></li>\n<li><strong>실제 확인된 정보와의 격차 입증 자료</strong></li>\n<li><strong>약정 매칭 횟수 vs 실제 진행 횟수 기록</strong></li>\n<li><strong>환불 요구·거부 정황 (문자·녹취·메일)</strong></li>\n<li><strong>같은 회사 다수 피해 회원 후기·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결혼중개는 계속거래라 약정 횟수를 채우지 못하면 중도해지 환급이 가능한 영역. 프로필 허위와 횟수 미이행을 함께 정리하면 다툼에 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회사의 검증 책임</strong> — \'상대 자료대로\' 항변 vs 검증 의무 위반.</li>\n<li><strong>허위 프로필의 고의</strong> — 알고도 가입을 유인했는지 정황 종합.</li>\n<li><strong>약정 횟수 미이행</strong> — 계속거래 중도해지 환급 산정.</li>\n<li><strong>위약금 공제 다툼</strong> — 위약금 과다 여부·잔여분 환급.</li>\n<li><strong>다수 피해 결집</strong> — 동일 패턴 회원 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (계속거래)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자별 수죄 평가 영역',
        summary:
          '대법원 2003도382(대법원, 2003.04.08 선고) 영역에서 법원은 여러 피해자에게 각각 기망행위를 해 재물을 교부받은 경우 피해자별로 독립한 여러 개의 사기죄로 평가된다고 판시했습니다. 결혼정보회사가 다수 회원에게 허위 프로필을 안내하고 가입비를 받은 사안에도 피해자별로 나누어 사기 여부를 검토해볼 수 있습니다.',
        takeaway: '허위 프로필 + 약정 횟수 미이행 + 다수 회원 결합 시 피해자별 사기·환급 평가 영역 — 변호인 상담·소비자원 분쟁조정·고소 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 \'상대가 제출한 자료대로 안내했다\'고 합니다',
        answer:
          '<strong>회사의 검증 의무 이행 여부가 핵심 다툼 영역입니다.</strong> 허위를 알고 유인했는지 정황 종합.',
      },
      {
        question: '약정 횟수를 절반밖에 못 채웠어요',
        answer:
          '<strong>계속거래 중도해지 환급의 결정 자료 영역입니다.</strong> 약정 횟수 vs 실제 횟수 기록 보존.',
      },
      {
        question: '위약금을 너무 많이 떼겠다고 합니다',
        answer:
          '<strong>위약금 과다 여부도 분쟁조정 다툼 영역입니다.</strong> 약관·잔여분 환급 기준 확인.',
      },
      {
        question: '가입비 전액 환불이 가능할까요?',
        answer:
          '<strong>미이용분 환급 + 위자료 청구 영역입니다.</strong> 허위 입증 자료가 산정에 영향.',
      },
      {
        question: '같은 회사 피해자가 더 있는 것 같아요',
        answer:
          '<strong>피해자별로 독립한 사기 평가가 가능한 영역입니다.</strong> 다수 회원 결집·공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 4 ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-fake-authenticity-track',
    keyword: '중고 명품 정품보증 가품 사기',
    questionKeyword: '중고거래 플랫폼에서 \'정품 보증\' 표시된 명품 가방을 고가에 샀는데 감정 결과 가품이었고, 판매자는 정품이라 주장하며 환불을 거부하고 계정을 정리했어요.',
    ctaKeyword: '중고 명품 정품보증 가품 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 정품보증 가품 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '정품 보증 표시를 믿고 산 명품이 감정 결과 가품이고 판매자가 환불을 거부한다면 사기·상표법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고거래 플랫폼에서 \'정품 보증·구매 영수증 있음\'이라 적힌 명품 가방을 시세에 가까운 고가에 구매했습니다. 받아보니 박음질·각인·금속 마감이 어딘가 어색해 공식 매장과 사설 감정에 의뢰했는데, 가품이라는 감정 결과가 나왔어요. 판매자에게 환불을 요구하자 \'본인은 정품으로 알고 팔았다\'며 거부했고, 며칠 뒤 거래 게시물을 삭제하고 플랫폼 계정도 탈퇴·정리한 정황이었습니다. 알고 보니 같은 판매자가 여러 계정으로 동일한 \'정품 보증\' 문구를 달아 다수에게 가품을 판매한 후기도 보였어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 상표법은 \'위조 상표 상품의 판매\'를, 전자상거래 등에서의 소비자보호에 관한 법률은 \'허위·과장 표시\'를 규제하는 영역입니다. 정품 보증 표시 + 감정 가품 + 환불 거부 + 계정 정리 결합은 사기 + 상표법·전자상거래법 결합 트랙. 피해자라면 ① 감정 입증 ② 표시 자료 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 정품보증 가품 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 감정·표시·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 감정 입증</strong> — 공식 매장·사설 감정원의 가품 감정서·근거 사진.</li>\n<li><strong>② 표시 자료</strong> — \'정품 보증·영수증 있음\' 게시글·채팅 캡처.</li>\n<li><strong>③ 소비자원 1372 분쟁조정 (30~60일)</strong> — 허위 표시·환급 청구.</li>\n<li><strong>④ 사기·상표법 고소</strong> — 형법 제347조 + 위조 상표 상품 판매 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 구매대금 반환·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'정품 보증\' 표시 후 감정 가품이 확인되고 판매자가 환불 거부·계정 정리로 잠적했다면, 처음부터 가품인 줄 알고 정품으로 가장했는지가 사기 평가의 결정 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 감정원·경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 표시·거래 자료 즉시 보존 (인지 당일)</strong> — \'정품 보증\' 게시글·채팅·결제 영수증 캡처.</li>\n<li><strong>2단계 — 가품 감정 의뢰 (1주 내)</strong> — 공식 매장·사설 감정원 감정서 확보.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 허위 표시·환급 신청.</li>\n<li><strong>4단계 — 경찰 사기·상표법 고소 (시효 7년)</strong> — 판매자 + 운영 계정 동시 고소.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 구매대금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 정품보증 가품 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 감정·표시·결제 갈래입니다.</strong></p>\n<ul>\n<li><strong>중고거래 게시글·\'정품 보증\' 표시 캡처</strong></li>\n<li><strong>판매자와의 채팅·통화·환불 요구·거부 정황</strong></li>\n<li><strong>구매대금 결제·이체 영수증</strong></li>\n<li><strong>공식 매장·사설 감정원 가품 감정서</strong></li>\n<li><strong>가품 판정 근거 사진 (박음질·각인·금속 마감)</strong></li>\n<li><strong>판매자 계정·탈퇴·게시물 삭제 정황 캡처</strong></li>\n<li><strong>같은 판매자 다수 피해자 후기·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공식 브랜드 매장 또는 공신력 있는 사설 감정원의 가품 감정서가 가장 강한 입증 자료. 거래 직후 계정 정리·게시물 삭제 정황도 함께 보존하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>판매자의 인식</strong> — \'정품으로 알았다\' 항변 vs 가품 인지 정황.</li>\n<li><strong>정품 보증 표시의 효력</strong> — 허위·과장 표시 평가.</li>\n<li><strong>감정 신뢰성</strong> — 공식 매장·공신력 감정원 감정서.</li>\n<li><strong>계정 정리·잠적</strong> — 거래 직후 탈퇴·삭제 정황 종합.</li>\n<li><strong>환수 범위</strong> — 구매대금 반환·위자료 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>특허청 위조상품 신고센터</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·횡령 법익 평가 영역',
        summary:
          '대법원 2004도6503(대법원, 2006.10.27 선고) 영역에서 법원은 타인을 기망해 재물을 교부받아 개인 용도로 사용한 경우 그 침해법익에 따라 사기·횡령을 나누어 평가한다는 취지로 판시했습니다. 정품 보증을 가장해 가품을 판매하고 대금을 교부받은 사안에도 기망 교부와 그 후 처분 경위를 나누어 검토해볼 수 있습니다.',
        takeaway: '정품 보증 표시 + 감정 가품 + 환불 거부·계정 정리 결합 시 사기·상표법 평가 영역 — 변호인 상담·감정·고소 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 \'본인도 정품으로 알았다\'고 주장합니다',
        answer:
          '<strong>가품 인지 여부가 핵심 평가 영역입니다.</strong> 정품 보증 표시·계정 정리 정황 종합 입증.',
      },
      {
        question: '사설 감정서로도 입증이 될까요?',
        answer:
          '<strong>공신력 있는 감정원·공식 매장 감정이 유리한 영역입니다.</strong> 감정 근거 사진도 함께 보존.',
      },
      {
        question: '판매자가 계정을 탈퇴해 연락이 안 됩니다',
        answer:
          '<strong>플랫폼 협조·계좌 추적으로 신원 확인이 가능한 영역입니다.</strong> 거래·결제 자료 즉시 보존.',
      },
      {
        question: '구매대금 전액 환불이 가능할까요?',
        answer:
          '<strong>구매대금 반환 + 위자료 청구 영역입니다.</strong> 가품 감정서가 산정 근거.',
      },
      {
        question: '같은 판매자에게 당한 사람이 더 있어요',
        answer:
          '<strong>다수 피해자 결집은 입증을 강화하는 영역입니다.</strong> 공동 고소·분쟁조정 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 5 ───
  {
    domain: 'fraud',
    slug: 'fraud-planning-realty-land-share-split-track',
    keyword: '기획부동산 지분 쪼개기 사기',
    questionKeyword: '\'개발 호재 확정\'을 내세운 기획부동산이 임야를 수십 명에게 지분으로 쪼개 팔았는데 실제로는 개발 불가능한 맹지로 환금성이 없었어요.',
    ctaKeyword: '기획부동산 지분 쪼개기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '기획부동산 지분 쪼개기 사기 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '개발 호재를 내세운 기획부동산에 임야 지분을 샀는데 맹지로 환금성이 없다면 사기·표시광고법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'곧 개발 호재가 확정된다\'는 기획부동산의 전화 권유를 받고 임야 일부를 지분으로 매입했습니다. 도로·전철·산업단지 개발이 임박했다며 \'지금 사두면 몇 배가 된다\'고 했고, 한 필지를 수십 명에게 잘게 나눠 파는 구조였어요. 막상 등기를 떼어보니 도로에 접하지 않은 맹지였고, 개발 계획은 확정된 사실이 없거나 실현 가능성이 희박했으며, 공유 지분이라 혼자서는 처분도 어려워 환금성이 사실상 없었습니다. 같은 필지를 산 다른 매수인들도 같은 권유 멘트로 피해를 입은 정황이었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 표시·광고의 공정화에 관한 법률은 \'개발 가능성·투자 수익\'에 관한 허위·과장 광고를 규제하는 영역입니다. 개발 호재 가장 + 맹지 지분 분할 매각 + 다수 피해자 결합은 사기 + 표시광고법 위반 결합 트랙. 피해자라면 ① 권유 입증 ② 토지 실태 ③ 다수 피해 결집 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 기획부동산 지분 쪼개기 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·실태·결집·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유 입증</strong> — 개발 호재·수익 보장 전화·문자·홍보자료 캡처.</li>\n<li><strong>② 토지 실태</strong> — 맹지·공유 지분·개발 계획 부재 입증 자료.</li>\n<li><strong>③ 다수 피해 결집</strong> — 같은 필지·같은 멘트 피해 매수인 단체.</li>\n<li><strong>④ 사기·표시광고 고소</strong> — 형법 제347조 + 허위 과장 광고 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 매매대금 반환·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개발 가능성이 없는 맹지를 \'개발 호재 확정\'으로 가장해 다수에게 지분으로 쪼개 팔았다면, 권유 멘트와 토지 실태의 격차가 기망 입증의 결정 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·지자체·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유·홍보 자료 즉시 보존 (인지 당일)</strong> — 전화 녹취·문자·홍보 책자·계약서.</li>\n<li><strong>2단계 — 토지 실태 자료 확보 (1~2주)</strong> — 등기부·지적도·도시계획 확인서·개발 계획 부재 자료.</li>\n<li><strong>3단계 — 다수 피해 결집 + 한국소비자원 1372 (2주)</strong> — 같은 필지 매수인 결합.</li>\n<li><strong>4단계 — 경찰·검찰 사기·표시광고 고소 (시효 7년)</strong> — 기획부동산 + 영업 조직 공동.</li>\n<li><strong>5단계 — 민사 배상 + 가압류 (시효 3년)</strong> — 매매대금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">기획부동산 지분 쪼개기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·토지·결제 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매 계약서·지분 등기부등본</strong></li>\n<li><strong>기획부동산 전화 녹취·문자·홍보 책자 (개발 호재·수익 보장)</strong></li>\n<li><strong>지적도·도시계획 확인서 (맹지·도로 미접 자료)</strong></li>\n<li><strong>개발 계획 확정 사실 부재 자료 (지자체 확인)</strong></li>\n<li><strong>공유 지분 처분 곤란·환금성 부재 정황</strong></li>\n<li><strong>매매대금 결제·이체 영수증</strong></li>\n<li><strong>같은 필지 다수 피해 매수인 연락처·진술</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 지적도·도시계획 확인서는 누구나 발급 가능한 공시 자료. 권유 멘트의 \'개발 호재\'와 실제 도시계획 사이의 격차가 기망 입증의 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>개발 호재의 허위</strong> — 권유 멘트 vs 실제 도시계획 격차.</li>\n<li><strong>맹지·환금성 부재</strong> — 도로 미접·공유 지분 처분 곤란.</li>\n<li><strong>영업 조직 책임</strong> — 권유 직원·법인·배후 조직 공동.</li>\n<li><strong>다수 피해 결집</strong> — 같은 필지·같은 멘트 공동 대응.</li>\n<li><strong>환수 범위</strong> — 매매대금 반환·위자료 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>관할 지자체 (도시계획·개발 계획 확인)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 처분 공모·횡령 평가 영역',
        summary:
          '대법원 90도414(대법원, 1990.08.10 선고) 영역에서 법원은 명의신탁된 부동산임을 알면서 수탁자와 공모해 처분한 경우 횡령죄의 공동정범 등으로 평가될 수 있다는 취지로 판시했습니다. 기획부동산이 영업 조직과 공모해 환금성 없는 임야 지분을 개발 호재로 가장해 처분한 사안에도 가담 구조를 나누어 검토해볼 수 있습니다.',
        takeaway: '개발 호재 가장 + 맹지 지분 분할 + 다수 피해 결합 시 사기·표시광고 평가 영역 — 변호인 상담·고소·가압류 권장.',
      },
    ],
    faq: [
      {
        question: '\'개발 호재가 확정\'이라더니 사실이 아니었어요',
        answer:
          '<strong>권유 멘트와 실제 도시계획의 격차가 핵심 입증 영역입니다.</strong> 지자체 확인서로 부재 입증.',
      },
      {
        question: '공유 지분이라 혼자서는 팔 수도 없어요',
        answer:
          '<strong>환금성 부재 정황은 기망 입증을 보강하는 영역입니다.</strong> 지분 처분 곤란 자료 보존.',
      },
      {
        question: '권유한 직원만 처벌받고 회사는 빠지나요?',
        answer:
          '<strong>법인·배후 조직 공동 책임 평가 영역입니다.</strong> 영업 구조·자금 흐름 자료 결합.',
      },
      {
        question: '매매대금을 돌려받을 수 있을까요?',
        answer:
          '<strong>매매대금 반환·위자료 청구 영역입니다.</strong> 가압류로 재산 보전을 함께 검토.',
      },
      {
        question: '같은 필지를 산 사람이 수십 명이에요',
        answer:
          '<strong>다수 피해 결집은 입증을 강화하는 영역입니다.</strong> 공동 고소·집단 대응 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 6 ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-staking-ponzi-interest-track',
    keyword: '코인 예치 이자 폰지 사기',
    questionKeyword: '\'코인 예치 시 월 5% 이자 지급\' 플랫폼에 자산을 입금했는데 어느 순간 출금이 막히고 신규 투자금으로 기존 이자를 돌려막던 폰지 정황이 드러나며 운영진이 잠적했어요.',
    ctaKeyword: '코인 예치 이자 폰지 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인 예치 이자 폰지 사기 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '월 고정이자를 약속한 코인 예치 플랫폼에서 출금이 막히고 운영진이 잠적했다면 사기·유사수신 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'코인을 예치하면 매달 5%씩 이자를 지급한다\'는 플랫폼에 가상자산을 입금했습니다. 초반 몇 달은 약속대로 이자가 들어와 신뢰가 쌓였고, 추가로 더 큰 금액을 예치했어요. 그런데 어느 순간 출금 신청이 \'점검 중\'이라며 무기한 지연되기 시작했고, 신규 투자자의 입금으로 기존 회원의 이자를 돌려막던 폰지 구조 정황이 커뮤니티에서 드러났습니다. 얼마 뒤 운영진은 텔레그램 공지방을 폐쇄하고 연락이 끊겼으며, 같은 플랫폼 예치자 다수가 동시에 출금 정지·잠적 피해를 호소했어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역이고, 유사수신행위의 규제에 관한 법률은 \'원금·확정 수익을 약정한 자금 조달\'을, 가상자산이용자보호법은 \'가상자산 이용자 자산 보호\'를 규율하는 영역입니다. 월 고정이자 약정 + 출금 정지 + 돌려막기 정황 + 운영진 잠적 결합은 사기 + 유사수신·가상자산이용자보호법 결합 트랙. 피해자라면 ① 약정 입증 ② 입출금 자료 ③ 금감원 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 예치 이자 폰지 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·자료·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정 입증</strong> — \'월 5% 이자 지급\' 공지·가입 안내·약정 캡처.</li>\n<li><strong>② 입출금 자료</strong> — 예치 입금 내역·이자 수령·출금 정지 정황.</li>\n<li><strong>③ 금감원 1332 신고</strong> — 유사수신·가상자산 관련 신고.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 돌려막기·잠적 정황 결합.</li>\n<li><strong>⑤ 민사 배상</strong> — 예치 원금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신규 투자금으로 기존 이자를 돌려막는 폰지 구조는 처음부터 수익 실현 능력 없이 자금을 끌어모았을 정황. 월 고정이자 약정 자체가 유사수신 규제 위반 정황 자료가 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·잠적 자료 즉시 보존 (인지 당일)</strong> — 이자 약정 공지·출금 정지·공지방 폐쇄 캡처.</li>\n<li><strong>2단계 — 입출금 자료 정리 (1주 내)</strong> — 예치 입금·이자 수령·출금 신청 내역(지갑 주소 포함).</li>\n<li><strong>3단계 — 금감원 1332 신고 (30~60일)</strong> — 유사수신·가상자산 관련 신고.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (시효 7년)</strong> — 운영진 + 다수 예치자 공동 고소.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 예치 원금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 예치 이자 폰지 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·입출금·잠적 갈래입니다.</strong></p>\n<ul>\n<li><strong>\'월 5% 이자 지급\' 약정 공지·가입 안내문 캡처</strong></li>\n<li><strong>예치 입금 트랜잭션·지갑 주소·이체 내역</strong></li>\n<li><strong>이자 수령 내역·출금 신청·지연 정황</strong></li>\n<li><strong>돌려막기 의심 커뮤니티 게시글·자금 흐름 정황</strong></li>\n<li><strong>텔레그램 공지방 폐쇄·연락두절 정황 캡처</strong></li>\n<li><strong>같은 플랫폼 다수 예치자 피해 진술·연락처</strong></li>\n<li><strong>운영진 신원·법인·국내외 계좌 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가상자산 거래는 트랜잭션 해시·지갑 주소가 핵심 추적 자료. 원금·확정 수익을 약정하는 구조는 유사수신 규제 위반 정황이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 수익 실현 능력 없이 자금을 끌어모았는지 객관 정황.</li>\n<li><strong>폰지 구조 입증</strong> — 신규 입금으로 기존 이자 돌려막기 정황.</li>\n<li><strong>유사수신 위반</strong> — 원금·확정 수익 약정의 자금 조달 정황.</li>\n<li><strong>운영진 잠적·해외 도피</strong> — 신원·계좌·지갑 추적.</li>\n<li><strong>환수 범위</strong> — 예치 원금·위자료 산정, 가상자산 평가 시점.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자별 수죄 평가 영역',
        summary:
          '대법원 93도743(대법원, 1993.06.22 선고) 영역에서 법원은 여러 피해자에 대해 단일한 범의·동일한 방법이라도 각 피해법익이 독립하면 피해자별로 독립한 수개의 죄로 평가된다는 취지로 판시했습니다. 동일한 이자 약정으로 다수 예치자에게 자금을 받은 폰지 정황 사안에도 피해자별로 나누어 사기 여부를 검토해볼 수 있습니다.',
        takeaway: '월 고정이자 약정 + 출금 정지 + 돌려막기 + 잠적 결합 시 사기·유사수신 평가 영역 — 변호인 상담·금감원 신고·고소 권장.',
      },
    ],
    faq: [
      {
        question: '초반 몇 달은 이자가 정상 지급됐는데도 사기인가요?',
        answer:
          '<strong>초기 이자 지급은 폰지에서 신뢰를 쌓는 정황 영역입니다.</strong> 돌려막기·잠적 정황 종합 검토.',
      },
      {
        question: '출금이 \'점검 중\'이라며 무기한 막혔어요',
        answer:
          '<strong>출금 정지·공지방 폐쇄 정황을 즉시 보존하는 것이 핵심입니다.</strong> 트랜잭션·지갑 주소도 기록.',
      },
      {
        question: '운영진이 해외에 있는 것 같습니다',
        answer:
          '<strong>국내외 계좌·지갑 추적과 수사 공조가 가능한 영역입니다.</strong> 신원·자금 흐름 자료 보존.',
      },
      {
        question: '예치한 코인을 돌려받을 수 있을까요?',
        answer:
          '<strong>예치 원금·위자료 청구 영역입니다.</strong> 입금 트랜잭션·평가 시점 자료가 산정 근거.',
      },
      {
        question: '같은 플랫폼 피해자와 함께 고소할 수 있나요?',
        answer:
          '<strong>피해자별로 독립한 사기 평가가 가능한 영역입니다.</strong> 다수 예치자 결집·공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },
];
