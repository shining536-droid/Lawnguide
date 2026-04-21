import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 29. 이 페이지는 [부동산 매수인]의 [매매계약서 특약 사항을 빠짐없이 점검해야 하는 상황]에서 [필수 특약 항목 체크리스트 확인]을 돕는 페이지다.
// 30. 이 페이지는 [마약 투약 혐의를 받고 있는 피의자]의 [수사 초기 대응이 급한 상황]에서 [단계별 수사 대응 방법 확인]을 돕는 페이지다.
// 31. 이 페이지는 [소변검사 양성 반응이 나온 피의자]의 [즉각적인 법적 대응이 필요한 상황]에서 [양성 판정 후 방어 전략 수립]을 돕는 페이지다.
// 32. 이 페이지는 [마약 관련 혐의의 차이를 알고 싶은 피의자/가족]의 [투약·소지·매매 간 처벌 수위 차이가 궁금한 상황]에서 [행위별 처벌 비교와 대응 방향 확인]을 돕는 페이지다.
// 33. 이 페이지는 [전세사기 피해가 의심되는 임차인]의 [어디에 어떻게 신고해야 할지 모르는 상황]에서 [단계별 신고 절차와 필요 서류 확인]을 돕는 페이지다.
// 34. 이 페이지는 [전세 계약 전 위험 여부를 확인하고 싶은 예비 임차인]의 [깡통전세를 사전에 걸러내야 하는 상황]에서 [등기부등본·시세 비교 등 확인 방법 숙지]를 돕는 페이지다.
// 35. 이 페이지는 [전세 만기 후 보증금을 돌려받지 못한 임차인]의 [임대인이 보증금을 반환하지 않는 상황]에서 [법적 절차와 즉시 행동 요령 확인]을 돕는 페이지다.

export const spokesBatch19_29to35: SpokePage[] = [
  {
    domain: 'drug-crime',
    slug: 'drug-use-investigation-response',
    keyword: '마약 투약 혐의 수사 대응 절차',
    questionKeyword: '마약 투약 혐의를 받으면 수사에 어떻게 대응해야 하나요?',
    ctaKeyword: '마약 수사 대응',
    type: '절차타임라인형',
    perspective: 'offender',
    meta: {
      title: '마약 투약 수사 대응 5단계 절차 정리 | 로앤가이드',
      description: '마약 투약 혐의로 경찰 연락을 받았는데 뭘 해야 할지 모르겠다면, 수사 대응 5단계를 지금 확인하세요.',
    },
    intro:
      '갑자기 경찰에서 전화가 왔습니다. 마약 투약 혐의로 출석 요구를 받았다는 내용입니다. 머릿속이 하얘지고 당장 뭘 해야 할지 감이 잡히지 않습니다. 수사 초기 대응 한 번이 이후 재판 결과까지 좌우합니다. 단계별로 무엇을 해야 하는지 차근차근 정리해보겠습니다.',
    timelineSteps: [
      '출석 요구 수령 및 변호사 선임',
      '소변·모발 검사 및 감정 결과 대기',
      '경찰 피의자 조사 대응',
      '검찰 송치 후 처분 결정',
      '기소 시 재판 준비 및 양형 자료 확보',
    ],
    sections: [
      {
        title: '1단계 — 출석 요구를 받으면 즉시 변호사를 선임하세요',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리에관한법률에 따라 향정신성의약품 투약은 1년 이상의 유기징역에 처합니다</strong></p>\n<p>경찰 출석 요구서를 받으면 <strong>출석일 전에 마약 전문 변호사를 선임</strong>하는 것이 가장 중요합니다. 초기 조사에서의 진술이 이후 재판까지 증거로 사용되기 때문에 변호인 조력 없이 혼자 대응하면 불리한 진술을 남길 위험이 큽니다.</p>\n<p>변호사 선임 후에는 <strong>사건 경위를 정리</strong>하고, 진술 범위와 묵비권 행사 여부를 사전에 협의하세요. 출석 전까지 관련 증거(통화기록, 지인 진술 등)를 미리 확보해두면 방어에 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 출석 전 변호사 선임 → 진술 범위 사전 협의 → 관련 증거 확보</blockquote>',
      },
      {
        title: '2단계 — 소변·모발 검사에 성실히 응하되 결과를 꼼꼼히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">소변검사 양성이 나와도 확인검사(정밀검사)에서 뒤집히는 경우가 있습니다</strong></p>\n<p>수사기관은 <strong>소변검사(간이시약검사)와 모발검사</strong>를 실시합니다. 간이검사 양성만으로 유죄가 확정되는 것이 아닙니다. 국립과학수사연구원의 정밀 감정 결과가 나와야 증거력이 인정됩니다.</p>\n<p>검사를 거부하면 <strong>영장을 통한 강제 채취</strong>가 진행되므로 오히려 불리하게 작용합니다. 검사에 응하되, 감정 결과서를 반드시 확인하고 검출 물질의 종류와 농도를 변호사와 함께 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 간이검사 ≠ 최종 결과 → 정밀 감정 결과 확인 → 물질·농도 분석</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=drug-crime" style="color:#1565c0;font-weight:600">내 마약 사건 수사 대응 전략 AI로 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 경찰 조사에서 진술 전략을 수립하세요',
        content:
          '<p><strong style="color:#1e3a5f">피의자 조사 시 묵비권(헌법 제12조 제2항)을 행사할 수 있으며, 진술은 신중하게 해야 합니다</strong></p>\n<p>피의자 조사에서 가장 흔한 실수는 <strong>"한 번만 했다" "지인이 줬다"</strong>처럼 범행 자체를 인정하는 진술을 먼저 하는 것입니다. 변호사와 사전에 합의한 진술 범위 내에서만 답변하세요. 모르는 것은 "기억나지 않습니다"로 답해도 됩니다.</p>\n<p>조사 후 <strong>피의자신문조서</strong>에 서명하기 전, 내용을 반드시 꼼꼼히 읽고 잘못된 부분은 정정을 요구하세요. 조서에 서명한 뒤에는 번복이 매우 어렵습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사전 협의 범위만 진술 → 조서 내용 확인 후 서명 → 변호인 입회 요청</blockquote>',
      },
      {
        title: '4~5단계 — 검찰 송치 후 양형 자료를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">초범이면 집행유예 가능성이 있으므로 반성문, 치료 이력 등 양형 자료가 매우 중요합니다</strong></p>\n<p>경찰 수사가 종결되면 사건이 <strong>검찰로 송치</strong>됩니다. 검찰에서는 기소 여부를 결정하는데, 이때 제출할 <strong>양형 자료</strong>가 결과를 좌우합니다. 반성문, 마약 중독 치료 프로그램 이수 확인서, 가족 탄원서, 재직증명서 등을 준비하세요.</p>\n<p>기소된 경우 재판 단계에서도 <strong>치료보호 신청</strong>이 가능합니다. 마약류관리법상 치료보호를 받으면 형의 감경 또는 집행유예를 받을 가능성이 높아집니다. 변호사와 함께 양형 전략을 수립하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 반성문 + 치료 이수증 + 가족 탄원서 + 재직증명서 + 사회봉사 확인서</blockquote>',
      },
    ],
    cases: [
      {
        title: '마약류 물품 인식과 범죄 고의 성립을 판시한 사례',
        summary:
          '대법원 2025도9446 사건(2025.10.30 선고)에서 법원은 물품 내부에 마약류가 들어있는 것으로 인식하고 그 물품을 양도·양수 또는 소지한 경우에도 마약거래방지법 제9조 제2항 위반에 해당한다고 판시했습니다.',
        takeaway:
          '"몰랐다"는 변명이 통하지 않을 수 있습니다. 마약류가 포함된 물품을 인식하고 취급한 사실이 있다면 범죄 고의가 인정되므로, 초기 수사 단계부터 정확한 사실관계를 변호사와 함께 정리하세요.',
      },
    ],
    faq: [
      {
        question: '경찰 출석 요구를 무시하면 어떻게 되나요?',
        answer:
          '정당한 사유 없이 출석 요구에 불응하면 <strong>체포영장이 발부</strong>될 수 있습니다. 마약 사건은 증거인멸 우려가 높다고 판단되어 구속 수사로 전환될 가능성도 커지므로, 출석 요구에 성실히 응하는 것이 유리합니다.',
      },
      {
        question: '마약 투약 초범이면 집행유예가 가능한가요?',
        answer:
          '초범이고 투약량이 소량이며 <strong>치료 의지를 적극적으로 보여준 경우</strong> 집행유예를 받는 사례가 많습니다. 다만 유통이나 상습 투약이 함께 인정되면 실형 가능성이 높아집니다.',
      },
      {
        question: '변호사 없이 조사를 받아도 되나요?',
        answer:
          '법적으로는 가능하지만 <strong>매우 불리합니다</strong>. 수사관의 질문에 무방비 상태로 답하면 의도치 않게 불리한 진술을 남길 수 있고, 이후 재판에서 번복이 극히 어렵습니다. 반드시 변호인 입회하에 조사를 받으세요.',
      },
      {
        question: '소변검사를 거부할 수 있나요?',
        answer:
          '거부할 수 있지만, 수사기관이 <strong>감정처분허가장(영장)을 발부받아 강제 채취</strong>할 수 있습니다. 거부 사실 자체가 수사에 비협조적이라는 인상을 줄 수 있으므로, 검사에 응하되 결과를 면밀히 검증하는 전략이 낫습니다.',
      },
      {
        question: '마약 투약 혐의로 구속되는 기준은 무엇인가요?',
        answer:
          '<strong>증거인멸 우려, 도주 우려, 범죄의 중대성</strong>이 주요 기준입니다. 초범이고 주거가 일정하며 직장이 있는 경우 불구속 수사가 원칙이지만, 조직적 유통에 연루되었거나 상습성이 인정되면 구속될 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 마약 투약 혐의, AI로 수사 대응 전략 세우기',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 범죄 진단', href: '/diagnosis/drug-crime' },
      { label: '마약 소변검사 양성 대응법', href: '/guide/drug-crime/positive-urine-test-response' },
      { label: '마약 투약 vs 소지 vs 매매 처벌 비교', href: '/guide/drug-crime/use-vs-possession-vs-dealing-penalty' },
      { label: '마약 초범 양형 기준 정리', href: '/guide/drug-crime/drug-crime-first-offense-sentencing' },
    ],
  },
  {
    domain: 'drug-crime',
    slug: 'positive-urine-test-response',
    keyword: '마약 소변검사 양성 시 대응',
    questionKeyword: '마약 소변검사에서 양성이 나왔는데 어떻게 해야 하나요?',
    ctaKeyword: '소변검사 양성 대응',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '마약 소변검사 양성 반응 시 대응법 4가지 | 로앤가이드',
      description: '소변검사에서 마약 양성 반응이 나왔는데 억울하거나 당황스럽다면, 지금 해야 할 4가지 대응법을 지금 확인하세요.',
    },
    intro:
      '소변검사 결과지를 받아들었습니다. "양성"이라는 두 글자가 눈에 들어옵니다. 실제로 투약한 적이 있든 없든, 양성 반응이 나온 순간부터 수사는 시작됩니다. 하지만 간이검사 양성이 곧바로 유죄를 의미하지는 않습니다. 지금부터 어떻게 대응하느냐에 따라 결과가 완전히 달라질 수 있습니다.',
    sections: [
      {
        title: '첫째, 간이검사와 정밀검사의 차이를 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">간이시약검사(면역측정법)는 위양성(false positive) 가능성이 있어 정밀 감정이 필수입니다</strong></p>\n<p>경찰이 현장에서 실시하는 소변 간이검사는 <strong>선별검사(스크리닝)</strong>에 불과합니다. 일부 의약품(감기약, 진통제, 수면제 등)을 복용해도 양성 반응이 나올 수 있습니다. 간이검사 양성 후에는 반드시 <strong>국립과학수사연구원의 정밀 감정</strong>(기체크로마토그래피-질량분석법)을 거칩니다.</p>\n<p>정밀 감정에서 음성이 확인되면 혐의가 해소됩니다. 양성이 나오더라도 <strong>검출 물질의 종류와 농도</strong>에 따라 법적 판단이 달라지므로, 감정 결과서를 반드시 확보하여 변호사와 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 간이검사 양성 ≠ 유죄 → 정밀감정 결과 대기 → 검출 물질·농도 확인</blockquote>',
      },
      {
        title: '둘째, 처방약 복용 이력이 있다면 즉시 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">의사 처방에 의한 정당한 의약품 복용은 마약류관리법 위반이 아닙니다</strong></p>\n<p>처방전이 있는 <strong>수면제(졸피뎀), 진통제(트라마돌), ADHD 치료제(메틸페니데이트)</strong> 등은 양성 반응의 원인이 될 수 있습니다. 처방 기록, 약국 조제 확인서, 진료 기록부를 신속히 확보하세요.</p>\n<p>처방약 복용 사실을 수사관에게 조기에 알리되, <strong>구체적인 진술은 변호사 선임 후</strong> 진행하는 것이 안전합니다. 처방 이력이 정밀 감정 해석에 중요한 참고 자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: 처방전 + 약국 조제 확인서 + 진료 기록부 + 건강보험 투약 이력</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=drug-crime" style="color:#1565c0;font-weight:600">소변검사 양성, 내 상황에 맞는 대응 전략 AI로 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 진술 전략을 수립하고 변호사 입회하에 조사를 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">수사 초기 진술이 전체 사건의 방향을 결정하므로 신중하게 접근해야 합니다</strong></p>\n<p>양성 반응이 나온 뒤 가장 흔한 실수는 <strong>"인정합니다" 또는 "기억나지 않습니다"를 반복</strong>하는 것입니다. 어떤 진술이든 변호사와 사전에 협의한 범위 내에서만 하세요. 묵비권 행사도 헌법상 보장된 권리입니다.</p>\n<p>특히 투약 시기, 장소, 입수 경위에 대한 질문에 대해 <strong>일관성 없는 답변</strong>을 하면 이후 재판에서 신빙성이 크게 떨어집니다. 사실관계를 정리한 뒤 명확한 진술 전략을 세우세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 변호사 선임 → 사실관계 정리 → 진술 범위 확정 → 조사 시 변호인 입회</blockquote>',
      },
      {
        title: '넷째, 치료 프로그램 참여로 양형에 유리한 자료를 만드세요',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리법 제40조에 따른 치료보호는 형의 감경에 중요한 자료가 됩니다</strong></p>\n<p>수사가 진행되는 동안 <strong>자발적으로 마약 중독 치료 프로그램</strong>에 참여하세요. 한국마약퇴치운동본부, 정신건강복지센터, 병원 중독 클리닉 등에서 상담 및 치료를 받을 수 있습니다.</p>\n<p>치료 이수 확인서, 상담 기록, 약물검사 음성 확인서 등은 <strong>재판 시 양형 참고 자료</strong>로 제출됩니다. 초범이면서 치료 의지를 보여준 경우 집행유예를 받는 사례가 많으므로, 수사 초기부터 치료 이력을 쌓아두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 치료 프로그램 등록 → 상담 기록 확보 → 이수 확인서 발급 → 양형 자료 제출</blockquote>',
      },
    ],
    cases: [
      {
        title: '마약류 미수범 처벌 범위에 관한 판례',
        summary:
          '대법원 2025도11062 사건(2025.09.11 선고)에서 법원은 구 마약류관리법 제59조 제1항 제5호(향정신성의약품 사용)에 대해 같은 조 제3항이 미수범 처벌 대상에서 제외하고 있으므로, 해당 행위가 미수에 그친 경우 미수범으로 처벌할 수 없다고 판시했습니다.',
        takeaway:
          '마약 사용 행위가 실제로 완성되었는지, 미수에 그쳤는지에 따라 처벌 여부가 달라질 수 있습니다. 소변검사 양성이라도 구체적인 사실관계에 따라 방어 전략이 다르므로 변호사와 면밀히 검토하세요.',
      },
    ],
    faq: [
      {
        question: '간이검사 양성인데 정밀검사에서 음성이 나올 수 있나요?',
        answer:
          '네, 가능합니다. 간이검사(면역측정법)는 <strong>특이도가 정밀검사보다 낮아</strong> 위양성이 나올 수 있습니다. 감기약(에페드린 성분), 일부 진통제, 수면제 등이 교차반응을 일으키는 것으로 알려져 있습니다.',
      },
      {
        question: '소변검사 양성만으로 기소되나요?',
        answer:
          '간이검사만으로는 기소할 수 없습니다. <strong>국과수 정밀 감정 결과</strong>가 나와야 증거력이 인정되며, 그 외에도 투약 시기·장소·입수 경위 등 보강증거가 필요합니다.',
      },
      {
        question: '양성 반응 후 자수하면 형이 감경되나요?',
        answer:
          '형법 제52조에 따라 <strong>자수한 경우 형을 감경할 수 있습니다</strong>. 다만 이미 수사기관에 인지된 후에는 자수가 아닌 자백에 해당하여 감경 폭이 작아질 수 있습니다. 수사 진행 상황을 변호사와 확인한 뒤 판단하세요.',
      },
      {
        question: '소변검사 양성인데 모발검사는 음성일 수 있나요?',
        answer:
          '가능합니다. <strong>소변은 투약 후 2~5일 이내</strong>의 단기 검출에 강하고, 모발은 수 개월간의 약물 이력을 보여줍니다. 일회성 소량 투약의 경우 모발에서 검출되지 않을 수 있으며, 이는 방어에 유리한 자료가 됩니다.',
      },
    ],
    cta: {
      text: '💬 소변검사 양성, AI로 맞춤 대응 전략 확인하기',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 범죄 진단', href: '/diagnosis/drug-crime' },
      { label: '마약 투약 수사 대응 절차', href: '/guide/drug-crime/drug-use-investigation-response' },
      { label: '마약 초범 양형 기준 정리', href: '/guide/drug-crime/drug-crime-first-offense-sentencing' },
      { label: '마약 모발검사 양성 방어 전략', href: '/guide/drug-crime/drug-crime-hair-test-positive-defense' },
    ],
  },
  {
    domain: 'drug-crime',
    slug: 'use-vs-possession-vs-dealing-penalty',
    keyword: '마약 투약 vs 소지 vs 매매 처벌 비교',
    questionKeyword: '마약 투약, 소지, 매매는 처벌이 어떻게 다른가요?',
    ctaKeyword: '마약 처벌 비교',
    type: '비교형',
    meta: {
      title: '마약 투약·소지·매매 처벌 3단계 비교표 | 로앤가이드',
      description: '마약 관련 혐의를 받고 있는데 투약과 소지, 매매 처벌 차이가 궁금하다면, 행위별 처벌 비교표를 지금 확인하세요.',
    },
    intro:
      '"투약만 했는데 매매범이랑 똑같이 처벌받나요?" 마약 사건에서 가장 많이 받는 질문입니다. 마약류관리법은 투약, 소지, 매매를 각각 별도의 구성요건으로 규정하고 있으며, 처벌 수위도 크게 다릅니다. 혐의를 받고 있다면, 자신의 행위가 어떤 유형에 해당하는지 정확히 파악하는 것이 대응의 첫걸음입니다.',
    sections: [
      {
        title: '투약 — 1년 이상 유기징역이 기본형입니다',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리법 제59조 제1항 제5호에 따라 향정신성의약품 투약(사용)은 1년 이상의 유기징역에 처합니다</strong></p>\n<p>투약은 마약류를 <strong>자기 신체에 섭취·주사·흡입</strong>하는 행위를 말합니다. 양이 극소량이어도 투약 자체가 범죄로 성립됩니다. 초범이고 소량 투약이면 집행유예가 나오는 경우가 많지만, 2회 이상 적발되면 실형 가능성이 급격히 높아집니다.</p>\n<p>투약 혐의에서 핵심 쟁점은 <strong>투약 시기와 인식 여부</strong>입니다. 소변·모발 검사 결과만으로 유죄가 확정되는 것이 아니며, 투약의 고의성을 입증해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">투약: 1년 이상 유기징역 | 초범 집행유예 가능 | 핵심 = 투약 시기·고의 입증</blockquote>',
      },
      {
        title: '소지 — 투약보다 무거운 처벌을 받을 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리법 제59조 제1항 제5호에 따라 향정신성의약품 소지도 1년 이상의 유기징역에 처하며, 소지량에 따라 가중됩니다</strong></p>\n<p>소지는 마약류를 <strong>자신의 지배 아래 두는 행위</strong>를 말합니다. 직접 몸에 갖고 있지 않더라도 집, 차량, 사물함 등에 보관하면 소지에 해당합니다. 소지량이 일정량을 초과하면 <strong>"영리 목적"</strong>이 추정되어 매매와 동일한 수준의 처벌을 받을 수 있습니다.</p>\n<p>소지 혐의에서는 <strong>소지의 인식과 자발성</strong>이 핵심 쟁점입니다. 타인이 맡긴 물건 속에 마약류가 있었던 경우 등 소지의 고의가 없었다면 방어가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소지: 1년 이상 유기징역 | 대량 소지 시 영리목적 추정 | 핵심 = 인식·자발성</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=drug-crime" style="color:#1565c0;font-weight:600">내 마약 혐의 유형별 처벌 수위 AI로 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '매매(수수·매도·매수) — 가장 무거운 처벌을 받습니다',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리법 제58조 제1항에 따라 향정신성의약품 매매는 1년 이상의 유기징역, 특가법 적용 시 무기징역까지 가능합니다</strong></p>\n<p>매매는 마약류를 <strong>유상으로 양도·양수하는 행위</strong>를 말합니다. 돈을 받지 않아도 무상으로 건네주는 행위(제공)도 처벌 대상입니다. 영리 목적이 인정되거나 조직적 유통에 관여한 경우 <strong>특정범죄가중처벌법</strong>이 적용되어 5년 이상의 유기징역 또는 무기징역까지 가능합니다.</p>\n<p>매매 혐의에서는 <strong>거래 규모, 상습성, 조직 연루 여부</strong>가 양형의 핵심 요소입니다. 단순히 지인에게 한 번 건넨 경우와 불특정 다수에게 반복 판매한 경우는 처벌 수위가 극단적으로 다릅니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매매: 1년~무기징역 | 특가법 적용 가능 | 핵심 = 영리 목적·조직 연루·거래 규모</blockquote>',
      },
    ],
    comparison: {
      title: '마약 행위 유형별 처벌 비교표',
      headers: ['항목', '투약(사용)', '소지', '매매(수수·양도)'],
      rows: [
        { label: '기본형', values: ['1년 이상 유기징역', '1년 이상 유기징역', '1년 이상 유기징역'] },
        { label: '특가법 적용', values: ['해당 없음', '대량 시 가중', '5년 이상~무기징역'] },
        { label: '초범 집행유예', values: ['가능성 높음', '소량 시 가능', '단순 1회 시 제한적'] },
        { label: '핵심 쟁점', values: ['투약 시기·고의', '인식·자발성', '영리 목적·조직성'] },
        { label: '증거 유형', values: ['소변·모발검사', '압수물', '통화·계좌·CCTV'] },
        { label: '미수범 처벌', values: ['불가 (제외)', '가능', '가능'] },
      ],
    },
    cases: [
      {
        title: '보호관찰 대상자 심문 절차와 수사 관할 한계를 판시한 사례',
        summary:
          '대법원 2025도11546 사건(2025.12.11 선고)에서 법원은 보호관찰관의 준수사항 위반 심문은 행정절차에 해당하며, 특별사법경찰관리로 지명된 경우에만 피부착자의 범죄에 관하여 수사 권한이 있다고 판시했습니다.',
        takeaway:
          '수사기관이 아닌 보호관찰관의 심문 결과는 수사기관 작성 조서와 동일한 증거능력이 인정되지 않습니다. 마약 사건에서 증거의 적법성을 다투려면 조서 작성 주체와 절차를 면밀히 검토하세요.',
      },
    ],
    faq: [
      {
        question: '투약과 소지 혐의를 동시에 받으면 어떻게 되나요?',
        answer:
          '투약과 소지가 동시에 적발되면 <strong>경합범으로 처리</strong>됩니다. 각각의 형량이 산정된 뒤 가장 무거운 형의 1.5배 이내에서 선고됩니다. 투약만 했을 때보다 형량이 높아지므로 소지 혐의에 대한 방어도 함께 준비해야 합니다.',
      },
      {
        question: '지인에게 무상으로 마약을 건넨 것도 매매인가요?',
        answer:
          '돈을 받지 않았어도 <strong>"수수" 또는 "제공"에 해당</strong>하여 매매와 동일한 법조항으로 처벌됩니다. 무상 양도라도 마약류관리법상 양도 행위 자체가 금지되어 있으므로 처벌을 피할 수 없습니다.',
      },
      {
        question: '마약 종류에 따라 처벌이 달라지나요?',
        answer:
          '네, <strong>대마·향정신성의약품·마약(헤로인 등)</strong> 순서로 처벌이 무거워집니다. 같은 투약이라도 대마는 5년 이하 징역, 향정(필로폰 등)은 1년 이상 유기징역, 마약(헤로인)은 더 가중됩니다.',
      },
      {
        question: '소지량이 적으면 처벌이 가벼워지나요?',
        answer:
          '소지량이 <strong>극소량(자가 사용 목적 명백)</strong>인 경우 양형에서 참작 사유가 됩니다. 하지만 법정형 자체가 달라지는 것은 아니며, 일정량을 초과하면 영리 목적이 추정되어 특가법이 적용될 수 있습니다.',
      },
      {
        question: '매매 혐의에서 "몰랐다"는 항변이 통하나요?',
        answer:
          '물건 내부에 마약류가 있다는 것을 인식하고 취급했다면 <strong>고의가 인정</strong>됩니다. 대법원 2025도9446 판례에서도 물품 내부에 마약류가 있는 것으로 인식한 경우 범죄 성립이 인정되었으므로, 단순한 "몰랐다" 주장만으로는 방어가 어렵습니다.',
      },
    ],
    cta: {
      text: '💬 마약 혐의 유형별 처벌 수위, AI로 확인하기',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 범죄 진단', href: '/diagnosis/drug-crime' },
      { label: '마약 투약 수사 대응 절차', href: '/guide/drug-crime/drug-use-investigation-response' },
      { label: '마약 소변검사 양성 대응법', href: '/guide/drug-crime/positive-urine-test-response' },
      { label: '마약 자수 시 감경 기준', href: '/guide/drug-crime/drug-self-report-reduction' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-report-procedure',
    keyword: '전세사기 신고 절차 총정리',
    questionKeyword: '전세사기를 당했는데 어디에 어떻게 신고해야 하나요?',
    ctaKeyword: '전세사기 신고 절차',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '전세사기 신고 절차 5단계 완벽 정리 | 로앤가이드',
      description: '전세사기를 당한 것 같은데 어디에 신고해야 할지 모르겠다면, 피해 신고 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '계약 만기가 다가오는데 임대인이 연락이 되지 않습니다. 등기부등본을 확인해보니 근저당이 가득 잡혀 있고, 보증금보다 빚이 더 많습니다. "이게 전세사기인가?" 하는 생각이 드는 순간, 어디에 뭘 신고해야 하는지 전혀 모르겠습니다. 지금부터 한 단계씩 정리해보겠습니다.',
    timelineSteps: [
      '증거 자료 수집 및 현황 파악',
      '경찰서에 사기 피해 신고(고소장 접수)',
      '전세사기피해자 지원위원회에 피해자 인정 신청',
      '주택도시보증공사(HUG) 보증금 반환보증 확인',
      '법률구조공단 무료 법률지원 신청',
    ],
    sections: [
      {
        title: '1단계 — 증거 자료를 수집하고 피해 현황을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">전세사기피해자법 제2조에 따른 피해자 인정을 받으려면 객관적 증거가 필수입니다</strong></p>\n<p>가장 먼저 <strong>등기부등본, 임대차계약서, 전입세대확인서, 확정일자 증명</strong>을 확보하세요. 등기부등본에서 근저당권 설정 금액과 설정일자, 가압류·압류 여부를 확인합니다. 보증금 + 선순위 채권 합계가 주택 시세를 초과하면 깡통전세에 해당합니다.</p>\n<p>임대인과의 <strong>카카오톡 대화, 문자, 통화 녹음</strong> 등 의사소통 기록도 모두 캡처해두세요. 임대인이 연락을 회피하거나 잠적한 정황을 보여주는 증거가 사기 혐의 입증에 핵심적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 증거: 등기부등본 + 계약서 + 전입세대확인서 + 임대인 연락 회피 증거</blockquote>',
      },
      {
        title: '2단계 — 경찰서에 사기 피해 고소장을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제347조 사기죄는 10년 이하의 징역 또는 2천만원 이하의 벌금에 해당합니다</strong></p>\n<p>관할 경찰서 민원실이나 사이버경찰청에 <strong>고소장을 접수</strong>합니다. 고소장에는 ①피해 경위 ②임대인의 기망 행위(보증금 반환 능력이 없음을 알면서 계약) ③피해 금액 ④증거 목록을 포함하세요.</p>\n<p>경찰 수사와 별도로 <strong>민사 소송(보증금 반환 청구)</strong>을 동시에 진행하는 것이 효과적입니다. 형사 고소는 임대인에게 압박 수단이 되고, 민사 소송은 실질적인 보증금 회수 경로가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">고소장: 피해 경위 + 기망 행위 특정 + 피해 금액 + 증거 목록 첨부</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=jeonse-fraud" style="color:#1565c0;font-weight:600">전세사기 피해 여부 AI로 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 전세사기피해자 지원위원회에 피해자 인정을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">전세사기피해자법에 따른 피해자로 인정되면 긴급 주거지원, 보증금 우선변제 등의 혜택을 받을 수 있습니다</strong></p>\n<p><strong>국토교통부 전세사기피해자 지원위원회</strong>에 피해자 인정 신청서를 제출합니다. 신청서와 함께 임대차계약서, 등기부등본, 전입세대확인서, 확정일자 증명, 경찰 접수증 등을 첨부해야 합니다. 신청 및 지원 유효기간은 2027년 5월 31일까지입니다.</p>\n<p>피해자로 인정되면 <strong>경매·공매 시 보증금 우선변제권</strong>, 긴급 주거지원(LH 임대주택), 전세보증금 반환보증 보험 혜택 등을 받을 수 있습니다. 같은 건물의 여러 피해자가 함께 신청하면 처리가 빨라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청: 국토부 지원위원회 → 필요 서류 제출 → 피해자 인정 → 지원 혜택 신청</blockquote>',
      },
      {
        title: '4~5단계 — 보증보험 확인과 무료 법률지원을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">주택도시보증공사(HUG) 전세보증금 반환보증에 가입되어 있다면 보증금을 돌려받을 수 있습니다</strong></p>\n<p>HUG 전세보증금 반환보증에 가입되어 있는지 확인하세요. 가입되어 있다면 임대인이 보증금을 반환하지 않을 때 <strong>HUG가 대신 지급</strong>하고 임대인에게 구상권을 행사합니다. HUG 홈페이지 또는 고객센터(1566-9009)에서 가입 여부를 조회할 수 있습니다.</p>\n<p>법률 지원이 필요하면 <strong>대한법률구조공단(132)</strong>에 무료 법률상담을 신청하세요. 전세사기 피해자로 인정되면 소송 비용 지원까지 받을 수 있습니다. 무정지 6개월 및 과태료 250만원이 부과된 불법 중개업자 사례도 있으므로, 중개사 책임도 함께 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: HUG 보증보험 가입 여부 → 법률구조공단 상담 → 소송비 지원 신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '전세사기 피해 구제와 법적 보호에 관한 법률 근거',
        summary:
          '전세사기피해자 지원 및 주거안정에 관한 특별법 제2조에 따르면, 임대차계약상 보증금과 선순위 채권 가액의 합계가 주택의 매각대금을 초과하는 상태(깡통전세)에서 보증금을 돌려받지 못한 임차인은 피해자로 인정받을 수 있습니다.',
        takeaway:
          '전세사기피해자법은 피해자 인정을 받은 임차인에게 경매 시 우선변제권, 긴급 주거지원, 법률비용 지원 등을 제공합니다. 피해가 의심되면 지체 없이 피해자 인정 신청을 진행하세요.',
      },
    ],
    faq: [
      {
        question: '전세사기와 단순 보증금 미반환은 어떻게 다른가요?',
        answer:
          '전세사기는 임대인이 <strong>처음부터 보증금을 반환할 의사나 능력이 없으면서</strong> 임차인을 속여 계약한 경우입니다. 단순 미반환은 임대인의 자금 사정 악화 등으로 반환이 지연되는 경우로, 형사 사기죄 성립 여부가 다릅니다.',
      },
      {
        question: '경찰 고소와 피해자 인정 신청을 동시에 할 수 있나요?',
        answer:
          '네, <strong>동시 진행이 가능하고 오히려 권장</strong>됩니다. 경찰 수사 결과는 피해자 인정 심사에 참고 자료가 되므로, 고소장 접수 후 접수 확인서를 피해자 인정 신청 시 함께 제출하면 유리합니다.',
      },
      {
        question: '전세보증금 반환보증(HUG)에 가입하지 않았으면 어떻게 하나요?',
        answer:
          'HUG 보증에 가입하지 않았더라도 <strong>민사 소송(보증금 반환 청구소송)</strong>과 임차권등기명령을 통해 보증금을 회수할 수 있습니다. 피해자 인정을 받으면 경매 시 우선변제권도 확보할 수 있습니다.',
      },
      {
        question: '신고 후 얼마나 걸려야 보증금을 돌려받나요?',
        answer:
          '경로에 따라 다릅니다. <strong>HUG 보증보험</strong>은 보증사고 확인 후 1~3개월, <strong>민사 소송</strong>은 6개월~1년, <strong>경매 배당</strong>은 1~2년이 일반적입니다. 여러 경로를 동시에 진행하는 것이 가장 빠릅니다.',
      },
      {
        question: '같은 건물 피해자들이 함께 신고하면 유리한가요?',
        answer:
          '네, <strong>공동 신고가 매우 유리합니다</strong>. 같은 임대인의 조직적 사기 패턴을 입증하기 쉽고, 전세사기피해자법상 피해자 인정도 빨라집니다. 피해자 모임을 구성하여 공동 고소장을 제출하고 변호사를 공동 선임하면 비용도 절감됩니다.',
      },
    ],
    cta: {
      text: '💬 전세사기 피해 여부, AI로 빠르게 진단받기',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '깡통전세 확인하는 방법', href: '/guide/jeonse-fraud/empty-jeonse-verification-method' },
      { label: '전세보증금 못 돌려받을 때 대처법', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'empty-jeonse-verification-method',
    keyword: '깡통전세 확인하는 방법',
    questionKeyword: '깡통전세인지 어떻게 확인할 수 있나요?',
    ctaKeyword: '깡통전세 확인',
    type: '상황형',
    meta: {
      title: '깡통전세 확인하는 3가지 핵심 방법 | 로앤가이드',
      description: '계약하려는 전세가 깡통전세인지 불안하다면, 등기부등본·시세 확인 등 3가지 핵심 점검법을 지금 확인하세요.',
    },
    intro:
      '전세 계약을 앞두고 있습니다. 보증금 1억 5천만 원, 적지 않은 금액입니다. "혹시 이 집이 깡통전세는 아닐까?" 걱정이 됩니다. 깡통전세란 보증금과 선순위 채권의 합계가 주택 가격을 초과하는 상태를 말합니다. 계약 전에 확인하지 않으면 보증금을 한 푼도 돌려받지 못할 수 있습니다.',
    sections: [
      {
        title: '첫째, 등기부등본에서 근저당권과 선순위 채권을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">인터넷등기소(www.iros.go.kr)에서 등기부등본을 열람하면 근저당 설정 현황을 즉시 확인할 수 있습니다</strong></p>\n<p>등기부등본 을구(乙區)에서 <strong>근저당권 설정 금액, 설정일, 채권자</strong>를 확인하세요. 근저당 설정 금액은 실제 대출금의 120~130%로 설정되므로, 근저당 금액 / 1.2 ≒ 실제 대출 추정액입니다. 여기에 내 보증금을 더한 금액이 주택 시세를 초과하면 깡통전세입니다.</p>\n<p><strong>가압류, 압류, 가처분</strong>이 있는지도 반드시 확인하세요. 세금 체납에 의한 압류는 국세기본법 제35조에 따라 다른 채권보다 우선 징수되므로, 임차인의 보증금 회수가 더 어려워집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 을구 근저당 금액 + 가압류/압류 여부 + 실제 대출 추정액 계산</blockquote>',
      },
      {
        title: '둘째, 주택 시세와 보증금 비율을 꼼꼼히 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">보증금이 주택 매매가의 70%를 초과하면 위험 신호입니다</strong></p>\n<p>국토교통부 실거래가 공개시스템(rt.molit.go.kr)이나 KB부동산, 네이버 부동산에서 <strong>해당 주택의 최근 매매 실거래가</strong>를 확인하세요. 보증금 + 근저당 추정 대출액의 합계가 매매가의 80%를 넘으면 깡통전세 위험이 높습니다.</p>\n<p>특히 <strong>빌라·다세대주택</strong>은 아파트에 비해 시세 파악이 어렵고 감정가와 실거래가 차이가 클 수 있습니다. 주변 유사 매물 3건 이상의 매매가를 비교하고, 감정평가사의 감정을 받는 것도 고려하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비교: (보증금 + 선순위 대출) ÷ 매매 시세 = 80% 이하면 안전</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=jeonse-fraud" style="color:#1565c0;font-weight:600">내 전세 계약 위험도 AI로 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 임대인의 세금 체납 여부와 신탁 등기를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">국세기본법 제35조에 따라 미납 국세는 임차인의 보증금보다 우선 징수될 수 있습니다</strong></p>\n<p>2023년 4월부터 임대인의 동의 없이도 <strong>국세·지방세 체납 정보를 열람</strong>할 수 있게 되었습니다(주택임대차보호법 개정). 관할 세무서에 "임대인 미납국세 열람"을 신청하세요. 체납이 있으면 깡통전세 위험이 급격히 높아집니다.</p>\n<p>또한 등기부등본에 <strong>"신탁"이라는 표시</strong>가 있으면 특히 주의하세요. 신탁법 제2조에 따라 신탁된 부동산은 수탁자(신탁회사)의 동의 없이 체결한 임대차계약이 무효가 될 수 있습니다. 신탁 여부를 확인하고, 신탁회사의 동의서를 반드시 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 확인: 미납 국세 열람 + 신탁 등기 여부 + 신탁회사 동의서 확보</blockquote>',
      },
    ],
    cases: [
      {
        title: '깡통전세 피해와 선순위 채권에 관한 법률 근거',
        summary:
          '전세사기피해자 지원 및 주거안정에 관한 특별법에 따르면, "깡통전세"란 임대차계약상 보증금과 선순위 근저당권, 선순위 조세채권 등 선순위 채권의 가액을 합한 금액이 임차주택의 매매가격 또는 경·공매에 따른 매각대금을 초과하는 상태를 말합니다.',
        takeaway:
          '계약 전에 등기부등본 확인, 시세 비교, 체납 정보 열람을 모두 완료해야 깡통전세 피해를 예방할 수 있습니다. 한 가지라도 빠뜨리면 수천만 원의 보증금이 위험에 노출됩니다.',
      },
    ],
    faq: [
      {
        question: '등기부등본은 어디서 발급받나요?',
        answer:
          '<strong>인터넷등기소(www.iros.go.kr)</strong>에서 24시간 열람·발급이 가능합니다. 열람은 700원, 발급은 1,000원이며 주소만 알면 누구나 확인할 수 있습니다. 계약 당일에도 반드시 최신 등기부등본을 재확인하세요.',
      },
      {
        question: '근저당 설정 금액이 곧 실제 대출금인가요?',
        answer:
          '아닙니다. 근저당 설정 금액은 보통 <strong>실제 대출금의 120~130%</strong>입니다. 예를 들어 근저당 1억 3천만 원이면 실제 대출은 약 1억 원으로 추정합니다. 정확한 대출 잔액은 임대인에게 확인을 요청해야 합니다.',
      },
      {
        question: '보증금이 시세의 몇 퍼센트까지가 안전한가요?',
        answer:
          '일반적으로 <strong>(보증금 + 선순위 채권) 합계가 매매 시세의 70% 이하</strong>이면 비교적 안전합니다. 80%를 초과하면 위험 구간, 100%를 초과하면 깡통전세로 분류됩니다.',
      },
      {
        question: '임대인의 세금 체납 정보를 임차인이 볼 수 있나요?',
        answer:
          '2023년 4월부터 <strong>임대인의 동의 없이도 미납 국세를 열람</strong>할 수 있게 되었습니다. 관할 세무서에 임대차계약서를 지참하고 방문하면 열람이 가능합니다.',
      },
      {
        question: '전세보증금 반환보증(HUG)에 가입하면 안전한가요?',
        answer:
          'HUG 전세보증금 반환보증에 가입하면 임대인이 보증금을 반환하지 않을 때 <strong>HUG가 대신 지급</strong>해줍니다. 다만 가입 조건이 있으므로(보증금 한도, 주택 시세 대비 비율 등) 사전에 가입 가능 여부를 확인하세요.',
      },
    ],
    cta: {
      text: '💬 내 전세가 깡통전세인지 AI로 진단받기',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 신고 절차 총정리', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세보증금 못 돌려받을 때 대처법', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-deposit-not-returned-response',
    keyword: '전세보증금 못 돌려받을 때 대처법',
    questionKeyword: '전세보증금을 못 돌려받으면 어떻게 해야 하나요?',
    ctaKeyword: '전세보증금 미반환 대처',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전세보증금 미반환 시 즉시 대처법 4단계 | 로앤가이드',
      description: '전세 만기인데 집주인이 보증금을 안 돌려주어 막막하다면, 즉시 해야 할 법적 조치 4단계를 지금 확인하세요.',
    },
    intro:
      '전세 계약 만기일이 지났습니다. 보증금 반환을 요청했지만 임대인은 "조금만 기다려달라"는 말만 반복합니다. 이사할 집을 구해야 하는데 보증금이 묶여 있어 꼼짝할 수 없습니다. 임대인이 자발적으로 돌려주길 기다리면 상황은 더 악화됩니다. 지금 바로 법적 절차를 시작하세요.',
    sections: [
      {
        title: '첫째, 임차권등기명령을 신청해서 대항력을 보전하세요',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제3조의3에 따라 임차권등기명령이 완료되면 이사를 가도 대항력과 우선변제권이 유지됩니다</strong></p>\n<p>보증금을 받지 못한 상태에서 이사를 하면 <strong>전입신고가 말소되어 대항력을 잃습니다</strong>. 이를 방지하려면 관할 법원에 <strong>임차권등기명령</strong>을 신청하세요. 임차권등기가 완료되면 이사를 가더라도 보증금에 대한 우선변제권이 유지됩니다.</p>\n<p>신청에 필요한 서류는 ①임대차계약서 사본 ②전입세대확인서 ③보증금 반환 최고 내용증명 등입니다. 신청 비용은 <strong>약 2~5만 원</strong> 수준이며, 법원에서 1~2주 내에 결정이 나옵니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이사 전에 반드시 임차권등기명령 신청 → 대항력 보전 → 안전하게 이사</blockquote>',
      },
      {
        title: '둘째, 내용증명을 발송하고 보증금 반환을 공식 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명은 보증금 반환을 요구한 사실을 공식적으로 증명하는 법적 문서입니다</strong></p>\n<p>우체국에서 <strong>내용증명우편</strong>을 발송하세요. "임대차계약 만기일(○○년 ○월 ○일)이 도래하였으므로 보증금 ○○원을 14일 이내에 반환할 것을 요구합니다. 기한 내 미반환 시 법적 조치를 취하겠습니다"라는 내용을 포함합니다.</p>\n<p>내용증명 자체에 법적 강제력은 없지만, <strong>이후 소송에서 "반환을 요구했다"는 증거</strong>가 됩니다. 또한 임대인에게 심리적 압박을 주어 자발적 반환을 유도하는 효과도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">내용증명: 반환 요구 금액 + 반환 기한(14일) + 미반환 시 법적 조치 예고</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=jeonse-fraud" style="color:#1565c0;font-weight:600">전세보증금 미반환, AI로 법적 대응 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 보증금 반환 소송 또는 지급명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">보증금 1억 원 이하라면 소액사건심판으로 신속하게 처리할 수 있습니다</strong></p>\n<p>내용증명 기한이 지나도 반환되지 않으면 <strong>보증금 반환 청구소송</strong>을 제기합니다. 소액사건(3,000만 원 이하)은 1회 변론으로 판결이 나올 수 있어 가장 빠릅니다. 3,000만 원 초과 ~ 1억 원 이하는 단독판사 사건으로 처리됩니다.</p>\n<p>소송보다 간편한 방법으로 <strong>지급명령 신청</strong>도 있습니다. 법원에 지급명령을 신청하면 임대인에게 보증금을 지급하라는 명령이 내려지고, 임대인이 2주 내에 이의를 제기하지 않으면 확정 판결과 같은 효력을 갖습니다. 신청 비용은 소송의 1/10 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">선택: 3천만 원 이하 소액소송(1회 변론) 또는 지급명령(저비용·신속)</blockquote>',
      },
      {
        title: '넷째, 판결 확정 후 강제집행으로 보증금을 회수하세요',
        content:
          '<p><strong style="color:#1e3a5f">판결이 확정되어도 임대인이 자발적으로 지급하지 않으면 강제집행을 신청해야 합니다</strong></p>\n<p>판결문 또는 확정된 지급명령서를 근거로 <strong>강제집행(부동산 경매, 예금 압류, 급여 압류)</strong>을 신청할 수 있습니다. 임대인의 재산을 조사하여 가장 효과적인 집행 방법을 선택하세요.</p>\n<p>부동산 경매는 시간이 오래 걸리므로, <strong>예금 압류나 급여 압류</strong>가 더 빠른 회수 경로입니다. 임대인의 재산이 파악되지 않으면 법원에 <strong>재산명시신청</strong>을 하여 재산 목록을 제출하도록 강제할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">집행 순서: 판결 확정 → 재산조회 → 예금/급여 압류 → 부동산 경매(최후 수단)</blockquote>',
      },
    ],
    cases: [
      {
        title: '전세보증금 반환과 임차인 보호에 관한 법률 근거',
        summary:
          '주택임대차보호법 제3조의3에 따르면, 임대차가 끝난 후 보증금을 돌려받지 못한 임차인은 임차주택 소재지 관할 법원에 임차권등기명령을 신청할 수 있으며, 이 등기가 마쳐진 이후에는 이사를 가더라도 대항력과 우선변제권이 유지됩니다.',
        takeaway:
          '보증금을 못 받은 상태에서 무작정 이사하면 법적 보호를 잃습니다. 반드시 임차권등기명령을 먼저 신청한 뒤 이사하고, 동시에 보증금 반환 소송을 진행하세요.',
      },
    ],
    faq: [
      {
        question: '임대인이 "돈이 없다"고 하면 어떻게 하나요?',
        answer:
          '임대인의 재산 유무와 관계없이 <strong>법적 절차는 진행할 수 있습니다</strong>. 판결 후 재산명시신청을 통해 임대인의 숨겨진 재산을 찾을 수 있고, 부동산이 있다면 경매를 통해 보증금을 회수할 수 있습니다.',
      },
      {
        question: '임차권등기명령은 비용이 얼마나 드나요?',
        answer:
          '인지대와 송달료를 합쳐 <strong>약 2~5만 원</strong>이면 신청할 수 있습니다. 변호사 없이 직접 신청이 가능하며, 대한법률구조공단(132)에서 무료 서식과 작성 도움을 받을 수 있습니다.',
      },
      {
        question: '지급명령과 소송 중 어떤 것이 더 유리한가요?',
        answer:
          '임대인이 이의를 제기하지 않을 가능성이 높다면 <strong>지급명령이 훨씬 빠르고 저렴</strong>합니다. 하지만 이의를 제기하면 자동으로 소송으로 전환되므로, 임대인이 다툴 것으로 예상되면 처음부터 소송을 제기하는 것도 방법입니다.',
      },
      {
        question: '전세보증금 반환 청구에 시효가 있나요?',
        answer:
          '보증금 반환 청구권의 <strong>소멸시효는 10년</strong>입니다. 하지만 시간이 지날수록 임대인의 재산이 줄어들 수 있으므로 가능한 한 빨리 법적 절차를 시작하는 것이 유리합니다.',
      },
      {
        question: '보증금 반환 소송 비용은 얼마나 드나요?',
        answer:
          '소송 비용은 청구 금액에 비례합니다. 보증금 5,000만 원 기준으로 <strong>인지대 약 30만 원 + 송달료 약 5만 원</strong> 수준입니다. 변호사를 선임하면 별도 비용이 추가되지만, 법률구조공단을 통해 무료 법률지원을 받을 수도 있습니다.',
      },
    ],
    cta: {
      text: '💬 전세보증금 미반환, AI로 맞춤 법적 대응 확인하기',
      link: '/diagnosis/jeonse-fraud',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '전세사기 진단', href: '/diagnosis/jeonse-fraud' },
      { label: '전세사기 신고 절차 총정리', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '깡통전세 확인하는 방법', href: '/guide/jeonse-fraud/empty-jeonse-verification-method' },
      { label: '전세사기 경매 배당 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-bidding-guide' },
    ],
  },
];
