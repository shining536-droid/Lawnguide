import { SpokePage } from '../spoke-pages';

export const schoolViolencePages: SpokePage[] = [
  {
    domain: 'school-violence',
    slug: 'school-violence-committee-procedure',
    keyword: '학교폭력 피해 신고 후 자치위원회 절차',
    questionKeyword: '학교폭력 피해를 신고하면 자치위원회 절차가 어떻게 되나요?',
    ctaKeyword: '학교폭력 자치위원회 절차',
    type: '절차타임라인형',
    meta: {
      title: '학교폭력 신고 후 심의위원회 4단계 절차 | 로앤가이드',
      description:
        '아이가 학교폭력을 당해 신고했는데 이후 절차가 궁금하신가요? 심의위원회 심의, 가해학생 1~9호 조치, 피해학생 보호조치까지 지금 확인하세요.',
    },
    intro:
      '아이가 학교에서 맞고 왔습니다. 며칠째 학교에 가기 싫다고 합니다. 담임 선생님께 말씀드렸더니 학교폭력 신고를 하라고 합니다. 신고하면 어떤 절차가 진행되는지, 우리 아이는 어떤 보호를 받을 수 있는지 정리했습니다.',
    timelineSteps: ['학교폭력 신고', '사실 확인·조사', '심의위원회 심의', '가해학생 조치·피해학생 보호'],
    sections: [
      {
        title: '학교폭력 신고는 학교 또는 117로 하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법에 따라 누구나 학교폭력을 신고할 수 있습니다</strong></p>\n<p><strong>학교폭력예방 및 대책에 관한 법률</strong>에 따라 학교폭력 사실을 알게 된 사람은 누구나 신고할 수 있습니다. 신고 방법은 ①<strong>학교(담임교사, 학교폭력 담당교사)</strong>에 직접 신고, ②<strong>117 학교폭력 신고센터</strong>(전화·문자·앱), ③<strong>교육청</strong>에 신고할 수 있습니다.</p>\n<p>교사는 학교폭력 사실을 인지한 경우 <strong>신고 의무</strong>가 있습니다. 신고를 받은 학교는 즉시 피해학생 보호조치를 시작해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 학교(담임·담당교사), 117 신고센터, 교육청 | 교사는 신고 의무</blockquote>',
      },
      {
        title: '학교가 사실 확인과 조사를 진행합니다',
        content:
          '<p><strong style="color:#1e3a5f">신고 접수 후 학교는 즉시 사실 확인에 착수합니다</strong></p>\n<p>학교는 신고를 접수하면 ①<strong>피해학생·가해학생 면담</strong>, ②<strong>목격학생 조사</strong>, ③<strong>관련 증거 수집</strong>(CCTV, 메신저 대화 등)을 진행합니다. 전담기구(학교폭력 전담교사)가 사실 확인을 담당합니다.</p>\n<p>조사 과정에서 피해학생과 가해학생은 <strong>분리</strong>되어야 합니다. 피해학생이 원하면 즉시 <strong>긴급보호조치</strong>(학급 교체, 출석 인정 등)를 받을 수 있습니다. 조사 결과는 <strong>학교폭력대책심의위원회</strong>에 보고됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사: 면담·증거 수집 → 피해·가해학생 분리 → 심의위원회 보고</blockquote>',
      },
      {
        title: '심의위원회에서 조치를 결정합니다',
        content:
          '<p><strong style="color:#1e3a5f">교육지원청 심의위원회가 가해학생 조치와 피해학생 보호를 결정합니다</strong></p>\n<p>2020년 3월부터 심의 기구가 학교 자치위원회에서 <strong>교육지원청 학교폭력대책심의위원회</strong>로 변경되었습니다. 심의위원회는 ①사안의 <strong>경중</strong>, ②가해학생의 <strong>반성 정도</strong>, ③<strong>화해 여부</strong> 등을 종합적으로 고려하여 조치를 결정합니다.</p>\n<p>피해학생과 보호자는 심의위원회에 <strong>출석하여 의견을 진술</strong>할 수 있습니다. 사전에 피해 경위서, 증거 자료, 진단서 등을 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">심의: 교육지원청 심의위원회 | 피해자 의견 진술 가능 | 증거·진단서 준비</blockquote>',
      },
      {
        title: '가해학생 조치와 피해학생 보호조치를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">가해학생에게는 1~9호 조치가, 피해학생에게는 보호조치가 내려집니다</strong></p>\n<p>가해학생 조치는 ①서면사과, ②접촉·보복행위 금지, ③교내봉사, ④사회봉사, ⑤특별교육·심리치료, ⑥출석정지, ⑦학급교체, ⑧전학, ⑨퇴학(고등학생만)까지 <strong>9가지 단계</strong>가 있습니다. 중복 부과도 가능합니다.</p>\n<p>피해학생 보호조치는 ①심리상담·조언, ②일시보호, ③치료·치료를 위한 요양, ④학급교체, ⑤전학 권고 등이 있으며, <strong>치료비는 가해학생 보호자가 부담</strong>합니다. 조치 결과에 불복하면 <strong>행정심판</strong>을 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">가해조치: 1호(서면사과)~9호(퇴학) | 피해보호: 심리상담·치료·전학 | 불복 시 행정심판</blockquote>',
      },
    ],
    cases: [
      {
        title: '체계적 증거 제출로 가해학생 전학 조치가 내려진 사례',
        summary:
          '관련 사례에서도 피해학생 보호자가 폭행 동영상, 병원 진단서, 메신저 대화 기록을 심의위원회에 제출하여 가해학생에게 8호(전학) 조치가 내려진 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 피해 증거(동영상, 진단서, 대화 기록)를 체계적으로 수집하고 심의위원회에 제출하세요.',
      },
      {
        title: '행정심판으로 가해학생 조치가 강화된 사례',
        summary:
          '관련 사례에서도 심의위원회가 가해학생에게 3호(교내봉사)만 부과하였으나, 피해학생 측이 행정심판을 청구하여 6호(출석정지)로 조치가 강화된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 심의위원회 결과에 불복할 경우 조치 통보 후 15일 이내에 행정심판을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '학교폭력의 범위는 어디까지인가요?',
        answer:
          '<strong>신체 폭력, 언어 폭력, 따돌림, 사이버 폭력, 금품 갈취, 강요, 성폭력</strong> 등이 모두 포함됩니다.',
      },
      {
        question: '학교 밖에서 발생한 폭력도 학교폭력인가요?',
        answer:
          '네, 학생 간에 발생한 것이면 <strong>장소와 무관하게</strong> 학교폭력에 해당합니다.',
      },
      {
        question: '가해학생 조치는 학생부에 기록되나요?',
        answer:
          '1~3호는 졸업과 동시에 삭제되고, 4~9호는 <strong>졸업 후 2년 뒤 심의</strong>를 거쳐 삭제 여부가 결정됩니다.',
      },
      {
        question: '피해학생 치료비는 누가 부담하나요?',
        answer:
          '<strong>가해학생의 보호자</strong>가 부담합니다. 학교안전공제회를 통해 선지급 후 구상도 가능합니다.',
      },
      {
        question: '심의위원회 결과에 불복하려면 어떻게 하나요?',
        answer:
          '조치 통보를 받은 날로부터 <strong>15일 이내에 행정심판</strong>을 청구할 수 있습니다.',
      },
      {
        question: '경찰에도 따로 신고해야 하나요?',
        answer:
          '폭행·상해 등 <strong>형사 사건에 해당하면 경찰 신고도 별도로</strong> 가능합니다. 학교폭력 절차와 병행할 수 있습니다.',
      },
      {
        question: '사이버 폭력(카톡 단톡방 따돌림 등)도 신고 대상인가요?',
        answer:
          '네, <strong>사이버 따돌림, 악성 메시지, 허위 사실 유포</strong> 등도 학교폭력에 해당합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 117 학교폭력 신고센터, 교육청 학교폭력 상담센터를 활용해보세요.',
      },
    ],
    cta: {
      text: '우리 아이의 학교폭력 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'school-violence-accused-parent-response',
    keyword: '학폭위에서 가해자로 지목됐을 때 부모 대응법',
    ctaKeyword: '학교폭력 가해자 대응',
    type: '상황형',
    meta: {
      title: '학폭위 가해자 지목 시 부모가 할 3가지 대응 | 로앤가이드',
      description: '아이가 학폭위에서 가해자로 지목되어 당황하셨나요? 사실관계 정리, 조치 종류, 불복·합의 방법까지 부모 대응법을 바로 정리해보세요.',
    },
    intro: '학교에서 전화가 왔습니다. 자녀가 학교폭력 가해자로 지목되어 학폭위(학교폭력대책심의위원회)가 소집될 예정이라고 합니다. 자녀가 가해자로 지목되었다면 부모가 무엇을 해야 하는지 차근차근 정리해보세요.',
    sections: [
      {
        title: '학폭위 절차를 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">소집 → 조사 → 심의 → 결정 순서로 진행됩니다</strong></p>\n<p>학교폭력이 신고되면 학교는 <strong>전담기구</strong>가 사실 확인 조사를 진행하고, 그 결과를 교육지원청 <strong>학교폭력대책심의위원회(학폭위)</strong>에 보고합니다. 학폭위는 사안의 경중, 반성 정도, 화해 여부 등을 종합하여 조치를 결정합니다.</p>\n<p>심의위원회에 <strong>보호자도 출석하여 의견을 진술</strong>할 수 있습니다. 심의 일정을 확인하고 충분히 준비하세요. 통상 신고 접수 후 <strong>2~4주 내</strong>에 심의가 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 신고 → 전담기구 조사 → 학폭위 심의 → 조치 결정 | 보호자 출석 가능</blockquote>',
      },
      {
        title: '사실관계를 정확히 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">자녀의 진술을 먼저 차분하게 확인하세요</strong></p>\n<p>자녀에게 <strong>비난하지 말고 차분하게</strong> 무슨 일이 있었는지 물어보세요. ①사건 경위(누가, 언제, 어디서, 무엇을), ②목격자 존재 여부, ③관련 증거(메신저 대화, 사진, 동영상)를 확인합니다.</p>\n<p>자녀의 진술을 <strong>시간순으로 정리</strong>하여 서면으로 작성해두세요. 피해학생의 주장과 다른 부분이 있다면 이를 뒷받침할 <strong>객관적 증거</strong>(CCTV, 친구 진술 등)를 확보하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정리: 자녀 진술 시간순 기록 + 객관적 증거 확보 + 피해 주장과 차이점 확인</blockquote>',
      },
      {
        title: '가해학생 조치 종류(1~9호)와 불복 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">1호(서면사과)부터 9호(퇴학)까지 9단계 조치가 있습니다</strong></p>\n<p>가해학생 조치는 ①서면사과, ②접촉·보복행위 금지, ③교내봉사, ④사회봉사, ⑤특별교육·심리치료, ⑥출석정지, ⑦학급교체, ⑧전학, ⑨퇴학(고등학생만)입니다. <strong>중복 부과</strong>도 가능합니다.</p>\n<p>조치 결과에 불복하면 통보받은 날로부터 <strong>15일 이내에 행정심판</strong>을 청구할 수 있습니다. 4호 이상 조치는 <strong>학생부에 기재</strong>되며, 졸업 후 2년 뒤 심의를 거쳐 삭제 여부가 결정됩니다. 조치의 경중이 자녀의 학교생활 기록에 영향을 미치므로 신중하게 대응하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조치: 1호(서면사과)~9호(퇴학) | 불복 → 15일 내 행정심판 | 4호 이상 학생부 기재</blockquote>',
      },
      {
        title: '피해학생 측 합의와 반성문을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">진심 어린 사과와 합의는 조치 경감에 중요한 요소입니다</strong></p>\n<p>학폭위 심의에서 <strong>화해 여부</strong>는 조치 수준을 결정하는 중요한 요소입니다. 피해학생 보호자에게 연락하여 <strong>진심 어린 사과</strong>와 함께 치료비 등 피해 보상을 제안하세요.</p>\n<p>자녀가 직접 작성한 <strong>반성문</strong>을 학폭위에 제출하면 반성 정도를 보여주는 자료가 됩니다. 합의서를 작성할 때는 ①<strong>사과 내용</strong>, ②<strong>피해 보상(치료비 등)</strong>, ③<strong>재발 방지 약속</strong>을 포함하세요. 합의가 이루어지면 학폭위에 합의서를 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 피해학생 측 사과 + 치료비 보상 + 반성문 + 합의서 제출</blockquote>',
      },
    ],
    cases: [
      {
        title: '합의와 반성문 제출로 조치가 경감된 사례',
        summary:
          '관련 사례에서도 가해학생 보호자가 피해학생 측과 합의하고, 자녀의 반성문과 상담 이력을 학폭위에 제출하여 당초 예상보다 낮은 조치(3호 교내봉사)가 내려진 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 심의 전에 피해학생 측과 합의하고 반성 자료를 준비하세요.',
      },
      {
        title: '행정심판으로 가해학생 조치가 변경된 사례',
        summary:
          '관련 사례에서도 학폭위가 8호(전학) 조치를 내렸으나, 가해학생 측이 행정심판을 청구하여 사안의 경중에 비해 과중하다는 판단으로 조치가 변경된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 조치가 과중하다고 판단되면 15일 이내에 행정심판을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '학폭위에 변호사를 대동할 수 있나요?',
        answer: '보호자가 출석하여 의견을 진술할 때 <strong>변호사 등 대리인을 동반</strong>할 수 있습니다.',
      },
      {
        question: '가해학생 조치는 학생부에 영구 기록되나요?',
        answer: '1~3호는 졸업 시 삭제되고, 4~9호는 <strong>졸업 후 2년 뒤 심의</strong>를 거쳐 삭제 여부가 결정됩니다.',
      },
      {
        question: '피해학생이 합의를 거부하면 어떻게 되나요?',
        answer: '합의가 안 되어도 학폭위 심의는 진행됩니다. <strong>반성문과 상담 이력</strong> 등 다른 정상참작 자료를 준비하세요.',
      },
      {
        question: '자녀가 억울하게 가해자로 지목된 경우는?',
        answer: '<strong>객관적 증거</strong>(CCTV, 목격자 진술)를 확보하여 학폭위에서 사실관계를 다투세요.',
      },
      {
        question: '학폭위 결과에 불복하려면 어떻게 하나요?',
        answer: '조치 통보를 받은 날로부터 <strong>15일 이내에 행정심판</strong>을 청구할 수 있습니다.',
      },
      {
        question: '경찰 수사와 학폭위 절차는 별개인가요?',
        answer: '네, <strong>형사 절차와 학폭위 절차는 별도</strong>로 진행됩니다. 폭행·상해가 수반되면 경찰 수사도 병행될 수 있습니다.',
      },
      {
        question: '치료비는 누가 부담하나요?',
        answer: '<strong>가해학생의 보호자</strong>가 부담합니다. 학교안전공제회를 통해 선지급 후 구상도 가능합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132), 117 학교폭력 신고센터, 교육청 학교폭력 상담센터를 활용해보세요.',
      },
    ],
    cta: {
      text: '학교폭력 가해자 대응에 맞는 방법을 확인해보세요',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
      { label: '학교폭력 피해 신고 후 자치위원회 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'school-violence-measures-appeal',
    keyword: '학폭위 가해자 조치 종류와 불복 방법',
    questionKeyword: '학폭위에서 받은 조치에 불복할 수 있나요?',
    ctaKeyword: '학폭위 조치 불복',
    type: '비교형',
    meta: {
      title: '학폭위 가해자 조치 1~9호 비교와 불복 방법 | 로앤가이드',
      description:
        '학폭위 조치를 받았는데 불복할 수 있을까요? 1~9호 조치 종류 비교, 학생부 기재 기준, 행정심판·행정소송 절차를 지금 확인하세요.',
    },
    intro:
      '자녀가 학교폭력 가해자로 혐의를 받고 있다면, 학폭위(학교폭력대책심의위원회)에서 어떤 조치가 내려질 수 있는지 미리 파악해야 합니다. 조치 결과에 따라 학생부 기재, 진학, 학교생활 전반에 영향이 있습니다. 조치의 종류와 불복 절차를 비교하여 정리했습니다.',
    timelineSteps: ['학폭위 심의', '조치 결정·통보', '재심 청구(15일)', '행정심판·행정소송'],
    comparison: {
      title: '학폭위 가해학생 조치(1~9호) 비교표',
      headers: ['조치 호수', '조치 내용', '학생부 기재', '삭제 시기'],
      rows: [
        {
          label: '1호',
          values: ['서면사과', '기재', '졸업과 동시에 삭제'],
        },
        {
          label: '2호',
          values: ['접촉·협박·보복행위 금지', '기재', '졸업과 동시에 삭제'],
        },
        {
          label: '3호',
          values: ['교내봉사', '기재', '졸업과 동시에 삭제'],
        },
        {
          label: '4호',
          values: ['사회봉사', '기재', '졸업 후 2년 뒤 심의 후 삭제'],
        },
        {
          label: '5호',
          values: ['특별교육 이수·심리치료', '기재', '졸업 후 2년 뒤 심의 후 삭제'],
        },
        {
          label: '6호',
          values: ['출석정지', '기재', '졸업 후 2년 뒤 심의 후 삭제'],
        },
        {
          label: '7호',
          values: ['학급교체', '기재', '졸업 후 2년 뒤 심의 후 삭제'],
        },
        {
          label: '8호',
          values: ['전학', '기재', '졸업 후 2년 뒤 심의 후 삭제'],
        },
        {
          label: '9호',
          values: ['퇴학(고등학생만)', '기재', '졸업 후 2년 뒤 심의 후 삭제'],
        },
      ],
    },
    sections: [
      {
        title: '가해학생 조치 1~9호의 내용을 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">조치는 경중에 따라 1호(서면사과)부터 9호(퇴학)까지 9단계입니다</strong></p>\n<p><strong>학교폭력예방 및 대책에 관한 법률 제17조</strong>에 따라 가해학생에게 내려지는 조치는 9가지입니다. <strong>1호</strong>(서면사과), <strong>2호</strong>(접촉·보복행위 금지), <strong>3호</strong>(교내봉사), <strong>4호</strong>(사회봉사), <strong>5호</strong>(특별교육·심리치료), <strong>6호</strong>(출석정지), <strong>7호</strong>(학급교체), <strong>8호</strong>(전학), <strong>9호</strong>(퇴학, 고등학생만 해당)입니다.</p>\n<p>심의위원회는 사안의 경중, 가해학생의 반성 정도, 화해 여부 등을 종합적으로 고려하여 조치를 결정합니다. <strong>중복 부과</strong>도 가능하므로 예를 들어 2호+5호+6호가 동시에 부과될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조치: 1호(서면사과)~9호(퇴학) | 중복 부과 가능 | 사안 경중·반성·화해 종합 고려</blockquote>',
      },
      {
        title: '학생부 기재와 삭제 시기를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">조치 호수에 따라 학생부 삭제 시기가 다릅니다</strong></p>\n<p>모든 가해학생 조치는 <strong>학교생활기록부(학생부)</strong>에 기재됩니다. 다만 삭제 시기에 차이가 있습니다. <strong>1~3호</strong> 조치는 <strong>졸업과 동시에 삭제</strong>됩니다. <strong>4~9호</strong> 조치는 <strong>졸업 후 2년</strong>이 지난 뒤 학교폭력대책심의위원회의 심의를 거쳐 삭제 여부가 결정됩니다.</p>\n<p>학생부 기재는 <strong>대학 입시</strong>에 직접적인 영향을 미칩니다. 특히 수시 학생부종합전형에서 불이익이 크므로, 조치의 경중이 자녀의 진학에 미치는 영향을 신중하게 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">학생부: 1~3호 졸업 시 삭제, 4~9호 졸업 후 2년 뒤 심의 삭제 | 대입 영향 있음</blockquote>',
      },
      {
        title: '조치에 불복하는 방법 — 재심, 행정심판, 행정소송',
        content:
          '<p><strong style="color:#1e3a5f">조치 통보 후 15일 이내에 재심을 청구할 수 있습니다</strong></p>\n<p>학폭위 조치 결과에 불복하려면 <strong>조치 통보를 받은 날로부터 15일 이내</strong>에 <strong>시·도 학생징계조정위원회</strong>에 재심을 청구할 수 있습니다. 재심에서도 불복할 경우 <strong>행정심판</strong>을 청구하거나 <strong>행정소송</strong>을 제기할 수 있습니다.</p>\n<p>행정심판은 <strong>시·도 행정심판위원회</strong>에 청구하며, 처분이 있음을 안 날로부터 <strong>90일 이내</strong>, 처분이 있은 날로부터 <strong>180일 이내</strong>에 해야 합니다. 행정소송은 <strong>관할 행정법원</strong>에 제기합니다. 실제로 행정심판이나 행정소송을 통해 조치가 변경되거나 취소된 사례도 있으므로, 조치가 과중하다고 판단되면 적극적으로 불복 절차를 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복: 15일 내 재심 → 행정심판(90일/180일) → 행정소송 | 조치 변경·취소 가능</blockquote>',
      },
      {
        title: '학폭위 심의에서 유리한 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">반성 자료와 합의서는 조치 경감에 중요한 역할을 합니다</strong></p>\n<p>혐의를 받고 있다면 학폭위 심의 전에 다음을 준비하세요. ①자녀가 직접 작성한 <strong>반성문</strong>, ②전문 상담기관의 <strong>상담 이력·소견서</strong>, ③피해학생 측과의 <strong>합의서</strong>(치료비 보상 포함), ④<strong>사실관계를 정리한 서면</strong>(자녀의 진술, 목격자 진술, CCTV 등 객관적 증거).</p>\n<p>심의위원회는 <strong>화해 여부, 반성 정도, 피해 회복 노력</strong>을 조치 결정에 크게 반영합니다. 합의가 이루어지지 않더라도 반성문과 상담 이력은 정상참작 자료가 됩니다. 보호자도 심의위원회에 <strong>출석하여 의견을 진술</strong>할 수 있으며, 필요시 <strong>변호사</strong>를 대동할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 반성문 + 상담소견서 + 합의서 + 사실관계 서면 | 보호자 출석·변호사 대동 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '행정심판으로 8호(전학) 조치가 취소된 사례',
        summary:
          '관련 사례에서도 학폭위가 가해학생에게 8호(전학) 조치를 내렸으나, 가해학생 측이 행정심판을 청구하여 "사안의 경중에 비해 조치가 과중하고, 반성 및 화해 노력을 충분히 고려하지 않았다"는 이유로 조치가 5호(특별교육)로 변경된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 조치가 사안에 비해 과중하다고 판단되면 15일 이내에 재심을 청구하고, 재심에서도 불복할 경우 행정심판을 적극 검토하세요.',
      },
      {
        title: '반성문과 합의서 제출로 조치가 경감된 사례',
        summary:
          '관련 사례에서도 가해학생 보호자가 피해학생 측과 합의하고, 자녀의 반성문과 전문 상담기관 소견서를 학폭위에 제출하여 당초 예상보다 낮은 조치(3호 교내봉사)가 내려진 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 심의 전에 피해학생 측과 합의하고 반성 자료를 철저히 준비하세요.',
      },
    ],
    faq: [
      {
        question: '학폭위 조치에 불복하면 어디에 재심을 청구하나요?',
        answer:
          '<strong>시·도 학생징계조정위원회</strong>에 조치 통보를 받은 날로부터 15일 이내에 재심을 청구합니다.',
      },
      {
        question: '재심에서도 결과가 바뀌지 않으면 어떻게 하나요?',
        answer:
          '<strong>행정심판</strong>(시·도 행정심판위원회)이나 <strong>행정소송</strong>(행정법원)을 통해 다시 다툴 수 있습니다.',
      },
      {
        question: '학생부 기재는 영구적인가요?',
        answer:
          '1~3호는 <strong>졸업과 동시에 삭제</strong>되고, 4~9호는 졸업 후 2년 뒤 심의를 거쳐 삭제됩니다.',
      },
      {
        question: '가해학생 조치가 대학 입시에 영향을 미치나요?',
        answer:
          '학생부에 기재된 조치는 <strong>수시 학생부종합전형</strong> 등에서 불이익이 될 수 있습니다.',
      },
      {
        question: '학폭위에 변호사를 대동할 수 있나요?',
        answer:
          '보호자가 출석할 때 <strong>변호사 등 대리인을 동반</strong>할 수 있습니다.',
      },
      {
        question: '합의를 했는데도 무거운 조치가 나올 수 있나요?',
        answer:
          '합의는 정상참작 요소이지 필수 감경 사유는 아닙니다. <strong>사안의 경중</strong>에 따라 무거운 조치가 나올 수 있습니다.',
      },
      {
        question: '경찰 수사와 학폭위 절차는 별개인가요?',
        answer:
          '네, <strong>형사 절차와 학폭위 절차는 별도</strong>로 진행됩니다. 폭행·상해가 수반되면 경찰 수사도 병행될 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 117 학교폭력 신고센터, 교육청 학교폭력 상담센터를 활용해보세요.',
      },
    ],
    cta: {
      text: '학폭위 조치에 대한 대응 방법을 확인해보세요',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
      { label: '학교폭력 피해 신고 후 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '학폭위 가해자 지목 시 부모 대응법', href: '/guide/school-violence/school-violence-accused-parent-response' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'perpetrator-sanction-defense',
    keyword: '학교폭력 가해자 조치 대응',
    questionKeyword: '학교폭력 가해학생으로 조치를 받게 되었는데 어떻게 대응하나요?',
    ctaKeyword: '학교폭력 가해자 조치 대응 확인',
    type: '어디부터형',
    meta: {
      title: '학교폭력 가해자 조치 감경받는 대응법 | 로앤가이드',
      description: '학교폭력 가해학생으로 지목되어 입시가 걱정되시나요? 학폭위 대응, 조치 감경 전략, 행정심판·소송 절차를 바로 정리해보세요.',
    },
    intro: '학교에서 전화가 왔습니다. 아이가 학교폭력 가해학생으로 지목되었고, 학교폭력대책심의위원회(학폭위)가 열린다고 합니다. "우리 아이가?"라는 생각에 머리가 하얘집니다. 어떤 조치를 받게 되는지, 학생부에 기재되는지, 대학 입시에 영향이 있는지 걱정이 밀려옵니다. 가해학생으로 지목되었을 때 부모가 해야 할 대응을 정리했습니다.',
    sections: [
      {
        title: '사실관계 파악 — 아이의 이야기를 먼저 들으세요',
        content:
          '<p><strong style="color:#1e3a5f">학폭위에 출석하기 전에 사건의 전후 맥락을 정확히 파악해야 합니다</strong></p>\n<p>아이에게 <strong>비난이 아닌 대화</strong>로 접근하세요. "왜 그랬어"가 아니라 "무슨 일이 있었는지 이야기해줄래?"라고 물어야 사실관계가 드러납니다. 가해 사실이 맞는지, 쌍방 다툼이었는지, 오해에 의한 지목인지에 따라 대응 방향이 완전히 달라집니다.</p>\n<p>아이의 진술을 바탕으로 <strong>관련 증거(카카오톡 대화, 목격자, CCTV 유무)</strong>를 확인하세요. 학교폭력예방법 제17조에 따라 학폭위는 피해학생·가해학생 양측의 진술을 듣고 조치를 결정합니다. 가해학생 측의 충분한 소명이 이루어지지 않으면 일방적으로 무거운 조치가 내려질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크리스트: ①사건 경위 파악 ②관련 대화 기록 확보 ③목격자 확인 ④쌍방 과실 여부 점검</blockquote>',
      },
      {
        title: '학폭위 출석 준비 — 서면 의견서와 증거 자료 제출',
        content:
          '<p><strong style="color:#1e3a5f">학폭위 출석 전에 서면 의견서를 작성하고 증거 자료를 준비하세요</strong></p>\n<p>학폭위에서는 보호자가 출석하여 <strong>의견을 진술</strong>할 수 있습니다. 이때 구두 진술만으로는 부족합니다. <strong>서면 의견서</strong>에 사건 경위, 가해학생의 반성 정도, 피해학생과의 관계 개선 노력 등을 구체적으로 기재하세요.</p>\n<p>변호사를 <strong>대리인으로 동반</strong>할 수 있습니다. 학교폭력 사건에 경험이 있는 변호사라면 학폭위 진행 절차와 조치 기준을 숙지하고 있어 효과적인 소명이 가능합니다. 피해학생 측에 <strong>진심 어린 사과</strong>를 했다면 사과문, 합의서 등도 증거로 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 서류: 서면 의견서, 반성문, 사과문(사본), 합의서(있는 경우), 상담 기록, 목격자 진술서</blockquote>',
      },
      {
        title: '조치의 종류와 감경 — 학교폭력예방법 제17조',
        content:
          '<p><strong style="color:#1e3a5f">가해학생에 대한 조치는 1호(서면사과)부터 9호(퇴학)까지 9단계입니다</strong></p>\n<p>학교폭력예방법 제17조에 따라 학폭위는 다음 조치를 내릴 수 있습니다: <strong>1호 서면사과, 2호 접촉·협박·보복행위 금지, 3호 교내봉사, 4호 사회봉사, 5호 학내외 전문가 특별교육·심리치료, 6호 출석정지, 7호 학급교체, 8호 전학, 9호 퇴학(고등학생만)</strong>. 중복 부과도 가능합니다.</p>\n<p>조치 결정 시 고려되는 요소는 <strong>①사안의 경중, ②가해학생의 반성 정도, ③피해학생과의 화해 여부, ④가해학생의 선도 가능성</strong>입니다. 초범이고 사안이 경미하며 반성과 합의가 이루어진 경우 1~3호의 가벼운 조치를 받을 가능성이 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 포인트: 반성문 + 피해학생 사과 및 합의 + 상담 프로그램 수강 + 재발 방지 계획서 제출</blockquote>',
      },
      {
        title: '불복 절차 — 행정심판과 행정소송',
        content:
          '<p><strong style="color:#1e3a5f">조치 결과에 불복하면 행정심판 또는 행정소송으로 다툴 수 있습니다</strong></p>\n<p>학폭위 조치에 이의가 있으면 <strong>조치 통보를 받은 날로부터 15일 이내에 시·도 학생징계조정위원회에 재심</strong>을 청구할 수 있습니다. 재심 결과에도 불복하면 <strong>행정심판(90일 이내) 또는 행정소송(90일 이내)</strong>을 제기할 수 있습니다.</p>\n<p>행정소송에서는 <strong>학폭위 절차의 적법성(양측 진술 기회 보장 여부, 증거 조사 충실성)</strong>과 <strong>조치의 비례성(사안 대비 과도한 조치인지)</strong>이 쟁점이 됩니다. 법원이 조치가 과도하다고 판단하면 조치를 취소하거나 변경할 수 있습니다. 특히 전학(8호)이나 퇴학(9호) 같은 중한 조치는 법원에서 비례성 심사가 엄격하게 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 절차: 조치 통보 → 15일 내 재심 청구 → 재심 결과 불복 시 90일 내 행정심판 또는 행정소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '학폭위 전학 조치 취소 — 비례의 원칙 위반',
        summary: '언어폭력으로 8호(전학) 조치를 받은 학생의 보호자가 행정소송을 제기한 사안입니다. 법원은 초범이고 폭행이 수반되지 않은 언어폭력에 대해 전학 조치는 비례의 원칙에 반한다며 조치를 취소했습니다.',
        takeaway: '사안 대비 과도한 조치를 받았다면 재심 청구와 행정소송을 적극적으로 검토하세요.',
      },
      {
        title: '학폭위 절차 하자로 조치 취소 사례',
        summary: '가해학생 측에 충분한 소명 기회를 부여하지 않은 채 조치를 결정한 학폭위의 절차적 하자가 인정되어 법원이 조치를 취소한 사례입니다.',
        takeaway: '학폭위에서 진술 기회가 제한되었다면 절차 위반을 근거로 불복할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '학폭위 조치가 학생부에 기재되나요?',
        answer: '1~3호는 <strong>졸업과 동시에 삭제</strong>되고, 4~9호는 졸업 후 2년 뒤 심의를 거쳐 삭제됩니다.',
      },
      {
        question: '대학 입시에 영향이 있나요?',
        answer: '학생부에 기재된 조치는 <strong>수시 학생부종합전형</strong> 등에서 불이익이 될 수 있습니다. 삭제 시기가 중요합니다.',
      },
      {
        question: '학폭위에 변호사를 데려갈 수 있나요?',
        answer: '네, 보호자 출석 시 <strong>변호사 등 대리인을 동반</strong>할 수 있습니다. 학교폭력 전문 변호사를 추천합니다.',
      },
      {
        question: '피해학생과 합의하면 조치가 가벼워지나요?',
        answer: '합의는 <strong>정상참작 요소</strong>이지 필수 감경 사유는 아닙니다. 다만 실무적으로 합의는 경감에 크게 도움이 됩니다.',
      },
      {
        question: '쌍방 폭력인데 우리 아이만 가해자로 지목됐어요.',
        answer: '쌍방 과실이 있다면 <strong>증거(대화 기록, 목격자 진술)</strong>를 확보하여 학폭위에서 소명하세요. 피해학생도 조치를 받을 수 있습니다.',
      },
      {
        question: '재심 청구 기한은 언제까지인가요?',
        answer: '조치 통보를 받은 날로부터 <strong>15일 이내</strong>에 시·도 학생징계조정위원회에 재심을 청구해야 합니다.',
      },
      {
        question: '조치를 받으면 경찰 수사도 받나요?',
        answer: '학폭위 절차와 형사 절차는 <strong>별개</strong>입니다. 폭행·상해가 수반되면 경찰 수사가 병행될 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132), 117 학교폭력 신고센터, 교육청 학교폭력 상담센터를 이용하세요.',
      },
    ],
    cta: {
      text: '학교폭력 가해자 조치에 대한 대응 방법을 확인해보세요',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 피해 신고 후 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '학폭위 가해자 지목 시 부모 대응법', href: '/guide/school-violence/school-violence-accused-parent-response' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'school-violence-false-report-response',
    keyword: '학교폭력 허위 신고 대응법',
    questionKeyword: '아이가 학교폭력으로 허위 신고당했는데 어떻게 대응하나요?',
    ctaKeyword: '학교폭력 허위 신고 대응',
    type: '상황형',
    meta: {
      title: '학교폭력 허위 신고 당했을 때 5가지 대응법 | 로앤가이드',
      description:
        '아이가 학교폭력으로 억울하게 신고되었나요? 학폭위 방어 전략, 증거 확보, 재심·행정소송, 허위 신고자 법적 조치까지 지금 확인하세요.',
    },
    intro:
      '학교에서 전화가 왔습니다. 아이가 다른 학생을 폭행했다는 신고가 접수됐다는 것입니다. 그런데 아이는 "그 시간에 교실에 없었다"고 합니다. 사실과 다르게 신고되었다면, 학폭위 절차에서 억울한 조치를 받지 않도록 체계적으로 대응해야 합니다. 허위 신고에 맞서는 방어 전략과 법적 조치를 정리했습니다.',
    sections: [
      {
        title: '사실과 다른 신고, 증거부터 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 신고에 대응하려면 "그 일이 없었다"는 증거를 먼저 모아야 합니다</strong></p>\n<p>학교폭력 신고가 접수되면 학교 전담기구가 사실 확인 조사를 시작합니다. 이때 가장 중요한 것은 <strong>아이의 알리바이</strong>를 입증할 수 있는 증거입니다. <strong>CCTV 열람 요청</strong>은 학교에 서면으로 즉시 해야 하며, 보존 기간이 지나면 삭제되므로 하루라도 빨리 요청하세요.</p>\n<p><strong>목격 학생의 진술서</strong>, <strong>담임교사 확인서</strong>, 해당 시간 학원·병원 방문 기록 등 아이가 현장에 없었음을 보여주는 자료를 최대한 수집하세요. 메신저 대화 기록이나 사진의 타임스탬프도 유력한 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: CCTV 열람 요청(서면) · 목격자 진술서 · 교사 확인서 · 학원/병원 방문 기록 · 메신저 타임스탬프</blockquote>',
      },
      {
        title: '학폭위 심의에서 효과적으로 방어하세요',
        content:
          '<p><strong style="color:#1e3a5f">심의위원회 출석 전에 반박 자료를 체계적으로 정리하는 것이 핵심입니다</strong></p>\n<p><strong>교육지원청 학교폭력대책심의위원회</strong>에서는 양측 의견을 듣고 조치를 결정합니다. 보호자는 출석하여 <strong>의견 진술권</strong>을 행사할 수 있으며, 이때 수집한 증거를 시간순으로 정리한 <strong>반박 경위서</strong>를 제출하세요. 구두 진술만으로는 부족합니다.</p>\n<p>심의위원에게 전달할 자료는 ①<strong>사건 경위 요약서</strong>(A4 1~2장), ②<strong>증거 목록과 원본</strong>, ③<strong>아이의 평소 학교생활 기록</strong>(교사 소견, 상담 기록)으로 구성하세요. 변호사 동행도 가능하므로 사안이 심각하면 법률 전문가의 조력을 받는 것이 좋습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">아이가 사실과 다르게 학교폭력으로 신고되었다면, 지금 상황에 맞는 대응 방법을 <a href="/diagnosis/school-violence" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">심의 준비: 반박 경위서 · 증거 목록 · 학교생활 기록 | 변호사 동행 가능</blockquote>',
      },
      {
        title: '조치에 불복하려면 재심과 행정소송을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">부당한 조치를 받았다면 15일 이내에 재심을 청구할 수 있습니다</strong></p>\n<p>심의위원회의 조치 결과에 불복하는 경우 <strong>조치 통보를 받은 날로부터 15일 이내</strong>에 시·도 <strong>학생징계조정위원회</strong>에 재심을 청구해야 합니다. 재심에서도 기각되면 <strong>행정소송</strong>을 제기할 수 있으며, 소송 기한은 재심 결과 통보일로부터 <strong>90일 이내</strong>입니다.</p>\n<p>재심 청구 시에는 기존 심의에서 제출한 증거에 더해 <strong>새로운 증거</strong>(추가 목격자 진술, 전문가 소견 등)를 보강하는 것이 효과적입니다. 행정소송 단계에서는 반드시 변호사의 조력을 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복: 재심 15일 이내(학생징계조정위원회) → 행정소송 90일 이내 | 새 증거 보강 필수</blockquote>',
      },
      {
        title: '허위 신고자에 대한 법적 조치도 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">고의로 허위 사실을 신고한 경우 형사·민사 책임을 물을 수 있습니다</strong></p>\n<p>상대 학생(또는 보호자)이 <strong>고의로 거짓 사실을 신고</strong>한 것이 밝혀지면 <strong>무고죄</strong>(형법 제156조, 10년 이하 징역 또는 1,500만 원 이하 벌금)로 형사 고소가 가능합니다. 다만 미성년자가 신고한 경우에는 보호자의 교사(교唆) 여부가 쟁점이 됩니다.</p>\n<p>형사 절차와 별도로 허위 신고로 인한 정신적 피해에 대해 <strong>손해배상 청구</strong>(민법 제750조)도 할 수 있습니다. 아이가 받은 심리적 고통, 학습권 침해, 치료비 등을 청구 근거로 삼을 수 있으므로 관련 <strong>진단서</strong>와 <strong>상담 기록</strong>을 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법적 조치: 무고죄(형법 제156조) 형사 고소 + 손해배상 청구(민법 제750조) | 진단서·상담 기록 보관</blockquote>',
      },
    ],
    cases: [
      {
        title: 'CCTV 증거로 허위 신고가 밝혀져 조치가 철회된 사례',
        summary:
          '가해자로 지목된 학생의 보호자가 사건 당일 CCTV 영상을 확보하여 아이가 해당 시간에 다른 장소에 있었음을 증명했습니다. 심의위원회는 증거를 검토한 뒤 해당 학생에 대한 조치를 내리지 않았습니다.',
        takeaway:
          '비슷한 상황이라면 CCTV 영상은 학교에 서면으로 열람·보존을 요청하고, 시간·장소를 명확히 입증할 수 있는 자료를 신속히 확보하세요.',
      },
      {
        title: '재심 청구로 부당한 전학 조치가 취소된 사례',
        summary:
          '심의위원회에서 8호(전학) 조치를 받은 학생의 보호자가 추가 목격자 진술과 교사 소견서를 확보하여 재심을 청구했고, 학생징계조정위원회는 신고 내용의 신빙성이 부족하다고 판단하여 조치를 취소했습니다.',
        takeaway:
          '재심 단계에서는 기존 증거에 더해 새로운 증거를 보강하는 것이 중요합니다. 15일 기한을 놓치지 마세요.',
      },
    ],
    faq: [
      {
        question: '학교폭력 허위 신고를 당하면 가장 먼저 뭘 해야 하나요?',
        answer: '<strong>CCTV 열람 요청</strong>을 학교에 서면으로 즉시 하세요. 영상 보존 기간이 지나면 삭제되므로 하루라도 빨리 요청하는 것이 중요합니다.',
      },
      {
        question: '학폭위에서 아이가 직접 진술해야 하나요?',
        answer: '아이가 직접 진술할 수 있지만, <strong>보호자가 대신 의견을 진술</strong>할 수도 있습니다. 아이의 심리 상태를 고려하여 결정하세요.',
      },
      {
        question: '학폭위에 변호사를 대리인으로 데려갈 수 있나요?',
        answer: '네, <strong>변호사 동행이 가능</strong>합니다. 사안이 심각하거나 상대측이 변호사를 선임한 경우 법률 전문가의 조력을 받는 것이 좋습니다.',
      },
      {
        question: '허위 신고한 학생을 무고죄로 고소할 수 있나요?',
        answer: '고의로 거짓 사실을 신고한 것이 입증되면 <strong>무고죄(형법 제156조)</strong>로 고소할 수 있습니다. 다만 미성년자의 경우 형사미성년자(14세 미만) 여부를 확인해야 합니다.',
      },
      {
        question: '재심 청구 기한을 놓치면 어떻게 되나요?',
        answer: '조치 통보 후 <strong>15일 이내</strong>에 재심을 청구하지 않으면 재심 기회를 잃습니다. 다만 <strong>행정소송</strong>은 조치 확정일로부터 90일 이내에 별도로 제기할 수 있습니다.',
      },
      {
        question: '학폭위 조치가 학생부에 기록되나요?',
        answer: '1~3호 조치는 졸업과 동시에 삭제되고, 4호 이상은 <strong>졸업 후 2~4년간 보존</strong>됩니다. 조치가 철회되면 기록도 삭제됩니다.',
      },
      {
        question: '허위 신고로 아이가 심리 치료를 받으면 비용 청구가 가능한가요?',
        answer: '네, 허위 신고로 인한 정신적 피해에 대해 <strong>손해배상 청구(민법 제750조)</strong>가 가능합니다. 치료비 영수증과 진단서를 보관하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132), 117 학교폭력 신고센터, 교육청 학교폭력 상담센터에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 학교폭력 허위 신고 대응 준비사항 확인하기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학폭위 가해자 지목 시 부모 대응법', href: '/guide/school-violence/school-violence-accused-parent-response' },
      { label: '학교폭력 조치 불복 방법', href: '/guide/school-violence/school-violence-measures-appeal' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'child-beaten-at-school-response',
    keyword: '우리 아이가 학교에서 맞고 왔을 때 대처법',
    questionKeyword: '아이가 학교에서 맞고 왔는데 어떻게 대처해야 하나요?',
    ctaKeyword: '학교폭력 피해 대처',
    type: '상황형',
    meta: {
      title: '아이가 학교에서 맞고 왔을 때 즉시 할 3가지 | 로앤가이드',
      description:
        '아이가 학교에서 맞고 왔는데 어떻게 해야 할지 모르시겠나요? 부모가 즉시 해야 할 조치와 학폭위 신청 절차를 바로 정리해보세요.',
    },
    intro:
      '학교에서 돌아온 아이의 얼굴에 멍이 들어 있습니다. 물어봐도 아이는 말을 하지 않다가, 한참 만에 같은 반 아이에게 맞았다고 합니다. 분노와 걱정이 동시에 밀려오지만, 감정적으로 대응하면 오히려 상황이 나빠질 수 있습니다. 학교폭력예방법 제16조에 따른 피해학생 보호조치와 학교폭력 심의위원회(학폭위) 신청까지, 부모가 단계별로 해야 할 조치를 안내합니다.',
    timelineSteps: ['아이 안정·증거 확보', '학교 신고·피해 접수', '학폭위 심의 신청', '보호조치·후속 대응'],
    sections: [
      {
        title: '먼저 아이를 안정시키고 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">아이의 심리적 안정이 최우선이고, 동시에 증거 확보의 골든타임을 놓치면 안 됩니다</strong></p>\n<p>아이가 폭행을 당한 사실을 알게 되면, 먼저 <strong>아이를 안심시키세요</strong>. "네 잘못이 아니야", "엄마 아빠가 반드시 해결해줄게"라는 말이 중요합니다. 아이가 자책하거나 보복이 두려워 숨기는 경우가 많으므로, <strong>편안한 분위기</strong>에서 천천히 이야기를 들으세요.</p>\n<p>동시에 <strong>증거를 즉시 확보</strong>해야 합니다. ① 멍, 상처, 찢어진 옷 등을 <strong>사진·동영상으로 촬영</strong>(날짜 표시) ② <strong>병원에 가서 진단서</strong>를 발급받으세요(상해진단서, 치료비 영수증) ③ 아이의 진술을 <strong>육성 녹음 또는 메모</strong>로 기록(누가, 언제, 어디서, 어떻게 때렸는지)</p>\n<p>특히 <strong>진단서는 48시간 이내에 발급</strong>받는 것이 좋습니다. 시간이 지나면 상처가 치유되어 피해 정도를 입증하기 어려워집니다. 병원에서 <strong>"학교폭력 피해 사실"</strong>을 언급하면 진단서에 기재됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">골든타임: 아이 안정 → 상처 사진 촬영 → 48시간 내 진단서 발급 → 아이 진술 기록</blockquote>',
      },
      {
        title: '학교에 공식적으로 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법에 따라 학교는 신고를 접수하고 즉시 조치할 의무가 있습니다</strong></p>\n<p>학교폭력예방 및 대책에 관한 법률(학교폭력예방법) 제20조에 따라 <strong>누구든지 학교폭력 사실을 알게 된 경우 학교에 신고</strong>할 수 있습니다. 담임교사에게 구두로 알리는 것만으로는 부족합니다. 반드시 <strong>서면(학교폭력 피해 신고서)</strong>으로 공식 접수하세요.</p>\n<p>신고 방법: ① <strong>학교 방문</strong>하여 학교폭력 피해 신고서 제출 ② <strong>117(학교폭력 신고센터)</strong>에 전화 ③ <strong>교육청 학교폭력 온라인 신고</strong>(Wee센터). 학교는 신고를 접수하면 <strong>14일 이내에 학교폭력 심의위원회(학폭위)</strong> 개최 여부를 결정해야 합니다.</p>\n<p>학교 신고 시 <strong>접수 확인서(접수번호, 접수일자)</strong>를 반드시 받으세요. 학교가 신고를 축소하거나 무마하려는 경우가 있으므로, <strong>서면 기록</strong>이 중요합니다. 학교가 적절히 대응하지 않으면 교육지원청에 직접 심의를 요청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 요령: 서면 신고서 제출 → 접수번호 확보 → 미대응 시 교육지원청 직접 신청</blockquote>',
      },
      {
        title: '학교폭력 심의위원회(학폭위) 절차를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">학폭위에서 피해 사실이 인정되면 가해학생 조치와 피해학생 보호조치가 결정됩니다</strong></p>\n<p>학교폭력예방법 제12조에 따라 학교폭력 심의위원회는 <strong>교육지원청</strong>에 설치됩니다. 심의위원회는 피해학생·가해학생·목격자 등의 진술을 듣고, 사안을 조사한 후 <strong>가해학생 조치(제17조)</strong>와 <strong>피해학생 보호조치(제16조)</strong>를 결정합니다.</p>\n<p>학폭위 준비를 위해 부모가 해야 할 일: ① <strong>진단서, 사진, 아이 진술서</strong> 등 증거를 체계적으로 정리 ② <strong>목격자 진술서</strong>를 확보(같은 반 친구, 교사 등) ③ <strong>의견서</strong>를 작성하여 제출(피해 경위, 아이에게 미친 영향, 원하는 조치 등)</p>\n<p>학교폭력예방법 제16조에 따른 <strong>피해학생 보호조치</strong>에는 ①심리상담·조언 ②일시보호 ③치료·치료를 위한 요양 ④학급교체 ⑤전학 권고 등이 있습니다. 가해학생에 대한 <strong>제17조 조치</strong>에는 서면사과, 접촉금지, 출석정지, 학급교체, 전학, 퇴학처분 등이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">학폭위 준비: 증거 정리 + 목격자 진술서 + 의견서 제출 → 보호조치·가해조치 결정</blockquote>',
      },
      {
        title: '학폭위 결과에 따른 후속 조치를 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">학폭위 결정 후에도 불복 절차, 치료비 청구, 형사 고소 등 할 일이 남아 있습니다</strong></p>\n<p>학폭위 결정에 <strong>불만족스러운 경우</strong>, 결정 통보를 받은 날로부터 <strong>15일 이내</strong>에 행정심판을 청구하거나 <strong>90일 이내</strong>에 행정소송을 제기할 수 있습니다(학교폭력예방법 제17조의2).</p>\n<p><strong>치료비 청구</strong>: 가해학생 측에 치료비를 청구하세요. 학교안전공제회를 통해 <strong>피해학생 치료비 지원</strong>도 받을 수 있습니다. 학교안전공제회에 피해 사실을 통보하면 치료비, 심리치료비 등이 지원됩니다.</p>\n<p><strong>형사 고소</strong>: 가해학생이 만 14세 이상이면 <strong>폭행죄(형법 제260조)</strong> 또는 <strong>상해죄(형법 제257조)</strong>로 형사 고소할 수 있습니다. 만 14세 미만은 형사 미성년자이므로 <strong>소년보호사건</strong>으로 처리됩니다. 또한 가해학생 부모에 대해 <strong>민법 제750조(불법행위 손해배상)</strong>에 따른 손해배상 청구도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">후속 조치: 불복 시 행정심판(15일)/행정소송(90일) + 치료비 청구 + 형사 고소/손해배상</blockquote>',
      },
    ],
    cases: [
      {
        title: '초기 증거 확보로 학폭위에서 유리한 결정을 받은 사례',
        summary:
          '관련 사례에서도 부모가 아이의 상처를 당일 사진으로 촬영하고 48시간 이내에 진단서를 발급받았으며, 목격 학생 3명의 진술서를 확보하여 학폭위에서 가해학생에게 출석정지 및 접촉금지 조치가 결정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 상처 사진과 진단서를 가장 먼저 확보하고, 목격자 진술서를 최대한 많이 모으세요.',
      },
      {
        title: '학교가 사건을 축소하려 했으나 교육지원청 직접 신청으로 해결된 사례',
        summary:
          '관련 사례에서도 학교가 "아이들끼리 장난"이라며 학폭위 개최를 미루자, 부모가 교육지원청에 직접 심의를 요청하여 학폭위가 개최되었고, 가해학생에 대한 학급교체 및 특별교육 이수 조치가 내려진 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 학교가 14일 이내 학폭위 개최 여부를 결정하지 않으면, 교육지원청에 직접 심의를 요청하세요.',
      },
    ],
    faq: [
      {
        question: '아이가 맞은 걸 며칠 뒤에 알았는데, 지금이라도 신고 가능한가요?',
        answer:
          '네, <strong>시기와 관계없이 신고 가능</strong>합니다. 다만 증거 확보가 어려워질 수 있으므로, 알게 된 즉시 진단서 발급과 사진 촬영을 하세요.',
      },
      {
        question: '가해 학생 부모에게 직접 연락해도 되나요?',
        answer:
          '<strong>직접 연락은 권장하지 않습니다</strong>. 감정적 충돌로 상황이 악화될 수 있고, 오히려 쌍방 폭력 시비로 번질 수 있습니다. 학교와 학폭위를 통해 공식 절차로 해결하세요.',
      },
      {
        question: '학폭위 심의에 부모가 직접 참석할 수 있나요?',
        answer:
          '네, 학교폭력예방법에 따라 <strong>피해학생 보호자는 학폭위에 출석하여 의견을 진술</strong>할 수 있습니다. 출석하여 준비한 증거와 의견서를 직접 설명하는 것이 유리합니다.',
      },
      {
        question: '아이가 보복이 두려워서 신고를 원하지 않으면 어떻게 하나요?',
        answer:
          '아이의 마음을 충분히 들어주되, <strong>신고하지 않으면 폭력이 반복될 수 있음</strong>을 설명하세요. 학교에 <strong>보복 방지 조치</strong>(접촉금지, 학급교체 등)를 요청하고, 필요하면 Wee센터 상담을 병행하세요.',
      },
      {
        question: '학교 CCTV 영상을 요청할 수 있나요?',
        answer:
          '학교에 <strong>CCTV 영상 보존 요청</strong>을 즉시 하세요. 보통 30일 이후 자동 삭제됩니다. 개인정보보호법상 직접 열람은 어려울 수 있으나, 학폭위나 수사 과정에서 확인 가능합니다.',
      },
      {
        question: '치료비는 누가 부담하나요?',
        answer:
          '원칙적으로 <strong>가해학생 측(보호자)이 부담</strong>합니다. 학교안전공제회를 통해 <strong>선지급</strong>받을 수 있으며, 이후 가해학생 측에 구상권을 행사합니다. 심리치료비도 지원 대상입니다.',
      },
      {
        question: '가해학생이 초등학생이면 형사 처벌이 불가능한가요?',
        answer:
          '만 14세 미만은 <strong>형사 미성년자</strong>로 형사 처벌 대상이 아닙니다. 다만 만 10세 이상이면 <strong>소년보호사건</strong>으로 처리될 수 있고, 가해학생 <strong>부모에 대한 민사 손해배상</strong>은 가능합니다.',
      },
      {
        question: '학폭위 결정에 불만이 있으면 어떻게 하나요?',
        answer:
          '결정 통보를 받은 날부터 <strong>15일 이내에 행정심판</strong>, <strong>90일 이내에 행정소송</strong>을 제기할 수 있습니다. 시·도교육청 행정심판위원회에 청구하세요.',
      },
    ],
    cta: {
      text: '1분 안에 학교폭력 피해 대처 준비사항 확인하기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 가이드', href: '/guide/school-violence' },
      { label: '학교폭력 피해 신고 후 자치위원회 절차', href: '/guide/school-violence/school-violence-committee-procedure' },
      { label: '학폭위 가해자 지목 시 부모 대응법', href: '/guide/school-violence/school-violence-accused-parent-response' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
    ],
  },
];
