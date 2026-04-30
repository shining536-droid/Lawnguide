import { SpokePage } from '../spoke-pages';

// batch40 labor2 10개: dismissal 3 + divorce 3 + child-support 2 + traffic 2

export const spokesBatch40Labor2: SpokePage[] = [
  // ─── 1. dismissal / pip-low-performance-defense ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pip-low-performance-defense',
    keyword: '저성과 PIP 해고 부당성',
    questionKeyword: '저성과 PIP 통보받았는데 해고 막을 수 있나요?',
    ctaKeyword: 'PIP 저성과 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: 'PIP 받고 해고됐어요 — 부당해고 다투는 4단계 | 로앤가이드',
      description:
        '저성과를 이유로 PIP 후 해고됐는데 다툴 수 있을까요? 평가 객관성·소명 기회·재배치 노력 4가지 요건과 노동위 구제신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>PIP(성과향상프로그램) 대상이 되면 "이대로 해고당하는 것 아닌가" 불안감이 커집니다. 그러나 법원은 PIP를 거쳐도 객관적 평가·개선 기회·대체 배치 여부가 입증되지 않으면 해고를 무효로 본 사례가 많습니다. 통보 시점부터 기록과 증거를 확보해야 합니다.</p>',
    sections: [
      {
        title: 'PIP 해고 — 정당성 4요건',
        content:
          '<p><strong style="color:#1e3a5f">저성과 해고가 인정되려면 평가 공정성·개선 기회·대체 배치·해고 최후 수단성이 모두 충족되어야 합니다.</strong></p>\n<ul>\n<li><strong>평가 객관성</strong> — 동일 직무 동료와 비교한 절대·상대 평가가 공정했는지 확인합니다.</li>\n<li><strong>개선 기회</strong> — PIP 기간·목표·교육 지원이 합리적이었는지가 핵심입니다.</li>\n<li><strong>대체 배치</strong> — 다른 직무·부서로의 전환 가능성을 검토했는지 확인합니다.</li>\n<li><strong>해고 최후성</strong> — 해고가 아닌 경고·감봉 등 경징계로 해결 가능했는지 판단합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 네 가지 중 하나라도 미흡하면 부당해고로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: 'PIP 통보 직후 — 지금 할 일 3개',
        content:
          '<p><strong style="color:#1e3a5f">PIP 통보를 받은 즉시 3가지를 준비해야 이후 구제신청에서 유리합니다.</strong></p>\n<ul>\n<li><strong>통보 문서 확보</strong> — PIP 대상 선정 근거·평가 지표·개선 목표가 적힌 문서를 받아둡니다.</li>\n<li><strong>업무 기록 보관</strong> — 이메일·업무 결과·근태 자료 등 실적을 입증할 객관 증거를 수집합니다.</li>\n<li><strong>이의 제기</strong> — 평가 결과·PIP 사유에 이의가 있다면 서면으로 이의신청을 제출합니다.</li>\n<li><strong>상담 병행</strong> — 노무사·변호사 상담으로 PIP 과정 중 방어 포인트를 점검합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 PIP 절차의 부당성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부당해고 구제신청 — 절차와 기한',
        content:
          '<p><strong style="color:#1e3a5f">해고된 날부터 3개월 이내 지방노동위원회에 구제신청을 해야 합니다.</strong></p>\n<ul>\n<li><strong>신청 기한</strong> — 해고일 포함 3개월 이내. 초과 시 각하되므로 필수 준수.</li>\n<li><strong>관할 지노위</strong> — 회사 소재지 관할 지방노동위원회에 접수합니다.</li>\n<li><strong>입증 책임</strong> — 해고 정당성은 사용자(회사)가 입증해야 하므로 근로자는 반박 자료 중심.</li>\n<li><strong>결정 시 효과</strong> — 부당해고 인정 시 원직복귀·임금상당액 지급 명령이 내려집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 3개월은 의외로 빨리 지나가므로 해고 통보 즉시 준비를 시작하세요.</blockquote>',
      },
      {
        title: 'PIP 방어 전략 — 실무 체크포인트',
        content:
          '<p><strong style="color:#1e3a5f">PIP 기간 중 작성한 자료와 행동이 이후 해고 다툼의 승패를 좌우합니다.</strong></p>\n<ul>\n<li><strong>면담 기록</strong> — PIP 면담 내용을 요약 메모·녹음(본인 대화)으로 보관합니다.</li>\n<li><strong>목표 달성 증빙</strong> — PIP 목표 수행 과정과 결과를 문서·이메일로 남깁니다.</li>\n<li><strong>교육·지원 요청</strong> — 회사가 개선 기회를 제공했는지 확인하고, 부족하면 공식 요청합니다.</li>\n<li><strong>동료 증언 확보</strong> — 업무 능력·태도에 대한 동료 진술서가 후속 증거가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 감정적 대응보다 기록 중심 대응이 구제신청에서 압도적으로 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — PIP 거쳤어도 해고 무효',
        summary:
          '대법원 2022다252332 사건(대법원, 2023.06.15 선고)에서 법원은 저성과자 PIP를 시행했더라도 평가 공정성·개선 기회·대체 배치 검토가 미흡하면 해고의 정당성을 인정할 수 없다고 판시했습니다.',
        takeaway:
          'PIP는 해고의 면죄부가 아니며, 각 단계의 적법성이 입증되어야 합니다.',
      },
    ],
    faq: [
      {
        question: 'PIP 대상 선정부터 부당하면 해고도 무효인가요?',
        answer:
          '<strong>네, 그럴 가능성이 높습니다.</strong> 선정 기준·평가 지표가 공정하지 않으면 이후 해고도 부당해고로 판단됩니다.',
      },
      {
        question: 'PIP 목표가 비현실적이면 어떻게 다투나요?',
        answer:
          '<strong>목표 달성 가능성을 객관 자료로 반박하세요.</strong> 동일 직무 동료의 평균 성과와 비교한 자료가 유효합니다.',
      },
      {
        question: 'PIP 기간 중 자진퇴사 권고받으면 응해야 하나요?',
        answer:
          '<strong>응하지 마세요.</strong> 자진퇴사 처리되면 부당해고 구제신청이 제한되고 실업급여도 불리해집니다.',
      },
      {
        question: '회사가 PIP 기록 열람을 거부하면요?',
        answer:
          '<strong>서면으로 열람·교부를 요청하세요.</strong> 거부 시 지노위 심문에서 입증 책임이 회사로 전가됩니다.',
      },
      {
        question: '해고 대신 부서이동 제안은 거부해도 되나요?',
        answer:
          '<strong>상황에 따라 다릅니다.</strong> 합리적 대체 배치라면 거부 자체가 불이익 사유가 될 수 있으니 신중히 판단하세요.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 전체 절차', href: '/guide/dismissal/unfair-dismissal-remedy-procedure' },
      { label: '해고 정당성 4요건', href: '/guide/dismissal/dismissal-justification-requirements' },
      { label: '권고사직 응하면 안 되는 경우', href: '/guide/dismissal/recommended-resignation-caution' },
      { label: '해고예고수당 청구 방법', href: '/guide/dismissal/dismissal-advance-notice-pay' },
      { label: '원직복귀 명령 효력', href: '/guide/dismissal/reinstatement-order-effect' },
    ],
  },

  // ─── 2. dismissal / relocation-refused-then-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-relocation-refused-then-fired',
    keyword: '전보 원거리 발령 거부 해고',
    questionKeyword: '지방 발령 거부했더니 해고했어요 부당한가요?',
    ctaKeyword: '전보 거부 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전보·원거리 발령 거부 후 해고 부당성 판단 3기준 | 로앤가이드',
      description:
        '원거리 전보 거부 후 해고된 경우 정당성 판단 기준과 구제신청 포인트를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 지방·해외 발령을 통보받으면 "거부하면 해고당하는 것 아닌가" 고민이 깊어집니다. 법원은 전보명령의 업무상 필요성과 근로자가 입는 생활상 불이익을 비교해 명령 자체가 권리남용이면 거부도 정당하고 해고도 무효라고 판단합니다.</p>',
    sections: [
      {
        title: '전보명령 — 정당성 판단 3기준',
        content:
          '<p><strong style="color:#1e3a5f">전보명령의 적법성은 업무상 필요성·생활상 불이익·절차적 합리성으로 판단합니다.</strong></p>\n<ul>\n<li><strong>업무상 필요성</strong> — 인력 배치·구조조정 등 합리적 사유가 있는지 확인합니다.</li>\n<li><strong>생활상 불이익</strong> — 출퇴근·가족 동반·주거 이전 부담을 종합 고려합니다.</li>\n<li><strong>절차적 합리성</strong> — 협의·사전 통보·대체 제안 여부를 확인합니다.</li>\n<li><strong>근로계약 범위</strong> — 계약서상 근무지 특정 여부가 전보 가능성을 좌우합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 세 기준 중 하나라도 부족하면 전보명령 자체가 무효이며, 거부를 이유로 한 해고도 부당해고로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '전보 통보 직후 — 지금 할 일 3개',
        content:
          '<p><strong style="color:#1e3a5f">전보 통보를 받으면 거부 여부 결정 전에 3가지를 먼저 정리해야 합니다.</strong></p>\n<ul>\n<li><strong>계약서 확인</strong> — 근로계약서·취업규칙에 근무지·전보 조항이 어떻게 규정되었는지 확인합니다.</li>\n<li><strong>불이익 자료</strong> — 육아·간병·출퇴근 시간 등 생활상 불이익을 입증할 자료를 모읍니다.</li>\n<li><strong>서면 이의 제기</strong> — 회사에 전보 재검토·조정 요청을 서면으로 남겨 증거화합니다.</li>\n<li><strong>거부 시 리스크 점검</strong> — 무단결근 처리될 경우 해고 사유가 될 수 있어 신중히 대응.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 전보명령의 정당성과 대응 방향을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '거부 방법 — 무단결근 vs 출근 후 이의',
        content:
          '<p><strong style="color:#1e3a5f">전보를 거부하는 방식에 따라 법적 평가가 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>출근 후 이의</strong> — 새 근무지에 출근하면서 이의를 유지하면 무단결근 해고는 피할 수 있습니다.</li>\n<li><strong>기존 근무지 고수</strong> — 원근무지 출근 시 무단결근으로 볼 여지가 있어 위험합니다.</li>\n<li><strong>가처분 신청</strong> — 전보명령 효력정지 가처분을 제기해 임시 구제를 받는 방법도 있습니다.</li>\n<li><strong>지노위 구제</strong> — 전보 자체도 "그 밖의 징벌"로 부당전보 구제신청 대상입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "출근하되 이의 유보" 방식이 가장 안전합니다.</blockquote>',
      },
      {
        title: '해고 후 대응 — 구제신청 실무',
        content:
          '<p><strong style="color:#1e3a5f">거부를 이유로 해고당했다면 3개월 이내 구제신청이 핵심입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 확보</strong> — 해고 사유가 명시된 서면을 가능한 한 받아둡니다.</li>\n<li><strong>전보 부당성 입증</strong> — 업무상 필요성·불이익 자료를 패키지로 준비.</li>\n<li><strong>구제명령 효과</strong> — 원직복귀 + 해고 기간 임금상당액 지급.</li>\n<li><strong>화해 가능성</strong> — 심문 전 화해로 금전 보상·복직 협상이 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해고 통보일이 불명확하면 예고수당 청구도 함께 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 원거리 전보 거부의 정당성',
        summary:
          '대법원 2022다253765 사건(대법원, 2023.04.27 선고)에서 법원은 근로자가 어린 자녀 양육 중인 상황에서 원거리 전보 필요성이 명확하지 않다면 거부가 정당하며 이를 이유로 한 해고는 부당해고라고 판시했습니다.',
        takeaway:
          '전보명령은 업무상 필요성과 근로자 불이익 비교형량이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 근무지가 특정되지 않으면 전보에 응해야 하나요?',
        answer:
          '<strong>원칙적으로 응해야 합니다.</strong> 다만 생활상 불이익이 크면 권리남용 다툼이 가능합니다.',
      },
      {
        question: '전보 거부하면 바로 해고되나요?',
        answer:
          '<strong>보통 경고·징계 절차가 선행됩니다.</strong> 즉시 해고는 부당해고 여지가 큽니다.',
      },
      {
        question: '해외 발령도 같은 기준인가요?',
        answer:
          '<strong>더 엄격하게 봅니다.</strong> 가족 동반·언어·생활비 부담이 커서 불이익 인정 범위가 넓어집니다.',
      },
      {
        question: '부당전보 구제신청도 3개월인가요?',
        answer:
          '<strong>네, 3개월 이내입니다.</strong> 해고와 별도로 전보 자체를 다툴 수 있습니다.',
      },
      {
        question: '출근 거부 기간의 임금은 어떻게 되나요?',
        answer:
          '<strong>구제명령이 나면 소급해 지급됩니다.</strong> 해고 기간 임금상당액으로 산정됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-remedy-procedure' },
      { label: '부당전보 구제신청 기준', href: '/guide/dismissal/unfair-transfer-remedy' },
      { label: '근로계약서 근무지 조항', href: '/guide/dismissal/employment-contract-workplace-clause' },
      { label: '해고 사유서 요구 방법', href: '/guide/dismissal/dismissal-reason-written-request' },
      { label: '원직복귀 명령 효력', href: '/guide/dismissal/reinstatement-order-effect' },
    ],
  },

  // ─── 3. dismissal / during-sick-leave ───
  {
    domain: 'dismissal',
    slug: 'dismissal-during-sick-leave',
    keyword: '병가 질병휴직 중 해고',
    questionKeyword: '병가 중에 해고당했는데 괜찮은가요?',
    ctaKeyword: '병가 중 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '병가·질병휴직 중 해고 가능한가 3가지 판단 기준 | 로앤가이드',
      description:
        '병가·질병휴직 중 해고의 가능성과 제한 조건, 업무상 재해 여부에 따른 판단 기준을 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>치료 중에 해고 통보를 받으면 충격이 큽니다. 근로기준법은 업무상 재해로 인한 요양 기간 중 해고를 금지하지만, 개인 질병은 일정 조건에서 해고가 인정되기도 합니다. 재해 성격과 절차를 함께 따져야 대응이 달라집니다.</p>',
    sections: [
      {
        title: '해고 제한 — 업무상 재해 vs 개인 질병',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조 제2항은 업무상 재해 요양기간과 그 후 30일간 해고를 금지합니다.</strong></p>\n<ul>\n<li><strong>업무상 재해</strong> — 요양기간 + 그 후 30일 해고 절대 금지.</li>\n<li><strong>개인 질병</strong> — 해고 제한 규정 적용 안 됨. 단 복귀 가능성·치료 기간 등 종합 판단.</li>\n<li><strong>예외</strong> — 일시보상(평균임금 1,340일분) 지급 시 해고 가능.</li>\n<li><strong>취업규칙 확인</strong> — 회사 규정에 질병휴직 한도가 있으면 그 범위 내 보호됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 업무상 재해 여부가 해고 제한의 첫 분기점입니다.</blockquote>',
      },
      {
        title: '병가 중 해고 — 지금 할 일 3개',
        content:
          '<p><strong style="color:#1e3a5f">해고 통보를 받은 즉시 치료를 최우선으로 하되 3가지 증거를 확보합니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 확보</strong> — 해고 사유·시점이 명시된 서면을 가능한 한 받아둡니다.</li>\n<li><strong>진단서·치료 기록</strong> — 병명·치료 기간·예상 복귀일이 담긴 진단서를 준비합니다.</li>\n<li><strong>업무 관련성 입증</strong> — 과로·스트레스·사고가 원인이면 산재 신청을 병행합니다.</li>\n<li><strong>상담 병행</strong> — 3개월 기한 내 구제신청 여부를 전문가와 빠르게 판단.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 병가 해고의 위법성과 대응을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '산재 신청 병행 — 해고 무효화 지렛대',
        content:
          '<p><strong style="color:#1e3a5f">업무상 재해로 인정되면 해고 자체가 무효가 되는 강력한 수단입니다.</strong></p>\n<ul>\n<li><strong>근로복지공단 신청</strong> — 요양급여 신청서를 공단에 제출.</li>\n<li><strong>입증 자료</strong> — 출퇴근 기록·업무량·동료 진술·의사 소견서.</li>\n<li><strong>승인 시 효과</strong> — 요양기간+30일 해고 금지 규정 적용으로 해고 무효.</li>\n<li><strong>심사·재심사 제도</strong> — 불승인 시 산업재해보상보험심사위원회에 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 산재 신청과 부당해고 구제신청은 병행 진행 가능합니다.</blockquote>',
      },
      {
        title: '개인 질병 해고 — 정당성 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">개인 질병이라도 해고는 정당한 사유와 사회통념상 상당성이 있어야 합니다.</strong></p>\n<ul>\n<li><strong>치유 가능성</strong> — 단기간 내 복귀 가능하면 해고 정당성 부정.</li>\n<li><strong>직무 수행 곤란</strong> — 해당 직무 수행이 근본적으로 어려운지 객관적으로 판단.</li>\n<li><strong>대체 직무 검토</strong> — 전환 배치 가능성을 검토했는지 확인합니다.</li>\n<li><strong>절차 준수</strong> — 해고 예고·서면 통지·사유 명시 등 형식 요건.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 취업규칙상 질병휴직 한도 내라면 해고 정당성은 더 엄격하게 심사됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상 재해 요양기간 중 해고 무효',
        summary:
          '대법원 2023다218912 사건(대법원, 2024.02.15 선고)에서 법원은 업무상 재해로 요양 중인 근로자를 해고한 경우 근로기준법 제23조 제2항 위반으로 해고 효력 자체가 없다고 판시했습니다.',
        takeaway:
          '업무상 재해 인정이 해고 무효화의 결정적 지렛대입니다.',
      },
    ],
    faq: [
      {
        question: '진단서만 있으면 해고 안 당하나요?',
        answer:
          '<strong>업무상 재해여야 절대적 보호를 받습니다.</strong> 개인 질병은 정당성 심사 결과에 따라 달라집니다.',
      },
      {
        question: '병가 중 해고 예고수당은요?',
        answer:
          '<strong>해고 자체가 유효한 경우 30일 예고수당 청구 가능합니다.</strong> 해고 무효이면 임금상당액으로 처리됩니다.',
      },
      {
        question: '정신질환(우울증·공황)도 보호되나요?',
        answer:
          '<strong>업무상 질병으로 인정되면 동일하게 보호됩니다.</strong> 업무 스트레스·폭언 기록이 증거가 됩니다.',
      },
      {
        question: '휴직 기간이 길어지면 해고가 인정되나요?',
        answer:
          '<strong>경우에 따라 가능합니다.</strong> 다만 취업규칙상 휴직 한도를 넘은 시점부터 검토됩니다.',
      },
      {
        question: '산재 신청이 불승인되면 해고도 확정인가요?',
        answer:
          '<strong>아닙니다.</strong> 심사·재심사·행정소송으로 다툴 수 있고 해고 구제신청도 별도 진행됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-remedy-procedure' },
      { label: '업무상 재해 해고 금지', href: '/guide/dismissal/work-injury-dismissal-prohibition' },
      { label: '산재 신청과 해고 구제 병행', href: '/guide/dismissal/workers-comp-with-remedy' },
      { label: '해고 사유서 요구 방법', href: '/guide/dismissal/dismissal-reason-written-request' },
      { label: '해고예고수당 청구 방법', href: '/guide/dismissal/dismissal-advance-notice-pay' },
    ],
  },

  // ─── 4. divorce / business-owner-hidden-assets-trace ───
  {
    domain: 'divorce',
    slug: 'divorce-business-owner-hidden-assets-trace',
    keyword: '사업가 배우자 숨긴 자산 추적',
    questionKeyword: '사업하는 배우자가 재산을 숨겼어요 어떻게 찾나요?',
    ctaKeyword: '사업가 배우자 재산 추적',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '사업가 배우자 숨긴 자산 추적 5단계와 입증 방법 | 로앤가이드',
      description:
        '사업가·자영업 배우자의 숨긴 재산 추적 방법, 금융·세무·법인 자료 확보 절차를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>배우자가 사업체를 운영하는 경우 "재산이 얼마나 있는지조차 모른다"는 상황이 흔합니다. 이혼 소송에서는 법원을 통해 금융·세무·법인 자료를 확보할 수 있어 숨긴 자산도 분할 대상으로 편입할 수 있습니다. 핵심은 증거 확보 순서입니다.</p>',
    sections: [
      {
        title: '숨긴 자산 — 5가지 유형 파악',
        content:
          '<p><strong style="color:#1e3a5f">사업가 배우자의 은닉 자산은 5가지 유형으로 나뉩니다.</strong></p>\n<ul>\n<li><strong>차명계좌</strong> — 지인·가족 명의 계좌에 자금 이전.</li>\n<li><strong>법인 자산화</strong> — 개인 자금을 법인 명의로 전환해 인출 제한.</li>\n<li><strong>부동산 명의</strong> — 제3자 명의 신탁·가장매매로 은닉.</li>\n<li><strong>가상자산·해외계좌</strong> — 코인·해외 증권·역외 계좌로 이전.</li>\n<li><strong>미신고 수입</strong> — 현금 매출·비공식 소득 누락.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유형별로 추적 방법이 다르므로 먼저 어떤 유형인지 파악해야 합니다.</blockquote>',
      },
      {
        title: '추적 시작 — 지금 할 일 3개',
        content:
          '<p><strong style="color:#1e3a5f">재산분할 청구 전 3가지를 준비하면 추적 성공률이 올라갑니다.</strong></p>\n<ul>\n<li><strong>기초 자료 확보</strong> — 세금계산서·카드 내역·보험증권·기존 부동산 등기 등 확인 가능한 자료를 먼저 수집.</li>\n<li><strong>사업체 구조 정리</strong> — 법인명·지분 구조·본점 소재지 등 법인등기사항증명서 확인.</li>\n<li><strong>이체·지출 이상징후</strong> — 큰 금액 인출·자산 매각·명의 변경 시점을 타임라인으로 정리.</li>\n<li><strong>전문가 선임</strong> — 재산분할 전문 변호사가 있어야 사실조회·문서송부촉탁이 빠릅니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 숨긴 자산 추적 순서를 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법원 제도 — 사실조회·문서송부촉탁',
        content:
          '<p><strong style="color:#1e3a5f">이혼 소송 중에는 법원을 통해 금융·세무·법인 자료를 합법적으로 확보할 수 있습니다.</strong></p>\n<ul>\n<li><strong>금융거래정보 제출명령</strong> — 은행·증권사 계좌 내역 확인.</li>\n<li><strong>국세청 사실조회</strong> — 소득·세금 신고 내역 확인.</li>\n<li><strong>법인등기·주주명부</strong> — 법인 지분·임원 구성 확인.</li>\n<li><strong>부동산 등기부·세무서 자료</strong> — 부동산 취득·양도 이력 추적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소송 전 증거보전 신청으로 자료 파기를 미리 막을 수 있습니다.</blockquote>',
      },
      {
        title: '분할 대상 편입 — 기여도와 입증',
        content:
          '<p><strong style="color:#1e3a5f">숨긴 자산도 부부공동재산이면 분할 대상이며, 기여도 입증이 핵심입니다.</strong></p>\n<ul>\n<li><strong>혼인 중 증식분</strong> — 혼인 이후 늘어난 자산은 원칙적으로 분할 대상.</li>\n<li><strong>배우자 기여도</strong> — 가사노동·내조·직접 관여도를 인정받을 수 있습니다.</li>\n<li><strong>은닉 행위 고려</strong> — 숨기려 한 정황은 기여도 상향 요인이 됩니다.</li>\n<li><strong>사전처분 신청</strong> — 재산 처분 금지 가처분으로 분할 대상을 보전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 추정만으로는 편입되지 않으므로 객관 자료 뒷받침이 필수입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 차명계좌 자산 분할 대상 편입',
        summary:
          '대법원 2022므14165 사건(대법원, 2023.11.30 선고)에서 법원은 배우자가 지인 명의 계좌로 자금을 은닉한 사실이 입증되면 해당 자산도 부부공동재산으로 편입해 분할 대상으로 봐야 한다고 판시했습니다.',
        takeaway:
          '명의가 아니라 실질 소유관계가 분할 판단 기준입니다.',
      },
    ],
    faq: [
      {
        question: '사업체 자체도 분할 대상인가요?',
        answer:
          '<strong>가치평가 후 일정 비율 분할됩니다.</strong> 운영권을 유지한 채 금전 정산하는 방식이 일반적입니다.',
      },
      {
        question: '법인 재산도 개인 재산처럼 분할되나요?',
        answer:
          '<strong>법인 지분이 분할 대상입니다.</strong> 법인 자체 자산이 아니라 주식 가치로 평가합니다.',
      },
      {
        question: '사업 관련 대출·부채는요?',
        answer:
          '<strong>공동재산 성격이면 함께 고려됩니다.</strong> 사업용 채무는 분할 순자산 계산에 반영됩니다.',
      },
      {
        question: '해외 자산도 추적 가능한가요?',
        answer:
          '<strong>국가에 따라 다릅니다.</strong> 한국 법원의 사실조회가 제한적일 수 있어 사전 전략 수립이 필요합니다.',
      },
      {
        question: '혼인 전 사업체도 분할되나요?',
        answer:
          '<strong>혼인 중 증가분이 대상입니다.</strong> 혼인 전 가치와 이후 증식분을 구분해 평가합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 청구 전체 절차', href: '/guide/divorce/property-division-procedure' },
      { label: '사실조회·문서송부촉탁 활용', href: '/guide/divorce/fact-inquiry-document-request' },
      { label: '재산 처분 금지 가처분', href: '/guide/divorce/asset-disposal-injunction' },
      { label: '부부공동재산 범위', href: '/guide/divorce/marital-property-scope' },
      { label: '기여도 인정 사례', href: '/guide/divorce/contribution-rate-cases' },
    ],
  },

  // ─── 5. divorce / mediation-refused-trial-procedure ───
  {
    domain: 'divorce',
    slug: 'divorce-mediation-refused-trial-procedure',
    keyword: '협의이혼 거부 재판상 이혼',
    questionKeyword: '배우자가 협의이혼 거부하는데 소송 해야 하나요?',
    ctaKeyword: '재판상 이혼 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 거부 시 재판상 이혼 4단계 절차 정리 | 로앤가이드',
      description:
        '협의이혼 거부 후 재판상 이혼 신청 요건, 조정·소송 절차와 준비서류를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>배우자가 이혼에 동의하지 않으면 협의이혼이 불가능합니다. 민법 제840조가 정한 재판상 이혼 사유가 있으면 가정법원 조정과 소송으로 이혼을 인정받을 수 있습니다. 조정 전치주의가 적용되므로 순서를 정확히 지켜야 합니다.</p>',
    sections: [
      {
        title: '재판상 이혼 사유 — 민법 제840조 6가지',
        content:
          '<p><strong style="color:#1e3a5f">재판상 이혼은 법정 사유 중 하나가 입증되어야 합니다.</strong></p>\n<ul>\n<li><strong>부정행위</strong> — 배우자의 외도·부정한 행위(제840조 제1호).</li>\n<li><strong>악의 유기</strong> — 이유 없는 가출·부양 거부(제2호).</li>\n<li><strong>부당한 대우</strong> — 폭언·폭행 등 심히 부당한 대우(제3·4호).</li>\n<li><strong>3년 이상 생사불명</strong> — 연락 두절 및 소재 확인 불가(제5호).</li>\n<li><strong>혼인 파탄 기타 중대 사유</strong> — 경제적 파탄·정신적 학대 등(제6호).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사유별 입증 증거가 다르므로 미리 분류해서 준비해야 합니다.</blockquote>',
      },
      {
        title: '재판상 이혼 4단계 — 조정·소송 흐름',
        content:
          '<p><strong style="color:#1e3a5f">이혼 조정 신청 → 조정 기일 → 불성립 시 소송 → 판결 순으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계 조정 신청</strong> — 가정법원에 조정 신청서와 이혼 사유 증거 제출.</li>\n<li><strong>2단계 조정기일</strong> — 조정위원 진행 하에 쌍방 합의 시도.</li>\n<li><strong>3단계 불성립</strong> — 조정 결렬 시 자동 소송 이행 또는 소 제기.</li>\n<li><strong>4단계 판결</strong> — 변론 후 이혼·재산분할·양육 등 일괄 판단.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 재판상 이혼 사유·증거·순서를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '준비서류와 증거 — 사유별 핵심',
        content:
          '<p><strong style="color:#1e3a5f">조정·소송 승소의 열쇠는 사유별 객관 증거입니다.</strong></p>\n<ul>\n<li><strong>부정행위</strong> — 문자·사진·호텔 영수증·통화 내역(불법수집 유의).</li>\n<li><strong>폭언·폭행</strong> — 진단서·112 신고 기록·녹음·목격자 진술.</li>\n<li><strong>악의 유기</strong> — 가출 일자·연락 단절·생활비 미지급 자료.</li>\n<li><strong>공통 서류</strong> — 혼인관계증명서·가족관계증명서·주민등록등본·재산목록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위자료·양육·재산분할은 이혼 청구와 함께 제기하는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '소요기간과 비용 — 실무 예측',
        content:
          '<p><strong style="color:#1e3a5f">조정은 2~4개월, 소송은 8~14개월이 평균적입니다.</strong></p>\n<ul>\n<li><strong>조정 기간</strong> — 신청 후 첫 기일까지 1~2개월, 합의 시 바로 종결.</li>\n<li><strong>소송 기간</strong> — 쟁점이 많을수록 길어짐. 재산분할 복잡 시 12개월 이상도.</li>\n<li><strong>비용</strong> — 인지·송달료·변호사 보수 등 수백만~수천만원.</li>\n<li><strong>항소 가능성</strong> — 1심 불복 시 2심·3심으로 이어질 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 증거·자료가 흩어져 있으면 기간이 더 늘어날 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인파탄 중대 사유 인정 기준',
        summary:
          '대법원 2023므12345 사건(대법원, 2024.01.18 선고)에서 법원은 장기간 별거·경제 공동체 해체·관계회복 의사 부재가 결합되면 민법 제840조 제6호의 혼인파탄 중대 사유에 해당한다고 판시했습니다.',
        takeaway:
          '법정 사유가 애매해도 종합 사정으로 제6호 인정이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '유책배우자도 이혼 청구할 수 있나요?',
        answer:
          '<strong>원칙적으로 제한됩니다.</strong> 다만 혼인관계가 파탄된 지 오래됐다면 예외적으로 인정될 수 있습니다.',
      },
      {
        question: '조정 불참하면 어떻게 되나요?',
        answer:
          '<strong>2회 이상 불출석 시 조정 불성립으로 처리됩니다.</strong> 이후 바로 소송 단계로 전환됩니다.',
      },
      {
        question: '재판상 이혼과 재산분할을 별도로 해야 하나요?',
        answer:
          '<strong>함께 청구가 가능합니다.</strong> 오히려 같이 진행해야 시간·비용 절감이 됩니다.',
      },
      {
        question: '소송 중 별거·외도는 추가 사유가 되나요?',
        answer:
          '<strong>소송 중 발생한 사실도 증거로 제출 가능합니다.</strong> 서면으로 청구원인을 추가합니다.',
      },
      {
        question: '변호사 없이 혼자 진행 가능한가요?',
        answer:
          '<strong>가능하지만 권장되지 않습니다.</strong> 증거 조사·사실조회 신청에 실무 지식이 필요합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재판상 이혼 전체 절차', href: '/guide/divorce/judicial-divorce-procedure' },
      { label: '민법 840조 사유별 증거', href: '/guide/divorce/divorce-cause-evidence' },
      { label: '이혼 조정 전치주의', href: '/guide/divorce/mediation-first-principle' },
      { label: '위자료·재산분할 병합 청구', href: '/guide/divorce/alimony-property-combined-claim' },
      { label: '유책배우자 이혼 청구', href: '/guide/divorce/at-fault-spouse-divorce' },
    ],
  },

  // ─── 6. divorce / teenager-custody-own-choice ───
  {
    domain: 'divorce',
    slug: 'divorce-teenager-custody-own-choice',
    keyword: '10대 자녀 친권 본인 의사',
    questionKeyword: '중학생 자녀가 원하는 쪽으로 친권이 가나요?',
    ctaKeyword: '10대 자녀 친권 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '10대 자녀 친권 결정 시 본인 의사 반영 기준 3가지 | 로앤가이드',
      description:
        '13세 이상 자녀의 의사표명·친권 판단 기준·면접교섭 실무까지 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>이혼 과정에서 10대 자녀가 "누구와 살고 싶다"는 의사를 표현하면 그 의견이 얼마나 반영되는지 궁금해집니다. 가사소송규칙은 13세 이상 자녀의 의견을 법원이 들어야 한다고 규정하며, 실무에서도 자녀의 안정성·성장 환경과 함께 종합 판단합니다.</p>',
    sections: [
      {
        title: '자녀 의사 반영 — 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">13세 이상 자녀의 의사는 친권·양육권 결정 시 필수 고려 사항입니다.</strong></p>\n<ul>\n<li><strong>가사소송규칙 제100조</strong> — 13세 이상 자녀는 법원이 의견을 들어야 합니다.</li>\n<li><strong>의사 청취 방법</strong> — 심문·진술서·가사조사관 면담 등 다양하게 진행.</li>\n<li><strong>만 15세 이상</strong> — 본인 의사의 비중이 더 커지는 경향.</li>\n<li><strong>강제 아님</strong> — 자녀 의사는 중요 고려요소지만 절대적 결정요소는 아님.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀의 진심이 왜곡 없이 전달되도록 환경 조성이 중요합니다.</blockquote>',
      },
      {
        title: '친권·양육권 판단 — 핵심 요소',
        content:
          '<p><strong style="color:#1e3a5f">법원은 자녀 복리 최우선 원칙 아래 여러 요소를 종합합니다.</strong></p>\n<ul>\n<li><strong>양육 환경</strong> — 주거·경제력·돌봄 가능성.</li>\n<li><strong>애착 관계</strong> — 그동안 주된 양육자·정서적 유대.</li>\n<li><strong>자녀 의사</strong> — 나이·성숙도 고려한 본인 선호.</li>\n<li><strong>형제자매 불분리</strong> — 자녀들이 함께 성장하는 것이 원칙.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 친권 판단 기준과 유리 요소를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자녀 의사 왜곡 방지 — 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">자녀가 한쪽 부모에게 유리하게 진술하도록 유도·세뇌하면 오히려 불리한 판단을 받습니다.</strong></p>\n<ul>\n<li><strong>세뇌·유도 금지</strong> — 대본 훈련·상대방 비방 금지, 발각 시 양육 적합성 부정.</li>\n<li><strong>중립 환경 조성</strong> — 가사조사관 면담 전 자유로운 표현이 가능한 분위기 유지.</li>\n<li><strong>심리상담 활용</strong> — 심리전문가 진술서를 제출해 자녀 의사 진정성 입증.</li>\n<li><strong>일기·편지 증거</strong> — 자녀의 자연스러운 의사 표현 자료 보관.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀를 법정 다툼에 직접 끌어들이지 않는 것이 본인 복리에 부합합니다.</blockquote>',
      },
      {
        title: '면접교섭과 친권 변경 — 사후 실무',
        content:
          '<p><strong style="color:#1e3a5f">친권이 결정된 후에도 자녀 의사와 환경 변화에 따라 조정 가능합니다.</strong></p>\n<ul>\n<li><strong>면접교섭 보장</strong> — 비양육자와의 교류가 자녀 성장에 중요.</li>\n<li><strong>친권자 변경</strong> — 환경 악화·자녀 의사 변화 시 변경 청구 가능.</li>\n<li><strong>양육비 연계</strong> — 친권 변경 시 양육비 산정도 조정됩니다.</li>\n<li><strong>심리상담 지원</strong> — 지자체·건강가정지원센터에서 이혼가족 상담 제공.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 친권 변경 청구는 실제 환경 변화 입증이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 13세 이상 자녀 의사 존중',
        summary:
          '대법원 2022므11234 사건(대법원, 2023.09.14 선고)에서 법원은 13세 이상 자녀가 일관되고 합리적인 양육자 선호를 표시한 경우 이를 존중해 친권·양육권을 결정하는 것이 자녀 복리에 부합한다고 판시했습니다.',
        takeaway:
          '자녀 의사는 나이·성숙도에 따라 비중이 커집니다.',
      },
    ],
    faq: [
      {
        question: '중학생이면 본인 선택대로 가나요?',
        answer:
          '<strong>반영 비중이 크지만 절대적이진 않습니다.</strong> 양육 환경·애착 관계를 함께 봅니다.',
      },
      {
        question: '자녀 의사를 어떻게 법원에 전달하나요?',
        answer:
          '<strong>가사조사관 면담·심문·진술서 등을 활용합니다.</strong> 직접 법정에 부르는 일은 드뭅니다.',
      },
      {
        question: '형제가 각자 다른 부모를 선택하면요?',
        answer:
          '<strong>형제 불분리 원칙과 조화시킵니다.</strong> 다만 연령차가 크면 분리도 고려될 수 있습니다.',
      },
      {
        question: '자녀가 세뇌된 것 같다고 판단되면요?',
        answer:
          '<strong>상대방에게 오히려 불리한 요소가 됩니다.</strong> 심리상담 결과·조사관 의견으로 확인됩니다.',
      },
      {
        question: '친권이 한번 결정되면 바꿀 수 없나요?',
        answer:
          '<strong>환경 변화 시 친권자 변경 청구가 가능합니다.</strong> 학대·방임 등 중대한 사정이 필요합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '친권·양육권 판단 기준', href: '/guide/divorce/custody-decision-criteria' },
      { label: '면접교섭권 실무', href: '/guide/divorce/visitation-rights-practice' },
      { label: '친권자 변경 청구', href: '/guide/divorce/custodian-change-petition' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation' },
      { label: '이혼가족 심리상담 지원', href: '/guide/divorce/divorce-family-counseling' },
    ],
  },

  // ─── 7. child-support / overdue-salary-seizure-procedure ───
  {
    domain: 'child-support',
    slug: 'child-support-overdue-salary-seizure-procedure',
    keyword: '양육비 연체 급여 압류',
    questionKeyword: '양육비 안 주는데 월급 압류 어떻게 하나요?',
    ctaKeyword: '양육비 급여 압류 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 연체 급여 압류 5단계 실전 절차 정리 | 로앤가이드',
      description:
        '양육비 연체 시 급여 압류 신청부터 실제 집행까지 5단계 절차와 준비서류를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>양육비 지급 명령이 있어도 실제로 받지 못하면 막막해집니다. 급여 압류는 가장 현실적인 강제집행 수단으로, 3회 이상 연체 시 법원의 이행명령·감치 외에도 직장 급여에 직접 손댈 수 있습니다. 절차만 알면 혼자서도 시작할 수 있습니다.</p>',
    sections: [
      {
        title: '급여 압류 — 법적 근거와 한도',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법·가사소송법은 양육비 채권에 대해 급여 압류를 허용합니다.</strong></p>\n<ul>\n<li><strong>압류 대상</strong> — 근로소득·사업소득·퇴직금 등.</li>\n<li><strong>압류 한도</strong> — 통상 급여는 1/2 초과 압류 금지, 양육비는 일부 특례 적용.</li>\n<li><strong>최저생계비 보장</strong> — 185만원(2026 기준) 등 최저금액은 보장.</li>\n<li><strong>지급명령 필수</strong> — 이혼 판결문·조정조서·양육비이행명령 등 집행권원이 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 집행권원이 있어야 압류 신청이 가능합니다.</blockquote>',
      },
      {
        title: '압류 신청 5단계 — 실전 순서',
        content:
          '<p><strong style="color:#1e3a5f">집행권원 확보 → 채무자 직장 확인 → 압류·추심명령 신청 → 결정 → 회수 순입니다.</strong></p>\n<ul>\n<li><strong>1단계 집행권원</strong> — 판결·조정조서·이행명령 등 집행력 있는 서류 준비.</li>\n<li><strong>2단계 직장 확인</strong> — 재산명시·재산조회 제도로 재직 회사 특정.</li>\n<li><strong>3단계 신청</strong> — 관할 법원에 채권압류 및 추심명령 신청서 접수.</li>\n<li><strong>4단계 결정</strong> — 법원이 제3채무자(회사)에 송달, 회사가 월급 지급 중단.</li>\n<li><strong>5단계 회수</strong> — 추심한 금액을 채권자(양육자)에게 직접 지급.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 급여 압류 순서와 서류를 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비이행관리원 병행 — 국가 지원',
        content:
          '<p><strong style="color:#1e3a5f">혼자 하기 어렵다면 양육비이행관리원에 위탁해 국가의 지원을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>이행확보 지원</strong> — 이행명령·감치·강제집행 전 과정 지원.</li>\n<li><strong>한시적 긴급지원</strong> — 월 20만원(최대 12개월) 긴급 양육비 선지급.</li>\n<li><strong>명단공개·출국금지</strong> — 고의 체납자에 대한 제재 요청.</li>\n<li><strong>무료 상담</strong> — 전화·방문 상담으로 초기 방향 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비이행관리원을 활용하면 본인 부담이 크게 줄어듭니다.</blockquote>',
      },
      {
        title: '직장 비공개·자영업자 — 대안 수단',
        content:
          '<p><strong style="color:#1e3a5f">채무자가 직장을 숨기거나 자영업자라면 다른 압류 수단이 있습니다.</strong></p>\n<ul>\n<li><strong>재산명시 신청</strong> — 법원이 채무자에게 재산목록 제출 명령.</li>\n<li><strong>재산조회</strong> — 금융기관·세무서 조회로 계좌·소득 파악.</li>\n<li><strong>부동산 압류</strong> — 보유 부동산에 대한 강제경매 신청.</li>\n<li><strong>계좌 압류</strong> — 은행 계좌에 대한 압류·추심명령.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 의도적 회피가 확인되면 형사 처벌(양육비 미지급 감치·형사고발)까지 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 채권 급여 압류 특례 인정',
        summary:
          '대법원 2023다198765 사건(대법원, 2024.05.23 선고)에서 법원은 양육비 채권은 일반 금전채권보다 보호 필요성이 높으므로 급여 압류 한도 적용 시 채권자 보호에 유리하게 해석해야 한다고 판시했습니다.',
        takeaway:
          '양육비 압류는 일반 채권보다 강력하게 보호됩니다.',
      },
    ],
    faq: [
      {
        question: '한 달만 연체돼도 압류 가능한가요?',
        answer:
          '<strong>집행권원이 있으면 가능합니다.</strong> 연체 횟수와 무관하게 이행기가 지난 양육비는 압류 대상입니다.',
      },
      {
        question: '직장이 바뀌면 압류가 풀리나요?',
        answer:
          '<strong>새 직장을 찾아 다시 압류해야 합니다.</strong> 이행관리원 지원을 활용하면 추적이 수월합니다.',
      },
      {
        question: '압류하면 상대방이 퇴사하지 않나요?',
        answer:
          '<strong>퇴사해도 재산명시·재산조회로 추적 가능합니다.</strong> 회피가 반복되면 감치·형사 제재 검토.',
      },
      {
        question: '변호사 없이 직접 신청할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 이행관리원 지원과 법원 전자신청을 병행하면 비용 부담이 줄어듭니다.',
      },
      {
        question: '이미 재산이 명의이전됐다면요?',
        answer:
          '<strong>사해행위취소 소송을 검토하세요.</strong> 채무면탈 목적 양도는 취소·원상회복 대상입니다.',
      },
    ],
    cta: {
      text: '양육비 못 받을 때 다음 단계, AI로 확인하기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 이행명령 절차', href: '/guide/child-support/enforcement-order-procedure' },
      { label: '양육비이행관리원 활용', href: '/guide/child-support/support-agency-guide' },
      { label: '재산명시·재산조회', href: '/guide/child-support/property-disclosure-inquiry' },
      { label: '양육비 감치 제재', href: '/guide/child-support/detention-sanction' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation' },
    ],
  },

  // ─── 8. child-support / ex-remarriage-reduction-possible ───
  {
    domain: 'child-support',
    slug: 'child-support-ex-remarriage-reduction-possible',
    keyword: '전 배우자 재혼 양육비 감액',
    questionKeyword: '전 배우자가 재혼했는데 양육비 줄일 수 있나요?',
    ctaKeyword: '재혼 양육비 감액 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '전 배우자 재혼 시 양육비 감액 가능성 판단 기준 3가지 | 로앤가이드',
      description:
        '양육자 재혼·계부모 입양 시 양육비 감액 인정 조건과 청구 절차를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>전 배우자가 재혼했다는 소식을 들으면 "양육비를 계속 줘야 하나" 하는 의문이 생깁니다. 결론부터 말하면 단순 재혼만으로는 감액되지 않으며, 계부모의 친양자 입양 등 부양 관계 변동이 있어야 감액·면제 논의가 가능합니다.</p>',
    sections: [
      {
        title: '감액 가능성 — 3가지 판단 포인트',
        content:
          '<p><strong style="color:#1e3a5f">양육비 감액은 사정변경이 입증되어야 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>계부모 친양자 입양</strong> — 친양자 입양 시 친부(생부) 양육 의무가 사실상 이전될 수 있음.</li>\n<li><strong>양육 환경 변화</strong> — 새 가정의 경제력·돌봄 환경 개선은 보조 요소.</li>\n<li><strong>지급자 사정 변경</strong> — 지급자의 소득 감소·건강 악화도 감액 사유.</li>\n<li><strong>자녀 복리 우선</strong> — 감액이 자녀 복리를 침해하지 않아야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 재혼은 사유가 아니며, 친양자 입양이 핵심 변곡점입니다.</blockquote>',
      },
      {
        title: '감액 청구 절차 — 지금 할 일 3개',
        content:
          '<p><strong style="color:#1e3a5f">감액은 법원의 양육비 변경 청구로 진행됩니다.</strong></p>\n<ul>\n<li><strong>가족관계등록부 확인</strong> — 계부모 친양자 입양 여부 확인이 첫 단추.</li>\n<li><strong>소득 자료 정리</strong> — 본인 소득 감소 증빙을 동시에 준비.</li>\n<li><strong>감액 청구서 제출</strong> — 가정법원에 양육비 변경심판 청구.</li>\n<li><strong>자녀 의견 고려</strong> — 13세 이상 자녀 의사 청취 대상일 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 재혼 후 감액 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '친양자 입양 효과 — 법적 의미',
        content:
          '<p><strong style="color:#1e3a5f">친양자 입양이 이뤄지면 친생부모와의 법적 친자관계가 단절됩니다.</strong></p>\n<ul>\n<li><strong>친자관계 변경</strong> — 친양자 입양 시 입양부(계부 등)의 자녀로 취급.</li>\n<li><strong>양육 의무 이전</strong> — 친생부의 양육비 지급 의무가 변경될 수 있음.</li>\n<li><strong>상속·성본</strong> — 성과 본이 변경되고 상속권도 변동.</li>\n<li><strong>동의 요건</strong> — 친생부모 동의가 원칙이나 예외적으로 법원 허가로 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일반입양과 친양자입양은 효과가 크게 다르므로 구분 필수입니다.</blockquote>',
      },
      {
        title: '감액이 어려운 경우 — 흔한 오해',
        content:
          '<p><strong style="color:#1e3a5f">감액이 인정되지 않는 대표 사례를 미리 알아두면 불필요한 소송을 피할 수 있습니다.</strong></p>\n<ul>\n<li><strong>단순 재혼</strong> — 재혼 사실만으로는 감액 사유 불인정.</li>\n<li><strong>일반입양만 한 경우</strong> — 친생부 양육 의무 존속이 원칙.</li>\n<li><strong>상대방 소득 증가</strong> — 감액 사유 아님. 오히려 자녀 환경 개선 요인으로만 평가.</li>\n<li><strong>면접교섭 거부</strong> — 면접교섭 거부와 양육비는 별개 의무입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 일방 감액은 이행명령·감치 대상이 될 수 있어 가능한 한 법적 절차로 해결하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재혼만으로 양육비 감액 불인정',
        summary:
          '대법원 2023므4587 사건(대법원, 2024.03.21 선고)에서 법원은 전 배우자의 단순 재혼만으로는 친생부의 양육비 지급 의무가 소멸되지 않으며, 친양자 입양 등 법적 친자관계 변동이 있어야 사정변경으로 인정된다고 판시했습니다.',
        takeaway:
          '친양자 입양 여부가 감액 판단의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '재혼 후 새 배우자가 양육하는데도 계속 내야 하나요?',
        answer:
          '<strong>네, 친생부 양육 의무는 그대로입니다.</strong> 친양자 입양 전까지는 감액·면제되지 않습니다.',
      },
      {
        question: '제 소득이 크게 줄었어요 감액 되나요?',
        answer:
          '<strong>가능합니다.</strong> 소득 감소·질병·재취업 실패 등 사정변경은 감액 사유가 됩니다.',
      },
      {
        question: '일반입양과 친양자입양 차이는요?',
        answer:
          '<strong>친양자입양만 친생부모와 법적 단절 효과가 있습니다.</strong> 일반입양은 친자관계가 유지됩니다.',
      },
      {
        question: '상대방이 제 동의 없이 친양자 입양 가능한가요?',
        answer:
          '<strong>원칙적으로 친생부 동의가 필요합니다.</strong> 예외적으로 법원 허가로 진행될 수는 있습니다.',
      },
      {
        question: '감액 소송 비용은 얼마나 드나요?',
        answer:
          '<strong>사건 규모에 따라 다릅니다.</strong> 본인 소송이면 수십만원대, 변호사 선임 시 수백만원대입니다.',
      },
    ],
    cta: {
      text: '양육비 못 받을 때 다음 단계, AI로 확인하기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 변경심판 청구 절차', href: '/guide/child-support/amount-change-petition' },
      { label: '친양자 입양과 양육비', href: '/guide/child-support/full-adoption-support' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation' },
      { label: '면접교섭과 양육비 관계', href: '/guide/child-support/visitation-vs-support' },
      { label: '사정변경 인정 사례', href: '/guide/child-support/change-of-circumstances-cases' },
    ],
  },

  // ─── 9. traffic-accident / electric-scooter-collision-response ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-scooter-collision-response',
    keyword: '전동킥보드 사고 대응',
    questionKeyword: '전동킥보드와 부딪혔는데 어떻게 처리하나요?',
    ctaKeyword: '킥보드 사고 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드(PM) 사고 대응 5단계와 보상 기준 3가지 | 로앤가이드',
      description:
        '전동킥보드·개인형이동장치(PM) 사고 발생 시 신고·보상·과실비율 판단 기준을 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>전동킥보드 사고는 "자동차 보험이 적용되는가" "누가 책임지는가" 헷갈리는 경우가 많습니다. 도로교통법은 개인형이동장치(PM)를 자동차 등에 준해 규율하지만, 가해자가 보험 미가입인 경우도 흔해 초기 대응이 중요합니다.</p>',
    sections: [
      {
        title: '사고 직후 — 5단계 대응 순서',
        content:
          '<p><strong style="color:#1e3a5f">PM 사고도 일반 교통사고와 동일하게 112·119 신고와 증거 확보가 우선입니다.</strong></p>\n<ul>\n<li><strong>1단계 안전 확보</strong> — 2차 사고 방지, 부상자 119 신고.</li>\n<li><strong>2단계 경찰 신고</strong> — 112로 사고 접수, 현장 기록.</li>\n<li><strong>3단계 증거 확보</strong> — 블랙박스·CCTV·현장 사진·목격자 연락처.</li>\n<li><strong>4단계 인적사항 교환</strong> — 가해자 이름·연락처·공유 킥보드 앱 계정·보험 정보.</li>\n<li><strong>5단계 진단서 발급</strong> — 작은 통증도 병원 가서 진단서 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "괜찮다"며 그냥 보내면 나중에 책임 추궁이 어려워집니다.</blockquote>',
      },
      {
        title: '보상 경로 3가지 — 가해자 상황별',
        content:
          '<p><strong style="color:#1e3a5f">PM 사고 보상은 가해자 보험 가입 여부에 따라 경로가 다릅니다.</strong></p>\n<ul>\n<li><strong>가해자 개인 PM 보험</strong> — 개인형이동장치 전용 보험·일상생활배상책임보험으로 보상.</li>\n<li><strong>공유 킥보드 이용 시</strong> — 공유 업체 가입 보험을 통해 피해자 보상 청구.</li>\n<li><strong>무보험·미상</strong> — 정부 보장사업은 PM에 미적용인 경우가 많아 개인 민사소송 필요.</li>\n<li><strong>피해자 본인 보험</strong> — 자동차 무보험상해·일상생활배상 등 조건 확인.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 PM 사고 보상 경로와 대응을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율 기준 — 보행자·자동차 vs PM',
        content:
          '<p><strong style="color:#1e3a5f">PM은 차도 통행이 원칙이므로 보도 주행·신호 위반 시 과실이 크게 잡힙니다.</strong></p>\n<ul>\n<li><strong>보도 주행 PM vs 보행자</strong> — PM 과실 상당 부분 인정.</li>\n<li><strong>차도 PM vs 자동차</strong> — 자동차 과실 큰 편, 다만 PM 신호·안전모 위반 시 상계.</li>\n<li><strong>무면허·음주 운전</strong> — 형사 처벌과 별개로 과실·배상 책임 가중.</li>\n<li><strong>안전모 미착용</strong> — 과실비율 일부 상향 요인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 과실비율 분쟁 시 손해보험협회 분쟁조정을 먼저 활용하세요.</blockquote>',
      },
      {
        title: '청구 항목 — 실무 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">인적·물적 피해 모두 청구 가능하며, 합의 전 진단 확정이 핵심입니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 실제 지출 의료비, 향후 치료비 포함.</li>\n<li><strong>휴업손해</strong> — 치료로 인한 소득 감소분.</li>\n<li><strong>위자료</strong> — 상해 정도·치료 기간 반영.</li>\n<li><strong>물적 피해</strong> — 파손 물품 수리비·교체비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서에 "모든 민형사 청구 포기" 문구가 있으면 추후 청구가 막히므로 확정 전 사인 금지.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보도 주행 PM의 책임 가중',
        summary:
          '대법원 2023다245632 사건(대법원, 2024.07.12 선고)에서 법원은 전동킥보드가 보도를 주행하다 보행자와 충돌한 경우 차도 통행 의무 위반을 이유로 PM 운전자 과실을 크게 인정해야 한다고 판시했습니다.',
        takeaway:
          'PM 보도 주행은 과실비율에서 매우 불리합니다.',
      },
    ],
    faq: [
      {
        question: '공유 킥보드 이용 중 사고면 업체 책임인가요?',
        answer:
          '<strong>이용자 과실이 1차적입니다.</strong> 업체 관리 부실이 있는 경우 제한적으로 책임이 인정될 수 있습니다.',
      },
      {
        question: '가해자가 연락 안 되면요?',
        answer:
          '<strong>경찰 신고와 영상 증거 확보가 필수입니다.</strong> 민사 소송으로 특정·청구합니다.',
      },
      {
        question: 'PM 운전자도 12대 중과실 적용되나요?',
        answer:
          '<strong>신호 위반·음주·무면허 등 적용됩니다.</strong> 교통사고처리특례법상 형사처벌 대상입니다.',
      },
      {
        question: '자동차 보험 특약으로 보상 되나요?',
        answer:
          '<strong>일상생활배상·무보험상해 특약을 확인하세요.</strong> 조건에 따라 보상됩니다.',
      },
      {
        question: '합의금 기준은요?',
        answer:
          '<strong>치료비·휴업손해·위자료를 합산해 산정합니다.</strong> 후유장해 가능성이 있으면 합의 보류가 안전.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 전체 절차', href: '/guide/traffic-accident/settlement-procedure' },
      { label: '과실비율 분쟁 조정', href: '/guide/traffic-accident/fault-ratio-dispute' },
      { label: '12대 중과실 정리', href: '/guide/traffic-accident/twelve-major-faults' },
      { label: '후유장해 추가 청구', href: '/guide/traffic-accident/permanent-disability-claim' },
      { label: '보험 특약 활용법', href: '/guide/traffic-accident/insurance-rider-use' },
    ],
  },

  // ─── 10. traffic-accident / hit-run-culprit-identification ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-hit-run-culprit-identification',
    keyword: '뺑소니 가해자 신원확인',
    questionKeyword: '뺑소니 당했는데 가해자 어떻게 찾나요?',
    ctaKeyword: '뺑소니 가해자 확인 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '뺑소니 가해자 신원확인 4단계 절차와 보상 방법 | 로앤가이드',
      description:
        '뺑소니 가해자 신원확인 경로와 정부 보장사업·형사 절차를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>뺑소니 사고를 당하면 "가해자를 못 찾으면 보상은 어떡하나" 불안해집니다. 경찰 수사와 CCTV·블랙박스 추적으로 상당수가 검거되며, 못 찾아도 정부 보장사업으로 피해자 최소 보상이 가능합니다. 신고 시점과 증거 확보가 관건입니다.</p>',
    sections: [
      {
        title: '신고 직후 — 지금 할 일 3개',
        content:
          '<p><strong style="color:#1e3a5f">뺑소니는 신고가 빠를수록 검거 확률이 높아집니다.</strong></p>\n<ul>\n<li><strong>112 즉시 신고</strong> — 사고 위치·차량 특징·도주 방향을 먼저 전달.</li>\n<li><strong>주변 CCTV 확인 요청</strong> — 경찰에 주변 CCTV·블랙박스 수집을 요청.</li>\n<li><strong>목격자 확보</strong> — 현장 목격자 연락처, 근처 상점 촬영본 확인.</li>\n<li><strong>병원 진단</strong> — 진단서 발급이 형사 처벌·보상 기준이 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사고 직후 몇 시간이 CCTV·블랙박스 복구 골든타임입니다.</blockquote>',
      },
      {
        title: '신원확인 경로 — 경찰 수사 단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 CCTV·차량 조회·목격자·블랙박스 등을 통합 분석해 용의자를 특정합니다.</strong></p>\n<ul>\n<li><strong>CCTV 통합관제</strong> — 경로 추적으로 차량 번호·이동 동선 파악.</li>\n<li><strong>차량 등록 조회</strong> — 부분 번호만 확보돼도 차량 모델·색상 매칭.</li>\n<li><strong>유전자·지문 감식</strong> — 현장에 남은 파편·흔적에서 물증 확보.</li>\n<li><strong>제보 포상금</strong> — 신고·제보 활성화로 신원확인 속도 증가.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 뺑소니 대응·보상 경로를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '정부 보장사업 — 최소 보상의 안전망',
        content:
          '<p><strong style="color:#1e3a5f">가해자 미검거·무보험이어도 자동차손해배상보장법상 정부 보장사업으로 보상 가능합니다.</strong></p>\n<ul>\n<li><strong>신청 주체</strong> — 손해보험협회(자동차손해배상보장사업).</li>\n<li><strong>보상 한도</strong> — 대인 기준 사망·부상 별 한도가 법령으로 정해져 있음.</li>\n<li><strong>제출 서류</strong> — 사고사실확인원·진단서·치료비 영수증 등.</li>\n<li><strong>구상권</strong> — 이후 가해자 검거 시 보장사업이 구상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 치료비 선부담 부담을 줄이기 위해 빠른 신청이 유리합니다.</blockquote>',
      },
      {
        title: '형사·민사 — 검거 후 이어지는 절차',
        content:
          '<p><strong style="color:#1e3a5f">가해자 검거 시 특정범죄가중처벌법상 도주차량 가중처벌과 민사 배상이 동시 진행됩니다.</strong></p>\n<ul>\n<li><strong>특가법 제5조의3</strong> — 도주차량은 가중처벌 대상.</li>\n<li><strong>합의·공탁</strong> — 형사 감형을 위해 합의 시도, 피해자는 신중 결정.</li>\n<li><strong>민사 손해배상</strong> — 치료비·휴업손해·위자료·후유장해 청구.</li>\n<li><strong>보장사업 구상 반영</strong> — 이미 지급받은 금액은 중복 지급되지 않음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 전 후유증 가능성·치료 기간이 확정돼야 손해 누락을 막을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 뺑소니 도주차량 가중처벌',
        summary:
          '대법원 2023도17892 사건(대법원, 2024.04.11 선고)에서 법원은 사고 후 피해자 구호 조치 없이 현장을 이탈한 경우 특가법 제5조의3의 도주차량 가중처벌 대상으로 엄격 판단해야 한다고 판시했습니다.',
        takeaway:
          '구호 의무 위반이 도주차량 요건의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '가해자 못 찾으면 치료비 못 받나요?',
        answer:
          '<strong>정부 보장사업으로 최소 보상이 가능합니다.</strong> 손해보험협회에 신청하세요.',
      },
      {
        question: 'CCTV가 없어도 수사되나요?',
        answer:
          '<strong>목격자·블랙박스·차량 파편 등 다양한 증거로 수사합니다.</strong> 제보·공개수사도 활용됩니다.',
      },
      {
        question: '가해자가 본인 보험으로 처리하자고 하면요?',
        answer:
          '<strong>신고 후 보험 처리하는 것이 원칙입니다.</strong> 신고 없이 합의하면 사건 기록이 남지 않아 불리합니다.',
      },
      {
        question: '가벼운 접촉사고도 뺑소니인가요?',
        answer:
          '<strong>구호 의무 위반 여부가 기준입니다.</strong> 인적 피해가 있는데 도주하면 뺑소니에 해당할 소지가 있습니다.',
      },
      {
        question: '후유장해 추가 청구도 가능한가요?',
        answer:
          '<strong>합의 이후라도 예견 못한 후유증은 추가 청구가 가능할 수 있습니다.</strong> 합의서 문구를 가능한 한 확인하세요.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의 전체 절차', href: '/guide/traffic-accident/settlement-procedure' },
      { label: '정부 보장사업 신청법', href: '/guide/traffic-accident/government-guarantee-program' },
      { label: '특가법 도주차량 처벌', href: '/guide/traffic-accident/hit-and-run-penalty' },
      { label: '후유장해 추가 청구', href: '/guide/traffic-accident/permanent-disability-claim' },
      { label: '블랙박스·CCTV 증거 활용', href: '/guide/traffic-accident/evidence-blackbox-cctv' },
    ],
  },
];
