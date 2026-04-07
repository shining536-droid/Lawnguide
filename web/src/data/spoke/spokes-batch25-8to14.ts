import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 8. 이 페이지는 [실업급여를 신청했으나 거절당한 구직자]의 [왜 거절됐는지 이유를 모르는 상황]에서 [거절 사유 5가지 파악과 재신청 방법 안내]를 돕는 페이지다.
// 9. 이 페이지는 [자발적으로 퇴사했지만 실업급여를 받고 싶은 구직자]의 [인정 가능 여부를 판단하려는 상황]에서 [자발적 퇴사 실업급여 인정 유형과 조건 안내]를 돕는 페이지다.
// 10. 이 페이지는 [실업급여 첫 신청을 앞둔 구직자]의 [고용센터 방문 전 뭘 준비해야 하는지 모르는 상황]에서 [첫 방문 전 체크리스트와 준비 서류 안내]를 돕는 페이지다.
// 11. 이 페이지는 [카톡·통장내역만 가진 임금체불 피해 근로자]의 [이 증거만으로 신고가 가능한지 모르는 상황]에서 [카톡·통장 증거의 효력과 보완 방법 안내]를 돕는 페이지다.
// 12. 이 페이지는 [월급을 일부만 받은 근로자]의 [전액 체불이 아니라 일부 체불이라 대응법을 모르는 상황]에서 [일부 체불 시 단계별 대처 순서 안내]를 돕는 페이지다.
// 13. 이 페이지는 [퇴사 후 임금체불을 겪고 있는 근로자]의 [퇴사 후에도 노동청 신고가 되는지 모르는 상황]에서 [퇴사 후 임금체불 신고 절차와 주의사항 안내]를 돕는 페이지다.
// 14. 이 페이지는 [노동청에 진정서를 이미 제출한 근로자]의 [접수 후 어떻게 진행되는지 모르는 상황]에서 [진정 접수 후 절차 흐름과 대응 방법 안내]를 돕는 페이지다.

export const spokesBatch25_8to14: SpokePage[] = [
  // ───────────────────────────────────────────
  // 8. unemployment / benefit-application-rejection-5-reasons
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'benefit-application-rejection-5-reasons',
    keyword: '실업급여 거절 사유 5가지',
    questionKeyword: '실업급여를 신청했는데 왜 거절되나요?',
    ctaKeyword: '실업급여 거절 사유 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '실업급여 신청 거절되는 이유 5가지 대처법 | 로앤가이드',
      description:
        '실업급여를 신청했는데 거절 통보를 받아서 당황스럽다면 거절 사유 5가지와 재신청 방법을 지금 확인하세요',
    },
    intro:
      '<p>퇴사 후 생활비가 빠듯해서 실업급여를 신청했는데 "수급자격이 인정되지 않습니다"라는 통보를 받았습니다. 분명히 고용보험에 가입되어 있었는데 왜 거절되는 건지 이해가 안 됩니다. 실업급여 거절에는 명확한 법적 사유가 있으며, 사유에 따라 이의신청이나 재신청이 가능한 경우도 있습니다. 거절 사유 5가지를 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '실업급여 거절 사유 5가지',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제40조, 제58조에 따라 실업급여 수급자격이 제한되는 대표적인 사유 5가지를 정리합니다.</strong></p>\n<ol>\n<li><strong>자발적 퇴사(정당한 사유 없음)</strong> — 본인이 스스로 퇴직했지만 고용보험법 시행규칙 별표 2에 해당하는 정당한 이직 사유가 없는 경우 수급자격이 제한됩니다. 단순히 "힘들어서 그만뒀다"는 인정되지 않습니다</li>\n<li><strong>피보험 단위기간 부족</strong> — 이직일 전 18개월 동안 피보험 단위기간이 합산 180일 미만이면 수급 요건을 충족하지 못합니다. 주 15시간 미만 근로 등은 피보험기간에 산입되지 않을 수 있습니다</li>\n<li><strong>중대한 귀책사유로 해고</strong> — 횡령, 장기 무단결근, 사업에 막대한 지장을 초래하는 행위 등 근로자 본인의 중대한 귀책사유로 해고된 경우 수급자격이 제한됩니다</li>\n<li><strong>구직 의사·능력 부재</strong> — 재취업 의사가 없거나 장기 해외체류, 질병으로 즉시 취업이 불가능한 상태면 실업급여가 지급되지 않습니다</li>\n<li><strong>신청 기한 초과</strong> — 퇴사 후 12개월이 수급기간이며, 이 기간 내에 신청하지 않으면 나머지 급여를 받을 수 없습니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 거절 통보를 받았더라도 사유에 따라 이의신청(심사청구)이나 보완 후 재신청이 가능합니다</blockquote>',
      },
      {
        title: '거절 사유별 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">거절 사유를 정확히 파악한 뒤 해당 사유에 맞는 대응을 해야 합니다.</strong></p>\n<ul>\n<li><strong>자발적 퇴사로 거절된 경우</strong> — 임금 체불, 근로조건 저하, 직장 내 괴롭힘 등 정당한 이직 사유에 해당하는 증거를 제출하면 수급자격이 인정될 수 있습니다. 퇴사 전 카카오톡, 이메일, 진단서 등을 확보해두세요</li>\n<li><strong>피보험기간 부족인 경우</strong> — 이전 직장의 고용보험 가입 여부를 확인하고, 사업주가 미가입했다면 소급 가입 신고 후 기간을 합산할 수 있습니다</li>\n<li><strong>귀책사유 해고인 경우</strong> — 실제로 중대한 귀책사유에 해당하지 않는다면 부당해고 구제신청과 함께 이의신청을 할 수 있습니다</li>\n<li><strong>구직 의사 문제인 경우</strong> — 의료 확인서를 제출하면 상병급여로 전환 가능하며, 해외체류는 귀국 후 즉시 신청해야 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 거절 사유별 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이의신청(심사청구) 절차와 기한',
        content:
          '<p><strong style="color:#1e3a5f">거절 처분에 불복할 경우 90일 이내에 고용보험심사위원회에 심사청구를 할 수 있습니다.</strong></p>\n<ul>\n<li><strong>심사청구서 작성</strong> — 거절 처분 통보서 사본, 이의 사유, 증빙 서류(근로조건 저하 증거, 의료 소견서 등)를 첨부합니다</li>\n<li><strong>제출처</strong> — 관할 지방고용노동관서 또는 고용보험심사위원회에 서면·온라인으로 제출합니다</li>\n<li><strong>처리 기간</strong> — 심사청구 접수 후 60일 이내에 결정이 내려지며, 심사청구가 기각되면 재심사청구(90일 이내)도 가능합니다</li>\n<li><strong>행정소송</strong> — 재심사청구도 기각된 경우 행정소송을 제기할 수 있으며, 재판에서 거절 처분이 위법하다는 판결을 받으면 수급자격이 인정됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 심사청구 기한(90일)을 놓치면 더 이상 불복할 수 없으므로 거절 통보를 받는 즉시 기한을 확인하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부서이동 거부 퇴사 시 수급자격 인정',
        summary:
          '서울행정법원 2014구합2270 사건(서울행법, 2014.07.03 선고)에서 법원은 인바운드 상담원이 멀티부서 이동 지시를 받고 퇴사한 사안에서, 부서이동으로 월 평균 임금이 46% 이상 하락하는 것은 근로조건 저하에 해당하므로 정당한 이직 사유로 인정된다고 판시했습니다.',
        takeaway:
          '자발적 퇴사라도 임금 하락, 근로조건 저하가 입증되면 실업급여 수급자격이 인정될 수 있으므로, 퇴사 전후 근로조건 변동 증거를 반드시 확보하세요.',
      },
    ],
    faq: [
      {
        question: '실업급여 거절 통보를 받으면 바로 이의신청을 해야 하나요?',
        answer:
          '<strong>거절 처분 통보를 받은 날부터 90일 이내에 심사청구를 해야 합니다.</strong> 기한이 지나면 불복할 수 없으므로 거절 통보서를 받자마자 사유를 확인하고, 증거 보완이 필요하면 빠르게 준비하세요.',
      },
      {
        question: '자발적 퇴사인데 실업급여를 받을 수 있는 경우가 있나요?',
        answer:
          '<strong>임금 체불, 근로조건 저하, 괴롭힘 등 정당한 이직 사유에 해당하면 자발적 퇴사도 실업급여가 가능합니다.</strong> 고용보험법 시행규칙 별표 2에 열거된 사유를 확인하고, 해당 사유를 뒷받침하는 증거를 제출하면 됩니다.',
      },
      {
        question: '피보험 단위기간 180일은 어떻게 계산하나요?',
        answer:
          '<strong>유급·무급에 관계없이 고용보험에 가입되어 있던 날을 합산합니다.</strong> 여러 직장의 피보험기간을 합산할 수 있지만, 이전 직장에서 이미 실업급여를 수급한 경우 그 기간은 제외됩니다.',
      },
      {
        question: '해외여행 중에 실업급여 신청 기한이 지나면 어떻게 되나요?',
        answer:
          '<strong>수급기간(퇴사 후 12개월)은 연장되지 않으므로 그 안에 돌아와 신청해야 합니다.</strong> 다만 출산, 질병 등 불가피한 사유가 있으면 수급기간 연장 신청이 가능하므로 고용센터에 미리 문의하세요.',
      },
      {
        question: '고용보험에 미가입된 상태였는데 실업급여를 받을 수 있나요?',
        answer:
          '<strong>사업주가 고용보험 가입 의무를 이행하지 않은 경우 소급 가입이 가능합니다.</strong> 근로복지공단에 피보험자격 확인 청구를 하면 가입 여부를 조사하고, 확인되면 소급 적용하여 피보험기간이 인정됩니다.',
      },
    ],
    cta: {
      text: '실업급여 거절 사유와 대응 방법, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여 가능 여부', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '권고사직과 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '부당해고 구제 신청 절차', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '임금체불 신고 절차 정리', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ───────────────────────────────────────────
  // 9. unemployment / voluntary-quit-approved-case-types
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'voluntary-quit-approved-case-types',
    keyword: '자발적 퇴사 실업급여 인정 사례',
    questionKeyword: '자발적으로 퇴사했는데 실업급여를 인정받은 경우가 있나요?',
    ctaKeyword: '자발적 퇴사 실업급여 인정 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '자발적 퇴사 실업급여 인정 사례 6가지 유형 | 로앤가이드',
      description:
        '본인이 퇴사했지만 실업급여를 받을 수 있는지 궁금하다면 인정된 실제 사례 유형 6가지를 지금 확인하세요',
    },
    intro:
      '<p>직장 내 괴롭힘이 너무 심해서 도저히 버틸 수 없었습니다. 결국 사직서를 냈는데, 주변에서 "자발적 퇴사면 실업급여 못 받는다"고 합니다. 하지만 고용보험법 시행규칙에는 "정당한 이직 사유"에 해당하면 자발적 퇴사도 실업급여가 가능하다고 명시되어 있습니다. 실제로 인정받은 사례 유형을 정리해보세요.</p>',
    sections: [
      {
        title: '자발적 퇴사도 실업급여 인정되는 6가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 제101조 제2항 별표 2에 열거된 정당한 이직 사유 중 자발적 퇴사에 적용되는 주요 유형입니다.</strong></p>\n<ol>\n<li><strong>임금 체불·삭감</strong> — 2개월 이상 임금이 체불되거나 채용 시보다 임금이 현저히 낮아진 경우. 급여명세서, 통장 내역으로 입증합니다</li>\n<li><strong>근로조건 일방적 변경</strong> — 사업주가 일방적으로 근무지 이전, 직무 변경, 근로시간 대폭 변경 등을 단행한 경우</li>\n<li><strong>직장 내 괴롭힘·성희롱</strong> — 사업주 또는 동료의 괴롭힘·성희롱이 있고, 사업주에게 시정을 요구했으나 조치가 이뤄지지 않은 경우</li>\n<li><strong>본인 질병·부상</strong> — 업무수행이 곤란한 질병이나 부상으로 의사 소견서가 있는 경우</li>\n<li><strong>통근 곤란</strong> — 사업장 이전으로 왕복 3시간 이상 통근이 필요해진 경우</li>\n<li><strong>가족 돌봄</strong> — 부모·배우자·자녀의 질병·부상으로 30일 이상 간호가 필요하고, 사업주에게 휴직을 신청했으나 허용되지 않은 경우</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "정당한 이직 사유"를 입증하는 증거가 핵심이며, 사직서에 "일신상의 사유"로만 쓰면 인정이 어려울 수 있습니다</blockquote>',
      },
      {
        title: '인정받기 위한 증거 확보 전략',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 정당한 이직 사유를 뒷받침할 증거를 반드시 확보해야 합니다.</strong></p>\n<ul>\n<li><strong>임금 체불</strong> — 급여명세서, 통장 거래내역, 사업주에게 임금 지급을 요구한 카카오톡·이메일</li>\n<li><strong>근로조건 변경</strong> — 변경 전후 근로계약서, 인사발령 통지서, 급여 차이를 보여주는 자료</li>\n<li><strong>괴롭힘·성희롱</strong> — 녹취록, 카카오톡 대화, 목격자 진술서, 사업주에게 시정 요구한 내역</li>\n<li><strong>질병·부상</strong> — 진단서(업무수행 곤란 명시), 의사 소견서</li>\n<li><strong>통근 곤란</strong> — 사업장 이전 전후 주소지 확인, 교통수단별 소요시간 증빙</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 퇴사 사유의 인정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사직서 작성 시 주의사항과 고용센터 신고 절차',
        content:
          '<p><strong style="color:#1e3a5f">사직서 사유란에 "일신상의 사유"만 쓰면 자발적 퇴사로 분류되어 불리해질 수 있습니다.</strong></p>\n<ul>\n<li><strong>사직서 작성</strong> — "임금 2개월 이상 체불로 인한 퇴직", "사업장 이전으로 통근 곤란" 등 구체적 사유를 명시하세요</li>\n<li><strong>이직확인서 확인</strong> — 사업주가 제출하는 이직확인서에 이직 사유가 "자발적 퇴사(정당한 사유)"로 기재되었는지 반드시 확인하세요. 사업주가 허위 기재하면 고용센터에 정정 요청이 가능합니다</li>\n<li><strong>고용센터 상담</strong> — 퇴사 전 관할 고용센터에 방문하여 본인 사유가 정당한 이직 사유에 해당하는지 사전 상담을 받으면 거절 가능성을 줄일 수 있습니다</li>\n<li><strong>수급자격 인정 교육</strong> — 수급자격이 인정되면 워크넷에서 구직등록 후 수급자격 인정 교육(온라인)을 이수해야 급여가 지급됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴사 전에 고용센터 사전 상담을 받으면 필요한 증거와 절차를 미리 안내받을 수 있어 거절 확률이 낮아집니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외법인 전출 후 퇴직 시 수급자격 판단',
        summary:
          '울산지법 2013구합2840 사건(울산지법, 2014.04.24 선고)에서 법원은 같은 그룹 베트남 법인으로 전출되어 근무하다 퇴직한 근로자가 국내 회사 퇴직일로부터 12개월이 지난 후 수급자격을 신청한 사안에서, 전출 시 퇴직금이 지급되고 고용보험 피보험자격이 상실되었으므로 국내 회사와 고용관계가 끝난 시점이 이직 시점이라고 판시했습니다.',
        takeaway:
          '해외법인 전출이나 계열사 이동 시 국내 고용관계 종료 시점이 실업급여 수급기간의 기산점이 되므로, 전출 시점에 고용보험 자격 변동을 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사직서에 "일신상의 사유"라고 썼으면 이미 늦은 건가요?',
        answer:
          '<strong>사직서 기재 내용이 절대적인 것은 아닙니다.</strong> 고용센터에 실제 퇴직 사유를 입증하는 증거를 별도로 제출하면 됩니다. 다만 사직서에 구체적 사유를 적는 것이 더 유리하므로, 아직 제출 전이라면 사유를 수정하세요.',
      },
      {
        question: '직장 내 괴롭힘으로 퇴사했는데 증거가 카카오톡밖에 없어요',
        answer:
          '<strong>카카오톡 대화 캡처만으로도 충분한 증거가 될 수 있습니다.</strong> 날짜·시간·발신자가 확인되는 화면 캡처를 출력하고, 가능하면 목격자 진술서나 회사에 시정 요구한 내역도 함께 제출하면 인정 가능성이 높아집니다.',
      },
      {
        question: '임금 삭감이 어느 정도여야 정당한 이직 사유가 되나요?',
        answer:
          '<strong>판례에서는 임금이 채용 시 대비 상당 폭(예: 30~40% 이상) 하락한 경우를 정당한 사유로 인정하는 경향이 있습니다.</strong> 명확한 기준은 없으나, 2개월 이상 지속되는 근로조건 저하가 핵심 판단 요소입니다.',
      },
      {
        question: '통근 시간이 얼마 이상이면 정당한 퇴사 사유인가요?',
        answer:
          '<strong>고용보험법 시행규칙 별표 2에서는 사업장 이전으로 통근이 곤란한 경우를 정당한 사유로 봅니다.</strong> 왕복 3시간 이상이 일반적 기준으로 적용되며, 대중교통 이용 시간표를 증빙으로 제출하면 됩니다.',
      },
    ],
    cta: {
      text: '자발적 퇴사 실업급여 인정 가능성, AI가 분석해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여 가능 여부', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '권고사직 시 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '해고 첫 24시간 대응', href: '/guide/dismissal/dismissal-fired-first-24hours' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 10. unemployment / first-application-employment-center-checklist
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'first-application-employment-center-checklist',
    keyword: '실업급여 첫 신청 고용센터 체크리스트',
    questionKeyword: '실업급여 첫 신청 때 고용센터에 뭘 가져가야 하나요?',
    ctaKeyword: '실업급여 첫 신청 준비 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '실업급여 첫 신청 고용센터 준비물 7가지 체크리스트 | 로앤가이드',
      description:
        '실업급여를 처음 신청하는데 고용센터에 뭘 들고 가야 할지 모르겠다면 필수 준비물 7가지를 지금 확인하세요',
    },
    intro:
      '<p>퇴사하고 나서 실업급여를 신청하려는데, 고용센터에 그냥 가면 되는 건지 뭘 준비해야 하는 건지 막막합니다. 주변에 물어보면 "그냥 가면 된다"는 사람도 있고, "서류 없으면 헛걸음한다"는 사람도 있습니다. 첫 방문에서 헛걸음하지 않으려면 미리 체크리스트를 확인하고 가세요.</p>',
    sections: [
      {
        title: '고용센터 방문 전 필수 준비물 7가지',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 첫 신청 시 고용센터에 가져가야 할 서류와 준비사항을 정리합니다.</strong></p>\n<ol>\n<li><strong>신분증</strong> — 주민등록증, 운전면허증, 여권 중 하나를 지참합니다</li>\n<li><strong>이직확인서 제출 확인</strong> — 사업주가 이직확인서를 고용보험 시스템에 제출했는지 미리 확인합니다. 고용보험 홈페이지(www.ei.go.kr)에서 조회 가능합니다</li>\n<li><strong>워크넷 구직등록</strong> — 고용센터 방문 전 워크넷(www.work.go.kr)에서 구직등록을 완료해야 합니다. 등록하지 않으면 수급자격 인정 신청이 불가합니다</li>\n<li><strong>수급자격 인정 교육 수료</strong> — 고용보험 홈페이지에서 온라인 수급자격 인정 교육(약 1시간)을 이수하고, 이수 확인을 받아두세요</li>\n<li><strong>통장 사본</strong> — 본인 명의 계좌의 통장 사본 또는 계좌번호를 준비합니다</li>\n<li><strong>퇴직 사유 증빙 서류</strong> — 자발적 퇴사의 경우 정당한 이직 사유를 입증하는 서류(진단서, 체불 증빙, 괴롭힘 증거 등)를 지참합니다</li>\n<li><strong>고용보험 가입 이력 확인</strong> — 이전 직장 포함 전체 피보험기간을 확인합니다. 고용보험 홈페이지에서 조회할 수 있습니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 워크넷 구직등록과 수급자격 인정 교육은 고용센터 방문 전에 온라인으로 미리 마쳐야 합니다</blockquote>',
      },
      {
        title: '고용센터 방문 당일 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터에 도착하면 다음 순서로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계: 접수</strong> — 신분증을 제시하고 실업급여 수급자격 인정 신청서를 작성·제출합니다</li>\n<li><strong>2단계: 상담</strong> — 취업지원관과 1:1 상담을 진행합니다. 퇴직 사유, 구직 계획, 재취업 활동 의사를 확인합니다</li>\n<li><strong>3단계: 실업인정일 지정</strong> — 1~4주마다 고용센터에 출석하여 구직 활동을 보고하는 실업인정일이 지정됩니다</li>\n<li><strong>4단계: 수급자격 결정 통보</strong> — 신청 후 약 14일 이내에 수급자격 인정 여부가 결정되고 통보됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 실업급여 수급자격과 예상 급여액을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실업인정과 급여 수령까지 알아야 할 것',
        content:
          '<p><strong style="color:#1e3a5f">수급자격이 인정되면 대기기간(7일)이 지난 후부터 급여가 지급됩니다.</strong></p>\n<ul>\n<li><strong>대기기간</strong> — 수급자격 인정일부터 7일간은 대기기간으로 급여가 지급되지 않습니다. 이 기간에도 구직활동은 해야 합니다</li>\n<li><strong>실업인정</strong> — 지정된 실업인정일에 고용센터에 출석하거나 온라인으로 구직활동 보고를 합니다. 실업인정을 받아야 해당 기간 급여가 지급됩니다</li>\n<li><strong>급여 지급</strong> — 실업인정 후 약 3~5영업일 이내에 등록한 계좌로 입금됩니다. 1일 급여액은 퇴직 전 평균임금의 60%(상한액 66,000원, 하한액 최저임금의 80%)입니다</li>\n<li><strong>구직활동 요건</strong> — 실업인정 기간마다 최소 1~2회의 구직활동(입사지원, 면접, 직업훈련 등)을 해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실업인정일에 출석하지 않으면 해당 기간 급여를 받지 못하므로 일정을 꼭 기억하세요. 부득이한 사유가 있으면 사전에 변경 신청이 가능합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 복직 시 구직급여 회수',
        summary:
          '대구지법 2014구합1590 사건(대구지법, 2014.12.24 선고)에서 법원은 징계해고 후 구직급여를 수령한 근로자가 부당해고 구제신청으로 원직복직된 사안에서, 복직으로 인해 해고 시점으로 소급하여 고용관계가 유지된 것이므로 구직급여의 수급 요건을 갖추지 못했다고 판시했습니다.',
        takeaway:
          '부당해고 구제신청과 실업급여를 동시에 진행하는 경우, 복직 시 구직급여를 반환해야 할 수 있으므로 두 절차의 관계를 미리 이해하고 진행하세요.',
      },
    ],
    faq: [
      {
        question: '이직확인서를 사업주가 제출하지 않으면 어떻게 하나요?',
        answer:
          '<strong>고용센터에 이직확인서 미제출을 신고하면 됩니다.</strong> 사업주가 10일 이내에 제출하지 않으면 과태료가 부과되며, 고용센터가 직권으로 이직 사유를 조사하여 수급자격을 결정할 수 있습니다.',
      },
      {
        question: '관할 고용센터가 아닌 다른 곳에 가도 되나요?',
        answer:
          '<strong>원칙적으로 거주지 관할 고용센터에 방문해야 합니다.</strong> 다만 사정이 있으면 다른 고용센터에서도 상담은 가능합니다. 실업인정은 관할 고용센터에서 받아야 하므로 관할지를 미리 확인하세요.',
      },
      {
        question: '워크넷 구직등록 없이 고용센터에 가면 어떻게 되나요?',
        answer:
          '<strong>구직등록이 안 되어 있으면 수급자격 인정 신청 자체가 불가합니다.</strong> 고용센터에서 현장 등록이 가능한 경우도 있지만, 대기 시간이 길어지므로 미리 온라인으로 등록하고 가는 것이 좋습니다.',
      },
      {
        question: '수급자격 인정 교육은 꼭 미리 들어야 하나요?',
        answer:
          '<strong>온라인 교육을 미리 이수하면 고용센터 방문 시간을 절약할 수 있습니다.</strong> 고용센터에서 현장 교육을 받을 수도 있지만, 대기 시간이 추가되므로 고용보험 홈페이지에서 미리 이수하는 것을 권장합니다.',
      },
      {
        question: '퇴사 후 언제까지 실업급여를 신청해야 하나요?',
        answer:
          '<strong>퇴사일 다음 날부터 12개월이 수급기간이며, 이 기간 안에 신청해야 합니다.</strong> 가능한 빨리 신청하는 것이 유리하며, 신청이 늦어질수록 받을 수 있는 총 급여액이 줄어듭니다.',
      },
    ],
    cta: {
      text: '실업급여 첫 신청 준비, AI가 체크해드립니다',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '계약만료 실업급여 안내', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
      { label: '실업급여 부정수급 처벌', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '권고사직 시 확인사항', href: '/guide/dismissal/dismissal-recommended-resignation-check' },
      { label: '퇴직금 청구 어디서부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 11. wage / wage-complaint-kakao-bank-evidence-enough
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-complaint-kakao-bank-evidence-enough',
    keyword: '임금체불 카톡 통장 증거',
    questionKeyword: '카카오톡과 통장내역만으로 임금체불 신고가 가능한가요?',
    ctaKeyword: '임금체불 증거 충분 여부 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임금체불 신고 카톡·통장내역 증거 3가지 활용법 | 로앤가이드',
      description:
        '근로계약서 없이 카톡과 통장내역만 있는데 임금체불 신고가 될지 걱정이라면 증거 활용법 3가지를 지금 확인하세요',
    },
    intro:
      '<p>근로계약서를 쓰지 않고 일을 시작했습니다. 월급이 밀려서 신고하고 싶은데, 가진 증거라곤 사장님과 주고받은 카카오톡 대화와 통장 입금 내역뿐입니다. "계약서 없으면 소용없다"는 말에 걱정이 됩니다. 실제로 카톡과 통장내역만으로도 임금체불 진정은 가능합니다.</p>',
    sections: [
      {
        title: '카카오톡 대화가 증거로 인정되는 범위',
        content:
          '<p><strong style="color:#1e3a5f">카카오톡 대화는 근로관계와 임금 약정을 입증하는 강력한 증거가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>근로관계 존재 입증</strong> — "내일부터 출근해", "9시까지 오세요", "오늘 업무 지시" 등의 대화는 사용자-근로자 관계를 증명합니다</li>\n<li><strong>임금 약정 입증</strong> — "월 200만 원", "시급 만원", "이번 달 급여는" 등 금액이 언급된 대화는 임금 합의 증거가 됩니다</li>\n<li><strong>체불 사실 입증</strong> — "급여가 아직 안 들어왔어요", "다음 달에 줄게" 등의 대화는 사업주가 체불을 인지하고 있었다는 증거입니다</li>\n<li><strong>근로시간 입증</strong> — 업무 지시·보고 카톡의 시간대가 실제 근로시간을 추정하는 보조 증거가 됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카카오톡 대화를 캡처할 때 날짜·시간·발신자 정보가 모두 보이도록 전체 화면을 캡처하세요. 일부만 잘라낸 캡처는 증거력이 떨어질 수 있습니다</blockquote>',
      },
      {
        title: '통장 거래내역의 증거 활용법',
        content:
          '<p><strong style="color:#1e3a5f">통장 거래내역은 실제 입금 여부와 금액 차이를 객관적으로 증명하는 핵심 증거입니다.</strong></p>\n<ul>\n<li><strong>입금 패턴 확인</strong> — 매월 일정 날짜에 같은 금액이 입금되다가 끊긴 시점이 체불 시작일입니다</li>\n<li><strong>일부 지급 입증</strong> — 약정 금액보다 적은 금액만 입금된 경우 차액이 체불 금액이 됩니다</li>\n<li><strong>사업주 명의 확인</strong> — 입금자명이 사업주 또는 회사명이면 근로관계 증거로 활용됩니다</li>\n<li><strong>출력 방법</strong> — 인터넷뱅킹에서 거래내역을 조회한 뒤 PDF로 출력하거나 은행에서 거래내역 확인서를 발급받으세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보유 증거의 충분성과 보완 방법을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 보완 방법과 진정서 작성 팁',
        content:
          '<p><strong style="color:#1e3a5f">카톡과 통장내역만으로도 진정은 가능하지만, 추가 증거가 있으면 인정 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>추가 확보 가능한 증거</strong> — 출퇴근 교통카드 내역, CCTV 출입 기록, 업무 이메일, 동료 근로자 진술서, 4대보험 가입 이력</li>\n<li><strong>진정서 작성 시</strong> — "카카오톡 대화 ○○건(별첨 1), 통장 거래내역(별첨 2)"처럼 증거 목록을 번호를 붙여 정리합니다</li>\n<li><strong>체불 금액 산출표</strong> — 월별·항목별(기본급, 주휴수당, 연장수당) 체불 금액을 표로 정리하여 첨부하면 조사관이 빠르게 파악할 수 있습니다</li>\n<li><strong>증거 보관</strong> — 원본 카톡 대화는 삭제하지 말고, 캡처 파일과 함께 보관하세요. 노동청 조사 시 원본 확인을 요구할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 근로계약서가 없어도 카카오톡·통장내역·동료 진술 등을 조합하면 충분히 근로관계와 체불 사실을 입증할 수 있습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 최저임금 미달 판단',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 기본임금을 미리 정하지 않고 법정수당까지 포함하여 월급여액을 정한 포괄임금계약에서 최저임금 미달 여부를 판단하는 방법을 제시하며, 비교대상 임금을 소정근로시간으로 나누어 산정해야 한다고 판시했습니다.',
        takeaway:
          '근로계약서 없이 구두로 약정한 임금이라도, 실제 지급 금액이 최저임금에 미달하면 그 차액도 임금체불에 해당하므로 통장내역으로 확인해보세요.',
      },
    ],
    faq: [
      {
        question: '카카오톡 대화가 법적 증거로 인정되나요?',
        answer:
          '<strong>네, 카카오톡 대화는 민사·형사 절차에서 증거로 인정됩니다.</strong> 다만 날짜·시간·발신자가 식별 가능해야 하며, 대화 맥락이 왜곡되지 않도록 전후 대화를 함께 캡처하는 것이 중요합니다.',
      },
      {
        question: '통장 입금자명이 사장 개인이름인데 괜찮나요?',
        answer:
          '<strong>사업주 개인 명의로 입금된 것도 임금 지급 증거가 됩니다.</strong> 오히려 사업주와의 근로관계를 보여주는 추가 증거가 될 수 있습니다. 매월 같은 사람으로부터 일정 금액이 입금된 패턴이 중요합니다.',
      },
      {
        question: '카톡을 삭제해버렸는데 복구할 수 있나요?',
        answer:
          '<strong>카카오톡 백업 파일이 있으면 복구 가능합니다.</strong> 설정 > 채팅 > 대화 백업에서 백업 여부를 확인하세요. 백업이 없으면 상대방에게 대화 내역을 요청하거나, 노동청 조사 시 상대방 기기 확인을 요청할 수 있습니다.',
      },
      {
        question: '근로계약서 없이 일한 기간도 임금체불 신고가 되나요?',
        answer:
          '<strong>근로계약서가 없어도 실제 근로 사실이 입증되면 임금체불 신고가 가능합니다.</strong> 근로기준법은 구두 계약도 유효하게 인정하며, 사업주가 서면 근로계약서를 교부하지 않은 것 자체가 근로기준법 위반(500만 원 이하 과태료)입니다.',
      },
    ],
    cta: {
      text: '카톡·통장내역 증거 충분 여부, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '야근 수당 증거 5가지', href: '/guide/wage/overtime-no-pay-evidence-5-types' },
      { label: '해고 후 첫 24시간 대응', href: '/guide/dismissal/dismissal-fired-first-24hours' },
    ],
  },

  // ───────────────────────────────────────────
  // 12. wage / partial-salary-payment-response-steps
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'partial-salary-payment-response-steps',
    keyword: '월급 일부만 지급 대처법',
    questionKeyword: '사장이 월급을 일부만 줬을 때 어떻게 해야 하나요?',
    ctaKeyword: '월급 일부 체불 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '월급 일부만 받았을 때 대처 순서 4단계 | 로앤가이드',
      description:
        '약정한 월급보다 적은 금액만 입금됐는데 어떻게 대응해야 할지 모르겠다면 4단계 대처 순서를 지금 확인하세요',
    },
    intro:
      '<p>이번 달 월급이 들어왔는데 약속한 금액보다 50만 원이 적습니다. 사장에게 물어보니 "경영이 어려워서 이번 달만 그렇다"고 합니다. 하지만 다음 달에도 같은 일이 반복될까 걱정됩니다. 전액 체불이 아니라 일부 체불이라서 신고가 될지도 모르겠습니다. 일부만 지급받았을 때의 단계별 대처 순서를 정리해보세요.</p>',
    timelineSteps: [
      '1단계: 차액 확인 및 서면 요구',
      '2단계: 내용증명 발송',
      '3단계: 노동청 진정',
      '4단계: 민사소송 또는 체당금 신청',
    ],
    sections: [
      {
        title: '1~2단계: 차액 확인과 서면 요구',
        content:
          '<p><strong style="color:#1e3a5f">먼저 체불 차액을 정확히 계산하고, 사업주에게 서면으로 지급을 요구해야 합니다.</strong></p>\n<ul>\n<li><strong>차액 계산</strong> — 근로계약서상 약정 임금에서 실제 입금액을 빼면 체불 금액이 됩니다. 기본급뿐 아니라 연장수당, 주휴수당, 야간수당도 포함하여 계산하세요</li>\n<li><strong>급여명세서 요청</strong> — 사업주에게 급여명세서 교부를 요청합니다. 2021년 11월부터 사업주는 임금명세서를 의무적으로 교부해야 하며, 미교부 시 과태료가 부과됩니다</li>\n<li><strong>카카오톡·문자로 요구</strong> — "○월 급여 중 ○○만 원이 미지급되었으니 ○일까지 지급해주세요"라고 서면(카톡 포함)으로 요구합니다. 이 대화 기록이 향후 체불 증거가 됩니다</li>\n<li><strong>내용증명 발송</strong> — 구두 요구에도 지급하지 않으면 내용증명 우편을 보냅니다. "○년 ○월분 임금 차액 ○○만 원을 14일 이내에 지급하라"는 내용을 작성합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전액 미지급이든 일부 미지급이든 근로기준법상 임금체불에 해당하며, 3년 이하 징역 또는 3천만 원 이하 벌금의 처벌 대상입니다</blockquote>',
      },
      {
        title: '3단계: 노동청 진정 신청',
        content:
          '<p><strong style="color:#1e3a5f">서면 요구에도 지급하지 않으면 관할 고용노동지청에 진정서를 제출합니다.</strong></p>\n<ul>\n<li><strong>진정서 작성</strong> — 고용노동부 홈페이지에서 양식을 다운로드하거나, 관할 지청에 방문·우편·온라인(고용노동부 민원마당)으로 제출합니다</li>\n<li><strong>첨부 서류</strong> — 근로계약서(또는 카카오톡 합의 내역), 급여명세서, 통장 거래내역, 내용증명 발송 내역, 차액 계산서를 함께 제출합니다</li>\n<li><strong>조사 진행</strong> — 진정 접수 후 근로감독관이 사업장을 조사합니다. 사업주에게 출석 요구, 자료 제출 요구가 이루어집니다</li>\n<li><strong>시정 명령</strong> — 체불이 확인되면 사업주에게 14일 이내 시정 명령이 내려지며, 미이행 시 검찰에 사건이 송치됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 체불 차액 계산과 진정서 작성을 도와드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 민사소송과 지연이자 청구',
        content:
          '<p><strong style="color:#1e3a5f">노동청 진정으로 해결되지 않으면 민사소송을 제기하여 미지급 임금과 지연이자를 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>소액사건심판</strong> — 체불 금액이 3,000만 원 이하면 소액사건심판으로 간편하게 청구할 수 있습니다. 변호사 없이도 진행 가능합니다</li>\n<li><strong>지연이자</strong> — 근로기준법 제37조에 따라 퇴직 후 14일이 지나도 미지급된 임금에는 연 20%의 지연이자가 붙습니다. 재직 중 체불도 퇴직 후 14일 경과 시점부터 지연이자가 발생합니다</li>\n<li><strong>체당금 제도</strong> — 사업주가 파산하거나 지급 능력이 없는 경우 근로복지공단에 체당금(최대 1,000만 원)을 신청할 수 있습니다</li>\n<li><strong>형사고소</strong> — 진정과 별개로 사업주를 임금체불죄(근로기준법 제109조)로 형사고소할 수도 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임금채권의 소멸시효는 3년이므로, 체불이 발생한 시점부터 3년 이내에 반드시 청구해야 합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 내부 관행이 근로계약 내용이 되는 요건',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업 내부 관행이 근로계약의 내용이 되려면 기업 사회에서 일반적으로 규범적 사실로서 명확히 승인되거나 구성원에 의해 당연한 것으로 받아들여져야 한다고 판시했습니다.',
        takeaway:
          '"매달 ○○만 원을 준다"는 구두 약속도 반복적으로 이행되면 관행으로 인정될 수 있으므로, 입금 내역을 증거로 확보하면 일부 체불 주장이 더 강력해집니다.',
      },
    ],
    faq: [
      {
        question: '전액이 아니라 일부만 체불이어도 신고할 수 있나요?',
        answer:
          '<strong>네, 1원이라도 약정 임금에서 부족하면 임금체불에 해당합니다.</strong> 전액 미지급이든 일부 미지급이든 근로기준법 위반으로 처벌 대상이며, 노동청 진정이 가능합니다.',
      },
      {
        question: '경영 어려움을 이유로 월급을 깎아도 되나요?',
        answer:
          '<strong>사업주가 일방적으로 임금을 삭감하는 것은 근로기준법 위반입니다.</strong> 임금 변경은 근로자의 서면 동의가 필요하며, 동의 없이 삭감된 차액은 체불에 해당합니다.',
      },
      {
        question: '재직 중에 신고하면 회사에서 불이익을 받지 않나요?',
        answer:
          '<strong>근로기준법 제104조에 따라 신고를 이유로 불이익을 주는 것은 금지되어 있습니다.</strong> 신고를 이유로 해고·전보·감봉 등의 불이익을 받으면 이 역시 노동청에 신고할 수 있고, 부당해고로 구제받을 수 있습니다.',
      },
      {
        question: '사장이 "다음 달에 밀린 월급을 준다"고 했으면 기다려야 하나요?',
        answer:
          '<strong>기다릴 필요 없습니다.</strong> 임금은 약정된 지급일에 전액 지급해야 하며, "다음 달에 준다"는 약속은 법적 구속력이 없습니다. 다만 카톡이나 문자로 받아두면 체불 인정 증거로 활용할 수 있습니다.',
      },
      {
        question: '일부 체불 금액이 적은데도 노동청에 진정할 가치가 있나요?',
        answer:
          '<strong>금액에 관계없이 진정 가능하며, 반복되는 일부 체불을 조기에 차단하는 것이 중요합니다.</strong> 소액이라도 누적되면 상당한 금액이 되고, 신고 이력이 있으면 사업주가 다시 체불할 가능성이 낮아집니다.',
      },
    ],
    cta: {
      text: '월급 일부 체불 대처법, AI가 단계별로 안내해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 진정서 작성 가이드', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '퇴사 후 밀린 월급 청구', href: '/guide/wage/unpaid-salary-after-quit-guide' },
      { label: '임금체불 지연이자 청구', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
      { label: '부당해고 구제 신청', href: '/guide/dismissal/dismissal-unfair-relief' },
    ],
  },

  // ───────────────────────────────────────────
  // 13. wage / post-resignation-wage-complaint-procedure
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'post-resignation-wage-complaint-procedure',
    keyword: '퇴사 후 임금체불 노동청 신고',
    questionKeyword: '퇴사 후 임금체불이면 노동청에 어떻게 신고하나요?',
    ctaKeyword: '퇴사 후 임금체불 신고 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴사 후 임금체불 노동청 신고 절차 5단계 | 로앤가이드',
      description:
        '회사를 그만뒀는데 밀린 월급을 안 주고 있어서 노동청에 신고하고 싶다면 퇴사 후 신고 절차 5단계를 지금 확인하세요',
    },
    intro:
      '<p>퇴사한 지 3주가 지났는데 마지막 달 월급이 아직 안 들어왔습니다. 사장에게 연락하면 "계산 중이다"만 반복합니다. 근로기준법에 따르면 퇴직일로부터 14일 이내에 모든 임금을 청산해야 하며, 이를 지키지 않으면 사업주는 형사처벌 대상이 됩니다. 퇴사 후 노동청 신고 절차를 정리해보세요.</p>',
    timelineSteps: [
      '1단계: 미지급 금액 확인',
      '2단계: 사업주에게 서면 요구',
      '3단계: 노동청 진정 접수',
      '4단계: 근로감독관 조사',
      '5단계: 시정명령·검찰 송치',
    ],
    sections: [
      {
        title: '1~2단계: 미지급 금액 확인과 서면 요구',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 후 14일이 지나도 임금이 미지급되면 바로 증거를 정리하고 서면 요구를 시작해야 합니다.</strong></p>\n<ul>\n<li><strong>미지급 항목 정리</strong> — 마지막 달 기본급, 연장·야간·휴일 수당, 미사용 연차수당, 퇴직금을 각각 구분하여 계산합니다</li>\n<li><strong>퇴직 후 14일 기한</strong> — 근로기준법 제36조에 따라 사용자는 퇴직일로부터 14일 이내에 모든 금품을 청산해야 합니다. 14일이 지나면 연 20%의 지연이자가 발생합니다</li>\n<li><strong>서면 요구</strong> — 카카오톡, 이메일, 내용증명 중 하나로 "○년 ○월 ○일 퇴직하였으나 ○○만 원이 미지급되어 있으니 ○일까지 지급 바랍니다"라고 요구합니다</li>\n<li><strong>증거 정리</strong> — 근로계약서, 급여명세서, 통장 거래내역, 사업주와의 대화 기록을 모아둡니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴사 후에도 회사 이메일이나 사내 시스템 접근이 가능하다면 급여 관련 자료를 먼저 확보하세요. 퇴사 후에는 접근이 차단될 수 있습니다</blockquote>',
      },
      {
        title: '3단계: 노동청 진정 접수 방법',
        content:
          '<p><strong style="color:#1e3a5f">서면 요구에도 지급하지 않으면 관할 고용노동지청에 진정서를 접수합니다.</strong></p>\n<ul>\n<li><strong>접수 방법 3가지</strong> — (1) 고용노동부 민원마당(minwon.moel.go.kr) 온라인 접수 (2) 관할 고용노동지청 방문 접수 (3) 우편 접수</li>\n<li><strong>진정서 기재사항</strong> — 사업장 정보(사업장명, 사업자등록번호, 대표자명, 주소), 근무기간, 약정 임금, 체불 금액, 체불 기간을 구체적으로 기재합니다</li>\n<li><strong>관할 지청</strong> — 사업장 소재지 관할 고용노동지청에 접수합니다. 관할이 맞지 않으면 이송되어 시간이 지연됩니다</li>\n<li><strong>접수 후</strong> — 접수번호와 담당 근로감독관 연락처를 확인해두세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 진정서 작성과 필요 서류를 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4~5단계: 근로감독관 조사와 이후 절차',
        content:
          '<p><strong style="color:#1e3a5f">진정 접수 후 근로감독관이 조사를 진행하며, 결과에 따라 시정명령 또는 검찰 송치가 이루어집니다.</strong></p>\n<ul>\n<li><strong>조사 기간</strong> — 진정 접수 후 통상 25일~40일 이내에 조사가 완료됩니다. 사안이 복잡하면 기간이 연장될 수 있습니다</li>\n<li><strong>사업주 출석 요구</strong> — 근로감독관이 사업주에게 출석 요구서를 발송하고, 체불 사실 여부를 확인합니다</li>\n<li><strong>시정 명령</strong> — 체불이 확인되면 사업주에게 14일 이내 시정 명령이 내려집니다. 이 기간에 지급하면 형사처벌 없이 종결됩니다</li>\n<li><strong>검찰 송치</strong> — 시정 명령을 이행하지 않으면 검찰에 사건이 송치됩니다. 사업주는 3년 이하 징역 또는 3천만 원 이하 벌금에 처해질 수 있습니다</li>\n<li><strong>지연이자 청구</strong> — 별도의 민사소송을 통해 퇴직 후 14일 경과 시점부터 연 20%의 지연이자를 청구할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 근로감독관 조사 시 사업주가 합의를 제안할 수 있습니다. 합의금이 체불 금액 전액과 지연이자를 포함하는지 반드시 확인하고, 합의서에 "잔여 채권 없음"이라는 문구가 있으면 주의하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 완성 주장과 신의칙',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 장례지도사들이 퇴직 후 3년이 지나 퇴직금을 청구한 사안에서, 사업주가 시효완성 전에 권리행사를 곤란하게 하거나 시효를 원용하지 않을 것 같은 태도를 보이지 않았다면 소멸시효 완성 주장이 권리남용에 해당하지 않는다고 판시했습니다.',
        takeaway:
          '퇴사 후 임금채권의 소멸시효는 3년이므로, "나중에 한꺼번에 청구하지"라고 미루면 시효가 지나 청구 자체가 불가능해질 수 있습니다. 체불이 확인되면 즉시 신고하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사 후에도 노동청에 임금체불 신고를 할 수 있나요?',
        answer:
          '<strong>네, 퇴사 후에도 3년의 소멸시효 내라면 언제든 진정이 가능합니다.</strong> 오히려 퇴사 후 신고하는 경우가 재직 중보다 더 많으며, 절차는 동일합니다.',
      },
      {
        question: '마지막 달 월급뿐 아니라 퇴직금도 함께 신고할 수 있나요?',
        answer:
          '<strong>네, 하나의 진정서에 미지급 임금과 퇴직금을 모두 포함하여 신고할 수 있습니다.</strong> 체불 항목별로 금액을 구분하여 기재하면 됩니다.',
      },
      {
        question: '사업주가 연락을 받지 않으면 어떻게 되나요?',
        answer:
          '<strong>근로감독관이 출석 요구서를 발송하며, 사업주가 정당한 사유 없이 출석하지 않으면 과태료가 부과됩니다.</strong> 반복 불출석 시 검찰에 바로 송치될 수 있습니다.',
      },
      {
        question: '퇴사 후 14일 이내에 지급하지 않으면 자동으로 처벌되나요?',
        answer:
          '<strong>자동 처벌되지는 않습니다.</strong> 근로자가 진정이나 고소를 해야 수사가 시작됩니다. 다만 14일 경과 시점부터 지연이자(연 20%)가 자동 발생하므로 청구 시 합산할 수 있습니다.',
      },
      {
        question: '회사가 폐업한 상태인데 신고가 가능한가요?',
        answer:
          '<strong>회사가 폐업했더라도 사업주 개인에 대해 신고할 수 있습니다.</strong> 다만 사업주에게 지급 능력이 없으면 근로복지공단에 체당금(최대 1,000만 원)을 신청하는 것이 실질적인 구제 방법입니다.',
      },
    ],
    cta: {
      text: '퇴사 후 임금체불 신고 절차, AI가 안내해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '퇴사 후 밀린 임금 청구', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 소멸시효 3년', href: '/guide/wage/unpaid-wage-3year-limitation' },
      { label: '임금체불 지연이자 청구', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 14. wage / wage-complaint-after-filing-procedure
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-complaint-after-filing-procedure',
    keyword: '임금체불 진정 후 절차',
    questionKeyword: '임금체불 진정 넣고 나서 어떻게 진행되나요?',
    ctaKeyword: '임금체불 진정 후 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금체불 진정 접수 후 진행 절차 4단계 정리 | 로앤가이드',
      description:
        '노동청에 임금체불 진정을 넣었는데 그 다음에 어떻게 진행되는지 궁금하다면 접수 후 4단계 절차를 지금 확인하세요',
    },
    intro:
      '<p>노동청에 임금체불 진정서를 접수했습니다. 접수번호도 받았고, 담당 근로감독관 이름도 확인했습니다. 그런데 그 다음이 막막합니다. 언제 연락이 오는 건지, 사장이 돈을 안 주면 어떻게 되는 건지, 내가 또 뭘 해야 하는 건지 모르겠습니다. 진정 접수 후 절차를 정리해보세요.</p>',
    timelineSteps: [
      '접수 후 7~14일: 담당 배정 및 사전 확인',
      '14~30일: 사업주 출석 요구 및 조사',
      '30~40일: 시정 명령 또는 체불 확인',
      '40일 이후: 검찰 송치 또는 종결',
    ],
    sections: [
      {
        title: '접수 후 조사 착수까지: 알아야 할 것',
        content:
          '<p><strong style="color:#1e3a5f">진정 접수 후 담당 근로감독관이 배정되고 사전 확인 절차가 시작됩니다.</strong></p>\n<ul>\n<li><strong>담당자 배정</strong> — 접수 후 약 7일 이내에 담당 근로감독관이 배정됩니다. 고용노동부 민원마당에서 진행 상황을 조회할 수 있습니다</li>\n<li><strong>사전 확인</strong> — 근로감독관이 진정인(근로자)에게 연락하여 사실관계를 확인합니다. 체불 금액, 근무 기간, 퇴사 경위 등을 질문합니다</li>\n<li><strong>보정 요구</strong> — 진정서에 누락된 정보가 있으면 보정을 요구합니다. 사업장 정보가 부정확하면 조사가 지연되므로 정확히 기재해야 합니다</li>\n<li><strong>근로자가 할 일</strong> — 근로감독관 연락에 즉시 응답하고, 추가 증거 제출 요청이 있으면 빠르게 대응합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로감독관이 연락했을 때 부재중이면 조사가 지연됩니다. 접수 후 2주간은 전화를 놓치지 않도록 주의하세요</blockquote>',
      },
      {
        title: '사업주 출석 조사와 시정 명령',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관이 사업주에게 출석 요구서를 발송하고 체불 사실을 조사합니다.</strong></p>\n<ul>\n<li><strong>출석 요구</strong> — 사업주에게 지정된 날짜에 고용노동지청에 출석하여 소명하도록 요구합니다. 임금대장, 근로계약서, 급여명세서 등의 자료 제출도 요구됩니다</li>\n<li><strong>대면 조사</strong> — 근로감독관이 사업주와 근로자의 진술을 비교하고, 제출된 자료를 검토합니다</li>\n<li><strong>체불 확인</strong> — 조사 결과 체불이 확인되면 사업주에게 14일 이내 지급을 명하는 시정 지시를 합니다</li>\n<li><strong>합의 권고</strong> — 조사 과정에서 사업주와 근로자 간 합의를 권유하는 경우가 있습니다. 합의 시 체불 금액 전액이 포함되는지 꼭 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 조사 대응 전략과 합의 시 주의사항을 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '시정 미이행 시: 검찰 송치와 이후 절차',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 시정 명령을 이행하지 않으면 사건이 검찰에 송치되고, 추가 구제 방법을 병행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>검찰 송치</strong> — 시정 명령 불이행 시 근로감독관이 수사 의견서를 작성하여 검찰에 송치합니다. 사업주는 근로기준법 제109조에 따라 3년 이하 징역 또는 3천만 원 이하 벌금에 처해질 수 있습니다</li>\n<li><strong>검찰 단계</strong> — 검찰에서 사업주를 기소하거나 약식기소(벌금형)할 수 있습니다. 이 단계에서 사업주가 체불금을 지급하면 공소권 없음 처분이 날 수 있습니다</li>\n<li><strong>민사소송 병행</strong> — 형사 절차와 별개로 민사소송을 제기하여 미지급 임금과 연 20% 지연이자를 청구할 수 있습니다</li>\n<li><strong>체불사업주 명단 공개</strong> — 체불 금액이 일정 기준 이상이면 고용노동부가 사업주 명단을 공개합니다</li>\n<li><strong>체당금 신청</strong> — 사업주가 지급 능력이 없으면 근로복지공단에 체당금(최대 1,000만 원)을 신청할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 검찰 송치 후에도 사업주가 체불금을 전액 지급하면 "반의사불벌죄" 적용으로 처벌이 면제될 수 있습니다. 실제 금전 회수가 목적이라면 사업주의 지급 의사를 확인하는 것이 중요합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 의미',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금은 근로의 대가로 지급되는 것이어야 하며, 금품 지급의무의 발생이 근로제공과 직접적으로 관련되거나 밀접하게 관련된 것으로 볼 수 있어야 한다고 판시했습니다.',
        takeaway:
          '진정 과정에서 체불 금액을 산정할 때 기본급 외에 정기적·계속적으로 지급된 수당도 임금에 포함될 수 있으므로, 모든 급여 항목을 빠짐없이 확인하세요.',
      },
    ],
    faq: [
      {
        question: '진정 접수 후 얼마나 기다려야 결과가 나오나요?',
        answer:
          '<strong>통상 접수 후 25~40일 이내에 조사가 완료됩니다.</strong> 사안이 복잡하거나 사업주가 출석하지 않으면 기간이 연장될 수 있습니다. 진행 상황은 고용노동부 민원마당에서 확인 가능합니다.',
      },
      {
        question: '근로감독관이 합의를 권유하면 응해야 하나요?',
        answer:
          '<strong>합의 여부는 전적으로 근로자의 선택입니다.</strong> 다만 합의 시 체불 금액 전액과 지연이자가 포함되는지 확인하고, "향후 잔여 채권 일체를 포기한다"는 문구가 있으면 서명 전 신중히 검토하세요.',
      },
      {
        question: '사업주가 출석하지 않으면 어떻게 되나요?',
        answer:
          '<strong>정당한 사유 없이 출석하지 않으면 과태료가 부과되고, 반복 시 검찰에 바로 송치될 수 있습니다.</strong> 사업주 불출석이 조사 결과에 불리하게 작용할 수 있으므로 대부분 출석합니다.',
      },
      {
        question: '진정 접수 후 사업주가 보복할까 걱정됩니다',
        answer:
          '<strong>근로기준법 제104조에 따라 진정을 이유로 근로자에게 불이익을 주는 것은 금지됩니다.</strong> 재직 중인 경우 보복 행위가 있으면 이를 추가 진정 사유로 신고할 수 있고, 퇴사 후라면 보복 가능성이 거의 없습니다.',
      },
      {
        question: '진정을 취하하면 나중에 다시 신고할 수 있나요?',
        answer:
          '<strong>네, 진정 취하 후에도 소멸시효(3년) 내라면 다시 진정할 수 있습니다.</strong> 다만 합의서에 "향후 민·형사상 이의를 제기하지 않는다"는 내용이 포함되어 있으면 재신고가 제한될 수 있으니 합의서 내용을 꼭 확인하세요.',
      },
    ],
    cta: {
      text: '임금체불 진정 후 절차, AI가 단계별로 안내해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '임금체불 진정서 작성 가이드', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 사업주 대응', href: '/guide/wage/unpaid-wage-employer-response' },
      { label: '임금체불 소멸시효 안내', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },
];
