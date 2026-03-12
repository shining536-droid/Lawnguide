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
];
