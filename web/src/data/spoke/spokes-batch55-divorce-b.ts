import { SpokePage } from '../spoke-pages';

// batch55 divorce-b 2개:
// 1. 협의이혼 후 양육비 미지급 → 변경청구 + 이행명령 5단계 회수 트랙 (가사소송법 제64조 + 양육비이행법)
// 2. 사실혼 종료 시 재산분할·위자료 인정 범위 (사실혼 재산분할 가능, 상속은 불가, 2년 제척기간)
//
// 고유 존재 이유:
// 1. 이 페이지는 협의이혼 후 양육비 합의서를 작성했으나 비양육친이 미지급하는 상황에서 양육비 변경청구 + 직접지급명령 + 이행명령 + 감치 + CSA 추심까지 5단계 회수 흐름을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 사실혼 관계가 일방적 파기·이별로 종료된 후 동거기간 형성 자산에 대한 재산분할·위자료를 청구하려는 당사자가 인정 범위·2년 제척기간·상속 불가 한계를 정리하도록 돕는 페이지다.

export const spokesBatch55DivorceB: SpokePage[] = [
  // ─── 1. divorce / after-agreement-child-support-unpaid-modification ───
  {
    domain: 'divorce',
    slug: 'divorce-after-agreement-child-support-unpaid-modification',
    keyword: '협의이혼 후 양육비 미지급 변경청구 이행명령',
    questionKeyword: '협의이혼할 때 양육비 합의했는데 안 줍니다. 변경하거나 강제집행할 수 있나요?',
    ctaKeyword: '협의이혼 후 양육비 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 후 양육비 미지급 5단계 회수 | 로앤가이드',
      description:
        '협의이혼 후 양육비를 받지 못하고 있다면, 양육비 변경청구·직접지급명령·이행명령·감치·이행관리원 추심 5단계 회수 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"협의이혼할 때 매달 70만 원씩 양육비 받기로 합의서까지 썼는데, 1년 넘게 한 번도 안 보내요. 아이 학원비·병원비 다 제가 떠안고 있어요. 합의서만 가지고 강제집행 되는 건가요?" 협의이혼 양육비 합의서는 가정법원 협의이혼의사확인 절차에서 확인받은 양육비부담조서가 있어야 집행권원이 됩니다. 합의서만 있고 양육비부담조서가 없거나, 합의 후 사정이 바뀌어 금액·지급방식 조정이 필요하면 양육비 변경 심판부터 진행해야 해요. 집행권원을 확보한 뒤에는 직접지급명령(가사소송법 제63조의2) → 이행명령(제64조) → 감치명령(제68조) → 양육비이행관리원 추심까지 단계별 회수 트랙이 마련돼 있습니다.</p>',
    sections: [
      {
        title: '협의이혼 후 양육비 회수 — 4가지 핵심 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">합의서만 있다고 바로 강제집행되지 않습니다. 집행권원 확보가 우선.</strong></p>\n<ul>\n<li><strong>양육비부담조서 = 집행권원</strong> — 가정법원 협의이혼의사확인 시 작성하는 양육비부담조서가 가사소송법 제41조에 따라 집행력 있는 집행권원. 이걸 근거로 강제집행 가능.</li>\n<li><strong>합의서만 있고 조서 없으면 변경 심판 필요</strong> — 협의서만 받아 둔 경우 가정법원에 양육비 변경(또는 산정) 심판 청구를 통해 집행권원 확보 후 강제집행 검토.</li>\n<li><strong>사정변경 시 변경청구 가능</strong> — 양육친·비양육친의 소득·재산 변동, 자녀 진학·치료비 증가 등 사정변경이 있으면 양육비 증액·감액 청구 가능(민법 제837조).</li>\n<li><strong>5단계 회수 트랙 작동</strong> — 직접지급명령(급여 압류) → 담보제공명령 → 이행명령(과태료) → 감치(최대 30일) → 양육비이행관리원 추심·제재까지 단계적 압박.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비는 자녀의 권리. 합의서만 있으면 집행권원부터 정리, 사정 바뀌었으면 변경 심판부터 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육비 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">집행권원 확보·직접지급·이행명령·감치·이행관리원 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원 정리 (1~2개월)</strong> — 양육비부담조서 사본 발급. 조서 없으면 가정법원 양육비 심판·변경 청구로 집행권원 확보.</li>\n<li><strong>2단계 — 양육비 직접지급명령 (가사소송법 제63조의2, 1~2개월)</strong> — 비양육친이 정기적 급여 소득자라면 사용자에게 직접 양육비 지급하도록 명령. 미지급 1회만 있어도 신청 가능.</li>\n<li><strong>3단계 — 이행명령 (가사소송법 제64조, 2~3개월)</strong> — 정당한 이유 없이 미이행 시 1천만 원 이하 과태료(제67조). 위반 시 다음 단계.</li>\n<li><strong>4단계 — 감치명령 (가사소송법 제68조)</strong> — 이행명령 후 3기 이상 양육비 미이행 시 30일 이내 감치 신청 가능.</li>\n<li><strong>5단계 — 양육비이행관리원 추심·제재 (양육비이행법)</strong> — 운전면허 정지, 출국금지, 명단공개, 형사처벌까지 검토. 한시적 양육비 긴급지원도 신청 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">집행권원 상태별 다음 단계를 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 양육비 회수 신청 7가지',
        content:
          '<p><strong style="color:#1e3a5f">단계별로 어떤 서류가 필요한지 미리 정리합니다.</strong></p>\n<ul>\n<li><strong>1. 양육비부담조서 또는 심판문</strong> — 가정법원 발급. 협의이혼확인서·심판문 정본·송달증명·확정증명.</li>\n<li><strong>2. 가족관계·혼인관계증명서</strong> — 자녀의 부모 관계와 친권자·양육자 지정 확인.</li>\n<li><strong>3. 미지급 사실 입증 자료</strong> — 입금내역(없음 사실 포함), 문자·카톡 독촉 기록, 내용증명 사본.</li>\n<li><strong>4. 비양육친 재산·소득 자료</strong> — 직접지급명령용으로 사용자(회사)명·주소·재직증명. 소득은 사실조회 신청으로 확보 가능.</li>\n<li><strong>5. 자녀 양육 비용 자료</strong> — 학원비·치료비·돌봄비 영수증. 변경청구 시 증액 사유 자료로 활용.</li>\n<li><strong>6. 양육비이행관리원 신청서</strong> — 양육비이행관리원(1644-6621) 홈페이지에서 양식 다운 + 한시적 긴급지원 신청서.</li>\n<li><strong>7. 본인 재산·소득 자료</strong> — 한시적 긴급지원 신청 시 양육친 재산·소득 기준 충족 자료 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서만 있고 양육비부담조서가 없는 경우, 가정법원에 양육비 심판 청구부터 진행해야 강제집행 길이 열립니다. 양육비이행관리원이 무료 법률지원·소송대리도 제공하니 먼저 상담을 받아보시는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 협의이혼 후 양육비 회수에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"합의서만 있으면 바로 압류된다"는 오해</strong> — 가정법원 양육비부담조서가 있어야 집행권원. 합의서만 있으면 우선 변경·산정 심판으로 집행권원부터 확보 검토.</li>\n<li><strong>이행명령 단계 건너뛰고 바로 감치 신청</strong> — 가사소송법 제68조는 이행명령 후 3기 이상 미이행 요건 충족 시에만 감치 신청 가능. 단계 건너뛰면 기각.</li>\n<li><strong>변경청구 시점 늦추기</strong> — 사정변경(소득·재산·자녀 비용)이 있는데 변경청구를 미루면, 과거 미지급분 회수만 가능하고 미래분 증액은 청구 시점부터 인정되는 사례가 많음.</li>\n<li><strong>한시적 긴급지원 미신청</strong> — 양육비이행관리원의 한시적 긴급지원(최대 12개월)을 신청 안 하고 이행명령만 기다리는 경우. 채무자 상환 후 사후정산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 양육비이행관리원 1644-6621 / 사선 변호사 조력은 변경청구 + 5단계 회수 일괄 진행에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 분담 의무와 과거 양육비 상환 청구',
        summary:
          '대법원 2023므637 사건(대법원, 2024.10.08 선고)에서 법원은 부모 중 어느 한쪽만이 자녀를 양육하게 된 경우, 양육하는 일방은 상대방에 대하여 현재 및 장래의 양육비 중 적정 금액의 분담을 청구할 수 있을 뿐만 아니라 이미 지출한 과거 양육비에 대해서도 상대방이 분담함이 상당하다고 인정되는 부분의 상환을 청구할 수 있다는 취지로 판시했습니다. 협의이혼 시 합의한 양육비를 받지 못한 경우에도, 사정변경에 따른 변경 청구뿐 아니라 미지급된 과거 양육비 회수 트랙을 동시에 검토할 수 있다는 시사점이 있어 양육비 회수 전략 설계 시 참고할 수 있습니다.',
        takeaway: '과거 미지급 양육비도 상환 청구 대상이 될 수 있으므로, 직접지급명령·이행명령·감치 트랙과 함께 과거분 회수 청구를 일괄 검토해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼 합의서만 있고 양육비부담조서가 없으면 강제집행 안 되나요?',
        answer:
          '<strong>가정법원 양육비부담조서가 집행권원이 되므로 합의서만 있으면 우선 양육비 심판·변경 청구로 집행권원을 확보하는 절차를 검토하실 수 있습니다.</strong> 양육비이행관리원 무료 법률지원으로 신청 가능.',
      },
      {
        question: '이행명령 후 얼마나 미지급되어야 감치명령 신청이 가능한가요?',
        answer:
          '<strong>가사소송법 제68조에 따라 이행명령 후 3기 이상 양육비 미이행 시 감치 신청이 가능합니다.</strong> 감치는 최대 30일까지. 단계 건너뛰면 기각되니 직접지급명령 → 이행명령 → 감치 순서를 지키는 것이 좋습니다.',
      },
      {
        question: '양육비이행관리원에서 어떤 도움을 받을 수 있나요?',
        answer:
          '<strong>양육비이행관리원(1644-6621)은 무료 법률지원·소송대리·추심·한시적 긴급지원(최대 12개월)을 제공합니다.</strong> 운전면허 정지·출국금지·명단공개 같은 제재조치도 신청 가능. 채무자 상환 후 사후정산 구조.',
      },
      {
        question: '양육비를 못 받은 지 5년 넘었습니다. 청구할 수 있나요?',
        answer:
          '<strong>이미 확정된 양육비 채권은 민법 제165조에 따라 10년 시효가 적용되는 사례가 많습니다.</strong> 다만 정기금채권 일부는 단기 시효 검토 필요. 시효 도래 전 가압류·이행명령 등으로 시효 중단을 검토하는 것이 좋습니다.',
      },
      {
        question: '양육비 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)·양육비이행관리원(1644-6621)·한국가정법률상담소(1644-7077)에서 무료 상담을 받아보실 수 있습니다.</strong> 사선 변호사는 변경청구 + 5단계 회수 일괄 진행 설계에서 효과 큼.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '이혼 후 양육비 미지급 통합 절차', href: '/guide/divorce/divorce-post-divorce-child-support-non-payment-full-procedure' },
      { label: '양육비 변경청구 사유', href: '/guide/child-support/child-support-modification-grounds' },
      { label: '양육비 직접지급명령', href: '/guide/child-support/child-support-direct-payment-order-process' },
      { label: '양육비 이행명령·감치', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비이행관리원 신청', href: '/guide/child-support/child-support-agency-application' },
    ],
  },

  // ─── 2. divorce / de-facto-marriage-property-division-scope ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-marriage-property-division-scope',
    keyword: '사실혼 재산분할 위자료 인정 범위',
    questionKeyword: '사실혼 관계 끝났는데 같이 모은 재산·위자료 어디까지 청구할 수 있나요?',
    ctaKeyword: '사실혼 종료 재산분할 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사실혼 종료 시 재산분할과 위자료 5가지 정리 | 로앤가이드',
      description:
        '사실혼 관계가 종료된 후 재산분할·위자료를 청구하려 한다면, 인정 범위·2년 제척기간·상속 불가 한계 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"7년 동안 동거하면서 같이 집 사고 살림 차렸는데, 어느 날 갑자기 짐 싸서 나가버렸어요. 혼인신고는 안 한 사실혼이라고 들었는데, 같이 모은 재산이나 정신적 손해는 청구할 수 있나요?" 사실혼은 혼인신고만 없을 뿐 부부공동생활의 실질을 갖춘 관계로, 일방의 부당한 파기 시 재산분할청구권과 위자료청구권이 모두 인정될 수 있습니다(대법원 2020스561 외). 다만 상속권은 인정되지 않고, 재산분할 청구는 사실혼 해소일로부터 2년 제척기간이 적용됩니다(민법 제839조의2 제3항). 동거 시작·종료 시점, 공동재산 형성·기여 입증 자료, 부당파기 사유 자료를 정리해두면 청구 설계가 수월해집니다.</p>',
    sections: [
      {
        title: '사실혼 종료 시 청구 가능 범위 — 4가지 핵심 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">사실혼은 혼인의 실질이 있을 때만 인정되며, 청구 범위에 한계가 있습니다.</strong></p>\n<ul>\n<li><strong>사실혼 성립 요건</strong> — 혼인의사 합치 + 부부공동생활의 실질(주소·생활비·친지 인사 등) 모두 인정. 단순 동거·연인관계는 사실혼 아님.</li>\n<li><strong>재산분할 청구 가능</strong> — 동거 중 공동으로 형성·유지한 재산은 분할 대상. 일방 명의여도 협력·기여 입증되면 분할 검토(대법원 2020스561 외).</li>\n<li><strong>위자료 청구 가능</strong> — 일방의 부당한 파기·외도·폭행이 인정되면 정신적 손해배상 청구. 단정형 금액 어려움, 사례에 따라 검토.</li>\n<li><strong>상속권 불인정</strong> — 일방 사망 시 사실혼 배우자는 민법상 상속인 아님. 단, 사망 전 형성된 공동재산에 대한 재산분할 청구권 행사 가능 여부는 별도 쟁점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼이라도 재산분할·위자료는 부부와 유사하게 청구 가능. 다만 상속은 별도 트랙이고, 2년 제척기간은 엄격.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사실혼 종료 후 재산분할 5단계',
        content:
          '<p><strong style="color:#1e3a5f">사실혼 입증·자료 수집·조정·심판·집행 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 입증 자료 수집 (1~2개월)</strong> — 동거 시작·종료 시점, 주민등록 동일 주소, 생활비 입출금, 가족·지인 증언, 결혼식·예단·청첩장.</li>\n<li><strong>2단계 — 공동재산 자료 정리 (1~2개월)</strong> — 부동산 등기부, 예금·주식 잔고, 차량 등록, 일방 명의여도 자금 출처·기여도 자료.</li>\n<li><strong>3단계 — 가정법원 사실혼 해소·재산분할 청구 (조정전치)</strong> — 사실혼 부당파기 위자료 + 재산분할 병합 청구. 조정 불성립 시 심판.</li>\n<li><strong>4단계 — 재산명시·재산조회 (2~3개월)</strong> — 가사소송법 제48조의2·3 활용해 상대방 재산 확보. 미이행 시 1천만 원 이하 과태료.</li>\n<li><strong>5단계 — 분할 결정 + 강제집행 (변론 종결 후 1~3개월)</strong> — 분할비율·위자료 결정 후 미이행 시 가압류·강제집행. 2년 제척기간 도과 전 청구 마쳐야 함.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 종료 후 재산분할·위자료 청구 가능 범위를 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 사실혼 재산분할 7가지',
        content:
          '<p><strong style="color:#1e3a5f">사실혼 입증과 공동재산 형성 기여 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 동거 입증 자료</strong> — 주민등록등본(동일 주소), 임대차계약서(공동명의·공동거주), 우편물·고지서 수신 주소.</li>\n<li><strong>2. 혼인의 실질 자료</strong> — 결혼식 사진·청첩장·예단·예식장 영수증, 가족·지인에게 부부로 인사한 기록(SNS·카톡).</li>\n<li><strong>3. 공동재산 자료</strong> — 부동산 등기부, 차량 등록증, 예금·주식·펀드 잔고, 보험증권.</li>\n<li><strong>4. 자금 출처·기여 자료</strong> — 입출금 내역, 급여명세서, 사업소득 자료, 가사노동·육아 분담 자료.</li>\n<li><strong>5. 부당파기 입증 자료</strong> — 외도·폭행·악의 유기 자료(통신기록·진단서·CCTV·증인).</li>\n<li><strong>6. 사실혼 종료 시점 자료</strong> — 마지막 동거일·짐 정리·관계 단절 통보 기록(문자·내용증명).</li>\n<li><strong>7. 자녀 양육 자료(있는 경우)</strong> — 가족관계증명서·인지신고·양육 기여도 자료(친권·양육비 별도 청구).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼은 단순 연애·동거와 구별되어야 하므로 "혼인의 실질"을 입증하는 결혼식·예단·친지 인사 자료가 결정적. 한국가정법률상담소(1644-7077)에서 사실혼 사건 무료 상담 운영.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사실혼 청구에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>2년 제척기간 도과</strong> — 민법 제839조의2 제3항이 사실혼 재산분할에도 준용되어, 사실혼 해소일로부터 2년 내 청구해야 함(대법원 2020스561). 도과 시 청구 불가.</li>\n<li><strong>"동거 = 사실혼"이라는 오해</strong> — 단순 동거·연인관계는 사실혼 아님. 혼인의사 합치 + 부부공동생활 실질이 입증되어야 인정.</li>\n<li><strong>일방 명의 재산은 못 받는다는 오해</strong> — 일방 명의여도 동거 중 협력·기여로 형성·유지된 재산은 분할 대상으로 인정될 수 있는 사례가 있음.</li>\n<li><strong>사망 시 상속 청구</strong> — 사실혼 배우자는 민법상 상속인 아님. 다만 사망 전 형성된 공동재산에 대한 재산분할 청구권 행사 가능 여부·범위는 사례별로 다름(대법원 2020스561 등 참조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 양육비이행관리원 1644-6621(자녀 있는 경우) / 사선 변호사 조력은 사실혼 입증·기여도 산정에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 재산분할 청구권의 2년 제척기간',
        summary:
          '대법원 2020스561 사건(대법원, 2022.06.30 선고)에서 법원은 사실상 혼인관계에 있던 당사자들 사이의 재산분할청구권에도 민법 제839조의2 제3항이 정한 2년의 제척기간이 적용되며, 이 제척기간은 그 기간 내에 가정법원에 청구를 하여야 하는 출소기간이라는 취지로 판시했습니다. 사실혼 관계에 있던 부부 일방이 일방적으로 사실혼 관계를 해소한 경우에도 재산분할청구권이 인정될 수 있지만, 사실혼 해소일로부터 2년 내에 가정법원에 청구를 마쳐야 한다는 시사점이 있어, 사실혼 종료 후 재산분할을 검토 중이라면 시점 관리가 결정적이라는 점을 정리해두는 것이 좋습니다.',
        takeaway: '사실혼 재산분할은 청구권 자체는 인정될 수 있지만 해소일로부터 2년 제척기간이 엄격하게 적용되므로, 종료 시점·자료 정리·청구 접수까지 시점 관리가 가장 중요한 포인트입니다.',
      },
    ],
    faq: [
      {
        question: '동거만 했는데도 사실혼으로 인정받을 수 있나요?',
        answer:
          '<strong>단순 동거·연인관계는 사실혼이 아닙니다.</strong> 혼인의사 합치 + 부부공동생활의 실질(주소·생활비·가족 인사·결혼식 등) 모두 인정되어야 사실혼으로 검토됩니다. 사례에 따라 다르므로 입증 자료 정리가 필요.',
      },
      {
        question: '사실혼 위자료는 얼마 정도 인정되나요?',
        answer:
          '<strong>사건별 차이가 큽니다.</strong> 외도·폭력·악의 유기 같은 부당파기 사유가 입증되면 일정 금액 수준으로 검토되는 사례가 많지만, 단정형 금액은 어려움. 동거기간·기여도·파기 경위에 따라 다르게 산정.',
      },
      {
        question: '사실혼 배우자가 사망하면 재산을 받을 수 있나요?',
        answer:
          '<strong>사실혼 배우자는 민법상 상속인이 아닙니다.</strong> 다만 사망 전 형성된 공동재산에 대해 재산분할 청구권 행사 가능 여부는 사례별로 검토 필요. 유언·증여·생명보험 수익자 지정으로 사전 설계가 권장되는 상황.',
      },
      {
        question: '사실혼 재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>사실혼 해소일로부터 2년 내 가정법원에 청구해야 합니다(대법원 2020스561).</strong> 제척기간이라 도과 시 청구 불가. 종료 시점이 애매하면 마지막 동거일·짐 정리일·관계 단절 통보일을 자료로 정리해두는 것이 좋습니다.',
      },
      {
        question: '사실혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)·한국가정법률상담소(1644-7077)에서 무료 상담을 받아보실 수 있습니다.</strong> 자녀가 있으면 양육비이행관리원(1644-6621)도 활용. 사선 변호사는 사실혼 입증·기여도 산정 설계에 효과 큼.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 잠적·사망 시 청구', href: '/guide/divorce/divorce-de-facto-marriage-disappearance-death' },
      { label: '재산분할 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '재산명시·재산조회 절차', href: '/guide/divorce/divorce-property-disclosure-procedure' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-documents' },
    ],
  },
];
