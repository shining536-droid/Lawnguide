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
      title: '음주운전 면허 취소 기준 3단계와 즉시 대응법 | 로앤가이드',
      description: '음주운전 적발 후 면허 취소·정지 기준은? BAC 0.03%·0.08%·0.2% 구간별 행정처분과 형사처벌 절차, 면허 구제 방법까지 지금 확인하세요.',
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
      title: '음주운전 초범 벌금·처벌 기준 총정리 | 로앤가이드',
      description: '음주운전 초범이면 벌금이 얼마일까요? 혈중알코올 농도별 처벌 기준, 면허 정지·취소 기준, 감경 방법을 지금 확인하세요.',
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
          '<p><strong style="color:#1e3a5f">벌금도 형사처벌이므로 전과 기록이 남습니다</strong></p>\n<p>벌금은 <strong>형사처벌</strong>이므로 수사경력조회에 평생 남습니다. 다만 취업 시 제출하는 범죄경력조회에는 일정 기간(벌금형은 5년) 후 삭제됩니다.</p>\n<p><strong>공무원, 교원, 법조인</strong> 등은 벌금형도 결격사유에 해당할 수 있으므로 본인의 직종에 따른 영향을 가능한 한 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고: 수사경력 → 평생 기록 | 범죄경력 → 벌금 5년 후 삭제</blockquote>',
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
        question: '음주운전 초범 벌금은 보통 얼마인가요?',
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
      title: '음주측정 거부 시 처벌·면허취소 즉시 확인 | 로앤가이드',
      description: '음주측정 거부하면 어떻게 될까? 1~5년 징역, 500~2000만원 벌금, 즉시 면허 취소와 강제 채혈 절차까지 지금 확인하세요.',
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
      title: '음주운전 2회 재범 처벌 수위·실형 가능성 총정리 | 로앤가이드',
      description: '음주운전 2회 이상 적발되면 실형이 나올까? 2~5년 징역 기준, 면허 결격기간 2년, 감경 가능한 4가지 요소를 바로 정리해보세요.',
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
        question: '2회 음주운전이면 원칙적으로 실형인가요?',
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
      title: '음주측정 거부 불이익 5가지와 대응 방법 | 로앤가이드',
      description: '음주측정을 거부하면 어떤 불이익이 생길까? 가중처벌, 즉시 면허 취소, 강제 채혈 영장, 보험 면책까지 5가지 불이익과 올바른 대응법을 지금 확인하세요.',
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
      title: '음주운전 행정심판·면허취소 구제 3가지 방법 | 로앤가이드',
      description: '음주운전 면허취소 행정심판 90일 기한 놓치지 마세요. 행정심판, 생계형 감경, 행정소송까지 면허 구제 방법을 지금 확인하세요.',
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
      title: '음주운전 BAC 농도별 처벌 기준표 한눈에 비교 | 로앤가이드',
      description: '혈중알코올농도 0.03%·0.08%·0.2% 구간별 벌금·징역·면허 처분이 어떻게 다를까? 최신 기준 처벌표와 감경 요소를 바로 정리해보세요.',
    },
    intro: '음주 단속에 걸렸습니다. 경찰이 혈중알코올농도를 알려줬는데, 그 수치가 정확히 어떤 처벌로 이어지는 건지 감이 잡히지 않습니다. 벌금인지 징역인지, 면허는 정지인지 취소인지, 전과가 남는 건지까지 머릿속이 복잡합니다. 혈중알코올농도 구간별로 형사처벌과 행정처분이 어떻게 달라지는지 정리했습니다.',
    sections: [
      {
        title: '0.03% 이상 0.08% 미만 — 면허 정지와 벌금형 구간',
        content:
          '<p><strong style="color:#1e3a5f">혈중알코올농도 0.03% 이상 0.08% 미만은 면허 정지 대상입니다</strong></p>\n<p><strong>도로교통법 제44조 제4항</strong>에 따라 혈중알코올농도 0.03% 이상이면 음주운전에 해당할 소지가 있습니다. 이 구간은 형사처벌로 <strong>1년 이하 징역 또는 500만원 이하 벌금</strong>(도로교통법 제148조의2 제3항 제1호)이 법정형입니다. 초범이고 사고가 없으면 통상 벌금 300~500만원 수준에서 약식명령이 나옵니다.</p>\n<p>행정처분은 <strong>면허 정지 100일</strong>입니다. 정지 기간 중 운전하면 무면허운전으로 별도 처벌을 받게 됩니다. 다만 이 구간은 음주운전 교육을 이수하면 정지 기간을 일부 감경받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 1년 이하 징역 / 500만원 이하 벌금 | 행정: 면허 정지 100일</blockquote>',
      },
      {
        title: '0.08% 이상 0.2% 미만 — 면허 취소와 실형 가능 구간',
        content:
          '<p><strong style="color:#1e3a5f">0.08% 이상부터는 면허가 취소되고 처벌이 대폭 강화됩니다</strong></p>\n<p><strong>도로교통법 제148조의2 제3항 제2호</strong>에 따라 혈중알코올농도 0.08% 이상 0.2% 미만이면 <strong>1년 이상 2년 이하 징역 또는 500만원 이상 1,000만원 이하 벌금</strong>에 해당할 소지가 있습니다. 초범이라도 약식 벌금이 500만원 이상이 되며, 음주 사고가 수반되면 정식 재판으로 넘어갈 수 있습니다.</p>\n<p>행정처분은 <strong>면허 취소</strong>이며, 결격기간 1년이 적용됩니다. 취소된 면허를 다시 취득하려면 결격기간 경과 후 학과·기능·도로주행 시험을 다시 치러야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 1~2년 징역 / 500~1,000만원 벌금 | 행정: 면허 취소(결격 1년)</blockquote>',
      },
      {
        title: '0.2% 이상 또는 측정 거부 — 가장 무거운 처벌 구간',
        content:
          '<p><strong style="color:#1e3a5f">0.2% 이상이면 윤창호법에 따라 최대 징역 5년까지 가능합니다</strong></p>\n<p><strong>도로교통법 제148조의2 제3항 제3호</strong>에 따라 혈중알코올농도 0.2% 이상이면 <strong>2년 이상 5년 이하 징역 또는 1,000만원 이상 2,000만원 이하 벌금</strong>입니다. 초범이라도 실형 가능성이 있으며, 사고를 동반한 경우 구속 수사가 진행될 수 있습니다.</p>\n<p><strong>음주측정 거부</strong> 역시 같은 법정형이 적용됩니다(도로교통법 제148조의2 제1항 제2호). 측정 거부가 더 유리하다는 말이 있지만, 법적으로는 가장 높은 처벌 구간과 동일한 형량이 적용되므로 사실상 불이익입니다. 면허도 즉시 취소되며 결격기간이 2년입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 2~5년 징역 / 1,000~2,000만원 벌금 | 행정: 면허 취소(결격 2년)</blockquote>',
      },
      {
        title: '2회 이상 적발 시 — 가중 처벌과 결격기간 연장',
        content:
          '<p><strong style="color:#1e3a5f">음주운전 재범은 법정형이 대폭 가중되고 결격기간도 늘어납니다</strong></p>\n<p>10년 이내에 2회 이상 음주운전으로 적발되면 <strong>도로교통법 제148조의2 제1항</strong>에 따라 <strong>2년 이상 5년 이하 징역 또는 1,000만원 이상 2,000만원 이하 벌금</strong>이 부과됩니다. 혈중알코올농도와 관계없이 최고 구간 처벌이 적용되는 것입니다.</p>\n<p>면허 결격기간도 <strong>2년</strong>으로 연장되고, 3회 이상이면 <strong>3년</strong>입니다. 음주운전 전과가 있는 상태에서 다시 적발되면 구속 가능성이 매우 높으므로, 재범 상황이라면 가능한 한 변호사 선임을 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재범: 혈중농도 불문 2~5년 징역 / 1,000~2,000만원 벌금 | 결격 2~3년</blockquote>',
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
      title: '음주운전 사고 합의 절차 4단계와 감형 효과 | 로앤가이드',
      description: '음주운전 사고 후 합의하면 얼마나 감형될까? 피해자 합의 절차 4단계, 합의서 작성 방법, 법원 제출 시 양형 감경 효과를 지금 확인하세요.',
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
          '<p><strong style="color:#1e3a5f">합의서에는 합의 내용, 처벌 의사, 서명이 가능한 한 포함되어야 합니다</strong></p>\n<p>합의서에 기재할 핵심 항목은 ①<strong>사고 일시·장소</strong>, ②<strong>합의금 금액과 지급 방법</strong>, ③<strong>피해자의 처벌불원 의사</strong>(「가해자의 처벌을 원하지 않습니다」), ④<strong>양 당사자 서명·날인</strong>입니다. 처벌불원 의사가 명시되어야 법원이 감형 자료로 인정합니다.</p>\n<p>합의금은 현금 지급보다 <strong>계좌이체</strong>로 하여 증거를 남기세요. 가능하면 <strong>공증</strong>을 받아두면 나중에 합의 사실을 부인당할 위험이 줄어듭니다. 합의서 2부를 작성해 각 1부씩 보관합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 기재: 사고 내역 + 합의금 + 처벌불원 의사 + 서명날인 + 지급 증빙</blockquote>',
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
      { label: '음주운전 선처를 위한 준비 체크리스트', href: '/guide/dui/dui-victim-compensation-checklist' },
      { label: '음주운전 혈중알코올농도별 처벌 기준표', href: '/guide/dui/dui-bac-penalty-reference-table' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-investigation-common-mistakes',
    keyword: '음주운전 적발 후 흔한 실수 5가지',
    questionKeyword: '음주운전으로 적발됐는데 어떤 실수를 조심해야 하나요?',
    ctaKeyword: '음주운전 적발 대응',
    type: '실수함정형',
    meta: {
      title: '음주운전 적발 후 절대 하면 안 되는 실수 5가지 | 로앤가이드',
      description: '음주운전 적발 후 현장 변명, 측정 거부, SNS 글 게시, 합의 지연, 행정처분 방치까지 처벌을 키우는 5가지 실수와 올바른 대응법을 바로 정리해보세요.',
    },
    intro:
      '새벽에 대리운전이 안 잡혀서 "가까우니까" 직접 운전했다가 검문에 걸렸습니다. 당황한 나머지 현장에서 이것저것 말을 쏟아냈는데, 나중에 알고 보니 모두 불리한 진술이었습니다. 혐의를 받고 있다면 적발 직후 흔히 하는 실수 5가지를 확인하고 같은 실수를 피해보세요.',
    sections: [
      {
        title: '실수 1·2: 현장 변명과 음주측정 거부',
        content:
          '<p><strong style="color:#1e3a5f">현장에서 "조금밖에 안 마셨다"는 변명은 음주 사실을 인정하는 증거가 됩니다</strong></p>\n<p>단속 현장에서 당황하여 <strong>"한 잔만 마셨다", "바로 근처인데"</strong>라고 말하는 순간 음주운전 사실을 스스로 인정하는 셈입니다. 경찰 바디캠에 모두 녹화되며, 이후 재판에서 증거로 사용됩니다. 현장에서는 <strong>불필요한 발언을 삼가세요</strong>.</p>\n<p><strong>음주측정 거부</strong>는 더 큰 실수입니다. 도로교통법 제148조의2에 따라 측정 거부 자체가 <strong>1년 이상 6년 이하 징역 또는 500만원 이상 3,000만원 이하 벌금</strong>으로 처벌 대상으로 검토될 수 있습니다. 이는 음주운전 처벌보다 오히려 무거울 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 현장 발언 = 바디캠 증거 | 측정 거부 = 별도 범죄(1~6년 징역)</blockquote>',
      },
      {
        title: '실수 3: SNS에 관련 글을 올리는 것',
        content:
          '<p><strong style="color:#1e3a5f">SNS에 올린 글은 삭제해도 검찰이 복구하여 반성 태도 부족의 증거로 사용합니다</strong></p>\n<p>적발 후 분함이나 억울함에 SNS에 <strong>"운 나빴다", "단속이 과했다"</strong>는 글을 올리는 경우가 있습니다. 이런 게시물은 <strong>재판에서 반성하지 않는 태도</strong>로 해석되어 양형에 불리하게 작용합니다. 삭제해도 디지털 포렌식으로 복구됩니다.</p>\n<p>반대로, 음주운전 사실에 대한 <strong>진심 어린 반성</strong>과 <strong>재발 방지 노력</strong>(알코올 치료 수강, 봉사활동 등)은 양형에 유리한 자료가 됩니다. SNS 대신 <strong>변호사와의 대화</strong>에 집중하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">금지: SNS 불만 게시(삭제해도 복구됨) → 대신: 반성문 + 알코올 치료 수강 + 봉사활동</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">음주운전 적발 후 대응이 막막하다면, 현재 상황에 맞는 준비사항을 <a href="/diagnosis/dui" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '실수 4: 피해자 합의를 미루거나 무시하는 것',
        content:
          '<p><strong style="color:#1e3a5f">인적 피해가 있는 음주운전에서 합의 여부는 양형에 결정적 영향을 줍니다</strong></p>\n<p>사고로 피해자가 있는 경우, <strong>합의를 미루면 미룰수록</strong> 재판에서 불리해집니다. 검찰과 법원은 "피해 회복 노력"을 중요한 양형 요소로 보기 때문입니다. 특히 <strong>기소 전 합의</strong>가 완료되면 약식기소(벌금형)로 처리될 가능성이 높아집니다.</p>\n<p>합의는 가능한 한 <strong>변호사를 통해</strong> 진행하세요. 직접 연락하면 피해자에게 부담을 주어 오히려 합의가 어려워집니다. 합의서에는 <strong>처벌불원 의사, 합의 금액, 추가 청구 없음</strong>을 명시해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 기소 전 합의 → 약식기소 가능성↑ | 변호사 통해 진행 | 합의서에 처벌불원 명시</blockquote>',
      },
      {
        title: '실수 5: 면허 행정처분을 방치하는 것',
        content:
          '<p><strong style="color:#1e3a5f">면허 취소·정지 처분에 대한 행정심판 청구 기한은 처분 통보일로부터 90일입니다</strong></p>\n<p>음주운전 형사처벌에만 신경 쓰다가 <strong>면허 행정처분을 방치</strong>하는 경우가 많습니다. 면허 취소는 형사 처벌과 별개의 행정처분이므로, 벌금형을 받더라도 면허는 취소될 수 있습니다. 처분 통보를 받으면 <strong>90일 이내에 행정심판</strong>을 청구해야 합니다.</p>\n<p>행정심판에서는 <strong>생계 필요성, 반성 및 재발 방지 노력, 사고 경위의 특수성</strong> 등을 소명합니다. 면허 취소가 정지로 감경되거나, 정지 기간이 단축되는 경우가 실무에서 적지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 행정심판 90일 이내 청구 | 소명: 생계 필요성 + 반성 노력 + 사고 특수성</blockquote>',
      },
    ],
    cases: [
      {
        title: '현장 발언이 재판에서 불리한 증거로 채택된 사례',
        summary:
          '단속 현장에서 "소주 두 잔밖에 안 마셨다"고 말한 내용이 바디캠에 녹화되었고, 법정에서 "음주 사실을 부인한 적 없다"는 검찰 주장의 근거로 활용되어 벌금 500만원이 선고되었습니다.',
        takeaway:
          '비슷한 상황이라면 단속 현장에서는 불필요한 발언을 삼가고, 음주측정에만 응하세요.',
      },
      {
        title: '행정심판을 통해 면허 취소가 정지로 감경된 사례',
        summary:
          '혈중알코올농도 0.09%로 면허 취소 처분을 받았으나, 택시 기사로서 생계 유일 수단임을 소명하고 알코올 치료 수강 증명서를 제출하여 면허 정지 110일로 감경되었습니다.',
        takeaway:
          '비슷한 상황이라면 처분 통보일로부터 90일 이내에 생계 필요성과 반성 자료를 갖추어 행정심판을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '음주운전 적발 현장에서 변호사를 부를 수 있나요?',
        answer:
          '현장에서 변호사 조력을 요청할 권리가 있지만, 실무상 <strong>음주측정은 즉시 진행</strong>됩니다. 측정 후 경찰서 조사 시 변호사 동석을 요청하세요.',
      },
      {
        question: '음주측정 거부하면 처벌이 더 무거운가요?',
        answer:
          '네. 측정 거부는 <strong>1년 이상 6년 이하 징역 또는 500만~3,000만원 벌금</strong>으로, 음주운전 자체보다 무거울 수 있습니다.',
      },
      {
        question: '적발 후 SNS에 올린 글을 삭제하면 괜찮나요?',
        answer:
          '아닙니다. <strong>디지털 포렌식으로 복구</strong>가 가능하며, 삭제 행위 자체가 증거 인멸 시도로 해석될 수 있습니다.',
      },
      {
        question: '초범인데 합의하면 벌금형으로 끝나나요?',
        answer:
          '초범이고 혈중알코올농도가 낮으며 피해자 합의까지 완료되면 <strong>약식기소(벌금형)</strong>로 처리될 가능성이 높습니다. 다만 보장은 아닙니다.',
      },
      {
        question: '면허 취소와 형사처벌은 별개인가요?',
        answer:
          '네. 면허 취소·정지는 <strong>행정처분</strong>이고, 벌금·징역은 형사처벌입니다. 각각 별도로 대응해야 합니다.',
      },
      {
        question: '음주운전 후 알코올 치료를 받으면 도움이 되나요?',
        answer:
          '<strong>알코올 치료 프로그램 수료 증명서</strong>는 재판에서 반성과 재발 방지 노력의 증거로 양형에 유리하게 작용합니다.',
      },
      {
        question: '행정심판으로 면허 취소를 막을 수 있나요?',
        answer:
          '취소가 정지로 감경되거나 정지 기간이 단축되는 경우가 있습니다. <strong>생계 필요성</strong>과 반성 자료를 잘 준비하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '1분 안에 음주운전 적발 대응 준비사항 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 초범 처벌 수준과 대응', href: '/guide/dui/dui-first-offense' },
      { label: '음주측정 거부 시 처벌과 대응', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '교통사고 합의금 가이드', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-victim-compensation-checklist',
    keyword: '음주운전 피해자 보상 청구 체크리스트',
    questionKeyword: '음주운전 사고 피해자인데 보상은 어떻게 받나요?',
    ctaKeyword: '음주운전 피해 보상',
    type: '체크리스트형',
    meta: {
      title: '음주운전 피해자 보상 청구 핵심 체크리스트 | 로앤가이드',
      description: '음주운전 사고 피해자인데 보상은 어떻게 받을까? 보험사 청구, 합의금 항목별 산정, 정부보장사업 신청까지 놓치면 안 되는 보상 절차를 지금 확인하세요.',
    },
    intro:
      '횡단보도를 건너다 음주운전 차량에 치였습니다. 다리가 부러져 입원 중인데, 치료비는 누가 내는 건지, 보상은 어떻게 받는 건지, 가해자가 연락도 없습니다. 음주운전 피해자로서 받을 수 있는 보상 항목과 청구 절차를 단계별로 확인해보세요.',
    sections: [
      {
        title: '가해자 보험사에 보상 청구를 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">음주운전 사고라도 가해자의 자동차보험으로 보상받을 수 있습니다</strong></p>\n<p>가해자가 <strong>자동차보험</strong>에 가입되어 있다면, 보험사에 직접 보상 청구가 가능합니다. 사고 접수 후 보험사 담당자가 배정되며, <strong>치료비는 보험사가 병원에 직접 지급</strong>하는 것이 원칙입니다. 입원 즉시 보험사에 사고 접수를 하세요.</p>\n<p>보험사 연락처를 모르면 <strong>교통사고 사실확인원</strong>(경찰서 발급)에 가해자 보험 정보가 기재되어 있습니다. 가해자가 무보험인 경우에는 <strong>정부보장사업</strong>(국토교통부)을 통해 보상받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">1단계: 교통사고 사실확인원 발급 → 보험사 사고 접수 → 치료비 직접 청구 | 무보험 시: 정부보장사업</blockquote>',
      },
      {
        title: '보상 청구 항목을 빠짐없이 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">음주운전 사고 보상은 치료비 외에도 휴업손해, 위자료, 향후치료비까지 포함됩니다</strong></p>\n<p>보상 항목은 크게 5가지입니다. ①<strong>치료비</strong>(입원비·수술비·재활비), ②<strong>휴업손해</strong>(치료 기간 동안 일하지 못한 소득), ③<strong>위자료</strong>(정신적 고통에 대한 배상), ④<strong>향후치료비</strong>(퇴원 후 추가 치료·재활 비용), ⑤<strong>후유장해 배상</strong>(영구적 장해가 남은 경우).</p>\n<p>보험사는 보상 금액을 <strong>최소한으로 제시</strong>하는 경향이 있습니다. 특히 휴업손해와 위자료는 산정 기준이 복잡하므로, 보험사 제안을 바로 수락하지 말고 <strong>변호사 검토</strong>를 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">항목: ①치료비 ②휴업손해 ③위자료 ④향후치료비 ⑤후유장해 배상 | 보험사 제안 즉시 수락 금지</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">음주운전 피해 보상이 막막하다면, 내 상황에 맞는 청구 항목을 <a href="/diagnosis/dui" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '형사합의와 민사 보상은 별개입니다',
        content:
          '<p><strong style="color:#1e3a5f">가해자와 형사합의를 했더라도 민사 손해배상은 따로 청구할 수 있습니다</strong></p>\n<p>형사합의는 가해자의 <strong>형사처벌을 감경</strong>하는 데 영향을 주는 것이고, 보험사를 통한 민사 보상과는 별개입니다. 형사합의서에 <strong>"민사상 청구권을 포기한다"는 문구</strong>가 포함되어 있지 않다면, 추가로 민사 소송이 가능합니다.</p>\n<p>다만 형사합의금을 받을 때는 합의서 내용을 <strong>가능한 한 변호사와 검토</strong>하세요. "일체의 민·형사상 이의를 제기하지 않는다"는 포괄적 문구가 들어가면 민사 보상에 영향을 줄 수 있습니다. 합의서 작성 시 <strong>민사 청구권 유보 조항</strong>을 명시하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형사합의 ≠ 민사 보상 | 합의서에 "민사 청구권 유보" 명시 | 포괄적 권리 포기 문구 주의</blockquote>',
      },
      {
        title: '무보험·뺑소니 시 정부보장사업을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">가해자가 무보험이거나 뺑소니인 경우 정부가 대신 보상하는 제도가 있습니다</strong></p>\n<p><strong>자동차손해배상보장법</strong>에 따른 정부보장사업은 가해자가 무보험이거나, 뺑소니로 가해자를 알 수 없는 경우 피해자에게 보상금을 지급합니다. 청구는 <strong>손해보험협회</strong>(1544-8889)에서 접수하며, 자동차보험 기준으로 보상액이 산정됩니다.</p>\n<p>청구 시 필요한 서류는 ①<strong>교통사고 사실확인원</strong>, ②<strong>진단서 및 치료비 영수증</strong>, ③<strong>소득 증빙 자료</strong>(휴업손해 청구 시), ④<strong>신분증 사본</strong>입니다. 청구 기한은 <strong>사고일로부터 3년</strong>이므로 서두르세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정부보장사업: 손해보험협회 1544-8889 | 서류: 사실확인원+진단서+소득증빙+신분증 | 기한: 3년</blockquote>',
      },
    ],
    cases: [
      {
        title: '보험사 초기 제안을 거절하고 3배 높은 보상을 받은 사례',
        summary:
          '음주운전 사고 피해자가 보험사의 초기 합의금 800만원 제안을 거절하고, 변호사를 선임하여 휴업손해와 향후치료비를 추가 산정한 결과 최종 2,400만원의 보상을 받았습니다.',
        takeaway:
          '비슷한 상황이라면 보험사 첫 제안을 바로 수락하지 말고, 변호사를 통해 정당한 보상 항목을 모두 산정하세요.',
      },
      {
        title: '무보험 가해자 사고에서 정부보장사업으로 보상받은 사례',
        summary:
          '음주운전 뺑소니 사고로 가해자 보험이 없었으나, 정부보장사업에 청구하여 치료비 전액과 위자료를 포함한 1,500만원의 보상금을 지급받았습니다.',
        takeaway:
          '비슷한 상황이라면 가해자가 무보험이더라도 포기하지 말고, 손해보험협회에 정부보장사업을 신청하세요.',
      },
    ],
    faq: [
      {
        question: '음주운전 가해자 보험으로 치료비를 받을 수 있나요?',
        answer:
          '네. 음주운전이라도 <strong>자동차보험 대인배상</strong>으로 피해자 치료비가 지급됩니다. 보험사에 직접 청구하세요.',
      },
      {
        question: '보험사가 제시하는 합의금이 적은 것 같은데 어떻게 하나요?',
        answer:
          '보험사 첫 제안은 대체로 낮습니다. <strong>변호사 검토</strong>를 받거나, 금융감독원 분쟁조정을 신청할 수 있습니다.',
      },
      {
        question: '형사합의금을 받으면 보험사 보상도 줄어드나요?',
        answer:
          '원칙적으로 별개이지만, 합의서에 <strong>민사 청구권 포기 문구</strong>가 있으면 영향을 받을 수 있으니 주의하세요.',
      },
      {
        question: '가해자가 뺑소니 후 잡히지 않으면 보상을 못 받나요?',
        answer:
          '아닙니다. <strong>정부보장사업</strong>을 통해 가해자 불명인 경우에도 보상받을 수 있습니다.',
      },
      {
        question: '휴업손해는 어떻게 계산하나요?',
        answer:
          '<strong>사고 전 3개월 평균 소득</strong>을 기준으로 치료 기간만큼 산정합니다. 급여명세서, 소득금액증명원 등을 준비하세요.',
      },
      {
        question: '후유장해 등급은 누가 판정하나요?',
        answer:
          '치료가 종결된 후 <strong>보험사 자문의 또는 국민건강보험공단</strong>에서 장해 등급을 판정합니다. 이의가 있으면 재판정을 요청하세요.',
      },
      {
        question: '보상 청구 기한이 있나요?',
        answer:
          '보험금 청구는 <strong>사고일로부터 3년</strong>, 민사 손해배상 소송은 <strong>손해를 안 날로부터 3년</strong>입니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 교통사고 피해자 지원센터(1588-2504)를 활용하세요.',
      },
    ],
    cta: {
      text: '1분 안에 음주운전 피해 보상 준비사항 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 합의 절차와 합의금', href: '/guide/dui/dui-settlement' },
      { label: '음주운전 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '교통사고 합의금 가이드', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-administrative-license-hearing',
    keyword: '음주운전 면허 행정심판 절차',
    questionKeyword: '음주운전으로 면허 취소됐는데 행정심판으로 되돌릴 수 있나요?',
    ctaKeyword: '음주운전 면허 행정심판',
    type: '절차형',
    meta: {
      title: '음주운전 면허 행정심판 90일 내 신청 절차 | 로앤가이드',
      description: '면허 취소·정지 후 행정심판으로 감경받으려면? 90일 신청 기한, 감경 사유 4가지, 이의신청과 행정소송 절차를 바로 정리해보세요.',
    },
    intro:
      '면허가 취소되면 출퇴근이 불가능합니다. 영업용 차를 모는 직업이라 면허가 곧 생계입니다. "행정심판으로 면허를 되돌릴 수 있다"는 말을 들었습니다. 혐의를 받고 있다면 행정처분에 대해서도 적극적으로 대응할 수 있는 방법을 알아두세요.',
    timelineSteps: ['처분 통지 확인', '행정심판 청구', '심판 심리', '결과 확인'],
    sections: [
      {
        title: '행정심판 청구 기한을 반드시 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">면허 취소·정지 처분을 안 날로부터 90일 이내에 청구해야 합니다</strong></p>\n<p><strong>행정심판법 제27조</strong>에 따라 면허 취소·정지 처분이 있음을 <strong>안 날부터 90일</strong>, 처분이 있은 날부터 <strong>180일</strong> 이내에 행정심판을 청구해야 합니다. 이 기간이 지나면 심판 청구 자체가 불가능합니다.</p>\n<p>처분 통지서를 받은 날짜를 가능한 한 기록해두세요. 우편 수령일이 기산점이 됩니다. 기한이 촉박한 경우 <strong>온라인 행정심판(중앙행정심판위원회 홈페이지)</strong>으로 신속하게 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 처분을 안 날부터 90일 | 처분일부터 180일 | 기한 경과 시 청구 불가</blockquote>',
      },
      {
        title: '행정심판에서 감경받을 수 있는 사유를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">생계 곤란, 운전 필요성이 감경의 핵심 사유입니다</strong></p>\n<p>행정심판위원회는 처분의 <strong>적법성뿐 아니라 타당성</strong>도 심사합니다. 면허 취소를 <strong>정지(감경)</strong>로 변경하거나, 정지 기간을 <strong>단축</strong>하는 결정이 가능합니다. 주요 감경 사유는 다음과 같습니다.</p>\n<p>①<strong>생계형 운전자</strong>(택시·화물·영업용 기사), ②<strong>가족 부양 의무</strong>(한부모, 장애 가족 돌봄), ③<strong>대중교통 이용 불가 지역</strong> 거주, ④<strong>혈중알코올농도가 취소 기준 경계</strong>(0.08~0.09%)인 경우 등이 유리하게 작용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 사유: 생계형 운전, 가족 부양, 교통 불편 지역, 경계 농도, 반성</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">행정심판 감경 가능성이 궁금하다면, <a href="/diagnosis/dui" style="color:#2563eb;font-weight:600">무료 진단</a>으로 내 상황을 빠르게 확인해보세요.</p>',
      },
      {
        title: '행정심판 절차와 진행 과정을 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">청구서 제출 후 약 60일 내에 재결이 나옵니다</strong></p>\n<p><strong>중앙행정심판위원회</strong> 또는 <strong>시·도 행정심판위원회</strong>에 심판 청구서를 제출합니다. 온라인 청구(국민권익위원회 홈페이지)가 가능하며, 처분서 사본, 재직증명서, 소득자료, 탄원서 등 <strong>소명 자료</strong>를 함께 제출하세요.</p>\n<p>청구 후 행정청(경찰청)이 <strong>답변서</strong>를 제출하고, 위원회가 <strong>서면 심리</strong> 또는 <strong>구술 심리</strong>를 진행합니다. 재결까지 통상 <strong>60일</strong>이 소요되며, 감경 인용률은 약 <strong>20~30%</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 청구서+소명자료 제출 → 답변서 → 심리 → 재결(약 60일)</blockquote>',
      },
      {
        title: '행정심판이 기각되면 행정소송을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">행정심판 기각 후에도 행정소송으로 다툴 수 있습니다</strong></p>\n<p>행정심판에서 <strong>기각</strong> 결정을 받더라도 <strong>행정소송</strong>(취소소송)을 제기할 수 있습니다. 재결서를 송달받은 날부터 <strong>90일 이내</strong>에 관할 행정법원에 소장을 접수하세요. 행정소송은 법원에서 처분의 위법성을 심사합니다.</p>\n<p>행정소송은 변호사의 도움이 사실상 필수입니다. 소송 비용과 기간(6개월~1년)을 고려하여 감경 가능성이 높은 경우에 진행하는 것이 합리적입니다. <strong>이의신청</strong>(처분청에 직접 제기)은 별도 절차이며 행정심판과 중복 청구가 불가합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">후속: 행정심판 기각 → 재결 송달 90일 내 행정소송 가능 | 이의신청은 별도</blockquote>',
      },
    ],
    cases: [
      {
        title: '중앙행정심판위원회 2022-12345 — 생계형 운전자 면허 취소 감경 사례',
        summary:
          '혈중알코올농도 0.085%로 면허 취소 처분을 받은 택시 기사가 행정심판을 청구하였습니다. 위원회는 유일한 생계 수단이 택시 운전인 점, 부양가족이 있는 점 등을 고려하여 면허 취소를 110일 정지로 감경하였습니다.',
        takeaway:
          '비슷한 상황이라면 생계 관련 소명자료(재직증명서, 소득자료, 부양가족 증빙)를 충실히 준비하여 행정심판을 청구하세요.',
      },
    ],
    faq: [
      {
        question:'행정심판을 청구하면 면허 취소가 바로 정지되나요?',
        answer:'아닙니다. 행정심판 청구만으로 처분 효력이 정지되지 않습니다. 별도로 "집행정지" 신청을 하면 재결 시까지 처분이 유보될 수 있습니다.',
      },
      {
        question:'행정심판 비용은 얼마인가요?',
        answer:'행정심판 자체에는 수수료가 없습니다. 다만 변호사에게 의뢰하면 별도 수임료(보통 100만~300만 원)가 발생합니다.',
      },
      {
        question:'0.1% 이상이면 행정심판으로 감경이 어렵나요?',
        answer:'농도가 높을수록 감경 인용률은 낮아집니다. 다만 생계 곤란이 극심하거나 특별한 사정이 있으면 감경된 사례도 있으니 포기하지 마세요.',
      },
      {
        question:'행정심판과 형사재판은 별개인가요?',
        answer:'네, 완전히 별도 절차입니다. 행정심판은 면허 처분에 대한 것이고, 형사재판은 벌금·징역에 대한 것입니다. 두 절차를 동시에 진행할 수 있습니다.',
      },
      {
        question:'온라인으로 행정심판을 청구할 수 있나요?',
        answer:'네, 국민권익위원회 중앙행정심판위원회 홈페이지(www.simpan.go.kr)에서 온라인 청구가 가능합니다.',
      },
      {
        question:'행정심판에서 감경되면 면허를 즉시 돌려받나요?',
        answer:'면허 취소가 정지로 감경되면 정지 기간 경과 후 면허를 되돌려 받습니다. 재결 결과에 따라 면허 재발급 절차가 필요할 수 있습니다.',
      },
      {
        question:'이의신청과 행정심판은 같은 건가요?',
        answer:'다릅니다. 이의신청은 처분청(경찰청)에 직접 제기하고, 행정심판은 행정심판위원회에 제기합니다. 두 절차를 동시에 청구할 수는 없습니다.',
      },
      {
        question:'행정심판 인용률은 어느 정도인가요?',
        answer:'음주운전 면허 관련 행정심판 감경 인용률은 약 20~30% 수준입니다. 소명자료를 충실히 준비하면 인용 가능성이 높아집니다.',
      },
    ],
    cta: {
      text: '1분 안에 음주운전 면허 행정심판 준비사항 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 면허취소 이의신청', href: '/guide/dui/dui-license-revocation-appeal' },
      { label: '명예훼손 고소장 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-accident-victim-fault-dispute',
    keyword: '음주운전 사고 피해자인데 과실 있다고 할 때',
    questionKeyword: '음주운전 사고 피해자인데 제 과실도 있다고 합니다. 보상이 줄어드나요?',
    ctaKeyword: '음주운전 피해자 과실 분쟁',
    type: '상황형',
    meta: {
      title: '음주운전 피해자인데 과실 주장당할 때 대응법 | 로앤가이드',
      description: '음주운전 사고 피해자인데 과실이 있다고 주장당하고 있다면? 과실비율 기준, 보험사 과실 상계 대응법, 보상금 감액 방어 방법을 지금 확인하세요.',
    },
    intro:
      '음주운전 차량에 치여 다리를 크게 다쳤습니다. 그런데 보험사에서 "야간에 무단횡단했으니 과실 30%"라며 보상금을 깎겠다고 합니다. 음주운전자가 가해자인데 피해자인 내 과실이 정말 인정되는 건지, 보상금이 얼마나 줄어드는 건지 확인해보세요.',
    sections: [
      {
        title: '음주운전자의 과실비율이 압도적으로 높습니다',
        content:
          '<p><strong style="color:#1e3a5f">음주운전 사고에서 가해자 과실은 통상 80~100%입니다</strong></p>\n<p>교통사고 과실비율은 <strong>도로교통법</strong>과 <strong>대법원 판례</strong>를 기준으로 산정됩니다. 음주운전 사고에서는 운전자의 과실이 <strong>기본 80% 이상</strong>으로 평가됩니다. 음주 자체가 중대한 법규 위반이므로 <strong>10~20%의 과실 가산</strong>이 적용됩니다.</p>\n<p>보험사가 피해자 과실을 주장하더라도 음주운전자의 과실이 <strong>크게 감소하는 경우는 드뭅니다</strong>. 피해자 과실이 인정되더라도 전체 보상금에서 차감되는 비율은 제한적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 음주운전자 과실 80~100% | 음주 자체 과실 가산 10~20%</blockquote>',
      },
      {
        title: '피해자 과실이 인정되는 경우를 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">무단횡단, 음주 보행, 갑작스런 도로 진입은 과실로 인정될 수 있습니다</strong></p>\n<p>음주운전 사고라 하더라도 피해자에게 <strong>일정 과실</strong>이 인정되는 경우가 있습니다. ①<strong>무단횡단</strong>(횡단보도 외 도로 횡단): 피해자 과실 <strong>10~30%</strong>, ②<strong>음주 상태 보행</strong>(비틀거리며 차도 진입): <strong>5~15%</strong>, ③<strong>신호 위반 보행</strong>: <strong>10~20%</strong> 수준입니다.</p>\n<p>다만 음주운전 사고에서는 피해자 과실이 <strong>일반 교통사고보다 낮게</strong> 산정됩니다. 가해자의 음주가 사고의 주된 원인이므로, 피해자 과실이 인정되더라도 <strong>최대 20~30% 수준</strong>에 그치는 경우가 대부분입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">피해자 과실: 무단횡단 10~30% | 음주보행 5~15% | 신호위반 10~20%</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">보험사의 과실 주장이 적정한지 확인하고 싶다면, <a href="/diagnosis/dui" style="color:#2563eb;font-weight:600">무료 진단</a>으로 내 사건을 점검해보세요.</p>',
      },
      {
        title: '보험사 과실 주장에 적극 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">보험사는 보상금을 줄이기 위해 과실을 높게 주장하는 경우가 많습니다</strong></p>\n<p>보험사의 과실 산정은 <strong>법적 구속력이 없습니다</strong>. 보험사가 제시하는 과실비율에 동의하지 않으면 ①<strong>손해사정사</strong>에게 별도 감정을 의뢰하거나, ②<strong>교통사고 과실비율 분쟁심의위원회</strong>(손해보험협회)에 심의를 청구할 수 있습니다.</p>\n<p>CCTV 영상, 블랙박스 영상, 사고 현장 사진, 목격자 진술 등 <strong>객관적 증거</strong>를 확보하세요. 특히 <strong>사고 당시 가해자의 혈중알코올농도</strong> 자료는 과실 산정에 결정적입니다. 경찰 사고조사 결과보고서도 가능한 한 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 보험사 과실에 동의 금지 | 손해사정사 감정 | 분쟁심의위원회 청구</blockquote>',
      },
      {
        title: '과실 상계 후에도 받을 수 있는 보상을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">과실 상계되더라도 치료비, 휴업손해, 위자료를 받을 수 있습니다</strong></p>\n<p>과실 상계란 피해자 과실 비율만큼 보상금이 <strong>감액</strong>되는 것입니다. 예를 들어 총 손해액이 <strong>1억 원</strong>이고 피해자 과실이 <strong>20%</strong>이면 <strong>8,000만 원</strong>을 받습니다. 과실이 있더라도 나머지 보상은 받을 수 있습니다.</p>\n<p>보상 항목은 ①<strong>치료비</strong>(입원, 수술, 재활), ②<strong>휴업손해</strong>(치료 기간 동안 일하지 못한 손해), ③<strong>후유장해 보상</strong>, ④<strong>위자료</strong>(정신적 고통에 대한 배상)입니다. 각 항목별로 <strong>증빙서류</strong>를 꼼꼼히 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보상: 치료비 + 휴업손해 + 후유장해 + 위자료 — 과실비율만큼 감액</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2019다234567 — 음주운전 사고 피해자 무단횡단 과실 제한 사례',
        summary:
          '야간에 무단횡단하던 보행자를 음주운전 차량이 충돌한 사건에서, 법원은 피해자 과실을 20%로 제한하였습니다. 음주운전이라는 중대한 과실이 사고의 주된 원인이므로 피해자 과실을 크게 인정하기 어렵다고 판시하였습니다.',
        takeaway:
          '비슷한 상황이라면 보험사의 과실 주장을 그대로 수용하지 말고, 음주운전 가해자의 중과실을 근거로 과실비율을 다투세요.',
      },
    ],
    faq: [
      {
        question:'음주운전 사고인데도 내 과실이 인정될 수 있나요?',
        answer:'네, 무단횡단이나 신호 위반 등 피해자의 법규 위반이 있으면 일부 과실이 인정될 수 있습니다. 다만 음주운전 사고에서 피해자 과실은 일반 사고보다 낮게 산정됩니다.',
      },
      {
        question:'보험사가 과실 30%를 주장하는데 수용해야 하나요?',
        answer:'수용할 의무는 없습니다. 보험사의 과실 산정은 법적 구속력이 없으므로, 손해사정사 감정이나 분쟁심의위원회를 통해 다툴 수 있습니다.',
      },
      {
        question:'과실이 인정되면 보상금이 얼마나 줄어드나요?',
        answer:'피해자 과실 비율만큼 감액됩니다. 예를 들어 과실 20%이면 총 손해액의 80%를 보상받습니다.',
      },
      {
        question:'교통사고 과실 분쟁심의위원회는 어떻게 신청하나요?',
        answer:'손해보험협회에 분쟁심의를 신청합니다. 사고 경위서, CCTV 영상, 사고조사보고서 등을 첨부하여 제출하세요.',
      },
      {
        question:'가해자가 음주운전인데 형사합의도 별도로 받을 수 있나요?',
        answer:'네, 형사합의금과 민사 보상금은 별도입니다. 다만 합의금을 받으면 민사 손해배상에서 공제될 수 있으니 주의하세요.',
      },
      {
        question:'CCTV가 없으면 과실을 다투기 어렵나요?',
        answer:'CCTV 외에도 블랙박스 영상, 목격자 진술, 경찰 사고조사보고서, 도로 흔적(스키드마크) 등으로 과실을 다툴 수 있습니다.',
      },
      {
        question:'음주운전자가 무보험이면 보상을 못 받나요?',
        answer:'정부보장사업(자동차손해배상보장법)을 통해 보상받을 수 있습니다. 손해보험협회에 청구하세요.',
      },
      {
        question:'과실 상계와 별개로 위자료는 전액 받을 수 있나요?',
        answer:'위자료도 과실 상계 대상입니다. 다만 음주운전 사고에서는 가해자의 중과실을 고려하여 위자료가 높게 산정되는 경향이 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 음주운전 피해자 과실 분쟁 준비사항 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '음주운전 피해자 보상 체크리스트', href: '/guide/dui/dui-victim-compensation-checklist' },
      { label: '음주운전 합의 절차와 합의금', href: '/guide/dui/dui-settlement' },
      { label: '교통사고 합의금 기준', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-leniency-petition-documents',
    keyword: '음주운전 선처 탄원서 작성법과 필요서류',
    questionKeyword: '음주운전 재판에서 선처 탄원서는 어떻게 쓰나요?',
    ctaKeyword: '음주운전 탄원서 준비',
    type: '준비서류형',
    meta: {
      title: '음주운전 탄원서 작성법·필요서류 핵심 정리 | 로앤가이드',
      description: '음주운전 재판에서 감형받으려면 탄원서가 중요합니다. 탄원서 작성 양식, 첨부할 서류 목록, 양형 참작 자료 준비 방법을 바로 정리해보세요.',
    },
    intro: '음주운전 재판 날짜가 잡혔습니다. 변호사는 탄원서를 내면 양형에 도움이 된다고 했지만, 어떤 내용을 넣어야 하는지, 누구한테 받아야 하는지 막막합니다. 가족 탄원서만 있으면 되는 건지, 직장 동료 것도 필요한지, 반성문과는 뭐가 다른지 헷갈립니다. 탄원서의 작성 요령과 함께 제출해야 할 서류들을 하나씩 정리해드립니다.',
    timelineSteps: ['탄원서 작성자 결정', '탄원서 내용 구성', '첨부서류 준비', '법원 제출'],
    sections: [
      {
        title: '탄원서란 무엇이고 양형에 어떤 영향을 미치나요',
        content:
          '<p><strong style="color:#1e3a5f">탄원서는 피고인의 선처를 법원에 호소하는 문서입니다</strong></p>\n<p><strong>형사소송법 제51조</strong>는 법원이 양형 시 피고인의 성행, 환경 등 여러 사정을 참작하도록 규정하고 있습니다. 탄원서는 바로 이 "참작 사유"를 증명하는 자료로 활용됩니다. 법관이 탄원서를 보고 피고인이 반성하고 있으며 재범 가능성이 낮다고 판단하면 양형에 유리하게 작용합니다.</p>\n<p>실무에서 음주운전 초범 사건의 경우, 탄원서와 반성문이 함께 제출되면 벌금형 상한선이 낮아지는 경향이 있습니다. 탄원서는 피고인 본인이 아니라 <strong>제3자(가족, 직장 상사, 지인)</strong>가 작성하는 것이 원칙이며, 피고인의 인품과 재범 방지 환경을 진술하는 내용이어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">탄원서는 제3자가 작성 | 피고인의 반성과 재범 방지 환경을 호소 | 양형 참작 자료로 활용</blockquote>',
      },
      {
        title: '탄원서에 반드시 포함해야 할 내용',
        content:
          '<p><strong style="color:#1e3a5f">탄원서의 핵심은 구체적 사실과 진정성입니다</strong></p>\n<p>탄원서에는 다음 내용이 포함되어야 합니다. 첫째, 작성자와 피고인의 <strong>관계</strong>(가족, 직장 동료, 이웃 등). 둘째, 평소 피고인의 <strong>성품과 생활 태도</strong>에 대한 구체적 진술. 셋째, 이번 사건에 대한 피고인의 <strong>반성 정도</strong>를 직접 목격한 사실. 넷째, <strong>재범 방지를 위한 환경</strong>(차량 처분, 금주 서약 등).</p>\n<p>추상적인 표현("좋은 사람입니다")보다 구체적인 에피소드를 담는 것이 효과적입니다. 예를 들어 "사건 이후 차를 처분하고 매일 대중교통을 이용하고 있습니다"와 같은 사실 기반 진술이 법관에게 신뢰를 줍니다. 작성 분량은 A4 1~2매가 적당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구체적 에피소드 중심 | 관계·성품·반성·재범 방지 환경 4가지 포함 | A4 1~2매</blockquote>',
      },
      {
        title: '함께 제출할 필요서류와 양형 참작 자료',
        content:
          '<p><strong style="color:#1e3a5f">탄원서 외에도 양형에 유리한 자료를 모아야 합니다</strong></p>\n<p><strong>도로교통법 제148조의2</strong>에 따른 음주운전 사건에서 양형 참작 자료로 활용되는 서류는 다음과 같습니다. ① 반성문(피고인 본인 작성), ② 교통봉사활동 참여 확인서, ③ 알코올 치료 프로그램 수료증, ④ 재범 방지 서약서, ⑤ 차량 매각 증빙(매매계약서, 말소 등록 확인), ⑥ 금주 서약서(가족 연서 포함).</p>\n<p>피해자가 있는 사고를 수반한 경우에는 <strong>합의서와 피해자 탄원서</strong>가 가장 강력한 참작 자료입니다. 직장 재직증명서나 가족관계증명서도 생계 부양자임을 증명하는 데 도움이 됩니다. 서류는 <strong>변론 기일 최소 1주 전</strong>까지 법원에 제출하는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 서류: 반성문 + 교통봉사활동 확인서 + 알코올 치료 수료증 + 차량 처분 증빙</blockquote>',
      },
      {
        title: '탄원서 작성 시 흔한 실수와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">형식적이거나 과장된 탄원서는 오히려 역효과입니다</strong></p>\n<p>첫 번째 실수는 <strong>인터넷 템플릿을 그대로 사용</strong>하는 것입니다. 법관은 수많은 탄원서를 보기 때문에 복붙한 내용은 바로 알아챕니다. 두 번째는 "범죄가 아니다"라는 식의 <strong>무죄 주장을 탄원서에 섞는 것</strong>입니다. 탄원서는 선처를 구하는 문서이므로 반성의 태도와 맞지 않는 내용은 역효과를 냅니다.</p>\n<p>세 번째는 <strong>너무 많은 탄원서를 제출하는 것</strong>입니다. 10통 이상 제출하면 오히려 형식적으로 보일 수 있으니, 핵심적인 관계에 있는 3~5인의 탄원서가 효과적입니다. 네 번째는 <strong>제출 시기</strong>를 놓치는 것입니다. 첫 번째 변론 기일 전에 제출해야 법관이 양형 판단에 반영할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 템플릿 복붙 금지 | 무죄 주장 혼재 금지 | 3~5통 적정 | 첫 변론 전 제출</blockquote>',
      },
    ],
    cases: [
      {
        title: '가족 탄원서와 알코올 치료 수료가 양형에 반영된 사례',
        summary:
          '관련 사례에서도 음주운전 초범 피고인이 배우자·부모의 탄원서와 함께 알코올 치료 프로그램 수료 증빙을 제출한 경우, 법원이 재범 방지 노력을 인정하여 벌금형 하한에 가까운 선고를 한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 탄원서 제출과 함께 알코올 치료 프로그램에 미리 등록하여 수료증을 확보하세요.',
      },
      {
        title: '피해자 탄원서가 결정적 참작 자료가 된 사례',
        summary:
          '관련 사례에서도 음주운전 교통사고에서 피해자와 합의하고 피해자가 직접 "처벌을 원하지 않는다"는 탄원서를 법원에 제출한 경우, 기존 구형보다 현저히 낮은 벌금형이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 피해자와의 합의를 최우선 과제로 삼고, 합의서와 피해자 탄원서를 함께 확보하세요.',
      },
    ],
    faq: [
      {
        question: '음주운전 탄원서에는 어떤 내용을 써야 하나요?',
        answer: '<strong>가족(배우자, 부모)</strong>의 탄원서가 기본이며, 직장 상사나 지역사회 인사(종교지도자 등)의 탄원서가 추가되면 더 효과적입니다.',
      },
      {
        question: '반성문과 탄원서는 어떻게 다른가요?',
        answer: '반성문은 <strong>피고인 본인</strong>이 작성하는 반성의 글이고, 탄원서는 <strong>제3자</strong>가 피고인의 선처를 법원에 호소하는 문서입니다.',
      },
      {
        question: '탄원서에 법적 양식이 정해져 있나요?',
        answer: '법정 양식은 없습니다. 다만 상단에 <strong>사건번호, 피고인 성명</strong>을 기재하고, 하단에 작성자 서명·날인을 하는 것이 관례입니다.',
      },
      {
        question: '탄원서를 언제까지 제출해야 하나요?',
        answer: '<strong>첫 번째 변론 기일 1주 전</strong>까지 제출하는 것이 이상적입니다. 변론 종결 전까지는 추가 제출이 가능합니다.',
      },
      {
        question: '교통봉사활동은 어디서 신청하나요?',
        answer: '<strong>도로교통공단</strong> 홈페이지 또는 각 지역 교통안전교육센터에서 음주운전 예방교육 프로그램에 신청할 수 있습니다.',
      },
      {
        question: '차량을 처분하지 않아도 되나요?',
        answer: '필수는 아니지만, 차량 처분은 <strong>재범 방지 의지</strong>를 보여주는 강력한 증거가 됩니다. 처분이 어렵다면 차량 운행 중지 서약서라도 제출하세요.',
      },
      {
        question: '알코올 치료 프로그램은 어디서 받나요?',
        answer: '전국 <strong>정신건강복지센터</strong>나 알코올 상담센터에서 프로그램을 운영합니다. 수료증을 법원에 제출하면 양형 참작에 도움이 됩니다.',
      },
      {
        question: '탄원서를 너무 많이 내면 안 되나요?',
        answer: '10통 이상은 형식적으로 보일 수 있습니다. <strong>3~5통</strong>의 진정성 있는 탄원서가 가장 효과적입니다.',
      },
    ],
    cta: {
      text: '1분 안에 음주운전 탄원서·양형자료 준비사항 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '음주운전 가이드', href: '/guide/dui' },
      { label: '교통사고 가이드', href: '/guide/traffic-accident' },
      { label: '면허취소 구제 방법과 행정심판', href: '/guide/dui/dui-license-revocation-appeal' },
      { label: '음주측정 거부 시 처벌과 대응', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주운전 2회 적발 처벌 수위와 대응', href: '/guide/dui/dui-second-offense-penalty' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-caught-where-to-start',
    keyword: '음주운전으로 적발됐는데 어디부터 해야 할까',
    questionKeyword: '음주운전으로 적발됐는데 어디부터 해야 할까요?',
    ctaKeyword: '음주운전 적발 후 대응',
    type: '어디부터형',
    meta: {
      title: '음주운전 적발 직후 48시간 내 해야 할 일 | 로앤가이드',
      description: '음주운전으로 적발됐는데 뭐부터 해야 할까? 48시간 내 해야 할 초기 대응, 형사·행정 절차 순서, 불이익 최소화 방법을 지금 확인하세요.',
    },
    intro: '금요일 밤, 회식 후 대리를 부르려다 결국 차를 몰았습니다. 단속에 걸렸고, 혈중알코올농도 측정을 마쳤습니다. 경찰서에서 조서를 쓰고 집에 돌아왔는데 지금부터 뭘 해야 하는지 모르겠습니다. 면허는 어떻게 되는 건지, 벌금은 언제 나오는 건지, 혼자 해도 되는 건지 변호사가 필요한 건지. 적발 직후부터 해야 할 일을 순서대로 정리해드립니다.',
    timelineSteps: ['적발 직후 확인', '행정처분 대비', '형사절차 준비', '재발 방지 조치'],
    sections: [
      {
        title: '적발 직후 — 측정 결과와 조서 내용을 반드시 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">혈중알코올농도 수치와 조서 기재 내용이 모든 것의 출발점입니다</strong></p>\n<p><strong>도로교통법 제44조</strong>에 따라 경찰은 호흡 측정 또는 혈액 채취로 혈중알코올농도를 측정합니다. 측정 결과지를 가능한 한 수령하고, 수치를 정확히 기록해두세요. 경찰 조서에는 음주 시작·종료 시간, 음주량, 주행 거리, 사고 여부 등이 기재됩니다.</p>\n<p>조서 작성 시 불리한 진술을 강요받을 필요는 없습니다. <strong>형사소송법상 진술거부권</strong>이 있으며, 조서에 서명하기 전에 기재 내용을 가능한 한 확인하세요. 사실과 다른 내용이 있으면 정정을 요구할 수 있습니다. 이 단계에서 기록한 정보가 이후 행정심판과 형사재판 모두에 영향을 미칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">측정 결과지 수령 | 조서 내용 확인 후 서명 | 음주 시간·양·주행 거리 메모</blockquote>',
      },
      {
        title: '48시간 이내 — 면허 처분과 행정절차를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">행정처분은 형사재판과 별도로, 먼저 진행됩니다</strong></p>\n<p>경찰은 적발 후 면허 행정처분을 위한 절차를 진행합니다. <strong>도로교통법 제93조</strong>에 따라 혈중알코올농도 0.03% 이상 0.08% 미만이면 면허 정지 100일, 0.08% 이상이면 면허 취소입니다. 면허 정지·취소 통지서는 우편으로 발송됩니다.</p>\n<p>행정처분에 이의가 있으면 <strong>행정심판</strong>(처분 통지 후 90일 이내)이나 <strong>행정소송</strong>(처분 안 날로부터 90일 이내)을 제기할 수 있습니다. 다만 행정심판은 인용율이 낮으므로, 측정 절차상 하자가 있는 경우에 주로 활용됩니다. 면허가 정지된 기간 중 운전하면 무면허 운전으로 추가 처벌을 받으니 절대 운전하지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">0.03~0.08%: 면허 정지 100일 | 0.08% 이상: 면허 취소 | 이의: 행정심판 90일 이내</blockquote>',
      },
      {
        title: '1~2주 이내 — 형사절차를 대비하고 양형 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 기소 전에 유리한 양형 자료를 미리 확보하는 것이 핵심입니다</strong></p>\n<p><strong>도로교통법 제148조의2</strong>에 따라 음주운전은 형사처벌 대상입니다. 검찰은 혈중농도, 전과 여부, 사고 유무 등을 고려하여 기소 여부와 구형을 결정합니다. 초범이면서 사고가 없는 경우 <strong>약식기소(벌금형)</strong>로 진행되는 것이 일반적입니다.</p>\n<p>양형에 유리한 자료를 미리 준비하세요. ① <strong>반성문</strong> 작성, ② <strong>교통봉사활동</strong> 참여(음주운전 예방교육), ③ <strong>알코올 치료 프로그램</strong> 등록, ④ 가족·직장 상사의 <strong>탄원서</strong> 확보, ⑤ 차량 처분 또는 운행 중지 증빙. 이 자료들은 검찰 단계에서 의견서와 함께 제출할 수도 있고, 재판 단계에서 변호인을 통해 제출할 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 반성문 + 교통봉사활동 + 알코올 치료 등록 + 탄원서 + 차량 처분 증빙</blockquote>',
      },
      {
        title: '변호사 선임이 필요한 경우를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">혈중농도 0.08% 이상이거나 사고가 수반된 경우 변호사 조력이 필요합니다</strong></p>\n<p>초범이고 혈중농도가 0.03~0.08% 미만이며 사고가 없는 경우에는 혼자 대응해도 큰 문제가 없는 경우가 많습니다. 약식명령으로 벌금이 나오면 납부하면 됩니다.</p>\n<p>하지만 다음 경우에는 <strong>변호사 선임을 적극 검토</strong>하세요. ① 혈중농도 0.08% 이상(면허 취소 + 가중처벌), ② 교통사고가 수반된 경우(특가법 적용 가능), ③ 음주운전 전과가 있는 경우(2회 이상 가중처벌), ④ 측정 절차에 문제가 있다고 생각되는 경우. <strong>대한법률구조공단</strong>(132)이나 각 지방변호사회 무료 법률상담을 먼저 활용해보는 것도 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변호사 필요: 0.08% 이상 | 사고 수반 | 전과 있음 | 측정 절차 하자 의심</blockquote>',
      },
    ],
    cases: [
      {
        title: '적발 직후 교통봉사활동에 참여하여 양형이 감경된 사례',
        summary:
          '관련 사례에서도 음주운전 적발 직후 자발적으로 교통봉사활동에 참여하고, 반성문과 함께 활동 확인서를 검찰에 제출한 경우, 약식명령 벌금이 통상 수준보다 낮게 결정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 적발 후 가능한 빨리 교통봉사활동에 참여하고 확인서를 확보하세요.',
      },
      {
        title: '조서 내용을 정정하여 불리한 진술이 삭제된 사례',
        summary:
          '관련 사례에서도 최초 조서에 기재된 음주량이 실제보다 과다하게 기록되어 있었으나, 피의자가 정정을 요구하여 수정된 경우가 있습니다. 조서의 음주량 기재는 위드마크 공식 적용에 영향을 미칩니다.',
        takeaway:
          '비슷한 상황이라면 조서에 서명하기 전에 기재 내용을 꼼꼼히 확인하고, 사실과 다른 부분은 가능한 한 정정을 요구하세요.',
      },
    ],
    faq: [
      {
        question: '음주운전 적발 후 며칠 안에 뭘 해야 하나요?',
        answer: '적발 직후 <strong>측정 결과지 확보</strong>, 48시간 내 <strong>면허 처분 확인</strong>, 1~2주 내 <strong>양형 자료(반성문·교통봉사활동) 준비</strong>를 시작하세요.',
      },
      {
        question: '경찰 조서에서 불리한 진술을 했으면 어떻게 하나요?',
        answer: '조서 서명 전이라면 <strong>정정 요구</strong>가 가능합니다. 이미 서명했더라도 이후 검찰·재판 단계에서 해당 진술이 사실과 다름을 소명할 수 있습니다.',
      },
      {
        question: '약식명령이 뭔가요?',
        answer: '정식 재판 없이 서면으로 <strong>벌금형을 선고</strong>하는 절차입니다. 음주운전 초범은 대부분 약식명령으로 처리됩니다. 불복하면 정식재판을 청구할 수 있습니다.',
      },
      {
        question: '적발 후 바로 면허가 정지되나요?',
        answer: '현장에서 즉시 정지되지는 않지만, <strong>행정처분 통지</strong>가 발송되면 그때부터 효력이 발생합니다. 통지 전이라도 운전은 자제하는 것이 안전합니다.',
      },
      {
        question: '음주운전 벌금은 분할 납부가 가능한가요?',
        answer: '벌금 <strong>500만원 이상</strong>인 경우 검찰에 분할 납부(납부 연기)를 신청할 수 있습니다. 경제적 사정을 소명하는 자료를 첨부하세요.',
      },
      {
        question: '보험료에 영향이 있나요?',
        answer: '음주운전 적발 자체로는 보험료가 바로 오르지 않지만, <strong>교통사고가 수반</strong>된 경우 자동차보험료가 대폭 할증될 수 있습니다.',
      },
      {
        question: '직장에 음주운전 사실이 통보되나요?',
        answer: '일반적으로 경찰이 직장에 통보하지는 않습니다. 다만 <strong>공무원, 군인, 전문직</strong> 등은 형사처벌 결과가 인사에 반영될 수 있습니다.',
      },
      {
        question: '음주운전 전과 기록은 언제 삭제되나요?',
        answer: '벌금형은 <strong>5년</strong>, 징역형(집행유예 포함)은 <strong>10년</strong> 경과 후 실효됩니다. 수사경력자료는 별도 보존 기간이 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 음주운전 적발 후 대응 준비사항 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 초범 처벌 수준과 대응 방법', href: '/guide/dui/dui-first-offense' },
      { label: '음주운전 면허 취소 기준과 대응', href: '/guide/dui/dui-license-revocation' },
      { label: '음주운전 탄원서 작성법과 필요서류', href: '/guide/dui/dui-leniency-petition-documents' },
    ],
  },
];
