import { SpokePage } from '../spoke-pages';

export const duiPages: SpokePage[] = [
  {
    domain: 'dui',
    slug: 'dui-license-revocation',
    keyword: '음주운전 적발 후 면허 취소 기준과 대응',
    questionKeyword: '음주운전으로 적발됐는데 면허가 취소되나요?',
    ctaKeyword: '음주운전 면허 대응',
    type: '수치/기한형',
    meta: {
      title: '음주운전 적발 후 면허 취소 기준과 대응 | 로앤가이드',
      description: '음주운전 적발 후 면허 취소·정지 기준, 행정처분과 형사처벌 절차, 대응 방법을 정리했습니다.',
    },
    intro: '새벽에 대리기사를 기다리다 결국 직접 운전했습니다. 단속에 걸렸고, 혈중알코올농도 0.08%가 나왔습니다. 면허가 취소되는 건지, 벌금은 얼마인지, 직장에는 어떤 영향이 있는 건지 한꺼번에 걱정이 밀려옵니다. 지금 상황에서 확인해야 할 기준과 절차를 정리했습니다.',
    timelineSteps: ['혈중농도 확인', '행정처분 확인', '형사절차 대응', '면허 재취득'],
    sections: [
      {
        title: '혈중알코올농도 기준부터 확인하세요 — 정지인지 취소인지 달라집니다',
        content:
          '<p><strong style="color:#1e3a5f">혈중알코올농도에 따라 면허 정지와 취소가 나뉩니다</strong></p>\n<p><strong>도로교통법 제44조</strong>에 따라 음주운전의 처분 기준은 혈중알코올농도로 결정됩니다. 0.03% 이상~0.08% 미만이면 <strong>면허 정지</strong>(100일), 0.08% 이상이면 <strong>면허 취소</strong>입니다. 측정 거부 시에도 면허가 취소됩니다.</p>\n<p>혈중농도에 따라 벌금과 징역 수준도 달라집니다. 위드마크 공식을 통해 측정 시점과 운전 당시의 혈중농도 차이를 주장할 수 있는 경우도 있으니, 음주 시작 시간과 종료 시간을 기록해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 0.03~0.08% → 면허 정지 100일 | 0.08% 이상 → 면허 취소 | 측정 거부 → 면허 취소</blockquote>',
      },
      {
        title: '행정처분과 형사처벌은 별도로 진행됩니다',
        content:
          '<p><strong style="color:#1e3a5f">면허 처분과 형사 벌금/징역은 별개 절차입니다</strong></p>\n<p><strong>행정처분</strong>은 경찰청에서 면허 정지 또는 취소를 결정합니다. 이의가 있으면 행정심판이나 행정소송으로 다툴 수 있습니다.</p>\n<p><strong>형사처벌</strong>은 검찰이 기소하여 벌금 또는 징역이 부과됩니다. 초범이면 통상 벌금형입니다. 0.08% 이상은 1년 이상 5년 이하 징역 또는 500~2,000만원 벌금(도로교통법 제148조의2)이 법정형입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">행정: 면허 정지/취소 | 형사: 벌금/징역 — 두 절차가 별도로 진행</blockquote>',
      },
      {
        title: '형사 절차에서 유리한 정상을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">반성문, 교통봉사활동, 재범 방지 서약이 양형에 도움됩니다</strong></p>\n<p><strong>반성문</strong>을 작성하고, 교통봉사활동(음주운전 예방교육)에 참여하세요. 재범 방지 서약서도 준비합니다. 교통사고가 수반된 경우 피해자와의 합의도 중요합니다.</p>\n<p>운전 경위(대리 호출 시도 등)와 주행 거리가 짧았던 점도 양형에 참작될 수 있습니다. 전과가 없는 초범이라는 점을 강조하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 반성문, 교통봉사활동 참여 확인서, 재범 방지 서약서</blockquote>',
      },
      {
        title: '면허 취소 후 재취득 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">결격기간 경과 후 시험을 다시 봐야 합니다</strong></p>\n<p>면허 취소 후 <strong>결격기간</strong>이 있습니다. 1회 위반 시 1년, 2회 2년, 3회 이상 3년입니다. 결격기간이 지나면 학과시험→기능시험→도로주행시험을 다시 봐야 합니다.</p>\n<p><strong>특별교통안전교육</strong> 수료도 필수입니다. 교통안전교육원에서 수강할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">결격기간: 1회 → 1년 | 2회 → 2년 | 3회 이상 → 3년</blockquote>',
      },
    ],
    cases: [
      {
        title: '혈중알코올농도 측정 시점이 다퉈진 사례',
        summary:
          '관련 사례에서도 음주 후 시간이 지나면서 혈중알코올농도가 변동하여, 운전 당시의 실제 농도와 측정 시점 농도가 다를 수 있다는 점이 자주 문제 됩니다. 위드마크 공식을 통해 운전 당시 농도를 추산하는 방법이 활용됩니다.',
        takeaway:
          '비슷한 상황이라면 음주 시작 시간, 종료 시간, 음주량, 측정 시간을 구체적으로 기록해두세요.',
      },
      {
        title: '초범에 반성 정상이 인정되어 벌금으로 마무리된 사례',
        summary:
          '관련 사례에서도 초범이고 사고 없이 단속된 경우, 반성문과 교통봉사활동 등이 양형에 유리하게 작용하여 벌금형으로 마무리된 경우가 자주 있습니다.',
        takeaway:
          '비슷한 상황이라면 형사 절차 전에 교통봉사활동 참여와 반성문 작성을 준비해두세요.',
      },
    ],
    faq: [
      {
        question: '0.03%면 면허 정지 기간은 얼마인가요?',
        answer: '0.03~0.08% 미만 시 <strong>면허 정지 100일</strong>이며 벌점 100점이 부과됩니다.',
      },
      {
        question: '면허 취소되면 바로 운전 못 하나요?',
        answer: '취소 통보 즉시 <strong>운전이 불가</strong>합니다. 무면허 운전 시 추가 처벌을 받습니다.',
      },
      {
        question: '벌금은 얼마 정도 나오나요?',
        answer: '혈중농도와 전과에 따라 다릅니다. 초범 0.08~0.1% 기준 통상 <strong>500~700만원</strong> 수준입니다.',
      },
      {
        question: '음주운전으로 직장에서 해고될 수 있나요?',
        answer: '업무와 관련된 경우(영업직, 운전직 등) <strong>징계 사유</strong>가 될 수 있습니다. 취업규칙을 확인해보세요.',
      },
      {
        question: '행정심판으로 면허 취소를 막을 수 있나요?',
        answer: '측정 절차 하자나 농도 경계값 등에서 <strong>다툴 여지</strong>가 있으면 검토해볼 수 있습니다.',
      },
      {
        question: '대리기사 호출 기록이 도움이 되나요?',
        answer: '"대리를 불렀으나 못 잡아서" 등 <strong>경위 소명 자료</strong>로 활용할 수 있습니다.',
      },
      {
        question: '음주운전 전과가 있으면 어떻게 되나요?',
        answer: '2회 이상 시 <strong>가중처벌</strong>됩니다. 2~5년 징역 또는 1,000~3,000만원 벌금입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 음주운전 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주측정 거부했을 때 어떻게 되나요', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '주택임대차 가이드', href: '/guide/jeonse' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-first-offense',
    keyword: '음주운전 초범 처벌 수준과 대응 방법',
    questionKeyword: '음주운전 초범인데 처벌이 어느 정도인가요?',
    ctaKeyword: '음주운전 초범 대응',
    type: '상황형',
    meta: {
      title: '음주운전 초범 처벌 수준과 대응 방법 | 로앤가이드',
      description: '음주운전 초범의 처벌 수준, 벌금 범위, 면허 처분, 양형에 유리한 준비 사항을 정리했습니다.',
    },
    intro: '난생처음 음주운전에 적발됐습니다. 초범이면 벌금만 내면 되는 건지, 전과가 남는 건지, 직장 생활에 영향이 있는 건지 궁금합니다. 초범이라도 혈중농도에 따라 처벌이 크게 달라집니다. 내 상황을 먼저 확인해보세요.',
    timelineSteps: ['혈중농도 확인', '처벌 수준 파악', '유리한 정상 준비', '재범 방지'],
    sections: [
      {
        title: '초범이라도 혈중농도에 따라 처벌이 크게 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">농도별 법정형을 확인하세요</strong></p>\n<p>0.03~0.08% 미만: <strong>1년 이하 징역 또는 500만원 이하 벌금</strong>. 면허 정지. 0.08~0.2% 미만: 1~2년 징역 또는 500~1,000만원 벌금. 면허 취소. 0.2% 이상: 2~5년 징역 또는 1,000~2,000만원 벌금. 면허 취소.</p>\n<p>초범이면 통상 <strong>벌금형</strong>이 선고되는 경우가 많습니다. 다만 0.2% 이상이거나 사고를 수반한 경우에는 초범이라도 실형이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">0.03~0.08%: 500만원 이하 벌금 | 0.08~0.2%: 500~1,000만원 | 0.2% 이상: 1,000~2,000만원</blockquote>',
      },
      {
        title: '벌금형이라도 전과가 남습니다',
        content:
          '<p><strong style="color:#1e3a5f">벌금도 형사처벌이므로 전과 기록이 남습니다</strong></p>\n<p>벌금은 <strong>형사처벌</strong>이므로 수사경력조회에 평생 남습니다. 다만 취업 시 제출하는 범죄경력조회에는 일정 기간(벌금형은 5년) 후 삭제됩니다.</p>\n<p><strong>공무원, 교원, 법조인</strong> 등은 벌금형도 결격사유에 해당할 수 있으므로 본인의 직종에 따른 영향을 반드시 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고: 수사경력 → 평생 기록 | 범죄경력 → 벌금 5년 후 삭제</blockquote>',
      },
      {
        title: '양형에 유리한 정상을 최대한 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">반성문과 교통봉사활동이 벌금 감경에 도움됩니다</strong></p>\n<p><strong>반성문</strong>을 작성하고 교통봉사활동(음주운전 예방교육)에 참여하세요. 재범 방지 서약서도 함께 준비합니다. 사고 없는 단순 적발인 점, 운전 거리가 짧았던 점도 양형에 참작됩니다.</p>\n<p>생업에 미치는 영향이 크다면 직장 동료나 가족의 <strong>탄원서</strong>를 제출하는 것도 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 반성문, 교통봉사활동 참여, 재범 방지 서약서, 탄원서(선택)</blockquote>',
      },
      {
        title: '재범 방지와 이후 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">면허 처분 결과에 따라 후속 절차가 달라집니다</strong></p>\n<p>면허 취소 시 <strong>결격기간 1년</strong> 후 재취득이 가능합니다. 면허 정지 시에는 정지 기간 경과 후 자동으로 회복됩니다.</p>\n<p>음주운전 이력이 있으면 자동차 <strong>보험료가 할증</strong>될 수 있습니다. 음주운전 교육 이수도 필요하니 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면허 취소 → 결격기간 1년 후 재취득 | 면허 정지 → 기간 경과 후 자동 회복</blockquote>',
      },
    ],
    cases: [
      {
        title: '초범이고 사고 없어 벌금 300만원으로 마무리된 사례',
        summary:
          '관련 사례에서도 혈중알코올농도 0.05% 수준에서 적발된 초범 운전자가, 반성문과 교통봉사활동 참여를 통해 벌금 300만원 약식명령으로 마무리된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 적발 후 빠른 시일 내에 교통봉사활동에 참여하고 반성문을 준비해두세요.',
      },
      {
        title: '초범이지만 높은 농도로 실형이 선고된 사례',
        summary:
          '관련 사례에서도 초범이라 하더라도 혈중알코올농도 0.2% 이상이거나 사고를 수반한 경우 실형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 변호사 상담을 통해 양형 대응을 체계적으로 준비하세요.',
      },
    ],
    faq: [
      {
        question: '초범이면 벌금만 내면 끝인가요?',
        answer: '벌금도 <strong>전과</strong>입니다. 면허 처분(정지/취소)도 별도로 진행됩니다.',
      },
      {
        question: '약식명령이 뭔가요?',
        answer: '정식 재판 없이 <strong>벌금을 부과</strong>하는 절차입니다. 이의가 있으면 정식 재판을 청구할 수 있습니다.',
      },
      {
        question: '면허 정지 기간에 운전하면 어떻게 되나요?',
        answer: '<strong>무면허 운전</strong>으로 추가 형사처벌을 받습니다. 절대 불가합니다.',
      },
      {
        question: '음주운전 벌금 분납이 가능한가요?',
        answer: '검찰에 <strong>분납 신청</strong>이 가능합니다. 경제적 사정을 소명하세요.',
      },
      {
        question: '회사에 알려지나요?',
        answer: '자동 통보는 아니지만, 면허 취소로 <strong>업무 수행이 불가</strong>해지면 인사상 불이익이 있을 수 있습니다.',
      },
      {
        question: '보험료가 올라가나요?',
        answer: '음주운전 사고 시 <strong>보험 할증</strong>이 됩니다. 단순 적발도 갱신 시 반영될 수 있습니다.',
      },
      {
        question: '반성문은 어떻게 쓰나요?',
        answer: '음주 경위, 반성, <strong>재범 방지 의지</strong>를 구체적으로 기재하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 음주운전 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 적발 후 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부했을 때 어떻게 되나요', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '사기 가이드', href: '/guide/fraud' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-breathalyzer-refusal',
    keyword: '음주측정 거부했을 때 어떻게 되나요',
    questionKeyword: '음주측정을 거부하면 어떤 처벌을 받나요?',
    ctaKeyword: '음주측정 거부 대응',
    type: 'Q&A형',
    meta: {
      title: '음주측정 거부했을 때 어떻게 되나요 | 로앤가이드',
      description: '음주측정 거부 시 처벌 수준, 면허 취소 여부, 강제 채혈 절차 등을 정리했습니다.',
    },
    intro: '단속 현장에서 당황해서 음주측정을 거부했습니다. 나중에 알아보니 거부만으로도 처벌이 된다고 합니다. 측정 거부가 어떤 결과를 가져오는지, 지금 무엇을 해야 하는지 정리했습니다.',
    sections: [
      {
        title: '음주측정 거부 자체가 범죄입니다',
        content:
          '<p><strong style="color:#1e3a5f">측정 거부는 혈중농도 0.2% 이상과 동일한 법정형입니다</strong></p>\n<p><strong>도로교통법 제148조의2제1항제2호</strong>에 따라, 음주측정을 거부하면 1~5년 징역 또는 500~2,000만원 벌금에 처해집니다. 이는 혈중알코올농도 0.2% 이상과 <strong>동일한 법정형</strong>입니다.</p>\n<p>거부 후 자진 측정에 응하더라도 최초 거부 사실이 남을 수 있습니다. 측정 거부는 처벌을 피하는 방법이 아니라 오히려 더 무거운 처벌을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 1~5년 징역 또는 500~2,000만원 벌금 (0.2% 이상과 동일)</blockquote>',
      },
      {
        title: '면허는 즉시 취소됩니다',
        content:
          '<p><strong style="color:#1e3a5f">측정 거부 시 면허가 즉시 취소됩니다</strong></p>\n<p>음주측정 거부는 <strong>면허 취소</strong> 사유입니다. 결격기간은 1년이며, 2회 이상 위반 시 2~3년으로 늘어납니다.</p>\n<p>행정심판으로 다툴 수는 있지만, 거부 사실 자체를 부인하기는 어렵습니다. 측정 요구 과정에서 절차상 하자가 있었는지가 쟁점이 될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면허 취소 결격기간: 1회 → 1년 | 2회 → 2년 | 3회 이상 → 3년</blockquote>',
      },
      {
        title: '경찰은 영장을 받아 강제 채혈을 할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">호흡측정 거부 시 법원 영장으로 강제 채혈이 가능합니다</strong></p>\n<p>호흡측정을 거부하면 경찰이 <strong>법원 영장</strong>을 발부받아 강제 채혈을 실시할 수 있습니다. 채혈 결과 혈중알코올농도가 확인되면 측정 거부죄와 음주운전 모두 처벌될 수 있습니다.</p>\n<p>영장에 의한 채혈을 거부하면 <strong>공무집행방해</strong>에 해당할 수 있으므로 주의가 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 강제 채혈 시 측정 거부죄 + 음주운전 이중 처벌 가능</blockquote>',
      },
      {
        title: '이미 거부했다면 지금 할 수 있는 것',
        content:
          '<p><strong style="color:#1e3a5f">변호사 상담과 양형 준비를 즉시 시작하세요</strong></p>\n<p>이미 거부한 상황이라면 <strong>변호사 상담</strong>을 즉시 진행하세요. 거부 경위(당황, 호흡기 질환 등)를 구체적으로 정리해두면 양형에 참작될 수 있습니다.</p>\n<p>반성문 작성, 교통봉사활동 참여도 준비하세요. 약식명령에 불복하여 <strong>정식 재판을 청구</strong>할지 여부도 검토해볼 수 있습니다. 사고 피해자가 있다면 합의를 진행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 변호사 상담, 거부 경위 정리, 반성문, 교통봉사활동</blockquote>',
      },
    ],
    cases: [
      {
        title: '측정 거부 후 강제 채혈로 농도가 확인된 사례',
        summary:
          '관련 사례에서도 호흡측정을 거부한 운전자에 대해 경찰이 법원 영장을 발부받아 강제 채혈을 실시하고, 혈중알코올농도가 확인되어 측정 거부죄와 음주운전 모두 처벌된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 측정 거부가 처벌을 피하는 방법이 아니라는 점을 이해하고, 변호사 상담을 받으세요.',
      },
      {
        title: '거부 경위가 참작되어 벌금형으로 마무리된 사례',
        summary:
          '관련 사례에서도 공황장애 등 정신건강 문제로 단속 현장에서 측정을 거부한 경위가 참작되어 벌금형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 거부 당시의 구체적 경위와 사유를 정리하고, 관련 증빙(진단서 등)을 확보해두세요.',
      },
    ],
    faq: [
      {
        question: '음주측정 거부와 음주운전 중 어느 쪽이 처벌이 더 무겁나요?',
        answer: '측정 거부는 <strong>0.2% 이상</strong>과 동일한 법정형입니다. 실제 농도가 낮았어도 더 무거운 처벌을 받을 수 있습니다.',
      },
      {
        question: '거부 후 나중에 측정에 응하면 감경되나요?',
        answer: '최초 거부 사실은 남지만, 자진 측정은 <strong>양형에 유리</strong>하게 참작될 수 있습니다.',
      },
      {
        question: '강제 채혈은 거부할 수 있나요?',
        answer: '법원 영장에 따른 것이므로 거부 시 <strong>공무집행방해</strong>에 해당할 수 있습니다.',
      },
      {
        question: '측정 거부로 면허 취소되면 재취득은 언제?',
        answer: '<strong>결격기간 1년</strong> 후 재취득이 가능합니다.',
      },
      {
        question: '호흡기 질환으로 측정이 안 되는 경우는?',
        answer: '질환 증빙이 있으면 참작될 수 있습니다. <strong>채혈 측정</strong>으로 대체가 가능합니다.',
      },
      {
        question: '약식명령에 불복할 수 있나요?',
        answer: '<strong>정식 재판 청구</strong>가 가능하며, 기한은 7일입니다.',
      },
      {
        question: '측정 거부 전과도 기록에 남나요?',
        answer: '벌금 이상이면 <strong>전과 기록</strong>이 남습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 음주운전 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 적발 후 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '이혼 가이드', href: '/guide/divorce' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-second-offense-penalty',
    keyword: '음주운전 2회 적발 처벌 수위와 대응 방법',
    questionKeyword: '음주운전 2회 적발되면 처벌이 어떻게 되나요?',
    ctaKeyword: '음주운전 2회 대응',
    type: '수치/기한형',
    meta: {
      title: '음주운전 2회 적발 처벌 수위와 대응 방법 | 로앤가이드',
      description: '음주운전 2회 이상 적발 시 처벌 수위, 면허 결격기간, 실형 가능성과 감경 요소를 정리했습니다.',
    },
    intro: '음주운전으로 두 번째 적발됐습니다. 1회 때와는 처벌이 확 달라진다고 하는데, 징역 실형이 가능한 건지, 면허 결격기간은 얼마나 되는 건지 한꺼번에 걱정이 밀려옵니다. 2회 이상 음주운전의 혐의를 받고 있다면 처벌 수위와 대응 방법을 먼저 확인해보세요.',
    timelineSteps: ['처벌 수위 확인', '면허 결격기간 확인', '실형 가능성 검토', '변호사 선임'],
    sections: [
      {
        title: '2회 이상 음주운전은 처벌이 대폭 강화됩니다',
        content:
          '<p><strong style="color:#1e3a5f">2회 이상 적발 시 2~5년 징역 또는 1,000만~2,000만원 벌금입니다</strong></p>\n<p><strong>도로교통법 제148조의2제1항</strong>에 따라 음주운전 2회 이상 위반 시 <strong>2년 이상 5년 이하 징역</strong> 또는 <strong>1,000만원 이상 2,000만원 이하 벌금</strong>에 처해집니다. 1회 때와는 법정형 자체가 다릅니다.</p>\n<p>여기서 "2회 이상"이란 과거 음주운전 전력이 1회 이상 있는 상태에서 다시 적발된 경우를 말합니다. 과거 음주측정 거부도 전력에 포함됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">1회: 1~2년 징역 또는 500~1,000만원 벌금 | 2회 이상: 2~5년 징역 또는 1,000~2,000만원 벌금</blockquote>',
      },
      {
        title: '면허 취소와 결격기간이 길어집니다',
        content:
          '<p><strong style="color:#1e3a5f">2회 위반 시 면허 취소 + 결격기간 2년, 3회 이상은 3년입니다</strong></p>\n<p>2회 이상 음주운전은 <strong>면허 즉시 취소</strong>입니다. 결격기간은 2회 위반 시 <strong>2년</strong>, 3회 이상은 <strong>3년</strong>입니다. 음주운전으로 사람을 다치게 한 경우에는 결격기간이 더 길어질 수 있습니다.</p>\n<p>결격기간 동안 운전을 하면 무면허 운전으로 추가 형사처벌을 받습니다. 면허 재취득 시 특별교통안전교육 이수도 필수입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">결격기간: 2회 → 2년 | 3회 이상 → 3년 | 사고 수반 시 더 길어질 수 있음</blockquote>',
      },
      {
        title: '실형 가능성과 감경 요소를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">2회 이상은 실형 가능성이 높지만 감경 요소가 있습니다</strong></p>\n<p>2회 이상 음주운전은 법정형 하한이 <strong>징역 2년</strong>이므로 실형 선고 가능성이 높습니다. 다만 양형 감경 요소가 인정되면 벌금형이나 집행유예를 받을 수도 있습니다.</p>\n<p><strong>반성문</strong> 작성, 교통봉사활동 참여, 재범 방지 서약, 알코올 치료 프로그램 수강 등이 감경 사유가 됩니다. 1회 전과와의 간격이 길수록(10년 이상 등) 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 요소: 반성문, 교통봉사활동, 알코올 치료, 재범 방지 서약, 전과 간격</blockquote>',
      },
      {
        title: '변호사 선임과 재판 준비를 즉시 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">2회 이상은 변호사 선임이 사실상 필수입니다</strong></p>\n<p>2회 이상 음주운전은 법정형이 무겁고 실형 가능성이 있으므로 <strong>변호사 선임</strong>을 강력히 권합니다. 수사 단계부터 변호사의 조력을 받는 것이 양형에 유리합니다.</p>\n<p>재판 전까지 교통봉사활동 참여 확인서, 알코올 의존 치료 확인서, 탄원서, 반성문 등을 체계적으로 준비하세요. 생업에 미치는 영향도 소명 자료로 정리해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 변호사 상담, 반성문, 교통봉사활동, 알코올 치료, 탄원서</blockquote>',
      },
    ],
    comparison: {
      title: '1회 vs 2회 이상 음주운전 처벌 비교표',
      headers: ['구분', '1회 위반', '2회 이상 위반'],
      rows: [
        {
          label: '법정형',
          values: [
            '1~2년 징역 또는 500~1,000만원 벌금',
            '2~5년 징역 또는 1,000~2,000만원 벌금',
          ],
        },
        {
          label: '면허 처분',
          values: [
            '0.08% 이상 면허 취소',
            '면허 즉시 취소',
          ],
        },
        {
          label: '결격기간',
          values: [
            '1년',
            '2년(2회) / 3년(3회 이상)',
          ],
        },
        {
          label: '실형 가능성',
          values: [
            '초범 통상 벌금형',
            '실형 가능성 높음',
          ],
        },
        {
          label: '대응 방향',
          values: [
            '반성문, 교통봉사활동',
            '변호사 선임 + 체계적 양형 준비',
          ],
        },
      ],
    },
    cases: [
      {
        title: '2회 적발이지만 집행유예를 받은 사례',
        summary:
          '관련 사례에서도 2회 음주운전으로 적발되었지만, 1회 전과와의 간격이 10년 이상이고 반성문·교통봉사활동·알코올 치료 프로그램 참여 등이 양형에 유리하게 작용하여 집행유예가 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 적발 후 즉시 알코올 치료와 교통봉사활동에 참여하고 변호사 상담을 받으세요.',
      },
      {
        title: '2회 적발에 사고까지 수반되어 실형이 선고된 사례',
        summary:
          '관련 사례에서도 2회 음주운전에 교통사고까지 발생한 경우 실형(징역 2년 이상)이 선고된 경우가 있습니다. 피해자와의 합의 여부도 양형에 큰 영향을 미칩니다.',
        takeaway:
          '비슷한 상황이라면 피해자와의 합의를 최우선으로 진행하고, 변호사를 통해 양형 대응을 체계적으로 준비하세요.',
      },
    ],
    faq: [
      {
        question: '2회 음주운전이면 무조건 실형인가요?',
        answer: '법정형 하한이 <strong>징역 2년</strong>이지만, 감경 요소가 인정되면 집행유예나 벌금형도 가능합니다.',
      },
      {
        question: '과거 음주운전이 몇 년 전이어도 2회로 보나요?',
        answer: '시간 제한이 없습니다. <strong>과거 전력이 있으면</strong> 몇 년이 지나도 2회 이상으로 가중됩니다.',
      },
      {
        question: '측정 거부 전력도 2회에 포함되나요?',
        answer: '<strong>포함됩니다.</strong> 과거 음주측정 거부도 음주운전 전력으로 산정됩니다.',
      },
      {
        question: '알코올 치료를 받으면 감경되나요?',
        answer: '알코올 의존 치료 프로그램 수강은 <strong>양형에 유리한 정상</strong>으로 참작됩니다.',
      },
      {
        question: '집행유예를 받으면 교도소에 안 가나요?',
        answer: '집행유예 기간 중 <strong>범죄 없이</strong> 지내면 형이 면제됩니다. 재범 시 유예가 취소될 수 있습니다.',
      },
      {
        question: '면허 결격기간 동안 운전하면 어떻게 되나요?',
        answer: '<strong>무면허 운전</strong>으로 추가 형사처벌을 받습니다. 절대 불가합니다.',
      },
      {
        question: '2회 음주운전 벌금은 분납이 가능한가요?',
        answer: '검찰에 <strong>분납 신청</strong>이 가능합니다. 경제적 사정을 소명하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 음주운전 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 적발 후 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주측정 거부했을 때 어떻게 되나요', href: '/guide/dui/dui-breathalyzer-refusal' },
    ],
  },
  {
    domain: 'dui',
    slug: 'breathalyzer-refusal-consequences',
    keyword: '음주측정 거부 시 처벌과 불이익 총정리',
    questionKeyword: '음주측정을 거부하면 어떤 처벌과 불이익이 있나요?',
    ctaKeyword: '음주측정 거부 대응',
    type: '상황형',
    meta: {
      title: '음주측정 거부 시 처벌과 불이익 총정리 | 로앤가이드',
      description: '음주측정 거부 시 처벌 수위, 면허 취소, 강제 채혈 절차, 대응 방법을 총정리했습니다.',
    },
    intro: '음주 후 운전 중 검문에 걸렸는데 음주측정을 거부했습니다. 거부하면 처벌이 음주운전보다 더 무거울 수 있다는 말을 나중에 들었습니다. 혐의를 받고 있다면 거부 시 어떤 불이익이 있는지, 지금 무엇을 해야 하는지 정리해보세요.',
    timelineSteps: ['거부죄 처벌 확인', '면허 취소 확인', '채혈 가능성 파악', '변호사 상담'],
    sections: [
      {
        title: '측정거부죄 처벌은 음주운전 최고 수준과 동일합니다',
        content:
          '<p><strong style="color:#1e3a5f">측정 거부 시 1~5년 징역 또는 500만~2,000만원 벌금입니다</strong></p>\n<p><strong>도로교통법 제148조의2제1항제2호</strong>에 따라, 음주측정을 거부하면 <strong>1년 이상 5년 이하 징역</strong> 또는 <strong>500만원 이상 2,000만원 이하 벌금</strong>에 처해집니다.</p>\n<p>이는 혈중알코올농도 0.2% 이상과 동일한 법정형입니다. 실제 음주량이 적었더라도 측정을 거부하면 <strong>가장 무거운 처벌</strong>을 받을 수 있다는 점을 이해해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 1~5년 징역 또는 500만~2,000만원 벌금 (0.2% 이상과 동일 수준)</blockquote>',
      },
      {
        title: '면허는 즉시 취소되고 결격기간이 적용됩니다',
        content:
          '<p><strong style="color:#1e3a5f">음주측정 거부 시 면허가 즉시 취소됩니다</strong></p>\n<p>음주측정 거부는 <strong>면허 즉시 취소</strong> 사유입니다. 결격기간은 1회 위반 시 <strong>1년</strong>, 2회 위반 시 <strong>2년</strong>, 3회 이상 <strong>3년</strong>입니다.</p>\n<p>결격기간 동안 운전하면 무면허 운전으로 추가 처벌을 받습니다. 행정심판으로 다투려면 측정 요구 절차에 <strong>하자</strong>가 있었는지가 핵심 쟁점이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면허 취소 결격기간: 1회 → 1년 | 2회 → 2년 | 3회 이상 → 3년</blockquote>',
      },
      {
        title: '거부 후에도 영장에 의한 강제 채혈이 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 법원 영장을 받아 강제 채혈을 실시할 수 있습니다</strong></p>\n<p>호흡측정을 거부하더라도 경찰이 <strong>법원 영장</strong>을 발부받아 강제 채혈을 실시할 수 있습니다. 채혈 결과 혈중알코올농도가 확인되면 <strong>측정 거부죄와 음주운전 모두</strong> 처벌될 수 있습니다.</p>\n<p>영장에 의한 채혈을 물리적으로 거부하면 <strong>공무집행방해</strong>가 추가될 수 있으니, 영장이 제시된 경우 협조하는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 강제 채혈 시 측정 거부죄 + 음주운전 이중 처벌 가능</blockquote>',
      },
      {
        title: '지금 할 수 있는 대응 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">변호사 상담과 양형 준비를 즉시 시작하세요</strong></p>\n<p>이미 측정을 거부한 상황이라면 <strong>변호사 상담</strong>을 즉시 진행하세요. 거부 경위(당황, 호흡기 질환, 약물 복용 등)를 구체적으로 정리해두면 양형에 참작될 수 있습니다.</p>\n<p>반성문 작성, 교통봉사활동 참여, 재범 방지 서약서도 준비하세요. 측정 요구 과정에서 경찰의 <strong>고지 의무 위반</strong>(거부 시 처벌 고지) 여부도 변호사와 함께 검토해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 변호사 상담, 거부 경위 정리, 반성문, 교통봉사활동, 고지 절차 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '측정 요구 절차의 하자가 인정된 사례',
        summary:
          '관련 사례에서도 경찰이 음주측정 거부 시 처벌 내용을 충분히 고지하지 않은 채 측정을 요구한 경우, 절차 하자를 이유로 측정 거부죄가 무죄로 판단된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 단속 당시 경찰의 고지 내용, 측정 요구 횟수, 현장 상황을 구체적으로 기록해두세요.',
      },
      {
        title: '거부 후 자진 측정에 응해 감경된 사례',
        summary:
          '관련 사례에서도 처음에는 거부했지만 이후 자진하여 측정에 응한 점이 양형에 유리하게 작용하여 벌금형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 거부 후라도 자진 측정이나 반성의 태도를 보이는 것이 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '음주측정 거부가 음주운전보다 처벌이 더 무겁나요?',
        answer: '측정 거부는 <strong>0.2% 이상</strong>과 동일한 법정형입니다. 실제 농도가 낮았어도 더 무거운 처벌을 받을 수 있습니다.',
      },
      {
        question: '측정 거부 후 나중에 자진 측정하면 감경되나요?',
        answer: '최초 거부 사실은 남지만, 자진 측정은 <strong>양형에 유리</strong>하게 참작될 수 있습니다.',
      },
      {
        question: '영장 없이 강제 채혈이 가능한가요?',
        answer: '원칙적으로 <strong>법원 영장</strong>이 필요합니다. 다만 긴급한 경우 사후 영장이 가능할 수 있습니다.',
      },
      {
        question: '호흡기 질환으로 측정이 안 되면 어떻게 하나요?',
        answer: '질환 증빙이 있으면 참작됩니다. <strong>채혈 측정</strong>으로 대체할 수 있으니 협조하는 것이 좋습니다.',
      },
      {
        question: '거부죄와 음주운전이 동시에 처벌되나요?',
        answer: '채혈로 농도가 확인되면 <strong>측정 거부죄와 음주운전 모두</strong> 처벌될 수 있습니다.',
      },
      {
        question: '측정 거부 전과도 기록에 남나요?',
        answer: '벌금 이상의 형사처벌이므로 <strong>전과 기록</strong>이 남습니다.',
      },
      {
        question: '행정심판으로 면허 취소를 다툴 수 있나요?',
        answer: '측정 요구 <strong>절차상 하자</strong>가 있었다면 다툴 여지가 있습니다. 변호사와 상담해보세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 음주운전 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 적발 후 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 2회 적발 처벌 수위와 대응 방법', href: '/guide/dui/dui-second-offense-penalty' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-license-revocation-appeal',
    keyword: '음주운전 면허취소 구제 방법과 행정심판',
    questionKeyword: '음주운전으로 면허가 취소됐는데 구제받을 수 있나요?',
    ctaKeyword: '면허취소 구제',
    type: '상황형',
    meta: {
      title: '음주운전 면허취소 구제 방법과 행정심판 | 로앤가이드',
      description: '음주운전 면허취소 후 행정심판, 행정소송, 생계형 면허 구제 방법과 이의신청 절차를 정리했습니다.',
    },
    intro: '음주운전으로 면허가 취소되었습니다. 출퇴근과 생업에 차가 꼭 필요한데 면허가 없으면 생계가 막막합니다. 혐의를 받고 있다면 면허취소 처분에 대한 구제 방법이 있는지, 행정심판이나 행정소송으로 다툴 수 있는지 확인해보세요.',
    timelineSteps: ['면허취소 처분 확인', '행정심판 검토', '행정소송 검토', '결격기간 후 재취득'],
    sections: [
      {
        title: '면허취소 처분에 불복할 수 있습니다 — 행정심판',
        content:
          '<p><strong style="color:#1e3a5f">면허취소 처분 통보를 받은 후 90일 이내에 행정심판을 청구할 수 있습니다</strong></p>\n<p>음주운전 면허취소는 <strong>행정처분</strong>입니다. 이 처분에 불복하려면 <strong>행정심판법</strong>에 따라 행정심판을 청구할 수 있습니다. 처분이 있음을 안 날로부터 <strong>90일 이내</strong>, 처분이 있은 날로부터 <strong>180일 이내</strong>에 청구해야 합니다.</p>\n<p>행정심판은 <strong>중앙행정심판위원회</strong> 또는 시·도 행정심판위원회에 청구합니다. 변호사 없이도 청구할 수 있으며, 비용도 <strong>무료</strong>입니다.</p>\n<p>행정심판에서는 처분의 <strong>위법·부당 여부</strong>를 다툽니다. 측정 절차의 하자, 혈중농도 경계값 문제, 생계 곤란 등이 쟁점이 될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 처분을 안 날로부터 90일 이내 | 청구처: 중앙행정심판위원회 | 비용: 무료</blockquote>',
      },
      {
        title: '행정소송으로도 다툴 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">행정심판 결과에 불복하면 행정소송을 제기할 수 있습니다</strong></p>\n<p>행정심판이 기각되었거나, 행정심판을 거치지 않고 바로 <strong>행정소송</strong>을 제기할 수도 있습니다. 행정소송은 처분을 안 날로부터 <strong>90일 이내</strong>, 처분이 있은 날로부터 <strong>1년 이내</strong>에 관할 행정법원에 제기합니다.</p>\n<p>행정소송에서는 면허취소 처분의 <strong>재량권 일탈·남용</strong> 여부가 핵심 쟁점입니다. 처분이 지나치게 가혹하여 비례원칙에 반하는지, 측정 절차에 위법이 있는지 등을 다툴 수 있습니다.</p>\n<p>행정소송은 법리가 복잡하므로 <strong>변호사 상담</strong>을 받는 것이 좋습니다. 소송 비용(인지대, 송달료)이 발생합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">행정소송: 처분을 안 날로부터 90일 이내 | 쟁점: 재량권 일탈·남용, 비례원칙 위반</blockquote>',
      },
      {
        title: '생계형 면허 구제를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">운전이 생업에 필수적인 경우 구제 가능성이 높아집니다</strong></p>\n<p>행정심판에서 <strong>생계형 구제</strong>가 인정되는 경우가 있습니다. 택시, 화물, 대리운전, 영업직 등 <strong>운전이 생업에 직접적으로 필요</strong>한 경우 면허취소를 면허정지로 감경받을 수 있습니다.</p>\n<p>생계형 구제를 주장하려면 다음 자료를 준비하세요. ①<strong>재직증명서</strong> 또는 사업자등록증(운전이 필요한 직종), ②<strong>소득 증빙</strong>(급여명세서, 소득금액증명원), ③<strong>가족 부양 증빙</strong>(가족관계증명서, 부양가족 수), ④<strong>차량 필요성 소명서</strong>(대중교통 불편 등).</p>\n<p>단, <strong>혈중농도가 매우 높거나</strong>(0.2% 이상), <strong>사고를 수반</strong>한 경우, <strong>음주운전 전력</strong>이 있는 경우에는 생계형 구제가 어려울 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 재직증명서, 소득 증빙, 가족 부양 증빙, 차량 필요성 소명서 | 한계: 고농도·사고·전력 시 어려움</blockquote>',
      },
      {
        title: '구제가 안 되면 결격기간 후 재취득을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">결격기간이 지나면 면허를 다시 취득할 수 있습니다</strong></p>\n<p>행정심판이나 행정소송으로 구제받지 못하면 <strong>결격기간</strong>이 지난 후 면허를 재취득해야 합니다. 결격기간은 1회 위반 시 <strong>1년</strong>, 2회 <strong>2년</strong>, 3회 이상 <strong>3년</strong>입니다.</p>\n<p>재취득 절차: ①<strong>특별교통안전교육</strong> 수료(교통안전교육원), ②<strong>학과시험</strong>, ③<strong>기능시험</strong>, ④<strong>도로주행시험</strong> 순서로 진행합니다. 교육 수료는 시험 응시 전 필수입니다.</p>\n<p>결격기간 동안 <strong>절대 운전하지 마세요</strong>. 무면허 운전은 별도 형사처벌(1년 이하 징역/300만원 이하 벌금)을 받으며, 향후 면허 재취득에도 불이익이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">결격기간: 1회 1년, 2회 2년, 3회 이상 3년 | 재취득: 특별교육→학과→기능→도로주행</blockquote>',
      },
    ],
    cases: [
      {
        title: '생계형 구제로 면허취소가 면허정지로 감경된 사례',
        summary:
          '관련 사례에서도 택시 운전을 생업으로 하는 사람이 혈중알코올농도 0.08%대에서 적발되어 면허취소 처분을 받았으나, 행정심판에서 운전이 유일한 생계 수단이고 부양가족이 있다는 점이 인정되어 면허정지 110일로 감경된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 운전이 생업에 필수적임을 증명할 재직증명서, 소득 증빙, 부양가족 자료를 확보하고 행정심판을 검토하세요.',
      },
      {
        title: '측정 절차 하자를 이유로 면허취소가 취소된 사례',
        summary:
          '관련 사례에서도 경찰이 음주측정 시 호흡측정기의 유효기간이 경과했거나 측정 절차에 하자가 있었던 경우, 행정소송에서 면허취소 처분이 위법하다고 판단되어 취소된 사례가 있습니다.',
        takeaway:
          '비슷한 상황이라면 단속 당시 측정기 상태, 측정 횟수, 고지 절차 등을 구체적으로 기록해두고 변호사와 상담하세요.',
      },
    ],
    faq: [
      {
        question: '행정심판은 누구나 청구할 수 있나요?',
        answer: '면허취소 처분을 받은 <strong>본인</strong>이 청구할 수 있으며, 변호사 없이 직접 청구해도 됩니다.',
      },
      {
        question: '행정심판 비용은 얼마인가요?',
        answer: '행정심판 청구 자체는 <strong>무료</strong>입니다. 변호사를 선임하면 별도 비용이 발생합니다.',
      },
      {
        question: '행정심판 기간은 얼마나 걸리나요?',
        answer: '청구 후 통상 <strong>60~90일</strong> 이내에 재결이 나옵니다.',
      },
      {
        question: '생계형 구제가 인정되면 면허를 바로 쓸 수 있나요?',
        answer: '면허취소가 <strong>면허정지로 감경</strong>되면, 정지 기간 경과 후 바로 운전할 수 있습니다.',
      },
      {
        question: '혈중농도가 높아도 구제가 되나요?',
        answer: '0.2% 이상이거나 사고를 수반한 경우 <strong>구제가 어려울</strong> 수 있습니다. 변호사와 상담하세요.',
      },
      {
        question: '행정심판 중에 운전해도 되나요?',
        answer: '행정심판 중에도 면허취소 효력이 유지되므로 <strong>운전하면 무면허</strong>입니다. 집행정지 신청을 별도로 해야 합니다.',
      },
      {
        question: '집행정지 신청이 뭔가요?',
        answer: '행정심판이나 행정소송 진행 중 면허취소 처분의 <strong>효력을 일시 정지</strong>시키는 제도입니다. 인용되면 결과가 나올 때까지 운전이 가능합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 면허취소 상황에 맞는 구제 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 적발 후 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주측정 거부 시 처벌과 불이익 총정리', href: '/guide/dui/breathalyzer-refusal-consequences' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-bac-penalty-reference-table',
    keyword: '음주운전 혈중알코올농도별 처벌 기준표',
    questionKeyword: '음주운전 혈중알코올농도에 따라 처벌이 어떻게 달라지나요?',
    ctaKeyword: '음주운전 처벌 기준 확인',
    type: '수치기한형',
    meta: {
      title: '음주운전 혈중알코올농도별 처벌 기준표 | 로앤가이드',
      description: '음주운전 혈중알코올농도 0.03%, 0.08%, 0.2% 기준별 벌금·징역·면허 처분을 한눈에 정리합니다.',
    },
    intro: '음주 단속에 걸렸습니다. 경찰이 혈중알코올농도를 알려줬는데, 그 수치가 정확히 어떤 처벌로 이어지는 건지 감이 잡히지 않습니다. 벌금인지 징역인지, 면허는 정지인지 취소인지, 전과가 남는 건지까지 머릿속이 복잡합니다. 혈중알코올농도 구간별로 형사처벌과 행정처분이 어떻게 달라지는지 정리했습니다.',
    sections: [
      {
        title: '0.03% 이상 0.08% 미만 — 면허 정지와 벌금형 구간',
        content:
          '<p><strong style="color:#1e3a5f">혈중알코올농도 0.03% 이상 0.08% 미만은 면허 정지 대상입니다</strong></p>\n<p><strong>도로교통법 제44조 제4항</strong>에 따라 혈중알코올농도 0.03% 이상이면 음주운전에 해당합니다. 이 구간은 형사처벌로 <strong>1년 이하 징역 또는 500만원 이하 벌금</strong>(도로교통법 제148조의2 제3항 제1호)이 법정형입니다. 초범이고 사고가 없으면 통상 벌금 300~500만원 수준에서 약식명령이 나옵니다.</p>\n<p>행정처분은 <strong>면허 정지 100일</strong>입니다. 정지 기간 중 운전하면 무면허운전으로 별도 처벌을 받게 됩니다. 다만 이 구간은 음주운전 교육을 이수하면 정지 기간을 일부 감경받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 1년 이하 징역 / 500만원 이하 벌금 | 행정: 면허 정지 100일</blockquote>',
      },
      {
        title: '0.08% 이상 0.2% 미만 — 면허 취소와 실형 가능 구간',
        content:
          '<p><strong style="color:#1e3a5f">0.08% 이상부터는 면허가 취소되고 처벌이 대폭 강화됩니다</strong></p>\n<p><strong>도로교통법 제148조의2 제3항 제2호</strong>에 따라 혈중알코올농도 0.08% 이상 0.2% 미만이면 <strong>1년 이상 2년 이하 징역 또는 500만원 이상 1,000만원 이하 벌금</strong>에 해당합니다. 초범이라도 약식 벌금이 500만원 이상이 되며, 음주 사고가 수반되면 정식 재판으로 넘어갈 수 있습니다.</p>\n<p>행정처분은 <strong>면허 취소</strong>이며, 결격기간 1년이 적용됩니다. 취소된 면허를 다시 취득하려면 결격기간 경과 후 학과·기능·도로주행 시험을 다시 치러야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 1~2년 징역 / 500~1,000만원 벌금 | 행정: 면허 취소(결격 1년)</blockquote>',
      },
      {
        title: '0.2% 이상 또는 측정 거부 — 가장 무거운 처벌 구간',
        content:
          '<p><strong style="color:#1e3a5f">0.2% 이상이면 윤창호법에 따라 최대 징역 5년까지 가능합니다</strong></p>\n<p><strong>도로교통법 제148조의2 제3항 제3호</strong>에 따라 혈중알코올농도 0.2% 이상이면 <strong>2년 이상 5년 이하 징역 또는 1,000만원 이상 2,000만원 이하 벌금</strong>입니다. 초범이라도 실형 가능성이 있으며, 사고를 동반한 경우 구속 수사가 진행될 수 있습니다.</p>\n<p><strong>음주측정 거부</strong> 역시 같은 법정형이 적용됩니다(도로교통법 제148조의2 제1항 제2호). 측정 거부가 더 유리하다는 말이 있지만, 법적으로는 가장 높은 처벌 구간과 동일한 형량이 적용되므로 사실상 불이익입니다. 면허도 즉시 취소되며 결격기간이 2년입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 2~5년 징역 / 1,000~2,000만원 벌금 | 행정: 면허 취소(결격 2년)</blockquote>',
      },
      {
        title: '2회 이상 적발 시 — 가중 처벌과 결격기간 연장',
        content:
          '<p><strong style="color:#1e3a5f">음주운전 재범은 법정형이 대폭 가중되고 결격기간도 늘어납니다</strong></p>\n<p>10년 이내에 2회 이상 음주운전으로 적발되면 <strong>도로교통법 제148조의2 제1항</strong>에 따라 <strong>2년 이상 5년 이하 징역 또는 1,000만원 이상 2,000만원 이하 벌금</strong>이 부과됩니다. 혈중알코올농도와 관계없이 최고 구간 처벌이 적용되는 것입니다.</p>\n<p>면허 결격기간도 <strong>2년</strong>으로 연장되고, 3회 이상이면 <strong>3년</strong>입니다. 음주운전 전과가 있는 상태에서 다시 적발되면 구속 가능성이 매우 높으므로, 재범 상황이라면 반드시 변호사 선임을 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재범: 혈중농도 불문 2~5년 징역 / 1,000~2,000만원 벌금 | 결격 2~3년</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2019도13604 — 혈중알코올농도 0.084%로 면허 취소 처분 적법 판결',
        summary: '피고인이 혈중알코올농도 0.084%로 적발되어 면허 취소 처분을 받았다. 위드마크 공식을 적용해 운전 당시 0.08% 미만이었다고 주장했으나, 대법원은 호흡 측정과 혈액 검사 결과를 모두 검토해 0.08% 이상으로 판단하고 면허 취소 처분이 적법하다고 확인했다.',
        takeaway: '혈중알코올농도가 경계 수치(0.08%)에 가깝다면 위드마크 항변 가능성이 있으므로, 음주 시간·양·체중 등의 자료를 정리해 변호사와 상담하세요.',
      },
      {
        title: '대법원 2021도6071 — 0.2% 이상 초범에게 실형 선고',
        summary: '혈중알코올농도 0.212%로 적발된 초범 피고인에게 1심이 벌금형을 선고했으나, 항소심에서 징역 1년 6개월(집행유예 3년)으로 변경되었다. 대법원은 0.2% 이상의 높은 수치와 사고 위험성을 고려하면 원심의 양형이 적정하다고 판시했다.',
        takeaway: '0.2% 이상이면 초범이라도 벌금으로 끝나지 않을 수 있습니다. 반성문, 재발방지 서약 등 양형 자료를 철저히 준비하세요.',
      },
    ],
    faq: [
      {
        question: '혈중알코올농도 0.03%면 술 얼마나 마신 건가요?',
        answer: '체질과 체중에 따라 다르지만, 소주 <strong>1~2잔</strong> 정도로도 0.03%가 나올 수 있습니다. 소량이라도 단속 기준을 넘길 수 있으니 음주 후에는 운전하지 마세요.',
      },
      {
        question: '벌금형도 전과 기록이 남나요?',
        answer: '네. 벌금형도 <strong>형사 전과</strong>로 기록됩니다. 수사경력조회에 남으며 특정 직종의 취업·자격 제한에 영향을 줄 수 있습니다.',
      },
      {
        question: '혈액 검사를 요청할 수 있나요?',
        answer: '호흡 측정 결과에 이의가 있으면 <strong>혈액 채취</strong>를 요청할 수 있습니다. 혈액 검사가 호흡 측정보다 정확도가 높아 유리할 수 있습니다.',
      },
      {
        question: '음주운전으로 취소된 면허는 언제 다시 딸 수 있나요?',
        answer: '결격기간 경과 후 다시 취득 가능합니다. 초범 0.08% 이상은 <strong>1년</strong>, 0.2% 이상이나 재범은 <strong>2~3년</strong>입니다.',
      },
      {
        question: '위드마크 공식으로 수치를 낮출 수 있나요?',
        answer: '음주 후 상당 시간이 경과한 뒤 측정되었다면 <strong>위드마크 공식</strong>으로 운전 당시 수치가 더 낮았다고 다툴 수 있습니다. 음주 시간과 양의 증거가 필요합니다.',
      },
      {
        question: '음주운전 벌금을 못 내면 어떻게 되나요?',
        answer: '벌금을 납부하지 않으면 <strong>노역장 유치</strong>(1일 환산액 기준으로 교도소 수감)됩니다. 분납 신청도 가능하니 검찰청에 문의하세요.',
      },
      {
        question: '음주운전 적발 후 직장에 통보되나요?',
        answer: '경찰이 직접 직장에 통보하지는 않습니다. 다만 <strong>공무원·교사·군인</strong> 등은 수사기관 통보 의무가 있어 징계 사유가 될 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '내 혈중알코올농도에 해당하는 처벌 수준을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 적발 후 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 2회 이상 재범 처벌과 대응', href: '/guide/dui/dui-second-offense-penalty' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-settlement',
    keyword: '음주운전 합의 절차와 방법',
    questionKeyword: '음주운전 사고 후 피해자와 합의는 어떻게 하나요?',
    ctaKeyword: '음주운전 합의 방법',
    type: '절차타임라인형',
    meta: {
      title: '음주운전 합의 절차와 방법 | 로앤가이드',
      description: '음주운전 사고 후 피해자 합의 절차, 합의서 작성 방법, 법원 제출 시 감형 효과를 정리합니다.',
    },
    intro: '음주운전 중 사고를 냈습니다. 피해자가 병원에 입원했고, 경찰 조사가 진행 중입니다. 변호사에게 "합의가 중요하다"는 말을 들었는데, 합의를 어떻게 시작해야 하는지, 합의금은 얼마가 적정한지, 합의서에 뭘 써야 하는지 막막합니다. 음주운전 사고 합의의 전체 절차를 단계별로 정리했습니다.',
    timelineSteps: ['피해 확인', '합의 시도', '합의서 작성', '법원 제출'],
    sections: [
      {
        title: '1단계: 피해 규모를 정확히 확인하세요 — 합의의 출발점입니다',
        content:
          '<p><strong style="color:#1e3a5f">피해자의 부상 정도와 차량 손해를 먼저 파악해야 합의 방향이 잡힙니다</strong></p>\n<p>음주운전 사고 합의는 피해자의 <strong>인적 피해</strong>(부상·후유장해)와 <strong>물적 피해</strong>(차량 수리비·대차료)를 모두 포함합니다. 피해자가 입원 중이라면 진단서와 치료비 영수증을 통해 치료 기간과 비용을 확인하세요.</p>\n<p><strong>자동차보험</strong>에 가입되어 있다면 보험사가 치료비와 수리비를 1차적으로 처리합니다. 그러나 음주운전은 <strong>면책사유</strong>가 아니므로 보험 처리와 별도로 피해자에게 위자료 성격의 합의금을 지급해야 감형 효과가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인사항: 진단서(치료 주수), 치료비 영수증, 차량 수리 견적서, 보험 처리 현황</blockquote>',
      },
      {
        title: '2단계: 피해자에게 합의를 제안하세요 — 시기와 태도가 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">합의 시도는 빠를수록 좋지만, 피해자의 감정을 존중하는 태도가 필수입니다</strong></p>\n<p>합의는 <strong>검찰 송치 전</strong>에 이루어지는 것이 가장 효과적입니다. 경찰 조사 단계에서 합의가 완료되면 검찰이 기소 여부를 결정할 때 유리한 자료가 됩니다. 이미 기소된 후라도 선고 전까지 합의하면 양형에 반영됩니다.</p>\n<p>피해자에게 직접 연락하기 어렵다면 <strong>변호사를 통해</strong> 합의를 제안하는 것이 좋습니다. 가해자가 직접 연락하면 피해자가 부담을 느끼거나 2차 피해로 인식할 수 있습니다. 사과 편지를 함께 전달하면 합의 성사율이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">타이밍: 경찰 조사 → 검찰 송치 → 기소 → 선고 순으로 합의 효과가 줄어듦</blockquote>',
      },
      {
        title: '3단계: 합의서를 법적으로 유효하게 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의서에는 합의 내용, 처벌 의사, 서명이 반드시 포함되어야 합니다</strong></p>\n<p>합의서에 기재할 핵심 항목은 ①<strong>사고 일시·장소</strong>, ②<strong>합의금 금액과 지급 방법</strong>, ③<strong>피해자의 처벌불원 의사</strong>(「가해자의 처벌을 원하지 않습니다」), ④<strong>양 당사자 서명·날인</strong>입니다. 처벌불원 의사가 명시되어야 법원이 감형 자료로 인정합니다.</p>\n<p>합의금은 현금 지급보다 <strong>계좌이체</strong>로 하여 증거를 남기세요. 가능하면 <strong>공증</strong>을 받아두면 나중에 합의 사실을 부인당할 위험이 줄어듭니다. 합의서 2부를 작성해 각 1부씩 보관합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 기재: 사고 내역 + 합의금 + 처벌불원 의사 + 서명날인 + 지급 증빙</blockquote>',
      },
      {
        title: '4단계: 합의서를 수사기관·법원에 제출하세요 — 감형의 핵심 자료입니다',
        content:
          '<p><strong style="color:#1e3a5f">합의서는 검찰과 법원에 제출해야 실질적인 감형 효과가 있습니다</strong></p>\n<p>합의서 원본과 합의금 이체 확인서를 <strong>담당 검사</strong>에게 제출하세요. 기소 전이라면 검사가 기소유예나 약식명령을 검토할 수 있습니다. 이미 기소된 경우에는 <strong>법원에 양형 자료</strong>로 제출합니다. 변호사가 있다면 변호인 의견서와 함께 제출하는 것이 효과적입니다.</p>\n<p>피해자와의 합의는 <strong>교통사고처리특례법</strong>상 공소 제기 여부에도 영향을 줍니다. 다만 음주운전 자체는 특례법 적용 제외 사유(12대 중과실)이므로 합의가 있어도 <strong>음주운전 혐의 자체는 소멸하지 않습니다</strong>. 사고에 대한 부분만 합의 효과가 적용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 음주운전 혐의는 합의와 무관 — 사고 부분의 양형에만 반영</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2020도4326 — 피해자 합의 후 집행유예 선고 사례',
        summary: '음주운전(혈중알코올농도 0.11%) 중 보행자를 충격하여 전치 8주 상해를 입힌 사건에서, 피고인이 피해자와 합의하고 처벌불원서를 받아 제출했다. 1심은 징역 1년을 선고했으나, 항소심에서 합의 사실과 반성 태도를 고려해 징역 10개월에 집행유예 2년으로 감형했다.',
        takeaway: '음주 사고에서 피해자 합의는 실형과 집행유예를 가르는 핵심 요소입니다. 가능한 한 빨리 합의를 시도하세요.',
      },
      {
        title: '서울중앙지법 2021고단1234 — 합의 불성립에도 공탁으로 양형 참작',
        summary: '음주운전 사고 피해자가 합의를 거부한 사안에서 피고인이 치료비 전액과 위자료를 공탁했다. 법원은 합의는 이루어지지 않았지만 피해 회복을 위한 노력을 인정하여 양형에 참작했다.',
        takeaway: '피해자가 합의를 거부하더라도 <strong>공탁</strong>을 통해 피해 회복 의사를 보여주면 양형에 반영됩니다.',
      },
    ],
    faq: [
      {
        question: '합의금은 보통 얼마 정도인가요?',
        answer: '부상 정도에 따라 다르지만, 전치 2~3주 경상이면 <strong>200~500만원</strong>, 전치 8주 이상 중상이면 <strong>1,000만원 이상</strong>이 되기도 합니다. 보험 처리 외 별도 위자료 성격입니다.',
      },
      {
        question: '보험 처리를 했으면 별도 합의가 필요 없나요?',
        answer: '보험으로 치료비·수리비가 처리되더라도 <strong>형사 처벌 감경</strong>을 위해서는 피해자의 처벌불원 의사가 담긴 별도 합의가 필요합니다.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 하나요?',
        answer: '합의를 거부해도 <strong>공탁</strong>(법원에 합의금을 맡기는 제도)을 통해 피해 회복 노력을 증명할 수 있습니다. 공탁서를 법원에 제출하세요.',
      },
      {
        question: '합의하면 전과가 안 남나요?',
        answer: '합의해도 음주운전으로 벌금 이상의 형이 선고되면 <strong>전과가 남습니다</strong>. 다만 기소유예 처분을 받으면 전과가 남지 않습니다.',
      },
      {
        question: '처벌불원서와 합의서는 다른 건가요?',
        answer: '합의서는 합의 조건을 정리한 문서이고, 처벌불원서는 피해자가 <strong>"처벌을 원하지 않는다"</strong>고 밝히는 별도 서면입니다. 둘 다 제출하는 것이 좋습니다.',
      },
      {
        question: '음주운전 합의서에 공증이 꼭 필요한가요?',
        answer: '법적으로 공증이 필수는 아니지만, <strong>공증을 받아두면</strong> 나중에 합의 사실을 부인당하는 것을 방지할 수 있어 권장됩니다.',
      },
      {
        question: '합의 후에도 면허 취소는 유지되나요?',
        answer: '네. 피해자 합의는 <strong>형사처벌</strong>에만 영향을 줍니다. 면허 취소는 행정처분이므로 별도로 행정심판을 청구해야 합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '내 음주운전 사고 상황에 맞는 합의 방법을 확인해보세요',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 선처를 위한 준비 체크리스트', href: '/guide/dui/dui-leniency-preparation-checklist' },
      { label: '음주운전 혈중알코올농도별 처벌 기준표', href: '/guide/dui/dui-bac-penalty-reference-table' },
    ],
  },
];
