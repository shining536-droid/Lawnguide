import { SpokePage } from '../spoke-pages';

// batch78 fraud — 6개 (2026-05-26)
//
// 고유 존재 이유:
// 1. 렌탈·구독 가전 위약금 폭탄 사기 — 멤버십 선결제·헬스장 환불 류와 분기. '렌탈 약정 + 무료체험 빙자 + 자동 약정전환 + 위약금 청구 + 분할 편취' 트랙.
// 2. 해외직구 대행 가상자산 결제 잠적 — 일반 해외구매대행 이중청구 류와 분기. '구매대행 + 가상자산 결제 유도 + 환불 불가 구조 + 잠적 + 추적 곤란' 트랙.
// 3. 가상자산 지갑 복구 빙자 추가 입금 사기 — 거래소 인출 거부·러그풀 류와 분기. '지갑 잠금 빙자 + 복구 수수료 추가 입금 + 2차 피해 + 비트코인 추적' 트랙.
// 4. 비상장주식 투자설명회 고가 매도 사기 — 리딩방·코인 투자사기 류와 분기. '상장 임박 거짓말 + 비상장주식 고가 매도 + 자금 유치 명목 + 편취' 트랙.
// 5. 지인 동업 자금 투자 후 단순 손실 — 사기로 사실과 다르게 고소당한 피혐의자 방어 트랙 (accused). '동업 출자 + 사업 실패 + 채무불이행 vs 편취 + 무고 방어'.
// 6. 무자격 다이어트 보조제 효능 과장 판매 — 노인 방문판매·의료기기 류와 분기. '효능 과장 + 무허가 제품 + 환불 거부 + 표시광고법·사기' 트랙.

export const spokesBatch78Fraud: SpokePage[] = [
  // ─── 1 ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-appliance-cancellation-penalty-track',
    keyword: '렌탈 가전 무료체험 위약금 폭탄 사기',
    questionKeyword: '무료체험인 줄 알고 가전을 받았는데 장기 렌탈 약정으로 전환돼 해지하려니 위약금을 요구하고 환불을 거부해요.',
    ctaKeyword: '렌탈 가전 위약금 폭탄 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '렌탈 가전 위약금 폭탄 사기 — 5단계 환수 대응 | 로앤가이드',
      description:
        '무료체험인 줄 알고 받은 가전이 장기 렌탈 약정으로 전환돼 위약금을 요구당하고 해지를 거부당했다면 사기·할부거래법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"길거리 행사에서 \'한 달 무료체험, 마음에 안 들면 반품\'이라는 말을 믿고 정수기·공기청정기를 설치했습니다. 한 달이 지나 반품을 요청하자, 상담원은 \'이미 3년 의무 약정이 등록돼 있고 해지하면 위약금과 설치비를 합쳐 수십만원을 물어야 한다\'고 했어요. 계약서를 다시 보니 무료체험이라는 설명과 달리 자동으로 장기 렌탈 약정이 체결돼 있었고, 매달 요금이 빠져나가는 구조였습니다. 같은 행사에서 가입한 사람들도 동일한 위약금 청구에 시달리고 있었어요." 형법 제347조는 \'기망에 의한 재물·재산상 이익 취득\'을 사기로 처벌하는 영역이고, 할부거래에 관한 법률 제24조는 \'청약철회권\'을, 방문판매 등에 관한 법률은 \'청약철회·계약해지\'를 규정하는 영역입니다. 무료체험 빙자 + 자동 약정전환 + 위약금 청구 + 환불 거부 결합은 사기 + 할부·방판법 위반 결합 트랙. 피해자라면 ① 계약 입증 ② 청약철회 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 렌탈 가전 위약금 폭탄 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·철회·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 입증</strong> — 모집 당시 설명(녹취·문자)·계약서·약정 등록 내역 확보.</li>\n<li><strong>② 청약철회</strong> — 방문판매·할부거래 청약철회 기간 내 서면 통지(내용증명).</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 위약금 부당·환급 청구.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 무료체험 기망 유인 + 약정 은폐 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 부당 청구 위약금·요금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무료체험이라 설명하고도 장기 약정을 은폐했다면 처음부터 위약금·요금을 받을 목적으로 유인했는지가 사기 평가의 결정 사정. 청약철회 기간 도과 전 서면 통지가 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·공정위·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·모집 자료 즉시 보존 (인지 당일)</strong> — 무료체험 설명 문자·녹취·계약서·약정 등록 캡처.</li>\n<li><strong>2단계 — 청약철회 내용증명 발송 (철회 기간 내)</strong> — 방문판매 14일·할부거래 7일 등 기간 확인 후 서면 통지.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 위약금 부당·요금 환급 신청.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 모집업체 + 다수 피해자 반복 정황 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 부당 위약금·납부 요금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">렌탈 가전 위약금 폭탄 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 모집·계약·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>모집 당시 \'무료체험\' 설명 녹취·문자·홍보물</strong></li>\n<li><strong>렌탈 계약서·약정 등록 내역(의무 기간·위약금 조항)</strong></li>\n<li><strong>설치 확인서·요금 자동이체 내역</strong></li>\n<li><strong>청약철회 의사표시(내용증명) 발송·도달 증빙</strong></li>\n<li><strong>위약금·설치비 청구서·독촉 문자</strong></li>\n<li><strong>모집업체·렌탈사 사업자 정보</strong></li>\n<li><strong>같은 행사 다수 피해자 후기·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방문판매·할부거래 청약철회는 기간이 짧으므로 인지 즉시 내용증명을 발송해 발송일을 고정해두는 것이 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명과 계약 불일치</strong> — \'무료체험\'과 장기 약정 사이 기망 정황.</li>\n<li><strong>청약철회 기간</strong> — 방문판매·할부거래별 기산점·기간 확인.</li>\n<li><strong>위약금 산정 근거</strong> — 약관상 위약금·설치비 정당성 다툼.</li>\n<li><strong>편취 범의</strong> — 처음부터 약정 요금 청구 목적 유인 여부.</li>\n<li><strong>다수 피해 결집</strong> — 동일 모집 수법 반복이 고의 입증 가속.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 (방문판매·할부거래)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 동일 피해자 반복 기망 편취 평가 영역',
        summary:
          '대법원 2025도903(대법원, 2025.04.15 선고) 영역에서 법원은 동일한 피해자에 대하여 수회에 걸쳐 기망행위를 하여 금원을 편취한 경우 범의가 단일하고 범행 방법이 동일하다면 사기죄의 포괄일죄로 평가한다고 판시했습니다. 무료체험으로 유인한 뒤 약정 요금을 매달 반복 청구한 렌탈 사안에도 단일 범의 아래 반복 편취 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '무료체험 빙자 + 자동 약정전환 + 위약금 청구 + 환불 거부 결합 시 사기·할부·방판법 평가 영역 — 청약철회·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '계약서에 서명은 했는데 무료라고 들었어요',
        answer:
          '<strong>모집 당시 설명과 계약 내용이 다른 정황을 입증하는 것이 핵심 영역입니다.</strong> 녹취·문자·홍보물 보존.',
      },
      {
        question: '청약철회 기간이 지났는데 해지할 수 있나요?',
        answer:
          '<strong>기망에 의한 계약은 철회 기간과 별도로 취소·무효 다툼이 가능한 영역입니다.</strong> 소비자원 분쟁조정 검토.',
      },
      {
        question: '위약금을 꼭 내야 하나요?',
        answer:
          '<strong>위약금 산정 근거의 정당성을 다툴 수 있는 영역입니다.</strong> 약관·청구서로 부당성 점검.',
      },
      {
        question: '이미 요금이 빠져나갔는데 돌려받을 수 있나요?',
        answer:
          '<strong>부당 청구 요금·위약금 환급 청구가 가능한 영역입니다.</strong> 이체 내역이 산정 근거.',
      },
      {
        question: '같은 행사에서 피해 본 사람이 많아요',
        answer:
          '<strong>동일 수법 반복 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 분쟁조정·고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '구독 자동갱신 기만', href: '/guide/fraud/fraud-subscription-autorenewal-deceptive' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 2 ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-agent-crypto-payment-vanish-track',
    keyword: '해외직구 대행 가상자산 결제 잠적 사기',
    questionKeyword: '해외직구 대행업자가 가상자산으로 결제하면 싸게 해준다고 해서 코인으로 송금했는데 물건도 안 오고 잠적했어요.',
    ctaKeyword: '해외직구 대행 가상자산 결제 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외직구 대행 코인결제 잠적 사기 — 5단계 추적 | 로앤가이드',
      description:
        '해외직구 대행업자가 가상자산 결제를 유도한 뒤 물건도 안 보내고 잠적했다면 사기·가상자산 추적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"해외 한정판 제품을 구해준다는 직구 대행업자가 \'카드 결제는 수수료가 비싸니 가상자산(코인)으로 보내면 훨씬 싸게 해준다\'고 했습니다. 시세보다 저렴하다는 말에 지정 지갑 주소로 코인을 송금했어요. 며칠 뒤 배송 추적이 안 돼 문의하니 \'통관 지연\'을 반복하다 채팅방을 나가버렸고, 텔레그램 계정도 사라졌습니다. 코인 결제라 카드사 취소도 안 되고 송금한 지갑 주소만 남아 막막한 상황이에요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 특정 금융거래정보의 보고 및 이용 등에 관한 법률(특정금융정보법)은 가상자산사업자의 거래내역 보존·확인 의무를 규정하는 영역입니다. 구매대행 + 가상자산 결제 유도 + 환불 불가 구조 + 잠적 결합은 사기 + 가상자산 추적 결합 트랙. 피해자라면 ① 거래 입증 ② 지갑·거래소 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외직구 대행 코인결제 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 입증</strong> — 대행 광고·결제 유도 대화·코인 송금 트랜잭션 해시.</li>\n<li><strong>② 지갑·거래소 추적</strong> — 수취 지갑 주소·블록체인 거래내역·거래소 송금 경로.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원·가상자산사업자 협조 요청.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 배송 의사 없는 코인 결제 유인 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 송금 코인 시가·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카드보다 싸다며 코인 결제만 유도한 것이 처음부터 환불·추적 회피 목적이었는지가 사기 평가의 결정 사정. 트랜잭션 해시·지갑 주소 보존이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·가상자산사업자·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 즉시 보존 (인지 당일)</strong> — 대행 광고·결제 유도 대화·트랜잭션 해시·지갑 주소 캡처.</li>\n<li><strong>2단계 — 거래소·지갑 추적 정리 (1주 내)</strong> — 송금 경로·수취 지갑·국내 거래소 유입 여부 정리.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 거래소 협조 요청.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 가상자산 추적 + 다수 피해자 공동.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 송금 코인 시가·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외직구 코인결제 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·송금·추적 갈래입니다.</strong></p>\n<ul>\n<li><strong>구매대행 광고·상품 안내·시세 비교 캡처</strong></li>\n<li><strong>코인 결제 유도 대화(텔레그램·카톡) 전체</strong></li>\n<li><strong>코인 송금 트랜잭션 해시·수취 지갑 주소</strong></li>\n<li><strong>이용한 가상자산 거래소 송금 내역</strong></li>\n<li><strong>배송 지연 안내·연락두절·계정 삭제 정황</strong></li>\n<li><strong>대행업자 닉네임·연락처·계정 정보</strong></li>\n<li><strong>같은 대행업자 다수 피해자 제보·후기</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 트랜잭션 해시와 수취 지갑 주소는 블록체인에 영구 기록되는 추적 단서. 국내 거래소로 유입된 흔적이 있으면 수사기관 협조로 본인확인 정보 확인을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 배송 의사 없이 코인 결제만 유도했는지 정황.</li>\n<li><strong>코인 추적 한계</strong> — 해외 지갑·믹서 경유 시 추적 난이도.</li>\n<li><strong>거래소 본인확인</strong> — 국내 거래소 유입 시 사업자 협조 범위.</li>\n<li><strong>피해 금액 산정</strong> — 송금 시점 코인 시가 기준 환산.</li>\n<li><strong>다수 피해 결집</strong> — 동일 지갑 수취 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (가상자산·금융사기)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 매수·국내 거래소 송금 사기 평가 영역',
        summary:
          '대법원 2025도8824(대법원, 2025.09.25 선고) 영역에서 법원은 해외에서 가상자산을 매수하여 바로 대한민국의 가상화폐 거래소 계좌에 입금한 자금 흐름을 둘러싼 사기·범죄수익은닉·외국환거래법 위반 등의 성립 여부를 판단하면서, 자금이 처한 경제적 사정과 거래 경위 등 객관적 사정을 종합해 고의를 평가했습니다. 코인 결제를 유도한 뒤 잠적한 직구 대행 사안에도 송금 경로와 거래소 유입 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '구매대행 + 코인 결제 유도 + 환불 불가 + 잠적 결합 시 사기·가상자산 추적 평가 영역 — 트랜잭션 보존·경찰 신고·고소 권장.',
      },
    ],
    faq: [
      {
        question: '코인으로 보냈는데 추적이 되나요?',
        answer:
          '<strong>트랜잭션 해시·지갑 주소는 블록체인에 기록돼 추적 단서가 되는 영역입니다.</strong> 국내 거래소 유입 시 수사 협조 검토.',
      },
      {
        question: '카드 취소처럼 환불받을 수 있나요?',
        answer:
          '<strong>코인 결제는 카드 차지백이 어려워 형사·민사 트랙이 중심인 영역입니다.</strong> 송금 내역 보존이 핵심.',
      },
      {
        question: '상대 닉네임밖에 모르는데 고소할 수 있나요?',
        answer:
          '<strong>지갑 주소·거래소 경로로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '해외 지갑으로 빠졌으면 끝인가요?',
        answer:
          '<strong>해외 경유에도 국내 거래소 유입 흔적이 있으면 추적이 가능한 영역입니다.</strong> 송금 경로 전체 정리.',
      },
      {
        question: '같은 지갑으로 송금한 피해자가 더 있어요',
        answer:
          '<strong>동일 수취 지갑 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '해외구매대행 이중청구', href: '/guide/fraud/fraud-overseas-buying-agent-double-billing-disappear-track' },
      { label: '가상자산 추적 절차', href: '/guide/fraud/fraud-crypto-mixer-tracing-steps' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 3 ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-wallet-recovery-additional-deposit-track',
    keyword: '가상자산 지갑 복구 빙자 추가 입금 사기',
    questionKeyword: '코인 지갑이 잠겼다며 복구 수수료를 추가로 입금하면 자산을 되찾아준다고 해서 또 송금했는데 다시 연락이 끊겼어요.',
    ctaKeyword: '가상자산 지갑 복구 빙자 추가 입금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '코인 지갑 복구 빙자 추가입금 사기 — 5단계 대응 | 로앤가이드',
      description:
        '코인 지갑이 잠겼다며 복구 수수료 추가 입금을 유도해 2차 피해를 입었다면 사기·가상자산 추적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"앞서 한 차례 코인 투자 피해를 본 뒤, \'잠긴 지갑·동결 자산을 복구해주는 전문 업체\'라는 곳에서 연락이 왔습니다. \'세금·검증 수수료만 추가로 입금하면 묶인 자산을 한 번에 풀어준다\'며 단계마다 추가 입금을 요구했어요. 처음엔 일부 화면을 보여주며 곧 풀린다고 했지만, 입금할 때마다 \'마지막 한 단계\'라며 금액을 늘리더니 결국 다시 연락이 끊겼습니다. 1차 피해에 더해 복구 명목으로 보낸 돈까지 2차 피해를 입은 상황이에요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 형사소송법 제106조·관련 법리는 거래가능성·경제적 가치를 가진 비트코인 등 가상자산이 압수·몰수 대상이 될 수 있음을 다루는 영역입니다. 지갑 잠금 빙자 + 복구 수수료 추가 입금 + 단계별 증액 + 재잠적 결합은 사기 + 2차 피해 추적 결합 트랙. 피해자라면 ① 거래 입증 ② 지갑 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 코인 지갑 복구 빙자 추가입금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 입증</strong> — 복구 업체 연락·수수료 요구 대화·추가 입금 트랜잭션.</li>\n<li><strong>② 지갑 추적</strong> — 수취 지갑·거래소 송금 경로·1차/2차 피해 자금 흐름.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원·가상자산사업자 협조 요청.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 복구 불가 자산을 미끼로 한 추가 편취 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 추가 입금 코인 시가·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 잠긴 자산을 풀어준다며 추가 수수료를 단계별로 요구한 것은 처음부터 복구 의사·능력 없이 재차 편취할 목적이었는지가 사기 평가의 결정 사정. 추가 입금은 즉시 중단하고 자료를 보존하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·가상자산사업자·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 추가 입금 즉시 중단·자료 보존 (인지 당일)</strong> — 복구 권유 대화·수수료 요구·송금 트랜잭션 캡처.</li>\n<li><strong>2단계 — 1차·2차 자금 흐름 정리 (1주 내)</strong> — 수취 지갑·거래소 경로·입금 시점별 시가 정리.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 거래소 협조 요청.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 2차 피해 유발 업체 + 동일 수법 공동.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 추가 입금 코인 시가·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인 지갑 복구 빙자 추가입금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 복구권유·입금·추적 갈래입니다.</strong></p>\n<ul>\n<li><strong>지갑 복구·자산 동결 해제 권유 메시지 전체</strong></li>\n<li><strong>세금·검증·수수료 등 추가 입금 요구 대화</strong></li>\n<li><strong>추가 입금 코인 트랜잭션 해시·수취 지갑 주소</strong></li>\n<li><strong>1차 피해 관련 자료(연계 정황 입증)</strong></li>\n<li><strong>복구 진행 화면·가짜 잔액 캡처</strong></li>\n<li><strong>업체 닉네임·연락처·사칭 명칭 자료</strong></li>\n<li><strong>같은 복구 업체 다수 피해자 제보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'먼저 수수료를 보내면 묶인 자산을 풀어준다\'는 선입금 요구는 2차 피해의 전형적 신호. 추가 입금은 멈추고 트랜잭션 해시부터 확보해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 복구 의사·능력 없이 수수료만 반복 요구했는지 정황.</li>\n<li><strong>1차·2차 피해 연계</strong> — 동일 조직의 재접근 여부 추적.</li>\n<li><strong>코인 추적 한계</strong> — 해외 지갑·믹서 경유 시 난이도.</li>\n<li><strong>피해 금액 산정</strong> — 입금 시점별 코인 시가 환산.</li>\n<li><strong>다수 피해 결집</strong> — 동일 복구 명목 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332 (가상자산·금융사기)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 압수·추적 가능성 평가 영역',
        summary:
          '대법원 2025모45(대법원, 2025.12.11 선고) 영역에서 법원은 독립적 관리가능성·거래가능성·경제적 가치에 대한 실질적 지배가능성을 갖춘 비트코인 등 전자적 증표가 법원·수사기관의 압수 대상에 포함되고, 법정 요건을 충족하면 몰수 대상이 될 수 있다고 판시했습니다. 복구 명목으로 추가 송금받은 코인 사안에도 자금 흐름 추적과 압수·환수 가능성을 나누어 검토해볼 수 있습니다.',
        takeaway: '지갑 잠금 빙자 + 복구 수수료 추가 입금 + 재잠적 결합 시 사기·가상자산 추적 평가 영역 — 추가 입금 중단·트랜잭션 보존·고소 권장.',
      },
    ],
    faq: [
      {
        question: '복구해준다고 해서 또 보냈는데 받을 수 있나요?',
        answer:
          '<strong>2차 피해 자금도 추적·환수를 시도할 수 있는 영역입니다.</strong> 추가 입금 즉시 중단·자료 보존이 핵심.',
      },
      {
        question: '화면에는 자산이 풀린 것처럼 보였어요',
        answer:
          '<strong>가짜 잔액 화면은 추가 입금 유인용 정황 영역입니다.</strong> 캡처를 증거로 보존.',
      },
      {
        question: '1차 사기와 같은 조직일까요?',
        answer:
          '<strong>피해자 명단을 재활용한 재접근 정황을 추적할 수 있는 영역입니다.</strong> 1차 자료도 함께 정리.',
      },
      {
        question: '수수료라며 받은 돈도 사기인가요?',
        answer:
          '<strong>복구 의사 없이 받은 수수료는 별도 편취 정황 영역입니다.</strong> 요구 대화 전체 보존.',
      },
      {
        question: '같은 업체에 또 당한 사람이 있어요',
        answer:
          '<strong>동일 복구 명목 피해자 결집은 고의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '가상자산 추적 절차', href: '/guide/fraud/fraud-crypto-mixer-tracing-steps' },
      { label: '거래소 인출 거부', href: '/guide/fraud/fraud-crypto-exchange-withdrawal-refuse-track' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 4 ───
  {
    domain: 'fraud',
    slug: 'fraud-unlisted-stock-investor-meeting-overprice-track',
    keyword: '비상장주식 투자설명회 고가 매도 사기',
    questionKeyword: '곧 상장한다는 투자설명회 말을 믿고 비상장주식을 비싸게 샀는데 상장도 안 되고 회사 가치도 거의 없는 것으로 드러났어요.',
    ctaKeyword: '비상장주식 고가 매도 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비상장주식 상장 빙자 고가매도 사기 — 5단계 환수 | 로앤가이드',
      description:
        '곧 상장한다는 투자설명회 말을 믿고 비상장주식을 비싸게 샀는데 상장이 무산됐다면 사기·자본시장법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"투자설명회에서 \'이 회사는 6개월 안에 코스닥에 상장되니 지금 비상장주식을 사두면 몇 배가 된다\'는 설명을 들었습니다. 담당자는 가짜 상장 일정표와 기관 투자 유치 자료까지 보여줬고, 저는 노후자금을 털어 주식을 시세보다 훨씬 비싸게 매입했어요. 그런데 상장은 계속 미뤄지다 무산됐고, 알고 보니 회사 실체가 거의 없고 매도자는 액면가 수준 주식을 수십 배 부풀려 판 것이었습니다. 같은 설명회에서 매입한 투자자들이 단체로 피해를 호소하고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 자본시장과 금융투자업에 관한 법률(자본시장법)은 \'부정거래·허위표시에 의한 투자 권유\'를 규제하는 영역입니다. 상장 임박 거짓말 + 가짜 자료 제시 + 비상장주식 고가 매도 + 상장 무산 결합은 사기 + 자본시장법 위반 결합 트랙. 피해자라면 ① 권유 입증 ② 가치·자금 정리 ③ 금감원 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비상장주식 고가 매도 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·가치·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유 입증</strong> — 설명회 자료·상장 일정표·권유 녹취·매매계약서.</li>\n<li><strong>② 가치·자금 정리</strong> — 매입가 vs 실제 가치·자금 이체 내역.</li>\n<li><strong>③ 금융감독원 1332 신고</strong> — 자본시장법 부정거래·허위 권유 정황.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 상장 의사·실체 없는 고가 매도 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 매입가·시가 차액·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상장이 임박하지도 않은 회사를 두고 가짜 자료로 고가 매수를 유인했는지가 사기 평가의 결정 사정. 설명회 자료·녹취가 기망 입증의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·공정위·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유·자료 즉시 보존 (인지 당일)</strong> — 설명회 자료·상장 일정표·권유 녹취·계약서 캡처.</li>\n<li><strong>2단계 — 회사 실체·자금 흐름 정리 (1주 내)</strong> — 법인 등기·재무 상태·매도자 신원·이체 내역.</li>\n<li><strong>3단계 — 금융감독원 1332 신고 (30~60일)</strong> — 자본시장법 부정거래·허위 권유 신고.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 매도자·설명회 운영진 + 다수 피해자 공동.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 매입가·시가 차액·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">비상장주식 고가 매도 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·매매·가치 갈래입니다.</strong></p>\n<ul>\n<li><strong>투자설명회 자료·상장 일정표·기관투자 유치 홍보물</strong></li>\n<li><strong>상장 임박·고수익 권유 녹취·문자</strong></li>\n<li><strong>비상장주식 매매계약서·매입가 영수증</strong></li>\n<li><strong>주식 대금 이체 내역</strong></li>\n<li><strong>회사 법인등기·재무 상태·실체 부재 자료</strong></li>\n<li><strong>매도자·설명회 운영진 신원·연락처</strong></li>\n<li><strong>같은 설명회 다수 피해자 연락처·진술</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비상장주식은 시세가 불투명해 가짜 상장 일정으로 고가 매수를 유인하기 쉬운 영역. 권유 당시 제시된 상장 일정표·자료를 그대로 보존해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 상장 의사·가능성 없이 고가 매수를 유인했는지 정황.</li>\n<li><strong>허위 표시</strong> — 상장 일정·기관투자 자료의 진위.</li>\n<li><strong>자본시장법 해당성</strong> — 부정거래·허위 권유 위반 여부.</li>\n<li><strong>가치 차액 산정</strong> — 매입가와 실제 가치 차액 다툼.</li>\n<li><strong>다수 피해 결집</strong> — 동일 설명회 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (자본시장·투자사기)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 투자금 명목 기망 편취 평가 영역',
        summary:
          '대법원 2025도1302(대법원, 2025.04.15 선고) 영역에서 법원은 거액의 자금을 유치하여 수익을 지급하겠다는 거짓말로 피해자로부터 투자금 명목의 금원을 교부받은 사안에서, 기망행위와 처분행위 사이의 인과관계 등 사기죄의 성립 구조를 전제로 공소사실 변경의 한계를 판단했습니다. 상장 임박 거짓말로 비상장주식을 고가에 매도한 사안에도 투자 권유 당시의 기망 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '상장 임박 거짓말 + 가짜 자료 + 비상장주식 고가 매도 + 상장 무산 결합 시 사기·자본시장법 평가 영역 — 금감원 신고·자료 보존·고소 권장.',
      },
    ],
    faq: [
      {
        question: '상장이 미뤄진 것뿐이라면 사기가 아닌가요?',
        answer:
          '<strong>처음부터 상장 가능성·실체가 없었는지가 평가 영역입니다.</strong> 권유 당시 자료·녹취가 핵심.',
      },
      {
        question: '비상장주식 가치를 어떻게 따지나요?',
        answer:
          '<strong>매입가와 회사 실제 가치 차액으로 피해를 산정하는 영역입니다.</strong> 재무·등기 자료 확보.',
      },
      {
        question: '자본시장법으로도 신고할 수 있나요?',
        answer:
          '<strong>부정거래·허위 권유는 자본시장법 위반 정황 영역입니다.</strong> 금감원 1332 신고 검토.',
      },
      {
        question: '주식을 돌려주고 돈을 받을 수 있나요?',
        answer:
          '<strong>매매 취소·매입가 환수를 다툴 수 있는 영역입니다.</strong> 매매계약서·이체 내역이 근거.',
      },
      {
        question: '같은 설명회 피해자와 함께 대응할 수 있나요?',
        answer:
          '<strong>동일 권유 피해자 결집은 기망 입증을 강화하는 영역입니다.</strong> 공동 고소·신고 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '투자 사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '투자 피해 집단 대응', href: '/guide/fraud/fraud-investment-collective-action' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 5 (accused) ───
  {
    domain: 'fraud',
    slug: 'fraud-business-partner-capital-loss-falsely-accused-defense',
    keyword: '동업 자금 손실 사기 무고 방어',
    questionKeyword: '함께 동업하려고 자금을 받아 사업을 했는데 적자가 나자 동업자가 저를 투자금 편취 사기로 고소했어요.',
    ctaKeyword: '동업 자금 손실 사기 고소 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '동업 손실 사기 고소 방어 — 5가지 무고 대응 | 로앤가이드',
      description:
        '동업 자금으로 사업하다 적자가 났는데 투자금 편취 사기로 고소당해 막막하다면 채무불이행·편취 구분 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지인과 함께 가게를 차리기로 하고 동업 자금을 받아 인테리어·재료비에 실제로 투입했습니다. 그런데 매출이 기대에 못 미쳐 적자가 쌓이자, 동업자는 \'처음부터 돈을 가로챌 생각이었던 것 아니냐\'며 저를 투자금 편취 사기로 고소했어요. 저는 받은 돈을 전부 사업에 쓴 영수증도 있고 함께 운영에 참여해왔는데, 단순한 사업 손실이 형사 사기로 둔갑한 상황이라 너무 억울합니다." 형법 제347조 사기는 \'처음부터 기망과 편취 의사\'가 있어야 하는 영역이고, 민사상 채무불이행·투자 손실은 형사 사기와 구분되는 영역입니다. 동업 출자 + 사업 실패 + 채무불이행 vs 편취 구분 + 무고 정황 결합 사안. 사실과 다르게 신고되었다면 ① 자금 사용 입증 ② 동업 실체 입증 ③ 진술 정리 ④ 형사 방어 ⑤ 무고·민사 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동업 손실 사기 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금·실체·진술·방어·무고 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자금 사용 입증</strong> — 받은 동업 자금을 사업에 실제 투입한 영수증·계좌 내역.</li>\n<li><strong>② 동업 실체 입증</strong> — 동업 합의·역할 분담·공동 운영 정황 자료.</li>\n<li><strong>③ 진술 정리</strong> — 자금 수령·사용·손실 경위를 시간 순으로 정리.</li>\n<li><strong>④ 형사 방어</strong> — 처음부터 편취 의사가 없었음(채무불이행과 구분) 소명.</li>\n<li><strong>⑤ 무고·민사 대응</strong> — 허위 고소 정황 시 무고 검토, 정산은 민사로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자금을 사업에 실제 투입하고 공동 운영에 참여한 정황이 인정되면 사기의 편취 의사와 단순 사업 손실은 구분되는 영역. 자금 사용처 입증이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자금 사용·동업 자료 즉시 정리 (고소 통보 시)</strong> — 영수증·계좌 내역·동업 합의·운영 정황 정리.</li>\n<li><strong>2단계 — 진술 전 법률구조공단 132 상담 (조사 전)</strong> — 채무불이행·편취 구분 쟁점 점검.</li>\n<li><strong>3단계 — 경찰 조사 대응 (조사 시)</strong> — 자금 사용처·공동 운영 사실 진술, 편취 의사 부재 소명.</li>\n<li><strong>4단계 — 무고 검토 (허위 정황 시)</strong> — 사실과 다른 신고 정황이 명백하면 무고 고소 검토.</li>\n<li><strong>5단계 — 민사 정산 (병행)</strong> — 동업 정산·손익 분배는 민사 절차로 분리 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동업 손실 사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금·동업·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>동업 자금 수령·사업 투입 계좌 내역·영수증 전체</strong></li>\n<li><strong>동업 합의서·메시지·역할 분담 정황 자료</strong></li>\n<li><strong>임대차·인테리어·재료 구입 등 운영 지출 증빙</strong></li>\n<li><strong>매출·손실 등 사업 운영 기록</strong></li>\n<li><strong>고소장·경찰 조사 통보·소환장</strong></li>\n<li><strong>동업자와의 정산·분쟁 관련 대화 내역</strong></li>\n<li><strong>처음부터 편취 의사 없음 소명 자료(공동 운영 참여 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 받은 자금을 사업에 그대로 투입한 영수증·계좌 흐름이 명확할수록 채무불이행·투자 손실과 형사 편취를 구분하는 데 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 의사 유무</strong> — 처음부터 가로챌 의도 vs 사업 실패에 따른 손실.</li>\n<li><strong>채무불이행·투자 손실 구분</strong> — 형사 사기와 민사 책임의 경계.</li>\n<li><strong>자금 사용처</strong> — 사업 실제 투입 여부 입증.</li>\n<li><strong>동업 실체</strong> — 공동 출자·운영 참여 정황.</li>\n<li><strong>무고 가능성</strong> — 사실과 다른 신고 정황의 명백성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모·기능적 행위지배에 따른 책임 구분 영역',
        summary:
          '대법원 2020도949(대법원, 2025.12.04 선고) 영역에서 법원은 명의로 개설·운영된 기관의 경영사항에 대해 의사결정 권한을 보유했다는 사정만으로 곧바로 위반 책임이 인정되는 것은 아니며, 실질적 지배·관리 등 인정 요건을 갖췄는지 구체적으로 따져야 한다고 판시했습니다. 동업 자금을 받아 공동 운영에 참여한 사안에도 편취 의사·실질적 책임 귀속을 나누어 검토해볼 수 있습니다.',
        takeaway: '동업 출자 + 사업 실패 + 자금 실제 투입 + 공동 운영 결합 시 채무불이행·편취 구분 영역 — 자금 사용 입증·법률구조공단 상담·진술 정리 권장.',
      },
    ],
    faq: [
      {
        question: '동업하다 적자가 났는데 사기로 처벌될 수 있나요?',
        answer:
          '<strong>처음부터 편취 의사가 있었는지가 핵심 쟁점 영역입니다.</strong> 자금 사용처·공동 운영 정황이 방어 근거.',
      },
      {
        question: '받은 돈을 사업에 다 썼는데도 고소당했어요',
        answer:
          '<strong>자금 투입 영수증·계좌 흐름이 편취 의사 부재 소명에 도움이 되는 영역입니다.</strong> 지출 증빙 정리.',
      },
      {
        question: '동업자가 거짓으로 고소했다면 어떻게 하나요?',
        answer:
          '<strong>사실과 다른 신고가 명백하면 무고를 검토할 수 있는 영역입니다.</strong> 법률구조공단 상담 권장.',
      },
      {
        question: '돈 문제는 민사로 풀 수 없나요?',
        answer:
          '<strong>동업 정산·손익 분배는 민사 절차로 분리 대응이 가능한 영역입니다.</strong> 형사·민사 트랙 구분.',
      },
      {
        question: '조사받기 전에 무엇을 준비해야 하나요?',
        answer:
          '<strong>자금 사용·동업 경위를 시간 순으로 정리하는 것이 핵심입니다.</strong> 진술 전 법률구조공단 132 상담.',
      },
    ],
    cta: { text: '사기 고소 대응, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '채무불이행 vs 사기 구분', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '동업 횡령 다툼', href: '/guide/fraud/fraud-partnership-embezzlement-crime' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 6 ───
  {
    domain: 'fraud',
    slug: 'fraud-diet-supplement-false-efficacy-sale-track',
    keyword: '다이어트 보조제 효능 과장 판매 사기',
    questionKeyword: '먹기만 하면 살이 빠진다는 광고를 믿고 다이어트 보조제를 정기구매했는데 효과도 없고 무허가 제품에 환불도 거부당했어요.',
    ctaKeyword: '다이어트 보조제 효능 과장 판매 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다이어트 보조제 효능 과장 판매 사기 — 5단계 환수 | 로앤가이드',
      description:
        '먹기만 하면 빠진다는 광고로 다이어트 보조제를 정기구매했는데 무허가 제품에 환불을 거부당했다면 사기·표시광고법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'운동·식단 없이 먹기만 하면 한 달에 몇 kg 빠진다\'는 SNS 광고를 보고 다이어트 보조제를 정기구매했습니다. 후기와 비포·애프터 사진까지 보여줘 믿었는데, 몇 달을 먹어도 효과가 전혀 없었어요. 식약처에 확인하니 \'의약품처럼 효능을 표방했지만 허가받은 기능성 표시 근거가 없는 제품\'이었고, 판매처에 환불을 요구하자 \'정기구매 약정\'을 이유로 거부했습니다. 같은 광고를 보고 구매한 소비자들이 동일한 효능 과장·환불 거부 피해를 호소하고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 표시·광고의 공정화에 관한 법률은 \'거짓·과장 광고\'를, 식품표시광고법은 \'의약품 오인·효능 과장 표시\'를 규제하는 영역입니다. 효능 과장 + 무허가 표시 + 정기구매 약정 + 환불 거부 결합은 사기 + 표시광고법 위반 결합 트랙. 피해자라면 ① 광고 입증 ② 제품·결제 정리 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다이어트 보조제 효능 과장 판매 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·제품·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고 입증</strong> — 효능 과장 광고·후기·비포애프터 사진 캡처.</li>\n<li><strong>② 제품·결제 정리</strong> — 제품 표시사항·허가 여부·정기구매 결제 내역.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 허위 광고·환급 청구.</li>\n<li><strong>④ 사기·표시광고법 고소·신고</strong> — 형법 제347조 + 거짓·과장 광고 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 결제대금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근거 없는 효능을 의약품처럼 표방해 정기구매를 유인했는지가 사기·표시광고법 평가의 결정 사정. 광고 화면·제품 표시사항 캡처가 입증의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·식약처·공정위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 광고·제품 자료 즉시 보존 (인지 당일)</strong> — 효능 과장 광고·후기·제품 표시사항·결제 내역 캡처.</li>\n<li><strong>2단계 — 허가·표시 확인 (1주 내)</strong> — 식약처 제품 정보·기능성 표시 근거 유무 확인.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 허위 광고·정기구매 해지·환급 신청.</li>\n<li><strong>4단계 — 식약처·공정위 신고 + 경찰 고소 (시효 7년)</strong> — 거짓·과장 광고 + 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 결제대금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">다이어트 보조제 효능 과장 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·제품·결제 갈래입니다.</strong></p>\n<ul>\n<li><strong>효능 과장 광고·SNS 게시물·후기·비포애프터 캡처</strong></li>\n<li><strong>제품 포장 표시사항·성분·기능성 표시 사진</strong></li>\n<li><strong>식약처 제품 정보·허가 여부 조회 결과</strong></li>\n<li><strong>정기구매 약정·결제·자동이체 내역</strong></li>\n<li><strong>환불 요구·거부 정황(문자·채팅)</strong></li>\n<li><strong>판매처·수입원 사업자 정보</strong></li>\n<li><strong>같은 광고 다수 피해자 후기·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일반 식품·건강기능식품을 의약품처럼 \'질병 치료·확실한 감량\'으로 표시·광고하면 표시광고법 위반 정황이 뚜렷한 영역. 광고 문구 원본을 그대로 캡처해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>효능 표시 진위</strong> — 허가받은 기능성 근거 유무.</li>\n<li><strong>의약품 오인 광고</strong> — 질병 치료·확정 감량 표방 여부.</li>\n<li><strong>정기구매 해지</strong> — 약정 해지·청약철회 가능성.</li>\n<li><strong>편취 범의</strong> — 효능 없음을 알면서 과장 유인했는지 정황.</li>\n<li><strong>다수 피해 결집</strong> — 동일 광고 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>식품의약품안전처 (효능 과장·부당 광고 신고)</strong></li>\n<li><strong>공정거래위원회 (표시·광고)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무자격·공모에 의한 위법 영업 책임 평가 영역',
        summary:
          '대법원 2024도3736(대법원, 2025.11.13 선고) 영역에서 법원은 자격 없는 자와 공모하여 영리 목적의 위법 영업행위에 공동의 의사에 의한 기능적 행위지배가 있는 경우 그 책임을 함께 진다고 판시했습니다. 근거 없는 효능을 표방하며 보조제를 영리 목적으로 과장 판매한 사안에도 가담 구조와 기망 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '효능 과장 + 무허가 표시 + 정기구매 약정 + 환불 거부 결합 시 사기·표시광고법 평가 영역 — 광고 보존·소비자원·식약처 신고 권장.',
      },
    ],
    faq: [
      {
        question: '효과가 없는 것만으로 사기가 되나요?',
        answer:
          '<strong>근거 없는 효능을 의약품처럼 표방해 유인했는지가 평가 영역입니다.</strong> 광고 문구·표시사항 캡처가 핵심.',
      },
      {
        question: '정기구매 약정을 해지할 수 있나요?',
        answer:
          '<strong>허위 광고에 의한 계약은 해지·청약철회를 다툴 수 있는 영역입니다.</strong> 소비자원 분쟁조정 검토.',
      },
      {
        question: '식약처에도 신고할 수 있나요?',
        answer:
          '<strong>효능 과장·의약품 오인 광고는 식약처 신고 대상 영역입니다.</strong> 제품 정보·광고 캡처 제출.',
      },
      {
        question: '결제한 돈을 돌려받을 수 있나요?',
        answer:
          '<strong>결제대금 환급 청구가 가능한 영역입니다.</strong> 정기구매 결제·이체 내역이 산정 근거.',
      },
      {
        question: '같은 광고로 산 피해자가 많아요',
        answer:
          '<strong>동일 광고 피해자 결집은 과장 광고·편취 입증을 강화하는 영역입니다.</strong> 공동 분쟁조정·신고 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: 'SNS 광고 제품 환불 거부', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },
];
