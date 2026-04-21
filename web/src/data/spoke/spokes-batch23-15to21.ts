import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [산재를 당한 근로자]의 [요양급여 신청 절차와 기한을 모르는 상황]에서 [근로복지공단 접수부터 불승인 이의신청까지 5단계 타임라인 안내]를 돕는 페이지다.
// 16. 이 페이지는 [출퇴근 중 사고를 당한 근로자]의 [산재 인정 여부가 불확실한 상황]에서 [법적 인정 기준 3가지와 예외 상황 판별 방법 안내]를 돕는 페이지다.
// 17. 이 페이지는 [산재 사고를 당한 후 어디서부터 시작해야 할지 모르는 근로자]의 [혼란스러운 초기 대응 상황]에서 [신고·치료·급여 신청 순서와 각 단계 핵심 체크사항 안내]를 돕는 페이지다.
// 18. 이 페이지는 [사업장에서 산재가 발생한 사업주]의 [신고 의무와 절차를 모르는 상황]에서 [지체 없는 신고부터 서류 제출까지 법적 의무 이행 절차 안내]를 돕는 페이지다.
// 19. 이 페이지는 [중대재해가 발생한 사업장의 사업주]의 [긴급 대응 절차를 모르는 상황]에서 [현장 보존·수사 대응·안전보건 이행계획 수립까지 단계별 절차 안내]를 돕는 페이지다.
// 20. 이 페이지는 [산재 사고로 형사책임 가능성에 직면한 사업주]의 [처벌 수위와 대응법을 모르는 상황]에서 [근로기준법·산안법·중대재해처벌법별 처벌 기준과 방어 전략 안내]를 돕는 페이지다.
// 21. 이 페이지는 [부당해고를 당한 근로자]의 [노동위원회 구제신청 절차와 기간을 모르는 상황]에서 [신청서 작성부터 재심·소송까지 4단계 절차 안내]를 돕는 페이지다.

export const spokesBatch23_15to21: SpokePage[] = [
  // ───────────────────────────────────────────
  // 15. industrial-accident1 / workers-comp-medical-claim-process
  // ───────────────────────────────────────────
  // 16. industrial-accident1 / commute-accident-recognition
  // ───────────────────────────────────────────
  // 17. industrial-accident1 / injured-where-to-start
  // ───────────────────────────────────────────
  // 18. industrial-accident2 / employer-report-obligation-process
  // ───────────────────────────────────────────
  // 19. industrial-accident2 / serious-accident-employer-response
  // ───────────────────────────────────────────
  // 20. industrial-accident2 / employer-criminal-liability-accident
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'employer-criminal-liability-accident',
    keyword: '산재 사고 발생 시 사업주 형사책임',
    questionKeyword: '산재 사고가 나면 사업주는 어떤 형사책임을 지나요?',
    ctaKeyword: '사업주 형사책임 대응',
    type: '상황형',
    perspective: '사업주',
    meta: {
      title: '산재 사고 사업주 형사책임 3가지 법률 기준 | 로앤가이드',
      description:
        '사업장에서 산재 사고가 발생해 형사처벌이 걱정된다면, 근로기준법·산안법·중대재해처벌법별 처벌 수위와 방어 전략 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>현장 근로자가 기계에 손가락이 절단되는 사고가 났습니다. 경찰이 "사업주 과실 여부를 수사하겠다"고 했습니다. 어떤 법이 적용되고, 얼마나 처벌받을 수 있는지, 지금 무엇을 해야 하는지 막막합니다. 산재 사고에서 사업주에게 적용되는 형사책임의 구조와 실질적 방어 전략을 정리해드립니다.</p>',
    sections: [
      {
        title: '산재 사고에 적용되는 3가지 법률과 처벌 수위',
        content:
          '<p><strong style="color:#1e3a5f">산재 사고가 발생하면 사안에 따라 「산업안전보건법」, 「중대재해 처벌 등에 관한 법률」, 「형법」(업무상과실치사상죄) 3가지가 동시에 적용될 수 있습니다</strong></p>\n<ul>\n<li><strong>「산업안전보건법」 위반</strong> — 안전조치 의무(제38조), 보건조치 의무(제39조) 위반으로 근로자가 사망하면 7년 이하 징역 또는 1억원 이하 벌금(제167조 제1항). 사망이 아닌 부상의 경우에도 5년 이하 징역 또는 5,000만원 이하 벌금</li>\n<li><strong>「중대재해처벌법」 위반</strong> — 5인 이상 사업장 경영책임자가 안전보건관리체계 구축 의무를 위반하여 사망 재해 발생 시 1년 이상 징역 또는 10억원 이하 벌금. 사망 외 중대재해 7년 이하 징역 또는 1억원 이하 벌금</li>\n<li><strong>「형법」 업무상과실치사상죄</strong> — 사업주의 주의 의무 위반으로 근로자가 사망하면 업무상과실치사죄(5년 이하 금고 또는 2,000만원 이하 벌금), 부상의 경우 업무상과실치상죄(5년 이하 금고 또는 2,000만원 이하 벌금)</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌 구조: 산안법 + 중대재해처벌법 + 형법 동시 적용 가능</blockquote>',
      },
      {
        title: '형사책임을 결정하는 핵심 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">수사기관과 법원은 사업주가 "예측할 수 있었던 위험을 예방할 조치를 했는가"를 기준으로 형사책임 여부를 판단합니다</strong></p>\n<ul>\n<li><strong>안전조치 이행 여부</strong> — 사고 발생 기계·설비에 대한 방호장치가 설치되어 있었는지, 정기적으로 점검했는지, 결함이 발견됐을 때 즉시 조치했는지를 조사합니다</li>\n<li><strong>안전교육 실시 여부</strong> — 해당 작업에 투입하기 전 안전교육을 실시했는지, 교육 일지와 수료 서명이 있는지를 확인합니다. 서류만 있고 실제 교육이 없었다면 허위 기재로 더 큰 불이익을 받을 수 있습니다</li>\n<li><strong>위험성 평가 실시</strong> — 해당 작업의 위험 요소를 사전에 식별하고 감소 조치를 취했는지 여부가 중요합니다. 위험성 평가 서류가 있고 실질적 이행이 입증되면 책임이 경감될 수 있습니다</li>\n<li><strong>작업 지시와 감독</strong> — 사업주 또는 관리감독자가 안전 기준을 위반하도록 지시하거나 묵인했다면 책임이 가중됩니다. 반면 안전 기준을 명확히 지시하고 근로자 개인의 무단 행위가 원인이라면 책임이 감경됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=industrial-accident2" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사처벌 감경에 유리한 3가지 방어 전략',
        content:
          '<p><strong style="color:#1e3a5f">수사 초기부터 방어 전략을 세우면 기소 회피 또는 형량 감경 가능성이 높아집니다. 다음 3가지 전략을 즉시 실행하세요</strong></p>\n<ul>\n<li><strong>전략 1: 안전 이행 증거 긴급 확보</strong> — 수사기관이 압수하기 전에 안전교육 일지, 위험성 평가 서류, 방호장치 점검 기록, 안전관리자 선임 서류 등을 복사·보관하세요. 이 서류들이 방어의 핵심입니다</li>\n<li><strong>전략 2: 피해 근로자·유족과 조기 합의</strong> — 법원은 피해 배상 노력을 양형에서 긍정적으로 평가합니다. 다만 합의 과정에서 "우리 잘못이 없다"는 발언은 자제하고, 변호사를 통해 합의하세요. 무리한 합의 요구는 오히려 역효과가 납니다</li>\n<li><strong>전략 3: 재발 방지 대책 수립·이행</strong> — 사고 원인을 분석하고 구체적 재발 방지 계획을 수립하여 고용노동부에 제출하세요. 안전시설 추가 설치, 안전관리자 추가 선임 등의 실질적 개선 조치는 처벌 감경의 중요 요소입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방어: 안전 증거 확보 + 유족 합의 + 재발 방지 이행 = 처벌 감경</blockquote>',
      },
      {
        title: '형사처벌 외 민사 손해배상 책임과 대응',
        content:
          '<p><strong style="color:#1e3a5f">형사처벌과 별도로 피해 근로자나 유족이 민사 손해배상을 청구할 수 있습니다. 산재보험 지급 후 추가 손해배상 청구 가능성을 확인하세요</strong></p>\n<ul>\n<li><strong>산재보험과 민사 손해배상의 관계</strong> — 산재보험으로 지급된 금액은 민사 손해배상에서 공제됩니다. 다만 산재보험이 보전하지 못하는 손해(위자료, 실제 손실 차액 등)에 대해서는 추가 배상 청구가 가능합니다</li>\n<li><strong>사업주 고의·과실의 영향</strong> — 사업주에게 중과실이 인정되면 산재보험 지급 후에도 추가 손해배상 책임이 남습니다. 반면 안전조치를 성실히 이행한 사업주에 대해서는 손해배상 책임이 일부 제한될 수 있습니다</li>\n<li><strong>민사 소송 대응</strong> — 민사 소송이 제기되면 형사 수사 결과가 민사에도 영향을 미칩니다. 형사 무죄 또는 불기소가 민사에서 유리한 증거로 사용될 수 있으므로 형사 방어에 더욱 집중할 필요가 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">민사·형사 연계: 형사 방어 결과가 민사 손해배상 책임에도 직접 영향</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도15060 — 중대재해처벌법 위반 형사처벌 사건',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대산업재해 발생과 관련하여 경영책임자가 안전보건관리체계 구축 의무를 형식적으로만 이행하고 실질적 이행을 하지 않은 경우에도 「중대재해처벌법」 위반이 인정된다고 판시했습니다. 위험성 평가 서류가 있어도 실제 개선이 이루어지지 않았다면 의무 위반으로 본다는 기준을 제시했습니다.',
        takeaway:
          '서류만 갖춰두는 "페이퍼 안전관리"는 중대재해처벌법 위반을 피할 수 없습니다. 실제로 위험을 제거했는지, 근로자가 실질적 안전교육을 받았는지가 처벌 여부를 결정합니다.',
      },
    ],
    faq: [
      {
        question: '안전관리자가 있었는데도 사업주가 처벌받나요?',
        answer:
          '<strong>네, 안전관리자 선임만으로는 사업주 면책이 되지 않습니다.</strong> 중대재해처벌법은 "경영책임자"가 직접 안전보건관리체계를 구축·이행할 의무를 부과합니다. 안전관리자에게 권한만 위임하고 관리·감독을 하지 않은 경우 책임이 그대로 남습니다.',
      },
      {
        question: '근로자 개인의 부주의가 사고 원인이라도 사업주가 처벌받나요?',
        answer:
          '<strong>근로자 부주의가 있어도 사업주 책임이 완전히 면제되지는 않습니다.</strong> 다만 사업주가 안전조치와 안전교육을 성실히 이행했고, 근로자가 이를 위반하여 사고가 발생했음이 입증되면 책임이 감경됩니다. 안전교육 실시 기록이 중요합니다.',
      },
      {
        question: '수사 중 회사 서류를 폐기해도 되나요?',
        answer:
          '<strong>절대 안 됩니다.</strong> 수사 중 관련 서류 폐기는 증거인멸로 별도의 형사처벌(증거인멸죄)을 받을 수 있습니다. 불리한 서류라도 수사 종결 전까지 보존해야 합니다.',
      },
      {
        question: '기소되면 반드시 징역형을 받나요?',
        answer:
          '<strong>그렇지 않습니다.</strong> 안전 이행 노력, 유족 합의, 재발 방지 조치 이행, 초범 여부, 사고 원인에 근로자 과실 기여 여부 등을 종합적으로 고려하여 집행유예 또는 벌금형으로 마무리되는 경우도 많습니다.',
      },
      {
        question: '중대재해처벌법 위반과 산안법 위반이 동시에 기소되면 처벌이 어떻게 되나요?',
        answer:
          '<strong>경합범으로 처리되어 더 무거운 쪽에 가중 처벌됩니다.</strong> 다만 실무상 경영책임자는 주로 중대재해처벌법으로, 현장 관리자·안전관리자는 산안법 위반으로 기소되는 경우가 많습니다.',
      },
    ],
    cta: {
      text: '사업주 형사책임 대응 무료 AI 상담',
      link: '/chat?domain=industrial-accident2',
    },
    internalLinks: [
      { label: '사업주 산재 가이드 홈', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 신고 의무', href: '/guide/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 사업주 대응 절차', href: '/guide/industrial-accident2/serious-accident-employer-response' },
      { label: '안전보건 위반 처벌 수위', href: '/guide/industrial-accident2/workplace-safety-violation-penalty' },
      { label: '산재 피해 근로자 권리', href: '/guide/industrial-accident1/workers-comp-medical-claim-process' },
    ],
  },

  // ───────────────────────────────────────────
  // 21. dismissal / unfair-dismissal-relief-procedure
];
