export interface RichGuide {
  overview: string;
  topQuestions?: {
    question: string;
    slug: string;
  }[];
  relatedHubs?: {
    domain: string;
    label: string;
    reason: string;
  }[];
  perspectives: {
    label: string;
    emoji: string;
    checks: string[];
  }[];
  preparations: {
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  spokeLinks: {
    title: string;
    slug: string;
  }[];
  spokeCategories?: {
    label: string;
    emoji: string;
    spokes: { title: string; slug: string }[];
  }[];
  caseRefs: {
    scene: string;
    issue: string;
    prep: string;
  }[];
}

export const RICH_GUIDES: Record<string, RichGuide> = {
  fraud: {
    overview:
      '사기죄는 형법 제347조에 따라 사람을 기망하여 재물이나 재산상 이익을 취득한 경우 성립합니다. 투자 사기, 중고거래 사기, 보이스피싱, 대출 사기 등 유형이 다양하며 피해 금액과 수법에 따라 처벌 수위가 크게 달라집니다. 피해자 입장에서는 증거 확보와 신속한 신고가 핵심이고, 혐의를 받는 입장에서는 거래 경위와 의도를 정확히 정리하는 것이 중요합니다. 사기죄의 핵심 쟁점은 편취의 고의, 즉 처음부터 갚을 의사나 능력 없이 재물을 취득했는지 여부입니다. 단순한 채무불이행과 사기의 경계가 불분명한 경우가 많으므로 기망 행위의 구체적 내용을 정리하는 것이 관건입니다. 피해 금액이 5억 원 이상이면 특정경제범죄가중처벌법이 적용되어 3년 이상의 징역에 처해질 수 있으며, 50억 원 이상은 무기 또는 5년 이상의 징역이 가능합니다. 합의 여부, 피해 회복 정도, 전과 유무가 양형에 큰 영향을 미치므로 초기 대응 전략이 사건의 결과를 좌우합니다.',
    topQuestions: [
      { question: '사기 합의하면 형량이 줄어드나요?', slug: 'fraud-penalty-settlement-reduction' },
      { question: '사기죄는 금액별로 처벌이 다른가요?', slug: 'fraud-penalty-settlement-reduction' },
      { question: '고소 전에 먼저 준비해야 할 증거는 뭔가요?', slug: 'fraud-complaint-preparation' },
    ],
    relatedHubs: [
      { domain: 'small-claims', label: '소액재판', reason: '사기 피해금 회수를 위한 민사 절차' },
      { domain: 'defamation', label: '명예훼손', reason: '허위사실 유포와 사기 경계 사건' },
    ],
    perspectives: [
      {
        label: '피해를 입었습니다',
        emoji: '🔴',
        checks: [
          '송금 내역, 계약서, 대화 기록 등 거래 증거를 빠짐없이 확보했는지 확인해보세요',
          '경찰서에 고소장을 제출하고 사건번호를 받았는지 확인해보세요',
          '피해금 회수를 위한 가압류 신청 여부를 검토해보세요',
        ],
      },
      {
        label: '혐의를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '거래 경위와 대금 사용처를 시간순으로 정리해보세요',
          '변제 의사와 능력을 입증할 자료를 준비해보세요',
          '편취의 고의가 없었음을 소명할 증거를 확인해보세요',
        ],
      },
      {
        label: '사실과 다르게 신고되었습니다',
        emoji: '🔵',
        checks: [
          '실제 거래 내용과 고소 내용의 차이점을 구체적으로 정리해보세요',
          '정상적 거래였음을 증명할 계약서와 이행 내역을 확보해보세요',
          '허위고소에 대한 무고죄 반소 가능성을 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 자료 확보',
        desc: '계약서, 송금 내역, 문자 및 카톡 대화, 녹취록 등을 시간순으로 정리해보세요. 디지털 증거는 원본 파일과 스크린샷을 함께 보관하는 것이 안전합니다.',
      },
      {
        title: '고소장 작성 준비',
        desc: '피해 경위를 육하원칙에 따라 정리하고, 피의자 인적사항, 피해 금액, 기망 행위의 구체적 내용을 명시해야 합니다.',
      },
      {
        title: '피해금 회수 방안 검토',
        desc: '가압류 신청, 민사소송, 형사 합의 등 회수 경로를 비교 검토해보세요. 가압류는 빠를수록 효과적입니다.',
      },
      {
        title: '관련 법률 조항 확인',
        desc: '형법 제347조(사기), 특정경제범죄가중처벌법 등 해당 법률과 양형 기준을 미리 파악해보세요.',
      },
      {
        title: '전문가 상담 준비',
        desc: '변호사 상담 시 사건 경위 요약서, 증거 목록, 질문 리스트를 미리 작성하면 효율적으로 상담받을 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '사기죄 고소하면 바로 수사가 시작되나요?',
        answer:
          '고소장 접수 후 담당 수사관이 배정되면 수사가 시작됩니다. 통상 2~4주 내 연락을 받게 되며, 증거가 충분할수록 수사 착수가 빨라집니다.',
      },
      {
        question: '빌려준 돈을 안 갚는 것도 사기인가요?',
        answer:
          '단순 채무불이행은 사기가 아닙니다. 처음부터 갚을 의사나 능력 없이 돈을 빌렸다는 편취의 고의가 입증되어야 사기죄가 성립합니다.',
      },
      {
        question: '사기 피해 합의금은 어느 정도인가요?',
        answer:
          '피해 금액, 피해자 수, 범행 수법에 따라 다릅니다. 일반적으로 피해 원금 이자 수준에서 합의가 이루어지며, 형사 처벌 감경을 위해 그 이상을 제시하기도 합니다.',
      },
      {
        question: '중고거래 사기도 형사고소할 수 있나요?',
        answer:
          '네, 중고거래 사기도 사기죄에 해당합니다. 거래 플랫폼 대화 내역, 송금 기록, 상품 설명 캡처 등이 주요 증거입니다.',
      },
      {
        question: '사기죄 금액별 형량은 어떻게 다른가요?',
        answer:
          '피해 금액과 합의 여부에 따라 다르지만, 초범이고 피해 금액이 크지 않으면 벌금형이나 집행유예가 선고되는 경우가 많습니다.',
      },
      {
        question: '보이스피싱 피해금을 돌려받을 수 있나요?',
        answer:
          '신속히 은행에 지급정지를 요청하면 피해금 반환을 받을 수 있습니다. 전기통신금융사기 피해 방지법에 따라 피해구제 신청도 가능합니다.',
      },
      {
        question: '가압류 신청은 어떻게 하나요?',
        answer:
          '법원에 가압류 신청서를 제출하고 담보금(청구금액의 10~30%)을 공탁하면 됩니다. 상대방 재산을 미리 파악해두면 효과적입니다.',
      },
      {
        question: '사기로 고소당했는데 합의하면 처벌을 피할 수 있나요?',
        answer:
          '피해자와 합의하면 처벌이 크게 감경됩니다. 피해 전액 변제와 합의, 초범인 경우 기소유예나 집행유예를 받을 가능성이 높아집니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '사기 피해 어디부터 시작해야 하나', slug: 'fraud-victim-where-to-start' },
          { title: '사기죄 고소장 쓰기 전에 정리할 것', slug: 'fraud-complaint-preparation' },
          { title: '사기 고소 절차 총정리', slug: 'fraud-complaint-procedure-comprehensive' },
          { title: '경찰 고소 시 핵심증거 5가지', slug: 'fraud-complaint-police-key-evidence-5' },
        ],
      },
      {
        label: '중고거래 사기',
        emoji: '📋',
        spokes: [
          { title: '중고거래 사기 환불 방법', slug: 'secondhand-trade-fraud-refund-method' },
          { title: '중고거래 사기 증거 수집', slug: 'used-market-fraud-evidence' },
          { title: '중고거래 경찰 신고 준비', slug: 'used-market-fraud-police-prep' },
          { title: '온라인 쇼핑 사기 환불', slug: 'online-shopping-fraud-refund' },
        ],
      },
      {
        label: '보이스피싱',
        emoji: '📋',
        spokes: [
          { title: '보이스피싱 즉시 대응 5단계', slug: 'voice-phishing-immediate-5steps' },
          { title: '고령자 보이스피싱 구제', slug: 'fraud-elderly-voice-phishing-recovery' },
          { title: '보이스피싱 피해금 환급', slug: 'voice-phishing-fund-recovery-process' },
          { title: '보이스피싱 공범 방어', slug: 'fraud-voice-phishing-money-mule-defense' },
        ],
      },
      {
        label: '투자/코인/대출 사기',
        emoji: '📋',
        spokes: [
          { title: '투자사기 체크리스트', slug: 'investment-fraud-checklist' },
          { title: '코인 사기 신고 방법', slug: 'fraud-crypto-investment-scam-report' },
          { title: '러그풀 증거 수집', slug: 'fraud-crypto-rug-pull-evidence' },
          { title: '대출 사기 대응 가이드', slug: 'loan-fraud-response-guide' },
        ],
      },
      {
        label: '혐의자/피의자 대응',
        emoji: '📋',
        spokes: [
          { title: '사기 혐의 방어 전략 가이드', slug: 'fraud-accused-defense-strategy-guide' },
          { title: '사기 혐의 대응 방법', slug: 'fraud-accused-response' },
          { title: '사기 혐의 반박 방법', slug: 'fraud-charge-rebuttal' },
          { title: '허위고소 방어 전략', slug: 'fraud-false-accusation-defense' },
        ],
      },
      {
        label: '합의/처벌',
        emoji: '📋',
        spokes: [
          { title: '합의 감경 방법', slug: 'fraud-penalty-settlement-reduction' },
          { title: '합의와 양형 관계', slug: 'fraud-settlement-sentencing-impact' },
          { title: '초범 반성문 작성', slug: 'fraud-first-offense-before-apology-letter' },
          { title: '재범 양형 위험', slug: 'fraud-recidivist-sentencing-risk' },
        ],
      },
      {
        label: '법적 구분/절차',
        emoji: '📋',
        spokes: [
          { title: '사기죄 성립 요건 정리', slug: 'fraud-crime-establishment-requirements' },
          { title: '채무 vs 사기 구분', slug: 'fraud-debt-vs-crime-distinction' },
          { title: '사기죄 공소시효', slug: 'fraud-statute-of-limitations-period' },
          { title: '사기 민사소송 절차', slug: 'fraud-civil-lawsuit-procedure' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '온라인 중고거래로 물건 대금을 입금했으나 물건이 배송되지 않는 상황',
        issue: '판매자와 연락이 두절되어 편취의 고의 입증이 필요한 경우',
        prep: '거래 플랫폼 대화 캡처, 송금 내역서, 판매자 계정 정보를 확보해보세요',
      },
      {
        scene: '지인에게 투자금을 맡겼으나 약속한 수익금은 물론 원금도 돌려받지 못하는 상황',
        issue: '투자 실패인지 사기인지 구별이 필요한 경우',
        prep: '투자 약정서, 수익률 보장 관련 대화 기록, 자금 흐름 추적 자료를 정리해보세요',
      },
    ],
  },

  'sex-crime': {
    overview:
      '성범죄는 형법 및 성폭력범죄의 처벌 등에 관한 특례법에 의해 규율됩니다. 강간, 유사강간, 강제추행, 준강간, 준강제추행 등 유형에 따라 처벌 수위가 크게 다르며, 피해자 보호와 가해자 처벌 모두 엄격한 절차를 따릅니다. 피해자 입장에서는 증거 보전과 신속한 신고가 중요하고, 해바라기센터 등 전문 지원기관을 통해 의료·법률·심리 지원을 받을 수 있습니다. 혐의를 받는 입장에서는 사실관계를 정확히 정리하고 초기 진술 단계부터 법률 조력을 받는 것이 핵심입니다. 성범죄는 친고죄 폐지 이후 피해자 의사와 관계없이 수사가 진행될 수 있으며, 신상정보 등록과 공개, 취업 제한 등 형사 처벌 외의 부가 제재도 따릅니다. 합의 여부는 양형에 영향을 미치지만 공소 취소 사유는 되지 않습니다. 피해자든 피의자든 사건 초기에 전문가의 조력을 받아 체계적으로 대응하는 것이 결과에 큰 영향을 미칩니다.',
    perspectives: [
      {
        label: '피해를 입었습니다',
        emoji: '🔴',
        checks: [
          '해바라기센터(1899-3075)에 연락하여 의료·법률 지원을 받았는지 확인해보세요',
          '피해 직후 증거(CCTV, 문자, 목격자 등)를 보전했는지 확인해보세요',
          '국선변호사 선임 등 피해자 보호 제도를 신청했는지 확인해보세요',
        ],
      },
      {
        label: '혐의를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '사건 당시 상황을 시간순으로 구체적으로 정리해보세요',
          '진술 전 반드시 변호사의 조력을 받을 수 있는지 확인해보세요',
          '상대방과의 관계, 당시 상황에 대한 객관적 증거를 확보해보세요',
        ],
      },
      {
        label: '사실과 다르게 신고되었습니다',
        emoji: '🔵',
        checks: [
          '실제 상황과 신고 내용의 차이를 객관적 증거로 정리해보세요',
          '알리바이나 목격자 진술 등 반박 자료를 확보해보세요',
          '무고죄 반대고소 가능성을 전문가와 상의해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 보전 및 수집',
        desc: 'CCTV 영상, 문자·메신저 대화 기록, 목격자 연락처, 진단서 등을 빠짐없이 확보해보세요. 시간이 지나면 증거가 소멸될 수 있으므로 신속한 조치가 중요합니다.',
      },
      {
        title: '피해자 지원 제도 확인',
        desc: '해바라기센터, 한국성폭력상담소, 법률구조공단 등에서 무료 법률 상담과 의료 지원을 제공합니다. 국선변호사 선임도 신청할 수 있습니다.',
      },
      {
        title: '진술 준비',
        desc: '경찰 조사 전에 피해 또는 사건 경위를 시간순으로 메모해보세요. 진술의 일관성이 수사 결과에 큰 영향을 미칩니다.',
      },
      {
        title: '관련 법률 확인',
        desc: '형법 제297조~제303조, 성폭력범죄의 처벌 등에 관한 특례법의 해당 조항과 양형 기준을 미리 확인해보세요.',
      },
      {
        title: '변호사 선임 검토',
        desc: '피해자는 국선변호사를, 피의자는 사선변호사를 선임하여 수사 초기부터 법률 조력을 받는 것이 유리합니다.',
      },
    ],
    faqs: [
      {
        question: '강제추행의 기준이 정확히 무엇인가요?',
        answer:
          '상대방의 의사에 반하여 폭행·협박을 수단으로 추행하는 행위입니다. 판례는 상대방의 성적 자기결정권을 침해하는 일체의 행위를 추행으로 봅니다.',
      },
      {
        question: '성범죄 피해 신고는 언제까지 할 수 있나요?',
        answer:
          '강간죄의 공소시효는 10년, 13세 미만 피해자는 공소시효가 정지됩니다. DNA 증거가 있는 경우 시효가 연장될 수 있습니다.',
      },
      {
        question: '합의하면 처벌을 피할 수 있나요?',
        answer:
          '성범죄는 친고죄가 아니므로 합의하더라도 공소가 취소되지 않습니다. 다만 합의 여부는 양형에 상당한 영향을 미칩니다.',
      },
      {
        question: '성범죄 전과 기록은 삭제할 수 있나요?',
        answer:
          '형의 실효 등에 관한 법률에 따라 일정 기간 경과 후 전과 기록이 실효됩니다. 다만 신상정보 등록 기간은 별도로 적용됩니다.',
      },
      {
        question: '해바라기센터에서 어떤 도움을 받을 수 있나요?',
        answer:
          '의료 지원(응급 진료, 진단서 발급), 법률 지원(국선변호사 연결, 고소 대리), 심리 상담을 원스톱으로 받을 수 있습니다.',
      },
      {
        question: '무고죄 역고소가 가능한가요?',
        answer:
          '허위사실로 고소한 것이 입증되면 무고죄(형법 제156조)로 역고소할 수 있습니다. 다만 입증 책임이 높으므로 전문가 상담이 필요합니다.',
      },
      {
        question: '성범죄 초범이면 어떤 처벌을 받나요?',
        answer:
          '범행 유형과 피해 정도에 따라 다르지만, 강제추행 초범은 집행유예가 선고되는 경우도 있고, 강간은 초범이라도 실형이 선고될 수 있습니다.',
      },
      {
        question: '신상정보 등록 기간은 얼마나 되나요?',
        answer:
          '유죄 판결 확정 시 20년간 신상정보가 등록되며, 아동·청소년 대상 범죄는 등록 기간이 더 길어질 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '혐의 유형별',
        emoji: '📋',
        spokes: [
          { title: '강제추행 기준', slug: 'forced-molestation-standard' },
          { title: '강제추행 vs 준강제추행', slug: 'assault-vs-quasi-assault-distinction' },
          { title: '음주 동의 문제', slug: 'sex-crime-drunk-consent-issue' },
          { title: '성범죄 처벌 수위', slug: 'sex-crime-penalty-levels' },
        ],
      },
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '성폭력 고소 절차', slug: 'sexual-violence-complaint-process' },
          { title: '고소 필요 서류', slug: 'victim-complaint-required-docs' },
          { title: '강제추행 증거 소송', slug: 'forced-groping-evidence-lawsuit' },
          { title: '직장 내 성폭력', slug: 'workplace-sexual-violence-response' },
        ],
      },
      {
        label: '피의자 대응',
        emoji: '📋',
        spokes: [
          { title: '혐의자 시작', slug: 'accused-where-to-start' },
          { title: '초범 대응', slug: 'sex-crime-first-offense-response' },
          { title: '혐의 시 흔한 실수', slug: 'common-mistakes-when-accused' },
          { title: '추행 혐의 대응', slug: 'groping-accused-response' },
        ],
      },
      {
        label: '조사/증거/진술',
        emoji: '📋',
        spokes: [
          { title: '수사부터 재판', slug: 'sexual-assault-investigation-to-trial' },
          { title: '디지털 증거 타임라인', slug: 'sex-crime-digital-evidence-timeline' },
          { title: '재판 절차', slug: 'sexual-assault-procedure-trial' },
          { title: '국선변호인', slug: 'sexual-assault-public-defender' },
        ],
      },
      {
        label: '합의/처벌/양형',
        emoji: '📋',
        spokes: [
          { title: '합의', slug: 'sex-crime-settlement' },
          { title: '합의 vs 불합의', slug: 'sex-crime-settlement-vs-no-settlement' },
          { title: '공소시효', slug: 'sex-crime-statute-of-limitations' },
          { title: '무죄 판례', slug: 'sexual-assault-acquittal-cases' },
        ],
      },
      {
        label: '무고/허위',
        emoji: '📋',
        spokes: [
          { title: '무고 방어', slug: 'sex-crime-false-accusation-defense' },
          { title: '무고 역고소', slug: 'sex-crime-false-accusation-counter' },
          { title: '직장 허위신고', slug: 'sex-crime-false-charge-workplace' },
          { title: '허위신고 대응', slug: 'false-sexual-assault-report-response' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '회식 자리에서 상사에게 강제추행을 당한 직장인 상황',
        issue: '목격자는 있으나 CCTV가 없어 진술 증거의 신빙성이 쟁점인 경우',
        prep: '당일 문자·메신저 기록, 목격자 진술서, 해바라기센터 진단서를 확보해보세요',
      },
    ],
  },

  assault: {
    overview:
      '폭행죄(형법 제260조)는 사람의 신체에 대한 유형력 행사(때리기, 밀치기, 물건 던지기 등)로 성립하며, 2년 이하의 징역 또는 500만원 이하의 벌금에 처해집니다. 상해죄(형법 제257조)는 폭행으로 인해 신체 기능이 훼손되어 치료가 필요한 경우 성립하며, 7년 이하의 징역 또는 10년 이하의 자격정지에 처해집니다. 쌍방폭행 시 양쪽 모두 처벌 가능하며, 선제 공격 여부와 피해 정도에 따라 처벌 수위가 달라집니다. 폭행죄는 반의사불벌죄로 합의 시 공소 제기가 불가하지만, 상해죄는 반의사불벌죄가 아니므로 합의해도 검찰이 기소할 수 있습니다. 합의금은 진단서 주수, 부상 부위, 치료비를 기준으로 산정되며, 중상해(8주 이상)는 합의해도 기소될 가능성이 높습니다. 피해자는 즉시 진단서를 발급받고 CCTV·녹취·목격자 등 현장 증거를 확보하는 것이 핵심입니다. 피의자는 사실관계를 정리하고 정당방위 해당 여부를 검토해야 합니다. 정당방위가 인정되려면 현재의 부당한 침해에 대한 상당한 이유가 있는 방위 행위여야 하며, 실무상 인정 기준이 매우 엄격합니다.',
    perspectives: [
      {
        label: '피해자입니다',
        emoji: '🔴',
        checks: [
          '진단서를 즉시 발급받고 부상 부위를 사진으로 촬영했는지 확인해보세요',
          '현장 CCTV 보존 요청, 목격자 연락처, 녹취 등 증거를 확보했는지 확인해보세요',
          '경찰에 신고하고 고소장을 제출했는지 확인해보세요',
        ],
      },
      {
        label: '피의자/혐의자입니다',
        emoji: '🟡',
        checks: [
          '사건 경위를 시간순으로 정리하고 사실관계를 명확히 해보세요',
          '정당방위 해당 여부를 객관적으로 확인해보세요',
          '합의 시기와 적정 합의금을 검토해보세요',
        ],
      },
      {
        label: '합의/처벌을 고민합니다',
        emoji: '🔵',
        checks: [
          '합의금 적정선을 진단서 주수와 치료비 기준으로 확인해보세요',
          '합의서 작성 시 처벌불원 의사표시 포함 여부를 확인해보세요',
          '합의 후 형사 감경 효과와 민사 손해배상 관계를 정리해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '진단서 발급',
        desc: '부상 직후 정형외과 또는 응급실에서 진단서를 발급받으세요. 진단서에는 상해 부위, 치료 기간, 향후 치료 계획이 포함되어야 합니다.',
      },
      {
        title: '현장 증거 확보',
        desc: 'CCTV 보존 요청(통상 30일 이내), 현장 사진 촬영, 녹취 파일 보관 등을 신속히 진행해보세요.',
      },
      {
        title: '목격자 연락처 확보',
        desc: '현장에 있었던 목격자의 연락처를 받아두세요. 목격자 진술은 수사와 재판에서 강력한 증거가 됩니다.',
      },
      {
        title: '치료비 영수증 보관',
        desc: '병원비, 약값, 교통비 등 치료 관련 모든 영수증을 보관해보세요. 민사 손해배상 청구 시 중요한 증거가 됩니다.',
      },
      {
        title: '경찰 진술 준비',
        desc: '사건 경위를 육하원칙에 따라 정리하고, 증거 목록을 첨부하여 경찰 진술에 대비해보세요.',
      },
    ],
    faqs: [
      {
        question: '폭행죄와 상해죄의 차이는 무엇인가요?',
        answer:
          '폭행죄는 신체에 유형력을 행사한 경우(때리기, 밀치기), 상해죄는 그로 인해 신체의 건강 상태가 불량하게 변경된 경우(치료 필요) 성립합니다. 진단서가 발급되면 상해죄가 적용될 수 있습니다.',
      },
      {
        question: '쌍방폭행이면 둘 다 처벌받나요?',
        answer:
          '네, 쌍방폭행은 양쪽 모두 처벌 대상이 됩니다. 다만 선제 공격 여부, 피해 정도, 폭행의 경위 등에 따라 처벌 수위가 달라질 수 있습니다.',
      },
      {
        question: '합의금 기준은 어떻게 되나요?',
        answer:
          '단순 폭행은 50~200만원, 2주 이상 상해는 200~500만원, 중상해(8주 이상)는 1,000만원 이상이 일반적이나, 부상 부위·치료비·일실소득 등에 따라 크게 달라집니다.',
      },
      {
        question: '진단서 몇 주부터 기소되나요?',
        answer:
          '명확한 기준은 없지만, 실무상 3주 이상 진단이면 기소 가능성이 높아지고, 8주 이상 중상해는 합의해도 기소될 수 있습니다. 2주 이하는 약식기소(벌금)가 일반적입니다.',
      },
      {
        question: 'CCTV가 없으면 어떻게 하나요?',
        answer:
          '목격자 진술, 녹음 파일, 부상 부위 사진, 진단서 등 다른 증거로 보완할 수 있습니다. 블랙박스 영상도 유력한 증거가 됩니다.',
      },
      {
        question: '정당방위 인정 기준은 무엇인가요?',
        answer:
          '자기 또는 타인의 법익에 대한 현재의 부당한 침해를 방위하기 위한 상당한 이유가 있는 행위여야 합니다. 방위 행위가 공격을 초과하면 과잉방위로 감경 또는 면제됩니다.',
      },
      {
        question: '합의하면 처벌을 안 받나요?',
        answer:
          '폭행죄(반의사불벌죄)는 합의 시 공소 제기가 불가하여 전과가 남지 않습니다. 상해죄는 합의해도 검찰이 기소할 수 있으나, 양형에서 유리하게 작용합니다.',
      },
      {
        question: '민사 손해배상도 별도로 청구할 수 있나요?',
        answer:
          '네, 형사 합의와 별도로 민사소송을 통해 치료비, 위자료, 일실소득 등 손해배상을 청구할 수 있습니다. 형사 합의서에 민사 청구권 포기 조항이 있는지 확인하세요.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '폭행 피해 어디부터 시작해야 하나', slug: 'assault-victim-where-to-start' },
          { title: '폭행 증거 수집 절차', slug: 'assault-evidence-collection-procedure' },
          { title: '폭행 고소장 작성법', slug: 'assault-complaint-writing' },
          { title: '폭행 피해 즉시 증거 확보', slug: 'assault-immediate-evidence-steps' },
        ],
      },
      {
        label: '피의자 대응',
        emoji: '📋',
        spokes: [
          { title: '폭행 피의자 어디부터 시작해야 하나', slug: 'assault-accused-where-to-start' },
          { title: '폭행 혐의 첫 대응', slug: 'assault-charged-first-response' },
          { title: '폭행 혐의 방어 전략', slug: 'assault-accusation-defense' },
          { title: '허위 폭행 신고 방어', slug: 'assault-false-accusation-defense' },
        ],
      },
      {
        label: '합의/처벌',
        emoji: '📋',
        spokes: [
          { title: '폭행 합의금 가이드', slug: 'assault-settlement-amount-guide' },
          { title: '폭행 합의금 적정 기준', slug: 'assault-settlement-amount-standard' },
          { title: '폭행 초범 처벌 수위', slug: 'assault-first-offense-penalty' },
          { title: '가해자가 합의를 거부할 때', slug: 'offender-refuses-settlement' },
        ],
      },
      {
        label: '폭행 유형',
        emoji: '📋',
        spokes: [
          { title: '폭행죄와 상해죄 차이점', slug: 'assault-vs-injury-penalties' },
          { title: '상해죄 처벌 수위', slug: 'injury-vs-assault-penalty' },
          { title: '쌍방폭행 vs 정당방위 구분', slug: 'mutual-assault-self-defense-distinction' },
          { title: '재범 가중 처벌', slug: 'assault-repeat-offense-escalation' },
        ],
      },
      {
        label: '정당방위',
        emoji: '📋',
        spokes: [
          { title: '정당방위 인정 기준', slug: 'self-defense-criteria' },
          { title: '정당방위 판례 분석', slug: 'self-defense-case-analysis' },
          { title: '정당방위 증거 요건', slug: 'self-defense-evidence-requirements' },
        ],
      },
      {
        label: '증거/진단',
        emoji: '📋',
        spokes: [
          { title: '폭행 증거 체크리스트', slug: 'assault-evidence-checklist' },
          { title: '치료비 타임라인 정리', slug: 'assault-medical-cost-timeline' },
          { title: '과장 진단 대응 방법', slug: 'assault-exaggerated-injury-claim' },
          { title: '형사 vs 민사 청구 비교', slug: 'assault-criminal-vs-civil-claim' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '술자리에서 시비가 붙어 상대방에게 맞아 전치 2주 진단을 받은 상황',
        issue: '상대방이 먼저 때렸으나 쌍방폭행으로 처리될 가능성이 있는 경우',
        prep: '현장 CCTV 보존 요청, 진단서 발급, 목격자 연락처를 확보하여 선제 공격자를 특정해보세요',
      },
      {
        scene: '직장 동료에게 업무 중 폭행을 당하여 상해 진단을 받은 상황',
        issue: '직장 내 폭행으로 형사고소와 근로기준법상 직장 내 괴롭힘 신고를 병행해야 하는 경우',
        prep: '진단서 발급, 직장 내 CCTV·목격자 확보, 고용노동부 진정과 경찰 고소를 병행하여 진행해보세요',
      },
    ],
  },

  dui: {
    overview:
      '음주운전은 도로교통법 제44조 위반으로, 혈중알코올농도 0.03% 이상이면 처벌 대상입니다. 술자리 후 "괜찮겠지" 하고 핸들을 잡았다가 인생이 바뀌는 분들이 정말 많습니다. 2019년 윤창호법 시행 이후 처벌이 대폭 강화되었고, 이제는 소량 음주도 절대 안전하지 않습니다. 혈중알코올농도 0.03~0.08%는 면허정지와 벌금, 0.08~0.2%는 면허 취소에 1년 이하 징역 또는 500만원 이하 벌금, 0.2% 이상이면 2~5년 징역 또는 1천~2천만원 벌금에 처해집니다. 측정을 거부하면 오히려 더 무거운 처벌(1~5년 징역 또는 500~2천만원 벌금)을 받게 되니 절대 거부하면 안 됩니다. 재범은 가중처벌되어 2~5년 징역이 적용되고, 음주 상태에서 사고를 내면 위험운전치상(1~15년) 또는 치사(3년 이상~무기징역)까지 갈 수 있습니다. 면허 취소 후 결격기간도 만만치 않아서 1회 위반 시 1~2년, 2회 2~3년, 3회는 3~5년 동안 면허를 다시 딸 수 없습니다. 적발 직후 어떻게 대응하느냐가 이후 처벌 수위에 큰 영향을 미치므로, 당황하더라도 침착하게 상황을 정리하고 전문가 도움을 받는 것이 중요합니다.',
    topQuestions: [
      { question: '음주운전 초범인데 벌금이 얼마인가요?', slug: 'dui-first-offense-penalty' },
      { question: '음주운전 탄원서는 어떻게 쓰나요?', slug: 'dui-leniency-petition-documents' },
      { question: '면허취소 행정심판은 어떻게 하나요?', slug: 'dui-license-revocation-appeal' },
    ],
    relatedHubs: [
      { domain: 'traffic-accident', label: '교통사고', reason: '음주 사고 시 보상·합의 절차' },
      { domain: 'assault', label: '폭행/상해', reason: '음주 상태 폭행 사건 병합 대응' },
    ],
    perspectives: [
      {
        label: '적발 직후입니다',
        emoji: '🔴',
        checks: [
          '혈중알코올농도 수치를 정확히 확인해보세요',
          '측정 방식(호흡/혈액)을 확인해보세요',
          '사고 동반 여부를 확인해보세요',
        ],
      },
      {
        label: '처벌/면허가 걱정됩니다',
        emoji: '🟡',
        checks: [
          '초범/재범 여부를 확인해보세요',
          '벌금/징역 예상 범위를 확인해보세요',
          '면허 결격기간을 확인해보세요',
        ],
      },
      {
        label: '재범/사고/측정거부로 무겁습니다',
        emoji: '🔵',
        checks: [
          '가중처벌 적용 여부를 확인해보세요',
          '구속 가능성을 확인해보세요',
          '변호인 선임을 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '음주 경위 기록',
        desc: '음주 시간, 장소, 음주량, 마지막으로 술을 마신 시각을 정확히 기록해보세요. 이 기록이 위드마크 공식 적용이나 양형 판단에 중요한 근거가 됩니다.',
      },
      {
        title: '측정 결과지 확인',
        desc: '호흡 측정인지 혈액 측정인지, 정확한 수치가 얼마인지 확인해보세요. 측정 방식과 수치에 따라 처벌 수위와 면허 처분이 크게 달라집니다.',
      },
      {
        title: '반성문/탄원서 작성',
        desc: '본인의 반성문과 함께 가족, 직장 동료 등의 탄원서를 준비해보세요. 진심 어린 반성과 주변의 탄원은 양형에서 유리한 정상참작 사유가 됩니다.',
      },
      {
        title: '면허 행정심판 준비',
        desc: '면허정지 또는 취소 처분을 받았다면 60일 이내에 행정심판을 청구할 수 있습니다. 생계형 운전자인 경우 감경 사유가 될 수 있으니 관련 서류를 준비해보세요.',
      },
      {
        title: '변호사 상담 준비',
        desc: '재범이거나 사고가 동반된 경우 반드시 변호사 상담을 받아보세요. 적발 경위, 수치, 전과 이력을 정리해 가면 효율적인 상담이 가능합니다.',
      },
    ],
    faqs: [
      {
        question: '음주운전 초범 벌금은 얼마인가요?',
        answer:
          '혈중알코올농도에 따라 다릅니다. 0.03~0.08%는 벌금 200~300만원, 0.08~0.2%는 벌금 500~1,000만원 또는 징역이 가능하고, 0.2% 이상은 실형 가능성이 있습니다. 초범이라도 수치가 높으면 징역형이 선고될 수 있습니다.',
      },
      {
        question: '음주운전 면허취소 행정심판은 어떻게 하나요?',
        answer:
          '음주운전 1회 적발 시 면허 취소 후 결격기간 1~2년, 2회는 2~3년, 3회 이상은 3~5년입니다. 결격기간이 끝나면 학과·기능·도로 시험을 처음부터 다시 치러야 합니다.',
      },
      {
        question: '측정 거부하면 더 불리한가요?',
        answer:
          '네, 측정 거부는 가장 높은 수준의 처벌(1~5년 징역 또는 500~2,000만원 벌금)이 적용되고 면허도 즉시 취소됩니다. 거부한다고 유리해지는 것은 전혀 없습니다.',
      },
      {
        question: '다음 날 아침 음주운전도 처벌되나요?',
        answer:
          '네, 전날 마신 술이 체내에 남아 혈중알코올농도 0.03% 이상이면 처벌 대상입니다. 음주량과 체질에 따라 다르지만, 과음 후 다음 날 아침까지 알코올이 분해되지 않는 경우가 많습니다.',
      },
      {
        question: '음주 상태에서 사고를 내면 어떻게 되나요?',
        answer:
          '위험운전치상(1~15년 징역)이나 치사(3년 이상~무기징역)가 적용될 수 있습니다. 단순 음주운전보다 형량이 훨씬 무겁고, 합의 여부가 양형에 큰 영향을 미칩니다.',
      },
      {
        question: '음주운전 선처를 위한 탄원서는 어떻게 쓰나요?',
        answer:
          '네, 진심 어린 반성문과 가족·직장의 탄원서는 양형에서 유리한 정상참작 사유입니다. 알코올 치료 프로그램 이수, 봉사활동 확인서 등도 함께 준비하면 효과적입니다.',
      },
      {
        question: '재범은 무조건 실형인가요?',
        answer:
          '재범은 가중처벌(2~5년 징역)이 적용되어 실형 가능성이 높지만, 무조건은 아닙니다. 수치, 사고 여부, 반성 정도, 합의 여부 등에 따라 집행유예가 나올 수도 있습니다.',
      },
      {
        question: '음주운전 벌금 vs 징역 기준은 무엇인가요?',
        answer:
          '혈중알코올농도, 초범/재범 여부, 사고 동반 여부가 핵심 기준입니다. 일반적으로 0.08% 미만 초범은 벌금, 0.2% 이상이나 재범은 징역(실형 또는 집행유예)이 선고되는 경우가 많습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '적발 직후 대응',
        emoji: '📋',
        spokes: [
          { title: '음주운전 적발 직후 어디부터 시작해야 하나', slug: 'dui-caught-where-to-start' },
          { title: '음주운전 형사절차 개요', slug: 'dui-criminal-procedure-overview' },
          { title: '음주운전 조사 흔한 실수', slug: 'dui-investigation-common-mistakes' },
          { title: '다음날 아침 음주운전 적발 대응법', slug: 'dui-morning-after-detection' },
        ],
      },
      {
        label: '처벌/벌금',
        emoji: '📋',
        spokes: [
          { title: '음주운전 초범 처벌 수준과 대응', slug: 'dui-first-offense' },
          { title: '혈중알코올농도별 처벌 기준', slug: 'dui-bac-penalty-by-level' },
          { title: '음주운전 벌금 vs 징역 비교', slug: 'dui-fine-vs-imprisonment-comparison' },
          { title: '음주운전 재범 처벌과 대응', slug: 'dui-second-offense-penalty' },
        ],
      },
      {
        label: '면허',
        emoji: '📋',
        spokes: [
          { title: '음주운전 면허 취소 기준과 대응', slug: 'dui-license-revocation' },
          { title: '면허 취소 불복 행정심판', slug: 'dui-license-revocation-appeal' },
          { title: '면허 행정처분 절차 총정리', slug: 'dui-administrative-license-procedure' },
          { title: '시동잠금장치 설치 가이드', slug: 'dui-ignition-interlock-guide' },
        ],
      },
      {
        label: '측정거부',
        emoji: '📋',
        spokes: [
          { title: '음주측정 거부 시 처벌과 대응', slug: 'dui-breathalyzer-refusal' },
          { title: '측정거부 결과 총정리', slug: 'breathalyzer-refusal-consequences' },
          { title: '측정거부 처벌 대응 전략', slug: 'breathalyzer-refusal-penalty-response' },
          { title: '음주측정 오류 대응법', slug: 'breathalyzer-error-response' },
        ],
      },
      {
        label: '사고 동반',
        emoji: '📋',
        spokes: [
          { title: '음주 교통사고 대응법', slug: 'dui-traffic-accident-response' },
          { title: '음주사고 피해자 과실 분쟁', slug: 'dui-accident-victim-fault-dispute' },
          { title: '음주사고 보행자 피해 보상', slug: 'dui-pedestrian-victim-compensation' },
          { title: '음주사고 피해 보상 체크리스트', slug: 'dui-victim-compensation-checklist' },
        ],
      },
      {
        label: '감경/합의',
        emoji: '📋',
        spokes: [
          { title: '탄원서 작성 가이드', slug: 'dui-leniency-petition-documents' },
          { title: '음주운전 합의 방법과 효과', slug: 'dui-settlement' },
          { title: '재범 실형 회피 전략', slug: 'dui-second-offense-prison-avoidance' },
          { title: '수치별 처벌 참고표', slug: 'dui-bac-penalty-reference-table' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '회식 후 혈중알코올농도 0.1%로 적발된 초범 직장인',
        issue: '면허 취소 기준을 넘었고, 벌금형과 징역형 사이에서 양형이 결정되는 상황',
        prep: '반성문 작성, 알코올 치료 프로그램 등록, 면허 행정심판 기한(60일)을 확인해보세요',
      },
      {
        scene: '음주운전 재범으로 사고까지 동반된 경우',
        issue: '가중처벌과 위험운전치상이 동시 적용되어 실형 가능성이 높은 상황',
        prep: '피해자 합의, 변호인 선임, 치료 프로그램 이수 등 양형 자료를 최대한 준비해보세요',
      },
      {
        scene: '전날 과음 후 다음 날 아침 출근길에 적발된 상황',
        issue: '본인은 술이 깼다고 생각했지만 혈중알코올농도 0.05%로 처벌 대상이 된 경우',
        prep: '음주 시간과 양을 정확히 기록하고, 위드마크 공식 적용 가능성을 변호사와 상담해보세요',
      },
    ],
  },

  divorce: {
    overview:
      '이혼은 크게 협의이혼과 재판이혼 두 가지 경로로 나뉘며, 절차와 소요 기간이 상당히 다릅니다. 협의이혼은 양측이 합의하여 법원의 의사확인을 거치는 절차이고, 재판이혼은 민법 제840조에서 정한 사유(부정행위, 악의의 유기, 혼인을 계속하기 어려운 중대한 사유 등)가 있을 때 소를 제기합니다. 재산분할은 혼인 중 형성한 공동재산에 대해 기여도에 따라 나누며, 통상 30~50%가 인정됩니다. 양육비는 양육비 산정기준표에 따라 자녀의 연령, 부모의 소득을 기준으로 산정됩니다. 유책배우자도 재산분할 청구는 가능하지만 위자료 청구는 제한됩니다. 가정폭력이 있는 경우 접근금지 가처분, 피해자 보호시설 등 긴급 보호 조치를 우선 받을 수 있습니다. 이혼 절차 전에 재산 목록, 소득 자료, 자녀 양육 계획을 체계적으로 정리하는 것이 유리한 결과로 이어집니다.',
    topQuestions: [
      { question: '협의이혼 서류는 뭐가 필요한가요?', slug: 'consensual-divorce-timeline-docs' },
      { question: '재산분할과 양육비는 어떻게 다른가요?', slug: 'child-support-calculation-standard' },
      { question: '재판이혼은 어떤 경우에 하나요?', slug: 'consensual-vs-trial-divorce' },
    ],
    relatedHubs: [
      { domain: 'child-support', label: '양육비', reason: '이혼 후 자녀 양육비 산정·청구' },
      { domain: 'inheritance', label: '상속', reason: '이혼과 상속 재산의 교차 문제' },
    ],
    perspectives: [
      {
        label: '이혼을 준비하고 있습니다',
        emoji: '🔴',
        checks: [
          '협의이혼과 재판이혼 중 어떤 절차가 적합한지 검토해보세요',
          '혼인 중 형성한 재산(부동산, 예금, 보험, 연금 등)의 목록을 정리해보세요',
          '자녀 양육 계획(양육자, 양육비, 면접교섭)을 미리 구상해보세요',
        ],
      },
      {
        label: '상대방이 이혼을 요구합니다',
        emoji: '🟡',
        checks: [
          '이혼 사유의 정당성과 유책 여부를 확인해보세요',
          '재산분할에서 불리하지 않도록 재산 현황을 파악해보세요',
          '양육권 확보를 위한 준비(양육 환경, 소득 증빙)를 점검해보세요',
        ],
      },
      {
        label: '가정폭력으로 긴급 보호가 필요합니다',
        emoji: '🔵',
        checks: [
          '경찰 112 신고 후 접근금지 임시조치를 요청했는지 확인해보세요',
          '여성긴급전화 1366으로 피해자 보호시설을 안내받았는지 확인해보세요',
          '피해 증거(진단서, 사진, 녹음)를 확보해 안전한 곳에 보관해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '재산 현황 정리',
        desc: '부동산, 예금, 보험, 퇴직금, 국민연금 등 혼인 중 취득한 재산을 목록으로 정리해보세요. 상대방 명의 재산도 파악이 필요합니다.',
      },
      {
        title: '소득 및 지출 정리',
        desc: '양측의 소득(근로소득, 사업소득) 자료를 확보하고, 자녀 양육비 산정을 위한 월 지출 내역을 정리해보세요.',
      },
      {
        title: '자녀 양육 계획 수립',
        desc: '양육자 지정, 양육비 금액, 면접교섭 방법을 구체적으로 계획해보세요. 법원은 자녀의 복리를 최우선으로 판단합니다.',
      },
      {
        title: '이혼 사유 증거 확보',
        desc: '재판이혼의 경우 부정행위, 폭력, 유기 등의 증거(문자, 사진, 녹음, 진단서)를 체계적으로 정리해보세요.',
      },
      {
        title: '법률 상담 준비',
        desc: '재산 목록, 혼인 기간, 자녀 현황, 이혼 사유를 요약하여 변호사 상담을 받아보세요. 법률구조공단의 무료 상담도 이용 가능합니다.',
      },
    ],
    faqs: [
      {
        question: '협의이혼 절차는 어떻게 진행되나요?',
        answer:
          '협의이혼은 양측 합의로 법원 의사확인 후 이혼하는 것이고, 재판이혼은 법정 사유가 있을 때 소를 제기하여 판결로 이혼하는 것입니다. 숙려 기간은 양육할 자녀가 있으면 3개월, 없으면 1개월입니다.',
      },
      {
        question: '재산분할 비율은 어떻게 정해지나요?',
        answer:
          '혼인 중 형성한 재산에 대해 기여도에 따라 나누며, 실무상 30~50%가 인정됩니다. 맞벌이 부부는 50%에 가까운 비율이 인정되는 경우가 많습니다.',
      },
      {
        question: '양육비는 얼마를 받을 수 있나요?',
        answer:
          '양육비 산정기준표에 따라 부모 합산 소득과 자녀 연령을 기준으로 산정합니다. 통상 자녀 1인당 월 50~150만원 수준이며, 소득에 따라 달라집니다.',
      },
      {
        question: '유책배우자도 재산분할을 받을 수 있나요?',
        answer:
          '네, 유책배우자도 재산분할 청구가 가능합니다. 재산분할은 혼인 중 기여도에 따른 것으로 이혼 책임과는 별개입니다. 다만 위자료 청구는 제한됩니다.',
      },
      {
        question: '이혼 후 양육비를 안 주면 어떻게 하나요?',
        answer:
          '가정법원에 이행명령을 신청하고, 불이행 시 감치(30일 이내 감금), 재산 강제집행을 할 수 있습니다. 양육비이행관리원을 통해 추적도 가능합니다.',
      },
      {
        question: '이혼 재산분할 청구 기한이 있나요?',
        answer:
          '이혼 후 2년 이내에 재산분할 청구를 해야 합니다. 이 기한을 넘기면 청구권이 소멸하므로 반드시 기한을 확인해보세요.',
      },
      {
        question: '국민연금도 분할 대상인가요?',
        answer:
          '네, 혼인 기간 중 납부한 국민연금은 분할연금 대상입니다. 혼인 기간이 5년 이상이고, 배우자가 노령연금 수급권이 있으면 분할 청구가 가능합니다.',
      },
      {
        question: '이혼 소송 비용은 얼마나 드나요?',
        answer:
          '인지대와 송달료 등 소송 비용은 약 20~50만원이며, 변호사 선임 비용은 별도입니다. 재산분할 청구 금액에 따라 인지대가 달라집니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '이혼 유형/절차',
        emoji: '📋',
        spokes: [
          { title: '이혼 어디서부터 시작해야 하나', slug: 'decided-divorce-where-to-begin' },
          { title: '협의이혼 절차와 소요 기간', slug: 'consensual-divorce-process' },
          { title: '재판이혼 소송 절차', slug: 'trial-divorce-lawsuit-procedure' },
          { title: '협의이혼 vs 재판이혼 비교', slug: 'consensual-vs-trial-divorce' },
        ],
      },
      {
        label: '재산분할',
        emoji: '📋',
        spokes: [
          { title: '재산분할 기준과 범위 총정리', slug: 'divorce-property-division-comprehensive' },
          { title: '분할 비율 핵심 요소', slug: 'property-division-ratio-key-factors' },
          { title: '소득 은닉 배우자 재산 추적', slug: 'divorce-hidden-income-asset-investigation' },
          { title: '연금 분할 방법', slug: 'divorce-pension-division-method' },
        ],
      },
      {
        label: '위자료',
        emoji: '📋',
        spokes: [
          { title: '위자료 산정 기준과 평균 금액', slug: 'divorce-alimony-calculation-standard' },
          { title: '배우자 외도 대응', slug: 'spouse-affair-divorce-response' },
          { title: '제3자 상대 손해배상 청구', slug: 'divorce-third-party-affair-claim' },
          { title: '쌍방 귀책 외도 청구', slug: 'divorce-both-fault-affair-third-party-claim' },
        ],
      },
      {
        label: '양육권/양육비',
        emoji: '📋',
        spokes: [
          { title: '양육비 산정 기준', slug: 'child-support-calculation-standard' },
          { title: '청소년 자녀 양육권', slug: 'divorce-child-custody-teen-preference' },
          { title: '아버지 양육권 전략', slug: 'divorce-child-custody-father-strategy' },
          { title: '양육비 이행확보 방법', slug: 'divorce-child-support-enforcement-guide' },
          { title: '양육비 증액 청구', slug: 'divorce-child-support-increase' },
        ],
      },
      {
        label: '외도/증거',
        emoji: '📋',
        spokes: [
          { title: '외도 증거 허용성', slug: 'divorce-affair-evidence-admissibility' },
          { title: '은닉재산 발견 방법', slug: 'divorce-hidden-asset-discovery' },
          { title: '재산처분 사유와 대응', slug: 'divorce-asset-disposal-grounds' },
        ],
      },
      {
        label: '가정폭력/보호',
        emoji: '📋',
        spokes: [
          { title: '가정폭력 긴급 보호', slug: 'divorce-domestic-violence-emergency-shelter' },
          { title: '가정폭력 이혼 절차', slug: 'domestic-violence-divorce-process' },
          { title: '접근금지 보호', slug: 'divorce-restraining-order-protection' },
        ],
      },
      {
        label: '협의이혼 서류',
        emoji: '📋',
        spokes: [
          { title: '협의이혼 필요 서류', slug: 'consensual-divorce-required-documents' },
          { title: '서류 체크리스트', slug: 'uncontested-divorce-document-checklist' },
          { title: '숙려기간 단축 사유', slug: 'consensual-divorce-cooling-period-reduction' },
        ],
      },
      {
        label: '이혼 후 문제',
        emoji: '📋',
        spokes: [
          { title: '면접교섭 거부 대응', slug: 'divorce-visitation-denied-response' },
          { title: '과거 양육비 소급 청구', slug: 'divorce-past-child-support-claim-years-later' },
          { title: '별거 중 생활비 청구', slug: 'separation-living-expenses-claim-possible' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '10년간 전업주부로 지내다 배우자의 외도를 발견하고 이혼을 결심한 상황',
        issue: '재산분할 비율과 위자료 산정, 자녀 양육권 확보가 쟁점인 경우',
        prep: '외도 증거(문자, 사진), 혼인 중 취득 재산 목록, 자녀 양육 환경 자료를 정리해보세요',
      },
      {
        scene: '상대방이 협의이혼을 거부하며 재산분할에 동의하지 않는 상황',
        issue: '재판이혼 사유 입증과 재산 은닉 방지가 필요한 경우',
        prep: '상대방 재산 조회(금융거래정보 제출명령), 이혼 사유 증거를 확보해보세요',
      },
    ],
  },

  defamation: {
    overview:
      '명예훼손은 형법 제307조에 따라 공연히 사실 또는 허위사실을 적시하여 사람의 명예를 훼손하는 범죄입니다. 사실적시 명예훼손은 2년 이하의 징역이나 500만 원 이하의 벌금, 허위사실적시 명예훼손은 5년 이하의 징역이나 1천만 원 이하의 벌금에 처해집니다. 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조에 의해 온라인 명예훼손은 가중처벌되어 사실적시 3년 이하, 허위사실적시 7년 이하의 징역이 가능합니다. 모욕죄는 형법 제311조에 따라 1년 이하의 징역이나 200만 원 이하의 벌금에 처해집니다. 명예훼손은 반의사불벌죄로, 피해자가 처벌을 원하지 않으면 처벌할 수 없습니다. 사실을 말해도 명예훼손이 성립할 수 있으나, 형법 제310조에 따라 오로지 공공의 이익에 관한 때에는 위법성이 조각됩니다. 대법원 2022다242649 판결에서도 허위사실 적시와 공익 항변의 한계를 명확히 하였습니다. 온라인 명예훼손은 확산 속도가 빠르므로 게시물 캡처와 임시조치 신청을 우선하는 것이 중요합니다. 피해자는 형사고소와 민사 손해배상 청구를 병행할 수 있습니다.',
    topQuestions: [
      { question: '명예훼손으로 고소당했을 때 어떻게 대응하나요?', slug: 'truth-still-defamation-reason' },
      { question: '사실인데도 명예훼손이 되나요?', slug: 'truth-still-defamation-reason' },
      { question: '인터넷 악플 고소 절차는 어떻게 되나요?', slug: 'defamation-complaint-prep' },
    ],
    relatedHubs: [
      { domain: 'stalking', label: '스토킹', reason: '반복적 메시지가 명예훼손+스토킹 병합 사건' },
      { domain: 'fraud', label: '사기', reason: '허위사실 유포 관련 사기·명예훼손 경합' },
    ],
    perspectives: [
      {
        label: '내가 피해자인 경우입니다',
        emoji: '🔴',
        checks: [
          '게시물 캡처(URL, 작성 시간 포함)와 증거 보전을 완료했는지 확인해보세요',
          '포털·플랫폼에 임시조치(게시물 삭제 또는 접근 차단)를 신청했는지 확인해보세요',
          '형사고소장 작성과 민사 손해배상 청구를 병행할지 검토해보세요',
        ],
      },
      {
        label: '내가 글이나 댓글로 문제가 된 경우입니다',
        emoji: '🟡',
        checks: [
          '표현의 맥락과 의도를 정리하고, 사실 적시인지 의견 표명인지 구분해보세요',
          '공공의 이익을 위한 목적이었음을 소명할 자료를 준비해보세요',
          '피해자와의 합의 가능성과 합의금 수준을 검토해보세요',
        ],
      },
      {
        label: '삭제, 합의, 고소를 고민하는 경우입니다',
        emoji: '🔵',
        checks: [
          '게시물 삭제 요청과 형사고소 중 어느 것이 우선인지 판단해보세요',
          '합의금 기준(피해 정도, 확산 범위, 고의성)을 파악해보세요',
          '형사고소와 민사 손해배상 병행 시 절차와 비용을 비교해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '게시물 스크린샷 확보',
        desc: 'URL, 작성 시간, 작성자 정보가 모두 보이도록 게시물 전체를 캡처해보세요. 삭제 전에 증거를 확보하는 것이 가장 중요합니다.',
      },
      {
        title: '작성자 특정(IP 추적)',
        desc: '익명 게시물인 경우 수사기관을 통한 IP 추적이나 정보통신서비스 제공자에 대한 정보제공 청구로 작성자를 특정할 수 있습니다.',
      },
      {
        title: '피해 내용 정리',
        desc: '명예훼손의 구체적 내용(사실적시인지 허위사실인지), 확산 범위, 피해 정도(정신적·경제적 손해)를 정리해보세요.',
      },
      {
        title: '고소장 작성',
        desc: '피해 경위를 육하원칙에 따라 정리하고, 적시된 사실의 내용, 공연성, 명예훼손의 고의를 구체적으로 기재해보세요.',
      },
      {
        title: '민사 손해배상 청구 검토',
        desc: '형사고소와 별도로 민사 손해배상(위자료) 청구가 가능합니다. 피해 규모에 따라 500만~3,000만 원 수준의 위자료가 인정되는 경우가 많습니다.',
      },
    ],
    faqs: [
      {
        question: '명예훼손으로 고소당했을 때 어떻게 대응하나요?',
        answer:
          '사실을 말해도 공연히 타인의 명예를 훼손하면 형법 제307조 제1항에 의해 처벌됩니다. 다만 형법 제310조에 따라 오로지 공공의 이익에 관한 때에는 위법성이 조각됩니다.',
      },
      {
        question: '명예훼손과 모욕은 어떻게 다른가요?',
        answer:
          '명예훼손은 구체적 사실을 적시하여 명예를 훼손하는 것이고, 모욕은 사실 적시 없이 경멸적 표현으로 사회적 평가를 저하시키는 것입니다. 모욕죄는 1년 이하 징역 또는 200만 원 이하 벌금입니다.',
      },
      {
        question: '온라인 게시물은 어떻게 삭제하나요?',
        answer:
          '포털·플랫폼에 임시조치(정보통신망법 제44조의2)를 신청하면 30일간 게시물 접근이 차단됩니다. 방송통신심의위원회에 심의를 요청할 수도 있습니다.',
      },
      {
        question: '합의금은 보통 얼마인가요?',
        answer:
          '명예훼손 합의금은 피해 정도, 확산 범위, 고의성, 가해자의 자력 등에 따라 다릅니다. 일반적으로 300만~2,000만 원 선이며, 온라인 확산이 심한 경우 더 높아질 수 있습니다.',
      },
      {
        question: '단톡방에서도 명예훼손이 성립하나요?',
        answer:
          '단체채팅방도 불특정 또는 다수가 인식할 수 있는 상태이므로 공연성이 인정될 수 있습니다. 참여자 수, 전파 가능성 등을 종합하여 판단합니다.',
      },
      {
        question: '반의사불벌죄란 무엇인가요?',
        answer:
          '피해자가 처벌을 원하지 않는다는 의사를 표시하면 처벌할 수 없는 범죄입니다. 명예훼손죄와 모욕죄가 대표적이며, 합의 후 처벌불원서를 제출하면 공소가 기각됩니다.',
      },
      {
        question: '민사 손해배상은 얼마나 받을 수 있나요?',
        answer:
          '명예훼손으로 인한 위자료는 통상 300만~3,000만 원 수준이며, 피해의 정도, 확산 범위, 가해자의 고의·과실 정도에 따라 달라집니다. 재산상 손해가 있으면 별도 청구도 가능합니다.',
      },
      {
        question: '무고로 역고소할 수 있나요?',
        answer:
          '상대방이 허위 사실로 고소한 경우 무고죄(형법 제156조)로 역고소할 수 있습니다. 무고죄는 10년 이하의 징역 또는 1,500만 원 이하의 벌금에 처해집니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '명예훼손 피해자 어디서부터 시작할까', slug: 'defamation-victim-where-to-start' },
          { title: '온라인 명예훼손 고소 증거 확보법', slug: 'online-defamation-complaint-evidence' },
          { title: '명예훼손 고소장 작성 가이드', slug: 'defamation-complaint-writing-guide' },
          { title: '익명 게시자 신원 특정 방법', slug: 'anonymous-poster-identification' },
        ],
      },
      {
        label: '피의자/혐의자 대응',
        emoji: '📋',
        spokes: [
          { title: '명예훼손 혐의자 어디서부터 시작할까', slug: 'defamation-accused-where-to-start' },
          { title: '명예훼손 방어 전략 총정리', slug: 'defamation-accused-defense-strategy' },
          { title: '사실적시 명예훼손 혐의 대응법', slug: 'truth-defamation-accused-response' },
          { title: '공익 항변으로 위법성 조각 받는 법', slug: 'public-interest-defamation-defense' },
        ],
      },
      {
        label: '명예훼손 성립 요건',
        emoji: '📋',
        spokes: [
          { title: '명예훼손 성립 요건 체크리스트', slug: 'defamation-requirements-checklist' },
          { title: '사실적시 vs 허위사실 명예훼손 차이', slug: 'fact-vs-false-defamation' },
          { title: '사실이어도 유죄가 되는 경우', slug: 'defamation-truth-still-guilty' },
          { title: '모욕죄 성립 요건과 처벌 수위', slug: 'online-insult-lawsuit-penalty' },
        ],
      },
      {
        label: '합의/처벌',
        emoji: '📋',
        spokes: [
          { title: '명예훼손 합의금 기준과 절차', slug: 'defamation-settlement-amount-guide' },
          { title: '명예훼손 손해배상 금액 기준', slug: 'defamation-damages-amount-standard' },
          { title: '합의와 처벌 감경 효과', slug: 'defamation-penalty-settlement-reduction' },
        ],
      },
      {
        label: '온라인 특수',
        emoji: '📋',
        spokes: [
          { title: '온라인 명예훼손 대응 가이드', slug: 'online-defamation-response' },
          { title: '온라인 명예훼손 소송 절차', slug: 'online-defamation-lawsuit-process' },
          { title: '직장 내 명예훼손 대응법', slug: 'workplace-defamation-by-colleague' },
          { title: '회사 리뷰 명예훼손 대응', slug: 'defamation-employer-review-response' },
        ],
      },
      {
        label: '역고소/무고',
        emoji: '📋',
        spokes: [
          { title: '명예훼손 역고소와 허위고소 대응', slug: 'defamation-reverse-false-accusation' },
          { title: '이웃 간 허위사실 유포 대응', slug: 'defamation-false-accusation-neighbor' },
          { title: '정당한 비판과 명예훼손의 경계', slug: 'legitimate-criticism-prosecution' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '온라인 플랫폼에서 허위사실이 담긴 영상이 반복 게시되어 명예가 훼손된 상황',
        issue: '정보통신망법 위반(명예훼손)의 성립 요건과 비방 목적 인정 여부가 쟁점인 경우',
        prep: '게시물 URL과 스크린샷, 허위사실 입증 자료, 확산 범위 증빙을 확보하여 형사고소와 임시조치를 동시에 진행해보세요',
      },
      {
        scene: '상대방이 사실을 적시하여 명예를 훼손했으나 공공의 이익을 주장하는 상황',
        issue: '형법 제310조 공익 항변의 인정 범위와 위법성 조각 여부가 쟁점인 경우',
        prep: '적시된 사실의 진위, 표현의 맥락, 공익 목적 여부를 정리하고 합의 또는 고소 여부를 판단해보세요',
      },
      {
        scene: '익명 게시판에서 사실과 다른 내용으로 비방당하여 작성자를 특정하려는 상황',
        issue: '익명 작성자의 IP 추적과 신원 특정 절차, 허위사실적시 명예훼손 입증이 쟁점인 경우',
        prep: '게시물 증거 보전 후 수사기관에 고소하여 IP 추적을 요청하거나, 정보통신서비스 제공자에게 정보제공 청구를 진행해보세요',
      },
    ],
  },

  'jeonse-fraud': {
    overview:
      '전세사기는 임대인이 보증금을 편취할 목적으로 허위 정보를 제공하거나, 다수의 세입자에게 과도한 보증금을 받아 반환 능력이 없는 상태로 계약하는 범죄입니다. 2023년 전세사기 피해자 지원 및 주거 안정에 관한 특별법이 시행되어 피해자 인정, 경매 유예, 긴급 주거지원 등 다양한 제도가 마련되었습니다. 전세사기가 의심되면 등기부등본의 근저당 설정 여부, 임대인의 다주택 보유 현황, 시세 대비 보증금 비율 등을 먼저 확인해야 합니다. 깡통전세(보증금이 매매가의 80% 이상)의 경우 보증금 반환 위험이 높으므로 주의가 필요합니다. 피해가 확인되면 신속히 경찰 신고와 피해자 지원 신청을 병행하고, 임차권등기명령을 신청하여 대항력을 보전하는 것이 중요합니다. 공동 피해자가 있는 경우 법률구조공단의 무료 소송대리 등 집단 대응도 검토해보세요.',
    topQuestions: [
      { question: '전세사기 경매에서 보증금을 돌려받을 수 있나요?', slug: 'jeonse-fraud-auction-bidding-guide' },
      { question: '전세사기 피해자 지원은 어떻게 신청하나요?', slug: 'jeonse-fraud-victim-support-application' },
      { question: '깡통전세 확인하는 방법이 있나요?', slug: 'jeonse-fraud-gap-investment-check' },
    ],
    relatedHubs: [
      { domain: 'jeonse', label: '전세/임대차', reason: '정상 전세 계약의 보호 제도 확인' },
      { domain: 'fraud', label: '사기', reason: '전세사기 형사고소 절차' },
    ],
    perspectives: [
      {
        label: '전세사기 피해가 의심됩니다',
        emoji: '🔴',
        checks: [
          '등기부등본을 확인하여 근저당 설정액과 매매 시세를 비교해보세요',
          '임대인의 다른 물건에서도 비슷한 사례가 있는지 확인해보세요',
          '전세보증보험 가입 여부와 보증금 반환 가능성을 점검해보세요',
        ],
      },
      {
        label: '보증금을 돌려받지 못하고 있습니다',
        emoji: '🟡',
        checks: [
          '임차권등기명령 신청으로 대항력을 보전했는지 확인해보세요',
          '내용증명을 발송하고 법적 청구 절차를 시작했는지 확인해보세요',
          '전세사기 피해자 지원 특별법 적용 대상인지 확인해보세요',
        ],
      },
      {
        label: '경매 통지를 받았습니다',
        emoji: '🔵',
        checks: [
          '배당요구 종기일 이내에 배당요구 신청을 했는지 확인해보세요',
          '소액보증금 최우선변제 해당 여부를 확인해보세요',
          '전세사기 피해자 인정 신청으로 경매 유예를 요청할 수 있는지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '등기부등본 분석',
        desc: '갑구(소유권), 을구(근저당, 전세권)를 꼼꼼히 확인해보세요. 근저당 설정액 + 보증금이 매매 시세를 초과하면 위험 신호입니다.',
      },
      {
        title: '피해자 지원 신청',
        desc: '전세사기 피해자 지원 특별법에 따라 피해자 인정을 신청하면 경매 유예, 긴급 주거지원, 보증금 우선 변제 등의 혜택을 받을 수 있습니다.',
      },
      {
        title: '임차권등기명령 신청',
        desc: '이사를 해야 하는데 보증금을 돌려받지 못한 경우, 임차권등기명령을 신청하면 이사 후에도 대항력과 우선변제권을 유지할 수 있습니다.',
      },
      {
        title: '형사 신고',
        desc: '사기 정황이 확인되면 경찰에 사기죄로 신고하세요. 임대인의 기망 행위(허위 시세 고지, 이중 계약 등)를 구체적으로 정리해보세요.',
      },
      {
        title: '공동 대응 검토',
        desc: '같은 건물이나 같은 임대인의 다른 피해자가 있는지 확인하고, 법률구조공단 무료 소송대리 등 집단 대응 방법을 검토해보세요.',
      },
    ],
    faqs: [
      {
        question: '전세사기 피해자 지원은 어떻게 신청하나요?',
        answer:
          '관할 지자체에 피해자 인정 신청서를 제출합니다. 피해자로 인정되면 경매 유예, 긴급 주거지원, LH 매입 임대, 보증금 우선 변제 등의 지원을 받을 수 있습니다.',
      },
      {
        question: '깡통전세란 무엇인가요?',
        answer:
          '보증금이 매매 시세의 80% 이상이거나, 근저당 설정액과 보증금의 합이 시세를 초과하는 경우를 말합니다. 보증금 반환 위험이 매우 높은 상태입니다.',
      },
      {
        question: '임차권등기명령이란 무엇인가요?',
        answer:
          '보증금을 돌려받지 못한 채 이사해야 할 때 법원에 신청하는 제도입니다. 등기가 완료되면 이사 후에도 대항력과 우선변제권이 유지됩니다.',
      },
      {
        question: '전세보증보험에 가입하면 안전한가요?',
        answer:
          '전세보증보험은 보증금 반환 불능 시 보증기관이 대신 지급하는 보험입니다. 다만 가입 조건(보증금/시세 비율 등)이 있으므로 사전에 가입 가능 여부를 확인하세요.',
      },
      {
        question: '경매가 진행되면 보증금을 잃나요?',
        answer:
          '대항력(전입신고 + 확정일자)을 갖추었다면 배당절차에서 보증금을 우선 변제받을 수 있습니다. 배당요구 종기일 이내에 반드시 배당요구를 해야 합니다.',
      },
      {
        question: '전세사기 피해 시 형사고소가 가능한가요?',
        answer:
          '처음부터 보증금 반환 의사나 능력 없이 계약한 정황이 있으면 사기죄(형법 제347조)로 고소할 수 있습니다. 기망 행위의 구체적 증거가 필요합니다.',
      },
      {
        question: '전세보증금 반환 소송 비용은 얼마인가요?',
        answer:
          '보증금 1억원 기준 인지대 약 50만원, 송달료 약 5만원이 소요됩니다. 법률구조공단에서 무료 소송대리를 지원받을 수 있는 경우도 있습니다.',
      },
      {
        question: '다른 피해자가 있는지 어떻게 확인하나요?',
        answer:
          '같은 건물 등기부등본에서 다른 전세권 설정을 확인하거나, 온라인 전세사기 피해자 커뮤니티, 관할 지자체 피해 접수 현황 등을 통해 확인할 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '계약 전 확인',
        emoji: '📋',
        spokes: [
          { title: '전세사기 첫 확인', slug: 'jeonse-fraud-first-check' },
          { title: '깡통전세 체크리스트', slug: 'shell-jeonse-verification-checklist' },
          { title: '빈집 확인 방법', slug: 'empty-jeonse-verification-method' },
          { title: '깡통전세 대응', slug: 'shell-jeonse-check-response' },
        ],
      },
      {
        label: '피해 신고/대응',
        emoji: '📋',
        spokes: [
          { title: '전세사기 어디서부터', slug: 'jeonse-fraud-where-to-start' },
          { title: '신고 절차', slug: 'jeonse-fraud-report-procedure' },
          { title: '고소장 작성', slug: 'jeonse-fraud-complaint-writing' },
          { title: '민사 vs 형사', slug: 'jeonse-fraud-civil-vs-criminal' },
        ],
      },
      {
        label: '보증금 반환',
        emoji: '📋',
        spokes: [
          { title: '보증금 미반환 대응', slug: 'jeonse-deposit-not-returned-response' },
          { title: '보증금 우선순위', slug: 'jeonse-fraud-deposit-priority-order' },
          { title: '경매 우선변제', slug: 'jeonse-fraud-auction-priority-repayment' },
          { title: '경매 입찰 가이드', slug: 'jeonse-fraud-auction-bidding-guide' },
        ],
      },
      {
        label: '피해자 지원',
        emoji: '📋',
        spokes: [
          { title: '피해자 인정 절차', slug: 'jeonse-fraud-victim-recognition-process' },
          { title: '신청 서류', slug: 'jeonse-fraud-victim-application-docs' },
          { title: '구제 타임라인', slug: 'jeonse-fraud-relief-timeline' },
          { title: '다수 피해자 공동 대응', slug: 'jeonse-fraud-multiple-victim-joint' },
        ],
      },
      {
        label: '책임/구분',
        emoji: '📋',
        spokes: [
          { title: '사기 vs 단순 채무불이행', slug: 'jeonse-fraud-vs-deposit-default' },
          { title: '중개인 책임', slug: 'jeonse-fraud-broker-liability' },
          { title: '임대인 혐의 대응', slug: 'jeonse-fraud-landlord-accused-response' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '빌라 전세 계약 후 입주했으나 임대인이 잠적하고 근저당이 보증금 이상 설정된 상황',
        issue: '보증금 반환 불능이 확실하고 경매 절차가 임박한 경우',
        prep: '등기부등본 확인, 임차권등기명령 신청, 전세사기 피해자 인정 신청을 신속히 진행해보세요',
      },
      {
        scene: '같은 건물에 여러 세입자가 보증금 미반환 피해를 입고 있는 상황',
        issue: '공동 대응과 피해자 지원 제도 활용이 필요한 경우',
        prep: '피해자 모임을 구성하고 법률구조공단 무료 소송대리를 신청해보세요',
      },
    ],
  },

  stalking: {
    overview:
      '스토킹처벌법(스토킹범죄의 처벌 등에 관한 법률)은 2021년 10월부터 시행되었습니다. 상대방의 의사에 반하여 반복적으로 접근·연락·미행·기다림·선물 전달·온라인 접근 등을 하는 행위가 스토킹에 해당합니다. 스토킹 행위는 3년 이하의 징역 또는 3,000만원 이하의 벌금에 처해지며, 반복 시 스토킹 범죄로 5년 이하의 징역 또는 5,000만원 이하의 벌금으로 가중됩니다. 피해자가 112에 신고하면 경찰이 긴급응급조치(접근금지, 연락금지 등)를 즉시 시행할 수 있고, 검찰은 법원에 잠정조치(2개월, 연장 가능)를 청구할 수 있습니다. 접근금지 명령을 위반하면 별도의 처벌이 가해집니다. 헤어진 연인의 반복 연락이 가장 흔한 유형이며, 직장·학교 스토킹과 사이버 스토킹도 증가 추세입니다. 피해자는 112 신고 → 긴급응급조치 → 잠정조치 → 고소 순서로 대응하는 것이 효과적입니다. 증거 확보가 핵심이며, 문자·카톡 캡처, CCTV 영상, 목격자 진술, 녹음 파일 등을 날짜별로 정리해야 합니다. 스토킹은 행위 강도가 점차 높아지는 에스컬레이션 위험이 크므로 초기 대응이 매우 중요합니다.',
    topQuestions: [
      { question: '스토킹으로 고소당했을 때 어디부터 해야 하나요?', slug: 'stalking-accused-where-to-start' },
      { question: '헤어진 연인이 계속 연락하면 스토킹인가요?', slug: 'ex-partner-contact-stalking-criteria' },
      { question: '스토킹 고소 취하하면 어떻게 되나요?', slug: 'stalking-accused-where-to-start' },
    ],
    relatedHubs: [
      { domain: 'sex-crime', label: '성범죄', reason: '스토킹이 성범죄로 발전하는 사건' },
      { domain: 'defamation', label: '명예훼손', reason: '온라인 스토킹과 명예훼손 병합 사건' },
    ],
    perspectives: [
      {
        label: '스토킹 피해를 당하고 있습니다',
        emoji: '🔴',
        checks: [
          '112에 즉시 신고하고 긴급응급조치(접근금지)를 요청했는지 확인해보세요',
          '문자·카톡 캡처, CCTV, 녹음 등 증거를 날짜별로 보전했는지 확인해보세요',
          '경찰에 긴급응급조치를 요청하고 잠정조치 절차를 진행했는지 확인해보세요',
        ],
      },
      {
        label: '신고를 고민하고 있습니다',
        emoji: '🟡',
        checks: [
          '상대방의 행위가 스토킹에 해당하는지 자가진단해보세요',
          '증거가 충분한지 확인하고 부족한 부분을 보완해보세요',
          '접근금지 신청에 필요한 서류를 준비해보세요',
        ],
      },
      {
        label: '스토킹 혐의를 받고 있습니다',
        emoji: '🔵',
        checks: [
          '상대방과의 연락 경위를 시간순으로 정리해보세요',
          '정상적인 교류였음을 증명할 증거(쌍방 대화, 동의 흔적)를 확보해보세요',
          '법률 조력인(변호사)을 선임하고 수사 대응을 준비해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 수집',
        desc: '문자·카톡·DM 캡처, 통화 녹음, CCTV 보존 요청 등을 진행해보세요. 디지털 증거는 원본 파일과 스크린샷을 함께 보관하는 것이 안전합니다.',
      },
      {
        title: '스토킹 일지 작성',
        desc: '상대방의 접근·연락 시도를 날짜, 시간, 장소, 내용별로 기록해보세요. 구체적인 일지가 수사와 재판에서 강력한 증거가 됩니다.',
      },
      {
        title: '112 신고',
        desc: '112에 신고하면 경찰이 현장에서 긴급응급조치(접근금지, 연락금지)를 할 수 있습니다. 신고 이력 자체가 향후 잠정조치·재판에서 중요한 증거가 됩니다.',
      },
      {
        title: '접근금지 신청서 준비',
        desc: '검찰을 통해 법원에 잠정조치(2개월, 2회 연장 가능)를 청구할 수 있습니다. 주거·직장 접근금지, 연락금지 등이 포함됩니다.',
      },
      {
        title: '피해자 보호시설 확인',
        desc: '범죄피해자 보호법에 따른 신변보호 제도, 여성긴급전화 1366, 피해자 국선변호사 지원 등을 미리 확인해보세요.',
      },
    ],
    faqs: [
      {
        question: '어떤 행위가 스토킹에 해당하나요?',
        answer:
          '상대방의 의사에 반하여 접근·미행·기다림·지켜보기, 우편·전화·문자·SNS 등으로 반복 연락, 물건 전달, 주거 등 부근 배회 등이 모두 스토킹처벌법상 스토킹 행위에 해당합니다.',
      },
      {
        question: '헤어진 연인이 계속 연락하면 스토킹인가요?',
        answer:
          '상대방이 연락 중단을 요청했음에도 반복적으로 연락하는 것은 스토킹에 해당할 수 있습니다. 거부 의사를 명확히 표시한 후에도 반복되면 스토킹 행위로 인정됩니다.',
      },
      {
        question: '신고하면 상대방이 바로 체포되나요?',
        answer:
          '바로 체포되지는 않지만, 경찰이 긴급응급조치(접근금지, 연락금지)를 즉시 시행할 수 있습니다. 긴급응급조치를 위반하면 구속 사유가 될 수 있습니다.',
      },
      {
        question: '접근금지 기간은 얼마나 되나요?',
        answer:
          '법원의 잠정조치는 2개월이며, 2회까지 연장할 수 있어 최대 6개월간 접근금지가 가능합니다. 잠정조치 위반 시 2년 이하의 징역 또는 2,000만원 이하의 벌금에 처해집니다.',
      },
      {
        question: '증거가 없으면 신고할 수 없나요?',
        answer:
          '증거가 부족해도 신고 자체는 가능합니다. 신고 후 경찰이 수사를 진행하며, 신고 이력 자체도 향후 증거가 됩니다. 다만 증거가 많을수록 수사와 재판이 원활합니다.',
      },
      {
        question: '직장에 찾아오면 어떻게 대응하나요?',
        answer:
          '상대방의 의사에 반하여 직장 부근에서 기다리거나 찾아오는 행위는 스토킹처벌법에 명시된 스토킹 행위입니다. 즉시 112에 신고하고 직장 내 CCTV 보존을 요청하세요.',
      },
      {
        question: '온라인 스토킹도 처벌되나요?',
        answer:
          '네, 정보통신망을 이용하여 반복적으로 글·사진·영상·음향을 도달하게 하는 것도 스토킹처벌법의 스토킹 행위에 해당합니다. SNS DM, 이메일, 메신저 등 모두 포함됩니다.',
      },
      {
        question: '스토킹 고소를 취하하면 처벌이 안 되나요?',
        answer:
          '스토킹 행위는 3년 이하의 징역 또는 3,000만원 이하의 벌금이며, 반복 시 스토킹 범죄로 5년 이하의 징역 또는 5,000만원 이하의 벌금에 처해집니다. 흉기 사용 시 가중처벌됩니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '스토킹 피해 어디부터 시작해야 하나', slug: 'stalking-victim-where-to-start' },
          { title: '스토킹 즉시 대응 가이드', slug: 'stalking-immediate-response' },
          { title: '스토킹 피해자 체크리스트', slug: 'stalking-victim-checklist' },
          { title: '스토킹 증거 수집 FAQ', slug: 'stalking-evidence-collection-faq' },
        ],
      },
      {
        label: '신고/보호조치',
        emoji: '📋',
        spokes: [
          { title: '스토킹 신고와 접근금지 신청', slug: 'stalking-report-and-restraining-order' },
          { title: '스토킹 긴급보호조치 안내', slug: 'stalking-emergency-protective-measures' },
          { title: '스토킹 긴급조치 신청 방법', slug: 'stalking-emergency-measure-application' },
          { title: '스토킹 고소 필요 서류', slug: 'complaint-filing-required-documents' },
        ],
      },
      {
        label: '혐의자 대응',
        emoji: '📋',
        spokes: [
          { title: '스토킹 혐의 어디부터 시작해야 하나', slug: 'stalking-accused-where-to-start' },
          { title: '스토킹 혐의 대응 방법', slug: 'stalking-accused-response' },
          { title: '쌍방 연락 항변 전략', slug: 'stalking-mutual-contact-defense' },
          { title: '정상적 연락이었음을 증명하는 방법', slug: 'stalking-accused-normal-contact-proof' },
        ],
      },
      {
        label: '상황별',
        emoji: '📋',
        spokes: [
          { title: '헤어진 연인 연락 스토킹 기준', slug: 'ex-partner-contact-stalking-criteria' },
          { title: '계속 연락하면 스토킹일까', slug: 'ex-keeps-contacting-is-it-stalking' },
          { title: '직장 스토킹 대응 가이드', slug: 'stalking-workplace-harassment-stalking' },
          { title: '사이버 스토킹 반복 DM 대응', slug: 'cyber-stalking-repeated-dm' },
        ],
      },
      {
        label: '법적 기준',
        emoji: '📋',
        spokes: [
          { title: '스토킹 법적 기준 총정리', slug: 'stalking-legal-criteria' },
          { title: '스토킹 처벌과 접근금지 명령', slug: 'stalking-penalty-restraining-order' },
          { title: '스토킹 초범 수사 준비', slug: 'stalking-first-offense-investigation-prep' },
          { title: '스토킹 허위신고 방어', slug: 'stalking-false-report-defense' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '헤어진 연인이 매일 퇴근길에 나타나고 하루 수십 통의 문자를 보내는 상황',
        issue: '거부 의사를 표시했으나 반복 접근·연락이 계속되는 경우',
        prep: '거부 의사 문자 기록, 접근 시도 날짜별 일지, 112 신고를 통한 긴급응급조치를 진행해보세요',
      },
      {
        scene: '직장 동료가 퇴근 후 집 앞까지 미행하고 반복적으로 만남을 요구하는 상황',
        issue: '업무상 접촉과 스토킹 행위의 경계가 문제되는 경우',
        prep: '직장 내 CCTV 보존 요청, 미행 일지 작성, 회사 인사팀 신고와 경찰 신고를 병행해보세요',
      },
    ],
  },

  'digital-sex-crime': {
    overview:
      '디지털 성범죄는 성폭력범죄의 처벌 등에 관한 특례법에 의해 규율되며, 불법촬영(제14조), 촬영물 유포(제14조 제2항), 딥페이크(제14조의2) 등이 포함됩니다. 불법촬영은 7년 이하의 징역 또는 5,000만원 이하의 벌금, 유포는 7년 이하의 징역, 딥페이크 제작·유포는 5년 이하의 징역 또는 5,000만원 이하의 벌금에 처해집니다. 2020년 n번방 사건 이후 촬영물 소지·구입·저장만으로도 3년 이하의 징역 또는 3,000만원 이하의 벌금에 처해지도록 강화되었습니다. 피해자는 디지털성범죄피해자지원센터(02-735-8994)를 통해 피해 영상 삭제 지원, 법률 상담, 수사 연계를 원스톱으로 받을 수 있습니다. 방송통신심의위원회를 통한 삭제 요청, 임시조치 신청 등 긴급 대응이 가능하며, 해외 서버에 올라간 영상도 국제 공조를 통해 삭제를 요청할 수 있습니다. 증거 보전이 핵심이므로 피해 영상을 직접 삭제하지 말고 전문기관에 먼저 연락하는 것이 중요합니다.',
    perspectives: [
      {
        label: '디지털 성범죄 피해를 입었습니다',
        emoji: '🔴',
        checks: [
          '디지털성범죄피해자지원센터(02-735-8994)에 연락하여 삭제 지원을 요청했는지 확인해보세요',
          '피해 영상의 URL, 스크린샷, 게시일시 등 증거를 보전했는지 확인해보세요',
          '피해 영상을 직접 삭제하지 않았는지 확인해보세요(증거 인멸 위험)',
        ],
      },
      {
        label: '혐의를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '촬영·유포·소지 등 구체적 혐의 내용을 확인하고 사실관계를 정리해보세요',
          '진술 전 반드시 변호사의 조력을 받을 수 있는지 확인해보세요',
          '관련 파일의 삭제·폐기 여부와 디지털 포렌식 대비를 검토해보세요',
        ],
      },
      {
        label: '사실과 다르게 신고되었습니다',
        emoji: '🔵',
        checks: [
          '동의하에 촬영된 것임을 증명할 대화 기록 등 증거를 확보해보세요',
          '촬영·유포에 관여하지 않았음을 입증할 알리바이나 디지털 증거를 정리해보세요',
          '허위신고에 대한 무고죄 반소 가능성을 전문가와 상의해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 보전 (직접 삭제 금지)',
        desc: '피해 영상의 URL, 전체 페이지 스크린샷(URL 표시줄 포함), 게시일시를 캡처해보세요. 직접 삭제하면 증거가 소멸되므로 반드시 전문기관에 먼저 연락하세요.',
      },
      {
        title: '디지털성범죄피해자지원센터 연락',
        desc: '한국여성인권진흥원 산하 지원센터(02-735-8994)에서 피해 영상 삭제 지원, 수사 연계, 법률 상담을 무료로 제공합니다.',
      },
      {
        title: '긴급 삭제 요청',
        desc: '포털·SNS 임시조치 신청, 방송통신심의위원회 심의 요청 등으로 영상 확산을 차단해보세요. 임시조치는 30일간 콘텐츠를 차단합니다.',
      },
      {
        title: '경찰 신고',
        desc: '사이버수사대에 신고하면 IP 추적, 디지털 포렌식 등을 통해 가해자를 특정합니다. 보전한 증거를 첨부하여 고소장을 제출해보세요.',
      },
      {
        title: '심리 지원 연계',
        desc: '디지털 성범죄 피해는 심리적 충격이 큽니다. 해바라기센터, 한국성폭력상담소 등에서 무료 심리 상담을 받을 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '피해 영상을 완전히 삭제할 수 있나요?',
        answer:
          '디지털성범죄피해자지원센터에서 국내외 플랫폼에 삭제를 요청합니다. 완전 삭제가 어려울 수 있지만, 지속적인 모니터링과 삭제 요청으로 확산을 최소화할 수 있습니다.',
      },
      {
        question: '불법촬영물 소지만으로도 처벌되나요?',
        answer:
          '네, 2020년 법 개정으로 불법촬영물을 소지·구입·저장하는 것만으로도 3년 이하의 징역 또는 3,000만원 이하의 벌금에 처해집니다.',
      },
      {
        question: '딥페이크 합성물도 처벌 대상인가요?',
        answer:
          '네, 반포·판매 등의 목적으로 성적 수치심을 유발하는 합성물을 제작한 경우 5년 이하의 징역 또는 5,000만원 이하의 벌금에 처해집니다.',
      },
      {
        question: '해외 서버에 올라간 영상도 삭제 가능한가요?',
        answer:
          '디지털성범죄피해자지원센터에서 해외 플랫폼에도 삭제를 요청합니다. 국제 공조를 통해 진행되며, 주요 글로벌 플랫폼은 요청에 응하는 경우가 많습니다.',
      },
      {
        question: '동의하에 촬영했는데 유포하면 처벌되나요?',
        answer:
          '네, 촬영에 동의했더라도 유포에 동의하지 않은 영상을 유포하면 성폭력처벌법 제14조 제2항에 의해 처벌됩니다.',
      },
      {
        question: '유포 협박을 받고 있는데 돈을 보내야 하나요?',
        answer:
          '절대 돈을 보내면 안 됩니다. 돈을 보내도 유포를 막을 수 없으며 오히려 추가 협박의 빌미가 됩니다. 즉시 경찰에 신고하고 전문기관에 도움을 요청하세요.',
      },
      {
        question: '불법촬영 초범이면 어떤 처벌을 받나요?',
        answer:
          '초범이고 유포하지 않은 단순 촬영의 경우 벌금형이나 집행유예가 선고되기도 합니다. 다만 유포한 경우 초범이라도 실형이 선고될 수 있습니다.',
      },
      {
        question: '디지털 성범죄도 신상정보 등록 대상인가요?',
        answer:
          '네, 유죄 판결 확정 시 20년간 신상정보가 등록됩니다. 아동·청소년 대상 범죄는 등록 기간이 더 길어질 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '디지털성범죄 피해 어디부터 시작해야 하나', slug: 'digital-sex-crime-where-to-start' },
          { title: '디지털성범죄 피해 대응 완벽 체크리스트', slug: 'victim-response-complete-checklist' },
          { title: '몰카 발견 즉시 대응 가이드', slug: 'hidden-camera-found-immediate-response' },
          { title: '피해 신고 시 필요한 증거 목록', slug: 'report-required-evidence-list' },
        ],
      },
      {
        label: '삭제/유포차단',
        emoji: '📋',
        spokes: [
          { title: '피해 영상 삭제 지원 절차', slug: 'victim-video-deletion-support-procedure' },
          { title: '불법촬영물 삭제 지원 안내', slug: 'illegal-filming-deletion-support' },
          { title: '피해 영상 완전삭제 가능할까', slug: 'complete-deletion-possible' },
          { title: '딥페이크 유포 차단과 삭제 방법', slug: 'deepfake-distribution-block-deletion' },
        ],
      },
      {
        label: '촬영/딥페이크',
        emoji: '📋',
        spokes: [
          { title: '불법촬영 피해 신고 및 삭제 요청 절차', slug: 'hidden-camera-report-and-deletion-procedure' },
          { title: '몰카 증거 확보와 신고 방법', slug: 'hidden-camera-evidence-report' },
          { title: '딥페이크 합성물 신고와 삭제 절차', slug: 'deepfake-pornography-report-removal' },
          { title: '딥페이크 합성물 유포 시 법적 대응', slug: 'deepfake-distribution-legal-response' },
        ],
      },
      {
        label: '협박/유포',
        emoji: '📋',
        spokes: [
          { title: '디지털 성착취 협박 대응 가이드', slug: 'digital-sex-crime-sextortion-response' },
          { title: '전 연인 유포 협박 대응법', slug: 'ex-threatens-to-share-intimate-video' },
          { title: '불법촬영 증거 캡처 시 흔히 하는 실수', slug: 'screenshot-evidence-common-mistakes' },
        ],
      },
      {
        label: '혐의자 대응',
        emoji: '📋',
        spokes: [
          { title: '불법촬영 혐의 대응', slug: 'filming-accusation-defense' },
          { title: '불법촬영 무고 대응', slug: 'filming-false-accusation-defense' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '헤어진 연인이 교제 중 촬영한 사적 영상을 유포하겠다고 협박하는 상황',
        issue: '영상이 아직 유포되지 않았지만 협박이 반복되고 있는 경우',
        prep: '협박 메시지 캡처, 경찰 신고, 디지털성범죄피해자지원센터 연락을 즉시 진행해보세요',
      },
      {
        scene: 'SNS에 본인 얼굴이 합성된 딥페이크 영상이 올라온 상황',
        issue: '게시자를 특정하기 어렵고 영상이 빠르게 확산되는 경우',
        prep: '게시물 URL과 스크린샷 캡처, 임시조치 신청, 사이버수사대 신고를 병행해보세요',
      },
    ],
  },

  'traffic-accident': {
    overview:
      '교통사고는 교통사고처리특례법, 자동차손해배상보장법, 도로교통법 등에 의해 규율됩니다. 사고 후 가장 중요한 것은 인명 구호와 경찰 신고이며, 이후 보험 처리, 과실비율 산정, 합의 또는 소송 절차가 진행됩니다. 12대 중과실(신호위반, 중앙선 침범, 음주운전 등)에 해당하면 종합보험에 가입했더라도 형사 처벌을 면할 수 없습니다. 과실비율은 사고 유형, 도로 상황, 신호 준수 여부 등을 종합하여 산정되며, 보험사 과실비율에 이의가 있으면 교통사고분쟁심의위원회에 심의를 요청할 수 있습니다. 합의금은 치료비, 휴업손해, 위자료, 향후 치료비 등을 포함하여 산정되므로 치료가 완료된 후 합의하는 것이 유리합니다. 뺑소니(사고 후 미조치)는 도로교통법 제54조 위반으로 가중처벌되며, 무보험 사고의 경우 정부보장사업을 통해 피해 보상을 받을 수 있습니다.',
    topQuestions: [
      { question: '교통사고 합의 후 후유증이 생기면 추가 청구 가능한가요?', slug: 'accident-settlement-checklist' },
      { question: '보험청구 서류는 뭐가 필요한가요?', slug: 'insurance-claim-required-docs' },
      { question: '과실비율이 억울할 때 어떻게 하나요?', slug: 'fault-ratio-calculation-criteria' },
    ],
    relatedHubs: [
      { domain: 'small-claims', label: '소액재판', reason: '합의금 분쟁 시 소액사건 절차' },
      { domain: 'assault', label: '폭행/상해', reason: '교통사고 중 폭행·보복 운전 사건' },
    ],
    perspectives: [
      {
        label: '교통사고 피해를 입었습니다',
        emoji: '🔴',
        checks: [
          '사고 현장 사진, 블랙박스 영상, 상대방 차량 번호를 확보했는지 확인해보세요',
          '병원 진단서를 발급받고 치료를 시작했는지 확인해보세요',
          '보험사에 사고 접수를 하고 담당자 연락처를 받았는지 확인해보세요',
        ],
      },
      {
        label: '교통사고를 낸 가해자입니다',
        emoji: '🟡',
        checks: [
          '사고 현장에서 인명 구호와 경찰 신고를 적절히 했는지 확인해보세요',
          '보험사에 사고를 접수하고 피해자 치료비 선지급을 요청했는지 확인해보세요',
          '12대 중과실 해당 여부를 확인하고 형사 절차 대비를 시작해보세요',
        ],
      },
      {
        label: '과실 비율이 억울합니다',
        emoji: '🔵',
        checks: [
          '블랙박스 영상, CCTV, 목격자 진술 등 과실 반박 증거를 확보했는지 확인해보세요',
          '교통사고분쟁심의위원회에 과실비율 심의를 요청했는지 확인해보세요',
          '보험사 제시 과실비율에 서면 이의를 제출했는지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '현장 증거 확보',
        desc: '사고 현장 사진(차량 위치, 손상 부위, 도로 상태), 블랙박스 영상, 상대방 차량번호·보험사 정보, 목격자 연락처를 확보해보세요.',
      },
      {
        title: '의료 기록 확보',
        desc: '진단서, 치료비 영수증, 향후 치료 계획서를 발급받아보세요. 합의금 산정의 기초 자료가 되며, 치료 완료 후 합의하는 것이 유리합니다.',
      },
      {
        title: '보험사 대응',
        desc: '보험사에 사고를 접수하고 담당자와 소통하세요. 보험사 제시 합의금을 바로 수락하지 말고, 적정 금액을 산정한 후 비교해보세요.',
      },
      {
        title: '과실비율 검토',
        desc: '사고 유형별 과실비율 기준(대법원 과실비율 인정 기준)을 확인하고, 보험사 산정과 비교해보세요. 이의가 있으면 분쟁심의위원회에 심의를 요청할 수 있습니다.',
      },
      {
        title: '합의 또는 소송 검토',
        desc: '치료 완료 후 치료비, 휴업손해, 위자료, 향후 치료비 등을 합산하여 적정 합의금을 산정해보세요. 합의가 안 되면 민사소송을 검토할 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '교통사고 합의금은 어떻게 산정하나요?',
        answer:
          '치료비(기왕증 제외), 휴업손해(실제 소득 감소분), 위자료, 향후 치료비, 교통비 등을 합산합니다. 후유장해가 있으면 장해 등급에 따른 일실소득도 포함됩니다.',
      },
      {
        question: '보험사 제시 합의금을 그대로 받아도 되나요?',
        answer:
          '보험사 초기 제시금은 통상 적정 금액보다 낮은 경우가 많습니다. 치료가 완료된 후 적정 합의금을 산정하여 비교한 후 결정하는 것이 유리합니다.',
      },
      {
        question: '과실비율에 이의가 있으면 어떻게 하나요?',
        answer:
          '교통사고분쟁심의위원회(손해보험협회)에 과실비율 심의를 무료로 요청할 수 있습니다. 블랙박스 영상 등 객관적 증거가 있으면 변경 가능성이 높아집니다.',
      },
      {
        question: '12대 중과실이란 무엇인가요?',
        answer:
          '신호위반, 중앙선 침범, 제한속도 20km/h 초과, 앞지르기 방법 위반, 건널목 통과 방법 위반, 횡단보도 사고, 무면허운전, 음주운전, 보도 침범, 승객추락 방지의무 위반, 어린이보호구역 사고, 화물고정조치 위반입니다.',
      },
      {
        question: '뺑소니 피해를 입었는데 가해자를 못 찾으면?',
        answer:
          '정부보장사업(자동차손해배상보장법 제30조)을 통해 피해 보상을 받을 수 있습니다. 경찰에 신고하고 보험사 또는 국토교통부에 보상 청구를 하세요.',
      },
      {
        question: '교통사고 합의 후 후유증이 생기면 추가 청구가 가능한가요?',
        answer:
          '치료 중 합의하면 향후 발생하는 치료비, 후유장해 보상을 받지 못할 수 있습니다. 증상이 고정(치료 완료)된 후 합의하는 것이 원칙입니다.',
      },
      {
        question: '과실 100%여도 보상받을 수 있나요?',
        answer:
          '자동차손해배상보장법에 따라 타인에게 피해를 준 운행자에게 무과실 책임이 적용되는 경우가 있어, 피해자 과실이 100%가 아닌 한 일부 보상이 가능합니다.',
      },
      {
        question: '교통사고 소송 비용은 얼마나 드나요?',
        answer:
          '청구금액에 따라 인지대가 달라지며, 5,000만원 기준 인지대 약 25만원, 송달료 약 5만원입니다. 변호사 비용은 별도이나, 보험사 부담으로 처리되는 경우도 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '합의금/손해배상',
        emoji: '📋',
        spokes: [
          { title: '보상금 계산 가이드', slug: 'traffic-accident-compensation-calculation-guide' },
          { title: '적정 합의금 산정', slug: 'accident-settlement-fair-amount' },
          { title: '합의 vs 소송 비교', slug: 'settlement-vs-lawsuit-comparison' },
          { title: '합의 서두르지 마세요', slug: 'settlement-offer-dont-accept-immediately-reasons' },
        ],
      },
      {
        label: '과실비율',
        emoji: '📋',
        spokes: [
          { title: '과실비율 산정 기준', slug: 'fault-ratio-calculation-criteria' },
          { title: '과실 분쟁 증거', slug: 'traffic-accident-fault-dispute-evidence' },
          { title: '추돌 과실비율', slug: 'traffic-accident-rear-end-fault-ratio' },
          { title: '회전교차로 과실', slug: 'traffic-accident-roundabout-fault-standard' },
        ],
      },
      {
        label: '보험사 대응',
        emoji: '📋',
        spokes: [
          { title: '보험 청구 서류', slug: 'insurance-claim-required-docs' },
          { title: '보험 청구 총정리', slug: 'traffic-accident-insurance-claim-comprehensive' },
          { title: '낮은 합의금 대응', slug: 'insurance-lowball-settlement-response' },
          { title: '보험사 설명의무', slug: 'traffic-accident-insurance-explanation-duty' },
        ],
      },
      {
        label: '사고 유형별',
        emoji: '📋',
        spokes: [
          { title: '보행자 무단횡단 사고', slug: 'traffic-accident-pedestrian-jaywalking-fault' },
          { title: '자전거 사고 보상', slug: 'traffic-accident-bicycle-compensation' },
          { title: '전동킥보드 사고 책임', slug: 'traffic-accident-electric-scooter-liability' },
          { title: '버스 급정거 승객 청구', slug: 'traffic-accident-bus-sudden-stop-passenger-claim' },
        ],
      },
      {
        label: '증거/블랙박스',
        emoji: '📋',
        spokes: [
          { title: '블랙박스 증거 활용', slug: 'traffic-accident-dashcam-evidence-guide' },
          { title: '블랙박스 없을 때 과실 입증', slug: 'no-dashcam-fault-proof' },
          { title: '사고 후 어디부터 시작', slug: 'traffic-accident-where-to-start' },
          { title: '블랙박스 과실 반박', slug: 'dashcam-fault-rebuttal' },
        ],
      },
      {
        label: '형사/음주',
        emoji: '📋',
        spokes: [
          { title: '형사·민사 절차 안내', slug: 'traffic-accident-criminal-civil-procedure' },
          { title: '가해자 형사 대응', slug: 'traffic-accident-offender-criminal-charge-response' },
          { title: '음주 혈액검사 시점', slug: 'traffic-accident-dui-blood-test-timing' },
          { title: '뺑소니 피해 대응', slug: 'hit-and-run-victim-response' },
        ],
      },
      {
        label: '치료/후유증',
        emoji: '📋',
        spokes: [
          { title: '편타손상 보상', slug: 'traffic-accident-whiplash-compensation' },
          { title: '통원치료 합의 영향', slug: 'outpatient-treatment-count-settlement-impact' },
          { title: '후유증 추가 청구', slug: 'traffic-accident-aftereffect-treatment-claim' },
          { title: '지연치료 추가배상', slug: 'traffic-delay-settlement-additional-treatment' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '교차로에서 신호 위반 차량에 의해 추돌당하여 전치 6주 진단을 받은 상황',
        issue: '상대방 보험사가 피해자에게도 20% 과실을 주장하는 경우',
        prep: '블랙박스 영상 확보, 사고 현장 CCTV 보존 요청, 교통사고분쟁심의위원회 심의 요청을 진행해보세요',
      },
      {
        scene: '후진 중 주차장에서 보행자를 치는 사고를 낸 상황',
        issue: '12대 중과실이 아닌 경우 종합보험으로 처리 가능한지가 쟁점인 경우',
        prep: '피해자 진단서 확인, 보험사 접수, 치료비 선지급 후 합의를 진행해보세요',
      },
    ],
  },
  wage: {
    overview:
      '임금체불은 근로기준법 제36조(금품 청산)와 제43조(임금 지급)를 위반하는 행위로, 사업주는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처해질 수 있습니다. 퇴직 후 14일 이내에 임금, 퇴직금, 보상금 등 일체의 금품을 지급해야 하며, 이를 위반하면 미지급 금액에 대해 연 20%의 지연이자가 발생합니다(근로기준법 제37조). 임금체불 근로자는 관할 지방고용노동청에 진정(신고)하거나 형사고소를 제기할 수 있으며, 근로감독관이 사실 조사 후 시정 지시를 내립니다. 체불 금액이 3천만원 이하인 경우 소액사건심판 절차를 통해 비교적 간편하게 민사소송을 제기할 수도 있습니다. 포괄임금제의 경우, 대법원은 근로시간의 산정이 어려운 경우에만 유효하다고 보고 있으며, 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하면 해당 계약이 무효가 됩니다(대법원 2020다300299). 최저임금 위반도 임금체불의 주요 유형으로, 2025년 기준 시간당 최저임금은 10,030원이며, 수습 3개월 이내 근로자에게도 최저임금의 90% 이상을 지급해야 합니다. 5인 미만 사업장이라도 근로기준법상 임금 지급 의무는 동일하게 적용되며, 다만 연장·야간·휴일근로 가산수당은 적용되지 않을 수 있습니다(대법원 2020도16228). 사업주가 폐업하여 임금을 받지 못하는 경우에는 근로복지공단의 체당금 제도를 활용할 수 있으며, 일반체당금(도산 시)과 소액체당금(소송·진정 후)으로 구분됩니다. 법률구조공단에서는 일정 소득 이하 근로자에 대해 무료 법률구조를 지원하고 있으므로, 경제적 부담이 큰 경우 이를 활용하는 것이 좋습니다. 근로기준법 위반 사건의 공소시효는 5년이며, 민사상 임금채권의 소멸시효는 3년입니다.',
    topQuestions: [
      { question: '야근수당 안 주는 회사는 어디에 신고하나요?', slug: 'wage-overtime-unpaid-claim' },
      { question: '월급 일부만 들어왔는데 임금체불인가요?', slug: 'unpaid-wage-report-procedure-timeline' },
      { question: '카톡과 통장내역만으로도 신고할 수 있나요?', slug: 'unpaid-wage-complaint-docs' },
    ],
    relatedHubs: [
      { domain: 'dismissal', label: '해고/권고사직', reason: '임금체불과 부당해고가 함께 발생하는 사건' },
      { domain: 'retirement', label: '퇴직금', reason: '퇴직금 미지급과 임금체불 병합 청구' },
      { domain: 'unemployment', label: '실업급여', reason: '임금체불 퇴사 시 실업급여 수급 연계' },
    ],
    perspectives: [
      {
        label: '임금을 못 받고 있습니다',
        emoji: '🔴',
        checks: [
          '체불 금액(기본급, 수당, 퇴직금, 상여금 등)을 항목별로 정확히 계산하고 급여명세서, 계좌이체 내역 등 증거를 확보해보세요',
          '근로계약서, 취업규칙, 급여명세서, 출퇴근 기록 등 근로관계를 증명할 서류를 빠짐없이 모아보세요',
          '노동청 진정은 퇴직 후 3년 이내(소멸시효)에 제기해야 하며, 빠를수록 회수 가능성이 높아집니다',
        ],
      },
      {
        label: '포괄임금제 문제가 있습니다',
        emoji: '🟡',
        checks: [
          '현재 포괄임금계약이 유효한지 점검하세요. 근로시간 산정이 어렵지 않은 업종이라면 무효일 수 있습니다',
          '실제 근로시간과 포괄임금에 포함된 수당을 비교하여 차액이 발생하는지 계산해보세요',
          '대법원이 포괄임금계약의 최저임금 미달 시 무효로 판단한 판례(2020다300299)를 확인해보세요',
        ],
      },
      {
        label: '사업주인데 문의합니다',
        emoji: '🔵',
        checks: [
          '체불 사실 여부를 확인하고, 미지급 금액과 지연이자(연 20%)를 정확히 산정해보세요',
          '근로자와 분할 지급 합의가 가능한지 검토하되, 합의서를 반드시 서면으로 작성해보세요',
          '노동부의 시정기한 내에 체불 금액을 지급하지 않으면 형사처벌 대상이 되므로 기한을 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '체불 금액 정확 산정',
        desc: '기본급, 연장·야간·휴일근로수당, 연차수당, 퇴직금, 상여금 등 항목별로 체불 금액을 정확히 계산하세요. 급여명세서와 근로계약서를 기준으로 합니다.',
      },
      {
        title: '증거 자료 확보',
        desc: '근로계약서, 급여명세서, 계좌이체 내역, 출퇴근 기록, 업무 지시 문자·카카오톡 대화를 시간순으로 정리하고 원본을 보관하세요.',
      },
      {
        title: '노동청 진정서 작성',
        desc: '관할 지방고용노동청에 임금체불 진정서를 접수하세요. 사업장 정보, 근무기간, 체불 항목·금액, 증거 목록을 명시해야 합니다.',
      },
      {
        title: '지연이자 계산',
        desc: '퇴직일로부터 14일 경과 후 미지급 금액에 대해 연 20%의 지연이자가 발생합니다. 체불 기간이 길수록 이자 부담이 커지므로 정확히 계산하세요.',
      },
      {
        title: '법률구조공단 지원 확인',
        desc: '대한법률구조공단에서 일정 소득 이하 근로자에게 무료 소송 대리를 지원합니다. 임금체불 사건은 지원 대상에 우선 해당하므로 자격을 확인해보세요.',
      },
    ],
    faqs: [
      {
        question: '야근수당 안 주는 회사를 신고하려면 어떻게 하나요?',
        answer:
          '가능합니다. 임금채권의 소멸시효는 3년이므로, 퇴직 후 3년 이내라면 노동청 진정이나 민사소송을 통해 체불 임금을 청구할 수 있습니다.',
      },
      {
        question: '임금체불 소멸시효 3년은 언제부터인가요?',
        answer:
          '임금 지급일 또는 퇴직일부터 3년입니다. 매월 지급되는 임금은 각 지급일이 기산점이고, 퇴직금은 퇴직일 다음 날부터 기산됩니다.',
      },
      {
        question: '지연이자 20%는 어떻게 적용되나요?',
        answer:
          '퇴직 후 14일이 지나도 지급되지 않은 금품에 대해 미지급 기간 동안 연 20%의 지연이자가 발생합니다. 이는 근로기준법 제37조에 따른 법정이율입니다.',
      },
      {
        question: '소액재판 비용은 얼마인가요?',
        answer:
          '청구금액 3천만원 이하 소액사건은 인지대가 저렴하고(수만원 수준) 절차가 간소합니다. 1~2회 변론으로 판결이 나오며, 변호사 없이도 진행할 수 있습니다.',
      },
      {
        question: '사업주가 폐업하면 임금을 받을 수 없나요?',
        answer:
          '근로복지공단의 체당금 제도를 이용할 수 있습니다. 사업주가 도산하면 일반체당금으로 최종 3개월 임금과 3년분 퇴직금을 한도 내에서 대지급받을 수 있습니다.',
      },
      {
        question: '최저임금 위반은 어떻게 신고하나요?',
        answer:
          '관할 지방고용노동청에 진정하면 됩니다. 최저임금 위반 사업주는 3년 이하 징역 또는 2천만원 이하 벌금에 처해지며, 차액을 소급 지급받을 수 있습니다.',
      },
      {
        question: '포괄임금제가 무효가 되는 경우는?',
        answer:
          '근로시간 산정이 어렵지 않은 일반적인 사무직 등에 포괄임금제를 적용하면 무효입니다. 특히 포괄임금이 최저임금에 미달하면 대법원 판례상 계약 자체가 무효가 됩니다.',
      },
      {
        question: '5인 미만 사업장도 임금체불 신고가 되나요?',
        answer:
          '네, 5인 미만 사업장이라도 임금 지급 의무, 최저임금, 퇴직금은 동일하게 적용됩니다. 다만 연장·야간·휴일근로 가산수당(50%)은 적용되지 않을 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '체불 신고/청구',
        emoji: '📋',
        spokes: [
          { title: '임금체불 어디서부터', slug: 'unpaid-wage-where-to-start' },
          { title: '형사고소 절차', slug: 'unpaid-wage-criminal-complaint-procedure' },
          { title: '진정 전체 타임라인', slug: 'wage-complaint-full-procedure-timeline' },
          { title: '소액재판', slug: 'unpaid-wage-small-amount-lawsuit' },
        ],
      },
      {
        label: '퇴직 후 미지급',
        emoji: '📋',
        spokes: [
          { title: '최종급여 지연', slug: 'wage-final-pay-delay-penalty' },
          { title: '퇴직 후 급여 지연', slug: 'wage-resignation-final-pay-delay' },
          { title: '지연이자 계산', slug: 'unpaid-wage-delay-interest-calculation' },
          { title: '체당금 신청', slug: 'unpaid-wage-guarantee-fund-application' },
        ],
      },
      {
        label: '포괄임금제',
        emoji: '📋',
        spokes: [
          { title: '포괄임금 차액 청구', slug: 'wage-pogual-overtime-difference-claim' },
          { title: '대법원 무효 판례', slug: 'wage-pogual-supreme-court-void-cases' },
          { title: '택배기사 포괄임금', slug: 'wage-pogual-delivery-courier' },
          { title: '공장 교대근무 포괄임금', slug: 'wage-pogual-factory-shift' },
        ],
      },
      {
        label: '초과근로수당',
        emoji: '📋',
        spokes: [
          { title: '야간·연장 정확 계산', slug: 'wage-night-overtime-exact-calculation' },
          { title: '미사용 연차수당', slug: 'wage-unused-annual-leave-claim' },
          { title: '휴일근로 미지급', slug: 'wage-holiday-work-unpaid-claim' },
          { title: '연차수당 계산', slug: 'wage-annual-leave-pay-calculation' },
        ],
      },
      {
        label: '최저임금/기본권',
        emoji: '📋',
        spokes: [
          { title: '최저임금 위반 총정리', slug: 'unpaid-wage-minimum-wage-comprehensive' },
          { title: '수습 최저임금 위반', slug: 'unpaid-wage-probation-minimum-wage-violation' },
          { title: '5인 미만 근로자 권리', slug: 'wage-under5-employees-rights' },
          { title: '사업주 형사처벌', slug: 'wage-employer-criminal-penalty' },
        ],
      },
      {
        label: '특수 근로형태',
        emoji: '📋',
        spokes: [
          { title: '프리랜서 근로자성', slug: 'wage-freelancer-worker-status-claim' },
          { title: '하도급 원청 연대책임', slug: 'wage-subcontract-original-liability' },
          { title: '외국인 근로자 체불', slug: 'wage-unpaid-foreign-worker' },
          { title: '커미션 영업직 미지급', slug: 'wage-unpaid-commission-sales' },
        ],
      },
      {
        label: '증거/절차',
        emoji: '📋',
        spokes: [
          { title: '증거 체크리스트', slug: 'unpaid-wage-evidence-checklist' },
          { title: '진정 전 준비사항', slug: 'wage-complaint-pre-filing-checklist' },
          { title: '재산 압류 회수', slug: 'wage-asset-seizure-recovery' },
          { title: '근로감독관 처리 타임라인', slug: 'unpaid-wage-labor-inspector-timeline' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '정액급 포괄임금계약을 체결한 근로자가 실제 지급받은 임금이 최저임금에 미달한 상황',
        issue: '포괄임금계약이 유효한지, 최저임금 미달 여부 판단을 위한 비교대상 시급 산정 방법이 쟁점인 경우',
        prep: '근로계약서, 급여명세서, 실제 근로시간 기록을 확보하고, 포괄임금에서 비교대상 시급을 역산하여 최저임금 미달 여부를 확인해보세요',
      },
      {
        scene: '상시 근로자 수가 5인 전후인 사업장에서 연장근로 가산수당을 받지 못한 상황',
        issue: '해당 사업장이 근로기준법상 5인 이상 사업장에 해당하여 가산임금 규정이 적용되는지가 쟁점인 경우',
        prep: '사업장의 근로자 수 변동 내역, 주휴일 제외 후 상시 근로자 수를 확인하고, 출퇴근 기록과 급여명세서를 확보하여 노동청에 진정을 검토해보세요',
      },
      {
        scene: '퇴직 후 사업주가 원천세액을 이유로 퇴직금 일부를 공제하여 지급한 상황',
        issue: '퇴직소득에 대한 원천세액 공제가 정당한지, 사업주가 이미 납부한 세액의 공제 범위가 쟁점인 경우',
        prep: '퇴직금 산정 내역서, 원천징수영수증, 실제 지급받은 금액을 확인하고, 공제가 부당한 경우 차액 지급을 청구해보세요',
      },
    ],
  },

  dismissal: {
    overview:
      '해고란 사용자가 일방적으로 근로관계를 종료시키는 행위로, 근로기준법 제23조는 정당한 이유 없는 해고를 금지하고 있습니다. 사용자는 해고 사유와 시기를 반드시 서면으로 통지해야 하며(제27조), 이를 위반한 해고는 절차적으로 무효입니다. 해고 30일 전에 예고하지 않으면 30일분의 통상임금을 해고예고수당으로 지급해야 합니다. 부당해고를 당한 근로자는 해고일로부터 3개월 이내에 노동위원회에 구제신청을 할 수 있으며, 부당해고로 인정되면 원직복직 명령과 해고기간 동안의 임금 상당액 지급을 받을 수 있습니다. 근로자가 원직복직을 원하지 않는 경우에는 금전보상명령을 신청할 수 있습니다. 경영상 해고(정리해고)는 긴박한 경영상 필요성, 해고 회피 노력, 합리적 기준에 의한 대상자 선정, 근로자 대표와의 성실한 협의 등 4가지 요건을 모두 충족해야 유효합니다. 권고사직은 형식적으로 자발적 퇴직이지만, 실질적으로 사직 의사가 강요된 경우 부당해고로 인정될 수 있으므로 사직서 작성 전 신중한 판단이 필요합니다. 수습·시용 기간 중 해고도 정당한 사유가 필요하되 본채용 해고보다 판단 기준이 다소 완화됩니다. 기간제 근로자의 경우 2년 초과 사용 시 무기계약으로 전환되며, 갱신 기대권이 인정되면 갱신 거절도 부당해고에 해당합니다. 산전후휴가, 업무상 부상·질병 치료 중, 육아휴직 기간에는 해고가 제한됩니다. 해고 분쟁에서는 사건 초기에 해고통지서, 근로계약서, 취업규칙 등 관련 자료를 확보하고, 녹취·문자·이메일 등 해고 경위를 입증할 증거를 수집하는 것이 핵심입니다.',
    topQuestions: [
      { question: '갑자기 해고 통보를 받았는데 어떻게 해야 하나요?', slug: 'unfair-dismissal-first-steps' },
      { question: '사직서 쓰라고 압박받고 있는데 거부할 수 있나요?', slug: 'recommended-resignation-trap' },
      { question: '해고 구제신청은 어떻게 하나요?', slug: 'unfair-dismissal-labor-commission' },
    ],
    relatedHubs: [
      { domain: 'wage', label: '임금체불', reason: '해고와 임금체불이 함께 발생하는 사건' },
      { domain: 'unemployment', label: '실업급여', reason: '해고 후 실업급여 수급 절차' },
      { domain: 'retirement', label: '퇴직금', reason: '해고 시 퇴직금 청구 문제' },
    ],
    perspectives: [
      {
        label: '부당하게 해고당했습니다',
        emoji: '🔴',
        checks: [
          '해고 사유서를 서면으로 수령했는지 확인하고, 미수령 시 서면 교부를 요구해보세요',
          '해고일자를 정확히 확인하고 3개월 이내에 노동위원회 구제신청을 준비해보세요',
          '해고 통보 전후의 대화, 문자, 이메일 등 증거를 빠짐없이 확보해보세요',
        ],
      },
      {
        label: '권고사직/사직서 압박을 받고 있습니다',
        emoji: '🟡',
        checks: [
          '사직서를 작성하기 전에 권고사직 강요의 증거(녹취·문자)를 먼저 확보해보세요',
          '상사나 인사팀과의 대화를 녹취하고 관련 문자·메신저를 보관해보세요',
          '사직 거부 의사를 서면(이메일·내용증명)으로 명확히 표시해보세요',
        ],
      },
      {
        label: '수습/계약직인데 해고됐습니다',
        emoji: '🔵',
        checks: [
          '수습기간 해고의 경우 업무 적격성을 공정하게 평가했는지 확인해보세요',
          '기간제 근로자라면 계약 갱신에 대한 합리적 기대권이 있었는지 검토해보세요',
          '2년 초과 근무 시 무기계약 전환 대상인지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '해고 사유서·통지서 확보',
        desc: '해고 사유와 시기가 기재된 서면 통지서를 확보해보세요. 구두 해고인 경우 녹취, 문자, 이메일 등으로 해고 사실을 입증할 증거를 수집합니다.',
      },
      {
        title: '증거자료 수집',
        desc: '해고 통보 전후의 녹취록, 문자·카톡 대화, 이메일, 인사평가 기록 등을 시간순으로 정리합니다. 권고사직 강요가 있었다면 구체적 내용을 기록해보세요.',
      },
      {
        title: '노동위원회 구제신청서 작성',
        desc: '해고일로부터 3개월 이내에 사업장 소재지 관할 지방노동위원회에 구제신청서를 제출합니다. 근로계약서, 해고통지서, 취업규칙 등을 첨부해보세요.',
      },
      {
        title: '해고예고수당 청구 여부 확인',
        desc: '30일 전 해고 예고 없이 즉시 해고된 경우 30일분의 통상임금을 해고예고수당으로 청구할 수 있습니다. 예고 여부를 확인해보세요.',
      },
      {
        title: '법률구조공단 무료 변호 신청',
        desc: '소득 기준을 충족하면 대한법률구조공단에서 무료 법률상담과 소송대리를 받을 수 있습니다. 공인노무사 상담도 함께 검토해보세요.',
      },
    ],
    faqs: [
      {
        question: '해고일로부터 3개월이 지나면 구제신청이 불가능한가요?',
        answer:
          '원칙적으로 해고일로부터 3개월 이내에 노동위원회에 구제신청을 해야 합니다. 기한을 넘기면 구제신청은 각하되지만, 민사소송으로 해고무효확인을 구할 수는 있습니다.',
      },
      {
        question: '5인 미만 사업장에서도 부당해고 구제를 받을 수 있나요?',
        answer:
          '근로기준법상 부당해고 조항(제23조)은 상시 5인 이상 사업장에 적용됩니다. 5인 미만 사업장에서는 노동위원회 구제신청은 어렵지만, 민법상 해고권 남용 법리로 다툴 수 있습니다.',
      },
      {
        question: '해고예고수당은 얼마인가요?',
        answer:
          '30일분의 통상임금입니다. 사용자가 30일 전에 해고를 예고하지 않고 즉시 해고하는 경우 반드시 지급해야 하며, 미지급 시 형사처벌 대상입니다.',
      },
      {
        question: '복직과 금전보상 중 어떤 것을 선택해야 하나요?',
        answer:
          '원직복직이 원칙이지만, 복직을 원하지 않으면 금전보상명령을 신청할 수 있습니다. 금전보상은 해고기간 동안의 임금 상당액 이상이 지급됩니다.',
      },
      {
        question: '권고사직도 부당해고에 해당하나요?',
        answer:
          '형식적으로 자발적 퇴직이라도 실질적으로 사직 의사가 강요된 경우 부당해고로 인정될 수 있습니다. 사직서 작성 경위와 강요 증거가 핵심입니다.',
      },
      {
        question: '수습기간 해고 기준은 본채용과 다른가요?',
        answer:
          '수습기간 해고도 정당한 사유가 필요하지만, 본채용 후 해고보다 정당성 판단 기준이 다소 완화됩니다. 다만 업무 적격성을 공정하게 평가했는지가 핵심입니다.',
      },
      {
        question: '정리해고 요건은 무엇인가요?',
        answer:
          '긴박한 경영상 필요성, 해고 회피 노력, 합리적 대상자 선정 기준, 근로자 대표와의 성실한 협의 등 4가지 요건을 모두 충족해야 유효합니다. 하나라도 미충족이면 부당해고입니다.',
      },
      {
        question: '사직서를 썼는데 번복할 수 있나요?',
        answer:
          '사용자가 사직서를 수리하기 전에는 철회가 가능합니다. 다만 사직 의사가 강요에 의한 것이었다면 의사표시 하자를 이유로 취소를 주장할 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '부당해고 구제',
        emoji: '📋',
        spokes: [
          { title: '부당해고 구제 절차 총정리', slug: 'dismissal-relief-procedure-comprehensive' },
          { title: '부당해고 구제신청 방법', slug: 'unfair-dismissal-relief-procedure' },
          { title: '부당해고 증거 수집 방법', slug: 'dismissal-unfair-evidence-collection' },
          { title: '부당해고 금전보상명령', slug: 'dismissal-unfair-monetary-compensation' },
        ],
      },
      {
        label: '권고사직/사직서',
        emoji: '📋',
        spokes: [
          { title: '권고사직의 함정과 대응법', slug: 'dismissal-recommended-resign-trap' },
          { title: '사직서 쓰기 전 확인사항', slug: 'recommended-resignation-before-signing' },
          { title: '합의퇴직서 불리한 조항 5가지', slug: 'resignation-agreement-5-unfavorable-clauses' },
          { title: '강요 사직 대응 방법', slug: 'forced-resignation-defense' },
        ],
      },
      {
        label: '수습/계약직',
        emoji: '📋',
        spokes: [
          { title: '수습 연장의 적법성 기준', slug: 'dismissal-probation-extension-legality' },
          { title: '수습 반복 연장과 부당해고', slug: 'dismissal-probation-repeated-extension-unfair' },
          { title: '기간제 근로자 갱신기대권', slug: 'dismissal-fixed-term-renewal-right' },
          { title: '2년 초과 무기계약 전환', slug: 'dismissal-fixed-term-2year-conversion' },
        ],
      },
      {
        label: '특수 해고 사유',
        emoji: '📋',
        spokes: [
          { title: '징계 절차와 근로자 권리', slug: 'dismissal-disciplinary-hearing-rights' },
          { title: '정리해고 기준과 부당성 판단', slug: 'dismissal-restructuring-unfair-criteria' },
          { title: '사업장 폐업 시 정리해고', slug: 'dismissal-workplace-closure-layoff' },
          { title: 'PIP 후 해고의 정당성', slug: 'dismissal-performance-improvement-plan' },
        ],
      },
      {
        label: '해고 보호 대상',
        emoji: '📋',
        spokes: [
          { title: '임신 중 해고 보호', slug: 'dismissal-pregnancy-protection' },
          { title: '출산휴가 후 복귀 시 해고', slug: 'dismissal-maternity-return-fired' },
          { title: '육아휴직 중 해고', slug: 'dismissal-parental-leave-fired' },
          { title: '병가 후 복직 거부 대응', slug: 'dismissal-sick-leave-return-fired' },
        ],
      },
      {
        label: '해고 유형별 대응',
        emoji: '📋',
        spokes: [
          { title: '구두 해고 시 대응 방법', slug: 'dismissal-verbal-only-no-document' },
          { title: '전보·강등 사실상 해고 대응', slug: 'dismissal-transfer-demotion-constructive' },
          { title: '공익제보 보복 해고 대응', slug: 'dismissal-whistleblower-retaliation' },
          { title: '괴롭힘 신고 보복 해고 대응', slug: 'dismissal-bullying-report-retaliation' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '부당해고 구제신청 후 사용자가 해고를 취소하고 복직 및 임금을 지급했으나 근로자가 금전보상을 원하는 상황',
        issue: '대법원 2024두54683(대법원, 2025.03.13) - 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급한 경우에도, 금전보상명령은 원직복직명령을 대신하는 것이므로 특별한 사정이 없는 한 근로자의 금전보상 구제이익은 소멸하지 않는다고 판시했습니다.',
        prep: '해고 취소 및 복직 통보 자료, 임금 지급 내역, 금전보상명령 신청서를 준비하고 노동위원회 재심판정 시점의 구제이익 존부를 확인해보세요',
      },
      {
        scene: '근로계약기간 만료 후 부당해고 구제신청을 했으나 재심판정 전 근로관계가 종료된 상황',
        issue: '대법원 2025두33276(대법원, 2025.10.16) - 근로자가 부당해고 구제신청 당시 이미 정년·계약기간 만료·폐업 등으로 근로관계가 종료된 경우에는 구제명령을 받을 이익이 소멸하며, 재심판정의 취소를 구할 소의 이익도 없다고 판시했습니다.',
        prep: '근로계약서상 계약기간, 해고일자, 구제신청일자를 확인하고, 금전보상명령 등 대안적 구제수단을 검토해보세요',
      },
      {
        scene: '반복적인 인사고과 차별로 인한 부당노동행위 구제를 신청하려는 상황',
        issue: '대법원 2023두41864(대법원, 2025.04.03) - 수 개의 행위 사이에 부당노동행위 의사의 단일성, 행위의 동일성·동종성, 시간적 연속성이 인정되면 계속하는 행위에 해당하여 마지막 행위 종료일로부터 3개월 이내에 구제신청이 가능하다고 판시했습니다.',
        prep: '인사고과 결과 통보 일자, 승격 심사 기록, 차별적 처우의 구체적 내역을 시간순으로 정리하고 구제신청 기한을 확인해보세요',
      },
    ],
  },

  retirement: {
    overview:
      '퇴직금은 근로기준법 제34조 및 근로자퇴직급여보장법에 따라 1년 이상 계속 근로하고 주 15시간 이상 일한 근로자가 퇴직할 때 지급받는 법정 급여입니다. 퇴직금 산정 공식은 계속근로연수 x 30일분 평균임금이며, 평균임금은 퇴직 전 3개월간 지급된 임금 총액을 그 기간의 총 일수로 나눈 금액입니다. 평균임금에는 기본급뿐 아니라 정기적·일률적으로 지급되는 식대, 상여금, 연장·야간·휴일수당 등이 포함되며, 임시적·불확정적 금품은 제외됩니다. 사용자는 퇴직일로부터 14일 이내에 퇴직금을 지급해야 하며, 이를 초과하면 미지급 퇴직금에 대해 연 20%의 지연이자가 발생합니다. 퇴직연금제도는 확정급여형(DB), 확정기여형(DC), 개인형퇴직연금(IRP) 세 가지가 있으며, DB형은 퇴직 시 평균임금 기준으로 산정되고, DC형은 매년 사용자가 납입한 부담금과 운용수익의 합이 퇴직급여가 됩니다. 퇴직금 중간정산은 주택구입, 전세금 부담, 6개월 이상 요양, 파산·개인회생, 임금피크제 적용, 소득 감소에 따른 생활 곤란, 천재지변 등 7가지 법정 사유에 해당하는 경우에만 가능합니다. 퇴직금 청구권의 소멸시효는 퇴직일로부터 3년이므로, 이 기간 내에 고용노동부 진정, 민사소송, 지급명령 신청 등의 방법으로 권리를 행사해야 합니다. 퇴직금을 분할하여 월급에 포함 지급하는 것은 근로자퇴직급여보장법 위반으로 무효이며, 퇴직금 포기 각서도 원칙적으로 효력이 없습니다.',
    topQuestions: [
      { question: '퇴직금은 어떻게 계산하나요?', slug: 'retirement-pay-formula' },
      { question: '퇴직금을 안 주면 어디에 신고하나요?', slug: 'retirement-pay-complaint' },
      { question: '인센티브도 퇴직금에 포함되나요?', slug: 'retirement-incentive-bonus-average-wage-inclusion' },
    ],
    relatedHubs: [
      { domain: 'wage', label: '임금체불', reason: '퇴직금과 미지급 임금 병합 청구' },
      { domain: 'dismissal', label: '해고/권고사직', reason: '부당해고 시 퇴직금 문제' },
    ],
    perspectives: [
      {
        label: '퇴직금을 못 받고 있습니다',
        emoji: '🔴',
        checks: [
          '퇴직금을 정확히 계산하고, 회사가 제시한 금액과 비교해보세요',
          '퇴직일로부터 14일이 경과했는지 확인하고, 지연이자(연 20%) 청구를 검토해보세요',
          '고용노동부 진정 또는 민사소송(지급명령 신청) 중 적합한 방법을 준비해보세요',
        ],
      },
      {
        label: '퇴직금 계산이 맞는지 확인하고 싶습니다',
        emoji: '🟡',
        checks: [
          '평균임금에 포함되어야 할 항목(식대·교통비·상여금·연장수당 등)이 누락되지 않았는지 점검해보세요',
          '연장·야간·휴일수당이 평균임금에 정확히 반영되었는지 확인해보세요',
          '중간정산을 받은 이력이 있다면 정산 이후 기간에 대한 퇴직금이 정확한지 확인해보세요',
        ],
      },
      {
        label: '특수한 상황에서의 퇴직금이 궁금합니다',
        emoji: '🔵',
        checks: [
          '1년 미만 근무, 일용직, 파견직 등 자신의 고용형태에서 퇴직금 수급 자격이 있는지 확인해보세요',
          '사업양도·합병 시 퇴직금 승계 여부를 확인해보세요',
          '근로자 사망 시 유족이 퇴직금을 청구할 수 있는지 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '평균임금 정확 산정',
        desc: '퇴직 전 3개월간 지급된 임금 총액(기본급+수당+상여금)을 해당 기간 총 일수로 나누어 1일 평균임금을 산정해보세요. 포함/제외 항목을 꼼꼼히 확인합니다.',
      },
      {
        title: '근로계약서·급여명세서 확보',
        desc: '근로계약서, 최근 3개월 급여명세서, 재직증명서를 확보하여 계속근로기간과 임금 항목을 입증할 자료를 준비해보세요.',
      },
      {
        title: '퇴직연금 유형 확인(DB/DC/IRP)',
        desc: '가입한 퇴직연금 유형에 따라 퇴직급여 산정 방식이 달라집니다. DB형은 평균임금 기준, DC형은 적립금+운용수익이 퇴직급여가 됩니다.',
      },
      {
        title: '14일 경과 시 내용증명 발송',
        desc: '퇴직일로부터 14일이 지나도 퇴직금이 미지급되면 내용증명을 발송하여 지급을 촉구하고, 지연이자(연 20%) 청구 의사를 명시해보세요.',
      },
      {
        title: '노동청 진정 또는 지급명령 준비',
        desc: '내용증명 발송 후에도 미지급이 계속되면 관할 고용노동관서에 진정을 제기하거나, 법원에 지급명령을 신청해보세요. 소액이면 소액사건심판이 빠릅니다.',
      },
    ],
    faqs: [
      {
        question: '퇴직금은 어떻게 계산하나요?',
        answer:
          '퇴직금 = 1일 평균임금 x 30일 x (계속근로기간/365일)입니다. 평균임금은 퇴직 전 3개월간 임금 총액을 해당 기간의 총 일수로 나눈 금액입니다.',
      },
      {
        question: '식대와 상여금도 퇴직금에 포함되나요?',
        answer:
          '정기적·일률적으로 지급되는 식대·교통비·상여금은 평균임금에 포함됩니다. 실비변상적 성격이거나 임시적·불확정적 금품은 제외될 수 있습니다.',
      },
      {
        question: '수습기간도 퇴직금 산정에 포함되나요?',
        answer:
          '수습기간도 계속근로기간에 포함됩니다. 입사일부터 퇴직일까지의 전체 기간이 1년 이상이면 퇴직금 수급 자격이 있습니다.',
      },
      {
        question: '퇴직연금과 퇴직금은 어떻게 다른가요?',
        answer:
          '퇴직금은 퇴직 시 일시금으로 받는 것이고, 퇴직연금은 재직 중 적립하여 퇴직 후 수령합니다. DB형은 퇴직금과 유사하게 산정되고, DC형은 적립금+운용수익이 급여가 됩니다.',
      },
      {
        question: '14일 내 미지급 시 지연이자는 얼마인가요?',
        answer:
          '퇴직일 기준 14일 경과 후부터 미지급 퇴직금에 대해 연 20%의 지연이자가 발생합니다. 사용자의 지급 능력이 없는 등 특별한 사정이 있으면 감액될 수 있습니다.',
      },
      {
        question: '중간정산이 가능한 사유는 무엇인가요?',
        answer:
          '주택구입, 전세금 부담, 6개월 이상 요양, 파산·개인회생, 임금피크제 적용, 소득감소로 인한 생활곤란, 천재지변 등 7가지 법정 사유에 해당하면 가능합니다.',
      },
      {
        question: '소멸시효 3년이 지나면 퇴직금을 못 받나요?',
        answer:
          '원칙적으로 퇴직일로부터 3년이 지나면 청구권이 소멸합니다. 다만 사용자가 시효 완성 후에도 지급을 약속했거나 채무를 승인한 경우에는 시효 이익 포기로 볼 수 있습니다.',
      },
      {
        question: '1년 미만 근무하면 퇴직금을 못 받나요?',
        answer:
          '원칙적으로 1년 이상 계속 근로해야 퇴직금이 발생합니다. 다만 계약 만료 후 재계약하여 실질적으로 계속 근로한 경우에는 통산하여 1년 이상이면 수급 자격이 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '퇴직금 계산/산정',
        emoji: '📋',
        spokes: [
          { title: '퇴직금 계산 공식 총정리', slug: 'retirement-comprehensive-calculation-formula' },
          { title: '퇴직금 포함/제외 항목', slug: 'retirement-pay-included-excluded-items' },
          { title: '상여금·성과급 포함 여부', slug: 'retirement-bonus-performance-included' },
          { title: '평균임금 분쟁 대응법', slug: 'retirement-average-wage-dispute' },
        ],
      },
      {
        label: '미지급/청구',
        emoji: '📋',
        spokes: [
          { title: '퇴직금 청구 어디서부터', slug: 'retirement-pay-claim-where-to-start' },
          { title: '퇴직금 청구 채널 비교', slug: 'retirement-claim-channel-comparison' },
          { title: '지연이자 연 20% 청구법', slug: 'retirement-delay-interest-20percent' },
          { title: '노동청 진정 절차', slug: 'unpaid-retirement-report-procedure' },
        ],
      },
      {
        label: '퇴직연금',
        emoji: '📋',
        spokes: [
          { title: 'DB형과 DC형의 차이', slug: 'retirement-dc-db-type-difference' },
          { title: 'IRP 이전 의무와 방법', slug: 'retirement-irp-transfer-requirement' },
          { title: '퇴직소득세 계산법', slug: 'retirement-severance-tax-calculation' },
          { title: '분할지급 약정의 무효', slug: 'retirement-installment-payment-invalid' },
        ],
      },
      {
        label: '특수 근로형태',
        emoji: '📋',
        spokes: [
          { title: '파견근로자 퇴직금 청구', slug: 'retirement-dispatch-worker-employer' },
          { title: '용역근로자 퇴직금 청구', slug: 'retirement-temp-agency-worker-claim' },
          { title: '건설 일용직 퇴직금', slug: 'retirement-construction-daily-claim' },
          { title: '프리랜서 퇴직금 자격', slug: 'retirement-freelancer-eligibility' },
        ],
      },
      {
        label: '기간/시효',
        emoji: '📋',
        spokes: [
          { title: '퇴직금 소멸시효 3년', slug: 'retirement-statute-of-limitations' },
          { title: '시효 만료 후 부활 가능성', slug: 'retirement-statute-expired-revival' },
          { title: '퇴직 시기가 퇴직금에 미치는 영향', slug: 'retirement-resignation-timing-impact' },
          { title: '1년 미만 근무 자격 여부', slug: 'retirement-less-than-1year-eligibility' },
        ],
      },
      {
        label: '특수 상황',
        emoji: '📋',
        spokes: [
          { title: '합병/분할 시 퇴직금 승계', slug: 'retirement-company-merger-split-succession' },
          { title: '사망 시 유족 퇴직금 청구', slug: 'retirement-death-survivors-claim' },
          { title: '징계해고 시 퇴직금 지급', slug: 'retirement-disciplinary-fired-pay' },
          { title: '임원 퇴직금 한도', slug: 'retirement-executive-severance-limit' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '회사가 성과에 연동하여 지급하던 인센티브를 퇴직금 산정 시 평균임금에서 제외한 상황',
        issue: '대법원 2021다248299(대법원, 2026.01.29) - 사용자가 근로자에게 지급하는 금품이 임금에 해당하려면 근로의 대가로 지급되는 것이어야 하며, 정기적·일률적으로 지급되고 지급의무가 있는 금품은 평균임금 산정의 기초가 되는 임금에 해당한다고 판시했습니다.',
        prep: '급여명세서, 인센티브 지급 규정, 취업규칙에서 해당 금품의 지급 근거와 정기성·일률성을 확인해보세요',
      },
      {
        scene: '회사가 매년 당기순이익 실현을 조건으로 지급하던 특별상여금이 퇴직금에 포함되는지 다투는 상황',
        issue: '대법원 2022다255454(대법원, 2026.01.29) - 기업 내부의 특정 관행이 근로계약의 내용을 이루려면 규범적 사실로서 명확히 승인되거나 사실상의 제도로 확립되어 있어야 하며, 단순한 관행만으로는 임금성을 인정하기 어렵다고 판시했습니다.',
        prep: '특별상여금 지급 이력, 지급 규정 유무, 전 직원 대상 지급 여부 등을 확인하고 관행의 규범적 확립 여부를 검토해보세요',
      },
      {
        scene: '퇴직금 소멸시효 3년이 경과한 후 퇴직금을 청구하려는 상황',
        issue: '대법원 2024다294705(대법원, 2025.05.29) - 채권의 소멸시효가 완성된 후에도 채무자가 시효 이익을 포기하거나 채무를 승인하는 등의 행위를 하였다면 신의성실 원칙에 따라 소멸시효 완성을 주장할 수 없다고 판시했습니다.',
        prep: '퇴직일자와 시효 경과 여부를 확인하고, 사용자가 시효 완성 후 퇴직금 지급을 약속하거나 채무를 승인한 증거가 있는지 검토해보세요',
      },
    ],
  },

  unemployment: {
    overview:
      '실업급여는 고용보험법에 따라 비자발적으로 이직한 근로자의 생활 안정과 재취업을 지원하기 위해 지급되는 급여입니다. 가장 대표적인 형태인 구직급여를 받으려면 이직 전 18개월 중 피보험 단위기간이 합산하여 180일 이상이어야 하고, 근로의 의사와 능력이 있음에도 취업하지 못한 상태여야 합니다. 이직 사유가 핵심 요건인데, 경영상 해고, 권고사직, 계약 만료 등 비자발적 사유가 원칙이지만, 자발적 퇴사라 하더라도 임금체불, 근로조건 저하, 직장 내 괴롭힘, 통근 곤란, 질병, 가족 돌봄 등 고용보험법 시행규칙 별표 2에서 정한 정당한 사유에 해당하면 수급자격이 인정됩니다. 실제로 서울행정법원은 부서 이동으로 인해 임금이 46% 이상 하락하게 된 사안에서 정당한 이직사유를 인정한 바 있습니다(2014구합2270). 구직급여 금액은 이직 전 평균임금의 60%로 산정되며, 2025년 기준 1일 상한액은 66,000원, 하한액은 최저임금의 80% 수준입니다. 수급 기간은 피보험기간과 연령에 따라 120일에서 270일까지 차등 적용됩니다. 퇴직 후 12개월 이내에 신청해야 하며, 이 기한을 넘기면 남은 수급일수와 관계없이 급여를 받을 수 없으므로 주의가 필요합니다. 수급 중에는 1~4주마다 고용센터에 출석하여 실업인정(구직활동 확인)을 받아야 하며, 해외 체류 중 제3자가 대리 신고하는 등 부정한 방법으로 급여를 수령하면 지급 제한 및 반환 명령 처분을 받게 됩니다(대구지법 2018구합23680). 최근에는 예술인, 특수형태근로종사자(플랫폼 노동자 포함), 자영업자까지 고용보험 적용이 확대되어 수급 대상이 넓어지고 있습니다. 조기재취업수당 제도도 활용할 수 있는데, 수급기간 중 안정된 직업에 재취직하면 남은 구직급여의 일정 비율을 일시금으로 받을 수 있어 빠른 재취업을 장려하고 있습니다. 연장급여(훈련연장, 개별연장, 특별연장)는 경기 침체기나 개인 사정에 따라 수급기간을 추가로 연장받을 수 있는 제도입니다.',
    topQuestions: [
      { question: '자진퇴사했는데 실업급여 받을 수 있나요?', slug: 'unemployment-voluntary-quit-benefits' },
      { question: '회사가 이직확인서를 안 보내주면 어떻게 하나요?', slug: 'unemployment-full-process' },
      { question: '실업급여 받으면서 알바하면 안 되나요?', slug: 'unemployment-part-time-income-rules' },
    ],
    relatedHubs: [
      { domain: 'dismissal', label: '해고/권고사직', reason: '해고 후 실업급여 수급 연계' },
      { domain: 'wage', label: '임금체불', reason: '임금체불 퇴사 시 실업급여 자격' },
      { domain: 'retirement', label: '퇴직금', reason: '퇴직금과 실업급여 동시 청구' },
    ],
    perspectives: [
      {
        label: '비자발적으로 이직했습니다',
        emoji: '🔴',
        checks: [
          '이직확인서가 정확하게 작성되었는지 확인하고, 이직 사유 코드가 비자발적으로 기재되어 있는지 확인해보세요',
          '고용보험 가입이력을 확인하여 피보험 단위기간 180일 이상 요건을 충족하는지 점검해보세요',
          '구직급여 신청 기한인 퇴직 후 12개월을 넘기지 않았는지 확인해보세요',
        ],
      },
      {
        label: '자발적으로 퇴사했습니다',
        emoji: '🟡',
        checks: [
          '임금체불, 근로조건 위반, 직장 내 괴롭힘 등 정당한 이직사유에 해당하는지 고용보험법 시행규칙 별표 2를 확인해보세요',
          '임금체불 내역, 근로조건 변경 통보서, 진단서 등 정당한 사유를 뒷받침할 증거를 확보해보세요',
          '질병, 가족돌봄, 통근곤란 등 불가피한 사유라면 관련 증빙서류를 준비해보세요',
        ],
      },
      {
        label: '수급 중 궁금한 것이 있습니다',
        emoji: '🔵',
        checks: [
          '구직활동 인정 범위를 확인하고, 온라인 교육이나 자격증 취득도 인정되는지 확인해보세요',
          '부업이나 아르바이트 소득이 있다면 반드시 고용센터에 신고하여 부정수급을 예방해보세요',
          '남은 수급일수의 절반 이상이 남은 상태에서 재취업하면 조기재취업수당 조건을 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '이직확인서 확인',
        desc: '사업주가 제출한 이직확인서의 이직 사유, 피보험기간, 평균임금이 정확한지 확인하세요. 사실과 다르면 고용센터에 정정을 요청할 수 있습니다.',
      },
      {
        title: '고용보험 피보험기간 확인',
        desc: '고용보험 홈페이지나 고용센터에서 피보험 단위기간 180일 이상 요건을 충족하는지 확인하세요. 일용직, 초단시간 근로도 합산됩니다.',
      },
      {
        title: '구직급여 금액 계산',
        desc: '이직 전 3개월 평균임금의 60%가 1일 구직급여액입니다. 상한액(66,000원)과 하한액을 확인하고 예상 수급액을 미리 계산해보세요.',
      },
      {
        title: '온라인 수급자격 사전확인',
        desc: '고용보험 홈페이지에서 수급자격 사전확인 서비스를 이용하면 방문 전에 수급 가능 여부를 대략 확인할 수 있습니다.',
      },
      {
        title: '워크넷 구직등록',
        desc: '수급자격 인정 신청 전에 워크넷에 구직등록을 완료해야 합니다. 구직등록은 온라인으로 간편하게 할 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '자발적으로 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '임금체불, 근로조건 저하, 직장 내 괴롭힘, 질병, 가족돌봄, 통근곤란 등 고용보험법 시행규칙 별표 2에서 정한 정당한 사유에 해당하면 자발적 퇴사도 수급자격이 인정됩니다. 서울행정법원은 부서 이동으로 임금이 46% 이상 하락한 사안에서 정당한 이직사유를 인정하였습니다.',
      },
      {
        question: '실업급여 수급 중 알바해도 되나요?',
        answer:
          '가능하지만 반드시 고용센터에 신고해야 합니다. 월 60시간 미만 단기 근로는 수급자격을 유지하면서 취업한 날의 급여만 차감됩니다. 미신고 시 부정수급으로 처벌받을 수 있습니다.',
      },
      {
        question: '실업급여 신청 기한은 언제까지인가요?',
        answer:
          '퇴직일 다음 날부터 12개월 이내에 신청해야 합니다. 이 기한을 넘기면 남은 수급일수와 관계없이 급여를 받을 수 없으므로 퇴직 후 가능한 빨리 고용센터를 방문하세요.',
      },
      {
        question: '실업급여 금액은 어떻게 계산하나요?',
        answer:
          '이직 전 3개월 평균임금의 60%가 1일 구직급여액이며, 2025년 기준 상한액은 66,000원입니다. 수급기간은 피보험기간과 연령에 따라 120~270일로 차등 적용됩니다.',
      },
      {
        question: '구직활동 인정 기준은 무엇인가요?',
        answer:
          '워크넷 입사지원, 채용박람회 참석, 직업훈련, 자격증 시험 응시, 고용센터 상담 등이 구직활동으로 인정됩니다. 1~4주 단위 실업인정일에 활동 내역을 보고해야 합니다.',
      },
      {
        question: '연장급여는 어떤 경우에 받나요?',
        answer:
          '훈련연장급여(직업훈련 수강 시), 개별연장급여(소득·재산 기준 충족 시), 특별연장급여(대량실업 위기 시 정부 고시)의 세 가지가 있으며, 각각 최대 2년까지 수급기간이 연장될 수 있습니다.',
      },
      {
        question: '부정수급하면 어떤 처벌을 받나요?',
        answer:
          '거짓이나 부정한 방법으로 급여를 받으면 지급 제한, 반환 명령, 추가징수(최대 5배)의 제재를 받습니다. 대구지법은 해외 체류 중 형이 대리 신고한 사안에서 부정수급을 인정하였습니다(2018구합23680).',
      },
      {
        question: '조기재취업수당은 어떻게 받나요?',
        answer:
          '소정급여일수를 절반 이상 남기고 안정된 직업에 재취업하여 12개월 이상 고용을 유지하면 남은 급여의 절반을 일시금으로 받습니다. 대법원은 대표이사 취임도 재취직에 해당한다고 판시하였습니다(2009두19892).',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '자진퇴사/권고사직',
        emoji: '📋',
        spokes: [
          { title: '자발적 퇴사도 실업급여 받을 수 있나요', slug: 'voluntary-quit-unemployment-eligibility' },
          { title: '자진퇴사 실업급여 예외 인정 총정리', slug: 'unemployment-voluntary-quit-exception-comprehensive' },
          { title: '사업주 강요 퇴직 실업급여', slug: 'unemployment-employer-forced-resignation' },
          { title: '권고사직 실업급여', slug: 'recommended-resignation-unemployment-benefit' },
        ],
      },
      {
        label: '계약직/일용직',
        emoji: '📋',
        spokes: [
          { title: '근로조건 위반 퇴사 실업급여', slug: 'unemployment-contract-breach-quit' },
          { title: '파견 계약 종료 실업급여', slug: 'unemployment-dispatch-contract-end' },
          { title: '건설 일용직 실업급여', slug: 'unemployment-construction-daily-apply' },
          { title: '단기·반복 근로자 실업급여', slug: 'unemployment-seasonal-short-repeat' },
        ],
      },
      {
        label: '신청 절차/서류',
        emoji: '📋',
        spokes: [
          { title: '구직활동 인정 유형 총정리', slug: 'unemployment-recognized-job-search-activity-guide' },
          { title: '신청기한 놓쳤을 때 구제', slug: 'unemployment-late-application-rescue' },
          { title: '구직활동 인정 종류', slug: 'unemployment-job-search-recognized-types' },
          { title: '첫 방문 체크리스트', slug: 'first-application-employment-center-checklist' },
        ],
      },
      {
        label: '수급 중 궁금한 것',
        emoji: '📋',
        spokes: [
          { title: '수급 중 부업 소득', slug: 'unemployment-side-income-during-benefit' },
          { title: '급여 감액 사유', slug: 'unemployment-benefit-reduction-penalty' },
          { title: '조기재취업수당', slug: 'unemployment-early-reemployment-bonus' },
          { title: '수급 중 시간제 소득 한도', slug: 'unemployment-part-time-income-limit' },
        ],
      },
      {
        label: '특수상황',
        emoji: '📋',
        spokes: [
          { title: '65세 이상 예외', slug: 'unemployment-over65-exclusion-exception' },
          { title: '전역 군인 실업급여', slug: 'unemployment-military-discharge-eligibility' },
          { title: '프리랜서·예술인 실업급여', slug: 'unemployment-freelancer-artist-benefit' },
          { title: '출산·육아 퇴사 실업급여', slug: 'unemployment-maternity-voluntary-quit' },
        ],
      },
      {
        label: '연장/특별급여',
        emoji: '📋',
        spokes: [
          { title: '훈련연장급여', slug: 'unemployment-training-extended-benefit' },
          { title: '개별연장급여', slug: 'unemployment-individual-extended-benefit' },
          { title: '특별연장급여', slug: 'unemployment-special-extended-benefit' },
          { title: '급여 금액 산정 총정리', slug: 'unemployment-comprehensive-benefit-amount-guide' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '인바운드 상담원이 멀티부서로 부서 이동 지시를 받아 월 평균 임금이 46% 이상 하락하게 되자 퇴사한 상황',
        issue: '근로조건 저하로 인한 자발적 퇴사가 고용보험법상 정당한 이직사유에 해당하는지가 쟁점인 경우',
        prep: '채용 시 근로조건과 변경된 근로조건을 비교하는 자료, 급여명세서, 부서 이동 통보서를 확보하고 고용센터에 수급자격 인정을 신청해보세요',
      },
      {
        scene: '구직급여 수급 중 해외에 체류하면서 가족에게 대리 신고를 맡겨 급여를 수령한 상황',
        issue: '제3자의 대리 신청이 부정수급에 해당하여 급여 지급 제한 및 반환 명령 대상이 되는지가 쟁점인 경우',
        prep: '출입국 기록, 재취업 노력신고 내역을 확인하고, 부정수급 해당 여부를 변호사와 상담하여 반환 범위를 검토해보세요',
      },
      {
        scene: '구직급여 수급 중 주식회사 대표이사로 취임하여 조기재취업수당을 신청한 상황',
        issue: '대표이사 취임이 고용보험법상 안정된 직업에 재취직한 경우에 해당하는지가 쟁점인 경우',
        prep: '이사 선임결의서, 사업자등록증, 해당 회사의 사업 지속가능성 자료를 준비하여 조기재취업수당 요건 충족 여부를 확인해보세요',
      },
    ],
  },

  'industrial-accident1': {
    overview:
      '산업재해(산재)는 산업재해보상보험법에 따라 업무상 사유로 발생한 부상, 질병, 장해 또는 사망을 의미합니다. 산재 신청은 근로복지공단에 요양급여 신청서를 제출하여 시작되며, 사업주가 산재 접수를 거부하더라도 근로자가 직접 신청할 수 있습니다. 업무상 재해로 인정되면 요양급여(치료비), 휴업급여(임금 대체), 장해급여, 유족급여 등을 받을 수 있습니다. 산재 승인의 핵심은 업무와 재해 사이의 상당인과관계 입증이며, 업무 중 사고는 비교적 인정이 쉬우나 직업병이나 출퇴근 재해는 별도 요건을 충족해야 합니다. 사업주가 산재 접수를 거부하거나 압박하는 경우가 빈번하지만, 이는 산재보험법 위반으로 처벌 대상입니다. 사업주의 동의 없이도 산재 신청이 가능하며, 산재 신청을 이유로 불이익을 주는 것은 법으로 금지되어 있습니다. 사고 발생 즉시 병원에서 산재로 접수하고, 사고 경위서와 목격자 진술을 확보하는 것이 중요합니다. 산재 불승인 시에는 90일 이내에 심사청구를 할 수 있습니다.',
    perspectives: [
      {
        label: '산재를 신청하려고 합니다',
        emoji: '🔴',
        checks: [
          '사고 경위서를 작성하고 목격자 진술서를 확보했는지 확인해보세요',
          '병원에서 산재로 접수하여 치료를 시작했는지 확인해보세요',
          '근로복지공단에 요양급여 신청서를 제출했는지 확인해보세요',
        ],
      },
      {
        label: '사업주가 산재 접수를 거부합니다',
        emoji: '🟡',
        checks: [
          '사업주 동의 없이도 근로자가 직접 산재 신청할 수 있음을 알고 계신지 확인해보세요',
          '사업주의 산재 접수 거부 및 불이익 압박에 대한 증거를 확보해보세요',
          '고용노동부에 사업주의 산재 접수 방해를 신고할 수 있음을 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '사고 경위 기록',
        desc: '사고 발생 일시, 장소, 경위, 부상 부위를 상세히 기록합니다. 사진, CCTV, 목격자 연락처를 확보합니다.',
      },
      {
        title: '산재 접수 및 치료 시작',
        desc: '병원에서 산재로 접수하여 치료를 시작합니다. 건강보험이 아닌 산재보험으로 치료받아야 합니다.',
      },
      {
        title: '요양급여 신청서 제출',
        desc: '근로복지공단에 요양급여 신청서, 의료기관 초진 소견서, 사고 경위서를 제출합니다.',
      },
      {
        title: '사업주 거부 시 대처',
        desc: '사업주가 산재 접수를 거부하면 근로자가 직접 근로복지공단에 신청합니다. 접수 거부 증거를 보관합니다.',
      },
      {
        title: '전문가 상담 준비',
        desc: '산재 전문 노무사 또는 변호사 상담 시 사고 경위서, 진단서, 근로계약서, 출퇴근 기록을 지참합니다.',
      },
    ],
    faqs: [
      {
        question: '산재 신청은 어디에 하나요?',
        answer:
          '관할 근로복지공단 지사에 요양급여 신청서를 제출합니다. 온라인(고용·산재보험 토탈서비스)으로도 신청 가능합니다.',
      },
      {
        question: '사업주가 안 해준다고 하면 어떻게 하나요?',
        answer:
          '사업주 동의 없이도 근로자가 직접 산재 신청할 수 있습니다. 사업주의 접수 거부나 불이익 처우는 법 위반입니다.',
      },
      {
        question: '출퇴근 중 사고도 산재인가요?',
        answer:
          '2018년부터 출퇴근 재해도 산재로 인정됩니다. 합리적인 경로와 방법으로 출퇴근하던 중 발생한 사고가 해당됩니다.',
      },
      {
        question: '산재 신청하면 불이익을 받나요?',
        answer:
          '산재 신청을 이유로 해고 등 불이익을 주는 것은 근로기준법과 산재보험법에 의해 금지됩니다. 위반 시 처벌 대상입니다.',
      },
      {
        question: '직업병도 산재로 인정되나요?',
        answer:
          '업무상 유해 요인에 노출되어 발생한 질병은 직업병으로 산재 인정 대상입니다. 역학조사 등을 통해 인과관계를 입증해야 합니다.',
      },
      {
        question: '산재 치료 중 급여는 어떻게 되나요?',
        answer:
          '요양 기간 중 취업하지 못한 기간에 대해 평균임금의 70%를 휴업급여로 지급받습니다.',
      },
      {
        question: '산재 승인까지 얼마나 걸리나요?',
        answer:
          '일반적으로 업무상 사고는 14일, 질병은 한 달 이상 소요됩니다. 조사가 필요한 경우 추가 기간이 걸릴 수 있습니다.',
      },
      {
        question: '산재 불승인 시 어떻게 하나요?',
        answer:
          '불승인 결정에 대해 90일 이내에 근로복지공단 심사위원회에 심사청구를 할 수 있으며, 이에 불복하면 재심사청구나 행정소송이 가능합니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '산재 신청',
        emoji: '📋',
        spokes: [
          { title: '산재 시작', slug: 'injured-where-to-start' },
          { title: '산재 신청 절차', slug: 'workers-comp-claim-process' },
          { title: '요양 청구', slug: 'workers-comp-medical-claim-process' },
          { title: '출퇴근 재해 인정', slug: 'commute-accident-recognition' },
        ],
      },
      {
        label: '급여/보상',
        emoji: '📋',
        spokes: [
          { title: '휴업급여', slug: 'workers-comp-leave-benefit' },
          { title: '일시장해급여', slug: 'workers-comp-temporary-disability' },
          { title: '장해등급 절차', slug: 'disability-benefit-grade-process' },
          { title: '유족급여', slug: 'workers-comp-survivor-benefit' },
        ],
      },
      {
        label: '질병/재활',
        emoji: '📋',
        spokes: [
          { title: '직업병 인정', slug: 'occupational-disease-recognition' },
          { title: '재활', slug: 'workers-comp-rehabilitation' },
        ],
      },
      {
        label: '불승인/책임',
        emoji: '📋',
        spokes: [
          { title: '불승인 재신청', slug: 'reapply-after-rejection' },
          { title: '사업주 형사책임', slug: 'employer-criminal-liability-accident' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '공장에서 작업 중 기계에 손이 끼여 부상을 입었으나 사업주가 건강보험으로 치료하라고 하는 상황',
        issue: '사업주가 산재 접수를 거부하며 산재보험료 인상을 우려하는 경우',
        prep: '사고 현장 사진, 목격자 진술을 확보하고 근로복지공단에 직접 요양급여 신청서를 제출해보세요',
      },
      {
        scene: '장기간 반복 작업으로 인해 손목 터널 증후군이 발생한 상황',
        issue: '직업병으로서 업무와 질병 사이의 인과관계 입증이 필요한 경우',
        prep: '진단서, 근무 환경 자료, 작업 내용 기록을 확보하고 산재 전문 노무사와 상담해보세요',
      },
    ],
  },

  'industrial-accident2': {
    overview:
      '산재 급여 신청 및 사후 절차는 산업재해보상보험법에 따라 규율됩니다. 산재가 승인된 후에는 요양급여, 휴업급여, 장해급여, 간병급여, 유족급여 등 다양한 보험급여를 신청할 수 있습니다. 요양 종결 후에는 장해등급 판정을 받게 되며, 장해등급에 따라 일시금 또는 연금 형태의 장해급여가 지급됩니다. 급여 불승인이나 장해등급 결정에 불복하는 경우 90일 이내에 근로복지공단 심사위원회에 심사청구를 할 수 있고, 심사 결정에 불복하면 산업재해보상보험 재심사위원회에 재심사청구를 하거나 행정소송을 제기할 수 있습니다. 장해등급은 1급부터 14급까지 있으며, 노동 능력 상실 정도에 따라 결정됩니다. 장해등급이 실제 상태보다 낮게 판정되는 경우가 빈번하므로, 판정 전 전문의 소견서를 미리 준비하는 것이 중요합니다. 치료 종결 후 직장 복귀 시에는 직장복귀지원금, 직업훈련 등의 지원 제도를 활용할 수 있으며, 원직복귀가 어려운 경우 직업재활급여를 통해 새로운 직업 훈련을 받을 수도 있습니다.',
    perspectives: [
      {
        label: '산재 급여를 신청하려고 합니다',
        emoji: '🔴',
        checks: [
          '산재 승인 후 요양급여, 휴업급여 등 필요한 급여 신청을 빠짐없이 했는지 확인해보세요',
          '요양 연장이 필요한 경우 연장 신청 기한을 확인해보세요',
          '장해등급 판정을 위한 전문의 소견서를 준비했는지 확인해보세요',
        ],
      },
      {
        label: '급여가 불승인되었거나 등급이 낮습니다',
        emoji: '🟡',
        checks: [
          '불승인 또는 등급 결정 통지서를 받은 날로부터 90일 이내에 심사청구를 할 수 있는지 확인해보세요',
          '불승인 사유를 정확히 파악하고 반박 자료를 준비해보세요',
          '장해등급 재판정을 위한 추가 의학적 소견을 확보할 수 있는지 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '급여 신청서 제출',
        desc: '근로복지공단에 해당 급여(휴업급여, 장해급여 등) 신청서와 필요 서류를 제출합니다.',
      },
      {
        title: '장해등급 판정 준비',
        desc: '요양 종결 전에 주치의 및 전문의 소견서를 확보합니다. 장해 부위별 기능 검사 결과를 준비합니다.',
      },
      {
        title: '심사청구 준비',
        desc: '불승인 또는 등급 결정에 불복하는 경우 90일 이내에 심사청구서를 작성합니다. 의학적 소견서와 반박 자료를 첨부합니다.',
      },
      {
        title: '재심사청구 검토',
        desc: '심사 결정에도 불복하면 재심사위원회에 재심사청구를 하거나 행정소송을 제기할 수 있습니다.',
      },
      {
        title: '직장 복귀 지원 확인',
        desc: '직장복귀지원금, 직업훈련, 직업재활급여 등 복귀 지원 제도를 확인하고 해당 신청을 검토합니다.',
      },
    ],
    faqs: [
      {
        question: '장해등급은 어떻게 결정되나요?',
        answer:
          '요양 종결 후 근로복지공단 자문의사가 장해 상태를 평가하여 1급~14급 중 해당 등급을 판정합니다. 노동 능력 상실 정도가 기준입니다.',
      },
      {
        question: '장해등급 판정에 불복할 수 있나요?',
        answer:
          '네, 장해등급 결정에 대해 90일 이내에 심사청구를 할 수 있습니다. 추가 의학적 소견서를 확보하면 재판정 가능성이 높아집니다.',
      },
      {
        question: '휴업급여는 얼마나 받나요?',
        answer:
          '평균임금의 70%를 요양 기간 중 취업하지 못한 일수에 대해 지급받습니다. 부분 취업 시에는 감액됩니다.',
      },
      {
        question: '장해급여는 일시금과 연금 중 선택할 수 있나요?',
        answer:
          '장해등급 1~3급은 연금으로만, 8~14급은 일시금으로만 지급됩니다. 4~7급은 연금 또는 일시금을 선택할 수 있습니다.',
      },
      {
        question: '요양 연장은 어떻게 하나요?',
        answer:
          '요양 기간 만료 전에 주치의 소견서를 첨부하여 근로복지공단에 요양 연장 신청서를 제출합니다.',
      },
      {
        question: '심사청구와 재심사청구의 차이는 무엇인가요?',
        answer:
          '심사청구는 근로복지공단 심사위원회에, 재심사청구는 산업재해보상보험 재심사위원회에 제기합니다. 심사청구를 거치지 않고 바로 행정소송도 가능합니다.',
      },
      {
        question: '산재 치료 후 직장 복귀 지원을 받을 수 있나요?',
        answer:
          '직장복귀지원금, 직업훈련 비용 지원, 직업재활급여 등의 제도를 활용할 수 있습니다. 근로복지공단에 문의하면 안내를 받을 수 있습니다.',
      },
      {
        question: '산재 보험급여에 세금이 부과되나요?',
        answer:
          '산재 보험급여는 비과세 소득으로 소득세가 부과되지 않습니다. 다만 민사 손해배상금과는 구분됩니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '사업주 의무',
        emoji: '📋',
        spokes: [
          { title: '위험성평가 의무', slug: 'risk-assessment-employer-obligation' },
          { title: '안전관리자 선임', slug: 'safety-manager-selection-duty' },
          { title: '놓치기 쉬운 의무', slug: 'commonly-missed-safety-obligations' },
          { title: '신고의무 절차', slug: 'employer-report-obligation-process' },
        ],
      },
      {
        label: '사고 대응',
        emoji: '📋',
        spokes: [
          { title: '중대재해 대응', slug: 'serious-accident-employer-response' },
          { title: '근로자 사망 형사', slug: 'worker-death-employer-criminal' },
          { title: '하도급 원청 의무', slug: 'subcontractor-accident-main-employer-duty' },
          { title: '사업주 형사책임', slug: 'employer-criminal-liability-accident' },
        ],
      },
      {
        label: '제재/보상',
        emoji: '📋',
        spokes: [
          { title: '안전위반 과태료', slug: 'workplace-safety-violation-penalty' },
          { title: '민사 손해배상', slug: 'industrial-accident-civil-damages' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '산재 치료 종결 후 장해등급 14급을 받았으나 실제 장해 상태가 더 심한 상황',
        issue: '장해등급이 실제 상태보다 낮게 판정되어 재판정이 필요한 경우',
        prep: '전문의 소견서와 추가 검사 결과를 확보하고 90일 이내에 심사청구를 제기해보세요',
      },
      {
        scene: '산재 요양 중 사업주가 복귀를 재촉하며 요양 종결을 압박하는 상황',
        issue: '치료가 완료되지 않았음에도 요양 종결 압박을 받는 경우',
        prep: '주치의 소견서를 확보하여 요양 연장 신청을 하고, 사업주 압박에 대한 증거를 보관해보세요',
      },
    ],
  },

  rehabilitation: {
    overview:
      '개인회생은 채무자 회생 및 파산에 관한 법률(채무자회생법)에 따라 과다한 채무로 지급불능 상태에 있는 개인이 법원의 인가를 받은 변제계획에 따라 3년에서 5년간 채무를 분할 변제하고 나머지 채무를 면책받는 제도입니다. 신청 자격은 급여소득자의 경우 무담보채무 10억 원, 담보채무 15억 원 이하여야 하며, 영업소득자도 동일한 한도가 적용됩니다. 급여소득자는 정기적이고 확실한 수입이 있는 사람, 영업소득자는 자영업자 등 수입이 불규칙한 사람으로 구분되며, 변제계획의 기간과 최저변제액 산정 방식이 다릅니다. 변제계획에 따른 변제가 완료되면 나머지 잔여 채무에 대해 면책 결정을 받게 됩니다. 개인회생 신청 후에는 채권자의 강제집행, 가압류 등이 중지되므로 추심 압박에서 벗어날 수 있습니다. 다만 세금, 벌금, 양육비 등 일부 채무는 면책에서 제외됩니다. 변제계획 인가 후 성실하게 변제하지 않으면 인가가 취소될 수 있으므로, 안정적 수입 확보와 지출 관리가 중요합니다.',
    perspectives: [
      {
        label: '채무가 과다하여 회생을 고려하고 있습니다',
        emoji: '🔴',
        checks: [
          '전체 채무 현황(채권자별 금액, 담보/무담보 구분)을 정리했는지 확인해보세요',
          '월 소득과 필수 생활비를 산정하여 변제 가능 금액을 파악했는지 확인해보세요',
          '개인회생 vs 개인파산 중 어느 절차가 적합한지 검토해보세요',
        ],
      },
      {
        label: '추심 압박으로 일상이 어렵습니다',
        emoji: '🟡',
        checks: [
          '개인회생 신청 시 강제집행과 추심이 중지됨을 알고 계신지 확인해보세요',
          '긴급한 경우 금지명령 또는 중지명령 신청이 가능한지 검토해보세요',
          '불법 추심(야간 추심, 직장 연락 등)에 대해 신고할 수 있음을 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '채무 현황 정리',
        desc: '모든 채권자, 채무 금액, 발생 시기, 담보 여부를 정리합니다. 신용정보원 조회를 통해 누락 없이 파악합니다.',
      },
      {
        title: '소득 및 지출 자료 준비',
        desc: '최근 급여명세서, 소득금액증명원, 필수 생활비 내역을 정리합니다. 변제계획 수립의 기초 자료입니다.',
      },
      {
        title: '재산 목록 작성',
        desc: '부동산, 차량, 예금, 보험, 퇴직금 등 보유 재산을 빠짐없이 기재합니다. 재산 은닉은 면책 불허가 사유입니다.',
      },
      {
        title: '변제계획안 수립',
        desc: '월 소득에서 최저 생활비를 공제한 가용소득으로 변제 기간(3~5년)과 월 변제액을 산정합니다.',
      },
      {
        title: '전문가 상담 준비',
        desc: '변호사 또는 법무사 상담 시 채무 현황표, 소득 자료, 재산 목록을 지참하면 정확한 상담이 가능합니다.',
      },
    ],
    faqs: [
      {
        question: '개인회생 신청 자격은 무엇인가요?',
        answer:
          '총 채무액이 무담보 10억 원, 담보 15억 원 이하이고, 향후 계속적으로 수입을 얻을 전망이 있어야 합니다.',
      },
      {
        question: '개인회생과 개인파산의 차이는 무엇인가요?',
        answer:
          '개인회생은 3~5년간 변제 후 면책받는 제도이고, 개인파산은 재산을 청산하여 배당한 후 면책받는 제도입니다. 소득이 있으면 회생, 없으면 파산이 적합할 수 있습니다.',
      },
      {
        question: '변제계획 기간은 얼마나 되나요?',
        answer:
          '급여소득자는 3년(최장 5년), 영업소득자는 5년이 원칙입니다. 최저변제액 이상을 변제해야 합니다.',
      },
      {
        question: '개인회생 신청하면 추심이 멈추나요?',
        answer:
          '회생 신청 후 법원이 금지명령 또는 중지명령을 내리면 채권자의 강제집행, 가압류, 추심이 중지됩니다.',
      },
      {
        question: '세금이나 벌금도 면책되나요?',
        answer:
          '조세, 벌금, 과태료, 양육비 등은 비면책채권으로 면책 대상에서 제외됩니다. 변제계획 완료 후에도 지급 의무가 있습니다.',
      },
      {
        question: '개인회생 비용은 얼마나 드나요?',
        answer:
          '법원 인지대·송달료 약 30만 원, 변호사 또는 법무사 비용은 사건에 따라 100~300만 원 수준입니다.',
      },
      {
        question: '변제 중 소득이 줄면 어떻게 되나요?',
        answer:
          '소득 감소 시 변제계획 변경 신청을 할 수 있습니다. 사유를 소명하면 법원이 변제액 조정을 허가할 수 있습니다.',
      },
      {
        question: '개인회생 신청 후 신용은 어떻게 되나요?',
        answer:
          '개인회생 개시 결정 시 신용정보가 등록됩니다. 면책 결정 후 일정 기간이 지나면 신용 회복이 가능합니다.',
      },
    ],
    spokeLinks: [
      { title: '개인회생 신청 전 자가진단', slug: 'rehabilitation-pre-check' },
      { title: '개인회생 vs 개인파산 비교', slug: 'rehabilitation-vs-bankruptcy' },
      { title: '변제계획 금액 계산법', slug: 'rehabilitation-payment-calculation' },
      { title: '급여소득자 vs 영업소득자 구분', slug: 'salary-vs-business-income-debtor' },
      { title: '개인회생 신청 필요 서류', slug: 'rehabilitation-required-documents' },
      { title: '추심 중지 신청 방법', slug: 'debt-collection-stay-request' },
      { title: '비면책채권 종류와 범위', slug: 'non-dischargeable-debts' },
      { title: '변제계획 변경 신청 방법', slug: 'repayment-plan-modification' },
      { title: '개인회생 후 신용 회복 절차', slug: 'credit-recovery-after-rehabilitation' },
      { title: '면책 결정 후 주의사항', slug: 'post-discharge-precautions' },
    ],
    caseRefs: [
      {
        scene: '카드빚과 대출 합계 8천만 원으로 월 급여만으로는 상환이 불가능한 상황',
        issue: '개인회생 신청 자격 충족 여부와 변제계획 수립이 필요한 경우',
        prep: '전체 채무 현황표, 급여명세서, 재산 목록을 정리하고 변호사 또는 법무사와 상담해보세요',
      },
      {
        scene: '채권추심 업체가 직장에까지 연락하며 상환을 독촉하는 상황',
        issue: '불법 추심 중단과 개인회생을 통한 채무 해결이 필요한 경우',
        prep: '추심 관련 통화 녹취·문자를 보관하고, 개인회생 신청과 함께 금지명령 신청을 검토해보세요',
      },
    ],
  },
  'sexual-harassment': {
    overview:
      '성희롱은 남녀고용평등과 일·가정 양립 지원에 관한 법률(남녀고용평등법), 국가인권위원회법 등에 근거하여 규율됩니다. 직장 내 성희롱은 사업주·상급자·근로자가 지위를 이용하거나 업무 관련성 속에서 성적 언동으로 상대방에게 굴욕감이나 혐오감을 느끼게 하는 행위를 말합니다. 공공장소 성희롱은 형법상 추행죄나 성폭력처벌법상 공공밀집장소추행죄로 처벌될 수 있습니다. 성희롱의 유형은 육체적·언어적·시각적 유형으로 구분되며, 각 유형에 따라 대응 경로가 다릅니다. 직장 내 성희롱의 경우 사업주에게 신고 후 조사·조치 의무가 있으며, 피해자에 대한 불이익 조치는 금지됩니다. 사업주가 적절한 조치를 하지 않으면 고용노동부에 진정을 제기하거나 국가인권위원회에 진정할 수 있습니다. 공공장소 성희롱은 경찰 신고를 통해 형사절차로 진행되며, CCTV 영상 등 현장 증거 확보가 중요합니다. 성희롱 피해자는 심리상담, 법률구조 등 다양한 지원제도를 활용할 수 있으므로 관련 기관에 적극적으로 도움을 요청해보세요.',
    perspectives: [
      {
        label: '피해를 입었습니다',
        emoji: '🔴',
        checks: [
          '피해 일시·장소·구체적 행위 내용을 기록하고 증거(문자, 녹음, 목격자)를 확보했는지 확인해보세요',
          '직장 내 성희롱이라면 사업주에게 서면 신고를 접수했는지 확인해보세요',
          '공공장소 성희롱이라면 경찰에 신고하고 현장 CCTV 보존을 요청했는지 확인해보세요',
        ],
      },
      {
        label: '혐의를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '상대방이 주장하는 행위의 구체적 내용과 시점을 정리하고 반박 자료를 준비해보세요',
          '당시 상황의 맥락(업무 관련성, 대화 경위 등)을 소명할 수 있는 증거를 확보해보세요',
          '조사 과정에서 불리한 진술을 하지 않도록 법률 조력을 받을 수 있는지 확인해보세요',
        ],
      },
      {
        label: '사실과 다르게 신고되었습니다',
        emoji: '🔵',
        checks: [
          '실제 상황과 신고 내용의 차이점을 구체적으로 정리해보세요',
          '당시 대화 맥락, 주변 목격자 진술 등 정상적 교류였음을 증명할 자료를 확보해보세요',
          '무고·명예훼손에 대한 법적 대응 가능성을 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 자료 확보',
        desc: '피해 또는 혐의 관련 문자, 이메일, SNS 대화, 녹음, CCTV 영상, 목격자 연락처를 확보해보세요. 디지털 증거는 원본을 보존하는 것이 중요합니다.',
      },
      {
        title: '피해 일지 작성',
        desc: '성희롱이 발생한 일시, 장소, 구체적 행위, 목격자, 이후 대응 내역을 시간순으로 정리해보세요.',
      },
      {
        title: '신고 경로 확인',
        desc: '직장 내 성희롱은 사업주 신고 후 고용노동부 진정, 공공장소 성희롱은 경찰 신고가 기본 경로입니다. 국가인권위원회 진정도 병행할 수 있습니다.',
      },
      {
        title: '지원 기관 연락',
        desc: '여성긴급전화 1366, 한국성폭력상담소, 근로자지원프로그램(EAP) 등을 통해 심리상담과 법률지원을 받을 수 있습니다.',
      },
      {
        title: '전문가 상담 준비',
        desc: '변호사 또는 노무사 상담 시 피해 경위 요약서, 증거 목록, 회사 취업규칙 중 성희롱 관련 조항을 미리 준비해보세요.',
      },
    ],
    faqs: [
      {
        question: '직장 내 성희롱 신고는 어디에 하나요?',
        answer:
          '먼저 사업주(인사팀, 고충처리위원회 등)에게 신고합니다. 사업주가 조치를 하지 않으면 고용노동부 지방관서에 진정을 제기하거나 국가인권위원회에 진정할 수 있습니다.',
      },
      {
        question: '성희롱 신고 후 불이익을 받으면 어떻게 하나요?',
        answer:
          '남녀고용평등법 제14조의2에 따라 성희롱 피해자에 대한 해고, 전보 등 불이익 조치는 금지됩니다. 불이익을 받으면 고용노동부에 신고하고, 부당해고 구제신청도 가능합니다.',
      },
      {
        question: '공공장소에서 성희롱을 당하면 어떻게 대응하나요?',
        answer:
          '현장에서 안전을 확보한 뒤 경찰에 신고하세요. 주변 CCTV 보존 요청, 목격자 확보가 중요하며, 공공밀집장소추행죄(성폭력처벌법)로 처벌할 수 있습니다.',
      },
      {
        question: '성희롱의 기준은 무엇인가요?',
        answer:
          '객관적으로 합리적인 사람이 성적 굴욕감이나 혐오감을 느낄 수 있는 행위인지가 기준입니다. 행위자의 의도가 아니라 피해자가 느끼는 불쾌감이 판단의 핵심입니다.',
      },
      {
        question: '성희롱과 성추행의 차이는 무엇인가요?',
        answer:
          '성희롱은 주로 직장 등 특정 관계에서의 성적 언동을 말하고, 성추행은 형법상 폭행·협박을 수단으로 한 추행을 말합니다. 성추행은 형사범죄로 더 무거운 처벌을 받습니다.',
      },
      {
        question: '증거가 없어도 성희롱 신고가 가능한가요?',
        answer:
          '증거가 없어도 신고는 가능하지만, 입증이 어려울 수 있습니다. 피해 직후 주변에 알린 기록, 상담 내역, 진료 기록 등 간접 증거도 도움이 됩니다.',
      },
      {
        question: '직장 내 성희롱 조사 기간은 얼마나 걸리나요?',
        answer:
          '사업주는 신고 접수 후 지체 없이 조사에 착수해야 합니다. 통상 10일~1개월 내 조사가 이루어지며, 고용노동부 진정 시 약 2~3개월 소요됩니다.',
      },
      {
        question: '성희롱 합의는 어떻게 이루어지나요?',
        answer:
          '가해자가 사과, 재발방지 서약, 위자료 지급 등을 포함하여 합의할 수 있습니다. 합의 시 향후 추가 청구권 포기 조건이 포함될 수 있으므로 법률 조력을 받고 결정해보세요.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 대응',
        emoji: '📋',
        spokes: [
          { title: '피해자 시작', slug: 'workplace-harassment-where-to-start' },
          { title: '첫 확인 사항', slug: 'workplace-harassment-first-check' },
          { title: '대응 체크리스트', slug: 'workplace-harassment-response-checklist' },
          { title: '증거와 신고', slug: 'workplace-harassment-evidence-report' },
        ],
      },
      {
        label: '신고/조사 절차',
        emoji: '📋',
        spokes: [
          { title: '신고 절차', slug: 'workplace-harassment-report-procedure' },
          { title: '조사 과정', slug: 'workplace-harassment-investigation-process' },
          { title: '신고 필요 증거', slug: 'report-required-evidence-documents' },
          { title: '신고하면 불이익?', slug: 'will-reporting-cause-workplace-disadvantage' },
        ],
      },
      {
        label: '2차 피해/보호',
        emoji: '📋',
        spokes: [
          { title: '2차 피해 방지', slug: 'secondary-victimization-after-report' },
          { title: '보복행위 불법 사례', slug: 'retaliation-after-report-illegal-cases' },
          { title: '보복 보호', slug: 'workplace-harassment-retaliation-protection' },
        ],
      },
      {
        label: '혐의자/대응',
        emoji: '📋',
        spokes: [
          { title: '혐의 방어', slug: 'harassment-accusation-defense' },
          { title: '무고 방어', slug: 'harassment-false-accusation-defense' },
          { title: '합의 절차', slug: 'harassment-settlement-procedure' },
        ],
      },
      {
        label: '유형별 기준',
        emoji: '📋',
        spokes: [
          { title: '언어적 성희롱 기준', slug: 'verbal-harassment-criteria' },
          { title: '회식 신체접촉', slug: 'physical-contact-at-company-dinner' },
          { title: '외모 지적 반복', slug: 'repeated-appearance-comments-by-boss' },
          { title: '고객 성희롱 사업주 의무', slug: 'client-harassment-employer-duty' },
        ],
      },
      {
        label: '증거/징계',
        emoji: '📋',
        spokes: [
          { title: '온라인 증거', slug: 'online-harassment-evidence' },
          { title: '가해자 징계 기준', slug: 'harasser-disciplinary-criteria' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '상사가 회식 자리에서 반복적으로 신체 접촉과 성적 발언을 한 상황',
        issue: '회식이 업무의 연장인지, 성희롱 성립 요건을 충족하는지가 쟁점인 경우',
        prep: '당시 대화 녹음이나 문자, 동석자 진술을 확보하고 사업주에게 서면 신고를 접수해보세요',
      },
      {
        scene: '대중교통에서 알 수 없는 사람에게 추행을 당한 상황',
        issue: '가해자 특정과 현장 증거 확보가 쟁점인 경우',
        prep: '즉시 경찰에 신고하고 CCTV 보존 요청, 주변 목격자 연락처를 확보해보세요',
      },
    ],
  },
  'child-sex-crime': {
    overview:
      '아동·청소년 대상 성범죄는 아동·청소년의 성보호에 관한 법률(아청법)에 의해 가중처벌됩니다. 직접 접촉에 의한 성폭행·성추행, 그루밍(온라인 길들이기), 촬영물 제작·유포, 온라인 성착취 등 유형이 다양하며, 모든 유형에서 법정형이 성인 대상 범죄보다 무겁습니다. 아동·청소년 대상 성범죄는 친고죄가 아니므로 피해자의 고소 없이도 수사가 가능하며, 국민 누구나 신고 의무가 있습니다. 특히 교사, 의료인, 사회복지사 등은 직무상 아동학대 및 성범죄를 인지한 경우 즉시 신고해야 하는 의무신고자입니다. 피해 아동·청소년은 해바라기센터(원스톱 지원), 아동보호전문기관, 여성긴급전화 1366 등을 통해 의료·심리·법률 지원을 받을 수 있습니다. 디지털 성착취의 경우 영상·사진의 유포 차단과 삭제 지원도 제공됩니다. 혐의자 입장에서는 범죄 유형에 따라 신상정보 공개, 취업제한, 전자발찌 부착 등 보안처분이 추가될 수 있으므로 초기 대응이 매우 중요합니다.',
    perspectives: [
      {
        label: '피해를 입었습니다 (보호자)',
        emoji: '🔴',
        checks: [
          '피해 아동의 진술이 오염되지 않도록 반복 질문을 삼가고 해바라기센터에 먼저 연락했는지 확인해보세요',
          '경찰 신고 시 아동 전문 조사관에 의한 진술녹화(영상녹화) 진행을 요청했는지 확인해보세요',
          '의료 증거 확보를 위해 해바라기센터에서 진료를 받았는지 확인해보세요',
        ],
      },
      {
        label: '혐의를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '피해자 진술과 실제 상황의 차이점을 구체적으로 정리해보세요',
          '아청법상 법정형과 보안처분(신상공개, 취업제한 등)의 범위를 파악해보세요',
          '초기 수사 단계에서 불리한 진술을 하지 않도록 즉시 변호사 조력을 받아보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '해바라기센터 연락',
        desc: '해바라기센터(전국 39개소)에서 의료·심리·법률·수사 지원을 한 번에 받을 수 있습니다. 24시간 운영되며, 전화(1899-3075)로 먼저 상담해보세요.',
      },
      {
        title: '진술 보존',
        desc: '아동의 진술은 오염되기 쉬우므로 보호자가 반복 질문하지 말고, 전문가(해바라기센터, 아동 진술 전문가)에게 맡기세요. 영상녹화 진술은 증거 능력이 높습니다.',
      },
      {
        title: '증거 확보',
        desc: '온라인 범죄의 경우 대화 기록, 영상·사진 전송 내역을 캡처하여 보존하세요. 삭제되기 전에 원본 데이터를 확보하는 것이 중요합니다.',
      },
      {
        title: '신고 및 수사 협조',
        desc: '경찰 신고(112) 또는 아동보호전문기관(1577-0199)에 신고하세요. 의무신고자가 신고를 하지 않으면 과태료가 부과됩니다.',
      },
      {
        title: '피해 회복 지원 신청',
        desc: '범죄피해자 지원센터, 법률구조공단 등을 통해 치료비, 상담비, 법률 비용 등을 지원받을 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '아동 성범죄 의무신고자는 누구인가요?',
        answer:
          '교사, 의료인, 사회복지사, 유치원·어린이집 종사자, 학원 강사, 상담사 등이 의무신고자입니다. 직무상 아동 성범죄를 인지하면 즉시 수사기관에 신고해야 합니다.',
      },
      {
        question: '아청법 위반 시 처벌 수위는 어떻게 되나요?',
        answer:
          '아동·청소년 대상 강간은 무기 또는 5년 이상 징역, 강제추행은 2년 이상 징역 또는 1천만원 이상 벌금입니다. 성인 대상 범죄보다 법정형이 높습니다.',
      },
      {
        question: '온라인 그루밍도 처벌되나요?',
        answer:
          '아청법 제15조의2에 따라 성적 착취를 목적으로 아동·청소년에게 접근하는 온라인 그루밍은 3년 이하 징역 또는 3천만원 이하 벌금에 처해집니다.',
      },
      {
        question: '아동 촬영물 소지만으로도 처벌되나요?',
        answer:
          '아청법에 따라 아동·청소년 성착취물을 소지만 해도 1년 이상 징역에 처해집니다. 제작·유포는 더 무거운 처벌을 받습니다.',
      },
      {
        question: '해바라기센터에서 어떤 지원을 받을 수 있나요?',
        answer:
          '의료 지원(응급 치료, 진단서 발급), 심리 상담, 법률 지원(무료 변호사 연결), 수사 동행 등을 한 곳에서 받을 수 있습니다. 24시간 운영됩니다.',
      },
      {
        question: '피해 아동의 신원이 보호되나요?',
        answer:
          '아청법에 따라 피해 아동·청소년의 인적사항이나 사진 등을 공개·보도하는 것은 금지됩니다. 위반 시 5년 이하 징역 또는 5천만원 이하 벌금에 처해집니다.',
      },
      {
        question: '합의하면 처벌이 줄어드나요?',
        answer:
          '아동 대상 성범죄는 합의와 무관하게 엄중히 처벌되는 경향이 있습니다. 다만 피해 회복 노력은 양형에서 일부 참작될 수 있습니다.',
      },
      {
        question: '신상정보 공개·취업제한은 어떻게 이루어지나요?',
        answer:
          '법원이 유죄 판결과 함께 신상정보 등록·공개·고지 명령과 아동 관련 기관 취업제한(최대 10년)을 선고할 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해자 보호',
        emoji: '📋',
        spokes: [
          { title: '피해 발견 시작', slug: 'child-disclosed-abuse-where-to-start' },
          { title: '부모 대응 체크리스트', slug: 'parent-response-checklist' },
          { title: '또래 성폭력 부모 대응', slug: 'peer-sexual-violence-parent-response' },
          { title: '2차 피해 방지', slug: 'preventing-secondary-harm-to-child' },
        ],
      },
      {
        label: '신고/의무',
        emoji: '📋',
        spokes: [
          { title: '의무신고 절차', slug: 'mandatory-reporting-procedure' },
          { title: '신고의무와 절차', slug: 'mandatory-reporting-and-procedure' },
          { title: '신고 필요 서류', slug: 'victim-report-required-documents' },
          { title: '아동 신고 서류', slug: 'child-victim-report-required-documents' },
          { title: '미신고 시 처벌', slug: 'penalty-for-not-reporting' },
        ],
      },
      {
        label: '피의자/수사',
        emoji: '📋',
        spokes: [
          { title: '혐의 수사 대응', slug: 'child-crime-accusation-investigation-response' },
          { title: '처벌 수위', slug: 'child-crime-charge-penalty-level' },
          { title: '학원 교사 추행', slug: 'academy-teacher-molestation-response' },
        ],
      },
      {
        label: '온라인',
        emoji: '📋',
        spokes: [
          { title: '온라인 그루밍 징후', slug: 'online-grooming-warning-signs' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '학원 강사가 초등학생에게 수개월간 부적절한 신체 접촉을 한 사실을 보호자가 뒤늦게 알게 된 상황',
        issue: '그루밍에 의한 아동 성추행 성립 여부와 의무신고 의무 위반 여부가 쟁점인 경우',
        prep: '해바라기센터에 즉시 연락하여 진술녹화와 의료 증거를 확보하고, 학원 측 의무신고 이행 여부를 확인해보세요',
      },
    ],
  },
  'prostitution': {
    overview:
      '성매매는 성매매알선 등 행위의 처벌에 관한 법률(성매매처벌법)에 따라 규율됩니다. 성매매처벌법은 성매매를 한 사람, 알선한 사람, 강요한 사람을 모두 처벌 대상으로 규정하되, 성매매 피해자는 처벌하지 않는 것을 원칙으로 합니다. 성매매 피해자란 위계·위력·폭행·협박에 의해 성매매를 강요당한 사람, 인신매매에 의한 피해자, 청소년, 사물을 변별하거나 의사를 결정할 능력이 없는 사람 등을 말합니다. 피해자로 인정되면 처벌이 면제되며, 성매매 피해자 지원시설·상담소 등을 통해 법률·의료·심리 지원을 받을 수 있습니다. 반면 성매매 알선 행위는 가중처벌 대상으로 3년 이상의 징역에 처해질 수 있으며, 영업으로 알선한 경우 더욱 무겁게 처벌됩니다. 단속에 적발된 경우 자신의 법적 지위(피해자/단순 성매매/알선)에 따라 대응 방법이 완전히 달라지므로 정확한 상황 파악이 우선입니다.',
    perspectives: [
      {
        label: '성매매 피해자입니다',
        emoji: '🔴',
        checks: [
          '강요·위계·위력에 의한 성매매였는지 구체적 정황을 정리해보세요',
          '성매매 피해자 지원시설(여성긴급전화 1366)에 연락하여 법률 지원을 요청했는지 확인해보세요',
          '피해자 인정을 위한 진술 준비와 증거(대화 기록, 금전 거래 내역 등)를 확보했는지 확인해보세요',
        ],
      },
      {
        label: '단속에 적발되었습니다',
        emoji: '🟡',
        checks: [
          '적발 상황에서의 진술 내용을 정리하고 불리한 진술이 있었는지 확인해보세요',
          '성매매 피해자에 해당하는지(강요, 위계, 청소년 여부 등) 검토해보세요',
          '초범인 경우 존스쿨(성매매 예방교육) 수강 조건부 기소유예가 가능한지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '법적 지위 확인',
        desc: '자신이 성매매 피해자, 단순 성매매 당사자, 알선자 중 어디에 해당하는지 먼저 파악해보세요. 지위에 따라 대응 방법이 완전히 다릅니다.',
      },
      {
        title: '증거 자료 확보',
        desc: '대화 기록(앱, 문자), 금전 거래 내역, 장소 관련 정보 등을 정리해보세요. 피해자의 경우 강요·위계의 정황을 보여주는 증거가 핵심입니다.',
      },
      {
        title: '지원 기관 연락',
        desc: '여성긴급전화 1366, 성매매 피해자 지원시설, 법률구조공단 등을 통해 무료 상담과 법률 지원을 받을 수 있습니다.',
      },
      {
        title: '진술 준비',
        desc: '경찰 조사에 앞서 사건 경위를 시간순으로 정리하고, 특히 강요·위계 여부, 자발성 여부 등 핵심 쟁점을 파악해보세요.',
      },
      {
        title: '전문가 상담',
        desc: '변호사 상담 시 적발 경위, 자신의 역할, 상대방과의 관계 등을 솔직하게 설명하고 최적의 대응 전략을 수립해보세요.',
      },
    ],
    faqs: [
      {
        question: '성매매로 단속되면 어떤 처벌을 받나요?',
        answer:
          '성매매를 한 사람은 1년 이하 징역, 300만원 이하 벌금·구류·과료에 처해집니다. 초범이고 반성하는 경우 존스쿨 수강 조건부 기소유예를 받는 경우가 많습니다.',
      },
      {
        question: '성매매 피해자는 정말 처벌받지 않나요?',
        answer:
          '성매매처벌법 제6조에 따라 성매매 피해자는 처벌하지 않습니다. 강요·위계에 의한 경우, 청소년인 경우, 인신매매 피해자인 경우 등이 해당됩니다.',
      },
      {
        question: '알선 혐의는 처벌이 어떻게 되나요?',
        answer:
          '성매매 알선은 3년 이하 징역 또는 3천만원 이하 벌금에 처해집니다. 영업으로 알선한 경우 7년 이하 징역 또는 7천만원 이하 벌금으로 가중됩니다.',
      },
      {
        question: '존스쿨(성매매 예방교육)이란 무엇인가요?',
        answer:
          '검찰이 초범 성매매 사건에 대해 교육 이수 조건으로 기소유예 처분하는 제도입니다. 40시간 교육을 이수하면 전과 기록이 남지 않습니다.',
      },
      {
        question: '온라인에서 성매매를 권유받았는데 처벌되나요?',
        answer:
          '성매매를 실행하지 않았더라도 알선·권유 행위 자체가 처벌 대상입니다. 다만 단순히 대화만 한 경우 성매매 실행의 고의 입증이 쟁점이 됩니다.',
      },
      {
        question: '채팅앱에서 만남 후 적발된 경우 어떻게 대응하나요?',
        answer:
          '경찰 조사에서 자신의 역할(구매자/알선자/피해자)을 명확히 하고, 불리한 진술을 하지 않도록 주의하세요. 변호사 조력을 요청할 권리가 있습니다.',
      },
      {
        question: '성매매 전과가 취업에 영향을 미치나요?',
        answer:
          '범죄경력조회 대상이 되므로 공무원, 교사 등 특정 직종에 영향을 미칠 수 있습니다. 기소유예 처분을 받으면 전과 기록이 남지 않아 영향이 적습니다.',
      },
      {
        question: '미성년자가 성매매에 연루된 경우는?',
        answer:
          '아청법에 따라 미성년자는 성매매 피해자로 보호됩니다. 미성년자를 상대로 한 성매매는 가중처벌되며, 대상 미성년자는 보호처분을 받게 됩니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '적발/초범 대응',
        emoji: '📋',
        spokes: [
          { title: '적발 시작', slug: 'caught-where-to-start' },
          { title: '성매매 시작', slug: 'prostitution-where-to-start' },
          { title: '초범 양형', slug: 'prostitution-first-offense-sentencing' },
          { title: '초범 불기소 사례', slug: 'first-offense-non-prosecution-cases' },
        ],
      },
      {
        label: '단속/수사',
        emoji: '📋',
        spokes: [
          { title: '체포 대응', slug: 'prostitution-arrest-response' },
          { title: '체포 형사절차', slug: 'prostitution-arrest-criminal-process' },
          { title: '함정수사 대응', slug: 'prostitution-entrapment-response' },
          { title: '단속작전 대응', slug: 'sting-operation-response' },
          { title: '온라인 채팅 체포', slug: 'online-chat-arrest-response' },
        ],
      },
      {
        label: '처벌/방어',
        emoji: '📋',
        spokes: [
          { title: '매수 vs 매도 처벌', slug: 'buyer-vs-seller-penalty-comparison' },
          { title: '초범 단속 처벌', slug: 'first-offense-raid-penalty-level' },
          { title: '혐의 방어 방법', slug: 'prostitution-charge-defense-method' },
        ],
      },
      {
        label: '알선/조사',
        emoji: '📋',
        spokes: [
          { title: '알선 수사부터 재판', slug: 'solicitation-investigation-to-trial' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '채팅앱을 통해 만난 상대방과의 만남이 경찰 단속에 적발된 상황',
        issue: '초범 여부와 기소유예(존스쿨) 가능성이 쟁점인 경우',
        prep: '적발 경위와 진술 내용을 정리하고, 초범임을 입증할 자료를 준비하여 변호사와 상담해보세요',
      },
      {
        scene: '업소에서 일하면서 업주의 강요로 성매매를 하게 된 상황',
        issue: '성매매 피해자 인정 여부와 업주의 알선·강요 혐의가 쟁점인 경우',
        prep: '강요의 정황(감시, 빚, 폭행·협박 등)을 구체적으로 정리하고 성매매 피해자 지원시설에 연락해보세요',
      },
    ],
  },
  'school-violence': {
    overview:
      '학교폭력은 학교폭력예방 및 대책에 관한 법률(학교폭력예방법)에 따라 규율됩니다. 물리적 폭력, 언어폭력(모욕, 협박), 사이버폭력, 따돌림, 금품갈취, 강요, 성폭력 등 다양한 유형이 있으며, 학교 안팎에서 학생 간에 발생하는 모든 유형의 폭력이 대상입니다. 학교폭력이 발생하면 학교장은 학교폭력대책심의위원회(학폭위, 현재 교육지원청 소속)에 심의를 요청해야 합니다. 학폭위는 피해학생 보호조치(1~7호)와 가해학생 조치(1~9호)를 의결하며, 조치 사항은 학교생활기록부에 기재됩니다. 1~3호 조치는 졸업과 동시에 삭제되지만, 4호 이상은 졸업 후 2~4년간 보존됩니다. 피해학생 측은 증거 확보와 신속한 신고가 핵심이고, 가해학생 측은 사안의 경중에 따른 적절한 대응과 반성·화해 노력이 양형에 영향을 미칩니다. 중대한 사안은 형사 고소도 병행할 수 있으며, 민사상 손해배상 청구도 가능합니다.',
    perspectives: [
      {
        label: '자녀가 피해를 입었습니다',
        emoji: '🔴',
        checks: [
          '피해 일시·장소·내용을 기록하고 증거(사진, 대화 캡처, 진단서, 목격자)를 확보했는지 확인해보세요',
          '담임교사 또는 학교에 서면으로 학교폭력 신고를 접수했는지 확인해보세요',
          '피해가 심각한 경우 경찰 신고와 학폭위 심의 요청을 병행했는지 확인해보세요',
        ],
      },
      {
        label: '자녀가 가해 혐의를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '사안의 구체적 내용을 자녀와 충분히 대화하여 파악하고 사실 관계를 정리해보세요',
          '학폭위 조치 등급(1~9호)별 내용과 학생부 기재 기간을 파악해보세요',
          '피해학생 측과의 화해·합의 가능성을 검토하고 반성문 등을 준비해보세요',
        ],
      },
      {
        label: '사실과 다르게 신고되었습니다',
        emoji: '🔵',
        checks: [
          '실제 상황과 신고 내용의 차이점을 구체적으로 정리하고 반박 증거를 확보해보세요',
          '목격자 진술, CCTV, 대화 기록 등 객관적 증거를 수집해보세요',
          '학폭위에서 소명할 자료를 체계적으로 준비하고 필요시 변호사 조력을 받아보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 확보',
        desc: '피해 사진, 진단서, 대화 캡처(카톡, SNS), 녹음, CCTV 영상, 목격자 진술 등을 확보해보세요. 사이버폭력의 경우 게시글·댓글 캡처와 URL을 보존하세요.',
      },
      {
        title: '학교폭력 신고',
        desc: '담임교사 또는 학교장에게 서면으로 신고하거나, 117 학교폭력 신고센터에 전화로 신고할 수 있습니다. 서면 신고가 기록에 남아 유리합니다.',
      },
      {
        title: '학폭위 절차 이해',
        desc: '학폭위는 교육지원청 소속으로 신고 후 14일 이내 심의가 개시됩니다. 피해·가해 측 모두 출석하여 진술할 수 있으며, 변호사 대리도 가능합니다.',
      },
      {
        title: '생활기록부 기재 기준 확인',
        desc: '가해학생 조치 1~3호는 졸업 시 삭제, 4~7호는 졸업 후 2년, 8~9호는 졸업 후 4년 보존됩니다. 조치 유형에 따른 영향을 미리 파악해보세요.',
      },
      {
        title: '화해·합의 검토',
        desc: '가해학생 측이라면 진심 어린 사과와 재발방지 약속, 피해 회복 노력이 학폭위 조치 결정에 긍정적 영향을 미칩니다.',
      },
    ],
    faqs: [
      {
        question: '학폭위 신고는 어떻게 하나요?',
        answer:
          '담임교사나 학교장에게 서면(신고서)으로 접수하거나, 117 학교폭력 신고센터에 전화·앱으로 신고할 수 있습니다. 학교는 사안 조사 후 교육지원청 학폭위에 심의를 요청합니다.',
      },
      {
        question: '학폭위 가해학생 조치 1~9호란?',
        answer:
          '1호 서면사과, 2호 접촉·협박·보복행위 금지, 3호 교내봉사, 4호 사회봉사, 5호 특별교육·심리치료, 6호 출석정지, 7호 학급교체, 8호 전학, 9호 퇴학(고등학교만)입니다.',
      },
      {
        question: '학생부 기재는 언제 삭제되나요?',
        answer:
          '1~3호 조치는 졸업과 동시에 삭제됩니다. 4~7호는 졸업 후 2년, 8~9호는 졸업 후 4년 경과 시 삭제됩니다. 삭제 전까지 대입 등에 영향을 미칠 수 있습니다.',
      },
      {
        question: '학교폭력으로 형사 고소도 할 수 있나요?',
        answer:
          '학폭위 절차와 별개로 형사 고소가 가능합니다. 다만 14세 미만은 형사미성년자로 처벌되지 않으며, 14세 이상은 소년법에 따라 처리됩니다.',
      },
      {
        question: '사이버폭력도 학교폭력에 해당하나요?',
        answer:
          '학교폭력예방법상 정보통신망을 이용한 음란·폭력 정보 유통, 사이버 따돌림 등도 학교폭력에 포함됩니다. 온라인 증거 확보가 특히 중요합니다.',
      },
      {
        question: '학폭위 결정에 불복할 수 있나요?',
        answer:
          '조치에 이의가 있으면 통보받은 날부터 15일 이내에 행정심판(시·도 학생징계조정위원회)을 청구할 수 있고, 그 후 행정소송도 가능합니다.',
      },
      {
        question: '피해학생 보호조치는 어떤 것이 있나요?',
        answer:
          '1호 심리상담, 2호 일시보호, 3호 치료·요양, 4호 학급교체, 5호 전학, 6호 그 밖의 보호조치가 있습니다. 치료비는 가해학생 학부모가 부담하는 것이 원칙입니다.',
      },
      {
        question: '학교폭력 손해배상 청구는 어떻게 하나요?',
        answer:
          '민사소송으로 치료비, 위자료 등을 가해학생 학부모에게 청구할 수 있습니다. 학폭위 결과와 증거 자료를 기반으로 소장을 작성하세요.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '피해학생 대응',
        emoji: '📋',
        spokes: [
          { title: '학교폭력 시작', slug: 'school-violence-where-to-start' },
          { title: '왕따 시작', slug: 'child-bullied-where-to-start' },
          { title: '폭행 대응', slug: 'child-beaten-at-school-response' },
          { title: '단톡방 괴롭힘', slug: 'group-chat-bullying-qualification' },
        ],
      },
      {
        label: '가해학생/학부모 대응',
        emoji: '📋',
        spokes: [
          { title: '가해 학부모 대응', slug: 'accused-as-perpetrator-parent-response' },
          { title: '학부모 대응', slug: 'school-violence-accused-parent-response' },
          { title: '가해 학폭위', slug: 'school-violence-accused-committee' },
          { title: '학폭위 준비', slug: 'perpetrator-committee-preparation' },
        ],
      },
      {
        label: '학폭위 절차',
        emoji: '📋',
        spokes: [
          { title: '신고부터 학폭위', slug: 'report-to-committee-procedure' },
          { title: '학폭위 절차', slug: 'school-violence-committee-procedure' },
          { title: '제재 방어', slug: 'perpetrator-sanction-defense' },
          { title: '학부모 흔한 실수', slug: 'common-mistakes-parents-make' },
        ],
      },
      {
        label: '조치/기록',
        emoji: '📋',
        spokes: [
          { title: '기록 삭제 가능?', slug: 'can-school-record-be-deleted' },
          { title: '가해 기록 삭제', slug: 'perpetrator-school-record-deletion' },
          { title: '합의로 기록 방지', slug: 'settlement-prevents-school-record' },
          { title: '전학 불복', slug: 'school-violence-perpetrator-transfer-appeal' },
        ],
      },
      {
        label: '불복/소송',
        emoji: '📋',
        spokes: [
          { title: '제재 불복', slug: 'sanction-appeal-procedure' },
          { title: '조치 불복', slug: 'school-violence-measures-appeal' },
          { title: '제재 불복 절차', slug: 'school-violence-sanction-appeal-process' },
        ],
      },
      {
        label: '특수 유형',
        emoji: '📋',
        spokes: [
          { title: 'SNS 괴롭힘', slug: 'school-violence-social-media-bullying' },
          { title: '허위신고 대응', slug: 'school-violence-false-report-response' },
          { title: '허위신고 증거', slug: 'school-violence-false-report-evidence' },
          { title: '부당 신고 방어', slug: 'wrongful-report-defense' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '같은 반 학생 3명이 자녀를 수개월간 집단 따돌림하고 SNS에서 모욕적 게시글을 올린 상황',
        issue: '따돌림과 사이버폭력이 동시에 발생한 복합 사안에서 학폭위 조치 수위가 쟁점인 경우',
        prep: 'SNS 게시글 캡처, 목격자 확보, 진단서(심리상담 기록 포함)를 준비하고 서면 신고를 접수해보세요',
      },
      {
        scene: '자녀가 친구를 밀어 넘어뜨려 전치 2주 진단이 나왔는데 학폭 신고가 된 상황',
        issue: '장난과 폭력의 경계, 학폭위 조치 수위와 학생부 기재 여부가 쟁점인 경우',
        prep: '사건 경위를 정리하고, 피해학생 측과 조속히 합의하여 조치 수위를 낮출 수 있도록 준비해보세요',
      },
    ],
  },
  'drug-crime': {
    overview:
      '마약류 범죄는 마약류 관리에 관한 법률에 따라 엄중하게 처벌됩니다. 마약류는 마약(헤로인, 코카인 등), 향정신성의약품(필로폰, MDMA, LSD 등), 대마로 구분되며 각각 처벌 수위가 다릅니다. 투약(사용)은 10년 이하 징역, 소지·매매는 5년 이하에서 무기징역까지 가능하며, 영리 목적 유통은 사형·무기 또는 5년 이상 징역으로 가중처벌됩니다. 최근에는 다크웹, 텔레그램 등 온라인을 통한 유통이 증가하고 있으며, 해외에서의 투약도 국내법으로 처벌됩니다. 수사 단계에서 모발·소변 검사, 압수수색, 통신 자료 분석 등이 이루어지며, 혐의가 인정되면 구속 수사가 원칙입니다. 다만 자수한 경우 형이 감경되고, 초범으로 투약만 한 경우 치료보호(치료감호) 제도를 활용할 수 있습니다. 수사 초기부터 변호사 조력을 받는 것이 중요하며, 진술 전략과 양형 사유(자수, 치료 의지, 사회적 유대 등)를 체계적으로 준비해야 합니다.',
    perspectives: [
      {
        label: '수사를 받고 있습니다',
        emoji: '🟡',
        checks: [
          '경찰 출석 전 변호사 조력을 받아 진술 전략을 수립했는지 확인해보세요',
          '모발·소변 검사 결과와 압수수색 대상 범위를 파악했는지 확인해보세요',
          '자수 감경, 치료보호 등 양형에 유리한 사유를 정리했는지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '변호사 선임',
        desc: '마약 사건은 구속 수사가 원칙이므로 출석 전 반드시 변호사를 선임하세요. 진술 내용에 따라 처벌 수위가 크게 달라집니다.',
      },
      {
        title: '사건 경위 정리',
        desc: '투약 경위(시기, 횟수, 종류, 입수 경로), 소지 상황, 유통 관여 여부 등을 시간순으로 정리해보세요.',
      },
      {
        title: '양형 사유 준비',
        desc: '자수 여부, 초범 여부, 중독 치료 의지(치료기관 상담 기록), 가족 탄원서, 직장·사회적 유대 관계 등 양형에 유리한 자료를 수집해보세요.',
      },
      {
        title: '치료보호 제도 검토',
        desc: '마약 중독자로서 치료가 필요한 경우 치료감호(치료보호)를 신청할 수 있습니다. 징역 대신 치료 시설에서 치료를 받는 제도입니다.',
      },
      {
        title: '관련 통신 자료 확인',
        desc: '수사기관이 휴대전화, 메신저, 계좌 내역 등을 분석할 수 있으므로, 관련 자료의 범위와 내용을 변호사와 함께 검토해보세요.',
      },
    ],
    faqs: [
      {
        question: '마약 투약 처벌 수위는 어떻게 되나요?',
        answer:
          '마약류 종류에 따라 다릅니다. 향정신성의약품(필로폰 등) 투약은 10년 이하 징역, 대마 흡연은 5년 이하 징역입니다. 초범 단순 투약은 징역 1~2년 또는 집행유예가 일반적입니다.',
      },
      {
        question: '자수하면 감경을 받을 수 있나요?',
        answer:
          '마약류 관리에 관한 법률 제57조에 따라 자수한 경우 형을 감경하거나 면제할 수 있습니다. 수사 착수 전 자수가 가장 유리합니다.',
      },
      {
        question: '해외에서 대마를 피워도 처벌되나요?',
        answer:
          '대한민국 국민은 해외에서 마약류를 투약해도 귀국 후 처벌됩니다. 모발 검사로 수개월 전 투약 여부도 확인할 수 있습니다.',
      },
      {
        question: '마약 소지만으로도 처벌되나요?',
        answer:
          '투약하지 않았더라도 마약류를 소지한 것만으로 처벌됩니다. 소지량과 목적(자가 사용/유통)에 따라 처벌 수위가 달라집니다.',
      },
      {
        question: '치료보호(치료감호) 제도란 무엇인가요?',
        answer:
          '마약 중독으로 치료가 필요한 경우 징역 대신 치료감호 시설에서 치료를 받는 제도입니다. 검사 또는 본인이 청구할 수 있으며, 최대 2년간 치료를 받습니다.',
      },
      {
        question: '마약 유통 혐의의 처벌은?',
        answer:
          '영리 목적 매매·알선은 사형·무기 또는 5년 이상 징역에 처해지는 중범죄입니다. 단순 매매도 5년 이상 징역으로 매우 무겁습니다.',
      },
      {
        question: '모발 검사는 언제까지의 투약을 확인할 수 있나요?',
        answer:
          '모발은 1cm당 약 1개월의 약물 사용 이력을 보여줍니다. 일반적으로 3~6개월 전까지의 투약 여부를 확인할 수 있습니다.',
      },
      {
        question: '마약 사건으로 구속되면 보석이 가능한가요?',
        answer:
          '구속 후 보석을 청구할 수 있지만, 마약 사건은 증거인멸·도주 우려로 보석이 잘 허가되지 않습니다. 사안이 경미하고 자수한 경우 가능성이 높아집니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '초범/적발 대응',
        emoji: '📋',
        spokes: [
          { title: '마약 혐의 시작', slug: 'drug-charge-where-to-start' },
          { title: '초범 양형', slug: 'drug-crime-first-offense-sentencing' },
          { title: '초범 집행유예', slug: 'first-offense-probation-cases' },
          { title: '또래 압력 초범', slug: 'first-time-peer-pressure-penalty' },
        ],
      },
      {
        label: '검사/증거',
        emoji: '📋',
        spokes: [
          { title: '소변 양성 대응', slug: 'drug-urine-positive-response' },
          { title: '양성 검사 대응', slug: 'positive-urine-test-response' },
          { title: '모발검사 양성 방어', slug: 'drug-crime-hair-test-positive-defense' },
          { title: '공유공간 무고', slug: 'drug-false-accusation-shared-space' },
        ],
      },
      {
        label: '수사/조사 대응',
        emoji: '📋',
        spokes: [
          { title: '수사 대응', slug: 'drug-investigation-response' },
          { title: '투약 조사 대응', slug: 'drug-use-investigation-response' },
          { title: '변호사 방어 전략', slug: 'drug-charge-lawyer-defense-strategy' },
        ],
      },
      {
        label: '유형별 처벌',
        emoji: '📋',
        spokes: [
          { title: '유형별 처벌 비교', slug: 'drug-types-punishment-comparison' },
          { title: '투약/소지/매매 비교', slug: 'use-vs-possession-vs-dealing-penalty' },
          { title: '소지 형사절차', slug: 'drug-possession-criminal-process' },
        ],
      },
      {
        label: '감경/자수',
        emoji: '📋',
        spokes: [
          { title: '자수 감경', slug: 'drug-self-report-sentencing-reduction' },
          { title: '자수 감경 효과', slug: 'drug-self-report-reduction' },
          { title: '집행유예 조건', slug: 'first-offense-probation-conditions' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '지인으로부터 받은 향정신성의약품을 수차례 투약한 사실이 통신 분석으로 적발된 상황',
        issue: '투약 횟수 및 입수 경로 확인, 유통 관여 여부가 쟁점인 경우',
        prep: '변호사를 선임하고 투약 경위를 정리한 뒤, 자수 감경과 치료보호 신청 가능성을 검토해보세요',
      },
    ],
  },
  'jeonse': {
    overview:
      '전세는 주택임대차보호법에 의해 보호되는 대표적인 주거 형태입니다. 보증금 미반환, 계약 갱신, 수리 하자, 보증금 증액 등 다양한 분쟁이 발생할 수 있으며, 임차인의 대항력과 우선변제권이 핵심 권리입니다. 대항력은 주택 인도(입주)와 전입신고를 마친 다음 날부터 발생하며, 이를 통해 집이 경매에 넘어가더라도 보증금을 보호받을 수 있습니다. 확정일자를 받으면 우선변제권까지 확보할 수 있어, 경매 배당 절차에서 다른 채권자보다 우선하여 보증금을 배당받을 수 있습니다. 계약 갱신은 주택임대차보호법 제6조의3에 따라 1회에 한해 계약갱신요구권을 행사할 수 있으며, 갱신 시 차임 인상률은 5% 이내로 제한됩니다. 보증금을 돌려받지 못하는 경우 내용증명 발송, 임차권등기명령 신청, 보증금반환소송, 지급명령 등 다양한 법적 수단을 활용할 수 있습니다. 전세보증보험에 가입한 경우 보증기관을 통한 반환 청구도 가능합니다. 수리 하자는 임대인의 수선 의무 범위에 따라 달라지며, 필요비·유익비 상환청구도 검토해볼 수 있습니다.',
    topQuestions: [
      { question: '보증금을 안 돌려주면 어떻게 하나요?', slug: 'deposit-return-process' },
      { question: '전세보증금 반환보증보험은 어떻게 가입하나요?', slug: 'jeonse-deposit-guarantee-insurance-guide' },
      { question: '확정일자와 전입신고는 뭐가 다른가요?', slug: 'move-in-report-vs-fixed-date' },
    ],
    relatedHubs: [
      { domain: 'jeonse-fraud', label: '전세사기', reason: '전세 계약이 사기로 발전하는 경우' },
      { domain: 'sangga', label: '상가임대차', reason: '상가 보증금 보호와 유사한 절차' },
    ],
    perspectives: [
      {
        label: '보증금 반환 문제가 있습니다',
        emoji: '🔴',
        checks: [
          '전입신고와 확정일자를 받아 대항력·우선변제권을 확보했는지 확인해보세요',
          '계약 만료일 2개월 전까지 해지 통보를 했는지, 임대인에게 내용증명을 발송했는지 확인해보세요',
          '이사해야 하는 경우 임차권등기명령 신청으로 대항력을 보전할 수 있는지 확인해보세요',
        ],
      },
      {
        label: '계약 갱신·변경 문제가 있습니다',
        emoji: '🟡',
        checks: [
          '계약갱신요구권을 이미 사용했는지, 잔여 행사 횟수를 확인해보세요',
          '임대인의 갱신 거절 사유(실거주 등)가 정당한지 검토해보세요',
          '차임 인상률이 5% 이내인지, 전환 시 전환율 기준이 적정한지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '대항력·우선변제권 확인',
        desc: '전입신고와 확정일자를 받았는지, 대항력 취득일이 근저당 설정일보다 빠른지 등기부등본을 통해 확인해보세요.',
      },
      {
        title: '내용증명 발송',
        desc: '보증금 반환을 요구하는 내용증명을 임대인에게 발송하세요. 향후 법적 절차에서 반환 요구 사실을 증명하는 자료가 됩니다.',
      },
      {
        title: '임차권등기명령 신청',
        desc: '이사를 해야 하는데 보증금을 돌려받지 못한 경우, 관할 법원에 임차권등기명령을 신청하면 이사 후에도 대항력과 우선변제권을 유지할 수 있습니다.',
      },
      {
        title: '전세보증보험 확인',
        desc: 'HUG(주택도시보증공사) 또는 SGI(서울보증보험) 전세보증보험에 가입한 경우 보증기관에 보증금 반환을 청구할 수 있습니다.',
      },
      {
        title: '법적 절차 검토',
        desc: '보증금반환소송, 지급명령(소액사건), 민사조정 등 상황에 맞는 법적 절차를 비교 검토해보세요. 소액사건은 직접 진행도 가능합니다.',
      },
    ],
    faqs: [
      {
        question: '대항력과 우선변제권의 차이는 무엇인가요?',
        answer:
          '대항력은 전입신고+입주로 제3자에게 임차권을 주장할 수 있는 권리이고, 우선변제권은 확정일자까지 받아 경매 시 우선 배당받을 수 있는 권리입니다.',
      },
      {
        question: '보증금을 안 돌려주면 어떻게 하나요?',
        answer:
          '내용증명 발송 → 임차권등기명령 신청 → 보증금반환소송 또는 지급명령 순으로 대응합니다. 전세보증보험이 있으면 보증기관에 먼저 청구하세요.',
      },
      {
        question: '계약갱신요구권은 몇 번 사용할 수 있나요?',
        answer:
          '주택임대차보호법에 따라 1회에 한해 사용할 수 있으며, 갱신 기간은 2년입니다. 다만 임대인이 실거주 등 정당한 사유로 거절할 수 있습니다.',
      },
      {
        question: '임차권등기명령이란 무엇인가요?',
        answer:
          '보증금을 돌려받지 못한 상태에서 이사해야 할 때, 법원에 신청하여 등기부에 임차권을 기재함으로써 대항력과 우선변제권을 유지하는 제도입니다.',
      },
      {
        question: '전세보증보험은 어떻게 활용하나요?',
        answer:
          'HUG 또는 SGI 전세보증보험에 가입한 경우, 보증금 미반환 시 보증기관에 보증금 반환을 청구할 수 있습니다. 보증기관이 대위변제 후 임대인에게 구상합니다.',
      },
      {
        question: '확정일자는 어디서 받나요?',
        answer:
          '주민센터, 등기소, 공증사무소에서 받을 수 있으며, 인터넷등기소에서 온라인으로도 신청 가능합니다. 전입신고와 동시에 받는 것이 좋습니다.',
      },
      {
        question: '임대인이 수리를 안 해주면 어떻게 하나요?',
        answer:
          '주택의 사용에 필요한 수선은 임대인의 의무입니다(민법 제623조). 수선 요구를 서면으로 하고, 불이행 시 직접 수리 후 필요비 상환을 청구할 수 있습니다.',
      },
      {
        question: '소액보증금 최우선변제란 무엇인가요?',
        answer:
          '주택가액의 일정 비율 내에서 소액보증금 임차인이 다른 담보권자보다 우선하여 보증금을 변제받는 제도입니다. 지역별 기준금액이 다르므로 해당 지역 기준을 확인하세요.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '계약 전 확인',
        emoji: '📋',
        spokes: [
          { title: '특약 체크리스트', slug: 'jeonse-contract-special-agreement-checklist' },
          { title: '임차인 등록 요건', slug: 'jeonse-tenant-registration-requirement' },
          { title: '사기 의심 자가점검', slug: 'fraud-suspicion-self-check' },
          { title: '미등기 보증금 보호', slug: 'no-registration-deposit-protection' },
        ],
      },
      {
        label: '확정일자/대항력',
        emoji: '📋',
        spokes: [
          { title: '전입신고 없을 때', slug: 'no-move-in-report-deposit-protection' },
          { title: '미전입 보호', slug: 'no-move-in-report-protection' },
          { title: '보증금 우선변제 경합', slug: 'jeonse-deposit-priority-competing' },
          { title: '보증보험 청구', slug: 'jeonse-insurance-claim-checklist' },
        ],
      },
      {
        label: '만기/갱신/해지',
        emoji: '📋',
        spokes: [
          { title: '갱신 거절', slug: 'jeonse-renewal-landlord-refusal' },
          { title: '갱신 거부 대응', slug: 'lease-renewal-rejection' },
          { title: '만기 후 비워주지 않을 때', slug: 'lease-expired-landlord-wont-leave' },
          { title: '월세 전환 권리', slug: 'jeonse-monthly-conversion-tenant-rights' },
        ],
      },
      {
        label: '보증금 반환',
        emoji: '📋',
        spokes: [
          { title: '보증금 반환 총정리', slug: 'jeonse-deposit-return-comprehensive-guide' },
          { title: '반환 절차', slug: 'deposit-return-process' },
          { title: '만기 후 반환 단계', slug: 'lease-expiry-deposit-return-steps' },
          { title: '반환 통지 서식', slug: 'deposit-return-notice-template' },
        ],
      },
      {
        label: '집주인 문제',
        emoji: '📋',
        spokes: [
          { title: '집주인 연락두절', slug: 'landlord-unreachable-deposit' },
          { title: '만기 후 연락두절', slug: 'landlord-no-contact-after-expiry' },
          { title: '집주인 세금체납', slug: 'jeonse-landlord-tax-delinquent-risk' },
          { title: '임대인 변경 위험', slug: 'jeonse-landlord-change-deposit-risk' },
        ],
      },
      {
        label: '법적 조치',
        emoji: '📋',
        spokes: [
          { title: '소송 준비', slug: 'deposit-lawsuit-preparation' },
          { title: '임차권등기명령', slug: 'lease-registration-order-process' },
          { title: '경매 보증금 우선변제', slug: 'jeonse-auction-deposit-priority' },
          { title: '소송 서류', slug: 'deposit-lawsuit-docs' },
        ],
      },
      {
        label: '특수 상황',
        emoji: '📋',
        spokes: [
          { title: '전대차 보호', slug: 'jeonse-sublet-sublease-protection' },
          { title: '역전세 대응', slug: 'jeonse-reverse-gap-tenant-response' },
          { title: '중개인 책임', slug: 'jeonse-broker-liability-failure' },
          { title: '반환 체크리스트', slug: 'deposit-return-checklist' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '계약 만료 후 3개월이 지났는데 임대인이 보증금 반환을 미루는 상황',
        issue: '임대인의 자금 사정으로 반환이 지연되는데, 이사를 해야 하는 경우',
        prep: '내용증명을 발송하고, 임차권등기명령을 신청하여 대항력을 유지한 채 이사를 진행해보세요',
      },
      {
        scene: '임대인이 계약갱신을 거절하며 직접 살겠다고 하는 상황',
        issue: '실거주 목적의 갱신 거절이 정당한지, 허위 실거주 시 손해배상이 가능한지가 쟁점인 경우',
        prep: '임대인의 실거주 의사를 확인할 수 있는 자료를 검토하고, 거절이 부당할 경우 갱신요구권 행사를 서면으로 통보해보세요',
      },
    ],
  },
  'sangga': {
    overview:
      '상가건물 임대차는 상가건물 임대차보호법에 의해 보호됩니다. 이 법은 환산보증금(보증금 + 월차임 × 100) 기준으로 적용 범위가 결정되며, 지역별로 기준금액이 다릅니다. 핵심 쟁점은 권리금 보호, 계약갱신요구권, 보증금 반환, 차임 증감 등입니다. 권리금은 2015년 법 개정으로 보호 대상이 되었으며, 임대인이 정당한 사유 없이 임차인의 권리금 회수를 방해하면 손해배상 책임을 집니다. 계약갱신요구권은 최초 계약일로부터 10년까지 행사할 수 있으며, 갱신 시 차임 인상률은 5% 이내로 제한됩니다. 보증금 반환 문제는 주택임대차와 유사하나, 상가는 확정일자 외에 사업자등록이 대항력 요건이라는 점이 다릅니다. 환산보증금이 기준금액을 초과하면 일부 보호 규정(대항력, 계약갱신요구권 등)이 적용되지 않을 수 있으므로, 계약 전 환산보증금을 반드시 확인해야 합니다. 차임 증감은 경제 사정 변동, 인근 상가 임대료 수준 등을 고려하여 청구할 수 있으며, 조정이 안 되면 대한법률구조공단의 임대차분쟁조정위원회를 이용할 수 있습니다.',
    perspectives: [
      {
        label: '보증금·권리금 문제가 있습니다',
        emoji: '🔴',
        checks: [
          '환산보증금이 지역별 기준금액 이내인지 확인하여 상가임대차보호법 적용 여부를 검토해보세요',
          '권리금 계약서(유형: 영업권리금, 시설권리금, 바닥권리금 등)를 작성했는지 확인해보세요',
          '임대인의 권리금 회수 방해 행위(신규 임차인 거부, 조건 변경 등)가 있는지 확인해보세요',
        ],
      },
      {
        label: '계약 갱신·차임 문제가 있습니다',
        emoji: '🟡',
        checks: [
          '계약갱신요구권 잔여 기간(최초 계약일로부터 10년)을 확인해보세요',
          '임대인의 갱신 거절 사유가 법정 사유에 해당하는지 검토해보세요',
          '차임 인상이 5% 이내인지, 부당한 인상에 대한 조정 신청이 가능한지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '환산보증금 계산',
        desc: '보증금 + (월차임 × 100)으로 환산보증금을 계산하고, 지역별 기준금액(서울 9억 등)과 비교하여 보호법 적용 범위를 확인해보세요.',
      },
      {
        title: '권리금 계약서 작성',
        desc: '권리금의 종류(영업, 시설, 바닥)와 금액을 명시한 계약서를 작성하세요. 국토교통부 표준 권리금 계약서를 활용하면 분쟁 예방에 도움이 됩니다.',
      },
      {
        title: '사업자등록 및 확정일자',
        desc: '상가임대차의 대항력은 건물 인도 + 사업자등록으로 취득됩니다. 관할 세무서에서 확정일자도 함께 받아보세요.',
      },
      {
        title: '내용증명 발송',
        desc: '보증금 반환 요구, 계약갱신 요구, 권리금 회수 방해 항의 등 법적 의사 표시는 내용증명으로 발송하여 증거를 남기세요.',
      },
      {
        title: '분쟁 해결 절차 검토',
        desc: '임대차분쟁조정위원회(대한법률구조공단) 조정 신청, 보증금반환소송, 권리금 손해배상 소송 등 상황에 맞는 절차를 비교 검토해보세요.',
      },
    ],
    faqs: [
      {
        question: '상가 권리금은 법적으로 보호되나요?',
        answer:
          '2015년 법 개정으로 임대인이 정당한 사유 없이 임차인의 권리금 회수를 방해하면 손해배상 책임을 집니다. 다만 환산보증금 기준 초과 시에도 권리금 보호 규정은 적용됩니다.',
      },
      {
        question: '상가 계약갱신요구권은 몇 년까지 가능한가요?',
        answer:
          '최초 임대차 계약일로부터 전체 기간이 10년이 될 때까지 행사할 수 있습니다. 10년을 초과하면 갱신을 요구할 수 없습니다.',
      },
      {
        question: '임대인이 권리금을 안 주겠다고 하면?',
        answer:
          '임대인이 직접 권리금을 지급하는 것이 아니라, 신규 임차인에게 권리금을 받을 기회를 보장해야 합니다. 방해 시 3년 이내 손해배상을 청구할 수 있습니다.',
      },
      {
        question: '환산보증금이란 무엇인가요?',
        answer:
          '보증금 + (월차임 × 100)으로 계산됩니다. 이 금액이 지역별 기준금액(서울 9억, 수도권 6억9천만원 등)을 초과하면 일부 보호 규정이 적용되지 않습니다.',
      },
      {
        question: '상가 보증금을 돌려받지 못하면?',
        answer:
          '내용증명 발송 → 임대차분쟁조정위원회 조정 → 보증금반환소송 순으로 대응합니다. 사업자등록 + 확정일자가 있으면 경매 시 우선변제를 받을 수 있습니다.',
      },
      {
        question: '차임 인상 제한은 어떻게 되나요?',
        answer:
          '계약 갱신 시 차임(보증금 포함)은 직전 차임의 5%를 초과하여 인상할 수 없습니다. 부당 인상 시 임대차분쟁조정위원회에 조정을 신청할 수 있습니다.',
      },
      {
        question: '상가임대차 분쟁조정은 어떻게 신청하나요?',
        answer:
          '대한법률구조공단 산하 임대차분쟁조정위원회에 신청합니다. 조정은 무료이며, 양 당사자가 합의하면 재판상 화해와 동일한 효력이 있습니다.',
      },
      {
        question: '상가 임차인이 사업자등록을 하지 않으면?',
        answer:
          '사업자등록이 없으면 대항력을 취득할 수 없어 경매 시 보증금을 보호받지 못할 수 있습니다. 입점 즉시 사업자등록을 하는 것이 중요합니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '계약/갱신',
        emoji: '📋',
        spokes: [
          { title: '갱신요구권 보호', slug: 'commercial-lease-renewal-rights-protection' },
          { title: '갱신 거절', slug: 'commercial-lease-renewal-rejection' },
          { title: '적용 법률 비교', slug: 'commercial-lease-law-applicable-comparison' },
        ],
      },
      {
        label: '권리금',
        emoji: '📋',
        spokes: [
          { title: '권리금 기본', slug: 'commercial-lease-key-money' },
          { title: '권리금 회수 기간', slug: 'key-money-recovery-timeline' },
          { title: '권리금 회수 차단', slug: 'sangga-premium-recovery-blocked' },
          { title: '임대인 방해 책임', slug: 'commercial-lease-premium-landlord-liability' },
        ],
      },
      {
        label: '보증금/차임',
        emoji: '📋',
        spokes: [
          { title: '보증금 반환', slug: 'commercial-deposit-return-process' },
          { title: '차임 인상 통지', slug: 'commercial-rent-increase-notification' },
          { title: '차임연체 특약', slug: 'commercial-lease-rent-arrears-special' },
          { title: '환산보증금 계산', slug: 'commercial-converted-deposit-calculation' },
        ],
      },
      {
        label: '계약해지/명도',
        emoji: '📋',
        spokes: [
          { title: '해지 절차', slug: 'commercial-lease-termination-procedure' },
          { title: '원상복구 의무', slug: 'commercial-lease-restoration-obligation' },
          { title: '우선변제', slug: 'commercial-lease-priority-repayment' },
        ],
      },
      {
        label: '관리비/수리',
        emoji: '📋',
        spokes: [
          { title: '관리비 분쟁', slug: 'commercial-lease-management-fee-dispute' },
          { title: '수선의무', slug: 'commercial-lease-repair-obligation' },
        ],
      },
      {
        label: '특수',
        emoji: '📋',
        spokes: [
          { title: '전대차 조건', slug: 'commercial-sublease-conditions' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '10년간 영업한 상가에서 임대인이 건물 재건축을 이유로 갱신을 거절하고 권리금 보상 없이 퇴거를 요구하는 상황',
        issue: '재건축이 갱신 거절의 정당한 사유인지, 권리금 회수 방해에 해당하는지가 쟁점인 경우',
        prep: '계약갱신요구권 잔여 기간을 확인하고, 권리금 회수 방해 여부를 입증할 자료를 준비하여 손해배상 청구를 검토해보세요',
      },
      {
        scene: '상가 보증금 5천만원을 돌려받지 못한 채 새 임차인이 입주한 상황',
        issue: '사업자등록과 확정일자를 받았는지, 우선변제권으로 보증금을 회수할 수 있는지가 쟁점인 경우',
        prep: '등기부등본을 확인하고, 내용증명을 발송한 뒤 보증금반환소송 또는 지급명령을 신청해보세요',
      },
    ],
  },

  bankruptcy: {
    overview:
      '개인파산은 채무자 회생 및 파산에 관한 법률에 따라 더 이상 채무를 갚을 수 없는 상태, 즉 지급불능 상태에 놓인 채무자가 법원에 파산 선고를 받고, 이어지는 면책결정을 통해 남은 채무를 탕감받는 절차입니다. 개인회생과 달리 정기적인 소득이 없어도 신청할 수 있다는 점이 가장 큰 차이입니다. 파산 절차의 핵심은 크게 두 가지, "지급불능 상태"를 법원에서 인정받는 것과 최종적으로 "면책 결정"을 받는 것입니다. 면책이 되면 일반 채무, 카드빚, 대출금 등 대부분의 빚에서 벗어날 수 있지만, 세금·양육비·벌금·고의 불법행위로 인한 손해배상채무처럼 면책되지 않는 빚도 있습니다. 또한 재산을 은닉하거나, 도박·사치로 과도한 채무를 만들었거나, 허위 서류를 제출한 경우에는 면책이 불허가될 수 있으므로 채무 발생 경위를 미리 정리해두는 것이 중요합니다. 절차는 파산·면책 동시 신청 → 심문기일 → 파산선고 → 면책심문 → 면책결정 순으로 진행됩니다. 자유재산으로 보호받을 수 있는 범위도 알아두어야 합니다. 생활필수품, 소액예금(185만 원), 직업에 필요한 도구 등은 파산 후에도 보유할 수 있습니다. 최근에는 자유재산 범위가 확대되고 동시폐지 절차가 간소화되는 추세여서, 과거보다 개인파산 절차가 한결 수월해졌습니다. 개인회생은 3~5년간 변제 계획을 이행해야 하지만, 파산은 면책 결정 한 번으로 채무에서 벗어날 수 있어 소득이 없거나 변제 능력이 전혀 없는 분들에게 현실적인 선택지가 됩니다.',
    perspectives: [
      {
        label: '빚을 갚을 능력이 없습니다',
        emoji: '🔴',
        checks: [
          '총 채무와 소득·재산을 비교하여 지급불능 상태인지 확인',
          '면책불허가 사유(도박·사치·재산은닉 등)에 해당하는지 점검',
          '면책되지 않는 빚(세금·양육비·벌금)이 얼마인지 파악',
        ],
      },
      {
        label: '파산과 회생 중 무엇이 맞는지 모르겠습니다',
        emoji: '🟡',
        checks: [
          '정기적인 소득이 있는지, 변제 가능성이 있는지 확인',
          '보유 재산(부동산·차량·보험 등) 현황 정리',
          '3~5년간 변제 계획 이행이 가능한지 판단',
        ],
      },
      {
        label: '면책이 안 될까봐 걱정됩니다',
        emoji: '🔵',
        checks: [
          '채무 발생 경위가 도박·사치에 해당하는지 확인',
          '파산 신청 전 재산 처분·명의 이전 이력 점검',
          '과거 파산·면책 신청 이력 유무 확인',
        ],
      },
    ],
    preparations: [
      {
        title: '전체 채무 확인',
        desc: '신용정보조회서(올크레딧·나이스)를 발급받아 금융기관 채무를 확인하고, 개인 간 차용금·보증채무 등도 빠짐없이 정리합니다.',
      },
      {
        title: '재산 목록 작성',
        desc: '부동산, 차량, 예금, 보험 해약환급금, 퇴직금 등 모든 재산을 목록화하고 자유재산에 해당하는지 확인합니다.',
      },
      {
        title: '채무 발생 경위 정리',
        desc: '각 채무가 어떻게 발생했는지 시간순으로 정리하여 면책불허가 사유(도박·사치·허위서류)에 해당하지 않는지 점검합니다.',
      },
      {
        title: '소득·지출 증빙',
        desc: '급여명세서, 사업소득증명서, 생활비 내역 등을 준비하여 지급불능 상태를 객관적으로 입증합니다.',
      },
      {
        title: '필수 서류 준비',
        desc: '가족관계증명서, 주민등록등본, 임대차계약서, 재산세 과세증명서 등 법원 제출용 기본 서류를 미리 발급받습니다.',
      },
    ],
    faqs: [
      {
        question: '파산하면 빚이 전부 없어지나요?',
        answer:
          '면책결정이 확정되면 대부분의 빚(카드빚, 대출금, 일반 채무)은 탕감됩니다. 다만 세금, 양육비, 벌금, 고의 불법행위 손해배상 등은 면책 대상에서 제외됩니다.',
      },
      {
        question: '세금이나 양육비도 면책되나요?',
        answer:
          '아닙니다. 세금, 양육비, 벌금, 고의 불법행위로 인한 손해배상채무는 면책되지 않는 비면책채권입니다. 이 채무는 파산 후에도 그대로 남습니다.',
      },
      {
        question: '도박 빚도 면책받을 수 있나요?',
        answer:
          '도박으로 과도한 채무를 진 경우 면책불허가 사유에 해당할 수 있습니다. 다만 법원은 파산에 이르게 된 경위, 반성 정도 등을 종합적으로 고려하여 재량면책을 허가하기도 합니다.',
      },
      {
        question: '파산하면 집과 차를 잃나요?',
        answer:
          '파산재단에 포함되는 재산은 환가 대상이지만, 생활필수품·소액예금(185만 원)·직업도구 등 자유재산은 보호됩니다. 최근 자유재산 범위가 확대되는 추세입니다.',
      },
      {
        question: '파산 기록은 얼마나 남나요?',
        answer:
          '파산 선고 사실은 관보에 공고되며, 신용정보에는 면책 확정 후 5년간 기록이 남습니다. 면책 확정 후 일정 기간이 지나면 신용 회복이 가능합니다.',
      },
      {
        question: '배우자나 가족에게 영향이 있나요?',
        answer:
          '파산은 신청인 본인에게만 효력이 있습니다. 다만 배우자가 연대보증인이거나 공동채무자인 경우 배우자의 채무는 별도로 남으므로 주의가 필요합니다.',
      },
      {
        question: '회생과 파산 중 뭐가 유리한가요?',
        answer:
          '정기 소득이 있고 3~5년간 변제가 가능하면 회생, 소득이 없거나 변제 능력이 전혀 없으면 파산이 적합합니다. 보유 재산, 채무 규모, 면책불허가 사유 등을 종합적으로 판단해야 합니다.',
      },
      {
        question: '면책불허가되면 어떻게 하나요?',
        answer:
          '면책불허가 결정에 대해 즉시항고로 불복할 수 있습니다. 법원은 재량면책 제도를 통해 면책불허가 사유가 있더라도 경위와 사정을 고려하여 면책을 허가할 수 있습니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '파산 신청/절차',
        emoji: '📋',
        spokes: [
          { title: '빚이 감당 안 될 때', slug: 'too-much-debt-where-to-start' },
          { title: '신청부터 면책까지', slug: 'application-to-discharge-full-procedure' },
          { title: '필요 서류 목록', slug: 'application-required-documents-full-list' },
          { title: '면책심문 준비', slug: 'discharge-hearing-procedure-preparation' },
        ],
      },
      {
        label: '면책 가능 여부',
        emoji: '📋',
        spokes: [
          { title: '면책 요건 총정리', slug: 'bankruptcy-discharge-requirements-comprehensive' },
          { title: '면책 안 되는 빚', slug: 'non-dischargeable-debts-after-bankruptcy' },
          { title: '도박 빚 면책', slug: 'bankruptcy-gambling-debt-discharge' },
          { title: '면책불허가 사유', slug: 'discharge-denial-reasons-key-cases' },
        ],
      },
      {
        label: '재산 보호',
        emoji: '📋',
        spokes: [
          { title: '집과 차 잃나요', slug: 'will-i-lose-house-and-car' },
          { title: '자유재산 범위', slug: 'bankruptcy-personal-property-exempt' },
          { title: '압류 해제 절차', slug: 'bankruptcy-seizure-release-process' },
          { title: '신청 전 재산처분 위험', slug: 'disposing-assets-before-filing-denial' },
        ],
      },
      {
        label: '파산 vs 회생',
        emoji: '📋',
        spokes: [
          { title: '파산 vs 회생 비교', slug: 'bankruptcy-vs-rehabilitation-comparison' },
          { title: '사전 자가진단', slug: 'pre-filing-self-assessment-checklist' },
          { title: '사업 실패 후 파산', slug: 'business-failure-bankruptcy-eligible' },
        ],
      },
      {
        label: '특수 채무',
        emoji: '📋',
        spokes: [
          { title: '세금 채무 면책', slug: 'bankruptcy-tax-debt-discharge-possible' },
          { title: '학자금 대출 면책', slug: 'bankruptcy-student-loan-discharge' },
          { title: '상속 채무 면책', slug: 'bankruptcy-inheritance-debt-discharge-guide' },
          { title: '누락 채권자 면책', slug: 'bankruptcy-omitted-creditor-discharged' },
        ],
      },
      {
        label: '파산 후 생활',
        emoji: '📋',
        spokes: [
          { title: '면책 후 생활 변화', slug: 'bankruptcy-after-discharge-life-changes' },
          { title: '신용 회복 기간', slug: 'bankruptcy-credit-recovery-timeline' },
          { title: '면책 채무 등재', slug: 'bankruptcy-discharged-debt-registry' },
          { title: '배우자 공동 신청', slug: 'bankruptcy-spouse-joint-filing' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '파산 면책결정을 받았으나 채권자목록에 일부 채권자를 누락하여 비면책채권 여부가 다투어지는 상황',
        issue: '채무자가 채무 존재를 알면서도 채권자목록에 기재하지 않은 "악의"에 해당하는지, 면책결정의 효력이 누락된 채권에도 미치는지가 쟁점인 경우 (대법원 2025마7576)',
        prep: '채권자목록 작성 시 모든 채무를 빠짐없이 기재하고, 신용정보조회서와 개인 간 채무 내역을 꼼꼼히 확인해보세요',
      },
      {
        scene: '파산관재인이 설명의무 위반을 이유로 면책불허가를 주장하여 면책 여부가 불투명한 상황',
        issue: '채무자의 설명 거부가 면책불허가 사유에 해당하는지, 재량면책이 가능한지가 쟁점인 경우 (대법원 2024마6789)',
        prep: '파산관재인의 자료 요청에 성실히 응하되, 요청 범위가 과도한 경우 정당한 사유를 소명할 준비를 해보세요',
      },
      {
        scene: '면책결정 후에도 임대차보증금 등 우선변제권 있는 채권의 면책 여부가 불분명한 상황',
        issue: '우선변제권이 인정되는 보증금반환채권에도 면책결정 효력이 미치는지가 쟁점인 경우 (대법원 2022다247378)',
        prep: '면책되는 채무와 비면책채권의 범위를 정확히 파악하고, 임대차보증금 등 우선변제권 관련 채권의 처리 방안을 확인해보세요',
      },
    ],
  },

  'real-estate-sale': {
    overview:
      '부동산 매매는 민법과 부동산거래신고법, 공인중개사법 등에 의해 규율되는 대표적인 고액 거래입니다. 매매계약 체결부터 계약금·중도금·잔금 지급, 소유권이전등기까지 여러 단계를 거치며, 각 단계에서 계약해제, 하자 발견, 이중계약, 중개사 분쟁, 등기 문제, 세금 이슈 등 다양한 분쟁이 발생할 수 있습니다. 매수자는 등기부등본 확인, 실거래가 검증, 건물 상태 점검이 필수이고, 매도자는 하자고지의무, 세금 신고, 명도 일정 관리가 핵심입니다. 부동산거래신고법에 따라 계약일로부터 30일 내에 실거래 신고를 해야 하며, 허위 신고(업다운계약서) 시 과태료와 형사처벌을 받을 수 있습니다. 공인중개사의 중개 과실이나 설명의무 위반으로 손해가 발생한 경우 공제 기금을 통한 배상 청구가 가능합니다. 양도소득세, 취득세 등 세금 문제도 매매 과정에서 반드시 사전에 확인해야 할 사항입니다.',
    perspectives: [
      {
        label: '매수자로서 분쟁이 발생했습니다',
        emoji: '🔴',
        checks: [
          '매매계약서, 등기부등본, 중개대상물 확인설명서를 확보했는지 확인해보세요',
          '계약 해제 시 위약금 조항과 계약금 반환 조건을 검토해보세요',
          '하자 발견 시 매도자 고지의무 위반 여부와 손해배상 청구 가능성을 확인해보세요',
        ],
      },
      {
        label: '매도자로서 분쟁이 발생했습니다',
        emoji: '🟡',
        checks: [
          '매수자의 잔금 미지급 시 이행최고 후 계약해제 절차를 검토해보세요',
          '하자고지의무를 충실히 이행했는지 관련 자료를 확인해보세요',
          '양도소득세 신고 기한과 비과세 요건을 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '등기부등본 확인',
        desc: '매매 대상 부동산의 등기부등본을 발급받아 소유자, 근저당권, 가압류, 전세권 등 권리관계를 꼼꼼히 확인해보세요.',
      },
      {
        title: '매매계약서 검토',
        desc: '특약사항, 위약금 조항, 하자담보 조건, 잔금 지급 일정 등을 꼼꼼히 확인하고, 불리한 조항이 없는지 검토해보세요.',
      },
      {
        title: '실거래가 및 시세 확인',
        desc: '국토교통부 실거래가 공개시스템에서 주변 시세를 확인하고, 업다운계약서 작성을 절대 하지 마세요.',
      },
      {
        title: '세금 사전 계산',
        desc: '취득세(매수자), 양도소득세(매도자)를 사전에 계산하고, 비과세 요건이나 감면 혜택을 확인해보세요.',
      },
      {
        title: '전문가 상담 준비',
        desc: '부동산 전문 변호사 또는 법무사 상담 시 등기부등본, 매매계약서, 감정평가서 등을 지참하면 효율적입니다.',
      },
    ],
    faqs: [
      {
        question: '계약금을 지급한 후 계약을 해제할 수 있나요?',
        answer:
          '상대방이 이행에 착수하기 전이라면 매수자는 계약금을 포기하고, 매도자는 계약금의 배액을 상환하여 계약을 해제할 수 있습니다(민법 제565조).',
      },
      {
        question: '매매 후 숨겨진 하자를 발견하면 어떻게 하나요?',
        answer:
          '매도자에게 하자고지의무 위반을 이유로 손해배상을 청구할 수 있습니다. 하자를 알았거나 알 수 있었을 때부터 6개월 내에 권리를 행사해야 합니다.',
      },
      {
        question: '이중계약(업다운계약서)의 위험은 무엇인가요?',
        answer:
          '부동산거래신고법 위반으로 과태료(취득가액의 5% 이하)가 부과되며, 양도소득세 탈루 시 가산세와 형사처벌까지 받을 수 있습니다.',
      },
      {
        question: '중개사 과실로 손해를 입으면 어떻게 하나요?',
        answer:
          '공인중개사법에 따라 중개사의 공제 기금 또는 보증보험을 통해 손해배상을 청구할 수 있습니다. 중개대상물 확인설명서 미교부나 설명의무 위반이 대표적인 과실입니다.',
      },
      {
        question: '잔금일에 매도자가 잔금을 안 받으면 어떻게 하나요?',
        answer:
          '잔금을 법원에 공탁하고 소유권이전등기를 청구할 수 있습니다. 매도자의 이행 거절이 명백한 경우 계약 해제와 손해배상 청구도 가능합니다.',
      },
      {
        question: '부동산 매매 시 취득세는 얼마인가요?',
        answer:
          '주택의 경우 취득가액의 1~3%(조정대상지역 2주택 8%, 3주택 이상 12%)이며, 농지·상가 등은 별도 세율이 적용됩니다.',
      },
      {
        question: '매매계약 후 소유권이전등기는 언제 해야 하나요?',
        answer:
          '잔금 지급일로부터 60일 내에 소유권이전등기를 신청해야 합니다. 기한 내 미등기 시 과태료가 부과될 수 있습니다.',
      },
      {
        question: '가계약금만 보낸 경우 계약이 성립하나요?',
        answer:
          '가계약금 지급만으로는 정식 매매계약이 성립하지 않는 것이 판례의 입장이나, 구체적 합의 내용에 따라 달라질 수 있으므로 주의가 필요합니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '계약 체결',
        emoji: '📋',
        spokes: [
          { title: '필수 조항', slug: 'sale-contract-essential-clauses' },
          { title: '등기 확인', slug: 'registry-check-before-contract' },
          { title: '계약 실수', slug: 'common-mistakes-in-sale-contract' },
          { title: '사기 예방', slug: 'real-estate-fraud-prevention' },
        ],
      },
      {
        label: '계약 해제/위약',
        emoji: '📋',
        spokes: [
          { title: '해제 계약금', slug: 'contract-cancellation-deposit-return' },
          { title: '해지 계약금', slug: 'contract-cancel-deposit-return' },
          { title: '위약금', slug: 'real-estate-contract-cancellation-penalty' },
          { title: '특약 위반', slug: 'special-agreement-breach-response' },
        ],
      },
      {
        label: '하자/분쟁',
        emoji: '📋',
        spokes: [
          { title: '하자 손해배상', slug: 'defect-damage-claim' },
          { title: '부동산 하자', slug: 'real-estate-defect-damage-claim' },
          { title: '하자 발견 청구', slug: 'sale-defect-discovery-damage-claim' },
          { title: '신축 하자', slug: 'new-apartment-defect-claim' },
        ],
      },
      {
        label: '소유권/등기',
        emoji: '📋',
        spokes: [
          { title: '소유권이전', slug: 'ownership-transfer-registration' },
          { title: '근저당 해소', slug: 'seller-lien-mortgage-clearing' },
          { title: '중도금 미지급', slug: 'unpaid-interim-seller-response' },
          { title: '이중매매 보호', slug: 'double-sale-buyer-protection' },
        ],
      },
      {
        label: '중개사',
        emoji: '📋',
        spokes: [
          { title: '중개사 책임', slug: 'real-estate-agent-liability' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '아파트 매수 후 입주했는데 누수와 곰팡이 등 숨겨진 하자가 발견된 상황',
        issue: '매도자가 하자를 알면서도 고지하지 않았는지가 쟁점인 경우',
        prep: '하자 사진 촬영, 수리 견적서 확보, 매매계약서 특약 확인 후 내용증명 발송을 진행해보세요',
      },
      {
        scene: '매수자가 잔금 기일에 잔금을 지급하지 않아 매도 일정이 지연된 상황',
        issue: '이행최고 후 계약해제가 가능한지, 위약금 청구 범위가 쟁점인 경우',
        prep: '내용증명으로 이행최고(상당 기간 지정), 계약서 위약금 조항 확인 후 계약해제 통보를 진행해보세요',
      },
    ],
  },

  'real-estate-auction': {
    overview:
      '부동산 경매는 민사집행법에 따라 채권자의 신청으로 법원이 채무자의 부동산을 강제로 매각하여 채권을 회수하는 절차입니다. 경매 절차는 경매 신청, 감정평가, 매각기일 공고, 입찰, 낙찰, 대금납부, 소유권이전 순서로 진행됩니다. 권리분석이 핵심으로, 말소기준권리(저당권, 압류, 가압류 등)보다 앞선 권리(선순위 임차권, 법정지상권 등)는 낙찰 후에도 소멸하지 않으므로 입찰 전 반드시 확인해야 합니다. 임차인의 경우 대항력과 확정일자 유무에 따라 보증금 회수 여부가 결정되며, 배당요구 종기까지 반드시 배당요구를 해야 합니다. 낙찰 후에는 대금납부, 소유권이전등기, 인도명령 또는 명도소송을 통해 부동산을 인도받게 됩니다. 인도명령은 낙찰대금 납부 후 6개월 내에 신청해야 하며, 점유자가 정당한 권원이 없는 경우에만 인용됩니다. 경매 투자 시에는 권리분석 실수로 인한 손실 위험이 크므로 전문가의 조력을 받는 것이 안전합니다.',
    perspectives: [
      {
        label: '경매로 부동산 매수를 희망합니다',
        emoji: '🔴',
        checks: [
          '등기부등본과 매각물건명세서로 권리분석을 완료했는지 확인해보세요',
          '말소기준권리와 인수되는 권리를 정확히 파악했는지 검토해보세요',
          '현장 답사를 통해 점유 관계와 건물 상태를 확인했는지 점검해보세요',
        ],
      },
      {
        label: '임차인으로서 경매에 휘말렸습니다',
        emoji: '🟡',
        checks: [
          '전입신고일과 확정일자를 확인하여 대항력과 우선변제권 유무를 확인해보세요',
          '배당요구 종기 내에 배당요구서를 제출했는지 확인해보세요',
          '보증금 회수가 어려운 경우 임차권등기명령 신청을 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '권리분석 수행',
        desc: '등기부등본, 매각물건명세서, 현황조사보고서, 감정평가서를 확인하여 인수되는 권리와 소멸되는 권리를 분석해보세요.',
      },
      {
        title: '입찰 가격 산정',
        desc: '감정가 대비 시세, 인수 권리 금액, 수리비용 등을 종합하여 최대 입찰가를 결정해보세요.',
      },
      {
        title: '현장 답사',
        desc: '점유자 확인, 건물 상태 점검, 주변 환경 조사를 위해 반드시 현장을 방문해보세요.',
      },
      {
        title: '배당요구(임차인)',
        desc: '임차인의 경우 배당요구 종기까지 법원에 배당요구서, 임대차계약서, 전입세대열람 등을 제출해야 합니다.',
      },
      {
        title: '전문가 상담 준비',
        desc: '경매 전문 변호사 또는 법무사에게 권리분석 보고서와 입찰 계획을 상담하면 위험을 줄일 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '경매 입찰은 어떻게 참여하나요?',
        answer:
          '법원 경매 사이트(대법원 경매정보)에서 매각 물건을 검색하고, 매각기일에 법원에 방문하여 입찰표를 제출합니다. 입찰 보증금(최저매각가의 10%)을 미리 준비해야 합니다.',
      },
      {
        question: '말소기준권리란 무엇인가요?',
        answer:
          '경매로 소멸하는 권리의 기준이 되는 권리로, 저당권·압류·가압류·담보가등기 중 가장 먼저 설정된 것을 말합니다. 이보다 후순위 권리는 경매로 소멸하고, 선순위 권리는 매수인이 인수합니다.',
      },
      {
        question: '선순위 임차인이 있으면 어떻게 되나요?',
        answer:
          '말소기준권리보다 앞서 대항력을 갖춘 임차인은 매수인이 보증금 반환 의무를 인수합니다. 이를 놓치면 큰 손실이 발생하므로 권리분석이 매우 중요합니다.',
      },
      {
        question: '낙찰 후 점유자가 나가지 않으면 어떻게 하나요?',
        answer:
          '대금납부 후 6개월 내에 인도명령을 신청할 수 있습니다. 정당한 점유 권원이 없는 경우 법원이 인도명령을 발령하며, 이에 불응하면 강제집행이 가능합니다.',
      },
      {
        question: '경매 낙찰 후 잔금은 언제까지 내야 하나요?',
        answer:
          '법원이 지정한 대금납부기한(통상 낙찰일로부터 1개월 이내)까지 납부해야 합니다. 기한 내 미납 시 매각허가가 취소되고 입찰보증금을 몰수당합니다.',
      },
      {
        question: '유찰되면 가격이 얼마나 내려가나요?',
        answer:
          '1회 유찰 시 최저매각가격의 20%가 낮아지는 것이 일반적입니다. 2회, 3회 유찰을 거치며 추가 하락하므로 유찰 물건을 노리는 투자 전략도 있습니다.',
      },
      {
        question: '배당요구를 안 하면 보증금을 못 받나요?',
        answer:
          '확정일자가 있는 임차인이라도 배당요구 종기까지 배당요구를 하지 않으면 배당에서 제외됩니다. 다만 대항력이 있으면 매수인에게 보증금 반환을 청구할 수 있습니다.',
      },
      {
        question: '경매로 취득한 부동산의 취득세는 얼마인가요?',
        answer:
          '일반 매매와 동일한 취득세율이 적용됩니다. 주택의 경우 1~3%(다주택자는 중과세율), 농지·상가 등은 별도 세율이 적용됩니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '입찰 전 확인',
        emoji: '📋',
        spokes: [
          { title: '경매 시작', slug: 'auction-where-to-start-beginner' },
          { title: '입찰 전 체크리스트', slug: 'pre-bidding-checklist' },
          { title: '권리분석', slug: 'auction-rights-analysis-checklist' },
          { title: '초보 실수', slug: 'beginner-auction-common-mistakes' },
        ],
      },
      {
        label: '입찰/절차',
        emoji: '📋',
        spokes: [
          { title: '입찰 절차', slug: 'auction-bidding-procedure' },
          { title: '입찰 서류', slug: 'bidding-required-documents' },
          { title: '대출 준비', slug: 'auction-loan-preparation' },
        ],
      },
      {
        label: '배당/우선변제',
        emoji: '📋',
        spokes: [
          { title: '배당 순위', slug: 'distribution-priority-and-claim' },
          { title: '잉여금 배당', slug: 'auction-surplus-distribution' },
          { title: '임차인 있는 물건', slug: 'auction-property-with-tenant' },
        ],
      },
      {
        label: '명도/점유',
        emoji: '📋',
        spokes: [
          { title: '낙찰 후 명도', slug: 'eviction-after-winning-bid' },
          { title: '명도소송', slug: 'auction-eviction-lawsuit-process' },
          { title: '점유자 거부', slug: 'occupant-refuses-to-leave' },
        ],
      },
      {
        label: '특수 문제',
        emoji: '📋',
        spokes: [
          { title: '유치권 위험', slug: 'auction-lien-risk-analysis' },
          { title: '취소 보증금 회수', slug: 'auction-cancellation-deposit-recovery' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '경매로 아파트를 낙찰받았는데 선순위 임차인이 보증금 1억 원 반환을 요구하는 상황',
        issue: '임차인의 대항력 취득 시점이 말소기준권리보다 앞선지가 쟁점인 경우',
        prep: '전입세대열람, 확정일자 부여일, 등기부등본상 말소기준권리 설정일을 비교 확인해보세요',
      },
      {
        scene: '임차 중인 주택이 경매에 넘어가 배당요구 종기를 앞두고 있는 상황',
        issue: '대항력과 우선변제권의 유무에 따라 보증금 회수 전략이 달라지는 경우',
        prep: '전입신고일·확정일자 확인, 배당요구서 작성, 임차권등기명령 신청 검토를 진행해보세요',
      },
    ],
  },

  'neighbor-dispute': {
    overview:
      '이웃 간 분쟁은 층간소음, 반려동물 문제, 경계 분쟁, 일조권 침해, 건물 하자와 누수, 악취·분진 등 다양한 유형으로 발생합니다. 층간소음은 공동주택관리법과 층간소음 관리기준에 따라 규율되며, 주간 40dB·야간 35dB을 초과하면 직상층의 수인한도 초과 소음으로 인정될 수 있습니다. 경계 분쟁은 민법의 상린관계 규정이 적용되고, 일조권 침해는 건축법과 판례상 수인한도론에 따라 판단됩니다. 환경 분쟁(소음, 악취, 진동 등)의 경우 환경분쟁조정위원회에 조정을 신청할 수 있으며, 소송보다 비용과 시간이 절감됩니다. 민사조정도 분쟁 해결의 효과적인 수단입니다. 이웃 분쟁은 감정 대립이 심화되기 쉬우므로, 증거를 체계적으로 확보하면서도 원만한 해결을 우선적으로 모색하는 것이 바람직합니다. 지자체 분쟁조정위원회나 주민센터 갈등 조정 서비스를 먼저 활용해볼 수 있습니다.',
    perspectives: [
      {
        label: '층간소음 피해를 겪고 있습니다',
        emoji: '🔴',
        checks: [
          '소음 측정 앱이나 전문 측정기로 소음 수치를 기록했는지 확인해보세요',
          '관리사무소에 민원을 접수하고 답변을 받았는지 확인해보세요',
          '층간소음이웃사이센터(1661-2642)에 상담을 신청했는지 확인해보세요',
        ],
      },
      {
        label: '기타 이웃 분쟁이 발생했습니다',
        emoji: '🟡',
        checks: [
          '피해 내용(누수, 악취, 반려동물, 경계 등)을 사진·영상으로 기록했는지 확인해보세요',
          '상대방에게 내용증명 등 공식적 시정 요청을 했는지 확인해보세요',
          '환경분쟁조정위원회 또는 지자체 조정 제도를 이용할 수 있는지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '피해 증거 확보',
        desc: '소음은 측정 기록과 일지, 누수는 사진과 수리 견적서, 악취는 환경부 측정 의뢰 등 유형별 증거를 체계적으로 확보해보세요.',
      },
      {
        title: '관리사무소·지자체 민원',
        desc: '아파트 관리사무소나 주민센터에 공식 민원을 접수하고, 접수번호와 처리 결과를 보관해보세요.',
      },
      {
        title: '내용증명 발송',
        desc: '상대방에게 피해 사실과 시정 요구를 내용증명으로 발송하면 법적 분쟁 시 증거로 활용할 수 있습니다.',
      },
      {
        title: '분쟁조정 신청 검토',
        desc: '환경분쟁조정위원회, 건축분쟁조정위원회, 민사조정 등 소송 전 조정 제도를 활용하면 비용과 시간을 절약할 수 있습니다.',
      },
      {
        title: '전문가 상담 준비',
        desc: '변호사 상담 시 피해 일지, 증거 자료, 관리사무소 민원 이력, 상대방과의 대화 기록을 정리하여 지참해보세요.',
      },
    ],
    faqs: [
      {
        question: '층간소음 기준은 어떻게 되나요?',
        answer:
          '공동주택 층간소음 관리기준에 따르면 직접충격 소음은 주간 39dB·야간 34dB, 공기전달 소음은 주간 45dB·야간 40dB을 초과하면 층간소음에 해당합니다.',
      },
      {
        question: '위층 소음이 심한데 어떻게 대응하나요?',
        answer:
          '먼저 관리사무소에 민원을 접수하고, 층간소음이웃사이센터에 상담을 신청하세요. 해결이 안 되면 환경분쟁조정위원회 조정 신청이나 손해배상 소송을 검토할 수 있습니다.',
      },
      {
        question: '윗집 누수로 피해를 입었는데 배상받을 수 있나요?',
        answer:
          '누수 원인이 윗집 귀책사유(배관 관리 소홀 등)인 경우 수리비와 재산 피해에 대한 손해배상을 청구할 수 있습니다. 공용부분 하자라면 관리주체나 시공사에 청구합니다.',
      },
      {
        question: '옆집 반려동물 소음과 악취는 어떻게 해결하나요?',
        answer:
          '동물보호법상 반려동물 관리 의무가 있으며, 관리사무소 민원 접수 후 시정이 안 되면 지자체에 신고하거나 민사소송으로 손해배상·방해배제를 청구할 수 있습니다.',
      },
      {
        question: '경계 침범으로 분쟁이 생겼는데 어떻게 하나요?',
        answer:
          '지적측량을 통해 경계를 확정하고, 침범이 확인되면 민법상 소유물반환청구 또는 방해배제청구를 할 수 있습니다. 경계확정의 소를 제기할 수도 있습니다.',
      },
      {
        question: '일조권 침해로 소송할 수 있나요?',
        answer:
          '건축법상 일조권 기준(동지일 기준 9시~15시 사이 연속 2시간 이상 일조 확보)을 충족하지 못하면 수인한도 초과로 손해배상을 청구할 수 있습니다.',
      },
      {
        question: '환경분쟁조정위원회는 어떻게 이용하나요?',
        answer:
          '환경분쟁조정법에 따라 소음, 진동, 악취 등 환경 피해에 대해 조정을 신청할 수 있습니다. 수수료가 저렴하고 전문가 조정으로 빠른 해결이 가능합니다.',
      },
      {
        question: '이웃 분쟁으로 형사고소도 가능한가요?',
        answer:
          '지속적인 소음, 폭언, 협박 등이 있으면 경범죄처벌법 위반, 주거침입, 협박죄 등으로 형사고소가 가능합니다. 다만 증거 확보가 필수적입니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '층간소음',
        emoji: '📋',
        spokes: [
          { title: '층간소음 피해 어디부터 시작해야 하나', slug: 'floor-noise-victim-where-to-start' },
          { title: '층간소음 분쟁 대응 가이드', slug: 'floor-noise-dispute-response' },
          { title: '층간소음 데시벨 기준과 측정 방법', slug: 'floor-noise-decibel-standard' },
          { title: '층간소음 신고부터 조정까지 절차', slug: 'floor-noise-report-to-mediation-procedure' },
        ],
      },
      {
        label: '증거/법적조치',
        emoji: '📋',
        spokes: [
          { title: '이웃 소음 앱 녹음 증거 활용법', slug: 'neighbor-noise-evidence-app-recording' },
          { title: '층간소음 손해배상 핵심 판례', slug: 'floor-noise-damage-amount-key-cases' },
          { title: '관리사무소 대응과 법적조치', slug: 'neighbor-noise-management-office-legal-action' },
          { title: '소음 신고했더니 역소송 당한 경우', slug: 'noise-complaint-leads-to-counter-lawsuit' },
        ],
      },
      {
        label: '생활소음/악취',
        emoji: '📋',
        spokes: [
          { title: '악취·반려동물·주차 이웃 분쟁 대응', slug: 'neighbor-dispute-smell-pet-parking' },
          { title: '반려동물 소음·악취 법적 대응', slug: 'pet-noise-smell-legal-action' },
          { title: '베란다 간접흡연 피해 대응법', slug: 'neighbor-balcony-smoke-secondhand' },
          { title: '불법주차 분쟁 대응 가이드', slug: 'illegal-parking-dispute-response' },
        ],
      },
      {
        label: '공사/건물',
        emoji: '📋',
        spokes: [
          { title: '공사소음·진동 피해 대응법', slug: 'construction-noise-vibration-response' },
          { title: '리모델링 소음 손해배상 청구', slug: 'neighbor-dispute-renovation-noise-claim' },
          { title: '신축 건물 일조권 침해 대응', slug: 'new-building-blocking-sunlight-response' },
          { title: '누수 피해 손해배상 청구', slug: 'water-leak-damage-claim' },
        ],
      },
      {
        label: '공용시설',
        emoji: '📋',
        spokes: [
          { title: '공유시설 분쟁 해결 가이드', slug: 'neighbor-shared-facility-dispute' },
          { title: 'CCTV 프라이버시 분쟁 대응', slug: 'neighbor-cctv-privacy-dispute' },
          { title: '경계벽 분쟁 해결 절차', slug: 'boundary-wall-dispute' },
        ],
      },
      {
        label: '피해 대응',
        emoji: '📋',
        spokes: [
          { title: '참을 수 없는 윗집 소음 대응법', slug: 'unbearable-upstairs-noise-response' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '윗층 아이들의 뛰는 소음으로 수년간 수면장애와 스트레스를 겪고 있는 상황',
        issue: '소음 측정 결과 기준치 초과 여부와 수인한도 초과 인정이 쟁점인 경우',
        prep: '소음 측정 기록(일시·수치), 관리사무소 민원 이력, 병원 진단서를 확보하고 환경분쟁조정을 신청해보세요',
      },
      {
        scene: '윗집 화장실 배관 누수로 천장과 벽지가 손상되어 수리비가 발생한 상황',
        issue: '누수 원인이 전유부분(윗집) 하자인지 공용부분 하자인지가 쟁점인 경우',
        prep: '누수 사진·동영상, 배관 점검 결과, 수리 견적서를 확보하고 관리사무소와 윗집에 내용증명을 발송해보세요',
      },
    ],
  },

  'small-claims': {
    overview:
      '소액사건심판법은 소송 목적의 값이 3,000만 원 이하인 민사사건에 적용되는 간이·신속한 재판 절차입니다. 대여금, 매매대금, 용역대금, 손해배상 등 일상적인 금전 분쟁에서 널리 활용됩니다. 소장 접수 후 즉시 변론기일이 지정되며, 원칙적으로 1회 기일에 심리를 마치고 바로 선고합니다. 지급명령 제도를 이용하면 상대방이 이의하지 않을 경우 재판 없이 집행권원을 확보할 수 있어 더욱 간편합니다. 이행권고결정은 법원이 소장 부본 송달 시 피고에게 이행을 권고하는 제도로, 이의가 없으면 확정판결과 같은 효력이 발생합니다. 소액사건은 변호사 없이도 본인이 직접 진행할 수 있으나, 증거 준비와 청구취지 작성을 정확히 해야 합니다. 승소 판결을 받더라도 상대방이 이행하지 않으면 강제집행(재산조회, 채권압류 등)을 별도로 신청해야 하므로 상대방의 재산 상태도 미리 파악해두는 것이 중요합니다.',
    perspectives: [
      {
        label: '돈을 받아야 하는 채권자입니다',
        emoji: '🔴',
        checks: [
          '차용증, 계약서, 송금 내역, 문자 등 채권 존재를 증명할 증거를 확보했는지 확인해보세요',
          '지급명령과 소액소송 중 어느 절차가 적합한지 비교 검토해보세요',
          '상대방의 재산(부동산, 직장, 예금 등)을 파악하여 강제집행 가능성을 확인해보세요',
        ],
      },
      {
        label: '부당한 청구를 받고 있는 채무자입니다',
        emoji: '🟡',
        checks: [
          '청구 내용이 사실과 다른 부분을 구체적으로 정리해보세요',
          '이미 변제했거나 소멸시효가 완성된 채무인지 확인해보세요',
          '지급명령을 받은 경우 2주 내 이의신청 기한을 놓치지 않았는지 확인해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '증거 자료 정리',
        desc: '차용증, 계약서, 이체 내역, 문자·카톡 대화, 녹취록 등 채권 발생과 변제 여부를 증명할 자료를 시간순으로 정리해보세요.',
      },
      {
        title: '청구금액 산정',
        desc: '원금, 이자(약정이율 또는 법정이율 연 5%), 지연손해금을 정확히 계산해보세요.',
      },
      {
        title: '소장 또는 지급명령 신청서 작성',
        desc: '대한법률구조공단 또는 법원 자가당사자 소송 지원실을 이용하면 서류 작성 도움을 받을 수 있습니다.',
      },
      {
        title: '상대방 재산 파악',
        desc: '승소 후 강제집행을 위해 상대방의 부동산, 직장, 예금 등 재산 정보를 미리 파악해두면 유리합니다.',
      },
      {
        title: '관할법원 확인',
        desc: '피고 주소지 또는 의무이행지(채권자 주소지)의 관할 법원에 소장을 제출합니다.',
      },
    ],
    faqs: [
      {
        question: '소액사건의 기준 금액은 얼마인가요?',
        answer:
          '소송 목적의 값이 3,000만 원 이하인 민사사건이 소액사건심판법의 적용을 받습니다. 이자나 지연손해금은 소송 목적의 값에 포함하지 않습니다.',
      },
      {
        question: '지급명령이란 무엇인가요?',
        answer:
          '금전 지급을 구하는 경우 재판 없이 법원이 채무자에게 지급을 명하는 절차입니다. 상대방이 2주 내 이의하지 않으면 확정판결과 같은 효력이 생깁니다.',
      },
      {
        question: '소장은 어떻게 작성하나요?',
        answer:
          '대한법원 전자소송 사이트에서 양식을 다운받거나, 법원 민원실에서 안내를 받을 수 있습니다. 청구취지(얼마를 달라)와 청구원인(왜 달라)을 명확히 기재해야 합니다.',
      },
      {
        question: '소액소송 비용은 얼마인가요?',
        answer:
          '인지대는 청구금액에 따라 다르며, 1,000만 원 기준 약 5만 원입니다. 송달료(약 5만 원)를 합해 총 10만 원 내외로 소송을 시작할 수 있습니다.',
      },
      {
        question: '이행권고결정이란 무엇인가요?',
        answer:
          '소액사건에서 법원이 소장 송달 시 피고에게 이행을 권고하는 결정으로, 피고가 2주 내 이의하지 않으면 확정판결과 같은 효력이 발생합니다.',
      },
      {
        question: '승소했는데 상대방이 돈을 안 주면 어떻게 하나요?',
        answer:
          '확정판결이나 지급명령을 집행권원으로 하여 재산조회, 채권압류(예금·급여), 부동산 강제경매 등 강제집행을 신청할 수 있습니다.',
      },
      {
        question: '소멸시효가 지난 채권도 청구할 수 있나요?',
        answer:
          '소멸시효가 완성된 채권도 소송 제기는 가능하나, 상대방이 소멸시효 항변을 하면 청구가 기각됩니다. 일반 채권은 10년, 상사채권은 5년입니다.',
      },
      {
        question: '전자소송으로도 진행할 수 있나요?',
        answer:
          '대한민국 법원 전자소송 시스템을 통해 소장 제출, 서류 확인, 기일 통지 등을 온라인으로 처리할 수 있어 편리합니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '소액소송 시작',
        emoji: '📋',
        spokes: [
          { title: '돈 못 받을 때 어디부터 시작해야 하나', slug: 'unpaid-money-where-to-start' },
          { title: '소액소송 vs 지급명령 비교', slug: 'small-claims-vs-payment-order-comparison' },
          { title: '혼자서 소액소송 진행하기', slug: 'small-claims-self-filing-guide' },
          { title: '변호사 없이 소송 가능할까', slug: 'can-i-do-it-without-lawyer' },
        ],
      },
      {
        label: '지급명령',
        emoji: '📋',
        spokes: [
          { title: '지급명령 신청 가이드', slug: 'payment-order-application-guide' },
          { title: '지급명령 신청부터 확정까지', slug: 'payment-order-application-to-confirmation' },
          { title: '소액소송 온라인 제출 가이드', slug: 'small-claims-online-filing-guide' },
        ],
      },
      {
        label: '소장/서류',
        emoji: '📋',
        spokes: [
          { title: '소장 작성과 필요 서류', slug: 'complaint-writing-required-documents' },
          { title: '소액소송 소장 양식 안내', slug: 'small-claims-complaint-template' },
          { title: '청구원인 누락하면 각하될 수 있다', slug: 'missing-cause-of-action-leads-to-dismissal' },
          { title: '소액소송 전체 절차 체크리스트', slug: 'full-process-checklist' },
        ],
      },
      {
        label: '사건 유형',
        emoji: '📋',
        spokes: [
          { title: '빌려준 돈 못 받을 때 소송 방법', slug: 'lending-money-not-returned-lawsuit' },
          { title: '중고거래 사기 소액소송', slug: 'used-goods-fraud-small-claims' },
          { title: '보증금 반환 소송 준비', slug: 'deposit-lawsuit-preparation' },
        ],
      },
      {
        label: '절차/판결',
        emoji: '📋',
        spokes: [
          { title: '소장 제출부터 판결까지 전체 절차', slug: 'complaint-to-judgment-full-procedure' },
          { title: '소액소송 자주 묻는 질문 가이드', slug: 'small-claims-faq-guide' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '친구에게 2,000만 원을 빌려줬는데 변제 기한이 지나도 갚지 않는 상황',
        issue: '차용증 없이 카카오톡 대화와 이체 내역만 있는 경우 증거력이 쟁점인 경우',
        prep: '카톡 대화 캡처, 이체 내역 출력, 증인 확보 후 지급명령 또는 소액소송을 진행해보세요',
      },
      {
        scene: '중고거래로 물건을 보냈는데 대금 50만 원을 받지 못한 상황',
        issue: '소액 분쟁에서 소송 비용 대비 실익이 있는지가 쟁점인 경우',
        prep: '거래 대화 내역, 택배 발송 증빙, 상대방 인적사항 확인 후 지급명령 신청을 검토해보세요',
      },
    ],
  },

  'child-support': {
    overview:
      '양육비는 이혼 후 비양육 부모가 자녀의 양육을 위해 부담하는 비용으로, 양육비이행확보 및 지원에 관한 법률(양육비이행확보법)에 근거합니다. 양육비 산정은 양육비 산정기준표를 기본으로 하며, 부모 합산소득과 자녀 연령에 따라 표준 금액이 정해집니다. 양육비는 협의, 조정, 심판의 순서로 결정되며, 협의가 이루어지지 않으면 가정법원에 양육비 청구 심판을 신청할 수 있습니다. 양육비가 미지급될 경우 이행명령 → 감치명령(30일 이내 구금) → 직접지급명령 → 강제집행(재산 압류) 순서로 강제 이행 수단을 활용할 수 있습니다. 양육비이행관리원(1644-6621)은 양육비 관련 상담, 합의 지원, 채권 추심, 긴급 양육비 지원, 법률 지원 등을 제공하는 공공기관입니다. 2021년 법 개정으로 양육비를 3회 이상 불이행하면 출국금지, 운전면허 정지 등 제재가 가능해졌습니다. 과거 양육비(소급분)도 청구할 수 있으며, 대법원 2023스637 판결에서 협의이혼 후 16년이 지난 후에도 과거 양육비 청구가 인정되었습니다. 성년이 된 자녀에 대한 미지급 양육비도 청구 가능하나, 미성년 자녀와는 분담 범위 산정 기준이 다릅니다. 소득 변동, 재혼 등 사정변경이 있으면 양육비 변경(증액·감액) 심판을 청구할 수 있습니다.',
    topQuestions: [
      { question: '양육비 산정기준표는 어떻게 보나요?', slug: 'child-support-calculation-standard' },
      { question: '양육비를 안 주면 어떻게 하나요?', slug: 'child-support-non-payment' },
      { question: '양육비 증액이나 감액은 어떻게 하나요?', slug: 'child-support-modification-income-change' },
    ],
    relatedHubs: [
      { domain: 'divorce', label: '이혼', reason: '이혼 절차에서 양육비 결정' },
      { domain: 'small-claims', label: '소액재판', reason: '양육비 미지급 시 강제집행 절차' },
    ],
    perspectives: [
      {
        label: '양육비를 정해야 하는 상황입니다',
        emoji: '🔴',
        checks: [
          '부모 합산 소득을 확인하고 양육비 산정기준표를 조회해보세요',
          '자녀 연령과 특별 비용(의료비, 교육비 등)을 반영한 적정 금액을 산출해보세요',
          '협의, 조정, 심판 중 어떤 방법으로 진행할지 선택해보세요',
        ],
      },
      {
        label: '양육비를 못 받고 있는 상황입니다',
        emoji: '🟡',
        checks: [
          '미지급 기간과 총 미지급 금액을 정리하고 증빙자료를 확보해보세요',
          '가정법원에 이행명령을 신청했는지 확인해보세요',
          '양육비이행관리원(1644-6621)에 등록하고 추심 지원을 요청해보세요',
        ],
      },
      {
        label: '강제집행이나 감치를 고민하는 상황입니다',
        emoji: '🔵',
        checks: [
          '감치명령 요건(이행명령 불이행)을 충족하는지 확인해보세요',
          '직접지급명령 신청으로 상대방 급여에서 직접 공제받을 수 있는지 검토해보세요',
          '재산조회 신청을 통해 상대방의 재산 현황을 파악해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '양육비 산정기준표 확인',
        desc: '대한법원 양육비 산정기준표에 부모 합산소득과 자녀 연령을 대입하여 적정 양육비를 산출해보세요. 특별 비용(의료비, 사교육비)은 별도 가산됩니다.',
      },
      {
        title: '상대방 소득자료 확보',
        desc: '상대방의 급여명세서, 종합소득세 신고서, 건강보험 자격득실 확인서 등 소득을 증명할 자료를 확보해보세요. 소득 파악이 어려우면 법원에 사실조회를 신청할 수 있습니다.',
      },
      {
        title: '양육비 부담조서 또는 판결문 확인',
        desc: '기존에 작성한 양육비 합의서, 조정조서, 심판결정문이 있다면 내용을 재확인하고, 이행 여부를 점검해보세요.',
      },
      {
        title: '미지급 내역 정리',
        desc: '양육비 미지급 기간, 미지급 총액, 일부 지급 내역 등을 월별로 정리하고 통장 거래내역 등 증빙을 확보해보세요.',
      },
      {
        title: '양육비이행관리원 상담',
        desc: '양육비이행관리원(1644-6621)에서 무료 법률 상담, 합의 지원, 추심 서비스, 긴급 양육비 지원을 받을 수 있습니다.',
      },
    ],
    faqs: [
      {
        question: '양육비 산정기준표는 어떻게 보나요?',
        answer:
          '양육비 산정기준표에 따라 부모 합산소득과 자녀 연령을 기준으로 산정합니다. 예를 들어 합산소득 500만 원, 자녀 1명(초등)인 경우 약 100만 원 내외이며, 특별 비용(의료비, 사교육비)은 별도 가산됩니다.',
      },
      {
        question: '양육비를 안 주면 어떻게 하나요?',
        answer:
          '이행명령 → 감치명령(30일 이내 구금) → 직접지급명령(급여에서 직접 공제) → 강제집행(재산 압류) 순서로 대응할 수 있습니다. 양육비이행관리원에 추심을 위임하는 방법도 있습니다.',
      },
      {
        question: '감치명령이 뭔가요?',
        answer:
          '양육비 이행명령을 받고도 정당한 이유 없이 이행하지 않으면 법원이 30일 이내의 감치(구금)를 명할 수 있습니다. 감치 결정 후에도 불이행하면 반복 신청이 가능합니다.',
      },
      {
        question: '과거 양육비도 받을 수 있나요?',
        answer:
          '이혼 후 양육비를 받지 못한 기간에 대해 과거 양육비(소급분)를 청구할 수 있습니다. 대법원 2023스637 판결에서 이혼 후 16년이 지난 후의 과거 양육비 청구도 인정한 바 있습니다.',
      },
      {
        question: '상대방 소득을 모르면 어떻게 하나요?',
        answer:
          '법원에 사실조회를 신청하여 국세청, 국민건강보험공단, 국민연금공단 등을 통해 상대방의 소득과 재산을 조회할 수 있습니다.',
      },
      {
        question: '양육비 증감이 가능한가요?',
        answer:
          '실직, 질병, 재혼, 자녀 교육비 증가 등 사정변경이 있으면 가정법원에 양육비 변경(증액 또는 감액) 심판을 청구할 수 있습니다.',
      },
      {
        question: '성인 자녀도 미지급 양육비를 청구할 수 있나요?',
        answer:
          '자녀가 성년이 된 후에도 미성년 시절의 미지급 양육비를 청구할 수 있습니다. 다만 성년 후에는 과거 양육비의 정산적 성격만 남게 되어 산정 기준이 달라집니다.',
      },
      {
        question: '양육비이행관리원은 어떻게 이용하나요?',
        answer:
          '전화(1644-6621) 또는 방문으로 신청합니다. 양육비 상담, 협의 성립 지원, 추심 서비스(채권 추심 위임), 긴급 양육비(한시적 지원금), 법률 지원 등을 무료로 제공합니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '양육비 산정',
        emoji: '📋',
        spokes: [
          { title: '양육비 산정기준표 활용법', slug: 'child-support-calculation-table' },
          { title: '양육비 청구 어디서부터 시작할까', slug: 'child-support-claim-where-to-start' },
          { title: '양육비 청구 체크리스트', slug: 'child-support-claim-checklist' },
          { title: '양육비 산정 기준 인상 방법', slug: 'child-support-calculation-increase' },
        ],
      },
      {
        label: '미지급 대응',
        emoji: '📋',
        spokes: [
          { title: '양육비 미지급 추심 방법', slug: 'child-support-overdue-collection' },
          { title: '양육비 이행확보 수단 총정리', slug: 'child-support-enforcement-methods' },
          { title: '양육비 감치명령 신청 방법', slug: 'child-support-enforcement-contempt-order' },
          { title: '양육비 이행명령 신청 절차', slug: 'child-support-enforcement-order-apply' },
        ],
      },
      {
        label: '양육비 변경',
        emoji: '📋',
        spokes: [
          { title: '소득 변동에 따른 양육비 변경', slug: 'child-support-modification-income-change' },
          { title: '양육비 증액 청구 방법', slug: 'child-support-increase-request-method' },
          { title: '양육비 소송 절차 가이드', slug: 'child-support-lawsuit-procedure' },
        ],
      },
      {
        label: '과거/소급 청구',
        emoji: '📋',
        spokes: [
          { title: '과거 양육비 소급 청구', slug: 'retroactive-child-support-claim' },
          { title: '성년 자녀 과거 양육비 청구', slug: 'child-support-adult-child-retroactive' },
          { title: '양육비 판례 분석', slug: 'child-support-case-analysis' },
        ],
      },
      {
        label: '특수 상황',
        emoji: '📋',
        spokes: [
          { title: '조부모 양육비 청구', slug: 'child-support-grandparent-custody-claim' },
          { title: '양육비 청구서 양식과 작성법', slug: 'child-support-claim-form-template' },
          { title: '양육비 강제집행 방법', slug: 'child-support-enforcement-method' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '협의이혼 후 16년이 지나 과거 양육비를 청구한 상황',
        issue: '장기간 경과 후 과거 양육비 청구가 가능한지, 이혼 시 재산분할과 양육비의 관계가 쟁점인 경우',
        prep: '양육비 지출 내역, 이혼 당시 재산분할 내용, 상대방 소득 자료를 정리하여 가정법원에 과거 양육비 심판을 청구해보세요',
      },
      {
        scene: '이혼 후 전 배우자가 양육비를 6개월째 지급하지 않고 연락도 두절된 상황',
        issue: '양육비 이행명령과 감치, 출국금지 등 강제 이행 수단의 적용 여부가 쟁점인 경우',
        prep: '양육비 미지급 내역 정리, 이행명령 신청서 작성, 양육비이행관리원에 추심 위임을 진행해보세요',
      },
      {
        scene: '자녀가 성년이 된 후 미성년 시절 미지급 양육비를 정산하려는 상황',
        issue: '성년 자녀에 대한 과거 양육비 분담 범위와 산정 기준이 쟁점인 경우',
        prep: '양육 기간 중 지출 내역, 부모 양측의 소득·재산 자료, 기존 양육비 합의 내용을 확보하여 과거 양육비 청구를 검토해보세요',
      },
    ],
  },

  inheritance: {
    overview:
      '상속은 피상속인의 사망으로 개시되며, 재산과 채무가 상속인에게 포괄적으로 이전됩니다. 상속 순위는 1순위 직계비속+배우자, 2순위 직계존속+배우자, 3순위 형제자매, 4순위 4촌 이내 방계혈족입니다. 배우자는 공동상속인의 상속분에 50%를 가산받습니다. 상속인은 상속 개시를 안 날로부터 3개월 내에 단순승인, 한정승인, 상속포기 중 하나를 결정해야 합니다. 단순승인을 하면 빚도 전부 승계되므로 채무 규모를 반드시 먼저 파악해야 합니다. 한정승인은 상속받은 재산 범위 내에서만 채무를 변제하는 것이고, 상속포기는 상속인 지위 자체를 포기하는 것입니다. 유류분(법정상속분의 1/2 또는 1/3)이 침해된 경우 반환 청구가 가능합니다. 상속재산 분할은 공동상속인 간 협의분할이 원칙이며, 협의가 안 되면 가정법원에 심판분할을 청구합니다. 안심상속 원스톱 서비스를 이용하면 피상속인의 금융·부동산·세금·연금 등 재산과 채무를 한 번에 조회할 수 있습니다. 상속세는 상속 개시일이 속하는 달의 말일부터 6개월 내에 신고·납부해야 합니다.',
    topQuestions: [
      { question: '한정승인 서류는 뭐가 필요한가요?', slug: 'limited-inheritance-acceptance-process' },
      { question: '상속포기와 한정승인은 뭐가 다른가요?', slug: 'limited-acceptance-vs-renunciation' },
      { question: '숨겨진 빚이 있으면 어떻게 되나요?', slug: 'inheritance-hidden-debt-discovery' },
    ],
    relatedHubs: [
      { domain: 'divorce', label: '이혼', reason: '이혼과 상속 재산의 교차 문제' },
      { domain: 'rehabilitation', label: '개인회생', reason: '상속 채무 과다 시 개인회생 연계' },
    ],
    perspectives: [
      {
        label: '상속이 개시됐습니다',
        emoji: '🔴',
        checks: [
          '피상속인의 재산과 채무를 안심상속 원스톱 서비스로 조회했는지 확인해보세요',
          '상속포기·한정승인 기한(3개월)을 넘기지 않았는지 확인해보세요',
          '상속세 신고 기한(6개월)과 납부 계획을 수립했는지 확인해보세요',
        ],
      },
      {
        label: '빚이 더 많을까 걱정됩니다',
        emoji: '🟡',
        checks: [
          '안심상속 원스톱 서비스로 재산과 채무를 정확히 조회했는지 확인해보세요',
          '한정승인과 상속포기 중 어느 것이 유리한지 비교해보세요',
          '3개월 기한 내에 가정법원에 신고할 준비를 했는지 확인해보세요',
        ],
      },
      {
        label: '상속 분쟁이 있습니다',
        emoji: '🔵',
        checks: [
          '유류분 침해 여부를 법정상속분 기준으로 계산해보세요',
          '유언장의 존재 여부와 유효성을 확인해보세요',
          '협의분할이 안 되면 가정법원 심판분할 청구를 검토해보세요',
        ],
      },
    ],
    preparations: [
      {
        title: '안심상속 원스톱 서비스 신청',
        desc: '정부24 또는 시·구·읍·면사무소에서 신청하여 금융재산, 부동산, 자동차, 세금, 연금 등 피상속인의 재산과 채무를 일괄 조회해보세요.',
      },
      {
        title: '사망신고 및 가족관계증명서 발급',
        desc: '사망신고를 완료하고, 가족관계증명서·제적등본 등을 발급받아 법정상속인과 상속 순위를 확정해보세요.',
      },
      {
        title: '재산·채무 전체 목록 작성',
        desc: '부동산, 금융자산, 차량, 보험, 연금뿐 아니라 대출, 보증채무, 미납세금 등 채무도 빠짐없이 정리해보세요.',
      },
      {
        title: '상속포기/한정승인 기한 확인',
        desc: '상속 개시를 안 날로부터 3개월 내에 가정법원에 상속포기 또는 한정승인 신고를 해야 합니다. 기한을 넘기면 단순승인으로 간주됩니다.',
      },
      {
        title: '유언서 확인 및 검인 절차',
        desc: '유언장이 있는 경우 법정 방식(자필증서, 공정증서 등)을 갖추었는지 확인하고, 가정법원에 검인 신청을 진행해보세요.',
      },
    ],
    faqs: [
      {
        question: '상속 순위는 어떻게 되나요?',
        answer:
          '1순위 직계비속(자녀·손자녀)+배우자, 2순위 직계존속(부모·조부모)+배우자, 3순위 형제자매, 4순위 4촌 이내 방계혈족입니다. 배우자는 1·2순위와 공동상속하며 50% 가산됩니다.',
      },
      {
        question: '빚도 상속되나요?',
        answer:
          '네, 단순승인을 하면 재산뿐 아니라 채무도 전부 승계됩니다. 빚이 더 많을 수 있으므로 안심상속 원스톱 서비스로 재산·채무를 먼저 조회하는 것이 중요합니다.',
      },
      {
        question: '한정승인 필요서류는 무엇이 있나요?',
        answer:
          '상속포기는 상속인 지위 자체를 포기하는 것이고, 한정승인은 상속받은 재산 범위 내에서만 채무를 변제하는 것입니다. 채무 규모가 불확실할 때는 한정승인이 유리합니다.',
      },
      {
        question: '3개월 기한을 넘기면 어떻게 되나요?',
        answer:
          '상속 개시를 안 날로부터 3개월 내에 포기·한정승인을 하지 않으면 단순승인으로 간주되어 채무를 전부 승계합니다. 다만 특별한정승인(채무 초과 사실을 뒤늦게 안 경우) 제도가 있습니다.',
      },
      {
        question: '유류분이란 무엇인가요?',
        answer:
          '법정상속인에게 보장되는 최소 상속분입니다. 직계비속·배우자는 법정상속분의 1/2, 직계존속·형제자매는 1/3이 유류분입니다. 유증이나 증여로 침해된 경우 반환 청구가 가능합니다.',
      },
      {
        question: '협의분할은 어떻게 하나요?',
        answer:
          '공동상속인 전원이 합의하여 상속재산 분할 협의서를 작성합니다. 전원의 인감증명서와 인감도장이 필요하며, 협의가 안 되면 가정법원에 심판분할을 청구합니다.',
      },
      {
        question: '상속재산은 어떻게 조회하나요?',
        answer:
          '안심상속 원스톱 서비스(정부24 또는 시·구·읍·면사무소)를 이용하면 금융·부동산·차량·세금·연금 등 피상속인의 재산과 채무를 한 번에 조회할 수 있습니다.',
      },
      {
        question: '상속세 신고 기한은 언제까지인가요?',
        answer:
          '상속 개시일이 속하는 달의 말일부터 6개월 내에 신고·납부해야 합니다. 기초공제 2억 원, 배우자 공제 최소 5억 원 등을 적용한 후 과세표준에 세율(10~50%)을 곱하여 산출합니다.',
      },
    ],
    spokeLinks: [],
    spokeCategories: [
      {
        label: '상속 시작',
        emoji: '📋',
        spokes: [
          { title: '상속순위와 법정상속분', slug: 'inheritance-order-legal-share' },
          { title: '상속재산 조회 방법', slug: 'inheritance-asset-inquiry-method' },
          { title: '숨겨진 빚 발견 시 대응', slug: 'inheritance-hidden-debt-discovery' },
          { title: '유언 없을 때 재산분배', slug: 'no-will-how-assets-divided' },
        ],
      },
      {
        label: '상속포기/한정승인',
        emoji: '📋',
        spokes: [
          { title: '한정승인 절차 가이드', slug: 'limited-inheritance-acceptance-process' },
          { title: '상속포기 절차 가이드', slug: 'inheritance-renunciation-process' },
          { title: '상속포기 기한 안내', slug: 'inheritance-renunciation-deadline' },
          { title: '한정승인 vs 상속포기 비교', slug: 'inheritance-limited-vs-renounce' },
        ],
      },
      {
        label: '상속 분쟁',
        emoji: '📋',
        spokes: [
          { title: '유류분 소송 가이드', slug: 'inheritance-forced-share-lawsuit-guide' },
          { title: '유언 유효성 분쟁', slug: 'inheritance-will-validity-dispute' },
          { title: '가족 분쟁 조정', slug: 'inheritance-family-dispute-mediation' },
          { title: '분할 심판 절차', slug: 'inheritance-division-mediation-tribunal' },
        ],
      },
      {
        label: '재산 분할/등기',
        emoji: '📋',
        spokes: [
          { title: '상속등기 절차와 서류', slug: 'inheritance-registration-procedure-docs' },
          { title: '부동산 감정 분쟁', slug: 'inheritance-real-estate-valuation-dispute' },
          { title: '상속 분쟁 어디부터 시작해야 하나', slug: 'inheritance-dispute-where-to-start' },
        ],
      },
      {
        label: '한정승인 심화',
        emoji: '📋',
        spokes: [
          { title: '한정승인 vs 상속포기 상세 비교', slug: 'limited-acceptance-vs-renunciation' },
          { title: '한정승인 상세 가이드', slug: 'limited-inheritance-acceptance' },
        ],
      },
    ],
    caseRefs: [
      {
        scene: '아버지 사망 후 알려지지 않은 채무가 발견되어 한정승인을 검토하는 상황',
        issue: '대법원 2025다212863 사건에서 공동상속인이 망인의 예금채권을 임의로 인출한 경우 부당이득반환 청구가 문제된 사례',
        prep: '안심상속 원스톱 서비스로 재산·채무 조회, 3개월 내 가정법원에 한정승인 신고를 진행해보세요',
      },
      {
        scene: '어머니가 생전에 특정 자녀에게만 대부분의 재산을 증여하여 유류분이 침해된 상황',
        issue: '유류분 산정 기초재산에 생전 증여분이 포함되는지, 반환 범위가 쟁점인 경우',
        prep: '상속재산 목록, 생전 증여 내역, 가족관계증명서를 확보하고 유류분 반환 청구 소송을 검토해보세요',
      },
    ],
  },
};

