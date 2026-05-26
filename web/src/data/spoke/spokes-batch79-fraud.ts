import { SpokePage } from '../spoke-pages';

// batch79 fraud — 4개 (2026-05-27)
//
// 고유 존재 이유:
// 1. 반려동물 보험 대납 빙자 선결제 잠적 — 펫샵 분양·혈통서 위조 류와 분기. '보험 대리가입·대납 빙자 + 월보험료 선결제 + 가입 미실행 + 잠적' 트랙. 이 페이지는 반려동물 보호자의 보험 대납 사기 인지 직후 상황에서 송금·대화 보존과 추적 준비를 돕는 페이지다.
// 2. 이사업체 계약금 선입금 후 당일 추가요금 압박·잠적 — 인테리어·시설 선입금 류와 분기. '저가 견적 유인 + 계약금 선입금 + 이사 당일 추가요금 압박 + 미이행·잠적' 트랙. 이 페이지는 이사 예정자의 계약금 편취·추가요금 압박 상황에서 견적·결제 입증과 분쟁조정 준비를 돕는 페이지다.
// 3. 태양광 설치 정부보조금 빙자 선금 편취 — 기획부동산·투자설명회 류와 분기. '정부보조금 전액 지원 거짓말 + 설치 선금 요구 + 보조금 미신청 + 미설치 잠적' 트랙. 이 페이지는 주택 소유자의 보조금 빙자 선금 사기 상황에서 권유 입증과 신고 준비를 돕는 페이지다.
// 4. 지인 귀금속 위탁판매 대금 정산 지연 사기·횡령 무고 방어 — 동업 자금 손실·횡령 류와 분기. '위탁판매 수탁 + 일부 판매 + 정산 지연 + 채무불이행 vs 편취·횡령 + 무고 방어' 트랙 (accused). 이 페이지는 위탁판매를 맡았다가 사실과 다르게 고소당한 피의자의 정산 경위 입증과 방어 준비를 돕는 페이지다.

export const spokesBatch79Fraud: SpokePage[] = [
  // ─── 1 ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-insurance-prepay-agent-vanish-track',
    keyword: '반려동물 보험 대납 선결제 잠적 사기',
    questionKeyword: '반려동물 보험을 대신 싸게 가입해준다며 월보험료를 미리 받아간 사람이 가입은 안 하고 연락이 끊겼어요.',
    ctaKeyword: '반려동물 보험 대납 선결제 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '반려동물 보험 대납 선결제 잠적 사기 — 5단계 추적 | 로앤가이드',
      description:
        '반려동물 보험을 대신 가입해준다며 보험료를 미리 받고 가입도 안 한 채 잠적당했다면 사기·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"강아지 의료비가 부담돼 고민하던 차에, \'보험사 제휴로 일반 가입보다 훨씬 싼 단체 요율로 반려동물 보험을 대신 가입해준다\'는 사람을 SNS에서 알게 됐습니다. 첫 달치와 가입비를 미리 보내면 바로 증권이 발급된다기에 지정 계좌로 송금했어요. 며칠 뒤 증권을 보내달라고 하자 \'심사 지연\'을 반복하다 연락이 끊겼고, 보험사에 직접 확인하니 그런 단체 가입이나 제휴 자체가 없었습니다. 같은 계좌로 보험료를 보낸 보호자들이 동일한 잠적 피해를 호소하고 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 보험업법은 \'무자격자의 보험 모집 행위\'를 규제하는 영역입니다. 보험 대리가입 빙자 + 월보험료 선결제 + 가입 미실행 + 잠적 결합은 사기 + 환급 추적 결합 트랙. 피해자라면 ① 거래 입증 ② 송금·계좌 추적 ③ 경찰 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반려동물 보험 대납 선결제 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·추적·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 입증</strong> — 대납 권유 대화·할인 요율 설명·송금 내역·약속한 증권 발급 안내.</li>\n<li><strong>② 송금·계좌 추적</strong> — 수취 계좌·예금주·이체 시각, 보험사 제휴·가입 사실 부재 확인.</li>\n<li><strong>③ 경찰 사이버 신고</strong> — 사건사고사실확인원 발급, 계좌 지급정지 요청 검토.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 가입 의사·자격 없는 보험료 수령 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 송금 보험료·가입비·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 제휴·단체 가입이 실재하지 않는데도 싸게 가입시켜준다며 보험료를 받아 챙겼는지가 사기 평가의 결정 사정. 수취 계좌·송금 시각·권유 대화 보존이 추적의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금융감독원·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·송금 자료 즉시 보존 (인지 당일)</strong> — 대납 권유 대화·요율 설명·송금 내역·증권 발급 약속 캡처.</li>\n<li><strong>2단계 — 보험사 제휴·가입 사실 확인 (1주 내)</strong> — 보험사에 단체 가입·제휴 실재 여부, 본인 명의 가입 유무 조회.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 수취 계좌 지급정지 요청 검토.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 무자격 모집 + 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 송금 보험료·가입비·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">반려동물 보험 대납 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·송금·확인 갈래입니다.</strong></p>\n<ul>\n<li><strong>보험 대납·할인 가입 권유 대화(SNS·카톡) 전체</strong></li>\n<li><strong>제휴·단체 요율 설명·증권 발급 약속 캡처</strong></li>\n<li><strong>보험료·가입비 송금 내역·수취 계좌·예금주</strong></li>\n<li><strong>보험사 제휴·가입 사실 부재 확인 자료</strong></li>\n<li><strong>증권 미발급·심사 지연·연락두절 정황</strong></li>\n<li><strong>상대 닉네임·연락처·계좌 정보</strong></li>\n<li><strong>같은 계좌로 송금한 다수 피해자 제보·후기</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'단체·제휴 요율로 싸게 가입\'은 무자격 모집의 전형적 유인 문구. 보험사에 직접 제휴·가입 실재 여부를 확인한 결과를 자료로 남겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 처음부터 가입 의사·자격 없이 보험료만 받았는지 정황.</li>\n<li><strong>무자격 모집</strong> — 보험업법상 모집 자격 유무.</li>\n<li><strong>제휴 실재성</strong> — 보험사 단체·제휴 가입의 실제 존재 여부.</li>\n<li><strong>지급정지 가능성</strong> — 수취 계좌 잔액·이체 직후 인출 여부.</li>\n<li><strong>다수 피해 결집</strong> — 동일 계좌 수취 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332 (무자격 보험모집·금융사기)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 성립의 기망행위 평가 영역',
        summary:
          '대법원 2024도18441(대법원, 2025.03.27 선고) 영역에서 법원은 형법 제347조 사기죄의 기망행위란 사람으로 하여금 착오를 일으키게 하는 것을 말하고, 사람에 대한 기망행위를 수반하는지를 기준으로 사기죄 성립 여부를 판단한다고 판시했습니다. 보험을 싸게 대신 가입해준다며 착오를 일으켜 보험료를 받아간 사안에도 권유 당시의 기망 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '보험 대납 빙자 + 보험료 선결제 + 가입 미실행 + 잠적 결합 시 사기·무자격 모집 평가 영역 — 송금 보존·계좌 추적·고소 권장.',
      },
    ],
    faq: [
      {
        question: '증권을 못 받았는데 사기로 볼 수 있나요?',
        answer:
          '<strong>가입 의사·자격 없이 보험료만 받았는지가 평가 영역입니다.</strong> 권유 대화·송금 내역이 핵심.',
      },
      {
        question: '보험사에 진짜 가입돼 있는지 어떻게 확인하나요?',
        answer:
          '<strong>보험사에 본인 명의 가입·제휴 실재 여부를 직접 조회할 수 있는 영역입니다.</strong> 조회 결과를 자료로 보존.',
      },
      {
        question: '보낸 보험료를 돌려받을 수 있나요?',
        answer:
          '<strong>송금 보험료·가입비 환급 청구가 가능한 영역입니다.</strong> 수취 계좌 지급정지 요청도 검토.',
      },
      {
        question: '상대 계좌번호밖에 모르는데 고소되나요?',
        answer:
          '<strong>수취 계좌·예금주 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 계좌로 보낸 피해자가 더 있어요',
        answer:
          '<strong>동일 수취 계좌 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '보험설계사 허위 설계 환급', href: '/guide/fraud/fraud-insurance-broker-misexplain-refund' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '계좌 지급정지 대응', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '사기죄 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
    ],
  },

  // ─── 2 ───
  {
    domain: 'fraud',
    slug: 'fraud-moving-company-deposit-extra-charge-vanish-track',
    keyword: '이사업체 계약금 받고 추가요금 압박 잠적 사기',
    questionKeyword: '저렴한 견적을 보고 이사 계약금을 보냈는데 이사 당일 갑자기 추가요금을 요구하며 안 주면 짐을 못 옮긴다고 하고 잠적했어요.',
    ctaKeyword: '이사업체 계약금 추가요금 압박 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이사업체 계약금 추가요금 압박 잠적 사기 — 5단계 환수 | 로앤가이드',
      description:
        '저렴한 견적으로 계약금을 받고 이사 당일 추가요금을 압박하다 잠적했다면 사기·분쟁조정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이사 견적 비교 앱에서 가장 저렴한 곳을 골라 계약금을 미리 보냈습니다. 그런데 이사 당일 기사들이 \'짐이 견적보다 많다, 사다리차·층수 추가비가 든다\'며 처음 말과 전혀 다른 추가요금을 요구했어요. 돈을 안 주면 짐을 도로 내려놓겠다고 압박해 어쩔 수 없이 더 입금했는데, 이후 파손 보상을 요구하자 업체는 연락을 끊고 사무실도 비어 있었습니다. 같은 앱에서 같은 수법으로 추가요금을 뜯긴 사람들이 후기에 줄줄이 올라와 있었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 형법 제350조 공갈은 \'협박으로 재물·재산상 이익을 교부받는 행위\'를 규제하는 영역입니다. 저가 견적 유인 + 계약금 선입금 + 당일 추가요금 압박 + 미이행·잠적 결합은 사기·공갈 + 분쟁조정 결합 트랙. 피해자라면 ① 거래 입증 ② 견적·결제 정리 ③ 소비자원 분쟁조정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이사업체 계약금 추가요금 압박 잠적 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·견적·조정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 입증</strong> — 최초 견적·계약 내용·당일 추가요금 요구 대화·녹취.</li>\n<li><strong>② 견적·결제 정리</strong> — 계약금·추가 입금 내역, 견적과 청구 차이 정리.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 부당 추가요금·파손 배상 청구.</li>\n<li><strong>④ 사기·공갈 고소</strong> — 형법 제347조·제350조 + 짐 볼모 압박 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 추가 입금액·파손 손해·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처음부터 저가 견적으로 유인해 당일 짐을 볼모로 추가요금을 받아낼 의도였는지가 사기·공갈 평가의 결정 사정. 최초 견적과 당일 요구 대화의 차이가 입증의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 견적·요구 자료 즉시 보존 (인지 당일)</strong> — 최초 견적서·계약 대화·당일 추가요금 요구 녹취·결제 내역 캡처.</li>\n<li><strong>2단계 — 견적·청구 차이 정리 (3일 내)</strong> — 계약금·추가 입금·약속 항목과 실제 청구 대조.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 부당 추가요금·파손 배상 신청.</li>\n<li><strong>4단계 — 경찰 사기·공갈 고소 (시효 7년)</strong> — 짐 볼모 압박 + 다수 피해자 반복 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 추가 입금액·파손 손해·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">이사업체 추가요금 압박 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 견적·계약·결제 갈래입니다.</strong></p>\n<ul>\n<li><strong>최초 견적서·견적 비교 앱 화면·계약 대화 캡처</strong></li>\n<li><strong>계약금·추가 입금 이체 내역</strong></li>\n<li><strong>당일 추가요금 요구·압박 녹취·문자</strong></li>\n<li><strong>견적 항목과 실제 청구 차이 정리표</strong></li>\n<li><strong>짐 파손·미이행 사진·현장 정황</strong></li>\n<li><strong>업체·기사 사업자 정보·연락처</strong></li>\n<li><strong>같은 앱 동일 수법 다수 피해자 후기</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이사 당일 짐을 볼모로 한 추가요금 요구는 녹취·현장 영상으로 남겨두면 부당성 입증에 도움이 될 수 있습니다. 입금 직후 영수증·청구 항목을 즉시 캡처해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취·압박 범의</strong> — 저가 견적으로 유인해 당일 추가요금을 받아낼 의도였는지 정황.</li>\n<li><strong>추가요금 정당성</strong> — 견적 항목과 실제 작업·청구의 차이.</li>\n<li><strong>공갈 해당성</strong> — 짐 볼모·해악 고지 등 압박 수단.</li>\n<li><strong>파손 배상</strong> — 미이행·파손 손해의 산정.</li>\n<li><strong>다수 피해 결집</strong> — 동일 업체·수법 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공모공동정범의 기망 가담 책임 평가 영역',
        summary:
          '대법원 2024도10141(대법원, 2024.12.12 선고) 영역에서 법원은 사기의 공모공동정범이 기망방법을 구체적으로 몰랐더라도 순차적·암묵적 의사 결합이 있으면 공모관계가 성립한다고 판시했습니다. 저가 견적으로 유인해 당일 추가요금을 받아낸 이사 사안에도 견적 담당과 현장 기사 사이의 가담 구조와 기망 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '저가 견적 유인 + 당일 추가요금 압박 + 미이행·잠적 결합 시 사기·공갈 평가 영역 — 견적·녹취 보존·소비자원·고소 권장.',
      },
    ],
    faq: [
      {
        question: '추가요금을 동의하고 보냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>짐 볼모 압박 아래 어쩔 수 없이 낸 금액은 부당성을 다툴 수 있는 영역입니다.</strong> 당일 요구 녹취가 핵심.',
      },
      {
        question: '견적이 원래 더 나올 수 있는 것 아닌가요?',
        answer:
          '<strong>처음부터 받아낼 의도로 저가 견적을 제시했는지가 평가 영역입니다.</strong> 최초 견적과 청구 차이 정리.',
      },
      {
        question: '짐 파손도 함께 청구할 수 있나요?',
        answer:
          '<strong>파손·미이행 손해 배상 청구가 가능한 영역입니다.</strong> 현장 사진·영상이 산정 근거.',
      },
      {
        question: '사무실이 비어 있는데 고소되나요?',
        answer:
          '<strong>사업자 정보·계좌·앱 등록 정보로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '같은 앱에서 당한 사람이 많아요',
        answer:
          '<strong>동일 수법 반복 피해자 결집은 편취·압박 입증을 강화하는 영역입니다.</strong> 공동 분쟁조정·고소 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '인테리어 선입금 사기', href: '/guide/fraud/fraud-fake-contractor-home-repair-prepayment' },
      { label: 'SNS 광고 제품 환불 거부', href: '/guide/fraud/fraud-sns-ad-product-refund-blocked' },
      { label: '사기 피해 어디부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기죄 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
    ],
  },

  // ─── 3 ───
  {
    domain: 'fraud',
    slug: 'fraud-solar-panel-subsidy-prepayment-vanish-track',
    keyword: '태양광 설치 정부보조금 빙자 선금 사기',
    questionKeyword: '정부보조금으로 거의 공짜로 태양광을 설치해준다며 선금을 받아간 업체가 보조금 신청도 안 하고 설치도 안 한 채 사라졌어요.',
    ctaKeyword: '태양광 정부보조금 빙자 선금 사기 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '태양광 보조금 빙자 선금 사기 — 5단계 환수 점검 | 로앤가이드',
      description:
        '정부보조금으로 공짜 설치해준다며 선금을 받고 신청도 설치도 안 한 채 잠적했다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'정부 신재생에너지 보조금이 곧 마감되니 지금 신청하면 거의 자부담 없이 태양광을 설치할 수 있다\'는 방문 영업을 받았습니다. 담당자는 보조금 지원 확정서처럼 보이는 서류를 보여주며 \'먼저 설치 선금만 넣으면 보조금이 나오는 대로 정산된다\'고 했어요. 노후 대비 삼아 선금을 보냈는데, 보조금 신청 접수증도 없고 설치 일정은 계속 미뤄지다 업체 연락처가 모두 끊겼습니다. 알고 보니 보조금 신청 자체를 한 적이 없고, 같은 동네에서 같은 말을 듣고 선금을 넣은 이웃이 여럿이었어요." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기로 처벌하는 영역이고, 신·재생에너지 관련 보조금은 정해진 신청·확정 절차를 거쳐야 지급되는 영역입니다. 보조금 전액 지원 거짓말 + 설치 선금 요구 + 보조금 미신청 + 미설치 잠적 결합은 사기 + 보조금 빙자 결합 트랙. 피해자라면 ① 권유 입증 ② 보조금·계약 확인 ③ 경찰·관할기관 신고 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 태양광 보조금 빙자 선금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·확인·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유 입증</strong> — 방문 영업 설명·보조금 확정 빙자 서류·계약서·선금 송금.</li>\n<li><strong>② 보조금·계약 확인</strong> — 관할기관에 보조금 신청·접수 사실 부재, 업체 등록 여부 조회.</li>\n<li><strong>③ 경찰·관할기관 신고</strong> — 사건사고사실확인원 + 보조금 사칭 정황 신고.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 설치·신청 의사 없는 선금 편취 정황.</li>\n<li><strong>⑤ 민사 배상</strong> — 선금·위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보조금 신청·설치 의사 없이 \'확정\'을 빙자해 선금을 받아 챙겼는지가 사기 평가의 결정 사정. 보조금 신청·접수 사실 부재 확인이 기망 입증의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·관할기관·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유·계약 자료 즉시 보존 (인지 당일)</strong> — 방문 영업 설명·보조금 빙자 서류·계약서·선금 송금 내역 캡처.</li>\n<li><strong>2단계 — 보조금·업체 사실 확인 (1주 내)</strong> — 관할기관에 신청·접수 부재, 업체 등록·실재 여부 조회.</li>\n<li><strong>3단계 — 경찰·관할기관 신고 (즉시~1주)</strong> — 사건사고사실확인원 발급, 보조금 사칭 신고.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 보조금 빙자 + 동일 지역 다수 피해자 결합.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 선금·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">태양광 보조금 빙자 선금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·계약·확인 갈래입니다.</strong></p>\n<ul>\n<li><strong>방문 영업 설명·보조금 마감 압박 대화·녹취</strong></li>\n<li><strong>보조금 지원 확정 빙자 서류·홍보물</strong></li>\n<li><strong>설치 계약서·선금 청구·송금 내역</strong></li>\n<li><strong>관할기관 보조금 신청·접수 부재 확인 자료</strong></li>\n<li><strong>설치 미이행·일정 지연·연락두절 정황</strong></li>\n<li><strong>업체·담당자 사업자 정보·등록 여부</strong></li>\n<li><strong>같은 지역 다수 피해 이웃 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보조금은 정해진 절차로 신청·확정돼야 지급되는 영역. \'먼저 선금을 넣어야 보조금이 나온다\'는 요구는 빙자 신호일 수 있어, 관할기관에 신청 사실을 직접 확인한 결과를 남겨두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 범의</strong> — 신청·설치 의사 없이 선금만 받았는지 정황.</li>\n<li><strong>보조금 빙자</strong> — 확정 서류·접수 사실의 진위.</li>\n<li><strong>업체 실재성</strong> — 사업자 등록·시공 능력 유무.</li>\n<li><strong>선금 산정</strong> — 송금액과 약속 항목 대조.</li>\n<li><strong>다수 피해 결집</strong> — 동일 지역·수법 피해자 공동 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위계로 심사업무 방해·기망 편취 평가 영역',
        summary:
          '대법원 2024도18174(대법원, 2025.09.25 선고) 영역에서 법원은 대출금 교부를 전후한 일련의 위계행위로 심사 업무를 방해하면서 담당자를 기망해 금원을 교부받은 경우, 기망에 의한 사기와 별도로 위계에 의한 업무방해도 평가될 수 있다고 판시했습니다. 보조금 확정을 빙자해 심사·정산 절차를 가장하며 선금을 받아간 사안에도 권유 당시의 기망과 절차 가장 정황을 나누어 검토해볼 수 있습니다.',
        takeaway: '보조금 전액 지원 거짓말 + 선금 요구 + 미신청·미설치 잠적 결합 시 사기·보조금 빙자 평가 영역 — 권유 보존·관할기관 확인·고소 권장.',
      },
    ],
    faq: [
      {
        question: '설치가 늦어진 것뿐이라면 사기가 아닌가요?',
        answer:
          '<strong>처음부터 신청·설치 의사가 없었는지가 평가 영역입니다.</strong> 보조금 신청 부재 확인이 핵심.',
      },
      {
        question: '보조금 확정 서류를 받았는데도 사기인가요?',
        answer:
          '<strong>확정 서류의 진위·접수 사실을 다툴 수 있는 영역입니다.</strong> 관할기관 조회 결과 확보.',
      },
      {
        question: '선금을 돌려받을 수 있나요?',
        answer:
          '<strong>선금 환수 청구가 가능한 영역입니다.</strong> 계약서·송금 내역이 산정 근거.',
      },
      {
        question: '업체가 사라졌는데 신고가 되나요?',
        answer:
          '<strong>사업자 정보·계좌·등록 여부로 신원 특정을 시도할 수 있는 영역입니다.</strong> 수사기관 협조 요청.',
      },
      {
        question: '동네에서 같이 당한 사람이 많아요',
        answer:
          '<strong>동일 지역 피해자 결집은 편취 범의 입증을 강화하는 영역입니다.</strong> 공동 고소·신고 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '인테리어 선입금 사기', href: '/guide/fraud/fraud-fake-contractor-home-repair-prepayment' },
      { label: '노인 의료기기 방문판매', href: '/guide/fraud/fraud-medical-device-elderly-doortodoor-track' },
      { label: '고소 전 준비서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기죄 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
    ],
  },

  // ─── 4 (accused) ───
  {
    domain: 'fraud',
    slug: 'fraud-consignment-sale-settlement-delay-falsely-accused-defense',
    keyword: '위탁판매 대금 정산 지연 사기 무고 방어',
    questionKeyword: '지인이 맡긴 물건을 대신 팔아주다 정산이 늦어졌는데 지인이 저를 물건값을 가로챈 사기·횡령으로 고소했어요.',
    ctaKeyword: '위탁판매 대금 정산 지연 사기 고소 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '위탁판매 정산 지연 사기 고소 방어 — 5가지 대응 | 로앤가이드',
      description:
        '지인 물건을 대신 팔다 정산이 늦어졌는데 사기·횡령으로 고소당해 막막하다면 채무불이행·편취 구분 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지인이 \'네가 판로가 넓으니 대신 팔아달라\'며 물건을 맡겼고, 저는 일부를 판매해 수수료를 빼고 정산하기로 했습니다. 그런데 일부는 아직 안 팔리고 일부 대금은 거래처 입금이 밀리면서 정산이 늦어졌어요. 그러자 지인은 \'처음부터 물건값을 가로챌 생각이었던 것 아니냐\'며 저를 사기·횡령으로 고소했습니다. 저는 판매·재고·입금 내역을 모두 갖고 있고 정산할 의사도 분명한데, 단순한 정산 지연이 형사 사건으로 둔갑한 상황이라 너무 억울합니다." 형법 제347조 사기는 \'처음부터 기망과 편취 의사\'가 있어야 하고, 형법 제355조 횡령은 \'보관물의 불법영득의사\'를 요건으로 하는 영역이며, 단순한 정산 지연·채무불이행은 형사 사기·횡령과 구분되는 영역입니다. 위탁판매 수탁 + 일부 판매 + 정산 지연 + 채무불이행 vs 편취·횡령 구분 + 무고 정황 결합 사안. 사실과 다르게 신고되었다면 ① 위탁·판매 입증 ② 정산 의사 입증 ③ 진술 정리 ④ 형사 방어 ⑤ 무고·민사 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위탁판매 정산 지연 사기 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위탁·정산·진술·방어·무고 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위탁·판매 입증</strong> — 위탁 합의·수수료 약정·판매·재고·거래처 입금 내역.</li>\n<li><strong>② 정산 의사 입증</strong> — 정산 일정 안내·지연 사유·일부 정산 정황.</li>\n<li><strong>③ 진술 정리</strong> — 수탁·판매·정산 경위를 시간 순으로 정리.</li>\n<li><strong>④ 형사 방어</strong> — 처음부터 편취·불법영득 의사가 없었음(채무불이행과 구분) 소명.</li>\n<li><strong>⑤ 무고·민사 대응</strong> — 허위 고소 정황 시 무고 검토, 정산은 민사로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보관·판매 물건을 자기 것처럼 처분한 불법영득의사 없이 정산이 단지 지연된 정황이 인정되면, 형사 횡령·사기와 단순 채무불이행은 구분되는 영역. 판매·입금·정산 흐름 입증이 방어의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위탁·판매·정산 자료 즉시 정리 (고소 통보 시)</strong> — 위탁 합의·판매 내역·재고·거래처 입금·정산 안내 정리.</li>\n<li><strong>2단계 — 진술 전 법률구조공단 132 상담 (조사 전)</strong> — 채무불이행·편취·횡령 구분 쟁점 점검.</li>\n<li><strong>3단계 — 경찰 조사 대응 (조사 시)</strong> — 정산 의사·지연 사유 진술, 불법영득·편취 의사 부재 소명.</li>\n<li><strong>4단계 — 무고 검토 (허위 정황 시)</strong> — 사실과 다른 신고 정황이 명백하면 무고 고소 검토.</li>\n<li><strong>5단계 — 민사 정산 (병행)</strong> — 정산 잔액·수수료 분쟁은 민사 절차로 분리 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위탁판매 정산 지연 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 위탁·판매·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>위탁 합의·수수료 약정 메시지·대화 전체</strong></li>\n<li><strong>판매 내역·미판매 재고 목록·사진</strong></li>\n<li><strong>거래처 입금·미입금 내역(정산 지연 사유 입증)</strong></li>\n<li><strong>정산 일정 안내·일부 정산 송금 내역</strong></li>\n<li><strong>고소장·경찰 조사 통보·소환장</strong></li>\n<li><strong>지인과의 정산·분쟁 관련 대화 내역</strong></li>\n<li><strong>처음부터 편취·불법영득 의사 없음 소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매 대금이 거래처 입금 지연으로 늦어졌음을 보여주는 입금 내역과, 정산 일정을 먼저 안내한 기록이 명확할수록 채무불이행과 형사 편취·횡령을 구분하는 데 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취·불법영득 의사 유무</strong> — 처음부터 가로챌 의도 vs 정산 지연.</li>\n<li><strong>채무불이행 구분</strong> — 형사 사기·횡령과 민사 책임의 경계.</li>\n<li><strong>대금 사용처</strong> — 판매 대금의 보관·정산 흐름.</li>\n<li><strong>위탁 실체</strong> — 위탁 합의·수수료 약정 정황.</li>\n<li><strong>무고 가능성</strong> — 사실과 다른 신고 정황의 명백성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡령죄 보관·위탁신임관계 평가 영역',
        summary:
          '대법원 2025도978(대법원, 2025.07.17 선고) 영역에서 법원은 횡령죄의 \'보관\'은 위탁관계에 의하여 재물을 점유하는 것을 말하고, 영득죄와 달리 본래 용법에 따른 무단 사용만으로는 불법영득의사가 인정되지 않는다는 점에서 영득죄와 구별된다고 판시했습니다. 위탁받은 물건을 판매하고 정산이 지연된 사안에도 불법영득의사 유무와 위탁신임관계를 나누어 검토해볼 수 있습니다.',
        takeaway: '위탁판매 수탁 + 일부 판매 + 정산 지연 결합 시 채무불이행·편취·횡령 구분 영역 — 위탁·판매·입금 입증·법률구조공단 상담·진술 정리 권장.',
      },
    ],
    faq: [
      {
        question: '정산이 늦어진 것만으로 횡령이 되나요?',
        answer:
          '<strong>보관물을 자기 것처럼 처분한 불법영득의사가 있었는지가 핵심 쟁점 영역입니다.</strong> 판매·정산 흐름이 방어 근거.',
      },
      {
        question: '아직 안 팔린 재고가 있는데도 고소당했어요',
        answer:
          '<strong>미판매 재고·거래처 입금 지연은 편취·영득 의사 부재 소명에 도움이 되는 영역입니다.</strong> 재고·입금 내역 정리.',
      },
      {
        question: '지인이 사실과 다르게 고소했다면요?',
        answer:
          '<strong>허위 신고가 명백하면 무고를 검토할 수 있는 영역입니다.</strong> 법률구조공단 132 상담 권장.',
      },
      {
        question: '정산 분쟁은 민사로 풀 수 없나요?',
        answer:
          '<strong>정산 잔액·수수료 분쟁은 민사로 분리 대응이 가능한 영역입니다.</strong> 형사·민사 트랙 구분.',
      },
      {
        question: '조사받기 전에 무엇을 준비해야 하나요?',
        answer:
          '<strong>위탁·판매·정산 경위를 시간 순으로 정리하는 것이 핵심입니다.</strong> 진술 전 법률구조공단 132 상담.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '채무불이행 vs 사기 구분', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '무고 방어 전략', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '동업 횡령 다툼', href: '/guide/fraud/fraud-partnership-embezzlement-crime' },
      { label: '피의자 조사 실수', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
    ],
  },
];
