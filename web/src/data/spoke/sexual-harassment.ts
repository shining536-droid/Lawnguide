import { SpokePage } from '../spoke-pages';

export const sexualHarassmentPages: SpokePage[] = [
  {
    domain: 'sexual-harassment',
    slug: 'workplace-harassment-first-check',
    keyword: '직장 내 성희롱 피해 시 먼저 확인할 것',
    questionKeyword: '직장에서 성희롱을 당했는데 먼저 무엇을 확인해야 하나요?',
    ctaKeyword: '직장 내 성희롱 대응',
    type: '체크리스트형',
    meta: {
      title: '직장 내 성희롱 피해 시 먼저 확인할 것 | 로앤가이드',
      description:
        '직장 내 성희롱 피해 시 남녀고용평등법상 사업주 의무, 사내 신고, 국가인권위 진정, 고용노동청 신고 절차를 정리했습니다.',
    },
    intro:
      '직장 상사가 회식 자리에서 신체를 만지며 불쾌한 농담을 반복합니다. 다음 날 아무 일도 없었다는 듯 업무 지시를 합니다. 참아야 하나 고민하지만, 법은 분명히 피해자를 보호하고 있습니다. 지금 바로 확인해야 할 것들을 정리했습니다.',
    timelineSteps: ['성희롱 해당 여부 확인', '증거 확보', '사내 신고·사업주 조치', '외부 기관 신고'],
    sections: [
      {
        title: '내가 겪은 행위가 성희롱에 해당하는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법상 직장 내 성희롱의 3가지 요건을 확인하세요</strong></p>\n<p><strong>남녀고용평등과 일·가정 양립 지원에 관한 법률</strong>(남녀고용평등법) 제2조에 따라 직장 내 성희롱은 ①<strong>사업주, 상급자, 근로자</strong>가, ②직장 내 지위를 이용하거나 업무와 관련하여, ③<strong>성적 언동</strong> 등으로 상대방에게 <strong>성적 굴욕감이나 혐오감</strong>을 느끼게 하는 것입니다.</p>\n<p>성적 언동에는 <strong>신체 접촉, 음란한 발언, 성적 농담, 외모 평가, 음란물 유포</strong> 등이 포함됩니다. 1회성 행위도 성희롱에 해당할 수 있습니다. 피해자의 주관적 감정이 아닌 <strong>합리적 피해자 기준</strong>으로 판단합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: ①직장 내 관계 ②업무 관련성 ③성적 언동 → 굴욕감·혐오감</blockquote>',
      },
      {
        title: '증거를 확보하고 기록을 남기세요',
        content:
          '<p><strong style="color:#1e3a5f">성희롱 행위의 일시, 장소, 내용을 구체적으로 기록하세요</strong></p>\n<p>성희롱 사건은 증거 확보가 어렵기 때문에 <strong>즉시 기록</strong>하는 것이 중요합니다. ①성희롱 <strong>일시·장소·내용</strong>을 상세히 기록한 메모(날짜별), ②<strong>카카오톡·문자·이메일</strong> 등 성적 발언이 포함된 대화 스크린샷, ③<strong>목격자</strong> 유무와 연락처를 정리하세요.</p>\n<p>대화를 <strong>녹음</strong>하는 것도 유력한 증거가 됩니다(본인이 대화 당사자인 경우 적법). 성희롱 직후 동료에게 피해 사실을 알린 <strong>카톡·문자 기록</strong>도 간접 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 피해 일지(날짜별), 대화 캡처, 녹음, 목격자, 동료에게 알린 기록</blockquote>',
      },
      {
        title: '사내 신고를 하고 사업주의 조치 의무를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">사업주는 성희롱 신고 시 지체 없이 조사하고 조치해야 할 의무가 있습니다</strong></p>\n<p>남녀고용평등법 제14조에 따라 사업주는 성희롱 신고를 받으면 ①<strong>지체 없이 조사</strong>를 실시하고, ②조사 기간 중 <strong>피해자 보호조치</strong>(근무 장소 변경, 유급휴가 등)를 해야 하며, ③조사 결과 확인 시 <strong>행위자에 대한 징계</strong> 등 조치를 해야 합니다.</p>\n<p>사업주가 조사를 하지 않거나 피해자에게 <strong>불이익 조치</strong>(해고, 전보, 징계, 임금 차별 등)를 하면 <strong>3년 이하 징역 또는 3,000만원 이하 벌금</strong>에 처해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사업주 의무: 즉시 조사, 피해자 보호, 행위자 징계 | 불이익 시 3년/3,000만원</blockquote>',
      },
      {
        title: '외부 기관에 신고하여 권리를 구제받으세요',
        content:
          '<p><strong style="color:#1e3a5f">사내 해결이 어려우면 국가인권위원회, 고용노동청에 신고하세요</strong></p>\n<p>사업주가 제대로 조치하지 않거나 사내 신고가 어려운 경우 외부 기관에 신고할 수 있습니다. ①<strong>국가인권위원회</strong>에 진정(성희롱 행위 자체에 대한 판단), ②<strong>고용노동청</strong>에 신고(사업주의 의무 위반에 대한 행정 조치), ③<strong>형사 고소</strong>(강제추행 등 형사 범죄에 해당하는 경우)를 할 수 있습니다.</p>\n<p>국가인권위원회 진정은 <strong>피해 발생일로부터 1년 이내</strong>, 고용노동청 신고는 사업주 조치 의무 위반에 대해 할 수 있습니다. 신체 접촉이 수반된 경우 <strong>강제추행죄</strong>(10년 이하 징역/1,500만원 이하 벌금)로 형사 고소도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">외부 기관: 국가인권위(진정), 고용노동청(신고), 경찰(형사 고소)</blockquote>',
      },
    ],
    cases: [
      {
        title: '상사의 반복적 신체 접촉으로 사업주 조치가 이루어진 사례',
        summary:
          '관련 사례에서도 팀장이 회식 자리에서 반복적으로 어깨와 허리를 만져 피해자가 사내 신고를 하였고, 사업주가 조사 후 팀장에게 정직 처분을 내린 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 성희롱 행위를 날짜별로 기록하고, 회식 참석자 목격 진술을 확보한 후 사내 신고하세요.',
      },
      {
        title: '사업주의 불이익 조치에 대해 고용노동청이 시정한 사례',
        summary:
          '관련 사례에서도 성희롱을 신고한 피해자를 다른 부서로 전보 발령한 것이 불이익 조치로 인정되어, 고용노동청이 사업주에게 시정 명령을 내린 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 성희롱 신고 후 인사상 불이익을 받으면 즉시 고용노동청에 신고하세요.',
      },
    ],
    faq: [
      {
        question: '성적 농담만 했는데도 성희롱인가요?',
        answer:
          '네, 상대방에게 <strong>성적 굴욕감이나 혐오감</strong>을 느끼게 하는 성적 농담도 성희롱에 해당할 수 있습니다.',
      },
      {
        question: '동료(같은 직급) 사이에도 성희롱이 성립하나요?',
        answer:
          '네, 남녀고용평등법은 <strong>사업주, 상급자뿐 아니라 근로자</strong> 사이의 성희롱도 규율합니다.',
      },
      {
        question: '성희롱과 강제추행의 차이는?',
        answer:
          '성희롱은 <strong>민사·행정적 구제</strong> 대상이고, 신체 접촉이 수반된 강제추행은 <strong>형사 범죄</strong>로 10년 이하 징역에 처해질 수 있습니다.',
      },
      {
        question: '사내에 신고 절차가 없으면 어떻게 하나요?',
        answer:
          '직접 <strong>고용노동청(전화 1350)</strong>에 신고하거나 <strong>국가인권위원회(전화 1331)</strong>에 진정하세요.',
      },
      {
        question: '성희롱 피해자도 해고될 수 있나요?',
        answer:
          '성희롱 신고를 이유로 한 해고는 <strong>불법</strong>입니다. 3년 이하 징역 또는 3,000만원 이하 벌금에 해당합니다.',
      },
      {
        question: '국가인권위 진정 기한은 얼마인가요?',
        answer:
          '피해 발생일로부터 <strong>1년 이내</strong>에 진정해야 합니다.',
      },
      {
        question: '남성도 성희롱 피해자가 될 수 있나요?',
        answer:
          '네, <strong>성별과 무관하게</strong> 누구나 직장 내 성희롱 피해자가 될 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 고용노동부 상담센터(1350), 여성긴급전화(1366)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 직장 내 성희롱 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성희롱 진단', href: '/diagnosis/sexual-harassment' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '임금체불 가이드', href: '/guide/wage' },
    ],
  },
];
