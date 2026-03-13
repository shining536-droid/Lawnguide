import { SpokePage } from '../spoke-pages';

export const drugCrimePages: SpokePage[] = [
  {
    domain: 'drug-crime',
    slug: 'drug-investigation-response',
    keyword: '마약 혐의 수사 연락 받았을 때 대응법',
    questionKeyword: '마약 혐의로 수사 연락을 받았는데 어떻게 해야 하나요?',
    ctaKeyword: '마약 수사 대응',
    type: '상황형',
    meta: {
      title: '마약 혐의 수사 연락 받았을 때 대응법 | 로앤가이드',
      description: '마약류관리법 위반 혐의로 수사 연락을 받았을 때 진술거부권, 변호인조력권, 검사 대응, 양형 기준을 정리했습니다.',
    },
    intro: '갑자기 경찰에서 "마약 관련 수사 건으로 출석해달라"는 전화가 왔습니다. 무슨 혐의인지, 가면 바로 체포되는 건지, 어떤 말을 해야 하는지 아무것도 모르는 상태입니다. 당황스럽지만 지금 확인해야 할 것들을 정리했습니다.',
    timelineSteps: ['연락 내용 확인', '변호사 선임', '출석 및 진술', '수사·재판 대응'],
    sections: [
      {
        title: '출석 전에 혐의 내용부터 확인하세요 — 바로 가지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">혐의 내용과 피의자 여부를 먼저 확인하세요</strong></p>\n<p>경찰 연락을 받으면 당황해서 바로 출석하는 경우가 많습니다. 하지만 먼저 <strong>혐의가 무엇인지</strong>(투약, 소지, 매매, 단순 참고인 조사), 피의자 신분인지 참고인인지를 전화로 확인하세요.</p>\n<p>출석 일시를 조율할 수 있습니다. <strong>마약류관리법</strong>은 투약·소지·매매·제조에 따라 처벌 수준이 크게 다릅니다. 혐의 내용을 알아야 대응 방향을 정할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 혐의 내용(투약/소지/매매) → 피의자/참고인 여부 → 출석 일시 조율</blockquote>',
      },
      {
        title: '출석 전에 반드시 변호사를 선임하세요',
        content:
          '<p><strong style="color:#1e3a5f">마약 사건은 초기 진술이 결과를 크게 좌우합니다</strong></p>\n<p>마약 사건은 <strong>초기 진술</strong>이 재판 결과에 결정적 영향을 미칩니다. 출석 전에 반드시 변호사를 선임하고, 진술 방향을 미리 상의하세요.</p>\n<p><strong>헌법 제12조</strong>에 따라 누구든지 변호인의 조력을 받을 권리가 있습니다. 변호사가 조사에 동석할 수 있으며, 경제적 여건이 안 되면 국선변호인을 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 출석 전 변호사 선임 → 진술 방향 상의 → 조사 동석 요청</blockquote>',
      },
      {
        title: '진술거부권을 이해하고 신중하게 진술하세요',
        content:
          '<p><strong style="color:#1e3a5f">불리한 진술을 거부할 권리가 있습니다</strong></p>\n<p><strong>형사소송법 제244조의3</strong>에 따라 피의자는 진술을 거부할 권리가 있습니다. 수사관이 미란다 원칙을 고지하면 이를 정확히 이해한 뒤 진술 여부를 결정하세요.</p>\n<p>소변검사나 모발검사를 요구받을 수 있습니다. <strong>압수수색영장</strong> 없이 강제로 채취할 수는 없지만, 영장이 발부되면 거부가 어렵습니다. 검사 결과는 핵심 증거가 되므로 변호사와 상의 후 대응하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권리: 진술거부권 + 변호인조력권 | 소변·모발검사는 영장 필요</blockquote>',
      },
      {
        title: '양형에 영향을 주는 요소를 미리 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">초범 여부, 투약 횟수, 마약 종류에 따라 형량이 달라집니다</strong></p>\n<p><strong>마약류관리법</strong>에서 향정신성의약품(필로폰 등) 투약은 10년 이하 징역, 대마 흡연은 5년 이하 징역입니다. 초범 단순 투약이면 집행유예 가능성이 있으나, 매매·제조는 형량이 매우 무겁습니다.</p>\n<p>자발적 치료 프로그램 참여, 재범 방지 노력, 가족의 탄원서 등이 <strong>양형에 유리</strong>하게 작용합니다. 치료보호 신청도 검토해볼 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형: 초범 단순 투약 → 집행유예 가능 | 매매·제조 → 중형 | 치료 참여 → 감경 참작</blockquote>',
      },
    ],
    cases: [
      {
        title: '초범 투약 혐의로 치료 프로그램 참여 후 집행유예를 받은 사례',
        summary:
          '관련 사례에서도 초범으로 필로폰 투약 혐의를 받은 피고인이 자발적으로 마약류 중독 치료 프로그램에 참여하고, 반성문과 가족 탄원서를 제출하여 징역 1년 6월에 집행유예 3년을 선고받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 기소 전부터 치료 프로그램 참여를 시작하고, 변호사와 양형 자료를 체계적으로 준비하세요.',
      },
      {
        title: '초기 진술 실수로 혐의가 확대된 사례',
        summary:
          '관련 사례에서도 변호사 없이 출석하여 수사관의 질문에 불리한 진술을 한 결과, 단순 투약에서 매매 관여 혐의까지 확대된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 반드시 변호사를 선임한 뒤 출석하고, 진술 범위를 미리 상의하세요.',
      },
    ],
    faq: [
      {
        question: '경찰 연락을 무시하면 어떻게 되나요?',
        answer: '체포영장이 발부될 수 있습니다. <strong>출석 일시를 조율</strong>하되 연락을 무시하지는 마세요.',
      },
      {
        question: '소변검사를 거부할 수 있나요?',
        answer: '<strong>영장 없이는 강제 불가</strong>하지만, 영장이 발부되면 거부가 어렵습니다.',
      },
      {
        question: '모발검사로 얼마 전까지 투약 여부를 알 수 있나요?',
        answer: '모발 1cm당 약 1개월의 약물 이력을 확인할 수 있어 <strong>수개월 전 투약도 검출</strong>됩니다.',
      },
      {
        question: '대마초는 처벌이 가벼운가요?',
        answer: '대마 흡연은 <strong>5년 이하 징역</strong>입니다. 결코 가볍지 않습니다.',
      },
      {
        question: '마약 투약 자수하면 감경되나요?',
        answer: '<strong>자수 감경</strong>이 가능합니다. 수사 착수 전 자수하면 형을 감경받을 수 있습니다.',
      },
      {
        question: '구속되나요?',
        answer: '혐의 경중과 도주 우려에 따라 다릅니다. 초범 단순 투약은 <strong>불구속 수사</strong>가 많습니다.',
      },
      {
        question: '마약 전과가 있으면 취업에 영향이 있나요?',
        answer: '공무원 등 일부 직종에서 <strong>결격사유</strong>가 될 수 있습니다. 민간 기업은 직종에 따라 다릅니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 마약 사건 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 사건 진단', href: '/diagnosis/drug-crime' },
    ],
  },
];
