import { SpokePage } from '../spoke-pages';

// batch45 labor 12개: dismissal 5 + wage 3 + unemployment 2 + retirement 2
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 우울증·정신질환을 회사에 고지한 뒤 해고된 근로자가 장애인차별금지법·근기법 제23조로 다투도록 돕는 페이지다.
// 2. 이 페이지는 합병 후 정규직은 두고 기간제만 골라 정리해고당한 근로자가 차별·승계 책임으로 다투도록 돕는 페이지다.
// 3. 이 페이지는 사장의 친인척·가족이 사적으로 사직을 강요해 회사를 그만둔 근로자가 간접강요 해고로 구제받도록 돕는 페이지다.
// 4. 이 페이지는 하청·재하청으로 이중파견된 상태에서 정리해고된 근로자가 진짜 사용자(원청)에게 책임을 묻도록 돕는 페이지다.
// 5. 이 페이지는 시말서·경고·징계 절차 없이 즉시 해고된 근로자가 절차하자만으로 해고를 무효화하도록 돕는 페이지다.
// 6. 이 페이지는 매년 받던 정기상여금이 연중 일방 중단된 근로자가 근로조건 변경동의 없는 차감 차액을 청구하도록 돕는 페이지다.
// 7. 이 페이지는 영업 인센티브 지급을 약속받고 일했지만 미지급된 근로자가 임금성·약정 입증으로 청구하도록 돕는 페이지다.
// 8. 이 페이지는 주유비·차량유지비를 일방적으로 삭감당한 근로자가 임금성 판단·취업규칙 불이익변경으로 다투도록 돕는 페이지다.
// 9. 이 페이지는 배우자 발령으로 통근 불가능해 사직한 근로자가 정당이직사유로 실업급여를 받도록 돕는 페이지다.
// 10. 이 페이지는 장애가족·중증환자를 돌보기 위해 자진퇴사한 근로자가 정당이직사유로 실업급여 수급자격을 인정받도록 돕는 페이지다.
// 11. 이 페이지는 해외법인·자회사 파견기간이 퇴직금 산정에 합산되는지 몰라 손해 보는 근로자가 계속근로기간을 정리하도록 돕는 페이지다.
// 12. 이 페이지는 회사 합병 후 퇴직금 기산일이 합병 전부터인지 헷갈리는 근로자가 포괄승계 원칙으로 정확한 기산일을 정리하도록 돕는 페이지다.

export const spokesBatch45Labor: SpokePage[] = [
  // ─── 1. dismissal / mental-illness-disclosure-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-mental-illness-disclosure-fired',
    keyword: '우울증 고지 해고 차별',
    questionKeyword: '우울증·정신질환을 회사에 알린 뒤 해고됐는데 차별로 다툴 수 있나요?',
    ctaKeyword: '정신질환 고지 후 해고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정신질환 고지 후 해고 4가지 차별 다툼 포인트 | 로앤가이드',
      description:
        '우울증·공황장애 진단을 회사에 고지한 직후 "성과 미흡"을 이유로 해고됐다면 장애인차별금지법과 근기법으로 다투는 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"치료받겠다고 솔직히 말했더니 두 달 만에 해고 통보가 왔어요"라는 사연이 적지 않습니다. 정신질환 고지 직후 해고는 사유의 정당성·시기의 인접성·차별 의도 3가지가 동시에 의심됩니다. 우울증·공황장애·조울증은 장애인차별금지법상 정신적 장애에 해당할 수 있어 일반 해고보다 보호 강도가 높습니다. 통보 후 3개월 이내에 지노위와 인권위 두 갈래로 준비하는 것이 효과적입니다.</p>',
    sections: [
      {
        title: '차별 의심 신호 — 고지 후 어떤 변화가 있었나',
        content:
          '<p><strong style="color:#1e3a5f">고지 시점부터 해고까지 4가지 신호가 있다면 차별적 해고로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>업무 박탈</strong> — 갑자기 단순 업무로 전환되거나 회의·프로젝트에서 배제.</li>\n<li><strong>평가 급락</strong> — 직전까지 양호하던 인사평가가 고지 후 갑자기 최하위로 변경.</li>\n<li><strong>휴직 압박</strong> — "쉬다 오라"며 의료휴직을 강요한 후 복직 거부.</li>\n<li><strong>발언 기록</strong> — 상사·인사팀의 "정신과 다니는 사람과 일 못 한다" 식 멘트.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시간적 인접성(고지 후 1~3개월 내 해고)은 차별 의도 추정의 강력한 정황입니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">증거의 시간순 보존이 가장 중요합니다 — 진단서·근태·평가의 시점 매칭부터.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·치료기록 확보</strong> — 진단일·고지일·해고일 3개 시점이 인접한지 확인.</li>\n<li><strong>2단계 — 평가 자료 비교</strong> — 고지 전후 6개월 인사평가·실적표를 출력해 변동폭 정리.</li>\n<li><strong>3단계 — 발언 증거 수집</strong> — 슬랙·이메일·녹취 중 차별 발언 1개 이상 확보.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 차별 + 정당사유 부재 동시 주장.</li>\n<li><strong>5단계 — 인권위 진정 병행</strong> — 장애인차별금지법 위반으로 시정권고 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 차별 의심 신호와 구제신청 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "성과 미흡"으로 포장할 때',
        content:
          '<p><strong style="color:#1e3a5f">고지 직후 갑작스런 평가 하락은 사후 합리화로 의심받습니다.</strong></p>\n<ul>\n<li><strong>평가 일관성</strong> — 직전 1~2년 평가와 고지 후 평가를 표로 비교, 급락 폭 입증.</li>\n<li><strong>개선 기회 부재</strong> — PIP·교육 없이 곧바로 해고면 "사회통념상 곤란성" 부족.</li>\n<li><strong>합리적 편의 미제공</strong> — 업무량 조정·치료시간 보장 없이 "성과 미흡" 평가는 위법.</li>\n<li><strong>비교집단 분석</strong> — 동일 직무 동료의 평균 성과 대비 차이가 미미하면 차별 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장애인차별금지법 제11조는 회사가 "정당한 편의 제공" 의무를 진다고 명시합니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·금전보상·차별 시정',
        content:
          '<p><strong style="color:#1e3a5f">지노위 부당해고 인용 + 인권위 차별 시정은 별개로 진행됩니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 동일 직무·동일 처우로 복귀, 합리적 편의(업무량·치료시간) 동반.</li>\n<li><strong>임금상당액</strong> — 해고일~복직일까지 월 급여 전액, 평균임금 기준.</li>\n<li><strong>인권위 시정권고</strong> — 차별 인정 시 회사 정책·평가제도 개선 권고.</li>\n<li><strong>위자료 청구</strong> — 별도 민사로 차별행위에 대한 정신적 손해 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3개월 도과 시 구제신청 자체가 막히므로 진단서 발급일부터 일정을 거꾸로 계산하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회통념상 고용관계 유지가 곤란한지의 판단 기준',
        summary:
          '대법원 2023두41864 사건(대법원, 2024 선고)에서 법원은 근로자에게 책임 있는 사유로 해고할 때 사회통념상 고용관계를 유지할 수 없을 정도인지를 종합 고려해야 한다며, 평가 하락만으로 곧바로 해고 정당성을 인정해선 안 된다는 취지로 판시했습니다.',
        takeaway: '정신질환 고지 후 짧은 기간의 평가 하락은 그 자체로 해고 사유가 되기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '회사에 우울증을 고지한 사실 자체가 불이익이 되나요?',
        answer:
          '<strong>고지 자체는 불이익 사유가 될 수 없습니다.</strong> 오히려 고지 후 평가·처우 변화는 차별 의도를 추정하는 강한 정황입니다.',
      },
      {
        question: '진단서를 회사에 제출 안 했는데도 차별로 다툴 수 있나요?',
        answer:
          '<strong>구두 고지·이메일 언급만으로도 차별 정황은 성립할 수 있습니다.</strong> 단, 고지 사실이 명확해야 시간적 인접성을 주장할 수 있어요.',
      },
      {
        question: '인권위 진정과 지노위 구제신청 중 어느 쪽이 먼저인가요?',
        answer:
          '<strong>두 절차는 병행이 가능합니다.</strong> 다만 지노위는 3개월 제척기간이 있어 시간이 급한 쪽을 먼저 접수하는 것이 안전합니다.',
      },
      {
        question: '치료받느라 업무 효율이 떨어진 건 사실인데 해고를 막을 수 있나요?',
        answer:
          '<strong>회사는 합리적 편의(업무량 조정·치료시간 부여)를 제공할 의무가 있습니다.</strong> 편의 미제공 상태의 성과 평가는 차별로 다툴 수 있어요.',
      },
      {
        question: '복직해도 다시 해고당할까봐 걱정인데요?',
        answer:
          '<strong>복직 후 짧은 기간 내 재해고는 원직복직 명령 위반·괴롭힘으로 추가 다툼이 가능합니다.</strong> 복직 후 6개월간 근태·지시 기록을 남겨두세요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '장애인차별금지법 적용 범위', href: '/guide/dismissal/dismissal-disability-discrimination-act' },
      { label: '인사평가 급락의 위법성', href: '/guide/dismissal/dismissal-evaluation-drop-illegality' },
      { label: '직장 내 괴롭힘과 해고', href: '/guide/dismissal/dismissal-workplace-bullying-link' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '인권위 진정 절차 안내', href: '/guide/dismissal/dismissal-human-rights-petition' },
    ],
  },

  // ─── 2. dismissal / merger-fixed-term-distinction ───
  {
    domain: 'dismissal',
    slug: 'dismissal-merger-fixed-term-distinction',
    keyword: '합병 기간제만 정리해고',
    questionKeyword: '합병 후 정규직은 두고 기간제만 정리해고되면 차별인가요?',
    ctaKeyword: '합병 후 기간제 차별 정리해고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '합병 후 기간제만 정리해고 4가지 다툼 포인트 | 로앤가이드',
      description:
        '회사 합병 후 정규직은 모두 승계됐는데 기간제 근로자만 골라 정리해고됐다면 차별·승계 책임으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"합병하면서 정규직은 다 옮겼는데 우리 같은 계약직만 일괄 해고됐어요"라는 상담이 늘고 있습니다. 합병·사업양도 시 근로관계는 포괄승계되는 것이 원칙인데, 기간제만 골라 배제하면 차별·승계 회피로 다툴 여지가 큽니다. 통보일부터 3개월 이내에 지노위 구제신청을, 동시에 차별시정 신청까지 병행하는 것이 정석입니다.</p>',
    sections: [
      {
        title: '차별 정리해고 — 어떤 패턴이 위법인가',
        content:
          '<p><strong style="color:#1e3a5f">정규직과 기간제의 처리 차이가 4가지면 차별·승계 회피로 의심됩니다.</strong></p>\n<ul>\n<li><strong>승계 범위 차이</strong> — 정규직은 100% 승계, 기간제는 0~30%만 선별 승계.</li>\n<li><strong>업무 동일성</strong> — 동일·유사 업무를 정규직은 계속, 기간제만 사업 종료라며 해고.</li>\n<li><strong>해고 시점 집중</strong> — 합병 등기일 전후 1~2개월에 기간제만 일괄 통보.</li>\n<li><strong>대체채용</strong> — 해고 직후 동일 직무에 새 인력을 채용한 흔적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기간제법 제8조 차별금지 + 근기법 제24조 정리해고 요건 두 갈래로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">"누가 남고 누가 나갔는지" 비교 자료가 핵심 증거입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합병 등기·공시 확보</strong> — 등기부·금감원 공시·사내 공지문으로 승계 사실 입증.</li>\n<li><strong>2단계 — 정규직·기간제 처우 비교표</strong> — 동일 부서 내 처리 결과를 명단으로 정리.</li>\n<li><strong>3단계 — 갱신기대권 자료</strong> — 반복 갱신·평가·구두 약속 등 갱신기대권 입증.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 승계 법인 상대로 부당해고 + 차별 동시 주장.</li>\n<li><strong>5단계 — 차별시정 신청</strong> — 기간제법 제9조에 따라 노동위에 별도 차별시정 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 차별 정리해고 가능성과 승계 법인 상대 구제 절차를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "기간제는 별도 협약" 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">근로자에게 불리한 승계배제 특약은 사해적 해고로 무효입니다.</strong></p>\n<ul>\n<li><strong>특약의 효력 한계</strong> — 영업양도 특약은 가능하지만 근로자 배제는 정당한 이유 필요.</li>\n<li><strong>비례원칙</strong> — 정규직 100% 승계 vs 기간제 0% 배제는 비례성 결여.</li>\n<li><strong>통상해고 전환</strong> — "사업 통합" 핑계로 통상해고 처리해도 실질은 정리해고로 평가.</li>\n<li><strong>회피 의도</strong> — 갱신기대권 형성 직전에 합병으로 종료 처리하는 것은 탈법적 시도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 부서 정규직 명단·해고 기간제 명단을 함께 제시하면 차별 입증이 쉬워집니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·차별 시정·차액 보상',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제 + 차별시정 둘 다 인용되면 복직 + 차별 차액까지 보상받습니다.</strong></p>\n<ul>\n<li><strong>승계 법인 복직</strong> — 합병 후 신설·존속 법인을 상대로 원직복직 명령.</li>\n<li><strong>임금상당액</strong> — 해고일~복직일까지 월 급여 전액, 평균임금 기준.</li>\n<li><strong>차별 시정금</strong> — 차별시정 인용 시 정규직과의 처우 차액 보전.</li>\n<li><strong>금전보상명령</strong> — 복직이 어려우면 6~12개월치 보상으로 갈음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합병 등기일 기준 3개월이 지나면 부당해고 구제신청은 막힙니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 근로관계 포괄승계와 배제특약의 효력',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 영업양도가 이루어지면 반대 특약이 없는 한 근로관계가 양수 기업에 포괄승계되며, 근로관계 일부를 배제하는 특약은 실질적으로 해고와 같으므로 근기법 제23조 제1항의 정당한 이유가 있어야 유효하다고 판시했습니다.',
        takeaway: '"기간제는 별도 협약으로 배제" 같은 일방적 특약은 정당한 이유 없이는 무효입니다.',
      },
    ],
    faq: [
      {
        question: '합병 직후 기간 만료 통보를 받았는데 부당해고로 다툴 수 있나요?',
        answer:
          '<strong>갱신기대권이 인정되면 가능합니다.</strong> 동일 업무 정규직은 승계됐는데 기간제만 종료된 정황이 있다면 차별 다툼도 병행하세요.',
      },
      {
        question: '구제신청 상대는 옛 회사인가요, 새 합병 법인인가요?',
        answer:
          '<strong>합병으로 흡수·소멸된 법인 대신 승계 법인이 상대방입니다.</strong> 사업양도라면 양수 법인을 상대로 진행합니다.',
      },
      {
        question: '차별시정 신청은 지노위 구제신청과 따로 해야 하나요?',
        answer:
          '<strong>두 절차는 별도지만 병행 가능합니다.</strong> 차별시정은 기간제법, 부당해고는 근기법 근거이므로 두 갈래로 청구하면 인용 가능성이 높아집니다.',
      },
      {
        question: '기간제라도 정리해고 4요건이 적용되나요?',
        answer:
          '<strong>기간제도 갱신기대권이 형성됐다면 정리해고 4요건(긴박성·노력·기준·협의)이 적용됩니다.</strong> 합병만으로는 긴박한 경영상 필요로 보기 어렵습니다.',
      },
      {
        question: '실업급여는 받을 수 있나요?',
        answer:
          '<strong>"계약만료" 또는 "권고사직" 코드로 이직확인서가 나오면 수급 가능합니다.</strong> 자진퇴사 코드로 처리되면 정정 요청부터 하세요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '인수합병과 기간제 갱신기대권', href: '/guide/dismissal/dismissal-acquisition-fixed-term-rights' },
      { label: '기간제 차별시정 신청 절차', href: '/guide/dismissal/dismissal-fixed-term-discrimination-relief' },
      { label: '정리해고 4요건 검토', href: '/guide/dismissal/dismissal-managerial-requirements' },
      { label: '합병·양도 고용승계 다툼', href: '/guide/dismissal/dismissal-merger-succession-dispute' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 3. dismissal / ceo-relative-discharge-pressure ───
  {
    domain: 'dismissal',
    slug: 'dismissal-ceo-relative-discharge-pressure',
    keyword: '사장 친인척 사직 강요',
    questionKeyword: '사장 가족·친인척이 사직을 강요해서 그만뒀는데 부당해고로 다툴 수 있나요?',
    ctaKeyword: '친인척 사직강요 간접해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사장 친인척 사직강요 5가지 간접해고 다툼 | 로앤가이드',
      description:
        '대표 가족·친인척이 인사권 없이도 집요하게 사직을 종용해 그만두게 됐다면 간접강요 해고로 구제받을 수 있는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"사장 동생이 매일 와서 그만두라고 했어요. 결국 사직서 썼습니다"라는 사연이 적지 않습니다. 인사권 없는 친인척의 압박이라도 회사가 묵인·방조하면 실질은 사용자의 사직 강요로 평가됩니다. 사직서가 본인 의사가 아니라 강박으로 쓰였다면 의사표시 하자로 취소할 수 있고, 실질 해고로 부당해고 구제도 가능합니다. 사직 후 3개월 이내가 골든타임입니다.</p>',
    sections: [
      {
        title: 'Q. 친인척이 인사권이 없는데도 강요로 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사가 묵인·방조했다면 사실상의 사직 강요로 평가됩니다.</strong></p>\n<ul>\n<li><strong>실질적 영향력</strong> — 대표의 배우자·자녀·형제는 사실상 사용자 대리인으로 취급되는 경우가 많음.</li>\n<li><strong>회사의 묵인</strong> — 친인척의 출입·발언을 회사가 막지 않으면 방조로 평가.</li>\n<li><strong>업무 배제</strong> — 친인척 발언 후 실제 인사팀이 책상·계정·접근권 차단했다면 인사권 행사.</li>\n<li><strong>대표의 추인</strong> — 대표가 "내 동생이 그렇게 말했으면 그렇게 해라"라고 한 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대표의 직접 지시가 아니어도 "회사 측" 강요로 인정되면 의사표시 취소·해고 다툼이 가능합니다.</blockquote>',
      },
      {
        title: 'Q. 사직서 이미 썼는데 되돌릴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 강박·기망에 의한 사직은 민법 제110조로 취소할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 강박 사실 증거화</strong> — 친인척 발언 녹취·문자·이메일·동료 진술서 확보.</li>\n<li><strong>2단계 — 사직 의사 부인 통지</strong> — 내용증명으로 "사직 의사 없음·취소 통지" 발송.</li>\n<li><strong>3단계 — 지노위 구제신청</strong> — 사직일 3개월 이내, 실질 해고로 부당해고 다툼.</li>\n<li><strong>4단계 — 의사표시 취소 소송</strong> — 강박·기망 입증해 사직서 효력 부인 + 근로관계 존속 확인 청구.</li>\n<li><strong>5단계 — 위자료 별도 청구</strong> — 친인척 강요행위에 대해 정신적 손해배상 별소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 강박 정황과 사직서 취소 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 증거가 강박을 입증하는 데 가장 강력한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. "발언 + 시간 + 결과"가 한 묶음으로 잡힌 자료가 결정적입니다.</strong></p>\n<ul>\n<li><strong>녹취·문자</strong> — "지금 안 그만두면…" 식 협박성 발언 1건만 있어도 결정적.</li>\n<li><strong>동료 진술서</strong> — 같은 자리에서 들은 동료 2명 이상의 진술서가 신빙성 보강.</li>\n<li><strong>당시 근태</strong> — 강박 시점 전후의 근태기록·면담일지로 시간 흐름 입증.</li>\n<li><strong>사직 직전 변경</strong> — 책상 이동·업무 박탈·평가 급락 등 압박 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서를 쓰는 자리에서 휴대폰 음성메모가 작동했다면 그 자체로 강박 입증 자료가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "친인척과는 무관하다"고 발뺌하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 시설 출입·인사 개입 흔적이 있으면 회사 책임이 추정됩니다.</strong></p>\n<ul>\n<li><strong>출입기록</strong> — 사옥 출입카드·CCTV로 친인척 출입 시점 입증.</li>\n<li><strong>이메일·시스템 권한</strong> — 친인척이 회사 계정으로 인사 관련 메일을 보냈다면 결정적.</li>\n<li><strong>대표의 묵인</strong> — 대표에게 친인척 행동을 보고했는데 시정 없으면 추인.</li>\n<li><strong>실제 인사조치</strong> — 친인척 발언 후 인사팀이 실제로 후속 조치했다면 회사 행위.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "개인적 분쟁"으로 몰아가지 못하도록 회사 시설·시스템 사용 흔적 확보가 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 제출 후 부당해고 구제신청 시 소의 이익',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 사직서를 제출했더라도 그 사직이 강박·기망에 의해 의사표시 하자가 있다면 실질 해고로 다툴 수 있고, 근로계약 종료 사유가 명백하지 않으면 구제명령을 받을 이익이 있다는 취지로 판시했습니다.',
        takeaway: '사직서를 이미 썼더라도 강박 정황만 입증되면 부당해고로 다툴 길이 열립니다.',
      },
    ],
    faq: [
      {
        question: '사장 부인이 매일 출근해서 잔소리하던 정도도 강요로 인정되나요?',
        answer:
          '<strong>발언 내용·횟수·시점이 누적되면 강요로 평가될 수 있습니다.</strong> 단순 잔소리와 사직 강요는 발언 톤과 직접성으로 구분됩니다.',
      },
      {
        question: '사직서를 쓰면서 "자진퇴사"라고 직접 적었는데 다툴 수 있나요?',
        answer:
          '<strong>형식적으로 자진퇴사로 적었어도 강박 정황이 입증되면 의사표시 취소가 가능합니다.</strong> 사직 직전 압박 사실이 핵심.',
      },
      {
        question: '구제신청 기간 3개월은 사직일부터인가요?',
        answer:
          '<strong>실질 해고로 다투는 경우 사직서 효력 발생일(통상 사직일)부터 3개월입니다.</strong> 도과 시 민사 의사표시 취소 소송으로 가야 합니다.',
      },
      {
        question: '실업급여 신청해도 구제신청에 영향 없나요?',
        answer:
          '<strong>실업급여 수급과 구제신청은 별도 절차로 양립합니다.</strong> 다만 이직사유 코드가 다툼 결과에 따라 정정될 수 있어요.',
      },
      {
        question: '친인척을 직접 형사고소할 수 있나요?',
        answer:
          '<strong>강요·협박 발언이 명확하면 형법 제324조 강요죄·제283조 협박죄로 고소 가능합니다.</strong> 노동 절차와 별도로 진행할 수 있어요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '사직 강요로 의사표시 취소', href: '/guide/dismissal/dismissal-resignation-coercion-revoke' },
      { label: '직장 내 괴롭힘 신고', href: '/guide/dismissal/dismissal-workplace-bullying-link' },
      { label: '간접강요 해고 다툼', href: '/guide/dismissal/dismissal-indirect-coercion-claim' },
      { label: '강박 입증 증거 모으기', href: '/guide/dismissal/dismissal-coercion-evidence-collection' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 4. dismissal / double-dispatch-redundancy ───
  {
    domain: 'dismissal',
    slug: 'dismissal-double-dispatch-redundancy',
    keyword: '이중파견 정리해고 진짜 사용자',
    questionKeyword: '하청·재하청 이중파견 상태에서 정리해고됐는데 원청에 책임을 물을 수 있나요?',
    ctaKeyword: '이중파견 정리해고 원청 책임 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이중파견 정리해고 4가지 진짜 사용자 책임 | 로앤가이드',
      description:
        '하청·재하청을 거쳐 이중파견되어 일하다 정리해고됐다면 원청을 진짜 사용자로 보고 직접고용·해고책임을 묻는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"계약은 하청업체와 했지만 일은 원청 본사에서 했어요. 그런데 갑자기 재하청 회사 폐업 통보가 왔습니다"라는 상담이 늘고 있습니다. 형식상 사용자와 실질 사용자가 다른 위장도급·이중파견은 파견법·근로자공급사업 위반으로 평가되고, 원청이 진짜 사용자로 인정되면 직접고용 의무·해고 책임이 모두 원청에 귀속됩니다. 통보 후 3개월 이내에 묵시적 근로계약·파견 위반 두 갈래로 다투세요.</p>',
    sections: [
      {
        title: '진짜 사용자 — 원청에 책임 묻는 4가지 징표',
        content:
          '<p><strong style="color:#1e3a5f">근로의 실질이 원청 지휘·감독 아래 있었다면 묵시적 근로계약이 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>업무지시 출처</strong> — 일일 업무·작업 지시가 원청 직원에게서 직접 나옴.</li>\n<li><strong>근태 통제</strong> — 출근시간·휴가 승인을 원청이 결정.</li>\n<li><strong>장비·시설 제공</strong> — 작업도구·전산권한·사옥 출입카드 모두 원청 발급.</li>\n<li><strong>독립성 결여</strong> — 하청업체에 자체 전문성·자본·인력관리 시스템이 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4개 징표 중 3개 이상이면 묵시적 근로계약·위장도급으로 평가될 가능성이 큽니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 폐업·해고 통보 직후',
        content:
          '<p><strong style="color:#1e3a5f">"누구의 지시로 일했는지" 시간순 증거 확보가 가장 중요합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 업무지시 자료 보존</strong> — 원청 직원과 주고받은 메일·메신저·결재 흐름 확보.</li>\n<li><strong>2단계 — 출입·근태 기록</strong> — 사옥 출입카드·근태시스템 캡처, 원청 시설에서 일한 사실 입증.</li>\n<li><strong>3단계 — 계약구조 정리</strong> — 원청-하청-재하청 계약서·도급 단가표 입수.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 원청·하청·재하청 모두 피신청인으로.</li>\n<li><strong>5단계 — 직접고용 의무 청구</strong> — 파견법 제6조의2 따라 원청에 직접고용 의제 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 묵시적 근로계약 가능성과 원청 책임 입증 자료를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '원청이 "도급계약일 뿐" 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">도급의 외형보다 지휘·감독의 실질이 우선합니다.</strong></p>\n<ul>\n<li><strong>업무 일체성</strong> — 원청 정규직과 같은 라인·동일 업무를 수행했는지 확인.</li>\n<li><strong>도급단가 구조</strong> — 인원수×단가로 산정되었으면 사실상 인력공급 계약.</li>\n<li><strong>전문성 평가</strong> — 하청업체가 별도 노하우·시스템 없이 인력만 공급하는 구조.</li>\n<li><strong>이중파견의 위법성</strong> — 파견법은 재파견을 원칙적으로 금지(예외 매우 좁음).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 원청 직원 명함을 받았다거나, 원청 사번이 부여된 흔적이 있다면 결정적 증거입니다.</blockquote>',
      },
      {
        title: '구제 결과 — 원청 직접고용·소급 임금·해고무효',
        content:
          '<p><strong style="color:#1e3a5f">묵시적 근로계약 인정 시 처음부터 원청 근로자로 취급됩니다.</strong></p>\n<ul>\n<li><strong>원청 직접고용</strong> — 파견 2년 초과 시 직접고용 의제, 원청에 정규직 채용 의무.</li>\n<li><strong>해고무효</strong> — 정리해고 4요건을 원청 기준으로 다시 검토, 미충족 시 무효.</li>\n<li><strong>소급 임금 차액</strong> — 원청 정규직 호봉 기준 차액·연장수당 등 일괄 청구.</li>\n<li><strong>퇴직금 소급</strong> — 묵시적 근로 시작일부터 계속근로기간 합산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 하청업체 폐업으로 사라져도 원청 책임은 별도로 남으므로 원청을 가능한 한 피신청인에 포함하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 협동조합 인적·물적 조직 일체 이전과 근로관계 승계',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 영업양도가 이루어지면 근로관계가 양수 기업에 포괄승계되며, 근로관계 일부를 배제하는 특약은 실질 해고로서 정당한 이유가 있어야 한다는 취지로 판시했습니다. 도급·하청 형식이라도 실질 사용자가 누구인지가 핵심입니다.',
        takeaway: '계약 형식보다 지휘·감독의 실질로 판단되므로 원청 책임을 함께 묻는 것이 정석입니다.',
      },
    ],
    faq: [
      {
        question: '재하청 회사가 폐업하면 누구를 상대로 구제신청하나요?',
        answer:
          '<strong>원청·하청·재하청 모두 피신청인으로 적시하는 것이 안전합니다.</strong> 폐업 회사도 청산 절차에서 책임이 남고, 원청이 진짜 사용자면 직접 책임을 집니다.',
      },
      {
        question: '도급계약서가 정식으로 있는데도 위장도급으로 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 계약서 형식보다 업무 지시·근태 통제의 실질을 보므로 메일·메신저·출입기록이 핵심 증거입니다.',
      },
      {
        question: '파견 2년 초과면 원칙적으로 직접고용이 되나요?',
        answer:
          '<strong>파견법 제6조의2에 따라 직접고용 의무가 발생합니다.</strong> 단, 파견 허용 업무·기간 요건을 충족해야 하므로 사안별 검토가 필요해요.',
      },
      {
        question: '실업급여는 어디 쪽 회사로 신청하나요?',
        answer:
          '<strong>마지막 고용보험 가입 회사(보통 재하청) 기준으로 신청합니다.</strong> 원청 직접고용이 인정되면 사후 정정·소급 가입 검토가 가능해요.',
      },
      {
        question: '동료들도 같이 진행하면 유리한가요?',
        answer:
          '<strong>유리합니다.</strong> 같은 업무·같은 구조의 동료들이 함께 신청하면 묵시적 근로계약·이중파견 입증력이 크게 올라갑니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '위장도급·묵시적 근로계약', href: '/guide/dismissal/dismissal-disguised-subcontract-implicit' },
      { label: '파견 2년 직접고용 의제', href: '/guide/dismissal/dismissal-dispatch-direct-hire-2years' },
      { label: '원청 사용자성 입증 증거', href: '/guide/dismissal/dismissal-real-employer-evidence' },
      { label: '하청 폐업 후 임금·퇴직금', href: '/guide/dismissal/dismissal-subcontract-closure-claim' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 5. dismissal / no-warning-immediate-fire ───
  {
    domain: 'dismissal',
    slug: 'dismissal-no-warning-immediate-fire',
    keyword: '시말서 없는 즉시 해고 절차하자',
    questionKeyword: '시말서·경고 한 번 없이 바로 해고됐는데 절차하자만으로 무효 다툴 수 있나요?',
    ctaKeyword: '경고 없는 즉시 해고 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경고 없는 즉시 해고 4가지 절차하자 무효 | 로앤가이드',
      description:
        '시말서·경고·징계위원회 한 번 없이 바로 해고 통보를 받았다면 사유의 정당성과 별개로 절차하자만으로 해고를 무효화하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"오늘 갑자기 인사팀에서 부르더니 내일부터 안 나와도 된다고 했어요. 시말서 한 장 받은 적이 없습니다"라는 사연이 흔합니다. 해고는 사유의 정당성뿐 아니라 절차의 정당성도 갖춰야 하고, 취업규칙·단협상의 사전 절차를 거치지 않으면 사유가 있어도 절차하자로 무효가 됩니다. 통보 후 3개월 이내가 골든타임입니다.</p>',
    sections: [
      {
        title: '절차하자 — 어떤 절차를 빠뜨리면 무효인가',
        content:
          '<p><strong style="color:#1e3a5f">근기법 + 취업규칙 + 단체협약 3중 절차 중 하나라도 빠지면 절차하자입니다.</strong></p>\n<ul>\n<li><strong>서면 통보</strong> — 근기법 제27조: 해고 사유와 시기를 가능한 한 서면으로(이메일 OK).</li>\n<li><strong>30일 예고</strong> — 근기법 제26조: 30일 전 예고 또는 통상임금 30일분 지급.</li>\n<li><strong>징계 절차</strong> — 취업규칙·단협상의 징계위원회 회부·소명기회 부여.</li>\n<li><strong>점진적 징계</strong> — 시말서·경고·정직 등 경한 처분 없이 곧바로 해고는 비례성 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사유가 정당해도 절차 위반만으로 해고는 무효가 됩니다(대법원 일관된 입장).</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙·근로계약서 사본 확보가 가장 우선입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 취업규칙 사본 요구</strong> — 사용자는 근기법 제14조에 따라 게시·교부 의무.</li>\n<li><strong>2단계 — 통보 형태 기록</strong> — 구두·문자·이메일 어떤 방식이었는지 시점·내용 정리.</li>\n<li><strong>3단계 — 시말서·경고 이력 점검</strong> — 한 번도 없었다면 비례성 결여 강력 정황.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 절차하자 + 사유 부당 동시 주장.</li>\n<li><strong>5단계 — 임금상당액 청구</strong> — 해고 무효 시 해고일~복직일까지 평균임금 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 절차하자 항목별로 무효 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "긴급해서 절차 못 거쳤다" 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">긴급징계 예외는 매우 좁고 사후 절차 보완이 원칙입니다.</strong></p>\n<ul>\n<li><strong>긴급성 입증 의무</strong> — "그 자리에서 해고하지 않으면 회사가 망한다" 수준이어야 함.</li>\n<li><strong>사후 절차 미이행</strong> — 즉시 해고 후라도 추후 징계위·소명 기회 부여 의무.</li>\n<li><strong>비례성 검토</strong> — 사안에 비해 해고가 가장 무거운 처분인지 평가.</li>\n<li><strong>유사 사례 비교</strong> — 동종 사안에서 다른 직원은 정직·견책에 그쳤는지 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단체협약·취업규칙에 "징계위 결정 거쳐"가 명시돼 있다면 위반만으로 절차하자 입증이 됩니다.</blockquote>',
      },
      {
        title: '구제 결과 — 절차하자만으로 받는 무효 효과',
        content:
          '<p><strong style="color:#1e3a5f">절차하자 단독으로도 부당해고 인정 + 원직복직 명령이 가능합니다.</strong></p>\n<ul>\n<li><strong>해고 무효 확정</strong> — 사유 정당성 판단 없이 절차하자만으로 무효.</li>\n<li><strong>원직복직</strong> — 해고 전 직무·처우로 복귀, 인사기록 삭제.</li>\n<li><strong>임금상당액 전액</strong> — 해고일부터 복직일까지 월 급여 전액 + 지연이자.</li>\n<li><strong>손해배상</strong> — 절차 위반에 대한 위자료 별도 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 절차 보완 후 재해고 시도해도 "두 번째 해고"로 별도 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회통념상 고용유지 곤란성 판단 기준',
        summary:
          '대법원 2023두41864 사건(대법원, 2024 선고)에서 법원은 근로자에게 책임 있는 사유로 해고할 때는 사회통념상 고용관계를 유지할 수 없을 정도로 책임 있는 사유와 그에 비례한 절차를 갖춰야 한다는 취지로 판시했습니다.',
        takeaway: '시말서·경고 한 번 없는 첫 처분으로 해고는 비례성·절차 양면에서 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '구두로 "내일부터 나오지 마"라고만 했는데도 해고로 인정되나요?',
        answer:
          '<strong>네, 실질이 해고면 구두 통보도 해고입니다.</strong> 다만 근기법 제27조 서면 통보 의무 위반이라 그 자체로 절차하자로 다툴 수 있어요.',
      },
      {
        question: '취업규칙을 본 적이 없는데도 절차하자 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 사용자는 취업규칙 게시·교부 의무가 있어서, 미공개 자체가 사용자에게 불리한 정황입니다.',
      },
      {
        question: '시용기간(수습) 중인데도 절차하자가 적용되나요?',
        answer:
          '<strong>적용됩니다.</strong> 시용 해고도 객관적·합리적 사유 + 서면 통보가 필요하고 일반 해고보다 완화될 뿐 절차 자체는 면제되지 않아요.',
      },
      {
        question: '해고예고수당만 받으면 절차하자는 사라지나요?',
        answer:
          '<strong>아닙니다.</strong> 해고예고수당은 30일 예고 의무에 대한 정산일 뿐, 다른 절차하자(서면·징계위 등)는 별도로 다툴 수 있습니다.',
      },
      {
        question: '복직보다 보상금이 낫지 않나요?',
        answer:
          '<strong>금전보상명령은 심문 종결 전 신청 가능합니다.</strong> 통상 6~12개월치 임금이 책정되며, 복직과 보상 중 선택할 수 있어요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고 서면통보 의무', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '징계위 소명기회 누락', href: '/guide/dismissal/dismissal-disciplinary-hearing-omission' },
      { label: '해고예고와 30일 임금', href: '/guide/dismissal/dismissal-30day-notice-pay' },
      { label: '비례성 원칙과 징계', href: '/guide/dismissal/dismissal-proportionality-principle' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 6. wage / bonus-cancel-mid-year-recover ───
  {
    domain: 'wage',
    slug: 'wage-bonus-cancel-mid-year-recover',
    keyword: '정기상여금 일방 중단 차액',
    questionKeyword: '매년 받던 정기상여금이 연중 갑자기 끊겼는데 차액을 청구할 수 있나요?',
    ctaKeyword: '상여금 일방 중단 차액 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정기상여금 일방 중단 5단계 차액 청구 절차 | 로앤가이드',
      description:
        '매년 받던 정기상여금이 회사 일방 결정으로 중단됐다면 근로조건 불이익변경으로 차액을 청구하는 정확한 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"7월에 갑자기 상반기 상여금이 안 나왔어요. 단톡방 공지가 전부였습니다"라는 사연이 늘고 있습니다. 정기·고정으로 지급되던 상여금은 임금에 해당해 사용자가 일방으로 줄이거나 중단할 수 없습니다. 근로계약·취업규칙·관행 셋 중 어디서 근거를 찾느냐에 따라 청구 방식이 달라지고, 임금채권은 3년이라 시간 관리가 핵심입니다.</p>',
    sections: [
      {
        title: '상여금이 임금이라는 4가지 징표',
        content:
          '<p><strong style="color:#1e3a5f">정기성·일률성·고정성 셋이 모이면 임금으로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 분기·반기·연 단위로 매 회기마다 지급된 이력.</li>\n<li><strong>일률성</strong> — 일정 직급·근속 이상에게 동일 기준으로 지급.</li>\n<li><strong>고정성</strong> — 회사 임의 평가가 아니라 사전에 정해진 기준에 따라 산정.</li>\n<li><strong>관행 형성</strong> — 3년 이상 같은 방식으로 지급되었으면 근로조건의 일부로 굳어짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금성이 인정되면 일방 중단은 근로조건 불이익변경으로 무효 처분 가능합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 중단 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">"근거 자료 + 통보 시점" 두 가지를 시간 순으로 확보하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 이력 정리</strong> — 최근 3년 급여명세서에서 상여금 지급일·금액 추출.</li>\n<li><strong>2단계 — 근거 문서 입수</strong> — 취업규칙·임금협정·근로계약서에서 상여금 조항 확인.</li>\n<li><strong>3단계 — 중단 통보 형태 보존</strong> — 단톡방 공지·메일·구두 통보 시점 기록.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — "차액 임금 지급 청구" 명목으로 송달일 확정.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사 청구</strong> — 진정: 비용 무료·6주~3개월. 민사: 강제집행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 상여금 임금성과 차액 산정 방법을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "경영 사정으로 어쩔 수 없다" 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">경영 악화는 근로조건 변경의 자유로운 사유가 아닙니다.</strong></p>\n<ul>\n<li><strong>불이익변경 동의</strong> — 취업규칙 불이익변경은 근로자 과반수 동의 필요(근기법 제94조).</li>\n<li><strong>개별 동의</strong> — 단체협약·근로계약상의 상여금은 개별 근로자 동의 없이 변경 불가.</li>\n<li><strong>관행 임금</strong> — 관행으로 형성된 상여금도 묵시적 근로조건이라 일방 변경 불가.</li>\n<li><strong>합리성 심사</strong> — 경영 악화 입증 + 노조·근로자 협의 + 대안 제시 모두 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 경영 악화를 주장하면 결산서·재무제표 공개를 요구해 입증 책임을 돌려두세요.</blockquote>',
      },
      {
        title: '청구 결과 — 차액·지연이자·통상임금 산입',
        content:
          '<p><strong style="color:#1e3a5f">청구 인용 시 차액 + 연 20% 지연이자 + 통상임금 재산정까지 따라옵니다.</strong></p>\n<ul>\n<li><strong>차액 임금</strong> — 미지급 상여금 전액, 3년 소멸시효 안에서 청구.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 이후 미지급분에 연 20% 지연이자(근기퇴직금법 제37조).</li>\n<li><strong>통상임금 산입</strong> — 정기·일률·고정 상여금이면 통상임금에 포함, 연장·야간수당도 재산정.</li>\n<li><strong>형사 처벌 압박</strong> — 임금체불은 사업주에게 형사 책임이 있어 합의 동기 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임금채권은 3년 시효라 매년 12월 31일 기준으로 시효 도과 분이 발생합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기상여금의 통상임금 해당성과 신의칙',
        summary:
          '대법원 2021다248299 사건(대법원, 2024 선고)에서 법원은 정기·일률·고정성을 갖춘 정기상여금은 통상임금에 해당하며, 회사가 일방으로 지급을 중단하거나 줄이는 것은 근로조건 불이익변경으로 정당한 절차를 거쳐야 한다는 취지로 판시했습니다.',
        takeaway: '정기상여금은 통상임금이므로 일방 중단은 임금체불·통상임금 재산정 두 갈래로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 "경영 사정에 따라 변동될 수 있다"고 적혀 있어요',
        answer:
          '<strong>조항이 있다고 해서 일방 중단이 정당화되지는 않습니다.</strong> 변경 절차(근로자 과반수 동의)와 합리성 심사를 따로 거쳐야 해요.',
      },
      {
        question: '상여금이 인사평가에 따라 달라지는 구조면 임금이 아닌가요?',
        answer:
          '<strong>완전 임의 평가형이면 임금성이 약합니다.</strong> 다만 최저 보장액·기본 산정 기준이 있다면 그 범위 내에서는 임금으로 인정될 수 있습니다.',
      },
      {
        question: '같은 부서 동료들과 함께 청구해도 되나요?',
        answer:
          '<strong>유리합니다.</strong> 집단 진정·집단소송은 비용 절감 + 입증 강화 + 회사 합의 동기 강화에 효과적입니다.',
      },
      {
        question: '재직 중인데 청구하면 보복당할까봐 걱정이에요',
        answer:
          '<strong>임금 청구를 이유로 한 불이익 처분은 근기법 위반입니다.</strong> 노동청 진정은 비공개 진행이 가능하고, 보복 시 별도 부당해고로 다툴 수 있어요.',
      },
      {
        question: '시효 3년이 지나면 한 푼도 못 받나요?',
        answer:
          '<strong>도과한 부분은 청구 불가입니다.</strong> 다만 내용증명 송달이나 노동청 진정 접수로 시효 중단이 가능하니 즉시 행동하세요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '정기상여금 통상임금 산입', href: '/guide/wage/wage-regular-bonus-ordinary' },
      { label: '취업규칙 불이익변경 절차', href: '/guide/wage/wage-rules-disadvantage-change' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-labor-office-petition' },
      { label: '내용증명 작성 요령', href: '/guide/wage/wage-certified-mail-template' },
      { label: '임금 시효 3년 관리', href: '/guide/wage/wage-3year-statute-management' },
    ],
  },

  // ─── 7. wage / incentive-promise-broken ───
  {
    domain: 'wage',
    slug: 'wage-incentive-promise-broken',
    keyword: '영업 인센티브 약속 미지급',
    questionKeyword: '영업 인센티브 받기로 약속받고 일했는데 미지급됐어요. 청구 가능한가요?',
    ctaKeyword: '영업 인센티브 미지급 청구 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '영업 인센티브 미지급 5가지 청구 입증 포인트 | 로앤가이드',
      description:
        '영업 실적에 따른 인센티브를 약속받고 일했는데 회사가 핑계 대며 안 주고 있다면 임금성 입증과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매출 1억 달성하면 200만원 준다고 했는데, 막상 달성하니까 평가가 다르다며 안 주네요"라는 사연이 많습니다. 인센티브가 사전 합의된 산정기준 + 실적 달성 시 자동 지급되는 구조라면 임금에 해당해 미지급 시 임금체불입니다. 카톡·메일·공지 등 약속을 입증할 자료가 있다면 노동청 진정만으로도 회수 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 인센티브가 임금인지 인센티브 보너스인지 구분 기준은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정기준의 명확성과 자동성에 따라 구분됩니다.</strong></p>\n<ul>\n<li><strong>임금형 인센티브</strong> — "매출 1억 = 200만원" 같은 사전 명확 기준 + 자동 지급.</li>\n<li><strong>보너스형 인센티브</strong> — 회사가 사후 임의로 평가·결정하는 구조면 임금성 약함.</li>\n<li><strong>지급 관행</strong> — 동일 기준으로 반복 지급된 이력이 있으면 임금성 강화.</li>\n<li><strong>구두 약속도 효력</strong> — 서면이 없어도 카톡·녹취·동료 진술로 약속 입증 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금형 인센티브가 인정되면 일반 임금처럼 노동청 진정만으로 회수 가능합니다.</blockquote>',
      },
      {
        title: 'Q. 약속 입증 자료는 어떤 게 가장 강력한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. "기준 + 시점 + 발신자"가 한 묶음으로 잡힌 기록이 결정적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카톡·메일·공지</strong> — "이번 분기 100% 달성하면 X원 지급" 같은 명확 약속 캡처.</li>\n<li><strong>2단계 — 사내 인센티브 정책</strong> — 영업본부 가이드라인·취업규칙 부속 문서 확보.</li>\n<li><strong>3단계 — 실적 데이터</strong> — CRM·매출 시스템에서 본인 실적 출력, 회사 마감 기준과 일치 확인.</li>\n<li><strong>4단계 — 동료 진술</strong> — 같은 기준으로 받은 동료 명세서·확인서 확보.</li>\n<li><strong>5단계 — 내용증명 후 진정</strong> — 청구 → 미지급 시 노동청 진정 또는 민사 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 인센티브 임금성과 입증 자료의 강도를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "기준 변경됐다"고 사후에 말 바꾸면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 약속 시점에 적용된 기준으로 지급해야 하고 사후 변경은 무효입니다.</strong></p>\n<ul>\n<li><strong>약속 당시 기준 우선</strong> — 일을 시작할 때 통보된 기준이 그 분기·연도에 적용.</li>\n<li><strong>변경 통보 시점</strong> — 변경 이후 발생한 실적부터만 새 기준 적용 가능.</li>\n<li><strong>불리변경 동의 필요</strong> — 산정 기준을 낮추는 변경은 개별 동의 필수.</li>\n<li><strong>사후 평가 끼워넣기</strong> — "정성 평가 추가됐다" 같은 사후 변경은 임의성으로 무효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입사 시 면접·교육 자료에 인센티브 기준이 명시되어 있다면 그 자체가 약속 증거입니다.</blockquote>',
      },
      {
        title: 'Q. 퇴사한 다음에 청구해도 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가능하고 오히려 더 유리할 수 있습니다.</strong></p>\n<ul>\n<li><strong>퇴직 후 14일</strong> — 미지급 시 연 20% 지연이자 추가(근기퇴직금법 제37조).</li>\n<li><strong>형사 압박</strong> — 임금체불은 사업주 형사책임 → 합의 동기 강화.</li>\n<li><strong>3년 시효</strong> — 임금채권 3년이라 시효 안에서만 청구 가능.</li>\n<li><strong>자료 백업 필수</strong> — 퇴사 전 카톡·메일·CRM 출력본을 개인 저장소에 미리 옮겨두기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사 시스템 접근권이 끊기면 자료 추출이 어려워지므로 퇴사 전 백업이 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명목과 지급 기준에 따른 임금성 판단',
        summary:
          '대법원 2022다255454 사건(대법원, 2024 선고)에서 법원은 명목이 무엇이든 사전에 정해진 산정기준에 따라 일률·자동으로 지급되는 금원은 임금으로 평가되며, 사용자가 사후 임의로 감액·미지급할 수 없다는 취지로 판시했습니다.',
        takeaway: '인센티브도 산정기준 + 자동성이 인정되면 임금이므로 임금체불 절차로 청구합니다.',
      },
    ],
    faq: [
      {
        question: '구두 약속만 있고 서면이 전혀 없는데 청구할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 카톡·녹취·동료 진술 등 간접증거로도 약속 입증이 됩니다. 다만 입증 부담이 본인에게 있으니 자료를 최대한 모으세요.',
      },
      {
        question: '회사가 "다음 달에 줄게" 미루기만 하는데 진정 시점은 언제가 좋은가요?',
        answer:
          '<strong>지급 약속일이 지났는데도 안 주면 즉시 진정이 가능합니다.</strong> 미루기 사유를 메일·카톡으로 받아두면 고의성 입증에 유리해요.',
      },
      {
        question: '본부장 약속인데 회사가 "본인 권한 아니다" 주장하면?',
        answer:
          '<strong>업무 수행 과정의 약속은 회사의 묵시적 추인으로 평가됩니다.</strong> 본부장 직위·메일 서명·전결규정으로 권한 있음을 입증하세요.',
      },
      {
        question: '미지급 인센티브 금액이 100만원 정도인데 진정해도 되나요?',
        answer:
          '<strong>금액 무관하게 진정 가능합니다.</strong> 소액이면 민사 소액심판(3,000만원 이하)으로도 빠르게 회수할 수 있어요.',
      },
      {
        question: '회사가 "다른 직원 평균보다 적어서" 차감했다는데?',
        answer:
          '<strong>약속한 산정기준에 평균 비교가 명시되지 않았다면 차감 불가입니다.</strong> 사후 임의 차감은 임금체불에 해당할 소지가 있습니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '인센티브 임금성 판단 기준', href: '/guide/wage/wage-incentive-employment-judgment' },
      { label: '구두 약속 임금 입증', href: '/guide/wage/wage-verbal-promise-evidence' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-labor-office-petition' },
      { label: '소액 민사 청구 절차', href: '/guide/wage/wage-small-claim-procedure' },
      { label: '퇴직 후 14일 지연이자', href: '/guide/wage/wage-retirement-14day-interest' },
    ],
  },

  // ─── 8. wage / mileage-allowance-cut ───
  {
    domain: 'wage',
    slug: 'wage-mileage-allowance-cut',
    keyword: '주유비 차량유지비 일방 삭감',
    questionKeyword: '매달 받던 주유비·차량유지비를 회사가 일방적으로 삭감했어요. 다툴 수 있나요?',
    ctaKeyword: '주유비 일방 삭감 임금성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '주유비·차량유지비 일방 삭감 4가지 다툼 포인트 | 로앤가이드',
      description:
        '영업·외근직에게 매달 정액으로 지급되던 주유비·차량유지비가 일방 삭감됐다면 임금성 판단과 차액 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 때부터 매달 30만원씩 주유비가 나왔는데, 갑자기 절반으로 줄였습니다"라는 상담이 많습니다. 명목이 실비변상이라도 정액·정기·일률로 지급되면 임금에 해당하고, 임금이라면 일방 삭감은 근로조건 불이익변경으로 무효입니다. 명목과 실질을 구분해 임금성을 입증하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 실비변상과 임금은 어떻게 구분하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 영수증 정산 여부와 정액 지급 여부로 갈립니다.</strong></p>\n<ul>\n<li><strong>실비변상</strong> — 실제 사용액을 영수증으로 정산해 후지급하는 형태(임금 아님).</li>\n<li><strong>정액 임금성</strong> — 실사용액과 무관하게 매달 같은 금액 지급(임금성 강함).</li>\n<li><strong>혼합형</strong> — 기본 정액 + 초과분 영수증 정산이면 정액분만 임금성 인정.</li>\n<li><strong>지급 관행</strong> — 영수증 없이 3년 이상 정액 지급되었으면 묵시적 임금 합의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정액·정기·일률 셋이 모이면 명목이 무엇이든 임금으로 평가됩니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "복리후생비라 임의로 줄일 수 있다"는데?',
        content:
          '<p><strong style="color:#1e3a5f">A. 복리후생비도 임금에 해당하면 일방 삭감 불가입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 명세서 분석</strong> — 급여명세서에 복리후생·차량유지·주유 항목이 어떻게 표기됐는지 확인.</li>\n<li><strong>2단계 — 지급 기준 입수</strong> — 취업규칙·임금협정·근로계약서의 차량 관련 조항 확보.</li>\n<li><strong>3단계 — 동일·유사 직급 비교</strong> — 같은 직급 동료가 같은 금액 받았는지 일률성 확인.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — "차감분 차액 청구" 명목으로 시점 확정.</li>\n<li><strong>5단계 — 노동청 진정</strong> — 임금체불로 진정, 비용 무료·6주~3개월 처리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 차량유지비의 임금성과 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 통상임금에도 산입되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기·일률·고정성을 갖추면 통상임금에도 포함됩니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월 동일 회기에 지급.</li>\n<li><strong>일률성</strong> — 일정 직급·외근직 전원에게 같은 기준으로 지급.</li>\n<li><strong>고정성</strong> — 사전에 정해진 정액으로 출근 일수와 무관하게 지급.</li>\n<li><strong>연장수당 재산정</strong> — 산입되면 연장·야간·휴일수당이 일괄 재계산되어 차액 발생.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통상임금 산입 차액은 임금 본체보다 청구액이 더 클 수 있어 가능한 한 함께 점검하세요.</blockquote>',
      },
      {
        title: 'Q. 회사가 "유가 인상에 따른 일시 조정"이라는데?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일시·재량 표현은 사후 합리화에 가깝습니다.</strong></p>\n<ul>\n<li><strong>변경 절차</strong> — 취업규칙 불이익변경은 근로자 과반수 동의 필요.</li>\n<li><strong>개별 동의</strong> — 근로계약·관행상의 정액은 개별 근로자 동의 필수.</li>\n<li><strong>외근 비용 증가</strong> — 유가 상승으로 비용이 더 늘었다면 오히려 인상 사유.</li>\n<li><strong>일시·항구 구분</strong> — "한 달만"이라더니 6개월 이상 유지되면 일방적 항구 변경.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 동의서를 받아갔다면 강박 여부·서명 시점·내용 인지 여부를 다시 점검하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기·일률·고정 지급 금원의 임금성',
        summary:
          '대법원 2025다214605 사건(대법원, 2025 선고)에서 법원은 명목과 무관하게 정기·일률·고정성을 갖추어 지급된 금원은 임금에 해당하며, 임금에 해당하는 이상 사용자가 일방으로 삭감하려면 근로조건 불이익변경 절차를 거쳐야 한다는 취지로 판시했습니다.',
        takeaway: '"복리후생비"라는 명목만으로 임금성이 부정되지 않습니다. 정기·일률·고정성이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '주유비를 카드로 결제하고 영수증 제출하는 구조면 임금성이 없나요?',
        answer:
          '<strong>실비정산형이면 임금성 약합니다.</strong> 단, 영수증 미제출 시에도 정액 지급된 부분이 있다면 그 부분만큼은 임금일 수 있어요.',
      },
      {
        question: '차감 후 동료들과 같은 시기에 진정해도 되나요?',
        answer:
          '<strong>유리합니다.</strong> 같은 회사 다수의 동시 진정은 임금성·일률성 입증을 강화하고 회사 합의 동기도 커집니다.',
      },
      {
        question: '재직 중인데 진정해도 보복당하지 않을까요?',
        answer:
          '<strong>임금 청구를 이유로 한 불이익은 근기법 위반입니다.</strong> 노동청 진정은 비공개 진행이 원칙이고 보복 시 별도 다툴 수 있어요.',
      },
      {
        question: '통상임금 재산정으로 더 받을 수 있는 게 있나요?',
        answer:
          '<strong>차량유지비가 통상임금에 산입되면 연장·야간·휴일수당까지 재산정됩니다.</strong> 본 차감액보다 부수 차액이 더 클 때가 많아요.',
      },
      {
        question: '소멸시효 3년이라는데 정확히 언제부터 계산하나요?',
        answer:
          '<strong>각 월별 임금 발생일(통상 매월 급여일)부터 3년입니다.</strong> 진정 접수·내용증명 송달로 시효 중단이 가능합니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '복리후생비의 임금성', href: '/guide/wage/wage-welfare-payment-employment' },
      { label: '통상임금 산입 검토', href: '/guide/wage/wage-ordinary-inclusion-check' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-labor-office-petition' },
      { label: '취업규칙 불이익변경 절차', href: '/guide/wage/wage-rules-disadvantage-change' },
      { label: '내용증명 작성 요령', href: '/guide/wage/wage-certified-mail-template' },
    ],
  },

  // ─── 9. unemployment / spouse-relocation-eligible ───
  {
    domain: 'unemployment',
    slug: 'unemployment-spouse-relocation-eligible',
    keyword: '배우자 발령 자진퇴사 정당이직',
    questionKeyword: '배우자가 다른 지역으로 발령받아서 사직했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '배우자 발령 정당이직 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 발령 자진퇴사 5단계 실업급여 인정 절차 | 로앤가이드',
      description:
        '배우자가 타지역 발령으로 동거 곤란해져 사직했다면 정당한 이직사유로 실업급여를 받는 정확한 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 부산으로 발령났는데 우리 회사는 서울이라 더는 출근이 어려웠어요"라는 사연이 늘고 있습니다. 자진퇴사라도 배우자 발령에 따른 동거 목적의 거주 이전은 고용보험법 시행규칙 제101조의2 정당한 이직사유에 해당할 소지가 있습니다. 발령 공문·전입신고·통근시간 입증 셋을 갖추면 자진퇴사라도 수급자격이 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '정당이직 — 어떤 요건을 갖추어야 하나',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2의 4가지 요건을 모두 충족해야 합니다.</strong></p>\n<ul>\n<li><strong>배우자 발령 사실</strong> — 인사발령 공문·재직증명서로 입증.</li>\n<li><strong>거주 이전</strong> — 새 주소지로 전입신고 + 실거주 입증(공과금·임대차계약).</li>\n<li><strong>통근 곤란</strong> — 새 주소지~기존 직장 왕복 통근시간 3시간 이상(대중교통 기준).</li>\n<li><strong>이직 시점 인접성</strong> — 발령일·이전일 전후 1~3개월 내 사직.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4가지 모두 입증되면 자진퇴사 코드라도 수급자격 인정 처분이 내려집니다.</blockquote>',
      },
      {
        title: '5단계 신청 — 사직 전후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">사직 전부터 자료를 모아야 신청 단계에서 시간을 줄일 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 발령 공문 확보</strong> — 회사 공식 인사발령서·재직증명서 미리 받기.</li>\n<li><strong>2단계 — 통근시간 입증</strong> — 카카오맵·네이버지도 대중교통 경로 PDF 출력.</li>\n<li><strong>3단계 — 이직확인서 코드 확인</strong> — "23번(가족 동거)"으로 기재되도록 회사에 요청.</li>\n<li><strong>4단계 — 전입신고 + 임대차</strong> — 새 주소지 전입신고 후 임대차계약서·공과금 영수증 보관.</li>\n<li><strong>5단계 — 고용센터 신청</strong> — 워크넷 구직등록 + 수급자격 신청, 별도 사유서 첨부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 정당이직 사유 충족 여부와 보강 자료를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 자진퇴사 코드(11번)로만 적어주면',
        content:
          '<p><strong style="color:#1e3a5f">코드는 정정 가능하고 정정 안 되어도 직접 사유서로 입증할 수 있습니다.</strong></p>\n<ul>\n<li><strong>정정 요청</strong> — 회사에 "23번(가족 동거)" 코드로 정정해달라 메일·카톡 요청.</li>\n<li><strong>정정 거부 시</strong> — 고용센터 신청 시 별도 사유서 + 입증자료로 직접 다툼.</li>\n<li><strong>처분 이의</strong> — 1차 거부 시 이의신청·심사청구·재심사청구 3단계.</li>\n<li><strong>표준 처리기간</strong> — 1차 신청 14일, 처분 이의 시 30~60일 추가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통근시간은 대중교통 출근 가능 첫차·막차 기준으로 산정해야 인정 가능성이 높습니다.</blockquote>',
      },
      {
        title: '인정 결과 — 수급자격·급여액·구직활동',
        content:
          '<p><strong style="color:#1e3a5f">정당이직 인정 시 자진퇴사라도 일반 실업급여와 동일한 조건이 됩니다.</strong></p>\n<ul>\n<li><strong>피보험단위기간 180일</strong> — 이직 전 18개월 중 180일 이상 충족 시 수급자격.</li>\n<li><strong>구직급여 일액</strong> — 평균임금의 60%, 상한 1일 6.6만원·하한 6.4만원(2026 기준).</li>\n<li><strong>소정급여일수</strong> — 가입기간·연령에 따라 120~270일.</li>\n<li><strong>구직활동 의무</strong> — 매 인정일마다 구직활동 1~2회 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 신청 지연 시 소급 미지급 위험이 있어 사직일~신청일 간격을 최소화하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당한 이직사유 인정 사례',
        summary:
          '대법원 2018두63235 사건(대법원, 2020 선고)에서 법원은 자발적 이직이라도 사회통념상 정당한 사정이 있다면 구직급여 수급자격이 제한되지 않으며, 가족 동거를 위한 거주 이전 등 시행규칙 별표2 사유는 정당이직으로 평가된다는 취지로 판시했습니다.',
        takeaway: '자진퇴사 코드여도 정당이직 사유 입증이면 실업급여 수급권이 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '동거 안 하고 따로 살아도 정당이직이 되나요?',
        answer:
          '<strong>동거 목적의 거주 이전이 핵심 요건입니다.</strong> 단, 자녀 양육·간병 등 부수 사정이 있다면 별도 사유로 검토 가능해요.',
      },
      {
        question: '왕복 3시간이라는 기준은 어떻게 계산하나요?',
        answer:
          '<strong>대중교통(지하철·버스) 출근 가능 시간대 기준입니다.</strong> 카카오맵·네이버지도 PDF 출력본을 첨부하면 입증력이 강합니다.',
      },
      {
        question: '회사 코드 정정을 거부하면 수급이 막히나요?',
        answer:
          '<strong>막히지 않습니다.</strong> 신청자가 직접 입증자료로 다툴 수 있고 처분 이의 단계에서 정정 가능성이 큽니다.',
      },
      {
        question: '발령 시점과 사직 시점이 6개월 차이 나는데 인정될까요?',
        answer:
          '<strong>인접성이 약하면 보강 사유가 필요합니다.</strong> 자녀 학교 일정·이전 준비 기간 등 합리적 이유를 사유서에 정리하세요.',
      },
      {
        question: '실업급여 받으면서 새 지역에서 구직활동만 해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 새 거주지 관할 고용센터로 이관 신청하면 동일 조건으로 수급 유지됩니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '정당한 이직사유 별표2', href: '/guide/unemployment/unemployment-justified-reason-table' },
      { label: '통근시간 3시간 입증', href: '/guide/unemployment/unemployment-commute-3hour-evidence' },
      { label: '이직확인서 코드 정정', href: '/guide/unemployment/unemployment-leaving-code-correction' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
      { label: '구직급여 일액 계산', href: '/guide/unemployment/unemployment-daily-amount-calc' },
    ],
  },

  // ─── 10. unemployment / disabled-family-care ───
  {
    domain: 'unemployment',
    slug: 'unemployment-disabled-family-care',
    keyword: '장애가족 돌봄 자진퇴사',
    questionKeyword: '장애가족·중증환자를 돌보려 사직했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '장애가족 돌봄 정당이직 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '장애가족 돌봄 자진퇴사 5가지 실업급여 인정 사례 | 로앤가이드',
      description:
        '장애가족·중증환자 돌봄 때문에 사직했다면 정당이직사유로 실업급여 수급자격을 받는 입증 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"어머니가 뇌졸중으로 쓰러져서 24시간 돌봄이 필요한데 회사를 못 다니겠더라고요"라는 사연이 적지 않습니다. 가족 간병·돌봄을 위한 자진퇴사도 고용보험법 시행규칙 별표2 정당이직사유에 해당할 소지가 있습니다. 장애 등록증·진단서·돌봄 필요성 입증 셋이 갖춰지면 수급자격이 인정되고, 심사 단계에서 거부되어도 이의신청·심사청구로 회복 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 가족·어떤 상태가 돌봄 사유로 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족 범위와 의료적 필요성 두 축으로 판단됩니다.</strong></p>\n<ul>\n<li><strong>가족 범위</strong> — 직계존비속·배우자·형제자매(만 14세 미만 자녀·만 65세 이상 부모 등 우선).</li>\n<li><strong>의료적 필요</strong> — 30일 이상 입원·통원치료가 필요한 부상·질병·장애.</li>\n<li><strong>장애 등록</strong> — 중증 장애인등록증·요양등급 인정자료가 가장 강력.</li>\n<li><strong>대체인력 부재</strong> — 동거가족이 본인뿐이거나 다른 가족이 돌봄 불가능한 상황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "30일 이상 + 본인 직접 돌봄 필요"가 인정 핵심 요건입니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 자료가 입증력 강한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. "의학적 자료 + 가족관계 자료 + 돌봄 필요 자료" 3종 세트가 표준입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·소견서</strong> — 30일 이상 치료·돌봄 필요 명시된 의학 자료.</li>\n<li><strong>2단계 — 가족관계증명서</strong> — 가족 관계 + 동거 사실 입증.</li>\n<li><strong>3단계 — 장애·요양 등급</strong> — 장애인등록증·노인장기요양보험 등급 인정서.</li>\n<li><strong>4단계 — 사직 사유서</strong> — "본인이 아니면 돌볼 사람 없음" 구체 서술.</li>\n<li><strong>5단계 — 회사 이직확인서</strong> — "23번(가족 간병)"으로 기재되도록 요청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 가족 돌봄 사유의 인정 가능성과 부족 자료를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 휴직·휴가를 권유했는데 거부하고 사직하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족돌봄휴가·휴직 활용 가능성도 함께 검토되므로 사전 협의 기록이 중요합니다.</strong></p>\n<ul>\n<li><strong>가족돌봄휴직 신청 흔적</strong> — 회사에 신청 → 거부·기간 부족 답변 메일 보존.</li>\n<li><strong>휴직 한도</strong> — 가족돌봄휴직 연 최대 90일이라 그 이상 필요하면 사직이 합리적.</li>\n<li><strong>유사 사례 비교</strong> — 동료 중 휴직 후 복귀 사례와 본인 사정의 차이 정리.</li>\n<li><strong>실질 판단</strong> — 휴직만으로 해결 안 되는 장기·중증이라면 사직 정당성 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 인사팀에 휴직·재택 가능 여부를 먼저 문의한 메일이 있으면 "사직 외 대안 없음" 입증에 결정적입니다.</blockquote>',
      },
      {
        title: 'Q. 거부되면 이의신청은 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부 통지일부터 90일 이내에 심사청구로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>심사청구</strong> — 처분 90일 이내, 고용보험심사관이 1차 재심사.</li>\n<li><strong>재심사청구</strong> — 심사 결정 90일 이내, 고용보험심사위원회가 2차 심사.</li>\n<li><strong>행정소송</strong> — 재심사 결정 90일 이내, 행정법원에 소제기.</li>\n<li><strong>보강자료 추가</strong> — 단계별로 진단서·돌봄 일지·가족 진술서 보강 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 90일 도과 시 다툼 자체가 막히므로 거부 통지 받자마자 일정을 거꾸로 계산하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자발적 이직과 정당한 이직사유 판단',
        summary:
          '대법원 2018두63235 사건(대법원, 2020 선고)에서 법원은 자발적 이직이라도 사회통념상 정당한 사정이 있다면 구직급여 수급자격이 제한되지 않으며, 가족 간병·중증환자 돌봄 등 시행규칙 별표2 사유는 정당이직으로 평가된다는 취지로 판시했습니다.',
        takeaway: '돌봄 사유는 표준 입증자료만 갖추면 자진퇴사 코드라도 수급권이 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '동거하지 않는 부모님 간병 때문에 사직해도 인정되나요?',
        answer:
          '<strong>동거 여부보다 직접 돌봄 필요성이 우선입니다.</strong> 다른 가족이 돌볼 수 없는 상황 + 본인이 매일 방문 돌봄을 한다면 인정 가능해요.',
      },
      {
        question: '회사가 가족돌봄휴직을 거부했다면 어떻게 입증하나요?',
        answer:
          '<strong>거부 메일·카톡·인사팀 답변을 그대로 보관하세요.</strong> 또는 "휴직 신청서 접수 거부" 자체가 회사 측 책임으로 인정될 수 있어요.',
      },
      {
        question: '진단서에 "30일 이상" 문구가 없으면 안 되나요?',
        answer:
          '<strong>"장기 치료 필요" 등 동등 표현도 가능합니다.</strong> 다만 "30일 이상" 명시가 가장 안전하니 발급 시 의사에게 요청하세요.',
      },
      {
        question: '돌봄 끝나고 다시 취업하면 실업급여 환수되나요?',
        answer:
          '<strong>구직활동 중 취업하면 환수 없이 정상 종료됩니다.</strong> 조기재취업수당까지 받을 수 있으니 신고 의무를 지키세요.',
      },
      {
        question: '본인이 외동인 경우 입증이 더 쉬운가요?',
        answer:
          '<strong>네, 가족관계증명서로 외동임이 확인되면 "대체인력 부재"가 자동 인정될 수 있습니다.</strong> 형제자매가 있다면 그들의 돌봄 불가 사유서를 첨부하세요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '가족돌봄휴직과 사직', href: '/guide/unemployment/unemployment-family-care-leave-resign' },
      { label: '정당이직 별표2 항목', href: '/guide/unemployment/unemployment-justified-reason-table' },
      { label: '심사청구 90일 일정', href: '/guide/unemployment/unemployment-appeal-90day' },
      { label: '진단서 양식과 발급', href: '/guide/unemployment/unemployment-diagnosis-format' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
    ],
  },

  // ─── 11. retirement / overseas-dispatch-continuous ───
  {
    domain: 'retirement',
    slug: 'retirement-overseas-dispatch-continuous',
    keyword: '해외법인 파견기간 퇴직금 합산',
    questionKeyword: '해외 자회사·법인에 파견된 기간이 퇴직금에 합산되나요?',
    ctaKeyword: '해외파견 퇴직금 계속근로 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외법인 파견 5단계 퇴직금 계속근로 합산 절차 | 로앤가이드',
      description:
        '해외법인·자회사 파견기간이 퇴직금 계속근로기간에 포함되는지 헷갈린다면 본사 지휘·감독·임금 출처로 합산을 입증하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"본사에서 5년, 미국 자회사에 3년 파견된 뒤 본사로 복귀했어요. 퇴직금은 8년치 계산되어야 하는데 회사는 5년만 계산하네요"라는 사연이 늘고 있습니다. 해외법인이 형식상 별도 법인이라도 본사가 지휘·감독·임금 부담을 했다면 동일 사용자로 평가되어 계속근로기간이 합산됩니다. 인사명령·급여 출처·복귀 통지 셋을 갖추는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '계속근로 합산 — 어떤 징표를 갖추어야 하나',
        content:
          '<p><strong style="color:#1e3a5f">본사·해외법인이 동일 사용자로 평가되는 4가지 핵심 징표입니다.</strong></p>\n<ul>\n<li><strong>인사명령 출처</strong> — 파견·복귀 명령이 본사 인사팀에서 발행.</li>\n<li><strong>임금 부담</strong> — 급여·상여·복리후생을 본사가 부담하거나 본사 계좌로 입금.</li>\n<li><strong>복귀 약정</strong> — 파견계약·인사발령서에 복귀 시점·직무가 명시.</li>\n<li><strong>지휘·감독</strong> — 일상 업무 보고를 본사 임원에게 하고 평가도 본사가 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4개 중 3개 이상이면 계속근로기간 합산이 거의 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 입증 — 합산 청구 준비 순서',
        content:
          '<p><strong style="color:#1e3a5f">파견 시작·복귀 시점 자료를 시간순으로 모으는 것이 가장 우선입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인사발령서·파견계약서</strong> — 발령 주체·복귀 약정·임금 출처 조항 확보.</li>\n<li><strong>2단계 — 급여명세서·이체기록</strong> — 본사 또는 해외법인 어느 쪽에서 입금됐는지 추적.</li>\n<li><strong>3단계 — 4대보험 가입이력</strong> — 국민연금·건보·고용보험 가입 끊김 여부 확인.</li>\n<li><strong>4단계 — 본사 보고체계 자료</strong> — 본사 임원에게 보고한 메일·결재라인 캡처.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사 청구</strong> — 본사 상대로 합산 퇴직금 차액 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해외파견 합산 가능성과 입증 자료를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "현지법인 별도 고용" 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">법인 형식보다 사용 종속관계의 실질이 우선입니다.</strong></p>\n<ul>\n<li><strong>중간 정산 흔적</strong> — 파견 직전 본사에서 퇴직금 정산받았는지 확인. 정산 없이 파견됐다면 계속근로 추정.</li>\n<li><strong>4대보험 연속</strong> — 국민연금·건강보험이 본사에서 끊기지 않고 유지됐다면 결정적 증거.</li>\n<li><strong>파견계약 표준 조항</strong> — "본사 소속 유지" 또는 "복귀 시 본사로" 문구가 있는지.</li>\n<li><strong>현지 고용계약 부재</strong> — 현지법인과 별도 근로계약서 체결 안 했으면 본사 소속.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 4대보험 가입이력서는 국민건강보험공단·국민연금공단에서 즉시 발급되어 결정적 증거가 됩니다.</blockquote>',
      },
      {
        title: '합산 결과 — 차액 퇴직금·평균임금 재계산',
        content:
          '<p><strong style="color:#1e3a5f">합산 인정 시 차액 퇴직금 + 평균임금 재산정 두 가지가 동시에 발생합니다.</strong></p>\n<ul>\n<li><strong>차액 퇴직금</strong> — 합산 후 계속근로기간 × 30일분 평균임금 - 기지급 퇴직금.</li>\n<li><strong>평균임금 재계산</strong> — 퇴직 직전 3개월 평균임금이 더 높으면 그 기준으로 재산정.</li>\n<li><strong>지연이자</strong> — 퇴직일 14일 이후 미지급분에 연 20% 지연이자.</li>\n<li><strong>3년 시효</strong> — 퇴직금 채권은 3년이라 퇴직 후 즉시 청구가 안전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 파견 중 본사 휴직 처리됐다면 그 기간 합산 여부는 별도 판단되므로 휴직 종류를 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 계속근로기간 산정과 동일 사용자 판단',
        summary:
          '대법원 2021다248299 사건(대법원, 2024 선고)에서 법원은 형식적으로 다른 법인이라도 인사·임금·지휘 감독의 실질이 동일 사용자로 평가되면 계속근로기간이 합산되며, 퇴직금 산정 시 그 전체 기간이 기준이 된다는 취지로 판시했습니다.',
        takeaway: '해외법인 파견도 본사 지휘·감독이 입증되면 계속근로 합산이 원칙입니다.',
      },
    ],
    faq: [
      {
        question: '파견 직전 본사에서 퇴직금을 정산받았으면 합산 안 되나요?',
        answer:
          '<strong>중간정산이 있었다면 그 시점 이후만 합산됩니다.</strong> 단, 본인 동의 없이 일방 정산했다면 무효 다툼이 가능해요.',
      },
      {
        question: '현지법인과 별도 근로계약서를 썼는데 합산 가능한가요?',
        answer:
          '<strong>실질이 본사 지휘·감독이면 가능합니다.</strong> 계약서가 형식적이고 실제 임금·지시가 본사라면 동일 사용자로 평가됩니다.',
      },
      {
        question: '파견기간 동안 4대보험이 끊겼다면 합산 어렵나요?',
        answer:
          '<strong>입증 부담은 늘지만 불가능하지 않습니다.</strong> 본사 보고체계·복귀 약정·인사명령 등 다른 자료로 보강하세요.',
      },
      {
        question: '본사로 복귀 못 하고 현지에서 바로 퇴사하면?',
        answer:
          '<strong>그 경우에도 본사 상대 청구가 가능할 수 있습니다.</strong> 다만 현지법인 책임이 우선 검토되므로 사안별 판단이 필요해요.',
      },
      {
        question: '평균임금은 본사 급여 기준인가요, 현지 급여 기준인가요?',
        answer:
          '<strong>퇴직 직전 3개월 실수령 임금이 기준입니다.</strong> 본사·현지 어느 쪽이든 마지막 3개월 임금이 적용됩니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '계속근로기간 합산 기준', href: '/guide/retirement/retirement-continuous-service-rules' },
      { label: '동일 사용자 판단 징표', href: '/guide/retirement/retirement-same-employer-test' },
      { label: '평균임금 산정 방법', href: '/guide/retirement/retirement-average-wage-calc' },
      { label: '중간정산 효력 다툼', href: '/guide/retirement/retirement-mid-settlement-validity' },
      { label: '퇴직금 청구 노동청 진정', href: '/guide/retirement/retirement-labor-office-petition' },
    ],
  },

  // ─── 12. retirement / merger-effective-date ───
  {
    domain: 'retirement',
    slug: 'retirement-merger-effective-date',
    keyword: '합병 퇴직금 기산일 포괄승계',
    questionKeyword: '회사 합병 후 퇴직금 기산일은 합병 전부터인가요, 합병일부터인가요?',
    ctaKeyword: '합병 퇴직금 기산일 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '합병 시 퇴직금 기산일 4가지 포괄승계 원칙 | 로앤가이드',
      description:
        '회사 합병 후 퇴직금 기산일이 합병 전 입사일인지 합병일인지 헷갈린다면 포괄승계 원칙으로 정확한 기산일을 확인하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 다닌 회사가 합병됐는데, 합병 후 새 회사가 퇴직금은 합병일부터만 계산한대요"라는 사연이 많습니다. 합병은 근로관계 포괄승계가 원칙이라 퇴직금 기산일은 원래 입사일이 그대로 이어지고, 합병 후 새 법인이 합병 전 기간을 인정하지 않으면 임금체불·근로조건 불이익변경으로 다툴 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 합병 후 퇴직금 기산일은 정확히 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 포괄승계 원칙상 원래 입사일이 그대로 이어집니다.</strong></p>\n<ul>\n<li><strong>흡수합병·신설합병</strong> — 소멸회사의 권리·의무를 존속·신설회사가 포괄승계.</li>\n<li><strong>근로관계도 자동 승계</strong> — 별도 동의 없이 입사일·근속·퇴직금 적립이 그대로 이전.</li>\n<li><strong>중간정산 부재</strong> — 합병 직전 퇴직금 정산이 없었다면 계속근로기간 그대로 유지.</li>\n<li><strong>분할의 경우</strong> — 분할로 사업이 이전된 부분의 근로자는 분할일 이전 기간 합산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합병일이 아니라 원래 입사일이 퇴직금 기산일입니다(근기퇴직금법 제8조).</blockquote>',
      },
      {
        title: 'Q. 새 회사가 "합병일부터 새 근속" 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일방적 근속 단절은 불이익변경으로 무효 다툼이 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합병 등기·공시 확보</strong> — 등기부등본·금감원 공시에서 합병일·승계 사실 입증.</li>\n<li><strong>2단계 — 합병 전 입사일 입증</strong> — 근로계약서·재직증명서·4대보험 이력으로 입사일 확정.</li>\n<li><strong>3단계 — 중간정산 부재 확인</strong> — 합병 직전 퇴직금 명세서 받았는지 확인. 안 받았으면 승계.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — "합병 전 기간 포함한 계속근로기간 인정 요청".</li>\n<li><strong>5단계 — 노동청 진정 또는 민사</strong> — 차액 퇴직금 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 합병 형태별 기산일 적용과 차액 산정을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 합병 시 본인 동의로 정산받았는데 무효 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의의 진정성·시기에 따라 무효 다툼이 가능합니다.</strong></p>\n<ul>\n<li><strong>강박·기망</strong> — "정산 안 하면 승계 못 한다"는 식 강요였다면 의사표시 취소.</li>\n<li><strong>설명의무 위반</strong> — 정산 시 불이익(통상임금 인상·소멸시효 단축 등) 미고지 시 무효 가능.</li>\n<li><strong>일방 양식 사용</strong> — 회사가 일괄 양식에 서명만 받았다면 진정 동의로 보기 어려움.</li>\n<li><strong>정산 후 조건 변경</strong> — 정산 후 평균임금이 인상됐다면 차액분 추가 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "동의서 서명 시점에 합병 사실을 몰랐다"면 설명의무 위반으로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 분할·영업양도일 때는 어떻게 다른가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 분할은 원칙적 승계, 영업양도는 특약 우선이지만 배제특약은 무효입니다.</strong></p>\n<ul>\n<li><strong>분할</strong> — 사업부문이 이전되면 그 사업부 근로자의 근로관계도 자동 승계.</li>\n<li><strong>영업양도</strong> — 양도·양수 당사자 특약 가능. 단, 근로자 배제 특약은 사해적 해고로 무효.</li>\n<li><strong>인적 분할</strong> — 분할 시 본인이 어느 법인 소속이 되는지 사전 통지 필요.</li>\n<li><strong>물적 분할</strong> — 모회사-자회사 구조로 변경 시 모회사가 기존 근로관계 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합병·분할·영업양도 어느 형태든 "원래 입사일이 기산일"이 원칙이며, 단절은 예외적·엄격하게 인정될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도와 근로관계 포괄승계의 원칙',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 영업양도가 이루어지면 반대 특약이 없는 한 양도인과 근로자 사이의 근로관계가 양수인에게 포괄적으로 승계되며, 근로관계 일부를 배제하는 특약은 실질 해고에 해당해 정당한 이유가 있어야 유효하다는 취지로 판시했습니다.',
        takeaway: '합병·양도·분할 모두 포괄승계가 원칙이고, 퇴직금 기산일도 원래 입사일이 유지됩니다.',
      },
    ],
    faq: [
      {
        question: '합병 후 신규 입사 양식에 다시 서명했는데 기산일이 바뀌나요?',
        answer:
          '<strong>형식적 서명만으로는 기산일이 바뀌지 않습니다.</strong> 실질이 계속근로면 원래 입사일이 유지되고, 새 양식은 절차적 정리에 불과해요.',
      },
      {
        question: '4대보험 가입이력은 어디서 확인하나요?',
        answer:
          '<strong>국민건강보험공단·국민연금공단·근로복지공단 홈페이지에서 즉시 발급됩니다.</strong> 가입이력이 끊기지 않았다면 결정적 증거예요.',
      },
      {
        question: '회사가 "퇴직금 규정이 새로 바뀌어서" 다르게 계산한다면?',
        answer:
          '<strong>불이익한 규정 변경은 근로자 과반수 동의가 필요합니다.</strong> 본인이 동의하지 않았다면 합병 전 규정으로 산정하는 게 원칙이에요.',
      },
      {
        question: '소멸한 회사 시절 미지급 임금은 누구에게 청구하나요?',
        answer:
          '<strong>존속·신설회사에 청구합니다.</strong> 합병 시 권리·의무 포괄승계 원칙상 미지급 임금도 새 법인이 부담합니다.',
      },
      {
        question: '내가 분할 후 어느 법인 소속인지 헷갈려요',
        answer:
          '<strong>분할 공시·인사발령서·근로계약서 갱신본을 확인하세요.</strong> 명확한 통지 없이 분할이 끝났다면 본인이 동의한 부분만 효력이 있어요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '합병·양도 시 근로관계 승계', href: '/guide/retirement/retirement-merger-acquisition-succession' },
      { label: '계속근로기간 합산 기준', href: '/guide/retirement/retirement-continuous-service-rules' },
      { label: '중간정산 효력 다툼', href: '/guide/retirement/retirement-mid-settlement-validity' },
      { label: '평균임금 산정 방법', href: '/guide/retirement/retirement-average-wage-calc' },
      { label: '퇴직금 청구 노동청 진정', href: '/guide/retirement/retirement-labor-office-petition' },
    ],
  },
];
