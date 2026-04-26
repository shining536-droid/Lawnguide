import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 이혼/양육비 3 + 개인회생/파산 2 + 층간소음 2 + 상가임대차 1 (batch27)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch27Misc: SpokePage[] = [
  // ══════════ 이혼/양육비 3개 ══════════

  {
    domain: 'divorce',
    slug: 'divorce-international-marriage-procedure',
    keyword: '국제결혼 외국인 배우자 이혼 절차',
    questionKeyword: '외국인 배우자와 이혼하려면 어떻게 해야 하나요?',
    ctaKeyword: '국제결혼 이혼 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '국제결혼 외국인 배우자 이혼 절차와 관할법원 | 로앤가이드',
      description: '외국인 배우자와 이혼할 때 관할법원, 준거법, 체류자격 문제를 한꺼번에 정리했습니다. 지금 확인하세요.',
    },
    intro: '<p>외국인 배우자와 이혼을 고려하고 있습니다. 어느 나라 법이 적용되는지, 한국 법원에서 할 수 있는지, 체류자격에는 어떤 영향이 있는지 복잡합니다. 국제이혼의 핵심 절차를 정리해보세요.</p>',
    timelineSteps: ['1단계: 관할법원·준거법 확인', '2단계: 협의이혼 또는 재판이혼 선택', '3단계: 재산분할·양육권 결정', '4단계: 체류자격 변경 확인'],
    sections: [
      {
        title: '관할법원과 준거법',
        content: '<p><strong style="color:#1e3a5f">부부 중 한쪽이 한국에 거주하면 한국 법원에 이혼 소송을 제기할 수 있습니다.</strong></p>\n<ul>\n<li><strong>관할</strong> — 부부의 마지막 공통 주소지가 한국이면 한국 법원에 관할이 있습니다.</li>\n<li><strong>준거법</strong> — 국제사법에 따라 부부의 동일 본국법 → 동일 상거소지법 → 가장 밀접한 관련이 있는 곳의 법 순서로 적용됩니다.</li>\n<li><strong>한국인+외국인 부부</strong> — 한국에 공동 거주했다면 한국법이 적용되는 경우가 대부분입니다.</li>\n</ul>',
      },
      {
        title: '이혼 절차',
        content: '<p><strong style="color:#1e3a5f">협의이혼과 재판이혼 모두 가능합니다.</strong></p>\n<ol>\n<li><strong>협의이혼</strong> — 가정법원에 협의이혼 의사확인 신청 → 숙려기간(자녀 유무에 따라 1~3개월) → 확인 → 신고</li>\n<li><strong>재판이혼</strong> — 상대가 동의하지 않으면 재판이혼을 청구합니다. 외국에 있는 배우자에게는 공시송달이 가능합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>국제이혼 절차와 체류자격, AI가 정리합니다</strong></p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체류자격 문제',
        content: '<p><strong style="color:#1e3a5f">결혼이민(F-6) 비자의 외국인 배우자는 이혼 시 체류자격에 영향을 받습니다.</strong></p>\n<ul>\n<li><strong>귀책 없는 이혼</strong> — 한국인 배우자의 귀책(폭력, 유기 등)으로 이혼한 경우 F-6 비자를 유지하거나 F-5(영주)로 변경할 수 있습니다.</li>\n<li><strong>한국 국적 자녀</strong> — 한국 국적 미성년 자녀를 양육하는 경우 F-6 비자를 유지할 수 있습니다.</li>\n<li><strong>귀화 신청</strong> — 혼인 귀화 요건(혼인 후 2년+국내 거주 1년 등)을 충족했다면 이혼 후에도 간이귀화 신청이 가능합니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 국제이혼과 재산분할', summary: '대법원은 국제이혼에서 재산분할은 이혼의 준거법에 따르되, 한국에 소재한 부동산에 대해서는 한국법을 적용한다고 판시합니다. 한국에서 형성된 재산은 한국 재산분할 기준이 적용됩니다.', takeaway: '비슷한 상황이라면 한국에서 함께 형성한 재산에 대해서는 한국법에 따른 재산분할을 청구하세요.' }],
    faq: [
      { question: '외국에 있는 배우자에게 이혼소장을 어떻게 보내나요?', answer: '<p>외교부를 통한 해외 송달 또는 공시송달로 진행합니다. 공시송달은 2개월 후 효력이 발생합니다.</p>' },
      { question: '외국인 배우자가 한국에서 이혼 후 비자가 취소되나요?', answer: '<p>F-6 비자는 이혼 시 원칙적으로 사유가 소멸하지만, 귀책 없는 이혼이거나 한국 국적 자녀 양육 시 유지 가능합니다.</p>' },
      { question: '외국에서 한 이혼이 한국에서도 인정되나요?', answer: '<p>외국 법원의 이혼 판결은 일정 요건(관할, 송달, 공서양속)을 충족하면 한국에서도 승인됩니다.</p>' },
      { question: '양육비는 어느 나라 기준으로 산정되나요?', answer: '<p>자녀가 한국에 거주하면 한국법 기준으로 양육비가 산정됩니다.</p>' },
    ],
    cta: { text: '국제결혼 이혼 절차 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '이혼 가이드', href: '/guide/divorce' }, { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' }, { label: '재산분할', href: '/guide/divorce/divorce-property-division-scope-faq' }, { label: '양육비 청구', href: '/guide/divorce/child-support-claim-where-to-start' }],
  },

  {
    domain: 'child-support',
    slug: 'child-support-adult-child-retroactive',
    keyword: '성인 자녀 과거 양육비 소급 청구',
    questionKeyword: '아이가 성인이 됐는데 과거 양육비를 소급 청구할 수 있나요?',
    ctaKeyword: '성인 자녀 양육비 소급 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성인 자녀 과거 양육비 소급 청구 가능 여부 확인법 | 로앤가이드',
      description: '자녀가 성인이 돼도 과거 양육비를 소급 청구할 수 있습니다. 소멸시효와 청구 절차를 지금 확인하세요.',
    },
    intro: '<p>이혼 후 혼자 아이를 키웠는데 전 배우자는 양육비를 한 번도 보내지 않았습니다. 아이가 성인이 됐는데 지금이라도 과거 양육비를 받을 수 있을까요? 대법원은 과거 양육비 청구를 인정합니다.</p>',
    timelineSteps: ['1단계: 청구 가능 기간 확인', '2단계: 과거 양육비 산정', '3단계: 가정법원에 청구 소송', '4단계: 강제집행'],
    sections: [
      {
        title: '과거 양육비 소급 청구 가능',
        content: '<p><strong style="color:#1e3a5f">대법원은 과거 양육비도 청구할 수 있다고 판시합니다.</strong></p>\n<ul>\n<li><strong>소급 가능</strong> — 이혼 시점부터 자녀가 성년이 될 때까지의 양육비를 소급 청구할 수 있습니다.</li>\n<li><strong>소멸시효</strong> — 과거 양육비 청구의 소멸시효는 논란이 있으나, 대법원은 10년의 소멸시효를 적용하는 경향입니다.</li>\n<li><strong>양육비 산정</strong> — 양육비 산정기준표와 실제 양육 비용을 참고하여 산정합니다.</li>\n</ul>',
      },
      {
        title: '청구 절차',
        content: '<p><strong style="color:#1e3a5f">가정법원에 양육비 청구 소송을 제기합니다.</strong></p>\n<ol>\n<li><strong>과거 양육비 산정</strong> — 자녀의 나이, 양육 기간, 양쪽 부모의 소득 등을 고려하여 산정합니다.</li>\n<li><strong>가정법원 소송</strong> — 관할 가정법원에 양육비 청구 심판을 청구합니다.</li>\n<li><strong>강제집행</strong> — 판결이 나면 상대방의 재산·급여를 압류하여 강제집행합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>과거 양육비 청구 가능 금액, AI가 계산합니다</strong></p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비이행관리원 활용',
        content: '<p><strong style="color:#1e3a5f">양육비이행관리원에서 무료로 양육비 이행을 지원합니다.</strong></p>\n<ul>\n<li>양육비 청구 소송 지원</li>\n<li>강제집행(재산 조회·압류) 지원</li>\n<li>한시적 양육비 긴급지원(월 20만원)</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 과거 양육비 청구권 인정', summary: '대법원 2018므724 사건(대법원, 2024.07.18 선고)에서 법원은 이혼한 부부 사이에서 일방이 미성년 자녀를 양육하면서 상대에게 양육비 환급을 청구하는 경우, 과거 양육비의 분담 비율은 쌍방의 경제적 능력과 기여도를 고려하여 정한다고 판시했습니다.', takeaway: '비슷한 상황이라면 자녀가 성인이 돼도 과거 양육비를 청구하세요. 소급 청구가 인정될 수 있습니다.' }],
    faq: [
      { question: '자녀가 25세인데 지금도 청구할 수 있나요?', answer: '<p>소멸시효(10년) 내라면 가능합니다. 자녀가 성년이 된 시점부터 역산하여 10년 이내의 양육비를 청구할 수 있습니다.</p>' },
      { question: '양육비 합의를 한 적이 없어도 청구 가능한가요?', answer: '<p>네, 양육비 합의 여부와 무관하게 법원에 청구할 수 있습니다. 부모의 양육비 부담 의무는 법적 의무입니다.</p>' },
      { question: '상대방이 소득이 없다고 하면?', answer: '<p>소득이 없더라도 최소한의 양육비 부담 의무가 있습니다. 재산 조회를 통해 은닉 재산을 찾을 수도 있습니다.</p>' },
      { question: '대학교 등록금도 양육비에 포함되나요?', answer: '<p>대학 등록금은 별도의 교육비로 청구할 수 있으며, 법원이 양쪽 부모의 경제력을 고려하여 분담 비율을 정합니다.</p>' },
    ],
    cta: { text: '과거 양육비 소급 청구 금액 AI로 계산하기', link: '/chat?domain=child-support' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '양육비 가이드', href: '/guide/child-support' }, { label: '양육비 계산 기준', href: '/guide/divorce/child-support-calculation-standard' }, { label: '양육비 강제집행', href: '/guide/divorce/child-support-enforcement-methods' }, { label: '양육비이행관리원', href: '/guide/child-support/child-support-direct-vs-agency-comparison' }],
  },

  {
    domain: 'divorce',
    slug: 'divorce-cohabitation-property-division',
    keyword: '사실혼 관계 재산분할 방법',
    questionKeyword: '사실혼 관계를 정리하면서 재산분할을 받을 수 있나요?',
    ctaKeyword: '사실혼 재산분할 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 관계 해소 시 재산분할 청구 방법 | 로앤가이드',
      description: '혼인신고를 하지 않은 사실혼도 재산분할 청구가 가능합니다. 입증 방법과 절차를 지금 확인하세요.',
    },
    intro: '<p>10년간 함께 살았지만 혼인신고를 하지 않았습니다. 관계가 깨졌는데 함께 모은 재산을 분할받을 수 있을까요? 사실혼 관계도 법적으로 보호되며, 재산분할 청구가 가능합니다.</p>',
    timelineSteps: ['1단계: 사실혼 관계 입증', '2단계: 공동 재산 범위 확인', '3단계: 가정법원에 재산분할 청구', '4단계: 위자료 별도 청구'],
    sections: [
      {
        title: '사실혼 관계의 법적 보호',
        content: '<p><strong style="color:#1e3a5f">혼인신고를 하지 않았더라도 실질적 혼인 생활이 있었다면 사실혼 관계로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>사실혼 인정 요건</strong> — ①혼인 의사의 합치 ②공동생활의 실체가 있어야 합니다.</li>\n<li><strong>보호 범위</strong> — 재산분할 청구권, 위자료 청구권이 인정될 수 있습니다. 다만 상속권은 인정되지 않습니다.</li>\n<li><strong>입증 자료</strong> — 동일 주소지 등록, 가족 소개, 경조사 참석, 공동 명의 재산, 자녀 존재 등</li>\n</ul>',
      },
      {
        title: '재산분할 청구 방법',
        content: '<p><strong style="color:#1e3a5f">사실혼 해소 시 가정법원에 재산분할 청구 심판을 합니다.</strong></p>\n<ol>\n<li><strong>사실혼 관계 입증</strong> — 동거 기간, 공동생활 증거 제출</li>\n<li><strong>공동 재산 확인</strong> — 관계 기간 중 형성된 재산 목록 작성</li>\n<li><strong>분할 청구</strong> — 가정법원에 재산분할 청구 심판 신청</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사실혼 재산분할 가능 여부, AI가 판단합니다</strong></p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '주의사항',
        content: '<p><strong style="color:#1e3a5f">사실혼 재산분할에는 제척기간이 있습니다.</strong></p>\n<ul>\n<li><strong>2년 제척기간</strong> — 사실혼 해소일로부터 2년 이내에 청구해야 합니다.</li>\n<li><strong>위자료 별도</strong> — 상대방의 부정행위 등이 있으면 위자료도 청구 가능합니다.</li>\n<li><strong>상속 불인정</strong> — 사실혼 배우자에게는 상속권이 없으므로, 관계 중에 재산 정리를 해두는 것이 중요합니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 사실혼 재산분할 인정', summary: '대법원은 사실혼 관계에서도 민법 제839조의2를 유추 적용하여 재산분할 청구를 인정합니다. 혼인신고 여부가 아니라 실질적 공동생활의 존재가 핵심 판단 기준입니다.', takeaway: '비슷한 상황이라면 동거 기간의 공동생활 증거를 확보하세요. 주소지 같은 주민등록, 카드 공동사용 내역, 가족 행사 사진 등이 증거가 됩니다.' }],
    faq: [
      { question: '동거 기간이 짧아도 사실혼으로 인정되나요?', answer: '<p>기간보다 혼인 의사와 공동생활의 실체가 중요합니다. 다만 기간이 짧으면 입증이 어려울 수 있습니다.</p>' },
      { question: '상대방 명의 재산도 분할 대상인가요?', answer: '<p>관계 기간 중 공동으로 형성한 재산이면 명의에 관계없이 분할 대상입니다.</p>' },
      { question: '단순 동거와 사실혼의 차이는 뭔가요?', answer: '<p>단순 동거는 각자 독립적 생활을 유지하는 것이고, 사실혼은 혼인 의사를 가지고 부부로서 공동생활하는 것입니다. 혼인 의사의 합치가 핵심 차이입니다.</p>' },
      { question: '2년 제척기간을 놓치면?', answer: '<p>재산분할 청구는 불가하지만, 부당이득반환 등 민사소송은 별도로 가능할 수 있습니다.</p>' },
    ],
    cta: { text: '사실혼 재산분할 가능 여부 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '이혼 가이드', href: '/guide/divorce' }, { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-scope-faq' }, { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-false-claim-defense' }, { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' }],
  },

  // ══════════ 개인회생/파산 2개 ══════════

  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-minimum-income-requirement',
    keyword: '개인회생 최소 소득 기준',
    questionKeyword: '소득이 적어도 개인회생을 신청할 수 있나요?',
    ctaKeyword: '개인회생 소득 기준 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '개인회생 최소 소득 기준과 자격 판단법 | 로앤가이드',
      description: '개인회생은 정기적 소득이 있어야 신청 가능합니다. 최소 소득 기준과 자격 요건을 지금 확인하세요.',
    },
    intro: '<p>빚이 너무 많아 개인회생을 생각하고 있는데, 아르바이트로 월 150만원밖에 못 법니다. 소득이 적어도 개인회생을 할 수 있을까요? 개인회생은 "정기적이고 확실한 수입"이 있으면 가능합니다.</p>',
    timelineSteps: ['1단계: 정기적 소득 여부 확인', '2단계: 최저생계비 공제 후 변제 가능액 계산', '3단계: 변제계획안 작성', '4단계: 법원 인가'],
    sections: [
      {
        title: '개인회생 소득 요건',
        content: '<p><strong style="color:#1e3a5f">"정기적이고 확실한 수입을 얻을 가능성이 있는 자"가 신청 자격입니다.</strong></p>\n<ul>\n<li><strong>정규직·계약직</strong> — 급여 소득이 있으면 가능</li>\n<li><strong>아르바이트</strong> — 월 일정 금액을 꾸준히 벌면 가능</li>\n<li><strong>프리랜서</strong> — 정기적 수입이 입증되면 가능</li>\n<li><strong>연금 수령자</strong> — 국민연금 등 정기 소득이면 가능</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소득의 "액수"보다 "정기성"이 중요합니다. 수입이 적어도 매달 일정하면 가능합니다.</blockquote>',
      },
      {
        title: '변제 가능액 계산',
        content: '<p><strong style="color:#1e3a5f">월 소득에서 최저생계비를 뺀 금액이 변제 가능액입니다.</strong></p>\n<p>계산 예시:</p>\n<ul>\n<li>월 소득: 150만원</li>\n<li>1인 기준 최저생계비: 약 120만원 (2026년 기준)</li>\n<li>월 변제 가능액: 30만원</li>\n<li>3년(36개월) 변제: 30만원 × 36 = 1,080만원</li>\n</ul>\n<p>변제계획에 따라 3~5년간 변제하면 나머지 채무가 면책됩니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 소득으로 개인회생이 가능한지 AI가 판단합니다</strong></p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '소득이 없으면 파산을 고려',
        content: '<p><strong style="color:#1e3a5f">정기적 소득이 전혀 없다면 개인회생 대신 개인파산을 신청하세요.</strong></p>\n<ul>\n<li><strong>개인파산</strong> — 소득이 없거나 변제 능력이 없는 경우 신청 가능</li>\n<li><strong>면책</strong> — 파산 선고 후 면책 결정을 받으면 채무 전액이 면제됩니다.</li>\n<li><strong>차이</strong> — 개인회생은 일부 변제 후 면책, 파산은 재산 환가 후 면책</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 개인회생 소득 요건의 해석', summary: '법원은 "정기적이고 확실한 수입"의 의미를 넓게 해석합니다. 일용직이나 아르바이트라도 매월 일정 수입이 있음을 소명하면 개인회생 신청이 가능합니다. 다만 변제계획 이행 가능성이 있어야 법원이 인가합니다.', takeaway: '비슷한 상황이라면 소득이 적더라도 매달 일정한 수입이 있다면 개인회생 신청을 고려하세요.' }],
    faq: [
      { question: '소득이 월 100만원이어도 가능한가요?', answer: '<p>가능할 수 있습니다. 최저생계비를 공제하고 남는 금액이 있으면 그 범위에서 변제계획을 세울 수 있습니다.</p>' },
      { question: '부업 소득도 인정되나요?', answer: '<p>네, 정기적으로 발생하는 부업 소득도 포함됩니다. 통장 입금내역 등으로 증명합니다.</p>' },
      { question: '변제 중에 소득이 줄어들면?', answer: '<p>법원에 변제계획 변경을 신청할 수 있습니다. 소득 감소가 일시적이 아니면 변제금액을 조정받을 수 있습니다.</p>' },
      { question: '개인회생과 파산 중 어떤 게 유리한가요?', answer: '<p>소득이 있고 재산을 지키고 싶다면 개인회생이, 소득이 없고 빨리 채무를 정리하고 싶다면 파산이 유리합니다.</p>' },
    ],
    cta: { text: '개인회생 자격 여부 AI로 즉시 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '개인회생 가이드', href: '/guide/rehabilitation' }, { label: '개인회생 vs 파산', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' }, { label: '개인회생 절차', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' }, { label: '개인회생 기각 사유', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' }],
  },

  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-tax-debt-discharge-possible',
    keyword: '세금 체납 파산 면책 가능 여부',
    questionKeyword: '세금 체납도 파산하면 면책되나요?',
    ctaKeyword: '세금 체납 파산 면책 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '세금 체납 파산 면책 가능 여부 — 면책 안 되는 채무 7가지 | 로앤가이드',
      description: '세금(국세·지방세) 체납은 파산 면책 대상이 아닙니다. 면책 안 되는 채무 7가지를 지금 확인하세요.',
    },
    intro: '<p>세금 체납과 카드빚이 함께 쌓여있습니다. 파산하면 다 면책되는 줄 알았는데, 세금은 면책이 안 된다고 합니다. 정말인가요? 파산 면책에서 제외되는 비면책채권을 확인해보세요.</p>',
    timelineSteps: ['1단계: 채무 목록에서 비면책채권 분류', '2단계: 면책 가능 채무 확인', '3단계: 파산 신청 여부 판단', '4단계: 비면책채권 분납 협의'],
    sections: [
      {
        title: '면책이 안 되는 비면책채권 7가지',
        content: '<p><strong style="color:#1e3a5f">채무자 회생법 제566조에서 정하는 비면책채권입니다.</strong></p>\n<ol>\n<li><strong>조세</strong> — 국세, 지방세, 관세 등 모든 세금</li>\n<li><strong>벌금·과태료</strong> — 형사 벌금, 행정 과태료</li>\n<li><strong>고의 불법행위 손해배상</strong> — 사기, 폭행 등 고의적 불법행위로 인한 배상</li>\n<li><strong>양육비·부양료</strong> — 법원 결정이나 합의에 따른 양육비</li>\n<li><strong>고용관계 임금·퇴직금</strong> — 근로자에 대한 미지급 임금</li>\n<li><strong>채권자 목록 누락</strong> — 고의로 목록에서 빠뜨린 채무</li>\n<li><strong>국민연금·건강보험료</strong> — 사회보험료</li>\n</ol>',
      },
      {
        title: '세금은 면책이 안 되지만 파산은 의미가 있습니다',
        content: '<p><strong style="color:#1e3a5f">세금을 제외한 나머지 채무가 면책되면 전체 부담이 크게 줄어듭니다.</strong></p>\n<p>예를 들어 세금 500만원 + 카드빚 5,000만원인 경우, 파산으로 카드빚 5,000만원이 면책되면 세금 500만원만 남습니다. 세금은 국세청과 분납 협의를 통해 갚아나갈 수 있습니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 채무 중 면책 가능 금액, AI가 분류합니다</strong></p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '세금 체납 분납·면제 방법',
        content: '<p><strong style="color:#1e3a5f">파산 후 남은 세금은 분납이나 체납처분유예를 활용하세요.</strong></p>\n<ul>\n<li><strong>분납</strong> — 국세청에 분할납부를 신청할 수 있습니다.</li>\n<li><strong>체납처분유예</strong> — 납부 능력이 없으면 최대 5년간 체납처분(압류 등)을 유예받을 수 있습니다.</li>\n<li><strong>소멸시효</strong> — 국세의 소멸시효는 5년(5억 이상은 10년)입니다. 다만 중단 사유가 있으면 연장됩니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 비면책채권의 엄격한 적용', summary: '대법원은 비면책채권 목록을 엄격하게 해석합니다. 채무자 회생법에 명시된 항목만 비면책채권에 해당하며, 이에 포함되지 않는 채무는 파산 면책의 대상이 됩니다.', takeaway: '비슷한 상황이라면 세금·벌금·양육비를 제외한 나머지 채무는 면책 가능하므로, 파산 신청의 실익이 있는지 전체 채무 구조를 분석하세요.' }],
    faq: [
      { question: '건강보험료 체납도 면책이 안 되나요?', answer: '<p>국민건강보험료, 국민연금 등 사회보험료는 비면책채권에 해당할 소지가 있습니다.</p>' },
      { question: '교통 범칙금도 면책 안 되나요?', answer: '<p>벌금·과태료는 비면책채권입니다. 교통 범칙금, 주정차 과태료 등은 면책되지 않습니다.</p>' },
      { question: '세금이 5년 지나면 소멸시효가 완성되나요?', answer: '<p>원칙적으로 5년이지만, 독촉·압류 등 징수절차가 진행되면 시효가 중단됩니다. 실질적으로 소멸시효 완성은 드뭅니다.</p>' },
      { question: '세금이 많으면 개인회생이 나은가요?', answer: '<p>개인회생도 세금은 비면책채권이므로 전액 변제해야 합니다. 다만 다른 채무를 줄이면서 세금도 분할 변제할 수 있습니다.</p>' },
    ],
    cta: { text: '내 채무 면책 가능 여부 AI로 분류하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '파산 가이드', href: '/guide/bankruptcy' }, { label: '파산 면책 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' }, { label: '개인회생 vs 파산', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' }, { label: '파산 후 생활 변화', href: '/guide/bankruptcy/bankruptcy-after-discharge-life-changes' }],
  },

  // ══════════ 층간소음/이웃분쟁 2개 ══════════

  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-noise-evidence-app-recording',
    keyword: '층간소음 증거 수집 앱 녹음',
    questionKeyword: '층간소음 증거를 어떻게 모아야 하나요?',
    ctaKeyword: '층간소음 증거 수집 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '층간소음 증거 수집 방법 — 앱·녹음·측정 가이드 | 로앤가이드',
      description: '층간소음 피해를 입증하려면 체계적인 증거 수집이 필수입니다. 앱·녹음·소음 측정 방법을 지금 확인하세요.',
    },
    intro: '<p>윗집 소음이 매일 밤 심합니다. 관리사무소에 항의해도 소용이 없고, 법적 조치를 하려면 증거가 필요합니다. 소음 측정 앱, 녹음, 관리사무소 기록 등 체계적인 증거 수집 방법을 정리해보세요.</p>',
    timelineSteps: ['1단계: 소음 기록 시작 (앱·녹음)', '2단계: 관리사무소 정식 민원 접수', '3단계: 층간소음이웃사이센터 신고', '4단계: 법적 조치 준비'],
    sections: [
      {
        title: '증거 수집 3가지 방법',
        content: '<p><strong style="color:#1e3a5f">법적 분쟁에서 인정받을 수 있는 증거를 체계적으로 모으세요.</strong></p>\n<ol>\n<li><strong>소음 측정 앱</strong> — 데시벨(dB) 측정 앱으로 소음 수준을 기록합니다. 날짜·시간·데시벨 수치를 함께 캡처할 수 있습니다. (참고: 직접충격소음 기준 1분간 등가소음도 주간 39dB, 야간 34dB 초과 시 위반)</li>\n<li><strong>녹음</strong> — 소음이 발생하는 시간대에 녹음을 합니다. 녹음 시 날짜·시간을 말로 기록하면 증거력이 높아집니다.</li>\n<li><strong>소음 측정 전문기관</strong> — 한국환경공단이나 전문 측정업체에 의뢰하면 공식 측정 보고서를 받을 수 있습니다.</li>\n</ol>',
      },
      {
        title: '관리사무소·이웃사이센터 활용',
        content: '<p><strong style="color:#1e3a5f">공식 기록을 남기는 것이 법적 절차에서 유리합니다.</strong></p>\n<ul>\n<li><strong>관리사무소 민원</strong> — 서면(이메일·방문접수)으로 민원을 넣고 접수번호를 받습니다.</li>\n<li><strong>층간소음이웃사이센터(1661-2642)</strong> — 무료 조정 서비스를 제공합니다. 접수 기록이 증거가 됩니다.</li>\n<li><strong>소음 일지</strong> — 날짜, 시간, 소음 유형(쿵쿵, 음악 등), 지속시간을 매일 기록합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>층간소음 법적 대응 가능 여부, AI가 판단합니다</strong></p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법적 조치 방법',
        content: '<p><strong style="color:#1e3a5f">증거가 충분히 모이면 법적 조치를 진행합니다.</strong></p>\n<ul>\n<li><strong>민사소송(손해배상)</strong> — 정신적 고통에 대한 위자료와 방음 비용 등을 청구합니다.</li>\n<li><strong>금지청구(가처분)</strong> — 법원에 소음 발생 금지 가처분을 신청합니다.</li>\n<li><strong>경범죄처벌법</strong> — 야간 소음은 경범죄에 해당할 수 있어 경찰에 신고도 가능합니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 층간소음 손해배상 인정', summary: '대법원 2023도10313 사건(대법원, 2023.12.14 선고)에서 법원은 공동주택에서의 소음이 수인한도를 넘으면 불법행위에 해당하여 손해배상 책임이 인정된다고 판시했습니다. 소음의 정도, 빈도, 시간대, 피해자의 피해 내용 등을 종합적으로 고려합니다.', takeaway: '비슷한 상황이라면 소음이 기준치(야간 34dB)를 초과하고, 반복적이며, 생활에 심각한 지장을 주는 증거를 확보하세요.' }],
    faq: [
      { question: '소음 측정 앱 기록이 법적 증거로 인정되나요?', answer: '<p>보조적 증거로 활용됩니다. 전문기관 측정 보고서가 가장 강력한 증거이며, 앱 기록은 보완 자료로 유용합니다.</p>' },
      { question: '이웃사이센터 조정은 강제력이 있나요?', answer: '<p>조정은 양쪽이 동의해야 효력이 있습니다. 상대가 조정에 불응하면 법적 절차로 넘어가야 합니다.</p>' },
      { question: '경찰에 신고하면 해결되나요?', answer: '<p>경찰은 즉각적인 소음 중단을 요구할 수 있지만, 근본적 해결은 민사소송이나 조정을 통해 이루어집니다.</p>' },
      { question: '위자료는 얼마나 받을 수 있나요?', answer: '<p>층간소음 위자료는 통상 100~500만원 수준이며, 소음의 정도와 기간에 따라 달라집니다.</p>' },
    ],
    cta: { text: '층간소음 법적 대응 방법 AI로 확인하기', link: '/chat?domain=neighbor-dispute' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' }, { label: '층간소음 법적 절차', href: '/guide/neighbor-dispute/neighbor-dispute-noise-legal-steps' }, { label: '소음 기준치', href: '/guide/neighbor-dispute/neighbor-noise-decibel-standard-guide' }, { label: '반려동물 소음', href: '/guide/neighbor-dispute/neighbor-dispute-pet-noise-smell' }],
  },

  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-balcony-smoke-secondhand',
    keyword: '베란다 간접흡연 피해 법적 대응',
    questionKeyword: '아랫집 담배 연기가 올라오는데 법적 대응할 수 있나요?',
    ctaKeyword: '베란다 간접흡연 법적 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '베란다 간접흡연 피해 법적 대응 방법 3단계 | 로앤가이드',
      description: '아파트 베란다에서 올라오는 담배 연기 때문에 고통받고 있다면, 관리규약·민사소송으로 대응할 수 있습니다. 지금 확인하세요.',
    },
    intro: '<p>아래층에서 베란다에서 피우는 담배 연기가 매일 올라옵니다. 아이가 어린데 건강이 걱정됩니다. 관리사무소에 말해도 "개인 자유"라며 해결해주지 않습니다. 간접흡연 피해에 대한 법적 대응 방법을 확인해보세요.</p>',
    timelineSteps: ['1단계: 피해 증거 수집', '2단계: 관리사무소·관리규약 확인', '3단계: 법적 조치(민사소송)'],
    sections: [
      {
        title: '간접흡연 피해의 법적 근거',
        content: '<p><strong style="color:#1e3a5f">국민건강증진법과 공동주택관리법에 따라 간접흡연 피해 방지 조치를 요구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>국민건강증진법</strong> — 공동주택 내 금연구역 지정이 가능합니다.</li>\n<li><strong>관리규약</strong> — 아파트 관리규약에 베란다 흡연 금지 조항이 있으면 위반 시 과태료 부과가 가능합니다.</li>\n<li><strong>민법 불법행위</strong> — 간접흡연 피해가 수인한도를 넘으면 손해배상 청구가 가능합니다.</li>\n</ul>',
      },
      {
        title: '대응 3단계',
        content: '<p><strong style="color:#1e3a5f">단계별로 대응 수위를 높여가세요.</strong></p>\n<ol>\n<li><strong>관리사무소에 정식 민원</strong> — 서면으로 접수하고 관리규약의 흡연 관련 조항을 확인합니다.</li>\n<li><strong>금연구역 지정 요청</strong> — 입주자대표회의에 공용부분(베란다 포함) 금연구역 지정을 요청합니다.</li>\n<li><strong>민사소송</strong> — 증거가 충분하면 손해배상(위자료) + 흡연 금지 가처분을 청구합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>간접흡연 피해 법적 대응 방법, AI가 안내합니다</strong></p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 수집 방법',
        content: '<p><strong style="color:#1e3a5f">간접흡연 피해를 입증하는 증거를 모으세요.</strong></p>\n<ul>\n<li>담배 연기가 올라오는 장면 사진·동영상</li>\n<li>날짜·시간별 피해 일지</li>\n<li>병원 진료 기록(기관지 질환, 알레르기 악화 등)</li>\n<li>관리사무소 민원 접수 기록</li>\n<li>이웃 주민의 증언</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 간접흡연 손해배상 인정', summary: '법원은 공동주택에서의 간접흡연이 수인한도를 넘는 경우 불법행위로 인정하고 위자료를 인정한 사례가 있습니다. 특히 미성년 자녀나 호흡기 질환이 있는 가족이 있는 경우 피해가 가중되어 인정될 수 있습니다.', takeaway: '비슷한 상황이라면 아이나 호흡기 환자가 있다면 병원 진료 기록을 가능한 한 확보하세요. 법적 대응 시 유리한 증거가 됩니다.' }],
    faq: [
      { question: '베란다 흡연을 법으로 금지할 수 있나요?', answer: '<p>아파트 관리규약이나 입주자대표회의 결의로 베란다 흡연을 금지할 수 있습니다. 2022년 공동주택관리법 개정으로 금연구역 지정이 용이해졌습니다.</p>' },
      { question: '경찰에 신고할 수 있나요?', answer: '<p>관리규약이나 지자체 조례로 금연구역이 지정된 곳에서의 흡연은 과태료 부과 대상입니다. 위반 시 지자체에 신고합니다.</p>' },
      { question: '위자료는 얼마 정도 받을 수 있나요?', answer: '<p>간접흡연 위자료는 50~300만원 수준이 일반적입니다. 피해 기간, 건강 피해 정도에 따라 달라집니다.</p>' },
      { question: '전자담배도 간접흡연에 해당하나요?', answer: '<p>전자담배 에어로졸도 유해물질을 포함하므로 간접흡연 피해로 인정될 수 있습니다.</p>' },
    ],
    cta: { text: '간접흡연 피해 법적 대응 방법 AI로 확인하기', link: '/chat?domain=neighbor-dispute' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' }, { label: '층간소음 증거 수집', href: '/guide/neighbor-dispute/neighbor-noise-evidence-app-recording' }, { label: '층간소음 법적 절차', href: '/guide/neighbor-dispute/neighbor-dispute-noise-legal-steps' }, { label: '반려동물 소음·냄새', href: '/guide/neighbor-dispute/neighbor-dispute-pet-noise-smell' }],
  },

];
