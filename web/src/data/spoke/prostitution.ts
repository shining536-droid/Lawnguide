import { SpokePage } from '../spoke-pages';

export const prostitutionPages: SpokePage[] = [
  {
    domain: 'prostitution',
    slug: 'prostitution-arrest-response',
    keyword: '성매매 단속 적발 후 형사 절차와 대응',
    questionKeyword: '성매매로 단속에 적발됐는데 어떻게 대응해야 하나요?',
    ctaKeyword: '성매매 단속 대응',
    type: '상황형',
    meta: {
      title: '성매매 단속 적발 후 형사 절차와 대응 | 로앤가이드',
      description: '성매매처벌법에 따른 처벌 수준, 기소유예 가능성, 존스쿨 교육, 진술 시 권리를 정리했습니다.',
    },
    intro: '유흥업소에서 단속에 걸렸습니다. 경찰서에서 조사를 받고 귀가했는데, 이후에 어떤 절차가 진행되는 건지, 벌금이 얼마인지, 전과가 남는 건지 아무것도 모르겠습니다. 직장에 알려질까 두렵습니다. 지금 확인해야 할 것들을 정리했습니다.',
    timelineSteps: ['경찰 조사', '검찰 송치', '기소유예/약식기소', '처분 확정'],
    sections: [
      {
        title: '성매매처벌법의 처벌 수준을 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">성매매알선 등 행위의 처벌에 관한 법률에 따라 처벌됩니다</strong></p>\n<p><strong>성매매처벌법 제21조제1항</strong>에 따라 성매매를 한 사람은 <strong>1년 이하 징역, 300만원 이하 벌금, 구류 또는 과료</strong>에 처해집니다. 단순 성매수(구매)와 성매도(판매) 모두 처벌 대상입니다.</p>\n<p>알선·권유·강요 등은 별도 조항으로 더 무거운 처벌을 받습니다. 초범이고 단순 성매수인 경우에는 기소유예 또는 약식명령(벌금)으로 마무리되는 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 1년 이하 징역 또는 300만원 이하 벌금 | 초범 단순 성매수 → 기소유예·벌금 가능</blockquote>',
      },
      {
        title: '기소유예를 받을 수 있는 조건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">초범이고 반성하면 기소유예(전과 없음)가 가능합니다</strong></p>\n<p>검찰은 초범이고 범행을 인정하며 반성하는 경우 <strong>기소유예</strong> 처분을 내릴 수 있습니다. 기소유예는 기소를 하지 않는 것이므로 <strong>전과가 남지 않습니다</strong>.</p>\n<p>기소유예를 받기 위해서는 성매매 예방교육(<strong>존스쿨</strong>) 수강이 조건으로 붙는 경우가 많습니다. 반성문 작성과 재범 방지 의지를 보여주는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소유예 조건: 초범 + 범행 인정 + 반성 + 존스쿨 수강 → 전과 기록 없음</blockquote>',
      },
      {
        title: '존스쿨(성매매 예방교육)을 미리 수강하세요',
        content:
          '<p><strong style="color:#1e3a5f">존스쿨 수강 확인서가 기소유예에 유리하게 작용합니다</strong></p>\n<p><strong>존스쿨</strong>은 성매매 재범 방지를 위한 교육 프로그램입니다. 검찰이 기소유예 조건으로 존스쿨 수강을 요구하는 경우가 많으므로, 검찰 송치 전에 미리 수강해두면 유리합니다.</p>\n<p>존스쿨은 각 지역 건강가정지원센터나 관련 기관에서 운영합니다. 보통 8시간(1일) 과정이며, <strong>수강 확인서</strong>를 발급받아 검찰에 제출합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 존스쿨 수강(8시간) → 수강 확인서 발급 → 검찰 제출</blockquote>',
      },
      {
        title: '경찰 조사에서의 진술 권리를 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">진술거부권이 있으며, 변호사 조력을 받을 수 있습니다</strong></p>\n<p>경찰 조사 시 <strong>진술거부권</strong>이 있습니다. 불리한 진술을 강요당하지 않을 권리가 있으며, 변호사의 조력을 받을 권리도 있습니다.</p>\n<p>다만 단순 성매수 초범의 경우 범행 사실을 인정하고 반성하는 태도가 <strong>기소유예에 유리</strong>하게 작용하는 경우가 많습니다. 부인할 것인지 인정할 것인지는 구체적 사정에 따라 다르므로, 가능하면 변호사와 상의 후 결정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권리: 진술거부권 + 변호인조력권 | 초범 인정·반성 → 기소유예 유리</blockquote>',
      },
    ],
    cases: [
      {
        title: '초범으로 존스쿨 수강 후 기소유예를 받은 사례',
        summary:
          '관련 사례에서도 단순 성매수 초범이 범행을 인정하고, 존스쿨을 수강한 뒤 반성문을 제출하여 기소유예 처분을 받은 경우가 자주 있습니다. 기소유예는 전과가 남지 않습니다.',
        takeaway:
          '비슷한 상황이라면 검찰 송치 전에 존스쿨을 미리 수강하고, 반성문을 준비하세요.',
      },
      {
        title: '재범으로 벌금형이 선고된 사례',
        summary:
          '관련 사례에서도 이전에 성매매로 기소유예를 받은 전력이 있는 상태에서 다시 적발된 경우, 약식명령으로 벌금 200만원이 부과된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 재범은 기소유예가 어렵다는 점을 인지하고, 양형에 유리한 자료를 최대한 준비하세요.',
      },
    ],
    faq: [
      {
        question: '성매매로 적발되면 직장에 알려지나요?',
        answer: '경찰·검찰이 직장에 <strong>자동 통보하지는 않습니다</strong>. 다만 구속되거나 공무원인 경우는 다를 수 있습니다.',
      },
      {
        question: '기소유예와 벌금의 차이는 뭔가요?',
        answer: '기소유예는 <strong>전과가 남지 않고</strong>, 벌금은 형사처벌이므로 전과 기록이 남습니다.',
      },
      {
        question: '온라인으로 성매매를 시도하다 적발된 경우도 처벌되나요?',
        answer: '성매매 <strong>광고·알선</strong>도 처벌 대상이며, 실제 성매매가 이루어지지 않아도 처벌될 수 있습니다.',
      },
      {
        question: '벌금은 얼마 정도 나오나요?',
        answer: '단순 성매수 초범 기준 통상 <strong>100~200만원</strong> 수준의 벌금이 부과됩니다.',
      },
      {
        question: '성매매 전과가 취업에 영향을 미치나요?',
        answer: '공무원·교원 등 일부 직종에서 <strong>결격사유</strong>가 될 수 있습니다. 기소유예 시 전과 없음.',
      },
      {
        question: '미성년자인 줄 몰랐는데 처벌이 되나요?',
        answer: '아동·청소년 대상 성매매는 <strong>아청법</strong>이 적용되어 훨씬 무거운 처벌을 받습니다.',
      },
      {
        question: '변호사 없이도 대응할 수 있나요?',
        answer: '가능하지만, 기소유예 등 <strong>유리한 처분</strong>을 위해서는 변호사 상담을 권장합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성매매 진단', href: '/diagnosis/prostitution' },
    ],
  },
];
