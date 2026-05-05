import { SpokePage } from '../spoke-pages';

// batch56 retirement 2개
//
// 고유 존재 이유:
// 1. 이 페이지는 정년 직전 회사가 대기발령으로 본인 임금을 깎은 뒤 정년퇴직시킨 근로자가 평균임금 산정 시 대기발령 기간 임금 영향 + 평균임금 결정 특례 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 부장에서 임원으로 승진 후 1년 미만 근속 후 사임한 근로자가 임원 퇴직금 지급규정과 근로자 퇴직금 차등 + 주주총회 의결 절차 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56Retire: SpokePage[] = [
  // ─── 1. retirement / retirement-pre-retirement-standby-period-impact ───
  {
    domain: 'retirement',
    slug: 'retirement-pre-retirement-standby-period-impact',
    keyword: '정년 직전 대기발령 평균임금 영향',
    questionKeyword: '정년 6개월 전 대기발령으로 임금이 깎였어요. 퇴직금이 그대로 줄어드나요?',
    ctaKeyword: '정년 직전 대기발령 평균임금 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '정년 직전 대기발령 — 평균임금·퇴직금 4가지 영향 | 로앤가이드',
      description:
        '정년 직전 대기발령으로 임금이 깎였다면 평균임금 산정 + 특례 적용 + 퇴직금 차액 청구 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30년 근무한 회사에서 정년 6개월을 앞두고 \'대기발령\'이라며 사실상 직무를 박탈당했어요. 시간외수당·직책수당이 다 빠지고 본봉만 들어와서 월급이 60% 수준으로 떨어졌습니다. 이 상태로 정년퇴직하면 퇴직금이 30년치가 아니라 6개월치 평균임금 기준으로 계산되는 거 아닌가요?" 퇴직금은 \'평균임금\'(퇴직 전 3개월 임금 ÷ 일수, 근로기준법 제2조 제6호) 기준으로 산정되는데, 대법원 2001다12669 판결은 정년 직전 대기발령 기간 임금이 통상보다 현저히 적거나 많아 평균임금이 비정상이 된 경우 산정 특례를 적용하거나 정상 임금 기간을 기준으로 평균임금을 산정해야 한다고 판시했습니다. 대기발령으로 부당하게 깎인 평균임금을 그대로 적용한 퇴직금 산정은 다툴 수 있는 영역으로 검토할 수 있어요.</p>',
    sections: [
      {
        title: 'Q. 정년 직전 대기발령 평균임금 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 대기발령 정당성·임금 비정상성·평균임금 특례·취업규칙 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대기발령 자체의 정당성</strong> — 대기발령이 인사권 남용·부당해고 회피 수단이었는지. 정당사유 없이 정년 직전 대기발령은 인사권 남용 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>② 평균임금 비정상성 (대법원 2001다12669)</strong> — 대기발령 기간 임금이 통상의 60% 등 현저히 적은 경우 평균임금 산정 특례 검토. 본인에게 부당하게 적은 평균임금이 산정되면 안 되는 영역.</li>\n<li><strong>③ 평균임금 산정 특례 적용</strong> — 근로기준법 시행령 제2조 + 평균임금 산정 특례 고시에 따라 노동부 장관이 정한 방식으로 평균임금 결정. 회사 임의 산정이 아닌 영역.</li>\n<li><strong>④ 취업규칙·급여규정 (정년 대기 보장)</strong> — 일부 회사 급여규정에서 정년 대기 기간 급여 전액 보장을 명시한 경우 그 규정 적용. 대법원 2001다12669는 이런 규정이 있다면 시간외수당 부분도 평균임금에 산입되는 사례를 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 평균임금이 통상보다 현저히 적은 정황은 \'평균임금 산정 특례\' 트랙으로 정상 임금 기간 평균임금을 적용할 수 있는 영역. 대기발령 직전 3개월 임금 기준으로 산정 다툼 가능성 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 평균임금 정정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 차액 산정 → 노동청 진정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금자료 보존 (즉시)</strong> — 대기발령 통보·발령 전후 급여명세서·근로계약서·취업규칙·급여규정.</li>\n<li><strong>2단계 — 평균임금 비교 산정 (1~2주)</strong> — 대기발령 직전 3개월 vs 대기발령 후 3개월 평균임금 비교. 차이가 30% 이상이면 비정상 다툼 영역.</li>\n<li><strong>3단계 — 회사에 평균임금 정정·차액 지급 요구 (내용증명)</strong> — 평균임금 산정 특례 적용 + 퇴직금 차액 합산 청구.</li>\n<li><strong>4단계 — 노동청 임금체불 진정 (labor.moel.go.kr)</strong> — 회사 미응답 시 사업장 관할 고용노동지청 진정. 시정명령 트랙.</li>\n<li><strong>5단계 — 민사 퇴직금 청구 (지급명령·소액심판)</strong> — 노동청 트랙이 한계인 사안은 민사. 청구액 무관 지급명령 가능, 3,000만원 이하면 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정년 직전 대기발령 평균임금 영향을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 대기발령 자료 + 평균임금 비교 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>대기발령 통보서·인사발령서</strong> — 발령 시점·사유·기간.</li>\n<li><strong>대기발령 전 3개월 + 발령 후 3개월 급여명세서</strong> — 평균임금 비교 핵심.</li>\n<li><strong>근로계약서·취업규칙·급여규정</strong> — 대기 기간 급여 보장 명문 규정.</li>\n<li><strong>퇴직금 산정 명세서</strong> — 회사가 적용한 평균임금·근속연수.</li>\n<li><strong>최근 3년 급여 이력</strong> — 통상 임금 수준 입증.</li>\n<li><strong>정년·퇴직 정황 자료</strong> — 정년 시점·퇴직금 지급일.</li>\n<li><strong>노동부 평균임금 산정 특례 고시</strong> — 법적 근거 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대기발령 통보서에 \'직무 박탈 사유\'가 명확히 기재되지 않았다면 인사권 남용 다툼 트랙도 결합 가능한 영역입니다. 사유 부재 정황은 별도 다툼 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"근로기준법대로 직전 3개월로 산정했다" 주장 반박</strong> — 단순 산식이 아니라 평균임금이 비정상이면 산정 특례 적용 영역(2001다12669). 직전 3개월이 비정상이면 정상 기간 평균임금 적용 트랙.</li>\n<li><strong>"대기발령은 정당했다" 주장 반박</strong> — 대기발령 자체가 인사권 남용이면 그 기간 임금 감소도 부당. 대기발령 정당성 다툼이 결합되는 영역.</li>\n<li><strong>"본인 동의로 무급 대기" 주장 반박</strong> — 동의서 부재 + 일방 시행이라면 동의 추정 어려움. 사후 조치 정당성 다툼 영역.</li>\n<li><strong>퇴직금 시효 3년</strong> — 미지급 퇴직금은 3년 시효(근로자퇴직급여보장법). 시효 내 빠른 청구가 안전.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 퇴직금·평균임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불·퇴직금 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 평균임금 산정 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 대기발령 기간의 평균임금 산정',
        summary:
          '대법원 2001다12669 사건(대법원, 2003.07.25 선고)에서 법원은 정년퇴직 전 대기발령 기간의 일수와 그 기간 중 지급받은 임금액이 평균임금 산정 기초에 포함되는지 다툰 사안에서, 정년 대기발령 기간 임금을 포함시켜 산정한 평균임금이 통상보다 현저하게 적거나 많은 경우 그 산정 방법을 별도로 검토해야 한다고 판시했습니다. 또한 시간외 근무수당을 받아오던 근로자가 정년 대기발령으로 시간외 수당을 받지 못했더라도 급여규정에 정년 대기 기간 급여 전액 지급이 명시돼 있다면 시간외 수당도 평균임금 산입 대상이라고 본 사례입니다.',
        takeaway: '정년 직전 대기발령 평균임금이 비정상이라면 평균임금 산정 특례 트랙으로 정상 임금 기간을 기준 적용하는 검토가 가능한 영역으로, 대기발령 통보서·급여명세서·취업규칙을 정리하면 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '대기발령 기간이 3개월 미만이면 영향 없나요?',
        answer:
          '<strong>대기발령 기간 일부만 평균임금 기간에 포함돼도 비정상성 다툼 가능합니다.</strong> 예를 들어 대기발령 1개월 + 정상 2개월이라면 그 1개월 영향 부분에 대해 산정 특례 검토 가능한 영역.',
      },
      {
        question: '회사 취업규칙에 \'대기 기간 급여는 본봉만\'이라고 되어 있어요',
        answer:
          '<strong>취업규칙 자체의 적법성도 다툼 영역입니다.</strong> 대기발령 자체가 부당하면 그 규정 적용도 부당. 대기발령 정당성 + 취업규칙 합리성 결합 다툼 가능한 영역.',
      },
      {
        question: '대기발령 동안 무급이었어요. 다툼 가능한가요?',
        answer:
          '<strong>무급 대기는 임금 미지급 + 평균임금 비정상 결합 다툼 영역입니다.</strong> 정당사유 없는 무급 대기는 임금체불 + 부당한 인사권 행사 다툼 트랙으로 검토할 수 있습니다.',
      },
      {
        question: '퇴직금을 이미 수령했는데 차액 청구 가능한가요?',
        answer:
          '<strong>3년 시효 내라면 가능합니다.</strong> 수령 자체가 차액 청구를 봉쇄하지 않는 영역. 다만 \'추가 청구 포기\' 합의서에 서명했다면 합의 효력 다툼이 결합되는 영역으로 검토 필요.',
      },
      {
        question: '대기발령 거부했더니 해고됐어요',
        answer:
          '<strong>부당해고 + 평균임금 다툼 결합 트랙입니다.</strong> 노동위 부당해고 구제(해고일 3개월 내) + 퇴직금 차액 청구 동시 진행 가능한 영역으로 검토할 수 있습니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '징계해고 후 퇴직금', href: '/guide/retirement/retirement-disciplinary-fired-pay' },
      { label: '퇴직금 계산식 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '정년 후 재고용 거절 영향', href: '/guide/retirement/retirement-post-retirement-rehire-rights' },
      { label: '근속 30년 퇴직금 산정', href: '/guide/retirement/retirement-comprehensive-calculation-formula' },
    ],
  },

  // ─── 2. retirement / retirement-short-term-executive-1year-claim ───
  {
    domain: 'retirement',
    slug: 'retirement-short-term-executive-1year-claim',
    keyword: '1년 미만 임원 퇴직금 청구',
    questionKeyword: '부장에서 임원으로 승진한 지 8개월 만에 사임했어요. 부장 시절 30년 근속이 임원 퇴직금에 합산되나요?',
    ctaKeyword: '단기 임원 퇴직금 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '1년 미만 임원 퇴직금 — 4가지 산정 다툼 | 로앤가이드',
      description:
        '부장에서 임원으로 승진 후 1년 미만 사임 시 임원 퇴직금 지급규정 + 근로자 퇴직금 차등 + 근속 합산 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부장으로 30년 근무하다가 작년에 \'전무\'로 승진했는데 8개월 만에 사임했어요. 회사는 \'임원이라 임원 퇴직금 규정 따로 적용, 8개월치만 산정한다\'며 평소의 1/3 수준 금액을 제시합니다. 30년 근속이 사라지는 게 맞나요?" 임원 퇴직금은 상법 제388조에 따라 회사 정관·주주총회 결의로 정해지지만, 대법원 2011가합7202·2012다98720 판결은 임원이 근로기준법상 근로자에 해당하는지에 따라 산정 트랙이 달라진다고 봤어요. 비등기임원·실질 종속관계가 인정되는 임원은 근로자성 인정 영역으로, 그 경우 부장 시절 근속이 임원 시기와 합산될 가능성이 있고, 등기임원이라도 정관·임원 퇴직금 규정 적용 시 부장 시절 근속이 별도 정산되는 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단기 임원 퇴직금 4가지 산정 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성·근속 합산·정관 규정·주주총회 결의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임원의 근로자성 (대법원 2012다10959)</strong> — 비등기임원·실질 종속관계 임원이라면 근로자로 평가될 여지가 있어 근로자 퇴직금 규정 적용 + 부장 시절 근속 합산 가능 영역.</li>\n<li><strong>② 부장 시절 퇴직금 별도 정산</strong> — 임원 승진 시 부장 시절 퇴직금을 중간정산했다면 그 부분은 별도. 중간정산이 없었다면 통산 산정 다툼 영역.</li>\n<li><strong>③ 정관·임원 퇴직금 규정 (상법 제388조)</strong> — 회사 정관에 임원 퇴직금 산정 방식이 명시돼 있는지. 명시되지 않았다면 주주총회 결의가 필요한 영역(대법원 2012다98720).</li>\n<li><strong>④ 주주총회 결의 누락</strong> — 임원 퇴직금에 대한 주주총회 결의 없이 회사 임의 산정 시 청구권 다툼 가능한 영역. 결의서 부재 정황은 다툼 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임원 직함이 있어도 등기 여부·실질 종속관계에 따라 적용 트랙이 갈립니다. 비등기임원이면 근로자성 인정 트랙으로 부장 시절 근속 합산 가능성 검토, 등기임원이면 정관·주주총회 결의 트랙 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임원 퇴직금 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 근로자성 검토 → 회사 청구 → 노동청·민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 임원 위촉장·등기부등본·정관·주주총회 결의서·임원 퇴직금 규정·부장 시절 중간정산 정황·급여명세서.</li>\n<li><strong>2단계 — 근로자성 검토 (1~2주)</strong> — 임원이라도 실질 종속관계가 있다면 근로자성 인정 다툼 트랙. 출퇴근·업무지시·4대보험 정황 정리.</li>\n<li><strong>3단계 — 회사 퇴직금 정산 요구 (내용증명)</strong> — 부장 근속 합산 또는 별도 정산 금액의 차액 청구.</li>\n<li><strong>4단계 — 노동청 진정 또는 민사 청구</strong> — 근로자성 인정 시 노동청 임금체불 진정. 등기임원·근로자성 부정 시 민사 임원 퇴직금 청구.</li>\n<li><strong>5단계 — 시효 관리</strong> — 근로자성 인정 시 3년 시효(근로자퇴직급여보장법). 임원 퇴직금은 일반 채권 10년 시효 영역이 다수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단기 임원 퇴직금 4가지 산정 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임원 자료 + 근속 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임원 위촉장·이사회 의사록</strong> — 임원 신분 시작 시점.</li>\n<li><strong>등기부등본 (회사)</strong> — 등기임원 vs 비등기임원 확인 핵심.</li>\n<li><strong>정관·임원 퇴직금 규정</strong> — 산정 방식 명문 규정.</li>\n<li><strong>주주총회 의사록·결의서</strong> — 임원 퇴직금 결의 여부.</li>\n<li><strong>부장 시절 근속·중간정산 정황</strong> — 통산 산정 다툼 자료.</li>\n<li><strong>급여명세서·근로계약서</strong> — 임금 vs 위임보수 구분.</li>\n<li><strong>4대보험 가입증명</strong> — 근로자성 입증.</li>\n<li><strong>업무지시 이메일·회의록</strong> — 종속성 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부장→임원 승진 시 \'중간정산\'을 받았는지가 결정적. 중간정산이 없었다면 부장 근속이 살아있어 합산 청구 다툼 영역으로 가능성이 큰 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"임원이라 근로기준법 적용 안 된다" 주장 반박</strong> — 등기 여부·실질 종속관계 검토 영역. 비등기임원이라면 근로자성 인정 트랙 다툼 가능성 큰 영역.</li>\n<li><strong>"부장 시절 퇴직금은 임원 승진으로 사라졌다" 주장 반박</strong> — 중간정산 없이 임원 승진했다면 근속이 살아있는 사례가 있어 합산 다툼 가능 영역.</li>\n<li><strong>"임원 퇴직금 규정대로 산정했다" 주장 반박</strong> — 규정의 합리성·주주총회 결의 정당성 다툼 가능. 결의 누락 시 임원 퇴직금 청구권 자체 다툼 영역(2012다98720).</li>\n<li><strong>"본인이 사임했으니 정산 끝" 주장 반박</strong> — 사임으로 임원 신분 종료돼도 그 시점 평균임금 기준 퇴직금 산정 의무는 별도 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 퇴직금·근로자성 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불·퇴직금 진정 트랙(근로자성 인정 시).</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 임원 퇴직금 산정 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임원 퇴직금 청구의 주주총회 결의 요건',
        summary:
          '대법원 2012다98720 사건(대법원, 2014.05.29 선고)에서 법원은 주식회사의 대표이사가 근로기준법상 근로자에 해당하는지(원칙적 소극)와 별도로, 상법 제388조의 이사 보수에는 퇴직금·퇴직위로금이 포함되며, 정관에 \'주주총회의 결의로 정한다\'고 규정한 경우 주주총회 결의 없이 임원 퇴직금을 청구할 수 없다고 판시했습니다. 다만 임기 만료 전 이사 해임에 관한 상법 제385조 제1항의 \'정당한 이유\'가 부재하면 손해배상 청구가 가능합니다.',
        takeaway: '임원 퇴직금은 회사 정관·주주총회 결의 요건 충족이 핵심이라, 정관·결의서 자료를 확보하면 임원 퇴직금 청구권 + 부장 근속 합산 다툼 트랙이 열리는 사례가 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '비등기임원이면 무조건 근로자로 인정되나요?',
        answer:
          '<strong>비등기임원도 실질 판단 영역입니다.</strong> 업무 독자성·종속관계·보수 성격 종합 검토. 비등기임원이라도 사실상 부서장 역할이면 근로자성 인정 가능성이 큰 사례가 있는 영역.',
      },
      {
        question: '부장 시절 퇴직금을 \'중간정산\'으로 받았어요',
        answer:
          '<strong>중간정산을 받았다면 부장 근속은 임원 시기에 합산되지 않는 영역이 일반적입니다.</strong> 임원 8개월만으로 산정되는 사례가 많아, 중간정산 정당성 + 임원 퇴직금 규정 적용이 핵심 검토 영역.',
      },
      {
        question: '주주총회 결의서가 없는 회사에서 임원이었어요',
        answer:
          '<strong>주주총회 결의 부재 시 임원 퇴직금 청구권 자체에 다툼이 발생합니다(2012다98720).</strong> 다만 근로자성 인정 트랙이 결합되면 근로자 퇴직금 규정 적용 영역으로 청구 가능 사례가 있습니다.',
      },
      {
        question: '임기 만료 전 해임됐어요',
        answer:
          '<strong>상법 제385조 정당한 이유 없는 해임 손해배상 청구 트랙이 열립니다.</strong> 잔여 임기 동안 받을 보수 상당액 청구. 퇴직금과 별개의 영역으로 검토 가능.',
      },
      {
        question: '임원 퇴직금 시효는 얼마인가요?',
        answer:
          '<strong>근로자성 인정 시 3년(근퇴법), 등기임원 임원 퇴직금은 일반 채권 10년 영역.</strong> 어느 트랙으로 청구할지에 따라 시효가 갈리므로 빠른 검토가 안전합니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '임원 퇴직금 한도 초과 세무', href: '/guide/retirement/retirement-executive-cap-excess-tax-treatment' },
      { label: '임원 vs 근로자 분쟁', href: '/guide/retirement/retirement-officer-vs-employee-dispute-back' },
      { label: '임원 승진 후 근속 통산', href: '/guide/retirement/retirement-director-promotion-continuous-service' },
      { label: '임원 퇴직금 한도 규정', href: '/guide/retirement/retirement-executive-severance-limit' },
      { label: '정년 직전 대기발령 평균임금', href: '/guide/retirement/retirement-pre-retirement-standby-period-impact' },
    ],
  },
];
