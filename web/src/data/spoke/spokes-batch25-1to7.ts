import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [자진퇴사를 고려하는 근로자]의 [어떤 사유가 실업급여 인정이 쉬운지 모르는 상황]에서 [인정 확률 높은 자진퇴사 사유 정리]를 돕는 페이지다.
// 2. 이 페이지는 [실업급여 수급 중 재취업한 근로자]의 [남은 급여 처리 방법을 모르는 상황]에서 [조기재취업수당과 잔여 급여 안내]를 돕는 페이지다.
// 3. 이 페이지는 [계약직 만료된 근로자]의 [실업급여 신청 순서를 모르는 상황]에서 [계약 만료 후 단계별 신청 절차 안내]를 돕는 페이지다.
// 4. 이 페이지는 [실업급여 수급기간이 부족한 근로자]의 [연장 가능 여부를 모르는 상황]에서 [수급기간 연장 사유와 신청 방법 안내]를 돕는 페이지다.
// 5. 이 페이지는 [실업급여를 받고 있는 구직자]의 [어떤 행위가 부정수급인지 모르는 상황]에서 [적발 빈도 높은 부정수급 사례 5가지 안내]를 돕는 페이지다.
// 6. 이 페이지는 [실업급여 신청을 준비하는 근로자]의 [필요 서류를 한눈에 정리하고 싶은 상황]에서 [신청 시 필수 서류 체크리스트 제공]을 돕는 페이지다.
// 7. 이 페이지는 [이직확인서를 받지 못하는 근로자]의 [회사가 이직확인서 발급을 거부하는 상황]에서 [대응 방법과 고용센터 직권 확인 절차 안내]를 돕는 페이지다.

export const spokesBatch25_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. unemployment / voluntary-quit-easy-approval-reasons
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'voluntary-quit-easy-approval-reasons',
    keyword: '자진퇴사 실업급여 인정 쉬운 사유 7가지',
    questionKeyword: '자진퇴사인데 실업급여 인정받기 쉬운 사유는 뭐가 있나요?',
    ctaKeyword: '자진퇴사 실업급여 인정 사유 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '자진퇴사 실업급여 인정 쉬운 사유 7가지 정리 | 로앤가이드',
      description:
        '스스로 퇴사했는데 실업급여를 받을 수 있는지 고민이라면 인정 확률 높은 자진퇴사 사유 7가지를 지금 확인하세요',
    },
    intro:
      '<p>회사가 너무 힘들어서 그만뒀는데, 실업급여는 자진퇴사면 못 받는다고 들었습니다. 하지만 고용보험법은 "정당한 이직 사유"가 있으면 자진퇴사도 실업급여를 인정하고 있습니다. 문제는 어떤 사유가 실제로 인정받기 쉬운지 아는 사람이 거의 없다는 것입니다. 실무에서 인정률이 높은 자진퇴사 사유 7가지를 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '인정률 높은 자진퇴사 사유 4가지: 근로조건 위반형',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따르면 사업주의 귀책사유로 퇴사한 경우 수급자격이 인정됩니다. 아래 4가지는 실무에서 인정률이 특히 높습니다.</strong></p>\n<ol>\n<li><strong>임금 체불·지연</strong> — 2개월 이상 임금을 제때 받지 못한 경우. 통장 내역과 근로계약서만 있으면 거의 인정됩니다</li>\n<li><strong>최저임금 미달</strong> — 시급이 최저임금보다 낮은 경우. 급여명세서 또는 근로계약서가 증거가 됩니다</li>\n<li><strong>근로조건 일방 변경</strong> — 계약 당시와 다르게 근무지·직종·근로시간을 사업주가 일방적으로 변경한 경우</li>\n<li><strong>직장 내 괴롭힘</strong> — 근로기준법 제76조의2에 해당하는 직장 내 괴롭힘이 지속되고, 회사가 적절한 조치를 하지 않은 경우</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위 4가지 사유는 증빙만 확보하면 고용센터에서 대부분 인정하므로, 퇴사 전 증거 확보가 가장 중요합니다</blockquote>',
      },
      {
        title: '인정률 높은 자진퇴사 사유 3가지: 개인 사정형',
        content:
          '<p><strong style="color:#1e3a5f">사업주 귀책이 아니더라도 아래 3가지 개인 사정은 정당한 이직 사유로 인정받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>통근 곤란</strong> — 회사 이전 등으로 편도 통근 시간이 3시간 이상이 된 경우. 지도 앱 캡처와 대중교통 경로를 증빙으로 제출합니다</li>\n<li><strong>본인 건강 악화</strong> — 업무를 계속할 수 없을 정도의 질병·부상이 있는 경우. 의사 소견서에 "업무 지속 곤란" 문구가 있으면 인정률이 높아집니다</li>\n<li><strong>가족 돌봄</strong> — 부모·배우자·자녀의 질병·부상으로 30일 이상 돌봄이 필요한 경우. 가족관계증명서와 진단서를 함께 제출합니다</li>\n</ul>\n<p>개인 사정형은 "본인의 노력으로도 해결이 불가능했다"는 점을 증명해야 인정받기 쉬워집니다. 퇴사 전 회사에 근무시간 조정, 휴직 등을 요청한 기록이 있으면 더욱 유리합니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 자진퇴사 사유별 인정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자진퇴사 실업급여 신청 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">사유가 해당되더라도 증거 없이 신청하면 "자발적 퇴사"로 분류되어 급여가 거부될 수 있습니다.</strong></p>\n<ul>\n<li><strong>퇴사 전 증거 확보</strong> — 임금 체불은 통장 내역, 괴롭힘은 녹음·문자, 통근 곤란은 이동 경로 캡처를 미리 저장하세요</li>\n<li><strong>사직서 문구 주의</strong> — "일신상의 사유"로 적으면 자발적 퇴사로 처리됩니다. "임금 체불로 인한 퇴사" 등 구체적 사유를 명시하세요</li>\n<li><strong>이직확인서 이직 사유 확인</strong> — 회사가 이직확인서에 "자기 사정"으로 기재하면 수급이 거부됩니다. 발급 후 반드시 이직 사유란을 확인하고, 잘못 기재된 경우 고용센터에 이의신청하세요</li>\n<li><strong>퇴사 후 12개월 이내 신청</strong> — 이직일 다음 날부터 12개월이 지나면 남은 소정급여일수에 관계없이 수급 자격이 소멸합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사직서에 "개인 사정"이라고만 적으면 나중에 정당한 이직 사유를 증명하기 어려워지므로, 구체적 사유를 반드시 기재하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부서이동 거부 퇴사 시 수급자격 인정 여부',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 회사의 일방적인 부서이동 명령을 거부하고 퇴사한 근로자에 대해 수급자격 인정 여부를 심리하며, 근로조건의 일방적 변경이 정당한 이직 사유에 해당하는지를 판단했습니다.',
        takeaway:
          '사업주가 근로계약과 다르게 근무조건을 일방적으로 변경한 경우, 이를 이유로 퇴사하더라도 실업급여 수급자격이 인정될 수 있으므로 변경 통보 내용을 증거로 확보하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '사직서에 "일신상의 사유"라고 이미 적었는데 바꿀 수 있나요?',
        answer:
          '<strong>사직서 제출 후라도 실제 퇴사 사유를 증빙할 수 있다면 고용센터에서 정당한 이직 사유로 재판단할 수 있습니다.</strong> 임금 체불 내역, 괴롭힘 증거 등을 고용센터 상담 시 함께 제출하면 사직서 문구와 관계없이 실질적 사유를 기준으로 판단합니다.',
      },
      {
        question: '임금이 1개월만 밀려도 자진퇴사 실업급여가 되나요?',
        answer:
          '<strong>원칙적으로 2개월 이상 체불되어야 정당한 이직 사유로 인정됩니다.</strong> 다만 체불 금액이 크거나 상습적으로 지연 지급한 이력이 있다면 1개월이라도 인정받을 가능성이 있으므로, 통장 내역을 기준으로 지급 지연 패턴을 함께 정리해서 제출하세요.',
      },
      {
        question: '직장 내 괴롭힘으로 퇴사할 때 증거가 없으면 어떻게 하나요?',
        answer:
          '<strong>녹음이나 문자가 없어도 목격자 진술서, 사내 신고 이력, 병원 진료기록 등 간접 증거를 조합하면 인정받을 수 있습니다.</strong> 퇴사 전 회사 인사팀에 괴롭힘 신고를 하고, 그 접수 확인서를 받아두는 것도 중요한 증거가 됩니다.',
      },
      {
        question: '통근 시간이 2시간인데 3시간 미만이면 안 되나요?',
        answer:
          '<strong>편도 3시간 이상이 기준이지만, 대중교통이 현저히 불편하거나 야간 근무로 귀가가 어려운 경우 종합적으로 판단합니다.</strong> 회사 이전 전후의 통근 시간 비교 자료와 대중교통 시간표를 함께 제출하면 유리합니다.',
      },
      {
        question: '자진퇴사 후 실업급여 신청 시 대기기간이 더 긴가요?',
        answer:
          '<strong>정당한 이직 사유로 인정되면 일반 이직과 동일하게 7일의 대기기간만 적용됩니다.</strong> 정당한 사유 없이 자진퇴사한 경우에는 1~3개월의 급여 제한 기간이 추가될 수 있으므로, 사유 인정 여부가 핵심입니다.',
      },
    ],
    cta: {
      text: '자진퇴사 사유별 실업급여 인정 가능성, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 조건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여 5가지 사유', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 신청 필수 서류 정리', href: '/guide/unemployment/application-required-documents-checklist' },
      { label: '이직확인서 안 보내주는 회사 대응법', href: '/guide/unemployment/employer-wont-send-employment-verification' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. unemployment / reemployment-during-benefits-remaining
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'reemployment-during-benefits-remaining',
    keyword: '실업급여 수급 중 재취업 남은 급여 처리',
    questionKeyword: '실업급여 수급 중 재취업하면 남은 급여는 어떻게 되나요?',
    ctaKeyword: '재취업 후 잔여 실업급여 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '실업급여 중 재취업하면 남은 급여 3가지 처리법 | 로앤가이드',
      description:
        '실업급여를 받다가 취업하게 됐는데 남은 급여가 사라지는 건 아닌지 걱정된다면 3가지 처리 방법을 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 받던 중 면접을 보고 합격 통보를 받았습니다. 기쁘지만 한편으로는 남은 수급일수가 90일이나 남아 있어 아깝다는 생각이 듭니다. 재취업하면 남은 급여를 그냥 포기해야 하는 건지, 아니면 다른 방법이 있는 건지 궁금합니다. 상황에 따라 조기재취업수당을 받거나 재실직 시 잔여일수를 활용할 수 있으니 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '조기재취업수당: 남은 급여의 절반을 일시금으로',
        content:
          '<p><strong style="color:#1e3a5f">소정급여일수를 절반 이상 남기고 재취업하면 남은 급여일수의 절반을 조기재취업수당으로 일시금 수령할 수 있습니다.</strong></p>\n<ul>\n<li><strong>지급 요건</strong> — 소정급여일수의 절반 이상을 남기고 12개월 이상 고용이 보장되는 직장에 재취업해야 합니다</li>\n<li><strong>지급 금액</strong> — 미지급 잔여일수 × 1일 구직급여액 × 1/2. 예를 들어 잔여 90일, 일일 6만 원이면 약 270만 원을 받을 수 있습니다</li>\n<li><strong>신청 방법</strong> — 재취업 후 고용보험 홈페이지 또는 관할 고용센터에 조기재취업수당 청구서를 제출합니다. 재취업일로부터 12개월 이내에 신청해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자영업 창업도 조기재취업수당 대상이 될 수 있으며, 사업자등록 후 12개월 이상 사업을 영위해야 지급됩니다</blockquote>',
      },
      {
        title: '재취업 후 다시 실직하면 잔여일수 활용 가능',
        content:
          '<p><strong style="color:#1e3a5f">조기재취업수당을 받지 않은 상태에서 다시 실직하면 이전 수급자격의 잔여일수를 이어서 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>잔여일수 활용 조건</strong> — 조기재취업수당을 수령하지 않았고, 기존 수급 자격의 수급기간(이직일 다음 날부터 12개월) 내에 다시 실직한 경우</li>\n<li><strong>새로운 수급 자격과의 관계</strong> — 재취업 기간이 짧아 새 수급 자격(피보험기간 180일 이상)을 충족하지 못하면 기존 잔여일수로 급여를 받습니다</li>\n<li><strong>새 수급 자격 충족 시</strong> — 재취업 기간이 길어 새 수급 자격 요건을 충족하면 기존 잔여일수가 아닌 새 수급 자격으로 급여를 받습니다</li>\n</ul>\n<p>단, 기존 수급자격의 수급기간(12개월)이 경과한 후에는 잔여일수를 사용할 수 없으므로 시점 관리가 중요합니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 조기재취업수당 해당 여부와 수령액을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재취업 시 반드시 해야 할 신고와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">재취업 사실을 신고하지 않고 계속 실업급여를 받으면 부정수급으로 처벌받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>취업 신고 의무</strong> — 재취업일 전날까지의 미지급 구직급여를 청구하고, 취업 사실을 반드시 고용센터에 신고해야 합니다</li>\n<li><strong>부정수급 위험</strong> — 취업 후에도 실업 인정을 받으면 부정수급에 해당하여 지급받은 금액의 2배를 추가로 반환해야 합니다(총 3배 환수)</li>\n<li><strong>일용직·프리랜서 주의</strong> — 3일 미만의 일용 근로나 월 60시간 미만의 단시간 근로는 취업으로 보지 않을 수 있으나, 반드시 실업 인정 신청 시 근로 사실을 기재해야 합니다</li>\n<li><strong>조기재취업수당 신청 시점</strong> — 재취업 후 12개월이 경과해야 수당 청구가 가능합니다. 12개월 내에 퇴사하면 수당을 받을 수 없으니 고용 안정성을 확인하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 조기재취업수당을 이미 수령한 경우, 해당 수급 자격의 잔여일수는 소멸되므로 다시 실직해도 기존 잔여일수를 쓸 수 없습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 복직 시 구직급여 회수 사례',
        summary:
          '대구지법 2014구합1590 사건(대구지방법원, 2014.12.24 선고)에서 법원은 부당해고로 구직급여를 수급하던 근로자가 복직된 경우 이미 지급된 구직급여의 반환 여부를 심리하며, 복직으로 실업 상태가 해소된 시점 이후의 급여는 환수 대상이라고 판단했습니다.',
        takeaway:
          '재취업이나 복직 시점 이후에 받은 구직급여는 반환해야 하므로, 취업 사실을 즉시 신고하고 조기재취업수당 등 정당한 혜택을 챙기는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '조기재취업수당은 언제 신청할 수 있나요?',
        answer:
          '<strong>재취업한 날부터 12개월이 경과한 후에 신청할 수 있습니다.</strong> 12개월간 계속 고용 상태를 유지해야 하며, 12개월 이내에 퇴사하면 수당 자격이 소멸됩니다. 자영업의 경우에도 12개월 이상 사업을 영위해야 합니다.',
      },
      {
        question: '재취업 후 수습 기간 중 해고되면 어떻게 되나요?',
        answer:
          '<strong>조기재취업수당을 아직 수령하지 않았다면 기존 잔여일수를 활용할 수 있습니다.</strong> 단, 기존 수급기간(이직일부터 12개월) 이내여야 하며, 수습 해고로 새 수급 자격(피보험기간 180일 이상)이 안 되면 기존 잔여 급여를 이어받습니다.',
      },
      {
        question: '아르바이트를 시작하면 재취업으로 간주되나요?',
        answer:
          '<strong>월 60시간 이상 근로하거나 3개월 이상 계속 근무하면 취업으로 간주됩니다.</strong> 단시간 일용직은 취업으로 보지 않을 수 있으나, 실업 인정 시 해당 근로 사실과 소득을 반드시 신고해야 부정수급을 피할 수 있습니다.',
      },
      {
        question: '조기재취업수당과 남은 실업급여 중 뭐가 더 유리한가요?',
        answer:
          '<strong>잔여일수의 절반만 수당으로 받으므로, 금액만 보면 실업급여를 끝까지 받는 것이 많습니다.</strong> 하지만 빠른 재취업으로 경력 공백을 줄이고 소득을 확보하는 것이 장기적으로 유리할 수 있으므로, 급여액과 재취업 조건을 함께 비교해보세요.',
      },
      {
        question: '자영업 창업도 조기재취업수당 대상이 되나요?',
        answer:
          '<strong>사업자등록을 하고 12개월 이상 사업을 영위하면 조기재취업수당을 받을 수 있습니다.</strong> 다만 실업급여 수급 전부터 준비하던 사업이거나, 수급 중 사업을 시작하면서 신고하지 않은 경우에는 부정수급에 해당할 수 있으니 주의하세요.',
      },
    ],
    cta: {
      text: '재취업 후 남은 실업급여 처리 방법, AI가 안내해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 기간과 지급액', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
      { label: '실업급여 부정수급 대표 사례 5가지', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
      { label: '실업급여 수급기간 연장 사유', href: '/guide/unemployment/benefit-period-extension-cases' },
      { label: '실업급여 수급 조건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '부당해고 구제 신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. unemployment / contract-expiry-benefit-application-order
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'contract-expiry-benefit-application-order',
    keyword: '계약직 만료 실업급여 신청 순서 5단계',
    questionKeyword: '계약직 만료 후 실업급여 신청 순서가 어떻게 되나요?',
    ctaKeyword: '계약직 만료 실업급여 신청 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약직 만료 후 실업급여 신청 순서 5단계 정리 | 로앤가이드',
      description:
        '계약직 만료됐는데 실업급여를 어디서부터 신청해야 할지 모르겠다면 5단계 신청 순서를 지금 확인하세요',
    },
    intro:
      '<p>1년 계약직으로 근무했는데 계약이 만료되어 더 이상 출근하지 않게 됐습니다. 회사에서는 "계약 끝"이라고만 하고, 실업급여를 받을 수 있는지 어떤 절차를 밟아야 하는지 아무 안내도 없습니다. 계약직 만료는 비자발적 이직에 해당하므로 실업급여 수급 자격이 인정되는 대표적인 사유입니다. 단, 신청 순서를 제대로 밟지 않으면 지급이 지연될 수 있으니 5단계를 확인해보세요.</p>',
    sections: [
      {
        title: '1~2단계: 이직확인서 확보와 워크넷 구직 등록',
        content:
          '<p><strong style="color:#1e3a5f">계약 만료 후 가장 먼저 해야 할 일은 이직확인서를 받고 워크넷에 구직 등록하는 것입니다.</strong></p>\n<ol>\n<li><strong>1단계: 이직확인서 발급 요청</strong> — 퇴사 후 회사에 이직확인서 발급을 요청합니다. 사업주는 피보험자격 상실 신고 시 이직확인서를 고용센터에 제출해야 할 의무가 있습니다. 이직 사유가 "계약 만료(기간만료)"로 정확히 기재되었는지 확인하세요</li>\n<li><strong>2단계: 워크넷 구직 등록</strong> — 고용보험 홈페이지(www.ei.go.kr) 또는 워크넷(www.work.go.kr)에 접속하여 구직 등록을 합니다. 구직 등록 없이는 실업급여 신청이 불가합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이직확인서에 이직 사유가 "자기 사정"으로 잘못 기재되면 수급이 거부될 수 있으므로, 발급 후 반드시 사유란을 확인하세요</blockquote>',
      },
      {
        title: '3~4단계: 수급자격 교육과 실업 인정',
        content:
          '<p><strong style="color:#1e3a5f">구직 등록 후 수급자격 인정 교육을 이수하고, 정해진 일정에 따라 실업 인정을 받아야 합니다.</strong></p>\n<ul>\n<li><strong>3단계: 수급자격 인정 교육(온라인)</strong> — 고용보험 홈페이지에서 약 1시간 분량의 온라인 교육을 이수합니다. 교육 후 관할 고용센터에 방문하여 수급자격 인정 신청서를 제출합니다</li>\n<li><strong>4단계: 실업 인정(1~4주 간격)</strong> — 지정된 실업 인정일에 고용센터에 출석하거나 온라인으로 구직활동 내역을 신고합니다. 1차 인정일은 수급자격 인정 후 1~4주 내에 지정됩니다</li>\n</ul>\n<p>계약직 만료의 경우 비자발적 이직이므로 대기기간 7일만 적용됩니다. 자진퇴사와 달리 1~3개월의 급여 제한 기간이 없습니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 계약직 만료 후 실업급여 수급 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '5단계: 급여 수령과 계약직 특유의 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">실업 인정이 완료되면 2주 이내에 지정 계좌로 구직급여가 입금되며, 계약직 특유의 몇 가지 주의사항이 있습니다.</strong></p>\n<ul>\n<li><strong>5단계: 급여 수령 확인</strong> — 실업 인정 후 통상 2~3영업일 내에 입금됩니다. 고용보험 홈페이지에서 지급 내역을 조회할 수 있습니다</li>\n<li><strong>피보험기간 180일 확인</strong> — 계약 기간이 6개월 미만이면 피보험기간 180일을 충족하지 못해 수급 자격이 안 될 수 있습니다. 이전 직장의 피보험기간을 합산할 수 있으니 확인하세요</li>\n<li><strong>재계약 거부 시</strong> — 회사가 재계약을 제안했는데 근로자가 거부한 경우, 자발적 이직으로 분류될 수 있습니다. 다만 근로조건이 현저히 불리하게 변경된 재계약 제안은 거부해도 비자발적 이직으로 인정됩니다</li>\n<li><strong>수급기간 계산</strong> — 계약직 만료 후 12개월 이내에 소정급여일수를 모두 소진해야 합니다. 신청이 늦어지면 받을 수 있는 일수가 줄어드니 가능한 빨리 신청하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 같은 사업장에서 계약 만료와 재계약을 반복한 경우, 고용센터에서 실질적 이직 여부를 별도 심사할 수 있으므로 계약서를 보관해두세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임기제 공무원 고용보험 가입 3개월 경과 사례',
        summary:
          '광주고법 2018누1338 사건(광주고등법원, 2018.10.24 선고)에서 법원은 임기제 공무원이 고용보험 가입 신청 기한(3개월)을 경과한 사안을 심리하며, 기간 제한의 해석과 가입 자격 인정 범위를 판단했습니다.',
        takeaway:
          '계약직·임기제 근로자도 고용보험 가입 대상이며, 가입 기한을 놓치면 실업급여 수급에 영향을 줄 수 있으므로 입사 즉시 고용보험 가입 여부를 확인하세요.',
      },
    ],
    faq: [
      {
        question: '계약직 6개월 미만인데 실업급여를 받을 수 있나요?',
        answer:
          '<strong>현재 직장의 피보험기간이 6개월 미만이라도 이전 직장의 기간을 합산하여 180일을 충족하면 수급 자격이 됩니다.</strong> 고용보험 홈페이지에서 피보험기간 조회를 통해 총 합산 기간을 확인해보세요.',
      },
      {
        question: '회사가 재계약을 제안했는데 조건이 나빠서 거절하면 실업급여가 안 되나요?',
        answer:
          '<strong>근로조건이 이전 계약보다 현저히 불리하게 변경된 경우에는 거절해도 비자발적 이직으로 인정됩니다.</strong> 임금 삭감, 근무지 변경, 직종 변경 등이 해당하며, 변경된 계약 조건을 증빙할 수 있는 서류를 보관하세요.',
      },
      {
        question: '계약 만료 후 바로 다른 계약직에 취업하면 실업급여는 못 받나요?',
        answer:
          '<strong>재취업하면 실업급여를 받을 수 없지만, 조기재취업수당 요건을 충족하면 잔여 급여의 절반을 수당으로 받을 수 있습니다.</strong> 다만 재취업 직장에서 12개월 이상 고용이 유지되어야 합니다.',
      },
      {
        question: '이직확인서를 회사가 안 보내주면 어떻게 하나요?',
        answer:
          '<strong>사업주가 10일 이내에 이직확인서를 제출하지 않으면 고용센터에 직권 확인을 요청할 수 있습니다.</strong> 고용센터(1350)에 전화하여 사업주 미제출을 신고하면, 고용센터가 직접 사업주에게 제출을 독촉하고 과태료를 부과할 수 있습니다.',
      },
      {
        question: '파견직이 계약 만료되면 파견회사와 사용회사 중 어디서 이직확인서를 받나요?',
        answer:
          '<strong>파견근로자의 사업주는 파견회사이므로 파견회사에서 이직확인서를 발급받아야 합니다.</strong> 사용회사는 근로계약 당사자가 아니므로 이직확인서 발급 의무가 없습니다. 파견회사 인사팀에 연락하세요.',
      },
    ],
    cta: {
      text: '계약직 만료 후 실업급여 신청 절차, AI가 안내해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '계약만료 실업급여 수급 요건', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
      { label: '실업급여 신청 필수 서류', href: '/guide/unemployment/application-required-documents-checklist' },
      { label: '이직확인서 안 보내주는 회사 대응법', href: '/guide/unemployment/employer-wont-send-employment-verification' },
      { label: '퇴사 후 실업급여 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. unemployment / benefit-period-extension-cases
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'benefit-period-extension-cases',
    keyword: '실업급여 수급기간 연장 가능한 4가지 경우',
    questionKeyword: '실업급여 수급기간이 연장되는 경우가 있나요?',
    ctaKeyword: '실업급여 수급기간 연장 가능 여부 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '실업급여 수급기간 연장되는 4가지 경우 정리 | 로앤가이드',
      description:
        '실업급여 수급기간이 곧 끝나는데 아직 취업을 못 해서 연장할 수 있는지 궁금하다면 연장 가능한 4가지 사유를 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 받고 있는데 소정급여일수가 얼마 남지 않았습니다. 열심히 구직활동을 했지만 아직 취업이 안 됐고, 당장 생활비가 걱정됩니다. 실업급여 수급기간이 끝나면 그냥 포기해야 하는 건지, 연장할 수 있는 방법이 있는 건지 확인해보세요.</p>',
    sections: [
      {
        title: '수급기간 연장이 인정되는 4가지 사유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법은 특정 사유가 있을 때 수급기간(이직일로부터 12개월)을 연장하거나 급여일수를 추가로 부여하는 제도를 두고 있습니다.</strong></p>\n<ol>\n<li><strong>질병·부상으로 취업 불능(수급기간 연장)</strong> — 7일 이상 취업이 불가능한 질병·부상이 있으면 해당 기간만큼 수급기간이 연장됩니다. 최대 4년까지 연장 가능합니다</li>\n<li><strong>출산·육아(수급기간 연장)</strong> — 출산 전후 또는 영유아 양육으로 취업이 곤란한 경우 해당 기간만큼 수급기간이 연장됩니다</li>\n<li><strong>훈련연장급여</strong> — 직업안정기관장이 지시한 직업능력개발 훈련을 받는 경우 훈련 기간 동안 최대 2년까지 급여가 연장됩니다</li>\n<li><strong>개별연장급여</strong> — 취업이 특히 곤란하고 재산·소득 등 생활 형편이 고용노동부령으로 정한 기준에 해당하면 소정급여일수의 60일 범위 내에서 연장됩니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "소정급여일수 만료"와 "수급기간(12개월) 만료"는 다른 개념입니다. 소정급여일수가 남아도 수급기간 12개월이 지나면 급여가 중단되므로 연장 신청이 중요합니다</blockquote>',
      },
      {
        title: '연장급여 신청 방법과 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">연장급여 유형에 따라 신청 방법과 필요 서류가 다르므로 본인에게 해당하는 사유를 먼저 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>질병·부상 연장</strong> — 의사 소견서(취업 불가 기간 명시), 진단서를 고용센터에 제출합니다. 7일 이상 취업이 불가능해야 하며, 입원 확인서가 있으면 더 유리합니다</li>\n<li><strong>출산·육아 연장</strong> — 출산예정일 확인서 또는 출생증명서, 양육 사실 확인서를 제출합니다</li>\n<li><strong>훈련연장급여</strong> — 고용센터 직업상담원이 훈련을 지시한 경우에만 해당합니다. 본인이 임의로 학원을 등록하는 것으로는 인정되지 않으며, 고용센터에서 지정한 훈련기관의 훈련이어야 합니다</li>\n<li><strong>개별연장급여</strong> — 소득·재산 증빙(건강보험료 납부확인서, 재산세 과세증명서 등)과 취업 곤란 사유를 고용센터에 제출합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 수급기간 연장 해당 여부를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '연장급여 수급 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">연장급여를 받는 중에도 구직활동 의무가 있으며, 위반 시 급여가 중단될 수 있습니다.</strong></p>\n<ul>\n<li><strong>훈련연장급여 출석률</strong> — 훈련연장급여를 받는 동안 훈련 출석률 80% 이상을 유지해야 합니다. 미달 시 급여 지급이 정지됩니다</li>\n<li><strong>개별연장급여 소득 기준</strong> — 가구 소득이 기준 중위소득의 60% 이하이고, 재산이 3억 원 이하여야 개별연장급여 대상이 됩니다. 기준은 매년 변경되므로 고용센터에서 확인하세요</li>\n<li><strong>연장급여 금액</strong> — 훈련·개별 연장급여의 일일 지급액은 기존 구직급여일액의 70%입니다. 100%가 아니라 줄어드는 점에 유의하세요</li>\n<li><strong>특별연장급여</strong> — 실업률이 급등하는 등 대량실업 상황에서 고용노동부 장관이 고시하면 특별연장급여(60일)가 추가될 수 있습니다. COVID-19 당시 시행된 바 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 연장급여는 자동 적용이 아니라 반드시 신청해야 합니다. 수급기간 만료 전에 고용센터에 미리 상담하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아휴직급여 청구권 행사기간 해석',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 육아휴직급여 청구권의 행사기간이 제척기간인지 여부를 심리하며, 기간 내에 권리를 행사하지 않으면 권리가 소멸한다고 판시했습니다.',
        takeaway:
          '실업급여 연장 신청이든 육아휴직급여 청구든 법정 기한 내에 신청하지 않으면 권리가 소멸할 수 있으므로, 수급기간 만료 전에 반드시 연장 가능 여부를 확인하고 신청하세요.',
      },
    ],
    faq: [
      {
        question: '질병으로 7일 미만 취업 불능이면 연장이 안 되나요?',
        answer:
          '<strong>7일 미만의 질병은 수급기간 연장 사유에 해당하지 않습니다.</strong> 다만 해당 기간 동안 실업 인정을 받지 못한 경우, 질병 증명서를 제출하면 실업 인정 요건을 충족한 것으로 처리될 수 있습니다. 7일 이상이면 연장 신청이 가능합니다.',
      },
      {
        question: '개별연장급여의 소득 기준은 어떻게 확인하나요?',
        answer:
          '<strong>건강보험료 납부확인서로 가구 소득을 확인하고, 재산세 과세증명서로 재산을 확인합니다.</strong> 기준 중위소득의 60% 이하, 재산 3억 원 이하가 기본 요건이며, 구체적 금액은 매년 변경되므로 관할 고용센터에서 최신 기준을 확인하세요.',
      },
      {
        question: '훈련연장급여를 받으려면 어떤 훈련을 들어야 하나요?',
        answer:
          '<strong>고용센터 직업상담원이 지시한 직업능력개발 훈련이어야 합니다.</strong> 본인이 임의로 선택한 학원이나 온라인 과정은 해당되지 않으며, 고용센터에서 "훈련 지시서"를 발급받은 후 지정 훈련기관에서 수강해야 합니다.',
      },
      {
        question: '연장급여를 받는 중에도 구직활동을 해야 하나요?',
        answer:
          '<strong>연장급여를 받는 동안에도 실업 인정 신청과 구직활동 보고 의무가 있습니다.</strong> 훈련연장급여의 경우 훈련 자체가 구직활동으로 인정되지만, 개별연장급여는 별도의 구직활동 실적을 제출해야 합니다.',
      },
    ],
    cta: {
      text: '실업급여 수급기간 연장 가능 여부, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 기간과 지급액', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
      { label: '실업급여 수급 조건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '실업급여 중 재취업 시 남은 급여', href: '/guide/unemployment/reemployment-during-benefits-remaining' },
      { label: '해고 후 어디서부터 시작할까', href: '/guide/dismissal/dismissed-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. unemployment / benefit-fraud-top-5-cases
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'benefit-fraud-top-5-cases',
    keyword: '실업급여 부정수급 적발 사례 5가지',
    questionKeyword: '실업급여 부정수급으로 걸리는 대표 사례가 뭐가 있나요?',
    ctaKeyword: '실업급여 부정수급 해당 여부 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '실업급여 부정수급 적발 사례 5가지 총정리 | 로앤가이드',
      description:
        '실업급여를 받으면서 혹시 부정수급에 해당하는 건 아닌지 불안하다면 적발 빈도 높은 5가지 사례를 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 받는 중에 짧은 아르바이트를 했는데 신고를 안 했습니다. 친구는 "소액이면 괜찮다"고 했지만 나중에 부정수급으로 적발되면 3배를 토해내야 한다는 이야기를 듣고 불안해졌습니다. 고용노동부는 매년 수천 건의 부정수급을 적발하고 있으며, "몰랐다"는 변명은 통하지 않습니다. 실제로 적발 빈도가 높은 5가지 사례를 확인해보세요.</p>',
    sections: [
      {
        title: '적발 사례 1~3: 취업 사실 미신고형',
        content:
          '<p><strong style="color:#1e3a5f">부정수급의 70% 이상이 취업·근로 사실을 신고하지 않고 급여를 계속 받은 경우입니다.</strong></p>\n<ol>\n<li><strong>사례 1: 알바·일용직 미신고</strong> — 실업급여 수급 중 편의점, 배달, 건설현장 등에서 단기 근로를 하면서 실업 인정 시 근로 사실을 기재하지 않은 경우. 4대보험 취득 이력, 사업주 신고, 국세청 소득자료로 적발됩니다</li>\n<li><strong>사례 2: 프리랜서·플랫폼 소득 미신고</strong> — 블로그, 유튜브, 배달앱, 번역 등 프리랜서 소득을 얻으면서 신고하지 않은 경우. 국세청 종합소득세 신고 자료와 대조하여 적발됩니다</li>\n<li><strong>사례 3: 자영업 개시 미신고</strong> — 사업자등록을 하거나 지인 사업을 도우면서 급여를 계속 수령한 경우. 사업자등록 즉시 고용보험 시스템에서 탐지됩니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 월 60시간 미만의 단시간 근로라도 실업 인정 시 반드시 근로 사실과 소득을 기재해야 합니다. "소액이라서"는 면책 사유가 되지 않습니다</blockquote>',
      },
      {
        title: '적발 사례 4~5: 허위 신고·서류 조작형',
        content:
          '<p><strong style="color:#1e3a5f">허위 구직활동 신고나 이직 사유 조작은 형사 고발까지 이어질 수 있는 중대한 부정수급입니다.</strong></p>\n<ul>\n<li><strong>사례 4: 허위 구직활동 보고</strong> — 실제로 면접을 보지 않았는데 면접 참석으로 기재하거나, 허위 입사지원 내역을 제출한 경우. 고용센터가 채용기업에 사실 확인을 하면 바로 적발됩니다</li>\n<li><strong>사례 5: 사업주와 공모한 허위 이직</strong> — 사업주와 짜고 실제로는 계속 근무하면서 형식상 퇴사 처리를 한 뒤 실업급여를 수령한 경우. 사업주에게도 5년 이하 징역 또는 5천만 원 이하 벌금이 부과됩니다</li>\n</ul>\n<p>부정수급이 적발되면 <strong>지급받은 금액 전액 반환 + 추가 2배 징수(총 3배)</strong>에 해당하며, 금액이 크거나 조직적인 경우 형사 고발(사기죄)로 이어질 수 있습니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 부정수급 해당 여부와 대응 방법을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부정수급 적발 시 제재와 예방법',
        content:
          '<p><strong style="color:#1e3a5f">부정수급 제재는 금전적 환수에 그치지 않고, 향후 실업급여 수급 자격 자체에 영향을 줄 수 있습니다.</strong></p>\n<ul>\n<li><strong>3배 환수 구조</strong> — 부정수급액 반환(1배) + 추가 징수(2배) = 총 3배 금액을 납부해야 합니다. 분할 납부를 신청할 수 있으나 체납 시 국세징수법에 따라 강제징수됩니다</li>\n<li><strong>형사 처벌</strong> — 고용보험법 제116조에 따라 1년 이하 징역 또는 1천만 원 이하 벌금에 처해질 수 있습니다. 금액이 크면 사기죄(형법 제347조)로 별도 기소될 수 있습니다</li>\n<li><strong>수급 자격 제한</strong> — 부정수급 이력이 있으면 향후 실업급여 수급 시 불이익을 받을 수 있습니다</li>\n<li><strong>예방법</strong> — 소액의 근로소득이라도 실업 인정 시 반드시 신고하고, 취업 사실은 즉시 고용센터에 알리세요. 정직한 신고가 최선의 예방입니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 고용노동부는 4대보험·국세청·금융 데이터를 연계하여 부정수급을 탐지하므로, 소득이 발생하면 반드시 신고하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 부정수급 대리신고 사례',
        summary:
          '대구지법 2018구합23680 사건(대구지방법원, 2019.04.17 선고)에서 법원은 제3자가 대리로 실업 인정을 신고한 부정수급 사안을 심리하며, 대리 신고를 통한 구직급여 수급이 부정수급에 해당한다고 판단했습니다.',
        takeaway:
          '실업 인정 신고는 반드시 본인이 직접 해야 하며, 타인에게 대리로 신고를 맡기는 것 자체가 부정수급에 해당할 수 있으므로 주의하세요.',
      },
    ],
    faq: [
      {
        question: '하루만 일하고 받은 소액도 신고해야 하나요?',
        answer:
          '<strong>하루만 근로했더라도 실업 인정 신청 시 해당 일자의 근로 사실과 소득을 반드시 기재해야 합니다.</strong> 신고하면 해당일의 구직급여가 차감되지만, 미신고 시 부정수급으로 3배 환수 대상이 됩니다. 정직한 신고가 유리합니다.',
      },
      {
        question: '부정수급 통보를 받으면 바로 돈을 내야 하나요?',
        answer:
          '<strong>부정수급 결정 통보를 받으면 이의신청 기간(90일) 내에 이의신청을 할 수 있습니다.</strong> 이의신청 중에는 강제징수가 유예될 수 있으며, 부득이한 경우 분할 납부를 신청할 수도 있습니다. 다만 이의 없이 확정되면 납부 기한 내에 환수금을 납부해야 합니다.',
      },
      {
        question: '가족이 사업자등록을 한 것도 부정수급인가요?',
        answer:
          '<strong>본인 명의로 사업자등록을 한 경우에는 자영업 개시로 간주되어 실업급여 수급이 중단됩니다.</strong> 가족 명의의 사업에 실질적으로 종사하면서 급여를 받는 경우에도 취업 상태로 판단될 수 있으므로, 고용센터에 미리 상담하세요.',
      },
      {
        question: '부정수급 적발 전에 자진 신고하면 제재가 줄어드나요?',
        answer:
          '<strong>적발 전에 자진 신고하면 추가 징수(2배)를 감면받을 수 있습니다.</strong> 자진 신고 시 부정수급액만 반환하면 되는 경우도 있으므로, 실수로 미신고한 사실이 있다면 빨리 고용센터에 연락하는 것이 유리합니다.',
      },
      {
        question: '고용유지지원금 부정수급과 실업급여 부정수급은 다른 건가요?',
        answer:
          '<strong>고용유지지원금은 사업주에게 지급되는 지원금이고, 실업급여는 근로자에게 지급되는 급여로 대상과 제재가 다릅니다.</strong> 다만 사업주가 고용유지지원금을 부정수급하면서 근로자의 실업급여 수급에도 영향을 주는 경우 두 제재가 모두 적용될 수 있습니다.',
      },
    ],
    cta: {
      text: '부정수급 해당 여부가 걱정된다면 AI가 확인해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 부정수급 적발 시 대처법', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 받으면서 알바 가능 여부', href: '/guide/unemployment/part-time-work-while-receiving-benefit' },
      { label: '실업급여 수급 조건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자진퇴사 실업급여 인정 쉬운 사유', href: '/guide/unemployment/voluntary-quit-easy-approval-reasons' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. unemployment / application-required-documents-checklist
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'application-required-documents-checklist',
    keyword: '실업급여 신청 필요 서류 6가지 체크리스트',
    questionKeyword: '실업급여 신청할 때 꼭 필요한 서류가 뭐가 있나요?',
    ctaKeyword: '실업급여 신청 서류 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '실업급여 신청 필수 서류 6가지 체크리스트 | 로앤가이드',
      description:
        '실업급여를 신청하려는데 어떤 서류를 준비해야 할지 모르겠다면 빠뜨리면 안 되는 필수 서류 6가지를 지금 확인하세요',
    },
    intro:
      '<p>퇴사 후 실업급여를 신청하려고 고용센터에 갔는데 서류가 부족하다고 돌아왔습니다. 신분증만 들고 가면 될 줄 알았는데, 이직확인서도 필요하고 온라인 교육도 먼저 이수해야 한다고 합니다. 서류 하나가 빠져도 신청이 지연되니 한 번에 준비해서 가는 것이 중요합니다. 실업급여 신청에 필요한 서류 6가지를 체크리스트로 정리해보세요.</p>',
    sections: [
      {
        title: '필수 서류 1~3: 본인 확인과 이직 증빙',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 신청의 첫 단계는 본인 확인과 이직 사실 증빙입니다. 아래 3가지를 반드시 준비하세요.</strong></p>\n<ol>\n<li><strong>신분증</strong> — 주민등록증, 운전면허증, 여권 중 하나. 만료된 신분증은 인정되지 않습니다</li>\n<li><strong>이직확인서</strong> — 사업주가 고용센터에 제출하는 서류로, 퇴사 후 회사에 발급을 요청합니다. 이직 사유, 피보험기간, 평균임금이 기재되어 있으며, 수급 자격 판단의 핵심 서류입니다</li>\n<li><strong>수급자격 인정 교육 이수증</strong> — 고용보험 홈페이지(www.ei.go.kr)에서 온라인 교육(약 1시간)을 이수하면 자동으로 발급됩니다. 교육을 이수하지 않으면 수급자격 인정 신청이 불가합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이직확인서는 사업주가 피보험자격 상실 신고 시 함께 제출해야 하며, 퇴사 후 10일 이내에 제출할 의무가 있습니다</blockquote>',
      },
      {
        title: '필수 서류 4~6: 급여 수령과 구직활동 증빙',
        content:
          '<p><strong style="color:#1e3a5f">급여를 받을 계좌와 구직활동 증빙 서류도 신청 시 함께 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>본인 명의 통장 사본</strong> — 실업급여가 입금될 본인 명의 계좌의 통장 사본 또는 계좌번호 확인서를 준비합니다. 타인 명의 계좌로는 수령할 수 없습니다</li>\n<li><strong>워크넷 구직 등록 확인</strong> — 워크넷(www.work.go.kr)에 구직 등록을 완료한 상태여야 합니다. 별도의 출력물은 필요 없지만, 등록이 완료되어 있어야 신청이 진행됩니다</li>\n<li><strong>증빙 서류(자진퇴사의 경우)</strong> — 자진퇴사자가 정당한 이직 사유를 주장하는 경우 추가 서류가 필요합니다. 임금 체불 증빙(통장 내역), 직장 내 괴롭힘 증빙(녹음·문자), 질병 증빙(의사 소견서) 등 사유에 맞는 증거를 준비합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 필요 서류를 안내해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '서류 준비 시 흔한 실수와 대처법',
        content:
          '<p><strong style="color:#1e3a5f">서류 미비로 신청이 반려되는 경우가 많으므로, 아래 실수를 미리 방지하세요.</strong></p>\n<ul>\n<li><strong>이직확인서 사유 오기재</strong> — 회사가 이직 사유를 "자기 사정"으로 기재하면 수급이 거부됩니다. 발급 후 반드시 이직 사유란을 확인하고, 잘못된 경우 고용센터에 이의신청하세요</li>\n<li><strong>피보험기간 확인 누락</strong> — 고용보험 홈페이지에서 본인의 총 피보험기간을 조회하여 180일 이상 충족 여부를 미리 확인합니다. 이전 직장의 기간도 합산됩니다</li>\n<li><strong>온라인 교육 미이수</strong> — 고용센터 방문 전 반드시 온라인 수급자격 교육을 이수해야 합니다. 현장에서는 교육을 받을 수 없으므로 미리 이수하고 가세요</li>\n<li><strong>신청 기한 경과</strong> — 이직일 다음 날부터 12개월 이내에 신청해야 합니다. 서류 준비가 늦어져도 12개월이 지나면 수급 자격이 소멸하니, 서류가 완벽하지 않더라도 기한 내에 먼저 신청하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 서류가 완벽하지 않아도 기한 내 신청이 우선입니다. 부족한 서류는 보정 기간 내에 추가 제출할 수 있으니 기한을 놓치지 마세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무원 고용보험 가입신청 기간 3개월 제한 해석',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 공무원의 고용보험 가입 신청 기간을 임용일로부터 3개월로 제한한 규정의 해석을 심리하며, 기간 도과 시 가입 자격 상실 여부를 판단했습니다.',
        takeaway:
          '실업급여 수급의 전제인 고용보험 가입은 기한 내에 이루어져야 하며, 기한을 놓치면 수급 자격에 영향을 줄 수 있으므로 재직 중 고용보험 가입 여부를 확인하세요.',
      },
    ],
    faq: [
      {
        question: '이직확인서를 내가 직접 발급받아야 하나요?',
        answer:
          '<strong>이직확인서는 사업주가 고용센터에 제출하는 서류이므로 본인이 직접 발급하는 것은 아닙니다.</strong> 퇴사 후 회사 인사팀에 발급을 요청하면, 사업주가 고용센터에 전자 제출합니다. 고용보험 홈페이지에서 제출 여부를 조회할 수 있습니다.',
      },
      {
        question: '온라인 교육은 어디서 어떻게 받나요?',
        answer:
          '<strong>고용보험 홈페이지(www.ei.go.kr) → 개인서비스 → 수급자격 교육에서 온라인으로 수강합니다.</strong> 약 1시간 분량이며, 영상 시청 후 간단한 확인 문제를 풀면 이수 처리됩니다. 고용센터 방문 전에 반드시 완료하세요.',
      },
      {
        question: '통장 사본 대신 모바일 뱅킹 화면도 되나요?',
        answer:
          '<strong>본인 명의 계좌번호를 확인할 수 있으면 모바일 뱅킹 화면 캡처도 인정되는 고용센터가 많습니다.</strong> 다만 고용센터마다 다를 수 있으므로, 방문 전 관할 고용센터(1350)에 문의하여 확인하는 것이 안전합니다.',
      },
      {
        question: '근로계약서가 없는데 실업급여 신청이 가능한가요?',
        answer:
          '<strong>근로계약서가 없어도 이직확인서가 있으면 실업급여 신청은 가능합니다.</strong> 다만 자진퇴사자가 정당한 사유를 증명할 때는 근로조건을 증빙할 수 있는 다른 서류(급여명세서, 채용공고, 문자 등)가 필요합니다.',
      },
      {
        question: '해외에 있는데 실업급여 신청이 가능한가요?',
        answer:
          '<strong>실업급여는 국내에서 구직활동을 해야 하므로 해외 체류 중에는 신청할 수 없습니다.</strong> 해외 체류가 불가피한 경우 수급기간 연장을 신청한 후 귀국 후 신청할 수 있으나, 12개월의 수급기간이 경과하면 자격이 소멸됩니다.',
      },
    ],
    cta: {
      text: '실업급여 신청 서류 준비, AI가 체크해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '퇴사 후 실업급여 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '실업급여 신청 전 체크리스트', href: '/guide/unemployment/pre-application-checklist' },
      { label: '이직확인서 안 보내주는 회사 대응법', href: '/guide/unemployment/employer-wont-send-employment-verification' },
      { label: '자진퇴사 실업급여 인정 쉬운 사유', href: '/guide/unemployment/voluntary-quit-easy-approval-reasons' },
      { label: '권고사직 실업급여 받는 법', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. unemployment / employer-wont-send-employment-verification
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'employer-wont-send-employment-verification',
    keyword: '이직확인서 안 보내주는 회사 대응법 4단계',
    questionKeyword: '이직확인서를 안 보내주는 회사에 어떻게 해야 하나요?',
    ctaKeyword: '이직확인서 미발급 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이직확인서 안 보내주는 회사 대응법 4단계 | 로앤가이드',
      description:
        '퇴사했는데 회사가 이직확인서를 안 보내줘서 실업급여를 못 받고 있다면 4단계 대응 방법을 지금 확인하세요',
    },
    intro:
      '<p>한 달 전에 퇴사했는데 회사에서 이직확인서를 보내주지 않습니다. 전화하면 "바쁘다", "담당자가 없다"며 미루기만 하고, 실업급여 신청 기한은 다가오고 있습니다. 사업주는 피보험자격 상실 신고 시 이직확인서를 제출할 의무가 있으며, 이를 이행하지 않으면 과태료 처분을 받을 수 있습니다. 회사가 이직확인서를 안 보내줄 때 취할 수 있는 4단계 대응 방법을 확인해보세요.</p>',
    sections: [
      {
        title: '1~2단계: 서면 요청과 고용센터 신고',
        content:
          '<p><strong style="color:#1e3a5f">구두 요청으로 해결되지 않으면 서면 요청과 고용센터 신고를 통해 법적 절차로 전환해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계: 내용증명 서면 요청</strong> — 회사에 이직확인서 발급을 내용증명으로 요청합니다. "○○일까지 이직확인서를 제출하지 않으면 고용센터에 신고하겠다"는 내용을 명시합니다. 내용증명은 우체국에서 발송하며, 발송 기록이 증거가 됩니다</li>\n<li><strong>2단계: 고용센터 직권 확인 요청</strong> — 내용증명 발송 후에도 회사가 응하지 않으면 관할 고용센터에 "이직확인서 직권 확인"을 요청합니다. 고용센터가 직접 회사에 연락하여 이직확인서 제출을 독촉합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업주는 피보험자격 상실 신고일(퇴사 후 14일 이내)부터 10일 이내에 이직확인서를 제출할 의무가 있습니다(고용보험법 제42조)</blockquote>',
      },
      {
        title: '3단계: 고용노동부 진정 및 과태료 부과',
        content:
          '<p><strong style="color:#1e3a5f">고용센터의 독촉에도 회사가 이직확인서를 제출하지 않으면 과태료 부과와 진정 절차로 압박할 수 있습니다.</strong></p>\n<ul>\n<li><strong>과태료 부과</strong> — 이직확인서 미제출 사업주에게는 300만 원 이하의 과태료가 부과됩니다(고용보험법 제118조). 고용센터가 직권으로 부과하며, 근로자가 별도로 신청하지 않아도 됩니다</li>\n<li><strong>고용노동부 진정</strong> — 관할 고용노동지청에 "이직확인서 미제출 진정서"를 제출하면 근로감독관이 사업장을 조사합니다. 진정서에는 회사명, 재직 기간, 퇴사일, 요청 경위를 기재합니다</li>\n<li><strong>실업급여 선처리</strong> — 고용센터는 이직확인서가 없어도 직권으로 이직 사유를 확인하여 수급자격을 인정할 수 있습니다. 직권 확인 요청 시 근로계약서, 급여명세서, 퇴사 관련 문자 등 보조 증빙을 함께 제출하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 이직확인서 미발급 대응 전략을 안내해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 이직 사유 오기재 시 이의신청',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서를 받았더라도 이직 사유가 잘못 기재되어 있으면 수급이 거부될 수 있으므로 반드시 확인하세요.</strong></p>\n<ul>\n<li><strong>사유 확인 방법</strong> — 고용보험 홈페이지 → 개인서비스 → 이직확인서 조회에서 이직 사유란을 확인합니다</li>\n<li><strong>오기재 유형</strong> — 가장 흔한 오기재는 비자발적 퇴사(권고사직, 계약 만료 등)인데 "자기 사정"으로 기재하는 경우입니다. 사업주가 의도적으로 사유를 조작하는 경우도 있습니다</li>\n<li><strong>이의신청 절차</strong> — 고용센터에 "이직확인서 이직 사유 이의신청"을 하면 고용센터가 사업주와 근로자 양측의 주장을 확인하여 재판단합니다</li>\n<li><strong>필요 증빙</strong> — 권고사직 확인 문자·메일, 계약 만료 통보서, 해고 통보서 등 실제 이직 사유를 증명할 수 있는 자료를 제출합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사업주가 이직확인서에 허위 사유를 기재하면 과태료(300만 원 이하) 처분을 받을 수 있으며, 근로자는 이의신청을 통해 바로잡을 수 있습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용유지지원금 부정수급 처벌 여부',
        summary:
          '대법원 2018도2429 사건(대법원, 2018.06.28 선고)에서 법원은 사업주가 고용유지지원금을 부정수급한 사안을 심리하며, 허위 서류 제출을 통한 고용보험 급여의 부정수급이 형사 처벌 대상이 된다고 판시했습니다.',
        takeaway:
          '사업주가 이직확인서에 허위 사유를 기재하거나 고용보험 관련 서류를 조작하는 행위는 형사 처벌까지 가능하므로, 이직확인서 사유가 잘못된 경우 적극적으로 이의신청하세요.',
      },
    ],
    faq: [
      {
        question: '이직확인서 없이도 실업급여를 신청할 수 있나요?',
        answer:
          '<strong>고용센터에 직권 확인을 요청하면 이직확인서 없이도 수급자격을 인정받을 수 있습니다.</strong> 근로계약서, 급여명세서, 퇴사 관련 문자·메일 등 보조 증빙을 함께 제출하면 고용센터가 직접 이직 사유를 확인합니다.',
      },
      {
        question: '회사가 폐업했으면 이직확인서를 어떻게 받나요?',
        answer:
          '<strong>회사가 폐업한 경우에도 고용센터에 직권 확인을 요청할 수 있습니다.</strong> 폐업 사실 확인서(국세청 홈택스에서 발급), 근로계약서, 급여 입금 내역 등을 제출하면 고용센터가 직권으로 이직 사유와 피보험기간을 확인합니다.',
      },
      {
        question: '이직확인서 제출 독촉을 요청하면 회사에 불이익이 생기나요?',
        answer:
          '<strong>고용센터의 독촉은 과태료 경고 성격이며, 회사가 제출하면 불이익은 없습니다.</strong> 다만 기한 내 미제출 시 300만 원 이하 과태료가 부과되므로, 회사 입장에서도 빨리 제출하는 것이 유리합니다.',
      },
      {
        question: '이직확인서에 퇴사 사유가 "자기 사정"으로 되어 있는데 바꿀 수 있나요?',
        answer:
          '<strong>고용센터에 이직 사유 이의신청을 하면 변경이 가능합니다.</strong> 권고사직 통보 문자, 계약 만료 통지서, 임금 체불 내역 등 실제 사유를 증빙하는 자료를 제출하면 고용센터가 재조사하여 사유를 정정합니다.',
      },
      {
        question: '내용증명 보내는 데 비용이 얼마나 드나요?',
        answer:
          '<strong>내용증명 발송 비용은 우체국 기준 약 5,000~10,000원 수준입니다.</strong> 온라인(전자내용증명, e-그린우편)으로도 발송 가능하며, 비용은 비슷합니다. 발송 기록이 법적 증거로 활용되므로 비용 대비 효과가 큽니다.',
      },
    ],
    cta: {
      text: '이직확인서 미발급 문제, AI가 대응 방법을 안내해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 필수 서류 체크리스트', href: '/guide/unemployment/application-required-documents-checklist' },
      { label: '퇴사 후 실업급여 어디부터', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '자진퇴사 실업급여 인정 쉬운 사유', href: '/guide/unemployment/voluntary-quit-easy-approval-reasons' },
      { label: '계약직 만료 실업급여 신청 순서', href: '/guide/unemployment/contract-expiry-benefit-application-order' },
      { label: '부당해고 구제 신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
    ],
  },
];
