import { SpokePage } from '../spoke-pages';

// batch63 dismissal — 5개 (2026-05-13)
//
// 고유 존재 이유:
// 1. 정직처분 종료 후 복귀 거부 — 사실상 해고 평가 + 정직 자체 효력 다툼 결합 트랙 (기존 dismissal-disciplinary-* 와 분기축 다름: "정직 종료 후 복귀 거부 시점" 각도).
// 2. 수습 통과 후 본채용 직후 즉시 해고 — 시용계약 통과 시점·5인 미만 사업장 옵션 결합 (기존 trial-period-* 는 수습 중 해고, 본 페이지는 통과 후).
// 3. 부서 폐지 명목 1인 표적 해고 — 직제 개편 위장 + 대상자 선정 1인 합리성 다툼 (기존 restructuring-* 는 다수 정리해고, 본 페이지는 1인 표적).
// 4. 회식 거부·하급자 폭언 진정 후 보복성 인사조치 — 직장 내 괴롭힘 신고 + 인사권 남용 결합 (기존 bullying-report-retaliation 은 신고자 본인, 본 페이지는 진정 제기 후 보복 인사 트랙).
// 5. SNS 회사 비방게시글 즉시 해고 — 표현의 자유 vs 신뢰관계 + 즉시해고 절차하자 결합 (기존 sns-criticism-legitimacy 는 정당성 판단형, 본 페이지는 즉시해고 5단계 대응 절차형).

export const spokesBatch63Dismissal: SpokePage[] = [
  // ─── 1. dismissal-suspension-reinstatement-refused-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-suspension-reinstatement-refused-track',
    keyword: '정직 종료 복귀 거부',
    questionKeyword: '3개월 정직 끝났는데 회사가 복귀를 거부하고 있어요. 이게 해고와 같은 건가요?',
    ctaKeyword: '정직 후 복귀 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정직 종료 후 복귀 거부 — 5단계 사실상 해고 다툼 | 로앤가이드',
      description:
        '3개월·6개월 정직 끝나고 복귀를 거부당했다면 사실상 해고·정직처분 무효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 정직 처분받고 기간이 끝났는데 회사가 \'아직 복귀 명령 안 났다\' \'대기하라\'며 자리를 안 주고 있어요. 임금도 안 들어옵니다. 인사팀에 물으면 \'결정 안 됐다\' 답뿐. 정직이 사실상 해고로 이어진 건 아닌지 막막한 상황." 정직처분 자체가 부당한 경우 + 정직 종료 후 합리적 이유 없이 복귀를 거부하는 경우는 모두 사실상 해고로 평가될 여지가 있는 영역. 근기법 제23조 \'정당한 이유 없이 해고·휴직·정직·전직·감봉 그 밖의 징벌을 못 한다\'는 규정과 결합해 ① 정직처분 효력 다툼 ② 복귀 거부 = 묵시적 해고 평가 ③ 임금 청구 ④ 노동위 구제 ⑤ 민사 손해배상 5단계 대응이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 정직 종료 후 복귀 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정직효력·복귀거부·임금·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정직처분 자체의 정당성</strong> — 사유·소명·재량 검토.</li>\n<li><strong>② 복귀 거부 = 묵시적 해고 평가</strong> — 정직 기간 만료 후 합리적 이유 없는 대기 지시.</li>\n<li><strong>③ 미지급 임금 청구</strong> — 정직 종료일 이후는 근로 제공 의사 표시만으로 임금 청구 가능 영역.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정직·해고 병행 신청.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정직 종료 후 회사가 복귀시키지 않으면, 정직처분 자체의 부당성 + 복귀 거부에 따른 해고 다툼을 병행할 수 있는 영역. 근로 제공 의사 표시(서면·메일)를 명시하는 것이 첫 번째 방어선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지·구제·임금 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 복귀 의사 서면 통지 (즉시)</strong> — 내용증명·메일로 근로 제공 의사 표시.</li>\n<li><strong>2단계 — 정직처분 자료 확보 (1주)</strong> — 정직 통지서·인사위 회의록.</li>\n<li><strong>3단계 — 노동위 구제신청 (정직일로부터 3개월 내)</strong> — 정직 무효 + 묵시적 해고 다툼.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 원직 복귀·임금 상당액.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정직 후 복귀 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정직·복귀·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>정직 통지서·인사위 회의록</strong></li>\n<li><strong>취업규칙·징계 규정 (정직 조항)</strong></li>\n<li><strong>복귀 의사 통지 내용증명·메일</strong></li>\n<li><strong>회사 답변·대기 지시 메일</strong></li>\n<li><strong>급여명세서 (정직 전·정직 중·종료 후)</strong></li>\n<li><strong>근로계약서·인사기록카드</strong></li>\n<li><strong>동료 진술서 (선택)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 복귀 의사는 반드시 내용증명·이메일로 남겨야 \"근로 제공 의사 표시\"가 입증되는 영역. 카톡만으론 부족할 여지가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정직 기간 무한 연장</strong> — \"무기한 정직\"은 사실상 해고로 평가될 여지.</li>\n<li><strong>복귀 거부 의도 추정</strong> — 합리적 이유 없는 대기 지시.</li>\n<li><strong>3개월 기산점</strong> — 정직처분일 vs 복귀 거부일 둘 중 유리한 시점.</li>\n<li><strong>임금 청구 범위</strong> — 정직 종료일 이후 근로 제공 의사 표시 시점부터.</li>\n<li><strong>이중 처분 금지</strong> — 같은 사유 정직 + 해고는 이중 처분 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정직 종료 후 복귀 거부',
        summary:
          '대법원 2020두35592(2022.05.12 선고) 영역 등에서 법원은 정직처분의 효력이 문제되는 사건에서 정직 사유·재량 행사·기간 산정이 사회통념상 상당성을 잃었다고 평가될 수 있는 경우 정직처분이 무효로 평가될 여지가 있고, 그에 따라 정직 기간 중 임금 상당액에 대한 청구권이 인정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '정직 자체의 효력 다툼 + 복귀 거부 시점부터 임금 청구 가능. 근로 제공 의사 서면 표시가 다툼의 출발점입니다.',
      },
    ],
    faq: [
      {
        question: '정직 기간이 끝났는데 회사가 아무 연락도 안 해요',
        answer:
          '<strong>먼저 내용증명으로 복귀 의사를 표시하세요.</strong> 이 시점부터 임금 청구권이 발생할 여지가 있습니다.',
      },
      {
        question: '정직 무효와 부당해고를 동시에 다툴 수 있나요?',
        answer:
          '<strong>병행 가능합니다.</strong> 노동위에 정직·해고 모두 구제 대상으로 기재.',
      },
      {
        question: '"무기한 정직"이라고 통보받았어요',
        answer:
          '<strong>기간 특정 없는 정직은 사실상 해고로 평가될 여지가 있습니다.</strong> 즉시 구제신청 검토.',
      },
      {
        question: '3개월 기산점은 언제로 잡나요?',
        answer:
          '<strong>정직처분일·복귀 거부일 중 유리한 시점을 선택할 수 있는 영역입니다.</strong> 노무사·법률구조공단 132 상담 권장.',
      },
      {
        question: '정직 중 받은 일부 급여는 어떻게 평가되나요?',
        answer:
          '<strong>정직 무효 시 정상 임금과의 차액 청구가 가능한 영역입니다.</strong> 급여명세서·취업규칙 확인.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '구제절차 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 2. dismissal-trial-pass-immediate-fire-under5-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-trial-pass-immediate-fire-under5-track',
    keyword: '수습 통과 직후 해고',
    questionKeyword: '3개월 수습 통과 직후 해고됐어요. 5인 미만 사업장인데 다툼 가능한가요?',
    ctaKeyword: '수습 통과 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수습 통과 후 즉시 해고 — 5단계 사업장 규모별 대응 | 로앤가이드',
      description:
        '수습 3개월 통과 직후 해고됐다면 5인 미만·5인 이상 구분에 따른 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 수습기간 마치고 정직원 본채용 통보까지 받았는데, 2주 만에 \'적성 안 맞다\'며 해고 통보. 본인은 5인 미만 사업장이라 노동위 부당해고 구제가 안 된다고 들었어요. 해고예고수당 외에 다른 길이 없는지 막막한 상황." 근기법은 5인 이상 사업장에 부당해고 구제 규정을 적용하지만, 5인 미만 사업장도 ① 해고예고수당(30일치 통상임금) ② 민사 해고무효확인·임금청구 ③ 차별·괴롭힘 사유 시 차별시정·노동청 진정은 가능한 영역. 수습 통과 후 본채용된 직후는 \'시용기간 중 본채용 거부\'가 아닌 \'정규 근로자에 대한 해고\'로 평가되어 더 엄격한 정당성 심사가 적용되는 흐름. 대응은 ① 본채용 시점 확정 ② 사업장 규모 확인 ③ 해고예고수당 청구 ④ 민사·노동위 분기 ⑤ 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 수습 통과 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 본채용·규모·예고수당·민사·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본채용 시점 확정</strong> — 수습 종료 통보·본채용 메일·급여 상승.</li>\n<li><strong>② 사업장 규모 (5인 미만 vs 이상)</strong> — 4대보험 가입자·근로자 수 기준.</li>\n<li><strong>③ 해고예고수당 30일치</strong> — 5인 미만도 무조건 적용.</li>\n<li><strong>④ 민사 vs 노동위 분기</strong> — 5인 이상은 노동위, 미만은 민사 위주.</li>\n<li><strong>⑤ 차별·괴롭힘 사유 있으면 별도 진정</strong> — 사업장 규모 무관.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수습 통과 → 본채용 시점 이후 해고는 정규 해고와 동등하게 평가되는 영역. 사업장 규모와 무관하게 해고예고수당·민사 손해배상 길이 열려 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업장 규모별 분기 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본채용·해고 자료 확보 (즉시)</strong> — 본채용 통보·해고 통보서·급여명세서.</li>\n<li><strong>2단계 — 사업장 근로자 수 입증 (1주)</strong> — 4대보험 사업장 정보·동료 진술.</li>\n<li><strong>3단계 — 해고예고수당 진정 (노동청)</strong> — 5인 미만 포함 모든 사업장.</li>\n<li><strong>4-A단계 — 5인 이상: 노동위 구제신청 (3개월)</strong> — 부당해고 정식 다툼.</li>\n<li><strong>4-B단계 — 5인 미만: 민사 해고무효·임금청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 통과 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 본채용·해고·규모 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (수습·본채용)</strong></li>\n<li><strong>수습 종료·본채용 확정 통보 메일</strong></li>\n<li><strong>해고 통보서·문자·녹취</strong></li>\n<li><strong>급여명세서 (수습기간 vs 본채용 후)</strong></li>\n<li><strong>4대보험 가입자 명부·사업장 정보</strong></li>\n<li><strong>동료 진술서 (근로자 수 입증)</strong></li>\n<li><strong>해고 사유서 (서면 요청 가능)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사업장 근로자 수는 4대보험 가입자 + 일용직·아르바이트 포함해 평가하는 영역. 동료 진술서로 실제 인원 입증 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수습 vs 본채용 전환 시점</strong> — 통보 없어도 수습 기간 종료 + 정상 근무 = 본채용 평가 여지.</li>\n<li><strong>사업장 규모 산정</strong> — 일용직·파견직 포함 여부.</li>\n<li><strong>해고예고 30일 위반</strong> — 5인 미만도 30일치 통상임금.</li>\n<li><strong>3개월 미만 근속 예외</strong> — 해고예고수당 적용 제외 영역(근속 3개월 이상 시 적용).</li>\n<li><strong>5인 미만 민사 구제</strong> — 해고무효 + 미지급 임금 + 위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 본채용 거부',
        summary:
          '대법원 2018두43958(2021.04.29 선고) 영역에서 법원은 시용기간 중 사용자의 본채용 거절은 일반 해고보다 넓은 재량을 인정받으나, 그 거절에도 객관적·합리적 이유가 있고 사회통념상 상당하다고 평가될 수 있어야 한다고 본 사례 흐름이 있습니다. 본채용 후 해고는 정규 해고 기준이 더 엄격히 적용되는 영역입니다.',
        takeaway: '본채용 시점부터는 일반 부당해고 기준 적용. 사업장 규모에 따라 노동위·민사 분기 결정.',
      },
    ],
    faq: [
      {
        question: '본채용 통보를 명시적으로 받지 못했어요',
        answer:
          '<strong>수습 기간 종료 후 정상 출근·근무가 계속되었다면 묵시적 본채용 평가 여지가 있습니다.</strong>',
      },
      {
        question: '5인 미만 사업장도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 해고예고수당·민사 해고무효·임금청구는 사업장 규모 무관.',
      },
      {
        question: '해고예고수당은 얼마인가요?',
        answer:
          '<strong>30일분 통상임금입니다.</strong> 근속 3개월 이상에 적용.',
      },
      {
        question: '민사 손해배상은 어떤 손해가 포함되나요?',
        answer:
          '<strong>일실수입·정신적 위자료가 핵심입니다.</strong> 재취업 노력 입증도 함께.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '5인 미만 사업장', href: '/guide/dismissal/dismissal-under-five-employees-relief-paths' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '수습 해고 정당성', href: '/guide/dismissal/probation-dismissal-legality' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 3. dismissal-department-abolition-single-target-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-department-abolition-single-target-track',
    keyword: '부서 폐지 1인 표적 해고',
    questionKeyword: '부서 폐지한다며 저 한 명만 해고됐어요. 직제 개편이라는데 다툼 가능한가요?',
    ctaKeyword: '1인 표적 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부서 폐지 명목 1인 표적 해고 — 5단계 직제개편 위장 다툼 | 로앤가이드',
      description:
        '부서·직제 개편 명목으로 본인 1명만 해고됐다면 1인 표적·해고 회피 노력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'기획팀 폐지로 인원 정리\'라며 해고 통보를 받았는데, 알고 보니 본인 1명만 해고하고 나머지 팀원 4명은 다른 부서로 전환배치. 회사는 \'직제 개편 결과\'라고 합니다. 본인은 7년차였고 작년 인사평가도 B 이상이었어요." 부서 폐지·직제 개편 명목이라도 사실상 특정 1인을 겨냥한 해고는 ① 긴박한 경영상 필요 ② 해고 회피 노력 ③ 합리적 대상자 선정 ④ 근로자대표 협의 4요건 심사를 통과해야 정당성 평가가 가능한 영역. 특히 \"왜 다른 직원은 전환배치, 본인만 해고\" 인지 합리적 기준 입증 부담은 사용자에게 있습니다. 대응은 ① 직제개편 근거 ② 대상자 선정 기준 ③ 전환배치 가능성 ④ 노동위 구제 ⑤ 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 부서 폐지 1인 표적 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 직제개편·선정·회피·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 직제 개편의 실질</strong> — 부서 폐지가 실제 vs 명목.</li>\n<li><strong>② 1인 표적 합리성</strong> — 같은 부서 다른 인원 처우 비교.</li>\n<li><strong>③ 전환배치 가능성</strong> — 다른 부서·직무 공석 여부.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 신청.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부서 폐지 명목이라도 1인 표적이면 \"통상해고\"로 재분류 평가되는 영역. 통상해고는 사용자의 정당한 이유 입증 부담이 더 무거운 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료확보·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 직제개편 공지·인사발령 확보 (즉시)</strong> — 다른 직원 전환배치 명단 포함.</li>\n<li><strong>2단계 — 인사평가·근무 평가 보존 (1주)</strong> — 본인 성과 입증.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고·재량남용.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 원직 복귀·임금 상당액.</li>\n<li><strong>5단계 — 행정·민사 손해배상 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">1인 표적 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 직제·인사·평가 갈래입니다.</strong></p>\n<ul>\n<li><strong>직제개편 공지·이사회 결의서</strong></li>\n<li><strong>해고 통보서·사유서</strong></li>\n<li><strong>같은 부서 동료 인사발령장</strong></li>\n<li><strong>본인 인사평가·근무 평가</strong></li>\n<li><strong>회사 채용공고·공석 정보 (전환배치 가능성)</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n<li><strong>동료 진술서·이사회 의사록 (가능 범위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고 직후 회사 채용공고에 \"기획 담당자 모집\" 같은 글이 올라오면 부서 폐지의 실질이 부정될 강력한 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>직제개편 실질 vs 명목</strong> — 같은 업무 다른 부서 이관은 폐지 부정 사유.</li>\n<li><strong>1인 표적 = 통상해고 재분류</strong> — 사용자 입증 부담 무거움.</li>\n<li><strong>전환배치 의무</strong> — 공석·재교육 시도 부재 시 회피노력 미흡.</li>\n<li><strong>해고 후 재채용</strong> — 같은 직무 신규 채용 시 부당 강력 사유.</li>\n<li><strong>인사평가 신뢰성</strong> — 평소 B 이상이면 \"무능\" 주장 어려움.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 정당성',
        summary:
          '대법원 2018두44647(2019.11.28 선고) 영역에서 법원은 경영상 이유에 의한 해고가 근기법 제24조의 요건을 갖추었는지 판단할 때 긴박한 경영상 필요·해고 회피 노력·합리적·공정한 해고 기준의 설정과 이에 따른 대상자 선정·근로자대표와의 성실한 협의를 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '1인 표적은 대상자 선정의 합리성·해고 회피 노력에서 가장 자주 꺾이는 영역. 다른 직원 처우 비교가 핵심.',
      },
    ],
    faq: [
      {
        question: '회사가 "직제개편 결과"라고만 하면 끝나나요?',
        answer:
          '<strong>아닙니다.</strong> 실질 폐지·1인 표적 합리성·회피노력 모두 입증해야 합니다.',
      },
      {
        question: '같은 부서 동료는 다른 부서로 갔어요',
        answer:
          '<strong>전환배치 의무 위반 강력 사유입니다.</strong> 본인에게도 같은 기회 부여 여부 확인.',
      },
      {
        question: '인사평가가 좋았는데도 본인만 해고됐어요',
        answer:
          '<strong>대상자 선정 합리성 의문이 큽니다.</strong> 인사평가 자료가 핵심 증거.',
      },
      {
        question: '부서 폐지 후 같은 업무로 재채용 공고가 나왔어요',
        answer:
          '<strong>부서 폐지 실질 부정의 강력 사유입니다.</strong> 채용공고 캡처·날짜 보존 필수.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '경영상 해고 요건', href: '/guide/dismissal/dismissal-redundancy-requirements' },
      { label: '직제 개편 위장', href: '/guide/dismissal/dismissal-restructuring-position-elimination' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 4. dismissal-hoesik-refusal-retaliation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-hoesik-refusal-retaliation-track',
    keyword: '회식 거부 보복 인사',
    questionKeyword: '상사의 회식 강요·폭언을 진정했더니 인사 불이익을 받고 있어요. 어떻게 대응하나요?',
    ctaKeyword: '진정 후 보복 인사 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회식 거부·진정 후 보복 인사 — 5단계 직장 내 괴롭힘 결합 | 로앤가이드',
      description:
        '회식 강요·폭언 진정 후 한직 발령·해고를 당했다면 직장 내 괴롭힘 + 부당해고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"팀장이 매주 회식 강요하고 거절하면 \'팀워크 부족\'이라며 폭언. 인사팀에 진정을 넣었더니 일주일 만에 외주 관리 한직으로 발령. 동료는 \'이번엔 해고도 나올 분위기\'라고 귀띔합니다. 진정 자체가 보복의 빌미가 된 상황." 근기법 제76조의3은 직장 내 괴롭힘 신고자·피해자에 대한 \'해고 등 불리한 처우\'를 절대 금지하는 영역(위반 시 3년 이하 징역 또는 3천만원 이하 벌금). 진정 직후 한직 발령·해고는 ① 보복성 평가 인정 여지 ② 인사권 남용 ③ 부당해고 다툼 ④ 노동청 형사 처벌 ⑤ 민사 손해배상 5단계로 대응 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 진정 후 보복 인사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시기·인과·인사권·구제·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진정-인사조치 시간 근접성</strong> — 1~3개월 내면 보복성 추정 강함.</li>\n<li><strong>② 인사조치의 합리성</strong> — 같은 직군 다른 직원과 비교.</li>\n<li><strong>③ 인사권 남용</strong> — 직무·근무지·임금 사실상 강등.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당전직·부당해고.</li>\n<li><strong>⑤ 노동청 형사 진정</strong> — 근기법 76조의3 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신고 후 합리적 사유 없는 인사조치는 근기법상 \"불리한 처우\" 추정 영역. 인과관계 입증 부담이 사용자에게 옮겨갈 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진정·구제·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진정 사실·인사조치 자료 보존 (즉시)</strong> — 진정서·인사발령장·메일.</li>\n<li><strong>2단계 — 보복성 입증자료 수집 (1~2주)</strong> — 시기 근접성·동료 진술.</li>\n<li><strong>3단계 — 노동청 진정 (근기법 76조의3)</strong> — 형사 처벌·시정.</li>\n<li><strong>4단계 — 노동위 구제신청 (3개월 내)</strong> — 부당전직·부당해고.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진정 후 보복 인사 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진정·인사·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>회식 강요·폭언 녹취·문자</strong></li>\n<li><strong>인사팀 진정서·접수증</strong></li>\n<li><strong>진정 후 인사발령장·메일</strong></li>\n<li><strong>전후 직무·근무지·급여 비교</strong></li>\n<li><strong>인사평가 (진정 전후)</strong></li>\n<li><strong>동료 진술서</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진정 접수번호·날짜는 시간 근접성 입증의 핵심. 메일·카톡 캡처 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인과관계 추정</strong> — 시간 근접성·동기 부재 결합 시 보복성 추정.</li>\n<li><strong>인사권 vs 보복</strong> — 같은 직군 다른 사례 비교가 핵심.</li>\n<li><strong>한직 발령 = 사실상 강등</strong> — 부당전직 다툼 별도 트랙.</li>\n<li><strong>회식 강요</strong> — 근로시간 외 강제 참석은 그 자체로 괴롭힘 평가 여지.</li>\n<li><strong>형사·민사 병행</strong> — 노동청 진정 + 노동위 + 민사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사조치의 정당성',
        summary:
          '대법원 2017다257869(2019.11.28 선고) 영역에서 법원은 사용자의 인사권 행사가 업무상 필요성에 비해 근로자가 입는 불이익이 현저히 크거나 신의칙에 반한다고 평가될 수 있는 경우, 그 처분이 권리남용으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '신고 직후 한직 발령은 업무상 필요성 입증 부담이 사용자에게. 진정-발령 시간 근접성이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '진정 후 얼마 안에 발령이 나야 보복으로 인정되나요?',
        answer:
          '<strong>법정 기간은 없으나 1~3개월 내면 시간 근접성 추정 강합니다.</strong>',
      },
      {
        question: '회식 강요만으로도 직장 내 괴롭힘인가요?',
        answer:
          '<strong>업무 외 시간 강제 참석은 괴롭힘으로 평가될 여지가 있습니다.</strong>',
      },
      {
        question: '인사발령이 "외주 관리"로 직무만 바뀌었어요',
        answer:
          '<strong>사실상 강등·소외 평가 시 부당전직 다툼 가능합니다.</strong>',
      },
      {
        question: '회사가 "본인 능력 문제"라고 주장해요',
        answer:
          '<strong>진정 전 인사평가가 좋았다면 약한 사유로 평가될 여지가 큽니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '괴롭힘 신고 보복', href: '/guide/dismissal/dismissal-bullying-report-retaliation' },
      { label: '직장 내 괴롭힘 절차', href: '/guide/dismissal/workplace-bullying-complaint-procedure' },
      { label: '내부고발 보복', href: '/guide/dismissal/dismissal-whistleblower-retaliation' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 5. dismissal-sns-company-defamation-immediate-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-sns-company-defamation-immediate-fire-track',
    keyword: 'SNS 회사 비방 즉시해고',
    questionKeyword: '회사 비방 SNS 글 하나로 즉시 해고됐어요. 표현의 자유 다툼 가능한가요?',
    ctaKeyword: 'SNS 비방 즉시 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 회사 비방 즉시 해고 — 5단계 표현의 자유 vs 신뢰관계 | 로앤가이드',
      description:
        'SNS·블로그 회사 비방 게시글로 즉시 해고됐다면 표현의 자유·신뢰관계 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"개인 SNS에 \'우리 회사 야근 강요 심하다\' 글을 올렸는데 다음날 인사팀이 캡처를 들이밀며 즉시 해고 통보. 본인 이름·회사명 직접 언급하진 않았어요. 소명 기회도 못 받았습니다. SNS 글 하나로 7년 근속이 끝날 수 있는지 막막한 상황." SNS·블로그 회사 비판 글에 대한 해고는 ① 표현의 자유 + 근로자의 회사 비판권 ② 신뢰관계 파괴 정도 ③ 표현의 공익성·진실성 ④ 회사 손해의 구체성 ⑤ 절차적 정의(소명 기회) 5가지를 종합 평가하는 영역. 단순 불만 표출과 명예훼손·영업비밀 누설은 구분되며, 즉시해고는 사회통념상 상당성 심사가 더 엄격합니다. 대응은 ① 게시글·해고통보 보존 ② 공익성·진실성 입증 ③ 소명기회 부재 ④ 노동위 구제 ⑤ 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. SNS 회사 비방 즉시 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·신뢰·공익·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현의 자유 vs 충실의무</strong> — 회사명·이름 명시 여부.</li>\n<li><strong>② 신뢰관계 파괴 정도</strong> — 명예훼손·영업비밀 vs 단순 불만.</li>\n<li><strong>③ 공익성·진실성</strong> — 야근·임금체불 등 사회적 관심 사안.</li>\n<li><strong>④ 회사의 실제 손해</strong> — 구체적 손해 입증 부담.</li>\n<li><strong>⑤ 소명 기회 부재</strong> — 절차적 정의 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사 비판 자체가 곧 해고 사유는 아닌 영역. 표현이 공익·진실에 부합하고 회사 손해가 구체적으로 입증되지 않으면 즉시 해고는 사회통념상 상당성 부족으로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료확보·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — SNS 원본·해고통보 보존 (즉시)</strong> — 게시글 캡처·URL·작성일시.</li>\n<li><strong>2단계 — 공익성·진실성 입증자료 (1~2주)</strong> — 야근기록·임금명세서.</li>\n<li><strong>3단계 — 노동위 구제신청 (3개월 내)</strong> — 부당해고·절차하자.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 원직 복귀·임금 상당액.</li>\n<li><strong>5단계 — 민사 손해배상 (필요시)</strong> — 정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 비방 즉시 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시글·해고·진실성 갈래입니다.</strong></p>\n<ul>\n<li><strong>SNS 게시글 원본·URL·캡처 (작성일시 포함)</strong></li>\n<li><strong>해고 통보서·즉시해고 사유서</strong></li>\n<li><strong>회사 손해 주장 자료 (회사가 제시한 것)</strong></li>\n<li><strong>공익성·진실성 입증 (야근기록·임금명세서·근로계약서)</strong></li>\n<li><strong>인사위 회의록·소명 기회 부재 입증</strong></li>\n<li><strong>취업규칙·SNS 사용 정책</strong></li>\n<li><strong>같은 사안 다른 직원 처분 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사명·임직원 실명을 직접 언급하지 않은 일반적 비판은 명예훼손 성립이 어렵다는 흐름. 그 경계가 다툼의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특정성</strong> — 회사명·실명 미언급 시 신뢰관계 파괴 약화.</li>\n<li><strong>공익성</strong> — 야근·체불·괴롭힘 등 사회적 관심 사안은 보호 영역.</li>\n<li><strong>회사 손해 입증</strong> — 매출 감소·거래처 이탈 등 구체적 손해 부담.</li>\n<li><strong>즉시해고 절차하자</strong> — 인사위·소명 기회 부재 시 절차 위반.</li>\n<li><strong>경징계 시도 부재</strong> — 게시글 삭제·시말서 등 단계적 처분 검토 부재.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — SNS·표현과 신뢰관계',
        summary:
          '대법원 2021두45114(2021.10.28 선고) 영역 등에서 법원은 근로자의 외부 표현이 사용자와의 신뢰관계를 본질적으로 파괴하였다고 평가될 수 있는지를 표현의 내용·맥락·공익성·회사 손해 정도·근속과 평소 행태를 종합해 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '비판 = 곧 해고는 아닌 영역. 공익성·회사 손해의 구체성·절차적 소명이 다툼의 축.',
      },
    ],
    faq: [
      {
        question: '회사명을 직접 언급하지 않았는데도 해고됐어요',
        answer:
          '<strong>특정성이 약하면 신뢰관계 파괴 입증이 어려울 여지가 있습니다.</strong>',
      },
      {
        question: '야근 강요 사실을 적은 건데 명예훼손인가요?',
        answer:
          '<strong>진실하고 공익 목적이면 명예훼손 책임이 약화될 수 있는 영역입니다.</strong>',
      },
      {
        question: '소명 기회 없이 즉시 해고가 가능한가요?',
        answer:
          '<strong>취업규칙상 인사위 절차가 있다면 생략 자체가 절차 하자 사유입니다.</strong>',
      },
      {
        question: '게시글을 삭제하면 해고가 면해질 수 있나요?',
        answer:
          '<strong>회피노력 + 시정 의사 입증으로 해고 회피 노력 부재 주장이 가능합니다.</strong>',
      },
      {
        question: 'SNS 게시글이 비공개·친구공개인 경우는요?',
        answer:
          '<strong>외부 공개성이 약하면 영업 손해·신뢰파괴 평가가 더 어려운 영역입니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: 'SNS 비판 정당성', href: '/guide/dismissal/dismissal-sns-criticism-legitimacy' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '소명 기회 위반', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },
];
