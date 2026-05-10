import { SpokePage } from '../spoke-pages';

// batch60 assault 3 + child-support 2 + dui 1 = 6개
//
// 고유 존재 이유:
// 1. 이 페이지는 폭행 합의금 산정 다툼에서 피해 정도·전과·재범 여부를 4단계로 점검해 합의 협상 자료를 정리하도록 돕는 페이지다. (기존 settlement-amount-guide/process/standard 와 다른 산정 요소 분기 트랙)
// 2. 이 페이지는 폭행 사건에서 진단서 vs CCTV 증거의 우열 다툼을 4단계로 정리해 가해자 또는 무고 피의자가 증거 신빙성을 변론하도록 돕는 페이지다. (기존 evidence-collection 과 다른 증거 우열 다툼 트랙)
// 3. 이 페이지는 흉기 휴대 폭행(특수폭행) 사안에서 일반 폭행 vs 특수폭행 가중 분기와 위험한 물건 인정 기준을 4단계로 정리하도록 돕는 페이지다.
// 4. 이 페이지는 양육비 일시금으로 합의·지급한 후 추가 양육비 청구 가능성을 사정변경 법리로 4단계 점검하도록 돕는 페이지다. (기존 lump-sum-negotiation 협상과 다른 일시금 후 추가 청구 트랙)
// 5. 이 페이지는 양육비 채무자가 외국에 거주할 때 헤이그 국제아동탈취협약·외국 판결 승인 트랙을 4단계로 정리하도록 돕는 페이지다. (기존 overseas-parent-enforcement 일반 강제집행과 다른 헤이그 협약 특정 트랙)
// 6. 이 페이지는 처음 음주운전에서 면허정지 vs 면허취소 분기를 농도·재량·생계 4단계로 점검해 행정심판 자료를 정리하도록 돕는 페이지다.

export const spokesBatch60AssaultCsDui: SpokePage[] = [
  // ─── 1. assault / assault-settlement-amount-factors-prior-record-injury-degree ───
  {
    domain: 'assault',
    slug: 'assault-settlement-amount-factors-prior-record-injury-degree',
    keyword: '폭행 합의금 산정 피해 정도 전과 재범',
    questionKeyword: '폭행으로 합의 진행 중인데 합의금이 어떻게 산정되나요? 피해 정도와 전과·재범 여부는 어떻게 반영되나요?',
    ctaKeyword: '폭행 합의금 산정 요소 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '폭행 합의금 산정 — 4단계 피해·전과·재범 요소 | 로앤가이드',
      description:
        '폭행 합의금이 어떻게 산정되는지 막막하다면 피해 정도·치료기간·전과·재범 여부 4단계 산정 요소 트랙으로 협상 자료부터 지금 확인하세요.',
    },
    intro:
      '<p>"단순 시비로 폭행이 있었는데 상대가 6주 진단서를 끊고 합의금 1,000만원을 요구해요. 피해 정도가 그 정도인지, 본인 전과·재범 여부가 합의금에 어떻게 반영되는지 막막합니다." 폭행 합의금 산정은 ① 피해 정도(치료 기간·후유증·정신적 피해) ② 전과·재범 여부 ③ 가해자 책임 정도(고의·우발·정당방위 영역) ④ 형사 양형 자료 4단계 요소가 종합 영향 미치는 영역입니다. 형사 합의금은 민사 손해배상과 달리 \'양형 자료\'로 활용되며, 대법원 2025도11886 등 일관된 판례는 \'상해진단서는 유력한 증거이나 객관성·신빙성을 의심할 사정이 있을 때 신중 판단\'이라고 판시해 진단서 자체만으로 합의금 자동 결정 부정 영역. 본인 사안의 객관 자료(블랙박스·CCTV·증인) 정리 + 전과 관계 + 합의 절박성에 따라 협상 폭이 큰 트랙이에요.</p>',
    sections: [
      {
        title: 'Q. 폭행 합의금 산정 4가지 요소 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 피해·전과·책임·양형 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 피해 정도 (치료 기간·후유증)</strong> — 진단 주수·실제 치료 기간·후유증 여부. 진단서만 의존 부정(2025도11886) 영역이라 실치료 기록 종합.</li>\n<li><strong>② 전과·재범 여부</strong> — 동종 전과 + 누범 영역이면 양형 가중. 합의금 협상도 \'합의 없으면 실형\' 압박 영역.</li>\n<li><strong>③ 가해자 책임 정도</strong> — 우발 vs 계획·고의 vs 과실·정당방위 다툼 여부. 책임 작으면 합의금 협상 폭 넓어짐.</li>\n<li><strong>④ 형사 양형 자료 활용</strong> — 합의금은 양형 자료. 합의 + 반성 + 종합보험·치료비 결합 시 형 감경 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합의금은 정해진 금액 아닌 협상 영역. 피해 정도 객관 입증 + 전과 영향 + 책임 다툼 + 양형 활용 4박자 결합. 객관 자료 보유 측에 협상 우위.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 합의 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 협상 → 합의서 → 양형 활용 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시·24~48시간)</strong> — 본인 진술 정리·CCTV·블랙박스·진단서·치료 영수증·증인 진술서.</li>\n<li><strong>2단계 — 변호인 선임 (조사 전)</strong> — 합의 협상 + 형사 변론 동시 트랙. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 합의 협상 (피해자 측)</strong> — 객관 자료 기반 협상. 피해 정도·치료비·후유증 자료 검증 후 적정 범위 제시.</li>\n<li><strong>4단계 — 합의서 작성 (공증 권장)</strong> — 처벌불원·합의금·민형사 종결 명문화. 분할 지급 시 공증 필수.</li>\n<li><strong>5단계 — 양형 자료 제출 (검찰·법원)</strong> — 합의서 + 반성문 + 치료비 영수증 + 종합보험 자료. 형 감경 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">폭행 합의금 4단계 산정 요소를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 자료 + 피해 자료 + 합의 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 진술서·시간대 정리</strong> — 사건 정황 객관화.</li>\n<li><strong>CCTV·블랙박스·현장 사진</strong> — 책임 정도 다툼 자료.</li>\n<li><strong>피해자 진단서·치료 기록</strong> — 피해 정도 검증.</li>\n<li><strong>피해자 실제 치료 영수증</strong> — 진단서 대비 실치료 입증.</li>\n<li><strong>본인 전과 자료</strong> — 초범·동종전과·누범 입증.</li>\n<li><strong>증인 연락처·진술서</strong> — 정황 입증.</li>\n<li><strong>합의서 양식·공증 자료</strong> — 처벌불원·민형사 종결.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서 주수와 실제 치료기간이 다른 경우(2025도11886 등) 실치료 기록·통원 빈도 확인이 합의금 협상에 결정적. 본인이 초범이면 합의금 + 반성문 결합으로 양형 영향 극대화 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"진단서대로 합의금" 주장 검증</strong> — 진단서만 의존 부정(2025도11886). 실제 치료 기간·후유증 자료로 협상 가능.</li>\n<li><strong>"전과 있어 합의 안 하면 실형" 압박 검토</strong> — 전과·재범은 양형 영향 영역이지만 합의 외 다른 자료(반성·치료비)도 결합 영역.</li>\n<li><strong>"우발적·정당방위 영역" 주장</strong> — 책임 정도 다툼 트랙. 객관 자료(CCTV·증인)로 책임 축소 변론.</li>\n<li><strong>합의서 명문화 필수</strong> — 처벌불원·민형사 종결·합의금 분할 지급 명문. 공증 권장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>범죄피해자지원센터 1577-1295</strong> — 피해자 측 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형사사건에서 상해진단서의 증명력 판단 기준',
        summary:
          '대법원 2025도11886 사건(대법원, 2025.12.04 선고)에서 법원은 형사사건에서 상해진단서는 피해자의 진술과 함께 피고인의 범죄사실을 증명하는 유력한 증거가 될 수 있으나, 상해 사실의 존재 및 인과관계 역시 합리적 의심이 없는 정도의 증명에 이르러야 인정 가능하므로 객관성·신빙성을 의심할 사정이 있을 때 증명력을 신중하게 판단해야 한다고 판시했습니다. 특히 상해진단서가 주관적 통증 호소에 의존해 의학적 가능성만으로 발급된 경우 증명력을 따져봐야 한다고 보았습니다. 폭행 합의금 산정에서도 진단서 주수만으로 자동 결정 부정 영역이며, 실제 치료 기록·후유증 자료로 협상이 열리는 트랙으로 평가될 수 있습니다.',
        takeaway: '폭행 합의금 산정은 피해 + 전과 + 책임 + 양형 결합 영역이라, 본인 진술·CCTV·진단서·치료 영수증·증인 자료를 정리하면 4단계 협상 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '진단 6주면 합의금이 1,000만원인가요?',
        answer:
          '<strong>정해진 금액 아닌 협상 영역입니다.</strong> 진단서 주수 ≠ 실치료 기간(2025도11886). 실제 치료 기록·후유증·전과·책임 정도 종합 협상.',
      },
      {
        question: '본인 동종 전과가 있어요',
        answer:
          '<strong>합의금 협상 압박 영역이지만 결정적 아닙니다.</strong> 양형 가중은 사실이나 합의 + 반성 + 치료비 결합으로 형 감경 가능 영역.',
      },
      {
        question: '합의금 분할 지급 가능한가요?',
        answer:
          '<strong>가능 영역이지만 공증 필수입니다.</strong> 분할 지급 + 처벌불원 약정. 미이행 시 양형 자료 무효 위험. 공증 또는 화해 검토.',
      },
      {
        question: '합의했는데 추가로 민사 청구되면?',
        answer:
          '<strong>합의서에 \'민형사 모두 종결\' 명문 필수 영역입니다.</strong> 형사 합의만 한 경우 민사 별도 청구 가능. 합의서 작성 단계 명문화.',
      },
      {
        question: '본인이 무고 주장하면 합의 안 해도 되나요?',
        answer:
          '<strong>객관 자료로 무고 입증 자신 있으면 다툼 영역입니다.</strong> 다만 합의 거부 + 패소 시 양형 가중 위험. 변호사 자문 후 결정.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 합의금 가이드', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 합의 표준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '쌍방폭행 합의금', href: '/guide/assault/assault-mutual-fight-settlement-amount' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
    ],
  },

  // ─── 2. assault / assault-medical-certificate-vs-cctv-evidence-priority ───
  {
    domain: 'assault',
    slug: 'assault-medical-certificate-vs-cctv-evidence-priority',
    keyword: '폭행 진단서 CCTV 증거 우열 다툼',
    questionKeyword: '폭행 고소당했는데 상대가 진단서를 가져왔어요. CCTV 영상이 있으면 진단서를 뒤집을 수 있나요?',
    ctaKeyword: '진단서 CCTV 증거 우열 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '진단서 vs CCTV — 4단계 폭행 증거 우열 다툼 | 로앤가이드',
      description:
        '폭행 사건에서 진단서와 CCTV 증거의 우열을 다투려면 진단서 신빙성·CCTV 정합성·인과관계·양형 4단계 트랙으로 변론 자료부터 지금 확인하세요.',
    },
    intro:
      '<p>"폭행으로 입건됐는데 상대가 \'4주 진단서\'를 가져왔어요. 그런데 본인 측에 CCTV 영상이 있어 \'밀친 정도\'였다는 정황이 있는데 진단서를 뒤집을 수 있을지 막막합니다." 폭행·상해 사안에서 진단서와 CCTV 증거의 우열은 ① 진단서 자체의 신빙성(주관적 통증 의존 영역) ② CCTV·블랙박스의 정합성(시간·각도·해상도) ③ 사건 행위 ↔ 상해 인과관계 ④ 종합 평가에 따른 양형 4단계로 다툼되는 영역입니다. 대법원 2016도15018·2025도11886은 \'상해진단서는 유력한 증거이지만 객관성·신빙성을 의심할 사정이 있을 때 증명력 신중 판단\'이라고 일관 판시해, 진단서 자체만으로 자동 유죄 결정 부정 영역. CCTV·블랙박스 등 객관 영상 자료가 진단서와 모순되면 합리적 의심으로 무죄 또는 죄책 축소 트랙이 열린 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 진단서 vs CCTV 4가지 우열 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서 신빙성·CCTV 정합성·인과관계·양형 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서 신빙성 검증 (대법원 2016도15018·2025도11886)</strong> — 주관적 통증 의존·발급 시점·작성 의사·실제 치료 기록 일치 검증.</li>\n<li><strong>② CCTV·블랙박스 정합성</strong> — 시간 일치·해상도·각도·연속 촬영. 영상이 사건 시각·장소·행위 모두 포착 시 강력 증거.</li>\n<li><strong>③ 행위 ↔ 상해 인과관계</strong> — 영상 속 행위(밀침·일격 정도)와 진단 부상(타박상·골절)이 의학적으로 합치 여부.</li>\n<li><strong>④ 종합 평가 + 양형</strong> — 두 증거 모순 시 합리적 의심 → 무죄·죄책 축소 영역. 양형에도 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진단서가 만능 아닌 영역. CCTV·블랙박스 객관 영상이 진단서와 모순되면 합리적 의심 발생. 행위 정도 ↔ 부상 정도 의학적 합치 다툼이 변론 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 변론 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상 보존 → 변호인 → 진단서 검증 → 모순 변론 → 양형 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상 자료 보존 (즉시·CCTV 7~30일 한정)</strong> — 가게·관공서·차량·아파트 CCTV. 보존 기간 짧아 즉시 요청.</li>\n<li><strong>2단계 — 변호인 선임 (조사 전)</strong> — 진단서 검증 + CCTV 분석 변론 트랙.</li>\n<li><strong>3단계 — 진단서 신빙성 검증 (의료 자문)</strong> — 주관적 통증 비중·실치료 기록·발급 시점·의사 진료 기록 검증.</li>\n<li><strong>4단계 — 모순 변론 (검찰·법원)</strong> — 영상 행위 정도 ↔ 진단 부상 의학적 합치 다툼. 합리적 의심 변론.</li>\n<li><strong>5단계 — 양형 + 합의 결합</strong> — 모순 다툼 + 합의 + 반성 결합. 형 감경·무죄 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진단서 vs CCTV 4단계 우열 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상 자료 + 의료 자료 + 변론 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>주변 CCTV 영상 (24~48시간 내)</strong> — 가게·관공서·아파트 보존 요청.</li>\n<li><strong>차량 블랙박스 영상</strong> — 본인·주변 차량.</li>\n<li><strong>진단서 발급 의료기관 진료 기록</strong> — 실제 치료 기록 대조.</li>\n<li><strong>의료 자문 의견서</strong> — 행위 정도 ↔ 부상 의학적 합치.</li>\n<li><strong>증인 연락처·진술서</strong> — 영상 보강.</li>\n<li><strong>본인 진술서·시간대 기록</strong> — 영상과 합치.</li>\n<li><strong>변호인 의견서·검증 자료</strong> — 법원 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV 보존 기간 짧음(7~30일). 사고 직후 가게·관공서 직접 방문 + 보존 요청서 결정적. 진단서가 사건 이후 며칠 지나서 발급된 경우(2025도11886) 신빙성 다툼 폭 넓어짐.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"진단서가 우선" 주장 반박</strong> — 진단서 자체만으로 결정 부정(2016도15018·2025도11886). 객관 영상이 모순되면 합리적 의심.</li>\n<li><strong>"CCTV 일부만으로 안 됨" 주장 검토</strong> — 영상이 사건 핵심 행위·시간 포착 시 강력 증거. 일부 사각만 있어도 변론 자료.</li>\n<li><strong>의료 자문 적극 활용</strong> — 행위 정도 ↔ 부상 의학적 합치 다툼은 의료 자문 의견서로 보강. 변호사 협조.</li>\n<li><strong>합의 병행 검토</strong> — 다툼 변론 + 합의 시도 병행. 무죄 변론 실패 대비 양형 자료 보강.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>대한의사협회 의료감정</strong> — 의료 자문 (변호사 통한).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력 판단 방법',
        summary:
          '대법원 2016도15018 사건(대법원, 2016.11.25 선고)에서 법원은 형사사건에서 상해진단서는 피해자의 진술과 함께 유력한 증거가 될 수 있으나, 상해 사실의 존재 및 인과관계 역시 합리적 의심이 없는 정도의 증명에 이르러야 인정 가능하므로, 상해진단서의 객관성·신빙성을 의심할 만한 사정이 있을 때 증명력을 신중하게 판단해야 한다고 판시했습니다. 특히 진단서가 주관적 통증 호소에 의존해 의학적 가능성만으로 발급된 경우 진단 일자·작성 일자·발급 경위·통증 내용·진료 기록 등 종합 검토 필요. 폭행 사안에서 CCTV·블랙박스 영상이 진단서와 모순되면 합리적 의심 변론으로 무죄·죄책 축소 트랙이 열리는 영역으로 평가될 수 있습니다.',
        takeaway: '진단서 vs CCTV 우열 다툼은 진단서 신빙성 + 영상 정합성 + 인과관계 + 양형 결합 영역이라, CCTV·진단서 발급 기록·의료 자문·증인 자료를 정리하면 4단계 변론 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: 'CCTV가 진단서를 뒤집을 수 있나요?',
        answer:
          '<strong>합리적 의심 영역에서 가능합니다(2016도15018).</strong> 진단서 자체만으론 자동 인정 부정. 영상 ↔ 진단 부상 의학적 합치 다툼.',
      },
      {
        question: '진단서가 사건 며칠 후 발급됐어요',
        answer:
          '<strong>신빙성 다툼 폭 넓은 영역입니다.</strong> 발급 시점·진료 기록·통증 호소 내용 종합 검증. 변호인 + 의료 자문.',
      },
      {
        question: 'CCTV가 일부만 찍혀 있어요',
        answer:
          '<strong>일부라도 핵심 행위 포착이면 강력 영역입니다.</strong> 시간·각도·해상도 따라 결정. 다른 자료(증인·블랙박스) 결합.',
      },
      {
        question: '의료 자문을 어떻게 받나요?',
        answer:
          '<strong>변호인 통해 진료 기록 검증 의뢰 영역입니다.</strong> 의료감정·진료 기록 분석. 비용 부담 큰 영역이라 합의·종합 전략 검토.',
      },
      {
        question: '진단서·CCTV 둘 다 모순돼도 유죄 가능성?',
        answer:
          '<strong>합리적 의심 영역이라 무죄·죄책 축소 변론 가능 영역입니다.</strong> 의학적 합치 다툼이 핵심. 변호인 적극 변론 필수.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집 절차', href: '/guide/assault/assault-evidence-collection-procedure' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '폭행 과장 부상 다툼', href: '/guide/assault/assault-exaggerated-injury-claim' },
      { label: '폭행 무고 대응', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
    ],
  },

  // ─── 3. assault / assault-armed-special-aggravated-weapon-bring-distinction ───
  {
    domain: 'assault',
    slug: 'assault-armed-special-aggravated-weapon-bring-distinction',
    keyword: '특수폭행 흉기 위험한 물건 가중 분기',
    questionKeyword: '말다툼 중에 손에 든 물건이 있었어요. 이게 일반 폭행인지 특수폭행 가중인지 어떻게 갈리나요?',
    ctaKeyword: '특수폭행 위험한 물건 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '특수폭행 — 4단계 흉기·위험한 물건 가중 분기 | 로앤가이드',
      description:
        '말다툼·시비 중 들고 있던 물건이 \'위험한 물건\'으로 평가되면 특수폭행 가중 영역인지, 일반 폭행과 어떻게 갈리는지 4단계 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"말다툼 중 손에 들고 있던 물건(우산·휴대폰·과일칼)으로 상대를 위협하거나 가격했어요. 이게 일반 폭행(2년 이하)인지 특수폭행(5년 이하·1,000만원 이하)인지 분기점이 막막합니다." 흉기 휴대 폭행은 ① 형법 제261조 특수폭행 (단체 또는 다중의 위력·위험한 물건 휴대) ② \'위험한 물건\' 인정 기준(객관적 위험성·사용 양태) ③ 휴대·이용의 의미 ④ 양형·합의 4단계로 갈리는 영역입니다. 형법 제261조는 \'위험한 물건을 휴대하여 사람을 폭행한 자\'를 5년 이하 또는 1,000만원 이하로 가중 처벌하며, 특수상해(제258조의2)는 1년 이상 10년 이하로 더 가중. 핵심은 \'위험한 물건\' 인정 기준인데, 대법원 2019고합127 등은 \'객관적 위험성 + 실제 사용 양태\' 종합 판단으로 일반 우산·휴대폰도 사용 양태에 따라 위험한 물건 영역으로 평가된 사례가 있어요.</p>',
    sections: [
      {
        title: 'Q. 특수폭행 4가지 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 위험한 물건·휴대·이용·양형 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위험한 물건 인정 기준 (형법 제261조)</strong> — 흉기 외에도 \'사람의 생명·신체에 위해 가할 수 있는 물건\'. 객관적 위험성 + 사용 양태 종합.</li>\n<li><strong>② 휴대 vs 이용 영역</strong> — 단순 소지(휴대)도 가중. 실제 사용(이용)이면 더 강한 가중. 위협만 해도 휴대 가중 영역.</li>\n<li><strong>③ 일반 물건 사용 양태 다툼</strong> — 우산·휴대폰·과일칼 등 일상 물건도 사용 양태(머리 가격·찌름)에 따라 위험한 물건 인정 영역.</li>\n<li><strong>④ 양형·합의·정당방위</strong> — 가중 영역이지만 합의·반성·정당방위 다툼 가능. 무죄 사례(2019고합127)도 존재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 흉기 외 일반 물건도 사용 양태에 따라 특수폭행 영역. 휴대만 해도 가중. 정당방위 다툼·합의·반성 자료가 죄책 축소·무죄 변론 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 죄명 다툼 → 합의·정당방위 → 양형 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — CCTV·블랙박스·증인·물건 사진·사용 양태 진술.</li>\n<li><strong>2단계 — 변호인 선임 (조사 전)</strong> — 특수폭행 vs 일반 폭행 죄명 다툼 + 합의 트랙.</li>\n<li><strong>3단계 — 죄명 다툼 (검찰·법원)</strong> — 위험한 물건 인정·휴대 vs 이용 다툼. 객관 자료 종합 변론.</li>\n<li><strong>4단계 — 합의·정당방위·반성 결합</strong> — 정당방위 다툼 + 합의 + 반성문 + 종합보험. 무죄 또는 형 감경.</li>\n<li><strong>5단계 — 형사 본안 + 양형</strong> — 합의서·반성문·전과 자료 종합. 가중 영역이라도 감경 폭 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">특수폭행 4단계 분기를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상 자료 + 물건 자료 + 변론 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>CCTV·블랙박스 영상</strong> — 사용 양태 입증.</li>\n<li><strong>물건 자체 사진·크기·재질</strong> — 위험한 물건 다툼 자료.</li>\n<li><strong>증인 진술서·연락처</strong> — 사용 양태·위협 정도 입증.</li>\n<li><strong>본인 진술서·시간대 기록</strong> — 우발·정당방위 정황.</li>\n<li><strong>피해자 진단서·치료 기록</strong> — 실제 부상 정도.</li>\n<li><strong>합의서·반성문</strong> — 양형 자료.</li>\n<li><strong>본인 전과·자녀·생계 자료</strong> — 양형 감경 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일반 우산·휴대폰도 사용 양태에 따라 위험한 물건 영역(2019고합127 등). CCTV 영상이 사용 양태(가격·위협·찌름) 명확히 포착하면 죄명 다툼 결정적. 정당방위 영역이면 무죄 변론 가능 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"칼·각목 아니면 일반 폭행" 주장 검토</strong> — 일상 물건(우산·휴대폰)도 사용 양태에 따라 특수폭행 영역(2019고합127 외).</li>\n<li><strong>"휴대만 했다" 주장 검토</strong> — 휴대만 해도 가중 영역. 다만 휴대 vs 이용 다툼은 양형 영향.</li>\n<li><strong>정당방위 다툼 적극 검토</strong> — 위험한 물건 사용도 정당방위 영역이면 무죄 가능(2019고합127). 침해 현재성·상당성 입증.</li>\n<li><strong>합의 + 반성 결합 필수</strong> — 가중 영역이라 합의 + 반성 + 종합보험 결합으로 형 감경 폭 확보.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>범죄피해자지원센터 1577-1295</strong> — 피해자 측 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건 휴대 특수폭행과 정당방위 무죄 사례',
        summary:
          '서울남부지법 2019고합127 사건(서울남부지법, 2019.09.23 선고)에서 법원은 피고인이 야간에 자신의 집 마당에서 술에 취한 남성 세입자 甲과 자신의 딸이 말다툼하는 모습을 보고 화가 나 위험한 물건인 죽도(竹刀)를 들고 甲의 머리를 폭행하였고 甲의 모(母) 乙의 팔도 죽도로 내리쳤다고 하여 특수폭행치상·특수상해 공소사실로 기소된 사안에서, 피고인이 甲을 1회 가격한 사실을 인정하면서도 피고인의 행위는 정당방위에 해당하고 설령 과잉방위라도 형법 제21조 제3항의 \'벌하지 아니하는 행위\'에 해당한다는 등의 이유로 무죄를 선고했습니다. 위험한 물건 휴대 특수폭행 사안에서도 정당방위·과잉방위 다툼 트랙이 열린 영역으로 평가될 수 있습니다.',
        takeaway: '특수폭행은 위험한 물건 + 휴대·이용 + 인과 + 양형 결합 영역이라, CCTV·물건 자체·증인·정당방위 자료를 정리하면 4단계 분기 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '우산이나 휴대폰도 위험한 물건인가요?',
        answer:
          '<strong>사용 양태에 따라 위험한 물건 영역입니다.</strong> 머리 가격·찌름 등 사용 양태가 위험성 입증 시 인정. 객관적 위험성 + 사용 양태 종합.',
      },
      {
        question: '들고만 있어도 특수폭행인가요?',
        answer:
          '<strong>휴대만 해도 가중 영역입니다(형법 제261조).</strong> 위협만 해도 휴대 가중. 다만 사용(이용)이면 더 강한 가중.',
      },
      {
        question: '정당방위면 무죄 가능한가요?',
        answer:
          '<strong>가능 영역입니다(2019고합127 등).</strong> 위험한 물건 사용도 침해 현재성·방위 의사·상당성 4요건 충족 시 무죄. 변호사 자문.',
      },
      {
        question: '특수폭행과 특수상해 차이는?',
        answer:
          '<strong>상해 결과 발생 여부 영역입니다.</strong> 특수폭행(제261조)은 5년 이하, 특수상해(제258조의2)는 1년 이상 10년 이하. 부상 정도 다툼.',
      },
      {
        question: '합의해도 처벌받나요?',
        answer:
          '<strong>특수폭행은 반의사불벌 부적용 영역입니다.</strong> 합의는 양형 자료. 처벌은 진행. 형 감경 폭 확보 위해 합의 + 반성 결합.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 vs 상해 차이', href: '/guide/assault/assault-vs-injury-penalties' },
      { label: '폭행 음주 시비 단순 vs 상해', href: '/guide/assault/assault-drinking-sudden-fight-simple-vs-injury' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
      { label: '정당방위 인정 기준', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },

  // ─── 4. child-support / child-support-lump-sum-paid-additional-claim-possibility ───
  {
    domain: 'child-support',
    slug: 'child-support-lump-sum-paid-additional-claim-possibility',
    keyword: '양육비 일시금 합의 후 추가 청구',
    questionKeyword: '양육비를 일시금으로 받았는데 자녀 사정이 바뀌었어요. 추가 청구 가능한가요?',
    ctaKeyword: '양육비 일시금 추가청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 일시금 후 추가 청구 — 4단계 사정변경 | 로앤가이드',
      description:
        '양육비를 일시금으로 합의·지급받은 뒤 자녀 장애·교육비 폭증 등 사정변경이 생겼다면 추가 청구 가능성을 4단계 트랙으로 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하면서 양육비를 일시금 5,000만원으로 합의·지급받았어요. 그런데 1년 뒤 자녀가 발달장애 진단을 받아 치료비가 매년 2,000만원씩 들어가는데 추가 청구 가능한지 막막합니다." 양육비 일시금 합의 후 추가 청구는 ① 민법 제837조 제5항 양육 사항 변경 ② 사정변경 법리(자녀 복리 기준) ③ 일시금 합의의 해석(완결적 vs 일부) ④ 가정법원 양육비 변경(증액) 심판 4단계 트랙으로 검토되는 영역입니다. 대법원 2022스646 등 일관된 판례는 \'재판 또는 협의로 정해진 양육비 부담 내용이 부당한지는 자녀의 복리를 위하여 필요한지 기준으로 판단\'이라고 판시해, 일시금 합의도 사정변경(자녀 장애·중대 질병·교육비 폭증) 시 변경 가능 영역. 다만 \'완결적 합의\' 효력 다툼이 있어 합의서 문구·당시 사정 종합 평가 트랙이에요.</p>',
    sections: [
      {
        title: 'Q. 일시금 후 추가 청구 4가지 검토 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경·합의 해석·자녀 복리·심판 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사정변경 법리 (대법원 2022스646)</strong> — 자녀 복리 기준. 장애·중대 질병·교육비 폭증 등 당시 예측 어려운 사정 발생.</li>\n<li><strong>② 합의 해석 (완결적 vs 일부)</strong> — \'장래 양육비 일체 포기\' 명문 합의는 완결 효력 강함. 단순 일시금 지급 합의는 변경 폭 있음.</li>\n<li><strong>③ 자녀 복리 우선 원칙</strong> — 양육비는 자녀 권리(부모 합의로 처분 부정). 자녀 복리 위해 필요하면 합의 효력 제한.</li>\n<li><strong>④ 가정법원 양육비 변경 심판</strong> — 협의 결렬 시 가정법원 청구. 132 무료 자문 + 사정변경 자료 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일시금 합의도 사정변경 시 추가 청구 영역. 합의서 문구 + 당시 사정 + 자녀 복리 종합. \'장래 일체 포기\' 명문 합의는 효력 강하지만 자녀 복리 영역에선 제한.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경 자료 → 협의 시도 → 가정법원 청구 → 심판 → 강제집행 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정변경 자료 정리</strong> — 자녀 진단서·치료비 영수증·교육비 영수증·당시 합의서·당시 자녀 상태 자료.</li>\n<li><strong>2단계 — 비양육 부모와 협의 시도</strong> — 사정변경 자료 제시 + 추가 부담 협상. 합의 시 합의서 명문화.</li>\n<li><strong>3단계 — 가정법원 양육비 변경(증액) 심판 청구</strong> — 협의 결렬 시. 가사소송법 + 132 무료 자문.</li>\n<li><strong>4단계 — 가정법원 심판 (자녀 복리 종합 판단)</strong> — 사정변경·자녀 복리·합의 효력 종합 판단. 통상 6~12개월.</li>\n<li><strong>5단계 — 결정 후 강제집행 트랙</strong> — 결정문 → 이행명령 → 강제집행 → 양육비이행관리원 협조.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">일시금 후 추가 청구 4단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 자료 + 사정변경 자료 + 청구 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>당시 일시금 합의서·공정증서</strong> — 합의 효력 다툼 자료.</li>\n<li><strong>당시 자녀 진단서·자료</strong> — 합의 시점 자녀 상태.</li>\n<li><strong>현재 자녀 진단서·복지카드</strong> — 사정변경 입증.</li>\n<li><strong>치료비·교육비 영수증</strong> — 추가 비용 입증.</li>\n<li><strong>비양육 부모 소득·재산 자료</strong> — 분담 능력 입증.</li>\n<li><strong>가족관계증명·이혼 자료</strong> — 청구 신분.</li>\n<li><strong>양육비 변경 심판 청구서</strong> — 가정법원 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'당시 예측 어려운 사정\' 입증이 핵심. 자녀 발달장애·중대 질병·전학·해외 유학 등 당시 합의 시점에 알 수 없었던 사정 자료 정리. 132·1644-6621 무료 자문 결합 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 비양육 부모 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"일시금으로 끝났다" 주장 반박</strong> — 양육비는 자녀 권리. 부모 합의로 처분 부정 영역. 자녀 복리 시 사정변경 청구 가능.</li>\n<li><strong>"\'장래 일체 포기\' 합의" 주장 검토</strong> — 합의 효력 강하지만 자녀 복리 영역에선 제한(2022스646). 사정변경 입증 필수.</li>\n<li><strong>증액 vs 감액 양방향 가능</strong> — 사정변경은 양방향. 본인 소득 증가·자녀 사정 호전 시 감액 청구도 가능.</li>\n<li><strong>가정법원 사실조회 권한 활용</strong> — 비양육 부모 소득·재산 직권 조사. 본인이 직접 입증 부담 줄이는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 무료 자문.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 부담 내용 변경 시 자녀 복리 기준',
        summary:
          '대법원 2022스646 사건(대법원, 2022.09.29 선고)에서 법원은 재판 또는 당사자의 협의로 정해진 양육비 부담 내용이 제반 사정에 비추어 \'부당\'한지 여부는 \'자녀의 복리를 위하여 필요한지\'를 기준으로 판단해야 한다고 판시하면서, 가정법원이 양육비 감액 청구를 판단할 때 자녀의 복리에 미칠 영향을 종합 고려해야 한다고 보았습니다. 또한 대법원 2018스566 사건(대법원, 2019.01.31 선고)도 양육비 변경 청구에서 사정변경 반영 법리를 정리했습니다. 일시금 합의 후 추가 청구도 자녀 복리 + 사정변경 자료가 결합 시 가정법원 변경 심판 트랙이 열린 영역으로 평가될 수 있습니다.',
        takeaway: '양육비 일시금 후 추가 청구는 사정변경 + 합의 해석 + 자녀 복리 + 심판 결합 영역이라, 합의서·자녀 진단서·치료비 영수증·소득 자료를 정리하면 4단계 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '일시금으로 받았는데 추가 청구 가능한가요?',
        answer:
          '<strong>사정변경 시 가능 영역입니다(2022스646).</strong> 자녀 장애·중대 질병·교육비 폭증 등. 합의 효력 + 자녀 복리 종합 판단.',
      },
      {
        question: '\'장래 일체 포기\' 명문 합의가 있어요',
        answer:
          '<strong>효력 강하지만 자녀 복리 영역에선 제한 가능 영역입니다.</strong> 양육비는 자녀 권리(부모 처분 부정). 사정변경 입증 시 변경 검토.',
      },
      {
        question: '얼마부터 추가 청구 가능한가요?',
        answer:
          '<strong>금액 기준 없습니다.</strong> 사정변경 + 자녀 복리 + 분담 적정성 종합. 협의 우선, 결렬 시 가정법원 심판.',
      },
      {
        question: '비양육 부모가 \'본인도 사정 어렵다\'고 해요',
        answer:
          '<strong>가정법원 사실조회 영역입니다.</strong> 직권 소득·재산 조사. 양 부모 분담 능력 종합 판단.',
      },
      {
        question: '심판까지 얼마나 걸리나요?',
        answer:
          '<strong>통상 6~12개월 영역입니다.</strong> 가정법원 사건 폭증으로 길어지는 추세. 132·1644-6621 무료 자문 결합 권장.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 일시금 협상', href: '/guide/child-support/child-support-lump-sum-negotiation' },
      { label: '양육비 변경 소득 변동', href: '/guide/child-support/child-support-modification-income-change' },
      { label: '양육비 증액 청구', href: '/guide/child-support/child-support-calculation-increase' },
      { label: '양육비 정기금 일시금 변경', href: '/guide/child-support/child-support-periodic-to-lump-sum-modification' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ─── 5. child-support / child-support-hague-convention-overseas-cross-border-claim ───
  {
    domain: 'child-support',
    slug: 'child-support-hague-convention-overseas-cross-border-claim',
    keyword: '양육비 외국 거주 헤이그 협약 청구',
    questionKeyword: '양육비 안 주는 전 배우자가 외국에 거주해요. 헤이그 협약으로 청구 가능한가요?',
    ctaKeyword: '양육비 헤이그 협약 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 외국 거주 헤이그 협약 — 4단계 청구 | 로앤가이드',
      description:
        '양육비 채무자가 외국에 거주한다면 헤이그 부양료 협약·외국 판결 승인·국제사법 트랙으로 청구 가능한지 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼한 전 배우자가 한국 양육비 결정문이 있는데 외국으로 이주해 양육비를 안 줘요. 외국까지 어떻게 청구하는지 막막합니다." 외국 거주 채무자에 대한 양육비 청구는 ① 헤이그 부양료 협약(2007 헤이그 양육비 등 협약) ② 외국 판결 승인·집행(민사소송법 제217조 상호보증) ③ 국제사법 준거법 ④ 양육비이행관리원 국제 협조 4단계 트랙으로 검토되는 영역입니다. 한국은 2007 헤이그 양육비 협약 가입국 영역이며, 대법원 2023스643 등은 \'외국적 요소가 있는 사건은 준거법·국제사법 심리 의무\'를 확인했습니다. 다만 채무자 거주국이 협약 가입국인지 + 상호보증 여부에 따라 청구 가능성·절차 큰 차이. 양육비이행관리원이 일부 국가(미국·캐나다·호주 등) 추심 협조 트랙도 운영하는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 헤이그 협약·외국 청구 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 협약 가입·판결 승인·준거법·이행관리원 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 헤이그 부양료 협약 가입국 확인</strong> — 한국·EU·영국·노르웨이 등 가입. 미국은 별도 양자조약 영역. 거주국 확인 핵심.</li>\n<li><strong>② 외국 판결 승인·집행 (민사소송법 제217조)</strong> — 한국 양육비 결정문을 외국에서 승인·집행. 상호보증 + 적법 절차 요건.</li>\n<li><strong>③ 국제사법 준거법 (대법원 2023스643)</strong> — 자녀 거주지·국적·합의 영역에 따라 준거법 결정. 외국적 요소 심리 의무.</li>\n<li><strong>④ 양육비이행관리원 국제 협조 (1644-6621)</strong> — 미국·캐나다·호주 등 일부 국가 추심 협조 트랙. 무료 자문.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국 청구는 채무자 거주국 + 협약 가입 여부 + 한국 결정문 효력 종합 영역. 헤이그 협약 가입국이면 절차 단순화. 미가입국은 별도 양자조약·외국 판결 승인 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 거주국 확인 → 이행관리원 → 헤이그 신청 → 외국 절차 → 추심 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무자 거주국·주소 확인</strong> — 외국 주소·재산 정보 확보. 한국 양육비 결정문 사본·번역.</li>\n<li><strong>2단계 — 양육비이행관리원 (csa.go.kr·1644-6621)</strong> — 무료 자문 + 헤이그 협약 신청 자료 협조.</li>\n<li><strong>3단계 — 헤이그 양육비 협약 신청 (가입국)</strong> — 한국 중앙당국(법무부)을 통해 거주국 중앙당국에 추심 요청. 통상 6~12개월.</li>\n<li><strong>4단계 — 외국 법원 절차 (현지 변호인)</strong> — 미가입국은 외국 판결 승인·집행 별도 청구. 현지 변호인 선임 필수.</li>\n<li><strong>5단계 — 추심·송금 트랙</strong> — 외국 절차 거쳐 추심 + 한국으로 송금. 환차·세금 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">헤이그 협약 4단계 청구를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결정문 자료 + 채무자 자료 + 절차 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>한국 양육비 결정문·이행명령</strong> — 집행권원. 영문 번역·아포스티유 필수.</li>\n<li><strong>채무자 외국 주소·연락처</strong> — 외국 절차 송달용.</li>\n<li><strong>채무자 외국 소득·재산 자료</strong> — 추심 대상.</li>\n<li><strong>본인·자녀 가족관계증명·여권</strong> — 청구 신분.</li>\n<li><strong>이행관리원 신청서·협약 양식</strong> — 1644-6621 자문.</li>\n<li><strong>해외 송금·은행 정보</strong> — 추심 송금.</li>\n<li><strong>현지 변호인 선임 자료</strong> — 미가입국 시 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채무자 거주국이 헤이그 협약 가입국이면 절차 단순. 미가입국(중국·일본 등)은 별도 양자조약·외국 판결 승인 트랙 + 현지 변호인 비용. 이행관리원 1644-6621 사전 자문 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"외국 거주라 한국법 효력 없음" 주장 반박</strong> — 한국 양육비 결정문 외국 승인·집행 가능 영역(민사소송법 제217조). 헤이그 협약 가입국이면 절차 단순.</li>\n<li><strong>"외국 거주지 모름" 주장 검토</strong> — 외교부·법무부 + 이행관리원 조회 협조. 양육비이행위원회 직권 조사 트랙.</li>\n<li><strong>준거법 다툼 검토 (2023스643)</strong> — 자녀 거주지·국적·합의 영역에 따라 준거법 결정. 한국법 적용 시 한국 결정문 효력.</li>\n<li><strong>비용·시간 부담 검토</strong> — 외국 절차는 6개월~수년 소요. 현지 변호인 비용 부담. 132·1644-6621 무료 자문 결합 필수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 헤이그 협약 신청 협조.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>법무부 국제법무과</strong> — 헤이그 협약 한국 중앙당국.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국적 요소가 있는 사건의 준거법·국제사법 심리 의무',
        summary:
          '대법원 2023스643 사건(대법원, 2023.10.31 선고)에서 법원은 외국적 요소가 있는 사건의 경우 준거법과 관련한 주장이 없더라도 법원이 법률관계에 적용될 국제협약 또는 국제사법에 따른 준거법에 관하여 심리·조사할 의무가 있다고 판시했습니다. 또한 대법원 2012므66 사건(대법원, 2013.02.15 선고)은 민사소송법 제217조 \'상호보증\' 유무 판단 기준을 정리하며 외국 판결 승인 요건을 확인했습니다. 양육비 채무자가 외국에 거주하는 사안에서도 헤이그 협약 + 외국 판결 승인 + 국제사법 결합 영역으로 평가될 수 있으며, 양육비이행관리원 국제 협조 트랙이 결합되는 영역으로 평가될 수 있습니다.',
        takeaway: '외국 거주 양육비 청구는 협약 + 판결 승인 + 준거법 + 이행관리원 결합 영역이라, 결정문·번역·외국 주소·이행관리원 자료를 정리하면 4단계 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '미국 거주 전 배우자한테 청구 가능한가요?',
        answer:
          '<strong>한·미 양자조약 + 외국 판결 승인 트랙 영역입니다.</strong> 양육비이행관리원이 미국 OCSE와 협조. 1644-6621 사전 자문.',
      },
      {
        question: '헤이그 협약 가입국이 어디인가요?',
        answer:
          '<strong>한국·EU·영국·노르웨이 등 영역입니다.</strong> 정확 가입국 목록은 양육비이행관리원·법무부 국제법무과 확인. 미가입국은 별도 트랙.',
      },
      {
        question: '한국 결정문이 외국에서 그대로 효력 있나요?',
        answer:
          '<strong>외국 판결 승인 절차 거쳐야 영역입니다(민사소송법 제217조).</strong> 상호보증·적법 절차·공서양속 요건. 영문 번역·아포스티유 필수.',
      },
      {
        question: '채무자 외국 주소를 모르면?',
        answer:
          '<strong>이행관리원·외교부·법무부 협조 영역입니다.</strong> 양육비이행위원회 직권 조회 트랙. 1644-6621 + 132 결합 자문.',
      },
      {
        question: '비용은 얼마나 드나요?',
        answer:
          '<strong>가입국이면 이행관리원 협조 무료 영역, 미가입국은 현지 변호인 비용 부담입니다.</strong> 사전 1644-6621 자문 필수.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 외국 배우자 추심', href: '/guide/child-support/child-support-foreign-spouse-collection' },
      { label: '양육비 해외 거주 추적', href: '/guide/child-support/child-support-overseas-parent-pursuit' },
      { label: '양육비 해외 강제집행', href: '/guide/child-support/child-support-overseas-parent-enforcement' },
      { label: '양육비 잠적 추적 절차', href: '/guide/child-support/child-support-disappear-tracking-procedure' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ─── 6. dui / dui-first-offense-license-suspension-vs-revocation-criteria ───
  {
    domain: 'dui',
    slug: 'dui-first-offense-license-suspension-vs-revocation-criteria',
    keyword: '처음 음주운전 면허정지 면허취소 분기',
    questionKeyword: '처음 음주운전인데 농도가 0.08%였어요. 면허정지인지 면허취소인지 어떻게 갈리나요?',
    ctaKeyword: '음주운전 면허정지 취소 분기 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '처음 음주운전 면허정지 vs 취소 — 4단계 분기 | 로앤가이드',
      description:
        '처음 음주운전에서 면허정지(0.03~0.08%)와 면허취소(0.08% 이상) 분기 기준·재량 행위·생계 사유 행정심판 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"처음 음주운전 단속에 걸렸어요. 농도가 0.08%대인데 면허정지인지 면허취소인지 헷갈려요. 운전이 생계라 어떻게 대응해야 할지 막막합니다." 처음 음주운전 면허 처분은 ① 도로교통법 제93조 (0.03~0.08% 면허정지·100일, 0.08% 이상 면허취소) ② 행정청 재량 행위(대법원 2017두67476) ③ 생계·복수면허·운전 경력 등 감경 사유 ④ 면허 취소 행정심판(90일 내) 4단계 분기로 갈리는 영역입니다. 도로교통법 제93조는 농도 구간별 처분 기준 영역이지만 대법원 2017두67476은 \'음주운전 면허 취소는 행정청의 재량 행위\'라고 판시해, 농도가 같아도 운전 경력·복수면허 종별·생계 사유에 따라 분기 가능 영역. 처분 후 90일 내 행정심판 또는 행정소송 청구 트랙도 별도로 열린 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 면허정지 vs 취소 4가지 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 농도·재량·감경 사유·행정심판 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 농도 기준 (도로교통법 제93조)</strong> — 0.03~0.08% 면허정지(100일), 0.08% 이상 면허취소(1년 이상 결격), 0.2% 이상 형량 가중.</li>\n<li><strong>② 재량 행위 (대법원 2017두67476)</strong> — 면허 취소는 재량. 농도 같아도 운전 경력·복수면허 종별·사고 여부에 따라 분기 가능 영역.</li>\n<li><strong>③ 감경 사유 (생계·복수면허·운전 경력)</strong> — 가족 생계·운전 직업·무사고 운전 경력·반성 등 감경 자료. 행정심판에서 핵심 변론.</li>\n<li><strong>④ 행정심판·행정소송 (90일)</strong> — 처분 통지 후 90일 내 청구. 형사 결과와 별개 트랙. 운전 생계 사유 + 절차 위법 변론.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 농도는 출발점·재량 가능 영역. 운전 경력·생계·복수면허 자료가 행정심판 핵심 변론. 90일 내 청구 절대 기한. 형사와 별개 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 처분 통지 → 행정심판 청구 → 변론 → 결과 + 형사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 음주측정 결과·블랙박스·동석자 진술·운전 경력증명서·복수면허 자료.</li>\n<li><strong>2단계 — 처분 통지 수령 (단속 후 1~2개월)</strong> — 면허정지 또는 취소 통지서 수령. 90일 카운트 시작.</li>\n<li><strong>3단계 — 행정심판 청구 (90일 내)</strong> — 중앙행정심판위원회(acrc.go.kr) 또는 행정소송. 무료 (행정심판은).</li>\n<li><strong>4단계 — 변론 (생계·복수면허·운전 경력)</strong> — 가족 생계·운전 직업·무사고 자료 + 반성문 + 음주운전 교육.</li>\n<li><strong>5단계 — 결정 + 형사 본안</strong> — 행정심판 결정 + 형사(도로교통법 위반) 본안. 형사 + 행정 별개 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">처음 음주운전 4단계 분기를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 자료 + 운전 자료 + 변론 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>음주측정 결과서·채혈 결과</strong> — 농도 수치.</li>\n<li><strong>운전 경력증명서·복수면허 자료</strong> — 무사고 + 종별 자료.</li>\n<li><strong>가족 생계 자료 (가족관계·소득)</strong> — 운전 생계 사유.</li>\n<li><strong>운전 직업 입증 (택시·화물·영업)</strong> — 직업적 운전.</li>\n<li><strong>반성문·음주운전 교육 이수증</strong> — 변론 자료.</li>\n<li><strong>처분 통지서</strong> — 90일 카운트 자료.</li>\n<li><strong>행정심판 청구서</strong> — 중앙행정심판위 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 90일 절대 기한. 처분 통지 수령일부터 카운트. 운전 직업·복수면허 보유자는 행정심판 감경 폭 큰 영역. 음주운전 교육·재범 방지 프로그램 이수 자료 결합 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"농도 0.08% 이상 자동 취소" 주장 검토</strong> — 재량 행위 영역(2017두67476). 운전 경력·복수면허 종별·생계 자료 감경 변론 가능.</li>\n<li><strong>"형사 결과와 행정 별개" 사실 확인</strong> — 형사 무죄·약식·집유와 행정심판 별개. 90일 내 행정심판 별도 청구 필수.</li>\n<li><strong>복수면허 일부만 취소 다툼</strong> — 1종 대형·1종 보통·2종 등 종별 분리. 일부 종별 재량 일탈 다툼 가능 영역(2017두67476).</li>\n<li><strong>음주운전 교육·재범 방지 적극 이수</strong> — 변론 핵심 자료. 운전면허 회복 단축 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>중앙행정심판위원회 (acrc.go.kr)</strong> — 면허 취소 행정심판 90일 내. 무료.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 형사 트랙 자격 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 면허 취소의 재량 행위성과 종별 분리 다툼',
        summary:
          '대법원 2017두67476 사건(대법원, 2018.02.28 선고)에서 법원은 운전면허를 받은 사람이 음주운전을 한 경우 운전면허의 취소 여부는 행정청의 재량 행위이며, 음주운전으로 인한 교통사고 방지의 공익상 필요가 중시되어야 한다고 판시했습니다. 다만 甲이 0.140% 주취 상태로 125cc 이륜자동차를 운전한 사안에서 1종 대형·1종 보통·1종 특수(대형견인·구난) 면허를 모두 취소한 부분에 재량권을 일탈·남용한 위법이 있다고 본 원심을 파기하면서, 면허 종별 분리 다툼과 재량 일탈 다툼 트랙이 결합되는 영역임을 확인했습니다. 처음 음주운전 사안에서도 농도·운전 경력·복수면허 종별 종합 재량 영역으로 평가될 수 있습니다.',
        takeaway: '처음 음주운전 면허 처분은 농도 + 재량 + 감경 사유 + 행정심판 결합 영역이라, 측정 결과·운전 경력증명·생계 자료·교육 이수증을 정리하면 4단계 분기 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '농도 0.08%면 무조건 취소인가요?',
        answer:
          '<strong>재량 행위 영역입니다(2017두67476).</strong> 운전 경력·복수면허 종별·생계 사유·사고 여부 종합. 행정심판 변론 가능.',
      },
      {
        question: '형사는 무죄인데 면허 취소가 유지되나요?',
        answer:
          '<strong>형사·행정 별개 영역입니다.</strong> 행정심판 별도 90일 내 청구. 형사 결과는 행정심판 변론 자료로만 활용.',
      },
      {
        question: '운전이 직업인데 감경 받을 수 있나요?',
        answer:
          '<strong>가능 영역입니다.</strong> 택시·화물·영업 직업 + 가족 생계 자료 + 무사고 운전 경력 + 반성·교육 이수 결합. 행정심판 핵심 변론.',
      },
      {
        question: '90일 지나면 어떻게 되나요?',
        answer:
          '<strong>행정심판·행정소송 청구 부정 영역입니다.</strong> 절대 기한. 처분 통지 수령일부터 카운트. 즉시 청구 권장.',
      },
      {
        question: '복수면허 일부만 취소 다툼 가능한가요?',
        answer:
          '<strong>가능 영역입니다(2017두67476).</strong> 1종 대형·보통·2종 종별 분리 다툼. 음주운전 차량과 무관한 종별은 재량 일탈 다툼.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 첫 적발 대응', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 면허취소 안내', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 행정심판 90일', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 행정심판 서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '음주운전 농도별 처벌', href: '/guide/dui/dui-bac-penalty-by-level' },
    ],
  },
];
