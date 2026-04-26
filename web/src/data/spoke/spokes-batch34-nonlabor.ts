import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 이혼 3개 + 교통사고 2개 + 사기 2개 + 회생 1개 + 파산 1개 + 전세 1개 + 층간소음 1개 (batch34)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch34Nonlabor: SpokePage[] = [
  // ── 이혼 1. 소득 은닉 배우자 재산 추적과 분할 방법 5단계 ──
  {
    domain: 'divorce',
    slug: 'divorce-hidden-income-asset-investigation',
    keyword: '소득 은닉 배우자 재산 추적 분할 방법',
    questionKeyword: '배우자가 소득과 재산을 숨기면 어떻게 추적하나요?',
    ctaKeyword: '배우자 재산 은닉 추적 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '소득 은닉 배우자 재산 추적 5단계 | 로앤가이드',
      description:
        '배우자가 소득과 재산을 숨기고 있다면, 재산조회신청부터 사해행위취소까지 5단계 추적 방법을 지금 확인하세요.',
    },
    intro:
      '<p>이혼을 결심했는데 배우자가 갑자기 통장 잔고를 옮기고, 부동산 명의를 바꾸기 시작합니다. 혼인 기간 동안 함께 모은 재산인데 상대방이 숨기면 내 몫을 어떻게 찾을 수 있을까요? 법원의 재산조회제도와 금융거래정보 추적을 활용하면, 은닉 재산을 찾아 정당한 분할을 받을 수 있습니다. 재산 추적부터 사해행위취소소송까지 5단계를 정확히 알면 불리한 결과를 막을 수 있습니다.</p>',
    sections: [
      {
        title: '1단계: 이혼 전 재산 현황 사전 파악',
        content:
          '<p><strong style="color:#1e3a5f">이혼 논의가 시작되기 전, 또는 직후에 상대방 재산 현황을 최대한 확보해야 합니다.</strong></p>\n<ul>\n<li><strong>부동산 등기부등본 확인</strong> — 법원 인터넷등기소에서 배우자 명의 부동산을 검색합니다. 혼인 중 취득한 부동산은 명의와 관계없이 분할 대상이 될 수 있습니다.</li>\n<li><strong>금융거래 내역 확보</strong> — 공동 사용 계좌의 거래내역, 카드 사용 내역, 보험 가입 현황 등을 미리 사본으로 보관합니다. 이혼 소송 전에 확보할 수 있는 자료가 많습니다.</li>\n<li><strong>차량·주식 등 동산 파악</strong> — 자동차등록 현황, 증권사 계좌, 가상자산 보유 여부도 확인해야 합니다. 2026년 현재 가상자산도 재산분할 대상에 포함됩니다.</li>\n<li><strong>소득 자료 수집</strong> — 배우자의 근로소득원천징수영수증, 사업자등록 여부, 부가세 신고 내역 등을 통해 실제 소득 규모를 파악합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이혼 논의가 시작되면 상대방이 재산을 빼돌릴 가능성이 높으므로, 가능한 빨리 자료를 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '2단계: 법원 재산조회 신청과 금융정보 추적',
        content:
          '<p><strong style="color:#1e3a5f">소송 중 법원을 통해 상대방 명의의 모든 재산을 공식적으로 조회할 수 있습니다.</strong></p>\n<ul>\n<li><strong>재산조회 신청</strong> — 이혼 소송(재산분할심판) 중 법원에 재산조회를 신청하면, 금융기관·국세청·건강보험공단 등에 배우자 명의 재산을 일괄 조회합니다.</li>\n<li><strong>금융거래정보 제출명령</strong> — 법원은 은행, 증권사, 보험사에 배우자 명의 계좌 잔액과 거래내역 제출을 명령할 수 있습니다. 해외 계좌도 국세청 자료를 통해 일부 파악 가능합니다.</li>\n<li><strong>사업소득 추적</strong> — 자영업자 배우자의 경우, 국세청 소득신고 자료와 부가세 매출 자료를 통해 실제 소득을 추적합니다. 현금 매출 은닉이 의심되면 거래처 조회도 가능합니다.</li>\n<li><strong>제3자 명의 재산 추적</strong> — 배우자가 가족·지인 명의로 재산을 옮긴 경우, 자금 흐름을 추적하여 명의신탁이나 사해행위로 다툴 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 재산 보전 처분(사전처분) 신청',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 재산을 처분할 우려가 있으면, 법원에 재산보전 신청을 하여 처분을 막아야 합니다.</strong></p>\n<ul>\n<li><strong>사전처분 신청</strong> — 가사소송법에 따라 재산분할 대상 재산에 대해 처분금지 사전처분을 신청할 수 있습니다. 법원이 인용하면 상대방은 부동산 매각, 예금 인출 등이 제한됩니다.</li>\n<li><strong>가압류 신청</strong> — 위자료, 재산분할 청구와 함께 상대방 재산에 대한 가압류를 신청하여 재산 은닉을 원천 차단합니다.</li>\n<li><strong>금융계좌 동결</strong> — 사전처분이 인용되면 은행에 통보되어 해당 계좌의 출금이 제한됩니다. 긴급한 경우 보전처분과 동시에 신청할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 사전처분 신청이 늦어지면 이미 재산이 처분될 수 있으므로, 이혼 소송과 동시에 신청하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '4~5단계: 사해행위취소와 재산분할 청구',
        content:
          '<p><strong style="color:#1e3a5f">이미 빼돌린 재산은 사해행위취소소송으로 원상회복하고, 최종적으로 재산분할을 청구합니다.</strong></p>\n<ul>\n<li><strong>사해행위취소소송</strong> — 배우자가 이혼 논의 시작 후 재산을 제3자에게 헐값에 매각하거나 증여한 경우, 그 처분행위의 취소를 구할 수 있습니다. 원상회복 또는 가액배상을 받게 됩니다.</li>\n<li><strong>은닉 재산 기여도 반영</strong> — 재산을 은닉·낭비한 행위는 법원이 기여도 산정 시 불리하게 반영합니다. 숨긴 재산이 발각되면 분할 비율이 상대방에게 불리하게 조정됩니다.</li>\n<li><strong>재산분할 청구</strong> — 이혼 확정 후 2년 이내에 재산분할을 청구해야 합니다. 추적된 재산을 포함하여 실질적 기여도에 따라 분할 비율이 결정됩니다.</li>\n<li><strong>형사고소 검토</strong> — 공동 재산을 횡령·은닉한 경우, 횡령죄나 재산범죄로 형사고소를 검토할 수 있습니다. 형사 절차를 통해 합의를 유도하는 전략도 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 법원은 재산분할 사건에서 직권으로 재산을 조사할 수 있으므로, 당사자가 파악하지 못한 재산도 법원이 발견할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 파탄 후 일방적 재산 처분과 분할 대상 포함',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.16 선고)에서 법원은 혼인관계가 파탄된 이후 부부 일방이 부부공동생활이나 부부공동재산의 형성·유지와 관련 없이 적극재산을 처분하였다면, 해당 적극재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상 재산에 포함할 수 있다고 판시했습니다.',
        takeaway:
          '배우자가 이혼 논의 후 재산을 일방적으로 처분하더라도, 법원은 그 재산을 여전히 보유한 것으로 간주하여 분할 대상에 포함시킵니다. 재산 처분 시점과 경위를 입증할 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '배우자가 현금으로 빼돌린 재산도 추적할 수 있나요?',
        answer:
          '<p>은행 출금 기록, 카드 사용 내역, ATM 인출 기록 등을 통해 현금 흐름을 추적할 수 있습니다. 법원 재산조회를 통해 일정 기간 내 대규모 출금 내역을 파악하고, 사용처를 소명하지 못하면 은닉으로 판단될 수 있습니다.</p>',
      },
      {
        question: '배우자가 가족 명의로 옮긴 부동산도 분할 대상인가요?',
        answer:
          '<p>혼인 중 형성한 재산을 제3자 명의로 이전한 경우, 사해행위취소소송을 통해 원상회복을 청구할 수 있습니다. 명의이전 시점과 대가 지급 여부가 핵심 쟁점이며, 무상 이전이면 취소 가능성이 높습니다.</p>',
      },
      {
        question: '자영업자 배우자의 실제 소득은 어떻게 파악하나요?',
        answer:
          '<p>국세청 종합소득세 신고 자료, 부가가치세 매출 자료, 사업용 계좌 거래내역을 법원을 통해 조회합니다. 신고 소득과 실제 생활 수준이 현저히 다르면 법원이 추정 소득을 산정할 수도 있습니다.</p>',
      },
      {
        question: '가상자산(암호화폐)도 재산분할 대상에 포함되나요?',
        answer:
          '<p>네, 2026년 현재 가상자산도 재산분할 대상입니다. 법원은 가상자산 거래소에 보유 내역 조회를 명령할 수 있으며, 개인 지갑으로 이전한 경우에도 거래 이력을 통해 추적이 가능합니다.</p>',
      },
      {
        question: '재산조회 결과가 나오기까지 얼마나 걸리나요?',
        answer:
          '<p>법원 재산조회 결과는 통상 2~4주 내에 회신됩니다. 금융기관, 국세청, 건강보험공단 등 기관별로 회신 시기가 다를 수 있으며, 해외 재산의 경우 더 오래 걸릴 수 있습니다.</p>',
      },
    ],
    cta: { text: '배우자 재산 은닉 대응 전략 AI 분석', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 재산분할 기준', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ── 이혼 2. 조부모 면접교섭권 인정 요건과 청구 절차 ──
  {
    domain: 'divorce',
    slug: 'divorce-grandparent-visitation-rights-guide',
    keyword: '조부모 면접교섭권 인정 요건 청구 절차',
    questionKeyword: '조부모도 손자녀를 만날 수 있는 면접교섭권이 있나요?',
    ctaKeyword: '조부모 면접교섭권 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '조부모 면접교섭권 요건과 절차 3가지 | 로앤가이드',
      description:
        '손자녀를 만나지 못해 걱정이라면, 조부모 면접교섭권 인정 요건과 가정법원 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>아들이 이혼하면서 전 며느리가 손자녀를 데리고 갔습니다. 그 뒤로 손자녀를 한 번도 만나지 못하고 있습니다. 조부모도 손자녀에 대한 면접교섭권을 청구할 수 있을까요? 2016년 민법 개정으로 직계존속에게도 면접교섭권이 인정되었고, 일정 요건을 충족하면 가정법원에 청구할 수 있습니다.</p>',
    sections: [
      {
        title: '조부모 면접교섭권의 법적 근거와 인정 요건',
        content:
          '<p><strong style="color:#1e3a5f">민법 제837조의2 제2항에 따라 자녀의 직계존속은 가정법원에 면접교섭을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 2016년 개정 민법 제837조의2 제2항은 "자녀를 직접 양육하지 아니하는 부모 일방의 직계존속은 가정법원에 면접교섭을 청구할 수 있다"고 규정합니다. 즉, 비양육 부모 측 조부모에게 면접교섭 청구권이 있습니다.</li>\n<li><strong>부모 사망·행방불명 시</strong> — 부모 일방이 사망하거나 행방불명 등의 사유로 면접교섭을 할 수 없는 경우에도, 그 부모의 직계존속이 면접교섭을 청구할 수 있습니다.</li>\n<li><strong>자녀 복리 기준</strong> — 법원은 조부모 면접교섭 청구를 판단할 때 "자녀의 복리"를 최우선으로 고려합니다. 조부모와 손자녀 사이의 정서적 유대, 기존 교류 관계 등이 중요한 판단 기준입니다.</li>\n<li><strong>양육 부모 측 조부모</strong> — 현행법상 양육하고 있는 부모 측 조부모는 면접교섭 청구 대상에 포함되지 않습니다. 비양육 부모 측 조부모만 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 조부모 면접교섭권은 단순한 방문권이 아니라 법적으로 보장된 권리이며, 양육 부모가 거부하더라도 법원에 청구하여 실현할 수 있습니다.</blockquote>',
      },
      {
        title: '가정법원 면접교섭 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">면접교섭 심판 청구부터 결정까지, 가정법원 절차를 단계별로 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>심판 청구서 제출</strong> — 가정법원에 면접교섭 심판 청구서를 제출합니다. 청구인(조부모)과 상대방(양육 부모), 사건본인(손자녀)을 특정해야 합니다.</li>\n<li><strong>가사조사 절차</strong> — 법원은 가사조사관을 통해 조부모와 손자녀의 관계, 양육 환경, 면접교섭이 자녀 복리에 미치는 영향 등을 조사합니다.</li>\n<li><strong>조정 절차</strong> — 법원은 먼저 당사자 간 조정을 시도합니다. 면접교섭 빈도, 시간, 장소 등에 대해 합의가 이루어지면 조정으로 종결됩니다.</li>\n<li><strong>심판 결정</strong> — 조정이 불성립하면 심판으로 진행됩니다. 법원은 자녀의 나이, 조부모와의 유대 정도, 양육 부모의 사정 등을 종합하여 면접교섭 여부와 방법을 결정합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면접교섭 결정 후 이행과 불이행 대응',
        content:
          '<p><strong style="color:#1e3a5f">면접교섭이 결정되었는데 상대방이 이행하지 않으면 이행명령과 과태료 부과를 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>이행명령 신청</strong> — 양육 부모가 면접교섭 결정을 이행하지 않으면, 가정법원에 이행명령을 신청합니다. 법원은 일정 기간 내에 이행할 것을 명령합니다.</li>\n<li><strong>과태료 부과</strong> — 이행명령에도 불구하고 이행하지 않으면, 1천만원 이하의 과태료가 부과될 수 있습니다(가사소송법 제68조).</li>\n<li><strong>양육권 변경 사유</strong> — 면접교섭을 지속적으로 방해하는 행위는 양육권 변경의 사유가 될 수 있습니다. 극단적인 경우 양육자 지정 변경 심판을 청구할 수 있습니다.</li>\n<li><strong>간접강제 신청</strong> — 면접교섭 불이행에 대해 간접강제금을 부과받을 수도 있어, 이행을 간접적으로 강제하는 수단이 됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 면접교섭 불이행 증거(문자, 녹음, 방문 거부 기록 등)를 꾸준히 수집해 두면, 이행명령이나 과태료 신청 시 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부 일방의 재산 처분이 이혼 사유가 되는 경우',
        summary:
          '대법원 2025므10730 사건(대법원, 2025.09.04 선고)에서 법원은 혼인생활 중 부양·협조의무 등을 통하여 공동으로 이룩한 재산의 주요 부분을 부부의 일방이 정당한 이유 없이 일방적으로 처분하여 가정공동체의 경제적 기반을 위태롭게 하는 행위가 혼인을 계속하기 어려운 중대한 사유에 해당할 수 있다고 판시했습니다.',
        takeaway:
          '부모 일방의 일방적 재산 처분은 이혼 사유가 될 수 있으며, 이는 자녀 양육 환경에도 영향을 미칩니다. 조부모 면접교섭 청구 시 이혼 경위도 법원이 참고합니다.',
      },
    ],
    faq: [
      {
        question: '외조부모(외할아버지·외할머니)도 면접교섭을 청구할 수 있나요?',
        answer:
          '<p>네, 비양육 부모 측 직계존속이면 친조부모뿐 아니라 외조부모도 면접교섭을 청구할 수 있습니다. 예를 들어 어머니가 양육하지 않는 경우, 외조부모가 면접교섭을 청구할 수 있습니다.</p>',
      },
      {
        question: '손자녀가 면접교섭을 거부하면 어떻게 되나요?',
        answer:
          '<p>법원은 자녀의 나이와 성숙도를 고려하여 자녀의 의사를 반영합니다. 다만 어린 자녀의 경우 양육 부모의 영향을 받았을 가능성도 함께 검토하며, 자녀의 복리를 종합적으로 판단합니다.</p>',
      },
      {
        question: '면접교섭은 어떤 방식으로 이루어지나요?',
        answer:
          '<p>법원은 자녀의 나이와 상황에 따라 대면 방문, 외박, 전화·영상통화 등 다양한 방식을 정할 수 있습니다. 처음에는 단시간 대면부터 시작하여 점차 확대하는 방식이 일반적입니다.</p>',
      },
      {
        question: '면접교섭 청구 시 필요한 서류는 무엇인가요?',
        answer:
          '<p>심판청구서, 가족관계증명서, 기본증명서(손자녀), 이혼 관련 서류, 조부모와 손자녀의 관계를 증명하는 자료(사진, 연락 기록 등)가 필요합니다. 인지대와 송달료도 납부해야 합니다.</p>',
      },
    ],
    cta: { text: '조부모 면접교섭권 청구 전략 AI 분석', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '양육비 증액 방법', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ── 이혼 3. 국제 이혼 자녀 양육권과 불법 탈취 대응 3단계 ──
  {
    domain: 'divorce',
    slug: 'divorce-international-child-custody-abduction',
    keyword: '국제 이혼 자녀 양육권 불법 탈취 대응',
    questionKeyword: '국제 이혼에서 상대방이 자녀를 데려간 경우 어떻게 하나요?',
    ctaKeyword: '국제 이혼 자녀 탈취 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '국제 이혼 자녀 양육권 탈취 대응 3단계 | 로앤가이드',
      description:
        '국제 이혼 상황에서 자녀를 데려간 상대방에게 어떻게 대응해야 할지 모른다면, 헤이그협약과 국내법 절차를 지금 확인하세요.',
    },
    intro:
      '<p>외국인 배우자가 이혼 협의 중 갑자기 자녀를 데리고 본국으로 출국했습니다. 아이를 돌려받으려면 어떤 법적 조치를 해야 할까요? 한국은 2013년 헤이그 국제아동탈취협약에 가입했으며, 이 협약에 따른 반환 절차와 국내 양육권 소송을 병행할 수 있습니다. 복잡한 국제 이혼에서 자녀를 보호하는 3단계 대응법을 정리합니다.</p>',
    sections: [
      {
        title: '1단계: 헤이그 국제아동탈취협약과 반환 절차',
        content:
          '<p><strong style="color:#1e3a5f">헤이그협약 체약국으로 자녀가 이동한 경우, 중앙당국을 통해 반환 절차를 개시할 수 있습니다.</strong></p>\n<ul>\n<li><strong>헤이그협약 적용 요건</strong> — 자녀가 16세 미만이고, 상거소국(한국)에서 양육권을 행사하고 있었으며, 상대방이 동의 없이 자녀를 체약국으로 데려간 경우 적용됩니다.</li>\n<li><strong>중앙당국 반환 신청</strong> — 한국의 중앙당국(법무부)에 아동반환 신청서를 제출합니다. 중앙당국은 상대국 중앙당국과 협력하여 자녀의 소재를 파악하고 반환 절차를 진행합니다.</li>\n<li><strong>반환 예외 사유</strong> — 반환이 자녀에게 신체적·심리적 위험을 초래하는 경우, 탈취 후 1년이 경과하여 자녀가 새 환경에 적응한 경우 등은 반환 거부 사유가 될 수 있습니다.</li>\n<li><strong>신속한 대응</strong> — 탈취 후 1년 이내에 반환 신청을 해야 유리합니다. 1년이 지나면 자녀가 새 환경에 적응했다는 항변이 가능해져 반환이 어려워집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 헤이그협약에 따른 반환 절차는 양육권을 결정하는 것이 아니라, 자녀를 상거소국으로 돌려보내 그곳에서 양육권을 결정하도록 하는 절차입니다.</blockquote>',
      },
      {
        title: '2단계: 국내 양육권 소송과 출국금지 조치',
        content:
          '<p><strong style="color:#1e3a5f">자녀가 아직 한국에 있거나, 비체약국으로 이동한 경우에는 국내법에 따른 양육권 소송과 긴급 조치를 진행합니다.</strong></p>\n<ul>\n<li><strong>양육권자 지정 심판</strong> — 가정법원에 양육권자 지정(변경) 심판을 청구합니다. 법원은 자녀의 복리를 기준으로 양육자를 결정합니다.</li>\n<li><strong>출국금지 신청</strong> — 상대방이 자녀를 데리고 출국할 우려가 있으면, 법원에 자녀에 대한 출국금지 사전처분을 신청합니다. 출입국관리사무소에도 긴급 출국금지를 요청할 수 있습니다.</li>\n<li><strong>여권 반납 명령</strong> — 법원은 사전처분으로 자녀의 여권 반납을 명령할 수 있어, 출국을 원천 차단합니다.</li>\n<li><strong>비체약국 대응</strong> — 헤이그협약에 가입하지 않은 국가로 자녀가 이동한 경우, 외교적 경로와 해당 국가의 가사법원 절차를 통해 대응해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 형사고소와 국제공조',
        content:
          '<p><strong style="color:#1e3a5f">양육권이 있는 부모의 동의 없이 자녀를 국외로 데려가는 행위는 형사 처벌 대상이 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>미성년자 약취·유인죄</strong> — 형법 제287조에 따라 미성년자를 약취 또는 유인한 자는 10년 이하의 징역에 처할 수 있습니다. 양육권이 없는 부모가 자녀를 데려간 경우에도 적용될 수 있습니다.</li>\n<li><strong>인터폴 적색수배</strong> — 형사고소 후, 상대방이 해외에 있으면 인터폴을 통한 국제공조 수사를 요청할 수 있습니다.</li>\n<li><strong>영사 지원 요청</strong> — 자녀가 체류하는 국가의 한국 대사관·영사관에 자녀 보호와 소재 파악을 요청할 수 있습니다.</li>\n<li><strong>국제 변호사 네트워크</strong> — 상대국에서의 법적 대응을 위해 해당 국가 변호사를 선임하고, 국내 변호사와 협력하여 동시 진행하는 것이 효과적입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 국제 자녀 탈취 사건은 시간이 지날수록 반환이 어려워지므로, 발생 즉시 법률 전문가의 도움을 받아 대응해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 당사자 사망 후에도 재산분할 청구 가능',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 재산분할 제도의 취지를 고려할 때, 이혼을 한 당사자 일방이 사망하더라도 그의 재산분할의무는 상속인들에게 승계되므로, 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '국제 이혼 사건에서도 재산분할권은 이혼 후에도 보호됩니다. 자녀 양육권과 함께 재산분할도 병행하여 청구하면 더 유리한 협상 위치를 확보할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '헤이그협약에 가입하지 않은 나라로 자녀를 데려간 경우는요?',
        answer:
          '<p>비체약국의 경우 헤이그협약에 의한 반환 절차를 이용할 수 없습니다. 해당 국가의 가사법원에 양육권 소송을 제기하거나, 외교적 경로를 통해 자녀 반환을 협의해야 합니다. 한국 대사관에 영사 지원을 요청하는 것이 첫 번째 단계입니다.</p>',
      },
      {
        question: '자녀의 이중국적이 양육권에 영향을 주나요?',
        answer:
          '<p>이중국적 자체가 양육권에 직접 영향을 주지는 않지만, 자녀의 상거소가 어느 나라인지가 중요합니다. 한국에서 주로 거주했다면 한국 법원이 관할권을 가질 수 있으며, 헤이그협약 적용 시에도 상거소국이 기준이 됩니다.</p>',
      },
      {
        question: '한국 법원의 양육권 결정이 외국에서도 효력이 있나요?',
        answer:
          '<p>한국 법원의 양육권 결정이 자동으로 외국에서 효력을 갖는 것은 아닙니다. 상대국에서 별도의 승인·집행 절차를 거쳐야 하며, 국가 간 사법공조 조약이 있는 경우 절차가 간소화될 수 있습니다.</p>',
      },
      {
        question: '국제 이혼 시 어느 나라 법이 적용되나요?',
        answer:
          '<p>국제사법에 따라 부부의 동일 본국법, 동일 상거소지법, 자녀와 가장 밀접한 관련이 있는 곳의 법 순서로 적용됩니다. 양육권은 일반적으로 자녀의 상거소지법이 적용됩니다.</p>',
      },
    ],
    cta: { text: '국제 이혼 자녀 대응 전략 AI 분석', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '양육비 증액 방법', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '재판이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '이혼 재산분할 기준', href: '/guide/divorce/divorce-property-division-comprehensive' },
    ],
  },

  // ── 교통사고 1. 회전교차로 교통사고 과실비율 산정 기준 4가지 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-roundabout-fault-standard',
    keyword: '회전교차로 교통사고 과실비율 산정 기준',
    questionKeyword: '회전교차로에서 사고가 나면 과실비율은 어떻게 되나요?',
    ctaKeyword: '회전교차로 과실비율 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '회전교차로 과실비율 기준 4가지 | 로앤가이드',
      description:
        '회전교차로에서 사고를 당해 과실비율이 걱정된다면, 진입·진행 차량별 과실비율 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>회전교차로(로터리)에서 진행 중이었는데 갑자기 진입하는 차량과 충돌했습니다. 상대방은 자신이 먼저 들어왔다고 주장합니다. 회전교차로에서의 과실비율은 일반 교차로와 다른 기준이 적용되며, 진입 차량과 진행 차량 사이의 우선순위가 핵심입니다. 4가지 유형별 과실비율 산정 기준을 정리합니다.</p>',
    sections: [
      {
        title: '회전교차로 통행 원칙과 우선순위',
        content:
          '<p><strong style="color:#1e3a5f">회전교차로에서는 이미 진행 중인 차량이 진입하려는 차량보다 우선합니다.</strong></p>\n<ul>\n<li><strong>진행 차량 우선</strong> — 도로교통법 제25조의2에 따라 회전교차로에 이미 진입하여 회전 중인 차량이 우선합니다. 진입하려는 차량은 회전 차량에게 양보해야 합니다.</li>\n<li><strong>서행 의무</strong> — 회전교차로에 진입할 때와 회전할 때 모두 서행해야 합니다. 제한속도를 초과하면 과실이 가중됩니다.</li>\n<li><strong>좌회전 금지</strong> — 회전교차로에서는 반시계 방향(우회전)으로만 진행해야 합니다. 역주행(좌회전)은 중대한 과실로 100% 과실이 인정될 수 있습니다.</li>\n<li><strong>일시정지 후 진입</strong> — 회전교차로 진입 시 양보선에서 일시정지하거나 서행하며 회전 중인 차량이 없는지 확인한 후 진입해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 회전교차로의 기본 원칙은 "이미 회전 중인 차량이 우선"입니다. 진입 시 가능한 한 회전 차량을 확인하세요.</blockquote>',
      },
      {
        title: '유형별 과실비율 산정 기준 4가지',
        content:
          '<p><strong style="color:#1e3a5f">사고 유형에 따라 기본 과실비율이 달라지며, 수정요소에 의해 조정됩니다.</strong></p>\n<ul>\n<li><strong>진입 차량 vs 회전 차량</strong> — 진입 차량이 회전 중인 차량과 충돌한 경우, 진입 차량의 기본 과실이 70~80%입니다. 회전 차량도 전방주시의무가 있으므로 20~30% 과실이 인정될 수 있습니다.</li>\n<li><strong>동시 진입 차량 간 충돌</strong> — 두 차량이 거의 동시에 진입하여 충돌한 경우, 좌측(회전 내측) 차량이 50~60%, 우측(회전 외측) 차량이 40~50%의 과실이 인정되는 경향입니다.</li>\n<li><strong>회전 중 차선 변경 사고</strong> — 2차로 회전교차로에서 차선을 변경하다가 사고가 난 경우, 차선 변경 차량의 과실이 60~70%로 산정됩니다.</li>\n<li><strong>회전교차로 출구 사고</strong> — 출구에서 나가려는 차량과 계속 회전하는 차량이 충돌한 경우, 출구 차량의 방향지시등 미사용, 급차선변경 등이 과실 가중 요소가 됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율 수정요소와 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">기본 과실비율은 구체적 사고 상황에 따라 수정되며, 블랙박스 영상이 가장 중요한 증거입니다.</strong></p>\n<ul>\n<li><strong>과속</strong> — 제한속도 초과 시 과실이 5~10% 가중됩니다. 회전교차로 내 제한속도는 일반적으로 20~30km/h입니다.</li>\n<li><strong>방향지시등 미사용</strong> — 진입·진출 시 방향지시등을 사용하지 않으면 과실이 5~10% 가중됩니다.</li>\n<li><strong>음주·무면허</strong> — 음주운전이나 무면허운전은 중과실로 과실이 10~20% 이상 가중됩니다.</li>\n<li><strong>블랙박스 확보</strong> — 사고 직후 자신의 블랙박스 영상을 보존하고, 상대방·목격자·CCTV 영상도 확보합니다. 보험사에 영상을 제출하면 과실비율 협의에 유리합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 보험사의 과실비율 결정에 동의하기 어려우면, 분쟁조정위원회(손해보험협회)에 조정을 신청하거나 소송을 제기할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 교차로 신호위반 차량의 사고 책임',
        summary:
          '대법원 2024도16742 사건(대법원, 2025.07.16 선고)에서 법원은 교차로 차량신호등이 적색인 상태에서 차량 운전자가 횡단보도 앞에서 정지하지 아니하고 횡단보도를 지나 우회전하던 중 사고가 발생한 경우, 이는 교통사고처리특례법상 신호위반에 해당한다고 판시했습니다.',
        takeaway:
          '회전교차로에서도 교통 신호와 통행 규칙 위반은 과실비율에 결정적 영향을 미칩니다. 사고 당시 상대방의 규칙 위반 여부를 블랙박스로 입증하세요.',
      },
    ],
    faq: [
      {
        question: '회전교차로 사고인데 상대방이 과실을 인정하지 않으면 어떻게 하나요?',
        answer:
          '<p>블랙박스 영상, CCTV, 목격자 진술 등 증거를 확보하여 보험사에 제출합니다. 보험사 간 과실비율 협의가 안 되면 손해보험협회 분쟁조정위원회에 조정을 신청하거나, 민사소송을 통해 법원의 판단을 받을 수 있습니다.</p>',
      },
      {
        question: '회전교차로에서 역주행 차량과 사고가 나면 과실비율은요?',
        answer:
          '<p>역주행(시계 방향 진행)은 도로교통법의 중대한 위반이므로, 역주행 차량에 90~100%의 과실이 인정될 수 있습니다. 상대방 차량은 예상하기 어려운 상황이므로 과실이 거의 없거나 매우 적습니다.</p>',
      },
      {
        question: '회전교차로 사고도 교통사고처리특례법이 적용되나요?',
        answer:
          '<p>네, 적용됩니다. 다만 신호위반, 중앙선침범 등 12대 중과실에 해당하면 종합보험에 가입했더라도 형사처벌 대상이 됩니다. 회전교차로 역주행은 중앙선침범에 준하여 중과실로 볼 수 있습니다.</p>',
      },
      {
        question: '보험사가 정한 과실비율에 이의를 제기할 수 있나요?',
        answer:
          '<p>네, 보험사의 과실비율 결정은 최종이 아닙니다. 손해보험협회 분쟁조정위원회에 무료로 조정을 신청할 수 있고, 민사소송을 통해 법원의 판단을 받을 수도 있습니다.</p>',
      },
    ],
    cta: { text: '회전교차로 사고 과실비율 AI 분석', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 절차', href: '/guide/traffic-accident/traffic-accident-settlement-process' },
      { label: '보험사 보상 요령', href: '/guide/traffic-accident/traffic-insurance-claim-guide' },
      { label: '음주운전 사고 대응', href: '/guide/dui/dui-accident-victim-compensation' },
      { label: '교통사고 형사합의', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '교통사고 증거 확보', href: '/guide/traffic-accident/traffic-accident-evidence-collection' },
    ],
  },

  // ── 교통사고 2. 버스·택시 급정거 승객 부상 손해배상 청구 4단계 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bus-sudden-stop-passenger-claim',
    keyword: '버스 택시 급정거 승객 부상 손해배상 청구',
    questionKeyword: '버스 급정거로 다쳤는데 보상받을 수 있나요?',
    ctaKeyword: '대중교통 사고 손해배상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '버스 급정거 승객 손해배상 4단계 | 로앤가이드',
      description:
        '대중교통 급정거로 다쳤는데 보상 방법을 모른다면, 운송사업자 책임과 손해배상 청구 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>출근길 버스에서 갑자기 급정거하는 바람에 손잡이를 놓치고 넘어져 허리를 다쳤습니다. 병원비도 많이 나오고 한동안 출근을 못 했는데, 보상은 어디에 어떻게 청구해야 할까요? 대중교통 승객은 운송사업자의 안전운송의무에 의해 보호받으며, 급정거로 인한 부상은 손해배상 청구가 가능합니다.</p>',
    sections: [
      {
        title: '1단계: 운송사업자의 안전운송의무와 책임 근거',
        content:
          '<p><strong style="color:#1e3a5f">버스·택시 운송사업자는 승객을 안전하게 운송할 의무가 있으며, 급정거로 인한 승객 부상에 대해 손해배상 책임을 집니다.</strong></p>\n<ul>\n<li><strong>안전운송의무</strong> — 상법 제148조에 따라 운송인은 여객의 운송에 관하여 주의를 해태하지 않았음을 증명하지 못하면 손해를 배상할 책임이 있습니다. 입증책임이 운송사업자에게 전환됩니다.</li>\n<li><strong>사용자 책임</strong> — 민법 제756조에 따라 버스 회사는 운전기사의 사용자로서 손해배상 책임을 집니다.</li>\n<li><strong>불법행위 책임</strong> — 운전기사 개인도 민법 제750조에 의한 불법행위 책임을 부담합니다. 승객은 운송사업자와 운전기사 모두를 상대로 청구할 수 있습니다.</li>\n<li><strong>과실 추정</strong> — 급정거로 승객이 부상을 입은 경우, 별도의 사유가 없는 한 운전기사의 과실이 추정됩니다. 운송사업자가 무과실을 입증해야 면책됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대중교통 급정거 사고는 승객이 과실을 입증할 필요 없이, 운송사업자가 무과실을 입증해야 면책됩니다.</blockquote>',
      },
      {
        title: '2~3단계: 증거 확보와 보험 청구',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 증거를 확보하고, 운송사업자의 보험을 통해 보상을 청구합니다.</strong></p>\n<ul>\n<li><strong>사고 현장 조치</strong> — 사고 발생 즉시 운전기사에게 사고 발생을 알리고, 차량 번호, 노선, 시간을 기록합니다. 차량 내 CCTV 영상 보존을 요청하세요.</li>\n<li><strong>의료 기록 확보</strong> — 사고 당일 병원에서 진료를 받고, 사고로 인한 부상임을 기재한 진단서를 발급받습니다. 초기 치료 기록이 인과관계 입증에 핵심입니다.</li>\n<li><strong>목격자 확보</strong> — 같이 탑승했던 승객의 연락처를 받아둡니다. 목격자 진술은 급정거 상황을 입증하는 중요한 증거입니다.</li>\n<li><strong>보험 청구</strong> — 버스·택시 운송사업자는 의무적으로 공제조합 또는 책임보험에 가입합니다. 해당 공제조합(버스공제조합, 택시공제조합 등)에 손해배상을 청구합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 손해배상 범위와 소송 절차',
        content:
          '<p><strong style="color:#1e3a5f">합의가 되지 않으면 민사소송을 통해 치료비, 일실수입, 위자료 등을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 실제 치료에 소요된 비용 전액을 청구합니다. 향후 치료비도 의사 소견에 따라 포함됩니다.</li>\n<li><strong>일실수입</strong> — 부상으로 근무하지 못한 기간의 소득 손실을 청구합니다. 급여명세서, 소득증명원 등으로 입증합니다.</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 배상입니다. 부상 정도, 치료 기간, 후유장해 여부 등에 따라 산정됩니다.</li>\n<li><strong>과실상계</strong> — 승객이 손잡이를 잡지 않았거나 안전벨트를 착용하지 않은 경우, 승객 과실 10~30%가 인정될 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 공제조합이 보상금을 지나치게 낮게 제시하면, 교통사고 전문 변호사를 통해 소송을 검토하는 것이 유리할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자차보험 자기부담금의 별도 청구 가능 여부',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자기차량손해보험에서 피보험자에게 손해액에서 자기부담금을 공제한 보험금을 지급한 경우, 피보험자는 자기부담금 중 제3자의 책임비율에 상응하는 금액을 제3자에게 별도로 청구할 수 있다고 판시했습니다.',
        takeaway:
          '대중교통 사고에서도 자차보험으로 치료비를 선처리한 경우, 자기부담금에 해당하는 부분은 운송사업자에게 별도로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '급정거 사고인데 차량 CCTV가 없으면 어떻게 하나요?',
        answer:
          '<p>목격자 진술, 주변 CCTV(정류장, 건물 등), 본인의 부상 부위와 낙상 방향 등으로 급정거 사실을 간접적으로 입증할 수 있습니다. 사고 당일 119 출동 기록이나 경찰 신고 기록도 중요한 증거가 됩니다.</p>',
      },
      {
        question: '승객이 손잡이를 잡지 않아도 보상받을 수 있나요?',
        answer:
          '<p>네, 보상받을 수 있습니다. 다만 승객의 과실(손잡이 미파지)이 인정되어 10~20% 정도 과실상계될 수 있습니다. 그래도 운송사업자의 주된 책임은 유지됩니다.</p>',
      },
      {
        question: '사고 후 며칠 뒤에 통증이 나타난 경우에도 청구 가능한가요?',
        answer:
          '<p>가능합니다. 다만 사고와 부상 사이의 인과관계를 입증해야 하므로, 통증 발생 즉시 병원을 방문하여 사고일, 사고 경위를 명확히 기록한 진단서를 받아야 합니다.</p>',
      },
      {
        question: '택시 급정거 사고도 같은 절차로 보상받나요?',
        answer:
          '<p>네, 택시도 동일한 안전운송의무가 적용됩니다. 택시공제조합 또는 택시 회사의 보험을 통해 보상을 청구하며, 절차는 버스 사고와 유사합니다.</p>',
      },
    ],
    cta: { text: '대중교통 사고 보상 전략 AI 분석', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 절차', href: '/guide/traffic-accident/traffic-accident-settlement-process' },
      { label: '교통사고 증거 확보', href: '/guide/traffic-accident/traffic-accident-evidence-collection' },
      { label: '보험사 보상 요령', href: '/guide/traffic-accident/traffic-insurance-claim-guide' },
      { label: '교통사고 형사합의', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '음주운전 사고 대응', href: '/guide/dui/dui-accident-victim-compensation' },
    ],
  },

  // ── 사기 1. 할부금융 사기 피해 대응과 구제 절차 5단계 ──
  {
    domain: 'fraud',
    slug: 'fraud-installment-finance-scam-response',
    keyword: '할부금융 사기 피해 대응 구제 절차',
    questionKeyword: '할부결제 사기를 당했는데 어떻게 대응하나요?',
    ctaKeyword: '할부금융 사기 구제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '할부금융 사기 구제 절차 5단계 | 로앤가이드',
      description:
        '할부결제 사기를 당해 항변권 행사 방법을 모른다면, 할부거래법상 구제 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>온라인에서 고가의 전자제품을 할부로 결제했는데, 상품이 배송되지 않고 판매자와 연락이 두절되었습니다. 할부금은 매달 빠져나가고 있는데, 받지도 못한 물건에 대한 할부금을 계속 내야 할까요? 할부거래법은 이런 상황에서 소비자를 보호하는 항변권을 규정하고 있으며, 이를 통해 할부금 지급을 거절하고 피해를 구제받을 수 있습니다.</p>',
    sections: [
      {
        title: '1~2단계: 할부거래법상 항변권과 즉시 조치',
        content:
          '<p><strong style="color:#1e3a5f">할부거래법 제16조는 소비자가 판매자의 채무불이행을 이유로 할부금 지급을 거절할 수 있는 항변권을 보장합니다.</strong></p>\n<ul>\n<li><strong>항변권 행사 요건</strong> — 할부가격이 20만원 이상이고, 할부기간 2개월 이상인 계약에서 판매자가 재화를 인도하지 않거나 하자 있는 재화를 인도한 경우 항변권을 행사할 수 있습니다.</li>\n<li><strong>할부금융사에 통지</strong> — 판매자의 채무불이행 사실을 할부금융사(카드사, 캐피탈 등)에 서면으로 통지합니다. 내용증명 우편이 확실합니다.</li>\n<li><strong>할부금 지급 거절</strong> — 항변권을 행사하면 나머지 할부금 지급을 정당하게 거절할 수 있습니다. 이미 납부한 할부금의 반환도 청구 가능합니다.</li>\n<li><strong>카드사 이의제기</strong> — 신용카드 할부결제인 경우, 카드사에 이의제기(차지백)를 신청합니다. 카드사는 판매자에게 대금 반환을 요구합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 항변권은 판매자가 아닌 할부금융사에 대해 행사하는 권리입니다. 판매자와 연락이 안 되더라도 할부금융사에 통지하면 됩니다.</blockquote>',
      },
      {
        title: '3~4단계: 형사고소와 소비자보호 기관 활용',
        content:
          '<p><strong style="color:#1e3a5f">판매자의 사기 행위에 대해 형사고소하고, 소비자보호 기관을 통해 추가 구제를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>사기죄 형사고소</strong> — 처음부터 물건을 보낼 의사가 없었다면 사기죄(형법 제347조)에 해당합니다. 경찰서에 고소장을 제출합니다.</li>\n<li><strong>한국소비자원 피해구제</strong> — 한국소비자원(1372)에 피해구제를 신청합니다. 소비자원은 판매자와 할부금융사 사이에서 조정을 시도합니다.</li>\n<li><strong>공정거래위원회 신고</strong> — 할부거래법 위반 행위를 공정거래위원회에 신고할 수 있습니다. 행정제재를 통해 피해 확산을 방지합니다.</li>\n<li><strong>전자상거래법 활용</strong> — 온라인 거래의 경우 전자상거래법에 따른 청약 철회, 결제대행업체를 통한 환불 절차도 병행할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '5단계: 민사소송과 피해 회복',
        content:
          '<p><strong style="color:#1e3a5f">합의나 조정이 불성립하면, 민사소송을 통해 피해금액 전액을 회복할 수 있습니다.</strong></p>\n<ul>\n<li><strong>손해배상 소송</strong> — 판매자를 상대로 계약 해제 및 대금 반환, 손해배상을 청구하는 민사소송을 제기합니다. 소액(3,000만원 이하)인 경우 소액심판 절차가 가능합니다.</li>\n<li><strong>할부금융사 상대 소송</strong> — 항변권을 행사했는데 할부금융사가 불응하면, 할부금융사를 상대로 채무부존재확인 소송을 제기할 수 있습니다.</li>\n<li><strong>가압류 신청</strong> — 판매자의 재산이 파악되면 가압류를 신청하여 판결 전에 재산을 보전합니다.</li>\n<li><strong>집단소송·단체소송</strong> — 동일 피해자가 다수인 경우, 소비자단체소송이나 공동소송을 통해 효율적으로 대응할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 형사 고소와 민사 소송을 병행하면, 형사 절차에서 확보된 증거를 민사 소송에 활용할 수 있어 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 컴퓨터 정보 입력을 통한 사기와 업무방해',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접 대상으로 한 것이 아니더라도, 그로 인한 정보처리 결과를 통해 사람을 착오에 빠뜨렸다면 사기죄의 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '온라인 할부결제 사기에서 판매자가 허위 정보를 입력하여 소비자를 속인 경우, 사기죄뿐 아니라 업무방해죄도 성립할 수 있습니다. 형사고소 시 두 가지 죄명을 모두 적시하세요.',
      },
    ],
    faq: [
      {
        question: '항변권은 언제까지 행사할 수 있나요?',
        answer:
          '<p>할부금을 완납하기 전까지 행사할 수 있습니다. 다만 가능한 빨리, 판매자의 채무불이행을 인지한 즉시 할부금융사에 통지하는 것이 좋습니다. 이미 완납한 경우에는 별도의 대금 반환 청구가 필요합니다.</p>',
      },
      {
        question: '할부금을 연체하면 신용에 영향이 있나요?',
        answer:
          '<p>항변권을 정당하게 행사하여 할부금 지급을 거절한 경우, 이를 연체로 처리하는 것은 부당합니다. 다만 항변권 행사 전에 서면 통지를 하지 않으면 연체로 처리될 수 있으므로, 가능한 한 내용증명으로 통지하세요.</p>',
      },
      {
        question: '신용카드 할부와 캐피탈 할부는 항변권 적용이 다른가요?',
        answer:
          '<p>기본적으로 동일하게 적용됩니다. 다만 신용카드의 경우 추가로 차지백(이의제기) 절차를 이용할 수 있어, 더 빠르게 결제를 취소할 수 있는 장점이 있습니다.</p>',
      },
      {
        question: '판매자가 일부 물건만 보내고 나머지를 보내지 않은 경우에도 항변권을 쓸 수 있나요?',
        answer:
          '<p>네, 판매자가 계약 내용대로 이행하지 않은 부분에 대해 항변권을 행사할 수 있습니다. 미인도 부분에 해당하는 할부금 지급을 거절할 수 있으며, 이미 납부한 초과분의 반환도 청구 가능합니다.</p>',
      },
    ],
    cta: { text: '할부금융 사기 구제 전략 AI 분석', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 증거 수집', href: '/guide/fraud/fraud-victim-evidence-guide' },
      { label: '사기 합의 절차', href: '/guide/fraud/fraud-settlement-amount-guide' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/used-trading-fraud-response' },
      { label: '보이스피싱 대응', href: '/guide/fraud/voice-phishing-victim-response' },
      { label: '투자 사기 대응', href: '/guide/fraud/investment-fraud-recovery-steps' },
    ],
  },

  // ── 사기 2. 부동산 임대 보증금 사기 예방과 피해 구제 4단계 ──
  {
    domain: 'fraud',
    slug: 'fraud-rental-deposit-scam-prevention',
    keyword: '부동산 임대 보증금 사기 예방 피해 구제',
    questionKeyword: '임대 보증금 사기를 당한 경우 어떻게 구제받나요?',
    ctaKeyword: '보증금 사기 피해 구제 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '임대 보증금 사기 예방과 구제 4단계 | 로앤가이드',
      description:
        '임대차 보증금 사기가 걱정되거나 이미 피해를 입었다면, 예방 체크리스트와 피해 구제 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>전세 계약을 했는데 알고 보니 집주인이 이미 여러 명에게 보증금을 받고 잠적했습니다. 등기부등본을 확인했을 때는 깨끗했는데, 계약 직후 근저당이 잡히고 소유권이 넘어갔습니다. 보증금 사기는 계약 전 예방이 가장 중요하지만, 이미 피해를 입었다면 형사고소와 민사소송을 통해 피해를 구제받을 수 있습니다.</p>',
    sections: [
      {
        title: '보증금 사기 예방 체크리스트 5가지',
        content:
          '<p><strong style="color:#1e3a5f">계약 전에 아래 5가지를 가능한 한 확인하면 보증금 사기의 대부분을 예방할 수 있습니다.</strong></p>\n<ul>\n<li><strong>등기부등본 확인</strong> — 계약 당일 등기부등본을 발급받아 소유자, 근저당권, 가압류 등을 확인합니다. 계약 직전에 근저당이 설정된 경우 주의해야 합니다.</li>\n<li><strong>임대인 본인 확인</strong> — 신분증과 등기부상 소유자를 대조합니다. 대리인이 나온 경우 위임장과 인감증명서를 가능한 한 확인하세요.</li>\n<li><strong>선순위 권리관계 확인</strong> — 이미 설정된 근저당, 다른 임차인의 보증금 합계가 시세의 70%를 넘으면 보증금 회수가 어려울 수 있습니다.</li>\n<li><strong>전세보증보험 가입</strong> — HUG(주택도시보증공사), SGI서울보증 등의 전세보증보험에 가입하면 임대인의 보증금 미반환 시 보증기관이 대신 지급합니다.</li>\n<li><strong>확정일자·전입신고</strong> — 계약 후 즉시 전입신고와 확정일자를 받으면 대항력과 우선변제권이 확보됩니다. 이사 당일 바로 처리하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 등기부등본은 계약 직전(당일)에 확인해야 합니다. 며칠 전 확인한 등기부는 그 사이 변동이 생길 수 있습니다.</blockquote>',
      },
      {
        title: '피해 발생 시 긴급 대응과 형사고소',
        content:
          '<p><strong style="color:#1e3a5f">보증금 사기가 확인되면 즉시 형사고소하고, 재산 보전 조치를 취해야 합니다.</strong></p>\n<ul>\n<li><strong>사기죄 형사고소</strong> — 임대인이 처음부터 보증금을 돌려줄 의사나 능력이 없었다면 사기죄(형법 제347조, 10년 이하 징역 또는 2천만원 이하 벌금)에 해당할 소지가 있습니다.</li>\n<li><strong>가압류 신청</strong> — 임대인의 다른 재산(부동산, 예금, 차량 등)에 대한 가압류를 신청하여 재산 도피를 차단합니다.</li>\n<li><strong>출국금지 신청</strong> — 임대인이 해외로 도피할 우려가 있으면 검찰에 출국금지를 요청합니다.</li>\n<li><strong>피해자 연대</strong> — 같은 임대인에게 피해를 입은 다른 임차인과 연대하면, 수사와 소송에서 유리해집니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '민사소송과 경매 배당을 통한 피해 회복',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 병행하여 민사소송과 경매 절차를 통해 보증금을 회수합니다.</strong></p>\n<ul>\n<li><strong>보증금 반환 소송</strong> — 임대인을 상대로 보증금 반환 민사소송을 제기합니다. 승소 판결 후 임대인의 재산에 대해 강제집행합니다.</li>\n<li><strong>배당 요구</strong> — 해당 부동산이 경매에 넘어가면, 확정일자와 대항력을 갖춘 임차인은 배당 요구를 하여 보증금을 우선 회수할 수 있습니다.</li>\n<li><strong>사해행위취소</strong> — 임대인이 보증금 반환을 피하기 위해 재산을 타인에게 이전한 경우, 사해행위취소 소송으로 원상회복을 청구합니다.</li>\n<li><strong>공인중개사 책임</strong> — 공인중개사가 권리관계 확인 의무를 위반한 경우, 공인중개사와 공제조합을 상대로 손해배상을 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 전세보증보험에 가입한 경우, 보증기관에 보증금 반환을 청구하면 신속하게 보상받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개 시 공인중개사의 선순위 확인 의무',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 개업공인중개사가 다가구주택 임대차계약을 중개할 때, 임대인이 관련 자료 제공을 거부하더라도 선순위 임대차보증금채권이 얼마나 있을 수 있는지 조사·확인하여 임차인에게 설명할 의무가 있다고 판시했습니다.',
        takeaway:
          '공인중개사가 선순위 보증금을 제대로 확인·설명하지 않아 피해를 입은 경우, 공인중개사와 공제조합에 손해배상을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '전세보증보험에 가입하지 않았는데 보증금을 돌려받을 수 있나요?',
        answer:
          '<p>전세보증보험 없이도 민사소송을 통해 보증금을 청구할 수 있습니다. 확정일자와 대항력이 있으면 경매 배당에서 우선변제받을 수 있으며, 소액임차인은 최우선변제도 가능합니다.</p>',
      },
      {
        question: '집주인이 아닌 사람과 계약했는데 사기인가요?',
        answer:
          '<p>소유자가 아닌 사람이 임대인으로 계약한 경우, 소유자의 위임이 없었다면 무권대리로서 계약이 무효이며, 사기에 해당할 수 있습니다. 가능한 한 등기부상 소유자와 계약 당사자가 일치하는지 확인하세요.</p>',
      },
      {
        question: '이중계약(같은 집에 여러 명과 전세 계약)도 사기인가요?',
        answer:
          '<p>네, 같은 부동산에 대해 보증금 반환 능력을 초과하여 여러 임차인과 계약하고 보증금을 편취하는 것은 사기죄에 해당할 소지가 있습니다. 특히 보증금 총액이 시세를 초과하면 사기 의도가 인정되기 쉽습니다.</p>',
      },
      {
        question: '깡통전세(근저당이 시세를 초과)도 사기에 해당하나요?',
        answer:
          '<p>근저당 설정 자체가 사기는 아니지만, 임대인이 보증금 반환 능력이 없음을 알면서도 이를 숨기고 계약한 경우에는 사기죄가 성립할 수 있습니다. 계약 전 선순위 권리 총액을 가능한 한 확인하세요.</p>',
      },
    ],
    cta: { text: '보증금 사기 피해 구제 AI 분석', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 증거 수집', href: '/guide/fraud/fraud-victim-evidence-guide' },
      { label: '전세보증금 반환 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '사기 합의 절차', href: '/guide/fraud/fraud-settlement-amount-guide' },
      { label: '보이스피싱 대응', href: '/guide/fraud/voice-phishing-victim-response' },
      { label: '투자 사기 대응', href: '/guide/fraud/investment-fraud-recovery-steps' },
    ],
  },

  // ── 회생. 개인회생 중 양육비·부양료 납부 의무와 면책 범위 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-alimony-child-support-obligation',
    keyword: '개인회생 양육비 부양료 납부 의무 면책',
    questionKeyword: '개인회생 중에도 양육비를 계속 내야 하나요?',
    ctaKeyword: '개인회생 양육비 의무 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '개인회생 양육비·부양료 면책 범위 | 로앤가이드',
      description:
        '개인회생 중 양육비를 계속 납부해야 하는지 모른다면, 비면책채권 범위와 변제계획 반영 방법을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생을 신청했는데, 전 배우자에게 매달 양육비를 보내고 있습니다. 개인회생이 인가되면 양육비도 면책되는 걸까요? 양육비와 부양료는 채무자회생법상 비면책채권으로, 개인회생 면책 후에도 납부 의무가 계속됩니다. 변제계획에 양육비를 어떻게 반영해야 하는지 정확히 이해해야 합니다.</p>',
    sections: [
      {
        title: '양육비·부양료의 비면책채권 성격',
        content:
          '<p><strong style="color:#1e3a5f">채무자회생법 제625조 제2항 단서에 따라 양육비와 부양료는 면책 대상에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>비면책채권</strong> — 양육비, 부양료 등 가족법상 의무에 기한 청구권은 개인회생 면책 결정이 있더라도 책임이 면제되지 않습니다.</li>\n<li><strong>법적 근거</strong> — 채무자회생법 제566조 제4호(파산 면책), 제625조 제2항(개인회생 면책) 모두 "양육비, 부양료 그 밖에 이와 유사한 성격의 청구권"을 비면책채권으로 규정합니다.</li>\n<li><strong>계속 납부 의무</strong> — 변제계획 기간 중에도 양육비는 별도로 계속 납부해야 합니다. 변제계획에 따른 변제와 양육비 납부는 별개입니다.</li>\n<li><strong>밀린 양육비</strong> — 개인회생 개시 전 밀린 양육비도 비면책채권이므로, 면책 후에도 청구가 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 양육비는 어떤 도산 절차를 거치더라도 면책되지 않는 최우선 의무입니다.</blockquote>',
      },
      {
        title: '변제계획에 양육비를 반영하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">개인회생 변제계획을 수립할 때, 양육비 지출을 고려하여 가용소득을 산정해야 합니다.</strong></p>\n<ul>\n<li><strong>가용소득 산정</strong> — 총소득에서 생활비와 양육비를 공제한 나머지가 변제에 사용됩니다. 양육비는 필수 지출로 인정될 수 있습니다.</li>\n<li><strong>양육비 금액 소명</strong> — 법원에 양육비 지급 사실을 소명해야 합니다. 양육비 심판 결정문, 공정증서, 합의서 등을 제출합니다.</li>\n<li><strong>과다 양육비 문제</strong> — 양육비가 과다하게 책정되어 변제 가능 금액이 지나치게 줄어들면, 법원이 양육비 감액을 권고하거나 변제계획 인가를 거절할 수 있습니다.</li>\n<li><strong>양육비 변경 심판</strong> — 개인회생으로 경제 상황이 변한 경우, 가정법원에 양육비 감액 심판을 청구할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비 미납 시 불이익과 대응',
        content:
          '<p><strong style="color:#1e3a5f">양육비를 납부하지 않으면 강제집행, 운전면허 정지 등 강력한 불이익이 따릅니다.</strong></p>\n<ul>\n<li><strong>강제집행</strong> — 양육비 채권자는 채무자의 급여, 예금, 부동산 등에 대한 강제집행을 할 수 있습니다. 급여 압류의 경우 급여의 1/2까지 압류됩니다.</li>\n<li><strong>이행명령·감치</strong> — 가정법원은 양육비 미납자에 대해 이행명령을 하고, 불이행 시 30일 이내의 감치(구금)를 명할 수 있습니다.</li>\n<li><strong>운전면허 정지</strong> — 양육비이행관리원을 통해 양육비를 3회 이상 미납하면 운전면허 정지, 출국금지 등의 행정제재가 가능합니다.</li>\n<li><strong>명단 공개</strong> — 양육비이행관리원은 정당한 사유 없이 양육비를 이행하지 않는 사람의 인적사항을 공개할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 경제적 어려움으로 양육비를 납부하기 어려운 경우, 일방적으로 중단하지 말고 가정법원에 양육비 감액 심판을 청구하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 개인회생 면책과 보증인 구상금채권의 효력',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16 선고)에서 법원은 보증인이 있는 개인회생채권에 관하여 채무자가 변제계획에 따른 변제를 완료하여 면책결정을 받은 경우, 개인회생채권자목록에 보증인이 누락되었더라도 면책결정의 효력이 보증인의 구상금채권에 미친다고 판시했습니다.',
        takeaway:
          '개인회생 면책은 일반 채무에는 효력이 미치지만, 양육비·부양료 같은 비면책채권에는 미치지 않습니다. 면책 후에도 양육비 납부 의무는 계속되므로, 변제계획 수립 시 양육비를 가능한 한 반영하세요.',
      },
    ],
    faq: [
      {
        question: '개인회생 변제 기간 중 양육비를 줄일 수 있나요?',
        answer:
          '<p>가정법원에 양육비 감액 심판을 청구할 수 있습니다. 개인회생 신청 사실, 소득 감소 등을 소명하면 법원이 양육비를 조정해줄 수 있습니다. 다만 자녀의 복리를 고려하여 감액 범위가 제한될 수 있습니다.</p>',
      },
      {
        question: '양육비를 내지 않으면 개인회생이 취소되나요?',
        answer:
          '<p>양육비 미납 자체가 개인회생 취소 사유는 아닙니다. 다만 변제계획에 따른 변제를 이행하지 않으면 개인회생이 폐지될 수 있으므로, 양육비와 변제금을 모두 납부할 수 있도록 계획을 세워야 합니다.</p>',
      },
      {
        question: '파산 면책과 개인회생 면책에서 양육비 처리가 다른가요?',
        answer:
          '<p>동일합니다. 파산과 개인회생 모두 양육비·부양료를 비면책채권으로 규정하고 있어, 어떤 도산 절차를 거치더라도 양육비 납부 의무는 면제되지 않습니다.</p>',
      },
      {
        question: '양육비이행관리원에서 어떤 도움을 받을 수 있나요?',
        answer:
          '<p>양육비이행관리원(1644-6621)은 양육비 이행 독촉, 법률 지원, 한시적 양육비 긴급지원, 미이행자 명단 공개·제재 등의 서비스를 제공합니다. 양육비를 받지 못하고 있다면 이행관리원에 이행확보 신청을 할 수 있습니다.</p>',
      },
    ],
    cta: { text: '개인회생 양육비 대응 전략 AI 분석', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '개인회생 절차 안내', href: '/guide/rehabilitation/rehabilitation-application-process' },
      { label: '파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
      { label: '양육비 증액 방법', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
    ],
  },

  // ── 파산. 상속 채무 파산 면책 가능 여부와 절차 4단계 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-inheritance-debt-discharge-guide',
    keyword: '상속 채무 파산 면책 절차',
    questionKeyword: '부모의 빚을 상속받았는데 파산으로 면책받을 수 있나요?',
    ctaKeyword: '상속 채무 파산 면책 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속 채무 파산 면책 절차 4단계 | 로앤가이드',
      description:
        '부모의 빚을 상속받아 파산을 고민 중이라면, 한정승인과 파산면책 절차 비교를 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 돌아가신 아버지에게 알지 못했던 빚이 수억원이 있었습니다. 상속포기 기간도 지나버렸고, 한정승인도 하지 못했습니다. 이 빚을 평생 갚아야 하는 걸까요? 상속받은 채무도 파산·면책 절차를 통해 면제받을 수 있으며, 한정승인이 가능한 경우와 비교하여 최선의 방법을 선택해야 합니다.</p>',
    sections: [
      {
        title: '상속 채무 처리 방법 3가지 비교',
        content:
          '<p><strong style="color:#1e3a5f">상속 채무를 처리하는 방법은 상속포기, 한정승인, 파산면책 3가지이며, 각각 요건과 효과가 다릅니다.</strong></p>\n<ul>\n<li><strong>상속포기</strong> — 상속 개시를 안 날부터 3개월 이내에 가정법원에 신고합니다. 상속재산과 채무 모두 포기합니다. 기간을 놓치면 불가능합니다.</li>\n<li><strong>한정승인</strong> — 상속재산의 한도에서만 채무를 변제합니다. 역시 3개월 이내에 신고해야 하지만, 채무를 뒤늦게 알게 된 경우 특별한정승인이 가능합니다.</li>\n<li><strong>파산·면책</strong> — 상속포기·한정승인 기간을 놓쳐 단순승인이 된 경우, 또는 자신의 채무까지 합산하면 지급불능 상태인 경우, 파산 신청 후 면책을 받을 수 있습니다.</li>\n<li><strong>선택 기준</strong> — 상속포기·한정승인 기간 내라면 이를 우선 고려하고, 기간이 지났거나 자신의 채무까지 과다한 경우 파산·면책을 검토합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상속포기·한정승인은 3개월의 기간제한이 있지만, 파산·면책은 기간제한 없이 신청할 수 있습니다.</blockquote>',
      },
      {
        title: '파산·면책 신청 절차와 요건',
        content:
          '<p><strong style="color:#1e3a5f">상속 채무로 인해 지급불능 상태에 해당하면, 법원에 파산 및 면책을 동시에 신청합니다.</strong></p>\n<ul>\n<li><strong>지급불능 요건</strong> — 현재 보유 재산과 소득으로 채무를 변제할 수 없는 상태여야 합니다. 상속 채무와 본인 채무를 합산하여 판단합니다.</li>\n<li><strong>서류 준비</strong> — 피상속인의 채무 내역, 상속관계 증명서류, 본인의 재산·소득 목록, 채권자 목록 등을 준비합니다.</li>\n<li><strong>파산 선고</strong> — 법원이 지급불능을 인정하면 파산을 선고합니다. 파산관재인이 선임되어 재산을 환가·배당합니다.</li>\n<li><strong>면책 심리</strong> — 면책불허가사유(사기적 차입, 재산 은닉 등)가 없으면 면책이 허가됩니다. 상속 채무는 본인의 과실이 아니므로 면책이 인정될 가능성이 높습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면책 범위와 사후 관리',
        content:
          '<p><strong style="color:#1e3a5f">면책이 확정되면 상속 채무를 포함한 대부분의 파산채권에 대해 책임이 면제되지만, 일부 비면책채권은 제외됩니다.</strong></p>\n<ul>\n<li><strong>면책 범위</strong> — 일반 금전채무(대출, 신용카드, 보증채무 등)는 모두 면책됩니다. 상속받은 채무도 동일하게 면책 대상입니다.</li>\n<li><strong>비면책채권</strong> — 세금, 벌금, 양육비, 고의 불법행위 손해배상 등은 면책되지 않습니다. 상속 채무 중 이에 해당하는 것이 있는지 확인해야 합니다.</li>\n<li><strong>채무불이행자 등재 해제</strong> — 면책이 확정되면 채무불이행자명부에서 이름이 말소됩니다. 신용회복 절차를 통해 경제적 재기를 준비합니다.</li>\n<li><strong>재산 취득</strong> — 면책 후 취득하는 재산에 대해서는 면책된 채권자가 권리를 행사할 수 없습니다. 경제 활동을 자유롭게 할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 상속 채무로 인한 파산은 본인의 잘못이 아닌 불가피한 사정이므로, 면책불허가사유에 해당할 가능성이 매우 낮습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책 후 채무불이행자명부 등재 해제',
        summary:
          '대법원 2025마7576 사건(대법원, 2026.01.09 선고)에서 법원은 채무자에 대한 면책결정이 확정되어 해당 채무에 대한 책임이 면제되는 경우, 채무불이행자명부 등재신청에 정당한 이유가 없는 것으로 보아 신청을 기각해야 한다고 판시했습니다.',
        takeaway:
          '파산 면책이 확정되면 채무불이행자명부에서 이름이 말소되어 신용회복이 가능합니다. 상속 채무로 인한 등재도 마찬가지이므로, 면책 확정 후 신속히 말소 신청하세요.',
      },
    ],
    faq: [
      {
        question: '상속포기 기간(3개월)이 지났는데 한정승인은 가능한가요?',
        answer:
          '<p>상속 채무가 있는 줄 몰랐다가 뒤늦게 알게 된 경우, 안 날부터 3개월 이내에 특별한정승인을 신청할 수 있습니다(민법 제1019조 제3항). 다만 상속재산 처분 등의 행위가 있었으면 제한될 수 있습니다.</p>',
      },
      {
        question: '상속 채무만으로 파산 신청이 가능한가요?',
        answer:
          '<p>네, 상속 채무만으로도 지급불능 상태에 해당하면 파산 신청이 가능합니다. 본인의 채무가 없더라도 상속 채무 때문에 갚을 수 없는 상태라면 파산 요건이 충족됩니다.</p>',
      },
      {
        question: '파산하면 현재 살고 있는 집도 빼앗기나요?',
        answer:
          '<p>파산 시 자유재산(생활필수품, 일정 금액의 예금 등)은 보호됩니다. 다만 주택의 경우 가치에 따라 환가 대상이 될 수 있습니다. 임차인인 경우 임차보증금 중 소액보증금은 보호됩니다.</p>',
      },
      {
        question: '상속인이 여러 명인데 일부만 파산 신청할 수 있나요?',
        answer:
          '<p>네, 공동상속인 중 일부만 파산 신청이 가능합니다. 각 상속인은 자신의 상속분에 해당하는 채무에 대해 개별적으로 파산·면책을 신청할 수 있습니다.</p>',
      },
    ],
    cta: { text: '상속 채무 면책 가능성 AI 분석', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
      { label: '개인회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '개인회생 절차 안내', href: '/guide/rehabilitation/rehabilitation-application-process' },
      { label: '이혼 재산분할 기준', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '소액 소송 절차', href: '/guide/small-claims/small-claims-lawsuit-guide' },
    ],
  },

  // ── 전세. 임대인 변경 시 전세보증금 보호와 위험 대응 3단계 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-change-deposit-risk',
    keyword: '임대인 변경 전세보증금 보호 위험 대응',
    questionKeyword: '건물이 매매되어 임대인이 바뀌면 보증금은 어떻게 되나요?',
    ctaKeyword: '임대인 변경 보증금 보호 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 변경 시 보증금 보호 3단계 | 로앤가이드',
      description:
        '건물이 매매·경매로 임대인이 바뀌었다면, 대항력·우선변제권 유지 여부와 보증금 보호 방법을 지금 확인하세요.',
    },
    intro:
      '<p>살고 있는 아파트가 갑자기 경매로 넘어가거나, 집주인이 다른 사람에게 건물을 팔았다는 통보를 받았습니다. 전세보증금은 새 집주인에게 받을 수 있을까요? 대항력을 갖춘 임차인은 새로운 소유자에게도 보증금 반환을 청구할 수 있지만, 대항력이 없는 경우에는 보증금을 잃을 수 있습니다. 임대인 변경 시 보증금을 지키는 3단계를 정리합니다.</p>',
    sections: [
      {
        title: '1단계: 대항력·우선변제권 확인',
        content:
          '<p><strong style="color:#1e3a5f">임대인이 변경되었을 때 보증금 보호 여부는 임차인의 대항력 취득 시점이 결정합니다.</strong></p>\n<ul>\n<li><strong>대항력</strong> — 주택의 인도(입주)와 주민등록(전입신고)을 마치면 그 다음 날 대항력이 발생합니다. 대항력 취득 후 설정된 근저당보다 우선합니다.</li>\n<li><strong>우선변제권</strong> — 대항력에 더해 확정일자를 받으면 경매 시 배당에서 우선변제를 받을 수 있습니다. 확정일자는 동사무소나 법원에서 받을 수 있습니다.</li>\n<li><strong>대항력 유지 조건</strong> — 대항력은 입주와 전입신고가 계속 유지되어야 합니다. 전입을 빼면 대항력이 상실되므로, 이사하지 않는 한 전입을 유지하세요.</li>\n<li><strong>경매와 매매의 차이</strong> — 매매의 경우 새 소유자가 임대인 지위를 당연히 승계합니다. 경매의 경우 대항력이 선순위이면 보호되지만, 후순위이면 말소됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대항력이 근저당보다 먼저 설정되었는지가 보증금 보호의 핵심 판단 기준입니다.</blockquote>',
      },
      {
        title: '2단계: 임대인 변경 유형별 대응',
        content:
          '<p><strong style="color:#1e3a5f">임대인 변경 유형(매매, 경매, 상속 등)에 따라 대응 방법이 달라집니다.</strong></p>\n<ul>\n<li><strong>매매(일반 거래)</strong> — 대항력 있는 임차인의 보증금 반환 의무는 새 소유자에게 당연히 승계됩니다. 임차인은 새 소유자에게 보증금을 청구하면 됩니다.</li>\n<li><strong>경매·공매</strong> — 대항력이 선순위이면 새 낙찰자에게 보증금을 청구하거나, 배당 절차에서 우선변제를 받습니다. 후순위이면 배당에서 받지 못한 금액은 종전 임대인에게 청구해야 합니다.</li>\n<li><strong>상속</strong> — 임대인이 사망하면 상속인들이 임대인 지위를 승계합니다. 보증금 반환 의무도 상속됩니다.</li>\n<li><strong>법인 합병·분할</strong> — 법인 임대인이 합병·분할되면, 합병법인 또는 분할 승계법인이 임대인 지위를 승계합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 보증금 보호 강화 조치',
        content:
          '<p><strong style="color:#1e3a5f">임대인 변경 리스크에 대비하여 사전에 보증금 보호를 강화해야 합니다.</strong></p>\n<ul>\n<li><strong>전세보증보험 가입</strong> — HUG·SGI 등의 전세보증보험에 가입하면, 임대인이 변경되거나 보증금을 돌려주지 않을 때 보증기관이 대신 지급합니다.</li>\n<li><strong>임차권등기명령</strong> — 임대차 기간이 만료된 후 보증금을 돌려받지 못한 경우, 법원에 임차권등기명령을 신청하면 이사를 가도 대항력이 유지됩니다.</li>\n<li><strong>등기부 변동 모니터링</strong> — 대법원 인터넷등기소에서 등기 변동 알림 서비스를 신청하면, 소유권 이전이나 근저당 설정 등의 변동이 있을 때 알림을 받을 수 있습니다.</li>\n<li><strong>새 소유자와 관계 정리</strong> — 임대인이 변경되면 새 소유자와 임대차 관계를 확인하고, 필요시 새로운 임대차 계약서를 작성합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 등기부 변동 알림을 설정해두면, 임대인이 건물을 처분하려는 움직임을 사전에 파악할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인이 임차주택을 양수한 경우 대항력 상실',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 대항력을 갖춘 임차인이 해당 임차주택을 양수하여 소유자가 된 경우, 임차인의 주민등록은 소유권이전등기 이후에는 대항력의 유효한 공시방법이 될 수 없고, 대항력은 소유권 취득 시에 소멸한다고 판시했습니다.',
        takeaway:
          '임차인이 직접 임차주택을 매수하는 경우, 대항력이 소멸하므로 보증금 보호에 주의해야 합니다. 전세보증보험의 면책 사유가 될 수 있으니, 매수 전 보증기관에 확인하세요.',
      },
    ],
    faq: [
      {
        question: '새 집주인이 보증금을 안 돌려주면 어떻게 하나요?',
        answer:
          '<p>대항력이 있다면 새 소유자에게 보증금 반환을 청구하는 민사소송을 제기할 수 있습니다. 임차권등기명령을 먼저 신청한 후 이사를 가고, 소송을 진행하는 것이 안전합니다.</p>',
      },
      {
        question: '경매로 넘어갔는데 대항력이 후순위인 경우는요?',
        answer:
          '<p>경매 배당에서 받지 못한 금액은 종전 임대인(전 소유자)에게 청구해야 합니다. 소액임차인에 해당하면 일정 금액까지 최우선변제를 받을 수 있습니다.</p>',
      },
      {
        question: '전입신고를 빼면 바로 대항력이 사라지나요?',
        answer:
          '<p>네, 전입을 빼는 순간 대항력이 상실됩니다. 이사가 불가피한 경우 임차권등기명령을 먼저 받으면, 전입을 빼도 대항력이 유지됩니다.</p>',
      },
      {
        question: '임대인이 동의 없이 건물을 팔 수 있나요?',
        answer:
          '<p>네, 임대인은 임차인의 동의 없이 건물을 매도할 수 있습니다. 다만 대항력 있는 임차인의 보증금 반환 의무는 새 소유자에게 당연히 승계되므로, 임차인의 권리는 보호됩니다.</p>',
      },
    ],
    cta: { text: '임대인 변경 보증금 보호 AI 분석', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세보증금 반환 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '임차권등기명령 절차', href: '/guide/jeonse/jeonse-registration-order-procedure' },
      { label: '전세사기 예방 가이드', href: '/guide/jeonse/jeonse-fraud-prevention-checklist' },
      { label: '소액임차인 보호', href: '/guide/jeonse/small-deposit-tenant-protection' },
      { label: '경매 보증금 배당', href: '/guide/jeonse/jeonse-auction-distribution-guide' },
    ],
  },

  // ── 층간소음. 관리사무소 민원과 법적 조치 절차 5단계 ──
  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-noise-management-office-legal-action',
    keyword: '층간소음 관리사무소 민원 법적 조치 절차',
    questionKeyword: '층간소음이 심한데 관리사무소 민원 외에 법적 조치가 가능한가요?',
    ctaKeyword: '층간소음 법적 조치 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '층간소음 법적 조치 절차 5단계 | 로앤가이드',
      description:
        '층간소음에 시달리는데 관리사무소 민원만으로 해결이 안 된다면, 5단계 법적 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>매일 밤 윗집에서 쿵쿵 뛰는 소리에 잠을 이룰 수가 없습니다. 관리사무소에 여러 번 민원을 넣었지만 달라지는 것이 없습니다. 층간소음은 환경분쟁조정, 민사소송, 형사고소까지 법적으로 대응할 수 있는 수단이 있습니다. 관리사무소 민원부터 소액재판까지 5단계 법적 대응 절차를 정리합니다.</p>',
    sections: [
      {
        title: '1~2단계: 관리사무소 민원과 층간소음 측정',
        content:
          '<p><strong style="color:#1e3a5f">법적 대응의 첫 단계는 관리사무소 민원과 객관적인 소음 측정 기록을 확보하는 것입니다.</strong></p>\n<ul>\n<li><strong>관리사무소 민원 접수</strong> — 서면으로 민원을 접수하고, 접수 내역을 보관합니다. 구두 민원은 증거가 남지 않으므로 가능한 한 서면(이메일, 문자 포함)으로 남기세요.</li>\n<li><strong>소음 기록 작성</strong> — 날짜, 시간, 소음 종류, 지속 시간을 기록합니다. 스마트폰 소음측정 앱(데시벨X 등)으로 소음 수준을 측정하여 기록합니다.</li>\n<li><strong>층간소음 이웃사이센터</strong> — 한국환경공단 층간소음 이웃사이센터(1661-2642)에 신고하면, 전문 기관의 소음 측정 서비스를 받을 수 있습니다.</li>\n<li><strong>법적 기준</strong> — 공동주택 층간소음 기준은 직접충격음 1분 등가소음도 43dB(A)을 초과하면 위반입니다(주간 기준). 야간(22시~06시)은 38dB(A)입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소음 기록은 최소 2주 이상 지속적으로 작성해야 법적 대응 시 증거력이 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '3단계: 환경분쟁조정위원회 조정 신청',
        content:
          '<p><strong style="color:#1e3a5f">소송 전 환경분쟁조정위원회에 조정을 신청하면, 비용 부담 없이 분쟁을 해결할 수 있습니다.</strong></p>\n<ul>\n<li><strong>조정 신청</strong> — 중앙환경분쟁조정위원회 또는 시·도 환경분쟁조정위원회에 조정을 신청합니다. 신청비용은 무료이며, 온라인으로도 가능합니다.</li>\n<li><strong>조정 절차</strong> — 위원회가 양 당사자를 조사하고, 소음 측정을 실시합니다. 조정안을 제시하여 합의를 유도합니다.</li>\n<li><strong>배상금 결정</strong> — 조정에서 인정되는 배상금은 통상 50만~300만원 수준입니다. 소음 정도, 기간, 피해 정도에 따라 달라집니다.</li>\n<li><strong>재정 신청</strong> — 조정이 불성립하면 재정(심사)을 신청할 수 있으며, 재정 결과는 당사자가 60일 이내에 이의하지 않으면 확정됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4~5단계: 민사소송과 형사고소',
        content:
          '<p><strong style="color:#1e3a5f">조정으로 해결되지 않으면, 민사소송으로 손해배상과 금지청구를 하거나, 형사고소를 할 수 있습니다.</strong></p>\n<ul>\n<li><strong>손해배상 소송</strong> — 불법행위(민법 제750조)에 기한 손해배상을 청구합니다. 정신적 피해에 대한 위자료와 이사비용 등 실제 손해를 청구할 수 있습니다.</li>\n<li><strong>소액재판 활용</strong> — 청구금액이 3,000만원 이하이면 소액심판 절차를 이용하여 빠르게 판결을 받을 수 있습니다.</li>\n<li><strong>금지청구</strong> — 일정 수준 이상의 소음을 내지 말 것을 청구하는 방해금지 가처분도 신청할 수 있습니다.</li>\n<li><strong>형사고소</strong> — 지속적이고 고의적인 층간소음은 경범죄처벌법상 인근소란죄(10만원 이하 벌금 등)에 해당할 수 있습니다. 반복적 소음 행위는 형법상 모욕이나 협박으로 구성될 수도 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 환경분쟁조정위원회 조정을 먼저 거치는 것이 비용과 시간 면에서 효율적이며, 소송에서도 조정 결과를 증거로 활용할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공인중개사의 권리관계 확인 의무 위반과 손해배상',
        summary:
          '대법원 2024다305087 사건(대법원, 2025.12.04 선고)에서 법원은 공동근저당권이 설정된 다세대주택의 임대차를 중개하면서 다른 세대의 선순위권리와 임차인 현황을 확인하지 않은 공인중개사의 확인·설명의무 위반을 인정했습니다.',
        takeaway:
          '층간소음 문제로 이사를 결정할 때, 새 주택의 권리관계를 공인중개사를 통해 철저히 확인하고, 소음 이력도 사전에 조사하세요.',
      },
    ],
    faq: [
      {
        question: '스마트폰 소음측정 앱의 기록도 증거로 인정되나요?',
        answer:
          '<p>법적 절차에서 참고자료로 활용될 수 있지만, 정밀한 증거로 인정되기는 어려울 수 있습니다. 환경분쟁조정위원회나 이웃사이센터의 공식 소음 측정 결과가 더 신뢰성 있는 증거가 됩니다.</p>',
      },
      {
        question: '층간소음으로 받을 수 있는 배상금은 얼마 정도인가요?',
        answer:
          '<p>환경분쟁조정위원회에서는 통상 50만~300만원, 민사소송에서는 100만~500만원 수준의 위자료가 인정되는 경향입니다. 소음 정도, 기간, 건강 피해 정도에 따라 달라집니다.</p>',
      },
      {
        question: '상대방이 조정에 응하지 않으면 어떻게 하나요?',
        answer:
          '<p>환경분쟁조정위원회의 조정에 상대방이 불참해도 위원회가 직권으로 사실조사를 할 수 있습니다. 조정이 불성립하면 재정을 신청하거나, 바로 민사소송으로 넘어갈 수 있습니다.</p>',
      },
      {
        question: '층간소음을 경찰에 신고하면 출동해 주나요?',
        answer:
          '<p>네, 112에 신고하면 경찰이 출동합니다. 경찰은 현장에서 소음 중단을 요청하고, 반복 신고 시 경범죄처벌법에 따른 즉결심판을 청구할 수 있습니다. 신고 기록은 향후 법적 대응의 증거가 됩니다.</p>',
      },
      {
        question: '윗집이 아이가 뛰는 소리인데도 법적 대응이 가능한가요?',
        answer:
          '<p>아이의 활동음도 기준치를 초과하면 층간소음에 해당할 소지가 있습니다. 다만 법원은 아이의 연령, 소음 발생 시간대, 양육자의 주의 노력 등을 종합하여 판단하므로, 일반적인 생활 소음보다 관용적으로 판단하는 경향이 있습니다.</p>',
      },
    ],
    cta: { text: '층간소음 법적 대응 전략 AI 분석', link: '/chat?domain=neighbor-dispute' },
    internalLinks: [
      { label: '층간소음 법적 대응', href: '/guide/neighbor-dispute/floor-noise-legal-action-guide' },
      { label: '층간소음 증거 확보', href: '/guide/neighbor-dispute/neighbor-noise-evidence-app-recording' },
      { label: '소액 소송 절차', href: '/guide/small-claims/small-claims-lawsuit-guide' },
      { label: '이웃 분쟁 해결', href: '/guide/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: 'CCTV 사생활 분쟁', href: '/guide/neighbor-dispute/neighbor-cctv-privacy-dispute' },
    ],
  },
];
