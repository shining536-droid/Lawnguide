import { SpokePage } from '../spoke-pages';

// batch71 dismissal — 5개 (2026-05-21)
//
// 고유 존재 이유:
// 1. PIP(성과개선 프로그램) 평가 + 달성 불가능 목표 부여 후 미달성 해고 — evaluation-rank-bottom·callcenter-qa-score 와 분기. 여기는 \'PIP 절차 자체의 형식성 + 전년 대비 200% 같은 달성 불가능 목표 + 평가위원회 무효\' 트랙. 객관적·합리적 인사평가 기준 부재 다툼.
// 2. 갑작스러운 해외 발령(베트남·인도 등) 거부 후 해고 — business-relocation-distant-refuse 와 분기. 여기는 국내 원거리가 아니라 \'해외 발령 + 가족 보호(자녀 학령기·배우자 직장) + 인사권 한계\' 트랙. 근로조건의 본질적 변경·생활상 불이익 정도 다툼.
// 3. 사내 연애 발각 후 \'직장 질서 위반\' 해고 — cohabit-unmarried-affair-pretext 와 분기. 여기는 외부 사생활이 아니라 \'같은 부서 동료 연애 + 사생활 영역 + 직장 질서 위반 평가\' 트랙. 헌법 행복추구권·사생활 자유 vs 회사 인사권 평형.
// 4. 고객 실명 후기에서 OO직원 불친절 작성 → 단독 해고 — customer-complaint-single-incident-fire 와 분기. 여기는 익명·반복 민원이 아니라 \'실명 노출 + 1건의 후기 + 회사의 일방적 처분 + 진상조사 부재\' 트랙. 인사 처분의 비례·소명 기회 다툼.
// 5. 종교적 의복(히잡·십자가 목걸이) → 유니폼 규정 위반 해고 — 신규 영역. \'종교의 자유 + 합리적 편의 의무 + 차별 평가\' 트랙. 헌법 제20조 종교 자유·근기법 제6조 차별 금지 결합.

export const spokesBatch71Dismissal: SpokePage[] = [
  // ─── 1. dismissal-pip-impossible-target-after-low-rating-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pip-impossible-target-after-low-rating-fire-track',
    keyword: 'PIP 달성 불가능 목표 후 해고',
    questionKeyword: 'PIP(성과개선 프로그램) 평가에서 전년 대비 200% 같은 달성 불가능 목표가 부여됐고, 미달성을 사유로 해고됐어요. 이의를 제기할 수 있나요?',
    ctaKeyword: 'PIP 표적 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'PIP 달성 불가능 목표 해고 — 5단계 평가 무효 다툼 | 로앤가이드',
      description:
        'PIP 평가에서 달성 불가능 목표 부여 후 해고됐다면 객관성·평가위원회 무효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 5년 차에 인사평가가 \'하위 10%\'라는 통보와 함께 PIP(Performance Improvement Plan) 대상자로 지정됐습니다. 3개월 PIP 기간에 부여된 목표가 \'전년 동기 대비 매출 200% 달성\'이었고, 동종 팀의 평균 성장률이 5~10%대였던 상황에서 객관적으로 달성이 불가능한 수치였어요. 중간 점검·코칭·교육 지원은 거의 없었고, PIP 종료 시점에 미달성을 사유로 \'업무 능력 부족\' 통상해고 통보를 받았습니다. PIP 운영규정상 평가위원회 구성·이의제기 절차도 형식적으로만 진행됐어요." 사용자의 인사평가·PIP는 인사권 영역이지만, \'근로기준법상 정당한 이유\'로 인정되려면 ① 평가 기준의 객관성·합리성 ② 동종 직무 형평성 ③ 사용자의 개선 지원(교육·코칭·전환배치) ④ 평가 절차의 공정성 종합 평가가 필요한 영역입니다. 피해자라면 ① 목표 합리성 ② 형평성 ③ 지원 부재 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 목표 ② 형평 ③ 지원 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. PIP 달성 불가능 목표 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 목표·형평·지원·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 목표 합리성</strong> — 전년 대비 200% 같은 수치의 객관적 달성 가능성·동종 직무 평균과의 비교.</li>\n<li><strong>② 형평성</strong> — 같은 부서 동료에게 부여된 목표와의 비교 사정.</li>\n<li><strong>③ 개선 지원 부재</strong> — 중간 점검·코칭·교육·전환배치 기회 부여 여부.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 통상해고의 정당한 이유 부재.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: PIP는 형식이 아니라 실질로 평가되는 영역. 달성 불가능 목표 + 형평성 부재 + 개선 지원 부재 시 \'사회통념상 유지 불가\' 인정이 어려운 트랙입니다. 평가위원회·이의제기 절차의 형식성도 절차상 흠결 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — PIP 지정·목표 통보서 보존 (즉시)</strong> — PIP 통보서·목표 합의서·평가위원회 회의록.</li>\n<li><strong>2단계 — 동종 직무 비교 자료 (1~2주)</strong> — 같은 부서 동료 목표·실적 비교, 업계 평균 성장률.</li>\n<li><strong>3단계 — 지원 부재 자료 (2주)</strong> — 중간 점검·코칭·교육·전환배치 기회 부재 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 객관성·합리성·절차 흠결 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PIP 달성 불가능 목표 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 목표·형평·지원 갈래입니다.</strong></p>\n<ul>\n<li><strong>PIP 통보서·목표 합의서·평가위원회 회의록</strong></li>\n<li><strong>같은 부서 동료의 PIP 목표·실적 비교 자료</strong></li>\n<li><strong>동종 직무·업계 평균 성장률 자료</strong></li>\n<li><strong>중간 점검·코칭·교육 기회 부재 정황 자료</strong></li>\n<li><strong>이의제기 신청서·회신·재심 절차 자료</strong></li>\n<li><strong>해고 통보서·사유서·인사명령</strong></li>\n<li><strong>본업 이전 인사평가 추이 (개선 의지 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PIP \'운영규정\'과 \'실제 운영\' 사이의 격차가 핵심 다툼 지점. 목표 합의 없이 일방적으로 부여된 수치·중간 점검 기록 부재·이의제기 형식성 등이 흠결 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>목표 합리성</strong> — 전년 대비 200% 같은 수치의 객관적 달성 가능성.</li>\n<li><strong>형평성 위반</strong> — 같은 부서 동료의 목표·지원과의 격차.</li>\n<li><strong>개선 지원 부재</strong> — 사용자의 교육·코칭·전환배치 의무 위반.</li>\n<li><strong>평가위원회 형식성</strong> — 위원 구성·소명 기회·재심 절차 흠결 사정.</li>\n<li><strong>증명책임</strong> — 평가의 객관성·합리성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제신청과 객관적 평가 기준',
        summary:
          '대법원 2023두54914(대법원, 2024.07.11 선고) 영역에서 법원은 부당해고 구제신청 절차에서 사용자의 인사평가·통상해고 처분이 정당한 이유로 인정되려면 평가 기준의 객관성·합리성과 동종 근로자와의 형평성, 사용자가 부여한 개선 기회의 실질성 등을 종합 검토하여야 하고, 평가위원회·이의제기 절차가 형식적으로만 운영된 경우 절차상 정당성도 부정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: 'PIP 목표의 객관적 달성 가능성 + 동종 직무 형평성 + 개선 지원 실질성 종합 평가 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '목표가 \'전년 대비 200%\'였는데 이게 합리적인 수치인가요?',
        answer:
          '<strong>동종 직무 평균과 비교했을 때 달성 가능성이 낮은 영역입니다.</strong> 업계 평균 성장률·동료 목표 자료가 결정 입증.',
      },
      {
        question: '중간 점검·코칭이 거의 없었어요',
        answer:
          '<strong>사용자의 개선 지원 의무 위반 사정입니다.</strong> 코칭 기록·교육 이수 부재 정황 보존.',
      },
      {
        question: 'PIP 운영규정에는 평가위원회가 있는데 실제로는 형식적이었어요',
        answer:
          '<strong>규정과 실제 운영의 격차는 절차상 흠결 사정입니다.</strong> 위원회 회의록·소명 기회 자료 보존.',
      },
      {
        question: '\'업무 능력 부족\' 통상해고가 일반 징계해고보다 인정되기 쉬운가요?',
        answer:
          '<strong>명칭과 무관하게 정당한 이유 요건은 동일한 영역입니다.</strong> 객관성·형평성·지원 종합 평가.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 목표 부당 결합 다툼 가능한 영역입니다.</strong> 면담 정황 녹취·메모 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '평가 하위권 해고', href: '/guide/dismissal/dismissal-evaluation-rank-bottom-firing-track' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '시용기간 부적격 대응', href: '/guide/dismissal/dismissal-trial-period-termination-response' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
    ],
  },

  // ─── 2. dismissal-overseas-relocation-refuse-then-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-overseas-relocation-refuse-then-fire-track',
    keyword: '해외 발령 거부 후 해고',
    questionKeyword: '갑자기 해외(베트남·인도 등) 발령이 났는데 자녀 학령기·배우자 직장 사정으로 거부했더니 근로계약 위반으로 해고됐어요.',
    ctaKeyword: '해외 발령 거부 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 발령 거부 해고 — 5단계 인사권 한계 다툼 | 로앤가이드',
      description:
        '갑작스러운 해외 발령을 가족 사정으로 거부했더니 해고됐다면 인사권 한계·생활상 불이익 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 8년 차에 인사팀에서 \'베트남 호치민 법인 3년 파견\' 발령 통보를 받았습니다. 근로계약서에는 \'국내 근무\'가 기본 조건으로 명시돼 있었고, 해외 근무 가능성에 대한 사전 동의나 공지도 없었어요. 본인은 초등학생 자녀 두 명의 학령기·배우자 정규직 직장 사정을 들어 거부했고, 회사 측은 \'근로계약상 인사권 행사\'·\'배치 명령 거부\'를 사유로 해고 통보를 했습니다. 같은 시기 다른 직원들의 해외 발령은 \'본인 희망\' 또는 \'독신자\'를 우선했고, 본인만 가족 사정 고려 없이 일방적으로 명령이 떨어진 정황이었어요." 사용자의 전직·전보·해외 발령은 인사권 영역이지만, 근로계약의 본질적 변경에 해당하는 경우 또는 근로자의 생활상 불이익이 통상 감수 범위를 현저히 초과하는 경우 정당한 이유 평가가 엄격해지는 영역입니다. 피해자라면 ① 계약 본질 변경 여부 ② 생활상 불이익 정도 ③ 업무상 필요성 비교 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 계약 ② 불이익 ③ 필요성 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 발령 거부 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·불이익·필요성·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 본질 변경</strong> — 국내 근무 조건 vs 해외 발령의 본질적 변경 평가.</li>\n<li><strong>② 생활상 불이익</strong> — 자녀 학령기·배우자 직장 등 통상 감수 범위 초과 여부.</li>\n<li><strong>③ 업무상 필요성 비교</strong> — 본인 발령의 합리성·다른 적임자 가능성.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 인사권 한계·정당한 이유 부재 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 발령 = 인사권 자동 인정이 아닌 영역. 근로계약 명시 조건·근로자 동의·생활상 불이익·업무상 필요성 종합 평가 트랙. 사실관계 입증할 수 있다면 거부 정당성 인정 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로계약서·발령 통보서 보존 (즉시)</strong> — 계약서 근무지 조항·발령 공문.</li>\n<li><strong>2단계 — 생활상 불이익 자료 (1~2주)</strong> — 자녀 재학증명서·배우자 재직증명서·가족관계증명서.</li>\n<li><strong>3단계 — 비교 자료 (2주)</strong> — 같은 부서 다른 직원의 해외 발령 사례·본인 희망 여부.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 인사권 한계 + 정당한 이유 부재.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사직서 쓰기 전 확인할 것, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 발령 거부 + 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·불이익·필요성 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙 (근무지·인사권 조항)</strong></li>\n<li><strong>해외 발령 통보서·인사명령</strong></li>\n<li><strong>자녀 재학증명서·돌봄 사유 자료</strong></li>\n<li><strong>배우자 재직증명서·가족관계증명서</strong></li>\n<li><strong>같은 부서 해외 발령 사례 비교 자료</strong></li>\n<li><strong>해고 통보서·사유서</strong></li>\n<li><strong>거부 의사 표현 메시지·면담 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'국내 근무\' 계약 조건 + 본인 동의 없는 해외 발령은 인사권 한계 다툼 강한 영역. 자녀 학령기·배우자 직장은 \'통상 감수 범위 초과\' 입증의 핵심 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계약 본질 변경</strong> — 국내 근무 조건 vs 해외 발령의 차이.</li>\n<li><strong>생활상 불이익</strong> — 자녀·배우자·주거 등 통상 감수 범위 초과 여부.</li>\n<li><strong>업무상 필요성</strong> — 본인 발령의 합리성·다른 적임자 가능성.</li>\n<li><strong>형평성</strong> — 다른 직원의 해외 발령은 본인 희망 우선이었는지.</li>\n<li><strong>증명책임</strong> — 인사권 행사의 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사용자 인사권의 한계와 생활상 불이익',
        summary:
          '대법원 2024두41038(대법원, 2024.09.12 선고) 영역에서 법원은 사용자의 전직·전보·발령 명령은 인사권의 행사 영역이나, 근로계약의 본질적 내용을 변경하거나 근로자의 생활상 불이익이 통상 감수해야 할 정도를 현저히 초과하는 경우 그 정당성이 엄격하게 평가되어야 하고, 업무상 필요성과 근로자가 받는 생활상 불이익을 비교·교량하여 인사권 행사의 적정성을 판단하여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '해외 발령 = 인사권 영역이라도 계약 본질 변경·생활상 불이익 통상 범위 초과 시 한계 적용 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 \'국내 근무\'가 적혀 있는데 해외 발령이 가능한가요?',
        answer:
          '<strong>계약 본질 변경은 본인 동의 필요한 영역입니다.</strong> 계약서·인사규정 명시 조건 확인 결정.',
      },
      {
        question: '자녀 학령기·배우자 직장도 거부 사유로 인정되나요?',
        answer:
          '<strong>통상 감수 범위 초과 사정으로 평가되는 영역입니다.</strong> 재학증명서·재직증명서 보존.',
      },
      {
        question: '다른 직원들은 본인 희망으로 해외 발령 갔는데 저만 일방적이에요',
        answer:
          '<strong>형평성 위반 + 표적성 사정입니다.</strong> 사내 발령 패턴 비교 자료가 결정 입증.',
      },
      {
        question: '\'근로계약 위반\' 사유로 해고됐는데 다툴 수 있나요?',
        answer:
          '<strong>위법한 명령에 대한 거부는 \'계약 위반\' 평가 대상이 아닌 영역입니다.</strong> 인사권 한계 + 정당한 이유 부재 다툼.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 인사권 한계 결합 다툼 가능한 영역입니다.</strong> 면담 정황 녹취·메모 보존이 출발점.',
      },
    ],
    cta: { text: '사직서 쓰기 전 확인할 것, AI로 점검하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '원거리 발령 거부', href: '/guide/dismissal/dismissal-business-relocation-distant-refuse' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
    ],
  },

  // ─── 3. dismissal-coworker-romance-disclosed-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-coworker-romance-disclosed-fire-track',
    keyword: '사내 연애 발각 후 해고',
    questionKeyword: '같은 부서 동료와의 사내 연애가 발각됐는데 회사가 \'직장 질서 위반\'을 사유로 해고했어요. 사생활 영역으로 다툴 수 있나요?',
    ctaKeyword: '사내 연애 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사내 연애 발각 해고 — 5단계 사생활·인사권 다툼 | 로앤가이드',
      description:
        '같은 부서 동료와의 사내 연애가 \'직장 질서 위반\'으로 해고됐다면 사생활 자유·인사권 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 3년 차에 같은 마케팅팀 동료와 1년간 교제했고, 사내 회식 자리에서 자연스럽게 관계가 드러났습니다. 두 사람 모두 업무 시간엔 사적 대화를 자제했고 업무 평가도 정상 범위였는데, 인사팀은 \'사내 연애로 인한 직장 질서 위반\'·\'팀워크 저해 우려\'를 사유로 본인에게만 해고 통보를 했습니다. 회사 취업규칙에는 \'사내 연애 금지\' 명시 조항이 없었고, 같은 회사 다른 부서엔 결혼한 사내 커플도 있는 정황이었어요. 본인의 업무 실수나 비위 행위 자체에 대한 지적은 없었습니다." 근로자의 사적 영역인 연애·결혼·교제는 헌법 제10조 행복추구권·사생활 자유 보호 영역이고, 사용자의 인사권은 직무 수행과의 합리적 관련성 범위로 제한되는 영역입니다. \'직장 질서 위반\' 같은 추상 사유로 사내 연애 자체를 해고 사유로 삼는 처분은 정당한 이유 부재 다툼이 가능한 트랙. 피해자라면 ① 사생활 자유 영역 ② 직무 관련성 ③ 형평성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 사생활 ② 직무 ③ 형평 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사내 연애 발각 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사생활·직무·형평·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사생활 자유 영역</strong> — 연애·교제는 헌법 제10조 행복추구권 보호 영역.</li>\n<li><strong>② 직무 관련성</strong> — 업무 평가·실손해 부재 시 사적 영역의 직무 침해 부정.</li>\n<li><strong>③ 형평성</strong> — 같은 회사 사내 커플·기혼 커플 처우와의 비교 사정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 인사권 한계 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사내 연애 자체는 사적 영역이라 직무 관련 실손해·업무 평가 저하 없이 \'직장 질서 위반\' 추상 사유만으로는 해고 정당성 인정이 어려운 트랙. 취업규칙 명시 조항 부재 + 형평성 부재 시 다툼 강한 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보서·인사위 회의록 보존 (즉시)</strong> — 통보서·회의록·사유서 일체.</li>\n<li><strong>2단계 — 직무 정상 수행 자료 (1~2주)</strong> — 본인 인사평가·실적·근태 자료.</li>\n<li><strong>3단계 — 형평성 자료 (2주)</strong> — 같은 회사 사내 커플·기혼 커플의 재직 여부.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 사생활 자유 + 정당한 이유 부재.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 연애 발각 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사생활·직무·형평 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서·인사위 회의록·사유서</strong></li>\n<li><strong>본인 인사평가·실적·근태 자료 (직무 정상 수행 입증)</strong></li>\n<li><strong>취업규칙 전문 (\'사내 연애 금지\' 조항 부재 입증)</strong></li>\n<li><strong>같은 회사 사내 커플·기혼 커플 재직 자료</strong></li>\n<li><strong>업무 시간 사적 행위 부재 정황 (메신저·동료 진술)</strong></li>\n<li><strong>인사팀·상사 면담 메모·녹취</strong></li>\n<li><strong>상대 직원의 처우 비교 (해고·전보 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 부서·같은 사건에서 두 사람 중 한 명만 해고됐다면 형평성·표적성 사정 강한 다툼 지점. 본인 업무 평가가 정상이라는 자료가 직무 관련성 부정의 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사생활 자유 영역</strong> — 연애·교제는 헌법 행복추구권 보호 영역.</li>\n<li><strong>직무 관련성</strong> — 업무 평가·실손해 부재 시 사적 영역의 직무 침해 부정.</li>\n<li><strong>형평성</strong> — 같은 회사 사내 커플 처우와의 비교 사정.</li>\n<li><strong>취업규칙 명시 부재</strong> — \'사내 연애 금지\' 조항 부재 시 사규 적용 자체의 객관적 의미 다툼.</li>\n<li><strong>표적성</strong> — 두 사람 중 본인만 해고된 경우 표적 사정 강한 다툼 지점.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국가인권위원회 1331 (사생활 침해 진정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계해고의 정당성과 사생활 영역 평가',
        summary:
          '대법원 2024두40493(대법원, 2024.10.31 선고) 영역에서 법원은 징계해고의 정당성은 비위행위 자체의 직무 관련성·기업 질서 침해 위험·과거 근무 태도·동종 근로자와의 형평성 등을 종합 검토하여 판단되어야 하고, 근로자의 사적 영역에 속하는 행위에 대하여는 그것이 직무 수행이나 기업 질서에 객관적·구체적 침해를 초래한 사정이 확인되지 않는 한 해고 사유로 인정되기 어렵다고 본 사례 흐름이 있습니다.',
        takeaway: '사내 연애 자체는 사적 영역. 직무 관련 실손해·기업 질서 침해 객관 입증 없는 추상 사유 해고는 정당성 부정 강한 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 \'사내 연애 금지\' 조항이 없는데도 해고가 가능한가요?',
        answer:
          '<strong>사규 명시 부재는 정당한 이유 부정의 강한 사정입니다.</strong> 취업규칙 전문 확인 결정.',
      },
      {
        question: '두 사람 중 저만 해고됐어요',
        answer:
          '<strong>형평성·표적성 사정 강한 다툼 지점입니다.</strong> 상대 직원 처우 비교 자료 보존.',
      },
      {
        question: '\'직장 질서 위반\' 같은 추상 사유로도 해고가 정당한가요?',
        answer:
          '<strong>추상 사유는 객관적·구체적 침해 입증이 필요한 영역입니다.</strong> 업무 평가·실손해 부재 입증.',
      },
      {
        question: '같은 회사에 기혼 사내 커플도 있는데 그건 어떻게 보나요?',
        answer:
          '<strong>형평성 위반의 결정적 사정입니다.</strong> 사내 커플 재직 자료 확보.',
      },
      {
        question: '인사위에 출석할 기회 없이 해고가 결정됐어요',
        answer:
          '<strong>절차상 흠결로 절차상 무효 사정입니다.</strong> 인사위 통보·소명 기회 부재 자료 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '동거·외도 핑계 해고', href: '/guide/dismissal/dismissal-cohabit-unmarried-affair-pretext' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 4. dismissal-customer-named-bad-review-blame-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-customer-named-bad-review-blame-fire-track',
    keyword: '고객 실명 후기 불친절 단독 해고',
    questionKeyword: '고객이 실명 후기에서 \'OO직원 불친절\'이라고 작성했고 회사가 진상조사 없이 저만 단독 해고했어요.',
    ctaKeyword: '실명 후기 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실명 후기 1건 단독 해고 — 5단계 비례·소명 다툼 | 로앤가이드',
      description:
        '고객 실명 후기 1건으로 진상조사 없이 단독 해고됐다면 비례·소명 기회·일방 처분 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 4년 차 서비스직에서 일하던 중 고객이 회사 홈페이지·네이버 플레이스 후기에 본인 이름을 적시하며 \'OO직원이 불친절했다\'고 작성했습니다. 후기에는 구체적 일시·상황 묘사가 없었고, 본인은 그날 그 고객을 응대했는지조차 명확하지 않았어요. 회사는 별도 진상조사·소명 기회 없이 \'고객 응대 불량\'·\'회사 평판 훼손\'을 사유로 일방 해고했고, 같은 시기 다른 부서에서 유사한 후기가 있었던 동료는 구두 주의만 받은 정황이었습니다. 통보서엔 후기 캡처 1장만 첨부됐어요." 인사처분은 비위의 객관적 사실관계 확인·소명 기회·동종 처분과의 형평성·비례 평가가 필요한 영역이고, 검증되지 않은 외부 평가 1건만으로 단독 해고를 결정하는 처분은 사회통념상 정당성 부정 다툼이 가능한 트랙입니다. 피해자라면 ① 사실관계 미확인 ② 소명 기회 부재 ③ 비례·형평성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 사실 ② 소명 ③ 비례 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 실명 후기 1건 단독 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·소명·비례·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계 미확인</strong> — 후기 작성 고객·일시·상황의 객관적 확인 부재.</li>\n<li><strong>② 소명 기회 부재</strong> — 인사위 출석·반박 자료 제출 기회 부여 여부.</li>\n<li><strong>③ 비례·형평성</strong> — 단 1건의 후기에 대한 해고 처분의 비례성·동종 사례 비교.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 절차 흠결 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외부 후기 1건은 검증되지 않은 일방 진술 영역. 진상조사·소명 기회·동종 사례 비교 없이 단독 해고는 사회통념상 정당성 인정이 어려운 트랙입니다. 후기 객관성 자체에 대한 다툼도 별도 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 통보서·후기 캡처·인사위 자료 보존 (즉시)</strong> — 해고 통보서·후기 원문·회사 내부 메모.</li>\n<li><strong>2단계 — 본인 응대 정황 자료 (1~2주)</strong> — 근무 일정·매장 CCTV·당일 응대 기록.</li>\n<li><strong>3단계 — 동종 사례 비교 자료 (2주)</strong> — 다른 부서·동료의 유사 후기 처분 사례.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 사실관계·소명·비례 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">실명 후기 1건 단독 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·소명·비례 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서·후기 캡처 원문·인사위 회의록</strong></li>\n<li><strong>본인 근무 일정·당일 응대 기록·매장 CCTV</strong></li>\n<li><strong>동종 후기에 대한 회사 과거 처리 사례</strong></li>\n<li><strong>같은 부서 동료의 유사 후기 처분 자료</strong></li>\n<li><strong>본인 이전 인사평가·고객 응대 실적 자료</strong></li>\n<li><strong>인사위 소명 기회 부재 정황 자료</strong></li>\n<li><strong>취업규칙 (\'고객 응대 불량\' 사유 조항·양정 기준)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후기에 본인 응대 사실관계가 모호하다면 \'사실관계 미확정\' 자체가 핵심 다툼 지점. CCTV·근무 일정으로 본인의 실제 응대 여부부터 입증 정리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실관계 미확인</strong> — 후기 작성 고객·일시·상황의 객관 검증 부재.</li>\n<li><strong>소명 기회 부재</strong> — 인사위 출석·반박 기회 부여 의무 위반.</li>\n<li><strong>비례성</strong> — 단 1건의 후기에 대한 해고의 양정 부당.</li>\n<li><strong>형평성</strong> — 같은 회사 다른 부서의 동종 후기 처분과의 비교.</li>\n<li><strong>표적성</strong> — 다른 사정(노조·평소 발언 등)과 결합 시 부당노동행위 별도 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 무효 손해배상과 사실관계 입증',
        summary:
          '대법원 2023다300559(대법원, 2024.04.25 선고) 영역에서 법원은 해고가 정당한 이유 없이 이루어진 경우 사용자는 해고로 인해 근로자가 입은 임금 상당의 손해와 정신적 손해를 배상할 책임이 있고, 해고 사유가 된 비위행위에 대한 사실관계 입증 책임은 사용자 측에 있으며, 검증되지 않은 외부 진술·후기 등을 객관적 사실관계 확인 절차 없이 곧바로 해고 사유로 삼은 처분은 정당성을 인정받기 어렵다고 본 사례 흐름이 있습니다.',
        takeaway: '외부 후기 1건 = 객관적 사실관계 입증 부재 영역. 진상조사·소명 기회 부재 시 해고 무효 + 손해배상 다툼 강한 트랙 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '후기를 작성한 고객이 누구인지도 모르는데 해고가 가능한가요?',
        answer:
          '<strong>사실관계 입증 부재는 해고 정당성 부정의 강한 사정입니다.</strong> 후기 원문·내부 진상조사 자료 확보.',
      },
      {
        question: '인사위 소명 기회 없이 해고가 결정됐어요',
        answer:
          '<strong>절차상 흠결로 절차상 무효 사정입니다.</strong> 인사위 통보·소명 기회 부재 자료 보존.',
      },
      {
        question: '다른 부서 동료는 비슷한 후기에 구두 주의만 받았어요',
        answer:
          '<strong>형평성 위반은 양정 부당의 핵심 사정입니다.</strong> 동종 처분 사례 자료가 결정 입증.',
      },
      {
        question: '단 1건의 후기로 해고가 비례적인가요?',
        answer:
          '<strong>1건 단독 처분의 비례성은 양정 부당 다툼 영역입니다.</strong> 평소 인사평가·실적 자료 보존이 출발점.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 양정 부당 결합 다툼 가능한 영역입니다.</strong> 면담 정황 녹취·메모 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '고객 1건 민원 해고', href: '/guide/dismissal/dismissal-customer-complaint-single-incident-fire' },
      { label: '단일 위반 징계 해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 5. dismissal-religious-headscarf-uniform-violation-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-religious-headscarf-uniform-violation-fire-track',
    keyword: '종교적 의복 유니폼 규정 위반 해고',
    questionKeyword: '히잡·십자가 목걸이 같은 종교적 의복을 착용했더니 \'유니폼 규정 위반\'을 사유로 해고됐어요. 종교의 자유로 다툴 수 있나요?',
    ctaKeyword: '종교 의복 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '종교 의복 유니폼 위반 해고 — 5단계 종교 자유·차별 다툼 | 로앤가이드',
      description:
        '히잡·십자가 등 종교적 의복으로 해고됐다면 종교의 자유·합리적 편의·차별 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 2년 차에 본인의 종교적 신념(이슬람·기독교 등)에 따라 히잡 또는 십자가 목걸이를 착용하기 시작했고, 인사팀은 \'유니폼 규정 위반\'·\'고객 응대 일관성 저해\'를 사유로 시정 요청을 했습니다. 본인이 종교의 자유를 주장하며 합리적 편의(머리색 통일 유니폼 위 히잡 색 매칭·목걸이 안쪽 착용 등) 가능성을 제안했음에도 회사 측은 \'예외 불가\' 입장만 반복했고, 결국 \'반복적 규정 위반\'을 사유로 해고 통보를 받았어요. 같은 회사 다른 직원의 비종교적 장신구·머리스타일 변형은 묵인되는 정황도 있었습니다." 헌법 제20조는 종교의 자유를 보장하고 근로기준법 제6조는 종교를 이유로 한 차별적 처우를 금지하는 영역이며, 사용자의 유니폼·복장 규정은 직무 필요성·고객 응대·안전 등 합리적 목적 범위 내에서 적용되는 영역입니다. 종교적 의복 착용 자체를 사유로 한 해고는 종교 자유 침해·차별·합리적 편의 의무 위반 다툼이 가능한 트랙. 피해자라면 ① 종교 자유 영역 ② 합리적 편의 ③ 차별·형평성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 자유 ② 편의 ③ 차별 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 종교 의복 유니폼 위반 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자유·편의·차별·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 종교 자유 영역</strong> — 헌법 제20조 종교의 자유 보호 영역.</li>\n<li><strong>② 합리적 편의 의무</strong> — 사용자의 종교적 편의 제공 가능성 검토 의무.</li>\n<li><strong>③ 차별·형평성</strong> — 비종교적 장신구·머리스타일 변형과의 처우 비교.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 종교 차별·정당한 이유 부재 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유니폼 규정 = 직무 필요성·합리적 목적 범위에서 적용되는 영역. 종교적 의복 자체를 사유로 한 해고는 헌법 종교 자유 + 근기법 제6조 차별 금지 + 합리적 편의 의무 종합 평가 트랙. 합리적 편의 가능성 검토 부재가 핵심 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시정 요청·해고 통보서 보존 (즉시)</strong> — 시정 요청 공문·해고 통보서·인사위 회의록.</li>\n<li><strong>2단계 — 합리적 편의 제안 자료 (1~2주)</strong> — 본인의 편의 제안 메시지·면담 메모.</li>\n<li><strong>3단계 — 형평성 자료 (2~3주)</strong> — 비종교적 장신구·머리스타일 변형 직원의 처우 비교.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 종교 차별 + 정당한 이유 부재.</li>\n<li><strong>5단계 — 인권위 진정 + 민사 손해배상</strong> — 종교 차별 진정·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">종교 의복 유니폼 위반 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자유·편의·차별 갈래입니다.</strong></p>\n<ul>\n<li><strong>유니폼 규정·취업규칙 전문</strong></li>\n<li><strong>시정 요청 공문·해고 통보서·인사위 회의록</strong></li>\n<li><strong>본인의 합리적 편의 제안 메시지·면담 메모</strong></li>\n<li><strong>회사의 \'예외 불가\' 회신 자료</strong></li>\n<li><strong>비종교적 장신구·머리스타일 변형 직원의 처우 비교 자료</strong></li>\n<li><strong>종교 신념 입증 자료 (소속 종교 단체 확인서 등)</strong></li>\n<li><strong>본인 인사평가·고객 응대 실적 자료 (직무 정상 수행 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 합리적 편의(색 매칭·안쪽 착용 등)를 제안했음에도 회사가 일방 거부한 정황이 핵심 다툼 지점. 같은 회사 비종교적 장신구 묵인 사례는 차별 입증의 결정 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>종교 자유 영역</strong> — 헌법 제20조 종교의 자유 보호 영역.</li>\n<li><strong>합리적 편의 의무</strong> — 사용자의 편의 제공 가능성 검토 의무 위반.</li>\n<li><strong>차별·형평성</strong> — 비종교적 장신구·머리스타일과의 처우 비교.</li>\n<li><strong>직무 필요성</strong> — 유니폼 규정의 합리적 목적 범위 평가.</li>\n<li><strong>인권위 진정 병행</strong> — 종교 차별 진정 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국가인권위원회 1331 (종교 차별 진정)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제명령과 합리적 편의 평가',
        summary:
          '대법원 2024두32973(대법원, 2024.08.29 선고) 영역에서 법원은 부당해고 구제명령 사건에서 사용자가 행한 인사처분·해고가 정당성을 인정받으려면 그 사유가 객관적·합리적이어야 할 뿐 아니라 근로자의 헌법상 기본권(종교의 자유·표현의 자유 등)과 직무 필요성 사이의 비교형량이 이루어져야 하고, 사용자에게는 합리적 범위 내에서 근로자의 기본권 행사에 따른 편의를 검토할 의무가 인정되는 사정이 있다고 본 사례 흐름이 있습니다.',
        takeaway: '종교적 의복 = 헌법 종교 자유 영역. 사용자의 합리적 편의 의무 검토 부재 + 일방 해고는 정당성 부정 강한 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '유니폼 규정에 \'장신구·머리 가리개 금지\' 조항이 있어도 해고가 부당한가요?',
        answer:
          '<strong>규정 명문화만으로는 정당성 자동 인정되지 않는 영역입니다.</strong> 합리적 목적·종교 자유 비교형량 필요.',
      },
      {
        question: '합리적 편의를 제안했는데 회사가 일방 거부했어요',
        answer:
          '<strong>합리적 편의 의무 위반의 강한 사정입니다.</strong> 제안 메시지·회사 회신 자료가 결정 입증.',
      },
      {
        question: '비종교적 장신구는 묵인되는데 종교 장신구만 문제 삼았어요',
        answer:
          '<strong>근기법 제6조 종교 차별 사정입니다.</strong> 다른 직원 처우 비교 자료 + 인권위 진정 병행 가능.',
      },
      {
        question: '인사위 소명 기회 없이 해고가 결정됐어요',
        answer:
          '<strong>절차상 흠결로 절차상 무효 사정입니다.</strong> 인사위 통보·소명 기회 부재 자료 보존.',
      },
      {
        question: '인권위 진정과 노동위 구제신청을 동시에 해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 인권위 결정은 노동위·민사 사건의 보강 자료.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '단일 위반 징계 해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
    ],
  },
];
