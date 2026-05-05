import { SpokePage } from '../spoke-pages';

// batch56 dismissal B — 2개
//
// 고유 존재 이유:
// 1. 이 페이지는 비등기임원/상무로 해임된 근로자가 근로기준법상 근로자성을 입증해 부당해고 구제·해고무효 트랙으로 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 회사가 일부 사업부를 폐지하면서 본인만 직무 폐지 명목으로 해고된 근로자가 일부 사업폐지 통상해고의 정당성 4가지 입증부담 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56DismissalB: SpokePage[] = [
  // ─── 1. dismissal / dismissal-shareholder-resolution-removal-employee ───
  {
    domain: 'dismissal',
    slug: 'dismissal-shareholder-resolution-removal-employee',
    keyword: '비등기임원 해임 근로자성 다툼',
    questionKeyword: '주주총회 결의로 상무로 해임됐는데, 사실상 일반 근로자처럼 일했어요. 다툴 수 있나요?',
    ctaKeyword: '비등기임원 해임 근로자성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '비등기임원 해임 다툼 — 근로자성 5가지 입증 포인트 | 로앤가이드',
      description:
        '비등기임원·상무로 해임됐는데 사실상 근로자였다면 근로기준법상 근로자성 5가지 입증으로 부당해고 구제 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전 부장에서 비등기임원 \'상무\'로 승진했는데, 업무는 그대로였어요. 출퇴근·연차·업무지시·인사평가 모두 임원 시스템과 다르게 일반 근로자처럼 받았습니다. 그런데 어느 날 주주총회 결의로 \'위임 종료\'라며 해임됐어요." 비등기임원 해임은 형식상 위임관계 해지처럼 보이지만, 대법원 2012다10959·2003가합6980 일관 판결은 임원 직함이 있어도 실질적 종속관계가 인정되면 근로기준법상 근로자에 해당한다고 봤습니다. 근로자성이 인정되면 근로기준법 제23조 정당사유 + 제27조 서면통지 + 노동위 부당해고 구제 트랙이 모두 적용 가능한 영역이 됩니다. 해임일로부터 3개월 이내라면 노동위 구제신청을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비등기임원 근로자성 5가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 종속성·업무수행·보수·인사관리·사회보험 5단계로 입증할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무 종속성·지휘감독</strong> — 대표이사·상위 임원의 구체적 업무지시를 받았는지, 본인 독자적 결정 권한 범위가 어땠는지. 회의록·이메일이 핵심 자료.</li>\n<li><strong>② 근무시간·장소 통제</strong> — 출퇴근 시간이 정해져 있었는지, 근무 장소가 회사로 한정됐는지. 임원은 통상 출퇴근 자유, 근로자는 통제.</li>\n<li><strong>③ 보수 성격 (임금 vs 위임보수)</strong> — 매월 고정 급여(상여 별도)였는지, 본인 사업 손익에 따라 보수가 변동됐는지. 4대보험·근로소득세 원천징수 정황도 핵심.</li>\n<li><strong>④ 인사관리 적용</strong> — 일반 근로자와 동일하게 평가·승진·연차 적용을 받았는지. 임원 등기·이사회 의결 대상이 아니었는지.</li>\n<li><strong>⑤ 4대보험·취업규칙 적용</strong> — 국민연금·건강보험·고용보험·산재보험 가입 여부, 취업규칙 적용 정황. 근로자성 인정의 강한 정황 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대표이사는 통상 근로자가 아니지만(2012다98720), 비등기임원·이사·상무 등은 실질 판단 영역입니다. 직함보다 실질 종속관계 정황이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 근로자성 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성 입증 → 부당해고 구제 → 임금상당액 청구 순으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로자성 자료 보존 (즉시)</strong> — 입사부터 해임까지 업무지시 이메일·회의록·인사평가표·급여명세서·4대보험 가입증명서·연차사용 이력.</li>\n<li><strong>2단계 — 회사에 해임사유서 + 근로자성 검토 요구 (3~7일)</strong> — 내용증명으로 해임의 법적 성격(위임 해지 vs 근로계약 해지) 명확화 요구.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해임일 3개월 이내)</strong> — 근로자성 인정 + 해고 정당사유 부재 두 트랙. 사업장 관할 지방노동위.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 근로자성 5가지 입증 포인트 제시. 회사 측 위임 주장 반박.</li>\n<li><strong>5단계 — 판정·민사 병행</strong> — 노동위가 근로자성 부정하면 민사 해고무효확인 소송 + 해임결의 효력 다툼 별도 트랙(상법 제385조 정당이유 검토).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">비등기임원 근로자성 5가지 입증 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 종속성 자료 + 보수 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>고용계약서·위임계약서</strong> — 형식상 위임이라도 실질 근로계약 정황 검토.</li>\n<li><strong>업무지시 이메일·회의록</strong> — 종속관계 핵심 입증 자료.</li>\n<li><strong>인사평가표·승진 이력</strong> — 일반 근로자와 동일 시스템 적용 정황.</li>\n<li><strong>출퇴근 기록·연차 사용 이력</strong> — 근무시간 통제 정황.</li>\n<li><strong>급여명세서·근로소득 원천징수영수증</strong> — 임금 성격 입증.</li>\n<li><strong>4대보험 가입증명서</strong> — 근로자성 강한 정황.</li>\n<li><strong>임원 등기부등본</strong> — 등기임원 여부 확인(미등기면 근로자성 다툼 영역 더 넓음).</li>\n<li><strong>주주총회·이사회 의사록</strong> — 해임 결의 정황·정당이유 입증부담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임원 직함이 있어도 4대보험에 일반 근로자로 가입돼 있고 근로소득으로 신고된 정황이 있다면 근로자성 인정의 매우 강한 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"임원 직함이라 근로자 아니다" 주장 반박</strong> — 직함보다 실질 판단. 비등기임원·상무는 근로자성 다툼 영역이 넓은 사례가 있습니다(2012다10959).</li>\n<li><strong>"위임계약서에 서명했다" 주장 반박</strong> — 형식상 위임도 실질 근로 정황이 압도하면 근로계약으로 평가될 여지가 있습니다.</li>\n<li><strong>"임원 보수도 근로의 대가" 주장 결합</strong> — 보수 성격 다툼은 회사 측이 임금이 아닌 위임보수임을 입증해야 하는 영역.</li>\n<li><strong>등기임원이라면 별도 트랙</strong> — 등기임원이라면 근로자성 인정 어려운 사례가 많고, 상법 제385조 "정당한 이유 없는 해임" 손해배상 트랙으로 분기.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·근로자성 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 노무사 유료 상담 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비등기임원 상무의 근로기준법상 근로자성',
        summary:
          '대법원 2012다10959 사건(대법원, 2017.11.09 선고)에서 법원은 대규모 금융회사 보험사의 미등기임원 상무로 선임돼 특정 부문 업무책임자로 일하다 해임된 사람이 근로기준법상 근로자에 해당하는지 다툰 사안에서, 회사 임원이 근로자에 해당하는지는 명목상 직위가 아니라 실질에 따라 판단해야 한다고 판시했습니다. 다만 그 사안에서는 기능적으로 분리된 특정 부문을 포괄적으로 위임받아 독자적 권한과 책임으로 처리하는 지위였던 점을 들어 근로자성을 부정했습니다.',
        takeaway: '비등기임원 해임은 직함이 아닌 업무 독자성·종속관계·보수 성격을 종합 판단하는 사례가 있어, 일상 업무가 일반 근로자와 동일한 정황 자료를 모아두면 근로자성 인정 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '주주총회 해임 결의가 있었는데 다툴 수 있나요?',
        answer:
          '<strong>근로자성이 인정되면 주주총회 결의 자체로 해고가 정당화되지 않는 사례가 있습니다.</strong> 근로기준법 제23조 정당사유 + 제27조 서면통지 의무가 별도로 적용되는 영역으로 검토할 수 있습니다.',
      },
      {
        question: '등기임원이면 근로자성 인정 어렵나요?',
        answer:
          '<strong>등기임원은 일반적으로 근로자성 인정이 어려운 사례가 많습니다.</strong> 다만 등기임원도 실질 종속관계가 인정되는 예외 사례가 있어, 업무 독자성·보수 성격 검토가 필요합니다. 등기 여부보다 실질이 핵심.',
      },
      {
        question: '4대보험에 가입돼 있었으면 근로자성 인정되나요?',
        answer:
          '<strong>매우 강한 정황 자료지만 단독 결정요소는 아닙니다.</strong> 4대보험 + 근로소득 원천징수 + 종속적 업무수행이 결합되면 근로자성 인정 가능성이 높아지는 영역으로 평가됩니다.',
      },
      {
        question: '해임 후 위로금을 받았는데 다툴 수 있나요?',
        answer:
          '<strong>위로금 수령이 다툼 자체를 봉쇄하지는 않습니다.</strong> 다만 합의서에 "추가 청구 포기" 문구가 명시돼 있다면 합의 효력 다툼이 결합되는 영역. 합의서 문구 검토가 필요합니다.',
      },
      {
        question: '5인 미만 회사인데 비등기임원 해임 다툼 가능한가요?',
        answer:
          '<strong>5인 미만은 노동위 부당해고 구제 트랙이 제한됩니다.</strong> 다만 민사 해고무효확인 소송 + 근로자성 다툼은 별도 가능한 영역이라, 법률구조공단 132 상담을 검토할 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '프리랜서 근로자성 인정', href: '/guide/dismissal/dismissal-freelancer-worker-status' },
      { label: '플랫폼 노동자 근로자성', href: '/guide/dismissal/dismissal-platform-worker-rights' },
      { label: '하청·파견 사용자 책임', href: '/guide/dismissal/dismissal-subcontractor-principal-responsibility' },
      { label: '임원 강등 후 강요 사직', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '소명기회 없는 징계해고', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
    ],
  },

  // ─── 2. dismissal / dismissal-hr-system-restructure-position-deletion ───
  {
    domain: 'dismissal',
    slug: 'dismissal-hr-system-restructure-position-deletion',
    keyword: '일부 사업폐지 직무삭제 통상해고',
    questionKeyword: 'HR 시스템 개편으로 제 직무가 폐지됐다며 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '직무폐지 통상해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'HR 개편 직무폐지 해고 — 4가지 입증부담 점검 | 로앤가이드',
      description:
        '회사가 HR 개편·일부 사업폐지로 직무를 없앤 뒤 본인만 해고했다면 일부 사업폐지 통상해고의 정당성 4가지 입증부담 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전사 HR 시스템을 외부 솔루션으로 바꾸면서 \'기존 HR 운영팀 직무 자체가 없어진다\'며 해고 통보를 받았어요. 그런데 같은 팀 동료는 다른 부서로 배치 전환됐고, 저만 해고됐습니다." 일부 사업·부서 폐지를 이유로 한 해고는 형식상 \'직무 소멸\' 통상해고처럼 보이지만, 대법원 2016두64876 판결은 그러한 해고가 정당하려면 ① 일부 사업의 폐지가 사업 전체 폐지와 같다고 볼 특별한 사정 ② 해당 사업과 관련된 인적·물적 조직의 단계적 정리 ③ 다른 부서·직무 배치 가능성 검토 ④ 정리해고에 준하는 절차 4가지 요건을 충족해야 한다고 봤어요. 동료는 배치 전환되고 본인만 해고됐다면 4가지 입증부담 다툼 트랙으로 노동위 구제신청을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 일부 사업폐지 통상해고에서 점검할 4가지 입증부담',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업폐지 동등성·조직정리·배치검토·절차정당성 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 일부 사업폐지가 사업 전체 폐지와 같다고 볼 특별한 사정</strong> — 단순 직무·팀 폐지가 아니라 회계·인적조직·물적설비가 분리·독립적이고 그 부문 폐지가 회사 전체 폐지에 준할 정도여야 합니다.</li>\n<li><strong>② 인적·물적 조직의 단계적 정리</strong> — 해당 사업과 관련된 자산 매각·인력 단계적 정리가 실제 진행됐는지. 일부 인력만 남거나 사업이 일부 유지되면 동등성 부정.</li>\n<li><strong>③ 다른 부서·직무 배치 가능성 검토</strong> — 해고 회피 노력의 일환으로 다른 부서 배치 검토를 했는지. 동료는 배치 전환됐는데 본인만 해고면 형평성 다툼.</li>\n<li><strong>④ 정리해고 절차에 준하는 협의·통지</strong> — 60일 사전 협의·통지·근로자대표 협의 등 정리해고 절차에 준하는 절차를 이행했는지(근로기준법 제24조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2016두64876 판결은 회사가 "직무 폐지" 명목으로 통상해고하는 사안을 엄격히 보고, 위 4가지 요건을 갖추지 못하면 사실상 정리해고로 평가되어 정리해고 4요건(긴박한 경영상 필요·해고회피 노력·합리적 기준·근로자대표 협의)을 충족해야 한다고 봤습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 부당해고 구제 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — HR 개편 자료 보존 (즉시)</strong> — 개편 안내 메일·해고 통보·동료 배치전환 정황(공고·인사발령서)·해당 부서 잔존 인력 정황.</li>\n<li><strong>2단계 — 회사에 해고사유서 + 배치검토 자료 요구 (3~7일)</strong> — 내용증명으로 해고회피 노력·다른 부서 배치 검토 자료 요구.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청 (해고일 3개월 이내)</strong> — 일부 사업폐지 동등성 부재 + 배치검토 부재 + 절차 미이행 트랙. 사업장 관할 지방노동위.</li>\n<li><strong>4단계 — 심문회의 (접수일 60일 이내)</strong> — 4가지 입증부담을 회사가 충족하지 못한 정황 제시. 동료 배치전환 사실이 핵심 증거.</li>\n<li><strong>5단계 — 판정·민사 병행</strong> — 인용 시 원직복직 + 임금상당액. 5인 미만이면 민사 해고무효확인 소송 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">일부 사업폐지 통상해고의 4가지 입증부담을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업폐지 자료 + 배치검토 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>HR 개편·사업폐지 안내 메일</strong> — 폐지 범위·일정·인적 정리 방침.</li>\n<li><strong>해고통보서·해고사유서</strong> — 사유 명시 + 배치검토 언급 정도.</li>\n<li><strong>동료 배치전환 정황 자료</strong> — 같은 팀 동료 인사발령서·공고.</li>\n<li><strong>잔존 인력·잔존 사업 정황</strong> — 해당 부서·관련 부서에 일부 인력·사업이 남아있는지.</li>\n<li><strong>회사 재무·경영 자료</strong> — 긴박한 경영상 필요 입증 부담은 회사. 회사 측 자료 제출 회피 정황도 다툼 자료.</li>\n<li><strong>취업규칙·단체협약</strong> — 정리해고·통상해고 절차 명문 규정.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고 통보 직후 해당 부서에 신규 채용 공고가 올라온 정황이 있다면 사업폐지 동등성 부재의 강력한 자료. 회사 채용 공고·LinkedIn·잡코리아 캡처를 즉시 보존하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"직무 자체가 없어졌다" 주장 반박</strong> — 직무명만 바뀌고 실질 업무가 다른 부서·외부 업체로 이전됐다면 직무 소멸이 아닌 정황. 외주 위탁 정황도 다툼 자료.</li>\n<li><strong>"동료는 본인 동의로 전환됐다" 주장 반박</strong> — 회사가 본인에게는 배치전환을 제안하지 않았다면 해고회피 노력 부재 정황.</li>\n<li><strong>"긴박한 경영상 필요" 주장 반박</strong> — 회사 매출·이익 정황이 양호하거나 다른 부서 신규 채용이 진행됐다면 긴박성 부재 다툼.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 본안 다툼과 별개로 해고예고 30일 위반 시 30일분 통상임금 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·정리해고 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당 진정 트랙.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일부 사업 폐지에 따른 통상해고의 정당성 판단기준',
        summary:
          '대법원 2016두64876 사건(대법원, 2021.07.29 선고)에서 법원은 사용자가 일부 사업 부문을 폐지하고 그 사업 부문에 속한 근로자를 해고한 경우, 그 해고가 폐업으로 인한 통상해고로서 예외적으로 정당하기 위해서는 일부 사업의 폐지·축소가 사업 전체 폐지와 같다고 볼 만한 특별한 사정이 있어야 한다고 판시했습니다. 그렇지 않으면 사실상 정리해고로 평가되어 근로기준법 제24조의 정리해고 4요건(긴박한 경영상 필요·해고회피 노력·합리적 기준·근로자대표 협의)을 갖춰야 정당하다고 보았습니다.',
        takeaway: '일부 사업폐지 통상해고는 회사 측 입증부담이 무거운 영역이라, 동료 배치전환 정황·잔존 인력·신규 채용 정황을 정리하면 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: 'HR 시스템을 외주로 바꾼 건데 이게 사업폐지인가요?',
        answer:
          '<strong>외주 전환은 일반적으로 사업폐지가 아닙니다.</strong> 직무가 외주 업체로 이전됐다면 사업이 유지되고 단지 운영 주체만 바뀐 정황이라, 통상해고가 아닌 정리해고 4요건 적용 영역으로 평가될 여지가 있습니다.',
      },
      {
        question: '동료는 다른 부서로 옮겨갔는데 저만 해고됐어요',
        answer:
          '<strong>해고회피 노력 부재 + 형평성 결여 정황으로 강한 다툼 자료입니다.</strong> 회사가 본인에게도 배치전환을 제안했는지, 검토했는지가 핵심 입증 부담 영역.',
      },
      {
        question: '회사가 "성과 차이로 본인을 선정했다"고 합니다',
        answer:
          '<strong>합리적·공정한 기준 다툼 트랙입니다.</strong> 평가의 객관성·기준의 사전 공지·동일 기준 적용을 회사가 입증해야 하는 영역으로 검토할 수 있습니다.',
      },
      {
        question: '해고 후 같은 부서에 신규 채용이 됐어요',
        answer:
          '<strong>사업폐지 부재의 강력한 정황 자료입니다.</strong> 채용공고 캡처·LinkedIn 자료를 즉시 보존하고 노동위에 제출하면 다툼 트랙이 강화되는 영역.',
      },
      {
        question: '5인 미만 사업장인데 직무폐지 해고됐어요',
        answer:
          '<strong>5인 미만은 노동위 부당해고 구제 트랙이 제한됩니다.</strong> 다만 민사 해고무효확인 + 해고예고 30일분 통상임금은 별도 가능한 영역.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '인수합병 직무폐지 해고', href: '/guide/dismissal/dismissal-company-merger-position-elimination' },
      { label: '구조조정 우선재고용권', href: '/guide/dismissal/dismissal-restructuring-recall-priority-rights' },
      { label: '경영상 해고 4요건', href: '/guide/dismissal/dismissal-restructuring-position-elimination' },
      { label: '직무전환 거부 후 해고', href: '/guide/dismissal/dismissal-relocation-refused-then-fired' },
      { label: '비등기임원 해임 근로자성', href: '/guide/dismissal/dismissal-shareholder-resolution-removal-employee' },
    ],
  },
];
