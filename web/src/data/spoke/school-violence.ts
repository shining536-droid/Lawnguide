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
      title: '학교폭력 피해 신고 후 자치위원회 절차 | 로앤가이드',
      description:
        '학교폭력 피해 신고부터 심의위원회 절차, 가해학생 조치, 피해학생 보호조치까지 전체 흐름을 정리했습니다.',
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
      title: '학폭위에서 가해자로 지목됐을 때 부모 대응법 | 로앤가이드',
      description: '학교폭력 가해자 지목 시 학폭위 절차, 사실관계 정리, 조치 종류와 불복, 합의 방법을 정리했습니다.',
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
      title: '학폭위 가해자 조치 종류와 불복 방법 | 로앤가이드',
      description:
        '학폭위 가해학생 조치 1~9호 종류 비교, 행정심판·행정소송 불복 절차, 학생부 기재 기준을 정리했습니다.',
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
];
