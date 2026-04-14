import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 해고 5개 + 사기 3개 (batch32)
// 1. dismissal-performance-improvement-plan — PIP 통보 후 해고 대응 (절차형/피해자)
// 2. dismissal-bullying-report-retaliation — 괴롭힘 신고 후 보복해고 (상황형/피해자)
// 3. dismissal-small-business-under5-options — 5인 미만 사업장 해고 구제 (체크리스트형/피해자)
// 4. dismissal-transfer-demotion-constructive — 전보·강등 사실상 해고 (상황형/피해자)
// 5. dismissal-sick-leave-return-fired — 병가 복귀 후 해고 (상황형/피해자)
// 6. fraud-elderly-voice-phishing-recovery — 고령자 보이스피싱 피해 구제 (절차형/피해자)
// 7. fraud-crypto-rug-pull-evidence — 가상자산 러그풀 사기 증거 (체크리스트형/피해자)
// 8. fraud-employment-scam-response — 취업사기 피해 대응 (절차형/피해자)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch32DismissalFraud: SpokePage[] = [
  // ── 해고 1. PIP 성과개선계획 후 해고 대응 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-performance-improvement-plan',
    keyword: 'PIP 성과개선계획 해고 대응',
    questionKeyword: 'PIP 성과개선계획 후 해고당하면 부당해고인가요?',
    ctaKeyword: 'PIP 해고 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'PIP 성과개선계획 후 해고, 부당해고 판단 기준 4가지 | 로앤가이드',
      description:
        'PIP를 통보받고 퇴사 압박을 받고 있다면, 성과개선계획의 적법성과 해고 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 갑자기 "성과개선계획(PIP) 대상자"라는 통보를 받았습니다. 3개월 안에 개선하지 않으면 해고 절차를 밟겠다는 내용입니다. PIP가 해고의 정당한 사유가 되려면 구체적인 요건이 필요합니다. PIP 절차에 하자가 있으면 부당해고를 다툴 수 있습니다.</p>',
    sections: [
      {
        title: 'PIP가 정당한 해고 사유가 되려면 갖춰야 할 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">PIP 자체가 해고 사유가 아닙니다. PIP를 거쳤더라도 해고가 정당하려면 아래 요건을 모두 충족해야 합니다.</strong></p>\n<ol>\n<li><strong>객관적 평가 기준 제시</strong> — 회사가 "성과 미달"이라고 할 때, 구체적이고 측정 가능한 기준이 사전에 제시되었어야 합니다. 막연한 "태도 불량"이나 "기대에 못 미침"은 정당한 사유가 되기 어렵습니다.</li>\n<li><strong>개선 기회와 지원 제공</strong> — 단순히 "3개월 내 개선하라"는 통보만으로는 부족합니다. 교육·멘토링·업무 조정 등 실질적 개선 지원이 있었는지가 중요합니다.</li>\n<li><strong>공정한 평가 절차</strong> — PIP 기간 동안의 평가가 동일한 기준으로 이루어졌는지, 평가자가 편향되지 않았는지 확인해야 합니다.</li>\n<li><strong>해고 외 대안 검토</strong> — 배치전환, 직무 변경 등 해고보다 가벼운 조치를 먼저 검토했는지도 정당성 판단의 핵심입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 법원은 "근로자의 업무능력 부족을 이유로 해고하려면, 교육훈련 등을 통해 근로자에게 개선 기회를 부여했어야 한다"고 일관되게 판시합니다.</blockquote>',
      },
      {
        title: 'PIP 통보를 받았을 때 즉시 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">PIP는 해고의 전 단계입니다. 통보 즉시 증거를 확보하고 대응 전략을 세워야 합니다.</strong></p>\n<ul>\n<li><strong>PIP 문서 전체 사본 확보</strong> — PIP 통보서, 평가 기준표, 개선 목표를 서면으로 받으세요. 구두 통보만 있었다면 이메일로 내용 확인을 요청하고 기록을 남기세요.</li>\n<li><strong>기존 인사평가 기록 수집</strong> — 과거 인사평가에서 "보통" 이상이었는데 갑자기 PIP 대상이 되었다면, 해고를 위한 절차 밟기(밀어내기)일 가능성이 큽니다.</li>\n<li><strong>PIP 이전 퇴사 압박 기록</strong> — "그만두는 게 서로 좋겠다"는 상사의 발언, 퇴사 권유 이메일 등은 PIP의 진정한 목적이 성과개선이 아닌 해고임을 입증하는 핵심 증거입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>PIP 통보 후 부당해고 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">PIP 내용을 입력하면 해고의 정당성 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'PIP 후 해고가 부당해고로 인정되는 대표적 경우',
        content:
          '<p><strong style="color:#1e3a5f">아래 상황에 해당하면 PIP를 거쳤더라도 해고가 부당할 수 있습니다.</strong></p>\n<ul>\n<li><strong>보복형 PIP</strong> — 내부 고발, 노조 활동, 육아휴직 복귀 직후 PIP를 부과했다면 보복적 목적이 의심됩니다.</li>\n<li><strong>달성 불가능한 목표</strong> — 동일 직급 평균 대비 지나치게 높은 목표를 설정하거나, 업무 지원 없이 혼자 달성하도록 방치한 경우입니다.</li>\n<li><strong>다른 직원과 차별적 적용</strong> — 동일한 성과인데 특정 직원에게만 PIP를 적용했다면 차별적 해고 시도로 볼 수 있습니다.</li>\n<li><strong>서면 해고 통지 미비</strong> — PIP 기간 종료 후 해고할 때에도 해고 사유와 시기를 서면으로 통지해야 합니다. 서면 통지 없는 해고는 그 자체로 부당합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제신청 후 원직복직·임금 지급 시 구제이익',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급했더라도 특별한 사정이 없는 한 근로자가 금전보상명령을 받을 구제이익이 소멸하지 않는다고 판시했습니다.',
        takeaway:
          'PIP 후 해고되었다가 복직 처리되었어도 금전보상명령 등 추가 구제를 받을 수 있으니, 부당해고 구제신청을 포기하지 마세요.',
      },
    ],
    faq: [
      {
        question: 'PIP를 거부하면 어떻게 되나요?',
        answer:
          '<p>PIP 참여를 거부한다고 해서 즉시 해고 사유가 되는 것은 아닙니다. 다만 개선 기회를 스스로 포기한 것으로 해석될 수 있으므로, 참여하되 불합리한 부분은 서면으로 이의를 제기하는 것이 유리합니다.</p>',
      },
      {
        question: 'PIP 기간 중 사직서를 쓰라고 하면 거부해도 되나요?',
        answer:
          '<p>당연히 거부할 수 있습니다. PIP 기간 중 사직을 권유하는 것은 회사가 해고 절차의 부담을 피하려는 것입니다. 사직서를 쓰면 부당해고 구제신청이 불가능해집니다.</p>',
      },
      {
        question: 'PIP 목표 달성률을 회사가 일방적으로 판단해도 되나요?',
        answer:
          '<p>평가 기준이 사전에 객관적으로 설정되어 있어야 합니다. 회사가 일방적으로 "미달"을 판정했다면 해고의 정당성에 의문이 생기며, 부당해고로 다툴 수 있는 근거가 됩니다.</p>',
      },
      {
        question: 'PIP 대상자인데 노동위원회에 미리 구제신청할 수 있나요?',
        answer:
          '<p>구제신청은 실제 해고가 이루어진 후에 가능합니다. 다만 PIP 기간 중 증거를 확보해두면 해고 후 신속하게 구제신청을 할 수 있습니다. 해고일로부터 3개월 이내에 신청하세요.</p>',
      },
      {
        question: '대기업 PIP와 중소기업 PIP에 법적 차이가 있나요?',
        answer:
          '<p>법적으로 PIP에 대한 별도 규정은 없습니다. 대기업·중소기업 구분 없이 해고의 정당한 사유와 절차를 갖추었는지가 핵심입니다. 다만 5인 미만 사업장은 근로기준법상 해고 제한 규정이 적용되지 않습니다.</p>',
      },
    ],
    cta: { text: 'PIP 해고 부당성 AI로 무료 판단', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고 첫 대응', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계해고 과도한 경우', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
    ],
  },

  // ── 해고 2. 직장 내 괴롭힘 신고 후 보복해고 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-bullying-report-retaliation',
    keyword: '직장 내 괴롭힘 신고 보복해고',
    questionKeyword: '직장 내 괴롭힘을 신고했는데 해고당했어요, 보복해고인가요?',
    ctaKeyword: '괴롭힘 보복해고 구제 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '직장 내 괴롭힘 신고 후 보복해고 — 대응 방법 3단계 | 로앤가이드',
      description:
        '직장 내 괴롭힘을 신고했다가 해고당했다면, 보복해고의 부당성을 입증하는 구체적인 방법을 지금 확인하세요.',
    },
    intro:
      '<p>직장 내 괴롭힘을 신고한 직후, 갑자기 "업무 능력 부족"을 이유로 해고 통보를 받았습니다. 신고 전에는 아무 문제가 없었는데, 신고 후 태도가 돌변한 회사를 어떻게 대응해야 할지 막막합니다. 괴롭힘 신고 후 해고는 근로기준법이 금지하는 불이익 조치에 해당할 수 있습니다.</p>',
    sections: [
      {
        title: '근로기준법이 금지하는 신고 후 불이익 조치',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제76조의3 제6항은 직장 내 괴롭힘 신고를 이유로 불이익 조치를 하는 것을 금지하고 있습니다.</strong></p>\n<ul>\n<li><strong>해고·파면·정직·감봉</strong> — 신고자나 피해자를 해고하거나 징계하는 것은 대표적인 불이익 조치입니다.</li>\n<li><strong>전보·배치전환</strong> — 신고 직후 불리한 부서로 전보시키는 것도 불이익 조치에 해당합니다.</li>\n<li><strong>업무에서 배제·따돌림</strong> — 신고자를 업무에서 제외하거나 조직적으로 따돌리는 행위도 포함됩니다.</li>\n<li><strong>위반 시 제재</strong> — 불이익 조치를 한 사용자는 3년 이하의 징역 또는 3천만 원 이하의 벌금에 처합니다(근로기준법 제109조).</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신고 시점과 해고 시점이 가까울수록 보복해고로 인정될 가능성이 높아집니다. 시간적 근접성은 강력한 정황 증거입니다.</blockquote>',
      },
      {
        title: '보복해고를 입증하기 위한 3단계 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">보복해고를 다투려면 "신고 때문에 해고당했다"는 인과관계를 입증해야 합니다.</strong></p>\n<ol>\n<li><strong>시간적 근접성 입증</strong> — 괴롭힘 신고 일자와 해고 통보 일자의 간격이 짧을수록 보복 의도를 추정할 수 있습니다. 신고 접수 확인서, 해고 통지서의 날짜를 확보하세요.</li>\n<li><strong>해고 사유의 허위성 입증</strong> — 회사가 주장하는 "업무 능력 부족" 등이 사실과 다르다면, 신고 전 인사평가 결과, 업무 실적 자료, 동료 평가 등으로 반박하세요.</li>\n<li><strong>신고 전후 태도 변화 기록</strong> — 신고 전에는 정상적으로 업무를 수행했는데 신고 후 갑자기 문제가 제기되었다면, 전후 비교 자료를 확보하세요. 카카오톡·이메일·업무 일지 등이 유용합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>괴롭힘 신고 후 해고, 보복해고 해당 여부를 AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">신고 시점과 해고 사유를 입력하면 보복해고 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보복해고 시 활용할 수 있는 구제 수단',
        content:
          '<p><strong style="color:#1e3a5f">보복해고는 일반 부당해고보다 더 강력한 보호를 받습니다.</strong></p>\n<ul>\n<li><strong>노동위원회 구제신청</strong> — 해고일로부터 3개월 이내에 지방노동위원회에 부당해고 구제신청을 제출하세요. 보복해고라는 점을 함께 주장하면 됩니다.</li>\n<li><strong>고용노동부 신고</strong> — 근로기준법 제76조의3 위반으로 사용자를 고용노동부에 신고하세요. 형사처벌과 행정제재가 가능합니다.</li>\n<li><strong>해고무효확인 소송</strong> — 노동위원회 구제와 별도로 법원에 해고무효확인 소송을 제기할 수 있습니다. 해고 기간의 임금도 청구 가능합니다.</li>\n<li><strong>국가인권위원회 진정</strong> — 괴롭힘의 원인이 성별·장애·나이 등 차별에 기반한 경우 국가인권위원회에 진정할 수도 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구제명령 위반 사용자의 업무지시와 징계',
        summary:
          '대법원 2019두40260 사건(대법원, 2023.06.15 선고)에서 법원은 사용자가 구제명령에 반하는 업무지시를 하고 근로자가 이를 거부했다는 이유로 징계하는 것은 원칙적으로 정당하지 않다고 판시했습니다.',
        takeaway:
          '부당해고 구제명령을 받은 뒤에도 회사가 불이익 조치를 계속한다면, 추가 구제를 받을 수 있습니다. 구제명령 위반에 대한 이행강제금 부과도 가능합니다.',
      },
    ],
    faq: [
      {
        question: '신고한 지 6개월 후에 해고당했는데도 보복해고로 볼 수 있나요?',
        answer:
          '<p>시간이 다소 경과했더라도, 신고 후 업무 배제·인사평가 불이익 등이 지속되었고 그 연장선에서 해고가 이루어졌다면 보복해고로 인정될 수 있습니다. 신고 후 불이익 조치의 연속성을 입증하는 것이 중요합니다.</p>',
      },
      {
        question: '괴롭힘 가해자가 아닌 회사(사용자)를 상대로 구제신청하나요?',
        answer:
          '<p>부당해고 구제신청은 사용자(회사)를 상대로 합니다. 괴롭힘 가해자 개인에 대해서는 별도로 손해배상 청구나 형사 고소를 할 수 있습니다.</p>',
      },
      {
        question: '괴롭힘 신고를 익명으로 했는데 회사가 신고자를 알아낸 경우에도 보호받나요?',
        answer:
          '<p>신고 방법과 관계없이 괴롭힘 신고자는 보호됩니다. 회사가 신고자의 신원을 파악하여 불이익 조치를 했다면 오히려 더 강력한 보복해고의 증거가 됩니다.</p>',
      },
      {
        question: '괴롭힘 조사가 끝나기 전에 해고당하면 어떻게 해야 하나요?',
        answer:
          '<p>조사 완료 전 해고는 절차적으로도 문제가 됩니다. 즉시 노동위원회에 구제신청하고, 고용노동부에도 불이익 조치 신고를 하세요.</p>',
      },
    ],
    cta: { text: '보복해고 구제 가능성 AI로 확인', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '권고사직 주의사항', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
    ],
  },

  // ── 해고 3. 5인 미만 사업장 해고 구제 방법 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-small-business-under5-options',
    keyword: '5인 미만 사업장 해고 구제 방법',
    questionKeyword: '5인 미만 사업장에서 해고당하면 구제받을 수 있나요?',
    ctaKeyword: '5인 미만 사업장 해고 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 해고 구제 방법 3가지 — 부당해고 대응 | 로앤가이드',
      description:
        '5인 미만 사업장에서 해고되어 구제 방법을 모르겠다면, 근로기준법 외 대응 수단과 민사소송 절차를 지금 확인하세요.',
    },
    intro:
      '<p>직원이 3명뿐인 작은 회사에서 하루아침에 해고 통보를 받았습니다. 노동위원회에 구제신청을 하려 했지만 "5인 미만 사업장은 해고 제한 규정이 적용되지 않는다"는 이야기를 듣고 막막해졌습니다. 하지만 5인 미만이라도 아예 보호가 없는 것은 아닙니다.</p>',
    sections: [
      {
        title: '5인 미만 사업장에서 적용되지 않는 규정과 적용되는 규정',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제11조 제2항에 따라 5인 미만 사업장에는 해고 제한 규정의 상당 부분이 적용되지 않습니다.</strong></p>\n<ul>\n<li><strong>적용되지 않는 규정</strong> — 정당한 이유 없는 해고 금지(제23조), 해고예고(제26조), 경영상 해고 절차(제24조) 등이 적용되지 않습니다. 노동위원회 부당해고 구제신청도 불가합니다.</li>\n<li><strong>적용되는 규정</strong> — 근로계약서 작성·교부, 임금 지급, 퇴직금, 연차휴가(일부), 근로시간 등은 사업장 규모와 관계없이 적용됩니다.</li>\n<li><strong>차별금지법</strong> — 성별·나이·장애 등을 이유로 한 해고는 남녀고용평등법, 장애인차별금지법 등에 따라 사업장 규모와 관계없이 금지됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "5인 미만이니 아무렇게나 해고해도 된다"는 잘못된 인식입니다. 민법상 보호와 차별금지법에 의한 보호는 여전히 존재합니다.</blockquote>',
      },
      {
        title: '5인 미만 사업장 근로자가 활용할 수 있는 3가지 구제 수단',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 구제신청이 불가하더라도 아래 수단으로 해고에 대응할 수 있습니다.</strong></p>\n<ol>\n<li><strong>민사소송(해고무효확인·임금 청구)</strong> — 근로계약의 해지가 민법상 신의칙에 반하거나 권리남용에 해당하면 법원에서 해고의 효력을 다툴 수 있습니다. 해고가 무효로 확인되면 해고 기간 동안의 임금도 청구 가능합니다.</li>\n<li><strong>차별적 해고 시 행정구제</strong> — 성별·임신·출산을 이유로 한 해고는 남녀고용평등법 위반으로 고용노동부에 신고할 수 있습니다. 노동위원회 차별시정 신청도 가능합니다.</li>\n<li><strong>체불임금·퇴직금 청구</strong> — 해고와 함께 임금이나 퇴직금을 받지 못했다면 고용노동부에 진정하세요. 5인 미만이라도 임금·퇴직금 체불은 형사처벌 대상입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>5인 미만 사업장 해고, 어떤 구제 수단이 가능한지 AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 상황을 입력하면 활용 가능한 법적 수단을 무료로 안내받으세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '5인 미만인지 판단하는 기준 — 상시 근로자 수 계산법',
        content:
          '<p><strong style="color:#1e3a5f">상시 근로자 수는 단순히 현재 직원 수가 아니라, 일정 기간의 평균으로 판단합니다.</strong></p>\n<ul>\n<li><strong>산정 방식</strong> — 해고일 전 1개월간 사용한 근로자의 연인원을 같은 기간의 가동일수로 나누어 계산합니다.</li>\n<li><strong>포함 대상</strong> — 정규직, 계약직, 파트타임 모두 포함됩니다. 파견근로자는 파견회사 소속이므로 제외됩니다.</li>\n<li><strong>복수 사업장</strong> — 같은 사용자가 여러 사업장을 운영하는 경우, 각 사업장별로 상시 근로자 수를 산정합니다. 다만 하나의 장소에서 유기적으로 운영되면 하나의 사업장으로 볼 수 있습니다.</li>\n<li><strong>경계 사례</strong> — 상시 근로자 수가 5인을 넘나드는 경우, 해고 시점을 기준으로 판단하므로 근로자 수 변동 기록을 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 5인 미만 사업장의 근로기준법 적용 범위',
        summary:
          '대법원 2023두57876 사건(대법원, 2024.10.25 선고)에서 법원은 상시 5명 이상의 근로자를 사용하는 "사업 또는 사업장"의 판단은 경영상 일체를 이루면서 유기적으로 운영되는 단위를 기준으로 하며, 별개 법인이라도 예외적으로 하나의 사업장으로 볼 수 있다고 판시했습니다.',
        takeaway:
          '직원이 4명이라도, 다른 법인과 실질적으로 하나의 사업장으로 운영된다면 5인 이상으로 판단될 수 있어 해고 제한 규정이 적용됩니다.',
      },
    ],
    faq: [
      {
        question: '5인 미만 사업장에서는 해고예고수당도 안 나오나요?',
        answer:
          '<p>근로기준법상 해고예고 규정(제26조)은 5인 미만 사업장에 적용되지 않습니다. 따라서 30일 전 예고 없이 해고해도 해고예고수당 지급 의무가 없습니다. 다만 근로계약서에 해고예고 조항이 있다면 이에 따라 청구할 수 있습니다.</p>',
      },
      {
        question: '사장님 포함해서 5명이면 5인 이상 사업장인가요?',
        answer:
          '<p>사용자(사업주) 본인은 근로자에 포함되지 않습니다. 근로기준법상 근로자란 임금을 목적으로 종속적 관계에서 근로를 제공하는 자를 말하므로, 사업주를 제외한 근로자가 5명 이상이어야 합니다.</p>',
      },
      {
        question: '5인 미만인데 부당하게 해고당하면 실업급여라도 받을 수 있나요?',
        answer:
          '<p>5인 미만 사업장이라도 고용보험에 가입되어 있다면 비자발적 이직으로 실업급여를 받을 수 있습니다. 해고 사실을 증명할 수 있는 서류를 준비하세요.</p>',
      },
      {
        question: '알바생인데 5인 미만이라 해고되면 아무것도 못 하나요?',
        answer:
          '<p>알바(단시간 근로자)도 근로계약이 존재합니다. 계약기간 중 부당한 해고는 민법상 계약 위반으로 손해배상을 청구할 수 있고, 체불임금·퇴직금(1년 이상 근무 시)도 청구 가능합니다.</p>',
      },
      {
        question: '5인 미만 사업장에서 민사소송을 하면 승소 가능성이 있나요?',
        answer:
          '<p>해고가 신의칙에 반하거나 권리남용에 해당하는 경우(예: 보복 해고, 차별적 해고) 민사소송에서 해고 무효를 인정받을 수 있습니다. 다만 노동위원회 구제에 비해 시간과 비용이 더 들 수 있으므로 법률구조공단 등의 무료 법률지원 활용을 검토하세요.</p>',
      },
    ],
    cta: { text: '5인 미만 사업장 해고 대응 방법 AI 상담', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고 어디서부터', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 구제신청서', href: '/guide/dismissal/unfair-dismissal-relief-application-form' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 주의사항', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
    ],
  },

  // ── 해고 4. 전보·강등 사실상 해고(부당전직) ──
  {
    domain: 'dismissal',
    slug: 'dismissal-transfer-demotion-constructive',
    keyword: '전보 강등 사실상 해고 부당전직',
    questionKeyword: '전보·강등 명령이 사실상 해고와 같은 효력이 있나요?',
    ctaKeyword: '부당전직 구제 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전보·강등이 사실상 해고? 부당전직 판단 기준 3가지 | 로앤가이드',
      description:
        '갑작스러운 전보·강등 명령을 받아 퇴직을 강요당하고 있다면, 부당전직의 판단 기준과 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 전혀 관련 없는 부서로 전보 명령을 받았습니다. 기존 직급에서 2단계나 강등되고, 급여도 대폭 줄었습니다. "사표 내라"는 말은 없지만, 사실상 퇴직을 강요하는 것이나 다름없습니다. 이런 전보·강등이 부당하다면 해고와 같은 구제를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '전보·강등이 "사실상 해고"로 인정되는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 전보·강등이 근로자에게 통상 감수해야 할 범위를 넘는 불이익을 주면 정당한 인사권 행사가 아니라고 봅니다.</strong></p>\n<ol>\n<li><strong>업무 내용의 현저한 변경</strong> — 기존 전문 분야와 전혀 관련 없는 업무를 부여하거나, 업무 자체를 주지 않고 방치하는 경우 부당전직에 해당합니다.</li>\n<li><strong>임금·직급의 대폭 하락</strong> — 전보·강등으로 인해 급여가 현저히 감소하거나 직급이 부당하게 낮아지면, 실질적으로 근로조건의 불이익 변경에 해당합니다.</li>\n<li><strong>보복·퇴직 강요 목적</strong> — 내부 고발, 노조 활동, 개인적 감정 등 부당한 동기에 의한 전보·강등은 정당한 인사권 행사로 볼 수 없습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대법원은 "전보명령이 정당한 인사권 행사가 되려면 업무상 필요성과 근로자가 입는 불이익을 비교 형량해야 한다"고 판시합니다.</blockquote>',
      },
      {
        title: '부당전직에 대응하는 구체적 방법',
        content:
          '<p><strong style="color:#1e3a5f">전보·강등 명령을 받았다면, 사표를 쓰기 전에 아래 절차를 밟으세요.</strong></p>\n<ul>\n<li><strong>서면으로 이유 요구</strong> — 전보·강등의 구체적 사유를 서면으로 요청하세요. 회사가 합리적 이유를 제시하지 못하면 부당성의 근거가 됩니다.</li>\n<li><strong>전보 명령서·인사발령문 확보</strong> — 전보 전후의 직급·급여·업무 내용 변경을 증명할 수 있는 서류를 확보하세요.</li>\n<li><strong>부당해고 구제신청</strong> — 전보·강등이 사실상 해고에 해당한다면 노동위원회에 부당해고 구제신청이 가능합니다. 전보 명령일로부터 3개월 이내에 신청하세요.</li>\n<li><strong>전보 거부 시 주의</strong> — 전보 명령을 즉시 거부하면 "근무태만" 등을 이유로 징계받을 수 있습니다. 이의를 제기하면서도 일단 출근하고, 법적 다툼을 병행하는 것이 안전합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전보·강등이 부당전직인지 AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">전보 내용을 입력하면 부당전직 여부와 구제 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '전보·강등 후 자발적 퇴직 시 불이익',
        content:
          '<p><strong style="color:#1e3a5f">부당한 전보·강등을 견디지 못해 스스로 퇴직하면 구제받기 어려워집니다.</strong></p>\n<ul>\n<li><strong>자진 사직 처리 위험</strong> — 사직서를 제출하면 "자발적 퇴직"으로 처리되어 부당해고 구제신청이 원칙적으로 불가능합니다.</li>\n<li><strong>실업급여 불이익</strong> — 자진 사직으로 처리되면 실업급여 수급에도 불리해질 수 있습니다. 다만 부당한 전보·강등으로 인한 퇴직이 인정되면 비자발적 이직으로 처리될 수 있습니다.</li>\n<li><strong>사직 강요 증거 확보</strong> — "이 조건이 싫으면 나가라"는 취지의 발언, 퇴직 종용 정황은 모두 녹음이나 문자로 기록해두세요. 나중에 구제신청 시 핵심 증거가 됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구제명령에 반하는 전보·업무지시의 부당성',
        summary:
          '대법원 2019두40260 사건(대법원, 2023.06.15 선고)에서 법원은 노동위원회의 구제명령은 공정력이 있으므로, 사용자가 구제명령에 반하는 업무지시(부당전직 포함)를 하고 근로자가 이를 거부했다는 이유로 징계하는 것은 원칙적으로 정당하지 않다고 판시했습니다.',
        takeaway:
          '구제명령을 받은 후에도 회사가 부당한 전보·배치를 계속한다면, 이행강제금 부과 신청과 추가 구제를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '전보 명령을 거부하면 바로 해고당할 수 있나요?',
        answer:
          '<p>정당한 전보 명령을 거부하면 징계 사유가 될 수 있습니다. 다만 전보 명령 자체가 부당하다면 거부에 대한 징계도 부당합니다. 일단 전보에 응하면서 이의를 서면으로 제기하고, 동시에 구제 절차를 진행하는 것이 안전합니다.</p>',
      },
      {
        question: '강등과 동시에 급여가 줄었는데 급여 차액을 청구할 수 있나요?',
        answer:
          '<p>강등이 부당하다면 강등 전 직급에 해당하는 급여를 받을 권리가 있습니다. 부당전직이 인정되면 강등 기간 동안의 급여 차액도 청구 가능합니다.</p>',
      },
      {
        question: '취업규칙에 "회사는 전보할 수 있다"고 되어 있으면 무조건 따라야 하나요?',
        answer:
          '<p>취업규칙에 전보 조항이 있더라도 무제한적 인사권이 인정되는 것은 아닙니다. 업무상 필요성, 근로자의 불이익 정도, 전보의 동기 등을 종합하여 정당성이 판단됩니다.</p>',
      },
      {
        question: '전보 명령 후 3개월이 지나면 구제신청을 못 하나요?',
        answer:
          '<p>부당전직도 부당해고에 준하여 구제신청이 가능한데, 전보 명령일로부터 3개월 이내에 신청해야 합니다. 기한을 넘기면 법원에 별도의 소송으로 다투어야 합니다.</p>',
      },
    ],
    cta: { text: '부당전직 구제 가능성 AI 분석', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 첫 대응', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고 어디서부터', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '권고사직 함정', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
    ],
  },

  // ── 해고 5. 병가·산재 치료 복귀 후 해고 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-sick-leave-return-fired',
    keyword: '병가 복귀 후 해고 부당해고',
    questionKeyword: '병가 복귀 후 해고를 당했는데 부당해고인가요?',
    ctaKeyword: '병가 복귀 해고 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '병가·산재 복귀 후 해고, 부당해고 판단 기준 3가지 | 로앤가이드',
      description:
        '병가나 산재 치료 후 복귀했는데 해고 통보를 받았다면, 해고 제한 기간과 부당성 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>업무 중 다쳐서 6개월간 산재 치료를 받았습니다. 복귀한 지 일주일 만에 "복귀 후 업무 적응이 어렵다"는 이유로 해고 통보를 받았습니다. 근로기준법은 업무상 부상·질병의 요양 기간과 그 후 30일간 해고를 절대적으로 금지합니다. 이 기간 내 해고는 원칙적으로 무효입니다.</p>',
    sections: [
      {
        title: '근로기준법 제23조 제2항 — 절대적 해고 제한 기간',
        content:
          '<p><strong style="color:#1e3a5f">업무상 부상·질병으로 요양하는 기간과 그 후 30일간은 어떤 이유로도 해고할 수 없습니다.</strong></p>\n<ul>\n<li><strong>요양 기간의 범위</strong> — 정상적인 노동력을 상실하여 출근을 전혀 할 수 없는 경우뿐 아니라, 노동력을 일부 상실하여 치료를 계속하면서 부분적으로 근로하는 "부분 휴업"도 포함됩니다.</li>\n<li><strong>30일 보호기간</strong> — 요양이 끝난 후 30일간은 근로자가 노동력을 회복하는 데 필요한 최소한의 보호기간입니다. 이 기간 내 해고는 절대적으로 무효입니다.</li>\n<li><strong>시용(수습) 근로자도 보호</strong> — 시용 기간 중이라도 업무상 부상으로 요양 중이면 해고하거나 본계약 체결을 거부할 수 없습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대법원은 "부분 휴업도 요양 기간에 포함되며, 이 기간의 해고 제한은 절대적"이라고 판시합니다.</blockquote>',
      },
      {
        title: '병가 복귀 후 해고가 부당한 3가지 대표 사례',
        content:
          '<p><strong style="color:#1e3a5f">30일 보호기간이 지났더라도 아래 경우에는 부당해고에 해당합니다.</strong></p>\n<ol>\n<li><strong>복귀 직후 업무 배제</strong> — 복귀한 근로자에게 아무 업무를 주지 않거나 핵심 업무에서 배제한 뒤 "업무 능력 부족"을 이유로 해고하는 것은 정당한 사유가 아닙니다.</li>\n<li><strong>원직 복귀 거부</strong> — 치료 전과 동일한 직무로 복귀시키지 않고 현저히 불리한 직무를 배정한 후 퇴사를 유도하는 경우입니다.</li>\n<li><strong>치료 미완료 상태 해고</strong> — 아직 치료가 완전히 끝나지 않았는데 "더 이상 기다릴 수 없다"며 해고하는 것은 해고 제한 기간 내 해고에 해당합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>병가 복귀 후 해고의 부당성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">치료 기간과 해고 시점을 입력하면 해고 제한 위반 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '병가·산재 복귀 후 해고에 대한 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고 제한 기간 내 해고는 당연 무효이지만, 구제를 받으려면 적극적으로 대응해야 합니다.</strong></p>\n<ul>\n<li><strong>노동위원회 구제신청</strong> — 해고일로부터 3개월 이내에 지방노동위원회에 부당해고 구제신청을 제출하세요. 해고 제한 기간 내 해고라는 점을 주장하면 됩니다.</li>\n<li><strong>산재보험 관련 확인</strong> — 업무상 재해로 치료받은 경우, 근로복지공단에서 산재 인정을 받았는지 확인하세요. 산재 인정 여부는 해고 제한 기간의 적용에 중요합니다.</li>\n<li><strong>진단서·치료 기록 확보</strong> — 요양 기간을 입증할 수 있는 진단서, 치료 기록, 휴업급여 수급 내역을 확보하세요. 부분 휴업 기간도 포함된다는 점을 기억하세요.</li>\n<li><strong>고용노동부 신고</strong> — 근로기준법 제23조 제2항 위반은 5년 이하의 징역 또는 5천만 원 이하의 벌금에 해당합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 요양 기간 해고 제한의 절대적 효력',
        summary:
          '대법원 2018두43958 사건(대법원, 2021.04.29 선고)에서 법원은 업무상 부상의 요양을 위한 휴업에는 부분 휴업도 포함되며, 시용 근로관계에 있는 근로자라도 요양 중에는 해고하거나 본계약 체결을 거부할 수 없다고 판시했습니다.',
        takeaway:
          '출근하면서 치료를 병행하는 부분 휴업 기간도 해고 제한 대상입니다. 수습 기간이라도 업무상 재해 중 해고는 절대 금지됩니다.',
      },
    ],
    faq: [
      {
        question: '개인 질병(업무와 무관한 병)으로 병가 후 복귀했는데 해고당하면?',
        answer:
          '<p>근로기준법 제23조 제2항의 해고 제한은 "업무상 부상·질병"에만 적용됩니다. 개인 질병으로 인한 병가의 경우 해고 제한 규정이 직접 적용되지 않지만, 병가 직후 해고가 정당한 이유 없이 이루어졌다면 부당해고로 다툴 수 있습니다.</p>',
      },
      {
        question: '산재 치료 중인데 회사가 "자진 퇴사하면 합의금을 주겠다"고 합니다. 응해야 하나요?',
        answer:
          '<p>신중하게 판단하세요. 요양 기간 중 해고가 금지되므로 법적으로 유리한 위치에 있습니다. 합의금이 부당해고 구제 시 받을 수 있는 금전보상(임금 상당액)보다 적다면 서두를 필요가 없습니다.</p>',
      },
      {
        question: '복귀 후 30일이 지나면 바로 해고해도 되나요?',
        answer:
          '<p>30일 보호기간이 지나면 절대적 해고 제한은 해제되지만, 여전히 해고에 정당한 사유가 필요합니다(근로기준법 제23조 제1항). 복귀 직후 충분한 적응 기간 없이 해고하면 정당한 사유가 인정되기 어렵습니다.</p>',
      },
      {
        question: '산재 인정을 못 받았는데 해고 제한이 적용되나요?',
        answer:
          '<p>해고 제한 규정은 "업무상 부상·질병의 요양"을 요건으로 합니다. 산재 인정 여부와 별개로 실제로 업무상 부상이 있었다면 해고 제한이 적용될 수 있습니다. 다만 산재 인정을 받아두는 것이 입증에 유리합니다.</p>',
      },
    ],
    cta: { text: '병가 복귀 후 해고 부당성 AI 판단', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고 어디서부터', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '해고사유 서면요구', href: '/guide/dismissal/dismissal-reason-request-template' },
    ],
  },

  // ── 사기 6. 고령자 보이스피싱 피해 구제 ──
  {
    domain: 'fraud',
    slug: 'fraud-elderly-voice-phishing-recovery',
    keyword: '고령자 보이스피싱 피해 구제',
    questionKeyword: '보이스피싱에 속아 돈을 보냈는데 돌려받을 수 있나요?',
    ctaKeyword: '보이스피싱 피해 구제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '고령자 보이스피싱 피해 구제 절차 4단계 — 환급 방법 | 로앤가이드',
      description:
        '부모님이 보이스피싱에 속아 돈을 보냈다면, 피해금 환급 절차와 계좌 지급정지 방법을 지금 확인하세요.',
    },
    intro:
      '<p>검찰을 사칭한 전화를 받은 어머니가 "계좌가 범죄에 이용되었다"는 말에 속아 3,000만 원을 이체했습니다. 뒤늦게 보이스피싱임을 알았지만, 이미 돈은 빠져나간 후입니다. 보이스피싱 피해는 빠르게 대응할수록 환급 가능성이 높아집니다. 즉시 해야 할 4단계를 정리합니다.</p>',
    sections: [
      {
        title: '보이스피싱 피해 즉시 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">피해를 인지한 즉시, 아래 4단계를 순서대로 진행하세요. 시간이 생명입니다.</strong></p>\n<ol>\n<li><strong>1단계: 은행 지급정지 요청</strong> — 돈을 보낸 은행에 즉시 전화하여 "보이스피싱 피해 계좌 지급정지"를 요청하세요. 은행 영업시간 외에는 경찰(112)에 요청하면 됩니다. 피해금이 인출되기 전에 지급정지가 되면 환급 가능성이 높아집니다.</li>\n<li><strong>2단계: 경찰 신고(112)</strong> — 경찰에 보이스피싱 사기 피해를 신고하세요. 사건사고 사실확인원이 발급되며, 이후 피해환급금 신청에 필요합니다.</li>\n<li><strong>3단계: 금융감독원 신고(1332)</strong> — 금융감독원에 전기통신금융사기 피해를 신고하세요. 피해환급금 지급 절차가 개시됩니다.</li>\n<li><strong>4단계: 개인정보 유출 차단</strong> — 보이스피싱 과정에서 주민등록번호, 계좌번호 등을 알려줬다면 개인정보노출자 사고예방시스템(금융감독원)에 등록하여 추가 피해를 방지하세요.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 지급정지는 빠를수록 좋습니다. 피해 인지 후 30분 이내에 은행에 연락하면 환급 가능성이 크게 높아집니다.</blockquote>',
      },
      {
        title: '피해환급금 신청 절차와 환급 기준',
        content:
          '<p><strong style="color:#1e3a5f">통신사기피해환급법에 따라 피해금의 전부 또는 일부를 돌려받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>피해환급금이란</strong> — 지급정지된 사기 이용 계좌에 남아 있는 잔액을 피해자에게 돌려주는 제도입니다. 잔액이 없으면 환급이 어렵습니다.</li>\n<li><strong>신청 방법</strong> — 경찰 사건접수 후, 피해금을 이체한 금융회사에 피해환급금 지급을 신청합니다. 필요 서류: 사건사고 사실확인원, 신분증, 피해 거래 내역서.</li>\n<li><strong>환급 소요기간</strong> — 지급정지일부터 2개월의 채권소멸 절차를 거친 후 환급이 이루어집니다. 다만 잔액이 1천만 원 이하이면 간편절차로 14일 내 환급이 가능합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>보이스피싱 피해, 환급 가능성을 AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 금액과 경과 시간을 입력하면 환급 절차를 무료로 안내받으세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고령자 보이스피싱 특별 유의사항',
        content:
          '<p><strong style="color:#1e3a5f">고령자는 보이스피싱의 주요 표적이며, 가족의 빠른 개입이 중요합니다.</strong></p>\n<ul>\n<li><strong>원격제어 앱 삭제</strong> — 범인이 설치하라고 한 원격제어 앱(팀뷰어, 애니데스크 등)이 있다면 즉시 삭제하세요. 앱을 통해 추가 피해가 발생할 수 있습니다.</li>\n<li><strong>은행 부담 가능성</strong> — 은행이 비대면 본인확인 절차를 소홀히 하여 피해가 발생한 경우, 은행에 대한 손해배상 청구도 검토할 수 있습니다.</li>\n<li><strong>2차 사기 주의</strong> — "피해금을 돌려주겠다"며 접근하는 2차 사기에 주의하세요. 경찰이나 금융감독원은 절대 개인에게 돈을 먼저 보내라고 요구하지 않습니다.</li>\n<li><strong>성년후견 제도 활용</strong> — 반복적으로 피해를 당하는 고령자라면, 성년후견 제도를 통해 재산 관리를 보호할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 피해와 은행의 전자금융거래 책임',
        summary:
          '대법원 2024다236754 사건(대법원, 2025.08.14 선고)에서 법원은 딸을 사칭한 보이스피싱 범인의 요청에 따라 개인정보를 제공하고 원격제어 앱을 설치하여 비대면 대출이 실행된 사안에서, 수신자(은행)가 전자문서를 작성자의 것으로 보아 행위할 수 있는 "정당한 이유"가 있는지를 엄격하게 판단해야 한다고 판시했습니다.',
        takeaway:
          '보이스피싱으로 원격제어 앱 설치 후 비대면 대출이 실행된 경우, 은행의 본인확인 절차 소홀에 대한 손해배상 가능성도 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '이미 돈이 인출된 후에도 환급받을 수 있나요?',
        answer:
          '<p>지급정지된 계좌에 잔액이 없으면 피해환급금 제도로는 환급이 어렵습니다. 이 경우 가해자에 대한 손해배상 청구나 피해자 구제 기금 활용을 검토하세요. 수사를 통해 범인이 검거되면 범죄 수익 환수도 가능합니다.</p>',
      },
      {
        question: '보이스피싱 범인이 잡히면 피해금을 돌려받을 수 있나요?',
        answer:
          '<p>범인이 검거되면 형사재판에서 배상명령을 신청하거나 민사소송으로 손해배상을 청구할 수 있습니다. 다만 범인이 이미 돈을 소비했다면 실제 회수는 어려울 수 있습니다.</p>',
      },
      {
        question: '문자 링크를 눌러서 악성 앱이 설치된 것 같은데 어떻게 하나요?',
        answer:
          '<p>즉시 휴대전화를 비행기 모드로 전환하고, 118(한국인터넷진흥원)에 신고하세요. 이후 휴대전화 초기화를 권장하며, 모든 금융 앱의 비밀번호를 변경하세요.</p>',
      },
      {
        question: '보이스피싱 피해 신고는 어디에 해야 하나요?',
        answer:
          '<p>경찰(112), 금융감독원(1332), 한국인터넷진흥원(118)에 모두 신고하세요. 경찰에는 사기 사건으로, 금융감독원에는 피해환급금 신청을 위해, KISA에는 악성 앱 등 사이버 피해 신고를 합니다.</p>',
      },
      {
        question: '가족이 대신 신고하고 지급정지를 요청할 수 있나요?',
        answer:
          '<p>은행 지급정지는 누구나 요청할 수 있습니다. 가족이라면 피해자와의 관계를 설명하고 즉시 지급정지를 요청하세요. 경찰 신고도 가족이 대리할 수 있으며, 이후 피해자 본인 확인이 필요할 수 있습니다.</p>',
      },
    ],
    cta: { text: '보이스피싱 피해 환급 가능성 AI 분석', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 첫 대응', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '보이스피싱 즉시 대응', href: '/guide/fraud/voice-phishing-immediate-response' },
      { label: '보이스피싱 환급 절차', href: '/guide/fraud/voice-phishing-fund-recovery-process' },
      { label: '고소장 준비 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 신고 기한·금액', href: '/guide/fraud/fraud-report-deadline-amounts' },
    ],
  },

  // ── 사기 7. 가상자산 러그풀 사기 증거 확보 ──
  {
    domain: 'fraud',
    slug: 'fraud-crypto-rug-pull-evidence',
    keyword: '가상자산 러그풀 사기 증거',
    questionKeyword: '가상자산 러그풀이 사기죄에 해당하나요?',
    ctaKeyword: '가상자산 사기 증거 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '가상자산 러그풀 사기 증거 확보 체크리스트 5가지 | 로앤가이드',
      description:
        '투자한 코인 프로젝트가 갑자기 사라졌다면, 러그풀 사기 증거를 확보하고 고소하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"확정 수익"을 약속하며 투자를 권유했던 가상자산 프로젝트가 어느 날 갑자기 사라졌습니다. 텔레그램 그룹은 폐쇄되고, 운영진의 연락처도 모두 차단되었습니다. 이른바 "러그풀"은 투자 손실이 아닌 사기죄에 해당할 수 있습니다. 핵심 증거를 확보하는 방법을 정리합니다.</p>',
    sections: [
      {
        title: '러그풀이 사기죄로 성립하기 위한 핵심 요건',
        content:
          '<p><strong style="color:#1e3a5f">단순 투자 실패와 사기는 다릅니다. 사기죄가 성립하려면 "처음부터 속일 의도가 있었는지"가 핵심입니다.</strong></p>\n<ul>\n<li><strong>기망행위</strong> — 투자금을 유치할 때 허위 정보를 제공했거나 실현 불가능한 수익을 약속한 경우 기망행위에 해당합니다. "원금 보장", "월 30% 수익" 등의 약속이 대표적입니다.</li>\n<li><strong>편취 의사</strong> — 처음부터 프로젝트를 운영할 의사 없이 투자금만 모을 목적이었다면 사기죄의 편취 의사가 인정됩니다.</li>\n<li><strong>재산상 피해</strong> — 기망행위에 속아 투자금을 지급했고, 그 결과 재산상 손해가 발생해야 합니다.</li>\n<li><strong>자본시장법 위반</strong> — 가상자산 매매를 추천하면서 자신의 선행매수 사실(이해관계)을 표시하지 않은 행위도 부정한 수단에 해당할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 법원은 기망행위 여부를 판단할 때 "행위가 공정한 경쟁을 해치고 선의의 투자자에게 손해를 전가할 위험이 있었는지"를 기준으로 합니다.</blockquote>',
      },
      {
        title: '러그풀 증거 확보 체크리스트 5가지',
        content:
          '<p><strong style="color:#1e3a5f">가상자산 사기의 특성상 디지털 증거가 빠르게 사라집니다. 피해를 인지한 즉시 증거를 확보하세요.</strong></p>\n<ol>\n<li><strong>홍보 자료 캡처</strong> — 백서(White Paper), 홈페이지, SNS 게시물, 텔레그램·디스코드 대화 내용을 스크린샷으로 저장하세요. 특히 "원금 보장", "확정 수익" 등의 약속이 담긴 부분이 핵심입니다.</li>\n<li><strong>거래 내역 확보</strong> — 가상자산 거래소 거래 내역, 지갑 이체 기록, 입금 확인 캡처를 저장하세요. 블록체인 익스플로러에서 트랜잭션 해시를 기록해두면 됩니다.</li>\n<li><strong>운영진 정보 수집</strong> — 운영진의 실명, 연락처, SNS 계정, 사업자등록 정보 등을 최대한 확보하세요. 텔레그램 프로필, 이메일 주소 등도 중요합니다.</li>\n<li><strong>피해자 모임 참여</strong> — 같은 프로젝트의 피해자들과 연대하세요. 다수의 피해 사실이 모이면 조직적 사기로 수사 착수가 빨라집니다.</li>\n<li><strong>자금 흐름 추적</strong> — 블록체인 분석 도구(Etherscan, BSCscan 등)로 투자금이 어디로 이동했는지 추적하세요. 운영진 지갑으로 집중 이체된 기록은 편취 의사의 강력한 증거입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>러그풀 사기 고소 가능성, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 상황을 입력하면 사기죄 성립 가능성과 고소 절차를 무료로 안내받으세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '가상자산 사기 고소 절차와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">증거를 확보했다면 경찰에 고소장을 제출하세요. 가상자산 사기 전담 수사팀에 접수하는 것이 효과적입니다.</strong></p>\n<ul>\n<li><strong>관할 경찰서</strong> — 피해자 주소지 관할 경찰서 사이버수사팀에 접수하세요. 서울의 경우 서울경찰청 사이버수사과에 직접 접수도 가능합니다.</li>\n<li><strong>고소장 핵심 내용</strong> — 기망행위(어떤 거짓말에 속았는지), 편취 금액, 입금 경위, 피의자 정보를 구체적으로 기재하세요.</li>\n<li><strong>민사소송 병행</strong> — 형사 고소와 별도로 운영진·법인에 대한 손해배상 청구 소송을 제기할 수 있습니다. 가압류를 통해 남아있는 자산을 확보하는 것도 중요합니다.</li>\n<li><strong>금융위원회 신고</strong> — 가상자산사업자가 무등록 영업을 한 경우 금융위원회에 신고하세요. 행정제재와 함께 수사 의뢰가 가능합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 투자 추천 시 이해관계 미표시와 부정한 수단',
        summary:
          '대법원 2024도11686 사건(대법원, 2026.01.15 선고)에서 법원은 투자를 추천하면서 제3자가 선행매수한 사실과 추천 후 매도할 수 있다는 이해관계를 표시하지 않은 채 매수를 추천하는 행위는 자본시장법 제178조 제1항 제1호의 "부정한 수단, 계획, 기교"에 해당한다고 판시했습니다.',
        takeaway:
          '가상자산 프로젝트 운영진이 자신의 이해관계(선행매수, 대량 보유 등)를 숨기고 투자를 권유했다면, 부정행위에 해당할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '코인 가격이 떨어진 것과 러그풀의 차이가 뭔가요?',
        answer:
          '<p>단순 가격 하락은 투자 위험의 현실화이지 사기가 아닙니다. 러그풀은 처음부터 프로젝트를 운영할 의사 없이 투자금만 모은 뒤 도주하는 행위로, 기망의 의도가 핵심 차이입니다.</p>',
      },
      {
        question: '해외에서 운영하는 프로젝트인데 한국에서 고소할 수 있나요?',
        answer:
          '<p>피해자가 한국 국적이고 한국에서 피해가 발생했다면 한국 경찰에 고소할 수 있습니다. 다만 운영진이 해외에 있으면 수사와 집행에 시간이 더 걸릴 수 있습니다. 인터폴 공조나 국제형사사법 공조를 통한 수사가 진행됩니다.</p>',
      },
      {
        question: '가상자산 사기의 공소시효는 얼마인가요?',
        answer:
          '<p>사기죄(형법 제347조)의 공소시효는 피해 금액에 따라 다릅니다. 10년 이하의 징역에 해당하므로 공소시효는 7년입니다. 다만 범인이 해외 도피 중이면 시효가 정지됩니다.</p>',
      },
      {
        question: '고소하면 투자금을 돌려받을 수 있나요?',
        answer:
          '<p>형사 고소만으로는 투자금이 자동 반환되지 않습니다. 수사 과정에서 범인의 재산이 압수·동결되면 반환받을 수 있고, 별도로 민사소송(손해배상 청구)을 제기해야 확실합니다.</p>',
      },
    ],
    cta: { text: '러그풀 사기 고소 가능성 AI 분석', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 첫 대응', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '고소장 준비 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '투자사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '사기죄 성립 요건', href: '/guide/fraud/fraud-crime-establishment-requirements' },
      { label: '민사소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
    ],
  },

  // ── 사기 8. 취업사기 피해 대응 방법 ──
  {
    domain: 'fraud',
    slug: 'fraud-employment-scam-response',
    keyword: '취업사기 피해 대응 방법',
    questionKeyword: '취업사기에 속아 돈을 냈는데 돌려받을 수 있나요?',
    ctaKeyword: '취업사기 피해 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '취업사기 유형별 대응과 피해금 회수 방법 3가지 | 로앤가이드',
      description:
        '취업을 빙자해 교육비나 보증금을 요구받아 돈을 냈다면, 취업사기 유형별 대응과 환불 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"면접 합격입니다. 입사 전 교육비 50만 원을 입금해주세요." 기대에 부풀어 돈을 보냈지만, 그 뒤로 연락이 끊겼습니다. 취업난을 악용한 취업사기가 늘고 있습니다. 교육비·보증금·장비비 명목으로 돈을 요구한 뒤 잠적하는 것이 전형적인 수법입니다. 유형별 대응 방법을 정리합니다.</p>',
    sections: [
      {
        title: '취업사기의 3가지 대표 유형',
        content:
          '<p><strong style="color:#1e3a5f">취업사기는 구직자의 절박함을 이용합니다. 아래 유형에 해당하면 사기를 의심하세요.</strong></p>\n<ol>\n<li><strong>교육비·자격증비 사기</strong> — "입사 전 필수 교육"이라며 교육비를 요구합니다. 교육 후에도 채용은 이루어지지 않고, 교육 업체와 채용 업체가 공모한 경우가 많습니다.</li>\n<li><strong>보증금·장비비 사기</strong> — "업무용 노트북 보증금", "유니폼비", "보험 가입비" 등의 명목으로 선금을 요구합니다. 정상적인 회사는 입사 전 근로자에게 금전을 요구하지 않습니다.</li>\n<li><strong>위장 취업·인력 사무소 사기</strong> — 실제로 존재하지 않는 일자리를 알선하고 소개비를 받거나, 단기 알바 후 임금을 지급하지 않는 경우입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 입사 전 어떤 명목이든 돈을 요구하는 것은 정상적인 채용 절차가 아닙니다. 근로기준법은 근로계약 체결 시 부당한 전차금(前借金) 상계를 금지합니다.</blockquote>',
      },
      {
        title: '취업사기 피해 시 즉시 해야 할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">취업사기를 당했다면 빠르게 대응해야 피해금 회수 가능성이 높아집니다.</strong></p>\n<ol>\n<li><strong>증거 수집</strong> — 채용 공고, 면접 안내 문자·이메일, 교육비·보증금 입금 내역, 상대방과의 대화 기록(카카오톡·전화 녹음)을 모두 저장하세요. 특히 "합격" 통보와 금전 요구가 담긴 메시지가 핵심 증거입니다.</li>\n<li><strong>경찰 고소</strong> — 관할 경찰서에 사기죄로 고소장을 접수하세요. 온라인 구직 사이트를 통한 사기는 사이버수사팀에 접수하면 됩니다.</li>\n<li><strong>구직 플랫폼 신고</strong> — 사기 공고가 게재된 구직 사이트(잡코리아, 사람인 등)에 신고하여 추가 피해를 방지하세요. 플랫폼에서 해당 업체를 차단하고, 다른 피해자를 찾는 데 도움이 됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>취업사기 피해, 고소 가능성과 피해금 회수 방법을 AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 상황을 입력하면 유형별 대응 전략을 무료로 안내받으세요.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '피해금 회수를 위한 법적 수단',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소와 함께 민사적 수단을 병행해야 피해금 회수 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 피해금 반환을 요구하는 내용증명을 상대방에게 보내세요. 환불 의사가 있는 경우 합의로 빠르게 해결될 수 있습니다.</li>\n<li><strong>민사소송(소액사건)</strong> — 피해 금액이 3,000만 원 이하라면 소액사건 심판으로 간편하게 소송할 수 있습니다. 변호사 없이도 직접 진행 가능합니다.</li>\n<li><strong>가압류 신청</strong> — 상대방이 재산을 빼돌릴 우려가 있다면, 소송 전 가압류를 신청하여 재산을 보전하세요. 은행 계좌, 부동산 등에 가압류가 가능합니다.</li>\n<li><strong>사기 이용 계좌 지급정지</strong> — 보이스피싱과 유사하게 전기통신을 이용한 사기에 해당하면 통신사기피해환급법에 따른 계좌 지급정지도 검토할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기망행위와 사기죄의 성립 요건',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 사기죄의 기망행위는 사람으로 하여금 착오를 일으키게 하는 것으로, 재산변동에 관한 사무가 사람의 개입 없이 기계적으로 처리되는 경우와 달리 사람에 대한 기망행위가 수반되어야 사기죄가 성립한다고 판시했습니다.',
        takeaway:
          '취업사기는 구직자(사람)에게 직접 허위 사실을 말하여 돈을 편취하는 것이므로 사기죄의 기망행위 요건을 충족합니다.',
      },
    ],
    faq: [
      {
        question: '교육비를 내고 실제로 교육을 받았는데도 사기인가요?',
        answer:
          '<p>교육 자체는 제공했더라도, 처음부터 채용할 의사 없이 교육비 수취만을 목적으로 한 것이라면 사기에 해당합니다. 교육 업체와 채용 업체가 공모한 정황이 있다면 더욱 그렇습니다.</p>',
      },
      {
        question: '개인이 아닌 법인(회사)이 취업사기를 쳤는데 누구를 고소하나요?',
        answer:
          '<p>사기죄는 자연인(사람)만 처벌할 수 있으므로, 사기를 실행한 대표이사, 채용 담당자 등 개인을 특정하여 고소하세요. 법인에 대해서는 민사소송으로 손해배상을 청구합니다.</p>',
      },
      {
        question: '피해 금액이 30만 원 정도로 적은데 고소할 가치가 있나요?',
        answer:
          '<p>금액이 적더라도 고소할 수 있습니다. 특히 같은 수법으로 다수의 피해자가 있다면 수사 착수 가능성이 높아집니다. 사이버범죄 신고 시스템(경찰청)에 접수하면 유사 사건과 연결될 수 있습니다.</p>',
      },
      {
        question: '구직 사이트에서 본 공고인데, 사이트에도 책임이 있나요?',
        answer:
          '<p>구직 사이트는 원칙적으로 게시된 공고의 진위에 대해 직접적 책임을 지지 않습니다. 다만 사기 공고라는 신고를 받고도 방치했다면 관리 소홀에 대한 책임을 물을 여지가 있습니다.</p>',
      },
      {
        question: '해외 취업을 빙자한 사기인데 한국에서 고소할 수 있나요?',
        answer:
          '<p>피해자가 한국에서 돈을 보냈다면 한국 경찰에 고소할 수 있습니다. 해외 취업 브로커 사기의 경우 외교부와 고용노동부에도 함께 신고하세요. 해외 취업 관련 사기는 직업안정법 위반으로도 처벌될 수 있습니다.</p>',
      },
    ],
    cta: { text: '취업사기 피해 대응 방법 AI 상담', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 첫 대응', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '고소장 준비', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '고소장 필요 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 피해자 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '민사소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
    ],
  },
];
