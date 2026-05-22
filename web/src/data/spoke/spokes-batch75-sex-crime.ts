import { SpokePage } from '../spoke-pages';

// batch75 sex-crime — 3개 (2026-05-23) victim-perspective
//
// 고유 존재 이유:
// 1. 출장 마사지·홈케어 서비스 중 약물·만취 이용 준강간 — '준강간 + 약물·만취 + 사후 인지' 트랙
// 2. 요양시설 노인 성폭력 — '요양보호사·입소자 가해 + 보호자 사후 발견 + 신고의무' 트랙
// 3. 수면시술(내시경·치과) 마취 중 성폭력 — '의료 마취 + CCTV·녹음 + 의료법 신뢰관계' 트랙

export const spokesBatch75SexCrime: SpokePage[] = [
  // ─── 1. sex-crime-massage-shop-quasi-rape-victim-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-massage-shop-quasi-rape-victim-track',
    keyword: '마사지샵 준강간 피해',
    questionKeyword: '출장 마사지·홈케어 서비스를 받다가 약물·만취 상태에서 준강간 피해를 사후 인지했어요. 어떻게 대응해야 하나요?',
    ctaKeyword: '마사지샵 준강간 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '마사지샵 준강간 피해 — 5단계 증거·신고 대응 | 로앤가이드',
      description:
        '출장 마사지 중 약물·만취 준강간 피해 시 해바라기센터·증거·고소 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30대 여성 본인은 야간 출장 마사지·홈케어 앱으로 마사지사를 자택에 부른 적이 있었고, 시술 도중 \'몸이 풀리는 차를 한 잔\' 권유받은 후 의식이 흐릿해진 기억만 남았습니다. 다음 날 아침 속옷 위치·신체 상태에서 이상함을 느꼈고, 며칠 뒤 산부인과 검진에서 성관계 흔적이 확인됐어요. 본인은 시술 중 동의한 기억이 없고, 마사지사는 연락이 끊긴 상태입니다. \'사후 인지\'라서 증거가 부족할까봐 신고를 망설이게 되는 상황이에요." 형법 제299조는 \'심신상실·항거불능 상태를 이용한 성관계\'를 준강간으로 규정하고 강간(형법 제297조)과 동일한 법정형(3년 이상 징역)으로 평가하는 영역입니다. 약물·만취 이용 + 사후 인지 + 동의 부재 정황 결합 시 준강간 평가 강한 트랙. 피해자라면 ① 해바라기센터 ② 증거 보존 ③ 형사 고소 ④ 가해자 추적 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 해바라기 ② 증거 ③ 고소 ④ 추적 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 마사지샵 준강간 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 해바라기·증거·고소·추적·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 해바라기센터 (1899-3075)</strong> — 의료·심리·법률 통합 지원.</li>\n<li><strong>② 증거 보존</strong> — 체액·속옷·시술 앱 기록.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제299조 준강간.</li>\n<li><strong>④ 가해자 추적</strong> — 앱 기록·결제·통신 자료.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·치료비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 준강간은 강간과 동일한 법정형(3년 이상). 약물·만취 이용 + 동의 부재 + 사후 인지 결합 시 준강간 평가 가능 영역. 시간이 지나도 신고할 수 있으며 해바라기센터가 첫 단추.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해바라기센터 방문 (즉시·24시간)</strong> — 1899-3075 + 의료·심리 지원.</li>\n<li><strong>2단계 — 증거 보존 (가능한 빠르게)</strong> — 산부인과·체액·속옷·앱 기록.</li>\n<li><strong>3단계 — 경찰 고소 (시효 내)</strong> — 여성청소년수사대.</li>\n<li><strong>4단계 — 가해자 추적·수사 협조 (수개월)</strong> — 앱 회사·통신·결제 자료.</li>\n<li><strong>5단계 — 민사 배상 (시효 별도)</strong> — 위자료·치료비.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">마사지샵 준강간 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·앱·통신 갈래입니다.</strong></p>\n<ul>\n<li><strong>해바라기센터 진료·상담 기록</strong></li>\n<li><strong>산부인과 진단서·체액 채취 기록</strong></li>\n<li><strong>속옷·당시 옷·이불 등 보존품</strong></li>\n<li><strong>출장 마사지 앱 예약·결제 내역</strong></li>\n<li><strong>가해자와 주고받은 메시지·통화 기록</strong></li>\n<li><strong>당일 음료·차 사진·잔여물(있다면)</strong></li>\n<li><strong>본인 진술서·시간순 정리표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사후 인지여도 늦지 않습니다. 해바라기센터(1899-3075)는 24시간 무료 + 증거 채취·심리 상담 + 변호인 연계 제공. 샤워·세탁 전이면 더 좋지만 이미 했어도 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>심신상실·항거불능 입증</strong> — 약물·만취 정황.</li>\n<li><strong>동의 부재</strong> — 의식·기억 부재.</li>\n<li><strong>가해자 신원</strong> — 앱·결제·통신 추적.</li>\n<li><strong>시간 경과</strong> — 사후 인지여도 가능 영역.</li>\n<li><strong>2차 피해 보호</strong> — 비공개·신변보호.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>해바라기센터 1899-3075</strong> (24시간·의료·심리·법률 통합)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>경찰 112·여성청소년수사대</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성범죄 사건 항소심 양형 평가 영역',
        summary:
          '대법원 2025도9717(대법원, 2025.11.06 선고) 영역에서 법원은 성범죄 항소심에서 양형 가중·파기 평가 영역을 다루면서, 피해자 보호와 가해자 양형의 균형 평가가 결정 사정이라고 본 사례 흐름이 있고, 마사지샵 준강간 피해에서도 동의 부재 + 약물·만취 정황 + 피해자 진술 평가가 핵심 트랙입니다.',
        takeaway: '준강간은 강간과 동일 법정형 평가 영역 — 해바라기센터·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사후 며칠 지났는데 신고할 수 있나요?',
        answer:
          '<strong>시간이 지나도 신고할 수 있는 영역입니다.</strong> 해바라기센터에 먼저 연락.',
      },
      {
        question: '샤워·세탁을 다 했는데 증거가 되나요?',
        answer:
          '<strong>다른 증거(앱 기록·통신·진술)로 입증 가능한 영역입니다.</strong> 해바라기 진료 권장.',
      },
      {
        question: '준강간은 강간과 처벌이 다른가요?',
        answer:
          '<strong>형법 제299조는 강간과 동일 법정형 영역입니다.</strong> 3년 이상 징역.',
      },
      {
        question: '가해자 신원을 모르는데 추적 가능한가요?',
        answer:
          '<strong>앱·결제·통신 자료로 수사 협조 영역입니다.</strong> 경찰 신고가 첫 단추.',
      },
      {
        question: '신고하면 가족·직장에 알려질까봐 걱정돼요.',
        answer:
          '<strong>피해자 신변보호·비공개 조치 영역입니다.</strong> 해바라기·변호인 상담 권장.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성폭력 신고에서 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '성폭력 국선변호인', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '성폭력 수사·재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '성범죄 합의·불합의 평가', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },

  // ─── 2. sex-crime-elder-care-facility-victim-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-elder-care-facility-victim-track',
    keyword: '요양시설 노인 성폭력 피해',
    questionKeyword: '80대 부모님이 요양시설에서 요양보호사·다른 입소자에 의해 성폭력 피해를 입은 정황을 보호자가 사후 발견했어요. 어떻게 대응하나요?',
    ctaKeyword: '요양시설 노인 성폭력 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양시설 노인 성폭력 — 5단계 신고·시설 책임 | 로앤가이드',
      description:
        '요양시설 노인 성폭력 사후 발견 시 신고의무·시설 책임·해바라기 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"80대 여성 본인 어머니는 인지능력 저하(경증 치매)로 요양시설에 입소 중이었고, 최근 방문 시 어머니 신체에 멍·상처와 함께 \'무서운 사람\'이라는 반복적인 언급이 있었습니다. 시설 측은 \'낙상·치매 증상\'으로 설명했지만 보호자인 본인이 보기엔 정황이 이상했고, 외부 산부인과 검진에서 성폭력 흔적이 확인됐어요. 가해자가 요양보호사인지 다른 입소자인지 어머니 진술만으로는 명확히 파악이 어려운 상태입니다." 형법 제299조 준강간 + 성폭력처벌법 제6조(장애인·신체적 약자) 결합 평가 가능 영역이고, 노인복지법 제39조의6은 시설 종사자에게 성폭력 신고의무를 부과합니다. 인지능력 저하 + 시설 관리 + 신고의무 결합 시 가해자 + 시설 다중 책임 평가 강한 트랙. 피해자(보호자)라면 ① 해바라기센터 ② 시설 분리·보호 ③ 형사 고소 ④ 시설 책임 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 해바라기 ② 분리 ③ 고소 ④ 시설 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 노인 성폭력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 해바라기·분리·고소·시설·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 해바라기센터 (1899-3075)</strong> — 의료·심리·법률 지원.</li>\n<li><strong>② 시설 분리·보호</strong> — 즉시 분리 + 안전 확보.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제299조 + 성폭력처벌법 제6조.</li>\n<li><strong>④ 시설 책임</strong> — 신고의무 + 관리 책임.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·치료비·돌봄비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인지능력 저하·고령은 \'심신상실·항거불능\' 평가 영역. 노인복지법은 시설 종사자에게 신고의무 부과. 가해자 + 시설 다중 책임 청구 가능 영역. 보호자 신고가 첫 단추.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호·증거·고소·시설 책임 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해바라기센터·산부인과 (즉시)</strong> — 의료 진단 + 증거.</li>\n<li><strong>2단계 — 시설 분리·전원 (1~3일)</strong> — 안전 확보 + 다른 시설 임시 이동.</li>\n<li><strong>3단계 — 경찰 고소·노인보호전문기관 (1주)</strong> — 1577-1389.</li>\n<li><strong>4단계 — 시설 신고의무·관리 책임 (1~3개월)</strong> — 시설 운영자·관할 지자체 책임.</li>\n<li><strong>5단계 — 민사 배상 (시효 별도)</strong> — 가해자 + 시설 공동.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 노인 성폭력 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·시설·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>해바라기·산부인과 진료 기록·진단서</strong></li>\n<li><strong>어머니 신체 사진(멍·상처)·진술 녹취</strong></li>\n<li><strong>요양시설 입소 계약서·돌봄 일지</strong></li>\n<li><strong>시설 CCTV 보존 요청 공문</strong></li>\n<li><strong>요양보호사·입소자 명단·근무표</strong></li>\n<li><strong>시설 신고의무 이행 여부 자료</strong></li>\n<li><strong>관할 지자체·노인보호전문기관 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시설 CCTV는 통상 30~60일 보존이라 즉시 보존 요청 공문 발송이 결정. 노인보호전문기관(1577-1389)은 시설 조사 권한 있음. 시설이 가해자 측을 보호하는 경우 외부 기관 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인지능력 저하 입증</strong> — 진단·항거불능 평가.</li>\n<li><strong>가해자 신원</strong> — 보호사·입소자 분리.</li>\n<li><strong>시설 책임</strong> — 신고의무·관리.</li>\n<li><strong>증거 보존</strong> — CCTV·신체 기록.</li>\n<li><strong>2차 피해 보호</strong> — 분리·전원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>해바라기센터 1899-3075</strong></li>\n<li><strong>노인보호전문기관 1577-1389</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성긴급전화 1366·경찰 112</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성범죄 사건 항소심 양형 평가 영역',
        summary:
          '대법원 2025도9717(대법원, 2025.11.06 선고) 영역에서 법원은 성범죄 항소심에서 양형 가중·파기 평가 영역을 다루면서, 피해자가 신체적·정신적 약자인 경우 보호 평가가 더 강하게 작동하는 사례 흐름이 있고, 요양시설 노인 성폭력에서도 인지능력 저하 + 시설 관리 + 다중 책임 평가가 핵심 트랙입니다.',
        takeaway: '인지능력 저하 + 시설 관리 결합 시 가해자 + 시설 다중 책임 평가 영역 — 해바라기·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '어머니가 기억이 흐릿한데 진술이 증거가 되나요?',
        answer:
          '<strong>전문가 진술·신체 증거 결합 평가 영역입니다.</strong> 해바라기 진료 권장.',
      },
      {
        question: '시설은 \'몰랐다\'고 하는데 책임 없나요?',
        answer:
          '<strong>신고의무·관리책임은 별도 영역입니다.</strong> 노인복지법 제39조의6 검토.',
      },
      {
        question: 'CCTV가 이미 삭제됐다면 어떻게 하나요?',
        answer:
          '<strong>증거인멸 + 다른 정황으로 입증 영역입니다.</strong> 즉시 보존요청 공문 + 경찰 신고.',
      },
      {
        question: '가해자가 다른 입소자일 때도 처벌 가능한가요?',
        answer:
          '<strong>책임능력 평가 후 처벌·치료 분리 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '시설을 옮겨야 하나요?',
        answer:
          '<strong>즉시 분리·전원이 안전 우선 영역입니다.</strong> 지자체·노인보호전문기관 협조.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성폭력 신고에서 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '강제추행 증거·소송', href: '/guide/sex-crime/forced-groping-evidence-lawsuit' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '성폭력 국선변호인', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '성폭력 수사·재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
    ],
  },

  // ─── 3. sex-crime-medical-procedure-anesthesia-victim-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-medical-procedure-anesthesia-victim-track',
    keyword: '의료시술 마취 중 성폭력',
    questionKeyword: '수면내시경·수면치과·수면시술 중 마취 상태에서 성폭력 정황을 사후 인지했어요. CCTV·녹음으로 입증할 수 있나요?',
    ctaKeyword: '의료 마취 중 성폭력 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '의료시술 마취 중 성폭력 — 5단계 CCTV·고소 대응 | 로앤가이드',
      description:
        '수면내시경·수면치과 마취 중 성폭력 피해 시 CCTV·해바라기·의료법 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 동네 의원에서 수면내시경(또는 수면치과 시술)을 받았고, 시술 후 회복실에서 깨어났을 때 속옷·옷차림이 부자연스럽고 신체 일부에 위화감을 느꼈습니다. 시술 당시 보호자 동반 없이 혼자였고, 의료진은 \'마취 후 흔히 있는 어지러움\'으로 설명했지만 본인은 의심을 거두지 못한 상태였어요. 며칠 뒤 다른 병원에서 산부인과 검진을 받았고, 마취 중 신체 접촉을 시사하는 흔적이 확인됐습니다. 의원에 CCTV·녹음 자료 보존을 요청해도 \'개인정보\'를 이유로 거부 중인 상황이에요." 형법 제299조 준강간 + 성폭력처벌법 + 의료법상 신뢰관계 결합 평가 가능 영역이고, 의료기관 CCTV·진료기록은 수사 단계에서 압수수색 대상이 되는 트랙. 피해자라면 ① 해바라기센터 ② CCTV 보존 ③ 형사 고소 ④ 의료법·면허 신고 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 해바라기 ② CCTV ③ 고소 ④ 의료법 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 의료시술 마취 중 성폭력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 해바라기·CCTV·고소·의료법·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 해바라기센터 (1899-3075)</strong> — 의료·심리·법률 지원.</li>\n<li><strong>② CCTV·녹음 보존</strong> — 즉시 보존요청 + 압수수색.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제299조 + 성폭력처벌법.</li>\n<li><strong>④ 의료법·면허 신고</strong> — 보건소·복지부·의사협회.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·치료비·신뢰위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 마취 = 항거불능 상태. 형법 제299조 준강간 평가 영역. 의료인의 신뢰관계 이용 시 가중 사정 평가 가능. CCTV·녹음은 압수수색으로 확보. 면허 신고는 형사와 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·고소·면허 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해바라기·산부인과 (즉시)</strong> — 의료 진단 + 증거 채취.</li>\n<li><strong>2단계 — CCTV 보존요청 공문 (1~3일)</strong> — 의원·시술실·회복실.</li>\n<li><strong>3단계 — 경찰 고소·압수수색 신청 (1주)</strong> — 여성청소년수사대.</li>\n<li><strong>4단계 — 의료법·면허 신고 (1개월)</strong> — 보건소·복지부.</li>\n<li><strong>5단계 — 민사 배상 (시효 별도)</strong> — 의료인·의료기관 공동.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">의료 마취 중 성폭력 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·CCTV·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>해바라기·외부 산부인과 진료 기록·진단서</strong></li>\n<li><strong>시술 진료기록부·마취기록지 사본</strong></li>\n<li><strong>의원 CCTV 보존요청 공문(내용증명)</strong></li>\n<li><strong>시술 당일 결제·예약 내역</strong></li>\n<li><strong>마취 시간·회복실 체류 시간 기록</strong></li>\n<li><strong>본인 진술서·시간순 정리표</strong></li>\n<li><strong>보건소·복지부 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의료기관 CCTV는 보존기간 짧으니(통상 30일) 즉시 내용증명 공문 발송 + 경찰에 압수수색 신청 요청. 진료기록부는 환자 본인 발급 가능. 면허 신고는 형사 결과와 무관하게 진행 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>마취 = 항거불능</strong> — 준강간 평가.</li>\n<li><strong>의료 신뢰관계</strong> — 가중 사정.</li>\n<li><strong>CCTV 확보</strong> — 압수수색.</li>\n<li><strong>의료진 진술</strong> — 회복실·시술실 관찰자.</li>\n<li><strong>면허 신고</strong> — 형사와 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>해바라기센터 1899-3075</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>보건복지부 의료자원과·관할 보건소</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성범죄 사건 검찰 수사 개시 평가 영역',
        summary:
          '대법원 2025도6707(대법원, 2025.09.25 선고) 영역에서 법원은 성범죄 사건 검찰 수사 개시 범위 평가 영역을 다루면서, 피해자 보호·증거 확보·신뢰관계 평가가 결정 사정이라고 본 사례 흐름이 있고, 의료 마취 중 성폭력에서도 항거불능 + 신뢰관계 + CCTV 증거 평가가 핵심 트랙입니다.',
        takeaway: '마취 = 항거불능 + 의료 신뢰관계 평가 영역 — 해바라기·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '마취 중이라 기억이 없는데 신고할 수 있나요?',
        answer:
          '<strong>심신상실·항거불능 = 준강간 평가 영역입니다.</strong> 신체 증거·CCTV로 입증.',
      },
      {
        question: '의원이 CCTV 보존을 거부하는데 어떻게 하나요?',
        answer:
          '<strong>경찰 압수수색 신청 영역입니다.</strong> 내용증명 + 즉시 고소가 결정.',
      },
      {
        question: '의사 면허 박탈도 가능한가요?',
        answer:
          '<strong>형사 결과 별도로 면허 신고 영역입니다.</strong> 보건복지부·관할 보건소.',
      },
      {
        question: '의료기관도 같이 책임지나요?',
        answer:
          '<strong>사용자 책임·관리책임 별도 영역입니다.</strong> 민사 공동청구 가능.',
      },
      {
        question: '진료기록부를 의원이 안 주는데 어떻게 하나요?',
        answer:
          '<strong>의료법상 환자 본인 발급 권리 영역입니다.</strong> 거부 시 보건소 신고.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성폭력 신고에서 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '강제추행 증거·소송', href: '/guide/sex-crime/forced-groping-evidence-lawsuit' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '성폭력 국선변호인', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '성폭력 수사·재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
    ],
  },
];
