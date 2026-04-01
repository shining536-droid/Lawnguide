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
      title: '마약 수사 연락 받은 직후 48시간 대응법 | 로앤가이드',
      description: '마약 혐의로 경찰 출석 요구를 받았다면 가기 전에 반드시 확인하세요. 영장 확인, 변호인 선임, 진술거부권 행사까지 초기 48시간 대응법을 지금 확인하세요.',
    },
    intro: '모르는 번호에서 전화가 왔습니다. "OO경찰서입니다. 마약류관리법 위반 건으로 출석해주셔야 합니다." 심장이 쿵 내려앉습니다. 당장 가야 하나요? 가면 바로 체포되나요? 전화로 뭘 물어봐야 하나요? 이 순간 가장 중요한 것은 "즉시 출석하지 않는 것"입니다. 출석 전 확인해야 할 사항과 반드시 챙겨야 할 권리를 정리했습니다.',
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
      text: '마약 수사 연락을 받았다면, 출석 전 내 상황부터 정리해보세요',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 사건 진단', href: '/diagnosis/drug-crime' },
    ],
  },
  {
    domain: 'drug-crime',
    slug: 'drug-crime-first-offense-sentencing',
    keyword: '마약 초범 처벌 수위와 대응 방법',
    questionKeyword: '마약 초범인데 처벌을 얼마나 받나요? 집행유예 가능한가요?',
    ctaKeyword: '마약 초범 처벌',
    type: '상황형',
    meta: {
      title: '마약 초범 처벌 수위 — 집행유예 가능성과 감경 방법 | 로앤가이드',
      description: '필로폰 초범은 징역 1~5년, 대마 초범은 벌금형도 가능합니다. 자수·자진 치료 참여 시 집행유예 가능성이 높아집니다. 마약류별 처벌 차이와 감경 전략을 바로 정리해보세요.',
    },
    intro:
      '호기심에 클럽에서 한 번 해봤을 뿐인데, 소변검사에서 양성반응이 나왔습니다. 마약 투약 혐의로 입건됐고, 감옥에 가는 건 아닌지 잠이 안 옵니다. 혐의를 받고 있다면, 초범이라도 마약 사건은 가볍게 끝나지 않을 수 있습니다. 처벌 수위와 감경 방법을 정확히 파악하고 대응해야 합니다.',
    timelineSteps: ['혐의 확인', '변호사 선임', '양형 자료 준비', '재판 대응'],
    sections: [
      {
        title: '마약류 종류별 처벌 수위 — 필로폰과 대마는 크게 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리법은 마약·향정신성의약품·대마로 나누어 처벌 수위를 달리합니다</strong></p>\n<p><strong>향정신성의약품(필로폰, 엑스터시, LSD 등)</strong> 투약은 <strong>마약류관리법 제60조</strong>에 따라 <strong>10년 이하 징역</strong>에 처해집니다. <strong>마약(헤로인, 코카인 등)</strong> 투약도 동일하게 10년 이하 징역입니다. 반면 <strong>대마</strong> 흡연은 <strong>제61조</strong>에 따라 <strong>5년 이하 징역</strong>으로, 향정신성의약품보다 법정형이 낮습니다.</p>\n<p>매매·제조·수출입은 투약보다 훨씬 무겁습니다. 향정신성의약품 매매는 <strong>무기 또는 5년 이상 징역</strong>, 대마 매매는 <strong>5년 이상 징역</strong>입니다. 단순 투약과 매매는 처벌 수위가 전혀 다르므로, 자신의 혐의가 정확히 어떤 행위에 해당하는지 확인하는 것이 첫 번째입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 필로폰 투약 10년↓ | 대마 흡연 5년↓ | 매매·제조는 5년 이상~무기징역</blockquote>',
      },
      {
        title: '초범 단순 투약이면 집행유예 가능성이 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">양형기준상 초범 단순 투약은 집행유예 권고 영역에 해당할 수 있습니다</strong></p>\n<p>대법원 <strong>양형위원회</strong>의 마약범죄 양형기준에 따르면, 초범이 단순 투약(소지·매매 없음)만 한 경우 <strong>징역 10월~2년</strong> 구간이 권고됩니다. 이 구간은 <strong>집행유예 선고가 가능한 범위</strong>(징역 3년 이하)에 해당합니다.</p>\n<p>다만 집행유예는 자동으로 주어지는 것이 아닙니다. 법원은 ①<strong>범행 동기</strong>(호기심 vs 상습), ②<strong>투약 횟수</strong>, ③<strong>마약 종류</strong>(대마 vs 필로폰), ④<strong>반성 정도</strong>, ⑤<strong>재범 위험성</strong>을 종합하여 판단합니다. 초범이라도 투약 횟수가 많거나 매매 관여가 의심되면 실형이 선고될 수 있습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">마약 혐의를 받고 있다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/drug-crime" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">초범 단순 투약: 징역 10월~2년 권고 → 집행유예 가능 | 투약 횟수·종류·매매 관여 여부가 핵심</blockquote>',
      },
      {
        title: '자수와 자진 치료 — 형을 줄이는 가장 효과적인 방법입니다',
        content:
          '<p><strong style="color:#1e3a5f">수사 전 자수하거나 자진 치료 프로그램에 참여하면 감경을 받을 수 있습니다</strong></p>\n<p><strong>형법 제52조</strong>에 따라 자수하면 <strong>형을 감경</strong>받을 수 있습니다. 수사기관이 인지하기 전에 자수하는 것이 가장 효과적이지만, 수사 착수 후라도 자진 출석하여 성실히 진술하면 양형에 유리하게 참작됩니다.</p>\n<p><strong>마약류 중독 치료 프로그램</strong>(한국마약퇴치운동본부, 각 지역 정신건강복지센터 등)에 자발적으로 참여하는 것은 재범 방지 의지를 보여주는 강력한 양형 자료입니다. 기소 전부터 프로그램에 등록하고 <strong>수료증</strong>을 법원에 제출하세요. 가족의 <strong>탄원서</strong>, 직장 재직 증명 등 사회적 유대 자료도 함께 준비하면 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경: 자수(형법 제52조) | 자진 치료 프로그램 참여 + 수료증 | 가족 탄원서 + 재직 증명</blockquote>',
      },
      {
        title: '변호사 선임과 재판 대응 — 초기 대응이 결과를 좌우합니다',
        content:
          '<p><strong style="color:#1e3a5f">마약 사건은 초기 진술 한 마디가 혐의 범위를 결정합니다</strong></p>\n<p>마약 사건에서 가장 흔한 실수는 <strong>변호사 없이 수사관 앞에서 불리한 진술</strong>을 하는 것입니다. "누구와 함께 했냐"는 질문에 대한 답변이 <strong>공급·매매 혐의 확대</strong>로 이어지는 경우가 적지 않습니다. 반드시 변호사를 선임한 뒤 진술 범위를 사전에 상의하세요.</p>\n<p><strong>진술거부권</strong>(형사소송법 제244조의3)은 헌법이 보장하는 권리입니다. 변호사와 상의 없이 불리한 진술을 할 필요가 없습니다. 변호사는 ①<strong>혐의 범위 확인</strong>, ②<strong>진술 방향 설정</strong>, ③<strong>양형 자료 체계적 준비</strong>(치료 프로그램·탄원서·반성문), ④<strong>재판 변론</strong>까지 전 과정을 함께합니다. 경제적 여건이 어려우면 <strong>국선변호인</strong>을 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 출석 전 변호사 선임 → 진술 범위 상의 → 양형 자료 준비 → 재판 변론</blockquote>',
      },
    ],
    cases: [
      {
        title: '필로폰 초범 투약으로 치료 참여 후 집행유예를 받은 사례',
        summary:
          '관련 사례에서도 필로폰 1회 투약 초범인 피고인이 자발적으로 마약류 중독 치료 프로그램을 수료하고, 반성문과 가족 탄원서를 제출한 결과, 법원이 징역 1년에 집행유예 2년을 선고한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 기소 전부터 치료 프로그램에 참여하고, 변호사와 함께 양형 자료를 체계적으로 준비하세요.',
      },
      {
        title: '대마 초범 단순 흡연으로 벌금형을 받은 사례',
        summary:
          '관련 사례에서도 대마 1회 흡연 초범에 대해 법원이 벌금 300만원을 선고한 경우가 있습니다. 대마는 향정신성의약품보다 법정형이 낮고, 단순 흡연 초범은 비교적 가벼운 처분이 나오는 경향이 있습니다.',
        takeaway:
          '비슷한 상황이라면 대마 초범이라도 전과가 남는다는 점을 유의하고, 가능한 한 양형 자료를 충실히 준비하세요.',
      },
    ],
    faq: [
      {
        question: '마약 초범이면 무조건 집행유예를 받나요?',
        answer:
          '아닙니다. 초범이라도 투약 횟수, 마약 종류, 매매 관여 여부에 따라 <strong>실형이 선고</strong>될 수 있습니다.',
      },
      {
        question: '필로폰과 대마의 처벌 차이는 얼마나 되나요?',
        answer:
          '필로폰(향정) 투약은 <strong>10년 이하 징역</strong>, 대마 흡연은 <strong>5년 이하 징역</strong>으로 법정형 자체가 다릅니다.',
      },
      {
        question: '자수하면 처벌이 얼마나 줄어드나요?',
        answer:
          '형법상 자수 감경이 적용되면 법정형의 <strong>1/2까지 감경</strong>될 수 있습니다.',
      },
      {
        question: '소변검사 양성반응만으로 유죄가 되나요?',
        answer:
          '소변·모발 검사 결과는 핵심 증거이지만, <strong>투약 경위에 대한 진술</strong>과 종합하여 유죄 여부가 판단됩니다.',
      },
      {
        question: '마약 전과가 있으면 취업에 어떤 영향이 있나요?',
        answer:
          '공무원, 의사, 약사 등 일부 직종에서 <strong>결격사유</strong>가 됩니다. 민간 기업은 직종에 따라 다릅니다.',
      },
      {
        question: '치료보호 제도란 무엇인가요?',
        answer:
          '마약류관리법 제40조에 따라 마약류 중독자에 대해 <strong>치료보호를 명할 수 있는 제도</strong>입니다. 형사처벌 외에 병행되거나 대체될 수 있습니다.',
      },
      {
        question: '구속되나요?',
        answer:
          '초범 단순 투약은 <strong>불구속 수사</strong>가 일반적입니다. 다만 도주 우려, 증거 인멸 우려가 있으면 구속될 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '1분 안에 마약 초범 처벌 준비사항 확인하기',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 사건 진단', href: '/diagnosis/drug-crime' },
      { label: '마약 혐의 수사 연락 받았을 때 대응법', href: '/guide/drug-crime/drug-investigation-response' },
      { label: '형사사건 가이드', href: '/guide/drug-crime' },
      { label: '성범죄 가이드', href: '/guide/sex-crime' },
    ],
  },
  {
    domain: 'drug-crime',
    slug: 'positive-urine-test-response',
    keyword: '마약 소변검사 양성 시 대응법',
    questionKeyword: '마약 소변검사에서 양성이 나왔는데 어떻게 대응해야 하나요?',
    ctaKeyword: '소변검사 양성 대응',
    type: '상황형',
    meta: {
      title: '마약 소변검사 양성 — 정밀검사 요청부터 방어 전략까지 | 로앤가이드',
      description: '마약 간이검사 양성은 확정이 아닙니다. 정밀검사 요청, 위양성 방어(복용 약물 확인), 투약 인정 시 수사 대응 전략과 양형 준비까지 4단계로 정리했습니다. 지금 확인하세요.',
    },
    intro: '건강검진에서, 혹은 경찰 수사 과정에서 소변검사를 받았는데 양성 반응이 나왔습니다. 마약을 한 적이 없는데 양성이 나온 것일 수도 있고, 과거에 한 번 실수한 것이 검출된 것일 수도 있습니다. 어느 쪽이든 양성 반응은 수사의 핵심 증거가 되기 때문에, 지금부터의 대응이 결과를 크게 좌우합니다. 감정적으로 반응하기 전에, 정확한 법적 대응 방법을 알아야 합니다.',
    timelineSteps: ['검사 결과 확인', '정밀검사·변호사 선임', '수사 대응·진술', '양형 자료 준비'],
    sections: [
      {
        title: '간이검사 양성은 확정이 아닙니다 — 정밀검사를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">간이 소변검사(면역분석법)는 위양성 가능성이 있으며, 정밀검사(GC-MS)로 확인해야 합니다</strong></p>\n<p>현장에서 실시하는 <strong>간이 소변검사</strong>(면역분석법, 스틱형 키트)는 <strong>위양성(false positive)</strong>이 발생할 수 있습니다. 감기약 성분(에페드린, 슈도에페드린), 일부 진통제, 수면유도제, 특정 건강보조식품 등이 마약류와 유사한 반응을 보이는 경우가 있습니다.</p>\n<p>간이검사에서 양성이 나오면 수사기관은 <strong>국립과학수사연구원(국과수)</strong>에 정밀 감정을 의뢰합니다. 정밀검사는 <strong>GC-MS(가스크로마토그래피-질량분석법)</strong>로 진행되며, 특정 마약 성분을 정확히 식별합니다. 정밀검사 결과가 음성이면 혐의가 해소될 수 있습니다. <strong>정밀검사를 적극적으로 요청</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">간이검사 양성 ≠ 확정 | 위양성 가능성(감기약 등) | 국과수 정밀검사(GC-MS) 요청 필수</blockquote>',
      },
      {
        title: '위양성이 의심되면 복용 약물 목록을 즉시 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">처방약·비처방약·건강보조식품 복용 이력이 위양성 방어의 핵심 증거입니다</strong></p>\n<p>마약을 투약한 적이 없는데 양성이 나왔다면, <strong>위양성 방어</strong>를 준비해야 합니다. 대법원 2019도14567 판결에서도 소변검사 양성만으로 유죄를 인정하기 위해서는 다른 보강 증거가 필요하다는 취지로 판시한 바 있습니다.</p>\n<p>즉시 ①최근 복용한 <strong>처방약 목록과 처방전</strong>(병원에서 재발급 가능), ②약국 구매 <strong>비처방약(감기약, 진통제 등) 영수증</strong>, ③<strong>건강보조식품·한약</strong> 복용 이력, ④해외여행 시 현지에서 복용한 약물 등을 정리하세요. 담당 의사의 <strong>소견서</strong>를 받아두면 강력한 방어 자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정리: 처방전 재발급 + 약국 영수증 + 건강보조식품 이력 + 의사 소견서 확보</blockquote>',
      },
      {
        title: '실제 투약이 있었다면 수사 대응 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">투약 사실이 있더라도 진술 전략과 양형 준비에 따라 결과가 달라집니다</strong></p>\n<p>실제로 마약을 투약한 사실이 있고 소변검사에서 양성이 나왔다면, <strong>사실을 부인하는 것은 대부분 역효과</strong>를 냅니다. 정밀검사와 모발검사까지 진행되면 투약 사실이 명확히 확인되기 때문입니다. 변호사와 상의하여 ①<strong>혐의 인정 여부</strong>, ②<strong>진술 범위</strong>(투약 횟수, 경위, 입수처 등), ③<strong>양형 전략</strong>을 사전에 결정하세요.</p>\n<p>수사기관은 소변검사 양성을 근거로 <strong>"누구에게서 구했나", "함께 한 사람이 있나"</strong> 등을 추궁합니다. 변호사 없이 답변하면 <strong>매매·공급 관여 혐의</strong>로 확대될 수 있습니다. <strong>진술거부권</strong>(형사소송법 제244조의3)을 행사할 수 있으며, 변호사 동석 하에 진술하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 변호사와 진술 범위 결정 → 변호사 동석 조사 → 입수처 진술 신중히 | 진술거부권 행사 가능</blockquote>',
      },
      {
        title: '양형에 유리한 자료를 기소 전부터 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">자발적 치료 참여, 반성문, 가족 탄원서가 양형을 좌우합니다</strong></p>\n<p>소변검사 양성 후 실제 투약이 인정되는 경우, <strong>기소 전부터 양형 자료를 준비</strong>하는 것이 집행유예와 실형을 가르는 핵심입니다. 가장 효과적인 양형 자료는 <strong>마약류 중독 재활 프로그램</strong>(한국마약퇴치운동본부, 정신건강복지센터 등)에 자발적으로 참여하는 것입니다.</p>\n<p>프로그램 <strong>등록 확인서와 수료증</strong>, 진심 어린 <strong>반성문</strong>, 가족의 <strong>탄원서</strong>, 직장 <strong>재직증명서</strong>(사회적 유대 입증), 정신건강의학과 <strong>치료 기록</strong> 등을 체계적으로 준비하세요. 대법원 양형기준에 따르면 초범 단순 투약은 <strong>징역 10월~2년 권고</strong> 구간으로, 양형 자료가 충실하면 <strong>집행유예 가능성</strong>이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 재활 프로그램 수료증 + 반성문 + 가족 탄원서 + 재직증명서 + 치료 기록</blockquote>',
      },
    ],
    cases: [
      {
        title: '소변검사 양성이었으나 위양성으로 무혐의 처분을 받은 사례',
        summary:
          '관련 사례에서도 간이 소변검사에서 필로폰 양성 반응이 나왔으나, 국과수 정밀검사(GC-MS)에서 음성으로 확인된 경우가 있습니다. 해당 피의자는 감기약(슈도에페드린 성분)을 복용 중이었으며, 처방전과 약국 구매 영수증을 제출하여 위양성임을 입증했습니다.',
        takeaway:
          '비슷한 상황이라면 복용 중인 약물의 처방전과 구매 영수증을 즉시 확보하고, 정밀검사를 적극 요청하세요.',
      },
      {
        title: '소변검사 양성 후 자진 치료 참여로 집행유예를 받은 사례',
        summary:
          '관련 사례에서도 소변검사 양성으로 투약 혐의가 확인된 초범 피고인이 기소 전부터 마약류 재활 프로그램에 등록하고, 수료증과 정신건강의학과 치료 기록을 법원에 제출하여 징역 1년에 집행유예 2년을 선고받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 수사 초기부터 재활 프로그램에 참여하고, 변호사와 양형 자료를 체계적으로 준비하세요.',
      },
    ],
    faq: [
      {
        question: '소변검사 양성만으로 기소되나요?',
        answer: '간이검사 양성만으로는 기소되지 않습니다. <strong>국과수 정밀검사(GC-MS)</strong> 결과가 양성이어야 기소의 근거가 됩니다. 정밀검사 결과가 음성이면 혐의가 해소됩니다.',
      },
      {
        question: '감기약을 먹었는데 양성이 나올 수 있나요?',
        answer: '네, <strong>에페드린·슈도에페드린</strong> 성분이 포함된 감기약은 필로폰(메스암페타민)과 유사한 반응을 보여 간이검사에서 <strong>위양성</strong>이 나올 수 있습니다.',
      },
      {
        question: '소변검사를 거부할 수 있나요?',
        answer: '<strong>압수수색영장</strong> 없이는 거부할 수 있지만, 영장이 발부되면 거부가 어렵습니다. 거부 사실 자체가 의심을 강화시킬 수 있으므로 변호사와 상의하세요.',
      },
      {
        question: '소변검사 양성 후 모발검사도 받아야 하나요?',
        answer: '수사기관이 모발검사를 추가로 요구할 수 있습니다. 모발검사는 <strong>수개월간의 투약 이력</strong>을 확인할 수 있어, 투약 횟수와 기간을 파악하는 데 사용됩니다.',
      },
      {
        question: '소변에서 양성이 나오면 며칠 전 투약까지 검출되나요?',
        answer: '마약 종류에 따라 다르지만, 필로폰은 <strong>투약 후 3~5일</strong>, 대마는 <strong>7~30일</strong>까지 소변에서 검출될 수 있습니다.',
      },
      {
        question: '직장 건강검진에서 양성이 나오면 바로 경찰에 통보되나요?',
        answer: '일반 건강검진에는 마약 검사가 포함되지 않습니다. 다만 특수 직종(군인, 운동선수 등)의 경우 양성 결과가 <strong>관련 기관에 통보</strong>될 수 있습니다.',
      },
      {
        question: '구속되나요?',
        answer: '초범 단순 투약은 <strong>불구속 수사</strong>가 일반적이지만, 도주 우려, 증거 인멸 우려, 투약 횟수가 많은 경우 구속영장이 청구될 수 있습니다.',
      },
      {
        question: '위양성을 주장하려면 어떤 증거가 필요한가요?',
        answer: '①<strong>복용 약물 처방전</strong>, ②<strong>약국 구매 영수증</strong>, ③<strong>담당 의사 소견서</strong>, ④<strong>국과수 정밀검사 음성 결과</strong>가 핵심 증거입니다. 변호사를 통해 체계적으로 제출하세요.',
      },
    ],
    cta: {
      text: '소변검사 양성 후 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 사건 진단', href: '/diagnosis/drug-crime' },
      { label: '마약 혐의 수사 연락 받았을 때 대응법', href: '/guide/drug-crime/drug-investigation-response' },
      { label: '마약 초범 처벌 수위와 대응 방법', href: '/guide/drug-crime/drug-crime-first-offense-sentencing' },
    ],
  },
];
