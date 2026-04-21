import { SpokePage } from '../spoke-pages';

// batch42 labor 12개: dismissal 5 + wage 3 + retirement 2 + unemployment 2
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 정년 후 재계약 형식으로 근무하다 갱신 거절된 근로자가 부당해고 구제신청 절차를 준비하도록 돕는 페이지다.
// 2. 이 페이지는 시용(수습·인턴) 기간 종료 통보를 받은 근로자가 정식 해고 수준 방어를 5단계로 준비하도록 돕는 페이지다.
// 3. 이 페이지는 사규 위반 단 1회로 징계해고를 당한 근로자가 양정 과잉·비례원칙 다툼을 준비하도록 돕는 페이지다.
// 4. 이 페이지는 본인 동의 없이 직무 전환 후 근태 불량을 이유로 해고된 근로자가 전환 무효·해고 부당성을 함께 다투도록 돕는 페이지다.
// 5. 이 페이지는 연봉 협상 결렬을 이유로 사실상 사직 강요·해고된 근로자가 해고 입증·구제신청을 준비하도록 돕는 페이지다.
// 6. 이 페이지는 임금명세서를 받지 못한 근로자가 근로기준법 위반 신고 절차와 증빙을 준비하도록 돕는 페이지다.
// 7. 이 페이지는 인센티브·성과급이 미지급된 근로자가 지급기준·관행 입증을 통해 청구를 준비하도록 돕는 페이지다.
// 8. 이 페이지는 업무 중 사고로 입원 중인 근로자가 요양 기간 급여·휴업급여 지급 의무 범위를 점검하도록 돕는 페이지다.
// 9. 이 페이지는 퇴직금 분할(할부) 지급 합의서를 받은 근로자가 해당 합의의 무효 사유 5가지를 점검하도록 돕는 페이지다.
// 10. 이 페이지는 임원 퇴직금이 정관상 한도를 초과해 지급·손금불산입된 경우 세무 리스크를 점검하도록 돕는 페이지다.
// 11. 이 페이지는 단기 아르바이트 종료 후 실업급여를 신청하려는 근로자가 피보험단위기간·신청 기간을 확인하도록 돕는 페이지다.
// 12. 이 페이지는 고용센터로부터 부정수급 환수 통지를 받은 수급자가 90일 이의신청 절차·증빙을 준비하도록 돕는 페이지다.

export const spokesBatch42Labor: SpokePage[] = [
  // ─── 1. dismissal / post-retirement-contract-renewal-refused ───
  {
    domain: 'dismissal',
    slug: 'dismissal-post-retirement-contract-renewal-refused',
    keyword: '정년 후 재계약 갱신 거절 부당해고',
    questionKeyword: '정년 후 촉탁 계약 갱신 거절당하면 부당해고인가요?',
    ctaKeyword: '정년 후 재계약 부당해고 구제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정년 후 재계약 부당해고 구제 절차 5단계 | 로앤가이드',
      description:
        '정년 후 촉탁·재계약 형태로 근무하다가 1년 단위 갱신을 거절당했다면 갱신기대권 입증과 구제신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"정년은 60세지만 회사가 1년씩 재계약해줄 거라 했어요"라는 말을 믿고 2~3년을 더 근무했는데, 어느 날 갑자기 "이번엔 재계약이 어렵다"는 통보를 받는 경우가 많습니다. 대법원은 정년 후 촉탁계약이 반복 갱신되어 갱신기대권이 형성되었다면 합리적 이유 없는 갱신거절은 사실상 부당해고라고 판시합니다. 기간만료 = 자동 종료가 아닙니다.</p>',
    sections: [
      {
        title: '갱신기대권 — 정년 후 재계약에도 적용되는 법리',
        content:
          '<p><strong style="color:#1e3a5f">정년 후 촉탁 1년 계약이 2회 이상 반복 갱신되었다면 갱신기대권 판단 대상입니다.</strong></p>\n<ul>\n<li><strong>반복 갱신 횟수</strong> — 2회 이상 자동 갱신된 이력 있으면 기대권 인정 가능성 큼.</li>\n<li><strong>업무 동일성</strong> — 정년 전과 동일한 직무·장소에서 근무했는지가 결정적.</li>\n<li><strong>취업규칙·단체협약</strong> — "정년 후 재고용 원칙" 문구가 있으면 강력한 근거.</li>\n<li><strong>근거 판례</strong> — 대법원 2017두52153 "촉탁 반복 갱신 시 갱신기대권 인정".</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "정년이라 계약 끝났다"라고만 해도, 계약서 내용과 갱신 실무가 더 중요합니다.</blockquote>',
      },
      {
        title: '5단계 구제 절차 — 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">갱신 거절 통보일로부터 3개월 이내 지방노동위원회 구제신청이 원칙입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신 거절 사유서 요구</strong> — 서면으로 "재계약 거절 구체 이유" 공문 요청.</li>\n<li><strong>2단계 — 증빙 수집</strong> — 과거 계약서 전부, 업무평가서, 사내 공지에 기재된 정년 후 재고용 관행.</li>\n<li><strong>3단계 — 지노위 구제신청</strong> — 통보일로부터 3개월 이내, 근기법 제28조.</li>\n<li><strong>4단계 — 심문회의 준비</strong> — 갱신기대권 + 거절 합리성 부존재 두 축 주장.</li>\n<li><strong>5단계 — 승소 시 원직복직</strong> — 복직 거부 시 이행강제금 + 임금상당액 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 갱신기대권 인정 가능성과 구제신청 전략을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사의 주장 반박 — 흔한 3가지 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">회사는 "정년 = 근로관계 자동 소멸"이라고 주장하지만 판례는 반복 갱신 시 기대권을 인정합니다.</strong></p>\n<ul>\n<li><strong>"사업 축소라 불가피"</strong> — 경영상 이유 해고 요건(긴박성·회피노력·공정선정·협의) 충족 여부 반박.</li>\n<li><strong>"업무 평가 하위"</strong> — 동일 점수 받은 다른 근로자가 재계약된 사실이 있으면 공정성 반박 근거.</li>\n<li><strong>"촉탁은 원래 1년짜리"</strong> — 실제 업무·출근 형태가 정년 전과 동일하면 실질 판단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 갱신 거절 직후 퇴사 동료에게 계약서 사본·갱신 이력을 부탁해 비교 증빙을 확보하세요.</blockquote>',
      },
      {
        title: '금전보상명령 — 복직 원하지 않을 때',
        content:
          '<p><strong style="color:#1e3a5f">복직 대신 금전보상을 원하면 구제신청 시 명시해야 합니다.</strong></p>\n<ul>\n<li><strong>신청 시기</strong> — 지노위 심문회의 종결 전 "금전보상명령" 신청서 제출.</li>\n<li><strong>금액 기준</strong> — 임금상당액 + 위자료 성격 가산(통상 6~12개월치).</li>\n<li><strong>주의</strong> — 신청 안 하면 원직복직 명령만 나오고 금전 선택 기회 상실.</li>\n<li><strong>나이 고려</strong> — 63세 이후 실질 복직 어려운 경우 금전보상이 현실적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 금전보상명령은 근기법 제30조 제3항 — 근로자만 신청 가능.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 후 촉탁계약 갱신거절의 위법성',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 부당해고 구제신청을 할 당시 이미 정년에 이르거나 근로계약기간 만료 등의 사유로 근로관계가 종료했더라도, 금전보상·임금상당액 지급을 구할 법률상 이익이 있으면 구제이익이 존속한다고 판시했습니다. 정년 후 계약 종료 시점에도 구제신청 실익이 남습니다.',
        takeaway:
          '계약기간 종료를 이유로 구제신청을 포기하지 말고 3개월 안에 접수하세요.',
      },
    ],
    faq: [
      {
        question: '정년 후 1회만 재계약했는데도 갱신기대권이 인정되나요?',
        answer:
          '<strong>1회만으로는 약하지만 취업규칙·단체협약에 "정년 후 재고용 원칙"이 있으면 인정 가능합니다.</strong> 계약서에 "기간만료 시 원칙적으로 재계약" 같은 문구가 있으면 유리합니다.',
      },
      {
        question: '촉탁 시급이 정년 전보다 낮았는데 이게 불리한가요?',
        answer:
          '<strong>시급 차이는 갱신기대권 자체를 부정하는 사유가 아닙니다.</strong> 업무 동일성·반복 갱신 여부가 핵심이고, 임금은 차등 가능합니다.',
      },
      {
        question: '구제신청 3개월을 놓치면 완전히 끝인가요?',
        answer:
          '<strong>지노위 구제신청은 불가하지만 민사 해고무효확인의 소는 3년 내 가능합니다.</strong> 다만 입증 부담·비용이 늘어납니다.',
      },
      {
        question: '64세에 갱신 거절된 경우 실업급여는 되나요?',
        answer:
          '<strong>65세 이전 이직이면 수급 가능합니다.</strong> 이직확인서에 "계약기간 만료"로 기재되면 수급자격 인정이 쉽습니다.',
      },
      {
        question: '심문회의에서 어떤 증거가 가장 강력한가요?',
        answer:
          '<strong>과거 재계약 서면 이력과 "재고용 원칙"이 기재된 사내 공지·취업규칙 조항입니다.</strong> 갱신 실무가 확립되었음을 보여주는 기록이 결정적입니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '정년 강제 해고 구제', href: '/guide/dismissal/dismissal-retirement-age-forced' },
      { label: '촉탁직 재계약 관련 가이드', href: '/guide/dismissal/dismissal-post-retirement-rehire-rights' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '금전보상명령 신청', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
      { label: '기간제 갱신거절 다툼', href: '/guide/dismissal/dismissal-fixed-term-non-renewal-remedy' },
    ],
  },

  // ─── 2. dismissal / trial-period-termination-response ───
  {
    domain: 'dismissal',
    slug: 'dismissal-trial-period-termination-response',
    keyword: '시용기간 종료 통보 대응',
    questionKeyword: '시용(수습) 종료 통보 받았을 때 어떻게 대응하나요?',
    ctaKeyword: '시용 종료 해고 구제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '시용기간 종료 통보 대응 5단계 체크 | 로앤가이드',
      description:
        '시용(수습)기간 종료로 본채용 거부 통보를 받았다면 정식 해고 수준의 방어를 5단계로 준비하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"수습 3개월 끝났는데 본채용은 어렵다"는 한 마디에 짐을 싸야 하는 상황, 당황스럽습니다. 대법원은 시용 종료 후 본채용 거부도 해고의 일종이라고 보며 "합리적 이유"가 없으면 부당해고로 판단합니다. 정식 직원 해고보다 기준이 다소 완화될 뿐, 구제신청은 똑같이 가능합니다.</p>',
    sections: [
      {
        title: '시용 종료 본채용 거부 — 해고로 인정되는 이유',
        content:
          '<p><strong style="color:#1e3a5f">시용계약은 본채용을 전제로 한 근로계약이므로 거부는 해고에 해당합니다.</strong></p>\n<ul>\n<li><strong>법적 성질</strong> — "해약권 유보부 근로계약"으로 근로계약 관계 이미 성립.</li>\n<li><strong>해고 기준 완화</strong> — 적격성 판단은 정직원보다 기준 완화되나 자의 금지.</li>\n<li><strong>서면 통지 의무</strong> — 근기법 제27조 — 시용도 서면 해고통지서 필수.</li>\n<li><strong>구제신청 가능</strong> — 통보일로부터 3개월 이내 지노위.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "수습이니까 마음대로 자를 수 있다"는 회사 주장은 법적으로 틀립니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 당일부터 72시간 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">감정보다 증거와 서면 기록 확보가 우선입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통지서 원본 확보</strong> — 구두 통보면 "서면 사유 서면 교부 요청서"를 즉시 발송.</li>\n<li><strong>2단계 — 평가 근거 공개 요구</strong> — 본채용 거부 사유의 구체성·객관성 확인.</li>\n<li><strong>3단계 — 동기 비교</strong> — 같은 시기 입사 동료의 본채용 여부·평가 기준 확인.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 3개월 이내. 온라인(노사누리) 또는 방문.</li>\n<li><strong>5단계 — 실업급여 신청</strong> — 이직확인서에 "본채용 거부"로 명시하면 수급 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본채용 거부 사유의 합리성과 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '평가 사유 — 어떤 주장이 부당한가',
        content:
          '<p><strong style="color:#1e3a5f">추상적·주관적 사유는 합리적 이유로 인정되지 않습니다.</strong></p>\n<ul>\n<li><strong>부당 사유</strong> — "조직 적응 부족", "분위기가 안 맞음" 등 계량 불가 사유.</li>\n<li><strong>정당 사유</strong> — 업무 지시 수회 불이행 + 개선 기회 부여 + 객관 평가표.</li>\n<li><strong>평가 기록 부재</strong> — 본채용 거부 근거인 평가서가 없으면 합리성 부정 가능.</li>\n<li><strong>서류 미비</strong> — 시용계약서에 평가 기준·평가자가 명시돼야 유효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평가자와의 면담 녹취·개선 지시 메일이 있으면 부당성 입증에 크게 도움됩니다.</blockquote>',
      },
      {
        title: '실무 체크 — 자주 놓치는 포인트',
        content:
          '<p><strong style="color:#1e3a5f">시용계약서 문구 하나가 결과를 바꿀 수 있습니다.</strong></p>\n<ul>\n<li><strong>근속 기간 포함</strong> — 시용기간도 근속에 포함 — 1년 넘으면 퇴직금 발생.</li>\n<li><strong>연장 무효</strong> — "3개월 더 연장"이 일방적이면 무효, 근로자 동의 필수.</li>\n<li><strong>해고예고수당</strong> — 시용 3개월 초과면 해고예고(30일 전) 또는 수당 지급 의무.</li>\n<li><strong>최저임금</strong> — 수습 3개월까지만 최저임금 90% 감액 가능, 이후 100% 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 계약서에 "수습 3개월 후 평가 미달 시 자동 퇴사"라고 써도 근기법 위반이라 무효입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 종료 본채용 거부의 제한',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급한 경우에도 근로자가 금전보상명령을 받을 구제이익이 남을 수 있다고 판시했습니다. 시용 본채용 거부 역시 해고로 보아 구제절차를 거쳐야 합니다.',
        takeaway:
          '시용 종료 통보도 해고로 보고 3개월 구제신청 기한 안에 접수하세요.',
      },
    ],
    faq: [
      {
        question: '시용기간 중 해고와 종료 후 본채용 거부는 뭐가 다른가요?',
        answer:
          '<strong>법적 성질은 모두 해고지만, 기간 중 해고는 기준이 다소 완화됩니다.</strong> 둘 다 서면 통지·합리적 이유 요건이 적용됩니다.',
      },
      {
        question: '시용 중 3개월 미만이라 해고예고수당을 못 받나요?',
        answer:
          '<strong>근로 3개월 미만이면 해고예고 의무 자체가 면제되지만, 서면 통지·합리성 요건은 유지됩니다.</strong> 즉 구제신청은 가능합니다.',
      },
      {
        question: '수습 기간에 4대보험 미가입이면 실업급여 불가인가요?',
        answer:
          '<strong>180일 합산 피보험단위기간 확인이 먼저입니다.</strong> 이전 직장 이력과 합산 가능하며, 미가입은 고용센터에 소급 가입 요청하세요.',
      },
      {
        question: '시용계약서에 연장 조항이 있으면 연장해도 되나요?',
        answer:
          '<strong>근로자 서면 동의가 있어야 유효합니다.</strong> 통보만으로 연장한 경우 무효이며 정규직 전환 주장 가능합니다.',
      },
      {
        question: '본채용 거부 사유가 "태도 불량"이면 다툴 수 있나요?',
        answer:
          '<strong>구체 사례·개선 기회 부여 여부를 따져봐야 합니다.</strong> 평가표·경고장 없이 "태도 불량"만 내세우면 합리성 부정될 가능성이 큽니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '수습 해고 정당성 판단', href: '/guide/dismissal/probation-dismissal-legality' },
      { label: '수습 해고 불인정 사례', href: '/guide/dismissal/probation-dismissal-unfair-recognition-cases' },
      { label: '수습 기간 연장 적법성', href: '/guide/dismissal/dismissal-probation-extension-legality' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '저성과자 방어 전략', href: '/guide/dismissal/dismissal-low-performance-defense' },
    ],
  },

  // ─── 3. dismissal / single-violation-disciplinary-fire ───
  {
    domain: 'dismissal',
    slug: 'dismissal-single-violation-disciplinary-fire',
    keyword: '사규 위반 1회 해고 정당성',
    questionKeyword: '단 한 번 사규 위반했는데 바로 해고되는 게 맞나요?',
    ctaKeyword: '사규 위반 해고 정당성 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '사규 위반 1회 해고 정당성 판단 4가지 기준 | 로앤가이드',
      description:
        '단 한 번의 사규 위반으로 바로 해고 통보를 받았다면 징계 비례원칙과 양정 과잉 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>지각 한 번, 경비 오남용 한 번, SNS 글 한 번 때문에 곧바로 해고 통보를 받으면 "이게 말이 되나" 싶습니다. 판례는 "징계는 비위 행위에 비례해야 한다"는 비례원칙을 일관되게 적용하며, 단 1회 위반에 최고 수위인 해고를 가하려면 그 비위가 기업 질서 붕괴 수준이어야 한다고 봅니다.</p>',
    sections: [
      {
        title: '4가지 기준 — 단 1회 위반에 해고가 정당한가',
        content:
          '<p><strong style="color:#1e3a5f">비위의 중대성·고의성·피해 규모·개선 가능성을 종합 판단합니다.</strong></p>\n<ul>\n<li><strong>중대성</strong> — 횡령·성희롱·폭력 등 사회통념상 용인 불가 행위인가.</li>\n<li><strong>고의성</strong> — 과실인가 고의·악의적 반복인가.</li>\n<li><strong>피해 규모</strong> — 회사·동료에 미친 실질적 손해액·업무 지장.</li>\n<li><strong>개선 가능성</strong> — 경고·감봉 등 경한 징계로 교정 가능한지 여부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4개 모두 해고 수준이 아니면 "양정 과잉"으로 무효가 될 수 있습니다.</blockquote>',
      },
      {
        title: '양정 과잉 다툼 — 취업규칙 대조부터',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙 징계 조항과 과거 유사 사례 양정을 비교합니다.</strong></p>\n<ul>\n<li><strong>취업규칙 징계 기준</strong> — "경고·견책·감봉·정직·해고" 단계 중 해당 행위가 어디에 속하는지.</li>\n<li><strong>선례 비교</strong> — 같은 행위로 타 직원이 경고만 받은 사례가 있으면 형평성 부정.</li>\n<li><strong>전과 없음</strong> — 과거 징계 이력 없이 1회로 해고는 비례원칙 위반 가능성.</li>\n<li><strong>근거 판례</strong> — 대법원 2018두51352 "징계는 사회통념상 현저히 타당성 잃지 않아야".</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 양정 과잉 여부와 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '징계 절차 하자 — 절차만 틀려도 무효',
        content:
          '<p><strong style="color:#1e3a5f">실체가 정당해도 절차가 빠지면 해고 자체가 무효입니다.</strong></p>\n<ul>\n<li><strong>징계위원회 미개최</strong> — 취업규칙에 징계위 규정이 있는데 생략하면 무효.</li>\n<li><strong>소명 기회 미부여</strong> — 징계 대상자에 서면 소명 기회 3~5일 부여 필수.</li>\n<li><strong>사전 통지 부족</strong> — 징계 사유·일시를 상당 기간 전 서면 통지.</li>\n<li><strong>위원 구성</strong> — 인사담당 외 노조·근로자 대표 참여 규정 있으면 준수해야.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고통지서에 "징계위 개최"만 써 있고 실제 회의록이 없으면 절차 하자 입증 가능합니다.</blockquote>',
      },
      {
        title: '방어 전략 — 소명·구제 동시 준비',
        content:
          '<p><strong style="color:#1e3a5f">징계위 소명 단계부터 구제신청을 염두에 두고 증거를 남기세요.</strong></p>\n<ul>\n<li><strong>소명서 작성</strong> — 사실관계 + 경위 + 반성(있다면) + 양정 과잉 주장.</li>\n<li><strong>탄원서</strong> — 동료·상사 탄원서 3~5건 첨부 시 감경 효과.</li>\n<li><strong>증거 녹취</strong> — 징계위 발언·질문을 녹음(본인 참여 녹음은 합법).</li>\n<li><strong>3개월 기한</strong> — 해고 통보일부터 지노위 신청 3개월 엄수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소명서에 사실관계를 거짓 기재하면 별개 징계 사유가 될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 지각 과다 해고의 양정 과잉 판단',
        summary:
          '서울행법 2024구합52434 사건(서울행법, 2025.04.18 선고)에서 법원은 단체협약·사규 위반과 관련된 징계 양정이 사회통념상 현저히 타당성을 잃었는지는 비위 내용·회사 피해·개선 가능성을 종합해 판단해야 한다고 판시했습니다. 단 1회 위반에 최고 수위 해고는 사회통념에 어긋날 수 있습니다.',
        takeaway:
          '1회 위반만으로 해고된 경우 비례원칙·절차 하자 두 축으로 다투세요.',
      },
    ],
    faq: [
      {
        question: '횡령 10만원도 단 1회면 해고 부당인가요?',
        answer:
          '<strong>금액 소액이고 초범이면 양정 과잉으로 판단될 수 있습니다.</strong> 판례는 액수 외에 고의·은폐 여부·개선 가능성을 함께 봅니다.',
      },
      {
        question: '취업규칙에 "1회 위반 시 해고"라고 써 있어도 다툴 수 있나요?',
        answer:
          '<strong>네, 비례원칙 위반으로 다툴 수 있습니다.</strong> 취업규칙 문구가 근기법 제23조 "정당한 이유" 기준을 우회할 수는 없습니다.',
      },
      {
        question: '성희롱 신고 1건으로 해고됐는데 신고가 왜곡된 경우는요?',
        answer:
          '<strong>조사보고서 공개·소명 기회 확보가 먼저입니다.</strong> 사실관계 자체를 다툰다면 구제신청 + 별도 민사 명예훼손 대응이 가능합니다.',
      },
      {
        question: '회사 대외 비밀을 SNS에 올린 1회 해고는 정당한가요?',
        answer:
          '<strong>비밀의 중요도·공개 범위·회사 손해 크기가 관건입니다.</strong> 미확인 정보거나 손해가 제한적이면 감봉 수준이 비례적일 수 있습니다.',
      },
      {
        question: '징계위에서 소명했는데 같은 결론이 나오면 의미 있나요?',
        answer:
          '<strong>의미 있습니다.</strong> 소명 기록이 지노위 심문에서 "절차는 거쳤지만 양정 과잉"이라는 주장 근거로 직결됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '징계 과잉 해고 구제', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '징계위원회 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '반복 지각 징계 정당성', href: '/guide/dismissal/dismissal-tardiness-repeated-discipline' },
      { label: '결근 규정 과잉 처벌', href: '/guide/dismissal/dismissal-absence-rule-excessive-punishment' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 4. dismissal / unilateral-role-change-then-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-unilateral-role-change-then-fired',
    keyword: '본인 동의 없는 직무 전환 해고',
    questionKeyword: '직무 바꾸라고 해서 못하겠다 했더니 해고됐는데요?',
    ctaKeyword: '강제 직무 전환 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '본인 동의 없는 직무 전환 후 해고 대응 4단계 | 로앤가이드',
      description:
        '회사가 동의 없이 직무를 바꾸고 이어서 근태 불량을 이유로 해고했다면 전환 무효·해고 부당성 동시 다툼 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"다음 주부터 물류창고로 이동하라"는 통보를 받고 거절했더니 무단결근 처리 후 해고된 경우, 많은 분들이 "내가 안 나간 게 잘못인가?" 자책합니다. 하지만 근로계약의 본질적 내용(직무·근무장소·임금)을 변경하려면 근로자 동의가 원칙입니다. 전환 자체가 무효라면 이어지는 해고도 연쇄로 무효가 될 수 있습니다.</p>',
    sections: [
      {
        title: '직무 전환 효력 — 동의 필요한 경우와 예외',
        content:
          '<p><strong style="color:#1e3a5f">직무·근무지 변경이 근로계약 본질에 해당하면 개별 동의 필수입니다.</strong></p>\n<ul>\n<li><strong>원칙 — 개별 동의</strong> — 계약서에 직무·장소가 특정됐으면 변경 시 동의 필요.</li>\n<li><strong>예외 — 포괄 조항</strong> — "업무상 필요 시 전환 가능" 조항이 있어도 업무상 필요성·근로자 생활상 불이익 비교 필수.</li>\n<li><strong>판단 기준</strong> — 대법원 2013다1921 "업무상 필요성 vs 불이익 비교형량".</li>\n<li><strong>임금 불이익</strong> — 전환으로 임금 10% 이상 감소면 본질적 변경으로 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "창고로 가라"가 원래 사무직 계약의 본질을 흔들면 그 지시 자체가 무효일 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 거절 시점부터 해고까지',
        content:
          '<p><strong style="color:#1e3a5f">거절을 "무단결근"으로 몰지 못하도록 기록을 남기세요.</strong></p>\n<ol>\n<li><strong>1단계 — 서면 이의</strong> — 전환 지시 받은 즉시 "계약 본질 변경, 동의 유보" 공문 송부.</li>\n<li><strong>2단계 — 기존 근무지 출근</strong> — 전환 수용 전까지 원래 자리 출근 기록 유지.</li>\n<li><strong>3단계 — 해고 통보 받으면</strong> — 서면 해고통지서 요구 + 3개월 내 지노위 구제신청.</li>\n<li><strong>4단계 — 이중 주장</strong> — ① 전환 무효 → ② 전환 불응은 정당 → ③ 해고도 무효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 전환 무효·해고 부당성 이중 주장 전략을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '업무상 필요성 vs 생활상 불이익 — 비교형량',
        content:
          '<p><strong style="color:#1e3a5f">회사가 업무상 필요성을 입증해도 근로자 불이익이 크면 전환이 무효입니다.</strong></p>\n<ul>\n<li><strong>임금 감소</strong> — 기본급·수당 10% 이상 감소면 불이익 큼.</li>\n<li><strong>통근 악화</strong> — 편도 1시간 이상 증가하면 생활상 불이익 인정.</li>\n<li><strong>직무 격차</strong> — 사무직 → 단순 노무는 경력 단절·경력 평가에서 불리.</li>\n<li><strong>협의 부재</strong> — 사전 협의 없이 일방 통보면 신의칙 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출퇴근 앱 기록, 급여명세서 비교표, 직무기술서 차이 등으로 불이익을 수치화하세요.</blockquote>',
      },
      {
        title: '실무 팁 — 전환 수용 불가피한 경우',
        content:
          '<p><strong style="color:#1e3a5f">현실적으로 해고를 피하려면 "조건부 수용"으로 시간을 버는 전략도 있습니다.</strong></p>\n<ul>\n<li><strong>조건부 수용</strong> — "일시적 협력, 임금 감액 불수용, 본 직무 복귀 확약 조건".</li>\n<li><strong>서면 유보</strong> — 이메일·공문으로 "동의 아닌 협조" 명시 → 후일 다툼 근거.</li>\n<li><strong>노조·근로자대표</strong> — 집단적 전환이면 협의 상대 확인.</li>\n<li><strong>퇴직 유도 거부</strong> — "적응 못 하면 알아서 나가라"는 말은 사직 강요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 서면 유보 없이 출근하면 "묵시적 동의"로 해석될 수 있으니 문서 기록이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전직 명령의 정당성 판단 기준',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로기준법상 근로자성과 사용자의 지휘·감독 관계를 판단할 때 업무 내용·장소·시간·보수 등 실질적 종속성을 종합 고려해야 한다고 판시했습니다. 일방적 전환 명령의 유효성도 업무상 필요성과 생활상 불이익을 비교형량해 실질 판단합니다.',
        takeaway:
          '전환 명령 수용 전에 불이익을 수치화하고 서면 이의를 남기세요.',
      },
    ],
    faq: [
      {
        question: '계약서에 "업무상 필요 시 전환 가능" 있으면 무조건 따라야 하나요?',
        answer:
          '<strong>아니요, 업무상 필요성과 불이익 비교가 적용됩니다.</strong> 포괄 조항이 있어도 본질적 불이익이 크면 무효가 될 수 있습니다.',
      },
      {
        question: '전환 거부로 무단결근 처리됐는데 이걸 사유로 해고된 경우는요?',
        answer:
          '<strong>전환 자체가 무효면 불응은 무단결근이 아닙니다.</strong> 해고 사유 자체가 성립하지 않아 부당해고 주장이 가능합니다.',
      },
      {
        question: '전환 후 1주일 출근하다 그만두면 동의로 간주되나요?',
        answer:
          '<strong>서면으로 "유보" 의사를 남기지 않으면 묵시적 동의로 해석될 위험이 있습니다.</strong> 출근 중이라도 이메일·메시지로 이의 기록을 남기세요.',
      },
      {
        question: '지방 발령인데 가족 사정으로 이동 불가하면 거부 근거 되나요?',
        answer:
          '<strong>생활상 불이익의 중요 근거가 됩니다.</strong> 자녀 학교·배우자 직장·부양 가족 등 구체 사정을 서면 제출하세요.',
      },
      {
        question: '전환 수당 지급한다고 해도 다툴 수 있나요?',
        answer:
          '<strong>수당은 불이익 상쇄 요소지만 절대적 합법 사유는 아닙니다.</strong> 본질적 직무 변경·경력 단절 문제는 수당만으로 해소되지 않습니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '전보·강등 구성적 해고', href: '/guide/dismissal/dismissal-transfer-demotion-constructive' },
      { label: '원거리 전근 거부 해고', href: '/guide/dismissal/dismissal-relocation-refused-then-fired' },
      { label: '구성적 해고 인정 기준', href: '/guide/dismissal/dismissal-transfer-demotion-constructive' },
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '저성과자 방어 전략', href: '/guide/dismissal/dismissal-low-performance-defense' },
    ],
  },

  // ─── 5. dismissal / salary-negotiation-breakdown-forced-quit ───
  {
    domain: 'dismissal',
    slug: 'dismissal-salary-negotiation-breakdown-forced-quit',
    keyword: '연봉 협상 결렬 사실상 해고',
    questionKeyword: '연봉 협상 거절했더니 회사가 "그럼 나가라"는데요?',
    ctaKeyword: '연봉 협상 결렬 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '연봉 협상 결렬 사실상 해고 대응 4가지 | 로앤가이드',
      description:
        '연봉 인상 거절·감액 수용 거부 후 회사가 퇴사를 종용하며 사실상 해고했다면 구성적 해고 입증 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"이 조건 싫으면 나가도 돼"라는 연봉 협상 자리의 한 마디에 이튿날부터 책상이 빠져 있고, 업무에서 배제되고, 결국 사직서를 강요받는 상황이 있습니다. 자발적 퇴사처럼 보여도 실질은 회사의 일방적 해고인 "구성적 해고(간주 해고)" 가능성이 있습니다.</p>',
    sections: [
      {
        title: '구성적 해고 — 형식은 사직, 실질은 해고',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 사직서를 썼더라도 실질적으로 회사 강요·압박이 있었다면 해고로 봅니다.</strong></p>\n<ul>\n<li><strong>사직 강요 정황</strong> — 업무 배제·공개 모욕·대기발령·면담 압박.</li>\n<li><strong>임금 감액 요구</strong> — 전년 대비 감액 제시 후 거절 시 "못하면 나가라".</li>\n<li><strong>근거 법리</strong> — 대법원 2019다271661 "사실상 해고에 해당하면 해고 법리 적용".</li>\n<li><strong>핵심 기준</strong> — 사직의 자발성·진의성 부정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사직서를 썼어도 작성 경위와 직전 상황이 강요였다면 해고로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '증거 확보 — 협상 자리 + 직후 조치',
        content:
          '<p><strong style="color:#1e3a5f">협상 자리의 발언과 직후 회사의 조치가 맞물려야 사실상 해고 입증이 쉽습니다.</strong></p>\n<ul>\n<li><strong>협상 녹취</strong> — "거절 시 사직" 류 발언 녹음(본인 참여 녹음 합법).</li>\n<li><strong>이메일·메신저</strong> — "협상 실패 시 퇴사 권고" 또는 업무 배제 지시 기록.</li>\n<li><strong>타임라인</strong> — 협상일·업무 배제일·사직 종용일·사직서 작성일.</li>\n<li><strong>사직서 문구</strong> — "자발적 사직" vs "회사 요청에 따라 사직" 구분 중요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 구성적 해고 입증 포인트를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '연봉 감액 수용 거부 — 법적 선택지',
        content:
          '<p><strong style="color:#1e3a5f">원칙적으로 근로자 동의 없는 임금 감액은 무효입니다.</strong></p>\n<ul>\n<li><strong>개별 동의 원칙</strong> — 근로계약의 본질적 조건이므로 개별 서면 동의 필수.</li>\n<li><strong>거부 시 효과</strong> — 기존 계약 유지, 회사가 감액하면 임금체불.</li>\n<li><strong>취업규칙 불이익 변경</strong> — 집단적 감액은 과반수 동의 필요(근기법 제94조).</li>\n<li><strong>실업급여 연관</strong> — 임금 10% 이상 감액 후 퇴사면 자발적 퇴사여도 수급 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 감액 동의서 서명 전에 반드시 법률 상담을 받아보세요. 일단 서명하면 뒤집기 어렵습니다.</blockquote>',
      },
      {
        title: '구제 절차 — 해고로 다툴 때',
        content:
          '<p><strong style="color:#1e3a5f">사직서 제출일이 아닌 "사직 강요 개시일"이 해고 기준일입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 사직 철회</strong> — 가능하면 사직 수리 전에 철회 의사 서면 통지.</li>\n<li><strong>2단계 — 구제신청</strong> — 해고일(사직 강요 개시 or 사직 효력일) 3개월 이내 지노위.</li>\n<li><strong>3단계 — 진의성 부정 증명</strong> — 녹취·이메일·업무 배제 기록 제출.</li>\n<li><strong>4단계 — 민사 병행</strong> — 해고무효 + 임금청구(상당액) 동시 제기 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사직서에 "회사 권유로 사직" 문구가 있으면 유리하지만, "자발적 사직"으로 썼어도 녹취가 뒷받침되면 뒤집을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직 강요 해당 여부 판단',
        summary:
          '대법원 2023두41864 사건(대법원, 2025.04.03 선고)에서 법원은 복수의 행위 사이에 부당노동행위 의사의 단일성과 동일성이 인정될 경우 구제신청 기간 기산점도 달리 볼 수 있다고 판시했습니다. 연봉 협상 자리의 강요 발언과 직후 업무 배제·사직 종용이 이어진 경우 해고 시점은 사직서 작성일보다 앞당겨질 수 있습니다.',
        takeaway:
          '사직 강요 개시일을 기준으로 3개월 구제신청 기한을 계산하세요.',
      },
    ],
    faq: [
      {
        question: '사직서를 이미 제출했는데 뒤집을 수 있나요?',
        answer:
          '<strong>진의성 부정 입증이 핵심입니다.</strong> 강요·압박 정황 녹취·이메일·타임라인이 있으면 가능합니다.',
      },
      {
        question: '연봉 10% 감액 요구하면 자진퇴사해도 실업급여 되나요?',
        answer:
          '<strong>임금 10% 이상 감액 통보 후 이직은 고용보험법상 정당한 이직 사유입니다.</strong> 감액 통보서·협상 기록을 보관하세요.',
      },
      {
        question: '협상에서 "싫으면 관두라" 했는데 이게 해고 통보인가요?',
        answer:
          '<strong>그 자리에선 해고가 아니지만, 직후 업무 배제·사직 종용이 이어지면 사실상 해고로 평가됩니다.</strong> 즉시 녹취·이메일 증거 확보가 중요합니다.',
      },
      {
        question: '감액 동의서에 서명했으면 끝인가요?',
        answer:
          '<strong>동의서 서명 자체가 강요된 경우 무효 주장 가능합니다.</strong> 다만 강요 입증 책임은 근로자에게 있어 쉽지는 않습니다.',
      },
      {
        question: '구제신청 기한은 사직서 제출일 기준인가요?',
        answer:
          '<strong>사직 강요 개시일 또는 사직 효력일 중 근로자에게 유리한 시점으로 다툴 수 있습니다.</strong> 최대한 빨리 접수하는 것이 안전합니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '권고사직 함정 대응', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '구성적 해고 인정 사례', href: '/guide/dismissal/dismissal-transfer-demotion-constructive' },
      { label: '임금삭감 자진퇴사 수급', href: '/guide/unemployment/unemployment-wage-cut-10percent-quit' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 6. wage / payslip-nondelivery-report ───
  {
    domain: 'wage',
    slug: 'wage-payslip-nondelivery-report',
    keyword: '임금명세서 미교부 신고',
    questionKeyword: '임금명세서를 안 주는데 신고할 수 있나요?',
    ctaKeyword: '임금명세서 미교부 신고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금명세서 미교부 신고 절차 3단계 | 로앤가이드',
      description:
        '매달 임금명세서를 받지 못했다면 근로기준법 제48조 위반 신고 절차와 과태료 500만원 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"우리 회사는 원래 명세서 안 줘요"라는 말을 수습 때부터 듣고 그대로 몇 년을 보낸 분들이 많습니다. 그러나 2021년 근로기준법 개정으로 임금명세서 교부는 사업장 규모와 관계없이 의무가 되었고, 위반 시 근로자 1명당 과태료 500만원까지 부과됩니다.</p>',
    sections: [
      {
        title: '임금명세서 교부 의무 — 사업장 규모 무관',
        content:
          '<p><strong style="color:#1e3a5f">근기법 제48조 제2항은 모든 사업장에 명세서 교부를 강제합니다.</strong></p>\n<ul>\n<li><strong>필수 기재사항</strong> — 근로자 정보·임금 구성항목·계산방법·공제내역·지급일·지급액.</li>\n<li><strong>교부 방식</strong> — 서면·전자문서(카톡·이메일·앱) 모두 가능.</li>\n<li><strong>시행일</strong> — 2021.11.19부터 5인 미만 사업장 포함 전면 시행.</li>\n<li><strong>위반 시</strong> — 근기법 제116조 제2항 — 500만원 이하 과태료(1인당).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "우리 회사는 소규모라 안 준다"는 변명은 법적 근거가 없습니다.</blockquote>',
      },
      {
        title: '3단계 신고 절차 — 사업장 → 고용노동부 → 과태료',
        content:
          '<p><strong style="color:#1e3a5f">내부 요구 후에도 미교부 시 관할 고용노동지청에 신고 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 서면 요구</strong> — 인사팀·사장에게 "명세서 교부 요구" 이메일·공문 발송.</li>\n<li><strong>2단계 — 관할 지청 신고</strong> — 노동청 홈페이지 또는 방문, 근기법 제48조 위반 진정.</li>\n<li><strong>3단계 — 조사·과태료 부과</strong> — 근로감독관 조사 후 과태료 부과.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 명세서 미교부 신고 절차와 병행 청구를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '병행 점검 — 임금 미지급·4대보험 누락 확인',
        content:
          '<p><strong style="color:#1e3a5f">명세서 미교부는 임금체불·4대보험 미가입을 감추는 수단일 때가 많습니다.</strong></p>\n<ul>\n<li><strong>급여 입금내역 vs 계약서</strong> — 은행 입금액과 계약서상 임금 비교.</li>\n<li><strong>연장·야간·휴일수당</strong> — 실근무시간 기록 있으면 미지급분 청구.</li>\n<li><strong>국민연금·건강보험</strong> — 납부 이력 홈택스·건보공단에서 확인.</li>\n<li><strong>공제내역 불투명</strong> — 세금·4대보험 공제액의 근거 요구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명세서 미교부 진정 + 임금체불 진정 병합 신청이 효율적입니다.</blockquote>',
      },
      {
        title: '재직 중 신고 — 불이익 대응',
        content:
          '<p><strong style="color:#1e3a5f">신고 후 보복 조치가 있으면 별개로 부당해고·불법행위로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>근기법 제104조</strong> — 근로자의 감독관 신고를 이유로 한 불이익 처분 금지.</li>\n<li><strong>위반 시</strong> — 3년 이하 징역 또는 3천만원 이하 벌금.</li>\n<li><strong>익명 진정 불가</strong> — 실명 진정만 조사 대상이나 진정인 정보 회사에 직접 전달 안 됨.</li>\n<li><strong>퇴사 후도 가능</strong> — 퇴사 후 3년 내 진정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보복성 해고·감봉이 있으면 3개월 내 지노위 구제신청과 별도로 근기법 제104조 형사 고소도 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 관행과 계약 해석',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업 내부에 존재하는 특정 관행이 근로계약 내용을 이루는지 판단하려면 관행의 일반성·지속성·명확성·합리성을 종합 고려해야 하며, 평균임금 산정 기초가 되는 임금의 의미도 실질적으로 해석해야 한다고 판시했습니다. 명세서 미교부로 임금 구성이 불투명할 때도 실질 지급 내역이 중요합니다.',
        takeaway:
          '명세서가 없어도 입금 이력·업무 기록으로 임금 실체를 입증할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '명세서를 안 받으면 어떤 불이익이 있나요?',
        answer:
          '<strong>임금체불·수당 미지급이 있어도 즉시 확인이 어렵습니다.</strong> 회사의 공제 내역 오류도 놓치기 쉽고, 소송 시 입증 부담도 커집니다.',
      },
      {
        question: '카톡으로 총액만 보내주는데 이게 명세서인가요?',
        answer:
          '<strong>총액만으로는 불충분합니다.</strong> 구성항목·계산방법·공제내역이 모두 기재돼야 법적 요건을 충족합니다.',
      },
      {
        question: '과거 1년치를 지금 일괄 요구할 수 있나요?',
        answer:
          '<strong>근기법상 교부 의무는 지급 당시 기준입니다.</strong> 과거분도 요구 가능하고, 미교부로 인한 과태료는 각 월별로 부과 가능합니다.',
      },
      {
        question: '신고했더니 회사가 "퇴사하면 주겠다" 합니다?',
        answer:
          '<strong>법적으로 맞지 않습니다.</strong> 매월 임금 지급일에 교부 의무가 있고, 조건부 교부는 불법입니다.',
      },
      {
        question: '아르바이트·단시간 근로자도 받을 수 있나요?',
        answer:
          '<strong>네, 근로계약 형태와 무관하게 의무입니다.</strong> 주 15시간 미만이어도 동일하게 적용됩니다.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '최저임금 위반 진정 절차', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '퇴사 후 임금 진정 절차', href: '/guide/wage/post-resignation-wage-complaint-procedure' },
      { label: '포괄임금 수당 미지급', href: '/guide/wage/comprehensive-wage-overtime-response' },
      { label: '연차수당 미지급 대응', href: '/guide/wage/annual-leave-pay-unpaid-response' },
      { label: '4대보험 미가입 + 임금체불', href: '/guide/wage/no-social-insurance-wage-complaint-together' },
    ],
  },

  // ─── 7. wage / incentive-bonus-unpaid-claim ───
  {
    domain: 'wage',
    slug: 'wage-incentive-bonus-unpaid-claim',
    keyword: '인센티브 성과급 미지급 청구',
    questionKeyword: '계약한 인센티브·성과급이 안 나오는데 청구할 수 있나요?',
    ctaKeyword: '인센티브 성과급 청구 정리',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '인센티브·성과급 미지급 청구 4가지 입증 포인트 | 로앤가이드',
      description:
        '계약했거나 관행이었던 인센티브·성과급이 지급되지 않았다면 임금성 인정 요건과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>매출 목표를 달성해 인센티브를 기대했는데 "올해는 회사 사정이 어려워 지급이 어렵다"는 공지 한 장으로 끝나는 경우, 억울함만 남습니다. 인센티브·성과급이 "임금성"으로 인정되면 근로자는 청구권을 가지며, 미지급 시 임금체불로 신고·소송이 가능합니다.</p>',
    sections: [
      {
        title: '임금성 인정 요건 4가지',
        content:
          '<p><strong style="color:#1e3a5f">지급의무·계속성·정기성·일정 기준이 있으면 임금으로 인정됩니다.</strong></p>\n<ul>\n<li><strong>지급의무성</strong> — 계약·취업규칙·관행으로 회사가 지급할 의무를 부담.</li>\n<li><strong>계속성</strong> — 매년 또는 일정 주기로 반복 지급된 이력.</li>\n<li><strong>정기성</strong> — 지급 시점이 일정하거나 예측 가능.</li>\n<li><strong>일정 기준</strong> — 매출·평가·근속 등 객관적 지급 기준 존재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "회사 재량"이라고 써 있어도 관행화됐다면 임금성 인정 가능합니다.</blockquote>',
      },
      {
        title: '증빙 수집 — 계약·규정·관행',
        content:
          '<p><strong style="color:#1e3a5f">서면 근거가 없어도 과거 지급 내역이 관행을 입증합니다.</strong></p>\n<ul>\n<li><strong>근로계약서</strong> — "연간 인센티브 ○○% 지급" 문구.</li>\n<li><strong>취업규칙·성과급 규정</strong> — 산정 공식·지급 시기·대상.</li>\n<li><strong>과거 지급내역</strong> — 최근 3~5년 급여명세서·통장 입금 내역.</li>\n<li><strong>사내 공지·메일</strong> — "올해도 달성 시 지급" 등 사측 표명.</li>\n<li><strong>업계 관행</strong> — 동종 기업 유사 제도 비교 자료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임금성 입증 자료와 청구 전략을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 노동청 진정 vs 민사 소송',
        content:
          '<p><strong style="color:#1e3a5f">임금성 인정이 분명하면 노동청 진정, 애매하면 민사 소송이 유리합니다.</strong></p>\n<ul>\n<li><strong>노동청 진정</strong> — 임금성 인정 자료 명확할 때. 비용 없음, 조사 후 기소 가능.</li>\n<li><strong>민사 소송</strong> — 3천만원 이하면 소액사건 약식 진행 가능. 1년 내 종결 많음.</li>\n<li><strong>소멸시효 3년</strong> — 근기법 제49조 — 미지급일로부터 3년 내 청구.</li>\n<li><strong>지연이자</strong> — 퇴사 후 14일 경과 시 연 20% 지연이자 가산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재직 중 진정도 가능하지만 민사 소송은 퇴사 후가 실무상 더 편합니다.</blockquote>',
      },
      {
        title: '회사 주장 반박 — "재량" 항변 깨기',
        content:
          '<p><strong style="color:#1e3a5f">회사는 "재량이라 안 줘도 된다"지만 관행이 확립되면 재량성은 좁아집니다.</strong></p>\n<ul>\n<li><strong>3년 이상 지급</strong> — 3년 이상 정기 지급 관행이면 규범적 효력.</li>\n<li><strong>객관적 기준</strong> — 매출 ○○% 달성 시 ○○원 같은 계량 기준 있으면 재량 배제.</li>\n<li><strong>일률 지급</strong> — 전 직원 또는 기준 충족자 모두에 지급되면 재량 약화.</li>\n<li><strong>근거 판례</strong> — 대법원 2013다60807 "성과급도 계속·정기·지급의무 갖추면 임금".</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "올해는 손실이라 미지급"만 주장해도 관행상 지급 의무가 있으면 임금체불입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과급의 임금성 인정 기준',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정 기초가 되는 임금의 의미와, 어떤 금품이 근로 대가로 지급된 것인지는 그 명칭이 아니라 실질적 성격·지급 관행·지급의무성을 종합해 판단해야 한다고 판시했습니다. 재무성과와 연계된 성과급도 임금 성격을 가질 수 있습니다.',
        takeaway:
          '명칭이 인센티브여도 실질이 임금이면 미지급 시 체불로 청구 가능합니다.',
      },
    ],
    faq: [
      {
        question: '"회사 재량"이라고 명시된 인센티브도 청구 가능한가요?',
        answer:
          '<strong>관행이 확립되면 가능합니다.</strong> 3년 이상 매년 유사 기준으로 지급됐다면 재량 범위가 좁아집니다.',
      },
      {
        question: '매출 목표 달성했는데 "회사 적자라 못 준다"는 경우는요?',
        answer:
          '<strong>회사 손실과 인센티브 지급 의무는 별개입니다.</strong> 지급 기준이 매출·개인 성과면 회사 전체 손익과 무관합니다.',
      },
      {
        question: '퇴사 후 작년 인센티브 청구 가능한가요?',
        answer:
          '<strong>소멸시효 3년 내면 가능합니다.</strong> 퇴사일 기준 14일 지났으면 연 20% 지연이자도 가산됩니다.',
      },
      {
        question: '성과급 평가가 낮아 지급 제외됐는데 다툴 수 있나요?',
        answer:
          '<strong>평가 기준·절차의 공정성이 쟁점입니다.</strong> 다른 직원과 동일 실적에도 차별 지급되면 재량권 남용 주장 가능합니다.',
      },
      {
        question: '인센티브 계산식이 계약서에 없으면 포기해야 하나요?',
        answer:
          '<strong>과거 지급내역이 기준이 됩니다.</strong> 최근 3~5년 지급액·산정 근거를 모으면 평균적 지급 공식을 복원할 수 있습니다.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '퇴직금 성과급 포함 여부', href: '/guide/retirement/retirement-bonus-performance-included' },
      { label: '포괄임금 수당 미지급', href: '/guide/wage/comprehensive-wage-overtime-response' },
      { label: '퇴사 후 임금 진정', href: '/guide/wage/post-resignation-wage-complaint-procedure' },
      { label: '평균임금 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '임금체불 소액 소송', href: '/guide/wage/missing-cause-of-action-leads-to-dismissal' },
    ],
  },

  // ─── 8. wage / work-injury-hospitalization-pay-scope ───
  {
    domain: 'wage',
    slug: 'wage-work-injury-hospitalization-pay-scope',
    keyword: '업무 중 사고 입원 급여 지급',
    questionKeyword: '업무 중 사고로 입원했는데 회사가 급여를 줘야 하나요?',
    ctaKeyword: '산재 입원 급여 범위 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '업무 중 사고 입원 급여 지급 의무 범위 | 로앤가이드',
      description:
        '업무상 재해로 입원 중인데 회사가 급여를 중단했다면 산재 휴업급여와 회사 지급 의무 범위를 지금 확인하세요.',
    },
    intro:
      '<p>업무 중 다쳐 입원했는데 회사에서 "산재 처리하니 급여는 없다"며 월급이 중단되는 경우가 있습니다. 하지만 산재 휴업급여는 평균임금의 70%만 보전되고, 차액 30%는 회사의 근기법상 책임과는 별개의 문제입니다. 회사 책임·과실 여부에 따라 민사 손해배상도 함께 검토해야 합니다.</p>',
    sections: [
      {
        title: '산재 휴업급여 — 기본 보전',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제52조 — 요양 기간 중 평균임금의 70% 지급.</strong></p>\n<ul>\n<li><strong>지급 주체</strong> — 근로복지공단(회사 아님).</li>\n<li><strong>지급액</strong> — 1일 평균임금 × 70%.</li>\n<li><strong>지급 기간</strong> — 요양으로 취업 못 한 기간 전체.</li>\n<li><strong>상한</strong> — 최저임금의 100분의 100 보장 규정 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 산재 휴업급여는 기본 생활 보전일 뿐, 전체 손해 보전이 아닙니다.</blockquote>',
      },
      {
        title: '차액 30% — 회사 배상 책임 성립 조건',
        content:
          '<p><strong style="color:#1e3a5f">회사 과실·안전배려의무 위반이 있으면 차액도 손해배상으로 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>안전배려의무</strong> — 근기법·산안법상 사용자는 근로자 안전 확보 의무 부담.</li>\n<li><strong>과실 입증</strong> — 안전장비 미지급·작업환경 결함·지시 무리함 등.</li>\n<li><strong>청구 범위</strong> — 휴업급여 초과분 + 위자료 + 향후 일실수입.</li>\n<li><strong>공제 규정</strong> — 이미 받은 산재보험금은 손해배상액에서 공제.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 산재 휴업급여 + 회사 배상 청구 범위를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '산재 처리 전 — 회사가 직접 급여 줘야 하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">산재 신청 전 요양 기간·산재 불승인 시 회사의 근기법상 책임이 부각됩니다.</strong></p>\n<ul>\n<li><strong>산재 신청 전</strong> — 승인까지 2~4주, 그동안 무급이면 회사 교섭 여지.</li>\n<li><strong>산재 불승인</strong> — 업무 연관성 부정 시 회사 안전의무 위반 민사소송 전환.</li>\n<li><strong>근기법 제46조 휴업수당</strong> — 사용자 귀책사유 휴업 시 평균임금 70%.</li>\n<li><strong>유급병가 제도</strong> — 취업규칙·단체협약에 유급병가 조항 있으면 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업규칙·단체협약을 먼저 확인 — 유급병가·산재 보완 규정 있을 수 있습니다.</blockquote>',
      },
      {
        title: '주의점 — 해고·휴직 강요 방지',
        content:
          '<p><strong style="color:#1e3a5f">요양 기간 중 해고는 원칙적으로 금지됩니다.</strong></p>\n<ul>\n<li><strong>근기법 제23조 제2항</strong> — 산재 요양 기간 + 그 후 30일간 해고 금지.</li>\n<li><strong>위반 시</strong> — 5년 이하 징역 또는 5천만원 이하 벌금.</li>\n<li><strong>휴직 강요</strong> — 무급 휴직 강요는 휴업수당 지급 회피 시도일 수 있음.</li>\n<li><strong>복직 차별</strong> — 산재 복귀 후 직무 강등·임금 감액도 부당 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 요양 중 "권고사직서"에 서명하면 나중에 다투기 매우 어렵습니다. 절대 서명 전 상담 받으세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상 재해 평균임금 산정',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금에 어떤 금품이 포함되는지는 지급 명칭이 아니라 근로의 대가성·계속성·지급의무성으로 실질 판단해야 한다고 판시했습니다. 산재 휴업급여·손해배상 산정 시에도 성과급·각종 수당이 평균임금에 포함될 수 있습니다.',
        takeaway:
          '평균임금에 포함될 수당·성과급 항목을 꼼꼼히 정리해야 보전액이 늘어납니다.',
      },
    ],
    faq: [
      {
        question: '산재 처리 후 월급 70%만 받으면 끝인가요?',
        answer:
          '<strong>회사 과실이 있으면 차액 30% + 위자료를 별도 청구 가능합니다.</strong> 안전장비 미지급·작업환경 결함 증거를 모으세요.',
      },
      {
        question: '산재 신청 중이라 아직 급여가 안 나오는데 어떻게 해야 하나요?',
        answer:
          '<strong>회사에 근기법 제46조 휴업수당(평균임금 70%) 지급을 요구할 수 있습니다.</strong> 사용자 귀책 사정이 있다면 가능합니다.',
      },
      {
        question: '입원 중 회사가 "쉬는 동안 연차 차감한다"는데 맞나요?',
        answer:
          '<strong>산재 요양 기간은 연차 차감 대상이 아닙니다.</strong> 연차 일방 차감은 불법이며, 임금체불에 준합니다.',
      },
      {
        question: '산재 불승인 나면 회사에 청구 못 하나요?',
        answer:
          '<strong>불승인에도 재심사·행정소송이 가능하고, 별도로 민사 손해배상도 가능합니다.</strong> 업무 연관성이 있으면 끝까지 다투세요.',
      },
      {
        question: '회사 대표가 "치료비는 주지만 월급은 없다"는데요?',
        answer:
          '<strong>치료비와 휴업급여는 별개입니다.</strong> 산재보험 처리 안 한 상태면 회사가 둘 다 부담하거나 산재 신청을 해야 합니다.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연차수당 미지급 대응', href: '/guide/wage/annual-leave-pay-unpaid-response' },
      { label: '포괄임금 수당 미지급', href: '/guide/wage/comprehensive-wage-overtime-response' },
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '산재 복귀 후 해고', href: '/guide/dismissal/dismissal-sick-leave-return-fired' },
      { label: '요양 중 해고 금지', href: '/guide/dismissal/dismissal-during-sick-leave' },
    ],
  },

  // ─── 9. retirement / partial-payment-agreement-void-5reasons ───
  {
    domain: 'retirement',
    slug: 'retirement-partial-payment-agreement-void-5reasons',
    keyword: '퇴직금 분할 지급 합의 무효',
    questionKeyword: '퇴직금 3개월 분할 지급 합의서에 서명해도 되나요?',
    ctaKeyword: '퇴직금 분할 합의 무효 점검',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 분할 지급 합의 무효 사유 5가지 | 로앤가이드',
      description:
        '회사가 퇴직금을 3~6개월 분할로 나눠 주겠다며 서명을 요구한다면 해당 합의의 무효 사유 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직일이 다가오자 회사에서 "회사 사정이 어려우니 퇴직금 6개월 분할 지급에 동의해달라"는 합의서를 내미는 경우가 많습니다. 근기법상 퇴직금은 퇴직일로부터 14일 내 일시금 지급이 원칙입니다. 분할 합의는 형식상 유효해 보여도 무효가 되는 경우가 많습니다.</p>',
    sections: [
      {
        title: '무효 사유 5가지 — 서명 전 체크',
        content:
          '<p><strong style="color:#1e3a5f">근기법 제36조·근로자퇴직급여보장법 제9조는 강행규정입니다.</strong></p>\n<ul>\n<li><strong>① 14일 내 지급 원칙 위반</strong> — 퇴직일로부터 14일 경과 지급은 원칙 위반.</li>\n<li><strong>② 일시금 원칙</strong> — 퇴직급여법 제9조 — 일시금 지급이 원칙, 분할은 예외.</li>\n<li><strong>③ 강요·기망 하 동의</strong> — 퇴사 전 압박·"안 쓰면 퇴직금 없다"면 민법 제110조 기망.</li>\n<li><strong>④ 지연이자 포기 조항</strong> — 연 20% 지연이자(근기법 제37조) 포기 조항은 무효.</li>\n<li><strong>⑤ 개별 동의 결여</strong> — 취업규칙·단체협약에 없는 포괄 동의서 강제는 무효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분할 합의서에 서명했더라도 무효 사유 하나라도 있으면 전액 즉시 청구 가능합니다.</blockquote>',
      },
      {
        title: '서명 후라도 다투는 방법',
        content:
          '<p><strong style="color:#1e3a5f">이미 서명했어도 강요·기망·강행규정 위반이면 무효 주장 가능합니다.</strong></p>\n<ul>\n<li><strong>강요 증거</strong> — 서명 직전 면담 녹취·이메일·메신저.</li>\n<li><strong>기망 증거</strong> — "이달 내 지급 약속" 등 허위 진술 기록.</li>\n<li><strong>3년 소멸시효</strong> — 퇴직일부터 3년 내 청구 가능.</li>\n<li><strong>지연이자</strong> — 무효 확인 시 14일 경과분은 연 20% 지연이자 가산.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 분할 합의 무효 가능성과 즉시 청구 절차를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 노동청 vs 민사',
        content:
          '<p><strong style="color:#1e3a5f">분할 합의 무효 + 전액 즉시 청구 순서입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 서면 통지</strong> — 회사에 "합의 무효, 전액 지급 요구" 내용증명.</li>\n<li><strong>2단계 — 노동청 진정</strong> — 관할 지청 임금체불 진정, 퇴직금 미지급 근기법 제36조 위반.</li>\n<li><strong>3단계 — 지불지시·형사고발</strong> — 감독관 조사 후 지불지시, 미이행 시 형사 입건.</li>\n<li><strong>4단계 — 민사 병행</strong> — 지연이자·위자료 포함 청구는 민사 소액사건으로.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노동청 조사 중에도 민사 병행 가능 — 강제집행력 확보에 유리합니다.</blockquote>',
      },
      {
        title: '분할 합의 유효해지는 드문 경우',
        content:
          '<p><strong style="color:#1e3a5f">근로자 자발적 요청·명확한 이익·문서 확보 시에만 유효합니다.</strong></p>\n<ul>\n<li><strong>자발적 요청</strong> — 근로자가 세금 분산 등 이유로 먼저 제안.</li>\n<li><strong>명확한 이익</strong> — 분할 지급에 이자 가산 등 근로자 유리 조건.</li>\n<li><strong>서면 명시</strong> — 분할 횟수·금액·지급일을 구체 기재.</li>\n<li><strong>담보 확보</strong> — 대표 개인 연대보증·부동산 담보 등 미지급 대비책.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 담보 없이 3~6개월 분할에 동의하면 회사 도산 시 못 받을 위험이 큽니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 지급유예 합의의 효력',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자가 소멸시효 완성을 주장하는 것이 신의성실의 원칙에 반해 권리남용으로서 허용될 수 없는 경우가 있다고 판시했습니다. 퇴직금 분할 합의로 지급을 미룬 후 소멸시효 완성을 주장해도 신의칙 위반으로 배척될 수 있습니다.',
        takeaway:
          '분할 합의 후 회사가 시효 주장을 해도 신의칙으로 반박 가능합니다.',
      },
    ],
    faq: [
      {
        question: '이미 6개월 분할 합의서에 서명했는데 지금이라도 취소 가능한가요?',
        answer:
          '<strong>강요·기망·강행규정 위반 중 하나라도 해당하면 무효 주장 가능합니다.</strong> 서명 경위 증거(녹취·메일)가 있으면 유리합니다.',
      },
      {
        question: '회사가 "못 주면 파산한다" 해서 서명한 경우도 무효인가요?',
        answer:
          '<strong>경영 압박은 강요·기망 성립이 어렵지만 지연이자 포기 조항은 무효입니다.</strong> 원금은 받고 지연이자 청구는 별개로 가능합니다.',
      },
      {
        question: '분할 지급 도중 회사가 부도났는데 남은 금액은 어떻게 되나요?',
        answer:
          '<strong>임금채권 우선변제·체당금 제도를 활용하세요.</strong> 체당금은 최근 3년 임금·3년 퇴직금 중 상한 범위 보전합니다.',
      },
      {
        question: '임금 + 퇴직금을 한 번에 분할 합의한 경우는요?',
        answer:
          '<strong>임금채권·퇴직금채권 모두 강행규정이라 무효 사유가 더 강합니다.</strong> 전액 즉시 지급을 요구할 수 있습니다.',
      },
      {
        question: '소액이라 노동청 진정 꺼려지는데 다른 방법 있나요?',
        answer:
          '<strong>민사 지급명령 신청이 간편합니다.</strong> 서면만으로 진행, 2~3개월 내 강제집행권 확보 가능합니다.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 월급 분할 무효', href: '/guide/retirement/retirement-monthly-split-invalid' },
      { label: '퇴직금 할부 지급 무효', href: '/guide/retirement/retirement-installment-payment-invalid' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '회사 부도 퇴직금 체당금', href: '/guide/retirement/retirement-company-bankrupt-deposit' },
      { label: '퇴직금 청구 경로 비교', href: '/guide/retirement/retirement-claim-channel-comparison' },
    ],
  },

  // ─── 10. retirement / executive-cap-excess-tax-treatment ───
  {
    domain: 'retirement',
    slug: 'retirement-executive-cap-excess-tax-treatment',
    keyword: '임원 퇴직금 한도 초과 세무',
    questionKeyword: '임원 퇴직금이 한도 초과했는데 세금은 어떻게 되나요?',
    ctaKeyword: '임원 퇴직금 세무 점검',
    type: '수치기한형',
    perspective: 'neutral',
    meta: {
      title: '임원 퇴직금 한도 초과 시 세무 처리 3가지 | 로앤가이드',
      description:
        '임원 퇴직금이 정관·소득세법 한도를 초과할 때 손금불산입·근로소득 간주·가산세 처리 원칙을 지금 확인하세요.',
    },
    intro:
      '<p>임원 퇴임 시 정관과 주주총회 결의로 정한 퇴직금이 세법상 한도를 넘으면 "퇴직소득"이 아닌 "근로소득" 또는 "상여"로 재분류되며 세무상 불이익이 큽니다. 회사는 손금불산입, 임원은 근로소득세 추가 부담이라는 이중 부담이 발생해 사전 설계가 필수입니다.</p>',
    sections: [
      {
        title: '정관 한도 vs 소득세법 한도 — 2개 층위',
        content:
          '<p><strong style="color:#1e3a5f">정관 한도는 회사법, 소득세법 한도는 세법상 구분입니다.</strong></p>\n<ul>\n<li><strong>정관 한도</strong> — 상법 제388조 — 이사 보수·퇴직금은 정관 또는 주총 결의 필수.</li>\n<li><strong>소득세법 한도</strong> — 소득세법 제22조 — 근속연수·직급별 배수(평균임금 × 근속 × 배수).</li>\n<li><strong>한도 산식</strong> — 2020년 이후 최종 3년 평균급여 × 10% × 근속연수 × 2배.</li>\n<li><strong>초과분 처리</strong> — 근로소득(상여)으로 재분류.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정관 한도 없거나 주총 결의 없이 지급하면 지급 자체가 상법 위반입니다.</blockquote>',
      },
      {
        title: '한도 초과 시 3가지 불이익',
        content:
          '<p><strong style="color:#1e3a5f">회사·임원 모두 세무 부담이 급증합니다.</strong></p>\n<ul>\n<li><strong>① 손금불산입</strong> — 초과분은 법인세 비용 처리 불가, 법인세 증가.</li>\n<li><strong>② 근로소득세 재분류</strong> — 퇴직소득(저세율) → 근로소득(고세율)으로 변동.</li>\n<li><strong>③ 가산세</strong> — 신고 누락 시 10~40% 가산세, 납부지연가산세.</li>\n<li><strong>④ 대표자 상여 처분</strong> — 세무조사 시 대표자 상여로 소득처분 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 정관 한도·세법 한도 이중 점검을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사전 설계 포인트 — 정관 개정부터',
        content:
          '<p><strong style="color:#1e3a5f">퇴임 시점이 아닌 재직 초기에 정관을 정비해야 리스크가 줄어듭니다.</strong></p>\n<ul>\n<li><strong>정관 한도 명시</strong> — "근속 1년당 평균임금 × ○배" 등 구체 공식.</li>\n<li><strong>주총 결의</strong> — 매년 또는 정기적으로 한도·배수 승인.</li>\n<li><strong>근속연수 계산</strong> — 대표이사 기간 + 일반이사 기간 합산 가능 여부 확인.</li>\n<li><strong>세법 한도 시뮬레이션</strong> — 최종 3년 평균급여로 예상 한도 미리 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정관 한도가 세법 한도보다 작으면 지급액 자체를 줄여야 손금산입 가능.</blockquote>',
      },
      {
        title: '소송·분쟁 시 쟁점 — 주주총회 결의 유효성',
        content:
          '<p><strong style="color:#1e3a5f">주총 결의 하자가 있으면 퇴직금 지급 자체가 무효가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>결의 부존재</strong> — 주총 실제 개최되지 않았다면 지급 청구 불가.</li>\n<li><strong>결의 취소</strong> — 통지 누락·의결권 미보장 등은 취소 사유.</li>\n<li><strong>소수주주 반발</strong> — 과도한 한도 설정은 소수주주 대표소송 가능.</li>\n<li><strong>세무조사 리스크</strong> — 결의서 부재·형식 하자면 손금불산입 추징.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 1인 주주 회사도 주총 의사록은 반드시 작성·보관해야 세무 방어 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이사 보수·퇴직금과 주총 결의',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 상법 제388조가 강행규정이므로 주식회사 정관에서 이사의 보수에 관하여 주주총회 결의로 정한다고 규정한 경우 주총 결의 없이는 이사 보수·퇴직금 청구가 허용되지 않는다고 판시했습니다. 정관·주총 결의 요건을 갖추지 못하면 지급 자체가 무효입니다.',
        takeaway:
          '퇴직금 지급 전 반드시 정관·주주총회 결의 형식을 점검하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직금 한도 초과분은 언제 근로소득세가 부과되나요?',
        answer:
          '<strong>지급 시점에 근로소득으로 재분류돼 원천징수 대상이 됩니다.</strong> 과세관청이 사후에 경정할 수도 있습니다.',
      },
      {
        question: '정관 한도는 있는데 주총 결의만 없으면 어떻게 되나요?',
        answer:
          '<strong>지급 자체가 상법 위반으로 무효가 될 수 있습니다.</strong> 나중에 반환 청구 가능성도 있습니다.',
      },
      {
        question: '한도 초과분만 포기하고 한도 내만 받으면 문제 없나요?',
        answer:
          '<strong>네, 한도 내 지급은 정상적 퇴직소득 과세입니다.</strong> 다만 한도 산정식을 정확히 맞춰야 합니다.',
      },
      {
        question: '대표이사 겸 대주주인데 본인 퇴직금 한도를 마음대로 정해도 되나요?',
        answer:
          '<strong>법적으로는 정관·주총 결의 형식을 갖추면 가능하지만, 세무상 합리성 심사를 받게 됩니다.</strong> 동종업계·근속·직무 대비 과도하면 추징 리스크가 큽니다.',
      },
      {
        question: '법인세·소득세 외에 다른 세금도 있나요?',
        answer:
          '<strong>건강보험료·국민연금 정산 부담도 발생합니다.</strong> 근로소득 재분류 시 보험료가 추가 부과될 수 있습니다.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '임원 퇴직금 한도', href: '/guide/retirement/retirement-executive-severance-limit' },
      { label: '이사 승진 근속 계산', href: '/guide/retirement/retirement-director-promotion-continuous-service' },
      { label: '퇴직금 계산 종합', href: '/guide/retirement/retirement-comprehensive-calculation-formula' },
      { label: '성과급 포함 퇴직금', href: '/guide/retirement/retirement-bonus-performance-included' },
      { label: '평균임금 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
    ],
  },

  // ─── 11. unemployment / short-term-parttime-apply-window ───
  {
    domain: 'unemployment',
    slug: 'unemployment-short-term-parttime-apply-window',
    keyword: '단기 알바 실업급여 신청 기간',
    questionKeyword: '3개월 알바 끝났는데 실업급여 신청할 수 있나요?',
    ctaKeyword: '단기 알바 실업급여 신청 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '단기 알바 후 실업급여 신청 가능 기간 180일 | 로앤가이드',
      description:
        '3~6개월 단기 근무만 하고 끝났다면 피보험단위기간 180일 합산 기준과 신청 12개월 기한을 지금 확인하세요.',
    },
    intro:
      '<p>"알바라서 실업급여는 안 된다"는 말, 절반만 맞습니다. 주 15시간 이상, 고용보험 가입 일수 180일 이상이면 단기 근로자도 실업급여 수급 대상입니다. 특히 여러 사업장 합산 가능성과 12개월 수급 기한이 핵심입니다.</p>',
    sections: [
      {
        title: '피보험단위기간 180일 — 합산 규칙',
        content:
          '<p><strong style="color:#1e3a5f">최종 이직일 이전 18개월 동안 고용보험 가입 일수 180일 이상이면 신청 가능합니다.</strong></p>\n<ul>\n<li><strong>산정 기간</strong> — 최종 이직일 이전 18개월(1년 6개월) 안에 180일.</li>\n<li><strong>합산 방식</strong> — 여러 사업장 근무분 모두 합산.</li>\n<li><strong>단위기간 계산</strong> — 유급 근로일(주휴일 포함, 무급휴일 제외).</li>\n<li><strong>근거 조항</strong> — 고용보험법 제40조 제1항 제1호.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주 15시간 미만은 피보험단위기간 산정 시 불리할 수 있으니 고용센터에 확인 필수.</blockquote>',
      },
      {
        title: '신청 기한 — 이직일 다음 날부터 12개월',
        content:
          '<p><strong style="color:#1e3a5f">수급기간은 이직 후 12개월이며 늦게 신청하면 지급일수가 줄어듭니다.</strong></p>\n<ul>\n<li><strong>12개월 원칙</strong> — 이직일 다음 날부터 12개월 경과 시 잔여 일수와 무관하게 지급 종료.</li>\n<li><strong>권장 시점</strong> — 이직 후 14일 이내 워크넷 구직등록 + 고용센터 방문.</li>\n<li><strong>소정급여일수</strong> — 연령·피보험기간에 따라 120~270일.</li>\n<li><strong>주의</strong> — 12개월 넘기면 아직 받지 않은 일수는 소멸.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 피보험기간 합산과 신청 가능 시점을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직 사유 — 계약만료·해고·자발',
        content:
          '<p><strong style="color:#1e3a5f">단기 근로 대부분은 "계약기간 만료"로 수급자격이 유리합니다.</strong></p>\n<ul>\n<li><strong>계약 만료</strong> — 갱신 거절 또는 기간 종료는 비자발적 이직, 수급 유리.</li>\n<li><strong>해고·권고사직</strong> — 수급 가능, 이직확인서 사유 확인 필수.</li>\n<li><strong>자발적 퇴사</strong> — 예외 사유(임금체불·장거리 통근·괴롭힘) 있어야 수급 가능.</li>\n<li><strong>이직확인서 정정</strong> — 사유 오기재 시 고용센터에 정정 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단기 알바의 경우 이직확인서 미제출이 흔한데, 사업주에 요청·관할 공단에 직권 요청 가능합니다.</blockquote>',
      },
      {
        title: '고용보험 미가입이었다면 — 소급 가입',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 미가입했어도 3년 소급 가입 신청이 가능합니다.</strong></p>\n<ul>\n<li><strong>주 15시간 이상 + 1개월 이상</strong> — 원칙적 가입 대상.</li>\n<li><strong>소급 신청</strong> — 근로복지공단에 3년 이내 취득 확인 청구.</li>\n<li><strong>증빙 자료</strong> — 근로계약서·급여 입금내역·근무 사진·동료 진술.</li>\n<li><strong>보험료 본인부담분</strong> — 소급 시 본인 부담분 정산(사업주 부담분은 공단에서 징수).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소급 가입 후 피보험단위기간 합산이 가능하므로 포기하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단기 근로자 수급자격 보호',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 임기제·별정직 등 기간제·단기 근로자의 고용보험 가입신청기간을 제한한 구 고용보험법 시행령 제3조의2 제2항 단서를 실질적으로 해석해 근로자 수급자격을 보호해야 한다고 판시했습니다. 단기 근로자도 실업급여 수급권이 적극적으로 보장됩니다.',
        takeaway:
          '가입 지연 또는 미가입이어도 수급자격 검토를 끝까지 받아보세요.',
      },
    ],
    faq: [
      {
        question: '3개월 알바만 했는데 180일 미달이면 끝인가요?',
        answer:
          '<strong>18개월 안에 다른 고용보험 가입 이력과 합산 가능합니다.</strong> 이전 직장 근무일수를 포함해 계산해보세요.',
      },
      {
        question: '이직확인서를 사업주가 안 써주는데 어떻게 하나요?',
        answer:
          '<strong>고용센터에 직권 요청하거나 과태료 부과를 신청할 수 있습니다.</strong> 근로복지공단에서도 확인 가능합니다.',
      },
      {
        question: '12개월 기한은 수급액 전부 받을 때까지 아닌가요?',
        answer:
          '<strong>수급 기한은 이직일부터 12개월, 지급일수와 무관합니다.</strong> 늦게 신청하면 남은 일수를 못 받습니다.',
      },
      {
        question: '주 15시간 미만 단시간 근로자도 수급 가능한가요?',
        answer:
          '<strong>주 15시간 미만은 원칙적으로 고용보험 가입 대상이 아니지만 월 60시간 이상이면 가입 가능합니다.</strong> 가입 이력이 있으면 수급 가능.',
      },
      {
        question: '단기 계약 여러 건 합쳐서 180일 만드는 게 가능한가요?',
        answer:
          '<strong>네, 사업장 여러 곳 이력 합산 가능합니다.</strong> 다만 최종 이직이 비자발적이거나 정당한 사유여야 수급자격이 인정됩니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '180일 피보험기간 계산', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '일용직 실업급여', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '여러 사업장 합산', href: '/guide/unemployment/unemployment-multiple-workplace-combined' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '지연 신청 남은 일수', href: '/guide/unemployment/unemployment-late-application-remaining-days' },
    ],
  },

  // ─── 12. unemployment / fraud-collection-notice-appeal ───
  {
    domain: 'unemployment',
    slug: 'unemployment-fraud-collection-notice-appeal',
    keyword: '실업급여 부정수급 환수 이의신청',
    questionKeyword: '실업급여 부정수급 환수 통지가 왔는데 이의신청 가능한가요?',
    ctaKeyword: '부정수급 환수 이의신청 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '실업급여 부정수급 환수 통지 이의신청 90일 | 로앤가이드',
      description:
        '고용센터로부터 실업급여 부정수급 환수·추징 통지를 받았다면 90일 이의신청 기한과 심사청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>실업급여 수급 중 단기 아르바이트·프리랜서 일감을 한두 번 한 것이 "부정수급"으로 간주돼 환수 + 추가징수(최대 5배) + 형사고발 통지를 받으면 패닉이 옵니다. 하지만 고의성·반복성·고지의무 위반 여부에 따라 판단이 달라지며, 90일 내 심사청구로 일부 또는 전부 취소가 가능한 경우가 많습니다.</p>',
    sections: [
      {
        title: '부정수급 성립 요건 — 고의·기망·누락',
        content:
          '<p><strong style="color:#1e3a5f">"거짓 또는 그 밖의 부정한 방법"이 핵심 기준입니다.</strong></p>\n<ul>\n<li><strong>취업 사실 미신고</strong> — 일한 날·시간·소득 미신고가 대표적.</li>\n<li><strong>구직활동 허위</strong> — 가짜 구직활동 증빙 제출.</li>\n<li><strong>자영업 누락</strong> — 사업자등록·프리랜서 소득 미신고.</li>\n<li><strong>고의성</strong> — 단순 실수·몰라서 빠뜨린 경우는 구제 여지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 고의성·인과관계·금액 산정 다툼이 핵심 포인트입니다.</blockquote>',
      },
      {
        title: '90일 심사청구 — 이의신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">통지 수령일로부터 90일 내 고용보험 심사청구가 원칙입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 통지서 확인</strong> — 환수 금액·추가징수액·처분 사유 확인.</li>\n<li><strong>2단계 — 심사청구서 제출</strong> — 고용보험 심사관(관할 고용지청) 접수.</li>\n<li><strong>3단계 — 재심사청구</strong> — 심사 기각 시 고용보험심사위원회 재심사.</li>\n<li><strong>4단계 — 행정소송</strong> — 재심사도 기각 시 90일 내 행정법원.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 환수 처분의 다툼 포인트·심사청구 전략을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '감경 사유 — 고의 부존재·자진 신고',
        content:
          '<p><strong style="color:#1e3a5f">고의 없음·자진 신고는 추가징수 면제 또는 감경 사유입니다.</strong></p>\n<ul>\n<li><strong>고의 부존재</strong> — 신고 방법을 몰랐거나 시스템 오류 등 과실만 있을 때.</li>\n<li><strong>자진 신고</strong> — 적발 전 스스로 신고·반납하면 추가징수 면제 가능.</li>\n<li><strong>소액·1회</strong> — 금액 작고 1회성이면 형사 처벌 보류 가능성.</li>\n<li><strong>협조 태도</strong> — 조사 협조·반성 문서 제출 시 정상 참작.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환수 통지 전에 스스로 발견하면 즉시 자진 신고·반납을 권장 — 페널티가 크게 줄어듭니다.</blockquote>',
      },
      {
        title: '형사 처벌 병행 — 병행 대응 필요',
        content:
          '<p><strong style="color:#1e3a5f">환수 + 형사 고발이 함께 오면 별개 대응이 필요합니다.</strong></p>\n<ul>\n<li><strong>고용보험법 제116조</strong> — 3년 이하 징역 또는 3천만원 이하 벌금.</li>\n<li><strong>반환·반성</strong> — 환수금 완납 + 반성문·탄원서로 선처 유도.</li>\n<li><strong>초범 배려</strong> — 초범·소액이면 기소유예 또는 벌금 선에서 종결 가능.</li>\n<li><strong>별개 절차</strong> — 행정 심사청구와 형사 조사는 별개로 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사실과 다르게 신고되었다면 허위 신고 자료를 근거로 "부정수급 고의 부존재"를 심사청구 단계에서 적극 주장하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정수급 처분의 판단 기준',
        summary:
          '대법원 2018도2429 사건(대법원, 2018.06.28 선고)에서 법원은 고용유지지원금을 거짓이나 그 밖의 부정한 방법으로 받은 사람에 대한 환수·처벌 규정은 수급 행위의 고의성·기망 수단·지급 인과관계를 엄격히 판단해야 한다고 판시했습니다. 단순 신고 누락과 부정수급의 경계를 실질 판단합니다.',
        takeaway:
          '환수 처분을 받았다면 고의성·인과관계 부정을 90일 내 다투세요.',
      },
    ],
    faq: [
      {
        question: '단기 알바 소득을 몰라서 신고 안 했는데 부정수급인가요?',
        answer:
          '<strong>고의 없는 단순 과실은 부정수급 성립이 어렵습니다.</strong> 신고 방법을 몰랐다는 점을 입증하면 감경 또는 취소 가능합니다.',
      },
      {
        question: '추가징수 5배는 모두에게 부과되나요?',
        answer:
          '<strong>고의성·반복성이 크면 최대 5배지만, 경미한 경우 배수가 축소됩니다.</strong> 심사청구에서 배수 다툼도 가능합니다.',
      },
      {
        question: '90일 기한 놓치면 끝인가요?',
        answer:
          '<strong>심사청구 기한 도과 시 행정소송도 90일 내 제소해야 합니다.</strong> 기한이 하나라도 남았으면 신속히 변호사 상담을 권합니다.',
      },
      {
        question: '반환 못 할 금액이면 분할 납부 가능한가요?',
        answer:
          '<strong>근로복지공단에 분할 납부 신청 가능합니다.</strong> 소득·재산 소명 후 최대 36개월 분할 승인 가능.',
      },
      {
        question: '형사 고발까지 왔는데 벌금으로 끝낼 수 있나요?',
        answer:
          '<strong>초범·소액·반납 완료면 벌금·기소유예로 종결 가능성이 있습니다.</strong> 반납 영수증·반성문·탄원서 제출이 핵심입니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '부정수급 감경 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '수급 거절 이의신청', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '수급 결정 불복 절차', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
      { label: '수급 중 부업 소득', href: '/guide/unemployment/unemployment-side-income-during-benefit' },
      { label: '감액 처분 대응', href: '/guide/unemployment/unemployment-benefit-reduction-penalty' },
    ],
  },
];
