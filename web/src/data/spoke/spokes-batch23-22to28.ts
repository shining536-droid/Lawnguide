import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 22. 이 페이지는 [해고 통보를 처음 받은 근로자]의 [어디서 무엇부터 시작해야 하는지 막막한 상황]에서 [3개월 기한 내 구제신청 경로와 첫 3단계 행동 안내]를 돕는 페이지다.
// 23. 이 페이지는 [프리랜서·계약직 신분으로 해고된 근로자]의 [자신이 근로자로 인정받을 수 있는지 판례로 확인하려는 상황]에서 [판례 중심 근로자성 판단 기준과 해고무효 대응 안내]를 돕는 페이지다.
// 24. 이 페이지는 [직장 내 성희롱 피해를 입고 신고 절차가 궁금한 근로자]의 [어디에 신고하고 얼마나 걸리는지 모르는 상황]에서 [5단계 타임라인과 기관별 신고 방법 안내]를 돕는 페이지다.
// 25. 이 페이지는 [직장 내 성희롱을 당했지만 어디부터 시작해야 할지 모르는 피해자]의 [첫 대응 방향을 결정하지 못한 상황]에서 [증거 수집·사내 신고·외부 기관 3갈래 선택지 안내]를 돕는 페이지다.
// 26. 이 페이지는 [성희롱 가해자로 신고되었으나 사실과 다르다고 주장하는 피신고인]의 [무고 대응 전략을 모르는 상황]에서 [반박 증거 수집·진술 일관성·무고죄 고소 가능성 안내]를 돕는 페이지다.
// 27. 이 페이지는 [소액사건 소장을 처음 제출하려는 채권자]의 [소장 제출부터 판결·집행까지 전체 흐름을 모르는 상황]에서 [6단계 절차 타임라인과 각 단계별 준비사항 안내]를 돕는 페이지다.
// 28. 이 페이지는 [소액 채권 회수 방법을 비교하려는 채권자]의 [소액소송과 지급명령 중 무엇이 유리한지 모르는 상황]에서 [비교표와 상황별 선택 기준 안내]를 돕는 페이지다.

export const spokesBatch23_22to28: SpokePage[] = [
  // ───────────────────────────────────────────
  // 22. dismissal / dismissed-where-to-start

  // ───────────────────────────────────────────
  // 23. dismissal / unfair-dismissal-void-cases

  // ───────────────────────────────────────────
  // 24. sexual-harassment / workplace-harassment-report-procedure
  // ───────────────────────────────────────────
  // 25. sexual-harassment / workplace-harassment-where-to-start

  // ───────────────────────────────────────────
  // 26. sexual-harassment / harassment-false-accusation-defense
  // ───────────────────────────────────────────
  {
    domain: 'sexual-harassment',
    slug: 'harassment-false-accusation-defense',
    keyword: '성희롱 무고 대응법',
    questionKeyword: '성희롱으로 사실과 다르게 신고되었을 때 어떻게 대응하나요?',
    ctaKeyword: '성희롱 무고 대응',
    type: '상황형',
    perspective: '무고',
    meta: {
      title: '성희롱 무고 대응 — 사실과 다른 신고 시 4가지 전략 | 로앤가이드',
      description:
        '성희롱으로 사실과 다르게 신고되었다면 지금 바로 대응 준비가 필요합니다. 반박 증거와 진술 전략을 지금 확인하세요.',
    },
    intro:
      '<p>사실과 다르게 성희롱으로 신고되었습니다. 회사 조사가 시작되고, 동료들의 시선도 달라졌습니다.</p><p>억울하지만 아무 말도 못 하고 있으면 조사 결과가 불리하게 나올 수 있습니다. 무고에 해당하더라도 무고죄 고소는 쉽지 않으며, 우선은 조사 과정에서 자신의 입장을 정확히 전달하는 것이 중요합니다.</p><p>성희롱 피신고인으로서 사실과 다르게 신고되었을 때 취해야 할 4가지 대응 전략을 정리합니다.</p>',
    sections: [
      {
        title: '1단계 — 반박 증거를 즉시 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">신고가 들어온 순간부터 반박 자료를 모아야 합니다</strong></p>\n<p>성희롱 조사는 피해자·피신고인 양측의 진술을 비교합니다. 진술이 엇갈릴 때 증거가 결정적인 역할을 합니다.</p>\n<ul>\n<li><strong>대화 내역 보존</strong>: 신고된 발언이나 행위 관련 카카오톡·이메일·문자를 모두 백업하세요. 해당 대화가 신고 내용과 다른 맥락이라면 전후 대화를 모두 저장하는 것이 중요합니다</li>\n<li><strong>해당 시간 알리바이</strong>: 신고된 날짜·시간에 어디 있었는지 입증할 수 있는 자료(CCTV, 교통카드 내역, 다른 미팅 일정)를 확보하세요</li>\n<li><strong>목격자·동석자 확인</strong>: 해당 자리에 같이 있던 사람, 사건 후 대화한 동료 등 진술해줄 수 있는 사람을 파악하세요</li>\n<li><strong>업무 관련성 자료</strong>: 신고된 행위가 업무상 발생한 것이라면 그 맥락을 설명할 수 있는 문서(회의록, 이메일, 업무 지시 내역)를 준비하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=sexual-harassment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '2단계 — 조사 절차에서 진술 일관성을 유지하세요',
        content:
          '<p><strong style="color:#1e3a5f">회사 조사, 노동위원회, 인권위, 형사 조사에서 진술이 엇갈리면 신뢰성이 떨어집니다</strong></p>\n<ul>\n<li><strong>진술 전 메모 준비</strong>: 신고된 내용을 미리 파악하고, 자신의 입장을 논리적으로 정리한 메모를 작성하세요. 갑작스러운 질문에 당황하지 않도록 핵심 사항을 사전에 정리하는 것이 중요합니다</li>\n<li><strong>과장하거나 축소하지 않기</strong>: 사실 그대로 진술하되, 신고 내용이 과장·왜곡된 부분을 구체적으로 지적하세요. "그런 말을 한 적이 없다"는 부인만으로는 부족하며, 실제 대화가 어떠했는지 설명해야 합니다</li>\n<li><strong>서면 진술 요청</strong>: 구두 진술만 요청하는 경우, 서면 진술서도 작성하여 제출을 요구하세요. 나중에 진술 내용을 확인할 수 있습니다</li>\n<li><strong>변호사 동행 또는 자문</strong>: 사내 조사나 인권위 조사에서도 변호사의 도움을 받을 수 있습니다. 법률 전문가의 검토를 받은 후 진술서를 작성하는 것이 안전합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 준비: 핵심 사실 메모 → 구체적 반박 포인트 정리 → 서면 진술 병행 → 법률 자문</blockquote>',
      },
      {
        title: '3단계 — 사내 조치에 불복하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">회사 징계나 조치 결과가 사실에 반한다면 이의 제기 절차를 활용하세요</strong></p>\n<ul>\n<li><strong>징계 절차 하자 확인</strong>: 취업규칙에 정한 징계 절차(소명 기회, 징계위원회, 통지 기간 등)를 회사가 제대로 지켰는지 확인하세요. 절차 위반이 있으면 징계 자체가 무효가 될 수 있습니다</li>\n<li><strong>이의신청</strong>: 취업규칙이나 단체협약에 징계 이의신청 제도가 있다면 정해진 기한 내에 이의를 제기하세요</li>\n<li><strong>노동위원회 구제신청</strong>: 징계 처분이 해고에 해당하면 해고일로부터 3개월 이내에 부당해고 구제신청을 할 수 있습니다</li>\n<li><strong>민사 소송</strong>: 징계가 무효임을 다투거나, 사실과 다른 신고로 명예가 훼손된 경우 신고인을 상대로 손해배상을 청구할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">징계 불복 경로: 이의신청 → 노동위원회 구제신청(해고 시) → 민사 소송</blockquote>',
      },
      {
        title: '4단계 — 무고죄 고소 가능 여부 확인',
        content:
          '<p><strong style="color:#1e3a5f">신고 내용이 명백히 허위이고 고의성이 입증될 때만 무고죄 고소가 가능합니다</strong></p>\n<p>무고죄(형법 제156조)는 타인을 형사처분이나 징계에 받게 할 목적으로 허위 사실을 신고할 때 성립할 수 있습니다(10년 이하 징역 또는 1,500만원 이하 벌금). 그러나 무고죄 고소는 요건이 엄격합니다.</p>\n<ul>\n<li><strong>허위성</strong> — 신고된 사실이 객관적으로 허위임이 입증되어야 합니다. 단순히 성희롱 여부가 다투어지는 것만으로는 부족합니다</li>\n<li><strong>고의성</strong> — 신고인이 신고 내용이 허위라는 사실을 알면서 신고했음이 입증되어야 합니다. 오인이나 과장으로 신고한 경우는 무고가 성립하지 않습니다</li>\n<li><strong>실무적 어려움</strong> — 성희롱 사건에서 무고죄 고소가 인정되는 경우는 극히 드뭅니다. 먼저 조사 결과를 기다리고, 결과가 나온 후 무고 여부를 판단하는 것이 현실적입니다</li>\n<li><strong>명예훼손 민사 청구</strong> — 무고죄 형사 고소 대신, 허위 신고로 인한 명예훼손을 이유로 손해배상 청구가 더 현실적인 대응일 수 있습니다</li>\n</ul>\n<p>참고 링크: <a href="/guide/sexual-harassment/workplace-harassment-report-procedure">직장 성희롱 신고 절차</a> | <a href="/guide/sexual-harassment/workplace-harassment-first-check">성희롱 피해 시 먼저 확인할 것</a></p>',
      },
    ],
    cases: [
      {
        title: '성희롱 피신고인의 절차적 권리 보장 사례',
        summary:
          '관련 사례에서 회사가 피신고인에게 소명 기회를 부여하지 않고 징계 처분을 내렸습니다. 노동위원회는 취업규칙상 징계 절차를 위반하였으므로 징계 처분의 효력이 없다고 판정하여, 피신고인이 복직·소급 임금 지급을 받은 경우가 있습니다.',
        takeaway:
          '성희롱으로 신고되어 징계를 받더라도, 회사가 정한 절차를 지키지 않은 징계는 무효로 다툴 수 있습니다. 소명 기회 제공 여부를 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사실과 다르게 신고됐다는 걸 어떻게 증명하나요?',
        answer:
          '신고된 내용과 실제 상황이 다르다는 것을 보여주는 <strong>대화 기록, 목격자 진술, 알리바이 자료</strong>를 제시하세요. 신고인의 진술과 모순되는 증거가 있으면 조사에서 결정적입니다.',
      },
      {
        question: '사내 조사에서 변호사를 대동할 수 있나요?',
        answer:
          '취업규칙에 별도 규정이 없다면 일반적으로 가능합니다. 다만 회사에 따라 내부 조사에는 외부인 동석을 제한하기도 합니다. <strong>변호사에게 자문을 먼저 받고 진술서를 작성</strong>하는 방법이 현실적입니다.',
      },
      {
        question: '성희롱 무고 피해를 입었을 때 손해배상을 받을 수 있나요?',
        answer:
          '허위 신고로 직위 해제·징계 등의 손해를 입었다면, 신고인을 상대로 <strong>민사 손해배상(위자료·재산적 손해)</strong>을 청구할 수 있습니다. 다만 신고인이 오인이 아닌 고의로 허위 신고했음을 입증해야 합니다.',
      },
      {
        question: '인권위 조사와 형사 수사가 동시에 진행될 수 있나요?',
        answer:
          '가능합니다. 인권위 진정(성희롱 해당 여부)과 경찰 수사(강제추행 등 형사 사건)는 별개 절차입니다. 피신고인은 두 절차 모두에서 진술 기회를 가집니다.',
      },
      {
        question: '억울하게 신고됐는데 회사가 이미 징계를 확정했어요.',
        answer:
          '징계 확정 후에도 불복 가능합니다. <strong>해고·정직·감봉 등의 징계는 노동위원회 구제신청(3개월 이내)</strong> 또는 민사 소송으로 다툴 수 있습니다. 징계 절차에 하자가 있었는지도 함께 확인하세요.',
      },
    ],
    cta: {
      text: '성희롱 무고 상황에서 대응 전략을 AI로 확인하세요',
      link: '/chat?domain=sexual-harassment',
    },
    internalLinks: [
      { label: '직장 성희롱 신고 절차 5단계', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '직장 성희롱 피해 시 먼저 확인할 것', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '직장 성희롱 어디부터 시작하나', href: '/guide/sexual-harassment/workplace-harassment-where-to-start' },
      { label: '회식 중 신체 접촉 성희롱 대응', href: '/guide/sexual-harassment/physical-contact-at-company-dinner' },
      { label: '부당해고 즉시 대응 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 27. small-claims / complaint-to-judgment-full-procedure
  // ───────────────────────────────────────────
  // 28. small-claims / small-claims-vs-payment-order-comparison
];
