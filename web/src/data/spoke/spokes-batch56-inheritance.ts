import { SpokePage } from '../spoke-pages';

// batch56 inheritance — 3개:
// 1. 사실혼 배우자 상속권 부재
// 2. 상속세 분납·연부연납 절차
// 3. 가족 명의신탁 부동산 상속 분쟁
//
// 고유 존재 이유:
// 1. 이 페이지는 5~10년 사실혼 관계가 사망으로 끝난 사실혼 배우자가 상속권 부재 상황에서 재산분할·기여분 + 사실혼 인정 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 상속세 일시 납부가 어려운 상속인이 분납·연부연납 신청 + 물납·납부유예 4가지 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 부모가 자녀 명의로 등기한 부동산이 다른 형제와 분쟁이 된 상황에서 명의신탁 + 진정명의회복 + 상속재산 분쟁 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56Inheritance: SpokePage[] = [
  // ─── 1. inheritance / inheritance-de-facto-spouse-no-right ───
  {
    domain: 'inheritance',
    slug: 'inheritance-de-facto-spouse-no-right',
    keyword: '사실혼 배우자 상속권 재산분할',
    questionKeyword: '7년 사실혼이었는데 배우자가 사망했어요. 상속권이 없다는데 재산은 어떻게 되나요?',
    ctaKeyword: '사실혼 배우자 상속 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사실혼 배우자 상속권 부재 — 4가지 회수 트랙 | 로앤가이드',
      description:
        '사실혼 배우자가 사망 시 상속권은 없지만 재산분할·기여분·동거주택 4가지 회수 트랙이 가능한 영역을 지금 확인하세요.',
    },
    intro:
      '<p>"7년간 사실혼 관계로 함께 살았는데 갑자기 배우자가 사망했어요. 함께 모은 재산이 있고 같이 산 집도 있는데, 사실혼이라 상속권이 없다고 합니다. 모든 재산이 시댁에 가는 건가요?" 사실혼 배우자는 민법 제1003조 상속인에서 제외되는 영역이지만, ① 사실혼 해소(사망)에 따른 재산분할 청구 ② 기여분 청구 ③ 동거주택 임차권 승계 ④ 유족연금·근로복지 등 사회보장 트랙은 가능한 영역입니다. 다만 사실혼 해소 재산분할은 상속인을 상대로 청구해야 하고, 사실혼 인정 자체가 입증 영역이라 동거 자료·가족·지인 인식 자료가 핵심이에요. 사망 후 6개월 이내가 상속세 신고기한이라 빠른 행동이 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 배우자 사망 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산분할·기여분·임차권 승계·사회보장 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 해소 재산분할 (대법원 2022므11027)</strong> — 사실혼이 사망으로 해소된 경우에도 재산분할 청구 가능 영역. 다만 상대방이 사망했으므로 상속인을 상대로 청구.</li>\n<li><strong>② 기여분 청구 (제한적)</strong> — 사실혼 배우자는 상속인이 아니므로 직접 기여분 청구 어려움. 다만 재산분할 트랙에서 기여도 평가에 반영.</li>\n<li><strong>③ 동거주택 임차권 승계 (주택임대차보호법 제9조)</strong> — 사실혼 배우자가 동거 주택의 임차권을 승계 가능. 상속인 부재 시 단독 승계, 있으면 공동 승계 영역.</li>\n<li><strong>④ 유족연금·사회보장</strong> — 국민연금·공무원연금 등 일부 사회보장에서 사실혼 배우자 유족연금 인정 사례 있음. 신청 트랙 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼 배우자는 상속권 부재이지만 재산분할 + 임차권 승계 + 유족연금 결합 트랙으로 회수 가능성 검토. 사실혼 입증 자료가 모든 트랙의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 사실혼 입증 → 가처분 → 청구 → 강제집행 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시·6개월 내)</strong> — 동거 기간·가족·지인 인식·공동재산·임차계약 자료. 사망 직후 자료 멸실 위험 영역.</li>\n<li><strong>2단계 — 사실혼 입증 자료 정리 (1~2주)</strong> — 결혼식·가족 행사·공동 통장·임대차계약·SNS·카톡.</li>\n<li><strong>3단계 — 가처분·재산명시</strong> — 상속인이 사실혼 배우자 권리 회피 처분 우려 시 부동산·예금 가처분.</li>\n<li><strong>4단계 — 재산분할 청구 (사실혼 해소일 2년 내)</strong> — 가정법원에 상속인 상대 사실혼 해소 재산분할 청구.</li>\n<li><strong>5단계 — 임차권·유족연금 신청</strong> — 동거주택 임차권 승계 + 사회보장 유족연금 별도 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 배우자 4가지 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 인정 자료 + 재산 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>동거 기간 자료</strong> — 임대차계약·전입신고·관리비.</li>\n<li><strong>가족·지인 인식 자료</strong> — 결혼식·가족 행사·SNS.</li>\n<li><strong>공동재산 자료</strong> — 공동 통장·부동산·자동차.</li>\n<li><strong>고인 사망진단서·가족관계증명서</strong> — 상속인 확인.</li>\n<li><strong>임차계약서</strong> — 동거주택 임차권 승계용.</li>\n<li><strong>국민연금·공무원연금 가입 정보</strong> — 유족연금 신청.</li>\n<li><strong>고인 재산 정황</strong> — 부동산·금융자산.</li>\n<li><strong>상속인 정보</strong> — 청구 상대.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼은 부부 모두 살아있을 때보다 사망 후 입증이 훨씬 어려운 영역. 결혼식 사진·가족 행사 영상·고인이 본인을 \'아내·남편\'으로 부른 자료 즉시 백업.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 동거였다" 주장 반박</strong> — 결혼식·가족 인식·공동재산 결합으로 사실혼 입증. 단순 동거 vs 사실혼 구분이 핵심 영역.</li>\n<li><strong>"상속재산은 상속인만의 것" 주장 반박</strong> — 사실혼 중 공동 형성 재산은 재산분할 대상 영역. 명의와 무관.</li>\n<li><strong>"임차권 승계 불가" 주장 반박</strong> — 주택임대차보호법 제9조는 사실혼 배우자 임차권 승계를 명문 인정하는 영역.</li>\n<li><strong>유족연금 신청 별도 트랙</strong> — 국민연금·공무원연금 등은 사실혼 배우자도 유족연금 인정 사례. 각 기관 확인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 상속·사실혼 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>국민연금공단 1355</strong> — 유족연금 신청.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할의 기준시점',
        summary:
          '대법원 2022므11027 사건(대법원, 2024.01.04 선고)에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할 대상 재산과 액수를 정하는 기준시점은 사실혼이 해소된 날이라고 판시했습니다. 사실혼이 사망으로 해소된 경우에도 동일한 법리가 적용되어 사망일이 기준시점이 되며, 사실혼 배우자는 상속인을 상대로 재산분할 청구가 가능한 영역으로 평가될 여지가 있습니다.',
        takeaway: '사실혼 배우자는 상속권 부재이지만 재산분할 + 임차권 승계 + 유족연금 결합 트랙으로 회수 가능한 영역이라, 동거 자료·공동재산 자료를 정리하면 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '혼인신고 안 했어도 7년 살았으면 상속받을 수 있나요?',
        answer:
          '<strong>사실혼 배우자는 직접 상속권 부재 영역입니다.</strong> 다만 재산분할 청구 + 임차권 승계 + 유족연금으로 회수 가능 트랙. 사실혼 입증이 핵심.',
      },
      {
        question: '상속인이 본인을 인정 안 해줘요',
        answer:
          '<strong>사실혼 인정 자료 + 가정법원 청구로 다툴 수 있는 영역입니다.</strong> 결혼식·가족 인식·SNS·공동재산 자료 결합으로 사실혼 입증. 변호사·법률구조공단 132 상담.',
      },
      {
        question: '같이 살던 집에서 쫓겨나게 되나요?',
        answer:
          '<strong>주택임대차보호법 제9조는 사실혼 배우자 임차권 승계를 인정합니다.</strong> 상속인 부재 시 단독 승계, 있으면 공동 승계. 임차권 자료 보존이 핵심.',
      },
      {
        question: '재산분할 청구 기한이 있나요?',
        answer:
          '<strong>사실혼 해소(사망)일로부터 2년 내 청구입니다(민법 제839조의2 준용).</strong> 도과 시 청구권 소멸 영역. 빠른 행동이 안전.',
      },
      {
        question: '국민연금 유족연금 받을 수 있나요?',
        answer:
          '<strong>국민연금은 사실혼 배우자 유족연금 인정 사례가 있습니다.</strong> 국민연금공단 1355 신청 + 사실혼 입증 자료 제출. 공무원연금·사학연금도 별도 트랙.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속 분쟁 시작 가이드', href: '/guide/inheritance/inheritance-dispute-where-to-start' },
      { label: '상속순위·법정상속분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '유족 인정 종류', href: '/guide/inheritance/inheritance-pension-survivor-claim' },
      { label: '재혼 자녀 상속분', href: '/guide/inheritance/inheritance-multiple-marriages-distribution' },
      { label: '상속 후 보호자 협의', href: '/guide/inheritance/inheritance-family-dispute-mediation' },
    ],
  },

  // ─── 2. inheritance / inheritance-tax-installment-procedure ───
  {
    domain: 'inheritance',
    slug: 'inheritance-tax-installment-procedure',
    keyword: '상속세 분납 연부연납 절차',
    questionKeyword: '상속세 5억이 나왔는데 일시 납부 어려워요. 분납·연부연납 가능한가요?',
    ctaKeyword: '상속세 분납 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속세 분납·연부연납 — 4단계 신청 절차 | 로앤가이드',
      description:
        '상속세 일시 납부가 어렵다면 분납·연부연납·물납·납부유예 4가지 트랙 + 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"부모님이 남기신 부동산 가액이 커서 상속세가 5억원 나왔어요. 일시 납부가 어려운데 분납이나 연부연납 가능한가요?" 상속세 일시 납부가 어려운 경우 ① 분납(2회) ② 연부연납(최대 10년) ③ 물납(부동산·유가증권으로 납부) ④ 납부유예 4가지 트랙으로 검토 가능한 영역입니다. 분납은 납부세액 1,000만원 초과 시 50% + 50%로 2회 납부 가능, 연부연납은 2,000만원 초과 시 최대 10년 분할 납부 가능. 가산금(연 1.2%)이 부과되지만 부동산을 급매하지 않아도 되는 트랙이에요. 신고기한(상속개시일로부터 6개월 내) 내 신청해야 하고, 연부연납은 납세담보 제공이 필요합니다.</p>',
    sections: [
      {
        title: 'Q. 상속세 4가지 납부 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 분납·연부연납·물납·납부유예 4단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 분납 (상증세법 제70조)</strong> — 납부세액 1,000만원 초과 시 신고기한 + 2개월 후까지 50% 납부 가능. 추가 가산금 부담 적은 영역.</li>\n<li><strong>② 연부연납 (상증세법 제71조)</strong> — 2,000만원 초과 시 최대 10년(가업상속 등 일부는 더 길게) 분할. 납세담보 + 가산금(연 1.2% 영역) 부과.</li>\n<li><strong>③ 물납 (상증세법 제73조)</strong> — 일정 요건 충족 부동산·유가증권으로 세금 납부. 사전 승인·평가 절차.</li>\n<li><strong>④ 납부유예 (상증세법 제72조의2)</strong> — 가업상속·영농상속 등 특별 사유로 납부유예. 일정 기간 + 사후 추징 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분납·연부연납은 상속세 신고기한(6개월) 내 신청. 신고기한 도과 후에는 가산세 + 분납·연부연납 거부 위험. 빠른 신청이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분납·연부연납 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 세액 산정 → 분납·연부연납 신청 → 담보 제공 → 납부 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산 평가 (즉시)</strong> — 부동산·금융자산·기타 자산 평가. 시가·감정평가·공시가격 등 기준.</li>\n<li><strong>2단계 — 상속세 신고서 + 분납·연부연납 신청서 (사망일 6개월 내)</strong> — 신고기한 내 분납·연부연납 신청 함께 제출. 관할 세무서.</li>\n<li><strong>3단계 — 납세담보 제공 (연부연납 시)</strong> — 부동산 근저당·금융기관 보증·납세보증보험. 세액의 100%~120% 영역.</li>\n<li><strong>4단계 — 세무서 승인</strong> — 분납은 자동 승인 영역, 연부연납은 세무서 심사 후 승인. 1~3개월.</li>\n<li><strong>5단계 — 분할 납부</strong> — 분납: 50% + 50% (2회). 연부연납: 1/n + 가산금 (n년 분할).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속세 분납·연부연납 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속재산 자료 + 신청 서류 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·가족관계증명서</strong> — 상속 개시 입증.</li>\n<li><strong>상속재산 평가서</strong> — 부동산 감정평가·금융자산 잔액증명.</li>\n<li><strong>상속세 신고서</strong> — 세무서 양식.</li>\n<li><strong>분납·연부연납 신청서</strong> — 세무서 양식.</li>\n<li><strong>납세담보 자료 (연부연납)</strong> — 부동산 등기부·근저당설정·보증보험증서.</li>\n<li><strong>상속재산 분할 협의서·심판</strong> — 상속인별 세액 산정.</li>\n<li><strong>상속인 신분 자료</strong> — 주민등록·인감.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연부연납은 가산금 부담이 있으나 부동산 급매보다 유리한 영역. 부동산 가격 하락기에는 급매 시 손실이 더 클 수 있어 연부연납 트랙이 안전.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청 다툼 포인트와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>신고기한 6개월 엄수</strong> — 도과 시 가산세 + 분납·연부연납 거부 위험. 6개월 임박 시 신고만이라도 먼저.</li>\n<li><strong>"가업상속" 특례 활용</strong> — 가업상속 요건 충족 시 연부연납 최대 20년 + 추가 공제. 요건 검토 필수.</li>\n<li><strong>"영농상속" 특례</strong> — 농지·임야 영농 상속 시 별도 특례. 영농 요건 입증.</li>\n<li><strong>물납 거부 위험</strong> — 물납은 사전 승인 + 평가가 까다로워 거부될 수 있는 영역. 분납·연부연납 우선 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>국세청 126</strong> — 상속세 무료 상담.</li>\n<li><strong>한국세무사회 02-585-1561</strong> — 세무사 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 상속 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속세 연부연납 허가 요건과 기속',
        summary:
          '대법원 2003두4973 사건(대법원, 2004.10.28 선고)에서 법원은 구 상속세법상 연부연납의 허가요건을 갖춘 경우 세무서장은 연부연납을 허가하여야 하는 기속(羈束)을 받는다고 판시했습니다(한정 적극). 또한 대법원 2001두3570 사건(대법원, 2002.07.12 선고)은 과세관청이 연부연납 신청에 대해 서면결정을 하지 않은 채 과세처분을 한 것이 위법하지는 않다고 보았습니다. 연부연납 신청은 요건 충족 시 인정되는 영역이지만 절차 이행이 핵심임을 보여주는 사례입니다.',
        takeaway: '상속세 분납·연부연납은 신고기한 내 신청 + 요건 충족이 핵심이라, 상속재산 평가·신청서·납세담보 자료를 정리하면 4가지 납부 트랙이 모두 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '연부연납 가산금이 너무 부담돼요. 다른 방법 없나요?',
        answer:
          '<strong>분납(2회) 트랙이 가산금 부담이 적은 영역입니다.</strong> 1,000만원 초과 시 신고기한 + 2개월 후까지 50% 납부 가능. 분납 후 잔여 부분은 추가 분납 또는 연부연납 검토.',
      },
      {
        question: '물납으로 부동산 자체를 세금으로 낼 수 있나요?',
        answer:
          '<strong>일정 요건 충족 시 가능하지만 사전 승인·평가가 까다로운 영역입니다.</strong> 부동산 시가 + 환가성 평가. 요건 미충족 시 거부될 수 있어, 분납·연부연납 우선 검토.',
      },
      {
        question: '신고기한 6개월 도과했어요. 분납 가능한가요?',
        answer:
          '<strong>가산세 + 분납·연부연납 거부 위험 영역입니다.</strong> 다만 일부 사유(질병·사고 등) 인정 시 일부 구제 가능 사례. 즉시 세무서 상담 + 변호사·세무사 자문.',
      },
      {
        question: '상속포기·한정승인 검토 중인데 분납 신청 가능한가요?',
        answer:
          '<strong>상속포기·한정승인 결정 후 분납 검토 영역입니다.</strong> 상속을 받지 않거나 한정승인 시 상속세 부담 자체가 다른 트랙. 빠른 결정이 핵심.',
      },
      {
        question: '연부연납 도중 자금 사정 호전되면 일시 납부로 변경 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 잔여 세액 일시 납부 + 가산금 종료. 세무서에 변경 신청 + 처리 절차. 가산금 부담 줄이는 트랙으로 활용 가능.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 6개월 신고', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속세 신고기한 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '상속재산 등록 절차', href: '/guide/inheritance/inheritance-registration-procedure-docs' },
      { label: '상속세 가산세 감면', href: '/guide/inheritance/inheritance-tax-late-filing-penalty-relief' },
      { label: '6개월 후 재분할 청구', href: '/guide/inheritance/inheritance-tax-after-6months-redivision-claim' },
    ],
  },

  // ─── 3. inheritance / inheritance-name-trust-recovery-from-heir ───
  {
    domain: 'inheritance',
    slug: 'inheritance-name-trust-recovery-from-heir',
    keyword: '명의신탁 부동산 상속 분쟁',
    questionKeyword: '아버지가 본인 명의로 등기한 부동산을 형이 본인 상속재산이라고 합니다. 다툴 수 있나요?',
    ctaKeyword: '명의신탁 상속 분쟁 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '명의신탁 부동산 상속 분쟁 — 4가지 다툼 트랙 | 로앤가이드',
      description:
        '부모가 자녀 명의로 등기한 부동산이 형제간 상속 분쟁이 됐다면 명의신탁 + 진정명의회복 + 상속재산 분할 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 전 아버지가 \'세금 절감\'을 이유로 본인 명의로 등기한 빌라가 있어요. 아버지가 사망하자 형이 \'그건 아버지가 산 부동산이라 상속재산\'이라며 본인 지분을 요구합니다." 부모가 자녀 명의로 등기한 부동산은 ① 명의신탁(부동산실명법 위반) ② 증여 ③ 자녀 본인 자금 취득 3가지 가능성으로 분기되는 영역입니다. 부동산실명법 위반 명의신탁은 무효라 진정명의회복(본인 또는 상속인) 트랙이 가능하고, 증여라면 자녀 단독 소유. 자금 출처·세금 신고·관리 정황 자료가 결정적이에요. 대법원 2013다218156 판결은 명의신탁자(부모)의 상속인이 명의수탁자(자녀) 상대로 진정명의회복 청구가 가능하다고 판시했습니다.</p>',
    sections: [
      {
        title: 'Q. 명의신탁 상속 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금출처·증여 vs 명의신탁·진정명의회복·상속재산 분할 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자금 출처</strong> — 부동산 취득 자금이 누구의 것이었는지. 부모 자금이면 명의신탁·증여 가능성, 자녀 자금이면 자녀 단독 소유.</li>\n<li><strong>② 증여 vs 명의신탁 구분</strong> — 증여세 신고·자녀의 소유 인식·관리 정황 등으로 판단. 증여라면 자녀 단독 소유 + 증여세 분쟁 영역.</li>\n<li><strong>③ 명의신탁 무효 + 진정명의회복 (대법원 2013다218156)</strong> — 부동산실명법 위반 명의신탁은 무효. 명의신탁자(부모)의 상속인이 명의수탁자(자녀) 상대 진정명의회복 청구 가능.</li>\n<li><strong>④ 상속재산 분할</strong> — 진정명의회복 인정 시 부동산이 상속재산에 편입돼 형제간 분할 대상. 미인정 시 자녀 단독 소유.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자금출처·증여세 신고·관리 정황이 핵심. 자녀가 본인 명의로 부동산을 \'관리·세금 납부\'한 정황이 강하면 증여 추정 영역. 부모가 \'관리·세금\' 정황이면 명의신탁 추정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진정명의회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 자금출처 입증 → 청구 → 변론 → 판결 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 등기부등본·매매계약서·자금 출처 자료·증여세 신고서·부동산 관리 정황.</li>\n<li><strong>2단계 — 자금 출처 입증 자료 정리 (1~2주)</strong> — 매매대금 송금 내역·자녀 소득·부모 소득·세금 신고 이력.</li>\n<li><strong>3단계 — 진정명의회복 청구 (시효 검토)</strong> — 명의수탁자(자녀) 상대로 명의신탁 무효 + 진정명의회복 등기 청구. 청구권자는 명의신탁자(부모) 또는 그 상속인.</li>\n<li><strong>4단계 — 변론·증여 vs 명의신탁 구분</strong> — 자금 출처·관리 정황·세금 신고 종합. 증여로 인정되면 자녀 단독 소유.</li>\n<li><strong>5단계 — 판결·상속재산 분할</strong> — 명의신탁 인정 시 상속재산에 편입되어 형제간 분할. 증여 인정 시 자녀 단독 + 형제는 패소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">명의신탁 상속 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금 자료 + 관리 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>등기부등본·매매계약서</strong> — 취득 시점·매매가·당사자.</li>\n<li><strong>매매대금 송금·자금 출처 자료</strong> — 누구 자금으로 매수.</li>\n<li><strong>증여세 신고서·납부 영수증</strong> — 증여로 처리됐는지.</li>\n<li><strong>부동산 관리 정황</strong> — 임대료·관리비·세금 납부자.</li>\n<li><strong>본인·부모 소득 자료</strong> — 자금 능력 입증.</li>\n<li><strong>가족관계증명서·상속인 정보</strong> — 청구권자 확인.</li>\n<li><strong>다른 형제 상속재산 자료</strong> — 상속재산 분할 산정.</li>\n<li><strong>유언장·증여서 (있다면)</strong> — 증여 의사 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀가 부모 사후 \'세금 정산\'·\'자녀 본인 소유\'로 인식해온 정황 자료(임대 계약·세무 신고)가 강하면 증여 추정 영역. 부모가 사후까지 \'본인 소유\'로 관리한 정황이면 명의신탁 추정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 형제 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인 명의라 단독 소유" 주장 반박</strong> — 자금 출처·관리 정황으로 명의신탁 입증 가능 영역. 명의자체가 단독 소유 결정짓지 않는 사례.</li>\n<li><strong>"증여세 신고 없으면 명의신탁" 주장 부분 인정</strong> — 증여세 신고 부재는 명의신탁 정황이지만 단독 결정 요인 아닌 영역. 종합 판단.</li>\n<li><strong>"부동산실명법 위반이라 자녀가 소유 인정" 주장 반박</strong> — 부동산실명법 위반 명의신탁은 무효이며 명의신탁자 상속인이 진정명의회복 청구 가능 영역(2013다218156).</li>\n<li><strong>시효 주의</strong> — 부당이득반환 시효 10년. 일정 시점 도과 시 청구 어려운 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 상속·부동산 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>국세청 126</strong> — 증여세 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명의신탁자 상속인의 진정명의회복 청구',
        summary:
          '대법원 2013다218156 사건(대법원, 2019.06.20 선고)에서 법원은 부동산 실권리자명의 등기에 관한 법률을 위반하여 무효인 명의신탁약정에 따라 명의수탁자 명의로 등기를 한 경우, 명의신탁자가 명의수탁자를 상대로 그 등기의 말소를 구하는 것이 민법 제746조의 불법원인급여를 이유로 금지되지 않는다고 판시했습니다. 명의신탁자의 상속인도 명의수탁자(또는 그 상속인) 상대로 진정명의회복을 원인으로 한 소유권이전등기 청구가 가능한 영역으로 평가될 여지가 있습니다.',
        takeaway: '명의신탁 부동산 상속 분쟁은 자금 출처 + 증여 vs 명의신탁 구분 + 진정명의회복 결합 영역이라, 매매계약·송금·증여세·관리 정황 자료를 정리하면 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '15년 전 등기인데 시효 도과 아닌가요?',
        answer:
          '<strong>부당이득반환 시효 10년이지만 명의신탁 무효 등기 말소청구는 별도 검토 영역입니다.</strong> 명의신탁자가 등기 말소를 청구하는 권리는 시효 적용 여부 다툼 영역이라, 변호사 자문 필수.',
      },
      {
        question: '증여세 신고 없으면 무조건 명의신탁인가요?',
        answer:
          '<strong>증여세 신고 부재는 정황이지만 단독 결정 요인 아닌 영역입니다.</strong> 자금 출처·관리·증여 의사 종합 판단. 신고 누락이 자녀 책임이 아닐 수도 있는 영역.',
      },
      {
        question: '부동산을 본인 명의로 임대하고 임대료 받았어요',
        answer:
          '<strong>임대 운영·세금 납부 정황은 자녀 단독 소유 정황 자료입니다.</strong> 다만 부모가 임대료를 \'관리\' 받아온 정황이라면 명의신탁 정황으로 평가될 여지 있는 영역.',
      },
      {
        question: '부동산실명법 위반이라 본인 소유 인정 안 되나요?',
        answer:
          '<strong>위반 명의신탁은 무효이므로 명의신탁자(부모) 또는 상속인이 등기 회복 청구 가능 영역입니다.</strong> 자녀 단독 소유 인정은 증여 입증 시에만 가능.',
      },
      {
        question: '진정명의회복 청구 비용은 얼마나 드나요?',
        answer:
          '<strong>인지대·송달료·변호사 비용 영역입니다.</strong> 부동산 가액 + 청구액에 따라 인지대 0.5% 영역. 변호사 자문 + 법률구조공단 132 무료 상담 검토.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-disagreement-court-judgment' },
      { label: '상속재산 분할 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '상속재산 분할 협의서 흠', href: '/guide/inheritance/inheritance-division-agreement-defect-invalidation' },
      { label: '특별기여분 청구', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '유언장 효력 분쟁', href: '/guide/inheritance/inheritance-will-validity-dispute' },
    ],
  },
];
