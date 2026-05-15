import { SpokePage } from '../spoke-pages';

// batch66 dismissal — 5개 (2026-05-16)
//
// 고유 존재 이유:
// 1. 교대근무 전환 거부 후 해고 — 취업규칙 불이익 변경 동의·근로조건 일방 변경 한계 트랙 (기존 hoesik-refusal·night-shift 와 분기: 사적 거부가 아니라 일방적 교대제 전환 자체 다툼).
// 2. 상대평가 하위등급 누적 저성과자 해고 — 평가 객관성·소명·교육기회 부여 의무 결합 (기존 probation-no-criteria 와 분기: 정식직 누적 평가 트랙).
// 3. 해외지사 발령 거부 해고 — 인사권 재량 한계·생활 근거지·가족 사정 비교형량 (기존 transfer/distance 류 와 분기: 국내 전보가 아니라 해외 발령 특수 사정).
// 4. 스타트업 자금소진 정리해고 — 긴급한 경영상 필요·해고회피노력·선정기준·노조협의 4요건 (기존 redundancy/merger 와 분기: 시리즈 A 실패라는 스타트업 특유 단계 트랙).
// 5. 관리직 직위해제 후 대기발령·창고배치 사직압박 — 직위해제 정당성·기간·실질해고 판단 (기존 resignation-pressure 와 분기: 직위해제 → 비핵심 부서 배치 단계 결합).

export const spokesBatch66Dismissal: SpokePage[] = [
  // ─── 1. dismissal-rotating-shift-refuse-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-rotating-shift-refuse-fire-track',
    keyword: '교대근무 거부 해고',
    questionKeyword: '회사가 주간 근무에서 야간 교대제로 일방 전환했는데 거부했더니 해고됐어요. 적법한가요?',
    ctaKeyword: '교대근무 거부 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교대근무 거부 해고 — 5단계 취업규칙 불이익 변경 다툼 | 로앤가이드',
      description:
        '주간에서 야간 교대제 일방 전환을 거부했다 해고됐다면 근기법 94조·근로조건 변경 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 때부터 5년간 주간 9-6 근무였는데, 어느 날 회사가 \'생산성 향상\'을 이유로 주간·야간 2조 2교대제로 전환하겠다며 다음 달부터 적용한다고 통보. 보육 일정·통근 거리 때문에 거부했더니 \'업무 명령 불복종\'으로 인사위 회부, 두 주 만에 해고. 다른 동료들은 동의 서명을 했고 본인만 거부해 표적이 됐어요." 근기법 제94조는 취업규칙을 근로자에게 불이익하게 변경하는 경우 과반수 노조 또는 근로자 과반수의 동의를 요구하는 영역이고, 근로조건의 본질적 변경(근로시간대·생활 패턴 변화)은 일방적 명령으로 강제할 수 없는 사정으로 평가될 여지가 있는 트랙입니다. 거부 자체가 정당한 권리행사이면 ① 부당해고 ② 근기법 94조 위반 ③ 근로조건 불이익 변경 무효 ④ 노동위 구제 4중 트랙이 가능한 영역. 대응은 ① 근로계약·취업규칙 ② 동의 절차 ③ 불이익 입증 ④ 노동위 구제 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 교대근무 거부 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·동의·불이익·구제·차별 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로계약·취업규칙상 근무형태</strong> — 주간 고정이 명시·관행이었는지.</li>\n<li><strong>② 변경 절차 (과반수 동의)</strong> — 근기법 94조 불이익 변경 동의 절차.</li>\n<li><strong>③ 불이익 정도 입증</strong> — 야간수당 외 건강·가정 영향.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 근로조건 변경 무효.</li>\n<li><strong>⑤ 차별·표적 사정</strong> — 거부자 본인만 해고 시 보복 평가 여지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로조건의 본질적 변경은 일방 명령으로 강제하기 어려운 영역. 거부가 정당한 권리 행사라면 그 거부를 사유로 한 해고는 위법 평가 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로계약·취업규칙 자료 보존 (즉시)</strong> — 입사 당시 근무형태·과거 근태 기록.</li>\n<li><strong>2단계 — 변경 통보·동의 절차 자료 (1주)</strong> — 전환 공지·동의서·서명자 명단.</li>\n<li><strong>3단계 — 거부 의사 표시 자료 (1주)</strong> — 거부 사유서·메일·메신저.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 근로조건 변경 무효.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">교대근무 거부 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·변경·거부 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙 (근로시간·근무형태 조항)</strong></li>\n<li><strong>입사 후 근태·근무표 (주간 고정 관행 입증)</strong></li>\n<li><strong>교대제 전환 공지·시행 통보서</strong></li>\n<li><strong>동의서 양식·동료 서명자 명단</strong></li>\n<li><strong>거부 사유서·메일·메신저</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>가족·건강 영향 자료 (보육 일정·진단서 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거부 의사 표시 때 \"근로조건 본질적 변경에 대한 부동의\" 문구를 명시한 서면이 입증력 가장 강함. 구두 거부는 회사가 \"동의했다\"고 부인할 여지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>불이익 변경 해당성</strong> — 근로시간대·생활 패턴 변경은 본질적 변경 평가 영역.</li>\n<li><strong>과반수 동의 절차</strong> — 개별 동의 누락 시 변경 무효.</li>\n<li><strong>야간수당 상계 주장</strong> — 수당이 있다고 동의 갈음 안 됨.</li>\n<li><strong>거부자 표적</strong> — 동의자 유지·본인만 해고 시 차별 사정.</li>\n<li><strong>업무 명령권 한계</strong> — 근로조건 본질 변경은 명령권 범위 외.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 불이익 변경과 동의',
        summary:
          '대법원 2017두62492(대법원, 2023.05.11 선고) 영역에서 법원은 근로조건을 근로자에게 불이익하게 변경하는 취업규칙은 근로자 과반수 또는 노동조합의 동의를 받아야 하고, 그러한 절차를 거치지 않은 변경은 동의하지 않은 근로자에 대하여는 효력이 없으며, 그 불이익한 변경에 따른 의무 불이행을 이유로 한 처분 역시 정당성이 부정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '근로조건 본질 변경은 과반수 동의 필요. 동의 절차 흠결 시 거부자에 대한 처분은 정당성 부정 평가.',
      },
    ],
    faq: [
      {
        question: '동료 다수가 동의했으면 본인도 따라야 하나요?',
        answer:
          '<strong>과반수 동의가 있어도 개별 근로계약상 본질적 근로조건은 별도 동의 필요한 영역으로 평가될 수 있습니다.</strong>',
      },
      {
        question: '야간수당을 주니까 불이익 아니라고 회사가 해요',
        answer:
          '<strong>수당 지급이 근로조건 변경 동의를 갈음하지 않습니다.</strong> 생활 패턴·건강 영향이 별도 평가 영역.',
      },
      {
        question: '거부 사유로 가족·보육 일정을 들었는데 인정될까요?',
        answer:
          '<strong>가정 양립 사정은 거부의 합리적 사유로 평가될 여지가 있는 영역입니다.</strong> 진단서·보육 일정표 보존.',
      },
      {
        question: '취업규칙에 "회사가 정한다"라고만 돼 있어요',
        answer:
          '<strong>포괄 위임 조항만으로는 본질적 변경 동의를 갈음하지 못합니다.</strong> 별도 동의 절차 필요.',
      },
      {
        question: '권고사직서를 받았는데 거부 후 압박이었어요',
        answer:
          '<strong>의사 하자 + 근로조건 변경 보복 결합 다툼 가능한 영역입니다.</strong> 압박 정황 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '취업규칙 변경 절차', href: '/guide/dismissal/dismissal-work-rules-change-procedure' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 2. dismissal-evaluation-rank-bottom-firing-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-evaluation-rank-bottom-firing-track',
    keyword: '상대평가 하위등급 해고',
    questionKeyword: '상대평가 하위 5% 누적이라며 저성과자 해고 통보를 받았어요. 다툴 수 있나요?',
    ctaKeyword: '저성과자 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상대평가 하위등급 해고 — 5단계 저성과자 4요건 다툼 | 로앤가이드',
      description:
        '상대평가 하위 5% 누적으로 해고됐다면 평가 객관성·소명·교육기회 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 연속 상대평가 하위 5%에 속했다는 이유로 \'저성과자 관리 프로그램\' 대상이 됐고, 두 분기 추가 평가 후 \'개선되지 않았다\'며 해고 통보. 사실 평가표는 본인이 본 적도 없고 평가자 면담·소명 기회·재교육 프로그램도 형식적이었습니다. 같은 팀에서 본인보다 사업 실수가 컸던 동료는 살아남고, 평가 점수 일부는 누락·임의 보정된 정황도 있어요." 저성과자 해고는 단순 점수 낮음만으로 정당화되지 않고 ① 평가 기준의 객관성·공정성 ② 평가 결과 통지·소명 기회 부여 ③ 교육·전환 배치 등 개선 기회 부여 ④ 사회통념상 상당성 4가지 심사를 통과해야 정당성 인정 영역. 대응은 ① 평가표·기준 ② 소명 기회 ③ 교육 기회 ④ 동료 비교 ⑤ 노동위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상대평가 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기준·소명·기회·비교·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가 기준 객관성</strong> — 측정 가능 지표·평가자 다수·기록 보존.</li>\n<li><strong>② 평가 결과 통지·소명</strong> — 점수 공개·이의 절차 부여 여부.</li>\n<li><strong>③ 개선 기회 부여</strong> — 교육·전환 배치·구체적 목표 설정.</li>\n<li><strong>④ 동일 평가 동료 비교</strong> — 본인만 해고 시 자의적 운영 사정.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 부당해고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상대평가는 누군가는 반드시 하위가 되는 구조. 그 자체만으로 해고 사유가 되기 어렵고, 평가 절차의 객관성·소명·기회 부여 4요건 충족 여부가 다툼 축입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평가표·기준·점수 자료 요청 (즉시)</strong> — 회사에 평가 자료 공개 요청.</li>\n<li><strong>2단계 — 소명·교육 기회 자료 (1~2주)</strong> — 면담 기록·교육 프로그램 운영 실적.</li>\n<li><strong>3단계 — 동료 비교·평가 누락 정황 (2주)</strong> — 동일 등급 동료 처우·점수 흠결.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 평가 절차·실체 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상대평가 저성과자 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·소명·기회 갈래입니다.</strong></p>\n<ul>\n<li><strong>평가표·평가 기준·운영 매뉴얼</strong></li>\n<li><strong>본인 평가 점수·면담 기록</strong></li>\n<li><strong>저성과자 관리 프로그램 운영 자료</strong></li>\n<li><strong>교육·전환 배치 실시 내역</strong></li>\n<li><strong>동일 등급 동료 처우 비교</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>업무 성과 자료 (실적·고객 평가 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 평가표·면담 기록 공개를 거부하면 그 자체가 절차 흠결 사정으로 평가될 여지. 노동위 심문 단계에서 자료제출 명령 요청 가능합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 기준 모호</strong> — 측정 지표 부재·평가자 단일 시 객관성 부정.</li>\n<li><strong>소명 기회 형식화</strong> — 형식 면담만 진행한 경우 절차 흠결.</li>\n<li><strong>개선 기회 부재</strong> — 교육·전환 배치 없이 해고 시 정당성 부정 강함.</li>\n<li><strong>상대평가 구조 자체</strong> — 누군가는 반드시 하위가 되는 구조의 본질 다툼.</li>\n<li><strong>점수 흠결·임의 보정</strong> — 평가 자료 누락은 자의적 운영 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 저성과자 해고와 4요건',
        summary:
          '대법원 2018두51643(대법원, 2023.12.28 선고) 영역에서 법원은 근무성적 불량을 이유로 한 해고가 정당하려면 객관적·합리적 평가 기준에 의한 평가 결과·평가 결과의 통지와 소명 기회·개선의 기회 부여·사회통념상 고용관계 유지가 불가능할 정도의 사정이 모두 갖추어져야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '상대평가 하위만으로 해고 부족. 평가 객관성·소명·개선 기회·상당성 4요건 충족 입증이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '평가표를 본 적이 없는데 공개 요구할 수 있나요?',
        answer:
          '<strong>본인 평가 결과·기준은 정보공개·자료제출 요청 가능한 영역입니다.</strong> 노동위 자료제출 명령 요청도 가능.',
      },
      {
        question: '상대평가라 누군가는 하위인데 그게 해고 사유가 되나요?',
        answer:
          '<strong>구조상 하위가 곧 해고 사유가 되긴 어렵습니다.</strong> 절대적 직무 부적격성 입증 필요한 영역.',
      },
      {
        question: '교육 프로그램은 받았는데 형식적이었어요',
        answer:
          '<strong>구체적 목표·개선 측정 부재 시 형식 운영으로 평가될 여지가 있습니다.</strong> 운영 실적 자료 확보.',
      },
      {
        question: '소명 면담은 한 번 있었는데 5분만 했어요',
        answer:
          '<strong>소명 기회의 실질적 부여 여부가 다툼 영역입니다.</strong> 면담 시간·기록·답변 반영 여부 확인.',
      },
      {
        question: '권고사직 형식이면 다툼이 어렵나요?',
        answer:
          '<strong>의사 하자 + 평가 절차 흠결 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '저성과자 해고', href: '/guide/dismissal/dismissal-low-performance-track' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 3. dismissal-overseas-branch-recall-refuse-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-overseas-branch-recall-refuse-fire-track',
    keyword: '해외 발령 거부 해고',
    questionKeyword: '해외지사 발령을 가족 사정으로 거부했더니 명령불복종으로 해고됐어요.',
    ctaKeyword: '해외 발령 거부 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외지사 발령 거부 해고 — 5단계 인사권 재량 한계 다툼 | 로앤가이드',
      description:
        '해외 발령 거부로 해고됐다면 인사권 재량·생활상 불이익 비교형량 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"국내 본사에서 일하다 갑자기 동남아 지사 3년 발령을 통보받았습니다. 어린 자녀 학교 문제·배우자 직장·부모 간병 등 가족 사정을 들어 거부했지만 회사는 \'전 사원 글로벌 인사 원칙\'이라며 명령불복종으로 인사위 회부, 해고. 같은 직급 동료 중 다수는 발령을 거부했고 처분도 받지 않았는데 본인만 표적이 된 정황도 있어요." 인사권은 사용자의 광범위한 재량 영역이지만 무제한이 아니고 ① 업무상 필요성 ② 근로자의 생활상 불이익 정도 ③ 본인 협의 절차 ④ 다른 근로자와의 비교 균형 4가지 비교형량을 거쳐 권리남용으로 평가될 여지가 있는 영역입니다. 해외 발령은 국내 전보보다 생활 변동이 크고 가정·교육·건강 영향이 결합되어 비교형량에서 거부 정당성이 인정될 사례가 더 두터운 트랙. 대응은 ① 발령 사유 ② 생활 불이익 ③ 협의 부재 ④ 동료 비교 ⑤ 노동위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 발령 거부 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 필요성·불이익·협의·비교·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무상 필요성</strong> — 본인 직무·전문성과 발령지 직무 연계.</li>\n<li><strong>② 생활상 불이익</strong> — 가족·자녀 교육·건강·부모 간병.</li>\n<li><strong>③ 본인 협의 절차</strong> — 사전 면담·의견 수렴 부재 시 절차 흠결.</li>\n<li><strong>④ 다른 근로자와 비교</strong> — 거부자 본인만 해고 시 자의적 운영.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 부당해고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 발령은 국내 전보보다 생활 변동이 큰 영역. 가족·교육·건강 사정이 결합되면 거부의 정당성이 인정될 비교형량 여지가 더 두터운 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발령 통보·사유 자료 보존 (즉시)</strong> — 발령 공문·인사발령 사유서.</li>\n<li><strong>2단계 — 생활 불이익 자료 (1~2주)</strong> — 가족관계증명·자녀 학교·진단서·부모 간병 자료.</li>\n<li><strong>3단계 — 거부 의사·협의 요청 자료 (1주)</strong> — 사유서·면담 요청 메일.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 인사권 남용.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 발령 거부 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발령·불이익·거부 갈래입니다.</strong></p>\n<ul>\n<li><strong>해외 발령 공문·사유서·인사발령 통지서</strong></li>\n<li><strong>가족관계증명·자녀 학교 재학 자료</strong></li>\n<li><strong>본인·가족 건강 진단서·간병 자료</strong></li>\n<li><strong>거부 사유서·협의 요청 메일</strong></li>\n<li><strong>같은 직급 동료 발령·거부 처우 자료</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>근로계약서·취업규칙 (인사이동 조항)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거부 의사 표시 시 단순 \"갈 수 없다\"가 아닌 구체적 가족·건강 사정과 대안 제안(원격근무·기간 단축 등)을 함께 기재한 서면이 비교형량에서 유리한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 필요성</strong> — 본인 외 다른 인력 가능성·내부 공모 절차 여부.</li>\n<li><strong>생활 불이익 가중</strong> — 해외는 국내 전보보다 가족·교육 영향 큼.</li>\n<li><strong>사전 협의 부재</strong> — 일방 통보 시 절차 흠결 사정.</li>\n<li><strong>거부자 표적</strong> — 다른 거부자는 잔류·본인만 해고 시 자의적 운영.</li>\n<li><strong>대안 거절</strong> — 본인 제안(기간 단축·원격) 검토 부재.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전보·전직과 인사권 남용',
        summary:
          '대법원 2013다1051(대법원, 2013.02.28 선고) 영역에서 법원은 전보·전직 명령이 정당한 인사권 행사로 인정되려면 업무상의 필요성과 그에 따른 근로자의 생활상 불이익을 비교·교량해야 하고, 근로자 본인과의 협의 절차를 거치지 않는 등 신의칙상 요구되는 절차를 위반한 경우에는 권리남용으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '인사권 재량은 무제한 아님. 업무 필요성 vs 생활 불이익 비교형량 + 협의 절차 부재 시 권리남용 평가.',
      },
    ],
    faq: [
      {
        question: '"글로벌 인사 원칙"이라며 모두에게 해당된다고 회사가 해요',
        answer:
          '<strong>형식 원칙만으로 개별 비교형량을 면제하지 못합니다.</strong> 본인 사정 별도 평가 영역.',
      },
      {
        question: '가족 동반은 가능한데 자녀 학교 문제가 큽니다',
        answer:
          '<strong>자녀 교육 사정도 생활상 불이익에 포함될 수 있는 영역입니다.</strong> 학교·학년·교육과정 자료 보존.',
      },
      {
        question: '동료 중 거부한 사람은 가만뒀는데 본인만 해고됐어요',
        answer:
          '<strong>차별·표적 평가 사정으로 다툼 가능한 영역입니다.</strong> 동료 명단·처우 자료가 핵심.',
      },
      {
        question: '회사가 협의 절차를 거쳤다고 주장합니다',
        answer:
          '<strong>형식 면담만이 아닌 실질적 의견 수렴 여부가 다툼 영역입니다.</strong> 면담 기록·답변 반영 여부 확인.',
      },
      {
        question: '국내 다른 지사 발령을 제안했는데 회사가 거절했어요',
        answer:
          '<strong>대안 거절이 합리적 이유 없다면 인사권 남용 사정으로 평가될 여지가 있습니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '전보·전직 거부', href: '/guide/dismissal/dismissal-transfer-refusal-track' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 4. dismissal-startup-funding-fail-layoff-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-startup-funding-fail-layoff-track',
    keyword: '스타트업 자금소진 정리해고',
    questionKeyword: '시리즈 A 투자 유치 실패로 회사가 직원 절반을 정리해고했어요. 적법한가요?',
    ctaKeyword: '스타트업 정리해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스타트업 자금소진 정리해고 — 5단계 4요건 다툼 | 로앤가이드',
      description:
        '시리즈 A 실패로 절반 정리해고됐다면 긴급한 경영상 필요·회피노력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"시드 라운드 후 1년 반 동안 일했는데, 시리즈 A 투자 유치가 무산되자 회사가 \'런웨이 3개월\'이라며 한 주 만에 30명 중 15명에게 정리해고 통보. 해고 대상자 선정 기준은 공개되지 않았고, 50인 미만이라며 노조 협의도 생략. 임원·창업멤버는 그대로 남고 정리 대상이 영업·개발 일선 직원에 집중된 정황이 있어요." 정리해고(경영상 해고)는 근기법 제24조에 따라 ① 긴급한 경영상의 필요 ② 해고를 회피하기 위한 노력 ③ 합리적이고 공정한 해고 대상자 선정 기준 ④ 노동조합·근로자 대표와의 성실한 협의 4가지 요건을 모두 충족해야 정당성이 인정되는 영역입니다. 스타트업의 자금 소진도 경영상 필요 자체는 인정될 여지가 있지만 회피노력·선정기준·협의 절차 흠결이 빈번한 트랙. 대응은 ① 재무 자료 ② 회피노력 ③ 선정기준 ④ 협의 ⑤ 노동위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 스타트업 정리해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 필요·회피·기준·협의·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴급한 경영상 필요</strong> — 재무제표·런웨이·투자 실패 자료.</li>\n<li><strong>② 해고회피 노력</strong> — 임금 삭감·휴직·신규 채용 중단·임원 우선 감축.</li>\n<li><strong>③ 합리적 선정기준</strong> — 객관적 지표·공개·노동자 의견 수렴.</li>\n<li><strong>④ 성실한 협의 절차</strong> — 50일 전 사전 통보·근로자대표 협의.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 4요건 흠결 시 부당해고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스타트업도 정리해고 4요건 동일 적용. 자금 소진이라는 경영 필요가 있더라도 회피노력·선정기준·협의 흠결이면 부당해고로 평가될 여지가 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정리해고 통보·사유 자료 보존 (즉시)</strong> — 해고 공문·사유서·시점 기록.</li>\n<li><strong>2단계 — 회사 재무·회피노력 자료 (1~2주)</strong> — 재무제표·임원 감축·휴직 시도.</li>\n<li><strong>3단계 — 선정기준·협의 자료 (1~2주)</strong> — 선정 명단·기준 공개·근로자대표 협의 기록.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 정리해고 4요건 흠결 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스타트업 정리해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 재무·회피·선정 갈래입니다.</strong></p>\n<ul>\n<li><strong>정리해고 통보서·사유서·시점 기록</strong></li>\n<li><strong>회사 재무제표·자금 소진 자료 (가능 범위 내)</strong></li>\n<li><strong>임원·창업멤버 처우 자료 (감축 여부)</strong></li>\n<li><strong>해고 대상자 선정 기준·명단</strong></li>\n<li><strong>근로자대표 협의·동의 기록</strong></li>\n<li><strong>해고회피 시도 (임금삭감·휴직 등) 자료</strong></li>\n<li><strong>본인 근로계약서·평가·실적 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정리해고 50일 전 사전 통보가 누락되거나 근로자대표 협의 없이 일방 통보 시 절차 흠결만으로도 부당해고 평가 여지. 시점·통보 형식부터 점검 시작점.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경영 필요 입증</strong> — 회사가 재무 자료로 입증해야 하는 사정.</li>\n<li><strong>임원 우선 감축</strong> — 임원 잔류·일선 직원 정리 시 회피노력 부정.</li>\n<li><strong>선정 기준 공개</strong> — 비공개·자의적 선정 시 합리성 부정.</li>\n<li><strong>50일 사전 협의</strong> — 일방 통보 시 절차 흠결.</li>\n<li><strong>50인 미만 면제 주장</strong> — 협의 의무는 인원 수와 별개 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 4요건',
        summary:
          '대법원 2010두15964(대법원, 2014.11.13 선고) 영역에서 법원은 경영상 이유에 의한 해고가 정당하려면 긴급한 경영상의 필요성·해고회피 노력·합리적이고 공정한 해고 대상자 선정 기준·근로자대표와의 성실한 협의 4가지 요건이 모두 충족되어야 하고, 그 중 일부 요건이 결여된 경우 정리해고는 정당성을 결여한 것으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '4요건 중 하나라도 흠결 시 부당해고. 회피노력·선정기준·협의 절차 흠결이 스타트업에서 가장 빈번한 다툼 축.',
      },
    ],
    faq: [
      {
        question: '회사가 "곧 망한다"고 하는데도 다툴 수 있나요?',
        answer:
          '<strong>실제 폐업·도산이 임박했더라도 해고 회피 노력·선정 기준 흠결이면 부당해고 평가 영역입니다.</strong>',
      },
      {
        question: '50인 미만이라 협의 의무가 없다고 회사가 합니다',
        answer:
          '<strong>인원 수와 무관하게 근로자대표 협의 의무는 적용되는 영역입니다.</strong> 50일 사전 통보도 동일.',
      },
      {
        question: '임원·창업멤버는 그대로인데 일선 직원만 정리됐어요',
        answer:
          '<strong>회피노력 부정의 강력 사정입니다.</strong> 임원 잔류 자료가 핵심 입증 영역.',
      },
      {
        question: '재무제표를 회사가 공개하지 않아요',
        answer:
          '<strong>노동위 자료제출 명령 요청 가능한 영역입니다.</strong> 입증 책임은 사용자에게 있음.',
      },
      {
        question: '권고사직서를 받았는데 정리해고 압박이었어요',
        answer:
          '<strong>의사 하자 + 정리해고 4요건 흠결 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '정리해고 4요건', href: '/guide/dismissal/dismissal-redundancy-4-requirements' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 5. dismissal-management-position-demotion-resign-pressure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-management-position-demotion-resign-pressure-track',
    keyword: '관리직 직위해제 사직압박',
    questionKeyword: '부장에서 직위해제 후 대기발령·창고 배치를 받았는데 사실상 사직 압박 같아요.',
    ctaKeyword: '관리직 직위해제 사직압박 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '관리직 직위해제 후 사직압박 — 5단계 실질해고 다툼 | 로앤가이드',
      description:
        '부장 직위해제 후 창고 배치로 사직 압박을 받는다면 직위해제 정당성·실질해고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 근무한 부장인데 \'조직 개편\' 명목으로 직위해제 통보를 받고, 이어 \'대기발령\' 두 달 후 본사 창고로 배치. 책상도 없는 자리에서 단순 재고 정리 업무만 시키고 회의 참석·메일 회선도 차단됐습니다. 인사팀은 \'스스로 결정하라\'며 권고사직서를 들이밀었고 거부하자 \'더는 자리가 없다\'고 했어요." 직위해제·대기발령은 인사권 행사이지만 ① 직위해제의 합리적 이유 ② 기간의 상당성 ③ 본인 업무·전문성과 배치 직무의 연계 ④ 실질이 해고에 이르렀는지 4가지 심사 영역. 명목상 직위해제·실질상 해고로 평가되는 경우 ⑤ 부당해고 + 사직 의사표시 하자 다툼이 가능한 영역입니다. 대응은 ① 직위해제 사유 ② 대기·배치 부당성 ③ 사직 압박 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직위해제 후 사직압박 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·기간·배치·실질·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 직위해제 사유 합리성</strong> — 구체적 사유·평가 결과·소명 기회.</li>\n<li><strong>② 기간 상당성</strong> — 장기 방치 시 권리남용 평가.</li>\n<li><strong>③ 배치 직무 적정성</strong> — 직급·전문성과 무관한 단순 배치.</li>\n<li><strong>④ 실질해고 평가</strong> — 사직 외 선택지 박탈 시 실질해고.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 부당해고 + 부당 인사 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직위해제가 명목이고 실질이 사직 강요라면 \"실질해고\"로 평가될 여지가 있는 영역. 직무 차단·고립·압박 패턴이 결합되면 다툼 사정 강해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 직위해제·대기발령·배치 자료 보존 (즉시)</strong> — 인사발령 공문·사유서·통보 시점.</li>\n<li><strong>2단계 — 배치 직무 부당성 자료 (1~2주)</strong> — 직무 내용·근무 환경 사진·메일 회선 차단.</li>\n<li><strong>3단계 — 사직 압박 자료 (1주)</strong> — 권고사직 권유 메모·녹취·인사팀 발언.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당 인사 + 실질해고 병행.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사직서 쓰기 전 확인할 것, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">관리직 직위해제·사직 압박 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 직위·배치·압박 갈래입니다.</strong></p>\n<ul>\n<li><strong>직위해제·대기발령·배치 인사발령 공문</strong></li>\n<li><strong>발령 사유서·평가 자료·소명 기록</strong></li>\n<li><strong>본인 과거 직급·직무·실적 자료</strong></li>\n<li><strong>변경 후 배치 직무 내용·근무 환경 사진</strong></li>\n<li><strong>회의·메일 회선 차단 등 고립 정황</strong></li>\n<li><strong>권고사직 권유 메모·녹취·인사팀 발언</strong></li>\n<li><strong>같은 직급 동료 처우 비교 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직위해제 자체보다 \"기간 + 배치 + 고립 + 압박\" 결합 패턴이 실질해고 입증의 결정적 사정. 인사팀 발언·메신저는 즉시 보존이 다툼의 출발점.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>직위해제 사유 모호</strong> — 구체적 사유·평가 부재 시 정당성 부정.</li>\n<li><strong>대기발령 장기화</strong> — 합리적 기간 초과 시 권리남용.</li>\n<li><strong>배치 직무 격차</strong> — 직급·전문성과 무관한 단순 업무.</li>\n<li><strong>고립·차단</strong> — 메일·회의 회선 차단은 압박 사정.</li>\n<li><strong>실질해고 평가</strong> — 사직 외 선택지 박탈 시 실질해고로 평가될 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직위해제·대기발령의 한계',
        summary:
          '대법원 2005두8788(대법원, 2007.05.31 선고) 영역에서 법원은 직위해제 또는 대기발령이 사용자의 인사권에 속하더라도 그 사유에 합리성이 없거나 기간이 사회통념상 상당하다고 인정될 수 있는 정도를 넘어 장기화되는 경우 권리남용에 해당해 무효로 평가될 여지가 있고, 실질적으로 사직을 강요하는 수단으로 운영되었다고 인정될 수 있는 경우 실질적 해고로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '직위해제·대기발령이 사직 강요 수단으로 운영되면 실질해고 평가. 기간·배치·고립·압박 결합 패턴이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '사직서에 이미 서명했는데 다툼이 가능한가요?',
        answer:
          '<strong>강박·기망에 의한 의사표시 하자로 다툼 가능한 영역입니다.</strong> 사직서 후 곧바로 의사표시 취소·구제 신청 검토.',
      },
      {
        question: '직위해제 자체는 적법한데 배치만 부당한가요?',
        answer:
          '<strong>직위해제·후속 배치·기간을 전체로 평가하는 영역입니다.</strong> 결합 패턴이 권리남용 사정.',
      },
      {
        question: '권고사직 권유는 일반적인 절차 아닌가요?',
        answer:
          '<strong>선택권이 실질적으로 보장돼야 합니다.</strong> 직무 박탈·고립과 결합되면 강요로 평가될 여지.',
      },
      {
        question: '대기발령 기간이 얼마나 길어야 권리남용인가요?',
        answer:
          '<strong>사회통념상 상당한 기간 기준으로 판단되는 영역입니다.</strong> 평가·재배치 등 후속 절차 부재 시 단기간도 권리남용 평가 가능.',
      },
      {
        question: '인사팀 발언을 녹음하지 못했는데 다툼이 어려운가요?',
        answer:
          '<strong>이메일·메신저·동료 진술 등 간접 증거로도 입증 가능한 영역입니다.</strong> 자료 다층 확보가 핵심.',
      },
    ],
    cta: { text: '사직서 쓰기 전 확인할 것, AI로 점검하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '권고사직 의사표시 하자', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },
];
