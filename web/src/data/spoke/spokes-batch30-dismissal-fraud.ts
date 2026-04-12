import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch30: 해고 4개 + 사기 3개
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch30DismissalFraud: SpokePage[] = [
  // ── 해고 1. 수습기간 연장 후 해고 적법성 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-extension-legality',
    keyword: '수습기간 연장 해고 적법성',
    questionKeyword: '수습기간을 연장한 뒤 해고하면 적법한가요?',
    ctaKeyword: '수습기간 연장 해고 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '수습기간 연장 후 해고 — 적법성 판단 기준 4가지 | 로앤가이드',
      description:
        '수습기간이 끝났는데 회사가 연장하겠다며 해고까지 예고한다면, 적법 여부와 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>3개월 수습이 끝날 무렵, 인사팀에서 "수습을 3개월 더 연장하겠다"는 통보를 받았습니다. 연장 기간이 지나자 "수습 평가 미달"을 이유로 해고 통보가 왔습니다. 수습기간 연장 자체가 적법한지, 연장 후 해고가 정당한지 판단하는 기준을 정리합니다.</p>',
    sections: [
      {
        title: '수습기간 연장이 허용되는 조건',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서나 취업규칙에 연장 근거가 없으면 일방적 연장은 무효입니다.</strong></p>\n<ul>\n<li><strong>계약서 근거 확인</strong> — 근로계약서 또는 취업규칙에 "수습기간을 연장할 수 있다"는 규정이 있어야 합니다. 규정 없이 구두로만 연장을 통보했다면 효력이 없습니다.</li>\n<li><strong>연장 사유의 합리성</strong> — 연장 사유가 업무 능력 부족인지, 단순히 정규직 전환을 회피하기 위한 것인지를 구분해야 합니다. 후자는 부당합니다.</li>\n<li><strong>동의 여부</strong> — 근로자의 동의 없이 사용자가 일방적으로 수습기간을 연장하는 것은 근로조건의 불이익 변경에 해당할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수습기간 연장 근거가 계약서에 없거나, 근로자 동의 없이 일방 통보했다면 연장 자체가 무효이고, 이에 따른 해고도 부당합니다.</blockquote>',
      },
      {
        title: '수습기간 중 해고의 정당성 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">수습 근로자도 해고 보호를 받습니다. 다만 정식 직원보다 기준이 완화될 뿐입니다.</strong></p>\n<ol>\n<li><strong>업무 능력 부족의 객관적 입증</strong> — 사용자가 "업무 미달"을 주장하려면 구체적 평가 기준과 평가 결과를 제시해야 합니다. 막연한 인상은 부족합니다.</li>\n<li><strong>교육·지도 이행 여부</strong> — 수습기간 동안 충분한 교육과 업무 지도를 제공했는지가 중요합니다. 교육 없이 "못한다"고 해고하면 부당합니다.</li>\n<li><strong>해고 절차 준수</strong> — 수습기간 3개월 이내라 해도, 근로기준법상 해고 예고(30일 전 또는 해고예고수당)의무는 3개월 초과 근무 시 적용됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>수습기간 해고 통보, AI가 적법성을 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약서 내용과 해고 사유를 입력하면 부당해고 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수습 해고를 당했을 때 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고 통보를 받았다면 30일 이내에 증거를 확보하고, 3개월 이내에 구제를 신청하세요.</strong></p>\n<ul>\n<li><strong>해고 사유 서면 요구</strong> — 근로기준법 제27조에 따라 해고 사유와 시기를 서면으로 통지해야 합니다. 서면 없는 해고는 그 자체로 부당해고입니다.</li>\n<li><strong>수습 평가 기록 확보</strong> — 수습 평가표, 면담 기록, 업무 일지 등을 요청하세요. 평가 기록이 없다면 객관적 사유 부재의 증거가 됩니다.</li>\n<li><strong>부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 지방노동위원회에 구제신청서를 제출하세요.</li>\n<li><strong>실업급여 신청</strong> — 비자발적 이직에 해당하므로 실업급여 수급이 가능합니다. 이직확인서의 이직 사유를 반드시 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 수습기간 해고의 정당성 심사 기준',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 수습 근로자에 대한 본채용 거부도 근로기준법상 해고에 해당하며, 객관적이고 합리적인 이유가 있어야 정당하다고 판시했습니다.',
        takeaway:
          '수습기간이라도 사용자가 마음대로 해고할 수 없습니다. 평가 기준과 교육 제공 여부를 꼼꼼히 따져보세요.',
      },
    ],
    faq: [
      {
        question: '수습기간 연장에 동의하지 않으면 바로 해고되나요?',
        answer:
          '<p>연장에 동의하지 않았다고 해고하면 부당해고에 해당할 수 있습니다. 수습 종료 시점에 정규직 전환이 원칙이며, 전환 거부에도 객관적 사유가 필요합니다.</p>',
      },
      {
        question: '수습기간 중에는 해고예고를 안 해도 되나요?',
        answer:
          '<p>3개월 이내의 수습 근로자는 해고예고 의무가 면제됩니다. 하지만 3개월을 초과하여 근무했다면 30일 전 예고 또는 해고예고수당을 지급해야 합니다.</p>',
      },
      {
        question: '수습 평가 기준을 사전에 알려주지 않았는데 해고할 수 있나요?',
        answer:
          '<p>평가 기준을 사전에 고지하지 않았다면, 평가 결과의 객관성이 부정될 수 있습니다. 이는 부당해고 판단에 유리한 요소입니다.</p>',
      },
      {
        question: '수습기간 연장이 반복되면 어떻게 대응하나요?',
        answer:
          '<p>합리적 사유 없이 반복적으로 수습을 연장하는 것은 정규직 전환을 회피하기 위한 탈법 행위입니다. 노동청에 진정하거나 부당해고 구제를 신청하세요.</p>',
      },
      {
        question: '5인 미만 사업장에서도 수습 해고를 다툴 수 있나요?',
        answer:
          '<p>부당해고 구제신청은 5인 이상 사업장에서만 가능합니다. 5인 미만이면 민사소송(해고무효확인)으로 다퉈야 합니다.</p>',
      },
    ],
    cta: { text: '수습기간 해고 적법성 AI로 즉시 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 서류 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '구두 해고 대응', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '저성과 해고 방어', href: '/guide/dismissal/dismissal-low-performance-defense' },
    ],
  },

  // ── 해고 2. 정년 퇴직과 해고의 구분 기준 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-retirement-age-forced',
    keyword: '정년 퇴직 해고 구분',
    questionKeyword: '정년 퇴직과 해고는 어떻게 다른가요?',
    ctaKeyword: '정년 해고 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '정년 퇴직 vs 해고 — 구분 기준과 대응법 3가지 | 로앤가이드',
      description:
        '정년이 지났다며 퇴직을 강요받고 있다면, 정당한 정년 퇴직인지 부당해고인지 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>회사에서 "정년이 됐으니 나가라"는 통보를 받았습니다. 그런데 동료는 같은 나이인데 계속 근무하고 있습니다. 취업규칙상 정년이 명확히 정해져 있지 않거나, 정년 규정이 특정 직급에만 적용된다면 이는 해고에 해당할 수 있습니다. 정년 퇴직과 해고의 구분 기준을 확인하세요.</p>',
    sections: [
      {
        title: '정년 퇴직이 적법하려면',
        content:
          '<p><strong style="color:#1e3a5f">적법한 정년 퇴직은 취업규칙·단체협약에 명확한 정년 규정이 있어야 합니다.</strong></p>\n<ul>\n<li><strong>정년 규정 존재 여부</strong> — 취업규칙 또는 단체협약에 정년(만 60세 이상)이 명시되어 있어야 합니다. 고용상 연령차별금지법은 정년을 60세 이상으로 정하도록 강제합니다.</li>\n<li><strong>일률적 적용</strong> — 같은 조건의 근로자에게 정년이 일률적으로 적용되어야 합니다. 특정인만 퇴직시키면 해고에 해당합니다.</li>\n<li><strong>정년 도달 시점</strong> — 정년 도달일이 명확해야 합니다. "대략 그 시기"가 아니라 구체적 날짜를 기준으로 판단합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정년 규정이 없거나 60세 미만으로 정해져 있다면, 정년 퇴직을 이유로 한 퇴직 강요는 부당해고에 해당합니다.</blockquote>',
      },
      {
        title: '정년 퇴직을 가장한 해고를 판별하는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">아래 상황에 해당하면 정년 퇴직이 아닌 사실상 해고입니다.</strong></p>\n<ol>\n<li><strong>정년 규정 미달</strong> — 취업규칙상 정년이 60세 미만이면 해당 규정 자체가 무효입니다. 무효 규정에 따른 퇴직 강요는 부당해고입니다.</li>\n<li><strong>선별적 적용</strong> — 같은 나이의 다른 근로자는 계속 근무하는데 특정인만 퇴직시키면 해고에 해당합니다.</li>\n<li><strong>정년 전 퇴직 강요</strong> — 정년에 도달하지 않았는데 "곧 정년이니 미리 나가라"는 것은 권고사직 또는 해고입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>정년 퇴직인지 부당해고인지, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">취업규칙과 퇴직 경위를 입력하면 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '정년 퇴직 후 재고용과 촉탁직 전환',
        content:
          '<p><strong style="color:#1e3a5f">정년 후에도 재고용 제도나 촉탁직 전환으로 계속 근무할 수 있습니다.</strong></p>\n<ul>\n<li><strong>재고용 제도</strong> — 단체협약이나 취업규칙에 정년 후 재고용 규정이 있다면 사용자는 이를 이행할 의무가 있습니다.</li>\n<li><strong>촉탁직 전환</strong> — 정년 후 촉탁직으로 전환하면서 임금·근로조건을 대폭 낮추면 불이익 변경에 해당할 수 있습니다.</li>\n<li><strong>퇴직금 정산</strong> — 정년 퇴직 시 퇴직금은 반드시 지급해야 합니다. 재고용 시에도 이전 근속기간에 대한 퇴직금은 정산됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 규정과 부당해고 판단',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 취업규칙상 정년 규정의 적용 범위가 불명확한 경우, 근로자에게 불리하게 해석해서는 안 되며 정년 퇴직을 이유로 한 퇴직 처리가 부당할 수 있다고 판시했습니다.',
        takeaway:
          '정년 규정이 애매하면 근로자에게 유리하게 해석됩니다. 취업규칙의 정년 조항을 정확히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 정년이 55세로 되어 있으면 어떻게 되나요?',
        answer:
          '<p>고용상 연령차별금지법에 따라 정년은 60세 이상이어야 합니다. 55세 규정은 자동으로 60세로 적용됩니다.</p>',
      },
      {
        question: '정년 후 재고용 약속을 안 지키면 구제할 수 있나요?',
        answer:
          '<p>단체협약이나 취업규칙에 재고용 규정이 있으면 이행을 요구할 수 있습니다. 불이행 시 손해배상 청구도 가능합니다.</p>',
      },
      {
        question: '정년 퇴직 시 실업급여를 받을 수 있나요?',
        answer:
          '<p>정년 퇴직은 비자발적 이직으로 분류되어 실업급여 수급이 가능합니다. 이직확인서의 사유를 "정년 퇴직"으로 확인하세요.</p>',
      },
      {
        question: '임원에게도 정년 규정이 적용되나요?',
        answer:
          '<p>임원은 근로기준법상 근로자에 해당하지 않으면 정년 규정의 적용을 받지 않습니다. 다만 실질적으로 근로자성이 인정되면 적용될 수 있습니다.</p>',
      },
    ],
    cta: { text: '정년 퇴직 vs 해고 구분 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '구조조정 해고 부당 기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '권고사직 서류 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '정년 후 재고용', href: '/guide/dismissal/dismissal-post-retirement-rehire-rights' },
    ],
  },

  // ── 해고 3. 징계위원회 절차 위반 시 해고 무효 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-hearing-rights',
    keyword: '징계위원회 절차 위반 해고 무효',
    questionKeyword: '징계위원회 절차를 안 지키면 해고가 무효인가요?',
    ctaKeyword: '징계 해고 절차 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '징계위원회 절차 위반 시 해고 무효 — 핵심 판단 기준 4가지 | 로앤가이드',
      description:
        '징계위원회도 제대로 열지 않고 해고를 당했다면, 절차 위반으로 해고 무효를 주장하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 갑자기 "징계해고"라는 통보를 받았습니다. 징계위원회가 열렸다는 말은 들었지만, 출석 통지도 받지 못했고 소명 기회도 없었습니다. 징계위원회의 절차를 지키지 않은 징계해고는 사유가 정당하더라도 무효가 될 수 있습니다.</p>',
    sections: [
      {
        title: '징계 절차에서 반드시 지켜야 할 4가지',
        content:
          '<p><strong style="color:#1e3a5f">절차 위반이 하나라도 있으면 징계해고 자체가 무효가 될 수 있습니다.</strong></p>\n<ol>\n<li><strong>출석 통지</strong> — 징계위원회 개최 사실과 일시·장소를 사전에 서면으로 통지해야 합니다. 통지 없이 열린 징계위원회는 무효입니다.</li>\n<li><strong>소명 기회 부여</strong> — 근로자에게 징계 사유에 대해 소명할 기회를 반드시 주어야 합니다. 소명 없이 내린 징계는 적법절차 위반입니다.</li>\n<li><strong>징계위원 구성의 공정성</strong> — 취업규칙에 정한 위원 수와 자격을 갖춰야 합니다. 편향된 위원 구성도 절차 위반입니다.</li>\n<li><strong>징계 사유의 서면 통지</strong> — 어떤 행위가 징계 대상인지 구체적으로 서면 통지해야 합니다. 막연히 "근무태도 불량"으로는 부족합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대법원은 징계 사유가 인정되더라도 징계 절차에 중대한 하자가 있으면 해당 징계처분은 무효라고 일관되게 판시합니다.</blockquote>',
      },
      {
        title: '징계 절차 위반을 입증하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">절차 위반은 "없었다"는 사실을 입증하면 되므로, 회사가 절차 이행을 증명해야 합니다.</strong></p>\n<ul>\n<li><strong>출석 통지 기록 확인</strong> — 서면 통지를 받은 적이 없다면, 회사에 통지서 사본을 요구하세요. 이메일·문자·등기우편 등 기록이 없으면 통지 부존재가 입증됩니다.</li>\n<li><strong>징계위원회 회의록</strong> — 회의록에 소명 절차가 기재되지 않았거나, 근로자 서명이 없다면 소명 기회 미부여의 증거가 됩니다.</li>\n<li><strong>위원 구성 확인</strong> — 취업규칙에 정한 위원 수 미달이나 자격 미충족을 확인하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>징계해고 절차 위반 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">징계 경위를 입력하면 절차 위반 포인트와 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '절차 위반 징계해고 후 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">절차 위반이 확인되면 부당해고 구제신청에서 유리한 위치를 점합니다.</strong></p>\n<ul>\n<li><strong>부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 지방노동위원회에 신청합니다. 절차 위반 자체가 독립적인 무효 사유이므로, 징계 사유의 정당성과 별개로 구제받을 수 있습니다.</li>\n<li><strong>해고무효확인 소송</strong> — 노동위원회 구제와 별개로 법원에 해고무효확인 소송을 제기할 수도 있습니다.</li>\n<li><strong>임금 청구</strong> — 해고가 무효로 확인되면 해고 기간 동안의 미지급 임금을 청구할 수 있습니다.</li>\n<li><strong>징계 재심 요구</strong> — 일부 취업규칙은 징계에 대한 재심 절차를 두고 있습니다. 재심 가능 여부도 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계 절차 하자와 해고 무효',
        summary:
          '서울중앙지법 2023가합96954 사건(서울중앙지법, 2025.05.01 선고)에서 법원은 징계위원회 소집 통지 없이 이루어진 징계해고에 대해, 근로자의 방어권이 침해되었으므로 절차적 정당성을 갖추지 못해 무효라고 판시했습니다.',
        takeaway:
          '징계 사유가 있더라도 소명 기회를 주지 않으면 해고는 무효입니다. 출석 통지와 소명 절차 기록을 꼭 확인하세요.',
      },
    ],
    faq: [
      {
        question: '소명 기회를 주었지만 시간이 너무 짧았어도 위반인가요?',
        answer:
          '<p>형식적으로만 소명 기회를 준 경우(예: 당일 1시간 전 통보)에는 실질적 소명 기회가 없었다고 판단될 수 있습니다.</p>',
      },
      {
        question: '취업규칙에 징계위원회 규정이 없으면 어떻게 되나요?',
        answer:
          '<p>취업규칙에 별도 규정이 없더라도 근로자에게 소명 기회를 부여하는 것은 적법절차의 기본 원칙입니다. 규정 부재가 소명 생략의 정당화 사유는 아닙니다.</p>',
      },
      {
        question: '절차 위반으로 해고가 무효되면 다시 징계할 수 있나요?',
        answer:
          '<p>절차를 보완하여 새로운 징계 절차를 진행할 수는 있습니다. 다만 같은 사유로 이중 징계하는 것은 제한될 수 있습니다.</p>',
      },
      {
        question: '징계위원 중 상사가 포함되어 있는데 공정한가요?',
        answer:
          '<p>징계 사유와 직접 관련 있는 상사가 위원으로 참여하면 공정성이 의심됩니다. 제척·기피 사유에 해당할 수 있으므로 이의를 제기하세요.</p>',
      },
      {
        question: '징계 해고가 아닌 감봉·정직도 절차 위반이면 무효인가요?',
        answer:
          '<p>해고뿐 아니라 감봉, 정직 등 모든 징계처분에 적법절차 원칙이 적용됩니다. 절차 위반 시 해당 처분은 무효입니다.</p>',
      },
    ],
    cta: { text: '징계해고 절차 위반 여부 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '징계 양정 과다 해고', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '구두 해고 대응', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '권고사직 서류 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '즉시해고 요건', href: '/guide/dismissal/dismissal-immediate-fire-conditions' },
    ],
  },

  // ── 해고 4. 사업장 폐업·축소 시 해고 대응 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-workplace-closure-layoff',
    keyword: '사업장 폐업 축소 해고 대응',
    questionKeyword: '사업장이 폐업하면서 해고를 당했는데 어떻게 대응하나요?',
    ctaKeyword: '폐업 해고 대응 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '사업장 폐업·축소 시 해고 대응 — 체크리스트 5가지 | 로앤가이드',
      description:
        '회사가 폐업하거나 사업을 축소하면서 해고를 통보받았다면, 미지급 임금과 퇴직금 확보 방법을 지금 확인하세요.',
    },
    intro:
      '<p>출근했더니 "회사 사정이 어려워 문을 닫는다"는 공지가 붙어 있었습니다. 밀린 월급 2개월치, 퇴직금도 못 받았는데 사장은 연락이 안 됩니다. 사업장이 폐업하거나 축소될 때 근로자가 반드시 확보해야 할 권리와 대응 절차를 정리합니다.</p>',
    sections: [
      {
        title: '폐업·축소 시 사용자의 법적 의무 5가지',
        content:
          '<p><strong style="color:#1e3a5f">사업장이 문을 닫아도 사용자의 임금·퇴직금 지급 의무는 사라지지 않습니다.</strong></p>\n<ol>\n<li><strong>해고 예고</strong> — 폐업이라도 30일 전 해고 예고 또는 30일분 해고예고수당을 지급해야 합니다.</li>\n<li><strong>미지급 임금 지급</strong> — 퇴직일로부터 14일 이내에 모든 미지급 임금을 지급해야 합니다(근로기준법 제36조).</li>\n<li><strong>퇴직금 지급</strong> — 1년 이상 근무한 근로자에게 퇴직금을 지급해야 합니다.</li>\n<li><strong>이직확인서 발급</strong> — 실업급여 신청에 필요한 이직확인서를 발급해야 합니다.</li>\n<li><strong>경영상 해고 절차 준수</strong> — 사업 축소로 인한 정리해고라면 근로기준법 제24조의 긴박한 경영상 필요, 해고 회피 노력, 합리적 기준, 근로자대표 협의 등 4대 요건을 갖춰야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 폐업이라도 미지급 임금과 퇴직금 지급 의무는 그대로 남습니다. 체당금 제도를 활용하면 국가가 대신 지급합니다.</blockquote>',
      },
      {
        title: '폐업 시 임금·퇴직금 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">사용자가 돈이 없다고 해도 체당금·우선변제 등으로 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>체당금 제도</strong> — 사업주가 도산(파산·회생)하면 고용노동부에서 최종 3개월 임금, 최종 3년 퇴직금, 휴업수당을 대신 지급합니다. 임금채권보장법에 따라 신청하세요.</li>\n<li><strong>간이대지급금</strong> — 도산 인정까지 시간이 걸리면, 사업주 소재불명 등의 사유로 간이대지급금을 먼저 신청할 수 있습니다(최대 1,000만원).</li>\n<li><strong>임금채권 우선변제</strong> — 사업주의 재산에 대해 임금채권은 세금·담보권보다 우선하여 변제받습니다(최종 3개월분 임금, 최종 3년분 퇴직금).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>폐업으로 밀린 임금, AI가 확보 방법을 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">미지급 금액과 상황을 입력하면 체당금 신청부터 우선변제까지 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '폐업 해고 후 즉시 해야 할 5가지',
        content:
          '<p><strong style="color:#1e3a5f">시간이 지날수록 증거와 청구권이 약해집니다. 즉시 행동하세요.</strong></p>\n<ol>\n<li><strong>근로 증빙 확보</strong> — 근로계약서, 급여명세서, 출퇴근 기록, 4대 보험 가입 내역을 확보하세요. 사업장이 문을 닫으면 증거를 구하기 어렵습니다.</li>\n<li><strong>고용노동부 진정</strong> — 미지급 임금·퇴직금에 대해 관할 고용노동청에 진정서를 제출하세요.</li>\n<li><strong>체당금 신청</strong> — 도산 사실이 확인되면 즉시 체당금을 신청하세요.</li>\n<li><strong>실업급여 신청</strong> — 고용센터에 구직 등록 후 실업급여를 신청하세요.</li>\n<li><strong>경영상 해고 적법성 검토</strong> — 사업 축소인데 특정인만 해고했다면 정리해고 4대 요건 위반으로 부당해고 구제가 가능합니다.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 축소와 경영상 해고 요건',
        summary:
          '서울행법 2024구합52434 사건(서울행법, 2025.04.18 선고)에서 법원은 사업 축소를 이유로 한 정리해고에서 해고 회피 노력과 근로자대표 협의를 거치지 않은 해고는 부당하다고 판시했습니다.',
        takeaway:
          '사업이 어렵다는 이유만으로 바로 해고할 수 없습니다. 전보·배치전환·근로시간 단축 등 해고 회피 노력을 했는지 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사장이 잠적했는데 밀린 임금을 받을 수 있나요?',
        answer:
          '<p>사업주 소재불명이 확인되면 간이대지급금(최대 1,000만원)을 고용노동부에 신청할 수 있습니다. 고용노동청에 진정 후 소재불명 확인서를 받으세요.</p>',
      },
      {
        question: '체당금은 얼마까지 받을 수 있나요?',
        answer:
          '<p>최종 3개월 임금과 최종 3년 퇴직금, 휴업수당을 합산한 금액을 받을 수 있습니다. 다만 연령별 상한액이 있으므로 고용노동부에서 정확한 금액을 확인하세요.</p>',
      },
      {
        question: '폐업 예정인데 사전에 대비할 수 있는 것이 있나요?',
        answer:
          '<p>근로계약서·급여명세서·출근기록을 미리 사본으로 확보하세요. 4대 보험 가입 내역도 국민건강보험공단에서 출력해두면 체당금 신청 시 도움이 됩니다.</p>',
      },
      {
        question: '사업 축소인데 나만 해고되었습니다. 부당해고인가요?',
        answer:
          '<p>경영상 정리해고는 합리적이고 공정한 기준에 따라 대상자를 선정해야 합니다. 특정인만 해고했다면 부당해고에 해당할 가능성이 높습니다.</p>',
      },
      {
        question: '폐업한 회사의 퇴직금 시효가 있나요?',
        answer:
          '<p>퇴직금 청구 시효는 3년입니다. 3년 이내에 진정·소송·체당금 신청 등의 조치를 취해야 합니다.</p>',
      },
    ],
    cta: { text: '폐업 해고 대응 방법 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '구조조정 해고 부당 기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 서류 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '구두 해고 대응', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
    ],
  },

  // ── 사기 5. 보이스피싱 대포통장 피의자 대응 ──
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-money-mule-defense',
    keyword: '보이스피싱 대포통장 피의자 대응',
    questionKeyword: '대포통장으로 보이스피싱 혐의를 받고 있다면 어떻게 대응하나요?',
    ctaKeyword: '대포통장 혐의 상담',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '보이스피싱 대포통장 혐의 — 피의자 대응법 4단계 | 로앤가이드',
      description:
        '모르는 사이에 대포통장으로 이용되어 보이스피싱 혐의를 받고 있다면, 방어 전략과 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 경찰에서 "보이스피싱 공범 혐의로 조사를 받아야 한다"는 연락이 왔습니다. 아르바이트로 통장을 빌려줬을 뿐인데 전자금융거래법 위반, 사기 방조 혐의까지 붙었습니다. 본인이 보이스피싱에 가담한 적이 없다면, 혐의를 받고 있는 상황에서 어떻게 대응해야 하는지 정리합니다.</p>',
    sections: [
      {
        title: '대포통장 관련 혐의의 종류와 처벌',
        content:
          '<p><strong style="color:#1e3a5f">통장을 빌려주기만 해도 여러 혐의가 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>전자금융거래법 위반</strong> — 접근매체(통장·카드·OTP)를 양도·대여하면 5년 이하 징역 또는 3,000만원 이하 벌금에 처합니다.</li>\n<li><strong>사기 방조</strong> — 대포통장이 사기에 이용된 사실을 알았거나 알 수 있었다면 사기죄의 방조범으로 처벌됩니다. 형법 제347조 사기죄(10년 이하 징역 또는 2,000만원 이하 벌금)의 방조는 정범의 1/2까지 감경됩니다.</li>\n<li><strong>범죄수익은닉규제법 위반</strong> — 범죄수익의 이전·은닉을 돕는 행위로 5년 이하 징역 또는 3,000만원 이하 벌금입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "몰랐다"는 주장만으로는 부족합니다. 구체적으로 어떤 상황에서 통장을 빌려주었는지, 대가를 받았는지가 혐의 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '혐의를 받고 있을 때 4단계 대응법',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 전에 반드시 준비해야 할 사항을 단계별로 정리합니다.</strong></p>\n<ol>\n<li><strong>변호사 선임</strong> — 경찰 조사 전에 반드시 형사 전문 변호사를 선임하세요. 초기 조사에서의 진술이 재판 결과에 결정적 영향을 미칩니다.</li>\n<li><strong>통장 양도 경위 정리</strong> — 언제, 누구에게, 어떤 경위로 통장을 빌려주었는지 시간순으로 정리하세요. 취업 사기, 대출 사기에 속아서 빌려준 경우 피해자 입장을 주장할 수 있습니다.</li>\n<li><strong>미필적 고의 반박 준비</strong> — 검찰은 "보이스피싱에 이용될 수 있다는 것을 알 수 있었다"고 미필적 고의를 주장합니다. 통장을 빌려준 구체적 사정(취업 사기 피해, 대출 조건으로 요구 등)을 입증하세요.</li>\n<li><strong>피해자 배상 검토</strong> — 혐의가 인정될 가능성이 있다면, 피해자에 대한 배상을 통해 형량을 줄이는 전략도 함께 검토하세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>보이스피싱 대포통장 혐의, AI가 방어 전략을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">통장 양도 경위와 혐의 내용을 입력하면 대응 방향을 무료로 확인하세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '경찰 조사에서 주의할 점',
        content:
          '<p><strong style="color:#1e3a5f">조사에서 한 진술은 번복이 매우 어렵습니다. 신중하게 대응하세요.</strong></p>\n<ul>\n<li><strong>진술 거부권</strong> — 불리한 진술은 거부할 수 있습니다. 변호사와 상의 없이 혼자 진술하지 마세요.</li>\n<li><strong>대가 수령 여부</strong> — 통장 대여의 대가로 금전을 받았다면 이를 숨기지 마세요. 거짓 진술이 밝혀지면 정상참작이 어려워집니다.</li>\n<li><strong>자발적 통장 양도 구분</strong> — 취업 사기·대출 사기에 속아서 양도한 것과, 대가를 받고 의도적으로 양도한 것은 법적 평가가 크게 다릅니다.</li>\n<li><strong>공범 관계 부인</strong> — 보이스피싱 조직과 연락한 적이 없고, 범행 내용을 몰랐다면 이를 구체적으로 진술하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대포통장 양도자의 사기 방조 고의 판단',
        summary:
          '대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 통장을 양도한 피고인이 보이스피싱에 이용될 가능성을 인식했는지 여부는 양도 경위, 대가 유무, 사회적 경험 등을 종합하여 판단해야 한다고 판시했습니다.',
        takeaway:
          '대포통장 양도의 고의는 구체적 상황을 종합하여 판단됩니다. 취업 사기나 대출 사기에 속은 경위를 구체적으로 입증하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '취업 사기에 속아서 통장을 넘겼는데도 처벌받나요?',
        answer:
          '<p>취업 사기 피해자임이 인정되면 고의가 부정되어 무죄가 가능합니다. 다만 의심할 수 있는 정황이 있었다면 미필적 고의가 인정될 수 있으므로, 구체적 경위 입증이 중요합니다.</p>',
      },
      {
        question: '통장을 빌려주고 10만원을 받았는데 어떤 혐의인가요?',
        answer:
          '<p>대가를 받고 통장을 양도하면 전자금융거래법 위반이 성립합니다. 해당 통장이 사기에 이용되었다면 사기 방조 혐의도 추가됩니다.</p>',
      },
      {
        question: '첫 범행이면 실형을 피할 수 있나요?',
        answer:
          '<p>초범이고 단순 양도(대가 소액)라면 벌금형이나 집행유예가 가능합니다. 다만 피해 금액이 크거나 다수의 통장을 양도했다면 실형 가능성이 높아집니다.</p>',
      },
      {
        question: '경찰 조사를 안 가면 어떻게 되나요?',
        answer:
          '<p>정당한 사유 없이 출석을 거부하면 체포영장이 발부될 수 있습니다. 변호사를 선임한 후 조사에 성실히 응하는 것이 유리합니다.</p>',
      },
      {
        question: '피해자에게 배상하면 형량이 줄어드나요?',
        answer:
          '<p>피해 배상과 합의는 양형에서 중요한 감경 사유입니다. 기소 전 합의가 되면 기소유예도 가능하고, 재판 중이라도 형량을 크게 줄일 수 있습니다.</p>',
      },
    ],
    cta: { text: '대포통장 혐의 방어 전략 AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 긴급 대응', href: '/guide/fraud/voice-phishing-immediate-5steps' },
      { label: '보이스피싱 자금 회수', href: '/guide/fraud/voice-phishing-fund-recovery-process' },
      { label: '사기 피의자 합의 감형', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '사기 고소장 필수 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
    ],
  },

  // ── 사기 6. 가상화폐 투자 사기 신고와 증거 수집 ──
  {
    domain: 'fraud',
    slug: 'fraud-crypto-investment-scam-report',
    keyword: '가상화폐 투자 사기 신고 증거',
    questionKeyword: '가상화폐 투자 사기를 당했는데 어떻게 신고하고 증거를 모으나요?',
    ctaKeyword: '가상화폐 사기 신고 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '가상화폐 투자 사기 신고 — 증거 수집부터 고소까지 5단계 | 로앤가이드',
      description:
        '가상화폐 투자를 믿고 돈을 보냈는데 사기였다면, 신고 절차와 증거 수집 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"수익률 300% 보장"이라는 말에 가상화폐에 투자했는데, 출금이 막히고 상대방 연락이 두절됐습니다. 가상화폐 투자 사기는 증거가 빠르게 사라지고 자금 추적이 어려워 신속한 대응이 중요합니다. 신고 절차와 증거 수집 방법을 단계별로 정리합니다.</p>',
    sections: [
      {
        title: '가상화폐 투자 사기의 유형과 특징',
        content:
          '<p><strong style="color:#1e3a5f">아래 특징이 하나라도 해당하면 투자 사기를 의심하세요.</strong></p>\n<ul>\n<li><strong>고수익 보장</strong> — "원금 보장", "월 수익 30%" 등 확정 수익을 약속하는 것은 전형적인 사기 수법입니다. 가상화폐 투자에서 수익 보장은 불가능합니다.</li>\n<li><strong>가짜 거래소·앱</strong> — 실제 거래소를 모방한 가짜 사이트나 앱에 가입시킨 후 입금을 유도합니다. 수익이 늘어나는 것처럼 보여주지만 출금은 불가능합니다.</li>\n<li><strong>리딩방·텔레그램 그룹</strong> — 비공개 채팅방에서 투자 정보를 제공한다며 참여비나 투자금을 받습니다.</li>\n<li><strong>지인 소개형</strong> — 지인이 먼저 소액 수익을 보여주고, 큰 금액을 투자하면 출금을 차단합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 가상화폐 자체는 합법이지만, 수익 보장·원금 보장을 약속하며 투자를 유도하면 형법 제347조 사기죄에 해당합니다.</blockquote>',
      },
      {
        title: '증거 수집 5단계 — 시간이 생명입니다',
        content:
          '<p><strong style="color:#1e3a5f">가상화폐 사기는 증거가 빠르게 삭제됩니다. 발견 즉시 수집을 시작하세요.</strong></p>\n<ol>\n<li><strong>대화 내역 캡처</strong> — 카카오톡·텔레그램·문자 등 모든 대화를 스크린샷하세요. 수익 보장 약속, 투자 권유 내용이 핵심 증거입니다.</li>\n<li><strong>송금 내역 확보</strong> — 은행 이체 내역, 가상화폐 전송 기록(트랜잭션 해시)을 출력하세요. 거래소 입출금 내역도 확보합니다.</li>\n<li><strong>상대방 정보 수집</strong> — 상대방 이름, 전화번호, 계좌번호, 지갑 주소, 사이트 URL 등 확인 가능한 모든 정보를 기록하세요.</li>\n<li><strong>사이트·앱 증거 보전</strong> — 가짜 거래소 사이트 화면, 앱 설치 화면, 수익 표시 화면을 영상과 스크린샷으로 저장하세요. 사이트가 사라지기 전에 확보해야 합니다.</li>\n<li><strong>제3자 증인 확보</strong> — 같은 피해를 입은 다른 투자자가 있다면 연락처를 확보하세요. 다수 피해자의 진술은 사기 입증에 매우 유리합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>가상화폐 사기 증거 수집, AI가 즉시 도와드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 상황을 입력하면 수집해야 할 증거와 신고 절차를 무료로 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고와 고소 절차',
        content:
          '<p><strong style="color:#1e3a5f">증거를 확보했다면 신속하게 신고·고소를 진행하세요.</strong></p>\n<ul>\n<li><strong>경찰 사이버수사대 신고</strong> — 경찰청 사이버수사국(https://ecrm.police.go.kr)에 온라인 신고를 접수하세요. 오프라인은 가까운 경찰서 사이버수사팀에 방문합니다.</li>\n<li><strong>금융감독원 신고</strong> — 금감원 불법금융신고센터(1332)에 신고하면 관련 계좌 지급정지와 사기 이용 계좌 조회가 가능합니다.</li>\n<li><strong>고소장 제출</strong> — 피해 경위, 피의자 정보, 증거 목록을 포함한 고소장을 경찰서에 제출하세요. 고소장이 구체적일수록 수사가 빨라집니다.</li>\n<li><strong>계좌 지급정지</strong> — 송금한 계좌가 확인되면 해당 은행에 즉시 지급정지를 요청하세요. 전기통신금융사기 피해 방지법에 따라 은행이 지급정지를 해줍니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상화폐 투자 사기의 기망 행위 판단',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 수익 보장을 약속하며 투자금을 모집한 행위에 대해, 투자 구조 자체가 수익 실현이 불가능한 구조였다면 기망 행위에 해당한다고 판시했습니다.',
        takeaway:
          '수익 실현이 구조적으로 불가능한 투자를 권유한 것은 사기입니다. 투자 구조의 허구성을 입증하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '가상화폐로 송금한 돈도 돌려받을 수 있나요?',
        answer:
          '<p>가상화폐 자체는 추적이 가능하지만, 믹서(mixer)나 해외 거래소로 이동하면 회수가 어렵습니다. 수사기관에 빨리 신고할수록 자산 동결 가능성이 높아집니다.</p>',
      },
      {
        question: '해외 사이트에 투자했는데 한국에서 고소할 수 있나요?',
        answer:
          '<p>피해자가 한국에 거주하고 한국에서 송금했다면 한국 경찰에 고소할 수 있습니다. 다만 피의자가 해외에 있으면 수사가 길어질 수 있습니다.</p>',
      },
      {
        question: '텔레그램 대화방이 삭제되었는데 증거가 없나요?',
        answer:
          '<p>수사기관이 텔레그램에 자료 보전을 요청할 수 있습니다. 본인 단말기에 남은 캐시 데이터도 디지털 포렌식으로 복구 가능한 경우가 있습니다.</p>',
      },
      {
        question: '투자 사기와 단순 투자 손실의 차이는 무엇인가요?',
        answer:
          '<p>투자 손실은 위험을 알고 투자한 결과입니다. 사기는 상대방이 허위 사실(수익 보장, 가짜 거래소 등)로 투자를 유도한 경우입니다. 기망 행위의 유무가 차이점입니다.</p>',
      },
      {
        question: '피해 금액이 소액이어도 고소할 수 있나요?',
        answer:
          '<p>금액에 관계없이 고소할 수 있습니다. 다만 소액 피해는 다수 피해자와 함께 공동 고소하면 수사기관이 더 적극적으로 수사합니다.</p>',
      },
    ],
    cta: { text: '가상화폐 투자 사기 대응 AI로 시작하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '투자 사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '사기 피해 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 고소장 필수 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 합의와 양형', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '보이스피싱 긴급 대응', href: '/guide/fraud/voice-phishing-immediate-5steps' },
    ],
  },

  // ── 사기 7. 연애빙자 사기 증거 수집과 고소 ──
  {
    domain: 'fraud',
    slug: 'fraud-dating-romance-scam-evidence',
    keyword: '연애빙자 사기 증거 수집 고소',
    questionKeyword: '연애빙자 사기를 당했는데 어떻게 증거를 모으고 고소하나요?',
    ctaKeyword: '연애빙자 사기 고소 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '연애빙자 사기 증거 수집 — 고소부터 환수까지 4단계 | 로앤가이드',
      description:
        '연인이라 믿고 돈을 빌려줬는데 사기였다면, 증거 수집과 고소 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"사업이 어렵다", "곧 갚겠다"며 수천만원을 빌려간 연인이 연락을 끊었습니다. 처음부터 돈이 목적이었다는 것을 뒤늦게 알게 됐습니다. 연애빙자 사기는 "빌린 것"과 "속인 것"의 경계가 모호해 증거 확보가 특히 중요합니다. 사기 입증에 필요한 증거와 고소 절차를 정리합니다.</p>',
    sections: [
      {
        title: '연애빙자 사기가 성립하는 요건',
        content:
          '<p><strong style="color:#1e3a5f">연인 사이의 금전 거래가 모두 사기는 아닙니다. 아래 요건이 충족되어야 사기죄가 성립합니다.</strong></p>\n<ul>\n<li><strong>기망 행위</strong> — 처음부터 갚을 의사나 능력 없이 거짓말로 돈을 빌린 것이어야 합니다. "사업 자금"이라고 했지만 실제로는 도박에 썼다면 기망입니다.</li>\n<li><strong>편취 의사</strong> — 돈을 빌릴 때 이미 갚을 의사가 없었음을 입증해야 합니다. 빌릴 당시의 재산 상태, 직업 유무, 다른 채무 상황이 핵심입니다.</li>\n<li><strong>처분 행위와 손해</strong> — 피해자가 기망에 속아 돈을 교부하고, 그로 인해 재산적 손해가 발생해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 연애빙자 사기의 핵심 쟁점은 "돈을 빌릴 당시 갚을 의사가 있었는가"입니다. 빌릴 당시의 경제 상황을 입증하는 것이 사기와 단순 채무를 가르는 기준입니다.</blockquote>',
      },
      {
        title: '연애빙자 사기 증거 수집 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 증거를 최대한 많이 확보하세요. 증거가 많을수록 기소 가능성이 높아집니다.</strong></p>\n<ol>\n<li><strong>금전 거래 내역</strong> — 은행 이체 기록, 현금 인출 기록. 현금 전달이면 장소·일시·목격자를 기록하세요.</li>\n<li><strong>대화 내역</strong> — 돈을 요구하는 대화, 용도를 설명하는 대화, 갚겠다는 약속 대화를 모두 캡처하세요.</li>\n<li><strong>허위 사실 입증 자료</strong> — 상대방이 주장한 직업·재산·사업이 거짓이었다는 증거. 사업자등록 조회, 재직 확인 등으로 확인합니다.</li>\n<li><strong>다른 피해자 진술</strong> — 같은 수법으로 다른 사람에게도 돈을 빌렸다면 상습 사기 입증에 결정적입니다.</li>\n<li><strong>상대방 재산 상태</strong> — 빌릴 당시 이미 다수의 채무가 있었거나, 소득이 없었다면 편취 의사 입증에 유리합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>연애빙자 사기 증거, AI가 수집 방법을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 경위를 입력하면 추가로 확보할 증거와 고소 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고소 절차와 유의사항',
        content:
          '<p><strong style="color:#1e3a5f">증거가 준비되면 고소장을 작성하여 경찰서에 제출하세요.</strong></p>\n<ul>\n<li><strong>고소장 작성</strong> — 피해 경위를 시간순으로 작성하고, 기망 행위(거짓말 내용)와 편취 의사(갚을 능력 부재)를 명확히 기재하세요.</li>\n<li><strong>증거 첨부</strong> — 이체 내역, 대화 캡처, 허위 사실 입증 자료를 고소장에 첨부합니다.</li>\n<li><strong>민사 병행</strong> — 형사 고소와 함께 대여금 반환 청구(민사소송)를 병행하세요. 가압류를 먼저 걸어두면 재산 도피를 방지할 수 있습니다.</li>\n<li><strong>고소 시효</strong> — 사기죄의 공소시효는 10년입니다. 다만 증거가 사라지기 전에 빨리 고소하는 것이 유리합니다.</li>\n</ul>',
      },
      {
        title: '사기와 단순 채무 불이행의 차이',
        content:
          '<p><strong style="color:#1e3a5f">경찰이 "민사 문제"라며 수사를 거부할 수 있습니다. 이때 대응법을 알아두세요.</strong></p>\n<ul>\n<li><strong>사기 vs 채무 불이행</strong> — 빌릴 당시 갚을 의사와 능력이 있었다면 단순 채무 불이행(민사), 없었다면 사기(형사)입니다.</li>\n<li><strong>편취 의사 간접 증거</strong> — 빌릴 당시 무직, 다중 채무, 다른 피해자 존재, 돈의 용도 허위 등이 편취 의사의 간접 증거입니다.</li>\n<li><strong>수사 미진 시 대응</strong> — 경찰이 "민사"로 종결하려 하면, 항고(검찰)를 통해 수사 지휘를 요청할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 연애빙자 사기의 편취 의사 판단',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 교제 상대에게 돈을 빌리면서 직업과 재산을 허위로 고지한 피고인에 대해, 빌릴 당시 다수의 채무가 있었고 소득이 없었다면 편취 의사가 인정된다고 판시했습니다.',
        takeaway:
          '상대방이 돈을 빌릴 당시의 경제 상태가 핵심입니다. 무직·다중 채무·허위 직업 등의 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '차용증이 없어도 사기로 고소할 수 있나요?',
        answer:
          '<p>차용증이 없어도 이체 내역, 대화 내역 등으로 금전 거래 사실을 입증하면 고소할 수 있습니다. 다만 차용증이 있으면 입증이 훨씬 수월합니다.</p>',
      },
      {
        question: '상대방이 일부를 갚았어도 사기인가요?',
        answer:
          '<p>일부 변제는 편취 의사를 부정하는 근거가 될 수 있지만, 나머지 금액에 대해 처음부터 갚을 의사가 없었다면 사기가 성립합니다. 전체 거래 맥락에서 판단합니다.</p>',
      },
      {
        question: '교제 중 준 선물도 돌려받을 수 있나요?',
        answer:
          '<p>자발적으로 준 선물은 증여에 해당하여 반환 청구가 어렵습니다. 다만 거짓말에 속아서 준 것이면 사기에 의한 증여로 취소할 수 있습니다.</p>',
      },
      {
        question: '연애빙자 사기 피해 금액이 얼마 이상이어야 고소할 수 있나요?',
        answer:
          '<p>금액 제한은 없습니다. 다만 피해 금액이 클수록 수사기관이 적극적으로 수사하는 경향이 있습니다. 소액이라도 상습성이 인정되면 중하게 처벌됩니다.</p>',
      },
    ],
    cta: { text: '연애빙자 사기 고소 가능성 AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 고소장 필수 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 합의와 양형', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '투자 사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '사기 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
    ],
  },
];
