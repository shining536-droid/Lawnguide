import { SpokePage } from '../spoke-pages';

// batch58 assault 3 + child-support 2 + dui 1 = 6개
//
// 고유 존재 이유:
// 1. 이 페이지는 직장 상사가 회식·근무 후 폭행을 가한 사안에서 부하직원이 직장내괴롭힘 + 형사 고소 + 산재 4단계 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 외국인 피해자가 폭행을 당한 후 통역·언어 장벽 + 형사·민사 4단계 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 운동경기 중 발생한 폭행 사안에서 가해자가 사회상규·정당행위 + 위법성 조각 4단계 다툼 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 양육비 미지급에 대해 양육친이 운전면허 정지·출국금지 등 양육비이행관리원 제재조치 4단계 신청 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 비양육 부모가 사망한 후 양육친이 상속재산에서 양육비 청구 + 한정승인 4단계 트랙을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 음주측정 결과가 처벌기준치를 근소하게 초과한 사안에서 위드마크 공식 + 상승기 다툼 4단계 방어 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58AssaultCsDui: SpokePage[] = [
  // ─── 1. assault / assault-workplace-supervisor-after-hours-attack ───
  {
    domain: 'assault',
    slug: 'assault-workplace-supervisor-after-hours-attack',
    keyword: '직장 상사 회식 폭행 직장내괴롭힘',
    questionKeyword: '직장 상사가 회식 후 폭행했어요. 형사 고소랑 직장내괴롭힘 둘 다 가능한가요?',
    ctaKeyword: '상사 폭행 직장내괴롭힘 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 상사 회식 폭행 — 4단계 대응 정리 | 로앤가이드',
      description:
        '직장 상사가 회식·근무 후 폭행을 했다면 형사 고소 + 직장내괴롭힘 + 산재 4단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회식 자리에서 술 취한 상사가 본인 어깨를 잡고 흔들면서 손바닥으로 머리를 때렸어요. 동료들도 봤는데 다음날 출근하니 \'그냥 장난이었다\'고 무마하려 합니다." 직장 상사의 회식·근무 후 폭행은 ① 형법 제260조 폭행죄·제257조 상해죄 ② 근로기준법 제76조의2 직장내괴롭힘 ③ 산업재해 (업무상 폭행) ④ 민사 손해배상 4가지 트랙을 동시에 검토할 수 있는 영역입니다. 회식이 \'업무의 연장\'으로 평가되면 산재 신청 트랙도 열리는 사례가 있고, 직장내괴롭힘 트랙은 사용자(회사)의 조사·조치 의무가 발생해 보복 인사 시 별도 처벌(3년 이하 징역) 영역. 형사 단독으로만 대응하면 폭력 재발·보복 위험이 남으므로 4가지 트랙 결합이 핵심이에요.</p>',
    sections: [
      {
        title: 'Q. 상사 폭행 4가지 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·직장내괴롭힘·산재·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 형사 고소 (폭행·상해)</strong> — 형법 제260조(폭행 2년 이하) 또는 제257조(상해 7년 이하). 진단서·CCTV·동료 진술 정리.</li>\n<li><strong>② 직장내괴롭힘 신고 (근로기준법 제76조의2)</strong> — 사용자에게 신고 + 회사 조사 의무. 보복 인사 시 별도 처벌(3년 이하).</li>\n<li><strong>③ 산재 신청 (회식·업무 연장)</strong> — 회식이 업무 연장으로 평가되면 근로복지공단 산재 신청 검토 영역.</li>\n<li><strong>④ 민사 손해배상</strong> — 가해자 + 사용자 사용자배상책임 결합 청구 가능 영역(민법 제756조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사 + 직장내괴롭힘 결합이 보복 방지의 핵심. 회식이 업무 연장이라면 산재 트랙. 사용자배상책임은 회사 사용자에게도 청구 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 회사 신고 → 형사 고소 → 산재·민사 → 보호조치 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 진단서·CCTV·회식 자리 사진·동료 진술서·통화 녹취·메시지.</li>\n<li><strong>2단계 — 회사 신고 (직장내괴롭힘)</strong> — 사용자에게 서면 신고 + 회사 조사 요청. 보복 인사 즉시 노동청 진정.</li>\n<li><strong>3단계 — 형사 고소 (경찰 사이버범죄·112)</strong> — 폭행·상해 고소장 제출. 진단서·CCTV·동료 진술 첨부.</li>\n<li><strong>4단계 — 산재 신청 + 민사 손해배상 (병행)</strong> — 회식이 업무 연장이라면 근로복지공단 산재. 가해자 + 사용자 사용자배상책임.</li>\n<li><strong>5단계 — 보호조치·합의 검토</strong> — 회사가 보호조치 의무 이행. 합의 시 처벌불원서 영향 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상사 폭행 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료 자료 + 사건 자료 + 회사 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>진단서·치료 기록</strong> — 부상 정도·인과관계.</li>\n<li><strong>회식 자리 CCTV·사진</strong> — 식당·노래방·이동 동선.</li>\n<li><strong>동료 진술서·목격자 연락처</strong> — 사건 정황.</li>\n<li><strong>통화 녹취·메시지·이메일</strong> — 상사 무마 시도·사과·협박.</li>\n<li><strong>회식 참여 의무 정황</strong> — 산재 검토 자료 (참여 강제·업무 지시).</li>\n<li><strong>본인 직장내괴롭힘 신고서</strong> — 회사 인사팀 제출 사본.</li>\n<li><strong>4대보험·근로계약서</strong> — 산재 신청 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식 참여 의무성 정황(상사 지시·강제 분위기·교통비 회사 부담)이 산재 인정 핵심 자료. 직장내괴롭힘 신고는 반드시 서면 + 사본 보관 — 보복 인사 입증 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"개인 회식이라 업무와 무관" 주장 반박</strong> — 상사 지시·교통비 회사 부담·참여 강제 정황 자료로 업무 연장 다툼 가능 영역.</li>\n<li><strong>"장난이었다" 주장 반박</strong> — 진단서·CCTV·동료 진술로 폭행 의도·결과 입증. 부상 결과만으로도 폭행죄 성립 영역.</li>\n<li><strong>보복 인사 절대 금지</strong> — 직장내괴롭힘 신고 후 보복 인사는 별도 처벌(3년 이하). 인사 변동 시 즉시 노동청 진정.</li>\n<li><strong>합의 신중 검토</strong> — 직장 관계 지속 시 합의 후 보복 위험. 변호사 자문 필수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사·노동 무료 상담.</li>\n<li><strong>고용노동부 1350</strong> — 직장내괴롭힘·산재 상담.</li>\n<li><strong>근로복지공단 1588-0075</strong> — 산재 신청 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력과 상해의 의미',
        summary:
          '대법원 2025도11886 사건(대법원, 2025.12.04 선고)에서 법원은 상해죄에서 \'상해\'란 신체의 완전성을 훼손하거나 생리적 기능에 장애를 초래하는 것을 의미하며, 상해진단서가 주로 피해자의 주관적 통증 호소에 의존하는 경우 진단일자·상해 부위·치료 경과 등을 면밀히 살펴 증명력을 판단해야 한다고 판시했습니다. 직장 상사 폭행 사안에서도 진단서 + CCTV + 동료 진술의 종합적 입증이 중요하며, 가벼운 멍·찰과상도 \'생리적 기능 장애\' 정도라면 상해죄 성립 영역으로 평가될 수 있습니다.',
        takeaway: '직장 상사 폭행은 형사 + 직장내괴롭힘 + 산재 + 민사 결합 영역이라, 진단서·CCTV·동료 진술·회식 강제 정황 자료를 정리하면 4단계 대응 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회식 후 귀가길 폭행도 산재 되나요?',
        answer:
          '<strong>회식이 업무 연장으로 평가되면 산재 검토 영역입니다.</strong> 상사 지시·참여 강제·교통비 회사 부담 정황 자료가 핵심. 근로복지공단 1588-0075 자문.',
      },
      {
        question: '회사가 처리 안 해주면 어떻게 하나요?',
        answer:
          '<strong>고용노동부(1350) 진정 트랙입니다.</strong> 직장내괴롭힘 신고 후 회사가 조사·조치 의무 미이행 시 노동청 진정 + 사용자 처벌(과태료) 결합 가능.',
      },
      {
        question: '상사가 \'장난이었다\'고 무마하는데 처벌 가능한가요?',
        answer:
          '<strong>피해자 의사·결과만으로도 폭행죄 성립 영역입니다.</strong> 진단서·CCTV·동료 진술로 객관 입증. 의도와 무관하게 폭행 결과 발생만으로 성립.',
      },
      {
        question: '동료가 증언 안 해주면 어떻게 하나요?',
        answer:
          '<strong>증언 거부도 본인 권리이지만 경찰 조사 시 진술 협조 가능 영역입니다.</strong> CCTV·통화 녹취·진단서 위주로 자료 보강. 증언 어려우면 진술서만이라도 요청.',
      },
      {
        question: '본인이 술에 취해 기억이 흐릿한데 고소 가능한가요?',
        answer:
          '<strong>본인 기억 부족해도 진단서·CCTV·동료 진술 종합 입증 가능 영역입니다.</strong> 사건 직후 진단서·진술서 확보가 핵심. 시간 지나면 자료 손실.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '직장 상사 폭행 형사', href: '/guide/assault/assault-workplace-criminal' },
      { label: '직장내괴롭힘 신고 절차', href: '/guide/assault/assault-workplace-bullying-procedure' },
      { label: '술자리 시비 쌍방폭행', href: '/guide/assault/assault-pub-mutual-altercation-settlement-tier' },
      { label: '폭행 증거 수집 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },

  // ─── 2. assault / assault-foreign-victim-translator-criminal ───
  {
    domain: 'assault',
    slug: 'assault-foreign-victim-translator-criminal',
    keyword: '외국인 폭행 피해 통역 형사',
    questionKeyword: '한국에서 외국인이 폭행 피해를 당했어요. 통역과 고소는 어떻게 해야 하나요?',
    ctaKeyword: '외국인 폭행 통역 형사 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 폭행 피해 — 4단계 통역·고소 정리 | 로앤가이드',
      description:
        '한국에서 외국인이 폭행 피해를 당했다면 통역 + 형사 고소 + 민사 4단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한국에서 일하는 외국인 친구가 길거리에서 폭행을 당했어요. 한국어가 서툴러 신고도 어려운데 어떻게 도와줘야 할지 모르겠어요." 외국인 피해자의 폭행은 ① 형사 고소 (피해자 국적 무관) ② 통역 권리 (형사소송법 제183조) ③ 범죄피해자 지원 ④ 민사 손해배상 4가지 트랙을 동시에 검토할 수 있는 영역입니다. 외국인이라도 한국 영토 내 발생한 폭행은 형법 적용 영역이고, 형사소송법 제183조는 \'외국인은 통역인을 통하여 진술할 수 있다\'고 규정해 통역 권리가 보장되는 영역. 또한 범죄피해자 지원기관(검찰청 1577-2584, 범죄피해자보호기금) + 외국인 종합지원센터(1345)에서 무료 통역·법률·치료 지원 트랙이 열려 있어요.</p>',
    sections: [
      {
        title: 'Q. 외국인 폭행 4가지 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·통역·범죄피해자 지원·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 형사 고소 (피해자 국적 무관)</strong> — 한국 영토 내 폭행은 형법 적용 영역. 외국인도 고소권자.</li>\n<li><strong>② 통역 권리 (형사소송법 제183조)</strong> — 외국인은 통역인 통한 진술 권리 보장. 경찰·검찰·법원 단계 모두 적용.</li>\n<li><strong>③ 범죄피해자 지원 (검찰청 1577-2584)</strong> — 무료 법률·치료·통역 지원. 외국인 종합지원센터(1345) 결합 가능.</li>\n<li><strong>④ 민사 손해배상</strong> — 형사와 별개로 민사 청구. 통역 비용도 손해배상 항목 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인 피해자도 한국인과 동일 권리 영역. 통역인 신청 + 범죄피해자 지원 결합 트랙이 가장 빠른 종결. 체류 자격 무관 (불법체류라도 형사 고소 가능 영역).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 통역 요청 → 고소 → 지원 신청 → 민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 진단서·CCTV·목격자 진술·여권·체류증·번역된 메시지.</li>\n<li><strong>2단계 — 통역 요청 + 경찰 신고 (112·1345)</strong> — 외국인 종합지원센터(1345) 통역 + 경찰 출동.</li>\n<li><strong>3단계 — 형사 고소 (경찰 외사계)</strong> — 폭행 고소장 제출. 통역인 입회. 외사계가 외국인 사건 전담.</li>\n<li><strong>4단계 — 범죄피해자 지원 신청 (검찰청 1577-2584)</strong> — 무료 법률·치료·통역. 외국인 종합지원센터 결합.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 형사 종결 후 민사. 통역 비용·치료비·위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 폭행 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분 자료 + 사건 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>여권·체류증·외국인등록증</strong> — 신분 확인.</li>\n<li><strong>진단서·치료 기록</strong> — 부상 정도.</li>\n<li><strong>CCTV·블랙박스·사진</strong> — 사건 정황.</li>\n<li><strong>목격자 진술·연락처</strong> — 사건 입증.</li>\n<li><strong>통역 요청서</strong> — 형사소송법 제183조.</li>\n<li><strong>범죄피해자 지원 신청서</strong> — 검찰청 양식.</li>\n<li><strong>가해자 인적사항</strong> — 알려진 정보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 외국인등록증·여권 사본은 출입국 사무소에서 재발급 가능. 통역인은 경찰·검찰·법원 단계마다 요청 (자동 배정 아님). 외국인 종합지원센터(1345)는 24시간 13개 언어 통역 무료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 어려움과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>체류 자격 우려 (불법체류)</strong> — 형사 고소는 체류 자격 무관 영역. 다만 출입국 통보 가능성은 변호사 자문.</li>\n<li><strong>통역 품질 다툼</strong> — 경찰·검찰 통역인 부적절 시 재요청 권리. 본인 신뢰 통역 동행 가능 영역.</li>\n<li><strong>강제퇴거 위험</strong> — 가해자가 외국인이라면 강제퇴거 결합 가능. 변호사 자문 후 신중 진행.</li>\n<li><strong>본국 가족 지원 협조</strong> — 본국 영사관·대사관 협조 가능. 외국인 종합지원센터 안내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>외국인 종합지원센터 1345</strong> — 24시간 13개 언어 통역.</li>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>검찰청 범죄피해자지원 1577-2584</strong> — 무료 법률·치료·통역.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서의 증명력 (외국인 피해자도 동일 적용)',
        summary:
          '대법원 2025도11886 사건(대법원, 2025.12.04 선고)에서 법원은 상해죄에서 상해의 의미와 상해진단서의 증명력 판단 기준을 정리하면서, 진단서 발급 경위·진단일자·상해 부위·치료 경과 등을 종합 고려해 증명력을 판단해야 한다고 판시했습니다. 외국인 피해자의 폭행 사안에서도 한국 형법이 동일하게 적용되며, 진단서·CCTV·통역인을 통한 진술이 종합 증거로 평가되는 영역입니다.',
        takeaway: '외국인 폭행 피해는 형사 + 통역 + 범죄피해자 지원 + 민사 결합 영역이라, 여권·진단서·CCTV·통역 요청서 자료를 정리하면 4단계 대응 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '한국어를 못해도 고소 가능한가요?',
        answer:
          '<strong>형사소송법 제183조 통역 권리 영역입니다.</strong> 경찰·검찰·법원 모두 통역인 신청 가능. 외국인 종합지원센터(1345) 24시간 13개 언어 무료.',
      },
      {
        question: '체류 기간 만료 됐는데 고소 가능한가요?',
        answer:
          '<strong>체류 자격 무관 형사 고소 가능 영역입니다.</strong> 다만 출입국 통보 가능성은 변호사 자문 필수. 외국인 종합지원센터 + 법률구조공단 132 결합 자문.',
      },
      {
        question: '본국에 돌아간 후에도 사건 진행되나요?',
        answer:
          '<strong>가능 영역이지만 통역·진술 어려움 큰 영역입니다.</strong> 변호사 위임 + 통역인 결합. 본국 영사관·대사관 협조도 검토.',
      },
      {
        question: '범죄피해자 지원으로 치료비도 받나요?',
        answer:
          '<strong>중상해·사망은 범죄피해구조금 + 치료비 지원 영역입니다.</strong> 검찰청 1577-2584 신청. 단순 폭행은 일부 지원만.',
      },
      {
        question: '가해자가 외국인이라 도주 위험 있어요',
        answer:
          '<strong>경찰 외사계 + 출입국 협조 트랙입니다.</strong> 출국금지 신청 + 신원조회 협조. 변호사 자문 후 빠른 고소 + 출국금지 청구.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '범죄피해자 지원 안내', href: '/guide/assault/assault-victim-support-program' },
      { label: '폭행 형사 vs 민사', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 3. assault / assault-sports-game-incidental-defense ───
  {
    domain: 'assault',
    slug: 'assault-sports-game-incidental-defense',
    keyword: '운동경기 중 폭행 사회상규 정당행위',
    questionKeyword: '축구 시합 중 몸싸움이 격해져 폭행으로 입건됐어요. 운동 중 행위라 빠질 수 있나요?',
    ctaKeyword: '운동경기 폭행 사회상규 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '운동경기 중 폭행 — 4단계 사회상규 방어 | 로앤가이드',
      description:
        '운동경기 중 몸싸움으로 폭행 입건됐다면 사회상규·정당행위 + 합의 4단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동호회 축구 시합 중 상대 선수와 부딪혀 몸싸움이 됐는데 상대가 부상을 입었다고 폭행으로 신고했어요. 운동 중 행위인데 처벌받나요?" 운동경기 중 폭행은 ① 형법 제20조 정당행위·사회상규 ② 경기 규칙 범위 내 행위 ③ 고의·과실 구분 ④ 합의·양형 4가지 트랙으로 다툴 수 있는 영역입니다. 형법 제20조는 \'법령에 의한 행위, 업무로 인한 행위 또는 사회상규에 위배되지 아니하는 행위\'는 위법성이 조각된다고 규정해, 경기 규칙·관례 범위 내 행위는 위법성 조각 영역. 다만 \'경기 규칙을 명백히 벗어난 고의 가격\'이나 \'경기 종료 후 폭행\'은 정당행위 부정 영역이에요. 단순 사고와 고의 가격을 구분하는 것이 핵심 다툼 트랙입니다.</p>',
    sections: [
      {
        title: 'Q. 운동경기 폭행 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사회상규·경기 규칙·고의 부재·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사회상규·정당행위 (형법 제20조)</strong> — 경기 규칙·관례 범위 내 행위라면 위법성 조각 영역.</li>\n<li><strong>② 경기 규칙 범위 입증</strong> — 해당 종목 규칙·심판 판단·동영상으로 규칙 내 행위 입증.</li>\n<li><strong>③ 고의 부재 (단순 사고)</strong> — 고의 가격이 아니라 단순 충돌·우발적 부상이라면 폭행 고의 부정.</li>\n<li><strong>④ 합의·양형 (정당행위 부정 시)</strong> — 정당행위 부정되더라도 합의·반성·초범 결합으로 감경.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경기 규칙 내 행위 + 고의 부재 입증이 사회상규 다툼의 핵심. 동영상·심판 진술이 강력한 자료. 경기 종료 후 폭행은 정당행위 부정 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 조사 → 합의·검찰 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 경기 동영상·심판 진술·동료 선수 진술·종목 규칙·본인 부상 정황.</li>\n<li><strong>2단계 — 변호인 선임</strong> — 사회상규 다툼 전략. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 경기 정황·고의 부재 진술. 변호인 동석.</li>\n<li><strong>4단계 — 합의 시도 (가능한 빨리)</strong> — 합의 + 처벌불원서로 \'공소권 없음\' 가능 영역.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 사회상규·정당행위 + 양형 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">운동경기 폭행 4단계 방어를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경기 자료 + 합의 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경기 동영상·하이라이트</strong> — 사고 순간 정황.</li>\n<li><strong>심판 진술서·경기 보고서</strong> — 규칙 내 판단.</li>\n<li><strong>동료 선수 진술</strong> — 사고 정황 입증.</li>\n<li><strong>해당 종목 규칙·관례 자료</strong> — 사회상규 입증.</li>\n<li><strong>본인 부상 정황</strong> — 쌍방 사고 정황.</li>\n<li><strong>합의서·처벌불원서</strong> — 합의 자료.</li>\n<li><strong>본인 반성문·전과 자료</strong> — 양형 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경기 동영상이 가장 결정적 자료. 본인 휴대폰·관중 촬영·CCTV 모두 확보. 심판이 \'정상 플레이\' 판단했다면 사회상규 다툼 강력. 경기 종료 후 폭행은 별도 분리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"경기 규칙 위반 + 고의 가격" 주장 반박</strong> — 동영상·심판 진술·종목 규칙으로 규칙 내 행위 입증.</li>\n<li><strong>"부상이 큰 만큼 고의" 주장 반박</strong> — 결과만으로 고의 추단 부적합 영역. 행위 정황 자체로 판단.</li>\n<li><strong>경기 종료 후 폭행 분리 다툼</strong> — 경기 중 vs 경기 종료 후 시점 명확 분리. 경기 후는 정당행위 부정 영역.</li>\n<li><strong>합의 + 정당행위 병행 변론</strong> — 정당행위 다툼 + 합의 동시 진행. 정당행위 인정 시 \'무죄\', 부정 시 합의로 감경.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당방위·과잉방위와 위법성 조각',
        summary:
          '대법원 2025고단1523 사건(서울북부지법, 2025.10.29 선고)에서 법원은 일면식 없는 사람에게 갑자기 침입·공격당한 피고인이 책상 위 고무망치로 1회 가격해 공격에서 벗어난 행위를 정당방위 또는 면책적 과잉방위(형법 제21조 제3항)에 해당해 위법성이 조각된다고 보고 무죄를 선고했습니다. 운동경기 중 폭행 사안에서도 형법 제20조 사회상규·정당행위 법리가 유사하게 적용되어, 경기 규칙·관례 범위 내 행위라면 위법성 조각 영역으로 다툼 가능한 사례가 있습니다.',
        takeaway: '운동경기 중 폭행은 사회상규·정당행위 + 고의 부재 + 합의 결합 영역이라, 경기 동영상·심판 진술·종목 규칙 자료를 정리하면 4단계 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '심판이 \'정상 플레이\' 판정했는데도 처벌받나요?',
        answer:
          '<strong>심판 판단은 사회상규 다툼의 강력한 자료지만 절대 면책은 아닙니다.</strong> 경기 규칙 + 동영상 + 정황 종합 판단. 변호사 자문 + 정당행위 다툼.',
      },
      {
        question: '경기 종료 직후 흥분해 폭행했어요',
        answer:
          '<strong>경기 종료 후 폭행은 정당행위 부정 영역입니다.</strong> 경기 중 vs 종료 후 시점 명확 분리. 종료 후는 일반 폭행 트랙. 합의 + 양형 변론.',
      },
      {
        question: '본인도 부상 입었어요',
        answer:
          '<strong>쌍방 사고 정황은 정당행위 + 쌍방 합의 다툼 가능 영역입니다.</strong> 본인 진단서 + 동영상으로 쌍방 정황 입증. 양측 처벌불원서 교환.',
      },
      {
        question: '동호회 시합인데 정식 경기와 같은 기준인가요?',
        answer:
          '<strong>동호회·정식 경기 모두 사회상규 적용 영역입니다.</strong> 다만 동호회는 규칙 정형성 약해 다툼 어려울 수 있음. 종목 규칙 + 관례 자료 정리.',
      },
      {
        question: '합의 안 되면 어떻게 되나요?',
        answer:
          '<strong>정당행위 본격 변론 + 양형 다툼 트랙입니다.</strong> 동영상·심판·동료 진술이 핵심. 변호사 자문 후 본안 진행. 초범 + 우발적 정황 결합.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '정당방위 인정 기준', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '쌍방폭행 정당방위', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 무고 방어', href: '/guide/assault/assault-false-accusation-counter' },
    ],
  },

  // ─── 4. child-support / child-support-license-suspension-petition-procedure ───
  {
    domain: 'child-support',
    slug: 'child-support-license-suspension-petition-procedure',
    keyword: '양육비 미지급 운전면허 정지 출국금지',
    questionKeyword: '비양육 부모가 양육비를 계속 안 줘요. 운전면허 정지나 출국금지 신청 가능한가요?',
    ctaKeyword: '양육비 면허정지 출국금지 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 미지급 면허정지·출국금지 — 4단계 신청 | 로앤가이드',
      description:
        '양육비 미지급에 대해 면허정지·출국금지·명단공개 등 양육비이행관리원 제재조치 4단계 신청 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비를 매월 받기로 했는데 비양육 부모가 1년 넘게 미지급해요. 가정법원 이행명령도 무시했는데 이제 어떻게 해야 하나요?" 양육비 미지급에 대한 제재조치는 ① 양육비 이행확보 및 지원에 관한 법률(양육비이행법) ② 운전면허 정지 ③ 출국금지 ④ 명단공개·형사처벌 4가지 트랙을 단계적으로 신청 가능한 영역입니다. 양육비이행법 제21조의3은 \'정당한 사유 없이 양육비 채무를 이행하지 아니한 경우\' 여성가족부장관이 양육비이행관리원의 신청에 따라 운전면허 정지·출국금지·명단공개 처분을 할 수 있다고 규정해, 가정법원 감치명령(가사소송법 제68조)과 별개로 행정 제재 트랙이 열려 있어요. 단계별 신청 요건이 다르므로 본인 사안에 맞는 트랙을 선택하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 제재조치 4가지 신청 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전면허 정지·출국금지·명단공개·형사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전면허 정지 (양육비이행법 제21조의3)</strong> — 정당한 사유 없이 미지급 시 100일 이내 면허 정지. 양육비이행관리원 신청.</li>\n<li><strong>② 출국금지 (양육비이행법 제21조의4)</strong> — 미지급 5,000만원 이상 + 정당한 사유 없는 경우 출국금지 가능 영역.</li>\n<li><strong>③ 명단공개 (양육비이행법 제21조의5)</strong> — 3개월 이상 미지급 + 합산 1,000만원 이상 시 여성가족부 홈페이지 명단공개.</li>\n<li><strong>④ 감치·형사 처벌</strong> — 가사소송법 제68조 감치명령(30일 이내) + 형사 처벌(1년 이하 징역 또는 1천만원 이하 벌금).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비이행관리원 통한 행정 제재가 가장 빠르고 강력한 트랙. 면허 정지·출국금지는 비양육 부모 일상에 직접 압박. 단계별 요건 충족 확인 후 신청.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 양육비이행관리원 → 면허정지 → 출국금지·명단공개 → 형사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 양육비 결정문·합의서·미지급 기록·비양육 부모 인적사항·재산 정황.</li>\n<li><strong>2단계 — 양육비이행관리원 신청 (csa.go.kr·1644-6621)</strong> — 무료 협조 + 제재조치 신청 대행.</li>\n<li><strong>3단계 — 운전면허 정지 신청 (요건 충족 시)</strong> — 정당한 사유 없는 미지급 입증. 100일 이내 정지.</li>\n<li><strong>4단계 — 출국금지·명단공개 (요건 충족 시)</strong> — 출국금지 5,000만원 이상, 명단공개 1,000만원 이상.</li>\n<li><strong>5단계 — 감치·형사 (지속 미지급)</strong> — 가정법원 감치명령(30일 이내) + 형사 고소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">제재조치 4단계 신청을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결정문 자료 + 미지급 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>양육비 결정문·합의서</strong> — 집행권원 자료.</li>\n<li><strong>이행명령 결정문</strong> — 가정법원 이행명령.</li>\n<li><strong>미지급 기록·통장 사본</strong> — 미지급 기간·금액.</li>\n<li><strong>비양육 부모 인적사항</strong> — 주민번호·주소·연락처.</li>\n<li><strong>비양육 부모 재산·소득 정황</strong> — \'정당한 사유\' 부정 자료.</li>\n<li><strong>본인·자녀 가족관계증명</strong> — 청구 신분.</li>\n<li><strong>양육비이행관리원 신청서</strong> — csa.go.kr 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'정당한 사유\'(실직·중대 질병)가 있다면 제재 부정 영역이라 비양육 부모 재산·소득 정황 자료 입증이 핵심. 양육비이행관리원이 직권으로 자료 조회 협조 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 비양육 부모 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"실직·소득 없음" 주장 검증</strong> — 4대보험 가입·세무 자료·소비 정황으로 \'정당한 사유\' 부정 입증. 이행관리원 직권 조회 협조.</li>\n<li><strong>"감치명령 면허정지 중복" 주장 반박</strong> — 행정 제재 + 가사 감치 + 형사 처벌은 별개 트랙 영역. 동시 진행 가능.</li>\n<li><strong>"개인정보 침해" 주장 반박</strong> — 양육비이행법 제21조의3~5 명문 영역. 적법한 처분.</li>\n<li><strong>단계적 압박 권장</strong> — 면허정지 → 출국금지 → 명단공개 → 감치 순으로 단계적 압박. 협상 + 강제이행 결합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 무료 협조 + 제재조치 신청 대행.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 청구권의 시효 기산점',
        summary:
          '대법원 2018스724 사건(대법원, 2024.07.18 선고)에서 법원은 이혼한 부부 사이에서 어느 일방이 과거에 미성년 자녀를 양육하면서 생긴 비용의 상환을 상대방에게 청구하는 경우, 과거 양육비에 관한 권리의 소멸시효는 자녀가 성년이 되어 양육의무가 종료된 때부터 진행한다고 판시했습니다. 이러한 시효 보호 법리는 미지급 양육비에 대한 면허정지·출국금지·명단공개 등 제재조치 트랙에서도 청구권 보호의 근거로 작용하며, 양육비이행법상 행정 제재와 결합해 종합적 압박이 가능한 영역입니다.',
        takeaway: '양육비 미지급 제재조치는 행정 제재 + 가사 감치 + 형사 결합 영역이라, 결정문·미지급 기록·비양육 부모 재산 정황 자료를 정리하면 4단계 신청 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '면허정지 신청 요건이 뭔가요?',
        answer:
          '<strong>정당한 사유 없이 양육비 미지급 시 양육비이행법 제21조의3에 따라 100일 이내 면허정지 가능 영역입니다.</strong> 양육비이행관리원이 신청 대행. 미지급 기간·금액 제한 없음.',
      },
      {
        question: '출국금지는 얼마부터 가능한가요?',
        answer:
          '<strong>양육비 미지급액 합산 5,000만원 이상 + 정당한 사유 없는 경우 출국금지 가능 영역입니다.</strong> 양육비이행관리원 신청. 비양육 부모 해외 도피 방지.',
      },
      {
        question: '명단공개는 어디에 공개되나요?',
        answer:
          '<strong>여성가족부 홈페이지(mogef.go.kr) 양육비 채무자 명단공개 영역입니다.</strong> 3개월 이상 미지급 + 합산 1,000만원 이상 + 소명 기회 부여 후 공개.',
      },
      {
        question: '비양육 부모가 이의신청하면 어떻게 되나요?',
        answer:
          '<strong>여성가족부 양육비이행위원회 심사 트랙입니다.</strong> 정당한 사유(실직·중대 질병) 입증 시 제재 부정 가능. 본인은 반박 자료 제출 + 변호사 자문.',
      },
      {
        question: '제재조치 후 양육비 받는 데 얼마나 걸리나요?',
        answer:
          '<strong>면허정지·출국금지 후 협상 트랙으로 빠른 합의 사례 다수 영역입니다.</strong> 제재 자체가 압박 + 협상 카드. 양육비이행관리원 협조로 합의 가능.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 감치명령 절차', href: '/guide/child-support/child-support-detention-order-3-times-unpaid' },
      { label: '이행관리원 추심 한계', href: '/guide/child-support/child-support-agency-collection-limits' },
      { label: '양육비 미지급 형사 고소', href: '/guide/child-support/child-support-non-payment-criminal' },
      { label: '양육비 직접지급명령', href: '/guide/child-support/child-support-direct-payment-employer-refusal' },
      { label: '양육비 잠적 추적', href: '/guide/child-support/child-support-disappear-tracking-procedure' },
    ],
  },

  // ─── 5. child-support / child-support-deceased-payer-estate-claim ───
  {
    domain: 'child-support',
    slug: 'child-support-deceased-payer-estate-claim',
    keyword: '비양육 부모 사망 양육비 상속재산',
    questionKeyword: '비양육 부모가 사망했어요. 미지급 양육비를 상속재산에서 받을 수 있나요?',
    ctaKeyword: '비양육 부모 사망 양육비 상속',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비양육 부모 사망 양육비 — 4단계 상속 청구 | 로앤가이드',
      description:
        '비양육 부모가 사망한 후 상속재산에서 미지급 양육비를 청구하려면 시효 + 상속 + 한정승인 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비를 못 받고 있던 중 비양육 부모가 사망했어요. 상속재산에서 미지급 양육비를 받을 수 있나요? 자녀도 상속받는데 어떻게 정리하나요?" 비양육 부모 사망 후 양육비 청구는 ① 미지급 양육비 (사망 시점까지) ② 장래 양육비 (사망 후 청구 가능 여부) ③ 자녀의 상속 + 양육친의 채권자 청구 ④ 한정승인·상속포기 4가지 트랙으로 갈리는 영역입니다. 미지급 양육비는 비양육 부모의 채무로서 상속재산에 대한 채권자 청구 가능 영역. 자녀는 상속인 + 양육비 채권자 두 지위를 동시에 가지므로 \'채권채무 혼동\'(민법 제507조)으로 일부 소멸 가능 영역. 또한 상속재산보다 채무가 많으면 한정승인·상속포기 검토가 필요한 사안이에요.</p>',
    sections: [
      {
        title: 'Q. 사망한 비양육 부모 양육비 4가지 청구 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 미지급 채권·장래 청구·상속 혼동·한정승인 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 미지급 양육비 채권 청구</strong> — 사망 시점까지의 미지급분은 비양육 부모의 채무. 상속재산에서 채권자 청구 가능 영역.</li>\n<li><strong>② 장래 양육비 (사망 후 청구 가능 여부)</strong> — 양육의무는 일신전속이라 사망 후 \'장래 양육비\' 청구는 어려운 영역. 다만 자녀가 상속인이라 상속분 결합.</li>\n<li><strong>③ 자녀 상속 + 양육친 채권자 (혼동 검토)</strong> — 자녀가 상속인이면서 양육비 채권자라 \'혼동\' 일부 소멸. 양육친(피상속인 배우자 아닌 양육친)은 별도 채권자.</li>\n<li><strong>④ 한정승인·상속포기 (3개월 내)</strong> — 상속재산보다 채무 많으면 한정승인. 상속개시일로부터 3개월 내 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀는 상속인 + 채권자 양면 영역. 미지급 양육비는 상속재산에서 채권자 청구. 채무 많은 상속은 3개월 내 한정승인·상속포기 결정 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망 확인 → 자료 보존 → 한정승인 결정 → 채권자 청구 → 정산 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망 확인 + 상속재산 조회 (즉시)</strong> — 사망진단서·기본증명서·상속재산 조회 (안심상속원스톱서비스).</li>\n<li><strong>2단계 — 양육비 자료 정리</strong> — 양육비 결정문·합의서·미지급 기록·이행명령 결정문.</li>\n<li><strong>3단계 — 한정승인·상속포기 검토 (3개월 내)</strong> — 상속재산 vs 채무 비교. 가정법원 신청.</li>\n<li><strong>4단계 — 채권자 청구 (양육친 명의)</strong> — 미지급 양육비 + 지연이자. 상속재산관리인 또는 상속인 상대.</li>\n<li><strong>5단계 — 정산·소송 (협의 결렬 시)</strong> — 협의 안 되면 민사소송. 양육비이행관리원 자문.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">사망한 비양육 부모 양육비 4단계 청구를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망 자료 + 양육비 자료 + 상속 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>사망진단서·기본증명서</strong> — 사망 확인.</li>\n<li><strong>피상속인·자녀 가족관계증명</strong> — 상속관계 확인.</li>\n<li><strong>양육비 결정문·합의서</strong> — 양육비 채권 자료.</li>\n<li><strong>미지급 기록</strong> — 미지급 기간·금액.</li>\n<li><strong>안심상속원스톱서비스 결과</strong> — 상속재산·채무 조회.</li>\n<li><strong>한정승인·상속포기 신청서</strong> — 가정법원 양식 (3개월 내).</li>\n<li><strong>본인 가족관계증명</strong> — 양육친 신분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 안심상속원스톱서비스(government24)는 상속재산·채무 한 번에 조회 가능. 사망 1개월 내 신청 권장. 한정승인은 3개월 내 가정법원 신청 — 기한 도과 시 단순승인 간주 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"양육의무는 일신전속이라 상속 안 됨" 주장 검토</strong> — 미지급 양육비(사망 시점까지)는 채무로 상속재산 청구 가능. 장래 양육비는 별도.</li>\n<li><strong>다른 상속인과 협의 필수</strong> — 사망자 배우자·다른 자녀가 상속인이면 협의 필요. 협의 결렬 시 민사.</li>\n<li><strong>한정승인 vs 상속포기 선택</strong> — 채무 + 일부 재산 있으면 한정승인. 채무만 명백 시 상속포기. 변호사 자문.</li>\n<li><strong>3개월 기한 절대 준수</strong> — 한정승인·상속포기 3개월 도과 시 단순승인 간주 영역(민법 제1019조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 양육비 무료 자문.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정·상속 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거 양육비 청구권의 시효',
        summary:
          '대법원 2018스724 사건(대법원, 2024.07.18 선고)에서 법원은 이혼한 부부 사이에서 어느 일방이 과거에 미성년 자녀를 양육하면서 생긴 비용의 상환을 상대방에게 청구하는 경우, 과거 양육비에 관한 권리의 소멸시효는 자녀가 성년이 되어 양육의무가 종료된 때부터 진행한다고 판시했습니다. 또한 대법원 2023스637 사건(대법원, 2024.10.08 선고)은 과거 양육비 분담 범위를 정할 때 재산분할·합의 정황을 종합 고려해야 한다고 보았습니다. 비양육 부모 사망 시 미지급 양육비도 시효가 임박하지 않은 한 상속재산 청구권 보호 영역으로 평가될 수 있습니다.',
        takeaway: '비양육 부모 사망 양육비는 미지급 채권 + 상속 + 한정승인 + 정산 결합 영역이라, 사망진단서·양육비 결정문·상속재산 조회 자료를 정리하면 4단계 청구 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '미지급 양육비도 시효 있나요?',
        answer:
          '<strong>과거 양육비 시효는 자녀 성년 후 진행 영역(2018스724)입니다.</strong> 미성년 양육 중 발생한 양육비는 시효 미진행. 다만 시효 임박 시 빠른 청구 권장.',
      },
      {
        question: '사망 후 장래 양육비도 받을 수 있나요?',
        answer:
          '<strong>양육의무는 일신전속이라 사망 후 \'장래 양육비\' 청구는 어려운 영역입니다.</strong> 다만 자녀가 상속인이라 상속분 결합. 양육친은 자녀 상속분 관리 가능.',
      },
      {
        question: '상속재산보다 채무가 많으면 어떻게 하나요?',
        answer:
          '<strong>한정승인 또는 상속포기 트랙입니다(3개월 내).</strong> 한정승인은 상속재산 한도 변제. 상속포기는 상속 자체 거부. 변호사 자문 + 가정법원 신청.',
      },
      {
        question: '다른 상속인이 협의 안 해주면 어떻게 하나요?',
        answer:
          '<strong>민사소송 트랙입니다.</strong> 미지급 양육비 채권 + 지연이자 청구. 상속재산관리인 선임 가능 영역. 양육비이행관리원 자문.',
      },
      {
        question: '안심상속원스톱서비스는 어디서 신청하나요?',
        answer:
          '<strong>government24·정부24 또는 시군구청 영역입니다.</strong> 사망 후 상속재산·채무 한 번에 조회. 무료. 사망 1개월 내 신청 권장.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 미지급 형사', href: '/guide/child-support/child-support-non-payment-criminal' },
      { label: '양육비 시효 확인', href: '/guide/child-support/child-support-statute-limitation-check' },
      { label: '양육비 일시금 청구', href: '/guide/child-support/child-support-periodic-to-lump-sum-modification' },
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-post-debt' },
      { label: '양육비 잠적 추적', href: '/guide/child-support/child-support-disappear-tracking-procedure' },
    ],
  },

  // ─── 6. dui / dui-widmark-rising-phase-defense ───
  {
    domain: 'dui',
    slug: 'dui-widmark-rising-phase-defense',
    keyword: '음주운전 위드마크 상승기 다툼',
    questionKeyword: '음주측정 결과가 처벌기준치를 살짝 넘었어요. 위드마크와 상승기 다툼 가능한가요?',
    ctaKeyword: '위드마크 상승기 음주운전 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '음주운전 위드마크 상승기 — 4단계 다툼 | 로앤가이드',
      description:
        '음주측정 결과가 처벌기준치를 근소하게 초과했다면 위드마크 + 상승기 4단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술자리에서 30분 후 운전했는데 사고가 나서 음주측정을 받았더니 0.034%로 측정됐어요. 처벌기준 0.03% 살짝 넘은 정도라 다툼 가능한지 궁금해요." 음주운전 처벌기준치 근소 초과는 ① 도로교통법 제44조 처벌기준치 0.03% ② 위드마크 공식 적용 ③ 혈중알코올농도 상승기 다툼 ④ 합리적 의심 + 무죄 추정 4가지 다툼 트랙이 열리는 영역입니다. 대법원 2024도11906·2025도8137 등 일관된 판례는 \'운전 시점이 혈중알코올농도 상승기인 경우 측정 시점 수치만으로 운전 시점 처벌기준치 초과를 단정할 수 없다\'고 판시해 다툼 트랙을 명확히 했습니다. 또한 위드마크 공식으로 추정한 수치가 처벌기준치를 \'근소하게\' 초과하는 정도라면 더욱 신중한 판단이 필요한 영역으로 평가되어, 무죄 사례가 다수 있어요.</p>',
    sections: [
      {
        title: 'Q. 위드마크·상승기 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 상승기·위드마크·근소 초과·합리적 의심 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 시점 vs 측정 시점 시간차 (대법원 2024도11906)</strong> — 운전 종료 후 측정까지 상당 시간 경과 + 상승기 가능성이라면 운전 시점 처벌기준치 초과 단정 어려운 영역.</li>\n<li><strong>② 위드마크 공식 한계 (대법원 2025도8137)</strong> — 위드마크 추정치가 처벌기준치 근소 초과라면 더욱 신중 판단 영역. 음주량·시간·체중 등 개별 사실 입증 부담.</li>\n<li><strong>③ 음주 종료 시점 + 운전 시점 사실 입증 부담</strong> — 검사가 음주 시작·종료·음주량 입증 부담. 본인 진술 외 객관 자료 부족 시 무죄 가능 영역.</li>\n<li><strong>④ 합리적 의심 + 무죄 추정</strong> — 합리적 의심을 배제할 정도의 증명 필요. 의심 여지 있다면 무죄 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 처벌기준치 근소 초과 + 상승기 가능성 + 시간차 결합이 핵심 다툼 트랙. 음주 종료 시점·음주량 객관 자료 부족 시 검사 입증 부담. 변호사 자문 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 조사 → 감정 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 음주측정 결과서·단속 영상·본인 음주 기록·동석자 진술·시간 기록.</li>\n<li><strong>2단계 — 변호인 선임 (즉시)</strong> — 위드마크·상승기 다툼 전략. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 음주 시점·운전 시점 진술. 변호인 동석.</li>\n<li><strong>4단계 — 감정·재측정 검토</strong> — 채혈 재감정·법의학 감정인 의견서.</li>\n<li><strong>5단계 — 형사 본안</strong> — 위드마크 + 상승기 + 합리적 의심 본격 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">위드마크·상승기 4단계 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 자료 + 음주 자료 + 시간 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>음주측정 결과서·채혈 결과</strong> — 측정 수치·시점.</li>\n<li><strong>단속 영상·블랙박스</strong> — 운전 종료 시점.</li>\n<li><strong>음주 영수증·CCTV</strong> — 음주 시작·종료 시점.</li>\n<li><strong>동석자 진술·증언</strong> — 음주량·시간 입증.</li>\n<li><strong>본인 신체 자료 (체중·성별·건강)</strong> — 위드마크 변수.</li>\n<li><strong>의료·법의학 감정인 의견서</strong> — 상승기 입증.</li>\n<li><strong>본인 운전 정황·경로</strong> — 시간 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음주 종료 시점·음주량은 검사 입증 부담 영역이라 본인이 \'기억 모호\'라고만 진술해도 검사 입증 부담 가중. 다만 변호사 자문 후 진술 정리. 식당·술집 영수증·CCTV가 객관 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"측정 시점 수치 = 운전 시점 수치" 주장 반박</strong> — 운전~측정 시간차 + 상승기 가능성 결합 시 단정 부적합 영역(2024도11906).</li>\n<li><strong>"위드마크 추정치 신뢰" 주장 반박</strong> — 근소 초과라면 신중 판단 필요(2025도8137). 음주량·시간 입증 부담 검사.</li>\n<li><strong>"본인 진술이 신빙성" 주장 반박</strong> — 본인 진술 외 객관 자료(영수증·CCTV·동석자) 부족 시 합리적 의심 영역.</li>\n<li><strong>합리적 의심 적극 활용</strong> — 형사재판 무죄 추정 + 합리적 의심 배제 정도 증명 부족 시 무죄 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>중앙행정심판위원회 (acrc.go.kr)</strong> — 면허 취소 행정심판 90일 내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 공식과 혈중알코올농도 상승기 다툼',
        summary:
          '대법원 2024도11906 사건(대법원, 2025.07.18 선고)에서 법원은 음주운전 시점이 혈중알코올농도 상승시점인지 하강시점인지 확정할 수 없는 상황에서 운전 종료 후 상당 시간이 경과하여 측정된 혈중알코올농도가 처벌기준치를 약간 넘은 경우, 실제 운전 시점의 혈중알코올농도가 처벌기준치를 초과하였다고 단정할 수 없다고 판시했습니다. 또한 대법원 2025도8137 사건(대법원, 2025.12.11 선고)은 위드마크 공식에 의해 산출한 수치가 처벌기준치를 근소하게 초과하는 정도라면 범죄 구성요건 사실 인정에 더욱 신중해야 한다고 보았습니다.',
        takeaway: '위드마크·상승기 다툼은 운전·측정 시간차 + 음주량 입증 부담 + 합리적 의심 결합 영역이라, 영수증·동석자 진술·단속 영상·법의학 의견서 자료를 정리하면 4단계 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '측정값 0.034%는 처벌받나요?',
        answer:
          '<strong>처벌기준치 0.03% 초과지만 근소 초과 + 상승기 가능성 결합 시 다툼 트랙 영역입니다.</strong> 운전~측정 시간차 + 음주 종료 시점 자료 정리. 변호사 자문 필수.',
      },
      {
        question: '위드마크 공식이 정확한가요?',
        answer:
          '<strong>위드마크는 추정 영역이라 근소 초과라면 신중 판단 영역입니다(2025도8137).</strong> 음주량·시간·체중 변수에 따라 오차 큼. 검사 입증 부담.',
      },
      {
        question: '음주 종료 직후 운전했는데 상승기인가요?',
        answer:
          '<strong>혈중알코올농도는 음주 후 30분~1시간 30분 사이 상승기 영역입니다.</strong> 음주 종료 직후 운전 + 상당 시간 후 측정이라면 상승기 다툼 가능 영역.',
      },
      {
        question: '본인이 음주량·시간을 정확히 기억 못해요',
        answer:
          '<strong>오히려 검사 입증 부담 가중 영역입니다.</strong> 본인 모호 진술 + 객관 자료 부족 시 합리적 의심. 다만 변호사 자문 후 진술 정리.',
      },
      {
        question: '면허 취소 행정심판은 별도 트랙인가요?',
        answer:
          '<strong>중앙행정심판위원회(acrc.go.kr) 90일 이내 청구 별도 트랙입니다.</strong> 형사 무죄·집행유예와 별개. 무료. 운전 생계 사유 + 절차 위법 종합 변론.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 후 시간 경과 위드마크', href: '/guide/dui/dui-after-driving-drank-widmark-counter' },
      { label: '혈중알코올농도 처벌 기준', href: '/guide/dui/dui-bac-penalty-reference-table' },
      { label: '음주측정 거부 영장', href: '/guide/dui/dui-test-refusal-warrant-blood-extraction' },
      { label: '음주운전 면허 취소 심판', href: '/guide/dui/dui-license-revocation-appeal' },
      { label: '음주운전 첫 대응', href: '/guide/dui/dui-caught-where-to-start' },
    ],
  },
];
