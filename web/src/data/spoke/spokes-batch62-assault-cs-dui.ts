import { SpokePage } from '../spoke-pages';

// batch62 assault·child-support·dui — 6개 (2026-05-12)
//
// 고유 존재 이유:
// assault 3:
// 1. 가정 내 형제 폭행 — 친족간 폭행·가정폭력특례법 트랙.
// 2. 직장 회식 후 동료 폭행 — 산재 + 형사 + 사용자 책임 트랙.
// 3. 학교 운동장 학부모 폭행 — 학교 + 일반 폭행 + 학교 통제권 트랙.
// child-support 2:
// 1. 양육비 채권 양도 추심 — 채권 양도 가능 여부·추심 트랙.
// 2. 양육자 변경 후 미수령 정산 — 양육자 변경 시점 분리·정산 트랙.
// dui 1:
// 1. 음주측정 거부 + 도주 — 측정거부 + 사고 후 도주 가중 트랙.

export const spokesBatch62AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-domestic-sibling-violence-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-domestic-sibling-violence-victim-track',
    keyword: '형제자매 폭행 가정폭력',
    questionKeyword: '성인 동생이 부모님 앞에서 본인을 폭행했어요. 가족이라 신고가 망설여집니다.',
    ctaKeyword: '형제 폭행 신고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '형제자매 폭행 — 5단계 가정폭력특례 트랙 | 로앤가이드',
      description:
        '성인 형제자매 간 폭행 피해를 입었다면 가정폭력특례법·접근금지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동거 중인 30대 동생이 본인(40대 누나)을 부모님 앞에서 머리를 때리고 멱살을 잡았어요. 본인 갈비뼈 멍·진단 2주. 부모님이 \'가족 일\'이라며 신고 말립니다. 가정폭력특례법으로 처리 가능한가요?" 가정폭력범죄의 처벌 등에 관한 특례법은 \'배우자·직계존비속·형제자매\' 간 폭행을 가정폭력범죄로 의제한 영역. 일반 폭행과 달리 ① 임시조치(접근금지·격리) ② 보호처분 (사회봉사·심리치료) ③ 피해자 보호명령 신청권이 추가 영역. 형제자매 동거 시 더 적극 적용 가능. 대응 트랙은 ① 신고·진단 ② 임시조치 신청 ③ 검찰 송치 ④ 보호처분 또는 형사 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 형제 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·임시조치·송치·처분·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 신고·진단서</strong> — 112·응급실.</li>\n<li><strong>② 임시조치 신청</strong> — 접근금지·격리 (가정폭력특례 5조).</li>\n<li><strong>③ 검찰 송치·기소 여부</strong></li>\n<li><strong>④ 보호처분 vs 형사 처벌</strong> — 가정보호사건 분리 가능.</li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"가족 일\" 만류 받아도 신고 권리. 가정폭력특례법은 형사 외 \"보호처분\" 트랙도 제공해 가족관계 회복 여지를 둠.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보호·처분 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·진단서 (즉시)</strong></li>\n<li><strong>2단계 — 임시조치 신청 (경찰)</strong></li>\n<li><strong>3단계 — 피해자 보호명령 (가정법원)</strong></li>\n<li><strong>4단계 — 검찰 송치 → 보호처분 or 기소</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">형제 폭행 가정폭력특례 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 기록·통화</strong></li>\n<li><strong>응급실 진단서</strong></li>\n<li><strong>가족관계증명서 (형제 관계 입증)</strong></li>\n<li><strong>현장 사진·CCTV·녹취</strong></li>\n<li><strong>증인 진술 (부모님 등)</strong></li>\n<li><strong>치료 영수증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동거 vs 별거</strong> — 동거 형제는 더 적극 적용.</li>\n<li><strong>보호처분 vs 형사</strong> — 가족관계 회복 vs 처벌.</li>\n<li><strong>임시조치 효력</strong> — 접근금지 위반 시 별도 처벌.</li>\n<li><strong>피해자 보호명령</strong> — 가정법원 신청 (피해자 본인).</li>\n<li><strong>합의 압박</strong> — 가족 압박은 흔하지만 보호명령은 별개.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>가정폭력 상담소 1577-1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력 불처분결정과 재공소',
        summary:
          '대법원 2016도5423(대법원, 2017.08.23 선고)에서 법원은 가정폭력범죄의 처벌 등에 관한 특례법 제37조 제1항 제1호에 따른 불처분결정이 확정된 뒤 검사가 같은 범죄사실로 다시 공소를 제기하더라도 이중처벌금지 원칙이나 일사부재리 원칙에 위배되지 않는다고 판시했습니다. 가정보호사건의 불처분결정은 형사재판의 유죄·무죄 확정판결과 같은 효력을 가지지 않기 때문입니다. 형제 등 동거 가족 사이의 폭행도 가정폭력 사건으로 다뤄질 수 있는 영역인 만큼, 보호처분이나 불처분으로 끝났더라도 사안에 따라 형사 절차가 다시 진행될 수 있다는 점을 확인해두는 것이 좋습니다.',
        takeaway: '가정폭력은 보호처분 트랙과 형사처벌 트랙이 별개로 이어질 수 있는 영역이라, 임시조치·보호명령으로 안전을 확보하면서 진단서·녹취 등 증거를 함께 정리해두는 방향을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '가족이라 합의 안 하면 어떻게 되나요?',
        answer:
          '<strong>가정보호사건은 합의 무관 진행 가능.</strong> 일반 형사도 친고죄 아닌 폭행은 합의와 별개.',
      },
      {
        question: '임시조치 접근금지는 어떻게 신청하나요?',
        answer:
          '<strong>경찰·검찰이 직권 신청, 또는 피해자 청구 가능 영역입니다.</strong>',
      },
      {
        question: '보호처분이면 전과 안 남나요?',
        answer:
          '<strong>가정보호사건은 형사 전과 미발생 영역입니다.</strong>',
      },
      {
        question: '동거 안 하는 형제도 적용되나요?',
        answer:
          '<strong>동거가 적극 적용 사유.</strong> 별거 형제는 일반 폭행 우선.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '형제자매 폭행 가정폭력', href: '/guide/assault/assault-domestic-sibling-violence-victim-track' },
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '데이트폭력 신변보호 접근금지', href: '/guide/assault/assault-dating-violence-victim-protection' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '가족간 폭행 존속 비속 가중처벌 처벌불원', href: '/guide/assault/assault-domestic-ascendant-descendant-aggravated-no-prosecution' },
    ],
  },

  // ─── 2. assault-workplace-drinking-coworker-track ───
  {
    domain: 'assault',
    slug: 'assault-workplace-drinking-coworker-track',
    keyword: '회식 후 동료 폭행 산재',
    questionKeyword: '회식 후 2차에서 동료가 본인을 때렸어요. 산재 인정 가능한가요?',
    ctaKeyword: '회식 동료 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회식 후 동료 폭행 — 5단계 산재·형사·사용자 책임 | 로앤가이드',
      description:
        '회식·2차에서 동료에게 폭행을 당했다면 산재 인정·사용자 책임·형사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부서 회식 1차 후 2차 노래방에서 동료(같은 팀)가 시비 걸어 본인 얼굴을 가격. 코뼈 골절·전치 4주. 가해자는 \'술자리 일\' 무마. 회식이 회사 공식 자리였으니 산재 인정 가능한가요?" 회식 폭행은 ① 회식의 업무 관련성 ② 회식 후 폭행의 인과 ③ 사용자(회사)의 안전배려의무 위반에 따라 산재 + 형사 + 사용자 책임 트랙으로 분기되는 영역. 회식이 \'사용자 강제·관리 하\'에서 이루어졌으면 산재 인정 가능성 높음. 대응 트랙은 ① 회식 업무성 입증 ② 산재 신청 ③ 형사 고소 ④ 사용자 책임 추궁 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 회식 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무성·산재·형사·사용자·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 회식 업무성</strong> — 강제·관리·법인카드.</li>\n<li><strong>② 산재 신청 (근로복지공단)</strong></li>\n<li><strong>③ 형사 고소 (폭행·상해)</strong></li>\n<li><strong>④ 사용자 안전배려의무 위반</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회식이 \"강제·관리\" 하면 산재 인정 가능. 1차 + 2차 동행이 회사 관행이면 2차도 업무 연장 평가 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·산재·고소·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·응급실 (즉시)</strong></li>\n<li><strong>2단계 — 회식 업무성 입증자료 (1주)</strong></li>\n<li><strong>3단계 — 산재 신청 (근로복지공단)</strong></li>\n<li><strong>4단계 — 형사 고소·사용자 책임 추궁</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회식 폭행 산재·형사 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 회식·폭행·산재 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 공지·법인카드 결제내역</strong></li>\n<li><strong>회식 참석자 명단·동료 진술</strong></li>\n<li><strong>112 신고·응급실 진단서</strong></li>\n<li><strong>노래방·식당 CCTV</strong></li>\n<li><strong>회식 후 출근 인사기록</strong></li>\n<li><strong>가해자·증인 진술서</strong></li>\n<li><strong>본인 신분증·재직증명서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회식의 강제성</strong> — 자율 참석은 산재 인정 어려움.</li>\n<li><strong>1차 vs 2차</strong> — 회사 관행이면 2차도 인정 여지.</li>\n<li><strong>사용자 책임</strong> — 안전배려 + 사용자 책임.</li>\n<li><strong>가해자 합의</strong> — 합의는 양형, 산재와 별개.</li>\n<li><strong>심리적 후유증</strong> — 정신과 진료 별도 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행 사건 진술조서의 증거능력',
        summary:
          '대법원 2022도364(대법원, 2022.06.16 선고)는 특수폭행·상해 등이 문제된 사건에서, 수사기관이 작성한 참고인 진술조서의 실질적 진정성립은 원진술자의 법정 진술이나 영상녹화물 등 객관적 방법으로 증명되어야 하고, 형사소송법과 형사소송규칙이 정한 방식·절차를 위반해 만든 영상녹화물로는 원칙적으로 이를 증명할 수 없다고 판시했습니다. 폭행 사건에서는 피해자·목격자의 진술이 유죄의 핵심 증거가 되는 만큼, 그 진술조서가 적법한 절차로 작성됐는지가 중요하다는 취지입니다. 회식 자리 폭행처럼 목격자 진술에 크게 의존하는 사건이라면 진술 확보와 그 절차의 적법성을 함께 정리해두는 것이 좋습니다.',
        takeaway: '회식 폭행은 목격자·피해자 진술이 결론을 가르는 영역이라, 초기부터 진술을 확보하고 조서 작성 절차의 적법성까지 점검하는 방향을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '2차 노래방도 산재 인정되나요?',
        answer:
          '<strong>회사 관행·법인카드 결제 시 인정 여지가 있습니다.</strong>',
      },
      {
        question: '가해자가 합의 요구해요',
        answer:
          '<strong>합의는 양형 자료, 산재·민사와 별개입니다.</strong> 신중 결정.',
      },
      {
        question: '회사가 진단서 안 받으려 해요',
        answer:
          '<strong>근로복지공단 직접 신청 가능합니다.</strong> 회사 거부와 무관.',
      },
      {
        question: '사용자에게 책임 묻는 근거는?',
        answer:
          '<strong>안전배려의무 + 회식 중 사고 사용자 책임 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '통근 중 사고 산재 인정', href: '/guide/industrial-accident/industrial-accident-commute-route-track' },
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '출퇴근 중 사고 산재 인정', href: '/guide/industrial-accident/industrial-accident-commute-track' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
    ],
  },

  // ─── 3. assault-school-parent-pta-fight-track ───
  {
    domain: 'assault',
    slug: 'assault-school-parent-pta-fight-track',
    keyword: '학교 학부모 폭행',
    questionKeyword: '학교 운동장에서 다른 학부모에게 폭행당했어요. 학교 책임은 없나요?',
    ctaKeyword: '학부모 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학교 운동장 학부모 폭행 — 5단계 일반·시설·교육감 책임 | 로앤가이드',
      description:
        '학교 운동장·교문 앞 학부모 폭행에서 일반 폭행·시설관리 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"초등학교 운동회 날 다른 학부모와 시비 끝에 운동장에서 본인이 멱살을 잡혀 넘어졌어요. 손목 골절·전치 5주. 가해자는 \'아이들 보는 앞에서 무슨\' 무마. 학교 책임도 묻고 싶은 상황입니다." 학부모 간 폭행은 ① 일반 폭행죄 ② 학교 시설관리 책임 (교육감·지자체) ③ 학생 정신적 피해 별도 평가 영역. 운동회·공개수업 등 학교 공식 행사 중 사고는 학교 안전관리·통제 책임 검토 영역. 대응 트랙은 ① 신고·진단 ② 형사 고소 ③ 학교 시설관리 자료 ④ 영조물 책임 (필요시) ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 학부모 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·시설·영조물·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 신고·진단</strong></li>\n<li><strong>② 형사 고소 (폭행·상해)</strong></li>\n<li><strong>③ 학교 시설관리·안전관리 자료</strong></li>\n<li><strong>④ 영조물 책임 (예외적)</strong></li>\n<li><strong>⑤ 민사 손해배상 + 자녀 정신적 피해</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학부모 폭행은 주로 일반 폭행. 학교 책임은 예외적으로 인정. 공식 행사 + 통제 부재가 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·응급실 (즉시)</strong></li>\n<li><strong>2단계 — 학교 CCTV·증인 (1주)</strong></li>\n<li><strong>3단계 — 형사 고소 (폭행·상해)</strong></li>\n<li><strong>4단계 — 학교 시설관리 자료 요청</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·시설 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 기록·진단서</strong></li>\n<li><strong>학교 운동장·교문 CCTV</strong></li>\n<li><strong>학교 행사 공지·일정표</strong></li>\n<li><strong>증인 학부모·교사 진술</strong></li>\n<li><strong>현장 사진·자녀 진술 (가능 시)</strong></li>\n<li><strong>치료 영수증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>학교 통제권 범위</strong> — 공식 행사 중 통제 의무.</li>\n<li><strong>학생 정신적 피해</strong> — 자녀 별도 청구 가능.</li>\n<li><strong>학부모회·동창회</strong> — 단체 책임 검토.</li>\n<li><strong>가해자 학부모 신원</strong> — 학교 협조로 특정.</li>\n<li><strong>합의 vs 양형</strong> — 합의 시 처벌 약화.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·119</strong></li>\n<li><strong>학교폭력신고센터 117 (학생 피해 시)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 학교 안 유형력과 폭행 성립',
        summary:
          '대법원 2001도5380(대법원, 2004.06.10 선고)에서 법원은 교사의 학생 지도행위가 형법 제20조의 정당행위로 인정되려면 그 동기·수단·방법이 당시 상황에 비추어 사회통념상 객관적 타당성을 갖춰야 하고, 이를 벗어난 유형력 행사는 폭행으로 평가될 수 있다고 판시했습니다. 장소가 학교라는 사정만으로 신체적 접촉이 정당행위로 면책되지는 않는다는 취지입니다. 학부모 사이의 물리적 충돌 역시 학교 행사 중이라는 이유로 당연히 정당화되는 것은 아니므로, 진단서·목격자 진술 등을 근거로 폭행 성립 여부를 정리해두는 것이 좋습니다.',
        takeaway: '학교 안에서 벌어진 충돌도 정당행위 요건을 벗어나면 폭행으로 다뤄질 수 있는 영역이라, 상해진단서·CCTV·목격자 진술을 확보해 대응 방향을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '자녀가 충격받았는데 별도 청구 되나요?',
        answer:
          '<strong>가능합니다.</strong> 자녀 정신과 진료 + 위자료 별도.',
      },
      {
        question: '학교 CCTV 받을 수 있나요?',
        answer:
          '<strong>경찰 통해 요청 가능합니다.</strong> 본인 직접은 거부 가능.',
      },
      {
        question: '학교 측에 책임 묻기 어려운가요?',
        answer:
          '<strong>일반적으로 어렵습니다.</strong> 통제 명백 부재 시 예외.',
      },
      {
        question: '가해자가 합의 거부해요',
        answer:
          '<strong>형사·민사 진행하면 됩니다.</strong> 합의는 양형 자료.</p>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '학교폭력 피해 신고 후 자치위원회 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '합의금 산정', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '재범 가중 처벌', href: '/guide/assault/assault-repeat-offense-escalation' },
    ],
  },

  // ─── 4. child-support-claim-assignment-recovery-track ───
  {
    domain: 'child-support',
    slug: 'child-support-claim-assignment-recovery-track',
    keyword: '양육비 채권 양도 추심',
    questionKeyword: '양육비 못 받은 분을 채권 양도 받아 추심 가능한가요? 친정엄마가 도와주신다는데요.',
    ctaKeyword: '양육비 채권 양도 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 채권 양도 추심 — 5단계 양도 가능성·절차 | 로앤가이드',
      description:
        '양육비 채권을 가족·제3자에게 양도해 추심하는 5가지 가능성·한계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전남편이 양육비 2년치 1,400만원 미지급. 본인은 시간·여력 없어 친정엄마가 \'본인이 받아주겠다\'며 채권 양도 받아 추심하려 합니다. 양육비 채권 양도가 가능한지 막막한 상황." 양육비 채권은 \'자녀 부양\' 성격이라 일반적인 금전채권 양도와 다른 영역. 미지급 \'과거 양육비\'는 양도 가능성 있는 사례, \'장래 양육비\'는 양도 어렵다는 흐름. 대응 트랙은 ① 과거·장래 구분 ② 채권양도 통지 ③ 양육비이행관리원 vs 양수인 추심 ④ 강제집행 ⑤ 회수 5단계. 양육비이행관리원 지원은 양수인엔 미적용이라는 한계도 있습니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 채권 양도 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 구분·양도·추심·집행·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 과거 양육비 vs 장래</strong> — 과거는 양도 여지, 장래는 어려움.</li>\n<li><strong>② 채권양도 + 채무자 통지</strong></li>\n<li><strong>③ 양수인 직접 강제집행</strong></li>\n<li><strong>④ 양육비이행관리원 vs 양수인</strong> — 양수인은 이행원 지원 미적용 영역.</li>\n<li><strong>⑤ 회수·정산</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 과거 양육비는 양도 후 가족이 추심 가능. 다만 양육비이행관리원의 직권 추심·제재(출국금지·신상공개)는 양수인엔 적용 곤란 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추심 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·통지·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채권양도계약 작성 (즉시)</strong></li>\n<li><strong>2단계 — 채무자(전 배우자) 통지 (내용증명)</strong></li>\n<li><strong>3단계 — 양수인 명의로 강제집행 신청</strong></li>\n<li><strong>4단계 — 재산조회·압류·추심</strong></li>\n<li><strong>5단계 — 회수·자녀에 정산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 채권 양도 가능성을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·집행·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>양육비 판결문·조정조서</strong></li>\n<li><strong>미지급 내역·계산서</strong></li>\n<li><strong>채권양도계약서</strong></li>\n<li><strong>채무자 통지 내용증명</strong></li>\n<li><strong>전 배우자 재산조회 자료</strong></li>\n<li><strong>강제집행 신청서</strong></li>\n<li><strong>본인·양수인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>장래 양육비 양도 어려움</strong> — 자녀 부양 본질.</li>\n<li><strong>양육비이행관리원 미적용</strong> — 양수인 한계.</li>\n<li><strong>통지 부재 시 대항력 없음</strong></li>\n<li><strong>친족 양도 사해 의심</strong> — 채무자의 사해행위 주장 가능성.</li>\n<li><strong>정산 의무</strong> — 회수 후 자녀에 사용 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성가족부 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 채권이 재산권으로 확정되는 시점',
        summary:
          '대법원 2008스67(대법원, 2011.07.29 선고)에서 법원은 양육비를 구할 권리가 처음에는 친족관계에 기초한 추상적 법적 지위에 불과하다가, 당사자의 협의나 가정법원의 심판을 통해 구체적인 지급청구권으로 전환되어야 비로소 독립한 재산적 권리로서의 성질을 가진다고 판시했습니다. 구체적 청구권으로 성립하기 전 단계의 과거 양육비에 관한 권리는 아직 행사할 수 있는 재산권으로 보기 어렵다는 취지입니다. 따라서 양육비 채권을 양도·추심하려면 먼저 협의서나 심판·판결로 금액이 확정되어 구체적 청구권이 성립했는지부터 확인해두는 것이 좋습니다.',
        takeaway: '양육비 채권 양도·추심은 금액이 협의·심판으로 확정된 뒤라야 실효성이 생기는 영역이라, 집행권원 확보 여부를 먼저 점검하는 방향을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '양육비이행관리원 도움 받을 수 있나요?',
        answer:
          '<strong>본인(양육친) 신청 가능합니다.</strong> 양도 후 양수인엔 미적용 영역.',
      },
      {
        question: '장래 양육비도 양도되나요?',
        answer:
          '<strong>제한이 있습니다.</strong> 자녀 부양 본질상.',
      },
      {
        question: '회수 후 자녀에 안 줘도 되나요?',
        answer:
          '<strong>정산 의무가 있습니다.</strong> 양육친 → 자녀 양육비.',
      },
      {
        question: '내용증명만 보내면 되나요?',
        answer:
          '<strong>채무자 통지가 핵심입니다.</strong> 통지 없으면 양도 대항력 없음.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 비현금 부동산 예금', href: '/guide/child-support/child-support-non-cash-payment-property-recognition-track' },
      { label: '양육비 합의 후 잠적 추적', href: '/guide/child-support/child-support-disappear-tracking-procedure' },
      { label: '양육비 미지급 감치명령 신청', href: '/guide/child-support/child-support-detention-order-3-times-unpaid' },
      { label: '양육비 미지급 시 강제집행 방법 3가지', href: '/guide/child-support/child-support-enforcement-methods' },
      { label: '양육비 청구 어디부터 시작해야 하나', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ─── 5. child-support-custodian-change-arrears-track ───
  {
    domain: 'child-support',
    slug: 'child-support-custodian-change-arrears-track',
    keyword: '양육자 변경 후 미수령 정산',
    questionKeyword: '양육자가 엄마에서 아빠로 바뀌었어요. 엄마가 그동안 못 받은 양육비는 어떻게 처리되나요?',
    ctaKeyword: '양육자 변경 미수령 정산',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육자 변경 후 미수령 양육비 — 5단계 정산 점검 | 로앤가이드',
      description:
        '양육자가 도중에 변경됐을 때 이전 양육친의 미수령 양육비·새 양육친 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인(엄마)이 5년간 자녀 양육하며 아빠로부터 양육비 받지 못했어요. 자녀 의사로 양육자가 아빠로 변경됐는데, 그동안 본인이 못 받은 양육비는 누가 청구하나요?" 양육자 변경 후 ① 변경 이전 미수령분은 \'이전 양육친\'에게 귀속 ② 변경 이후는 \'새 양육친\'에게 귀속되는 영역. 과거 미수령분은 변경 이전 양육친이 별도 청구·집행 가능한 사례. 다만 양육친 변경 결정 시 \'과거분 정산\'을 함께 결정한 경우는 그 결정을 따르는 흐름. 대응 트랙은 ① 미수령 기간·금액 산정 ② 별도 청구권 확인 ③ 강제집행 ④ 새 양육친 청구 ⑤ 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육자 변경 후 정산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간·청구권·집행·새양육친·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 미수령 기간·금액 산정</strong></li>\n<li><strong>② 이전 양육친 별도 청구권</strong></li>\n<li><strong>③ 강제집행 (이전분)</strong></li>\n<li><strong>④ 새 양육친 청구 (변경 이후)</strong></li>\n<li><strong>⑤ 정산·자녀 사용</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육친 변경 = 시점 기준 분리. 이전 미수령은 이전 양육친, 이후는 새 양육친. 양육친 변경 결정문에 정산 조항 있으면 그것 우선.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정산 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정·청구·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미수령 기간·금액 산정 (즉시)</strong></li>\n<li><strong>2단계 — 양육친 변경 결정문 확인</strong></li>\n<li><strong>3단계 — 이전 양육친 명의 청구·집행</strong></li>\n<li><strong>4단계 — 새 양육친 현재 양육비 청구</strong></li>\n<li><strong>5단계 — 시효 10년 내 회수</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">양육자 변경 정산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 변경·미수령·집행 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼판결·양육비 결정문</strong></li>\n<li><strong>양육자 변경 결정문</strong></li>\n<li><strong>미수령 기간·금액 계산서</strong></li>\n<li><strong>지급 영수증·통장 입출금</strong></li>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>전 배우자 재산조회 자료</strong></li>\n<li><strong>강제집행 신청서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>변경 결정문 정산 조항</strong> — 우선 적용.</li>\n<li><strong>시효 10년</strong> — 미수령분 청구.</li>\n<li><strong>새 양육친의 청구권</strong> — 변경 이후만.</li>\n<li><strong>일시금 합산</strong> — 미수령·장래 별도 결정.</li>\n<li><strong>이행관리원 지원</strong> — 양육친 본인만.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 안내</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육자 지정 기준으로 갈리는 권리·의무',
        summary:
          '대법원 2020다240021(대법원, 2022.04.14 선고)에서 법원은 이혼으로 부모 중 한 사람이 친권자 및 양육자로 지정된 경우, 그렇지 않은 부모는 단지 미성년 자녀의 부모라는 사정만으로는 원칙적으로 그 자녀에 대한 감독의무를 부담하지 않는다고 판시했습니다. 자녀를 실제 양육하며 친권을 행사하는 부모와 그렇지 않은 부모의 권리·의무가 양육자 지정을 기준으로 구분된다는 취지입니다. 이런 법리에 비추어 보면 양육자가 변경된 경우에도 변경 시점을 기준으로 양육비 관련 권리·부담의 귀속 주체가 달라질 수 있으므로, 변경 결정문과 정산 조항을 함께 확인해두는 것이 좋습니다.',
        takeaway: '양육자 변경 전후로 권리·부담의 귀속 주체가 나뉠 수 있는 영역이라, 변경 결정문의 정산 조항과 미수령 내역을 정리해 청구 주체를 점검하는 방향을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 월 미지급 시점부터 10년입니다.</strong>',
      },
      {
        question: '양육친 변경 시 일괄 정산해야 하나요?',
        answer:
          '<strong>변경 결정 시 정산 조항 포함 가능합니다.</strong>',
      },
      {
        question: '새 양육친이 과거분도 청구할 수 있나요?',
        answer:
          '<strong>일반적으로 불가합니다.</strong> 변경 이전은 이전 양육친 청구권.',
      },
      {
        question: '이행관리원 도움 받을 수 있나요?',
        answer:
          '<strong>이전 양육친 본인만 신청 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육자 변경 후 미수령 정산', href: '/guide/child-support/child-support-custodian-change-arrears-track' },
      { label: '사실혼 친자관계 인지청구 양육비', href: '/guide/child-support/child-support-cohabitation-paternity-claim' },
      { label: '양육비 이행명령 신청 방법', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '사실혼 자녀 인지청구 + 양육비', href: '/guide/child-support/child-support-cohabitation-paternity-recognition-claim-track' },
      { label: '양육비 미지급 운전면허 정지 출국금지', href: '/guide/child-support/child-support-license-suspension-petition-procedure' },
    ],
  },

  // ─── 6. dui-test-refusal-flee-aggravated-track ───
  {
    domain: 'dui',
    slug: 'dui-test-refusal-flee-aggravated-track',
    keyword: '음주측정 거부 도주',
    questionKeyword: '음주측정 요구받았는데 거부하고 자리를 떴어요. 측정거부 + 도주 가중되나요?',
    ctaKeyword: '측정거부 도주 가중',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 + 도주 — 5단계 가중 처벌 점검 | 로앤가이드',
      description:
        '음주측정 거부 후 자리를 뜬 경우 측정거부 + 사고 후 도주 가중 처벌 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 음주운전 단속에서 측정을 거부하고 \'화장실 다녀오겠다\' 한 뒤 차를 두고 도주했어요. 본인 차량 번호 식별돼 다음 날 출석 요구. 측정거부 + 도주로 가중되는지, 형량은 어느 정도인지 막막합니다." 음주측정 거부는 도로교통법 제148조의2 제1항·2항에 해당하며 1년 이상 5년 이하 징역 또는 500만원 이상 2천만원 이하 벌금이라는 법조문 흐름. 사고 발생 시엔 \'도주\'(특정범죄가중처벌법 제5조의3 도주차량)로 추가 적용 가능 영역. 사고가 없었어도 \'단속 회피\' 의도가 입증되면 양형 가중 사정. 대응 트랙은 ① 거부 경위 ② 사고 여부 ③ 자발적 출석 ④ 변호인 선임 ⑤ 합의·반성 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 측정거부 + 도주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·사고·출석·변호·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거부 경위·정황</strong> — 의도 vs 부득이.</li>\n<li><strong>② 사고 동반 여부</strong> — 도주차량 가중.</li>\n<li><strong>③ 자발적 출석</strong> — 양형 감경.</li>\n<li><strong>④ 변호인 선임 (수사 단계)</strong></li>\n<li><strong>⑤ 합의·반성·기부 등 양형</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정거부 자체로 별도 처벌. 사고 동반·도주 의도면 가중. 자발적 출석·반성이 양형 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 출석·변호·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자발적 출석·진술 (즉시)</strong></li>\n<li><strong>2단계 — 변호인 선임 (수사 초기)</strong></li>\n<li><strong>3단계 — 사고 여부·과실 확인</strong></li>\n<li><strong>4단계 — 합의·반성문·기부</strong></li>\n<li><strong>5단계 — 양형 감경 신청</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">측정거부·도주 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·반성·재정 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 출석 통지서·진술서</strong></li>\n<li><strong>차량·보험 자료</strong></li>\n<li><strong>반성문·서약서·기부 영수증</strong></li>\n<li><strong>가족·지인 탄원서</strong></li>\n<li><strong>본인 신분증·운전면허</strong></li>\n<li><strong>재정·가족부양 입증자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부 의도 입증</strong> — \"화장실 갔다\" 변명 신중 검토.</li>\n<li><strong>사고 동반 시 도주 가중</strong> — 특가법.</li>\n<li><strong>자발 출석</strong> — 양형 감경.</li>\n<li><strong>면허 행정처분 별도</strong> — 형사와 분리.</li>\n<li><strong>음주 미입증 시 형량</strong> — 측정거부 단독 처벌.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (수사 단계 신청 가능)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주 은폐 목적 현장 이탈과 도주',
        summary:
          '대법원 2000도2563(대법원, 2001.01.05 선고)에서 법원은 특정범죄가중처벌법상 \'도주\'란 사고 운전자가 피해자의 사상 사실을 알면서도 구호 등 필요한 조치를 하지 않고 사고 현장을 이탈해 사고를 낸 사람이 누구인지 확정될 수 없는 상태를 만드는 것을 의미한다고 밝혔습니다. 그러면서 사고 후 현장을 벗어난 것이 음주운전 사실을 숨기기 위한 행위였다는 이유만으로 도주의 고의를 쉽게 부정해서는 안 된다고 보아, 이를 부정한 원심을 도주차량 법리오해로 파기했습니다. 음주측정 거부에 더해 사고 현장 이탈까지 겹치면 도주차량죄가 함께 문제 될 수 있는 만큼, 초기 진술과 현장 이탈 경위를 정확히 정리해두는 것이 좋습니다.',
        takeaway: '측정거부와 사고 후 현장 이탈이 겹치면 도주차량죄까지 함께 다뤄질 수 있는 영역이라, 자발적 출석과 경위 소명을 준비하는 방향을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '\"화장실 갔다\" 변명이 통하나요?',
        answer:
          '<strong>일반적으로 어렵습니다.</strong> 단속 회피 의도로 평가.',
      },
      {
        question: '사고가 없었으면 도주 아닌가요?',
        answer:
          '<strong>특가법 도주 미적용. 측정거부 단독 적용 영역입니다.</strong>',
      },
      {
        question: '자수하면 형 감경되나요?',
        answer:
          '<strong>가능합니다.</strong> 자발 출석·반성은 양형 감경 사유.',
      },
      {
        question: '면허 행정처분도 받나요?',
        answer:
          '<strong>네, 형사와 별도로 면허취소·정지 검토됩니다.</strong>',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 과호흡 불응 측정거부 여부', href: '/guide/dui/dui-breath-test-hyperventilation-refusal-falsely-accused-defense' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주 사고 후 도주 처벌', href: '/guide/dui/dui-accident-flee-scene-track' },
      { label: '음주운전 행정심판 준비서류와 절차', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '음주측정기 오류 대응 방법', href: '/guide/dui/breathalyzer-error-response' },
    ],
  },
];
