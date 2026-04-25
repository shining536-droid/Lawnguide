import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 3개 (batch33)
// 1. unemployment-comprehensive-benefit-amount-guide — 실업급여 금액 산정 기준과 상한액/하한액/수급일수 총정리
// 2. unemployment-recognized-job-search-activity-guide — 구직활동 인정 유형 7가지와 증빙 방법 안내
// 3. unemployment-voluntary-quit-exception-comprehensive — 자발적 퇴사도 실업급여 받는 12가지 예외 사유
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch33Unemployment: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. unemployment / comprehensive-benefit-amount-guide
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'unemployment-comprehensive-benefit-amount-guide',
    keyword: '실업급여 금액 산정 방법 총정리',
    questionKeyword: '실업급여 금액이 얼마나 나오는지 어떻게 계산하나요?',
    ctaKeyword: '실업급여 금액 산정 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 금액 산정 기준과 상한액 5가지 | 로앤가이드',
      description:
        '실업급여가 얼마나 나오는지 막막하다면 산정 공식, 상한액·하한액, 피보험기간별 수급일수까지 한눈에 정리했습니다. 지금 확인하세요',
    },
    intro:
      '<p>퇴사를 결심했는데, 실업급여가 정확히 얼마나 나오는지 몰라 불안합니다. 인터넷에 나오는 정보는 연도마다 달라서 헷갈리고, 내 경우에 적용되는 금액이 맞는 건지 확신이 서지 않습니다. 실업급여(구직급여)는 퇴직 전 평균임금의 60%를 기준으로 산정하되, 상한액과 하한액이 정해져 있어 실제 수령액은 사람마다 다릅니다. 산정 공식부터 2026년 기준 상·하한액까지 체계적으로 확인해보세요.</p>',
    sections: [
      {
        title: '실업급여 산정 공식: 평균임금 × 60% × 소정급여일수',
        content:
          '<p><strong style="color:#1e3a5f">구직급여 일액은 퇴직 전 3개월간 평균임금의 60%로 계산되며, 이 금액에 소정급여일수를 곱한 것이 총 수령액입니다.</strong></p>\n<ul>\n<li><strong>평균임금 산정</strong> — 퇴직 전 3개월간 지급받은 임금 총액을 그 기간의 총 일수(통상 89~92일)로 나눕니다. 기본급뿐 아니라 고정수당, 연장근로수당, 상여금(정기·고정) 등이 포함됩니다</li>\n<li><strong>구직급여 일액</strong> — 평균임금 × 60%가 1일 구직급여액입니다. 단, 이 금액이 상한액을 초과하면 상한액이 적용되고, 하한액 미만이면 하한액이 적용됩니다</li>\n<li><strong>총 수령액</strong> — 구직급여 일액 × 소정급여일수 = 총 실업급여 수령액입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 평균임금에 비과세 항목(식대 20만 원 이하, 자가운전보조금 등)은 포함되지 않으므로, 급여명세서에서 과세 임금 합계를 기준으로 계산해야 합니다</blockquote>',
      },
      {
        title: '2026년 기준 상한액·하한액과 적용 방법',
        content:
          '<p><strong style="color:#1e3a5f">2026년 기준 구직급여 일액 상한액은 66,000원, 하한액은 최저임금의 80% × 1일 소정근로시간입니다.</strong></p>\n<ul>\n<li><strong>상한액 66,000원</strong> — 퇴직 전 월급이 아무리 높아도 하루 최대 66,000원까지만 지급됩니다. 월 환산 시 약 198만 원(66,000원 × 30일)이 최대치입니다</li>\n<li><strong>하한액 산정</strong> — 2026년 최저시급 10,030원 기준, 하한액은 10,030원 × 8시간 × 80% = 64,192원입니다. 즉 저임금 근로자라도 일 64,192원 이상을 보장받습니다</li>\n<li><strong>역전 현상</strong> — 상한액(66,000원)과 하한액(64,192원)의 차이가 매우 작아, 대부분의 구직자가 비슷한 수준의 일액을 받게 됩니다</li>\n<li><strong>단시간 근로자</strong> — 1일 소정근로시간이 8시간 미만이면 하한액도 비례하여 줄어듭니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 실업급여 예상 금액, AI가 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직 전 급여 정보를 입력하면 예상 수령액과 수급일수를 바로 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '피보험기간·나이별 소정급여일수 한눈에 보기',
        content:
          '<p><strong style="color:#1e3a5f">소정급여일수는 피보험기간(고용보험 가입기간)과 이직일 당시 나이에 따라 120일~270일까지 차등 적용됩니다.</strong></p>\n<ul>\n<li><strong>1년 미만</strong> — 나이 무관 120일</li>\n<li><strong>1년 이상 3년 미만</strong> — 50세 미만 150일 / 50세 이상·장애인 180일</li>\n<li><strong>3년 이상 5년 미만</strong> — 50세 미만 180일 / 50세 이상·장애인 210일</li>\n<li><strong>5년 이상 10년 미만</strong> — 50세 미만 210일 / 50세 이상·장애인 240일</li>\n<li><strong>10년 이상</strong> — 50세 미만 240일 / 50세 이상·장애인 270일</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인 포인트: 피보험기간은 현 직장만이 아니라 이전 직장의 고용보험 가입기간까지 합산됩니다. 단, 이전 직장에서 이미 실업급여를 수급했다면 그 이전 기간은 합산에서 제외됩니다</blockquote>',
      },
      {
        title: '실수하기 쉬운 산정 오류 3가지와 대처법',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 금액이 예상보다 적게 나오는 경우, 대부분 아래 3가지 오류에서 비롯됩니다.</strong></p>\n<ol>\n<li><strong>이직확인서 임금 누락</strong> — 회사가 이직확인서에 기본급만 기재하고 고정수당·상여금을 빠뜨리면 평균임금이 낮아집니다. 급여명세서와 비교하여 누락 항목이 있으면 고용센터에 이의신청하세요</li>\n<li><strong>피보험기간 누락</strong> — 이전 직장의 고용보험 가입기간이 반영되지 않으면 소정급여일수가 줄어듭니다. 고용보험 피보험자격 이력을 고용보험 홈페이지에서 조회할 수 있습니다</li>\n<li><strong>수급기간 경과</strong> — 이직일 다음 날부터 12개월이 수급기간이며, 이 기간이 지나면 남은 급여일수가 있어도 지급되지 않습니다. 퇴사 후 최대한 빨리 신청하는 것이 유리합니다</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 이직확인서 기재 내용에 이의가 있으면 고용센터에 「이직확인서 보완 요청」을 할 수 있으며, 고용센터가 사업주에게 보정을 지시합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 조기재취업수당 지급 대상과 취업 형태 판단',
        summary:
          '대법원 2009두19892 사건(대법원, 2011.12.08 선고)에서 법원은 구직급여 수급자격자가 소정급여일수를 모두 지급받기 전에 주식회사 대표이사에 취임한 경우에도 조기재취업수당 지급 대상에 해당한다고 판시했습니다.',
        takeaway:
          '실업급여 산정과 관련하여 소정급여일수가 남아 있는 상태에서 재취업하면 조기재취업수당을 받을 수 있으므로, 수급일수와 재취업 시점을 함께 고려하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '퇴직금과 실업급여를 동시에 받을 수 있나요?',
        answer:
          '<strong>퇴직금과 실업급여는 별개의 제도이므로 동시 수령이 가능합니다.</strong> 퇴직금은 근로자퇴직급여 보장법에 따라 사용자가 지급하는 것이고, 실업급여는 고용보험법에 따라 고용보험기금에서 지급하는 것입니다. 퇴직금을 받았다고 실업급여가 감액되지는 않습니다.',
      },
      {
        question: '상여금이 불규칙하게 지급되었는데 평균임금에 포함되나요?',
        answer:
          '<strong>정기적·일률적으로 지급되는 상여금은 평균임금에 포함됩니다.</strong> 매년 설·추석에 고정 지급되는 상여금, 분기별 고정 상여금 등은 포함되지만, 특별 성과급이나 일시적 포상금은 제외될 수 있습니다. 퇴직 전 3개월에 포함된 상여금 비율에 따라 금액이 달라지므로 급여명세서를 꼼꼼히 확인하세요.',
      },
      {
        question: '실업급여 수급 중 소득이 생기면 금액이 줄어드나요?',
        answer:
          '<strong>수급 기간 중 근로소득이 발생하면 구직급여가 감액되거나 지급이 중단될 수 있습니다.</strong> 1일 3시간 미만, 월 60시간 미만의 단시간 근로는 일정 금액까지 허용되지만, 이를 초과하면 취업으로 간주되어 해당 기간의 구직급여가 지급되지 않습니다. 가능한 한 고용센터에 신고해야 합니다.',
      },
      {
        question: '이직확인서에 기재된 임금이 실제보다 적으면 어떻게 하나요?',
        answer:
          '<strong>고용센터에 이직확인서 보완 요청을 하면 됩니다.</strong> 급여명세서, 통장 입금내역 등 실제 임금을 증명할 자료를 지참하여 관할 고용센터에 방문하세요. 고용센터가 사업주에게 보정을 지시하며, 사업주가 응하지 않으면 근로감독관 조사가 진행될 수 있습니다.',
      },
      {
        question: '12개월 수급기간이 지나면 남은 급여일수도 소멸되나요?',
        answer:
          '<strong>이직일 다음 날부터 12개월이 경과하면 소정급여일수가 남아 있어도 지급되지 않습니다.</strong> 예를 들어 240일 수급 자격이 있더라도 신청이 늦어져 수급기간 내에 모두 소진하지 못하면 나머지는 소멸합니다. 퇴사 후 지체 없이 고용센터에 실업 신고를 하는 것이 중요합니다.',
      },
      {
        question: '국민연금을 받고 있으면 실업급여가 감액되나요?',
        answer:
          '<strong>조기노령연금 수급자는 구직급여 일액에서 일정 비율이 감액됩니다.</strong> 고용보험법 제58조의2에 따라 조기노령연금을 받는 경우 구직급여가 최대 50%까지 감액될 수 있습니다. 다만 일반 노령연금(만 65세 이후)은 구직급여 자체가 적용되지 않으므로 별도 규정이 적용됩니다.',
      },
    ],
    cta: {
      text: '내 실업급여 예상 금액, AI가 바로 계산해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '수급 중 소득 제한', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '일용직 실업급여', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. unemployment / recognized-job-search-activity-guide
  // ───────────────────────────────────────────
  // 3. unemployment / voluntary-quit-exception-comprehensive
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'unemployment-voluntary-quit-exception-comprehensive',
    keyword: '자발적 퇴사 실업급여 예외 사유 총정리',
    questionKeyword: '자진 퇴사했는데 실업급여를 받을 수 있는 경우가 있나요?',
    ctaKeyword: '자발적 퇴사 실업급여 예외 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '자발적 퇴사도 실업급여 받는 12가지 예외 | 로앤가이드',
      description:
        '자진 퇴사했지만 실업급여를 받을 수 있는지 궁금하다면 고용보험법 시행규칙 별표2의 12가지 예외 사유를 지금 확인하세요',
    },
    intro:
      '<p>스스로 사직서를 냈으니 실업급여는 당연히 안 될 거라고 생각했습니다. 그런데 알고 보니 퇴사 사유에 따라 "비자발적 이직"으로 인정되어 실업급여를 받을 수 있는 경우가 12가지나 됩니다. 고용보험법 시행규칙 별표2에 명시된 수급자격 제한 예외 사유를 하나씩 살펴보고, 본인이 해당하는지 확인해보세요.</p>',
    sections: [
      {
        title: '근로조건 관련 예외 사유 4가지',
        content:
          '<p><strong style="color:#1e3a5f">근로조건이 채용 시와 달라졌거나 현저히 낮아진 경우, 자진 퇴사해도 정당한 이직으로 인정될 수 있습니다.</strong></p>\n<ol>\n<li><strong>임금 체불·삭감</strong> — 이직일 전 1년 이내 2개월 이상 임금의 일부가 체불되었거나, 임금이 당초 근로조건보다 현저히 낮아진 경우</li>\n<li><strong>근로조건 일방 변경</strong> — 소정근로시간, 근무장소, 업무 내용 등이 채용 시 제시된 조건과 크게 달라진 경우</li>\n<li><strong>최저임금 미달</strong> — 사용자가 최저임금법상 최저임금에 미달하는 임금을 지급한 경우</li>\n<li><strong>연장근로 강제</strong> — 근로기준법에서 정한 연장근로 제한을 위반하여 장시간 근로를 강요받은 경우</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "2개월 이상"은 연속이 아닌 누적 기준이며, 임금의 일부라도 지급이 지연되면 체불에 해당할 소지가 있습니다</blockquote>',
      },
      {
        title: '사업장 환경·사용자 귀책 관련 예외 사유 4가지',
        content:
          '<p><strong style="color:#1e3a5f">사업장의 불법·부당한 환경이나 사용자의 위법행위로 퇴사한 경우에도 수급자격이 인정될 수 있습니다.</strong></p>\n<ol>\n<li><strong>직장 내 괴롭힘·성희롱</strong> — 사용자 또는 동료로부터 성적 괴롭힘, 직장 내 괴롭힘을 당하고 사용자가 적절한 조치를 취하지 않은 경우</li>\n<li><strong>사업장 이전</strong> — 사업장이 이전하여 통근이 현저히 곤란해진 경우 (통상 왕복 3시간 이상)</li>\n<li><strong>사업주의 불법행위 강요</strong> — 사업주가 법령 위반을 지시하거나 부당한 행위를 강요한 경우</li>\n<li><strong>경영 악화로 인한 폐업·휴업</strong> — 사업장 폐업이 확실하거나 대량 감원이 예정되어 자진 퇴사한 경우</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 퇴사 사유가 예외에 해당하는지 AI가 판단해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴사 경위를 입력하면 비자발적 이직 인정 가능성과 준비할 증빙을 안내받을 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '개인 사정 관련 예외 사유 4가지',
        content:
          '<p><strong style="color:#1e3a5f">건강, 가족 돌봄, 통근 곤란 등 개인적 사정이라도 불가피한 경우 정당한 이직으로 인정될 수 있습니다.</strong></p>\n<ol>\n<li><strong>본인 건강 악화</strong> — 업무와 관련 없는 질병·부상으로 업무 수행이 곤란하고, 사업주가 적절한 배치전환을 하지 않은 경우</li>\n<li><strong>가족 간호·간병</strong> — 배우자, 부모, 자녀 등 부양가족의 질병·부상으로 간호가 필요하여 계속 근무가 곤란한 경우</li>\n<li><strong>임신·출산·육아</strong> — 임신, 출산, 만 8세 이하 자녀 양육을 위해 퇴사한 경우. 다만 육아휴직 신청이 가능했으나 하지 않은 경우는 제외될 수 있습니다</li>\n<li><strong>병역의무 이행</strong> — 군입대, 소집 등 병역의무 이행을 위해 퇴사한 경우. 전역 후 고용보험 가입 이력이 합산됩니다</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인 포인트: 건강 사유는 의사 진단서(업무 수행이 곤란하다는 소견 포함)가 필수 증빙이며, 가족 돌봄은 가족관계증명서와 진단서를 함께 제출해야 합니다</blockquote>',
      },
      {
        title: '예외 사유 입증 방법과 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">자진 퇴사 후 실업급여를 신청하려면 이직확인서의 이직 사유와 증빙서류가 일치해야 합니다.</strong></p>\n<ul>\n<li><strong>이직확인서 확인</strong> — 사업주가 고용센터에 제출하는 이직확인서에 이직 사유가 기재됩니다. 사업주가 "자발적 퇴사"로만 기재하면 수급자격이 제한될 수 있으므로, 퇴사 전에 사업주와 이직 사유를 협의하세요</li>\n<li><strong>증빙서류 준비</strong> — 임금 체불: 급여명세서·통장내역 / 괴롭힘: 녹취·문자·신고 기록 / 건강: 진단서 / 사업장 이전: 통근시간 증빙(교통 앱 경로 검색 등)</li>\n<li><strong>고용센터 상담</strong> — 수급자격 인정 신청 시 담당자에게 예외 사유를 직접 소명합니다. 증빙이 부족하면 보완 요청을 받을 수 있습니다</li>\n<li><strong>이의신청</strong> — 수급자격이 불인정되면 통지를 받은 날로부터 90일 이내에 고용보험심사위원회에 심사청구를 할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 사직서에 "개인 사정"이라고만 적으면 불리하게 작용할 수 있습니다. 구체적인 퇴사 사유(임금 체불, 건강 악화 등)를 명시하거나, 별도로 고용센터에 소명 자료를 제출하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부서 이동으로 인한 임금 감소와 수급자격 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 인바운드 상담원이 멀티부서로 이동 지시를 받아 실적급이 46% 이상 하락할 것이 확정된 상황에서 퇴사한 것은 고용보험법 시행규칙 별표2 제1호 (가)목의 정당한 이직 사유에 해당한다고 판시했습니다.',
        takeaway:
          '근로조건이 채용 시보다 현저히 불리해질 것이 장래에 확정된 경우, 자진 퇴사하더라도 비자발적 이직으로 인정되어 실업급여 수급자격을 얻을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사직서에 "일신상의 사유"라고 적었는데 실업급여를 받을 수 있나요?',
        answer:
          '<strong>사직서 문구만으로 수급자격이 결정되지는 않습니다.</strong> 실제 퇴사 사유가 별표2의 예외에 해당하면 증빙서류를 통해 고용센터에서 비자발적 이직으로 인정받을 수 있습니다. 다만 사직서에 구체적 사유를 적어두면 입증이 더 수월해집니다.',
      },
      {
        question: '회사가 이직확인서에 "자발적 퇴사"로만 적으면 어떻게 하나요?',
        answer:
          '<strong>이직확인서 내용에 이의가 있으면 고용센터에 이의신청을 할 수 있습니다.</strong> 고용센터가 사업주에게 사실관계를 확인하고, 필요시 근로감독관 조사를 통해 이직 사유를 변경할 수 있습니다. 임금 체불 증빙, 괴롭힘 신고 기록 등을 함께 제출하세요.',
      },
      {
        question: '권고사직을 받았는데도 사직서를 쓰면 자발적 퇴사가 되나요?',
        answer:
          '<strong>권고사직은 사용자의 권유에 의한 이직이므로 비자발적 퇴사에 해당할 소지가 있습니다.</strong> 다만 사직서에 "개인 사유"로 기재되면 분쟁이 생길 수 있으므로, "회사 권유에 의한 사직"임을 명시하거나 권고사직 확인서를 별도로 받아두는 것이 좋습니다.',
      },
      {
        question: '통근시간이 길어져서 퇴사한 경우 얼마나 길어야 인정되나요?',
        answer:
          '<strong>사업장 이전 등으로 통상 왕복 3시간 이상의 통근이 필요해진 경우 정당한 이직으로 인정될 수 있습니다.</strong> 대중교통 경로 검색 결과, 교통카드 이용 내역 등으로 통근시간을 증빙해야 합니다. 본인이 이사한 경우는 해당되지 않으며, 사업장이 이전한 경우에 한합니다.',
      },
      {
        question: '직장 내 괴롭힘으로 퇴사했는데 증빙이 없으면 어떻게 하나요?',
        answer:
          '<strong>녹취, 문자, 이메일, 동료 진술서, 사내 신고 기록 등 가능한 증빙을 최대한 확보해야 합니다.</strong> 고용노동부에 직장 내 괴롭힘 신고를 한 기록이 있으면 유력한 증빙이 됩니다. 퇴사 전에 가능한 한 증거를 확보해두고, 고용센터 면담 시 구체적인 경위를 소명하세요.',
      },
      {
        question: '수습기간 중 퇴사해도 실업급여 예외 사유가 적용되나요?',
        answer:
          '<strong>수습기간이라도 고용보험 가입기간이 180일 이상이면 수급자격이 있으며, 예외 사유도 동일하게 적용됩니다.</strong> 다만 수습기간 중 고용보험 가입기간이 부족하면 수급자격 자체가 충족되지 않을 수 있으므로, 이전 직장의 피보험기간 합산 여부를 먼저 확인하세요.',
      },
    ],
    cta: {
      text: '내 퇴사 사유가 실업급여 예외에 해당하는지, AI가 판단해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 거부 시 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
    ],
  },
];
