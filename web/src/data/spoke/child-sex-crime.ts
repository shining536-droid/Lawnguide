import { SpokePage } from '../spoke-pages';

export const childSexCrimePages: SpokePage[] = [
  {
    domain: 'child-sex-crime',
    slug: 'mandatory-reporting-procedure',
    keyword: '아동성범죄 피해 발견 시 신고 의무와 절차',
    questionKeyword: '아동성범죄를 발견하면 신고 의무가 있나요? 절차는 어떻게 되나요?',
    ctaKeyword: '아동성범죄 신고 의무·절차',
    type: '절차타임라인형',
    meta: {
      title: '아동성범죄 신고 의무 — 즉시 대응 4단계 절차 | 로앤가이드',
      description: '아동성범죄를 발견하면 112 즉시 신고 → 해바라기센터 연계 → 진술조력인 지원 → 피해아동 보호조치 4단계로 대응하세요. 미신고 시 300만원 과태료가 부과됩니다. 지금 확인하세요.',
    },
    intro:
      '담당 아이의 행동이 갑자기 달라졌습니다. 위축되고 특정 어른을 두려워합니다. 성범죄 피해가 의심되지만 어떻게 해야 할지 모르겠습니다. 아동·청소년 대상 성범죄는 발견 즉시 신고해야 하며, 신고의무를 지키지 않으면 과태료가 부과됩니다.',
    timelineSteps: ['신고 의무 확인·즉시 신고', '해바라기센터 연계', '수사·진술조력인 지원', '피해아동 보호·가해자 처벌'],
    sections: [
      {
        title: '신고의무자인지 확인하고 즉시 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동청소년성보호법에 따라 직무상 아동성범죄를 알게 된 사람은 반드시 신고해야 합니다</strong></p>\n<p><strong>아동·청소년의 성보호에 관한 법률</strong>(아동청소년성보호법) 제34조에 따라 <strong>신고의무자</strong>에 해당하는 사람은 아동·청소년 대상 성범죄를 알게 된 경우 즉시 신고해야 합니다. 신고의무자에는 <strong>교사, 의사, 사회복지사, 유치원·어린이집 종사자, 학원 강사, 체육시설 종사자</strong> 등이 포함됩니다.</p>\n<p>신고는 <strong>112(경찰)</strong> 또는 <strong>117(학대 신고)</strong>로 할 수 있습니다. 신고의무자가 신고하지 않으면 <strong>300만원 이하 과태료</strong>가 부과됩니다. 신고자의 신분은 법적으로 보호됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 112 또는 117 | 신고의무자: 교사, 의사, 사회복지사 등 | 미신고 시 300만원 과태료</blockquote>',
      },
      {
        title: '해바라기센터에서 원스톱 지원을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">해바라기센터는 성폭력 피해 아동에게 의료·상담·수사 지원을 한 곳에서 제공합니다</strong></p>\n<p><strong>해바라기센터</strong>는 전국에 설치된 성폭력 피해자 통합지원기관입니다. 특히 <strong>아동형 해바라기센터</strong>는 19세 미만 피해자를 대상으로 ①<strong>의료 지원</strong>(응급 치료, 진단서 발급), ②<strong>심리 상담</strong>, ③<strong>법률 지원</strong>(국선변호사 연계), ④<strong>수사 지원</strong>(영상 녹화 진술 등)을 제공합니다.</p>\n<p>해바라기센터 전화번호는 <strong>1899-3075</strong>이며, 24시간 운영됩니다. 피해 아동이 여러 기관을 돌아다니지 않고 <strong>한 곳에서 모든 지원</strong>을 받을 수 있어 2차 피해를 최소화합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">해바라기센터(1899-3075): 의료·상담·법률·수사 원스톱 지원 | 24시간 운영</blockquote>',
      },
      {
        title: '수사 과정에서 진술조력인 제도를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">진술조력인이 아동의 수사·재판 과정 진술을 전문적으로 도와줍니다</strong></p>\n<p><strong>성폭력처벌법 제36조</strong>에 따라 13세 미만 아동이나 장애인 피해자는 수사·재판 과정에서 <strong>진술조력인</strong>의 도움을 받을 수 있습니다. 진술조력인은 아동심리 전문가로서 ①아동이 <strong>편안하게 진술</strong>할 수 있도록 돕고, ②진술 내용을 <strong>정확하게 전달</strong>하는 역할을 합니다.</p>\n<p>진술조력인은 <strong>검찰 또는 법원에 신청</strong>하면 배정됩니다. 피해 아동의 진술은 <strong>영상 녹화</strong>되어 법정에서 증거로 사용할 수 있으므로, 아동이 반복적으로 진술해야 하는 부담을 줄여줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술조력인: 13세 미만 아동 지원 | 검찰·법원 신청 | 영상 녹화로 반복 진술 방지</blockquote>',
      },
      {
        title: '피해아동 보호조치와 가해자 처벌을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">아동 대상 성범죄는 가중처벌되며, 피해아동은 다양한 보호를 받습니다</strong></p>\n<p>13세 미만 아동에 대한 <strong>강간</strong>은 무기징역 또는 10년 이상 징역, <strong>강제추행</strong>은 5년 이상 유기징역에 처해집니다. 가해자에게는 <strong>신상정보 등록·공개, 전자발찌 부착, 취업 제한</strong> 등 보안처분이 부과됩니다.</p>\n<p>피해아동은 ①<strong>국선변호사</strong>(무료), ②<strong>심리치료 지원</strong>, ③<strong>전학·거주지 변경 지원</strong>, ④<strong>비밀 전학</strong>(가해자에게 새 학교 비공개) 등 보호조치를 받을 수 있습니다. 피해자 법정대리인(보호자)이 수사기관에 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 13세 미만 강간 무기/10년 이상 | 보호: 국선변호사, 심리치료, 비밀 전학</blockquote>',
      },
    ],
    cases: [
      {
        title: '교사의 즉시 신고로 피해 아동이 신속히 보호된 사례',
        summary:
          '관련 사례에서도 담임교사가 학생의 이상 행동을 감지하고 즉시 112에 신고하여, 해바라기센터에서 의료·심리 지원을 받으며 가해자가 조기에 검거된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 아동의 이상 행동이 감지되면 즉시 112에 신고하고, 해바라기센터(1899-3075)를 연계하세요.',
      },
      {
        title: '진술조력인 활용으로 아동 진술이 증거로 채택된 사례',
        summary:
          '관련 사례에서도 7세 피해아동이 진술조력인의 도움을 받아 영상 녹화 진술을 하였고, 해당 진술이 법정에서 증거로 채택되어 가해자가 중형을 선고받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 검찰에 진술조력인 배정을 요청하여 아동이 안전하게 진술할 수 있도록 하세요.',
      },
    ],
    faq: [
      {
        question: '신고의무자가 아닌 일반인도 신고할 수 있나요?',
        answer:
          '네, <strong>누구든지</strong> 아동 대상 성범죄를 알게 되면 신고할 수 있습니다. 다만 신고의무자는 미신고 시 과태료가 부과됩니다.',
      },
      {
        question: '확실한 증거 없이 의심만으로도 신고해도 되나요?',
        answer:
          '네, <strong>합리적 의심</strong>만으로도 신고할 수 있습니다. 사실 확인은 수사기관이 합니다. 선의의 신고자는 법적 보호를 받습니다.',
      },
      {
        question: '해바라기센터는 전국에 있나요?',
        answer:
          '네, <strong>전국 약 40곳</strong>에 설치되어 있습니다. 1899-3075로 전화하면 가까운 센터를 안내받을 수 있습니다.',
      },
      {
        question: '진술조력인은 누가 될 수 있나요?',
        answer:
          '<strong>아동심리학, 사회복지학</strong> 등 전문 자격을 갖추고 법무부 교육을 이수한 사람이 진술조력인으로 활동합니다.',
      },
      {
        question: '가해자가 가족(친족)인 경우에도 신고해야 하나요?',
        answer:
          '네, 친족에 의한 성범죄는 <strong>가중처벌</strong>되며, 신고의무자는 반드시 신고해야 합니다.',
      },
      {
        question: '피해 아동의 신원은 보호되나요?',
        answer:
          '네, 아동 피해자의 <strong>신원, 사진, 영상 등은 공개가 금지</strong>됩니다. 위반 시 처벌됩니다.',
      },
      {
        question: '가해자의 취업 제한은 어떻게 되나요?',
        answer:
          '아동 대상 성범죄 유죄 확정 시 <strong>아동·청소년 관련 기관에 최대 10년간 취업 제한</strong>이 부과됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 해바라기센터(1899-3075), 여성긴급전화(1366), 아동보호전문기관(112)을 활용해보세요.',
      },
    ],
    cta: {
      text: '아동성범죄 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/child-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '아동성범죄 진단', href: '/diagnosis/child-sex-crime' },
      { label: '불법촬영 증거 확보와 신고', href: '/guide/digital-sex-crime/hidden-camera-evidence-report' },
      { label: '스토킹 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
    ],
  },
];
