import { SpokePage } from '../spoke-pages';

// divorce 클러스터 허브 — 이혼 준비 종합 가이드 (7섹션 45개 스포크 연결)
// 고유 존재 이유: 이혼을 앞두고 절차·재산분할·양육·위자료·연금분할을
// 어디서부터 정리해야 할지 막막한 사용자가 클러스터 전체를 한눈에 훑고
// 각 상황별 상세 페이지로 이동하도록 돕는 허브 페이지.

export const spokesDivorceHub: SpokePage[] = [

  // ─── 이혼 준비 종합 가이드 (클러스터 허브) ───
  {
    domain: 'divorce',
    slug: 'divorce-preparation-guide',
    keyword: '이혼 준비 종합 가이드 절차 재산분할 양육 위자료',
    questionKeyword:
      '저는 이혼을 앞두고 협의이혼과 재판이혼 중 무엇을 택해야 할지, 재산분할과 양육권·양육비, 위자료, 연금분할은 각각 어떻게 준비해야 할지 어디서부터 정리해야 할지 막막한 상황이에요. 이혼 절차의 큰 그림부터 재산·자녀·금전 쟁점별로 무엇을 확인하고 어떤 자료를 챙겨야 하는지 순서대로 정리해볼 수 있나요?',
    ctaKeyword: '이혼 절차·재산분할·양육·위자료 종합 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 준비 종합 가이드 — 7가지 핵심 총정리 | 로앤가이드',
      description:
        '이혼을 앞두고 절차·재산분할·양육·위자료·연금분할을 어디서부터 정리해야 할지 막막하다면, 협의·재판 절차부터 자녀·금전 쟁점까지 7가지 핵심을 한눈에 정리해 지금 확인하세요.',
    },
    intro:
      '<p>이혼을 앞두면 협의이혼으로 갈지 재판이혼으로 갈지, 재산은 어떻게 나누고 아이 문제와 위자료·연금은 어떻게 정리해야 할지 한꺼번에 결정할 것이 많아 어디서부터 손대야 할지 막막하실 수 있습니다. 크게 보면 이혼은 부부가 이혼 자체와 조건에 합의해 가정법원의 확인을 받는 협의이혼과, 합의가 어려워 법원에 이혼을 청구하는 재판이혼으로 나뉩니다. 협의이혼은 자녀 유무에 따라 숙려기간(양육할 자녀가 있으면 3개월, 없으면 1개월)을 거치는 흐름으로 안내되고, 재판이혼은 민법이 정한 혼인 파탄 사유가 다뤄지는 절차로 진행됩니다. 함께 정리해야 할 쟁점으로는 혼인 중 부부가 함께 형성한 재산을 기여도에 따라 나누는 재산분할, 자녀의 친권·양육자와 양육비를 정하는 양육 문제, 혼인 파탄에 책임 있는 배우자에게 정신적 손해를 청구하는 위자료, 그리고 국민연금·공무원연금·퇴직연금 등을 나누는 연금분할이 있습니다. 각 쟁점은 사실관계와 요건 충족 정도에 따라 결과가 달라질 수 있어, 이 가이드는 결론을 단정하기보다 무엇을 확인하고 어떤 자료를 준비하면 좋은지 안내하는 데 초점을 둡니다. 아래 7개 묶음에서 내 상황에 가까운 주제를 골라 상세 페이지에서 순서대로 검토해볼 수 있습니다. 상담이 필요할 때는 대한법률구조공단(132)이나 한국가정법률상담소(1644-7077), 관할 가정법원 안내를 통해 절차를 확인해볼 수 있습니다.</p>',
    sections: [
      {
        title: '📋 이혼 절차 개요 — 협의 vs 재판',
        content:
          '<p>먼저 협의이혼과 재판이혼 중 내 상황에 맞는 길이 무엇인지 큰 그림을 잡아두면 이후 준비가 한결 수월해집니다. 협의이혼은 부부가 이혼과 조건에 합의해 법원 확인과 숙려기간을 거치는 흐름으로, 재판이혼은 합의가 어려울 때 파탄 사유를 다투는 절차로 안내됩니다. 국제결혼·다문화 부부라면 관할·준거법 같은 쟁점이 함께 검토되는 사례가 많습니다.</p>\n<ul>\n<li><a href="/guide/divorce/divorce-foreign-spouse-litigation-procedure">외국인 배우자 이혼 국제재판 준거법</a> — 국제재판 관할·준거법 정리</li>\n<li><a href="/guide/divorce/uncontested-divorce-document-checklist">협의이혼 서류 체크리스트</a> — 협의이혼 서류 한눈에</li>\n<li><a href="/guide/divorce/divorce-trial-abuse-insult-breakdown-proof-insufficient-track">재판상 이혼 학대 중대모욕 파탄 입증</a> — 파탄 사유 입증 갈래</li>\n<li><a href="/guide/divorce/divorce-foreign-spouse-jurisdiction-agreement-track">외국인 배우자 재판관할 합의</a> — 관할 합의 쟁점 정리</li>\n<li><a href="/guide/divorce/divorce-cooling-period-new-partner-fault-shift-track">협의이혼 숙려기간 교제 유책</a> — 숙려기간·유책 다툼</li>\n<li><a href="/guide/divorce/divorce-international-marriage-cultural-conflict-track">다문화 결혼 문화차이 협의이혼</a> — 문화차이 갈등 정리</li>\n<li><a href="/guide/divorce/consensual-divorce-timeline-docs">협의이혼 기간과 준비 서류 총정리</a> — 숙려기간·서류 흐름</li>\n</ul>',
      },
      {
        title: '💰 재산분할 — 대상·범위·기여도',
        content:
          '<p>재산분할은 혼인 중 부부가 함께 형성·유지한 재산을 기여도에 따라 나누는 절차로, 분할 비율이나 금액은 사례에 따라 다르지만 재산 형성·유지 기여도를 종합해 검토되는 사례가 많습니다. 부동산·예금 같은 적극재산뿐 아니라 공동채무, 특유재산, 명의신탁, 연금 수령분까지 대상 범위가 함께 다뤄질 수 있어 재산 목록을 먼저 정리해두면 도움이 됩니다.</p>\n<ul>\n<li><a href="/guide/divorce/divorce-property-division-comprehensive">이혼 재산분할 기준 범위 총정리</a> — 분할 기준·범위 총정리</li>\n<li><a href="/guide/divorce/divorce-property-division-scope-faq">이혼 시 재산분할 대상은 무엇인가요?</a> — 분할 대상 범위 확인</li>\n<li><a href="/guide/divorce/divorce-joint-debt-negative-asset-division-track">부부 공동채무 소극재산 재산분할</a> — 공동채무 분담 정리</li>\n<li><a href="/guide/divorce/divorce-inherited-separate-property-realestate-division-track">상속받은 특유재산 부동산 재산분할</a> — 특유재산 기여 검토</li>\n<li><a href="/guide/divorce/divorce-spouse-retirement-pension-future-benefit-division-track">배우자 퇴직연금 장래 수령분 재산분할</a> — 장래 퇴직연금 분할</li>\n<li><a href="/guide/divorce/divorce-spouse-name-trust-real-estate-division-track">배우자 명의신탁 부동산 재산분할</a> — 명의신탁 부동산 정리</li>\n<li><a href="/guide/divorce/divorce-spouse-professional-license-contribution-division-track">배우자 전문직 자격 취득 기여 재산분할</a> — 자격취득 기여 검토</li>\n<li><a href="/guide/divorce/divorce-spouse-national-pension-split-annuity-division-track">배우자 국민연금 분할연금 재산분할</a> — 분할연금 요건 확인</li>\n</ul>',
      },
      {
        title: '👶 양육권·양육비 — 친권·양육비 산정',
        content:
          '<p>자녀가 있는 경우 친권자·양육자를 정하고 양육비를 산정하는 문제가 핵심 쟁점이 됩니다. 양육비는 서울가정법원 양육비 산정기준표를 참고해 부모의 소득과 자녀 나이 등을 종합해 검토되며, 임시 양육자 사전처분이나 면접교섭 이행 문제가 함께 다뤄지는 사례도 있습니다. 자녀의 복리를 기준으로 무엇을 준비하면 좋은지 미리 정리해두면 도움이 됩니다.</p>\n<ul>\n<li><a href="/guide/divorce/child-support-calculation-standard">양육비 산정 기준표와 계산 방법</a> — 산정 기준표 계산</li>\n<li><a href="/guide/divorce/custody-agreement-prep">양육권 합의 전 정리할 것</a> — 양육권 합의 준비</li>\n<li><a href="/guide/divorce/divorce-temporary-custody-pre-trial-order">임시 양육자 사전처분</a> — 임시 양육 사전처분</li>\n<li><a href="/guide/divorce/divorce-second-marriage-stepchildren-custody-conflict-track">재혼·계자녀 양육권 분쟁</a> — 재혼 양육권 정리</li>\n<li><a href="/guide/divorce/divorce-visitation-refused-court-enforcement-fine-track">면접교섭 거부 이행명령 과태료</a> — 면접교섭 이행 정리</li>\n<li><a href="/guide/divorce/divorce-stepchild-adoption-cancel-asset-division-track">재혼 친양자입양 이혼 재산분할</a> — 친양자 입양 쟁점</li>\n</ul>',
      },
      {
        title: '⚖️ 위자료 — 유책·정신적 손해',
        content:
          '<p>위자료는 혼인 파탄에 책임 있는 배우자에게 정신적 손해에 대한 배상을 청구하는 것으로, 인정 여부와 금액은 사례에 따라 다르지만 파탄 경위·책임 정도·혼인 기간 등을 종합해 검토되는 사례가 많습니다. 외도·부정행위, 가정폭력, 시댁 부당대우, 장기 별거 등 파탄 원인에 따라 다투는 자료가 달라질 수 있어 상황에 맞는 페이지를 골라 확인해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/divorce/divorce-alimony-calculation-standard">위자료 산정 기준 금액 총정리</a> — 위자료 기준 정리</li>\n<li><a href="/guide/divorce/divorce-de-facto-marriage-property-division-scope">사실혼 재산분할 위자료 인정 범위</a> — 사실혼 인정 범위</li>\n<li><a href="/guide/divorce/divorce-inlaws-mistreatment-marriage-breakdown-alimony-track">시댁 부당대우 혼인파탄 유책 위자료</a> — 부당대우 파탄 검토</li>\n<li><a href="/guide/divorce/divorce-spouse-infidelity-affair-breakdown-alimony-track">배우자 외도 부정행위 혼인파탄 위자료</a> — 외도 파탄 위자료</li>\n<li><a href="/guide/divorce/divorce-spouse-domestic-violence-breakdown-alimony-track">배우자 가정폭력 혼인파탄 위자료</a> — 가정폭력 파탄 검토</li>\n<li><a href="/guide/divorce/divorce-long-separation-breakdown-alimony-track">장기 별거 혼인파탄 위자료</a> — 장기 별거 파탄</li>\n</ul>',
      },
      {
        title: '🏦 연금분할·재산명세 — 국민·공무원·퇴직연금',
        content:
          '<p>혼인 기간에 형성된 연금은 요건을 충족하면 분할 대상으로 검토될 수 있습니다. 국민연금 분할연금은 혼인 기간과 가입 기간 등 요건이 함께 다뤄지고, 공무원연금·퇴직연금은 분할 방법과 산정 기준이 사례별로 달라질 수 있어 어떤 연금이 어떻게 나뉘는지 미리 확인해두면 도움이 됩니다.</p>\n<ul>\n<li><a href="/guide/divorce/divorce-pension-division-method">이혼 퇴직연금 분할 방법</a> — 퇴직연금 분할 방법</li>\n<li><a href="/guide/divorce/divorce-national-pension-division-track">국민연금 분할 이혼</a> — 국민연금 분할 정리</li>\n<li><a href="/guide/divorce/divorce-public-pension-split-track">공무원 연금 분할 재산분할</a> — 공무원연금 분할</li>\n</ul>',
      },
      {
        title: '📑 소송서류·준비 — 증거·서류 체크리스트',
        content:
          '<p>이혼을 준비할 때는 상담 전에 어떤 서류와 증거를 정리해두면 좋은지 미리 챙겨두는 것이 도움이 됩니다. 협의이혼 신청서류부터 재판이혼에서 다뤄지는 부정행위·폭력 증거, 녹음 자료의 증거능력까지 상황에 따라 준비할 자료가 달라질 수 있어, 내 사건과 가까운 페이지에서 체크리스트를 확인해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/divorce/divorce-consultation-prep">이혼 상담 전 준비할 서류 체크리스트</a> — 상담 전 서류 정리</li>\n<li><a href="/guide/divorce/consensual-divorce-required-documents">협의이혼 신청 시 필요한 서류 목록</a> — 협의이혼 필요서류</li>\n<li><a href="/guide/divorce/divorce-illegal-recording-evidence-track">이혼 소송 무단 녹음 증거능력</a> — 녹음 증거능력 검토</li>\n<li><a href="/guide/divorce/divorce-spouse-adultery-evidence-track">배우자 부정행위 증거 이혼</a> — 부정행위 증거 확보</li>\n<li><a href="/guide/divorce/divorce-infidelity-evidence-consolation-claim-track">배우자 합의금 수령 후 상간자 위자료 청구</a> — 상간자 청구 정리</li>\n<li><a href="/guide/divorce/divorce-spouse-game-screen-addiction-divorce-track">배우자 게임 SNS 중독 이혼</a> — 중독 파탄 입증</li>\n<li><a href="/guide/divorce/divorce-domestic-violence-evidence-track">배우자 폭력 이혼 위자료 증거 확보</a> — 폭력 증거 확보</li>\n</ul>',
      },
      {
        title: '🔎 특수사례 — 사실혼·국제결혼·상간자',
        content:
          '<p>일반적인 이혼과 다르게 다뤄지는 특수한 상황도 있습니다. 상간자(외도 상대방)에 대한 위자료 청구, 사실혼 해소에 따른 재산분할, 국제결혼·다문화 부부의 갈등, 해외 자산 은닉 등은 쟁점과 준비 방향이 달라질 수 있어 해당 상황에 맞는 페이지에서 무엇을 확인하면 좋은지 검토해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/divorce/divorce-third-party-affair-claim">불륜 상대방 위자료 손해배상</a> — 상간자 손해배상</li>\n<li><a href="/guide/divorce/divorce-affair-third-party-damages-track">외도 상대방 위자료</a> — 외도 상대 위자료</li>\n<li><a href="/guide/divorce/divorce-international-marriage-foreign-spouse-track">국제결혼 외국인 배우자 이혼</a> — 국제결혼 이혼 정리</li>\n<li><a href="/guide/divorce/divorce-third-party-affair-residual-claim-track">배우자 합의 후 상간자 잔여 위자료</a> — 잔여 위자료 청구</li>\n<li><a href="/guide/divorce/divorce-foreign-spouse-visa-link-pressure-track">외국인 배우자 비자 협박 이혼</a> — 비자 협박 대응</li>\n<li><a href="/guide/divorce/divorce-common-law-marriage-dissolution-track">사실혼 해소 재산분할</a> — 사실혼 해소 분할</li>\n<li><a href="/guide/divorce/divorce-bilingual-bicultural-conflict-track">다문화 부부 가치관 갈등</a> — 가치관 갈등 정리</li>\n<li><a href="/guide/divorce/divorce-property-trust-foreign-asset-track">배우자 해외 자산 은닉</a> — 해외 자산 은닉</li>\n</ul>',
      },
    ],
    cases: [],
    faq: [
      {
        question: '협의이혼 숙려기간은 얼마나 되나요?',
        answer:
          '<strong>양육할 자녀가 있으면 3개월, 없으면 1개월의 숙려기간을 거치는 것으로 안내되고 있습니다.</strong> 숙려기간 이후 가정법원에서 이혼의사 확인을 받는 흐름으로 진행되며, 자세한 일정은 관할 가정법원에서 확인해볼 수 있습니다.',
      },
      {
        question: '재산분할 비율은 어떻게 정해지나요?',
        answer:
          '<strong>분할 비율은 사례에 따라 다르지만 혼인 중 재산 형성·유지에 기여한 정도를 종합해 검토되는 사례가 많습니다.</strong> 부동산·예금 등 재산 목록과 기여 내용을 먼저 정리해두면 상담 시 도움이 됩니다.',
      },
      {
        question: '양육비는 어떤 기준으로 산정되나요?',
        answer:
          '<strong>서울가정법원 양육비 산정기준표를 참고해 부모의 합산 소득과 자녀의 나이 등을 종합해 산정하는 것으로 안내되고 있습니다.</strong> 소득 자료와 자녀 양육 현황을 정리해두면 산정 기준을 확인하는 데 도움이 됩니다.',
      },
      {
        question: '위자료는 항상 받을 수 있나요?',
        answer:
          '<strong>위자료는 혼인 파탄에 책임 있는 배우자에게 청구하는 것으로, 인정 여부와 금액은 파탄 경위와 책임 정도에 따라 달라질 수 있습니다.</strong> 파탄 원인을 뒷받침하는 자료를 정리해두면 검토에 도움이 됩니다.',
      },
      {
        question: '연금분할은 어떤 요건이 필요한가요?',
        answer:
          '<strong>국민연금 분할연금 등은 혼인 기간과 가입 기간 등 요건이 함께 다뤄지는 것으로 안내되고 있습니다.</strong> 어떤 연금이 대상인지와 요건 충족 여부를 국민연금공단·해당 연금기관 안내로 확인해볼 수 있습니다.',
      },
      {
        question: '사실혼도 재산분할이나 위자료 청구가 되나요?',
        answer:
          '<strong>사실혼도 해소 시 재산분할이나 위자료가 인정되는 사례가 있으며, 사실혼 성립 여부와 파탄 경위에 따라 달라질 수 있습니다.</strong> 사실혼 관계를 뒷받침하는 자료를 정리해두는 것이 도움이 됩니다.',
      },
      {
        question: '상간자에게도 위자료를 청구할 수 있나요?',
        answer:
          '<strong>배우자의 부정행위에 가담한 상대방(상간자)에게 위자료를 청구할 수 있는 사례가 있으며, 부정행위와 고의·과실을 뒷받침하는 자료가 함께 검토됩니다.</strong> 관련 증거를 정리해두면 청구를 검토하는 데 도움이 됩니다.',
      },
      {
        question: '배우자가 해외에 거주해도 이혼할 수 있나요?',
        answer:
          '<strong>국제결혼이나 배우자 해외 거주 상황에서는 재판관할과 준거법이 함께 다뤄지는 것으로 안내되고 있습니다.</strong> 혼인·거주 관련 서류를 정리해두고, 관할·준거법 쟁점은 가정법원이나 대한법률구조공단(132) 안내로 확인해볼 수 있습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: 'divorce 도메인 허브', href: '/guide/divorce' },
      { label: '이혼 재산분할 기준 범위 총정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '위자료 산정 기준 금액 총정리', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '양육비 산정 기준표와 계산 방법', href: '/guide/divorce/child-support-calculation-standard' },
      { label: '협의이혼 서류 체크리스트', href: '/guide/divorce/uncontested-divorce-document-checklist' },
    ],
  },

];
