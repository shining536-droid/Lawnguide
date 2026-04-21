import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 29. 이 페이지는 [채무 문제로 회생과 파산 중 어느 절차가 자신에게 맞는지 판단하지 못하는 채무자]의 [소득·재산·채무 규모에 따른 선택 기준을 모르는 상황]에서 [개인회생 vs 파산 비교 분석과 판단 기준 안내]를 돕는 페이지다.
// 30. 이 페이지는 [교통사고 후 보험사 합의금 제안이 적정한지 판단하지 못하는 피해자]의 [적정 금액 산정 기준을 모르는 상황]에서 [합의금 구성 항목별 산정 방법과 검증 기준 안내]를 돕는 페이지다.
// 31. 이 페이지는 [블랙박스 영상이 없는 교통사고에서 과실비율을 다투고 싶은 피해자]의 [대체 증거 확보 방법과 이의제기 절차를 모르는 상황]에서 [증거 수집 방법과 과실비율 이의 절차 안내]를 돕는 페이지다.
// 32. 이 페이지는 [스토킹 피해를 받고 있는 피해자]의 [긴급응급조치를 신청하여 즉각적인 보호를 받는 방법을 모르는 상황]에서 [112 신고부터 법원 잠정조치까지 4단계 절차 안내]를 돕는 페이지다.
// 33. 이 페이지는 [차단했는데도 다른 수단으로 계속 연락하는 전 연인에 대해 법적 대응을 하려는 피해자]의 [구체적인 조치를 모르는 상황]에서 [증거 확보부터 고소·보호명령 신청까지 대응 방법 안내]를 돕는 페이지다.
// 34. 이 페이지는 [음주운전 2회 적발로 실형을 걱정하는 피의자]의 [양형 기준과 감경 요소를 모르는 상황]에서 [2회 음주운전 양형 기준과 방어 전략 안내]를 돕는 페이지다.
// 35. 이 페이지는 [음주 측정을 거부한 상태에서 처벌 수위와 대응 방법을 파악하려는 피의자]의 [측정 거부 처벌 기준과 방어 가능성을 모르는 상황]에서 [측정 거부 처벌 기준과 대응 전략 안내]를 돕는 페이지다.

export const spokesBatch24_29to35: SpokePage[] = [
  // ───────────────────────────────────────────
  // 29. rehabilitation / rehabilitation-vs-bankruptcy-choice
  // ───────────────────────────────────────────
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-vs-bankruptcy-choice',
    keyword: '개인회생 파산 선택 기준',
    questionKeyword: '개인회생과 파산 중 어느 것이 내 상황에 맞나요?',
    ctaKeyword: '회생 파산 비교 상담',
    type: '비교형',
    perspective: '피해자',
    meta: {
      title: '개인회생 vs 파산 — 5가지 선택 기준 비교 | 로앤가이드',
      description:
        '채무가 감당이 안 되는데 개인회생과 파산 중 어느 쪽이 나한테 맞는지 모르겠다면 소득·재산·채무 기준으로 비교해서 지금 확인하세요.',
    },
    intro:
      '<p>카드값, 대출 이자, 생활비 대출까지 더해져서 매달 갚아야 할 돈이 월급을 넘어섰습니다.</p><p>인터넷에 검색하면 "개인회생"과 "파산" 두 가지가 나오는데, 무엇이 다른지, 내 상황에는 어떤 게 맞는지 도무지 판단이 서지 않습니다.</p><p>두 제도는 소득 유무, 재산 보전 여부, 채무 규모에 따라 적합한 대상이 완전히 다릅니다. 잘못 선택하면 신청이 기각되거나, 오히려 불리한 결과를 받을 수 있습니다.</p><p>지금부터 5가지 핵심 기준으로 개인회생과 파산을 비교해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 소득 유무가 가장 먼저 갈리는 기준입니다',
        content:
          '<p><strong style="color:#1e3a5f">정기적인 소득이 있으면 개인회생, 소득이 없거나 불안정하면 파산이 기본 경로입니다</strong></p>\n<ul>\n<li><strong>개인회생 요건</strong> — 급여, 사업 소득 등 정기적·반복적 수입이 있어야 합니다. 법원은 향후 3~5년간 변제계획을 이행할 수 있는 능력이 있는지를 심사합니다. 비정규직이라도 꾸준히 일하고 있다면 신청 가능합니다</li>\n<li><strong>파산 요건</strong> — 소득이 전혀 없거나, 있더라도 최저생계비에도 미치지 못하는 수준이어야 합니다. "지급불능 상태", 즉 채무를 변제할 수 없는 상태임을 소명해야 합니다</li>\n<li><strong>판단 포인트</strong> — 현재 월 소득에서 최저생계비를 빼고 남는 금액이 채무 원금의 일부라도 갚을 수 있는 수준이면 개인회생, 전혀 여력이 없으면 파산을 먼저 검토하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소득 있음 → 개인회생 우선 검토 / 소득 없음 → 파산·면책 검토</blockquote>',
      },
      {
        title: '2단계 — 재산 보전 여부와 채무 한도를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">개인회생은 재산을 유지하면서 채무를 줄이고, 파산은 재산을 처분하는 대신 채무를 전부 없앱니다</strong></p>\n<ul>\n<li><strong>재산 보전</strong> — 개인회생은 주택, 자동차 등 재산을 유지하면서 변제할 수 있습니다. 다만 변제금액이 재산 청산가치 이상이어야 합니다(청산가치보장원칙). 파산은 압류가 가능한 모든 재산이 환가·처분됩니다</li>\n<li><strong>채무 한도</strong> — 개인회생은 무담보채무 10억 원, 담보채무 15억 원 이하여야 신청할 수 있습니다. 파산은 채무 한도 제한이 없습니다</li>\n<li><strong>면책 범위</strong> — 개인회생은 변제계획에 따라 3~5년간 분할 변제 후 나머지가 면책됩니다. 파산은 재산 청산 후 법원이 면책 결정을 내리면 대부분의 채무가 소멸합니다</li>\n<li><strong>절차 기간</strong> — 개인회생은 변제 기간 포함 3~5년, 파산은 신청부터 면책까지 보통 6개월~1년입니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 소득·채무 상황에 맞는 절차를 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 신용 회복과 사회적 제한도 함께 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">두 절차 모두 신용에 영향을 주지만, 회복 시점과 직업 제한의 범위가 다릅니다</strong></p>\n<ul>\n<li><strong>신용 회복</strong> — 개인회생은 변제 완료 후 면책 결정 시 신용회복 절차가 시작됩니다. 파산은 면책 확정 후 바로 신용회복이 가능하지만, 파산 이력 자체가 남아 대출 등에서 불리할 수 있습니다</li>\n<li><strong>직업 제한</strong> — 파산 선고 후 면책 전까지 변호사, 공인회계사, 보험모집인 등 일부 직업에 종사할 수 없습니다(복권 시 해제). 개인회생은 직업 제한이 없습니다</li>\n<li><strong>재신청 제한</strong> — 개인회생은 면책 후 재신청에 특별한 기간 제한이 없으나, 파산·면책은 면책 확정 후 7년 이내에는 다시 면책을 받기 어렵습니다</li>\n<li><strong>가족 영향</strong> — 두 절차 모두 배우자나 가족의 재산·신용에는 직접적인 영향을 미치지 않습니다. 다만 본인이 보증을 선 채무는 별도로 처리해야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산 유지 + 직업 제한 없음 → 개인회생 / 빠른 면책 + 채무 전액 소멸 → 파산</blockquote>',
      },
    ],
    comparison: {
      title: '개인회생 vs 파산 비교',
      headers: ['구분', '개인회생', '파산'],
      rows: [
        { label: '신청 요건', values: ['정기 소득 있음', '소득 없거나 부족'] },
        { label: '채무 처리', values: ['3~5년 분할 변제 후 면책', '재산 청산 후 면책'] },
        { label: '재산 보전', values: ['유지 가능', '환가 처분'] },
        { label: '절차 기간', values: ['3~5년', '6개월~1년'] },
        { label: '채무 한도', values: ['무담보 10억, 담보 15억', '제한 없음'] },
      ],
    },
    cases: [
      {
        title: '대법원 2023다239756 — 회생계획의 해석 기준',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 미확정 회생채권의 변제에 관한 회생계획의 해석 방법을 다루었습니다. 법원은 회생계획은 법률행위의 해석 방법에 따라 문언의 객관적 의미를 합리적으로 해석해야 한다고 판시했습니다.',
        takeaway:
          '회생 절차에서 변제계획은 법원이 인가하는 법적 문서입니다. 계획 내용이 명확하게 작성되어야 나중에 분쟁이 발생하지 않으므로, 신청 단계에서부터 변제 조건을 구체적으로 정리하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '월급이 200만 원인데 개인회생과 파산 중 어느 쪽을 신청해야 하나요?',
        answer:
          '월급 200만 원이면 개인회생을 먼저 검토합니다. 최저생계비(1인 기준 약 120만 원)를 제외한 나머지로 변제 가능 여부를 판단합니다. 다만 부양가족 수, 주거비, 필수 지출 등을 고려해 실질적인 변제 여력이 없으면 파산도 가능할 수 있습니다.',
      },
      {
        question: '개인회생 중에 파산으로 변경할 수 있나요?',
        answer:
          '가능합니다. 개인회생 변제계획 이행 중 소득이 급감하거나 질병 등으로 변제를 계속할 수 없게 되면 법원에 폐지를 신청한 뒤 파산·면책을 별도로 신청할 수 있습니다. 다만 절차가 처음부터 다시 시작되므로 시간과 비용이 추가됩니다.',
      },
      {
        question: '자동차가 있는데 파산하면 반드시 압류되나요?',
        answer:
          '파산 시 자동차는 원칙적으로 환가 대상이지만, 차량 가액이 낮거나(보통 500만 원 이하) 생계에 필수적인 경우 자유재산으로 인정받을 수 있습니다. 법원에 자유재산 확장 신청을 하면 검토 후 결정합니다.',
      },
      {
        question: '카드론과 현금서비스도 개인회생으로 정리할 수 있나요?',
        answer:
          '네, 카드론·현금서비스·신용대출·사채 등 무담보채무는 모두 개인회생 채무에 포함됩니다. 무담보채무 총액이 10억 원 이하이고 정기 소득이 있다면 신청 가능합니다.',
      },
      {
        question: '개인회생 신청하면 독촉 전화가 바로 멈추나요?',
        answer:
          '법원이 개인회생 개시결정을 내리면 채권자의 추심 행위가 법적으로 금지됩니다(중지명령). 신청서 접수부터 개시결정까지 보통 1~3주가 소요되며, 그 사이에도 법원에 포괄적 금지명령을 신청하면 추심을 조기에 중단시킬 수 있습니다.',
      },
    ],
    cta: {
      text: '내 상황에 맞는 채무 정리 방법, AI로 빠르게 확인하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '파산 신청부터 면책까지 절차', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 후 새 출발 요건', href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements' },
      { label: '카드빚도 개인회생에 포함되나요', href: '/guide/rehabilitation/rehabilitation-credit-card-debt-included' },
      { label: '파산하면 집과 차를 잃나요', href: '/guide/bankruptcy/will-i-lose-house-and-car' },
    ],
  },

  // ───────────────────────────────────────────
  // 30. traffic-accident / accident-settlement-fair-amount
  // ───────────────────────────────────────────
  // 31. traffic-accident / no-dashcam-fault-dispute
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'no-dashcam-fault-dispute',
    keyword: '블랙박스 없는 교통사고 과실비율',
    questionKeyword: '블랙박스가 없는 교통사고에서 과실비율을 어떻게 다투나요?',
    ctaKeyword: '과실비율 이의 상담',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '블랙박스 없는 사고 — 과실비율 다투는 3가지 방법 | 로앤가이드',
      description:
        '블랙박스 영상이 없는데 보험사가 과실을 높게 잡아서 억울하다면 대체 증거 확보와 이의 방법을 지금 확인하세요.',
    },
    intro:
      '<p>교통사고가 났는데 블랙박스가 없거나, 영상이 저장되지 않았습니다.</p><p>보험사에서 과실비율을 6:4로 통보했는데, 분명 상대방이 더 잘못했다고 생각합니다.</p><p>블랙박스 영상이 없다고 과실비율을 바꿀 수 없는 것은 아닙니다. CCTV, 목격자 진술, 사고 현장 사진 등 대체 증거로 충분히 다툴 수 있습니다.</p><p>블랙박스 없이 과실비율을 바꾸는 3가지 방법을 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 사고 현장에서 확보할 수 있는 대체 증거를 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">블랙박스 영상 외에도 과실비율을 입증할 수 있는 증거는 최소 5가지가 있습니다</strong></p>\n<ul>\n<li><strong>주변 CCTV</strong> — 사고 지점 주변 건물, 편의점, 주유소 등의 CCTV를 확인하세요. 경찰에 요청하면 보존 기간(보통 30일) 내에 확보할 수 있습니다. 직접 건물 관리자에게 요청하는 것도 가능합니다</li>\n<li><strong>상대방 블랙박스</strong> — 상대 차량에 블랙박스가 있다면 보험사를 통해 영상 제출을 요청할 수 있습니다. 상대방이 제출을 거부하면 법원에서 불리하게 해석될 수 있습니다</li>\n<li><strong>목격자 진술</strong> — 사고 현장에 있었던 보행자, 인근 상점 직원 등의 연락처를 확보하세요. 진술서(사실확인서)를 받아두면 강력한 증거가 됩니다</li>\n<li><strong>사고 현장 사진·동영상</strong> — 차량 파손 부위, 스키드 마크(타이어 흔적), 신호등 상태, 도로 표시 등을 촬영하세요. 파손 부위 위치와 각도로 충돌 상황을 추정할 수 있습니다</li>\n<li><strong>교통사고 보고서</strong> — 경찰이 작성한 교통사고사실확인원에는 사고 경위, 현장 약도, 관련자 진술이 기재됩니다. 경찰서에서 발급받으세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">CCTV 확보(30일 이내) + 목격자 진술 + 현장 사진 = 블랙박스 대체 증거</blockquote>',
      },
      {
        title: '2단계 — 보험사 과실비율에 이의를 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">보험사가 통보한 과실비율은 확정이 아니며, 증거를 제출하면 변경할 수 있습니다</strong></p>\n<ul>\n<li><strong>보험사 이의 신청</strong> — 확보한 증거(CCTV, 목격자 진술서, 현장 사진)를 보험사 담당자에게 제출하면서 과실비율 재산정을 요청하세요. 보험사는 도로교통공단의 과실비율 인정 기준을 적용하므로, 해당 기준을 직접 확인해두면 유리합니다</li>\n<li><strong>도로교통공단 과실비율 산정</strong> — 도로교통공단 교통사고 과실비율 분쟁심의위원회에 무료로 과실비율 산정을 의뢰할 수 있습니다. 제3자 기관의 판단이므로 보험사 협상에서 유리한 근거가 됩니다</li>\n<li><strong>교통사고분쟁심의위원회 조정</strong> — 보험사와 합의되지 않으면 금융감독원 교통사고분쟁심의위원회에 조정 신청을 할 수 있습니다. 무료이며 통상 2~3개월 내 결과가 나옵니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 유형별 과실비율과 이의 방법을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 조정이 안 되면 소송으로 과실비율을 확정하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송에서는 법원이 감정인과 증거를 종합하여 최종 과실비율을 판단합니다</strong></p>\n<ul>\n<li><strong>손해배상소송 제기</strong> — 보험사 조정이나 분쟁심의가 불성립하면 민사소송을 통해 과실비율을 다툴 수 있습니다. 법원은 사고 재구성 감정, 증인 신문 등을 통해 과실비율을 판단합니다</li>\n<li><strong>교통사고 재구성 감정</strong> — 법원이 교통사고 재구성 전문기관에 감정을 의뢰합니다. 차량 파손 정도, 충돌 각도, 속도 추정 등을 과학적으로 분석하여 사고 경위를 재현합니다. 블랙박스 없이도 물리적 증거만으로 과실비율을 산정할 수 있습니다</li>\n<li><strong>소송 기간 및 비용</strong> — 1심 기준 6개월~1년, 감정 비용은 100~300만 원 수준입니다. 승소 시 상대방에게 소송비용 일부를 청구할 수 있습니다</li>\n<li><strong>소멸시효</strong> — 손해배상 청구권은 손해 및 가해자를 안 날로부터 3년입니다. 시효가 임박하면 소 제기로 중단시키세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보험사 이의 → 도로교통공단 심의 → 소송(사고 재구성 감정)으로 과실 확정</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도8137 — 혈중알코올농도 측정 시점과 처벌 기준',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 운전 시점과 측정 시점의 시간 간격이 있는 경우에도 혈중알코올농도가 처벌기준치를 초과하는지 판단했습니다. 법원은 상승기라는 사정만으로 무죄가 되지 않는다고 판시했습니다.',
        takeaway:
          '교통사고에서는 증거의 시간적 연속성이 중요합니다. 사고 현장 증거도 마찬가지로 시간이 지나면 소멸되므로 CCTV는 30일 이내, 목격자 연락처는 현장에서 즉시 확보해야 합니다. 증거 확보 시점이 늦어지면 입증력이 크게 떨어집니다.',
      },
    ],
    faq: [
      {
        question: 'CCTV 보존 기간이 지났으면 영상을 확보할 방법이 없나요?',
        answer:
          '일반적으로 CCTV 보존 기간(30일)이 지나면 자동 삭제되어 복구가 어렵습니다. 다만 경찰이 수사 목적으로 보전 요청을 한 경우에는 보존되어 있을 수 있습니다. 사고 직후 바로 경찰에 CCTV 확보를 요청하는 것이 가장 중요합니다.',
      },
      {
        question: '목격자가 나중에 진술을 번복하면 어떻게 되나요?',
        answer:
          '목격자 진술은 서면으로 받아두는 것이 좋습니다. 사실확인서에 서명·날인을 받아두면 나중에 번복하더라도 초기 진술의 증거력이 인정됩니다. 가능하면 진술 과정을 녹음(상대방 동의 불요)해두면 더 확실합니다.',
      },
      {
        question: '상대방 블랙박스 영상 제출을 강제할 수 있나요?',
        answer:
          '보험사를 통해 상대방에게 영상 제출을 요청할 수 있고, 소송 중에는 법원에 문서제출명령을 신청할 수 있습니다. 상대방이 정당한 이유 없이 제출을 거부하면 법원은 영상 내용이 제출 거부자에게 불리한 것으로 추정할 수 있습니다.',
      },
      {
        question: '경찰 사고 보고서에 기재된 과실비율은 확정인가요?',
        answer:
          '아닙니다. 경찰 교통사고사실확인원에는 사고 경위와 진술 내용만 기재되며, 법적 구속력 있는 과실비율이 명시되지 않습니다. 과실비율은 보험사·분쟁심의위원회·법원이 별도로 판단합니다.',
      },
      {
        question: '사고 현장 스키드 마크로 과실을 입증할 수 있나요?',
        answer:
          '네. 스키드 마크(타이어 자국)의 길이와 방향으로 사고 당시 속도, 급제동 여부, 충돌 각도를 추정할 수 있습니다. 법원 감정에서도 중요한 물리적 증거로 활용됩니다. 사고 직후 스키드 마크를 촬영해두세요.',
      },
    ],
    cta: {
      text: '블랙박스 없는 사고, AI로 과실비율 대응 전략 확인하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-criteria' },
      { label: '교통사고 합의 절차', href: '/guide/traffic-accident/accident-settlement-process' },
      { label: '보험금 청구 절차 요약', href: '/guide/traffic-accident/insurance-claim-process-summary' },
      { label: '교통사고 보상 가이드', href: '/guide/traffic-accident/traffic-accident-compensation-guide' },
      { label: '뺑소니 피해자 대응법', href: '/guide/traffic-accident/hit-and-run-victim-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 32. stalking / stalking-emergency-measure-application
  // ───────────────────────────────────────────
  {
    domain: 'stalking',
    slug: 'stalking-emergency-measure-application',
    keyword: '스토킹 긴급응급조치 신청',
    questionKeyword: '스토킹 긴급응급조치는 어떻게 신청하나요?',
    ctaKeyword: '스토킹 긴급조치 상담',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '스토킹 긴급응급조치 신청 — 4단계 보호 절차 | 로앤가이드',
      description:
        '스토킹 피해가 계속되는데 어떻게 즉각적인 보호를 받을 수 있는지 모르겠다면 긴급응급조치 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>같은 사람이 집 앞에서 기다리거나, 하루에도 수십 번 메시지를 보내옵니다.</p><p>무섭고 불안한데, 경찰에 신고만 하면 바로 보호를 받을 수 있는 건지, 별도의 신청이 필요한 건지 모르겠습니다.</p><p>스토킹처벌법은 피해자를 즉각 보호하기 위해 "긴급응급조치"와 "잠정조치" 제도를 두고 있습니다. 112 신고 한 통이면 경찰이 현장에서 바로 조치를 취할 수 있습니다.</p><p>신고부터 법원 보호명령까지 4단계 절차를 단계별로 안내합니다.</p>',
    timelineSteps: [
      '1단계: 112 신고로 긴급응급조치 요청',
      '2단계: 경찰 긴급응급조치 실시',
      '3단계: 검사 잠정조치 청구',
      '4단계: 법원 잠정조치 결정',
    ],
    sections: [
      {
        title: '1단계 — 112에 신고하면 경찰이 현장에서 긴급응급조치를 합니다',
        content:
          '<p><strong style="color:#1e3a5f">112 신고 시 "스토킹 피해"임을 명확히 말하면 경찰이 즉시 출동하여 긴급응급조치를 실시합니다</strong></p>\n<ul>\n<li><strong>긴급응급조치 내용</strong> — 경찰은 현장에서 ①스토킹 행위 중지 통보, ②피해자로부터 100m 이내 접근 금지, ③전화·문자·이메일 등 연락 금지를 명할 수 있습니다(스토킹처벌법 제4조)</li>\n<li><strong>즉시 효력</strong> — 긴급응급조치는 법원 결정 없이 경찰 직권으로 즉시 발동됩니다. 현장에서 바로 효력이 발생합니다</li>\n<li><strong>신고 시 요령</strong> — "스토킹을 당하고 있습니다", "같은 사람이 반복적으로 따라다닙니다/연락합니다"라고 구체적으로 말하세요. 가해자 인적 사항(이름, 외모, 차량번호 등)을 알고 있으면 함께 전달하세요</li>\n<li><strong>증거 확보</strong> — 신고 전후로 스토킹 행위를 녹화·녹음·캡처해두세요. 문자, SNS 메시지, 방문 기록, CCTV 영상 등이 이후 절차에서 핵심 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">112 신고 → 경찰 출동 → 현장 긴급응급조치(접근·연락 금지) 즉시 발동</blockquote>',
      },
      {
        title: '2단계 — 검사가 잠정조치를 청구하면 법원이 보호 범위를 확대합니다',
        content:
          '<p><strong style="color:#1e3a5f">긴급응급조치 후 검사는 법원에 잠정조치를 청구하여 더 강력하고 장기적인 보호를 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>잠정조치 종류</strong> — ①접근 금지, ②연락 금지, ③유치장 또는 구치소 유치(최대 1개월)까지 포함됩니다. 긴급응급조치보다 범위가 넓고 효력이 강합니다</li>\n<li><strong>청구 시한</strong> — 경찰이 긴급응급조치를 한 날로부터 48시간 이내에 검사가 법원에 잠정조치를 청구해야 합니다. 기한 내 청구하지 않으면 긴급응급조치가 자동 해제됩니다</li>\n<li><strong>법원 결정</strong> — 법원은 피해자 보호의 필요성을 심리하여 잠정조치를 결정합니다. 결정이 나면 가해자에게 고지되며, 위반 시 2년 이하 징역 또는 2천만 원 이하 벌금에 처해집니다</li>\n<li><strong>연장 가능</strong> — 잠정조치 기간은 2개월이며, 필요 시 법원 결정으로 연장할 수 있습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 스토킹 피해 상황에 맞는 보호 조치를 분석해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 잠정조치가 유지되는 동안 추가 보호 방법을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치만으로 끝이 아니라, 고소·피해자 보호명령·안전조치를 병행해야 실질적 보호가 됩니다</strong></p>\n<ul>\n<li><strong>고소장 제출</strong> — 경찰 신고와 별도로 고소장을 작성해 제출하세요. 스토킹범죄는 반의사불벌죄가 아니므로 처벌을 원한다는 의사를 명확히 해야 수사가 적극적으로 진행됩니다</li>\n<li><strong>피해자 보호명령</strong> — 법원에 별도로 피해자 보호명령을 신청할 수 있습니다. 접근·연락 금지, 주거지 퇴거 등을 명할 수 있으며 최대 6개월(연장 가능)간 효력이 유지됩니다</li>\n<li><strong>스마트워치 등 안전장비</strong> — 관할 경찰서 여성청소년수사팀에 요청하면 위치추적 스마트워치 등 안전장비를 대여받을 수 있습니다</li>\n<li><strong>주거지 보안 강화</strong> — 현관 비밀번호 변경, 보안카메라 설치, 1인 가구 무료 잠금장치 지원사업(지자체별) 등을 활용하세요</li>\n<li><strong>위반 시 대응</strong> — 가해자가 잠정조치를 위반하면 즉시 112에 신고하세요. 위반 자체가 별도 범죄(2년 이하 징역 또는 2천만 원 이하 벌금)로 처벌됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">잠정조치 + 고소 + 보호명령 = 3중 보호 체계로 실질적 안전 확보</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025모3144 — 스토킹 잠정조치 연장 기준',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법에 따른 잠정조치 연장결정의 기준을 판단했습니다. 법원은 원활한 조사·심리 또는 피해자 보호를 위해 잠정조치를 명하거나 연장할 수 있다고 판시했습니다.',
        takeaway:
          '잠정조치는 기간 만료 전에 연장 청구가 가능합니다. 가해자의 스토킹 위험이 계속된다면 검사에게 연장을 요청하고, 법원은 피해자 보호 필요성을 기준으로 연장 여부를 결정합니다. 잠정조치 기간이 끝나기 전에 미리 대비하세요.',
      },
    ],
    faq: [
      {
        question: '긴급응급조치를 받으려면 고소를 먼저 해야 하나요?',
        answer:
          '아닙니다. 긴급응급조치는 112 신고만으로 경찰이 현장에서 직권으로 실시합니다. 고소 여부와 관계없이 스토킹 피해가 확인되면 즉시 발동됩니다. 다만 가해자 처벌을 원하면 별도로 고소장을 제출해야 합니다.',
      },
      {
        question: '긴급응급조치 효력은 얼마나 지속되나요?',
        answer:
          '긴급응급조치 자체의 효력은 제한적이며, 48시간 이내에 검사가 법원에 잠정조치를 청구하지 않으면 자동 해제됩니다. 잠정조치가 결정되면 2개월간 효력이 유지되고 연장도 가능합니다.',
      },
      {
        question: '가해자가 잠정조치를 위반하면 바로 체포되나요?',
        answer:
          '잠정조치 위반 시 2년 이하 징역 또는 2천만 원 이하 벌금으로 처벌됩니다. 위반 현장에서 현행범 체포가 가능하며, 112에 즉시 신고하면 됩니다. 위반 사실을 입증할 수 있도록 녹화·캡처 등 증거를 확보해두세요.',
      },
      {
        question: '스토킹 피해자 무료 법률 지원을 받을 수 있나요?',
        answer:
          '네. 대한법률구조공단(☎132)에서 무료 법률 상담과 소송 대리를 지원합니다. 또한 여성긴급전화(☎1366)에서 긴급 보호와 상담 연계를 받을 수 있습니다. 범죄피해자지원센터에서도 심리 상담, 의료비 지원 등을 제공합니다.',
      },
      {
        question: '온라인 스토킹(SNS 반복 접근)도 긴급응급조치 대상인가요?',
        answer:
          '네. 스토킹처벌법은 정보통신망을 이용한 반복적 접근(메시지, SNS DM, 이메일 등)도 스토킹행위로 규정하고 있습니다. 온라인 스토킹도 112 신고 후 긴급응급조치를 받을 수 있으며, 메시지 캡처와 계정 기록이 핵심 증거가 됩니다.',
      },
    ],
    cta: {
      text: '스토킹 피해 보호 조치, AI로 빠르게 확인하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 신고와 접근금지 신청', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 피해 어디부터 시작', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '전 연인 연락, 스토킹일까', href: '/guide/stalking/ex-keeps-contacting-is-it-stalking' },
      { label: '스토킹 증거 수집 방법', href: '/guide/stalking/stalking-evidence-collection-guide' },
      { label: '스토킹 보호명령 신청', href: '/guide/stalking/stalking-protection-order-request' },
    ],
  },

  // ───────────────────────────────────────────
  // 33. stalking / ex-persistent-contact-legal-action
  // ───────────────────────────────────────────
  {
    domain: 'stalking',
    slug: 'ex-persistent-contact-legal-action',
    keyword: '전 연인 계속 연락 법적 대응',
    questionKeyword: '차단해도 계속 연락하는 전 연인에게 법적으로 어떻게 대응하나요?',
    ctaKeyword: '전 연인 스토킹 대응 상담',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '차단해도 연락 오는 전 연인 — 법적 대응 3단계 | 로앤가이드',
      description:
        '전 연인이 차단해도 다른 번호로 계속 연락해서 불안하다면 스토킹죄 성립 요건과 법적 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>이별 후 전 연인의 번호를 차단했는데, 새 번호로, SNS 부계정으로, 심지어 지인을 통해 연락이 계속 옵니다.</p><p>처음에는 "곧 그만두겠지"라고 생각했는데, 몇 주째 반복되면서 일상이 불안해졌습니다.</p><p>2021년 시행된 스토킹처벌법에 따르면, 상대방의 의사에 반하여 반복적으로 접근·연락하는 행위는 스토킹범죄에 해당할 수 있습니다. 피해자가 실제로 인식하지 못했더라도 불안감을 일으킬 수 있는 행위면 처벌 대상입니다.</p><p>차단을 무시하고 계속 연락하는 전 연인에 대한 법적 대응 방법을 정리해드립니다.</p>',
    sections: [
      {
        title: '1단계 — 스토킹죄 성립 요건과 증거를 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">차단 후에도 반복적으로 연락하는 행위는 스토킹처벌법상 스토킹행위에 해당합니다</strong></p>\n<ul>\n<li><strong>스토킹행위 요건</strong> — ①상대방의 의사에 반하여, ②정당한 이유 없이, ③반복적으로 접근·연락하는 행위입니다. "차단"이라는 행위 자체가 "연락을 원하지 않는다"는 의사 표시로 인정됩니다</li>\n<li><strong>처벌 수위</strong> — 스토킹범죄(반복적 스토킹행위)는 3년 이하 징역 또는 3천만 원 이하 벌금에 처합니다. 흉기 등 위험한 물건을 휴대하면 5년 이하 징역 또는 5천만 원 이하 벌금입니다</li>\n<li><strong>핵심 증거</strong> — ①차단 기록(전화·SNS 차단 캡처), ②차단 후 새 번호·계정으로 온 연락 캡처, ③"연락하지 마세요"라고 명시적으로 거부한 메시지, ④반복 횟수와 기간을 보여주는 기록을 확보하세요</li>\n<li><strong>거부 의사 남기기</strong> — 아직 명확한 거부 메시지를 보내지 않았다면 "더 이상 연락하지 마세요. 연락을 계속하면 법적 조치를 하겠습니다"라는 메시지를 한 번 보내고 캡처해두세요. 이것이 "의사에 반한다"는 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">차단 기록 + 차단 후 연락 캡처 + 거부 메시지 = 스토킹 입증 3대 증거</blockquote>',
      },
      {
        title: '2단계 — 112 신고와 경찰 조치를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹 행위가 확인되면 112 신고로 즉시 긴급응급조치를 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>112 신고</strong> — "전 연인이 차단했는데도 반복적으로 연락을 해서 스토킹 피해를 받고 있습니다"라고 구체적으로 말하세요. 경찰은 즉시 긴급응급조치(접근 금지, 연락 금지)를 실시할 수 있습니다</li>\n<li><strong>고소장 제출</strong> — 경찰서 여성청소년수사팀에 고소장을 제출하세요. 증거(캡처, 녹음 파일)를 함께 제출하면 수사가 빠르게 진행됩니다</li>\n<li><strong>잠정조치 청구</strong> — 신고 후 48시간 이내에 검사가 법원에 잠정조치(접근 금지, 연락 금지, 유치 등)를 청구합니다. 법원 결정이 나면 가해자에게 공식 고지됩니다</li>\n<li><strong>위반 시 처벌</strong> — 잠정조치를 위반하면 2년 이하 징역 또는 2천만 원 이하 벌금으로 별도 처벌됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 전 연인 스토킹 상황에 맞는 대응 전략을 분석해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 보호명령 신청과 장기적 안전 대책을 마련하세요',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치가 끝나더라도 보호명령을 신청하면 최대 6개월간 법적 보호를 연장할 수 있습니다</strong></p>\n<ul>\n<li><strong>피해자 보호명령</strong> — 법원에 피해자 보호명령을 신청하면 접근 금지, 연락 금지, 주거지 퇴거 등을 최대 6개월간(연장 가능) 명할 수 있습니다. 검사 또는 피해자 본인이 직접 신청할 수 있습니다</li>\n<li><strong>디지털 보안</strong> — 전화번호 변경, SNS 계정 비공개 전환, 위치 공유 앱 삭제, 비밀번호 전면 변경 등 디지털 접근 차단을 철저히 하세요</li>\n<li><strong>물리적 보안</strong> — 현관 비밀번호 변경, 보안카메라 설치, 1인 가구 안전 지원사업(지자체별 무료 잠금장치 제공) 등을 활용하세요. 경찰에 스마트워치 대여를 요청할 수도 있습니다</li>\n<li><strong>민사 손해배상</strong> — 스토킹으로 인한 정신적 피해에 대해 민사상 손해배상(위자료) 청구도 가능합니다. 진료 기록, 심리 상담 기록이 배상액 산정에 영향을 줍니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">잠정조치 → 보호명령 연장 + 디지털·물리적 보안 + 민사 배상 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도36 — 피해자가 인식하지 못해도 스토킹 성립',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 피해자의 현실적 인식이 없었던 경우에도 스토킹행위가 성립하는지 판단했습니다. 법원은 행위자의 행위를 매개로 불안감 또는 공포심을 일으키면 스토킹범죄에 해당한다고 판시했습니다.',
        takeaway:
          '피해자가 차단으로 인해 실제 연락을 보지 못했더라도, 가해자가 반복적으로 연락을 시도한 행위 자체가 스토킹범죄에 해당할 수 있습니다. "몰랐으니 괜찮다"가 아니라, 불안감을 일으킬 수 있는 행위라면 처벌 대상입니다.',
      },
    ],
    faq: [
      {
        question: '전 연인이 "죽겠다"며 연락하는 것도 스토킹인가요?',
        answer:
          '상대방이 명확히 연락 거부 의사를 밝혔는데도 반복적으로 연락하는 행위는 내용과 관계없이 스토킹행위에 해당할 수 있습니다. "죽겠다"는 식의 연락은 오히려 심리적 압박을 가하는 행위로 볼 수 있습니다. 자살 암시가 포함된 경우 112와 자살예방상담전화(☎1393)에 동시 신고하세요.',
      },
      {
        question: '공통 지인을 통해 안부를 물어보는 것도 스토킹인가요?',
        answer:
          '직접 연락이 아닌 제3자를 통한 간접 접근도 반복적이고 상대방의 의사에 반한다면 스토킹행위에 해당할 수 있습니다. 다만 1~2회의 단순 안부 전달은 "반복성" 요건을 충족하기 어려울 수 있으므로, 빈도와 내용을 기록해두세요.',
      },
      {
        question: '스토킹 고소를 취하할 수 있나요?',
        answer:
          '스토킹범죄는 2023년 7월 개정으로 반의사불벌죄에서 제외되었습니다. 따라서 피해자가 고소를 취하하거나 처벌불원 의사를 밝혀도 검사가 기소할 수 있습니다. 합의 압박에 시달리는 피해자를 보호하기 위한 조치입니다.',
      },
      {
        question: '이별 후 물건을 돌려달라고 연락하는 것도 스토킹인가요?',
        answer:
          '물건 반환 등 정당한 이유가 있는 1~2회 연락은 스토킹으로 보기 어렵습니다. 다만 물건 반환을 핑계로 반복적으로 연락하거나 만남을 요구한다면 스토킹행위에 해당할 수 있습니다. 필요한 용건은 대리인(가족, 친구)을 통해 처리하세요.',
      },
      {
        question: '증거 없이 구두 신고만으로도 경찰이 조치를 해주나요?',
        answer:
          '112 신고 시 스토킹 피해를 구두로 진술하면 경찰은 긴급응급조치를 실시할 수 있습니다. 다만 이후 고소·잠정조치 절차를 진행하려면 증거가 필요합니다. 메시지 캡처, 통화 기록, 방문 CCTV 등을 미리 확보해두는 것이 중요합니다.',
      },
    ],
    cta: {
      text: '전 연인 반복 연락, AI로 법적 대응 방법 확인하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '전 연인 연락, 스토킹일까', href: '/guide/stalking/ex-keeps-contacting-is-it-stalking' },
      { label: '스토킹 신고와 접근금지 신청', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '스토킹 피해 어디부터 시작', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '스토킹 증거 수집 방법', href: '/guide/stalking/stalking-evidence-collection-guide' },
      { label: '스토킹 긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-measure-application' },
    ],
  },

  // ───────────────────────────────────────────
  // 34. dui / dui-second-offense-prison-avoidance
  // ───────────────────────────────────────────
  {
    domain: 'dui',
    slug: 'dui-second-offense-prison-avoidance',
    keyword: '음주운전 2회 실형',
    questionKeyword: '음주운전 2회 적발되면 실형을 피할 수 있나요?',
    ctaKeyword: '음주운전 2회 양형 상담',
    type: '상황형',
    perspective: '가해자',
    meta: {
      title: '음주운전 2회 적발 — 실형 피하는 4가지 감경 요소 | 로앤가이드',
      description:
        '음주운전 2회 적발로 실형이 걱정되는 혐의를 받고 있다면 양형 기준과 감경 요소를 지금 확인하세요.',
    },
    intro:
      '<p>음주운전으로 두 번째 적발되었습니다. 이번에는 실형이 나올 수 있다는 말에 앞이 캄캄합니다.</p><p>처음에는 벌금으로 끝났지만, 2회부터는 상황이 완전히 달라집니다. 2019년 강화된 윤창호법에 따라 처벌 수위가 크게 높아졌습니다.</p><p>다만 양형 기준에 따른 감경 사유가 인정되면 실형을 면하고 집행유예를 받을 수 있는 가능성도 있습니다.</p><p>음주운전 2회 혐의를 받고 있다면, 양형 기준과 감경 요소를 먼저 확인해보세요.</p>',
    sections: [
      {
        title: '1단계 — 음주운전 2회의 법정형과 양형 기준을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">2회 이상 음주운전은 도로교통법상 2년 이상 6년 이하 징역 또는 1천만 원 이상 3천만 원 이하 벌금에 처합니다</strong></p>\n<ul>\n<li><strong>법정형</strong> — 도로교통법 제148조의2 제1항에 따라 2회 이상 음주운전은 최소 2년 이상 징역입니다. 1회 음주운전(1년 이상 6년 이하)보다 하한이 높아 벌금형만으로 끝나기 어렵습니다</li>\n<li><strong>양형위원회 기준</strong> — 대법원 양형위원회는 음주운전 2회의 기본 영역을 징역 1년~2년으로 설정하고 있습니다. 감경 요인이 인정되면 8월~1년6월, 가중 요인이 있으면 1년6월~3년 범위에서 선고됩니다</li>\n<li><strong>실형 vs 집행유예</strong> — 징역 3년 이하에서 집행유예 선고가 가능합니다(형법 제62조). 따라서 양형 기준 내에서 감경 사유를 확보하면 집행유예 가능성이 열립니다</li>\n<li><strong>전과 간격</strong> — 1회와 2회 사이의 기간이 짧을수록 불리하고, 10년 이상 경과했다면 상대적으로 유리합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">2회 음주운전 = 2년 이상 징역 / 감경 시 집행유예 가능성 검토 필요</blockquote>',
      },
      {
        title: '2단계 — 실형을 줄이는 4가지 감경 요소를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">양형 기준상 감경 사유를 최대한 확보하는 것이 실형 회피의 핵심입니다</strong></p>\n<ul>\n<li><strong>① 낮은 혈중알코올농도</strong> — 혈중알코올농도가 처벌 기준(0.03%) 근처로 낮을수록 감경에 유리합니다. 0.03~0.08%와 0.08% 이상은 양형에서 큰 차이를 만듭니다</li>\n<li><strong>② 인적·물적 피해 없음</strong> — 단순 음주운전으로 사고 없이 적발된 경우, 피해자가 없다는 점이 감경 사유가 됩니다. 사고가 동반되면 가중됩니다</li>\n<li><strong>③ 진지한 반성과 재발 방지</strong> — 알코올 치료 프로그램 수강, 단주 서약, 차량 처분, 반성문 작성 등이 법원에서 긍정적으로 평가됩니다. 특히 알코올 전문 치료기관 수강 이력은 실질적 감경 사유입니다</li>\n<li><strong>④ 사회적 유대관계</strong> — 정상적인 직업 활동, 부양가족 존재, 전과 간격이 길다는 점 등이 종합적으로 고려됩니다. 직장 재직증명서, 가족관계증명서 등을 준비하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 혐의 상황에 맞는 양형 분석과 감경 전략을 세워드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 수사부터 재판까지 절차별 대응을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사·검찰 송치·재판 각 단계에서 준비해야 할 사항이 다릅니다</strong></p>\n<ul>\n<li><strong>경찰 조사</strong> — 진술거부권이 보장됩니다. 불리한 진술은 하지 않되, 반성의 태도는 보여주세요. 음주 경위, 운전 거리, 사고 여부 등을 질문받습니다. 변호인 입회를 요청할 수 있습니다</li>\n<li><strong>검찰 단계</strong> — 검사는 기소 여부와 구형을 결정합니다. 이 단계에서 알코올 치료 수강 증명서, 반성문, 탄원서(가족·직장 동료) 등을 제출하면 구형에 영향을 줄 수 있습니다</li>\n<li><strong>재판 단계</strong> — 법정에서 피고인 최후 진술 기회가 있습니다. 진심 어린 반성과 구체적인 재발 방지 계획(차량 처분, 알코올 치료 지속 등)을 직접 진술하세요</li>\n<li><strong>면허 취소</strong> — 2회 음주운전은 면허 취소(결격 기간 2년)가 기본입니다. 별도로 면허 취소에 대한 행정심판도 검토하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경찰 조사 전 변호인 확보 → 검찰에 감경 자료 제출 → 재판에서 반성·재발 방지 입증</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도7665 — 전자장치 부착 중 음주운전과 준수사항',
        summary:
          '대법원 2025도7665 사건(대법원, 2025.8.14 선고)에서 법원은 전자장치 부착명령 집행을 받고 있는 피고인이 음주운전을 한 사안을 판단했습니다. 법원은 전자장치부착법 제9조의2에 따라 부착명령 선고 시 준수사항 부과가 가능하다고 판시했습니다.',
        takeaway:
          '음주운전 전과가 있는 상태에서 재범하면 전자장치 부착명령까지 선고될 수 있습니다. 2회 적발 시 양형뿐만 아니라 보안처분까지 병과될 수 있으므로 초기부터 변호인과 함께 종합적인 방어 전략을 세우는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '음주운전 2회인데 벌금형만 받을 수 있나요?',
        answer:
          '법정형상 벌금형(1천만~3천만 원)도 가능하지만, 실무에서 2회 음주운전에 벌금형만 선고되는 경우는 매우 드뭅니다. 혈중알코올농도가 매우 낮고, 사고가 없으며, 감경 사유가 충분한 경우에 제한적으로 가능합니다.',
      },
      {
        question: '알코올 치료 프로그램은 어디서 받나요?',
        answer:
          '보건소 중독관리통합지원센터, 국립정신건강센터, 알코올 전문 병원 등에서 프로그램을 수강할 수 있습니다. 수강 증명서를 발급받아 검찰이나 법원에 제출하면 감경 자료로 활용됩니다.',
      },
      {
        question: '1회 음주운전이 10년 전인데 2회로 가중되나요?',
        answer:
          '네. 도로교통법상 음주운전 횟수에 시간적 제한이 없으므로 10년 전 전과도 "2회"로 산정됩니다. 다만 양형 과정에서 전과 간격이 길다는 점은 감경 사유로 고려될 수 있습니다.',
      },
      {
        question: '음주운전 2회로 구속될 수 있나요?',
        answer:
          '가능합니다. 특히 혈중알코올농도가 높거나(0.08% 이상), 사고를 동반했거나, 도주 우려가 있는 경우 검사가 구속영장을 청구할 수 있습니다. 구속 적부 심사를 통해 다툴 수 있으며, 변호인 확보가 급선무입니다.',
      },
      {
        question: '집행유예를 받으면 전과 기록은 어떻게 되나요?',
        answer:
          '집행유예 선고 후 유예 기간(통상 2~4년)을 무사히 마치면 형의 선고 효력이 상실됩니다. 다만 수사 기록은 남으며, 이후 다시 음주운전을 하면 "3회"로 더 무거운 처벌을 받게 됩니다.',
      },
    ],
    cta: {
      text: '음주운전 2회 혐의, AI로 양형 전략 빠르게 확인하기',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '음주운전 형사절차 개요', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주 교통사고 대응', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '음주운전 초범 처벌 기준', href: '/guide/dui/dui-first-offense-penalty-guide' },
      { label: '면허 취소·정지 회복', href: '/guide/dui/dui-license-suspension-reinstatement' },
      { label: '혈중알코올농도 계산', href: '/guide/dui/dui-blood-alcohol-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 35. dui / breathalyzer-refusal-penalty-response
  // ───────────────────────────────────────────
  {
    domain: 'dui',
    slug: 'breathalyzer-refusal-penalty-response',
    keyword: '음주 측정 거부 처벌',
    questionKeyword: '음주 측정을 거부하면 어떤 처벌을 받나요?',
    ctaKeyword: '측정 거부 대응 상담',
    type: '상황형',
    perspective: '가해자',
    meta: {
      title: '음주 측정 거부 — 처벌 기준과 3가지 대응법 | 로앤가이드',
      description:
        '음주 측정을 거부해서 어떤 처벌을 받게 되는지 불안하다면 법정형과 대응 방법을 지금 확인하세요.',
    },
    intro:
      '<p>경찰의 음주 측정 요구를 거부했습니다. 그 자리에서는 피할 수 있을 거라 생각했지만, 오히려 상황이 더 나빠졌습니다.</p><p>음주 측정 거부는 실제 음주운전보다 더 무거운 처벌을 받을 수 있다는 사실을 뒤늦게 알게 되었습니다.</p><p>도로교통법 제148조의2 제1항 제2호에 따르면 측정 거부 시 1년 이상 6년 이하 징역 또는 500만 원 이상 3천만 원 이하 벌금에 처합니다.</p><p>측정 거부 혐의를 받고 있다면, 처벌 기준과 대응 방법을 먼저 확인해보세요.</p>',
    sections: [
      {
        title: '1단계 — 측정 거부의 법정형과 처벌 기준을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">음주 측정 거부는 혈중알코올농도 0.08% 이상 음주운전과 동일한 법정형이 적용됩니다</strong></p>\n<ul>\n<li><strong>법정형</strong> — 1년 이상 6년 이하 징역 또는 500만 원 이상 3천만 원 이하 벌금입니다(도로교통법 제148조의2 제1항 제2호). 이는 혈중알코올농도 0.08% 이상 음주운전과 같은 수준입니다</li>\n<li><strong>측정 거부의 의미</strong> — 호흡 측정기에 숨을 불어넣지 않는 행위, 의도적으로 약하게 부는 행위, 계속 시간을 끄는 행위 모두 "거부"로 판단됩니다. 3회 이상 측정을 시도해도 유효한 수치가 나오지 않으면 거부로 간주합니다</li>\n<li><strong>강제 채혈</strong> — 측정을 거부해도 법원의 영장을 받아 강제 채혈이 가능합니다. 채혈 결과 혈중알코올농도가 확인되면 음주운전 혐의까지 추가됩니다</li>\n<li><strong>면허 처분</strong> — 측정 거부 시 운전면허가 즉시 취소됩니다(결격 기간 최소 2년). 음주운전보다 행정 처분이 더 무거울 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">측정 거부 = 0.08% 이상 음주운전과 동일 처벌 + 면허 즉시 취소</blockquote>',
      },
      {
        title: '2단계 — 측정 거부 혐의에서 다툴 수 있는 쟁점을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰의 측정 요구 절차에 위법이 있으면 거부 혐의를 다툴 수 있는 여지가 있습니다</strong></p>\n<ul>\n<li><strong>적법한 측정 요구였는지</strong> — 경찰은 음주 의심의 "상당한 이유"가 있을 때 측정을 요구할 수 있습니다. 음주 의심 근거 없이 무작위로 측정을 요구한 경우 적법성을 다툴 여지가 있습니다</li>\n<li><strong>측정 거부 고지</strong> — 경찰은 측정 거부 시 처벌 내용(법정형, 면허 취소)을 피의자에게 고지해야 합니다. 고지 없이 바로 거부로 처리한 경우 절차 위반을 주장할 수 있습니다</li>\n<li><strong>물리적 불능</strong> — 호흡 질환, 안면 부상 등으로 물리적으로 호흡 측정이 불가능한 경우 "거부 의사"가 없었다고 다툴 수 있습니다. 다만 이 경우에도 혈액 채취에 응할 의무가 있습니다</li>\n<li><strong>채혈 결과</strong> — 영장에 의한 강제 채혈이 이루어진 경우, 채혈 과정의 적법성(영장 절차, 채혈 시간, 보관 방법)을 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 측정 거부 상황에 맞는 방어 전략을 분석해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 수사·재판 단계별 대응 전략을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">측정 거부 사건도 감경 사유를 확보하면 벌금형이나 집행유예를 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>경찰 조사 대응</strong> — 측정 거부 경위, 음주량, 운전 경로 등을 질문받습니다. 진술거부권을 행사할 수 있지만, 반성의 태도를 보여주세요. 변호인 입회를 반드시 요청하세요</li>\n<li><strong>감경 자료 준비</strong> — ①초범 여부, ②사고 미발생, ③알코올 치료 프로그램 수강 증명, ④반성문·탄원서, ⑤안정적 직업·부양가족 자료를 준비하세요. 특히 알코올 치료 수강은 법원에서 가장 실질적인 감경 요소로 평가됩니다</li>\n<li><strong>양형 기준</strong> — 측정 거부 초범이면서 사고가 없는 경우 벌금형(500만~1,000만 원)으로 끝나는 경우도 있습니다. 반면 2회 이상이거나 사고를 동반하면 실형 가능성이 높아집니다</li>\n<li><strong>면허 회복</strong> — 면허 취소 후 결격 기간(최소 2년) 경과 시 운전면허시험에 재응시할 수 있습니다. 행정심판을 통해 취소 처분을 다투는 것도 검토해보세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변호인 확보 → 절차 위법 여부 검토 → 감경 자료(치료 수강) 확보 → 양형 대응</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도6752 — 음주 측정 요구의 적법성 기준',
        summary:
          '대법원 2025도6752 사건(대법원, 2025.12.11 선고)에서 법원은 식당에서 음주운전 여부를 확인한 뒤 음주측정을 한 것이 위법한지 판단했습니다. 법원은 수사에 필요한 조사를 할 수 있으나 강제처분은 법률에 특별한 규정이 있는 경우에 한하며 필요한 최소한도의 범위에서 해야 한다고 판시했습니다.',
        takeaway:
          '경찰의 음주 측정 요구가 적법한 절차에 따라 이루어졌는지가 핵심 쟁점이 될 수 있습니다. 측정 요구의 경위, 음주 의심 근거, 고지 절차 등을 꼼꼼히 확인하면 방어 가능성을 높일 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '측정을 거부하면 음주운전보다 처벌이 더 무거운가요?',
        answer:
          '측정 거부의 법정형(1년 이상 6년 이하 징역)은 혈중알코올농도 0.08% 이상 음주운전과 동일합니다. 0.03~0.08% 구간(1년 이하 징역 또는 500만 원 이하 벌금)보다는 훨씬 무겁습니다. 실제 음주량이 적었더라도 거부 시 더 무거운 처벌을 받을 수 있습니다.',
      },
      {
        question: '측정 거부 후 자진해서 채혈에 응하면 감경이 되나요?',
        answer:
          '거부 후 자발적으로 채혈에 응한 사실은 양형에서 긍정적으로 고려될 수 있지만, 거부 혐의 자체가 없어지지는 않습니다. 다만 채혈 결과 혈중알코올농도가 낮게 나오면 종합적인 양형에서 유리하게 작용할 수 있습니다.',
      },
      {
        question: '호흡 측정은 거부했지만 채혈 영장은 거부할 수 없나요?',
        answer:
          '법원이 발부한 채혈 영장은 강제 집행이 가능하므로 거부할 수 없습니다. 영장에 의한 채혈을 물리적으로 방해하면 공무집행방해죄가 추가될 수 있습니다.',
      },
      {
        question: '측정 거부로 면허 취소되면 행정심판으로 돌릴 수 있나요?',
        answer:
          '행정심판을 청구할 수는 있지만, 측정 거부에 대한 면허 취소는 법률상 필수적 처분이므로 인용되기 매우 어렵습니다. 다만 측정 요구 절차에 중대한 위법이 있는 경우에는 예외적으로 취소가 가능합니다.',
      },
      {
        question: '음주 측정 거부와 음주운전이 동시에 기소될 수 있나요?',
        answer:
          '측정을 거부한 뒤 영장에 의한 채혈로 혈중알코올농도가 확인되면 측정 거부와 음주운전이 모두 기소될 수 있습니다. 다만 실무에서는 더 무거운 혐의 하나로 기소하는 경우가 많으며, 구체적 상황에 따라 달라집니다.',
      },
    ],
    cta: {
      text: '음주 측정 거부 혐의, AI로 대응 전략 빠르게 확인하기',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '음주운전 형사절차 개요', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주 교통사고 대응', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '혈중알코올농도 계산', href: '/guide/dui/dui-blood-alcohol-calculation' },
      { label: '음주운전 초범 처벌 기준', href: '/guide/dui/dui-first-offense-penalty-guide' },
      { label: '면허 취소·정지 회복', href: '/guide/dui/dui-license-suspension-reinstatement' },
    ],
  },
];
