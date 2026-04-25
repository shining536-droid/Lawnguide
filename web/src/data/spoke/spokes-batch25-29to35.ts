import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 29. 이 페이지는 [별거 중인 배우자에게 생활비를 청구하려는 사람]의 [별거 상태에서도 부양료를 받을 수 있는지 모르는 상황]에서 [부양료 청구 요건과 금액 산정 기준 안내]를 돕는 페이지다.
// 30. 이 페이지는 [보이스피싱 피해 직후 지급정지를 요청하려는 피해자]의 [지급정지 범위와 한계를 모르는 상황]에서 [지급정지 요청 절차와 환급 가능 범위 안내]를 돕는 페이지다.
// 31. 이 페이지는 [사기 고소를 준비 중인 피해자]의 [경찰이 어떤 증거를 중요하게 보는지 모르는 상황]에서 [경찰 수사 시 핵심 증거 5가지 확보 방법 안내]를 돕는 페이지다.
// 32. 이 페이지는 [중고거래 사기 피해자 중 민사와 형사 중 무엇을 먼저 할지 모르는 사람]의 [형사 고소가 먼저인 경우의 판단 기준을 모르는 상황]에서 [형사 고소 우선 전략과 절차 안내]를 돕는 페이지다.
// 33. 이 페이지는 [개인회생을 준비 중인 채무자]의 [신청 전 해서는 안 되는 행동을 모르는 상황]에서 [회생 기각 사유가 되는 금지 행동 5가지 안내]를 돕는 페이지다.
// 34. 이 페이지는 [개인회생 보정권고를 받은 신청자]의 [보정권고 대응 방법과 기한을 모르는 상황]에서 [보정 사유별 대응 전략과 보정서 작성법 안내]를 돕는 페이지다.
// 35. 이 페이지는 [개인회생 중도폐지 결정을 받은 채무자]의 [다시 신청할 수 있는지 모르는 상황]에서 [재신청 요건과 기각 방지 전략 안내]를 돕는 페이지다.

export const spokesBatch25_29to35: SpokePage[] = [
  // ───────────────────────────────────────────
  // 29. divorce / separation-living-expenses-claim-possible
  // ───────────────────────────────────────────
  {
    domain: 'divorce',
    slug: 'separation-living-expenses-claim-possible',
    keyword: '별거 중 생활비 청구',
    questionKeyword: '이혼 전 별거 중에도 생활비를 받을 수 있나요?',
    ctaKeyword: '별거 생활비 청구 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '별거 중 생활비 청구 — 3가지 요건과 금액 기준 | 로앤가이드',
      description:
        '별거 중인데 생활비를 한 푼도 받지 못하고 있다면 부양료 청구 요건과 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>배우자와 별거를 시작한 지 두 달째, 생활비가 끊겼습니다.</p><p>아이 양육비는 물론 월세와 공과금까지 혼자 감당하고 있는데, 아직 이혼이 확정되지 않았으니 법적으로 청구할 수 있는 건지 막막합니다.</p><p>민법 제826조에 따르면 부부는 혼인 중 서로 부양할 의무가 있고, 별거 중이라도 혼인관계가 유지되는 한 이 의무는 사라지지 않습니다.</p><p>별거 상태에서 생활비를 청구하는 3가지 핵심 요건과 금액 산정 기준을 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 별거 중 생활비 청구의 법적 근거를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">혼인관계가 유지되는 한 배우자에게 부양료(생활비)를 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 민법 제826조 제1항은 "부부는 동거하며 서로 부양하여야 한다"고 규정하고 있습니다. 별거 중이더라도 이혼 판결이 확정되기 전까지 혼인관계는 유효하므로 부양의무도 존속합니다</li>\n<li><strong>청구 요건 3가지</strong> — 첫째, 법률혼 상태일 것(사실혼도 별도 보호 가능). 둘째, 상대방에게 부양 능력이 있을 것. 셋째, 청구자가 스스로 생활을 유지하기 어려운 상태일 것. 이 세 가지가 충족되면 가정법원에 부양료 심판을 청구할 수 있습니다</li>\n<li><strong>별거 귀책사유와의 관계</strong> — 별거의 원인을 제공한 쪽이라도 부양료 청구 자체는 가능합니다. 다만 귀책사유가 있는 배우자의 경우 법원이 부양료 액수를 감액할 수 있으므로, 별거 경위를 정리해두는 것이 중요합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이혼 확정 전까지 부양의무 존속 → 별거 중에도 생활비 청구 가능</blockquote>',
      },
      {
        title: '2단계 — 부양료 금액 산정 기준과 청구 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원은 양측의 소득, 재산, 생활 수준, 자녀 양육 여부를 종합해 부양료를 산정합니다</strong></p>\n<ul>\n<li><strong>산정 요소</strong> — 법원은 혼인 중 생활 수준, 양측의 소득과 재산, 자녀 수와 연령, 별거 기간, 주거비·교육비 등 필수 지출을 종합적으로 고려합니다. 맞벌이였다면 소득 비율에 따라 분담 비율이 달라집니다</li>\n<li><strong>청구 절차</strong> — 가정법원에 "부양료 심판 청구서"를 제출합니다. 긴급한 경우 "사전처분 신청"을 함께 내면 심판 확정 전에도 임시 생활비를 받을 수 있습니다. 사전처분은 보통 신청 후 2~4주 내에 결정됩니다</li>\n<li><strong>준비 서류</strong> — 혼인관계증명서, 주민등록등본, 소득증빙(급여명세서·종합소득세 신고서), 지출내역(월세계약서·공과금 영수증·자녀 교육비), 별거 사실을 입증할 자료(이사 확인서·카카오톡 대화)</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 별거 상황에 맞는 부양료 청구 전략을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 부양료 미지급 시 강제집행 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원 결정 후에도 상대방이 지급하지 않으면 급여 압류 등 강제집행이 가능합니다</strong></p>\n<ul>\n<li><strong>이행명령 신청</strong> — 법원의 부양료 결정에도 불구하고 상대방이 지급하지 않으면 가정법원에 이행명령을 신청할 수 있습니다. 이행명령을 위반하면 1천만 원 이하의 과태료가 부과됩니다</li>\n<li><strong>강제집행(급여 압류)</strong> — 부양료 심판 결정문은 집행권원이 됩니다. 상대방의 급여채권을 압류하면 매월 급여에서 부양료가 자동으로 공제됩니다. 급여의 1/2까지 압류가 가능합니다</li>\n<li><strong>소급 청구 가능 여부</strong> — 부양료는 청구 시점부터 인정되는 것이 원칙이지만, 별거 시작 이후 청구 전까지의 과거 부양료도 인정되는 경우가 있습니다. 별거 직후 빠르게 청구하는 것이 유리합니다</li>\n<li><strong>이혼 소송과 병행</strong> — 이혼 소송을 함께 진행하는 경우 부양료 심판과 이혼 소송을 병합할 수 있습니다. 이혼이 확정되면 부양료 대신 재산분할과 양육비로 전환됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">부양료 미지급 → 이행명령 → 급여 압류로 강제 확보 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2024므14938 — 손해배상 청구금액 초과 판단',
        summary:
          '대법원 2024므14938 사건(대법원, 2025.09.11 선고)에서 법원은 이혼 관련 손해배상 청구에서 청구의 기초가 되는 손해액을 원고의 청구금액보다 많은 금액으로 인정하더라도, 청구금액을 초과하여 지급을 명하지 않은 이상 처분권주의에 위배되지 않는다고 판시했습니다.',
        takeaway:
          '이혼 관련 금전 청구에서 법원은 실제 손해액을 객관적으로 산정합니다. 별거 중 생활비 청구 시에도 정확한 지출 내역과 소득 자료를 준비하면 법원이 적정한 금액을 산정하는 데 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '별거한 지 6개월이 지났는데 지금이라도 생활비를 청구할 수 있나요?',
        answer:
          '네, 가능합니다. 혼인관계가 유지되는 한 부양료 청구권은 존속합니다. 다만 과거 부양료 소급 범위는 법원 재량에 따라 달라지므로, 가능한 빨리 청구하는 것이 유리합니다.',
      },
      {
        question: '상대방이 소득을 숨기면 부양료 산정이 어렵지 않나요?',
        answer:
          '법원은 직권으로 국세청 소득자료, 건강보험료 납부 내역, 금융거래 내역 등을 조회할 수 있습니다. 상대방이 소득을 숨기더라도 법원 조회를 통해 실제 소득을 파악할 수 있습니다.',
      },
      {
        question: '사전처분으로 임시 생활비를 받으면 나중에 본 심판 금액에서 차감되나요?',
        answer:
          '사전처분으로 받은 금액은 본 심판에서 최종 결정된 부양료에 포함됩니다. 본 심판 결정액이 사전처분 금액보다 적으면 초과분을 반환해야 할 수 있으므로, 적정 수준으로 신청하는 것이 중요합니다.',
      },
      {
        question: '별거 원인이 나한테 있어도 생활비를 청구할 수 있나요?',
        answer:
          '법적으로는 가능합니다. 부양의무는 혼인관계 자체에서 발생하므로 별거 귀책사유와 무관합니다. 다만 법원이 귀책사유를 고려해 부양료를 감액할 수 있으므로 별거 경위를 정리해두세요.',
      },
      {
        question: '자녀 양육비와 별거 생활비는 별도로 청구해야 하나요?',
        answer:
          '네, 부양료(배우자 생활비)와 양육비(자녀 생활비)는 별개의 청구입니다. 양육비는 양육비 심판 청구로, 부양료는 부양료 심판 청구로 각각 진행합니다. 두 청구를 동시에 할 수 있습니다.',
      },
    ],
    cta: {
      text: '별거 중 생활비 청구 가능 여부, AI로 빠르게 확인하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '이혼 결심 후 어디서부터 시작해야 하나요', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '재산분할 비율 산정 기준', href: '/guide/divorce/property-division-ratio' },
      { label: '양육비 산정 기준표', href: '/guide/divorce/child-support-calculation-standard' },
      { label: '양육비 미지급 시 대응 방법', href: '/guide/divorce/child-support-non-payment' },
      { label: '이혼 소송 응소 준비 체크리스트', href: '/guide/divorce/divorce-respondent-prep-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 30. fraud / voice-phishing-payment-freeze-scope
  // ───────────────────────────────────────────
  {
    domain: 'fraud',
    slug: 'voice-phishing-payment-freeze-scope',
    keyword: '보이스피싱 지급정지 범위',
    questionKeyword: '보이스피싱 당한 직후 지급정지 요청은 어디까지 가능한가요?',
    ctaKeyword: '보이스피싱 지급정지 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보이스피싱 지급정지 — 요청 범위와 4단계 절차 | 로앤가이드',
      description:
        '보이스피싱으로 돈을 보냈는데 지급정지가 어디까지 되는지 모르겠다면 요청 범위와 환급 절차를 지금 확인하세요.',
    },
    intro:
      '<p>전화 한 통에 속아 계좌이체를 했습니다. 뒤늦게 보이스피싱임을 알아차렸지만 이미 돈은 빠져나간 뒤입니다.</p><p>은행에 지급정지를 요청하면 된다고 하는데, 정확히 어떤 범위까지 정지가 되는 건지, 이미 인출된 돈도 돌려받을 수 있는 건지 답답합니다.</p><p>전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법(통신사기피해환급법)에 따라 피해자는 지급정지를 요청할 수 있고, 일정 요건을 갖추면 피해금 환급도 가능합니다.</p><p>지급정지 요청 범위와 한계, 그리고 환급까지의 4단계 절차를 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 지급정지가 가능한 범위를 정확히 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">지급정지는 피해금이 아직 사기 계좌에 남아있을 때만 효력이 있습니다</strong></p>\n<ul>\n<li><strong>지급정지 대상</strong> — 피해자가 송금한 금액이 도착한 "사기이용계좌"에 대해 지급정지가 걸립니다. 해당 계좌에서 이미 다른 계좌로 이체되었다면, 그 다음 계좌(2차·3차 계좌)까지 추적해서 지급정지를 요청할 수 있습니다</li>\n<li><strong>한계점</strong> — 사기범이 이미 현금을 인출했거나 암호화폐로 전환한 경우에는 지급정지로는 회수할 수 없습니다. 이 경우 경찰 수사를 통한 범인 검거 후 민사 소송으로 배상을 청구해야 합니다</li>\n<li><strong>시간이 핵심</strong> — 보이스피싱 범죄조직은 보통 30분~1시간 내에 돈을 인출합니다. 피해 인지 즉시 금융기관 콜센터(은행 대표번호)나 경찰(112), 금융감독원(1332)에 전화해서 지급정지를 요청해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">골든타임 30분 — 피해 인지 즉시 지급정지 요청이 최우선입니다</blockquote>',
      },
      {
        title: '2단계 — 지급정지 요청부터 피해금 환급까지 절차를 따라가세요',
        content:
          '<p><strong style="color:#1e3a5f">지급정지 → 경찰 신고 → 채권소멸 공고 → 환급 결정의 4단계를 거칩니다</strong></p>\n<ul>\n<li><strong>1단계: 지급정지 요청</strong> — 피해자가 금융기관(은행 콜센터)에 전화하면 사기이용계좌에 대해 즉시 지급정지가 걸립니다. 경찰(112)에 전화해도 경찰이 금융기관에 지급정지를 요청할 수 있습니다</li>\n<li><strong>2단계: 경찰 신고</strong> — 지급정지 후 가능한 한 경찰에 피해 신고를 해야 합니다. 경찰 사건접수 확인서가 있어야 환급 절차가 진행됩니다</li>\n<li><strong>3단계: 채권소멸 공고</strong> — 금융감독원이 사기이용계좌의 명의인(사기범 또는 대포통장 명의자)에게 채권소멸 공고를 합니다. 공고 기간은 2개월이며, 이 기간 내에 이의신청이 없으면 해당 금액에 대한 명의인의 권리가 소멸합니다</li>\n<li><strong>4단계: 피해금 환급</strong> — 채권소멸 공고 기간이 끝나면 금융감독원이 피해자에게 환급 결정을 합니다. 피해자가 여러 명이면 피해 금액 비율로 나누어 환급됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보이스피싱 피해 상황에 맞는 대응 전략을 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 지급정지 후에도 추가로 해야 할 3가지를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">지급정지만으로 끝이 아닙니다 — 추가 피해 방지와 증거 확보가 필수입니다</strong></p>\n<ul>\n<li><strong>추가 피해 차단</strong> — 개인정보(이름, 주민등록번호, 계좌번호)가 노출되었다면 "개인정보노출자 사고예방 시스템"(금융감독원)에 등록하세요. 본인 명의 신규 계좌 개설, 대출, 카드 발급을 차단할 수 있습니다</li>\n<li><strong>증거 보전</strong> — 통화 녹음, 문자·카카오톡 대화 내용, 송금 내역 캡처, 사기범이 알려준 계좌번호 등을 모두 저장해두세요. 경찰 수사와 민사 소송에서 핵심 증거가 됩니다</li>\n<li><strong>민사 소송 검토</strong> — 지급정지로 회수되지 않는 금액은 사기범을 상대로 손해배상 청구 소송을 제기할 수 있습니다. 대포통장 명의자에게도 공동불법행위 책임을 물을 수 있는 경우가 있습니다</li>\n<li><strong>피해구제 신청</strong> — 통신사기피해환급법에 따른 환급 외에도 금융감독원 분쟁조정, 피해자 지원 프로그램 등을 활용할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지급정지 + 경찰 신고 + 개인정보 보호 조치 — 3가지를 동시에 진행하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022도1862 — 컴퓨터 사기죄와 기망행위 판단 기준',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 착오에 빠뜨렸다면 사람에 대한 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '보이스피싱도 전화·문자·앱 등을 통해 피해자를 기망하여 재산을 취득하는 행위입니다. 법원은 기망 수단이 직접적이든 간접적이든 피해자가 착오에 빠져 재산을 처분했다면 사기죄가 성립한다고 봅니다. 피해 사실을 정확히 기록해두면 형사 처벌에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '지급정지를 요청하면 내 계좌도 정지되나요?',
        answer:
          '아닙니다. 지급정지는 사기범이 사용한 "사기이용계좌"에만 걸립니다. 피해자 본인의 계좌는 정상적으로 사용할 수 있습니다. 다만 피해자 계좌가 사기에 이용된 경우(모르고 대포통장 역할을 한 경우)에는 본인 계좌도 정지될 수 있습니다.',
      },
      {
        question: '지급정지 후 환급까지 얼마나 걸리나요?',
        answer:
          '채권소멸 공고 기간이 2개월이므로, 지급정지 후 환급까지 최소 3~4개월이 소요됩니다. 공고 기간 중 명의인의 이의신청이 있으면 더 길어질 수 있습니다.',
      },
      {
        question: '사기범이 이미 돈을 인출한 뒤라면 방법이 없나요?',
        answer:
          '지급정지로는 회수할 수 없지만, 경찰 수사를 통해 사기범이 검거되면 피해금 반환 명령이나 민사 소송으로 배상을 받을 수 있습니다. 사기범의 재산이 있다면 가압류도 가능합니다.',
      },
      {
        question: '토스나 카카오페이 같은 간편결제로 보낸 돈도 지급정지 되나요?',
        answer:
          '네, 간편결제 서비스도 금융기관을 통해 이체되므로 지급정지 대상입니다. 해당 간편결제 서비스의 고객센터와 연결된 은행 모두에 지급정지를 요청하세요.',
      },
      {
        question: '피해 금액이 소액(50만 원 이하)이어도 지급정지와 환급이 가능한가요?',
        answer:
          '금액에 관계없이 지급정지와 환급 절차를 이용할 수 있습니다. 소액이라도 경찰 신고와 지급정지를 가능한 한 진행하세요. 같은 사기 계좌에 다른 피해자가 있을 수 있어 수사에도 도움이 됩니다.',
      },
    ],
    cta: {
      text: '보이스피싱 피해 대응 방법, AI로 빠르게 확인하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 피해 직후 5단계 대응', href: '/guide/fraud/voice-phishing-immediate-5steps' },
      { label: '보이스피싱 피해금 환급 절차', href: '/guide/fraud/voice-phishing-fund-recovery-process' },
      { label: '사기 피해 어디서부터 시작해야 하나요', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 고소장 준비 방법', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '보이스피싱 즉시 대응법', href: '/guide/fraud/voice-phishing-immediate-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 31. fraud / fraud-complaint-police-key-evidence-5
  // ───────────────────────────────────────────
  {
    domain: 'fraud',
    slug: 'fraud-complaint-police-key-evidence-5',
    keyword: '사기 고소 경찰 증거',
    questionKeyword: '사기 고소할 때 경찰이 보는 핵심 증거는 무엇인가요?',
    ctaKeyword: '사기 증거 준비 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '사기 고소 전 경찰이 보는 핵심 증거 5가지 | 로앤가이드',
      description:
        '사기 고소를 준비하는데 경찰이 어떤 증거를 중요하게 보는지 모르겠다면 핵심 증거 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>분명히 속았는데 경찰에 신고하면 "민사로 해결하라"는 말만 들을까 봐 걱정됩니다.</p><p>사기 고소가 받아들여지려면 "처음부터 속일 의도가 있었다"는 점을 입증해야 하는데, 어떤 증거를 갖춰야 경찰이 수사에 착수하는지 막막합니다.</p><p>형법 제347조 사기죄는 기망행위, 착오, 재산 처분, 재산상 이익의 4가지 요건을 모두 충족해야 성립할 수 있습니다. 경찰은 이 요건을 입증할 수 있는 증거가 있는지를 기준으로 사건을 판단합니다.</p><p>경찰 수사에서 실제로 중요하게 보는 핵심 증거 5가지를 정리해드립니다.</p>',
    sections: [
      {
        title: '핵심 증거 1~3 — 기망 의도와 거래 경위를 입증하는 증거',
        content:
          '<p><strong style="color:#1e3a5f">사기죄의 핵심은 "처음부터 속일 의도가 있었는가"입니다 — 이를 입증할 3가지 증거를 확인하세요</strong></p>\n<ul>\n<li><strong>① 대화 내역(카카오톡·문자·이메일)</strong> — 상대방이 거짓 약속을 한 대화 기록이 가장 직접적인 증거입니다. "가능한 한 갚겠다", "투자 수익률 200% 보장" 등 허위 진술이 담긴 메시지를 캡처하세요. 날짜·시간·발신자가 명확히 보여야 합니다</li>\n<li><strong>② 송금 내역(계좌이체 확인서)</strong> — 언제, 얼마를 보냈는지 객관적으로 증명하는 자료입니다. 인터넷뱅킹 이체내역, 무통장입금증, 카드결제 영수증 등을 출력해두세요. 현금을 직접 전달한 경우에는 차용증이나 영수증이 핵심 증거가 됩니다</li>\n<li><strong>③ 상대방의 재산·신용 상태</strong> — "갚을 능력이 없으면서 돈을 빌렸다"는 점이 입증되면 기망 의도를 추정할 수 있습니다. 상대방이 이미 다수의 채무를 지고 있었거나, 다른 피해자에게도 같은 수법을 사용했다면 강력한 정황 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대화 내역 + 송금 내역 + 상대방 재산 상태 = 기망 의도 입증의 3종 세트</blockquote>',
      },
      {
        title: '핵심 증거 4~5 — 피해 규모와 반복성을 증명하는 증거',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 피해 규모가 크고 동일 수법의 반복이 확인되면 적극적으로 수사에 착수합니다</strong></p>\n<ul>\n<li><strong>④ 피해금액 총액과 거래 흐름도</strong> — 여러 차례에 걸쳐 송금한 경우 전체 피해금액을 시간순으로 정리한 표를 만들어 제출하세요. 금액, 날짜, 사유, 상대방 계좌를 한눈에 볼 수 있는 거래 흐름도가 있으면 경찰이 사건 전체를 빠르게 파악할 수 있습니다</li>\n<li><strong>⑤ 다른 피해자의 존재(동일 수법 반복)</strong> — 인터넷 카페, 커뮤니티 등에서 같은 사람에게 피해를 입은 사례를 찾아보세요. 동일 수법으로 여러 명을 속인 정황이 확인되면 경찰이 "단순 민사 분쟁"이 아닌 "형사 사기"로 판단할 가능성이 높아집니다. 공동 고소도 가능합니다</li>\n<li><strong>추가 팁 — 고소장 작성 요령</strong> — 위 5가지 증거를 정리해서 고소장에 첨부하되, 고소장 본문에는 ①피해 경위(시간순) ②상대방의 기망 행위 ③자신의 착오와 재산 처분 ④피해 결과를 논리적으로 서술하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보유 증거의 충분성과 고소 전략을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 시 주의사항 3가지를 꼭 지키세요',
        content:
          '<p><strong style="color:#1e3a5f">증거를 모을 때 위법하게 수집하면 오히려 불이익을 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>증거 원본 보존</strong> — 카카오톡 대화는 삭제되면 복구가 어렵습니다. "대화 내보내기" 기능으로 텍스트 파일과 함께 화면 캡처를 동시에 보관하세요. 원본 휴대폰은 가능하면 초기화하지 마세요</li>\n<li><strong>불법 녹음 주의</strong> — 본인이 참여한 대화의 녹음은 합법이지만, 제3자 간의 대화를 몰래 녹음하면 통신비밀보호법 위반입니다. 상대방과의 통화 녹음은 허용되지만, 상대방 모르게 타인 간 대화를 녹음하면 안 됩니다</li>\n<li><strong>허위 사실 주의</strong> — 고소장에 과장이나 허위 사실을 기재하면 무고죄로 역고소당할 수 있습니다. 확인된 사실만 정확히 기재하고, 추측이나 감정적 표현은 자제하세요</li>\n<li><strong>시효 확인</strong> — 사기죄의 공소시효는 10년입니다. 피해 발생일로부터 10년이 지나면 형사 처벌이 불가능하므로, 오래된 피해라면 시효를 먼저 확인하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합법적 증거 수집 + 사실에 근거한 고소장 = 경찰 수사 착수의 핵심</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도14142 — 범죄단체 활동과 사기 기망행위',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 범죄단체 구성원의 활동과 관련하여, 개인정보를 활용한 조직적 사기에서 포괄일죄의 공소시효는 최종 범죄행위가 종료한 때부터 진행한다고 판시했습니다.',
        takeaway:
          '조직적 사기 범죄는 단일 사건이 아닌 포괄일죄로 취급될 수 있습니다. 피해자가 여러 명인 사기 사건에서는 다른 피해자의 존재를 확인하고 공동으로 고소하면 수사 진행이 훨씬 빨라집니다.',
      },
    ],
    faq: [
      {
        question: '증거가 카카오톡 대화밖에 없어도 고소가 가능한가요?',
        answer:
          '카카오톡 대화만으로도 고소는 가능합니다. 대화 내용에 상대방의 거짓 약속, 돈 요구, 변명 등이 담겨 있다면 기망 의도를 입증하는 핵심 증거가 됩니다. 송금 내역과 함께 제출하면 더 강력합니다.',
      },
      {
        question: '경찰이 "민사로 해결하라"고 하면 어떻게 해야 하나요?',
        answer:
          '고소장을 서면으로 제출하면 경찰은 가능한 한 접수해야 합니다(수사 거부 불가). 구두 신고 시 거절당했다면 서면 고소장을 작성해서 경찰서 민원실에 직접 제출하세요. 접수 후에도 수사가 지연되면 검찰에 항고할 수 있습니다.',
      },
      {
        question: '차용증이 없으면 사기 고소가 어려운가요?',
        answer:
          '차용증이 없어도 송금 내역, 대화 기록, 증인 진술 등으로 금전 거래 사실을 증명할 수 있습니다. 다만 차용증이 있으면 거래 조건이 명확해져 "속일 의도"를 입증하기가 더 수월합니다.',
      },
      {
        question: '고소 전에 상대방에게 내용증명을 보내야 하나요?',
        answer:
          '법적으로 필수는 아니지만, 내용증명을 보내면 두 가지 효과가 있습니다. 첫째, 상대방에게 변제 기회를 주었다는 증거가 됩니다. 둘째, 상대방이 내용증명을 무시하면 "갚을 의사가 없다"는 추가 정황이 됩니다.',
      },
      {
        question: '피해 금액이 100만 원 이하 소액이어도 경찰이 수사하나요?',
        answer:
          '금액에 관계없이 사기죄는 성립할 수 있습니다. 다만 소액 사건은 수사 우선순위에서 밀릴 수 있으므로, 다른 피해자를 찾아 공동 고소하거나, 증거를 체계적으로 정리해서 제출하면 수사 진행 가능성이 높아집니다.',
      },
    ],
    cta: {
      text: '사기 고소 증거 충분성, AI로 빠르게 확인하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 고소장 준비 방법', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기 고소 필요 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '사기 피해 어디서부터 시작해야 하나요', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '사기 공소시효 기간', href: '/guide/fraud/fraud-statute-of-limitations-period' },
      { label: '사기 신고 기한과 금액 기준', href: '/guide/fraud/fraud-report-deadline-amounts' },
    ],
  },

  // ───────────────────────────────────────────
  // 32. fraud / secondhand-fraud-criminal-before-civil
  // ───────────────────────────────────────────
  {
    domain: 'fraud',
    slug: 'secondhand-fraud-criminal-before-civil',
    keyword: '중고거래 사기 형사 고소',
    questionKeyword: '중고거래 사기에서 민사보다 형사 고소가 먼저인 경우는?',
    ctaKeyword: '중고거래 사기 고소 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '중고거래 사기 형사 고소가 먼저인 3가지 상황 | 로앤가이드',
      description:
        '중고거래에서 사기를 당했는데 민사와 형사 중 뭘 먼저 해야 할지 모르겠다면 형사 고소 우선 기준을 지금 확인하세요.',
    },
    intro:
      '<p>당근마켓에서 물건을 구매했는데 입금 후 판매자가 연락을 끊었습니다.</p><p>"민사로 소액심판 청구를 해야 하나, 아니면 경찰에 사기로 고소해야 하나" 고민이 됩니다. 두 가지 다 할 수 있지만 순서에 따라 결과가 달라질 수 있습니다.</p><p>중고거래 사기에서 형사 고소를 먼저 하는 것이 유리한 상황이 있고, 민사가 먼저인 상황도 있습니다.</p><p>형사 고소를 우선해야 하는 3가지 상황과 그 이유를 정리해드립니다.</p>',
    sections: [
      {
        title: '형사 고소가 먼저인 3가지 상황을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방 신원을 모르거나, 도주 우려가 있거나, 동일 수법 반복이면 형사 우선입니다</strong></p>\n<ul>\n<li><strong>상황 ① 판매자 신원을 모를 때</strong> — 닉네임만 알고 실명·주소를 모르면 민사소송 자체가 불가능합니다. 형사 고소를 하면 경찰이 계좌추적, 통신기록 조회 등으로 상대방 신원을 특정할 수 있습니다. 신원이 확인되면 그 정보로 민사소송도 진행할 수 있습니다</li>\n<li><strong>상황 ② 상대방이 도주·잠적할 우려가 있을 때</strong> — 이미 연락이 두절된 상태라면 민사 소장을 보내도 송달이 안 됩니다. 형사 고소 후 경찰 수사가 시작되면 상대방이 출석해야 하고, 이 과정에서 합의 제안이 올 가능성이 높습니다</li>\n<li><strong>상황 ③ 동일 수법으로 여러 명을 속인 경우</strong> — 같은 판매자에게 피해를 입은 사람이 여러 명이라면 단순 채무불이행이 아닌 "반복적 기망"으로 사기죄 성립 가능성이 높습니다. 경찰도 피해자가 다수이면 적극적으로 수사에 착수합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신원 불명 + 연락 두절 + 반복 수법 → 형사 고소 우선 진행</blockquote>',
      },
      {
        title: '형사 고소 절차와 준비물을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰서에 고소장을 접수하면 수사가 시작되고, 합의 압박 효과도 기대할 수 있습니다</strong></p>\n<ul>\n<li><strong>고소장 접수</strong> — 관할 경찰서(피해자 거주지 또는 범행지)에 고소장을 서면으로 제출합니다. 사이버범죄 신고시스템(ECRM)으로 온라인 접수도 가능합니다</li>\n<li><strong>필수 증거</strong> — 거래 게시글 캡처, 대화 내역(카카오톡·당근 채팅), 송금 내역, 상대방 계좌 정보를 함께 제출하세요. 거래 플랫폼에서 해당 판매자의 다른 게시글이나 후기도 캡처해두면 좋습니다</li>\n<li><strong>고소장 핵심 포인트</strong> — "물건을 보낼 의사나 능력이 없으면서 판매 글을 올려 돈을 받았다"는 기망행위를 중심으로 작성하세요. 입금 후 연락 두절, 배송 추적 불가, 허위 운송장 번호 제공 등이 기망 정황입니다</li>\n<li><strong>합의 압박 효과</strong> — 형사 고소가 접수되면 상대방은 전과 기록이 남는 것을 피하기 위해 합의를 제안하는 경우가 많습니다. 이때 피해금액 전액 + 정신적 손해배상까지 요구할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 형사 고소와 민사 소송 중 최적 순서를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '민사가 먼저인 경우도 있습니다 — 판단 기준을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방 신원이 확인되고 단순 계약 불이행에 가까우면 소액심판이 더 빠릅니다</strong></p>\n<ul>\n<li><strong>민사 우선 상황</strong> — 판매자 실명·주소를 알고 있고, 물건을 보냈지만 하자가 있거나 설명과 다른 경우, 또는 배송이 늦어지고 있을 뿐 완전히 잠적하지는 않은 경우에는 민사(소액심판)가 더 빠르고 효율적입니다</li>\n<li><strong>소액심판의 장점</strong> — 피해금액 3,000만 원 이하면 소액사건심판법에 따라 1회 변론으로 판결이 나옵니다. 인지대도 저렴하고(10만 원 미만 사건은 1,000원), 변호사 없이 직접 진행할 수 있습니다</li>\n<li><strong>형사+민사 병행 전략</strong> — 형사 고소와 민사 소송을 동시에 진행할 수도 있습니다. 형사에서 상대방 신원이 확인되면 민사를 추가로 제기하고, 형사 합의 과정에서 민사 손해배상까지 함께 해결하는 방식이 가장 효과적입니다</li>\n<li><strong>플랫폼 분쟁 해결</strong> — 당근마켓, 번개장터 등은 자체 분쟁 해결 절차가 있습니다. 안전결제(에스크로)를 이용한 경우 플랫폼을 통한 환불이 가능할 수 있으니 먼저 확인하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신원 확인됨 + 단순 불이행 → 소액심판 / 신원 불명 + 기망 명확 → 형사 고소</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2021다248299 — 경영성과급의 임금성 판단과 사기 기망 입증',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 금품 지급 의무의 발생이 직접적으로 관련되었는지를 기준으로 임금 해당 여부를 판단하면서, 계약 조건의 해석에서는 문언과 실질을 함께 고려해야 한다고 판시했습니다.',
        takeaway:
          '중고거래 사기에서도 "거래 조건(약속)과 실제 이행 사이의 괴리"가 핵심입니다. 판매자가 제시한 조건(물건 상태, 배송 시기 등)과 실제 이행 내용이 다르다면 기망행위의 증거가 됩니다. 거래 시 약속한 내용을 모두 기록해두세요.',
      },
    ],
    faq: [
      {
        question: '중고거래 사기 금액이 10만 원인데도 형사 고소가 되나요?',
        answer:
          '금액에 관계없이 사기죄는 성립할 수 있습니다. 다만 10만 원 정도의 소액이면 경찰 수사 우선순위에서 밀릴 수 있으므로, 같은 판매자에게 피해를 입은 다른 피해자를 찾아 공동 고소하면 효과적입니다.',
      },
      {
        question: '당근마켓 채팅 기록이 삭제되면 증거로 쓸 수 없나요?',
        answer:
          '삭제된 채팅도 플랫폼 서버에 일정 기간 보관됩니다. 경찰이 수사 과정에서 플랫폼에 자료 제출을 요청할 수 있으므로, 고소장에 거래 일시와 상대방 닉네임을 정확히 기재하세요.',
      },
      {
        question: '형사 고소 후 합의하면 고소를 취소해야 하나요?',
        answer:
          '사기죄는 반의사불벌죄가 아니므로 고소 취소가 필수는 아닙니다. 다만 합의 후 고소를 취소하면 검찰이 기소유예 처분을 내릴 가능성이 높고, 합의금도 더 높게 받을 수 있습니다.',
      },
      {
        question: '택배로 다른 물건(벽돌 등)을 보낸 경우도 사기인가요?',
        answer:
          '의도적으로 다른 물건을 보낸 것이라면 명백한 사기로 검토될 수 있습니다. 택배 개봉 영상을 촬영해두면 결정적 증거가 됩니다. 운송장 번호, 발송인 정보, 택배 박스 사진도 함께 보관하세요.',
      },
      {
        question: '안전결제를 이용했는데도 사기를 당할 수 있나요?',
        answer:
          '안전결제(에스크로) 시스템을 정상적으로 이용했다면 물건 미수령 시 환불이 가능합니다. 문제는 판매자가 "직거래"나 "계좌이체"를 유도하며 안전결제를 우회하는 경우입니다. 안전결제를 거부하는 판매자는 사기 가능성이 높습니다.',
      },
    ],
    cta: {
      text: '중고거래 사기 대응 전략, AI로 빠르게 확인하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '중고거래 사기 환불받는 방법', href: '/guide/fraud/secondhand-trade-fraud-refund-method' },
      { label: '중고거래 사기 증거 확보법', href: '/guide/fraud/used-market-fraud-evidence' },
      { label: '소액 사기 소액심판 청구', href: '/guide/fraud/used-goods-fraud-small-claims' },
      { label: '사기 고소장 준비 방법', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '사기 피해 어디서부터 시작해야 하나요', href: '/guide/fraud/fraud-victim-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 33. rehabilitation / pre-application-5-prohibited-actions
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'pre-application-5-prohibited-actions',
    keyword: '개인회생 신청 전 금지 행동',
    questionKeyword: '개인회생 신청 전에 하면 안 되는 행동은 무엇인가요?',
    ctaKeyword: '개인회생 준비 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '개인회생 신청 전 절대 하면 안 되는 행동 5가지 | 로앤가이드',
      description:
        '개인회생을 준비하면서 모르고 한 행동이 기각 사유가 될 수 있다면 신청 전 금지 행동 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>빚이 감당이 안 돼서 개인회생을 알아보고 있습니다.</p><p>신청 전에 카드빚을 돌려막거나, 부모님 이름으로 재산을 옮기면 안 된다는 얘기를 들었는데, 정확히 어떤 행동이 문제가 되는지 모르겠습니다.</p><p>개인회생은 법원이 "성실한 채무자"에게 기회를 주는 제도입니다. 신청 전에 재산을 빼돌리거나 특정 채권자에게만 변제하는 행위는 법원이 "성실하지 않다"고 판단하는 사유가 됩니다.</p><p>개인회생 기각 또는 불인가 사유가 되는 5가지 금지 행동을 정리해드립니다.</p>',
    sections: [
      {
        title: '금지 행동 1~3 — 재산 이전·편파 변제·추가 채무',
        content:
          '<p><strong style="color:#1e3a5f">법원은 신청 전 재산 변동과 채무 변동을 면밀히 심사합니다</strong></p>\n<ul>\n<li><strong>① 재산 명의 이전(재산 은닉)</strong> — 부동산, 자동차, 예금 등을 배우자·부모·형제 명의로 옮기면 "재산 은닉"으로 판단됩니다. 채무자 회생 및 파산에 관한 법률 제595조에 따라 면책이 불허가될 수 있고, 심한 경우 사기파산죄로 형사 처벌까지 받을 수 있습니다. 신청 전 1~2년 이내 재산 이전은 법원이 특히 주의 깊게 봅니다</li>\n<li><strong>② 특정 채권자에게만 변제(편파 변제)</strong> — 가족이나 지인에게 빌린 돈만 먼저 갚고 금융기관 빚은 남겨두는 행위입니다. 이를 "편파행위"라 하며, 법원은 모든 채권자를 평등하게 대우해야 한다는 원칙에 따라 편파 변제를 부인할 수 있습니다. 회생 개시 후 편파 변제분은 환수 대상이 됩니다</li>\n<li><strong>③ 신규 대출·카드 사용</strong> — 신청 직전에 새로 대출을 받거나 카드로 현금서비스를 받으면 "변제할 의사 없이 빚을 늘렸다"고 판단됩니다. 특히 신청 전 3~6개월 이내의 신규 채무는 면책에서 제외될 수 있고, 회생 신청 자체가 기각될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산 이전 금지 + 편파 변제 금지 + 신규 채무 금지 = 개인회생 기본 원칙</blockquote>',
      },
      {
        title: '금지 행동 4~5 — 소득 축소 신고와 허위 서류 제출',
        content:
          '<p><strong style="color:#1e3a5f">법원은 소득 자료와 채무 내역의 진실성을 철저히 검증합니다</strong></p>\n<ul>\n<li><strong>④ 소득 축소·허위 신고</strong> — 변제금을 줄이기 위해 실제 소득보다 낮게 신고하거나, 부업 소득을 누락하면 법원이 허위 신청으로 판단합니다. 법원은 국민건강보험공단 소득 자료, 국세청 자료, 통장 입금 내역 등을 교차 검증하므로 허위 신고는 가능한 한 발각됩니다</li>\n<li><strong>⑤ 채무 목록 누락</strong> — 일부 채무를 고의로 빠뜨리면 "채권자 목록에 기재하지 아니한 청구권"으로서 면책에서 제외됩니다(채무자 회생법 제566조 제7호). 사채, 지인 대여금, 보증채무 등도 빠짐없이 기재해야 합니다</li>\n<li><strong>추가 주의사항</strong> — 신청 전 도박, 투기, 과소비 등 낭비 행위도 면책 불허가 사유에 해당할 소지가 있습니다. 법원은 최근 1~2년간의 신용카드 사용 내역, 통장 거래 내역을 전부 확인합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 개인회생 신청 전 주의사항을 체크해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 전 올바른 준비 방법 3가지를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">금지 행동을 피하는 것만큼 올바른 준비도 중요합니다</strong></p>\n<ul>\n<li><strong>채무 전수 조사</strong> — 신용정보원(올크레딧, 나이스지키미)에서 본인의 전체 채무를 조회하세요. 잊고 있던 보증채무, 연체된 소액 대출까지 모두 파악해야 합니다. 사채나 개인 간 대여금은 따로 정리하세요</li>\n<li><strong>소득·지출 정리</strong> — 최근 6개월~1년간의 급여명세서, 통장 거래 내역, 카드 사용 내역을 정리하세요. 법원은 이 자료를 기반으로 변제금을 산정합니다. 부업 소득이 있다면 빠짐없이 포함하세요</li>\n<li><strong>재산 목록 작성</strong> — 부동산, 자동차, 보험 해약환급금, 퇴직금 예상액 등 모든 재산을 정직하게 기재하세요. 청산가치보장원칙에 따라 변제금이 이 재산 가치 이상이어야 하므로, 정확한 재산 파악이 변제 계획 수립의 기초입니다</li>\n<li><strong>전문가 상담</strong> — 개인회생은 서류 준비가 복잡하고 법원마다 실무 기준이 다릅니다. 법률구조공단(132) 무료 상담이나 AI 법률 상담을 통해 기본적인 방향을 잡은 뒤 진행하는 것이 안전합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정직한 서류 준비 = 개인회생 인가의 가장 확실한 전략</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025다213466 — 채무자의 권리 상실과 회생 절차',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 임차인이 소유권을 취득하면 대항력과 우선변제권이 소멸한다고 판시하면서, 권리 변동이 채무관계에 미치는 영향을 명확히 했습니다.',
        takeaway:
          '개인회생에서도 신청 전 재산의 권리 변동(명의 이전, 처분 등)은 법원이 엄격하게 심사합니다. 재산을 이전하면 오히려 청산가치가 높아져 변제금이 늘어나거나 면책이 불허가될 수 있으므로, 재산은 현상 유지하는 것이 최선입니다.',
      },
    ],
    faq: [
      {
        question: '신청 전에 가족에게 빌린 돈을 갚아도 문제가 되나요?',
        answer:
          '네, 문제가 됩니다. 가족에게 빌린 돈도 채무이므로 다른 채권자(은행, 카드사)와 동등하게 취급해야 합니다. 가족에게만 먼저 갚으면 편파 변제로 회생 개시 후 환수 대상이 됩니다.',
      },
      {
        question: '자동차를 팔고 그 돈으로 생활비를 써도 되나요?',
        answer:
          '자동차 매각 자체가 금지는 아니지만, 매각 대금을 특정 채권자에게 변제하거나 낭비하면 문제가 됩니다. 생활비로 사용했다면 그 내역을 증빙해야 합니다. 가급적 재산 변동 없이 신청하는 것이 안전합니다.',
      },
      {
        question: '카드를 아예 사용하지 않아야 하나요?',
        answer:
          '생필품 구매 등 최소한의 카드 사용은 괜찮지만, 고가 물품 구매·현금서비스·카드론 등은 절대 하지 마세요. 신청 전 3~6개월 이내의 과도한 카드 사용은 면책 불허가 사유가 됩니다.',
      },
      {
        question: '보험을 해지하고 해약환급금을 받아도 되나요?',
        answer:
          '보험 해지 자체는 가능하지만, 해약환급금을 특정 채무 변제에 사용하면 편파 변제가 됩니다. 또한 해약환급금은 재산으로 잡히므로 해지 시점과 사용처를 법원에 소명해야 합니다. 신청 전 해지 여부는 전문가와 상의하세요.',
      },
      {
        question: '개인회생 신청 전에 이사를 해도 되나요?',
        answer:
          '이사 자체는 문제가 되지 않습니다. 다만 보증금 차액이 발생하면 그 금액의 사용처를 법원에 소명해야 합니다. 주소 변경은 법원 관할에도 영향을 주므로, 신청 예정 법원을 먼저 확인하세요.',
      },
    ],
    cta: {
      text: '개인회생 신청 전 준비사항, AI로 빠르게 체크하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 자격 요건 확인', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 기각 사유 5가지', href: '/guide/rehabilitation/rehabilitation-rejection-5-reasons' },
      { label: '개인회생 변제금 계산 방법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
    ],
  },

  // ───────────────────────────────────────────
  // 34. rehabilitation / correction-recommendation-response-guide
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'correction-recommendation-response-guide',
    keyword: '개인회생 보정권고 대응',
    questionKeyword: '개인회생 보정권고가 나오면 어떻게 대응해야 하나요?',
    ctaKeyword: '보정권고 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인회생 보정권고 대응 — 사유별 4단계 가이드 | 로앤가이드',
      description:
        '개인회생 보정권고를 받았는데 어떻게 대응해야 할지 모르겠다면 사유별 보정서 작성법을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 신청서를 제출했는데 법원에서 "보정권고"가 날아왔습니다.</p><p>서류가 부족하다는 건지, 신청 자체에 문제가 있다는 건지, 보정 기한은 언제까지인지 불안합니다.</p><p>보정권고는 법원이 신청서의 흠결이나 보충이 필요한 부분을 알려주는 것으로, 제대로 대응하면 정상적으로 절차가 진행됩니다. 반대로 기한 내에 보정하지 않으면 신청이 각하될 수 있습니다.</p><p>보정권고 사유별 대응 방법과 보정서 작성 요령을 4단계로 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 보정권고의 의미와 기한을 정확히 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">보정권고는 "기각"이 아닙니다 — 보완 기회를 주는 것이므로 당황하지 마세요</strong></p>\n<ul>\n<li><strong>보정권고란</strong> — 법원이 개인회생 신청서를 검토한 뒤, 서류 미비·기재 오류·소명 부족 등이 발견되면 신청인에게 보정(보완)을 요구하는 것입니다. 보정권고서에는 보정 사유와 보정 기한이 구체적으로 기재됩니다</li>\n<li><strong>보정 기한</strong> — 통상 14일~30일의 기한이 주어집니다. 기한 내 보정하지 않으면 신청이 각하(절차 종료)됩니다. 사정이 있으면 기한 연장 신청을 할 수 있지만, 미리 연락하는 것이 중요합니다</li>\n<li><strong>보정 vs 기각</strong> — 보정권고는 "서류를 보완하라"는 것이고, 기각은 "신청 자체가 부적합하다"는 것입니다. 보정권고를 받았다면 아직 신청이 살아있는 상태이므로 빠르게 대응하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보정권고 = 보완 기회 → 기한 내 대응하면 절차 정상 진행</blockquote>',
      },
      {
        title: '2단계 — 주요 보정 사유별 대응 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">보정 사유에 따라 준비할 서류와 소명 방법이 다릅니다</strong></p>\n<ul>\n<li><strong>소득 자료 미비</strong> — 급여명세서, 원천징수영수증, 종합소득세 신고서 등이 부족한 경우입니다. 비정규직이나 일용직은 통장 입금 내역으로 소득을 소명할 수 있습니다. 사업자는 부가가치세 신고서와 매출장부를 제출하세요</li>\n<li><strong>채무 목록 불일치</strong> — 신용정보원 조회 결과와 신청서 기재 채무가 다른 경우입니다. 누락된 채무를 추가하거나, 이미 변제한 채무는 변제 증빙을 첨부하세요</li>\n<li><strong>재산 목록 보완</strong> — 보험 해약환급금 증명서, 퇴직금 예상액 확인서, 자동차 시세 확인서 등이 추가로 요구될 수 있습니다. 각 금융기관·보험사에 증명서 발급을 요청하세요</li>\n<li><strong>변제계획 재산정</strong> — 변제금 산정이 잘못되었거나 가용소득 계산에 오류가 있는 경우입니다. 소득에서 최저생계비를 빼고 남는 금액을 기준으로 다시 계산하세요</li>\n<li><strong>채무 발생 경위 소명</strong> — 도박, 투기, 사치 등으로 인한 채무인지 법원이 확인하려는 것입니다. 채무 발생 사유를 구체적으로 소명하는 진술서를 작성하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보정 사유에 맞는 대응 전략을 안내해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 보정서 작성과 제출 시 주의사항을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">보정서는 법원이 요구한 사항에 정확히 맞춰 작성해야 합니다</strong></p>\n<ul>\n<li><strong>보정서 형식</strong> — 보정서에는 사건번호, 신청인 이름, 보정 사유, 보정 내용을 기재합니다. "보정권고서 제○항에 대하여 아래와 같이 보정합니다"로 시작하고, 각 항목별로 보정 내용과 첨부 서류를 명시하세요</li>\n<li><strong>서류 정리</strong> — 보정 사유별로 첨부 서류를 구분하여 목록을 작성하세요. 서류가 많을수록 법원 담당자가 확인하기 쉽도록 정리하는 것이 중요합니다. 첨부 서류 목록표를 별도로 만들어 제출하면 좋습니다</li>\n<li><strong>기한 준수</strong> — 보정 기한 마지막 날 우편 발송이 아니라 법원 접수 기준입니다. 기한 2~3일 전에 제출하는 것이 안전합니다. 직접 방문 제출 시 접수증을 받아두세요</li>\n<li><strong>기한 연장 신청</strong> — 서류 준비가 어려워 기한 내 보정이 불가능하면 보정 기한 만료 전에 기한 연장 신청서를 제출하세요. 사유를 구체적으로 기재하면 1~2주 정도 연장이 가능한 경우가 많습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보정 사유별 정확한 서류 + 기한 내 제출 = 개인회생 절차 정상 진행</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2023다239756 — 회생계획의 해석과 변제 방법',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 인가된 회생계획을 법률행위의 해석 방법에 따라 해석해야 하며, 문언의 객관적 의미를 합리적으로 해석하되 형식과 내용, 작성 경위를 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '개인회생에서 변제계획은 법원이 인가하는 법적 문서입니다. 보정권고에서 변제계획 재산정을 요구받았다면, 계획 내용을 명확하고 구체적으로 작성해야 합니다. 모호한 표현은 향후 분쟁의 원인이 됩니다.',
      },
    ],
    faq: [
      {
        question: '보정 기한이 지나면 원칙적으로 각하되나요?',
        answer:
          '원칙적으로 기한 내 보정하지 않으면 각하됩니다. 다만 기한 경과 직후라면 바로 보정서를 제출하면서 기한 도과 사유를 소명하면 법원이 받아주는 경우도 있습니다. 가능한 기한 내에 제출하세요.',
      },
      {
        question: '보정권고를 여러 번 받을 수도 있나요?',
        answer:
          '네, 가능합니다. 첫 번째 보정 후에도 추가 보완이 필요하면 2차, 3차 보정권고가 나올 수 있습니다. 처음부터 꼼꼼하게 준비할수록 추가 보정 가능성이 줄어듭니다.',
      },
      {
        question: '보정서를 제출하면 바로 개시결정이 나오나요?',
        answer:
          '보정서 제출 후 법원이 보정 내용을 검토합니다. 보정이 적절하면 개시결정이 나오지만, 추가 보정이 필요하면 다시 보정권고가 올 수 있습니다. 보정 후 개시결정까지 보통 2~4주가 소요됩니다.',
      },
      {
        question: '보정 과정에서 변호사 도움이 꼭 필요한가요?',
        answer:
          '단순 서류 미비라면 본인이 직접 처리할 수 있습니다. 그러나 변제계획 재산정이나 채무 발생 경위 소명 등 복잡한 사유라면 전문가 도움을 받는 것이 안전합니다. 법률구조공단(132) 무료 상담도 활용하세요.',
      },
      {
        question: '보정 중에도 채권자의 추심이 중단되나요?',
        answer:
          '보정 단계에서는 아직 개시결정이 나지 않았으므로 추심 중단 효력이 없습니다. 추심이 급박하다면 법원에 "포괄적 금지명령" 신청을 별도로 하면 추심을 중단시킬 수 있습니다.',
      },
    ],
    cta: {
      text: '개인회생 보정권고 대응 방법, AI로 빠르게 확인하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 필요 서류 목록', href: '/guide/rehabilitation/rehabilitation-application-required-docs' },
      { label: '개인회생 기각 사유 5가지', href: '/guide/rehabilitation/rehabilitation-rejection-5-reasons' },
      { label: '개인회생 사전 체크리스트', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 변제금 계산 방법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 35. rehabilitation / mid-termination-reapplication-possible
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'mid-termination-reapplication-possible',
    keyword: '개인회생 중도폐지 재신청',
    questionKeyword: '개인회생 중도폐지되면 다시 신청할 수 있나요?',
    ctaKeyword: '중도폐지 후 재신청 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '개인회생 중도폐지 후 재신청 — 3가지 요건 확인 | 로앤가이드',
      description:
        '개인회생이 중도폐지되어 다시 신청할 수 있는지 막막하다면 재신청 요건과 기각 방지 전략을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 변제를 진행하던 중 실직으로 변제금을 내지 못해 중도폐지 결정을 받았습니다.</p><p>이제 빚은 원래대로 돌아오는 건지, 다시 신청할 수는 있는 건지, 두 번째 신청이 더 어려운 건지 막막합니다.</p><p>중도폐지는 "회생 절차가 중간에 끝났다"는 뜻이지 "다시 신청할 수 없다"는 뜻이 아닙니다. 법률상 재신청 횟수에 제한은 없지만, 법원은 첫 번째 폐지 사유를 엄격하게 심사합니다.</p><p>중도폐지 후 재신청이 가능한 요건 3가지와 기각을 방지하는 전략을 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 중도폐지의 효과와 재신청 가능 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중도폐지되면 변제한 금액은 돌려받지 못하고 채무가 원상복구됩니다 — 하지만 재신청은 가능합니다</strong></p>\n<ul>\n<li><strong>중도폐지의 효과</strong> — 개인회생이 폐지되면 변제계획이 실효되고, 면책받지 못한 채무가 원래대로 부활합니다. 이미 변제한 금액은 반환되지 않으며, 채권자의 추심도 다시 시작됩니다</li>\n<li><strong>재신청 가능 여부</strong> — 법률상 개인회생 재신청 횟수에 제한이 없습니다. 중도폐지 후에도 요건을 갖추면 다시 신청할 수 있습니다. 다만 법원은 이전 폐지 사유와 해결 여부를 중점적으로 심사합니다</li>\n<li><strong>폐지 사유 유형</strong> — ①변제금 미납(3회 이상 연체), ②소득 감소로 변제 불가, ③허위 서류 제출 발각, ④채권자의 폐지 신청 등이 있습니다. 사유에 따라 재신청 난이도가 달라집니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중도폐지 ≠ 재신청 불가 → 폐지 사유를 해결하면 다시 신청 가능</blockquote>',
      },
      {
        title: '2단계 — 재신청 시 법원이 보는 3가지 핵심 요건',
        content:
          '<p><strong style="color:#1e3a5f">이전 폐지 사유가 해결되었는지, 새로운 변제 능력이 있는지가 핵심입니다</strong></p>\n<ul>\n<li><strong>요건 ① 폐지 사유 해결</strong> — 실직으로 폐지되었다면 재취업 사실을 증빙해야 합니다. 질병이 원인이었다면 치료 완료 또는 호전 사실을 소명하세요. 법원은 "같은 이유로 또 폐지되지 않을 것"이라는 확신이 있어야 재개시합니다</li>\n<li><strong>요건 ② 안정적 소득 증빙</strong> — 재신청 시점의 소득이 변제금을 충당할 수 있음을 증명해야 합니다. 최소 3개월 이상의 급여명세서나 소득 증빙을 준비하세요. 이전보다 소득이 줄었다면 변제금을 하향 조정한 새 변제계획을 제출합니다</li>\n<li><strong>요건 ③ 성실한 태도 소명</strong> — 법원은 재신청자의 성실성을 까다롭게 봅니다. 이전 변제 기간 중 성실히 납부한 실적, 폐지 후 채무 상환 노력(일부 변제, 채권자 협의 등), 재신청 사유서를 통한 반성과 계획 등을 종합적으로 소명하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 중도폐지 사유에 맞는 재신청 전략을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 재신청 기각을 방지하는 4가지 전략을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">두 번째 신청은 첫 번째보다 엄격하게 심사되므로 철저한 준비가 필수입니다</strong></p>\n<ul>\n<li><strong>전략 ① 폐지 사유 해결 소명서 작성</strong> — "왜 폐지되었고, 어떻게 해결했으며, 다시는 같은 일이 반복되지 않을 것"을 구체적으로 작성하세요. 단순히 "반성합니다"가 아니라 객관적 증거(재취업 증명, 치료 확인서 등)와 함께 제출해야 합니다</li>\n<li><strong>전략 ② 보수적 변제계획 수립</strong> — 이전 변제금보다 현실적인 금액으로 새 변제계획을 세우세요. 소득 변동 가능성을 감안해 여유 있는 계획을 세우면 법원의 신뢰도가 높아집니다</li>\n<li><strong>전략 ③ 비상금 확보</strong> — 변제 기간 중 일시적 소득 감소에 대비한 비상금(최소 2~3개월분 변제금)을 확보해두세요. 재신청서에 비상금 확보 사실을 기재하면 법원이 변제 이행 가능성을 긍정적으로 봅니다</li>\n<li><strong>전략 ④ 파산 전환 검토</strong> — 재신청해도 변제 이행이 어려울 것으로 예상되면 파산·면책을 검토하는 것이 나을 수 있습니다. 소득이 최저생계비 이하이거나 장기 질병으로 근로가 불가능한 경우 파산이 더 적합할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">폐지 사유 해결 증빙 + 보수적 변제계획 + 비상금 확보 = 재신청 성공 전략</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025다211379 — 채권자취소권과 부인권',
        summary:
          '대법원 2025다211379 사건(대법원, 2025.12.04 선고)에서 법원은 채권자취소권에서 보증인의 변제자력은 주채무자의 사해행위 판단 시 고려 대상이 아니며, 변제자대위로 이전된 채권으로도 채권자취소권을 행사할 수 있다고 판시했습니다.',
        takeaway:
          '개인회생 중도폐지 후에는 채권자의 추심이 재개됩니다. 채권자가 채무자의 재산 처분 행위를 취소할 수 있는 권한도 부활하므로, 폐지 후 재산을 이전하거나 처분하는 행위는 피해야 합니다. 재신청을 준비하면서 재산은 현상 유지하세요.',
      },
    ],
    faq: [
      {
        question: '중도폐지 후 바로 재신청할 수 있나요?',
        answer:
          '법적으로 대기 기간은 없지만, 폐지 사유가 해결되지 않은 상태에서 바로 신청하면 기각될 가능성이 높습니다. 재취업, 소득 안정 등 폐지 사유를 해결한 뒤 최소 3개월 이상의 소득 증빙을 확보하고 신청하세요.',
      },
      {
        question: '이전에 변제한 금액은 어떻게 되나요?',
        answer:
          '중도폐지되면 이미 변제한 금액은 돌려받을 수 없습니다. 다만 재신청 시 이전 변제 실적은 "성실한 태도"를 소명하는 자료로 활용할 수 있으므로 변제 내역을 보관해두세요.',
      },
      {
        question: '허위 서류 제출로 폐지된 경우에도 재신청이 가능한가요?',
        answer:
          '법적으로 재신청은 가능하지만, 법원의 심사가 매우 까다로워집니다. 이번에는 모든 서류를 정직하게 작성하고, 이전 허위 기재에 대한 반성문과 함께 정확한 자료를 제출해야 합니다. 전문가 도움을 받는 것이 강력히 권장됩니다.',
      },
      {
        question: '재신청하면 변제 기간이 처음부터 다시 시작되나요?',
        answer:
          '네, 재신청이 인가되면 새로운 변제계획에 따라 변제 기간이 처음부터 시작됩니다. 이전 변제 기간은 새 변제계획에 산입되지 않습니다. 변제 기간은 3~5년입니다.',
      },
      {
        question: '중도폐지 후 파산으로 전환하는 것이 나은 경우는 언제인가요?',
        answer:
          '소득이 없거나 최저생계비 이하인 경우, 장기 질병으로 근로가 불가능한 경우, 채무 규모가 소득에 비해 과도하게 큰 경우에는 파산·면책이 더 적합할 수 있습니다. 파산은 재산 청산 후 채무 전액을 면제받는 제도입니다.',
      },
    ],
    cta: {
      text: '중도폐지 후 재신청 가능 여부, AI로 빠르게 확인하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy' },
      { label: '개인회생 신청 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 기각 사유와 예방', href: '/guide/rehabilitation/rehabilitation-rejection-reasons-prevention' },
      { label: '개인회생 사전 체크리스트', href: '/guide/rehabilitation/rehabilitation-pre-check' },
      { label: '개인회생 자격 요건 확인', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
    ],
  },
];
