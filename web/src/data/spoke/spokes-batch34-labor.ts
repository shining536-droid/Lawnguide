import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 3개 + 퇴직금 2개 + 임금체불 2개 + 해고 2개 (batch34)
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 이 페이지는 [장애를 가진 근로자]의 [실업 후 특례 적용 여부를 모르는 상황]에서 [장애인 실업급여 특례 요건과 연장급여 안내]를 돕는 페이지다.
// 2. 이 페이지는 [두 곳 이상에서 시간제로 일하는 근로자]의 [어느 사업장 기준으로 수급하는지 모르는 상황]에서 [시간제·겸직 근로자 고용보험 합산과 수급 조건 안내]를 돕는 페이지다.
// 3. 이 페이지는 [실업급여 신청이 거부된 근로자]의 [이의신청 절차와 준비서류를 모르는 상황]에서 [심사청구부터 행정소송까지 3단계 불복 절차 안내]를 돕는 페이지다.
// 4. 이 페이지는 [회사가 합병/분할된 근로자]의 [퇴직금 지급 주체가 누구인지 모르는 상황]에서 [합병·분할 유형별 퇴직금 승계 법리 안내]를 돕는 페이지다.
// 5. 이 페이지는 [야간·연장근로를 했던 퇴직 근로자]의 [해당 수당이 평균임금에 포함되는지 모르는 상황]에서 [야간·연장수당 포함 여부 판단과 퇴직금 재계산 방법 안내]를 돕는 페이지다.
// 6. 이 페이지는 [서면 계약 없이 구두로 일한 근로자]의 [증거 부족으로 신고를 망설이는 상황]에서 [구두계약 입증 방법과 체불 신고 절차 안내]를 돕는 페이지다.
// 7. 이 페이지는 [수습기간 최저임금 미달 급여를 받는 근로자]의 [감액이 적법한지 모르는 상황]에서 [수습 최저임금 감액 요건과 위반 시 구제 절차 안내]를 돕는 페이지다.
// 8. 이 페이지는 [군 복무를 마치고 복직하려는 근로자]의 [회사가 복직을 거부하는 상황]에서 [병역법상 복직 보장 의무와 부당해고 구제 절차 안내]를 돕는 페이지다.
// 9. 이 페이지는 [수습기간이 반복 연장된 근로자]의 [이것이 정당한지 판단이 안 되는 상황]에서 [수습 연장의 적법 요건과 부당해고 구제 방법 안내]를 돕는 페이지다.

export const spokesBatch34Labor: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. unemployment / unemployment-disability-worker-special-eligibility
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'unemployment-disability-worker-special-eligibility',
    keyword: '장애인 근로자 실업급여 특례 요건 수급 절차',
    questionKeyword: '장애인 근로자가 실업급여를 받을 때 특례가 적용되나요?',
    ctaKeyword: '장애인 실업급여 특례 상담',
    type: '특례형',
    perspective: 'victim',
    meta: {
      title: '장애인 근로자 실업급여 특례 3가지 | 로앤가이드',
      description:
        '장애를 가진 근로자가 실직 후 실업급여 특례 적용 여부를 모르겠다면 수급 요건과 연장급여 조건을 지금 확인하세요',
    },
    intro:
      '<p>5년간 근무하던 회사에서 권고사직을 받았습니다. 장애인으로 등록되어 있는데, 실업급여를 신청할 때 일반 근로자와 다른 특례가 있다는 이야기를 들었습니다. 구직활동이 더 어려운 상황에서 수급 기간이 더 길어지는지, 취업촉진수당은 어떤 조건에서 받을 수 있는지 정확히 모릅니다. 장애인 근로자에게 적용되는 실업급여 특례 요건을 확인해보세요.</p>',
    sections: [
      {
        title: '장애인 근로자 실업급여 기본 수급 요건',
        content:
          '<p><strong style="color:#1e3a5f">장애인 근로자도 고용보험 피보험기간 180일 이상, 비자발적 이직, 재취업 의사와 능력이 있어야 실업급여를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험기간 요건</strong> — 이직일 전 18개월 내 180일 이상 고용보험에 가입되어 있어야 합니다. 장애인 근로자가 단시간 근로(주 15시간 미만)를 한 경우에도 3개월 이상 계속 근로했다면 피보험자격이 유지됩니다</li>\n<li><strong>이직 사유 요건</strong> — 비자발적 이직(권고사직, 계약 만료, 경영상 해고 등)이어야 합니다. 장애 악화로 인한 퇴직은 정당한 이직 사유로 인정되며, 직장 내 장애인 차별로 인한 자진 퇴사도 정당한 사유에 해당할 수 있습니다</li>\n<li><strong>구직활동 능력</strong> — 근로 의사와 능력이 있어야 합니다. 다만 장애 유형에 따라 구직활동 방법을 조정받을 수 있으며, 장애인고용공단 등록만으로도 구직 노력으로 인정됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 장애인복지법상 등록 장애인이 아니더라도 산재 장해등급 판정을 받은 근로자 역시 일부 특례 적용 대상이 될 수 있습니다</blockquote>',
      },
      {
        title: '장애인 근로자에게 적용되는 3가지 수급 특례',
        content:
          '<p><strong style="color:#1e3a5f">장애인 근로자는 수급 기간 연장, 개별연장급여, 직업능력개발훈련 확대 등 3가지 특례를 활용할 수 있습니다.</strong></p>\n<ol>\n<li><strong>소정급여일수 우대</strong> — 고용보험법 제50조에 따라 소정급여일수는 피보험기간과 연령에 따라 120~270일입니다. 장애인 근로자는 50세 이상 근로자와 동일하게 우대 적용을 받아, 같은 피보험기간에서도 일반 근로자보다 30~60일 더 긴 수급 기간이 적용됩니다</li>\n<li><strong>개별연장급여 신청</strong> — 소정급여일수가 끝나도 재취업이 어려운 경우, 고용보험법 제52조에 따라 개별연장급여를 신청하면 최대 60일 추가 수급이 가능합니다. 장애인 근로자는 취업 곤란 사유 입증이 상대적으로 용이합니다</li>\n<li><strong>직업능력개발수당</strong> — 장애인 구직자가 직업능력개발훈련을 받으면 훈련연장급여(최대 2년)와 함께 훈련수당이 지급됩니다. 한국장애인고용공단에서 운영하는 직업훈련 과정 참여 시 추가 지원도 받을 수 있습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 장애 유형별 수급 특례를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '장애인 실업급여 신청 시 필요한 서류와 절차',
        content:
          '<p><strong style="color:#1e3a5f">일반 실업급여 서류에 추가로 장애인증명서, 장애 관련 퇴직 사유 소명서류를 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>기본 서류</strong> — 이직확인서, 수급자격인정신청서, 신분증, 통장사본은 일반 근로자와 동일합니다</li>\n<li><strong>장애인 추가 서류</strong> — 장애인복지카드 또는 장애인등록증, 장애 정도 심사 결과 통지서를 지참합니다. 장애 악화로 퇴직한 경우 진단서도 첨부합니다</li>\n<li><strong>신청 절차</strong> — 고용센터 방문 → 수급자격 인정 신청 → 1~4주차 실업인정일 지정 → 2주마다 구직활동 보고 → 급여 지급 순서로 진행됩니다</li>\n<li><strong>온라인 대체</strong> — 거동이 불편한 장애인 근로자는 고용24 홈페이지를 통한 온라인 신청과 영상 실업인정이 가능합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 장애인고용공단 취업지원 프로그램 참여는 구직활동으로 인정되므로, 별도의 입사 지원 실적이 없어도 실업인정을 받을 수 있습니다</blockquote>',
      },
      {
        title: '장애인 재취업 지원 제도 병행 활용',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 수급과 병행하여 장애인 고용 지원 제도를 활용하면 재취업 성공률을 높일 수 있습니다.</strong></p>\n<ul>\n<li><strong>장애인고용공단 취업 알선</strong> — 한국장애인고용공단에 구직 등록을 하면 장애 유형에 맞는 일자리를 알선받을 수 있습니다. 공단 등록 자체가 구직활동으로 인정됩니다</li>\n<li><strong>장애인 의무고용 사업장</strong> — 상시 50인 이상 사업장은 장애인 의무고용 비율(민간 3.1%, 공공 3.6%)을 준수해야 합니다. 장애인고용공단에서 의무고용 사업장 목록을 확인할 수 있습니다</li>\n<li><strong>보조공학기기 지원</strong> — 재취업 시 장애 유형에 맞는 보조공학기기(화면확대기, 보청기, 특수 키보드 등)를 무상 대여받을 수 있습니다</li>\n<li><strong>근로지원인 서비스</strong> — 중증장애인이 취업하면 업무 보조인(근로지원인)을 월 160시간까지 지원받을 수 있어 고용 유지에 도움이 됩니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입신청기간 제한과 수급자격',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 별정직·임기제 공무원의 고용보험 가입신청기간을 3개월로 제한한 구 고용보험법 시행령 조항에 대해, 가입신청기간이 경과하면 해당 임용기간에 대한 고용보험 피보험자격을 취득할 수 없다고 판시했습니다.',
        takeaway:
          '고용보험 가입 시기를 놓치면 피보험기간에 산입되지 않아 실업급여 수급에 불이익이 생길 수 있습니다. 장애인 근로자도 입사 후 고용보험 피보험자격 취득 여부를 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '장애 악화로 스스로 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '<strong>장애 악화로 근로가 불가능해져 퇴사한 경우 정당한 이직 사유로 인정됩니다.</strong> 고용보험법 시행규칙 별표2에 따라 본인의 질병·부상으로 계속 근무가 어려운 경우는 비자발적 이직과 동일하게 취급됩니다. 다만 장애 악화를 증명하는 의사 진단서를 반드시 첨부해야 합니다.',
      },
      {
        question: '장애인 근로자의 소정급여일수는 구체적으로 얼마나 더 긴가요?',
        answer:
          '<strong>장애인 근로자는 50세 이상 근로자와 동일한 소정급여일수를 적용받습니다.</strong> 예를 들어 피보험기간 3~5년인 30세 일반 근로자는 150일이지만, 같은 조건의 장애인 근로자는 180일을 받습니다. 피보험기간 10년 이상이면 최대 270일까지 수급할 수 있습니다.',
      },
      {
        question: '중증장애인도 구직활동 보고를 매번 해야 하나요?',
        answer:
          '<strong>구직활동 보고 의무는 있지만 인정 범위가 넓습니다.</strong> 장애인고용공단 상담, 직업능력평가, 직업재활 프로그램 참여가 모두 구직활동으로 인정됩니다. 거동이 불편한 경우 영상 실업인정도 가능합니다.',
      },
      {
        question: '장애인 실업급여와 장애인연금을 동시에 받을 수 있나요?',
        answer:
          '<strong>장애인연금과 실업급여는 별개의 제도이므로 동시 수급이 가능합니다.</strong> 장애인연금은 소득·재산 기준에 따라 지급되고, 실업급여는 고용보험 기반이므로 수급 요건이 다릅니다. 다만 실업급여가 소득으로 산정되면 장애인연금 수급액에 영향을 줄 수 있으니 확인이 필요합니다.',
      },
      {
        question: '산재 장해등급 판정만 받아도 장애인 특례가 적용되나요?',
        answer:
          '<strong>장애인복지법상 등록 장애인에게 적용되는 특례가 원칙입니다.</strong> 산재 장해등급만으로는 고용보험법상 장애인 특례가 자동 적용되지 않습니다. 다만 산재 장해가 장애인복지법 기준에 해당하면 장애 등록 후 특례를 적용받을 수 있으므로, 장애 등록 절차를 병행하는 것이 유리합니다.',
      },
    ],
    cta: {
      text: '장애인 실업급여 특례, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 전체 절차 가이드', href: '/guide/unemployment/unemployment-full-process' },
      { label: '자발적 퇴사 실업급여 수급 조건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 부정수급 제재 안내', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 신청부터 지급까지 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '권고사직 실업급여 안내', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. unemployment / unemployment-part-time-dual-job-combined-benefit
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'unemployment-part-time-dual-job-combined-benefit',
    keyword: '시간제 겸직 근로자 실업급여 수급 조건',
    questionKeyword: '두 곳에서 시간제로 일할 때 실업급여는 어떻게 받나요?',
    ctaKeyword: '시간제 겸직 실업급여 조건 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '시간제·겸직 근로자 실업급여 수급 4가지 조건 | 로앤가이드',
      description:
        '두 곳에서 시간제로 일하다가 한 곳을 잃었는데 실업급여 대상인지 모르겠다면 합산 기준과 수급 조건을 지금 확인하세요',
    },
    intro:
      '<p>오전에는 A편의점, 오후에는 B카페에서 시간제로 일하고 있었는데 A편의점이 폐업했습니다. B카페 근무는 계속하고 있지만, 실업급여를 받을 수 있는지 모릅니다. 두 곳의 고용보험을 합산할 수 있는지, 한 곳만 이직해도 수급 자격이 되는지 헷갈립니다. 시간제·겸직 근로자의 실업급여 수급 조건을 확인해보세요.</p>',
    sections: [
      {
        title: '시간제 근로자 고용보험 가입 기준과 합산 원칙',
        content:
          '<p><strong style="color:#1e3a5f">주 15시간 이상 근로하는 시간제 근로자는 각 사업장별로 고용보험에 가입되며, 피보험기간은 합산됩니다.</strong></p>\n<ul>\n<li><strong>가입 기준</strong> — 각 사업장에서 주 소정근로시간이 15시간 이상(월 60시간 이상)이면 고용보험 당연가입 대상입니다. 3개월 이상 계속 근로하는 경우 주 15시간 미만이어도 가입됩니다</li>\n<li><strong>피보험기간 합산</strong> — 복수 사업장에서 고용보험에 가입되어 있다면 각 사업장의 피보험기간이 합산됩니다. 합산 피보험기간이 180일 이상이어야 수급 자격이 생깁니다</li>\n<li><strong>겸직 시 이중가입</strong> — 두 곳 이상에서 동시에 고용보험에 가입할 수 있습니다. 각 사업장에서 보험료를 별도로 납부하며, 피보험기간은 중복 산정되지 않고 합산됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: "한 곳에서 주 10시간 + 다른 곳에서 주 10시간 = 합산 20시간"이 아닙니다. 각 사업장별로 15시간 이상이어야 각각 고용보험에 가입됩니다</blockquote>',
      },
      {
        title: '겸직 중 한 곳에서 이직할 때 실업급여 수급 조건',
        content:
          '<p><strong style="color:#1e3a5f">겸직 중 한 곳에서 비자발적으로 이직하면 나머지 사업장 근로 여부에 관계없이 실업급여를 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>기본 원칙</strong> — 이직한 사업장의 이직 사유가 비자발적이고, 합산 피보험기간이 180일 이상이면 수급 자격이 됩니다</li>\n<li><strong>잔여 근로 시 감액</strong> — 다른 사업장에서 계속 근로하는 경우, 해당 사업장에서의 소득에 따라 실업급여가 감액될 수 있습니다. 1일 소정근로시간이 줄어든 비율만큼 구직급여일액이 조정됩니다</li>\n<li><strong>주 15시간 미만 잔여 근로</strong> — 나머지 사업장에서 주 15시간 미만으로 근로하는 경우에는 취업으로 보지 않아 구직급여가 감액 없이 지급될 수 있습니다</li>\n<li><strong>기준 임금 산정</strong> — 구직급여 일액은 이직한 사업장의 평균임금을 기준으로 산정합니다. 겸직 사업장의 임금은 포함되지 않습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 겸직 상황별 수급 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '시간제 근로자 실업급여 금액 계산 방법',
        content:
          '<p><strong style="color:#1e3a5f">시간제 근로자의 구직급여일액은 이직 전 3개월 평균임금의 60%이며, 상한액과 하한액이 적용됩니다.</strong></p>\n<ul>\n<li><strong>일액 계산</strong> — 이직한 사업장에서 퇴직 전 3개월간 받은 임금 총액 ÷ 퇴직 전 3개월 총 일수 = 1일 평균임금. 구직급여일액 = 1일 평균임금 × 60%입니다</li>\n<li><strong>상한액</strong> — 2024년 기준 1일 66,000원이 상한입니다. 시간제 근로자의 경우 상한에 도달하는 경우는 드뭅니다</li>\n<li><strong>하한액</strong> — 1일 구직급여 하한액은 최저임금의 80% × 1일 소정근로시간으로 계산합니다. 시간제 근로자는 소정근로시간이 짧으므로 하한액이 낮아질 수 있습니다</li>\n<li><strong>계산 예시</strong> — 주 20시간(월 87시간), 시급 10,000원으로 일하다 이직한 경우: 월 평균임금 약 87만 원 → 일 평균임금 약 29,000원 → 구직급여일액 약 17,400원</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 겸직 사업장의 임금을 합산하여 구직급여를 계산하는 것이 아닙니다. 이직한 사업장의 임금만 기준이 됩니다</blockquote>',
      },
      {
        title: '시간제 근로자가 놓치기 쉬운 4가지 실수',
        content:
          '<p><strong style="color:#1e3a5f">시간제 근로자는 고용보험 미가입, 이직확인서 미발급 등으로 수급 자격을 놓치는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>고용보험 미가입 확인</strong> — 사업주가 시간제 근로자의 고용보험을 미가입하는 경우가 빈번합니다. 고용보험 피보험자격 확인 청구(고용보험법 제17조)를 통해 소급 가입이 가능합니다</li>\n<li><strong>이직확인서 미발급</strong> — 소규모 사업장에서 이직확인서 발급을 거부하는 경우, 고용센터에 발급 요청을 하면 고용센터가 사업주에게 직접 발급을 독촉합니다</li>\n<li><strong>자발적 퇴사 처리</strong> — 계약 만료나 근로조건 변경에 의한 퇴직인데 자발적 퇴사로 처리되는 경우가 있습니다. 계약서, 근로조건 변경 통지 등 증거를 확보하세요</li>\n<li><strong>신청 기한 도과</strong> — 이직일 다음 날부터 12개월 이내에 수급자격을 인정받아야 합니다. 기한을 넘기면 수급 자격이 소멸되므로 이직 즉시 고용센터를 방문하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부서이동에 따른 임금 하락과 정당한 이직 사유',
        summary:
          '서울행정법원 2014구합2270 사건(서울행법, 2014.07.03 선고)에서 법원은 인바운드 상담원이 멀티부서로 이동 지시를 받아 퇴사한 사안에서, 부서이동으로 월 평균 임금이 46% 이상 하락하게 되는 점 등을 고려하면 정당한 이직 사유에 해당한다고 판시했습니다.',
        takeaway:
          '시간제·겸직 근로자도 근로조건의 중대한 변경(임금 감소, 근무시간 변경 등)으로 퇴사한 경우 정당한 이직 사유로 인정될 수 있습니다. 근로조건 변경 전후를 비교할 수 있는 자료를 반드시 보관하세요.',
      },
    ],
    faq: [
      {
        question: '두 곳 모두에서 동시에 이직하면 급여가 합산되나요?',
        answer:
          '<strong>두 사업장에서 동시에 이직해도 구직급여는 합산 산정되지 않습니다.</strong> 마지막으로 이직한 사업장(또는 주된 사업장)의 평균임금을 기준으로 구직급여가 산정됩니다. 다만 피보험기간은 양 사업장 모두 합산하여 소정급여일수를 결정합니다.',
      },
      {
        question: '한 곳에서만 주 15시간 이상이고 다른 곳은 주 10시간이면 어떻게 되나요?',
        answer:
          '<strong>주 15시간 이상인 사업장만 고용보험에 가입됩니다.</strong> 주 10시간 사업장은 3개월 이상 계속 근로하는 경우가 아니라면 고용보험 가입 대상이 아니므로 피보험기간에 포함되지 않습니다. 주 15시간 이상 사업장에서 이직해야 실업급여를 받을 수 있습니다.',
      },
      {
        question: '겸직 사업장에서 일하면서 구직활동도 해야 하나요?',
        answer:
          '<strong>실업급여를 받으려면 구직활동이 필요합니다.</strong> 잔여 겸직 사업장에서 일하는 것 자체는 구직활동으로 인정되지 않습니다. 별도로 실업인정일에 고용센터를 방문하고 구직활동 실적을 보고해야 합니다.',
      },
      {
        question: '시간제 근로자도 조기재취업수당을 받을 수 있나요?',
        answer:
          '<strong>소정급여일수의 1/2 이상을 남기고 재취업하면 조기재취업수당을 받을 수 있습니다.</strong> 재취업한 사업장에서 12개월 이상 계속 근무해야 하며, 시간제 재취업이어도 주 15시간 이상이면 안정적 취업으로 인정됩니다.',
      },
    ],
    cta: {
      text: '겸직 실업급여 수급 조건, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 전체 절차 가이드', href: '/guide/unemployment/unemployment-full-process' },
      { label: '자발적 퇴사 실업급여 수급 조건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 신청부터 지급까지 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '권고사직 실업급여 안내', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '실업급여 부정수급 제재 안내', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. unemployment / unemployment-wrongful-denial-appeal-procedure
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'unemployment-wrongful-denial-appeal-procedure',
    keyword: '실업급여 부지급 처분 이의신청 절차 준비',
    questionKeyword: '실업급여가 거부됐을 때 이의신청은 어떻게 하나요?',
    ctaKeyword: '실업급여 부지급 이의신청 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 부지급 이의신청 3단계 절차 | 로앤가이드',
      description:
        '실업급여 신청이 거부되어 어떻게 불복해야 할지 모르겠다면 심사청구부터 행정소송까지 3단계를 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 신청했는데 "자발적 이직에 해당한다"는 이유로 부지급 처분을 받았습니다. 사실은 사용자의 임금 삭감 때문에 퇴사했는데 근거 자료가 부족하다는 것입니다. 이대로 포기해야 하는지, 불복할 수 있는 방법이 있는지 모릅니다. 심사청구부터 재심사, 행정소송까지 3단계 불복 절차를 정리해보세요.</p>',
    sections: [
      {
        title: '1단계: 고용보험 심사청구 — 처분 통지일부터 90일 이내',
        content:
          '<p><strong style="color:#1e3a5f">부지급 처분을 받은 날부터 90일 이내에 고용보험심사관에게 심사청구를 제기할 수 있습니다.</strong></p>\n<ul>\n<li><strong>청구 대상</strong> — 수급자격 불인정, 급여 감액, 반환명령 등 고용보험에 관한 모든 처분에 대해 심사청구가 가능합니다</li>\n<li><strong>청구 기한</strong> — 처분이 있음을 안 날부터 90일 이내에 제기해야 합니다. 기한을 넘기면 각하되므로 처분 통지서를 받은 즉시 준비를 시작하세요</li>\n<li><strong>제출 서류</strong> — 심사청구서, 부지급 처분 통지서 사본, 이직 사유를 소명하는 증거(근로조건 변경 통지, 임금 삭감 내역, 사용자와의 대화 기록 등)를 첨부합니다</li>\n<li><strong>심사 기간</strong> — 심사관은 청구를 받은 날부터 50일 이내에 결정해야 합니다. 필요 시 10일 연장 가능합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 심사청구는 비용이 들지 않으며, 변호사 없이도 직접 진행할 수 있습니다. 처분 사유에 대한 반박 논리와 증거가 핵심입니다</blockquote>',
      },
      {
        title: '2단계: 고용보험 재심사청구 — 심사 결정일부터 90일 이내',
        content:
          '<p><strong style="color:#1e3a5f">심사청구가 기각되면 고용보험심사위원회에 재심사청구를 제기하여 2차 불복할 수 있습니다.</strong></p>\n<ul>\n<li><strong>청구 기한</strong> — 심사관의 결정서를 받은 날부터 90일 이내에 제기해야 합니다</li>\n<li><strong>심사 방법</strong> — 고용보험심사위원회는 서류심사 또는 구술심리를 진행합니다. 구술심리를 요청하면 직접 출석하여 사정을 설명할 수 있습니다</li>\n<li><strong>보강 증거 준비</strong> — 1단계에서 부족했던 증거를 보강합니다. 동료 진술서, 회사 내부 규정, 임금대장, 추가 대화 기록 등을 확보하세요</li>\n<li><strong>결정 기간</strong> — 재심사청구를 받은 날부터 60일 이내에 결정합니다. 부득이한 사유 시 30일 연장됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 불복 사유 정리와 증거 보강 방향을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 행정소송 — 재심사 결정일부터 90일 이내',
        content:
          '<p><strong style="color:#1e3a5f">재심사청구마저 기각되면 행정법원에 행정소송을 제기하여 사법적 구제를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>소송 요건</strong> — 재심사 결정서를 받은 날부터 90일 이내에 관할 행정법원에 취소소송을 제기합니다. 심사·재심사를 모두 거쳐야 행정소송이 가능합니다(필요적 전치주의)</li>\n<li><strong>관할 법원</strong> — 처분을 한 고용센터(직업안정기관) 소재지 관할 행정법원에 제기합니다</li>\n<li><strong>소송 비용</strong> — 인지대와 송달료가 필요합니다. 경제적 어려움이 있으면 소송구조(법률구조공단) 지원을 받을 수 있습니다</li>\n<li><strong>승소 시 효과</strong> — 법원이 부지급 처분을 취소하면 처분청은 다시 심사하여 실업급여를 지급해야 합니다. 소송 기간 중 받지 못한 급여도 소급 지급됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 행정소송에서는 처분의 위법성을 법원이 전면적으로 심사합니다. 1·2단계에서 제출하지 않은 새로운 증거도 법원에 제출할 수 있습니다</blockquote>',
      },
      {
        title: '이의신청 성공률을 높이는 5가지 준비 포인트',
        content:
          '<p><strong style="color:#1e3a5f">부지급 처분의 사유를 정확히 파악하고 그에 대한 반박 증거를 체계적으로 준비하면 인용 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>처분 사유 분석</strong> — 부지급 통지서에 기재된 거부 사유(자발적 이직, 피보험기간 부족, 구직활동 미이행 등)를 정확히 파악합니다</li>\n<li><strong>정당한 이직 사유 입증</strong> — 고용보험법 시행규칙 별표2에 열거된 정당한 이직 사유(임금 체불, 근로조건 저하, 직장 내 괴롭힘 등)에 해당하는 증거를 모읍니다</li>\n<li><strong>시간순 정리</strong> — 입사부터 퇴사까지의 경위를 날짜별로 정리하고, 각 시점의 증거(문자, 이메일, 녹취)를 대응시킵니다</li>\n<li><strong>유사 판례 인용</strong> — 본인 상황과 유사한 심사 결정례나 법원 판례를 찾아 심사청구서에 인용하면 설득력이 높아집니다</li>\n<li><strong>기한 엄수</strong> — 심사청구 90일, 재심사청구 90일, 행정소송 90일 — 각 단계의 기한을 1일이라도 넘기면 각하됩니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정수급 반환명령과 적법성 판단',
        summary:
          '대구지방법원 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 구직급여 수급자가 해외 체류 중 제3자가 대리로 재취업 노력 신고를 한 사안에서, 이는 고용보험법 제61조의 "거짓이나 부정한 방법"에 해당하여 지급제한 및 반환명령 처분이 적법하다고 판시했습니다.',
        takeaway:
          '실업급여 신청 과정에서 허위 신고나 대리 신고는 부정수급으로 판정되어 반환명령을 받을 수 있습니다. 이의신청 시에도 정당한 사유를 정직하게 소명하고 실제 증거를 제출하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '심사청구를 거치지 않고 바로 행정소송을 제기할 수 있나요?',
        answer:
          '<strong>고용보험법은 필요적 전치주의를 채택하고 있어 심사·재심사를 모두 거쳐야 행정소송이 가능합니다.</strong> 다만 심사 결정이 60일 이내에 나오지 않거나 재심사 결정이 지연되는 경우에는 결정을 기다리지 않고 행정소송을 제기할 수 있습니다.',
      },
      {
        question: '이의신청 중에도 다른 구직활동을 해야 하나요?',
        answer:
          '<strong>이의신청 기간 중에는 실업급여가 지급되지 않으므로 구직활동 의무는 없습니다.</strong> 다만 이의신청이 인용되어 수급 자격이 인정되면 소급하여 급여가 지급되므로, 수급자격 인정 후 구직활동 보고가 필요할 수 있습니다.',
      },
      {
        question: '부지급 처분에 대한 이의신청 비용은 얼마인가요?',
        answer:
          '<strong>심사청구와 재심사청구는 비용이 전혀 들지 않습니다.</strong> 행정소송 단계에서만 인지대와 송달료가 발생하며, 경제적 어려움이 있으면 대한법률구조공단의 무료 소송 대리 지원을 받을 수 있습니다.',
      },
      {
        question: '이의신청이 인용되면 급여가 언제부터 나오나요?',
        answer:
          '<strong>처분이 취소되면 당초 수급 자격이 인정된 시점부터 소급하여 구직급여가 지급됩니다.</strong> 다만 이의신청 기간 동안 지급이 보류되었던 만큼 한꺼번에 지급되므로, 인용 결정 후 1~2주 내에 급여가 입금됩니다.',
      },
      {
        question: '자발적 퇴사로 처리되었는데 뒤집을 수 있나요?',
        answer:
          '<strong>자발적 퇴사라 하더라도 고용보험법 시행규칙 별표2의 정당한 이직 사유에 해당하면 수급 자격을 받을 수 있습니다.</strong> 임금 체불, 최저임금 위반, 근로조건 저하, 직장 내 괴롭힘, 통근 곤란 등 구체적인 퇴사 사유와 그 증거를 제출하면 처분이 뒤집어질 수 있습니다.',
      },
    ],
    cta: {
      text: '실업급여 부지급 이의신청, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 전체 절차 가이드', href: '/guide/unemployment/unemployment-full-process' },
      { label: '자발적 퇴사 실업급여 수급 조건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 부정수급 제재 안내', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 신청부터 지급까지 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '부당해고 구제 절차 가이드', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. retirement / retirement-company-merger-split-succession
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-company-merger-split-succession',
    keyword: '회사 합병 분할 퇴직금 승계 책임',
    questionKeyword: '회사가 합병되면 퇴직금은 누가 지급해야 하나요?',
    ctaKeyword: '합병 분할 퇴직금 승계 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '회사 합병·분할 퇴직금 승계 4가지 유형 | 로앤가이드',
      description:
        '회사가 합병이나 분할되면서 퇴직금을 누가 줘야 하는지 모르겠다면 유형별 승계 책임 기준을 지금 확인하세요',
    },
    intro:
      '<p>10년간 다니던 회사가 다른 회사에 흡수합병되었습니다. 새 회사에서 "합병 전 퇴직금은 이전 회사 몫이니 우리 책임이 아니다"라고 합니다. 퇴직금은 합병 후 존속회사가 승계해야 하는 것 아닌지, 분할되는 경우에는 어디에 청구해야 하는지 모릅니다. 합병·분할 유형별 퇴직금 승계 책임 기준을 정리해보세요.</p>',
    sections: [
      {
        title: '흡수합병 — 존속회사가 퇴직금 전액을 승계',
        content:
          '<p><strong style="color:#1e3a5f">흡수합병의 경우 소멸회사의 권리·의무가 포괄적으로 존속회사에 승계되므로 퇴직금 지급의무도 존속회사가 부담합니다.</strong></p>\n<ul>\n<li><strong>포괄승계 원칙</strong> — 상법 제235조에 따라 합병 후 존속회사는 소멸회사의 권리·의무를 포괄적으로 승계합니다. 퇴직금 지급의무도 예외 없이 승계됩니다</li>\n<li><strong>근속기간 통산</strong> — 합병 전 소멸회사에서의 재직기간과 합병 후 존속회사에서의 재직기간이 통산됩니다. 퇴직금은 전체 재직기간을 기준으로 산정합니다</li>\n<li><strong>중간정산 합의</strong> — 합병 시점에 퇴직금 중간정산을 하는 경우가 있으나, 이는 근로자의 동의가 있어야 합니다. 회사가 일방적으로 중간정산을 강제할 수 없습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: "합병 전 퇴직금은 이전 회사 몫"이라는 주장은 법적으로 틀립니다. 존속회사가 전액 책임집니다</blockquote>',
      },
      {
        title: '신설합병 — 신설회사가 양쪽 퇴직금을 모두 승계',
        content:
          '<p><strong style="color:#1e3a5f">신설합병은 기존 회사 모두 소멸하고 새 회사가 설립되며, 양쪽의 퇴직금 지급의무를 모두 신설회사가 승계합니다.</strong></p>\n<ul>\n<li><strong>양사 의무 승계</strong> — 합병으로 소멸하는 양 회사의 권리·의무가 모두 신설회사에 포괄 승계됩니다</li>\n<li><strong>근속기간</strong> — 소멸회사에서의 재직기간은 신설회사의 재직기간으로 통산됩니다. 합병으로 인해 근로관계가 단절되는 것이 아닙니다</li>\n<li><strong>퇴직금 산정 기준</strong> — 퇴직 시점의 평균임금을 기준으로 전체 재직기간에 대한 퇴직금을 산정합니다. 합병 전후로 임금 체계가 바뀌었다면 퇴직 시점 기준이 적용됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 합병·분할 유형에 맞는 퇴직금 청구 방법을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인적분할·물적분할 — 유형에 따라 청구 대상이 다르다',
        content:
          '<p><strong style="color:#1e3a5f">회사 분할 시에는 분할 유형(인적분할·물적분할)과 근로자 귀속 부서에 따라 퇴직금 지급 주체가 달라집니다.</strong></p>\n<ul>\n<li><strong>인적분할(분할신설)</strong> — 분할되는 사업부문에 소속된 근로자의 근로관계는 신설회사로 이전됩니다. 신설회사가 퇴직금 지급의무를 승계하되, 상법 제530조의9 제1항에 따라 분할 전 회사와 신설회사가 연대 책임을 집니다</li>\n<li><strong>물적분할</strong> — 분할 회사가 100% 주식을 보유하는 자회사를 설립하는 형태입니다. 근로자의 근로관계가 자회사로 이전되면 자회사가 퇴직금 의무를 부담하지만, 분할 회사와의 연대 책임 여부는 분할계획서에 따라 달라질 수 있습니다</li>\n<li><strong>연대 책임</strong> — 상법상 분할 시 연대 책임 규정이 있으므로, 신설회사가 퇴직금을 미지급하면 분할 전 회사(존속회사)에도 청구할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 분할 계획서에 "퇴직금 승계 제외" 조항이 있어도 근로자에 대한 관계에서 연대 책임은 배제되지 않는다는 것이 판례의 입장입니다</blockquote>',
      },
      {
        title: '영업양도 — 합병·분할과 다른 구조',
        content:
          '<p><strong style="color:#1e3a5f">영업양도는 합병·분할과 달리 포괄승계가 아니므로, 근로관계 승계 여부가 핵심 쟁점입니다.</strong></p>\n<ul>\n<li><strong>영업양도와 합병의 차이</strong> — 영업양도는 계약에 의한 이전이므로 근로관계가 당연히 승계되는 것이 아닙니다. 다만 판례는 영업양도 시 해고의 효력 없이 근로관계가 양수회사로 승계되는 것이 원칙이라고 봅니다</li>\n<li><strong>근로관계 승계 시</strong> — 근로관계가 양수회사로 승계되면 양수회사가 퇴직금 지급의무를 부담합니다. 재직기간도 통산됩니다</li>\n<li><strong>근로관계 미승계 시</strong> — 양도회사에서 해고되는 것이므로 양도회사가 퇴직금을 지급해야 합니다. 부당해고 여부도 다툴 수 있습니다</li>\n<li><strong>확인 포인트</strong> — 영업양도계약서에 근로자 고용 승계 조항이 있는지, 실제로 양수회사에서 계속 근무했는지를 확인하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자의 사용사업주 변경과 퇴직금 지급 책임',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 직접고용간주 효과가 발생한 파견근로자에 대해 사용사업주와 파견사업주가 부진정연대채무 관계에 있으며, 파견사업주가 지급한 임금은 사용사업주가 지급할 금액에서 공제되어야 한다고 판시했습니다. 다만 퇴직금은 후불 임금 외에 사회보장적 성격도 있으므로 별도로 판단해야 한다고 했습니다.',
        takeaway:
          '합병·분할·영업양도 등으로 사용자가 변경될 때 퇴직금 지급 주체가 불분명해질 수 있습니다. 근로관계의 실질적 승계 여부와 지급 책임 소재를 확인하고, 불분명하면 양쪽 모두에 청구하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '합병 시점에 퇴직금 중간정산을 요구받았는데 거부할 수 있나요?',
        answer:
          '<strong>퇴직금 중간정산은 근로자의 동의가 있어야 하므로 거부할 수 있습니다.</strong> 회사가 합병을 이유로 일방적으로 중간정산을 강제하는 것은 위법입니다. 다만 근로자가 자발적으로 동의한 중간정산은 유효하므로 서명 전에 신중하게 판단하세요.',
      },
      {
        question: '회사 분할 후 양쪽 회사 모두 퇴직금을 안 주면 어떻게 하나요?',
        answer:
          '<strong>분할 시 상법상 연대 책임이 적용되므로 분할 전 회사와 신설회사 모두에 청구할 수 있습니다.</strong> 양쪽 모두 미지급하면 고용노동부에 진정하거나 양쪽을 공동 피고로 하여 민사소송을 제기하세요.',
      },
      {
        question: '합병 후 퇴직금 제도가 퇴직연금으로 바뀌면 기존 퇴직금은 어떻게 되나요?',
        answer:
          '<strong>퇴직금 제도에서 퇴직연금으로 전환되더라도 기존 재직기간에 대한 퇴직금은 보장됩니다.</strong> 전환 시점까지의 퇴직금을 퇴직연금 계좌에 이전(일시 이전금)하거나, 전환 전 기간은 퇴직금, 전환 후 기간은 퇴직연금으로 이원 관리됩니다.',
      },
      {
        question: '소멸회사의 퇴직금 체불이 있었는데 합병 후에도 청구할 수 있나요?',
        answer:
          '<strong>합병 후 존속회사가 소멸회사의 채무를 포괄 승계하므로, 체불 퇴직금도 존속회사에 청구할 수 있습니다.</strong> 소멸시효(3년) 내라면 체불된 퇴직금과 지연이자(연 20%)를 모두 존속회사에 청구하세요.',
      },
    ],
    cta: {
      text: '합병·분할 퇴직금 승계, AI가 분석해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 소멸시효 안내', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 계산 방법 안내', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. retirement / retirement-night-overtime-included-calculation
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-night-overtime-included-calculation',
    keyword: '야간 연장근로수당 퇴직금 포함 계산 기준',
    questionKeyword: '야간근로수당이 퇴직금에 포함되나요?',
    ctaKeyword: '야간 연장수당 퇴직금 포함 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '야간·연장수당 퇴직금 포함 기준 5가지 | 로앤가이드',
      description:
        '야간근로수당과 연장근로수당이 퇴직금에 포함되는지 모르겠다면 포함 기준 5가지와 재계산 방법을 지금 확인하세요',
    },
    intro:
      '<p>퇴직금을 받았는데 예상보다 200만 원 이상 적습니다. 3년간 매달 야간근로수당과 연장근로수당을 받았는데 퇴직금 명세서에는 기본급만 반영되어 있습니다. 회사는 "수당은 변동급이라 퇴직금에 안 들어간다"고 하지만, 매달 고정적으로 발생했던 수당도 정말 제외되는 것인지 확인이 필요합니다. 야간·연장수당의 퇴직금 포함 기준을 정리해보세요.</p>',
    sections: [
      {
        title: '평균임금에 포함되는 수당의 5가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">야간·연장근로수당이 퇴직금 산정 기초인 평균임금에 포함되려면 5가지 기준을 충족해야 합니다.</strong></p>\n<ol>\n<li><strong>근로의 대가일 것</strong> — 실제 근로 제공에 대한 반대급부여야 합니다. 야간·연장근로를 실제로 수행하고 그에 대해 지급받은 수당은 근로의 대가에 해당합니다</li>\n<li><strong>계속적으로 지급될 것</strong> — 일회성이 아닌 계속적으로 지급되어야 합니다. 매월 또는 매주 정기적으로 야간·연장근로가 발생하여 수당이 지급되었다면 이 요건을 충족합니다</li>\n<li><strong>정기적으로 지급될 것</strong> — 지급 주기가 일정해야 합니다. 매월 급여와 함께 지급되는 야간·연장수당은 정기성 요건을 충족합니다</li>\n<li><strong>단체협약·취업규칙·관행에 근거가 있을 것</strong> — 지급의무가 확인되어야 합니다. 회사의 급여규정, 취업규칙에 연장·야간수당 지급 기준이 명시되어 있으면 충족됩니다</li>\n<li><strong>금액이 확정 가능할 것</strong> — 지급 금액이 산정 가능해야 합니다. 실제 근로시간에 따라 계산되는 법정 수당이므로 이 요건도 충족됩니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 야간·연장근로수당은 근로기준법 제56조에 따른 법정 수당이므로, 실제 근로가 이루어졌다면 원칙적으로 평균임금에 포함됩니다</blockquote>',
      },
      {
        title: '포함되는 경우와 제외되는 경우 비교',
        content:
          '<p><strong style="color:#1e3a5f">같은 야간·연장수당이라도 지급 방식과 실제 근로 여부에 따라 포함·제외가 달라집니다.</strong></p>\n<ul>\n<li><strong>포함 — 실제 연장·야간근로 수당</strong>: 퇴직 전 3개월간 실제로 연장·야간근로를 하고 그에 대해 지급받은 수당은 평균임금에 포함됩니다</li>\n<li><strong>포함 — 포괄임금제 고정 수당</strong>: 포괄임금계약으로 매월 고정액의 연장·야간수당을 지급받은 경우, 해당 고정액 전체가 평균임금에 포함됩니다</li>\n<li><strong>제외 — 퇴직 전 3개월 밖의 수당</strong>: 평균임금은 퇴직 전 3개월간의 임금을 기준으로 산정하므로, 그 이전에 발생한 수당은 반영되지 않습니다</li>\n<li><strong>주의 — 퇴직 직전 근무 축소</strong>: 퇴직 전 3개월간 의도적으로 연장·야간근로를 줄인 경우 평균임금이 낮아질 수 있습니다. 이때는 통상임금과 비교하여 높은 쪽을 적용받을 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 수당 포함 여부와 퇴직금 재계산액을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직금 재계산 방법과 차액 청구',
        content:
          '<p><strong style="color:#1e3a5f">야간·연장수당이 누락된 퇴직금은 재계산하여 차액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>재계산 공식</strong> — (퇴직 전 3개월 기본급 + 연장수당 + 야간수당 + 기타 포함 항목) ÷ 퇴직 전 3개월 총 일수 = 1일 평균임금 → 1일 평균임금 × 30 × (총 재직일수 ÷ 365) = 정확한 퇴직금</li>\n<li><strong>차액 산출</strong> — 재계산 퇴직금에서 이미 받은 퇴직금을 빼면 차액이 나옵니다. 예: 월 기본급 300만 원 + 연장수당 50만 원 + 야간수당 30만 원으로 재계산하면 수백만 원 차이가 날 수 있습니다</li>\n<li><strong>증거 확보</strong> — 급여명세서, 통장 거래내역, 근태 기록(출퇴근 시간 기록), 연장·야간근로 승인서 등을 확보하세요</li>\n<li><strong>청구 방법</strong> — 회사에 내용증명으로 차액 지급을 요구하고, 14일 이내에 미지급 시 고용노동부에 진정하거나 민사소송을 제기할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 퇴직금 차액 청구의 소멸시효는 퇴직일로부터 3년입니다. 퇴직 후 가능한 빨리 재계산하여 청구하세요</blockquote>',
      },
      {
        title: '포괄임금제와 야간·연장수당의 관계',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금계약으로 야간·연장수당이 월급에 포함되어 있다면, 해당 고정액 전체가 퇴직금 산정에 반영됩니다.</strong></p>\n<ul>\n<li><strong>포괄임금제 유효 시</strong> — 근로계약서에 "야간근로수당 30만 원, 연장근로수당 50만 원 포함"으로 명시되어 있으면 해당 금액이 매월 고정 지급되는 것이므로 평균임금에 당연히 포함됩니다</li>\n<li><strong>포괄임금제 무효 시</strong> — 실제 연장·야간근로시간이 약정된 포괄임금보다 많으면 차액을 추가로 청구할 수 있고, 이 차액도 평균임금에 반영되어 퇴직금이 증가합니다</li>\n<li><strong>미지급 수당과 퇴직금</strong> — 포괄임금제가 무효로 판정되어 미지급 연장·야간수당이 발생하면, 해당 수당을 포함한 정확한 평균임금으로 퇴직금을 재산정해야 합니다</li>\n<li><strong>확인 포인트</strong> — 근로계약서에 야간·연장수당이 별도 항목으로 명시되어 있는지, 포괄임금제로 일괄 지급되는지를 먼저 확인하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 관행에 의한 수당 지급과 평균임금 포함 여부',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업 내부의 특정 관행이 근로계약의 내용을 이루려면 그 관행이 규범적 사실로서 명확히 승인되거나 사실상의 제도로 확립되어야 한다고 판시했습니다. 또한 평균임금에 포함되는 임금은 사용자에게 지급의무가 지워져 있어야 하며, 근로의 대가로서 계속적·정기적으로 지급되어야 한다고 했습니다.',
        takeaway:
          '야간·연장근로수당이 관행적으로 지급되었더라도, 취업규칙이나 단체협약에 명시되어 있지 않으면 평균임금 포함 여부가 다투어질 수 있습니다. 급여규정이나 근로계약서에 수당 지급 근거가 명시되어 있는지 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직 전 3개월간 연장근로가 줄어서 수당이 적으면 어떻게 되나요?',
        answer:
          '<strong>퇴직 전 3개월의 실제 지급액을 기준으로 평균임금이 산정됩니다.</strong> 연장근로가 줄면 평균임금이 낮아져 퇴직금도 줄어듭니다. 다만 이렇게 산정한 평균임금이 통상임금보다 낮으면 통상임금을 기준으로 퇴직금을 산정하므로, 통상임금과 비교해보세요.',
      },
      {
        question: '야간근로수당과 야간근로가산수당은 다른 건가요?',
        answer:
          '<strong>야간근로수당은 야간근로(22시~06시) 자체에 대한 대가이고, 야간근로가산수당은 통상임금의 50%를 추가로 지급하는 것입니다.</strong> 근로기준법 제56조에 따라 야간근로 시 기본 시급 + 50% 가산이 적용되며, 이 전체 금액이 평균임금에 포함됩니다.',
      },
      {
        question: '연장근로시간이 기록되어 있지 않아도 수당을 청구할 수 있나요?',
        answer:
          '<strong>회사에 출퇴근 기록이 없더라도 본인이 확보한 증거로 연장근로를 입증할 수 있습니다.</strong> CCTV, 업무용 메신저 접속 기록, 이메일 발송 시간, GPS 기록, 동료 진술 등으로 실제 근로시간을 소명할 수 있습니다.',
      },
      {
        question: '퇴직금을 이미 받았는데 나중에 차액을 추가로 청구할 수 있나요?',
        answer:
          '<strong>퇴직일로부터 3년 이내라면 차액을 추가 청구할 수 있습니다.</strong> 퇴직금 수령 시 "이의 없이 수령한다"는 확인서에 서명했더라도, 법정 퇴직금보다 적은 금액은 그 차액 부분의 지급 합의가 무효이므로 차액 청구가 가능합니다.',
      },
      {
        question: '교대근무자의 야간수당은 어떻게 퇴직금에 반영되나요?',
        answer:
          '<strong>교대근무로 발생하는 야간근로수당도 퇴직 전 3개월 실제 지급액이 평균임금에 포함됩니다.</strong> 주간조·야간조를 번갈아 근무하는 경우, 퇴직 전 3개월 동안 야간조에 배치된 빈도에 따라 수당 금액이 달라질 수 있습니다.',
      },
    ],
    cta: {
      text: '야간·연장수당 퇴직금 포함 여부, AI가 분석해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식 항목별 안내', href: '/guide/retirement/retirement-comprehensive-calculation-formula' },
      { label: '퇴직금 청구 방법 3가지 비교', href: '/guide/retirement/retirement-claim-channel-comparison' },
      { label: '퇴직금 지연이자 20% 안내', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '포괄임금 연장근로 차이 안내', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. wage / unpaid-wage-verbal-contract-claim-procedure
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'unpaid-wage-verbal-contract-claim-procedure',
    keyword: '구두 근로계약 임금체불 신고 청구 방법',
    questionKeyword: '서면 계약 없이 일했는데 임금체불 신고할 수 있나요?',
    ctaKeyword: '구두계약 임금체불 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구두 근로계약 임금체불 신고 5단계 | 로앤가이드',
      description:
        '서면 계약 없이 일했는데 임금을 못 받아서 증거가 부족할까 걱정된다면 구두계약 입증 방법과 신고 절차를 지금 확인하세요',
    },
    intro:
      '<p>"계약서는 나중에 쓰자"는 말을 믿고 3개월간 일했습니다. 갑자기 사장이 "일한 적 없다"며 임금 지급을 거부합니다. 근로계약서도 없고 출퇴근 기록도 없어서 신고해도 소용이 없을까 걱정됩니다. 구두 근로계약도 법적으로 유효하며, 간접 증거만으로도 임금체불 신고와 청구가 가능합니다.</p>',
    sections: [
      {
        title: '구두 근로계약의 법적 효력과 서면 미교부 시 제재',
        content:
          '<p><strong style="color:#1e3a5f">근로계약은 구두로도 성립하며, 오히려 서면 근로계약서를 교부하지 않은 사용자가 500만 원 이하의 벌금에 처해집니다.</strong></p>\n<ul>\n<li><strong>구두계약도 유효</strong> — 근로기준법상 근로계약은 별도의 방식을 요구하지 않으므로 구두 합의만으로도 유효합니다. "계약서가 없으니 근로관계가 없다"는 사용자 주장은 법적으로 근거가 없습니다</li>\n<li><strong>서면 미교부 사용자 책임</strong> — 근로기준법 제17조에 따라 사용자는 임금, 소정근로시간, 휴일, 연차유급휴가를 명시한 서면을 교부해야 합니다. 위반 시 500만 원 이하의 벌금(제114조)에 처해집니다</li>\n<li><strong>입증 책임</strong> — 근로관계 존재와 약정 임금에 대한 일차적 입증 책임은 근로자에게 있으나, 직접 증거가 없어도 간접 증거로 충분히 입증할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 서면 계약이 없는 상황은 오히려 사용자의 법 위반을 보여주는 것이므로, 신고를 망설일 이유가 없습니다</blockquote>',
      },
      {
        title: '구두계약 근로관계를 입증하는 7가지 간접 증거',
        content:
          '<p><strong style="color:#1e3a5f">계약서가 없어도 아래 7가지 간접 증거를 조합하면 근로관계와 약정 임금을 입증할 수 있습니다.</strong></p>\n<ol>\n<li><strong>카카오톡·문자 대화</strong> — 업무 지시, 출근 시간 확인, 임금 약속 내용이 담긴 메시지. 사장과의 대화를 캡처하여 보관하세요</li>\n<li><strong>계좌 이체 내역</strong> — 이전에 임금이 입금된 기록이 있다면 근로관계를 강력히 뒷받침합니다. 이체 메모에 "급여", "월급" 등이 표시된 경우 더욱 유리합니다</li>\n<li><strong>동료 진술</strong> — 함께 일한 동료의 진술서가 있으면 효과적입니다. 동료가 "○○님이 ○월 ○일부터 ○월 ○일까지 매일 출근하여 ○○ 업무를 했다"는 내용의 진술서를 작성해줄 수 있습니다</li>\n<li><strong>CCTV·사진</strong> — 사업장 CCTV에 출퇴근 모습이 촬영되어 있거나, 근무 중 찍은 사진이 있으면 증거가 됩니다</li>\n<li><strong>채용 공고·구인 게시물</strong> — 해당 사업장의 구인 공고(알바몬, 사람인 등)를 캡처해두면 채용 사실을 입증할 수 있습니다</li>\n<li><strong>업무 관련 자료</strong> — 업무 일지, 배달 기록, POS 시스템 로그, 고객 응대 기록 등도 근로 제공의 증거가 됩니다</li>\n<li><strong>녹취록</strong> — 사장과의 통화를 녹음한 파일도 증거로 사용할 수 있습니다. 대화 중 "이번 달 월급은 언제 줘요?"라는 질문에 대한 답변이 녹음되면 매우 효과적입니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인이 가진 증거로 신고 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '구두계약 임금체불 신고 절차 5단계',
        content:
          '<p><strong style="color:#1e3a5f">증거를 확보한 후 고용노동부 진정 → 근로감독관 조사 → 시정지시 → 미이행 시 사법처리 순으로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계: 증거 정리</strong> — 위 7가지 간접 증거를 최대한 확보하고, 체불 금액을 근무일수 × 약정 일급(또는 시급)으로 산출합니다</li>\n<li><strong>2단계: 고용노동부 진정</strong> — 관할 고용노동지청에 진정서를 제출합니다. 진정서에 "구두로 약정한 임금 내역"과 증거 목록을 첨부합니다</li>\n<li><strong>3단계: 근로감독관 조사</strong> — 배정된 감독관이 사업주를 출석시켜 조사합니다. 사업주가 근로관계를 부인하면 근로자가 제출한 증거를 토대로 근로관계 존부를 판단합니다</li>\n<li><strong>4단계: 시정지시</strong> — 근로관계가 인정되면 체불 임금 지급을 지시합니다. 14일 이내에 지급해야 합니다</li>\n<li><strong>5단계: 사법처리</strong> — 시정지시를 불이행하면 검찰 송치. 근로기준법 제109조에 따라 3년 이하 징역 또는 3,000만 원 이하 벌금입니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 진정 과정에서 합의 권유가 있을 수 있습니다. 체불 원금보다 낮은 금액으로 합의하기 전에 반드시 지연이자(연 20%)와 주휴수당 포함 여부를 따져보세요</blockquote>',
      },
      {
        title: '약정 임금이 불분명할 때 최저임금 기준 청구',
        content:
          '<p><strong style="color:#1e3a5f">구두로 약정한 임금 금액을 입증하기 어려우면 최소한 최저임금을 기준으로 체불 금액을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>최저임금 기준 산정</strong> — 2024년 최저임금 시급 9,860원 × 실제 근로시간으로 최소 체불 금액을 산출합니다. 주 15시간 이상 근로했다면 주휴수당도 포함해 청구합니다</li>\n<li><strong>약정 임금 입증 시</strong> — 채용 공고에 기재된 급여, 카카오톡 대화에서 언급된 금액 등으로 약정 임금을 입증하면 최저임금보다 높은 금액을 청구할 수 있습니다</li>\n<li><strong>지연이자 청구</strong> — 퇴직일(또는 근로관계 종료일)로부터 14일이 지나면 연 20%의 지연이자가 발생합니다(근로기준법 제37조). 체불 원금과 함께 반드시 청구하세요</li>\n<li><strong>소멸시효</strong> — 임금 청구권의 소멸시효는 3년입니다. 체불이 발생한 시점부터 3년이 지나면 청구할 수 없으므로 빠르게 대응하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 서면 계약 없는 근로관계 인정과 퇴직금 청구',
        summary:
          '서울중앙지방법원 2021가합564798 사건(서울중앙지법, 2024.04.04 선고)에서 법원은 구두 제조회사 공장에서 서면 계약 없이 일한 근로자들에 대해, 근무시간이 회사에 의해 통제되고, 기계·설비·원자재가 모두 회사 소유이며, 업무 방식에 재량이 없었던 점 등을 종합하여 근로기준법상 근로자에 해당한다고 판단하고 퇴직금 지급을 명했습니다.',
        takeaway:
          '서면 계약서가 없어도 실질적인 근로관계(업무 지시, 근무시간 통제, 도구 제공 등)가 인정되면 근로자 지위가 인정됩니다. 구두계약만으로 일한 경우에도 간접 증거를 모아 근로자성을 입증하세요.',
      },
    ],
    faq: [
      {
        question: '사장이 "프리랜서로 일한 거다"라고 주장하면 어떻게 하나요?',
        answer:
          '<strong>계약 형식보다 근로 제공의 실질이 중요합니다.</strong> 출퇴근 시간이 정해져 있고, 사용자의 지시를 받아 일했으며, 본인 장비 없이 사업장 시설을 사용했다면 프리랜서가 아닌 근로자로 인정됩니다. 고용노동부에 근로자성 판단을 요청할 수 있습니다.',
      },
      {
        question: '구두로 "월 200만 원"이라고 했는데 입증이 안 되면 최저임금만 받나요?',
        answer:
          '<strong>약정 임금을 입증하지 못하면 최저임금 기준으로 산정됩니다.</strong> 다만 채용 공고, 같은 직종 동료의 급여 수준, 카카오톡 대화 등으로 약정 금액을 소명할 수 있습니다. 가능한 모든 간접 증거를 제출하세요.',
      },
      {
        question: '일한 지 1년이 넘었는데 지금도 신고할 수 있나요?',
        answer:
          '<strong>임금 청구권의 소멸시효는 3년이므로 퇴직 후 3년 이내라면 신고가 가능합니다.</strong> 다만 시간이 지날수록 증거 확보가 어려워지므로 가능한 빨리 신고하는 것이 유리합니다.',
      },
      {
        question: '구두계약으로 일한 경우 퇴직금도 받을 수 있나요?',
        answer:
          '<strong>1년 이상 계속 근로하고 주 15시간 이상 일했다면 퇴직금 수급 요건을 충족합니다.</strong> 구두계약이든 서면계약이든 근로관계가 인정되면 퇴직금 지급 의무가 발생합니다. 임금체불과 함께 퇴직금도 함께 청구하세요.',
      },
    ],
    cta: {
      text: '구두계약 임금체불, AI가 증거 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 신고 절차 5단계', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '임금체불 지연이자 계산 안내', href: '/guide/wage/wage-delay-interest-calculation-guide' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '부당해고 구제 절차 가이드', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. wage / unpaid-wage-probation-minimum-wage-violation
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'unpaid-wage-probation-minimum-wage-violation',
    keyword: '수습기간 최저임금 위반 신고 구제',
    questionKeyword: '수습기간에 최저임금보다 적게 받으면 신고할 수 있나요?',
    ctaKeyword: '수습 최저임금 위반 신고 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '수습기간 최저임금 감액 요건과 위반 구제 4단계 | 로앤가이드',
      description:
        '수습기간이라며 최저임금보다 적은 급여를 받고 있다면 감액이 적법한지와 위반 시 구제 절차를 지금 확인하세요',
    },
    intro:
      '<p>"수습기간이니까 최저임금의 90%만 준다"는 말을 듣고 3개월째 일하고 있습니다. 그런데 알고 보니 수습 최저임금 감액에도 조건이 있다고 합니다. 단순 노무직은 감액 자체가 불법이라는데, 본인의 업무가 단순 노무에 해당하는지도 모릅니다. 수습기간 최저임금 감액 요건과 위반 시 구제 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '수습기간 최저임금 10% 감액의 적법 요건 3가지',
        content:
          '<p><strong style="color:#1e3a5f">수습 근로자에 대한 최저임금 10% 감액은 3가지 요건을 모두 충족해야 적법합니다.</strong></p>\n<ol>\n<li><strong>1년 이상 근로계약 체결</strong> — 근로계약 기간이 1년 이상이어야 합니다. 6개월 계약이나 일용 근로계약에서는 최저임금 감액이 불가합니다</li>\n<li><strong>수습 사용 기간 3개월 이내</strong> — 수습기간은 최대 3개월까지만 감액 적용이 가능합니다. 3개월을 초과한 수습기간에는 전액 최저임금을 지급해야 합니다</li>\n<li><strong>단순 노무업무가 아닐 것</strong> — 최저임금법 시행령 별표에 해당하는 단순 노무업무 종사자에게는 감액이 적용되지 않습니다. 건물 청소, 음식 배달, 주방 보조, 경비, 주유원 등이 단순 노무에 해당합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 3가지 요건 중 하나라도 충족하지 못하면 최저임금 전액을 지급해야 하며, 미달분은 임금체불에 해당합니다</blockquote>',
      },
      {
        title: '단순 노무업무의 구체적 범위',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 고시에 따른 단순 노무업무에 해당하면 수습기간이라 하더라도 최저임금 감액이 절대 불가합니다.</strong></p>\n<ul>\n<li><strong>한국표준직업분류 대분류 9</strong> — "단순노무종사자"에 해당하는 직종은 감액 금지입니다. 건물 청소원, 환경미화원, 가사 도우미, 음식 배달원, 택배 상하차, 주차 관리원, 경비원, 주유원, 세차원 등이 포함됩니다</li>\n<li><strong>판단 기준</strong> — 직무 내용이 특별한 훈련·교육 없이도 수행 가능하고, 주로 단순 반복적 육체노동인 경우 단순 노무에 해당합니다</li>\n<li><strong>혼합 업무</strong> — 단순 노무와 비단순 노무가 혼합된 경우, 주된 업무가 단순 노무에 해당하면 감액이 불가합니다</li>\n<li><strong>편의점·카페 아르바이트</strong> — 편의점 계산, 카페 음료 제조 등은 단순 노무에 해당하는지 다투어질 수 있습니다. 업무 내용에 따라 개별 판단이 필요합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 업무의 단순 노무 해당 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '최저임금 위반 시 구제 절차 4단계',
        content:
          '<p><strong style="color:#1e3a5f">수습기간 최저임금 위반이 확인되면 고용노동부 신고 → 시정지시 → 미이행 시 사법처리 순으로 구제받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계: 차액 산출</strong> — (최저임금 시급 - 실제 지급 시급) × 총 근로시간 = 체불액. 예: 시급 9,860원인데 8,874원(10% 감액)을 받은 경우, 월 209시간 기준 월 약 206,000원의 차액이 발생합니다</li>\n<li><strong>2단계: 고용노동부 신고</strong> — 관할 고용노동지청에 진정서를 제출합니다. 근로계약서, 급여명세서, 통장 거래내역을 첨부합니다</li>\n<li><strong>3단계: 시정지시</strong> — 근로감독관 조사 후 위반이 확인되면 사업주에게 14일 이내 차액 지급을 명합니다</li>\n<li><strong>4단계: 형사처벌</strong> — 시정지시 미이행 시 최저임금법 제28조에 따라 3년 이하 징역 또는 2,000만 원 이하 벌금에 처해집니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 최저임금 미달분은 근로기준법상 임금체불과 별도로 최저임금법 위반으로도 처벌됩니다. 두 가지 법 위반이 동시에 성립합니다</blockquote>',
      },
      {
        title: '수습기간 관련 임금 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">수습기간 근로자가 확인해야 할 임금 관련 사항을 체크리스트로 정리합니다.</strong></p>\n<ul>\n<li><strong>근로계약 기간 확인</strong> — 1년 미만 계약이면 최저임금 감액 자체가 불법입니다. 계약서에 명시된 계약 기간을 확인하세요</li>\n<li><strong>수습기간 명시 여부</strong> — 수습기간은 근로계약서에 명시되어야 합니다. 구두로만 "수습"이라고 한 경우에도 감액은 적용될 수 있지만, 분쟁 시 사용자가 입증해야 합니다</li>\n<li><strong>주휴수당 지급 여부</strong> — 수습 근로자도 주 15시간 이상 근로하면 주휴수당을 받을 권리가 있습니다. 최저임금 감액과 주휴수당 미지급이 동시에 발생하는 경우가 많습니다</li>\n<li><strong>연장근로수당 지급 여부</strong> — 수습이라도 법정 근로시간(주 40시간)을 초과하면 1.5배의 연장근로수당을 받아야 합니다</li>\n<li><strong>3개월 초과 수습</strong> — 3개월이 지나도 계속 감액된 급여를 받고 있다면 즉시 전액 최저임금 지급을 요구하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소정근로일 외 근로와 최저임금 산정 기준',
        summary:
          '대법원 2021다304779 사건(대법원, 2024.10.08 선고)에서 법원은 근로자가 소정의 근로일에 해당하지 않는 날에 근로한 경우 그 시간은 최저임금 산정을 위한 비교대상 시간에 원칙적으로 포함되지 않는다고 판시했습니다.',
        takeaway:
          '최저임금 위반 여부를 판단할 때는 소정근로시간과 실제 근로시간을 구분해야 합니다. 수습기간 감액이 적법한지도 소정근로시간 기준으로 판단하므로, 본인의 소정근로시간이 얼마인지 정확히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '수습기간이 6개월이라고 했는데 전체 기간에 감액이 적용되나요?',
        answer:
          '<strong>수습기간이 아무리 길어도 최저임금 감액은 3개월까지만 허용됩니다.</strong> 4개월째부터는 반드시 최저임금 전액을 지급받아야 합니다. 3개월 초과 기간의 감액분은 임금체불로 신고할 수 있습니다.',
      },
      {
        question: '인턴과 수습은 같은 건가요?',
        answer:
          '<strong>법적으로 인턴과 수습은 구분됩니다.</strong> 수습은 정규직 채용 후 업무 적응 기간이고, 인턴은 채용 여부가 미확정인 시험 사용 기간입니다. 다만 인턴이라 하더라도 실질적으로 근로를 제공하면 최저임금 이상의 임금을 받아야 합니다.',
      },
      {
        question: '최저임금 위반으로 퇴사하면 실업급여를 받을 수 있나요?',
        answer:
          '<strong>최저임금 위반은 고용보험법 시행규칙 별표2의 정당한 이직 사유에 해당합니다.</strong> 자진 퇴사하더라도 실업급여 수급 자격을 받을 수 있으므로, 최저임금 위반 증거를 확보하여 고용센터에 제출하세요.',
      },
      {
        question: '시급제가 아닌 월급제인데 최저임금 위반인지 어떻게 확인하나요?',
        answer:
          '<strong>월급 ÷ 월 소정근로시간(주휴 포함)으로 환산 시급을 계산합니다.</strong> 예: 주 40시간 근로 시 월 209시간 기준, 2024년 월 최저임금은 약 2,060,740원입니다. 수습 10% 감액 시에도 약 1,854,670원 이상을 받아야 합니다.',
      },
      {
        question: '수습기간 중 해고되면 체불 임금도 함께 청구할 수 있나요?',
        answer:
          '<strong>수습 해고 시 체불된 임금과 퇴직금(1년 이상 근무 시)을 함께 청구할 수 있습니다.</strong> 최저임금 차액, 연장근로수당, 주휴수당 미지급분을 모두 산출하여 고용노동부에 일괄 진정하세요.',
      },
    ],
    cta: {
      text: '수습 최저임금 위반 여부, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 신고 절차 5단계', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '포괄임금 연장근로 차이 안내', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '자발적 퇴사 실업급여 수급 조건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '부당해고 구제 절차 가이드', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 8. dismissal / dismissal-military-return-reinstatement-denied
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-military-return-reinstatement-denied',
    keyword: '군 복무 후 복직 거부 부당해고 구제',
    questionKeyword: '군 복무 후 복직을 거부당하면 부당해고인가요?',
    ctaKeyword: '군 복무 복직 거부 부당해고 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '군 복무 후 복직 거부 부당해고 구제 4단계 | 로앤가이드',
      description:
        '군 복무를 마치고 돌아왔는데 회사가 복직을 거부한다면 병역법상 보호와 부당해고 구제 절차를 지금 확인하세요',
    },
    intro:
      '<p>2년간의 군 복무를 마치고 회사에 복직 의사를 통보했습니다. 그런데 회사는 "이미 후임자가 있어서 자리가 없다", "조직 개편으로 부서가 사라졌다"며 복직을 거부합니다. 병역법에 근로관계 보호 규정이 있다고 들었는데, 구체적으로 어떤 보호를 받는지 모릅니다. 병역법상 복직 보장 의무와 부당해고 구제 절차를 정리해보세요.</p>',
    sections: [
      {
        title: '병역법상 복직 보장 의무의 구체적 내용',
        content:
          '<p><strong style="color:#1e3a5f">병역법 제74조에 따라 사용자는 군 복무를 마친 근로자를 지체 없이 복직시켜야 하며, 복직 거부는 원칙적으로 위법합니다.</strong></p>\n<ul>\n<li><strong>복직 의무</strong> — 병역법 제74조 제1항은 "직장 등의 장은 병역의무를 마치고 복직을 원하는 자를 지체 없이 복직시켜야 한다"고 규정합니다. 이는 강행규정으로 사용자의 재량이 없습니다</li>\n<li><strong>불이익 금지</strong> — 같은 조 제2항은 복직자에게 복무 기간을 근속기간에 산입하고, 복직 후 불이익한 처우를 해서는 안 된다고 규정합니다</li>\n<li><strong>원직 복직 원칙</strong> — 입영 전 담당하던 업무 또는 그에 상응하는 업무에 복직시켜야 합니다. "자리가 없다"는 이유만으로 복직을 거부할 수 없습니다</li>\n<li><strong>벌칙</strong> — 복직을 거부하면 병역법 제92조에 따라 2년 이하의 징역 또는 2,000만 원 이하의 벌금에 처해집니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 조직 개편, 인원 감축 등을 이유로 복직을 거부하더라도 병역법 위반이 됩니다. 동종·유사 업무에 복직시킬 의무가 있습니다</blockquote>',
      },
      {
        title: '복직 거부 시 부당해고 구제 절차 4단계',
        content:
          '<p><strong style="color:#1e3a5f">복직 거부는 부당해고에 해당하며, 노동위원회 구제신청과 병역법 위반 형사고소를 병행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계: 복직 요구 내용증명 발송</strong> — 회사에 병역법 제74조를 근거로 복직을 요구하는 내용증명을 보냅니다. 군 복무 기간, 전역일, 복직 의사 통보일을 명시합니다</li>\n<li><strong>2단계: 노동위원회 구제신청</strong> — 복직 거부일(해고일)부터 3개월 이내에 관할 지방노동위원회에 부당해고 구제신청을 합니다. 병역법 위반 사실을 주된 주장 근거로 제출합니다</li>\n<li><strong>3단계: 병역법 위반 형사고소</strong> — 관할 경찰서 또는 검찰에 사용자의 병역법 제92조 위반으로 형사고소합니다. 형사 절차가 진행되면 사용자에게 강한 압박이 됩니다</li>\n<li><strong>4단계: 임금 상당액 청구</strong> — 복직 거부 기간 동안의 임금 상당액을 민사소송으로 청구할 수 있습니다. 노동위원회 구제명령에 금전보상도 포함시킬 수 있습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 구제 전략을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '군 복무 기간의 근속기간 산입과 퇴직금',
        content:
          '<p><strong style="color:#1e3a5f">군 복무 기간은 근속기간에 산입되므로, 퇴직금과 연차휴가 산정 시 복무 기간이 포함됩니다.</strong></p>\n<ul>\n<li><strong>근속기간 통산</strong> — 병역법 제74조 제2항에 따라 군 복무 기간은 근속기간에 산입됩니다. 입사 후 2년 근무 → 2년 복무 → 복직 후 3년 근무 시 총 근속기간은 7년입니다</li>\n<li><strong>퇴직금 산정</strong> — 군 복무 기간이 포함된 총 근속기간을 기준으로 퇴직금을 산정합니다. 2년 복무 기간이 빠지면 퇴직금이 크게 줄어들 수 있으므로 반드시 확인하세요</li>\n<li><strong>연차유급휴가</strong> — 복직 후 연차휴가 일수도 군 복무 기간을 포함한 근속연수를 기준으로 산정됩니다</li>\n<li><strong>승진·승급</strong> — 군 복무를 이유로 동기 대비 승진·승급에서 불이익을 받아서는 안 됩니다. 불이익이 있으면 이 역시 병역법 위반에 해당합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 군 복무 기간 중에는 임금이 발생하지 않으므로, 퇴직금 산정 시 평균임금은 복직 후 실제 근무한 기간의 임금을 기준으로 합니다</blockquote>',
      },
      {
        title: '복직 후 불이익 처우 사례와 대응',
        content:
          '<p><strong style="color:#1e3a5f">복직시키더라도 의미 없는 보직을 주거나 퇴직을 종용하는 불이익 처우는 부당노동행위에 해당합니다.</strong></p>\n<ul>\n<li><strong>형식적 복직</strong> — 복직시키되 할 일 없는 부서로 배치하거나 아무 업무를 주지 않는 것은 실질적인 복직 거부와 다름없습니다. 부당 전보·배치로서 구제신청이 가능합니다</li>\n<li><strong>퇴직 종용</strong> — "군대 갔다 오더니 분위기를 모른다", "다른 곳을 알아보는 게 낫겠다"는 식의 퇴직 종용은 병역법 위반입니다. 대화 내용을 반드시 녹취하거나 문자로 남기세요</li>\n<li><strong>급여 차별</strong> — 동일 직급·동기 대비 낮은 급여를 지급하는 것도 불이익 처우에 해당합니다</li>\n<li><strong>구제 방법</strong> — 노동위원회에 부당 전보·배치에 대한 구제신청을 하거나, 고용노동부에 차별 시정을 요구할 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구제절차에서 피신청인 변경과 제척기간',
        summary:
          '대법원 2024두32973 사건(대법원, 2024.07.25 선고)에서 법원은 부당해고 구제절차에서 최초 구제신청의 대상이 된 불이익처분을 다투는 범위에서 피신청인의 추가·변경이 허용되며, 제척기간은 최초 구제신청 시점을 기준으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '군 복무 후 복직 거부 시 구제신청을 할 때, 사업주 표시가 부정확하더라도 최초 신청 시점에 3개월 이내라면 피신청인을 보정하여 구제를 받을 수 있습니다. 우선 기한 내에 신청하는 것이 가장 중요합니다.',
      },
    ],
    faq: [
      {
        question: '복직 의사 통보는 전역 후 언제까지 해야 하나요?',
        answer:
          '<strong>병역법에 구체적 기한 규정은 없으나 전역 후 합리적 기간 내에 통보해야 합니다.</strong> 판례는 전역 후 30일 이내에 복직 의사를 통보한 경우 합리적이라고 판단하는 경향입니다. 전역 즉시 내용증명으로 복직 의사를 표시하는 것이 안전합니다.',
      },
      {
        question: '회사가 복직 시점을 계속 미루면 어떻게 하나요?',
        answer:
          '<strong>병역법상 "지체 없이" 복직시켜야 하므로 합리적 사유 없는 지연은 복직 거부에 해당합니다.</strong> 내용증명으로 복직 기한을 설정하고, 기한 내 미이행 시 노동위원회 구제신청과 형사고소를 병행하세요.',
      },
      {
        question: '군 복무 중 회사가 폐업하면 어떻게 되나요?',
        answer:
          '<strong>회사 폐업 시 복직 자체가 불가능하므로 퇴직금과 체불 임금을 청구해야 합니다.</strong> 군 복무 기간이 근속기간에 포함되므로 해당 기간까지 합산한 퇴직금을 받을 수 있습니다. 폐업 시 고용노동부 체당금 제도를 활용할 수 있습니다.',
      },
      {
        question: '계약직이었는데 군 복무 중 계약이 만료되면 복직 대상인가요?',
        answer:
          '<strong>계약기간이 군 복무 중 만료된 경우에는 복직 의무가 없을 수 있습니다.</strong> 다만 계약 갱신의 합리적 기대가 있었고 군 복무가 아니었다면 갱신되었을 것으로 볼 수 있는 경우에는 복직을 다툴 여지가 있습니다.',
      },
      {
        question: '병역법 위반으로 고소하면 복직이 바로 되나요?',
        answer:
          '<strong>형사고소 자체로 복직이 강제되지는 않으나 강력한 압박 수단이 됩니다.</strong> 실무상 형사고소가 진행되면 사용자가 복직에 응하는 경우가 많습니다. 원직복직을 직접 강제하려면 노동위원회 구제명령이나 법원 판결이 필요합니다.',
      },
    ],
    cta: {
      text: '군 복무 후 복직 거부, AI가 구제 전략 분석해드립니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차 가이드', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 당했을 때 대응 가이드', href: '/guide/dismissal/dismissal-fired-response-guide' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '실업급여 전체 절차 가이드', href: '/guide/unemployment/unemployment-full-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 9. dismissal / dismissal-probation-repeated-extension-unfair
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-repeated-extension-unfair',
    keyword: '수습기간 반복 연장 부당해고 판단 기준',
    questionKeyword: '수습기간이 계속 연장되면 부당해고를 주장할 수 있나요?',
    ctaKeyword: '수습 반복 연장 부당해고 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수습기간 반복 연장 부당해고 판단 5가지 기준 | 로앤가이드',
      description:
        '수습기간이 반복 연장되면서 언제 정규직이 되는지 모르겠다면 적법 요건과 부당해고 판단 기준을 지금 확인하세요',
    },
    intro:
      '<p>입사한 지 9개월이 지났는데 아직도 "수습"입니다. 처음 3개월이었던 수습기간이 3개월씩 두 번 연장되었습니다. 연장 사유에 대한 설명도 없고, "좀 더 지켜보자"는 말만 반복됩니다. 수습기간을 무한정 연장하는 것이 합법인지, 이대로 해고되면 부당해고인지 판단이 되지 않습니다. 수습기간 연장의 적법 요건을 확인해보세요.</p>',
    sections: [
      {
        title: '수습기간의 법적 성격과 적법한 기간',
        content:
          '<p><strong style="color:#1e3a5f">수습기간은 근로자의 업무 적격성을 평가하기 위한 시용기간으로, 합리적 범위를 넘는 장기 수습은 위법합니다.</strong></p>\n<ul>\n<li><strong>수습의 의미</strong> — 수습(시용)은 정규직 채용을 전제로 업무 능력과 적응력을 평가하는 기간입니다. 근로계약 자체는 성립한 상태이므로 수습 근로자도 근로기준법의 보호를 받습니다</li>\n<li><strong>일반적 기간</strong> — 법률에 수습기간의 상한을 직접 규정하고 있지는 않으나, 판례와 행정해석은 3~6개월을 합리적 기간으로 봅니다. 업무의 전문성에 따라 6개월까지는 인정될 수 있습니다</li>\n<li><strong>해고 보호 수준</strong> — 수습 중 해고는 "정당한 이유"보다 완화된 기준이 적용되지만, 그래도 객관적으로 합리적인 이유가 있어야 합니다. 수습기간이 길어질수록 정규직과 동일한 해고 보호 기준이 적용됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 수습기간이 6개월을 넘으면 정규직 전환을 하지 않는 것 자체가 부당해고의 소지가 있습니다</blockquote>',
      },
      {
        title: '수습기간 연장이 적법하려면 갖춰야 할 5가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">수습기간 연장은 아래 5가지 요건을 모두 충족해야 적법합니다. 하나라도 빠지면 부당합니다.</strong></p>\n<ol>\n<li><strong>근로계약서에 연장 가능성 명시</strong> — 최초 근로계약서에 "수습기간은 ○개월로 하되 업무 적응 상태에 따라 ○개월 연장할 수 있다"는 조항이 있어야 합니다</li>\n<li><strong>연장 사유의 구체적 통지</strong> — 어떤 업무 능력이 부족한지, 어떤 평가 기준을 충족하지 못했는지 구체적인 사유를 서면으로 통지해야 합니다</li>\n<li><strong>근로자의 동의</strong> — 수습기간 연장은 근로조건의 변경이므로 근로자의 동의가 필요합니다. 일방적 통보는 효력이 없습니다</li>\n<li><strong>합리적 연장 기간</strong> — 연장 기간이 합리적이어야 합니다. 한 번에 3개월 이내가 일반적이며, 총 수습기간이 6개월을 넘기면 정당성이 의심됩니다</li>\n<li><strong>개선 기회 부여</strong> — 부족한 부분에 대한 교육, 멘토링, 피드백 등 업무 능력 개선 기회를 실질적으로 제공해야 합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 수습 연장이 적법한지 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수습 해고가 부당해고에 해당하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">수습기간이라도 해고에는 객관적이고 합리적인 이유가 있어야 하며, 다음의 경우 부당해고로 판단됩니다.</strong></p>\n<ul>\n<li><strong>평가 기준 부재</strong> — 수습 평가 기준이 사전에 제시되지 않았거나, 평가를 실시하지 않고 해고한 경우</li>\n<li><strong>개선 기회 미부여</strong> — 업무 능력이 부족하다면서 교육이나 시정 기회를 주지 않고 바로 해고한 경우</li>\n<li><strong>차별적 해고</strong> — 같은 수습 기간에 입사한 동기는 정규직 전환하면서 특정 근로자만 해고한 경우, 합리적 이유가 필요합니다</li>\n<li><strong>부당한 연장 후 해고</strong> — 수습기간을 부당하게 연장한 후 해고한 경우, 연장 자체가 무효이므로 정규직에 대한 해고 기준이 적용됩니다</li>\n<li><strong>절차 위반</strong> — 30일 전 해고예고를 하지 않은 경우(3개월 이상 근속). 3개월 미만 수습은 해고예고 적용이 제외됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 수습 3개월 이내라도 근로기준법 제23조의 정당한 이유 없는 해고 금지는 적용됩니다. 다만 판단 기준이 정규직보다 완화될 뿐입니다</blockquote>',
      },
      {
        title: '부당해고 구제신청과 권리 보호',
        content:
          '<p><strong style="color:#1e3a5f">수습 해고가 부당하다고 판단되면 해고일부터 3개월 이내에 노동위원회에 구제신청을 합니다.</strong></p>\n<ul>\n<li><strong>구제신청 기한</strong> — 해고를 통보받은 날부터 3개월 이내에 관할 지방노동위원회에 구제신청서를 제출합니다</li>\n<li><strong>준비 서류</strong> — 근로계약서, 수습기간 연장 통지서, 수습 평가서(있는 경우), 해고 통보 문서, 급여명세서, 업무 관련 커뮤니케이션 기록을 제출합니다</li>\n<li><strong>구제명령</strong> — 부당해고로 인정되면 원직복직 명령 또는 금전보상(해고기간 임금 상당액 이상) 명령이 내려집니다</li>\n<li><strong>실업급여</strong> — 구제신청 중에도 실업급여를 신청할 수 있습니다. 수습 해고는 비자발적 이직에 해당하므로 수급 자격이 됩니다(피보험기간 180일 충족 시)</li>\n<li><strong>해고예고수당</strong> — 3개월 이상 근속한 수습 근로자가 해고예고 없이 즉시 해고되었다면 30일분의 해고예고수당을 별도로 청구할 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령 후 수습 해고와 구제이익',
        summary:
          '대법원 2024두40493 사건(대법원, 2024.09.13 선고)에서 법원은 대기발령은 일시적으로 직위를 부여하지 않는 잠정적 조치이며, 취업규칙에서 대기발령에 따라 승진·승급에 제한을 가하는 법률상 불이익을 규정하고 있으면 대기발령이 실효되더라도 그 구제를 신청할 이익이 있다고 판시했습니다.',
        takeaway:
          '수습기간 연장 중 대기발령이나 직무배제를 당한 경우에도 그로 인한 법률상 불이익이 있으면 구제신청이 가능합니다. 수습 연장 자체가 불이익 처분에 해당할 수 있으므로 적극적으로 권리를 주장하세요.',
      },
    ],
    faq: [
      {
        question: '수습기간 연장에 동의하지 않으면 바로 해고되나요?',
        answer:
          '<strong>연장 거부 자체가 해고 사유가 될 수는 없습니다.</strong> 연장을 거부하면 수습기간이 종료되어 정규직으로 전환되는 것이 원칙입니다. 회사가 연장 거부를 이유로 해고하면 부당해고에 해당합니다.',
      },
      {
        question: '수습기간이 1년 넘게 연장된 경우는 어떻게 되나요?',
        answer:
          '<strong>1년을 초과하는 수습기간은 사회 통념상 합리적 범위를 벗어난 것으로 판단될 가능성이 매우 높습니다.</strong> 이 경우 정규직에 준하는 해고 보호를 받으며, 수습 해고가 아닌 정규직 부당해고 기준이 적용됩니다.',
      },
      {
        question: '수습기간 중 퇴직하면 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>총 재직기간이 1년 이상이고 주 15시간 이상 근로했다면 퇴직금을 받을 수 있습니다.</strong> 수습기간이 반복 연장되어 1년을 넘었다면 퇴직금 수급 요건을 충족합니다.',
      },
      {
        question: '수습 연장 통보를 구두로만 받았는데 효력이 있나요?',
        answer:
          '<strong>구두 통보도 효력이 있을 수 있으나, 분쟁 시 사용자가 연장 사유와 근로자 동의를 입증해야 합니다.</strong> 서면 통지 없이 구두로만 연장한 경우 연장의 적법성을 다투기 유리합니다. 구두 통보 내용을 녹취하거나 문자로 확인을 요청해두세요.',
      },
      {
        question: '수습 해고 시 해고예고수당은 반드시 받을 수 있나요?',
        answer:
          '<strong>3개월 이상 계속 근로한 수습 근로자에게는 해고예고의무가 적용됩니다.</strong> 근로기준법 제35조 단서에 따라 3개월 미만 수습 근로자는 예외이지만, 수습이 반복 연장되어 3개월을 넘겼다면 30일 전 해고예고 또는 해고예고수당(30일분 통상임금)을 받아야 합니다.',
      },
    ],
    cta: {
      text: '수습 반복 연장 부당해고 여부, AI가 분석해드립니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차 가이드', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 당했을 때 대응 가이드', href: '/guide/dismissal/dismissal-fired-response-guide' },
      { label: '수습 최저임금 위반 구제', href: '/guide/wage/unpaid-wage-probation-minimum-wage-violation' },
      { label: '자발적 퇴사 실업급여 수급 조건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },
];
