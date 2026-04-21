import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 22. 이 페이지는 [교통사고 합의 후 후유증이 나타난 피해자]의 [추가 보상을 받을 수 있는지 모르는 상황]에서 [합의 후 추가 청구 가능 여부와 절차 안내]를 돕는 페이지다.
// 23. 이 페이지는 [렌터카 운전 중 사고가 난 운전자]의 [보험 처리 절차와 자기부담금 범위를 모르는 상황]에서 [렌터카 보험 종류별 보장 범위와 자기부담금 정리]를 돕는 페이지다.
// 24. 이 페이지는 [통원치료 횟수가 합의금에 영향을 미치는지 궁금한 피해자]의 [치료를 얼마나 받아야 불리하지 않은지 모르는 상황]에서 [통원치료 횟수와 합의금 관계, 적정 치료 기준 안내]를 돕는 페이지다.
// 25. 이 페이지는 [오토바이 교통사고를 당한 피해자]의 [자동차 사고와 합의 절차가 어떻게 다른지 모르는 상황]에서 [오토바이 사고 특유의 보험·합의·과실 쟁점 정리]를 돕는 페이지다.
// 26. 이 페이지는 [이혼 재산분할 시 빚도 나눠야 하는지 궁금한 배우자]의 [채무 분담 기준과 범위를 모르는 상황]에서 [재산분할 시 채무 포함 여부와 판단 기준 안내]를 돕는 페이지다.
// 27. 이 페이지는 [협의이혼 숙려기간을 줄이고 싶은 부부]의 [단축 가능 요건과 절차를 모르는 상황]에서 [숙려기간 단축 사유와 법원 신청 절차 안내]를 돕는 페이지다.
// 28. 이 페이지는 [양육비를 직접 청구할지 이행관리원을 이용할지 고민하는 양육자]의 [두 방식의 장단점과 실효성을 비교하려는 상황]에서 [직접 청구와 이행관리원 대행의 차이, 유리한 선택 기준 안내]를 돕는 페이지다.

export const spokesBatch25_22to28: SpokePage[] = [
  // ───────────────────────────────────────────
  // 22. traffic-accident / post-settlement-aftereffect-additional-claim
  // ───────────────────────────────────────────
  // 23. traffic-accident / rental-car-accident-insurance-deductible-guide
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'rental-car-accident-insurance-deductible-guide',
    keyword: '렌터카 사고 보험 처리 자기부담금 정리',
    questionKeyword: '렌터카 사고 나면 보험 처리는 어떻게 되고 자기부담금은 얼마인가요?',
    ctaKeyword: '렌터카 사고 보험 처리 상담',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '렌터카 사고 보험 처리와 자기부담금 3가지 핵심 | 로앤가이드',
      description:
        '렌터카 운전 중 사고가 났는데 보험 적용 범위와 자기부담금이 얼마나 나올지 걱정된다면 핵심 3가지를 지금 확인하세요',
    },
    intro:
      '<p>여행 중 렌터카로 접촉사고가 났습니다. 렌터카 업체에서는 수리비와 휴차료, 면책금까지 청구하겠다고 합니다. 내 자동차보험으로 처리가 되는 건지, 렌터카 자체보험으로 해야 하는 건지도 헷갈립니다. 렌터카 사고는 일반 자동차 사고와 보험 처리 구조가 다르기 때문에, 계약 시 가입한 보험의 종류와 보장 범위를 먼저 확인해야 합니다.</p>',
    sections: [
      {
        title: '렌터카 보험 종류별 보장 범위 구분',
        content:
          '<p><strong style="color:#1e3a5f">렌터카 이용 시 적용되는 보험은 크게 기본보험, 자차보험(CDW), 완전면책보험(슈퍼CDW) 3가지로 나뉩니다.</strong></p>\n<ol>\n<li><strong>기본보험(대인·대물)</strong> — 렌터카 요금에 포함된 기본 보험으로, 상대방 피해(대인·대물)를 보장합니다. 단, 본인 차량 수리비는 보장되지 않습니다</li>\n<li><strong>자차보험(CDW)</strong> — 렌터카 차량 파손 시 수리비를 보장하지만, 자기부담금(면책금)이 있습니다. 일반적으로 20만~50만 원 수준입니다</li>\n<li><strong>완전면책보험(슈퍼CDW)</strong> — 자기부담금 0원으로, 차량 파손·도난 시 추가 비용이 발생하지 않습니다. 다만 음주운전, 무면허 등 면책 사유에 해당하면 보장이 제외됩니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 렌터카 계약서에 어떤 보험에 가입했는지 반드시 확인하세요. 보험 종류에 따라 자기부담금이 0원부터 수백만 원까지 달라집니다</blockquote>',
      },
      {
        title: '렌터카 사고 시 보험 처리 절차 4단계',
        content:
          '<p><strong style="color:#1e3a5f">렌터카 사고가 발생하면 아래 4단계를 순서대로 진행해야 불필요한 추가 비용을 방지할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계: 사고 현장 조치</strong> — 경찰 신고(112) → 사고 현장 사진 촬영 → 상대방 정보 확인(보험사, 연락처). 경미한 사고라도 반드시 경찰 신고를 해두세요</li>\n<li><strong>2단계: 렌터카 업체 연락</strong> — 사고 발생 즉시 렌터카 업체 긴급연락처로 사고 접수합니다. 접수 지연 시 보험 적용이 거부될 수 있습니다</li>\n<li><strong>3단계: 보험 적용 확인</strong> — 본인 자동차보험의 "타차담보(다른 자동차 운전 담보)" 특약이 있는지 확인합니다. 있으면 본인 보험으로 처리 가능합니다</li>\n<li><strong>4단계: 수리비·휴차료 정산</strong> — 렌터카 업체가 청구하는 수리비, 휴차료(영업손실), 면책금의 적정성을 확인합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 렌터카 보험 적용 여부와 자기부담금 범위를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '렌터카 업체 과다 청구 시 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">렌터카 업체가 수리비, 휴차료, 감가상각비를 과다하게 청구하는 경우에는 적정성을 따져볼 필요가 있습니다.</strong></p>\n<ul>\n<li><strong>수리비 과다 청구</strong> — 업체 지정 정비소가 아닌 독립 정비소 견적을 받아 비교하세요. 보험사에 수리비 감정을 요청할 수도 있습니다</li>\n<li><strong>휴차료 분쟁</strong> — 휴차료는 실제 영업 손실을 기준으로 산정해야 하며, 수리 기간이 과도하게 길면 합리적 수리기간만큼만 인정됩니다</li>\n<li><strong>감가상각비 청구</strong> — 사고로 인한 차량 가치 하락분을 청구하는 경우가 있는데, 경미한 사고에서는 인정되지 않는 경우가 많습니다</li>\n<li><strong>한국소비자원 분쟁조정</strong> — 렌터카 업체와 합의가 안 되면 한국소비자원(1372)에 분쟁조정을 신청할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사고 현장 사진, 경찰 사고접수증, 렌터카 계약서는 분쟁 발생 시 가장 중요한 증거이므로 반드시 보관하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이륜자동차 통지의무 약관 해석과 보험 해지 여부',
        summary:
          '대법원 2024다289680 사건(대법원, 2025.08.14 선고)에서 법원은 보험약관에서 이륜자동차 사용 통지의무를 구체화한 조항에 대해, 보험자의 명시·설명의무가 면제되지 않으며, 약관 설명의무 위반 시에도 상법 제652조 제1항의 적용은 배제되지 않는다고 판시했습니다.',
        takeaway:
          '렌터카 사고에서도 보험약관의 구체적 내용과 설명의무가 중요하므로, 계약 체결 시 보장 범위와 면책 사유를 꼼꼼히 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: '내 자동차보험으로 렌터카 사고를 처리할 수 있나요?',
        answer:
          '<strong>"다른 자동차 운전 담보(타차담보)" 특약에 가입되어 있으면 가능합니다.</strong> 대부분의 자동차보험에 이 특약이 포함되어 있으나, 보장 한도가 다를 수 있으므로 사고 전에 보험사에 확인해두는 것이 좋습니다. 본인 보험으로 처리하면 다음 해 보험료가 오를 수 있습니다.',
      },
      {
        question: '렌터카 업체가 청구하는 휴차료는 꼭 내야 하나요?',
        answer:
          '<strong>영업용 차량의 경우 실제 영업 손실에 해당하는 휴차료를 지급해야 합니다.</strong> 하지만 수리 기간이 부당하게 길거나 금액이 과다하면 이의를 제기할 수 있습니다. 보험사에 휴차료 감정을 의뢰하거나 한국소비자원에 조정을 신청하세요.',
      },
      {
        question: '완전면책보험(슈퍼CDW)에 가입했는데도 비용이 청구될 수 있나요?',
        answer:
          '<strong>음주운전, 무면허운전, 계약 외 운전자의 운전 등 면책 사유에 해당하면 보장이 제외됩니다.</strong> 또한 타이어, 유리, 하부 파손 등은 일부 업체에서 보장 제외 항목으로 지정하는 경우가 있으므로 계약 약관을 꼭 확인하세요.',
      },
      {
        question: '렌터카 사고 후 경찰 신고를 안 하면 어떻게 되나요?',
        answer:
          '<strong>경찰 신고를 하지 않으면 보험 처리가 거부되거나, 과실 판정에서 불리해질 수 있습니다.</strong> 경미한 접촉사고라도 반드시 112에 신고하고 사고접수번호를 받아두세요. 이 번호가 보험 청구와 과실 판정의 기본 자료가 됩니다.',
      },
    ],
    cta: {
      text: '렌터카 사고 보험 처리, AI가 안내해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 절차 총정리', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '교통사고 과실비율 다툼 대응법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 합의 실수 방지 가이드', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 상해 보상금 계산', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
    ],
  },

  // ───────────────────────────────────────────
  // 24. traffic-accident / outpatient-treatment-count-settlement-impact
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'outpatient-treatment-count-settlement-impact',
    keyword: '교통사고 통원치료 횟수 합의금 영향',
    questionKeyword: '교통사고 통원치료를 몇 번 받아야 합의에 불리하지 않나요?',
    ctaKeyword: '교통사고 통원치료 합의금 상담',
    type: '기준형',
    perspective: 'victim',
    meta: {
      title: '교통사고 통원치료 횟수와 합의금 관계 4가지 기준 | 로앤가이드',
      description:
        '교통사고 후 통원치료를 너무 적게 받으면 합의금이 줄어드는 건 아닌지 걱정된다면 적정 치료 기준 4가지를 지금 확인하세요',
    },
    intro:
      '<p>교통사고 후 허리가 아파서 정형외과에 다니고 있습니다. 보험사 담당자는 "치료가 너무 길다"고 하고, 주변에서는 "더 다녀야 합의금이 올라간다"고 합니다. 통원치료 횟수가 합의금에 직접 영향을 미치는 것은 사실이지만, 무조건 많이 다닌다고 유리한 것은 아닙니다. 치료의 적정성과 의학적 근거가 더 중요합니다.</p>',
    sections: [
      {
        title: '통원치료 횟수가 합의금에 미치는 영향 구조',
        content:
          '<p><strong style="color:#1e3a5f">보험사는 통원치료 횟수를 합의금 산정의 핵심 지표 중 하나로 사용하며, 치료 기간과 횟수에 따라 위자료 등급이 달라집니다.</strong></p>\n<ol>\n<li><strong>치료일수 기준 위자료</strong> — 보험사는 입원일수와 통원일수를 합산하여 위자료를 산정합니다. 통원 1일당 약 3만~5만 원 수준으로 반영되는 것이 일반적입니다</li>\n<li><strong>치료 기간 기준</strong> — 같은 횟수라도 3개월 치료와 6개월 치료는 위자료 등급이 다릅니다. 치료 기간이 길수록 후유장해 가능성도 높게 평가됩니다</li>\n<li><strong>과잉진료 판단 기준</strong> — 보험사는 진단명 대비 치료 횟수가 과도하다고 판단하면 일부 치료비를 인정하지 않을 수 있습니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통원치료는 "많이"가 아니라 "적절하게" 받는 것이 중요합니다. 담당의의 치료 계획에 따라 꾸준히 치료받으세요</blockquote>',
      },
      {
        title: '적정 통원치료 횟수 판단 기준 4가지',
        content:
          '<p><strong style="color:#1e3a5f">의학적으로 필요한 치료를 빠짐없이 받되, 과잉진료 시비를 피하려면 아래 4가지 기준을 참고하세요.</strong></p>\n<ul>\n<li><strong>진단서 기반 치료</strong> — 진단서에 기재된 치료 기간 내에서 치료받는 것이 가장 안전합니다. 추가 치료가 필요하면 담당의에게 연장 소견서를 받으세요</li>\n<li><strong>주 2~3회 기준</strong> — 경추·요추 염좌 등 일반적인 교통사고 상해는 주 2~3회 통원이 적정하다고 판단되는 경우가 많습니다</li>\n<li><strong>치료 공백 주의</strong> — 2주 이상 치료를 중단하면 보험사가 "증상이 호전된 것"으로 판단하여 이후 치료비를 부인할 수 있습니다</li>\n<li><strong>MRI 등 정밀검사 병행</strong> — X-ray만으로는 부족한 경우가 많습니다. MRI 검사 결과가 있으면 후유장해 주장에 유리합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 현재 치료 상황에 따른 합의금 예상 범위를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '치료 종결 후 합의 시 체크포인트',
        content:
          '<p><strong style="color:#1e3a5f">치료를 마친 뒤 합의를 진행할 때, 통원 기록과 의료 소견을 정리해두면 협상력이 높아집니다.</strong></p>\n<ul>\n<li><strong>진료기록부 발급</strong> — 모든 통원 일자, 치료 내용, 처방 내역이 기재된 진료기록부를 발급받으세요. 합의금 산정의 기본 자료입니다</li>\n<li><strong>향후 치료비 소견서</strong> — 치료가 끝나도 통증이 남아 있다면 담당의에게 "향후 OO개월 추가 치료 필요" 소견서를 받으세요</li>\n<li><strong>후유장해 진단</strong> — 증상이 고정된 뒤 후유장해 진단서를 발급받으면 장해위자료를 별도로 청구할 수 있습니다</li>\n<li><strong>치료비 영수증 일괄 정리</strong> — 약국 처방비, 한방 치료비, 물리치료비를 포함한 모든 영수증을 취합하여 제출하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 치료를 일찍 중단하면 "더 이상 치료가 필요 없었다"는 보험사의 주장에 반박하기 어렵습니다. 의사의 치료 종결 소견이 있을 때까지 치료를 지속하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증보험 보험사고 결정 방법',
        summary:
          '대법원 2021다220628 사건(대법원, 2025.08.14 선고)에서 법원은 보증보험에서 보험사고가 무엇인지는 보험약관과 보험증권, 주계약의 내용 등을 종합하여 결정해야 하며, 처분문서의 의사해석은 문언의 내용, 약정의 동기와 경위, 목적 등을 종합적으로 고찰해야 한다고 판시했습니다.',
        takeaway:
          '교통사고 합의에서도 보험 약관의 보장 범위를 종합적으로 해석해야 하며, 치료비 항목별로 약관에 따른 보장 여부를 꼼꼼히 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: '통원치료를 많이 받으면 과잉진료로 의심받나요?',
        answer:
          '<strong>진단명에 비해 치료 횟수가 과도하면 보험사가 과잉진료를 주장할 수 있습니다.</strong> 예를 들어 단순 염좌인데 6개월간 매일 통원하면 일부 치료비가 부인될 수 있습니다. 담당의의 치료 계획서가 있으면 과잉진료 시비를 방지할 수 있습니다.',
      },
      {
        question: '한방병원 치료도 합의금에 반영되나요?',
        answer:
          '<strong>한방 치료(침, 추나요법, 한약 등)도 의학적 필요성이 인정되면 합의금에 반영됩니다.</strong> 다만 보험사는 양방 치료만 인정하려는 경향이 있으므로, 양방 담당의의 한방 치료 의뢰서나 한방 진단서를 함께 확보하면 유리합니다.',
      },
      {
        question: '치료를 2주 이상 쉬었는데 괜찮은가요?',
        answer:
          '<strong>2주 이상 치료 공백이 있으면 보험사가 "증상이 호전되었다"고 주장할 근거가 됩니다.</strong> 부득이하게 치료를 중단한 사유(출장, 입원 등)가 있다면 이를 증빙할 자료를 준비하고, 치료 재개 시 담당의에게 공백 사유를 기재해달라고 요청하세요.',
      },
      {
        question: '보험사가 치료비 지급을 중단하겠다고 하면 어떻게 하나요?',
        answer:
          '<strong>담당의의 소견서로 치료의 필요성을 입증하면 지급 중단에 이의를 제기할 수 있습니다.</strong> "향후 OO개월 추가 치료 필요"라는 소견서를 보험사에 제출하고, 그래도 거부하면 금융감독원 분쟁조정을 신청하세요.',
      },
      {
        question: '입원치료와 통원치료 중 합의금에 더 유리한 것은 무엇인가요?',
        answer:
          '<strong>입원 1일과 통원 1일의 위자료 반영액이 다르며, 일반적으로 입원일수가 더 높게 반영됩니다.</strong> 하지만 의학적 필요 없이 입원하면 과잉진료로 판단되어 오히려 불리해질 수 있으므로, 담당의의 판단에 따라야 합니다.',
      },
    ],
    cta: {
      text: '통원치료 횟수와 합의금 관계, AI가 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 절차 총정리', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '교통사고 후유증 치료비 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 상해 보상금 계산', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '교통사고 과실비율 다툼 대응법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
    ],
  },

  // ───────────────────────────────────────────
  // 25. traffic-accident / motorcycle-accident-settlement-differences
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'motorcycle-accident-settlement-differences',
    keyword: '오토바이 교통사고 합의 자동차 사고 차이점',
    questionKeyword: '오토바이 사고 합의는 자동차 사고와 뭐가 다른가요?',
    ctaKeyword: '오토바이 교통사고 합의 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '오토바이 교통사고 합의, 자동차 사고와 다른 점 4가지 | 로앤가이드',
      description:
        '오토바이 사고를 당했는데 합의 절차가 자동차 사고와 같은 건지 다른 건지 헷갈린다면 핵심 차이 4가지를 지금 확인하세요',
    },
    intro:
      '<p>배달 중 오토바이로 교차로에서 승용차와 부딪혔습니다. 보험사에서는 오토바이 과실이 더 크다고 합니다. 오토바이는 자동차와 달리 자동차보험 가입 의무가 다르고, 사고 시 과실 비율 산정이나 보상 체계에서도 차이가 있습니다. 오토바이 사고만의 특수한 쟁점을 먼저 파악해야 합의에서 불리하지 않습니다.</p>',
    sections: [
      {
        title: '오토바이 사고의 보험 구조 차이',
        content:
          '<p><strong style="color:#1e3a5f">오토바이(이륜자동차)는 자동차보험 가입 구조가 자동차와 다르며, 보험 미가입 상태인 경우도 많습니다.</strong></p>\n<ol>\n<li><strong>의무보험 가입 범위</strong> — 이륜차도 책임보험(대인Ⅰ, 대물) 가입이 의무이지만, 종합보험(자차, 대인Ⅱ 등)은 임의가입입니다. 미가입 이륜차가 많아 사고 시 본인 부담이 커질 수 있습니다</li>\n<li><strong>자동차보험과의 관계</strong> — 승용차 소유자가 오토바이도 타는 경우, 승용차 보험의 "다른 자동차 운전 담보"에서 이륜차가 제외되는 약관이 많습니다</li>\n<li><strong>배달라이더 특수 보험</strong> — 배달 플랫폼 소속 라이더는 플랫폼에서 제공하는 유상운송보험이 적용될 수 있으나, 보장 범위가 제한적입니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 오토바이 보험 가입 여부와 보장 범위를 먼저 확인하세요. 종합보험 미가입 시 본인 치료비와 차량 수리비를 자비로 부담해야 할 수 있습니다</blockquote>',
      },
      {
        title: '과실비율과 합의금 산정의 차이점 4가지',
        content:
          '<p><strong style="color:#1e3a5f">오토바이 사고는 자동차 사고와 비교했을 때 과실비율 산정, 상해 정도, 합의금 구조에서 아래 4가지 차이가 있습니다.</strong></p>\n<ul>\n<li><strong>과실비율 가중</strong> — 오토바이는 차로 변경, 끼어들기, 차간 주행(일명 "빠른이") 등으로 과실이 높게 산정되는 경우가 많습니다</li>\n<li><strong>상해 정도 심각</strong> — 오토바이는 신체 노출이 커서 같은 충격에도 자동차보다 상해가 심합니다. 후유장해 발생률이 높아 장해위자료가 커질 수 있습니다</li>\n<li><strong>헬멧 미착용 과실</strong> — 헬멧을 착용하지 않았으면 피해자 과실이 5~10% 가산될 수 있습니다</li>\n<li><strong>무보험 차량 공제</strong> — 가해 오토바이가 보험 미가입이면 피해자는 정부보장사업(자동차손해배상보장법)에 보상을 청구할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 오토바이 사고의 과실비율과 합의금 쟁점을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '오토바이 사고 피해자가 지금 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">오토바이 사고 피해자는 일반 자동차 사고보다 증거 확보와 보험 확인이 더 중요합니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV 확보</strong> — 오토바이에 블랙박스가 없는 경우가 많으므로 사고 현장 주변 CCTV를 경찰에 요청하세요. 증거가 없으면 과실 다툼에서 크게 불리합니다</li>\n<li><strong>보험 가입 여부 즉시 확인</strong> — 본인 이륜차 보험, 상대 차량 보험을 각각 확인합니다. 보험개발원(02-2100-6700)에서 이륜차 보험 가입 여부를 조회할 수 있습니다</li>\n<li><strong>산재보험 적용 검토</strong> — 배달·퀵서비스 등 업무 중 사고라면 산업재해보상보험으로 치료비를 먼저 처리할 수 있습니다</li>\n<li><strong>정부보장사업 청구</strong> — 가해자가 보험 미가입이거나 뺑소니인 경우, 자동차손해배상보장법에 따라 정부보장사업에서 보상을 받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 오토바이 사고는 상해가 심한 반면 보험 보장이 부족한 경우가 많으므로, 사고 직후부터 전문가 상담을 받는 것이 좋습니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 톨게이트에서 오토바이 충격 사고의 과속·과실 판단',
        summary:
          '대법원 2025도1049 사건(대법원, 2025.06.12 선고)에서 법원은 피고인이 톨게이트 하이패스 구간을 과속으로 진행하다가 오토바이를 들이받은 사건에서, 제한속도 위반이 교통사고 발생의 직접적 원인이 아니면 교통사고처리특례법상 "제한속도 시속 20km 초과" 위반에 해당하지 않는다고 판시했습니다.',
        takeaway:
          '오토바이 사고에서 과속 여부만으로 과실을 단정할 수 없으며, 과속과 사고 사이의 인과관계를 구체적으로 따져봐야 합니다.',
      },
    ],
    faq: [
      {
        question: '오토바이에 자동차보험을 안 들었으면 보상을 못 받나요?',
        answer:
          '<strong>본인이 보험에 미가입이어도 상대방(자동차) 보험으로 보상받을 수 있습니다.</strong> 상대 과실이 있다면 상대 보험사의 대인·대물 보험으로 치료비와 합의금을 받을 수 있습니다. 다만 본인 과실에 해당하는 부분은 자비로 부담해야 합니다.',
      },
      {
        question: '배달 중 오토바이 사고는 산재 처리가 가능한가요?',
        answer:
          '<strong>고용보험·산재보험에 가입되어 있으면 산재 처리가 가능합니다.</strong> 2021년부터 플랫폼 배달종사자도 산재보험 적용 대상이 되었습니다. 근로복지공단에 산재 신청을 하면 치료비 전액과 휴업급여를 받을 수 있습니다.',
      },
      {
        question: '헬멧을 안 쓰고 있었으면 합의금이 줄어드나요?',
        answer:
          '<strong>헬멧 미착용은 피해자 과실로 5~10% 가산될 수 있습니다.</strong> 특히 머리 부위 상해가 발생한 경우 헬멧 미착용이 상해 확대 원인으로 인정되면 합의금에서 과실 비율만큼 감액됩니다.',
      },
      {
        question: '오토바이 대 자동차 사고에서 기본 과실비율은 어떻게 되나요?',
        answer:
          '<strong>사고 유형별로 다르지만, 교차로 직진 오토바이 vs 좌회전 자동차의 경우 오토바이 20 : 자동차 80 정도가 기본입니다.</strong> 다만 오토바이의 차간주행, 신호위반, 과속 등이 있으면 오토바이 과실이 크게 가중됩니다.',
      },
    ],
    cta: {
      text: '오토바이 사고 합의 전략, AI가 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실비율 다툼 대응법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 합의 절차 총정리', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '교통사고 후유증 치료비 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
      { label: '교통사고 상해 보상금 계산', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
    ],
  },

  // ───────────────────────────────────────────
  // 26. divorce / divorce-debt-division-standard-criteria
  // ───────────────────────────────────────────
  {
    domain: 'divorce',
    slug: 'divorce-debt-division-standard-criteria',
    keyword: '이혼 재산분할 채무 분담 기준 3가지',
    questionKeyword: '이혼할 때 빚도 나누는 건가요? 기준은 뭔가요?',
    ctaKeyword: '이혼 재산분할 채무 분담 상담',
    type: '기준형',
    perspective: 'victim',
    meta: {
      title: '이혼 재산분할 시 빚도 나누는 기준 3가지 | 로앤가이드',
      description:
        '이혼하면서 배우자의 빚까지 나눠야 하는 건지, 어떤 빚이 분할 대상인지 모르겠다면 판단 기준 3가지를 지금 확인하세요',
    },
    intro:
      '<p>이혼을 준비하면서 재산분할을 따져보는데, 배우자 명의 대출이 1억이 넘습니다. 이 빚도 반씩 나눠야 하는 건지, 내가 모르던 빚까지 떠안게 되는 건 아닌지 걱정됩니다. 재산분할에서 채무도 분할 대상에 포함되지만, 모든 빚이 나눠지는 것은 아닙니다. 공동 재산 형성과 관련된 채무인지가 핵심 판단 기준입니다.</p>',
    sections: [
      {
        title: '재산분할 시 채무가 포함되는 기준 3가지',
        content:
          '<p><strong style="color:#1e3a5f">이혼 재산분할에서 채무가 분할 대상에 포함되려면, 혼인 중 공동 재산 형성에 기여한 채무여야 합니다.</strong></p>\n<ol>\n<li><strong>공동생활 유지 채무</strong> — 주택 구입 대출, 생활비 대출, 자녀 교육비 대출 등 부부 공동생활을 위해 발생한 채무는 분할 대상입니다</li>\n<li><strong>재산 형성 관련 채무</strong> — 부동산 투자, 사업 운영 등 공동 재산을 형성하는 과정에서 생긴 채무도 포함됩니다. 다만 한쪽이 독단적으로 결정한 투자 실패로 인한 채무는 제외될 수 있습니다</li>\n<li><strong>개인적 채무 제외</strong> — 도박, 유흥, 사치 등 개인적 목적으로 발생한 채무는 해당 배우자 개인이 부담합니다. 혼인 전부터 있던 개인 채무도 원칙적으로 분할 대상이 아닙니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 채무가 분할 대상인지는 "이 빚이 부부 공동의 이익을 위해 발생한 것인가"로 판단됩니다. 배우자의 개인적 낭비로 인한 채무까지 나눌 필요는 없습니다</blockquote>',
      },
      {
        title: '채무 분할 방법과 실무 절차',
        content:
          '<p><strong style="color:#1e3a5f">채무의 분할은 "적극재산에서 소극재산(채무)을 공제"하는 방식으로 이루어집니다.</strong></p>\n<ul>\n<li><strong>순재산 산정 방식</strong> — 부부의 총 적극재산(부동산, 금융자산 등)에서 총 소극재산(채무)을 빼고 남은 순재산을 분할합니다. 채무가 재산보다 많으면 마이너스 분할은 하지 않습니다</li>\n<li><strong>채무 초과 시</strong> — 총 채무가 총 재산을 넘어가면 재산분할로 배분할 재산이 없으므로, 별도의 채무 분담 청구는 인정되지 않는 것이 원칙입니다</li>\n<li><strong>기준 시점</strong> — 재산분할의 기준 시점은 사실심 변론종결일(재판이혼)이 원칙이지만, 별거 시작일을 기준으로 보는 경우도 있습니다</li>\n<li><strong>은닉 채무 주의</strong> — 배우자가 재산분할을 줄이기 위해 가짜 채무를 만드는 경우가 있습니다. 채무의 발생 시기, 사용처, 채권자를 꼼꼼히 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 채무 분할 대상 여부와 순재산 산정 방향을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '채무 관련 분쟁 대비 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">이혼 재산분할에서 채무 관련 분쟁을 대비하려면 아래 증빙을 미리 확보해두세요.</strong></p>\n<ul>\n<li><strong>채무 목록 작성</strong> — 배우자 명의 대출, 신용카드 채무, 사채 등을 항목별로 정리합니다. 금융감독원 "파인(FINE)"에서 본인 명의 채무를 일괄 조회할 수 있습니다</li>\n<li><strong>사용처 증빙</strong> — 대출금이 주택 구입, 생활비, 사업자금 등 어디에 사용되었는지를 통장 거래내역으로 확인하세요</li>\n<li><strong>가장 채무 확인</strong> — 배우자가 이혼 직전에 급하게 만든 차용증이나 지인 채무는 가장 채무일 가능성이 있습니다. 채무 발생 시기와 채권자 관계를 확인하세요</li>\n<li><strong>연대보증 확인</strong> — 배우자의 사업 채무에 연대보증을 선 경우, 이혼 후에도 채권자에 대한 보증 책임은 남습니다. 이혼 전에 연대보증 해제를 시도하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재산분할은 이혼 후 2년 이내에 청구해야 합니다. 채무 관련 증빙은 이혼 전에 확보해두는 것이 중요합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할에서 청산적 의미와 기여 인정 범위',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.16 선고)에서 법원은 재산분할의 청산적 의미를 강조하며, 부부 일방이 부모나 친족으로부터 받은 재산이라도 혼인 중 기여가 인정되면 분할 대상에 포함될 수 있고, 혼인 파탄 전 재산 처분의 경우 부부공동생활과 관련된 것이면 기준 시점의 재산에 반영해야 한다고 판시했습니다.',
        takeaway:
          '채무 분할에서도 해당 채무가 부부 공동재산 형성에 기여한 것인지를 구체적으로 따져봐야 하며, 특유재산과 공동재산의 구분이 핵심 쟁점입니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 도박으로 만든 빚도 내가 나눠야 하나요?',
        answer:
          '<strong>도박, 유흥 등 개인적 목적의 채무는 원칙적으로 분할 대상이 아닙니다.</strong> 법원은 채무의 발생 원인을 심리하여 부부 공동의 이익과 무관한 채무는 해당 배우자 개인이 부담하도록 합니다.',
      },
      {
        question: '혼인 전 배우자의 학자금 대출도 분할 대상인가요?',
        answer:
          '<strong>혼인 전에 발생한 채무는 원칙적으로 분할 대상이 아닙니다.</strong> 다만 혼인 중 부부 공동 수입으로 갚아왔고 그 학위가 가계 소득에 기여했다면 예외적으로 고려될 수 있습니다.',
      },
      {
        question: '재산보다 빚이 더 많으면 어떻게 되나요?',
        answer:
          '<strong>순재산이 마이너스인 경우 재산분할로 채무를 분담시키지는 않습니다.</strong> 재산분할은 순재산이 있을 때 이를 나누는 제도이므로, 채무가 더 많으면 분할할 재산이 없는 것으로 처리됩니다. 각자 명의의 채무는 각자 책임지게 됩니다.',
      },
      {
        question: '배우자가 이혼 직전에 갑자기 빚을 늘리면 어떻게 대응하나요?',
        answer:
          '<strong>이혼 직전 급조된 채무는 가장 채무로 의심받을 수 있으며, 법원이 이를 인정하지 않을 수 있습니다.</strong> 채무 발생 시점, 채권자와의 관계, 사용처 등을 법원에 제출하여 가장 채무임을 다투세요.',
      },
      {
        question: '주택담보대출이 있는 집의 재산분할은 어떻게 하나요?',
        answer:
          '<strong>주택 시가에서 담보대출 잔액을 뺀 순자산을 기준으로 분할합니다.</strong> 예를 들어 시가 5억 원 아파트에 대출 3억 원이 있으면, 순자산 2억 원을 기여도에 따라 나눕니다. 집을 매도할지, 한쪽이 인수할지는 협의 또는 법원 결정으로 정합니다.',
      },
    ],
    cta: {
      text: '이혼 재산분할 채무 분담, AI가 분석해드립니다',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 비율 결정 기준', href: '/guide/divorce/property-division-ratio' },
      { label: '재산분할 핵심 요소 가이드', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '이혼 재산분할 범위 FAQ', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '협의이혼과 재판이혼 차이', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '이혼 상담 전 준비사항', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ───────────────────────────────────────────
  // 27. divorce / consensual-divorce-cooling-period-reduction
  // ───────────────────────────────────────────
  {
    domain: 'divorce',
    slug: 'consensual-divorce-cooling-period-reduction',
    keyword: '협의이혼 숙려기간 단축 가능 경우 3가지',
    questionKeyword: '협의이혼 숙려기간을 줄일 수 있는 경우는 언제인가요?',
    ctaKeyword: '협의이혼 숙려기간 단축 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 숙려기간 줄이는 방법 3가지 조건 | 로앤가이드',
      description:
        '협의이혼 숙려기간이 너무 길어서 빨리 이혼하고 싶은데 단축이 되는 경우가 있는지 궁금하다면 3가지 조건을 지금 확인하세요',
    },
    intro:
      '<p>배우자와 이혼에 합의했는데, 법원에서 숙려기간 3개월을 기다려야 한다고 합니다. 가정폭력 상황이라 하루라도 빨리 이혼을 마치고 싶습니다. 협의이혼 숙려기간은 원칙적으로 양육할 자녀가 있으면 3개월, 없으면 1개월이지만, 일정한 사유가 있으면 법원에 기간 단축을 신청할 수 있습니다.</p>',
    sections: [
      {
        title: '협의이혼 숙려기간 기본 구조',
        content:
          '<p><strong style="color:#1e3a5f">협의이혼 숙려기간은 민법 제836조의2에 따라 부부가 이혼 의사를 숙고하도록 법원이 부여하는 기간입니다.</strong></p>\n<ol>\n<li><strong>자녀가 있는 경우</strong> — 양육할 미성년 자녀가 있으면 숙려기간은 3개월입니다. 이혼 의사 확인 신청 후 3개월이 경과해야 법원에 출석하여 이혼 의사를 확인받을 수 있습니다</li>\n<li><strong>자녀가 없는 경우</strong> — 양육할 미성년 자녀가 없으면 숙려기간은 1개월입니다</li>\n<li><strong>숙려기간의 의미</strong> — 숙려기간은 성급한 이혼을 방지하고, 특히 자녀의 양육 문제를 충분히 협의하라는 취지입니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 숙려기간은 "최소 대기 기간"이므로, 기간이 지나야 비로소 이혼 의사 확인 기일이 지정됩니다. 신청서 접수일부터 기산됩니다</blockquote>',
      },
      {
        title: '숙려기간 단축이 가능한 3가지 경우',
        content:
          '<p><strong style="color:#1e3a5f">가정법원은 아래 사유가 인정되면 숙려기간의 단축 또는 면제를 결정할 수 있습니다(민법 제836조의2 제3항).</strong></p>\n<ul>\n<li><strong>가정폭력</strong> — 배우자의 폭행, 학대 등 가정폭력이 있는 경우 숙려기간 단축 또는 면제 사유에 해당합니다. 경찰 신고 기록, 진단서, 피해자보호명령 등이 증빙이 됩니다</li>\n<li><strong>그 밖의 급박한 사정</strong> — 배우자의 약물중독, 도박중독, 심각한 정신질환 등으로 정상적인 혼인생활이 불가능하고 즉시 이혼이 필요한 경우입니다</li>\n<li><strong>당사자 쌍방의 신청</strong> — 부부 양쪽이 모두 단축을 신청하고, 법원이 사정을 고려하여 인정하는 경우입니다. 다만 단순히 "빨리 이혼하고 싶다"는 이유만으로는 인정되지 않습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 숙려기간 단축 가능성과 필요 서류를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '숙려기간 단축 신청 절차와 준비서류',
        content:
          '<p><strong style="color:#1e3a5f">숙려기간 단축 신청은 협의이혼 의사확인 신청과 함께 또는 이후에 별도로 가정법원에 제출합니다.</strong></p>\n<ul>\n<li><strong>신청서 작성</strong> — 가정법원에 "숙려기간 단축(면제) 신청서"를 제출합니다. 단축 사유, 구체적 사실관계, 증빙자료 목록을 기재합니다</li>\n<li><strong>증빙서류</strong> — 가정폭력: 진단서, 경찰 신고 접수증, 피해자보호명령 결정문 / 기타 사유: 의사 진단서, 치료 기록, 약물·도박 관련 증빙</li>\n<li><strong>법원 판단</strong> — 법원이 서면 심리 또는 심문 기일을 거쳐 단축 여부를 결정합니다. 가정폭력 사유가 명확하면 1~2주 내에 결정이 나오는 경우가 많습니다</li>\n<li><strong>단축 후 절차</strong> — 단축이 인정되면 즉시 또는 단축된 기간 경과 후 이혼 의사 확인 기일이 지정됩니다. 양 당사자가 출석하여 이혼 의사를 확인하면 이혼이 성립합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 숙려기간 단축이 인정되지 않아도 재판이혼으로 전환하면 숙려기간 없이 이혼을 진행할 수 있습니다. 다만 재판이혼은 소송 절차가 필요합니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 부정행위로 인한 혼인 파탄과 위자료 청구',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 배우자 일방과 부정행위를 하여 혼인을 파탄에 이르게 한 경우, 배우자 일방과 제3자가 부담하는 손해배상책임은 부진정연대채무 관계에 있으며, 배우자에 대한 위자료 청구는 이혼이 확정된 후 소멸시효가 진행된다고 판시했습니다.',
        takeaway:
          '협의이혼이든 재판이혼이든 이혼 사유에 따라 위자료 청구가 가능하며, 숙려기간 중에도 위자료·재산분할 협의를 미리 진행하는 것이 효율적입니다.',
      },
    ],
    faq: [
      {
        question: '가정폭력이 있으면 숙려기간이 완전히 면제되나요?',
        answer:
          '<strong>법원이 판단하여 단축 또는 면제를 결정합니다.</strong> 가정폭력의 정도가 심하고 증빙이 명확하면 숙려기간이 면제되어 바로 이혼 의사 확인 기일이 잡힐 수 있습니다. 경찰 신고 기록과 진단서를 반드시 첨부하세요.',
      },
      {
        question: '숙려기간 중에 배우자가 이혼 의사를 철회하면 어떻게 되나요?',
        answer:
          '<strong>협의이혼은 양쪽 모두 이혼 의사가 있어야 성립하므로, 한쪽이 철회하면 협의이혼이 불가능합니다.</strong> 이 경우 이혼을 원하는 쪽이 가정법원에 재판이혼 소송을 제기해야 합니다.',
      },
      {
        question: '재판이혼으로 바꾸면 더 빠를 수 있나요?',
        answer:
          '<strong>재판이혼에는 숙려기간이 없지만, 소송 절차에 6개월~1년 이상 소요되는 것이 일반적입니다.</strong> 따라서 상대가 이혼에 동의하고 있다면 숙려기간 단축 신청 후 협의이혼을 진행하는 것이 더 빠릅니다.',
      },
      {
        question: '숙려기간 동안에도 양육비·재산분할 협의를 할 수 있나요?',
        answer:
          '<strong>숙려기간은 오히려 양육비, 재산분할, 위자료 등을 충분히 협의하는 시간으로 활용해야 합니다.</strong> 숙려기간 중에 양육권, 양육비, 재산분할 합의서를 작성해두면 이혼 의사 확인 기일에 바로 제출할 수 있습니다.',
      },
    ],
    cta: {
      text: '협의이혼 숙려기간 단축 가능성, AI가 분석해드립니다',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '협의이혼 절차와 소요 기간', href: '/guide/divorce/consensual-divorce-process' },
      { label: '협의이혼과 재판이혼 차이', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '협의이혼 필수 서류 총정리', href: '/guide/divorce/consensual-divorce-required-documents' },
      { label: '양육권 합의 준비 체크리스트', href: '/guide/divorce/custody-agreement-prep' },
      { label: '이혼 결심 후 어디서부터 시작할까', href: '/guide/divorce/decided-divorce-where-to-begin' },
    ],
  },

  // ───────────────────────────────────────────
  // 28. divorce / child-support-direct-vs-agency-comparison
  // ───────────────────────────────────────────
  {
    domain: 'divorce',
    slug: 'child-support-direct-vs-agency-comparison',
    keyword: '양육비 직접 청구 vs 이행관리원 비교',
    questionKeyword: '양육비를 직접 청구하는 것과 이행관리원 대행 중 뭐가 유리한가요?',
    ctaKeyword: '양육비 청구 방법 비교 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '양육비 직접 청구 vs 이행관리원 대행 비교 4가지 | 로앤가이드',
      description:
        '양육비를 직접 받아내야 할지 양육비이행관리원에 맡겨야 할지 고민된다면 두 방식의 차이 4가지를 지금 확인하세요',
    },
    intro:
      '<p>이혼 후 전 배우자가 양육비를 보내지 않습니다. 직접 연락해서 받아내자니 갈등만 커지고, 양육비이행관리원이란 곳이 있다는데 어떤 도움을 받을 수 있는지 모릅니다. 양육비를 받는 방법은 크게 직접 청구와 양육비이행관리원 대행 두 가지가 있으며, 각각 장단점이 다릅니다. 본인 상황에 맞는 방법을 선택해야 합니다.</p>',
    comparison: {
      title: '양육비 직접 청구 vs 이행관리원 대행 비교',
      headers: ['직접 청구', '이행관리원 대행'],
      rows: [
        { label: '비용', values: ['소송비용·변호사비 본인 부담', '무료 (국가 운영)'] },
        { label: '강제력', values: ['이행명령·감치명령 직접 신청', '이행관리원이 대신 독촉·신청'] },
        { label: '소요 시간', values: ['소송 6개월~1년', '신청 후 2주~1개월 내 착수'] },
        { label: '적합한 경우', values: ['고액 양육비, 재산 파악 필요', '소액·중액, 빠른 착수 필요'] },
      ],
    },
    sections: [
      {
        title: '직접 청구: 가정법원 양육비 이행 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">양육비를 직접 청구하려면 가정법원에 양육비 청구 소송 또는 이행명령 신청을 해야 합니다.</strong></p>\n<ol>\n<li><strong>양육비 청구 소송</strong> — 이혼 시 양육비 합의가 없었거나 합의 금액을 변경하고 싶을 때 가정법원에 양육비 청구 심판을 신청합니다. 양육비산정기준표에 따라 금액이 정해집니다</li>\n<li><strong>이행명령 신청</strong> — 이미 양육비 지급 판결이나 조정·합의가 있는데 지급하지 않으면 이행명령을 신청합니다. 불이행 시 1,000만 원 이하 과태료가 부과됩니다</li>\n<li><strong>감치명령 신청</strong> — 이행명령에도 불응하면 30일 이내 감치(구금)를 신청할 수 있습니다. 실제 구금 사례가 있어 강력한 압박 수단이 됩니다</li>\n<li><strong>재산명시·재산조회</strong> — 상대방의 재산을 파악하기 위해 법원에 재산명시명령이나 재산조회를 신청할 수 있습니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 청구는 절차가 복잡하고 시간이 걸리지만, 상대방 재산을 직접 파악하고 강제집행까지 진행할 수 있는 장점이 있습니다</blockquote>',
      },
      {
        title: '양육비이행관리원 대행: 무료 지원 서비스 활용법',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원은 여성가족부 산하 기관으로, 양육비 이행 확보를 무료로 지원합니다.</strong></p>\n<ul>\n<li><strong>이용 대상</strong> — 양육비 부담 합의, 조정, 판결을 받았으나 상대방이 지급하지 않는 경우 신청 가능합니다. 합의서가 없으면 먼저 양육비 청구 소송을 해야 합니다</li>\n<li><strong>지원 내용</strong> — 양육비 이행 촉구(독촉 통지), 추심 지원, 이행명령·감치명령·담보제공명령 등 법적 절차 대행, 한시적 양육비 긴급지원(월 최대 20만 원, 최장 9개월)</li>\n<li><strong>신청 방법</strong> — 양육비이행관리원 홈페이지(www.childsupport.or.kr) 또는 전화(1644-6621)로 신청합니다. 양육비 부담 조서, 판결문, 합의서 사본이 필요합니다</li>\n<li><strong>한계점</strong> — 상대방이 재산을 은닉하거나 소득이 없는 경우 실효성이 떨어질 수 있습니다. 고액 양육비 분쟁에서는 변호사 선임을 통한 직접 청구가 더 효과적일 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 직접 청구와 이행관리원 대행 중 적합한 방법을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상황별 유리한 방법 선택 기준',
        content:
          '<p><strong style="color:#1e3a5f">양육비 금액, 상대방 재산 상태, 시간 여유에 따라 적합한 방법이 달라집니다.</strong></p>\n<ul>\n<li><strong>빠른 착수가 필요할 때</strong> — 양육비이행관리원을 먼저 이용하세요. 무료이고 신청 후 비교적 빠르게 독촉 절차가 시작됩니다</li>\n<li><strong>상대가 재산을 숨기고 있을 때</strong> — 법원을 통한 직접 청구가 유리합니다. 재산명시명령, 재산조회를 통해 은닉 재산을 찾아낼 수 있습니다</li>\n<li><strong>양육비가 월 200만 원 이상일 때</strong> — 변호사를 선임한 직접 청구가 실효성 있습니다. 강제집행(급여 압류, 부동산 경매 등)까지 진행할 수 있습니다</li>\n<li><strong>양쪽 병행도 가능</strong> — 이행관리원의 지원을 받으면서 동시에 변호사를 통해 강제집행을 준비하는 것도 가능합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 양육비 청구권은 소멸시효가 없지만, 밀린 양육비는 기간이 길어질수록 상대방의 지급 능력이 약해질 수 있으므로 빠르게 조치하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 후 재산분할 청구와 채무 범위',
        summary:
          '대법원 2024므876 사건(대법원)에서 법원은 이혼 후 재산분할에서 분할 대상 재산의 범위를 심리하며, 재산분할이 혼인 중 형성한 재산의 청산적 의미와 이혼 후 부양적 의미를 함께 고려해야 한다고 판시했습니다.',
        takeaway:
          '양육비 청구에서도 상대방의 재산 상태와 소득 수준을 파악하는 것이 핵심이며, 재산분할과 양육비를 함께 전략적으로 검토해야 합니다.',
      },
    ],
    faq: [
      {
        question: '양육비 합의서가 없으면 이행관리원을 이용할 수 없나요?',
        answer:
          '<strong>양육비 부담에 관한 합의서, 조정조서, 또는 판결이 있어야 이행관리원 이용이 가능합니다.</strong> 합의가 없다면 먼저 가정법원에 양육비 청구 심판을 신청하여 양육비 지급 결정을 받아야 합니다. 이행관리원에서 소송 안내도 해줍니다.',
      },
      {
        question: '양육비이행관리원의 긴급지원금은 어떻게 받나요?',
        answer:
          '<strong>양육비를 받지 못하는 한부모가정을 대상으로 월 최대 20만 원을 최장 9개월간 지원합니다.</strong> 이행관리원에 양육비 이행 지원 신청 시 함께 신청할 수 있으며, 소득 기준 등 자격 요건이 있으므로 전화(1644-6621)로 먼저 확인하세요.',
      },
      {
        question: '상대방 급여를 압류해서 양육비를 받을 수 있나요?',
        answer:
          '<strong>양육비 지급 판결이나 조정이 있으면 상대방 급여의 1/2까지 압류할 수 있습니다.</strong> 일반 채권의 급여 압류 한도(1/4)보다 넓습니다. 법원에 채권압류 및 추심명령을 신청하면 회사가 급여에서 직접 양육비를 공제하여 지급합니다.',
      },
      {
        question: '이행관리원이 직접 양육비를 받아서 주는 건가요?',
        answer:
          '<strong>이행관리원이 직접 추심하여 전달하는 것이 아니라, 독촉·법적 절차를 대행해줍니다.</strong> 상대방에게 이행 촉구 통지를 보내고, 불응 시 이행명령·감치명령 등 법적 절차를 대신 신청해줍니다. 양육비는 상대방이 직접 양육자 계좌로 입금합니다.',
      },
      {
        question: '양육비 금액을 나중에 올릴 수 있나요?',
        answer:
          '<strong>사정 변경이 있으면 양육비 증액 심판을 청구할 수 있습니다.</strong> 자녀의 교육비 증가, 물가 상승, 양육자의 소득 감소, 상대방의 소득 증가 등이 사정 변경 사유가 됩니다. 기존 양육비 결정 후 최소 1~2년이 경과하면 인정될 가능성이 높습니다.',
      },
    ],
    cta: {
      text: '양육비 청구 방법 비교, AI가 분석해드립니다',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '양육비 산정 기준표와 계산 방법', href: '/guide/divorce/child-support-calculation-standard' },
      { label: '양육비 미지급 대응 방법', href: '/guide/divorce/child-support-non-payment' },
      { label: '양육권 합의 준비 체크리스트', href: '/guide/divorce/custody-agreement-prep' },
      { label: '협의이혼과 재판이혼 차이', href: '/guide/divorce/consensual-vs-trial-divorce' },
      { label: '이혼 결심 후 어디서부터 시작할까', href: '/guide/divorce/decided-divorce-where-to-begin' },
    ],
  },
];
