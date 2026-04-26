import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 8. 이 페이지는 [온라인 채팅으로 성매매 혐의를 받는 사람]의 [경찰 출석 전 증거와 진술 전략을 준비하는 상황]에서 [녹음 증거 대응과 진술 방향 설정]을 돕는 페이지다.
// 9. 이 페이지는 [성매매로 적발된 초범]의 [경찰 연락을 받고 무엇부터 해야 할지 모르는 상황]에서 [즉시 해야 할 일 3가지와 절차 파악]을 돕는 페이지다.
// 10. 이 페이지는 [성매매 단속에서 초범으로 적발된 피의자]의 [처벌 수위와 감경 가능성을 알고 싶은 상황]에서 [실제 양형 기준과 기소유예 조건 파악]을 돕는 페이지다.
// 11. 이 페이지는 [성매매 사건 관련자]의 [매수자와 매도자의 처벌 차이가 궁금한 상황]에서 [법정형·양형·전과 영향 비교 정보 제공]을 돕는 페이지다.
// 12. 이 페이지는 [산재를 당한 근로자]의 [요양급여를 신청해야 하는 상황]에서 [신청 절차·기한·필요 서류 파악]을 돕는 페이지다.
// 13. 이 페이지는 [출퇴근 중 사고를 당한 근로자]의 [산재로 인정받을 수 있는지 궁금한 상황]에서 [인정 기준 3가지와 예외 사유 파악]을 돕는 페이지다.
// 14. 이 페이지는 [산업재해를 당한 근로자]의 [어디부터 시작해야 할지 모르는 상황]에서 [즉시 해야 할 일과 신청 순서 파악]을 돕는 페이지다.

export const spokesBatch19_8to14: SpokePage[] = [
  {
    domain: 'prostitution',
    slug: 'caught-where-to-start',
    keyword: '성매매 적발됐는데 어디부터 해야 하나',
    questionKeyword: '성매매에 적발됐는데 지금 당장 무엇부터 해야 하나요?',
    ctaKeyword: '성매매 적발 초기 대응',
    type: '어디부터형',
    perspective: 'accused',
    meta: {
      title: '성매매 적발 후 해야 할 일 3가지 순서 | 로앤가이드',
      description: '성매매로 적발됐는데 무엇부터 해야 할지 모르겠다면, 경찰 조사 전 반드시 해야 할 3가지와 기소유예 준비 방법을 지금 확인하세요.',
    },
    intro: '퇴근 후 유흥업소에서 단속에 적발됐습니다. 경찰이 신분증을 확인하고 출석 일시를 통보했습니다. 처음 겪는 일이라 머릿속이 하얗게 됩니다. 혐의를 받고 있다면, 당장 무엇부터 해야 하는지 순서대로 정리하는 것이 가장 중요합니다.',
    sections: [
      {
        title: '첫째, 적발 현장에서 불필요한 진술을 하지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">헌법 제12조 제2항에 따라 모든 국민은 형사상 자기에게 불리한 진술을 강요당하지 않습니다</strong></p>\n<p>단속 현장에서 경찰이 질문하면 당황하여 필요 이상의 말을 하게 됩니다. <strong>"변호사와 상담 후 성실히 출석하겠습니다"</strong>라고만 답하세요. 현장에서의 진술은 모두 조서에 기록되며, 나중에 번복하기 어렵습니다.</p>\n<p>특히 <strong>"처음이에요" "한 번만 봐주세요" 같은 말</strong>은 혐의를 인정하는 것으로 기록될 수 있습니다. 인적사항 확인에만 응하고, 사건 관련 질문에는 <strong>묵비권</strong>을 행사하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">현장 원칙: 인적사항만 확인 → 사건 질문 묵비권 → "변호사 상담 후 출석" 답변</blockquote>',
      },
      {
        title: '둘째, 48시간 이내에 형사 전문 변호사 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 출석 조사 전에 변호사 조력을 받으면 진술 방향을 올바르게 설정할 수 있습니다</strong></p>\n<p>변호사 상담 시 준비할 사항: <strong>①적발 일시·장소 ②동행자 유무 ③경찰이 확보한 증거(CCTV, 카드 결제 내역 등) ④현장에서 한 진술 내용 ⑤전과 유무</strong></p>\n<p>성매매처벌법 위반 사건은 <strong>초범 여부와 반성 태도</strong>가 양형에 큰 영향을 미칩니다. 변호사와 함께 ①혐의 인정 범위 ②기소유예 가능성 ③진술 전략을 사전에 결정하세요. 무료 법률상담은 대한법률구조공단(132)에서도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 적발 상황 정리 → 변호사 상담 → 진술 전략 수립 → 기소유예 방향 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 성매매 적발 상황에 맞는 대응법 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 기소유예를 위한 반성문과 재범방지 서약서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">검찰은 초범·반성·재범 위험성 등을 종합 고려하여 기소유예 여부를 결정합니다</strong></p>\n<p>경찰 조사 후 검찰 송치 전까지 준비할 서류: <strong>①반성문(A4 1~2장, 자필 권장) ②재범방지 서약서 ③존스쿨(성매매 재범방지교육) 자발적 수강 신청 확인서 ④직장 재직증명서·가족관계증명서</strong></p>\n<p>반성문에는 <strong>잘못을 구체적으로 인정하고, 재범하지 않겠다는 의지</strong>를 진정성 있게 기술하세요. "한 번 실수했다"는 식의 가벼운 표현보다 <strong>행위의 문제점을 스스로 인식하고 있음</strong>을 보여주는 내용이 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소유예 준비: 반성문 + 서약서 + 존스쿨 수강 신청 + 신원 보증 자료</blockquote>',
      },
      {
        title: '넷째, 압수·수색이 진행된 경우 영장 내용을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사소송법 제114조에 따라 압수·수색에는 가능한 한 영장이 필요하며, 영장에 기재된 범위를 초과할 수 없습니다</strong></p>\n<p>경찰이 휴대폰이나 개인 물품을 압수한 경우, <strong>압수목록 교부서</strong>를 가능한 한 받으세요. 영장 없이 임의로 휴대폰을 열람한 경우 해당 증거는 위법수집증거에 해당할 수 있습니다.</p>\n<p>영장에는 <strong>①압수·수색 대상 ②범죄 혐의 ③집행 기한</strong>이 명시됩니다. 영장에 기재되지 않은 물건이 압수되었거나, 집행 기한이 경과한 후 집행된 경우 변호사를 통해 이의신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 영장 제시 여부 → 압수목록 교부 → 영장 범위 초과 여부 → 이의신청 가능성</blockquote>',
      },
    ],
    cases: [
      {
        title: '압수수색 영장 집행 기한 관련 대법원 판결',
        summary:
          '대법원 2023도8752 사건(2023.10.18 선고)에서 법원은 압수·수색 영장에 기재된 집행 기한을 경과하여 집행한 경우 이는 영장주의 원칙에 위배되며, 해당 절차에서 수집된 증거의 증거능력이 부정될 수 있다고 판시했습니다.',
        takeaway:
          '경찰이 압수·수색을 진행했다면 영장의 집행 기한과 범위를 가능한 한 확인하세요. 기한이 지난 영장으로 압수된 증거는 재판에서 배제될 수 있으므로, 변호사에게 영장 사본을 보여주고 적법성을 검토받으세요.',
      },
    ],
    faq: [
      {
        question: '적발 현장에서 경찰이 휴대폰을 보여달라고 하면 거부할 수 있나요?',
        answer: '<strong>영장 없이는 휴대폰 제출을 거부할 수 있습니다</strong>. 경찰이 임의제출을 요청하더라도 응할 의무는 없습니다. 다만 영장을 발부받아 올 수 있으므로, 삭제보다는 거부 후 변호사 상담을 받는 것이 바람직합니다.',
      },
      {
        question: '단속 현장에서 벌금을 바로 내면 끝나나요?',
        answer: '현장에서 벌금을 납부하는 것은 <strong>통고처분(즉결심판)</strong>에 해당하는 경우에만 가능합니다. 일반 성매매 단속의 경우 현장 벌금 납부가 아니라 경찰 조사 → 검찰 송치 → 기소유예 또는 약식기소 절차를 거칩니다.',
      },
      {
        question: '같이 적발된 상대방과 진술을 맞춰야 하나요?',
        answer: '<strong>절대로 진술을 사전 조율하지 마세요</strong>. 증인과 진술을 맞추는 행위는 증거 조작으로 간주되어 추가 혐의(증거인멸, 범인도피)가 붙을 수 있습니다. 각자 사실에 기반하여 독립적으로 진술해야 합니다.',
      },
      {
        question: '적발 기록이 남으면 해외여행에 문제가 되나요?',
        answer: '기소유예 처분을 받으면 <strong>전과 기록이 남지 않으므로</strong> 해외 비자 발급에 직접적인 영향은 없습니다. 다만 벌금형 이상의 처분을 받으면 일부 국가(미국, 캐나다 등)의 비자 신청 시 범죄 기록 신고 의무가 발생할 수 있습니다.',
      },
    ],
    cta: {
      text: '성매매 적발 초기 대응 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '온라인 성매매 채팅 적발 시 대응법', href: '/guide/prostitution/online-chat-arrest-response' },
      { label: '성매매 초범 처벌 수위와 감경', href: '/guide/prostitution/prostitution-first-offense-sentencing' },
      { label: '성매매 함정수사 대응 방법', href: '/guide/prostitution/prostitution-entrapment-response' },
      { label: '성매매 적발 시 형사 절차', href: '/guide/prostitution/prostitution-arrest-criminal-process' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'first-offense-raid-penalty-level',
    keyword: '성매매 단속 초범 처벌 수위',
    questionKeyword: '성매매 단속에서 초범으로 적발되면 처벌이 어느 정도인가요?',
    ctaKeyword: '성매매 초범 처벌 수위',
    type: '수치기한형',
    perspective: 'accused',
    meta: {
      title: '성매매 초범 단속 처벌 수위 5가지 기준 | 로앤가이드',
      description: '성매매 단속에서 초범으로 적발되어 처벌 수위가 걱정된다면, 벌금 액수부터 기소유예 조건까지 5가지 양형 기준을 지금 확인하세요.',
    },
    intro: '첫 번째로 성매매 단속에 적발됐습니다. 뉴스에서 벌금형부터 징역형까지 다양한 처벌 사례를 봤는데, 초범인 자신에게는 어느 정도의 처벌이 내려질지 전혀 감이 잡히지 않습니다. 혐의를 받고 있다면, 초범 기준 실제 양형 수위와 감경 가능성을 먼저 파악하는 것이 중요합니다.',
    sections: [
      {
        title: '첫째, 성매매처벌법상 기본 법정형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">성매매알선등행위의처벌에관한법률 제21조 제1항에 따라 성매매를 한 사람은 1년 이하의 징역이나 300만원 이하의 벌금·구류 또는 과료에 처할 수 있습니다</strong></p>\n<p>이는 성매매 <strong>매수자와 매도자 모두에게 동일하게 적용</strong>되는 법정형입니다. 다만 실제 선고형은 <strong>초범 여부, 범행 경위, 반성 정도</strong>에 따라 크게 달라집니다.</p>\n<p>초범 단순 매수의 경우 통상적으로 <strong>벌금 100만~200만원</strong> 선에서 약식명령이 내려지는 경우가 많습니다. 기소유예 처분을 받으면 벌금 없이 사건이 종결됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 1년 이하 징역 또는 300만원 이하 벌금 → 초범 실제 양형: 벌금 100~200만원 또는 기소유예</blockquote>',
      },
      {
        title: '둘째, 초범 기소유예율과 그 조건을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">검찰 통계에 따르면 성매매 초범의 상당수가 교육조건부 기소유예 처분을 받고 있습니다</strong></p>\n<p>기소유예의 핵심 조건: <strong>①전과 없음(초범) ②단순 매수에 해당 ③피의자의 진지한 반성 ④재범 위험성 낮음 ⑤존스쿨(40시간) 교육 이수 의지</strong></p>\n<p>반대로 기소유예가 어려운 경우: <strong>①동종 전과 있음 ②미성년자 대상 ③성매매 알선·강요 혐의 포함 ④조직적·상습적 행위 ⑤수사 과정에서 비협조</strong>. 이 경우 약식기소 또는 정식 재판에 회부될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기소유예 조건: 초범 + 단순 매수 + 반성 + 존스쿨 40시간 이수</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/prostitution" style="color:#1565c0;font-weight:600">내 성매매 초범 처벌 수위 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 약식기소 시 벌금 액수와 전과 기록 영향을 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">약식명령으로 벌금형이 확정되면 전과 기록이 남으며, 형의 실효 시까지 수사경력조회에 표시됩니다</strong></p>\n<p>초범 약식기소 시 통상 벌금 액수: <strong>100만~200만원</strong>. 성매매 수익이 크거나 상습성이 인정되면 <strong>200만~300만원</strong>까지 올라갈 수 있습니다. 약식명령에 불복하면 7일 이내 정식재판을 청구할 수 있습니다.</p>\n<p>벌금형 전과는 <strong>2년 경과 후 실효</strong>됩니다(형의실효등에관한법률 제7조). 실효 전까지는 취업 시 범죄경력조회에 나타날 수 있으며, 공무원·교사 등 <strong>결격사유</strong>에 해당할 수 있으므로 직업별 영향을 미리 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">벌금형 영향: 전과 기록 2년 → 취업·자격증 영향 가능 → 약식명령 불복 7일 이내 정식재판 청구</blockquote>',
      },
      {
        title: '넷째, 처벌 수위를 낮추기 위한 양형 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">양형 자료의 충실도에 따라 같은 초범이라도 처분 결과가 달라질 수 있습니다</strong></p>\n<p>유리한 양형 자료 목록: <strong>①자필 반성문 ②재범방지 서약서 ③존스쿨 자발적 수강 신청서 ④재직증명서(안정적 직업) ⑤가족관계증명서(부양가족 존재) ⑥사회봉사활동 증빙</strong></p>\n<p>이들 자료를 검찰 송치 전에 변호사를 통해 <strong>의견서와 함께 제출</strong>하면 기소유예 가능성이 높아집니다. 특히 존스쿨 교육을 자발적으로 미리 신청한 경우, 재범 방지 의지가 인정되어 유리하게 작용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 반성문 + 서약서 + 존스쿨 신청 + 재직증명 + 봉사활동</blockquote>',
      },
    ],
    cases: [
      {
        title: '성매매 수익 산정 기준에 관한 법원 판결',
        summary:
          '서울중앙지방법원 2023노3479 사건(2024.05.23 선고)에서 법원은 성매매 수익을 산정할 때 직접적인 대가뿐 아니라 성매매와 관련하여 수수된 금품 전체를 기준으로 판단해야 하며, 이는 양형에 직접적인 영향을 미친다고 판시했습니다.',
        takeaway:
          '성매매 사건에서 처벌 수위는 관련 금액의 규모에 따라 달라집니다. 단순 매수라도 고액이 오간 경우 양형이 가중될 수 있으므로, 금전 거래 내역을 정리하여 변호사에게 정확히 알려주세요.',
      },
    ],
    faq: [
      {
        question: '성매매 초범 벌금은 정확히 얼마인가요?',
        answer: '법정 최고액은 300만원이며, 초범 단순 매수의 경우 실무상 <strong>100만~200만원</strong> 선에서 약식명령이 내려지는 경우가 많습니다. 다만 구체적 금액은 범행 경위, 반성 정도, 수익 규모 등에 따라 달라집니다.',
      },
      {
        question: '존스쿨 교육은 어디서 어떻게 신청하나요?',
        answer: '존스쿨은 <strong>여성가족부 산하 성매매피해상담소</strong>에서 운영합니다. 검찰이 교육조건부 기소유예를 결정하면 해당 교육기관을 안내받습니다. 자발적으로 미리 수강 신청하려면 관할 성매매피해상담소(1644-6012)에 문의하세요.',
      },
      {
        question: '초범인데 구속될 수도 있나요?',
        answer: '단순 매수 초범의 경우 <strong>구속 가능성은 매우 낮습니다</strong>. 다만 증거 인멸 우려가 있거나, 도주 우려가 있거나, 미성년자 대상 혐의가 포함된 경우에는 구속영장이 청구될 수 있습니다.',
      },
      {
        question: '벌금을 내면 전과가 완전히 사라지나요?',
        answer: '벌금형은 <strong>납부 후 2년이 지나면 실효</strong>됩니다(형의실효등에관한법률 제7조). 실효 후에는 일반적인 범죄경력조회에서 나타나지 않지만, 수사경력은 별도로 보관되며 특정 직종(공무원 등)의 결격사유 조회 시 확인될 수 있습니다.',
      },
      {
        question: '기소유예 받으면 완전히 끝나는 건가요?',
        answer: '<strong>기소유예는 전과가 아닙니다</strong>. 다만 수사기록은 보관되며, 향후 동종 범죄로 다시 적발될 경우 "전력"으로 참고되어 기소유예를 다시 받기 어렵습니다. 기소유예 후 동종 재범 시 정식 기소될 가능성이 높습니다.',
      },
    ],
    cta: {
      text: '성매매 초범 처벌 수위 관련 무료 진단받기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '성매매 가이드', href: '/guide/prostitution' },
      { label: '성매매 적발됐는데 어디부터 해야 하나', href: '/guide/prostitution/caught-where-to-start' },
      { label: '성매매 적발 시 초기 대응법', href: '/guide/prostitution/prostitution-arrest-response' },
      { label: '성매매 매수자 vs 매도자 처벌 비교', href: '/guide/prostitution/buyer-vs-seller-penalty-comparison' },
      { label: '온라인 성매매 채팅 적발 시 대응법', href: '/guide/prostitution/online-chat-arrest-response' },
    ],
  },
  {
    domain: 'industrial-accident1',
    slug: 'injured-where-to-start',
    keyword: '산재 당했는데 어디부터 해야 하나',
    questionKeyword: '산재를 당했는데 지금 당장 무엇부터 해야 하나요?',
    ctaKeyword: '산재 초기 대응',
    type: '어디부터형',
    meta: {
      title: '산재 발생 후 해야 할 일 5가지 순서 | 로앤가이드',
      description: '산재를 당했는데 무엇부터 해야 할지 모르겠다면, 사고 직후부터 보상 신청까지 해야 할 일 5가지를 순서대로 지금 확인하세요.',
    },
    intro: '공장에서 작업 중 무거운 자재가 떨어져 어깨를 다쳤습니다. 병원에 갔더니 인대 파열로 수술이 필요하다고 합니다. 산재 처리를 해야 한다는 건 알겠는데, 당장 무엇부터 해야 할지 도무지 감이 잡히지 않습니다. 치료비, 휴업급여, 회사와의 관계까지 한꺼번에 걱정이 밀려옵니다.',
    sections: [
      {
        title: '첫째, 사고 직후 증거를 확보하고 병원 치료를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">사고 현장의 증거는 시간이 지나면 사라지므로, 치료와 동시에 증거 확보를 병행해야 합니다</strong></p>\n<p>사고 직후 해야 할 일: <strong>①사고 현장 사진·동영상 촬영(기계, 자재, 작업 환경) ②동료 목격자 이름·연락처 확보 ③사고 일시·경위를 메모(스마트폰 녹음도 가능) ④119 또는 병원 이송 → 진료</strong></p>\n<p>병원에서는 가능한 한 <strong>"직장에서 작업 중 다쳤다"</strong>고 정확히 말하세요. 초진 기록에 업무 관련성이 기재되어야 산재 승인에 유리합니다. <strong>산재 지정병원</strong>을 이용하면 본인 부담 없이 치료를 시작할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시: 현장 사진 → 목격자 확보 → 사고 경위 메모 → 병원에서 "작업 중 부상" 고지</blockquote>',
      },
      {
        title: '둘째, 회사에 산재 신고를 요청하고 비협조 시 직접 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제57조에 따라 사업주는 산업재해가 발생하면 지체 없이 기록·보고해야 합니다</strong></p>\n<p>회사에 <strong>산재 발생 보고</strong>를 요청하세요. 대부분의 회사는 인사·총무 담당자가 근로복지공단에 요양급여신청서를 대행 제출합니다. 그러나 회사가 <strong>"공상 처리하자" "건강보험으로 하자"</strong>고 하면 주의해야 합니다.</p>\n<p>공상 처리의 문제점: <strong>①법적 보호를 받지 못함 ②치료가 길어지면 비용 부담 전가 ③휴업급여·장해급여 수급 불가</strong>. 회사가 산재 신청을 거부하거나 미루면 <strong>근로자가 직접 근로복지공단에 신청</strong>할 수 있습니다(산업재해보상보험법 제41조 제2항).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 회사에 산재 신고 요청 → 거부 시 직접 근로복지공단 신청 → 공상 처리 합의 금지</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">내 산재 상황에 맞는 대응법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 요양급여신청서와 필요 서류를 빠르게 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">요양급여신청서는 사고 후 가능한 빨리 제출하는 것이 승인율을 높이는 핵심입니다</strong></p>\n<p>필요 서류 체크리스트: <strong>①요양급여신청서(공단 양식) ②초진 소견서(담당 의사 작성) ③재해경위서(사고 발생 과정 상세 기술) ④근로계약서 사본 ⑤최근 3개월 급여명세서</strong></p>\n<p>재해경위서 작성 팁: <strong>①작업 내용 ②사고 발생 시각 ③사고 원인(기계 고장, 안전장치 미비 등) ④부상 부위와 정도</strong>를 시간순으로 구체적으로 기술하세요. "자재가 떨어졌다"보다 <strong>"14시경 3층 적재대에서 30kg 철판이 고정 장치 풀림으로 낙하"</strong>가 훨씬 좋은 기술입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서류: 요양급여신청서 + 초진 소견서 + 재해경위서(구체적) + 근로계약서 + 급여명세서</blockquote>',
      },
      {
        title: '넷째, 휴업급여와 치료비 보장 범위를 미리 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">산재 승인 시 치료비 전액과 휴업급여(평균임금의 70%)를 받을 수 있습니다</strong></p>\n<p><strong>받을 수 있는 급여 종류:</strong> ①요양급여(치료비 전액 — 입원, 수술, 재활, 약제비 포함) ②휴업급여(요양으로 취업하지 못한 기간 × 평균임금의 70%) ③간병급여(간병이 필요한 경우 1일 기준 지급) ④이송비(통원 치료 교통비)</p>\n<p>치료 종결 후에는 <strong>장해급여</strong>(장해가 남은 경우), <strong>직업재활급여</strong>(직업 복귀 훈련)도 신청할 수 있습니다. 각 급여별 신청 시기가 다르므로, 근로복지공단 담당자에게 <strong>급여 수급 일정표</strong>를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">급여 종류: 요양(치료비) + 휴업(임금 70%) + 간병 + 이송비 + 장해(치료 후)</blockquote>',
      },
      {
        title: '다섯째, 사업주의 안전 의무 위반 여부를 확인하고 추가 보상을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">산재보험 급여와 별도로 사업주 과실이 있으면 민사 손해배상 청구가 가능합니다</strong></p>\n<p>사업주 과실이 인정되는 경우: <strong>①안전교육 미실시 ②안전장비 미지급 ③위험 작업 안전 조치 미이행 ④산업안전보건법상 조치 의무 위반</strong></p>\n<p>산재보험은 <strong>과실 여부와 관계없이 지급</strong>되지만, 사업주에게 명백한 과실이 있다면 산재보험 급여로 보전되지 않는 <strong>위자료, 일실수입 차액</strong> 등을 민사소송으로 추가 청구할 수 있습니다. 중대재해처벌법 적용 사업장이라면 <strong>경영책임자 형사처벌</strong>도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 보상: 사업주 과실 확인 → 민사 손해배상(위자료+일실수입) → 중대재해법 적용 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '석탄산업 보상과 재활급여에 관한 대법원 판결',
        summary:
          '대법원 2022두50694 사건(2025.11.13 선고)에서 법원은 진폐증 등 직업성 질병으로 산재 인정을 받은 근로자에 대해 재활급여와 치료비 보상이 장기간에 걸쳐 지급되어야 하며, 치료 종결 시점의 판단은 의학적 소견을 종합하여 신중하게 결정해야 한다고 판시했습니다.',
        takeaway:
          '산재 치료는 단기간에 끝나지 않을 수 있습니다. 치료 종결 시점은 의학적 판단에 따라 결정되며, 조기에 치료를 종결하라는 회사의 요구에 응하지 마세요. 재활급여를 통해 직업 복귀까지 지원받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '산재 신청하면 회사에서 해고당하지 않나요?',
        answer: '<strong>산재 신청을 이유로 한 해고는 위법입니다</strong>(산업재해보상보험법 제111조). 요양 중인 기간과 그 후 30일간은 근로기준법 제23조에 따라 해고가 금지됩니다. 해고 위협을 받으면 노동청(1350)에 즉시 신고하세요.',
      },
      {
        question: '일용직·계약직도 산재보험 적용을 받나요?',
        answer: '<strong>네, 1인 이상 사업장의 모든 근로자</strong>는 고용 형태와 관계없이 산재보험 적용 대상입니다. 일용직, 계약직, 파트타임 근로자도 모두 포함됩니다. 사업주가 보험료를 납부하지 않았더라도 근로자의 수급권은 보장됩니다.',
      },
      {
        question: '회사가 "공상 처리"를 제안하면 어떻게 하나요?',
        answer: '<strong>공상 처리에 합의하지 마세요</strong>. 공상은 법적 보호가 없어 치료가 길어지면 비용을 근로자가 부담하게 됩니다. 산재 처리 시 치료비 전액, 휴업급여, 장해급여를 법적으로 보장받을 수 있습니다.',
      },
      {
        question: '산재 신청부터 승인까지 얼마나 걸리나요?',
        answer: '일반적인 사고성 재해는 접수 후 <strong>14일~30일</strong> 내에 결정됩니다. 직업성 질병(근골격계 질환, 직업병 등)은 조사 기간이 길어 <strong>2~3개월</strong> 소요될 수 있습니다. 승인 전에도 산재 지정병원에서 치료를 받을 수 있습니다.',
      },
      {
        question: '사고 발생 후 시간이 많이 지났는데 지금도 산재 신청 가능한가요?',
        answer: '요양급여 청구권의 소멸시효는 <strong>사고 발생일로부터 3년</strong>입니다(산업재해보상보험법 제112조). 3년이 지나지 않았다면 지금이라도 신청 가능하지만, 시간이 지날수록 인과관계 입증이 어려워지므로 최대한 빨리 신청하세요.',
      },
    ],
    cta: {
      text: '산재 초기 대응 관련 무료 진단받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산업재해 가이드', href: '/guide/industrial-accident1' },
      { label: '산재 요양급여 신청 절차와 기한', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
      { label: '출퇴근 사고 산재 인정 기준', href: '/guide/industrial-accident1/commute-accident-recognition' },
      { label: '산재 장해급여 등급 판정 절차', href: '/guide/industrial-accident1/disability-benefit-grade-process' },
      { label: '사업주 형사책임과 손해배상', href: '/guide/industrial-accident1/employer-criminal-liability-accident' },
    ],
  },
];
