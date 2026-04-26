import { SpokePage } from '../spoke-pages';

// batch47 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 수습 기간 직무 부적격 판정으로 해고된 근로자가 평가 기준의 공정성과 절차 흠결을 다투도록 돕는 페이지다.
// 2. 이 페이지는 장애를 이유로 합리적 편의 제공 없이 해고된 근로자가 장애인차별금지법·근기법 제23조 위반으로 다투도록 돕는 페이지다.
// 3. 이 페이지는 합법 파업 참여 후 업무 복귀를 거부당하거나 해고된 근로자가 부당노동행위·부당해고 구제절차를 준비하도록 돕는 페이지다.
// 4. 이 페이지는 정신질환으로 휴직 후 복직을 거부당한 근로자가 차별 시정과 복직 강제 절차를 검토하도록 돕는 페이지다.
// 5. 이 페이지는 정당한 야근 거부를 이유로 해고된 근로자가 근로기준법상 강제 근로 금지·부당해고 다툼을 준비하도록 돕는 페이지다.

export const spokesBatch47Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-probation-skill-deficient-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-skill-deficient-relief',
    keyword: '수습 직무 부적격 해고 다툼',
    questionKeyword: '수습 기간 중 직무 부적격 판정으로 해고됐는데 부당해고로 다툴 수 있나요?',
    ctaKeyword: '수습 해고 구제신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수습 직무 부적격 해고 4가지 다툼 절차 | 로앤가이드',
      description:
        '수습 기간 중 직무 부적격 판정을 받고 해고됐다면 평가 기준 공정성과 절차 흠결로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 2개월째에 수습 부적격 통보를 받았어요. 어떤 기준으로 평가했는지도 모르겠고 갑작스러웠습니다"라는 사연이 늘고 있습니다. 수습 기간이라도 근로자는 근로기준법 제23조의 보호를 받으며, 사용자는 평가가 공정하고 객관적 기준에 따랐음을 입증해야 합니다. 해고 통보를 받은 날로부터 3개월 이내에 지방노동위원회에 구제신청을 해야 하니 시간이 핵심 변수입니다. 평가표·면담 기록·업무 지시 내역을 지금 바로 정리해두는 것이 첫 번째 할 일입니다.</p>',
    sections: [
      {
        title: '수습 해고가 정당하려면 — 회사가 입증해야 할 4가지',
        content:
          '<p><strong style="color:#1e3a5f">대법원 2021두33470 판결에 따르면 근무능력 불량 해고는 단순히 다른 사람보다 낮은 정도를 넘어, 상당 기간 최소 기대치에도 미치지 못하고 향후 개선 가능성이 없어야 정당합니다.</strong></p>\n<ul>\n<li><strong>공정·객관적 평가 기준</strong> — 사전에 공지된 기준과 지표로 평가했는지.</li>\n<li><strong>충분한 개선 기회 부여</strong> — 지적·지도·재평가 기회를 제공했는지.</li>\n<li><strong>비교 가능한 다른 수습 직원 처우</strong> — 같은 기준을 동일하게 적용했는지.</li>\n<li><strong>징계 절차 준수</strong> — 사전 통지·소명 기회를 부여했는지 (통상해고라도 원칙적 적용).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이 중 하나라도 결여되면 부당해고로 다툴 수 있는 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 8단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구제신청서 제출</strong> (해고일로부터 3개월 이내) — 사업장 관할 지방노동위원회, 우편·방문·온라인 모두 가능.</li>\n<li><strong>2단계 — 신청이유서 + 증거 제출</strong> — 해고통보서, 수습 평가표, 근로계약서, 면담 기록 등 각 2부.</li>\n<li><strong>3단계 — 조사</strong> (통상 1~2개월) — 조사관 진술·자료 검토, 화해 권고 가능.</li>\n<li><strong>4단계 — 심문회의</strong> (접수 후 60일 이내) — 5인 위원회 합의체 심리.</li>\n<li><strong>5단계 — 판정·명령</strong> — 구제명령(복직·임금상당액·금전보상) 또는 기각.</li>\n<li><strong>6단계 — 재심</strong> (판정서 송달 10일 이내) — 불복 시 중앙노동위원회.</li>\n<li><strong>7단계 — 행정소송</strong> (재심판정 송달 15일 이내) — 행정법원 취소소송.</li>\n<li><strong>8단계 — 확정·집행</strong> — 미이행 시 이행강제금 1회 최대 3,000만원.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 해고 다툼의 구체적 절차와 준비 서류를 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 서류를 최대한 빠르게 확보하는 것이 중요합니다.</strong></p>\n<ul>\n<li><strong>근로계약서</strong> — 수습 기간·조건·평가 기준 기재 여부 확인.</li>\n<li><strong>해고통보서</strong> — 이메일·문자·서면 등 수령 형태 무관, 전부 보존.</li>\n<li><strong>수습 평가표·점수</strong> — 가능한 경우 직접 수령 요청 or 출력 보관.</li>\n<li><strong>업무 지시·피드백 이메일</strong> — 수습 기간 중 상사가 보낸 업무 지시, 칭찬/지적 내용 포함.</li>\n<li><strong>급여명세서 (최근 3개월)</strong> — 수습 기간 임금 산정 기준 확인.</li>\n<li><strong>취업규칙·인사규정</strong> — 수습 기간 평가 절차 규정 여부 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 서류 제공을 거부해도 노동위 조사 과정에서 제출 요구가 가능합니다.</blockquote>',
      },
      {
        title: '회사가 "수습은 해고가 자유롭다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">수습 기간이라도 근로기준법 제23조 정당한 이유 요건은 동일하게 적용됩니다.</strong></p>\n<ul>\n<li><strong>판례 입장</strong> — 수습 해고는 일반 해고보다 완화된 기준을 인정하나, 여전히 평가의 공정성과 개선 기회 부여가 요구됩니다.</li>\n<li><strong>구체적 기준 부재</strong> — 평가 지표가 사전에 공지되지 않았다면 자의적 해고로 다툴 수 있습니다.</li>\n<li><strong>단기간 판정</strong> — 수습 1개월 미만의 단기 판정은 직무 능력을 판단하기에 불충분하다는 주장이 인정된 사례가 있습니다.</li>\n<li><strong>동료 비교</strong> — 같은 부서 다른 수습 직원이 정규직 전환된 사실은 유력한 비교 자료가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3개월 구제신청 기한을 놓치면 노동위 구제 자체가 막히니 해고 통보일을 반드시 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 수습 근무능력 불량 해고의 정당성 판단 기준',
        summary:
          '대법원 2021두33470 사건(대법원, 2023.12.28 선고)에서 법원은 사용자가 근무성적·능력 불량을 이유로 해고할 때에는 평가가 공정하고 객관적 기준에 따라 이루어져야 하며, 다른 근로자보다 상대적으로 낮은 정도를 넘어 상당한 기간 동안 최소 기대 수준에도 미치지 못하고 향후 개선 가능성을 인정하기 어려운 경우에 한해 해고의 정당성이 인정된다고 판시했습니다.',
        takeaway: '평가 기준이 사전에 공지되지 않았거나 개선 기회가 없었다면 수습 해고도 부당해고로 다툴 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '수습 기간이라도 부당해고 구제신청이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 수습 근로자도 근로기준법 제23조 보호를 받으며, 정당한 이유 없는 해고는 부당해고로 다툴 수 있습니다.',
      },
      {
        question: '평가표를 받지 못했는데 어떻게 다투나요?',
        answer:
          '<strong>노동위 조사 단계에서 회사에 자료 제출을 요구할 수 있습니다.</strong> 지금 바로 이메일·업무 지시 등 본인 보관 자료부터 정리해두세요.',
      },
      {
        question: '해고 통보를 구두로 받았는데도 신청할 수 있나요?',
        answer:
          '<strong>구두 해고도 효력이 있고, 구제신청도 가능합니다.</strong> 단, 통보 날짜를 정확히 확인해 3개월 기한을 놓치지 않는 것이 중요합니다.',
      },
      {
        question: '수습 기간 만료 후 자동으로 퇴직 처리됐다고 하면 어떻게 되나요?',
        answer:
          '<strong>계약서에 수습 만료 시 자동 종료 조항이 있더라도 정당성 판단 여지가 있습니다.</strong> 묵시적 갱신 기대권 등 개별 사실관계 확인이 필요합니다.',
      },
      {
        question: '구제 결과로 복직이 인정되면 어떻게 되나요?',
        answer:
          '<strong>원직복직 명령과 함께 해고 기간 동안의 임금상당액도 받을 수 있습니다.</strong> 복직이 현실적으로 어렵다면 금전보상명령을 신청하는 방법도 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 사전 통지 절차 위반', href: '/guide/dismissal/dismissal-notice-procedure-violation' },
      { label: '수습 기간 근로계약 조건', href: '/guide/dismissal/dismissal-probation-contract-conditions' },
      { label: '인사평가 급락의 위법성', href: '/guide/dismissal/dismissal-evaluation-drop-illegality' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 2. dismissal / dismissal-disability-accommodation-fail-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disability-accommodation-fail-relief',
    keyword: '장애 합리적 편의 미제공 해고',
    questionKeyword: '장애를 이유로 합리적 편의를 제공받지 못한 채 해고됐는데 어떻게 다툴 수 있나요?',
    ctaKeyword: '장애 해고 차별 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '장애 합리적 편의 미제공 해고 5가지 다툼 가이드 | 로앤가이드',
      description:
        '장애를 이유로 업무 조정이나 편의 제공 없이 해고됐다면 장애인차별금지법과 근로기준법으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>휠체어를 사용하거나 만성 질환이 있다는 이유만으로 업무 조정 요청이 묵살되고 결국 해고 통보를 받는 일이 현실에서 벌어지고 있습니다. 장애인차별금지법 제10조는 사용자가 장애 근로자에게 합리적 편의를 제공할 의무를 명시하며, 편의 미제공으로 인한 해고는 차별행위에 해당할 소지가 있습니다. 부당해고 구제신청과 국가인권위원회 진정, 두 경로를 병행하는 것이 일반적입니다. 해고일로부터 3개월 이내 구제신청, 차별행위일로부터 1년 이내 인권위 진정이 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 합리적 편의 제공 의무란 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 장애인차별금지법 제10조에 따라 사용자는 업무 수행이 가능하도록 시설·장비·업무 조정 등 합리적 편의를 제공해야 합니다.</strong></p>\n<ul>\n<li><strong>시설 접근성</strong> — 이동 보조 기구 사용, 작업 공간 조정, 화장실 접근 등.</li>\n<li><strong>업무 재배치</strong> — 장애 유형에 맞춰 담당 업무·근무 시간을 조정.</li>\n<li><strong>보조 기기·소프트웨어</strong> — 시각·청각 장애를 위한 화면 낭독기, 보청기 등.</li>\n<li><strong>추가 휴가·유연근무</strong> — 정기 치료를 위한 병가·재택근무 허용 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사용자가 이 의무를 이행하지 않은 채 해고했다면 차별행위로 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어떻게 다투나요? — 2가지 경로 병행',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제신청과 국가인권위원회 진정을 동시에 진행하는 것이 일반적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보</strong> — 편의 제공 요청 이메일·문자, 사측 거부 답변, 진단서, 장애인등록증.</li>\n<li><strong>2단계 — 노동위 구제신청</strong> (해고일 3개월 이내) — 부당해고 및 부당노동행위(해당 시) 동시 신청.</li>\n<li><strong>3단계 — 인권위 진정</strong> (차별행위일 1년 이내) — 장애인차별금지법 위반으로 별도 진정.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> — 장애인고용촉진법 위반 여부 포함 진정 가능.</li>\n<li><strong>5단계 — 민사소송 병행 검토</strong> — 차별로 인한 손해배상 청구 (3년 소멸시효).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">장애 해고 다툼의 두 경로를 어떻게 병행할지 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "업무 능력 부족"을 이유로 들면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 편의 제공 없이 평가된 결과를 그대로 해고 근거로 삼는 것은 차별 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>편의 제공 선행 의무</strong> — 편의를 제공한 뒤에도 업무 수행이 불가능한지를 판단해야 하며, 제공 전 해고는 순서가 뒤바뀐 것입니다.</li>\n<li><strong>장애-업무 관련성</strong> — 장애와 직접 관련 없는 업무 능력을 이유로 들었다면 구실로 볼 소지가 있습니다.</li>\n<li><strong>비교 대상 근로자</strong> — 장애 없는 동료와 동일 기준으로 평가됐는지 확인이 필요합니다.</li>\n<li><strong>해고 시점 인과관계</strong> — 편의 제공 요청 직후 해고가 이루어졌다면 보복적 해고 정황으로 볼 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 편의 제공 요청 시점과 해고 통보 시점의 시간 간격이 짧을수록 인과관계 주장이 강해집니다.</blockquote>',
      },
      {
        title: 'Q. 인권위 진정과 노동위 구제신청이 함께 진행될 때 주의할 점은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 두 절차가 병행될 때 진술이 일치해야 합니다.</strong></p>\n<ul>\n<li><strong>사실관계 통일</strong> — 노동위와 인권위에 제출하는 사실관계·날짜·대화 내용이 일치해야 합니다.</li>\n<li><strong>증거 사본 준비</strong> — 각 기관에 별도 제출용 사본을 충분히 준비해두는 것이 좋습니다.</li>\n<li><strong>소멸시효 관리</strong> — 인권위 진정: 1년, 노동위 구제: 3개월, 민사: 3년 — 가장 짧은 노동위 기한이 우선입니다.</li>\n<li><strong>인권위 결정 활용</strong> — 인권위가 차별로 인정하면 노동위·법원에서 유력한 참고자료가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 노동위 구제신청 3개월 기한이 가장 짧으니 동시에 진행하는 것이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무능력 불량 해고 시 개선 기회 부여 의무',
        summary:
          '대법원 2021두33470 사건(대법원, 2023.12.28 선고)에서 법원은 근무성적이나 근무능력이 불량하다는 이유로 해고하려면 사용자가 교육과 전환배치 등 개선을 위한 기회를 부여했는지 여부를 반드시 종합적으로 고려해야 한다고 판시했습니다. 특히 개선 기회 없이 단기간에 이루어진 해고는 정당성이 인정되기 어렵습니다.',
        takeaway: '편의 미제공과 개선 기회 부재가 결합된 해고는 정당성 요건을 충족하지 못할 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '장애인등록증이 없어도 보호받을 수 있나요?',
        answer:
          '<strong>공식 장애 등록 여부와 무관하게 실질적 장애가 인정되면 보호 범위가 검토됩니다.</strong> 진단서·소견서로 장애 사실을 소명하면 됩니다.',
      },
      {
        question: '편의 제공 요청을 구두로만 했는데 입증이 가능한가요?',
        answer:
          '<strong>구두 요청도 증거가 될 수 있습니다.</strong> 이후 카카오톡·이메일로 "지난번 말씀드린 대로…" 형태로 남겨두면 입증이 훨씬 쉬워집니다.',
      },
      {
        question: '인권위에 진정하면 해고가 취소되나요?',
        answer:
          '<strong>인권위는 권고 기관으로, 직접 취소 권한은 없습니다.</strong> 복직·원상회복을 강제하려면 노동위 구제신청이나 법원 소송이 별도로 필요합니다.',
      },
      {
        question: '회사가 장애 사실을 몰랐다고 주장하면?',
        answer:
          '<strong>편의 제공 요청 자체가 장애 고지 증거가 됩니다.</strong> 요청 이후 사측이 인지했음을 보여주는 메일·회의록이 있으면 충분합니다.',
      },
      {
        question: '손해배상 청구도 가능한가요?',
        answer:
          '<strong>차별로 인한 손해에 대해 민사 손해배상 청구를 검토해볼 수 있습니다.</strong> 정신적 위자료 + 일실 임금 두 갈래로 청구하는 것이 일반적이며 3년 소멸시효가 적용됩니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '장애 차별 국가인권위 진정 절차', href: '/guide/dismissal/dismissal-disability-discrimination-complaint' },
      { label: '해고 이유 요청 및 서면 통지 의무', href: '/guide/dismissal/dismissal-written-notice-obligation' },
      { label: '직장 내 차별 다툼 포인트', href: '/guide/dismissal/dismissal-workplace-discrimination-relief' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 3. dismissal / dismissal-strike-participation-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-strike-participation-relief',
    keyword: '합법 파업 참여 후 해고',
    questionKeyword: '합법 파업에 참여했다가 해고됐는데 부당해고·부당노동행위로 다툴 수 있나요?',
    ctaKeyword: '파업 해고 구제신청 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '합법 파업 참여 후 해고 5단계 구제절차 | 로앤가이드',
      description:
        '합법적 쟁의행위에 참여했다는 이유로 해고됐다면 부당해고와 부당노동행위 구제를 동시에 신청하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>파업에 참여하고 복귀했더니 "업무 방해"를 이유로 해고 통보를 받았다는 사연이 적지 않습니다. 노동조합법 제81조는 정당한 쟁의행위를 이유로 한 해고를 부당노동행위로 금지하며, 근로기준법 제23조 부당해고와 함께 두 경로로 동시에 다툴 수 있습니다. 파업의 합법성이 인정되면 해고 자체가 원인 무효가 될 수 있으므로, 파업 신고 여부·절차 준수 여부를 먼저 확인하는 것이 핵심입니다. 해고일로부터 3개월 이내 지방노동위원회 구제신청이 최우선 기한입니다.</p>',
    sections: [
      {
        title: '합법 파업의 요건 — 4가지 체크포인트',
        content:
          '<p><strong style="color:#1e3a5f">파업이 아래 4가지 요건을 모두 충족하면 참여를 이유로 한 해고는 부당노동행위로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>주체 적법성</strong> — 합법적으로 설립·신고된 노동조합이 주도한 파업인지.</li>\n<li><strong>목적 정당성</strong> — 근로조건 유지·개선을 위한 쟁의행위인지 (정치 파업 제외).</li>\n<li><strong>절차 준수</strong> — 노동위원회 조정 절차 이후 적법하게 쟁의행위를 개시했는지.</li>\n<li><strong>방법 정당성</strong> — 폭력·파괴 없는 평화적 방법으로 진행됐는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4가지 모두 충족한 파업 참여를 이유로 해고하면 노동조합법 제81조 위반 부당노동행위로 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부당해고 + 부당노동행위 동시 신청',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 공식 절차를 기준으로 보면 부당해고와 부당노동행위 구제신청을 동시에 진행하는 것이 효율적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구제신청서 제출</strong> (해고일 3개월 이내) — 부당해고 + 부당노동행위 두 가지 동시 신청. 관할 지방노동위원회에 방문·우편·온라인 접수.</li>\n<li><strong>2단계 — 신청이유서 + 파업 관련 증거 제출</strong> — 파업 신고서, 쟁의행위 경위서, 해고 통보서, 복직 거부 내역.</li>\n<li><strong>3단계 — 조사</strong> (1~2개월) — 파업 합법성·해고 시점·인과관계 조사.</li>\n<li><strong>4단계 — 심문회의</strong> (접수 60일 이내) — 파업 참여 사실과 해고 사유 연결고리 집중 심리.</li>\n<li><strong>5단계 — 판정·명령</strong> — 부당노동행위 인정 시 원직복직 + 임금상당액 + 부당노동행위 구제명령 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">파업 해고 다툼에 필요한 서류와 절차를 AI가 단계별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '회사가 "파업이 아닌 업무 태만·무단결근으로 해고했다"라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">파업 참여와 해고 사이의 인과관계 입증이 핵심입니다.</strong></p>\n<ul>\n<li><strong>시간적 근접성</strong> — 파업 복귀 직후 해고 통보가 이루어진 경우 인과관계 정황이 강합니다.</li>\n<li><strong>선별적 징계</strong> — 파업 참여자만 해고되고 비참여자는 같은 상황에서도 징계를 받지 않았다면 차별적 징계로 다툴 수 있습니다.</li>\n<li><strong>징계 기록 부재</strong> — 파업 전에는 동일 행위(지각·결근)로 징계받지 않았는데 파업 후 갑자기 해고됐다면 명분 쌓기 정황입니다.</li>\n<li><strong>정당행위 인정</strong> — 합법 파업 기간 중 파업 참여는 근로 계약상 의무 위반이 아닙니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 파업 참여자 명단과 해고 대상자 명단이 일치한다면 부당노동행위 입증의 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·임금상당액·부당노동행위 시정명령',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 + 부당노동행위가 모두 인정될 경우 두 갈래 구제가 모두 이루어질 수 있습니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 해고 전 동일 직무·동일 처우로 복귀.</li>\n<li><strong>임금상당액</strong> — 해고 기간 동안 받았어야 할 임금 전액.</li>\n<li><strong>부당노동행위 시정명령</strong> — 향후 동일 행위 반복 금지 명령.</li>\n<li><strong>금전보상명령</strong> — 복직이 사실상 불가능한 경우 6~12개월치 보상으로 갈음 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재심 신청은 판정서 송달 10일, 행정소송은 재심판정 송달 15일 이내로 기한이 매우 짧습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 노동조합 활동을 이유로 한 인사고과 불이익과 부당노동행위',
        summary:
          '대법원 2023두41864 사건(대법원, 2025.04.03 선고)에서 법원은 노동조합 활동을 이유로 하위 인사고과를 부여하고 승격에서 탈락시키는 사용자의 행위는 부당노동행위에 해당하며, 인사고과와 그에 따른 임금 불이익은 같은 단위 기간 내 하나의 계속하는 부당노동행위로 볼 수 있다고 판시했습니다.',
        takeaway: '파업·조합 활동을 이유로 한 불이익 처우는 구제신청 기한 내 모두 하나의 부당노동행위로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '파업이 일부 절차를 어겼다면 참여자도 징계 대상이 되나요?',
        answer:
          '<strong>절차 위반 정도에 따라 달라집니다.</strong> 사용자가 절차 위반을 이유로 해고 정당성을 주장할 수 있으나, 위반이 경미한 경우 해고까지는 비례성 원칙에 반할 수 있습니다.',
      },
      {
        question: '조합원이 아닌 비조합원도 파업에 참여했다가 해고됐을 때 다툴 수 있나요?',
        answer:
          '<strong>비조합원 참여 파업은 부당노동행위 보호 범위 밖일 수 있습니다.</strong> 다만 부당해고로는 별도로 다툴 수 있으니 구제신청 자체는 가능합니다.',
      },
      {
        question: '파업 중 대체 인력이 투입됐는데 어떻게 되나요?',
        answer:
          '<strong>파업 기간 중 대체근로는 법적으로 제한됩니다.</strong> 위법한 대체근로 사실도 파업의 합법성을 뒷받침하는 자료로 활용할 수 있습니다.',
      },
      {
        question: '파업 전에 이미 징계 기록이 있어도 다툴 수 있나요?',
        answer:
          '<strong>이전 징계 기록은 해고의 정당성 판단에 영향을 줄 수 있습니다.</strong> 그러나 파업 참여와의 직접 인과관계가 입증되면 부당노동행위 주장은 별도로 유지됩니다.',
      },
      {
        question: '구제신청 중에 다른 직장을 구해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 다른 직장 취업은 구제신청 권리에 영향이 없으며, 중간 취업 기간의 수입은 임금상당액 산정 시 공제 대상이 될 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '부당노동행위 구제신청 절차', href: '/guide/dismissal/dismissal-unfair-labor-practice-relief' },
      { label: '해고 절차 흠결 다툼', href: '/guide/dismissal/dismissal-procedure-defect-relief' },
      { label: '노동위 심문 준비 방법', href: '/guide/dismissal/dismissal-nlrc-hearing-preparation' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },

  // ─── 4. dismissal / dismissal-mental-illness-rehire-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-mental-illness-rehire-relief',
    keyword: '정신질환 휴직 후 복직 거부',
    questionKeyword: '정신질환으로 휴직을 마치고 복직을 신청했는데 회사가 거부했어요. 어떻게 해야 하나요?',
    ctaKeyword: '복직 거부 구제신청 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '정신질환 휴직 후 복직 거부 5가지 대응 가이드 | 로앤가이드',
      description:
        '정신질환으로 휴직 후 복직 신청을 했는데 회사가 거부한다면 부당해고와 장애 차별로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>우울증이나 공황장애로 병가·휴직을 마치고 복직 의사를 밝혔는데 "업무 복귀가 어렵다"는 말과 함께 사실상 해고 통보를 받는 일이 있습니다. 취업규칙에 복직 절차가 명시되어 있다면 그 절차를 따르지 않은 거부는 해고로 볼 수 있고, 정신질환을 이유로 한 복직 거부는 장애인차별금지법 위반 소지도 있습니다. 복직 신청일을 기준으로 3개월 이내에 구제신청을 진행해야 시효를 놓치지 않습니다.</p>',
    sections: [
      {
        title: 'Q. 복직 거부가 해고로 인정되는 경우는 언제인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 상황 중 하나라도 해당하면 복직 거부를 사실상 해고로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>휴직 기간 만료 후 복직 신청 무시</strong> — 취업규칙상 복직 의무가 있는데도 거부.</li>\n<li><strong>의사 소견서 제출 후 거부</strong> — 복직 가능하다는 의사 소견을 제출했음에도 회사가 별도 이유 없이 거부.</li>\n<li><strong>직위해제 + 자동 면직 조항 적용</strong> — 취업규칙의 "휴직 기간 내 복직 못하면 퇴직" 조항을 일방적으로 적용.</li>\n<li><strong>부서 소멸·인원 감축 이유</strong> — 원직 부서가 없어졌다는 이유로 거부하나 유사 직무에 배치하지 않은 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 복직 신청을 거부한 날이 사실상 해고일이 되어 그 날로부터 3개월이 구제신청 기한입니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 절차로 다투나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 구제신청과 국가인권위원회 진정 두 경로를 검토해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 복직 신청서·의사 소견서 보존</strong> — 복직 신청일자와 사측 거부 내용을 이메일·문자로 남겨두기.</li>\n<li><strong>2단계 — 취업규칙 확인</strong> — 복직 절차·자동 면직 조항·업무 복귀 기준 등 점검.</li>\n<li><strong>3단계 — 노동위 구제신청</strong> (복직 거부일로부터 3개월 이내) — 부당해고 구제신청 접수.</li>\n<li><strong>4단계 — 인권위 진정</strong> (1년 이내) — 정신질환(장애) 이유 차별 진정 별도 접수.</li>\n<li><strong>5단계 — 고용노동부 진정</strong> — 취업규칙 위반 여부 신고 병행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">복직 거부 사안에서 어떤 경로로 다툴 수 있는지 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "업무 수행 능력을 증명해야 한다"고 요구한다면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 합리적 범위의 업무 적합성 확인은 가능하나, 지나친 요구는 복직 회피 수단으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>의사 소견서 제출로 충분</strong> — 주치의·전문의의 업무복귀 적합 소견서가 제출되면 추가 증명을 계속 요구하기 어렵습니다.</li>\n<li><strong>단계적 복직 제도</strong> — 최근 확대되는 단계적 복직(경감 업무 시작 → 점차 원직 복귀) 요구는 가능하나 아예 거부는 다툴 소지가 있습니다.</li>\n<li><strong>자체 검진 강요 금지</strong> — 회사 지정 의사의 재진단을 무한 반복 요구하는 것은 복직 저지 수단으로 볼 수 있습니다.</li>\n<li><strong>정신질환 낙인 금지</strong> — 정신질환 병력만을 이유로 복직을 전면 거부하는 것은 장애 차별로 다툴 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사의 복직 거부 사유를 서면(이메일·공문)으로 요청해 기록으로 남겨두세요.</blockquote>',
      },
      {
        title: 'Q. 복직 거부 기간의 임금은 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 부당해고로 인정되면 복직 거부 기간의 임금상당액도 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>임금상당액 지급 명령</strong> — 노동위가 부당해고로 인용하면 복직 거부일부터 복직일까지 임금상당액 지급 명령이 내려집니다.</li>\n<li><strong>원직복직 + 임금</strong> — 원직 또는 유사 직무로의 복직과 함께 임금 지급이 병행됩니다.</li>\n<li><strong>금전보상명령 대안</strong> — 복직이 사실상 불가능하다면 6~12개월치 금전보상명령을 신청하는 방법을 검토해볼 수 있습니다.</li>\n<li><strong>이행강제금</strong> — 사용자가 복직 명령을 이행하지 않으면 1회 최대 3,000만원의 이행강제금이 부과됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금·4대보험 처리가 이미 진행됐더라도 부당해고 다툼은 별도로 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령 이후 법률상 불이익과 구제이익',
        summary:
          '대법원 2024두40493 사건(대법원, 2024.09.13 선고)에서 법원은 대기발령 상태에서도 승진·승급 제한 등 법률상 불이익이 발생한다면 사후에 대기발령이 실효되었어도 구제신청 이익이 인정된다고 판시했습니다. 복직 거부가 법적 불이익을 수반한다면 실효 여부와 무관하게 구제가 가능하다는 취지입니다.',
        takeaway: '복직 거부로 인한 임금 손실·지위 상실이 지속되는 한, 사후 합의나 사직 처리와 무관하게 구제신청이 가능할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '정신질환이 장애인차별금지법상 장애로 인정되나요?',
        answer:
          '<strong>인정됩니다.</strong> 장애인차별금지법은 신체적·정신적·지적 장애를 모두 포괄하며 우울증·공황장애도 포함됩니다.',
      },
      {
        question: '자동 면직 조항이 취업규칙에 있으면 복직을 요구할 수 없나요?',
        answer:
          '<strong>근로기준법상 정당한 이유 없는 해고 금지 원칙은 취업규칙보다 우선합니다.</strong> 자동 면직 조항이 있어도 부당해고 다툼은 가능합니다.',
      },
      {
        question: '이미 퇴직금을 받고 처리됐는데 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 퇴직금 수령 자체는 부당해고 다툼 포기 의사로 해석되지 않으며, 3개월 기한 내라면 구제신청이 가능합니다.',
      },
      {
        question: '단계적 복직을 먼저 제안한다면 받아들여야 하나요?',
        answer:
          '<strong>수용 여부는 근로자가 선택할 수 있습니다.</strong> 단, 단계적 복직 제안을 수락하면 복직 거부 주장이 약해질 수 있으니 서면 조건을 명확히 확인하세요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '장애 차별 국가인권위 진정 절차', href: '/guide/dismissal/dismissal-disability-discrimination-complaint' },
      { label: '대기발령 구제신청 절차', href: '/guide/dismissal/dismissal-standby-order-relief' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
      { label: '해고 이유 서면 청구 방법', href: '/guide/dismissal/dismissal-written-reason-request' },
    ],
  },

  // ─── 5. dismissal / dismissal-overtime-refusal-relief ───
  {
    domain: 'dismissal',
    slug: 'dismissal-overtime-refusal-relief',
    keyword: '정당한 야근 거부 후 해고',
    questionKeyword: '야근을 거부했다가 해고됐는데 부당해고로 다툴 수 있나요?',
    ctaKeyword: '야근 거부 해고 구제신청 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정당한 야근 거부 해고 5단계 다툼 절차 | 로앤가이드',
      description:
        '야근 거부를 이유로 해고됐다면 근로기준법상 연장근로 동의 의무와 강제 근로 금지 원칙으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"야근을 못 하겠다고 했더니 이틀 뒤에 해고 통보를 받았어요"라는 상담이 꾸준히 들어옵니다. 근로기준법 제53조는 연장근로를 위해 근로자의 동의가 필요하며, 제7조는 강제 근로를 금지합니다. 합법적인 야근 거부를 이유로 해고하는 것은 정당한 이유가 없는 부당해고로 다툴 소지가 있습니다. 다만 연장근로 관련 단체협약·취업규칙 내용에 따라 판단이 달라질 수 있으므로, 해고 통보 즉시 관련 서류를 확보하고 3개월 이내 구제신청을 진행하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '야근 거부가 정당한 경우 — 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지 중 하나에 해당하면 야근 거부는 정당한 행사로 볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>동의 없는 일방적 지시</strong> — 근로기준법 제53조에 따라 연장근로는 근로자 동의가 원칙. 단체협약·취업규칙에 명문 규정이 없는 한 거부 가능.</li>\n<li><strong>52시간 초과 지시</strong> — 주 52시간(기본 40+연장 12)을 초과하는 연장근로 지시는 거부가 가능하며, 사용자의 위법한 지시입니다.</li>\n<li><strong>건강·안전 사유</strong> — 질병·체력 한계·개인 사정 등으로 거부했고 사용자가 합리적 조정을 거부했다면 정당한 거부 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 야근 거부와 해고 사이의 시간 간격이 짧을수록 해고의 실질적 이유가 야근 거부임을 주장하기 유리합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계 핵심',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제신청 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보</strong> — 야근 지시 이메일·카카오톡, 거부 의사 전달 내역, 해고 통보서, 취업규칙·근로계약서.</li>\n<li><strong>2단계 — 구제신청서 제출</strong> (해고일로부터 3개월 이내) — 지방노동위원회 온라인·방문·우편 접수 가능.</li>\n<li><strong>3단계 — 신청이유서 + 증거 제출</strong> — 야근 거부와 해고 사이의 인과관계 중심으로 이유서 작성, 시간 순서 정리 필수.</li>\n<li><strong>4단계 — 심문회의</strong> (접수 60일 이내) — 야근 지시의 적법성과 거부 정당성 집중 심리.</li>\n<li><strong>5단계 — 판정</strong> — 부당해고 인정 시 원직복직 + 임금상당액 + 고용노동부 진정(강제근로) 병행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야근 거부 해고 사안에서 준비해야 할 서류와 절차를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '회사가 "야근은 업무 지시 불이행"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">연장근로 명령은 무조건적인 업무 지시가 아닙니다.</strong></p>\n<ul>\n<li><strong>동의 의무 선행</strong> — 근로기준법 제53조는 연장근로를 위해 근로자 동의를 요구하므로, 동의 없는 야근 거부는 업무 지시 불이행이 아닐 수 있습니다.</li>\n<li><strong>취업규칙 검토</strong> — 취업규칙에 연장근로 의무가 명시된 경우라도 52시간 한도 초과 지시는 거부 가능합니다.</li>\n<li><strong>보복적 해고 정황</strong> — 야근 거부 직후 해고된 경우 사용자의 진짜 해고 이유가 야근 거부임을 주장할 수 있습니다.</li>\n<li><strong>다른 근로자와의 형평</strong> — 다른 직원도 야근을 거부한 적이 있는데 본인만 해고됐다면 선별적 징계로 다툴 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 야근 거부 직전에 상사가 보낸 "야근 안 하면 책임진다" 식의 메시지를 반드시 보존하세요.</blockquote>',
      },
      {
        title: '추가 권리 구제 — 고용노동부 진정 병행',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제신청과 별도로 고용노동부에 강제근로·임금 관련 진정을 병행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>강제근로 신고</strong> — 근로기준법 제7조 위반으로 고용노동부 진정 접수 가능. 사업주 형사 처벌(2년 이하 징역 또는 2,000만원 이하 벌금).</li>\n<li><strong>연장수당 미지급 체불</strong> — 야근을 강요하고 연장수당을 지급하지 않은 경우 임금체불 진정 병행 가능.</li>\n<li><strong>52시간 초과 위반</strong> — 노동부에 근로시간 위반 신고, 사업주 1,500만원 이하 과태료 부과 사례 있습니다.</li>\n<li><strong>고발 조치</strong> — 부당해고 구제신청 + 강제근로 고발 병행 시 회사 협상력이 높아지는 경향이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 고용노동부 진정은 별도 절차로 부당해고 3개월 기한과 무관하나, 임금체불은 퇴직 후 3년 소멸시효가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제이익의 유지와 금전보상명령 범위',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급한 이후에도 근로자의 금전보상명령 구제이익은 소멸하지 않는다고 판시했습니다. 부당해고로 인용될 경우 원직복직이 어렵더라도 금전보상을 별도로 신청할 수 있음을 확인한 사례입니다.',
        takeaway: '야근 거부 해고로 원직 복귀가 어렵더라도 금전보상명령 신청을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '주 52시간을 초과하는 야근을 거부하면 무조건 보호받나요?',
        answer:
          '<strong>52시간을 초과하는 연장 지시 거부는 적법합니다.</strong> 다만 근로계약서·단체협약의 내용에 따라 개별 판단이 달라질 수 있습니다.',
      },
      {
        question: '취업규칙에 "연장근로 명령에 따른다"는 조항이 있으면 거부가 안 되나요?',
        answer:
          '<strong>취업규칙 조항이 있어도 근로기준법 한도(52시간)를 초과하면 거부가 가능합니다.</strong> 법령 위반 취업규칙 조항은 효력이 없습니다.',
      },
      {
        question: '해고 통보가 구두로만 이루어졌는데 어떻게 다투나요?',
        answer:
          '<strong>구두 해고도 효력이 인정됩니다.</strong> 통보 날짜를 메모하고, 이후 급여 미지급·사내 시스템 접근 차단 등 해고 징표를 기록해두면 됩니다.',
      },
      {
        question: '야근 거부 이전에 회사와 충돌이 있었는데 그것 때문에 불리해지나요?',
        answer:
          '<strong>이전 갈등이 있더라도 야근 거부와 해고의 시간적 근접성·인과관계가 인정되면 다툼이 가능합니다.</strong> 해고 사유서에 야근 거부가 직접 언급됐다면 더욱 유리합니다.',
      },
      {
        question: '고용노동부 진정과 노동위 구제신청을 동시에 하면 불리한가요?',
        answer:
          '<strong>불리하지 않으며 오히려 병행이 권장됩니다.</strong> 두 절차는 독립적으로 운영되고, 노동부 조사 결과가 노동위 심문에서 참고자료로 활용되기도 합니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차 종합', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '연장근로 동의와 임금체불 진정', href: '/guide/wage/wage-overtime-consent-complaint' },
      { label: '강제 근로 금지와 고용노동부 신고', href: '/guide/dismissal/dismissal-forced-labor-complaint' },
      { label: '주 52시간 초과 위반 신고 절차', href: '/guide/wage/wage-52hour-violation-report' },
      { label: '금전보상명령 신청 절차', href: '/guide/dismissal/dismissal-monetary-compensation-procedure' },
    ],
  },
];
