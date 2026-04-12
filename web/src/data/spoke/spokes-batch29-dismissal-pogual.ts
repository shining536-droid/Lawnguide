import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 해고/권고사직 5개 + 포괄임금제 3개 (batch29)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch29DismissalPogual: SpokePage[] = [
  // ── 해고 1. 권고사직 서류 함정 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-recommended-resign-trap',
    keyword: '권고사직 서류 함정 주의',
    questionKeyword: '권고사직 서류에 서명하면 불이익이 있나요?',
    ctaKeyword: '권고사직 서류 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '권고사직 서류 함정 5가지 — 서명 전 확인사항 | 로앤가이드',
      description:
        '회사에서 권고사직 서류에 서명을 요구한다면, 서명 전에 반드시 확인할 함정 조항을 지금 확인하세요.',
    },
    intro:
      '<p>상사가 "원만하게 퇴사하자"며 서류에 서명을 요구합니다. 서류 내용을 잘 보니 "자발적 합의 퇴직"이라고 되어 있습니다. 이렇게 서명하면 실업급여도 못 받고, 부당해고 구제도 어려워집니다. 권고사직 서류에 서명하기 전 반드시 확인해야 할 사항을 정리합니다.</p>',
    sections: [
      {
        title: '권고사직 서류에서 주의할 5가지 함정',
        content:
          '<p><strong style="color:#1e3a5f">서류의 문구 하나가 실업급여와 부당해고 구제의 운명을 결정합니다.</strong></p>\n<ol>\n<li><strong>"자발적 퇴직에 동의합니다"</strong> — 이 문구가 있으면 자발적 이직으로 분류되어 실업급여 수급이 어려워집니다.</li>\n<li><strong>"일체의 이의를 제기하지 않는다"</strong> — 부당해고 구제신청, 임금 청구 등 모든 법적 권리를 포기하는 것으로 해석될 수 있습니다.</li>\n<li><strong>"합의금 수령으로 모든 채권·채무가 소멸된다"</strong> — 미지급 임금, 퇴직금 등의 청구권까지 포기하게 됩니다.</li>\n<li><strong>"비밀유지 의무"</strong> — 해고 사실을 외부에 알리지 못하게 하여 구제 절차를 사실상 차단합니다.</li>\n<li><strong>"경업금지 조항"</strong> — 퇴사 후 동종업계 취업을 제한하는 조항이 숨어있을 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 서류에 "권고사직" 또는 "회사 사정에 의한 이직"으로 명시되어야 실업급여 수급이 가능합니다.</blockquote>',
      },
      {
        title: '권고사직 vs 해고 vs 자발적 퇴사 차이',
        content:
          '<p><strong style="color:#1e3a5f">어떤 형태로 퇴사하느냐에 따라 실업급여·퇴직금·구제 가능성이 달라집니다.</strong></p>\n<ul>\n<li><strong>권고사직</strong> — 회사가 퇴사를 권유하고 근로자가 수락한 것. 비자발적 이직으로 실업급여 수급 가능.</li>\n<li><strong>해고</strong> — 회사가 일방적으로 근로관계를 종료. 부당해고면 구제신청 가능.</li>\n<li><strong>자발적 퇴사</strong> — 근로자 본인 의사로 퇴직. 원칙적으로 실업급여 수급 불가.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>권고사직 서류 검토, AI가 즉시 도와드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">서류 내용을 입력하면 함정 조항 여부와 대응 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '서명을 요구받았을 때 대처법',
        content:
          '<p><strong style="color:#1e3a5f">즉석에서 서명하지 마세요. 검토할 시간을 요청하세요.</strong></p>\n<ul>\n<li><strong>검토 시간 확보</strong> — "변호사(또는 노무사)에게 검토를 받겠다"고 말하고 서류 사본을 가져가세요.</li>\n<li><strong>녹음</strong> — 권고사직을 요구하는 대화를 녹음하세요. 나중에 비자발적 이직 증거가 됩니다.</li>\n<li><strong>이직확인서 확인</strong> — 서류에 서명하기 전, 이직확인서의 이직 사유가 "권고사직"으로 기재됨을 확인하세요.</li>\n<li><strong>위로금 협상</strong> — 서명이 불가피하면 위로금(통상 1~3개월분 급여)을 협상하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고된 근로자의 복직 임금 청구',
        summary:
          '대법원 2023다300559 사건(대법원, 2024.04.12 선고)에서 법원은 사용자가 부당하게 해고한 근로자를 원직이 아닌 업무에 복직시킨 경우, 원직에서 받았어야 할 임금 상당을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '권고사직에 서명하지 않고 해고되었다면 부당해고 구제를 통해 복직과 임금 보전을 받을 수 있습니다. 서명 전에 신중하게 판단하세요.',
      },
    ],
    faq: [
      {
        question: '이미 권고사직 서류에 서명했는데 취소할 수 있나요?',
        answer:
          '<p>서명 후에도 강압, 착오, 사기에 의한 것이면 취소가 가능할 수 있습니다. 즉시 노동전문 변호사나 노무사와 상담하세요.</p>',
      },
      {
        question: '권고사직에 동의하면 퇴직금에 영향이 있나요?',
        answer:
          '<p>권고사직은 퇴직금 지급에 영향을 주지 않습니다. 1년 이상 근무했으면 퇴직금은 별도로 지급받습니다.</p>',
      },
      {
        question: '회사가 "서명 안 하면 해고하겠다"고 합니다.',
        answer:
          '<p>이 발언을 녹음하세요. 해고가 되면 부당해고 구제신청이 가능하고, 강압에 의한 권고사직 동의는 효력이 없습니다.</p>',
      },
      {
        question: '권고사직 합의금은 얼마가 적정한가요?',
        answer:
          '<p>법적 기준은 없지만 통상 1~3개월분 급여가 일반적입니다. 근속연수가 길거나 부당해고 소지가 크면 더 많이 협상할 수 있습니다.</p>',
      },
    ],
    cta: { text: '권고사직 서류 검토 AI로 즉시 시작하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '권고사직 체크리스트', href: '/guide/dismissal/dismissal-recommended-resignation-check' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
    ],
  },

  // ── 해고 2. 육아휴직 복귀 후 부당해고 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-parental-leave-fired',
    keyword: '육아휴직 복귀 후 해고',
    questionKeyword: '육아휴직 복귀 후 해고를 당했는데 부당해고인가요?',
    ctaKeyword: '육아휴직 복귀 해고 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '육아휴직 복귀 후 해고 — 부당해고 판단 기준 3가지 | 로앤가이드',
      description:
        '육아휴직에서 복귀했는데 해고나 불이익 배치를 받았다면, 부당해고 구제 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>1년간 육아휴직을 마치고 복귀했더니 다른 부서로 보내면서 "적응이 안 되면 퇴사하라"는 말을 들었습니다. 결국 한 달 만에 해고 통보를 받았습니다. 남녀고용평등법은 육아휴직 복귀 후 불이익한 처우를 명확히 금지하고 있습니다.</p>',
    sections: [
      {
        title: '육아휴직 복귀 후 해고가 위법인 이유',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제19조 제3항은 육아휴직 복귀 후 불이익 처우를 금지합니다.</strong></p>\n<ul>\n<li><strong>원직 복귀 원칙</strong> — 사업주는 육아휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무에 복귀시켜야 합니다.</li>\n<li><strong>불이익 처우 금지</strong> — 육아휴직을 이유로 해고, 강등, 임금 삭감 등 불이익을 줄 수 없습니다.</li>\n<li><strong>위반 시 제재</strong> — 위반 시 3년 이하 징역 또는 3,000만원 이하 벌금의 형사처벌이 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 육아휴직 복귀 후 해고는 그 자체로 위법이 될 가능성이 매우 높습니다. 부당해고 구제신청을 적극 검토하세요.</blockquote>',
      },
      {
        title: '부당해고 구제신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고일로부터 3개월 이내에 노동위원회에 구제신청을 하세요.</strong></p>\n<ol>\n<li><strong>증거 수집</strong> — 육아휴직 신청서, 복귀 통보서, 해고 통보서, 부서 이동 지시서, 관련 대화 녹음 등을 확보합니다.</li>\n<li><strong>구제신청서 작성</strong> — 지방노동위원회에 부당해고 구제신청서를 제출합니다.</li>\n<li><strong>심문 참석</strong> — 노동위원회에서 양측 심문을 실시합니다.</li>\n<li><strong>판정</strong> — 구제 인용 시 원직 복직과 해고 기간 동안의 임금을 지급받습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>육아휴직 복귀 후 해고 — 부당해고 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 사유와 경위를 입력하면 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '병행할 수 있는 구제 수단',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제와 함께 여러 구제 수단을 동시에 활용하세요.</strong></p>\n<ul>\n<li><strong>고용노동부 진정</strong> — 남녀고용평등법 위반으로 신고하면 형사처벌이 가능합니다.</li>\n<li><strong>실업급여 신청</strong> — 부당해고 구제 중에도 실업급여를 받을 수 있습니다.</li>\n<li><strong>손해배상 청구</strong> — 정신적 피해에 대한 위자료 청구도 가능합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령의 부당성 판단',
        summary:
          '대법원 2024두40493 사건(대법원, 2024.09.13 선고)에서 법원은 대기발령이 취업규칙에 따른 불이익(승진·승급 제한 등)을 수반하는 경우, 그 정당성을 엄격히 심사해야 한다고 판시했습니다.',
        takeaway:
          '육아휴직 복귀 후 대기발령이나 다른 부서 배치도 불이익 처우에 해당할 수 있습니다. 복귀 후 달라진 근로조건을 꼼꼼히 기록하세요.',
      },
    ],
    faq: [
      {
        question: '복귀 후 다른 부서로 배치된 것도 부당한가요?',
        answer:
          '<p>원직 또는 같은 수준의 직무에 복귀시켜야 합니다. 명백히 불이익한 부서 배치(임금 감소, 승진 불이익 등)는 위법입니다.</p>',
      },
      {
        question: '육아휴직 중에도 해고할 수 있나요?',
        answer:
          '<p>남녀고용평등법 제19조 제3항에 따라 육아휴직 기간 중에는 해고할 수 없습니다. 휴직 중 해고는 당연무효입니다.</p>',
      },
      {
        question: '육아휴직 복귀 후 권고사직을 받았습니다.',
        answer:
          '<p>권고사직도 육아휴직을 이유로 한 것이면 불이익 처우에 해당합니다. 서명하지 마시고, 부당해고에 준하여 대응하세요.</p>',
      },
      {
        question: '5인 미만 사업장에서도 육아휴직 복귀 보호가 적용되나요?',
        answer:
          '<p>남녀고용평등법의 육아휴직 규정은 사업장 규모에 관계없이 적용됩니다. 다만 부당해고 구제신청은 5인 이상 사업장에서만 가능합니다.</p>',
      },
    ],
    cta: { text: '육아휴직 복귀 후 해고 구제 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '임산부 해고 보호', href: '/guide/dismissal/dismissal-pregnancy-protection' },
      { label: '출산휴가 복귀 해고', href: '/guide/dismissal/dismissal-maternity-return-fired' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '권고사직 체크', href: '/guide/dismissal/dismissal-recommended-resignation-check' },
    ],
  },

  // ── 해고 3. 기간제 갱신기대권 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-renewal-right',
    keyword: '기간제 갱신기대권 인정 기준',
    questionKeyword: '기간제 계약이 갱신 안 되면 부당해고인가요?',
    ctaKeyword: '갱신기대권 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '기간제 갱신기대권 인정 기준 5가지 총정리 | 로앤가이드',
      description:
        '기간제 계약 갱신이 거절당했다면, 갱신기대권이 인정되어 부당해고로 다툴 수 있는지 지금 확인하세요.',
    },
    intro:
      '<p>3년간 매년 계약을 갱신하며 일했는데 올해는 갱신이 안 된다고 합니다. 동료들은 다 갱신되었는데 저만 빠졌습니다. 이런 경우 갱신기대권이 인정되면 갱신 거절이 부당해고에 해당할 수 있습니다.</p>',
    sections: [
      {
        title: '갱신기대권이란',
        content:
          '<p><strong style="color:#1e3a5f">근로자에게 계약 갱신에 대한 합리적 기대가 있으면, 갱신 거절은 해고와 같습니다.</strong></p>\n<p>대법원 판례에 따르면 기간제 근로계약이 반복 갱신되어 근로자에게 갱신에 대한 정당한 기대가 형성된 경우, 사업주가 합리적 이유 없이 갱신을 거절하면 부당해고에 해당합니다.</p>\n<ul>\n<li><strong>갱신 횟수</strong> — 2회 이상 갱신된 경우 기대권이 인정될 가능성이 높습니다.</li>\n<li><strong>업무의 계속성</strong> — 담당 업무가 계속 존재하고 있다면 갱신 기대가 합리적입니다.</li>\n<li><strong>사업주 언행</strong> — "계속 일할 수 있다"는 사업주의 발언이 있었다면 증거가 됩니다.</li>\n<li><strong>동종 근로자 갱신 여부</strong> — 같은 조건의 다른 기간제 근로자가 갱신된 경우.</li>\n<li><strong>갱신 절차의 형식성</strong> — 갱신이 형식적 절차에 불과했다면 기대권이 인정됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 반복 갱신 + 업무 계속성 + 사업주 언행, 3가지가 결합되면 갱신기대권이 인정될 가능성이 높습니다.</blockquote>',
      },
      {
        title: '갱신기대권 침해 시 구제 방법',
        content:
          '<p><strong style="color:#1e3a5f">갱신 거절일로부터 3개월 이내에 부당해고 구제신청을 하세요.</strong></p>\n<ol>\n<li><strong>증거 확보</strong> — 갱신 이력, 사업주 발언 녹음, 동종 근로자 갱신 사실, 업무 계속 존재 증명 등.</li>\n<li><strong>노동위원회 구제신청</strong> — 부당해고 구제신청서를 작성하여 제출합니다.</li>\n<li><strong>실업급여 신청</strong> — 계약 만료는 비자발적 이직이므로 실업급여도 동시에 신청하세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>갱신기대권 인정 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">갱신 횟수, 업무 내용, 사업주 언행을 입력하면 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '2년 초과 사용 시 무기계약 전환',
        content:
          '<p><strong style="color:#1e3a5f">기간제법 제4조에 따라 2년 초과 사용 시 무기계약 근로자로 간주됩니다.</strong></p>\n<ul>\n<li><strong>자동 전환</strong> — 2년을 초과하여 기간제 근로자를 사용하면 법률상 무기계약 근로자로 봅니다.</li>\n<li><strong>계약서 불필요</strong> — 무기계약 전환은 법률 효과이므로 별도 계약서 없이도 인정됩니다.</li>\n<li><strong>해고 요건 강화</strong> — 무기계약 근로자에게는 정당한 이유 없이 해고할 수 없습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기간제 근로자의 정년 도달과 재고용',
        summary:
          '대법원 2018두62492 사건에서 법원은 정년에 도달한 근로자가 기간제 근로자로 재고용되어 계속 근무한 경우의 갱신기대권에 대해 판단했습니다.',
        takeaway:
          '정년 후 재고용된 기간제 근로자도 반복 갱신 시 갱신기대권이 인정될 수 있습니다. 갱신 횟수와 업무 계속성을 증거로 확보하세요.',
      },
    ],
    faq: [
      {
        question: '1회만 갱신되었어도 갱신기대권이 인정되나요?',
        answer:
          '<p>1회 갱신만으로도 사업주의 언행, 업무의 계속성 등 다른 요소와 결합하면 인정될 수 있습니다. 다만 2회 이상 갱신된 경우보다 입증이 어렵습니다.</p>',
      },
      {
        question: '계약서에 "갱신은 보장하지 않는다"고 적혀 있으면요?',
        answer:
          '<p>계약서 문구만으로 갱신기대권이 부정되지 않습니다. 실질적인 갱신 관행과 사업주의 언행이 더 중요합니다.</p>',
      },
      {
        question: '갱신기대권이 인정되면 정규직이 되나요?',
        answer:
          '<p>갱신기대권이 인정되면 갱신 거절이 무효가 되어 기간제 계약이 갱신됩니다. 2년 초과 시에는 무기계약으로 전환됩니다.</p>',
      },
      {
        question: '부당해고 구제 기간(3개월) 동안 실업급여도 받나요?',
        answer:
          '<p>네, 부당해고 구제신청 중에도 실업급여를 받을 수 있습니다. 구제가 인정되어 복직하면 그동안 받은 실업급여는 반환해야 합니다.</p>',
      },
    ],
    cta: { text: '갱신기대권 인정 가능성 AI로 즉시 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '기간제 2년 전환', href: '/guide/dismissal/dismissal-fixed-term-2year-conversion' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '계약만료 실업급여', href: '/guide/unemployment/unemployment-contract-end-no-renewal' },
      { label: '해고사유서 요청', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 증거', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
    ],
  },

  // ── 해고 4. 부당해고 증거 수집 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-unfair-evidence-collection',
    keyword: '부당해고 증거 수집 방법',
    questionKeyword: '부당해고를 당했는데 어떤 증거를 모아야 하나요?',
    ctaKeyword: '부당해고 증거 수집 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '부당해고 증거 수집 체크리스트 7가지 | 로앤가이드',
      description:
        '부당해고를 당했다면, 구제신청에 필요한 증거 7가지를 놓치지 말고 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 해고 통보를 받았습니다. 부당해고라고 생각하는데, 어떤 증거를 모아야 구제신청에서 이길 수 있을지 모르겠습니다. 해고 후 시간이 지나면 증거 확보가 어려워지므로 즉시 행동해야 합니다.</p>',
    timelineSteps: [
      '즉시: 해고 통보 증거 확보',
      '1주 이내: 서류 수집·동료 진술 확보',
      '2주 이내: 해고사유서 요청',
      '3개월 이내: 구제신청서 제출',
    ],
    sections: [
      {
        title: '부당해고 증거 체크리스트 7가지',
        content:
          '<p><strong style="color:#1e3a5f">해고 직후 즉시 확보해야 할 증거입니다.</strong></p>\n<ol>\n<li><strong>해고 통보 증거</strong> — 해고 통보 문자, 이메일, 구두 해고 시 녹음. 해고 사실 자체를 증명합니다.</li>\n<li><strong>해고사유서</strong> — 근로기준법 제27조에 따라 서면으로 해고 사유와 해고 시기를 통보해야 합니다. 서면 미통보 시 그것만으로도 부당해고입니다.</li>\n<li><strong>근로계약서</strong> — 근로조건, 업무 범위, 계약 기간 등을 확인합니다.</li>\n<li><strong>인사평가 기록</strong> — 성과 평가, 근무 평가 기록이 있으면 해고 사유의 정당성을 다툴 수 있습니다.</li>\n<li><strong>동료 진술서</strong> — 해고 과정을 목격한 동료의 진술서를 확보합니다.</li>\n<li><strong>급여명세서</strong> — 해고 전 임금 수준과 근무 기간을 증명합니다.</li>\n<li><strong>업무 실적 자료</strong> — 성과 부진을 이유로 해고한 경우, 실제 업무 실적을 증명할 자료입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 해고 통보 직후 24시간 이내에 최대한 많은 증거를 확보하세요. 시간이 지나면 회사가 자료를 삭제하거나 접근을 차단할 수 있습니다.</blockquote>',
      },
      {
        title: '서면 해고 미통보 시 자동 부당해고',
        content:
          '<p><strong style="color:#1e3a5f">해고사유서를 서면으로 교부하지 않으면 절차적 부당해고입니다.</strong></p>\n<p>근로기준법 제27조에 따라 사용자는 해고 사유와 해고 시기를 서면으로 통지해야 합니다. 구두 해고는 해고 사유가 정당하더라도 절차상 위법하여 부당해고로 인정됩니다.</p>\n<ul>\n<li><strong>해고사유서 요청</strong> — 해고 통보를 받으면 즉시 서면 해고사유서를 요청하세요.</li>\n<li><strong>미교부 시</strong> — 서면 미교부 사실 자체가 부당해고의 증거가 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>부당해고 구제 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 경위와 보유 증거를 입력하면 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 수집 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 최대한 확보하고, 원본을 보관하세요.</strong></p>\n<ul>\n<li><strong>녹음의 적법성</strong> — 대화 당사자가 녹음하는 것은 합법입니다. 제3자의 대화를 몰래 녹음하는 것은 위법입니다.</li>\n<li><strong>회사 자료 반출</strong> — 자신의 인사 관련 자료는 복사할 수 있지만, 영업비밀은 반출하지 마세요.</li>\n<li><strong>디지털 증거 보전</strong> — 이메일, 메신저 캡처 시 날짜·시간·발신자가 보이도록 스크린샷을 저장하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국기업 국내 법인 근로자의 해고 보호',
        summary:
          '대법원 2023두37391 사건(대법원, 2024.10.25 선고)에서 법원은 외국기업이 국내에서 법인을 설립하여 사업활동을 영위하는 경우에도 근로기준법이 전면적으로 적용된다고 판시했습니다.',
        takeaway:
          '외국계 기업에서 해고되었더라도 국내 사업장에 근무했다면 근로기준법이 적용됩니다. 부당해고 구제신청이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '녹음 증거는 노동위원회에서 인정되나요?',
        answer:
          '<p>대화 당사자가 직접 녹음한 것은 적법한 증거로 인정됩니다. 노동위원회에서도 녹음 파일을 증거로 제출할 수 있습니다.</p>',
      },
      {
        question: '해고 통보가 구두로만 이루어졌습니다.',
        answer:
          '<p>구두 해고는 서면 미통보로 그 자체가 절차적 부당해고입니다. 구두 해고 사실을 증명할 수 있는 녹음, 동료 증언 등을 확보하세요.</p>',
      },
      {
        question: '회사가 CCTV를 삭제하면 어떡하나요?',
        answer:
          '<p>노동위원회에 증거보전 신청을 할 수 있습니다. 또한 회사가 증거를 고의로 삭제하면 해당 사실이 회사에 불리하게 작용합니다.</p>',
      },
      {
        question: '해고 후 3개월이 지나면 구제신청이 불가능한가요?',
        answer:
          '<p>부당해고 구제신청은 해고일로부터 3개월 이내에 해야 합니다. 이 기한을 넘기면 구제신청은 불가능하지만, 민사소송은 가능합니다.</p>',
      },
    ],
    cta: { text: '부당해고 증거 체크리스트 AI로 즉시 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고사유서 요청', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '구두 해고 대응', href: '/guide/dismissal/dismissal-verbal-only-no-document' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
    ],
  },

  // ── 해고 5. 즉시해고 인정 조건 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-immediate-fire-conditions',
    keyword: '즉시해고 인정 조건',
    questionKeyword: '회사가 예고 없이 즉시 해고할 수 있나요?',
    ctaKeyword: '즉시해고 조건 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '즉시해고가 인정되는 조건 5가지 — 해고예고 면제 | 로앤가이드',
      description:
        '예고 없이 해고를 당했다면, 해고예고 면제가 정당한지 아닌지를 지금 확인하세요.',
    },
    intro:
      '<p>출근했더니 "오늘부로 해고"라며 짐을 싸서 나가라고 합니다. 30일 전에 통보하거나 해고예고수당을 줘야 하는 것 아닌가요? 근로기준법 제26조에 따라 해고 30일 전 예고가 원칙이지만, 예외적으로 즉시해고가 인정되는 경우가 있습니다.</p>',
    sections: [
      {
        title: '해고예고 원칙과 예외',
        content:
          '<p><strong style="color:#1e3a5f">원칙: 해고 30일 전 예고 또는 30일분 해고예고수당 지급</strong></p>\n<p>근로기준법 제26조에 따라 사용자는 해고하려면 30일 전에 예고하거나, 30일분 이상의 통상임금을 해고예고수당으로 지급해야 합니다.</p>\n<ul>\n<li><strong>예고 없는 해고</strong> — 30일 전 예고도, 예고수당 지급도 없는 즉시해고는 위법입니다.</li>\n<li><strong>해고예고수당</strong> — 30일분 통상임금을 지급하면 즉시 해고가 가능합니다.</li>\n</ul>',
      },
      {
        title: '해고예고가 면제되는 5가지 경우',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제26조 단서에 따라 다음 경우 해고예고가 면제됩니다.</strong></p>\n<ol>\n<li><strong>일용근로자(3개월 미만 계속 근무)</strong></li>\n<li><strong>2개월 이내 기간 정한 근로자</strong></li>\n<li><strong>월급제가 아닌 근로자(6개월 미만 근무)</strong></li>\n<li><strong>수습 기간 3개월 이내</strong></li>\n<li><strong>근로자 귀책사유로 노동위원회 인정을 받은 경우</strong> — 횡령, 폭행 등 중대한 귀책사유가 인정된 경우</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 5번 사유(근로자 귀책)는 노동위원회의 사전 인정이 필요합니다. 사업주가 임의로 판단하여 즉시해고하면 위법합니다.</blockquote>',
      },
      {
        title: '즉시해고를 당했을 때 대처법',
        content:
          '<p><strong style="color:#1e3a5f">해고예고수당과 부당해고 구제를 동시에 청구하세요.</strong></p>\n<ul>\n<li><strong>해고예고수당 청구</strong> — 해고예고 면제 사유에 해당하지 않으면 30일분 통상임금을 청구합니다.</li>\n<li><strong>부당해고 구제</strong> — 해고 사유 자체가 부당하면 노동위원회에 구제신청합니다.</li>\n<li><strong>실업급여 신청</strong> — 비자발적 이직이므로 실업급여를 동시에 신청하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>즉시해고의 정당성 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 경위를 입력하면 해고예고수당 청구 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 후 원직 복귀 임금 청구',
        summary:
          '대법원 2023다300559 사건(대법원, 2024.04.12 선고)에서 법원은 부당해고된 근로자를 원직이 아닌 업무에 복직시킨 경우, 원직에서 받았어야 할 임금 상당을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '즉시해고가 부당하면 구제를 통해 복직과 함께 해고 기간의 임금 전액을 보전받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '수습 3개월인데 즉시 해고되었습니다. 적법한가요?',
        answer:
          '<p>수습 3개월 이내에는 해고예고 의무가 면제됩니다. 다만 해고 사유가 정당해야 하며, 부당하면 부당해고 구제가 가능합니다.</p>',
      },
      {
        question: '해고예고수당은 얼마인가요?',
        answer:
          '<p>30일분의 통상임금입니다. 통상임금은 기본급 + 정기적·일률적·고정적으로 지급되는 수당을 포함합니다.</p>',
      },
      {
        question: '횡령을 이유로 즉시해고당했는데 억울합니다.',
        answer:
          '<p>횡령 혐의를 이유로 한 즉시해고도 노동위원회의 사전 인정이 필요합니다. 사전 인정 없이 즉시해고하면 절차적으로 부당합니다.</p>',
      },
      {
        question: '해고예고수당과 퇴직금은 별개인가요?',
        answer:
          '<p>네, 해고예고수당은 해고 예고를 하지 않은 것에 대한 보상이고, 퇴직금은 1년 이상 근무에 대한 법적 권리입니다. 둘 다 받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '즉시해고 정당성 여부 AI로 즉시 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 구제', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '해고사유서 요청', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '수습해고 대응', href: '/guide/dismissal/dismissal-probation-unfair-cases' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },

  // ── 포괄임금 1. 경비원 포괄임금 무효 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-security-guard',
    keyword: '경비원 포괄임금 무효',
    questionKeyword: '경비원인데 포괄임금이 적용되어 야간수당을 못 받고 있습니다.',
    ctaKeyword: '경비원 포괄임금 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '경비원 포괄임금 무효 판단 기준 — 야간수당 청구 | 로앤가이드',
      description:
        '경비원으로 야간근무를 하는데 야간수당이 없다면, 포괄임금 무효 여부와 수당 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>아파트 경비원으로 24시간 격일 근무를 합니다. 야간에도 근무하는데 야간수당이 별도로 없고, 회사는 "월급에 다 포함되어 있다"고 합니다. 경비원의 포괄임금 약정은 근로시간 산정이 어려운 경우에만 유효하며, 교대근무처럼 근로시간이 명확한 경우에는 무효입니다.</p>',
    sections: [
      {
        title: '경비원 포괄임금이 무효인 이유',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 근로시간 산정이 가능한 경우 포괄임금 약정을 원칙적으로 무효로 봅니다.</strong></p>\n<p>경비원의 근무시간은 교대표에 따라 명확히 산정됩니다. 24시간 격일근무, 12시간 교대 등 근무시간이 정해져 있으므로 포괄임금 약정의 전제인 "근로시간 산정이 어려운 경우"에 해당하지 않습니다.</p>\n<ul>\n<li><strong>야간근로수당</strong> — 22시~06시 근무에 대해 통상임금의 50%를 가산해야 합니다.</li>\n<li><strong>연장근로수당</strong> — 1주 40시간을 초과하는 근무에 대해 통상임금의 50%를 가산해야 합니다.</li>\n<li><strong>휴일근로수당</strong> — 주휴일·공휴일 근무 시 가산수당을 지급해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 경비원의 근무시간은 교대표로 명확히 산정됩니다. 포괄임금이라는 이유로 야간수당을 안 주는 것은 위법입니다.</blockquote>',
      },
      {
        title: '미지급 수당 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">3년 이내의 미지급 야간수당을 소급 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>수당 계산</strong> — 야간근로시간 × 통상시급 × 0.5(가산)로 계산합니다.</li>\n<li><strong>소급 기간</strong> — 임금 소멸시효 3년 이내의 수당을 모두 청구 가능합니다.</li>\n<li><strong>청구 절차</strong> — 사업주에게 지급 요청 → 미지급 시 고용노동부 진정 → 소송</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>경비원 미지급 야간수당, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무형태와 월급을 입력하면 미지급 수당 총액을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '감시·단속적 근로 승인과 포괄임금의 관계',
        content:
          '<p><strong style="color:#1e3a5f">감시·단속적 근로 승인을 받은 경우라도 야간수당은 지급해야 합니다.</strong></p>\n<ul>\n<li><strong>감시단속적 근로</strong> — 고용노동부 승인을 받으면 연장·휴일근로수당은 면제되지만, 야간근로수당은 면제되지 않습니다.</li>\n<li><strong>승인 없는 경우</strong> — 승인 없이 근로기준법 적용을 배제하면 위법합니다.</li>\n<li><strong>최저임금</strong> — 감시단속적 근로 승인 시 최저임금의 90%가 적용됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자성 판단과 임금 청구',
        summary:
          '대법원 2020다237117 사건(대법원, 2022.06.30 선고)에서 법원은 사고출동서비스 대행계약을 체결하고 일한 경우에도 실질적 사용종속관계가 인정되면 근로기준법상 근로자로 보아야 한다고 판시했습니다.',
        takeaway:
          '용역업체 소속 경비원도 실질적 근로관계가 인정되면 야간·연장수당을 청구할 수 있습니다. 고용 형태에 관계없이 근로자성이 인정되면 보호받습니다.',
      },
    ],
    faq: [
      {
        question: '24시간 격일근무인데 야간수당을 얼마나 받아야 하나요?',
        answer:
          '<p>22시~06시까지 8시간이 야간근로시간입니다. 통상시급의 50%를 가산해야 하므로, 야간 8시간 × 통상시급 × 1.5를 받아야 합니다.</p>',
      },
      {
        question: '감시단속적 근로 승인을 받았으면 포괄임금이 유효한가요?',
        answer:
          '<p>감시단속적 근로 승인이 있어도 야간근로수당은 별도로 지급해야 합니다. 포괄임금에 야간수당이 적정히 포함되어 있는지 확인하세요.</p>',
      },
      {
        question: '동료들과 함께 집단으로 청구할 수 있나요?',
        answer:
          '<p>네, 같은 사업장의 경비원들이 공동으로 진정을 제기하면 효과적입니다. 근로감독관이 사업장 전체를 조사하게 됩니다.</p>',
      },
      {
        question: '퇴직 후에도 미지급 야간수당을 청구할 수 있나요?',
        answer:
          '<p>네, 퇴직일로부터 3년 이내의 미지급 수당을 모두 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '경비원 포괄임금 무효·수당 청구 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 초과수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '포괄임금 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '야간수당 미지급 청구', href: '/guide/wage/wage-night-shift-premium-claim' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '5인 미만 사업장 권리', href: '/guide/wage/wage-under5-employees-rights' },
    ],
  },

  // ── 포괄임금 2. 학원강사 포괄임금 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-academy-teacher',
    keyword: '학원강사 포괄임금 무효',
    questionKeyword: '학원강사인데 야간수업 수당을 못 받고 있습니다.',
    ctaKeyword: '학원강사 포괄임금 상담',
    type: '비교분석형',
    perspective: 'victim',
    meta: {
      title: '학원강사 포괄임금 무효 — 연장·야간수당 청구 방법 | 로앤가이드',
      description:
        '학원에서 야간 수업을 하는데 수당이 없다면, 포괄임금 무효 여부와 수당 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>학원에서 오후 2시부터 밤 10시까지 수업합니다. 8시간이 넘는 날도 있고, 10시 이후 보충수업도 있습니다. 학원은 "강사료에 다 포함"이라고 하는데, 연장·야간수당을 별도로 받지 못하고 있습니다.</p>',
    sections: [
      {
        title: '학원강사 포괄임금이 무효인 경우',
        content:
          '<p><strong style="color:#1e3a5f">수업 시간표에 따라 근로시간이 명확하면 포괄임금이 무효입니다.</strong></p>\n<p>학원강사의 근무시간은 수업 시간표로 명확히 산정됩니다. 수업 시간 + 수업 준비 시간이 근로시간이므로 "근로시간 산정이 어렵다"는 포괄임금 전제에 해당하지 않습니다.</p>\n<ul>\n<li><strong>연장근로</strong> — 1일 8시간, 1주 40시간을 초과하는 수업·업무는 연장근로수당 대상입니다.</li>\n<li><strong>야간근로</strong> — 22시~06시 수업은 야간근로수당(50% 가산) 대상입니다.</li>\n<li><strong>수업 외 업무</strong> — 학부모 상담, 시험 출제, 채점 등도 근로시간에 포함됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 시간표에 따라 일하는 학원강사의 포괄임금은 근로시간 산정이 가능하므로 무효입니다.</blockquote>',
      },
      {
        title: '학원강사의 근로자성 판단',
        content:
          '<p><strong style="color:#1e3a5f">프리랜서 계약이라도 실질적 사용종속관계가 있으면 근로자입니다.</strong></p>\n<ul>\n<li><strong>근로자 판단 기준</strong> — 출퇴근 시간 지정, 수업 내용 지시, 학원 규칙 적용, 대체 불가 등이면 근로자입니다.</li>\n<li><strong>위탁계약 형식</strong> — 계약서가 "위탁" 또는 "프리랜서"라도 실질이 근로자면 근로기준법이 적용됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>학원강사 미지급 수당, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">수업 시간표와 급여를 입력하면 미지급 수당을 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수당 청구 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">근로시간 증빙이 핵심입니다.</strong></p>\n<ul>\n<li><strong>수업 시간표 보관</strong> — 시간표는 근로시간 증거의 핵심입니다.</li>\n<li><strong>출퇴근 기록</strong> — 학원 CCTV, 전자출퇴근 기록을 확보하세요.</li>\n<li><strong>수업 외 업무 기록</strong> — 상담, 채점 등 수업 외 업무 시간도 기록하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사고출동서비스 대행자의 근로자성',
        summary:
          '대법원 2020다237117 사건(대법원, 2022.06.30 선고)에서 법원은 실질적 사용종속관계가 인정되면 계약 형식에 관계없이 근로기준법상 근로자로 보아야 한다고 판시했습니다.',
        takeaway:
          '학원강사가 프리랜서 계약으로 일하더라도, 출퇴근 관리, 수업 지시 등 실질적 사용종속관계가 있으면 근로자로 인정받아 수당을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '프리랜서 계약서를 썼는데도 근로자로 인정되나요?',
        answer:
          '<p>계약서 형식이 아닌 실질적 근무 형태로 판단합니다. 시간·장소 지정, 업무 지시, 취업규칙 적용 등이 있으면 근로자로 인정됩니다.</p>',
      },
      {
        question: '보충수업 시간도 근로시간에 포함되나요?',
        answer:
          '<p>학원의 지시에 따른 보충수업은 근로시간에 포함됩니다. 자발적으로 한 것이 아닌 학원의 지시·승인이 있었는지가 기준입니다.</p>',
      },
      {
        question: '학원이 5인 미만이면 야근수당을 못 받나요?',
        answer:
          '<p>5인 미만 사업장은 연장·야간·휴일 가산수당 지급 의무가 면제됩니다. 다만 기본 근로시간에 대한 임금과 최저임금은 적용됩니다.</p>',
      },
      {
        question: '3년 전 미지급 수당도 청구 가능한가요?',
        answer:
          '<p>네, 임금 소멸시효 3년 이내의 미지급 수당을 모두 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '학원강사 포괄임금 무효 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 초과수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '포괄임금 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '프리랜서 근로자성', href: '/guide/wage/wage-freelancer-worker-status-claim' },
      { label: '임금체불 신고', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '야간수당 미지급', href: '/guide/wage/wage-night-shift-premium-claim' },
    ],
  },

  // ── 포괄임금 3. 포괄임금 소송 절차 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-lawsuit-procedure',
    keyword: '포괄임금 소송 절차',
    questionKeyword: '포괄임금 무효 소송은 어떻게 진행하나요?',
    ctaKeyword: '포괄임금 소송 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 무효 소송 절차 5단계 완벽 가이드 | 로앤가이드',
      description:
        '포괄임금이 무효라면, 미지급 수당을 받기 위한 소송 절차와 비용을 지금 확인하세요.',
    },
    intro:
      '<p>포괄임금이 무효라는 것을 알게 되었습니다. 회사에 수당 지급을 요청했지만 거부당했습니다. 소송을 하면 얼마나 걸리고 비용은 얼마인지, 이길 수 있는지 걱정됩니다. 포괄임금 무효 소송의 전체 절차를 정리합니다.</p>',
    timelineSteps: [
      '1단계: 증거 수집·미지급 수당 계산',
      '2단계: 내용증명·노동부 진정',
      '3단계: 소송 제기(소액사건/민사)',
      '4단계: 재판 진행',
      '5단계: 판결·강제집행',
    ],
    sections: [
      {
        title: '소송 전 단계: 증거 수집과 노동부 진정',
        content:
          '<p><strong style="color:#1e3a5f">소송 전에 노동부 진정을 먼저 제기하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>증거 수집</strong> — 근로계약서, 급여명세서, 출퇴근 기록, 업무 지시 기록 등을 확보합니다.</li>\n<li><strong>수당 계산</strong> — 연장·야간·휴일근로 시간을 산정하고 미지급 수당을 계산합니다.</li>\n<li><strong>노동부 진정</strong> — 고용노동부에 임금체불 진정을 제기하면 근로감독관이 조사합니다. 이 단계에서 해결되는 경우가 많습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 노동부 진정으로 해결되면 소송 없이 수당을 받을 수 있습니다. 진정 결과에 불복하면 소송으로 넘어갑니다.</blockquote>',
      },
      {
        title: '소송 절차와 비용',
        content:
          '<p><strong style="color:#1e3a5f">미지급 수당이 3,000만원 이하면 소액사건심판으로 빠르게 진행됩니다.</strong></p>\n<ul>\n<li><strong>소액사건심판</strong> — 청구액 3,000만원 이하. 인지대 저렴, 1~2회 기일로 판결. 변호사 없이도 가능합니다.</li>\n<li><strong>일반 민사소송</strong> — 청구액 3,000만원 초과. 수개월~1년 정도 소요됩니다.</li>\n<li><strong>인지대</strong> — 소액사건 기준 약 5,000원~5만원 수준입니다.</li>\n<li><strong>변호사 비용</strong> — 소액사건은 본인 소송이 가능하나, 복잡한 경우 노무사나 변호사 대리를 권장합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>포괄임금 미지급 수당과 소송 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무 형태와 급여를 입력하면 미지급 수당과 절차를 무료로 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '승소 가능성을 높이는 전략',
        content:
          '<p><strong style="color:#1e3a5f">근로시간이 명확히 산정된다는 점을 입증하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록 제출</strong> — 근로시간 산정이 가능하다는 것을 증명합니다.</li>\n<li><strong>포괄임금 약정의 부당성</strong> — 근로계약서에 초과근무시간이 특정되지 않았거나, 실제 초과근무와 포괄임금이 현저히 불균형한 경우.</li>\n<li><strong>유사 판례 인용</strong> — 같은 업종의 포괄임금 무효 판례를 인용합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 택시운전자 임금 미달액 소송',
        summary:
          '대법원 2023다223744 사건(대법원, 2024.07.25 선고)에서 법원은 최저임금 미달액 지급을 청구한 택시운전근로자들의 소송에서, 소정근로일 기준으로 임금을 산정해야 한다고 판시했습니다.',
        takeaway:
          '포괄임금 무효 소송에서 승소하면 미지급 수당 + 지연이자(연 20%)를 받을 수 있습니다. 증거가 충분하면 승소 가능성이 높습니다.',
      },
    ],
    faq: [
      {
        question: '소송을 하면 회사와 관계가 나빠지지 않나요?',
        answer:
          '<p>대부분 퇴직 후 소송을 진행합니다. 재직 중이면 노동부 진정으로 먼저 시도하는 것이 관계 부담이 적습니다.</p>',
      },
      {
        question: '변호사 없이 혼자 소송할 수 있나요?',
        answer:
          '<p>소액사건(3,000만원 이하)은 변호사 없이 본인이 직접 진행할 수 있습니다. 대한법률구조공단에서 무료 법률상담도 받을 수 있습니다.</p>',
      },
      {
        question: '소송에서 지면 비용을 물어야 하나요?',
        answer:
          '<p>패소하면 인지대와 송달료 정도의 소송비용이 발생합니다. 소액사건의 경우 이 비용은 크지 않습니다(수만원 수준).</p>',
      },
      {
        question: '소송 기간은 얼마나 걸리나요?',
        answer:
          '<p>소액사건은 1~3개월, 일반 민사소송은 6개월~1년 정도 소요됩니다. 항소하면 추가 6개월~1년이 걸릴 수 있습니다.</p>',
      },
    ],
    cta: { text: '포괄임금 무효 소송 가능성 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '포괄임금 초과수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금 소멸시효 3년', href: '/guide/wage/unpaid-wage-3year-limitation' },
      { label: '지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },
];
