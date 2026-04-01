import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [협의이혼을 앞둔 부부]의 [법원 제출 서류를 준비해야 하는 상황]에서 [서류 목록과 발급처 확인]을 돕는 페이지다.
// 2. 이 페이지는 [협의이혼 숙려기간이 길다고 느끼는 당사자]의 [기간 단축이 가능한지 알고 싶은 상황]에서 [숙려기간 규정과 예외 사유 확인]을 돕는 페이지다.
// 3. 이 페이지는 [재산분할 비율이 유리하게 나올지 걱정되는 이혼 당사자]의 [비율 결정 기준을 알고 싶은 상황]에서 [비율에 영향을 주는 핵심 요소 확인]을 돕는 페이지다.
// 4. 이 페이지는 [배우자 명의 재산이 많은 이혼 당사자]의 [재산 내역을 확보해야 하는 상황]에서 [재산조회 방법과 필요 서류]를 돕는 페이지다.

export const spokesBatch17GscDivorce: SpokePage[] = [
  {
    domain: 'divorce',
    slug: 'consensual-divorce-required-documents-checklist',
    keyword: '협의이혼 준비서류 체크리스트',
    questionKeyword: '협의이혼할 때 법원에 어떤 서류를 내야 하나요?',
    ctaKeyword: '협의이혼 서류 준비',
    type: '체크리스트형',
    meta: {
      title: '협의이혼 준비서류 7가지 체크리스트 | 로앤가이드',
      description:
        '협의이혼 신청하려는데 어떤 서류를 준비해야 할지 막막하시죠? 법원 제출 필수 서류 7가지와 발급처를 한눈에 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '배우자와 이혼에 합의했지만, 막상 법원에 가려니 어떤 서류를 챙겨야 할지 모르겠습니다. 신분증만 들고 갔다가 발걸음을 돌린 분도 적지 않습니다. 협의이혼은 서류가 미비하면 접수 자체가 안 되기 때문에, 법원 방문 전에 필수 서류를 빠짐없이 확인하는 것이 가장 중요합니다.',
    sections: [
      {
        title: '첫째, 이혼의사 확인 신청서와 가족관계증명서를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">협의이혼의 출발은 가정법원에 이혼의사 확인 신청서를 제출하는 것입니다</strong></p>\n<p>이혼의사 확인 신청서는 가정법원 민원실에 비치되어 있고, <a href="https://help.scourt.go.kr" target="_blank" rel="noopener">대한민국 법원 전자민원센터</a>에서도 다운로드할 수 있습니다. 부부 <strong>양쪽이 함께 서명·날인</strong>해야 합니다.</p>\n<p>가족관계증명서(상세)는 주민센터, 구청, 또는 <strong>정부24</strong>에서 발급받으세요. 발급일 기준 <strong>3개월 이내</strong>인 것만 유효합니다. 혼인관계증명서(상세)도 함께 발급받아 두면 법원에서 보정 요청을 받을 일이 줄어듭니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 이혼의사확인 신청서(양측 서명) + 가족관계증명서(상세) + 혼인관계증명서(상세)</blockquote>',
      },
      {
        title: '둘째, 미성년 자녀가 있다면 양육·친권 관련 서류가 추가됩니다',
        content:
          '<p><strong style="color:#1e3a5f">미성년 자녀가 있는 부부는 양육에 관한 협의서를 반드시 첨부해야 합니다</strong></p>\n<p>양육자 지정, 양육비 부담, 면접교섭권 등을 기재한 <strong>자녀 양육에 관한 협의서</strong>를 작성하세요. 법원에서 제공하는 양식이 있으니 그대로 활용하면 됩니다.</p>\n<p>양육비 산정은 <strong>양육비 산정기준표</strong>(법원행정처 발간)를 참고하되, 부모 쌍방의 소득증빙(근로소득원천징수영수증 또는 소득금액증명원)을 첨부하면 심사가 빨라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 양육 협의서 + 양육비 부담 조서 + 소득증빙 + 기본증명서(자녀)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">서류 누락 없이 준비하고 싶다면</strong><br/>\n<a href="/diagnosis/divorce" style="color:#1565c0;font-weight:600">내 상황에 맞는 필수 서류 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 재산분할 합의서와 위자료 약정서를 별도로 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 합의서는 법원 제출 필수 서류는 아니지만, 작성해두면 분쟁을 예방합니다</strong></p>\n<p>협의이혼 단계에서 재산분할 합의서를 작성해두지 않으면, 이혼 후 2년 이내에 별도 소송을 제기해야 합니다. <strong>부동산 등기부등본, 예금잔액증명서, 차량등록원부</strong> 등 재산 현황을 증빙하는 서류를 미리 확보하세요.</p>\n<p>위자료가 있다면 <strong>위자료 약정서</strong>도 별도로 작성하세요. 협의이혼 확인 조서에 위자료 내용은 포함되지 않으므로, 나중에 이행을 강제하려면 <strong>공증</strong>을 받아두는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 재산분할 합의서(공증 권장) + 위자료 약정서 + 재산증빙 서류</blockquote>',
      },
      {
        title: '넷째, 주민등록등본과 신분증을 빠뜨리지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">신분증과 주민등록등본은 법원 방문 시 반드시 지참해야 합니다</strong></p>\n<p>부부 모두의 <strong>주민등록등본</strong>(주소지 동일 여부 확인용)과 <strong>신분증 원본</strong>(주민등록증, 운전면허증, 여권 중 택1)을 준비하세요. 대리인이 출석하는 경우 위임장과 인감증명서가 추가로 필요합니다.</p>\n<p>외국인 배우자가 있는 경우에는 <strong>외국인등록사실증명서</strong>와 해당 국가의 가족관계 서류(번역·공증 포함)가 필요합니다. 이 서류는 발급에 시간이 걸리니 최소 2주 전에 준비를 시작하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 주민등록등본 + 신분증 원본(양측) + (외국인) 등록사실증명·번역공증</blockquote>',
      },
      {
        title: '다섯째, 서류 발급처와 유효기간을 한눈에 정리합니다',
        content:
          '<p><strong style="color:#1e3a5f">서류별 발급처가 다르므로 한 번에 준비할 수 있도록 계획을 세우세요</strong></p>\n<ul>\n<li><strong>이혼의사확인 신청서</strong>: 가정법원 민원실 또는 법원 전자민원센터</li>\n<li><strong>가족관계증명서(상세)</strong>: 주민센터·구청·정부24 (유효기간 3개월)</li>\n<li><strong>혼인관계증명서(상세)</strong>: 주민센터·구청·정부24 (유효기간 3개월)</li>\n<li><strong>주민등록등본</strong>: 주민센터·정부24 (유효기간 1개월 권장)</li>\n<li><strong>양육 협의서</strong>: 자체 작성(법원 양식 활용)</li>\n<li><strong>소득증빙</strong>: 국세청 홈택스 또는 회사 인사팀</li>\n<li><strong>재산증빙</strong>: 등기소(등기부등본), 은행(잔액증명), 국토부(차량)</li>\n</ul>\n<p>모든 서류의 유효기간을 확인하고, 법원 방문일 기준으로 <strong>최대한 가까운 날짜에 일괄 발급</strong>받으세요. 특히 가족관계증명서는 3개월이 지나면 재발급해야 합니다.</p>',
      },
    ],
    cases: [
      {
        title: '이혼 후 2년 내 재산분할 청구 기한을 놓치지 말아야 한다고 판시한 사례',
        summary:
          '대법원 2023므11819 사건(2023.12.21 선고)에서 법원은 협의이혼 후 민법 제839조의2에 따라 2년 이내에 재산분할청구를 하여야 하며, 제척기간 내 이루어진 청구에 대하여 제척기간 준수의 효력이 인정된다고 판시했습니다.',
        takeaway:
          '협의이혼 시 재산분할 합의를 하지 못했다면, 이혼 확정 후 2년 이내에 반드시 청구해야 합니다. 서류 준비 단계에서 재산분할 합의서도 함께 작성해두면 별도 소송을 피할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼 서류는 부부가 따로 준비해도 되나요?',
        answer:
          '각자 발급받을 수 있는 서류(가족관계증명서, 주민등록등본 등)는 따로 준비해도 됩니다. 다만 이혼의사확인 신청서와 양육 협의서는 반드시 양측이 함께 서명·날인해야 하므로, 서명 일정을 사전에 조율하세요.',
      },
      {
        question: '법원에 제출하는 서류에 인감도장이 필요한가요?',
        answer:
          '이혼의사확인 신청서에는 일반 도장 또는 서명으로 충분합니다. 다만 재산분할 합의서를 공증받을 때는 인감도장과 인감증명서가 필요하니, 혼동되지 않도록 미리 확인하세요.',
      },
      {
        question: '자녀가 없는 부부도 양육 관련 서류를 내야 하나요?',
        answer:
          '미성년 자녀가 없다면 양육 협의서와 양육비 관련 서류는 제출하지 않아도 됩니다. 이 경우 이혼의사확인 신청서, 가족관계증명서, 혼인관계증명서, 주민등록등본, 신분증만 준비하면 됩니다.',
      },
      {
        question: '서류를 다 준비하면 법원에서 바로 이혼이 되나요?',
        answer:
          '아닙니다. 서류 접수 후 숙려기간(미성년 자녀 있으면 3개월, 없으면 1개월)을 거쳐야 합니다. 숙려기간이 지난 후 부부가 다시 법원에 출석하여 이혼의사를 확인받으면 이혼이 확정됩니다.',
      },
      {
        question: '온라인으로 협의이혼 신청이 가능한가요?',
        answer:
          '2026년 현재, 이혼의사확인 신청은 부부가 직접 관할 가정법원에 출석하여 접수해야 합니다. 다만 일부 서류(가족관계증명서 등)는 정부24에서 온라인 발급이 가능하므로, 발급 가능한 서류는 미리 출력해 가세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '협의이혼 절차와 소요 기간 총정리', href: '/guide/divorce/consensual-divorce-process' },
      { label: '협의이혼 vs 재판이혼 차이점', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
      { label: '이혼 상담 전 준비사항 체크리스트', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '협의이혼 숙려기간과 예외', href: '/guide/divorce/consensual-divorce-cooling-period-exceptions' },
    ],
  },

  {
    domain: 'divorce',
    slug: 'consensual-divorce-cooling-period-exceptions',
    keyword: '협의이혼 숙려기간 예외 단축',
    questionKeyword: '협의이혼 숙려기간을 줄일 수 있는 방법이 있나요?',
    ctaKeyword: '이혼 숙려기간 단축',
    type: 'Q&A형',
    meta: {
      title: '협의이혼 숙려기간 3가지 예외 — 단축 가능할까? | 로앤가이드',
      description:
        '협의이혼 숙려기간이 너무 길어서 답답하시죠? 1개월·3개월 기간 규정과 단축이 가능한 3가지 예외 사유를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '이혼에 합의하고 법원에 서류를 냈는데, 숙려기간이 3개월이라고 합니다. 가정폭력으로 같은 집에 있기가 두려운데, 이 기간을 줄일 수는 없는 걸까요? 숙려기간의 정확한 규정과 기간 단축이 가능한 예외 사유를 확인해보세요.',
    sections: [
      {
        title: '첫째, 협의이혼 숙려기간은 자녀 유무에 따라 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">민법 제836조의2에 따라 미성년 자녀가 있으면 3개월, 없으면 1개월의 숙려기간이 적용됩니다</strong></p>\n<p>숙려기간은 부부가 충분히 숙고할 시간을 보장하기 위한 제도입니다. <strong>미성년 자녀가 있는 경우 3개월</strong>, <strong>없는 경우 1개월</strong>이며, 이 기간이 지나야 법원에 출석하여 이혼의사를 확인받을 수 있습니다.</p>\n<p>숙려기간은 법원이 이혼의사확인 신청서를 접수한 날부터 기산됩니다. 기간 중에는 법원에서 지정하는 <strong>이혼 안내 상담</strong>을 받을 수 있으며, 미성년 자녀가 있는 경우 상담이 권고됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 미성년 자녀 있음 → 3개월 / 미성년 자녀 없음 → 1개월 (접수일 기산)</blockquote>',
      },
      {
        title: '둘째, 가정폭력 등 급박한 사정이 있으면 기간을 단축할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">민법 제836조의2 제3항은 "급박한 사정이 있는 때"에 법원이 숙려기간을 단축할 수 있다고 규정합니다</strong></p>\n<p>단축이 인정되는 대표적 사유는 다음과 같습니다.</p>\n<ul>\n<li><strong>가정폭력</strong>: 배우자의 폭행·협박으로 동거가 위험한 경우</li>\n<li><strong>생명·신체에 대한 급박한 위험</strong>: 의료적 사유, 자해 위험 등</li>\n<li><strong>기타 법원이 인정하는 급박한 사정</strong>: 해외 이주, 출국 기한 등</li>\n</ul>\n<p>단축 신청은 이혼의사확인 신청서와 함께 또는 숙려기간 중에 별도로 할 수 있습니다. <strong>소명자료</strong>(진단서, 고소장 접수증, 보호명령 결정문 등)를 첨부하면 인용 가능성이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">단축 사유 3가지: 가정폭력 + 생명·신체 위험 + 기타 급박한 사정</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 상황에서 단축이 가능한지 확인해보세요</strong><br/>\n<a href="/diagnosis/divorce" style="color:#1565c0;font-weight:600">숙려기간 단축 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 숙려기간 단축 신청 절차와 필요 서류를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">숙려기간 단축은 관할 가정법원에 서면으로 신청합니다</strong></p>\n<p><strong>숙려기간 단축 신청서</strong>에 단축 사유를 구체적으로 기재하고, 이를 뒷받침하는 소명자료를 첨부하세요.</p>\n<ul>\n<li>가정폭력: <strong>진단서, 고소장 접수증명원, 피해자 보호명령 결정문, 112 신고 기록</strong></li>\n<li>긴급한 사정: <strong>출국 예정 항공권, 해외 취업 계약서, 의사 소견서</strong></li>\n</ul>\n<p>법원은 소명자료를 검토한 후 <strong>단축 여부와 단축 기간을 재량으로 결정</strong>합니다. 반드시 1주일로 단축되는 것이 아니며, 사안에 따라 2주~1개월 등 다양합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 단축 신청서 작성 → 소명자료 첨부 → 법원 재량 결정</blockquote>',
      },
      {
        title: '넷째, 숙려기간 중에도 할 수 있는 일이 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">숙려기간을 단순히 기다리는 시간이 아닌, 이혼 후 생활을 준비하는 시간으로 활용하세요</strong></p>\n<p>숙려기간 동안 다음 사항을 미리 정리해두면 이혼 확정 후 혼란을 줄일 수 있습니다.</p>\n<ul>\n<li><strong>재산분할 협의</strong>: 부동산·예금·보험·퇴직금 등 재산 목록 정리</li>\n<li><strong>양육비 산정</strong>: 양육비 산정기준표 확인, 소득자료 확보</li>\n<li><strong>주거 확보</strong>: 이혼 후 거주할 곳 사전 탐색</li>\n<li><strong>법률 상담</strong>: 무료 법률상담(대한법률구조공단 132)을 통해 권리 확인</li>\n</ul>\n<p>특히 재산분할 합의서와 양육 협의서는 숙려기간 내에 완성해두는 것이 좋습니다. 이혼의사 확인 출석일에 이 서류들이 준비되어 있으면 절차가 훨씬 빠릅니다.</p>',
      },
      {
        title: '다섯째, 숙려기간이 지나면 30일 이내에 출석해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">숙려기간 만료 후 법원이 지정한 기일(보통 30일 이내)에 부부가 함께 출석해야 이혼이 확정됩니다</strong></p>\n<p>숙려기간이 끝나면 법원에서 <strong>이혼의사 확인 기일</strong>을 지정합니다. 이 기일에 부부 모두 출석하여 판사 앞에서 이혼의사를 최종 확인받으세요.</p>\n<p>확인이 끝나면 <strong>이혼의사 확인서 등본</strong>을 발급받아 3개월 이내에 구·읍·면 사무소에 이혼 신고서를 제출해야 합니다. 기한 내 신고하지 않으면 이혼의사 확인의 효력이 상실됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 순서: 숙려기간 만료 → 출석·확인 → 확인서 등본 수령 → 3개월 내 이혼 신고</blockquote>',
      },
    ],
    cases: [
      {
        title: '배우자의 일방적 재산 처분이 이혼 사유가 될 수 있다고 판시한 사례',
        summary:
          '대법원 2025므10730 사건(2025.09.04 선고)에서 법원은 배우자 쌍방의 협력으로 이룩한 재산을 일방이 정당한 이유 없이 일방적으로 처분하여 가정공동체의 경제적 기반을 위태롭게 하는 행위는 민법 제840조 제6호의 "혼인을 계속하기 어려운 중대한 사유"에 해당할 수 있다고 판시했습니다.',
        takeaway:
          '배우자가 공동 재산을 일방적으로 처분하는 등 급박한 상황이라면, 숙려기간 단축 사유에 해당할 수 있습니다. 재산 처분 증거(등기부등본 변동 이력, 계좌 이체 내역 등)를 소명자료로 첨부하세요.',
      },
    ],
    faq: [
      {
        question: '숙려기간 중에 이혼 의사를 철회할 수 있나요?',
        answer:
          '네, 숙려기간 중에는 부부 중 한 쪽이라도 이혼 의사를 철회할 수 있습니다. 법원에 이혼의사 철회서를 제출하면 절차가 종료됩니다.',
      },
      {
        question: '가정폭력 피해자인데 숙려기간 단축 외에 다른 보호 방법이 있나요?',
        answer:
          '가정폭력 피해자는 가정법원에 피해자 보호명령(접근금지, 퇴거명령 등)을 신청할 수 있습니다. 숙려기간 단축 신청과 동시에 보호명령도 신청하면 이중으로 보호받을 수 있습니다.',
      },
      {
        question: '숙려기간을 줄여달라고 했는데 법원이 거절하면 어떻게 되나요?',
        answer:
          '법원이 단축 신청을 기각하면 원래의 숙려기간(1개월 또는 3개월)이 그대로 적용됩니다. 추가 소명자료를 보완하여 재신청할 수 있으며, 급박한 사정이 지속된다면 피해자 보호명령 등 다른 법적 수단을 병행하세요.',
      },
      {
        question: '재판이혼에는 숙려기간이 없나요?',
        answer:
          '재판이혼(소송이혼)에는 숙려기간이 적용되지 않습니다. 다만 재판이혼은 소장 제출 후 변론기일 지정까지 수개월이 걸리고, 조정 절차를 먼저 거쳐야 하므로 전체 소요 기간은 오히려 더 길 수 있습니다.',
      },
      {
        question: '해외 거주 중인데 숙려기간 관련 절차가 달라지나요?',
        answer:
          '해외 거주자도 관할 가정법원에 이혼의사확인을 신청해야 하며, 숙려기간 규정은 동일하게 적용됩니다. 다만 출석이 어려운 경우 재외공관에서 이혼의사를 확인받는 방법이 있으니, 주재국 한국 대사관에 먼저 문의하세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/consensual-divorce-required-documents-checklist' },
      { label: '협의이혼 절차와 소요 기간 총정리', href: '/guide/divorce/consensual-divorce-process' },
      { label: '협의이혼과 재판이혼 차이점', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '이혼 상담 전 준비사항 체크리스트', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '재산분할 비율은 어떻게 정해지나요', href: '/guide/divorce/property-division-ratio' },
    ],
  },

  {
    domain: 'divorce',
    slug: 'property-division-ratio-key-factors',
    keyword: '재산분할 비율 결정 핵심 요소',
    questionKeyword: '재산분할 비율을 유리하게 받으려면 어떤 점이 중요한가요?',
    ctaKeyword: '재산분할 비율 유리하게',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '재산분할 비율 달라지는 5가지 핵심 요소 | 로앤가이드',
      description:
        '재산분할 비율이 50:50이 아닐 수도 있다는 사실, 알고 계셨나요? 비율을 바꾸는 5가지 핵심 요소와 입증 방법을 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '이혼 재산분할 비율은 무조건 반반일 거라고 생각했는데, 변호사에게 "30:70이 나올 수도 있다"는 말을 들었습니다. 맞벌이였는데도 비율이 달라질 수 있는 건지, 어떤 요소가 비율에 영향을 주는지 불안합니다. 재산분할 비율을 결정하는 핵심 기준을 확인해보세요.',
    sections: [
      {
        title: '첫째, 혼인 중 재산 형성에 대한 기여도가 가장 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">법원은 재산의 형성과 유지에 각 배우자가 얼마나 기여했는지를 가장 먼저 봅니다</strong></p>\n<p>기여도는 단순히 소득만을 의미하지 않습니다. <strong>가사노동, 육아, 시부모 부양</strong> 등 비경제적 기여도 재산 형성에 대한 기여로 인정됩니다.</p>\n<p>맞벌이 부부라면 기여도가 비슷하게 평가되어 <strong>50:50에 가까운 비율</strong>이 나오는 경우가 많습니다. 반면 한쪽이 전업주부였더라도 혼인 기간이 길수록 기여도가 높게 평가될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소득 기여 + 가사·육아 기여 + 부양 기여 → 종합적으로 평가</blockquote>',
      },
      {
        title: '둘째, 혼인 기간과 특유재산 여부가 비율에 영향을 줍니다',
        content:
          '<p><strong style="color:#1e3a5f">혼인 기간이 길수록 공동 형성 재산으로 보는 범위가 넓어집니다</strong></p>\n<p><strong>혼인 기간</strong>이 20년 이상인 장기 혼인의 경우, 법원은 전업주부의 기여도를 <strong>40~50%</strong>까지 인정하는 경향이 있습니다. 반면 혼인 기간이 5년 미만인 단기 혼인에서는 <strong>20~30%</strong>로 낮게 평가될 수 있습니다.</p>\n<p><strong>특유재산</strong>(혼인 전 취득 재산, 상속·증여 받은 재산)은 원칙적으로 재산분할 대상에서 제외됩니다. 다만 상대방이 특유재산의 유지·증식에 기여한 경우에는 일부가 분할 대상에 포함될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기간별 기여도 경향: 5년 미만(20~30%) / 10~20년(35~45%) / 20년+(40~50%)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 비율이 어떻게 나올지 궁금하다면</strong><br/>\n<a href="/diagnosis/divorce" style="color:#1565c0;font-weight:600">재산분할 예상 비율 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 혼인 파탄의 책임 정도가 비율을 변동시킵니다',
        content:
          '<p><strong style="color:#1e3a5f">이혼에 대한 유책 사유는 위자료뿐 아니라 재산분할 비율에도 영향을 줄 수 있습니다</strong></p>\n<p>대법원은 재산분할 시 <strong>"혼인관계 파탄에 대한 책임"</strong>을 고려요소로 인정하고 있습니다. 부정행위, 가정폭력, 경제적 학대 등 상대방의 유책 사유가 입증되면 <strong>기여도 비율이 유리하게 조정</strong>될 수 있습니다.</p>\n<p>다만 유책 사유만으로 비율이 극단적으로 달라지는 것은 아닙니다. 법원은 재산분할의 <strong>청산적 성격</strong>을 우선시하므로, 유책 사유는 보충적으로 반영됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 유책 사유 → 비율 조정 가능하나, 청산적 성격이 우선</blockquote>',
      },
      {
        title: '넷째, 재산 은닉이나 일방적 처분은 비율에 불리하게 작용합니다',
        content:
          '<p><strong style="color:#1e3a5f">혼인관계 파탄 이후 일방이 재산을 처분하면, 처분 전 상태로 환원하여 분할 대상에 포함시킵니다</strong></p>\n<p>배우자가 이혼 전에 <strong>예금을 인출하거나 부동산을 매각</strong>하여 재산을 줄인 경우, 법원은 해당 재산이 <strong>변론종결일에 그대로 존재하는 것으로 간주</strong>하여 분할 대상에 포함시킬 수 있습니다.</p>\n<p>이를 입증하려면 <strong>계좌거래내역, 부동산 등기변동 이력, 카드 사용 내역</strong> 등을 확보해야 합니다. 재산 은닉이 드러나면 상대방의 기여도가 감소 조정되어 결과적으로 내 비율이 유리해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">입증 자료: 계좌거래내역 + 등기변동이력 + 카드내역 + 보험해약내역</blockquote>',
      },
      {
        title: '다섯째, 이혼 후 부양 필요성도 비율 산정에 반영됩니다',
        content:
          '<p><strong style="color:#1e3a5f">법원은 이혼 후 경제적 자립이 어려운 배우자에게 부양적 요소를 추가로 고려합니다</strong></p>\n<p>재산분할에는 <strong>청산적 요소</strong>(공동 재산 분배)뿐 아니라 <strong>부양적 요소</strong>(이혼 후 생활 보장)도 포함됩니다. 전업주부였거나 건강상 취업이 어려운 배우자, 미성년 자녀를 양육하는 배우자에게는 비율이 유리하게 조정될 수 있습니다.</p>\n<p><strong>연령, 건강 상태, 취업 가능성, 양육 부담</strong> 등이 종합적으로 고려됩니다. 이러한 사정은 의사 소견서, 고용 상태 증빙, 양육비 지출 내역 등으로 소명할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부양적 요소: 연령 + 건강 + 취업가능성 + 양육부담 → 비율 상향 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '이혼 당사자 사망 후에도 재산분할 의무가 상속인에게 승계된다고 판시한 사례',
        summary:
          '대법원 2024스876 사건(2026.01.15 선고)에서 법원은 재산분할 제도가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 하며, 이혼 당사자 일방이 사망하더라도 재산분할 의무는 상속인들에게 승계된다고 판시했습니다.',
        takeaway:
          '재산분할 청구는 이혼 후 2년 이내에 해야 하며, 상대방이 사망하더라도 그 상속인을 상대로 청구할 수 있습니다. 재산분할 비율에 영향을 주는 기여도 자료를 미리 확보해두는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '전업주부도 재산분할에서 50%를 받을 수 있나요?',
        answer:
          '가능합니다. 혼인 기간이 길고 가사·육아에 전담한 경우, 법원은 전업주부의 기여도를 40~50%까지 인정할 수 있습니다. 다만 혼인 기간, 자녀 수, 구체적 가사노동 내용 등을 종합적으로 판단하므로 일률적이지는 않습니다.',
      },
      {
        question: '혼인 전에 산 아파트도 재산분할 대상인가요?',
        answer:
          '혼인 전 취득한 특유재산은 원칙적으로 분할 대상이 아닙니다. 다만 혼인 중 대출을 함께 상환했거나, 리모델링 비용을 공동으로 부담한 경우에는 기여분만큼 분할 대상에 포함될 수 있습니다.',
      },
      {
        question: '배우자가 재산을 숨기면 어떻게 알 수 있나요?',
        answer:
          '재판이혼 과정에서 법원에 금융재산조회(재산명시명령), 부동산 등기조회, 국민연금·퇴직연금 조회를 신청할 수 있습니다. 법원의 사실조사 명령을 통해 상대방이 숨긴 재산을 발견할 수 있습니다.',
      },
      {
        question: '퇴직금도 재산분할 대상인가요?',
        answer:
          '네. 혼인 기간 중 발생한 퇴직금(퇴직연금 포함)은 재산분할 대상입니다. 아직 퇴직하지 않았더라도, 변론종결일 기준으로 "지금 퇴직한다면 받을 수 있는 금액"을 산정하여 분할합니다.',
      },
      {
        question: '재산분할 비율에 불복하면 항소할 수 있나요?',
        answer:
          '가능합니다. 1심 판결에 불복하면 판결문 송달일로부터 2주 이내에 항소할 수 있습니다. 항소심에서는 추가 증거를 제출하여 기여도를 다시 다툴 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '재산분할 비율 총정리', href: '/guide/divorce/property-division-ratio' },
      { label: '재산분할 vs 위자료 차이점 비교', href: '/guide/divorce/property-division-vs-alimony-comparison' },
      { label: '배우자 은닉재산 찾는 방법', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '배우자 명의 재산 확보할 자료 목록', href: '/guide/divorce/spouse-hidden-assets-discovery-documents' },
      { label: '이혼 상담 전 준비사항 체크리스트', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  {
    domain: 'divorce',
    slug: 'spouse-hidden-assets-discovery-documents',
    keyword: '배우자 명의 재산 조회 서류',
    questionKeyword: '배우자 이름으로 된 재산이 많은데 어떤 자료를 확보해야 하나요?',
    ctaKeyword: '배우자 재산 조회',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '배우자 명의 재산 확보할 자료 6가지 목록 | 로앤가이드',
      description:
        '배우자 이름으로 된 재산이 많은데 이혼 후 제대로 분할받을 수 있을지 걱정이시죠? 꼭 확보해야 할 자료 6가지를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '배우자 명의의 아파트, 예금, 보험이 여러 건인데, 내 이름으로 된 재산은 거의 없습니다. 이혼하면 아무것도 못 받는 건 아닌지 불안합니다. 재산분할을 유리하게 진행하려면 어떤 자료를 언제, 어떻게 확보해야 하는지 지금 확인해보세요.',
    sections: [
      {
        title: '첫째, 부동산 등기부등본부터 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">배우자 명의의 부동산은 등기부등본으로 정확한 소유 관계를 확인할 수 있습니다</strong></p>\n<p><strong>인터넷 등기소</strong>(대법원 등기정보센터)에서 배우자 이름과 주소를 알면 부동산 등기부등본을 열람할 수 있습니다. 소유권, 근저당, 가압류 등 권리관계를 확인하세요.</p>\n<p>혼인 중 취득한 부동산은 명의와 관계없이 <strong>재산분할 대상</strong>입니다. 등기부등본에서 <strong>취득 시기</strong>(혼인 전인지 후인지)와 <strong>담보 설정 현황</strong>을 반드시 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인 항목: 소유자 명의 + 취득일자 + 근저당 설정 금액 + 가압류 여부</blockquote>',
      },
      {
        title: '둘째, 금융재산은 소송 전에 최대한 파악해두세요',
        content:
          '<p><strong style="color:#1e3a5f">예금, 보험, 주식 등 금융재산은 소송 전 확보 가능한 자료와 소송 중 법원을 통해 조회하는 자료로 나뉩니다</strong></p>\n<p><strong>소송 전 확보 가능한 자료</strong>:</p>\n<ul>\n<li>배우자의 계좌번호와 은행명 메모 (통장, 체크카드, 자동이체 내역 등에서 확인)</li>\n<li>보험증권 사본 (우편물, 이메일 등)</li>\n<li>주식 거래 앱이나 증권사 우편물에서 계좌 정보 확인</li>\n</ul>\n<p><strong>소송 중 법원 조회 가능한 자료</strong>:</p>\n<ul>\n<li><strong>금융재산조회</strong>(재산명시명령): 법원이 전 금융기관에 일괄 조회</li>\n<li><strong>보험계약 조회</strong>: 보험협회를 통한 전체 보험 내역 확인</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 소송 전에 계좌번호·보험증권 번호만이라도 파악해두면 조회 속도가 빨라집니다</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내가 확보해야 할 자료가 뭔지 모르겠다면</strong><br/>\n<a href="/diagnosis/divorce" style="color:#1565c0;font-weight:600">내 상황에 맞는 재산 확보 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 퇴직금과 국민연금도 분할 대상이니 미리 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">혼인 기간 중 발생한 퇴직금과 국민연금은 재산분할 대상입니다</strong></p>\n<p><strong>퇴직금</strong>: 배우자의 현 직장과 근속연수를 알고 있다면, 퇴직 시 예상 퇴직금을 추정할 수 있습니다. 정확한 금액은 소송 중 법원의 사실조사를 통해 확인됩니다.</p>\n<p><strong>국민연금</strong>: 혼인 기간이 5년 이상이면 이혼 시 상대방의 국민연금을 <strong>분할연금</strong>으로 청구할 수 있습니다(국민연금법 제64조). 분할비율은 혼인 기간에 비례하며, 국민연금공단에 신청합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 배우자 직장·근속연수 메모 + 국민연금 가입 기간 확인(국민연금공단 1355)</blockquote>',
      },
      {
        title: '넷째, 차량·사업체·가상자산도 놓치지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">부동산·예금 외에도 차량, 사업체 지분, 가상자산까지 재산분할 대상입니다</strong></p>\n<p><strong>차량</strong>: 자동차등록원부(국토교통부 자동차민원 대국민포털)를 통해 배우자 명의 차량을 확인할 수 있습니다. 차량 시세는 중고차 시세 사이트를 참고하세요.</p>\n<p><strong>사업체</strong>: 배우자가 개인사업자이거나 법인 대표라면 사업자등록증, 법인등기부등본, 최근 3년 재무제표 등이 필요합니다.</p>\n<p><strong>가상자산</strong>: 비트코인 등 가상자산도 2024년 이후 재산분할 대상으로 인정되고 있습니다. 거래소 가입 내역이나 입출금 기록을 확인해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 확인: 차량등록원부 + 사업자등록증 + 법인등기부등본 + 가상자산 거래 내역</blockquote>',
      },
      {
        title: '다섯째, 자료 확보 시기와 주의사항을 정리합니다',
        content:
          '<p><strong style="color:#1e3a5f">재산 자료는 이혼 이야기가 나오기 전에 확보하는 것이 가장 유리합니다</strong></p>\n<p>이혼 의사를 밝힌 후에는 배우자가 재산을 은닉하거나 처분할 가능성이 있습니다. 따라서 자료 확보는 <strong>가능한 한 빠르게, 조용히</strong> 진행하세요.</p>\n<ul>\n<li><strong>합법적으로 확보</strong>: 공동 주거지에 있는 우편물, 통장, 보험증권 등을 복사·촬영하는 것은 적법합니다</li>\n<li><strong>불법 방법 주의</strong>: 배우자 휴대폰 해킹, 타인 명의 도용 조회 등은 형사 처벌 대상이 될 수 있습니다</li>\n<li><strong>소송 중 활용</strong>: 법원에 재산명시명령, 재산조회를 신청하면 합법적으로 전체 재산을 파악할 수 있습니다</li>\n</ul>\n<p>확보한 자료는 <strong>날짜별로 정리</strong>하여 변호사 상담 시 가져가면 전략 수립에 큰 도움이 됩니다.</p>',
      },
    ],
    cases: [
      {
        title: '법원이 재산분할 대상과 가액을 직권으로 조사할 수 있다고 판시한 사례',
        summary:
          '대법원 2024므10370 사건(2024.05.30 선고)에서 법원은 가사비송절차에서는 직권탐지주의에 의하므로, 당사자의 주장에 구애되지 않고 재산분할의 대상과 가액을 직권으로 조사·판단할 수 있다고 판시했습니다.',
        takeaway:
          '법원에 재산조회를 신청하면 당사자가 직접 확인하기 어려운 금융재산, 보험, 연금까지 조사할 수 있습니다. 소송 전에 확보한 자료는 법원의 직권조사를 뒷받침하는 단서가 됩니다.',
      },
    ],
    faq: [
      {
        question: '배우자의 동의 없이 재산을 조회할 수 있나요?',
        answer:
          '개인이 직접 타인 명의의 금융계좌를 조회하는 것은 불법입니다. 다만 이혼 소송을 제기하면 법원에 재산명시명령이나 재산조회를 신청하여 합법적으로 배우자의 전체 금융재산을 파악할 수 있습니다.',
      },
      {
        question: '배우자가 이혼 전에 재산을 빼돌리면 어떻게 하나요?',
        answer:
          '법원은 혼인 파탄 이후 배우자가 일방적으로 처분한 재산도 변론종결일에 존재하는 것으로 간주하여 분할 대상에 포함시킬 수 있습니다. 계좌 이체 내역, 등기 변동 이력 등을 증거로 제출하세요.',
      },
      {
        question: '숨겨진 재산이 아니라 알려진 재산인데도 자료를 확보해야 하나요?',
        answer:
          '네. 재산의 존재를 안다고 해도, 정확한 가액과 현황을 증빙하는 서류가 없으면 분할 비율 산정에 불리합니다. 등기부등본, 잔액증명서, 보험증권 등 구체적 증빙을 확보하세요.',
      },
      {
        question: '사업을 하는 배우자의 재산은 어떻게 파악하나요?',
        answer:
          '법인사업자라면 법인등기부등본과 재무제표를 확인하세요. 개인사업자라면 소득금액증명원(국세청 홈택스)과 부가가치세 신고 내역이 매출 규모를 파악하는 데 유용합니다. 소송 중에는 법원을 통해 국세청 자료를 조회할 수도 있습니다.',
      },
      {
        question: '가상자산(비트코인 등)도 재산분할 대상이 맞나요?',
        answer:
          '네. 최근 가정법원 실무에서 가상자산도 재산분할 대상으로 인정하고 있습니다. 배우자가 가상자산 거래소에 가입한 사실을 알고 있다면, 소송 중 해당 거래소에 대한 사실조회를 신청할 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '배우자 은닉재산 찾는 방법', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 비율 달라지는 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '재산분할 비율 총정리', href: '/guide/divorce/property-division-ratio' },
      { label: '재산분할 vs 위자료 차이점 비교', href: '/guide/divorce/property-division-vs-alimony-comparison' },
      { label: '이혼 상담 전 준비사항 체크리스트', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },
];
