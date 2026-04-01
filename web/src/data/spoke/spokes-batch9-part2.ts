import { SpokePage } from '../spoke-pages';

// Batch 9 - Part 2: defamation, drug-crime
export const spokesBatch9Part2Pages: SpokePage[] = [
  {
    domain: 'drug-crime',
    slug: 'first-offense-probation-conditions',
    keyword: '마약 초범 집행유예 조건',
    questionKeyword: '마약 초범은 집행유예를 받을 수 있나요?',
    ctaKeyword: '마약 초범 집행유예 조건 확인',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '마약 초범 집행유예 받는 5가지 조건 총정리 | 로앤가이드',
      description:
        '마약 초범도 실형을 받을 수 있을까요? 집행유예 가능 조건, 마약류별 처벌 차이, 양형위원회 감경 기준을 바로 정리해보세요.',
    },
    intro:
      '친구의 권유로 한 번 호기심에 손을 댄 것이 전부였는데, 경찰 조사를 받게 되었습니다. 마약 사건은 초범이라도 실형이 나온다는 이야기를 들으니 앞이 캄캄합니다. 혐의를 받고 있다면, 초범 여부와 마약 종류, 양에 따라 집행유예가 가능한 경우가 있으므로 양형 기준을 정확히 파악하는 것이 급선무입니다.',
    sections: [
      {
        title: 'Q. 마약 초범도 실형을 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 마약 종류와 양, 행위 유형에 따라 다르지만 초범이라면 집행유예 가능성이 있습니다</strong></p>\n<p><strong>마약류관리에관한법률 제60조</strong>는 마약류를 투약·소지·매매한 자를 처벌합니다. 향정신성의약품(필로폰 등) 투약은 10년 이하 징역, 대마초 흡연은 5년 이하 징역이 법정형입니다. 초범이라도 법정형 자체가 높기 때문에 무조건 가벼운 처벌을 받는 것은 아닙니다.</p>\n<p>다만 <strong>양형위원회 양형기준</strong>에 따르면, 초범 + 소량 투약 + 자발적 자수·치료 의지가 인정되는 경우 <strong>집행유예</strong>가 선고되는 비율이 높습니다. 반대로 매매·밀수입에 관여하거나 상습성이 인정되면 초범이라도 실형 가능성이 큽니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 초범 + 소량 투약 + 치료 의지 → 집행유예 가능 | 매매·상습 → 실형</blockquote>',
      },
      {
        title: 'Q. 집행유예를 받으려면 어떤 조건을 갖춰야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자발적 치료, 반성, 가족 탄원, 재범 방지 환경이 핵심 양형 요소입니다</strong></p>\n<p>법원이 집행유예를 결정할 때 고려하는 요소는 다음과 같습니다. 첫째, <strong>마약류 중독 치료 프로그램에 자발적으로 참여</strong>했는지 여부입니다. 판결 전에 치료 기관에 입원하거나 외래 치료를 받고 있다면 강력한 유리한 정상이 됩니다. 둘째, <strong>진심 어린 반성</strong>과 구체적인 재발 방지 계획을 담은 반성문이 필요합니다.</p>\n<p>셋째, 가족이나 직장 동료의 <strong>탄원서</strong>가 있으면 사회적 유대관계가 있어 재범 가능성이 낮다고 판단됩니다. 넷째, 마약에 접근할 수 없는 <strong>생활 환경 변화</strong>(연락처 차단, 거주지 변경 등)를 증명하면 도움이 됩니다. 이 모든 자료를 변호사를 통해 체계적으로 법원에 제출해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 치료 참여 확인서 + 반성문 + 탄원서 + 생활 환경 변화 증명 = 집행유예 핵심 자료</blockquote>',
      },
      {
        title: 'Q. 마약 종류에 따라 처벌이 다른가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 네, 필로폰·코카인은 가장 무겁고, 대마는 상대적으로 가볍습니다</strong></p>\n<p>마약류관리법은 마약류를 <strong>마약, 향정신성의약품, 대마</strong> 세 가지로 분류하며, 종류에 따라 법정형이 다릅니다. 필로폰(메스암페타민)은 향정신성의약품 중에서도 가장 엄하게 처벌되어 투약만으로도 <strong>10년 이하 징역</strong>입니다. 코카인, 헤로인 등도 마찬가지입니다.</p>\n<p><strong>대마(대마초)</strong>는 상대적으로 법정형이 낮아 5년 이하 징역으로 규정되어 있고, 초범 소량 흡연의 경우 집행유예를 받을 가능성이 비교적 높습니다. 다만 최근 마약 범죄에 대한 법원의 태도가 엄격해지고 있어 대마 초범이라도 안심할 수 없습니다. <strong>마약 종류와 관계없이 매매·밀반입</strong>에 관여하면 초범이라도 실형 가능성이 급격히 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">분류: 필로폰·코카인(10년↓) > 대마(5년↓) | 매매·밀반입은 종류 불문 가중</blockquote>',
      },
      {
        title: 'Q. 수사 단계에서 변호사를 선임해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면, 수사 초기 단계부터 변호사 선임이 결과를 좌우합니다</strong></p>\n<p>마약 사건은 수사 단계에서의 <strong>진술이 재판에 직접적 영향</strong>을 미칩니다. 경찰·검찰 조사에서 불리한 진술을 하면 나중에 번복하기 어렵습니다. 변호사가 조사에 동석하면 불필요한 자백이나 불리한 진술을 방지할 수 있습니다.</p>\n<p>또한 변호사는 <strong>구속영장 발부 단계</strong>에서 의견서를 제출하여 구속을 막거나, 구속적부심을 청구할 수 있습니다. 양형 자료(치료 확인서, 반성문, 탄원서 등)의 준비와 제출도 변호사가 체계적으로 진행해야 법원에 효과적으로 전달됩니다. 마약 사건 경험이 있는 <strong>형사 전문 변호사</strong>를 선임하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수사 초기 변호사 선임 → 불리한 진술 방지 + 구속 대응 + 양형 자료 준비</blockquote>',
      },
    ],
    cases: [
      {
        title: '필로폰 초범 투약 후 자발적 치료로 집행유예 선고 사례',
        summary:
          '관련 사례에서도 필로폰을 1회 투약한 초범 피고인이 체포 직후 자발적으로 마약류 중독 치료 프로그램에 입원하고, 가족 탄원서와 반성문을 제출한 경우가 있습니다. 마약류관리에관한법률 제60조 위반으로 기소되었지만, 양형위원회 기준에서 유리한 정상이 다수 인정되어 징역 1년 6개월 집행유예 3년이 선고되었습니다.',
        takeaway:
          '비슷한 상황이라면 수사 초기부터 자발적 치료 참여를 시작하고, 치료 확인서를 양형 자료로 제출하세요.',
      },
      {
        title: '대마 초범 소량 흡연 집행유예 및 수강명령 사례',
        summary:
          '관련 사례에서도 대마를 소량 흡연한 초범 피고인에 대해, 법원이 전과가 없는 점, 깊이 반성하고 있는 점, 안정적 직업이 있는 점을 고려하여 징역 8개월 집행유예 2년, 수강명령 40시간을 선고한 경우가 있습니다. 양형위원회 기준상 "감경 영역"이 적용되었습니다.',
        takeaway:
          '비슷한 상황이라면 안정적 직업과 사회적 유대관계를 증명할 자료를 적극적으로 준비하세요.',
      },
    ],
    faq: [
      {
        question: '마약 초범이면 무조건 집행유예를 받나요?',
        answer:
          '무조건은 아닙니다. <strong>마약 종류, 양, 행위 유형(투약·소지·매매)</strong>에 따라 달라지며, 매매에 관여하면 초범이라도 실형 가능성이 높습니다.',
      },
      {
        question: '집행유예 기간 중 주의할 점은 무엇인가요?',
        answer:
          '집행유예 기간 중 <strong>재범하면 유예가 취소</strong>되어 원래 형과 새 형을 합산하여 복역해야 합니다. 보호관찰, 수강명령 등 부수 조건도 성실히 이행해야 합니다.',
      },
      {
        question: '모발 검사에서 양성이 나오면 어떻게 되나요?',
        answer:
          '모발 검사는 <strong>수개월 전 투약 사실</strong>까지 확인할 수 있는 검사입니다. 양성 결과가 나오면 투약 혐의의 강력한 증거가 되지만, 단독으로 유죄를 확정하지는 않습니다.',
      },
      {
        question: '마약 사건으로 구속되나요?',
        answer:
          '마약 사건은 <strong>증거 인멸 우려</strong>가 높아 구속 수사가 일반적입니다. 다만 초범이고 소량 투약에 해당하면 불구속 수사가 이루어지기도 합니다.',
      },
      {
        question: '자수하면 처벌이 줄어드나요?',
        answer:
          '자수는 <strong>형법 제52조</strong>에 따라 형을 감경받을 수 있는 사유입니다. 마약 사건에서 자수는 양형에 긍정적 영향을 미치며, 집행유예 가능성을 높이는 요소입니다.',
      },
      {
        question: '치료보호 명령이 뭔가요?',
        answer:
          '법원이 마약류 사범에게 <strong>치료 기관에서 일정 기간 치료를 받도록</strong> 명하는 제도입니다. 실형 대신 치료보호가 명해지기도 하며, 양형에서 유리한 요소로 작용합니다.',
      },
      {
        question: '마약 전과가 있으면 취업에 영향이 있나요?',
        answer:
          '<strong>공무원, 교사, 의료인</strong> 등 일부 직종은 결격 사유가 될 수 있습니다. 일반 기업 취업 시에도 수사기록 조회 동의를 요구하는 경우 불이익이 생길 수 있습니다.',
      },
      {
        question: '가족이 마약 사건에 연루되면 어떻게 해야 하나요?',
        answer:
          '가족이 <strong>혐의를 받고 있다면</strong>, 즉시 형사 전문 변호사를 선임하고 치료 프로그램 참여를 시작하도록 도와주세요. 가족 탄원서도 양형에 중요한 자료입니다.',
      },
    ],
    cta: {
      text: '내 상황에서 마약 초범 집행유예 가능성을 확인해보세요',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약범죄 진단', href: '/diagnosis/drug-crime' },
      { label: '투약 vs 소지 vs 매매 처벌 차이', href: '/guide/drug-crime/use-vs-possession-vs-dealing-penalty' },
      { label: '마약 수사 절차 총정리', href: '/guide/drug-crime/drug-investigation-response' },
      { label: '마약 치료보호 제도 안내', href: '/guide/drug-crime/drug-investigation-response' },
    ],
  },
];
