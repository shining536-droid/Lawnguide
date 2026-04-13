import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 회생 2 + 파산 1 + 상가 2 + 전세 2 = 7개 (batch31-misc)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch31Misc: SpokePage[] = [
  // ── 회생 1. 채권자 이의 대응 방법 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-creditor-objection-response',
    keyword: '개인회생 채권자 이의 대응',
    questionKeyword: '개인회생 신청 후 채권자가 이의를 제기하면 어떻게 대응해야 하나요?',
    ctaKeyword: '개인회생 채권자 이의 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인회생 채권자 이의 대응법 3단계 | 로앤가이드',
      description:
        '개인회생 신청 후 채권자가 이의를 제기해 불안하다면, 대응 방법과 변제계획 수정 전략을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 신청서를 제출하고 한숨 돌렸는데, 법원에서 "채권자가 이의를 제기했다"는 통지가 왔습니다. 변제계획이 부인되는 건 아닌지, 개인회생 자체가 취소되는 건 아닌지 걱정이 밀려옵니다. 채권자 이의는 개인회생 절차에서 흔히 발생하는 단계이며, 적절히 대응하면 변제계획 인가에 큰 문제가 되지 않습니다.</p>',
    sections: [
      {
        title: '채권자 이의의 종류와 발생 시점',
        content:
          '<p><strong style="color:#1e3a5f">채권자 이의는 크게 채권액에 대한 이의와 변제계획에 대한 이의로 나뉩니다.</strong></p>\n<ul>\n<li><strong>채권액 이의</strong> — 채권자가 "내 채권은 500만원이 아니라 700만원이다"라며 채권자목록의 금액에 이의를 제기하는 경우입니다. 이자나 지연손해금 산정 방식에 대한 이견이 대부분입니다.</li>\n<li><strong>변제계획 이의</strong> — 변제율이 너무 낮거나 변제기간이 부당하다며 변제계획 자체에 이의하는 경우입니다.</li>\n<li><strong>이의 시점</strong> — 채권자집회 전까지 서면으로 이의를 제출하며, 법원이 채무자에게 통지합니다.</li>\n<li><strong>이의 빈도</strong> — 대형 금융기관이 채권자인 경우 기계적으로 이의를 제기하는 사례가 많습니다. 당황하지 마세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 채권자 이의가 있어도 법원이 최종 판단합니다. 이의 자체가 개인회생 기각 사유는 아닙니다.</blockquote>',
      },
      {
        title: '채권자 이의에 대한 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">이의 내용을 확인한 뒤, 인정할 부분은 수정하고 다투는 부분은 소명자료를 제출합니다.</strong></p>\n<ul>\n<li><strong>이의서 확인</strong> — 법원에서 보내온 이의서 사본을 꼼꼼히 읽고, 어떤 부분에 이의가 있는지 파악합니다.</li>\n<li><strong>채권액 이의 시</strong> — 채권자가 주장하는 금액이 맞다면 채권자목록을 수정합니다. 다투려면 채무자회생법 제607조에 따라 이의에 대한 재판을 신청합니다.</li>\n<li><strong>변제계획 이의 시</strong> — 가용소득 산정 근거(급여명세서, 생활비 내역)를 보충 제출하고, 변제율이 청산가치 이상임을 소명합니다.</li>\n<li><strong>변제계획 수정</strong> — 법원이 보정명령을 내리면 14일 이내에 수정 변제계획안을 제출해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>채권자 이의 대응 방법, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">이의 내용과 현재 변제계획을 입력하면 대응 전략을 무료로 확인하세요.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '변제계획 수정 시 핵심 포인트',
        content:
          '<p><strong style="color:#1e3a5f">변제계획을 수정할 때는 법원이 중시하는 3가지 기준을 반드시 충족해야 합니다.</strong></p>\n<ul>\n<li><strong>청산가치 보장</strong> — 채권자가 파산 시 받을 수 있는 금액 이상을 변제해야 합니다(채무자회생법 제614조 제1항 제4호).</li>\n<li><strong>가용소득 전부 투입</strong> — 소득에서 최저생계비를 제외한 전액을 변제에 사용해야 합니다.</li>\n<li><strong>변제기간 준수</strong> — 원칙적으로 3년(36개월), 최장 5년(60개월)까지 가능합니다.</li>\n<li><strong>수정 횟수</strong> — 변제계획 수정은 여러 번 가능하지만, 보정명령 기한 내에 제출하지 않으면 개인회생 신청이 기각될 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 채권자 이의를 무시하고 대응하지 않으면 법원이 직권으로 개인회생을 기각할 수 있습니다. 반드시 기한 내에 의견서를 제출하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권자목록 미기재 청구권과 면책 효력',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16 선고)에서 법원은 개인회생채권자목록에 기재되지 아니한 청구권에는 원칙적으로 면책결정의 효력이 미치지 않지만, 보증인이 있는 채권의 경우 채권자가 목록에 기재되어 변제대상이 되었다면 보증인의 구상금채권에도 면책 효력이 미친다고 판시했습니다.',
        takeaway:
          '채권자목록에 모든 채권을 빠짐없이 기재하는 것이 중요합니다. 누락된 채권은 면책을 받지 못할 위험이 있으므로, 채권자 이의 단계에서 누락 채권을 발견하면 즉시 목록을 보정하세요.',
      },
    ],
    faq: [
      {
        question: '채권자 이의가 제기되면 개인회생이 기각되나요?',
        answer:
          '<p>채권자 이의 자체가 기각 사유는 아닙니다. 법원이 이의 내용을 심사하여 변제계획의 적법성을 판단합니다. 다만 이의에 대응하지 않거나 보정명령을 기한 내에 이행하지 않으면 기각될 수 있습니다.</p>',
      },
      {
        question: '채권자가 이의를 제기하면 변제 금액이 늘어나나요?',
        answer:
          '<p>반드시 늘어나지는 않습니다. 채권액 이의가 인정되면 총 변제액이 늘어날 수 있지만, 가용소득 범위 내에서 조정됩니다. 법원은 채무자의 최저생계비를 보장하므로 무리한 변제를 강요하지 않습니다.</p>',
      },
      {
        question: '채권자 이의에 대한 의견서는 어떻게 작성하나요?',
        answer:
          '<p>이의 사항별로 반박 근거를 작성합니다. 채권액 이의에는 거래내역서와 이자 계산서를, 변제계획 이의에는 급여명세서와 생활비 내역서를 첨부합니다. 법원 양식에 맞춰 제출하세요.</p>',
      },
      {
        question: '금융기관이 매번 이의를 제기하는데 정상인가요?',
        answer:
          '<p>네, 대형 금융기관은 채권 관리 절차상 기계적으로 이의를 제기하는 경우가 많습니다. 이의 내용이 형식적이라면 법원도 이를 고려하여 판단하므로 크게 걱정하지 않아도 됩니다.</p>',
      },
      {
        question: '변제계획 수정을 몇 번까지 할 수 있나요?',
        answer:
          '<p>법률상 횟수 제한은 없지만, 보정명령마다 기한이 있습니다. 반복 수정은 법원의 심증에 부정적 영향을 줄 수 있으므로 한 번에 꼼꼼하게 수정하는 것이 좋습니다.</p>',
      },
    ],
    cta: { text: '개인회생 채권자 이의 대응 전략 AI로 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 사전 체크', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '변제금 산정 방법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 기각 사유 예방', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' },
    ],
  },

  // ── 회생 2. 보증채무 개인회생 포함 여부 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-suretyship-debt-included',
    keyword: '보증채무 개인회생 포함 여부',
    questionKeyword: '보증채무도 개인회생에 포함해서 탕감받을 수 있나요?',
    ctaKeyword: '보증채무 개인회생 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '보증채무 개인회생 포함 가능 여부 확인법 | 로앤가이드',
      description:
        '타인의 보증을 서서 채무가 생겼다면, 보증채무의 개인회생 포함 조건과 주의사항을 지금 확인하세요.',
    },
    intro:
      '<p>지인의 부탁에 보증을 섰는데 주채무자가 연락을 끊었습니다. 채권자에게서 "보증인인 당신이 갚아라"는 독촉장이 매달 옵니다. 보증 금액이 3천만원인데 갚을 여력이 없어 개인회생을 생각하고 있습니다. 보증채무도 개인회생에 포함할 수 있는지, 포함하면 주채무자에게 영향이 가는지 궁금합니다.</p>',
    sections: [
      {
        title: '보증채무도 개인회생에 포함되는 이유',
        content:
          '<p><strong style="color:#1e3a5f">보증채무는 보증인 본인의 채무이므로 개인회생채권에 포함됩니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 채무자회생법 제579조에 따라 개인회생채권이란 "채무자에 대하여 개인회생절차 개시 전의 원인으로 생긴 재산상의 청구권"입니다. 보증채무도 이에 해당합니다.</li>\n<li><strong>연대보증·일반보증 모두 포함</strong> — 연대보증이든 단순보증이든 보증인의 개인회생 채권자목록에 기재할 수 있습니다.</li>\n<li><strong>조건부 채무도 포함</strong> — 아직 주채무자가 변제 중이라 보증이 현실화되지 않은 "조건부 채무"도 목록에 기재하여 보호받을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 보증채무만 있는 경우에도 단독으로 개인회생을 신청할 수 있습니다. 주채무자와 별도로 진행됩니다.</blockquote>',
      },
      {
        title: '보증채무 개인회생 시 채권자취소권 리스크',
        content:
          '<p><strong style="color:#1e3a5f">보증인이 개인회생 전에 재산을 처분했다면 채권자취소권이 문제될 수 있습니다.</strong></p>\n<ul>\n<li><strong>채권자취소권이란</strong> — 채권자가 보증인의 재산 처분 행위(예: 부동산 이전, 예금 인출 후 타인 명의 저축)를 "사해행위"로 취소하는 제도입니다.</li>\n<li><strong>인적 담보와 사해행위</strong> — 대법원 판례에 따르면, 보증인 등 인적 담보가 있더라도 주채무자의 사해행위 판단에 보증인의 자력은 고려하지 않습니다.</li>\n<li><strong>보증인의 재산 처분 주의</strong> — 개인회생 신청 전 1~2년 이내의 재산 처분은 법원이 면밀히 조사합니다. 부당한 처분이 발견되면 기각 사유가 됩니다.</li>\n<li><strong>대위변제 후 구상권</strong> — 보증인이 개인회생으로 면책을 받아도 주채무자에 대한 구상권은 별도로 행사할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>보증채무 개인회생 포함 여부, AI가 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">보증 유형과 금액을 입력하면 개인회생 포함 가능성과 리스크를 무료로 분석합니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증채무 개인회생 신청 시 준비서류',
        content:
          '<p><strong style="color:#1e3a5f">일반 개인회생 서류에 보증 관련 추가 서류를 함께 준비합니다.</strong></p>\n<ul>\n<li><strong>보증계약서 사본</strong> — 연대보증서, 근보증 한도약정서 등 보증 관계를 입증하는 서류입니다.</li>\n<li><strong>채권자 통지서</strong> — 채권자가 보증인에게 보낸 독촉장, 채무이행청구서 등입니다.</li>\n<li><strong>주채무자 상환 내역</strong> — 주채무자의 상환 현황을 파악할 수 있는 자료입니다. 채권자에게 요청하세요.</li>\n<li><strong>재산·소득 증빙</strong> — 급여명세서, 건강보험료 납부확인서, 부동산등기부등본, 금융거래확인서입니다.</li>\n<li><strong>채권자목록</strong> — 보증채무뿐 아니라 본인 명의의 모든 채무를 빠짐없이 기재해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 보증채무를 채권자목록에서 누락하면 면책 대상에서 제외됩니다. 조건부 채무라도 반드시 기재하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증인 인적 담보와 채권자취소권',
        summary:
          '대법원 2025다211379 사건(대법원, 2025.12.04 선고)에서 법원은 채권자취소권의 피보전채권에 보증인 등 인적 담보가 있더라도 주채무자의 사해행위 판단 시 보증인의 변제자력은 고려 대상이 아니며, 보증인이 대위변제 후 취득한 채권으로도 채권자취소권을 행사할 수 있다고 판시했습니다.',
        takeaway:
          '보증인이 있다고 해서 주채무자의 재산 처분이 사해행위에서 제외되지 않습니다. 개인회생 신청 전 재산을 무분별하게 처분하면 채권자취소 소송의 대상이 될 수 있으므로 주의하세요.',
      },
    ],
    faq: [
      {
        question: '보증채무만으로도 개인회생 신청이 가능한가요?',
        answer:
          '<p>네, 보증채무만 있어도 개인회생을 신청할 수 있습니다. 채무 총액이 무담보 10억원 이하이고 정기적 소득이 있다면 자격이 됩니다.</p>',
      },
      {
        question: '내가 개인회생을 하면 주채무자에게 영향이 있나요?',
        answer:
          '<p>보증인의 개인회생은 주채무자의 채무에 직접적인 영향을 주지 않습니다. 다만 채권자가 보증인으로부터 변제를 받지 못하면 주채무자에게 더 적극적으로 추심할 수 있습니다.</p>',
      },
      {
        question: '아직 보증 채무가 현실화되지 않았는데도 신청할 수 있나요?',
        answer:
          '<p>네, 조건부 채무도 개인회생채권에 해당합니다. 주채무자가 아직 상환 중이라 보증이 현실화되지 않더라도 채권자목록에 기재할 수 있습니다.</p>',
      },
      {
        question: '보증채무 개인회생 후 주채무자에게 구상권을 행사할 수 있나요?',
        answer:
          '<p>네, 개인회생 면책은 보증인의 채무만 면책하는 것이지 주채무자에 대한 구상권까지 소멸시키지 않습니다. 다만 실제 구상권 행사는 주채무자의 자력에 따라 달라집니다.</p>',
      },
      {
        question: '보증 한도가 정해진 근보증도 포함되나요?',
        answer:
          '<p>네, 근보증의 경우 보증 한도액을 채권자목록에 기재합니다. 실제 구상 의무가 확정되지 않은 부분은 조건부 채권으로 처리됩니다.</p>',
      },
    ],
    cta: { text: '보증채무 개인회생 포함 가능 여부 AI로 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 기각 사유 예방', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' },
      { label: '변제금 산정 방법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
    ],
  },

  // ── 파산 1. 면책 후 채무불이행자명부 삭제 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-discharged-debt-registry',
    keyword: '파산 면책 채무불이행자명부 삭제',
    questionKeyword: '면책결정을 받았는데 채무불이행자명부에서 삭제되지 않으면 어떻게 하나요?',
    ctaKeyword: '파산 면책 명부 삭제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 후 채무불이행자명부 삭제 절차 | 로앤가이드',
      description:
        '면책결정을 받았는데 명부에 아직 남아있다면, 채무불이행자명부 말소 절차와 신용회복 방법을 지금 확인하세요.',
    },
    intro:
      '<p>파산 면책결정을 받고 새출발을 준비하려는데, 은행에서 대출이 거절됐습니다. 확인해보니 채무불이행자명부에 아직 이름이 남아 있었습니다. 면책을 받았는데 왜 명부가 삭제되지 않는 건지, 어디에 신청해야 하는 건지 막막합니다. 면책결정 확정 후에도 자동으로 말소되지 않는 경우가 있어 직접 신청이 필요합니다.</p>',
    sections: [
      {
        title: '채무불이행자명부 등재와 면책의 관계',
        content:
          '<p><strong style="color:#1e3a5f">면책결정이 확정되면 채무불이행자명부 등재는 법적으로 유지할 이유가 없어집니다.</strong></p>\n<ul>\n<li><strong>명부 등재 제도</strong> — 채무불이행자명부는 확정 판결 후 6개월 내 채무를 이행하지 않은 사람을 공개하는 간접강제 제도입니다(민사집행법 제70조).</li>\n<li><strong>면책과 채무 소멸</strong> — 면책결정이 확정되면 해당 채무에 대한 책임이 면제됩니다. 대법원 판례에 따르면 면책 확정은 "채무가 소멸한 경우"에 준하므로 명부 등재를 유지할 수 없습니다.</li>\n<li><strong>자동 말소 아님</strong> — 면책결정이 나더라도 명부가 자동으로 삭제되지 않는 경우가 많습니다. 등재 법원에 직접 말소 신청을 해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 면책결정문 확정증명원을 발급받아 등재 법원에 제출하면 말소 결정을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '채무불이행자명부 말소 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">면책결정문과 확정증명원을 준비하여 등재 법원에 말소 신청서를 제출합니다.</strong></p>\n<ul>\n<li><strong>1단계: 서류 준비</strong> — 면책결정문 사본, 면책결정 확정증명원(파산 법원에서 발급), 주민등록등본을 준비합니다.</li>\n<li><strong>2단계: 말소 신청</strong> — 채무불이행자명부에 등재한 법원(=원래 판결을 내린 법원)에 "채무불이행자명부 말소 신청서"를 제출합니다.</li>\n<li><strong>3단계: 법원 결정</strong> — 법원이 면책결정 확정 사실을 확인한 뒤 말소 결정을 내립니다. 통상 2~4주가 소요됩니다.</li>\n<li><strong>4단계: 확인</strong> — 말소 결정 후 대법원 전자소송 시스템에서 명부 삭제 여부를 확인할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>채무불이행자명부 말소 절차, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">면책결정 현황을 입력하면 말소 신청에 필요한 서류와 절차를 무료로 확인하세요.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면책 후 신용 회복 로드맵',
        content:
          '<p><strong style="color:#1e3a5f">명부 말소 후에도 신용 회복까지는 추가 절차가 필요합니다.</strong></p>\n<ul>\n<li><strong>신용정보 정정 요청</strong> — 한국신용정보원에 면책결정 확정 사실을 통보하여 연체 정보를 정정 요청합니다.</li>\n<li><strong>KCB·NICE 신용점수 확인</strong> — 면책 후 파산 이력은 5~7년간 신용보고서에 남지만, 정상적인 금융활동을 하면 점수가 점진적으로 회복됩니다.</li>\n<li><strong>소액 금융상품 활용</strong> — 서민금융진흥원의 미소금융, 햇살론 등 소액 대출을 정상 상환하면 신용 회복에 도움됩니다.</li>\n<li><strong>체크카드 사용</strong> — 신용카드 발급이 어려우므로 체크카드로 소비 실적을 쌓으세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 비면책채권(악의적 채권자목록 누락, 벌금, 조세채권 등)은 면책 대상이 아닙니다. 비면책채권이 있으면 해당 채무에 대한 명부 등재는 말소되지 않습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정 확정 후 채무불이행자명부 등재',
        summary:
          '대법원 2025마7576 사건(대법원, 2026.01.09 선고)에서 법원은 면책결정이 확정되어 채무에 대한 책임이 면제되는 경우 채무불이행자명부 등재신청에 정당한 이유가 없으므로 기각해야 하며, 채무자가 악의로 채권자목록에 기재하지 않은 청구권에 해당하는지는 면책제도의 이념과 채무자의 불이익을 충분히 감안하여 신중히 판단해야 한다고 판시했습니다.',
        takeaway:
          '면책결정이 확정된 채무에 대해서는 명부 등재 자체가 정당하지 않습니다. 채권자가 비면책채권을 주장하더라도, 악의적 누락이 아니라면 면책 효력이 미칩니다.',
      },
    ],
    faq: [
      {
        question: '면책결정 후 명부가 자동으로 삭제되나요?',
        answer:
          '<p>자동 삭제되지 않는 경우가 많습니다. 파산 법원과 등재 법원이 다를 수 있어 정보 연동이 안 되기 때문입니다. 직접 등재 법원에 말소 신청을 해야 합니다.</p>',
      },
      {
        question: '말소 신청에 비용이 드나요?',
        answer:
          '<p>말소 신청 자체에는 별도의 인지대나 수수료가 없습니다. 면책결정 확정증명원 발급 수수료(1,000원 내외)만 소요됩니다.</p>',
      },
      {
        question: '명부에 등재된 상태에서 취업에 불이익이 있나요?',
        answer:
          '<p>법적으로 채무불이행자명부는 누구나 열람할 수 있으므로 취업 시 신원조회에서 확인될 수 있습니다. 특히 금융업이나 공직에서 불이익이 발생할 수 있으니 빨리 말소 신청하세요.</p>',
      },
      {
        question: '면책 후 얼마나 지나야 신용카드를 만들 수 있나요?',
        answer:
          '<p>면책 후 보통 5~7년간 신용보고서에 파산 이력이 남습니다. 하지만 정상적인 금융활동(체크카드 사용, 소액대출 상환 등)을 하면 2~3년 내에 소액 신용카드 발급이 가능해지는 경우도 있습니다.</p>',
      },
      {
        question: '채권자가 면책 후에도 추심하면 어떻게 하나요?',
        answer:
          '<p>면책결정 확정 후 추심은 위법입니다. 면책결정문을 제시하고 중단을 요청하세요. 계속 추심하면 불법추심으로 금융감독원에 민원을 제기하거나 손해배상을 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '면책 후 채무불이행자명부 말소 절차 AI로 확인하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산에서 면책까지 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '파산 vs 개인회생 비교', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '비면책 채무 목록', href: '/guide/bankruptcy/non-dischargeable-debts-after-bankruptcy' },
      { label: '신용카드 빚 파산', href: '/guide/bankruptcy/overwhelming-credit-card-debt-bankruptcy' },
    ],
  },

  // ── 상가 1. 특례기간 연체 차임과 계약갱신 ──
  {
    domain: 'sangga',
    slug: 'commercial-lease-rent-arrears-special',
    keyword: '상가임대차 특례기간 연체 갱신',
    questionKeyword: '코로나 특례기간 연체가 계약해지 사유가 되나요?',
    ctaKeyword: '상가 특례기간 연체 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '상가임대차 특례기간 연체 차임 처리법 | 로앤가이드',
      description:
        '코로나 특례기간 연체 차임이 갱신 거절 사유가 되는지 걱정된다면, 차임 충당 순서와 갱신 요건을 지금 확인하세요.',
    },
    intro:
      '<p>코로나19 시기에 매출이 급감해 3개월치 차임을 밀렸습니다. 이후 조금씩 갚고 있는데, 임대인이 "연체가 있으니 갱신을 거절하겠다"고 통보했습니다. 상가임대차보호법은 코로나 특례기간의 연체를 특별히 보호하고 있어, 이 기간의 연체만으로는 갱신을 거절할 수 없을 수 있습니다.</p>',
    sections: [
      {
        title: '상가임대차보호법 특례 제도의 내용',
        content:
          '<p><strong style="color:#1e3a5f">2020년 9월 29일부터 6개월간의 연체 차임은 계약 해지·갱신 거절 사유에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>특례기간</strong> — 2020. 9. 29.부터 2021. 3. 28.까지 6개월입니다(상가임대차보호법 제10조의9).</li>\n<li><strong>보호 내용</strong> — 특례기간의 연체 차임액은 계약갱신 거절사유(제10조 제1항 제1호), 계약 해지사유(제10조의8), 권리금 회수기회 제외사유(제10조의4 제1항 단서)에서 제외됩니다.</li>\n<li><strong>임대인 권리 유지</strong> — 다만 임대인의 차임 청구권 자체는 유지됩니다. 연체 차임을 면제해 주는 것이 아니라, 해지·갱신 거절의 "사유"에서만 제외합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 특례기간 연체만 있는 경우, 임대인은 이를 이유로 계약갱신을 거절하거나 계약을 해지할 수 없습니다.</blockquote>',
      },
      {
        title: '연체 차임 변제충당 순서의 중요성',
        content:
          '<p><strong style="color:#1e3a5f">밀린 차임을 갚을 때 어떤 연체분부터 충당되는지에 따라 갱신 거절 가능 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>법정변제충당 원칙</strong> — 민법 제477조에 따라 이행기가 도래한 연체 차임에 먼저 충당됩니다.</li>\n<li><strong>특례기간 연체는 후순위</strong> — 대법원 판례에 따르면, 특례기간의 연체 차임은 임대인의 해지권 등이 제한되어 변제이익이 적으므로 다른 연체 차임보다 후순위로 충당됩니다.</li>\n<li><strong>임차인의 지정충당 가능</strong> — 임차인이 직접 "특례기간 외 연체분에 먼저 충당해 달라"고 지정할 수 있습니다(민법 제476조 제1항).</li>\n<li><strong>임대인 지정충당 제한</strong> — 임대인이 특례기간 연체분에 먼저 충당하려 해도, 이것이 임차인에게 불리하면 효력이 없습니다(상가임대차보호법 제15조).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>특례기간 연체와 갱신 거절, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">연체 기간과 금액을 입력하면 계약갱신 거절 대응 방법을 무료로 확인하세요.</p>\n<a href="/chat?domain=sangga" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임차인이 지금 해야 할 대응 3가지',
        content:
          '<p><strong style="color:#1e3a5f">갱신 거절 통보를 받았다면 즉시 행동해야 합니다.</strong></p>\n<ul>\n<li><strong>연체 내역 정리</strong> — 특례기간(2020.9.29~2021.3.28)의 연체분과 그 외 기간의 연체분을 구분하여 정리합니다. 입금 내역을 통장 거래내역서로 증명하세요.</li>\n<li><strong>내용증명 발송</strong> — 임대인에게 "특례기간 연체는 갱신 거절 사유가 아니다"라는 취지의 내용증명을 보냅니다. 상가임대차보호법 제10조의9를 명시하세요.</li>\n<li><strong>갱신 요구권 행사</strong> — 임대차기간 만료 6개월 전부터 1개월 전까지 서면으로 갱신 요구를 해야 합니다. 기한을 놓치면 갱신권을 상실합니다.</li>\n<li><strong>임대차분쟁조정위원회</strong> — 합의가 안 되면 대한법률구조공단 내 상가임대차분쟁조정위원회에 조정을 신청할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특례기간 연체 차임의 변제충당 순서',
        summary:
          '대법원 2022다309337 사건(대법원, 2023.04.13 선고)에서 법원은 임차인의 변제제공이 특례기간을 포함한 전후 연체 차임액 전부에 미치지 못하는 경우, 법정변제충당에 따라 이행기가 도래한 다른 연체 차임에 먼저 충당되고 특례기간의 연체 차임은 후순위로 충당된다고 판시했습니다.',
        takeaway:
          '밀린 차임을 부분 변제할 때 특례기간 외 연체분이 먼저 충당되므로, 특례기간 연체만 남는 형태가 됩니다. 이 경우 임대인은 갱신을 거절할 수 없습니다.',
      },
    ],
    faq: [
      {
        question: '특례기간이 지난 지금도 보호를 받을 수 있나요?',
        answer:
          '<p>네, 특례기간에 발생한 연체 차임에 대한 보호 효과는 기간이 지나도 유지됩니다. 과거 특례기간에 발생한 연체를 이유로 지금 갱신을 거절하는 것은 허용되지 않습니다.</p>',
      },
      {
        question: '특례기간 연체분도 결국 갚아야 하나요?',
        answer:
          '<p>네, 특례 규정은 연체 차임을 면제하는 것이 아닙니다. 임대인은 특례기간 연체분에 대해서도 차임 청구권과 지연이자 청구권을 행사할 수 있습니다. 해지·갱신 거절만 할 수 없을 뿐입니다.</p>',
      },
      {
        question: '3기분(3개월분) 이상 연체하면 무조건 해지되나요?',
        answer:
          '<p>상가임대차보호법상 3기분 이상 연체 시 갱신 거절이 가능하지만, 특례기간의 연체분은 이 3기분 계산에서 제외됩니다. 따라서 특례기간 연체를 빼고 3기분 미만이면 해지할 수 없습니다.</p>',
      },
      {
        question: '임대인이 특례기간 연체분에 먼저 충당했다고 주장하면?',
        answer:
          '<p>임대인의 지정충당이 임차인에게 불리한 경우 효력이 없습니다. 상가임대차보호법 제15조에 따라 임차인에게 불리한 약정은 무효이므로, 법정변제충당 순서가 적용됩니다.</p>',
      },
    ],
    cta: { text: '상가 특례기간 연체 대응 방법 AI로 확인하기', link: '/chat?domain=sangga' },
    internalLinks: [
      { label: '상가 계약갱신 권리', href: '/guide/sangga/commercial-lease-renewal-rights-protection' },
      { label: '상가 권리금 보호', href: '/guide/sangga/commercial-lease-key-money' },
      { label: '상가 보증금 반환', href: '/guide/sangga/commercial-deposit-return-process' },
      { label: '상가 계약 해지 절차', href: '/guide/sangga/commercial-lease-termination-procedure' },
      { label: '상가 관리비 분쟁', href: '/guide/sangga/commercial-lease-management-fee-dispute' },
    ],
  },

  // ── 상가 2. 권리금 회수 방해 손해배상 ──
  {
    domain: 'sangga',
    slug: 'commercial-lease-premium-landlord-liability',
    keyword: '상가 권리금 회수 방해 손해배상',
    questionKeyword: '임대인이 권리금 회수를 방해하면 손해배상을 청구할 수 있나요?',
    ctaKeyword: '상가 권리금 방해 손해배상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상가 권리금 회수 방해 시 손해배상 청구법 | 로앤가이드',
      description:
        '임대인이 권리금 회수를 방해하고 있다면, 손해배상 청구 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>10년간 운영한 식당의 임대차가 끝나갑니다. 새 임차인을 구해서 권리금 5천만원에 합의했는데, 임대인이 새 임차인과의 계약을 거부합니다. 이유도 없이 "직접 쓰겠다"며 거절하더니, 결국 빈 가게로 6개월째 방치 중입니다. 상가임대차보호법은 임대인의 부당한 권리금 회수 방해에 대해 손해배상을 청구할 수 있는 권리를 보장합니다.</p>',
    sections: [
      {
        title: '권리금 회수기회 보호와 방해 행위의 유형',
        content:
          '<p><strong style="color:#1e3a5f">상가임대차보호법 제10조의4는 임대인이 임차인의 권리금 회수를 방해하는 행위를 금지합니다.</strong></p>\n<ul>\n<li><strong>정당한 사유 없는 계약 거절</strong> — 임차인이 주선한 신규임차인과의 계약 체결을 정당한 사유 없이 거절하는 것입니다.</li>\n<li><strong>현저히 고액의 차임 요구</strong> — 신규임차인에게 현저히 고액의 차임이나 보증금을 요구하여 사실상 계약을 불가능하게 만드는 행위입니다.</li>\n<li><strong>정보 비공개</strong> — 신규임차인에게 건물의 권리관계나 중요 사항을 고의로 숨기는 행위입니다.</li>\n<li><strong>방해의 기준 시점</strong> — 임대차기간 만료 6개월 전부터 만료 시까지가 권리금 회수기회 보호 기간입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 임대인이 직접 영업하겠다고 했으나 실제로 하지 않는다면, 이는 권리금 회수 방해에 해당할 가능성이 높습니다.</blockquote>',
      },
      {
        title: '손해배상 청구 요건과 금액 산정',
        content:
          '<p><strong style="color:#1e3a5f">임대인의 방해 행위가 인정되면 임대차 종료 시점의 권리금 상당액을 배상받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>법적 성질</strong> — 대법원 판례에 따르면 이 손해배상은 상가임대차보호법이 요건과 배상범위를 특별히 규정한 "법정책임"입니다. 불법행위 책임이 아닙니다.</li>\n<li><strong>배상 한도</strong> — 손해배상액은 임대차 종료 당시의 권리금을 넘지 않습니다(상가임대차보호법 제10조의4 제3항).</li>\n<li><strong>지체책임 시기</strong> — 손해배상채무의 지체책임은 임대차가 종료한 날 다음 날부터 발생합니다.</li>\n<li><strong>소멸시효</strong> — 임대차가 종료한 날부터 3년 이내에 청구해야 합니다. 기한을 놓치면 권리가 소멸합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>권리금 회수 방해 손해배상, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">방해 행위 유형과 권리금 금액을 입력하면 손해배상 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=sangga" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '손해배상 청구 절차와 준비 서류',
        content:
          '<p><strong style="color:#1e3a5f">증거를 확보한 뒤 내용증명 발송, 조정, 소송 순서로 진행합니다.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 신규임차인과의 권리금 계약서, 임대인의 계약 거절 내용(문자·이메일·녹음), 기존 매출 자료, 시설투자 내역입니다.</li>\n<li><strong>권리금 감정</strong> — 한국감정평가사협회 등에 권리금 감정을 의뢰하면 법원에서 유리한 증거가 됩니다.</li>\n<li><strong>내용증명 발송</strong> — 임대인에게 손해배상을 청구하는 내용증명을 보냅니다. 상가임대차보호법 제10조의4를 명시하세요.</li>\n<li><strong>조정 또는 소송</strong> — 합의가 안 되면 상가임대차분쟁조정위원회에 조정을 신청하거나 법원에 손해배상 소송을 제기합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 소멸시효가 3년이므로 임대차 종료 후 빨리 움직여야 합니다. 증거가 사라지기 전에 확보하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 권리금 회수기회 방해 손해배상의 법적 성질',
        summary:
          '대법원 2022다260586 사건(대법원, 2023.02.02 선고)에서 법원은 임대인의 권리금 회수기회 방해로 인한 손해배상책임은 상가임대차보호법이 요건, 배상범위, 소멸시효를 특별히 규정한 법정책임이며, 손해배상채무의 지체책임은 임대차 종료일 다음 날부터 발생한다고 판시했습니다.',
        takeaway:
          '권리금 회수 방해 손해배상은 법정책임이므로 임대인의 고의·과실을 별도로 입증할 필요가 없습니다. 방해 행위 자체가 인정되면 배상 책임이 발생합니다.',
      },
    ],
    faq: [
      {
        question: '임대인이 "직접 쓰겠다"며 거절하면 방해에 해당하나요?',
        answer:
          '<p>임대인이 실제로 직접 영업을 하려는 진정한 의사가 없다면 방해 행위에 해당합니다. 거절 후 상당 기간 빈 상가로 방치하거나 제3자에게 임대하는 경우가 대표적입니다.</p>',
      },
      {
        question: '권리금 계약서가 없어도 손해배상을 청구할 수 있나요?',
        answer:
          '<p>권리금 계약서가 없어도 매출 자료, 시설투자 내역, 영업기간 등을 통해 권리금의 존재와 가치를 입증할 수 있습니다. 다만 계약서가 있으면 입증이 훨씬 수월합니다.</p>',
      },
      {
        question: '손해배상 소송 비용은 얼마나 드나요?',
        answer:
          '<p>소가(청구 금액)에 따라 인지대가 달라지며, 5천만원 청구 시 인지대 약 30만원, 송달료 약 7만원입니다. 변호사 비용은 별도이나, 법률구조공단(132) 무료 소송 지원도 가능합니다.</p>',
      },
      {
        question: '갱신 거절과 권리금 방해를 동시에 다툴 수 있나요?',
        answer:
          '<p>네, 갱신 거절이 부당하다면 계약갱신 요구와 권리금 회수 방해 손해배상을 동시에 청구할 수 있습니다. 다만 갱신이 인정되면 권리금 문제는 다음 계약 종료 시에 다시 발생합니다.</p>',
      },
      {
        question: '임대차 종료 후 3년이 지나면 정말 청구가 불가능한가요?',
        answer:
          '<p>네, 소멸시효 3년이 경과하면 임대인이 시효 항변을 할 수 있어 사실상 청구가 불가능합니다. 종료일로부터 3년 이내에 반드시 소송을 제기하거나 조정을 신청하세요.</p>',
      },
    ],
    cta: { text: '상가 권리금 손해배상 청구 가능성 AI로 확인하기', link: '/chat?domain=sangga' },
    internalLinks: [
      { label: '상가 권리금 보호', href: '/guide/sangga/commercial-lease-key-money' },
      { label: '상가 계약갱신 권리', href: '/guide/sangga/commercial-lease-renewal-rights-protection' },
      { label: '상가 보증금 반환', href: '/guide/sangga/commercial-deposit-return-process' },
      { label: '상가 계약 해지 절차', href: '/guide/sangga/commercial-lease-termination-procedure' },
      { label: '상가 관리비 분쟁', href: '/guide/sangga/commercial-lease-management-fee-dispute' },
    ],
  },

  // ── 전세 1. 전입신고 대항력 요건 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-tenant-registration-requirement',
    keyword: '전세 전입신고 대항력 요건',
    questionKeyword: '전입신고를 했는데 대항력을 갖추려면 어떤 요건이 필요한가요?',
    ctaKeyword: '전세 전입신고 대항력 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '전세 전입신고 대항력 요건 체크리스트 5가지 | 로앤가이드',
      description:
        '전입신고만으로 대항력이 생기는지 불안하다면, 주민등록의 대항력 요건과 유지 조건을 지금 확인하세요.',
    },
    intro:
      '<p>전세 계약을 맺고 바로 전입신고를 했습니다. "이제 대항력이 생겼으니 안전하다"고 생각했는데, 집주인이 바뀌면서 새 집주인이 "보증금을 줄 의무가 없다"고 합니다. 전입신고를 했어도 주민등록이 실질적 거주를 제대로 공시하지 못하면 대항력이 인정되지 않을 수 있습니다.</p>',
    sections: [
      {
        title: '대항력의 의미와 발생 시점',
        content:
          '<p><strong style="color:#1e3a5f">대항력이란 집주인이 바뀌어도 새 집주인에게 임대차를 주장할 수 있는 권리입니다.</strong></p>\n<ul>\n<li><strong>대항력 요건</strong> — 주택임대차보호법 제3조 제1항에 따라 주택의 인도(입주)와 주민등록(전입신고) 두 가지를 모두 갖춰야 합니다.</li>\n<li><strong>발생 시점</strong> — 입주와 전입신고를 모두 마친 다음 날 오전 0시에 대항력이 발생합니다. 같은 날 설정된 근저당보다 후순위가 됩니다.</li>\n<li><strong>확정일자</strong> — 대항력과 별도로 우선변제권을 갖추려면 임대차계약서에 확정일자를 받아야 합니다. 주민센터나 법원에서 받을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 전입신고 당일은 대항력이 없습니다. 잔금 지급일에 바로 전입신고해도 그날 설정된 담보물권보다 후순위입니다.</blockquote>',
      },
      {
        title: '주민등록이 유효한 공시방법이 되기 위한 요건',
        content:
          '<p><strong style="color:#1e3a5f">형식적으로 주민등록만 되어 있으면 부족하고, 제3자가 임차권의 존재를 인식할 수 있어야 합니다.</strong></p>\n<ul>\n<li><strong>실질적 거주 필요</strong> — 전입신고만 하고 실제로 거주하지 않으면 대항력이 부정됩니다. 주민등록은 실제 거주지를 공시하는 수단이기 때문입니다.</li>\n<li><strong>정확한 주소 기재</strong> — 동·호수가 정확해야 합니다. 다가구주택에서 "101호"로 전입신고해야 하는데 "지층"으로만 기재하면 공시 기능이 부족할 수 있습니다.</li>\n<li><strong>소유권 취득 시 대항력 소멸</strong> — 대법원 판례에 따르면 임차인이 임차주택의 소유권을 취득하면 주민등록은 더 이상 임차권의 공시방법이 아니게 되므로 대항력이 소멸합니다.</li>\n<li><strong>계속 존속 필요</strong> — 대항요건(입주+전입신고)은 대항력 취득 시뿐 아니라 유지를 위해서도 계속 존속해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전세 대항력 요건 충족 여부, AI가 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">전입신고 일자와 거주 현황을 입력하면 대항력 인정 가능성을 무료로 분석합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대항력을 잃는 위험한 상황 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">다음 상황에서는 대항력을 상실할 수 있으니 반드시 확인하세요.</strong></p>\n<ul>\n<li><strong>주민등록 이전</strong> — 계약 기간 중 다른 곳으로 전입신고를 하면 즉시 대항력을 잃습니다. 출장이나 이사로 일시적으로라도 주민등록을 옮기면 안 됩니다.</li>\n<li><strong>세대원 전원 이전</strong> — 본인이 아니라 세대원 전원의 주민등록이 이전되면 대항력이 소멸합니다.</li>\n<li><strong>임차주택 매수</strong> — 임차인이 임차주택을 매수하여 소유권이전등기를 마치면 주민등록이 임차권 공시가 아닌 소유권 공시가 되므로 대항력이 소멸합니다.</li>\n<li><strong>주민등록 직권말소</strong> — 장기간 부재 등으로 주민등록이 직권말소되면 대항력을 잃습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 잠깐이라도 주민등록을 옮겼다가 다시 돌아오면, 원래의 대항력 순위를 잃고 새로운 순위로 재설정됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주민등록의 대항력 요건 공시방법',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 주민등록이 대항력의 요건을 충족하는 공시방법이 되려면 단순히 형식적으로 주민등록이 되어 있는 것만으로는 부족하고, 주민등록에 의해 표상되는 점유관계가 임차권을 매개로 하는 점유임을 제3자가 인식할 수 있어야 한다고 판시했습니다.',
        takeaway:
          '전입신고만 하면 무조건 대항력이 생기는 것이 아닙니다. 실제로 거주하면서 주민등록이 임차권을 제대로 공시해야 합니다. 특히 임차주택을 매수하면 대항력이 소멸됩니다.',
      },
    ],
    faq: [
      {
        question: '전입신고 다음 날에 근저당이 설정되면 내가 선순위인가요?',
        answer:
          '<p>전입신고 다음 날 0시에 대항력이 발생하므로, 그날 설정된 근저당과는 같은 날 기준이 됩니다. 같은 날이면 등기가 먼저이므로 후순위가 됩니다. 전입신고 하루 전에 등기부를 반드시 확인하세요.</p>',
      },
      {
        question: '가족 중 한 명만 전입신고하면 대항력이 있나요?',
        answer:
          '<p>임차인 본인 또는 가족 중 1인이라도 해당 주소에 주민등록이 되어 있으면 대항력이 유지됩니다. 다만 세대원 전원이 이전하면 대항력을 잃습니다.</p>',
      },
      {
        question: '확정일자를 안 받으면 어떻게 되나요?',
        answer:
          '<p>확정일자 없이는 대항력은 있지만 우선변제권이 없습니다. 경매 시 다른 담보권자보다 우선 배당을 받으려면 반드시 확정일자를 받아야 합니다. 비용은 600원입니다.</p>',
      },
      {
        question: '전입신고를 잠깐 옮겼다가 다시 돌아오면 원래 순위가 유지되나요?',
        answer:
          '<p>아닙니다. 주민등록을 이전한 순간 기존 대항력이 소멸하고, 다시 전입신고하면 그때부터 새로운 대항력이 발생합니다. 원래의 선순위는 회복되지 않습니다.</p>',
      },
      {
        question: '다가구주택에서 동·호수 없이 전입신고하면 대항력이 있나요?',
        answer:
          '<p>동·호수 표시가 없더라도 제3자가 해당 임대차의 존재를 인식할 수 있으면 대항력이 인정될 수 있습니다. 다만 분쟁 시 입증이 어려울 수 있으므로 정확한 호실을 기재하는 것이 안전합니다.</p>',
      },
    ],
    cta: { text: '전세 대항력 요건 체크 AI로 바로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '전세 갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세 경매 배당 우선순위', href: '/guide/jeonse/jeonse-auction-deposit-priority' },
      { label: '전세 보증금 우선변제', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
    ],
  },

  // ── 전세 2. 중개사 확인의무 위반 손해배상 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-broker-liability-failure',
    keyword: '전세 중개사 확인의무 위반 배상',
    questionKeyword: '중개사가 확인을 제대로 안 해서 전세 사기를 당했는데 배상받을 수 있나요?',
    ctaKeyword: '전세 중개사 의무 위반 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 중개사 확인의무 위반 손해배상 청구법 | 로앤가이드',
      description:
        '중개사의 부실 확인으로 전세 피해를 입었다면, 손해배상 청구 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>중개사를 믿고 전세 계약을 했는데, 알고 보니 선순위 근저당이 보증금보다 많았습니다. 다가구주택이라 다른 세입자의 보증금까지 합치면 건물 가격을 넘어섰습니다. 중개사는 "깡통이 아니다"라고 했는데 사실과 달랐습니다. 중개사의 부실한 확인·설명 때문에 피해를 입은 임차인은 손해배상을 청구할 수 있습니다.</p>',
    sections: [
      {
        title: '개업공인중개사의 확인·설명 의무 범위',
        content:
          '<p><strong style="color:#1e3a5f">중개사는 단순히 등기부 내용을 전달하는 것으로 끝나지 않고, 권리관계를 적극적으로 조사·확인해야 합니다.</strong></p>\n<ul>\n<li><strong>등기부 확인</strong> — 근저당권, 가압류, 전세권 등 등기부상 권리관계를 확인하고 설명해야 합니다.</li>\n<li><strong>선순위 임대차 확인</strong> — 다가구주택의 경우 다른 세입자의 보증금 총액, 임대차 시기를 임대인에게 자료를 요구하여 확인해야 합니다.</li>\n<li><strong>자료 미제공 시 대응</strong> — 임대인이 자료 제공을 거부하더라도, 건물 규모와 세대수, 인근 시세로 선순위 보증금 규모를 추산하여 임차인에게 설명해야 합니다.</li>\n<li><strong>중개대상물 확인·설명서</strong> — 확인 결과를 서면으로 작성하여 교부할 의무가 있습니다(공인중개사법 제25조).</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "선순위 다수 있음을 구두로 설명했다"는 정도로는 의무를 다한 것이 아닙니다. 구체적인 금액 추산까지 해야 합니다.</blockquote>',
      },
      {
        title: '중개사 손해배상 청구 요건과 방법',
        content:
          '<p><strong style="color:#1e3a5f">중개사의 의무 위반이 인정되면 공인중개사법 제30조에 따라 배상을 청구합니다.</strong></p>\n<ul>\n<li><strong>배상 의무자</strong> — 개업공인중개사 본인과 중개사무소가 가입한 공제(보증보험)에서 배상받을 수 있습니다.</li>\n<li><strong>공제 한도</strong> — 개인 중개사무소의 경우 보증금액이 1억원인 경우가 많습니다. 법인은 더 높을 수 있습니다.</li>\n<li><strong>청구 절차</strong> — 내용증명으로 손해배상을 청구하고, 합의가 안 되면 소송을 제기합니다. 공제기관(한국공인중개사협회 공제기금)에 직접 청구도 가능합니다.</li>\n<li><strong>인과관계 입증</strong> — "선순위 채권 현황을 알았다면 계약하지 않았을 것"이라는 점을 입증해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>중개사 의무 위반 배상 가능성, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">중개사의 설명 내용과 실제 권리관계를 입력하면 손해배상 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보와 소송 전 준비',
        content:
          '<p><strong style="color:#1e3a5f">중개사의 의무 위반을 입증하려면 계약 당시의 서류와 기록이 핵심입니다.</strong></p>\n<ul>\n<li><strong>중개대상물 확인·설명서</strong> — 계약 시 교부받은 원본을 보관하세요. 선순위 임대차에 대한 기재 내용이 핵심 증거입니다.</li>\n<li><strong>계약 당시 등기부등본</strong> — 계약일 기준 등기부를 발급받아 보관합니다. 근저당 설정 현황을 확인할 수 있습니다.</li>\n<li><strong>문자·카톡 기록</strong> — 중개사와 나눈 대화에서 "안전하다", "깡통 아니다" 등의 발언이 있으면 캡처해 두세요.</li>\n<li><strong>피해액 산정 자료</strong> — 보증금 중 미회수 금액, 이사비용, 정신적 손해 등을 정리합니다.</li>\n<li><strong>감정 자료</strong> — 건물의 시가감정 결과가 있으면 "보증금 회수 불가능"을 입증하기 쉽습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 중개대상물 확인·설명서를 분실한 경우, 중개사무소에 사본 교부를 요청하거나 관할 시·군·구청에서 보관 자료를 확인할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개 시 중개사의 임차인 보호 의무',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 다가구주택 임대차를 중개하는 개업공인중개사는 임대인이 자료 제공을 거부하더라도 건물 규모, 세대수, 인근 시세 등으로 선순위 임대차보증금이 얼마나 있을 수 있는지 조사·확인하여 임차인에게 설명해야 하며, 이를 위반하면 공인중개사법 제30조에 따른 배상책임이 있다고 판시했습니다.',
        takeaway:
          '중개사가 "임대인이 자료를 안 줘서 확인이 안 된다"는 식으로 책임을 회피할 수 없습니다. 추산이라도 해서 위험성을 알려야 의무를 다한 것입니다.',
      },
    ],
    faq: [
      {
        question: '중개사가 폐업했으면 배상을 못 받나요?',
        answer:
          '<p>중개사 개인이 폐업해도 공제기금(보증보험)에 직접 청구할 수 있습니다. 한국공인중개사협회 공제기금이나 해당 보험사에 보상 신청을 하세요.</p>',
      },
      {
        question: '중개사와 임대인 모두에게 배상을 청구할 수 있나요?',
        answer:
          '<p>네, 임대인에게는 보증금 반환 청구를, 중개사에게는 의무 위반에 따른 손해배상을 각각 청구할 수 있습니다. 다만 이중으로 배상받을 수는 없고, 총 손해액 한도 내에서 받게 됩니다.</p>',
      },
      {
        question: '중개대상물 확인·설명서에 서명했으면 책임이 없는 건가요?',
        answer:
          '<p>설명서에 서명했더라도 중개사가 실질적인 확인·설명 의무를 다하지 않았으면 책임이 있습니다. 서명은 교부 사실을 확인하는 것이지 내용의 정확성까지 임차인이 보증하는 것이 아닙니다.</p>',
      },
      {
        question: '공제금 한도를 초과하는 피해는 어떻게 하나요?',
        answer:
          '<p>공제금 한도를 초과하는 부분은 중개사 개인의 재산에서 배상받아야 합니다. 소송을 통해 판결을 받은 뒤 중개사의 재산에 강제집행을 할 수 있습니다.</p>',
      },
      {
        question: '손해배상 소송의 시효는 얼마인가요?',
        answer:
          '<p>불법행위에 기한 손해배상은 피해 사실을 안 날로부터 3년, 불법행위일로부터 10년입니다. 전세 피해를 알게 된 시점부터 3년 이내에 청구해야 합니다.</p>',
      },
    ],
    cta: { text: '중개사 의무 위반 손해배상 가능성 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세보증보험 청구', href: '/guide/jeonse/jeonse-insurance-claim-checklist' },
      { label: '전세 갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세 경매 배당 우선순위', href: '/guide/jeonse/jeonse-auction-deposit-priority' },
      { label: '전세 보증금 우선변제', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
    ],
  },
];
