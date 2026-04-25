import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 3개 (batch35)
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 이 페이지는 [실업급여 수급 중 투자 소득이 발생한 근로자]의 [신고 의무와 수급 영향을 모르는 상황]에서 [투자 소득 유형별 신고 기준과 수급 영향 안내]를 돕는 페이지다.
// 2. 이 페이지는 [실업급여 대기기간 7일을 보내는 근로자]의 [이 기간에 할 수 있는 일과 제한을 모르는 상황]에서 [대기기간 규정과 구직활동·취업 제한 사항 안내]를 돕는 페이지다.
// 3. 이 페이지는 [실업급여 수급 중 임신·출산한 근로자]의 [수급 기간 연장 가능 여부를 모르는 상황]에서 [출산 특례 연장 요건과 신청 절차 안내]를 돕는 페이지다.

export const spokesBatch35Unemployment: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. unemployment / investment-income-benefit-impact
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'investment-income-benefit-impact',
    keyword: '실업급여 수급 중 투자 소득 신고 의무 수급 영향',
    questionKeyword: '실업급여 받으면서 주식이나 코인으로 수익이 생기면 어떻게 되나요?',
    ctaKeyword: '실업급여 투자소득 영향 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 수급 중 투자 소득 신고 의무 3가지 | 로앤가이드',
      description:
        '실업급여 수급 중 주식·코인 투자 소득이 발생했다면 신고 의무와 수급 영향을 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 받으면서 남는 시간에 주식이나 코인에 투자했는데, 수익이 생겼습니다. 이걸 신고해야 하는지, 신고하면 수급이 중단되는 건 아닌지 걱정됩니다. 투자 소득의 종류에 따라 신고 의무와 수급 영향이 달라지므로, 유형별 기준을 정확히 파악해야 불이익을 피할 수 있습니다. 투자 소득이 실업급여에 미치는 영향을 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '투자 소득의 종류와 신고 기준',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 수급 중 발생하는 소득은 근로소득과 사업소득, 기타소득으로 구분되며, 투자 소득은 유형에 따라 신고 대상 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>주식 매매차익</strong> — 국내 상장주식의 소액 매매차익은 양도소득세 비과세 대상이지만, 고용센터에는 실업인정일에 소득 발생 여부를 신고해야 합니다</li>\n<li><strong>해외주식·코인 매매차익</strong> — 해외주식 양도소득과 가상자산 소득은 과세 대상이며, 금액과 무관하게 실업인정 신고서에 기재해야 합니다</li>\n<li><strong>배당소득</strong> — 주식 배당금은 근로소득이 아닌 금융소득에 해당하지만, 정기적으로 발생하면 사업소득으로 판단될 여지가 있으므로 신고가 안전합니다</li>\n<li><strong>이자소득</strong> — 예·적금 이자는 근로·사업소득이 아니므로 일반적으로 신고 대상이 아닙니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 투자 소득은 근로소득과 성격이 다르지만, 고용센터에 "소득 발생 여부"를 묻는 항목에는 사실대로 기재하는 것이 부정수급 리스크를 줄이는 가장 확실한 방법입니다</blockquote>',
      },
      {
        title: '소득 유형별 수급 영향',
        content:
          '<p><strong style="color:#1e3a5f">투자 소득이 실업급여 수급에 미치는 영향은 소득의 성격과 규모, 지속성에 따라 다르게 판단됩니다.</strong></p>\n<ul>\n<li><strong>단순 투자 수익</strong> — 주식·코인 매매로 단발성 수익이 발생한 경우, 이를 "취업" 또는 "사업활동"으로 보기 어렵기 때문에 수급 자체는 유지될 수 있습니다</li>\n<li><strong>반복적·전문적 매매</strong> — 매일 단타 매매를 하거나 전업 투자자 수준의 활동을 하면 "자영업" 또는 "취업 상태"로 판단될 수 있으며, 이 경우 수급이 중단됩니다</li>\n<li><strong>소득 규모</strong> — 1일 소득이 구직급여일액 이상이면 해당일의 급여가 감액 또는 부지급될 수 있습니다</li>\n<li><strong>신고 여부</strong> — 소득이 발생했는데 신고하지 않으면, 나중에 적발 시 부정수급으로 처리되어 지급받은 금액의 최대 5배를 추징당할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 투자 소득 유형에 따른 수급 영향을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '미신고 시 제재와 부정수급 판단',
        content:
          '<p><strong style="color:#1e3a5f">투자 소득을 신고하지 않았다가 적발되면 부정수급으로 판정되어 심각한 재정적 불이익을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>부정수급 추징</strong> — 고용보험법 제62조에 따라 부정수급액 반환 + 추가 징수(최대 5배)가 부과됩니다. 100만 원을 부정수급했다면 최대 500만 원을 납부해야 합니다</li>\n<li><strong>수급 자격 박탈</strong> — 부정수급 판정 시 남은 수급 기간의 급여가 전액 중단되며, 향후 실업급여 수급에도 불이익이 있을 수 있습니다</li>\n<li><strong>형사 처벌</strong> — 금액이 크거나 반복적이면 사기죄로 고발될 수 있으며, 1년 이하의 징역 또는 300만 원 이하의 벌금에 처해질 수 있습니다</li>\n<li><strong>적발 경로</strong> — 국세청 소득자료, 금융거래 정보, 고용센터 전산 교차 조회 등으로 적발됩니다. 가상자산 거래소 자료도 과세당국과 공유되고 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "소액이니까 괜찮겠지"라는 판단은 위험합니다. 금액과 무관하게 미신고 자체가 부정수급의 구성요건이 될 수 있습니다</blockquote>',
      },
      {
        title: '안전하게 대응하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">투자 소득이 발생했다면 실업인정일에 사실대로 신고하고, 고용센터 담당자와 상담하는 것이 가장 안전합니다.</strong></p>\n<ul>\n<li><strong>실업인정 신고서 기재</strong> — 실업인정일에 제출하는 신고서의 "소득 발생 여부" 항목에 투자 소득 내역을 기재합니다. 매매 내역서나 거래 확인서를 함께 지참하세요</li>\n<li><strong>고용센터 사전 상담</strong> — 투자 활동의 빈도와 규모를 설명하고, "취업 또는 자영업"에 해당하는지 담당자에게 확인받으세요</li>\n<li><strong>매매 빈도 조절</strong> — 매일 반복적으로 매매하는 패턴은 전업 투자자로 판단될 가능성이 높습니다. 장기 투자 성격이라면 그 점을 소명할 준비를 하세요</li>\n<li><strong>기록 보관</strong> — 투자 매매 내역, 손익 계산서, 세금 신고 자료를 보관해두면 향후 소명 시 유리합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 투자 소득이 수급 자체를 막는 것은 아닙니다. 정확한 신고와 투명한 소명이 수급 유지의 핵심입니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 대리 신고를 통한 부정수급 판정',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17 선고)에서 법원은 해외 체류 중 제3자가 대리로 실업인정을 신고한 사안에서 부정수급으로 판정했습니다. 수급 중 소득이나 상태 변화가 있을 때 본인이 직접 정확하게 신고해야 한다는 점을 확인한 판결입니다.',
        takeaway:
          '실업급여 수급 중 투자 소득이 발생하면 본인이 직접 실업인정 신고서에 기재해야 하며, 대리 신고나 허위 신고는 부정수급으로 처리됩니다.',
      },
    ],
    faq: [
      {
        question: '배당소득도 신고 대상인가요?',
        answer:
          '<strong>배당소득은 금융소득에 해당하지만, 실업인정 시 소득 발생 항목에 기재하는 것이 안전합니다.</strong> 정기적으로 배당을 받는 경우 고용센터에서 사업소득으로 판단할 여지가 있으므로, 배당 규모와 빈도를 함께 설명하고 담당자의 판단을 받으세요.',
      },
      {
        question: '미실현 수익(매도 안 한 경우)도 문제되나요?',
        answer:
          '<strong>매도하지 않은 평가 수익은 실현된 소득이 아니므로 신고 대상이 아닙니다.</strong> 주식이나 코인의 시세가 올랐더라도 매도하여 실제 수익이 확정되지 않았다면 소득으로 보지 않습니다. 다만 매도 시점에는 해당 소득을 신고해야 합니다.',
      },
      {
        question: '소액이면 괜찮나요?',
        answer:
          '<strong>소액이라도 미신고 자체가 부정수급의 구성요건이 될 수 있습니다.</strong> 고용보험법은 금액의 크기가 아니라 신고 의무 위반 여부를 기준으로 부정수급을 판단합니다. 1만 원이라도 발생했다면 실업인정 신고서에 기재하는 것이 안전합니다.',
      },
      {
        question: '투자 손실이 나면 어떻게 되나요?',
        answer:
          '<strong>투자 손실은 소득이 아니므로 수급에 영향을 주지 않습니다.</strong> 다만 매매 활동 자체가 빈번하면 "전업 투자자"로 판단될 여지가 있으므로, 손실 여부와 관계없이 매매 빈도가 지나치게 높으면 고용센터에 사전 상담을 받아보세요.',
      },
    ],
    cta: {
      text: '실업급여 투자소득 영향 AI 분석',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 부정수급 적발 시 대처 방법', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '실업급여 수급 중 재취업 남은 급여 처리', href: '/guide/unemployment/reemployment-during-benefits-remaining' },
      { label: '실업급여 수급기간 연장 가능한 경우', href: '/guide/unemployment/benefit-period-extension-cases' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. unemployment / waiting-period-7day-rules
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'waiting-period-7day-rules',
    keyword: '실업급여 대기기간 7일 규정 할 수 있는 일',
    questionKeyword: '실업급여 대기기간 7일 동안 뭘 할 수 있나요?',
    ctaKeyword: '실업급여 대기기간 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 대기기간 7일 규정과 주의사항 | 로앤가이드',
      description:
        '실업급여 대기기간 7일 동안 할 수 있는 일과 하면 안 되는 일이 궁금하다면 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 신청했는데 첫 7일은 대기기간이라 급여가 나오지 않는다고 합니다. 이 기간에 아르바이트를 해도 되는지, 구직활동은 해야 하는지, 취업하면 어떻게 되는지 막막합니다. 대기기간은 수급 자격을 확인하는 기간으로 명확한 규정이 있으며, 이를 모르고 행동하면 수급 자체가 불가능해질 수 있습니다. 7일 동안의 규정과 주의사항을 정리해보세요.</p>',
    sections: [
      {
        title: '대기기간 7일이란',
        content:
          '<p><strong style="color:#1e3a5f">대기기간은 고용보험법 제49조에 따라 실업급여 최초 수급자격 인정일로부터 7일간 급여가 지급되지 않는 기간입니다.</strong></p>\n<ul>\n<li><strong>목적</strong> — 수급자격 인정 후 실업 상태가 지속되는지 확인하기 위한 관찰 기간입니다. 모든 실업급여 수급자에게 동일하게 적용됩니다</li>\n<li><strong>기산점</strong> — 고용센터에서 수급자격을 인정한 날(수급자격 인정일)부터 연속 7일입니다. 신청일이 아닌 인정일 기준이므로 정확한 날짜를 확인하세요</li>\n<li><strong>급여 미지급</strong> — 이 7일간은 실업 상태여도 구직급여가 지급되지 않습니다. 단, 대기기간이 총 수급일수에서 차감되지는 않습니다</li>\n<li><strong>1회 적용</strong> — 대기기간은 해당 수급자격에 대해 1회만 적용됩니다. 이후 실업인정을 반복해도 다시 대기기간이 발생하지 않습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대기기간 7일은 수급일수에서 빠지는 것이 아니라, 급여 지급이 시작되기 전의 관찰 기간입니다</blockquote>',
      },
      {
        title: '대기기간 중 할 수 있는 일',
        content:
          '<p><strong style="color:#1e3a5f">대기기간에도 구직활동은 가능하며, 이 기간의 구직활동이 이후 실업인정에 도움이 됩니다.</strong></p>\n<ul>\n<li><strong>구직활동</strong> — 워크넷 이력서 등록, 채용 공고 지원, 면접 참석 등은 자유롭게 할 수 있습니다. 대기기간 중 구직활동도 이후 실업인정 시 인정받을 수 있습니다</li>\n<li><strong>직업훈련</strong> — 고용센터에서 안내받은 직업훈련 프로그램에 참여할 수 있으며, 이는 구직활동으로 인정될 수 있습니다</li>\n<li><strong>고용센터 상담</strong> — 취업 상담, 직업심리검사, 취업지원 프로그램 등에 참여할 수 있습니다</li>\n<li><strong>개인 활동</strong> — 건강검진, 자격증 공부, 자기계발 등 개인적인 활동은 제한 없이 할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 대기기간 중 가능한 활동과 주의사항을 안내해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대기기간 중 하면 안 되는 일',
        content:
          '<p><strong style="color:#1e3a5f">대기기간 중 취업하거나 소득을 발생시키면 수급자격 자체가 취소될 수 있으므로 주의해야 합니다.</strong></p>\n<ul>\n<li><strong>취업(근로 제공)</strong> — 대기기간 중 취업하면 "실업 상태"가 아니게 되어 수급자격이 인정되지 않을 수 있습니다. 정규직뿐 아니라 단기 아르바이트도 해당됩니다</li>\n<li><strong>사업자등록·자영업 시작</strong> — 사업자등록을 하거나 자영업을 시작하면 실업 상태로 보지 않으므로 수급자격이 박탈됩니다</li>\n<li><strong>일용근로</strong> — 하루짜리 일용직이라도 근로를 제공하고 대가를 받으면 해당일은 실업 상태가 아닌 것으로 간주됩니다. 대기기간 중이라면 수급자격에 영향을 줄 수 있습니다</li>\n<li><strong>허위 신고</strong> — 대기기간 중 일을 했는데 신고하지 않으면 부정수급에 해당하며, 향후 적발 시 최대 5배 추징과 형사 처벌을 받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 대기기간 7일은 짧지만, 이 기간에 아르바이트를 하면 "실업 상태 유지"가 깨져 수급 전체에 영향을 줄 수 있습니다</blockquote>',
      },
      {
        title: '대기기간 이후 첫 실업인정일 준비',
        content:
          '<p><strong style="color:#1e3a5f">대기기간이 끝나면 첫 번째 실업인정일에 고용센터를 방문하여 구직활동 실적을 보고해야 합니다.</strong></p>\n<ul>\n<li><strong>첫 실업인정일 확인</strong> — 수급자격 인정 시 고용센터에서 첫 실업인정일을 안내합니다. 대기기간 종료 후 1~2주 이내에 지정됩니다</li>\n<li><strong>구직활동 실적 준비</strong> — 첫 실업인정 시에는 최소 1회 이상의 구직활동 실적이 필요합니다. 워크넷 입사지원, 면접 참석, 직업훈련 수강 등이 인정될 수 있습니다</li>\n<li><strong>실업인정 신고서 작성</strong> — 대기기간 중 소득 발생 여부, 취업 여부, 구직활동 내용을 사실대로 기재합니다</li>\n<li><strong>온라인 실업인정</strong> — 고용24(www.work24.go.kr)에서 온라인으로 실업인정을 받을 수 있습니다. 첫 회는 가능한 한 고용센터 방문이 필요한 경우가 있으므로 사전에 확인하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대기기간 중에도 구직활동을 해두면 첫 실업인정일에 여유 있게 실적을 제출할 수 있습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업사실 신고의무 위반과 부정수급 기준',
        summary:
          '대법원 2020두31323 사건(대법원, 2020.05.14 선고)에서 법원은 취업사실 신고의무 위반으로 부정수급 제재 기준을 판시했습니다. 대기기간을 포함한 수급 전 과정에서 취업 또는 소득 발생 사실을 정확하게 신고할 의무가 있다는 점을 확인한 판결입니다.',
        takeaway:
          '대기기간 중이라도 취업하거나 소득이 발생하면 가능한 한 신고해야 하며, 미신고 시 부정수급으로 처리되어 추징과 제재를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '대기기간에 일했으면 신고해야 하나요?',
        answer:
          '<strong>가능한 한 신고해야 합니다.</strong> 대기기간 중 근로를 제공하고 대가를 받았다면 실업인정 신고서에 해당 내용을 기재해야 합니다. 미신고 시 부정수급에 해당하며, 최대 5배 추징과 형사 처벌을 받을 수 있습니다.',
      },
      {
        question: '7일 시작일은 언제인가요?',
        answer:
          '<strong>수급자격 인정일부터 연속 7일입니다.</strong> 실업급여 신청일이 아닌, 고용센터에서 수급자격을 인정한 날이 기산점입니다. 수급자격 인정서에 날짜가 명시되어 있으므로 확인하세요. 공휴일이나 주말도 포함하여 연속 7일로 계산합니다.',
      },
      {
        question: '대기기간 구직활동은 인정되나요?',
        answer:
          '<strong>대기기간 중 구직활동도 이후 실업인정 시 실적으로 인정받을 수 있습니다.</strong> 워크넷 입사지원, 채용 면접 참석, 직업훈련 수강 등은 대기기간 중에 해도 유효한 구직활동으로 간주됩니다. 오히려 미리 활동해두면 첫 실업인정일에 여유가 생깁니다.',
      },
      {
        question: '대기기간에 취업하면 어떻게 되나요?',
        answer:
          '<strong>대기기간 중 취업하면 실업 상태가 아니게 되어 수급자격이 인정되지 않을 수 있습니다.</strong> 다만 대기기간 종료 후 다시 실업 상태가 되면 수급자격을 재신청할 수 있습니다. 단기 아르바이트라도 취업에 해당하므로, 대기기간에는 근로 제공을 자제하는 것이 안전합니다.',
      },
    ],
    cta: {
      text: '실업급여 대기기간 궁금증 AI 상담',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '실업급여 신청 전 체크리스트', href: '/guide/unemployment/pre-application-checklist' },
      { label: '실업급여 부정수급 적발 사례', href: '/guide/unemployment/benefit-fraud-top-5-cases' },
      { label: '실업급여 수급 기간과 일일 지급액 기준', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. unemployment / pregnancy-childbirth-extension
  // ───────────────────────────────────────────
  {
    domain: 'unemployment',
    slug: 'pregnancy-childbirth-extension',
    keyword: '실업급여 임신 출산 수급기간 연장 요건',
    questionKeyword: '실업급여 받다가 임신하면 수급 기간이 연장되나요?',
    ctaKeyword: '임신 출산 실업급여 연장 상담',
    type: '특례형',
    perspective: 'victim',
    meta: {
      title: '실업급여 임신·출산 수급기간 연장 요건 총정리 | 로앤가이드',
      description:
        '실업급여 수급 중 임신·출산했다면 수급 기간 연장과 출산급여 특례 요건을 지금 확인하세요',
    },
    intro:
      '<p>실업급여를 받고 있는데 임신 사실을 알게 됐습니다. 구직활동이 어려워질 텐데 수급이 중단되는 건 아닌지, 수급 기간을 연장할 수 있는지, 출산 후에도 계속 받을 수 있는지 걱정이 앞섭니다. 고용보험법은 임신·출산으로 구직활동이 어려운 수급자에게 수급기간 연장과 실업인정 특례를 규정하고 있습니다. 적용 요건과 신청 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '임신 시 수급기간 연장 요건',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제52조에 따라 임신·출산·육아 등 대통령령으로 정하는 사유로 취업이 불가능한 기간은 수급기간이 연장됩니다.</strong></p>\n<ul>\n<li><strong>연장 사유</strong> — 임신으로 인해 취업이 곤란한 경우 수급기간(이직일 다음 날부터 12개월) 내에 받지 못한 잔여 급여를 연장된 기간에 받을 수 있습니다</li>\n<li><strong>연장 기간</strong> — 취업이 불가능한 기간만큼 수급기간이 연장되며, 최대 4년까지 연장이 가능합니다. 임신·출산·육아를 합산하여 계산합니다</li>\n<li><strong>신청 방법</strong> — 관할 고용센터에 수급기간 연장 신청서와 임신 확인서(산부인과 진단서)를 제출합니다</li>\n<li><strong>신청 시기</strong> — 수급기간이 만료되기 전에 신청해야 합니다. 이미 수급기간이 지난 후에는 연장 신청이 불가능하므로 조기에 신청하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수급기간 연장은 자동이 아닙니다. 가능한 한 수급기간 만료 전에 고용센터에 신청서를 제출해야 합니다</blockquote>',
      },
      {
        title: '출산 전후 실업인정 특례',
        content:
          '<p><strong style="color:#1e3a5f">임신 후기나 출산 전후에는 구직활동이 현실적으로 어렵기 때문에 실업인정 시 구직활동 요건이 완화됩니다.</strong></p>\n<ul>\n<li><strong>구직활동 면제</strong> — 임신으로 인해 구직활동이 곤란하다고 인정되면 실업인정일에 구직활동 실적 없이도 실업인정을 받을 수 있습니다</li>\n<li><strong>면제 신청</strong> — 고용센터에 임신 확인서를 제출하고 구직활동 면제를 신청합니다. 담당자가 임신 주수와 건강 상태를 고려하여 면제 여부를 결정합니다</li>\n<li><strong>출산 전후 기간</strong> — 출산 예정일 전후 약 45일(출산 전 사용 가능) 동안은 구직활동 의무가 사실상 면제됩니다</li>\n<li><strong>온라인 실업인정</strong> — 임신으로 고용센터 방문이 어려우면 고용24에서 온라인으로 실업인정을 받을 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임신·출산 수급기간 연장 요건과 신청 절차를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '출산 후 수급 재개 절차',
        content:
          '<p><strong style="color:#1e3a5f">출산 후 수급을 재개하려면 고용센터에 출산 사실을 통보하고 실업인정을 다시 시작해야 합니다.</strong></p>\n<ul>\n<li><strong>출산 통보</strong> — 출산 후 관할 고용센터에 출생증명서 또는 가족관계증명서를 제출하여 출산 사실을 통보합니다</li>\n<li><strong>수급 재개 신청</strong> — 출산 후 구직활동이 가능해진 시점에 고용센터에 수급 재개를 신청합니다. 연장된 수급기간 내라면 잔여 급여를 계속 받을 수 있습니다</li>\n<li><strong>구직활동 재개</strong> — 수급 재개 후에는 일반 수급자와 동일하게 실업인정일마다 구직활동 실적을 보고해야 합니다</li>\n<li><strong>육아 사유 추가 연장</strong> — 출산 후 육아로 인해 구직활동이 어려우면 육아 사유로 수급기간을 추가 연장할 수 있습니다. 이 경우에도 수급기간 만료 전에 신청해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 연장된 수급기간이 만료되면 잔여 급여가 있더라도 더 이상 지급되지 않으므로 기한을 가능한 한 확인하세요</blockquote>',
      },
      {
        title: '육아휴직급여와의 관계',
        content:
          '<p><strong style="color:#1e3a5f">실업급여와 육아휴직급여는 중복 수급이 불가능하며, 상황에 따라 유리한 급여를 선택해야 합니다.</strong></p>\n<ul>\n<li><strong>중복 수급 불가</strong> — 육아휴직급여를 받는 동안에는 실업급여를 동시에 받을 수 없습니다. 육아휴직급여가 종료된 후 실업 상태라면 실업급여를 신청할 수 있습니다</li>\n<li><strong>급여 비교</strong> — 육아휴직급여는 통상임금의 80%(상한 월 150만 원)이며, 실업급여(구직급여)는 이직 전 평균임금의 60%(상한 일 66,000원)입니다. 본인의 임금 수준에 따라 유리한 급여가 달라집니다</li>\n<li><strong>신청 기한 주의</strong> — 육아휴직급여의 청구권은 휴직 종료일 다음 날부터 12개월 이내에 행사해야 합니다. 이 기한은 제척기간으로 연장이 불가능합니다</li>\n<li><strong>전환 시 상담</strong> — 실업급여 수급 중 재취업 후 육아휴직을 하는 경우, 또는 육아휴직 후 퇴사하여 실업급여를 받으려는 경우에는 고용센터에서 개별 상담을 받으세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 육아휴직급여와 실업급여 중 어느 것이 유리한지는 개인 상황에 따라 다르므로 가능한 한 금액을 비교한 뒤 선택하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아휴직급여 청구권 행사기간의 제척기간 성격',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 육아휴직급여 청구권 행사기간(12개월)이 제척기간이며 강행규정이라고 판시했습니다. 출산·육아 관련 급여는 신청 기한이 엄격하게 적용되므로 기한 내 가능한 한 청구해야 한다는 점을 확인한 판결입니다.',
        takeaway:
          '임신·출산 관련 급여(실업급여 연장, 육아휴직급여 등)는 신청 기한이 법적으로 엄격하게 정해져 있으므로, 기한을 놓치지 않도록 미리 일정을 확인하고 조기에 신청하세요.',
      },
    ],
    faq: [
      {
        question: '임신으로 구직활동이 어려우면 면제되나요?',
        answer:
          '<strong>임신으로 인해 구직활동이 곤란하다고 인정되면 구직활동 요건이 면제될 수 있습니다.</strong> 고용센터에 임신 확인서를 제출하고 면제를 신청하세요. 임신 주수, 건강 상태 등을 고려하여 담당자가 면제 여부를 결정합니다. 특히 임신 후기에는 사실상 면제가 인정될 수 있습니다.',
      },
      {
        question: '출산 직후에도 실업인정을 받아야 하나요?',
        answer:
          '<strong>수급기간 연장을 신청했다면 출산 직후에는 실업인정을 받지 않아도 됩니다.</strong> 연장 기간 중에는 구직활동 의무가 유예되며, 출산 후 구직활동이 가능해진 시점에 수급 재개를 신청하면 됩니다. 다만 연장 신청을 하지 않았다면 수급기간이 그대로 진행되므로 주의하세요.',
      },
      {
        question: '연장은 최대 얼마까지 되나요?',
        answer:
          '<strong>수급기간은 최대 4년까지 연장이 가능합니다.</strong> 임신·출산·육아 등 취업이 불가능한 기간을 합산하여 연장되며, 연장된 기간 내에 잔여 구직급여를 받을 수 있습니다. 4년이 지나면 잔여 급여가 있더라도 더 이상 지급되지 않습니다.',
      },
      {
        question: '출산급여와 실업급여를 동시에 받을 수 있나요?',
        answer:
          '<strong>출산전후휴가급여(출산급여)와 실업급여(구직급여)는 동시에 받을 수 없습니다.</strong> 출산전후휴가급여는 재직 중 사용하는 것이므로, 이미 퇴사하여 실업급여를 받고 있다면 출산전후휴가급여 대상이 아닙니다. 다만 퇴사 전 출산전후휴가를 사용한 경우 해당 급여는 별도로 청구할 수 있습니다.',
      },
      {
        question: '유산·사산도 연장 사유가 되나요?',
        answer:
          '<strong>유산·사산도 출산에 준하는 사유로 수급기간 연장이 가능합니다.</strong> 유산·사산 확인서(진단서)를 고용센터에 제출하면 됩니다. 또한 근로기준법상 유산·사산 휴가 규정이 있으므로, 재직 중이었다면 관련 급여도 확인해보세요.',
      },
    ],
    cta: {
      text: '임신·출산 실업급여 특례 AI 분석',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급기간 연장 가능한 경우', href: '/guide/unemployment/benefit-period-extension-cases' },
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '퇴사 후 실업급여 어디부터 신청하나', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '실업급여 신청 전 체크리스트', href: '/guide/unemployment/pre-application-checklist' },
    ],
  },
];
