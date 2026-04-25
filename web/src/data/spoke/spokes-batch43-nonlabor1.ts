import { SpokePage } from '../spoke-pages';

// batch43 nonlabor1 10개: fraud 5 + traffic-accident 5
//
// 1. fraud/gift-card-resale-scam-response — 기프티콘 재판매 사기 피해자의 즉시 대응 순서
// 2. fraud/used-car-odometer-rollback — 중고차 주행거리 조작 사기 피해자의 환불·고소 절차
// 3. fraud/subscription-autorenewal-deceptive — 자동결제 해지 불가 기만적 결제 대응
// 4. fraud/concert-ticket-scalping-nonexistent — 존재하지 않는 공연 티켓 판매 사기 대응
// 5. fraud/loan-fee-advance-scam — 대출 수수료 선입금 보이스피싱형 사기 대응
// 6. traffic-accident/cyclist-severe-injury-liability — 자전거 충돌·중상 시 책임분담 기준
// 7. traffic-accident/no-blackbox-proof-dispute — 블랙박스 미장착 사고 입증 전략
// 8. traffic-accident/parking-lot-door-ding — 주차장 문콕 사고 보험·합의 처리
// 9. traffic-accident/pet-hit-civil-claim — 차량이 반려동물 친 경우 손해배상 청구
// 10. traffic-accident/elderly-driver-fault — 고령운전자 사고 쟁점 정리

export const spokesBatch43Nonlabor1: SpokePage[] = [
  // ─── 1. fraud / gift-card-resale-scam-response ───
  {
    domain: 'fraud',
    slug: 'fraud-gift-card-resale-scam-response',
    keyword: '기프티콘 재판매 사기 대응',
    questionKeyword: '기프티콘 중고거래 사기 당했는데 어떻게 해야 하나요?',
    ctaKeyword: '기프티콘 사기 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '기프티콘 재판매 사기 대응 4단계 정리 | 로앤가이드',
      description:
        '기프티콘을 싸게 샀는데 이미 사용됐거나 코드가 무효일 때, 환불·플랫폼 신고·고소까지 72시간 이내 밟아야 할 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"5만 원 상품권을 3만 5천 원에 산다"는 말에 흔들려 거래했는데, 막상 사용하려니 이미 교환 완료된 코드였던 경험은 드물지 않습니다. 판매자는 잠수 타고 대화방은 강제 종료되죠. 형법 제347조 사기죄가 명확히 성립하는 전형적 수법이지만, 72시간 이내에 대화 캡처·입금내역·코드번호를 확보하지 않으면 피의자 특정부터 어려워집니다.</p>',
    sections: [
      {
        title: '즉시 증거 확보 — 72시간 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">피의자가 대화방을 나가면 증거가 날아가므로 발견 즉시 전체 스크린샷이 최우선입니다.</strong></p>\n<ul>\n<li><strong>대화 전체 캡처</strong> — 판매 글부터 입금 확인 멘트까지 시간순 5~10장, 삭제 전 백업.</li>\n<li><strong>입금내역 PDF</strong> — 은행 앱에서 거래내역 PDF 다운로드, 수취인 계좌 8자리 확인.</li>\n<li><strong>코드번호·바코드</strong> — 받은 기프티콘 이미지 원본 저장, 사용 이력 조회 캡처.</li>\n<li><strong>판매 플랫폼 URL</strong> — 번개장터·중고나라·당근 게시글 링크와 닉네임 복사.</li>\n<li><strong>ID·전화번호</strong> — 상대방 카카오 프로필, 닉네임 변경 전 스샷.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해 금액이 3만 원이어도 동일 계좌로 피해자 10명 이상이면 특정경제범죄법 상습사기로 가중됩니다.</blockquote>',
      },
      {
        title: '플랫폼 신고·지급정지 — 24시간 내',
        content:
          '<p><strong style="color:#1e3a5f">플랫폼 사기신고와 은행 지급정지를 동시에 걸면 잔액 회수율이 30~50% 높아집니다.</strong></p>\n<ul>\n<li><strong>플랫폼 신고</strong> — 번개장터·당근 신고센터에 닉네임·거래ID 제출, 24시간 내 계정 정지.</li>\n<li><strong>은행 지급정지</strong> — 전자금융거래법 제2조의4, 송금은행 고객센터(365일 24시간).</li>\n<li><strong>118 신고</strong> — 한국인터넷진흥원 보이스피싱 신고 연계, 지연이체 취소 가능(3~30분 내).</li>\n<li><strong>경찰 사이버범죄 신고</strong> — ecrm.police.go.kr, 온라인 접수 후 관할서 배정.</li>\n<li><strong>더치트 조회</strong> — thecheat.co.kr 계좌번호 입력, 동일 피의자 피해자 규모 파악.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사기 고소 준비자료와 회수 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고소장 제출 — 관할 경찰서',
        content:
          '<p><strong style="color:#1e3a5f">단순 피해자 1명은 단건 고소, 피해자 다수면 공동 고소가 입증이 쉽습니다.</strong></p>\n<ul>\n<li><strong>관할</strong> — 피의자 주소지 또는 범행지 경찰서(송금 은행 소재지 가능).</li>\n<li><strong>고소장 첨부</strong> — 대화 캡처 인쇄본, 입금증명서, 기프티콘 이미지, 사용 이력 조회서.</li>\n<li><strong>인적사항 불명 시</strong> — 계좌번호·전화번호만으로도 경찰이 영장 통해 피의자 특정.</li>\n<li><strong>공소시효</strong> — 단순 사기 10년(형법 제249조), 5년 이상 지나면 수사 우선순위 낮음.</li>\n<li><strong>피해자 규합</strong> — 더치트 동일 피해자 단톡방 생성, 공동 고소장 접수 시 상습사기 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 3만 원 소액도 피해자 10명 이상이면 특경법 상습사기로 처벌 1~15년 가중됩니다.</blockquote>',
      },
      {
        title: '회수 전략 — 민사 vs 합의',
        content:
          '<p><strong style="color:#1e3a5f">소액이면 민사 소송보다 합의 종용이 현실적, 10만 원 이하는 소액심판으로 3주 내 집행권원 확보.</strong></p>\n<ul>\n<li><strong>3만 원대 피해</strong> — 지급명령(인지대 1,000원), 이의 없으면 14일 후 확정.</li>\n<li><strong>10만 원대 피해</strong> — 소액심판(3,000만 원 이하), 1회 변론으로 판결.</li>\n<li><strong>피의자 합의 제안</strong> — 원금 + 위자 20~30% 표준, 처벌불원서 작성 조건.</li>\n<li><strong>피의자 재산 추적</strong> — 형사 수사 진행 시 계좌 압수수색으로 숨긴 재산 발견.</li>\n<li><strong>배상명령 신청</strong> — 형사 재판 1심 변론 종결 전, 인지대 없이 판결문으로 강제집행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "돈만 돌려주면 취하"는 구두 약속 금지, 가능한 한 합의서 작성 후 입금 확인.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상품권 자금세탁과 사기 공범 성립',
        summary:
          '대법원 2025도15768 사건(대법원, 2026.01.15 선고)에서 법원은 상품권업체를 운영하면서 보이스피싱·인터넷도박 조직의 의뢰에 따라 자금세탁을 해주고 수수료를 받은 행위에 대해, 사기 범행 실행자가 아니더라도 범죄수익 은닉 규제법 위반이 성립한다고 판시했습니다. 상품권 수취 계좌 운영자도 형사 책임을 지는 흐름입니다.',
        takeaway:
          '기프티콘 사기 계좌 운영자도 공범·자금세탁범으로 추가 처벌되므로 고소 시 가능한 한 계좌주 정보를 파악해야 합니다.',
      },
    ],
    faq: [
      {
        question: '3만 원짜리 기프티콘도 고소 가능한가요?',
        answer:
          '<strong>금액 불문 가능합니다.</strong> 단, 경찰 우선순위 낮아 피해자 규합 후 공동 고소가 수사 개시 빠릅니다.',
      },
      {
        question: '은행 지급정지는 몇 시간까지 가능한가요?',
        answer:
          '<strong>송금 후 30분~3시간 내가 효과적입니다.</strong> 피의자가 이미 출금했으면 지급정지 무의미.',
      },
      {
        question: '플랫폼에서 환불 보증해주나요?',
        answer:
          '<strong>번개장터 "번개페이" 등 에스크로 이용 시 환불 가능.</strong> 직거래·계좌이체는 플랫폼 책임 없음.',
      },
      {
        question: '피의자 신원 모르는데 고소 가능한가요?',
        answer:
          '<strong>계좌번호·전화번호만으로도 가능합니다.</strong> 경찰이 영장으로 가입자 조회.',
      },
      {
        question: '더치트에 계좌 올라와 있으면 고소 안 해도 되나요?',
        answer:
          '<strong>별개입니다.</strong> 더치트는 예방 정보, 처벌·회수는 별도 고소·민사 필요.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 고소장 작성 5가지 증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '사기 신고 후 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 합의 수락 기준', href: '/guide/fraud/fraud-secondhand-settlement-accept-criteria' },
      { label: '소액 사기 민사 절차', href: '/guide/fraud/fraud-small-amount-civil-procedure' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 2. fraud / used-car-odometer-rollback ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-odometer-rollback',
    keyword: '중고차 주행거리 조작 사기',
    questionKeyword: '중고차 주행거리 조작 당했을 때 환불 어떻게 받나요?',
    ctaKeyword: '주행거리 조작 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 사기 환불·고소 절차 | 로앤가이드',
      description:
        '중고차 구매 후 주행거리 조작 사실을 알게 됐을 때 환불·계약 취소·형사 고소까지 밟아야 할 순서와 증거 수집 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>5만km라고 해서 산 중고차를 정비소에 맡겼더니 "15만km 이상 주행 흔적"이라는 답을 들으면 당황스럽죠. 단순 분쟁을 넘어 형법 제347조 사기죄와 자동차관리법 제80조 위반이 동시에 성립하는 사안입니다. 퍼포먼스 체크·차량등록원부·정비이력부 3가지만 확보해도 계약 취소와 고소를 동시에 진행할 수 있습니다.</p>',
    sections: [
      {
        title: '조작 의심 신호 — 구매 후 7일 내 확인',
        content:
          '<p><strong style="color:#1e3a5f">자동차관리법상 허위 주행거리 표시는 3년 이하 징역·3천만 원 이하 벌금 대상입니다.</strong></p>\n<ul>\n<li><strong>자동차365 조회</strong> — 국토부 자동차365(car365.go.kr) 실주행거리 이력 무료 조회.</li>\n<li><strong>정비이력부</strong> — 교통안전공단 정비이력 조회, 직전 점검 주행거리와 판매 시점 대비.</li>\n<li><strong>보험 수리 기록</strong> — 카히스토리·카구루에서 사고·부품 교체 이력 확인.</li>\n<li><strong>차량 내 흔적</strong> — 페달 마모·운전석 쿠션 꺼짐·타이어 상태가 표기 km와 불일치.</li>\n<li><strong>7일 기한</strong> — 자동차관리법 시행규칙, 7일 이내 환불 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자동차365 조회는 무료이고 즉시 조회되므로 구매 전 필수 확인 단계입니다.</blockquote>',
      },
      {
        title: '계약 취소 — 매매상사 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">자동차관리법 시행규칙 제120조에 따라 표시·광고와 다르면 환불 또는 수리비 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>내용증명</strong> — 계약 취소·환불 요구서 우체국 발송, 7일 이내 답변 요구.</li>\n<li><strong>자동차매매업 조합</strong> — 매매조합에 분쟁조정 신청, 가입보증금 1천만 원 한도 보상.</li>\n<li><strong>한국소비자원</strong> — 1372 분쟁조정 무료, 30~60일 결정.</li>\n<li><strong>계약금 반환</strong> — 매매상사·딜러 공동 책임, 카드결제 시 카드사 챠지백 신청.</li>\n<li><strong>수리비 보상</strong> — 주행거리 조작으로 인한 재정비 비용 전액 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 계약 취소 사유·환불 가능 범위를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사 고소 — 관할 경찰서 제출',
        content:
          '<p><strong style="color:#1e3a5f">사기죄와 자동차관리법 위반은 별개 죄이므로 병행 고소 가능합니다.</strong></p>\n<ul>\n<li><strong>형법 제347조 사기</strong> — 10년 이하 징역 또는 2천만 원 이하 벌금.</li>\n<li><strong>자동차관리법 제80조</strong> — 허위 주행거리 표시, 3년 이하 징역 또는 3천만 원 이하 벌금.</li>\n<li><strong>필요 증거</strong> — 매매계약서, 판매 광고 캡처, 자동차365 조회 결과, 정비업체 소견서.</li>\n<li><strong>판매자 다수 피해</strong> — 자동차매매조합 문의 또는 자동차365 신고 이력 조회.</li>\n<li><strong>공소시효</strong> — 사기 10년, 자동차관리법 5년, 조작 시점부터 기산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매자가 동일 수법으로 다른 피해자 있으면 상습사기로 가중, 합의 성사율 상승.</blockquote>',
      },
      {
        title: '민사 소송 — 손해배상 청구',
        content:
          '<p><strong style="color:#1e3a5f">민법 제110조 사기 취소권 또는 제750조 불법행위에 근거해 시세 차액·수리비·위자료 청구.</strong></p>\n<ul>\n<li><strong>시세 차액</strong> — 표기 km 시세 - 실제 km 시세, 카이즈유·KB중고차시세 기준.</li>\n<li><strong>수리비</strong> — 주행거리 조작으로 발생한 부품 조기 교체비, 정비업체 견적서.</li>\n<li><strong>위자료</strong> — 정신적 피해 100~500만 원, 판례상 중형급 사기 기준.</li>\n<li><strong>지연이자</strong> — 소장 송달일부터 연 12%(소송촉진법), 이전은 연 5%.</li>\n<li><strong>변호사비용</strong> — 승소 시 전부 또는 일부 상대방 부담(민사소송법 제98조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 민사 소멸시효 불법행위 3년(민법 제766조), 조작 사실 안 날부터 빠르게 진행.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄와 법령 변경 면소 사례',
        summary:
          '대법원 2025도17027 사건(대법원, 2026.01.15 선고)에서 법원은 차량가액이 소득인정액으로 산입되는 자동차 사용 관련 사기 공소사실에서 보건복지부고시가 개정되어 형이 폐지된 경우 면소 판결을 해야 한다고 판시했습니다. 사기 성립과 처벌 요건이 법령 변경으로 달라질 수 있음을 보여주는 사례입니다.',
        takeaway:
          '자동차 관련 사기 고소 시 적용 법령의 최신 개정 여부까지 확인하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '계약서에 "현상 인도"라고 적혀 있어도 환불 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 자동차관리법상 주행거리 허위 표시는 약관 무관 환불 사유.',
      },
      {
        question: '딜러 없이 개인 직거래인데 어떻게 하나요?',
        answer:
          '<strong>형사 고소와 민사 소송만 가능합니다.</strong> 매매조합 보상 불가, 판매자 개인재산만 대상.',
      },
      {
        question: '자동차365 조회 결과와 실제가 다를 때는요?',
        answer:
          '<strong>정비소 진단서 + 자동차365 조회 내역을 증거로 제출하면 입증됩니다.</strong>',
      },
      {
        question: '매매상사 폐업했으면 어디에 청구하나요?',
        answer:
          '<strong>매매조합 보증금 1천만 원 한도 보상 청구 가능합니다.</strong>',
      },
      {
        question: '수리비만 청구해도 되나요 아니면 전부 환불이 나아요?',
        answer:
          '<strong>차량 가치 훼손도 따라 선택.</strong> 수리 후 시세 20% 이상 하락이면 전부 환불 유리.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 고소장 작성 5가지 증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '중고거래 사기 합의 수락 기준', href: '/guide/fraud/fraud-secondhand-settlement-accept-criteria' },
      { label: '사기 민사·형사 순서', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '사기 신고 후 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
    ],
  },

  // ─── 3. fraud / subscription-autorenewal-deceptive ───
  {
    domain: 'fraud',
    slug: 'fraud-subscription-autorenewal-deceptive',
    keyword: '자동결제 해지 불가 사기',
    questionKeyword: '구독 서비스 해지했는데 계속 결제되는데 어떻게 하나요?',
    ctaKeyword: '자동결제 환불 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자동결제 해지 불가 환불 4단계 정리 | 로앤가이드',
      description:
        '구독 서비스·OTT 해지 요청했는데 계속 결제되거나 해지 버튼을 숨겨 놓은 경우 환불과 신고 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"7일 무료체험" 누른 뒤 해지하려는데 해지 메뉴가 숨겨져 있거나, 고객센터 응답이 3주째 없어 매월 9,900원씩 빠져나가는 경험은 흔합니다. 전자상거래법 제17조는 소비자가 원할 때 언제든 해지할 수 있도록 규정하지만, 업체가 기만적 UI로 해지를 어렵게 하면 과징금·형사처벌 대상입니다.</p>',
    sections: [
      {
        title: '다크패턴 유형 — 해지 방해 5가지',
        content:
          '<p><strong style="color:#1e3a5f">공정거래위원회는 2024년 기준 다크패턴 과태료 최대 500만 원까지 부과합니다.</strong></p>\n<ul>\n<li><strong>해지 버튼 숨김</strong> — 메뉴 3단계 이상 들어가야 나오는 경우, 전자상거래법 제17조 위반.</li>\n<li><strong>고객센터 전용</strong> — 전화·이메일만 해지, 통화 대기 1시간 이상.</li>\n<li><strong>연장 체크박스 기본값</strong> — "자동연장에 동의합니다" 기본 체크.</li>\n<li><strong>환불 거부 약관</strong> — "사용 시작 후 환불 불가", 전자상거래법상 무효.</li>\n<li><strong>해지 후 재결제</strong> — 해지 확인 문자 있어도 시스템 오류로 재결제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "해지 불가" 약관은 전자상거래법 제35조에 따라 무효, 사업자 책임입니다.</blockquote>',
      },
      {
        title: '환불 청구 — 3단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">카드사 챠지백 → 업체 환불 청구 → 공정위 신고 순으로 진행하면 회수율 80% 이상.</strong></p>\n<ul>\n<li><strong>카드사 챠지백</strong> — 결제일로부터 120일 이내, 카드사 민원실 신청서 제출.</li>\n<li><strong>업체 내용증명</strong> — 해지 요청 시점·결제 내역 명시, 7일 이내 환불 요구.</li>\n<li><strong>1372 신고</strong> — 공정거래위원회 1372 소비자상담센터, 전자상거래법 위반 접수.</li>\n<li><strong>소비자원 분쟁조정</strong> — 30~60일 결정, 무료, 법적 구속력 있음.</li>\n<li><strong>간편결제 취소</strong> — 카카오페이·네이버페이 자체 고객센터 환불 절차 별도.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 자동결제 환불 가능성과 신고 경로를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '집단 신고 — 상습업체 대응',
        content:
          '<p><strong style="color:#1e3a5f">동일 업체 피해자 10명 이상 규합 시 집단 분쟁조정·집단소송 가능성 열립니다.</strong></p>\n<ul>\n<li><strong>집단분쟁조정</strong> — 한국소비자원, 피해자 50명 이상 시 자동 개시.</li>\n<li><strong>공정위 직권조사</strong> — 1372 동일 사유 50건 이상 접수 시 직권조사 전환.</li>\n<li><strong>증거 공통화</strong> — 결제 내역·해지 요청 기록·환불 거부 답변 엑셀 정리.</li>\n<li><strong>민사 공동소송</strong> — 피해자 3인 이상 공동원고, 소액심판 병합 가능.</li>\n<li><strong>기자 제보</strong> — 소비자 고발·MBC PD수첩 등, 여론 압박으로 환불 촉진.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 네이버 카페·커뮤니티에 동일 피해자 규합, 공동 민원 제출 시 조사 우선순위 상승.</blockquote>',
      },
      {
        title: '재발 방지 — 자동결제 관리 3가지',
        content:
          '<p><strong style="color:#1e3a5f">카드·간편결제 자동결제 목록 월 1회 점검이 가장 확실한 예방입니다.</strong></p>\n<ul>\n<li><strong>카드사 조회</strong> — 각 카드사 앱 "자동납부 관리" 메뉴, 모든 등록 건 표시.</li>\n<li><strong>간편결제 정리</strong> — 카카오페이·네이버페이·토스 "구독·정기결제" 별도 관리.</li>\n<li><strong>가상계좌·문화상품권</strong> — 무료체험 시 사용, 카드 정보 노출 차단.</li>\n<li><strong>해지 증거 보관</strong> — 해지 확인 이메일·SMS를 6개월 이상 보관.</li>\n<li><strong>앱 삭제 ≠ 해지</strong> — 앱 지워도 자동결제 유지, 가능한 한 별도 해지 절차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 네이버플러스·쿠팡와우 등 대형 업체도 해지 버튼 숨김 논란 있음, 정기 점검 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전자정보 압수수색 적법성과 사기 성립',
        summary:
          '대법원 2022도11923 사건(대법원, 2025.08.14 선고)에서 법원은 혐의사실 관련성 구분 없이 휴대전화 저장 전자정보를 엑셀파일로 생성·저장하는 방식의 압수수색은 위법하며, 그로 인한 증거는 사기 공소사실 유죄 증거로 쓸 수 없다고 판시했습니다. 디지털 결제 관련 사기 사건에서 증거능력 요건이 엄격해졌습니다.',
        takeaway:
          '자동결제 관련 증거는 적법 절차로 수집·보관해야 형사 사건에서 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '해외 OTT인데도 환불받을 수 있나요?',
        answer:
          '<strong>국내 카드로 결제했다면 가능합니다.</strong> 카드사 챠지백 또는 외환 분쟁 절차.',
      },
      {
        question: '무료체험 7일 지났다고 해지 거부하면요?',
        answer:
          '<strong>전자상거래법 제17조 7일 청약철회는 유효합니다.</strong> 업체 거부는 과징금 대상.',
      },
      {
        question: '해지 이메일 답변이 없으면 법적 효력 없나요?',
        answer:
          '<strong>이메일·SMS 자체가 해지 의사표시 증거입니다.</strong> 답변 없어도 해지 효력 발생.',
      },
      {
        question: '1년치 구독 결제했는데 해지하면 전액 환불되나요?',
        answer:
          '<strong>사용한 만큼 공제 후 환불이 원칙입니다.</strong> 10개월 사용이면 2개월치만 환불.',
      },
      {
        question: '카드 해지하면 자동결제 중단되나요?',
        answer:
          '<strong>새 카드로 자동 갱신되는 경우 있습니다.</strong> 업체 측 해지 절차 가능한 한 병행.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '전자상거래 사기 대응 절차', href: '/guide/fraud/ecommerce-fraud-response-procedure' },
      { label: '사기 민사·형사 순서', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
      { label: '사기 합의 수락 기준', href: '/guide/fraud/fraud-secondhand-settlement-accept-criteria' },
      { label: '소액 사기 민사 절차', href: '/guide/fraud/fraud-small-amount-civil-procedure' },
      { label: '소비자분쟁조정 신청법', href: '/guide/fraud/consumer-dispute-mediation-apply' },
    ],
  },

  // ─── 4. fraud / concert-ticket-scalping-nonexistent ───
  {
    domain: 'fraud',
    slug: 'fraud-concert-ticket-scalping-nonexistent',
    keyword: '공연 티켓 사기 대응',
    questionKeyword: '콘서트 티켓 중고로 샀는데 가짜였을 때 어떻게 하나요?',
    ctaKeyword: '공연 티켓 사기 회수',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공연 티켓 사기 대응 4단계 회수 전략 | 로앤가이드',
      description:
        '중고 티켓 거래로 10~50만 원 입금했는데 존재하지 않는 좌석이거나 이미 사용된 티켓일 때, 회수·고소 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"예매 실패한 콘서트 티켓 양도" 글에 30만 원을 보냈는데 공연 당일 입장 거부당하면 분노와 허탈감이 몰려옵니다. 티켓 사기는 공연 당일까지 드러나지 않아 지급정지 골든타임 72시간을 놓치기 쉽죠. 정식 예매처 재판매(티켓링크·인터파크 세이프티켓) 이용이 아니면 사실상 에스크로 없는 무방비 거래입니다.</p>',
    sections: [
      {
        title: '즉시 대응 — 공연 당일 현장에서',
        content:
          '<p><strong style="color:#1e3a5f">공연 당일 입장 거부 순간이 증거 확보 골든타임입니다.</strong></p>\n<ul>\n<li><strong>현장 캡처</strong> — 입구 스태프 확인서, "이 티켓 사용 불가" 확인 영상·사진.</li>\n<li><strong>좌석 조회</strong> — 예매처 앱에서 해당 좌석번호 예매자 확인(불일치 증빙).</li>\n<li><strong>112 신고</strong> — 현행범 신고 가능, 판매자 위치 추적 시 긴급체포 가능성.</li>\n<li><strong>은행 지급정지</strong> — 송금 후 72시간 내라면 송금은행 즉시 요청.</li>\n<li><strong>대화 전체 보존</strong> — 판매 광고·입금 확인·판매자 "정품입니다" 발언 캡처.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공연 당일 현장 증빙이 가장 결정적, 직원 확인서 받아두기.</blockquote>',
      },
      {
        title: '증거 확보 — 72시간 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">티켓 사기는 복수 피해자가 흔하므로 공동 고소 가능성을 우선 확인합니다.</strong></p>\n<ul>\n<li><strong>판매자 닉네임·프로필</strong> — 당근·중고나라·트위터 계정 스크린샷.</li>\n<li><strong>공연 티켓 이미지</strong> — 받은 티켓 QR·바코드 캡처, 예매자명 불일치 증빙.</li>\n<li><strong>계좌번호·전화번호</strong> — 피해자 복수 여부 더치트 조회.</li>\n<li><strong>트위터 "사기 주의" 검색</strong> — 동일 공연·동일 판매자 피해 사례 규합.</li>\n<li><strong>공연 주최사 문의</strong> — 해당 좌석 원래 예매자 확인 협조 요청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 티켓 사기 고소 준비 자료와 회수 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공동 고소 — 피해자 규합 효과',
        content:
          '<p><strong style="color:#1e3a5f">티켓 사기는 한 번에 수십 명 피해자가 발생하므로 공동 고소로 수사 우선순위 상승.</strong></p>\n<ul>\n<li><strong>피해자 단톡방</strong> — 트위터·디시 동일 공연 피해 검색, 50명 이상 수집.</li>\n<li><strong>공동 고소장</strong> — 피해자 명단·피해금액 엑셀, 대표 고소인 선임.</li>\n<li><strong>상습사기 가중</strong> — 피해자 10명 이상·피해액 5천만 원 이상이면 특경법.</li>\n<li><strong>언론 제보</strong> — 공연 시즌 보도가치 높아 기자 관심 집중.</li>\n<li><strong>공연 주최사 협력</strong> — 주최사가 피해자 연락처 공유 시 더 빠른 규합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: K-POP 공연 사기는 해외 피해자 많음, 영문 고소장·여행사 협력 필요.</blockquote>',
      },
      {
        title: '회수 전략 — 입장료만이 아니라',
        content:
          '<p><strong style="color:#1e3a5f">티켓 대금 외에 교통비·숙박비·위자료까지 민사 손해배상 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>티켓 대금</strong> — 원금 + 동일 등급 재판매 가격 차액.</li>\n<li><strong>교통·숙박비</strong> — KTX·항공·호텔 영수증 첨부, 직접 손해.</li>\n<li><strong>위자료</strong> — 공연 참석 무산 정신적 피해, 50~200만 원.</li>\n<li><strong>지급명령</strong> — 10만 원대 소액도 지급명령 3주 집행권원 확보.</li>\n<li><strong>배상명령</strong> — 형사 1심 변론 종결 전 제출, 판결문 즉시 집행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 카드결제 했다면 챠지백이 가장 빠르고 확실한 회수 경로.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 컴퓨터사용사기와 친족상도례',
        summary:
          '대법원 2024도19846 사건(대법원, 2025.03.13 선고)에서 법원은 컴퓨터등사용사기 사건에서 친족상도례에 의한 형 면제 여부를 판단할 때 재산상 이익 취득의 상대방을 기준으로 친족 관계 존부를 따져야 한다고 판시했습니다. 디지털·온라인 거래 사기의 처벌 범위를 정리한 사례입니다.',
        takeaway:
          '온라인 티켓 사기도 컴퓨터사용사기로 엄격히 처벌되며, 피해자와 피의자 관계에 따라 처벌 여부가 달라질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '공연 당일 판매자 연락이 두절되면 어디에 신고하나요?',
        answer:
          '<strong>현장에서 112 신고 + 사이버범죄 신고 병행입니다.</strong> 판매자 계좌 추적으로 특정 가능.',
      },
      {
        question: '이미 쓴 티켓을 받았는데 이것도 사기인가요?',
        answer:
          '<strong>네, 기망에 의한 재산 취득으로 형법 제347조 사기 성립.</strong>',
      },
      {
        question: '암표로 산 내 책임도 있나요?',
        answer:
          '<strong>개인 간 양도는 적법합니다.</strong> 판매자 기망이 있었다면 전적 판매자 책임.',
      },
      {
        question: '해외 가수 콘서트 사기도 한국 경찰이 수사하나요?',
        answer:
          '<strong>판매자가 한국인이면 한국에서 처벌 가능합니다.</strong>',
      },
      {
        question: '카드결제 하면 챠지백으로 바로 돌려받나요?',
        answer:
          '<strong>120일 이내 신청 시 가능, 에스크로·결제 후 미이행 사유 제출.</strong>',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 고소장 작성 5가지 증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '기프티콘 재판매 사기 대응', href: '/guide/fraud/fraud-gift-card-resale-scam-response' },
      { label: '보이스피싱 지급정지 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
      { label: '사기 민사·형사 순서', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 5. fraud / loan-fee-advance-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-fee-advance-scam',
    keyword: '대출 수수료 선입금 사기',
    questionKeyword: '대출 받으려고 선입금했는데 연락 두절됐어요',
    ctaKeyword: '대출 사기 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대출 수수료 선입금 사기 회수 절차 | 로앤가이드',
      description:
        '대출 심사 명목으로 보증금·수수료를 선입금한 뒤 연락이 끊겼을 때 지급정지·고소·환급 절차를 72시간 안에 지금 확인하세요.',
    },
    intro:
      '<p>"신용등급 낮아도 당일 대출 가능, 수수료 30만 원만 선입금"이라는 문자에 혹해서 송금했다가 연락이 끊기는 피해가 매년 수천 건 발생합니다. 전형적 보이스피싱형 대출사기는 전기통신금융사기 피해방지특별법(통신사기피해환급법)으로 피해금 환급 절차가 열려 있습니다. 30분~72시간이 회수의 생사를 가릅니다.</p>',
    sections: [
      {
        title: '즉시 지급정지 — 30분 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">송금 30분 이내 지급정지 성공률이 가장 높고, 72시간 넘으면 회수 거의 불가능합니다.</strong></p>\n<ul>\n<li><strong>은행 콜센터</strong> — 송금은행 24시간 고객센터, "전기통신금융사기" 신고로 즉시 정지.</li>\n<li><strong>112 신고</strong> — 경찰 신고 시 자동으로 지급정지 연계 시스템 작동.</li>\n<li><strong>1332 신고</strong> — 금융감독원 24시간 상담, 지급정지 및 피해구제 절차 안내.</li>\n<li><strong>모바일뱅킹 자체 신고</strong> — 각 은행 앱 "보이스피싱 신고" 버튼, 즉시 접수.</li>\n<li><strong>피의자 추가 연락</strong> — "돈 돌려준다"는 추가 연락 받지 말고 원칙적으로 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한 번 송금하면 추가 송금 요구가 가능한 한 옵니다. 절대 응하지 말고 신고부터.</blockquote>',
      },
      {
        title: '피해금 환급 — 통신사기피해환급법',
        content:
          '<p><strong style="color:#1e3a5f">통신사기피해환급법 제3조에 따라 남은 잔액이 있으면 환급 절차로 회수 가능합니다.</strong></p>\n<ul>\n<li><strong>환급 요건</strong> — 대포통장 사용 + 피해신고 + 잔액 존재.</li>\n<li><strong>신청 기한</strong> — 지급정지 후 2개월 이내 채권소멸 개시 절차.</li>\n<li><strong>필요 서류</strong> — 피해구제신청서, 통장 사본, 신분증, 경찰 신고접수증.</li>\n<li><strong>처리 기간</strong> — 2~4개월, 잔액 비율에 따라 피해자별 안분.</li>\n<li><strong>회수율</strong> — 즉시 지급정지 시 평균 30~70% 회수, 24시간 지나면 10% 미만.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 피해금 환급 신청 절차와 회수 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사 고소 — 보이스피싱 전담 수사',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원·경찰청 합동 보이스피싱 전담팀이 가동되므로 전문 수사가 이뤄집니다.</strong></p>\n<ul>\n<li><strong>사이버범죄 신고</strong> — ecrm.police.go.kr 온라인 접수, 24시간 가능.</li>\n<li><strong>대포통장 계좌주</strong> — 전자금융거래법 제6조 위반, 3년 이하 징역.</li>\n<li><strong>총책·콜센터</strong> — 특경법 상습사기·조직적 범죄로 가중처벌.</li>\n<li><strong>해외 조직</strong> — 인터폴 공조, 중국·동남아 기반 조직 다수.</li>\n<li><strong>공소시효</strong> — 일반 사기 10년, 5억 원 이상 특경법 15년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카카오톡·오픈채팅 대화 전체 백업, 대화상대 프로필·닉네임 변경 전 캡처.</blockquote>',
      },
      {
        title: '재발 방지 — 합법 대출 확인법',
        content:
          '<p><strong style="color:#1e3a5f">금융위원회 등록 대부업체만 합법, 미등록 업체는 100% 사기 또는 불법 대부업입니다.</strong></p>\n<ul>\n<li><strong>금융소비자 정보포털</strong> — 파인(fine.fss.or.kr), 등록 업체 검색.</li>\n<li><strong>선입금 요구 의심</strong> — 정상 대출은 선입금 일체 없음, 모든 비용은 대출금에서 공제.</li>\n<li><strong>신분증 사본 전달 금지</strong> — 대포통장·명의도용에 악용, 사본만 요구해도 사기.</li>\n<li><strong>원격조종 앱 설치 금지</strong> — 팀뷰어·애니데스크 요청은 100% 사기.</li>\n<li><strong>문자 링크 클릭 금지</strong> — 은행 앱 사칭 악성 APK 설치 유도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "금감원 직원입니다"는 100% 사칭. 금감원은 전화로 계좌이체 지시하지 않습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대포통장 운영자 처벌',
        summary:
          '창원지법 2025고합87 사건(창원지법, 2025.05.29 선고)에서 법원은 전기통신금융사기 피해 계좌 명의인·운영자에 대해 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법 위반으로 실형을 선고했습니다. 대포통장 제공·운영만으로도 주요 처벌 대상임을 확인한 사례입니다.',
        takeaway:
          '대출사기 피해금이 입금된 계좌주도 형사 책임을 지므로, 수사 개시 시 계좌주부터 특정해야 합니다.',
      },
    ],
    faq: [
      {
        question: '선입금한 수수료가 소액이어도 신고하나요?',
        answer:
          '<strong>금액 불문 가능한 한 신고하세요.</strong> 동일 수법 피해자 다수면 조직범죄 수사 연결.',
      },
      {
        question: '피해금 환급 신청하면 전액 돌아오나요?',
        answer:
          '<strong>잔액 비율에 따른 안분 환급입니다.</strong> 즉시 신고 시 30~70%, 지연 시 10% 미만.',
      },
      {
        question: '신분증 사본 보냈는데 어떻게 해야 하나요?',
        answer:
          '<strong>즉시 주민등록증 재발급 + 신용조회 차단입니다.</strong> 올크레딧·나이스에서 차단 신청.',
      },
      {
        question: '원격조종 앱 설치했으면 통장 털리나요?',
        answer:
          '<strong>즉시 인터넷뱅킹 공인인증서 폐기 + 앱 삭제 + 은행 비번 변경입니다.</strong>',
      },
      {
        question: '카드대출도 선입금 요구하면 사기인가요?',
        answer:
          '<strong>100% 사기로 검토될 수 있습니다.</strong> 모든 금융사는 선입금 요구하지 않습니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 지급정지 절차', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
      { label: '사기 고소장 작성 5가지 증거', href: '/guide/fraud/fraud-complaint-5-evidence-items' },
      { label: '사기 민사·형사 순서', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
      { label: '사기 신고 후 수사 절차', href: '/guide/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기죄 공소시효 기간표', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ─── 6. traffic-accident / cyclist-severe-injury-liability ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-cyclist-severe-injury-liability',
    keyword: '자전거 충돌 중상 책임',
    questionKeyword: '차랑 자전거 충돌로 중상 입었는데 책임비율 어떻게 정해지나요?',
    ctaKeyword: '자전거 사고 책임비율 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '자전거 충돌 중상 사고 책임비율 기준 | 로앤가이드',
      description:
        '자동차와 자전거 사고에서 중상을 입었을 때 과실비율과 보상 범위, 합의금 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>자전거 라이딩 중 좌회전 차량에 부딪혀 전치 12주 진단을 받으면 보험사와 과실비율 싸움이 시작됩니다. 자동차 대 자전거 사고는 "자동차가 약자 보호 의무 있다"는 일반론이 있지만, 자전거의 역주행·무신호 진입 시 자전거 과실이 30~60%까지 인정될 수 있습니다. 중상 여부에 따라 교통사고처리특례법 제3조 12대 중과실 적용도 달라집니다.</p>',
    sections: [
      {
        title: '과실비율 기준 — 6가지 상황별',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 과실비율 인정기준표가 출발점, 법원은 이를 조정합니다.</strong></p>\n<ul>\n<li><strong>직진 차 vs 역주행 자전거</strong> — 차 20% : 자전거 80%.</li>\n<li><strong>좌회전 차 vs 직진 자전거</strong> — 차 70% : 자전거 30%.</li>\n<li><strong>횡단보도 자전거 탑승</strong> — 차 70% : 자전거 30%(탑승은 보행자 아님).</li>\n<li><strong>주차장 내 사고</strong> — 차 80% : 자전거 20%(저속 주의의무).</li>\n<li><strong>야간·무반사판</strong> — 자전거 과실 10~20% 가산.</li>\n<li><strong>음주 라이딩</strong> — 자전거 과실 30% 이상 가산(도로교통법 제44조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거도 도로교통법상 "차"로 분류, 음주·신호위반 시 과실 상당 부분 인정.</blockquote>',
      },
      {
        title: '보상 항목 — 중상 시 보상 범위',
        content:
          '<p><strong style="color:#1e3a5f">전치 3주 이상 중상이면 치료비·합의금·후유장해까지 3단계 보상 가능합니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 보험 한도 내 전액, 비급여 일부 제외.</li>\n<li><strong>휴업손해</strong> — 일평균 수입 × 입원일수, 최대 85% 인정.</li>\n<li><strong>위자료</strong> — 입원 1일 1만 원, 중상 시 500~3,000만 원.</li>\n<li><strong>후유장해</strong> — 장해등급 1~14급, 노동능력 상실률 5~100%.</li>\n<li><strong>개호비</strong> — 중상 와병 시 간병인 실비 또는 일당 기준 산정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 과실비율과 예상 합의금을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '운전자 형사책임 — 12대 중과실 여부',
        content:
          '<p><strong style="color:#1e3a5f">자전거와 사고도 중상이면 교특법 제3조 12대 중과실 적용 시 합의 불문 처벌.</strong></p>\n<ul>\n<li><strong>신호위반</strong> — 적색 신호 진입 사고, 처벌 확정.</li>\n<li><strong>중앙선 침범</strong> — 차선 침범 후 자전거 충격 시 적용.</li>\n<li><strong>속도위반 20km/h 초과</strong> — 도심 50km/h 구간 70km/h 이상.</li>\n<li><strong>횡단보도 사고</strong> — 자전거 탑승 상태여도 운전자 주의의무.</li>\n<li><strong>중상(전치 8주 이상)</strong> — 12대 중과실 외 일반 사고도 형사 입건 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중상이면 보험 처리만 아니라 형사 합의도 별도 진행, 합의금 수준 달라짐.</blockquote>',
      },
      {
        title: '합의 전략 — 보험사·피의자 협상',
        content:
          '<p><strong style="color:#1e3a5f">보험사 제시액의 1.5~2배까지 협상 가능, 중상일수록 법률 자문 필수.</strong></p>\n<ul>\n<li><strong>보험사 제시액 거부</strong> — 1차 제시는 최저선, 협상·재감정 가능한 한 요구.</li>\n<li><strong>후유장해 진단</strong> — 치료 종결 6개월 후 장해진단서 발급, 합의금 상승.</li>\n<li><strong>형사합의금 별도</strong> — 운전자 처벌불원 대가, 200~1,500만 원.</li>\n<li><strong>변호사 선임</strong> — 중상·후유장해 시 필수, 성공보수 10~20%.</li>\n<li><strong>민사 소송</strong> — 합의 결렬 시 제기, 치료 종결 후 소장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서에 "이후 어떠한 청구도 하지 않음" 부제소 특약 있으면 후유장해도 추가 청구 불가.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유턴 차량 vs 직진 오토바이 무죄',
        summary:
          '대구지법 2024고합568 사건(대구지법, 2025.01.14 선고)에서 법원은 왕복 7차선 상시유턴구역에서 유턴하던 차량과 반대차로 신호위반·과속·지정차로 위반 오토바이 사고에 대해, 운전자에게 업무상 주의의무 위반을 인정하기 어렵다며 무죄를 선고했습니다. 상대방 과실이 뚜렷하면 운전자 형사책임이 부정될 수 있음을 보여주는 사례입니다.',
        takeaway:
          '자전거·오토바이 쪽 신호위반·속도위반이 명확하면 운전자 형사책임 면할 수 있으므로 블랙박스·CCTV 확보가 관건입니다.',
      },
    ],
    faq: [
      {
        question: '자전거 탑승자가 횡단보도 건너다 사고 나면 어떻게 되나요?',
        answer:
          '<strong>자전거는 "차"이므로 횡단 시 내려서 끌고 가야 보행자로 보호됩니다.</strong> 탑승 시 차 대 차 사고.',
      },
      {
        question: '자전거 쪽 음주였으면 보상 못 받나요?',
        answer:
          '<strong>과실 30~50% 이상 잡히면 보상액 크게 줄어듭니다.</strong> 중상 시에도 부분 보상.',
      },
      {
        question: '자동차 보험으로 자전거 쪽 치료비 처리되나요?',
        answer:
          '<strong>대인배상Ⅰ(의무보험)으로 치료비 전액 처리됩니다.</strong> 과실 있어도 기본보장.',
      },
      {
        question: '운전자가 12대 중과실 아니면 형사처벌 없나요?',
        answer:
          '<strong>중상 또는 사망이면 형사 입건 가능합니다.</strong> 합의로 종결 또는 약식기소.',
      },
      {
        question: '후유장해 진단 언제 받아야 하나요?',
        answer:
          '<strong>치료 종결 6개월 이후 가능합니다.</strong> 조기 합의 시 후유장해 추가 청구 어려움.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-guide' },
      { label: '중상 사고 합의금 산정법', href: '/guide/traffic-accident/severe-injury-settlement-calculation' },
      { label: '12대 중과실 처벌 정리', href: '/guide/traffic-accident/12-serious-negligence-types' },
      { label: '후유장해 진단 절차', href: '/guide/traffic-accident/permanent-disability-diagnosis-procedure' },
      { label: '교통사고 형사합의금 시세', href: '/guide/traffic-accident/criminal-settlement-amount-standard' },
    ],
  },

  // ─── 7. traffic-accident / no-blackbox-proof-dispute ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-no-blackbox-proof-dispute',
    keyword: '블랙박스 없는 사고 입증',
    questionKeyword: '블랙박스 없는데 교통사고 과실 어떻게 입증하나요?',
    ctaKeyword: '블랙박스 없이 입증 전략',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '블랙박스 없는 사고 과실 입증 4단계 | 로앤가이드',
      description:
        '블랙박스 미장착 교통사고에서 과실비율·피해보상을 인정받기 위한 CCTV·목격자·현장사진 수집 순서를 지금 확인하세요.',
    },
    intro:
      '<p>블랙박스 없이 사고가 나면 양쪽이 상대방 과실을 주장하며 50:50으로 정리되는 경우가 많습니다. 이럴 때는 상대방 블랙박스·CCTV·현장 사진·목격자 진술 4가지를 얼마나 빠르게 확보하느냐가 과실비율을 10~30% 바꿉니다. 사고 직후 72시간 안에 증거 수집이 끝나야 보험사 심의에 반영됩니다.</p>',
    sections: [
      {
        title: 'CCTV 확보 — 72시간 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">도로 CCTV는 보존 기간이 30일 이내, 민간은 1~7일로 매우 짧습니다.</strong></p>\n<ul>\n<li><strong>공공 CCTV</strong> — 관할 지자체·경찰서 민원실, 공문 발송 필요.</li>\n<li><strong>국도·고속도로</strong> — 국토부 도로공사 종합지사, 30일 보존.</li>\n<li><strong>상가·건물</strong> — 사고 지점 500m 내 상가 사장 직접 요청, 1~7일 보존.</li>\n<li><strong>버스·택시 블랙박스</strong> — 차량번호 확인 후 회사에 공문 요청, 30일 보존.</li>\n<li><strong>아파트·주차장</strong> — 관리사무소에 보존 요청, 7~30일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: CCTV 요청서에 "향후 형사·민사 증거 목적" 명시하면 보존 기간 연장 가능.</blockquote>',
      },
      {
        title: '목격자 진술 — 4가지 확보법',
        content:
          '<p><strong style="color:#1e3a5f">목격자 1명 진술은 블랙박스 50% 대체 효과, 법원·보험사 모두 인정합니다.</strong></p>\n<ul>\n<li><strong>즉시 연락처 확보</strong> — 현장에서 이름·연락처·주민번호 뒷자리 제외 기록.</li>\n<li><strong>진술서 작성</strong> — 사고 날짜·시간·위치·본 내용, 서명 날인.</li>\n<li><strong>목격자 직군</strong> — 배달라이더·택시기사 등 전문직 진술 신뢰도 높음.</li>\n<li><strong>뒤따르던 차량</strong> — 차량 번호 기억나면 경찰 추적 의뢰 가능.</li>\n<li><strong>보행자 증언</strong> — 보도 근처 보행자, CCTV에 함께 찍혀 있으면 더 강력.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 블랙박스 없는 사고 입증 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '현장 사진 — 보험사 심의 가점',
        content:
          '<p><strong style="color:#1e3a5f">파손 부위·스키드마크·차량 각도만 잘 찍어도 과실 10~20% 뒤집힙니다.</strong></p>\n<ul>\n<li><strong>전체 구도</strong> — 10m 이상 떨어져 사고 차량 2대 위치·방향 촬영.</li>\n<li><strong>파손 부위</strong> — 충돌 지점 근접 촬영, 충돌 각도 유추 가능.</li>\n<li><strong>스키드마크</strong> — 제동 흔적 길이·위치, 속도 추정 증거.</li>\n<li><strong>신호등·표지판</strong> — 사고 지점의 신호·표지 포함 촬영.</li>\n<li><strong>날씨·노면 상태</strong> — 우천·빙판·포트홀 있으면 과실 참작 사유.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경찰 출동 전 사진 30장 이상 찍어두면 보험사 심의 시 강력한 증거.</blockquote>',
      },
      {
        title: '분쟁조정 — 손보협회 심의 청구',
        content:
          '<p><strong style="color:#1e3a5f">보험사 합의 결렬 시 손해보험협회 구상금분쟁심의위원회에 심의 청구.</strong></p>\n<ul>\n<li><strong>신청 시점</strong> — 보험사 과실 결정 통보 후 14일 이내.</li>\n<li><strong>필요 서류</strong> — 사고경위서, CCTV·사진·목격자 진술서.</li>\n<li><strong>처리 기간</strong> — 30~60일, 무료 심의.</li>\n<li><strong>결정 구속력</strong> — 양 보험사 간 구속력, 개인 소송권은 별도 유지.</li>\n<li><strong>민사 소송</strong> — 심의 결과 불복 시 법원 소송, 판결 우선.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 분쟁조정 기각되어도 민사 소송 가능, 단 증거 더 두텁게 준비해야 승소.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 블랙박스 녹취 증거의 힘',
        summary:
          '서울중앙지법 2014가단5354441 사건(서울중앙지법, 2017.03.08 선고)에서 법원은 사고 후 혈중알코올농도 측정 실패에도, 사고 직전 블랙박스 녹취된 대화·음성·호흡수 감정, 주행속도와 편측위치 최대편차 등 간접 증거를 종합해 음주상태를 추인, 자기차량손해보험 면책을 인정했습니다. 직접 증거 없이 간접 증거로 입증 가능함을 보여줍니다.',
        takeaway:
          '블랙박스 없어도 여러 간접 증거(CCTV·목격자·현장 흔적)를 조합하면 과실·음주 등 사실관계 입증이 가능합니다.',
      },
    ],
    faq: [
      {
        question: 'CCTV 요청은 경찰 통해서만 가능한가요?',
        answer:
          '<strong>개인도 민원 신청 가능합니다.</strong> 다만 보존 기간 짧아 경찰 공문이 빠름.',
      },
      {
        question: '목격자 연락처만 받고 진술서 못 받으면 어떻게 하나요?',
        answer:
          '<strong>나중에 보험사·경찰이 전화로 확인 가능합니다.</strong> 단 직접 진술서가 신뢰도 최고.',
      },
      {
        question: '상대방 블랙박스 볼 수 있나요?',
        answer:
          '<strong>경찰 수사 과정에서 확보 가능합니다.</strong> 개인 청구는 거부될 가능성 높음.',
      },
      {
        question: '핸드폰 녹음·녹화도 증거가 되나요?',
        answer:
          '<strong>가능합니다.</strong> 당사자 간 녹음은 불법도청 아님, 보험사 심의에 제출 가능.',
      },
      {
        question: '사고 며칠 후 CCTV 찾아도 되나요?',
        answer:
          '<strong>3일 이내 권장, 7일 넘으면 대부분 덮어쓰기됩니다.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 CCTV 확보 순서', href: '/guide/traffic-accident/cctv-evidence-acquisition' },
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-guide' },
      { label: '손보협회 분쟁심의 신청법', href: '/guide/traffic-accident/insurance-dispute-committee-apply' },
      { label: '사고 직후 현장 대응 체크리스트', href: '/guide/traffic-accident/scene-response-checklist' },
      { label: '교통사고 목격자 진술서 양식', href: '/guide/traffic-accident/witness-statement-template' },
    ],
  },

  // ─── 8. traffic-accident / parking-lot-door-ding ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-parking-lot-door-ding',
    keyword: '주차장 문콕 보험처리',
    questionKeyword: '주차장에서 문콕 당했는데 보험처리 어떻게 하나요?',
    ctaKeyword: '문콕 사고 보험 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '주차장 문콕 보험처리 합의 4단계 | 로앤가이드',
      description:
        '주차장 문콕 피해·가해 상황에서 자차보험 처리·직접합의·경찰 신고 중 유리한 경로를 지금 확인하세요.',
    },
    intro:
      '<p>마트 주차장에서 차 문을 열었는데 옆 차를 살짝 찍었거나, 반대로 내 차에 문콕 자국이 있을 때 "이걸 보험 처리해야 하나" 고민되죠. 수리비 10~30만 원 소액이면 자차보험 할증 탓에 직접 합의가 유리하지만, 상대방 잠수·CCTV 없는 경우는 뺑소니(도로교통법 제54조) 문제로 번질 수 있습니다.</p>',
    sections: [
      {
        title: '수리비 시세 — 부위별 금액',
        content:
          '<p><strong style="color:#1e3a5f">수리비에 따라 보험 vs 직접합의 판단이 달라집니다.</strong></p>\n<ul>\n<li><strong>도어 스크래치(5~10cm)</strong> — 부분도색 10~20만 원.</li>\n<li><strong>찌그러짐 소</strong> — PDR(무도색 복원) 15~30만 원.</li>\n<li><strong>도어 전체 교체</strong> — 중형차 50~150만 원, 수입차 200~500만 원.</li>\n<li><strong>자차보험 할증</strong> — 물적사고 10% 할인 손실 + 3년간 할증, 평균 30~60만 원.</li>\n<li><strong>직접합의 손익</strong> — 수리비 50만 원 이하면 할증보다 현금합의가 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수리비 50만 원 기준, 이하면 현금합의 / 이상이면 보험처리가 유리.</blockquote>',
      },
      {
        title: '보험처리 절차 — 자차 vs 대물',
        content:
          '<p><strong style="color:#1e3a5f">내 차 자차보험, 상대 차 대물배상 경로 중 과실에 따라 선택.</strong></p>\n<ul>\n<li><strong>내 과실 100%</strong> — 자차보험으로 상대 차 수리 + 내 차 자기부담금 30만 원.</li>\n<li><strong>상대 과실 100%</strong> — 상대 대물배상으로 내 차 수리, 할증 없음.</li>\n<li><strong>쌍방 과실</strong> — 과실 비율만큼 상호 보상.</li>\n<li><strong>무보험 상대</strong> — 직접 손해배상 청구, 민사 소액심판.</li>\n<li><strong>자차 없을 때</strong> — 상대가 과실 있어야만 수리 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 문콕 사고 보험·합의 선택지를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '직접합의 — 3가지 주의점',
        content:
          '<p><strong style="color:#1e3a5f">현금합의 시 합의서 작성 안 하면 나중에 추가 청구 위험.</strong></p>\n<ul>\n<li><strong>합의서 필수</strong> — 사고일·수리비·지급 완료일·"이후 일체 청구 않음" 문구.</li>\n<li><strong>견적서 2~3곳</strong> — 정비소 여러 곳 견적 후 중간값으로 합의.</li>\n<li><strong>계좌이체 증거</strong> — 현금보다 계좌이체 + "○○ 문콕 합의금" 메모.</li>\n<li><strong>사진 공유</strong> — 합의 전후 파손 상태, 양측 핸드폰 저장.</li>\n<li><strong>서로 보험사 연락 금지</strong> — 합의 완료 후 한쪽이 보험 청구하면 사기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서 2부 작성, 서명·날인 후 각자 보관. 소액도 증거 남겨야 추후 분쟁 방지.</blockquote>',
      },
      {
        title: '뺑소니 의심 — 상대 잠수 시',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제54조 사고 후 조치 불이행은 형사처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>뺑소니 성립 요건</strong> — 인적피해 없이도 물적피해 + 미조치 시 형사 입건.</li>\n<li><strong>CCTV 확보</strong> — 주차장·주변 상가 CCTV 72시간 내 요청.</li>\n<li><strong>차량번호 추적</strong> — 경찰 신고 후 차적 조회로 가해자 특정.</li>\n<li><strong>처벌</strong> — 물적피해 뺑소니 5년 이하 금고·1,500만 원 이하 벌금.</li>\n<li><strong>보험 처리</strong> — 가해자 특정 후 상대 대물로 처리, 가해자 미특정 시 자차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 내가 살짝 찍고 연락처 안 남긴 채 자리 뜨면 뺑소니 성립, 가능한 한 연락처 남길 것.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주차장·횡단보도 보호의무 강화',
        summary:
          '서울동부지법 2019노1470 사건(서울동부지법, 2020.06.11 선고)에서 법원은 주차된 차량으로 시야가 확보되지 않은 횡단보도에서 보행자 사고를 낸 운전자에 대해, 도로교통법 제27조 제1항 횡단보도 보행자 보호의무 위반을 인정해 원심 공소기각을 파기했습니다. 주차장·저속 구간에서도 운전자 주의의무가 강하게 인정됨을 보여주는 사례입니다.',
        takeaway:
          '주차장 내 사고도 도로교통법상 주의의무가 엄격히 적용되므로, 소액이라도 사고 신고·연락처 남기기가 필수입니다.',
      },
    ],
    faq: [
      {
        question: '주차장에 CCTV 없으면 가해자 못 잡나요?',
        answer:
          '<strong>주변 상가·도로 CCTV로 추적 가능합니다.</strong> 경찰 신고 시 집중 수사.',
      },
      {
        question: '문콕 수리비 10만 원인데 보험처리가 나을까요?',
        answer:
          '<strong>자차 할증 30만 원 이상이면 현금합의가 유리합니다.</strong>',
      },
      {
        question: '상대방이 보험으로 하자는데 현금합의 요구해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 다만 상대 동의 필수, 합의서 작성으로 마무리.',
      },
      {
        question: '뺑소니 신고하면 바로 상대방 처벌되나요?',
        answer:
          '<strong>입건 후 재판·벌금 절차, 수개월 소요됩니다.</strong>',
      },
      {
        question: '주차된 내 차가 문콕 피해인데 보험 있으면 끝인가요?',
        answer:
          '<strong>가해자 특정 못 하면 자차로 처리 후 할증 감수.</strong> 특정 시 상대 대물로.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 자차보험 할증 기준', href: '/guide/traffic-accident/insurance-premium-increase-standard' },
      { label: '물적피해 뺑소니 처벌 정리', href: '/guide/traffic-accident/property-damage-hit-and-run-punishment' },
      { label: '사고 합의서 작성 템플릿', href: '/guide/traffic-accident/settlement-agreement-template' },
      { label: '주차장 사고 과실비율 기준', href: '/guide/traffic-accident/parking-lot-accident-fault-ratio' },
      { label: '교통사고 CCTV 확보 순서', href: '/guide/traffic-accident/cctv-evidence-acquisition' },
    ],
  },

  // ─── 9. traffic-accident / pet-hit-civil-claim ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pet-hit-civil-claim',
    keyword: '반려동물 교통사고 손해배상',
    questionKeyword: '차로 반려견을 쳤을 때 얼마나 배상하나요?',
    ctaKeyword: '반려동물 사고 배상 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '반려동물 교통사고 손해배상 4가지 기준 | 로앤가이드',
      description:
        '차량이 반려견·반려묘를 친 경우 수의치료비·교환가치·위자료 산정 기준과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>산책 중 목줄을 벗어난 강아지가 도로로 튀어 나와 차에 치였을 때, 운전자와 견주 모두 난감합니다. 법적으로 반려동물은 민법상 "물건"이지만, 가족 같은 존재로 위자료가 인정된 판례가 누적되고 있습니다. 과실비율·수의치료비·위자료 3가지를 동시에 검토해야 합니다.</p>',
    sections: [
      {
        title: '과실비율 기준 — 4가지 상황',
        content:
          '<p><strong style="color:#1e3a5f">반려동물의 통제 여부가 과실비율의 가장 큰 변수입니다.</strong></p>\n<ul>\n<li><strong>목줄 없이 도로 진입</strong> — 견주 70~90% 과실.</li>\n<li><strong>목줄 착용·갑자기 이탈</strong> — 견주 40~60% 과실.</li>\n<li><strong>공원·보도에서 튀어나옴</strong> — 견주 50% : 운전자 50%.</li>\n<li><strong>야간·무조명 지역</strong> — 운전자 과실 10~20% 가산.</li>\n<li><strong>주택가 저속 구간</strong> — 운전자 주의의무 강화, 과실 가산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 동물보호법상 목줄·인식표 의무 준수 여부가 과실 판단의 핵심.</blockquote>',
      },
      {
        title: '수의치료비 — 청구 범위',
        content:
          '<p><strong style="color:#1e3a5f">수의치료비는 실비 기준, 견주가 의료보험 가입했으면 본인부담만 청구.</strong></p>\n<ul>\n<li><strong>응급수술</strong> — 골절·장기손상 200~500만 원.</li>\n<li><strong>입원비</strong> — 1일 5~15만 원, 입원 1주 기준 50만 원대.</li>\n<li><strong>약제·재활</strong> — 월 20~50만 원, 3~6개월 이어지기도.</li>\n<li><strong>교환가치 한도</strong> — 법원은 수의치료비가 반려동물 시세를 크게 넘으면 일부만 인정.</li>\n<li><strong>영수증·진단서</strong> — 동물병원 세부내역서 필수 첨부.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 반려동물 사고 배상 범위와 과실 비율을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '위자료 — 반려인 정신적 피해',
        content:
          '<p><strong style="color:#1e3a5f">반려동물 사망·중상 시 100~500만 원 위자료가 실무 시세입니다.</strong></p>\n<ul>\n<li><strong>즉사·사망</strong> — 위자료 300~500만 원, 과실비율 적용.</li>\n<li><strong>중상·후유증</strong> — 100~300만 원.</li>\n<li><strong>경상</strong> — 50만 원 내외.</li>\n<li><strong>가족 구성원 수</strong> — 함께 산 기간 길수록 가산.</li>\n<li><strong>입양·실명 등 세부 관계</strong> — 판례상 참작 사유.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위자료는 법원 재량 폭이 크므로 함께 산 기간·사진·치료 과정을 구체적으로 제출.</blockquote>',
      },
      {
        title: '청구 절차 — 보험·민사',
        content:
          '<p><strong style="color:#1e3a5f">운전자 대물배상 또는 견주 책임보험·민사 소송 경로.</strong></p>\n<ul>\n<li><strong>운전자 대물배상</strong> — 반려동물도 "물건"이므로 대물 처리 가능.</li>\n<li><strong>견주 책임보험</strong> — 애견 보험·일상배상책임보험 가입 시 보상.</li>\n<li><strong>운전자 민사 청구</strong> — 차량 수리비는 견주 과실 시 별도 청구.</li>\n<li><strong>소액심판</strong> — 3천만 원 이하 소액은 1회 변론 판결.</li>\n<li><strong>지급명령</strong> — 이의 없으면 14일 후 확정, 인지대 저렴.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 운전자 형사 처벌은 원칙 없음, 단 동물학대 고의 있으면 동물보호법 위반.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기부담금 대위 범위 정리',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방 과실 교통사고로 자차보험 자기부담금 상당액을 보상받지 못한 피보험자들이 상대차량 측에 자기부담금 배상을 청구한 사안에서, 자기부담금 중 제3자 책임비율에 상응하는 금액은 피보험자가 직접 청구할 수 있다고 판시했습니다. 자차 처리 후에도 자기부담금 회수 여지가 있음을 명확히 한 사례입니다.',
        takeaway:
          '반려동물 사고도 자차보험 처리 후 상대 과실 비율만큼 자기부담금·추가손해를 별도 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '운전자가 형사처벌 받나요?',
        answer:
          '<strong>원칙 없습니다.</strong> 다만 고의·폭주 운전은 동물보호법 또는 재물손괴죄.',
      },
      {
        question: '목줄 없이 뛰어나온 강아지도 배상받을 수 있나요?',
        answer:
          '<strong>견주 과실 70~90%라도 운전자 과실 10~30% 남으면 일부 배상.</strong>',
      },
      {
        question: '위자료는 판례에 따라 천차만별인가요?',
        answer:
          '<strong>실무 100~500만 원 폭, 함께 산 기간·가족 관계 상세히 제출 필요.</strong>',
      },
      {
        question: '고양이·토끼 등 소동물도 같나요?',
        answer:
          '<strong>동일 법리 적용되나 시세·위자료는 보통 낮습니다.</strong>',
      },
      {
        question: '운전자 대물 보험 한도 넘으면요?',
        answer:
          '<strong>견주가 운전자에게 초과분 직접 청구 가능합니다.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-guide' },
      { label: '교통사고 위자료 산정 기준', href: '/guide/traffic-accident/pain-and-suffering-calculation' },
      { label: '대물배상 보상 범위', href: '/guide/traffic-accident/property-damage-coverage-scope' },
      { label: '사고 합의서 작성 템플릿', href: '/guide/traffic-accident/settlement-agreement-template' },
      { label: '민사 소액심판 절차', href: '/guide/traffic-accident/small-claims-civil-procedure' },
    ],
  },

  // ─── 10. traffic-accident / elderly-driver-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-elderly-driver-fault',
    keyword: '고령운전자 사고 쟁점',
    questionKeyword: '고령 운전자 사고에서 과실비율이나 처벌이 더 엄격한가요?',
    ctaKeyword: '고령운전자 사고 쟁점 정리',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '고령운전자 교통사고 쟁점 4가지 | 로앤가이드',
      description:
        '65세 이상 고령 운전자 사고에서 과실비율·면허·형사책임이 일반 사고와 어떻게 다른지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"할아버지가 액셀과 브레이크를 혼동해서" 같은 뉴스가 반복되면서 고령 운전자 사고의 형사·민사 책임이 더 엄격해지는 흐름입니다. 도로교통법 개정으로 75세 이상 조건부 면허, 65세 이상 수시적성검사 주기 단축 등이 시행되고 있어, 단순 과실을 넘는 주의의무 위반 여부가 쟁점이 됩니다.</p>',
    sections: [
      {
        title: '면허 규정 — 나이대별 의무',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 개정으로 고령 운전자 면허 관리가 강화되고 있습니다.</strong></p>\n<ul>\n<li><strong>65~74세</strong> — 적성검사 주기 5년, 고령운전자 표지 부착 권장.</li>\n<li><strong>75세 이상</strong> — 적성검사 주기 3년, 교통안전교육 필수(2시간).</li>\n<li><strong>치매 선별검사</strong> — 75세 이상 적성검사 시 인지기능검사 의무.</li>\n<li><strong>조건부 면허</strong> — 주간 운전·속도 제한 등 조건 부과.</li>\n<li><strong>자진 반납</strong> — 지자체별 인센티브(10~30만 원 교통카드).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적성검사 불합격·인지기능 미달 시 면허 취소, 재취득 제한.</blockquote>',
      },
      {
        title: '과실비율 — 일반 사고와 차이',
        content:
          '<p><strong style="color:#1e3a5f">고령 운전자라는 사실만으로 과실 가산은 없으나, 주의의무 불이행 시 가산 가능.</strong></p>\n<ul>\n<li><strong>기본 과실비율</strong> — 고령이라고 더 불리하지 않음.</li>\n<li><strong>복용 약물</strong> — 졸음 유발 약물 복용 후 운전은 과실 10~20% 가산.</li>\n<li><strong>지병 미신고</strong> — 심장·뇌질환 미신고 운전은 과실 가산.</li>\n<li><strong>페달 오조작</strong> — 급발진 주장 시 국과수 감정, 운전자 100% 과실 추정.</li>\n<li><strong>야간·우천</strong> — 시력 저하 고려 추가 주의의무.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 고령 운전자 사고 과실·처벌 쟁점을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사책임 — 양형 참작 사유',
        content:
          '<p><strong style="color:#1e3a5f">고령은 양형 감경·가중 모두 가능한 참작 사유입니다.</strong></p>\n<ul>\n<li><strong>감경 요인</strong> — 초범·반성·합의·건강 악화 시 감경.</li>\n<li><strong>가중 요인</strong> — 반복 사고·지병 숨기고 운전·사망 결과 시 가중.</li>\n<li><strong>교특법 12대 중과실</strong> — 고령·일반 동일 기준 적용.</li>\n<li><strong>집행유예 가능성</strong> — 중상·사망 사고도 합의 + 건강상태 고려 시 집유.</li>\n<li><strong>피해자 합의</strong> — 형사합의금 300~3,000만 원, 양형 결정적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 고령 운전자라는 사실 자체는 유리·불리 양면, 구체적 상황이 핵심.</blockquote>',
      },
      {
        title: '피해자 측 대응 — 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">고령 운전자 사고는 증거 확보와 신속 합의가 핵심입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV</strong> — 페달 오조작 주장 시 국과수 감정 요청.</li>\n<li><strong>운전자 병력 조회</strong> — 지병·약물 복용 기록, 과실 가중 사유.</li>\n<li><strong>보험 한도 초과 시</strong> — 운전자 개인 재산 추적, 고령이라 부동산 많을 수 있음.</li>\n<li><strong>책임보험만 가입</strong> — 대인Ⅰ·대물만 있으면 한도 낮음, 개인 청구 병행.</li>\n<li><strong>형사합의 타이밍</strong> — 1심 판결 전이 협상력 최고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 고령 운전자가 실수 인정하고 합의 적극적이면 감경, 피해자는 충분한 합의금 받기 쉬움.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상과실 인과관계 증명 엄격',
        summary:
          '대법원 2024도9443 사건(대법원, 2025.05.15 선고)에서 법원은 고령 환자에게 금기 약물을 투여한 의사의 업무상과실치상 사건에서, 과실이 인정되더라도 인과관계가 합리적 의심 여지 없이 증명되지 않으면 유죄로 단정할 수 없다고 판시했습니다. 업무상과실치사상죄 일반의 증명 기준을 엄격히 한 사례입니다.',
        takeaway:
          '고령 운전자 사고도 업무상과실과 피해 결과의 인과관계가 엄격 증명되어야 유죄 성립하므로, 감정·증거 수집이 결정적입니다.',
      },
    ],
    faq: [
      {
        question: '75세 이상인데 면허 반납해야 하나요?',
        answer:
          '<strong>의무 아니고 자진 반납입니다.</strong> 지자체별 인센티브(교통카드 10~30만 원).',
      },
      {
        question: '고령이라서 형사 처벌 감경되나요?',
        answer:
          '<strong>건강상태·반성 참작 시 감경 가능, 반복 사고는 오히려 가중.</strong>',
      },
      {
        question: '페달 오조작 주장하면 급발진으로 인정되나요?',
        answer:
          '<strong>국과수 감정 결과 차량 결함 입증되어야 급발진 인정.</strong> 대부분 운전자 과실.',
      },
      {
        question: '고령 운전자 사고 합의금 시세는요?',
        answer:
          '<strong>일반 사고와 동일 기준입니다.</strong> 중상 500~3,000만 원, 사망 3,000~1억 원.',
      },
      {
        question: '운전자 보험에 가족이 포함되나요?',
        answer:
          '<strong>가입 조건 따라 다름, 가족운전자 한정특약 여부 확인.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '고령운전자 면허 규정 정리', href: '/guide/traffic-accident/elderly-driver-license-rules' },
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-guide' },
      { label: '12대 중과실 처벌 정리', href: '/guide/traffic-accident/12-serious-negligence-types' },
      { label: '교통사고 형사합의금 시세', href: '/guide/traffic-accident/criminal-settlement-amount-standard' },
      { label: '급발진 입증 절차', href: '/guide/traffic-accident/sudden-acceleration-proof-procedure' },
    ],
  },
];
