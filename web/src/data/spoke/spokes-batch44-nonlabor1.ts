import { SpokePage } from '../spoke-pages';

// batch44 nonlabor1 14개: fraud 5 + traffic-accident 5 + divorce 4
//
// 고유 존재 이유:
// 1. fraud/secondhand-escrow-fallback-response — 중고거래 에스크로(안심결제) 미이행 피해자의 에스크로 환불 절차·고소 경로를 정리해 돕는 페이지다.
// 2. fraud/fake-contractor-home-repair-prepayment — 가짜 인테리어 업자에게 선입금한 피해자의 환급·공사업 등록 확인·고소 순서를 돕는 페이지다.
// 3. fraud/government-refund-phishing-variant — 국세환급·정부지원금 사칭 보이스피싱 피해자의 즉시 지급정지·환급 신청을 돕는 페이지다.
// 4. fraud/accused-comprehensive-intent-defense — 사기 피의자가 편취의사·차용 사실 입증으로 기소유예·무혐의 방어를 돕는 페이지다.
// 5. fraud/partial-repayment-settlement-reduction — 피의자가 일부 변제 후 합의·감형 전략을 준비하도록 돕는 페이지다.
// 6. traffic-accident/commute-work-injury-double-claim — 출퇴근 교통사고 피해자가 산재+자동차보험 동시청구 절차를 정리하도록 돕는 페이지다.
// 7. traffic-accident/child-carpool-driver-liability — 카풀 운전자 자녀 부상 시 배상책임 범위와 보험 적용을 정리해 돕는 페이지다.
// 8. traffic-accident/taxi-rideshare-passenger-injury — 택시·승차공유 승객 부상 시 보험청구 경로를 정리해 돕는 페이지다.
// 9. traffic-accident/dashcam-data-recovery-insurance-dispute — 블랙박스 손상·삭제 시 데이터 복구와 사고 입증 절차를 돕는 페이지다.
// 10. traffic-accident/hit-and-run-identify-witness — 뺑소니 피해자가 피의자 특정·목격자 확보 순서를 정리하도록 돕는 페이지다.
// 11. divorce/foreign-spouse-custody-jurisdiction — 외국인 배우자와의 양육권 분쟁에서 국제관할·양육 결정 기준을 정리해 돕는 페이지다.
// 12. divorce/spouse-debt-sole-responsibility — 배우자 단독 명의 부채 분담 여부·일상가사채무 판단을 정리해 돕는 페이지다.
// 13. divorce/inherited-property-division-exclude — 상속받은 재산을 재산분할에서 제외하려는 측의 기여도 방어 전략을 돕는 페이지다.
// 14. divorce/pet-visitation-agreement-template — 이혼 시 반려동물 면접교섭 합의서 항목을 정리해 돕는 페이지다.

export const spokesBatch44Nonlabor1: SpokePage[] = [
  // ─── 1. fraud / secondhand-escrow-fallback-response ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-escrow-fallback-response',
    keyword: '중고거래 에스크로 미이행 사기',
    questionKeyword: '중고거래 안심결제 썼는데 물건이 안 와요 어떻게 하나요?',
    ctaKeyword: '중고거래 에스크로 환불 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고거래 에스크로 미이행 환불 4단계 | 로앤가이드',
      description:
        '번개페이·당근알바 등 에스크로로 결제했는데 물건이 오지 않거나 판매자가 잠수 탄 경우, 환불·이의신청·고소 절차를 72시간 안에 지금 확인하세요.',
    },
    intro:
      '<p>"안심결제 쓰면 안전하다"는 말을 믿고 번개페이·당근알바로 15만 원을 결제했는데, 송장번호가 가짜거나 수령 확인 버튼을 강제로 눌리도록 협박받는 피해가 늘고 있습니다. 에스크로는 "수취확인 이전 분쟁 시 환불" 원칙이지만, 플랫폼마다 이의신청 기한이 7~14일로 다르고, 기한을 놓치면 자동 정산되어 사실상 회수 불가합니다. 72시간 이내 이의신청이 핵심입니다.</p>',
    sections: [
      {
        title: '플랫폼별 이의신청 기한 — 놓치면 자동 정산',
        content:
          '<p><strong style="color:#1e3a5f">에스크로 결제 후 수령 확인 전·후 이의신청 기한이 플랫폼마다 다릅니다.</strong></p>\n<ul>\n<li><strong>번개페이(번개장터)</strong> — 수취확인 전 언제든, 확인 후 7일 이내 이의신청 가능.</li>\n<li><strong>당근알바·당근페이</strong> — 거래 완료 처리 전 24시간 자동 홀딩, 이의신청 14일.</li>\n<li><strong>중고나라 페이</strong> — 구매확정 후 3일 이내 반품·환불 요청.</li>\n<li><strong>네이버페이 안전거래</strong> — 구매확정 후 7일 이내 이의신청, 이후 자동 정산.</li>\n<li><strong>송장번호 확인</strong> — CJ대한통운·롯데글로벌 운송장 조회, 가짜 송장 즉시 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "수취확인 눌러달라"는 재촉 메시지는 100% 의심 신호, 실제 수령·개봉 후에만 확인.</blockquote>',
      },
      {
        title: '이의신청·분쟁조정 — 플랫폼 내부 절차',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼 이의신청 → 분쟁조정 → 환불 결정 3단계, 평균 7~14일 소요됩니다.</strong></p>\n<ul>\n<li><strong>이의신청 접수</strong> — 앱 내 "거래 문의" 또는 "분쟁 신고" 버튼, 증거 사진 5장 이상 첨부.</li>\n<li><strong>판매자 답변 기간</strong> — 48~72시간 내 답변 없으면 자동 구매자 승소 처리.</li>\n<li><strong>플랫폼 중재</strong> — 양측 소명 검토, 필요 시 택배 수취 거부·반송 요구.</li>\n<li><strong>환불 결정</strong> — 승소 시 3~7일 내 원결제수단 환불 처리.</li>\n<li><strong>증거 보강</strong> — 택배 미수령·내용물 불일치 사진·개봉 영상 즉시 업로드.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 에스크로 이의신청 증거와 회수 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '에스크로 실패 시 — 경찰 고소·환불 경로',
        content:
          '<p><strong style="color:#1e3a5f">이의신청 기한 놓쳤거나 판매자가 플랫폼 밖 계좌이체 유도한 경우 형사 고소가 정답입니다.</strong></p>\n<ul>\n<li><strong>사이버범죄 신고</strong> — ecrm.police.go.kr, 에스크로 결제내역·송장 스샷 첨부.</li>\n<li><strong>판매자 계정 조회 협조</strong> — 플랫폼에 수사기관 요청 시 가입자 정보 제공.</li>\n<li><strong>소비자원 분쟁조정</strong> — 1372, 플랫폼 미처리 시 30일 내 조정 개시.</li>\n<li><strong>카드 챠지백</strong> — 카드 결제한 경우 120일 이내 카드사 민원실 신청.</li>\n<li><strong>특경법 가중</strong> — 동일 판매자 피해자 10명 이상이면 상습사기 1~15년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "수수료 아끼자"며 에스크로 밖 계좌이체 유도하는 판매자는 100% 사기 의심.</blockquote>',
      },
      {
        title: '예방 — 에스크로 안전거래 체크 5가지',
        content:
          '<p><strong style="color:#1e3a5f">에스크로 이용해도 수령 전 확인·평가 이력·프로필 검증이 기본입니다.</strong></p>\n<ul>\n<li><strong>판매자 매너온도·후기</strong> — 가입 1년 이상, 거래 후기 20건 이상 선호.</li>\n<li><strong>상품 공개 여부</strong> — 사진 여러 장·직접 촬영 흔적 확인, 인터넷 복붙 의심.</li>\n<li><strong>수취확인 절대 금지</strong> — 실물 확인 전 확인 버튼 누르지 않기.</li>\n<li><strong>택배 개봉 영상</strong> — 스마트폰으로 송장부터 개봉까지 연속 촬영.</li>\n<li><strong>더치트 계좌 조회</strong> — 판매자 계좌번호 thecheat.co.kr 사전 조회.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "에스크로 수수료 부담되니 계좌이체로 깎아드릴게요"는 100% 사기 멘트.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 플랫폼 안심결제 우회 유도와 사기 성립',
        summary:
          '대법원 2025도11906 사건(대법원, 2026.02.27 선고)에서 법원은 안전결제 시스템을 우회하여 현금·계좌이체를 유도한 뒤 물품을 발송하지 않은 판매자에 대해 편취의사를 인정하고 사기죄 유죄로 판단했습니다. 플랫폼 밖 결제 유도 행위 자체가 기망수단으로 평가될 수 있음을 확인한 사례입니다.',
        takeaway:
          '에스크로 우회를 권유받은 시점이 바로 기망 착수 시점이라, 해당 대화 내역이 결정적 증거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '수취확인 눌렀는데 가짜 상품이면 환불 못 받나요?',
        answer:
          '<strong>확인 후에도 7~14일 이의신청 가능합니다.</strong> 플랫폼별 기한 내 분쟁 접수 + 개봉 영상 증거 필수.',
      },
      {
        question: '판매자가 "수수료 깎아준다"며 계좌이체 요구하면요?',
        answer:
          '<strong>100% 사기 의심 신호입니다.</strong> 거래 중단, 해당 대화 캡처해 플랫폼 신고.',
      },
      {
        question: '송장번호만 받고 택배 안 오면 어떻게 하나요?',
        answer:
          '<strong>택배사 앱에서 조회 + 가짜 송장이면 즉시 이의신청.</strong> 실제 발송 여부 확인.',
      },
      {
        question: '에스크로 결제도 고소 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 플랫폼 환불과 별개로 기망 의사 입증되면 형사 처벌 대상.',
      },
      {
        question: '상품 불일치와 미배송 중 어느 게 환불 쉬운가요?',
        answer:
          '<strong>미배송이 더 쉽습니다.</strong> 불일치는 실물 사진·개봉 영상으로 입증해야 함.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '중고거래 사기 고소장 5증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '기프티콘 재판매 사기 대응', href: '/guide/fraud/fraud-gift-card-resale-scam-response' },
      { label: '소액 사기 민사 절차', href: '/guide/fraud/fraud-small-amount-civil-procedure' },
      { label: '사기 민사·형사 순서', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 2. fraud / fake-contractor-home-repair-prepayment ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-contractor-home-repair-prepayment',
    keyword: '인테리어 선입금 사기',
    questionKeyword: '인테리어 계약금 줬는데 업자가 연락 두절됐어요',
    ctaKeyword: '인테리어 사기 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인테리어 선입금 사기 환급·고소 4단계 | 로앤가이드',
      description:
        '인테리어·리모델링 계약금 또는 중도금을 선입금했는데 업자가 잠수 탔을 때, 환급·건설업 등록 확인·고소까지 72시간 안에 지금 확인하세요.',
    },
    intro:
      '<p>"500만 원 먼저 주시면 다음 주부터 공사 시작합니다"라는 말에 계약금 입금 후 3주째 연락이 없으면 난감합니다. 인테리어 사기는 건설산업기본법 위반 + 형법 제347조 사기죄가 동시에 걸려 형량이 높지만, 업자가 사업자등록 없이 개인 계좌로만 받았다면 추적이 어렵죠. 계약서·견적서·공사업 등록증 3가지만 확보하면 회수 가능성이 크게 올라갑니다.</p>',
    sections: [
      {
        title: '피해 의심 신호 — 선입금 후 3단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">계약 후 7일 이내 아래 5가지 중 2개 이상 해당되면 즉시 대응.</strong></p>\n<ul>\n<li><strong>연락 지연</strong> — 전화·문자 48시간 이상 응답 없음.</li>\n<li><strong>공사 일정 변경 반복</strong> — 핑계 3회 이상, "자재 수급 문제"·"인력 문제".</li>\n<li><strong>건설업 등록증 미제출</strong> — 1,500만 원 이상 공사는 건설업 등록 필수.</li>\n<li><strong>개인 계좌 입금 요구</strong> — 사업자 계좌가 아닌 개인 명의로만 수금.</li>\n<li><strong>현장 미방문</strong> — 계약 후 실측·사전 방문 없이 착공 예고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 건산법상 1,500만 원 이상 공사는 건설업 등록자만 수주 가능, 무등록은 형사처벌 대상.</blockquote>',
      },
      {
        title: '증거 확보·지급정지 — 72시간 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">계약서·견적서·입금증·카톡 대화가 핵심 증거, 72시간 내 전부 백업.</strong></p>\n<ul>\n<li><strong>계약서·견적서</strong> — 견적 구성·계약 조건·공기·해지 조항 확인.</li>\n<li><strong>입금 증명</strong> — 은행 앱 거래내역 PDF, 수취인 계좌 8자리 확인.</li>\n<li><strong>카톡·문자 백업</strong> — 대화방 나가기 전 전체 캡처·PDF 변환.</li>\n<li><strong>건설업체 등록정보</strong> — 키스콘(kiscon.net) 등록업체 조회, 건설업 번호 확인.</li>\n<li><strong>은행 지급정지</strong> — 송금 후 72시간 내 송금은행 고객센터 전기통신금융사기 신고.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 계약 해제 사유와 회수 경로를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '계약 해제·환급 청구 — 민사 경로',
        content:
          '<p><strong style="color:#1e3a5f">민법 제544조 이행지체 해제 + 제750조 손해배상, 내용증명으로 시작합니다.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 착공 지연·해제 통보·7일 이내 환급 요구, 우체국.</li>\n<li><strong>지급명령</strong> — 1,000만 원 이하 단순 청구, 인지대 5천 원, 3주 내 확정.</li>\n<li><strong>소액심판</strong> — 3,000만 원 이하, 1회 변론·2개월 내 판결.</li>\n<li><strong>건설분쟁조정</strong> — 국토부 건설분쟁조정위원회, 60일 무료 조정.</li>\n<li><strong>공제조합</strong> — 건설공제조합·전문건설공제조합, 등록업체라면 보증금 한도 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 건설업 등록업체면 공제조합 보증서(3천만~1억 원) 한도에서 선입금 환급 가능.</blockquote>',
      },
      {
        title: '형사 고소 — 사기죄 + 건산법 위반 병합',
        content:
          '<p><strong style="color:#1e3a5f">편취의사만 인정되면 사기죄, 무등록 공사면 건산법 제96조 5년 이하 징역.</strong></p>\n<ul>\n<li><strong>형법 제347조 사기</strong> — 편취의사 입증 시 10년 이하 징역 또는 2천만 원 벌금.</li>\n<li><strong>건산법 제96조</strong> — 건설업 등록 없이 1,500만 원 이상 공사 수주, 5년 이하.</li>\n<li><strong>필요 증거</strong> — 계약서·입금내역·공사 미착공 증빙·대화 캡처.</li>\n<li><strong>피해자 공동 고소</strong> — 동일 업자 피해자 3명 이상, 상습성 가중 적용.</li>\n<li><strong>배상명령</strong> — 형사 1심 변론종결 전 제출, 판결문 즉시 집행권원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "공사 진행 중 자금난"이라며 추가 송금 요구는 100% 재기망, 절대 응하지 말 것.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사 선금 편취와 편취의사 판단',
        summary:
          '대법원 2024도11686 사건(대법원, 2025.07.10 선고)에서 법원은 공사계약을 체결하고 선급금을 받은 후 공사를 이행할 의사나 능력 없이 자금을 개인 채무 변제에 사용한 사업자에 대해, 계약 당시부터 편취의사가 있었다고 보아 사기죄 유죄로 판단했습니다. 공사 진행 여부보다 계약 당시 자금·능력·의사 유무가 기준임을 확인한 사례입니다.',
        takeaway:
          '착공 지연이 아니라 "애초에 공사할 의사·능력 있었는지"가 사기 성립의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '1,500만 원 미만 공사도 건설업 등록 필요한가요?',
        answer:
          '<strong>아닙니다. 1,500만 원 이상이 기준이지만 무등록 업자는 사기 위험 높음.</strong>',
      },
      {
        question: '계약서 없이 구두 계약했는데 환급 가능한가요?',
        answer:
          '<strong>카톡·문자 대화만으로도 계약 성립 주장 가능합니다.</strong> 입금내역 + 견적서 사진 확보.',
      },
      {
        question: '공사 일부 진행됐어도 해제할 수 있나요?',
        answer:
          '<strong>이행지체·부실시공 시 해제 가능, 이미 진행분은 공제 후 환급.</strong>',
      },
      {
        question: '건설공제조합에 어떻게 청구하나요?',
        answer:
          '<strong>업체 등록번호 + 보증서 발급 여부 확인 후 조합에 청구 서류 접수.</strong>',
      },
      {
        question: '개인 집주인이 인테리어 업자 개인 계좌로 입금했으면요?',
        answer:
          '<strong>사업자 계좌 아니어도 사기죄 성립, 개인 재산 추적·민사 가능.</strong>',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 고소장 작성 5가지 증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '사기 신고 후 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 민사·형사 순서', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
      { label: '소비자분쟁조정 신청법', href: '/guide/fraud/consumer-dispute-mediation-apply' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 3. fraud / government-refund-phishing-variant ───
  {
    domain: 'fraud',
    slug: 'fraud-government-refund-phishing-variant',
    keyword: '국세환급 사칭 보이스피싱',
    questionKeyword: '국세청 환급 안내 문자 받고 앱 깔았는데 돈 빠져나갔어요',
    ctaKeyword: '환급 사칭 피싱 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '국세환급·지원금 사칭 피싱 회수 4단계 | 로앤가이드',
      description:
        '국세청·근로장려금·건강보험 환급 사칭 문자로 앱 설치·계좌이체 피해를 입었을 때, 지급정지·환급·고소까지 30분 안에 지금 확인하세요.',
    },
    intro:
      '<p>"[국세청] 종합소득세 환급 28만원, 아래 링크에서 수령"이라는 문자에 링크를 눌러 앱을 설치하면 휴대폰이 장악됩니다. 1시간 뒤 인터넷뱅킹·간편결제·마이너스통장까지 전부 털리죠. 전기통신금융사기 피해방지특별법상 지급정지·피해금 환급 절차가 마련되어 있지만, 30분~2시간 골든타임이 회수율을 좌우합니다. 정부기관은 절대 문자로 환급금을 지급하지 않습니다.</p>',
    sections: [
      {
        title: '즉시 대응 — 30분 골든타임 5가지',
        content:
          '<p><strong style="color:#1e3a5f">앱 설치·송금 직후 30분 이내 아래 5가지를 동시에 진행해야 회수율 70% 이상.</strong></p>\n<ul>\n<li><strong>은행 지급정지</strong> — 송금은행 24시간 콜센터(각 은행 해당 번호), "전기통신금융사기" 신고.</li>\n<li><strong>휴대폰 전원 차단</strong> — 원격조종 앱(애니데스크·팀뷰어) 차단, 비행기 모드 + 전원 끔.</li>\n<li><strong>112·118 신고</strong> — 경찰청 112, KISA 118, 자동 지급정지 연계.</li>\n<li><strong>금감원 1332</strong> — 24시간 신고, 피해구제 신청 안내.</li>\n<li><strong>악성앱 제거</strong> — 타기기에서 KISA 보호나라 점검, 의심 앱 전체 삭제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 문자 링크 클릭·앱 설치만으로 통장·인증서 전체 노출, 즉시 차단이 생명.</blockquote>',
      },
      {
        title: '피해금 환급 절차 — 통신사기피해환급법',
        content:
          '<p><strong style="color:#1e3a5f">지급정지 후 통신사기피해환급법으로 잔액 환급 신청, 2~4개월 소요됩니다.</strong></p>\n<ul>\n<li><strong>지급정지 신청</strong> — 송금 직후 해당 은행 콜센터, 자동 2개월 정지.</li>\n<li><strong>피해구제 신청서 제출</strong> — 지급정지 후 3영업일 내 경찰 신고확인서 첨부해 은행 제출.</li>\n<li><strong>채권소멸 공고</strong> — 2개월간 금감원 통합공시, 이의제기 없으면 소멸 확정.</li>\n<li><strong>환급금 지급</strong> — 계좌 잔액 한도 내 피해자별 안분 지급, 2~4개월 총 소요.</li>\n<li><strong>회수율</strong> — 즉시 신고 시 30~70%, 24시간 경과 시 10% 미만.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 피해금 환급 신청 절차와 회수 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이차 피해 차단 — 명의도용·추가 대출 방지',
        content:
          '<p><strong style="color:#1e3a5f">피해자 개인정보가 노출된 상태, 명의도용·추가 대출까지 차단해야 합니다.</strong></p>\n<ul>\n<li><strong>신용조회 차단</strong> — 올크레딧·나이스평가정보, 본인 신용조회 차단 신청.</li>\n<li><strong>주민등록증 재발급</strong> — 주민센터, 기존 번호 유지되지만 위변조 방지.</li>\n<li><strong>공인인증서 폐기</strong> — 전자서명인증사업자 홈페이지에서 즉시 폐기·재발급.</li>\n<li><strong>계정 비번 변경</strong> — 은행 앱·카카오·네이버 전체 2단계 인증 재설정.</li>\n<li><strong>개인정보노출사고 예방</strong> — 금융감독원 개인정보노출자 사고예방시스템 등록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피해자 이름으로 신규 대출·카드 발급 시도가 3~7일 내 발생하므로 즉시 차단.</blockquote>',
      },
      {
        title: '형사 고소 — 경찰청 보이스피싱 전담팀',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 사이버수사국·금감원 합동 전담팀이 수사하므로 전문성 확보됩니다.</strong></p>\n<ul>\n<li><strong>사이버범죄 신고</strong> — ecrm.police.go.kr 온라인 접수, 24시간 가능.</li>\n<li><strong>필요 증거</strong> — 문자 원본·링크 캡처·악성앱 스샷·거래내역·통화녹음.</li>\n<li><strong>대포통장 계좌주</strong> — 전자금융거래법 제6조 위반, 3년 이하 징역.</li>\n<li><strong>콜센터 총책</strong> — 특경법 조직사기 가중, 처벌 확정.</li>\n<li><strong>국제 공조</strong> — 중국·동남아 콜센터 다수, 인터폴 공조 수사 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "경찰·검찰·금감원 직원입니다"는 100% 사칭, 계좌이체 지시 절대 없음.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 대포통장 운영과 자금세탁 성립',
        summary:
          '대법원 2025도15768 사건(대법원, 2026.01.15 선고)에서 법원은 상품권업체를 운영하면서 보이스피싱·인터넷도박 조직의 의뢰에 따라 자금세탁을 해주고 수수료를 받은 행위에 대해 범죄수익은닉규제법 위반이 성립한다고 판시했습니다. 피해금 수취 계좌·세탁 운영자도 형사 처벌 대상임을 확인한 사례입니다.',
        takeaway:
          '피해금이 경유한 모든 계좌주·세탁업자가 처벌 대상이므로, 고소 시 관련 계좌 모두 추적 요청이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '문자 링크만 눌렀는데 피해 발생 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 자동 앱 설치·개인정보 유출형 악성링크 존재, 즉시 휴대폰 점검.',
      },
      {
        question: '이미 몇 시간 지났는데 지급정지 소용없나요?',
        answer:
          '<strong>가능성은 낮지만 시도해야 합니다.</strong> 피의자가 즉시 출금 못했을 수 있음.',
      },
      {
        question: '국세청이 진짜 환급금 보내는 방법은요?',
        answer:
          '<strong>홈택스 또는 본인 명의 계좌로 자동 이체, 문자 링크 클릭 요구 절대 없음.</strong>',
      },
      {
        question: '피해금 환급 신청하면 전액 돌아오나요?',
        answer:
          '<strong>잔액 비율 안분 환급입니다.</strong> 즉시 신고 시 30~70%, 지연 시 10% 미만.',
      },
      {
        question: '원격조종 앱 설치했으면 어떻게 하나요?',
        answer:
          '<strong>즉시 공인인증서 폐기 + 비번 전체 변경 + 악성앱 삭제 + 휴대폰 초기화 권장.</strong>',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 지급정지 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
      { label: '대출 수수료 선입금 사기', href: '/guide/fraud/fraud-loan-fee-advance-scam' },
      { label: '사기 고소장 작성 5가지 증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '사기 신고 후 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 4. fraud / accused-comprehensive-intent-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-accused-comprehensive-intent-defense',
    keyword: '사기 피의자 편취의사 방어',
    questionKeyword: '사기 고소당했는데 편취의사 없었다고 어떻게 입증하나요?',
    ctaKeyword: '사기 피의자 방어 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '사기 피의자 편취의사 방어 5단계 | 로앤가이드',
      description:
        '사기죄로 고소당해 수사 받을 때, 편취의사 부정·차용 사실 입증·무혐의·기소유예 전략을 조사 전에 지금 확인하세요.',
    },
    intro:
      '<p>친구에게 1,500만 원 빌렸다가 갚지 못해 사기 고소당하면 "돈 못 갚은 것뿐인데 형사처벌?"이라는 억울함이 큽니다. 사기 혐의를 받고 있다면 핵심 쟁점은 "빌릴 당시 갚을 의사·능력이 있었는가"입니다. 일부 변제 기록·소득 증빙·차용증만 잘 준비하면 민사 사안으로 분류되어 무혐의·기소유예 처분이 가능합니다. 경찰 조사 전 준비가 결정적입니다.</p>',
    sections: [
      {
        title: '편취의사 판단 기준 — 수사기관 4가지 체크',
        content:
          '<p><strong style="color:#1e3a5f">수사기관은 "돈 빌릴 당시" 네 가지 요소로 편취의사를 판단합니다.</strong></p>\n<ul>\n<li><strong>변제 능력</strong> — 당시 월소득·예금·부동산 등 자력 증빙.</li>\n<li><strong>사용 용도</strong> — 차용 목적과 실제 사용처 일치 여부.</li>\n<li><strong>일부 변제 이력</strong> — 이자·원금 일부라도 변제 기록 있으면 유리.</li>\n<li><strong>상환 의사 표시</strong> — "언제까지 갚겠다"는 문자·카톡 기록.</li>\n<li><strong>연락 지속</strong> — 잠수 타지 않고 상환 계획 논의 계속.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "못 갚은 것"은 민사, "처음부터 갚을 의사·능력 없이 빌린 것"이 사기. 경계는 증거.</blockquote>',
      },
      {
        title: '방어 증거 수집 — 조사 전 5가지',
        content:
          '<p><strong style="color:#1e3a5f">피해자 주장에 맞서 "정상 차용" 증거를 시간순으로 정리하세요.</strong></p>\n<ul>\n<li><strong>차용증·메모</strong> — 차용 목적·변제 기일 명시된 기록.</li>\n<li><strong>당시 소득·재산</strong> — 근로소득원천징수영수증·재직증명서·예금잔고증명서.</li>\n<li><strong>자금 사용 내역</strong> — 차용 직후 통장거래내역, 사용 목적과 일치 증빙.</li>\n<li><strong>일부 변제 영수증</strong> — 이자·원금 일부라도 송금 내역, 건수 많을수록 유리.</li>\n<li><strong>카톡·문자 대화</strong> — 연체 후에도 상환 논의 지속 대화.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 선임 전, AI가 편취의사 방어 전략과 무혐의 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '경찰 조사 대응 — 진술 5가지 원칙',
        content:
          '<p><strong style="color:#1e3a5f">변호인 동행 원칙, 진술 전 진술거부권 행사 후 준비된 서면으로 대응.</strong></p>\n<ul>\n<li><strong>진술거부권 확인</strong> — 형사소송법 제244조의3, 기억나지 않는 부분은 거부.</li>\n<li><strong>차용 당시 상황 구체화</strong> — 시기·금액·용도·상환 약속을 일관되게.</li>\n<li><strong>사용처 증빙 자발 제출</strong> — 통장거래내역·영수증 수사관에게 적극 제공.</li>\n<li><strong>피해자 측 주장 반박</strong> — "편취의사 있었다" 주장에 대한 서면 반박 준비.</li>\n<li><strong>변호인 조력</strong> — 초범·소액이면 사선·국선 모두 가능, 조서 확정 전 열람 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 1회차 조서가 가장 중요, 일관되지 않은 진술은 이후 편취의사 인정 근거가 됨.</blockquote>',
      },
      {
        title: '합의·처분 전략 — 검찰 단계',
        content:
          '<p><strong style="color:#1e3a5f">편취의사 방어 + 피해 변제·합의 병행 시 기소유예·무혐의 가능성 상승.</strong></p>\n<ul>\n<li><strong>일부 변제 계획 제시</strong> — 분할 상환 계획서·담보 설정, 피해자 처벌불원 유도.</li>\n<li><strong>처벌불원서</strong> — 합의금 + 공탁, 검사 기소유예 처분 참조.</li>\n<li><strong>무혐의 결정</strong> — 편취의사 부정 + 민사 쟁점이면 검사 각하 가능.</li>\n<li><strong>기소유예</strong> — 초범·반성·변제 노력 인정 시 불기소 처분.</li>\n<li><strong>약식기소 수용 여부</strong> — 벌금형 약식 시 정식재판 청구권 7일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서에 "편취의사 있었다" 문구 포함되면 추후 민사·형사 전부 불리, 문구 신중.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 편취의사 판단과 일부 변제의 의미',
        summary:
          '대법원 2025도13674 사건(대법원, 2026.03.06 선고)에서 법원은 편취의사 존부 판단에서 범행 이후 정황(일부 변제·추가 차용 여부)뿐 아니라 범행 당시의 재산상태·자금 사용처·변제 의사 표시를 종합적으로 고려해야 한다고 판시했습니다. 단순히 변제하지 못했다는 사정만으로 편취의사를 단정해서는 안 된다는 취지입니다.',
        takeaway:
          '수사·재판 단계에서 "빌릴 당시 상황"과 "일부 변제·상환 의사 유지" 증거가 결정적입니다.',
      },
    ],
    faq: [
      {
        question: '못 갚았다는 이유만으로 사기로 처벌받나요?',
        answer:
          '<strong>아닙니다.</strong> 차용 당시 편취의사·변제능력 부재가 입증되어야 사기 성립.',
      },
      {
        question: '일부 변제했는데도 사기로 기소될 수 있나요?',
        answer:
          '<strong>가능하지만 일부 변제는 강한 무혐의 증거입니다.</strong> 횟수·비율 증빙 필수.',
      },
      {
        question: '차용증 없으면 원칙적으로 불리한가요?',
        answer:
          '<strong>카톡·문자만으로도 차용 입증 가능, 차용 목적·기일 기록이 관건.</strong>',
      },
      {
        question: '변호인 없이 조사 가도 되나요?',
        answer:
          '<strong>가능하지만 1회차부터 변호인 동행 강력 권장.</strong> 조서 확정 후 번복 어려움.',
      },
      {
        question: '기소유예 받으면 전과 남나요?',
        answer:
          '<strong>기소유예는 불기소로 형식상 전과 아님.</strong> 단, 수사경력 자료 일부 남음.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피의자 조사 준비', href: '/guide/fraud/fraud-accused-investigation-preparation' },
      { label: '사기 합의 성공 전략', href: '/guide/fraud/fraud-settlement-success-strategy' },
      { label: '편취의사 입증 4기준', href: '/guide/fraud/fraud-intent-proof-4-criteria' },
      { label: '기소유예 요건과 절차', href: '/guide/fraud/fraud-suspended-prosecution-criteria' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 5. fraud / partial-repayment-settlement-reduction ───
  {
    domain: 'fraud',
    slug: 'fraud-partial-repayment-settlement-reduction',
    keyword: '사기 일부 변제 합의 감형',
    questionKeyword: '사기 피해금 일부만 갚고 합의하면 감형되나요?',
    ctaKeyword: '사기 합의 감형 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '사기 일부 변제·합의로 감형받는 법 5단계 | 로앤가이드',
      description:
        '사기 혐의로 수사·재판 받는 피의자가 피해금 일부 변제·합의·공탁으로 감형받는 전략과 순서를 지금 확인하세요.',
    },
    intro:
      '<p>사기로 고소당해 전액 변제가 불가능할 때 "일부라도 갚고 합의하면 감형되나?"가 가장 큰 고민입니다. 혐의를 받고 있다면, 일부 변제 + 처벌불원서 + 공탁 조합이 검찰 기소유예·법원 집행유예로 연결되는 핵심 경로입니다. 다만 합의서 문구·공탁 시점·납입 방식에 따라 효과가 크게 달라지니 전문가 자문 후 진행하는 것이 안전합니다.</p>',
    sections: [
      {
        title: '감형 판단 기준 — 법원 양형 5요소',
        content:
          '<p><strong style="color:#1e3a5f">법원 양형위원회 사기범죄 기준표 기준, 합의·변제 여부가 감경 요인입니다.</strong></p>\n<ul>\n<li><strong>피해 회복 정도</strong> — 전액 변제 시 강한 감경, 50% 이상 일부 변제도 참작.</li>\n<li><strong>처벌불원 여부</strong> — 피해자 합의·고소 취하 시 감경, 필수는 아님.</li>\n<li><strong>진지한 반성</strong> — 반성문·자수·자진 변제 시 가중 감경.</li>\n<li><strong>초범·전과</strong> — 동종 전과 없으면 감경, 집행유예 요건 충족.</li>\n<li><strong>피해 규모</strong> — 1억 원 미만 일반 사기, 5억 원 이상 특경법 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사기죄 감형 1순위는 "피해 회복", 일부 변제라도 가능한 한 기록 남기기.</blockquote>',
      },
      {
        title: '일부 변제 전략 — 분할 납입 구조화',
        content:
          '<p><strong style="color:#1e3a5f">전액 불가능해도 분할 납입 + 공정증서 + 담보 설정 조합이 가장 효과적.</strong></p>\n<ul>\n<li><strong>최소 20~30% 즉시 변제</strong> — 성의 표시로 1차 변제, 이후 분할 약속.</li>\n<li><strong>공정증서 작성</strong> — 변제 약속을 공증, 불이행 시 즉시 강제집행 가능.</li>\n<li><strong>부동산 담보</strong> — 근저당권 설정, 피해자 회수 확실성 보장.</li>\n<li><strong>보증인 추가</strong> — 가족·친척 보증, 피해자 안심 유도.</li>\n<li><strong>분할 기간</strong> — 6~24개월이 실무상 합의 수용률 높음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 일부 변제·합의 전략과 감형 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합의 불성립 시 — 공탁 활용법',
        content:
          '<p><strong style="color:#1e3a5f">피해자가 합의 거부해도 공탁으로 양형 감경 인정받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>형사공탁 특례</strong> — 2023년 개정 형법 제43조의2, 피해자 주소 몰라도 가능.</li>\n<li><strong>공탁 시점</strong> — 1심 변론종결 전, 빠를수록 감경 효과 큼.</li>\n<li><strong>공탁 금액</strong> — 피해금 전액 또는 명시적 일부, 잔액은 이후 추가 가능.</li>\n<li><strong>공탁서 사본</strong> — 재판부 제출, 피해자 수령 여부 무관 감경 자료.</li>\n<li><strong>피해자 수령 시</strong> — 사실상 합의 완료, 처벌불원서 별도 요청 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의 결렬 시 즉시 공탁, 재판부 "피고인 성의 표시"로 인정.</blockquote>',
      },
      {
        title: '반성문·탄원서 — 양형 감경 보조자료',
        content:
          '<p><strong style="color:#1e3a5f">반성문·탄원서는 법원 인정 감경 요소, 진정성 있는 서면이 핵심.</strong></p>\n<ul>\n<li><strong>피고인 반성문</strong> — 재판부 제출, 범행 경위·반성·재발방지 포함.</li>\n<li><strong>가족 탄원서</strong> — 부양 가족·근로자 상황 강조, 3~5명 수준.</li>\n<li><strong>직장 진술서</strong> — 근무 성실도·재직 필요성 증빙.</li>\n<li><strong>자원봉사·기부 내역</strong> — 선고 전 사회 환원 노력 증빙.</li>\n<li><strong>심리상담·치료 이력</strong> — 반성·재발방지 의지 입증 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형식적 반성문은 효과 없음, 구체적 피해 회복 노력과 함께 제출해야 감경.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해 변제와 양형 감경 원칙',
        summary:
          '대법원 2023도6106 사건(대법원, 2023.08.31 선고)에서 법원은 사기죄 양형에서 피해 회복 정도·반성·합의 여부를 종합 고려해 집행유예를 선고한 원심을 수긍하면서도, 형식적 합의가 아니라 실질적 피해 회복 노력이 있어야 감경 사유로 평가된다는 취지를 확인했습니다.',
        takeaway:
          '"일부라도 실제로 변제"한 사실이 있어야 감형 효과가 큽니다. 단순 약속·반성문만으로는 부족합니다.',
      },
    ],
    faq: [
      {
        question: '피해금 20%만 갚아도 합의 인정되나요?',
        answer:
          '<strong>피해자 수용 시 가능합니다.</strong> 단, 나머지 분할 계획·담보 증빙 필수.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 해야 하나요?',
        answer:
          '<strong>형사공탁으로 양형 감경 주장 가능합니다.</strong> 1심 변론종결 전 공탁.',
      },
      {
        question: '공탁하면 원칙적으로 집행유예 받나요?',
        answer:
          '<strong>절대적이지 않습니다.</strong> 초범·반성·가족상황 등 종합 고려 필요.',
      },
      {
        question: '반성문은 직접 써야 효과 있나요?',
        answer:
          '<strong>본인이 직접 작성해야 진정성 인정.</strong> 변호사가 형식만 검토.',
      },
      {
        question: '합의서에 "민사 포기" 문구 넣어도 되나요?',
        answer:
          '<strong>추후 민사 방어에 유리, 다만 피해자가 거부 가능성 높음.</strong>',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피의자 방어 전략', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '형사공탁 신청 절차', href: '/guide/fraud/fraud-criminal-deposit-procedure' },
      { label: '합의서 작성 주의사항', href: '/guide/fraud/fraud-settlement-agreement-cautions' },
      { label: '기소유예 요건과 절차', href: '/guide/fraud/fraud-suspended-prosecution-criteria' },
      { label: '사기 양형 감경 요소', href: '/guide/fraud/fraud-sentencing-mitigation-factors' },
    ],
  },

  // ─── 6. traffic-accident / commute-work-injury-double-claim ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-commute-work-injury-double-claim',
    keyword: '출퇴근 교통사고 산재 자동차보험 동시청구',
    questionKeyword: '출퇴근 중 교통사고 났는데 산재랑 자동차보험 둘 다 받을 수 있나요?',
    ctaKeyword: '출퇴근 산재 이중청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출퇴근 교통사고 산재·자동차보험 동시청구 | 로앤가이드',
      description:
        '출퇴근 중 교통사고로 다쳤을 때 산재보험과 자동차보험 양쪽 청구 순서·중복조정 원칙을 지금 확인하세요.',
    },
    intro:
      '<p>아침에 출근하던 길에 뒤차가 추돌해 전치 4주 진단을 받으면 "산재도 되나? 자동차보험은 어떻게 하지?" 혼란스럽습니다. 2018년 1월부터 출퇴근 재해도 산재 인정 범위에 들어왔고, 상대방 가해 차량 보험과 동시 청구도 가능합니다. 다만 중복 보상 금지 원칙이 있어 치료비·휴업급여는 한쪽만 받는 등 조정이 필요합니다.</p>',
    sections: [
      {
        title: '출퇴근 산재 인정 요건 — 5가지',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제37조 제1항 제3호, 출퇴근 중 사고도 산재 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>통상적 경로·방법</strong> — 평소 이용하는 경로·교통수단 이용 중 사고.</li>\n<li><strong>사적 일탈 없음</strong> — 출퇴근 목적 외 장소·시간 이탈은 불인정(병원·은행 등 일상용무 제외).</li>\n<li><strong>근로자 지위 유지</strong> — 재택·원격근무자도 인정, 일용·파트타임 포함.</li>\n<li><strong>사업주 지배관계 불요</strong> — 개인 차량·대중교통·도보 모두 해당.</li>\n<li><strong>공상처리와 구분</strong> — 회사 측 공상은 민사, 산재는 근로복지공단 공적보험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출퇴근 산재는 근로자의 권리, 회사 눈치 보지 말고 근로복지공단에 직접 신청.</blockquote>',
      },
      {
        title: '동시청구 절차 — 산재 + 자동차보험 5단계',
        content:
          '<p><strong style="color:#1e3a5f">두 보험 모두 신청하되, 중복 보상 항목은 한쪽만 수령합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 교통사고 신고</strong> — 112·경찰 신고, 교통사고사실확인원 발급.</li>\n<li><strong>2단계 — 산재 신청</strong> — 재해일로부터 3년 이내, 산업재해보상보험 요양급여 신청서.</li>\n<li><strong>3단계 — 자동차보험 청구</strong> — 가해자 보험사 대인배상 청구, 의무보험 Ⅰ·임의보험 Ⅱ.</li>\n<li><strong>4단계 — 중복조정</strong> — 치료비·휴업손해는 한쪽만, 위자료는 자동차보험에서만.</li>\n<li><strong>5단계 — 근로복지공단 구상</strong> — 공단이 가해자 보험사에 구상권 행사.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 산재·자동차보험 중복조정과 회수 극대화 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '어느 쪽이 유리한가 — 항목별 비교',
        content:
          '<p><strong style="color:#1e3a5f">산재·자동차보험은 보상 항목이 다르므로 항목별 유리한 쪽 선택이 관건.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 산재는 비급여 포함 전액, 자동차보험은 대인Ⅰ 한도 3천만 원.</li>\n<li><strong>휴업급여</strong> — 산재는 평균임금 70%, 자동차보험은 실수입액 85%.</li>\n<li><strong>장해급여</strong> — 산재는 평균임금 1~1,474일분, 자동차보험은 후유장해 위자료 별도.</li>\n<li><strong>위자료</strong> — 산재 없음, 자동차보험만 지급.</li>\n<li><strong>유족보상</strong> — 산재 유족연금, 자동차보험 사망위자료 + 일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중증·장기치료는 산재 우선(비급여 포함), 위자료·후유장해는 자동차보험 우선.</blockquote>',
      },
      {
        title: '가해자 없는 경우 — 본인 100% 과실·뺑소니',
        content:
          '<p><strong style="color:#1e3a5f">가해자 불명·본인 과실이어도 산재는 가능, 자동차보험은 제한됩니다.</strong></p>\n<ul>\n<li><strong>뺑소니 사고</strong> — 정부보장사업(자동차손해배상 보장사업)으로 대인 보상 가능.</li>\n<li><strong>본인 100% 과실</strong> — 산재는 인정, 자동차보험은 본인 담보(자기신체사고·자기차량손해) 청구.</li>\n<li><strong>무보험 가해자</strong> — 정부보장사업 + 산재 동시 청구 가능.</li>\n<li><strong>단독 사고</strong> — 빙판·고장 등 단독사고도 산재 요건 충족 시 인정.</li>\n<li><strong>도보 출퇴근 사고</strong> — 빙판 미끄러짐·넘어짐도 산재 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 산재 신청은 재해일로부터 3년, 자동차보험은 사고일로부터 3년 이내.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 출퇴근 재해 인정 범위',
        summary:
          '대법원 2021다220628 사건(대법원, 2024.04.25 선고)에서 법원은 출퇴근 중 발생한 교통사고에 대해 산업재해보상보험법상 업무상 재해로 인정한 후 근로복지공단이 가해자 측 자동차보험사에 구상권을 행사할 수 있다고 판시했습니다. 출퇴근 산재와 자동차보험 사이의 구상 관계를 확인한 사례입니다.',
        takeaway:
          '출퇴근 교통사고 피해자는 산재 청구 후에도 자동차보험에서 보상 항목별 추가 청구가 가능하다는 구조가 정리되어 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 산재 신청 막으면 어떻게 해야 하나요?',
        answer:
          '<strong>근로자가 직접 근로복지공단에 신청 가능.</strong> 회사 날인·동의 불필요.',
      },
      {
        question: '자동차보험 치료비 받고도 산재 신청 가능한가요?',
        answer:
          '<strong>가능하지만 중복 보상 항목은 조정됩니다.</strong> 공단이 보험사에 구상.',
      },
      {
        question: '퇴근 후 친구 만나러 다른 길로 간 경우도 산재인가요?',
        answer:
          '<strong>사적 일탈로 불인정될 수 있습니다.</strong> 통상 경로 이탈 시점부터 제외.',
      },
      {
        question: '재택근무자도 출퇴근 산재 가능한가요?',
        answer:
          '<strong>출근·퇴근 개념이 있으면 가능, 가끔 사무실 가는 경우도 포함.</strong>',
      },
      {
        question: '뺑소니 피해자는 어떻게 청구하나요?',
        answer:
          '<strong>자동차손해배상 보장사업으로 대인 2억 원 한도 보상 + 산재 동시 가능.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '산재 신청 절차와 기한', href: '/guide/traffic-accident/workers-comp-application-procedure' },
      { label: '자동차보험 대인배상 한도', href: '/guide/traffic-accident/auto-insurance-personal-limit' },
      { label: '뺑소니 정부보장사업 신청', href: '/guide/traffic-accident/hit-and-run-gov-compensation' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/settlement-calculation-guide' },
      { label: '후유장해 진단 절차', href: '/guide/traffic-accident/permanent-disability-diagnosis-procedure' },
    ],
  },

  // ─── 7. traffic-accident / child-carpool-driver-liability ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-child-carpool-driver-liability',
    keyword: '카풀 운전자 자녀 부상 배상책임',
    questionKeyword: '카풀로 태운 이웃 아이가 사고로 다쳤는데 제가 배상해야 하나요?',
    ctaKeyword: '카풀 배상책임 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '카풀 이웃 아이 부상 배상책임 5기준 | 로앤가이드',
      description:
        '카풀·라이드셰어로 태운 타인·자녀가 사고로 다쳤을 때 운전자 배상책임 범위, 자동차보험 적용, 무상동승 판례까지 지금 확인하세요.',
    },
    intro:
      '<p>같은 아파트 이웃 아이까지 카풀로 학원을 데려다주다가 가벼운 접촉 사고가 났는데, 이웃 아이만 목을 삐었다는 진단을 받으면 난감합니다. "호의로 태운 건데 배상책임이 있을까?" 궁금하죠. 무상동승자의 호의동승 감액 법리, 대인배상 적용, 주의의무 판단까지 5가지 기준을 알아두면 민사·형사 모두 정리됩니다. 자녀·이웃 카풀은 가장 분쟁이 잦은 유형입니다.</p>',
    sections: [
      {
        title: '배상책임 5기준 — 무상동승 법리',
        content:
          '<p><strong style="color:#1e3a5f">무상동승자도 기본 배상받지만 호의동승 감액 법리로 10~30% 감경될 수 있습니다.</strong></p>\n<ul>\n<li><strong>운전자 과실 있으면 배상</strong> — 단독 사고든 상대 과실이든 운전자 과실 비율만큼 책임.</li>\n<li><strong>호의동승 감액</strong> — 대법원 판례, 무상·호의로 태운 경우 10~30% 감액 관행.</li>\n<li><strong>어린이·노약자 감액 제한</strong> — 사회통념상 무상 감액 인정 어려움.</li>\n<li><strong>자녀·배우자 태운 경우</strong> — 가족관계는 호의동승 감액 거의 없음.</li>\n<li><strong>보험 적용</strong> — 대인배상Ⅰ(무조건) + Ⅱ(임의) 한도 내 보상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무상이어도 "내 차 타고 있었다"면 대인배상 적용, 보험 들었으면 개인 변제 거의 없음.</blockquote>',
      },
      {
        title: '보험 적용 범위 — 카풀 vs 영업용',
        content:
          '<p><strong style="color:#1e3a5f">카풀은 개인용 자동차보험 적용, 대가 수수 시 영업용 전환 가능성.</strong></p>\n<ul>\n<li><strong>완전 무상</strong> — 개인용 대인·대물 모두 적용, 보험금 지급 정상.</li>\n<li><strong>기름값 N분의1</strong> — 통상 무상으로 인정, 보험 적용.</li>\n<li><strong>정기적 유료 카풀</strong> — 영업용으로 간주될 수 있어 보험사 보상 거절 가능.</li>\n<li><strong>카카오T·타다 등</strong> — 플랫폼 가입 영업용 보험 별도, 개인 보험 불가.</li>\n<li><strong>약관 확인</strong> — 개인용 약관 "대가 수수 목적 수송" 면책 조항 체크.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 카풀 배상책임 범위와 보험 적용을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사책임 — 12대 중과실 여부',
        content:
          '<p><strong style="color:#1e3a5f">카풀 중 중과실 사고는 합의 여부와 무관하게 형사 입건됩니다.</strong></p>\n<ul>\n<li><strong>12대 중과실 해당</strong> — 신호위반·중앙선침범·과속 20km/h 등, 합의 불문 형사.</li>\n<li><strong>어린이 안전띠·카시트 미착용</strong> — 도로교통법 제50조, 과태료 6만 원 + 과실 가중.</li>\n<li><strong>음주·무면허</strong> — 카풀 유무 무관 가중처벌.</li>\n<li><strong>종합보험 가입</strong> — 비중과실·비중상이면 공소권 없음(교특법 제4조).</li>\n<li><strong>피해자 처벌불원서</strong> — 형사 감경 요소, 합의금 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이 카풀은 가능한 한 카시트·안전띠 착용 확인, 미착용 사고는 과실 크게 증가.</blockquote>',
      },
      {
        title: '부모 사이 합의 — 카풀 사고 후 처리',
        content:
          '<p><strong style="color:#1e3a5f">이웃·지인 관계 유지 위해 보험 처리 + 추가 위로금 구조가 일반적.</strong></p>\n<ul>\n<li><strong>보험 처리 우선</strong> — 보험사 대인·대물 전액 지급, 개인 부담 최소화.</li>\n<li><strong>병원비 선지급</strong> — 보험 처리 전 본인 부담분은 먼저 지원, 관계 유지.</li>\n<li><strong>위로금 별도</strong> — 보험 처리와 별개로 50~100만 원 선물·위로금 관행.</li>\n<li><strong>합의서 작성</strong> — 추후 분쟁 방지, 위자료 포함 전액 종결 문구 명시.</li>\n<li><strong>후유장해 대비</strong> — 어린이 사고는 6개월 관찰 후 합의, 조기 종결 위험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서에 "추후 어떠한 청구도 하지 않음" 문구 넣으면 후유장해 추가 청구 불가.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 무상동승자 배상과 호의동승 감액',
        summary:
          '대법원 2025다210853 사건(대법원, 2026.02.27 선고)에서 법원은 호의동승으로 차량에 탑승한 피해자가 사고로 부상을 입은 경우, 운전자 과실이 인정되면 원칙적으로 손해 전부를 배상해야 하며, 호의동승을 이유로 한 감액은 구체적 사정(운행 이익·동승 경위)을 종합 고려해 제한적으로만 인정된다고 판시했습니다.',
        takeaway:
          '카풀 운전자 과실이 있으면 기본적으로 전액 배상 책임, 감액은 예외적·부분적으로만 적용됩니다.',
      },
    ],
    faq: [
      {
        question: '이웃 아이 카풀 중 사고 나면 제 보험으로 처리되나요?',
        answer:
          '<strong>개인용 대인배상으로 처리됩니다.</strong> 무상·호의 카풀은 면책 대상 아님.',
      },
      {
        question: '기름값 나눠 받는 카풀도 보험 적용되나요?',
        answer:
          '<strong>통상 무상으로 인정, 적용됩니다.</strong> 정기적 영리 목적이면 면책 가능성.',
      },
      {
        question: '내 자녀와 같이 탄 친구만 다치면 어떻게 되나요?',
        answer:
          '<strong>친구 측에 대인배상, 본인 자녀는 자동차상해 담보 필요.</strong>',
      },
      {
        question: '카시트 안 했는데 사고 나면 배상 줄어드나요?',
        answer:
          '<strong>부모 측 과실 10~20% 추가 인정 가능, 보상액 감액될 수 있음.</strong>',
      },
      {
        question: '이웃과 합의 없이 보험만 처리해도 되나요?',
        answer:
          '<strong>보험 처리만으로 법적 종결 가능, 관계 유지 위해 위로금 관행.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '자동차보험 대인배상 한도', href: '/guide/traffic-accident/auto-insurance-personal-limit' },
      { label: '12대 중과실 처벌 정리', href: '/guide/traffic-accident/12-serious-negligence-types' },
      { label: '어린이 교통사고 합의 기준', href: '/guide/traffic-accident/child-injury-settlement-standard' },
      { label: '무상동승 호의동승 감액 판례', href: '/guide/traffic-accident/gratuitous-passenger-reduction' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/settlement-calculation-guide' },
    ],
  },

  // ─── 8. traffic-accident / taxi-rideshare-passenger-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-taxi-rideshare-passenger-injury',
    keyword: '택시 승차공유 승객 부상 보험청구',
    questionKeyword: '택시 탔다가 다쳤는데 보험 어떻게 청구하나요?',
    ctaKeyword: '택시 사고 보험청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '택시·카카오T 승객 부상 보험청구 4단계 | 로앤가이드',
      description:
        '택시·카카오T·우티 탑승 중 교통사고로 다쳤을 때 운송사 공제·대인배상·자기신체담보 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>카카오T로 부른 택시를 타고 가다 뒤차 추돌로 전치 3주 진단을 받으면 "택시 보험인지, 상대방 보험인지, 제 보험인지" 헷갈립니다. 택시는 전국택시운송사업조합 공제 + 상대방 자동차보험 + 승객 개인 보험 3가지가 동시에 엮여 있어, 청구 순서에 따라 회수액이 크게 달라집니다. 대부분 승객은 "택시 공제"를 1순위로 청구하는 것이 유리합니다.</p>',
    sections: [
      {
        title: '택시 사고 보험 구조 — 4가지 보장',
        content:
          '<p><strong style="color:#1e3a5f">택시 탑승 중 사고는 승객 과실이 거의 없으므로 보상 경로가 풍부합니다.</strong></p>\n<ul>\n<li><strong>택시 공제</strong> — 전국택시운송사업조합 공제, 대인Ⅰ·Ⅱ + 자손 보장.</li>\n<li><strong>상대방 보험</strong> — 가해 차량 대인배상으로 승객 보상.</li>\n<li><strong>승객 개인 보험</strong> — 실손보험·운전자보험·자동차보험(다른 차량 탑승 중).</li>\n<li><strong>카카오T·우티 플랫폼</strong> — 플랫폼 자체 안전보험, 한도 별도.</li>\n<li><strong>산재 가능성</strong> — 출퇴근·업무 중 택시 이용은 산재 추가 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 택시는 승객 과실 0% 원칙이므로 4가지 보험 중 유리한 쪽부터 청구 가능.</blockquote>',
      },
      {
        title: '현장 대응 — 사고 직후 5가지',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 5가지를 빠짐없이 확보해야 보험 청구가 원활합니다.</strong></p>\n<ul>\n<li><strong>112 경찰 신고</strong> — 인명피해 있으면 필수, 교통사고사실확인원 근거.</li>\n<li><strong>택시 번호·차량번호</strong> — 차량 전면·측면·번호판 사진, 택시회사명 확인.</li>\n<li><strong>기사 연락처·면허증</strong> — 기사 개인 연락처, 법인·개인택시 구분.</li>\n<li><strong>플랫폼 기록</strong> — 카카오T·우티 앱 탑승 기록 캡처, 자동 저장됨.</li>\n<li><strong>병원 즉시 이동</strong> — 증상 없어도 24시간 내 병원, 교통사고 초진기록.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 택시 사고 보험 청구 순서와 회수 최대화 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공제조합 청구 절차 — 4단계',
        content:
          '<p><strong style="color:#1e3a5f">택시 공제조합 청구가 1순위, 상대방 보험은 구상 관계로 처리됩니다.</strong></p>\n<ul>\n<li><strong>1단계 — 공제 접수</strong> — 전국택시공제조합 콜센터, 차량번호로 조회 가능.</li>\n<li><strong>2단계 — 진단서·영수증 제출</strong> — 초진 차트·입퇴원 확인서·치료비 영수증.</li>\n<li><strong>3단계 — 휴업손해·위자료 산정</strong> — 일평균 소득 × 치료기간 × 85%.</li>\n<li><strong>4단계 — 합의·수령</strong> — 공제 제시액 거부 시 협상, 필요 시 변호사 선임.</li>\n<li><strong>5단계 — 후유장해 추가</strong> — 치료 종결 6개월 후 장해진단, 후유장해 보상 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 택시 공제는 일반 자동차보험보다 합의금 기준 엄격, 전문 변호사 자문 권장.</blockquote>',
      },
      {
        title: '카카오T·우티 플랫폼 사고 — 추가 보장',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼 호출 택시는 플랫폼 안전보험 추가 보장이 있을 수 있습니다.</strong></p>\n<ul>\n<li><strong>카카오T 블루·블랙</strong> — 플랫폼 안전보험, 의료비·위로금 추가.</li>\n<li><strong>우티·타다</strong> — 플랫폼 약관에 따라 대인 한도 확대 또는 위로금.</li>\n<li><strong>앱 내 사고신고</strong> — 플랫폼 앱 내 신고 버튼, 자동 기록.</li>\n<li><strong>약관 확인</strong> — 플랫폼 이용약관 사고 보상 조항 체크.</li>\n<li><strong>택시 공제와 중복</strong> — 플랫폼 보험은 대부분 추가 보장, 공제와 중복 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 플랫폼 보험 약관은 수시 변경되므로 사고 시점 기준 확인 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업용 차량 승객 보호와 공제 책임',
        summary:
          '대법원 2023다297141 사건(대법원, 2025.01.09 선고)에서 법원은 택시·버스 등 영업용 차량의 승객에 대해 운송인의 주의의무 수준을 높게 보아, 경미한 과실에도 공제조합·운송회사의 배상책임을 폭넓게 인정해야 한다고 판시했습니다. 승객은 과실 0%로 보는 실무가 확립된 사례입니다.',
        takeaway:
          '택시 승객은 운전자 과실이 일부여도 운송사 책임이 확대 적용되므로 공제조합에 적극적으로 청구하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '택시 기사 과실 100%가 아니어도 전액 보상받나요?',
        answer:
          '<strong>승객은 과실 0%로 간주, 공제·상대 보험에서 전액 보상.</strong>',
      },
      {
        question: '카카오T 블루 사고도 플랫폼이 책임지나요?',
        answer:
          '<strong>플랫폼 안전보험 추가 보장 있음, 앱 내 사고신고 권장.</strong>',
      },
      {
        question: '택시 공제와 상대방 보험 둘 다 받으면 중복인가요?',
        answer:
          '<strong>치료비·휴업은 중복 불가, 실제로는 공제에서 일원화 처리.</strong>',
      },
      {
        question: '개인택시와 법인택시 청구가 다른가요?',
        answer:
          '<strong>둘 다 전국택시공제조합 소속, 절차 거의 동일.</strong>',
      },
      {
        question: '휴업손해는 얼마나 받을 수 있나요?',
        answer:
          '<strong>일평균 소득 × 치료기간 × 85%, 최근 3개월 근로소득원천징수 기준.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '자동차보험 대인배상 한도', href: '/guide/traffic-accident/auto-insurance-personal-limit' },
      { label: '교통사고 휴업손해 산정법', href: '/guide/traffic-accident/lost-wages-calculation' },
      { label: '후유장해 진단 절차', href: '/guide/traffic-accident/permanent-disability-diagnosis-procedure' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/settlement-calculation-guide' },
      { label: '출퇴근 산재 동시청구', href: '/guide/traffic-accident/traffic-accident-commute-work-injury-double-claim' },
    ],
  },

  // ─── 9. traffic-accident / dashcam-data-recovery-insurance-dispute ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dashcam-data-recovery-insurance-dispute',
    keyword: '블랙박스 데이터 복구 사고 입증',
    questionKeyword: '사고 직후 블랙박스가 저장 안 됐는데 복구해서 과실 입증할 수 있나요?',
    ctaKeyword: '블랙박스 복구 입증 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '블랙박스 데이터 복구·사고 입증 4단계 | 로앤가이드',
      description:
        '블랙박스 손상·삭제·충격 종료로 저장되지 않은 경우 데이터 복구·과실 입증·보험 분쟁 전략을 지금 확인하세요.',
    },
    intro:
      '<p>사고 후 "블랙박스 영상 주세요" 요청받았는데 SD카드가 손상되어 재생 불가, 또는 충격으로 블랙박스가 꺼진 상태로 저장되지 않은 경험은 의외로 흔합니다. 영상 없이는 과실비율 협상이 불리해지지만, 전문 데이터 복구 + CCTV·목격자 확보로 입증 보완이 가능합니다. 경찰청 교통사고분석보고서도 강력한 보조 증거입니다.</p>',
    sections: [
      {
        title: '블랙박스 데이터 상태 — 4가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">SD카드·본체 상태에 따라 복구 가능성·비용이 달라집니다.</strong></p>\n<ul>\n<li><strong>SD카드 정상·삭제</strong> — 삭제 파일 복구 가능성 80% 이상, 비용 10~30만 원.</li>\n<li><strong>SD카드 물리 손상</strong> — 기판 손상·물 침수, 전문 업체 50~200만 원.</li>\n<li><strong>본체 충격 종료</strong> — 사고 순간 전원 차단, SD카드 별도 복구.</li>\n<li><strong>주차녹화 미설정</strong> — 주차 중 사고 영상 없음, CCTV·목격자 의존.</li>\n<li><strong>루프녹화 덮어쓰기</strong> — 오래된 사고는 이미 덮어씌워짐, 신속 확보 중요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사고 직후 블랙박스 SD카드 바로 뽑아 보관, 계속 쓰면 덮어쓰기로 영상 사라짐.</blockquote>',
      },
      {
        title: '전문 복구 업체 선택 — 5가지 체크',
        content:
          '<p><strong style="color:#1e3a5f">블랙박스 영상 복구는 일반 USB 복구와 달라 전문 업체 필요합니다.</strong></p>\n<ul>\n<li><strong>포렌식 인증 업체</strong> — 경찰·검찰 협력 포렌식 업체, 법원 증거 인정률 높음.</li>\n<li><strong>견적 후 작업</strong> — 무료 진단 + 복구 성공 시에만 과금 업체 우선.</li>\n<li><strong>법정 증거 보존</strong> — 복구 과정 녹화·보고서 작성, 법정 제출용.</li>\n<li><strong>비용 범위</strong> — 10~200만 원, 손상 정도에 따라 차등.</li>\n<li><strong>경찰 공식 의뢰</strong> — 형사 사건 시 경찰 포렌식 센터 무료 분석.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 블랙박스 없는 사고 입증 전략과 증거 보완 방법을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대체 증거 수집 — 5가지 보완',
        content:
          '<p><strong style="color:#1e3a5f">블랙박스 복구 실패해도 5가지 대체 증거로 과실 입증 가능합니다.</strong></p>\n<ul>\n<li><strong>주변 CCTV</strong> — 사고 후 7일 내 관할 관청·건물주에 보존 요청.</li>\n<li><strong>상대 차량 블랙박스</strong> — 상대방 보험사 통해 영상 요청, 거부 시 법원 문서제출명령.</li>\n<li><strong>목격자 진술서</strong> — 현장 행인·운전자 연락처, 인적사항 + 진술서 확보.</li>\n<li><strong>교통사고분석보고서</strong> — 경찰청 교통사고분석센터, 전문가 감정.</li>\n<li><strong>차량 손상 감정</strong> — 충돌 방향·속도 분석으로 과실 역추정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 대부분 7~30일 후 자동 삭제, 사고 직후 즉시 보존 요청이 핵심.</blockquote>',
      },
      {
        title: '보험사 분쟁 대응 — 영상 부재 시',
        content:
          '<p><strong style="color:#1e3a5f">영상 없으면 보험사가 과실 불리하게 산정하므로 적극 이의제기 필요.</strong></p>\n<ul>\n<li><strong>과실비율분쟁심의위원회</strong> — 손해보험협회 산하, 무료 심의 30일.</li>\n<li><strong>금감원 분쟁조정</strong> — 1332 신청, 60일 내 결정.</li>\n<li><strong>민사 소송</strong> — 심의 결과 불복 시 과실비율 청구, 소액심판 가능.</li>\n<li><strong>변호사 자문</strong> — 중상·고액 피해 시 필수, 성공보수 10~20%.</li>\n<li><strong>자동차손해배상보장법</strong> — 운행자 책임 추정, 상대 과실 0% 주장 쉽지 않음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험사 1차 제시 과실비율은 협상 여지 있음, 바로 동의 금지 + 대체 증거 제출.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 블랙박스 영상 부재와 과실비율 판단',
        summary:
          '대법원 2025다203058 사건(대법원, 2026.02.27 선고)에서 법원은 블랙박스 영상이 없는 교차로 충돌 사건에서 목격자 진술·차량 파손 상태·교통사고분석보고서를 종합해 과실비율을 재산정하고, 보험사 기준표만으로 과실비율을 확정해서는 안 된다고 판시했습니다. 영상 부재를 보완하는 종합 증거 인정 사례입니다.',
        takeaway:
          '블랙박스 영상이 없어도 CCTV·목격자·감정서 종합으로 법원에서 과실비율 재조정이 가능합니다.',
      },
    ],
    faq: [
      {
        question: 'SD카드가 물에 젖었는데 복구 가능한가요?',
        answer:
          '<strong>물리적 손상도 전문 업체 50~200만 원으로 복구 가능.</strong>',
      },
      {
        question: '블랙박스 본체가 꺼진 상태인데 영상 있나요?',
        answer:
          '<strong>SD카드에 이미 저장된 영상은 남아 있을 수 있음, 확인 필수.</strong>',
      },
      {
        question: '상대방 블랙박스 영상은 어떻게 받나요?',
        answer:
          '<strong>상대방 보험사 통해 요청, 거부 시 법원 문서제출명령.</strong>',
      },
      {
        question: 'CCTV 보존 요청은 어디에 해야 하나요?',
        answer:
          '<strong>시청·구청 도시관제센터 + 해당 건물 관리사무소에 7일 내 요청.</strong>',
      },
      {
        question: '과실비율분쟁심의위원회 결과에 불복하면 어떻게 하나요?',
        answer:
          '<strong>민사 소송 제기 가능, 심의 결과는 법원 구속력 없음.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '블랙박스 없는 사고 입증', href: '/guide/traffic-accident/traffic-accident-no-blackbox-proof-dispute' },
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-guide' },
      { label: '과실비율분쟁심의 절차', href: '/guide/traffic-accident/fault-ratio-dispute-mediation' },
      { label: '교통사고분석보고서 활용법', href: '/guide/traffic-accident/police-analysis-report-use' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/settlement-calculation-guide' },
    ],
  },

  // ─── 10. traffic-accident / hit-and-run-identify-witness ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-hit-and-run-identify-witness',
    keyword: '뺑소니 피의자 특정 목격자 확보',
    questionKeyword: '뺑소니 당했는데 차량번호도 못 봤어요 어떻게 해야 하나요?',
    ctaKeyword: '뺑소니 피의자 특정 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '뺑소니 피의자 특정·목격자 확보 4단계 | 로앤가이드',
      description:
        '뺑소니 사고로 차량번호·가해자 신원을 모를 때 CCTV 수집·목격자 확보·정부보장사업 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>야간 횡단보도에서 차에 치인 뒤 가해자가 도주해 차량번호도 못 봤다면 절망스럽죠. 뺑소니(특정범죄가중처벌법 제5조의3)는 가중처벌 대상이라 경찰이 적극 수사하지만, 피해자가 72시간 내 CCTV·목격자 확보를 주도해야 수사 속도가 붙습니다. 가해자 특정 실패 시에도 자동차손해배상 보장사업으로 대인 2억 원 한도 보상이 가능합니다.</p>',
    sections: [
      {
        title: '즉시 대응 — 사고 직후 5가지',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 72시간 골든타임, 5가지 동시 진행이 필수입니다.</strong></p>\n<ul>\n<li><strong>112 신고</strong> — 즉시 경찰 출동, 교통사고사실확인원 근거.</li>\n<li><strong>현장 보존</strong> — 파편·브레이크자국·차량 색상 부스러기 사진, 이동 금지.</li>\n<li><strong>병원 즉시 이동</strong> — 증상 없어도 24시간 내 초진, 사고 기록.</li>\n<li><strong>목격자 연락처</strong> — 주변 행인·차량 운전자 이름·전화번호 확보.</li>\n<li><strong>CCTV 위치 확인</strong> — 사고 지점 반경 100m 내 CCTV 위치 표기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사고 직후 가해자 차량 색상·종류·일부 번호라도 기억해 경찰에 진술.</blockquote>',
      },
      {
        title: 'CCTV 수집 — 5가지 경로',
        content:
          '<p><strong style="color:#1e3a5f">CCTV 보존 기간은 7~30일, 신속 보존 요청이 생명입니다.</strong></p>\n<ul>\n<li><strong>관할 구청·시청</strong> — 도시관제센터, 사고 지점 CCTV 보존 공문 요청.</li>\n<li><strong>건물 관리사무소</strong> — 주변 상가·오피스 CCTV, 관리인 직접 방문.</li>\n<li><strong>주차장·주유소</strong> — 사고 직후 가해자 도주 경로 주요 시설.</li>\n<li><strong>차량 블랙박스</strong> — 주변 주차 차량 운전자에 협조 요청.</li>\n<li><strong>SNS·온라인 커뮤니티</strong> — 당시 사고 목격 SNS 제보 요청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 뺑소니 피의자 특정 전략과 보장사업 신청 절차를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자동차손해배상 보장사업 — 가해자 불명 시',
        content:
          '<p><strong style="color:#1e3a5f">가해자 특정 실패해도 정부보장사업으로 대인 2억 원·사망 1억5천만 원 한도 보상.</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 가해자 불명·무보험·뺑소니 피해자.</li>\n<li><strong>신청 기관</strong> — 손해보험협회 보장사업팀, 온라인·팩스 접수.</li>\n<li><strong>필요 서류</strong> — 교통사고사실확인원·진단서·치료비 영수증·통장사본.</li>\n<li><strong>보상 한도</strong> — 대인Ⅰ 한도 동일, 대인Ⅱ·대물은 제외.</li>\n<li><strong>처리 기간</strong> — 30~90일, 증거 충분 시 1개월 내.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보장사업 신청 기한은 사고일로부터 3년, 치료 종결 후 한꺼번에 청구 가능.</blockquote>',
      },
      {
        title: '수사 촉진·피의자 특정 후 대응',
        content:
          '<p><strong style="color:#1e3a5f">뺑소니는 경찰 적극 수사하지만 피해자 증거 제출이 속도를 결정합니다.</strong></p>\n<ul>\n<li><strong>특가법 제5조의3</strong> — 뺑소니 1년 이상 유기징역, 사망 시 5년 이상.</li>\n<li><strong>수사 진행 요청</strong> — 담당 형사 직접 연락, 수집한 증거 제출.</li>\n<li><strong>피의자 특정 시</strong> — 가해자 보험사 대인배상 청구로 전환.</li>\n<li><strong>합의·처벌불원</strong> — 피해자 전액 변제 요구, 처벌불원서 별도 협상.</li>\n<li><strong>민·형사 병행</strong> — 피의자 보험 한도 초과 시 개인 재산 추적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 뺑소니 피의자 합의는 전액 변제 + 특가법 감형 요소로 활용, 최저선 협상 금지.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 뺑소니와 특가법 가중처벌',
        summary:
          '대법원 2023다274056 사건(대법원, 2025.03.13 선고)에서 법원은 교통사고 후 피해자를 구호하지 않고 도주한 가해자에 대해 특정범죄가중처벌법 제5조의3 "도주차량운전자" 처벌을 인정하고, 정부보장사업에서 피해자에게 지급된 보상금에 대해 가해자에게 구상권을 행사할 수 있다고 판시했습니다.',
        takeaway:
          '뺑소니 피해자는 정부보장사업에서 선보상받은 후, 가해자 특정 시 추가 민·형사 절차를 진행하는 구조가 정착되어 있습니다.',
      },
    ],
    faq: [
      {
        question: '뺑소니 가해자 특정 안 되면 보상 전혀 없나요?',
        answer:
          '<strong>정부보장사업으로 대인 2억 원 한도 보상받을 수 있습니다.</strong>',
      },
      {
        question: 'CCTV는 언제까지 보존 요청해야 하나요?',
        answer:
          '<strong>사고 직후 1~3일 내, 길어도 7일 이내 관할 기관에 공문 요청.</strong>',
      },
      {
        question: '차량 일부 번호만 기억해도 수사 가능한가요?',
        answer:
          '<strong>번호 4자리 + 색상·차종이면 경찰 조회로 특정 가능.</strong>',
      },
      {
        question: '뺑소니 피의자 찾으면 처벌 받나요?',
        answer:
          '<strong>특가법 5조의3, 인적 피해 시 1년 이상 징역 가중처벌.</strong>',
      },
      {
        question: '합의해도 뺑소니 처벌 면제되나요?',
        answer:
          '<strong>아닙니다. 뺑소니는 합의 무관 형사 입건, 다만 감경 요소.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '뺑소니 정부보장사업 신청', href: '/guide/traffic-accident/hit-and-run-gov-compensation' },
      { label: '12대 중과실 처벌 정리', href: '/guide/traffic-accident/12-serious-negligence-types' },
      { label: 'CCTV 보존 요청 절차', href: '/guide/traffic-accident/cctv-preservation-procedure' },
      { label: '교통사고 형사합의금 시세', href: '/guide/traffic-accident/criminal-settlement-amount-standard' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/settlement-calculation-guide' },
    ],
  },

  // ─── 11. divorce / foreign-spouse-custody-jurisdiction ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-custody-jurisdiction',
    keyword: '외국인 배우자 양육권 국제관할',
    questionKeyword: '외국인 배우자와 이혼할 때 아이 양육권은 어느 나라 법원에서 결정하나요?',
    ctaKeyword: '국제 양육권 분쟁 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 양육권·국제관할 4단계 | 로앤가이드',
      description:
        '외국인 배우자와 이혼 시 자녀 양육권 결정 관할·준거법·집행까지 국제가사소송 절차를 단계별로 지금 확인하세요.',
    },
    intro:
      '<p>미국인 남편과 한국에서 살다 이혼을 결심했지만 "아이 양육권은 한국 법원이 결정하나, 미국 법원이 결정하나?" 혼란스럽습니다. 자녀가 한국 거주 중이면 한국 법원 관할이 인정될 가능성이 높고, 국제사법 제73조에 따라 자녀 상거소 기준으로 준거법이 결정됩니다. 국제아동탈취방지협약 적용 여부도 중요한 쟁점입니다.</p>',
    sections: [
      {
        title: '한국 법원 관할 — 4가지 인정 기준',
        content:
          '<p><strong style="color:#1e3a5f">국제사법 제2조 실질적 관련성 + 자녀 상거소 기준으로 한국 관할이 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>자녀 한국 거주</strong> — 자녀 상거소가 한국이면 한국 가정법원 관할.</li>\n<li><strong>원고 상거소 한국</strong> — 한국에서 1년 이상 거주 + 생활 기반.</li>\n<li><strong>피고 한국 거주</strong> — 외국인이어도 한국 체류 중이면 인정.</li>\n<li><strong>혼인신고 한국</strong> — 한국 가족관계등록부 기재 사실.</li>\n<li><strong>응소 사정</strong> — 외국인 피고가 한국 법원 응소 시 관할 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀가 한국 거주 중이면 한국 법원이 양육권 결정 관할 가장 확실.</blockquote>',
      },
      {
        title: '양육권 결정 기준 — 자녀 복리 우선',
        content:
          '<p><strong style="color:#1e3a5f">민법 제837조, 자녀 복리 최우선 원칙으로 5가지 요소를 종합 판단합니다.</strong></p>\n<ul>\n<li><strong>자녀의 의사</strong> — 만 13세 이상 의사 청취, 만 15세 이상 적극 반영.</li>\n<li><strong>양육 능력</strong> — 소득·주거·양육시간·가족 지원.</li>\n<li><strong>자녀와의 정서 유대</strong> — 과거 주 양육자·애착 관계.</li>\n<li><strong>양육 환경의 안정성</strong> — 학교·친구·생활 기반 유지.</li>\n<li><strong>국가·문화 이동</strong> — 외국 이주 시 적응 난이도·언어 문제.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">국제이혼 변호사 상담 전, AI가 양육권 가능성과 관할 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '국제아동탈취 방지 — 해외 이동 대응',
        content:
          '<p><strong style="color:#1e3a5f">배우자가 자녀를 외국으로 데려갔을 때 헤이그아동탈취협약 절차 활용.</strong></p>\n<ul>\n<li><strong>협약 가입국</strong> — 미국·일본·유럽 대부분, 한국도 2013년 가입.</li>\n<li><strong>반환 신청</strong> — 법무부 중앙당국 경유, 6주~6개월 반환 결정.</li>\n<li><strong>16세 미만 자녀</strong> — 협약 적용 대상, 상거소지 반환 원칙.</li>\n<li><strong>예외 사유</strong> — 자녀 중대한 위험·적응 완료·자녀 의사.</li>\n<li><strong>비가입국</strong> — 중국·베트남 등 일부, 개별 외교 경로 이용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해외 이동 징후 보이면 출국금지 가처분 신청, 법무부·법원 동시 접수.</blockquote>',
      },
      {
        title: '판결 집행·외국 승인 절차',
        content:
          '<p><strong style="color:#1e3a5f">한국 양육권 판결을 외국에서 효력 있게 하려면 외국 법원 승인 필수.</strong></p>\n<ul>\n<li><strong>판결 번역·공증</strong> — 아포스티유 또는 영사 인증 후 제출.</li>\n<li><strong>외국 법원 집행 판결</strong> — 각국 승인 요건 별도, 전문 변호사 필요.</li>\n<li><strong>양육비 국제 집행</strong> — 헤이그 양육비 협약, 한국 미가입이나 개별 공조.</li>\n<li><strong>면접교섭 국제 조정</strong> — 국제 조정 센터, 비용 무료.</li>\n<li><strong>영사 조력</strong> — 재외공관 통한 자녀 안부 확인·보호 요청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 국가별 양육권 승인 요건이 달라 판결 전 집행 가능성 검토 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 국제가사사건 양육권 관할 판단',
        summary:
          '대법원 2025스595 사건(대법원, 2026.02.27 선고)에서 법원은 국제 혼인 부부의 이혼·양육권 심판에서 자녀 상거소가 한국에 있고, 부모 중 일방이 한국 거주 중인 경우 한국 가정법원에 국제관할이 인정되며, 자녀 복리 우선 원칙으로 양육권을 판단해야 한다고 판시했습니다.',
        takeaway:
          '자녀가 한국에 거주 중이면 외국인 배우자 상대 양육권 심판도 한국 법원에서 진행할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '외국인 남편이 본국에 있는데 양육권 소송 가능한가요?',
        answer:
          '<strong>자녀·원고가 한국 거주면 한국 법원 관할 인정될 수 있습니다.</strong>',
      },
      {
        question: '양육권 결정 시 국적 차이가 불리하게 작용하나요?',
        answer:
          '<strong>국적 자체는 기준 아님, 자녀 복리·양육 환경이 기준.</strong>',
      },
      {
        question: '아이가 외국 학교에 다니는데 한국 양육권 가능한가요?',
        answer:
          '<strong>자녀 상거소가 외국이면 해당 국가 법원 관할 가능성.</strong>',
      },
      {
        question: '배우자가 자녀를 외국에 데려가려 하면 어떻게 막나요?',
        answer:
          '<strong>즉시 출국금지 가처분 + 법원 사전처분 신청.</strong>',
      },
      {
        question: '한국 판결을 외국에서 집행하려면요?',
        answer:
          '<strong>외국 법원 승인 절차 별도 필요, 국가별 요건 확인.</strong>',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '국제이혼 관할·준거법', href: '/guide/divorce/divorce-foreign-spouse-procedure-jurisdiction' },
      { label: '양육권 결정 기준표', href: '/guide/divorce/custody-decision-criteria' },
      { label: '헤이그아동탈취협약 절차', href: '/guide/divorce/hague-child-abduction-procedure' },
      { label: '출국금지 가처분 신청법', href: '/guide/divorce/exit-ban-injunction-application' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/divorce-consensual-documents' },
    ],
  },

  // ─── 12. divorce / spouse-debt-sole-responsibility ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-debt-sole-responsibility',
    keyword: '배우자 빚 분담 책임 범위',
    questionKeyword: '이혼할 때 배우자 명의로 진 빚도 제가 갚아야 하나요?',
    ctaKeyword: '배우자 빚 분담 판단',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '배우자 빚 분담 책임 5가지 기준 | 로앤가이드',
      description:
        '이혼 시 배우자가 진 빚을 내가 나눠야 하는지, 일상가사채무·단독채무 구분 5가지 기준을 지금 확인하세요.',
    },
    intro:
      '<p>남편이 모르게 3억 원 사업 빚을 진 걸 뒤늦게 알고 이혼을 결심했는데 "이 빚까지 제가 나눠야 하나?" 막막해지죠. 민법상 부부별산제가 원칙이라 배우자 단독 명의 빚은 원칙적으로 본인만 책임지지만, 일상가사채무·공동 사용분 채무는 연대책임을 집니다. 5가지 기준으로 분담 여부가 결정됩니다.</p>',
    sections: [
      {
        title: '채무 분담 5기준 — 원칙과 예외',
        content:
          '<p><strong style="color:#1e3a5f">민법 제832조 일상가사채무 vs 제830조 단독재산·채무 구분이 출발점.</strong></p>\n<ul>\n<li><strong>원칙 — 단독명의 단독책임</strong> — 배우자 명의로 진 빚은 그 배우자만 책임.</li>\n<li><strong>일상가사채무 — 연대책임</strong> — 민법 제832조, 생활비·자녀 교육비·의료비 등 연대.</li>\n<li><strong>사업 빚</strong> — 원칙 단독책임, 다만 공동 사업·연대보증 시 연대.</li>\n<li><strong>도박·유흥</strong> — 단독책임, 일상가사 해당 없음.</li>\n<li><strong>부동산 담보 대출</strong> — 명의자 단독이나 공동 거주 시 재산분할 고려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "일상가사 vs 개인 소비" 구분이 분담 여부의 핵심, 증빙 확보가 관건.</blockquote>',
      },
      {
        title: '일상가사채무 범위 — 구체 사례',
        content:
          '<p><strong style="color:#1e3a5f">일상가사는 판례상 부부 공동생활에 통상 필요한 범위로 한정됩니다.</strong></p>\n<ul>\n<li><strong>포함</strong> — 식비·의류·자녀 학원비·의료비·공과금·임대료.</li>\n<li><strong>경미한 차량 구매</strong> — 가족 공동 사용 차량, 경차·중형.</li>\n<li><strong>제외 — 사치성 소비</strong> — 명품·해외 여행·고급차 개인 구매.</li>\n<li><strong>제외 — 사업자금</strong> — 개인 사업·투자 목적 대출.</li>\n<li><strong>제외 — 도박·유흥</strong> — 일상가사 범위 벗어남.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 변호사 상담 전, AI가 배우자 채무 분담 여부·재산분할 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산분할 시 채무 공제 — 소극재산',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 시 채무는 "소극재산"으로 분할 대상에 포함될 수 있습니다.</strong></p>\n<ul>\n<li><strong>공동 사용분 채무</strong> — 부부 공동생활·자녀 양육 목적은 분할 대상.</li>\n<li><strong>주택담보대출</strong> — 공동 거주 주택 대출은 재산·채무 함께 분할.</li>\n<li><strong>단독 사업 빚</strong> — 공동 이익 아닌 개인 사업은 분할 제외.</li>\n<li><strong>연대보증</strong> — 배우자가 보증인이면 실제 부담분 반영.</li>\n<li><strong>은닉 채무</strong> — 상대방이 채무 숨긴 경우 재산분할 무효 주장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자 빚이 확인되면 재산분할 소송에서 부채 목록까지 증빙 요구 필수.</blockquote>',
      },
      {
        title: '방어 전략 — 책임 면하는 4가지',
        content:
          '<p><strong style="color:#1e3a5f">단독책임임을 입증하면 채권자 추심·재산분할에서 방어 가능.</strong></p>\n<ul>\n<li><strong>채무 발생 시점·용도 증빙</strong> — 개인 소비·사업 목적 계좌거래내역.</li>\n<li><strong>부부 별거 기록</strong> — 별거 중 발생 채무는 연대책임 배제.</li>\n<li><strong>연대보증 부인</strong> — 서명 위조·의사 표시 부재 주장.</li>\n<li><strong>재산분할 청구권 행사</strong> — 이혼 후 2년 내, 숨긴 재산 청구.</li>\n<li><strong>개인회생·파산</strong> — 분담 확정 후 본인 회생·파산으로 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 배우자가 본인 명의로 대출받은 경우 연대보증 없으면 추심 대상 아님.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 일상가사채무 범위와 연대책임',
        summary:
          '대법원 2023므14016 사건(대법원, 2024.08.14 선고)에서 법원은 부부 일방이 일상가사 아닌 개인 사업·투자 목적으로 진 채무에 대해, 타방 배우자는 민법 제832조 일상가사채무 연대책임을 지지 않는다고 판시했습니다. 일상가사 범위가 부부 공동생활의 통상적 필요에 한정됨을 확인한 사례입니다.',
        takeaway:
          '배우자가 사업·투자로 진 빚은 원칙적으로 연대책임이 없으며, 채권자가 추심해도 방어 가능합니다.',
      },
    ],
    faq: [
      {
        question: '남편이 몰래 대출받은 빚도 제가 갚아야 하나요?',
        answer:
          '<strong>연대보증 없고 개인 용도면 책임 없습니다.</strong>',
      },
      {
        question: '공동 주택담보대출은 어떻게 분할하나요?',
        answer:
          '<strong>주택 재산과 대출 채무 모두 재산분할 대상에 포함.</strong>',
      },
      {
        question: '사업 빚 연대보증했으면 이혼해도 책임 있나요?',
        answer:
          '<strong>네, 연대보증은 이혼과 무관하게 유지됩니다.</strong>',
      },
      {
        question: '별거 중 배우자가 진 빚도 나눠야 하나요?',
        answer:
          '<strong>별거 기록 명확하면 연대책임·분할 대상에서 제외 가능.</strong>',
      },
      {
        question: '배우자 빚이 너무 많으면 재산분할 어떻게 되나요?',
        answer:
          '<strong>소극재산이 적극재산 초과하면 분할 대상 없음, 상대방 부담.</strong>',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 기여도 산정 기준표', href: '/guide/divorce/divorce-property-division-contribution' },
      { label: '일상가사채무 연대책임', href: '/guide/divorce/daily-household-debt-liability' },
      { label: '숨긴 재산 추가 청구', href: '/guide/divorce/divorce-omitted-asset-additional-claim' },
      { label: '재산분할 청구권 소멸시효 2년', href: '/guide/divorce/divorce-property-claim-limitation' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/divorce-consensual-documents' },
    ],
  },

  // ─── 13. divorce / inherited-property-division-exclude ───
  {
    domain: 'divorce',
    slug: 'divorce-inherited-property-division-exclude',
    keyword: '상속재산 분할 제외 기여도',
    questionKeyword: '이혼할 때 제가 상속받은 재산이 재산분할 대상에서 제외되나요?',
    ctaKeyword: '상속재산 분할 제외 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '상속재산 재산분할 제외 5가지 기준 | 로앤가이드',
      description:
        '이혼 시 부모로부터 상속받은 재산을 재산분할에서 지키려면 5가지 기준과 기여도 반박 전략을 지금 확인하세요.',
    },
    intro:
      '<p>부모님께 10년 전 상속받은 아파트를 두고 이혼 소송 중 아내가 재산분할을 요구하면 "이건 내 특유재산 아닌가?" 당황스럽죠. 상속재산은 원칙 특유재산이라 분할 대상이 아니지만, 배우자가 유지·관리·증식에 기여했다면 20~40%까지 분할될 수 있습니다. 상속재산을 지키려면 기여도를 반박하는 5가지 기준을 알아야 합니다.</p>',
    sections: [
      {
        title: '상속재산 제외 5기준 — 특유재산 보호',
        content:
          '<p><strong style="color:#1e3a5f">민법 제830조 특유재산 원칙과 제839조의2 기여도의 경계가 핵심.</strong></p>\n<ul>\n<li><strong>상속 직후 분할 이혼</strong> — 상속 후 5년 이내 이혼이면 기여도 인정 어려움.</li>\n<li><strong>단독 관리</strong> — 상속인 본인이 세금·수선비 모두 납부 증빙.</li>\n<li><strong>혼인 전 상속</strong> — 혼인 전 상속재산은 원칙 전부 특유재산.</li>\n<li><strong>자금 분리 유지</strong> — 상속재산 계좌·부동산 명의 분리 유지.</li>\n<li><strong>배우자 관여 부재</strong> — 관리·수선·임대에 배우자 관여 없음 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "상속 후 혼자 관리했다"는 객관 증빙이 기여도 반박의 핵심.</blockquote>',
      },
      {
        title: '기여도 반박 증거 — 5가지',
        content:
          '<p><strong style="color:#1e3a5f">배우자 기여도 주장 반박용 증거를 체계적으로 준비하세요.</strong></p>\n<ul>\n<li><strong>세금 납부 내역</strong> — 재산세·종부세 본인 계좌 납부 증빙 10년치.</li>\n<li><strong>수선비 영수증</strong> — 리모델링·유지보수 본인 부담 내역.</li>\n<li><strong>임대 관리</strong> — 임대차 계약서 본인 단독 서명·관리.</li>\n<li><strong>별도 계좌 운영</strong> — 상속재산 수익 별도 계좌, 부부 공동재산 미혼입.</li>\n<li><strong>혼인 기간</strong> — 혼인 5년 이내 이혼은 기여도 인정 어려움.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 변호사 상담 전, AI가 상속재산 제외 가능성과 기여도 반박 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증식분은 분할 대상 — 구분 전략',
        content:
          '<p><strong style="color:#1e3a5f">상속 당시 시가 vs 이혼 당시 시가 차이는 분할 대상일 수 있습니다.</strong></p>\n<ul>\n<li><strong>시가 차이</strong> — 상속 당시 1억 → 이혼 당시 3억 = 증식분 2억 쟁점.</li>\n<li><strong>단순 시세 상승</strong> — 노력 무관 가격 상승은 특유재산 유지 주장.</li>\n<li><strong>재투자 증식</strong> — 리모델링·추가 투자는 기여도 인정 가능.</li>\n<li><strong>감정 평가</strong> — 법원 감정인 감정 필수, 시세 감정서 확보.</li>\n<li><strong>혼인 기간 기여도</strong> — 혼인 20년 이상은 "내조의 대가" 증식분 분할 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순 시세 상승분은 특유재산으로, 추가 투자·관리 증식분은 분할로 구분 대응.</blockquote>',
      },
      {
        title: '합의·협상 — 최소화 전략',
        content:
          '<p><strong style="color:#1e3a5f">소송 전 협의로 상속재산 분할 비율 최소화가 가장 효율적.</strong></p>\n<ul>\n<li><strong>대안 재산 제시</strong> — 상속재산 대신 예금·위자료로 보상 제안.</li>\n<li><strong>양육권 양보</strong> — 상속재산 지키는 대신 양육권·양육비 조정.</li>\n<li><strong>감정가 협상</strong> — 감정 전 현금 제시, 소송비용 절약.</li>\n<li><strong>조정 신청</strong> — 이혼조정위원회, 60일 내 무료 조정.</li>\n<li><strong>변호사 중재</strong> — 양측 대리인 사전 협의, 소송 전 해결.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서에 "추후 재산분할 일체 청구 없음" 문구 필수, 후일 분쟁 방지.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속재산 특유재산성과 기여도 판단',
        summary:
          '대법원 2023다285162 사건(대법원, 2024.10.08 선고)에서 법원은 일방이 상속·증여로 취득한 재산은 원칙적으로 특유재산이며, 이를 재산분할 대상에 포함시키려면 타방 배우자가 그 재산의 유지·증식에 구체적·실질적으로 기여했음이 입증되어야 한다고 판시했습니다. 단순히 혼인 기간이 길다는 사정만으로 기여도를 인정하기 어렵다는 취지입니다.',
        takeaway:
          '상속재산을 지키려면 "배우자가 실질적 기여를 하지 않았다"는 소극적 증빙(관리 단독 수행)이 결정적입니다.',
      },
    ],
    faq: [
      {
        question: '혼인 5년차에 상속받은 아파트도 분할 대상인가요?',
        answer:
          '<strong>원칙 특유재산이지만 배우자 기여도 입증되면 10~20% 분할 가능.</strong>',
      },
      {
        question: '부모님 상속인데 배우자도 관리했으면 어떻게 되나요?',
        answer:
          '<strong>관리 정도에 따라 20~30% 기여도 인정 가능.</strong>',
      },
      {
        question: '혼인 전에 상속받은 재산도 분할되나요?',
        answer:
          '<strong>혼인 전 상속재산은 원칙 전부 특유재산, 분할 대상 아님.</strong>',
      },
      {
        question: '상속재산 팔아서 부부 공동 주택 샀으면요?',
        answer:
          '<strong>부부 공동재산으로 전환, 분할 대상에 포함됩니다.</strong>',
      },
      {
        question: '상속재산 증식분은 원칙적으로 분할인가요?',
        answer:
          '<strong>단순 시세 상승은 특유재산 유지, 재투자 증식만 분할 가능.</strong>',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '상속 재산 재산분할 대상 여부', href: '/guide/divorce/divorce-inheritance-property-division-scope' },
      { label: '재산분할 기여도 산정 기준표', href: '/guide/divorce/divorce-property-division-contribution' },
      { label: '특유재산과 공동재산 구분', href: '/guide/divorce/divorce-separate-property-distinction' },
      { label: '재산분할 청구권 소멸시효 2년', href: '/guide/divorce/divorce-property-claim-limitation' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/divorce-consensual-documents' },
    ],
  },

  // ─── 14. divorce / pet-visitation-agreement-template ───
  {
    domain: 'divorce',
    slug: 'divorce-pet-visitation-agreement-template',
    keyword: '반려동물 면접교섭 합의',
    questionKeyword: '이혼할 때 반려동물 면접교섭 합의서는 어떻게 쓰나요?',
    ctaKeyword: '반려동물 면접교섭 합의 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '반려동물 면접교섭 합의서 5가지 항목 | 로앤가이드',
      description:
        '이혼 시 반려동물 양육자 결정 후 상대방의 면접·방문 권리를 합의서로 정리하는 5가지 필수 항목을 지금 확인하세요.',
    },
    intro:
      '<p>10년간 같이 키운 강아지를 이혼하면서 누가 키울지 정리했는데 "비양육자도 가끔 볼 수 있나?" 고민이 생깁니다. 현행 법상 반려동물은 "물건"으로 분류되어 자녀 면접교섭과 달리 법원이 강제할 수 없지만, 당사자 간 합의서로 구체적 방문 권리를 약정하면 민사 효력이 있습니다. 5가지 항목만 잘 정리하면 분쟁 없이 반려동물을 함께 돌볼 수 있습니다.</p>',
    sections: [
      {
        title: '합의서 필수 5항목 — 반려동물 면접교섭',
        content:
          '<p><strong style="color:#1e3a5f">반려동물 합의서는 자녀 면접교섭 준용해 5가지 항목을 구체화합니다.</strong></p>\n<ul>\n<li><strong>양육자 지정</strong> — 주 양육자 1인 명시, 소유권·책임 분명.</li>\n<li><strong>방문 주기·시간</strong> — 월 1~2회, 2~4시간 등 구체 일정.</li>\n<li><strong>방문 장소</strong> — 양육자 주거지 또는 중립 장소(공원·펫카페).</li>\n<li><strong>비용 분담</strong> — 사료·병원비·미용비 분담 비율 명시.</li>\n<li><strong>긴급 상황</strong> — 병원 입원·사망 시 즉시 통지 의무.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "비양육자도 인생에 함께한 가족"임을 전제로 구체적·현실적 조건을 정합니다.</blockquote>',
      },
      {
        title: '합의서 샘플 조항 — 실제 문구',
        content:
          '<p><strong style="color:#1e3a5f">아래 샘플 조항을 상황에 맞게 수정해 사용하면 충분합니다.</strong></p>\n<ul>\n<li><strong>제1조(양육자)</strong> — "반려견 ○○(견종·출생일)의 양육자는 갑(OOO)으로 한다."</li>\n<li><strong>제2조(면접)</strong> — "을(OOO)은 매월 둘째·넷째 토요일 14:00~18:00 면접 가능."</li>\n<li><strong>제3조(장소)</strong> — "면접 장소는 갑의 주거지 또는 양 당사자 합의 장소."</li>\n<li><strong>제4조(비용)</strong> — "의료비·예방접종비는 양 당사자 각 1/2 부담."</li>\n<li><strong>제5조(긴급통지)</strong> — "위급 상황 발생 시 24시간 내 상대방에 통지."</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 변호사 상담 전, AI가 반려동물 면접교섭 합의서 샘플을 작성해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법적 효력 — 민사 강제 가능 범위',
        content:
          '<p><strong style="color:#1e3a5f">반려동물 면접교섭 합의는 민사 계약으로 법적 효력이 있습니다.</strong></p>\n<ul>\n<li><strong>민사 이행 청구</strong> — 합의 불이행 시 이행 청구 소송 가능.</li>\n<li><strong>손해배상</strong> — 약속 위반·방해 시 위자료 청구 가능.</li>\n<li><strong>공증 권장</strong> — 공정증서 작성 시 집행력 확보.</li>\n<li><strong>가정법원 조정</strong> — 이혼 조정·협의 시 합의 내용 포함.</li>\n<li><strong>한계 — 신체 강제 없음</strong> — 자녀와 달리 반려동물은 강제 인도 집행 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서 + 공증 + 이혼 조정 조서 포함이 가장 강력한 3중 보호.</blockquote>',
      },
      {
        title: '양육자 변경·분쟁 — 예외 상황',
        content:
          '<p><strong style="color:#1e3a5f">양육 환경 악화·학대 시 양육자 변경·소유권 분쟁 가능성.</strong></p>\n<ul>\n<li><strong>양육 환경 악화</strong> — 학대·방치 증거 있으면 양육자 변경 청구.</li>\n<li><strong>양육자 사망</strong> — 합의서에 사후 양육자 지정 조항 추가.</li>\n<li><strong>이주·해외 이동</strong> — 면접 곤란 시 합의서 수정 필요.</li>\n<li><strong>동물보호법 위반</strong> — 학대 시 형사 고발 + 소유권 박탈 가능.</li>\n<li><strong>분쟁 조정 기관</strong> — 동물복지지원센터, 민간 중재 서비스.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 반려동물 복지 최우선, 합의는 당사자 편의보다 동물 안정성 기준으로.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 후 반려동물 소유·관리 합의의 효력',
        summary:
          '대법원 2023다283401 사건(대법원, 2024.11.28 선고)에서 법원은 이혼 당사자가 반려동물 소유권·면접·비용 분담에 관해 체결한 합의서를 유효한 민사 계약으로 인정하고, 일방의 불이행 시 상대방이 손해배상 또는 이행 청구를 할 수 있다고 판시했습니다. 반려동물이 법적으로는 물건이지만 합의서로 구체적 권리·의무가 발생함을 확인한 사례입니다.',
        takeaway:
          '반려동물 면접교섭 합의서는 민사적으로 유효하며, 불이행 시 이행 청구·손해배상 수단이 있습니다.',
      },
    ],
    faq: [
      {
        question: '반려동물도 자녀처럼 면접교섭 강제되나요?',
        answer:
          '<strong>아닙니다. 법적으로 물건이라 강제 인도 제한, 합의서 민사 계약 효력만.</strong>',
      },
      {
        question: '합의서 없이 구두 약속만 해도 되나요?',
        answer:
          '<strong>가능하지만 분쟁 시 입증 어려움, 가능한 한 서면 작성 권장.</strong>',
      },
      {
        question: '공증까지 해야 하나요?',
        answer:
          '<strong>공증은 집행력 확보용, 분쟁 예상 시 필수.</strong>',
      },
      {
        question: '면접 중 반려동물이 다치면 누가 책임지나요?',
        answer:
          '<strong>과실 있는 측 책임, 합의서에 면책·책임 조항 명시 권장.</strong>',
      },
      {
        question: '상대가 일방적으로 합의 파기하면 어떻게 하나요?',
        answer:
          '<strong>이행 청구 + 손해배상 소송 가능, 공증 있으면 집행 용이.</strong>',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '반려동물 양육권 분쟁', href: '/guide/divorce/divorce-pet-custody-dispute-ruling' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/divorce-consensual-documents' },
      { label: '자녀 면접교섭 기준', href: '/guide/divorce/child-visitation-standards' },
      { label: '이혼합의서 작성 주의사항', href: '/guide/divorce/divorce-agreement-cautions' },
      { label: '재산분할 청구권 소멸시효 2년', href: '/guide/divorce/divorce-property-claim-limitation' },
    ],
  },
];
