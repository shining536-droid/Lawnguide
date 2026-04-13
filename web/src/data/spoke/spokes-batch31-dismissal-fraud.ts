import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch31: 해고 5개 + 사기 3개
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch31DismissalFraud: SpokePage[] = [
  // ── 해고 1. 프리랜서 근로자성과 부당해고 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-freelancer-worker-status',
    keyword: '프리랜서 근로자성 부당해고',
    questionKeyword: '프리랜서인데 부당해고 구제를 받을 수 있나요?',
    ctaKeyword: '프리랜서 근로자성 판단 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '프리랜서 근로자성 판단 기준 5가지 — 부당해고 구제 가능성 | 로앤가이드',
      description:
        '프리랜서 계약이지만 출퇴근·지시를 받는다면, 근로자로 인정받아 부당해고를 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>계약서에는 "프리랜서"로 되어 있지만, 매일 출퇴근하고 팀장의 지시를 받으며 일합니다. 어느 날 갑자기 "계약 종료"를 통보받았습니다. 계약서 명칭과 관계없이 실질적인 근로관계가 인정되면 부당해고 구제를 받을 수 있습니다. 프리랜서의 근로자성 판단 기준을 확인하세요.</p>',
    sections: [
      {
        title: '프리랜서와 근로자, 실질로 판단하는 5가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">계약서 형식이 아니라 일하는 방식의 실질로 근로자성을 판단합니다.</strong></p>\n<ol>\n<li><strong>업무 지시·감독 여부</strong> — 업무 내용을 사용자가 정하고, 수행 과정에서 상당한 지휘·감독이 있다면 근로자에 가깝습니다. 단순 결과물 납품과는 다릅니다.</li>\n<li><strong>근무시간·장소 구속</strong> — 출퇴근 시간이 정해져 있고, 지정된 장소에서 일해야 한다면 종속적 관계의 징표입니다.</li>\n<li><strong>보수의 성격</strong> — 기본급·고정급이 있으면 근로 대가성이 인정됩니다. 실적에 따른 수수료만 받는다면 도급에 가깝습니다.</li>\n<li><strong>대체 근로 가능 여부</strong> — 본인이 직접 일해야 하고 제3자를 대신 투입할 수 없다면 근로자성이 강화됩니다.</li>\n<li><strong>전속성과 계속성</strong> — 다른 회사 일을 자유롭게 할 수 없고, 장기간 계속 근무했다면 근로자로 인정될 가능성이 높습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대법원은 "전체적으로 보아 임금을 목적으로 종속적 관계에서 근로를 제공했다면, 일부 징표가 결여되어도 근로자"라고 판시합니다.</blockquote>',
      },
      {
        title: '프리랜서도 부당해고 구제를 신청할 수 있는 경우',
        content:
          '<p><strong style="color:#1e3a5f">근로자성이 인정되면 해고예고, 서면통지, 정당한 사유 등 모든 해고 보호를 받습니다.</strong></p>\n<ul>\n<li><strong>계약 해지 = 해고</strong> — 실질적 근로자에 대한 일방적 계약 종료는 해고에 해당합니다. 서면 통지 없이 해고하면 그 자체로 부당합니다.</li>\n<li><strong>영업양도 시 승계</strong> — 사업이 양도되면 근로관계는 양수인에게 포괄 승계됩니다. 양도를 이유로 한 해고는 정당한 사유가 아닙니다.</li>\n<li><strong>협동조합 조합원도 해당</strong> — 협동조합 조합원이라도 실질적으로 종속적 관계에서 근로를 제공했다면 근로자로 인정될 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>프리랜서 계약인데 해고당했다면, AI가 근로자성을 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무 형태를 입력하면 부당해고 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '근로자성 입증을 위한 증거 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">계약서 명칭보다 실질을 보여주는 증거가 중요합니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록</strong> — 출입카드 기록, CCTV, 메신저 대화 등으로 고정된 출퇴근을 입증하세요.</li>\n<li><strong>업무 지시 내역</strong> — 이메일·카톡·슬랙 등에서 구체적 업무 지시를 받은 내역을 캡처해두세요.</li>\n<li><strong>급여 명세</strong> — 매월 고정 금액을 받았다면 급여 이체 내역을 확보하세요. 4대 보험 미가입이라도 근로자성은 인정될 수 있습니다.</li>\n<li><strong>취업규칙·복무규정 적용</strong> — 회사의 취업규칙이나 복무규정을 프리랜서에게도 적용했다면 강력한 증거입니다.</li>\n<li><strong>부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 지방노동위원회에 신청하세요. 근로자성과 해고 정당성을 함께 다툴 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 협동조합 조합원의 근로자성 인정',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 계약 형식이 도급이든 협동조합 조합원이든, 실질적으로 임금을 목적으로 종속적 관계에서 근로를 제공했다면 근로기준법상 근로자에 해당한다고 판시했습니다.',
        takeaway:
          '계약서 명칭이 프리랜서·위촉·조합원이라도, 일하는 방식이 근로자와 같다면 해고 보호를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '3.3% 사업소득세를 원천징수 당하면 근로자가 아닌 건가요?',
        answer:
          '<p>아닙니다. 근로소득세 대신 사업소득세를 원천징수했더라도, 실질적으로 종속적 관계에서 근로를 제공했다면 근로자로 인정됩니다. 세금 처리 방식은 판단 요소 중 하나일 뿐 결정적이지 않습니다.</p>',
      },
      {
        question: '프리랜서 계약서에 "근로관계 아님"이라고 써 있으면 불리한가요?',
        answer:
          '<p>계약서 문구만으로 근로자성이 부정되지 않습니다. 법원은 계약의 형식이 아니라 근로 제공의 실질을 기준으로 판단합니다.</p>',
      },
      {
        question: '프리랜서인데 4대 보험 미가입이면 구제신청이 안 되나요?',
        answer:
          '<p>4대 보험 미가입은 근로자성 부정의 결정적 사유가 아닙니다. 다른 종속적 관계의 징표가 충분하면 근로자로 인정됩니다.</p>',
      },
      {
        question: '프리랜서로 1년 이상 일했는데 퇴직금도 받을 수 있나요?',
        answer:
          '<p>근로자성이 인정되면 퇴직금 청구도 가능합니다. 1년 이상 계속 근로한 경우 퇴직금을 받을 권리가 있습니다.</p>',
      },
      {
        question: '다른 회사 일도 겸업했으면 근로자성이 부정되나요?',
        answer:
          '<p>겸업 사실만으로 근로자성이 부정되지는 않습니다. 다만 전속성이 약화되므로, 다른 종속적 관계 요소가 더 강하게 입증되어야 합니다.</p>',
      },
    ],
    cta: { text: '프리랜서 근로자성 판단 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ── 해고 2. 정년 도달 후 부당해고 구제신청 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-retirement-age-remedy',
    keyword: '정년 후 부당해고 구제신청',
    questionKeyword: '정년이 지난 후에도 부당해고 구제신청을 할 수 있나요?',
    ctaKeyword: '정년 후 구제신청 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정년 후 부당해고 구제신청 가능 여부 — 핵심 기준 3가지 | 로앤가이드',
      description:
        '정년이 지났는데도 부당해고를 다투고 싶다면, 구제이익이 남아 있는지 판단하는 기준을 지금 확인하세요.',
    },
    intro:
      '<p>부당해고를 당해 구제신청을 준비하던 중, 정년에 도달했습니다. "이미 정년이 지났으니 구제받을 이유가 없다"는 회사 측 주장이 맞는 것인지 고민됩니다. 정년 만료·계약기간 종료 후에도 구제신청이 가능한 경우와 불가능한 경우를 구분하는 기준을 정리합니다.</p>',
    sections: [
      {
        title: '정년 후 구제신청이 불가능한 원칙',
        content:
          '<p><strong style="color:#1e3a5f">구제신청 당시 이미 정년에 도달하여 근로자 지위를 벗어났다면, 원칙적으로 구제이익이 없습니다.</strong></p>\n<ul>\n<li><strong>구제이익 소멸 기준</strong> — 구제신청 시점에 정년 만료, 계약기간 종료, 폐업 등으로 근로관계가 종료된 경우 노동위원회의 구제명령을 받을 이익이 소멸합니다.</li>\n<li><strong>재심판정 취소 소익도 소멸</strong> — 구제이익이 없으면 재심판정을 취소할 소의 이익도 없어, 법원에서 다투기도 어렵습니다.</li>\n<li><strong>금전보상명령도 불가</strong> — 복직 대신 금전보상을 구하더라도, 근로관계 자체가 종료된 이상 노동위원회를 통한 구제는 원칙적으로 불가합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대법원은 정년 도달로 근로자 지위를 벗어나면 구제명령을 받을 이익이 소멸한다고 일관되게 판시합니다.</blockquote>',
      },
      {
        title: '정년 후에도 구제를 받을 수 있는 예외적 경우',
        content:
          '<p><strong style="color:#1e3a5f">정년 규정 자체가 무효이거나, 정년 전 해고가 이루어진 경우에는 구제가 가능합니다.</strong></p>\n<ol>\n<li><strong>정년 규정이 무효인 경우</strong> — 정년이 60세 미만으로 정해져 있으면 고용상 연령차별금지법에 따라 무효이므로, 해당 정년 도달을 이유로 한 퇴직 처리를 다툴 수 있습니다.</li>\n<li><strong>정년 전 해고 후 정년 도래</strong> — 해고 당시에는 정년 전이었고, 구제 절차 진행 중에 정년에 도달한 경우 해고 시점의 부당성은 별도로 다툴 여지가 있습니다.</li>\n<li><strong>민사소송 활용</strong> — 노동위원회 구제가 불가하더라도 해고무효확인소송이나 임금 청구 소송으로 다투는 것은 가능합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>정년 후 구제 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 시점과 정년 규정을 입력하면 구제 가능 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '정년 도달 전에 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">정년이 임박했다면, 구제이익이 소멸하기 전에 빠르게 대응해야 합니다.</strong></p>\n<ul>\n<li><strong>즉시 구제신청</strong> — 해고일로부터 3개월 이내, 정년 도달 전에 지방노동위원회에 구제신청을 제출하세요. 구제이익은 재심판정 당시를 기준으로 판단합니다.</li>\n<li><strong>금전보상명령 검토</strong> — 복직이 현실적으로 어렵다면 금전보상명령을 함께 신청하세요. 정년 전에 신청하면 구제이익이 유지될 수 있습니다.</li>\n<li><strong>해고무효확인 소송 병행</strong> — 노동위원회 구제와 별개로 법원에 해고무효확인 소송을 제기하면, 정년 이후에도 해고 기간의 임금을 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달 후 구제이익 소멸',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 구제신청 당시 이미 정년에 이르러 근로자 지위를 벗어난 경우, 노동위원회의 구제명령을 받을 이익이 소멸하고 재심판정의 취소를 구할 소의 이익도 없다고 판시했습니다.',
        takeaway:
          '정년 도달 전에 구제신청을 완료하는 것이 핵심입니다. 정년이 임박했다면 최대한 빨리 대응하세요.',
      },
    ],
    faq: [
      {
        question: '정년 후에도 해고무효확인 소송은 할 수 있나요?',
        answer:
          '<p>노동위원회 구제와 달리, 법원을 통한 해고무효확인 소송은 정년 후에도 제기할 수 있습니다. 해고 기간 동안의 임금 청구도 가능합니다.</p>',
      },
      {
        question: '구제신청 중에 정년이 지나면 어떻게 되나요?',
        answer:
          '<p>재심판정 당시를 기준으로 구제이익을 판단합니다. 구제 절차 진행 중 정년에 도달하면 구제이익이 소멸하여 각하될 수 있으므로, 금전보상명령 등 대안을 미리 준비하세요.</p>',
      },
      {
        question: '계약직인데 계약기간이 만료되면 구제신청이 불가능한가요?',
        answer:
          '<p>계약기간 만료로 근로관계가 종료되면 원칙적으로 구제이익이 소멸합니다. 다만 갱신기대권이 인정되는 경우에는 다툴 수 있습니다.</p>',
      },
      {
        question: '정년 후 촉탁직 전환을 거부당했는데 구제할 수 있나요?',
        answer:
          '<p>단체협약이나 취업규칙에 촉탁직 전환 규정이 있다면 이행을 요구할 수 있습니다. 규정이 없으면 재고용은 사용자의 재량에 해당합니다.</p>',
      },
    ],
    cta: { text: '정년 후 구제 가능성 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 서류 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '수습기간 해고 적법성', href: '/guide/dismissal/probation-dismissal-legality' },
    ],
  },

  // ── 해고 3. 노조 사무실 퇴거와 부당노동행위 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-union-office-eviction',
    keyword: '노조 사무실 퇴거 단체협약',
    questionKeyword: '단체협약 만료 후 노조 사무실을 퇴거해야 하나요?',
    ctaKeyword: '노조 사무실 퇴거 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '단체협약 만료 후 노조 사무실 퇴거 — 부당노동행위 여부 | 로앤가이드',
      description:
        '단체협약이 끝났다며 노조 사무실 반환을 요구받았다면, 사무실 사용 권리가 유지되는지 지금 확인하세요.',
    },
    intro:
      '<p>단체협약 유효기간이 만료된 후, 회사가 "협약이 끝났으니 노조 사무실을 비우라"고 통보했습니다. 사무실을 비우면 조합 활동이 사실상 불가능해집니다. 단체협약 실효 후에도 노조 사무실 제공 의무가 유지되는지, 퇴거 요구가 부당노동행위에 해당하는지 확인하세요.</p>',
    sections: [
      {
        title: '단체협약 만료 후 사무실 사용 권리의 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">단체협약이 만료되었다고 해서 노조 사무실 사용 권리가 자동으로 소멸하지 않습니다.</strong></p>\n<ul>\n<li><strong>무명계약관계 유지</strong> — 단체협약에 따른 사무실 제공은 특정 사무실에 한정된 사용대차뿐 아니라, 노조 활동에 필요한 사무실을 제공할 의무를 포함하는 무명계약으로 볼 수 있습니다.</li>\n<li><strong>사용수익 종료 불인정</strong> — 단체협약 해지나 실효만으로는 사무실 사용수익의 종료 사유가 되지 않습니다. 사용 목적이 달성되지 않았다면 계속 사용할 권리가 있습니다.</li>\n<li><strong>사옥 이전 시에도 제공 의무</strong> — 회사가 사옥을 이전하더라도, 신사옥에서 노조 사무실을 제공해야 할 의무는 유지됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 단체협약 만료만으로는 사무실 반환 의무가 발생하지 않습니다. 합리적 이유 없이 사무실 제공을 거부하면 부당노동행위입니다.</blockquote>',
      },
      {
        title: '사무실 미제공이 부당노동행위가 되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">사무실 제공 거부에 지배·개입 의사가 인정되면 부당노동행위에 해당합니다.</strong></p>\n<ol>\n<li><strong>지배·개입 의사</strong> — 노조 활동을 약화시키려는 의도로 사무실 제공을 거부하면 노동조합법 제81조 제4호의 부당노동행위에 해당합니다.</li>\n<li><strong>합리적 이유 부재</strong> — 사옥 이전·리모델링 등 합리적 사유 없이 장기간 사무실을 제공하지 않으면 부당노동행위 의사가 추정됩니다.</li>\n<li><strong>사후 제공이 면책 사유 아님</strong> — 뒤늦게 사무실을 제공했더라도, 그 전의 미제공 행위가 부당노동행위에 해당하지 않게 되는 것은 아닙니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>노조 사무실 퇴거 요구, 부당노동행위인지 AI가 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">단체협약 내용과 퇴거 경위를 입력하면 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '노조 사무실 퇴거 요구 시 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">퇴거 통보를 받았다면 즉시 부당노동행위 구제를 신청하고, 사무실 사용 권리를 확보하세요.</strong></p>\n<ul>\n<li><strong>부당노동행위 구제신청</strong> — 사무실 미제공 행위가 있은 날(또는 계속되는 행위의 종료일)로부터 3개월 이내에 지방노동위원회에 구제신청합니다.</li>\n<li><strong>단체협약 갱신 협상</strong> — 단체협약 만료 후에도 새 협약 체결 시까지 사무실 제공 조항의 유지를 요구하세요.</li>\n<li><strong>가처분 신청</strong> — 긴급하게 사무실 사용을 보전해야 한다면 법원에 사무실 사용 방해금지 가처분을 신청할 수 있습니다.</li>\n<li><strong>증거 확보</strong> — 퇴거 통보서, 사무실 폐쇄 사진, 열쇠 회수 등 회사의 행위를 기록하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단체협약 만료 후 사무실 미제공의 부당노동행위',
        summary:
          '서울행법 2024구합52434 사건(서울행법, 2025.04.18 선고)에서 법원은 단체협약 유효기간 만료 후 회사가 신사옥으로 이전하면서 약 1년간 노조 사무실을 제공하지 않은 행위가 지배·개입의 부당노동행위에 해당한다고 판시했습니다.',
        takeaway:
          '단체협약이 만료되어도 합리적 이유 없이 사무실 제공을 거부하면 부당노동행위입니다. 즉시 구제신청하세요.',
      },
    ],
    faq: [
      {
        question: '단체협약이 자동연장(자동갱신)되면 사무실도 유지되나요?',
        answer:
          '<p>노동조합법상 단체협약 유효기간 만료 후 새 협약이 체결될 때까지 종전 협약의 효력이 유지되므로, 사무실 제공 조항도 그대로 유지됩니다.</p>',
      },
      {
        question: '회사가 사무실 대신 사용료를 지원하겠다고 하면 괜찮은가요?',
        answer:
          '<p>노조가 동의하면 가능하지만, 일방적으로 사무실 대신 사용료를 지원하겠다는 것은 기존 편의제공 의무의 이행으로 볼 수 없습니다. 노조와의 합의가 필요합니다.</p>',
      },
      {
        question: '복수노조 상황에서 한 노조에만 사무실을 안 주면 어떻게 되나요?',
        answer:
          '<p>합리적 이유 없이 특정 노조에만 사무실을 미제공하면 차별적 지배·개입으로 부당노동행위가 성립합니다.</p>',
      },
      {
        question: '부당노동행위 구제신청 기간(3개월)이 지나면 방법이 없나요?',
        answer:
          '<p>사무실 미제공이 계속되는 행위라면 종료일로부터 3개월 이내에 신청하면 됩니다. 현재도 사무실을 받지 못하고 있다면 아직 기간이 지나지 않은 것입니다.</p>',
      },
    ],
    cta: { text: '노조 사무실 퇴거 부당노동행위 여부 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '권고사직 서류 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
    ],
  },

  // ── 해고 4. 부당해고 금전보상명령 신청 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-unfair-monetary-compensation',
    keyword: '부당해고 금전보상명령 신청',
    questionKeyword: '부당해고를 당했는데 복직 대신 금전보상을 받을 수 있나요?',
    ctaKeyword: '부당해고 금전보상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부당해고 금전보상명령 — 복직 대신 금전 보상받는 절차 | 로앤가이드',
      description:
        '부당해고를 당했지만 복직이 부담된다면, 금전보상명령 제도로 보상받는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>부당해고를 당했지만, 사장과 얼굴을 마주하며 다시 일하기는 어렵습니다. 복직 대신 돈으로 보상받을 수 있다면 그것이 더 나을 수 있습니다. 근로기준법은 근로자가 원하지 않으면 복직 대신 금전보상을 명할 수 있는 제도를 두고 있습니다. 금전보상명령의 요건과 절차를 확인하세요.</p>',
    sections: [
      {
        title: '금전보상명령 제도란',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제명령 시, 근로자가 원하면 복직 대신 금전보상을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 근로기준법 제30조 제3항에 따라 노동위원회는 근로자가 원직복직을 원하지 않으면, 해고기간 동안의 임금 상당액 이상의 금품 지급을 명할 수 있습니다.</li>\n<li><strong>금전보상 금액</strong> — 최소 해고기간 동안 받을 수 있었던 임금 상당액 이상입니다. 해고 기간이 길수록 보상액이 커집니다.</li>\n<li><strong>원직복직의 대안</strong> — 금전보상명령은 원직복직명령을 대신하는 것이므로, 복직 의사가 없다는 점을 명확히 해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 금전보상명령은 복직이 현실적으로 어려운 근로자를 위한 대안 구제수단입니다. 구제신청 시 명시적으로 요청해야 합니다.</blockquote>',
      },
      {
        title: '금전보상명령 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">구제신청서에 금전보상을 원한다는 의사를 명시하면 됩니다.</strong></p>\n<ol>\n<li><strong>부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 지방노동위원회에 구제신청서를 제출합니다. 이때 "원직복직을 원하지 않으며 금전보상을 구한다"는 취지를 기재하세요.</li>\n<li><strong>심문 절차</strong> — 노동위원회가 심문기일을 지정하면 출석하여 해고의 부당성과 금전보상 희망 의사를 진술합니다.</li>\n<li><strong>금전보상 금액 산정</strong> — 노동위원회가 해고기간 동안의 임금 상당액을 기준으로 보상 금액을 결정합니다. 통상 해고일부터 판정일까지의 임금 상당액입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>금전보상명령 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 경위와 임금 정보를 입력하면 예상 보상액을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '금전보상명령의 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">회사가 해고를 취소해도 금전보상 구제이익은 유지됩니다.</strong></p>\n<ul>\n<li><strong>해고 취소 후에도 유효</strong> — 사용자가 해고를 취소하고 복직을 명하며 임금 상당액을 지급했더라도, 금전보상명령을 받을 구제이익은 소멸하지 않습니다.</li>\n<li><strong>재심판정 기준</strong> — 구제이익은 재심판정 당시를 기준으로 판단합니다. 사용자가 절차 중에 해고를 철회해도 금전보상 청구가 가능합니다.</li>\n<li><strong>부당해고 인정이 전제</strong> — 금전보상명령은 해고가 부당하다는 판단이 전제됩니다. 해고 자체가 정당하면 금전보상도 인정되지 않습니다.</li>\n<li><strong>이행강제금</strong> — 사용자가 금전보상명령을 이행하지 않으면 노동위원회가 이행강제금을 부과할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 취소 후에도 금전보상명령 구제이익 유지',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 사용자가 해고를 취소하여 복직을 명하고 임금 상당액을 지급했더라도, 금전보상명령을 받을 구제이익은 소멸하지 않는다고 판시했습니다.',
        takeaway:
          '회사가 해고를 취소하며 복직시켰더라도 금전보상 청구를 포기할 필요가 없습니다. 구제이익은 유지됩니다.',
      },
    ],
    faq: [
      {
        question: '금전보상 금액은 어떻게 계산하나요?',
        answer:
          '<p>해고기간(해고일~판정일) 동안 근로를 제공했더라면 받을 수 있었던 임금 상당액 이상입니다. 기본급뿐 아니라 상여금, 수당 등 통상적으로 받는 금품을 포함합니다.</p>',
      },
      {
        question: '구제신청 후에 금전보상으로 변경할 수 있나요?',
        answer:
          '<p>처음에 복직을 구했더라도 심문 과정에서 금전보상으로 변경할 수 있습니다. 노동위원회에 변경 의사를 서면으로 제출하세요.</p>',
      },
      {
        question: '금전보상명령을 받으면 퇴직금도 따로 받나요?',
        answer:
          '<p>금전보상명령은 해고기간의 임금 보상이고, 퇴직금은 별도입니다. 근로관계 종료 시점에 퇴직금을 별도로 청구하세요.</p>',
      },
      {
        question: '5인 미만 사업장에서도 금전보상명령이 가능한가요?',
        answer:
          '<p>부당해고 구제신청은 5인 이상 사업장에서만 가능하므로, 5인 미만 사업장은 금전보상명령도 불가합니다. 대신 민사소송으로 손해배상을 청구하세요.</p>',
      },
      {
        question: '회사가 금전보상명령을 안 지키면 어떻게 되나요?',
        answer:
          '<p>노동위원회가 이행강제금(2천만원 이하)을 부과할 수 있고, 확정된 구제명령 불이행 시 형사처벌(1년 이하 징역 또는 1천만원 이하 벌금)도 가능합니다.</p>',
      },
    ],
    cta: { text: '부당해고 금전보상 가능성 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ── 해고 5. 계속되는 부당노동행위 구제신청 기간 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-continuous-unfair-labor',
    keyword: '부당노동행위 계속 구제신청 기간',
    questionKeyword: '부당노동행위가 반복되는데 구제신청 기간이 지났나요?',
    ctaKeyword: '부당노동행위 구제신청 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '부당노동행위 구제신청 기간 — 계속되는 행위의 기산점 | 로앤가이드',
      description:
        '매년 반복되는 하위 인사고과·승격 탈락이 부당노동행위라면, 구제신청 기간을 놓치지 않는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>노조 활동을 이유로 매년 하위 인사고과를 받고, 승격에서 탈락하고 있습니다. "이미 3개월이 지났으니 구제신청을 할 수 없다"는 이야기를 들었지만, 올해도 같은 불이익이 반복되었습니다. 계속되는 부당노동행위는 언제까지 구제신청을 할 수 있는지 확인하세요.</p>',
    sections: [
      {
        title: '"계속하는 행위"의 의미와 구제신청 기간',
        content:
          '<p><strong style="color:#1e3a5f">부당노동행위가 계속되는 행위라면, 종료일로부터 3개월 이내에 구제신청을 하면 됩니다.</strong></p>\n<ul>\n<li><strong>원칙</strong> — 노동조합법 제82조 제2항에 따라, 부당노동행위 구제신청은 그 행위가 있은 날로부터 3개월 이내에 해야 합니다.</li>\n<li><strong>"계속하는 행위"의 확장</strong> — 단일 행위가 일정 기간 계속되는 경우뿐 아니라, 수 개의 행위라도 부당노동행위 의사의 단일성, 행위의 동일성·동종성, 시간적 연속성이 인정되면 "계속하는 행위"에 포함됩니다.</li>\n<li><strong>기산점</strong> — 계속하는 행위의 경우 그 종료일로부터 3개월을 기산합니다. 아직 종료되지 않았다면 기간이 계속 열려 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 같은 단위 기간 내의 인사고과 부여와 그에 따른 임금 지급은 하나의 "계속하는 행위"로 봅니다. 다만 단위 기간이 다르면 원칙적으로 별개 행위입니다.</blockquote>',
      },
      {
        title: '인사고과·승격 탈락의 구제신청 기간 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">매년 반복되는 인사고과 불이익이 단일한 계획 하에 실행되었다면 구제 범위가 확대됩니다.</strong></p>\n<ol>\n<li><strong>같은 단위 기간 = 하나의 행위</strong> — 예를 들어, 2025년도 인사고과 부여와 2025년도 임금 지급은 하나의 계속하는 행위입니다. 2025년 마지막 임금 지급일로부터 3개월 이내에 신청하면 됩니다.</li>\n<li><strong>다른 단위 기간 = 원칙적 별개</strong> — 2024년도 인사고과와 2025년도 인사고과는 원칙적으로 별개 행위입니다. 2024년분은 이미 기간이 도과했을 수 있습니다.</li>\n<li><strong>예외: 단일한 계획</strong> — 사용자가 여러 해에 걸쳐 단일한 의사와 유사한 방식으로 부당노동행위를 실행한 증거가 있으면, 여러 단위 기간도 하나의 계속하는 행위로 인정될 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>구제신청 기간이 남아 있는지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">인사고과 시기와 불이익 내역을 입력하면 구제 가능 범위를 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '구제신청 시 실무 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">구제신청서 작성 시 아래 사항을 빠짐없이 기재하세요.</strong></p>\n<ul>\n<li><strong>구체적 사실 기재</strong> — 구제신청서에 부당노동행위를 구성하는 구체적 사실(언제, 어떤 불이익을, 누구에게)을 상세히 기재하세요. 민사소송의 청구취지처럼 엄격할 필요는 없지만, 어떤 구제를 구하는지 알 수 있어야 합니다.</li>\n<li><strong>노조 활동 이력 정리</strong> — 노조 가입 시점, 활동 내역, 불이익 처분 시기를 시간순으로 정리하세요.</li>\n<li><strong>비교 대상 확보</strong> — 같은 직급·경력의 비조합원 인사고과와 비교하면 차별을 입증하기 쉽습니다.</li>\n<li><strong>기간 도과 방지</strong> — 가장 최근의 불이익 행위(임금 지급일)로부터 3개월 이내에 반드시 신청하세요. 기간이 임박했다면 즉시 접수하고 보완서류는 나중에 제출할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 수 개의 부당노동행위 단일성·연속성과 구제신청 기간',
        summary:
          '대법원 2023두41864 사건(대법원, 2025.04.03 선고)에서 법원은 같은 단위 기간의 인사고과 부여와 임금 지급은 하나의 "계속하는 행위"를 구성하지만, 단위 기간이 다르면 원칙적으로 별개 행위라고 판시했습니다.',
        takeaway:
          '올해 불이익을 받았다면 올해분은 아직 구제 가능합니다. 지난 해분까지 구제받으려면 사용자의 단일한 계획을 입증해야 합니다.',
      },
    ],
    faq: [
      {
        question: '3개월 기간은 언제부터 계산하나요?',
        answer:
          '<p>부당노동행위가 있은 날, 또는 계속하는 행위의 종료일로부터 3개월입니다. 인사고과와 연동된 임금이 아직 지급되고 있다면 마지막 지급일이 종료일입니다.</p>',
      },
      {
        question: '매년 같은 불이익인데 왜 단위 기간마다 별개 행위인가요?',
        answer:
          '<p>주기적 인사고과 사이에는 시간적 연속성이 부족하고, 모두 하나로 보면 구제 범위가 과도하게 확장되기 때문입니다. 다만 사용자의 단일한 계획이 입증되면 예외적으로 합산됩니다.</p>',
      },
      {
        question: '구제신청서에 구제 내용을 구체적으로 써야 하나요?',
        answer:
          '<p>민사소송의 청구취지처럼 엄격할 필요는 없습니다. 어떤 불이익을 받았는지 구체적 사실을 기재하면, 노동위원회가 적절한 구제를 명할 수 있습니다.</p>',
      },
      {
        question: '인사고과 불이익이 부당노동행위라는 걸 어떻게 입증하나요?',
        answer:
          '<p>같은 직급·경력의 비조합원과 인사고과를 비교하고, 노조 활동 시점과 불이익 시점의 시간적 관련성을 보여주세요. 조합원 전체가 하위 고과를 받았다면 더 강력한 증거가 됩니다.</p>',
      },
      {
        question: '기간이 3개월 지났으면 완전히 구제 불가인가요?',
        answer:
          '<p>노동위원회 구제는 불가하지만, 민사소송으로 손해배상을 청구하는 것은 별도로 가능합니다. 민사소송의 소멸시효는 3년입니다.</p>',
      },
    ],
    cta: { text: '부당노동행위 구제신청 기간 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '수습기간 해고 적법성', href: '/guide/dismissal/probation-dismissal-legality' },
    ],
  },

  // ── 사기 6. 범죄단체 가입 사기 방어 ──
  {
    domain: 'fraud',
    slug: 'fraud-organized-crime-money-laundering',
    keyword: '범죄단체 가입 사기 방어',
    questionKeyword: '범죄단체 연루 혐의, 단순 가담과 어떻게 다른가요?',
    ctaKeyword: '범죄단체 가입 혐의 상담',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '범죄단체 가입 사기 혐의 — 단순 가담 vs 조직범죄 구분 3가지 | 로앤가이드',
      description:
        '범죄단체 가입·활동 혐의로 조사받고 있다면, 단순 가담과 조직범죄의 구분 기준과 방어 전략을 지금 확인하세요.',
    },
    intro:
      '<p>보이스피싱 조직에서 통장을 관리한 혐의로 경찰 조사를 받게 되었습니다. "범죄단체 가입"이라는 무거운 혐의가 추가되었는데, 단순히 돈을 전달한 것뿐인지, 조직에 가입한 것으로 볼 수 있는지 구분이 안 됩니다. 범죄단체 구성·가입죄의 성립 요건과 방어 전략을 확인하세요.</p>',
    sections: [
      {
        title: '범죄단체 구성·가입죄 성립 요건',
        content:
          '<p><strong style="color:#1e3a5f">범죄단체 가입·활동은 단순 사기 방조보다 훨씬 무거운 처벌을 받습니다.</strong></p>\n<ul>\n<li><strong>범죄단체의 정의</strong> — 폭력행위 등 처벌에 관한 법률 제4조에 규정된 범죄행위를 목적으로 하는 단체입니다. 지휘체계, 역할 분담, 조직적 의사결정 구조가 있어야 합니다.</li>\n<li><strong>구성·가입 행위</strong> — 범죄단체를 만들거나 이에 가입하는 행위 자체가 범죄입니다. 실제 범죄를 실행하지 않아도 처벌됩니다.</li>\n<li><strong>구성원 활동</strong> — 범죄단체의 내부 규율과 통솔 체계에 따라 조직적·집단적 의사결정에 기초한 적극적 활동을 의미합니다.</li>\n<li><strong>포괄일죄</strong> — 구성·가입과 활동은 하나의 포괄일죄로 처리됩니다. 가입 후 활동까지 이어지면 하나의 죄로 묶입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 단순히 돈을 전달하거나 통장을 빌려준 것과, 조직에 "가입"하여 지휘체계 아래 활동한 것은 법적으로 완전히 다릅니다.</blockquote>',
      },
      {
        title: '단순 가담과 범죄단체 가입의 차이점',
        content:
          '<p><strong style="color:#1e3a5f">방어의 핵심은 조직 구성원으로서의 인식과 활동이 있었는지 여부입니다.</strong></p>\n<ol>\n<li><strong>조직 인식 여부</strong> — 범죄조직이 존재한다는 사실을 알고 가입했는지, 단순히 일회성 아르바이트로 참여했는지가 핵심입니다.</li>\n<li><strong>지휘체계 편입 여부</strong> — 상위 조직원의 지시를 받고, 역할을 배정받아 체계적으로 활동했는지를 따집니다. 한두 번 심부름만 한 것과는 다릅니다.</li>\n<li><strong>계속적 참여 여부</strong> — 일회성 관여와 반복적·지속적 참여는 구별됩니다. 기간이 짧고 관여가 제한적이면 단순 방조에 그칠 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>범죄단체 가입 혐의, AI가 방어 전략을 제시합니다</strong></p>\n<p style="margin:0;font-size:0.95em">조사 경위를 입력하면 혐의 경중과 대응 방법을 무료로 확인하세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '범죄단체 가입 혐의를 받고 있다면',
        content:
          '<p><strong style="color:#1e3a5f">초기 대응이 양형에 결정적 영향을 미칩니다.</strong></p>\n<ul>\n<li><strong>즉시 변호사 선임</strong> — 범죄단체 가입죄는 중형이 선고될 수 있으므로 수사 초기부터 변호사의 조력을 받으세요.</li>\n<li><strong>진술 전략 수립</strong> — 조직 가입 인식이 없었다면 이를 뒷받침할 증거(문자·카톡 내역, 관여 기간·범위)를 정리하세요.</li>\n<li><strong>죄명 경감 협상</strong> — 범죄단체 가입·활동이 아닌 단순 사기 방조로 죄명이 변경되면 형량이 크게 줄어듭니다.</li>\n<li><strong>공소시효 확인</strong> — 포괄일죄의 공소시효는 최종 행위 종료 시점부터 진행합니다. 조직을 탈퇴한 시점이 명확하면 이를 주장하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄단체 구성·가입·활동의 포괄일죄 관계',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 범죄단체를 구성하거나 가입한 자가 더 나아가 구성원으로 활동하는 경우, 이는 포괄일죄 관계에 있다고 판시했습니다.',
        takeaway:
          '범죄단체 가입과 활동은 하나의 죄로 묶이므로, 가입 시점부터 활동 종료 시점까지 전체가 하나의 범죄행위로 평가됩니다.',
      },
    ],
    faq: [
      {
        question: '통장만 빌려줬는데도 범죄단체 가입으로 처벌받나요?',
        answer:
          '<p>통장 대여만으로는 범죄단체 가입이 성립하기 어렵습니다. 다만 조직 존재를 알면서 반복적으로 통장을 제공했다면 가입·활동으로 볼 수 있습니다.</p>',
      },
      {
        question: '범죄단체 가입죄의 형량은 얼마나 되나요?',
        answer:
          '<p>폭력행위 등 처벌에 관한 법률 제4조에 따라 범죄단체 구성원은 그 범죄단체를 이용한 범죄의 실행 여부와 무관하게 처벌됩니다. 형량은 사안에 따라 다르지만 중형이 선고될 수 있습니다.</p>',
      },
      {
        question: '조직을 탈퇴하면 처벌을 피할 수 있나요?',
        answer:
          '<p>탈퇴하더라도 가입·활동 기간의 행위에 대해서는 처벌됩니다. 다만 탈퇴 시점이 명확하면 공소시효 기산점과 양형에 영향을 줄 수 있습니다.</p>',
      },
      {
        question: '단순 사기 방조와 범죄단체 활동의 형량 차이는 얼마나 되나요?',
        answer:
          '<p>사기 방조는 정범의 형에서 감경되지만, 범죄단체 가입·활동은 독립된 중범죄로 가중처벌됩니다. 실형 여부와 형량에서 큰 차이가 납니다.</p>',
      },
    ],
    cta: { text: '범죄단체 가입 혐의 방어 전략 AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 혐의 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 취조 실수 방지', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '사기 합의와 양형', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기죄 성립 요건', href: '/guide/fraud/fraud-crime-establishment-requirements' },
      { label: '사기 공소시효', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ── 사기 7. 법 개정으로 감형 가능성 ──
  {
    domain: 'fraud',
    slug: 'fraud-law-change-lighter-penalty',
    keyword: '사기 법개정 감형 신법적용',
    questionKeyword: '사기 재판 중 법이 바뀌면 형이 가벼워질 수 있나요?',
    ctaKeyword: '사기 법개정 감형 상담',
    type: '비교형',
    perspective: 'offender',
    meta: {
      title: '사기 재판 중 법 개정 — 신법 적용으로 감형받는 조건 3가지 | 로앤가이드',
      description:
        '사기 재판 도중 관련 법이 바뀌어 형이 가벼워질 수 있다면, 신법 적용 여부와 감형 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>사기 혐의로 재판을 받고 있는데, 관련 법령이 개정되어 처벌 기준이 바뀌었습니다. "법이 바뀌면 새 법으로 재판받을 수 있다"고 들었지만, 모든 경우에 적용되는 것은 아닙니다. 형벌법규 변경 시 신법이 적용되는 경우와 그렇지 않은 경우를 구분하는 기준을 정리합니다.</p>',
    sections: [
      {
        title: '형벌법규 변경 시 신법 적용 원칙',
        content:
          '<p><strong style="color:#1e3a5f">범죄 후 법이 바뀌어 형이 가벼워졌다면, 원칙적으로 새 법을 적용합니다.</strong></p>\n<ul>\n<li><strong>형법 제1조 제2항</strong> — 범죄 후 법률이 변경되어 행위가 범죄를 구성하지 않거나 형이 가벼워지면 신법에 따릅니다.</li>\n<li><strong>면소 선고</strong> — 법령 개폐로 형이 폐지되면 형사소송법 제326조 제4호에 따라 면소(재판을 더 진행하지 않음)를 선고합니다.</li>\n<li><strong>경과규정이 없을 때</strong> — 입법자가 종전 위반행위에 대한 처벌을 유지한다는 경과규정을 두지 않았다면, 신법이 그대로 적용됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형벌법규 자체 또는 그로부터 위임받은 법령이 변경되었고, 경과규정이 없다면 원칙적으로 신법이 적용됩니다.</blockquote>',
      },
      {
        title: '신법이 적용되는 경우와 안 되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">어떤 법령이 바뀌었는지에 따라 신법 적용 여부가 달라집니다.</strong></p>\n<ol>\n<li><strong>형벌법규 자체 변경</strong> — 사기죄를 직접 규정한 형법 조항이 개정되어 형이 가벼워졌다면 당연히 신법 적용입니다.</li>\n<li><strong>위임 법령(고시·시행령) 변경</strong> — 형벌법규가 고시 등에 구성요건 일부를 위임한 경우, 그 고시가 변경되면 형벌법규와 결합하여 신법 적용 대상이 됩니다.</li>\n<li><strong>관련 없는 다른 법령 변경</strong> — 형벌법규와 직접 관련 없는 다른 법령이 바뀐 경우에는 "범죄 성립·처벌과 직접 관련된 형사법적 관점의 변화"가 있어야만 신법이 적용됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>법 개정으로 감형 가능한지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">혐의 내용과 변경된 법령을 입력하면 신법 적용 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신법 적용을 주장하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">법 개정 사실을 발견했다면 즉시 재판부에 주장하세요.</strong></p>\n<ul>\n<li><strong>변호인 의견서 제출</strong> — 개정 전후 법령 비교표와 함께, 형법 제1조 제2항에 따른 신법 적용을 구하는 의견서를 제출하세요.</li>\n<li><strong>경과규정 확인</strong> — 개정 법률에 "종전 행위에 대해서는 구법을 적용한다"는 경과규정이 있는지 확인하세요. 경과규정이 있으면 신법 적용이 안 됩니다.</li>\n<li><strong>면소 주장</strong> — 법 개정으로 행위가 더 이상 범죄를 구성하지 않는다면, 면소 선고를 적극적으로 주장하세요.</li>\n<li><strong>양형 참고</strong> — 범죄 자체가 소멸하지 않더라도 형이 가벼워졌다면, 양형에서 유리한 사정으로 활용하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄 후 법률 변경 시 신법 적용 원칙',
        summary:
          '대법원 2025도17027 사건(대법원, 2026.01.15 선고)에서 법원은 형벌법규로부터 위임받은 보건복지부 고시가 개정되어 범죄 구성요건에 해당하지 않게 된 경우, 면소를 선고해야 한다고 판시했습니다.',
        takeaway:
          '형벌법규뿐 아니라 고시·시행령 등 위임 법령이 바뀌어도 신법 적용이 가능합니다. 관련 법령 개정을 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '이미 1심에서 유죄 판결을 받았는데도 신법이 적용되나요?',
        answer:
          '<p>항소심이나 상고심 계속 중에 법이 바뀌었다면 신법을 적용할 수 있습니다. 확정판결 후에는 원칙적으로 적용되지 않습니다.</p>',
      },
      {
        question: '법 개정으로 면소가 되면 전과 기록은 어떻게 되나요?',
        answer:
          '<p>면소 판결은 유무죄를 판단하지 않는 형식적 재판이므로, 전과 기록에 유죄로 남지 않습니다.</p>',
      },
      {
        question: '경과규정이 있으면 신법 적용을 완전히 포기해야 하나요?',
        answer:
          '<p>원칙적으로는 구법이 적용되지만, 경과규정 자체의 위헌성을 다투거나 양형에서 법 개정 취지를 참작하도록 주장할 수는 있습니다.</p>',
      },
      {
        question: '사기죄와 관련 없는 다른 법이 바뀌어도 감형이 되나요?',
        answer:
          '<p>사기죄의 성립·처벌과 직접 관련된 형사법적 관점의 변화가 있어야 합니다. 단순히 행정적 기준 변경만으로는 신법 적용이 어렵습니다.</p>',
      },
    ],
    cta: { text: '사기 법개정 감형 가능성 AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 혐의 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 합의와 양형', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 취조 실수 방지', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '사기 공소시효', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },

  // ── 사기 8. 사기 누범 가중처벌과 실형 회피 ──
  {
    domain: 'fraud',
    slug: 'fraud-recidivist-sentencing-risk',
    keyword: '사기 누범 가중처벌 실형',
    questionKeyword: '사기 전과가 있는데 다시 사기 혐의를 받으면 실형인가요?',
    ctaKeyword: '사기 누범 가중처벌 상담',
    type: '수치기한형',
    perspective: 'offender',
    meta: {
      title: '사기 누범 가중처벌 — 전과 후 3년 내 재범 시 실형 위험과 대응 | 로앤가이드',
      description:
        '사기 전과가 있는 상태에서 다시 사기 혐의를 받고 있다면, 누범 가중 요건과 실형 회피 전략을 지금 확인하세요.',
    },
    intro:
      '<p>사기로 징역형을 받고 출소한 지 2년이 채 안 됐는데, 다시 사기 혐의로 조사를 받게 되었습니다. "누범"이 적용되면 형량이 2배까지 올라간다는데, 형이 이미 실효되었다고 해도 누범에 해당하는지 걱정됩니다. 누범 가중처벌의 요건과 실형을 줄이는 방법을 확인하세요.</p>',
    sections: [
      {
        title: '누범 가중처벌이 적용되는 요건',
        content:
          '<p><strong style="color:#1e3a5f">금고 이상의 형 집행 종료(또는 면제) 후 3년 이내에 금고 이상에 해당하는 죄를 범하면 누범입니다.</strong></p>\n<ul>\n<li><strong>형법 제35조</strong> — 금고 이상의 형을 선고받아 집행이 종료되거나 면제된 후 3년 내에 금고 이상에 해당하는 죄를 지으면 누범으로 가중합니다.</li>\n<li><strong>가중 범위</strong> — 해당 죄에 정한 형의 장기의 2배까지 가중됩니다. 사기죄(10년 이하 징역)라면 누범 적용 시 최대 20년까지 가능합니다.</li>\n<li><strong>형의 실효와 무관</strong> — 형이 실효(형실효법 제7조)되었더라도, 집행 종료 후 3년 내에 재범한 사실이 있으면 누범에 여전히 해당합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형이 실효되었다 해도, "형 집행 종료 후 3년 내 재범"이라는 사실 자체는 남으므로 누범 가중을 피할 수 없습니다.</blockquote>',
      },
      {
        title: '누범 적용 시 실형 가능성과 양형 요소',
        content:
          '<p><strong style="color:#1e3a5f">누범이 적용되면 실형 가능성이 매우 높지만, 양형 감경 요소를 확보하면 줄일 수 있습니다.</strong></p>\n<ol>\n<li><strong>피해자 합의</strong> — 피해 금액 전액 변제와 합의서는 가장 강력한 감경 요소입니다. 합의가 되면 집행유예 가능성이 생깁니다.</li>\n<li><strong>범행 규모와 수법</strong> — 피해 금액이 적고 단순 수법이라면 양형에서 유리합니다. 조직적·계획적 범행은 중형을 받습니다.</li>\n<li><strong>반성과 재범방지 노력</strong> — 깊은 반성, 사회봉사 참여, 직업 훈련 수료 등은 양형에 참작됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>누범 가중 적용 여부와 예상 형량, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">전과 이력과 현재 혐의를 입력하면 대응 전략을 무료로 확인하세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '누범 적용 시 실형 회피를 위한 전략',
        content:
          '<p><strong style="color:#1e3a5f">누범이 적용되더라도 적극적인 대응으로 형량을 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>빠른 피해 변제</strong> — 수사 단계에서 피해 금액을 전액 변제하고 합의서를 확보하세요. 재판 전 합의가 양형에 가장 큰 영향을 미칩니다.</li>\n<li><strong>혐의 일부 부인</strong> — 사기 고의(편취 의사)가 없었다면 이를 적극 다투세요. 사기죄 자체가 성립하지 않으면 누범도 적용되지 않습니다.</li>\n<li><strong>누범 기간 경과 확인</strong> — 형 집행 종료일로부터 정확히 3년이 지난 후에 범한 죄라면 누범에 해당하지 않습니다. 날짜를 정확히 확인하세요.</li>\n<li><strong>양형 자료 제출</strong> — 가족 부양 상황, 건강 상태, 재취업 계획 등 양형에 참작할 수 있는 자료를 적극 제출하세요.</li>\n<li><strong>집행유예 가능 여부</strong> — 누범이라도 선고형이 3년 이하의 징역이면 집행유예가 가능합니다. 형량을 3년 이하로 낮추는 것이 관건입니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형 실효 후에도 누범 가중 적용',
        summary:
          '대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 금고 이상의 형 집행 종료 후 3년 내에 재범한 경우, 이후 형이 실효되었더라도 누범에 해당한다고 판시했습니다.',
        takeaway:
          '형이 실효되어 전과 기록이 삭제되었더라도, 재범 시점이 3년 이내였다면 누범 가중은 피할 수 없습니다. 합의와 감경 전략에 집중하세요.',
      },
    ],
    faq: [
      {
        question: '형 집행 종료일은 어떻게 확인하나요?',
        answer:
          '<p>수형기록카드 또는 형집행종료증명서로 확인할 수 있습니다. 가석방된 경우에는 잔형기간이 경과한 날이 집행 종료일입니다.</p>',
      },
      {
        question: '벌금형도 누범에 해당하나요?',
        answer:
          '<p>누범은 "금고 이상의 형"을 기준으로 합니다. 전과가 벌금형이었다면 누범에 해당하지 않습니다. 현재 혐의가 금고 이상에 해당해야 합니다.</p>',
      },
      {
        question: '집행유예를 받았다가 취소된 경우도 누범인가요?',
        answer:
          '<p>집행유예가 취소되어 실형을 살았다면, 그 집행 종료 후 3년 내 재범 시 누범에 해당합니다. 집행유예 기간 중 재범하여 취소된 경우와 구분해야 합니다.</p>',
      },
      {
        question: '누범이 적용되면 집행유예가 절대 불가능한가요?',
        answer:
          '<p>법률상 불가능하지 않습니다. 선고형이 3년 이하의 징역이면 집행유예가 가능합니다. 다만 실무상 누범에게 집행유예를 선고하는 경우는 드물어, 적극적인 감경 사유 확보가 필수입니다.</p>',
      },
      {
        question: '누범 가중으로 형량이 2배가 되면 벌금형은 안 되나요?',
        answer:
          '<p>사기죄는 원래 "10년 이하 징역 또는 2천만원 이하 벌금"이므로, 누범 가중 시 징역의 장기가 20년까지 올라가지만 벌금형 선택 가능성이 완전히 배제되지는 않습니다. 다만 누범 상태에서 벌금형이 선고되는 경우는 매우 드뭅니다.</p>',
      },
    ],
    cta: { text: '사기 누범 가중처벌 대응 전략 AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 혐의 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 합의와 양형', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
      { label: '사기죄 성립 요건', href: '/guide/fraud/fraud-crime-establishment-requirements' },
      { label: '사기 피해 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 공소시효', href: '/guide/fraud/fraud-statute-of-limitations-period' },
    ],
  },
];
